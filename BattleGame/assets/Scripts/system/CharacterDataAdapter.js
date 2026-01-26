/**
 * 角色数据适配器
 * 抽象数据存储层，支持本地存储和服务器存储的切换
 * 
 * 使用适配器模式，可以轻松切换数据源：
 * - 本地模式：使用 localStorage
 * - 服务器模式：使用 HTTP API
 * - 混合模式：本地缓存 + 服务器同步
 */
var CharacterDataAdapter = {
    // 存储模式：'local' | 'server' | 'hybrid'
    storageMode: "local", // 默认使用本地存储

    // 服务器API配置
    serverConfig: {
        baseURL: "https://your-api-server.com/api",
        baseURLForAll: null, // 获取所有角色数据的服务器地址（如果为null，则使用baseURL）
        timeout: 5000, // 请求超时时间（毫秒）
        retryCount: 3,  // 失败重试次数
        // 角色数据的API路径
        characterDataPath: "/characters", // 角色数据路径，例如：/api/characters
        // 请求头（用于身份验证等）
        headers: null
    },

    /**
     * 设置存储模式
     * @param {string} mode - 'local' | 'server' | 'hybrid'
     */
    setStorageMode(mode) {
        if (['local', 'server', 'hybrid'].includes(mode)) {
            this.storageMode = mode;
            cc.log(`[CharacterDataAdapter] 存储模式已切换为: ${mode}`);
        } else {
            cc.warn(`[CharacterDataAdapter] 无效的存储模式: ${mode}`);
        }
    },

    /**
     * 保存角色数据（适配器方法）
     * @param {string} characterName - 角色名称
     * @param {Object} data - 角色数据 { level, exp, baseHp, ... }
     * @returns {Promise<boolean>|boolean} 是否保存成功
     */
    async saveCharacterData(characterName, data) {
        switch (this.storageMode) {
            case "local":
                return this._saveLocal(characterName, data);
            case "server":
                return await this._saveServer(characterName, data);
            case "hybrid":
                // 先保存到本地（快速响应），然后同步到服务器
                this._saveLocal(characterName, data);
                return await this._saveServer(characterName, data);
            default:
                return this._saveLocal(characterName, data);
        }
    },

    /**
     * 加载所有角色数据（适配器方法）
     * @returns {Promise<Object>|Object} 所有角色数据 { characterName: data, ... }
     */
    async loadAllCharacterData() {
        switch (this.storageMode) {
            case "local":
                return this._loadAllLocal();
            case "server":
                return await this._loadAllServer();
            case "hybrid":
                // 先从服务器加载，失败则使用本地缓存
                try {
                    const serverData = await this._loadAllServer();
                    // 同步到本地缓存
                    if (serverData) {
                        Object.keys(serverData).forEach(characterName => {
                            this._saveLocal(characterName, serverData[characterName]);
                        });
                    }
                    return serverData;
                } catch (e) {
                    cc.warn(`[CharacterDataAdapter] 服务器加载失败，使用本地缓存: ${e.message}`);
                    return this._loadAllLocal();
                }
            default:
                return this._loadAllLocal();
        }
    },

    /**
     * 加载角色数据（适配器方法）
     * @param {string} characterName - 角色名称
     * @returns {Promise<Object|null>|Object|null} 角色数据或null
     */
    async loadCharacterData(characterName) {
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
                    cc.warn(`[CharacterDataAdapter] 服务器加载失败，使用本地缓存: ${e.message}`);
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
    _saveLocal(characterName, data) {
        try {
            const key = "character_data_" + characterName;
            const json = JSON.stringify(data);
            cc.sys.localStorage.setItem(key, json);
            return true;
        } catch (e) {
            cc.error(`[CharacterDataAdapter] 本地保存失败: ${e.message}`);
            return false;
        }
    },

    /**
     * 本地存储：加载数据
     * @private
     */
    _loadLocal(characterName) {
        try {
            const key = "character_data_" + characterName;
            const json = cc.sys.localStorage.getItem(key);
            return json ? JSON.parse(json) : null;
        } catch (e) {
            cc.error(`[CharacterDataAdapter] 本地加载失败: ${e.message}`);
            return null;
        }
    },

    /**
     * 本地存储：加载所有数据
     * @private
     */
    _loadAllLocal() {
        const result = {};
        try {
            const keys = Object.keys(cc.sys.localStorage);
            keys.forEach(key => {
                if (key.startsWith("character_data_")) {
                    const characterName = key.replace("character_data_", "");
                    const data = this._loadLocal(characterName);
                    if (data) {
                        result[characterName] = data;
                    }
                }
            });
        } catch (e) {
            cc.error(`[CharacterDataAdapter] 本地加载所有数据失败: ${e.message}`);
        }
        return result;
    },

    /**
     * 服务器存储：保存数据
     * @private
     */
    async _saveServer(characterName, data) {
        try {
            const url = `${this.serverConfig.baseURL}${this.serverConfig.characterDataPath}/${characterName}`;
            
            const response = await this._httpRequest('PUT', url, data);

            if (response.success) {
                cc.log(`[CharacterDataAdapter] 服务器保存成功: ${characterName}`);
                return true;
            } else {
                throw new Error(response.message || "服务器保存失败");
            }
        } catch (e) {
            cc.error(`[CharacterDataAdapter] 服务器保存失败: ${e.message}`);
            throw e;
        }
    },

    /**
     * 服务器存储：加载数据
     * @private
     */
    async _loadServer(characterName) {
        try {
            const url = `${this.serverConfig.baseURL}${this.serverConfig.characterDataPath}/${characterName}`;
            
            const response = await this._httpRequest('GET', url);

            if (response.success && response.data) {
                cc.log(`[CharacterDataAdapter] 服务器加载成功: ${characterName}`);
                return response.data;
            } else if (response.success && !response.data) {
                // 服务器返回成功但没有数据，说明角色不存在
                return null;
            } else {
                throw new Error(response.message || "服务器加载失败");
            }
        } catch (e) {
            cc.error(`[CharacterDataAdapter] 服务器加载失败: ${e.message}`);
            throw e;
        }
    },

    /**
     * 服务器存储：加载所有数据
     * @private
     */
    async _loadAllServer() {
        try {
            // 如果配置了baseURLForAll，使用它；否则使用baseURL
            const baseURL = this.serverConfig.baseURLForAll || this.serverConfig.baseURL;
            const url = `${baseURL}${this.serverConfig.characterDataPath}`;
            
            const response = await this._httpRequest('GET', url);

            if (response.success && response.data) {
                cc.log(`[CharacterDataAdapter] 服务器加载所有角色数据成功`);
                return response.data || {};
            } else {
                throw new Error(response.message || "服务器加载失败");
            }
        } catch (e) {
            cc.error(`[CharacterDataAdapter] 服务器加载所有数据失败: ${e.message}`);
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
                
                // 添加自定义请求头（用于身份验证等）
                if (this.serverConfig.headers) {
                    Object.keys(this.serverConfig.headers).forEach(key => {
                        xhr.setRequestHeader(key, this.serverConfig.headers[key]);
                    });
                }

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
                            cc.log(`[CharacterDataAdapter] 请求失败，重试 ${retryCount}/${this.serverConfig.retryCount}`);
                            setTimeout(doRequest, 1000 * retryCount); // 递增延迟
                        } else {
                            reject(new Error(`HTTP ${xhr.status}: ${xhr.statusText}`));
                        }
                    }
                };

                xhr.onerror = () => {
                    if (retryCount < this.serverConfig.retryCount) {
                        retryCount++;
                        cc.log(`[CharacterDataAdapter] 网络错误，重试 ${retryCount}/${this.serverConfig.retryCount}`);
                        setTimeout(doRequest, 1000 * retryCount);
                    } else {
                        reject(new Error("网络请求失败"));
                    }
                };

                xhr.ontimeout = () => {
                    if (retryCount < this.serverConfig.retryCount) {
                        retryCount++;
                        cc.log(`[CharacterDataAdapter] 请求超时，重试 ${retryCount}/${this.serverConfig.retryCount}`);
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

module.exports = CharacterDataAdapter;
