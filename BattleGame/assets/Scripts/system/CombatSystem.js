var StatsComponent = require("StatsComponent");
var CombatComponent = require("CombatComponent");

/**
 * 战斗计算系统（非组件，是普通工具模块）
 */
var CombatSystem = {

    /**
     * 伤害结算（包含防御、闪避、暴击）
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
            return;
        }

        // 2. 计算暴击
        let finalDamage = baseDamage;
        const critChance = atkStats.crit || 0;
        if (Math.random() < critChance) {
            finalDamage *= 2;
            log(`⚡ 暴击！${attacker.name} 对 ${target.name} 造成双倍伤害`);
        }

        // 3. 防御减伤
        finalDamage = Math.max(1, finalDamage - tgtStats.defense);

        // 4. 免疫（百分比）
        const immune = tgtStats.immune || 0;
        finalDamage = finalDamage * (1 - immune);

        finalDamage = Math.floor(finalDamage);

        // 5. 扣血
        tgtStats.hp -= finalDamage;
        if (tgtCombat) tgtCombat.lastDamage = finalDamage;

        // 6. 更新血条显示
        tgtStats.updateHealthBar(finalDamage);

        log(`${attacker.name} 对 ${target.name} 造成 ${finalDamage} 点伤害 (剩余HP: ${tgtStats.hp})`);
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

        // 更新血条显示
        tgtStats.updateHealthBar(finalDamage);

        log(`🔥 真伤！${attacker.name} 对 ${target.name} 造成 ${finalDamage} 点真实伤害 (剩余HP: ${tgtStats.hp})`);
    }
};

module.exports = CombatSystem;