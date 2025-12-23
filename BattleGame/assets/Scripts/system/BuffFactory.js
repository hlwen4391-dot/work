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
    create(name) {
        const data = BuffRegistry[name];
        if (!data) {
            cc.warn(`BuffFactory: 未找到名为 "${name}" 的Buff配置`);
            return null;
        }

        return {
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
    }
};

module.exports = BuffFactory;

