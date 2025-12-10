const BuffSystem = require("./BuffSystem");
const { SkillEnum } = require("./config");
const TeamRef = require("./TeamRef");
const stunSkill = {
    name: "盾击",
    cooldown: 4.0,
    id: SkillEnum.stunSkill,
    effect: (self, target, log) => {
        const dmg = Math.max(self.attack * 1.5 - target.defense, 1);
        target.hp -= dmg;
        log(`${self.name}对${target.name}造成了${dmg}点伤害`);
        BuffSystem.addbuff(target, "stun", log);//添加眩晕buff
    }//回调函数
};


const fireball = {
    name: "火球术",
    cooldown: 3.0,//技能冷却时间
    id: SkillEnum.fireball,
    effect: (self, target, log) => {
        const dmg = 5;
        target.hp -= dmg;
        log(`${self.name}对${target.name}造成了${dmg}点真实伤害`);
        BuffSystem.addbuff(target, "burn", log);//添加燃烧buff
    }
};

const rageSkill = {
    name: "狂暴",
    id: SkillEnum.rageSkill,
    cooldown: 2.0,
    effect: (self, target, log) => {
        BuffSystem.addbuff(self, "rage", log);
        log(`${self.name}进入了狂暴状态`);
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

        alllies.forEach(ally => {
            BuffSystem.addbuff(ally, "warCry", log);
        });
    }
};

//普通攻击
const normalAttack = {
    name: "普通攻击",
    id: SkillEnum.normalAttack,
    cooldown: 1.0,
    effect: (self, target, log, rand) => {
        let dmg = Math.max(self.attack - target.defense, 1);

        //暴击
        if (rand() < self.crit) {
            dmg *= 2;
            log(`${self.name}暴击了！`);
        }
        //免伤
        dmg *= (1 - target.immune);

        //扣血
        target.hp -= dmg;
        log(`${self.name}对${target.name}造成了${dmg}点伤害`);
    }
};

module.exports = { stunSkill, fireball, rageSkill, normalAttack, warCry };