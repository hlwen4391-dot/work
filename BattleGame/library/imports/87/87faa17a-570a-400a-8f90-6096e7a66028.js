"use strict";
cc._RF.push(module, '87faaF6VwpACo+QYJbnpmAo', 'ItemIconSetter');
// Scripts/ecs/ItemIconSetter.js

"use strict";

/**
 * 道具图标设置器
 * 在编辑器中按「ItemConfig.items 的顺序」绑定图标数组，运行时自动写入 ItemConfig，
 * 使每个道具拥有不同图标（道具栏、商城等会从 ItemConfig 读取 icon 显示）。
 *
 * 使用方式：
 * 1. 将本组件挂在场景中（如 Canvas 下）;
 * 2. 在属性检查器中展开 itemIcons 数组，长度与 ItemConfig.items 一致;
 * 3. 按顺序拖入 SpriteFrame：第 0 个=升级药水，第 1 个=火球术卷轴，第 2 个=兽化狂暴卷轴，第 3 个=治疗术卷轴 ……
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    /**
     * 道具图标数组，与 ItemConfig.items 顺序一一对应
     * 第 i 个元素对应 ItemConfig.items[i] 的图标
     */
    itemIcons: {
      "default": [],
      type: [cc.SpriteFrame],
      tooltip: "按 ItemConfig 中道具顺序：升级药水、火球术卷轴、兽化狂暴卷轴、治疗术卷轴……"
    }
  },
  onLoad: function onLoad() {
    var ItemConfig = require("ItemConfig");
    var items = ItemConfig.getAllItems();
    var setCount = 0;
    for (var i = 0; i < items.length; i++) {
      if (this.itemIcons && this.itemIcons[i]) {
        items[i].icon = this.itemIcons[i];
        setCount++;
        cc.log("[ItemIconSetter] \u2713 " + items[i].name + " (" + items[i].id + ") \u56FE\u6807\u5DF2\u8BBE\u7F6E");
      } else if (items[i].icon == null) {
        cc.warn("[ItemIconSetter] \u26A0\uFE0F \u7B2C " + (i + 1) + " \u4E2A\u9053\u5177\u300C" + items[i].name + "\u300D\u672A\u7ED1\u5B9A\u56FE\u6807\uFF0C\u8BF7\u5728 itemIcons[" + i + "] \u4E2D\u62D6\u5165 SpriteFrame");
      }
    }
    if (setCount > 0) {
      cc.log("[ItemIconSetter] \u5171\u8BBE\u7F6E " + setCount + "/" + items.length + " \u4E2A\u9053\u5177\u56FE\u6807");
    }
  }
});

cc._RF.pop();