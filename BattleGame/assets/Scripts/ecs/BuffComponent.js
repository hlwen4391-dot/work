cc.Class({
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
