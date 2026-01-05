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
        const stats = entity.getComponent("StatsComponent");
        if (!skills) return null;

        // 优先检查大招（AI自动释放：需要怒气值超过maxRage的110%）
        // 查找所有需要怒气值的技能（大招）
        const ultimateSkills = skills.skills.filter(s => s.requireRage > 0);
        if (ultimateSkills.length > 0 && stats) {
            // AI自动释放条件：怒气值 >= maxRage * 1.1（超过最大值10%）
            const autoReleaseThreshold = stats.maxRage * 1.1;
            if (stats.rage >= autoReleaseThreshold) {
                // 找到第一个满足怒气值要求的大招
                for (let ultimateSkill of ultimateSkills) {
                    if (stats.rage >= ultimateSkill.requireRage) {
                        // 检查冷却时间（如果有）
                        if (skills.cooldowns[ultimateSkill.id] >= ultimateSkill.cooldown) {
                            return ultimateSkill;
                        }
                    }
                }
            }
        }

        const normalId = 1;
        // 排除普通攻击和所有大招技能
        const nonNormal = skills.skills.filter(s => s.id !== normalId && (!s.requireRage || s.requireRage === 0));
        const normal = skills.skills.find(s => s.id === normalId);

        for (let s of nonNormal)
            if (skills.cooldowns[s.id] >= s.cooldown)
                return s;

        if (normal && skills.cooldowns[normal.id] >= normal.cooldown)
            return normal;

        return null;
    },

    /**
     * 检查是否可以释放大招（手动释放：怒气值满即可）
     * @param {cc.Node} entity - 实体节点
     * @returns {boolean}
     */
    canUseUltimateSkill(entity) {
        const skills = entity.getComponent("SkillComponent");
        const stats = entity.getComponent("StatsComponent");
        if (!skills || !stats) {
            // cc.log(`[SkillSystem] canUseUltimateSkill: 缺少组件 - skills=${!!skills}, stats=${!!stats}`);
            return false;
        }

        // 查找所有需要怒气值的技能（大招）
        const ultimateSkills = skills.skills.filter(s => s.requireRage > 0);
        // cc.log(`[SkillSystem] ${entity.name} 检查大招: 怒气值=${stats.rage}/${stats.maxRage}, 大招数量=${ultimateSkills.length}`);

        if (ultimateSkills.length === 0) {
            // cc.log(`[SkillSystem] ${entity.name} 没有大招技能（requireRage > 0）`);
            // 打印所有技能信息用于调试
            // skills.skills.forEach(s => {
            //     cc.log(`[SkillSystem] 技能: ${s.skillName}, id=${s.id}, requireRage=${s.requireRage}`);
            // });
            return false;
        }

        // 手动释放：怒气值满（>= maxRage）即可
        // 检查是否有至少一个大招满足怒气值要求
        const canUse = ultimateSkills.some(s => {
            const canUseThis = stats.rage >= stats.maxRage && stats.rage >= s.requireRage;
            // cc.log(`[SkillSystem] 检查大招 ${s.skillName}: requireRage=${s.requireRage}, 当前怒气=${stats.rage}, maxRage=${stats.maxRage}, 可用=${canUseThis}`);
            return canUseThis;
        });

        // cc.log(`[SkillSystem] ${entity.name} 可以释放大招: ${canUse}`);
        return canUse;
    },

    /**
     * 获取角色的大招技能
     * @param {cc.Node} entity - 实体节点
     * @returns {Object|null} 大招技能对象，如果没有则返回null
     */
    getUltimateSkill(entity) {
        const skills = entity.getComponent("SkillComponent");
        if (!skills) {
            // cc.log(`[SkillSystem] getUltimateSkill: ${entity.name} 没有SkillComponent`);
            return null;
        }

        // 返回第一个需要怒气值的技能（大招）
        const ultimateSkill = skills.skills.find(s => s.requireRage > 0) || null;
        if (ultimateSkill) {
            // cc.log(`[SkillSystem] getUltimateSkill: ${entity.name} 找到大招 ${ultimateSkill.skillName}, requireRage=${ultimateSkill.requireRage}`);
        } else {
            // cc.log(`[SkillSystem] getUltimateSkill: ${entity.name} 没有找到大招技能`);
            // 打印所有技能信息用于调试
            // skills.skills.forEach(s => {
            //     cc.log(`[SkillSystem] 技能: ${s.skillName}, id=${s.id}, requireRage=${s.requireRage}`);
            // });
        }
        return ultimateSkill;
    },

    /**
     * 手动释放大招（点击角色时调用）
     * @param {cc.Node} entity - 实体节点
     * @param {cc.Node} target - 目标
     * @param {Function} log - 日志函数
     * @param {Function} rand - 随机数函数
     * @returns {boolean} 是否成功释放
     */
    useUltimateSkill(entity, target, log, rand) {
        if (!this.canUseUltimateSkill(entity)) {
            log(`${entity.name} 怒气值不足，无法释放大招`);
            return false;
        }

        const ultimateSkill = this.getUltimateSkill(entity);

        if (!ultimateSkill) {
            log(`${entity.name} 没有大招技能`);
            return false;
        }

        if (!target) {
            // 如果没有指定目标，自动选择目标
            const TeamComponent = require("TeamComponent");
            const TeamRef = require("TeamRef");
            const teamComp = entity.getComponent("TeamComponent");
            if (teamComp) {
                const enemies = teamComp.team === "hero"
                    ? TeamRef.monstersRef
                    : TeamRef.herosRef;
                target = enemies.find(e => {
                    const s = e.getComponent("StatsComponent");
                    return s && !s.isDead();
                });
            }
        }

        if (!target) {
            log(`${entity.name} 没有可攻击的目标`);
            return false;
        }

        const stats = entity.getComponent("StatsComponent");
        log(`🎯 ${entity.name} 手动释放大招：${ultimateSkill.skillName}！`);

        // 消耗怒气值（在useSkill中也会检查，但这里提前消耗）
        if (stats && ultimateSkill.requireRage > 0) {
            stats.consumeRage(ultimateSkill.requireRage);
        }

        this.useSkill(entity, target, ultimateSkill, log, rand);
        return true;
    },

    useSkill(entity, target, skill, log, rand, recorder) {
        const stats = entity.getComponent("StatsComponent");

        // 检查是否需要怒气值（大招）
        if (skill.requireRage && skill.requireRage > 0) {
            if (!stats || stats.rage < skill.requireRage) {
                log(`${entity.name} 怒气值不足，无法释放 ${skill.skillName}`);
                return;
            }
            // 消耗怒气值
            stats.consumeRage(skill.requireRage);
        }

        // 记录技能释放
        if (recorder) {
            recorder.recordSkillUse(entity, target, skill);
        }

        // 播放技能特效
        this._playSkillEffect(entity, target, skill);

        const events = skill.effect(entity, target, log, rand);

        for (let evt of events) {
            switch (evt.type) {
                case "damage":
                    CombatSystem.damage(entity, target, evt.value, log, recorder, rand);
                    break;

                case "damageTrue":
                    CombatSystem.damageTrue(entity, target, evt.value, log, recorder, rand);
                    break;

                case "applyBuff":
                    BuffSystem.addBuff(target, BuffFactory.create(evt.buff), log, recorder);
                    break;

                case "applyBuffSelf":
                    BuffSystem.addBuff(entity, BuffFactory.create(evt.buff), log, recorder);
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
        let skillName = skill.skillName || skill.name;

        // cc.log(`[SkillSystem] ===== 开始播放技能特效 =====`);
        // cc.log(`[SkillSystem] 技能: ${skillName || 'null'}, 技能ID: ${skill.id}, 施法者: ${entity ? entity.name : 'null'}, 目标: ${target ? target.name : 'null'}`);
        // cc.log(`[SkillSystem] 技能对象属性: skillName=${skill.skillName}, name=${skill.name}, id=${skill.id}`);

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
                6: "群体护盾",
                7: "兽化狂暴"
            };
            const mappedName = skillIdToName[skill.id];
            if (mappedName) {
                // cc.log(`[SkillSystem] 通过技能ID ${skill.id} 映射到技能名称: ${mappedName}`);
                skillName = mappedName;
            }
        }

        // 查找或创建特效播放器
        let effectPlayer = entity.getComponent("SkillEffectPlayer");
        // cc.log(`[SkillSystem] 从实体获取SkillEffectPlayer: ${effectPlayer ? '成功' : '失败'}`);

        if (!effectPlayer) {
            // 如果实体上没有特效播放器，尝试从场景根节点查找全局的
            const scene = cc.director.getScene();
            if (scene) {
                // cc.log(`[SkillSystem] 场景名称: ${scene.name}`);
                effectPlayer = scene.getComponentInChildren("SkillEffectPlayer");
                // cc.log(`[SkillSystem] 从场景获取SkillEffectPlayer: ${effectPlayer ? '成功' : '失败'}`);

                // 如果还是没有，动态创建一个
                if (!effectPlayer) {
                    const effectNode = new cc.Node("SkillEffectPlayer");
                    effectPlayer = effectNode.addComponent("SkillEffectPlayer");
                    scene.addChild(effectNode);
                    // cc.log("[SkillSystem] 动态创建了SkillEffectPlayer节点");
                }
            } else {
                cc.error("[SkillSystem] 无法获取场景对象");
            }
        }

        if (effectPlayer && effectPlayer.playSkillEffect) {
            // cc.log(`[SkillSystem] 准备播放技能特效：${skillName}，施法者：${entity.name}，目标：${target.name}`);
            // cc.log(`[SkillSystem] effectPlayer.fireballPrefab: ${effectPlayer.fireballPrefab ? '已绑定' : '未绑定'}`);
            effectPlayer.playSkillEffect(skillName, entity, target);
        } else {
            cc.error(`[SkillSystem] 无法找到SkillEffectPlayer组件或playSkillEffect方法，技能：${skillName}`);
            cc.error(`[SkillSystem] effectPlayer: ${effectPlayer}, playSkillEffect: ${effectPlayer ? effectPlayer.playSkillEffect : 'null'}`);
        }
    }
};

module.exports = SkillSystem;