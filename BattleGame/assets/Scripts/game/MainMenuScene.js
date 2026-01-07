/**
 * 主菜单场景控制器
 * 负责显示主菜单和导航到其他场景
 */
cc.Class({
    extends: cc.Component,

    properties: {
        // 开始游戏按钮
        startButton: {
            default: null,
            type: cc.Button,
            tooltip: "开始游戏按钮"
        },

        // 选择场景名称
        selectSceneName: {
            default: "SelectScene",
            tooltip: "选择场景名称（开始游戏时跳转的场景）"
        }
    },

    onLoad() {
        cc.log("[MainMenuScene] 主菜单场景已加载");

        // 绑定开始游戏按钮事件
        if (this.startButton) {
            this.startButton.node.on(cc.Node.EventType.TOUCH_END, this.onStartClick, this);
            cc.log(`[MainMenuScene] 已绑定startButton事件`);
        } else {
            cc.warn("[MainMenuScene] 未设置startButton，请在主菜单场景中绑定开始游戏按钮");
        }
    },

    /**
     * 开始游戏按钮点击事件
     */
    onStartClick() {
        cc.log(`[MainMenuScene] 开始游戏，场景名称: ${this.selectSceneName}`);
        if (this.selectSceneName) {
            cc.director.loadScene(this.selectSceneName, (error) => {
                if (error) {
                    cc.error(`[MainMenuScene] 加载选择场景失败: ${error}`);
                    cc.error(`[MainMenuScene] 请检查场景名称是否正确: ${this.selectSceneName}`);
                    cc.error(`[MainMenuScene] 请确保场景文件存在于项目中`);
                } else {
                    cc.log(`[MainMenuScene] 成功加载选择场景: ${this.selectSceneName}`);
                }
            });
        } else {
            cc.warn("[MainMenuScene] 未设置selectSceneName，无法开始游戏");
        }
    }
});

