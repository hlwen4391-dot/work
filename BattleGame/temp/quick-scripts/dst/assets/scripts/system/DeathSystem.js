
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/system/DeathSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxEZWF0aFN5c3RlbS5qcyJdLCJuYW1lcyI6WyJUZWFtUmVmIiwicmVxdWlyZSIsIlN0YXRzQ29tcG9uZW50IiwiQW5pbWF0aW9uU3RhdGUiLCJBVFRBQ0siLCJCWV9BVEsiLCJESUUiLCJTSElfSFVBIiwiV0FJVCIsIkRlYXRoU3lzdGVtIiwiY2MiLCJDbGFzcyIsIm5hbWUiLCJwcm9wZXJ0aWVzIiwiY3RvciIsImxvZ2dlciIsInJlY29yZGVyIiwiY2hlY2tBbmRIYW5kbGVEZWF0aCIsImVudGl0eSIsInJlY29yZFJlY29yZGVyIiwic3RhdHMiLCJnZXRDb21wb25lbnQiLCJocCIsImxvZyIsInJlY29yZERlYXRoIiwiX2NsZWFudXBPbkRlYXRoIiwiX3BsYXlEZWF0aEFuaW1hdGlvbiIsInRlYW0iLCJoZXJvc1JlZiIsImZpbHRlciIsImUiLCJtb25zdGVyc1JlZiIsImlzVmFsaWQiLCJCdWZmU3lzdGVtIiwiQnVmZkNvbXBvbmVudCIsImJ1ZmZzIiwiZ2V0Q29tcG9uZW50cyIsImxlbmd0aCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJfc3RlcCIsImRvbmUiLCJidWZmIiwidmFsdWUiLCJvbkV4cGlyZSIsImJpbmQiLCJtb2RpZmllcnMiLCJrZXkiLCJ1bmRlZmluZWQiLCJzcGVlZCIsInVwZGF0ZUF0dGFja0ludGVydmFsIiwicmVtb3ZlQ29tcG9uZW50IiwiYWxsVW5pdHMiLCJjb25jYXQiLCJyZW1vdmVkQ291bnQiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwidW5pdCIsInVuaXRCdWZmcyIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJjYXN0ZXIiLCJ1bml0U3RhdHMiLCJidWZmTmFtZSIsInVwZGF0ZUhlYWx0aEJhciIsInNjZW5lIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsInNraWxsRWZmZWN0UGxheWVyIiwiZ2V0Q29tcG9uZW50SW5DaGlsZHJlbiIsInN0b3BCZWFzdFJhZ2VFZmZlY3QiLCJfc3RvcFdhckNyeUNvbnRpbnVvdXNXYXZlcyIsImNoaWxkcmVuIiwicGFydGljbGVzVG9SZW1vdmUiLCJmb3JFYWNoIiwiY2hpbGQiLCJpbmNsdWRlcyIsInB1c2giLCJwYXJ0aWNsZSIsInBhcnRpY2xlU3lzdGVtIiwiUGFydGljbGVTeXN0ZW0iLCJzdG9wU3lzdGVtIiwiZGVzdHJveSIsInNrZWxldG9uIiwic3AiLCJTa2VsZXRvbiIsInNldENvbXBsZXRlTGlzdGVuZXIiLCJzZXRBbmltYXRpb24iLCJ3YXJuIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxTQUFTLENBQUM7QUFDaEMsSUFBSUMsY0FBYyxHQUFHRCxPQUFPLENBQUMsZ0JBQWdCLENBQUM7O0FBRTlDO0FBQ0EsSUFBTUUsY0FBYyxHQUFHO0VBQ25CQyxNQUFNLEVBQUUsS0FBSztFQUFPO0VBQ3BCQyxNQUFNLEVBQUUsT0FBTztFQUFLO0VBQ3BCQyxHQUFHLEVBQUUsS0FBSztFQUFVO0VBQ3BCQyxPQUFPLEVBQUUsUUFBUTtFQUFHO0VBQ3BCQyxJQUFJLEVBQUUsTUFBTSxDQUFRO0FBQ3hCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSUMsV0FBVyxHQUFHQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUN2QkMsSUFBSSxFQUFFLGFBQWE7RUFFbkJDLFVBQVUsRUFBRSxDQUFDLENBQUM7RUFFZEMsSUFBSSxXQUFBQSxLQUFDQyxNQUFNLEVBQUVDLFFBQVEsRUFBRTtJQUNuQixJQUFJLENBQUNELE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLFFBQVEsR0FBR0EsUUFBUSxDQUFDLENBQUM7RUFDOUIsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSUMsbUJBQW1CLFdBQUFBLG9CQUFDQyxNQUFNLEVBQUVGLFFBQVEsRUFBRTtJQUNsQztJQUNBLElBQU1HLGNBQWMsR0FB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QUNoQkEsY0FBYyxDQUFDRSxVQUFVLEVBQUU7UUFDL0I7UUFDQTtRQUNBLElBQUlILFFBQVEsSUFBSUEsUUFBUSxDQUFDOUMsT0FBTyxFQUFFO1VBQzlCOEMsUUFBUSxDQUFDSSxPQUFPLEVBQUU7UUFDdEI7TUFDSixDQUFDLENBQUM7TUFDRixJQUFJVCxpQkFBaUIsQ0FBQ3BDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDOUIsSUFBSSxDQUFDdEIsTUFBTSxDQUFDUSxHQUFHLG1CQUFPTCxNQUFNLENBQUNOLElBQUksOENBQVc2RCxpQkFBaUIsQ0FBQ3BDLE1BQU0scUNBQVM7TUFDakY7SUFDSjtFQUNKLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJWCxtQkFBbUIsV0FBQUEsb0JBQUNSLE1BQU0sRUFBRTtJQUN4QixJQUFNaUUsUUFBUSxHQUFHakUsTUFBTSxDQUFDRyxZQUFZLENBQUMrRCxFQUFFLENBQUNDLFFBQVEsQ0FBQztJQUNqRCxJQUFJRixRQUFRLEVBQUU7TUFDVjtNQUNBQSxRQUFRLENBQUNHLG1CQUFtQixDQUFDLElBQUksQ0FBQztNQUNsQztNQUNBSCxRQUFRLENBQUNJLFlBQVksQ0FBQyxDQUFDLEVBQUVwRixjQUFjLENBQUNHLEdBQUcsRUFBRSxLQUFLLENBQUM7TUFDbkRJLEVBQUUsQ0FBQ2EsR0FBRyxvQkFBa0JMLE1BQU0sQ0FBQ04sSUFBSSwyQ0FBVTtJQUNqRCxDQUFDLE1BQU07TUFDSEYsRUFBRSxDQUFDOEUsSUFBSSxvQkFBa0J0RSxNQUFNLENBQUNOLElBQUksNEZBQXdCO0lBQ2hFO0VBQ0o7QUFDSixDQUFDLENBQUM7QUFFRjZFLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHakYsV0FBVyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFRlYW1SZWYgPSByZXF1aXJlKFwiVGVhbVJlZlwiKTtcclxudmFyIFN0YXRzQ29tcG9uZW50ID0gcmVxdWlyZShcIlN0YXRzQ29tcG9uZW50XCIpO1xyXG5cclxuLy8g5Yqo55S754q25oCB5bi46YePXHJcbmNvbnN0IEFuaW1hdGlvblN0YXRlID0ge1xyXG4gICAgQVRUQUNLOiBcImF0a1wiLCAgICAgIC8vIOaUu+WHu+WKqOeUu1xyXG4gICAgQllfQVRLOiBcImJ5YXRrXCIsICAgIC8vIOWPl+WHu+WKqOeUu1xyXG4gICAgRElFOiBcImRpZVwiLCAgICAgICAgIC8vIOatu+S6oeWKqOeUu1xyXG4gICAgU0hJX0hVQTogXCJzaGlodWFcIiwgIC8vIOefs+WMluWKqOeUu1xyXG4gICAgV0FJVDogXCJ3YWl0XCIsICAgICAgIC8vIOW+heacuuWKqOeUu1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIOatu+S6oeWkhOeQhuezu+e7n++8iOaZrumAmuaooeWdl++8iVxyXG4gKi9cclxudmFyIERlYXRoU3lzdGVtID0gY2MuQ2xhc3Moe1xyXG4gICAgbmFtZTogXCJEZWF0aFN5c3RlbVwiLFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHt9LFxyXG5cclxuICAgIGN0b3IobG9nZ2VyLCByZWNvcmRlcikge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xyXG4gICAgICAgIHRoaXMucmVjb3JkZXIgPSByZWNvcmRlcjsgLy8g5oiY5paX6K6w5b2V5Zmo77yI5Y+v6YCJ77yJXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qOA5p+l55uu5qCH5piv5ZCm5q275Lqh77yM6Iul5q275Lqh5omn6KGM5aSE55CG6YC76L6R44CCXHJcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGVudGl0eSAtIOWunuS9k+iKgueCuVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZGVyIC0g5oiY5paX6K6w5b2V5Zmo77yI5Y+v6YCJ77yJXHJcbiAgICAgKi9cclxuICAgIGNoZWNrQW5kSGFuZGxlRGVhdGgoZW50aXR5LCByZWNvcmRlcikge1xyXG4gICAgICAgIC8vIOWmguaenOS8oOWFpeS6hnJlY29yZGVy77yM5L2/55So5Lyg5YWl55qE77yb5ZCm5YiZ5L2/55So5a6e5L6L55qEXHJcbiAgICAgICAgY29uc3QgcmVjb3JkUmVjb3JkZXIgPSByZWNvcmRlciB8fCB0aGlzLnJlY29yZGVyO1xyXG5cclxuICAgICAgICBjb25zdCBzdGF0cyA9IGVudGl0eS5nZXRDb21wb25lbnQoXCJTdGF0c0NvbXBvbmVudFwiKTtcclxuICAgICAgICBpZiAoIXN0YXRzKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChzdGF0cy5ocCA+IDApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8g5bey57uP5q275LqGXHJcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKGDwn5KAICR7ZW50aXR5Lm5hbWV9IOW3suatu+S6oWApO1xyXG5cclxuICAgICAgICAvLyDorrDlvZXmrbvkuqHkuovku7ZcclxuICAgICAgICBpZiAocmVjb3JkUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgcmVjb3JkUmVjb3JkZXIucmVjb3JkRGVhdGgoZW50aXR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOa4heeQhuaJgOaciUJ1ZmblkozmioDog73nibnmlYhcclxuICAgICAgICB0aGlzLl9jbGVhbnVwT25EZWF0aChlbnRpdHkpO1xyXG5cclxuICAgICAgICAvLyDmkq3mlL7mrbvkuqHliqjnlLtcclxuICAgICAgICB0aGlzLl9wbGF5RGVhdGhBbmltYXRpb24oZW50aXR5KTtcclxuXHJcbiAgICAgICAgLy8g5LuO6Zif5LyN5YiX6KGo5Lit56e76ZmkXHJcbiAgICAgICAgY29uc3QgdGVhbSA9IGVudGl0eS5nZXRDb21wb25lbnQoXCJUZWFtQ29tcG9uZW50XCIpO1xyXG4gICAgICAgIGlmICh0ZWFtKSB7XHJcbiAgICAgICAgICAgIGlmICh0ZWFtLnRlYW0gPT09IFwiaGVyb1wiKSB7XHJcbiAgICAgICAgICAgICAgICBUZWFtUmVmLmhlcm9zUmVmID0gVGVhbVJlZi5oZXJvc1JlZi5maWx0ZXIoZSA9PiBlICE9PSBlbnRpdHkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVGVhbVJlZi5tb25zdGVyc1JlZiA9IFRlYW1SZWYubW9uc3RlcnNSZWYuZmlsdGVyKGUgPT4gZSAhPT0gZW50aXR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5riF55CG5q275Lqh5pe255qEQnVmZuWSjOaKgOiDveeJueaViFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2NsZWFudXBPbkRlYXRoKGVudGl0eSkge1xyXG4gICAgICAgIGlmICghZW50aXR5IHx8ICFlbnRpdHkuaXNWYWxpZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBCdWZmU3lzdGVtID0gcmVxdWlyZShcIkJ1ZmZTeXN0ZW1cIik7XHJcbiAgICAgICAgY29uc3QgQnVmZkNvbXBvbmVudCA9IHJlcXVpcmUoXCJCdWZmQ29tcG9uZW50XCIpO1xyXG4gICAgICAgIGNvbnN0IFRlYW1SZWYgPSByZXF1aXJlKFwiVGVhbVJlZlwiKTtcclxuICAgICAgICBjb25zdCBzdGF0cyA9IGVudGl0eS5nZXRDb21wb25lbnQoXCJTdGF0c0NvbXBvbmVudFwiKTtcclxuXHJcbiAgICAgICAgLy8g5riF6Zmk5omA5pyJQnVmZlxyXG4gICAgICAgIGNvbnN0IGJ1ZmZzID0gZW50aXR5LmdldENvbXBvbmVudHMoQnVmZkNvbXBvbmVudCk7XHJcbiAgICAgICAgaWYgKGJ1ZmZzICYmIGJ1ZmZzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgYnVmZiBvZiBidWZmcykge1xyXG4gICAgICAgICAgICAgICAgLy8g6LCD55SoQnVmZueahG9uRXhwaXJl5Zue6LCD77yI5aaC5p6c5a2Y5Zyo77yJXHJcbiAgICAgICAgICAgICAgICBpZiAoYnVmZi5vbkV4cGlyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZmYub25FeHBpcmUoZW50aXR5LCB0aGlzLmxvZ2dlci5sb2cuYmluZCh0aGlzLmxvZ2dlcikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIOaBouWkjeWxnuaAp+S/ruaUue+8iOWmguaenOacie+8iVxyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRzICYmIGJ1ZmYubW9kaWZpZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGJ1ZmYubW9kaWZpZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0c1trZXldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzW2tleV0gLT0gYnVmZi5tb2RpZmllcnNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYnVmZi5tb2RpZmllcnMuc3BlZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0cy51cGRhdGVBdHRhY2tJbnRlcnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDnp7vpmaRCdWZm57uE5Lu2XHJcbiAgICAgICAgICAgICAgICBlbnRpdHkucmVtb3ZlQ29tcG9uZW50KGJ1ZmYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZyhg8J+nuSAke2VudGl0eS5uYW1lfSDmrbvkuqHvvIzlt7LmuIXpmaTmiYDmnIlCdWZmYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmuIXpmaTmiYDmnInnlLHov5nkuKrljZXkvY3ph4rmlL7nmoRCdWZm77yI5L2c55So5Zyo5YW25LuW5Y2V5L2N6Lqr5LiK55qE77yJXHJcbiAgICAgICAgLy8g6YGN5Y6G5omA5pyJ5Y2V5L2N77yM5om+5YiwY2FzdGVy562J5LqO5q275Lqh5Y2V5L2N55qEQnVmZuW5tuenu+mZpFxyXG4gICAgICAgIGNvbnN0IGFsbFVuaXRzID0gWy4uLlRlYW1SZWYuaGVyb3NSZWYsIC4uLlRlYW1SZWYubW9uc3RlcnNSZWZdO1xyXG4gICAgICAgIGxldCByZW1vdmVkQ291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHVuaXQgb2YgYWxsVW5pdHMpIHtcclxuICAgICAgICAgICAgaWYgKCF1bml0IHx8ICF1bml0LmlzVmFsaWQgfHwgdW5pdCA9PT0gZW50aXR5KSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVuaXRCdWZmcyA9IHVuaXQuZ2V0Q29tcG9uZW50cyhCdWZmQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgaWYgKHVuaXRCdWZmcyAmJiB1bml0QnVmZnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYnVmZiBvZiB1bml0QnVmZnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzov5nkuKpCdWZm55qE5pa95rOV6ICF5piv5q275Lqh55qE5Y2V5L2N77yM56e76Zmk5a6DXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1ZmYuY2FzdGVyID09PSBlbnRpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6LCD55SoQnVmZueahG9uRXhwaXJl5Zue6LCDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidWZmLm9uRXhwaXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmLm9uRXhwaXJlKHVuaXQsIHRoaXMubG9nZ2VyLmxvZy5iaW5kKHRoaXMubG9nZ2VyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaBouWkjeWxnuaAp+S/ruaUuVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1bml0U3RhdHMgPSB1bml0LmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodW5pdFN0YXRzICYmIGJ1ZmYubW9kaWZpZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gYnVmZi5tb2RpZmllcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodW5pdFN0YXRzW2tleV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml0U3RhdHNba2V5XSAtPSBidWZmLm1vZGlmaWVyc1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidWZmLm1vZGlmaWVycy5zcGVlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdFN0YXRzLnVwZGF0ZUF0dGFja0ludGVydmFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOaYr+aKpOebvkJ1ZmbvvIzmm7TmlrDooYDmnaHmmL7npLpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1ZmYuYnVmZk5hbWUgPT09IFwi5oqk55u+XCIgJiYgdW5pdFN0YXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml0U3RhdHMudXBkYXRlSGVhbHRoQmFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOenu+mZpEJ1Zmbnu4Tku7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdC5yZW1vdmVDb21wb25lbnQoYnVmZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWRDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coYPCfp7kgJHtlbnRpdHkubmFtZX0g5q275Lqh77yM5bey5riF6ZmkICR7dW5pdC5uYW1lfSDouqvkuIrnmoQgJHtidWZmLmJ1ZmZOYW1lfSBCdWZm77yI55SxICR7ZW50aXR5Lm5hbWV9IOmHiuaUvu+8iWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVtb3ZlZENvdW50ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2coYPCfp7kgJHtlbnRpdHkubmFtZX0g5q275Lqh77yM5bey5riF6ZmkICR7cmVtb3ZlZENvdW50fSDkuKrnlLHku5bph4rmlL7nmoRCdWZm77yI5L2c55So5Zyo5YW25LuW5Y2V5L2N6Lqr5LiK77yJYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDlgZzmraLmioDog73nibnmlYjvvIjlhb3ljJbni4LmmrTjgIHmiJjlkLznrYnvvIlcclxuICAgICAgICBjb25zdCBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICAgICAgaWYgKHNjZW5lKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNraWxsRWZmZWN0UGxheWVyID0gc2NlbmUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihcIlNraWxsRWZmZWN0UGxheWVyXCIpO1xyXG4gICAgICAgICAgICBpZiAoc2tpbGxFZmZlY3RQbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWBnOatouWFveWMlueLguaatOeJueaViFxyXG4gICAgICAgICAgICAgICAgaWYgKHNraWxsRWZmZWN0UGxheWVyLnN0b3BCZWFzdFJhZ2VFZmZlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBza2lsbEVmZmVjdFBsYXllci5zdG9wQmVhc3RSYWdlRWZmZWN0KGVudGl0eSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDlgZzmraLmiJjlkLzmjIHnu63ms6LnurlcclxuICAgICAgICAgICAgICAgIGlmIChza2lsbEVmZmVjdFBsYXllci5fc3RvcFdhckNyeUNvbnRpbnVvdXNXYXZlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNraWxsRWZmZWN0UGxheWVyLl9zdG9wV2FyQ3J5Q29udGludW91c1dhdmVzKGVudGl0eSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOa4heeQhuiKgueCueS4iueahOaJgOacieeykuWtkOeJueaViOWtkOiKgueCue+8iOavlOWmguayu+eWl+acr+eahOeykuWtkOeJueaViO+8iVxyXG4gICAgICAgIGlmIChlbnRpdHkuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgY29uc3QgcGFydGljbGVzVG9SZW1vdmUgPSBbXTtcclxuICAgICAgICAgICAgZW50aXR5LmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g5qOA5p+l5piv5ZCm5piv57KS5a2Q54m55pWI6IqC54K577yI6YCa5bi45ZCN56ew5YyF5ZCrXCJQYXJ0aWNsZVwi44CBXCJFZmZlY3RcIuetie+8iVxyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5hbWUuaW5jbHVkZXMoXCJQYXJ0aWNsZVwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLm5hbWUuaW5jbHVkZXMoXCJFZmZlY3RcIikgfHxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5uYW1lLmluY2x1ZGVzKFwiSGVhbFwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLm5hbWUuaW5jbHVkZXMoXCJSYWdlXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubmFtZS5pbmNsdWRlcyhcIldhckNyeVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlc1RvUmVtb3ZlLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcGFydGljbGVzVG9SZW1vdmUuZm9yRWFjaChwYXJ0aWNsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDlgZzmraLnspLlrZDns7vnu59cclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRpY2xlU3lzdGVtID0gcGFydGljbGUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJ0aWNsZVN5c3RlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtLnN0b3BTeXN0ZW0oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIOmUgOavgeiKgueCuVxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnRpY2xlICYmIHBhcnRpY2xlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocGFydGljbGVzVG9SZW1vdmUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nKGDwn6e5ICR7ZW50aXR5Lm5hbWV9IOatu+S6oe+8jOW3sua4hemZpCAke3BhcnRpY2xlc1RvUmVtb3ZlLmxlbmd0aH0g5Liq5oqA6IO954m55pWIYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+5q275Lqh5Yqo55S7XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfcGxheURlYXRoQW5pbWF0aW9uKGVudGl0eSkge1xyXG4gICAgICAgIGNvbnN0IHNrZWxldG9uID0gZW50aXR5LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgaWYgKHNrZWxldG9uKSB7XHJcbiAgICAgICAgICAgIC8vIOa4hemZpOS5i+WJjeeahOebkeWQrOWZqFxyXG4gICAgICAgICAgICBza2VsZXRvbi5zZXRDb21wbGV0ZUxpc3RlbmVyKG51bGwpO1xyXG4gICAgICAgICAgICAvLyDmkq3mlL7mrbvkuqHliqjnlLvvvIjkuI3lvqrnjq/vvIlcclxuICAgICAgICAgICAgc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIEFuaW1hdGlvblN0YXRlLkRJRSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBjYy5sb2coYFtEZWF0aFN5c3RlbV0gJHtlbnRpdHkubmFtZX0g5pKt5pS+5q275Lqh5Yqo55S7YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2Mud2FybihgW0RlYXRoU3lzdGVtXSAke2VudGl0eS5uYW1lfSDmsqHmnIkgU3BpbmUg57uE5Lu277yM5peg5rOV5pKt5pS+5q275Lqh5Yqo55S7YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRGVhdGhTeXN0ZW07Il19