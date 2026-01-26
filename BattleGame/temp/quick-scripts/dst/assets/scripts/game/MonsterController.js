
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/game/MonsterController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZVxcTW9uc3RlckNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpbml0IiwiYXJncyIsInN0YXRzIiwiZ2V0Q29tcG9uZW50IiwidGVhbSIsInNraWxscyIsIm5vZGUiLCJuYW1lIiwiaHAiLCJhdHRhY2siLCJkZWZlbnNlIiwic3BlZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0VBRWRDLElBQUksV0FBQUEsS0FBQ0MsSUFBSSxFQUFFO0lBQ1AsSUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0MsWUFBWSxDQUFDLGdCQUFnQixDQUFDO0lBQ2pELElBQU1DLElBQUksR0FBRyxJQUFJLENBQUNELFlBQVksQ0FBQyxlQUFlLENBQUM7SUFDL0MsSUFBTUUsTUFBTSxHQUFHLElBQUksQ0FBQ0YsWUFBWSxDQUFDLGdCQUFnQixDQUFDO0lBRWxELElBQUksQ0FBQ0csSUFBSSxDQUFDQyxJQUFJLEdBQUdOLElBQUksQ0FBQ00sSUFBSTtJQUMxQkwsS0FBSyxDQUFDTSxFQUFFLEdBQUdQLElBQUksQ0FBQ08sRUFBRTtJQUNsQk4sS0FBSyxDQUFDTyxNQUFNLEdBQUdSLElBQUksQ0FBQ1EsTUFBTTtJQUMxQlAsS0FBSyxDQUFDUSxPQUFPLEdBQUdULElBQUksQ0FBQ1MsT0FBTztJQUM1QlIsS0FBSyxDQUFDUyxLQUFLLEdBQUdWLElBQUksQ0FBQ1UsS0FBSztJQUN4Qk4sTUFBTSxDQUFDTCxJQUFJLENBQUNDLElBQUksQ0FBQ0ksTUFBTSxJQUFJLEVBQUUsQ0FBQztJQUM5QkQsSUFBSSxDQUFDQSxJQUFJLEdBQUcsU0FBUztFQUN6QjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHt9LFxyXG5cclxuICAgIGluaXQoYXJncykge1xyXG4gICAgICAgIGNvbnN0IHN0YXRzID0gdGhpcy5nZXRDb21wb25lbnQoXCJTdGF0c0NvbXBvbmVudFwiKTtcclxuICAgICAgICBjb25zdCB0ZWFtID0gdGhpcy5nZXRDb21wb25lbnQoXCJUZWFtQ29tcG9uZW50XCIpO1xyXG4gICAgICAgIGNvbnN0IHNraWxscyA9IHRoaXMuZ2V0Q29tcG9uZW50KFwiU2tpbGxDb21wb25lbnRcIik7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5uYW1lID0gYXJncy5uYW1lO1xyXG4gICAgICAgIHN0YXRzLmhwID0gYXJncy5ocDtcclxuICAgICAgICBzdGF0cy5hdHRhY2sgPSBhcmdzLmF0dGFjaztcclxuICAgICAgICBzdGF0cy5kZWZlbnNlID0gYXJncy5kZWZlbnNlO1xyXG4gICAgICAgIHN0YXRzLnNwZWVkID0gYXJncy5zcGVlZDtcclxuICAgICAgICBza2lsbHMuaW5pdChhcmdzLnNraWxscyB8fCBbXSk7XHJcbiAgICAgICAgdGVhbS50ZWFtID0gXCJtb25zdGVyXCI7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=