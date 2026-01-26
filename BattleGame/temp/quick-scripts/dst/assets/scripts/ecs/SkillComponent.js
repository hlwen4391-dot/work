
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ecs/SkillComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42657XQ2mBHjZiMs6/drymA', 'SkillComponent');
// Scripts/ecs/SkillComponent.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    skills: {
      "default": function _default() {
        return [];
      },
      visible: false
    },
    cooldowns: {
      "default": function _default() {
        return {};
      },
      visible: false
    }
  },
  init: function init(skillConfig) {
    var _this = this;
    if (skillConfig === void 0) {
      skillConfig = [];
    }
    cc.log("[SkillComponent] \u521D\u59CB\u5316\u6280\u80FD\u914D\u7F6E\uFF0C\u6570\u91CF=" + skillConfig.length);

    // 打印原始配置用于调试
    skillConfig.forEach(function (s, index) {
      cc.log("[SkillComponent] \u539F\u59CB\u6280\u80FD[" + index + "]: name=" + s.name + ", id=" + s.id + ", requireRage=" + s.requireRage + ", requireRage\u7C7B\u578B=" + typeof s.requireRage);
    });
    this.skills = skillConfig.map(function (s) {
      var skill = {
        id: s.id,
        skillName: s.name,
        cooldown: s.cooldown,
        effect: s.effect,
        requireRage: s.requireRage !== undefined && s.requireRage !== null ? s.requireRage : 0,
        // 需要怒气值（0表示不需要，>0表示需要怒气值满才能释放）
        isUltimate: s.requireRage !== undefined && s.requireRage !== null && s.requireRage > 0 // 是否是大招
      };

      cc.log("[SkillComponent] \u6620\u5C04\u540E\u6280\u80FD: name=" + skill.skillName + ", id=" + skill.id + ", requireRage=" + skill.requireRage + ", isUltimate=" + skill.isUltimate);
      return skill;
    });
    this.cooldowns = {};
    this.skills.forEach(function (s) {
      return _this.cooldowns[s.id] = 0;
    });
    cc.log("[SkillComponent] \u521D\u59CB\u5316\u5B8C\u6210\uFF0C\u6280\u80FD\u6570\u91CF=" + this.skills.length);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxTa2lsbENvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNraWxscyIsIl9kZWZhdWx0IiwidmlzaWJsZSIsImNvb2xkb3ducyIsImluaXQiLCJza2lsbENvbmZpZyIsIl90aGlzIiwibG9nIiwibGVuZ3RoIiwiZm9yRWFjaCIsInMiLCJpbmRleCIsIm5hbWUiLCJpZCIsInJlcXVpcmVSYWdlIiwibWFwIiwic2tpbGwiLCJza2lsbE5hbWUiLCJjb29sZG93biIsImVmZmVjdCIsInVuZGVmaW5lZCIsImlzVWx0aW1hdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsTUFBTSxFQUFFO01BQUUsV0FBUyxTQUFBQyxTQUFBO1FBQUEsT0FBTSxFQUFFO01BQUE7TUFBRUMsT0FBTyxFQUFFO0lBQU0sQ0FBQztJQUM3Q0MsU0FBUyxFQUFFO01BQUUsV0FBUyxTQUFBRixTQUFBO1FBQUEsT0FBTyxDQUFDLENBQUM7TUFBQSxDQUFDO01BQUVDLE9BQU8sRUFBRTtJQUFNO0VBQ3JELENBQUM7RUFFREUsSUFBSSxXQUFBQSxLQUFDQyxXQUFXLEVBQU87SUFBQSxJQUFBQyxLQUFBO0lBQUEsSUFBbEJELFdBQVc7TUFBWEEsV0FBVyxHQUFHLEVBQUU7SUFBQTtJQUNqQlQsRUFBRSxDQUFDVyxHQUFHLG9GQUFnQ0YsV0FBVyxDQUFDRyxNQUFNLENBQUc7O0lBRTNEO0lBQ0FILFdBQVcsQ0FBQ0ksT0FBTyxDQUFDLFVBQUNDLENBQUMsRUFBRUMsS0FBSyxFQUFLO01BQzlCZixFQUFFLENBQUNXLEdBQUcsZ0RBQTBCSSxLQUFLLGdCQUFXRCxDQUFDLENBQUNFLElBQUksYUFBUUYsQ0FBQyxDQUFDRyxFQUFFLHNCQUFpQkgsQ0FBQyxDQUFDSSxXQUFXLGtDQUFtQixPQUFPSixDQUFDLENBQUNJLFdBQVcsQ0FBRztJQUM5SSxDQUFDLENBQUM7SUFFRixJQUFJLENBQUNkLE1BQU0sR0FBR0ssV0FBVyxDQUFDVSxHQUFHLENBQUMsVUFBQUwsQ0FBQyxFQUFJO01BQy9CLElBQU1NLEtBQUssR0FBRztRQUNWSCxFQUFFLEVBQUVILENBQUMsQ0FBQ0csRUFBRTtRQUNSSSxTQUFTLEVBQUVQLENBQUMsQ0FBQ0UsSUFBSTtRQUNqQk0sUUFBUSxFQUFFUixDQUFDLENBQUNRLFFBQVE7UUFDcEJDLE1BQU0sRUFBRVQsQ0FBQyxDQUFDUyxNQUFNO1FBQ2hCTCxXQUFXLEVBQUdKLENBQUMsQ0FBQ0ksV0FBVyxLQUFLTSxTQUFTLElBQUlWLENBQUMsQ0FBQ0ksV0FBVyxLQUFLLElBQUksR0FBSUosQ0FBQyxDQUFDSSxXQUFXLEdBQUcsQ0FBQztRQUFHO1FBQzNGTyxVQUFVLEVBQUdYLENBQUMsQ0FBQ0ksV0FBVyxLQUFLTSxTQUFTLElBQUlWLENBQUMsQ0FBQ0ksV0FBVyxLQUFLLElBQUksSUFBSUosQ0FBQyxDQUFDSSxXQUFXLEdBQUcsQ0FBRSxDQUFFO01BQzlGLENBQUM7O01BQ0RsQixFQUFFLENBQUNXLEdBQUcsNERBQWlDUyxLQUFLLENBQUNDLFNBQVMsYUFBUUQsS0FBSyxDQUFDSCxFQUFFLHNCQUFpQkcsS0FBSyxDQUFDRixXQUFXLHFCQUFnQkUsS0FBSyxDQUFDSyxVQUFVLENBQUc7TUFDM0ksT0FBT0wsS0FBSztJQUNoQixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNiLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDbkIsSUFBSSxDQUFDSCxNQUFNLENBQUNTLE9BQU8sQ0FBQyxVQUFBQyxDQUFDO01BQUEsT0FBSUosS0FBSSxDQUFDSCxTQUFTLENBQUNPLENBQUMsQ0FBQ0csRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUFBLEVBQUM7SUFFbERqQixFQUFFLENBQUNXLEdBQUcsb0ZBQWdDLElBQUksQ0FBQ1AsTUFBTSxDQUFDUSxNQUFNLENBQUc7RUFDL0Q7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgc2tpbGxzOiB7IGRlZmF1bHQ6ICgpID0+IFtdLCB2aXNpYmxlOiBmYWxzZSB9LFxyXG4gICAgICAgIGNvb2xkb3duczogeyBkZWZhdWx0OiAoKSA9PiAoe30pLCB2aXNpYmxlOiBmYWxzZSB9XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQoc2tpbGxDb25maWcgPSBbXSkge1xyXG4gICAgICAgIGNjLmxvZyhgW1NraWxsQ29tcG9uZW50XSDliJ3lp4vljJbmioDog73phY3nva7vvIzmlbDph489JHtza2lsbENvbmZpZy5sZW5ndGh9YCk7XHJcblxyXG4gICAgICAgIC8vIOaJk+WNsOWOn+Wni+mFjee9rueUqOS6juiwg+ivlVxyXG4gICAgICAgIHNraWxsQ29uZmlnLmZvckVhY2goKHMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhgW1NraWxsQ29tcG9uZW50XSDljp/lp4vmioDog71bJHtpbmRleH1dOiBuYW1lPSR7cy5uYW1lfSwgaWQ9JHtzLmlkfSwgcmVxdWlyZVJhZ2U9JHtzLnJlcXVpcmVSYWdlfSwgcmVxdWlyZVJhZ2Xnsbvlnos9JHt0eXBlb2Ygcy5yZXF1aXJlUmFnZX1gKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5za2lsbHMgPSBza2lsbENvbmZpZy5tYXAocyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNraWxsID0ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHMuaWQsXHJcbiAgICAgICAgICAgICAgICBza2lsbE5hbWU6IHMubmFtZSxcclxuICAgICAgICAgICAgICAgIGNvb2xkb3duOiBzLmNvb2xkb3duLFxyXG4gICAgICAgICAgICAgICAgZWZmZWN0OiBzLmVmZmVjdCxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVSYWdlOiAocy5yZXF1aXJlUmFnZSAhPT0gdW5kZWZpbmVkICYmIHMucmVxdWlyZVJhZ2UgIT09IG51bGwpID8gcy5yZXF1aXJlUmFnZSA6IDAsICAvLyDpnIDopoHmgJLmsJTlgLzvvIgw6KGo56S65LiN6ZyA6KaB77yMPjDooajnpLrpnIDopoHmgJLmsJTlgLzmu6HmiY3og73ph4rmlL7vvIlcclxuICAgICAgICAgICAgICAgIGlzVWx0aW1hdGU6IChzLnJlcXVpcmVSYWdlICE9PSB1bmRlZmluZWQgJiYgcy5yZXF1aXJlUmFnZSAhPT0gbnVsbCAmJiBzLnJlcXVpcmVSYWdlID4gMCkgIC8vIOaYr+WQpuaYr+Wkp+aLm1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYy5sb2coYFtTa2lsbENvbXBvbmVudF0g5pig5bCE5ZCO5oqA6IO9OiBuYW1lPSR7c2tpbGwuc2tpbGxOYW1lfSwgaWQ9JHtza2lsbC5pZH0sIHJlcXVpcmVSYWdlPSR7c2tpbGwucmVxdWlyZVJhZ2V9LCBpc1VsdGltYXRlPSR7c2tpbGwuaXNVbHRpbWF0ZX1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNraWxsO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvb2xkb3ducyA9IHt9O1xyXG4gICAgICAgIHRoaXMuc2tpbGxzLmZvckVhY2gocyA9PiB0aGlzLmNvb2xkb3duc1tzLmlkXSA9IDApO1xyXG5cclxuICAgICAgICBjYy5sb2coYFtTa2lsbENvbXBvbmVudF0g5Yid5aeL5YyW5a6M5oiQ77yM5oqA6IO95pWw6YePPSR7dGhpcy5za2lsbHMubGVuZ3RofWApO1xyXG4gICAgfVxyXG59KTtcclxuIl19