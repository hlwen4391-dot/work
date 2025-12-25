/**
 * Buff数据库/注册表
 * 定义所有Buff的配置数据
 */
var BuffRegistry = {
    // 燃烧Buff - 持续伤害
    burn: {
        name: "燃烧",
        duration: 3,
        interval: 1, // 每秒执行一次
        onTick: (target, log) => {
            const dmg = 5;
            const stats = target.getComponent("StatsComponent");
            if (stats) {
                stats.hp -= dmg;
                // 更新血条显示（燃烧伤害显示为普通伤害）
                stats.updateHealthBar(dmg, 'normal');
                log(`🔥 ${target.name} 受到燃烧效果，损失 ${dmg} 点HP`);
            }
        }
    },

    // 眩晕Buff - 控制效果
    stun: {
        name: "眩晕",
        duration: 1,
        status: { stun: true },
        onApply(target, log) {
            log(`😵 ${target.name} 被眩晕了！`);
        },
        onExpire(target, log) {
            log(`✨ ${target.name} 从眩晕中恢复`);
        }
    },

    // 战吼Buff - 群体增益
    warCry: {
        name: "战吼",
        duration: 3,
        modifiers: {
            attack: 5,
            speed: 3
        },
        onApply(target, log) {
            log(`📢 ${target.name} 受到战吼鼓舞，攻击力+5，速度+3`);
        },
        onExpire(target, log) {
            log(`${target.name} 战吼效果结束`);
        }
    },

    // 狂暴Buff - 攻击增益
    rage: {
        name: "狂暴",
        duration: 2,
        modifiers: {
            attack: 5
        },
        onApply(target, log) {
            log(`😡 ${target.name} 进入狂暴状态，攻击力+5`);
        },
        onExpire(target, log) {
            log(`${target.name} 狂暴状态结束`);
        }
    },

    // 护盾Buff - 伤害吸收
    shield: {
        name: "护盾",
        duration: 3,
        status: {},
        modifiers: {},
        shieldValue: 10, // 护盾值
        onApply(target, log) {
            log(`🛡️ ${target.name} 获得了 10 点护盾`);
        },
        onExpire(target, log) {
            log(`${target.name} 护盾效果结束`);
        }
    }
};

module.exports = BuffRegistry;

