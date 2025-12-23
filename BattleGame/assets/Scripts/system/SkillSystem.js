var StatsComponent = require("StatsComponent");
var SkillComponent = require("SkillComponent");
var BuffSystem = require("BuffSystem");
var BuffFactory = require("BuffFactory");
var CombatSystem = require("CombatSystem");

var SkillSystem = {

    updateCooldowns(entity, dt) {
        const skills = entity.getComponent("SkillComponent");
        if (!skills) return;

        for (let s of skills.skills) {
            skills.cooldowns[s.id] += dt;
        }
    },

    findAvailableSkill(entity) {
        const skills = entity.getComponent("SkillComponent");
        if (!skills) return null;

        const normalId = 1;
        const nonNormal = skills.skills.filter(s => s.id !== normalId);
        const normal = skills.skills.find(s => s.id === normalId);

        for (let s of nonNormal)
            if (skills.cooldowns[s.id] >= s.cooldown)
                return s;

        if (normal && skills.cooldowns[normal.id] >= normal.cooldown)
            return normal;

        return null;
    },

    useSkill(entity, target, skill, log, rand) {
        const events = skill.effect(entity, target, log, rand);

        for (let evt of events) {
            switch (evt.type) {
                case "damage":
                    CombatSystem.damage(entity, target, evt.value, log);
                    break;

                case "damageTrue":
                    CombatSystem.damageTrue(entity, target, evt.value, log);
                    break;

                case "applyBuff":
                    BuffSystem.addBuff(target, BuffFactory.create(evt.buff), log);
                    break;

                case "applyBuffSelf":
                    BuffSystem.addBuff(entity, BuffFactory.create(evt.buff), log);
                    break;

                default:
                    log(`未知事件类型: ${evt.type}`);
            }
        }

        entity.getComponent("SkillComponent").cooldowns[skill.id] = 0;
    }
};

module.exports = SkillSystem;