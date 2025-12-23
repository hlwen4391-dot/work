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
    },

    update(entity, dt, logger) {
        const buffs = entity.getComponents(BuffComponent);
        const stats = entity.getComponent("StatsComponent");

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
            }
        }
    },

    hasStatus(entity, statusKey) {
        return entity.getComponents(BuffComponent)
            .some(b => b.status && b.status[statusKey]);
    }
};

module.exports = BuffSystem;