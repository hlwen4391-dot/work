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
    }
});

