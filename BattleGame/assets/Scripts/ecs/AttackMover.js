/**
 * 攻击移动组件
 * 负责处理攻击时的移动动画：移动到目标 -> 攻击 -> 返回原位置
 */
cc.Class({
    extends: cc.Component,

    properties: {
        // 移动速度（像素/秒）
        moveSpeed: 500,

        // 攻击距离（停留在目标前方的距离）
        attackDistance: 50,

        // 攻击动画持续时间
        attackDuration: 0.3,

        // 是否正在执行攻击动画
        isAttacking: {
            default: false,
            visible: false
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

        this.isAttacking = true;
        this.onAttackComplete = onComplete;

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
     * 播放攻击动画效果（使用 cc.tween 新 API）
     * @private
     */
    _playAttackAnimation() {
        // 计算缩放倍数（基于原始 scale，分别处理 X 和 Y 轴）
        const enlargedScaleX = this.originalScaleX * 1.2;
        const enlargedScaleY = this.originalScaleY * 1.2;

        // 简单的缩放动画模拟攻击
        cc.tween(this.node)
            .to(this.attackDuration * 0.3, { scaleX: enlargedScaleX, scaleY: enlargedScaleY })
            .to(this.attackDuration * 0.7, { scaleX: this.originalScaleX, scaleY: this.originalScaleY })
            .start();

        // 这里可以添加更多效果：
        // - 播放攻击音效
        // - 播放粒子效果
        // - 播放 Spine 动画等
    },

    /**
     * 动画序列完成
     * @private
     */
    _onSequenceComplete() {
        this.isAttacking = false;

        // 强制更新攻击者的血条状态
        const stats = this.node.getComponent("StatsComponent");
        if (stats) {
            stats.updateHealthBar();
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
        this.isAttacking = false;

        // 强制更新血条状态
        const stats = this.node.getComponent("StatsComponent");
        if (stats) {
            stats.updateHealthBar();
        }

        if (this.onAttackComplete) {
            this.onAttackComplete();
            this.onAttackComplete = null;
        }
    }
});
