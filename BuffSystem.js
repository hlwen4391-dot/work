
const BuffComponent = require("./BuffComponent");
const BuffFactory = require("./BuffFactory");
const StatsComponent = require("./StatsComponent");

class BuffSystem {
    static addBuff(entity, buffComponent, logger) {

        const existing = entity.getAll(BuffComponent).find(b => b.name === buffComponent.name);

        if (existing && !buffComponent.stackable) {
            //如果存在且不可叠加，则重置持续时间
            existing.elapsed = 0;//重置持续时间
            existing.duration = buffComponent.duration;//重置持续时间
            //执行添加时回调
            if (existing.onApply) existing.onApply(entity, logger);
            return;//返回，不添加新的buff
        }

        entity.addComponent(buffComponent);
        const stats = entity.get(StatsComponent);
        if (stats && buffComponent.modifiers) {
            for (const key in buffComponent.modifiers) {
                if (stats[key] !== undefined) {
                    stats[key] += buffComponent.modifiers[key];//属性增加
                }
            }
            if (buffComponent.modifiers.speed !== undefined) {//如果速度发生变化，则重新计算攻击间隔
                stats.updateAttackInterval();//重新计算攻击间隔
            }
        }
        if (buffComponent.onApply) buffComponent.onApply(entity, logger);//执行添加时回调
    }

    //更新buff效果
    static update(entity, deltaTime, logger) {
        const buffs = entity.getAll(BuffComponent);
        const stats = entity.get(StatsComponent);

        for (let i = buffs.length - 1; i >= 0; i--) {//从后向前遍历buffs
            const buff = buffs[i];
            //更新持续时间
            buff.elapsed += deltaTime;//持续时间增加
            buff.tickTimer += deltaTime;//tickTimer增加

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