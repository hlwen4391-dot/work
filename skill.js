const BuffSystem = require("./BuffSystem");
const { SkillEnum } = require("./config");
const TeamRef = require("./TeamRef");
const StatsComponent = require("./StatsComponent");
const stunSkill = {
    name: "盾击",
    cooldown: 4.0,
    id: SkillEnum.stunSkill,
    effect: (self, target, log) => {
        const atk = self.get(StatsComponent);
        const def = target.get(StatsComponent);

        const dmg = Math.max(atk.attack - def.defense, 1);
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
    cooldown: 2.0,
    effect: (self) => {
        return [
            { type: "applyBuff", buff: "rage" }
        ];
    }
};

//战吼
const warCry = {
    name: "战吼",
    id: SkillEnum.warCry,
    cooldown: 10.0,

    effect: (self, target, log) => {

        log(`${self.name}发出了战吼`);
        const alllies = self.team === "hero" ? TeamRef.herosRef : TeamRef.monstersRef;

        return alllies.map(ally => ({
            type: "applyBuffTarget",
            target: ally,
            buff: "warCry"
        }));
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
        let dmg = Math.max(self.attack - target.defense, 1);

        //暴击
        if (rand() < self.crit) {
            dmg *= 2;
            log(`${self.name}暴击了！`);
        }
        //免伤
        dmg *= (1 - target.immune);

        //扣血
        return [
            { type: "damage", value: dmg }
        ];
    }
};

module.exports = { stunSkill, fireball, rageSkill, normalAttack, warCry };