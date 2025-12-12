// const { SkillEnum } = require("./config");
// class ActionSystem {

//     constructor(logger, rand) {
//         this.logger = logger;
//         this.rand = rand;

//     }
//     //随机选择目标
//     pickRandomTarget(actor, heros, monsters) {
//         const enemyTeam = actor.team === "hero" ? monsters : heros;
//         if (enemyTeam.length === 0) return null;//如果敌方阵营为空，则返回null
//         return enemyTeam[Math.floor(this.rand() * enemyTeam.length)];//随机选择一个敌方单位
//     }

//     //更新技能
//     updateSkill(actor, target, deltaTime) {
//         for (const skill of actor.skills) {
//             actor.skillTimers[skill.name] += deltaTime;
//             // console.log(actor.skillTimers[skill.name]);
//         }
//         const normol = SkillEnum.normalAttack;
//         const nonNormalSkill = actor.skills.filter(s => s.id !== normol);//非普通攻击技能
//         const normalSkill = actor.skills.find(s => s.id === normol);//普通攻击技能

//         for (const s of nonNormalSkill) {
//             if (actor.skillTimers[s.name] >= s.cooldown) {
//                 this.logger.log(`${actor.name} 释放技能【${s.name}】`);
//                 s.effect(actor, target, this.logger.log.bind(this.logger), this.rand);
//                 actor.skillTimers[s.name] = 0;//重置技能冷却时间
//                 return true;
//             }
//         }

//         if (normalSkill && actor.skillTimers[normalSkill.name] >= normalSkill.cooldown) {
//             // console.log("normalSkill", actor.skillTimers[normalSkill.name], normalSkill.cooldown);
//             if (actor.miss && this.rand() < actor.miss) {
//                 this.logger.log(`${actor.name} 攻击 ${target.name} 失败！`);
//                 actor.skillTimers[normalSkill.name] = 0;
//                 return true;
//             }
//             this.logger.log(`${actor.name} 释放技能【${normalSkill.name}】`);
//             normalSkill.effect(actor, target, this.logger.log.bind(this.logger), this.rand);
//             actor.skillTimers[normalSkill.name] = 0;
//             return true;
//         }
//         return false;
//     }

//     // updateAttack(actor, target, deltaTime) {
//     //     actor.attackTimer += deltaTime;
//     //     if (actor.attackTimer < actor.attackInterval) return false;
//     //     actor.attackTimer = 0;


//     //     //miss判定
//     //     if (actor.miss && this.rand() < actor.miss) {
//     //         this.logger.log(`[${actor.name} 攻击 ${target.name} 失败！`);

//     //         return true;
//     //     }

//     //     //暴击判定
//     //     const isCrit = this.rand() < actor.crit;
//     //     let dmg = Math.max(actor.attack - target.defense, 1);
//     //     if (isCrit) {
//     //         dmg *= 2;
//     //         this.logger.log(`${actor.name}暴击了！`);
//     //     }

//     //     //免伤判定
//     //     dmg *= (1 - target.immune);

//     //     //扣血
//     //     target.hp -= dmg;
//     //     this.logger.log(`[${actor.name} 对 ${target.name} 造成了 ${dmg} 点伤害，${target.name}剩余HP:${target.hp}`);
//     //     return true;
//     // }

//     // updateStun(actor, deltaTime) {

//     //     if (actor.stunTimer > 0) {
//     //         actor.stunTimer -= deltaTime;
//     //         if (actor.stunTimer <= 0) {
//     //             actor.stunned = 0;
//     //             this.logger.log(`${actor.name} 眩晕状态结束！`);
//     //         }
//     //     }
//     //     return true;
//     // }






//     //更新状态效果(跳过该单位回合)
//     updateStatusEffects(actor, deltaTime) {
//         actor.buffManager.updateBuffs(deltaTime, this.logger.log.bind(this.logger));//

//         if (actor.buffManager.hasStatus("stun")) {
//             return true;
//         }
//         return false;
//     }
// }

// module.exports = ActionSystem;


const TeamComponent = require("./TeamComponent");
const TeamRef = require("./TeamRef");
const StatsComponent = require("./StatsComponent");
const SkillSystem = require("./SkillSystem");
const BuffSystem = require("./BuffSystem");
const SkillComponent = require("./SkillComponent");
const DeathSystem = require("./DeathSystem");

class ActionSystem {
    constructor(logger, rand) {
        this.logger = logger;
        this.rand = rand;
        this.deathSystem = new DeathSystem(logger);
        this.skillSystem = new SkillSystem(logger, rand);//创建技能系统
    }

    //随机选择目标
    pickRandomTarget(entity) {
        const teamComps = entity.get(TeamComponent);//获取单位阵营
        if (!teamComps) return null;//如果单位阵营为空，则返回null

        const enemyTeam = teamComps.team === "hero" ? TeamRef.monstersRef : TeamRef.herosRef;//获取敌方阵营
        const aliveEnemies = enemyTeam.filter(e => !e.get(StatsComponent).isDead());//过滤掉死亡的敌人
        if (aliveEnemies.length === 0) return null;//如果敌方阵营为空，则返回null
        return aliveEnemies[Math.floor(this.rand() * aliveEnemies.length)];//随机选择一个敌方单位
    }
    //更新buff效果
    updateBuffEffects(entity, dataTime) {
        BuffSystem.update(entity, dataTime, this.logger.log.bind(this.logger));//更新buff效果
        const stats = entity.get(StatsComponent);//获取单位状态
        if (!stats) return false;
        if (this.deathSystem.checkAndHandleDeath(entity)) {
            return false;//如果单位死亡，则返回false，不能行动
        }
        if (BuffSystem.hasStatus(entity, "stun")) {
            return false;
        }
        return true;//如果单位没有眩晕状态，则返回true，可以行动
    }
    //更新技能冷却时间
    updateSkillCooldowns(entity, dataTime) {
        SkillSystem.updateCooldowns(entity, dataTime);
    }

    //执行行动状态：更新、选技能、找目标、释放技能
    performAction(entity, dataTime) {
        const stats = entity.get(StatsComponent);//获取单位状态
        if (!stats || stats.isDead()) return;
        //更新buff效果
        const canAct = this.updateBuffEffects(entity, dataTime);//更新buff效果
        if (!canAct) return;
        //更新技能冷却时间
        this.updateSkillCooldowns(entity, dataTime);

        //找技能
        const skill = SkillSystem.findAvailableSkill(entity);
        if (!skill) return;

        //找目标
        const target = this.pickRandomTarget(entity);//随机选择目标
        if (!target) return;

        //日志
        this.logger.log(`${entity.name}执行行动`);

        //执行技能
        SkillSystem.useSkill(entity, target, skill, this.logger.log.bind(this.logger), this.rand);

        const targetStats = target.get(StatsComponent);//获取目标状态

        this.deathSystem.checkAndHandleDeath(target);
    }
}

module.exports = ActionSystem;