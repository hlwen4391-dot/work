"use strict";
cc._RF.push(module, '0bb0dexc+ZGsZRCPTPh4SWG', 'MonsterController');
// Scripts/game/MonsterController.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  init: function init(args) {
    var stats = this.getComponent("StatsComponent");
    var team = this.getComponent("TeamComponent");
    var skills = this.getComponent("SkillComponent");
    this.node.name = args.name;
    stats.hp = args.hp;
    stats.attack = args.attack;
    stats.defense = args.defense;
    stats.speed = args.speed;
    skills.init(args.skills || []);
    team.team = "monster";
  }
});

cc._RF.pop();