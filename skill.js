const stunSkill = {
    name: "盾击",
    cooldown: 1000,
    lastUse: 0,
    effect: (self, target, log) => {
        const dmg = Math.max(self.attack * 1.5 - target.defense, 1);
        target.hp -= dmg;
        target.stunned = 1;//眩晕1回合
        log(`${self.name}对${target.name}造成了${dmg}点伤害，并眩晕了${target.name}1回合`);
    }
}


const fireball = {
    name: "火球术",
    cooldown: 1500,//技能冷却时间
    lastUse: 0,
    effect: (self, target, log) => {
        const dmg = 40;
        target.hp -= dmg;
        log(`${self.name}对${target.name}造成了${dmg}点真实伤害`);
    }
}

const rageSkill = {
    name: "狂暴",
    cooldown: 4000,
    lastUse: 0,
    effect: (self, target, log) => {
        self.attack += 5;
        log(`${self.name}进入了狂暴状态，攻击力增加了5点`);
    }
}



module.exports = { stunSkill, fireball, rageSkill };