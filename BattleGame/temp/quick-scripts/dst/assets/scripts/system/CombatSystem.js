
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/system/CombatSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa987957NxO6aR1l65Lbr6e', 'CombatSystem');
// Scripts/system/CombatSystem.js

"use strict";

var StatsComponent = require("StatsComponent");
var CombatComponent = require("CombatComponent");
var BuffComponent = require("BuffComponent");

/**
 * 战斗计算系统（非组件，是普通工具模块）
 */
var CombatSystem = {
  /**
   * 伤害结算（包含防御、闪避、暴击、护盾）
   * @param {cc.Node} attacker - 攻击者
   * @param {cc.Node} target - 目标
   * @param {number} baseDamage - 基础伤害
   * @param {Function} log - 日志函数
   * @param {Object} recorder - 战斗记录器（可选）
   * @param {Function} rand - 随机数生成函数（使用种子随机数）
   */
  damage: function damage(attacker, target, baseDamage, log, recorder, rand) {
    // 如果没有传入 rand，使用 Math.random() 作为后备（向后兼容）
    if (!rand) {
      rand = Math.random;
    }
    var atkStats = attacker.getComponent("StatsComponent");
    var tgtStats = target.getComponent("StatsComponent");
    var tgtCombat = target.getComponent("CombatComponent");
    if (!atkStats || !tgtStats) return;

    // 1. 计算闪避（使用种子随机数）
    var missChance = tgtStats.miss || 0;
    var isMiss = rand() < missChance;
    if (isMiss) {
      log(attacker.name + " \u5BF9 " + target.name + " \u7684\u653B\u51FB\u88AB\u95EA\u907F\u4E86\uFF01");
      if (tgtCombat) tgtCombat.lastDamage = 0;
      // 显示 MISS 飘字
      tgtStats.updateHealthBar(0, 'miss');
      // 记录闪避事件
      if (recorder) {
        recorder.recordDamage(attacker, target, 0, false, true, false);
      }
      return;
    }

    // 2. 计算暴击（使用种子随机数）
    var finalDamage = baseDamage;
    var isCrit = false;
    var critChance = atkStats.crit || 0;
    if (rand() < critChance) {
      finalDamage *= 2;
      isCrit = true;
      log("\u26A1 \u66B4\u51FB\uFF01" + attacker.name + " \u5BF9 " + target.name + " \u9020\u6210\u53CC\u500D\u4F24\u5BB3");
    }

    // 3. 防御减伤
    finalDamage = Math.max(1, finalDamage - tgtStats.defense);

    // 4. 免疫（百分比）
    var immune = tgtStats.immune || 0;
    finalDamage = finalDamage * (1 - immune);
    finalDamage = Math.floor(finalDamage);

    // 5. 护盾吸收伤害
    var shieldBuff = target.getComponents(BuffComponent).find(function (b) {
      return b.buffName === "护盾";
    });
    if (shieldBuff && shieldBuff.shieldValue > 0) {
      var absorb = Math.min(finalDamage, shieldBuff.shieldValue);
      shieldBuff.shieldValue -= absorb;
      finalDamage -= absorb;
      log("\uD83D\uDEE1\uFE0F " + target.name + " \u7684\u62A4\u76FE\u5438\u6536\u4E86 " + absorb + " \u70B9\u4F24\u5BB3");
      if (shieldBuff.shieldValue <= 0) {
        if (shieldBuff.onExpire) {
          shieldBuff.onExpire(target, log);
        }
        target.removeComponent(shieldBuff);
        log(target.name + " \u7684\u62A4\u76FE\u88AB\u51FB\u7834\u4E86");
      }
    }

    // 6. 扣血
    if (finalDamage > 0) {
      tgtStats.hp -= finalDamage;
      if (tgtCombat) tgtCombat.lastDamage = finalDamage;

      // 增加怒气值（根据受到的伤害）
      // 怒气值 = 受到的伤害值（可以根据需要调整比例）
      tgtStats.addRage(finalDamage);
    } else {
      if (tgtCombat) tgtCombat.lastDamage = 0;
    }

    // 7. 更新血条显示（传递是否暴击，会自动显示护盾值）
    tgtStats.updateHealthBar(finalDamage > 0 ? finalDamage : 0, isCrit ? 'crit' : 'normal');

    // 记录伤害事件
    if (recorder && finalDamage > 0) {
      recorder.recordDamage(attacker, target, finalDamage, isCrit, false, false);
    }
    if (finalDamage > 0) {
      log(attacker.name + " \u5BF9 " + target.name + " \u9020\u6210 " + finalDamage + " \u70B9\u4F24\u5BB3 (\u5269\u4F59HP: " + tgtStats.hp + ")");
    }
  },
  /**
   * 真伤：无视防御、免疫、闪避等
   * @param {cc.Node} attacker - 攻击者
   * @param {cc.Node} target - 目标
   * @param {number} baseDamage - 基础伤害
   * @param {Function} log - 日志函数
   * @param {Object} recorder - 战斗记录器（可选）
   * @param {Function} rand - 随机数生成函数（可选，真伤不需要随机判定，但为了保持API一致性）
   */
  damageTrue: function damageTrue(attacker, target, baseDamage, log, recorder, rand) {
    var tgtStats = target.getComponent("StatsComponent");
    var tgtCombat = target.getComponent("CombatComponent");
    if (!tgtStats) return;
    var finalDamage = Math.floor(baseDamage);
    tgtStats.hp -= finalDamage;
    if (tgtCombat) tgtCombat.lastDamage = finalDamage;

    // 增加怒气值（根据受到的伤害）
    tgtStats.addRage(finalDamage);

    // 更新血条显示（真伤显示为普通伤害）
    tgtStats.updateHealthBar(finalDamage, 'normal');

    // 记录真实伤害事件
    if (recorder) {
      recorder.recordDamage(attacker, target, finalDamage, false, false, true);
    }
    log("\uD83D\uDD25 \u771F\u4F24\uFF01" + attacker.name + " \u5BF9 " + target.name + " \u9020\u6210 " + finalDamage + " \u70B9\u771F\u5B9E\u4F24\u5BB3 (\u5269\u4F59HP: " + tgtStats.hp + ")");
  },
  /**
   * 治疗（恢复生命值）
   * @param {cc.Node} caster - 施法者
   * @param {cc.Node} target - 目标
   * @param {number} healAmount - 治疗量
   * @param {Function} log - 日志函数
   * @param {Object} recorder - 战斗记录器（可选）
   */
  heal: function heal(caster, target, healAmount, log, recorder) {
    var tgtStats = target.getComponent("StatsComponent");
    if (!tgtStats) return;

    // 如果目标已死亡，无法治疗
    if (tgtStats.isDead()) {
      log("\uD83D\uDC9A " + target.name + " \u5DF2\u6B7B\u4EA1\uFF0C\u65E0\u6CD5\u6CBB\u7597");
      return;
    }

    // 计算实际恢复量（不能超过最大HP）
    var actualHeal = Math.min(healAmount, tgtStats.maxHp - tgtStats.hp);
    if (actualHeal > 0) {
      // 恢复HP
      tgtStats.hp += actualHeal;
      tgtStats.hp = Math.min(tgtStats.hp, tgtStats.maxHp); // 确保不超过最大HP

      // 更新血条显示（使用'heal'类型）
      tgtStats.updateHealthBar(actualHeal, 'heal');
      log("\uD83D\uDC9A " + caster.name + " \u5BF9 " + target.name + " \u6062\u590D\u4E86 " + actualHeal + " \u70B9\u751F\u547D\u503C (\u5F53\u524DHP: " + tgtStats.hp + "/" + tgtStats.maxHp + ")");

      // 记录治疗事件
      if (recorder) {
        recorder.recordHeal(caster, target, actualHeal);
      }
    } else {
      log("\uD83D\uDC9A " + target.name + " \u751F\u547D\u503C\u5DF2\u6EE1\uFF0C\u65E0\u6CD5\u6CBB\u7597");
    }
  }
};
module.exports = CombatSystem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxDb21iYXRTeXN0ZW0uanMiXSwibmFtZXMiOlsiU3RhdHNDb21wb25lbnQiLCJyZXF1aXJlIiwiQ29tYmF0Q29tcG9uZW50IiwiQnVmZkNvbXBvbmVudCIsIkNvbWJhdFN5c3RlbSIsImRhbWFnZSIsImF0dGFja2VyIiwidGFyZ2V0IiwiYmFzZURhbWFnZSIsImxvZyIsInJlY29yZGVyIiwicmFuZCIsIk1hdGgiLCJyYW5kb20iLCJhdGtTdGF0cyIsImdldENvbXBvbmVudCIsInRndFN0YXRzIiwidGd0Q29tYmF0IiwibWlzc0NoYW5jZSIsIm1pc3MiLCJpc01pc3MiLCJuYW1lIiwibGFzdERhbWFnZSIsInVwZGF0ZUhlYWx0aEJhciIsInJlY29yZERhbWFnZSIsImZpbmFsRGFtYWdlIiwiaXNDcml0IiwiY3JpdENoYW5jZSIsImNyaXQiLCJtYXgiLCJkZWZlbnNlIiwiaW1tdW5lIiwiZmxvb3IiLCJzaGllbGRCdWZmIiwiZ2V0Q29tcG9uZW50cyIsImZpbmQiLCJiIiwiYnVmZk5hbWUiLCJzaGllbGRWYWx1ZSIsImFic29yYiIsIm1pbiIsIm9uRXhwaXJlIiwicmVtb3ZlQ29tcG9uZW50IiwiaHAiLCJhZGRSYWdlIiwiZGFtYWdlVHJ1ZSIsImhlYWwiLCJjYXN0ZXIiLCJoZWFsQW1vdW50IiwiaXNEZWFkIiwiYWN0dWFsSGVhbCIsIm1heEhwIiwicmVjb3JkSGVhbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsY0FBYyxHQUFHQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7QUFDOUMsSUFBSUMsZUFBZSxHQUFHRCxPQUFPLENBQUMsaUJBQWlCLENBQUM7QUFDaEQsSUFBSUUsYUFBYSxHQUFHRixPQUFPLENBQUMsZUFBZSxDQUFDOztBQUU1QztBQUNBO0FBQ0E7QUFDQSxJQUFJRyxZQUFZLEdBQUc7RUFFZjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSUMsTUFBTSxXQUFBQSxPQUFDQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxHQUFHLEVBQUVDLFFBQVEsRUFBRUMsSUFBSSxFQUFFO0lBQ3REO0lBQ0EsSUFBSSxDQUFDQSxJQUFJLEVBQUU7TUFDUEEsSUFBSSxHQUFHQyxJQUFJLENBQUNDLE1BQU07SUFDdEI7SUFFQSxJQUFNQyxRQUFRLEdBQUdSLFFBQVEsQ0FBQ1MsWUFBWSxDQUFDLGdCQUFnQixDQUFDO0lBQ3hELElBQU1DLFFBQVEsR0FBR1QsTUFBTSxDQUFDUSxZQUFZLENBQUMsZ0JBQWdCLENBQUM7SUFDdEQsSUFBTUUsU0FBUyxHQUFHVixNQUFNLENBQUNRLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztJQUV4RCxJQUFJLENBQUNELFFBQVEsSUFBSSxDQUFDRSxRQUFRLEVBQUU7O0lBRTVCO0lBQ0EsSUFBTUUsVUFBVSxHQUFHRixRQUFRLENBQUNHLElBQUksSUFBSSxDQUFDO0lBQ3JDLElBQU1DLE1BQU0sR0FBR1QsSUFBSSxFQUFFLEdBQUdPLFVBQVU7SUFDbEMsSUFBSUUsTUFBTSxFQUFFO01BQ1JYLEdBQUcsQ0FBSUgsUUFBUSxDQUFDZSxJQUFJLGdCQUFNZCxNQUFNLENBQUNjLElBQUksdURBQVk7TUFDakQsSUFBSUosU0FBUyxFQUFFQSxTQUFTLENBQUNLLFVBQVUsR0FBRyxDQUFDO01BQ3ZDO01BQ0FOLFFBQVEsQ0FBQ08sZUFBZSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7TUFDbkM7TUFDQSxJQUFJYixRQUFRLEVBQUU7UUFDVkEsUUFBUSxDQUFDYyxZQUFZLENBQUNsQixRQUFRLEVBQUVDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUM7TUFDbEU7TUFDQTtJQUNKOztJQUVBO0lBQ0EsSUFBSWtCLFdBQVcsR0FBR2pCLFVBQVU7SUFDNUIsSUFBSWtCLE1BQU0sR0FBRyxLQUFLO0lBQ2xCLElBQU1DLFVBQVUsR0FBR2IsUUFBUSxDQUFDYyxJQUFJLElBQUksQ0FBQztJQUNyQyxJQUFJakIsSUFBSSxFQUFFLEdBQUdnQixVQUFVLEVBQUU7TUFDckJGLFdBQVcsSUFBSSxDQUFDO01BQ2hCQyxNQUFNLEdBQUcsSUFBSTtNQUNiakIsR0FBRywrQkFBU0gsUUFBUSxDQUFDZSxJQUFJLGdCQUFNZCxNQUFNLENBQUNjLElBQUksMkNBQVU7SUFDeEQ7O0lBRUE7SUFDQUksV0FBVyxHQUFHYixJQUFJLENBQUNpQixHQUFHLENBQUMsQ0FBQyxFQUFFSixXQUFXLEdBQUdULFFBQVEsQ0FBQ2MsT0FBTyxDQUFDOztJQUV6RDtJQUNBLElBQU1DLE1BQU0sR0FBR2YsUUFBUSxDQUFDZSxNQUFNLElBQUksQ0FBQztJQUNuQ04sV0FBVyxHQUFHQSxXQUFXLElBQUksQ0FBQyxHQUFHTSxNQUFNLENBQUM7SUFFeENOLFdBQVcsR0FBR2IsSUFBSSxDQUFDb0IsS0FBSyxDQUFDUCxXQUFXLENBQUM7O0lBRXJDO0lBQ0EsSUFBTVEsVUFBVSxHQUFHMUIsTUFBTSxDQUFDMkIsYUFBYSxDQUFDL0IsYUFBYSxDQUFDLENBQ2pEZ0MsSUFBSSxDQUFDLFVBQUFDLENBQUM7TUFBQSxPQUFJQSxDQUFDLENBQUNDLFFBQVEsS0FBSyxJQUFJO0lBQUEsRUFBQztJQUNuQyxJQUFJSixVQUFVLElBQUlBLFVBQVUsQ0FBQ0ssV0FBVyxHQUFHLENBQUMsRUFBRTtNQUMxQyxJQUFNQyxNQUFNLEdBQUczQixJQUFJLENBQUM0QixHQUFHLENBQUNmLFdBQVcsRUFBRVEsVUFBVSxDQUFDSyxXQUFXLENBQUM7TUFDNURMLFVBQVUsQ0FBQ0ssV0FBVyxJQUFJQyxNQUFNO01BQ2hDZCxXQUFXLElBQUljLE1BQU07TUFDckI5QixHQUFHLHlCQUFRRixNQUFNLENBQUNjLElBQUksOENBQVdrQixNQUFNLHlCQUFPO01BRTlDLElBQUlOLFVBQVUsQ0FBQ0ssV0FBVyxJQUFJLENBQUMsRUFBRTtRQUM3QixJQUFJTCxVQUFVLENBQUNRLFFBQVEsRUFBRTtVQUNyQlIsVUFBVSxDQUFDUSxRQUFRLENBQUNsQyxNQUFNLEVBQUVFLEdBQUcsQ0FBQztRQUNwQztRQUNBRixNQUFNLENBQUNtQyxlQUFlLENBQUNULFVBQVUsQ0FBQztRQUNsQ3hCLEdBQUcsQ0FBSUYsTUFBTSxDQUFDYyxJQUFJLGlEQUFXO01BQ2pDO0lBQ0o7O0lBRUE7SUFDQSxJQUFJSSxXQUFXLEdBQUcsQ0FBQyxFQUFFO01BQ2pCVCxRQUFRLENBQUMyQixFQUFFLElBQUlsQixXQUFXO01BQzFCLElBQUlSLFNBQVMsRUFBRUEsU0FBUyxDQUFDSyxVQUFVLEdBQUdHLFdBQVc7O01BRWpEO01BQ0E7TUFDQVQsUUFBUSxDQUFDNEIsT0FBTyxDQUFDbkIsV0FBVyxDQUFDO0lBQ2pDLENBQUMsTUFBTTtNQUNILElBQUlSLFNBQVMsRUFBRUEsU0FBUyxDQUFDSyxVQUFVLEdBQUcsQ0FBQztJQUMzQzs7SUFFQTtJQUNBTixRQUFRLENBQUNPLGVBQWUsQ0FBQ0UsV0FBVyxHQUFHLENBQUMsR0FBR0EsV0FBVyxHQUFHLENBQUMsRUFBRUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxRQUFRLENBQUM7O0lBRXZGO0lBQ0EsSUFBSWhCLFFBQVEsSUFBSWUsV0FBVyxHQUFHLENBQUMsRUFBRTtNQUM3QmYsUUFBUSxDQUFDYyxZQUFZLENBQUNsQixRQUFRLEVBQUVDLE1BQU0sRUFBRWtCLFdBQVcsRUFBRUMsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7SUFDOUU7SUFFQSxJQUFJRCxXQUFXLEdBQUcsQ0FBQyxFQUFFO01BQ2pCaEIsR0FBRyxDQUFJSCxRQUFRLENBQUNlLElBQUksZ0JBQU1kLE1BQU0sQ0FBQ2MsSUFBSSxzQkFBT0ksV0FBVyw2Q0FBZVQsUUFBUSxDQUFDMkIsRUFBRSxPQUFJO0lBQ3pGO0VBQ0osQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJRSxVQUFVLFdBQUFBLFdBQUN2QyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxHQUFHLEVBQUVDLFFBQVEsRUFBRUMsSUFBSSxFQUFFO0lBRTFELElBQU1LLFFBQVEsR0FBR1QsTUFBTSxDQUFDUSxZQUFZLENBQUMsZ0JBQWdCLENBQUM7SUFDdEQsSUFBTUUsU0FBUyxHQUFHVixNQUFNLENBQUNRLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztJQUN4RCxJQUFJLENBQUNDLFFBQVEsRUFBRTtJQUVmLElBQU1TLFdBQVcsR0FBR2IsSUFBSSxDQUFDb0IsS0FBSyxDQUFDeEIsVUFBVSxDQUFDO0lBQzFDUSxRQUFRLENBQUMyQixFQUFFLElBQUlsQixXQUFXO0lBQzFCLElBQUlSLFNBQVMsRUFBRUEsU0FBUyxDQUFDSyxVQUFVLEdBQUdHLFdBQVc7O0lBRWpEO0lBQ0FULFFBQVEsQ0FBQzRCLE9BQU8sQ0FBQ25CLFdBQVcsQ0FBQzs7SUFFN0I7SUFDQVQsUUFBUSxDQUFDTyxlQUFlLENBQUNFLFdBQVcsRUFBRSxRQUFRLENBQUM7O0lBRS9DO0lBQ0EsSUFBSWYsUUFBUSxFQUFFO01BQ1ZBLFFBQVEsQ0FBQ2MsWUFBWSxDQUFDbEIsUUFBUSxFQUFFQyxNQUFNLEVBQUVrQixXQUFXLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUM7SUFDNUU7SUFFQWhCLEdBQUcscUNBQVVILFFBQVEsQ0FBQ2UsSUFBSSxnQkFBTWQsTUFBTSxDQUFDYyxJQUFJLHNCQUFPSSxXQUFXLHlEQUFpQlQsUUFBUSxDQUFDMkIsRUFBRSxPQUFJO0VBQ2pHLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0lHLElBQUksV0FBQUEsS0FBQ0MsTUFBTSxFQUFFeEMsTUFBTSxFQUFFeUMsVUFBVSxFQUFFdkMsR0FBRyxFQUFFQyxRQUFRLEVBQUU7SUFDNUMsSUFBTU0sUUFBUSxHQUFHVCxNQUFNLENBQUNRLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztJQUN0RCxJQUFJLENBQUNDLFFBQVEsRUFBRTs7SUFFZjtJQUNBLElBQUlBLFFBQVEsQ0FBQ2lDLE1BQU0sRUFBRSxFQUFFO01BQ25CeEMsR0FBRyxtQkFBT0YsTUFBTSxDQUFDYyxJQUFJLHVEQUFZO01BQ2pDO0lBQ0o7O0lBRUE7SUFDQSxJQUFNNkIsVUFBVSxHQUFHdEMsSUFBSSxDQUFDNEIsR0FBRyxDQUFDUSxVQUFVLEVBQUVoQyxRQUFRLENBQUNtQyxLQUFLLEdBQUduQyxRQUFRLENBQUMyQixFQUFFLENBQUM7SUFFckUsSUFBSU8sVUFBVSxHQUFHLENBQUMsRUFBRTtNQUNoQjtNQUNBbEMsUUFBUSxDQUFDMkIsRUFBRSxJQUFJTyxVQUFVO01BQ3pCbEMsUUFBUSxDQUFDMkIsRUFBRSxHQUFHL0IsSUFBSSxDQUFDNEIsR0FBRyxDQUFDeEIsUUFBUSxDQUFDMkIsRUFBRSxFQUFFM0IsUUFBUSxDQUFDbUMsS0FBSyxDQUFDLENBQUMsQ0FBRTs7TUFFdEQ7TUFDQW5DLFFBQVEsQ0FBQ08sZUFBZSxDQUFDMkIsVUFBVSxFQUFFLE1BQU0sQ0FBQztNQUU1Q3pDLEdBQUcsbUJBQU9zQyxNQUFNLENBQUMxQixJQUFJLGdCQUFNZCxNQUFNLENBQUNjLElBQUksNEJBQVE2QixVQUFVLG1EQUFnQmxDLFFBQVEsQ0FBQzJCLEVBQUUsU0FBSTNCLFFBQVEsQ0FBQ21DLEtBQUssT0FBSTs7TUFFekc7TUFDQSxJQUFJekMsUUFBUSxFQUFFO1FBQ1ZBLFFBQVEsQ0FBQzBDLFVBQVUsQ0FBQ0wsTUFBTSxFQUFFeEMsTUFBTSxFQUFFMkMsVUFBVSxDQUFDO01BQ25EO0lBQ0osQ0FBQyxNQUFNO01BQ0h6QyxHQUFHLG1CQUFPRixNQUFNLENBQUNjLElBQUksbUVBQWM7SUFDdkM7RUFDSjtBQUNKLENBQUM7QUFFRGdDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHbEQsWUFBWSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFN0YXRzQ29tcG9uZW50ID0gcmVxdWlyZShcIlN0YXRzQ29tcG9uZW50XCIpO1xyXG52YXIgQ29tYmF0Q29tcG9uZW50ID0gcmVxdWlyZShcIkNvbWJhdENvbXBvbmVudFwiKTtcclxudmFyIEJ1ZmZDb21wb25lbnQgPSByZXF1aXJlKFwiQnVmZkNvbXBvbmVudFwiKTtcclxuXHJcbi8qKlxyXG4gKiDmiJjmlpforqHnrpfns7vnu5/vvIjpnZ7nu4Tku7bvvIzmmK/mma7pgJrlt6XlhbfmqKHlnZfvvIlcclxuICovXHJcbnZhciBDb21iYXRTeXN0ZW0gPSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkvKTlrrPnu5PnrpfvvIjljIXlkKvpmLLlvqHjgIHpl6rpgb/jgIHmmrTlh7vjgIHmiqTnm77vvIlcclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gYXR0YWNrZXIgLSDmlLvlh7vogIVcclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gdGFyZ2V0IC0g55uu5qCHXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYmFzZURhbWFnZSAtIOWfuuehgOS8pOWus1xyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbG9nIC0g5pel5b+X5Ye95pWwXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkZXIgLSDmiJjmlpforrDlvZXlmajvvIjlj6/pgInvvIlcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHJhbmQgLSDpmo/mnLrmlbDnlJ/miJDlh73mlbDvvIjkvb/nlKjnp43lrZDpmo/mnLrmlbDvvIlcclxuICAgICAqL1xyXG4gICAgZGFtYWdlKGF0dGFja2VyLCB0YXJnZXQsIGJhc2VEYW1hZ2UsIGxvZywgcmVjb3JkZXIsIHJhbmQpIHtcclxuICAgICAgICAvLyDlpoLmnpzmsqHmnInkvKDlhaUgcmFuZO+8jOS9v+eUqCBNYXRoLnJhbmRvbSgpIOS9nOS4uuWQjuWkh++8iOWQkeWQjuWFvOWuue+8iVxyXG4gICAgICAgIGlmICghcmFuZCkge1xyXG4gICAgICAgICAgICByYW5kID0gTWF0aC5yYW5kb207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhdGtTdGF0cyA9IGF0dGFja2VyLmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xyXG4gICAgICAgIGNvbnN0IHRndFN0YXRzID0gdGFyZ2V0LmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xyXG4gICAgICAgIGNvbnN0IHRndENvbWJhdCA9IHRhcmdldC5nZXRDb21wb25lbnQoXCJDb21iYXRDb21wb25lbnRcIik7XHJcblxyXG4gICAgICAgIGlmICghYXRrU3RhdHMgfHwgIXRndFN0YXRzKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIDEuIOiuoeeul+mXqumBv++8iOS9v+eUqOenjeWtkOmaj+acuuaVsO+8iVxyXG4gICAgICAgIGNvbnN0IG1pc3NDaGFuY2UgPSB0Z3RTdGF0cy5taXNzIHx8IDA7XHJcbiAgICAgICAgY29uc3QgaXNNaXNzID0gcmFuZCgpIDwgbWlzc0NoYW5jZTtcclxuICAgICAgICBpZiAoaXNNaXNzKSB7XHJcbiAgICAgICAgICAgIGxvZyhgJHthdHRhY2tlci5uYW1lfSDlr7kgJHt0YXJnZXQubmFtZX0g55qE5pS75Ye76KKr6Zeq6YG/5LqG77yBYCk7XHJcbiAgICAgICAgICAgIGlmICh0Z3RDb21iYXQpIHRndENvbWJhdC5sYXN0RGFtYWdlID0gMDtcclxuICAgICAgICAgICAgLy8g5pi+56S6IE1JU1Mg6aOY5a2XXHJcbiAgICAgICAgICAgIHRndFN0YXRzLnVwZGF0ZUhlYWx0aEJhcigwLCAnbWlzcycpO1xyXG4gICAgICAgICAgICAvLyDorrDlvZXpl6rpgb/kuovku7ZcclxuICAgICAgICAgICAgaWYgKHJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZWNvcmRlci5yZWNvcmREYW1hZ2UoYXR0YWNrZXIsIHRhcmdldCwgMCwgZmFsc2UsIHRydWUsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAyLiDorqHnrpfmmrTlh7vvvIjkvb/nlKjnp43lrZDpmo/mnLrmlbDvvIlcclxuICAgICAgICBsZXQgZmluYWxEYW1hZ2UgPSBiYXNlRGFtYWdlO1xyXG4gICAgICAgIGxldCBpc0NyaXQgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBjcml0Q2hhbmNlID0gYXRrU3RhdHMuY3JpdCB8fCAwO1xyXG4gICAgICAgIGlmIChyYW5kKCkgPCBjcml0Q2hhbmNlKSB7XHJcbiAgICAgICAgICAgIGZpbmFsRGFtYWdlICo9IDI7XHJcbiAgICAgICAgICAgIGlzQ3JpdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGxvZyhg4pqhIOaatOWHu++8gSR7YXR0YWNrZXIubmFtZX0g5a+5ICR7dGFyZ2V0Lm5hbWV9IOmAoOaIkOWPjOWAjeS8pOWus2ApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gMy4g6Ziy5b6h5YeP5LykXHJcbiAgICAgICAgZmluYWxEYW1hZ2UgPSBNYXRoLm1heCgxLCBmaW5hbERhbWFnZSAtIHRndFN0YXRzLmRlZmVuc2UpO1xyXG5cclxuICAgICAgICAvLyA0LiDlhY3nlqvvvIjnmb7liIbmr5TvvIlcclxuICAgICAgICBjb25zdCBpbW11bmUgPSB0Z3RTdGF0cy5pbW11bmUgfHwgMDtcclxuICAgICAgICBmaW5hbERhbWFnZSA9IGZpbmFsRGFtYWdlICogKDEgLSBpbW11bmUpO1xyXG5cclxuICAgICAgICBmaW5hbERhbWFnZSA9IE1hdGguZmxvb3IoZmluYWxEYW1hZ2UpO1xyXG5cclxuICAgICAgICAvLyA1LiDmiqTnm77lkLjmlLbkvKTlrrNcclxuICAgICAgICBjb25zdCBzaGllbGRCdWZmID0gdGFyZ2V0LmdldENvbXBvbmVudHMoQnVmZkNvbXBvbmVudClcclxuICAgICAgICAgICAgLmZpbmQoYiA9PiBiLmJ1ZmZOYW1lID09PSBcIuaKpOebvlwiKTtcclxuICAgICAgICBpZiAoc2hpZWxkQnVmZiAmJiBzaGllbGRCdWZmLnNoaWVsZFZhbHVlID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBhYnNvcmIgPSBNYXRoLm1pbihmaW5hbERhbWFnZSwgc2hpZWxkQnVmZi5zaGllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgIHNoaWVsZEJ1ZmYuc2hpZWxkVmFsdWUgLT0gYWJzb3JiO1xyXG4gICAgICAgICAgICBmaW5hbERhbWFnZSAtPSBhYnNvcmI7XHJcbiAgICAgICAgICAgIGxvZyhg8J+boe+4jyAke3RhcmdldC5uYW1lfSDnmoTmiqTnm77lkLjmlLbkuoYgJHthYnNvcmJ9IOeCueS8pOWus2ApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNoaWVsZEJ1ZmYuc2hpZWxkVmFsdWUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNoaWVsZEJ1ZmYub25FeHBpcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGllbGRCdWZmLm9uRXhwaXJlKHRhcmdldCwgbG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRhcmdldC5yZW1vdmVDb21wb25lbnQoc2hpZWxkQnVmZik7XHJcbiAgICAgICAgICAgICAgICBsb2coYCR7dGFyZ2V0Lm5hbWV9IOeahOaKpOebvuiiq+WHu+egtOS6hmApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyA2LiDmiaPooYBcclxuICAgICAgICBpZiAoZmluYWxEYW1hZ2UgPiAwKSB7XHJcbiAgICAgICAgICAgIHRndFN0YXRzLmhwIC09IGZpbmFsRGFtYWdlO1xyXG4gICAgICAgICAgICBpZiAodGd0Q29tYmF0KSB0Z3RDb21iYXQubGFzdERhbWFnZSA9IGZpbmFsRGFtYWdlO1xyXG5cclxuICAgICAgICAgICAgLy8g5aKe5Yqg5oCS5rCU5YC877yI5qC55o2u5Y+X5Yiw55qE5Lyk5a6z77yJXHJcbiAgICAgICAgICAgIC8vIOaAkuawlOWAvCA9IOWPl+WIsOeahOS8pOWus+WAvO+8iOWPr+S7peagueaNrumcgOimgeiwg+aVtOavlOS+i++8iVxyXG4gICAgICAgICAgICB0Z3RTdGF0cy5hZGRSYWdlKGZpbmFsRGFtYWdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGd0Q29tYmF0KSB0Z3RDb21iYXQubGFzdERhbWFnZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyA3LiDmm7TmlrDooYDmnaHmmL7npLrvvIjkvKDpgJLmmK/lkKbmmrTlh7vvvIzkvJroh6rliqjmmL7npLrmiqTnm77lgLzvvIlcclxuICAgICAgICB0Z3RTdGF0cy51cGRhdGVIZWFsdGhCYXIoZmluYWxEYW1hZ2UgPiAwID8gZmluYWxEYW1hZ2UgOiAwLCBpc0NyaXQgPyAnY3JpdCcgOiAnbm9ybWFsJyk7XHJcblxyXG4gICAgICAgIC8vIOiusOW9leS8pOWus+S6i+S7tlxyXG4gICAgICAgIGlmIChyZWNvcmRlciAmJiBmaW5hbERhbWFnZSA+IDApIHtcclxuICAgICAgICAgICAgcmVjb3JkZXIucmVjb3JkRGFtYWdlKGF0dGFja2VyLCB0YXJnZXQsIGZpbmFsRGFtYWdlLCBpc0NyaXQsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZmluYWxEYW1hZ2UgPiAwKSB7XHJcbiAgICAgICAgICAgIGxvZyhgJHthdHRhY2tlci5uYW1lfSDlr7kgJHt0YXJnZXQubmFtZX0g6YCg5oiQICR7ZmluYWxEYW1hZ2V9IOeCueS8pOWusyAo5Ymp5L2ZSFA6ICR7dGd0U3RhdHMuaHB9KWApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnnJ/kvKTvvJrml6Dop4bpmLLlvqHjgIHlhY3nlqvjgIHpl6rpgb/nrYlcclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gYXR0YWNrZXIgLSDmlLvlh7vogIVcclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gdGFyZ2V0IC0g55uu5qCHXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYmFzZURhbWFnZSAtIOWfuuehgOS8pOWus1xyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbG9nIC0g5pel5b+X5Ye95pWwXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkZXIgLSDmiJjmlpforrDlvZXlmajvvIjlj6/pgInvvIlcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHJhbmQgLSDpmo/mnLrmlbDnlJ/miJDlh73mlbDvvIjlj6/pgInvvIznnJ/kvKTkuI3pnIDopoHpmo/mnLrliKTlrprvvIzkvYbkuLrkuobkv53mjIFBUEnkuIDoh7TmgKfvvIlcclxuICAgICAqL1xyXG4gICAgZGFtYWdlVHJ1ZShhdHRhY2tlciwgdGFyZ2V0LCBiYXNlRGFtYWdlLCBsb2csIHJlY29yZGVyLCByYW5kKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRndFN0YXRzID0gdGFyZ2V0LmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xyXG4gICAgICAgIGNvbnN0IHRndENvbWJhdCA9IHRhcmdldC5nZXRDb21wb25lbnQoXCJDb21iYXRDb21wb25lbnRcIik7XHJcbiAgICAgICAgaWYgKCF0Z3RTdGF0cykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBmaW5hbERhbWFnZSA9IE1hdGguZmxvb3IoYmFzZURhbWFnZSk7XHJcbiAgICAgICAgdGd0U3RhdHMuaHAgLT0gZmluYWxEYW1hZ2U7XHJcbiAgICAgICAgaWYgKHRndENvbWJhdCkgdGd0Q29tYmF0Lmxhc3REYW1hZ2UgPSBmaW5hbERhbWFnZTtcclxuXHJcbiAgICAgICAgLy8g5aKe5Yqg5oCS5rCU5YC877yI5qC55o2u5Y+X5Yiw55qE5Lyk5a6z77yJXHJcbiAgICAgICAgdGd0U3RhdHMuYWRkUmFnZShmaW5hbERhbWFnZSk7XHJcblxyXG4gICAgICAgIC8vIOabtOaWsOihgOadoeaYvuekuu+8iOecn+S8pOaYvuekuuS4uuaZrumAmuS8pOWus++8iVxyXG4gICAgICAgIHRndFN0YXRzLnVwZGF0ZUhlYWx0aEJhcihmaW5hbERhbWFnZSwgJ25vcm1hbCcpO1xyXG5cclxuICAgICAgICAvLyDorrDlvZXnnJ/lrp7kvKTlrrPkuovku7ZcclxuICAgICAgICBpZiAocmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgcmVjb3JkZXIucmVjb3JkRGFtYWdlKGF0dGFja2VyLCB0YXJnZXQsIGZpbmFsRGFtYWdlLCBmYWxzZSwgZmFsc2UsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9nKGDwn5SlIOecn+S8pO+8gSR7YXR0YWNrZXIubmFtZX0g5a+5ICR7dGFyZ2V0Lm5hbWV9IOmAoOaIkCAke2ZpbmFsRGFtYWdlfSDngrnnnJ/lrp7kvKTlrrMgKOWJqeS9mUhQOiAke3RndFN0YXRzLmhwfSlgKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmsrvnlpfvvIjmgaLlpI3nlJ/lkb3lgLzvvIlcclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gY2FzdGVyIC0g5pa95rOV6ICFXHJcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IHRhcmdldCAtIOebruagh1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlYWxBbW91bnQgLSDmsrvnlpfph49cclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxvZyAtIOaXpeW/l+WHveaVsFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZGVyIC0g5oiY5paX6K6w5b2V5Zmo77yI5Y+v6YCJ77yJXHJcbiAgICAgKi9cclxuICAgIGhlYWwoY2FzdGVyLCB0YXJnZXQsIGhlYWxBbW91bnQsIGxvZywgcmVjb3JkZXIpIHtcclxuICAgICAgICBjb25zdCB0Z3RTdGF0cyA9IHRhcmdldC5nZXRDb21wb25lbnQoXCJTdGF0c0NvbXBvbmVudFwiKTtcclxuICAgICAgICBpZiAoIXRndFN0YXRzKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIOWmguaenOebruagh+W3suatu+S6oe+8jOaXoOazleayu+eWl1xyXG4gICAgICAgIGlmICh0Z3RTdGF0cy5pc0RlYWQoKSkge1xyXG4gICAgICAgICAgICBsb2coYPCfkpogJHt0YXJnZXQubmFtZX0g5bey5q275Lqh77yM5peg5rOV5rK755aXYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOiuoeeul+WunumZheaBouWkjemHj++8iOS4jeiDvei2hei/h+acgOWkp0hQ77yJXHJcbiAgICAgICAgY29uc3QgYWN0dWFsSGVhbCA9IE1hdGgubWluKGhlYWxBbW91bnQsIHRndFN0YXRzLm1heEhwIC0gdGd0U3RhdHMuaHApO1xyXG5cclxuICAgICAgICBpZiAoYWN0dWFsSGVhbCA+IDApIHtcclxuICAgICAgICAgICAgLy8g5oGi5aSNSFBcclxuICAgICAgICAgICAgdGd0U3RhdHMuaHAgKz0gYWN0dWFsSGVhbDtcclxuICAgICAgICAgICAgdGd0U3RhdHMuaHAgPSBNYXRoLm1pbih0Z3RTdGF0cy5ocCwgdGd0U3RhdHMubWF4SHApOyAgLy8g56Gu5L+d5LiN6LaF6L+H5pyA5aSnSFBcclxuXHJcbiAgICAgICAgICAgIC8vIOabtOaWsOihgOadoeaYvuekuu+8iOS9v+eUqCdoZWFsJ+exu+Wei++8iVxyXG4gICAgICAgICAgICB0Z3RTdGF0cy51cGRhdGVIZWFsdGhCYXIoYWN0dWFsSGVhbCwgJ2hlYWwnKTtcclxuXHJcbiAgICAgICAgICAgIGxvZyhg8J+SmiAke2Nhc3Rlci5uYW1lfSDlr7kgJHt0YXJnZXQubmFtZX0g5oGi5aSN5LqGICR7YWN0dWFsSGVhbH0g54K555Sf5ZG95YC8ICjlvZPliY1IUDogJHt0Z3RTdGF0cy5ocH0vJHt0Z3RTdGF0cy5tYXhIcH0pYCk7XHJcblxyXG4gICAgICAgICAgICAvLyDorrDlvZXmsrvnlpfkuovku7ZcclxuICAgICAgICAgICAgaWYgKHJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZWNvcmRlci5yZWNvcmRIZWFsKGNhc3RlciwgdGFyZ2V0LCBhY3R1YWxIZWFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvZyhg8J+SmiAke3RhcmdldC5uYW1lfSDnlJ/lkb3lgLzlt7Lmu6HvvIzml6Dms5XmsrvnlpdgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbWJhdFN5c3RlbTsiXX0=