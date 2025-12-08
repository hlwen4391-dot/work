class Buff {
    constructor(config) {
        this.name = config.name;
        this.duration = config.duration;
        this.elapsed = 0;//已持续时间
        this.stackable = config.stackable || false;//是否可叠加

        this.onApply = config.onApply || null;//添加时
        this.onTick = config.onTick || null;//每秒
        this.onRemove = config.onRemove || null;//结束时

        this.modifiers = config.modifiers || {};//属性增减
        this.interval = config.interval || 1.0;//Tick间隔
        this.tickTimer = 0;

        this.status = config.status || {}; //特殊状态
    }

    apply(target, logger) {
        if (this.onApply) this.onApply(target, logger);

        for (const key in this.modifiers) {
            target[key] += this.modifiers[key];//属性增减
        }
    }


    update(target, deltaTime, logger) {
        this.elapsed += deltaTime;
        this.tickTimer += deltaTime;
        //每秒执行一次
        if (this.onTick && this.tickTimer >= this.interval) {
            this.onTick(target, logger);
            this.tickTimer = 0;
        }

        return this.elapsed >= this.duration;
    }

    expire(target, logger) {
        if (this.onExpire) this.onExpire(target, logger);
        //自动恢复属性
        for (const key in this.modifiers) {
            target[key] -= this.modifiers[key];//属性增减
        }
    }

}



module.exports = Buff