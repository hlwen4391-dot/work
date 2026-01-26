"use strict";
cc._RF.push(module, '87faaF6VwpACo+QYJbnpmAo', 'ItemIconSetter');
// Scripts/ecs/ItemIconSetter.js

"use strict";

/**
 * 道具图标设置器
 * 在编辑器中绑定道具图标资源，运行时自动设置到ItemConfig
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // 升级药水图标
    upgradePotionIcon: {
      "default": null,
      type: cc.SpriteFrame,
      tooltip: "升级药水图标（SpriteFrame）"
    }

    // 后续可以添加更多道具图标
    // expPotionIcon: {
    //     default: null,
    //     type: cc.SpriteFrame,
    //     tooltip: "经验药水图标（SpriteFrame）"
    // }
  },
  onLoad: function onLoad() {
    var ItemConfig = require("ItemConfig");

    // 设置升级药水图标
    var upgradePotion = ItemConfig.getItemById("upgrade_potion");
    if (upgradePotion && this.upgradePotionIcon) {
      upgradePotion.icon = this.upgradePotionIcon;
      cc.log("[ItemIconSetter] ✓ 设置升级药水图标成功");
    } else if (upgradePotion && !this.upgradePotionIcon) {
      cc.warn("[ItemIconSetter] ⚠️ 升级药水图标未设置，请在编辑器中绑定");
    }

    // 后续可以添加更多道具图标的设置
    // const expPotion = ItemConfig.getItemById("exp_potion");
    // if (expPotion && this.expPotionIcon) {
    //     expPotion.icon = this.expPotionIcon;
    //     cc.log("[ItemIconSetter] ✓ 设置经验药水图标成功");
    // }
  }
});

cc._RF.pop();