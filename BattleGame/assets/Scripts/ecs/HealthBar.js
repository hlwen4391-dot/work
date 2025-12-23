
// cc.Class({
//     extends: cc.Component,

//     properties: {
//         barFG: cc.Node

//     },

//     init(entity) {
//         this.entity = entity;
//         this.stats = entity.getComponent("StatsComponent");
//     },

//     update() {
//         if (!this.entity || !this.stats) return;

//         let worldPos = this.entity.convertToWorldSpaceAR(cc.v2(0, 70));//转换为世界坐标
//         let localPos = this.node.parent.convertToNodeSpaceAR(worldPos);//转换为本地坐标
//         this.node.setPosition(localPos);

//         let p = this.stats.hp / this.stats.maxHp;//计算血量百分比
//         p = Math.max(0, Math.min(1, p));
//         this.barFG.scaleX = p;//设置血条长度

//         this.node.active = p > 0;//设置血条可见性
//     }


// });

// module.exports = HealthBar;

/**
 * 血条组件
 * 负责显示单位的血量和伤害数字
 */
cc.Class({
    extends: cc.Component,

    properties: {
        // ProgressBar方式（推荐）
        healthProgress: {
            default: null,
            type: cc.ProgressBar,
            tooltip: "血条进度条组件(如果使用ProgressBar)"
        },

        // Sprite填充方式（备用）
        healthFill: {
            default: null,
            type: cc.Sprite,
            tooltip: "血条填充精灵(如果不使用ProgressBar)"
        },

        // 伤害数字标签
        damageLabel: {
            default: null,
            type: cc.Label,
            tooltip: "显示伤害数字的标签"
        },

        // 伤害数字显示时间
        damageDisplayTime: 1.0
    },

    onLoad() {
        // 如果使用Sprite方式，保存原始宽度
        if (this.healthFill) {
            this._originalWidth = this.healthFill.node.width;
        }

        // 隐藏伤害标签
        if (this.damageLabel) {
            this.damageLabel.node.active = false;
        }
    },

    /**
     * 更新血条显示
     * @param {number} hp - 当前生命值
     * @param {number} maxHp - 最大生命值
     */
    updateHealth(hp, maxHp) {
        if (maxHp <= 0) return;

        const percent = Math.max(0, Math.min(1, hp / maxHp));

        // 优先使用ProgressBar
        if (this.healthProgress) {
            this.healthProgress.progress = percent;
        }
        // 否则使用Sprite宽度方式
        else if (this.healthFill) {
            this.healthFill.node.width = this._originalWidth * percent;
        }
    },

    /**
     * 显示伤害数字
     * @param {number} value - 伤害值
     */
    showDamage(value) {
        if (!this.damageLabel) return;

        this.damageLabel.string = "-" + Math.floor(value);
        this.damageLabel.node.active = true;

        // 可以添加一个简单的向上飘动画
        const startY = this.damageLabel.node.y;
        cc.tween(this.damageLabel.node)
            .to(this.damageDisplayTime, { y: startY + 30, opacity: 0 })
            .call(() => {
                this.damageLabel.node.active = false;
                this.damageLabel.node.y = startY;
                this.damageLabel.node.opacity = 255;
            })
            .start();
    }
});