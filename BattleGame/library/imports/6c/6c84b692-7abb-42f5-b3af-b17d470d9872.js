"use strict";
cc._RF.push(module, '6c84baSertC9bOvsX1HDZhy', 'ShopScene');
// Scripts/game/ShopScene.js

"use strict";

/**
 * 商城场景脚本
 * 管理商城场景的初始化和跳转
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // 商城UI组件（会自动查找）
    shopUI: {
      "default": null,
      type: cc.Node,
      tooltip: "商城UI节点（包含ShopUI组件）"
    }
  },
  onLoad: function onLoad() {
    cc.log("[ShopScene] 商城场景加载");

    // 如果没有手动绑定shopUI，尝试自动查找
    if (!this.shopUI) {
      var shopUINode = cc.find("Canvas/ShopUI");
      if (shopUINode) {
        this.shopUI = shopUINode;
      }
    }

    // 初始化商城UI
    if (this.shopUI) {
      var shopUIComponent = this.shopUI.getComponent("ShopUI");
      if (shopUIComponent) {
        shopUIComponent.init();
      } else {
        cc.warn("[ShopScene] ShopUI节点没有ShopUI组件");
      }
    } else {
      cc.warn("[ShopScene] 未找到ShopUI节点，请在编辑器中绑定或确保节点路径正确");
    }
  },
  /**
   * 返回主菜单
   */
  backToMainMenu: function backToMainMenu() {
    cc.director.loadScene("MainMenu");
  }
});

cc._RF.pop();