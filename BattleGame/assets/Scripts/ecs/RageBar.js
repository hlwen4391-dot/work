/**
 * 怒气条组件
 * 负责显示单位的怒气值
 */
cc.Class({
    extends: cc.Component,

    properties: {
        // ProgressBar方式（推荐）
        rageProgress: {
            default: null,
            type: cc.ProgressBar,
            tooltip: "怒气条进度条组件(如果使用ProgressBar)"
        },

        // Sprite填充方式（备用）
        rageFill: {
            default: null,
            type: cc.Sprite,
            tooltip: "怒气条填充精灵(如果不使用ProgressBar)"
        }
    },

    onLoad() {
        // 如果使用Sprite方式，保存原始宽度
        if (this.rageFill) {
            this._originalWidth = this.rageFill.node.width;
            // 初始化怒气条为空（宽度为0）
            this.rageFill.node.width = 0;
        }

        // 如果使用ProgressBar方式，初始化进度为0
        if (this.rageProgress) {
            this.rageProgress.progress = 0;
        }
    },

    /**
     * 更新怒气条显示
     * @param {number} rage - 当前怒气值（不超过maxRage）
     * @param {number} maxRage - 最大怒气值
     */
    updateRage(rage, maxRage) {
        if (maxRage <= 0) return;

        // 计算百分比，限制在0-100%之间
        const percent = Math.max(0, Math.min(1, rage / maxRage));

        // 优先使用ProgressBar
        if (this.rageProgress) {
            this.rageProgress.progress = percent;
        }
        // 否则使用Sprite宽度方式
        else if (this.rageFill) {
            // Sprite方式：宽度最大不超过原始宽度（100%）
            this.rageFill.node.width = this._originalWidth * percent;
        }
    }
});

