// const Character = require("./Character");
// class Monster extends Character {
//     constructor(args) {
//         super(args);//调用父类构造函数
//         this.team = "monster";
//     }

// }

// module.exports = Monster;

const Entity = require("./Entity");
const StatsComponent = require("./StatsComponent");
const CombatComponent = require("./CombatComponent");
const TeamComponent = require("./TeamComponent");
const SkillComponent = require("./SkillComponent");

class Monster extends Entity {
    constructor(args) {
        super();
        this.name = args.name;
        this
            .addComponent(new StatsComponent(args))
            .addComponent(new TeamComponent("monster"))
            .addComponent(new CombatComponent())
            .addComponent(new SkillComponent(args.skills || []));
    }
}

module.exports = Monster;