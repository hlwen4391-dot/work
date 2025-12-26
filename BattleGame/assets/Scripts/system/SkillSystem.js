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
        // 播放技能特效
        this._playSkillEffect(entity, target, skill);

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
    },

    /**
     * 播放技能特效
     * @param {cc.Node} entity - 施法者
     * @param {cc.Node} target - 目标
     * @param {Object} skill - 技能对象
     */
    _playSkillEffect(entity, target, skill) {
        // 获取技能名称（SkillComponent中使用的是skillName，不是name）
        const skillName = skill.skillName || skill.name;

        cc.log(`[SkillSystem] ===== 开始播放技能特效 =====`);
        cc.log(`[SkillSystem] 技能: ${skillName || 'null'}, 技能ID: ${skill.id}, 施法者: ${entity ? entity.name : 'null'}, 目标: ${target ? target.name : 'null'}`);
        cc.log(`[SkillSystem] 技能对象属性: skillName=${skill.skillName}, name=${skill.name}, id=${skill.id}`);

        if (!entity || !target || !skill) {
            cc.warn("[SkillSystem] 无法播放技能特效：参数不完整");
            cc.warn(`[SkillSystem] entity: ${entity}, target: ${target}, skill: ${skill}`);
            return;
        }

        // 如果没有技能名称，尝试通过ID匹配
        if (!skillName && skill.id) {
            const skillIdToName = {
                1: "普通攻击",
                2: "盾击",
                3: "火球术",
                4: "狂暴",
                5: "战吼",
                6: "群体护盾"
            };
            const mappedName = skillIdToName[skill.id];
            if (mappedName) {
                cc.log(`[SkillSystem] 通过技能ID ${skill.id} 映射到技能名称: ${mappedName}`);
                skillName = mappedName;
            }
        }

        // 查找或创建特效播放器
        let effectPlayer = entity.getComponent("SkillEffectPlayer");
        cc.log(`[SkillSystem] 从实体获取SkillEffectPlayer: ${effectPlayer ? '成功' : '失败'}`);

        if (!effectPlayer) {
            // 如果实体上没有特效播放器，尝试从场景根节点查找全局的
            const scene = cc.director.getScene();
            if (scene) {
                cc.log(`[SkillSystem] 场景名称: ${scene.name}`);
                effectPlayer = scene.getComponentInChildren("SkillEffectPlayer");
                cc.log(`[SkillSystem] 从场景获取SkillEffectPlayer: ${effectPlayer ? '成功' : '失败'}`);

                // 如果还是没有，动态创建一个
                if (!effectPlayer) {
                    const effectNode = new cc.Node("SkillEffectPlayer");
                    effectPlayer = effectNode.addComponent("SkillEffectPlayer");
                    scene.addChild(effectNode);
                    cc.log("[SkillSystem] 动态创建了SkillEffectPlayer节点");
                }
            } else {
                cc.error("[SkillSystem] 无法获取场景对象");
            }
        }

        if (effectPlayer && effectPlayer.playSkillEffect) {
            cc.log(`[SkillSystem] 准备播放技能特效：${skillName}，施法者：${entity.name}，目标：${target.name}`);
            cc.log(`[SkillSystem] effectPlayer.fireballPrefab: ${effectPlayer.fireballPrefab ? '已绑定' : '未绑定'}`);
            effectPlayer.playSkillEffect(skillName, entity, target);
        } else {
            cc.error(`[SkillSystem] 无法找到SkillEffectPlayer组件或playSkillEffect方法，技能：${skillName}`);
            cc.error(`[SkillSystem] effectPlayer: ${effectPlayer}, playSkillEffect: ${effectPlayer ? effectPlayer.playSkillEffect : 'null'}`);
        }
    }
};

module.exports = SkillSystem;