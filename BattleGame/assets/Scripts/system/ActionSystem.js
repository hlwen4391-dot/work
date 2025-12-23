var TeamComponent = require("TeamComponent");
var TeamRef = require("TeamRef");
var StatsComponent = require("StatsComponent");
var SkillSystem = require("SkillSystem");
var BuffSystem = require("BuffSystem");
var DeathSystem = require("DeathSystem");

var ActionSystem = cc.Class({
    name: "ActionSystem",

    properties: {},

    ctor(logger, rand) {
        this.logger = logger;
        this.rand = rand;
        this.deathSystem = new DeathSystem(logger);
        this.skillSystem = SkillSystem;
    },

    pickRandomTarget(entity) {
        const teamComps = entity.getComponent("TeamComponent");
        if (!teamComps) return null;

        const enemyTeam = (teamComps.team === "hero" ? TeamRef.monstersRef : TeamRef.herosRef);
        const alive = enemyTeam.filter(e => !e.getComponent("StatsComponent").isDead());
        if (alive.length === 0) return null;

        return alive[Math.floor(this.rand() * alive.length)];
    },

    updateBuffEffects(entity, dt) {
        BuffSystem.update(entity, dt, this.logger.log.bind(this.logger));

        const stats = entity.getComponent("StatsComponent");
        if (!stats) return false;

        if (this.deathSystem.checkAndHandleDeath(entity)) return false;

        if (BuffSystem.hasStatus(entity, "stun")) return false;

        return true;
    },

    updateSkillCooldowns(entity, dt) {
        SkillSystem.updateCooldowns(entity, dt);
    },

    /**
     * 执行单位行动（支持攻击动画）
     * @param {cc.Node} entity - 实体节点
     * @param {number} dt - 时间增量
     * @param {Function} callback - 完成回调（用于动画完成后继续逻辑）
     */
    performAction(entity, dt, callback) {
        const stats = entity.getComponent("StatsComponent");
        if (!stats || stats.isDead()) {
            if (callback) callback();
            return;
        }

        const canAct = this.updateBuffEffects(entity, dt);
        if (!canAct) {
            if (callback) callback();
            return;
        }

        this.updateSkillCooldowns(entity, dt);

        const skill = SkillSystem.findAvailableSkill(entity);
        if (!skill) {
            if (callback) callback();
            return;
        }

        const target = this.pickRandomTarget(entity);
        if (!target) {
            if (callback) callback();
            return;
        }

        this.logger.log(`${entity.name} 执行行动`);

        // 检查是否有攻击动画组件
        const attackMover = entity.getComponent("AttackMover");

        if (attackMover && !attackMover.isAttacking) {
            // 有动画组件：先播放动画，动画完成后执行伤害
            attackMover.attackTarget(target, () => {
                // 动画完成后执行技能效果
                SkillSystem.useSkill(entity, target, skill, this.logger.log.bind(this.logger), this.rand);
                this.deathSystem.checkAndHandleDeath(target);
                if (callback) callback();
            });
        } else {
            // 没有动画组件：直接执行技能
            SkillSystem.useSkill(entity, target, skill, this.logger.log.bind(this.logger), this.rand);
            this.deathSystem.checkAndHandleDeath(target);
            if (callback) callback();
        }
    }
});

module.exports = ActionSystem;