/**
 * 大招技能按钮组件
 * 点击角色时释放大招
 */
cc.Class({
    extends: cc.Component,

    properties: {
        // 是否启用点击释放大招
        enableClick: {
            default: true,
            tooltip: "是否启用点击释放大招"
        }
    },

    onLoad() {
        // 添加点击事件监听
        if (this.enableClick) {
            // 确保节点可以接收触摸事件
            if (!this.node.getComponent(cc.Button)) {
                // 如果没有Button组件，添加触摸事件监听
                this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
                cc.log(`[UltimateSkillButton] ${this.node.name} 已添加触摸事件监听`);
            } else {
                // 如果有Button组件，使用Button的点击事件
                const button = this.node.getComponent(cc.Button);
                button.node.on('click', this.onClick, this);
                cc.log(`[UltimateSkillButton] ${this.node.name} 使用Button组件的点击事件`);
            }
        }
    },

    onDestroy() {
        // 移除事件监听
        this.node.off(cc.Node.EventType.TOUCH_END, this.onClick, this);
    },

    /**
     * 点击事件处理
     */
    onClick(event) {
        cc.log(`[UltimateSkillButton] ${this.node.name} 被点击，尝试释放大招`);

        // 检查角色是否已死亡
        const stats = this.node.getComponent("StatsComponent");
        if (stats && stats.isDead()) {
            cc.log(`[UltimateSkillButton] ${this.node.name} 已死亡，禁止释放大招`);
            return;
        }

        // 检查是否正在回放，如果是则禁用大招释放
        if (this._isReplaying()) {
            cc.log(`[UltimateSkillButton] ${this.node.name} 正在回放中，禁用大招释放`);
            return;
        }

        const SkillSystem = require("SkillSystem");
        const TeamRef = require("TeamRef");
        const TeamComponent = require("TeamComponent");

        // 检查是否可以释放大招
        if (!SkillSystem.canUseUltimateSkill(this.node)) {
            cc.log(`[UltimateSkillButton] ${this.node.name} 怒气值不足，无法释放大招`);
            return;
        }

        cc.log(`[UltimateSkillButton] ${this.node.name} 可以释放大招，继续执行...`);

        // 获取目标
        const teamComp = this.node.getComponent("TeamComponent");
        if (!teamComp) return;

        const enemies = teamComp.team === "hero"
            ? TeamRef.monstersRef
            : TeamRef.herosRef;

        const target = enemies.find(e => {
            const s = e.getComponent("StatsComponent");
            return s && !s.isDead();
        });

        if (!target) {
            cc.log(`${this.node.name} 没有可攻击的目标`);
            return;
        }

        // 释放大招
        const log = (msg) => cc.log(msg);
        const rand = Math.random;
        SkillSystem.useUltimateSkill(this.node, target, log, rand);
    },

    /**
     * 检查是否正在回放
     * @private
     * @returns {boolean} 是否正在回放
     */
    _isReplaying() {
        // 方法1: 通过BattleController检查
        const scene = cc.director.getScene();
        if (scene) {
            const canvas = scene.getChildByName("Canvas");
            if (canvas) {
                // 尝试在Canvas节点上查找BattleController
                let battleController = canvas.getComponent("BattleController");
                if (!battleController) {
                    // 尝试在子节点中查找
                    const battleControllerNode = canvas.getChildByName("BattleController");
                    if (battleControllerNode) {
                        battleController = battleControllerNode.getComponent("BattleController");
                    }
                }

                if (battleController && battleController.isReplaying) {
                    return true;
                }
            }
        }

        // 方法2: 通过ReplayController检查
        if (scene) {
            const canvas = scene.getChildByName("Canvas");
            if (canvas) {
                const replayNode = canvas.getChildByName("ReplayController");
                if (replayNode) {
                    const replayController = replayNode.getComponent("ReplayController");
                    if (replayController && replayController.replayer && replayController.replayer.isReplaying) {
                        return true;
                    }
                }
            }
        }

        return false;
    }
});

