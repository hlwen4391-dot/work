"use strict";
cc._RF.push(module, 'b278dEtbWFDZK5iWYTm0Iyp', 'BuffRegistry');
// Scripts/system/BuffRegistry.js

"use strict";

/**
 * Buff数据库/注册表
 * 定义所有Buff的配置数据
 */
var BuffRegistry = {
  // 燃烧Buff - 持续伤害
  burn: {
    name: "燃烧",
    duration: 3,
    //持续时间
    interval: 1,
    // 每秒执行一次
    onTick: function onTick(target, log) {
      var dmg = 10;
      var stats = target.getComponent("StatsComponent");
      if (stats) {
        stats.hp -= dmg;
        // 更新血条显示（燃烧伤害显示为普通伤害）
        stats.updateHealthBar(dmg, 'normal');
        log("\uD83D\uDD25 " + target.name + " \u53D7\u5230\u71C3\u70E7\u6548\u679C\uFF0C\u635F\u5931 " + dmg + " \u70B9HP");
      }
    }
  },
  // 眩晕Buff - 控制效果
  stun: {
    name: "眩晕",
    duration: 1,
    status: {
      stun: true
    },
    onApply: function onApply(target, log) {
      log("\uD83D\uDE35 " + target.name + " \u88AB\u7729\u6655\u4E86\uFF01");

      // 显示眩晕标志
      var stunIcon = target.getComponent("StunIcon");
      if (!stunIcon) {
        stunIcon = target.addComponent("StunIcon");
      }
      stunIcon.showStun();
    },
    onExpire: function onExpire(target, log) {
      log("\u2728 " + target.name + " \u4ECE\u7729\u6655\u4E2D\u6062\u590D");

      // 隐藏眩晕标志
      var stunIcon = target.getComponent("StunIcon");
      if (stunIcon) {
        stunIcon.hideStun();
      }
    }
  },
  // 战吼Buff - 群体增益
  warCry: {
    name: "战吼",
    duration: 3,
    modifiers: {
      attack: 10,
      speed: 5
    },
    onApply: function onApply(target, log) {
      log("\uD83D\uDCE2 " + target.name + " \u53D7\u5230\u6218\u543C\u9F13\u821E\uFF0C\u653B\u51FB\u529B+" + this.modifiers.attack + "\uFF0C\u901F\u5EA6+" + this.modifiers.speed);
    },
    onExpire: function onExpire(target, log) {
      log(target.name + " \u6218\u543C\u6548\u679C\u7ED3\u675F");
    }
  },
  // 狂暴Buff - 攻击增益
  rage: {
    name: "狂暴",
    duration: 2,
    modifiers: {
      attack: 10
    },
    onApply: function onApply(target, log) {
      log("\uD83D\uDE21 " + target.name + " \u8FDB\u5165\u72C2\u66B4\u72B6\u6001\uFF0C\u653B\u51FB\u529B+" + this.modifiers.attack);
    },
    onExpire: function onExpire(target, log) {
      log(target.name + " \u72C2\u66B4\u72B6\u6001\u7ED3\u675F");

      // 移除兽化狂暴特效
      var scene = cc.director.getScene();
      if (scene) {
        var effectPlayer = scene.getComponentInChildren("SkillEffectPlayer");
        if (effectPlayer && effectPlayer.stopBeastRageEffect) {
          effectPlayer.stopBeastRageEffect(target);
        }
      }
    }
  },
  // 护盾Buff - 伤害吸收
  shield: {
    name: "护盾",
    duration: 2.5,
    //持续时间
    status: {},
    modifiers: {},
    shieldValue: 20,
    // 护盾值
    onApply: function onApply(target, log) {
      log("\uD83D\uDEE1\uFE0F " + target.name + " \u83B7\u5F97\u4E86 " + this.shieldValue + " \u70B9\u62A4\u76FE");
    },
    onExpire: function onExpire(target, log) {
      log(target.name + " \u62A4\u76FE\u6548\u679C\u7ED3\u675F");
    }
  },
  // 持续恢复Buff - 持续恢复生命值
  healOverTime: {
    name: "持续恢复",
    duration: 3.0,
    // 持续3秒
    interval: 1.0,
    // 每秒执行一次
    healPerTick: 15,
    // 每次恢复10点HP
    onTick: function onTick(target, log) {
      var stats = target.getComponent("StatsComponent");
      if (stats && !stats.isDead()) {
        var healAmount = 10;
        // 计算实际恢复量（不能超过最大HP）
        var actualHeal = Math.min(healAmount, stats.maxHp - stats.hp);
        if (actualHeal > 0) {
          // 恢复HP
          stats.hp += actualHeal;
          stats.hp = Math.min(stats.hp, stats.maxHp); // 确保不超过最大HP

          // 更新血条显示（使用'heal'类型）
          stats.updateHealthBar(actualHeal, 'heal');
          log("\uD83D\uDC9A " + target.name + " \u6301\u7EED\u6062\u590D " + actualHeal + " \u70B9\u751F\u547D\u503C (\u5F53\u524DHP: " + stats.hp + "/" + stats.maxHp + ")");
        }
      }
    },
    onApply: function onApply(target, log) {
      log("\uD83D\uDC9A " + target.name + " \u5F00\u59CB\u6301\u7EED\u6062\u590D\u751F\u547D\u503C\uFF08\u6BCF\u79D2\u6062\u590D" + this.healPerTick + "\u70B9\uFF0C\u6301\u7EED3\u79D2\uFF09");
    },
    onExpire: function onExpire(target, log) {
      log("\uD83D\uDC9A " + target.name + " \u6301\u7EED\u6062\u590D\u6548\u679C\u7ED3\u675F");
    }
  }
};
module.exports = BuffRegistry;

cc._RF.pop();