const StatsComponent = require("./StatsComponent");
const SkillComponent = require("./SkillComponent");

const BuffSystem = require("./BuffSystem");
const BuffFactory = require("./BuffFactory");
const CombatSystem = require("./CombatSystem");


class SkillSystem {
    //更新技能冷却时间
    static updateCooldowns(entity, deltaTime) {
        const skills = entity.get(SkillComponent);
        if (!skills) return;

        for (const s of skills.skills) {
            skills.cooldowns[s.id] += deltaTime;
        }
    }

    //找到可用的技能
    static findAvailableSkill(entity) {
        const skills = entity.get(SkillComponent);//获取单位技能
        if (!skills) return null;//如果单位技能为空，则返回null

        const normalId = 1;//普通攻击技能ID
        const nonNormal = skills.skills.filter(s => s.id !== normalId);//非普通攻击技能
        const normal = skills.skills.find(s => s.id === normalId);//普通攻击技能

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
        const events = skill.effect(entity, target, log, rand);
        //执行技能效果
        for (const evt of events) {
            switch (evt.type) {
                case "damage":
                    CombatSystem.damage(entity, target, evt.value, log);//造成伤害
                    break;
                case "damageTrue":
                    CombatSystem.damageTrue(entity, target, evt.value, log);//造成真实伤害
                    break;
                case "applyBuff": {
                    const buffComp = BuffFactory.create(evt.buff);//创建buff组件
                    if (buffComp) {
                        BuffSystem.addBuff(target, buffComp, log);//添加buff
                    }
                    break;
                }
                case "applyBuffTarget": {
                    const buffComp = BuffFactory.create(evt.buff);//创建buff组件
                    if (buffComp) {
                        BuffSystem.addBuff(evt.target, buffComp, log);//添加buff
                    }
                    break;
                }
                default:
                    log(`未知事件类型: ${evt.type}`);
            }
        }

        const skills = entity.get(SkillComponent);//获取单位技能
        skills.cooldowns[skill.id] = 0;//重置技能冷却时间

        return events;
    }
}

module.exports = SkillSystem;
