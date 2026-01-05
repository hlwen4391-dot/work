var BuffComponent = require("BuffComponent");
var BuffFactory = require("BuffFactory");
var StatsComponent = require("StatsComponent");

var BuffSystem = {

    addBuff(entity, buffComponent, logger, recorder) {
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
            if (existing.onApply) existing.onApply(entity, logger);

            // 记录Buff应用事件（更新现有Buff也算应用）
            if (recorder) {
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
        cc.log(`[BuffSystem] Buff初始化后: buffName=${newBuff.buffName}, shieldValue=${newBuff.shieldValue}, shieldValue类型=${typeof newBuff.shieldValue}`);

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
        const buffs = entity.getComponents(BuffComponent);
        const stats = entity.getComponent("StatsComponent");
        let buffRemoved = false;

        for (let buff of buffs) {
            buff.elapsed += dt;
            buff.tickTimer += dt;

            if (buff.onTick && buff.tickTimer >= buff.interval) {
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

                // 记录Buff移除事件
                if (recorder) {
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