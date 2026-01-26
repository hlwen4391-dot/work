"use strict";
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