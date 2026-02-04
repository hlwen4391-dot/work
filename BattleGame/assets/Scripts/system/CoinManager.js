/**
 * 金币系统管理器
 * 统一管理金币的增减，支持本地存储和服务器存储
 */
const ServerConfig = require("ServerConfig");

var CoinManager = {
    // 存储键
    COIN_KEY: "player_coins",

    // 默认金币数量
    DEFAULT_COINS: 1000,

    /**
     * 获取当前金币数量
     * @returns {Promise<number>|number} 金币数量（服务器模式下返回Promise）
     */
    async getCoins() {
        // 如果使用服务器模式
        if (ServerConfig.getStorageMode() === 'server' || ServerConfig.getStorageMode() === 'hybrid') {
            try {
                // ⭐ 修复：getBaseURL()已经包含/api，所以不需要再加/api
                const response = await fetch(`${ServerConfig.getBaseURL()}/coins`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        ...ServerConfig.getAuthHeaders()
                    }
                });

                if (!response.ok) {
                    throw new Error(`获取金币失败: ${response.status}`);
                }

                const data = await response.json();
                // 仅当接口未返回数值时用默认值，0 要保留为 0
                return (data.coins !== undefined && data.coins !== null) ? data.coins : this.DEFAULT_COINS;
            } catch (error) {
                cc.error(`[CoinManager] 获取金币失败:`, error);
                // 服务器失败时，如果是hybrid模式，尝试从本地获取
                if (ServerConfig.getStorageMode() === 'hybrid') {
                    return this._getCoinsFromLocal();
                }
                return this.DEFAULT_COINS;
            }
        }

        // 本地模式
        return this._getCoinsFromLocal();
    },

    /**
     * 从本地存储获取金币
     * @private
     * @returns {number} 金币数量
     */
    _getCoinsFromLocal() {
        const coinsStr = cc.sys.localStorage.getItem(this.COIN_KEY);
        if (coinsStr) {
            const coins = parseInt(coinsStr, 10);
            return isNaN(coins) ? this.DEFAULT_COINS : coins;
        }
        return this.DEFAULT_COINS;
    },

    /**
     * 增加金币
     * @param {number} amount - 增加的数量
     * @returns {Promise<boolean>|boolean} 是否成功（服务器模式下返回Promise）
     */
    async addCoins(amount) {
        if (amount <= 0) {
            cc.warn(`[CoinManager] 增加金币数量无效: ${amount}`);
            return false;
        }

        // 如果使用服务器模式
        if (ServerConfig.getStorageMode() === 'server' || ServerConfig.getStorageMode() === 'hybrid') {
            try {
                // ⭐ 修复：getBaseURL()已经包含/api，所以不需要再加/api
                const response = await fetch(`${ServerConfig.getBaseURL()}/coins/add`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        ...ServerConfig.getAuthHeaders()
                    },
                    body: JSON.stringify({ amount })
                });

                if (!response.ok) {
                    throw new Error(`增加金币失败: ${response.status}`);
                }

                const data = await response.json();
                cc.log(`[CoinManager] ✓ 增加金币成功: +${amount}, 当前: ${data.coins}`);

                // 如果是hybrid模式，也更新本地
                if (ServerConfig.getStorageMode() === 'hybrid') {
                    this._saveCoinsToLocal(data.coins);
                }

                return true;
            } catch (error) {
                cc.error(`[CoinManager] 增加金币失败:`, error);
                // 服务器失败时，如果是hybrid模式，尝试本地操作
                if (ServerConfig.getStorageMode() === 'hybrid') {
                    return this._addCoinsToLocal(amount);
                }
                return false;
            }
        }

        // 本地模式
        return this._addCoinsToLocal(amount);
    },

    /**
     * 减少金币（购买商品时使用）
     * @param {number} amount - 减少的数量
     * @returns {Promise<boolean>|boolean} 是否成功（服务器模式下返回Promise）
     */
    async spendCoins(amount) {
        if (amount <= 0) {
            cc.warn(`[CoinManager] 减少金币数量无效: ${amount}`);
            return false;
        }

        // 先检查金币是否足够
        const currentCoins = await this.getCoins();
        if (currentCoins < amount) {
            cc.warn(`[CoinManager] 金币不足: 当前 ${currentCoins}, 需要 ${amount}`);
            return false;
        }

        // 如果使用服务器模式
        if (ServerConfig.getStorageMode() === 'server' || ServerConfig.getStorageMode() === 'hybrid') {
            try {
                // ⭐ 修复：getBaseURL()已经包含/api，所以不需要再加/api
                const response = await fetch(`${ServerConfig.getBaseURL()}/coins/spend`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        ...ServerConfig.getAuthHeaders()
                    },
                    body: JSON.stringify({ amount })
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    if (response.status === 400 && errorData.error === 'insufficient_coins') {
                        cc.warn(`[CoinManager] 金币不足: 当前 ${errorData.currentCoins}, 需要 ${amount}`);
                    } else {
                        throw new Error(`减少金币失败: ${response.status}`);
                    }
                    return false;
                }

                const data = await response.json();
                cc.log(`[CoinManager] ✓ 减少金币成功: -${amount}, 当前: ${data.coins}`);

                // 如果是hybrid模式，也更新本地
                if (ServerConfig.getStorageMode() === 'hybrid') {
                    this._saveCoinsToLocal(data.coins);
                }

                return true;
            } catch (error) {
                cc.error(`[CoinManager] 减少金币失败:`, error);
                // 服务器失败时，如果是hybrid模式，尝试本地操作
                if (ServerConfig.getStorageMode() === 'hybrid') {
                    return this._spendCoinsFromLocal(amount);
                }
                return false;
            }
        }

        // 本地模式
        return this._spendCoinsFromLocal(amount);
    },

    /**
     * 本地增加金币
     * @private
     * @param {number} amount - 增加的数量
     * @returns {boolean} 是否成功
     */
    _addCoinsToLocal(amount) {
        const currentCoins = this._getCoinsFromLocal();
        const newCoins = currentCoins + amount;
        this._saveCoinsToLocal(newCoins);
        cc.log(`[CoinManager] ✓ 增加金币成功: +${amount}, 当前: ${newCoins}`);
        return true;
    },

    /**
     * 本地减少金币
     * @private
     * @param {number} amount - 减少的数量
     * @returns {boolean} 是否成功
     */
    _spendCoinsFromLocal(amount) {
        const currentCoins = this._getCoinsFromLocal();
        if (currentCoins < amount) {
            cc.warn(`[CoinManager] 金币不足: 当前 ${currentCoins}, 需要 ${amount}`);
            return false;
        }
        const newCoins = currentCoins - amount;
        this._saveCoinsToLocal(newCoins);
        cc.log(`[CoinManager] ✓ 减少金币成功: -${amount}, 当前: ${newCoins}`);
        return true;
    },

    /**
     * 保存金币到本地存储
     * @private
     * @param {number} coins - 金币数量
     */
    _saveCoinsToLocal(coins) {
        cc.sys.localStorage.setItem(this.COIN_KEY, coins.toString());
    }
};

module.exports = CoinManager;
