
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/system/LevelSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxMZXZlbFN5c3RlbS5qcyJdLCJuYW1lcyI6WyJMZXZlbENvbmZpZyIsInJlcXVpcmUiLCJDaGFyYWN0ZXJEYXRhTWFuYWdlciIsIkxldmVsU3lzdGVtIiwiYWRkRXhwIiwiY2hhcmFjdGVyTm9kZSIsImV4cFZhbHVlIiwiU3RhdHNDb21wb25lbnQiLCJzdGF0cyIsImdldENvbXBvbmVudCIsImNjIiwid2FybiIsIm5hbWUiLCJpc01heExldmVsIiwibG9nIiwibGV2ZWwiLCJsZXZlbGVkVXAiLCJvbGRMZXZlbCIsIm5ld0xldmVsIiwic3RhdENoYW5nZXMiLCJtZXNzYWdlIiwib2xkU3RhdHMiLCJtYXhIcCIsImF0dGFjayIsImRlZmVuc2UiLCJzcGVlZCIsImNyaXQiLCJtaXNzIiwiZXhwIiwicmVzdWx0IiwiY3VycmVudExldmVsRXhwIiwiZ2V0RXhwRm9yTGV2ZWwiLCJuZXh0TGV2ZWxFeHAiLCJleHBOZWVkZWQiLCJzYXZlQ2hhcmFjdGVyTGV2ZWwiLCJ1c2VFeHBJdGVtIiwiZXhwSXRlbSIsInN1Y2Nlc3MiLCJfZXh0ZW5kcyIsIml0ZW1OYW1lIiwiaWQiLCJnZXRMZXZlbEluZm8iLCJleHBJbkN1cnJlbnRMZXZlbCIsImV4cFRvTmV4dCIsInByb2dyZXNzIiwiZ2V0RXhwUHJvZ3Jlc3MiLCJiYXNlU3RhdHMiLCJocCIsImJhc2VIcCIsImJhc2VBdHRhY2siLCJiYXNlRGVmZW5zZSIsImJhc2VTcGVlZCIsImJhc2VDcml0IiwiYmFzZU1pc3MiLCJjdXJyZW50U3RhdHMiLCJpbml0TGV2ZWwiLCJsb2FkRnJvbVN0b3JhZ2UiLCJfdXNlRWRpdG9yVmFsdWVzIiwic2F2ZWREYXRhIiwibG9hZENoYXJhY3RlckxldmVsIiwiTWF0aCIsIm1heCIsIm1pbiIsIk1BWF9MRVZFTCIsImdldExldmVsRnJvbUV4cCIsIl9hcHBseUxldmVsQm9udXMiLCJ1cGRhdGVFeHBCYXIiLCJyZXNldExldmVsIiwiY2xlYXJTdG9yYWdlIiwidXBkYXRlSGVhbHRoQmFyIiwiZGVsZXRlQ2hhcmFjdGVyRGF0YSIsInJlc2V0QWxsTGV2ZWxzIiwiY2hhcmFjdGVyTm9kZXMiLCJfdGhpcyIsImxlbmd0aCIsImZvckVhY2giLCJub2RlIiwiY2xlYXJBbGxDaGFyYWN0ZXJEYXRhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDMUMsSUFBTUMsb0JBQW9CLEdBQUdELE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQztBQUU1RCxJQUFJRSxXQUFXLEdBQUc7RUFDZDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSUMsTUFBTSxXQUFBQSxPQUFDQyxhQUFhLEVBQUVDLFFBQVEsRUFBRTtJQUM1QixJQUFNQyxjQUFjLEdBQUdOLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztJQUNoRCxJQUFNTyxLQUFLLEdBQUdILGFBQWEsQ0FBQ0ksWUFBWSxDQUFDRixjQUFjLENBQUM7SUFFeEQsSUFBSSxDQUFDQyxLQUFLLEVBQUU7TUFDUkUsRUFBRSxDQUFDQyxJQUFJLDZDQUF1Qk4sYUFBYSxDQUFDTyxJQUFJLCtDQUF3QjtNQUN4RSxPQUFPLElBQUk7SUFDZjs7SUFFQTtJQUNBLElBQUlKLEtBQUssQ0FBQ0ssVUFBVSxFQUFFLEVBQUU7TUFDcEJILEVBQUUsQ0FBQ0ksR0FBRyxvQkFBa0JULGFBQWEsQ0FBQ08sSUFBSSxvREFBWUosS0FBSyxDQUFDTyxLQUFLLGdEQUFVO01BQzNFLE9BQU87UUFDSEMsU0FBUyxFQUFFLEtBQUs7UUFDaEJDLFFBQVEsRUFBRVQsS0FBSyxDQUFDTyxLQUFLO1FBQ3JCRyxRQUFRLEVBQUVWLEtBQUssQ0FBQ08sS0FBSztRQUNyQkksV0FBVyxFQUFFLElBQUk7UUFDakJDLE9BQU8sa0RBQWFaLEtBQUssQ0FBQ087TUFDOUIsQ0FBQztJQUNMO0lBRUEsSUFBTUUsUUFBUSxHQUFH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TUFBTTtNQUNIO01BQ0FWLG9CQUFvQixDQUFDZ0Msa0JBQWtCLENBQUM3QixhQUFhLENBQUM7SUFDMUQ7SUFFQUssRUFBRSxDQUFDSSxHQUFHLG9CQUFrQlQsYUFBYSxDQUFDTyxJQUFJLG9EQUFjO0lBQ3hELE9BQU8sSUFBSTtFQUNmLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0kyRCxjQUFjLFdBQUFBLGVBQUNDLGNBQWMsRUFBRUosWUFBWSxFQUFTO0lBQUEsSUFBQUssS0FBQTtJQUFBLElBQXJCTCxZQUFZO01BQVpBLFlBQVksR0FBRyxJQUFJO0lBQUE7SUFDOUMsSUFBSSxDQUFDSSxjQUFjLElBQUlBLGNBQWMsQ0FBQ0UsTUFBTSxLQUFLLENBQUMsRUFBRTtNQUNoRGhFLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLHdCQUF3QixDQUFDO01BQ2pDO0lBQ0o7SUFFQTZELGNBQWMsQ0FBQ0csT0FBTyxDQUFDLFVBQUFDLElBQUksRUFBSTtNQUMzQkgsS0FBSSxDQUFDTixVQUFVLENBQUNTLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQzs7SUFFRjtJQUNBLElBQUlSLFlBQVksRUFBRTtNQUNkbEUsb0JBQW9CLENBQUMyRSxxQkFBcUIsRUFBRTtJQUNoRDtJQUVBbkUsRUFBRSxDQUFDSSxHQUFHLHVDQUFzQjBELGNBQWMsQ0FBQ0UsTUFBTSwyQ0FBVTtFQUMvRDtBQUNKLENBQUM7QUFFREksTUFBTSxDQUFDQyxPQUFPLEdBQUc1RSxXQUFXIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog562J57qn57O757ufXHJcbiAqIOWkhOeQhue7j+mqjOiOt+WPluOAgeWNh+e6p+mAu+i+keWSjOWxnuaAp+WPmOWMllxyXG4gKi9cclxuY29uc3QgTGV2ZWxDb25maWcgPSByZXF1aXJlKFwiTGV2ZWxDb25maWdcIik7XHJcbmNvbnN0IENoYXJhY3RlckRhdGFNYW5hZ2VyID0gcmVxdWlyZShcIkNoYXJhY3RlckRhdGFNYW5hZ2VyXCIpO1xyXG5cclxudmFyIExldmVsU3lzdGVtID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiDnu5nop5LoibLmt7vliqDnu4/pqozlgLxcclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gY2hhcmFjdGVyTm9kZSAtIOinkuiJsuiKgueCuVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGV4cFZhbHVlIC0g57uP6aqM5YC8XHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSDljYfnuqfkv6Hmga8geyBsZXZlbGVkVXA6IGJvb2xlYW4sIG9sZExldmVsOiBudW1iZXIsIG5ld0xldmVsOiBudW1iZXIsIHN0YXRDaGFuZ2VzOiBPYmplY3QgfVxyXG4gICAgICovXHJcbiAgICBhZGRFeHAoY2hhcmFjdGVyTm9kZSwgZXhwVmFsdWUpIHtcclxuICAgICAgICBjb25zdCBTdGF0c0NvbXBvbmVudCA9IHJlcXVpcmUoXCJTdGF0c0NvbXBvbmVudFwiKTtcclxuICAgICAgICBjb25zdCBzdGF0cyA9IGNoYXJhY3Rlck5vZGUuZ2V0Q29tcG9uZW50KFN0YXRzQ29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgaWYgKCFzdGF0cykge1xyXG4gICAgICAgICAgICBjYy53YXJuKGBbTGV2ZWxTeXN0ZW1dIOinkuiJsuiKgueCuSAke2NoYXJhY3Rlck5vZGUubmFtZX0g5rKh5pyJIFN0YXRzQ29tcG9uZW50IOe7hOS7tmApO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOajgOafpeaYr+WQpuW3sui+vuWIsOacgOWkp+etiee6p1xyXG4gICAgICAgIGlmIChzdGF0cy5pc01heExldmVsKCkpIHtcclxuICAgICAgICAgICAgY2MubG9nKGBbTGV2ZWxTeXN0ZW1dICR7Y2hhcmFjdGVyTm9kZS5uYW1lfSDlt7Lovr7liLDmnIDlpKfnrYnnuqcgJHtzdGF0cy5sZXZlbH3vvIzml6Dms5Xnu6fnu63ljYfnuqdgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGxldmVsZWRVcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBvbGRMZXZlbDogc3RhdHMubGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBuZXdMZXZlbDogc3RhdHMubGV2ZWwsXHJcbiAgICAgICAgICAgICAgICBzdGF0Q2hhbmdlczogbnVsbCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGDlt7Lovr7liLDmnIDlpKfnrYnnuqcgJHtzdGF0cy5sZXZlbH1gXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvbGRMZXZlbCA9IHN0YXRzLmxldmVsO1xyXG4gICAgICAgIGNvbnN0IG9sZFN0YXRzID0ge1xyXG4gICAgICAgICAgICBtYXhIcDogc3RhdHMubWF4SHAsXHJcbiAgICAgICAgICAgIGF0dGFjazogc3RhdHMuYXR0YWNrLFxyXG4gICAgICAgICAgICBkZWZlbnNlOiBzdGF0cy5kZWZlbnNlLFxyXG4gICAgICAgICAgICBzcGVlZDogc3RhdHMuc3BlZWQsXHJcbiAgICAgICAgICAgIGNyaXQ6IHN0YXRzLmNyaXQsXHJcbiAgICAgICAgICAgIG1pc3M6IHN0YXRzLm1pc3NcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyDmt7vliqDnu4/pqozlgLzvvIjkvJroh6rliqjlpITnkIbljYfnuqfvvIlcclxuICAgICAgICBjYy5sb2coYFtMZXZlbFN5c3RlbV0gJHtjaGFyYWN0ZXJOb2RlLm5hbWV9IOW9k+WJjeetiee6pzogJHtvbGRMZXZlbH0sIOW9k+WJjee7j+mqjDogJHtzdGF0cy5leHB9LCDmt7vliqDnu4/pqow6ICR7ZXhwVmFsdWV9YCk7XHJcbiAgICAgICAgY29uc3QgbGV2ZWxlZFVwID0gc3RhdHMuYWRkRXhwKGV4cFZhbHVlKTtcclxuICAgICAgICBjYy5sb2coYFtMZXZlbFN5c3RlbV0gJHtjaGFyYWN0ZXJOb2RlLm5hbWV9IOa3u+WKoOe7j+mqjOWQjiAtIOetiee6pzogJHtzdGF0cy5sZXZlbH0sIOe7j+mqjDogJHtzdGF0cy5leHB9LCDmmK/lkKbljYfnuqc6ICR7bGV2ZWxlZFVwfWApO1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgIGxldmVsZWRVcDogbGV2ZWxlZFVwLFxyXG4gICAgICAgICAgICBvbGRMZXZlbDogb2xkTGV2ZWwsXHJcbiAgICAgICAgICAgIG5ld0xldmVsOiBzdGF0cy5sZXZlbCxcclxuICAgICAgICAgICAgc3RhdENoYW5nZXM6IG51bGwsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGxldmVsZWRVcCA/IGDljYfnuqfliLAgJHtzdGF0cy5sZXZlbH0g57qn77yBYCA6IGDojrflvpcgJHtleHBWYWx1ZX0g57uP6aqM5YC8YFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIOWmguaenOWNh+e6p+S6hu+8jOiuoeeul+WxnuaAp+WPmOWMllxyXG4gICAgICAgIGlmIChsZXZlbGVkVXApIHtcclxuICAgICAgICAgICAgcmVzdWx0LnN0YXRDaGFuZ2VzID0ge1xyXG4gICAgICAgICAgICAgICAgbWF4SHA6IHN0YXRzLm1heEhwIC0gb2xkU3RhdHMubWF4SHAsXHJcbiAgICAgICAgICAgICAgICBhdHRhY2s6IHN0YXRzLmF0dGFjayAtIG9sZFN0YXRzLmF0dGFjayxcclxuICAgICAgICAgICAgICAgIGRlZmVuc2U6IHN0YXRzLmRlZmVuc2UgLSBvbGRTdGF0cy5kZWZlbnNlLFxyXG4gICAgICAgICAgICAgICAgc3BlZWQ6IHN0YXRzLnNwZWVkIC0gb2xkU3RhdHMuc3BlZWQsXHJcbiAgICAgICAgICAgICAgICBjcml0OiBzdGF0cy5jcml0IC0gb2xkU3RhdHMuY3JpdCxcclxuICAgICAgICAgICAgICAgIG1pc3M6IHN0YXRzLm1pc3MgLSBvbGRTdGF0cy5taXNzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNjLmxvZyhgW0xldmVsU3lzdGVtXSAke2NoYXJhY3Rlck5vZGUubmFtZX0g5Y2H57qn77yB5bGe5oCn5Y+Y5YyWOmAsIHJlc3VsdC5zdGF0Q2hhbmdlcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g6K6h566X6Led56a75LiL5LiA57qn6L+Y6ZyA6KaB5aSa5bCR57uP6aqMXHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMZXZlbEV4cCA9IExldmVsQ29uZmlnLmdldEV4cEZvckxldmVsKHN0YXRzLmxldmVsKTtcclxuICAgICAgICAgICAgY29uc3QgbmV4dExldmVsRXhwID0gTGV2ZWxDb25maWcuZ2V0RXhwRm9yTGV2ZWwoc3RhdHMubGV2ZWwgKyAxKTtcclxuICAgICAgICAgICAgY29uc3QgZXhwTmVlZGVkID0gbmV4dExldmVsRXhwIC0gc3RhdHMuZXhwO1xyXG4gICAgICAgICAgICBjYy5sb2coYFtMZXZlbFN5c3RlbV0gJHtjaGFyYWN0ZXJOb2RlLm5hbWV9IOacquWNh+e6p++8jOi3neemu+S4i+S4gOe6p+i/mOmcgOimgSAke2V4cE5lZWRlZH0g57uP6aqM5YC8YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDkv53lrZjop5LoibLmlbDmja7liLDmnKzlnLDlrZjlgqhcclxuICAgICAgICBDaGFyYWN0ZXJEYXRhTWFuYWdlci5zYXZlQ2hhcmFjdGVyTGV2ZWwoY2hhcmFjdGVyTm9kZSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5L2/55So57uP6aqM6YGT5YW3XHJcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGNoYXJhY3Rlck5vZGUgLSDop5LoibLoioLngrlcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBleHBJdGVtIC0g57uP6aqM6YGT5YW3IHsgaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBleHBWYWx1ZTogbnVtYmVyIH1cclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IOS9v+eUqOe7k+aenFxyXG4gICAgICovXHJcbiAgICB1c2VFeHBJdGVtKGNoYXJhY3Rlck5vZGUsIGV4cEl0ZW0pIHtcclxuICAgICAgICBpZiAoIWV4cEl0ZW0gfHwgIWV4cEl0ZW0uZXhwVmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCLml6DmlYjnmoTnu4/pqozpgZPlhbdcIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5hZGRFeHAoY2hhcmFjdGVyTm9kZSwgZXhwSXRlbS5leHBWYWx1ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIC4uLnJlc3VsdCxcclxuICAgICAgICAgICAgaXRlbU5hbWU6IGV4cEl0ZW0ubmFtZSB8fCBleHBJdGVtLmlkXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bop5LoibLnmoTnrYnnuqfkv6Hmga9cclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gY2hhcmFjdGVyTm9kZSAtIOinkuiJsuiKgueCuVxyXG4gICAgICogQHJldHVybnMge09iamVjdH0g562J57qn5L+h5oGvXHJcbiAgICAgKi9cclxuICAgIGdldExldmVsSW5mbyhjaGFyYWN0ZXJOb2RlKSB7XHJcbiAgICAgICAgY29uc3QgU3RhdHNDb21wb25lbnQgPSByZXF1aXJlKFwiU3RhdHNDb21wb25lbnRcIik7XHJcbiAgICAgICAgY29uc3Qgc3RhdHMgPSBjaGFyYWN0ZXJOb2RlLmdldENvbXBvbmVudChTdGF0c0NvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIGlmICghc3RhdHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50TGV2ZWxFeHAgPSBMZXZlbENvbmZpZy5nZXRFeHBGb3JMZXZlbChzdGF0cy5sZXZlbCk7XHJcbiAgICAgICAgY29uc3QgbmV4dExldmVsRXhwID0gTGV2ZWxDb25maWcuZ2V0RXhwRm9yTGV2ZWwoc3RhdHMubGV2ZWwgKyAxKTtcclxuICAgICAgICBjb25zdCBleHBJbkN1cnJlbnRMZXZlbCA9IHN0YXRzLmV4cCAtIGN1cnJlbnRMZXZlbEV4cDtcclxuICAgICAgICBjb25zdCBleHBUb05leHQgPSBuZXh0TGV2ZWxFeHAgLSBjdXJyZW50TGV2ZWxFeHA7XHJcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBMZXZlbENvbmZpZy5nZXRFeHBQcm9ncmVzcyhzdGF0cy5leHApO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsZXZlbDogc3RhdHMubGV2ZWwsXHJcbiAgICAgICAgICAgIGV4cDogc3RhdHMuZXhwLFxyXG4gICAgICAgICAgICBleHBJbkN1cnJlbnRMZXZlbDogZXhwSW5DdXJyZW50TGV2ZWwsXHJcbiAgICAgICAgICAgIGV4cFRvTmV4dDogZXhwVG9OZXh0LFxyXG4gICAgICAgICAgICBwcm9ncmVzczogcHJvZ3Jlc3MsXHJcbiAgICAgICAgICAgIGlzTWF4TGV2ZWw6IHN0YXRzLmlzTWF4TGV2ZWwoKSxcclxuICAgICAgICAgICAgYmFzZVN0YXRzOiB7XHJcbiAgICAgICAgICAgICAgICBocDogc3RhdHMuYmFzZUhwLFxyXG4gICAgICAgICAgICAgICAgYXR0YWNrOiBzdGF0cy5iYXNlQXR0YWNrLFxyXG4gICAgICAgICAgICAgICAgZGVmZW5zZTogc3RhdHMuYmFzZURlZmVuc2UsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogc3RhdHMuYmFzZVNwZWVkLFxyXG4gICAgICAgICAgICAgICAgY3JpdDogc3RhdHMuYmFzZUNyaXQsXHJcbiAgICAgICAgICAgICAgICBtaXNzOiBzdGF0cy5iYXNlTWlzc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjdXJyZW50U3RhdHM6IHtcclxuICAgICAgICAgICAgICAgIG1heEhwOiBzdGF0cy5tYXhIcCxcclxuICAgICAgICAgICAgICAgIGF0dGFjazogc3RhdHMuYXR0YWNrLFxyXG4gICAgICAgICAgICAgICAgZGVmZW5zZTogc3RhdHMuZGVmZW5zZSxcclxuICAgICAgICAgICAgICAgIHNwZWVkOiBzdGF0cy5zcGVlZCxcclxuICAgICAgICAgICAgICAgIGNyaXQ6IHN0YXRzLmNyaXQsXHJcbiAgICAgICAgICAgICAgICBtaXNzOiBzdGF0cy5taXNzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluinkuiJsueahOetiee6p+WSjOe7j+mqjOWAvFxyXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBjaGFyYWN0ZXJOb2RlIC0g6KeS6Imy6IqC54K5XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGV2ZWwgLSDliJ3lp4vnrYnnuqfvvIjlj6/pgInvvIzpu5jorqTkuLox77yM5aaC5p6c5pys5Zyw5pyJ5L+d5a2Y55qE5pWw5o2u5YiZ5LyY5YWI5L2/55So77yJXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZXhwIC0g5Yid5aeL57uP6aqM5YC877yI5Y+v6YCJ77yM6buY6K6k5Li6MO+8jOWmguaenOacrOWcsOacieS/neWtmOeahOaVsOaNruWImeS8mOWFiOS9v+eUqO+8iVxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb2FkRnJvbVN0b3JhZ2UgLSDmmK/lkKbku47mnKzlnLDlrZjlgqjliqDovb3mlbDmja7vvIjpu5jorqR0cnVl77yJXHJcbiAgICAgKi9cclxuICAgIGluaXRMZXZlbChjaGFyYWN0ZXJOb2RlLCBsZXZlbCA9IDEsIGV4cCA9IDAsIGxvYWRGcm9tU3RvcmFnZSA9IHRydWUpIHtcclxuICAgICAgICBjb25zdCBTdGF0c0NvbXBvbmVudCA9IHJlcXVpcmUoXCJTdGF0c0NvbXBvbmVudFwiKTtcclxuICAgICAgICBjb25zdCBzdGF0cyA9IGNoYXJhY3Rlck5vZGUuZ2V0Q29tcG9uZW50KFN0YXRzQ29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgaWYgKCFzdGF0cykge1xyXG4gICAgICAgICAgICBjYy53YXJuKGBbTGV2ZWxTeXN0ZW1dIOinkuiJsuiKgueCuSAke2NoYXJhY3Rlck5vZGUubmFtZX0g5rKh5pyJIFN0YXRzQ29tcG9uZW50IOe7hOS7tmApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDms6jmhI/vvJrkuI3lupTor6XlnKjov5nph4zosIPnlKhfc2F2ZUJhc2VTdGF0cygp77yM5Zug5Li65q2k5pe25bGe5oCn5Y+v6IO95bey57uP5bqU55So5LqG562J57qn5Yqg5oiQXHJcbiAgICAgICAgLy8g5Z+656GA5bGe5oCn5bqU6K+l5LuO5L+d5a2Y55qE5pWw5o2u5oiWdW5pdERhdGHkuK3ojrflj5bvvIzogIzkuI3mmK/ku47lvZPliY3lsZ7mgKfkuK3kv53lrZhcclxuICAgICAgICAvLyDln7rnoYDlsZ7mgKflupTor6XlnKjnrKzkuIDmrKHliJvlu7rop5LoibLml7bku45Vbml0RGF0YUNvbmZpZ+S4reiOt+WPluW5tuS/neWtmO+8jOS5i+WQjuS4jeW6lOivpeaUueWPmFxyXG5cclxuICAgICAgICAvLyDkvJjlhYjmo4Dmn6XnvJbovpHlmajkuK3mmK/lkKborr7nva7kuobnrYnnuqfmiJbnu4/pqozlgLxcclxuICAgICAgICBpZiAoc3RhdHMuX3VzZUVkaXRvclZhbHVlcykge1xyXG4gICAgICAgICAgICAvLyDlpoLmnpznvJbovpHlmajkuK3orr7nva7kuoblgLzvvIzkvJjlhYjkvb/nlKjnvJbovpHlmajkuK3nmoTlgLxcclxuICAgICAgICAgICAgbGV2ZWwgPSBzdGF0cy5sZXZlbDtcclxuICAgICAgICAgICAgZXhwID0gc3RhdHMuZXhwO1xyXG4gICAgICAgICAgICBjYy5sb2coYFtMZXZlbFN5c3RlbV0gJHtjaGFyYWN0ZXJOb2RlLm5hbWV9IOS9v+eUqOe8lui+keWZqOiuvue9rueahOWAvDog562J57qnICR7bGV2ZWx9LCDnu4/pqozlgLwgJHtleHB9YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g5bCd6K+V5LuO5pys5Zyw5a2Y5YKo5Yqg6L295pWw5o2uXHJcbiAgICAgICAgICAgIGxldCBzYXZlZERhdGEgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAobG9hZEZyb21TdG9yYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBzYXZlZERhdGEgPSBDaGFyYWN0ZXJEYXRhTWFuYWdlci5sb2FkQ2hhcmFjdGVyTGV2ZWwoY2hhcmFjdGVyTm9kZS5uYW1lKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g5aaC5p6c5pys5Zyw5pyJ5L+d5a2Y55qE5pWw5o2u77yM5LyY5YWI5L2/55So5L+d5a2Y55qE5pWw5o2uXHJcbiAgICAgICAgICAgIGlmIChzYXZlZERhdGEpIHtcclxuICAgICAgICAgICAgICAgIGxldmVsID0gc2F2ZWREYXRhLmxldmVsIHx8IGxldmVsO1xyXG4gICAgICAgICAgICAgICAgZXhwID0gc2F2ZWREYXRhLmV4cCB8fCBleHA7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtMZXZlbFN5c3RlbV0gJHtjaGFyYWN0ZXJOb2RlLm5hbWV9IOS7juacrOWcsOWtmOWCqOWKoOi9vTog562J57qnICR7bGV2ZWx9LCDnu4/pqozlgLwgJHtleHB9YCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDkvb/nlKjkvKDlhaXnmoTlj4LmlbDmiJbpu5jorqTlgLxcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhgW0xldmVsU3lzdGVtXSAke2NoYXJhY3Rlck5vZGUubmFtZX0g5L2/55So5Yid5aeL5YC8OiDnrYnnuqcgJHtsZXZlbH0sIOe7j+mqjOWAvCAke2V4cH1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6K6+572u562J57qn5ZKM57uP6aqM5YC8XHJcbiAgICAgICAgc3RhdHMubGV2ZWwgPSBNYXRoLm1heCgxLCBNYXRoLm1pbihsZXZlbCwgTGV2ZWxDb25maWcuTUFYX0xFVkVMKSk7XHJcblxyXG4gICAgICAgIC8vIOWmguaenOaMh+WumuS6hue7j+mqjOWAvO+8jOS9v+eUqOe7j+mqjOWAvO+8m+WQpuWImeS9v+eUqOetiee6p+WvueW6lOeahOe7j+mqjOWAvFxyXG4gICAgICAgIGlmIChleHAgPiAwKSB7XHJcbiAgICAgICAgICAgIHN0YXRzLmV4cCA9IGV4cDtcclxuICAgICAgICAgICAgc3RhdHMubGV2ZWwgPSBMZXZlbENvbmZpZy5nZXRMZXZlbEZyb21FeHAoZXhwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdGF0cy5leHAgPSBMZXZlbENvbmZpZy5nZXRFeHBGb3JMZXZlbChzdGF0cy5sZXZlbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDlupTnlKjnrYnnuqfliqDmiJBcclxuICAgICAgICBzdGF0cy5fYXBwbHlMZXZlbEJvbnVzKCk7XHJcblxyXG4gICAgICAgIC8vIOabtOaWsOe7j+mqjOadoeaYvuekulxyXG4gICAgICAgIHN0YXRzLnVwZGF0ZUV4cEJhcigpO1xyXG5cclxuICAgICAgICBjYy5sb2coYFtMZXZlbFN5c3RlbV0gJHtjaGFyYWN0ZXJOb2RlLm5hbWV9IOWIneWni+WMluWujOaIkDog562J57qnICR7c3RhdHMubGV2ZWx9LCDnu4/pqozlgLwgJHtzdGF0cy5leHB9YCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YeN572u6KeS6Imy55qE562J57qn5ZKM57uP6aqM5YC85YiwMee6p1xyXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBjaGFyYWN0ZXJOb2RlIC0g6KeS6Imy6IqC54K5XHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNsZWFyU3RvcmFnZSAtIOaYr+WQpua4hemZpOacrOWcsOWtmOWCqOeahOaVsOaNru+8iOm7mOiupHRydWXvvIlcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSDmmK/lkKbph43nva7miJDlip9cclxuICAgICAqL1xyXG4gICAgcmVzZXRMZXZlbChjaGFyYWN0ZXJOb2RlLCBjbGVhclN0b3JhZ2UgPSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgU3RhdHNDb21wb25lbnQgPSByZXF1aXJlKFwiU3RhdHNDb21wb25lbnRcIik7XHJcbiAgICAgICAgY29uc3Qgc3RhdHMgPSBjaGFyYWN0ZXJOb2RlLmdldENvbXBvbmVudChTdGF0c0NvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIGlmICghc3RhdHMpIHtcclxuICAgICAgICAgICAgY2Mud2FybihgW0xldmVsU3lzdGVtXSDop5LoibLoioLngrkgJHtjaGFyYWN0ZXJOb2RlLm5hbWV9IOayoeaciSBTdGF0c0NvbXBvbmVudCDnu4Tku7ZgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6YeN572u562J57qn5ZKM57uP6aqM5YC8XHJcbiAgICAgICAgc3RhdHMubGV2ZWwgPSAxO1xyXG4gICAgICAgIHN0YXRzLmV4cCA9IDA7XHJcblxyXG4gICAgICAgIC8vIOmHjeaWsOW6lOeUqOetiee6p+WKoOaIkO+8iDHnuqfml7bliqDmiJDkuLow77yM55u45b2T5LqO6YeN572u5bGe5oCn77yJXHJcbiAgICAgICAgc3RhdHMuX2FwcGx5TGV2ZWxCb251cygpO1xyXG5cclxuICAgICAgICAvLyDmm7TmlrBVSeaYvuekulxyXG4gICAgICAgIHN0YXRzLnVwZGF0ZUV4cEJhcigpO1xyXG4gICAgICAgIHN0YXRzLnVwZGF0ZUhlYWx0aEJhcigpO1xyXG5cclxuICAgICAgICAvLyDmuIXpmaTmnKzlnLDlrZjlgqjnmoTmlbDmja5cclxuICAgICAgICBpZiAoY2xlYXJTdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIENoYXJhY3RlckRhdGFNYW5hZ2VyLmRlbGV0ZUNoYXJhY3RlckRhdGEoY2hhcmFjdGVyTm9kZS5uYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDlpoLmnpzkuI3muIXpmaTlrZjlgqjvvIzkv53lrZjph43nva7lkI7nmoTmlbDmja5cclxuICAgICAgICAgICAgQ2hhcmFjdGVyRGF0YU1hbmFnZXIuc2F2ZUNoYXJhY3RlckxldmVsKGNoYXJhY3Rlck5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2MubG9nKGBbTGV2ZWxTeXN0ZW1dICR7Y2hhcmFjdGVyTm9kZS5uYW1lfSDnrYnnuqflt7Lph43nva7kuLogMSDnuqdgKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDph43nva7miYDmnInop5LoibLnmoTnrYnnuqflkoznu4/pqozlgLxcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGNoYXJhY3Rlck5vZGVzIC0g6KeS6Imy6IqC54K55pWw57uEXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNsZWFyU3RvcmFnZSAtIOaYr+WQpua4hemZpOacrOWcsOWtmOWCqOeahOaVsOaNru+8iOm7mOiupHRydWXvvIlcclxuICAgICAqL1xyXG4gICAgcmVzZXRBbGxMZXZlbHMoY2hhcmFjdGVyTm9kZXMsIGNsZWFyU3RvcmFnZSA9IHRydWUpIHtcclxuICAgICAgICBpZiAoIWNoYXJhY3Rlck5vZGVzIHx8IGNoYXJhY3Rlck5vZGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwiW0xldmVsU3lzdGVtXSDop5LoibLoioLngrnmlbDnu4TkuLrnqbpcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoYXJhY3Rlck5vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRMZXZlbChub2RlLCBmYWxzZSk7IC8vIOWFiOmHjee9ruaJgOacieiKgueCuVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDmnIDlkI7muIXpmaTmiYDmnInmnKzlnLDlrZjlgqjmlbDmja5cclxuICAgICAgICBpZiAoY2xlYXJTdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIENoYXJhY3RlckRhdGFNYW5hZ2VyLmNsZWFyQWxsQ2hhcmFjdGVyRGF0YSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2MubG9nKGBbTGV2ZWxTeXN0ZW1dIOW3sumHjee9riAke2NoYXJhY3Rlck5vZGVzLmxlbmd0aH0g5Liq6KeS6Imy55qE562J57qnYCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExldmVsU3lzdGVtO1xyXG4iXX0=