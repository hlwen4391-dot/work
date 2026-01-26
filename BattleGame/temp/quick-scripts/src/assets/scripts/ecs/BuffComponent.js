"use strict";
cc._RF.push(module, '1574el8BZFBnZWM8QtINxu5', 'BuffComponent');
// Scripts/ecs/BuffComponent.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    buffName: "",
    duration: 0,
    elapsed: 0,
    stackable: false,
    modifiers: {
      "default": function _default() {
        return {};
      },
      visible: false
    },
    interval: 1,
    tickTimer: 0,
    status: {
      "default": function _default() {
        return {};
      },
      visible: false
    },
    shieldValue: {
      "default": 0,
      tooltip: "护盾值"
    },
    caster: {
      "default": null,
      type: cc.Node,
      visible: false,
      tooltip: "施法者（释放这个Buff的单位）"
    }
  },
  onLoad: function onLoad() {
    // 确保shieldValue在onLoad时也被正确设置
    if (this._initShieldValue !== undefined) {
      this.shieldValue = this._initShieldValue;
      cc.log("[BuffComponent] onLoad: \u6062\u590DshieldValue=" + this.shieldValue);
    }
  },
  init: function init(config) {
    cc.log("[BuffComponent] init\u5F00\u59CB: config=", config);
    cc.log("[BuffComponent] init\u5F00\u59CB: config.shieldValue=" + config.shieldValue + ", typeof=" + typeof config.shieldValue);
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
      cc.log("[BuffComponent] \u8BBE\u7F6EshieldValue=" + this.shieldValue + " (\u6765\u81EAconfig)");
    } else {
      this.shieldValue = 0;
      this._initShieldValue = 0;
      cc.log("[BuffComponent] config.shieldValue\u672A\u5B9A\u4E49\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u503C0");
    }
    cc.log("[BuffComponent] \u521D\u59CB\u5316\u5B8C\u6210: name=" + this.buffName + ", shieldValue=" + this.shieldValue + ", this.shieldValue\u7C7B\u578B=" + typeof this.shieldValue);
  }
});

cc._RF.pop();