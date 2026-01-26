"use strict";
cc._RF.push(module, 'cfbedUbGBNIMZ17ifEv0mBs', 'BattleLoggers');
// Scripts/system/BattleLoggers.js

"use strict";

var BattleLoggers = cc.Class({
  name: "BattleLoggers",
  properties: {
    logs: {
      "default": [],
      visible: false
    }
  },
  log: function log(msg) {
    this.logs.push(msg);
    cc.log(msg);
  }
});
module.exports = BattleLoggers;

cc._RF.pop();