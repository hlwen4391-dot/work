
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ecs/UltimateSkillButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8ef64B/J9N4InleC+osA9K', 'UltimateSkillButton');
// Scripts/ecs/UltimateSkillButton.js

"use strict";

/**
 * 大招技能按钮组件
 * 点击角色时释放大招
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // 是否启用点击释放大招（已禁用，现在通过点击头像释放大招）
    enableClick: {
      "default": false,
      tooltip: "是否启用点击释放大招（已禁用，现在通过点击头像释放大招）"
    }
  },
  onLoad: function onLoad() {
    // 完全禁用点击人物释放大招功能
    // 移除所有可能已存在的事件监听
    this.node.off(cc.Node.EventType.TOUCH_END, this.onClick, this);
    this.node.off(cc.Node.EventType.TOUCH_START, this.onClick, this);
    this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onClick, this);
    var button = this.node.getComponent(cc.Button);
    if (button) {
      button.node.off('click', this.onClick, this);
      button.node.off(cc.Node.EventType.TOUCH_END, this.onClick, this);
    }

    // 不再添加任何事件监听
    cc.log("[UltimateSkillButton] " + this.node.name + " \u70B9\u51FB\u4EBA\u7269\u91CA\u653E\u5927\u62DB\u529F\u80FD\u5DF2\u5B8C\u5168\u7981\u7528");
  },
  onDestroy: function onDestroy() {
    // 移除事件监听
    this.node.off(cc.Node.EventType.TOUCH_END, this.onClick, this);
  },
  /**
   * 点击事件处理（已禁用，不再执行任何操作）
   */
  onClick: function onClick(event) {
    // 已完全禁用点击人物释放大招功能
    return;

    // 检查角色是否已死亡
    var stats = this.node.getComponent("StatsComponent");
    if (stats && stats.isDead()) {
      cc.log("[UltimateSkillButton] " + this.node.name + " \u5DF2\u6B7B\u4EA1\uFF0C\u7981\u6B62\u91CA\u653E\u5927\u62DB");
      return;
    }

    // 检查是否正在回放，如果是则禁用大招释放
    if (this._isReplaying()) {
      cc.log("[UltimateSkillButton] " + this.node.name + " \u6B63\u5728\u56DE\u653E\u4E2D\uFF0C\u7981\u7528\u5927\u62DB\u91CA\u653E");
      return;
    }
    var SkillSystem = require("SkillSystem");
    var TeamRef = require("TeamRef");
    var TeamComponent = require("TeamComponent");

    // 检查是否可以释放大招
    if (!SkillSystem.canUseUltimateSkill(this.node)) {
      cc.log("[UltimateSkillButton] " + this.node.name + " \u6012\u6C14\u503C\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u91CA\u653E\u5927\u62DB");
      return;
    }
    cc.log("[UltimateSkillButton] " + this.node.name + " \u53EF\u4EE5\u91CA\u653E\u5927\u62DB\uFF0C\u7EE7\u7EED\u6267\u884C...");

    // 获取目标
    var teamComp = this.node.getComponent("TeamComponent");
    if (!teamComp) return;
    var enemies = teamComp.team === "hero" ? TeamRef.monstersRef : TeamRef.herosRef;
    var target = enemies.find(function (e) {
      var s = e.getComponent("StatsComponent");
      return s && !s.isDead();
    });
    if (!target) {
      cc.log(this.node.name + " \u6CA1\u6709\u53EF\u653B\u51FB\u7684\u76EE\u6807");
      return;
    }

    // 释放大招
    var log = function log(msg) {
      return cc.log(msg);
    };
    var rand = Math.random;
    SkillSystem.useUltimateSkill(this.node, target, log, rand);
  },
  /**
   * 检查是否正在回放
   * @private
   * @returns {boolean} 是否正在回放
   */
  _isReplaying: function _isReplaying() {
    // 方法1: 通过BattleController检查
    var scene = cc.director.getScene();
    if (scene) {
      var canvas = scene.getChildByName("Canvas");
      if (canvas) {
        // 尝试在Canvas节点上查找BattleController
        var battleController = canvas.getComponent("BattleController");
        if (!battleController) {
          // 尝试在子节点中查找
          var battleControllerNode = canvas.getChildByName("BattleController");
          if (battleControllerNode) {
            battleController = battleControllerNode.getComponent("BattleController");
          }
        }
        if (battleController && battleController.isReplaying) {
          return true;
        }
      }
    }

    // 方法2: 通过ReplayController检查
    if (scene) {
      var _canvas = scene.getChildByName("Canvas");
      if (_canvas) {
        var replayNode = _canvas.getChildByName("ReplayController");
        if (replayNode) {
          var replayController = replayNode.getComponent("ReplayController");
          if (replayController && replayController.replayer && replayController.replayer.isReplaying) {
            return true;
          }
        }
      }
    }
    return false;
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxVbHRpbWF0ZVNraWxsQnV0dG9uLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZW5hYmxlQ2xpY2siLCJ0b29sdGlwIiwib25Mb2FkIiwibm9kZSIsIm9mZiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJvbkNsaWNrIiwiVE9VQ0hfU1RBUlQiLCJUT1VDSF9DQU5DRUwiLCJidXR0b24iLCJnZXRDb21wb25lbnQiLCJCdXR0b24iLCJsb2ciLCJuYW1lIiwib25EZXN0cm95IiwiZXZlbnQiLCJzdGF0cyIsImlzRGVhZCIsIl9pc1JlcGxheWluZyIsIlNraWxsU3lzdGVtIiwicmVxdWlyZSIsIlRlYW1SZWYiLCJUZWFtQ29tcG9uZW50IiwiY2FuVXNlVWx0aW1hdGVTa2lsbCIsInRlYW1Db21wIiwiZW5lbWllcyIsInRlYW0iLCJtb25zdGVyc1JlZiIsImhlcm9zUmVmIiwidGFyZ2V0IiwiZmluZCIsImUiLCJzIiwibXNnIiwicmFuZCIsIk1hdGgiLCJyYW5kb20iLCJ1c2VVbHRpbWF0ZVNraWxsIiwic2NlbmUiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiY2FudmFzIiwiZ2V0Q2hpbGRCeU5hbWUiLCJiYXR0bGVDb250cm9sbGVyIiwiYmF0dGxlQ29udHJvbGxlck5vZGUiLCJpc1JlcGxheWluZyIsInJlcGxheU5vZGUiLCJyZXBsYXlDb250cm9sbGVyIiwicmVwbGF5ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSO0lBQ0FDLFdBQVcsRUFBRTtNQUNULFdBQVMsS0FBSztNQUNkQyxPQUFPLEVBQUU7SUFDYjtFQUNKLENBQUM7RUFFREMsTUFBTSxXQUFBQSxPQUFBLEVBQUc7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LEVBQUU7WUFDdEJELGdCQUFnQixHQUFHQyxvQkFBb0IsQ0FBQ2xDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQztVQUM1RTtRQUNKO1FBRUEsSUFBSWlDLGdCQUFnQixJQUFJQSxnQkFBZ0IsQ0FBQ0UsV0FBVyxFQUFFO1VBQ2xELE9BQU8sSUFBSTtRQUNmO01BQ0o7SUFDSjs7SUFFQTtJQUNBLElBQUlQLEtBQUssRUFBRTtNQUNQLElBQU1HLE9BQU0sR0FBR0gsS0FBSyxDQUFDSSxjQUFjLENBQUMsUUFBUSxDQUFDO01BQzdDLElBQUlELE9BQU0sRUFBRTtRQUNSLElBQU1LLFVBQVUsR0FBR0wsT0FBTSxDQUFDQyxjQUFjLENBQUMsa0JBQWtCLENBQUM7UUFDNUQsSUFBSUksVUFBVSxFQUFFO1VBQ1osSUFBTUMsZ0JBQWdCLEdBQUdELFVBQVUsQ0FBQ3BDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQztVQUNwRSxJQUFJcUMsZ0JBQWdCLElBQUlBLGdCQUFnQixDQUFDQyxRQUFRLElBQUlELGdCQUFnQixDQUFDQyxRQUFRLENBQUNILFdBQVcsRUFBRTtZQUN4RixPQUFPLElBQUk7VUFDZjtRQUNKO01BQ0o7SUFDSjtJQUVBLE9BQU8sS0FBSztFQUNoQjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWkp+aLm+aKgOiDveaMiemSrue7hOS7tlxyXG4gKiDngrnlh7vop5LoibLml7bph4rmlL7lpKfmi5tcclxuICovXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8g5piv5ZCm5ZCv55So54K55Ye76YeK5pS+5aSn5oub77yI5bey56aB55So77yM546w5Zyo6YCa6L+H54K55Ye75aS05YOP6YeK5pS+5aSn5oub77yJXHJcbiAgICAgICAgZW5hYmxlQ2xpY2s6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5piv5ZCm5ZCv55So54K55Ye76YeK5pS+5aSn5oub77yI5bey56aB55So77yM546w5Zyo6YCa6L+H54K55Ye75aS05YOP6YeK5pS+5aSn5oub77yJXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyDlrozlhajnpoHnlKjngrnlh7vkurrnianph4rmlL7lpKfmi5vlip/og71cclxuICAgICAgICAvLyDnp7vpmaTmiYDmnInlj6/og73lt7LlrZjlnKjnmoTkuovku7bnm5HlkKxcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkNsaWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uQ2xpY2ssIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uQ2xpY2ssIHRoaXMpO1xyXG5cclxuICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgaWYgKGJ1dHRvbikge1xyXG4gICAgICAgICAgICBidXR0b24ubm9kZS5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLCB0aGlzKTtcclxuICAgICAgICAgICAgYnV0dG9uLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkNsaWNrLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOS4jeWGjea3u+WKoOS7u+S9leS6i+S7tuebkeWQrFxyXG4gICAgICAgIGNjLmxvZyhgW1VsdGltYXRlU2tpbGxCdXR0b25dICR7dGhpcy5ub2RlLm5hbWV9IOeCueWHu+S6uueJqemHiuaUvuWkp+aLm+WKn+iDveW3suWujOWFqOemgeeUqGApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8g56e76Zmk5LqL5Lu255uR5ZCsXHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25DbGljaywgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog54K55Ye75LqL5Lu25aSE55CG77yI5bey56aB55So77yM5LiN5YaN5omn6KGM5Lu75L2V5pON5L2c77yJXHJcbiAgICAgKi9cclxuICAgIG9uQ2xpY2soZXZlbnQpIHtcclxuICAgICAgICAvLyDlt7LlrozlhajnpoHnlKjngrnlh7vkurrnianph4rmlL7lpKfmi5vlip/og71cclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIOajgOafpeinkuiJsuaYr+WQpuW3suatu+S6oVxyXG4gICAgICAgIGNvbnN0IHN0YXRzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xyXG4gICAgICAgIGlmIChzdGF0cyAmJiBzdGF0cy5pc0RlYWQoKSkge1xyXG4gICAgICAgICAgICBjYy5sb2coYFtVbHRpbWF0ZVNraWxsQnV0dG9uXSAke3RoaXMubm9kZS5uYW1lfSDlt7LmrbvkuqHvvIznpoHmraLph4rmlL7lpKfmi5tgKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5qOA5p+l5piv5ZCm5q2j5Zyo5Zue5pS+77yM5aaC5p6c5piv5YiZ56aB55So5aSn5oub6YeK5pS+XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzUmVwbGF5aW5nKCkpIHtcclxuICAgICAgICAgICAgY2MubG9nKGBbVWx0aW1hdGVTa2lsbEJ1dHRvbl0gJHt0aGlzLm5vZGUubmFtZX0g5q2j5Zyo5Zue5pS+5Lit77yM56aB55So5aSn5oub6YeK5pS+YCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IFNraWxsU3lzdGVtID0gcmVxdWlyZShcIlNraWxsU3lzdGVtXCIpO1xyXG4gICAgICAgIGNvbnN0IFRlYW1SZWYgPSByZXF1aXJlKFwiVGVhbVJlZlwiKTtcclxuICAgICAgICBjb25zdCBUZWFtQ29tcG9uZW50ID0gcmVxdWlyZShcIlRlYW1Db21wb25lbnRcIik7XHJcblxyXG4gICAgICAgIC8vIOajgOafpeaYr+WQpuWPr+S7pemHiuaUvuWkp+aLm1xyXG4gICAgICAgIGlmICghU2tpbGxTeXN0ZW0uY2FuVXNlVWx0aW1hdGVTa2lsbCh0aGlzLm5vZGUpKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhgW1VsdGltYXRlU2tpbGxCdXR0b25dICR7dGhpcy5ub2RlLm5hbWV9IOaAkuawlOWAvOS4jei2s++8jOaXoOazlemHiuaUvuWkp+aLm2ApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5sb2coYFtVbHRpbWF0ZVNraWxsQnV0dG9uXSAke3RoaXMubm9kZS5uYW1lfSDlj6/ku6Xph4rmlL7lpKfmi5vvvIznu6fnu63miafooYwuLi5gKTtcclxuXHJcbiAgICAgICAgLy8g6I635Y+W55uu5qCHXHJcbiAgICAgICAgY29uc3QgdGVhbUNvbXAgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFwiVGVhbUNvbXBvbmVudFwiKTtcclxuICAgICAgICBpZiAoIXRlYW1Db21wKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGVuZW1pZXMgPSB0ZWFtQ29tcC50ZWFtID09PSBcImhlcm9cIlxyXG4gICAgICAgICAgICA/IFRlYW1SZWYubW9uc3RlcnNSZWZcclxuICAgICAgICAgICAgOiBUZWFtUmVmLmhlcm9zUmVmO1xyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlbmVtaWVzLmZpbmQoZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHMgPSBlLmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gcyAmJiAhcy5pc0RlYWQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcclxuICAgICAgICAgICAgY2MubG9nKGAke3RoaXMubm9kZS5uYW1lfSDmsqHmnInlj6/mlLvlh7vnmoTnm67moIdgKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6YeK5pS+5aSn5oubXHJcbiAgICAgICAgY29uc3QgbG9nID0gKG1zZykgPT4gY2MubG9nKG1zZyk7XHJcbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGgucmFuZG9tO1xyXG4gICAgICAgIFNraWxsU3lzdGVtLnVzZVVsdGltYXRlU2tpbGwodGhpcy5ub2RlLCB0YXJnZXQsIGxvZywgcmFuZCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qOA5p+l5piv5ZCm5q2j5Zyo5Zue5pS+XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IOaYr+WQpuato+WcqOWbnuaUvlxyXG4gICAgICovXHJcbiAgICBfaXNSZXBsYXlpbmcoKSB7XHJcbiAgICAgICAgLy8g5pa55rOVMTog6YCa6L+HQmF0dGxlQ29udHJvbGxlcuajgOafpVxyXG4gICAgICAgIGNvbnN0IHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuICAgICAgICBpZiAoc2NlbmUpIHtcclxuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gc2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIik7XHJcbiAgICAgICAgICAgIGlmIChjYW52YXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWwneivleWcqENhbnZhc+iKgueCueS4iuafpeaJvkJhdHRsZUNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgIGxldCBiYXR0bGVDb250cm9sbGVyID0gY2FudmFzLmdldENvbXBvbmVudChcIkJhdHRsZUNvbnRyb2xsZXJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJhdHRsZUNvbnRyb2xsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDlsJ3or5XlnKjlrZDoioLngrnkuK3mn6Xmib5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXR0bGVDb250cm9sbGVyTm9kZSA9IGNhbnZhcy5nZXRDaGlsZEJ5TmFtZShcIkJhdHRsZUNvbnRyb2xsZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhdHRsZUNvbnRyb2xsZXJOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhdHRsZUNvbnRyb2xsZXIgPSBiYXR0bGVDb250cm9sbGVyTm9kZS5nZXRDb21wb25lbnQoXCJCYXR0bGVDb250cm9sbGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYmF0dGxlQ29udHJvbGxlciAmJiBiYXR0bGVDb250cm9sbGVyLmlzUmVwbGF5aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOaWueazlTI6IOmAmui/h1JlcGxheUNvbnRyb2xsZXLmo4Dmn6VcclxuICAgICAgICBpZiAoc2NlbmUpIHtcclxuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gc2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIik7XHJcbiAgICAgICAgICAgIGlmIChjYW52YXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcGxheU5vZGUgPSBjYW52YXMuZ2V0Q2hpbGRCeU5hbWUoXCJSZXBsYXlDb250cm9sbGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcGxheU5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXBsYXlDb250cm9sbGVyID0gcmVwbGF5Tm9kZS5nZXRDb21wb25lbnQoXCJSZXBsYXlDb250cm9sbGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXBsYXlDb250cm9sbGVyICYmIHJlcGxheUNvbnRyb2xsZXIucmVwbGF5ZXIgJiYgcmVwbGF5Q29udHJvbGxlci5yZXBsYXllci5pc1JlcGxheWluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufSk7XHJcblxyXG4iXX0=