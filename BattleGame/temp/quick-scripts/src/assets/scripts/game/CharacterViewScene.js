"use strict";
cc._RF.push(module, 'fe7981ZGZ5GM59CwA32lyqN', 'CharacterViewScene');
// Scripts/game/CharacterViewScene.js

"use strict";

/**
 * 人物属性查看场景控制器
 * 显示所有人物头像、原型和属性信息
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // 人物查看UI组件
    characterViewUI: {
      "default": null,
      type: cc.Node,
      tooltip: "人物查看UI节点（需要挂载CharacterViewUI组件）"
    },
    // 返回按钮（可选）
    backButton: {
      "default": null,
      type: cc.Button,
      tooltip: "返回按钮（可选）"
    },
    // 返回场景名称
    backSceneName: {
      "default": "MainMenu",
      tooltip: "返回时跳转的场景名称"
    }
  },
  onLoad: function onLoad() {
    cc.log("[CharacterViewScene] 人物属性查看场景已加载");

    // 获取UI组件
    if (this.characterViewUI) {
      this.characterViewUIComp = this.characterViewUI.getComponent("CharacterViewUI");
      if (!this.characterViewUIComp) {
        cc.error("[CharacterViewScene] CharacterViewUI组件未找到！");
      }
    } else {
      cc.error("[CharacterViewScene] characterViewUI未绑定！");
    }

    // 绑定返回按钮事件
    if (this.backButton) {
      this.backButton.node.on(cc.Node.EventType.TOUCH_END, this.onBackClick, this);
    }
  },
  /**
   * 返回按钮点击事件
   */
  onBackClick: function onBackClick() {
    var _this = this;
    cc.log("[CharacterViewScene] \u8FD4\u56DE\uFF0C\u573A\u666F\u540D\u79F0: " + this.backSceneName);
    if (this.backSceneName) {
      cc.director.loadScene(this.backSceneName, function (error) {
        if (error) {
          cc.error("[CharacterViewScene] \u52A0\u8F7D\u573A\u666F\u5931\u8D25: " + error);
        } else {
          cc.log("[CharacterViewScene] \u6210\u529F\u52A0\u8F7D\u573A\u666F: " + _this.backSceneName);
        }
      });
    }
  }
});

cc._RF.pop();