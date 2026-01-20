/**
 * 等级系统
 * 处理经验获取、升级逻辑和属性变化
 */
const LevelConfig = require("LevelConfig");
const CharacterDataManager = require("CharacterDataManager");

var LevelSystem = {
    /**
     * 给角色添加经验值
     * @param {cc.Node} characterNode - 角色节点
     * @param {number} expValue - 经验值
     * @returns {Object} 升级信息 { leveledUp: boolean, oldLevel: number, newLevel: number, statChanges: Object }
     */
    addExp(characterNode, expValue) {
        const StatsComponent = require("StatsComponent");
        const stats = characterNode.getComponent(StatsComponent);

        if (!stats) {
            cc.warn(`[LevelSystem] 角色节点 ${characterNode.name} 没有 StatsComponent 组件`);
            return null;
        }

        // 检查是否已达到最大等级
        if (stats.isMaxLevel()) {
            cc.log(`[LevelSystem] ${characterNode.name} 已达到最大等级 ${stats.level}，无法继续升级`);
            return {
                leveledUp: false,
                oldLevel: stats.level,
                newLevel: stats.level,
                statChanges: null,
                message: `已达到最大等级 ${stats.level}`
            };
        }

        const oldLevel = stats.level;
        const oldStats = {
            maxHp: stats.maxHp,
            attack: stats.attack,
            defense: stats.defense,
            speed: stats.speed,
            crit: stats.crit,
            miss: stats.miss
        };

        // 添加经验值（会自动处理升级）
        cc.log(`[LevelSystem] ${characterNode.name} 当前等级: ${oldLevel}, 当前经验: ${stats.exp}, 添加经验: ${expValue}`);
        const leveledUp = stats.addExp(expValue);
        cc.log(`[LevelSystem] ${characterNode.name} 添加经验后 - 等级: ${stats.level}, 经验: ${stats.exp}, 是否升级: ${leveledUp}`);

        const result = {
            leveledUp: leveledUp,
            oldLevel: oldLevel,
            newLevel: stats.level,
            statChanges: null,
            message: leveledUp ? `升级到 ${stats.level} 级！` : `获得 ${expValue} 经验值`
        };

        // 如果升级了，计算属性变化
        if (leveledUp) {
            result.statChanges = {
                maxHp: stats.maxHp - oldStats.maxHp,
                attack: stats.attack - oldStats.attack,
                defense: stats.defense - oldStats.defense,
                speed: stats.speed - oldStats.speed,
                crit: stats.crit - oldStats.crit,
                miss: stats.miss - oldStats.miss
            };
            cc.log(`[LevelSystem] ${characterNode.name} 升级！属性变化:`, result.statChanges);
        } else {
            // 计算距离下一级还需要多少经验
            const currentLevelExp = LevelConfig.getExpForLevel(stats.level);
            const nextLevelExp = LevelConfig.getExpForLevel(stats.level + 1);
            const expNeeded = nextLevelExp - stats.exp;
            cc.log(`[LevelSystem] ${characterNode.name} 未升级，距离下一级还需要 ${expNeeded} 经验值`);
        }

        // 保存角色数据到本地存储
        CharacterDataManager.saveCharacterLevel(characterNode);

        return result;
    },

    /**
     * 使用经验道具
     * @param {cc.Node} characterNode - 角色节点
     * @param {Object} expItem - 经验道具 { id: string, name: string, expValue: number }
     * @returns {Object} 使用结果
     */
    useExpItem(characterNode, expItem) {
        if (!expItem || !expItem.expValue) {
            return {
                success: false,
                message: "无效的经验道具"
            };
        }

        const result = this.addExp(characterNode, expItem.expValue);

        return {
            success: true,
            ...result,
            itemName: expItem.name || expItem.id
        };
    },

    /**
     * 获取角色的等级信息
     * @param {cc.Node} characterNode - 角色节点
     * @returns {Object} 等级信息
     */
    getLevelInfo(characterNode) {
        const StatsComponent = require("StatsComponent");
        const stats = characterNode.getComponent(StatsComponent);

        if (!stats) {
            return null;
        }

        const currentLevelExp = LevelConfig.getExpForLevel(stats.level);
        const nextLevelExp = LevelConfig.getExpForLevel(stats.level + 1);
        const expInCurrentLevel = stats.exp - currentLevelExp;
        const expToNext = nextLevelExp - currentLevelExp;
        const progress = LevelConfig.getExpProgress(stats.exp);

        return {
            level: stats.level,
            exp: stats.exp,
            expInCurrentLevel: expInCurrentLevel,
            expToNext: expToNext,
            progress: progress,
            isMaxLevel: stats.isMaxLevel(),
            baseStats: {
                hp: stats.baseHp,
                attack: stats.baseAttack,
                defense: stats.baseDefense,
                speed: stats.baseSpeed,
                crit: stats.baseCrit,
                miss: stats.baseMiss
            },
            currentStats: {
                maxHp: stats.maxHp,
                attack: stats.attack,
                defense: stats.defense,
                speed: stats.speed,
                crit: stats.crit,
                miss: stats.miss
            }
        };
    },

    /**
     * 初始化角色的等级和经验值
     * @param {cc.Node} characterNode - 角色节点
     * @param {number} level - 初始等级（可选，默认为1，如果本地有保存的数据则优先使用）
     * @param {number} exp - 初始经验值（可选，默认为0，如果本地有保存的数据则优先使用）
     * @param {boolean} loadFromStorage - 是否从本地存储加载数据（默认true）
     */
    initLevel(characterNode, level = 1, exp = 0, loadFromStorage = true) {
        const StatsComponent = require("StatsComponent");
        const stats = characterNode.getComponent(StatsComponent);

        if (!stats) {
            cc.warn(`[LevelSystem] 角色节点 ${characterNode.name} 没有 StatsComponent 组件`);
            return;
        }

        // 保存基础属性
        stats._saveBaseStats();

        // 优先检查编辑器中是否设置了等级或经验值
        if (stats._useEditorValues) {
            // 如果编辑器中设置了值，优先使用编辑器中的值
            level = stats.level;
            exp = stats.exp;
            cc.log(`[LevelSystem] ${characterNode.name} 使用编辑器设置的值: 等级 ${level}, 经验值 ${exp}`);
        } else {
            // 尝试从本地存储加载数据
            let savedData = null;
            if (loadFromStorage) {
                savedData = CharacterDataManager.loadCharacterLevel(characterNode.name);
            }

            // 如果本地有保存的数据，优先使用保存的数据
            if (savedData) {
                level = savedData.level || level;
                exp = savedData.exp || exp;
                cc.log(`[LevelSystem] ${characterNode.name} 从本地存储加载: 等级 ${level}, 经验值 ${exp}`);
            } else {
                // 使用传入的参数或默认值
                cc.log(`[LevelSystem] ${characterNode.name} 使用初始值: 等级 ${level}, 经验值 ${exp}`);
            }
        }

        // 设置等级和经验值
        stats.level = Math.max(1, Math.min(level, LevelConfig.MAX_LEVEL));

        // 如果指定了经验值，使用经验值；否则使用等级对应的经验值
        if (exp > 0) {
            stats.exp = exp;
            stats.level = LevelConfig.getLevelFromExp(exp);
        } else {
            stats.exp = LevelConfig.getExpForLevel(stats.level);
        }

        // 应用等级加成
        stats._applyLevelBonus();

        // 更新经验条显示
        stats.updateExpBar();

        cc.log(`[LevelSystem] ${characterNode.name} 初始化完成: 等级 ${stats.level}, 经验值 ${stats.exp}`);
    },

    /**
     * 重置角色的等级和经验值到1级
     * @param {cc.Node} characterNode - 角色节点
     * @param {boolean} clearStorage - 是否清除本地存储的数据（默认true）
     * @returns {boolean} 是否重置成功
     */
    resetLevel(characterNode, clearStorage = true) {
        const StatsComponent = require("StatsComponent");
        const stats = characterNode.getComponent(StatsComponent);

        if (!stats) {
            cc.warn(`[LevelSystem] 角色节点 ${characterNode.name} 没有 StatsComponent 组件`);
            return false;
        }

        // 重置等级和经验值
        stats.level = 1;
        stats.exp = 0;

        // 重新应用等级加成（1级时加成为0，相当于重置属性）
        stats._applyLevelBonus();

        // 更新UI显示
        stats.updateExpBar();
        stats.updateHealthBar();

        // 清除本地存储的数据
        if (clearStorage) {
            CharacterDataManager.deleteCharacterData(characterNode.name);
        } else {
            // 如果不清除存储，保存重置后的数据
            CharacterDataManager.saveCharacterLevel(characterNode);
        }

        cc.log(`[LevelSystem] ${characterNode.name} 等级已重置为 1 级`);
        return true;
    },

    /**
     * 重置所有角色的等级和经验值
     * @param {Array} characterNodes - 角色节点数组
     * @param {boolean} clearStorage - 是否清除本地存储的数据（默认true）
     */
    resetAllLevels(characterNodes, clearStorage = true) {
        if (!characterNodes || characterNodes.length === 0) {
            cc.warn("[LevelSystem] 角色节点数组为空");
            return;
        }

        characterNodes.forEach(node => {
            this.resetLevel(node, false); // 先重置所有节点
        });

        // 最后清除所有本地存储数据
        if (clearStorage) {
            CharacterDataManager.clearAllCharacterData();
        }

        cc.log(`[LevelSystem] 已重置 ${characterNodes.length} 个角色的等级`);
    }
};

module.exports = LevelSystem;
