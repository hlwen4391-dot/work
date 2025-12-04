//旧版主类Character
const mulberry32 = require("./random");
const rand = mulberry32(122333);

class Character {
    constructor(args) {
        this.name = args.name;
        this.hp = args.hp || 100;
        this.attack = args.attack || 1;
        this.defense = args.defense || 1;
        this.speed = args.speed || 1;
        this.immune = args.immune || 0;//免伤率

        this.attackDelay = 1000 / this.speed;

        this.attackWindow = args.attackWindow || 0;//攻击前摇时间
        this.attackCooldown = args.attackCooldown || 0;//攻击后摇时间

        this.nextAttackTime = 0;//下次攻击时间

        this.skills = args.skills || [];
        this.stunned = 0;//眩晕状态
    }//定义角色属性


    isDead() {
        return this.hp <= 0;
    }//Character 类的实例方法用来判断角色是否死亡

}

module.exports = { Character, rand };