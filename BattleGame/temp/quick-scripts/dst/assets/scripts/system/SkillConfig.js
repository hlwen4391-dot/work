
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/system/SkillConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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

/**
 * 根据技能ID获取完整技能配置（供卷轴、存档等使用）
 * @param {number} skillId - 技能ID（与 SkillEnum 一致）
 * @returns {Object|null} 技能配置对象，未找到返回 null
 */
function getSkillById(skillId) {
  for (var _i = 0, _Object$keys = Object.keys(SkillConfig); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    if (SkillConfig[key].id === skillId) {
      return SkillConfig[key];
    }
  }
  return null;
}
module.exports = {
  SkillEnum: SkillEnum,
  SkillConfig: SkillConfig,
  getSkillById: getSkillById
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxTa2lsbENvbmZpZy5qcyJdLCJuYW1lcyI6WyJCdWZmRmFjdG9yeSIsInJlcXVpcmUiLCJCdWZmU3lzdGVtIiwiVGVhbVJlZiIsIlNraWxsRW51bSIsIm5vcm1hbEF0dGFjayIsInN0dW5Ta2lsbCIsImZpcmViYWxsIiwicmFnZVNraWxsIiwiYmVhc3RSYWdlIiwid2FyQ3J5Iiwic2hpZWxkQWxsaWVzIiwiaGVhbEFsbGllcyIsImNsZWFuc2VBbGxpZXMiLCJ1bHRpbWF0ZVNraWxsIiwiU2tpbGxDb25maWciLCJuYW1lIiwiaWQiLCJjb29sZG93biIsImVmZmVjdCIsInNlbGYiLCJ0YXJnZXQiLCJsb2ciLCJyYW5kIiwiYXRrIiwiZ2V0Q29tcG9uZW50IiwiZGVmIiwiZG1nIiwiTWF0aCIsIm1heCIsImF0dGFjayIsImRlZmVuc2UiLCJjcml0IiwiaW1tdW5lIiwiZmxvb3IiLCJ0eXBlIiwidmFsdWUiLCJidWZmIiwicmVxdWlyZVJhZ2UiLCJ0ZWFtQ29tcCIsImFsbGllcyIsInRlYW0iLCJoZXJvc1JlZiIsIm1vbnN0ZXJzUmVmIiwic2NlbmUiLCJjYyIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJza2lsbEVmZmVjdFBsYXllciIsImdldENvbXBvbmVudEluQ2hpbGRyZW4iLCJfc3RhcnRXYXJDcnlDb250aW51b3VzV2F2ZXMiLCJzY2hlZHVsZU9uY2UiLCJfc3RvcFdhckNyeUNvbnRpbnVvdXNXYXZlcyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJfc3RlcCIsImRvbmUiLCJhbGx5IiwiYnVmZkNvbXAiLCJjcmVhdGUiLCJhZGRCdWZmIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsImV2ZW50cyIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJhbGx5U3RhdHMiLCJpc0RlYWQiLCJwdXNoIiwibmVnYXRpdmVCdWZmcyIsImFsbFRhcmdldHMiLCJjb25jYXQiLCJfaXRlcmF0b3I0IiwiX3N0ZXA0IiwiaXNWYWxpZCIsImJ1ZmZOYW1lcyIsImdldFNraWxsQnlJZCIsInNraWxsSWQiLCJfaSIsIl9PYmplY3Qka2V5cyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJrZXkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFdBQVcsR0FBR0MsT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUN4QyxJQUFJQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFDdEMsSUFBSUUsT0FBTyxHQUFHRixPQUFPLENBQUMsU0FBUyxDQUFDOztBQUVoQztBQUNBO0FBQ0E7QUFDQSxJQUFJRyxTQUFTLEdBQUc7RUFDWkMsWUFBWSxFQUFFLENBQUM7RUFBRztFQUNsQkMsU0FBUyxFQUFFLENBQUM7RUFBTTtFQUNsQkMsUUFBUSxFQUFFLENBQUM7RUFBTztFQUNsQkMsU0FBUyxFQUFFLENBQUM7RUFBTTtFQUNsQkMsU0FBUyxFQUFFLENBQUM7RUFBTTtFQUNsQkMsTUFBTSxFQUFFLENBQUM7RUFBUztFQUNsQkMsWUFBWSxFQUFFLENBQUM7RUFBRztFQUNsQkMsVUFBVSxFQUFFLENBQUM7RUFBSztFQUNsQkMsYUFBYSxFQUFFLEVBQUU7RUFBRTtFQUNuQkMsYUFBYSxFQUFFLENBQUMsQ0FBRTtBQUN0QixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUMsV0FBVyxHQUFHO0VBRWQ7RUFDQVYsWUFBWSxFQUFFO0lBQ1ZXLElBQUksRUFBRSxNQUFNO0lBQ1pDLEVBQUUsRUFBRWIsU0FBUyxDQUFDQyxZQUFZO0lBQzFCYSxRQUFRLEVBQUUsR0FBRztJQUFHO0lBQ2hCQyxNQUFNLEVBQUUsU0FBQUEsT0FBQ0MsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFLO01BQ2pDLElBQU1DLEdBQUcsR0FBR0osSUFBSSxDQUFDSyxZQUFZLENBQUMsZ0JBQWdCLENBQUM7TUFDL0MsSUFBTUMsR0FBRyxHQUFH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RTtVQUNsQztVQUNBSixNQUFNLENBQUNLLElBQUksQ0FBQztZQUNSakMsSUFBSSxFQUFFLHFCQUFxQjtZQUMzQmQsTUFBTSxFQUFFb0MsSUFBSTtZQUNaa0IsU0FBUyxFQUFFTjtVQUNmLENBQUMsQ0FBQztRQUNOO01BQ0o7TUFFQSxPQUFPTixNQUFNO0lBQ2pCO0VBQ0o7QUFFSixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTYSxZQUFZQSxDQUFDQyxPQUFPLEVBQUU7RUFDM0IsU0FBQUMsRUFBQSxNQUFBQyxZQUFBLEdBQWtCQyxNQUFNLENBQUNDLElBQUksQ0FBQ2xFLFdBQVcsQ0FBQyxFQUFBK0QsRUFBQSxHQUFBQyxZQUFBLENBQUFHLE1BQUEsRUFBQUosRUFBQSxJQUFFO0lBQXZDLElBQU1LLEdBQUcsR0FBQUosWUFBQSxDQUFBRCxFQUFBO0lBQ1YsSUFBSS9ELFdBQVcsQ0FBQ29FLEdBQUcsQ0FBQyxDQUFDbEUsRUFBRSxLQUFLNEQsT0FBTyxFQUFFO01BQ2pDLE9BQU85RCxXQUFXLENBQUNvRSxHQUFHLENBQUM7SUFDM0I7RUFDSjtFQUNBLE9BQU8sSUFBSTtBQUNmO0FBRUFDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0VBQ2JqRixTQUFTLEVBQUVBLFNBQVM7RUFDcEJXLFdBQVcsRUFBRUEsV0FBVztFQUN4QjZELFlBQVksRUFBRUE7QUFDbEIsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEJ1ZmZGYWN0b3J5ID0gcmVxdWlyZShcIkJ1ZmZGYWN0b3J5XCIpO1xyXG52YXIgQnVmZlN5c3RlbSA9IHJlcXVpcmUoXCJCdWZmU3lzdGVtXCIpO1xyXG52YXIgVGVhbVJlZiA9IHJlcXVpcmUoXCJUZWFtUmVmXCIpO1xyXG5cclxuLyoqXHJcbiAqIOaKgOiDveaemuS4vlxyXG4gKi9cclxudmFyIFNraWxsRW51bSA9IHtcclxuICAgIG5vcm1hbEF0dGFjazogMSwgIC8vIOaZrumAmuaUu+WHu1xyXG4gICAgc3R1blNraWxsOiAyLCAgICAgLy8g55u+5Ye7XHJcbiAgICBmaXJlYmFsbDogMywgICAgICAvLyDngavnkIPmnK9cclxuICAgIHJhZ2VTa2lsbDogNCwgICAgIC8vIOeLguaatFxyXG4gICAgYmVhc3RSYWdlOiA3LCAgICAgLy8g5YW95YyW54uC5pq0XHJcbiAgICB3YXJDcnk6IDUsICAgICAgICAvLyDmiJjlkLxcclxuICAgIHNoaWVsZEFsbGllczogNiwgIC8vIOe+pOS9k+aKpOebvlxyXG4gICAgaGVhbEFsbGllczogOSwgICAgLy8g576k5L2T5rK755aXXHJcbiAgICBjbGVhbnNlQWxsaWVzOiAxMCwgLy8g5YeA5YyW6Zif5Y+LXHJcbiAgICB1bHRpbWF0ZVNraWxsOiA4ICAvLyDlpKfmi5vvvIjpnIDopoHmgJLmsJTlgLzmu6HvvIlcclxufTtcclxuXHJcbi8qKlxyXG4gKiDmioDog73phY3nva7lr7nosaFcclxuICog5YyF5ZCr5omA5pyJ5oqA6IO955qE5a6a5LmJXHJcbiAqL1xyXG52YXIgU2tpbGxDb25maWcgPSB7XHJcblxyXG4gICAgLy8g5pmu6YCa5pS75Ye7IC0g5Z+656GA5pS75Ye75oqA6IO9XHJcbiAgICBub3JtYWxBdHRhY2s6IHtcclxuICAgICAgICBuYW1lOiBcIuaZrumAmuaUu+WHu1wiLFxyXG4gICAgICAgIGlkOiBTa2lsbEVudW0ubm9ybWFsQXR0YWNrLFxyXG4gICAgICAgIGNvb2xkb3duOiAwLjUsICAvLyDnvKnnn63lhrfljbTml7bpl7Tku6XliqDlv6vmiJjmlpfoioLlpY9cclxuICAgICAgICBlZmZlY3Q6IChzZWxmLCB0YXJnZXQsIGxvZywgcmFuZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhdGsgPSBzZWxmLmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWYgPSB0YXJnZXQuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWF0ayB8fCAhZGVmKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgICAgICBsZXQgZG1nID0gTWF0aC5tYXgoYXRrLmF0dGFjayAtIGRlZi5kZWZlbnNlLCAxKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOaatOWHu+WIpOWumlxyXG4gICAgICAgICAgICBpZiAocmFuZCgpIDwgYXRrLmNyaXQpIHtcclxuICAgICAgICAgICAgICAgIGRtZyAqPSAyO1xyXG4gICAgICAgICAgICAgICAgbG9nKGDimqEg5pq05Ye777yBJHtzZWxmLm5hbWV9IOmAoOaIkOWPjOWAjeS8pOWus2ApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDlhY3kvKTorqHnrpdcclxuICAgICAgICAgICAgZG1nICo9ICgxIC0gZGVmLmltbXVuZSk7XHJcbiAgICAgICAgICAgIGRtZyA9IE1hdGguZmxvb3IoZG1nKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICB7IHR5cGU6IFwiZGFtYWdlXCIsIHZhbHVlOiBkbWcgfVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8g55u+5Ye7IC0g6YCg5oiQ5Lyk5a6z5bm255yp5pmVXHJcbiAgICBzdHVuU2tpbGw6IHtcclxuICAgICAgICBuYW1lOiBcIuebvuWHu1wiLFxyXG4gICAgICAgIGlkOiBTa2lsbEVudW0uc3R1blNraWxsLFxyXG4gICAgICAgIGNvb2xkb3duOiAyLjUsICAvLyDnvKnnn63lhrfljbTml7bpl7Tku6XliqDlv6vmiJjmlpfoioLlpY9cclxuICAgICAgICBlZmZlY3Q6IChzZWxmLCB0YXJnZXQsIGxvZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhdGsgPSBzZWxmLmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWYgPSB0YXJnZXQuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWF0ayB8fCAhZGVmKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkbWcgPSBNYXRoLm1heChhdGsuYXR0YWNrIC0gZGVmLmRlZmVuc2UsIDEpO1xyXG4gICAgICAgICAgICBsb2coYPCfm6HvuI8gJHtzZWxmLm5hbWV9IOS9v+eUqOebvuWHu++8gWApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIHsgdHlwZTogXCJkYW1hZ2VcIiwgdmFsdWU6IGRtZyB9LFxyXG4gICAgICAgICAgICAgICAgeyB0eXBlOiBcImFwcGx5QnVmZlwiLCBidWZmOiBcInN0dW5cIiB9XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyDngavnkIPmnK8gLSDnnJ/lrp7kvKTlrrPlubbpmYTliqDnh4Png6dcclxuICAgIGZpcmViYWxsOiB7XHJcbiAgICAgICAgbmFtZTogXCLngavnkIPmnK9cIixcclxuICAgICAgICBpZDogU2tpbGxFbnVtLmZpcmViYWxsLFxyXG4gICAgICAgIGNvb2xkb3duOiAxLjUsICAvLyDnvKnnn63lhrfljbTml7bpl7Tku6XliqDlv6vmiJjmlpfoioLlpY9cclxuICAgICAgICBlZmZlY3Q6IChzZWxmLCB0YXJnZXQsIGxvZykgPT4ge1xyXG4gICAgICAgICAgICBsb2coYPCflKUgJHtzZWxmLm5hbWV9IOmHiuaUvueBq+eQg+acr++8gWApO1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgeyB0eXBlOiBcImRhbWFnZVRydWVcIiwgdmFsdWU6IDUgfSxcclxuICAgICAgICAgICAgICAgIHsgdHlwZTogXCJhcHBseUJ1ZmZcIiwgYnVmZjogXCJidXJuXCIgfVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8g54uC5pq0IC0g6Ieq6Lqr5aKe55uKXHJcbiAgICAvLyByYWdlU2tpbGw6IHtcclxuICAgIC8vICAgICBuYW1lOiBcIueLguaatFwiLFxyXG4gICAgLy8gICAgIGlkOiBTa2lsbEVudW0ucmFnZVNraWxsLFxyXG4gICAgLy8gICAgIGNvb2xkb3duOiA0LjAsXHJcbiAgICAvLyAgICAgZWZmZWN0OiAoc2VsZiwgdGFyZ2V0LCBsb2cpID0+IHtcclxuICAgIC8vICAgICAgICAgbG9nKGDwn5ihICR7c2VsZi5uYW1lfSDov5vlhaXni4LmmrTnirbmgIHvvIFgKTtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIFtcclxuICAgIC8vICAgICAgICAgICAgIHsgdHlwZTogXCJhcHBseUJ1ZmZTZWxmXCIsIGJ1ZmY6IFwicmFnZVwiIH1cclxuICAgIC8vICAgICAgICAgXTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIOWFveWMlueLguaatCAtIOabtOW8uueahOiHqui6q+Winuebiu+8jOW4puaciemFt+eCq+eJueaViFxyXG4gICAgYmVhc3RSYWdlOiB7XHJcbiAgICAgICAgbmFtZTogXCLlhb3ljJbni4LmmrRcIixcclxuICAgICAgICBpZDogU2tpbGxFbnVtLmJlYXN0UmFnZSxcclxuICAgICAgICBjb29sZG93bjogNC4wLCAgLy8g57yp55+t5Ya35Y205pe26Ze05Lul5Yqg5b+r5oiY5paX6IqC5aWPXHJcbiAgICAgICAgZWZmZWN0OiAoc2VsZiwgdGFyZ2V0LCBsb2cpID0+IHtcclxuICAgICAgICAgICAgbG9nKGDwn5C6ICR7c2VsZi5uYW1lfSDov5vlhaXlhb3ljJbni4LmmrTnirbmgIHvvIFgKTtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIHsgdHlwZTogXCJhcHBseUJ1ZmZTZWxmXCIsIGJ1ZmY6IFwicmFnZVwiIH1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOaImOWQvCAtIOe+pOS9k+Winuebiu+8iOWPr+S7peS9nOS4uuWkp+aLm++8iVxyXG4gICAgd2FyQ3J5OiB7XHJcbiAgICAgICAgbmFtZTogXCLmiJjlkLxcIixcclxuICAgICAgICBpZDogU2tpbGxFbnVtLndhckNyeSxcclxuICAgICAgICBjb29sZG93bjogNS4wLCAgLy8g57yp55+t5Ya35Y205pe26Ze05Lul5Yqg5b+r5oiY5paX6IqC5aWPXHJcbiAgICAgICAgcmVxdWlyZVJhZ2U6IDEwMCwgIC8vIOiuvue9ruS4ujDooajnpLrmma7pgJrmioDog73vvIxcclxuICAgICAgICBlZmZlY3Q6IChzZWxmLCB0YXJnZXQsIGxvZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0ZWFtQ29tcCA9IHNlbGYuZ2V0Q29tcG9uZW50KFwiVGVhbUNvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgaWYgKCF0ZWFtQ29tcCkgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYWxsaWVzID0gdGVhbUNvbXAudGVhbSA9PT0gXCJoZXJvXCJcclxuICAgICAgICAgICAgICAgID8gVGVhbVJlZi5oZXJvc1JlZlxyXG4gICAgICAgICAgICAgICAgOiBUZWFtUmVmLm1vbnN0ZXJzUmVmO1xyXG5cclxuICAgICAgICAgICAgbG9nKGDwn5OiICR7c2VsZi5uYW1lfSDlj5Hlh7rmiJjlkLzvvIzpvJPoiJ7pmJ/lj4vvvIFgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOWQr+WKqOaMgee7reazoue6ueaViOaenO+8iOWcqOaWveazleiAhei6q+S4iu+8iVxyXG4gICAgICAgICAgICBjb25zdCBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICAgICAgICAgIGlmIChzY2VuZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2tpbGxFZmZlY3RQbGF5ZXIgPSBzY2VuZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFwiU2tpbGxFZmZlY3RQbGF5ZXJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2tpbGxFZmZlY3RQbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBza2lsbEVmZmVjdFBsYXllci5fc3RhcnRXYXJDcnlDb250aW51b3VzV2F2ZXMoc2VsZik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gM+enkuWQjuiHquWKqOWBnOatouaMgee7reazoue6ue+8iEJ1ZmbmjIHnu63ml7bpl7TvvIlcclxuICAgICAgICAgICAgICAgICAgICBza2lsbEVmZmVjdFBsYXllci5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBza2lsbEVmZmVjdFBsYXllci5fc3RvcFdhckNyeUNvbnRpbnVvdXNXYXZlcyhzZWxmKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAzLjApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDkuLrmiYDmnInpmJ/lj4vmt7vliqDmiJjlkLxCdWZm77yI5Lyg6YCS5pa95rOV6ICFc2VsZu+8iVxyXG4gICAgICAgICAgICBmb3IgKGxldCBhbGx5IG9mIGFsbGllcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZkNvbXAgPSBCdWZmRmFjdG9yeS5jcmVhdGUoXCJ3YXJDcnlcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVmZkNvbXApIHtcclxuICAgICAgICAgICAgICAgICAgICBCdWZmU3lzdGVtLmFkZEJ1ZmYoYWxseSwgYnVmZkNvbXAsIGxvZywgbnVsbCwgc2VsZik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOe+pOS9k+aKpOebviAtIOS4uumYn+WPi+aPkOS+m+aKpOebvlxyXG4gICAgc2hpZWxkQWxsaWVzOiB7XHJcbiAgICAgICAgbmFtZTogXCLnvqTkvZPmiqTnm75cIixcclxuICAgICAgICBpZDogU2tpbGxFbnVtLnNoaWVsZEFsbGllcyxcclxuICAgICAgICBjb29sZG93bjogMy4wLCAgLy8g57yp55+t5Ya35Y205pe26Ze05Lul5Yqg5b+r5oiY5paX6IqC5aWPXHJcbiAgICAgICAgcmVxdWlyZVJhZ2U6IDEwMCxcclxuICAgICAgICBlZmZlY3Q6IChzZWxmLCB0YXJnZXQsIGxvZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0ZWFtQ29tcCA9IHNlbGYuZ2V0Q29tcG9uZW50KFwiVGVhbUNvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgaWYgKCF0ZWFtQ29tcCkgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYWxsaWVzID0gdGVhbUNvbXAudGVhbSA9PT0gXCJoZXJvXCJcclxuICAgICAgICAgICAgICAgID8gVGVhbVJlZi5oZXJvc1JlZlxyXG4gICAgICAgICAgICAgICAgOiBUZWFtUmVmLm1vbnN0ZXJzUmVmO1xyXG5cclxuICAgICAgICAgICAgbG9nKGDwn5uh77iPICR7c2VsZi5uYW1lfSDkuLrpmJ/lj4vmlr3liqDmiqTnm77vvIFgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOS4uuaJgOaciemYn+WPi+a3u+WKoOaKpOebvkJ1ZmbvvIjkvKDpgJLmlr3ms5XogIVzZWxm77yJXHJcbiAgICAgICAgICAgIGZvciAobGV0IGFsbHkgb2YgYWxsaWVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidWZmQ29tcCA9IEJ1ZmZGYWN0b3J5LmNyZWF0ZShcInNoaWVsZFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChidWZmQ29tcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIEJ1ZmZTeXN0ZW0uYWRkQnVmZihhbGx5LCBidWZmQ29tcCwgbG9nLCBudWxsLCBzZWxmKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8g576k5L2T5rK755aXIC0g5oyB57ut5oGi5aSN5bex5pa56Zi16JCl5omA5pyJ6Iux6ZuE55qE55Sf5ZG95YC8XHJcbiAgICBoZWFsQWxsaWVzOiB7XHJcbiAgICAgICAgbmFtZTogXCLmsrvnlpfmnK9cIixcclxuICAgICAgICBpZDogU2tpbGxFbnVtLmhlYWxBbGxpZXMsXHJcbiAgICAgICAgY29vbGRvd246IDMuNSwgIC8vIOe8qeefreWGt+WNtOaXtumXtOS7peWKoOW/q+aImOaWl+iKguWlj1xyXG4gICAgICAgIHJlcXVpcmVSYWdlOiAxMDAsXHJcbiAgICAgICAgZWZmZWN0OiAoc2VsZiwgdGFyZ2V0LCBsb2cpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGVhbUNvbXAgPSBzZWxmLmdldENvbXBvbmVudChcIlRlYW1Db21wb25lbnRcIik7XHJcbiAgICAgICAgICAgIGlmICghdGVhbUNvbXApIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFsbGllcyA9IHRlYW1Db21wLnRlYW0gPT09IFwiaGVyb1wiXHJcbiAgICAgICAgICAgICAgICA/IFRlYW1SZWYuaGVyb3NSZWZcclxuICAgICAgICAgICAgICAgIDogVGVhbVJlZi5tb25zdGVyc1JlZjtcclxuXHJcbiAgICAgICAgICAgIGxvZyhg8J+SmiAke3NlbGYubmFtZX0g6YeK5pS+576k5L2T5rK755aX5pyv77yBYCk7XHJcblxyXG4gICAgICAgICAgICAvLyDkuLrmiYDmnInpmJ/lj4vmt7vliqDmjIHnu63mgaLlpI1CdWZm77yI5q+P56eS5oGi5aSNMTDngrnvvIzmjIHnu60z56eS77yJXHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50cyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgYWxseSBvZiBhbGxpZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFsbHlTdGF0cyA9IGFsbHkuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWxseVN0YXRzICYmICFhbGx5U3RhdHMuaXNEZWFkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmt7vliqDmjIHnu63mgaLlpI1CdWZm77yI5oyH5a6a55uu5qCH77yJXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFwcGx5QnVmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmOiBcImhlYWxPdmVyVGltZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGFsbHkgIC8vIOaMh+Wumuebruagh+WNleS9jVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZXZlbnRzO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8g5YeA5YyW5pyvIC0g5riF6Zmk5bex5pa56Zi16JCl5omA5pyJ5Y2V5L2N55qE6LSf6Z2iQnVmZlxyXG4gICAgY2xlYW5zZUFsbGllczoge1xyXG4gICAgICAgIG5hbWU6IFwi5YeA5YyW5pyvXCIsXHJcbiAgICAgICAgaWQ6IFNraWxsRW51bS5jbGVhbnNlQWxsaWVzLFxyXG4gICAgICAgIGNvb2xkb3duOiA0LjAsICAvLyDnvKnnn63lhrfljbTml7bpl7Tku6XliqDlv6vmiJjmlpfoioLlpY9cclxuICAgICAgICByZXF1aXJlUmFnZTogMTAwLC8v6ZyA6KaB5oCS5rCU5YC85ruh5omN6IO96YeK5pS+XHJcbiAgICAgICAgZWZmZWN0OiAoc2VsZiwgdGFyZ2V0LCBsb2cpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGVhbUNvbXAgPSBzZWxmLmdldENvbXBvbmVudChcIlRlYW1Db21wb25lbnRcIik7XHJcbiAgICAgICAgICAgIGlmICghdGVhbUNvbXApIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFsbGllcyA9IHRlYW1Db21wLnRlYW0gPT09IFwiaGVyb1wiXHJcbiAgICAgICAgICAgICAgICA/IFRlYW1SZWYuaGVyb3NSZWZcclxuICAgICAgICAgICAgICAgIDogVGVhbVJlZi5tb25zdGVyc1JlZjtcclxuXHJcbiAgICAgICAgICAgIGxvZyhg8J+MnyAke3NlbGYubmFtZX0g6YeK5pS+5YeA5YyW5pyv77yBYCk7XHJcblxyXG4gICAgICAgICAgICAvLyDlrprkuYnotJ/pnaJCdWZm5YiX6KGo77yI6ZyA6KaB6KKr5riF6Zmk55qEQnVmZu+8iVxyXG4gICAgICAgICAgICBjb25zdCBuZWdhdGl2ZUJ1ZmZzID0gW1wi54eD54OnXCIsIFwi55yp5pmVXCJdO1xyXG5cclxuICAgICAgICAgICAgLy8g5Li65omA5pyJ6Zif5Y+L77yI5YyF5ous6Ieq5bex77yJ5riF6Zmk6LSf6Z2iQnVmZlxyXG4gICAgICAgICAgICBjb25zdCBldmVudHMgPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgYWxsVGFyZ2V0cyA9IFsuLi5hbGxpZXMsIHNlbGZdOyAgLy8g5YyF5ous6Ieq5bex5ZKM5omA5pyJ6Zif5Y+LXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBhbGx5IG9mIGFsbFRhcmdldHMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghYWxseSB8fCAhYWxseS5pc1ZhbGlkKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbGx5U3RhdHMgPSBhbGx5LmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFsbHlTdGF0cyAmJiAhYWxseVN0YXRzLmlzRGVhZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5re75Yqg5riF6Zmk6LSf6Z2iQnVmZuS6i+S7tlxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyZW1vdmVOZWdhdGl2ZUJ1ZmZzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogYWxseSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZk5hbWVzOiBuZWdhdGl2ZUJ1ZmZzXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBldmVudHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbi8qKlxyXG4gKiDmoLnmja7mioDog71JROiOt+WPluWujOaVtOaKgOiDvemFjee9ru+8iOS+m+WNt+i9tOOAgeWtmOaho+etieS9v+eUqO+8iVxyXG4gKiBAcGFyYW0ge251bWJlcn0gc2tpbGxJZCAtIOaKgOiDvUlE77yI5LiOIFNraWxsRW51bSDkuIDoh7TvvIlcclxuICogQHJldHVybnMge09iamVjdHxudWxsfSDmioDog73phY3nva7lr7nosaHvvIzmnKrmib7liLDov5Tlm54gbnVsbFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U2tpbGxCeUlkKHNraWxsSWQpIHtcclxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKFNraWxsQ29uZmlnKSkge1xyXG4gICAgICAgIGlmIChTa2lsbENvbmZpZ1trZXldLmlkID09PSBza2lsbElkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTa2lsbENvbmZpZ1trZXldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIFNraWxsRW51bTogU2tpbGxFbnVtLFxyXG4gICAgU2tpbGxDb25maWc6IFNraWxsQ29uZmlnLFxyXG4gICAgZ2V0U2tpbGxCeUlkOiBnZXRTa2lsbEJ5SWRcclxufTtcclxuXHJcbiJdfQ==