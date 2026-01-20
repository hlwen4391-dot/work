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

        // 优先检查大招（AI自动释放：需要怒气值达到requireRage要求）
        // 查找所有需要怒气值的技能（大招）
        const ultimateSkills = skills.skills.filter(s => s.requireRage > 0);
        if (ultimateSkills.length > 0 && stats) {
            // AI自动释放条件：怒气值 >= requireRage（达到技能要求的怒气值即可释放）
            // 找到第一个满足怒气值要求的大招（大招不受冷却时间限制，怒气值满足即可释放）
            for (let ultimateSkill of ultimateSkills) {
                if (stats.rage >= ultimateSkill.requireRage) {
                    // 大招：只要怒气值满足要求，即使冷却时间未到也可以释放
                    cc.log(`[SkillSystem] AI自动释放大招: ${entity.name} 怒气值=${stats.rage}/${stats.maxRage}, 技能=${ultimateSkill.skillName}, requireRage=${ultimateSkill.requireRage}, 冷却时间=${skills.cooldowns[ultimateSkill.id]}/${ultimateSkill.cooldown}`);
                    return ultimateSkill;
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
        // 检查角色是否已死亡
        const stats = entity.getComponent("StatsComponent");
        if (stats && stats.isDead()) {
            log(`${entity.name} 已死亡，禁止释放大招`);
            return false;
        }

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
        log(`🎯 ${entity.name} 手动释放大招：${ultimateSkill.skillName}！`);

        // 显示大招UI（蒙版+顶部动画）
        this._showUltimateSkillUI(entity, ultimateSkill.skillName, () => {
            // UI显示完成后，消耗怒气值并释放技能
            // 注意：传递一个特殊标记"manual"作为recorder，表示这是手动释放，避免重复显示UI
            if (stats && ultimateSkill.requireRage > 0) {
                stats.consumeRage(ultimateSkill.requireRage);
            }
            // 直接调用_executeSkill，避免useSkill中的重复UI显示逻辑
            this._executeSkill(entity, target, ultimateSkill, log, rand, "manual", stats);
        });

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

            // 手动释放的大招：已经在useUltimateSkill中消耗了怒气值，直接执行
            if (recorder === "manual") {
                this._executeSkill(entity, target, skill, log, rand, recorder, stats);
                return;
            }

            // AI自动释放的大招：显示UI后消耗怒气值
            // recorder为null/undefined时表示AI自动释放（没有战斗记录器）
            // recorder为对象时也表示AI自动释放（有战斗记录器，但这是AI自动触发的）
            // 注意：需要传递callback参数，用于在技能执行完成后通知ActionSystem
            const actionCallback = entity._actionCallback || null; // 从entity获取callback（由ActionSystem设置）
            this._showUltimateSkillUI(entity, skill.skillName || skill.name, () => {
                // UI显示完成后，消耗怒气值并执行技能
                if (stats && skill.requireRage > 0) {
                    stats.consumeRage(skill.requireRage);
                }
                // 继续执行技能（传递recorder，可能是null或BattleRecorder对象）
                this._executeSkill(entity, target, skill, log, rand, recorder, stats);

                // 技能执行完成后，调用callback通知ActionSystem
                if (actionCallback) {
                    // 清除临时保存的callback
                    entity._actionCallback = null;
                    // 调用callback
                    actionCallback();
                }
            });
            return;
        }

        // 普通技能直接执行
        this._executeSkill(entity, target, skill, log, rand, recorder, stats);
    },

    /**
     * 执行技能效果（内部方法）
     * @private
     */
    _executeSkill(entity, target, skill, log, rand, recorder, stats) {
        // 记录技能释放（recorder必须是对象，不能是字符串）
        if (recorder && typeof recorder === 'object' && recorder.recordSkillUse) {
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

                case "heal":
                    // 治疗事件：evt.target 是目标单位，evt.value 是治疗量
                    const healTarget = evt.target || target;
                    CombatSystem.heal(entity, healTarget, evt.value, log, recorder);
                    break;

                case "applyBuff":
                    // Buff事件：evt.target 是目标单位（如果指定），否则使用默认target
                    const buffTarget = evt.target || target;
                    // 传递施法者（entity），用于在施法者死亡时清除Buff
                    BuffSystem.addBuff(buffTarget, BuffFactory.create(evt.buff), log, recorder, entity);
                    break;

                case "applyBuffSelf":
                    // 传递施法者（entity），用于在施法者死亡时清除Buff
                    BuffSystem.addBuff(entity, BuffFactory.create(evt.buff), log, recorder, entity);
                    break;

                case "removeNegativeBuffs":
                    // 移除负面Buff事件：evt.target 是目标单位，evt.buffNames 是要移除的Buff名称列表
                    const cleanseTarget = evt.target || target;
                    const buffNames = evt.buffNames || [];
                    BuffSystem.removeBuffs(cleanseTarget, buffNames, log, recorder);
                    break;

                default:
                    log(`未知事件类型: ${evt.type}`);
            }
        }

        entity.getComponent("SkillComponent").cooldowns[skill.id] = 0;
    },

    /**
     * 显示大招UI（蒙版+顶部动画）
     * @private
     * @param {cc.Node} entity - 施法者节点
     * @param {string} skillName - 技能名称
     * @param {Function} onComplete - 完成回调
     */
    _showUltimateSkillUI(entity, skillName, onComplete) {
        // 查找场景中的UltimateSkillUI组件
        const scene = cc.director.getScene();
        if (!scene) {
            cc.warn("[SkillSystem] 无法找到场景，跳过大招UI显示");
            if (onComplete) onComplete();
            return;
        }

        const canvas = scene.getChildByName("Canvas");
        if (!canvas) {
            cc.warn("[SkillSystem] 无法找到Canvas节点，跳过大招UI显示");
            if (onComplete) onComplete();
            return;
        }

        // 查找UltimateSkillUI组件（递归查找，更可靠）
        let ultimateSkillUI = null;

        // 方法1: 在Canvas节点本身查找组件
        ultimateSkillUI = canvas.getComponent("UltimateSkillUI");

        // 方法2: 在Canvas的子节点中查找名为"UltimateSkillUI"的节点
        if (!ultimateSkillUI) {
            const uiNode = canvas.getChildByName("UltimateSkillUI");
            if (uiNode) {
                ultimateSkillUI = uiNode.getComponent("UltimateSkillUI");
            }
        }

        // 方法3: 使用getComponentInChildren递归查找（最可靠）
        if (!ultimateSkillUI) {
            ultimateSkillUI = canvas.getComponentInChildren("UltimateSkillUI");
        }

        // 方法4: 遍历Canvas的所有子节点查找
        if (!ultimateSkillUI) {
            const findComponent = (node, componentName) => {
                const comp = node.getComponent(componentName);
                if (comp) return comp;
                for (let child of node.children) {
                    const result = findComponent(child, componentName);
                    if (result) return result;
                }
                return null;
            };
            ultimateSkillUI = findComponent(canvas, "UltimateSkillUI");
        }

        if (!ultimateSkillUI) {
            cc.warn("[SkillSystem] 未找到UltimateSkillUI组件，跳过大招UI显示");
            cc.warn("[SkillSystem] 请在Canvas或其子节点上添加UltimateSkillUI组件");
            cc.warn("[SkillSystem] 建议：在Canvas下创建名为'UltimateSkillUI'的子节点，并添加UltimateSkillUI组件");
            if (onComplete) onComplete();
            return;
        }

        cc.log(`[SkillSystem] ✓ 找到UltimateSkillUI组件，节点: ${ultimateSkillUI.node.name}`);

        // 从UnitDataConfig获取头像资源
        const UnitDataConfig = require("UnitDataConfig");
        let avatarSpriteFrame = null;

        // 查找对应的单位配置
        const allUnits = [...(UnitDataConfig.heros || []), ...(UnitDataConfig.monsters || [])];
        const unitData = allUnits.find(u => u.name === entity.name);
        if (unitData && unitData.icon) {
            avatarSpriteFrame = unitData.icon;
        }

        // 显示大招UI
        ultimateSkillUI.showUltimateSkill(entity, skillName, avatarSpriteFrame, onComplete);
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
                7: "兽化狂暴",
                9: "治疗术",
                10: "净化术"
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
                    // Scene对象不能直接addChild，需要添加到Canvas节点
                    const canvas = scene.getChildByName("Canvas");
                    if (canvas) {
                        canvas.addChild(effectNode);
                        // cc.log("[SkillSystem] 动态创建了SkillEffectPlayer节点，添加到Canvas");
                    } else {
                        // 如果没有Canvas，尝试添加到场景的第一个子节点
                        if (scene.children.length > 0) {
                            scene.children[0].addChild(effectNode);
                            // cc.log("[SkillSystem] 动态创建了SkillEffectPlayer节点，添加到场景第一个子节点");
                        } else {
                            cc.error("[SkillSystem] 无法找到Canvas节点或场景子节点，无法创建SkillEffectPlayer");
                        }
                    }
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