"use strict";
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