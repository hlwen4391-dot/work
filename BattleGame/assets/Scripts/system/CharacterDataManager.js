/**
 * 角色数据管理器
 * 负责保存和加载角色的等级、经验值等数据
 */
var CharacterDataManager = {
    // 存储键前缀
    STORAGE_PREFIX: "character_data_",

    /**
     * 保存角色数据
     * @param {string} characterName - 角色名称（唯一标识）
     * @param {Object} data - 角色数据 { level, exp, ... }
     */
    saveCharacterData(characterName, data) {
        if (!characterName) {
            cc.warn("[CharacterDataManager] 角色名称为空，无法保存数据");
            return false;
        }

        try {
            const key = this.STORAGE_PREFIX + characterName;
            const json = JSON.stringify(data);
            cc.sys.localStorage.setItem(key, json);
            cc.log(`[CharacterDataManager] 保存角色数据: ${characterName}`, data);
            return true;
        } catch (e) {
            cc.error(`[CharacterDataManager] 保存失败: ${e.message}`);
            return false;
        }
    },

    /**
     * 加载角色数据
     * @param {string} characterName - 角色名称
     * @returns {Object|null} 角色数据 { level, exp, ... } 或 null
     */
    loadCharacterData(characterName) {
        if (!characterName) {
            return null;
        }

        try {
            const key = this.STORAGE_PREFIX + characterName;
            const json = cc.sys.localStorage.getItem(key);
            if (json) {
                const data = JSON.parse(json);
                cc.log(`[CharacterDataManager] 加载角色数据: ${characterName}`, data);
                return data;
            }
            return null;
        } catch (e) {
            cc.error(`[CharacterDataManager] 加载失败: ${e.message}`);
            return null;
        }
    },

    /**
     * 保存角色的等级和经验值
     * @param {cc.Node} characterNode - 角色节点
     */
    saveCharacterLevel(characterNode) {
        const StatsComponent = require("StatsComponent");
        const stats = characterNode.getComponent(StatsComponent);

        if (!stats) {
            cc.warn(`[CharacterDataManager] 节点 ${characterNode.name} 没有 StatsComponent 组件`);
            return false;
        }

        const characterName = characterNode.name;
        const data = {
            level: stats.level,
            exp: stats.exp,
            baseHp: stats.baseHp,
            baseAttack: stats.baseAttack,
            baseDefense: stats.baseDefense,
            baseSpeed: stats.baseSpeed,
            baseCrit: stats.baseCrit,
            baseMiss: stats.baseMiss,
            saveTime: Date.now()
        };

        return this.saveCharacterData(characterName, data);
    },

    /**
     * 加载角色的等级和经验值
     * @param {string} characterName - 角色名称
     * @returns {Object|null} { level, exp, ... } 或 null
     */
    loadCharacterLevel(characterName) {
        return this.loadCharacterData(characterName);
    },

    /**
     * 删除角色数据
     * @param {string} characterName - 角色名称
     */
    deleteCharacterData(characterName) {
        if (!characterName) {
            return false;
        }

        try {
            const key = this.STORAGE_PREFIX + characterName;
            cc.sys.localStorage.removeItem(key);
            cc.log(`[CharacterDataManager] 删除角色数据: ${characterName}`);
            return true;
        } catch (e) {
            cc.error(`[CharacterDataManager] 删除失败: ${e.message}`);
            return false;
        }
    },

    /**
     * 获取所有保存的角色数据
     * @returns {Object} { characterName: data, ... }
     */
    getAllCharacterData() {
        const result = {};
        try {
            const keys = Object.keys(cc.sys.localStorage);
            keys.forEach(key => {
                if (key.startsWith(this.STORAGE_PREFIX)) {
                    const characterName = key.replace(this.STORAGE_PREFIX, "");
                    const data = this.loadCharacterData(characterName);
                    if (data) {
                        result[characterName] = data;
                    }
                }
            });
        } catch (e) {
            cc.error(`[CharacterDataManager] 获取所有数据失败: ${e.message}`);
        }
        return result;
    },

    /**
     * 清除所有角色数据
     */
    clearAllCharacterData() {
        try {
            const keys = Object.keys(cc.sys.localStorage);
            keys.forEach(key => {
                if (key.startsWith(this.STORAGE_PREFIX)) {
                    cc.sys.localStorage.removeItem(key);
                }
            });
            cc.log("[CharacterDataManager] 已清除所有角色数据");
            return true;
        } catch (e) {
            cc.error(`[CharacterDataManager] 清除失败: ${e.message}`);
            return false;
        }
    },

    /**
     * 重置角色的等级和经验值（重置为1级，0经验）
     * @param {string} characterName - 角色名称
     * @returns {boolean} 是否重置成功
     */
    resetCharacterLevel(characterName) {
        if (!characterName) {
            return false;
        }

        // 删除保存的数据（下次加载时会使用默认值1级，0经验）
        return this.deleteCharacterData(characterName);
    }
};

module.exports = CharacterDataManager;
