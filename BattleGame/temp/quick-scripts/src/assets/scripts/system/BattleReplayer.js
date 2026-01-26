"use strict";
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