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