class BuffComponent {
    constructor(config) {
        this.name = config.name;
        this.duration = config.duration;
        this.elapsed = 0;//已持续时间
        this.stackable = config.stackable || false;//是否可叠加

        this.onApply = config.onApply || null;//添加时
        this.onTick = config.onTick || null;//每秒
        this.onExpire = config.onExpire || null;//结束时

        this.modifiers = config.modifiers || {};//属性增减
        this.interval = config.interval || 1.0;//Tick间隔
        this.tickTimer = 0;//初始化tickTimer

        this.status = config.status || {}; //特殊状态
    }
}