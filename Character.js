const mulberry32 = require("./random");
const rand = mulberry32(122333);
const { normalAttack } = require("./skill");
const BuffManager = require("./BuffManager");

class Character {
    constructor(args) {
        this.name = args.name;
        this.hp = args.hp || 100;
        this.attack = args.attack || 1;
        this.defense = args.defense || 1;
        this.speed = args.speed || 1;
        this.immune = args.immune || 0;//免伤率

        this.attackInterval = 1 / this.speed;
        this.attackTimer = 0;
        // this.normalAttackCooldown = this.attackInterval;
        this.skills = args.skills ? [...args.skills] : [];//技能列表

        this.skillTimers = {};//技能冷却时间
        this.skills.forEach(s => (this.skillTimers[s.name] = 0));//初始化技能冷却时间

        this.miss = args.miss || 0;//miss概率
        this.crit = args.crit || 0;//暴击概率

        this.stunned = 0;//眩晕状态
        this.stunTimer = 0;//眩晕时间
        this.team = null;

        this.buffManager = new BuffManager(this);
    }//定义角色属性


    // isDead() {
    //     return this.hp <= 0;
    // }//Character 类的实例方法用来判断角色是否死亡


}



module.exports = Character;//导出Character类