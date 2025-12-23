/**
 * Buff组件
 * 用于存储角色身上的各种增益/减益效果
 */
var BuffComponent = cc.Class({
    extends: cc.Component,

    properties: {
        buffName: "",
        duration: 0,
        elapsed: 0,
        stackable: false,
        modifiers: { default: () => ({}), visible: false },
        interval: 1,
        tickTimer: 0,
        status: { default: () => ({}), visible: false }
    },

    /**
     * 初始化Buff配置
     * @param {Object} config - Buff配置对象
     */
    init(config) {
        this.buffName = config.name;
        this.duration = config.duration;
        this.stackable = config.stackable || false;

        this.onApply = config.onApply;
        this.onTick = config.onTick;
        this.onExpire = config.onExpire;
        this.modifiers = config.modifiers || {};
        this.interval = config.interval || 1;
        this.status = config.status || {};
    }
});

module.exports = BuffComponent;
