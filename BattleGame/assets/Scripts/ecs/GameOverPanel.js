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

        // 显示动画持续时间
        showDuration: {
            default: 0.5,
            tooltip: "面板显示动画持续时间（秒）"
        }
    },

    onLoad() {
        // 初始隐藏面板
        if (this.panelBg) {
            this.panelBg.active = false;
            this.panelBg.opacity = 0;
        }

        // 绑定按钮事件
        if (this.restartButton) {
            this.restartButton.node.on(cc.Node.EventType.TOUCH_END, this.onRestartClick, this);
        }

        if (this.menuButton) {
            this.menuButton.node.on(cc.Node.EventType.TOUCH_END, this.onMenuClick, this);
        }
    },

    /**
     * 显示游戏结束画面
     * @param {string} winner - 胜利方名称（"hero" 或 "monster"）
     */
    showGameOver(winner) {
        if (!this.panelBg) {
            cc.error("[GameOverPanel] 未设置 panelBg 节点");
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

        // 显示面板（带动画）
        this.panelBg.active = true;
        this.panelBg.scale = 0.5;
        this.panelBg.opacity = 0;

        // 淡入和缩放动画
        cc.tween(this.panelBg)
            .to(this.showDuration, {
                opacity: 255,
                scale: 1.0
            }, {
                easing: 'backOut'
            })
            .start();

        cc.log(`[GameOverPanel] 显示游戏结束画面：${winnerText}胜利`);
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
    }
});

