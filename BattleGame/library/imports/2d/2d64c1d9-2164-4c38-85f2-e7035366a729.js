"use strict";
cc._RF.push(module, '2d64cHZIWRMOIXy5wNTZqcp', 'LevelSystem');
// Scripts/system/LevelSystem.js

"use strict";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * 等级系统
 * 处理经验获取、升级逻辑和属性变化
 */
var LevelConfig = require("LevelConfig");
var CharacterDataManager = require("CharacterDataManager");
var LevelSystem = {
  /**
   * 给角色添加经验值
   * @param {cc.Node} characterNode - 角色节点
   * @param {number} expValue - 经验值
   * @returns {Object} 升级信息 { leveledUp: boolean, oldLevel: number, newLevel: number, statChanges: Object }
   */
  addExp: function addExp(characterNode, expValue) {
    var StatsComponent = require("StatsComponent");
    var stats = characterNode.getComponent(StatsComponent);
    if (!stats) {
      cc.warn("[LevelSystem] \u89D2\u8272\u8282\u70B9 " + characterNode.name + " \u6CA1\u6709 StatsComponent \u7EC4\u4EF6");
      return null;
    }

    // 检查是否已达到最大等级
    if (stats.isMaxLevel()) {
      cc.log("[LevelSystem] " + characterNode.name + " \u5DF2\u8FBE\u5230\u6700\u5927\u7B49\u7EA7 " + stats.level + "\uFF0C\u65E0\u6CD5\u7EE7\u7EED\u5347\u7EA7");
      return {
        leveledUp: false,
        oldLevel: stats.level,
        newLevel: stats.level,
        statChanges: null,
        message: "\u5DF2\u8FBE\u5230\u6700\u5927\u7B49\u7EA7 " + stats.level
      };
    }
    var oldLevel = stats.level;
    var oldStats = {
      maxHp: stats.maxHp,
      attack: stats.attack,
      defense: stats.defense,
      speed: stats.speed,
      crit: stats.crit,
      miss: stats.miss
    };

    // 添加经验值（会自动处理升级）
    cc.log("[LevelSystem] " + characterNode.name + " \u5F53\u524D\u7B49\u7EA7: " + oldLevel + ", \u5F53\u524D\u7ECF\u9A8C: " + stats.exp + ", \u6DFB\u52A0\u7ECF\u9A8C: " + expValue);
    var leveledUp = stats.addExp(expValue);
    cc.log("[LevelSystem] " + characterNode.name + " \u6DFB\u52A0\u7ECF\u9A8C\u540E - \u7B49\u7EA7: " + stats.level + ", \u7ECF\u9A8C: " + stats.exp + ", \u662F\u5426\u5347\u7EA7: " + leveledUp);
    var result = {
      leveledUp: leveledUp,
      oldLevel: oldLevel,
      newLevel: stats.level,
      statChanges: null,
      message: leveledUp ? "\u5347\u7EA7\u5230 " + stats.level + " \u7EA7\uFF01" : "\u83B7\u5F97 " + expValue + " \u7ECF\u9A8C\u503C"
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
      cc.log("[LevelSystem] " + characterNode.name + " \u5347\u7EA7\uFF01\u5C5E\u6027\u53D8\u5316:", result.statChanges);
    } else {
      // 计算距离下一级还需要多少经验
      var currentLevelExp = LevelConfig.getExpForLevel(stats.level);
      var nextLevelExp = LevelConfig.getExpForLevel(stats.level + 1);
      var expNeeded = nextLevelExp - stats.exp;
      cc.log("[LevelSystem] " + characterNode.name + " \u672A\u5347\u7EA7\uFF0C\u8DDD\u79BB\u4E0B\u4E00\u7EA7\u8FD8\u9700\u8981 " + expNeeded + " \u7ECF\u9A8C\u503C");
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
  useExpItem: function useExpItem(characterNode, expItem) {
    if (!expItem || !expItem.expValue) {
      return {
        success: false,
        message: "无效的经验道具"
      };
    }
    var result = this.addExp(characterNode, expItem.expValue);
    return _extends({
      success: true
    }, result, {
      itemName: expItem.name || expItem.id
    });
  },
  /**
   * 获取角色的等级信息
   * @param {cc.Node} characterNode - 角色节点
   * @returns {Object} 等级信息
   */
  getLevelInfo: function getLevelInfo(characterNode) {
    var StatsComponent = require("StatsComponent");
    var stats = characterNode.getComponent(StatsComponent);
    if (!stats) {
      return null;
    }
    var currentLevelExp = LevelConfig.getExpForLevel(stats.level);
    var nextLevelExp = LevelConfig.getExpForLevel(stats.level + 1);
    var expInCurrentLevel = stats.exp - currentLevelExp;
    var expToNext = nextLevelExp - currentLevelExp;
    var progress = LevelConfig.getExpProgress(stats.exp);
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
  initLevel: function initLevel(characterNode, level, exp, loadFromStorage) {
    if (level === void 0) {
      level = 1;
    }
    if (exp === void 0) {
      exp = 0;
    }
    if (loadFromStorage === void 0) {
      loadFromStorage = true;
    }
    var StatsComponent = require("StatsComponent");
    var stats = characterNode.getComponent(StatsComponent);
    if (!stats) {
      cc.warn("[LevelSystem] \u89D2\u8272\u8282\u70B9 " + characterNode.name + " \u6CA1\u6709 StatsComponent \u7EC4\u4EF6");
      return;
    }

    // 注意：不应该在这里调用_saveBaseStats()，因为此时属性可能已经应用了等级加成
    // 基础属性应该从保存的数据或unitData中获取，而不是从当前属性中保存
    // 基础属性应该在第一次创建角色时从UnitDataConfig中获取并保存，之后不应该改变

    // 优先检查编辑器中是否设置了等级或经验值
    if (stats._useEditorValues) {
      // 如果编辑器中设置了值，优先使用编辑器中的值
      level = stats.level;
      exp = stats.exp;
      cc.log("[LevelSystem] " + characterNode.name + " \u4F7F\u7528\u7F16\u8F91\u5668\u8BBE\u7F6E\u7684\u503C: \u7B49\u7EA7 " + level + ", \u7ECF\u9A8C\u503C " + exp);
    } else {
      // 尝试从本地存储加载数据
      var savedData = null;
      if (loadFromStorage) {
        savedData = CharacterDataManager.loadCharacterLevel(characterNode.name);
      }

      // 如果本地有保存的数据，优先使用保存的数据
      if (savedData) {
        level = savedData.level || level;
        exp = savedData.exp || exp;
        cc.log("[LevelSystem] " + characterNode.name + " \u4ECE\u672C\u5730\u5B58\u50A8\u52A0\u8F7D: \u7B49\u7EA7 " + level + ", \u7ECF\u9A8C\u503C " + exp);
      } else {
        // 使用传入的参数或默认值
        cc.log("[LevelSystem] " + characterNode.name + " \u4F7F\u7528\u521D\u59CB\u503C: \u7B49\u7EA7 " + level + ", \u7ECF\u9A8C\u503C " + exp);
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
    cc.log("[LevelSystem] " + characterNode.name + " \u521D\u59CB\u5316\u5B8C\u6210: \u7B49\u7EA7 " + stats.level + ", \u7ECF\u9A8C\u503C " + stats.exp);
  },
  /**
   * 重置角色的等级和经验值到1级
   * @param {cc.Node} characterNode - 角色节点
   * @param {boolean} clearStorage - 是否清除本地存储的数据（默认true）
   * @returns {boolean} 是否重置成功
   */
  resetLevel: function resetLevel(characterNode, clearStorage) {
    if (clearStorage === void 0) {
      clearStorage = true;
    }
    var StatsComponent = require("StatsComponent");
    var stats = characterNode.getComponent(StatsComponent);
    if (!stats) {
      cc.warn("[LevelSystem] \u89D2\u8272\u8282\u70B9 " + characterNode.name + " \u6CA1\u6709 StatsComponent \u7EC4\u4EF6");
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
    cc.log("[LevelSystem] " + characterNode.name + " \u7B49\u7EA7\u5DF2\u91CD\u7F6E\u4E3A 1 \u7EA7");
    return true;
  },
  /**
   * 重置所有角色的等级和经验值
   * @param {Array} characterNodes - 角色节点数组
   * @param {boolean} clearStorage - 是否清除本地存储的数据（默认true）
   */
  resetAllLevels: function resetAllLevels(characterNodes, clearStorage) {
    var _this = this;
    if (clearStorage === void 0) {
      clearStorage = true;
    }
    if (!characterNodes || characterNodes.length === 0) {
      cc.warn("[LevelSystem] 角色节点数组为空");
      return;
    }
    characterNodes.forEach(function (node) {
      _this.resetLevel(node, false); // 先重置所有节点
    });

    // 最后清除所有本地存储数据
    if (clearStorage) {
      CharacterDataManager.clearAllCharacterData();
    }
    cc.log("[LevelSystem] \u5DF2\u91CD\u7F6E " + characterNodes.length + " \u4E2A\u89D2\u8272\u7684\u7B49\u7EA7");
  }
};
module.exports = LevelSystem;

cc._RF.pop();