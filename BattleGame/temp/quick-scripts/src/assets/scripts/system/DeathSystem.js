"use strict";
cc._RF.push(module, 'ed99fhDOJdEQ7PgeOZ8J+PI', 'DeathSystem');
// Scripts/system/DeathSystem.js

"use strict";

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var TeamRef = require("TeamRef");
var StatsComponent = require("StatsComponent");

// 动画状态常量
var AnimationState = {
  ATTACK: "atk",
  // 攻击动画
  BY_ATK: "byatk",
  // 受击动画
  DIE: "die",
  // 死亡动画
  SHI_HUA: "shihua",
  // 石化动画
  WAIT: "wait" // 待机动画
};

/**
 * 死亡处理系统（普通模块）
 */
var DeathSystem = cc.Class({
  name: "DeathSystem",
  properties: {},
  ctor: function ctor(logger, recorder) {
    this.logger = logger;
    this.recorder = recorder; // 战斗记录器（可选）
  },
  /**
   * 检查目标是否死亡，若死亡执行处理逻辑。
   * @param {cc.Node} entity - 实体节点
   * @param {Object} recorder - 战斗记录器（可选）
   */
  checkAndHandleDeath: function checkAndHandleDeath(entity, recorder) {
    // 如果传入了recorder，使用传入的；否则使用实例的
    var recordRecorder = recorder || this.recorder;
    var stats = entity.getComponent("StatsComponent");
    if (!stats) return false;
    if (stats.hp > 0) return false;

    // 已经死了
    this.logger.log("\uD83D\uDC80 " + entity.name + " \u5DF2\u6B7B\u4EA1");

    // 记录死亡事件
    if (recordRecorder) {
      recordRecorder.recordDeath(entity);
    }

    // 清理所有Buff和技能特效
    this._cleanupOnDeath(entity);

    // 播放死亡动画
    this._playDeathAnimation(entity);

    // 从队伍列表中移除
    var team = entity.getComponent("TeamComponent");
    if (team) {
      if (team.team === "hero") {
        TeamRef.herosRef = TeamRef.herosRef.filter(function (e) {
          return e !== entity;
        });
      } else {
        TeamRef.monstersRef = TeamRef.monstersRef.filter(function (e) {
          return e !== entity;
        });
      }
    }
    return true;
  },
  /**
   * 清理死亡时的Buff和技能特效
   * @private
   */
  _cleanupOnDeath: function _cleanupOnDeath(entity) {
    if (!entity || !entity.isValid) return;
    var BuffSystem = require("BuffSystem");
    var BuffComponent = require("BuffComponent");
    var TeamRef = require("TeamRef");
    var stats = entity.getComponent("StatsComponent");

    // 清除所有Buff
    var buffs = entity.getComponents(BuffComponent);
    if (buffs && buffs.length > 0) {
      for (var _iterator = _createForOfIteratorHelperLoose(buffs), _step; !(_step = _iterator()).done;) {
        var buff = _step.value;
        // 调用Buff的onExpire回调（如果存在）
        if (buff.onExpire) {
          buff.onExpire(entity, this.logger.log.bind(this.logger));
        }

        // 恢复属性修改（如果有）
        if (stats && buff.modifiers) {
          for (var key in buff.modifiers) {
            if (stats[key] !== undefined) {
              stats[key] -= buff.modifiers[key];
            }
          }
          if (buff.modifiers.speed !== undefined) {
            stats.updateAttackInterval();
          }
        }

        // 移除Buff组件
        entity.removeComponent(buff);
      }
      this.logger.log("\uD83E\uDDF9 " + entity.name + " \u6B7B\u4EA1\uFF0C\u5DF2\u6E05\u9664\u6240\u6709Buff");
    }

    // 清除所有由这个单位释放的Buff（作用在其他单位身上的）
    // 遍历所有单位，找到caster等于死亡单位的Buff并移除
    var allUnits = [].concat(TeamRef.herosRef, TeamRef.monstersRef);
    var removedCount = 0;
    for (var _iterator2 = _createForOfIteratorHelperLoose(allUnits), _step2; !(_step2 = _iterator2()).done;) {
      var unit = _step2.value;
      if (!unit || !unit.isValid || unit === entity) continue;
      var unitBuffs = unit.getComponents(BuffComponent);
      if (unitBuffs && unitBuffs.length > 0) {
        for (var _iterator3 = _createForOfIteratorHelperLoose(unitBuffs), _step3; !(_step3 = _iterator3()).done;) {
          var _buff = _step3.value;
          // 如果这个Buff的施法者是死亡的单位，移除它
          if (_buff.caster === entity) {
            // 调用Buff的onExpire回调
            if (_buff.onExpire) {
              _buff.onExpire(unit, this.logger.log.bind(this.logger));
            }

            // 恢复属性修改
            var unitStats = unit.getComponent("StatsComponent");
            if (unitStats && _buff.modifiers) {
              for (var _key in _buff.modifiers) {
                if (unitStats[_key] !== undefined) {
                  unitStats[_key] -= _buff.modifiers[_key];
                }
              }
              if (_buff.modifiers.speed !== undefined) {
                unitStats.updateAttackInterval();
              }
            }

            // 如果是护盾Buff，更新血条显示
            if (_buff.buffName === "护盾" && unitStats) {
              unitStats.updateHealthBar();
            }

            // 移除Buff组件
            unit.removeComponent(_buff);
            removedCount++;
            this.logger.log("\uD83E\uDDF9 " + entity.name + " \u6B7B\u4EA1\uFF0C\u5DF2\u6E05\u9664 " + unit.name + " \u8EAB\u4E0A\u7684 " + _buff.buffName + " Buff\uFF08\u7531 " + entity.name + " \u91CA\u653E\uFF09");
          }
        }
      }
    }
    if (removedCount > 0) {
      this.logger.log("\uD83E\uDDF9 " + entity.name + " \u6B7B\u4EA1\uFF0C\u5DF2\u6E05\u9664 " + removedCount + " \u4E2A\u7531\u4ED6\u91CA\u653E\u7684Buff\uFF08\u4F5C\u7528\u5728\u5176\u4ED6\u5355\u4F4D\u8EAB\u4E0A\uFF09");
    }

    // 停止技能特效（兽化狂暴、战吼等）
    var scene = cc.director.getScene();
    if (scene) {
      var skillEffectPlayer = scene.getComponentInChildren("SkillEffectPlayer");
      if (skillEffectPlayer) {
        // 停止兽化狂暴特效
        if (skillEffectPlayer.stopBeastRageEffect) {
          skillEffectPlayer.stopBeastRageEffect(entity);
        }
        // 停止战吼持续波纹
        if (skillEffectPlayer._stopWarCryContinuousWaves) {
          skillEffectPlayer._stopWarCryContinuousWaves(entity);
        }
      }
    }

    // 清理节点上的所有粒子特效子节点（比如治疗术的粒子特效）
    if (entity.children) {
      var particlesToRemove = [];
      entity.children.forEach(function (child) {
        // 检查是否是粒子特效节点（通常名称包含"Particle"、"Effect"等）
        if (child.name.includes("Particle") || child.name.includes("Effect") || child.name.includes("Heal") || child.name.includes("Rage") || child.name.includes("WarCry")) {
          particlesToRemove.push(child);
        }
      });
      particlesToRemove.forEach(function (particle) {
        // 停止粒子系统
        var particleSystem = particle.getComponent(cc.ParticleSystem);
        if (particleSystem) {
          particleSystem.stopSystem();
        }
        // 销毁节点
        if (particle && particle.isValid) {
          particle.destroy();
        }
      });
      if (particlesToRemove.length > 0) {
        this.logger.log("\uD83E\uDDF9 " + entity.name + " \u6B7B\u4EA1\uFF0C\u5DF2\u6E05\u9664 " + particlesToRemove.length + " \u4E2A\u6280\u80FD\u7279\u6548");
      }
    }
  },
  /**
   * 播放死亡动画
   * @private
   */
  _playDeathAnimation: function _playDeathAnimation(entity) {
    var skeleton = entity.getComponent(sp.Skeleton);
    if (skeleton) {
      // 清除之前的监听器
      skeleton.setCompleteListener(null);
      // 播放死亡动画（不循环）
      skeleton.setAnimation(0, AnimationState.DIE, false);
      cc.log("[DeathSystem] " + entity.name + " \u64AD\u653E\u6B7B\u4EA1\u52A8\u753B");
    } else {
      cc.warn("[DeathSystem] " + entity.name + " \u6CA1\u6709 Spine \u7EC4\u4EF6\uFF0C\u65E0\u6CD5\u64AD\u653E\u6B7B\u4EA1\u52A8\u753B");
    }
  }
});
module.exports = DeathSystem;

cc._RF.pop();