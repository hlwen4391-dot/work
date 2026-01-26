"use strict";
cc._RF.push(module, '6fea3WN1c5JyKwqgvnJC9PY', 'CombatComponent');
// Scripts/ecs/CombatComponent.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    lastDamage: {
      "default": 0,
      type: cc.Integer,
      readonly: true,
      tooltip: "上次受到的伤害（只读）"
    }
  }
});

cc._RF.pop();