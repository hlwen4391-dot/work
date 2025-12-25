cc.Class({
    extends: cc.Component,

    properties: {
        lastDamage: {
            default: 0,
            type: cc.Integer,
            readonly: true,
            tooltip: "上次受到的伤害（只读）"

        }
    }
});