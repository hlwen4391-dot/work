"use strict";
cc._RF.push(module, '6e38dGqZQpBza8EC2Bi8inE', 'SelectScene');
// Scripts/game/SelectScene.js

"use strict";

/**
 * 选择场景控制器
 * 负责显示选择界面（可以选择关卡、角色等）
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // 选择场景UI组件
    selectSceneUI: {
      "default": null,
      type: cc.Node,
      tooltip: "选择场景UI节点（需要挂载SelectSceneUI组件）"
    },
    // 返回主菜单按钮（可选）
    backButton: {
      "default": null,
      type: cc.Button,
      tooltip: "返回主菜单按钮（可选）"
    },
    // 开始战斗按钮（可选）
    startBattleButton: {
      "default": null,
      type: cc.Button,
      tooltip: "开始战斗按钮（可选）"
    },
    // 主菜单场景名称
    menuSceneName: {
      "default": "MainMenu",
      tooltip: "主菜单场景名称（返回主菜单时跳转的场景）"
    },
    // 战斗场景名称
    battleSceneName: {
      "default": "BattleScene",
      tooltip: "战斗场景名称（开始战斗时跳转的场景）"
    }
  },
  onLoad: function onLoad() {
    cc.log("[SelectScene] 选择场景已加载");

    // 获取SelectSceneUI组件
    if (this.selectSceneUI) {
      this.selectSceneUIComp = this.selectSceneUI.getComponent("SelectSceneUI");
      if (!this.selectSceneUIComp) {
        cc.error("[SelectScene] selectSceneUI节点未挂载SelectSceneUI组件！");
      }
    } else {
      cc.warn("[SelectScene] 未设置selectSceneUI节点");
    }

    // 绑定返回主菜单按钮事件
    if (this.backButton) {
      this.backButton.node.on(cc.Node.EventType.TOUCH_END, this.onBackClick, this);
      cc.log("[SelectScene] \u5DF2\u7ED1\u5B9AbackButton\u4E8B\u4EF6");
    }

    // 绑定开始战斗按钮事件
    if (this.startBattleButton) {
      this.startBattleButton.node.on(cc.Node.EventType.TOUCH_END, this.onStartBattleClick, this);
      cc.log("[SelectScene] \u5DF2\u7ED1\u5B9AstartBattleButton\u4E8B\u4EF6");
    } else {
      cc.warn("[SelectScene] 未设置startBattleButton，请在选择场景中绑定开始战斗按钮");
    }
  },
  /**
   * 返回主菜单按钮点击事件
   */
  onBackClick: function onBackClick() {
    var _this = this;
    cc.log("[SelectScene] \u8FD4\u56DE\u4E3B\u83DC\u5355\uFF0C\u573A\u666F\u540D\u79F0: " + this.menuSceneName);
    if (this.menuSceneName) {
      cc.director.loadScene(this.menuSceneName, function (error) {
        if (error) {
          cc.error("[SelectScene] \u52A0\u8F7D\u4E3B\u83DC\u5355\u573A\u666F\u5931\u8D25: " + error);
          cc.error("[SelectScene] \u8BF7\u68C0\u67E5\u573A\u666F\u540D\u79F0\u662F\u5426\u6B63\u786E: " + _this.menuSceneName);
        } else {
          cc.log("[SelectScene] \u6210\u529F\u52A0\u8F7D\u4E3B\u83DC\u5355\u573A\u666F: " + _this.menuSceneName);
        }
      });
    } else {
      cc.warn("[SelectScene] 未设置menuSceneName，无法返回主菜单");
    }
  },
  /**
   * 开始战斗按钮点击事件
   */
  onStartBattleClick: function onStartBattleClick() {
    var _this2 = this;
    // 检查是否有选中的单位
    if (!this.selectSceneUIComp || !this.selectSceneUIComp.hasSelectedUnits()) {
      cc.warn("[SelectScene] 请至少选择一个英雄或怪物");
      return;
    }

    // 获取选中的单位列表
    var selectedUnits = this.selectSceneUIComp.getSelectedUnits();
    cc.log("[SelectScene] \u9009\u4E2D\u7684\u5355\u4F4D - \u82F1\u96C4: " + selectedUnits.heros.length + "\u4E2A, \u602A\u7269: " + selectedUnits.monsters.length + "\u4E2A");

    // 将选中的单位数据保存到全局对象，供BattleController使用
    window.SelectedUnits = selectedUnits;
    cc.log("[SelectScene] \u5DF2\u4FDD\u5B58\u9009\u4E2D\u7684\u5355\u4F4D\u6570\u636E\u5230 window.SelectedUnits");

    // 跳转到战斗场景
    cc.log("[SelectScene] \u5F00\u59CB\u6218\u6597\uFF0C\u573A\u666F\u540D\u79F0: " + this.battleSceneName);
    if (this.battleSceneName) {
      cc.director.loadScene(this.battleSceneName, function (error) {
        if (error) {
          cc.error("[SelectScene] \u52A0\u8F7D\u6218\u6597\u573A\u666F\u5931\u8D25: " + error);
          cc.error("[SelectScene] \u8BF7\u68C0\u67E5\u573A\u666F\u540D\u79F0\u662F\u5426\u6B63\u786E: " + _this2.battleSceneName);
          cc.error("[SelectScene] \u8BF7\u786E\u4FDD\u573A\u666F\u6587\u4EF6\u5B58\u5728\u4E8E\u9879\u76EE\u4E2D");
        } else {
          cc.log("[SelectScene] \u6210\u529F\u52A0\u8F7D\u6218\u6597\u573A\u666F: " + _this2.battleSceneName);
        }
      });
    } else {
      cc.warn("[SelectScene] 未设置battleSceneName，无法开始战斗");
    }
  }
});

cc._RF.pop();