const StatsComponent = require("./StatsComponent");
const CombatComponent = require("./CombatComponent");
const BuffComponent = require("./BuffComponent");

class CombatSystem {
    static attack(attacker, defender, log = console.log) {
        const atkStats = attacker.get(StatsComponent);//获取攻击者状态
        const defStats = defender.get(StatsComponent);//获取防御者状态

        if (!atkStats || !defStats) {//如果攻击者状态或防御者状态为空，则抛出错误
            throw new Error("StatsComponent not found");
        }
        const dmg = Math.max(atkStats.attack - defStats.defense, 1);//计算伤害
        defStats.hp -= dmg;//防御者扣血
        const atkCombat = attacker.get(CombatComponent);//攻击者战斗组件
        if (atkCombat) atkCombat.lastDamage = dmg;//记录攻击者最后一次伤害
        log(`${attacker.name}对${defender.name}造成了${dmg}点伤害,${defender.name}剩余HP:${defStats.hp}`);
        return dmg;//返回伤害值
    }

    static damage(attacker, defender, value, log) {
        const def = defender.get(StatsComponent);//获取防御者状态
        const shieldBuff = defender.getAll(BuffComponent).find(b => b.name === "护盾");
        if (shieldBuff) {
            let absorb = Math.min(value, shieldBuff.shield);//计算吸收的伤害
            shieldBuff.shield -= absorb;//护盾值耐久减少
            value -= absorb;//剩余伤害
            log(`${defender.name}的护盾吸收了${absorb}点伤害`);
            if (shieldBuff.shield <= 0) {
                BuffSystem.removeInstance(defender, shieldBuff);
                log(`${defender.name}的护盾被击破了`);
            }
        }

        if (value > 0) {
            def.hp -= value;//防御者扣血
            log(`${attacker.name}对${defender.name}造成了${value}点伤害,${defender.name}剩余HP:${def.hp}`);
            return value;
        }//返回伤害值
    }
    static damageTrue(attacker, defender, value, log) {
        const def = defender.get(StatsComponent);//获取防御者状态
        def.hp -= value;//防御者扣血
        log(`${attacker.name}对${defender.name}造成了${value}点真实伤害,${defender.name}剩余HP:${def.hp}`);
        return value;//返回伤害值
    }
}

// const StatsComponent = require("./StatsComponent");
// const CombatComponent = require("./CombatComponent");

// class CombatSystem {
//     static attack(attacker, defender, log = console.log) {
//         const atkStats = attacker.get(StatsComponent);//获取攻击者状态
//         const defStats = defender.get(StatsComponent);//获取防御者状态

//         if (!atkStats || !defStats) {//如果攻击者状态或防御者状态为空，则抛出错误
//             throw new Error("StatsComponent not found");
//         }
//         const dmg = Math.max(atkStats.attack - defStats.defense, 1);//计算伤害
//         defStats.hp -= dmg;//防御者扣血
//         const atkCombat = attacker.get(CombatComponent);//攻击者战斗组件
//         if (atkCombat) atkCombat.lastDamage = dmg;//记录攻击者最后一次伤害
//         log(`${attacker.name}对${defender.name}造成了${dmg}点伤害,${defender.name}剩余HP:${defStats.hp}`);
//         return dmg;//返回伤害值
//     }

//     static damage(attacker, defender, value, log) {
//         const def = defender.get(StatsComponent);//获取防御者状态
//         def.hp -= value;//防御者扣血
//         log(`${attacker.name}对${defender.name}造成了${value}点伤害,${defender.name}剩余HP:${def.hp}`);
//         return value;//返回伤害值
//     }
//     static damageTrue(attacker, defender, value, log) {
//         const def = defender.get(StatsComponent);//获取防御者状态
//         def.hp -= value;//防御者扣血
//         log(`${attacker.name}对${defender.name}造成了${value}点真实伤害,${defender.name}剩余HP:${def.hp}`);
//         return value;//返回伤害值
//     }
// }

module.exports = CombatSystem;