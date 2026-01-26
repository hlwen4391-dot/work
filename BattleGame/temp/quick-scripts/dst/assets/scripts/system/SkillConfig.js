
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
module.exports = {
  SkillEnum: SkillEnum,
  SkillConfig: SkillConfig
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxTa2lsbENvbmZpZy5qcyJdLCJuYW1lcyI6WyJCdWZmRmFjdG9yeSIsInJlcXVpcmUiLCJCdWZmU3lzdGVtIiwiVGVhbVJlZiIsIlNraWxsRW51bSIsIm5vcm1hbEF0dGFjayIsInN0dW5Ta2lsbCIsImZpcmViYWxsIiwicmFnZVNraWxsIiwiYmVhc3RSYWdlIiwid2FyQ3J5Iiwic2hpZWxkQWxsaWVzIiwiaGVhbEFsbGllcyIsImNsZWFuc2VBbGxpZXMiLCJ1bHRpbWF0ZVNraWxsIiwiU2tpbGxDb25maWciLCJuYW1lIiwiaWQiLCJjb29sZG93biIsImVmZmVjdCIsInNlbGYiLCJ0YXJnZXQiLCJsb2ciLCJyYW5kIiwiYXRrIiwiZ2V0Q29tcG9uZW50IiwiZGVmIiwiZG1nIiwiTWF0aCIsIm1heCIsImF0dGFjayIsImRlZmVuc2UiLCJjcml0IiwiaW1tdW5lIiwiZmxvb3IiLCJ0eXBlIiwidmFsdWUiLCJidWZmIiwicmVxdWlyZVJhZ2UiLCJ0ZWFtQ29tcCIsImFsbGllcyIsInRlYW0iLCJoZXJvc1JlZiIsIm1vbnN0ZXJzUmVmIiwic2NlbmUiLCJjYyIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJza2lsbEVmZmVjdFBsYXllciIsImdldENvbXBvbmVudEluQ2hpbGRyZW4iLCJfc3RhcnRXYXJDcnlDb250aW51b3VzV2F2ZXMiLCJzY2hlZHVsZU9uY2UiLCJfc3RvcFdhckNyeUNvbnRpbnVvdXNXYXZlcyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJfc3RlcCIsImRvbmUiLCJhbGx5IiwiYnVmZkNvbXAiLCJjcmVhdGUiLCJhZGRCdWZmIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsImV2ZW50cyIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJhbGx5U3RhdHMiLCJpc0RlYWQiLCJwdXNoIiwibmVnYXRpdmVCdWZmcyIsImFsbFRhcmdldHMiLCJjb25jYXQiLCJfaXRlcmF0b3I0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QyxJQUFJO1lBQ1prQixTQUFTLEVBQUVOO1VBQ2YsQ0FBQyxDQUFDO1FBQ047TUFDSjtNQUVBLE9BQU9OLE1BQU07SUFDakI7RUFDSjtBQUVKLENBQUM7QUFFRGEsTUFBTSxDQUFDQyxPQUFPLEdBQUc7RUFDYnpFLFNBQVMsRUFBRUEsU0FBUztFQUNwQlcsV0FBVyxFQUFFQTtBQUNqQixDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQnVmZkZhY3RvcnkgPSByZXF1aXJlKFwiQnVmZkZhY3RvcnlcIik7XHJcbnZhciBCdWZmU3lzdGVtID0gcmVxdWlyZShcIkJ1ZmZTeXN0ZW1cIik7XHJcbnZhciBUZWFtUmVmID0gcmVxdWlyZShcIlRlYW1SZWZcIik7XHJcblxyXG4vKipcclxuICog5oqA6IO95p6a5Li+XHJcbiAqL1xyXG52YXIgU2tpbGxFbnVtID0ge1xyXG4gICAgbm9ybWFsQXR0YWNrOiAxLCAgLy8g5pmu6YCa5pS75Ye7XHJcbiAgICBzdHVuU2tpbGw6IDIsICAgICAvLyDnm77lh7tcclxuICAgIGZpcmViYWxsOiAzLCAgICAgIC8vIOeBq+eQg+acr1xyXG4gICAgcmFnZVNraWxsOiA0LCAgICAgLy8g54uC5pq0XHJcbiAgICBiZWFzdFJhZ2U6IDcsICAgICAvLyDlhb3ljJbni4LmmrRcclxuICAgIHdhckNyeTogNSwgICAgICAgIC8vIOaImOWQvFxyXG4gICAgc2hpZWxkQWxsaWVzOiA2LCAgLy8g576k5L2T5oqk55u+XHJcbiAgICBoZWFsQWxsaWVzOiA5LCAgICAvLyDnvqTkvZPmsrvnlpdcclxuICAgIGNsZWFuc2VBbGxpZXM6IDEwLCAvLyDlh4DljJbpmJ/lj4tcclxuICAgIHVsdGltYXRlU2tpbGw6IDggIC8vIOWkp+aLm++8iOmcgOimgeaAkuawlOWAvOa7oe+8iVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIOaKgOiDvemFjee9ruWvueixoVxyXG4gKiDljIXlkKvmiYDmnInmioDog73nmoTlrprkuYlcclxuICovXHJcbnZhciBTa2lsbENvbmZpZyA9IHtcclxuXHJcbiAgICAvLyDmma7pgJrmlLvlh7sgLSDln7rnoYDmlLvlh7vmioDog71cclxuICAgIG5vcm1hbEF0dGFjazoge1xyXG4gICAgICAgIG5hbWU6IFwi5pmu6YCa5pS75Ye7XCIsXHJcbiAgICAgICAgaWQ6IFNraWxsRW51bS5ub3JtYWxBdHRhY2ssXHJcbiAgICAgICAgY29vbGRvd246IDAuNSwgIC8vIOe8qeefreWGt+WNtOaXtumXtOS7peWKoOW/q+aImOaWl+iKguWlj1xyXG4gICAgICAgIGVmZmVjdDogKHNlbGYsIHRhcmdldCwgbG9nLCByYW5kKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0ayA9IHNlbGYuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlZiA9IHRhcmdldC5nZXRDb21wb25lbnQoXCJTdGF0c0NvbXBvbmVudFwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghYXRrIHx8ICFkZWYpIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkbWcgPSBNYXRoLm1heChhdGsuYXR0YWNrIC0gZGVmLmRlZmVuc2UsIDEpO1xyXG5cclxuICAgICAgICAgICAgLy8g5pq05Ye75Yik5a6aXHJcbiAgICAgICAgICAgIGlmIChyYW5kKCkgPCBhdGsuY3JpdCkge1xyXG4gICAgICAgICAgICAgICAgZG1nICo9IDI7XHJcbiAgICAgICAgICAgICAgICBsb2coYOKaoSDmmrTlh7vvvIEke3NlbGYubmFtZX0g6YCg5oiQ5Y+M5YCN5Lyk5a6zYCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIOWFjeS8pOiuoeeul1xyXG4gICAgICAgICAgICBkbWcgKj0gKDEgLSBkZWYuaW1tdW5lKTtcclxuICAgICAgICAgICAgZG1nID0gTWF0aC5mbG9vcihkbWcpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIHsgdHlwZTogXCJkYW1hZ2VcIiwgdmFsdWU6IGRtZyB9XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyDnm77lh7sgLSDpgKDmiJDkvKTlrrPlubbnnKnmmZVcclxuICAgIHN0dW5Ta2lsbDoge1xyXG4gICAgICAgIG5hbWU6IFwi55u+5Ye7XCIsXHJcbiAgICAgICAgaWQ6IFNraWxsRW51bS5zdHVuU2tpbGwsXHJcbiAgICAgICAgY29vbGRvd246IDIuNSwgIC8vIOe8qeefreWGt+WNtOaXtumXtOS7peWKoOW/q+aImOaWl+iKguWlj1xyXG4gICAgICAgIGVmZmVjdDogKHNlbGYsIHRhcmdldCwgbG9nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0ayA9IHNlbGYuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlZiA9IHRhcmdldC5nZXRDb21wb25lbnQoXCJTdGF0c0NvbXBvbmVudFwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghYXRrIHx8ICFkZWYpIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRtZyA9IE1hdGgubWF4KGF0ay5hdHRhY2sgLSBkZWYuZGVmZW5zZSwgMSk7XHJcbiAgICAgICAgICAgIGxvZyhg8J+boe+4jyAke3NlbGYubmFtZX0g5L2/55So55u+5Ye777yBYCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgeyB0eXBlOiBcImRhbWFnZVwiLCB2YWx1ZTogZG1nIH0sXHJcbiAgICAgICAgICAgICAgICB7IHR5cGU6IFwiYXBwbHlCdWZmXCIsIGJ1ZmY6IFwic3R1blwiIH1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOeBq+eQg+acryAtIOecn+WunuS8pOWus+W5tumZhOWKoOeHg+eDp1xyXG4gICAgZmlyZWJhbGw6IHtcclxuICAgICAgICBuYW1lOiBcIueBq+eQg+acr1wiLFxyXG4gICAgICAgIGlkOiBTa2lsbEVudW0uZmlyZWJhbGwsXHJcbiAgICAgICAgY29vbGRvd246IDEuNSwgIC8vIOe8qeefreWGt+WNtOaXtumXtOS7peWKoOW/q+aImOaWl+iKguWlj1xyXG4gICAgICAgIGVmZmVjdDogKHNlbGYsIHRhcmdldCwgbG9nKSA9PiB7XHJcbiAgICAgICAgICAgIGxvZyhg8J+UpSAke3NlbGYubmFtZX0g6YeK5pS+54Gr55CD5pyv77yBYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICB7IHR5cGU6IFwiZGFtYWdlVHJ1ZVwiLCB2YWx1ZTogNSB9LFxyXG4gICAgICAgICAgICAgICAgeyB0eXBlOiBcImFwcGx5QnVmZlwiLCBidWZmOiBcImJ1cm5cIiB9XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyDni4LmmrQgLSDoh6rouqvlop7nm4pcclxuICAgIC8vIHJhZ2VTa2lsbDoge1xyXG4gICAgLy8gICAgIG5hbWU6IFwi54uC5pq0XCIsXHJcbiAgICAvLyAgICAgaWQ6IFNraWxsRW51bS5yYWdlU2tpbGwsXHJcbiAgICAvLyAgICAgY29vbGRvd246IDQuMCxcclxuICAgIC8vICAgICBlZmZlY3Q6IChzZWxmLCB0YXJnZXQsIGxvZykgPT4ge1xyXG4gICAgLy8gICAgICAgICBsb2coYPCfmKEgJHtzZWxmLm5hbWV9IOi/m+WFpeeLguaatOeKtuaAge+8gWApO1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gW1xyXG4gICAgLy8gICAgICAgICAgICAgeyB0eXBlOiBcImFwcGx5QnVmZlNlbGZcIiwgYnVmZjogXCJyYWdlXCIgfVxyXG4gICAgLy8gICAgICAgICBdO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8g5YW95YyW54uC5pq0IC0g5pu05by655qE6Ieq6Lqr5aKe55uK77yM5bim5pyJ6YW354Kr54m55pWIXHJcbiAgICBiZWFzdFJhZ2U6IHtcclxuICAgICAgICBuYW1lOiBcIuWFveWMlueLguaatFwiLFxyXG4gICAgICAgIGlkOiBTa2lsbEVudW0uYmVhc3RSYWdlLFxyXG4gICAgICAgIGNvb2xkb3duOiA0LjAsICAvLyDnvKnnn63lhrfljbTml7bpl7Tku6XliqDlv6vmiJjmlpfoioLlpY9cclxuICAgICAgICBlZmZlY3Q6IChzZWxmLCB0YXJnZXQsIGxvZykgPT4ge1xyXG4gICAgICAgICAgICBsb2coYPCfkLogJHtzZWxmLm5hbWV9IOi/m+WFpeWFveWMlueLguaatOeKtuaAge+8gWApO1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgeyB0eXBlOiBcImFwcGx5QnVmZlNlbGZcIiwgYnVmZjogXCJyYWdlXCIgfVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8g5oiY5ZC8IC0g576k5L2T5aKe55uK77yI5Y+v5Lul5L2c5Li65aSn5oub77yJXHJcbiAgICB3YXJDcnk6IHtcclxuICAgICAgICBuYW1lOiBcIuaImOWQvFwiLFxyXG4gICAgICAgIGlkOiBTa2lsbEVudW0ud2FyQ3J5LFxyXG4gICAgICAgIGNvb2xkb3duOiA1LjAsICAvLyDnvKnnn63lhrfljbTml7bpl7Tku6XliqDlv6vmiJjmlpfoioLlpY9cclxuICAgICAgICByZXF1aXJlUmFnZTogMTAwLCAgLy8g6K6+572u5Li6MOihqOekuuaZrumAmuaKgOiDve+8jFxyXG4gICAgICAgIGVmZmVjdDogKHNlbGYsIHRhcmdldCwgbG9nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlYW1Db21wID0gc2VsZi5nZXRDb21wb25lbnQoXCJUZWFtQ29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICBpZiAoIXRlYW1Db21wKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbGxpZXMgPSB0ZWFtQ29tcC50ZWFtID09PSBcImhlcm9cIlxyXG4gICAgICAgICAgICAgICAgPyBUZWFtUmVmLmhlcm9zUmVmXHJcbiAgICAgICAgICAgICAgICA6IFRlYW1SZWYubW9uc3RlcnNSZWY7XHJcblxyXG4gICAgICAgICAgICBsb2coYPCfk6IgJHtzZWxmLm5hbWV9IOWPkeWHuuaImOWQvO+8jOm8k+iInumYn+WPi++8gWApO1xyXG5cclxuICAgICAgICAgICAgLy8g5ZCv5Yqo5oyB57ut5rOi57q55pWI5p6c77yI5Zyo5pa95rOV6ICF6Lqr5LiK77yJXHJcbiAgICAgICAgICAgIGNvbnN0IHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuICAgICAgICAgICAgaWYgKHNjZW5lKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBza2lsbEVmZmVjdFBsYXllciA9IHNjZW5lLmdldENvbXBvbmVudEluQ2hpbGRyZW4oXCJTa2lsbEVmZmVjdFBsYXllclwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChza2lsbEVmZmVjdFBsYXllcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNraWxsRWZmZWN0UGxheWVyLl9zdGFydFdhckNyeUNvbnRpbnVvdXNXYXZlcyhzZWxmKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAz56eS5ZCO6Ieq5Yqo5YGc5q2i5oyB57ut5rOi57q577yIQnVmZuaMgee7reaXtumXtO+8iVxyXG4gICAgICAgICAgICAgICAgICAgIHNraWxsRWZmZWN0UGxheWVyLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNraWxsRWZmZWN0UGxheWVyLl9zdG9wV2FyQ3J5Q29udGludW91c1dhdmVzKHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDMuMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIOS4uuaJgOaciemYn+WPi+a3u+WKoOaImOWQvEJ1ZmbvvIjkvKDpgJLmlr3ms5XogIVzZWxm77yJXHJcbiAgICAgICAgICAgIGZvciAobGV0IGFsbHkgb2YgYWxsaWVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidWZmQ29tcCA9IEJ1ZmZGYWN0b3J5LmNyZWF0ZShcIndhckNyeVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChidWZmQ29tcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIEJ1ZmZTeXN0ZW0uYWRkQnVmZihhbGx5LCBidWZmQ29tcCwgbG9nLCBudWxsLCBzZWxmKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8g576k5L2T5oqk55u+IC0g5Li66Zif5Y+L5o+Q5L6b5oqk55u+XHJcbiAgICBzaGllbGRBbGxpZXM6IHtcclxuICAgICAgICBuYW1lOiBcIue+pOS9k+aKpOebvlwiLFxyXG4gICAgICAgIGlkOiBTa2lsbEVudW0uc2hpZWxkQWxsaWVzLFxyXG4gICAgICAgIGNvb2xkb3duOiAzLjAsICAvLyDnvKnnn63lhrfljbTml7bpl7Tku6XliqDlv6vmiJjmlpfoioLlpY9cclxuICAgICAgICByZXF1aXJlUmFnZTogMTAwLFxyXG4gICAgICAgIGVmZmVjdDogKHNlbGYsIHRhcmdldCwgbG9nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlYW1Db21wID0gc2VsZi5nZXRDb21wb25lbnQoXCJUZWFtQ29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICBpZiAoIXRlYW1Db21wKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbGxpZXMgPSB0ZWFtQ29tcC50ZWFtID09PSBcImhlcm9cIlxyXG4gICAgICAgICAgICAgICAgPyBUZWFtUmVmLmhlcm9zUmVmXHJcbiAgICAgICAgICAgICAgICA6IFRlYW1SZWYubW9uc3RlcnNSZWY7XHJcblxyXG4gICAgICAgICAgICBsb2coYPCfm6HvuI8gJHtzZWxmLm5hbWV9IOS4uumYn+WPi+aWveWKoOaKpOebvu+8gWApO1xyXG5cclxuICAgICAgICAgICAgLy8g5Li65omA5pyJ6Zif5Y+L5re75Yqg5oqk55u+QnVmZu+8iOS8oOmAkuaWveazleiAhXNlbGbvvIlcclxuICAgICAgICAgICAgZm9yIChsZXQgYWxseSBvZiBhbGxpZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZDb21wID0gQnVmZkZhY3RvcnkuY3JlYXRlKFwic2hpZWxkXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ1ZmZDb21wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQnVmZlN5c3RlbS5hZGRCdWZmKGFsbHksIGJ1ZmZDb21wLCBsb2csIG51bGwsIHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyDnvqTkvZPmsrvnlpcgLSDmjIHnu63mgaLlpI3lt7HmlrnpmLXokKXmiYDmnInoi7Hpm4TnmoTnlJ/lkb3lgLxcclxuICAgIGhlYWxBbGxpZXM6IHtcclxuICAgICAgICBuYW1lOiBcIuayu+eWl+acr1wiLFxyXG4gICAgICAgIGlkOiBTa2lsbEVudW0uaGVhbEFsbGllcyxcclxuICAgICAgICBjb29sZG93bjogMy41LCAgLy8g57yp55+t5Ya35Y205pe26Ze05Lul5Yqg5b+r5oiY5paX6IqC5aWPXHJcbiAgICAgICAgcmVxdWlyZVJhZ2U6IDEwMCxcclxuICAgICAgICBlZmZlY3Q6IChzZWxmLCB0YXJnZXQsIGxvZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0ZWFtQ29tcCA9IHNlbGYuZ2V0Q29tcG9uZW50KFwiVGVhbUNvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgaWYgKCF0ZWFtQ29tcCkgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYWxsaWVzID0gdGVhbUNvbXAudGVhbSA9PT0gXCJoZXJvXCJcclxuICAgICAgICAgICAgICAgID8gVGVhbVJlZi5oZXJvc1JlZlxyXG4gICAgICAgICAgICAgICAgOiBUZWFtUmVmLm1vbnN0ZXJzUmVmO1xyXG5cclxuICAgICAgICAgICAgbG9nKGDwn5KaICR7c2VsZi5uYW1lfSDph4rmlL7nvqTkvZPmsrvnlpfmnK/vvIFgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOS4uuaJgOaciemYn+WPi+a3u+WKoOaMgee7reaBouWkjUJ1ZmbvvIjmr4/np5LmgaLlpI0xMOeCue+8jOaMgee7rTPnp5LvvIlcclxuICAgICAgICAgICAgY29uc3QgZXZlbnRzID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBhbGx5IG9mIGFsbGllcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWxseVN0YXRzID0gYWxseS5nZXRDb21wb25lbnQoXCJTdGF0c0NvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChhbGx5U3RhdHMgJiYgIWFsbHlTdGF0cy5pc0RlYWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOa3u+WKoOaMgee7reaBouWkjUJ1ZmbvvIjmjIflrprnm67moIfvvIlcclxuICAgICAgICAgICAgICAgICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXBwbHlCdWZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmY6IFwiaGVhbE92ZXJUaW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogYWxseSAgLy8g5oyH5a6a55uu5qCH5Y2V5L2NXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBldmVudHM7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyDlh4DljJbmnK8gLSDmuIXpmaTlt7HmlrnpmLXokKXmiYDmnInljZXkvY3nmoTotJ/pnaJCdWZmXHJcbiAgICBjbGVhbnNlQWxsaWVzOiB7XHJcbiAgICAgICAgbmFtZTogXCLlh4DljJbmnK9cIixcclxuICAgICAgICBpZDogU2tpbGxFbnVtLmNsZWFuc2VBbGxpZXMsXHJcbiAgICAgICAgY29vbGRvd246IDQuMCwgIC8vIOe8qeefreWGt+WNtOaXtumXtOS7peWKoOW/q+aImOaWl+iKguWlj1xyXG4gICAgICAgIHJlcXVpcmVSYWdlOiAxMDAsLy/pnIDopoHmgJLmsJTlgLzmu6HmiY3og73ph4rmlL5cclxuICAgICAgICBlZmZlY3Q6IChzZWxmLCB0YXJnZXQsIGxvZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0ZWFtQ29tcCA9IHNlbGYuZ2V0Q29tcG9uZW50KFwiVGVhbUNvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgaWYgKCF0ZWFtQ29tcCkgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYWxsaWVzID0gdGVhbUNvbXAudGVhbSA9PT0gXCJoZXJvXCJcclxuICAgICAgICAgICAgICAgID8gVGVhbVJlZi5oZXJvc1JlZlxyXG4gICAgICAgICAgICAgICAgOiBUZWFtUmVmLm1vbnN0ZXJzUmVmO1xyXG5cclxuICAgICAgICAgICAgbG9nKGDwn4yfICR7c2VsZi5uYW1lfSDph4rmlL7lh4DljJbmnK/vvIFgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOWumuS5iei0n+mdokJ1ZmbliJfooajvvIjpnIDopoHooqvmuIXpmaTnmoRCdWZm77yJXHJcbiAgICAgICAgICAgIGNvbnN0IG5lZ2F0aXZlQnVmZnMgPSBbXCLnh4Png6dcIiwgXCLnnKnmmZVcIl07XHJcblxyXG4gICAgICAgICAgICAvLyDkuLrmiYDmnInpmJ/lj4vvvIjljIXmi6zoh6rlt7HvvInmuIXpmaTotJ/pnaJCdWZmXHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50cyA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBhbGxUYXJnZXRzID0gWy4uLmFsbGllcywgc2VsZl07ICAvLyDljIXmi6zoh6rlt7HlkozmiYDmnInpmJ/lj4tcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGFsbHkgb2YgYWxsVGFyZ2V0cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhbGx5IHx8ICFhbGx5LmlzVmFsaWQpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFsbHlTdGF0cyA9IGFsbHkuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWxseVN0YXRzICYmICFhbGx5U3RhdHMuaXNEZWFkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmt7vliqDmuIXpmaTotJ/pnaJCdWZm5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJlbW92ZU5lZ2F0aXZlQnVmZnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBhbGx5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmTmFtZXM6IG5lZ2F0aXZlQnVmZnNcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBTa2lsbEVudW06IFNraWxsRW51bSxcclxuICAgIFNraWxsQ29uZmlnOiBTa2lsbENvbmZpZ1xyXG59O1xyXG5cclxuIl19