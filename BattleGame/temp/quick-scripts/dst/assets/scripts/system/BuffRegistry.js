
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/system/BuffRegistry.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxCdWZmUmVnaXN0cnkuanMiXSwibmFtZXMiOlsiQnVmZlJlZ2lzdHJ5IiwiYnVybiIsIm5hbWUiLCJkdXJhdGlvbiIsImludGVydmFsIiwib25UaWNrIiwidGFyZ2V0IiwibG9nIiwiZG1nIiwic3RhdHMiLCJnZXRDb21wb25lbnQiLCJocCIsInVwZGF0ZUhlYWx0aEJhciIsInN0dW4iLCJzdGF0dXMiLCJvbkFwcGx5Iiwic3R1bkljb24iLCJhZGRDb21wb25lbnQiLCJzaG93U3R1biIsIm9uRXhwaXJlIiwiaGlkZVN0dW4iLCJ3YXJDcnkiLCJtb2RpZmllcnMiLCJhdHRhY2siLCJzcGVlZCIsInJhZ2UiLCJzY2VuZSIsImNjIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImVmZmVjdFBsYXllciIsImdldENvbXBvbmVudEluQ2hpbGRyZW4iLCJzdG9wQmVhc3RSYWdlRWZmZWN0Iiwic2hpZWxkIiwic2hpZWxkVmFsdWUiLCJoZWFsT3ZlclRpbWUiLCJoZWFsUGVyVGljayIsImlzRGVhZCIsImhlYWxBbW91bnQiLCJhY3R1YWxIZWFsIiwiTWF0aCIsIm1pbiIsIm1heEhwIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLFlBQVksR0FBRztFQUNmO0VBQ0FDLElBQUksRUFBRTtJQUNGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxRQUFRLEVBQUUsQ0FBQztJQUFDO0lBQ1pDLFFBQVEsRUFBRSxDQUFDO0lBQUU7SUFDYkMsTUFBTSxFQUFFLFNBQUFBLE9BQUNDLE1BQU0sRUFBRUMsR0FBRyxFQUFLO01BQ3JCLElBQU1DLEdBQUcsR0FBRyxFQUFFO01BQ2QsSUFBTUMsS0FBSyxHQUFHSCxNQUFNLENBQUNJLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztNQUNuRCxJQUFJRCxLQUFLLEVBQUU7UUFDUEEsS0FBSyxDQUFDRSxFQUFFLElB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QUFFLE1BQU0sQ0FBQztVQUV6Q2hDLEdBQUcsbUJBQU9ELE1BQU0sQ0FBQ0osSUFBSSxrQ0FBU3FDLFVBQVUsbURBQWdCOUIsS0FBSyxDQUFDRSxFQUFFLFNBQUlGLEtBQUssQ0FBQ2lDLEtBQUssT0FBSTtRQUN2RjtNQUNKO0lBQ0osQ0FBQztJQUNEM0IsT0FBTyxXQUFBQSxRQUFDVCxNQUFNLEVBQUVDLEdBQUcsRUFBRTtNQUNqQkEsR0FBRyxtQkFBT0QsTUFBTSxDQUFDSixJQUFJLDZGQUFrQixJQUFJLENBQUNrQyxXQUFXLDJDQUFVO0lBQ3JFLENBQUM7SUFDRGpCLFFBQVEsV0FBQUEsU0FBQ2IsTUFBTSxFQUFFQyxHQUFHLEVBQUU7TUFDbEJBLEdBQUcsbUJBQU9ELE1BQU0sQ0FBQ0osSUFBSSx1REFBWTtJQUNyQztFQUNKO0FBQ0osQ0FBQztBQUVEeUMsTUFBTSxDQUFDQyxPQUFPLEdBQUc1QyxZQUFZIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQnVmZuaVsOaNruW6ky/ms6jlhozooahcclxuICog5a6a5LmJ5omA5pyJQnVmZueahOmFjee9ruaVsOaNrlxyXG4gKi9cclxudmFyIEJ1ZmZSZWdpc3RyeSA9IHtcclxuICAgIC8vIOeHg+eDp0J1ZmYgLSDmjIHnu63kvKTlrrNcclxuICAgIGJ1cm46IHtcclxuICAgICAgICBuYW1lOiBcIueHg+eDp1wiLFxyXG4gICAgICAgIGR1cmF0aW9uOiAzLC8v5oyB57ut5pe26Ze0XHJcbiAgICAgICAgaW50ZXJ2YWw6IDEsIC8vIOavj+enkuaJp+ihjOS4gOasoVxyXG4gICAgICAgIG9uVGljazogKHRhcmdldCwgbG9nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRtZyA9IDEwO1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0cyA9IHRhcmdldC5nZXRDb21wb25lbnQoXCJTdGF0c0NvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRzKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0cy5ocCAtPSBkbWc7XHJcbiAgICAgICAgICAgICAgICAvLyDmm7TmlrDooYDmnaHmmL7npLrvvIjnh4Png6fkvKTlrrPmmL7npLrkuLrmma7pgJrkvKTlrrPvvIlcclxuICAgICAgICAgICAgICAgIHN0YXRzLnVwZGF0ZUhlYWx0aEJhcihkbWcsICdub3JtYWwnKTtcclxuICAgICAgICAgICAgICAgIGxvZyhg8J+UpSAke3RhcmdldC5uYW1lfSDlj5fliLDnh4Png6fmlYjmnpzvvIzmjZ/lpLEgJHtkbWd9IOeCuUhQYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOecqeaZlUJ1ZmYgLSDmjqfliLbmlYjmnpxcclxuICAgIHN0dW46IHtcclxuICAgICAgICBuYW1lOiBcIuecqeaZlVwiLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICAgIHN0YXR1czogeyBzdHVuOiB0cnVlIH0sXHJcbiAgICAgICAgb25BcHBseSh0YXJnZXQsIGxvZykge1xyXG4gICAgICAgICAgICBsb2coYPCfmLUgJHt0YXJnZXQubmFtZX0g6KKr55yp5pmV5LqG77yBYCk7XHJcblxyXG4gICAgICAgICAgICAvLyDmmL7npLrnnKnmmZXmoIflv5dcclxuICAgICAgICAgICAgbGV0IHN0dW5JY29uID0gdGFyZ2V0LmdldENvbXBvbmVudChcIlN0dW5JY29uXCIpO1xyXG4gICAgICAgICAgICBpZiAoIXN0dW5JY29uKSB7XHJcbiAgICAgICAgICAgICAgICBzdHVuSWNvbiA9IHRhcmdldC5hZGRDb21wb25lbnQoXCJTdHVuSWNvblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdHVuSWNvbi5zaG93U3R1bigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25FeHBpcmUodGFyZ2V0LCBsb2cpIHtcclxuICAgICAgICAgICAgbG9nKGDinKggJHt0YXJnZXQubmFtZX0g5LuO55yp5pmV5Lit5oGi5aSNYCk7XHJcblxyXG4gICAgICAgICAgICAvLyDpmpDol4/nnKnmmZXmoIflv5dcclxuICAgICAgICAgICAgY29uc3Qgc3R1bkljb24gPSB0YXJnZXQuZ2V0Q29tcG9uZW50KFwiU3R1bkljb25cIik7XHJcbiAgICAgICAgICAgIGlmIChzdHVuSWNvbikge1xyXG4gICAgICAgICAgICAgICAgc3R1bkljb24uaGlkZVN0dW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8g5oiY5ZC8QnVmZiAtIOe+pOS9k+WinuebilxyXG4gICAgd2FyQ3J5OiB7XHJcbiAgICAgICAgbmFtZTogXCLmiJjlkLxcIixcclxuICAgICAgICBkdXJhdGlvbjogMyxcclxuICAgICAgICBtb2RpZmllcnM6IHtcclxuICAgICAgICAgICAgYXR0YWNrOiAxMCxcclxuICAgICAgICAgICAgc3BlZWQ6IDVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQXBwbHkodGFyZ2V0LCBsb2cpIHtcclxuICAgICAgICAgICAgbG9nKGDwn5OiICR7dGFyZ2V0Lm5hbWV9IOWPl+WIsOaImOWQvOm8k+iInu+8jOaUu+WHu+WKmyske3RoaXMubW9kaWZpZXJzLmF0dGFja33vvIzpgJ/luqYrJHt0aGlzLm1vZGlmaWVycy5zcGVlZH1gKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uRXhwaXJlKHRhcmdldCwgbG9nKSB7XHJcbiAgICAgICAgICAgIGxvZyhgJHt0YXJnZXQubmFtZX0g5oiY5ZC85pWI5p6c57uT5p2fYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyDni4LmmrRCdWZmIC0g5pS75Ye75aKe55uKXHJcbiAgICByYWdlOiB7XHJcbiAgICAgICAgbmFtZTogXCLni4LmmrRcIixcclxuICAgICAgICBkdXJhdGlvbjogMixcclxuICAgICAgICBtb2RpZmllcnM6IHtcclxuICAgICAgICAgICAgYXR0YWNrOiAxMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25BcHBseSh0YXJnZXQsIGxvZykge1xyXG4gICAgICAgICAgICBsb2coYPCfmKEgJHt0YXJnZXQubmFtZX0g6L+b5YWl54uC5pq054q25oCB77yM5pS75Ye75YqbKyR7dGhpcy5tb2RpZmllcnMuYXR0YWNrfWApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25FeHBpcmUodGFyZ2V0LCBsb2cpIHtcclxuICAgICAgICAgICAgbG9nKGAke3RhcmdldC5uYW1lfSDni4LmmrTnirbmgIHnu5PmnZ9gKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOenu+mZpOWFveWMlueLguaatOeJueaViFxyXG4gICAgICAgICAgICBjb25zdCBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICAgICAgICAgIGlmIChzY2VuZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWZmZWN0UGxheWVyID0gc2NlbmUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihcIlNraWxsRWZmZWN0UGxheWVyXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVmZmVjdFBsYXllciAmJiBlZmZlY3RQbGF5ZXIuc3RvcEJlYXN0UmFnZUVmZmVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdFBsYXllci5zdG9wQmVhc3RSYWdlRWZmZWN0KHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOaKpOebvkJ1ZmYgLSDkvKTlrrPlkLjmlLZcclxuICAgIHNoaWVsZDoge1xyXG4gICAgICAgIG5hbWU6IFwi5oqk55u+XCIsXHJcbiAgICAgICAgZHVyYXRpb246IDIuNSwvL+aMgee7reaXtumXtFxyXG4gICAgICAgIHN0YXR1czoge30sXHJcbiAgICAgICAgbW9kaWZpZXJzOiB7fSxcclxuICAgICAgICBzaGllbGRWYWx1ZTogMjAsIC8vIOaKpOebvuWAvFxyXG4gICAgICAgIG9uQXBwbHkodGFyZ2V0LCBsb2cpIHtcclxuICAgICAgICAgICAgbG9nKGDwn5uh77iPICR7dGFyZ2V0Lm5hbWV9IOiOt+W+l+S6hiAke3RoaXMuc2hpZWxkVmFsdWV9IOeCueaKpOebvmApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25FeHBpcmUodGFyZ2V0LCBsb2cpIHtcclxuICAgICAgICAgICAgbG9nKGAke3RhcmdldC5uYW1lfSDmiqTnm77mlYjmnpznu5PmnZ9gKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOaMgee7reaBouWkjUJ1ZmYgLSDmjIHnu63mgaLlpI3nlJ/lkb3lgLxcclxuICAgIGhlYWxPdmVyVGltZToge1xyXG4gICAgICAgIG5hbWU6IFwi5oyB57ut5oGi5aSNXCIsXHJcbiAgICAgICAgZHVyYXRpb246IDMuMCwgIC8vIOaMgee7rTPnp5JcclxuICAgICAgICBpbnRlcnZhbDogMS4wLCAgLy8g5q+P56eS5omn6KGM5LiA5qyhXHJcbiAgICAgICAgaGVhbFBlclRpY2s6IDE1LCAvLyDmr4/mrKHmgaLlpI0xMOeCuUhQXHJcbiAgICAgICAgb25UaWNrOiAodGFyZ2V0LCBsb2cpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdHMgPSB0YXJnZXQuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XHJcbiAgICAgICAgICAgIGlmIChzdGF0cyAmJiAhc3RhdHMuaXNEZWFkKCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWxBbW91bnQgPSAxMDtcclxuICAgICAgICAgICAgICAgIC8vIOiuoeeul+WunumZheaBouWkjemHj++8iOS4jeiDvei2hei/h+acgOWkp0hQ77yJXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3R1YWxIZWFsID0gTWF0aC5taW4oaGVhbEFtb3VudCwgc3RhdHMubWF4SHAgLSBzdGF0cy5ocCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFjdHVhbEhlYWwgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5oGi5aSNSFBcclxuICAgICAgICAgICAgICAgICAgICBzdGF0cy5ocCArPSBhY3R1YWxIZWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRzLmhwID0gTWF0aC5taW4oc3RhdHMuaHAsIHN0YXRzLm1heEhwKTsgIC8vIOehruS/neS4jei2hei/h+acgOWkp0hQXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOabtOaWsOihgOadoeaYvuekuu+8iOS9v+eUqCdoZWFsJ+exu+Wei++8iVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRzLnVwZGF0ZUhlYWx0aEJhcihhY3R1YWxIZWFsLCAnaGVhbCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsb2coYPCfkpogJHt0YXJnZXQubmFtZX0g5oyB57ut5oGi5aSNICR7YWN0dWFsSGVhbH0g54K555Sf5ZG95YC8ICjlvZPliY1IUDogJHtzdGF0cy5ocH0vJHtzdGF0cy5tYXhIcH0pYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQXBwbHkodGFyZ2V0LCBsb2cpIHtcclxuICAgICAgICAgICAgbG9nKGDwn5KaICR7dGFyZ2V0Lm5hbWV9IOW8gOWni+aMgee7reaBouWkjeeUn+WRveWAvO+8iOavj+enkuaBouWkjSR7dGhpcy5oZWFsUGVyVGlja33ngrnvvIzmjIHnu60z56eS77yJYCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkV4cGlyZSh0YXJnZXQsIGxvZykge1xyXG4gICAgICAgICAgICBsb2coYPCfkpogJHt0YXJnZXQubmFtZX0g5oyB57ut5oGi5aSN5pWI5p6c57uT5p2fYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCdWZmUmVnaXN0cnk7XHJcblxyXG4iXX0=