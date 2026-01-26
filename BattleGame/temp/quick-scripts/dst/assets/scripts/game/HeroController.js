
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/game/HeroController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZVxcSGVyb0NvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpbml0IiwiYXJncyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0cyIsImdldENvbXBvbmVudCIsInRlYW0iLCJza2lsbHMiLCJub2RlIiwibmFtZSIsImhwIiwiYXR0YWNrIiwiZGVmZW5zZSIsInNwZWVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFLENBQUMsQ0FBQztFQUVkQyxJQUFJLFdBQUFBLEtBQUNDLElBQUksRUFBRTtJQUVQQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFFM0IsSUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0MsWUFBWSxDQUFDLGdCQUFnQixDQUFDO0lBQ2pELElBQU1DLElBQUksR0FBRyxJQUFJLENBQUNELFlBQVksQ0FBQyxlQUFlLENBQUM7SUFDL0MsSUFBTUUsTUFBTSxHQUFHLElBQUksQ0FBQ0YsWUFBWSxDQUFDLGdCQUFnQixDQUFDO0lBRWxELElBQUksQ0FBQ0csSUFBSSxDQUFDQyxJQUFJLEdBQUdSLElBQUksQ0FBQ1EsSUFBSTtJQUMxQkwsS0FBSyxDQUFDTSxFQUFFLEdBQUdULElBQUksQ0FBQ1MsRUFBRTtJQUNsQk4sS0FBSyxDQUFDTyxNQUFNLEdBQUdWLElBQUksQ0FBQ1UsTUFBTTtJQUMxQlAsS0FBSyxDQUFDUSxPQUFPLEdBQUdYLElBQUksQ0FBQ1csT0FBTztJQUM1QlIsS0FBSyxDQUFDUyxLQUFLLEdBQUdaLElBQUksQ0FBQ1ksS0FBSztJQUN4Qk4sTUFBTSxDQUFDUCxJQUFJLENBQUNDLElBQUksQ0FBQ00sTUFBTSxJQUFJLEVBQUUsQ0FBQztJQUM5QkQsSUFBSSxDQUFDQSxJQUFJLEdBQUcsTUFBTTtFQUN0QjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHt9LFxyXG5cclxuICAgIGluaXQoYXJncykge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIn5+fmhlcm8gaW5pdFwiKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhdHMgPSB0aGlzLmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xyXG4gICAgICAgIGNvbnN0IHRlYW0gPSB0aGlzLmdldENvbXBvbmVudChcIlRlYW1Db21wb25lbnRcIik7XHJcbiAgICAgICAgY29uc3Qgc2tpbGxzID0gdGhpcy5nZXRDb21wb25lbnQoXCJTa2lsbENvbXBvbmVudFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm5hbWUgPSBhcmdzLm5hbWU7XHJcbiAgICAgICAgc3RhdHMuaHAgPSBhcmdzLmhwO1xyXG4gICAgICAgIHN0YXRzLmF0dGFjayA9IGFyZ3MuYXR0YWNrO1xyXG4gICAgICAgIHN0YXRzLmRlZmVuc2UgPSBhcmdzLmRlZmVuc2U7XHJcbiAgICAgICAgc3RhdHMuc3BlZWQgPSBhcmdzLnNwZWVkO1xyXG4gICAgICAgIHNraWxscy5pbml0KGFyZ3Muc2tpbGxzIHx8IFtdKTtcclxuICAgICAgICB0ZWFtLnRlYW0gPSBcImhlcm9cIjtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==