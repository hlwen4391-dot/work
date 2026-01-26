"use strict";
cc._RF.push(module, '9ef74biCdZE45w6Uitf6XMk', 'GameOverSceneData');
// Scripts/game/GameOverSceneData.js

"use strict";

/**
 * 游戏结束场景数据传递组件
 * 用于在场景间传递游戏结果数据
 * 这个组件应该挂载在场景根节点上
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // 胜利方（"hero" 或 "monster"）
    winner: {
      "default": "",
      tooltip: "胜利方标识"
    },
    // 胜利方文本（"英雄" 或 "怪物"）
    winnerText: {
      "default": "",
      tooltip: "胜利方文本"
    }
  }
});

cc._RF.pop();