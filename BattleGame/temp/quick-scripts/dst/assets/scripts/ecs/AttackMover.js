
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ecs/AttackMover.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxBdHRhY2tNb3Zlci5qcyJdLCJuYW1lcyI6WyJBbmltYXRpb25TdGF0ZSIsIkFUVEFDSyIsIkJZX0FUSyIsIkRJRSIsIlNISV9IVUEiLCJXQUlUIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtb3ZlU3BlZWQiLCJhdHRhY2tEaXN0YW5jZSIsImF0dGFja0R1cmF0aW9uIiwiaXNBdHRhY2tpbmciLCJ2aXNpYmxlIiwidXNlU3BpbmVBbmltYXRpb24iLCJ0b29sdGlwIiwiaXNSYW5nZWQiLCJoaXRBbmltYXRpb25EZWxheSIsImhpdEFuaW1hdGlvbkR1cmF0aW9uIiwib25Mb2FkIiwib3JpZ2luYWxQb3NpdGlvbiIsIm9yaWdpbmFsU2NhbGVYIiwib3JpZ2luYWxTY2FsZVkiLCJvbkF0dGFja0NvbXBsZXRlIiwiY3VycmVudFRhcmdldCIsInNrZWxldG9uIiwibm9kZSIsImdldENvbXBvbmVudCIsInNwIiwiU2tlbGV0b24iLCJ3YXJuIiwibmFtZSIsImF0dGFja1RhcmdldCIsInRhcmdldCIsIm9uQ29tcGxldGUiLCJvbkhpdCIsImlzVmFsaWQiLCJlcnJvciIsInBsYXlBdHRhY2tBbmltYXRpb25Pbmx5Iiwib25IaXRDYWxsYmFjayIsInBvc2l0aW9uIiwiY2xvbmUiLCJzY2FsZVgiLCJzY2FsZVkiLCJ0YXJnZXRXb3JsZFBvcyIsInBhcmVudCIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsImF0dGFja1BvcyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwiZGlyZWN0aW9uIiwic3ViIiwibm9ybWFsaXplIiwiZGlzdGFuY2UiLCJtYWciLCJtdWwiLCJ4IiwiTWF0aCIsImFicyIsIl9wZXJmb3JtQXR0YWNrU2VxdWVuY2UiLCJfcGxheUF0dGFja0FuaW1hdGlvbiIsIl9jcmVhdGVBbmRNb3ZlUHJvamVjdGlsZSIsIl90aGlzIiwiX29uUmFuZ2VkQXR0YWNrQ29tcGxldGUiLCJwcm9qZWN0aWxlIiwiTm9kZSIsImdyYXBoaWNzIiwiYWRkQ29tcG9uZW50IiwiR3JhcGhpY3MiLCJjYXN0ZXJXb3JsZFBvcyIsInYyIiwic3RhcnRQb3MiLCJ0YXJnZXRQb3MiLCJhbmdsZSIsImF0YW4yIiwieSIsIlBJIiwiZmlsbENvbG9yIiwiQ29sb3IiLCJXSElURSIsInN0cm9rZUNvbG9yIiwibGluZVdpZHRoIiwiY29uZUxlbmd0aCIsImNvbmVCYXNlV2lkdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZSIsImZpbGwiLCJzZXRQb3NpdGlvbiIsImFkZENoaWxkIiwicHJvamVjdGlsZVNwZWVkIiwiZHVyYXRpb24iLCJ0d2VlbiIsInRvIiwiZWFzaW5nIiwiY2FsbCIsImRlc3Ryb3kiLCJfcGxheUhpdEFuaW1hdGlvbkFuZERhbWFnZSIsInN0YXJ0IiwiX3RoaXMyIiwidGFyZ2V0U2tlbGV0b24iLCJzZXRBbmltYXRpb24iLCJoaXRBbmltYXRpb25IYWxmRHVyYXRpb24iLCJzY2hlZHVsZU9uY2UiLCJzZXRDb21wbGV0ZUxpc3RlbmVyIiwidGFyZ2V0U3RhdHMiLCJpc0RlYWQiLCJjYWxsYmFjayIsIl9maW5kQ29tbW9uUGFyZW50Iiwibm9kZTEiLCJub2RlMiIsInBhcmVudDEiLCJwYXJlbnQyIiwiX3RoaXMzIiwiZGlzdGFuY2VUb1RhcmdldCIsImR1cmF0aW9uVG9UYXJnZXQiLCJkaXN0YW5jZUJhY2siLCJkdXJhdGlvbkJhY2siLCJkZWxheSIsIl9vblNlcXVlbmNlQ29tcGxldGUiLCJfcGxheVNwaW5lQXR0YWNrQW5pbWF0aW9uIiwiX3BsYXlTY2FsZUFuaW1hdGlvbiIsIl90aGlzNCIsImVubGFyZ2VkU2NhbGVYIiwiZW5sYXJnZWRTY2FsZVkiLCJzdG9wQXR0YWNrIiwiVHdlZW4iLCJzdG9wQWxsQnlUYXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFNQSxjQUFjLEdBQUc7RUFDbkJDLE1BQU0sRUFBRSxLQUFLO0VBQVM7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SUFBSSxDQUFDcEIsZ0JBQWdCO0lBQzlDOztJQUVBO0lBQ0EsSUFBSSxDQUFDTSxJQUFJLENBQUNnQixNQUFNLEdBQUcsSUFBSSxDQUFDckIsY0FBYztJQUN0QyxJQUFJLENBQUNLLElBQUksQ0FBQ2lCLE1BQU0sR0FBRyxJQUFJLENBQUNyQixjQUFjOztJQUV0QztJQUNBLElBQUksSUFBSSxDQUFDRyxRQUFRLEVBQUU7TUFDZixJQUFJLENBQUNBLFFBQVEsQ0FBQzhFLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7TUFDekMsSUFBSSxDQUFDOUUsUUFBUSxDQUFDMkUsWUFBWSxDQUFDLENBQUMsRUFBRXJHLGNBQWMsQ0FBQ0ssSUFBSSxFQUFFLElBQUksQ0FBQztJQUM1RDtJQUVBLElBQUksQ0FBQ1EsV0FBVyxHQUFHLEtBQUs7SUFDeEIsSUFBSSxDQUFDWSxhQUFhLEdBQUcsSUFBSTtJQUV6QixJQUFJLElBQUksQ0FBQ0QsZ0JBQWdCLEVBQUU7TUFDdkIsSUFBSSxDQUFDQSxnQkFBZ0IsRUFBRTtNQUN2QixJQUFJLENBQUNBLGdCQUFnQixHQUFHLElBQUk7SUFDaEM7RUFDSjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDmlLvlh7vnp7vliqjnu4Tku7ZcbiAqIOi0n+i0o+WkhOeQhuaUu+WHu+aXtueahOenu+WKqOWKqOeUu++8muenu+WKqOWIsOebruaghyAtPiDmlLvlh7sgLT4g6L+U5Zue5Y6f5L2N572uXG4gKi9cblxuLy8g5Yqo55S754q25oCB5bi46YePXG5jb25zdCBBbmltYXRpb25TdGF0ZSA9IHtcbiAgICBBVFRBQ0s6IFwiYXRrXCIsICAgICAgICAvLyDmlLvlh7vliqjnlLtcbiAgICBCWV9BVEs6IFwiYnlhdGtcIiwgICAgICAvLyDlj5flh7vliqjnlLtcbiAgICBESUU6IFwiZGllXCIsICAgICAgICAgICAvLyDmrbvkuqHliqjnlLtcbiAgICBTSElfSFVBOiBcInNoaWh1YVwiLCAgICAvLyDnn7PljJbliqjnlLtcbiAgICBXQUlUOiBcIndhaXRcIiwgICAgICAgICAvLyDlvoXmnLrliqjnlLtcbn07XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIOenu+WKqOmAn+W6pu+8iOWDj+e0oC/np5LvvIktIOi/m+S4gOatpeWKoOW/q+enu+WKqOmAn+W6puS7peaPkOWNh+aImOaWl+iKguWlj1xuICAgICAgICBtb3ZlU3BlZWQ6IDEyMDAsXG5cbiAgICAgICAgLy8g5pS75Ye76Led56a777yI5YGc55WZ5Zyo55uu5qCH5YmN5pa555qE6Led56a777yJXG4gICAgICAgIGF0dGFja0Rpc3RhbmNlOiA1MCxcblxuICAgICAgICAvLyDmlLvlh7vliqjnlLvmjIHnu63ml7bpl7TvvIjlpoLmnpzkvb/nlKhTcGluZeWKqOeUu++8jOi/meS4quS8muiiq+WKqOeUu+WunumZheaXtumVv+imhueblu+8iS0g6L+b5LiA5q2l57yp55+t5Yqo55S75pe26Ze05Lul5Yqg5b+r6IqC5aWPXG4gICAgICAgIGF0dGFja0R1cmF0aW9uOiAwLjE1LFxuXG4gICAgICAgIC8vIOaYr+WQpuato+WcqOaJp+ihjOaUu+WHu+WKqOeUu1xuICAgICAgICBpc0F0dGFja2luZzoge1xuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOaYr+WQpuS9v+eUqFNwaW5l5Yqo55S777yI5aaC5p6cZmFsc2XliJnkvb/nlKjnroDljZXnmoTnvKnmlL7liqjnlLvvvIlcbiAgICAgICAgdXNlU3BpbmVBbmltYXRpb246IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuaYr+WQpuS9v+eUqFNwaW5l5Yqo55S777yMZmFsc2XliJnkvb/nlKjnroDljZXnvKnmlL7liqjnlLtcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOaYr+WQpuaYr+i/nOeoi+aUu+WHu++8iOi/nOeoi+aUu+WHu+S4jeenu+WKqO+8jOWPquaSreaUvuaUu+WHu+WKqOeUu++8iVxuICAgICAgICBpc1JhbmdlZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuaYr+WQpuaYr+i/nOeoi+aUu+WHu++8jHRydWXliJnkuI3np7vliqjlj6rmkq3mlL7mlLvlh7vliqjnlLtcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOWPl+WHu+WKqOeUu+W7tui/n+aXtumXtO+8iOenku+8iS0g6K6p5Y+X5Ye75Yqo55S75Zyo5pS75Ye75Yqo55S75LmL5ZCO5bu26L+f5pKt5pS+77yM5L2/5oiY5paX5pu05rWB55WFIC0g57yp55+t5bu26L+f5Lul5Yqg5b+r6IqC5aWPXG4gICAgICAgIGhpdEFuaW1hdGlvbkRlbGF5OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAwLjA4LFxuICAgICAgICAgICAgdG9vbHRpcDogXCLlj5flh7vliqjnlLvlu7bov5/ml7bpl7TvvIjnp5LvvInvvIzlu7rorq4wLjA1LTAuMTXnp5JcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOWPl+WHu+WKqOeUu+aXtumVv++8iOenku+8iS0g55So5LqO6K6h566X5Y+X5Ye75Yqo55S75pKt5pS+5Yiw5LiA5Y2K55qE5pe26Ze054K5XG4gICAgICAgIGhpdEFuaW1hdGlvbkR1cmF0aW9uOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAwLjIsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWPl+WHu+WKqOeUu+aXtumVv++8iOenku+8ie+8jOeUqOS6juWcqOWKqOeUu+aSreaUvuWIsOS4gOWNiuaXtuinpuWPkeS8pOWus+iuoeeul1wiXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyDlrZjlgqjljp/lp4vkvY3nva5cbiAgICAgICAgdGhpcy5vcmlnaW5hbFBvc2l0aW9uID0gbnVsbDtcbiAgICAgICAgLy8g5a2Y5YKo5Y6f5aeLIHNjYWxlWCDlkowgc2NhbGVZXG4gICAgICAgIHRoaXMub3JpZ2luYWxTY2FsZVggPSAxLjA7XG4gICAgICAgIHRoaXMub3JpZ2luYWxTY2FsZVkgPSAxLjA7XG4gICAgICAgIC8vIOW9k+WJjeWKqOeUu+Wbnuiwg1xuICAgICAgICB0aGlzLm9uQXR0YWNrQ29tcGxldGUgPSBudWxsO1xuICAgICAgICAvLyDlvZPliY3nm67moIfvvIjnlKjkuo7mkq3mlL7lj5flh7vliqjnlLvvvIlcbiAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgLy8gU3BpbmXnu4Tku7blvJXnlKhcbiAgICAgICAgdGhpcy5za2VsZXRvbiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuXG4gICAgICAgIC8vIOiwg+ivleS/oeaBr1xuICAgICAgICBpZiAodGhpcy5za2VsZXRvbikge1xuICAgICAgICAgICAgLy8gY2MubG9nKGBbQXR0YWNrTW92ZXJdICR7dGhpcy5ub2RlLm5hbWV9IFNwaW5lIOe7hOS7tuWKoOi9veaIkOWKn2ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2Mud2FybihgW0F0dGFja01vdmVyXSAke3RoaXMubm9kZS5uYW1lfSDmsqHmnIkgU3BpbmUg57uE5Lu2IWApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOaJp+ihjOaUu+WHu+WKqOeUu+W6j+WIl1xuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gdGFyZ2V0IC0g55uu5qCH6IqC54K5XG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25Db21wbGV0ZSAtIOWujOaIkOWbnuiwg1xuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uSGl0IC0g5Y+X5Ye75pe25Zue6LCD77yI5Zyo5Y+X5Ye75Yqo55S75pKt5pS+5Yiw5LiA5Y2K5pe26Kem5Y+R77yM55So5LqO5Lyk5a6z6K6h566X77yJXG4gICAgICovXG4gICAgYXR0YWNrVGFyZ2V0KHRhcmdldCwgb25Db21wbGV0ZSwgb25IaXQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBdHRhY2tpbmcpIHtcbiAgICAgICAgICAgIGNjLndhcm4oYCR7dGhpcy5ub2RlLm5hbWV9IOato+WcqOaUu+WHu+S4re+8jOW/veeVpeaWsOeahOaUu+WHu+ivt+axgmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5pc1ZhbGlkKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIuaUu+WHu+ebruagh+aXoOaViO+8gVwiKTtcbiAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSBvbkNvbXBsZXRlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlpoLmnpzmmK/ov5znqIvmlLvlh7vvvIzlj6rmkq3mlL7mlLvlh7vliqjnlLvvvIzkuI3np7vliqhcbiAgICAgICAgaWYgKHRoaXMuaXNSYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheUF0dGFja0FuaW1hdGlvbk9ubHkodGFyZ2V0LCBvbkNvbXBsZXRlLCBvbkhpdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzQXR0YWNraW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkF0dGFja0NvbXBsZXRlID0gb25Db21wbGV0ZTtcbiAgICAgICAgdGhpcy5vbkhpdENhbGxiYWNrID0gb25IaXQ7IC8vIOS/neWtmOWPl+WHu+Wbnuiwg1xuICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXQgPSB0YXJnZXQ7IC8vIOS/neWtmOebruagh+W8leeUqFxuXG4gICAgICAgIC8vID09PT09PT09PT0g6LCD6K+V5L+h5oGv77ya5pS75Ye76ICF5ZKM55uu5qCH6IqC54K55Z+65pys5L+h5oGvID09PT09PT09PT1cbiAgICAgICAgLy8gY2MubG9nKGBbQXR0YWNrTW92ZXJdID09PT09PT09PT0g5byA5aeL5pS75Ye75bqP5YiXID09PT09PT09PT1gKTtcbiAgICAgICAgLy8gY2MubG9nKGBbQXR0YWNrTW92ZXJdIOaUu+WHu+iAhTogJHt0aGlzLm5vZGUubmFtZX1gKTtcbiAgICAgICAgLy8gY2MubG9nKGBbQXR0YWNrTW92ZXJdICAg5pys5Zyw5L2N572uOiAoJHt0aGlzLm5vZGUueC50b0ZpeGVkKDIpfSwgJHt0aGlzLm5vZGUueS50b0ZpeGVkKDIpfSlgKTtcbiAgICAgICAgLy8gY2MubG9nKGBbQXR0YWNrTW92ZXJdICAg54i26IqC54K5OiAke3RoaXMubm9kZS5wYXJlbnQgPyB0aGlzLm5vZGUucGFyZW50Lm5hbWUgOiAn5pegJ31gKTtcbiAgICAgICAgLy8gY2MubG9nKGBbQXR0YWNrTW92ZXJdICAg54i26IqC54K55L2N572uOiAke3RoaXMubm9kZS5wYXJlbnQgPyBgKCR7dGhpcy5ub2RlLnBhcmVudC54LnRvRml4ZWQoMil9LCAke3RoaXMubm9kZS5wYXJlbnQueS50b0ZpeGVkKDIpfSlgIDogJ+aXoCd9YCk7XG4gICAgICAgIC8vIGNjLmxvZyhgW0F0dGFja01vdmVyXSAgIOW9k+WJjXNjYWxlWDogJHt0aGlzLm5vZGUuc2NhbGVYLnRvRml4ZWQoMil9YCk7XG5cbiAgICAgICAgLy8gY2MubG9nKGBbQXR0YWNrTW92ZXJdIOebruaghzogJHt0YXJnZXQubmFtZX1gKTtcbiAgICAgICAgLy8gY2MubG9nKGBbQXR0YWNrTW92ZXJdICAg5pys5Zyw5L2N572uOiAoJHt0YXJnZXQueC50b0ZpeGVkKDIpfSwgJHt0YXJnZXQueS50b0ZpeGVkKDIpfSlgKTtcbiAgICAgICAgLy8gY2MubG9nKGBbQXR0YWNrTW92ZXJdICAg54i26IqC54K5OiAke3RhcmdldC5wYXJlbnQgPyB0YXJnZXQucGFyZW50Lm5hbWUgOiAn5pegJ31gKTtcbiAgICAgICAgLy8gY2MubG9nKGBbQXR0YWNrTW92ZXJdICAg54i26IqC54K55L2N572uOiAke3RhcmdldC5wYXJlbnQgPyBgKCR7dGFyZ2V0LnBhcmVudC54LnRvRml4ZWQoMil9LCAke3RhcmdldC5wYXJlbnQueS50b0ZpeGVkKDIpfSlgIDogJ+aXoCd9YCk7XG4gICAgICAgIC8vIGNjLmxvZyhgW0F0dGFja01vdmVyXSAgIOW9k+WJjXNjYWxlWDogJHt0YXJnZXQuc2NhbGVYLnRvRml4ZWQoMil9YCk7XG5cbiAgICAgICAgLy8gMS4g5L+d5a2Y5Y6f5aeL5L2N572u5ZKMIHNjYWxlICjliIbliKvkv53lrZggWCDlkowgWSDovbQpXG4gICAgICAgIHRoaXMub3JpZ2luYWxQb3NpdGlvbiA9IHRoaXMubm9kZS5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICB0aGlzLm9yaWdpbmFsU2NhbGVYID0gdGhpcy5ub2RlLnNjYWxlWDtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFNjYWxlWSA9IHRoaXMubm9kZS5zY2FsZVk7XG5cbiAgICAgICAgLy8gMi4g6K6h566X55uu5qCH5L2N572u77yI5Zyo55uu5qCH5YmN5pa55YGc55WZ77yJXG4gICAgICAgIC8vIOeugOWMlu+8muebtOaOpeS9v+eUqOacrOWcsOWdkOagh+i/m+ihjOiuoeeul+WSjOenu+WKqFxuICAgICAgICAvLyDlsIbnm67moIfnmoTkuJbnlYzlnZDmoIfovazmjaLkuLrmlLvlh7vogIXniLboioLngrnnmoTmnKzlnLDlnZDmoIdcblxuICAgICAgICAvLyA9PT09PT09PT09IOiwg+ivleS/oeaBr++8muWdkOagh+i9rOaNoiA9PT09PT09PT09XG4gICAgICAgIC8vIOiOt+WPluebruagh+eahOS4lueVjOWdkOagh1xuICAgICAgICBsZXQgdGFyZ2V0V29ybGRQb3MgPSB0YXJnZXQucGFyZW50ID9cbiAgICAgICAgICAgIHRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRhcmdldC5wb3NpdGlvbikgOlxuICAgICAgICAgICAgdGFyZ2V0LnBvc2l0aW9uO1xuXG4gICAgICAgIC8vIGNjLmxvZyhgW0F0dGFja01vdmVyXSDnm67moIfkuJbnlYzlnZDmoIc6ICgke3RhcmdldFdvcmxkUG9zLngudG9GaXhlZCgyKX0sICR7dGFyZ2V0V29ybGRQb3MueS50b0ZpeGVkKDIpfSlgKTtcblxuICAgICAgICAvLyDlsIbnm67moIfkuJbnlYzlnZDmoIfovazmjaLkuLrmlLvlh7vogIXniLboioLngrnnmoTmnKzlnLDlnZDmoIdcbiAgICAgICAgbGV0IGF0dGFja1BvcztcbiAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnQpIHtcbiAgICAgICAgICAgIC8vIOi9rOaNouS4uuaUu+WHu+iAheeItuiKgueCueeahOacrOWcsOWdkOagh1xuICAgICAgICAgICAgYXR0YWNrUG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0YXJnZXRXb3JsZFBvcyk7XG4gICAgICAgICAgICAvLyBjYy5sb2coYFtBdHRhY2tNb3Zlcl0g6L2s5o2i5Li65pS75Ye76ICF54i26IqC54K5KCR7dGhpcy5ub2RlLnBhcmVudC5uYW1lfSnnmoTmnKzlnLDlnZDmoIc6ICgke2F0dGFja1Bvcy54LnRvRml4ZWQoMil9LCAke2F0dGFja1Bvcy55LnRvRml4ZWQoMil9KWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5aaC5p6c5rKh5pyJ54i26IqC54K577yM55u05o6l5L2/55So5LiW55WM5Z2Q5qCHXG4gICAgICAgICAgICBhdHRhY2tQb3MgPSB0YXJnZXRXb3JsZFBvcztcbiAgICAgICAgICAgIC8vIGNjLmxvZyhgW0F0dGFja01vdmVyXSDmlLvlh7vogIXml6DniLboioLngrnvvIzkvb/nlKjkuJbnlYzlnZDmoIc6ICgke2F0dGFja1Bvcy54LnRvRml4ZWQoMil9LCAke2F0dGFja1Bvcy55LnRvRml4ZWQoMil9KWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6K6h566X5pa55ZCR77yI5LuO5pS75Ye76ICF5b2T5YmN5L2N572u5oyH5ZCR55uu5qCH5L2N572u77yJXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGF0dGFja1Bvcy5zdWIodGhpcy5vcmlnaW5hbFBvc2l0aW9uKS5ub3JtYWxpemUoKTtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBhdHRhY2tQb3Muc3ViKHRoaXMub3JpZ2luYWxQb3NpdGlvbikubWFnKCk7XG5cbiAgICAgICAgLy8gY2MubG9nKGBbQXR0YWNrTW92ZXJdIOiuoeeul+aWueWQkeWSjOi3neemuzpgKTtcbiAgICAgICAgLy8gY2MubG9nKGBbQXR0YWNrTW92ZXJdICAg5pS75Ye76ICF5pys5Zyw5L2N572uOiAoJHt0aGlzLm9yaWdpbmFsUG9zaXRpb24ueC50b0ZpeGVkKDIpfSwgJHt0aGlzLm9yaWdpbmFsUG9zaXRpb24ueS50b0ZpeGVkKDIpfSlgKTtcbiAgICAgICAgLy8gY2MubG9nKGBbQXR0YWNrTW92ZXJdICAg5pa55ZCR5ZCR6YePOiAoJHtkaXJlY3Rpb24ueC50b0ZpeGVkKDIpfSwgJHtkaXJlY3Rpb24ueS50b0ZpeGVkKDIpfSlgKTtcbiAgICAgICAgLy8gY2MubG9nKGBbQXR0YWNrTW92ZXJdICAg6Led56a7OiAke2Rpc3RhbmNlLnRvRml4ZWQoMil9YCk7XG5cbiAgICAgICAgLy8g6K6h566X5pS75Ye75L2N572u77yI5Zyo55uu5qCH5YmN5pa55YGc55WZ77yM5L2G5L+d5oyB5Zyo5pS75Ye76ICF54i26IqC54K555qE5pys5Zyw5Z2Q5qCH57O75Lit77yJXG4gICAgICAgIGF0dGFja1BvcyA9IGF0dGFja1Bvcy5zdWIoZGlyZWN0aW9uLm11bCh0aGlzLmF0dGFja0Rpc3RhbmNlKSk7XG5cbiAgICAgICAgLy8gY2MubG9nKGBbQXR0YWNrTW92ZXJdIOaUu+WHu+S9jee9ruiuoeeulzpgKTtcbiAgICAgICAgLy8gY2MubG9nKGBbQXR0YWNrTW92ZXJdICAg5pS75Ye76Led56a76K6+572uOiAke3RoaXMuYXR0YWNrRGlzdGFuY2V9YCk7XG4gICAgICAgIC8vIGNjLmxvZyhgW0F0dGFja01vdmVyXSAgIOacgOe7iOaUu+WHu+S9jee9ru+8iOacrOWcsOWdkOagh++8iTogKCR7YXR0YWNrUG9zLngudG9GaXhlZCgyKX0sICR7YXR0YWNrUG9zLnkudG9GaXhlZCgyKX0pYCk7XG5cbiAgICAgICAgLy8g6K6+572u6Z2i5ZCR5pa55ZCR77yI5qC55o2u55uu5qCH5Zyo5bem6L656L+Y5piv5Y+z6L6577yJXG4gICAgICAgIGlmIChhdHRhY2tQb3MueCA8IHRoaXMub3JpZ2luYWxQb3NpdGlvbi54KSB7XG4gICAgICAgICAgICAvLyDnm67moIflnKjlt6bovrnvvIzpnaLlkJHlt6bovrnvvIhzY2FsZVjkuLrotJ/vvIlcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtTWF0aC5hYnModGhpcy5vcmlnaW5hbFNjYWxlWCk7XG4gICAgICAgICAgICAvLyBjYy5sb2coYFtBdHRhY2tNb3Zlcl0g55uu5qCH5Zyo5bem6L6577yM6K6+572uc2NhbGVY5Li66LSfOiAke3RoaXMubm9kZS5zY2FsZVgudG9GaXhlZCgyKX1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOebruagh+WcqOWPs+i+ue+8jOmdouWQkeWPs+i+ue+8iHNjYWxlWOS4uuato++8iVxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IE1hdGguYWJzKHRoaXMub3JpZ2luYWxTY2FsZVgpO1xuICAgICAgICAgICAgLy8gY2MubG9nKGBbQXR0YWNrTW92ZXJdIOebruagh+WcqOWPs+i+ue+8jOiuvue9rnNjYWxlWOS4uuatozogJHt0aGlzLm5vZGUuc2NhbGVYLnRvRml4ZWQoMil9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjYy5sb2coYFtBdHRhY2tNb3Zlcl0gPT09PT09PT09PSDmlLvlh7vluo/liJflh4blpIflrozmiJAgPT09PT09PT09PWApO1xuXG4gICAgICAgIC8vIDMuIOW8gOWni+aUu+WHu+W6j+WIl1xuICAgICAgICB0aGlzLl9wZXJmb3JtQXR0YWNrU2VxdWVuY2UoYXR0YWNrUG9zKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Y+q5pKt5pS+5pS75Ye75Yqo55S777yI5LiN56e75Yqo77yJLSDnlKjkuo7ov5znqIvmlLvlh7tcbiAgICAgKiDliJvlu7rkuIDkuKrlvLnpgZPoioLngrnvvIznp7vliqjliLDnm67moIfpmYTov5HvvIznhLblkI7op6blj5Hlj5flh7vliqjnlLvlkozkvKTlrrPorqHnrpdcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IHRhcmdldCAtIOebruagh+iKgueCuVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ29tcGxldGUgLSDlrozmiJDlm57osINcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkhpdCAtIOWPl+WHu+aXtuWbnuiwg++8iOWcqOWPl+WHu+WKqOeUu+aSreaUvuWIsOS4gOWNiuaXtuinpuWPke+8jOeUqOS6juS8pOWus+iuoeeul++8iVxuICAgICAqL1xuICAgIHBsYXlBdHRhY2tBbmltYXRpb25Pbmx5KHRhcmdldCwgb25Db21wbGV0ZSwgb25IaXQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBdHRhY2tpbmcpIHtcbiAgICAgICAgICAgIGNjLndhcm4oYCR7dGhpcy5ub2RlLm5hbWV9IOato+WcqOaUu+WHu+S4re+8jOW/veeVpeaWsOeahOaUu+WHu+ivt+axgmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5pc1ZhbGlkKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIuaUu+WHu+ebruagh+aXoOaViO+8gVwiKTtcbiAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSBvbkNvbXBsZXRlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzQXR0YWNraW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkF0dGFja0NvbXBsZXRlID0gb25Db21wbGV0ZTtcbiAgICAgICAgdGhpcy5vbkhpdENhbGxiYWNrID0gb25IaXQ7IC8vIOS/neWtmOWPl+WHu+Wbnuiwg1xuICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXQgPSB0YXJnZXQ7XG5cbiAgICAgICAgLy8g5L+d5a2Y5Y6f5aeLIHNjYWxlXG4gICAgICAgIHRoaXMub3JpZ2luYWxTY2FsZVggPSB0aGlzLm5vZGUuc2NhbGVYO1xuICAgICAgICB0aGlzLm9yaWdpbmFsU2NhbGVZID0gdGhpcy5ub2RlLnNjYWxlWTtcblxuICAgICAgICAvLyBjYy5sb2coYFtBdHRhY2tNb3Zlcl0gJHt0aGlzLm5vZGUubmFtZX0g6L+c56iL5pS75Ye777ya5pKt5pS+5pS75Ye75Yqo55S777yM5by56YGT56e75Yqo5Yiw55uu5qCHYCk7XG5cbiAgICAgICAgLy8g5pKt5pS+5pS75Ye75Yqo55S777yI5Lq654mp5pys6Lqr77yJXG4gICAgICAgIHRoaXMuX3BsYXlBdHRhY2tBbmltYXRpb24oKTtcblxuICAgICAgICAvLyDliJvlu7rlvLnpgZPoioLngrnlubbnp7vliqjliLDnm67moIfpmYTov5FcbiAgICAgICAgdGhpcy5fY3JlYXRlQW5kTW92ZVByb2plY3RpbGUodGFyZ2V0KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yib5bu65by56YGT6IqC54K55bm256e75Yqo5Yiw55uu5qCH6ZmE6L+RXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfY3JlYXRlQW5kTW92ZVByb2plY3RpbGUodGFyZ2V0KSB7XG4gICAgICAgIGlmICghdGFyZ2V0IHx8ICF0YXJnZXQuaXNWYWxpZCkge1xuICAgICAgICAgICAgdGhpcy5fb25SYW5nZWRBdHRhY2tDb21wbGV0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwiW0F0dGFja01vdmVyXSDml6Dms5XliJvlu7rlvLnpgZPvvJrmlLvlh7vogIXmsqHmnInniLboioLngrlcIik7XG4gICAgICAgICAgICB0aGlzLl9vblJhbmdlZEF0dGFja0NvbXBsZXRlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDliJvlu7rlvLnpgZPoioLngrnvvIjlrZDlvLnlvaLnirbvvIlcbiAgICAgICAgY29uc3QgcHJvamVjdGlsZSA9IG5ldyBjYy5Ob2RlKFwiUmFuZ2VkUHJvamVjdGlsZVwiKTtcbiAgICAgICAgY29uc3QgZ3JhcGhpY3MgPSBwcm9qZWN0aWxlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG5cbiAgICAgICAgLy8g6I635Y+W6LW35aeL5L2N572u5ZKM55uu5qCH5L2N572uXG4gICAgICAgIGNvbnN0IGNhc3RlcldvcmxkUG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICAgIGNvbnN0IHRhcmdldFdvcmxkUG9zID0gdGFyZ2V0LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG5cbiAgICAgICAgLy8g6L2s5o2i5Li654i26IqC54K555qE5pys5Zyw5Z2Q5qCHXG4gICAgICAgIGNvbnN0IHN0YXJ0UG9zID0gcGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGNhc3RlcldvcmxkUG9zKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0UG9zID0gcGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRhcmdldFdvcmxkUG9zKTtcblxuICAgICAgICAvLyDorqHnrpfmlLvlh7vkvY3nva7vvIjlnKjnm67moIfliY3mlrnlgZznlZnvvIznsbvkvLzov5HmiJjmlLvlh7vvvIlcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGFyZ2V0UG9zLnN1YihzdGFydFBvcykubm9ybWFsaXplKCk7XG4gICAgICAgIGNvbnN0IGF0dGFja1BvcyA9IHRhcmdldFBvcy5zdWIoZGlyZWN0aW9uLm11bCh0aGlzLmF0dGFja0Rpc3RhbmNlKSk7XG5cbiAgICAgICAgLy8g6K6h566X5ZyG6ZSl55qE5pa55ZCR77yI55So5LqO5peL6L2s77yJXG4gICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihkaXJlY3Rpb24ueSwgZGlyZWN0aW9uLngpICogMTgwIC8gTWF0aC5QSTtcblxuICAgICAgICAvLyDorr7nva7lnIbplKXpopzoibLvvIjnmb3oibLvvIlcbiAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9IDE7XG5cbiAgICAgICAgLy8g57uY5Yi25ZyG6ZSl5b2i54q277ya562J6IWw5LiJ6KeS5b2iXG4gICAgICAgIGNvbnN0IGNvbmVMZW5ndGggPSAxNTsgLy8g5ZyG6ZSl6ZW/5bqmXG4gICAgICAgIGNvbnN0IGNvbmVCYXNlV2lkdGggPSA1OyAvLyDlnIbplKXlupXpg6jlrr3luqZcblxuICAgICAgICAvLyDml4vovazliLDnm67moIfmlrnlkJFcbiAgICAgICAgcHJvamVjdGlsZS5hbmdsZSA9IGFuZ2xlO1xuXG4gICAgICAgIC8vIOe7mOWItuWchumUpe+8iOetieiFsOS4ieinkuW9ou+8jOW6lemDqOWcqOWOn+eCue+8jOWwluerr+aMh+WQkeebruagh+aWueWQke+8iVxuICAgICAgICBncmFwaGljcy5tb3ZlVG8oY29uZUxlbmd0aCAvIDIsIDApOyAvLyDlsJbnq6/vvIjmjIflkJHnm67moIfvvIlcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKC1jb25lTGVuZ3RoIC8gMiwgLWNvbmVCYXNlV2lkdGggLyAyKTsgLy8g5bqV6YOo5bem54K5XG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbygtY29uZUxlbmd0aCAvIDIsIGNvbmVCYXNlV2lkdGggLyAyKTsgLy8g5bqV6YOo5Y+z54K5XG4gICAgICAgIGdyYXBoaWNzLmNsb3NlKCk7XG4gICAgICAgIGdyYXBoaWNzLmZpbGwoKTtcblxuICAgICAgICAvLyDorr7nva7liJ3lp4vkvY3nva5cbiAgICAgICAgcHJvamVjdGlsZS5zZXRQb3NpdGlvbihzdGFydFBvcyk7XG4gICAgICAgIHBhcmVudC5hZGRDaGlsZChwcm9qZWN0aWxlKTtcblxuICAgICAgICAvLyDorqHnrpfnp7vliqjml7bpl7TvvIjov5znqIvmlLvlh7vlvLnpgZPpgJ/luqbmm7Tlv6vvvIlcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBzdGFydFBvcy5zdWIoYXR0YWNrUG9zKS5tYWcoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdGlsZVNwZWVkID0gdGhpcy5tb3ZlU3BlZWQgKiAxLjU7IC8vIOW8uemBk+mAn+W6puaYr+enu+WKqOmAn+W6pueahDEuNeWAjVxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IGRpc3RhbmNlIC8gcHJvamVjdGlsZVNwZWVkO1xuXG4gICAgICAgIC8vIOW8uemBk+enu+WKqOWIsOebruagh+mZhOi/kVxuICAgICAgICBjYy50d2Vlbihwcm9qZWN0aWxlKVxuICAgICAgICAgICAgLnRvKGR1cmF0aW9uLCB7IHBvc2l0aW9uOiBhdHRhY2tQb3MgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g5by56YGT5Yiw6L6+55uu5qCH6ZmE6L+R77ya6Kem5Y+R5Y+X5Ye75Yqo55S75ZKM5Lyk5a6z6K6h566XXG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3RpbGUgJiYgcHJvamVjdGlsZS5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RpbGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIOaSreaUvuWPl+WHu+WKqOeUu+W5tuinpuWPkeS8pOWus+iuoeeul++8iOS4jui/keaImOaUu+WHu+S4gOagt+eahOmAu+i+ke+8iVxuICAgICAgICAgICAgICAgIHRoaXMuX3BsYXlIaXRBbmltYXRpb25BbmREYW1hZ2UoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5pKt5pS+5Y+X5Ye75Yqo55S75bm26Kem5Y+R5Lyk5a6z6K6h566X77yI55So5LqO6L+c56iL5pS75Ye777yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcGxheUhpdEFuaW1hdGlvbkFuZERhbWFnZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRUYXJnZXQgfHwgIXRoaXMuY3VycmVudFRhcmdldC5pc1ZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLl9vblJhbmdlZEF0dGFja0NvbXBsZXRlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXJnZXRTa2VsZXRvbiA9IHRoaXMuY3VycmVudFRhcmdldC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICBpZiAodGFyZ2V0U2tlbGV0b24pIHtcbiAgICAgICAgICAgIC8vIOaSreaUvuWPl+WHu+WKqOeUu++8iOS4jeW+queOr++8iVxuICAgICAgICAgICAgdGFyZ2V0U2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIEFuaW1hdGlvblN0YXRlLkJZX0FUSywgZmFsc2UpO1xuXG4gICAgICAgICAgICAvLyDlnKjlj5flh7vliqjnlLvmkq3mlL7liLDkuIDljYrml7bop6blj5HkvKTlrrPorqHnrpdcbiAgICAgICAgICAgIGlmICh0aGlzLm9uSGl0Q2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCBoaXRBbmltYXRpb25IYWxmRHVyYXRpb24gPSB0aGlzLmhpdEFuaW1hdGlvbkR1cmF0aW9uIC8gMjtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uSGl0Q2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25IaXRDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgaGl0QW5pbWF0aW9uSGFsZkR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5Y+X5Ye75Yqo55S75pKt5pS+5a6M5ZCO6L+U5Zue5b6F5py654q25oCBXG4gICAgICAgICAgICB0YXJnZXRTa2VsZXRvbi5zZXRDb21wbGV0ZUxpc3RlbmVyKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFyZ2V0ICYmIHRoaXMuY3VycmVudFRhcmdldC5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFN0YXRzID0gdGhpcy5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyDlj6rmnInlrZjmtLvnmoTmiY3ov5Tlm57lvoXmnLrliqjnlLtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFN0YXRzICYmICF0YXJnZXRTdGF0cy5pc0RlYWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIEFuaW1hdGlvblN0YXRlLldBSVQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhcmdldFNrZWxldG9uLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7XG5cbiAgICAgICAgICAgICAgICAvLyDlj5flh7vliqjnlLvlrozmiJDlkI7vvIzosIPnlKjlrozmiJDlm57osINcbiAgICAgICAgICAgICAgICB0aGlzLl9vblJhbmdlZEF0dGFja0NvbXBsZXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWmguaenOayoeaciVNwaW5l57uE5Lu277yM55u05o6l6Kem5Y+R5Lyk5a6z6K6h566XXG4gICAgICAgICAgICBpZiAodGhpcy5vbkhpdENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkhpdENhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDlu7bov5/kuIDlsI/mrrXml7bpl7TlkI7osIPnlKjlrozmiJDlm57osIPvvIjmqKHmi5/lj5flh7vliqjnlLvml7bpl7TvvIlcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vblJhbmdlZEF0dGFja0NvbXBsZXRlKCk7XG4gICAgICAgICAgICB9LCB0aGlzLmhpdEFuaW1hdGlvbkR1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDov5znqIvmlLvlh7vlrozmiJDlm57osINcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9vblJhbmdlZEF0dGFja0NvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLmlzQXR0YWNraW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3VycmVudFRhcmdldCA9IG51bGw7XG5cbiAgICAgICAgLy8g56Gu5L+d6L+U5Zue5b6F5py65Yqo55S7XG4gICAgICAgIGlmICh0aGlzLnNrZWxldG9uKSB7XG4gICAgICAgICAgICB0aGlzLnNrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltYXRpb25TdGF0ZS5XQUlULCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9uQXR0YWNrQ29tcGxldGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5vbkF0dGFja0NvbXBsZXRlO1xuICAgICAgICAgICAgdGhpcy5vbkF0dGFja0NvbXBsZXRlID0gbnVsbDtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5p+l5om+5Lik5Liq6IqC54K555qE5YWx5ZCM54i26IqC54K5XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IG5vZGUxIC0g6IqC54K5MVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gbm9kZTIgLSDoioLngrkyXG4gICAgICogQHJldHVybnMge2NjLk5vZGV9IOWFseWQjOeItuiKgueCue+8jOWmguaenOayoeacieWImei/lOWbnm51bGxcbiAgICAgKi9cbiAgICBfZmluZENvbW1vblBhcmVudChub2RlMSwgbm9kZTIpIHtcbiAgICAgICAgaWYgKCFub2RlMSB8fCAhbm9kZTIpIHJldHVybiBudWxsO1xuXG4gICAgICAgIC8vIOWmguaenOS4pOS4quiKgueCueaYr+WQjOS4gOS4queItuiKgueCue+8jOebtOaOpei/lOWbnlxuICAgICAgICBpZiAobm9kZTEucGFyZW50ID09PSBub2RlMi5wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlMS5wYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlkJHkuIrmn6Xmib7lhbHlkIzniLboioLngrlcbiAgICAgICAgbGV0IHBhcmVudDEgPSBub2RlMS5wYXJlbnQ7XG4gICAgICAgIHdoaWxlIChwYXJlbnQxKSB7XG4gICAgICAgICAgICBsZXQgcGFyZW50MiA9IG5vZGUyLnBhcmVudDtcbiAgICAgICAgICAgIHdoaWxlIChwYXJlbnQyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudDEgPT09IHBhcmVudDIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcmVudDIgPSBwYXJlbnQyLnBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcmVudDEgPSBwYXJlbnQxLnBhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmiafooYzmlLvlh7vliqjnlLvluo/liJfvvIjkvb/nlKggY2MudHdlZW4g5pawIEFQSe+8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3BlcmZvcm1BdHRhY2tTZXF1ZW5jZShhdHRhY2tQb3MpIHtcbiAgICAgICAgLy8gPT09PT09PT09PSDosIPor5Xkv6Hmga/vvJrnp7vliqjluo/liJcgPT09PT09PT09PVxuICAgICAgICAvLyBjYy5sb2coYFtBdHRhY2tNb3Zlcl0gPT09PT09PT09PSDlvIDlp4vmiafooYznp7vliqjluo/liJcgPT09PT09PT09PWApO1xuICAgICAgICAvLyBjYy5sb2coYFtBdHRhY2tNb3Zlcl0g5b2T5YmN6IqC54K55L2N572uOiAoJHt0aGlzLm5vZGUueC50b0ZpeGVkKDIpfSwgJHt0aGlzLm5vZGUueS50b0ZpeGVkKDIpfSlgKTtcbiAgICAgICAgLy8gY2MubG9nKGBbQXR0YWNrTW92ZXJdIOebruagh+aUu+WHu+S9jee9rjogKCR7YXR0YWNrUG9zLngudG9GaXhlZCgyKX0sICR7YXR0YWNrUG9zLnkudG9GaXhlZCgyKX0pYCk7XG4gICAgICAgIC8vIGNjLmxvZyhgW0F0dGFja01vdmVyXSDljp/lp4vkvY3nva46ICgke3RoaXMub3JpZ2luYWxQb3NpdGlvbi54LnRvRml4ZWQoMil9LCAke3RoaXMub3JpZ2luYWxQb3NpdGlvbi55LnRvRml4ZWQoMil9KWApO1xuXG4gICAgICAgIC8vIOiuoeeul+enu+WKqOaXtumXtFxuICAgICAgICBjb25zdCBkaXN0YW5jZVRvVGFyZ2V0ID0gdGhpcy5ub2RlLnBvc2l0aW9uLnN1YihhdHRhY2tQb3MpLm1hZygpO1xuICAgICAgICBjb25zdCBkdXJhdGlvblRvVGFyZ2V0ID0gZGlzdGFuY2VUb1RhcmdldCAvIHRoaXMubW92ZVNwZWVkO1xuXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlQmFjayA9IGF0dGFja1Bvcy5zdWIodGhpcy5vcmlnaW5hbFBvc2l0aW9uKS5tYWcoKTtcbiAgICAgICAgY29uc3QgZHVyYXRpb25CYWNrID0gZGlzdGFuY2VCYWNrIC8gdGhpcy5tb3ZlU3BlZWQ7XG5cbiAgICAgICAgLy8gY2MubG9nKGBbQXR0YWNrTW92ZXJdIOenu+WKqOWPguaVsDpgKTtcbiAgICAgICAgLy8gY2MubG9nKGBbQXR0YWNrTW92ZXJdICAg56e75Yqo5Yiw55uu5qCH6Led56a7OiAke2Rpc3RhbmNlVG9UYXJnZXQudG9GaXhlZCgyKX1gKTtcbiAgICAgICAgLy8gY2MubG9nKGBbQXR0YWNrTW92ZXJdICAg56e75Yqo6YCf5bqmOiAke3RoaXMubW92ZVNwZWVkfWApO1xuICAgICAgICAvLyBjYy5sb2coYFtBdHRhY2tNb3Zlcl0gICDnp7vliqjliLDnm67moIfml7bpl7Q6ICR7ZHVyYXRpb25Ub1RhcmdldC50b0ZpeGVkKDIpfeenkmApO1xuICAgICAgICAvLyBjYy5sb2coYFtBdHRhY2tNb3Zlcl0gICDov5Tlm57ot53nprs6ICR7ZGlzdGFuY2VCYWNrLnRvRml4ZWQoMil9YCk7XG4gICAgICAgIC8vIGNjLmxvZyhgW0F0dGFja01vdmVyXSAgIOi/lOWbnuaXtumXtDogJHtkdXJhdGlvbkJhY2sudG9GaXhlZCgyKX3np5JgKTtcblxuICAgICAgICAvLyDkvb/nlKggY2MudHdlZW4g6ZO+5byP6LCD55SoXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC8vIDEuIOenu+WKqOWIsOebruagh+S9jee9rlxuICAgICAgICAgICAgLnRvKGR1cmF0aW9uVG9UYXJnZXQsIHsgcG9zaXRpb246IGF0dGFja1BvcyB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcbiAgICAgICAgICAgIC8vIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjYy5sb2coYFtBdHRhY2tNb3Zlcl0g4pyTIOW3suenu+WKqOWIsOaUu+WHu+S9jee9rjogKCR7dGhpcy5ub2RlLngudG9GaXhlZCgyKX0sICR7dGhpcy5ub2RlLnkudG9GaXhlZCgyKX0pYCk7XG4gICAgICAgICAgICAvLyB9KVxuXG4gICAgICAgICAgICAvLyAyLiDmkq3mlL7mlLvlh7vliqjnlLtcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coYFtBdHRhY2tNb3Zlcl0g5byA5aeL5pKt5pS+5pS75Ye75Yqo55S7YCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGxheUF0dGFja0FuaW1hdGlvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5kZWxheSh0aGlzLmF0dGFja0R1cmF0aW9uKVxuICAgICAgICAgICAgLy8gLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGNjLmxvZyhgW0F0dGFja01vdmVyXSDinJMg5pS75Ye75Yqo55S75pKt5pS+5a6M5oiQYCk7XG4gICAgICAgICAgICAvLyB9KVxuXG4gICAgICAgICAgICAvLyAzLiDov5Tlm57ljp/kvY3nva5cbiAgICAgICAgICAgIC50byhkdXJhdGlvbkJhY2ssIHsgcG9zaXRpb246IHRoaXMub3JpZ2luYWxQb3NpdGlvbiB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcbiAgICAgICAgICAgIC8vIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjYy5sb2coYFtBdHRhY2tNb3Zlcl0g4pyTIOW3sui/lOWbnuWOn+S9jee9rjogKCR7dGhpcy5ub2RlLngudG9GaXhlZCgyKX0sICR7dGhpcy5ub2RlLnkudG9GaXhlZCgyKX0pYCk7XG4gICAgICAgICAgICAvLyB9KVxuXG4gICAgICAgICAgICAvLyA0LiDlrozmiJDlm57osINcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coYFtBdHRhY2tNb3Zlcl0gPT09PT09PT09PSDmlLvlh7vluo/liJflrozmiJAgPT09PT09PT09PWApO1xuICAgICAgICAgICAgICAgIHRoaXMuX29uU2VxdWVuY2VDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmkq3mlL7mlLvlh7vliqjnlLvmlYjmnpxcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9wbGF5QXR0YWNrQW5pbWF0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy51c2VTcGluZUFuaW1hdGlvbiAmJiB0aGlzLnNrZWxldG9uKSB7XG4gICAgICAgICAgICAvLyDkvb/nlKggU3BpbmUg5Yqo55S7XG4gICAgICAgICAgICB0aGlzLl9wbGF5U3BpbmVBdHRhY2tBbmltYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOS9v+eUqOeugOWNleeahOe8qeaUvuWKqOeUu1xuICAgICAgICAgICAgdGhpcy5fcGxheVNjYWxlQW5pbWF0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5pKt5pS+IFNwaW5lIOaUu+WHu+WKqOeUu1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3BsYXlTcGluZUF0dGFja0FuaW1hdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNrZWxldG9uKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihgW0F0dGFja01vdmVyXSAke3RoaXMubm9kZS5uYW1lfSDmsqHmnIkgU3BpbmUg57uE5Lu2IWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMS4g5pKt5pS+5pS75Ye76ICF55qE5pS75Ye75Yqo55S7XG4gICAgICAgIC8vIGNjLmxvZyhgW0F0dGFja01vdmVyXSAke3RoaXMubm9kZS5uYW1lfSDmkq3mlL7mlLvlh7vliqjnlLtgKTtcbiAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbWF0aW9uU3RhdGUuQVRUQUNLLCBmYWxzZSk7XG5cbiAgICAgICAgLy8gMi4g5bu26L+f5pKt5pS+6KKr5pS75Ye76ICF55qE5Y+X5Ye75Yqo55S777yI6K6p5oiY5paX5pu05rWB55WF77yJXG4gICAgICAgIC8vIOazqOaEj++8muWvueS6jui/nOeoi+aUu+WHu++8jOWPl+WHu+WKqOeUu+S8muWcqOW8uemBk+WIsOi+vuebruagh+WQjueUsV9wbGF5SGl0QW5pbWF0aW9uQW5kRGFtYWdl5pKt5pS+77yM6L+Z6YeM5LiN5pKt5pS+XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUYXJnZXQgJiYgdGhpcy5jdXJyZW50VGFyZ2V0LmlzVmFsaWQgJiYgIXRoaXMuaXNSYW5nZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFNrZWxldG9uID0gdGhpcy5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICBpZiAodGFyZ2V0U2tlbGV0b24pIHtcbiAgICAgICAgICAgICAgICAvLyDlu7bov5/mkq3mlL7lj5flh7vliqjnlLvvvIjku4Xov5HmiJjmlLvlh7vvvIlcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUYXJnZXQgJiYgdGhpcy5jdXJyZW50VGFyZ2V0LmlzVmFsaWQgJiYgdGFyZ2V0U2tlbGV0b24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhgW0F0dGFja01vdmVyXSAke3RoaXMuY3VycmVudFRhcmdldC5uYW1lfSDmkq3mlL7lj5flh7vliqjnlLvvvIjlu7bov58ke3RoaXMuaGl0QW5pbWF0aW9uRGVsYXl956eS77yJYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmkq3mlL7lj5flh7vliqjnlLvvvIjkuI3lvqrnjq/vvIlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFNrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltYXRpb25TdGF0ZS5CWV9BVEssIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g4pyFIOWcqOWPl+WHu+WKqOeUu+aSreaUvuWIsOS4gOWNiuaXtuinpuWPkeS8pOWus+iuoeeul1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub25IaXRDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhpdEFuaW1hdGlvbkhhbGZEdXJhdGlvbiA9IHRoaXMuaGl0QW5pbWF0aW9uRHVyYXRpb24gLyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub25IaXRDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkhpdENhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBoaXRBbmltYXRpb25IYWxmRHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlj5flh7vliqjnlLvmkq3mlL7lrozlkI7ov5Tlm57lvoXmnLrnirbmgIFcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOazqOaEj++8muatu+S6oeajgOa1i+WSjOatu+S6oeWKqOeUu+eUsSBEZWF0aFN5c3RlbSDlpITnkIZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFNrZWxldG9uLnNldENvbXBsZXRlTGlzdGVuZXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOajgOafpeebruagh+aYr+WQpui/mOWtmOa0u++8iOWPr+iDveW3sue7j+iiqyBEZWF0aFN5c3RlbSDlpITnkIbkuobvvIlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFyZ2V0ICYmIHRoaXMuY3VycmVudFRhcmdldC5pc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFN0YXRzID0gdGhpcy5jdXJyZW50VGFyZ2V0LmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlj6rmnInlrZjmtLvnmoTmiY3ov5Tlm57lvoXmnLrliqjnlLtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFN0YXRzICYmICF0YXJnZXRTdGF0cy5pc0RlYWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIEFuaW1hdGlvblN0YXRlLldBSVQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKGBbQXR0YWNrTW92ZXJdICR7dGhpcy5jdXJyZW50VGFyZ2V0Lm5hbWV9IOi/lOWbnuW+heacuuWKqOeUu2ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOa4hemZpOebkeWQrOWZqO+8jOmBv+WFjemHjeWkjeinpuWPkVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFNrZWxldG9uLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHRoaXMuaGl0QW5pbWF0aW9uRGVsYXkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKGBbQXR0YWNrTW92ZXJdICR7dGhpcy5jdXJyZW50VGFyZ2V0Lm5hbWV9IOayoeaciSBTcGluZSDnu4Tku7ZgKTtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmsqHmnIlTcGluZee7hOS7tu+8jOS5n+mcgOimgeinpuWPkW9uSGl05Zue6LCDXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vbkhpdENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSGl0Q2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHRoaXMuaGl0QW5pbWF0aW9uRGVsYXkgKyB0aGlzLmhpdEFuaW1hdGlvbkR1cmF0aW9uIC8gMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1JhbmdlZCkge1xuICAgICAgICAgICAgLy8g6L+c56iL5pS75Ye777ya5LiN5Zyo6L+Z6YeM5pKt5pS+5Y+X5Ye75Yqo55S777yM5Y+X5Ye75Yqo55S75Lya5Zyo5by56YGT5Yiw6L6+55uu5qCH5ZCO55SxX3BsYXlIaXRBbmltYXRpb25BbmREYW1hZ2Xmkq3mlL5cbiAgICAgICAgICAgIC8vIOS9huaYr+mcgOimgeehruS/nW9uSGl05Zue6LCD6KKr6LCD55So77yI5aaC5p6c5rKh5pyJ55uu5qCH5oiW55uu5qCH5peg5pWI77yJXG4gICAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudFRhcmdldCB8fCAhdGhpcy5jdXJyZW50VGFyZ2V0LmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uSGl0Q2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25IaXRDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5hdHRhY2tEdXJhdGlvbiAvIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5aaC5p6c5rKh5pyJ55uu5qCH77yM5Lmf6ZyA6KaB56Gu5L+db25IaXTlm57osIPooqvosIPnlKjvvIjkvovlpoLvvIzmlLvlh7vnqbrmsJTvvIlcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vbkhpdENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25IaXRDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRoaXMuYXR0YWNrRHVyYXRpb24gLyAyKTsgLy8g5YGH6K6+5pS75Ye75Yqo55S75LiA5Y2K5pe26Kem5Y+RXG4gICAgICAgIH1cblxuICAgICAgICAvLyAzLiDnm5HlkKzmlLvlh7vliqjnlLvlrozmiJDvvIznlKjkuo7mjqfliLbml7bluo9cbiAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRDb21wbGV0ZUxpc3RlbmVyKCgpID0+IHtcbiAgICAgICAgICAgIC8vIOaUu+WHu+WKqOeUu+WujOaIkOWQjui/lOWbnuW+heacuueKtuaAgVxuICAgICAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbWF0aW9uU3RhdGUuV0FJVCwgdHJ1ZSk7XG4gICAgICAgICAgICAvLyBjYy5sb2coYFtBdHRhY2tNb3Zlcl0gJHt0aGlzLm5vZGUubmFtZX0g6L+U5Zue5b6F5py65Yqo55S7YCk7XG4gICAgICAgICAgICAvLyDmuIXpmaTnm5HlkKzlmahcbiAgICAgICAgICAgIHRoaXMuc2tlbGV0b24uc2V0Q29tcGxldGVMaXN0ZW5lcihudWxsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g6L+Z6YeM5Y+v5Lul5re75Yqg5pu05aSa5pWI5p6c77yaXG4gICAgICAgIC8vIC0g5pKt5pS+5pS75Ye76Z+z5pWIXG4gICAgICAgIC8vIC0g5pKt5pS+57KS5a2Q5pWI5p6cXG4gICAgICAgIC8vIC0g5pKt5pS+5bGP5bmV6ZyH5Yqo562JXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOaSreaUvueugOWNleeahOe8qeaUvuWKqOeUu++8iOWkh+eUqOaWueahiO+8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3BsYXlTY2FsZUFuaW1hdGlvbigpIHtcbiAgICAgICAgLy8g6K6h566X57yp5pS+5YCN5pWw77yI5Z+65LqO5Y6f5aeLIHNjYWxl77yM5YiG5Yir5aSE55CGIFgg5ZKMIFkg6L2077yJXG4gICAgICAgIGNvbnN0IGVubGFyZ2VkU2NhbGVYID0gdGhpcy5vcmlnaW5hbFNjYWxlWCAqIDEuMjtcbiAgICAgICAgY29uc3QgZW5sYXJnZWRTY2FsZVkgPSB0aGlzLm9yaWdpbmFsU2NhbGVZICogMS4yO1xuXG4gICAgICAgIC8vIOeugOWNleeahOe8qeaUvuWKqOeUu+aooeaLn+aUu+WHu1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAudG8odGhpcy5hdHRhY2tEdXJhdGlvbiAqIDAuMywgeyBzY2FsZVg6IGVubGFyZ2VkU2NhbGVYLCBzY2FsZVk6IGVubGFyZ2VkU2NhbGVZIH0pXG4gICAgICAgICAgICAudG8odGhpcy5hdHRhY2tEdXJhdGlvbiAqIDAuNywgeyBzY2FsZVg6IHRoaXMub3JpZ2luYWxTY2FsZVgsIHNjYWxlWTogdGhpcy5vcmlnaW5hbFNjYWxlWSB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWKqOeUu+W6j+WIl+WujOaIkFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX29uU2VxdWVuY2VDb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5pc0F0dGFja2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXQgPSBudWxsOyAvLyDmuIXpmaTnm67moIflvJXnlKhcblxuICAgICAgICAvLyDnoa7kv53ov5Tlm57lvoXmnLrliqjnlLtcbiAgICAgICAgaWYgKHRoaXMuc2tlbGV0b24pIHtcbiAgICAgICAgICAgIHRoaXMuc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIEFuaW1hdGlvblN0YXRlLldBSVQsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub25BdHRhY2tDb21wbGV0ZSkge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLm9uQXR0YWNrQ29tcGxldGU7XG4gICAgICAgICAgICB0aGlzLm9uQXR0YWNrQ29tcGxldGUgPSBudWxsO1xuICAgICAgICAgICAgY2FsbGJhY2soKTsvL+aJp+ihjOWujOaIkOWbnuiwg1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOeri+WNs+WBnOatouaJgOacieWKqOeUu+W5tumHjee9rlxuICAgICAqL1xuICAgIHN0b3BBdHRhY2soKSB7XG4gICAgICAgIC8vIOWBnOatouaJgOaciSB0d2VlbiDliqjnlLtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZSk7XG5cbiAgICAgICAgLy8g5oGi5aSN5Y6f5aeL5L2N572uXG4gICAgICAgIGlmICh0aGlzLm9yaWdpbmFsUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMub3JpZ2luYWxQb3NpdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaBouWkjeWOn+WniyBzY2FsZSAo5YiG5Yir5oGi5aSNIFgg5ZKMIFkg6L20KVxuICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gdGhpcy5vcmlnaW5hbFNjYWxlWDtcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWSA9IHRoaXMub3JpZ2luYWxTY2FsZVk7XG5cbiAgICAgICAgLy8g5oGi5aSN5b6F5py65Yqo55S7XG4gICAgICAgIGlmICh0aGlzLnNrZWxldG9uKSB7XG4gICAgICAgICAgICB0aGlzLnNrZWxldG9uLnNldENvbXBsZXRlTGlzdGVuZXIobnVsbCk7IC8vIOa4hemZpOebkeWQrOWZqFxuICAgICAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbWF0aW9uU3RhdGUuV0FJVCwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzQXR0YWNraW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3VycmVudFRhcmdldCA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMub25BdHRhY2tDb21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5vbkF0dGFja0NvbXBsZXRlKCk7XG4gICAgICAgICAgICB0aGlzLm9uQXR0YWNrQ29tcGxldGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbiJdfQ==