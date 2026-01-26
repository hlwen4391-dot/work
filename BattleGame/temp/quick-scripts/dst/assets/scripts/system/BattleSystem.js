
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/system/BattleSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxCYXR0bGVTeXN0ZW0uanMiXSwibmFtZXMiOlsiVGVhbVJlZiIsInJlcXVpcmUiLCJTdGF0c0NvbXBvbmVudCIsIkFjdGlvblN5c3RlbSIsIkJhdHRsZVN5c3RlbSIsImNjIiwiQ2xhc3MiLCJuYW1lIiwiY3RvciIsImhlcm9zIiwibW9uc3RlcnMiLCJsb2dnZXIiLCJyYW5kIiwib25HYW1lT3ZlckNhbGxiYWNrIiwicmVjb3JkZXIiLCJoZXJvc1JlZiIsIm1vbnN0ZXJzUmVmIiwiYWN0aW9uU3lzdGVtIiwiZmluaXNoZWQiLCJpc1Byb2Nlc3NpbmdBY3Rpb24iLCJhY3Rpb25RdWV1ZSIsImlzUGF1c2VkIiwic3RhcnRSZWNvcmRpbmciLCJpc0ZpbmlzaGVkIiwibGVuZ3RoIiwiYWxpdmVIZXJvcyIsImZpbHRlciIsImUiLCJpc1ZhbGlkIiwic3RhdHMiLCJnZXRDb21wb25lbnQiLCJpc0RlYWQiLCJhbGl2ZU1vbnN0ZXJzIiwiZ2V0U29ydGVkVW5pdHMiLCJjb25jYXQiLCJzb3J0IiwiYSIsImIiLCJzYSIsInNiIiwic3BlZWQiLCJfcHJvY2Vzc05leHRBY3Rpb24iLCJfdGhpcyIsIl9oYW5kbGVHYW1lT3ZlciIsIl90aGlzJGFjdGlvblF1ZXVlJHNoaSIsInNoaWZ0IiwidW5pdCIsImR0IiwicGVyZm9ybUFjdGlvbiIsInVwZGF0ZSIsInVuaXRzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIl9zdGVwIiwiZG9uZSIsInZhbHVlIiwicHVzaCIsInBhdXNlIiwicmVzdW1lIiwid2lubmVyIiwid2lubmVyVGV4dCIsImxvZyIsInJlY29yZEdhbWVPdmVyIiwid2FybiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsU0FBUyxDQUFDO0FBQ2hDLElBQUlDLGNBQWMsR0FB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LEVBQUUsQ0FBQ3dELEdBQUcscURBQXlDLENBQUMsQ0FBQyxJQUFJLENBQUNoRCxrQkFBa0IsQ0FBRztJQUMzRVIsRUFBRSxDQUFDd0QsR0FBRyxxREFBeUMsT0FBTyxJQUFJLENBQUNoRCxrQkFBa0IsQ0FBRztJQUNoRixJQUFJLElBQUksQ0FBQ0Esa0JBQWtCLElBQUksT0FBTyxJQUFJLENBQUNBLGtCQUFrQixLQUFLLFVBQVUsRUFBRTtNQUMxRVIsRUFBRSxDQUFDd0QsR0FBRyw4RUFBb0NGLE1BQU0scUJBQWdCQyxVQUFVLENBQUc7TUFDN0UsSUFBSSxDQUFDL0Msa0JBQWtCLENBQUM4QyxNQUFNLEVBQUVDLFVBQVUsQ0FBQztNQUMzQ3ZELEVBQUUsQ0FBQ3dELEdBQUcsK0VBQTZCO0lBQ3ZDLENBQUMsTUFBTTtNQUNIeEQsRUFBRSxDQUFDMEQsSUFBSSw2R0FBa0M7SUFDN0M7RUFDSjtBQUNKLENBQUMsQ0FBQztBQUVGQyxNQUFNLENBQUNDLE9BQU8sR0FBRzdELFlBQVkiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBUZWFtUmVmID0gcmVxdWlyZShcIlRlYW1SZWZcIik7XHJcbnZhciBTdGF0c0NvbXBvbmVudCA9IHJlcXVpcmUoXCJTdGF0c0NvbXBvbmVudFwiKTtcclxudmFyIEFjdGlvblN5c3RlbSA9IHJlcXVpcmUoXCJBY3Rpb25TeXN0ZW1cIik7XHJcblxyXG52YXIgQmF0dGxlU3lzdGVtID0gY2MuQ2xhc3Moe1xyXG4gICAgbmFtZTogXCJCYXR0bGVTeXN0ZW1cIixcclxuXHJcbiAgICBjdG9yKGhlcm9zLCBtb25zdGVycywgbG9nZ2VyLCByYW5kLCBvbkdhbWVPdmVyQ2FsbGJhY2ssIHJlY29yZGVyKSB7XHJcbiAgICAgICAgdGhpcy5oZXJvcyA9IGhlcm9zO1xyXG4gICAgICAgIHRoaXMubW9uc3RlcnMgPSBtb25zdGVycztcclxuICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcclxuICAgICAgICB0aGlzLnJhbmQgPSByYW5kO1xyXG4gICAgICAgIHRoaXMub25HYW1lT3ZlckNhbGxiYWNrID0gb25HYW1lT3ZlckNhbGxiYWNrOyAvLyDmuLjmiI/nu5PmnZ/lm57osIPlh73mlbBcclxuICAgICAgICB0aGlzLnJlY29yZGVyID0gcmVjb3JkZXI7IC8vIOaImOaWl+iusOW9leWZqO+8iOWPr+mAie+8iVxyXG5cclxuICAgICAgICBUZWFtUmVmLmhlcm9zUmVmID0gdGhpcy5oZXJvcztcclxuICAgICAgICBUZWFtUmVmLm1vbnN0ZXJzUmVmID0gdGhpcy5tb25zdGVycztcclxuXHJcbiAgICAgICAgdGhpcy5hY3Rpb25TeXN0ZW0gPSBuZXcgQWN0aW9uU3lzdGVtKGxvZ2dlciwgcmFuZCwgcmVjb3JkZXIpO1xyXG4gICAgICAgIHRoaXMuZmluaXNoZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8g6KGM5Yqo6Zif5YiX57O757uf77yI55So5LqO5pSv5oyB5pS75Ye75Yqo55S755qE562J5b6F5py65Yi277yJXHJcbiAgICAgICAgdGhpcy5pc1Byb2Nlc3NpbmdBY3Rpb24gPSBmYWxzZTsgLy8g5piv5ZCm5q2j5Zyo5aSE55CG6KGM5YqoXHJcbiAgICAgICAgdGhpcy5hY3Rpb25RdWV1ZSA9IFtdOyAvLyDooYzliqjpmJ/liJdcclxuXHJcbiAgICAgICAgLy8g5pqC5YGc5qCH5b+X77yI55So5LqO5aSn5oubVUnmmL7npLrml7bmmoLlgZzmiJjmlpfvvIlcclxuICAgICAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIOWmguaenOaPkOS+m+S6huiusOW9leWZqO+8jOW8gOWni+iusOW9lVxyXG4gICAgICAgIGlmICh0aGlzLnJlY29yZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjb3JkZXIuc3RhcnRSZWNvcmRpbmcoaGVyb3MsIG1vbnN0ZXJzKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGlzRmluaXNoZWQoKSB7XHJcbiAgICAgICAgLy8g5aaC5p6c5pWw57uE5Li656m677yM6K+05piO6L+Y5rKh5Yid5aeL5YyW5a6M5oiQ77yM5LiN566X57uT5p2fXHJcbiAgICAgICAgaWYgKHRoaXMuaGVyb3MubGVuZ3RoID09PSAwICYmIHRoaXMubW9uc3RlcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOajgOafpeaYr+WQpuacieWtmOa0u+eahOiLsembhOWSjOaAqueJqVxyXG4gICAgICAgIGNvbnN0IGFsaXZlSGVyb3MgPSB0aGlzLmhlcm9zLmZpbHRlcihlID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlIHx8ICFlLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdHMgPSBlLmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdHMgJiYgIXN0YXRzLmlzRGVhZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGFsaXZlTW9uc3RlcnMgPSB0aGlzLm1vbnN0ZXJzLmZpbHRlcihlID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlIHx8ICFlLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdHMgPSBlLmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdHMgJiYgIXN0YXRzLmlzRGVhZCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDlpoLmnpzkuIDmlrnlhajpg6jmrbvkuqHvvIzmuLjmiI/nu5PmnZ9cclxuICAgICAgICByZXR1cm4gYWxpdmVIZXJvcy5sZW5ndGggPT09IDAgfHwgYWxpdmVNb25zdGVycy5sZW5ndGggPT09IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFNvcnRlZFVuaXRzKCkge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy5oZXJvcywgLi4udGhpcy5tb25zdGVyc11cclxuICAgICAgICAgICAgLmZpbHRlcihlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRzID0gZS5nZXRDb21wb25lbnQoXCJTdGF0c0NvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0cyAmJiAhc3RhdHMuaXNEZWFkKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzYSA9IGEuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzYiA9IGIuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Iuc3BlZWQgLSBzYS5zcGVlZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aSE55CG5LiL5LiA5Liq6KGM5YqoXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfcHJvY2Vzc05leHRBY3Rpb24oKSB7XHJcbiAgICAgICAgLy8g5qOA5p+l5piv5ZCm5q2j5Zyo5aSE55CG5oiW6Zif5YiX5Li656m6XHJcbiAgICAgICAgaWYgKHRoaXMuaXNQcm9jZXNzaW5nQWN0aW9uIHx8IHRoaXMuYWN0aW9uUXVldWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOajgOafpeaImOaWl+aYr+WQpue7k+adn++8iOWcqOWkhOeQhuWJjeajgOafpe+8iVxyXG4gICAgICAgIGlmICh0aGlzLmlzRmluaXNoZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVHYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzUHJvY2Vzc2luZ0FjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgeyB1bml0LCBkdCB9ID0gdGhpcy5hY3Rpb25RdWV1ZS5zaGlmdCgpO1xyXG5cclxuICAgICAgICAvLyDmiafooYzooYzliqjvvIzkvKDlhaXlm57osINcclxuICAgICAgICB0aGlzLmFjdGlvblN5c3RlbS5wZXJmb3JtQWN0aW9uKHVuaXQsIGR0LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIOihjOWKqOWujOaIkOWQju+8jOWGjeasoeajgOafpeaImOaWl+aYr+WQpue7k+adn1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ZpbmlzaGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUdhbWVPdmVyKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIOaImOaWl+acque7k+adn++8jOe7p+e7reWkhOeQhuS4i+S4gOS4quihjOWKqFxyXG4gICAgICAgICAgICB0aGlzLmlzUHJvY2Vzc2luZ0FjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9jZXNzTmV4dEFjdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICAvLyDlpoLmnpzmiJjmlpflt7Lnu5PmnZ/vvIzkuI3lho3lpITnkIZcclxuICAgICAgICBpZiAodGhpcy5maW5pc2hlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyDlpoLmnpzmiJjmlpflt7LmmoLlgZzvvIzkuI3lpITnkIbku7vkvZXooYzliqhcclxuICAgICAgICBpZiAodGhpcy5pc1BhdXNlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmo4Dmn6XmiJjmlpfmmK/lkKbnu5PmnZ9cclxuICAgICAgICBpZiAodGhpcy5pc0ZpbmlzaGVkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlR2FtZU92ZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5aaC5p6c5q2j5Zyo5aSE55CG6KGM5Yqo77yM5LiN5re75Yqg5paw55qE6KGM5Yqo5Yiw6Zif5YiX77yI6YG/5YWN6YeN5aSN5re75Yqg77yJXHJcbiAgICAgICAgaWYgKHRoaXMuaXNQcm9jZXNzaW5nQWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWwhuaJgOacieWNleS9jeeahOihjOWKqOWKoOWFpemYn+WIl1xyXG4gICAgICAgIGNvbnN0IHVuaXRzID0gdGhpcy5nZXRTb3J0ZWRVbml0cygpO1xyXG4gICAgICAgIGlmICh1bml0cy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgdW5pdCBvZiB1bml0cykge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvblF1ZXVlLnB1c2goeyB1bml0LCBkdCB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOW8gOWni+WkhOeQhumYn+WIl1xyXG4gICAgICAgIHRoaXMuX3Byb2Nlc3NOZXh0QWN0aW9uKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pqC5YGc5oiY5paX77yI55So5LqO5aSn5oubVUnmmL7npLrml7bvvIlcclxuICAgICAqL1xyXG4gICAgcGF1c2UoKSB7XHJcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5oGi5aSN5oiY5paXXHJcbiAgICAgKi9cclxuICAgIHJlc3VtZSgpIHtcclxuICAgICAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aSE55CG5ri45oiP57uT5p2f6YC76L6RXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfaGFuZGxlR2FtZU92ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmluaXNoZWQpIHJldHVybjsgLy8g6YG/5YWN6YeN5aSN6Kem5Y+RXHJcblxyXG4gICAgICAgIHRoaXMuZmluaXNoZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyDmo4Dmn6XlrZjmtLvnmoTljZXkvY3mlbDph4/mnaXnoa7lrprog5zliKnmlrlcclxuICAgICAgICBjb25zdCBhbGl2ZUhlcm9zID0gdGhpcy5oZXJvcy5maWx0ZXIoZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRzID0gZS5nZXRDb21wb25lbnQoXCJTdGF0c0NvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRzICYmICFzdGF0cy5pc0RlYWQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBhbGl2ZU1vbnN0ZXJzID0gdGhpcy5tb25zdGVycy5maWx0ZXIoZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRzID0gZS5nZXRDb21wb25lbnQoXCJTdGF0c0NvbXBvbmVudFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRzICYmICFzdGF0cy5pc0RlYWQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g5Yik5pat6IOc5Yip5pa577ya5aaC5p6c6Iux6ZuE6L+Y5pyJ5a2Y5rS755qE77yM5YiZ6Iux6ZuE6IOc5Yip77yb5ZCm5YiZ5oCq54mp6IOc5YipXHJcbiAgICAgICAgY29uc3Qgd2lubmVyID0gYWxpdmVIZXJvcy5sZW5ndGggPiAwID8gXCJoZXJvXCIgOiBcIm1vbnN0ZXJcIjtcclxuICAgICAgICBjb25zdCB3aW5uZXJUZXh0ID0gYWxpdmVIZXJvcy5sZW5ndGggPiAwID8gXCLoi7Hpm4RcIiA6IFwi5oCq54mpXCI7XHJcblxyXG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhgPT09PeaImOaWl+e7k+adn++8miR7d2lubmVyVGV4dH3og5zliKk9PT09YCk7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25RdWV1ZSA9IFtdOyAvLyDmuIXnqbrpmJ/liJdcclxuICAgICAgICB0aGlzLmlzUHJvY2Vzc2luZ0FjdGlvbiA9IGZhbHNlOyAvLyDph43nva7moIflv5dcclxuXHJcbiAgICAgICAgLy8g6K6w5b2V5ri45oiP57uT5p2f5LqL5Lu2XHJcbiAgICAgICAgaWYgKHRoaXMucmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWNvcmRlci5yZWNvcmRHYW1lT3Zlcih3aW5uZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6LCD55So5ri45oiP57uT5p2f5Zue6LCDXHJcbiAgICAgICAgY2MubG9nKGBbQmF0dGxlU3lzdGVtXSDlh4blpIfosIPnlKjmuLjmiI/nu5PmnZ/lm57osINgKTtcclxuICAgICAgICBjYy5sb2coYFtCYXR0bGVTeXN0ZW1dIG9uR2FtZU92ZXJDYWxsYmFja+WtmOWcqDogJHshIXRoaXMub25HYW1lT3ZlckNhbGxiYWNrfWApO1xyXG4gICAgICAgIGNjLmxvZyhgW0JhdHRsZVN5c3RlbV0gb25HYW1lT3ZlckNhbGxiYWNr57G75Z6LOiAke3R5cGVvZiB0aGlzLm9uR2FtZU92ZXJDYWxsYmFja31gKTtcclxuICAgICAgICBpZiAodGhpcy5vbkdhbWVPdmVyQ2FsbGJhY2sgJiYgdHlwZW9mIHRoaXMub25HYW1lT3ZlckNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZVN5c3RlbV0g6LCD55So5ri45oiP57uT5p2f5Zue6LCDOiB3aW5uZXI9JHt3aW5uZXJ9LCB3aW5uZXJUZXh0PSR7d2lubmVyVGV4dH1gKTtcclxuICAgICAgICAgICAgdGhpcy5vbkdhbWVPdmVyQ2FsbGJhY2sod2lubmVyLCB3aW5uZXJUZXh0KTtcclxuICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlU3lzdGVtXSDmuLjmiI/nu5PmnZ/lm57osIPosIPnlKjlrozmiJBgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy53YXJuKGBbQmF0dGxlU3lzdGVtXSDmuLjmiI/nu5PmnZ/lm57osIPmnKrorr7nva7miJbkuI3mmK/lh73mlbDvvIFgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCYXR0bGVTeXN0ZW07Il19