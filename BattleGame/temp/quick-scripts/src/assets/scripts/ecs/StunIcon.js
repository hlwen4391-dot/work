"use strict";
cc._RF.push(module, '01822JymFhEl5+Y+3kqjLWk', 'StunIcon');
// Scripts/ecs/StunIcon.js

"use strict";

/**
 * 眩晕标志组件
 * 在角色头顶显示动态的眩晕标志
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // 标志的Y轴偏移（在角色头顶上方）
    offsetY: {
      "default": 260,
      tooltip: "眩晕标志相对于角色的Y轴偏移"
    },
    // 标志大小
    iconSize: {
      "default": 70,
      tooltip: "眩晕标志的大小"
    }
  },
  onLoad: function onLoad() {
    this.stunIcon = null;
  },
  /**
   * 显示眩晕标志
   */
  showStun: function showStun() {
    if (this.stunIcon && this.stunIcon.isValid) {
      // 如果已经存在，直接显示
      this.stunIcon.active = true;
      return;
    }

    // 创建眩晕标志节点
    this.stunIcon = new cc.Node("StunIcon");
    this.stunIcon.setPosition(0, this.offsetY);
    this.stunIcon.setContentSize(this.iconSize, this.iconSize);

    // 使用Graphics绘制眩晕标志（旋转圆圈）
    var graphics = this.stunIcon.addComponent(cc.Graphics);

    // 绘制旋转的圆圈效果
    var radius = this.iconSize / 2;
    this._drawStunCircles(graphics, radius);
    this.node.addChild(this.stunIcon);

    // 动态效果：旋转 + 上下浮动
    this._startAnimation();
  },
  /**
   * 隐藏眩晕标志
   */
  hideStun: function hideStun() {
    var _this = this;
    if (this.stunIcon && this.stunIcon.isValid) {
      // 淡出动画
      cc.tween(this.stunIcon).to(0.2, {
        opacity: 0,
        scale: 0.5
      }).call(function () {
        if (_this.stunIcon && _this.stunIcon.isValid) {
          _this.stunIcon.destroy();
          _this.stunIcon = null;
        }
      }).start();
    }
  },
  /**
   * 绘制眩晕圆圈效果（多个圆圈旋转）
   */
  _drawStunCircles: function _drawStunCircles(graphics, radius) {
    // 外圈 - 鲜艳的亮黄色大圆圈
    graphics.circle(0, 0, radius);
    graphics.strokeColor = new cc.Color(255, 255, 0); // 纯黄色
    graphics.lineWidth = 4; // 加粗线条
    graphics.stroke();

    // 中圈 - 鲜艳的橙红色圆圈
    graphics.circle(0, 0, radius * 0.7);
    graphics.strokeColor = new cc.Color(255, 100, 0); // 更鲜艳的橙红色
    graphics.lineWidth = 3; // 加粗线条
    graphics.stroke();

    // 内圈 - 亮黄色小圆圈
    graphics.circle(0, 0, radius * 0.4);
    graphics.strokeColor = new cc.Color(255, 255, 100); // 更亮的黄色
    graphics.lineWidth = 3; // 加粗线条
    graphics.stroke();

    // 绘制旋转的线条（模拟眩晕效果）- 更鲜艳的颜色
    var lineCount = 8; // 8条旋转线
    for (var i = 0; i < lineCount; i++) {
      var angle = Math.PI * 2 / lineCount * i;
      var startX = Math.cos(angle) * radius * 0.4;
      var startY = Math.sin(angle) * radius * 0.4;
      var endX = Math.cos(angle) * radius * 0.9;
      var endY = Math.sin(angle) * radius * 0.9;
      graphics.moveTo(startX, startY);
      graphics.lineTo(endX, endY);
      graphics.strokeColor = new cc.Color(255, 255, 0, 200); // 更鲜艳的黄色，不透明度更高
      graphics.lineWidth = 2.5; // 加粗线条
      graphics.stroke();
    }
  },
  /**
   * 启动动态动画
   */
  _startAnimation: function _startAnimation() {
    if (!this.stunIcon || !this.stunIcon.isValid) return;
    var originalY = this.offsetY;

    // 旋转动画（圆圈旋转效果）
    cc.tween(this.stunIcon).by(1.5, {
      angle: 360
    }) // 1.5秒转一圈，更快更明显
    .union().repeatForever().start();

    // 上下浮动动画
    cc.tween(this.stunIcon).to(0.5, {
      y: originalY + 5
    }, {
      easing: 'sineInOut'
    }).to(0.5, {
      y: originalY - 5
    }, {
      easing: 'sineInOut'
    }).union().repeatForever().start();

    // 轻微缩放脉冲效果（让圆圈更有动感）
    cc.tween(this.stunIcon).to(0.4, {
      scale: 1.1
    }, {
      easing: 'sineInOut'
    }).to(0.4, {
      scale: 1.0
    }, {
      easing: 'sineInOut'
    }).union().repeatForever().start();
  }
});

cc._RF.pop();