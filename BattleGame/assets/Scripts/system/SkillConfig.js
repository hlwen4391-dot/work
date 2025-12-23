var BuffFactory = require("BuffFactory");
var BuffSystem = require("BuffSystem");
var TeamRef = require("TeamRef");

/**
 * 技能枚举
 */
var SkillEnum = {
    normalAttack: 1,  // 普通攻击
    stunSkill: 2,     // 盾击
    fireball: 3,      // 火球术
    rageSkill: 4,     // 狂暴
    warCry: 5,        // 战吼
    shieldAllies: 6   // 群体护盾
};

/**
 * 技能配置对象
 * 包含所有技能的定义
 */
var SkillConfig = {
    
    // 普通攻击 - 基础攻击技能
    normalAttack: {
        name: "普通攻击",
        id: SkillEnum.normalAttack,
        cooldown: 1.0,
        effect: (self, target, log, rand) => {
            const atk = self.getComponent("StatsComponent");
            const def = target.getComponent("StatsComponent");
            
            if (!atk || !def) return [];
            
            let dmg = Math.max(atk.attack - def.defense, 1);
            
            // 暴击判定
            if (rand() < atk.crit) {
                dmg *= 2;
                log(`⚡ 暴击！${self.name} 造成双倍伤害`);
            }
            
            // 免伤计算
            dmg *= (1 - def.immune);
            dmg = Math.floor(dmg);
            
            return [
                { type: "damage", value: dmg }
            ];
        }
    },

    // 盾击 - 造成伤害并眩晕
    stunSkill: {
        name: "盾击",
        id: SkillEnum.stunSkill,
        cooldown: 4.0,
        effect: (self, target, log) => {
            const atk = self.getComponent("StatsComponent");
            const def = target.getComponent("StatsComponent");
            
            if (!atk || !def) return [];
            
            const dmg = Math.max(atk.attack - def.defense, 1);
            log(`🛡️ ${self.name} 使用盾击！`);
            
            return [
                { type: "damage", value: dmg },
                { type: "applyBuff", buff: "stun" }
            ];
        }
    },

    // 火球术 - 真实伤害并附加燃烧
    fireball: {
        name: "火球术",
        id: SkillEnum.fireball,
        cooldown: 3.0,
        effect: (self, target, log) => {
            log(`🔥 ${self.name} 释放火球术！`);
            return [
                { type: "damageTrue", value: 5 },
                { type: "applyBuff", buff: "burn" }
            ];
        }
    },

    // 狂暴 - 自身增益
    rageSkill: {
        name: "狂暴",
        id: SkillEnum.rageSkill,
        cooldown: 4.0,
        effect: (self, target, log) => {
            log(`😡 ${self.name} 进入狂暴状态！`);
            return [
                { type: "applyBuffSelf", buff: "rage" }
            ];
        }
    },

    // 战吼 - 群体增益
    warCry: {
        name: "战吼",
        id: SkillEnum.warCry,
        cooldown: 10.0,
        effect: (self, target, log) => {
            const teamComp = self.getComponent("TeamComponent");
            if (!teamComp) return [];
            
            const allies = teamComp.team === "hero" 
                ? TeamRef.herosRef 
                : TeamRef.monstersRef;
            
            log(`📢 ${self.name} 发出战吼，鼓舞队友！`);
            
            // 为所有队友添加战吼Buff
            for (let ally of allies) {
                const buffComp = BuffFactory.create("warCry");
                if (buffComp) {
                    BuffSystem.addBuff(ally, buffComp, log);
                }
            }
            
            return [];
        }
    },

    // 群体护盾 - 为队友提供护盾
    shieldAllies: {
        name: "群体护盾",
        id: SkillEnum.shieldAllies,
        cooldown: 9.0,
        effect: (self, target, log) => {
            const teamComp = self.getComponent("TeamComponent");
            if (!teamComp) return [];
            
            const allies = teamComp.team === "hero" 
                ? TeamRef.herosRef 
                : TeamRef.monstersRef;
            
            log(`🛡️ ${self.name} 为队友施加护盾！`);
            
            // 为所有队友添加护盾Buff
            for (let ally of allies) {
                const buffComp = BuffFactory.create("shield");
                if (buffComp) {
                    BuffSystem.addBuff(ally, buffComp, log);
                }
            }
            
            return [];
        }
    }
};

module.exports = {
    SkillEnum: SkillEnum,
    SkillConfig: SkillConfig
};

