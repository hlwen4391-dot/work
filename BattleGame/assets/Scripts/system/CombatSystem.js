var StatsComponent = require("StatsComponent");
var CombatComponent = require("CombatComponent");
var BuffComponent = require("BuffComponent");

/**
 * 战斗计算系统（非组件，是普通工具模块）
 */
var CombatSystem = {

    /**
     * 伤害结算（包含防御、闪避、暴击、护盾）
     */
    damage(attacker, target, baseDamage, log) {

        const atkStats = attacker.getComponent("StatsComponent");
        const tgtStats = target.getComponent("StatsComponent");
        const tgtCombat = target.getComponent("CombatComponent");

        if (!atkStats || !tgtStats) return;

        // 1. 计算闪避
        const missChance = tgtStats.miss || 0;
        if (Math.random() < missChance) {
            log(`${attacker.name} 对 ${target.name} 的攻击被闪避了！`);
            if (tgtCombat) tgtCombat.lastDamage = 0;
            // 显示 MISS 飘字
            tgtStats.updateHealthBar(0, 'miss');
            return;
        }

        // 2. 计算暴击
        let finalDamage = baseDamage;
        let isCrit = false;
        const critChance = atkStats.crit || 0;
        if (Math.random() < critChance) {
            finalDamage *= 2;
            isCrit = true;
            log(`⚡ 暴击！${attacker.name} 对 ${target.name} 造成双倍伤害`);
        }

        // 3. 防御减伤
        finalDamage = Math.max(1, finalDamage - tgtStats.defense);

        // 4. 免疫（百分比）
        const immune = tgtStats.immune || 0;
        finalDamage = finalDamage * (1 - immune);

        finalDamage = Math.floor(finalDamage);

        // 5. 护盾吸收伤害
        const shieldBuff = target.getComponents(BuffComponent)
            .find(b => b.buffName === "护盾");
        if (shieldBuff && shieldBuff.shieldValue > 0) {
            const absorb = Math.min(finalDamage, shieldBuff.shieldValue);
            shieldBuff.shieldValue -= absorb;
            finalDamage -= absorb;
            log(`🛡️ ${target.name} 的护盾吸收了 ${absorb} 点伤害`);

            if (shieldBuff.shieldValue <= 0) {
                if (shieldBuff.onExpire) {
                    shieldBuff.onExpire(target, log);
                }
                target.removeComponent(shieldBuff);
                log(`${target.name} 的护盾被击破了`);
            }
        }

        // 6. 扣血
        if (finalDamage > 0) {
            tgtStats.hp -= finalDamage;
            if (tgtCombat) tgtCombat.lastDamage = finalDamage;

            // 增加怒气值（根据受到的伤害）
            // 怒气值 = 受到的伤害值（可以根据需要调整比例）
            tgtStats.addRage(finalDamage);
        } else {
            if (tgtCombat) tgtCombat.lastDamage = 0;
        }

        // 7. 更新血条显示（传递是否暴击，会自动显示护盾值）
        tgtStats.updateHealthBar(finalDamage > 0 ? finalDamage : 0, isCrit ? 'crit' : 'normal');

        if (finalDamage > 0) {
            log(`${attacker.name} 对 ${target.name} 造成 ${finalDamage} 点伤害 (剩余HP: ${tgtStats.hp})`);
        }
    },

    /**
     * 真伤：无视防御、免疫、闪避等
     */
    damageTrue(attacker, target, baseDamage, log) {

        const tgtStats = target.getComponent("StatsComponent");
        const tgtCombat = target.getComponent("CombatComponent");
        if (!tgtStats) return;

        const finalDamage = Math.floor(baseDamage);
        tgtStats.hp -= finalDamage;
        if (tgtCombat) tgtCombat.lastDamage = finalDamage;

        // 增加怒气值（根据受到的伤害）
        tgtStats.addRage(finalDamage);

        // 更新血条显示（真伤显示为普通伤害）
        tgtStats.updateHealthBar(finalDamage, 'normal');

        log(`🔥 真伤！${attacker.name} 对 ${target.name} 造成 ${finalDamage} 点真实伤害 (剩余HP: ${tgtStats.hp})`);
    }
};

module.exports = CombatSystem;