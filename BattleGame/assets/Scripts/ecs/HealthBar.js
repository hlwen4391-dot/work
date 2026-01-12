
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

        // 护盾进度条（白色，显示在HP之上）- 已废弃，现在与HP共用进度条
        shieldProgress: {
            default: null,
            type: cc.ProgressBar,
            tooltip: "护盾进度条组件(已废弃，现在与HP共用进度条)"
        },

        // 护盾填充精灵（备用）
        shieldFill: {
            default: null,
            type: cc.Sprite,
            tooltip: "护盾填充精灵(如果不使用ProgressBar)"
        },

        // 伤害数字标签
        damageLabel: {
            default: null,
            type: cc.Label,
            tooltip: "显示伤害数字的标签"
        },

        // 伤害数字显示时间
        damageDisplayTime: 3.0
    },

    onLoad() {
        // 如果使用Sprite方式，保存原始宽度
        if (this.healthFill) {
            this._originalWidth = this.healthFill.node.width;
        }
        if (this.shieldFill) {
            this._originalShieldWidth = this.shieldFill.node.width;
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
     * @param {number} shieldValue - 当前护盾值（可选）
     */
    updateHealth(hp, maxHp, shieldValue = 0) {
        if (maxHp <= 0) return;

        const hpPercent = Math.max(0, Math.min(1, hp / maxHp));
        const shieldPercent = shieldValue > 0 ? Math.max(0, Math.min(1, shieldValue / maxHp)) : 0;
        const totalPercent = Math.max(0, Math.min(1, (hp + shieldValue) / maxHp));

        cc.log(`[HealthBar] 更新血条: HP=${hp}/${maxHp} (${(hpPercent * 100).toFixed(1)}%), 护盾=${shieldValue} (${(shieldPercent * 100).toFixed(1)}%)`);

        // 更新HP和护盾显示（共用同一个进度条）
        // 优先使用ProgressBar
        if (this.healthProgress) {
            // 计算总进度（HP+护盾）
            const totalPercent = Math.max(0, Math.min(1, (hp + shieldValue) / maxHp));
            // 设置总进度
            this.healthProgress.progress = totalPercent;

            // 在barSprite上创建两个层：HP（绿色）+ 护盾（白色）
            const hpBarSprite = this.healthProgress.barSprite;
            if (hpBarSprite && shieldValue > 0) {
                // 获取HP和护盾的显示宽度
                const hpProgressBarWidth = this.healthProgress.node.width;
                const hpDisplayWidth = hpProgressBarWidth * hpPercent;
                const shieldDisplayWidth = hpProgressBarWidth * shieldPercent;

                // 查找或创建HP和护盾的显示层
                let hpLayer = hpBarSprite.node.getChildByName("HPLayer");
                let shieldLayer = hpBarSprite.node.getChildByName("ShieldLayer");

                if (!hpLayer) {
                    // 创建HP层（绿色）
                    hpLayer = new cc.Node("HPLayer");
                    const hpSprite = hpLayer.addComponent(cc.Sprite);
                    hpSprite.spriteFrame = hpBarSprite.spriteFrame; // 使用相同的spriteFrame
                    hpLayer.color = cc.Color.GREEN;
                    hpLayer.anchorX = 0;
                    hpLayer.anchorY = 0.5;
                    hpBarSprite.node.addChild(hpLayer);
                }

                if (!shieldLayer && shieldValue > 0) {
                    // 创建护盾层（白色）
                    shieldLayer = new cc.Node("ShieldLayer");
                    const shieldSprite = shieldLayer.addComponent(cc.Sprite);
                    shieldSprite.spriteFrame = hpBarSprite.spriteFrame;
                    shieldLayer.color = cc.Color.WHITE;
                    shieldLayer.anchorX = 0;
                    shieldLayer.anchorY = 0.5;
                    hpBarSprite.node.addChild(shieldLayer);
                }

                // 更新HP层
                if (hpLayer) {
                    hpLayer.width = hpDisplayWidth;
                    hpLayer.height = hpBarSprite.node.height;
                    hpLayer.x = -hpProgressBarWidth * (this.healthProgress.node.anchorX - 0.5);
                    hpLayer.y = 0;
                    hpLayer.active = true;
                }

                // 更新护盾层
                if (shieldLayer) {
                    shieldLayer.width = shieldDisplayWidth;
                    shieldLayer.height = hpBarSprite.node.height;
                    const hpLeftX = -hpProgressBarWidth * (this.healthProgress.node.anchorX - 0.5);
                    shieldLayer.x = hpLeftX + hpDisplayWidth; // 紧跟在HP后面
                    shieldLayer.y = 0;
                    shieldLayer.active = true;
                }

                // 隐藏原始barSprite（因为我们现在用子节点显示）
                hpBarSprite.node.color = new cc.Color(255, 255, 255, 0); // 透明
            } else if (hpBarSprite && shieldValue <= 0) {
                // 没有护盾时，只显示HP（使用原始barSprite）
                hpBarSprite.node.color = cc.Color.GREEN;
                // 隐藏子层
                const hpLayer = hpBarSprite.node.getChildByName("HPLayer");
                const shieldLayer = hpBarSprite.node.getChildByName("ShieldLayer");
                if (hpLayer) hpLayer.active = false;
                if (shieldLayer) shieldLayer.active = false;
            }

            cc.log(`[HealthBar] HP+护盾 ProgressBar已更新: HP=${hpPercent}, 护盾=${shieldPercent}, 总进度=${totalPercent}`);
        }
        // 否则使用Sprite宽度方式
        else if (this.healthFill) {
            this.healthFill.node.width = this._originalWidth * hpPercent;
            cc.log(`[HealthBar] HP Sprite已更新: 宽度=${this._originalWidth * hpPercent}`);
        } else {
            cc.warn(`[HealthBar] 未找到HP显示组件 (healthProgress或healthFill)`);
        }

        // 护盾显示已集成到HP进度条中（共用同一个进度条）
        // 如果使用Sprite方式，仍然需要单独处理护盾
        if (!this.healthProgress && this.healthFill && shieldValue > 0) {
            // 使用Sprite宽度方式时，护盾需要单独显示
            if (this.shieldFill) {
                // 护盾宽度 = 护盾值对应的宽度
                const shieldWidth = this._originalShieldWidth * shieldPercent;
                this.shieldFill.node.width = shieldWidth;
                // 设置护盾颜色为白色
                this.shieldFill.node.color = cc.Color.WHITE;
                // 设置护盾位置：紧跟在HP后面（从HP结束处开始）
                // 计算HP Fill的实际显示宽度
                const hpWidth = this._originalWidth * hpPercent;
                // 获取HP Fill节点的位置和anchor
                const hpFillX = this.healthFill.node.x;
                const hpFillAnchorX = this.healthFill.node.anchorX;
                // 计算HP Fill的左边缘位置
                const hpLeftX = hpFillX - this._originalWidth * (hpFillAnchorX - 0.5);
                // 计算HP Fill的右边缘位置（HP结束位置）
                const hpRightX = hpLeftX + hpWidth;
                // 设置护盾Fill的anchor为左对齐
                this.shieldFill.node.anchorX = 0;
                this.shieldFill.node.anchorY = this.healthFill.node.anchorY; // 保持Y轴对齐
                // 设置护盾Fill的位置（紧跟在HP结束处，无间隙）
                this.shieldFill.node.x = hpRightX;
                this.shieldFill.node.y = this.healthFill.node.y; // 保持Y轴位置一致
                this.shieldFill.node.active = true;
                cc.log(`[HealthBar] 护盾Sprite已更新: 宽度=${shieldWidth}, 位置x=${this.shieldFill.node.x}, active=true`);
            }
        } else if (!this.healthProgress && shieldValue <= 0) {
            // 没有护盾时隐藏护盾显示（Sprite方式）
            if (this.shieldFill) {
                this.shieldFill.node.active = false;
            }
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
                this.damageLabel.node.color = cc.color(255, 0, 0);  // 红色
                this.damageLabel.node.scale = 2.0;  // 更大
                this._playFloatAnimation(startY, startScale, 100, 0.35, true);  // 更高、持续时间稍微延长
                break;

            case 'miss':  // 闪避
                this.damageLabel.string = "MISS!";
                this.damageLabel.node.color = cc.Color.BLUE;  // 蓝色
                this.damageLabel.node.scale = 1.5;
                this._playFloatAnimation(startY, startScale, 50, 0.3, false);
                break;

            case 'heal':  // 治疗
                this.damageLabel.string = "+" + Math.floor(value);
                this.damageLabel.node.color = cc.color(50, 205, 50);  // 绿色
                this.damageLabel.node.scale = 1.8;
                this._playFloatAnimation(startY, startScale, 70, 0.3, false);
                break;

            case 'normal':  // 普通伤害
            default:
                this.damageLabel.string = "-" + Math.floor(value);
                this.damageLabel.node.color = cc.color(255, 255, 255);  // 白色
                this.damageLabel.node.scale = 1.5;
                this._playFloatAnimation(startY, startScale, 60, 0.3, false);
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
            // 暴击特效：快速震动 + 飘动 + 淡出
            tween
                .to(0.05, { scale: startScale * 1.2 }, { easing: 'backOut' })
                .to(0.05, { scale: startScale })
                .parallel(
                    cc.tween().to(duration, { y: startY + floatHeight }, { easing: 'sineOut' }),
                    cc.tween().to(duration, { opacity: 0 }, { easing: 'sineIn' })
                )
                .call(() => {
                    this._resetLabel(startY, startScale);
                })
                .start();
        } else {
            // 普通飘字：快速飘动 + 淡出
            tween
                .parallel(
                    cc.tween().to(duration, { y: startY + floatHeight }, { easing: 'sineOut' }),
                    cc.tween().to(duration, { opacity: 0 }, { easing: 'sineIn' })
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