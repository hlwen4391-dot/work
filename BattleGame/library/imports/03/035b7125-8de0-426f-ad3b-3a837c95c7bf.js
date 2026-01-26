"use strict";
cc._RF.push(module, '035b7EljeBCb607OoN8lce/', 'AttackMover');
// Scripts/ecs/AttackMover.js

"use strict";

/**
 * 攻击移动组件
 * 负责处理攻击时的移动动画：移动到目标 -> 攻击 -> 返回原位置
 */

// 动画状态常量
var AnimationState = {
  ATTACK: "atk",
  // 攻击动画
  BY_ATK: "byatk",
  // 受击动画
  DIE: "die",
  // 死亡动画
  SHI_HUA: "shihua",
  // 石化动画
  WAIT: "wait" // 待机动画
};

cc.Class({
  "extends": cc.Component,
  properties: {
    // 移动速度（像素/秒）- 进一步加快移动速度以提升战斗节奏
    moveSpeed: 1200,
    // 攻击距离（停留在目标前方的距离）
    attackDistance: 50,
    // 攻击动画持续时间（如果使用Spine动画，这个会被动画实际时长覆盖）- 进一步缩短动画时间以加快节奏
    attackDuration: 0.15,
    // 是否正在执行攻击动画
    isAttacking: {
      "default": false,
      visible: false
    },
    // 是否使用Spine动画（如果false则使用简单的缩放动画）
    useSpineAnimation: {
      "default": true,
      tooltip: "是否使用Spine动画，false则使用简单缩放动画"
    },
    // 是否是远程攻击（远程攻击不移动，只播放攻击动画）
    isRanged: {
      "default": false,
      tooltip: "是否是远程攻击，true则不移动只播放攻击动画"
    },
    // 受击动画延迟时间（秒）- 让受击动画在攻击动画之后延迟播放，使战斗更流畅 - 缩短延迟以加快节奏
    hitAnimationDelay: {
      "default": 0.08,
      tooltip: "受击动画延迟时间（秒），建议0.05-0.15秒"
    },
    // 受击动画时长（秒）- 用于计算受击动画播放到一半的时间点
    hitAnimationDuration: {
      "default": 0.2,
      tooltip: "受击动画时长（秒），用于在动画播放到一半时触发伤害计算"
    }
  },
  onLoad: function onLoad() {
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
      // cc.log(`[AttackMover] ${this.node.name} Spine 组件加载成功`);
    } else {
      cc.warn("[AttackMover] " + this.node.name + " \u6CA1\u6709 Spine \u7EC4\u4EF6!");
    }
  },
  /**
   * 执行攻击动画序列
   * @param {cc.Node} target - 目标节点
   * @param {Function} onComplete - 完成回调
   * @param {Function} onHit - 受击时回调（在受击动画播放到一半时触发，用于伤害计算）
   */
  attackTarget: function attackTarget(target, onComplete, onHit) {
    if (this.isAttacking) {
      cc.warn(this.node.name + " \u6B63\u5728\u653B\u51FB\u4E2D\uFF0C\u5FFD\u7565\u65B0\u7684\u653B\u51FB\u8BF7\u6C42");
      return;
    }
    if (!target || !target.isValid) {
      cc.error("攻击目标无效！");
      if (onComplete) onComplete();
      return;
    }

    // 如果是远程攻击，只播放攻击动画，不移动
    if (this.isRanged) {
      this.playAttackAnimationOnly(target, onComplete, onHit);
      return;
    }
    this.isAttacking = true;
    this.onAttackComplete = onComplete;
    this.onHitCallback = onHit; // 保存受击回调
    this.currentTarget = target; // 保存目标引用

    // ========== 调试信息：攻击者和目标节点基本信息 ==========
    // cc.log(`[AttackMover] ========== 开始攻击序列 ==========`);
    // cc.log(`[AttackMover] 攻击者: ${this.node.name}`);
    // cc.log(`[AttackMover]   本地位置: (${this.node.x.toFixed(2)}, ${this.node.y.toFixed(2)})`);
    // cc.log(`[AttackMover]   父节点: ${this.node.parent ? this.node.parent.name : '无'}`);
    // cc.log(`[AttackMover]   父节点位置: ${this.node.parent ? `(${this.node.parent.x.toFixed(2)}, ${this.node.parent.y.toFixed(2)})` : '无'}`);
    // cc.log(`[AttackMover]   当前scaleX: ${this.node.scaleX.toFixed(2)}`);

    // cc.log(`[AttackMover] 目标: ${target.name}`);
    // cc.log(`[AttackMover]   本地位置: (${target.x.toFixed(2)}, ${target.y.toFixed(2)})`);
    // cc.log(`[AttackMover]   父节点: ${target.parent ? target.parent.name : '无'}`);
    // cc.log(`[AttackMover]   父节点位置: ${target.parent ? `(${target.parent.x.toFixed(2)}, ${target.parent.y.toFixed(2)})` : '无'}`);
    // cc.log(`[AttackMover]   当前scaleX: ${target.scaleX.toFixed(2)}`);

    // 1. 保存原始位置和 scale (分别保存 X 和 Y 轴)
    this.originalPosition = this.node.position.clone();
    this.originalScaleX = this.node.scaleX;
    this.originalScaleY = this.node.scaleY;

    // 2. 计算目标位置（在目标前方停留）
    // 简化：直接使用本地坐标进行计算和移动
    // 将目标的世界坐标转换为攻击者父节点的本地坐标

    // ========== 调试信息：坐标转换 ==========
    // 获取目标的世界坐标
    var targetWorldPos = target.parent ? target.parent.convertToWorldSpaceAR(target.position) : target.position;

    // cc.log(`[AttackMover] 目标世界坐标: (${targetWorldPos.x.toFixed(2)}, ${targetWorldPos.y.toFixed(2)})`);

    // 将目标世界坐标转换为攻击者父节点的本地坐标
    var attackPos;
    if (this.node.parent) {
      // 转换为攻击者父节点的本地坐标
      attackPos = this.node.parent.convertToNodeSpaceAR(targetWorldPos);
      // cc.log(`[AttackMover] 转换为攻击者父节点(${this.node.parent.name})的本地坐标: (${attackPos.x.toFixed(2)}, ${attackPos.y.toFixed(2)})`);
    } else {
      // 如果没有父节点，直接使用世界坐标
      attackPos = targetWorldPos;
      // cc.log(`[AttackMover] 攻击者无父节点，使用世界坐标: (${attackPos.x.toFixed(2)}, ${attackPos.y.toFixed(2)})`);
    }

    // 计算方向（从攻击者当前位置指向目标位置）
    var direction = attackPos.sub(this.originalPosition).normalize();
    var distance = attackPos.sub(this.originalPosition).mag();

    // cc.log(`[AttackMover] 计算方向和距离:`);
    // cc.log(`[AttackMover]   攻击者本地位置: (${this.originalPosition.x.toFixed(2)}, ${this.originalPosition.y.toFixed(2)})`);
    // cc.log(`[AttackMover]   方向向量: (${direction.x.toFixed(2)}, ${direction.y.toFixed(2)})`);
    // cc.log(`[AttackMover]   距离: ${distance.toFixed(2)}`);

    // 计算攻击位置（在目标前方停留，但保持在攻击者父节点的本地坐标系中）
    attackPos = attackPos.sub(direction.mul(this.attackDistance));

    // cc.log(`[AttackMover] 攻击位置计算:`);
    // cc.log(`[AttackMover]   攻击距离设置: ${this.attackDistance}`);
    // cc.log(`[AttackMover]   最终攻击位置（本地坐标）: (${attackPos.x.toFixed(2)}, ${attackPos.y.toFixed(2)})`);

    // 设置面向方向（根据目标在左边还是右边）
    if (attackPos.x < this.originalPosition.x) {
      // 目标在左边，面向左边（scaleX为负）
      this.node.scaleX = -Math.abs(this.originalScaleX);
      // cc.log(`[AttackMover] 目标在左边，设置scaleX为负: ${this.node.scaleX.toFixed(2)}`);
    } else {
      // 目标在右边，面向右边（scaleX为正）
      this.node.scaleX = Math.abs(this.originalScaleX);
      // cc.log(`[AttackMover] 目标在右边，设置scaleX为正: ${this.node.scaleX.toFixed(2)}`);
    }

    // cc.log(`[AttackMover] ========== 攻击序列准备完成 ==========`);

    // 3. 开始攻击序列
    this._performAttackSequence(attackPos);
  },
  /**
   * 只播放攻击动画（不移动）- 用于远程攻击
   * 创建一个弹道节点，移动到目标附近，然后触发受击动画和伤害计算
   * @param {cc.Node} target - 目标节点
   * @param {Function} onComplete - 完成回调
   * @param {Function} onHit - 受击时回调（在受击动画播放到一半时触发，用于伤害计算）
   */
  playAttackAnimationOnly: function playAttackAnimationOnly(target, onComplete, onHit) {
    if (this.isAttacking) {
      cc.warn(this.node.name + " \u6B63\u5728\u653B\u51FB\u4E2D\uFF0C\u5FFD\u7565\u65B0\u7684\u653B\u51FB\u8BF7\u6C42");
      return;
    }
    if (!target || !target.isValid) {
      cc.error("攻击目标无效！");
      if (onComplete) onComplete();
      return;
    }
    this.isAttacking = true;
    this.onAttackComplete = onComplete;
    this.onHitCallback = onHit; // 保存受击回调
    this.currentTarget = target;

    // 保存原始 scale
    this.originalScaleX = this.node.scaleX;
    this.originalScaleY = this.node.scaleY;

    // cc.log(`[AttackMover] ${this.node.name} 远程攻击：播放攻击动画，弹道移动到目标`);

    // 播放攻击动画（人物本身）
    this._playAttackAnimation();

    // 创建弹道节点并移动到目标附近
    this._createAndMoveProjectile(target);
  },
  /**
   * 创建弹道节点并移动到目标附近
   * @private
   */
  _createAndMoveProjectile: function _createAndMoveProjectile(target) {
    var _this = this;
    if (!target || !target.isValid) {
      this._onRangedAttackComplete();
      return;
    }
    var parent = this.node.parent;
    if (!parent) {
      cc.error("[AttackMover] 无法创建弹道：攻击者没有父节点");
      this._onRangedAttackComplete();
      return;
    }

    // 创建弹道节点（子弹形状）
    var projectile = new cc.Node("RangedProjectile");
    var graphics = projectile.addComponent(cc.Graphics);

    // 获取起始位置和目标位置
    var casterWorldPos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
    var targetWorldPos = target.convertToWorldSpaceAR(cc.v2(0, 0));

    // 转换为父节点的本地坐标
    var startPos = parent.convertToNodeSpaceAR(casterWorldPos);
    var targetPos = parent.convertToNodeSpaceAR(targetWorldPos);

    // 计算攻击位置（在目标前方停留，类似近战攻击）
    var direction = targetPos.sub(startPos).normalize();
    var attackPos = targetPos.sub(direction.mul(this.attackDistance));

    // 计算圆锥的方向（用于旋转）
    var angle = Math.atan2(direction.y, direction.x) * 180 / Math.PI;

    // 设置圆锥颜色（白色）
    graphics.fillColor = cc.Color.WHITE;
    graphics.strokeColor = cc.Color.WHITE;
    graphics.lineWidth = 1;

    // 绘制圆锥形状：等腰三角形
    var coneLength = 15; // 圆锥长度
    var coneBaseWidth = 5; // 圆锥底部宽度

    // 旋转到目标方向
    projectile.angle = angle;

    // 绘制圆锥（等腰三角形，底部在原点，尖端指向目标方向）
    graphics.moveTo(coneLength / 2, 0); // 尖端（指向目标）
    graphics.lineTo(-coneLength / 2, -coneBaseWidth / 2); // 底部左点
    graphics.lineTo(-coneLength / 2, coneBaseWidth / 2); // 底部右点
    graphics.close();
    graphics.fill();

    // 设置初始位置
    projectile.setPosition(startPos);
    parent.addChild(projectile);

    // 计算移动时间（远程攻击弹道速度更快）
    var distance = startPos.sub(attackPos).mag();
    var projectileSpeed = this.moveSpeed * 1.5; // 弹道速度是移动速度的1.5倍
    var duration = distance / projectileSpeed;

    // 弹道移动到目标附近
    cc.tween(projectile).to(duration, {
      position: attackPos
    }, {
      easing: 'sineInOut'
    }).call(function () {
      // 弹道到达目标附近：触发受击动画和伤害计算
      if (projectile && projectile.isValid) {
        projectile.destroy();
      }

      // 播放受击动画并触发伤害计算（与近战攻击一样的逻辑）
      _this._playHitAnimationAndDamage();
    }).start();
  },
  /**
   * 播放受击动画并触发伤害计算（用于远程攻击）
   * @private
   */
  _playHitAnimationAndDamage: function _playHitAnimationAndDamage() {
    var _this2 = this;
    if (!this.currentTarget || !this.currentTarget.isValid) {
      this._onRangedAttackComplete();
      return;
    }
    var targetSkeleton = this.currentTarget.getComponent(sp.Skeleton);
    if (targetSkeleton) {
      // 播放受击动画（不循环）
      targetSkeleton.setAnimation(0, AnimationState.BY_ATK, false);

      // 在受击动画播放到一半时触发伤害计算
      if (this.onHitCallback) {
        var hitAnimationHalfDuration = this.hitAnimationDuration / 2;
        this.scheduleOnce(function () {
          if (_this2.onHitCallback) {
            _this2.onHitCallback();
          }
        }, hitAnimationHalfDuration);
      }

      // 受击动画播放完后返回待机状态
      targetSkeleton.setCompleteListener(function () {
        if (_this2.currentTarget && _this2.currentTarget.isValid) {
          var targetStats = _this2.currentTarget.getComponent("StatsComponent");
          // 只有存活的才返回待机动画
          if (targetStats && !targetStats.isDead()) {
            targetSkeleton.setAnimation(0, AnimationState.WAIT, true);
          }
        }
        targetSkeleton.setCompleteListener(null);

        // 受击动画完成后，调用完成回调
        _this2._onRangedAttackComplete();
      });
    } else {
      // 如果没有Spine组件，直接触发伤害计算
      if (this.onHitCallback) {
        this.onHitCallback();
      }
      // 延迟一小段时间后调用完成回调（模拟受击动画时间）
      this.scheduleOnce(function () {
        _this2._onRangedAttackComplete();
      }, this.hitAnimationDuration);
    }
  },
  /**
   * 远程攻击完成回调
   * @private
   */
  _onRangedAttackComplete: function _onRangedAttackComplete() {
    this.isAttacking = false;
    this.currentTarget = null;

    // 确保返回待机动画
    if (this.skeleton) {
      this.skeleton.setAnimation(0, AnimationState.WAIT, true);
    }
    if (this.onAttackComplete) {
      var callback = this.onAttackComplete;
      this.onAttackComplete = null;
      callback();
    }
  },
  /**
   * 查找两个节点的共同父节点
   * @private
   * @param {cc.Node} node1 - 节点1
   * @param {cc.Node} node2 - 节点2
   * @returns {cc.Node} 共同父节点，如果没有则返回null
   */
  _findCommonParent: function _findCommonParent(node1, node2) {
    if (!node1 || !node2) return null;

    // 如果两个节点是同一个父节点，直接返回
    if (node1.parent === node2.parent) {
      return node1.parent;
    }

    // 向上查找共同父节点
    var parent1 = node1.parent;
    while (parent1) {
      var parent2 = node2.parent;
      while (parent2) {
        if (parent1 === parent2) {
          return parent1;
        }
        parent2 = parent2.parent;
      }
      parent1 = parent1.parent;
    }
    return null;
  },
  /**
   * 执行攻击动画序列（使用 cc.tween 新 API）
   * @private
   */
  _performAttackSequence: function _performAttackSequence(attackPos) {
    var _this3 = this;
    // ========== 调试信息：移动序列 ==========
    // cc.log(`[AttackMover] ========== 开始执行移动序列 ==========`);
    // cc.log(`[AttackMover] 当前节点位置: (${this.node.x.toFixed(2)}, ${this.node.y.toFixed(2)})`);
    // cc.log(`[AttackMover] 目标攻击位置: (${attackPos.x.toFixed(2)}, ${attackPos.y.toFixed(2)})`);
    // cc.log(`[AttackMover] 原始位置: (${this.originalPosition.x.toFixed(2)}, ${this.originalPosition.y.toFixed(2)})`);

    // 计算移动时间
    var distanceToTarget = this.node.position.sub(attackPos).mag();
    var durationToTarget = distanceToTarget / this.moveSpeed;
    var distanceBack = attackPos.sub(this.originalPosition).mag();
    var durationBack = distanceBack / this.moveSpeed;

    // cc.log(`[AttackMover] 移动参数:`);
    // cc.log(`[AttackMover]   移动到目标距离: ${distanceToTarget.toFixed(2)}`);
    // cc.log(`[AttackMover]   移动速度: ${this.moveSpeed}`);
    // cc.log(`[AttackMover]   移动到目标时间: ${durationToTarget.toFixed(2)}秒`);
    // cc.log(`[AttackMover]   返回距离: ${distanceBack.toFixed(2)}`);
    // cc.log(`[AttackMover]   返回时间: ${durationBack.toFixed(2)}秒`);

    // 使用 cc.tween 链式调用
    cc.tween(this.node)
    // 1. 移动到目标位置
    .to(durationToTarget, {
      position: attackPos
    }, {
      easing: 'sineInOut'
    })
    // .call(() => {
    //     cc.log(`[AttackMover] ✓ 已移动到攻击位置: (${this.node.x.toFixed(2)}, ${this.node.y.toFixed(2)})`);
    // })

    // 2. 播放攻击动画
    .call(function () {
      // cc.log(`[AttackMover] 开始播放攻击动画`);
      _this3._playAttackAnimation();
    }).delay(this.attackDuration)
    // .call(() => {
    //     cc.log(`[AttackMover] ✓ 攻击动画播放完成`);
    // })

    // 3. 返回原位置
    .to(durationBack, {
      position: this.originalPosition
    }, {
      easing: 'sineInOut'
    })
    // .call(() => {
    //     cc.log(`[AttackMover] ✓ 已返回原位置: (${this.node.x.toFixed(2)}, ${this.node.y.toFixed(2)})`);
    // })

    // 4. 完成回调
    .call(function () {
      // cc.log(`[AttackMover] ========== 攻击序列完成 ==========`);
      _this3._onSequenceComplete();
    }).start();
  },
  /**
   * 播放攻击动画效果
   * @private
   */
  _playAttackAnimation: function _playAttackAnimation() {
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
  _playSpineAttackAnimation: function _playSpineAttackAnimation() {
    var _this4 = this;
    if (!this.skeleton) {
      cc.error("[AttackMover] " + this.node.name + " \u6CA1\u6709 Spine \u7EC4\u4EF6!");
      return;
    }

    // 1. 播放攻击者的攻击动画
    // cc.log(`[AttackMover] ${this.node.name} 播放攻击动画`);
    this.skeleton.setAnimation(0, AnimationState.ATTACK, false);

    // 2. 延迟播放被攻击者的受击动画（让战斗更流畅）
    // 注意：对于远程攻击，受击动画会在弹道到达目标后由_playHitAnimationAndDamage播放，这里不播放
    if (this.currentTarget && this.currentTarget.isValid && !this.isRanged) {
      var targetSkeleton = this.currentTarget.getComponent(sp.Skeleton);
      if (targetSkeleton) {
        // 延迟播放受击动画（仅近战攻击）
        this.scheduleOnce(function () {
          if (_this4.currentTarget && _this4.currentTarget.isValid && targetSkeleton) {
            // cc.log(`[AttackMover] ${this.currentTarget.name} 播放受击动画（延迟${this.hitAnimationDelay}秒）`);
            // 播放受击动画（不循环）
            targetSkeleton.setAnimation(0, AnimationState.BY_ATK, false);

            // ✅ 在受击动画播放到一半时触发伤害计算
            if (_this4.onHitCallback) {
              var hitAnimationHalfDuration = _this4.hitAnimationDuration / 2;
              _this4.scheduleOnce(function () {
                if (_this4.onHitCallback) {
                  _this4.onHitCallback();
                }
              }, hitAnimationHalfDuration);
            }

            // 受击动画播放完后返回待机状态
            // 注意：死亡检测和死亡动画由 DeathSystem 处理
            targetSkeleton.setCompleteListener(function () {
              // 检查目标是否还存活（可能已经被 DeathSystem 处理了）
              if (_this4.currentTarget && _this4.currentTarget.isValid) {
                var targetStats = _this4.currentTarget.getComponent("StatsComponent");
                // 只有存活的才返回待机动画
                if (targetStats && !targetStats.isDead()) {
                  targetSkeleton.setAnimation(0, AnimationState.WAIT, true);
                  // cc.log(`[AttackMover] ${this.currentTarget.name} 返回待机动画`);
                }
              }
              // 清除监听器，避免重复触发
              targetSkeleton.setCompleteListener(null);
            });
          }
        }, this.hitAnimationDelay);
      } else {
        cc.warn("[AttackMover] " + this.currentTarget.name + " \u6CA1\u6709 Spine \u7EC4\u4EF6");
        // 如果没有Spine组件，也需要触发onHit回调
        this.scheduleOnce(function () {
          if (_this4.onHitCallback) {
            _this4.onHitCallback();
          }
        }, this.hitAnimationDelay + this.hitAnimationDuration / 2);
      }
    } else if (this.isRanged) {
      // 远程攻击：不在这里播放受击动画，受击动画会在弹道到达目标后由_playHitAnimationAndDamage播放
      // 但是需要确保onHit回调被调用（如果没有目标或目标无效）
      if (!this.currentTarget || !this.currentTarget.isValid) {
        this.scheduleOnce(function () {
          if (_this4.onHitCallback) {
            _this4.onHitCallback();
          }
        }, this.attackDuration / 2);
      }
    } else {
      // 如果没有目标，也需要确保onHit回调被调用（例如，攻击空气）
      this.scheduleOnce(function () {
        if (_this4.onHitCallback) {
          _this4.onHitCallback();
        }
      }, this.attackDuration / 2); // 假设攻击动画一半时触发
    }

    // 3. 监听攻击动画完成，用于控制时序
    this.skeleton.setCompleteListener(function () {
      // 攻击动画完成后返回待机状态
      _this4.skeleton.setAnimation(0, AnimationState.WAIT, true);
      // cc.log(`[AttackMover] ${this.node.name} 返回待机动画`);
      // 清除监听器
      _this4.skeleton.setCompleteListener(null);
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
  _playScaleAnimation: function _playScaleAnimation() {
    // 计算缩放倍数（基于原始 scale，分别处理 X 和 Y 轴）
    var enlargedScaleX = this.originalScaleX * 1.2;
    var enlargedScaleY = this.originalScaleY * 1.2;

    // 简单的缩放动画模拟攻击
    cc.tween(this.node).to(this.attackDuration * 0.3, {
      scaleX: enlargedScaleX,
      scaleY: enlargedScaleY
    }).to(this.attackDuration * 0.7, {
      scaleX: this.originalScaleX,
      scaleY: this.originalScaleY
    }).start();
  },
  /**
   * 动画序列完成
   * @private
   */
  _onSequenceComplete: function _onSequenceComplete() {
    this.isAttacking = false;
    this.currentTarget = null; // 清除目标引用

    // 确保返回待机动画
    if (this.skeleton) {
      this.skeleton.setAnimation(0, AnimationState.WAIT, true);
    }
    if (this.onAttackComplete) {
      var callback = this.onAttackComplete;
      this.onAttackComplete = null;
      callback(); //执行完成回调
    }
  },
  /**
   * 立即停止所有动画并重置
   */
  stopAttack: function stopAttack() {
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

cc._RF.pop();