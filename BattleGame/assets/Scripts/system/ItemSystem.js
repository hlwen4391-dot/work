/**
 * 道具使用系统
 * 处理道具的使用逻辑
 */
const ItemConfig = require("ItemConfig");
const ItemDataManager = require("ItemDataManager");
const LevelSystem = require("LevelSystem");
const SkillDataManager = require("SkillDataManager");
const { getSkillById } = require("SkillConfig");

var ItemSystem = {
    /**
     * 使用道具（全局共享道具栏）
     * @param {cc.Node} characterNode - 角色节点
     * @param {string} itemId - 道具ID
     * @returns {Promise<Object>|Object} 使用结果 { success: boolean, message: string, ... }（服务器模式下返回Promise）
     */
    async useItem(characterNode, itemId) {
        if (!characterNode || !itemId) {
            return {
                success: false,
                message: "参数不完整"
            };
        }

        // 检查是否拥有该道具（全局道具栏）
        const itemCount = await ItemDataManager.getItemCount(itemId);
        if (itemCount <= 0) {
            return {
                success: false,
                message: "没有该道具"
            };
        }

        // 获取道具配置
        const itemConfig = ItemConfig.getItemById(itemId);
        if (!itemConfig) {
            return {
                success: false,
                message: "无效的道具配置"
            };
        }

        // 根据道具效果类型执行相应逻辑
        let result = null;
        const effectType = String(itemConfig.effectType || "").toLowerCase();

        switch (effectType) {
            case "level_up":
                result = this._useLevelUpItem(characterNode, itemConfig);
                break;
            case "exp":
                result = this._useExpItem(characterNode, itemConfig);
                break;
            case "hp":
                result = this._useHpItem(characterNode, itemConfig);
                break;
            case "skill_scroll":
                result = await this._useSkillScrollItem(characterNode, itemConfig);
                break;
            default:
                // 兜底：若有 skillId 且非其他已知类型，按技能卷轴处理（避免热更新/缓存导致未匹配）
                if (itemConfig.skillId != null && itemConfig.skillId !== undefined) {
                    result = await this._useSkillScrollItem(characterNode, itemConfig);
                } else {
                    return {
                        success: false,
                        message: `未知的道具效果类型: ${itemConfig.effectType}`
                    };
                }
                break;
        }

        // 如果使用成功，减少道具数量（全局道具栏）
        if (result.success) {
            // [ItemDebug] 使用前先记录当前数量
            const beforeCount = await ItemDataManager.getItemCount(itemId);
            cc.log(`[ItemDebug] useItem 前 => itemId=${itemId}, count=${beforeCount}, effectType=${effectType}`);

            await ItemDataManager.removeItem(itemId, 1);

            const afterCount = await ItemDataManager.getItemCount(itemId);
            cc.log(`1111111[ItemDebug] useItem 后 => itemId=${itemId}, count=${afterCount}, effectType=${effectType}`);
            cc.log(`[ItemSystem] 使用道具成功: ${itemConfig.name}`);
        }

        return result;
    },

    /**
     * 使用升级类道具
     * @private
     * @param {cc.Node} characterNode - 角色节点
     * @param {Object} itemConfig - 道具配置
     * @returns {Object} 使用结果
     */
    _useLevelUpItem(characterNode, itemConfig) {
        const LevelConfig = require("LevelConfig");
        const CharacterDataManager = require("CharacterDataManager");
        const stats = characterNode.getComponent("StatsComponent");
        if (!stats) {
            return {
                success: false,
                message: "角色没有StatsComponent组件"
            };
        }

        // 检查是否已满级
        if (stats.isMaxLevel && stats.isMaxLevel()) {
            return {
                success: false,
                message: "角色已达到最大等级"
            };
        }

        // 提升等级
        const oldLevel = stats.level;
        const levelUpCount = itemConfig.effectValue || 1;

        for (let i = 0; i < levelUpCount; i++) {
            if (stats.isMaxLevel && stats.isMaxLevel()) {
                break; // 已达到最大等级，停止升级
            }

            // 直接升级
            stats.level += 1;
            stats._applyLevelBonus();
        }

        const newLevel = stats.level;

        // 重置经验值为新等级对应的最小经验值（这样显示时就是0/下一级所需经验）
        stats.exp = LevelConfig.getExpForLevel(newLevel);
        cc.log(`[ItemSystem] 升级后重置经验值: ${stats.exp} (等级${newLevel}的最小经验值)`);

        // 恢复满生命值
        stats.hp = stats.maxHp;
        cc.log(`[ItemSystem] 升级后恢复满生命值: ${stats.hp}/${stats.maxHp}`);

        // 更新显示
        if (stats.updateExpBar) {
            stats.updateExpBar();
        }
        if (stats.updateHealthBar) {
            stats.updateHealthBar();
        }

        // 保存到本地存储（使用原始角色名称，而不是节点名称）
        // 节点名称可能是 "Display_英雄1"，需要提取原始名称
        let characterName = characterNode.name;
        if (characterName.startsWith("Display_")) {
            characterName = characterName.replace("Display_", "");
        }

        // 如果节点上有存储的原始名称，优先使用
        if (characterNode._originalCharacterName) {
            characterName = characterNode._originalCharacterName;
        }

        // 直接保存数据，而不是通过saveCharacterLevel（因为节点名称可能不匹配）
        // 重要：保存基础属性时，必须保持原有的基础属性不变（基础属性不应该因为升级而改变）
        const UnitDataConfig = require("UnitDataConfig");
        const existingData = CharacterDataManager.loadCharacterLevel(characterName);

        // 基础属性应该在第一次创建角色时保存，之后不应该改变
        // 如果已有保存的数据，使用原有的基础属性（保持不变）
        // 如果没有保存的数据，需要从UnitDataConfig中获取原始基础属性
        let baseHp, baseAttack, baseDefense, baseSpeed, baseCrit, baseMiss;

        if (existingData && existingData.baseHp) {
            // 已有保存的数据，使用原有的基础属性（保持不变）
            baseHp = existingData.baseHp;
            baseAttack = existingData.baseAttack;
            baseDefense = existingData.baseDefense;
            baseSpeed = existingData.baseSpeed;
            baseCrit = existingData.baseCrit;
            baseMiss = existingData.baseMiss;
            cc.log(`[ItemSystem] 使用已保存的基础属性: baseHp=${baseHp}, baseAttack=${baseAttack}`);
        } else {
            // 首次保存，需要从UnitDataConfig中获取原始基础属性
            // 查找角色配置
            const allUnits = [...(UnitDataConfig.heros || []), ...(UnitDataConfig.monsters || [])];
            const unitConfig = allUnits.find(u => u.name === characterName);

            if (unitConfig) {
                // 从配置中获取基础属性
                baseHp = unitConfig.hp || 100;
                baseAttack = unitConfig.attack || 1;
                baseDefense = unitConfig.defense || 1;
                baseSpeed = unitConfig.speed || 1;
                baseCrit = unitConfig.crit || 0;
                baseMiss = unitConfig.miss || 0;
                cc.log(`[ItemSystem] 首次保存，从UnitDataConfig获取基础属性: baseHp=${baseHp}, baseAttack=${baseAttack}`);
            } else {
                // 如果找不到配置，使用当前的baseHp等（作为后备方案）
                baseHp = stats.baseHp;
                baseAttack = stats.baseAttack;
                baseDefense = stats.baseDefense;
                baseSpeed = stats.baseSpeed;
                baseCrit = stats.baseCrit;
                baseMiss = stats.baseMiss;
                cc.warn(`[ItemSystem] 未找到角色配置 ${characterName}，使用当前baseHp=${baseHp}`);
            }
        }

        const data = {
            level: stats.level,
            exp: stats.exp,
            baseHp: baseHp,
            baseAttack: baseAttack,
            baseDefense: baseDefense,
            baseSpeed: baseSpeed,
            baseCrit: baseCrit,
            baseMiss: baseMiss,
            saveTime: Date.now()
        };

        cc.log(`[ItemSystem] 保存角色数据: ${characterName}, 等级=${data.level}, baseHp=${data.baseHp}, baseAttack=${data.baseAttack}`);

        const saveSuccess = CharacterDataManager.saveCharacterData(characterName, data);
        if (saveSuccess) {
            cc.log(`[ItemSystem] ✓ 保存角色数据成功: ${characterName} (等级${newLevel}, 经验${stats.exp})`);
        } else {
            cc.error(`[ItemSystem] ✗ 保存角色数据失败: ${characterName}`);
        }

        return {
            success: true,
            message: `等级提升: ${oldLevel} → ${newLevel}`,
            oldLevel: oldLevel,
            newLevel: newLevel
        };
    },

    /**
     * 使用经验类道具
     * @private
     * @param {cc.Node} characterNode - 角色节点
     * @param {Object} itemConfig - 道具配置
     * @returns {Object} 使用结果
     */
    _useExpItem(characterNode, itemConfig) {
        const expValue = itemConfig.effectValue || 0;
        if (expValue <= 0) {
            return {
                success: false,
                message: "无效的经验值"
            };
        }

        const result = LevelSystem.addExp(characterNode, expValue);
        return {
            success: true,
            message: result.leveledUp ? `获得${expValue}经验值，升级了！` : `获得${expValue}经验值`,
            ...result
        };
    },

    /**
     * 使用生命值恢复类道具
     * @private
     * @param {cc.Node} characterNode - 角色节点
     * @param {Object} itemConfig - 道具配置
     * @returns {Object} 使用结果
     */
    _useHpItem(characterNode, itemConfig) {
        const stats = characterNode.getComponent("StatsComponent");
        if (!stats) {
            return {
                success: false,
                message: "角色没有StatsComponent组件"
            };
        }

        const healAmount = itemConfig.effectValue || 0;
        const oldHp = stats.hp;
        const newHp = Math.min(stats.hp + healAmount, stats.maxHp);
        stats.hp = newHp;

        // 更新血条显示
        if (stats.updateHealthBar) {
            stats.updateHealthBar();
        }

        return {
            success: true,
            message: `恢复${newHp - oldHp}点生命值`,
            oldHp: oldHp,
            newHp: newHp,
            healAmount: newHp - oldHp
        };
    },

    /**
     * 使用技能卷轴：解锁对应技能并写入角色技能列表，更新节点 SkillComponent
     * @private
     * @param {cc.Node} characterNode - 角色节点
     * @param {Object} itemConfig - 道具配置（须含 skillId）
     * @returns {Promise<Object>} 使用结果
     */
    async _useSkillScrollItem(characterNode, itemConfig) {
        const skillId = itemConfig.skillId;
        if (skillId == null || skillId === undefined) {
            return { success: false, message: "卷轴未绑定技能" };
        }

        const skillConfig = getSkillById(skillId);
        if (!skillConfig) {
            return { success: false, message: `未找到技能配置: ${skillId}` };
        }

        let characterName = characterNode.name;
        if (characterNode._originalCharacterName) {
            characterName = characterNode._originalCharacterName;
        } else if (characterName.startsWith("Display_")) {
            characterName = characterName.replace("Display_", "");
        }

        let savedSkills = SkillDataManager.loadCharacterSkills(characterName);//TODO: 从服务器加载技能数据
        if (savedSkills && savedSkills.then) {
            savedSkills = await savedSkills;
        }
        savedSkills = savedSkills || [];

        const alreadyHas = savedSkills.some(s => s.id === skillId);
        if (alreadyHas) {
            return { success: false, message: "已学会该技能" };
        }

        const newEntry = {
            id: skillConfig.id,
            name: skillConfig.name,
            cooldown: skillConfig.cooldown,
            requireRage: skillConfig.requireRage !== undefined && skillConfig.requireRage !== null ? skillConfig.requireRage : 0,
            isUltimate: (skillConfig.requireRage > 0)
        };
        const newList = [...savedSkills, newEntry];

        let saveResult = SkillDataManager.saveCharacterSkills(characterName, newList);
        if (saveResult && saveResult.then) {
            saveResult = await saveResult;
        }
        if (!saveResult) {
            return { success: false, message: "保存技能数据失败" };
        }

        const skillComp = characterNode.getComponent("SkillComponent");
        if (skillComp) {
            const fullConfigs = newList.map(s => {
                const cfg = getSkillById(s.id);
                return cfg ? { ...cfg, requireRage: s.requireRage } : null;
            }).filter(Boolean);
            skillComp.init(fullConfigs);
        }

        return {
            success: true,
            message: "技能学习成功",
            skillName: skillConfig.name
        };
    }
};

module.exports = ItemSystem;
