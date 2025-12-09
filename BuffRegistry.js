module.exports = {
    burn: {
        name: "燃烧",
        duration: 3,
        interval: 1,
        onTick: (target, log) => {
            let dmg = 5;
            target.hp -= dmg;
            log(`${target.name}燃烧，每秒损失${dmg}点燃烧伤害`);
        }
    },

    stun: {
        name: "眩晕",
        duration: 1,//眩晕时间
        status: { stun: true },
        onApply(target, log) {
            log(`${target.name}被眩晕了`);
        },
        onExpire(target, log) {
            log(`${target.name}眩晕状态结束`);
        }
    },

};