
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ecs/StatsComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ef1cAJ7YBLTqZ4xOaNP80Y', 'StatsComponent');
// Scripts/ecs/StatsComponent.js

"use strict";

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// @ts-nocheck
cc.Class({
  "extends": cc.Component,
  properties: {
    hp: 100,
    maxHp: 100,
    // 最大生命值
    attack: 1,
    defense: 1,
    speed: 1,
    miss: 0,
    crit: 0,
    immune: 0,
    attackInterval: 1,
    rage: 0,
    // 当前怒气值
    maxRage: 120,
    // 最大怒气值
    level: 1,
    // 当前等级
    exp: 0,
    // 当前经验值
    baseHp: 100,
    // 基础生命值（1级时的值）
    baseAttack: 1,
    // 基础攻击力（1级时的值）
    baseDefense: 1,
    // 基础防御力（1级时的值）
    baseSpeed: 1,
    // 基础速度（1级时的值）
    baseCrit: 0,
    // 基础暴击率（1级时的值）
    baseMiss: 0,
    // 基础闪避率（1级时的值）
    equipmentBonusAttack: 0,
    // 装备加成攻击
    equipmentBonusDefense: 0,
    // 装备加成防御
    equipmentBonusSpeed: 0 // 装备加成速度
  },
  onLoad: function onLoad() {
    this.updateAttackInterval();
    // 获取血条组件引用
    this.healthBar = this.node.getComponent("HealthBar");
    // 获取怒气条组件引用
    this.rageBar = this.node.getComponent("RageBar");
    // 获取经验条组件引用
    this.expBar = this.node.getComponent("ExpBar");

    // 检查编辑器中是否设置了等级或经验值（非默认值）
    var editorLevelSet = this.level !== 1;
    var editorExpSet = this.exp !== 0;

    // 如果编辑器中设置了等级或经验值，标记为使用编辑器值
    if (editorLevelSet || editorExpSet) {
      this._useEditorValues = true;
      cc.log("[StatsComponent] " + this.node.name + " \u68C0\u6D4B\u5230\u7F16\u8F91\u5668\u8BBE\u7F6E\u4E86\u7B49\u7EA7/\u7ECF\u9A8C\u503C: Lv." + this.level + ", Exp:" + this.exp);
    } else {
      this._useEditorValues = false;
    }

    // 初始化怒气条显示（确保从0开始）
    this.updateRageBar();
    // 初始化经验条显示（确保从0开始）
    this.updateExpBar();
    // 保存基础属性值（用于等级加成计算）
    this._saveBaseStats();
  },
  updateAttackInterval: function updateAttackInterval() {
    this.attackInterval = 1 / this.speed;
  },
  isDead: function isDead() {
    return this.hp <= 0;
  },
  /**
   * 更新血条显示
   * @param {number} damage - 本次受到的伤害(可选,用于显示伤害数字)
   * @param {string} type - 伤害类型: 'normal'(普通), 'crit'(暴击), 'miss'(闪避), 'heal'(治疗)
   */
  updateHealthBar: function updateHealthBar(damage, type) {
    if (type === void 0) {
      type = 'normal';
    }
    if (this.healthBar) {
      // 获取当前护盾值
      var shieldValue = 0;
      var BuffComponent = require("BuffComponent");
      var allBuffs = this.node.getComponents(BuffComponent);
      cc.log("[StatsComponent] " + this.node.name + " \u67E5\u627E\u62A4\u76FEBuff\uFF0C\u5F53\u524DBuff\u6570\u91CF: " + allBuffs.length);
      for (var _iterator = _createForOfIteratorHelperLoose(allBuffs), _step; !(_step = _iterator()).done;) {
        var buff = _step.value;
        cc.log("[StatsComponent] Buff: name=" + buff.buffName + ", shieldValue=" + buff.shieldValue);
      }
      var shieldBuff = allBuffs.find(function (b) {
        return b.buffName === "护盾";
      });
      if (shieldBuff) {
        shieldValue = shieldBuff.shieldValue || 0;
        cc.log("[StatsComponent] \u627E\u5230\u62A4\u76FEBuff: shieldValue=" + shieldValue + ", buffName=" + shieldBuff.buffName);
      } else {
        cc.log("[StatsComponent] \u672A\u627E\u5230\u62A4\u76FEBuff");
      }
      this.healthBar.updateHealth(this.hp, this.maxHp, shieldValue);
      // 显示伤害数字（包括闪避MISS）
      if (damage !== undefined) {
        if (type === 'miss') {
          // 闪避时显示MISS
          this.healthBar.showDamage(0, 'miss');
        } else if (damage > 0) {
          // 显示伤害（带类型）
          this.healthBar.showDamage(damage, type);
        }
      }
    }
  },
  /**
   * 增加怒气值（限制不超过最大值）
   * @param {number} value - 增加的怒气值
   */
  addRage: function addRage(value) {
    // 限制怒气值不超过最大值
    this.rage = Math.min(this.rage + value, this.maxRage);
    this.updateRageBar();
  },
  /**
   * 消耗怒气值（释放大招时）
   * @param {number} value - 消耗的怒气值
   */
  consumeRage: function consumeRage(value) {
    this.rage = Math.max(0, this.rage - value);
    this.updateRageBar();
  },
  /**
   * 检查怒气值是否已满
   * @returns {boolean}
   */
  isRageFull: function isRageFull() {
    return this.rage >= this.maxRage;
  },
  /**
   * 更新怒气条显示
   */
  updateRageBar: function updateRageBar() {
    if (this.rageBar) {
      this.rageBar.updateRage(this.rage, this.maxRage);
    }
  },
  /**
   * 保存基础属性值（1级时的值）
   */
  _saveBaseStats: function _saveBaseStats() {
    this.baseHp = this.maxHp;
    this.baseAttack = this.attack;
    this.baseDefense = this.defense;
    this.baseSpeed = this.speed;
    this.baseCrit = this.crit;
    this.baseMiss = this.miss;
  },
  /**
   * 增加经验值
   * @param {number} value - 增加的经验值
   * @returns {boolean} 是否升级
   */
  addExp: function addExp(value) {
    var LevelConfig = require("LevelConfig");
    var CharacterDataManager = require("CharacterDataManager");
    var oldLevel = this.level;
    var oldExp = this.exp;

    // 增加经验值
    this.exp += value;
    cc.log("[StatsComponent] " + this.node.name + " \u7ECF\u9A8C\u503C\u53D8\u5316: " + oldExp + " + " + value + " = " + this.exp);

    // 计算新等级
    var newLevel = LevelConfig.getLevelFromExp(this.exp);
    var leveledUp = newLevel > oldLevel;
    cc.log("[StatsComponent] " + this.node.name + " \u7B49\u7EA7\u8BA1\u7B97: \u65E7\u7B49\u7EA7=" + oldLevel + ", \u65B0\u7B49\u7EA7=" + newLevel + ", \u662F\u5426\u5347\u7EA7=" + leveledUp);
    if (leveledUp) {
      this.level = newLevel;
      // 应用等级加成
      this._applyLevelBonus();
      cc.log("[StatsComponent] \u2705 " + this.node.name + " \u5347\u7EA7\u5230 " + this.level + " \u7EA7\uFF01");
      cc.log("[StatsComponent] \u5C5E\u6027\u53D8\u5316 - HP: " + this.maxHp + ", ATK: " + this.attack + ", DEF: " + this.defense + ", SPD: " + this.speed);
    } else {
      // 计算距离下一级还需要多少经验
      var currentLevelExp = LevelConfig.getExpForLevel(this.level);
      var nextLevelExp = LevelConfig.getExpForLevel(this.level + 1);
      var expInCurrentLevel = this.exp - currentLevelExp;
      var expNeeded = nextLevelExp - currentLevelExp;
      cc.log("[StatsComponent] " + this.node.name + " \u5F53\u524D\u7ECF\u9A8C\u8FDB\u5EA6: " + expInCurrentLevel + "/" + expNeeded + " (" + (expInCurrentLevel / expNeeded * 100).toFixed(1) + "%)");
    }

    // 更新经验条显示
    this.updateExpBar();

    // 保存到本地存储（每次经验值变化都保存）
    CharacterDataManager.saveCharacterLevel(this.node);
    return leveledUp;
  },
  /**
   * 应用等级加成到属性（含装备加成）
   */
  _applyLevelBonus: function _applyLevelBonus() {
    var LevelConfig = require("LevelConfig");
    var eqAtk = this.equipmentBonusAttack || 0;
    var eqDef = this.equipmentBonusDefense || 0;
    var eqSpd = this.equipmentBonusSpeed || 0;
    this.maxHp = LevelConfig.calculateStatValue(this.baseHp, this.level, 'hp');
    this.attack = LevelConfig.calculateStatValue(this.baseAttack, this.level, 'attack') + eqAtk;
    this.defense = LevelConfig.calculateStatValue(this.baseDefense, this.level, 'defense') + eqDef;
    this.speed = LevelConfig.calculateStatValue(this.baseSpeed, this.level, 'speed') + eqSpd;
    this.crit = LevelConfig.calculateStatValue(this.baseCrit, this.level, 'crit');
    this.miss = LevelConfig.calculateStatValue(this.baseMiss, this.level, 'miss');

    // 更新攻击间隔
    this.updateAttackInterval();

    // 如果当前生命值超过新的最大生命值，调整为最大生命值
    if (this.hp > this.maxHp) {
      this.hp = this.maxHp;
    }

    // 更新血条显示
    this.updateHealthBar();
  },
  // 应用装备加成并刷新属性
  applyEquipmentBonuses: function applyEquipmentBonuses(bonuses) {
    if (!bonuses) return;
    this.equipmentBonusAttack = bonuses.attack || 0;
    this.equipmentBonusDefense = bonuses.defense || 0;
    this.equipmentBonusSpeed = bonuses.speed || 0;
    this._applyLevelBonus();
  },
  // 更新经验条显示
  updateExpBar: function updateExpBar() {
    if (this.expBar) {
      var LevelConfig = require("LevelConfig");
      var progress = LevelConfig.getExpProgress(this.exp);
      var currentLevel = LevelConfig.getLevelFromExp(this.exp);
      var expToNext = LevelConfig.getExpToNextLevel(currentLevel);
      var currentLevelExp = LevelConfig.getExpForLevel(currentLevel);
      var expInCurrentLevel = this.exp - currentLevelExp;
      this.expBar.updateExp(expInCurrentLevel, expToNext, currentLevel, progress);
    }
  },
  // 检查是否达到最大等级
  isMaxLevel: function isMaxLevel() {
    var LevelConfig = require("LevelConfig");
    return this.level >= LevelConfig.MAX_LEVEL;
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxTdGF0c0NvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImhwIiwibWF4SHAiLCJhdHRhY2siLCJkZWZlbnNlIiwic3BlZWQiLCJtaXNzIiwiY3JpdCIsImltbXVuZSIsImF0dGFja0ludGVydmFsIiwicmFnZSIsIm1heFJhZ2UiLCJsZXZlbCIsImV4cCIsImJhc2VIcCIsImJhc2VBdHRhY2siLCJiYXNlRGVmZW5zZSIsImJhc2VTcGVlZCIsImJhc2VDcml0IiwiYmFzZU1pc3MiLCJlcXVpcG1lbnRCb251c0F0dGFjayIsImVxdWlwbWVudEJvbnVzRGVmZW5zZSIsImVxdWlwbWVudEJvbnVzU3BlZWQiLCJvbkxvYWQiLCJ1cGRhdGVBdHRhY2tJbnRlcnZhbCIsImhlYWx0aEJhciIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJyYWdlQmFyIiwiZXhwQmFyIiwiZWRpdG9yTGV2ZWxTZXQiLCJlZGl0b3JFeHBTZXQiLCJfdXNlRWRpdG9yVmFsdWVzIiwibG9nIiwibmFtZSIsInVwZGF0ZVJhZ2VCYXIiLCJ1cGRhdGVFeHBCYXIiLCJfc2F2ZUJhc2VTdGF0cyIsImlzRGVhZCIsInVwZGF0ZUhlYWx0aEJhciIsImRhbWFnZSIsInR5cGUiLCJzaGllbGRWYWx1ZSIsIkJ1ZmZDb21wb25lbnQiLCJyZXF1aXJlIiwiYWxsQnVmZnMiLCJnZXRDb21wb25lbnRzIiwibGVuZ3RoIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIl9zdGVwIiwiZG9uZSIsImJ1ZmYiLCJ2YWx1ZSIsImJ1ZmZOYW1lIiwic2hpZWxkQnVmZiIsImZpbmQiLCJiIiwidXBkYXRlSGVhbHRoIiwidW5kZWZpbmVkIiwic2hvd0RhbWFnZSIsImFkZFJhZ2UiLCJNYXRoIiwibWluIiwiY29uc3VtZVJhZ2UiLCJtYXgiLCJpc1JhZ2VGdWxsIiwidXBkYXRlUmFnZSIsImFkZEV4cCIsIkxldmVsQ29uZmlnIiwiQ2hhcmFjdGVyRGF0YU1hbmFnZXIiLCJvbGRMZXZlbCIsIm9sZEV4cCIsIm5ld0xldmVsIiwiZ2V0TGV2ZWxGcm9tRXhwIiwibGV2ZWxlZFVwIiwiX2FwcGx5TGV2ZWxCb251cyIsImN1cnJlbnRMZXZlbEV4cCIsImdldEV4cEZvckxldmVsIiwibmV4dExldmVsRXhwIiwiZXhwSW5DdXJyZW50TGV2ZWwiLCJleHBOZWVkZWQiLCJ0b0ZpeGVkIiwic2F2ZUNoYXJhY3RlckxldmVsIiwiZXFBdGsiLCJlcURlZiIsImVxU3BkIiwiY2FsY3VsYXRlU3RhdFZhbHVlIiwiYXBwbHlFcXVpcG1lbnRCb251c2VzIiwiYm9udXNlcyIsInByb2dyZXNzIiwiZ2V0RXhwUHJvZ3Jlc3MiLCJjdXJyZW50TGV2ZWwiLCJleHBUb05leHQiLCJnZXRFeHBUb05leHRMZXZlbCIsInVwZGF0ZUV4cCIsImlzTWF4TGV2ZWwiLCJNQVhfTEVWRUwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxFQUFFLEVBQUUsR0FBRztJQUNQQyxLQUFLLEVBQUUsR0FBRztJQUFFO0lBQ1pDLE1BQU0sRUFBRSxDQUFDO0lBQ1RDLE9BQU8sRUFBRSxDQUFDO0lBQ1ZDLEtBQUssRUFBRSxDQUFDO0lBQ1JDLElBQUksRUFBRSxDQUFDO0lBQ1BDLElBQUksRUFBRSxDQUFDO0lBQ1BDLE1BQU0sRUFBRSxDQUFDO0lBQ1RDLGNBQWMsRUFBRSxDQUFDO0lBQ2pCQyxJQUFJLEVBQUUsQ0FBQztJQUFPO0lBQ2RDLE9BQU8sRUFBRSxHQUFHO0lBQUc7SUFDZkMsS0FBSyxFQUFFLENBQUM7SUFBTztJQUNmQyxHQUFHLEVBQUUsQ0FBQztJQUFTO0lBQ2ZDLE1BQU0sRUFBRSxHQUFHO0lBQUk7SUFDZkMsVUFBVSxFQUFFLENBQUM7SUFBRztJQUNoQkMsV0FB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QUksQ0FBQzlFLEdBQUcsQ0FBQztNQUNyRCxJQUFNK0UsWUFBWSxHQUFHdkIsV0FBVyxDQUFDSyxlQUFlLENBQUMsSUFBSSxDQUFDN0QsR0FBRyxDQUFDO01BQzFELElBQU1nRixTQUFTLEdBQUd4QixXQUFXLENBQUN5QixpQkFBaUIsQ0FBQ0YsWUFBWSxDQUFDO01BQzdELElBQU1mLGVBQWUsR0FBR1IsV0FBVyxDQUFDUyxjQUFjLENBQUNjLFlBQVksQ0FBQztNQUNoRSxJQUFNWixpQkFBaUIsR0FBRyxJQUFJLENBQUNuRSxHQUFHLEdBQUdnRSxlQUFlO01BRXBELElBQUksQ0FBQ2hELE1BQU0sQ0FBQ2tFLFNBQVMsQ0FBQ2YsaUJBQWlCLEVBQUVhLFNBQVMsRUFBRUQsWUFBWSxFQUFFRixRQUFRLENBQUM7SUFDL0U7RUFDSixDQUFDO0VBRUQ7RUFDQU0sVUFBVSxXQUFBQSxXQUFBLEVBQUc7SUFDVCxJQUFNM0IsV0FBVyxHQUFHekIsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUMxQyxPQUFPLElBQUksQ0FBQ2hDLEtBQUssSUFBSXlELFdBQVcsQ0FBQzRCLFNBQVM7RUFDOUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1ub2NoZWNrXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBocDogMTAwLFxuICAgICAgICBtYXhIcDogMTAwLCAvLyDmnIDlpKfnlJ/lkb3lgLxcbiAgICAgICAgYXR0YWNrOiAxLFxuICAgICAgICBkZWZlbnNlOiAxLFxuICAgICAgICBzcGVlZDogMSxcbiAgICAgICAgbWlzczogMCxcbiAgICAgICAgY3JpdDogMCxcbiAgICAgICAgaW1tdW5lOiAwLFxuICAgICAgICBhdHRhY2tJbnRlcnZhbDogMSxcbiAgICAgICAgcmFnZTogMCwgICAgICAvLyDlvZPliY3mgJLmsJTlgLxcbiAgICAgICAgbWF4UmFnZTogMTIwLCAgLy8g5pyA5aSn5oCS5rCU5YC8XG4gICAgICAgIGxldmVsOiAxLCAgICAgIC8vIOW9k+WJjeetiee6p1xuICAgICAgICBleHA6IDAsICAgICAgICAvLyDlvZPliY3nu4/pqozlgLxcbiAgICAgICAgYmFzZUhwOiAxMDAsICAgLy8g5Z+656GA55Sf5ZG95YC877yIMee6p+aXtueahOWAvO+8iVxuICAgICAgICBiYXNlQXR0YWNrOiAxLCAgLy8g5Z+656GA5pS75Ye75Yqb77yIMee6p+aXtueahOWAvO+8iVxuICAgICAgICBiYXNlRGVmZW5zZTogMSwgLy8g5Z+656GA6Ziy5b6h5Yqb77yIMee6p+aXtueahOWAvO+8iVxuICAgICAgICBiYXNlU3BlZWQ6IDEsICAgLy8g5Z+656GA6YCf5bqm77yIMee6p+aXtueahOWAvO+8iVxuICAgICAgICBiYXNlQ3JpdDogMCwgICAgLy8g5Z+656GA5pq05Ye7546H77yIMee6p+aXtueahOWAvO+8iVxuICAgICAgICBiYXNlTWlzczogMCwgICAgLy8g5Z+656GA6Zeq6YG/546H77yIMee6p+aXtueahOWAvO+8iVxuICAgICAgICBlcXVpcG1lbnRCb251c0F0dGFjazogMCwgICAvLyDoo4XlpIfliqDmiJDmlLvlh7tcbiAgICAgICAgZXF1aXBtZW50Qm9udXNEZWZlbnNlOiAwLCAgLy8g6KOF5aSH5Yqg5oiQ6Ziy5b6hXG4gICAgICAgIGVxdWlwbWVudEJvbnVzU3BlZWQ6IDAgICAgIC8vIOijheWkh+WKoOaIkOmAn+W6plxuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQXR0YWNrSW50ZXJ2YWwoKTtcbiAgICAgICAgLy8g6I635Y+W6KGA5p2h57uE5Lu25byV55SoXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChcIkhlYWx0aEJhclwiKTtcbiAgICAgICAgLy8g6I635Y+W5oCS5rCU5p2h57uE5Lu25byV55SoXG4gICAgICAgIHRoaXMucmFnZUJhciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoXCJSYWdlQmFyXCIpO1xuICAgICAgICAvLyDojrflj5bnu4/pqozmnaHnu4Tku7blvJXnlKhcbiAgICAgICAgdGhpcy5leHBCYXIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFwiRXhwQmFyXCIpO1xuXG4gICAgICAgIC8vIOajgOafpee8lui+keWZqOS4reaYr+WQpuiuvue9ruS6huetiee6p+aIlue7j+mqjOWAvO+8iOmdnum7mOiupOWAvO+8iVxuICAgICAgICBjb25zdCBlZGl0b3JMZXZlbFNldCA9IHRoaXMubGV2ZWwgIT09IDE7XG4gICAgICAgIGNvbnN0IGVkaXRvckV4cFNldCA9IHRoaXMuZXhwICE9PSAwO1xuXG4gICAgICAgIC8vIOWmguaenOe8lui+keWZqOS4reiuvue9ruS6huetiee6p+aIlue7j+mqjOWAvO+8jOagh+iusOS4uuS9v+eUqOe8lui+keWZqOWAvFxuICAgICAgICBpZiAoZWRpdG9yTGV2ZWxTZXQgfHwgZWRpdG9yRXhwU2V0KSB7XG4gICAgICAgICAgICB0aGlzLl91c2VFZGl0b3JWYWx1ZXMgPSB0cnVlO1xuICAgICAgICAgICAgY2MubG9nKGBbU3RhdHNDb21wb25lbnRdICR7dGhpcy5ub2RlLm5hbWV9IOajgOa1i+WIsOe8lui+keWZqOiuvue9ruS6huetiee6py/nu4/pqozlgLw6IEx2LiR7dGhpcy5sZXZlbH0sIEV4cDoke3RoaXMuZXhwfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdXNlRWRpdG9yVmFsdWVzID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDliJ3lp4vljJbmgJLmsJTmnaHmmL7npLrvvIjnoa7kv53ku44w5byA5aeL77yJXG4gICAgICAgIHRoaXMudXBkYXRlUmFnZUJhcigpO1xuICAgICAgICAvLyDliJ3lp4vljJbnu4/pqozmnaHmmL7npLrvvIjnoa7kv53ku44w5byA5aeL77yJXG4gICAgICAgIHRoaXMudXBkYXRlRXhwQmFyKCk7XG4gICAgICAgIC8vIOS/neWtmOWfuuehgOWxnuaAp+WAvO+8iOeUqOS6juetiee6p+WKoOaIkOiuoeeul++8iVxuICAgICAgICB0aGlzLl9zYXZlQmFzZVN0YXRzKCk7XG4gICAgfSxcblxuICAgIHVwZGF0ZUF0dGFja0ludGVydmFsKCkge1xuICAgICAgICB0aGlzLmF0dGFja0ludGVydmFsID0gMSAvIHRoaXMuc3BlZWQ7XG4gICAgfSxcblxuICAgIGlzRGVhZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHAgPD0gMDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5pu05paw6KGA5p2h5pi+56S6XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRhbWFnZSAtIOacrOasoeWPl+WIsOeahOS8pOWusyjlj6/pgIks55So5LqO5pi+56S65Lyk5a6z5pWw5a2XKVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0g5Lyk5a6z57G75Z6LOiAnbm9ybWFsJyjmma7pgJopLCAnY3JpdCco5pq05Ye7KSwgJ21pc3MnKOmXqumBvyksICdoZWFsJyjmsrvnlpcpXG4gICAgICovXG4gICAgdXBkYXRlSGVhbHRoQmFyKGRhbWFnZSwgdHlwZSA9ICdub3JtYWwnKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWx0aEJhcikge1xuICAgICAgICAgICAgLy8g6I635Y+W5b2T5YmN5oqk55u+5YC8XG4gICAgICAgICAgICBsZXQgc2hpZWxkVmFsdWUgPSAwO1xuICAgICAgICAgICAgY29uc3QgQnVmZkNvbXBvbmVudCA9IHJlcXVpcmUoXCJCdWZmQ29tcG9uZW50XCIpO1xuICAgICAgICAgICAgY29uc3QgYWxsQnVmZnMgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50cyhCdWZmQ29tcG9uZW50KTtcbiAgICAgICAgICAgIGNjLmxvZyhgW1N0YXRzQ29tcG9uZW50XSAke3RoaXMubm9kZS5uYW1lfSDmn6Xmib7miqTnm75CdWZm77yM5b2T5YmNQnVmZuaVsOmHjzogJHthbGxCdWZmcy5sZW5ndGh9YCk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGJ1ZmYgb2YgYWxsQnVmZnMpIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtTdGF0c0NvbXBvbmVudF0gQnVmZjogbmFtZT0ke2J1ZmYuYnVmZk5hbWV9LCBzaGllbGRWYWx1ZT0ke2J1ZmYuc2hpZWxkVmFsdWV9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHNoaWVsZEJ1ZmYgPSBhbGxCdWZmcy5maW5kKGIgPT4gYi5idWZmTmFtZSA9PT0gXCLmiqTnm75cIik7XG4gICAgICAgICAgICBpZiAoc2hpZWxkQnVmZikge1xuICAgICAgICAgICAgICAgIHNoaWVsZFZhbHVlID0gc2hpZWxkQnVmZi5zaGllbGRWYWx1ZSB8fCAwO1xuICAgICAgICAgICAgICAgIGNjLmxvZyhgW1N0YXRzQ29tcG9uZW50XSDmib7liLDmiqTnm75CdWZmOiBzaGllbGRWYWx1ZT0ke3NoaWVsZFZhbHVlfSwgYnVmZk5hbWU9JHtzaGllbGRCdWZmLmJ1ZmZOYW1lfWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtTdGF0c0NvbXBvbmVudF0g5pyq5om+5Yiw5oqk55u+QnVmZmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmhlYWx0aEJhci51cGRhdGVIZWFsdGgodGhpcy5ocCwgdGhpcy5tYXhIcCwgc2hpZWxkVmFsdWUpO1xuICAgICAgICAgICAgLy8g5pi+56S65Lyk5a6z5pWw5a2X77yI5YyF5ous6Zeq6YG/TUlTU++8iVxuICAgICAgICAgICAgaWYgKGRhbWFnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdtaXNzJykge1xuICAgICAgICAgICAgICAgICAgICAvLyDpl6rpgb/ml7bmmL7npLpNSVNTXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLnNob3dEYW1hZ2UoMCwgJ21pc3MnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhbWFnZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5pi+56S65Lyk5a6z77yI5bim57G75Z6L77yJXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLnNob3dEYW1hZ2UoZGFtYWdlLCB0eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5aKe5Yqg5oCS5rCU5YC877yI6ZmQ5Yi25LiN6LaF6L+H5pyA5aSn5YC877yJXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0g5aKe5Yqg55qE5oCS5rCU5YC8XG4gICAgICovXG4gICAgYWRkUmFnZSh2YWx1ZSkge1xuICAgICAgICAvLyDpmZDliLbmgJLmsJTlgLzkuI3otoXov4fmnIDlpKflgLxcbiAgICAgICAgdGhpcy5yYWdlID0gTWF0aC5taW4odGhpcy5yYWdlICsgdmFsdWUsIHRoaXMubWF4UmFnZSk7XG4gICAgICAgIHRoaXMudXBkYXRlUmFnZUJhcigpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmtojogJfmgJLmsJTlgLzvvIjph4rmlL7lpKfmi5vml7bvvIlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSDmtojogJfnmoTmgJLmsJTlgLxcbiAgICAgKi9cbiAgICBjb25zdW1lUmFnZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnJhZ2UgPSBNYXRoLm1heCgwLCB0aGlzLnJhZ2UgLSB2YWx1ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlUmFnZUJhcigpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmo4Dmn6XmgJLmsJTlgLzmmK/lkKblt7Lmu6FcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1JhZ2VGdWxsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yYWdlID49IHRoaXMubWF4UmFnZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5pu05paw5oCS5rCU5p2h5pi+56S6XG4gICAgICovXG4gICAgdXBkYXRlUmFnZUJhcigpIHtcbiAgICAgICAgaWYgKHRoaXMucmFnZUJhcikge1xuICAgICAgICAgICAgdGhpcy5yYWdlQmFyLnVwZGF0ZVJhZ2UodGhpcy5yYWdlLCB0aGlzLm1heFJhZ2UpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOS/neWtmOWfuuehgOWxnuaAp+WAvO+8iDHnuqfml7bnmoTlgLzvvIlcbiAgICAgKi9cbiAgICBfc2F2ZUJhc2VTdGF0cygpIHtcbiAgICAgICAgdGhpcy5iYXNlSHAgPSB0aGlzLm1heEhwO1xuICAgICAgICB0aGlzLmJhc2VBdHRhY2sgPSB0aGlzLmF0dGFjaztcbiAgICAgICAgdGhpcy5iYXNlRGVmZW5zZSA9IHRoaXMuZGVmZW5zZTtcbiAgICAgICAgdGhpcy5iYXNlU3BlZWQgPSB0aGlzLnNwZWVkO1xuICAgICAgICB0aGlzLmJhc2VDcml0ID0gdGhpcy5jcml0O1xuICAgICAgICB0aGlzLmJhc2VNaXNzID0gdGhpcy5taXNzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDlop7liqDnu4/pqozlgLxcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSDlop7liqDnmoTnu4/pqozlgLxcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g5piv5ZCm5Y2H57qnXG4gICAgICovXG4gICAgYWRkRXhwKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IExldmVsQ29uZmlnID0gcmVxdWlyZShcIkxldmVsQ29uZmlnXCIpO1xuICAgICAgICBjb25zdCBDaGFyYWN0ZXJEYXRhTWFuYWdlciA9IHJlcXVpcmUoXCJDaGFyYWN0ZXJEYXRhTWFuYWdlclwiKTtcbiAgICAgICAgY29uc3Qgb2xkTGV2ZWwgPSB0aGlzLmxldmVsO1xuICAgICAgICBjb25zdCBvbGRFeHAgPSB0aGlzLmV4cDtcblxuICAgICAgICAvLyDlop7liqDnu4/pqozlgLxcbiAgICAgICAgdGhpcy5leHAgKz0gdmFsdWU7XG4gICAgICAgIGNjLmxvZyhgW1N0YXRzQ29tcG9uZW50XSAke3RoaXMubm9kZS5uYW1lfSDnu4/pqozlgLzlj5jljJY6ICR7b2xkRXhwfSArICR7dmFsdWV9ID0gJHt0aGlzLmV4cH1gKTtcblxuICAgICAgICAvLyDorqHnrpfmlrDnrYnnuqdcbiAgICAgICAgY29uc3QgbmV3TGV2ZWwgPSBMZXZlbENvbmZpZy5nZXRMZXZlbEZyb21FeHAodGhpcy5leHApO1xuICAgICAgICBjb25zdCBsZXZlbGVkVXAgPSBuZXdMZXZlbCA+IG9sZExldmVsO1xuXG4gICAgICAgIGNjLmxvZyhgW1N0YXRzQ29tcG9uZW50XSAke3RoaXMubm9kZS5uYW1lfSDnrYnnuqforqHnrpc6IOaXp+etiee6pz0ke29sZExldmVsfSwg5paw562J57qnPSR7bmV3TGV2ZWx9LCDmmK/lkKbljYfnuqc9JHtsZXZlbGVkVXB9YCk7XG5cbiAgICAgICAgaWYgKGxldmVsZWRVcCkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbCA9IG5ld0xldmVsO1xuICAgICAgICAgICAgLy8g5bqU55So562J57qn5Yqg5oiQXG4gICAgICAgICAgICB0aGlzLl9hcHBseUxldmVsQm9udXMoKTtcbiAgICAgICAgICAgIGNjLmxvZyhgW1N0YXRzQ29tcG9uZW50XSDinIUgJHt0aGlzLm5vZGUubmFtZX0g5Y2H57qn5YiwICR7dGhpcy5sZXZlbH0g57qn77yBYCk7XG4gICAgICAgICAgICBjYy5sb2coYFtTdGF0c0NvbXBvbmVudF0g5bGe5oCn5Y+Y5YyWIC0gSFA6ICR7dGhpcy5tYXhIcH0sIEFUSzogJHt0aGlzLmF0dGFja30sIERFRjogJHt0aGlzLmRlZmVuc2V9LCBTUEQ6ICR7dGhpcy5zcGVlZH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOiuoeeul+i3neemu+S4i+S4gOe6p+i/mOmcgOimgeWkmuWwkee7j+mqjFxuICAgICAgICAgICAgY29uc3QgY3VycmVudExldmVsRXhwID0gTGV2ZWxDb25maWcuZ2V0RXhwRm9yTGV2ZWwodGhpcy5sZXZlbCk7XG4gICAgICAgICAgICBjb25zdCBuZXh0TGV2ZWxFeHAgPSBMZXZlbENvbmZpZy5nZXRFeHBGb3JMZXZlbCh0aGlzLmxldmVsICsgMSk7XG4gICAgICAgICAgICBjb25zdCBleHBJbkN1cnJlbnRMZXZlbCA9IHRoaXMuZXhwIC0gY3VycmVudExldmVsRXhwO1xuICAgICAgICAgICAgY29uc3QgZXhwTmVlZGVkID0gbmV4dExldmVsRXhwIC0gY3VycmVudExldmVsRXhwO1xuICAgICAgICAgICAgY2MubG9nKGBbU3RhdHNDb21wb25lbnRdICR7dGhpcy5ub2RlLm5hbWV9IOW9k+WJjee7j+mqjOi/m+W6pjogJHtleHBJbkN1cnJlbnRMZXZlbH0vJHtleHBOZWVkZWR9ICgkeygoZXhwSW5DdXJyZW50TGV2ZWwgLyBleHBOZWVkZWQpICogMTAwKS50b0ZpeGVkKDEpfSUpYCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmm7TmlrDnu4/pqozmnaHmmL7npLpcbiAgICAgICAgdGhpcy51cGRhdGVFeHBCYXIoKTtcblxuICAgICAgICAvLyDkv53lrZjliLDmnKzlnLDlrZjlgqjvvIjmr4/mrKHnu4/pqozlgLzlj5jljJbpg73kv53lrZjvvIlcbiAgICAgICAgQ2hhcmFjdGVyRGF0YU1hbmFnZXIuc2F2ZUNoYXJhY3RlckxldmVsKHRoaXMubm9kZSk7XG5cbiAgICAgICAgcmV0dXJuIGxldmVsZWRVcDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5bqU55So562J57qn5Yqg5oiQ5Yiw5bGe5oCn77yI5ZCr6KOF5aSH5Yqg5oiQ77yJXG4gICAgICovXG4gICAgX2FwcGx5TGV2ZWxCb251cygpIHtcbiAgICAgICAgY29uc3QgTGV2ZWxDb25maWcgPSByZXF1aXJlKFwiTGV2ZWxDb25maWdcIik7XG5cbiAgICAgICAgY29uc3QgZXFBdGsgPSB0aGlzLmVxdWlwbWVudEJvbnVzQXR0YWNrIHx8IDA7XG4gICAgICAgIGNvbnN0IGVxRGVmID0gdGhpcy5lcXVpcG1lbnRCb251c0RlZmVuc2UgfHwgMDtcbiAgICAgICAgY29uc3QgZXFTcGQgPSB0aGlzLmVxdWlwbWVudEJvbnVzU3BlZWQgfHwgMDtcblxuICAgICAgICB0aGlzLm1heEhwID0gTGV2ZWxDb25maWcuY2FsY3VsYXRlU3RhdFZhbHVlKHRoaXMuYmFzZUhwLCB0aGlzLmxldmVsLCAnaHAnKTtcbiAgICAgICAgdGhpcy5hdHRhY2sgPSBMZXZlbENvbmZpZy5jYWxjdWxhdGVTdGF0VmFsdWUodGhpcy5iYXNlQXR0YWNrLCB0aGlzLmxldmVsLCAnYXR0YWNrJykgKyBlcUF0aztcbiAgICAgICAgdGhpcy5kZWZlbnNlID0gTGV2ZWxDb25maWcuY2FsY3VsYXRlU3RhdFZhbHVlKHRoaXMuYmFzZURlZmVuc2UsIHRoaXMubGV2ZWwsICdkZWZlbnNlJykgKyBlcURlZjtcbiAgICAgICAgdGhpcy5zcGVlZCA9IExldmVsQ29uZmlnLmNhbGN1bGF0ZVN0YXRWYWx1ZSh0aGlzLmJhc2VTcGVlZCwgdGhpcy5sZXZlbCwgJ3NwZWVkJykgKyBlcVNwZDtcbiAgICAgICAgdGhpcy5jcml0ID0gTGV2ZWxDb25maWcuY2FsY3VsYXRlU3RhdFZhbHVlKHRoaXMuYmFzZUNyaXQsIHRoaXMubGV2ZWwsICdjcml0Jyk7XG4gICAgICAgIHRoaXMubWlzcyA9IExldmVsQ29uZmlnLmNhbGN1bGF0ZVN0YXRWYWx1ZSh0aGlzLmJhc2VNaXNzLCB0aGlzLmxldmVsLCAnbWlzcycpO1xuXG4gICAgICAgIC8vIOabtOaWsOaUu+WHu+mXtOmalFxuICAgICAgICB0aGlzLnVwZGF0ZUF0dGFja0ludGVydmFsKCk7XG5cbiAgICAgICAgLy8g5aaC5p6c5b2T5YmN55Sf5ZG95YC86LaF6L+H5paw55qE5pyA5aSn55Sf5ZG95YC877yM6LCD5pW05Li65pyA5aSn55Sf5ZG95YC8XG4gICAgICAgIGlmICh0aGlzLmhwID4gdGhpcy5tYXhIcCkge1xuICAgICAgICAgICAgdGhpcy5ocCA9IHRoaXMubWF4SHA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmm7TmlrDooYDmnaHmmL7npLpcbiAgICAgICAgdGhpcy51cGRhdGVIZWFsdGhCYXIoKTtcbiAgICB9LFxuXG4gICAgLy8g5bqU55So6KOF5aSH5Yqg5oiQ5bm25Yi35paw5bGe5oCnXG4gICAgYXBwbHlFcXVpcG1lbnRCb251c2VzKGJvbnVzZXMpIHtcbiAgICAgICAgaWYgKCFib251c2VzKSByZXR1cm47XG4gICAgICAgIHRoaXMuZXF1aXBtZW50Qm9udXNBdHRhY2sgPSBib251c2VzLmF0dGFjayB8fCAwO1xuICAgICAgICB0aGlzLmVxdWlwbWVudEJvbnVzRGVmZW5zZSA9IGJvbnVzZXMuZGVmZW5zZSB8fCAwO1xuICAgICAgICB0aGlzLmVxdWlwbWVudEJvbnVzU3BlZWQgPSBib251c2VzLnNwZWVkIHx8IDA7XG4gICAgICAgIHRoaXMuX2FwcGx5TGV2ZWxCb251cygpO1xuICAgIH0sXG5cbiAgICAvLyDmm7TmlrDnu4/pqozmnaHmmL7npLpcbiAgICB1cGRhdGVFeHBCYXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmV4cEJhcikge1xuICAgICAgICAgICAgY29uc3QgTGV2ZWxDb25maWcgPSByZXF1aXJlKFwiTGV2ZWxDb25maWdcIik7XG4gICAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IExldmVsQ29uZmlnLmdldEV4cFByb2dyZXNzKHRoaXMuZXhwKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMZXZlbCA9IExldmVsQ29uZmlnLmdldExldmVsRnJvbUV4cCh0aGlzLmV4cCk7XG4gICAgICAgICAgICBjb25zdCBleHBUb05leHQgPSBMZXZlbENvbmZpZy5nZXRFeHBUb05leHRMZXZlbChjdXJyZW50TGV2ZWwpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudExldmVsRXhwID0gTGV2ZWxDb25maWcuZ2V0RXhwRm9yTGV2ZWwoY3VycmVudExldmVsKTtcbiAgICAgICAgICAgIGNvbnN0IGV4cEluQ3VycmVudExldmVsID0gdGhpcy5leHAgLSBjdXJyZW50TGV2ZWxFeHA7XG5cbiAgICAgICAgICAgIHRoaXMuZXhwQmFyLnVwZGF0ZUV4cChleHBJbkN1cnJlbnRMZXZlbCwgZXhwVG9OZXh0LCBjdXJyZW50TGV2ZWwsIHByb2dyZXNzKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyDmo4Dmn6XmmK/lkKbovr7liLDmnIDlpKfnrYnnuqdcbiAgICBpc01heExldmVsKCkge1xuICAgICAgICBjb25zdCBMZXZlbENvbmZpZyA9IHJlcXVpcmUoXCJMZXZlbENvbmZpZ1wiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubGV2ZWwgPj0gTGV2ZWxDb25maWcuTUFYX0xFVkVMO1xuICAgIH1cbn0pO1xuXG4iXX0=