const StatsComponent = require("./StatsComponent");
//buff数据库
module.exports = {
    burn: {
        name: "燃烧",
        duration: 3,
        interval: 1,//每秒执行一次
        onTick: (target, log) => {
            let dmg = 5;
            const stats = target.get(StatsComponent);
            stats.hp -= dmg;
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

    warCry: {
        name: "战吼",
        duration: 3,
        modifiers: {
            attack: 5,
            speed: 3
        },

        onApply(target, log) {
            log(`${target.name}受到战吼鼓舞，攻击力增加了5点，速度提升了3点`);
        },
        onExpire(target, log) {
            log(`${target.name}战吼效果结束`);
        }
    },

    rage: {
        name: "狂暴",
        duration: 3,
        modifiers: {
            attack: 5,
        },
        onApply(target, log) {
            log(`${target.name}进入了狂暴状态，攻击力增加了5点`);
        },
        onExpire(target, log) {
            log(`${target.name}狂暴状态结束`);
        }
    },

    shield: {
        name: "盾牌",
        duration: 3,
        status: {},
        modifiers: {},
        shieldValue: 10,//护盾值
        onApply(target, log) {
            // const buffList = target.getAll(BuffComponent);
            // const selfBuff = buffList.find(b => b.name === "护盾");
            // selfBuff.shield = 10;//初始化护盾值耐久
            log(`${target.name}获得了10点护盾`);
        },
        onExpire(target, log) {
            log(`${target.name}护盾效果结束`);
        }

    }
};