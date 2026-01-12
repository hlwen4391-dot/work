var BuffComponent = require("BuffComponent");
var BuffFactory = require("BuffFactory");
var StatsComponent = require("StatsComponent");

var BuffSystem = {

    addBuff(entity, buffComponent, logger, recorder, caster) {
        const existing = entity.getComponents(BuffComponent)
            .find(b => b.buffName === buffComponent.buffName);

        if (existing && !buffComponent.stackable) {
            existing.elapsed = 0;
            existing.duration = buffComponent.duration;
            // 如果是护盾Buff，重置护盾值
            if (buffComponent.shieldValue !== undefined && buffComponent.shieldValue !== null) {
                existing.shieldValue = buffComponent.shieldValue;
                cc.log(`[BuffSystem] 更新现有护盾Buff: shieldValue=${existing.shieldValue}`);
            } else {
                cc.warn(`[BuffSystem] buffComponent.shieldValue未定义: ${buffComponent.shieldValue}`);
            }
            // 更新施法者（如果提供了）
            if (caster) {
                existing.caster = caster;
            }
            if (existing.onApply) existing.onApply(entity, logger);

            // 记录Buff应用事件（更新现有Buff也算应用）
            if (recorder && typeof recorder === 'object' && recorder.recordBuffApply) {
                recorder.recordBuffApply(entity, existing.buffName);
            }

            // 如果是护盾Buff，更新血条显示
            const stats = entity.getComponent("StatsComponent");
            if (existing.buffName === "护盾" && stats) {
                stats.updateHealthBar();
            }

            // 更新Buff图标显示
            this._updateBuffDisplay(entity);
            return;
        }

        let newBuff = entity.addComponent("BuffComponent");
        cc.log(`[BuffSystem] 添加新Buff: name=${buffComponent.name}, shieldValue=${buffComponent.shieldValue}, buffComponent=`, buffComponent);
        cc.log(`[BuffSystem] 调用init前: newBuff.shieldValue=${newBuff.shieldValue}`);
        newBuff.init(buffComponent);
        // 设置施法者（如果提供了）
        if (caster) {
            newBuff.caster = caster;
        }
        cc.log(`[BuffSystem] Buff初始化后: buffName=${newBuff.buffName}, shieldValue=${newBuff.shieldValue}, shieldValue类型=${typeof newBuff.shieldValue}, caster=${caster ? caster.name : 'null'}`);

        const stats = entity.getComponent("StatsComponent");

        if (stats && newBuff.modifiers) {
            for (let key in newBuff.modifiers) {
                if (stats[key] !== undefined)
                    stats[key] += newBuff.modifiers[key];
            }
            if (newBuff.modifiers.speed !== undefined)
                stats.updateAttackInterval();
        }

        if (newBuff.onApply)
            newBuff.onApply(entity, logger);

        // 如果是护盾Buff，更新血条显示
        if (newBuff.buffName === "护盾" && stats) {
            stats.updateHealthBar();
        }

        // 更新Buff图标显示
        this._updateBuffDisplay(entity);
    },

    update(entity, dt, logger, recorder) {
        // 如果单位已死亡，不更新Buff
        const stats = entity.getComponent("StatsComponent");
        if (stats && stats.isDead()) {
            return;
        }

        const buffs = entity.getComponents(BuffComponent);
        let buffRemoved = false;

        for (let buff of buffs) {
            buff.elapsed += dt;
            buff.tickTimer += dt;

            if (buff.onTick && buff.tickTimer >= buff.interval) {
                // 再次检查是否死亡（防止在tick过程中死亡）
                if (stats && stats.isDead()) {
                    return;
                }
                buff.onTick(entity, logger);
                buff.tickTimer = 0;
            }

            if (buff.elapsed >= buff.duration) {

                if (buff.onExpire)
                    buff.onExpire(entity, logger);

                if (stats && buff.modifiers) {
                    for (let k in buff.modifiers) {
                        if (stats[k] !== undefined)
                            stats[k] -= buff.modifiers[k];
                    }
                }

                // 如果是护盾Buff，更新血条显示
                if (buff.buffName === "护盾" && stats) {
                    stats.updateHealthBar();
                }

                // 记录Buff移除事件（确保recorder是有效的对象）
                if (recorder && typeof recorder === 'object' && recorder.recordBuffRemove) {
                    recorder.recordBuffRemove(entity, buff.buffName);
                }

                entity.removeComponent(buff);
                buffRemoved = true;
            }
        }

        // 更新Buff图标显示
        this._updateBuffDisplay(entity);
    },

    hasStatus(entity, statusKey) {
        return entity.getComponents(BuffComponent)
            .some(b => b.status && b.status[statusKey]);
    },

    /**
     * 移除指定的Buff列表
     * @param {cc.Node} entity - 实体节点
     * @param {Array<string>} buffNames - 要移除的Buff名称列表
     * @param {Function} logger - 日志函数
     * @param {Object} recorder - 战斗记录器（可选）
     */
    removeBuffs(entity, buffNames, logger, recorder) {
        if (!entity || !entity.isValid) return;

        const BuffComponent = require("BuffComponent");
        const buffs = entity.getComponents(BuffComponent);
        const stats = entity.getComponent("StatsComponent");
        let removedCount = 0;

        for (let buff of buffs) {
            // 检查这个Buff是否在要移除的列表中
            if (buffNames.includes(buff.buffName)) {
                // 调用Buff的onExpire回调（如果存在）
                if (buff.onExpire) {
                    buff.onExpire(entity, logger);
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

                // 如果是护盾Buff，更新血条显示
                if (buff.buffName === "护盾" && stats) {
                    stats.updateHealthBar();
                }

                // 记录Buff移除事件（确保recorder是有效的对象）
                if (recorder && typeof recorder === 'object' && recorder.recordBuffRemove) {
                    recorder.recordBuffRemove(entity, buff.buffName);
                }

                // 移除Buff组件
                entity.removeComponent(buff);
                removedCount++;

                logger(`✨ ${entity.name} 的 ${buff.buffName} 效果被净化了`);
            }
        }

        if (removedCount > 0) {
            logger(`🌟 ${entity.name} 被净化，移除了 ${removedCount} 个负面效果`);
            // 更新Buff图标显示
            this._updateBuffDisplay(entity);
        }
    },

    /**
     * 更新实体的Buff图标显示
     * @param {cc.Node} entity - 实体节点
     */
    _updateBuffDisplay(entity) {
        const buffDisplay = entity.getComponent("BuffIconDisplay");
        if (buffDisplay && buffDisplay.updateBuffDisplay) {
            buffDisplay.updateBuffDisplay();
        }
    }
};

module.exports = BuffSystem;