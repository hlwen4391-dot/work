"use strict";
cc._RF.push(module, '0b0fdLUhRdIQJPLw1447c7w', 'HeroController');
// Scripts/game/HeroController.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  init: function init(args) {
    console.log("~~~hero init");
    var stats = this.getComponent("StatsComponent");
    var team = this.getComponent("TeamComponent");
    var skills = this.getComponent("SkillComponent");
    this.node.name = args.name;
    stats.hp = args.hp;
    stats.attack = args.attack;
    stats.defense = args.defense;
    stats.speed = args.speed;
    skills.init(args.skills || []);
    team.team = "hero";
  }
});

cc._RF.pop();