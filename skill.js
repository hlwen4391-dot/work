const BuffSystem = require("./BuffSystem");
const { SkillEnum } = require("./config");
const TeamRef = require("./TeamRef");
const StatsComponent = require("./StatsComponent");
const TeamComponent = require("./TeamComponent");
const BuffFactory = require("./BuffFactory");
const stunSkill = {
    name: "盾击",
    cooldown: 4.0,
    id: SkillEnum.stunSkill,
    effect: (self, target, log) => {
        const atk = self.get(StatsComponent);
        const def = target.get(StatsComponent);

        const dmg = Math.max(atk.attack - def.defense, 1);//
        return [
            { type: "damage", value: dmg },//伤害效果
            { type: "applyBuff", buff: "stun" }
        ];
    }//回调函数
};


const fireball = {
    name: "火球术",
    cooldown: 3.0,//技能冷却时间
    id: SkillEnum.fireball,
    effect: (self, target) => {
        return [
            { type: "damageTrue", value: 5 },
            { type: "applyBuff", buff: "burn" }//伤害效果
        ];

    }
};

const rageSkill = {
    name: "狂暴",
    id: SkillEnum.rageSkill,
    cooldown: 4.0,//技能冷却时间
    effect: (self, target, log, rand) => {
        return [
            { type: "applyBuffSelf", buff: "rage" }
        ];
    }
};

//战吼
const warCry = {
    name: "战吼",
    id: SkillEnum.warCry,
    cooldown: 10.0,
    effect: (self, target, log, rand) => {

        const atk = self.get(StatsComponent);
        const teamComp = self.get(TeamComponent);  // 获取队伍组件

        const allies = teamComp.team === "hero"
            ? TeamRef.herosRef
            : TeamRef.monstersRef;

        log(`${self.name}释放了战吼`);

        //添加战吼buff
        for (const ally of allies) {
            const buffComp = BuffFactory.create("warCry");
            BuffSystem.addBuff(ally, buffComp, log);
        }
        return [];
    }
};

const shieldAllies = {
    name: "群体护盾",
    id: SkillEnum.shieldAllies,
    cooldown: 9.0,
    effect: (self, target, log) => {

        const teamComp = self.get(TeamComponent);
        const allies = teamComp.team === "hero"
            ? TeamRef.herosRef
            : TeamRef.monstersRef;
        log(`${self.name}释放了群体护盾`);
        for (const ally of allies) {
            const buffComp = BuffFactory.create("shield");
            BuffSystem.addBuff(ally, buffComp, log);
        }
        return [];
    }
};
//普通攻击
const normalAttack = {
    name: "普通攻击",
    id: SkillEnum.normalAttack,
    cooldown: 1.0,
    effect: (self, target, log, rand) => {

        const atk = self.get(StatsComponent);
        const def = target.get(StatsComponent);
        let dmg = Math.max(atk.attack - def.defense, 1);

        //暴击
        if (rand() < atk.crit) {
            dmg *= 2;
            log(`${self.name}暴击了！`);
        }
        //免伤
        dmg *= (1 - def.immune);

        //扣血
        return [
            { type: "damage", value: dmg }
        ];
    }
};

module.exports = { stunSkill, fireball, rageSkill, normalAttack, warCry, shieldAllies };
