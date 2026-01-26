
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/system/BattleLoggers.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxCYXR0bGVMb2dnZXJzLmpzIl0sIm5hbWVzIjpbIkJhdHRsZUxvZ2dlcnMiLCJjYyIsIkNsYXNzIiwibmFtZSIsInByb3BlcnRpZXMiLCJsb2dzIiwidmlzaWJsZSIsImxvZyIsIm1zZyIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBR0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDekJDLElBQUksRUFBRSxlQUFlO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsSUFBSSxFQUFFO01BQ0YsV0FBUyxFQUFFO01BQ1hDLE9BQU8sRUFBRTtJQUNiO0VBQ0osQ0FBQztFQUVEQyxHQUFHLFdBQUFBLElBQUNDLEdBQUcsRUFBRTtJQUNMLElBQUksQ0FBQ0gsSUFBSSxDQUFDSSxJQUFJLENBQUNELEdBQUcsQ0FBQztJQUNuQlAsRUFBRSxDQUFDTSxHQUFHLENBQUNDLEdBQUcsQ0FBQztFQUNmO0FBQ0osQ0FBQyxDQUFDO0FBRUZFLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHWCxhQUFhIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQmF0dGxlTG9nZ2VycyA9IGNjLkNsYXNzKHtcclxuICAgIG5hbWU6IFwiQmF0dGxlTG9nZ2Vyc1wiLFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsb2dzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbG9nKG1zZykge1xyXG4gICAgICAgIHRoaXMubG9ncy5wdXNoKG1zZyk7XHJcbiAgICAgICAgY2MubG9nKG1zZyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCYXR0bGVMb2dnZXJzOyJdfQ==