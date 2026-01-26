"use strict";
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