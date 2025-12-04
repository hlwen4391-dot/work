const { Character, rand } = require("./Character");

class Hero extends Character {
    constructor(args) {
        super(args);//调用父类构造函数
        this.miss = args.miss || 0;//怪物攻击有45%的概率miss
        this.crit = args.crit || 0;//怪物攻击有10%的概率暴击
        this.team = "hero";
    }
    // attackTarget(target, log) {
    //     if (this.isDead()) {
    //         return;
    //     }

    //     if (this.stunned > 0) {
    //         log(`${this.name}被眩晕，无法行动！`);
    //         this.stunned--;
    //         return;
    //     }

    //     if (rand() < this.miss) {
    //         log(`${this.name}攻击${target.name}失败！`);
    //         return;
    //     }

    //     if (this.tryCastSkill(target, log)) return;
    //     super.attackTarget(target, log);
    // }

}

module.exports = Hero;