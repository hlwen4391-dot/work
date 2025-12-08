const BuffSystem = require("./BuffSystem");
const { SkillEnum } = require("./config");
const stunSkill = {
    name: "盾击",
    cooldown: 1.0,
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
    cooldown: 1.5,//技能冷却时间
    id: SkillEnum.fireball,
    effect: (self, target, log) => {
        const dmg = 40;
        target.hp -= dmg;
        log(`${self.name}对${target.name}造成了${dmg}点真实伤害`);
        BuffSystem.addbuff(target, "burn", log);//添加燃烧buff
    }
};

const rageSkill = {
    name: "狂暴",
    id: SkillEnum.rageSkill,
    cooldown: 4.0,
    effect: (self, target, log) => {
        self.attack += 5;
        log(`${self.name}进入了狂暴状态，攻击力增加了5点`);
    }
};

const normalAttack = {
    name: "普通攻击",
    id: SkillEnum.normalAttack,
    cooldown: 0,
    effect: (self, target, log) => {
        let dmg = Math.max(self.attack - target.defense, 1);

        //暴击
        if (Math.random() < self.crit) {
            dmg *= 2;
            log(`${self.name}暴击了！`);
        }
        //免伤
        dmg *= Math.floor(1 - target.immune);

        //扣血
        target.hp -= dmg;
        log(`${self.name}对${target.name}造成了${dmg}点伤害`);
    }
};


// const burnBuff = new Buff({
//     name: "燃烧",
//     duration: 10,
//     interval: 1,
//     onTick: (target, log) => {
//         let dmg = 5;
//         target.hp -= dmg;
//         log(`${target.name}燃烧，每秒损失${dmg}点燃烧伤害`);
//     }
// });



module.exports = { stunSkill, fireball, rageSkill, normalAttack };