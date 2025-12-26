/**
 * 攻击移动组件
 * 负责处理攻击时的移动动画：移动到目标 -> 攻击 -> 返回原位置
 */

// 动画状态常量
const AnimationState = {
    ATTACK: "atk",        // 攻击动画
    BY_ATK: "byatk",      // 受击动画
    DIE: "die",           // 死亡动画
    SHI_HUA: "shihua",    // 石化动画
    WAIT: "wait",         // 待机动画
};

cc.Class({
    extends: cc.Component,

    properties: {
        // 移动速度（像素/秒）
        moveSpeed: 500,

        // 攻击距离（停留在目标前方的距离）
        attackDistance: 50,

        // 攻击动画持续时间（如果使用Spine动画，这个会被动画实际时长覆盖）
        attackDuration: 0.3,

        // 是否正在执行攻击动画
        isAttacking: {
            default: false,
            visible: false
        },

        // 是否使用Spine动画（如果false则使用简单的缩放动画）
        useSpineAnimation: {
            default: true,
            tooltip: "是否使用Spine动画，false则使用简单缩放动画"
        },

        // 是否是远程攻击（远程攻击不移动，只播放攻击动画）
        isRanged: {
            default: false,
            tooltip: "是否是远程攻击，true则不移动只播放攻击动画"
        },

        // 受击动画延迟时间（秒）- 让受击动画在攻击动画之后延迟播放，使战斗更流畅
        hitAnimationDelay: {
            default: 0.15,
            tooltip: "受击动画延迟时间（秒），建议0.1-0.3秒"
        }
    },

    onLoad() {
        // 存储原始位置
        this.originalPosition = null;
        // 存储原始 scaleX 和 scaleY
        this.originalScaleX = 1.0;
        this.originalScaleY = 1.0;
        // 当前动画回调
        this.onAttackComplete = null;
        // 当前目标（用于播放受击动画）
        this.currentTarget = null;
        // Spine组件引用
        this.skeleton = this.node.getComponent(sp.Skeleton);

        // 调试信息
        if (this.skeleton) {
            cc.log(`[AttackMover] ${this.node.name} Spine 组件加载成功`);
        } else {
            cc.warn(`[AttackMover] ${this.node.name} 没有 Spine 组件!`);
        }
    },

    /**
     * 执行攻击动画序列
     * @param {cc.Node} target - 目标节点
     * @param {Function} onComplete - 完成回调
     */
    attackTarget(target, onComplete) {
        if (this.isAttacking) {
            cc.warn(`${this.node.name} 正在攻击中，忽略新的攻击请求`);
            return;
        }

        if (!target || !target.isValid) {
            cc.error("攻击目标无效！");
            if (onComplete) onComplete();
            return;
        }

        // 如果是远程攻击，只播放攻击动画，不移动
        if (this.isRanged) {
            this.playAttackAnimationOnly(target, onComplete);
            return;
        }

        this.isAttacking = true;
        this.onAttackComplete = onComplete;
        this.currentTarget = target; // 保存目标引用

        // 1. 保存原始位置和 scale (分别保存 X 和 Y 轴)
        this.originalPosition = this.node.position.clone();
        this.originalScaleX = this.node.scaleX;
        this.originalScaleY = this.node.scaleY;

        // 2. 计算目标位置（在目标前方停留）
        const targetPos = target.position;
        const direction = targetPos.sub(this.originalPosition).normalize();
        const attackPos = targetPos.sub(direction.mul(this.attackDistance));

        // 3. 开始攻击序列
        this._performAttackSequence(attackPos);
    },

    /**
     * 只播放攻击动画（不移动）- 用于远程攻击
     * @param {cc.Node} target - 目标节点
     * @param {Function} onComplete - 完成回调
     */
    playAttackAnimationOnly(target, onComplete) {
        if (this.isAttacking) {
            cc.warn(`${this.node.name} 正在攻击中，忽略新的攻击请求`);
            return;
        }

        if (!target || !target.isValid) {
            cc.error("攻击目标无效！");
            if (onComplete) onComplete();
            return;
        }

        this.isAttacking = true;
        this.onAttackComplete = onComplete;
        this.currentTarget = target;

        // 保存原始 scale
        this.originalScaleX = this.node.scaleX;
        this.originalScaleY = this.node.scaleY;

        cc.log(`[AttackMover] ${this.node.name} 远程攻击：只播放攻击动画，不移动`);

        // 播放攻击动画
        this._playAttackAnimation();

        // 等待攻击动画完成
        if (this.useSpineAnimation && this.skeleton) {
            // 使用Spine动画的实际时长
            this.skeleton.setCompleteListener(() => {
                this.skeleton.setCompleteListener(null);
                this._onRangedAttackComplete();
            });
        } else {
            // 使用配置的时长
            this.scheduleOnce(() => {
                this._onRangedAttackComplete();
            }, this.attackDuration);
        }
    },

    /**
     * 远程攻击完成回调
     * @private
     */
    _onRangedAttackComplete() {
        this.isAttacking = false;
        this.currentTarget = null;

        // 确保返回待机动画
        if (this.skeleton) {
            this.skeleton.setAnimation(0, AnimationState.WAIT, true);
        }

        if (this.onAttackComplete) {
            const callback = this.onAttackComplete;
            this.onAttackComplete = null;
            callback();
        }
    },

    /**
     * 执行攻击动画序列（使用 cc.tween 新 API）
     * @private
     */
    _performAttackSequence(attackPos) {
        // 计算移动时间
        const distanceToTarget = this.node.position.sub(attackPos).mag();
        const durationToTarget = distanceToTarget / this.moveSpeed;

        const distanceBack = attackPos.sub(this.originalPosition).mag();
        const durationBack = distanceBack / this.moveSpeed;

        // 使用 cc.tween 链式调用
        cc.tween(this.node)
            // 1. 移动到目标位置
            .to(durationToTarget, { position: attackPos }, { easing: 'sineInOut' })

            // 2. 播放攻击动画
            .call(() => {
                this._playAttackAnimation();
            })
            .delay(this.attackDuration)

            // 3. 返回原位置
            .to(durationBack, { position: this.originalPosition }, { easing: 'sineInOut' })

            // 4. 完成回调
            .call(() => {
                this._onSequenceComplete();
            })
            .start();
    },

    /**
     * 播放攻击动画效果
     * @private
     */
    _playAttackAnimation() {
        if (this.useSpineAnimation && this.skeleton) {
            // 使用 Spine 动画
            this._playSpineAttackAnimation();
        } else {
            // 使用简单的缩放动画
            this._playScaleAnimation();
        }
    },

    /**
     * 播放 Spine 攻击动画
     * @private
     */
    _playSpineAttackAnimation() {
        if (!this.skeleton) {
            cc.error(`[AttackMover] ${this.node.name} 没有 Spine 组件!`);
            return;
        }

        // 1. 播放攻击者的攻击动画
        cc.log(`[AttackMover] ${this.node.name} 播放攻击动画`);
        this.skeleton.setAnimation(0, AnimationState.ATTACK, false);

        // 2. 延迟播放被攻击者的受击动画（让战斗更流畅）
        if (this.currentTarget && this.currentTarget.isValid) {
            const targetSkeleton = this.currentTarget.getComponent(sp.Skeleton);
            if (targetSkeleton) {
                // 延迟播放受击动画
                this.scheduleOnce(() => {
                    if (this.currentTarget && this.currentTarget.isValid && targetSkeleton) {
                        cc.log(`[AttackMover] ${this.currentTarget.name} 播放受击动画（延迟${this.hitAnimationDelay}秒）`);
                        // 播放受击动画（不循环）
                        targetSkeleton.setAnimation(0, AnimationState.BY_ATK, false);

                        // 受击动画播放完后返回待机状态
                        // 注意：死亡检测和死亡动画由 DeathSystem 处理
                        targetSkeleton.setCompleteListener(() => {
                            // 检查目标是否还存活（可能已经被 DeathSystem 处理了）
                            if (this.currentTarget && this.currentTarget.isValid) {
                                const targetStats = this.currentTarget.getComponent("StatsComponent");
                                // 只有存活的才返回待机动画
                                if (targetStats && !targetStats.isDead()) {
                                    targetSkeleton.setAnimation(0, AnimationState.WAIT, true);
                                    cc.log(`[AttackMover] ${this.currentTarget.name} 返回待机动画`);
                                }
                            }
                            // 清除监听器，避免重复触发
                            targetSkeleton.setCompleteListener(null);
                        });
                    }
                }, this.hitAnimationDelay);
            } else {
                cc.warn(`[AttackMover] ${this.currentTarget.name} 没有 Spine 组件`);
            }
        }

        // 3. 监听攻击动画完成，用于控制时序
        this.skeleton.setCompleteListener(() => {
            // 攻击动画完成后返回待机状态
            this.skeleton.setAnimation(0, AnimationState.WAIT, true);
            cc.log(`[AttackMover] ${this.node.name} 返回待机动画`);
            // 清除监听器
            this.skeleton.setCompleteListener(null);
        });

        // 这里可以添加更多效果：
        // - 播放攻击音效
        // - 播放粒子效果
        // - 播放屏幕震动等
    },

    /**
     * 播放简单的缩放动画（备用方案）
     * @private
     */
    _playScaleAnimation() {
        // 计算缩放倍数（基于原始 scale，分别处理 X 和 Y 轴）
        const enlargedScaleX = this.originalScaleX * 1.2;
        const enlargedScaleY = this.originalScaleY * 1.2;

        // 简单的缩放动画模拟攻击
        cc.tween(this.node)
            .to(this.attackDuration * 0.3, { scaleX: enlargedScaleX, scaleY: enlargedScaleY })
            .to(this.attackDuration * 0.7, { scaleX: this.originalScaleX, scaleY: this.originalScaleY })
            .start();
    },

    /**
     * 动画序列完成
     * @private
     */
    _onSequenceComplete() {
        this.isAttacking = false;
        this.currentTarget = null; // 清除目标引用

        // 确保返回待机动画
        if (this.skeleton) {
            this.skeleton.setAnimation(0, AnimationState.WAIT, true);
        }

        if (this.onAttackComplete) {
            const callback = this.onAttackComplete;
            this.onAttackComplete = null;
            callback();
        }
    },

    /**
     * 立即停止所有动画并重置
     */
    stopAttack() {
        // 停止所有 tween 动画
        cc.Tween.stopAllByTarget(this.node);

        // 恢复原始位置
        if (this.originalPosition) {
            this.node.position = this.originalPosition;
        }

        // 恢复原始 scale (分别恢复 X 和 Y 轴)
        this.node.scaleX = this.originalScaleX;
        this.node.scaleY = this.originalScaleY;

        // 恢复待机动画
        if (this.skeleton) {
            this.skeleton.setCompleteListener(null); // 清除监听器
            this.skeleton.setAnimation(0, AnimationState.WAIT, true);
        }

        this.isAttacking = false;
        this.currentTarget = null;

        if (this.onAttackComplete) {
            this.onAttackComplete();
            this.onAttackComplete = null;
        }
    }
});

