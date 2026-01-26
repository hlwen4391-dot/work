"use strict";
cc._RF.push(module, '00bc4YsRddC96ouPXIpwkcm', 'BattleSystem');
// Scripts/system/BattleSystem.js

"use strict";

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var TeamRef = require("TeamRef");
var StatsComponent = require("StatsComponent");
var ActionSystem = require("ActionSystem");
var BattleSystem = cc.Class({
  name: "BattleSystem",
  ctor: function ctor(heros, monsters, logger, rand, onGameOverCallback, recorder) {
    this.heros = heros;
    this.monsters = monsters;
    this.logger = logger;
    this.rand = rand;
    this.onGameOverCallback = onGameOverCallback; // 游戏结束回调函数
    this.recorder = recorder; // 战斗记录器（可选）

    TeamRef.herosRef = this.heros;
    TeamRef.monstersRef = this.monsters;
    this.actionSystem = new ActionSystem(logger, rand, recorder);
    this.finished = false;

    // 行动队列系统（用于支持攻击动画的等待机制）
    this.isProcessingAction = false; // 是否正在处理行动
    this.actionQueue = []; // 行动队列

    // 暂停标志（用于大招UI显示时暂停战斗）
    this.isPaused = false;

    // 如果提供了记录器，开始记录
    if (this.recorder) {
      this.recorder.startRecording(heros, monsters);
    }
  },
  isFinished: function isFinished() {
    // 如果数组为空，说明还没初始化完成，不算结束
    if (this.heros.length === 0 && this.monsters.length === 0) {
      return false;
    }

    // 检查是否有存活的英雄和怪物
    var aliveHeros = this.heros.filter(function (e) {
      if (!e || !e.isValid) return false;
      var stats = e.getComponent("StatsComponent");
      return stats && !stats.isDead();
    });
    var aliveMonsters = this.monsters.filter(function (e) {
      if (!e || !e.isValid) return false;
      var stats = e.getComponent("StatsComponent");
      return stats && !stats.isDead();
    });

    // 如果一方全部死亡，游戏结束
    return aliveHeros.length === 0 || aliveMonsters.length === 0;
  },
  getSortedUnits: function getSortedUnits() {
    return [].concat(this.heros, this.monsters).filter(function (e) {
      var stats = e.getComponent("StatsComponent");
      return stats && !stats.isDead();
    }).sort(function (a, b) {
      var sa = a.getComponent("StatsComponent");
      var sb = b.getComponent("StatsComponent");
      return sb.speed - sa.speed;
    });
  },
  /**
   * 处理下一个行动
   * @private
   */
  _processNextAction: function _processNextAction() {
    var _this = this;
    // 检查是否正在处理或队列为空
    if (this.isProcessingAction || this.actionQueue.length === 0) {
      return;
    }

    // 检查战斗是否结束（在处理前检查）
    if (this.isFinished()) {
      this._handleGameOver();
      return;
    }
    this.isProcessingAction = true;
    var _this$actionQueue$shi = this.actionQueue.shift(),
      unit = _this$actionQueue$shi.unit,
      dt = _this$actionQueue$shi.dt;

    // 执行行动，传入回调
    this.actionSystem.performAction(unit, dt, function () {
      // 行动完成后，再次检查战斗是否结束
      if (_this.isFinished()) {
        _this._handleGameOver();
        return;
      }

      // 战斗未结束，继续处理下一个行动
      _this.isProcessingAction = false;
      _this._processNextAction();
    });
  },
  update: function update(dt) {
    // 如果战斗已结束，不再处理
    if (this.finished) return;

    // 如果战斗已暂停，不处理任何行动
    if (this.isPaused) {
      return;
    }

    // 检查战斗是否结束
    if (this.isFinished()) {
      this._handleGameOver();
      return;
    }

    // 如果正在处理行动，不添加新的行动到队列（避免重复添加）
    if (this.isProcessingAction) {
      return;
    }

    // 将所有单位的行动加入队列
    var units = this.getSortedUnits();
    if (units.length === 0) return;
    for (var _iterator = _createForOfIteratorHelperLoose(units), _step; !(_step = _iterator()).done;) {
      var unit = _step.value;
      this.actionQueue.push({
        unit: unit,
        dt: dt
      });
    }

    // 开始处理队列
    this._processNextAction();
  },
  /**
   * 暂停战斗（用于大招UI显示时）
   */
  pause: function pause() {
    this.isPaused = true;
  },
  /**
   * 恢复战斗
   */
  resume: function resume() {
    this.isPaused = false;
  },
  /**
   * 处理游戏结束逻辑
   * @private
   */
  _handleGameOver: function _handleGameOver() {
    if (this.finished) return; // 避免重复触发

    this.finished = true;

    // 检查存活的单位数量来确定胜利方
    var aliveHeros = this.heros.filter(function (e) {
      var stats = e.getComponent("StatsComponent");
      return stats && !stats.isDead();
    });
    var aliveMonsters = this.monsters.filter(function (e) {
      var stats = e.getComponent("StatsComponent");
      return stats && !stats.isDead();
    });

    // 判断胜利方：如果英雄还有存活的，则英雄胜利；否则怪物胜利
    var winner = aliveHeros.length > 0 ? "hero" : "monster";
    var winnerText = aliveHeros.length > 0 ? "英雄" : "怪物";
    this.logger.log("====\u6218\u6597\u7ED3\u675F\uFF1A" + winnerText + "\u80DC\u5229====");
    this.actionQueue = []; // 清空队列
    this.isProcessingAction = false; // 重置标志

    // 记录游戏结束事件
    if (this.recorder) {
      this.recorder.recordGameOver(winner);
    }

    // 调用游戏结束回调
    cc.log("[BattleSystem] \u51C6\u5907\u8C03\u7528\u6E38\u620F\u7ED3\u675F\u56DE\u8C03");
    cc.log("[BattleSystem] onGameOverCallback\u5B58\u5728: " + !!this.onGameOverCallback);
    cc.log("[BattleSystem] onGameOverCallback\u7C7B\u578B: " + typeof this.onGameOverCallback);
    if (this.onGameOverCallback && typeof this.onGameOverCallback === 'function') {
      cc.log("[BattleSystem] \u8C03\u7528\u6E38\u620F\u7ED3\u675F\u56DE\u8C03: winner=" + winner + ", winnerText=" + winnerText);
      this.onGameOverCallback(winner, winnerText);
      cc.log("[BattleSystem] \u6E38\u620F\u7ED3\u675F\u56DE\u8C03\u8C03\u7528\u5B8C\u6210");
    } else {
      cc.warn("[BattleSystem] \u6E38\u620F\u7ED3\u675F\u56DE\u8C03\u672A\u8BBE\u7F6E\u6216\u4E0D\u662F\u51FD\u6570\uFF01");
    }
  }
});
module.exports = BattleSystem;

cc._RF.pop();