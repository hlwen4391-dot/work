
class ActionSystem {

    constructor(logger, rand) {
        this.logger = logger;
        this.rand = rand;

    }
    //随机选择目标
    pickRandomTarget(actor, heros, monsters) {
        const enemyTeam = actor.team === "hero" ? monsters : heros;
        return enemyTeam[Math.floor(this.rand() * enemyTeam.length)];
    }


    updateSkill(actor, target, deltaTime) {
        for (const skill of actor.skills) {
            actor.skillTimers[skill.name] += deltaTime;

            if (actor.skillTimers[skill.name] >= skill.cooldown) {

                if (skill.name === "普通攻击" && actor.miss && this.rand() < actor.miss) {
                    this.logger.log(`${actor.name} 攻击 ${target.name} 失败！`);
                    actor.skillTimers[skill.name] = 0;//重置技能冷却时间
                    return true;
                }

                this.logger.log(`${actor.name} 释放技能【${skill.name}】`);
                skill.effect(actor, target, this.logger.log.bind(this.logger));
                actor.skillTimers[skill.name] = 0;
                return true;
            }
        }
        return false;
    }

    // updateAttack(actor, target, deltaTime) {
    //     actor.attackTimer += deltaTime;
    //     if (actor.attackTimer < actor.attackInterval) return false;
    //     actor.attackTimer = 0;


    //     //miss判定
    //     if (actor.miss && this.rand() < actor.miss) {
    //         this.logger.log(`[${actor.name} 攻击 ${target.name} 失败！`);

    //         return true;
    //     }

    //     //暴击判定
    //     const isCrit = this.rand() < actor.crit;
    //     let dmg = Math.max(actor.attack - target.defense, 1);
    //     if (isCrit) {
    //         dmg *= 2;
    //         this.logger.log(`${actor.name}暴击了！`);
    //     }

    //     //免伤判定
    //     dmg *= (1 - target.immune);

    //     //扣血
    //     target.hp -= dmg;
    //     this.logger.log(`[${actor.name} 对 ${target.name} 造成了 ${dmg} 点伤害，${target.name}剩余HP:${target.hp}`);
    //     return true;
    // }

    // updateStun(actor, deltaTime) {

    //     if (actor.stunTimer > 0) {
    //         actor.stunTimer -= deltaTime;
    //         if (actor.stunTimer <= 0) {
    //             actor.stunned = 0;
    //             this.logger.log(`${actor.name} 眩晕状态结束！`);
    //         }
    //     }
    //     return true;
    // }

    updateStun(actor, deltaTime) {
        if (actor.stunned > 0) {
            actor.stunTimer -= deltaTime;
            if (actor.stunTimer <= 0) {
                actor.stunned = 0;
                this.logger.log(`${actor.name} 眩晕状态结束！`);
            }
            return true;
        }
        return false;
    }
}

module.exports = ActionSystem;