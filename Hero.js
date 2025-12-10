// 

const Entity = require("./Entity");
const StatsComponent = require("./StatsComponent");
const CombatComponent = require("./CombatComponent");
const TeamComponent = require("./TeamComponent");
const SkillComponent = require("./SkillComponent");

class Hero extends Entity {
    constructor(args) {
        super();
        this.name = args.name;
        this
            .addComponent(new StatsComponent(args))
            .addComponent(new TeamComponent("hero"))
            .addComponent(new CombatComponent())
            .addComponent(new SkillComponent(args.skills || []));//添加技能组件
    }
}

module.exports = Hero;