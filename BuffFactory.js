const BuffComponent = require("./BuffComponent");
const BuffRegistry = require("./BuffRegistry");
//buff工厂
class BuffFactory {
    static create(name) {
        const data = BuffRegistry[name];
        if (!data) return null;

        return new BuffComponent({
            name: data.name,    //buff名称
            duration: data.duration,    //持续时间
            interval: data.interval,    //每秒执行一次
            onApply: data.onApply,    //添加时
            onTick: data.onTick,    //每秒执行一次
            onExpire: data.onExpire,    //结束时
            modifiers: data.modifiers,    //属性增减
            status: data.status,    //特殊状态
            stackable: data.stackable,    //是否可叠加
        });
    }
}

module.exports = BuffFactory;