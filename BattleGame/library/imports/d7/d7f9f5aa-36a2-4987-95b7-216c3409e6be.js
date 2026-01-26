"use strict";
cc._RF.push(module, 'd7f9fWqNqJJh5W3IWw0Cea+', 'BuffFactory');
// Scripts/system/BuffFactory.js

"use strict";

var BuffRegistry = require("BuffRegistry");

/**
 * Buff工厂类
 * 根据名称创建对应的Buff配置对象
 */
var BuffFactory = {
  /**
   * 创建Buff配置对象
   * @param {string} name - Buff名称
   * @returns {Object} Buff配置对象
   */
  create: function create(name) {
    var data = BuffRegistry[name];
    if (!data) {
      cc.warn("BuffFactory: \u672A\u627E\u5230\u540D\u4E3A \"" + name + "\" \u7684Buff\u914D\u7F6E");
      return null;
    }
    var buffConfig = {
      name: data.name,
      duration: data.duration,
      interval: data.interval,
      onApply: data.onApply,
      onTick: data.onTick,
      onExpire: data.onExpire,
      modifiers: data.modifiers,
      status: data.status,
      stackable: data.stackable,
      shieldValue: data.shieldValue
    };
    cc.log("[BuffFactory] \u521B\u5EFABuff: name=" + buffConfig.name + ", shieldValue=" + buffConfig.shieldValue + ", data.shieldValue=" + data.shieldValue);
    return buffConfig;
  }
};
module.exports = BuffFactory;

cc._RF.pop();