
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
     * @param {string} type - 伤害类型: 'normal'(普通), 'crit'(暴击), 'miss'(闪避), 'heal'(治疗)
     */
    showDamage(value, type = 'normal') {
        if (!this.damageLabel) return;

        // 保存初始状态
        const startY = this.damageLabel.node.y;
        const startScale = this.damageLabel.node.scale;

        // 根据伤害类型设置样式
        switch (type) {
            case 'crit':  // 暴击
                this.damageLabel.string = "-" + Math.floor(value);
                this.damageLabel.node.color = cc.color(255, 69, 0);  // 橙红色
                this.damageLabel.node.scale = 1.5;  // 更大
                this._playFloatAnimation(startY, startScale, 50, 1.2, true);  // 更高、更慢、震动
                break;

            case 'miss':  // 闪避
                this.damageLabel.string = "MISS!";
                this.damageLabel.node.color = cc.color(150, 150, 150);  // 灰色
                this.damageLabel.node.scale = 1.0;
                this._playFloatAnimation(startY, startScale, 20, 1.0, false);
                break;

            case 'heal':  // 治疗
                this.damageLabel.string = "+" + Math.floor(value);
                this.damageLabel.node.color = cc.color(50, 205, 50);  // 绿色
                this.damageLabel.node.scale = 1.2;
                this._playFloatAnimation(startY, startScale, 40, 1.0, false);
                break;

            case 'normal':  // 普通伤害
            default:
                this.damageLabel.string = "-" + Math.floor(value);
                this.damageLabel.node.color = cc.color(255, 255, 255);  // 白色
                this.damageLabel.node.scale = 1.0;
                this._playFloatAnimation(startY, startScale, 30, 1.0, false);
                break;
        }

        this.damageLabel.node.active = true;
    },

    /**
     * 播放飘字动画
     * @param {number} startY - 起始Y坐标
     * @param {number} startScale - 起始缩放
     * @param {number} floatHeight - 飘动高度
     * @param {number} duration - 持续时间
     * @param {boolean} shake - 是否震动
     * @private
     */
    _playFloatAnimation(startY, startScale, floatHeight, duration, shake) {
        const node = this.damageLabel.node;

        let tween = cc.tween(node);

        if (shake) {
            // 暴击特效：震动 + 飘动 + 淡出
            tween
                .to(0.1, { scale: startScale * 1.2 }, { easing: 'backOut' })
                .to(0.1, { scale: startScale })
                .parallel(
                    cc.tween().to(duration, { y: startY + floatHeight }),
                    cc.tween().to(duration, { opacity: 0 })
                )
                .call(() => {
                    this._resetLabel(startY, startScale);
                })
                .start();
        } else {
            // 普通飘字：飘动 + 淡出
            tween
                .parallel(
                    cc.tween().to(duration, { y: startY + floatHeight }),
                    cc.tween().to(duration, { opacity: 0 })
                )
                .call(() => {
                    this._resetLabel(startY, startScale);
                })
                .start();
        }
    },

    /**
     * 重置标签状态
     * @private
     */
    _resetLabel(startY, startScale) {
        this.damageLabel.node.active = false;
        this.damageLabel.node.y = startY;
        this.damageLabel.node.opacity = 255;
        this.damageLabel.node.scale = startScale;
        this.damageLabel.node.color = cc.color(255, 255, 255);
    }
});