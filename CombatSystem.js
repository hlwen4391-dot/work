const StatsComponent = require("./StatsComponent");
const CombatComponent = require("./CombatComponent");

class CombatSystem {
    static attack(attacker, defender, log = console.log) {
        const atkStats = attacker.get(StatsComponent);
        const defStats = defender.get(StatsComponent);

        if (!atkStats || !defStats) {
            throw new Error("StatsComponent not found");
        }

        const dmg = Math.max(atkStats.attack - defStats.defense, 1);

        defStats.hp -= dmg;

        const atkCombat = attacker.get(CombatComponent);//攻击者战斗组件
        if (atkCombat) atkCombat.lastDamage = dmg;//记录攻击者最后一次伤害

        log(`${attacker.name}对${defender.name}造成了${dmg}点伤害,${defender.name}剩余HP:${defStats.hp}`);
        return dmg;//返回伤害值
    }

    static damage(attacker, defender, value, log) {
        const def = defender.get(StatsComponent);
        def.hp -= value;
        log(`${attacker.name}对${defender.name}造成了${value}点伤害,${defender.name}剩余HP:${def.hp}`);
        return value;
    }
    static damageTrue(attacker, defender, value, log) {
        const def = defender.get(StatsComponent);
        def.hp -= value;
        log(`${attacker.name}对${defender.name}造成了${value}点真实伤害,${defender.name}剩余HP:${def.hp}`);
        return value;
    }
}

module.exports = CombatSystem;