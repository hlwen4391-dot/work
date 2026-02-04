"use strict";
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