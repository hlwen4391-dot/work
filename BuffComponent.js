class BuffComponent {
    constructor(config) {
        this.name = config.name;
        this.duration = config.duration;
        this.elapsed = 0;//已持续时间
        this.stackable = config.stackable || false;//是否可叠加

        this.onApply = config.onApply || null;//添加时回调
        this.onTick = config.onTick || null;//每秒执行一次回调
        this.onExpire = config.onExpire || null;//结束时回调

        this.modifiers = config.modifiers || {};//属性增减
        this.interval = config.interval || 1.0;//每秒执行一次回调间隔
        this.tickTimer = 0;//初始化tickTimer

        this.status = config.status || {}; //特殊状态
    }
}

module.exports = BuffComponent;