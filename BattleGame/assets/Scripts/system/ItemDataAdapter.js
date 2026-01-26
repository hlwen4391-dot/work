/**
 * 道具数据适配器
 * 抽象数据存储层，支持本地存储和服务器存储的切换
 * 
 * 使用适配器模式，可以轻松切换数据源：
 * - 本地模式：使用 localStorage
 * - 服务器模式：使用 HTTP API
 * - 混合模式：本地缓存 + 服务器同步
 */
var ItemDataAdapter = {
    // 存储模式：'local' | 'server' | 'hybrid'
    storageMode: "local", // 默认使用本地存储

    // 服务器API配置
    serverConfig: {
        baseURL: "https://your-api-server.com/api",
        timeout: 5000, // 请求超时时间（毫秒）
        retryCount: 3,  // 失败重试次数
        // 全局道具栏的API路径（如果服务器需要特殊处理）
        globalInventoryPath: "/inventory" // 全局道具栏路径，例如：/api/inventory
    },

    /**
     * 设置存储模式
     * @param {string} mode - 'local' | 'server' | 'hybrid'
     */
    setStorageMode(mode) {
        if (['local', 'server', 'hybrid'].includes(mode)) {
            this.storageMode = mode;
            cc.log(`[ItemDataAdapter] 存储模式已切换为: ${mode}`);
        } else {
            cc.warn(`[ItemDataAdapter] 无效的存储模式: ${mode}`);
        }
    },

    /**
     * 保存角色的道具数据（适配器方法）
     * @param {string} characterName - 角色名称
     * @param {Array} items - 道具列表
     * @returns {Promise<boolean>} 是否保存成功
     */
    async saveCharacterItems(characterName, items) {
        switch (this.storageMode) {
            case "local":
                return this._saveLocal(characterName, items);
            case "server":
                return await this._saveServer(characterName, items);
            case "hybrid":
                // 先保存到本地（快速响应），然后同步到服务器
                this._saveLocal(characterName, items);
                return await this._saveServer(characterName, items);
            default:
                return this._saveLocal(characterName, items);
        }
    },

    /**
     * 加载角色的道具数据（适配器方法）
     * @param {string} characterName - 角色名称
     * @returns {Promise<Array>} 道具列表
     */
    async loadCharacterItems(characterName) {
        switch (this.storageMode) {
            case "local":
                return this._loadLocal(characterName);
            case "server":
                return await this._loadServer(characterName);
            case "hybrid":
                // 先从服务器加载，失败则使用本地缓存
                try {
                    const serverData = await this._loadServer(characterName);
                    // 同步到本地缓存
                    this._saveLocal(characterName, serverData);
                    return serverData;
                } catch (e) {
                    cc.warn(`[ItemDataAdapter] 服务器加载失败，使用本地缓存: ${e.message}`);
                    return this._loadLocal(characterName);
                }
            default:
                return this._loadLocal(characterName);
        }
    },

    /**
     * 本地存储：保存数据
     * @private
     */
    _saveLocal(characterName, items) {
        try {
            const key = "character_items_" + characterName;
            const json = JSON.stringify(items);
            cc.sys.localStorage.setItem(key, json);
            return true;
        } catch (e) {
            cc.error(`[ItemDataAdapter] 本地保存失败: ${e.message}`);
            return false;
        }
    },

    /**
     * 本地存储：加载数据
     * @private
     */
    _loadLocal(characterName) {
        try {
            const key = "character_items_" + characterName;
            const json = cc.sys.localStorage.getItem(key);
            return json ? JSON.parse(json) : [];
        } catch (e) {
            cc.error(`[ItemDataAdapter] 本地加载失败: ${e.message}`);
            return [];
        }
    },

    /**
     * 服务器存储：保存数据
     * @private
     */
    async _saveServer(characterName, items) {
        try {
            // 如果是全局道具栏，使用特殊路径
            let url;
            if (characterName === "shared_inventory") {
                url = `${this.serverConfig.baseURL}${this.serverConfig.globalInventoryPath || "/inventory"}`;
            } else {
                url = `${this.serverConfig.baseURL}/characters/${characterName}/items`;
            }

            const response = await this._httpRequest('PUT', url, {
                items: items
            });

            if (response.success) {
                cc.log(`[ItemDataAdapter] 服务器保存成功: ${characterName}`);
                return true;
            } else {
                throw new Error(response.message || "服务器保存失败");
            }
        } catch (e) {
            cc.error(`[ItemDataAdapter] 服务器保存失败: ${e.message}`);
            throw e;
        }
    },

    /**
     * 服务器存储：加载数据
     * @private
     */
    async _loadServer(characterName) {
        try {
            // 如果是全局道具栏，使用特殊路径
            let url;
            if (characterName === "shared_inventory") {
                url = `${this.serverConfig.baseURL}${this.serverConfig.globalInventoryPath || "/inventory"}`;
            } else {
                url = `${this.serverConfig.baseURL}/characters/${characterName}/items`;
            }

            const response = await this._httpRequest('GET', url);

            if (response.success && response.data) {
                cc.log(`[ItemDataAdapter] 服务器加载成功: ${characterName}`);
                return response.data.items || [];
            } else {
                throw new Error(response.message || "服务器加载失败");
            }
        } catch (e) {
            cc.error(`[ItemDataAdapter] 服务器加载失败: ${e.message}`);
            throw e;
        }
    },

    /**
     * HTTP请求封装（支持重试）
     * @private
     * @param {string} method - HTTP方法
     * @param {string} url - 请求URL
     * @param {Object} data - 请求数据
     * @returns {Promise<Object>} 响应数据
     */
    _httpRequest(method, url, data = null) {
        return new Promise((resolve, reject) => {
            let retryCount = 0;

            const doRequest = () => {
                const xhr = new XMLHttpRequest();
                xhr.open(method, url, true);
                xhr.setRequestHeader('Content-Type', 'application/json');

                // 设置超时
                xhr.timeout = this.serverConfig.timeout;

                xhr.onload = () => {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        try {
                            const response = JSON.parse(xhr.responseText);
                            resolve(response);
                        } catch (e) {
                            resolve({ success: true, data: xhr.responseText });
                        }
                    } else {
                        if (retryCount < this.serverConfig.retryCount) {
                            retryCount++;
                            cc.log(`[ItemDataAdapter] 请求失败，重试 ${retryCount}/${this.serverConfig.retryCount}`);
                            setTimeout(doRequest, 1000 * retryCount); // 递增延迟
                        } else {
                            reject(new Error(`HTTP ${xhr.status}: ${xhr.statusText}`));
                        }
                    }
                };

                xhr.onerror = () => {
                    if (retryCount < this.serverConfig.retryCount) {
                        retryCount++;
                        cc.log(`[ItemDataAdapter] 网络错误，重试 ${retryCount}/${this.serverConfig.retryCount}`);
                        setTimeout(doRequest, 1000 * retryCount);
                    } else {
                        reject(new Error("网络请求失败"));
                    }
                };

                xhr.ontimeout = () => {
                    if (retryCount < this.serverConfig.retryCount) {
                        retryCount++;
                        cc.log(`[ItemDataAdapter] 请求超时，重试 ${retryCount}/${this.serverConfig.retryCount}`);
                        setTimeout(doRequest, 1000 * retryCount);
                    } else {
                        reject(new Error("请求超时"));
                    }
                };

                if (data) {
                    xhr.send(JSON.stringify(data));
                } else {
                    xhr.send();
                }
            };

            doRequest();
        });
    }
};

module.exports = ItemDataAdapter;
