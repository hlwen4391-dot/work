
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/system/BattleReplayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '197f9YTFTlAD6xxhrRT2Akv', 'BattleReplayer');
// Scripts/system/BattleReplayer.js

"use strict";

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * 战斗回放系统
 * 根据战斗记录回放战斗过程
 */
var BattleReplayer = cc.Class({
  name: "BattleReplayer",
  properties: {
    // 是否正在回放
    isReplaying: {
      "default": false,
      visible: false
    },
    // 回放速度倍数（1.0 = 正常速度，2.0 = 2倍速）
    playbackSpeed: {
      "default": 1.0,
      tooltip: "回放速度倍数"
    },
    // 是否暂停
    isPaused: {
      "default": false,
      visible: false
    },
    // 当前回放进度（事件索引）
    currentEventIndex: {
      "default": 0,
      visible: false
    },
    // 战斗记录数据
    battleRecord: {
      "default": null,
      visible: false
    },
    // 单位映射表（记录中的ID -> 实际单位节点）
    unitMap: {
      "default": function _default() {
        return {};
      },
      visible: false
    },
    // 已死亡单位集合（用于跳过后续事件）
    deadUnits: {
      "default": function _default() {
        return new Set();
      },
      visible: false
    },
    // 回放开始时间
    replayStartTime: {
      "default": 0,
      visible: false
    }
  },
  /**
   * 开始回放
   * @param {Object} battleRecord - 战斗记录数据
   * @param {Array} heros - 英雄列表（用于匹配单位）
   * @param {Array} monsters - 怪物列表（用于匹配单位）
   * @param {Function} onReplayComplete - 回放完成回调
   */
  startReplay: function startReplay(battleRecord, heros, monsters, onReplayComplete) {
    if (!battleRecord || !battleRecord.events) {
      cc.error("[BattleReplayer] 无效的战斗记录");
      return;
    }
    this.battleRecord = battleRecord;
    this.isReplaying = true;
    this.isPaused = false;
    this.currentEventIndex = 0;
    this.replayStartTime = Date.now();
    this.onReplayComplete = onReplayComplete;
    this.deadUnits.clear(); // 清空已死亡单位集合

    // 构建单位映射表（传入initialState以便补充缺失的单位）
    this._buildUnitMap(heros, monsters, battleRecord.initialState);

    // 恢复初始状态
    this._restoreInitialState(battleRecord.initialState);

    // 对事件按时间戳排序（确保顺序正确，相同时间戳时death事件最后执行）
    battleRecord.events.sort(function (a, b) {
      if (a.timestamp !== b.timestamp) {
        return a.timestamp - b.timestamp;
      }
      // 相同时间戳时，death事件最后执行（其他事件先执行）
      if (a.type === "death" && b.type !== "death") return 1; // a是death，排在后面
      if (a.type !== "death" && b.type === "death") return -1; // b是death，a排在前面
      return 0;
    });
    cc.log("[BattleReplayer] \u5F00\u59CB\u56DE\u653E\uFF0C\u5171 " + battleRecord.events.length + " \u4E2A\u4E8B\u4EF6\uFF08\u5DF2\u6392\u5E8F\uFF09");
    cc.log("[BattleReplayer] unitMap\u4E2D\u7684\u5355\u4F4D: " + Object.keys(this.unitMap).join(', '));

    // 开始处理事件
    this._processNextEvent();
  },
  /**
   * 停止回放
   */
  stopReplay: function stopReplay() {
    this.isReplaying = false;
    this.isPaused = false;
    this.currentEventIndex = 0;

    // 清除定时器
    if (this._timeoutId) {
      clearTimeout(this._timeoutId);
      this._timeoutId = null;
    }
    cc.log("[BattleReplayer] 停止回放");
  },
  /**
   * 暂停/继续回放
   */
  togglePause: function togglePause() {
    if (!this.isReplaying) return;
    this.isPaused = !this.isPaused;
    if (this.isPaused) {
      // 暂停时：清除所有等待中的定时器，阻止后续事件执行
      if (this._timeoutId) {
        clearTimeout(this._timeoutId);
        this._timeoutId = null;
      }
      cc.log("[BattleReplayer] \u5DF2\u6682\u505C\u56DE\u653E\uFF0C\u6240\u6709\u4E8B\u4EF6\u5904\u7406\u5DF2\u505C\u6B62");
    } else {
      // 继续时：重新计算时间并继续处理事件
      this.replayStartTime = Date.now() - this.battleRecord.events[this.currentEventIndex].timestamp / this.playbackSpeed;
      this._processNextEvent();
      cc.log("[BattleReplayer] \u7EE7\u7EED\u56DE\u653E");
    }
  },
  /**
   * 设置回放速度
   * @param {number} speed - 速度倍数
   */
  setPlaybackSpeed: function setPlaybackSpeed(speed) {
    this.playbackSpeed = Math.max(0.1, Math.min(5.0, speed)); // 限制在0.1-5.0倍速
    cc.log("[BattleReplayer] \u8BBE\u7F6E\u56DE\u653E\u901F\u5EA6: " + this.playbackSpeed + "x");
  },
  /**
   * 跳转到指定事件
   * @param {number} eventIndex - 事件索引
   */
  jumpToEvent: function jumpToEvent(eventIndex) {
    if (!this.battleRecord || eventIndex < 0 || eventIndex >= this.battleRecord.events.length) {
      cc.warn("[BattleReplayer] 无效的事件索引");
      return;
    }

    // 重新恢复初始状态
    this._restoreInitialState(this.battleRecord.initialState);

    // 执行到指定事件之前的所有事件
    this.currentEventIndex = 0;
    for (var i = 0; i < eventIndex; i++) {
      this._executeEvent(this.battleRecord.events[i]);
      this.currentEventIndex++;
    }

    // 继续处理后续事件
    this._processNextEvent();
  },
  /**
   * 处理下一个事件
   * @private
   */
  _processNextEvent: function _processNextEvent() {
    var _this = this;
    if (!this.isReplaying || this.isPaused) return;
    if (this.currentEventIndex >= this.battleRecord.events.length) {
      // 回放完成
      this.isReplaying = false;
      cc.log("[BattleReplayer] 回放完成");
      if (this.onReplayComplete) {
        this.onReplayComplete();
      }
      return;
    }
    var currentEvent = this.battleRecord.events[this.currentEventIndex];
    var currentTime = Date.now() - this.replayStartTime;
    var eventTime = currentEvent.timestamp / this.playbackSpeed;
    if (currentTime >= eventTime) {
      // 再次检查暂停状态（防止在执行前被暂停）
      if (this.isPaused) {
        cc.log("[BattleReplayer] \u4E8B\u4EF6\u6267\u884C\u88AB\u4E2D\u65AD\uFF08\u56DE\u653E\u5DF2\u6682\u505C\uFF09: " + currentEvent.type);
        return;
      }

      // 执行当前事件
      this._executeEvent(currentEvent);
      this.currentEventIndex++;

      // 立即处理下一个事件（如果未暂停）
      if (!this.isPaused) {
        this._processNextEvent();
      }
    } else {
      // 等待到事件时间（使用setTimeout，因为这不是组件）
      var delay = eventTime - currentTime;
      if (this._timeoutId) {
        clearTimeout(this._timeoutId);
      }
      this._timeoutId = setTimeout(function () {
        _this._timeoutId = null;
        _this._processNextEvent();
      }, delay);
    }
  },
  /**
   * 执行事件
   * @private
   */
  _executeEvent: function _executeEvent(event) {
    // 如果已暂停，不执行任何事件（确保暂停时完全冻结）
    if (this.isPaused) {
      cc.log("[BattleReplayer] \u4E8B\u4EF6\u6267\u884C\u88AB\u8DF3\u8FC7\uFF08\u56DE\u653E\u5DF2\u6682\u505C\uFF09: " + event.type);
      return;
    }
    var type = event.type,
      data = event.data;
    switch (type) {
      case "actionStart":
        this._onActionStart(data);
        break;
      case "skillUse":
        this._onSkillUse(data);
        break;
      case "damage":
        this._onDamage(data);
        break;
      case "heal":
        this._onHeal(data);
        break;
      case "buffApply":
        this._onBuffApply(data);
        break;
      case "buffRemove":
        this._onBuffRemove(data);
        break;
      case "death":
        this._onDeath(data);
        break;
      case "gameOver":
        this._onGameOver(data);
        break;
      default:
        cc.warn("[BattleReplayer] \u672A\u77E5\u4E8B\u4EF6\u7C7B\u578B: " + type);
    }
  },
  /**
   * 处理行动开始事件
   * @private
   */
  _onActionStart: function _onActionStart(data) {
    var entity = this.unitMap[data.actorId];
    if (entity) {
      cc.log("[BattleReplayer] " + data.actorName + " \u6267\u884C\u884C\u52A8");

      // 可以在这里播放待机动画或其他准备动画
      var skeleton = entity.getComponent(sp.Skeleton);
      if (skeleton) {
        // 可以播放准备动画，或者保持当前动画
      }
    }
  },
  /**
   * 处理技能释放事件
   * @private
   */
  _onSkillUse: function _onSkillUse(data) {
    var caster = this.unitMap[data.casterId];
    var target = null;

    // 查找目标
    if (data.targetId) {
      target = this.unitMap[data.targetId];
      if (!target) {
        // 如果通过ID找不到，尝试通过名称查找（备用方案）
        cc.warn("[BattleReplayer] \u901A\u8FC7ID\u627E\u4E0D\u5230\u76EE\u6807: " + data.targetId + ", \u5C1D\u8BD5\u901A\u8FC7\u540D\u79F0\u67E5\u627E: " + data.targetName);
        if (data.targetName) {
          // 遍历所有单位，通过名称匹配
          for (var _i = 0, _Object$values = Object.values(this.unitMap); _i < _Object$values.length; _i++) {
            var unit = _Object$values[_i];
            if (unit && unit.isValid && unit.name === data.targetName) {
              target = unit;
              cc.log("[BattleReplayer] \u901A\u8FC7\u540D\u79F0\u627E\u5230\u76EE\u6807: " + data.targetName);
              break;
            }
          }
        }
      }
    }

    // 如果施法者已死亡，跳过处理
    if (caster && this.deadUnits.has(caster)) {
      cc.log("[BattleReplayer] \u8DF3\u8FC7\u5DF2\u6B7B\u4EA1\u5355\u4F4D " + data.casterName + " \u7684\u6280\u80FD\u91CA\u653E\u4E8B\u4EF6");
      return;
    }
    if (caster && caster.isValid) {
      if (!target) {
        cc.warn("[BattleReplayer] " + data.casterName + " \u5BF9\u65E0\u76EE\u6807\u91CA\u653E " + data.skillName);
        cc.warn("[BattleReplayer] \u8BB0\u5F55\u7684\u76EE\u6807ID: " + data.targetId + ", \u76EE\u6807\u540D\u79F0: " + data.targetName);
        cc.warn("[BattleReplayer] \u5F53\u524DunitMap\u4E2D\u7684\u5355\u4F4D: " + Object.keys(this.unitMap).join(', '));
      } else {
        cc.log("[BattleReplayer] " + data.casterName + " \u5BF9 " + target.name + " \u91CA\u653E " + data.skillName);
      }

      // 播放技能特效
      var SkillSystem = require("SkillSystem");
      if (target && target.isValid && !this.deadUnits.has(target) && data.skillName) {
        // 创建技能对象用于播放特效
        var skill = {
          skillName: data.skillName,
          id: data.skillId
        };
        // 播放技能特效
        SkillSystem._playSkillEffect(caster, target, skill);
      }

      // 播放攻击动画（如果有AttackMover组件）
      if (target && target.isValid && !this.deadUnits.has(target)) {
        var attackMover = caster.getComponent("AttackMover");
        if (attackMover && !attackMover.isAttacking) {
          // 只播放攻击动画，不执行实际伤害（伤害由damage事件处理）
          attackMover.attackTarget(target, function () {
            // 动画完成，不做其他处理
          });
        }
      }
    }
  },
  /**
   * 处理伤害事件
   * @private
   */
  _onDamage: function _onDamage(data) {
    var attacker = this.unitMap[data.attackerId];
    var target = this.unitMap[data.targetId];

    // 如果目标已死亡，跳过处理（避免复活）
    if (target && this.deadUnits.has(target)) {
      cc.log("[BattleReplayer] \u8DF3\u8FC7\u5DF2\u6B7B\u4EA1\u5355\u4F4D " + data.targetName + " \u7684\u4F24\u5BB3\u4E8B\u4EF6");
      return;
    }
    if (target && target.isValid) {
      var stats = target.getComponent("StatsComponent");
      var combat = target.getComponent("CombatComponent");
      if (stats) {
        if (data.isMiss) {
          // 闪避：不扣血，只显示MISS
          if (combat) combat.lastDamage = 0;
          stats.updateHealthBar(0, 'miss');
          cc.log("[BattleReplayer] " + data.attackerName + " \u5BF9 " + data.targetName + " \u7684\u653B\u51FB\u88AB\u95EA\u907F\u4E86\uFF01");
        } else {
          // 应用伤害：直接设置到记录时的血量状态
          // 重要：如果目标已死亡，确保HP保持为0（不应用任何伤害）
          if (this.deadUnits.has(target)) {
            stats.hp = 0;
            stats.maxHp = data.targetMaxHp;
            // 不更新血条、不增加怒气（已死亡单位）
            cc.log("[BattleReplayer] \u8DF3\u8FC7\u5DF2\u6B7B\u4EA1\u5355\u4F4D " + data.targetName + " \u7684\u4F24\u5BB3\u5E94\u7528\uFF08HP\u4FDD\u6301\u4E3A0\uFF09");
          } else {
            // 正常单位：应用伤害
            // 确保HP不会小于0（如果targetHp是负数，说明已经死亡）
            stats.hp = Math.max(0, data.targetHp);
            stats.maxHp = data.targetMaxHp;
            if (combat) combat.lastDamage = data.damage;

            // 更新血条显示
            var damageType = data.isCrit ? 'crit' : 'normal';
            stats.updateHealthBar(data.damage, damageType);

            // 更新怒气值（根据受到的伤害）
            if (data.damage > 0) {
              stats.addRage(data.damage);
            }

            // 检查是否因为这次伤害而死亡（即使death事件还没到）
            // 这样可以防止后续的伤害事件"复活"已死亡的单位
            if (stats.hp <= 0 && !this.deadUnits.has(target)) {
              // 立即标记为死亡（不等待death事件）
              this.deadUnits.add(target);
              stats.hp = 0;

              // 播放死亡动画
              var skeleton = target.getComponent(sp.Skeleton);
              if (skeleton) {
                skeleton.setAnimation(0, "die", false);
              }

              // 从队伍列表中移除
              var TeamRef = require("TeamRef");
              var team = target.getComponent("TeamComponent");
              if (team) {
                if (team.team === "hero") {
                  var index = TeamRef.herosRef.indexOf(target);
                  if (index !== -1) {
                    TeamRef.herosRef.splice(index, 1);
                  }
                } else if (team.team === "monster") {
                  var _index = TeamRef.monstersRef.indexOf(target);
                  if (_index !== -1) {
                    TeamRef.monstersRef.splice(_index, 1);
                  }
                }
              }
              cc.log("[BattleReplayer] " + data.targetName + " \u56E0\u4F24\u5BB3\u6B7B\u4EA1\uFF08HP=" + stats.hp + "\uFF09\uFF0C\u5DF2\u63D0\u524D\u6807\u8BB0\u4E3A\u6B7B\u4EA1");
            }
            cc.log("[BattleReplayer] " + data.attackerName + " \u5BF9 " + data.targetName + " \u9020\u6210 " + data.damage + " \u70B9\u4F24\u5BB3" + (data.isCrit ? ' (暴击)' : '') + "\uFF0C\u5269\u4F59HP: " + stats.hp);
          }
        }
      }
    }
  },
  /**
   * 处理治疗事件
   * @private
   */
  _onHeal: function _onHeal(data) {
    var caster = this.unitMap[data.casterId];
    var target = this.unitMap[data.targetId];

    // 如果目标已死亡，跳过处理
    if (target && this.deadUnits.has(target)) {
      cc.log("[BattleReplayer] \u8DF3\u8FC7\u5DF2\u6B7B\u4EA1\u5355\u4F4D " + data.targetName + " \u7684\u6CBB\u7597\u4E8B\u4EF6");
      return;
    }
    if (target && target.isValid) {
      var stats = target.getComponent("StatsComponent");
      if (stats) {
        // 恢复HP到记录时的状态
        stats.hp = data.targetHp;
        stats.maxHp = data.targetMaxHp;

        // 更新血条显示（使用'heal'类型）
        stats.updateHealthBar(data.healAmount, 'heal');
        cc.log("[BattleReplayer] " + data.casterName + " \u5BF9 " + data.targetName + " \u6062\u590D\u4E86 " + data.healAmount + " \u70B9\u751F\u547D\u503C\uFF0C\u5F53\u524DHP: " + stats.hp + "/" + stats.maxHp);
      }
    }
  },
  /**
   * 处理Buff应用事件
   * @private
   */
  _onBuffApply: function _onBuffApply(data) {
    var target = this.unitMap[data.targetId];

    // 如果目标已死亡，跳过处理
    if (target && this.deadUnits.has(target)) {
      cc.log("[BattleReplayer] \u8DF3\u8FC7\u5DF2\u6B7B\u4EA1\u5355\u4F4D " + data.targetName + " \u7684Buff\u5E94\u7528\u4E8B\u4EF6");
      return;
    }
    if (target && target.isValid) {
      cc.log("[BattleReplayer] " + data.targetName + " \u83B7\u5F97Buff: " + data.buffName);

      // 应用Buff效果（使用BuffSystem）
      var BuffSystem = require("BuffSystem");
      var BuffFactory = require("BuffFactory");

      // 创建Buff并应用
      var buff = BuffFactory.create(data.buffName);
      if (buff) {
        // 如果记录中有buff数据，恢复buff的属性
        if (data.buffData) {
          Object.assign(buff, data.buffData);
        }
        BuffSystem.addBuff(target, buff, function () {}, null); // 回放时不记录，不输出日志
      }
    }
  },
  /**
   * 处理Buff移除事件
   * @private
   */
  _onBuffRemove: function _onBuffRemove(data) {
    var target = this.unitMap[data.targetId];
    if (target && target.isValid) {
      cc.log("[BattleReplayer] " + data.targetName + " \u5931\u53BBBuff: " + data.buffName);

      // 移除Buff效果
      var BuffComponent = require("BuffComponent");
      var StatsComponent = require("StatsComponent");

      // 查找并移除对应的Buff
      var buffs = target.getComponents(BuffComponent);
      var buffToRemove = buffs.find(function (b) {
        return b.buffName === data.buffName;
      });
      if (buffToRemove) {
        var stats = target.getComponent(StatsComponent);

        // 恢复属性修改（如果有）
        if (stats && buffToRemove.modifiers) {
          for (var key in buffToRemove.modifiers) {
            if (stats[key] !== undefined) {
              stats[key] -= buffToRemove.modifiers[key];
            }
          }
          if (buffToRemove.modifiers.speed !== undefined) {
            stats.updateAttackInterval();
          }
        }

        // 如果是护盾Buff，更新血条显示
        if (buffToRemove.buffName === "护盾" && stats) {
          stats.updateHealthBar();
        }

        // 调用onExpire回调（如果有）
        if (buffToRemove.onExpire) {
          buffToRemove.onExpire(target, function () {}); // 回放时不输出日志
        }

        // 移除Buff组件
        target.removeComponent(buffToRemove);

        // 更新Buff图标显示
        var BuffSystem = require("BuffSystem");
        BuffSystem._updateBuffDisplay(target);
      }
    }
  },
  /**
   * 处理死亡事件
   * @private
   */
  _onDeath: function _onDeath(data) {
    var entity = this.unitMap[data.entityId]; //通过id找到单位
    if (entity && entity.isValid) {
      // 标记为已死亡
      this.deadUnits.add(entity);
      var stats = entity.getComponent("StatsComponent");
      if (stats) {
        stats.hp = 0;
        stats.updateHealthBar();
      }

      // 播放死亡动画
      var skeleton = entity.getComponent(sp.Skeleton);
      if (skeleton) {
        skeleton.setAnimation(0, "die", false);
      }

      // 从队伍列表中移除（如果需要）
      var TeamRef = require("TeamRef");
      var team = entity.getComponent("TeamComponent");
      if (team) {
        if (team.team === "hero") {
          var index = TeamRef.herosRef.indexOf(entity);
          if (index !== -1) {
            TeamRef.herosRef.splice(index, 1);
          }
        } else if (team.team === "monster") {
          var _index2 = TeamRef.monstersRef.indexOf(entity);
          if (_index2 !== -1) {
            TeamRef.monstersRef.splice(_index2, 1);
          }
        }
      }
      cc.log("[BattleReplayer] " + data.entityName + " \u6B7B\u4EA1\uFF0C\u5DF2\u6807\u8BB0\u4E3A\u6B7B\u4EA1\u72B6\u6001");
    }
  },
  /**
   * 处理游戏结束事件
   * @private
   */
  _onGameOver: function _onGameOver(data) {
    cc.log("[BattleReplayer] \u6E38\u620F\u7ED3\u675F\uFF1A" + data.winner + "\u80DC\u5229");
  },
  /**
   * 构建单位映射表
   * @private
   * @param {Array} heros - 英雄列表
   * @param {Array} monsters - 怪物列表
   * @param {Object} initialState - 初始状态（可选，用于补充缺失的单位）
   */
  _buildUnitMap: function _buildUnitMap(heros, monsters, initialState) {
    var _this2 = this;
    this.unitMap = {};

    // 首先添加传入的单位
    [].concat(heros, monsters).forEach(function (unit) {
      if (unit && unit.isValid) {
        _this2.unitMap[unit.name] = unit;
      }
    });

    // 如果提供了初始状态，从中提取所有单位名称，确保所有单位都在unitMap中
    if (initialState) {
      var allUnitNames = new Set();

      // 从初始状态中提取所有单位名称
      if (initialState.heros) {
        initialState.heros.forEach(function (unit) {
          if (unit && unit.name) {
            allUnitNames.add(unit.name);
          }
        });
      }
      if (initialState.monsters) {
        initialState.monsters.forEach(function (unit) {
          if (unit && unit.name) {
            allUnitNames.add(unit.name);
          }
        });
      }

      // 检查是否有单位缺失
      var missingUnits = [];
      allUnitNames.forEach(function (name) {
        if (!_this2.unitMap[name]) {
          missingUnits.push(name);
        }
      });
      if (missingUnits.length > 0) {
        cc.warn("[BattleReplayer] \u68C0\u6D4B\u5230\u7F3A\u5931\u7684\u5355\u4F4D: " + missingUnits.join(', '));
        cc.warn("[BattleReplayer] \u5F53\u524DunitMap\u4E2D\u7684\u5355\u4F4D: " + Object.keys(this.unitMap).join(', '));
        cc.warn("[BattleReplayer] \u5C1D\u8BD5\u4ECE\u573A\u666F\u4E2D\u67E5\u627E\u7F3A\u5931\u7684\u5355\u4F4D...");

        // 尝试从场景中查找缺失的单位
        var scene = cc.director.getScene();
        if (scene) {
          var findUnitByName = function findUnitByName(node, name) {
            if (node.name === name) {
              var stats = node.getComponent("StatsComponent");
              var team = node.getComponent("TeamComponent");
              if (stats && team) {
                return node;
              }
            }
            for (var _iterator = _createForOfIteratorHelperLoose(node.children), _step; !(_step = _iterator()).done;) {
              var child = _step.value;
              var result = findUnitByName(child, name);
              if (result) return result;
            }
            return null;
          };
          missingUnits.forEach(function (name) {
            var unit = findUnitByName(scene, name);
            if (unit && unit.isValid) {
              _this2.unitMap[name] = unit;
              cc.log("[BattleReplayer] \u2705 \u4ECE\u573A\u666F\u4E2D\u627E\u5230\u7F3A\u5931\u7684\u5355\u4F4D: " + name);
            } else {
              cc.error("[BattleReplayer] \u274C \u65E0\u6CD5\u4ECE\u573A\u666F\u4E2D\u627E\u5230\u5355\u4F4D: " + name);
            }
          });
        }
      }
    }
    cc.log("[BattleReplayer] unitMap\u6784\u5EFA\u5B8C\u6210\uFF0C\u5171 " + Object.keys(this.unitMap).length + " \u4E2A\u5355\u4F4D: " + Object.keys(this.unitMap).join(', '));
  },
  /**
   * 恢复初始状态
   * @private
   */
  _restoreInitialState: function _restoreInitialState(initialState) {
    var _this3 = this;
    // 清除所有单位的Buff和状态
    var BuffSystem = require("BuffSystem");
    var BuffComponent = require("BuffComponent");
    var TeamRef = require("TeamRef");

    // 重要：恢复 TeamRef，确保所有单位（包括已死亡的）都在队伍列表中
    // 因为死亡时单位会从 TeamRef 中移除，但重新播放时需要所有单位都在
    if (TeamRef.herosRef) {
      TeamRef.herosRef.length = 0; // 清空数组
    }

    if (TeamRef.monstersRef) {
      TeamRef.monstersRef.length = 0; // 清空数组
    }

    // 重新添加所有单位到 TeamRef（包括已死亡的，因为回放时需要它们）
    Object.values(this.unitMap).forEach(function (unit) {
      if (unit && unit.isValid) {
        var team = unit.getComponent("TeamComponent");
        if (team) {
          if (team.team === "hero" && TeamRef.herosRef) {
            // 如果不在数组中，则添加
            if (TeamRef.herosRef.indexOf(unit) === -1) {
              TeamRef.herosRef.push(unit);
            }
          } else if (team.team === "monster" && TeamRef.monstersRef) {
            // 如果不在数组中，则添加
            if (TeamRef.monstersRef.indexOf(unit) === -1) {
              TeamRef.monstersRef.push(unit);
            }
          }
        }
      }
    });
    cc.log("[BattleReplayer] \u5DF2\u6062\u590DTeamRef: \u82F1\u96C4" + (TeamRef.herosRef ? TeamRef.herosRef.length : 0) + "\u4E2A, \u602A\u7269" + (TeamRef.monstersRef ? TeamRef.monstersRef.length : 0) + "\u4E2A");

    // 清除所有单位的Buff
    Object.values(this.unitMap).forEach(function (unit) {
      if (unit && unit.isValid) {
        var buffs = unit.getComponents(BuffComponent);
        if (buffs && buffs.length > 0) {
          // 移除所有Buff（直接使用removeComponent）
          buffs.forEach(function (buff) {
            // 恢复属性修改（如果有）
            var stats = unit.getComponent("StatsComponent");
            if (stats && buff.modifiers) {
              for (var key in buff.modifiers) {
                if (stats[key] !== undefined) {
                  stats[key] -= buff.modifiers[key];
                }
              }
            }
            // 直接移除组件
            unit.removeComponent(buff);
          });
        }

        // 重置怒气值
        var stats = unit.getComponent("StatsComponent");
        if (stats) {
          if (stats.rage !== undefined) {
            stats.rage = 0;
            if (stats.updateRageBar) {
              stats.updateRageBar();
            }
          }
        }

        // 重置动画到待机状态（如果单位还活着）
        if (!_this3.deadUnits.has(unit)) {
          var skeleton = unit.getComponent(sp.Skeleton);
          if (skeleton) {
            skeleton.setAnimation(0, "wait", true);
          }
        }
      }
    });

    // 恢复英雄状态
    if (initialState.heros) {
      initialState.heros.forEach(function (unitData) {
        var unit = _this3.unitMap[unitData.id];
        if (unit && unit.isValid) {
          var stats = unit.getComponent("StatsComponent");
          if (stats) {
            stats.hp = unitData.hp;
            stats.maxHp = unitData.maxHp;
            stats.attack = unitData.attack;
            stats.defense = unitData.defense;
            stats.speed = unitData.speed;
            stats.updateHealthBar();
          }
        }
      });
    }

    // 恢复怪物状态
    if (initialState.monsters) {
      initialState.monsters.forEach(function (unitData) {
        var unit = _this3.unitMap[unitData.id];
        if (unit && unit.isValid) {
          var stats = unit.getComponent("StatsComponent");
          if (stats) {
            stats.hp = unitData.hp;
            stats.maxHp = unitData.maxHp;
            stats.attack = unitData.attack;
            stats.defense = unitData.defense;
            stats.speed = unitData.speed;
            stats.updateHealthBar();
          }
        }
      });
    }
    cc.log("[BattleReplayer] 初始状态已恢复，所有Buff已清除");
  }
});
module.exports = BattleReplayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxCYXR0bGVSZXBsYXllci5qcyJdLCJuYW1lcyI6WyJCYXR0bGVSZXBsYXllciIsImNjIiwiQ2xhc3MiLCJuYW1lIiwicHJvcGVydGllcyIsImlzUmVwbGF5aW5nIiwidmlzaWJsZSIsInBsYXliYWNrU3BlZWQiLCJ0b29sdGlwIiwiaXNQYXVzZWQiLCJjdXJyZW50RXZlbnRJbmRleCIsImJhdHRsZVJlY29yZCIsInVuaXRNYXAiLCJfZGVmYXVsdCIsImRlYWRVbml0cyIsIlNldCIsInJlcGxheVN0YXJ0VGltZSIsInN0YXJ0UmVwbGF5IiwiaGVyb3MiLCJtb25zdGVycyIsIm9uUmVwbGF5Q29tcGxldGUiLCJldmVudHMiLCJlcnJvciIsIkRhdGUiLCJub3ciLCJjbGVhciIsIl9idWlsZFVuaXRNYXAiLCJpbml0aWFsU3RhdGUiLCJfcmVzdG9yZUluaXRpYWxTdGF0ZSIsInNvcnQiLCJhIiwiYiIsInRpbWVzdGFtcCIsInR5cGUiLCJsb2ciLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwiam9pbiIsIl9wcm9jZXNzTmV4dEV2ZW50Iiwic3RvcFJlcGxheSIsIl90aW1lb3V0SWQiLCJjbGVhclRpbWVvdXQiLCJ0b2dnbGVQYXVzZSIsInNldFBsYXliYWNrU3BlZWQiLCJzcGVlZCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJqdW1wVG9FdmVudCIsImV2ZW50SW5kZXgiLCJ3YXJuIiwiaSIsIl9leGVjdXRlRXZlbnQiLCJfdGhpcyIsImN1cnJlbnRFdmVudCIsImN1cnJlbnRUaW1lIiwiZXZlbnRUaW1lIiwiZGVsYXkiLCJzZXRUaW1lb3V0IiwiZXZlbnQiLCJkYXRhIiwiX29uQWN0aW9uU3RhcnQiLCJfb25Ta2lsbFVzZSIsIl9vbkRhbWFnZSIsIl9vbkhlYWwiLCJfb25CdWZmQXBwbHkiLCJfb25CdWZmUmVtb3ZlIiwiX29uRGVhdGgiLCJfb25HYW1lT3ZlciIsImVudGl0eSIsImFjdG9ySWQiLCJhY3Rvck5hbWUiLCJza2VsZXRvbiIsImdldENvbXBvbmVudCIsInNwIiwiU2tlbGV0b24iLCJjYXN0ZXIiLCJjYXN0ZXJJZCIsInRhcmdldCIsInRhcmdldElkIiwidGFyZ2V0TmFtZSIsIl9pIiwiX09iamVjdCR2YWx1ZXMiLCJ2YWx1ZXMiLCJ1bml0IiwiaXNWYWxpZCIsImhhcyIsImNhc3Rlck5hbWUiLCJza2lsbE5hbWUiLCJTa2lsbFN5c3RlbSIsInJlcXVpcmUiLCJza2lsbCIsImlkIiwic2tpbGxJZCIsIl9wbGF5U2tpbGxFZmZlY3QiLCJhdHRhY2tNb3ZlciIsImlzQXR0YWNraW5nIiwiYXR0YWNrVGFyZ2V0IiwiYXR0YWNrZXIiLCJhdHRhY2tlcklkIiwic3RhdHMiLCJjb21iYXQiLCJpc01pc3MiLCJsYXN0RGFtYWdlIiwidXBkYXRlSGVhbHRoQmFyIiwiYXR0YWNrZXJOYW1lIiwiaHAiLCJtYXhIcCIsInRhcmdldE1heEhwIiwidGFyZ2V0SHAiLCJkYW1hZ2UiLCJkYW1hZ2VUeXBlIiwiaXNDcml0IiwiYWRkUmFnZSIsImFkZCIsInNldEFuaW1hdGlvbiIsIlRlYW1SZWYiLCJ0ZWFtIiwiaW5kZXgiLCJoZXJvc1JlZiIsImluZGV4T2YiLCJzcGxpY2UiLCJtb25zdGVyc1JlZiIsImhlYWxBbW91bnQiLCJidWZmTmFtZSIsIkJ1ZmZTeXN0ZW0iLCJCdWZmRmFjdG9yeSIsImJ1ZmYiLCJjcmVhdGUiLCJidWZmRGF0YSIsImFzc2lnbiIsImFkZEJ1ZmYiLCJCdWZmQ29tcG9uZW50IiwiU3RhdHNDb21wb25lbnQiLCJidWZmcyIsImdldENvbXBvbmVudHMiLCJidWZmVG9SZW1vdmUiLCJmaW5kIiwibW9kaWZpZXJzIiwia2V5IiwidW5kZWZpbmVkIiwidXBkYXRlQXR0YWNrSW50ZXJ2YWwiLCJvbkV4cGlyZSIsInJlbW92ZUNvbXBvbmVudCIsIl91cGRhdGVCdWZmRGlzcGxheSIsImVudGl0eUlkIiwiZW50aXR5TmFtZSIsIndpbm5lciIsIl90aGlzMiIsImNvbmNhdCIsImZvckVhY2giLCJhbGxVbml0TmFtZXMiLCJtaXNzaW5nVW5pdHMiLCJwdXNoIiwic2NlbmUiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiZmluZFVuaXRCeU5hbWUiLCJub2RlIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsImNoaWxkcmVuIiwiX3N0ZXAiLCJkb25lIiwiY2hpbGQiLCJ2YWx1ZSIsInJlc3VsdCIsIl90aGlzMyIsInJhZ2UiLCJ1cGRhdGVSYWdlQmFyIiwidW5pdERhdGEiLCJhdHRhY2siLCJkZWZlbnNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLGNBQWMsR0FBR0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDMUJDLElBQUksRUFBRSxnQkFBZ0I7RUFFdEJDLFVBQVUsRUFBRTtJQUNSO0lBQ0FDLFdBQVcsRUFBRTtNQUNULFdBQVMsS0FBSztNQUNkQyxPQUFPLEVBQUU7SUFDYixDQUFDO0lBRUQ7SUFDQUMsYUFBYSxFQUFFO01BQ1gsV0FBUyxHQUFHO01BQ1pDLE9BQU8sRUFBRTtJQUNiLENBQUM7SUFFRDtJQUNBQyxRQUFRLEVBQUU7TUFDTixXQUFTLEtBQUs7TUFDZEgsT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVEO0lBQ0FJLGlCQUFpQixFQUFFO01BQ2YsV0FBUyxDQUFDO01BQ1ZKLE9BQU8sRUFBRTtJQUNiLENBQUM7SUFFRDtJQUNBSyxZQUFZLEVBQUU7TUFDVixXQUFTLElBQUk7TUFDYkwsT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVEO0lBQ0FNLE9BQU8sRUFBRTtNQUNMLFdBQVMsU0FBQUMsU0FBQTtRQUFBLE9BQU8sQ0FBQyxDQUFDO01BQUEsQ0FBQztNQUNuQlAsT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVEO0lBQ0FRLFNBQVMsRUFBRTtNQUNQLFdBQVMsU0FBQUQsU0FBQTtRQUFBLE9BQU8sSUFBSUUsR0FBRyxFQUFFO01BQUEsQ0FBQztNQUMxQlQsT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVEO0lBQ0FVLGVBQWUsRUFBRTtNQUNiLFdBQVMsQ0FBQztNQUNWVixPQUFPLEVBQUU7SUFDYjtFQUNKLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJVyxXQUFXLFdBQUFBLFlBQUNOLFlBQVksRUFBRU8sS0FBSyxFQUFFQyxRQUFRLEVBQUVDLGdCQUFnQixFQUFFO0lBQ3pELElBQUksQ0FBQ1QsWUFBWSxJQUFJLENBQUNBLFlBQVksQ0FBQ1UsTUFBTSxFQUFFO01BQ3ZDcEIsRUFBRSxDQUFDcUIsS0FBSyxDQUFDLDBCQUEwQixDQUFDO01BQ3BDO0lBQ0o7SUFFQSxJQUFJLENBQUNYLFlBQVksR0FBR0EsWUFBWTtJQUNoQyxJQUFJLENBQUNOLFdBQVcsR0FBRyxJQUFJO0lBQ3ZCLElBQUksQ0FBQ0ksUUFBUSxHQUFHLEtBQUs7SUFDckIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBRyxDQUFDO0lBQzFCLElBQUksQ0FBQ00sZUFBZSxHQUFHTyxJQUFJLENBQUNDLEdBQUcsRUFBRTtJQUNqQyxJQUFJLENBQUNKLGdCQUFnQixHQUFHQSxnQkFBZ0I7SUFDeEMsSUFBSSxDQUFDTixTQUFTLENBQUNXLEtBQUssRUFBRSxDQUFDLENBQUM7O0lBRXhCO0lBQ0EsSUFBSSxDQUFDQyxhQUFhLENBQUNSLEtBQUssRUFBRUMsUUFBUSxFQUFFUixZQUFZLENBQUNnQixZQUFZLENBQUM7O0lBRTlEO0lBQ0EsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ2pCLFlBQVksQ0FBQ2dCLFlBQVksQ0FBQzs7SUFFcEQ7SUFDQWhCLFlBQVksQ0FBQ1UsTUFBTSxDQUFDUSxJQUFJLENBQUMsVUFBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUs7TUFDL0IsSUFBSUQsQ0FBQyxDQUFDRSxTQUFTLEtBQUtELENBQUMsQ0FBQ0MsU0FBUyxFQUFFO1FBQzdCLE9BQU9GLENBQUMsQ0FBQ0UsU0FBUyxHQUFHRCxDQUFDLENBQUNDLFNBQVM7TUFDcEM7TUFDQTtNQUNBLElBQUlGLENBQUMsQ0FBQ0csSUFBSSxLQUFLLE9BQU8sSUFBSUYsQ0FBQyxDQUFDRSxJQUFJLEtBQUssT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUU7TUFDekQsSUFBSUgsQ0FBQyxDQUFDRyxJQUFJLEtBQUssT0FBTyxJQUFJRixDQUFDLENBQUNFLElBQUksS0FBSyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFFO01BQzFELE9BQU8sQ0FBQztJQUNaLENBQUMsQ0FBQztJQUVGaEMsRUFBRSxDQUFDaUMsR0FBRyw0REFBNEJ2QixZQUFZLENBQUNVLE1BQU0sQ0FBQ2MsTUFBTSx1REFBWTtJQUN4RWxDLEVBQUUsQ0FBQ2lDLEdBQUcsd0RBQWtDRSxNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUN6QixPQUFPLENBQUMsQ0FBQzBCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBRzs7SUFFL0U7SUFDQSxJQUFJLENBQUNDLGlCQUFpQixFQUFFO0VBQzVCLENBQUM7RUFFRDtBQUNKO0FBQ0E7RUFDSUMsVUFBVSxXQUFBQSxXQUFBLEVBQUc7SUFDVCxJQUFJLENBQUNuQyxXQUFXLEdBQUcsS0FBSztJQUN4QixJQUFJLENBQUNJLFFBQVEsR0FBRyxLQUFLO0lBQ3JCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUcsQ0FBQzs7SUFFMUI7SUFDQSxJQUFJLElBQUksQ0FBQytCLFVBQVUsRUFBRTtNQUNqQkMsWUFBWSxDQUFDLElBQUksQ0FBQ0QsVUFBVSxDQUFDO01BQzdCLElBQUksQ0FBQ0EsVUFBVSxHQUFHLElBQUk7SUFDMUI7SUFFQXhDLEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQztFQUNuQyxDQUFDO0VBRUQ7QUFDSjtBQUNBO0VBQ0lTLFdBQVcsV0FBQUEsWUFBQSxFQUFHO0lBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQ3RDLFdBQVcsRUFBRTtJQUV2QixJQUFJLENBQUNJLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQ0EsUUFBUTtJQUU5QixJQUFJLElBQUksQ0FBQ0EsUUFBUSxFQUFFO01BQ2Y7TUFDQSxJQUFJLElBQUksQ0FBQ2dDLFVBQVUsRUFBRTtRQUNqQkMsWUFBWSxDQUFDLElBQUksQ0FBQ0QsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQ0EsVUFBVSxHQUFHLElBQUk7TUFDMUI7TUFDQXhDLEVBQUUsQ0FBQ2lDLEdBQUcsK0dBQW9DO0lBQzlDLENBQUMsTUFBTTtNQUNIO01BQ0EsSUFBSSxDQUFDbEIsZUFBZSxHQUFHTyxJQUFJLENBQUNDLEdBQUcsRUFBRSxHQUFJLElBQUksQ0FBQ2IsWUFBWSxDQUFDVSxNQUFNLENBQUMsSUFBSSxDQUFDWCxpQkFBaUIsQ0FBQyxDQUFDc0IsU0FBUyxHQUFHLElBQUksQ0FBQ3pCLGFBQWM7TUFDckgsSUFBSSxDQUFDZ0MsaUJBQWlCLEVBQUU7TUFDeEJ0QyxFQUFFLENBQUNpQyxHQUFHLDZDQUF5QjtJQUNuQztFQUNKLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJVSxnQkFBZ0IsV0FBQUEsaUJBQUNDLEtBQUssRUFBRTtJQUNwQixJQUFJLENBQUN0QyxhQUFhLEdBQUd1QyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxHQUFHLEVBQUVELElBQUksQ0FBQ0UsR0FBRyxDQUFDLEdBQUcsRUFBRUgsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFENUMsRUFBRSxDQUFDaUMsR0FBRyw2REFBNkIsSUFBSSxDQUFDM0IsYUFBYSxPQUFJO0VBQzdELENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJMEMsV0FBVyxXQUFBQSxZQUFDQyxVQUFVLEVBQUU7SUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQ3ZDLFlBQVksSUFBSXVDLFVBQVUsR0FBRyxDQUFDLElBQUlBLFVBQVUsSUFBSSxJQUFJLENBQUN2QyxZQUFZLENBQUNVLE1BQU0sQ0FBQ2MsTUFBTSxFQUFFO01BQ3ZGbEMsRUFBRSxDQUFDa0QsSUFBSSxDQUFDLDBCQUEwQixDQUFDO01BQ25DO0lBQ0o7O0lBRUE7SUFDQSxJQUFJLENBQUN2QixvQkFBb0IsQ0FBQyxJQUFJLENBQUNqQixZQUFZLENBQUNnQixZQUFZLENBQUM7O0lBRXpEO0lBQ0EsSUFBSSxDQUFDakIsaUJBQWlCLEdBQUcsQ0FBQztJQUMxQixLQUFLLElBQUkwQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdGLFVBQVUsRUFBRUUsQ0FBQyxFQUFFLEVBQUU7TUFDakMsSUFBSSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDMUMsWUFBWSxDQUFDVSxNQUFNLENBQUMrQixDQUFDLENBQUMsQ0FBQztNQUMvQyxJQUFJLENBQUMxQyxpQkFBaUIsRUFBRTtJQUM1Qjs7SUFFQTtJQUNBLElBQUksQ0FBQzZCLGlCQUFpQixFQUFFO0VBQzVCLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJQSxpQkFBaUIsV0FBQUEsa0JBQUEsRUFBRztJQUFBLElBQUFlLEtBQUE7SUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQ2pELFdBQVcsSUFBSSxJQUFJLENBQUNJLFFBQVEsRUFBRTtJQUV4QyxJQUFJLElBQUksQ0FBQ0MsaUJBQWlCLElBQUksSUFBSSxDQUFDQyxZQUFZLENBQUNVLE1BQU0sQ0FBQ2MsTUFBTSxFQUFFO01BQzNEO01BQ0EsSUFBSSxDQUFDOUIsV0FBVyxHQUFHLEtBQUs7TUFDeEJKLEVBQUUsQ0FBQ2lDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQztNQUMvQixJQUFJLElBQUksQ0FBQ2QsZ0JBQWdCLEVBQUU7UUFDdkIsSUFBSSxDQUFDQSxnQkFBZ0IsRUFBRTtNQUMzQjtNQUNBO0lBQ0o7SUFFQSxJQUFNbUMsWUFBWSxHQUFHLElBQUksQ0FBQzVDLFlBQVksQ0FBQ1UsTUFBTSxDQUFDLElBQUksQ0FBQ1gsaUJBQWlCLENBQUM7SUFDckUsSUFBTThDLFdBQVcsR0FBR2pDLElBQUksQ0FBQ0MsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDUixlQUFlO0lBQ3JELElBQU15QyxTQUFTLEdBQUdGLFlBQVksQ0FBQ3ZCLFNBQVMsR0FBRyxJQUFJLENBQUN6QixhQUFhO0lBRTdELElBQUlpRCxXQUFXLElBQUlDLFNBQVMsRUFBRTtNQUMxQjtNQUNBLElBQUksSUFBSSxDQUFDaEQsUUFBUSxFQUFFO1FBQ2ZSLEVBQUUsQ0FBQ2lDLEdBQUcsNkdBQXFDcUIsWUFBWSxDQUFDdEIsSUFBSSxDQUFHO1FBQy9EO01BQ0o7O01BRUE7TUFDQSxJQUFJLENBQUNvQixhQUFhLENBQUNFLFlBQVksQ0FBQztNQUNoQyxJQUFJLENBQUM3QyxpQkFBaUIsRUFBRTs7TUFFeEI7TUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDRCxRQUFRLEVBQUU7UUFDaEIsSUFBSSxDQUFDOEIsaUJBQWlCLEVBQUU7TUFDNUI7SUFDSixDQUFDLE1BQU07TUFDSDtNQUNBLElBQU1tQixLQUFLLEdBQUdELFNBQVMsR0FBR0QsV0FBVztNQUNyQyxJQUFJLElBQUksQ0FBQ2YsVUFBVSxFQUFFO1FBQ2pCQyxZQUFZLENBQUMsSUFBSSxDQUFDRCxVQUFVLENBQUM7TUFDakM7TUFDQSxJQUFJLENBQUNBLFVBQVUsR0FBR2tCLFVBQVUsQ0FBQyxZQUFNO1FBQy9CTCxLQUFJLENBQUNiLFVBQVUsR0FBRyxJQUFJO1FBQ3RCYSxLQUFJLENBQUNmLGlCQUFpQixFQUFFO01BQzVCLENBQUMsRUFBRW1CLEtBQUssQ0FBQztJQUNiO0VBQ0osQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0lMLGFBQWEsV0FBQUEsY0FBQ08sS0FBSyxFQUFFO0lBQ2pCO0lBQ0EsSUFBSSxJQUFJLENBQUNuRCxRQUFRLEVBQUU7TUFDZlIsRUFBRSxDQUFDaUMsR0FBRyw2R0FBcUMwQixLQUFLLENBQUMzQixJQUFJLENBQUc7TUFDeEQ7SUFDSjtJQUVBLElBQVFBLElBQUksR0FBVzJCLEtBQUssQ0FBcEIzQixJQUFJO01BQUU0QixJQUFJLEdBQUtELEtBQUssQ0FBZEMsSUFBSTtJQUVsQixRQUFRNUIsSUFBSTtNQUNSLEtBQUssYUFBYTtRQUNkLElBQUksQ0FBQzZCLGNBQWMsQ0FBQ0QsSUFBSSxDQUFDO1FBQ3pCO01BQ0osS0FBSyxVQUFVO1FBQ1gsSUFBSSxDQUFDRSxXQUFXLENBQUNGLElBQUksQ0FBQztRQUN0QjtNQUNKLEtBQUssUUFBUTtRQUNULElBQUksQ0FBQ0csU0FBUyxDQUFDSCxJQUFJLENBQUM7UUFDcEI7TUFDSixLQUFLLE1BQU07UUFDUCxJQUFJLENBQUNJLE9BQU8sQ0FBQ0osSUFBSSxDQUFDO1FBQ2xCO01BQ0osS0FBSyxXQUFXO1FBQ1osSUFBSSxDQUFDSyxZQUFZLENBQUNMLElBQUksQ0FBQztRQUN2QjtNQUNKLEtBQUssWUFBWTtRQUNiLElBQUksQ0FBQ00sYUFBYSxDQUFDTixJQUFJLENBQUM7UUFDeEI7TUFDSixLQUFLLE9BQU87UUFDUixJQUFJLENBQUNPLFFBQVEsQ0FBQ1AsSUFBSSxDQUFDO1FBQ25CO01BQ0osS0FBSyxVQUFVO1FBQ1gsSUFBSSxDQUFDUSxXQUFXLENBQUNSLElBQUksQ0FBQztRQUN0QjtNQUNKO1FBQ0k1RCxFQUFFLENBQUNrRCxJQUFJLDZEQUE2QmxCLElBQUksQ0FBRztJQUFDO0VBRXhELENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJNkIsY0FBYyxXQUFBQSxlQUFDRCxJQUFJLEVBQUU7SUFDakIsSUFBTVMsTUFBTSxHQUFHLElBQUksQ0FBQzFELE9BQU8sQ0FBQ2lELElBQUksQ0FBQ1UsT0FBTyxDQUFDO0lBQ3pDLElBQUlELE1BQU0sRUFBRTtNQUNSckUsRUFBRSxDQUFDaUMsR0FBRyx1QkFBcUIyQixJQUFJLENBQUNXLFNBQVMsK0JBQVE7O01BRWpEO01BQ0EsSUFBTUMsUUFBUSxHQUFHSCxNQUFNLENBQUNJLFlBQVksQ0FBQ0MsRUFBRSxDQUFDQyxRQUFRLENBQUM7TUFDakQsSUFBSUgsUUFBUSxFQUFFO1FBQ1Y7TUFBQTtJQUVSO0VBQ0osQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0lWLFdBQVcsV0FBQUEsWUFBQ0YsSUFBSSxFQUFFO0lBQ2QsSUFBTWdCLE1BQU0sR0FBRyxJQUFJLENBQUNqRSxPQUFPLENBQUNpRCxJQUFJLENBQUNpQixRQUFRLENBQUM7SUFDMUMsSUFBSUMsTUFBTSxHQUFHLElBQUk7O0lBRWpCO0lBQ0EsSUFBSWxCLElBQUksQ0FBQ21CLFFBQVEsRUFBRTtNQUNmRCxNQUFNLEdBQUcsSUFBSSxDQUFDbkUsT0FBTyxDQUFDaUQsSUFBSSxDQUFDbUIsUUFBUSxDQUFDO01BQ3BDLElBQUksQ0FBQ0QsTUFBTSxFQUFFO1FBQ1Q7UUFDQTlFLEVBQUUsQ0FBQ2tELElBQUkscUVBQWdDVSxJQUFJLENBQUNtQixRQUFRLDREQUFlbkIsSUFBSSxDQUFDb0IsVUFBVSxDQUFHO1FBQ3JGLElBQUlwQixJQUFJLENBQUNvQixVQUFVLEVBQUU7VUFDakI7VUFDQSxTQUFBQyxFQUFBLE1BQUFDLGNBQUEsR0FBaUIvQyxNQUFNLENBQUNnRCxNQUFNLENBQUMsSUFBSSxDQUFDeEUsT0FBTyxDQUFDLEVBQUFzRSxFQUFBLEdBQUFDLGNBQUEsQ0FBQWhELE1BQUEsRUFBQStDLEVBQUEsSUFBRTtZQUF6QyxJQUFJRyxJQUFJLEdBQUFGLGNBQUEsQ0FBQUQsRUFBQTtZQUNULElBQUlHLElBQUksSUFBSUEsSUFBSSxDQUFDQyxPQUFPLElBQUlELElBQUksQ0FBQ2xGLElBQUksS0FBSzBELElBQUksQ0FBQ29CLFVBQVUsRUFBRTtjQUN2REYsTUFBTSxHQUFHTSxJQUFJO2NBQ2JwRixFQUFFLENBQUNpQyxHQUFHLHlFQUErQjJCLElBQUksQ0FBQ29CLFVBQVUsQ0FBRztjQUN2RDtZQUNKO1VBQ0o7UUFDSjtNQUNKO0lBQ0o7O0lBRUE7SUFDQSxJQUFJSixNQUFNLElBQUksSUFBSSxDQUFDL0QsU0FBUyxDQUFDeUUsR0FBRyxDQUFDVixNQUFNLENBQUMsRUFBRTtNQUN0QzVFLEVBQUUsQ0FBQ2lDLEdBQUcsa0VBQTZCMkIsSUFBSSxDQUFDMkIsVUFBVSxpREFBVztNQUM3RDtJQUNKO0lBRUEsSUFBSVgsTUFBTSxJQUFJQSxNQUFNLENBQUNTLE9BQU8sRUFBRTtNQUMxQixJQUFJLENBQUNQLE1BQU0sRUFBRTtRQUNUOUUsRUFBRSxDQUFDa0QsSUFBSSx1QkFBcUJVLElBQUksQ0FBQzJCLFVBQVUsOENBQVczQixJQUFJLENBQUM0QixTQUFTLENBQUc7UUFDdkV4RixFQUFFLENBQUNrRCxJQUFJLHlEQUE4QlUsSUFBSSxDQUFDbUIsUUFBUSxvQ0FBV25CLElBQUksQ0FBQ29CLFVBQVUsQ0FBRztRQUMvRWhGLEVBQUUsQ0FBQ2tELElBQUksb0VBQW9DZixNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUN6QixPQUFPLENBQUMsQ0FBQzBCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBRztNQUN0RixDQUFDLE1BQU07UUFDSHJDLEVBQUUsQ0FBQ2lDLEdBQUcsdUJBQXFCMkIsSUFBSSxDQUFDMkIsVUFBVSxnQkFBTVQsTUFBTSxDQUFDNUUsSUFBSSxzQkFBTzBELElBQUksQ0FBQzRCLFNBQVMsQ0FBRztNQUN2Rjs7TUFFQTtNQUNBLElBQU1DLFdBQVcsR0FBR0MsT0FBTyxDQUFDLGFBQWEsQ0FBQztNQUMxQyxJQUFJWixNQUFNLElBQUlBLE1BQU0sQ0FBQ08sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDeEUsU0FBUyxDQUFDeUUsR0FBRyxDQUFDUixNQUFNLENBQUMsSUFBSWxCLElBQUksQ0FBQzRCLFNBQVMsRUFBRTtRQUMzRTtRQUNBLElBQU1HLEtBQUssR0FBRztVQUNWSCxTQUFTLEVBQUU1QixJQUFJLENBQUM0QixTQUFTO1VBQ3pCSSxFQUFFLEVBQUVoQyxJQUFJLENBQUNpQztRQUNiLENBQUM7UUFDRDtRQUNBSixXQUFXLENBQUNLLGdCQUFnQixDQUFDbEIsTUFBTSxFQUFFRSxNQUFNLEVBQUVhLEtBQUssQ0FBQztNQUN2RDs7TUFFQTtNQUNBLElBQUliLE1BQU0sSUFBSUEsTUFBTSxDQUFDTyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUN4RSxTQUFTLENBQUN5RSxHQUFHLENBQUNSLE1BQU0sQ0FBQyxFQUFFO1FBQ3pELElBQU1pQixXQUFXLEdBQUduQixNQUFNLENBQUNILFlBQVksQ0FBQyxhQUFhLENBQUM7UUFDdEQsSUFBSXNCLFdBQVcsSUFBSSxDQUFDQSxXQUFXLENBQUNDLFdBQVcsRUFBRTtVQUN6QztVQUNBRCxXQUFXLENBQUNFLFlBQVksQ0FBQ25CLE1BQU0sRUFBRSxZQUFNO1lBQ25DO1VBQUEsQ0FDSCxDQUFDO1FBQ047TUFDSjtJQUNKO0VBQ0osQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0lmLFNBQVMsV0FBQUEsVUFBQ0gsSUFBSSxFQUFFO0lBQ1osSUFBTXNDLFFBQVEsR0FBRyxJQUFJLENBQUN2RixPQUFPLENBQUNpRCxJQUFJLENBQUN1QyxVQUFVLENBQUM7SUFDOUMsSUFBTXJCLE1BQU0sR0FBRyxJQUFJLENBQUNuRSxPQUFPLENBQUNpRCxJQUFJLENBQUNtQixRQUFRLENBQUM7O0lBRTFDO0lBQ0EsSUFBSUQsTUFBTSxJQUFJLElBQUksQ0FBQ2pFLFNBQVMsQ0FBQ3lFLEdBQUcsQ0FBQ1IsTUFBTSxDQUFDLEVBQUU7TUFDdEM5RSxFQUFFLENBQUNpQyxHQUFHLGtFQUE2QjJCLElBQUksQ0FBQ29CLFVBQVUscUNBQVM7TUFDM0Q7SUFDSjtJQUVBLElBQUlGLE1BQU0sSUFBSUEsTUFBTSxDQUFDTyxPQUFPLEVBQUU7TUFDMUIsSUFBTWUsS0FBSyxHQUFHdEIsTUFBTSxDQUFDTCxZQUFZLENBQUMsZ0JBQWdCLENBQUM7TUFDbkQsSUFBTTRCLE1BQU0sR0FBR3ZCLE1BQU0sQ0FBQ0wsWUFBWSxDQUFDLGlCQUFpQixDQUFDO01BRXJELElBQUkyQixLQUFLLEVBQUU7UUFDUCxJQUFJeEMsSUFBSSxDQUFDMEMsTUFBTSxFQUFFO1VBQ2I7VUFDQSxJQUFJRCxNQUFNLEVBQUVBLE1BQU0sQ0FBQ0UsVUFBVSxHQUFHLENBQUM7VUFDakNILEtBQUssQ0FBQ0ksZUFBZSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7VUFDaEN4RyxFQUFFLENBQUNpQyxHQUFHLHVCQUFxQjJCLElBQUksQ0FBQzZDLFlBQVksZ0JBQU03QyxJQUFJLENBQUNvQixVQUFVLHVEQUFZO1FBQ2pGLENBQUMsTUFBTTtVQUNIO1VBQ0E7VUFDQSxJQUFJLElBQUksQ0FBQ25FLFNBQVMsQ0FBQ3lFLEdBQUcsQ0FBQ1IsTUFBTSxDQUFDLEVBQUU7WUFDNUJzQixLQUFLLENBQUNNLEVBQUUsR0FBRyxDQUFDO1lBQ1pOLEtBQUssQ0FBQ08sS0FBSyxHQUFHL0MsSUFBSSxDQUFDZ0QsV0FBVztZQUM5QjtZQUNBNUcsRUFBRSxDQUFDaUMsR0FBRyxrRUFBNkIyQixJQUFJLENBQUNvQixVQUFVLHNFQUFpQjtVQUN2RSxDQUFDLE1BQU07WUFDSDtZQUNBO1lBQ0FvQixLQUFLLENBQUNNLEVBQUUsR0FBRzdELElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsRUFBRWMsSUFBSSxDQUFDaUQsUUFBUSxDQUFDO1lBQ3JDVCxLQUFLLENBQUNPLEtBQUssR0FBRy9DLElBQUksQ0FBQ2dELFdBQVc7WUFFOUIsSUFBSVAsTUFBTSxFQUFFQSxNQUFNLENBQUNFLFVBQVUsR0FBRzNDLElBQUksQ0FBQ2tELE1BQU07O1lBRTNDO1lBQ0EsSUFBTUMsVUFBVSxHQUFHbkQsSUFBSSxDQUFDb0QsTUFBTSxHQUFHLE1BQU0sR0FBRyxRQUFRO1lBQ2xEWixLQUFLLENBQUNJLGVBQWUsQ0FBQzVDLElBQUksQ0FBQ2tELE1BQU0sRUFBRUMsVUFBVSxDQUFDOztZQUU5QztZQUNBLElBQUluRCxJQUFJLENBQUNrRCxNQUFNLEdBQUcsQ0FBQyxFQUFFO2NBQ2pCVixLQUFLLENBQUNhLE9BQU8sQ0FBQ3JELElBQUksQ0FBQ2tELE1BQU0sQ0FBQztZQUM5Qjs7WUFFQTtZQUNBO1lBQ0EsSUFBSVYsS0FBSyxDQUFDTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDN0YsU0FBUyxDQUFDeUUsR0FBRyxDQUFDUixNQUFNLENBQUMsRUFBRTtjQUM5QztjQUNBLElBQUksQ0FBQ2pFLFNBQVMsQ0FBQ3FHLEdBQUcsQ0FBQ3BDLE1BQU0sQ0FBQztjQUMxQnNCLEtBQUssQ0FBQ00sRUFBRSxHQUFHLENBQUM7O2NBRVo7Y0FDQSxJQUFNbEMsUUFBUSxHQUFHTSxNQUFNLENBQUNMLFlBQVksQ0FBQ0MsRUFBRSxDQUFDQyxRQUFRLENBQUM7Y0FDakQsSUFBSUgsUUFBUSxFQUFFO2dCQUNWQSxRQUFRLENBQUMyQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7Y0FDMUM7O2NBRUE7Y0FDQSxJQUFNQyxPQUFPLEdBQUcxQixPQUFPLENBQUMsU0FBUyxDQUFDO2NBQ2xDLElBQU0yQixJQUFJLEdBQUd2QyxNQUFNLENBQUNMLFlBQVksQ0FBQyxlQUFlLENBQUM7Y0FDakQsSUFBSTRDLElBQUksRUFBRTtnQkFDTixJQUFJQSxJQUFJLENBQUNBLElBQUksS0FBSyxNQUFNLEVBQUU7a0JBQ3RCLElBQU1DLEtBQUssR0FBR0YsT0FBTyxDQUFDRyxRQUFRLENBQUNDLE9BQU8sQ0FBQzFDLE1BQU0sQ0FBQztrQkFDOUMsSUFBSXdDLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDZEYsT0FBTyxDQUFDRyxRQUFRLENBQUNFLE1BQU0sQ0FBQ0gsS0FBSyxFQUFFLENBQUMsQ0FBQztrQkFDckM7Z0JBQ0osQ0FBQyxNQUFNLElBQUlELElBQUksQ0FBQ0EsSUFBSSxLQUFLLFNBQVMsRUFBRTtrQkFDaEMsSUFBTUMsTUFBSyxHQUFHRixPQUFPLENBQUNNLFdBQVcsQ0FBQ0YsT0FBTyxDQUFDMUMsTUFBTSxDQUFDO2tCQUNqRCxJQUFJd0MsTUFBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUNkRixPQUFPLENBQUNNLFdBQVcsQ0FBQ0QsTUFBTSxDQUFDSCxNQUFLLEVBQUUsQ0FBQyxDQUFDO2tCQUN4QztnQkFDSjtjQUNKO2NBRUF0SCxFQUFFLENBQUNpQyxHQUFHLHVCQUFxQjJCLElBQUksQ0FBQ29CLFVBQVUsZ0RBQWFvQixLQUFLLENBQUNNLEVBQUUsa0VBQWE7WUFDaEY7WUFFQTFHLEVBQUUsQ0FBQ2lDLEdBQUcsdUJBQXFCMkIsSUFBSSxDQUFDNkMsWUFBWSxnQkFBTTdDLElBQUksQ0FBQ29CLFVBQVUsc0JBQU9wQixJQUFJLENBQUNrRCxNQUFNLDRCQUFPbEQsSUFBSSxDQUFDb0QsTUFBTSxHQUFHLE9BQU8sR0FBRyxFQUFFLCtCQUFVWixLQUFLLENBQUNNLEVBQUUsQ0FBRztVQUM3STtRQUNKO01BQ0o7SUFDSjtFQUNKLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJMUMsT0FBTyxXQUFBQSxRQUFDSixJQUFJLEVBQUU7SUFDVixJQUFNZ0IsTUFBTSxHQUFHLElBQUksQ0FBQ2pFLE9BQU8sQ0FBQ2lELElBQUksQ0FBQ2lCLFFBQVEsQ0FBQztJQUMxQyxJQUFNQyxNQUFNLEdBQUcsSUFBSSxDQUFDbkUsT0FBTyxDQUFDaUQsSUFBSSxDQUFDbUIsUUFBUSxDQUFDOztJQUUxQztJQUNBLElBQUlELE1BQU0sSUFBSSxJQUFJLENBQUNqRSxTQUFTLENBQUN5RSxHQUFHLENBQUNSLE1BQU0sQ0FBQyxFQUFFO01BQ3RDOUUsRUFBRSxDQUFDaUMsR0FBRyxrRUFBNkIyQixJQUFJLENBQUNvQixVQUFVLHFDQUFTO01BQzNEO0lBQ0o7SUFFQSxJQUFJRixNQUFNLElBQUlBLE1BQU0sQ0FBQ08sT0FBTyxFQUFFO01BQzFCLElBQU1lLEtBQUssR0FBR3RCLE1BQU0sQ0FBQ0wsWUFBWSxDQUFDLGdCQUFnQixDQUFDO01BQ25ELElBQUkyQixLQUFLLEVBQUU7UUFDUDtRQUNBQSxLQUFLLENBQUNNLEVBQUUsR0FBRzlDLElBQUksQ0FBQ2lELFFBQVE7UUFDeEJULEtBQUssQ0FBQ08sS0FBSyxHQUFHL0MsSUFBSSxDQUFDZ0QsV0FBVzs7UUFFOUI7UUFDQVIsS0FBSyxDQUFDSSxlQUFlLENBQUM1QyxJQUFJLENBQUMrRCxVQUFVLEVBQUUsTUFBTSxDQUFDO1FBRTlDM0gsRUFBRSxDQUFDaUMsR0FBRyx1QkFBcUIyQixJQUFJLENBQUMyQixVQUFVLGdCQUFNM0IsSUFBSSxDQUFDb0IsVUFBVSw0QkFBUXBCLElBQUksQ0FBQytELFVBQVUsdURBQWV2QixLQUFLLENBQUNNLEVBQUUsU0FBSU4sS0FBSyxDQUFDTyxLQUFLLENBQUc7TUFDbkk7SUFDSjtFQUNKLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJMUMsWUFBWSxXQUFBQSxhQUFDTCxJQUFJLEVBQUU7SUFDZixJQUFNa0IsTUFBTSxHQUFHLElBQUksQ0FBQ25FLE9BQU8sQ0FBQ2lELElBQUksQ0FBQ21CLFFBQVEsQ0FBQzs7SUFFMUM7SUFDQSxJQUFJRCxNQUFNLElBQUksSUFBSSxDQUFDakUsU0FBUyxDQUFDeUUsR0FBRyxDQUFDUixNQUFNLENBQUMsRUFBRTtNQUN0QzlFLEVBQUUsQ0FBQ2lDLEdBQUcsa0VBQTZCMkIsSUFBSSxDQUFDb0IsVUFBVSx5Q0FBYTtNQUMvRDtJQUNKO0lBRUEsSUFBSUYsTUFBTSxJQUFJQSxNQUFNLENBQUNPLE9BQU8sRUFBRTtNQUMxQnJGLEVBQUUsQ0FBQ2lDLEdBQUcsdUJBQXFCMkIsSUFBSSxDQUFDb0IsVUFBVSwyQkFBWXBCLElBQUksQ0FBQ2dFLFFBQVEsQ0FBRzs7TUFFdEU7TUFDQSxJQUFNQyxVQUFVLEdBQUduQyxPQUFPLENBQUMsWUFBWSxDQUFDO01BQ3hDLElBQU1vQyxXQUFXLEdBQUdwQyxPQUFPLENBQUMsYUFBYSxDQUFDOztNQUUxQztNQUNBLElBQU1xQyxJQUFJLEdBQUdELFdBQVcsQ0FBQ0UsTUFBTSxDQUFDcEUsSUFBSSxDQUFDZ0UsUUFBUSxDQUFDO01BQzlDLElBQUlHLElBQUksRUFBRTtRQUNOO1FBQ0EsSUFBSW5FLElBQUksQ0FBQ3FFLFFBQVEsRUFBRTtVQUNmOUYsTUFBTSxDQUFDK0YsTUFBTSxDQUFDSCxJQUFJLEVBQUVuRSxJQUFJLENBQUNxRSxRQUFRLENBQUM7UUFDdEM7UUFDQUosVUFBVSxDQUFDTSxPQUFPLENBQUNyRCxNQUFNLEVBQUVpRCxJQUFJLEVBQUUsWUFBTSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO01BQ3ZEO0lBQ0o7RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSTdELGFBQWEsV0FBQUEsY0FBQ04sSUFBSSxFQUFFO0lBQ2hCLElBQU1rQixNQUFNLEdBQUcsSUFBSSxDQUFDbkUsT0FBTyxDQUFDaUQsSUFBSSxDQUFDbUIsUUFBUSxDQUFDO0lBQzFDLElBQUlELE1BQU0sSUFBSUEsTUFBTSxDQUFDTyxPQUFPLEVBQUU7TUFDMUJyRixFQUFFLENBQUNpQyxHQUFHLHVCQUFxQjJCLElBQUksQ0FBQ29CLFVBQVUsMkJBQVlwQixJQUFJLENBQUNnRSxRQUFRLENBQUc7O01BRXRFO01BQ0EsSUFBTVEsYUFBYSxHQUFHMUMsT0FBTyxDQUFDLGVBQWUsQ0FBQztNQUM5QyxJQUFNMkMsY0FBYyxHQUFHM0MsT0FBTyxDQUFDLGdCQUFnQixDQUFDOztNQUVoRDtNQUNBLElBQU00QyxLQUFLLEdBQUd4RCxNQUFNLENBQUN5RCxhQUFhLENBQUNILGFBQWEsQ0FBQztNQUNqRCxJQUFNSSxZQUFZLEdBQUdGLEtBQUssQ0FBQ0csSUFBSSxDQUFDLFVBQUEzRyxDQUFDO1FBQUEsT0FBSUEsQ0FBQyxDQUFDOEYsUUFBUSxLQUFLaEUsSUFBSSxDQUFDZ0UsUUFBUTtNQUFBLEVBQUM7TUFFbEUsSUFBSVksWUFBWSxFQUFFO1FBQ2QsSUFBTXBDLEtBQUssR0FBR3RCLE1BQU0sQ0FBQ0wsWUFBWSxDQUFDNEQsY0FBYyxDQUFDOztRQUVqRDtRQUNBLElBQUlqQyxLQUFLLElBQUlvQyxZQUFZLENBQUNFLFNBQVMsRUFBRTtVQUNqQyxLQUFLLElBQUlDLEdBQUcsSUFBSUgsWUFBWSxDQUFDRSxTQUFTLEVBQUU7WUFDcEMsSUFBSXRDLEtBQUssQ0FBQ3VDLEdBQUcsQ0FBQyxLQUFLQyxTQUFTLEVBQUU7Y0FDMUJ4QyxLQUFLLENBQUN1QyxHQUFHLENBQUMsSUFBSUgsWUFBWSxDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBQztZQUM3QztVQUNKO1VBQ0EsSUFBSUgsWUFBWSxDQUFDRSxTQUFTLENBQUM5RixLQUFLLEtBQUtnRyxTQUFTLEVBQUU7WUFDNUN4QyxLQUFLLENBQUN5QyxvQkFBb0IsRUFBRTtVQUNoQztRQUNKOztRQUVBO1FBQ0EsSUFBSUwsWUFBWSxDQUFDWixRQUFRLEtBQUssSUFBSSxJQUFJeEIsS0FBSyxFQUFFO1VBQ3pDQSxLQUFLLENBQUNJLGVBQWUsRUFBRTtRQUMzQjs7UUFFQTtRQUNBLElBQUlnQyxZQUFZLENBQUNNLFFBQVEsRUFBRTtVQUN2Qk4sWUFBWSxDQUFDTSxRQUFRLENBQUNoRSxNQUFNLEVBQUUsWUFBTSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUM7O1FBRUE7UUFDQUEsTUFBTSxDQUFDaUUsZUFBZSxDQUFDUCxZQUFZLENBQUM7O1FBRXBDO1FBQ0EsSUFBTVgsVUFBVSxHQUFHbkMsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUN4Q21DLFVBQVUsQ0FBQ21CLGtCQUFrQixDQUFDbEUsTUFBTSxDQUFDO01BQ3pDO0lBQ0o7RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSVgsUUFBUSxXQUFBQSxTQUFDUCxJQUFJLEVBQUU7SUFDWCxJQUFNUyxNQUFNLEdBQUcsSUFBSSxDQUFDMUQsT0FBTyxDQUFDaUQsSUFBSSxDQUFDcUYsUUFBUSxDQUFDLENBQUM7SUFDM0MsSUFBSTVFLE1BQU0sSUFBSUEsTUFBTSxDQUFDZ0IsT0FBTyxFQUFFO01BQzFCO01BQ0EsSUFBSSxDQUFDeEUsU0FBUyxDQUFDcUcsR0FBRyxDQUFDN0MsTUFBTSxDQUFDO01BRTFCLElBQU0rQixLQUFLLEdBQUcvQixNQUFNLENBQUNJLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztNQUNuRCxJQUFJMkIsS0FBSyxFQUFFO1FBQ1BBLEtBQUssQ0FBQ00sRUFBRSxHQUFHLENBQUM7UUFDWk4sS0FBSyxDQUFDSSxlQUFlLEVBQUU7TUFDM0I7O01BRUE7TUFDQSxJQUFNaEMsUUFBUSxHQUFHSCxNQUFNLENBQUNJLFlBQVksQ0FBQ0MsRUFBRSxDQUFDQyxRQUFRLENBQUM7TUFDakQsSUFBSUgsUUFBUSxFQUFFO1FBQ1ZBLFFBQVEsQ0FBQzJDLFlBQVksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztNQUMxQzs7TUFFQTtNQUNBLElBQU1DLE9BQU8sR0FBRzFCLE9BQU8sQ0FBQyxTQUFTLENBQUM7TUFDbEMsSUFBTTJCLElBQUksR0FBR2hELE1BQU0sQ0FBQ0ksWUFBWSxDQUFDLGVBQWUsQ0FBQztNQUNqRCxJQUFJNEMsSUFBSSxFQUFFO1FBQ04sSUFBSUEsSUFBSSxDQUFDQSxJQUFJLEtBQUssTUFBTSxFQUFFO1VBQ3RCLElBQU1DLEtBQUssR0FBR0YsT0FBTyxDQUFDRyxRQUFRLENBQUNDLE9BQU8sQ0FBQ25ELE1BQU0sQ0FBQztVQUM5QyxJQUFJaUQsS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2RGLE9BQU8sQ0FBQ0csUUFBUSxDQUFDRSxNQUFNLENBQUNILEtBQUssRUFBRSxDQUFDLENBQUM7VUFDckM7UUFDSixDQUFDLE1BQU0sSUFBSUQsSUFBSSxDQUFDQSxJQUFJLEtBQUssU0FBUyxFQUFFO1VBQ2hDLElBQU1DLE9BQUssR0FBR0YsT0FBTyxDQUFDTSxXQUFXLENBQUNGLE9BQU8sQ0FBQ25ELE1BQU0sQ0FBQztVQUNqRCxJQUFJaUQsT0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2RGLE9BQU8sQ0FBQ00sV0FBVyxDQUFDRCxNQUFNLENBQUNILE9BQUssRUFBRSxDQUFDLENBQUM7VUFDeEM7UUFDSjtNQUNKO01BRUF0SCxFQUFFLENBQUNpQyxHQUFHLHVCQUFxQjJCLElBQUksQ0FBQ3NGLFVBQVUseUVBQWU7SUFDN0Q7RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSTlFLFdBQVcsV0FBQUEsWUFBQ1IsSUFBSSxFQUFFO0lBQ2Q1RCxFQUFFLENBQUNpQyxHQUFHLHFEQUEwQjJCLElBQUksQ0FBQ3VGLE1BQU0sa0JBQUs7RUFDcEQsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0kxSCxhQUFhLFdBQUFBLGNBQUNSLEtBQUssRUFBRUMsUUFBUSxFQUFFUSxZQUFZLEVBQUU7SUFBQSxJQUFBMEgsTUFBQTtJQUN6QyxJQUFJLENBQUN6SSxPQUFPLEdBQUcsQ0FBQyxDQUFDOztJQUVqQjtJQUNBLEdBQUEwSSxNQUFBLENBQUlwSSxLQUFLLEVBQUtDLFFBQVEsRUFBRW9JLE9BQU8sQ0FBQyxVQUFBbEUsSUFBSSxFQUFJO01BQ3BDLElBQUlBLElBQUksSUFBSUEsSUFBSSxDQUFDQyxPQUFPLEVBQUU7UUFDdEIrRCxNQUFJLENBQUN6SSxPQUFPLENBQUN5RSxJQUFJLENBQUNsRixJQUFJLENBQUMsR0FBR2tGLElBQUk7TUFDbEM7SUFDSixDQUFDLENBQUM7O0lBRUY7SUFDQSxJQUFJMUQsWUFBWSxFQUFFO01BQ2QsSUFBTTZILFlBQVksR0FBRyxJQUFJekksR0FBRyxFQUFFOztNQUU5QjtNQUNBLElBQUlZLFlBQVksQ0FBQ1QsS0FBSyxFQUFFO1FBQ3BCUyxZQUFZLENBQUNULEtBQUssQ0FBQ3FJLE9BQU8sQ0FBQyxVQUFBbEUsSUFBSSxFQUFJO1VBQy9CLElBQUlBLElBQUksSUFBSUEsSUFBSSxDQUFDbEYsSUFBSSxFQUFFO1lBQ25CcUosWUFBWSxDQUFDckMsR0FBRyxDQUFDOUIsSUFBSSxDQUFDbEYsSUFBSSxDQUFDO1VBQy9CO1FBQ0osQ0FBQyxDQUFDO01BQ047TUFDQSxJQUFJd0IsWUFBWSxDQUFDUixRQUFRLEVBQUU7UUFDdkJRLFlBQVksQ0FBQ1IsUUFBUSxDQUFDb0ksT0FBTyxDQUFDLFVBQUFsRSxJQUFJLEVBQUk7VUFDbEMsSUFBSUEsSUFBSSxJQUFJQSxJQUFJLENBQUNsRixJQUFJLEVBQUU7WUFDbkJxSixZQUFZLENBQUNyQyxHQUFHLENBQUM5QixJQUFJLENBQUNsRixJQUFJLENBQUM7VUFDL0I7UUFDSixDQUFDLENBQUM7TUFDTjs7TUFFQTtNQUNBLElBQU1zSixZQUFZLEdBQUcsRUFBRTtNQUN2QkQsWUFBWSxDQUFDRCxPQUFPLENBQUMsVUFBQXBKLElBQUksRUFBSTtRQUN6QixJQUFJLENBQUNrSixNQUFJLENBQUN6SSxPQUFPLENBQUNULElBQUksQ0FBQyxFQUFFO1VBQ3JCc0osWUFBWSxDQUFDQyxJQUFJLENBQUN2SixJQUFJLENBQUM7UUFDM0I7TUFDSixDQUFDLENBQUM7TUFFRixJQUFJc0osWUFBWSxDQUFDdEgsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN6QmxDLEVBQUUsQ0FBQ2tELElBQUkseUVBQStCc0csWUFBWSxDQUFDbkgsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFHO1FBQ2hFckMsRUFBRSxDQUFDa0QsSUFBSSxvRUFBb0NmLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ3pCLE9BQU8sQ0FBQyxDQUFDMEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFHO1FBQ2xGckMsRUFBRSxDQUFDa0QsSUFBSSxzR0FBcUM7O1FBRTVDO1FBQ0EsSUFBTXdHLEtBQUssR0FBRzFKLEVBQUUsQ0FBQzJKLFFBQVEsQ0FBQ0MsUUFBUSxFQUFFO1FBQ3BDLElBQUlGLEtBQUssRUFBRTtVQUNQLElBQU1HLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBSUMsSUFBSSxFQUFFNUosSUFBSSxFQUFLO1lBQ25DLElBQUk0SixJQUFJLENBQUM1SixJQUFJLEtBQUtBLElBQUksRUFBRTtjQUNwQixJQUFNa0csS0FBSyxHQUFHMEQsSUFBSSxDQUFDckYsWUFBWSxDQUFDLGdCQUFnQixDQUFDO2NBQ2pELElBQU00QyxJQUFJLEdBQUd5QyxJQUFJLENBQUNyRixZQUFZLENBQUMsZUFBZSxDQUFDO2NBQy9DLElBQUkyQixLQUFLLElBQUlpQixJQUFJLEVBQUU7Z0JBQ2YsT0FBT3lDLElBQUk7Y0FDZjtZQUNKO1lBQ0EsU0FBQUMsU0FBQSxHQUFBQywrQkFBQSxDQUFrQkYsSUFBSSxDQUFDRyxRQUFRLEdBQUFDLEtBQUEsSUFBQUEsS0FBQSxHQUFBSCxTQUFBLElBQUFJLElBQUEsR0FBRTtjQUFBLElBQXhCQyxLQUFLLEdBQUFGLEtBQUEsQ0FBQUcsS0FBQTtjQUNWLElBQU1DLE1BQU0sR0FBR1QsY0FBYyxDQUFDTyxLQUFLLEVBQUVsSyxJQUFJLENBQUM7Y0FDMUMsSUFBSW9LLE1BQU0sRUFBRSxPQUFPQSxNQUFNO1lBQzdCO1lBQ0EsT0FBTyxJQUFJO1VBQ2YsQ0FBQztVQUVEZCxZQUFZLENBQUNGLE9BQU8sQ0FBQyxVQUFBcEosSUFBSSxFQUFJO1lBQ3pCLElBQU1rRixJQUFJLEdBQUd5RSxjQUFjLENBQUNILEtBQUssRUFBRXhKLElBQUksQ0FBQztZQUN4QyxJQUFJa0YsSUFBSSxJQUFJQSxJQUFJLENBQUNDLE9BQU8sRUFBRTtjQUN0QitELE1BQUksQ0FBQ3pJLE9BQU8sQ0FBQ1QsSUFBSSxDQUFDLEdBQUdrRixJQUFJO2NBQ3pCcEYsRUFBRSxDQUFDaUMsR0FBRyxrR0FBb0MvQixJQUFJLENBQUc7WUFDckQsQ0FBQyxNQUFNO2NBQ0hGLEVBQUUsQ0FBQ3FCLEtBQUssNEZBQW1DbkIsSUFBSSxDQUFHO1lBQ3REO1VBQ0osQ0FBQyxDQUFDO1FBQ047TUFDSjtJQUNKO0lBRUFGLEVBQUUsQ0FBQ2lDLEdBQUcsbUVBQW1DRSxNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUN6QixPQUFPLENBQUMsQ0FBQ3VCLE1BQU0sNkJBQVNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ3pCLE9BQU8sQ0FBQyxDQUFDMEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFHO0VBQzdILENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJVixvQkFBb0IsV0FBQUEscUJBQUNELFlBQVksRUFBRTtJQUFBLElBQUE2SSxNQUFBO0lBQy9CO0lBQ0EsSUFBTTFDLFVBQVUsR0FBR25DLE9BQU8sQ0FBQyxZQUFZLENBQUM7SUFDeEMsSUFBTTBDLGFBQWEsR0FBRzFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7SUFDOUMsSUFBTTBCLE9BQU8sR0FBRzFCLE9BQU8sQ0FBQyxTQUFTLENBQUM7O0lBRWxDO0lBQ0E7SUFDQSxJQUFJMEIsT0FBTyxDQUFDRyxRQUFRLEVBQUU7TUFDbEJILE9BQU8sQ0FBQ0csUUFBUSxDQUFDckYsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pDOztJQUNBLElBQUlrRixPQUFPLENBQUNNLFdBQVcsRUFBRTtNQUNyQk4sT0FBTyxDQUFDTSxXQUFXLENBQUN4RixNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEM7O0lBRUE7SUFDQUMsTUFBTSxDQUFDZ0QsTUFBTSxDQUFDLElBQUksQ0FBQ3hFLE9BQU8sQ0FBQyxDQUFDMkksT0FBTyxDQUFDLFVBQUFsRSxJQUFJLEVBQUk7TUFDeEMsSUFBSUEsSUFBSSxJQUFJQSxJQUFJLENBQUNDLE9BQU8sRUFBRTtRQUN0QixJQUFNZ0MsSUFBSSxHQUFHakMsSUFBSSxDQUFDWCxZQUFZLENBQUMsZUFBZSxDQUFDO1FBQy9DLElBQUk0QyxJQUFJLEVBQUU7VUFDTixJQUFJQSxJQUFJLENBQUNBLElBQUksS0FBSyxNQUFNLElBQUlELE9BQU8sQ0FBQ0csUUFBUSxFQUFFO1lBQzFDO1lBQ0EsSUFBSUgsT0FBTyxDQUFDRyxRQUFRLENBQUNDLE9BQU8sQ0FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2NBQ3ZDZ0MsT0FBTyxDQUFDRyxRQUFRLENBQUNrQyxJQUFJLENBQUNyRSxJQUFJLENBQUM7WUFDL0I7VUFDSixDQUFDLE1BQU0sSUFBSWlDLElBQUksQ0FBQ0EsSUFBSSxLQUFLLFNBQVMsSUFBSUQsT0FBTyxDQUFDTSxXQUFXLEVBQUU7WUFDdkQ7WUFDQSxJQUFJTixPQUFPLENBQUNNLFdBQVcsQ0FBQ0YsT0FBTyxDQUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Y0FDMUNnQyxPQUFPLENBQUNNLFdBQVcsQ0FBQytCLElBQUksQ0FBQ3JFLElBQUksQ0FBQztZQUNsQztVQUNKO1FBQ0o7TUFDSjtJQUNKLENBQUMsQ0FBQztJQUVGcEYsRUFBRSxDQUFDaUMsR0FBRywrREFBbUNtRixPQUFPLENBQUNHLFFBQVEsR0FBR0gsT0FBTyxDQUFDRyxRQUFRLENBQUNyRixNQUFNLEdBQUcsQ0FBQyw4QkFBUWtGLE9BQU8sQ0FBQ00sV0FBVyxHQUFHTixPQUFPLENBQUNNLFdBQVcsQ0FBQ3hGLE1BQU0sR0FBRyxDQUFDLGFBQUk7O0lBRXZKO0lBQ0FDLE1BQU0sQ0FBQ2dELE1BQU0sQ0FBQyxJQUFJLENBQUN4RSxPQUFPLENBQUMsQ0FBQzJJLE9BQU8sQ0FBQyxVQUFBbEUsSUFBSSxFQUFJO01BQ3hDLElBQUlBLElBQUksSUFBSUEsSUFBSSxDQUFDQyxPQUFPLEVBQUU7UUFDdEIsSUFBTWlELEtBQUssR0FBR2xELElBQUksQ0FBQ21ELGFBQWEsQ0FBQ0gsYUFBYSxDQUFDO1FBQy9DLElBQUlFLEtBQUssSUFBSUEsS0FBSyxDQUFDcEcsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUMzQjtVQUNBb0csS0FBSyxDQUFDZ0IsT0FBTyxDQUFDLFVBQUF2QixJQUFJLEVBQUk7WUFDbEI7WUFDQSxJQUFNM0IsS0FBSyxHQUFHaEIsSUFBSSxDQUFDWCxZQUFZLENBQUMsZ0JBQWdCLENBQUM7WUFDakQsSUFBSTJCLEtBQUssSUFBSTJCLElBQUksQ0FBQ1csU0FBUyxFQUFFO2NBQ3pCLEtBQUssSUFBSUMsR0FBRyxJQUFJWixJQUFJLENBQUNXLFNBQVMsRUFBRTtnQkFDNUIsSUFBSXRDLEtBQUssQ0FBQ3VDLEdBQUcsQ0FBQyxLQUFLQyxTQUFTLEVBQUU7a0JBQzFCeEMsS0FBSyxDQUFDdUMsR0FBRyxDQUFDLElBQUlaLElBQUksQ0FBQ1csU0FBUyxDQUFDQyxHQUFHLENBQUM7Z0JBQ3JDO2NBQ0o7WUFDSjtZQUNBO1lBQ0F2RCxJQUFJLENBQUMyRCxlQUFlLENBQUNoQixJQUFJLENBQUM7VUFDOUIsQ0FBQyxDQUFDO1FBQ047O1FBRUE7UUFDQSxJQUFNM0IsS0FBSyxHQUFHaEIsSUFBSSxDQUFDWCxZQUFZLENBQUMsZ0JBQWdCLENBQUM7UUFDakQsSUFBSTJCLEtBQUssRUFBRTtVQUNQLElBQUlBLEtBQUssQ0FBQ29FLElBQUksS0FBSzVCLFNBQVMsRUFBRTtZQUMxQnhDLEtBQUssQ0FBQ29FLElBQUksR0FBRyxDQUFDO1lBQ2QsSUFBSXBFLEtBQUssQ0FBQ3FFLGFBQWEsRUFBRTtjQUNyQnJFLEtBQUssQ0FBQ3FFLGFBQWEsRUFBRTtZQUN6QjtVQUNKO1FBQ0o7O1FBRUE7UUFDQSxJQUFJLENBQUNGLE1BQUksQ0FBQzFKLFNBQVMsQ0FBQ3lFLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDLEVBQUU7VUFDM0IsSUFBTVosUUFBUSxHQUFHWSxJQUFJLENBQUNYLFlBQVksQ0FBQ0MsRUFBRSxDQUFDQyxRQUFRLENBQUM7VUFDL0MsSUFBSUgsUUFBUSxFQUFFO1lBQ1ZBLFFBQVEsQ0FBQzJDLFlBQVksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQztVQUMxQztRQUNKO01BQ0o7SUFDSixDQUFDLENBQUM7O0lBRUY7SUFDQSxJQUFJekYsWUFBWSxDQUFDVCxLQUFLLEVBQUU7TUFDcEJTLFlBQVksQ0FBQ1QsS0FBSyxDQUFDcUksT0FBTyxDQUFDLFVBQUFvQixRQUFRLEVBQUk7UUFDbkMsSUFBTXRGLElBQUksR0FBR21GLE1BQUksQ0FBQzVKLE9BQU8sQ0FBQytKLFFBQVEsQ0FBQzlFLEVBQUUsQ0FBQztRQUN0QyxJQUFJUixJQUFJLElBQUlBLElBQUksQ0FBQ0MsT0FBTyxFQUFFO1VBQ3RCLElBQU1lLEtBQUssR0FBR2hCLElBQUksQ0FBQ1gsWUFBWSxDQUFDLGdCQUFnQixDQUFDO1VBQ2pELElBQUkyQixLQUFLLEVBQUU7WUFDUEEsS0FBSyxDQUFDTSxFQUFFLEdBQUdnRSxRQUFRLENBQUNoRSxFQUFFO1lBQ3RCTixLQUFLLENBQUNPLEtBQUssR0FBRytELFFBQVEsQ0FBQy9ELEtBQUs7WUFDNUJQLEtBQUssQ0FBQ3VFLE1BQU0sR0FBR0QsUUFBUSxDQUFDQyxNQUFNO1lBQzlCdkUsS0FBSyxDQUFDd0UsT0FBTyxHQUFHRixRQUFRLENBQUNFLE9BQU87WUFDaEN4RSxLQUFLLENBQUN4RCxLQUFLLEdBQUc4SCxRQUFRLENBQUM5SCxLQUFLO1lBQzVCd0QsS0FBSyxDQUFDSSxlQUFlLEVBQUU7VUFDM0I7UUFDSjtNQUNKLENBQUMsQ0FBQztJQUNOOztJQUVBO0lBQ0EsSUFBSTlFLFlBQVksQ0FBQ1IsUUFBUSxFQUFFO01BQ3ZCUSxZQUFZLENBQUNSLFFBQVEsQ0FBQ29JLE9BQU8sQ0FBQyxVQUFBb0IsUUFBUSxFQUFJO1FBQ3RDLElBQU10RixJQUFJLEdBQUdtRixNQUFJLENBQUM1SixPQUFPLENBQUMrSixRQUFRLENBQUM5RSxFQUFFLENBQUM7UUFDdEMsSUFBSVIsSUFBSSxJQUFJQSxJQUFJLENBQUNDLE9BQU8sRUFBRTtVQUN0QixJQUFNZSxLQUFLLEdBQUdoQixJQUFJLENBQUNYLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztVQUNqRCxJQUFJMkIsS0FBSyxFQUFFO1lBQ1BBLEtBQUssQ0FBQ00sRUFBRSxHQUFHZ0UsUUFBUSxDQUFDaEUsRUFBRTtZQUN0Qk4sS0FBSyxDQUFDTyxLQUFLLEdBQUcrRCxRQUFRLENBQUMvRCxLQUFLO1lBQzVCUCxLQUFLLENBQUN1RSxNQUFNLEdBQUdELFFBQVEsQ0FBQ0MsTUFBTTtZQUM5QnZFLEtBQUssQ0FBQ3dFLE9BQU8sR0FBR0YsUUFBUSxDQUFDRSxPQUFPO1lBQ2hDeEUsS0FBSyxDQUFDeEQsS0FBSyxHQUFHOEgsUUFBUSxDQUFDOUgsS0FBSztZQUM1QndELEtBQUssQ0FBQ0ksZUFBZSxFQUFFO1VBQzNCO1FBQ0o7TUFDSixDQUFDLENBQUM7SUFDTjtJQUVBeEcsRUFBRSxDQUFDaUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDO0VBQ2hEO0FBQ0osQ0FBQyxDQUFDO0FBRUY0SSxNQUFNLENBQUNDLE9BQU8sR0FBRy9LLGNBQWMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5oiY5paX5Zue5pS+57O757ufXG4gKiDmoLnmja7miJjmlpforrDlvZXlm57mlL7miJjmlpfov4fnqItcbiAqL1xudmFyIEJhdHRsZVJlcGxheWVyID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6IFwiQmF0dGxlUmVwbGF5ZXJcIixcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8g5piv5ZCm5q2j5Zyo5Zue5pS+XG4gICAgICAgIGlzUmVwbGF5aW5nOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5Zue5pS+6YCf5bqm5YCN5pWw77yIMS4wID0g5q2j5bi46YCf5bqm77yMMi4wID0gMuWAjemAn++8iVxuICAgICAgICBwbGF5YmFja1NwZWVkOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAxLjAsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWbnuaUvumAn+W6puWAjeaVsFwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5piv5ZCm5pqC5YGcXG4gICAgICAgIGlzUGF1c2VkOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5b2T5YmN5Zue5pS+6L+b5bqm77yI5LqL5Lu257Si5byV77yJXG4gICAgICAgIGN1cnJlbnRFdmVudEluZGV4OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDmiJjmlpforrDlvZXmlbDmja5cbiAgICAgICAgYmF0dGxlUmVjb3JkOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDljZXkvY3mmKDlsITooajvvIjorrDlvZXkuK3nmoRJRCAtPiDlrp7pmYXljZXkvY3oioLngrnvvIlcbiAgICAgICAgdW5pdE1hcDoge1xuICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4gKHt9KSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5bey5q275Lqh5Y2V5L2N6ZuG5ZCI77yI55So5LqO6Lez6L+H5ZCO57ut5LqL5Lu277yJXG4gICAgICAgIGRlYWRVbml0czoge1xuICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4gKG5ldyBTZXQoKSksXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOWbnuaUvuW8gOWni+aXtumXtFxuICAgICAgICByZXBsYXlTdGFydFRpbWU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOW8gOWni+WbnuaUvlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBiYXR0bGVSZWNvcmQgLSDmiJjmlpforrDlvZXmlbDmja5cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBoZXJvcyAtIOiLsembhOWIl+ihqO+8iOeUqOS6juWMuemFjeWNleS9je+8iVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vbnN0ZXJzIC0g5oCq54mp5YiX6KGo77yI55So5LqO5Yy56YWN5Y2V5L2N77yJXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25SZXBsYXlDb21wbGV0ZSAtIOWbnuaUvuWujOaIkOWbnuiwg1xuICAgICAqL1xuICAgIHN0YXJ0UmVwbGF5KGJhdHRsZVJlY29yZCwgaGVyb3MsIG1vbnN0ZXJzLCBvblJlcGxheUNvbXBsZXRlKSB7XG4gICAgICAgIGlmICghYmF0dGxlUmVjb3JkIHx8ICFiYXR0bGVSZWNvcmQuZXZlbnRzKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIltCYXR0bGVSZXBsYXllcl0g5peg5pWI55qE5oiY5paX6K6w5b2VXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iYXR0bGVSZWNvcmQgPSBiYXR0bGVSZWNvcmQ7XG4gICAgICAgIHRoaXMuaXNSZXBsYXlpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3VycmVudEV2ZW50SW5kZXggPSAwO1xuICAgICAgICB0aGlzLnJlcGxheVN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMub25SZXBsYXlDb21wbGV0ZSA9IG9uUmVwbGF5Q29tcGxldGU7XG4gICAgICAgIHRoaXMuZGVhZFVuaXRzLmNsZWFyKCk7IC8vIOa4heepuuW3suatu+S6oeWNleS9jembhuWQiFxuXG4gICAgICAgIC8vIOaehOW7uuWNleS9jeaYoOWwhOihqO+8iOS8oOWFpWluaXRpYWxTdGF0ZeS7peS+v+ihpeWFhee8uuWkseeahOWNleS9je+8iVxuICAgICAgICB0aGlzLl9idWlsZFVuaXRNYXAoaGVyb3MsIG1vbnN0ZXJzLCBiYXR0bGVSZWNvcmQuaW5pdGlhbFN0YXRlKTtcblxuICAgICAgICAvLyDmgaLlpI3liJ3lp4vnirbmgIFcbiAgICAgICAgdGhpcy5fcmVzdG9yZUluaXRpYWxTdGF0ZShiYXR0bGVSZWNvcmQuaW5pdGlhbFN0YXRlKTtcblxuICAgICAgICAvLyDlr7nkuovku7bmjInml7bpl7TmiLPmjpLluo/vvIjnoa7kv53pobrluo/mraPnoa7vvIznm7jlkIzml7bpl7TmiLPml7ZkZWF0aOS6i+S7tuacgOWQjuaJp+ihjO+8iVxuICAgICAgICBiYXR0bGVSZWNvcmQuZXZlbnRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLnRpbWVzdGFtcCAhPT0gYi50aW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS50aW1lc3RhbXAgLSBiLnRpbWVzdGFtcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOebuOWQjOaXtumXtOaIs+aXtu+8jGRlYXRo5LqL5Lu25pyA5ZCO5omn6KGM77yI5YW25LuW5LqL5Lu25YWI5omn6KGM77yJXG4gICAgICAgICAgICBpZiAoYS50eXBlID09PSBcImRlYXRoXCIgJiYgYi50eXBlICE9PSBcImRlYXRoXCIpIHJldHVybiAxOyAgLy8gYeaYr2RlYXRo77yM5o6S5Zyo5ZCO6Z2iXG4gICAgICAgICAgICBpZiAoYS50eXBlICE9PSBcImRlYXRoXCIgJiYgYi50eXBlID09PSBcImRlYXRoXCIpIHJldHVybiAtMTsgIC8vIGLmmK9kZWF0aO+8jGHmjpLlnKjliY3pnaJcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcblxuICAgICAgICBjYy5sb2coYFtCYXR0bGVSZXBsYXllcl0g5byA5aeL5Zue5pS+77yM5YWxICR7YmF0dGxlUmVjb3JkLmV2ZW50cy5sZW5ndGh9IOS4quS6i+S7tu+8iOW3suaOkuW6j++8iWApO1xuICAgICAgICBjYy5sb2coYFtCYXR0bGVSZXBsYXllcl0gdW5pdE1hcOS4reeahOWNleS9jTogJHtPYmplY3Qua2V5cyh0aGlzLnVuaXRNYXApLmpvaW4oJywgJyl9YCk7XG5cbiAgICAgICAgLy8g5byA5aeL5aSE55CG5LqL5Lu2XG4gICAgICAgIHRoaXMuX3Byb2Nlc3NOZXh0RXZlbnQoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5YGc5q2i5Zue5pS+XG4gICAgICovXG4gICAgc3RvcFJlcGxheSgpIHtcbiAgICAgICAgdGhpcy5pc1JlcGxheWluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3VycmVudEV2ZW50SW5kZXggPSAwO1xuXG4gICAgICAgIC8vIOa4hemZpOWumuaXtuWZqFxuICAgICAgICBpZiAodGhpcy5fdGltZW91dElkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dElkKTtcbiAgICAgICAgICAgIHRoaXMuX3RpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjYy5sb2coXCJbQmF0dGxlUmVwbGF5ZXJdIOWBnOatouWbnuaUvlwiKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5pqC5YGcL+e7p+e7reWbnuaUvlxuICAgICAqL1xuICAgIHRvZ2dsZVBhdXNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNSZXBsYXlpbmcpIHJldHVybjtcblxuICAgICAgICB0aGlzLmlzUGF1c2VkID0gIXRoaXMuaXNQYXVzZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNQYXVzZWQpIHtcbiAgICAgICAgICAgIC8vIOaaguWBnOaXtu+8mua4hemZpOaJgOacieetieW+heS4reeahOWumuaXtuWZqO+8jOmYu+atouWQjue7reS6i+S7tuaJp+ihjFxuICAgICAgICAgICAgaWYgKHRoaXMuX3RpbWVvdXRJZCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0SWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVSZXBsYXllcl0g5bey5pqC5YGc5Zue5pS+77yM5omA5pyJ5LqL5Lu25aSE55CG5bey5YGc5q2iYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDnu6fnu63ml7bvvJrph43mlrDorqHnrpfml7bpl7Tlubbnu6fnu63lpITnkIbkuovku7ZcbiAgICAgICAgICAgIHRoaXMucmVwbGF5U3RhcnRUaW1lID0gRGF0ZS5ub3coKSAtICh0aGlzLmJhdHRsZVJlY29yZC5ldmVudHNbdGhpcy5jdXJyZW50RXZlbnRJbmRleF0udGltZXN0YW1wIC8gdGhpcy5wbGF5YmFja1NwZWVkKTtcbiAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NOZXh0RXZlbnQoKTtcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZVJlcGxheWVyXSDnu6fnu63lm57mlL5gKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDorr7nva7lm57mlL7pgJ/luqZcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3BlZWQgLSDpgJ/luqblgI3mlbBcbiAgICAgKi9cbiAgICBzZXRQbGF5YmFja1NwZWVkKHNwZWVkKSB7XG4gICAgICAgIHRoaXMucGxheWJhY2tTcGVlZCA9IE1hdGgubWF4KDAuMSwgTWF0aC5taW4oNS4wLCBzcGVlZCkpOyAvLyDpmZDliLblnKgwLjEtNS4w5YCN6YCfXG4gICAgICAgIGNjLmxvZyhgW0JhdHRsZVJlcGxheWVyXSDorr7nva7lm57mlL7pgJ/luqY6ICR7dGhpcy5wbGF5YmFja1NwZWVkfXhgKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6Lez6L2s5Yiw5oyH5a6a5LqL5Lu2XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50SW5kZXggLSDkuovku7bntKLlvJVcbiAgICAgKi9cbiAgICBqdW1wVG9FdmVudChldmVudEluZGV4KSB7XG4gICAgICAgIGlmICghdGhpcy5iYXR0bGVSZWNvcmQgfHwgZXZlbnRJbmRleCA8IDAgfHwgZXZlbnRJbmRleCA+PSB0aGlzLmJhdHRsZVJlY29yZC5ldmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiW0JhdHRsZVJlcGxheWVyXSDml6DmlYjnmoTkuovku7bntKLlvJVcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDph43mlrDmgaLlpI3liJ3lp4vnirbmgIFcbiAgICAgICAgdGhpcy5fcmVzdG9yZUluaXRpYWxTdGF0ZSh0aGlzLmJhdHRsZVJlY29yZC5pbml0aWFsU3RhdGUpO1xuXG4gICAgICAgIC8vIOaJp+ihjOWIsOaMh+WumuS6i+S7tuS5i+WJjeeahOaJgOacieS6i+S7tlxuICAgICAgICB0aGlzLmN1cnJlbnRFdmVudEluZGV4ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX2V4ZWN1dGVFdmVudCh0aGlzLmJhdHRsZVJlY29yZC5ldmVudHNbaV0pO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RXZlbnRJbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g57un57ut5aSE55CG5ZCO57ut5LqL5Lu2XG4gICAgICAgIHRoaXMuX3Byb2Nlc3NOZXh0RXZlbnQoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5aSE55CG5LiL5LiA5Liq5LqL5Lu2XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcHJvY2Vzc05leHRFdmVudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVwbGF5aW5nIHx8IHRoaXMuaXNQYXVzZWQpIHJldHVybjtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50RXZlbnRJbmRleCA+PSB0aGlzLmJhdHRsZVJlY29yZC5ldmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyDlm57mlL7lrozmiJBcbiAgICAgICAgICAgIHRoaXMuaXNSZXBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGNjLmxvZyhcIltCYXR0bGVSZXBsYXllcl0g5Zue5pS+5a6M5oiQXCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMub25SZXBsYXlDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub25SZXBsYXlDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3VycmVudEV2ZW50ID0gdGhpcy5iYXR0bGVSZWNvcmQuZXZlbnRzW3RoaXMuY3VycmVudEV2ZW50SW5kZXhdO1xuICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IERhdGUubm93KCkgLSB0aGlzLnJlcGxheVN0YXJ0VGltZTtcbiAgICAgICAgY29uc3QgZXZlbnRUaW1lID0gY3VycmVudEV2ZW50LnRpbWVzdGFtcCAvIHRoaXMucGxheWJhY2tTcGVlZDtcblxuICAgICAgICBpZiAoY3VycmVudFRpbWUgPj0gZXZlbnRUaW1lKSB7XG4gICAgICAgICAgICAvLyDlho3mrKHmo4Dmn6XmmoLlgZznirbmgIHvvIjpmLLmraLlnKjmiafooYzliY3ooqvmmoLlgZzvvIlcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlUmVwbGF5ZXJdIOS6i+S7tuaJp+ihjOiiq+S4reaWre+8iOWbnuaUvuW3suaaguWBnO+8iTogJHtjdXJyZW50RXZlbnQudHlwZX1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOaJp+ihjOW9k+WJjeS6i+S7tlxuICAgICAgICAgICAgdGhpcy5fZXhlY3V0ZUV2ZW50KGN1cnJlbnRFdmVudCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRFdmVudEluZGV4Kys7XG5cbiAgICAgICAgICAgIC8vIOeri+WNs+WkhOeQhuS4i+S4gOS4quS6i+S7tu+8iOWmguaenOacquaaguWBnO+8iVxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzUGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc05leHRFdmVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g562J5b6F5Yiw5LqL5Lu25pe26Ze077yI5L2/55Soc2V0VGltZW91dO+8jOWboOS4uui/meS4jeaYr+e7hOS7tu+8iVxuICAgICAgICAgICAgY29uc3QgZGVsYXkgPSBldmVudFRpbWUgLSBjdXJyZW50VGltZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl90aW1lb3V0SWQpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3RpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc05leHRFdmVudCgpO1xuICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOaJp+ihjOS6i+S7tlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2V4ZWN1dGVFdmVudChldmVudCkge1xuICAgICAgICAvLyDlpoLmnpzlt7LmmoLlgZzvvIzkuI3miafooYzku7vkvZXkuovku7bvvIjnoa7kv53mmoLlgZzml7blrozlhajlhrvnu5PvvIlcbiAgICAgICAgaWYgKHRoaXMuaXNQYXVzZWQpIHtcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZVJlcGxheWVyXSDkuovku7bmiafooYzooqvot7Pov4fvvIjlm57mlL7lt7LmmoLlgZzvvIk6ICR7ZXZlbnQudHlwZX1gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgdHlwZSwgZGF0YSB9ID0gZXZlbnQ7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiYWN0aW9uU3RhcnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl9vbkFjdGlvblN0YXJ0KGRhdGEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNraWxsVXNlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fb25Ta2lsbFVzZShkYXRhKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkYW1hZ2VcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl9vbkRhbWFnZShkYXRhKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJoZWFsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fb25IZWFsKGRhdGEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJ1ZmZBcHBseVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX29uQnVmZkFwcGx5KGRhdGEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJ1ZmZSZW1vdmVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl9vbkJ1ZmZSZW1vdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZGVhdGhcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl9vbkRlYXRoKGRhdGEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImdhbWVPdmVyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fb25HYW1lT3ZlcihkYXRhKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY2Mud2FybihgW0JhdHRsZVJlcGxheWVyXSDmnKrnn6Xkuovku7bnsbvlnos6ICR7dHlwZX1gKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDlpITnkIbooYzliqjlvIDlp4vkuovku7ZcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9vbkFjdGlvblN0YXJ0KGRhdGEpIHtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gdGhpcy51bml0TWFwW2RhdGEuYWN0b3JJZF07XG4gICAgICAgIGlmIChlbnRpdHkpIHtcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZVJlcGxheWVyXSAke2RhdGEuYWN0b3JOYW1lfSDmiafooYzooYzliqhgKTtcblxuICAgICAgICAgICAgLy8g5Y+v5Lul5Zyo6L+Z6YeM5pKt5pS+5b6F5py65Yqo55S75oiW5YW25LuW5YeG5aSH5Yqo55S7XG4gICAgICAgICAgICBjb25zdCBza2VsZXRvbiA9IGVudGl0eS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgaWYgKHNrZWxldG9uKSB7XG4gICAgICAgICAgICAgICAgLy8g5Y+v5Lul5pKt5pS+5YeG5aSH5Yqo55S777yM5oiW6ICF5L+d5oyB5b2T5YmN5Yqo55S7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5aSE55CG5oqA6IO96YeK5pS+5LqL5Lu2XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfb25Ta2lsbFVzZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IGNhc3RlciA9IHRoaXMudW5pdE1hcFtkYXRhLmNhc3RlcklkXTtcbiAgICAgICAgbGV0IHRhcmdldCA9IG51bGw7XG5cbiAgICAgICAgLy8g5p+l5om+55uu5qCHXG4gICAgICAgIGlmIChkYXRhLnRhcmdldElkKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB0aGlzLnVuaXRNYXBbZGF0YS50YXJnZXRJZF07XG4gICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOmAmui/h0lE5om+5LiN5Yiw77yM5bCd6K+V6YCa6L+H5ZCN56ew5p+l5om+77yI5aSH55So5pa55qGI77yJXG4gICAgICAgICAgICAgICAgY2Mud2FybihgW0JhdHRsZVJlcGxheWVyXSDpgJrov4dJROaJvuS4jeWIsOebruaghzogJHtkYXRhLnRhcmdldElkfSwg5bCd6K+V6YCa6L+H5ZCN56ew5p+l5om+OiAke2RhdGEudGFyZ2V0TmFtZX1gKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50YXJnZXROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOmBjeWOhuaJgOacieWNleS9je+8jOmAmui/h+WQjeensOWMuemFjVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB1bml0IG9mIE9iamVjdC52YWx1ZXModGhpcy51bml0TWFwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVuaXQgJiYgdW5pdC5pc1ZhbGlkICYmIHVuaXQubmFtZSA9PT0gZGF0YS50YXJnZXROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gdW5pdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVSZXBsYXllcl0g6YCa6L+H5ZCN56ew5om+5Yiw55uu5qCHOiAke2RhdGEudGFyZ2V0TmFtZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWmguaenOaWveazleiAheW3suatu+S6oe+8jOi3s+i/h+WkhOeQhlxuICAgICAgICBpZiAoY2FzdGVyICYmIHRoaXMuZGVhZFVuaXRzLmhhcyhjYXN0ZXIpKSB7XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVSZXBsYXllcl0g6Lez6L+H5bey5q275Lqh5Y2V5L2NICR7ZGF0YS5jYXN0ZXJOYW1lfSDnmoTmioDog73ph4rmlL7kuovku7ZgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYXN0ZXIgJiYgY2FzdGVyLmlzVmFsaWQpIHtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgY2Mud2FybihgW0JhdHRsZVJlcGxheWVyXSAke2RhdGEuY2FzdGVyTmFtZX0g5a+55peg55uu5qCH6YeK5pS+ICR7ZGF0YS5za2lsbE5hbWV9YCk7XG4gICAgICAgICAgICAgICAgY2Mud2FybihgW0JhdHRsZVJlcGxheWVyXSDorrDlvZXnmoTnm67moIdJRDogJHtkYXRhLnRhcmdldElkfSwg55uu5qCH5ZCN56ewOiAke2RhdGEudGFyZ2V0TmFtZX1gKTtcbiAgICAgICAgICAgICAgICBjYy53YXJuKGBbQmF0dGxlUmVwbGF5ZXJdIOW9k+WJjXVuaXRNYXDkuK3nmoTljZXkvY06ICR7T2JqZWN0LmtleXModGhpcy51bml0TWFwKS5qb2luKCcsICcpfWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVSZXBsYXllcl0gJHtkYXRhLmNhc3Rlck5hbWV9IOWvuSAke3RhcmdldC5uYW1lfSDph4rmlL4gJHtkYXRhLnNraWxsTmFtZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5pKt5pS+5oqA6IO954m55pWIXG4gICAgICAgICAgICBjb25zdCBTa2lsbFN5c3RlbSA9IHJlcXVpcmUoXCJTa2lsbFN5c3RlbVwiKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmlzVmFsaWQgJiYgIXRoaXMuZGVhZFVuaXRzLmhhcyh0YXJnZXQpICYmIGRhdGEuc2tpbGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8g5Yib5bu65oqA6IO95a+56LGh55So5LqO5pKt5pS+54m55pWIXG4gICAgICAgICAgICAgICAgY29uc3Qgc2tpbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgIHNraWxsTmFtZTogZGF0YS5za2lsbE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBkYXRhLnNraWxsSWRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIOaSreaUvuaKgOiDveeJueaViFxuICAgICAgICAgICAgICAgIFNraWxsU3lzdGVtLl9wbGF5U2tpbGxFZmZlY3QoY2FzdGVyLCB0YXJnZXQsIHNraWxsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5pKt5pS+5pS75Ye75Yqo55S777yI5aaC5p6c5pyJQXR0YWNrTW92ZXLnu4Tku7bvvIlcbiAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmlzVmFsaWQgJiYgIXRoaXMuZGVhZFVuaXRzLmhhcyh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0YWNrTW92ZXIgPSBjYXN0ZXIuZ2V0Q29tcG9uZW50KFwiQXR0YWNrTW92ZXJcIik7XG4gICAgICAgICAgICAgICAgaWYgKGF0dGFja01vdmVyICYmICFhdHRhY2tNb3Zlci5pc0F0dGFja2luZykge1xuICAgICAgICAgICAgICAgICAgICAvLyDlj6rmkq3mlL7mlLvlh7vliqjnlLvvvIzkuI3miafooYzlrp7pmYXkvKTlrrPvvIjkvKTlrrPnlLFkYW1hZ2Xkuovku7blpITnkIbvvIlcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrTW92ZXIuYXR0YWNrVGFyZ2V0KHRhcmdldCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Yqo55S75a6M5oiQ77yM5LiN5YGa5YW25LuW5aSE55CGXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDlpITnkIbkvKTlrrPkuovku7ZcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9vbkRhbWFnZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IGF0dGFja2VyID0gdGhpcy51bml0TWFwW2RhdGEuYXR0YWNrZXJJZF07XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMudW5pdE1hcFtkYXRhLnRhcmdldElkXTtcblxuICAgICAgICAvLyDlpoLmnpznm67moIflt7LmrbvkuqHvvIzot7Pov4flpITnkIbvvIjpgb/lhY3lpI3mtLvvvIlcbiAgICAgICAgaWYgKHRhcmdldCAmJiB0aGlzLmRlYWRVbml0cy5oYXModGFyZ2V0KSkge1xuICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlUmVwbGF5ZXJdIOi3s+i/h+W3suatu+S6oeWNleS9jSAke2RhdGEudGFyZ2V0TmFtZX0g55qE5Lyk5a6z5LqL5Lu2YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5pc1ZhbGlkKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0cyA9IHRhcmdldC5nZXRDb21wb25lbnQoXCJTdGF0c0NvbXBvbmVudFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbWJhdCA9IHRhcmdldC5nZXRDb21wb25lbnQoXCJDb21iYXRDb21wb25lbnRcIik7XG5cbiAgICAgICAgICAgIGlmIChzdGF0cykge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmlzTWlzcykge1xuICAgICAgICAgICAgICAgICAgICAvLyDpl6rpgb/vvJrkuI3miaPooYDvvIzlj6rmmL7npLpNSVNTXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21iYXQpIGNvbWJhdC5sYXN0RGFtYWdlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHMudXBkYXRlSGVhbHRoQmFyKDAsICdtaXNzJyk7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZVJlcGxheWVyXSAke2RhdGEuYXR0YWNrZXJOYW1lfSDlr7kgJHtkYXRhLnRhcmdldE5hbWV9IOeahOaUu+WHu+iiq+mXqumBv+S6hu+8gWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOW6lOeUqOS8pOWus++8muebtOaOpeiuvue9ruWIsOiusOW9leaXtueahOihgOmHj+eKtuaAgVxuICAgICAgICAgICAgICAgICAgICAvLyDph43opoHvvJrlpoLmnpznm67moIflt7LmrbvkuqHvvIznoa7kv51IUOS/neaMgeS4ujDvvIjkuI3lupTnlKjku7vkvZXkvKTlrrPvvIlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVhZFVuaXRzLmhhcyh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0cy5ocCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0cy5tYXhIcCA9IGRhdGEudGFyZ2V0TWF4SHA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDkuI3mm7TmlrDooYDmnaHjgIHkuI3lop7liqDmgJLmsJTvvIjlt7LmrbvkuqHljZXkvY3vvIlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZVJlcGxheWVyXSDot7Pov4flt7LmrbvkuqHljZXkvY0gJHtkYXRhLnRhcmdldE5hbWV9IOeahOS8pOWus+W6lOeUqO+8iEhQ5L+d5oyB5Li6MO+8iWApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5q2j5bi45Y2V5L2N77ya5bqU55So5Lyk5a6zXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDnoa7kv51IUOS4jeS8muWwj+S6jjDvvIjlpoLmnpx0YXJnZXRIcOaYr+i0n+aVsO+8jOivtOaYjuW3sue7j+atu+S6oe+8iVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMuaHAgPSBNYXRoLm1heCgwLCBkYXRhLnRhcmdldEhwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzLm1heEhwID0gZGF0YS50YXJnZXRNYXhIcDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbWJhdCkgY29tYmF0Lmxhc3REYW1hZ2UgPSBkYXRhLmRhbWFnZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5pu05paw6KGA5p2h5pi+56S6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYW1hZ2VUeXBlID0gZGF0YS5pc0NyaXQgPyAnY3JpdCcgOiAnbm9ybWFsJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzLnVwZGF0ZUhlYWx0aEJhcihkYXRhLmRhbWFnZSwgZGFtYWdlVHlwZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOabtOaWsOaAkuawlOWAvO+8iOagueaNruWPl+WIsOeahOS8pOWus++8iVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZGFtYWdlID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzLmFkZFJhZ2UoZGF0YS5kYW1hZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmo4Dmn6XmmK/lkKblm6DkuLrov5nmrKHkvKTlrrPogIzmrbvkuqHvvIjljbPkvb9kZWF0aOS6i+S7tui/mOayoeWIsO+8iVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6L+Z5qC35Y+v5Lul6Ziy5q2i5ZCO57ut55qE5Lyk5a6z5LqL5Lu2XCLlpI3mtLtcIuW3suatu+S6oeeahOWNleS9jVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRzLmhwIDw9IDAgJiYgIXRoaXMuZGVhZFVuaXRzLmhhcyh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g56uL5Y2z5qCH6K6w5Li65q275Lqh77yI5LiN562J5b6FZGVhdGjkuovku7bvvIlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYWRVbml0cy5hZGQodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0cy5ocCA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmkq3mlL7mrbvkuqHliqjnlLtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBza2VsZXRvbiA9IHRhcmdldC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChza2VsZXRvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2VsZXRvbi5zZXRBbmltYXRpb24oMCwgXCJkaWVcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOS7jumYn+S8jeWIl+ihqOS4reenu+mZpFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFRlYW1SZWYgPSByZXF1aXJlKFwiVGVhbVJlZlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtID0gdGFyZ2V0LmdldENvbXBvbmVudChcIlRlYW1Db21wb25lbnRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlYW0udGVhbSA9PT0gXCJoZXJvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gVGVhbVJlZi5oZXJvc1JlZi5pbmRleE9mKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVhbVJlZi5oZXJvc1JlZi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRlYW0udGVhbSA9PT0gXCJtb25zdGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gVGVhbVJlZi5tb25zdGVyc1JlZi5pbmRleE9mKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVhbVJlZi5tb25zdGVyc1JlZi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlUmVwbGF5ZXJdICR7ZGF0YS50YXJnZXROYW1lfSDlm6DkvKTlrrPmrbvkuqHvvIhIUD0ke3N0YXRzLmhwfe+8ie+8jOW3suaPkOWJjeagh+iusOS4uuatu+S6oWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVSZXBsYXllcl0gJHtkYXRhLmF0dGFja2VyTmFtZX0g5a+5ICR7ZGF0YS50YXJnZXROYW1lfSDpgKDmiJAgJHtkYXRhLmRhbWFnZX0g54K55Lyk5a6zJHtkYXRhLmlzQ3JpdCA/ICcgKOaatOWHuyknIDogJyd977yM5Ymp5L2ZSFA6ICR7c3RhdHMuaHB9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5aSE55CG5rK755aX5LqL5Lu2XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfb25IZWFsKGRhdGEpIHtcbiAgICAgICAgY29uc3QgY2FzdGVyID0gdGhpcy51bml0TWFwW2RhdGEuY2FzdGVySWRdO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnVuaXRNYXBbZGF0YS50YXJnZXRJZF07XG5cbiAgICAgICAgLy8g5aaC5p6c55uu5qCH5bey5q275Lqh77yM6Lez6L+H5aSE55CGXG4gICAgICAgIGlmICh0YXJnZXQgJiYgdGhpcy5kZWFkVW5pdHMuaGFzKHRhcmdldCkpIHtcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZVJlcGxheWVyXSDot7Pov4flt7LmrbvkuqHljZXkvY0gJHtkYXRhLnRhcmdldE5hbWV9IOeahOayu+eWl+S6i+S7tmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuaXNWYWxpZCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhdHMgPSB0YXJnZXQuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XG4gICAgICAgICAgICBpZiAoc3RhdHMpIHtcbiAgICAgICAgICAgICAgICAvLyDmgaLlpI1IUOWIsOiusOW9leaXtueahOeKtuaAgVxuICAgICAgICAgICAgICAgIHN0YXRzLmhwID0gZGF0YS50YXJnZXRIcDtcbiAgICAgICAgICAgICAgICBzdGF0cy5tYXhIcCA9IGRhdGEudGFyZ2V0TWF4SHA7XG5cbiAgICAgICAgICAgICAgICAvLyDmm7TmlrDooYDmnaHmmL7npLrvvIjkvb/nlKgnaGVhbCfnsbvlnovvvIlcbiAgICAgICAgICAgICAgICBzdGF0cy51cGRhdGVIZWFsdGhCYXIoZGF0YS5oZWFsQW1vdW50LCAnaGVhbCcpO1xuXG4gICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlUmVwbGF5ZXJdICR7ZGF0YS5jYXN0ZXJOYW1lfSDlr7kgJHtkYXRhLnRhcmdldE5hbWV9IOaBouWkjeS6hiAke2RhdGEuaGVhbEFtb3VudH0g54K555Sf5ZG95YC877yM5b2T5YmNSFA6ICR7c3RhdHMuaHB9LyR7c3RhdHMubWF4SHB9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5aSE55CGQnVmZuW6lOeUqOS6i+S7tlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX29uQnVmZkFwcGx5KGRhdGEpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy51bml0TWFwW2RhdGEudGFyZ2V0SWRdO1xuXG4gICAgICAgIC8vIOWmguaenOebruagh+W3suatu+S6oe+8jOi3s+i/h+WkhOeQhlxuICAgICAgICBpZiAodGFyZ2V0ICYmIHRoaXMuZGVhZFVuaXRzLmhhcyh0YXJnZXQpKSB7XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVSZXBsYXllcl0g6Lez6L+H5bey5q275Lqh5Y2V5L2NICR7ZGF0YS50YXJnZXROYW1lfSDnmoRCdWZm5bqU55So5LqL5Lu2YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5pc1ZhbGlkKSB7XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVSZXBsYXllcl0gJHtkYXRhLnRhcmdldE5hbWV9IOiOt+W+l0J1ZmY6ICR7ZGF0YS5idWZmTmFtZX1gKTtcblxuICAgICAgICAgICAgLy8g5bqU55SoQnVmZuaViOaenO+8iOS9v+eUqEJ1ZmZTeXN0ZW3vvIlcbiAgICAgICAgICAgIGNvbnN0IEJ1ZmZTeXN0ZW0gPSByZXF1aXJlKFwiQnVmZlN5c3RlbVwiKTtcbiAgICAgICAgICAgIGNvbnN0IEJ1ZmZGYWN0b3J5ID0gcmVxdWlyZShcIkJ1ZmZGYWN0b3J5XCIpO1xuXG4gICAgICAgICAgICAvLyDliJvlu7pCdWZm5bm25bqU55SoXG4gICAgICAgICAgICBjb25zdCBidWZmID0gQnVmZkZhY3RvcnkuY3JlYXRlKGRhdGEuYnVmZk5hbWUpO1xuICAgICAgICAgICAgaWYgKGJ1ZmYpIHtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzorrDlvZXkuK3mnIlidWZm5pWw5o2u77yM5oGi5aSNYnVmZueahOWxnuaAp1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmJ1ZmZEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oYnVmZiwgZGF0YS5idWZmRGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEJ1ZmZTeXN0ZW0uYWRkQnVmZih0YXJnZXQsIGJ1ZmYsICgpID0+IHsgfSwgbnVsbCk7IC8vIOWbnuaUvuaXtuS4jeiusOW9le+8jOS4jei+k+WHuuaXpeW/l1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWkhOeQhkJ1Zmbnp7vpmaTkuovku7ZcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9vbkJ1ZmZSZW1vdmUoZGF0YSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnVuaXRNYXBbZGF0YS50YXJnZXRJZF07XG4gICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmlzVmFsaWQpIHtcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZVJlcGxheWVyXSAke2RhdGEudGFyZ2V0TmFtZX0g5aSx5Y67QnVmZjogJHtkYXRhLmJ1ZmZOYW1lfWApO1xuXG4gICAgICAgICAgICAvLyDnp7vpmaRCdWZm5pWI5p6cXG4gICAgICAgICAgICBjb25zdCBCdWZmQ29tcG9uZW50ID0gcmVxdWlyZShcIkJ1ZmZDb21wb25lbnRcIik7XG4gICAgICAgICAgICBjb25zdCBTdGF0c0NvbXBvbmVudCA9IHJlcXVpcmUoXCJTdGF0c0NvbXBvbmVudFwiKTtcblxuICAgICAgICAgICAgLy8g5p+l5om+5bm256e76Zmk5a+55bqU55qEQnVmZlxuICAgICAgICAgICAgY29uc3QgYnVmZnMgPSB0YXJnZXQuZ2V0Q29tcG9uZW50cyhCdWZmQ29tcG9uZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZUb1JlbW92ZSA9IGJ1ZmZzLmZpbmQoYiA9PiBiLmJ1ZmZOYW1lID09PSBkYXRhLmJ1ZmZOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGJ1ZmZUb1JlbW92ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRzID0gdGFyZ2V0LmdldENvbXBvbmVudChTdGF0c0NvbXBvbmVudCk7XG5cbiAgICAgICAgICAgICAgICAvLyDmgaLlpI3lsZ7mgKfkv67mlLnvvIjlpoLmnpzmnInvvIlcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHMgJiYgYnVmZlRvUmVtb3ZlLm1vZGlmaWVycykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gYnVmZlRvUmVtb3ZlLm1vZGlmaWVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzW2tleV0gLT0gYnVmZlRvUmVtb3ZlLm1vZGlmaWVyc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChidWZmVG9SZW1vdmUubW9kaWZpZXJzLnNwZWVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzLnVwZGF0ZUF0dGFja0ludGVydmFsKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmmK/miqTnm75CdWZm77yM5pu05paw6KGA5p2h5pi+56S6XG4gICAgICAgICAgICAgICAgaWYgKGJ1ZmZUb1JlbW92ZS5idWZmTmFtZSA9PT0gXCLmiqTnm75cIiAmJiBzdGF0cykge1xuICAgICAgICAgICAgICAgICAgICBzdGF0cy51cGRhdGVIZWFsdGhCYXIoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDosIPnlKhvbkV4cGlyZeWbnuiwg++8iOWmguaenOacie+8iVxuICAgICAgICAgICAgICAgIGlmIChidWZmVG9SZW1vdmUub25FeHBpcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgYnVmZlRvUmVtb3ZlLm9uRXhwaXJlKHRhcmdldCwgKCkgPT4geyB9KTsgLy8g5Zue5pS+5pe25LiN6L6T5Ye65pel5b+XXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g56e76ZmkQnVmZue7hOS7tlxuICAgICAgICAgICAgICAgIHRhcmdldC5yZW1vdmVDb21wb25lbnQoYnVmZlRvUmVtb3ZlKTtcblxuICAgICAgICAgICAgICAgIC8vIOabtOaWsEJ1Zmblm77moIfmmL7npLpcbiAgICAgICAgICAgICAgICBjb25zdCBCdWZmU3lzdGVtID0gcmVxdWlyZShcIkJ1ZmZTeXN0ZW1cIik7XG4gICAgICAgICAgICAgICAgQnVmZlN5c3RlbS5fdXBkYXRlQnVmZkRpc3BsYXkodGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDlpITnkIbmrbvkuqHkuovku7ZcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9vbkRlYXRoKGRhdGEpIHtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gdGhpcy51bml0TWFwW2RhdGEuZW50aXR5SWRdOy8v6YCa6L+HaWTmib7liLDljZXkvY1cbiAgICAgICAgaWYgKGVudGl0eSAmJiBlbnRpdHkuaXNWYWxpZCkge1xuICAgICAgICAgICAgLy8g5qCH6K6w5Li65bey5q275LqhXG4gICAgICAgICAgICB0aGlzLmRlYWRVbml0cy5hZGQoZW50aXR5KTtcblxuICAgICAgICAgICAgY29uc3Qgc3RhdHMgPSBlbnRpdHkuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XG4gICAgICAgICAgICBpZiAoc3RhdHMpIHtcbiAgICAgICAgICAgICAgICBzdGF0cy5ocCA9IDA7XG4gICAgICAgICAgICAgICAgc3RhdHMudXBkYXRlSGVhbHRoQmFyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOaSreaUvuatu+S6oeWKqOeUu1xuICAgICAgICAgICAgY29uc3Qgc2tlbGV0b24gPSBlbnRpdHkuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgICAgIGlmIChza2VsZXRvbikge1xuICAgICAgICAgICAgICAgIHNrZWxldG9uLnNldEFuaW1hdGlvbigwLCBcImRpZVwiLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOS7jumYn+S8jeWIl+ihqOS4reenu+mZpO+8iOWmguaenOmcgOimge+8iVxuICAgICAgICAgICAgY29uc3QgVGVhbVJlZiA9IHJlcXVpcmUoXCJUZWFtUmVmXCIpO1xuICAgICAgICAgICAgY29uc3QgdGVhbSA9IGVudGl0eS5nZXRDb21wb25lbnQoXCJUZWFtQ29tcG9uZW50XCIpO1xuICAgICAgICAgICAgaWYgKHRlYW0pIHtcbiAgICAgICAgICAgICAgICBpZiAodGVhbS50ZWFtID09PSBcImhlcm9cIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IFRlYW1SZWYuaGVyb3NSZWYuaW5kZXhPZihlbnRpdHkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUZWFtUmVmLmhlcm9zUmVmLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRlYW0udGVhbSA9PT0gXCJtb25zdGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBUZWFtUmVmLm1vbnN0ZXJzUmVmLmluZGV4T2YoZW50aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVGVhbVJlZi5tb25zdGVyc1JlZi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVSZXBsYXllcl0gJHtkYXRhLmVudGl0eU5hbWV9IOatu+S6oe+8jOW3suagh+iusOS4uuatu+S6oeeKtuaAgWApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWkhOeQhua4uOaIj+e7k+adn+S6i+S7tlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX29uR2FtZU92ZXIoZGF0YSkge1xuICAgICAgICBjYy5sb2coYFtCYXR0bGVSZXBsYXllcl0g5ri45oiP57uT5p2f77yaJHtkYXRhLndpbm5lcn3og5zliKlgKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5p6E5bu65Y2V5L2N5pig5bCE6KGoXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBoZXJvcyAtIOiLsembhOWIl+ihqFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vbnN0ZXJzIC0g5oCq54mp5YiX6KGoXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGluaXRpYWxTdGF0ZSAtIOWIneWni+eKtuaAge+8iOWPr+mAie+8jOeUqOS6juihpeWFhee8uuWkseeahOWNleS9je+8iVxuICAgICAqL1xuICAgIF9idWlsZFVuaXRNYXAoaGVyb3MsIG1vbnN0ZXJzLCBpbml0aWFsU3RhdGUpIHtcbiAgICAgICAgdGhpcy51bml0TWFwID0ge307XG5cbiAgICAgICAgLy8g6aaW5YWI5re75Yqg5Lyg5YWl55qE5Y2V5L2NXG4gICAgICAgIFsuLi5oZXJvcywgLi4ubW9uc3RlcnNdLmZvckVhY2godW5pdCA9PiB7XG4gICAgICAgICAgICBpZiAodW5pdCAmJiB1bml0LmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuaXRNYXBbdW5pdC5uYW1lXSA9IHVuaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIOWmguaenOaPkOS+m+S6huWIneWni+eKtuaAge+8jOS7juS4reaPkOWPluaJgOacieWNleS9jeWQjeensO+8jOehruS/neaJgOacieWNleS9jemDveWcqHVuaXRNYXDkuK1cbiAgICAgICAgaWYgKGluaXRpYWxTdGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgYWxsVW5pdE5hbWVzID0gbmV3IFNldCgpO1xuXG4gICAgICAgICAgICAvLyDku47liJ3lp4vnirbmgIHkuK3mj5Dlj5bmiYDmnInljZXkvY3lkI3np7BcbiAgICAgICAgICAgIGlmIChpbml0aWFsU3RhdGUuaGVyb3MpIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsU3RhdGUuaGVyb3MuZm9yRWFjaCh1bml0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVuaXQgJiYgdW5pdC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxVbml0TmFtZXMuYWRkKHVuaXQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbml0aWFsU3RhdGUubW9uc3RlcnMpIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsU3RhdGUubW9uc3RlcnMuZm9yRWFjaCh1bml0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVuaXQgJiYgdW5pdC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxVbml0TmFtZXMuYWRkKHVuaXQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5qOA5p+l5piv5ZCm5pyJ5Y2V5L2N57y65aSxXG4gICAgICAgICAgICBjb25zdCBtaXNzaW5nVW5pdHMgPSBbXTtcbiAgICAgICAgICAgIGFsbFVuaXROYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy51bml0TWFwW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pc3NpbmdVbml0cy5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWlzc2luZ1VuaXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKGBbQmF0dGxlUmVwbGF5ZXJdIOajgOa1i+WIsOe8uuWkseeahOWNleS9jTogJHttaXNzaW5nVW5pdHMuam9pbignLCAnKX1gKTtcbiAgICAgICAgICAgICAgICBjYy53YXJuKGBbQmF0dGxlUmVwbGF5ZXJdIOW9k+WJjXVuaXRNYXDkuK3nmoTljZXkvY06ICR7T2JqZWN0LmtleXModGhpcy51bml0TWFwKS5qb2luKCcsICcpfWApO1xuICAgICAgICAgICAgICAgIGNjLndhcm4oYFtCYXR0bGVSZXBsYXllcl0g5bCd6K+V5LuO5Zy65pmv5Lit5p+l5om+57y65aSx55qE5Y2V5L2NLi4uYCk7XG5cbiAgICAgICAgICAgICAgICAvLyDlsJ3or5Xku47lnLrmma/kuK3mn6Xmib7nvLrlpLHnmoTljZXkvY1cbiAgICAgICAgICAgICAgICBjb25zdCBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XG4gICAgICAgICAgICAgICAgaWYgKHNjZW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbmRVbml0QnlOYW1lID0gKG5vZGUsIG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0cyA9IG5vZGUuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbSA9IG5vZGUuZ2V0Q29tcG9uZW50KFwiVGVhbUNvbXBvbmVudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHMgJiYgdGVhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZmluZFVuaXRCeU5hbWUoY2hpbGQsIG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBtaXNzaW5nVW5pdHMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVuaXQgPSBmaW5kVW5pdEJ5TmFtZShzY2VuZSwgbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodW5pdCAmJiB1bml0LmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXRNYXBbbmFtZV0gPSB1bml0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZVJlcGxheWVyXSDinIUg5LuO5Zy65pmv5Lit5om+5Yiw57y65aSx55qE5Y2V5L2NOiAke25hbWV9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbQmF0dGxlUmVwbGF5ZXJdIOKdjCDml6Dms5Xku47lnLrmma/kuK3mib7liLDljZXkvY06ICR7bmFtZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2MubG9nKGBbQmF0dGxlUmVwbGF5ZXJdIHVuaXRNYXDmnoTlu7rlrozmiJDvvIzlhbEgJHtPYmplY3Qua2V5cyh0aGlzLnVuaXRNYXApLmxlbmd0aH0g5Liq5Y2V5L2NOiAke09iamVjdC5rZXlzKHRoaXMudW5pdE1hcCkuam9pbignLCAnKX1gKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5oGi5aSN5Yid5aeL54q25oCBXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcmVzdG9yZUluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgICAgICAgLy8g5riF6Zmk5omA5pyJ5Y2V5L2N55qEQnVmZuWSjOeKtuaAgVxuICAgICAgICBjb25zdCBCdWZmU3lzdGVtID0gcmVxdWlyZShcIkJ1ZmZTeXN0ZW1cIik7XG4gICAgICAgIGNvbnN0IEJ1ZmZDb21wb25lbnQgPSByZXF1aXJlKFwiQnVmZkNvbXBvbmVudFwiKTtcbiAgICAgICAgY29uc3QgVGVhbVJlZiA9IHJlcXVpcmUoXCJUZWFtUmVmXCIpO1xuXG4gICAgICAgIC8vIOmHjeimge+8muaBouWkjSBUZWFtUmVm77yM56Gu5L+d5omA5pyJ5Y2V5L2N77yI5YyF5ous5bey5q275Lqh55qE77yJ6YO95Zyo6Zif5LyN5YiX6KGo5LitXG4gICAgICAgIC8vIOWboOS4uuatu+S6oeaXtuWNleS9jeS8muS7jiBUZWFtUmVmIOS4reenu+mZpO+8jOS9humHjeaWsOaSreaUvuaXtumcgOimgeaJgOacieWNleS9jemDveWcqFxuICAgICAgICBpZiAoVGVhbVJlZi5oZXJvc1JlZikge1xuICAgICAgICAgICAgVGVhbVJlZi5oZXJvc1JlZi5sZW5ndGggPSAwOyAvLyDmuIXnqbrmlbDnu4RcbiAgICAgICAgfVxuICAgICAgICBpZiAoVGVhbVJlZi5tb25zdGVyc1JlZikge1xuICAgICAgICAgICAgVGVhbVJlZi5tb25zdGVyc1JlZi5sZW5ndGggPSAwOyAvLyDmuIXnqbrmlbDnu4RcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOmHjeaWsOa3u+WKoOaJgOacieWNleS9jeWIsCBUZWFtUmVm77yI5YyF5ous5bey5q275Lqh55qE77yM5Zug5Li65Zue5pS+5pe26ZyA6KaB5a6D5Lus77yJXG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy51bml0TWFwKS5mb3JFYWNoKHVuaXQgPT4ge1xuICAgICAgICAgICAgaWYgKHVuaXQgJiYgdW5pdC5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVhbSA9IHVuaXQuZ2V0Q29tcG9uZW50KFwiVGVhbUNvbXBvbmVudFwiKTtcbiAgICAgICAgICAgICAgICBpZiAodGVhbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVhbS50ZWFtID09PSBcImhlcm9cIiAmJiBUZWFtUmVmLmhlcm9zUmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzkuI3lnKjmlbDnu4TkuK3vvIzliJnmt7vliqBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChUZWFtUmVmLmhlcm9zUmVmLmluZGV4T2YodW5pdCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVhbVJlZi5oZXJvc1JlZi5wdXNoKHVuaXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRlYW0udGVhbSA9PT0gXCJtb25zdGVyXCIgJiYgVGVhbVJlZi5tb25zdGVyc1JlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5LiN5Zyo5pWw57uE5Lit77yM5YiZ5re75YqgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoVGVhbVJlZi5tb25zdGVyc1JlZi5pbmRleE9mKHVuaXQpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlYW1SZWYubW9uc3RlcnNSZWYucHVzaCh1bml0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2MubG9nKGBbQmF0dGxlUmVwbGF5ZXJdIOW3suaBouWkjVRlYW1SZWY6IOiLsembhCR7VGVhbVJlZi5oZXJvc1JlZiA/IFRlYW1SZWYuaGVyb3NSZWYubGVuZ3RoIDogMH3kuKosIOaAqueJqSR7VGVhbVJlZi5tb25zdGVyc1JlZiA/IFRlYW1SZWYubW9uc3RlcnNSZWYubGVuZ3RoIDogMH3kuKpgKTtcblxuICAgICAgICAvLyDmuIXpmaTmiYDmnInljZXkvY3nmoRCdWZmXG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy51bml0TWFwKS5mb3JFYWNoKHVuaXQgPT4ge1xuICAgICAgICAgICAgaWYgKHVuaXQgJiYgdW5pdC5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZnMgPSB1bml0LmdldENvbXBvbmVudHMoQnVmZkNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgaWYgKGJ1ZmZzICYmIGJ1ZmZzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g56e76Zmk5omA5pyJQnVmZu+8iOebtOaOpeS9v+eUqHJlbW92ZUNvbXBvbmVudO+8iVxuICAgICAgICAgICAgICAgICAgICBidWZmcy5mb3JFYWNoKGJ1ZmYgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5oGi5aSN5bGe5oCn5L+u5pS577yI5aaC5p6c5pyJ77yJXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0cyA9IHVuaXQuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHMgJiYgYnVmZi5tb2RpZmllcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gYnVmZi5tb2RpZmllcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHNba2V5XSAtPSBidWZmLm1vZGlmaWVyc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g55u05o6l56e76Zmk57uE5Lu2XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml0LnJlbW92ZUNvbXBvbmVudChidWZmKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g6YeN572u5oCS5rCU5YC8XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHMgPSB1bml0LmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHMucmFnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0cy5yYWdlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0cy51cGRhdGVSYWdlQmFyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMudXBkYXRlUmFnZUJhcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g6YeN572u5Yqo55S75Yiw5b6F5py654q25oCB77yI5aaC5p6c5Y2V5L2N6L+Y5rS7552A77yJXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRlYWRVbml0cy5oYXModW5pdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2tlbGV0b24gPSB1bml0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChza2VsZXRvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIFwid2FpdFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g5oGi5aSN6Iux6ZuE54q25oCBXG4gICAgICAgIGlmIChpbml0aWFsU3RhdGUuaGVyb3MpIHtcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZS5oZXJvcy5mb3JFYWNoKHVuaXREYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1bml0ID0gdGhpcy51bml0TWFwW3VuaXREYXRhLmlkXTtcbiAgICAgICAgICAgICAgICBpZiAodW5pdCAmJiB1bml0LmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHMgPSB1bml0LmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzLmhwID0gdW5pdERhdGEuaHA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0cy5tYXhIcCA9IHVuaXREYXRhLm1heEhwO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMuYXR0YWNrID0gdW5pdERhdGEuYXR0YWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMuZGVmZW5zZSA9IHVuaXREYXRhLmRlZmVuc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0cy5zcGVlZCA9IHVuaXREYXRhLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMudXBkYXRlSGVhbHRoQmFyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaBouWkjeaAqueJqeeKtuaAgVxuICAgICAgICBpZiAoaW5pdGlhbFN0YXRlLm1vbnN0ZXJzKSB7XG4gICAgICAgICAgICBpbml0aWFsU3RhdGUubW9uc3RlcnMuZm9yRWFjaCh1bml0RGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdW5pdCA9IHRoaXMudW5pdE1hcFt1bml0RGF0YS5pZF07XG4gICAgICAgICAgICAgICAgaWYgKHVuaXQgJiYgdW5pdC5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRzID0gdW5pdC5nZXRDb21wb25lbnQoXCJTdGF0c0NvbXBvbmVudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0cy5ocCA9IHVuaXREYXRhLmhwO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMubWF4SHAgPSB1bml0RGF0YS5tYXhIcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzLmF0dGFjayA9IHVuaXREYXRhLmF0dGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzLmRlZmVuc2UgPSB1bml0RGF0YS5kZWZlbnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHMuc3BlZWQgPSB1bml0RGF0YS5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzLnVwZGF0ZUhlYWx0aEJhcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjYy5sb2coXCJbQmF0dGxlUmVwbGF5ZXJdIOWIneWni+eKtuaAgeW3suaBouWkje+8jOaJgOaciUJ1Zmblt7LmuIXpmaRcIik7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQmF0dGxlUmVwbGF5ZXI7XG5cbiJdfQ==