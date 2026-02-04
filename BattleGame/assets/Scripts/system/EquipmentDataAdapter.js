/**
 * 装备数据适配器
 * 抽象装备存储层，支持本地存储和服务器存储的切换
 *
 * - 本地模式：使用 localStorage
 * - 服务器模式：使用 Node/Express 提供的 HTTP API
 * - 混合模式：本地缓存 + 服务器同步
 */
var EquipmentDataAdapter = {
    // 存储模式：'local' | 'server' | 'hybrid'
    storageMode: "local", // 默认使用本地存储

    // 服务器API配置
    serverConfig: {
        baseURL: "https://your-api-server.com/api",
        timeout: 5000,
        retryCount: 3
    },

    /**
     * 切换存储模式
     * @param {string} mode - 'local' | 'server' | 'hybrid'
     */
    setStorageMode(mode) {
        if (['local', 'server', 'hybrid'].includes(mode)) {
            this.storageMode = mode;
            cc.log(`[EquipmentDataAdapter] 存储模式已切换为: ${mode}`);
        } else {
            cc.warn(`[EquipmentDataAdapter] 无效的存储模式: ${mode}`);
        }
    },

    /**
     * 保存角色装备数据（slots 数组）
     * @param {string} characterName
     * @param {Array<string|null>} slots
     * @returns {Promise<boolean>|boolean}
     */
    async saveCharacterEquipment(characterName, slots) {
        switch (this.storageMode) {
            case "local":
                return this._saveLocal(characterName, slots);
            case "server":
                return await this._saveServer(characterName, slots);
            case "hybrid":
                // 本地快速保存 + 服务器同步
                this._saveLocal(characterName, slots);
                return await this._saveServer(characterName, slots);
            default:
                return this._saveLocal(characterName, slots);
        }
    },

    /**
     * 加载角色装备数据
     * @param {string} characterName
     * @returns {Promise<{slots:Array<string|null>}>|{slots:Array<string|null>}}
     */
    async loadCharacterEquipment(characterName) {
        switch (this.storageMode) {
            case "local":
                return this._loadLocal(characterName);
            case "server":
                return await this._loadServer(characterName);
            case "hybrid":
                try {
                    const serverData = await this._loadServer(characterName);
                    // 同步到本地缓存
                    this._saveLocal(characterName, serverData.slots || []);
                    return serverData;
                } catch (e) {
                    cc.warn(`[EquipmentDataAdapter] 服务器加载失败，使用本地缓存: ${e.message}`);
                    return this._loadLocal(characterName);
                }
            default:
                return this._loadLocal(characterName);
        }
    },

    // ===== 本地存储实现 =====

    _saveLocal(characterName, slots) {
        try {
            const key = "character_equipment_" + characterName;
            const json = JSON.stringify({ slots: slots || [] });
            cc.sys.localStorage.setItem(key, json);
            return true;
        } catch (e) {
            cc.warn(`[EquipmentDataAdapter] 本地保存失败: ${e.message}`);
            return false;
        }
    },

    _loadLocal(characterName) {
        try {
            const key = "character_equipment_" + characterName;
            const json = cc.sys.localStorage.getItem(key);
            if (!json) {
                return { slots: [null, null, null] };
            }
            const data = JSON.parse(json);
            const slots = Array.isArray(data.slots) ? data.slots : [];
            return { slots };
        } catch (e) {
            cc.warn(`[EquipmentDataAdapter] 本地加载失败: ${e.message}`);
            return { slots: [null, null, null] };
        }
    },

    // ===== 服务器存储实现 =====

    async _saveServer(characterName, slots) {
        try {
            const ServerConfig = require("ServerConfig");
            const baseURL = ServerConfig.getBaseURL() || this.serverConfig.baseURL;
            const url = `${baseURL}/characters/${encodeURIComponent(characterName)}/equipment`;

            const response = await this._httpRequest('PUT', url, {
                equipment: { slots: slots || [] }
            });

            if (response.success) {
                cc.log(`[EquipmentDataAdapter] 服务器保存成功: ${characterName}`);
                return true;
            } else {
                throw new Error(response.message || "服务器保存失败");
            }
        } catch (e) {
            cc.error(`[EquipmentDataAdapter] 服务器保存失败: ${e.message}`);
            throw e;
        }
    },

    async _loadServer(characterName) {
        try {
            const ServerConfig = require("ServerConfig");
            const baseURL = ServerConfig.getBaseURL() || this.serverConfig.baseURL;
            const url = `${baseURL}/characters/${encodeURIComponent(characterName)}/equipment`;

            const response = await this._httpRequest('GET', url);

            if (response.success && response.data && response.data.equipment) {
                cc.log(`[EquipmentDataAdapter] 服务器加载成功: ${characterName}`);
                return response.data.equipment;
            }

            // 没有数据时返回默认值
            return { slots: [null, null, null] };
        } catch (e) {
            cc.error(`[EquipmentDataAdapter] 服务器加载失败: ${e.message}`);
            throw e;
        }
    },

    /**
     * HTTP 请求封装（带重试）
     * @private
     */
    async _httpRequest(method, url, data = null) {
        const ServerConfig = require("ServerConfig");
        const headers = Object.assign(
            { 'Content-Type': 'application/json' },
            ServerConfig.getAuthHeaders() || {}
        );

        let lastError = null;
        for (let i = 0; i < this.serverConfig.retryCount; i++) {
            try {
                const options = {
                    method: method,
                    headers: headers,
                    timeout: this.serverConfig.timeout
                };

                if (data && (method === 'POST' || method === 'PUT')) {
                    options.body = JSON.stringify(data);
                }

                const response = await fetch(url, options);
                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.message || `HTTP ${response.status}`);
                }

                return result;
            } catch (error) {
                lastError = error;
                if (i < this.serverConfig.retryCount - 1) {
                    cc.warn(`[EquipmentDataAdapter] 请求失败，${1000 * (i + 1)}ms 后重试... (${i + 1}/${this.serverConfig.retryCount})`);
                    await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
                }
            }
        }

        throw lastError || new Error("请求失败");
    }
};

module.exports = EquipmentDataAdapter;

