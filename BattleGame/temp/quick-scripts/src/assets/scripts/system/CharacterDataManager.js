"use strict";
cc._RF.push(module, '81480VEokxLd5AireppIEHG', 'CharacterDataManager');
// Scripts/system/CharacterDataManager.js

"use strict";

/**
 * 角色数据管理器
 * 负责保存和加载角色的等级、经验值等数据
 * 
 * 注意：现在使用 CharacterDataAdapter 作为数据层，支持本地存储和服务器存储的切换
 * 要切换到服务器模式，只需调用：CharacterDataAdapter.setStorageMode('server')
 */
var CharacterDataAdapter = require("CharacterDataAdapter");
var CharacterDataManager = {
  // 存储键前缀（仅用于本地存储）
  STORAGE_PREFIX: "character_data_",
  /**
   * 保存角色数据
   * @param {string} characterName - 角色名称（唯一标识）
   * @param {Object} data - 角色数据 { level, exp, ... }
   * @returns {Promise<boolean>|boolean} 是否保存成功（服务器模式下返回Promise）
   */
  saveCharacterData: function saveCharacterData(characterName, data) {
    if (!characterName) {
      cc.warn("[CharacterDataManager] 角色名称为空，无法保存数据");
      return false;
    }
    var result = CharacterDataAdapter.saveCharacterData(characterName, data);

    // 如果是Promise（服务器模式），返回Promise
    if (result instanceof Promise) {
      return result.then(function (success) {
        if (success) {
          cc.log("[CharacterDataManager] \u4FDD\u5B58\u89D2\u8272\u6570\u636E: " + characterName, data);
        }
        return success;
      });
    }

    // 本地模式，直接返回结果
    if (result) {
      cc.log("[CharacterDataManager] \u4FDD\u5B58\u89D2\u8272\u6570\u636E: " + characterName, data);
    }
    return result;
  },
  /**
   * 加载角色数据
   * @param {string} characterName - 角色名称
   * @returns {Promise<Object|null>|Object|null} 角色数据 { level, exp, ... } 或 null（服务器模式下返回Promise）
   */
  loadCharacterData: function loadCharacterData(characterName) {
    if (!characterName) {
      return null;
    }
    var result = CharacterDataAdapter.loadCharacterData(characterName);

    // 如果是Promise（服务器模式），返回Promise
    if (result instanceof Promise) {
      return result.then(function (data) {
        if (data) {
          cc.log("[CharacterDataManager] \u52A0\u8F7D\u89D2\u8272\u6570\u636E: " + characterName, data);
        }
        return data;
      });
    }

    // 本地模式，直接返回结果
    if (result) {
      cc.log("[CharacterDataManager] \u52A0\u8F7D\u89D2\u8272\u6570\u636E: " + characterName, result);
    }
    return result;
  },
  /**
   * 保存角色的等级和经验值
   * @param {cc.Node} characterNode - 角色节点
   * @returns {Promise<boolean>|boolean} 是否保存成功（服务器模式下返回Promise）
   */
  saveCharacterLevel: function saveCharacterLevel(characterNode) {
    var StatsComponent = require("StatsComponent");
    var stats = characterNode.getComponent(StatsComponent);
    if (!stats) {
      cc.warn("[CharacterDataManager] \u8282\u70B9 " + characterNode.name + " \u6CA1\u6709 StatsComponent \u7EC4\u4EF6");
      return false;
    }

    // 获取角色名称（优先使用原始名称）
    var characterName = characterNode.name;
    if (characterNode._originalCharacterName) {
      characterName = characterNode._originalCharacterName;
    } else if (characterName.startsWith("Display_")) {
      characterName = characterName.replace("Display_", "");
    }
    var data = {
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
   * @returns {Promise<Object|null>|Object|null} { level, exp, ... } 或 null（服务器模式下返回Promise）
   */
  loadCharacterLevel: function loadCharacterLevel(characterName) {
    return this.loadCharacterData(characterName);
  },
  /**
   * 删除角色数据
   * @param {string} characterName - 角色名称
   */
  deleteCharacterData: function deleteCharacterData(characterName) {
    if (!characterName) {
      return false;
    }
    try {
      var key = this.STORAGE_PREFIX + characterName;
      cc.sys.localStorage.removeItem(key);
      cc.log("[CharacterDataManager] \u5220\u9664\u89D2\u8272\u6570\u636E: " + characterName);
      return true;
    } catch (e) {
      cc.error("[CharacterDataManager] \u5220\u9664\u5931\u8D25: " + e.message);
      return false;
    }
  },
  /**
   * 获取所有保存的角色数据
   * @returns {Promise<Object>|Object} { characterName: data, ... }（服务器模式下返回Promise）
   */
  getAllCharacterData: function getAllCharacterData() {
    var result = CharacterDataAdapter.loadAllCharacterData();

    // 如果是Promise（服务器模式），返回Promise
    if (result instanceof Promise) {
      return result.then(function (data) {
        if (data) {
          cc.log("[CharacterDataManager] \u83B7\u53D6\u6240\u6709\u89D2\u8272\u6570\u636E:", Object.keys(data).length, "个角色");
        }
        return data || {};
      });
    }

    // 本地模式，直接返回结果
    if (result && Object.keys(result).length > 0) {
      cc.log("[CharacterDataManager] \u83B7\u53D6\u6240\u6709\u89D2\u8272\u6570\u636E:", Object.keys(result).length, "个角色");
    }
    return result || {};
  },
  /**
   * 清除所有角色数据
   */
  clearAllCharacterData: function clearAllCharacterData() {
    var _this = this;
    try {
      var keys = Object.keys(cc.sys.localStorage);
      keys.forEach(function (key) {
        if (key.startsWith(_this.STORAGE_PREFIX)) {
          cc.sys.localStorage.removeItem(key);
        }
      });
      cc.log("[CharacterDataManager] 已清除所有角色数据");
      return true;
    } catch (e) {
      cc.error("[CharacterDataManager] \u6E05\u9664\u5931\u8D25: " + e.message);
      return false;
    }
  },
  /**
   * 重置角色的等级和经验值（重置为1级，0经验）
   * @param {string} characterName - 角色名称
   * @returns {boolean} 是否重置成功
   */
  resetCharacterLevel: function resetCharacterLevel(characterName) {
    if (!characterName) {
      return false;
    }

    // 删除保存的数据（下次加载时会使用默认值1级，0经验）
    return this.deleteCharacterData(characterName);
  }
};
module.exports = CharacterDataManager;

cc._RF.pop();