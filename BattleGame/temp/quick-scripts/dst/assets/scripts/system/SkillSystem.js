
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/system/SkillSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '01fd0unYPVBrJ7KsPw9a4Fl', 'SkillSystem');
// Scripts/system/SkillSystem.js

"use strict";

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var StatsComponent = require("StatsComponent");
var SkillComponent = require("SkillComponent");
var BuffSystem = require("BuffSystem");
var BuffFactory = require("BuffFactory");
var CombatSystem = require("CombatSystem");
var SkillSystem = {
  updateCooldowns: function updateCooldowns(entity, dt) {
    var skills = entity.getComponent("SkillComponent");
    if (!skills) return;
    for (var _iterator = _createForOfIteratorHelperLoose(skills.skills), _step; !(_step = _iterator()).done;) {
      var s = _step.value;
      skills.cooldowns[s.id] += dt;
    }
  },
  findAvailableSkill: function findAvailableSkill(entity) {
    var skills = entity.getComponent("SkillComponent");
    var stats = entity.getComponent("StatsComponent");
    if (!skills) return null;

    // 优先检查大招（AI自动释放：需要怒气值达到requireRage要求）
    // 查找所有需要怒气值的技能（大招）
    var ultimateSkills = skills.skills.filter(function (s) {
      return s.requireRage > 0;
    });
    if (ultimateSkills.length > 0 && stats) {
      // AI自动释放条件：怒气值 >= requireRage（达到技能要求的怒气值即可释放）
      // 找到第一个满足怒气值要求的大招（大招不受冷却时间限制，怒气值满足即可释放）
      for (var _iterator2 = _createForOfIteratorHelperLoose(ultimateSkills), _step2; !(_step2 = _iterator2()).done;) {
        var ultimateSkill = _step2.value;
        if (stats.rage >= ultimateSkill.requireRage) {
          // 大招：只要怒气值满足要求，即使冷却时间未到也可以释放
          cc.log("[SkillSystem] AI\u81EA\u52A8\u91CA\u653E\u5927\u62DB: " + entity.name + " \u6012\u6C14\u503C=" + stats.rage + "/" + stats.maxRage + ", \u6280\u80FD=" + ultimateSkill.skillName + ", requireRage=" + ultimateSkill.requireRage + ", \u51B7\u5374\u65F6\u95F4=" + skills.cooldowns[ultimateSkill.id] + "/" + ultimateSkill.cooldown);
          return ultimateSkill;
        }
      }
    }
    var normalId = 1;
    // 排除普通攻击和所有大招技能
    var nonNormal = skills.skills.filter(function (s) {
      return s.id !== normalId && (!s.requireRage || s.requireRage === 0);
    });
    var normal = skills.skills.find(function (s) {
      return s.id === normalId;
    });
    for (var _iterator3 = _createForOfIteratorHelperLoose(nonNormal), _step3; !(_step3 = _iterator3()).done;) {
      var s = _step3.value;
      if (skills.cooldowns[s.id] >= s.cooldown) return s;
    }
    if (normal && skills.cooldowns[normal.id] >= normal.cooldown) return normal;
    return null;
  },
  /**
   * 检查是否可以释放大招（手动释放：怒气值满即可）
   * @param {cc.Node} entity - 实体节点
   * @returns {boolean}
   */
  canUseUltimateSkill: function canUseUltimateSkill(entity) {
    var skills = entity.getComponent("SkillComponent");
    var stats = entity.getComponent("StatsComponent");
    if (!skills || !stats) {
      // cc.log(`[SkillSystem] canUseUltimateSkill: 缺少组件 - skills=${!!skills}, stats=${!!stats}`);
      return false;
    }

    // 查找所有需要怒气值的技能（大招）
    var ultimateSkills = skills.skills.filter(function (s) {
      return s.requireRage > 0;
    });
    // cc.log(`[SkillSystem] ${entity.name} 检查大招: 怒气值=${stats.rage}/${stats.maxRage}, 大招数量=${ultimateSkills.length}`);

    if (ultimateSkills.length === 0) {
      // cc.log(`[SkillSystem] ${entity.name} 没有大招技能（requireRage > 0）`);
      // 打印所有技能信息用于调试
      // skills.skills.forEach(s => {
      //     cc.log(`[SkillSystem] 技能: ${s.skillName}, id=${s.id}, requireRage=${s.requireRage}`);
      // });
      return false;
    }

    // 手动释放：怒气值满（>= maxRage）即可
    // 检查是否有至少一个大招满足怒气值要求
    var canUse = ultimateSkills.some(function (s) {
      var canUseThis = stats.rage >= stats.maxRage && stats.rage >= s.requireRage;
      // cc.log(`[SkillSystem] 检查大招 ${s.skillName}: requireRage=${s.requireRage}, 当前怒气=${stats.rage}, maxRage=${stats.maxRage}, 可用=${canUseThis}`);
      return canUseThis;
    });

    // cc.log(`[SkillSystem] ${entity.name} 可以释放大招: ${canUse}`);
    return canUse;
  },
  /**
   * 获取角色的大招技能
   * @param {cc.Node} entity - 实体节点
   * @returns {Object|null} 大招技能对象，如果没有则返回null
   */
  getUltimateSkill: function getUltimateSkill(entity) {
    var skills = entity.getComponent("SkillComponent");
    if (!skills) {
      // cc.log(`[SkillSystem] getUltimateSkill: ${entity.name} 没有SkillComponent`);
      return null;
    }

    // 返回第一个需要怒气值的技能（大招）
    var ultimateSkill = skills.skills.find(function (s) {
      return s.requireRage > 0;
    }) || null;
    if (ultimateSkill) {
      // cc.log(`[SkillSystem] getUltimateSkill: ${entity.name} 找到大招 ${ultimateSkill.skillName}, requireRage=${ultimateSkill.requireRage}`);
    } else {
      // cc.log(`[SkillSystem] getUltimateSkill: ${entity.name} 没有找到大招技能`);
      // 打印所有技能信息用于调试
      // skills.skills.forEach(s => {
      //     cc.log(`[SkillSystem] 技能: ${s.skillName}, id=${s.id}, requireRage=${s.requireRage}`);
      // });
    }
    return ultimateSkill;
  },
  /**
   * 手动释放大招（点击角色时调用）
   * @param {cc.Node} entity - 实体节点
   * @param {cc.Node} target - 目标
   * @param {Function} log - 日志函数
   * @param {Function} rand - 随机数函数
   * @returns {boolean} 是否成功释放
   */
  useUltimateSkill: function useUltimateSkill(entity, target, log, rand) {
    var _this = this;
    // 检查角色是否已死亡
    var stats = entity.getComponent("StatsComponent");
    if (stats && stats.isDead()) {
      log(entity.name + " \u5DF2\u6B7B\u4EA1\uFF0C\u7981\u6B62\u91CA\u653E\u5927\u62DB");
      return false;
    }
    if (!this.canUseUltimateSkill(entity)) {
      log(entity.name + " \u6012\u6C14\u503C\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u91CA\u653E\u5927\u62DB");
      return false;
    }
    var ultimateSkill = this.getUltimateSkill(entity);
    if (!ultimateSkill) {
      log(entity.name + " \u6CA1\u6709\u5927\u62DB\u6280\u80FD");
      return false;
    }
    if (!target) {
      // 如果没有指定目标，自动选择目标
      var TeamComponent = require("TeamComponent");
      var TeamRef = require("TeamRef");
      var teamComp = entity.getComponent("TeamComponent");
      if (teamComp) {
        var enemies = teamComp.team === "hero" ? TeamRef.monstersRef : TeamRef.herosRef;
        target = enemies.find(function (e) {
          var s = e.getComponent("StatsComponent");
          return s && !s.isDead();
        });
      }
    }
    if (!target) {
      log(entity.name + " \u6CA1\u6709\u53EF\u653B\u51FB\u7684\u76EE\u6807");
      return false;
    }
    log("\uD83C\uDFAF " + entity.name + " \u624B\u52A8\u91CA\u653E\u5927\u62DB\uFF1A" + ultimateSkill.skillName + "\uFF01");

    // 显示大招UI（蒙版+顶部动画）
    this._showUltimateSkillUI(entity, ultimateSkill.skillName, function () {
      // UI显示完成后，消耗怒气值并释放技能
      // 注意：传递一个特殊标记"manual"作为recorder，表示这是手动释放，避免重复显示UI
      if (stats && ultimateSkill.requireRage > 0) {
        stats.consumeRage(ultimateSkill.requireRage);
      }
      // 直接调用_executeSkill，避免useSkill中的重复UI显示逻辑
      _this._executeSkill(entity, target, ultimateSkill, log, rand, "manual", stats);
    });
    return true;
  },
  useSkill: function useSkill(entity, target, skill, log, rand, recorder) {
    var _this2 = this;
    var stats = entity.getComponent("StatsComponent");

    // 检查是否需要怒气值（大招）
    if (skill.requireRage && skill.requireRage > 0) {
      if (!stats || stats.rage < skill.requireRage) {
        log(entity.name + " \u6012\u6C14\u503C\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u91CA\u653E " + skill.skillName);
        return;
      }

      // 手动释放的大招：已经在useUltimateSkill中消耗了怒气值，直接执行
      if (recorder === "manual") {
        this._executeSkill(entity, target, skill, log, rand, recorder, stats);
        return;
      }

      // AI自动释放的大招：显示UI后消耗怒气值
      // recorder为null/undefined时表示AI自动释放（没有战斗记录器）
      // recorder为对象时也表示AI自动释放（有战斗记录器，但这是AI自动触发的）
      // 注意：需要传递callback参数，用于在技能执行完成后通知ActionSystem
      var actionCallback = entity._actionCallback || null; // 从entity获取callback（由ActionSystem设置）
      this._showUltimateSkillUI(entity, skill.skillName || skill.name, function () {
        // UI显示完成后，消耗怒气值并执行技能
        if (stats && skill.requireRage > 0) {
          stats.consumeRage(skill.requireRage);
        }
        // 继续执行技能（传递recorder，可能是null或BattleRecorder对象）
        _this2._executeSkill(entity, target, skill, log, rand, recorder, stats);

        // 技能执行完成后，调用callback通知ActionSystem
        if (actionCallback) {
          // 清除临时保存的callback
          entity._actionCallback = null;
          // 调用callback
          actionCallback();
        }
      });
      return;
    }

    // 普通技能直接执行
    this._executeSkill(entity, target, skill, log, rand, recorder, stats);
  },
  /**
   * 执行技能效果（内部方法）
   * @private
   */
  _executeSkill: function _executeSkill(entity, target, skill, log, rand, recorder, stats) {
    // 记录技能释放（recorder必须是对象，不能是字符串）
    if (recorder && typeof recorder === 'object' && recorder.recordSkillUse) {
      recorder.recordSkillUse(entity, target, skill);
    }

    // 播放技能特效
    this._playSkillEffect(entity, target, skill);
    var events = skill.effect(entity, target, log, rand);
    for (var _iterator4 = _createForOfIteratorHelperLoose(events), _step4; !(_step4 = _iterator4()).done;) {
      var evt = _step4.value;
      switch (evt.type) {
        case "damage":
          CombatSystem.damage(entity, target, evt.value, log, recorder, rand);
          break;
        case "damageTrue":
          CombatSystem.damageTrue(entity, target, evt.value, log, recorder, rand);
          break;
        case "heal":
          // 治疗事件：evt.target 是目标单位，evt.value 是治疗量
          var healTarget = evt.target || target;
          CombatSystem.heal(entity, healTarget, evt.value, log, recorder);
          break;
        case "applyBuff":
          // Buff事件：evt.target 是目标单位（如果指定），否则使用默认target
          var buffTarget = evt.target || target;
          // 传递施法者（entity），用于在施法者死亡时清除Buff
          BuffSystem.addBuff(buffTarget, BuffFactory.create(evt.buff), log, recorder, entity);
          break;
        case "applyBuffSelf":
          // 传递施法者（entity），用于在施法者死亡时清除Buff
          BuffSystem.addBuff(entity, BuffFactory.create(evt.buff), log, recorder, entity);
          break;
        case "removeNegativeBuffs":
          // 移除负面Buff事件：evt.target 是目标单位，evt.buffNames 是要移除的Buff名称列表
          var cleanseTarget = evt.target || target;
          var buffNames = evt.buffNames || [];
          BuffSystem.removeBuffs(cleanseTarget, buffNames, log, recorder);
          break;
        default:
          log("\u672A\u77E5\u4E8B\u4EF6\u7C7B\u578B: " + evt.type);
      }
    }
    entity.getComponent("SkillComponent").cooldowns[skill.id] = 0;
  },
  /**
   * 显示大招UI（蒙版+顶部动画）
   * @private
   * @param {cc.Node} entity - 施法者节点
   * @param {string} skillName - 技能名称
   * @param {Function} onComplete - 完成回调
   */
  _showUltimateSkillUI: function _showUltimateSkillUI(entity, skillName, onComplete) {
    // 查找场景中的UltimateSkillUI组件
    var scene = cc.director.getScene();
    if (!scene) {
      cc.warn("[SkillSystem] 无法找到场景，跳过大招UI显示");
      if (onComplete) onComplete();
      return;
    }
    var canvas = scene.getChildByName("Canvas");
    if (!canvas) {
      cc.warn("[SkillSystem] 无法找到Canvas节点，跳过大招UI显示");
      if (onComplete) onComplete();
      return;
    }

    // 查找UltimateSkillUI组件（递归查找，更可靠）
    var ultimateSkillUI = null;

    // 方法1: 在Canvas节点本身查找组件
    ultimateSkillUI = canvas.getComponent("UltimateSkillUI");

    // 方法2: 在Canvas的子节点中查找名为"UltimateSkillUI"的节点
    if (!ultimateSkillUI) {
      var uiNode = canvas.getChildByName("UltimateSkillUI");
      if (uiNode) {
        ultimateSkillUI = uiNode.getComponent("UltimateSkillUI");
      }
    }

    // 方法3: 使用getComponentInChildren递归查找（最可靠）
    if (!ultimateSkillUI) {
      ultimateSkillUI = canvas.getComponentInChildren("UltimateSkillUI");
    }

    // 方法4: 遍历Canvas的所有子节点查找
    if (!ultimateSkillUI) {
      var findComponent = function findComponent(node, componentName) {
        var comp = node.getComponent(componentName);
        if (comp) return comp;
        for (var _iterator5 = _createForOfIteratorHelperLoose(node.children), _step5; !(_step5 = _iterator5()).done;) {
          var child = _step5.value;
          var result = findComponent(child, componentName);
          if (result) return result;
        }
        return null;
      };
      ultimateSkillUI = findComponent(canvas, "UltimateSkillUI");
    }
    if (!ultimateSkillUI) {
      cc.warn("[SkillSystem] 未找到UltimateSkillUI组件，跳过大招UI显示");
      cc.warn("[SkillSystem] 请在Canvas或其子节点上添加UltimateSkillUI组件");
      cc.warn("[SkillSystem] 建议：在Canvas下创建名为'UltimateSkillUI'的子节点，并添加UltimateSkillUI组件");
      if (onComplete) onComplete();
      return;
    }
    cc.log("[SkillSystem] \u2713 \u627E\u5230UltimateSkillUI\u7EC4\u4EF6\uFF0C\u8282\u70B9: " + ultimateSkillUI.node.name);

    // 从UnitDataConfig获取头像资源
    var UnitDataConfig = require("UnitDataConfig");
    var avatarSpriteFrame = null;

    // 查找对应的单位配置
    var allUnits = [].concat(UnitDataConfig.heros || [], UnitDataConfig.monsters || []);
    var unitData = allUnits.find(function (u) {
      return u.name === entity.name;
    });
    if (unitData && unitData.icon) {
      avatarSpriteFrame = unitData.icon;
    }

    // 显示大招UI
    ultimateSkillUI.showUltimateSkill(entity, skillName, avatarSpriteFrame, onComplete);
  },
  /**
   * 播放技能特效
   * @param {cc.Node} entity - 施法者
   * @param {cc.Node} target - 目标
   * @param {Object} skill - 技能对象
   */
  _playSkillEffect: function _playSkillEffect(entity, target, skill) {
    // 获取技能名称（SkillComponent中使用的是skillName，不是name）
    var skillName = skill.skillName || skill.name;

    // cc.log(`[SkillSystem] ===== 开始播放技能特效 =====`);
    // cc.log(`[SkillSystem] 技能: ${skillName || 'null'}, 技能ID: ${skill.id}, 施法者: ${entity ? entity.name : 'null'}, 目标: ${target ? target.name : 'null'}`);
    // cc.log(`[SkillSystem] 技能对象属性: skillName=${skill.skillName}, name=${skill.name}, id=${skill.id}`);

    if (!entity || !target || !skill) {
      cc.warn("[SkillSystem] 无法播放技能特效：参数不完整");
      cc.warn("[SkillSystem] entity: " + entity + ", target: " + target + ", skill: " + skill);
      return;
    }

    // 如果没有技能名称，尝试通过ID匹配
    if (!skillName && skill.id) {
      var skillIdToName = {
        1: "普通攻击",
        2: "盾击",
        3: "火球术",
        4: "狂暴",
        5: "战吼",
        6: "群体护盾",
        7: "兽化狂暴",
        9: "治疗术",
        10: "净化术"
      };
      var mappedName = skillIdToName[skill.id];
      if (mappedName) {
        // cc.log(`[SkillSystem] 通过技能ID ${skill.id} 映射到技能名称: ${mappedName}`);
        skillName = mappedName;
      }
    }

    // 查找或创建特效播放器
    var effectPlayer = entity.getComponent("SkillEffectPlayer");
    // cc.log(`[SkillSystem] 从实体获取SkillEffectPlayer: ${effectPlayer ? '成功' : '失败'}`);

    if (!effectPlayer) {
      // 如果实体上没有特效播放器，尝试从场景根节点查找全局的
      var scene = cc.director.getScene();
      if (scene) {
        // cc.log(`[SkillSystem] 场景名称: ${scene.name}`);
        effectPlayer = scene.getComponentInChildren("SkillEffectPlayer");
        // cc.log(`[SkillSystem] 从场景获取SkillEffectPlayer: ${effectPlayer ? '成功' : '失败'}`);

        // 如果还是没有，动态创建一个
        if (!effectPlayer) {
          var effectNode = new cc.Node("SkillEffectPlayer");
          effectPlayer = effectNode.addComponent("SkillEffectPlayer");
          // Scene对象不能直接addChild，需要添加到Canvas节点
          var canvas = scene.getChildByName("Canvas");
          if (canvas) {
            canvas.addChild(effectNode);
            // cc.log("[SkillSystem] 动态创建了SkillEffectPlayer节点，添加到Canvas");
          } else {
            // 如果没有Canvas，尝试添加到场景的第一个子节点
            if (scene.children.length > 0) {
              scene.children[0].addChild(effectNode);
              // cc.log("[SkillSystem] 动态创建了SkillEffectPlayer节点，添加到场景第一个子节点");
            } else {
              cc.error("[SkillSystem] 无法找到Canvas节点或场景子节点，无法创建SkillEffectPlayer");
            }
          }
        }
      } else {
        cc.error("[SkillSystem] 无法获取场景对象");
      }
    }
    if (effectPlayer && effectPlayer.playSkillEffect) {
      // cc.log(`[SkillSystem] 准备播放技能特效：${skillName}，施法者：${entity.name}，目标：${target.name}`);
      // cc.log(`[SkillSystem] effectPlayer.fireballPrefab: ${effectPlayer.fireballPrefab ? '已绑定' : '未绑定'}`);
      effectPlayer.playSkillEffect(skillName, entity, target);
    } else {
      cc.error("[SkillSystem] \u65E0\u6CD5\u627E\u5230SkillEffectPlayer\u7EC4\u4EF6\u6216playSkillEffect\u65B9\u6CD5\uFF0C\u6280\u80FD\uFF1A" + skillName);
      cc.error("[SkillSystem] effectPlayer: " + effectPlayer + ", playSkillEffect: " + (effectPlayer ? effectPlayer.playSkillEffect : 'null'));
    }
  }
};
module.exports = SkillSystem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxTa2lsbFN5c3RlbS5qcyJdLCJuYW1lcyI6WyJTdGF0c0NvbXBvbmVudCIsInJlcXVpcmUiLCJTa2lsbENvbXBvbmVudCIsIkJ1ZmZTeXN0ZW0iLCJCdWZmRmFjdG9yeSIsIkNvbWJhdFN5c3RlbSIsIlNraWxsU3lzdGVtIiwidXBkYXRlQ29vbGRvd25zIiwiZW50aXR5IiwiZHQiLCJza2lsbHMiLCJnZXRDb21wb25lbnQiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlIiwiX3N0ZXAiLCJkb25lIiwicyIsInZhbHVlIiwiY29vbGRvd25zIiwiaWQiLCJmaW5kQXZhaWxhYmxlU2tpbGwiLCJzdGF0cyIsInVsdGltYXRlU2tpbGxzIiwiZmlsdGVyIiwicmVxdWlyZVJhZ2UiLCJsZW5ndGgiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwidWx0aW1hdGVTa2lsbCIsInJhZ2UiLCJjYyIsImxvZyIsIm5hbWUiLCJtYXhSYWdlIiwic2tpbGxOYW1lIiwiY29vbGRvd24iLCJub3JtYWxJZCIsIm5vbk5vcm1hbCIsIm5vcm1hbCIsImZpbmQiLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwiY2FuVXNlVWx0aW1hdGVTa2lsbCIsImNhblVzZSIsInNvbWUiLCJjYW5Vc2VUaGlzIiwiZ2V0VWx0aW1hdGVTa2lsbCIsInVzZVVsdGltYXRlU2tpbGwiLCJ0YXJnZXQiLCJyYW5kIiwiX3RoaXMiLCJpc0RlYWQiLCJUZWFtQ29tcG9uZW50IiwiVGVhbVJlZiIsInRlYW1Db21wIiwiZW5lbWllcyIsInRlYW0iLCJtb25zdGVyc1JlZiIsImhlcm9zUmVmIiwiZSIsIl9zaG93VWx0aW1hdGVTa2lsbFVJIiwiY29uc3VtZVJhZ2UiLCJfZXhlY3V0ZVNraWxsIiwidXNlU2tpbGwiLCJza2lsbCIsInJlY29yZGVyIiwiX3RoaXMyIiwiYWN0aW9uQ2FsbGJhY2siLCJfYWN0aW9uQ2FsbGJhY2siLCJyZWNvcmRTa2lsbFVzZSIsIl9wbGF5U2tpbGxFZmZlY3QiLCJldmVudHMiLCJlZmZlY3QiLCJfaXRlcmF0b3I0IiwiX3N0ZXA0IiwiZXZ0IiwidHlwZSIsImRhbWFnZSIsImRhbWFnZVRydWUiLCJoZWFsVGFyZ2V0IiwiaGVhbCIsImJ1ZmZUYXJnZXQiLCJhZGRCdWZmIiwiY3JlYXRlIiwiYnVmZiIsImNsZWFuc2VUYXJnZXQiLCJidWZmTmFtZXMiLCJyZW1vdmVCdWZmcyIsIm9uQ29tcGxldGUiLCJzY2VuZSIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJ3YXJuIiwiY2FudmFzIiwiZ2V0Q2hpbGRCeU5hbWUiLCJ1bHRpbWF0ZVNraWxsVUkiLCJ1aU5vZGUiLCJnZXRDb21wb25lbnRJbkNoaWxkcmVuIiwiZmluZENvbXBvbmVudCIsIm5vZGUiLCJjb21wb25lbnROYW1lIiwiY29tcCIsIl9pdGVyYXRvcjUiLCJjaGlsZHJlbiIsIl9zdGVwNSIsImNoaWxkIiwicmVzdWx0IiwiVW5pdERhdGFDb25maWciLCJhdmF0YXJTcHJpdGVGcmFtZSIsImFsbFVuaXRzIiwiY29uY2F0IiwiaGVyb3MiLCJtb25zdGVycyIsInVuaXREYXRhIiwidSIsImljb24iLCJzaG93VWx0aW1hdGVTa2lsbCIsInNraWxsSWRUb05hbWUiLCJtYXBwZWROYW1lIiwiZWZmZWN0UGxheWVyIiwiZWZmZWN0Tm9kZSIsIk5vZGUiLCJhZGRDb21wb25lbnQiLCJhZGRDaGlsZCIsImVycm9yIiwicGxheVNraWxsRWZmZWN0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxjQUFjLEdBQUdDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztBQUM5QyxJQUFJQyxjQUFjLEdBQUdELE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztBQUM5QyxJQUFJRSxVQUFVLEdBQUdGLE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFDdEMsSUFBSUcsV0FBVyxHQUFHSCxPQUFPLENBQUMsYUFBYSxDQUFDO0FBQ3hDLElBQUlJLFlB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Q0FBQyxRQUFRLENBQUM7VUFDN0MsSUFBSUQsTUFBTSxFQUFFO1lBQ1JBLE1BQU0sQ0FBQzhCLFFBQVEsQ0FBQ0gsVUFBVSxDQUFDO1lBQzNCO1VBQ0osQ0FBQyxNQUFNO1lBQ0g7WUFDQSxJQUFJL0IsS0FBSyxDQUFDYyxRQUFRLENBQUM5RSxNQUFNLEdBQUcsQ0FBQyxFQUFFO2NBQzNCZ0UsS0FBSyxDQUFDYyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNvQixRQUFRLENBQUNILFVBQVUsQ0FBQztjQUN0QztZQUNKLENBQUMsTUFBTTtjQUNIMUYsRUFBRSxDQUFDOEYsS0FBSyxDQUFDLHdEQUF3RCxDQUFDO1lBQ3RFO1VBQ0o7UUFDSjtNQUNKLENBQUMsTUFBTTtRQUNIOUYsRUFBRSxDQUFDOEYsS0FBSyxDQUFDLHdCQUF3QixDQUFDO01BQ3RDO0lBQ0o7SUFFQSxJQUFJTCxZQUFZLElBQUlBLFlBQVksQ0FBQ00sZUFBZSxFQUFFO01BQzlDO01BQ0E7TUFDQU4sWUFBWSxDQUFDTSxlQUFlLENBQUMzRixTQUFTLEVBQUUxQixNQUFNLEVBQUV3QyxNQUFNLENBQUM7SUFDM0QsQ0FBQyxNQUFNO01BQ0hsQixFQUFFLENBQUM4RixLQUFLLGtJQUErRDFGLFNBQVMsQ0FBRztNQUNuRkosRUFBRSxDQUFDOEYsS0FBSyxrQ0FBZ0NMLFlBQVksNEJBQXNCQSxZQUFZLEdBQUdBLFlBQVksQ0FBQ00sZUFBZSxHQUFHLE1BQU0sRUFBRztJQUNySTtFQUNKO0FBQ0osQ0FBQztBQUVEQyxNQUFNLENBQUNDLE9BQU8sR0FBR3pILFdBQVciLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTdGF0c0NvbXBvbmVudCA9IHJlcXVpcmUoXCJTdGF0c0NvbXBvbmVudFwiKTtcbnZhciBTa2lsbENvbXBvbmVudCA9IHJlcXVpcmUoXCJTa2lsbENvbXBvbmVudFwiKTtcbnZhciBCdWZmU3lzdGVtID0gcmVxdWlyZShcIkJ1ZmZTeXN0ZW1cIik7XG52YXIgQnVmZkZhY3RvcnkgPSByZXF1aXJlKFwiQnVmZkZhY3RvcnlcIik7XG52YXIgQ29tYmF0U3lzdGVtID0gcmVxdWlyZShcIkNvbWJhdFN5c3RlbVwiKTtcblxudmFyIFNraWxsU3lzdGVtID0ge1xuXG4gICAgdXBkYXRlQ29vbGRvd25zKGVudGl0eSwgZHQpIHtcbiAgICAgICAgY29uc3Qgc2tpbGxzID0gZW50aXR5LmdldENvbXBvbmVudChcIlNraWxsQ29tcG9uZW50XCIpO1xuICAgICAgICBpZiAoIXNraWxscykgcmV0dXJuO1xuXG4gICAgICAgIGZvciAobGV0IHMgb2Ygc2tpbGxzLnNraWxscykge1xuICAgICAgICAgICAgc2tpbGxzLmNvb2xkb3duc1tzLmlkXSArPSBkdDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBmaW5kQXZhaWxhYmxlU2tpbGwoZW50aXR5KSB7XG4gICAgICAgIGNvbnN0IHNraWxscyA9IGVudGl0eS5nZXRDb21wb25lbnQoXCJTa2lsbENvbXBvbmVudFwiKTtcbiAgICAgICAgY29uc3Qgc3RhdHMgPSBlbnRpdHkuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XG4gICAgICAgIGlmICghc2tpbGxzKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAvLyDkvJjlhYjmo4Dmn6XlpKfmi5vvvIhBSeiHquWKqOmHiuaUvu+8mumcgOimgeaAkuawlOWAvOi+vuWIsHJlcXVpcmVSYWdl6KaB5rGC77yJXG4gICAgICAgIC8vIOafpeaJvuaJgOaciemcgOimgeaAkuawlOWAvOeahOaKgOiDve+8iOWkp+aLm++8iVxuICAgICAgICBjb25zdCB1bHRpbWF0ZVNraWxscyA9IHNraWxscy5za2lsbHMuZmlsdGVyKHMgPT4gcy5yZXF1aXJlUmFnZSA+IDApO1xuICAgICAgICBpZiAodWx0aW1hdGVTa2lsbHMubGVuZ3RoID4gMCAmJiBzdGF0cykge1xuICAgICAgICAgICAgLy8gQUnoh6rliqjph4rmlL7mnaHku7bvvJrmgJLmsJTlgLwgPj0gcmVxdWlyZVJhZ2XvvIjovr7liLDmioDog73opoHmsYLnmoTmgJLmsJTlgLzljbPlj6/ph4rmlL7vvIlcbiAgICAgICAgICAgIC8vIOaJvuWIsOesrOS4gOS4qua7oei2s+aAkuawlOWAvOimgeaxgueahOWkp+aLm++8iOWkp+aLm+S4jeWPl+WGt+WNtOaXtumXtOmZkOWItu+8jOaAkuawlOWAvOa7oei2s+WNs+WPr+mHiuaUvu+8iVxuICAgICAgICAgICAgZm9yIChsZXQgdWx0aW1hdGVTa2lsbCBvZiB1bHRpbWF0ZVNraWxscykge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0cy5yYWdlID49IHVsdGltYXRlU2tpbGwucmVxdWlyZVJhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5aSn5oub77ya5Y+q6KaB5oCS5rCU5YC85ruh6Laz6KaB5rGC77yM5Y2z5L2/5Ya35Y205pe26Ze05pyq5Yiw5Lmf5Y+v5Lul6YeK5pS+XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW1NraWxsU3lzdGVtXSBBSeiHquWKqOmHiuaUvuWkp+aLmzogJHtlbnRpdHkubmFtZX0g5oCS5rCU5YC8PSR7c3RhdHMucmFnZX0vJHtzdGF0cy5tYXhSYWdlfSwg5oqA6IO9PSR7dWx0aW1hdGVTa2lsbC5za2lsbE5hbWV9LCByZXF1aXJlUmFnZT0ke3VsdGltYXRlU2tpbGwucmVxdWlyZVJhZ2V9LCDlhrfljbTml7bpl7Q9JHtza2lsbHMuY29vbGRvd25zW3VsdGltYXRlU2tpbGwuaWRdfS8ke3VsdGltYXRlU2tpbGwuY29vbGRvd259YCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bHRpbWF0ZVNraWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vcm1hbElkID0gMTtcbiAgICAgICAgLy8g5o6S6Zmk5pmu6YCa5pS75Ye75ZKM5omA5pyJ5aSn5oub5oqA6IO9XG4gICAgICAgIGNvbnN0IG5vbk5vcm1hbCA9IHNraWxscy5za2lsbHMuZmlsdGVyKHMgPT4gcy5pZCAhPT0gbm9ybWFsSWQgJiYgKCFzLnJlcXVpcmVSYWdlIHx8IHMucmVxdWlyZVJhZ2UgPT09IDApKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsID0gc2tpbGxzLnNraWxscy5maW5kKHMgPT4gcy5pZCA9PT0gbm9ybWFsSWQpO1xuXG4gICAgICAgIGZvciAobGV0IHMgb2Ygbm9uTm9ybWFsKVxuICAgICAgICAgICAgaWYgKHNraWxscy5jb29sZG93bnNbcy5pZF0gPj0gcy5jb29sZG93bilcbiAgICAgICAgICAgICAgICByZXR1cm4gcztcblxuICAgICAgICBpZiAobm9ybWFsICYmIHNraWxscy5jb29sZG93bnNbbm9ybWFsLmlkXSA+PSBub3JtYWwuY29vbGRvd24pXG4gICAgICAgICAgICByZXR1cm4gbm9ybWFsO1xuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmo4Dmn6XmmK/lkKblj6/ku6Xph4rmlL7lpKfmi5vvvIjmiYvliqjph4rmlL7vvJrmgJLmsJTlgLzmu6HljbPlj6/vvIlcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGVudGl0eSAtIOWunuS9k+iKgueCuVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGNhblVzZVVsdGltYXRlU2tpbGwoZW50aXR5KSB7XG4gICAgICAgIGNvbnN0IHNraWxscyA9IGVudGl0eS5nZXRDb21wb25lbnQoXCJTa2lsbENvbXBvbmVudFwiKTtcbiAgICAgICAgY29uc3Qgc3RhdHMgPSBlbnRpdHkuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XG4gICAgICAgIGlmICghc2tpbGxzIHx8ICFzdGF0cykge1xuICAgICAgICAgICAgLy8gY2MubG9nKGBbU2tpbGxTeXN0ZW1dIGNhblVzZVVsdGltYXRlU2tpbGw6IOe8uuWwkee7hOS7tiAtIHNraWxscz0keyEhc2tpbGxzfSwgc3RhdHM9JHshIXN0YXRzfWApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5p+l5om+5omA5pyJ6ZyA6KaB5oCS5rCU5YC855qE5oqA6IO977yI5aSn5oub77yJXG4gICAgICAgIGNvbnN0IHVsdGltYXRlU2tpbGxzID0gc2tpbGxzLnNraWxscy5maWx0ZXIocyA9PiBzLnJlcXVpcmVSYWdlID4gMCk7XG4gICAgICAgIC8vIGNjLmxvZyhgW1NraWxsU3lzdGVtXSAke2VudGl0eS5uYW1lfSDmo4Dmn6XlpKfmi5s6IOaAkuawlOWAvD0ke3N0YXRzLnJhZ2V9LyR7c3RhdHMubWF4UmFnZX0sIOWkp+aLm+aVsOmHjz0ke3VsdGltYXRlU2tpbGxzLmxlbmd0aH1gKTtcblxuICAgICAgICBpZiAodWx0aW1hdGVTa2lsbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBjYy5sb2coYFtTa2lsbFN5c3RlbV0gJHtlbnRpdHkubmFtZX0g5rKh5pyJ5aSn5oub5oqA6IO977yIcmVxdWlyZVJhZ2UgPiAw77yJYCk7XG4gICAgICAgICAgICAvLyDmiZPljbDmiYDmnInmioDog73kv6Hmga/nlKjkuo7osIPor5VcbiAgICAgICAgICAgIC8vIHNraWxscy5za2lsbHMuZm9yRWFjaChzID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjYy5sb2coYFtTa2lsbFN5c3RlbV0g5oqA6IO9OiAke3Muc2tpbGxOYW1lfSwgaWQ9JHtzLmlkfSwgcmVxdWlyZVJhZ2U9JHtzLnJlcXVpcmVSYWdlfWApO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmiYvliqjph4rmlL7vvJrmgJLmsJTlgLzmu6HvvIg+PSBtYXhSYWdl77yJ5Y2z5Y+vXG4gICAgICAgIC8vIOajgOafpeaYr+WQpuacieiHs+WwkeS4gOS4quWkp+aLm+a7oei2s+aAkuawlOWAvOimgeaxglxuICAgICAgICBjb25zdCBjYW5Vc2UgPSB1bHRpbWF0ZVNraWxscy5zb21lKHMgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FuVXNlVGhpcyA9IHN0YXRzLnJhZ2UgPj0gc3RhdHMubWF4UmFnZSAmJiBzdGF0cy5yYWdlID49IHMucmVxdWlyZVJhZ2U7XG4gICAgICAgICAgICAvLyBjYy5sb2coYFtTa2lsbFN5c3RlbV0g5qOA5p+l5aSn5oubICR7cy5za2lsbE5hbWV9OiByZXF1aXJlUmFnZT0ke3MucmVxdWlyZVJhZ2V9LCDlvZPliY3mgJLmsJQ9JHtzdGF0cy5yYWdlfSwgbWF4UmFnZT0ke3N0YXRzLm1heFJhZ2V9LCDlj6/nlKg9JHtjYW5Vc2VUaGlzfWApO1xuICAgICAgICAgICAgcmV0dXJuIGNhblVzZVRoaXM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNjLmxvZyhgW1NraWxsU3lzdGVtXSAke2VudGl0eS5uYW1lfSDlj6/ku6Xph4rmlL7lpKfmi5s6ICR7Y2FuVXNlfWApO1xuICAgICAgICByZXR1cm4gY2FuVXNlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDojrflj5bop5LoibLnmoTlpKfmi5vmioDog71cbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGVudGl0eSAtIOWunuS9k+iKgueCuVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8bnVsbH0g5aSn5oub5oqA6IO95a+56LGh77yM5aaC5p6c5rKh5pyJ5YiZ6L+U5ZuebnVsbFxuICAgICAqL1xuICAgIGdldFVsdGltYXRlU2tpbGwoZW50aXR5KSB7XG4gICAgICAgIGNvbnN0IHNraWxscyA9IGVudGl0eS5nZXRDb21wb25lbnQoXCJTa2lsbENvbXBvbmVudFwiKTtcbiAgICAgICAgaWYgKCFza2lsbHMpIHtcbiAgICAgICAgICAgIC8vIGNjLmxvZyhgW1NraWxsU3lzdGVtXSBnZXRVbHRpbWF0ZVNraWxsOiAke2VudGl0eS5uYW1lfSDmsqHmnIlTa2lsbENvbXBvbmVudGApO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDov5Tlm57nrKzkuIDkuKrpnIDopoHmgJLmsJTlgLznmoTmioDog73vvIjlpKfmi5vvvIlcbiAgICAgICAgY29uc3QgdWx0aW1hdGVTa2lsbCA9IHNraWxscy5za2lsbHMuZmluZChzID0+IHMucmVxdWlyZVJhZ2UgPiAwKSB8fCBudWxsO1xuICAgICAgICBpZiAodWx0aW1hdGVTa2lsbCkge1xuICAgICAgICAgICAgLy8gY2MubG9nKGBbU2tpbGxTeXN0ZW1dIGdldFVsdGltYXRlU2tpbGw6ICR7ZW50aXR5Lm5hbWV9IOaJvuWIsOWkp+aLmyAke3VsdGltYXRlU2tpbGwuc2tpbGxOYW1lfSwgcmVxdWlyZVJhZ2U9JHt1bHRpbWF0ZVNraWxsLnJlcXVpcmVSYWdlfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY2MubG9nKGBbU2tpbGxTeXN0ZW1dIGdldFVsdGltYXRlU2tpbGw6ICR7ZW50aXR5Lm5hbWV9IOayoeacieaJvuWIsOWkp+aLm+aKgOiDvWApO1xuICAgICAgICAgICAgLy8g5omT5Y2w5omA5pyJ5oqA6IO95L+h5oGv55So5LqO6LCD6K+VXG4gICAgICAgICAgICAvLyBza2lsbHMuc2tpbGxzLmZvckVhY2gocyA9PiB7XG4gICAgICAgICAgICAvLyAgICAgY2MubG9nKGBbU2tpbGxTeXN0ZW1dIOaKgOiDvTogJHtzLnNraWxsTmFtZX0sIGlkPSR7cy5pZH0sIHJlcXVpcmVSYWdlPSR7cy5yZXF1aXJlUmFnZX1gKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bHRpbWF0ZVNraWxsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmiYvliqjph4rmlL7lpKfmi5vvvIjngrnlh7vop5LoibLml7bosIPnlKjvvIlcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGVudGl0eSAtIOWunuS9k+iKgueCuVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gdGFyZ2V0IC0g55uu5qCHXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbG9nIC0g5pel5b+X5Ye95pWwXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmFuZCAtIOmaj+acuuaVsOWHveaVsFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSDmmK/lkKbmiJDlip/ph4rmlL5cbiAgICAgKi9cbiAgICB1c2VVbHRpbWF0ZVNraWxsKGVudGl0eSwgdGFyZ2V0LCBsb2csIHJhbmQpIHtcbiAgICAgICAgLy8g5qOA5p+l6KeS6Imy5piv5ZCm5bey5q275LqhXG4gICAgICAgIGNvbnN0IHN0YXRzID0gZW50aXR5LmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xuICAgICAgICBpZiAoc3RhdHMgJiYgc3RhdHMuaXNEZWFkKCkpIHtcbiAgICAgICAgICAgIGxvZyhgJHtlbnRpdHkubmFtZX0g5bey5q275Lqh77yM56aB5q2i6YeK5pS+5aSn5oubYCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuY2FuVXNlVWx0aW1hdGVTa2lsbChlbnRpdHkpKSB7XG4gICAgICAgICAgICBsb2coYCR7ZW50aXR5Lm5hbWV9IOaAkuawlOWAvOS4jei2s++8jOaXoOazlemHiuaUvuWkp+aLm2ApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdWx0aW1hdGVTa2lsbCA9IHRoaXMuZ2V0VWx0aW1hdGVTa2lsbChlbnRpdHkpO1xuXG4gICAgICAgIGlmICghdWx0aW1hdGVTa2lsbCkge1xuICAgICAgICAgICAgbG9nKGAke2VudGl0eS5uYW1lfSDmsqHmnInlpKfmi5vmioDog71gKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzmsqHmnInmjIflrprnm67moIfvvIzoh6rliqjpgInmi6nnm67moIdcbiAgICAgICAgICAgIGNvbnN0IFRlYW1Db21wb25lbnQgPSByZXF1aXJlKFwiVGVhbUNvbXBvbmVudFwiKTtcbiAgICAgICAgICAgIGNvbnN0IFRlYW1SZWYgPSByZXF1aXJlKFwiVGVhbVJlZlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRlYW1Db21wID0gZW50aXR5LmdldENvbXBvbmVudChcIlRlYW1Db21wb25lbnRcIik7XG4gICAgICAgICAgICBpZiAodGVhbUNvbXApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmVtaWVzID0gdGVhbUNvbXAudGVhbSA9PT0gXCJoZXJvXCJcbiAgICAgICAgICAgICAgICAgICAgPyBUZWFtUmVmLm1vbnN0ZXJzUmVmXG4gICAgICAgICAgICAgICAgICAgIDogVGVhbVJlZi5oZXJvc1JlZjtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBlbmVtaWVzLmZpbmQoZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHMgPSBlLmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcyAmJiAhcy5pc0RlYWQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICBsb2coYCR7ZW50aXR5Lm5hbWV9IOayoeacieWPr+aUu+WHu+eahOebruagh2ApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxvZyhg8J+OryAke2VudGl0eS5uYW1lfSDmiYvliqjph4rmlL7lpKfmi5vvvJoke3VsdGltYXRlU2tpbGwuc2tpbGxOYW1lfe+8gWApO1xuXG4gICAgICAgIC8vIOaYvuekuuWkp+aLm1VJ77yI6JKZ54mIK+mhtumDqOWKqOeUu++8iVxuICAgICAgICB0aGlzLl9zaG93VWx0aW1hdGVTa2lsbFVJKGVudGl0eSwgdWx0aW1hdGVTa2lsbC5za2lsbE5hbWUsICgpID0+IHtcbiAgICAgICAgICAgIC8vIFVJ5pi+56S65a6M5oiQ5ZCO77yM5raI6ICX5oCS5rCU5YC85bm26YeK5pS+5oqA6IO9XG4gICAgICAgICAgICAvLyDms6jmhI/vvJrkvKDpgJLkuIDkuKrnibnmrormoIforrBcIm1hbnVhbFwi5L2c5Li6cmVjb3JkZXLvvIzooajnpLrov5nmmK/miYvliqjph4rmlL7vvIzpgb/lhY3ph43lpI3mmL7npLpVSVxuICAgICAgICAgICAgaWYgKHN0YXRzICYmIHVsdGltYXRlU2tpbGwucmVxdWlyZVJhZ2UgPiAwKSB7XG4gICAgICAgICAgICAgICAgc3RhdHMuY29uc3VtZVJhZ2UodWx0aW1hdGVTa2lsbC5yZXF1aXJlUmFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDnm7TmjqXosIPnlKhfZXhlY3V0ZVNraWxs77yM6YG/5YWNdXNlU2tpbGzkuK3nmoTph43lpI1VSeaYvuekuumAu+i+kVxuICAgICAgICAgICAgdGhpcy5fZXhlY3V0ZVNraWxsKGVudGl0eSwgdGFyZ2V0LCB1bHRpbWF0ZVNraWxsLCBsb2csIHJhbmQsIFwibWFudWFsXCIsIHN0YXRzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIHVzZVNraWxsKGVudGl0eSwgdGFyZ2V0LCBza2lsbCwgbG9nLCByYW5kLCByZWNvcmRlcikge1xuICAgICAgICBjb25zdCBzdGF0cyA9IGVudGl0eS5nZXRDb21wb25lbnQoXCJTdGF0c0NvbXBvbmVudFwiKTtcblxuICAgICAgICAvLyDmo4Dmn6XmmK/lkKbpnIDopoHmgJLmsJTlgLzvvIjlpKfmi5vvvIlcbiAgICAgICAgaWYgKHNraWxsLnJlcXVpcmVSYWdlICYmIHNraWxsLnJlcXVpcmVSYWdlID4gMCkge1xuICAgICAgICAgICAgaWYgKCFzdGF0cyB8fCBzdGF0cy5yYWdlIDwgc2tpbGwucmVxdWlyZVJhZ2UpIHtcbiAgICAgICAgICAgICAgICBsb2coYCR7ZW50aXR5Lm5hbWV9IOaAkuawlOWAvOS4jei2s++8jOaXoOazlemHiuaUviAke3NraWxsLnNraWxsTmFtZX1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOaJi+WKqOmHiuaUvueahOWkp+aLm++8muW3sue7j+WcqHVzZVVsdGltYXRlU2tpbGzkuK3mtojogJfkuobmgJLmsJTlgLzvvIznm7TmjqXmiafooYxcbiAgICAgICAgICAgIGlmIChyZWNvcmRlciA9PT0gXCJtYW51YWxcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2V4ZWN1dGVTa2lsbChlbnRpdHksIHRhcmdldCwgc2tpbGwsIGxvZywgcmFuZCwgcmVjb3JkZXIsIHN0YXRzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFJ6Ieq5Yqo6YeK5pS+55qE5aSn5oub77ya5pi+56S6VUnlkI7mtojogJfmgJLmsJTlgLxcbiAgICAgICAgICAgIC8vIHJlY29yZGVy5Li6bnVsbC91bmRlZmluZWTml7booajnpLpBSeiHquWKqOmHiuaUvu+8iOayoeacieaImOaWl+iusOW9leWZqO+8iVxuICAgICAgICAgICAgLy8gcmVjb3JkZXLkuLrlr7nosaHml7bkuZ/ooajnpLpBSeiHquWKqOmHiuaUvu+8iOacieaImOaWl+iusOW9leWZqO+8jOS9hui/meaYr0FJ6Ieq5Yqo6Kem5Y+R55qE77yJXG4gICAgICAgICAgICAvLyDms6jmhI/vvJrpnIDopoHkvKDpgJJjYWxsYmFja+WPguaVsO+8jOeUqOS6juWcqOaKgOiDveaJp+ihjOWujOaIkOWQjumAmuefpUFjdGlvblN5c3RlbVxuICAgICAgICAgICAgY29uc3QgYWN0aW9uQ2FsbGJhY2sgPSBlbnRpdHkuX2FjdGlvbkNhbGxiYWNrIHx8IG51bGw7IC8vIOS7jmVudGl0eeiOt+WPlmNhbGxiYWNr77yI55SxQWN0aW9uU3lzdGVt6K6+572u77yJXG4gICAgICAgICAgICB0aGlzLl9zaG93VWx0aW1hdGVTa2lsbFVJKGVudGl0eSwgc2tpbGwuc2tpbGxOYW1lIHx8IHNraWxsLm5hbWUsICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBVSeaYvuekuuWujOaIkOWQju+8jOa2iOiAl+aAkuawlOWAvOW5tuaJp+ihjOaKgOiDvVxuICAgICAgICAgICAgICAgIGlmIChzdGF0cyAmJiBza2lsbC5yZXF1aXJlUmFnZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHMuY29uc3VtZVJhZ2Uoc2tpbGwucmVxdWlyZVJhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDnu6fnu63miafooYzmioDog73vvIjkvKDpgJJyZWNvcmRlcu+8jOWPr+iDveaYr251bGzmiJZCYXR0bGVSZWNvcmRlcuWvueixoe+8iVxuICAgICAgICAgICAgICAgIHRoaXMuX2V4ZWN1dGVTa2lsbChlbnRpdHksIHRhcmdldCwgc2tpbGwsIGxvZywgcmFuZCwgcmVjb3JkZXIsIHN0YXRzKTtcblxuICAgICAgICAgICAgICAgIC8vIOaKgOiDveaJp+ihjOWujOaIkOWQju+8jOiwg+eUqGNhbGxiYWNr6YCa55+lQWN0aW9uU3lzdGVtXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbkNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOa4hemZpOS4tOaXtuS/neWtmOeahGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5fYWN0aW9uQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAvLyDosIPnlKhjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25DYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pmu6YCa5oqA6IO955u05o6l5omn6KGMXG4gICAgICAgIHRoaXMuX2V4ZWN1dGVTa2lsbChlbnRpdHksIHRhcmdldCwgc2tpbGwsIGxvZywgcmFuZCwgcmVjb3JkZXIsIHN0YXRzKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5omn6KGM5oqA6IO95pWI5p6c77yI5YaF6YOo5pa55rOV77yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZXhlY3V0ZVNraWxsKGVudGl0eSwgdGFyZ2V0LCBza2lsbCwgbG9nLCByYW5kLCByZWNvcmRlciwgc3RhdHMpIHtcbiAgICAgICAgLy8g6K6w5b2V5oqA6IO96YeK5pS+77yIcmVjb3JkZXLlv4XpobvmmK/lr7nosaHvvIzkuI3og73mmK/lrZfnrKbkuLLvvIlcbiAgICAgICAgaWYgKHJlY29yZGVyICYmIHR5cGVvZiByZWNvcmRlciA9PT0gJ29iamVjdCcgJiYgcmVjb3JkZXIucmVjb3JkU2tpbGxVc2UpIHtcbiAgICAgICAgICAgIHJlY29yZGVyLnJlY29yZFNraWxsVXNlKGVudGl0eSwgdGFyZ2V0LCBza2lsbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmkq3mlL7mioDog73nibnmlYhcbiAgICAgICAgdGhpcy5fcGxheVNraWxsRWZmZWN0KGVudGl0eSwgdGFyZ2V0LCBza2lsbCk7XG5cbiAgICAgICAgY29uc3QgZXZlbnRzID0gc2tpbGwuZWZmZWN0KGVudGl0eSwgdGFyZ2V0LCBsb2csIHJhbmQpO1xuXG4gICAgICAgIGZvciAobGV0IGV2dCBvZiBldmVudHMpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZ0LnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiZGFtYWdlXCI6XG4gICAgICAgICAgICAgICAgICAgIENvbWJhdFN5c3RlbS5kYW1hZ2UoZW50aXR5LCB0YXJnZXQsIGV2dC52YWx1ZSwgbG9nLCByZWNvcmRlciwgcmFuZCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcImRhbWFnZVRydWVcIjpcbiAgICAgICAgICAgICAgICAgICAgQ29tYmF0U3lzdGVtLmRhbWFnZVRydWUoZW50aXR5LCB0YXJnZXQsIGV2dC52YWx1ZSwgbG9nLCByZWNvcmRlciwgcmFuZCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcImhlYWxcIjpcbiAgICAgICAgICAgICAgICAgICAgLy8g5rK755aX5LqL5Lu277yaZXZ0LnRhcmdldCDmmK/nm67moIfljZXkvY3vvIxldnQudmFsdWUg5piv5rK755aX6YePXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWxUYXJnZXQgPSBldnQudGFyZ2V0IHx8IHRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgQ29tYmF0U3lzdGVtLmhlYWwoZW50aXR5LCBoZWFsVGFyZ2V0LCBldnQudmFsdWUsIGxvZywgcmVjb3JkZXIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgXCJhcHBseUJ1ZmZcIjpcbiAgICAgICAgICAgICAgICAgICAgLy8gQnVmZuS6i+S7tu+8mmV2dC50YXJnZXQg5piv55uu5qCH5Y2V5L2N77yI5aaC5p6c5oyH5a6a77yJ77yM5ZCm5YiZ5L2/55So6buY6K6kdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1ZmZUYXJnZXQgPSBldnQudGFyZ2V0IHx8IHRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgLy8g5Lyg6YCS5pa95rOV6ICF77yIZW50aXR577yJ77yM55So5LqO5Zyo5pa95rOV6ICF5q275Lqh5pe25riF6ZmkQnVmZlxuICAgICAgICAgICAgICAgICAgICBCdWZmU3lzdGVtLmFkZEJ1ZmYoYnVmZlRhcmdldCwgQnVmZkZhY3RvcnkuY3JlYXRlKGV2dC5idWZmKSwgbG9nLCByZWNvcmRlciwgZW50aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwiYXBwbHlCdWZmU2VsZlwiOlxuICAgICAgICAgICAgICAgICAgICAvLyDkvKDpgJLmlr3ms5XogIXvvIhlbnRpdHnvvInvvIznlKjkuo7lnKjmlr3ms5XogIXmrbvkuqHml7bmuIXpmaRCdWZmXG4gICAgICAgICAgICAgICAgICAgIEJ1ZmZTeXN0ZW0uYWRkQnVmZihlbnRpdHksIEJ1ZmZGYWN0b3J5LmNyZWF0ZShldnQuYnVmZiksIGxvZywgcmVjb3JkZXIsIGVudGl0eSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcInJlbW92ZU5lZ2F0aXZlQnVmZnNcIjpcbiAgICAgICAgICAgICAgICAgICAgLy8g56e76Zmk6LSf6Z2iQnVmZuS6i+S7tu+8mmV2dC50YXJnZXQg5piv55uu5qCH5Y2V5L2N77yMZXZ0LmJ1ZmZOYW1lcyDmmK/opoHnp7vpmaTnmoRCdWZm5ZCN56ew5YiX6KGoXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuc2VUYXJnZXQgPSBldnQudGFyZ2V0IHx8IHRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnVmZk5hbWVzID0gZXZ0LmJ1ZmZOYW1lcyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgQnVmZlN5c3RlbS5yZW1vdmVCdWZmcyhjbGVhbnNlVGFyZ2V0LCBidWZmTmFtZXMsIGxvZywgcmVjb3JkZXIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGxvZyhg5pyq55+l5LqL5Lu257G75Z6LOiAke2V2dC50eXBlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZW50aXR5LmdldENvbXBvbmVudChcIlNraWxsQ29tcG9uZW50XCIpLmNvb2xkb3duc1tza2lsbC5pZF0gPSAwO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmmL7npLrlpKfmi5tVSe+8iOiSmeeJiCvpobbpg6jliqjnlLvvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gZW50aXR5IC0g5pa95rOV6ICF6IqC54K5XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNraWxsTmFtZSAtIOaKgOiDveWQjeensFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ29tcGxldGUgLSDlrozmiJDlm57osINcbiAgICAgKi9cbiAgICBfc2hvd1VsdGltYXRlU2tpbGxVSShlbnRpdHksIHNraWxsTmFtZSwgb25Db21wbGV0ZSkge1xuICAgICAgICAvLyDmn6Xmib7lnLrmma/kuK3nmoRVbHRpbWF0ZVNraWxsVUnnu4Tku7ZcbiAgICAgICAgY29uc3Qgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xuICAgICAgICBpZiAoIXNjZW5lKSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiW1NraWxsU3lzdGVtXSDml6Dms5Xmib7liLDlnLrmma/vvIzot7Pov4flpKfmi5tVSeaYvuekulwiKTtcbiAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSBvbkNvbXBsZXRlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYW52YXMgPSBzY2VuZS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKTtcbiAgICAgICAgaWYgKCFjYW52YXMpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJbU2tpbGxTeXN0ZW1dIOaXoOazleaJvuWIsENhbnZhc+iKgueCue+8jOi3s+i/h+Wkp+aLm1VJ5pi+56S6XCIpO1xuICAgICAgICAgICAgaWYgKG9uQ29tcGxldGUpIG9uQ29tcGxldGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOafpeaJvlVsdGltYXRlU2tpbGxVSee7hOS7tu+8iOmAkuW9kuafpeaJvu+8jOabtOWPr+mdoO+8iVxuICAgICAgICBsZXQgdWx0aW1hdGVTa2lsbFVJID0gbnVsbDtcblxuICAgICAgICAvLyDmlrnms5UxOiDlnKhDYW52YXPoioLngrnmnKzouqvmn6Xmib7nu4Tku7ZcbiAgICAgICAgdWx0aW1hdGVTa2lsbFVJID0gY2FudmFzLmdldENvbXBvbmVudChcIlVsdGltYXRlU2tpbGxVSVwiKTtcblxuICAgICAgICAvLyDmlrnms5UyOiDlnKhDYW52YXPnmoTlrZDoioLngrnkuK3mn6Xmib7lkI3kuLpcIlVsdGltYXRlU2tpbGxVSVwi55qE6IqC54K5XG4gICAgICAgIGlmICghdWx0aW1hdGVTa2lsbFVJKSB7XG4gICAgICAgICAgICBjb25zdCB1aU5vZGUgPSBjYW52YXMuZ2V0Q2hpbGRCeU5hbWUoXCJVbHRpbWF0ZVNraWxsVUlcIik7XG4gICAgICAgICAgICBpZiAodWlOb2RlKSB7XG4gICAgICAgICAgICAgICAgdWx0aW1hdGVTa2lsbFVJID0gdWlOb2RlLmdldENvbXBvbmVudChcIlVsdGltYXRlU2tpbGxVSVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaWueazlTM6IOS9v+eUqGdldENvbXBvbmVudEluQ2hpbGRyZW7pgJLlvZLmn6Xmib7vvIjmnIDlj6/pnaDvvIlcbiAgICAgICAgaWYgKCF1bHRpbWF0ZVNraWxsVUkpIHtcbiAgICAgICAgICAgIHVsdGltYXRlU2tpbGxVSSA9IGNhbnZhcy5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFwiVWx0aW1hdGVTa2lsbFVJXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pa55rOVNDog6YGN5Y6GQ2FudmFz55qE5omA5pyJ5a2Q6IqC54K55p+l5om+XG4gICAgICAgIGlmICghdWx0aW1hdGVTa2lsbFVJKSB7XG4gICAgICAgICAgICBjb25zdCBmaW5kQ29tcG9uZW50ID0gKG5vZGUsIGNvbXBvbmVudE5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wID0gbm9kZS5nZXRDb21wb25lbnQoY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXApIHJldHVybiBjb21wO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZmluZENvbXBvbmVudChjaGlsZCwgY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHVsdGltYXRlU2tpbGxVSSA9IGZpbmRDb21wb25lbnQoY2FudmFzLCBcIlVsdGltYXRlU2tpbGxVSVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdWx0aW1hdGVTa2lsbFVJKSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiW1NraWxsU3lzdGVtXSDmnKrmib7liLBVbHRpbWF0ZVNraWxsVUnnu4Tku7bvvIzot7Pov4flpKfmi5tVSeaYvuekulwiKTtcbiAgICAgICAgICAgIGNjLndhcm4oXCJbU2tpbGxTeXN0ZW1dIOivt+WcqENhbnZhc+aIluWFtuWtkOiKgueCueS4iua3u+WKoFVsdGltYXRlU2tpbGxVSee7hOS7tlwiKTtcbiAgICAgICAgICAgIGNjLndhcm4oXCJbU2tpbGxTeXN0ZW1dIOW7uuiuru+8muWcqENhbnZhc+S4i+WIm+W7uuWQjeS4uidVbHRpbWF0ZVNraWxsVUkn55qE5a2Q6IqC54K577yM5bm25re75YqgVWx0aW1hdGVTa2lsbFVJ57uE5Lu2XCIpO1xuICAgICAgICAgICAgaWYgKG9uQ29tcGxldGUpIG9uQ29tcGxldGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNjLmxvZyhgW1NraWxsU3lzdGVtXSDinJMg5om+5YiwVWx0aW1hdGVTa2lsbFVJ57uE5Lu277yM6IqC54K5OiAke3VsdGltYXRlU2tpbGxVSS5ub2RlLm5hbWV9YCk7XG5cbiAgICAgICAgLy8g5LuOVW5pdERhdGFDb25maWfojrflj5blpLTlg4/otYTmupBcbiAgICAgICAgY29uc3QgVW5pdERhdGFDb25maWcgPSByZXF1aXJlKFwiVW5pdERhdGFDb25maWdcIik7XG4gICAgICAgIGxldCBhdmF0YXJTcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICAgICAgLy8g5p+l5om+5a+55bqU55qE5Y2V5L2N6YWN572uXG4gICAgICAgIGNvbnN0IGFsbFVuaXRzID0gWy4uLihVbml0RGF0YUNvbmZpZy5oZXJvcyB8fCBbXSksIC4uLihVbml0RGF0YUNvbmZpZy5tb25zdGVycyB8fCBbXSldO1xuICAgICAgICBjb25zdCB1bml0RGF0YSA9IGFsbFVuaXRzLmZpbmQodSA9PiB1Lm5hbWUgPT09IGVudGl0eS5uYW1lKTtcbiAgICAgICAgaWYgKHVuaXREYXRhICYmIHVuaXREYXRhLmljb24pIHtcbiAgICAgICAgICAgIGF2YXRhclNwcml0ZUZyYW1lID0gdW5pdERhdGEuaWNvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaYvuekuuWkp+aLm1VJXG4gICAgICAgIHVsdGltYXRlU2tpbGxVSS5zaG93VWx0aW1hdGVTa2lsbChlbnRpdHksIHNraWxsTmFtZSwgYXZhdGFyU3ByaXRlRnJhbWUsIG9uQ29tcGxldGUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmkq3mlL7mioDog73nibnmlYhcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGVudGl0eSAtIOaWveazleiAhVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gdGFyZ2V0IC0g55uu5qCHXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNraWxsIC0g5oqA6IO95a+56LGhXG4gICAgICovXG4gICAgX3BsYXlTa2lsbEVmZmVjdChlbnRpdHksIHRhcmdldCwgc2tpbGwpIHtcbiAgICAgICAgLy8g6I635Y+W5oqA6IO95ZCN56ew77yIU2tpbGxDb21wb25lbnTkuK3kvb/nlKjnmoTmmK9za2lsbE5hbWXvvIzkuI3mmK9uYW1l77yJXG4gICAgICAgIGxldCBza2lsbE5hbWUgPSBza2lsbC5za2lsbE5hbWUgfHwgc2tpbGwubmFtZTtcblxuICAgICAgICAvLyBjYy5sb2coYFtTa2lsbFN5c3RlbV0gPT09PT0g5byA5aeL5pKt5pS+5oqA6IO954m55pWIID09PT09YCk7XG4gICAgICAgIC8vIGNjLmxvZyhgW1NraWxsU3lzdGVtXSDmioDog706ICR7c2tpbGxOYW1lIHx8ICdudWxsJ30sIOaKgOiDvUlEOiAke3NraWxsLmlkfSwg5pa95rOV6ICFOiAke2VudGl0eSA/IGVudGl0eS5uYW1lIDogJ251bGwnfSwg55uu5qCHOiAke3RhcmdldCA/IHRhcmdldC5uYW1lIDogJ251bGwnfWApO1xuICAgICAgICAvLyBjYy5sb2coYFtTa2lsbFN5c3RlbV0g5oqA6IO95a+56LGh5bGe5oCnOiBza2lsbE5hbWU9JHtza2lsbC5za2lsbE5hbWV9LCBuYW1lPSR7c2tpbGwubmFtZX0sIGlkPSR7c2tpbGwuaWR9YCk7XG5cbiAgICAgICAgaWYgKCFlbnRpdHkgfHwgIXRhcmdldCB8fCAhc2tpbGwpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJbU2tpbGxTeXN0ZW1dIOaXoOazleaSreaUvuaKgOiDveeJueaViO+8muWPguaVsOS4jeWujOaVtFwiKTtcbiAgICAgICAgICAgIGNjLndhcm4oYFtTa2lsbFN5c3RlbV0gZW50aXR5OiAke2VudGl0eX0sIHRhcmdldDogJHt0YXJnZXR9LCBza2lsbDogJHtza2lsbH1gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWmguaenOayoeacieaKgOiDveWQjeensO+8jOWwneivlemAmui/h0lE5Yy56YWNXG4gICAgICAgIGlmICghc2tpbGxOYW1lICYmIHNraWxsLmlkKSB7XG4gICAgICAgICAgICBjb25zdCBza2lsbElkVG9OYW1lID0ge1xuICAgICAgICAgICAgICAgIDE6IFwi5pmu6YCa5pS75Ye7XCIsXG4gICAgICAgICAgICAgICAgMjogXCLnm77lh7tcIixcbiAgICAgICAgICAgICAgICAzOiBcIueBq+eQg+acr1wiLFxuICAgICAgICAgICAgICAgIDQ6IFwi54uC5pq0XCIsXG4gICAgICAgICAgICAgICAgNTogXCLmiJjlkLxcIixcbiAgICAgICAgICAgICAgICA2OiBcIue+pOS9k+aKpOebvlwiLFxuICAgICAgICAgICAgICAgIDc6IFwi5YW95YyW54uC5pq0XCIsXG4gICAgICAgICAgICAgICAgOTogXCLmsrvnlpfmnK9cIixcbiAgICAgICAgICAgICAgICAxMDogXCLlh4DljJbmnK9cIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IG1hcHBlZE5hbWUgPSBza2lsbElkVG9OYW1lW3NraWxsLmlkXTtcbiAgICAgICAgICAgIGlmIChtYXBwZWROYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKGBbU2tpbGxTeXN0ZW1dIOmAmui/h+aKgOiDvUlEICR7c2tpbGwuaWR9IOaYoOWwhOWIsOaKgOiDveWQjeensDogJHttYXBwZWROYW1lfWApO1xuICAgICAgICAgICAgICAgIHNraWxsTmFtZSA9IG1hcHBlZE5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmn6Xmib7miJbliJvlu7rnibnmlYjmkq3mlL7lmahcbiAgICAgICAgbGV0IGVmZmVjdFBsYXllciA9IGVudGl0eS5nZXRDb21wb25lbnQoXCJTa2lsbEVmZmVjdFBsYXllclwiKTtcbiAgICAgICAgLy8gY2MubG9nKGBbU2tpbGxTeXN0ZW1dIOS7juWunuS9k+iOt+WPllNraWxsRWZmZWN0UGxheWVyOiAke2VmZmVjdFBsYXllciA/ICfmiJDlip8nIDogJ+Wksei0pSd9YCk7XG5cbiAgICAgICAgaWYgKCFlZmZlY3RQbGF5ZXIpIHtcbiAgICAgICAgICAgIC8vIOWmguaenOWunuS9k+S4iuayoeacieeJueaViOaSreaUvuWZqO+8jOWwneivleS7juWcuuaZr+agueiKgueCueafpeaJvuWFqOWxgOeahFxuICAgICAgICAgICAgY29uc3Qgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xuICAgICAgICAgICAgaWYgKHNjZW5lKSB7XG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKGBbU2tpbGxTeXN0ZW1dIOWcuuaZr+WQjeensDogJHtzY2VuZS5uYW1lfWApO1xuICAgICAgICAgICAgICAgIGVmZmVjdFBsYXllciA9IHNjZW5lLmdldENvbXBvbmVudEluQ2hpbGRyZW4oXCJTa2lsbEVmZmVjdFBsYXllclwiKTtcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coYFtTa2lsbFN5c3RlbV0g5LuO5Zy65pmv6I635Y+WU2tpbGxFZmZlY3RQbGF5ZXI6ICR7ZWZmZWN0UGxheWVyID8gJ+aIkOWKnycgOiAn5aSx6LSlJ31gKTtcblxuICAgICAgICAgICAgICAgIC8vIOWmguaenOi/mOaYr+ayoeacie+8jOWKqOaAgeWIm+W7uuS4gOS4qlxuICAgICAgICAgICAgICAgIGlmICghZWZmZWN0UGxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVmZmVjdE5vZGUgPSBuZXcgY2MuTm9kZShcIlNraWxsRWZmZWN0UGxheWVyXCIpO1xuICAgICAgICAgICAgICAgICAgICBlZmZlY3RQbGF5ZXIgPSBlZmZlY3ROb2RlLmFkZENvbXBvbmVudChcIlNraWxsRWZmZWN0UGxheWVyXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBTY2VuZeWvueixoeS4jeiDveebtOaOpWFkZENoaWxk77yM6ZyA6KaB5re75Yqg5YiwQ2FudmFz6IqC54K5XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IHNjZW5lLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FudmFzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW52YXMuYWRkQ2hpbGQoZWZmZWN0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCJbU2tpbGxTeXN0ZW1dIOWKqOaAgeWIm+W7uuS6hlNraWxsRWZmZWN0UGxheWVy6IqC54K577yM5re75Yqg5YiwQ2FudmFzXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5rKh5pyJQ2FudmFz77yM5bCd6K+V5re75Yqg5Yiw5Zy65pmv55qE56ys5LiA5Liq5a2Q6IqC54K5XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NlbmUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLmNoaWxkcmVuWzBdLmFkZENoaWxkKGVmZmVjdE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIltTa2lsbFN5c3RlbV0g5Yqo5oCB5Yib5bu65LqGU2tpbGxFZmZlY3RQbGF5ZXLoioLngrnvvIzmt7vliqDliLDlnLrmma/nrKzkuIDkuKrlrZDoioLngrlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiW1NraWxsU3lzdGVtXSDml6Dms5Xmib7liLBDYW52YXPoioLngrnmiJblnLrmma/lrZDoioLngrnvvIzml6Dms5XliJvlu7pTa2lsbEVmZmVjdFBsYXllclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJbU2tpbGxTeXN0ZW1dIOaXoOazleiOt+WPluWcuuaZr+WvueixoVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlZmZlY3RQbGF5ZXIgJiYgZWZmZWN0UGxheWVyLnBsYXlTa2lsbEVmZmVjdCkge1xuICAgICAgICAgICAgLy8gY2MubG9nKGBbU2tpbGxTeXN0ZW1dIOWHhuWkh+aSreaUvuaKgOiDveeJueaViO+8miR7c2tpbGxOYW1lfe+8jOaWveazleiAhe+8miR7ZW50aXR5Lm5hbWV977yM55uu5qCH77yaJHt0YXJnZXQubmFtZX1gKTtcbiAgICAgICAgICAgIC8vIGNjLmxvZyhgW1NraWxsU3lzdGVtXSBlZmZlY3RQbGF5ZXIuZmlyZWJhbGxQcmVmYWI6ICR7ZWZmZWN0UGxheWVyLmZpcmViYWxsUHJlZmFiID8gJ+W3sue7keWumicgOiAn5pyq57uR5a6aJ31gKTtcbiAgICAgICAgICAgIGVmZmVjdFBsYXllci5wbGF5U2tpbGxFZmZlY3Qoc2tpbGxOYW1lLCBlbnRpdHksIHRhcmdldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5lcnJvcihgW1NraWxsU3lzdGVtXSDml6Dms5Xmib7liLBTa2lsbEVmZmVjdFBsYXllcue7hOS7tuaIlnBsYXlTa2lsbEVmZmVjdOaWueazle+8jOaKgOiDve+8miR7c2tpbGxOYW1lfWApO1xuICAgICAgICAgICAgY2MuZXJyb3IoYFtTa2lsbFN5c3RlbV0gZWZmZWN0UGxheWVyOiAke2VmZmVjdFBsYXllcn0sIHBsYXlTa2lsbEVmZmVjdDogJHtlZmZlY3RQbGF5ZXIgPyBlZmZlY3RQbGF5ZXIucGxheVNraWxsRWZmZWN0IDogJ251bGwnfWApO1xuICAgICAgICB9XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTa2lsbFN5c3RlbTsiXX0=