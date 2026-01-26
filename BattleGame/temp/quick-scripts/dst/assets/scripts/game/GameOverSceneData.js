
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/game/GameOverSceneData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZVxcR2FtZU92ZXJTY2VuZURhdGEuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ3aW5uZXIiLCJ0b29sdGlwIiwid2lubmVyVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUjtJQUNBQyxNQUFNLEVBQUU7TUFDSixXQUFTLEVBQUU7TUFDWEMsT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVEO0lBQ0FDLFVBQVUsRUFBRTtNQUNSLFdBQVMsRUFBRTtNQUNYRCxPQUFPLEVBQUU7SUFDYjtFQUNKO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5ri45oiP57uT5p2f5Zy65pmv5pWw5o2u5Lyg6YCS57uE5Lu2XHJcbiAqIOeUqOS6juWcqOWcuuaZr+mXtOS8oOmAkua4uOaIj+e7k+aenOaVsOaNrlxyXG4gKiDov5nkuKrnu4Tku7blupTor6XmjILovb3lnKjlnLrmma/moLnoioLngrnkuIpcclxuICovXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8g6IOc5Yip5pa577yIXCJoZXJvXCIg5oiWIFwibW9uc3Rlclwi77yJXHJcbiAgICAgICAgd2lubmVyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6IOc5Yip5pa55qCH6K+GXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDog5zliKnmlrnmlofmnKzvvIhcIuiLsembhFwiIOaIliBcIuaAqueJqVwi77yJXHJcbiAgICAgICAgd2lubmVyVGV4dDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBcIlwiLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIuiDnOWIqeaWueaWh+acrFwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbiJdfQ==