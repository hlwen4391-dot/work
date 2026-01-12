var TeamRef = require("TeamRef");
var StatsComponent = require("StatsComponent");

// 动画状态常量
const AnimationState = {
    ATTACK: "atk",      // 攻击动画
    BY_ATK: "byatk",    // 受击动画
    DIE: "die",         // 死亡动画
    SHI_HUA: "shihua",  // 石化动画
    WAIT: "wait",       // 待机动画
};

/**
 * 死亡处理系统（普通模块）
 */
var DeathSystem = cc.Class({
    name: "DeathSystem",

    properties: {},

    ctor(logger, recorder) {
        this.logger = logger;
        this.recorder = recorder; // 战斗记录器（可选）
    },

    /**
     * 检查目标是否死亡，若死亡执行处理逻辑。
     * @param {cc.Node} entity - 实体节点
     * @param {Object} recorder - 战斗记录器（可选）
     */
    checkAndHandleDeath(entity, recorder) {
        // 如果传入了recorder，使用传入的；否则使用实例的
        const recordRecorder = recorder || this.recorder;

        const stats = entity.getComponent("StatsComponent");
        if (!stats) return false;

        if (stats.hp > 0) return false;

        // 已经死了
        this.logger.log(`💀 ${entity.name} 已死亡`);

        // 记录死亡事件
        if (recordRecorder) {
            recordRecorder.recordDeath(entity);
        }

        // 清理所有Buff和技能特效
        this._cleanupOnDeath(entity);

        // 播放死亡动画
        this._playDeathAnimation(entity);

        // 从队伍列表中移除
        const team = entity.getComponent("TeamComponent");
        if (team) {
            if (team.team === "hero") {
                TeamRef.herosRef = TeamRef.herosRef.filter(e => e !== entity);
            } else {
                TeamRef.monstersRef = TeamRef.monstersRef.filter(e => e !== entity);
            }
        }

        return true;
    },

    /**
     * 清理死亡时的Buff和技能特效
     * @private
     */
    _cleanupOnDeath(entity) {
        if (!entity || !entity.isValid) return;

        const BuffSystem = require("BuffSystem");
        const BuffComponent = require("BuffComponent");
        const TeamRef = require("TeamRef");
        const stats = entity.getComponent("StatsComponent");

        // 清除所有Buff
        const buffs = entity.getComponents(BuffComponent);
        if (buffs && buffs.length > 0) {
            for (let buff of buffs) {
                // 调用Buff的onExpire回调（如果存在）
                if (buff.onExpire) {
                    buff.onExpire(entity, this.logger.log.bind(this.logger));
                }

                // 恢复属性修改（如果有）
                if (stats && buff.modifiers) {
                    for (let key in buff.modifiers) {
                        if (stats[key] !== undefined) {
                            stats[key] -= buff.modifiers[key];
                        }
                    }
                    if (buff.modifiers.speed !== undefined) {
                        stats.updateAttackInterval();
                    }
                }

                // 移除Buff组件
                entity.removeComponent(buff);
            }
            this.logger.log(`🧹 ${entity.name} 死亡，已清除所有Buff`);
        }

        // 清除所有由这个单位释放的Buff（作用在其他单位身上的）
        // 遍历所有单位，找到caster等于死亡单位的Buff并移除
        const allUnits = [...TeamRef.herosRef, ...TeamRef.monstersRef];
        let removedCount = 0;
        for (let unit of allUnits) {
            if (!unit || !unit.isValid || unit === entity) continue;

            const unitBuffs = unit.getComponents(BuffComponent);
            if (unitBuffs && unitBuffs.length > 0) {
                for (let buff of unitBuffs) {
                    // 如果这个Buff的施法者是死亡的单位，移除它
                    if (buff.caster === entity) {
                        // 调用Buff的onExpire回调
                        if (buff.onExpire) {
                            buff.onExpire(unit, this.logger.log.bind(this.logger));
                        }

                        // 恢复属性修改
                        const unitStats = unit.getComponent("StatsComponent");
                        if (unitStats && buff.modifiers) {
                            for (let key in buff.modifiers) {
                                if (unitStats[key] !== undefined) {
                                    unitStats[key] -= buff.modifiers[key];
                                }
                            }
                            if (buff.modifiers.speed !== undefined) {
                                unitStats.updateAttackInterval();
                            }
                        }

                        // 如果是护盾Buff，更新血条显示
                        if (buff.buffName === "护盾" && unitStats) {
                            unitStats.updateHealthBar();
                        }

                        // 移除Buff组件
                        unit.removeComponent(buff);
                        removedCount++;
                        this.logger.log(`🧹 ${entity.name} 死亡，已清除 ${unit.name} 身上的 ${buff.buffName} Buff（由 ${entity.name} 释放）`);
                    }
                }
            }
        }
        if (removedCount > 0) {
            this.logger.log(`🧹 ${entity.name} 死亡，已清除 ${removedCount} 个由他释放的Buff（作用在其他单位身上）`);
        }

        // 停止技能特效（兽化狂暴、战吼等）
        const scene = cc.director.getScene();
        if (scene) {
            const skillEffectPlayer = scene.getComponentInChildren("SkillEffectPlayer");
            if (skillEffectPlayer) {
                // 停止兽化狂暴特效
                if (skillEffectPlayer.stopBeastRageEffect) {
                    skillEffectPlayer.stopBeastRageEffect(entity);
                }
                // 停止战吼持续波纹
                if (skillEffectPlayer._stopWarCryContinuousWaves) {
                    skillEffectPlayer._stopWarCryContinuousWaves(entity);
                }
            }
        }

        // 清理节点上的所有粒子特效子节点（比如治疗术的粒子特效）
        if (entity.children) {
            const particlesToRemove = [];
            entity.children.forEach(child => {
                // 检查是否是粒子特效节点（通常名称包含"Particle"、"Effect"等）
                if (child.name.includes("Particle") ||
                    child.name.includes("Effect") ||
                    child.name.includes("Heal") ||
                    child.name.includes("Rage") ||
                    child.name.includes("WarCry")) {
                    particlesToRemove.push(child);
                }
            });
            particlesToRemove.forEach(particle => {
                // 停止粒子系统
                const particleSystem = particle.getComponent(cc.ParticleSystem);
                if (particleSystem) {
                    particleSystem.stopSystem();
                }
                // 销毁节点
                if (particle && particle.isValid) {
                    particle.destroy();
                }
            });
            if (particlesToRemove.length > 0) {
                this.logger.log(`🧹 ${entity.name} 死亡，已清除 ${particlesToRemove.length} 个技能特效`);
            }
        }
    },

    /**
     * 播放死亡动画
     * @private
     */
    _playDeathAnimation(entity) {
        const skeleton = entity.getComponent(sp.Skeleton);
        if (skeleton) {
            // 清除之前的监听器
            skeleton.setCompleteListener(null);
            // 播放死亡动画（不循环）
            skeleton.setAnimation(0, AnimationState.DIE, false);
            cc.log(`[DeathSystem] ${entity.name} 播放死亡动画`);
        } else {
            cc.warn(`[DeathSystem] ${entity.name} 没有 Spine 组件，无法播放死亡动画`);
        }
    }
});

module.exports = DeathSystem;