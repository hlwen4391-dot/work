/**
 * 游戏结束场景控制器
 * 负责显示游戏结束画面和胜利信息
 */
cc.Class({
    extends: cc.Component,

    properties: {
        // 游戏结束面板节点
        gameOverPanel: {
            default: null,
            type: cc.Node,
            tooltip: "游戏结束面板节点（需要挂载GameOverPanel组件）"
        },

        // 返回主菜单按钮（可选）
        menuButton: {
            default: null,
            type: cc.Button,
            tooltip: "返回主菜单按钮（可选）"
        },

        // 重新开始按钮（可选）
        restartButton: {
            default: null,
            type: cc.Button,
            tooltip: "重新开始按钮（可选）"
        },

        // 战斗场景名称
        battleSceneName: {
            default: "BattleScene",
            tooltip: "战斗场景名称（重新开始时跳转的场景）"
        },

        // 主菜单场景名称
        menuSceneName: {
            default: "MainMenu",
            tooltip: "主菜单场景名称（返回主菜单时跳转的场景）"
        }
    },

    onLoad() {
        // 从全局对象获取游戏结果（BattleController中设置的数据）
        let winner = "未知";
        let winnerText = "未知";

        if (window.BattleGameResult) {
            winner = window.BattleGameResult.winner || "未知";
            winnerText = window.BattleGameResult.winnerText || "未知";
        } else {
            // 如果没有全局数据，尝试从场景节点获取（备用方案）
            const scene = cc.director.getScene();
            if (scene) {
                // 尝试在场景根节点或Canvas节点上查找GameOverSceneData组件
                const canvas = scene.getChildByName("Canvas");
                if (canvas) {
                    const gameResult = canvas.getComponent("GameOverSceneData");
                    if (gameResult) {
                        winner = gameResult.winner || "未知";
                        winnerText = gameResult.winnerText || "未知";
                    }
                }
            }
        }

        cc.log(`[GameOverScene] 加载游戏结束场景，胜利方: ${winnerText}`);
        cc.log(`[GameOverScene] gameOverPanel节点: ${this.gameOverPanel ? this.gameOverPanel.name : 'null'}`);

        // 显示游戏结束画面
        if (this.gameOverPanel) {
            const gameOverPanelComp = this.gameOverPanel.getComponent("GameOverPanel");
            if (gameOverPanelComp) {
                cc.log(`[GameOverScene] 找到GameOverPanel组件，准备显示画面`);
                // 延迟一帧确保场景完全加载
                this.scheduleOnce(() => {
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
            cc.log(`[GameOverScene] 已绑定menuButton事件`);
        }

        if (this.restartButton) {
            this.restartButton.node.on(cc.Node.EventType.TOUCH_END, this.onRestartClick, this);
            cc.log(`[GameOverScene] 已绑定restartButton事件`);
        }

        // 如果GameOverPanel也有按钮，也需要绑定（避免冲突）
        if (this.gameOverPanel) {
            const gameOverPanelComp = this.gameOverPanel.getComponent("GameOverPanel");
            if (gameOverPanelComp) {
                // 如果GameOverPanel有按钮，也绑定到GameOverScene的方法
                if (gameOverPanelComp.restartButton && !this.restartButton) {
                    gameOverPanelComp.restartButton.node.on(cc.Node.EventType.TOUCH_END, this.onRestartClick, this);
                    cc.log(`[GameOverScene] 已绑定GameOverPanel的restartButton事件`);
                }
                if (gameOverPanelComp.menuButton && !this.menuButton) {
                    gameOverPanelComp.menuButton.node.on(cc.Node.EventType.TOUCH_END, this.onMenuClick, this);
                    cc.log(`[GameOverScene] 已绑定GameOverPanel的menuButton事件`);
                }
            }
        }
    },

    /**
     * 返回主菜单
     */
    onMenuClick() {
        cc.log(`[GameOverScene] 返回主菜单，场景名称: ${this.menuSceneName}`);
        if (this.menuSceneName) {
            cc.director.loadScene(this.menuSceneName, (error) => {
                if (error) {
                    cc.error(`[GameOverScene] 加载主菜单场景失败: ${error}`);
                    cc.error(`[GameOverScene] 请检查场景名称是否正确: ${this.menuSceneName}`);
                } else {
                    cc.log(`[GameOverScene] 成功加载主菜单场景: ${this.menuSceneName}`);
                }
            });
        } else {
            cc.warn("[GameOverScene] 未设置menuSceneName，无法返回主菜单");
        }
    },

    /**
     * 重新开始
     */
    onRestartClick() {
        cc.log(`[GameOverScene] 重新开始游戏，场景名称: ${this.battleSceneName}`);
        if (this.battleSceneName) {
            cc.director.loadScene(this.battleSceneName, (error) => {
                if (error) {
                    cc.error(`[GameOverScene] 加载战斗场景失败: ${error}`);
                    cc.error(`[GameOverScene] 请检查场景名称是否正确: ${this.battleSceneName}`);
                } else {
                    cc.log(`[GameOverScene] 成功加载战斗场景: ${this.battleSceneName}`);
                }
            });
        } else {
            cc.warn("[GameOverScene] 未设置battleSceneName，无法重新开始");
        }
    }
});

