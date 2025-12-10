const StatsComponent = require("./StatsComponent");
const SkillComponent = require("./SkillComponent");
const CombatSystem = require("./CombatSystem");
const BuffSystem = require("./BuffSystem");

class SkillSystem {
    static updateCooldowns(entity, deltaTime) {
        const skills = entity.get(SkillComponent);
        if (!skills) return;

        for (const s of skills.skills) {
            skills.cooldowns[s.id] += deltaTime;
        }
    }

    static findAvailableSkill(entity) {
        const skills = entity.get(SkillComponent);
        if (!skills) return null;

        const normalId = 1;
        const nonNormal = skills.skills.filter(s => s.id !== normalId);
        const normal = skills.skills.find(s => s.id === normalId);

        for (const s of nonNormal) {
            if (skills.cooldowns[s.id] >= s.cooldown) {
                return s;
            }
        }
        //再检查普功
        if (normal && skills.cooldowns[normal.id] >= normal.cooldown) {
            return normal;
        }
        return null;
    }

    //执行技能
    static useSkill(entity, target, skill, log, rand) {
        const effects = skill.effect(entity, target, log, rand);

        for (const evt of events) {
            switch (evt.type) {
                case "damage":
                    CombatSystem.damage(entity, target, evt.value, log);
                    break;
                case "damageTrue":
                    CombatSystem.damageTrue(entity, target, evt.value, log);
                    break;
                case "applyBuff":
                    BuffSystem.addbuff(target, evt.buff, log);
                    break;
                case "applyBuffTarget":
                    BuffSystem.addbuff(evt.target, evt.buff, log);
                    break;

                default:
                    log(`未知事件类型: ${evt.type}`);
            }
        }

        const skills = caster.get(SkillComponent);
        skills.cooldowns[skill.id] = 0;

        return effects;
    }
}

module.exports = SkillSystem;
