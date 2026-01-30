"use strict";
cc._RF.push(module, 'cb7475gbchPn4qK8sYBF84G', 'SkillDataManager');
// Scripts/system/SkillDataManager.js

"use strict";

/**
 * 技能数据管理器
 * 负责保存和加载角色的技能数据
 * 
 * 注意：现在使用 SkillDataAdapter 作为数据层，支持本地存储和服务器存储的切换
 * 要切换到服务器模式，只需调用：SkillDataAdapter.setStorageMode('server')
 */
var SkillDataAdapter = require("SkillDataAdapter");
var SkillDataManager = {
  // 存储键前缀（仅用于本地存储）
  STORAGE_PREFIX: "character_skills_",
  /**
   * 保存角色技能数据
   * @param {string} characterName - 角色名称（唯一标识）
   * @param {Array} skills - 技能列表 [{ id, name, cooldown, effect, requireRage }, ...]
   * @returns {Promise<boolean>|boolean} 是否保存成功（服务器模式下返回Promise）
   */
  saveCharacterSkills: function saveCharacterSkills(characterName, skills) {
    if (!characterName) {
      cc.warn("[SkillDataManager] 角色名称为空，无法保存技能数据");
      return false;
    }
    var result = SkillDataAdapter.saveCharacterSkills(characterName, skills);

    // 如果是Promise（服务器模式），返回Promise
    if (result instanceof Promise) {
      return result.then(function (success) {
        if (success) {
          cc.log("[SkillDataManager] \u4FDD\u5B58\u89D2\u8272\u6280\u80FD\u6570\u636E: " + characterName, skills);
        }
        return success;
      });
    }

    // 本地模式，直接返回结果
    if (result) {
      cc.log("[SkillDataManager] \u4FDD\u5B58\u89D2\u8272\u6280\u80FD\u6570\u636E: " + characterName, skills);
    }
    return result;
  },
  /**
   * 加载角色技能数据
   * @param {string} characterName - 角色名称
   * @returns {Promise<Array>|Array} 技能列表（服务器模式下返回Promise）
   */
  loadCharacterSkills: function loadCharacterSkills(characterName) {
    if (!characterName) {
      return [];
    }
    var result = SkillDataAdapter.loadCharacterSkills(characterName);

    // 如果是Promise（服务器模式），返回Promise
    if (result instanceof Promise) {
      return result.then(function (skills) {
        if (skills && skills.length > 0) {
          cc.log("[SkillDataManager] \u52A0\u8F7D\u89D2\u8272\u6280\u80FD\u6570\u636E: " + characterName, skills);
        }
        return skills || [];
      });
    }

    // 本地模式，直接返回结果
    if (result && result.length > 0) {
      cc.log("[SkillDataManager] \u52A0\u8F7D\u89D2\u8272\u6280\u80FD\u6570\u636E: " + characterName, result);
    }
    return result || [];
  },
  /**
   * 从角色节点保存技能数据
   * @param {cc.Node} characterNode - 角色节点
   * @returns {Promise<boolean>|boolean} 是否保存成功
   */
  saveSkillsFromNode: function saveSkillsFromNode(characterNode) {
    var SkillComponent = require("SkillComponent");
    var skills = characterNode.getComponent(SkillComponent);
    if (!skills) {
      cc.warn("[SkillDataManager] \u8282\u70B9 " + characterNode.name + " \u6CA1\u6709 SkillComponent \u7EC4\u4EF6");
      return false;
    }

    // 获取角色名称（优先使用原始名称）
    var characterName = characterNode.name;
    if (characterNode._originalCharacterName) {
      characterName = characterNode._originalCharacterName;
    } else if (characterName.startsWith("Display_")) {
      characterName = characterName.replace("Display_", "");
    }

    // 提取技能数据（只保存必要的字段，不保存effect函数）
    var skillsData = skills.skills.map(function (skill) {
      return {
        id: skill.id,
        name: skill.skillName,
        cooldown: skill.cooldown,
        requireRage: skill.requireRage || 0,
        isUltimate: skill.isUltimate || false
      };
    });
    return this.saveCharacterSkills(characterName, skillsData);
  }
};
module.exports = SkillDataManager;

cc._RF.pop();