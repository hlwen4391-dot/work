"use strict";
cc._RF.push(module, '0076cyuiS5BapBEIa6ufPi/', 'TeamComponent');
// Scripts/ecs/TeamComponent.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    team: {
      "default": "",
      type: cc.String,
      tooltip: "队伍名称（hero/monster）"
    }
  }
});

cc._RF.pop();