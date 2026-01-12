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
    beastRage: 7,     // 兽化狂暴
    warCry: 5,        // 战吼
    shieldAllies: 6,  // 群体护盾
    healAllies: 9,    // 群体治疗
    cleanseAllies: 10, // 净化队友
    ultimateSkill: 8  // 大招（需要怒气值满）
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
        cooldown: 0.5,  // 缩短冷却时间以加快战斗节奏
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
        cooldown: 2.5,  // 缩短冷却时间以加快战斗节奏
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
        cooldown: 1.5,  // 缩短冷却时间以加快战斗节奏
        effect: (self, target, log) => {
            log(`🔥 ${self.name} 释放火球术！`);
            return [
                { type: "damageTrue", value: 5 },
                { type: "applyBuff", buff: "burn" }
            ];
        }
    },

    // 狂暴 - 自身增益
    // rageSkill: {
    //     name: "狂暴",
    //     id: SkillEnum.rageSkill,
    //     cooldown: 4.0,
    //     effect: (self, target, log) => {
    //         log(`😡 ${self.name} 进入狂暴状态！`);
    //         return [
    //             { type: "applyBuffSelf", buff: "rage" }
    //         ];
    //     }
    // },

    // 兽化狂暴 - 更强的自身增益，带有酷炫特效
    beastRage: {
        name: "兽化狂暴",
        id: SkillEnum.beastRage,
        cooldown: 4.0,  // 缩短冷却时间以加快战斗节奏
        effect: (self, target, log) => {
            log(`🐺 ${self.name} 进入兽化狂暴状态！`);
            return [
                { type: "applyBuffSelf", buff: "rage" }
            ];
        }
    },

    // 战吼 - 群体增益（可以作为大招）
    warCry: {
        name: "战吼",
        id: SkillEnum.warCry,
        cooldown: 5.0,  // 缩短冷却时间以加快战斗节奏
        requireRage: 60,  // 设置为0表示普通技能，
        effect: (self, target, log) => {
            const teamComp = self.getComponent("TeamComponent");
            if (!teamComp) return [];

            const allies = teamComp.team === "hero"
                ? TeamRef.herosRef
                : TeamRef.monstersRef;

            log(`📢 ${self.name} 发出战吼，鼓舞队友！`);

            // 启动持续波纹效果（在施法者身上）
            const scene = cc.director.getScene();
            if (scene) {
                const skillEffectPlayer = scene.getComponentInChildren("SkillEffectPlayer");
                if (skillEffectPlayer) {
                    skillEffectPlayer._startWarCryContinuousWaves(self);
                    // 3秒后自动停止持续波纹（Buff持续时间）
                    skillEffectPlayer.scheduleOnce(() => {
                        skillEffectPlayer._stopWarCryContinuousWaves(self);
                    }, 3.0);
                }
            }

            // 为所有队友添加战吼Buff（传递施法者self）
            for (let ally of allies) {
                const buffComp = BuffFactory.create("warCry");
                if (buffComp) {
                    BuffSystem.addBuff(ally, buffComp, log, null, self);
                }
            }

            return [];
        }
    },

    // 群体护盾 - 为队友提供护盾
    shieldAllies: {
        name: "群体护盾",
        id: SkillEnum.shieldAllies,
        cooldown: 3.0,  // 缩短冷却时间以加快战斗节奏
        requireRage: 60,
        effect: (self, target, log) => {
            const teamComp = self.getComponent("TeamComponent");
            if (!teamComp) return [];

            const allies = teamComp.team === "hero"
                ? TeamRef.herosRef
                : TeamRef.monstersRef;

            log(`🛡️ ${self.name} 为队友施加护盾！`);

            // 为所有队友添加护盾Buff（传递施法者self）
            for (let ally of allies) {
                const buffComp = BuffFactory.create("shield");
                if (buffComp) {
                    BuffSystem.addBuff(ally, buffComp, log, null, self);
                }
            }

            return [];
        }
    },

    // 群体治疗 - 持续恢复己方阵营所有英雄的生命值
    healAllies: {
        name: "治疗术",
        id: SkillEnum.healAllies,
        cooldown: 3.5,  // 缩短冷却时间以加快战斗节奏
        requireRage: 60,
        effect: (self, target, log) => {
            const teamComp = self.getComponent("TeamComponent");
            if (!teamComp) return [];

            const allies = teamComp.team === "hero"
                ? TeamRef.herosRef
                : TeamRef.monstersRef;

            log(`💚 ${self.name} 释放群体治疗术！`);

            // 为所有队友添加持续恢复Buff（每秒恢复10点，持续3秒）
            const events = [];

            for (let ally of allies) {
                const allyStats = ally.getComponent("StatsComponent");
                if (allyStats && !allyStats.isDead()) {
                    // 添加持续恢复Buff（指定目标）
                    events.push({
                        type: "applyBuff",
                        buff: "healOverTime",
                        target: ally  // 指定目标单位
                    });
                }
            }

            return events;
        }
    },

    // 净化术 - 清除己方阵营所有单位的负面Buff
    cleanseAllies: {
        name: "净化术",
        id: SkillEnum.cleanseAllies,
        cooldown: 4.0,  // 缩短冷却时间以加快战斗节奏
        requireRage: 60,//需要怒气值满才能释放
        effect: (self, target, log) => {
            const teamComp = self.getComponent("TeamComponent");
            if (!teamComp) return [];

            const allies = teamComp.team === "hero"
                ? TeamRef.herosRef
                : TeamRef.monstersRef;

            log(`🌟 ${self.name} 释放净化术！`);

            // 定义负面Buff列表（需要被清除的Buff）
            const negativeBuffs = ["燃烧", "眩晕"];

            // 为所有队友（包括自己）清除负面Buff
            const events = [];
            const allTargets = [...allies, self];  // 包括自己和所有队友

            for (let ally of allTargets) {
                if (!ally || !ally.isValid) continue;

                const allyStats = ally.getComponent("StatsComponent");
                if (allyStats && !allyStats.isDead()) {
                    // 添加清除负面Buff事件
                    events.push({
                        type: "removeNegativeBuffs",
                        target: ally,
                        buffNames: negativeBuffs
                    });
                }
            }

            return events;
        }
    }

};

module.exports = {
    SkillEnum: SkillEnum,
    SkillConfig: SkillConfig
};

