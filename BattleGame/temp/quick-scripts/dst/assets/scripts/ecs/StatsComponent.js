
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
    baseMiss: 0 // 基础闪避率（1级时的值）
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
   * 应用等级加成到属性
   */
  _applyLevelBonus: function _applyLevelBonus() {
    var LevelConfig = require("LevelConfig");

    // 根据等级重新计算属性值
    this.maxHp = LevelConfig.calculateStatValue(this.baseHp, this.level, 'hp');
    this.attack = LevelConfig.calculateStatValue(this.baseAttack, this.level, 'attack');
    this.defense = LevelConfig.calculateStatValue(this.baseDefense, this.level, 'defense');
    this.speed = LevelConfig.calculateStatValue(this.baseSpeed, this.level, 'speed');
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
  /**
   * 更新经验条显示
   */
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
  /**
   * 检查是否达到最大等级
   * @returns {boolean}
   */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxTdGF0c0NvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImhwIiwibWF4SHAiLCJhdHRhY2siLCJkZWZlbnNlIiwic3BlZWQiLCJtaXNzIiwiY3JpdCIsImltbXVuZSIsImF0dGFja0ludGVydmFsIiwicmFnZSIsIm1heFJhZ2UiLCJsZXZlbCIsImV4cCIsImJhc2VIcCIsImJhc2VBdHRhY2siLCJiYXNlRGVmZW5zZSIsImJhc2VTcGVlZCIsImJhc2VDcml0IiwiYmFzZU1pc3MiLCJvbkxvYWQiLCJ1cGRhdGVBdHRhY2tJbnRlcnZhbCIsImhlYWx0aEJhciIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJyYWdlQmFyIiwiZXhwQmFyIiwiZWRpdG9yTGV2ZWxTZXQiLCJlZGl0b3JFeHBTZXQiLCJfdXNlRWRpdG9yVmFsdWVzIiwibG9nIiwibmFtZSIsInVwZGF0ZVJhZ2VCYXIiLCJ1cGRhdGVFeHBCYXIiLCJfc2F2ZUJhc2VTdGF0cyIsImlzRGVhZCIsInVwZGF0ZUhlYWx0aEJhciIsImRhbWFnZSIsInR5cGUiLCJzaGllbGRWYWx1ZSIsIkJ1ZmZDb21wb25lbnQiLCJyZXF1aXJlIiwiYWxsQnVmZnMiLCJnZXRDb21wb25lbnRzIiwibGVuZ3RoIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIl9zdGVwIiwiZG9uZSIsImJ1ZmYiLCJ2YWx1ZSIsImJ1ZmZOYW1lIiwic2hpZWxkQnVmZiIsImZpbmQiLCJiIiwidXBkYXRlSGVhbHRoIiwidW5kZWZpbmVkIiwic2hvd0RhbWFnZSIsImFkZFJhZ2UiLCJNYXRoIiwibWluIiwiY29uc3VtZVJhZ2UiLCJtYXgiLCJpc1JhZ2VGdWxsIiwidXBkYXRlUmFnZSIsImFkZEV4cCIsIkxldmVsQ29uZmlnIiwiQ2hhcmFjdGVyRGF0YU1hbmFnZXIiLCJvbGRMZXZlbCIsIm9sZEV4cCIsIm5ld0xldmVsIiwiZ2V0TGV2ZWxGcm9tRXhwIiwibGV2ZWxlZFVwIiwiX2FwcGx5TGV2ZWxCb251cyIsImN1cnJlbnRMZXZlbEV4cCIsImdldEV4cEZvckxldmVsIiwibmV4dExldmVsRXhwIiwiZXhwSW5DdXJyZW50TGV2ZWwiLCJleHBOZWVkZWQiLCJ0b0ZpeGVkIiwic2F2ZUNoYXJhY3RlckxldmVsIiwiY2FsY3VsYXRlU3RhdFZhbHVlIiwicHJvZ3Jlc3MiLCJnZXRFeHBQcm9ncmVzcyIsImN1cnJlbnRMZXZlbCIsImV4cFRvTmV4dCIsImdldEV4cFRvTmV4dExldmVsIiwidXBkYXRlRXhwIiwiaXNNYXhMZXZlbCIsIk1BWF9MRVZFTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxFQUFFLEVBQUUsR0FBRztJQUNQQyxLQUFLLEVBQUUsR0FBRztJQUFFO0lBQ1pDLE1BQU0sRUFBRSxDQUFDO0lBQ1RDLE9BQU8sRUFBRSxDQUFDO0lBQ1ZDLEtBQUssRUFBRSxDQUFDO0lBQ1JDLElBQUksRUFBRSxDQUFDO0lBQ1BDLElBQUksRUFBRSxDQUFDO0lBQ1BDLE1BQU0sRUFBRSxDQUFDO0lBQ1RDLGNBQWMsRUFBRSxDQUFDO0lBQ2pCQyxJQUFJLEVBQUUsQ0FBQztJQUFPO0lBQ2RDLE9BQU8sRUFBRSxHQUFHO0lBQUc7SUFDZkMsS0FBSyxFQUFFLENBQUM7SUFBTztJQUNmQyxHQUFHLEVBQUUsQ0FBQztJQUFTO0lBQ2ZDLE1BQU0sRUFBRSxHQUFHO0lBQUk7SUFDZkMsVUFBVSxFQUFFLENBQUM7SUFBRztJQUNoQkMsV0FBVyxFQUFFLENBQUM7SUFBRTtJQUNoQkMsU0FBUyxFQUFFLENBQUM7SUFBSTtJQUNoQkMsUUFBUSxFQUFFLENBQUM7SUFBSztJQUNoQkMsUUFBUSxFQUFFLENBQUMsQ0FBSztFQUNwQixDQUFDO0VBRURDLE1BQU0sV0FBQUEsT0FBQSxF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QTtJQUNBLElBQUksQ0FBQ2tDLGVBQWUsRUFBRTtFQUMxQixDQUFDO0VBRUQ7QUFDSjtBQUNBO0VBQ0lILFlBQVksV0FBQUEsYUFBQSxFQUFHO0lBQ1gsSUFBSSxJQUFJLENBQUNQLE1BQU0sRUFBRTtNQUNiLElBQU13QyxXQUFXLEdBQUd6QixPQUFPLENBQUMsYUFBYSxDQUFDO01BQzFDLElBQU15QyxRQUFRLEdBQUdoQixXQUFXLENBQUNpQixjQUFjLENBQUMsSUFBSSxDQUFDdEUsR0FBRyxDQUFDO01BQ3JELElBQU11RSxZQUFZLEdBQUdsQixXQUFXLENBQUNLLGVBQWUsQ0FBQyxJQUFJLENBQUMxRCxHQUFHLENBQUM7TUFDMUQsSUFBTXdFLFNBQVMsR0FBR25CLFdBQVcsQ0FBQ29CLGlCQUFpQixDQUFDRixZQUFZLENBQUM7TUFDN0QsSUFBTVYsZUFBZSxHQUFHUixXQUFXLENBQUNTLGNBQWMsQ0FBQ1MsWUFBWSxDQUFDO01BQ2hFLElBQU1QLGlCQUFpQixHQUFHLElBQUksQ0FBQ2hFLEdBQUcsR0FBRzZELGVBQWU7TUFFcEQsSUFBSSxDQUFDaEQsTUFBTSxDQUFDNkQsU0FBUyxDQUFDVixpQkFBaUIsRUFBRVEsU0FBUyxFQUFFRCxZQUFZLEVBQUVGLFFBQVEsQ0FBQztJQUMvRTtFQUNKLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJTSxVQUFVLFdBQUFBLFdBQUEsRUFBRztJQUNULElBQU10QixXQUFXLEdBQUd6QixPQUFPLENBQUMsYUFBYSxDQUFDO0lBQzFDLE9BQU8sSUFBSSxDQUFDN0IsS0FBSyxJQUFJc0QsV0FBVyxDQUFDdUIsU0FBUztFQUM5QztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaHA6IDEwMCxcbiAgICAgICAgbWF4SHA6IDEwMCwgLy8g5pyA5aSn55Sf5ZG95YC8XG4gICAgICAgIGF0dGFjazogMSxcbiAgICAgICAgZGVmZW5zZTogMSxcbiAgICAgICAgc3BlZWQ6IDEsXG4gICAgICAgIG1pc3M6IDAsXG4gICAgICAgIGNyaXQ6IDAsXG4gICAgICAgIGltbXVuZTogMCxcbiAgICAgICAgYXR0YWNrSW50ZXJ2YWw6IDEsXG4gICAgICAgIHJhZ2U6IDAsICAgICAgLy8g5b2T5YmN5oCS5rCU5YC8XG4gICAgICAgIG1heFJhZ2U6IDEyMCwgIC8vIOacgOWkp+aAkuawlOWAvFxuICAgICAgICBsZXZlbDogMSwgICAgICAvLyDlvZPliY3nrYnnuqdcbiAgICAgICAgZXhwOiAwLCAgICAgICAgLy8g5b2T5YmN57uP6aqM5YC8XG4gICAgICAgIGJhc2VIcDogMTAwLCAgIC8vIOWfuuehgOeUn+WRveWAvO+8iDHnuqfml7bnmoTlgLzvvIlcbiAgICAgICAgYmFzZUF0dGFjazogMSwgIC8vIOWfuuehgOaUu+WHu+WKm++8iDHnuqfml7bnmoTlgLzvvIlcbiAgICAgICAgYmFzZURlZmVuc2U6IDEsIC8vIOWfuuehgOmYsuW+oeWKm++8iDHnuqfml7bnmoTlgLzvvIlcbiAgICAgICAgYmFzZVNwZWVkOiAxLCAgIC8vIOWfuuehgOmAn+W6pu+8iDHnuqfml7bnmoTlgLzvvIlcbiAgICAgICAgYmFzZUNyaXQ6IDAsICAgIC8vIOWfuuehgOaatOWHu+eOh++8iDHnuqfml7bnmoTlgLzvvIlcbiAgICAgICAgYmFzZU1pc3M6IDAgICAgIC8vIOWfuuehgOmXqumBv+eOh++8iDHnuqfml7bnmoTlgLzvvIlcbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUF0dGFja0ludGVydmFsKCk7XG4gICAgICAgIC8vIOiOt+WPluihgOadoee7hOS7tuW8leeUqFxuICAgICAgICB0aGlzLmhlYWx0aEJhciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoXCJIZWFsdGhCYXJcIik7XG4gICAgICAgIC8vIOiOt+WPluaAkuawlOadoee7hOS7tuW8leeUqFxuICAgICAgICB0aGlzLnJhZ2VCYXIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFwiUmFnZUJhclwiKTtcbiAgICAgICAgLy8g6I635Y+W57uP6aqM5p2h57uE5Lu25byV55SoXG4gICAgICAgIHRoaXMuZXhwQmFyID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChcIkV4cEJhclwiKTtcblxuICAgICAgICAvLyDmo4Dmn6XnvJbovpHlmajkuK3mmK/lkKborr7nva7kuobnrYnnuqfmiJbnu4/pqozlgLzvvIjpnZ7pu5jorqTlgLzvvIlcbiAgICAgICAgY29uc3QgZWRpdG9yTGV2ZWxTZXQgPSB0aGlzLmxldmVsICE9PSAxO1xuICAgICAgICBjb25zdCBlZGl0b3JFeHBTZXQgPSB0aGlzLmV4cCAhPT0gMDtcblxuICAgICAgICAvLyDlpoLmnpznvJbovpHlmajkuK3orr7nva7kuobnrYnnuqfmiJbnu4/pqozlgLzvvIzmoIforrDkuLrkvb/nlKjnvJbovpHlmajlgLxcbiAgICAgICAgaWYgKGVkaXRvckxldmVsU2V0IHx8IGVkaXRvckV4cFNldCkge1xuICAgICAgICAgICAgdGhpcy5fdXNlRWRpdG9yVmFsdWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIGNjLmxvZyhgW1N0YXRzQ29tcG9uZW50XSAke3RoaXMubm9kZS5uYW1lfSDmo4DmtYvliLDnvJbovpHlmajorr7nva7kuobnrYnnuqcv57uP6aqM5YC8OiBMdi4ke3RoaXMubGV2ZWx9LCBFeHA6JHt0aGlzLmV4cH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZUVkaXRvclZhbHVlcyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5Yid5aeL5YyW5oCS5rCU5p2h5pi+56S677yI56Gu5L+d5LuOMOW8gOWni++8iVxuICAgICAgICB0aGlzLnVwZGF0ZVJhZ2VCYXIoKTtcbiAgICAgICAgLy8g5Yid5aeL5YyW57uP6aqM5p2h5pi+56S677yI56Gu5L+d5LuOMOW8gOWni++8iVxuICAgICAgICB0aGlzLnVwZGF0ZUV4cEJhcigpO1xuICAgICAgICAvLyDkv53lrZjln7rnoYDlsZ7mgKflgLzvvIjnlKjkuo7nrYnnuqfliqDmiJDorqHnrpfvvIlcbiAgICAgICAgdGhpcy5fc2F2ZUJhc2VTdGF0cygpO1xuICAgIH0sXG5cbiAgICB1cGRhdGVBdHRhY2tJbnRlcnZhbCgpIHtcbiAgICAgICAgdGhpcy5hdHRhY2tJbnRlcnZhbCA9IDEgLyB0aGlzLnNwZWVkO1xuICAgIH0sXG5cbiAgICBpc0RlYWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhwIDw9IDA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOabtOaWsOihgOadoeaYvuekulxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkYW1hZ2UgLSDmnKzmrKHlj5fliLDnmoTkvKTlrrMo5Y+v6YCJLOeUqOS6juaYvuekuuS8pOWus+aVsOWtlylcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIOS8pOWus+exu+WeizogJ25vcm1hbCco5pmu6YCaKSwgJ2NyaXQnKOaatOWHuyksICdtaXNzJyjpl6rpgb8pLCAnaGVhbCco5rK755aXKVxuICAgICAqL1xuICAgIHVwZGF0ZUhlYWx0aEJhcihkYW1hZ2UsIHR5cGUgPSAnbm9ybWFsJykge1xuICAgICAgICBpZiAodGhpcy5oZWFsdGhCYXIpIHtcbiAgICAgICAgICAgIC8vIOiOt+WPluW9k+WJjeaKpOebvuWAvFxuICAgICAgICAgICAgbGV0IHNoaWVsZFZhbHVlID0gMDtcbiAgICAgICAgICAgIGNvbnN0IEJ1ZmZDb21wb25lbnQgPSByZXF1aXJlKFwiQnVmZkNvbXBvbmVudFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGFsbEJ1ZmZzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudHMoQnVmZkNvbXBvbmVudCk7XG4gICAgICAgICAgICBjYy5sb2coYFtTdGF0c0NvbXBvbmVudF0gJHt0aGlzLm5vZGUubmFtZX0g5p+l5om+5oqk55u+QnVmZu+8jOW9k+WJjUJ1ZmbmlbDph486ICR7YWxsQnVmZnMubGVuZ3RofWApO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBidWZmIG9mIGFsbEJ1ZmZzKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbU3RhdHNDb21wb25lbnRdIEJ1ZmY6IG5hbWU9JHtidWZmLmJ1ZmZOYW1lfSwgc2hpZWxkVmFsdWU9JHtidWZmLnNoaWVsZFZhbHVlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzaGllbGRCdWZmID0gYWxsQnVmZnMuZmluZChiID0+IGIuYnVmZk5hbWUgPT09IFwi5oqk55u+XCIpO1xuICAgICAgICAgICAgaWYgKHNoaWVsZEJ1ZmYpIHtcbiAgICAgICAgICAgICAgICBzaGllbGRWYWx1ZSA9IHNoaWVsZEJ1ZmYuc2hpZWxkVmFsdWUgfHwgMDtcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtTdGF0c0NvbXBvbmVudF0g5om+5Yiw5oqk55u+QnVmZjogc2hpZWxkVmFsdWU9JHtzaGllbGRWYWx1ZX0sIGJ1ZmZOYW1lPSR7c2hpZWxkQnVmZi5idWZmTmFtZX1gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbU3RhdHNDb21wb25lbnRdIOacquaJvuWIsOaKpOebvkJ1ZmZgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIudXBkYXRlSGVhbHRoKHRoaXMuaHAsIHRoaXMubWF4SHAsIHNoaWVsZFZhbHVlKTtcbiAgICAgICAgICAgIC8vIOaYvuekuuS8pOWus+aVsOWtl++8iOWMheaLrOmXqumBv01JU1PvvIlcbiAgICAgICAgICAgIGlmIChkYW1hZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnbWlzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g6Zeq6YG/5pe25pi+56S6TUlTU1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5zaG93RGFtYWdlKDAsICdtaXNzJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYW1hZ2UgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOaYvuekuuS8pOWus++8iOW4puexu+Wei++8iVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5zaG93RGFtYWdlKGRhbWFnZSwgdHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWinuWKoOaAkuawlOWAvO+8iOmZkOWItuS4jei2hei/h+acgOWkp+WAvO+8iVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIOWinuWKoOeahOaAkuawlOWAvFxuICAgICAqL1xuICAgIGFkZFJhZ2UodmFsdWUpIHtcbiAgICAgICAgLy8g6ZmQ5Yi25oCS5rCU5YC85LiN6LaF6L+H5pyA5aSn5YC8XG4gICAgICAgIHRoaXMucmFnZSA9IE1hdGgubWluKHRoaXMucmFnZSArIHZhbHVlLCB0aGlzLm1heFJhZ2UpO1xuICAgICAgICB0aGlzLnVwZGF0ZVJhZ2VCYXIoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5raI6ICX5oCS5rCU5YC877yI6YeK5pS+5aSn5oub5pe277yJXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0g5raI6ICX55qE5oCS5rCU5YC8XG4gICAgICovXG4gICAgY29uc3VtZVJhZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy5yYWdlID0gTWF0aC5tYXgoMCwgdGhpcy5yYWdlIC0gdmFsdWUpO1xuICAgICAgICB0aGlzLnVwZGF0ZVJhZ2VCYXIoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5qOA5p+l5oCS5rCU5YC85piv5ZCm5bey5ruhXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNSYWdlRnVsbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFnZSA+PSB0aGlzLm1heFJhZ2U7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOabtOaWsOaAkuawlOadoeaYvuekulxuICAgICAqL1xuICAgIHVwZGF0ZVJhZ2VCYXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnJhZ2VCYXIpIHtcbiAgICAgICAgICAgIHRoaXMucmFnZUJhci51cGRhdGVSYWdlKHRoaXMucmFnZSwgdGhpcy5tYXhSYWdlKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDkv53lrZjln7rnoYDlsZ7mgKflgLzvvIgx57qn5pe255qE5YC877yJXG4gICAgICovXG4gICAgX3NhdmVCYXNlU3RhdHMoKSB7XG4gICAgICAgIHRoaXMuYmFzZUhwID0gdGhpcy5tYXhIcDtcbiAgICAgICAgdGhpcy5iYXNlQXR0YWNrID0gdGhpcy5hdHRhY2s7XG4gICAgICAgIHRoaXMuYmFzZURlZmVuc2UgPSB0aGlzLmRlZmVuc2U7XG4gICAgICAgIHRoaXMuYmFzZVNwZWVkID0gdGhpcy5zcGVlZDtcbiAgICAgICAgdGhpcy5iYXNlQ3JpdCA9IHRoaXMuY3JpdDtcbiAgICAgICAgdGhpcy5iYXNlTWlzcyA9IHRoaXMubWlzcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5aKe5Yqg57uP6aqM5YC8XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0g5aKe5Yqg55qE57uP6aqM5YC8XG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IOaYr+WQpuWNh+e6p1xuICAgICAqL1xuICAgIGFkZEV4cCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBMZXZlbENvbmZpZyA9IHJlcXVpcmUoXCJMZXZlbENvbmZpZ1wiKTtcbiAgICAgICAgY29uc3QgQ2hhcmFjdGVyRGF0YU1hbmFnZXIgPSByZXF1aXJlKFwiQ2hhcmFjdGVyRGF0YU1hbmFnZXJcIik7XG4gICAgICAgIGNvbnN0IG9sZExldmVsID0gdGhpcy5sZXZlbDtcbiAgICAgICAgY29uc3Qgb2xkRXhwID0gdGhpcy5leHA7XG5cbiAgICAgICAgLy8g5aKe5Yqg57uP6aqM5YC8XG4gICAgICAgIHRoaXMuZXhwICs9IHZhbHVlO1xuICAgICAgICBjYy5sb2coYFtTdGF0c0NvbXBvbmVudF0gJHt0aGlzLm5vZGUubmFtZX0g57uP6aqM5YC85Y+Y5YyWOiAke29sZEV4cH0gKyAke3ZhbHVlfSA9ICR7dGhpcy5leHB9YCk7XG5cbiAgICAgICAgLy8g6K6h566X5paw562J57qnXG4gICAgICAgIGNvbnN0IG5ld0xldmVsID0gTGV2ZWxDb25maWcuZ2V0TGV2ZWxGcm9tRXhwKHRoaXMuZXhwKTtcbiAgICAgICAgY29uc3QgbGV2ZWxlZFVwID0gbmV3TGV2ZWwgPiBvbGRMZXZlbDtcblxuICAgICAgICBjYy5sb2coYFtTdGF0c0NvbXBvbmVudF0gJHt0aGlzLm5vZGUubmFtZX0g562J57qn6K6h566XOiDml6fnrYnnuqc9JHtvbGRMZXZlbH0sIOaWsOetiee6pz0ke25ld0xldmVsfSwg5piv5ZCm5Y2H57qnPSR7bGV2ZWxlZFVwfWApO1xuXG4gICAgICAgIGlmIChsZXZlbGVkVXApIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwgPSBuZXdMZXZlbDtcbiAgICAgICAgICAgIC8vIOW6lOeUqOetiee6p+WKoOaIkFxuICAgICAgICAgICAgdGhpcy5fYXBwbHlMZXZlbEJvbnVzKCk7XG4gICAgICAgICAgICBjYy5sb2coYFtTdGF0c0NvbXBvbmVudF0g4pyFICR7dGhpcy5ub2RlLm5hbWV9IOWNh+e6p+WIsCAke3RoaXMubGV2ZWx9IOe6p++8gWApO1xuICAgICAgICAgICAgY2MubG9nKGBbU3RhdHNDb21wb25lbnRdIOWxnuaAp+WPmOWMliAtIEhQOiAke3RoaXMubWF4SHB9LCBBVEs6ICR7dGhpcy5hdHRhY2t9LCBERUY6ICR7dGhpcy5kZWZlbnNlfSwgU1BEOiAke3RoaXMuc3BlZWR9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDorqHnrpfot53nprvkuIvkuIDnuqfov5jpnIDopoHlpJrlsJHnu4/pqoxcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMZXZlbEV4cCA9IExldmVsQ29uZmlnLmdldEV4cEZvckxldmVsKHRoaXMubGV2ZWwpO1xuICAgICAgICAgICAgY29uc3QgbmV4dExldmVsRXhwID0gTGV2ZWxDb25maWcuZ2V0RXhwRm9yTGV2ZWwodGhpcy5sZXZlbCArIDEpO1xuICAgICAgICAgICAgY29uc3QgZXhwSW5DdXJyZW50TGV2ZWwgPSB0aGlzLmV4cCAtIGN1cnJlbnRMZXZlbEV4cDtcbiAgICAgICAgICAgIGNvbnN0IGV4cE5lZWRlZCA9IG5leHRMZXZlbEV4cCAtIGN1cnJlbnRMZXZlbEV4cDtcbiAgICAgICAgICAgIGNjLmxvZyhgW1N0YXRzQ29tcG9uZW50XSAke3RoaXMubm9kZS5uYW1lfSDlvZPliY3nu4/pqozov5vluqY6ICR7ZXhwSW5DdXJyZW50TGV2ZWx9LyR7ZXhwTmVlZGVkfSAoJHsoKGV4cEluQ3VycmVudExldmVsIC8gZXhwTmVlZGVkKSAqIDEwMCkudG9GaXhlZCgxKX0lKWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pu05paw57uP6aqM5p2h5pi+56S6XG4gICAgICAgIHRoaXMudXBkYXRlRXhwQmFyKCk7XG5cbiAgICAgICAgLy8g5L+d5a2Y5Yiw5pys5Zyw5a2Y5YKo77yI5q+P5qyh57uP6aqM5YC85Y+Y5YyW6YO95L+d5a2Y77yJXG4gICAgICAgIENoYXJhY3RlckRhdGFNYW5hZ2VyLnNhdmVDaGFyYWN0ZXJMZXZlbCh0aGlzLm5vZGUpO1xuXG4gICAgICAgIHJldHVybiBsZXZlbGVkVXA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOW6lOeUqOetiee6p+WKoOaIkOWIsOWxnuaAp1xuICAgICAqL1xuICAgIF9hcHBseUxldmVsQm9udXMoKSB7XG4gICAgICAgIGNvbnN0IExldmVsQ29uZmlnID0gcmVxdWlyZShcIkxldmVsQ29uZmlnXCIpO1xuXG4gICAgICAgIC8vIOagueaNruetiee6p+mHjeaWsOiuoeeul+WxnuaAp+WAvFxuICAgICAgICB0aGlzLm1heEhwID0gTGV2ZWxDb25maWcuY2FsY3VsYXRlU3RhdFZhbHVlKHRoaXMuYmFzZUhwLCB0aGlzLmxldmVsLCAnaHAnKTtcbiAgICAgICAgdGhpcy5hdHRhY2sgPSBMZXZlbENvbmZpZy5jYWxjdWxhdGVTdGF0VmFsdWUodGhpcy5iYXNlQXR0YWNrLCB0aGlzLmxldmVsLCAnYXR0YWNrJyk7XG4gICAgICAgIHRoaXMuZGVmZW5zZSA9IExldmVsQ29uZmlnLmNhbGN1bGF0ZVN0YXRWYWx1ZSh0aGlzLmJhc2VEZWZlbnNlLCB0aGlzLmxldmVsLCAnZGVmZW5zZScpO1xuICAgICAgICB0aGlzLnNwZWVkID0gTGV2ZWxDb25maWcuY2FsY3VsYXRlU3RhdFZhbHVlKHRoaXMuYmFzZVNwZWVkLCB0aGlzLmxldmVsLCAnc3BlZWQnKTtcbiAgICAgICAgdGhpcy5jcml0ID0gTGV2ZWxDb25maWcuY2FsY3VsYXRlU3RhdFZhbHVlKHRoaXMuYmFzZUNyaXQsIHRoaXMubGV2ZWwsICdjcml0Jyk7XG4gICAgICAgIHRoaXMubWlzcyA9IExldmVsQ29uZmlnLmNhbGN1bGF0ZVN0YXRWYWx1ZSh0aGlzLmJhc2VNaXNzLCB0aGlzLmxldmVsLCAnbWlzcycpO1xuXG4gICAgICAgIC8vIOabtOaWsOaUu+WHu+mXtOmalFxuICAgICAgICB0aGlzLnVwZGF0ZUF0dGFja0ludGVydmFsKCk7XG5cbiAgICAgICAgLy8g5aaC5p6c5b2T5YmN55Sf5ZG95YC86LaF6L+H5paw55qE5pyA5aSn55Sf5ZG95YC877yM6LCD5pW05Li65pyA5aSn55Sf5ZG95YC8XG4gICAgICAgIGlmICh0aGlzLmhwID4gdGhpcy5tYXhIcCkge1xuICAgICAgICAgICAgdGhpcy5ocCA9IHRoaXMubWF4SHA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmm7TmlrDooYDmnaHmmL7npLpcbiAgICAgICAgdGhpcy51cGRhdGVIZWFsdGhCYXIoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5pu05paw57uP6aqM5p2h5pi+56S6XG4gICAgICovXG4gICAgdXBkYXRlRXhwQmFyKCkge1xuICAgICAgICBpZiAodGhpcy5leHBCYXIpIHtcbiAgICAgICAgICAgIGNvbnN0IExldmVsQ29uZmlnID0gcmVxdWlyZShcIkxldmVsQ29uZmlnXCIpO1xuICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBMZXZlbENvbmZpZy5nZXRFeHBQcm9ncmVzcyh0aGlzLmV4cCk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TGV2ZWwgPSBMZXZlbENvbmZpZy5nZXRMZXZlbEZyb21FeHAodGhpcy5leHApO1xuICAgICAgICAgICAgY29uc3QgZXhwVG9OZXh0ID0gTGV2ZWxDb25maWcuZ2V0RXhwVG9OZXh0TGV2ZWwoY3VycmVudExldmVsKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMZXZlbEV4cCA9IExldmVsQ29uZmlnLmdldEV4cEZvckxldmVsKGN1cnJlbnRMZXZlbCk7XG4gICAgICAgICAgICBjb25zdCBleHBJbkN1cnJlbnRMZXZlbCA9IHRoaXMuZXhwIC0gY3VycmVudExldmVsRXhwO1xuXG4gICAgICAgICAgICB0aGlzLmV4cEJhci51cGRhdGVFeHAoZXhwSW5DdXJyZW50TGV2ZWwsIGV4cFRvTmV4dCwgY3VycmVudExldmVsLCBwcm9ncmVzcyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5qOA5p+l5piv5ZCm6L6+5Yiw5pyA5aSn562J57qnXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNNYXhMZXZlbCgpIHtcbiAgICAgICAgY29uc3QgTGV2ZWxDb25maWcgPSByZXF1aXJlKFwiTGV2ZWxDb25maWdcIik7XG4gICAgICAgIHJldHVybiB0aGlzLmxldmVsID49IExldmVsQ29uZmlnLk1BWF9MRVZFTDtcbiAgICB9XG59KTtcbiJdfQ==