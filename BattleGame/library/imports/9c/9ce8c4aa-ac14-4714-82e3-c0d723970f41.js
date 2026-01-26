"use strict";
cc._RF.push(module, '9ce8cSqrBRHFILjwNcjlw9B', 'UnitConfigItem');
// Scripts/game/UnitConfigItem.js

"use strict";

/**
 * 单个单位配置项
 * 用于在编辑器中配置单个单位的头像和Prefab
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // 单位名称（用于匹配UnitDataConfig中的单位）
    unitName: {
      "default": "",
      tooltip: "单位名称（必须与UnitDataConfig中的name一致）"
    },
    // 头像图片资源
    icon: {
      "default": null,
      type: cc.SpriteFrame,
      tooltip: "头像图片资源（SpriteFrame）"
    },
    // 人物原型Prefab
    prefab: {
      "default": null,
      type: cc.Prefab,
      tooltip: "人物原型Prefab（用于在中间显示）"
    },
    // 头像位置索引
    avatarPosition: {
      "default": 0,
      tooltip: "头像固定位置索引（0=第一个位置，1=第二个位置...）"
    }
  }
});

cc._RF.pop();