"use strict";
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