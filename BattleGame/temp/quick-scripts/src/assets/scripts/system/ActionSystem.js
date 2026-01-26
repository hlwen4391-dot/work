"use strict";
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