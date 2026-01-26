
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/game/GameOverScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a969HURa1HVa6dnUve5RxA', 'GameOverScene');
// Scripts/game/GameOverScene.js

"use strict";

/**
 * 游戏结束场景控制器
 * 负责显示游戏结束画面和胜利信息
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // 游戏结束面板节点
    gameOverPanel: {
      "default": null,
      type: cc.Node,
      tooltip: "游戏结束面板节点（需要挂载GameOverPanel组件）"
    },
    // 返回主菜单按钮（可选）
    menuButton: {
      "default": null,
      type: cc.Button,
      tooltip: "返回主菜单按钮（可选）"
    },
    // 重新开始按钮（可选）
    restartButton: {
      "default": null,
      type: cc.Button,
      tooltip: "重新开始按钮（可选）"
    },
    // 选择场景名称（重新开始时跳转的场景）
    selectSceneName: {
      "default": "SelectScene",
      tooltip: "选择场景名称（重新开始时跳转的场景）"
    },
    // 主菜单场景名称
    menuSceneName: {
      "default": "MainMenu",
      tooltip: "主菜单场景名称（返回主菜单时跳转的场景）"
    }
  },
  onLoad: function onLoad() {
    // 从全局对象获取游戏结果（BattleController中设置的数据）
    var winner = "未知";
    var winnerText = "未知";
    if (window.BattleGameResult) {
      winner = window.BattleGameResult.winner || "未知";
      winnerText = window.BattleGameResult.winnerText || "未知";
    } else {
      // 如果没有全局数据，尝试从场景节点获取（备用方案）
      var scene = cc.director.getScene();
      if (scene) {
        // 尝试在场景根节点或Canvas节点上查找GameOverSceneData组件
        var canvas = scene.getChildByName("Canvas");
        if (canvas) {
          var gameResult = canvas.getComponent("GameOverSceneData");
          if (gameResult) {
            winner = gameResult.winner || "未知";
            winnerText = gameResult.winnerText || "未知";
          }
        }
      }
    }
    cc.log("[GameOverScene] \u52A0\u8F7D\u6E38\u620F\u7ED3\u675F\u573A\u666F\uFF0C\u80DC\u5229\u65B9: " + winnerText);
    cc.log("[GameOverScene] gameOverPanel\u8282\u70B9: " + (this.gameOverPanel ? this.gameOverPanel.name : 'null'));

    // 显示游戏结束画面
    if (this.gameOverPanel) {
      var gameOverPanelComp = this.gameOverPanel.getComponent("GameOverPanel");
      if (gameOverPanelComp) {
        cc.log("[GameOverScene] \u627E\u5230GameOverPanel\u7EC4\u4EF6\uFF0C\u51C6\u5907\u663E\u793A\u753B\u9762");
        // 延迟一帧确保场景完全加载
        this.scheduleOnce(function () {
          gameOverPanelComp.showGameOver(winner);
        }, 0);
      } else {
        cc.error("[GameOverScene] gameOverPanel节点未挂载GameOverPanel组件！");
        cc.error("   请在gameOverPanel节点上添加GameOverPanel组件");
      }
    } else {
      cc.error("[GameOverScene] 未设置gameOverPanel节点！");
      cc.error("   请在GameOverScene组件的属性检查器中绑定gameOverPanel节点");
    }

    // 绑定按钮事件（GameOverScene的按钮）
    if (this.menuButton) {
      this.menuButton.node.on(cc.Node.EventType.TOUCH_END, this.onMenuClick, this);
      cc.log("[GameOverScene] \u5DF2\u7ED1\u5B9AmenuButton\u4E8B\u4EF6");
    }
    if (this.restartButton) {
      this.restartButton.node.on(cc.Node.EventType.TOUCH_END, this.onRestartClick, this);
      cc.log("[GameOverScene] \u5DF2\u7ED1\u5B9ArestartButton\u4E8B\u4EF6");
    }

    // 如果GameOverPanel也有按钮，也需要绑定（避免冲突）
    if (this.gameOverPanel) {
      var _gameOverPanelComp = this.gameOverPanel.getComponent("GameOverPanel");
      if (_gameOverPanelComp) {
        // 如果GameOverPanel有按钮，也绑定到GameOverScene的方法
        if (_gameOverPanelComp.restartButton && !this.restartButton) {
          _gameOverPanelComp.restartButton.node.on(cc.Node.EventType.TOUCH_END, this.onRestartClick, this);
          cc.log("[GameOverScene] \u5DF2\u7ED1\u5B9AGameOverPanel\u7684restartButton\u4E8B\u4EF6");
        }
        if (_gameOverPanelComp.menuButton && !this.menuButton) {
          _gameOverPanelComp.menuButton.node.on(cc.Node.EventType.TOUCH_END, this.onMenuClick, this);
          cc.log("[GameOverScene] \u5DF2\u7ED1\u5B9AGameOverPanel\u7684menuButton\u4E8B\u4EF6");
        }
      }
    }
  },
  /**
   * 返回主菜单
   */
  onMenuClick: function onMenuClick() {
    var _this = this;
    cc.log("[GameOverScene] \u8FD4\u56DE\u4E3B\u83DC\u5355\uFF0C\u573A\u666F\u540D\u79F0: " + this.menuSceneName);
    if (this.menuSceneName) {
      cc.director.loadScene(this.menuSceneName, function (error) {
        if (error) {
          cc.error("[GameOverScene] \u52A0\u8F7D\u4E3B\u83DC\u5355\u573A\u666F\u5931\u8D25: " + error);
          cc.error("[GameOverScene] \u8BF7\u68C0\u67E5\u573A\u666F\u540D\u79F0\u662F\u5426\u6B63\u786E: " + _this.menuSceneName);
        } else {
          cc.log("[GameOverScene] \u6210\u529F\u52A0\u8F7D\u4E3B\u83DC\u5355\u573A\u666F: " + _this.menuSceneName);
        }
      });
    } else {
      cc.warn("[GameOverScene] 未设置menuSceneName，无法返回主菜单");
    }
  },
  /**
   * 重新开始
   */
  onRestartClick: function onRestartClick() {
    var _this2 = this;
    cc.log("[GameOverScene] \u91CD\u65B0\u5F00\u59CB\u6E38\u620F\uFF0C\u8DF3\u8F6C\u5230\u9009\u62E9\u573A\u666F: " + this.selectSceneName);
    if (this.selectSceneName) {
      cc.director.loadScene(this.selectSceneName, function (error) {
        if (error) {
          cc.error("[GameOverScene] \u52A0\u8F7D\u9009\u62E9\u573A\u666F\u5931\u8D25: " + error);
          cc.error("[GameOverScene] \u8BF7\u68C0\u67E5\u573A\u666F\u540D\u79F0\u662F\u5426\u6B63\u786E: " + _this2.selectSceneName);
        } else {
          cc.log("[GameOverScene] \u6210\u529F\u52A0\u8F7D\u9009\u62E9\u573A\u666F: " + _this2.selectSceneName);
        }
      });
    } else {
      cc.warn("[GameOverScene] 未设置selectSceneName，无法重新开始");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZVxcR2FtZU92ZXJTY2VuZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImdhbWVPdmVyUGFuZWwiLCJ0eXBlIiwiTm9kZSIsInRvb2x0aXAiLCJtZW51QnV0dG9uIiwiQnV0dG9uIiwicmVzdGFydEJ1dHRvbiIsInNlbGVjdFNjZW5lTmFtZSIsIm1lbnVTY2VuZU5hbWUiLCJvbkxvYWQiLCJ3aW5uZXIiLCJ3aW5uZXJUZXh0Iiwid2luZG93IiwiQmF0dGxlR2FtZVJlc3VsdCIsInNjZW5lIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImNhbnZhcyIsImdldENoaWxkQnlOYW1lIiwiZ2FtZVJlc3VsdCIsImdldENvbXBvbmVudCIsImxvZyIsIm5hbWUiLCJnYW1lT3ZlclBhbmVsQ29tcCIsInNjaGVkdWxlT25jZSIsInNob3dHYW1lT3ZlciIsImVycm9yIiwibm9kZSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwib25NZW51Q2xpY2siLCJvblJlc3RhcnRDbGljayIsIl90aGlzIiwibG9hZFNjZW5lIiwid2FybiIsIl90aGlzMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1I7SUFDQUMsYUFBYSxFQUFFO01BQ1gsV0FBUyxJQUFJO01BQ2JDLElBQUksRUFBRUwsRUFBRSxDQUFDTSxJQUFJO01BQ2JDLE9BQU8sRUFBRTtJQUNiLENBQUM7SUFFRDtJQUNBQyxVQUFVLEVBQUU7TUFDUixXQUFTLElBQUk7TUFDYkgsSUFBSSxFQUFFTCxFQUFFLENBQUNTLE1BQU07TUFDZkYsT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVEO0lBQ0FHLGFBQWEsRUFBRTtNQUNYLFdBQVMsSUFBSTtNQUNiTCxJQUFJ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QixFQUFFLENBQUM4QixLQUFLLDBGQUFpQ08sS0FBSSxDQUFDekIsYUFBYSxDQUFHO1FBQ2xFLENBQUMsTUFBTTtVQUNIWixFQUFFLENBQUN5QixHQUFHLDhFQUErQlksS0FBSSxDQUFDekIsYUFBYSxDQUFHO1FBQzlEO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxNQUFNO01BQ0haLEVBQUUsQ0FBQ3VDLElBQUksQ0FBQywwQ0FBMEMsQ0FBQztJQUN2RDtFQUNKLENBQUM7RUFFRDtBQUNKO0FBQ0E7RUFDSUgsY0FBYyxXQUFBQSxlQUFBLEVBQUc7SUFBQSxJQUFBSSxNQUFBO0lBQ2J4QyxFQUFFLENBQUN5QixHQUFHLDRHQUFvQyxJQUFJLENBQUNkLGVBQWUsQ0FBRztJQUNqRSxJQUFJLElBQUksQ0FBQ0EsZUFBZSxFQUFFO01BQ3RCWCxFQUFFLENBQUNtQixRQUFRLENBQUNtQixTQUFTLENBQUMsSUFBSSxDQUFDM0IsZUFBZSxFQUFFLFVBQUNtQixLQUFLLEVBQUs7UUFDbkQsSUFBSUEsS0FBSyxFQUFFO1VBQ1A5QixFQUFFLENBQUM4QixLQUFLLHdFQUE4QkEsS0FBSyxDQUFHO1VBQzlDOUIsRUFBRSxDQUFDOEIsS0FBSywwRkFBaUNVLE1BQUksQ0FBQzdCLGVBQWUsQ0FBRztRQUNwRSxDQUFDLE1BQU07VUFDSFgsRUFBRSxDQUFDeUIsR0FBRyx3RUFBOEJlLE1BQUksQ0FBQzdCLGVBQWUsQ0FBRztRQUMvRDtNQUNKLENBQUMsQ0FBQztJQUNOLENBQUMsTUFBTTtNQUNIWCxFQUFFLENBQUN1QyxJQUFJLENBQUMsMkNBQTJDLENBQUM7SUFDeEQ7RUFDSjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOa4uOaIj+e7k+adn+WcuuaZr+aOp+WItuWZqFxyXG4gKiDotJ/otKPmmL7npLrmuLjmiI/nu5PmnZ/nlLvpnaLlkozog5zliKnkv6Hmga9cclxuICovXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8g5ri45oiP57uT5p2f6Z2i5p2/6IqC54K5XHJcbiAgICAgICAgZ2FtZU92ZXJQYW5lbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIua4uOaIj+e7k+adn+mdouadv+iKgueCue+8iOmcgOimgeaMgui9vUdhbWVPdmVyUGFuZWznu4Tku7bvvIlcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOi/lOWbnuS4u+iPnOWNleaMiemSru+8iOWPr+mAie+8iVxyXG4gICAgICAgIG1lbnVCdXR0b246IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIui/lOWbnuS4u+iPnOWNleaMiemSru+8iOWPr+mAie+8iVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g6YeN5paw5byA5aeL5oyJ6ZKu77yI5Y+v6YCJ77yJXHJcbiAgICAgICAgcmVzdGFydEJ1dHRvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b24sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6YeN5paw5byA5aeL5oyJ6ZKu77yI5Y+v6YCJ77yJXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDpgInmi6nlnLrmma/lkI3np7DvvIjph43mlrDlvIDlp4vml7bot7PovaznmoTlnLrmma/vvIlcclxuICAgICAgICBzZWxlY3RTY2VuZU5hbWU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogXCJTZWxlY3RTY2VuZVwiLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIumAieaLqeWcuuaZr+WQjeensO+8iOmHjeaWsOW8gOWni+aXtui3s+i9rOeahOWcuuaZr++8iVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5Li76I+c5Y2V5Zy65pmv5ZCN56ewXHJcbiAgICAgICAgbWVudVNjZW5lTmFtZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBcIk1haW5NZW51XCIsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5Li76I+c5Y2V5Zy65pmv5ZCN56ew77yI6L+U5Zue5Li76I+c5Y2V5pe26Lez6L2s55qE5Zy65pmv77yJXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyDku47lhajlsYDlr7nosaHojrflj5bmuLjmiI/nu5PmnpzvvIhCYXR0bGVDb250cm9sbGVy5Lit6K6+572u55qE5pWw5o2u77yJXHJcbiAgICAgICAgbGV0IHdpbm5lciA9IFwi5pyq55+lXCI7XHJcbiAgICAgICAgbGV0IHdpbm5lclRleHQgPSBcIuacquefpVwiO1xyXG5cclxuICAgICAgICBpZiAod2luZG93LkJhdHRsZUdhbWVSZXN1bHQpIHtcclxuICAgICAgICAgICAgd2lubmVyID0gd2luZG93LkJhdHRsZUdhbWVSZXN1bHQud2lubmVyIHx8IFwi5pyq55+lXCI7XHJcbiAgICAgICAgICAgIHdpbm5lclRleHQgPSB3aW5kb3cuQmF0dGxlR2FtZVJlc3VsdC53aW5uZXJUZXh0IHx8IFwi5pyq55+lXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g5aaC5p6c5rKh5pyJ5YWo5bGA5pWw5o2u77yM5bCd6K+V5LuO5Zy65pmv6IqC54K56I635Y+W77yI5aSH55So5pa55qGI77yJXHJcbiAgICAgICAgICAgIGNvbnN0IHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuICAgICAgICAgICAgaWYgKHNjZW5lKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlsJ3or5XlnKjlnLrmma/moLnoioLngrnmiJZDYW52YXPoioLngrnkuIrmn6Xmib5HYW1lT3ZlclNjZW5lRGF0Yee7hOS7tlxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FudmFzID0gc2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FudmFzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2FtZVJlc3VsdCA9IGNhbnZhcy5nZXRDb21wb25lbnQoXCJHYW1lT3ZlclNjZW5lRGF0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZVJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5uZXIgPSBnYW1lUmVzdWx0Lndpbm5lciB8fCBcIuacquefpVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5uZXJUZXh0ID0gZ2FtZVJlc3VsdC53aW5uZXJUZXh0IHx8IFwi5pyq55+lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5sb2coYFtHYW1lT3ZlclNjZW5lXSDliqDovb3muLjmiI/nu5PmnZ/lnLrmma/vvIzog5zliKnmlrk6ICR7d2lubmVyVGV4dH1gKTtcclxuICAgICAgICBjYy5sb2coYFtHYW1lT3ZlclNjZW5lXSBnYW1lT3ZlclBhbmVs6IqC54K5OiAke3RoaXMuZ2FtZU92ZXJQYW5lbCA/IHRoaXMuZ2FtZU92ZXJQYW5lbC5uYW1lIDogJ251bGwnfWApO1xyXG5cclxuICAgICAgICAvLyDmmL7npLrmuLjmiI/nu5PmnZ/nlLvpnaJcclxuICAgICAgICBpZiAodGhpcy5nYW1lT3ZlclBhbmVsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdhbWVPdmVyUGFuZWxDb21wID0gdGhpcy5nYW1lT3ZlclBhbmVsLmdldENvbXBvbmVudChcIkdhbWVPdmVyUGFuZWxcIik7XHJcbiAgICAgICAgICAgIGlmIChnYW1lT3ZlclBhbmVsQ29tcCkge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKGBbR2FtZU92ZXJTY2VuZV0g5om+5YiwR2FtZU92ZXJQYW5lbOe7hOS7tu+8jOWHhuWkh+aYvuekuueUu+mdomApO1xyXG4gICAgICAgICAgICAgICAgLy8g5bu26L+f5LiA5bin56Gu5L+d5Zy65pmv5a6M5YWo5Yqg6L29XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU92ZXJQYW5lbENvbXAuc2hvd0dhbWVPdmVyKHdpbm5lcik7XHJcbiAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiW0dhbWVPdmVyU2NlbmVdIGdhbWVPdmVyUGFuZWzoioLngrnmnKrmjILovb1HYW1lT3ZlclBhbmVs57uE5Lu277yBXCIpO1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCIgICDor7flnKhnYW1lT3ZlclBhbmVs6IqC54K55LiK5re75YqgR2FtZU92ZXJQYW5lbOe7hOS7tlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwiW0dhbWVPdmVyU2NlbmVdIOacquiuvue9rmdhbWVPdmVyUGFuZWzoioLngrnvvIFcIik7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwiICAg6K+35ZyoR2FtZU92ZXJTY2VuZee7hOS7tueahOWxnuaAp+ajgOafpeWZqOS4ree7keWummdhbWVPdmVyUGFuZWzoioLngrlcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDnu5HlrprmjInpkq7kuovku7bvvIhHYW1lT3ZlclNjZW5l55qE5oyJ6ZKu77yJXHJcbiAgICAgICAgaWYgKHRoaXMubWVudUJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLm1lbnVCdXR0b24ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25NZW51Q2xpY2ssIHRoaXMpO1xyXG4gICAgICAgICAgICBjYy5sb2coYFtHYW1lT3ZlclNjZW5lXSDlt7Lnu5HlrpptZW51QnV0dG9u5LqL5Lu2YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5yZXN0YXJ0QnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydEJ1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblJlc3RhcnRDbGljaywgdGhpcyk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhgW0dhbWVPdmVyU2NlbmVdIOW3sue7keWumnJlc3RhcnRCdXR0b27kuovku7ZgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWmguaenEdhbWVPdmVyUGFuZWzkuZ/mnInmjInpkq7vvIzkuZ/pnIDopoHnu5HlrprvvIjpgb/lhY3lhrLnqoHvvIlcclxuICAgICAgICBpZiAodGhpcy5nYW1lT3ZlclBhbmVsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdhbWVPdmVyUGFuZWxDb21wID0gdGhpcy5nYW1lT3ZlclBhbmVsLmdldENvbXBvbmVudChcIkdhbWVPdmVyUGFuZWxcIik7XHJcbiAgICAgICAgICAgIGlmIChnYW1lT3ZlclBhbmVsQ29tcCkge1xyXG4gICAgICAgICAgICAgICAgLy8g5aaC5p6cR2FtZU92ZXJQYW5lbOacieaMiemSru+8jOS5n+e7keWumuWIsEdhbWVPdmVyU2NlbmXnmoTmlrnms5VcclxuICAgICAgICAgICAgICAgIGlmIChnYW1lT3ZlclBhbmVsQ29tcC5yZXN0YXJ0QnV0dG9uICYmICF0aGlzLnJlc3RhcnRCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lT3ZlclBhbmVsQ29tcC5yZXN0YXJ0QnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uUmVzdGFydENsaWNrLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtHYW1lT3ZlclNjZW5lXSDlt7Lnu5HlrppHYW1lT3ZlclBhbmVs55qEcmVzdGFydEJ1dHRvbuS6i+S7tmApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGdhbWVPdmVyUGFuZWxDb21wLm1lbnVCdXR0b24gJiYgIXRoaXMubWVudUJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVPdmVyUGFuZWxDb21wLm1lbnVCdXR0b24ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25NZW51Q2xpY2ssIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0dhbWVPdmVyU2NlbmVdIOW3sue7keWumkdhbWVPdmVyUGFuZWznmoRtZW51QnV0dG9u5LqL5Lu2YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+U5Zue5Li76I+c5Y2VXHJcbiAgICAgKi9cclxuICAgIG9uTWVudUNsaWNrKCkge1xyXG4gICAgICAgIGNjLmxvZyhgW0dhbWVPdmVyU2NlbmVdIOi/lOWbnuS4u+iPnOWNle+8jOWcuuaZr+WQjeensDogJHt0aGlzLm1lbnVTY2VuZU5hbWV9YCk7XHJcbiAgICAgICAgaWYgKHRoaXMubWVudVNjZW5lTmFtZSkge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5tZW51U2NlbmVOYW1lLCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbR2FtZU92ZXJTY2VuZV0g5Yqg6L295Li76I+c5Y2V5Zy65pmv5aSx6LSlOiAke2Vycm9yfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbR2FtZU92ZXJTY2VuZV0g6K+35qOA5p+l5Zy65pmv5ZCN56ew5piv5ZCm5q2j56GuOiAke3RoaXMubWVudVNjZW5lTmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbR2FtZU92ZXJTY2VuZV0g5oiQ5Yqf5Yqg6L295Li76I+c5Y2V5Zy65pmvOiAke3RoaXMubWVudVNjZW5lTmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIltHYW1lT3ZlclNjZW5lXSDmnKrorr7nva5tZW51U2NlbmVOYW1l77yM5peg5rOV6L+U5Zue5Li76I+c5Y2VXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDph43mlrDlvIDlp4tcclxuICAgICAqL1xyXG4gICAgb25SZXN0YXJ0Q2xpY2soKSB7XHJcbiAgICAgICAgY2MubG9nKGBbR2FtZU92ZXJTY2VuZV0g6YeN5paw5byA5aeL5ri45oiP77yM6Lez6L2s5Yiw6YCJ5oup5Zy65pmvOiAke3RoaXMuc2VsZWN0U2NlbmVOYW1lfWApO1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdFNjZW5lTmFtZSkge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5zZWxlY3RTY2VuZU5hbWUsIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtHYW1lT3ZlclNjZW5lXSDliqDovb3pgInmi6nlnLrmma/lpLHotKU6ICR7ZXJyb3J9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtHYW1lT3ZlclNjZW5lXSDor7fmo4Dmn6XlnLrmma/lkI3np7DmmK/lkKbmraPnoa46ICR7dGhpcy5zZWxlY3RTY2VuZU5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0dhbWVPdmVyU2NlbmVdIOaIkOWKn+WKoOi9vemAieaLqeWcuuaZrzogJHt0aGlzLnNlbGVjdFNjZW5lTmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIltHYW1lT3ZlclNjZW5lXSDmnKrorr7nva5zZWxlY3RTY2VuZU5hbWXvvIzml6Dms5Xph43mlrDlvIDlp4tcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbiJdfQ==