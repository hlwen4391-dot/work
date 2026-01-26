"use strict";
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