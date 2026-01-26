
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/system/ActionSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9aec103vAhJooIGpnZvTzEW', 'ActionSystem');
// Scripts/system/ActionSystem.js

"use strict";

var TeamComponent = require("TeamComponent");
var TeamRef = require("TeamRef");
var StatsComponent = require("StatsComponent");
var SkillSystem = require("SkillSystem");
var BuffSystem = require("BuffSystem");
var DeathSystem = require("DeathSystem");
var ActionSystem = cc.Class({
  name: "ActionSystem",
  properties: {},
  ctor: function ctor(logger, rand, recorder) {
    this.logger = logger;
    this.rand = rand;
    this.recorder = recorder; // 战斗记录器（可选）
    this.deathSystem = new DeathSystem(logger, recorder);
    this.skillSystem = SkillSystem;
  },
  pickRandomTarget: function pickRandomTarget(entity) {
    var teamComps = entity.getComponent("TeamComponent");
    if (!teamComps) return null;
    var enemyTeam = teamComps.team === "hero" ? TeamRef.monstersRef : TeamRef.herosRef;
    var alive = enemyTeam.filter(function (e) {
      return !e.getComponent("StatsComponent").isDead();
    });
    if (alive.length === 0) return null;
    return alive[Math.floor(this.rand() * alive.length)];
  },
  updateBuffEffects: function updateBuffEffects(entity, dt) {
    BuffSystem.update(entity, dt, this.logger.log.bind(this.logger), this.recorder);
    var stats = entity.getComponent("StatsComponent");
    if (!stats) return false;
    if (this.deathSystem.checkAndHandleDeath(entity)) return false;
    if (BuffSystem.hasStatus(entity, "stun")) return false;
    return true;
  },
  updateSkillCooldowns: function updateSkillCooldowns(entity, dt) {
    SkillSystem.updateCooldowns(entity, dt);
  },
  /**
   * 执行单位行动（支持攻击动画）
   * @param {cc.Node} entity - 实体节点
   * @param {number} dt - 时间增量
   * @param {Function} callback - 完成回调（用于动画完成后继续逻辑）
   */
  performAction: function performAction(entity, dt, callback) {
    var _this = this;
    var stats = entity.getComponent("StatsComponent");
    if (!stats || stats.isDead()) {
      if (callback) callback();
      return;
    }
    var canAct = this.updateBuffEffects(entity, dt);
    if (!canAct) {
      if (callback) callback();
      return;
    }
    this.updateSkillCooldowns(entity, dt);
    var skill = SkillSystem.findAvailableSkill(entity);
    if (!skill) {
      if (callback) callback();
      return;
    }
    var target = this.pickRandomTarget(entity);
    if (!target) {
      if (callback) callback();
      return;
    }
    this.logger.log(entity.name + " \u6267\u884C\u884C\u52A8");

    // 记录行动开始
    if (this.recorder) {
      this.recorder.recordActionStart(entity);
    }

    // 检查技能是否是大招（大招不需要AttackMover的动画流程，因为有大招UI）
    var isUltimateSkill = skill.requireRage && skill.requireRage > 0;
    if (isUltimateSkill) {
      // 大招：保存callback到entity，供SkillSystem使用
      entity._actionCallback = function () {
        // 大招执行完成后，检查死亡并调用callback
        _this.deathSystem.checkAndHandleDeath(target, _this.recorder);
        if (callback) callback();
      };
      // 大招：直接执行技能（会显示UI并执行伤害计算）
      SkillSystem.useSkill(entity, target, skill, this.logger.log.bind(this.logger), this.rand, this.recorder);
      // 注意：callback会在SkillSystem._showUltimateSkillUI的onComplete回调中调用
      return;
    }

    // 检查是否有攻击动画组件
    var attackMover = entity.getComponent("AttackMover");
    if (attackMover && !attackMover.isAttacking) {
      // 有动画组件：先播放动画，在受击动画播放到一半时执行伤害计算
      // attackTarget 方法会自动判断是否是远程攻击（isRanged）
      // 如果是远程攻击，只播放攻击动画不移动；如果是近战，执行完整的移动+攻击+返回序列

      // 在受击动画播放到一半时触发伤害计算（onHit回调）
      var onHit = function onHit() {
        // ✅ 在受击动画播放到一半时立即执行伤害计算和飘字显示
        SkillSystem.useSkill(entity, target, skill, _this.logger.log.bind(_this.logger), _this.rand, _this.recorder);
      };

      // 攻击序列完成后只处理死亡检测等后续逻辑（伤害已经在受击动画一半时计算过了）
      attackMover.attackTarget(target, function () {
        // 动画完成后检查死亡（伤害已经在受击动画一半时计算过了）
        _this.deathSystem.checkAndHandleDeath(target, _this.recorder);
        if (callback) callback();
      }, onHit);
    } else {
      // 没有动画组件：直接执行技能
      SkillSystem.useSkill(entity, target, skill, this.logger.log.bind(this.logger), this.rand, this.recorder);
      this.deathSystem.checkAndHandleDeath(target, this.recorder);
      if (callback) callback();
    }
  }
});
module.exports = ActionSystem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxBY3Rpb25TeXN0ZW0uanMiXSwibmFtZXMiOlsiVGVhbUNvbXBvbmVudCIsInJlcXVpcmUiLCJUZWFtUmVmIiwiU3RhdHNDb21wb25lbnQiLCJTa2lsbFN5c3RlbSIsIkJ1ZmZTeXN0ZW0iLCJEZWF0aFN5c3RlbSIsIkFjdGlvblN5c3RlbSIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsImN0b3IiLCJsb2dnZXIiLCJyYW5kIiwicmVjb3JkZXIiLCJkZWF0aFN5c3RlbSIsInNraWxsU3lzdGVtIiwicGlja1JhbmRvbVRhcmdldCIsImVudGl0eSIsInRlYW1Db21wcyIsImdldENvbXBvbmVudCIsImVuZW15VGVhbSIsInRlYW0iLCJtb25zdGVyc1JlZiIsImhlcm9zUmVmIiwiYWxpdmUiLCJmaWx0ZXIiLCJlIiwiaXNEZWFkIiwibGVuZ3RoIiwiTWF0aCIsImZsb29yIiwidXBkYXRlQnVmZkVmZmVjdHMiLCJkdCIsInVwZGF0ZSIsImxvZyIsImJpbmQiLCJzdGF0cyIsImNoZWNrQW5kSGFuZGxlRGVhdGgiLCJoYXNTdGF0dXMiLCJ1cGRhdGVTa2lsbENvb2xkb3ducyIsInVwZGF0ZUNvb2xkb3ducyIsInBlcmZvcm1BY3Rpb24iLCJjYWxsYmFjayIsIl90aGlzIiwiY2FuQWN0Iiwic2tpbGwiLCJmaW5kQXZhaWxhYmxlU2tpbGwiLCJ0YXJnZXQiLCJyZWNvcmRBY3Rpb25TdGFydCIsImlzVWx0aW1hdGVTa2lsbCIsInJlcXVpcmVSYWdlIiwiX2FjdGlvbkNhbGxiYWNrIiwidXNlU2tpbGwiLCJhdHRhY2tNb3ZlciIsImlzQXR0YWNraW5nIiwib25IaXQiLCJhdHRhY2tUYXJnZXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBR0MsT0FBTyxDQUFDLGVBQWUsQ0FBQztBQUM1QyxJQUFJQyxPQUFPLEdBQUdELE9BQU8sQ0FB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OEIsTUFBTSxFQUFFRixLQUFLLEVBQUUsSUFBSSxDQUFDbEMsTUFBTSxDQUFDdUIsR0FBRyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDeEIsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDQyxJQUFJLEVBQUUsSUFBSSxDQUFDQyxRQUFRLENBQUM7TUFDeEcsSUFBSSxDQUFDQyxXQUFXLENBQUN1QixtQkFBbUIsQ0FBQ1UsTUFBTSxFQUFFLElBQUksQ0FBQ2xDLFFBQVEsQ0FBQztNQUMzRCxJQUFJNkIsUUFBUSxFQUFFQSxRQUFRLEVBQUU7SUFDNUI7RUFDSjtBQUNKLENBQUMsQ0FBQztBQUVGZSxNQUFNLENBQUNDLE9BQU8sR0FBR3JELFlBQVkiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBUZWFtQ29tcG9uZW50ID0gcmVxdWlyZShcIlRlYW1Db21wb25lbnRcIik7XG52YXIgVGVhbVJlZiA9IHJlcXVpcmUoXCJUZWFtUmVmXCIpO1xudmFyIFN0YXRzQ29tcG9uZW50ID0gcmVxdWlyZShcIlN0YXRzQ29tcG9uZW50XCIpO1xudmFyIFNraWxsU3lzdGVtID0gcmVxdWlyZShcIlNraWxsU3lzdGVtXCIpO1xudmFyIEJ1ZmZTeXN0ZW0gPSByZXF1aXJlKFwiQnVmZlN5c3RlbVwiKTtcbnZhciBEZWF0aFN5c3RlbSA9IHJlcXVpcmUoXCJEZWF0aFN5c3RlbVwiKTtcblxudmFyIEFjdGlvblN5c3RlbSA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiBcIkFjdGlvblN5c3RlbVwiLFxuXG4gICAgcHJvcGVydGllczoge30sXG5cbiAgICBjdG9yKGxvZ2dlciwgcmFuZCwgcmVjb3JkZXIpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgICAgIHRoaXMucmFuZCA9IHJhbmQ7XG4gICAgICAgIHRoaXMucmVjb3JkZXIgPSByZWNvcmRlcjsgLy8g5oiY5paX6K6w5b2V5Zmo77yI5Y+v6YCJ77yJXG4gICAgICAgIHRoaXMuZGVhdGhTeXN0ZW0gPSBuZXcgRGVhdGhTeXN0ZW0obG9nZ2VyLCByZWNvcmRlcik7XG4gICAgICAgIHRoaXMuc2tpbGxTeXN0ZW0gPSBTa2lsbFN5c3RlbTtcbiAgICB9LFxuXG4gICAgcGlja1JhbmRvbVRhcmdldChlbnRpdHkpIHtcbiAgICAgICAgY29uc3QgdGVhbUNvbXBzID0gZW50aXR5LmdldENvbXBvbmVudChcIlRlYW1Db21wb25lbnRcIik7XG4gICAgICAgIGlmICghdGVhbUNvbXBzKSByZXR1cm4gbnVsbDtcblxuICAgICAgICBjb25zdCBlbmVteVRlYW0gPSAodGVhbUNvbXBzLnRlYW0gPT09IFwiaGVyb1wiID8gVGVhbVJlZi5tb25zdGVyc1JlZiA6IFRlYW1SZWYuaGVyb3NSZWYpO1xuICAgICAgICBjb25zdCBhbGl2ZSA9IGVuZW15VGVhbS5maWx0ZXIoZSA9PiAhZS5nZXRDb21wb25lbnQoXCJTdGF0c0NvbXBvbmVudFwiKS5pc0RlYWQoKSk7XG4gICAgICAgIGlmIChhbGl2ZS5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuXG4gICAgICAgIHJldHVybiBhbGl2ZVtNYXRoLmZsb29yKHRoaXMucmFuZCgpICogYWxpdmUubGVuZ3RoKV07XG4gICAgfSxcblxuICAgIHVwZGF0ZUJ1ZmZFZmZlY3RzKGVudGl0eSwgZHQpIHtcbiAgICAgICAgQnVmZlN5c3RlbS51cGRhdGUoZW50aXR5LCBkdCwgdGhpcy5sb2dnZXIubG9nLmJpbmQodGhpcy5sb2dnZXIpLCB0aGlzLnJlY29yZGVyKTtcblxuICAgICAgICBjb25zdCBzdGF0cyA9IGVudGl0eS5nZXRDb21wb25lbnQoXCJTdGF0c0NvbXBvbmVudFwiKTtcbiAgICAgICAgaWYgKCFzdGF0cykgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmRlYXRoU3lzdGVtLmNoZWNrQW5kSGFuZGxlRGVhdGgoZW50aXR5KSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGlmIChCdWZmU3lzdGVtLmhhc1N0YXR1cyhlbnRpdHksIFwic3R1blwiKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICB1cGRhdGVTa2lsbENvb2xkb3ducyhlbnRpdHksIGR0KSB7XG4gICAgICAgIFNraWxsU3lzdGVtLnVwZGF0ZUNvb2xkb3ducyhlbnRpdHksIGR0KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5omn6KGM5Y2V5L2N6KGM5Yqo77yI5pSv5oyB5pS75Ye75Yqo55S777yJXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBlbnRpdHkgLSDlrp7kvZPoioLngrlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZHQgLSDml7bpl7Tlop7ph49cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIOWujOaIkOWbnuiwg++8iOeUqOS6juWKqOeUu+WujOaIkOWQjue7p+e7remAu+i+ke+8iVxuICAgICAqL1xuICAgIHBlcmZvcm1BY3Rpb24oZW50aXR5LCBkdCwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3Qgc3RhdHMgPSBlbnRpdHkuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XG4gICAgICAgIGlmICghc3RhdHMgfHwgc3RhdHMuaXNEZWFkKCkpIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNhbkFjdCA9IHRoaXMudXBkYXRlQnVmZkVmZmVjdHMoZW50aXR5LCBkdCk7XG4gICAgICAgIGlmICghY2FuQWN0KSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVNraWxsQ29vbGRvd25zKGVudGl0eSwgZHQpO1xuXG4gICAgICAgIGNvbnN0IHNraWxsID0gU2tpbGxTeXN0ZW0uZmluZEF2YWlsYWJsZVNraWxsKGVudGl0eSk7XG4gICAgICAgIGlmICghc2tpbGwpIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMucGlja1JhbmRvbVRhcmdldChlbnRpdHkpO1xuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKGAke2VudGl0eS5uYW1lfSDmiafooYzooYzliqhgKTtcblxuICAgICAgICAvLyDorrDlvZXooYzliqjlvIDlp4tcbiAgICAgICAgaWYgKHRoaXMucmVjb3JkZXIpIHtcbiAgICAgICAgICAgIHRoaXMucmVjb3JkZXIucmVjb3JkQWN0aW9uU3RhcnQoZW50aXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOajgOafpeaKgOiDveaYr+WQpuaYr+Wkp+aLm++8iOWkp+aLm+S4jemcgOimgUF0dGFja01vdmVy55qE5Yqo55S75rWB56iL77yM5Zug5Li65pyJ5aSn5oubVUnvvIlcbiAgICAgICAgY29uc3QgaXNVbHRpbWF0ZVNraWxsID0gc2tpbGwucmVxdWlyZVJhZ2UgJiYgc2tpbGwucmVxdWlyZVJhZ2UgPiAwO1xuXG4gICAgICAgIGlmIChpc1VsdGltYXRlU2tpbGwpIHtcbiAgICAgICAgICAgIC8vIOWkp+aLm++8muS/neWtmGNhbGxiYWNr5YiwZW50aXR577yM5L6bU2tpbGxTeXN0ZW3kvb/nlKhcbiAgICAgICAgICAgIGVudGl0eS5fYWN0aW9uQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g5aSn5oub5omn6KGM5a6M5oiQ5ZCO77yM5qOA5p+l5q275Lqh5bm26LCD55SoY2FsbGJhY2tcbiAgICAgICAgICAgICAgICB0aGlzLmRlYXRoU3lzdGVtLmNoZWNrQW5kSGFuZGxlRGVhdGgodGFyZ2V0LCB0aGlzLnJlY29yZGVyKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8g5aSn5oub77ya55u05o6l5omn6KGM5oqA6IO977yI5Lya5pi+56S6VUnlubbmiafooYzkvKTlrrPorqHnrpfvvIlcbiAgICAgICAgICAgIFNraWxsU3lzdGVtLnVzZVNraWxsKGVudGl0eSwgdGFyZ2V0LCBza2lsbCwgdGhpcy5sb2dnZXIubG9nLmJpbmQodGhpcy5sb2dnZXIpLCB0aGlzLnJhbmQsIHRoaXMucmVjb3JkZXIpO1xuICAgICAgICAgICAgLy8g5rOo5oSP77yaY2FsbGJhY2vkvJrlnKhTa2lsbFN5c3RlbS5fc2hvd1VsdGltYXRlU2tpbGxVSeeahG9uQ29tcGxldGXlm57osIPkuK3osIPnlKhcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOajgOafpeaYr+WQpuacieaUu+WHu+WKqOeUu+e7hOS7tlxuICAgICAgICBjb25zdCBhdHRhY2tNb3ZlciA9IGVudGl0eS5nZXRDb21wb25lbnQoXCJBdHRhY2tNb3ZlclwiKTtcblxuICAgICAgICBpZiAoYXR0YWNrTW92ZXIgJiYgIWF0dGFja01vdmVyLmlzQXR0YWNraW5nKSB7XG4gICAgICAgICAgICAvLyDmnInliqjnlLvnu4Tku7bvvJrlhYjmkq3mlL7liqjnlLvvvIzlnKjlj5flh7vliqjnlLvmkq3mlL7liLDkuIDljYrml7bmiafooYzkvKTlrrPorqHnrpdcbiAgICAgICAgICAgIC8vIGF0dGFja1RhcmdldCDmlrnms5XkvJroh6rliqjliKTmlq3mmK/lkKbmmK/ov5znqIvmlLvlh7vvvIhpc1JhbmdlZO+8iVxuICAgICAgICAgICAgLy8g5aaC5p6c5piv6L+c56iL5pS75Ye777yM5Y+q5pKt5pS+5pS75Ye75Yqo55S75LiN56e75Yqo77yb5aaC5p6c5piv6L+R5oiY77yM5omn6KGM5a6M5pW055qE56e75YqoK+aUu+WHuyvov5Tlm57luo/liJdcblxuICAgICAgICAgICAgLy8g5Zyo5Y+X5Ye75Yqo55S75pKt5pS+5Yiw5LiA5Y2K5pe26Kem5Y+R5Lyk5a6z6K6h566X77yIb25IaXTlm57osIPvvIlcbiAgICAgICAgICAgIGNvbnN0IG9uSGl0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIOKchSDlnKjlj5flh7vliqjnlLvmkq3mlL7liLDkuIDljYrml7bnq4vljbPmiafooYzkvKTlrrPorqHnrpflkozpo5jlrZfmmL7npLpcbiAgICAgICAgICAgICAgICBTa2lsbFN5c3RlbS51c2VTa2lsbChlbnRpdHksIHRhcmdldCwgc2tpbGwsIHRoaXMubG9nZ2VyLmxvZy5iaW5kKHRoaXMubG9nZ2VyKSwgdGhpcy5yYW5kLCB0aGlzLnJlY29yZGVyKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIOaUu+WHu+W6j+WIl+WujOaIkOWQjuWPquWkhOeQhuatu+S6oeajgOa1i+etieWQjue7remAu+i+ke+8iOS8pOWus+W3sue7j+WcqOWPl+WHu+WKqOeUu+S4gOWNiuaXtuiuoeeul+i/h+S6hu+8iVxuICAgICAgICAgICAgYXR0YWNrTW92ZXIuYXR0YWNrVGFyZ2V0KHRhcmdldCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIOWKqOeUu+WujOaIkOWQjuajgOafpeatu+S6oe+8iOS8pOWus+W3sue7j+WcqOWPl+WHu+WKqOeUu+S4gOWNiuaXtuiuoeeul+i/h+S6hu+8iVxuICAgICAgICAgICAgICAgIHRoaXMuZGVhdGhTeXN0ZW0uY2hlY2tBbmRIYW5kbGVEZWF0aCh0YXJnZXQsIHRoaXMucmVjb3JkZXIpO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0sIG9uSGl0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOayoeacieWKqOeUu+e7hOS7tu+8muebtOaOpeaJp+ihjOaKgOiDvVxuICAgICAgICAgICAgU2tpbGxTeXN0ZW0udXNlU2tpbGwoZW50aXR5LCB0YXJnZXQsIHNraWxsLCB0aGlzLmxvZ2dlci5sb2cuYmluZCh0aGlzLmxvZ2dlciksIHRoaXMucmFuZCwgdGhpcy5yZWNvcmRlcik7XG4gICAgICAgICAgICB0aGlzLmRlYXRoU3lzdGVtLmNoZWNrQW5kSGFuZGxlRGVhdGgodGFyZ2V0LCB0aGlzLnJlY29yZGVyKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFjdGlvblN5c3RlbTsiXX0=