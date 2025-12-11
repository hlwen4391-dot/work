const BuffComponent = require("./BuffComponent");
const BuffFactory = require("./BuffFactory");
const StatsComponent = require("./StatsComponent");

class BuffSystem {
    static addBuff(entity, buffComponent, logger) {

        const existing = entity.getAll(BuffComponent).find(b => b.name === buffComponent.name);

        if (existing && !buffComponent.stackable) {
            //如果存在且不可叠加，则重置持续时间
            existing.elapsed = 0;
            existing.duration = buffComponent.duration;

            if (existing.onApply) existing.onApply(entity, logger);
            return;
        }

        entity.addComponent(buffComponent);
        if (buffComponent.onApply) buffComponent.onApply(entity, logger);
    }

    //更新buff效果
    static update(entity, deltaTime, logger) {
        const buffs = entity.getAll(BuffComponent);
        if (typeof BuffComponent !== "function") {
            console.log("BuffComponent 已经被污染：", BuffComponent);
        }
        const stats = entity.get(StatsComponent);

        for (let i = buffs.length - 1; i >= 0; i--) {
            const buff = buffs[i];
            //更新持续时间
            buff.elapsed += deltaTime;
            buff.tickTimer += deltaTime;

            //执行tick
            if (buff.onTick && buff.tickTimer >= buff.interval) {
                buff.onTick(entity, logger);
                buff.tickTimer = 0;
            }
            //执行到期
            if (buff.elapsed >= buff.duration) {

                if (buff.onExpire) buff.onExpire(entity, logger);

                //恢复属性（如果buff曾经修改了属性）
                if (stats && buff.modifiers) {
                    for (const key in buff.modifiers) {
                        if (stats[key] !== undefined) {
                            stats[key] -= buff.modifiers[key];
                        }
                    }
                    if (buff.modifiers.speed !== undefined) {
                        stats.updateAttackInterval();//重新计算攻击间隔
                    }
                }

                entity.removeComponentInstance(buff);//删除buff组件实例
            }
        }
    }

    //检查是否具有特殊状态
    static hasStatus(entity, status) {
        return entity.getAll(BuffComponent)
            .some(buff => buff.status && buff.status[status]);
    }
}

module.exports = BuffSystem;