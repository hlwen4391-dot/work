/**
 * 选择场景控制器
 * 负责显示选择界面（可以选择关卡、角色等）
 */
cc.Class({
    extends: cc.Component,

    properties: {
        // 选择场景UI组件
        selectSceneUI: {
            default: null,
            type: cc.Node,
            tooltip: "选择场景UI节点（需要挂载SelectSceneUI组件）"
        },

        // 返回主菜单按钮（可选）
        backButton: {
            default: null,
            type: cc.Button,
            tooltip: "返回主菜单按钮（可选）"
        },

        // 开始战斗按钮（可选）
        startBattleButton: {
            default: null,
            type: cc.Button,
            tooltip: "开始战斗按钮（可选）"
        },

        // 主菜单场景名称
        menuSceneName: {
            default: "MainMenu",
            tooltip: "主菜单场景名称（返回主菜单时跳转的场景）"
        },

        // 战斗场景名称
        battleSceneName: {
            default: "BattleScene",
            tooltip: "战斗场景名称（开始战斗时跳转的场景）"
        }
    },

    onLoad() {
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
            cc.log(`[SelectScene] 已绑定backButton事件`);
        }

        // 绑定开始战斗按钮事件
        if (this.startBattleButton) {
            this.startBattleButton.node.on(cc.Node.EventType.TOUCH_END, this.onStartBattleClick, this);
            cc.log(`[SelectScene] 已绑定startBattleButton事件`);
        } else {
            cc.warn("[SelectScene] 未设置startBattleButton，请在选择场景中绑定开始战斗按钮");
        }
    },

    /**
     * 返回主菜单按钮点击事件
     */
    onBackClick() {
        cc.log(`[SelectScene] 返回主菜单，场景名称: ${this.menuSceneName}`);
        if (this.menuSceneName) {
            cc.director.loadScene(this.menuSceneName, (error) => {
                if (error) {
                    cc.error(`[SelectScene] 加载主菜单场景失败: ${error}`);
                    cc.error(`[SelectScene] 请检查场景名称是否正确: ${this.menuSceneName}`);
                } else {
                    cc.log(`[SelectScene] 成功加载主菜单场景: ${this.menuSceneName}`);
                }
            });
        } else {
            cc.warn("[SelectScene] 未设置menuSceneName，无法返回主菜单");
        }
    },

    /**
     * 开始战斗按钮点击事件
     */
    onStartBattleClick() {
        // 检查是否有选中的单位
        if (!this.selectSceneUIComp || !this.selectSceneUIComp.hasSelectedUnits()) {
            cc.warn("[SelectScene] 请至少选择一个英雄或怪物");
            return;
        }

        // 获取选中的单位列表
        const selectedUnits = this.selectSceneUIComp.getSelectedUnits();
        cc.log(`[SelectScene] 选中的单位 - 英雄: ${selectedUnits.heros.length}个, 怪物: ${selectedUnits.monsters.length}个`);

        // 将选中的单位数据保存到全局对象，供BattleController使用
        window.SelectedUnits = selectedUnits;
        cc.log(`[SelectScene] 已保存选中的单位数据到 window.SelectedUnits`);

        // 跳转到战斗场景
        cc.log(`[SelectScene] 开始战斗，场景名称: ${this.battleSceneName}`);
        if (this.battleSceneName) {
            cc.director.loadScene(this.battleSceneName, (error) => {
                if (error) {
                    cc.error(`[SelectScene] 加载战斗场景失败: ${error}`);
                    cc.error(`[SelectScene] 请检查场景名称是否正确: ${this.battleSceneName}`);
                    cc.error(`[SelectScene] 请确保场景文件存在于项目中`);
                } else {
                    cc.log(`[SelectScene] 成功加载战斗场景: ${this.battleSceneName}`);
                }
            });
        } else {
            cc.warn("[SelectScene] 未设置battleSceneName，无法开始战斗");
        }
    }
});

