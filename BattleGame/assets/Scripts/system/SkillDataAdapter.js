/**
 * 技能数据适配器
 * 抽象数据存储层，支持本地存储和服务器存储的切换
 * 
 * 使用适配器模式，可以轻松切换数据源：
 * - 本地模式：使用 localStorage
 * - 服务器模式：使用 HTTP API
 * - 混合模式：本地缓存 + 服务器同步
 */
var SkillDataAdapter = {
    // 存储模式：'local' | 'server' | 'hybrid'
    storageMode: "local", // 默认使用本地存储

    // 服务器API配置
    serverConfig: {
        baseURL: "https://your-api-server.com/api",
        timeout: 5000, // 请求超时时间（毫秒）
        retryCount: 3,  // 失败重试次数
        // 技能数据的API路径
        skillsPath: "/characters" // 技能数据路径，例如：/api/characters/:name/skills
    },

    /**
     * 设置存储模式
     * @param {string} mode - 'local' | 'server' | 'hybrid'
     */
    setStorageMode(mode) {
        if (['local', 'server', 'hybrid'].includes(mode)) {
            this.storageMode = mode;
            cc.log(`[SkillDataAdapter] 存储模式已切换为: ${mode}`);
        } else {
            cc.warn(`[SkillDataAdapter] 无效的存储模式: ${mode}`);
        }
    },

    /**
     * 初始化适配器（设置服务器配置）
     * @param {Object} config - 服务器配置 { baseURL, timeout, retryCount, ... }
     */
    init(config) {
        if (config) {
            Object.assign(this.serverConfig, config);
            cc.log(`[SkillDataAdapter] 服务器配置已更新:`, this.serverConfig);
        }
    },

    /**
     * 保存角色的技能数据（适配器方法）
     * @param {string} characterName - 角色名称
     * @param {Array} skills - 技能列表 [{ id, name, cooldown, effect, requireRage }, ...]
     * @returns {Promise<boolean>|boolean} 是否保存成功
     */
    async saveCharacterSkills(characterName, skills) {
        switch (this.storageMode) {
            case "local":
                return this._saveLocal(characterName, skills);
            case "server":
                return await this._saveServer(characterName, skills);
            case "hybrid":
                // 先保存到本地（快速响应），然后同步到服务器
                this._saveLocal(characterName, skills);
                return await this._saveServer(characterName, skills);
            default:
                return this._saveLocal(characterName, skills);
        }
    },

    /**
     * 加载角色的技能数据（适配器方法）
     * @param {string} characterName - 角色名称
     * @returns {Promise<Array>|Array} 技能列表
     */
    async loadCharacterSkills(characterName) {
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
                    cc.warn(`[SkillDataAdapter] 服务器加载失败，使用本地缓存: ${e.message}`);
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
    _saveLocal(characterName, skills) {
        try {
            const key = "character_skills_" + characterName;
            const json = JSON.stringify(skills);
            cc.sys.localStorage.setItem(key, json);
            return true;
        } catch (e) {
            cc.error(`[SkillDataAdapter] 本地保存失败: ${e.message}`);
            return false;
        }
    },

    /**
     * 本地存储：加载数据
     * @private
     */
    _loadLocal(characterName) {
        try {
            const key = "character_skills_" + characterName;
            const json = cc.sys.localStorage.getItem(key);
            return json ? JSON.parse(json) : [];
        } catch (e) {
            cc.error(`[SkillDataAdapter] 本地加载失败: ${e.message}`);
            return [];
        }
    },

    /**
     * 服务器存储：保存数据
     * @private
     */
    async _saveServer(characterName, skills) {
        try {
            const skillsArray = Array.isArray(skills) ? skills : (skills ? [skills] : []);
            const ServerConfig = require("ServerConfig");
            const baseURL = ServerConfig.getBaseURL() || this.serverConfig.baseURL;
            const url = `${baseURL}/characters/${encodeURIComponent(characterName)}/skills`;

            const response = await this._httpRequest('PUT', url, {
                skills: skillsArray
            });

            if (response.success) {
                cc.log(`[SkillDataAdapter] 服务器保存成功: ${characterName}`);
                return true;
            } else {
                throw new Error(response.message || "服务器保存失败");
            }
        } catch (e) {
            cc.error(`[SkillDataAdapter] 服务器保存失败: ${e.message}`);
            throw e;
        }
    },

    /**
     * 服务器存储：加载数据
     * @private
     */
    async _loadServer(characterName) {
        try {
            const ServerConfig = require("ServerConfig");
            const baseURL = ServerConfig.getBaseURL() || this.serverConfig.baseURL;
            const url = `${baseURL}/characters/${encodeURIComponent(characterName)}/skills`;

            const response = await this._httpRequest('GET', url);

            if (response.success && response.data) {
                cc.log(`[SkillDataAdapter] 服务器加载成功: ${characterName}`);
                return response.data.skills || [];
            } else {
                // 没有数据，返回空数组
                return [];
            }
        } catch (e) {
            cc.error(`[SkillDataAdapter] 服务器加载失败: ${e.message}`);
            throw e;
        }
    },

    /**
     * HTTP请求封装（带重试机制）
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
                    cc.warn(`[SkillDataAdapter] 请求失败，${1000 * (i + 1)}ms后重试... (${i + 1}/${this.serverConfig.retryCount})`);
                    await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
                }
            }
        }

        throw lastError || new Error("请求失败");
    }
};

module.exports = SkillDataAdapter;
