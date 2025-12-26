var BuffComponent = require("BuffComponent");
var BuffFactory = require("BuffFactory");
var StatsComponent = require("StatsComponent");

var BuffSystem = {

    addBuff(entity, buffComponent, logger) {
        const existing = entity.getComponents(BuffComponent)
            .find(b => b.buffName === buffComponent.buffName);

        if (existing && !buffComponent.stackable) {
            existing.elapsed = 0;
            existing.duration = buffComponent.duration;
            if (existing.onApply) existing.onApply(entity, logger);

            // 更新Buff图标显示
            this._updateBuffDisplay(entity);
            return;
        }

        let newBuff = entity.addComponent("BuffComponent");
        newBuff.init(buffComponent);

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

        // 更新Buff图标显示
        this._updateBuffDisplay(entity);
    },

    update(entity, dt, logger) {
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