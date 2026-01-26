
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/game/SelectScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZVxcU2VsZWN0U2NlbmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzZWxlY3RTY2VuZVVJIiwidHlwZSIsIk5vZGUiLCJ0b29sdGlwIiwiYmFja0J1dHRvbiIsIkJ1dHRvbiIsInN0YXJ0QmF0dGxlQnV0dG9uIiwibWVudVNjZW5lTmFtZSIsImJhdHRsZVNjZW5lTmFtZSIsIm9uTG9hZCIsImxvZyIsInNlbGVjdFNjZW5lVUlDb21wIiwiZ2V0Q29tcG9uZW50IiwiZXJyb3IiLCJ3YXJuIiwibm9kZSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwib25CYWNrQ2xpY2siLCJvblN0YXJ0QmF0dGxlQ2xpY2siLCJfdGhpcyIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiX3RoaXMyIiwiaGFzU2VsZWN0ZWRVbml0cyIsInNlbGVjdGVkVW5pdHMiLCJnZXRTZWxlY3RlZFVuaXRzIiwiaGVyb3MiLCJsZW5ndGgiLCJtb25zdGVycyIsIndpbmRvdyIsIlNlbGVjdGVkVW5pdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSO0lBQ0FDLGFBQWEsRUFBRTtNQUNYLFdBQVMsSUFBSTtNQUNiQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sSUFBSTtNQUNiQyxPQUFPLEVBQUU7SUFDYixDQUFDO0lBRUQ7SUFDQUMsVUFBVSxFQUFFO01BQ1IsV0FBUyxJQUFJO01BQ2JILElBQUksRUFBRUwsRUFBRSxDQUFDUyxNQUFNO01BQ2ZGLE9BQU8sRUFBRTtJQUNiLENBQUM7SUFFRDtJQUNBRyxpQkFBaUIsRUFBRTtNQUNmLFdBQVMsSUFBSTtNQUNiTCxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1MsTUFBTTtNQUNmRixPQUFPLEVBQUU7SUFDYixDQUFDO0lBRUQ7SUFDQUksYUFBYSxFQUFFO01BQ1gsV0FBUyxVQUFVO01BQ25CSixPQUFPLEVBQUU7SUFDYixDQUFDO0lBRUQ7SUFDQUssZUFBZSxFQUFFO01BQ2IsV0FBUyxhQUFhO01BQ3RCTCxPQUFPLEVBQUU7SUFDYjtFQUNKLENBQUM7RUFFRE0sTUFBTSxXQUFBQSxPQUFBLEVBQUc7SUFDTGIsRUFBRSxDQUFDYyxHQUFHLENBQUMsdUJBQXVCLENBQUM7O0lBRS9CO0lBQ0EsSUFBSSxJQUFJLENBQUNWLGFBQWEsRUFBRTtNQUNwQixJQUFJLENBQUNXLGlCQUFpQixHQUFHLElBQUksQ0FBQ1gsYUFBYSxDQUFDWSxZQUFZLENBQUMsZUFBZSxDQUFDO01BQ3pFLElBQUksQ0FBQyxJQUFJLENBQUNELGlCQUFpQixFQUFFO1FBQ3pCZixFQUFFLENBQUNpQixLQUFLLENBQUMsa0RBQWtELENBQUM7TUFDaEU7SUFDSixDQUFDLE1BQU07TUFDSGpCLEVBQUUsQ0FBQ2tCLElBQUksQ0FBQyxrQ0FBa0MsQ0FBQztJQUMvQzs7SUFFQTtJQUNBLElBQUksSUFBSSxDQUFDVixVQUFVLEVBQUU7TUFDakIsSUFBSSxDQUFDQSxVQUFVLENBQUNXLElBQUksQ0FBQ0MsRUFBRSxDQUFDcEIsRUFBRSxDQUFDTSxJQUFJLENBQUNlLFNBQVMsQ0FBQ0MsU0FBUyxFQUFFLElBQUksQ0FBQ0MsV0FBVyxFQUFFLElBQUksQ0FBQztNQUM1RXZCLEVBQUUsQ0FBQ2MsR0FBRywwREFBaUM7SUFDM0M7O0lBRUE7SUFDQSxJQUFJLElBQUksQ0FBQ0osaUJBQWlCLEVBQUU7TUFDeEIsSUFBSSxDQUFDQSxpQkFBaUIsQ0FBQ1MsSUFBSSxDQUFDQyxFQUFFLENBQUNwQixFQUFFLENBQUNNLElBQUksQ0FBQ2UsU0FBUyxDQUFDQyxTQUFTLEVBQUUsSUFBSSxDQUFDRSxrQkFBa0IsRUFBRSxJQUFJLENBQUM7TUFDMUZ4QixFQUFFLENBQUNjLEdBQUcsaUVBQXdDO0lBQ2xELENBQUMsTUFBTTtNQUNIZCxFQUFFLENBQUNrQixJQUFJLENBQUMsb0RBQW9ELENBQUM7SUFDakU7RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0VBQ0lLLFdBQVcsV0FBQUEsWUFBQSxFQUFHO0lBQUEsSUFBQUUsS0FBQTtJQUNWekIsRUFBRSxDQUFDYyxHQUFHLGtGQUE4QixJQUFJLENBQUNILGFBQWEsQ0FBRztJQUN6RCxJQUFJLElBQUksQ0FBQ0EsYUFBYSxFQUFFO01BQ3BCWCxFQUFFLENBQUMwQixRQUFRLENBQUNDLFNBQVMsQ0FBQyxJQUFJLENBQUNoQixhQUFhLEVBQUUsVUFBQ00sS0FBSyxFQUFLO1FBQ2pELElBQUlBLEtBQUssRUFBRTtVQUNQakIsRUFBRSxDQUFDaUIsS0FBSyw0RUFBNkJBLEtBQUssQ0FBRztVQUM3Q2pCLEVBQUUsQ0FBQ2lCLEtBQUssd0ZBQStCUSxLQUFJLENBQUNkLGFBQWEsQ0FBRztRQUNoRSxDQUFDLE1BQU07VUFDSFgsRUFBRSxDQUFDYyxHQUFHLDRFQUE2QlcsS0FBSSxDQUFDZCxhQUFhLENBQUc7UUFDNUQ7TUFDSixDQUFDLENBQUM7SUFDTixDQUFDLE1BQU07TUFDSFgsRUFBRSxDQUFDa0IsSUFBSSxDQUFDLHdDQUF3QyxDQUFDO0lBQ3JEO0VBQ0osQ0FBQztFQUVEO0FBQ0o7QUFDQTtFQUNJTSxrQkFBa0IsV0FBQUEsbUJBQUEsRUFBRztJQUFBLElBQUFJLE1BQUE7SUFDakI7SUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDYixpQkFBaUIsSUFBSSxDQUFDLElBQUksQ0FBQ0EsaUJBQWlCLENBQUNjLGdCQUFnQixFQUFFLEVBQUU7TUFDdkU3QixFQUFFLENBQUNrQixJQUFJLENBQUMsNEJBQTRCLENBQUM7TUFDckM7SUFDSjs7SUFFQTtJQUNBLElBQU1ZLGFBQWEsR0FBRyxJQUFJLENBQUNmLGlCQUFpQixDQUFDZ0IsZ0JBQWdCLEVBQUU7SUFDL0QvQixFQUFFLENBQUNjLEdBQUcsbUVBQThCZ0IsYUFBYSxDQUFDRSxLQUFLLENBQUNDLE1BQU0sOEJBQVVILGFBQWEsQ0FBQ0ksUUFBUSxDQUFDRCxNQUFNLFlBQUk7O0lBRXpHO0lBQ0FFLE1BQU0sQ0FBQ0MsYUFBYSxHQUFHTixhQUFhO0lBQ3BDOUIsRUFBRSxDQUFDYyxHQUFHLHlHQUFrRDs7SUFFeEQ7SUFDQWQsRUFBRSxDQUFDYyxHQUFHLDRFQUE2QixJQUFJLENBQUNGLGVBQWUsQ0FBRztJQUMxRCxJQUFJLElBQUksQ0FBQ0EsZUFBZSxFQUFFO01BQ3RCWixFQUFFLENBQUMwQixRQUFRLENBQUNDLFNBQVMsQ0FBQyxJQUFJLENBQUNmLGVBQWUsRUFBRSxVQUFDSyxLQUFLLEVBQUs7UUFDbkQsSUFBSUEsS0FBSyxFQUFFO1VBQ1BqQixFQUFFLENBQUNpQixLQUFLLHNFQUE0QkEsS0FBSyxDQUFHO1VBQzVDakIsRUFBRSxDQUFDaUIsS0FBSyx3RkFBK0JXLE1BQUksQ0FBQ2hCLGVBQWUsQ0FBRztVQUM5RFosRUFBRSxDQUFDaUIsS0FBSyxnR0FBK0I7UUFDM0MsQ0FBQyxNQUFNO1VBQ0hqQixFQUFFLENBQUNjLEdBQUcsc0VBQTRCYyxNQUFJLENBQUNoQixlQUFlLENBQUc7UUFDN0Q7TUFDSixDQUFDLENBQUM7SUFDTixDQUFDLE1BQU07TUFDSFosRUFBRSxDQUFDa0IsSUFBSSxDQUFDLHlDQUF5QyxDQUFDO0lBQ3REO0VBQ0o7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDpgInmi6nlnLrmma/mjqfliLblmahcclxuICog6LSf6LSj5pi+56S66YCJ5oup55WM6Z2i77yI5Y+v5Lul6YCJ5oup5YWz5Y2h44CB6KeS6Imy562J77yJXHJcbiAqL1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIOmAieaLqeWcuuaZr1VJ57uE5Lu2XHJcbiAgICAgICAgc2VsZWN0U2NlbmVVSToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIumAieaLqeWcuuaZr1VJ6IqC54K577yI6ZyA6KaB5oyC6L29U2VsZWN0U2NlbmVVSee7hOS7tu+8iVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g6L+U5Zue5Li76I+c5Y2V5oyJ6ZKu77yI5Y+v6YCJ77yJXHJcbiAgICAgICAgYmFja0J1dHRvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b24sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6L+U5Zue5Li76I+c5Y2V5oyJ6ZKu77yI5Y+v6YCJ77yJXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDlvIDlp4vmiJjmlpfmjInpkq7vvIjlj6/pgInvvIlcclxuICAgICAgICBzdGFydEJhdHRsZUJ1dHRvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b24sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5byA5aeL5oiY5paX5oyJ6ZKu77yI5Y+v6YCJ77yJXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDkuLvoj5zljZXlnLrmma/lkI3np7BcclxuICAgICAgICBtZW51U2NlbmVOYW1lOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiTWFpbk1lbnVcIixcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLkuLvoj5zljZXlnLrmma/lkI3np7DvvIjov5Tlm57kuLvoj5zljZXml7bot7PovaznmoTlnLrmma/vvIlcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOaImOaWl+WcuuaZr+WQjeensFxyXG4gICAgICAgIGJhdHRsZVNjZW5lTmFtZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBcIkJhdHRsZVNjZW5lXCIsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5oiY5paX5Zy65pmv5ZCN56ew77yI5byA5aeL5oiY5paX5pe26Lez6L2s55qE5Zy65pmv77yJXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5sb2coXCJbU2VsZWN0U2NlbmVdIOmAieaLqeWcuuaZr+W3suWKoOi9vVwiKTtcclxuXHJcbiAgICAgICAgLy8g6I635Y+WU2VsZWN0U2NlbmVVSee7hOS7tlxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdFNjZW5lVUkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RTY2VuZVVJQ29tcCA9IHRoaXMuc2VsZWN0U2NlbmVVSS5nZXRDb21wb25lbnQoXCJTZWxlY3RTY2VuZVVJXCIpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0U2NlbmVVSUNvbXApIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiW1NlbGVjdFNjZW5lXSBzZWxlY3RTY2VuZVVJ6IqC54K55pyq5oyC6L29U2VsZWN0U2NlbmVVSee7hOS7tu+8gVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCJbU2VsZWN0U2NlbmVdIOacquiuvue9rnNlbGVjdFNjZW5lVUnoioLngrlcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDnu5Hlrprov5Tlm57kuLvoj5zljZXmjInpkq7kuovku7ZcclxuICAgICAgICBpZiAodGhpcy5iYWNrQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFja0J1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkJhY2tDbGljaywgdGhpcyk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhgW1NlbGVjdFNjZW5lXSDlt7Lnu5HlrppiYWNrQnV0dG9u5LqL5Lu2YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDnu5HlrprlvIDlp4vmiJjmlpfmjInpkq7kuovku7ZcclxuICAgICAgICBpZiAodGhpcy5zdGFydEJhdHRsZUJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QmF0dGxlQnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uU3RhcnRCYXR0bGVDbGljaywgdGhpcyk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhgW1NlbGVjdFNjZW5lXSDlt7Lnu5HlrppzdGFydEJhdHRsZUJ1dHRvbuS6i+S7tmApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCJbU2VsZWN0U2NlbmVdIOacquiuvue9rnN0YXJ0QmF0dGxlQnV0dG9u77yM6K+35Zyo6YCJ5oup5Zy65pmv5Lit57uR5a6a5byA5aeL5oiY5paX5oyJ6ZKuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDov5Tlm57kuLvoj5zljZXmjInpkq7ngrnlh7vkuovku7ZcclxuICAgICAqL1xyXG4gICAgb25CYWNrQ2xpY2soKSB7XHJcbiAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVdIOi/lOWbnuS4u+iPnOWNle+8jOWcuuaZr+WQjeensDogJHt0aGlzLm1lbnVTY2VuZU5hbWV9YCk7XHJcbiAgICAgICAgaWYgKHRoaXMubWVudVNjZW5lTmFtZSkge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5tZW51U2NlbmVOYW1lLCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbU2VsZWN0U2NlbmVdIOWKoOi9veS4u+iPnOWNleWcuuaZr+Wksei0pTogJHtlcnJvcn1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgW1NlbGVjdFNjZW5lXSDor7fmo4Dmn6XlnLrmma/lkI3np7DmmK/lkKbmraPnoa46ICR7dGhpcy5tZW51U2NlbmVOYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtTZWxlY3RTY2VuZV0g5oiQ5Yqf5Yqg6L295Li76I+c5Y2V5Zy65pmvOiAke3RoaXMubWVudVNjZW5lTmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIltTZWxlY3RTY2VuZV0g5pyq6K6+572ubWVudVNjZW5lTmFtZe+8jOaXoOazlei/lOWbnuS4u+iPnOWNlVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeL5oiY5paX5oyJ6ZKu54K55Ye75LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnRCYXR0bGVDbGljaygpIHtcclxuICAgICAgICAvLyDmo4Dmn6XmmK/lkKbmnInpgInkuK3nmoTljZXkvY1cclxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0U2NlbmVVSUNvbXAgfHwgIXRoaXMuc2VsZWN0U2NlbmVVSUNvbXAuaGFzU2VsZWN0ZWRVbml0cygpKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCJbU2VsZWN0U2NlbmVdIOivt+iHs+WwkemAieaLqeS4gOS4quiLsembhOaIluaAqueJqVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6I635Y+W6YCJ5Lit55qE5Y2V5L2N5YiX6KGoXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRVbml0cyA9IHRoaXMuc2VsZWN0U2NlbmVVSUNvbXAuZ2V0U2VsZWN0ZWRVbml0cygpO1xyXG4gICAgICAgIGNjLmxvZyhgW1NlbGVjdFNjZW5lXSDpgInkuK3nmoTljZXkvY0gLSDoi7Hpm4Q6ICR7c2VsZWN0ZWRVbml0cy5oZXJvcy5sZW5ndGh95LiqLCDmgKrniak6ICR7c2VsZWN0ZWRVbml0cy5tb25zdGVycy5sZW5ndGh95LiqYCk7XHJcblxyXG4gICAgICAgIC8vIOWwhumAieS4reeahOWNleS9jeaVsOaNruS/neWtmOWIsOWFqOWxgOWvueixoe+8jOS+m0JhdHRsZUNvbnRyb2xsZXLkvb/nlKhcclxuICAgICAgICB3aW5kb3cuU2VsZWN0ZWRVbml0cyA9IHNlbGVjdGVkVW5pdHM7XHJcbiAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVdIOW3suS/neWtmOmAieS4reeahOWNleS9jeaVsOaNruWIsCB3aW5kb3cuU2VsZWN0ZWRVbml0c2ApO1xyXG5cclxuICAgICAgICAvLyDot7PovazliLDmiJjmlpflnLrmma9cclxuICAgICAgICBjYy5sb2coYFtTZWxlY3RTY2VuZV0g5byA5aeL5oiY5paX77yM5Zy65pmv5ZCN56ewOiAke3RoaXMuYmF0dGxlU2NlbmVOYW1lfWApO1xyXG4gICAgICAgIGlmICh0aGlzLmJhdHRsZVNjZW5lTmFtZSkge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5iYXR0bGVTY2VuZU5hbWUsIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtTZWxlY3RTY2VuZV0g5Yqg6L295oiY5paX5Zy65pmv5aSx6LSlOiAke2Vycm9yfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbU2VsZWN0U2NlbmVdIOivt+ajgOafpeWcuuaZr+WQjeensOaYr+WQpuato+ehrjogJHt0aGlzLmJhdHRsZVNjZW5lTmFtZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgW1NlbGVjdFNjZW5lXSDor7fnoa7kv53lnLrmma/mlofku7blrZjlnKjkuo7pobnnm67kuK1gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVdIOaIkOWKn+WKoOi9veaImOaWl+WcuuaZrzogJHt0aGlzLmJhdHRsZVNjZW5lTmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIltTZWxlY3RTY2VuZV0g5pyq6K6+572uYmF0dGxlU2NlbmVOYW1l77yM5peg5rOV5byA5aeL5oiY5paXXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4iXX0=