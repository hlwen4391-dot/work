
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ecs/StunIcon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxTdHVuSWNvbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9mZnNldFkiLCJ0b29sdGlwIiwiaWNvblNpemUiLCJvbkxvYWQiLCJzdHVuSWNvbiIsInNob3dTdHVuIiwiaXNWYWxpZCIsImFjdGl2ZSIsIk5vZGUiLCJzZXRQb3NpdGlvbiIsInNldENvbnRlbnRTaXplIiwiZ3JhcGhpY3MiLCJhZGRDb21wb25lbnQiLCJHcmFwaGljcyIsInJhZGl1cyIsIl9kcmF3U3R1bkNpcmNsZXMiLCJub2RlIiwiYWRkQ2hpbGQiLCJfc3RhcnRBbmltYXRpb24iLCJoaWRlU3R1biIsIl90aGlzIiwidHdlZW4iLCJ0byIsIm9wYWNpdHkiLCJzY2FsZSIsImNhbGwiLCJkZXN0cm95Iiwic3RhcnQiLCJjaXJjbGUiLCJzdHJva2VDb2xvciIsIkNvbG9yIiwibGluZVdpZHRoIiwic3Ryb2tlIiwibGluZUNvdW50IiwiaSIsImFuZ2xlIiwiTWF0aCIsIlBJIiwic3RhcnRYIiwiY29zIiwic3RhcnRZIiwic2luIiwiZW5kWCIsImVuZFkiLCJtb3ZlVG8iLCJsaW5lVG8iLCJvcmlnaW5hbFkiLCJieSIsInVuaW9uIiwicmVwZWF0Rm9yZXZlciIsInkiLCJlYXNpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSO0lBQ0FDLE9BQU8sRUFBRTtNQUNMLFdBQVMsR0FBRztNQUNaQyxPQUFPLEVBQUU7SUFDYixDQUFDO0lBRUQ7SUFDQUMsUUFBUSxFQUFFO01BQ04sV0FBUyxFQUFFO01BQ1hELE9BQU8sRUFBRTtJQUNiO0VBQ0osQ0FBQztFQUVERSxNQUFNLFdBQUFBLE9BQUEsRUFBRztJQUNMLElBQUksQ0FBQ0Ms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QUFFRSxLQUFLLEVBQUU7SUFBSSxDQUFDLEVBQUU7TUFBRTJCLE1BQU0sRUFBRTtJQUFZLENBQUMsQ0FBQyxDQUNoREgsS0FBSyxFQUFFLENBQ1BDLGFBQWEsRUFBRSxDQUNmdEIsS0FBSyxFQUFFO0VBQ2hCO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog55yp5pmV5qCH5b+X57uE5Lu2XHJcbiAqIOWcqOinkuiJsuWktOmhtuaYvuekuuWKqOaAgeeahOecqeaZleagh+W/l1xyXG4gKi9cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyDmoIflv5fnmoRZ6L205YGP56e777yI5Zyo6KeS6Imy5aS06aG25LiK5pa577yJXHJcbiAgICAgICAgb2Zmc2V0WToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAyNjAsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi55yp5pmV5qCH5b+X55u45a+55LqO6KeS6Imy55qEWei9tOWBj+enu1wiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5qCH5b+X5aSn5bCPXHJcbiAgICAgICAgaWNvblNpemU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogNzAsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi55yp5pmV5qCH5b+X55qE5aSn5bCPXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnN0dW5JY29uID0gbnVsbDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrnnKnmmZXmoIflv5dcclxuICAgICAqL1xyXG4gICAgc2hvd1N0dW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3R1bkljb24gJiYgdGhpcy5zdHVuSWNvbi5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIC8vIOWmguaenOW3sue7j+WtmOWcqO+8jOebtOaOpeaYvuekulxyXG4gICAgICAgICAgICB0aGlzLnN0dW5JY29uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWIm+W7uuecqeaZleagh+W/l+iKgueCuVxyXG4gICAgICAgIHRoaXMuc3R1bkljb24gPSBuZXcgY2MuTm9kZShcIlN0dW5JY29uXCIpO1xyXG4gICAgICAgIHRoaXMuc3R1bkljb24uc2V0UG9zaXRpb24oMCwgdGhpcy5vZmZzZXRZKTtcclxuICAgICAgICB0aGlzLnN0dW5JY29uLnNldENvbnRlbnRTaXplKHRoaXMuaWNvblNpemUsIHRoaXMuaWNvblNpemUpO1xyXG5cclxuICAgICAgICAvLyDkvb/nlKhHcmFwaGljc+e7mOWItuecqeaZleagh+W/l++8iOaXi+i9rOWchuWciO+8iVxyXG4gICAgICAgIGNvbnN0IGdyYXBoaWNzID0gdGhpcy5zdHVuSWNvbi5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG5cclxuICAgICAgICAvLyDnu5jliLbml4vovaznmoTlnIblnIjmlYjmnpxcclxuICAgICAgICBjb25zdCByYWRpdXMgPSB0aGlzLmljb25TaXplIC8gMjtcclxuICAgICAgICB0aGlzLl9kcmF3U3R1bkNpcmNsZXMoZ3JhcGhpY3MsIHJhZGl1cyk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLnN0dW5JY29uKTtcclxuXHJcbiAgICAgICAgLy8g5Yqo5oCB5pWI5p6c77ya5peL6L2sICsg5LiK5LiL5rWu5YqoXHJcbiAgICAgICAgdGhpcy5fc3RhcnRBbmltYXRpb24oKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol4/nnKnmmZXmoIflv5dcclxuICAgICAqL1xyXG4gICAgaGlkZVN0dW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3R1bkljb24gJiYgdGhpcy5zdHVuSWNvbi5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIC8vIOa3oeWHuuWKqOeUu1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnN0dW5JY29uKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBvcGFjaXR5OiAwLCBzY2FsZTogMC41IH0pXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3R1bkljb24gJiYgdGhpcy5zdHVuSWNvbi5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3R1bkljb24uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0dW5JY29uID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe7mOWItuecqeaZleWchuWciOaViOaenO+8iOWkmuS4quWchuWciOaXi+i9rO+8iVxyXG4gICAgICovXHJcbiAgICBfZHJhd1N0dW5DaXJjbGVzKGdyYXBoaWNzLCByYWRpdXMpIHtcclxuICAgICAgICAvLyDlpJblnIggLSDpspzoibPnmoTkuq7pu4ToibLlpKflnIblnIhcclxuICAgICAgICBncmFwaGljcy5jaXJjbGUoMCwgMCwgcmFkaXVzKTtcclxuICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMCk7IC8vIOe6r+m7hOiJslxyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9IDQ7IC8vIOWKoOeyl+e6v+adoVxyXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAvLyDkuK3lnIggLSDpspzoibPnmoTmqZnnuqLoibLlnIblnIhcclxuICAgICAgICBncmFwaGljcy5jaXJjbGUoMCwgMCwgcmFkaXVzICogMC43KTtcclxuICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDEwMCwgMCk7IC8vIOabtOmynOiJs+eahOapmee6ouiJslxyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9IDM7IC8vIOWKoOeyl+e6v+adoVxyXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAvLyDlhoXlnIggLSDkuq7pu4ToibLlsI/lnIblnIhcclxuICAgICAgICBncmFwaGljcy5jaXJjbGUoMCwgMCwgcmFkaXVzICogMC40KTtcclxuICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMTAwKTsgLy8g5pu05Lqu55qE6buE6ImyXHJcbiAgICAgICAgZ3JhcGhpY3MubGluZVdpZHRoID0gMzsgLy8g5Yqg57KX57q/5p2hXHJcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIC8vIOe7mOWItuaXi+i9rOeahOe6v+adoe+8iOaooeaLn+ecqeaZleaViOaenO+8iS0g5pu06bKc6Imz55qE6aKc6ImyXHJcbiAgICAgICAgY29uc3QgbGluZUNvdW50ID0gODsgLy8gOOadoeaXi+i9rOe6v1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSAoTWF0aC5QSSAqIDIgLyBsaW5lQ291bnQpICogaTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRYID0gTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzICogMC40O1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFkgPSBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXMgKiAwLjQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZFggPSBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMgKiAwLjk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZFkgPSBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXMgKiAwLjk7XHJcblxyXG4gICAgICAgICAgICBncmFwaGljcy5tb3ZlVG8oc3RhcnRYLCBzdGFydFkpO1xyXG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8oZW5kWCwgZW5kWSk7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwgMjU1LCAwLCAyMDApOyAvLyDmm7TpspzoibPnmoTpu4ToibLvvIzkuI3pgI/mmI7luqbmm7Tpq5hcclxuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVdpZHRoID0gMi41OyAvLyDliqDnspfnur/mnaFcclxuICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWQr+WKqOWKqOaAgeWKqOeUu1xyXG4gICAgICovXHJcbiAgICBfc3RhcnRBbmltYXRpb24oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0dW5JY29uIHx8ICF0aGlzLnN0dW5JY29uLmlzVmFsaWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxZID0gdGhpcy5vZmZzZXRZO1xyXG5cclxuICAgICAgICAvLyDml4vovazliqjnlLvvvIjlnIblnIjml4vovazmlYjmnpzvvIlcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnN0dW5JY29uKVxyXG4gICAgICAgICAgICAuYnkoMS41LCB7IGFuZ2xlOiAzNjAgfSkgIC8vIDEuNeenkui9rOS4gOWciO+8jOabtOW/q+abtOaYjuaYvlxyXG4gICAgICAgICAgICAudW5pb24oKVxyXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcigpXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICAvLyDkuIrkuIvmta7liqjliqjnlLtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnN0dW5JY29uKVxyXG4gICAgICAgICAgICAudG8oMC41LCB7IHk6IG9yaWdpbmFsWSArIDUgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgIC50bygwLjUsIHsgeTogb3JpZ2luYWxZIC0gNSB9LCB7IGVhc2luZzogJ3NpbmVJbk91dCcgfSlcclxuICAgICAgICAgICAgLnVuaW9uKClcclxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgLy8g6L275b6u57yp5pS+6ISJ5Yay5pWI5p6c77yI6K6p5ZyG5ZyI5pu05pyJ5Yqo5oSf77yJXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5zdHVuSWNvbilcclxuICAgICAgICAgICAgLnRvKDAuNCwgeyBzY2FsZTogMS4xIH0sIHsgZWFzaW5nOiAnc2luZUluT3V0JyB9KVxyXG4gICAgICAgICAgICAudG8oMC40LCB7IHNjYWxlOiAxLjAgfSwgeyBlYXNpbmc6ICdzaW5lSW5PdXQnIH0pXHJcbiAgICAgICAgICAgIC51bmlvbigpXHJcbiAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKClcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuIl19