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
        status: { default: () => ({}), visible: false },
        shieldValue: {
            default: 0,
            tooltip: "护盾值"
        }
    },

    onLoad() {
        // 确保shieldValue在onLoad时也被正确设置
        if (this._initShieldValue !== undefined) {
            this.shieldValue = this._initShieldValue;
            cc.log(`[BuffComponent] onLoad: 恢复shieldValue=${this.shieldValue}`);
        }
    },

    init(config) {
        cc.log(`[BuffComponent] init开始: config=`, config);
        cc.log(`[BuffComponent] init开始: config.shieldValue=${config.shieldValue}, typeof=${typeof config.shieldValue}`);

        this.buffName = config.name;
        this.duration = config.duration;
        this.stackable = config.stackable || false;

        this.onApply = config.onApply;
        this.onTick = config.onTick;
        this.onExpire = config.onExpire;
        this.modifiers = config.modifiers || {};
        this.interval = config.interval || 1;
        this.status = config.status || {};

        // 初始化护盾值：如果config.shieldValue是undefined，使用0；否则使用config.shieldValue（即使是0也使用）
        if (config.shieldValue !== undefined && config.shieldValue !== null) {
            this.shieldValue = config.shieldValue;
            this._initShieldValue = config.shieldValue; // 保存初始值，以防被properties重置
            cc.log(`[BuffComponent] 设置shieldValue=${this.shieldValue} (来自config)`);
        } else {
            this.shieldValue = 0;
            this._initShieldValue = 0;
            cc.log(`[BuffComponent] config.shieldValue未定义，使用默认值0`);
        }

        cc.log(`[BuffComponent] 初始化完成: name=${this.buffName}, shieldValue=${this.shieldValue}, this.shieldValue类型=${typeof this.shieldValue}`);
    }
});
