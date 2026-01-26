
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/game/CharacterViewScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZVxcQ2hhcmFjdGVyVmlld1NjZW5lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY2hhcmFjdGVyVmlld1VJIiwidHlwZSIsIk5vZGUiLCJ0b29sdGlwIiwiYmFja0J1dHRvbiIsIkJ1dHRvbiIsImJhY2tTY2VuZU5hbWUiLCJvbkxvYWQiLCJsb2ciLCJjaGFyYWN0ZXJWaWV3VUlDb21wIiwiZ2V0Q29tcG9uZW50IiwiZXJyb3IiLCJub2RlIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJvbkJhY2tDbGljayIsIl90aGlzIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSO0lBQ0FDLGVBQWUsRUFBRTtNQUNiLFdBQVMsSUFBSTtNQUNiQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sSUFBSTtNQUNiQyxPQUFPLEVBQUU7SUFDYixDQUFDO0lBRUQ7SUFDQUMsVUFBVSxFQUFFO01BQ1IsV0FBUyxJQUFJO01BQ2JILElBQUksRUFBRUwsRUFBRSxDQUFDUyxNQUFNO01BQ2ZGLE9BQU8sRUFBRTtJQUNiLENBQUM7SUFFRDtJQUNBRyxhQUFhLEVBQUU7TUFDWCxXQUFTLFVBQVU7TUFDbkJILE9BQU8sRUFBRTtJQUNiO0VBQ0osQ0FBQztFQUVESSxNQUFNLFdBQUFBLE9BQUEsRUFBRztJQUNMWCxFQUFFLENBQUNZLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQzs7SUFFMUM7SUFDQSxJQUFJLElBQUksQ0FBQ1IsZUFBZSxFQUFFO01BQ3RCLElBQUksQ0FBQ1MsbUJBQW1CLEdBQUcsSUFBSSxDQUFDVCxlQUFlLENBQUNVLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztNQUMvRSxJQUFJLENBQUMsSUFBSSxDQUFDRCxtQkFBbUIsRUFBRTtRQUMzQmIsRUFBRSxDQUFDZSxLQUFLLENBQUMsNENBQTRDLENBQUM7TUFDMUQ7SUFDSixDQUFDLE1BQU07TUFDSGYsRUFBRSxDQUFDZSxLQUFLLENBQUMsMENBQTBDLENBQUM7SUFDeEQ7O0lBRUE7SUFDQSxJQUFJLElBQUksQ0FBQ1AsVUFBVSxFQUFFO01BQ2pCLElBQUksQ0FBQ0EsVUFBVSxDQUFDUSxJQUFJLENBQUNDLEVBQUUsQ0FBQ2pCLEVBQUUsQ0FBQ00sSUFBSSxDQUFDWSxTQUFTLENBQUNDLFNBQVMsRUFBRSxJQUFJLENBQUNDLFdBQVcsRUFBRSxJQUFJLENBQUM7SUFDaEY7RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0VBQ0lBLFdBQVcsV0FBQUEsWUFBQSxFQUFHO0lBQUEsSUFBQUMsS0FBQTtJQUNWckIsRUFBRSxDQUFDWSxHQUFHLHVFQUFrQyxJQUFJLENBQUNGLGFBQWEsQ0FBRztJQUM3RCxJQUFJLElBQUksQ0FBQ0EsYUFBYSxFQUFFO01BQ3BCVixFQUFFLENBQUNzQixRQUFRLENBQUNDLFNBQVMsQ0FBQyxJQUFJLENBQUNiLGFBQWEsRUFBRSxVQUFDSyxLQUFLLEVBQUs7UUFDakQsSUFBSUEsS0FBSyxFQUFFO1VBQ1BmLEVBQUUsQ0FBQ2UsS0FBSyxpRUFBaUNBLEtBQUssQ0FBRztRQUNyRCxDQUFDLE1BQU07VUFDSGYsRUFBRSxDQUFDWSxHQUFHLGlFQUFpQ1MsS0FBSSxDQUFDWCxhQUFhLENBQUc7UUFDaEU7TUFDSixDQUFDLENBQUM7SUFDTjtFQUNKO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5Lq654mp5bGe5oCn5p+l55yL5Zy65pmv5o6n5Yi25ZmoXHJcbiAqIOaYvuekuuaJgOacieS6uueJqeWktOWDj+OAgeWOn+Wei+WSjOWxnuaAp+S/oeaBr1xyXG4gKi9cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyDkurrnianmn6XnnItVSee7hOS7tlxyXG4gICAgICAgIGNoYXJhY3RlclZpZXdVSToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIuS6uueJqeafpeeci1VJ6IqC54K577yI6ZyA6KaB5oyC6L29Q2hhcmFjdGVyVmlld1VJ57uE5Lu277yJXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDov5Tlm57mjInpkq7vvIjlj6/pgInvvIlcclxuICAgICAgICBiYWNrQnV0dG9uOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvbixcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLov5Tlm57mjInpkq7vvIjlj6/pgInvvIlcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOi/lOWbnuWcuuaZr+WQjeensFxyXG4gICAgICAgIGJhY2tTY2VuZU5hbWU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogXCJNYWluTWVudVwiLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIui/lOWbnuaXtui3s+i9rOeahOWcuuaZr+WQjeensFwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MubG9nKFwiW0NoYXJhY3RlclZpZXdTY2VuZV0g5Lq654mp5bGe5oCn5p+l55yL5Zy65pmv5bey5Yqg6L29XCIpO1xyXG5cclxuICAgICAgICAvLyDojrflj5ZVSee7hOS7tlxyXG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3RlclZpZXdVSSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlclZpZXdVSUNvbXAgPSB0aGlzLmNoYXJhY3RlclZpZXdVSS5nZXRDb21wb25lbnQoXCJDaGFyYWN0ZXJWaWV3VUlcIik7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGFyYWN0ZXJWaWV3VUlDb21wKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIltDaGFyYWN0ZXJWaWV3U2NlbmVdIENoYXJhY3RlclZpZXdVSee7hOS7tuacquaJvuWIsO+8gVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwiW0NoYXJhY3RlclZpZXdTY2VuZV0gY2hhcmFjdGVyVmlld1VJ5pyq57uR5a6a77yBXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g57uR5a6a6L+U5Zue5oyJ6ZKu5LqL5Lu2XHJcbiAgICAgICAgaWYgKHRoaXMuYmFja0J1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tCdXR0b24ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25CYWNrQ2xpY2ssIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDov5Tlm57mjInpkq7ngrnlh7vkuovku7ZcclxuICAgICAqL1xyXG4gICAgb25CYWNrQ2xpY2soKSB7XHJcbiAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1NjZW5lXSDov5Tlm57vvIzlnLrmma/lkI3np7A6ICR7dGhpcy5iYWNrU2NlbmVOYW1lfWApO1xyXG4gICAgICAgIGlmICh0aGlzLmJhY2tTY2VuZU5hbWUpIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMuYmFja1NjZW5lTmFtZSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgW0NoYXJhY3RlclZpZXdTY2VuZV0g5Yqg6L295Zy65pmv5aSx6LSlOiAke2Vycm9yfWApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3U2NlbmVdIOaIkOWKn+WKoOi9veWcuuaZrzogJHt0aGlzLmJhY2tTY2VuZU5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==