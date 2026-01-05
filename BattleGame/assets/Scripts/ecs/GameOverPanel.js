/**
 * 游戏结束面板组件
 * 显示游戏结束画面和胜利信息
 */
cc.Class({
    extends: cc.Component,

    properties: {
        // 游戏结束面板背景
        panelBg: {
            default: null,
            type: cc.Node,
            tooltip: "游戏结束面板背景节点"
        },

        // 胜利文本标签
        winnerLabel: {
            default: null,
            type: cc.Label,
            tooltip: "显示胜利方的文本标签"
        },

        // 游戏结束文本标签
        gameOverLabel: {
            default: null,
            type: cc.Label,
            tooltip: "显示'游戏结束'的文本标签"
        },

        // 重新开始按钮（可选）
        restartButton: {
            default: null,
            type: cc.Button,
            tooltip: "重新开始按钮（可选）"
        },

        // 返回主菜单按钮（可选）
        menuButton: {
            default: null,
            type: cc.Button,
            tooltip: "返回主菜单按钮（可选）"
        },

        // 回放按钮（可选）
        replayButton: {
            default: null,
            type: cc.Button,
            tooltip: "回放按钮（可选）"
        },

        // 显示动画持续时间
        showDuration: {
            default: 0.5,
            tooltip: "面板显示动画持续时间（秒）"
        }
    },

    onLoad() {
        // 初始隐藏面板（确保完全隐藏）
        if (this.panelBg) {
            this.panelBg.active = false;
            this.panelBg.opacity = 0;
            this.panelBg.scale = 0.5;
        }

        // 确保按钮一开始就显示（在场景加载时就显示，不受panelBg影响）
        this._ensureButtonVisible(this.restartButton, "restartButton");
        this._ensureButtonVisible(this.menuButton, "menuButton");
        this._ensureButtonVisible(this.replayButton, "replayButton");

        // 标记是否已显示（防止重复显示）
        this._isShown = false;

        // 绑定按钮事件
        if (this.restartButton) {
            this.restartButton.node.on(cc.Node.EventType.TOUCH_END, this.onRestartClick, this);
        }

        if (this.menuButton) {
            this.menuButton.node.on(cc.Node.EventType.TOUCH_END, this.onMenuClick, this);
        }

        if (this.replayButton) {
            this.replayButton.node.on(cc.Node.EventType.TOUCH_END, this.onReplayClick, this);
        }
    },

    /**
     * 显示游戏结束画面
     * @param {string} winner - 胜利方名称（"hero" 或 "monster"）
     */
    showGameOver(winner) {
        cc.log(`[GameOverPanel] ===== 开始显示游戏结束画面 =====`);
        cc.log(`[GameOverPanel] winner参数: ${winner}`);
        cc.log(`[GameOverPanel] panelBg节点: ${this.panelBg ? this.panelBg.name : 'null'}`);
        cc.log(`[GameOverPanel] panelBg.active: ${this.panelBg ? this.panelBg.active : 'N/A'}`);

        // 防止重复显示
        if (this._isShown) {
            cc.log("[GameOverPanel] 游戏结束画面已显示，跳过重复调用");
            return;
        }

        if (!this.panelBg) {
            cc.error("[GameOverPanel] 未设置 panelBg 节点！");
            cc.error("   请在GameOverPanel组件的属性检查器中绑定panelBg节点");
            return;
        }

        // 确定胜利方显示文本
        let winnerText = "";
        if (winner === "hero" || winner === "英雄") {
            winnerText = "英雄";
        } else if (winner === "monster" || winner === "怪物") {
            winnerText = "怪物";
        } else {
            winnerText = winner || "未知";
        }

        // 更新文本标签
        if (this.winnerLabel) {
            this.winnerLabel.string = `${winnerText}胜利！`;
        }

        if (this.gameOverLabel) {
            this.gameOverLabel.string = "游戏结束";
        }

        // 标记已显示
        this._isShown = true;

        // 显示面板（带动画）
        cc.log(`[GameOverPanel] 设置panelBg.active = true`);
        this.panelBg.active = true;
        this.panelBg.scale = 0.5;
        this.panelBg.opacity = 0;

        // 确保按钮一直显示（不受panelBg动画影响，且不会消失）
        this._ensureButtonVisible(this.restartButton, "restartButton");
        this._ensureButtonVisible(this.menuButton, "menuButton");
        this._ensureButtonVisible(this.replayButton, "replayButton");

        // 确保面板在最上层（设置到场景最上层）
        if (this.panelBg.parent) {
            this.panelBg.setSiblingIndex(this.panelBg.parent.children.length - 1);
            cc.log(`[GameOverPanel] 面板层级已设置到最上层`);
        }

        // 确保面板可见（设置颜色alpha）
        this.panelBg.color = new cc.Color(255, 255, 255, 255);

        // 淡入和缩放动画（完成后保持显示，不会消失）
        cc.log(`[GameOverPanel] 开始播放显示动画`);
        cc.tween(this.panelBg)
            .to(this.showDuration, {
                opacity: 255,
                scale: 1.0
            }, {
                easing: 'backOut'
            })
            .call(() => {
                // 动画完成后，确保面板保持显示状态
                this.panelBg.opacity = 255;
                this.panelBg.scale = 1.0;

                // 再次确保按钮一直显示（防止任何意外隐藏）
                this._ensureButtonVisible(this.restartButton, "restartButton");
                this._ensureButtonVisible(this.menuButton, "menuButton");
                this._ensureButtonVisible(this.replayButton, "replayButton");

                cc.log(`[GameOverPanel] 显示动画完成，面板和按钮应该已显示并保持可见`);
            })
            .start();

        cc.log(`[GameOverPanel] 显示游戏结束画面：${winnerText}胜利`);
        cc.log(`[GameOverPanel] panelBg最终状态: active=${this.panelBg.active}, opacity=${this.panelBg.opacity}, scale=${this.panelBg.scale}`);
    },

    /**
     * 隐藏游戏结束画面
     */
    hideGameOver() {
        if (this.panelBg) {
            cc.tween(this.panelBg)
                .to(0.3, {
                    opacity: 0,
                    scale: 0.5
                })
                .call(() => {
                    this.panelBg.active = false;
                })
                .start();
        }
    },

    /**
     * 重新开始按钮点击事件
     */
    onRestartClick() {
        cc.log("[GameOverPanel] 重新开始游戏");
        // 重新加载当前场景
        cc.director.loadScene(cc.director.getScene().name);
    },

    /**
     * 返回主菜单按钮点击事件
     */
    onMenuClick() {
        cc.log("[GameOverPanel] 返回主菜单");
        // 这里可以加载主菜单场景
        // cc.director.loadScene("MainMenu");
    },

    /**
     * 回放按钮点击事件
     * 如果当前在GameOverScene，则跳转回BattleScene并自动开始回放
     * 如果当前在BattleScene，则直接开始回放
     */
    onReplayClick() {
        cc.log("[GameOverPanel] 开始回放战斗");

        // 从全局获取最后一场战斗的记录键
        const recordKey = window.LastBattleRecordKey;
        if (!recordKey) {
            cc.error("[GameOverPanel] 未找到战斗记录，无法回放");
            cc.error("   请确保战斗记录已保存（战斗结束后会自动保存）");
            return;
        }

        // 检查当前场景名称
        const currentScene = cc.director.getScene();
        const currentSceneName = currentScene ? currentScene.name : "";

        cc.log(`[GameOverPanel] 当前场景: ${currentSceneName}`);

        // 如果当前在GameOverScene，需要跳转回BattleScene
        if (currentSceneName === "GameOverScene" || currentSceneName.includes("GameOver")) {
            cc.log(`[GameOverPanel] 检测到在GameOverScene，准备跳转回BattleScene并开始回放`);

            // 设置全局标志，告诉BattleScene需要自动开始回放
            window.AutoStartReplay = {
                recordKey: recordKey,
                enabled: true
            };

            // 跳转回BattleScene
            const battleSceneName = "BattleScene"; // 默认战斗场景名称
            cc.director.loadScene(battleSceneName, (error) => {
                if (error) {
                    cc.error(`[GameOverPanel] 加载战斗场景失败: ${error}`);
                    cc.error(`[GameOverPanel] 请检查场景名称是否正确: ${battleSceneName}`);
                } else {
                    cc.log(`[GameOverPanel] 成功加载战斗场景: ${battleSceneName}`);
                    cc.log(`[GameOverPanel] BattleScene加载后会自动开始回放`);
                }
            });
        } else {
            // 当前在BattleScene，直接开始回放
            cc.log(`[GameOverPanel] 检测到在BattleScene，直接开始回放`);

            // 获取BattleController和单位列表
            const scene = cc.director.getScene();
            let battleController = null;
            let heros = [];
            let monsters = [];

            // 查找BattleController
            if (scene) {
                const canvas = scene.getChildByName("Canvas");
                if (canvas) {
                    battleController = canvas.getComponent("BattleController");
                    if (battleController) {
                        heros = battleController.heros || [];
                        monsters = battleController.monsters || [];
                    }
                }
            }

            // 如果找不到BattleController，尝试从场景中查找
            if (!battleController) {
                const allNodes = scene.children;
                for (let node of allNodes) {
                    const bc = node.getComponent("BattleController");
                    if (bc) {
                        battleController = bc;
                        heros = bc.heros || [];
                        monsters = bc.monsters || [];
                        break;
                    }
                }
            }

            // 获取ReplayController
            let replayController = null;
            if (battleController && battleController.replayController) {
                replayController = battleController.replayController.getComponent("ReplayController");
            } else {
                // 尝试从场景中查找ReplayController
                const canvas = scene.getChildByName("Canvas");
                if (canvas) {
                    const replayNode = canvas.getChildByName("ReplayController");
                    if (replayNode) {
                        replayController = replayNode.getComponent("ReplayController");
                    }
                }
            }

            if (replayController) {
                cc.log(`[GameOverPanel] 找到ReplayController，准备开始回放`);
                // 使用ReplayController加载并回放
                replayController.loadAndReplay(recordKey, heros, monsters);
                cc.log(`[GameOverPanel] 开始回放战斗记录: ${recordKey}`);
            } else {
                cc.error("[GameOverPanel] 未找到ReplayController组件，无法回放");
                cc.error("   请在BattleScene中添加ReplayController节点并挂载ReplayController组件");
                cc.error("   或者在BattleController中绑定replayController属性");
            }
        }
    },

    /**
     * 确保按钮完全可见
     * @private
     * @param {cc.Button} button - 按钮组件
     * @param {string} buttonName - 按钮名称（用于日志）
     */
    _ensureButtonVisible(button, buttonName) {
        if (!button || !button.node) {
            return;
        }

        const node = button.node;

        // 1. 确保节点激活
        node.active = true;

        // 2. 确保透明度为255（完全不透明）
        node.opacity = 255;

        // 3. 确保缩放为1（正常大小）
        node.scale = 1;

        // 4. 确保节点颜色不透明
        node.color = new cc.Color(255, 255, 255, 255);

        // 5. 确保Button组件启用
        if (button) {
            button.enabled = true;
            button.interactable = true;
        }

        // 6. 确保Button的过渡状态正常
        if (button && button.transition !== cc.Button.Transition.NONE) {
            // 确保按钮处于正常状态
            button.node.color = new cc.Color(255, 255, 255, 255);
        }

        // 7. 检查并设置按钮内部的Sprite组件（如果有）
        const sprite = node.getComponent(cc.Sprite);
        if (sprite) {
            sprite.enabled = true;
            sprite.node.active = true;
            sprite.node.opacity = 255;
            sprite.node.color = new cc.Color(255, 255, 255, 255);
        }

        // 8. 检查并设置按钮内部的Label组件（如果有）
        const label = node.getComponentInChildren(cc.Label);
        if (label && label.node) {
            label.node.active = true;
            label.node.opacity = 255;
            // 设置按钮文字颜色为黑色
            label.node.color = cc.Color.BLACK;
        }

        // 9. 确保按钮在面板之上（层级）
        if (node.parent) {
            node.setSiblingIndex(node.parent.children.length - 1);
        }

        // 10. 确保按钮可以接收触摸事件
        const buttonComp = node.getComponent(cc.Button);
        if (buttonComp) {
            buttonComp.interactable = true;
        }

        cc.log(`[GameOverPanel] ${buttonName}已确保完全可见: active=${node.active}, opacity=${node.opacity}, scale=${node.scale}, color=${node.color.toString()}`);
    }
});

