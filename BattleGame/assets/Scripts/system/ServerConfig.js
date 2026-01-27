/**
 * 服务器配置管理器
 * 统一管理所有系统的服务器配置
 */
var ServerConfig = {
    // 服务器基础URL
    baseURL: "https://your-api-server.com/api",

    // 请求超时时间（毫秒）
    timeout: 5000,

    // 失败重试次数
    retryCount: 3,

    // 身份验证配置
    auth: {
        enabled: false, // 是否启用身份验证
        token: null,    // 用户token
        headerName: "Authorization", // 请求头名称
        headerValue: null // 请求头值，例如："Bearer {token}"
    },

    // 所有角色数据的服务器地址（可选，如果为null则使用baseURL）
    baseURLForAll: null,

    /**
     * 初始化服务器配置
     * @param {Object} config - 配置对象
     */
    init(config) {
        if (config.baseURL) this.baseURL = config.baseURL;
        if (config.baseURLForAll !== undefined) this.baseURLForAll = config.baseURLForAll;
        if (config.timeout) this.timeout = config.timeout;
        if (config.retryCount) this.retryCount = config.retryCount;
        if (config.auth) {
            this.auth = { ...this.auth, ...config.auth };
        }

        // 更新所有适配器的配置
        this._updateAdapters();

        cc.log("[ServerConfig] 服务器配置已初始化", {
            baseURL: this.baseURL,
            timeout: this.timeout,
            retryCount: this.retryCount,
            authEnabled: this.auth.enabled
        });
    },

    /**
     * 更新所有适配器的配置
     * @private
     */
    _updateAdapters() {
        // 更新道具系统适配器
        try {
            const ItemDataAdapter = require("ItemDataAdapter");
            ItemDataAdapter.serverConfig.baseURL = this.baseURL;
            ItemDataAdapter.serverConfig.timeout = this.timeout;
            ItemDataAdapter.serverConfig.retryCount = this.retryCount;

            // 设置身份验证头
            if (this.auth.enabled && this.auth.headerValue) {
                ItemDataAdapter.serverConfig.headers = {
                    [this.auth.headerName]: this.auth.headerValue
                };
            } else {
                ItemDataAdapter.serverConfig.headers = null;
            }
        } catch (e) {
            cc.warn("[ServerConfig] ItemDataAdapter 未找到，跳过配置");
        }

        // 更新等级系统适配器
        try {
            const CharacterDataAdapter = require("CharacterDataAdapter");
            CharacterDataAdapter.serverConfig.baseURL = this.baseURL;
            CharacterDataAdapter.serverConfig.baseURLForAll = this.baseURLForAll;
            CharacterDataAdapter.serverConfig.timeout = this.timeout;
            CharacterDataAdapter.serverConfig.retryCount = this.retryCount;

            // 设置身份验证头
            if (this.auth.enabled && this.auth.headerValue) {
                CharacterDataAdapter.serverConfig.headers = {
                    [this.auth.headerName]: this.auth.headerValue
                };
            } else {
                CharacterDataAdapter.serverConfig.headers = null;
            }
        } catch (e) {
            cc.warn("[ServerConfig] CharacterDataAdapter 未找到，跳过配置");
        }
    },

    /**
     * 设置用户token
     * @param {string} token - 用户token
     */
    setAuthToken(token) {
        this.auth.token = token;
        this.auth.headerValue = `Bearer ${token}`;//设置请求头值
        this.auth.enabled = true;//设置是否启用身份验证
        this._updateAdapters();//更新所有适配器的配置
        cc.log("[ServerConfig] 用户token已设置");
    },

    /**
     * 清除用户token
     */
    clearAuthToken() {
        this.auth.token = null;
        this.auth.headerValue = null;
        this.auth.enabled = false;
        this._updateAdapters();
        cc.log("[ServerConfig] 用户token已清除");
    }
};

module.exports = ServerConfig;
