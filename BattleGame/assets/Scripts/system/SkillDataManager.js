/**
 * 技能数据管理器
 * 负责保存和加载角色的技能数据
 * 
 * 注意：现在使用 SkillDataAdapter 作为数据层，支持本地存储和服务器存储的切换
 * 要切换到服务器模式，只需调用：SkillDataAdapter.setStorageMode('server')
 */
const SkillDataAdapter = require("SkillDataAdapter");

var SkillDataManager = {
    // 存储键前缀（仅用于本地存储）
    STORAGE_PREFIX: "character_skills_",

    /**
     * 保存角色技能数据
     * @param {string} characterName - 角色名称（唯一标识）
     * @param {Array} skills - 技能列表 [{ id, name, cooldown, effect, requireRage }, ...]
     * @returns {Promise<boolean>|boolean} 是否保存成功（服务器模式下返回Promise）
     */
    saveCharacterSkills(characterName, skills) {
        if (!characterName) {
            cc.warn("[SkillDataManager] 角色名称为空，无法保存技能数据");
            return false;
        }

        const result = SkillDataAdapter.saveCharacterSkills(characterName, skills);

        // 如果是Promise（服务器模式），返回Promise
        if (result instanceof Promise) {
            return result.then(success => {
                if (success) {
                    cc.log(`[SkillDataManager] 保存角色技能数据: ${characterName}`, skills);
                }
                return success;
            });
        }

        // 本地模式，直接返回结果
        if (result) {
            cc.log(`[SkillDataManager] 保存角色技能数据: ${characterName}`, skills);
        }
        return result;
    },

    /**
     * 加载角色技能数据
     * @param {string} characterName - 角色名称
     * @returns {Promise<Array>|Array} 技能列表（服务器模式下返回Promise）
     */
    loadCharacterSkills(characterName) {
        if (!characterName) {
            return [];
        }

        const result = SkillDataAdapter.loadCharacterSkills(characterName);

        // 如果是Promise（服务器模式），返回Promise
        if (result instanceof Promise) {
            return result.then(skills => {
                if (skills && skills.length > 0) {
                    cc.log(`[SkillDataManager] 加载角色技能数据: ${characterName}`, skills);
                }
                return skills || [];
            });
        }

        // 本地模式，直接返回结果
        if (result && result.length > 0) {
            cc.log(`[SkillDataManager] 加载角色技能数据: ${characterName}`, result);
        }
        return result || [];
    },

    /**
     * 从角色节点保存技能数据
     * @param {cc.Node} characterNode - 角色节点
     * @returns {Promise<boolean>|boolean} 是否保存成功
     */
    saveSkillsFromNode(characterNode) {
        const SkillComponent = require("SkillComponent");
        const skills = characterNode.getComponent(SkillComponent);
        if (!skills) {
            cc.warn(`[SkillDataManager] 节点 ${characterNode.name} 没有 SkillComponent 组件`);
            return false;
        }

        // 获取角色名称（优先使用原始名称）
        let characterName = characterNode.name;
        if (characterNode._originalCharacterName) {
            characterName = characterNode._originalCharacterName;
        } else if (characterName.startsWith("Display_")) {
            characterName = characterName.replace("Display_", "");
        }

        // 提取技能数据（只保存必要的字段，不保存effect函数）
        const skillsData = skills.skills.map(skill => ({
            id: skill.id,
            name: skill.skillName,
            cooldown: skill.cooldown,
            requireRage: skill.requireRage || 0,
            isUltimate: skill.isUltimate || false
        }));

        return this.saveCharacterSkills(characterName, skillsData);
    }
};

module.exports = SkillDataManager;
