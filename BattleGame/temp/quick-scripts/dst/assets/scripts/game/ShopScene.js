
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/game/ShopScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZVxcU2hvcFNjZW5lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic2hvcFVJIiwidHlwZSIsIk5vZGUiLCJ0b29sdGlwIiwib25Mb2FkIiwibG9nIiwic2hvcFVJTm9kZSIsImZpbmQiLCJzaG9wVUlDb21wb25lbnQiLCJnZXRDb21wb25lbnQiLCJpbml0Iiwid2FybiIsImJhY2tUb01haW5NZW51IiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSO0lBQ0FDLE1BQU0sRUFBRTtNQUNKLFdBQVMsSUFBSTtNQUNiQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sSUFBSTtNQUNiQyxPQUFPLEVBQUU7SUFDYjtFQUNKLENBQUM7RUFFREMsTUFBTSxXQUFBQSxPQUFBLEVBQUc7SUFDTFIsRUFBRSxDQUFDUyxHQUFHLENBQUMsb0JBQW9CLENBQUM7O0lBRTVCO0lBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQ0wsTUFBTSxFQUFFO01BQ2QsSUFBTU0sVUFBVSxHQUFHVixFQUFFLENBQUNXLElBQUksQ0FBQyxlQUFlLENBQUM7TUFDM0MsSUFBSUQsVUFBVSxFQUFFO1FBQ1osSUFBSSxDQUFDTixNQUFNLEdBQUdNLFVBQVU7TUFDNUI7SUFDSjs7SUFFQTtJQUNBLElBQUksSUFBSSxDQUFDTixNQUFNLEVBQUU7TUFDYixJQUFNUSxlQUFlLEdBQUcsSUFBSSxDQUFDUixNQUFNLENBQUNTLFlBQVksQ0FBQyxRQUFRLENBQUM7TUFDMUQsSUFBSUQsZUFBZSxFQUFFO1FBQ2pCQSxlQUFlLENBQUNFLElBQUksRUFBRTtNQUMxQixDQUFDLE1BQU07UUFDSGQsRUFBRSxDQUFDZSxJQUFJLENBQUMsZ0NBQWdDLENBQUM7TUFDN0M7SUFDSixDQUFDLE1BQU07TUFDSGYsRUFBRSxDQUFDZSxJQUFJLENBQUMsMkNBQTJDLENBQUM7SUFDeEQ7RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0VBQ0lDLGNBQWMsV0FBQUEsZUFBQSxFQUFHO0lBQ2JoQixFQUFFLENBQUNpQixRQUFRLENBQUNDLFNBQVMsQ0FBQyxVQUFVLENBQUM7RUFDckM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5ZWG5Z+O5Zy65pmv6ISa5pysXG4gKiDnrqHnkIbllYbln47lnLrmma/nmoTliJ3lp4vljJblkozot7PovaxcbiAqL1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8g5ZWG5Z+OVUnnu4Tku7bvvIjkvJroh6rliqjmn6Xmib7vvIlcbiAgICAgICAgc2hvcFVJOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5ZWG5Z+OVUnoioLngrnvvIjljIXlkKtTaG9wVUnnu4Tku7bvvIlcIlxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgY2MubG9nKFwiW1Nob3BTY2VuZV0g5ZWG5Z+O5Zy65pmv5Yqg6L29XCIpO1xuICAgICAgICBcbiAgICAgICAgLy8g5aaC5p6c5rKh5pyJ5omL5Yqo57uR5a6ac2hvcFVJ77yM5bCd6K+V6Ieq5Yqo5p+l5om+XG4gICAgICAgIGlmICghdGhpcy5zaG9wVUkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNob3BVSU5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL1Nob3BVSVwiKTtcbiAgICAgICAgICAgIGlmIChzaG9wVUlOb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG9wVUkgPSBzaG9wVUlOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyDliJ3lp4vljJbllYbln45VSVxuICAgICAgICBpZiAodGhpcy5zaG9wVUkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNob3BVSUNvbXBvbmVudCA9IHRoaXMuc2hvcFVJLmdldENvbXBvbmVudChcIlNob3BVSVwiKTtcbiAgICAgICAgICAgIGlmIChzaG9wVUlDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBzaG9wVUlDb21wb25lbnQuaW5pdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwiW1Nob3BTY2VuZV0gU2hvcFVJ6IqC54K55rKh5pyJU2hvcFVJ57uE5Lu2XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2Mud2FybihcIltTaG9wU2NlbmVdIOacquaJvuWIsFNob3BVSeiKgueCue+8jOivt+WcqOe8lui+keWZqOS4ree7keWumuaIluehruS/neiKgueCuei3r+W+hOato+ehrlwiKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDov5Tlm57kuLvoj5zljZVcbiAgICAgKi9cbiAgICBiYWNrVG9NYWluTWVudSgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTWFpbk1lbnVcIik7XG4gICAgfVxufSk7XG4iXX0=