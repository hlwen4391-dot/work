"use strict";
cc._RF.push(module, '478a1hm+BVLx49ZbhnjlB0J', 'SkillConfig');
// Scripts/system/SkillConfig.js

"use strict";

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var BuffFactory = require("BuffFactory");
var BuffSystem = require("BuffSystem");
var TeamRef = require("TeamRef");

/**
 * 技能枚举
 */
var SkillEnum = {
  normalAttack: 1,
  // 普通攻击
  stunSkill: 2,
  // 盾击
  fireball: 3,
  // 火球术
  rageSkill: 4,
  // 狂暴
  beastRage: 7,
  // 兽化狂暴
  warCry: 5,
  // 战吼
  shieldAllies: 6,
  // 群体护盾
  healAllies: 9,
  // 群体治疗
  cleanseAllies: 10,
  // 净化队友
  ultimateSkill: 8 // 大招（需要怒气值满）
};

/**
 * 技能配置对象
 * 包含所有技能的定义
 */
var SkillConfig = {
  // 普通攻击 - 基础攻击技能
  normalAttack: {
    name: "普通攻击",
    id: SkillEnum.normalAttack,
    cooldown: 0.5,
    // 缩短冷却时间以加快战斗节奏
    effect: function effect(self, target, log, rand) {
      var atk = self.getComponent("StatsComponent");
      var def = target.getComponent("StatsComponent");
      if (!atk || !def) return [];
      var dmg = Math.max(atk.attack - def.defense, 1);

      // 暴击判定
      if (rand() < atk.crit) {
        dmg *= 2;
        log("\u26A1 \u66B4\u51FB\uFF01" + self.name + " \u9020\u6210\u53CC\u500D\u4F24\u5BB3");
      }

      // 免伤计算
      dmg *= 1 - def.immune;
      dmg = Math.floor(dmg);
      return [{
        type: "damage",
        value: dmg
      }];
    }
  },
  // 盾击 - 造成伤害并眩晕
  stunSkill: {
    name: "盾击",
    id: SkillEnum.stunSkill,
    cooldown: 2.5,
    // 缩短冷却时间以加快战斗节奏
    effect: function effect(self, target, log) {
      var atk = self.getComponent("StatsComponent");
      var def = target.getComponent("StatsComponent");
      if (!atk || !def) return [];
      var dmg = Math.max(atk.attack - def.defense, 1);
      log("\uD83D\uDEE1\uFE0F " + self.name + " \u4F7F\u7528\u76FE\u51FB\uFF01");
      return [{
        type: "damage",
        value: dmg
      }, {
        type: "applyBuff",
        buff: "stun"
      }];
    }
  },
  // 火球术 - 真实伤害并附加燃烧
  fireball: {
    name: "火球术",
    id: SkillEnum.fireball,
    cooldown: 1.5,
    // 缩短冷却时间以加快战斗节奏
    effect: function effect(self, target, log) {
      log("\uD83D\uDD25 " + self.name + " \u91CA\u653E\u706B\u7403\u672F\uFF01");
      return [{
        type: "damageTrue",
        value: 5
      }, {
        type: "applyBuff",
        buff: "burn"
      }];
    }
  },
  // 狂暴 - 自身增益
  // rageSkill: {
  //     name: "狂暴",
  //     id: SkillEnum.rageSkill,
  //     cooldown: 4.0,
  //     effect: (self, target, log) => {
  //         log(`😡 ${self.name} 进入狂暴状态！`);
  //         return [
  //             { type: "applyBuffSelf", buff: "rage" }
  //         ];
  //     }
  // },

  // 兽化狂暴 - 更强的自身增益，带有酷炫特效
  beastRage: {
    name: "兽化狂暴",
    id: SkillEnum.beastRage,
    cooldown: 4.0,
    // 缩短冷却时间以加快战斗节奏
    effect: function effect(self, target, log) {
      log("\uD83D\uDC3A " + self.name + " \u8FDB\u5165\u517D\u5316\u72C2\u66B4\u72B6\u6001\uFF01");
      return [{
        type: "applyBuffSelf",
        buff: "rage"
      }];
    }
  },
  // 战吼 - 群体增益（可以作为大招）
  warCry: {
    name: "战吼",
    id: SkillEnum.warCry,
    cooldown: 5.0,
    // 缩短冷却时间以加快战斗节奏
    requireRage: 100,
    // 设置为0表示普通技能，
    effect: function effect(self, target, log) {
      var teamComp = self.getComponent("TeamComponent");
      if (!teamComp) return [];
      var allies = teamComp.team === "hero" ? TeamRef.herosRef : TeamRef.monstersRef;
      log("\uD83D\uDCE2 " + self.name + " \u53D1\u51FA\u6218\u543C\uFF0C\u9F13\u821E\u961F\u53CB\uFF01");

      // 启动持续波纹效果（在施法者身上）
      var scene = cc.director.getScene();
      if (scene) {
        var skillEffectPlayer = scene.getComponentInChildren("SkillEffectPlayer");
        if (skillEffectPlayer) {
          skillEffectPlayer._startWarCryContinuousWaves(self);
          // 3秒后自动停止持续波纹（Buff持续时间）
          skillEffectPlayer.scheduleOnce(function () {
            skillEffectPlayer._stopWarCryContinuousWaves(self);
          }, 3.0);
        }
      }

      // 为所有队友添加战吼Buff（传递施法者self）
      for (var _iterator = _createForOfIteratorHelperLoose(allies), _step; !(_step = _iterator()).done;) {
        var ally = _step.value;
        var buffComp = BuffFactory.create("warCry");
        if (buffComp) {
          BuffSystem.addBuff(ally, buffComp, log, null, self);
        }
      }
      return [];
    }
  },
  // 群体护盾 - 为队友提供护盾
  shieldAllies: {
    name: "群体护盾",
    id: SkillEnum.shieldAllies,
    cooldown: 3.0,
    // 缩短冷却时间以加快战斗节奏
    requireRage: 100,
    effect: function effect(self, target, log) {
      var teamComp = self.getComponent("TeamComponent");
      if (!teamComp) return [];
      var allies = teamComp.team === "hero" ? TeamRef.herosRef : TeamRef.monstersRef;
      log("\uD83D\uDEE1\uFE0F " + self.name + " \u4E3A\u961F\u53CB\u65BD\u52A0\u62A4\u76FE\uFF01");

      // 为所有队友添加护盾Buff（传递施法者self）
      for (var _iterator2 = _createForOfIteratorHelperLoose(allies), _step2; !(_step2 = _iterator2()).done;) {
        var ally = _step2.value;
        var buffComp = BuffFactory.create("shield");
        if (buffComp) {
          BuffSystem.addBuff(ally, buffComp, log, null, self);
        }
      }
      return [];
    }
  },
  // 群体治疗 - 持续恢复己方阵营所有英雄的生命值
  healAllies: {
    name: "治疗术",
    id: SkillEnum.healAllies,
    cooldown: 3.5,
    // 缩短冷却时间以加快战斗节奏
    requireRage: 100,
    effect: function effect(self, target, log) {
      var teamComp = self.getComponent("TeamComponent");
      if (!teamComp) return [];
      var allies = teamComp.team === "hero" ? TeamRef.herosRef : TeamRef.monstersRef;
      log("\uD83D\uDC9A " + self.name + " \u91CA\u653E\u7FA4\u4F53\u6CBB\u7597\u672F\uFF01");

      // 为所有队友添加持续恢复Buff（每秒恢复10点，持续3秒）
      var events = [];
      for (var _iterator3 = _createForOfIteratorHelperLoose(allies), _step3; !(_step3 = _iterator3()).done;) {
        var ally = _step3.value;
        var allyStats = ally.getComponent("StatsComponent");
        if (allyStats && !allyStats.isDead()) {
          // 添加持续恢复Buff（指定目标）
          events.push({
            type: "applyBuff",
            buff: "healOverTime",
            target: ally // 指定目标单位
          });
        }
      }

      return events;
    }
  },
  // 净化术 - 清除己方阵营所有单位的负面Buff
  cleanseAllies: {
    name: "净化术",
    id: SkillEnum.cleanseAllies,
    cooldown: 4.0,
    // 缩短冷却时间以加快战斗节奏
    requireRage: 100,
    //需要怒气值满才能释放
    effect: function effect(self, target, log) {
      var teamComp = self.getComponent("TeamComponent");
      if (!teamComp) return [];
      var allies = teamComp.team === "hero" ? TeamRef.herosRef : TeamRef.monstersRef;
      log("\uD83C\uDF1F " + self.name + " \u91CA\u653E\u51C0\u5316\u672F\uFF01");

      // 定义负面Buff列表（需要被清除的Buff）
      var negativeBuffs = ["燃烧", "眩晕"];

      // 为所有队友（包括自己）清除负面Buff
      var events = [];
      var allTargets = [].concat(allies, [self]); // 包括自己和所有队友

      for (var _iterator4 = _createForOfIteratorHelperLoose(allTargets), _step4; !(_step4 = _iterator4()).done;) {
        var ally = _step4.value;
        if (!ally || !ally.isValid) continue;
        var allyStats = ally.getComponent("StatsComponent");
        if (allyStats && !allyStats.isDead()) {
          // 添加清除负面Buff事件
          events.push({
            type: "removeNegativeBuffs",
            target: ally,
            buffNames: negativeBuffs
          });
        }
      }
      return events;
    }
  }
};
module.exports = {
  SkillEnum: SkillEnum,
  SkillConfig: SkillConfig
};

cc._RF.pop();