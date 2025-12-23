cc.Class({
    extends: cc.Component,

    properties: {},

    init(args) {

        console.log("~~~hero init");

        const stats = this.getComponent("StatsComponent");
        const team = this.getComponent("TeamComponent");
        const skills = this.getComponent("SkillComponent");

        this.node.name = args.name;
        stats.hp = args.hp;
        stats.attack = args.attack;
        stats.defense = args.defense;
        stats.speed = args.speed;
        skills.init(args.skills || []);
        team.team = "hero";
    }
});
