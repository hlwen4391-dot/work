
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ecs/BuffIconDisplay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '27b674u9E5NuaB5H0F0HC1N', 'BuffIconDisplay');
// Scripts/ecs/BuffIconDisplay.js

"use strict";

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Buff图标显示组件
 * 在角色头顶显示当前的Buff状态
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // Buff图标容器的偏移位置
    offsetY: {
      "default": 60,
      tooltip: "Buff图标容器相对于角色的Y轴偏移"
    },
    // 图标大小
    iconSize: {
      "default": 20,
      tooltip: "Buff图标的大小"
    },
    // 图标间距
    iconSpacing: {
      "default": 5,
      tooltip: "图标之间的间距"
    },
    // 是否显示Buff剩余时间
    showTimer: {
      "default": true,
      tooltip: "是否显示Buff剩余时间"
    }
  },
  onLoad: function onLoad() {
    // 创建Buff图标容器
    this._createBuffContainer();

    // 存储当前显示的Buff图标
    this.buffIcons = {};
  },
  /**
   * 创建Buff图标容器
   */
  _createBuffContainer: function _createBuffContainer() {
    this.buffContainer = new cc.Node("BuffContainer");
    this.buffContainer.setPosition(0, this.offsetY);
    this.node.addChild(this.buffContainer);

    // 添加Layout组件自动排列图标
    var layout = this.buffContainer.addComponent(cc.Layout);
    layout.type = cc.Layout.Type.HORIZONTAL;
    layout.spacingX = this.iconSpacing;
    layout.horizontalDirection = cc.Layout.HorizontalDirection.LEFT_TO_RIGHT;
    layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
  },
  /**
   * 更新Buff显示
   * 应该在BuffSystem.addBuff和BuffSystem.update中调用
   */
  updateBuffDisplay: function updateBuffDisplay() {
    var _this = this;
    var BuffComponent = require("BuffComponent");
    var buffs = this.node.getComponents(BuffComponent);

    // 移除已经不存在的Buff图标
    var _loop = function _loop(buffName) {
      var exists = buffs.find(function (b) {
        return b.buffName === buffName;
      });
      if (!exists) {
        _this.buffIcons[buffName].destroy();
        delete _this.buffIcons[buffName];
      }
    };
    for (var buffName in this.buffIcons) {
      _loop(buffName);
    }

    // 添加或更新Buff图标
    for (var _iterator = _createForOfIteratorHelperLoose(buffs), _step; !(_step = _iterator()).done;) {
      var buff = _step.value;
      if (!this.buffIcons[buff.buffName]) {
        this._createBuffIcon(buff);
      } else {
        this._updateBuffIcon(buff);
      }
    }
  },
  /**
   * 创建Buff图标
   */
  _createBuffIcon: function _createBuffIcon(buff) {
    var iconNode = new cc.Node("BuffIcon_" + buff.buffName);
    iconNode.setContentSize(this.iconSize, this.iconSize);

    // 添加背景
    var bg = iconNode.addComponent(cc.Graphics);
    var halfSize = this.iconSize / 2;
    bg.roundRect(-halfSize, -halfSize, this.iconSize, this.iconSize, 3);
    bg.fillColor = this._getBuffColor(buff.buffName);
    bg.fill();
    bg.strokeColor = cc.Color.WHITE;
    bg.lineWidth = 1;
    bg.stroke();

    // 添加文字标签（显示Buff首字）
    var label = new cc.Node("Label");
    var labelComp = label.addComponent(cc.Label);
    labelComp.string = this._getBuffIcon(buff.buffName);
    labelComp.fontSize = 14; //设置字体大小
    labelComp.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
    labelComp.verticalAlign = cc.Label.VerticalAlign.CENTER;
    label.setPosition(0, 2);
    iconNode.addChild(label);

    // 如果显示计时器，添加时间文字
    if (this.showTimer) {
      var timerLabel = new cc.Node("Timer");
      var timerComp = timerLabel.addComponent(cc.Label);
      timerComp.fontSize = 10;
      timerComp.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
      timerLabel.setPosition(0, -halfSize - 8);
      timerLabel.color = cc.Color.WHITE;
      iconNode.addChild(timerLabel);
      iconNode.timerLabel = timerComp;
    }
    this.buffContainer.addChild(iconNode);
    this.buffIcons[buff.buffName] = iconNode;

    // 添加出现动画
    iconNode.scale = 0;
    cc.tween(iconNode).to(0.2, {
      scale: 1
    }, {
      easing: 'backOut'
    }).start();
  },
  /**
   * 更新Buff图标（主要是更新剩余时间）
   */
  _updateBuffIcon: function _updateBuffIcon(buff) {
    var iconNode = this.buffIcons[buff.buffName];
    if (!iconNode || !iconNode.timerLabel) return;
    var remaining = Math.max(0, buff.duration - buff.elapsed);
    iconNode.timerLabel.string = remaining.toFixed(1);

    // 快要结束时闪烁提示
    if (remaining <= 1.0) {
      iconNode.opacity = 128 + Math.sin(Date.now() / 100) * 127;
    } else {
      iconNode.opacity = 255;
    }
  },
  /**
   * 获取Buff对应的颜色
   */
  _getBuffColor: function _getBuffColor(buffName) {
    var colorMap = {
      "燃烧": cc.Color.RED,
      "眩晕": cc.Color.YELLOW,
      "战吼": cc.Color.ORANGE,
      "狂暴": new cc.Color(200, 50, 50),
      "护盾": cc.Color.BLUE,
      "持续恢复": new cc.Color(50, 255, 50) // 绿色
    };

    return colorMap[buffName] || cc.Color.GRAY;
  },
  /**
   * 获取Buff对应的图标文字
   */
  _getBuffIcon: function _getBuffIcon(buffName) {
    var iconMap = {
      "燃烧": "🔥",
      "眩晕": "😵",
      "战吼": "📢",
      "狂暴": "😡",
      "护盾": "🛡",
      "持续恢复": "💚" // 绿色心形，表示治疗
    };

    return iconMap[buffName] || "●";
  },
  onDestroy: function onDestroy() {
    // 清理所有图标
    for (var buffName in this.buffIcons) {
      if (this.buffIcons[buffName] && this.buffIcons[buffName].isValid) {
        this.buffIcons[buffName].destroy();
      }
    }
    this.buffIcons = {};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxCdWZmSWNvbkRpc3BsYXkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvZmZzZXRZIiwidG9vbHRpcCIsImljb25TaXplIiwiaWNvblNwYWNpbmciLCJzaG93VGltZXIiLCJvbkxvYWQiLCJfY3JlYXRlQnVmZkNvbnRhaW5lciIsImJ1ZmZJY29ucyIsImJ1ZmZDb250YWluZXIiLCJOb2RlIiwic2V0UG9zaXRpb24iLCJub2RlIiwiYWRkQ2hpbGQiLCJsYXlvdXQiLCJhZGRDb21wb25lbnQiLCJMYXlvdXQiLCJ0eXBlIiwiVHlwZSIsIkhPUklaT05UQUwiLCJzcGFjaW5nWCIsImhvcml6b250YWxEaXJlY3Rpb24iLCJIb3Jpem9udGFsRGlyZWN0aW9uIiwiTEVGVF9UT19SSUdIVCIsInJlc2l6ZU1vZGUiLCJSZXNpemVNb2RlIiwiQ09OVEFJTkVSIiwidXBkYXRlQnVmZkRpc3BsYXkiLCJfdGhpcyIsIkJ1ZmZDb21wb25lbnQiLCJyZXF1aXJlIiwiYnVmZnMiLCJnZXRDb21wb25lbnRzIiwiX2xvb3AiLCJidWZmTmFtZSIsImV4aXN0cyIsImZpbmQiLCJiIiwiZGVzdHJveSIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJfc3RlcCIsImRvbmUiLCJidWZmIiwidmFsdWUiLCJfY3JlYXRlQnVmZkljb24iLCJfdXBkYXRlQnVmZkljb24iLCJpY29uTm9kZSIsInNldENvbnRlbnRTaXplIiwiYmciLCJHcmFwaGljcyIsImhhbGZTaXplIiwicm91bmRSZWN0IiwiZmlsbENvbG9yIiwiX2dldEJ1ZmZDb2xvciIsImZpbGwiLCJzdHJva2VDb2xvciIsIkNvbG9yIiwiV0hJVEUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJsYWJlbCIsImxhYmVsQ29tcCIsIkxhYmVsIiwic3RyaW5nIiwiX2dldEJ1ZmZJY29uIiwiZm9udFNpemUiLCJob3Jpem9udGFsQWxpZ24iLCJIb3Jpem9udGFsQWxpZ24iLCJDRU5URVIiLCJ2ZXJ0aWNhbEFsaWduIiwiVmVydGljYWxBbGlnbiIsInRpbWVyTGFiZWwiLCJ0aW1lckNvbXAiLCJjb2xvciIsInNjYWxlIiwidHdlZW4iLCJ0byIsImVhc2luZyIsInN0YXJ0IiwicmVtYWluaW5nIiwiTWF0aCIsIm1heCIsImR1cmF0aW9uIiwiZWxhcHNlZCIsInRvRml4ZWQiLCJvcGFjaXR5Iiwic2luIiwiRGF0ZSIsIm5vdyIsImNvbG9yTWFwIiwiUkVEIiwiWUVMTE9XIiwiT1JBTkdFIiwiQkxVRSIsIkdSQVkiLCJpY29uTWFwIiwib25EZXN0cm95IiwiaXNWYWxpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1I7SUFDQUMsT0FBTyxFQUFFO01BQ0wsV0FBUyxFQUFFO01BQ1hDLE9BQU8sRUFBRTtJQUNiLENBQUM7SUFFRDtJQUNBQyxRQUFRLEVBQUU7TUFDTixXQUFTLEVBQUU7TUFDWEQsT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVEO0lBQ0FFLFdBQVcsRUFBRTtNQUNULFdBQVMsQ0FBQztNQUNWRixPQUFPLEVBQUU7SUFDYixDQUFDO0lBRUQ7SUFDQUcsU0FBUyxFQUFFO01BQ1AsV0FBUyxJQUFJO01BQ2JILE9BQU8sRUFBRTtJQUNiO0VBQ0osQ0FBQztFQUVESSxNQUFNLFdBQUFBLE9BQUEsRUFBRztJQUNMO0lBQ0EsSUFBSSxDQUFDQyxvQkFBb0IsRUFBRTs7SUFFM0I7SUFDQSxJQUFJLENBQUNDLFNBQVMsR0FBRyxDQUFDLENBQUM7RUFDdkIsQ0FBQztFQUVEO0FBQ0o7QUFDQTtFQUNJRCxvQkFBb0IsV0FBQUEscUJBQUEsRUFBRztJQUNuQixJQUFJLENBQUNFLGFBQWEsR0FBRyxJQUFJWixFQUFFLENBQUNhLElBQUksQ0FBQyxl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Q1YsTUFBTSxFQUFFLElBQUksQ0FBRTtJQUNsQixDQUFDOztJQUNELE9BQU9BLE9BQU8sQ0FBQzlELFFBQVEsQ0FBQyxJQUFJLEdBQUc7RUFDbkMsQ0FBQztFQUVEK0QsU0FBUyxXQUFBQSxVQUFBLEVBQUc7SUFDUjtJQUNBLEtBQUssSUFBSS9ELFFBQVEsSUFBSSxJQUFJLENBQUMxQixTQUFTLEVBQUU7TUFDakMsSUFBSSxJQUFJLENBQUNBLFNBQVMsQ0FBQzBCLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQzFCLFNBQVMsQ0FBQzBCLFFBQVEsQ0FBQyxDQUFDZ0UsT0FBTyxFQUFFO1FBQzlELElBQUksQ0FBQzFGLFNBQVMsQ0FBQzBCLFFBQVEsQ0FBQyxDQUFDSSxPQUFPLEVBQUU7TUFDdEM7SUFDSjtJQUNBLElBQUksQ0FBQzlCLFNBQVMsR0FBRyxDQUFDLENBQUM7RUFDdkI7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBCdWZm5Zu+5qCH5pi+56S657uE5Lu2XHJcbiAqIOWcqOinkuiJsuWktOmhtuaYvuekuuW9k+WJjeeahEJ1ZmbnirbmgIFcclxuICovXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gQnVmZuWbvuagh+WuueWZqOeahOWBj+enu+S9jee9rlxyXG4gICAgICAgIG9mZnNldFk6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogNjAsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwiQnVmZuWbvuagh+WuueWZqOebuOWvueS6juinkuiJsueahFnovbTlgY/np7tcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOWbvuagh+Wkp+Wwj1xyXG4gICAgICAgIGljb25TaXplOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDIwLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIkJ1Zmblm77moIfnmoTlpKflsI9cIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOWbvuagh+mXtOi3nVxyXG4gICAgICAgIGljb25TcGFjaW5nOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDUsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5Zu+5qCH5LmL6Ze055qE6Ze06LedXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDmmK/lkKbmmL7npLpCdWZm5Ymp5L2Z5pe26Ze0XHJcbiAgICAgICAgc2hvd1RpbWVyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5piv5ZCm5pi+56S6QnVmZuWJqeS9meaXtumXtFwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g5Yib5bu6QnVmZuWbvuagh+WuueWZqFxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZUJ1ZmZDb250YWluZXIoKTtcclxuXHJcbiAgICAgICAgLy8g5a2Y5YKo5b2T5YmN5pi+56S655qEQnVmZuWbvuagh1xyXG4gICAgICAgIHRoaXMuYnVmZkljb25zID0ge307XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu6QnVmZuWbvuagh+WuueWZqFxyXG4gICAgICovXHJcbiAgICBfY3JlYXRlQnVmZkNvbnRhaW5lcigpIHtcclxuICAgICAgICB0aGlzLmJ1ZmZDb250YWluZXIgPSBuZXcgY2MuTm9kZShcIkJ1ZmZDb250YWluZXJcIik7XHJcbiAgICAgICAgdGhpcy5idWZmQ29udGFpbmVyLnNldFBvc2l0aW9uKDAsIHRoaXMub2Zmc2V0WSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHRoaXMuYnVmZkNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIC8vIOa3u+WKoExheW91dOe7hOS7tuiHquWKqOaOkuWIl+Wbvuagh1xyXG4gICAgICAgIGNvbnN0IGxheW91dCA9IHRoaXMuYnVmZkNvbnRhaW5lci5hZGRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuICAgICAgICBsYXlvdXQudHlwZSA9IGNjLkxheW91dC5UeXBlLkhPUklaT05UQUw7XHJcbiAgICAgICAgbGF5b3V0LnNwYWNpbmdYID0gdGhpcy5pY29uU3BhY2luZztcclxuICAgICAgICBsYXlvdXQuaG9yaXpvbnRhbERpcmVjdGlvbiA9IGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ7XHJcbiAgICAgICAgbGF5b3V0LnJlc2l6ZU1vZGUgPSBjYy5MYXlvdXQuUmVzaXplTW9kZS5DT05UQUlORVI7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu05pawQnVmZuaYvuekulxyXG4gICAgICog5bqU6K+l5ZyoQnVmZlN5c3RlbS5hZGRCdWZm5ZKMQnVmZlN5c3RlbS51cGRhdGXkuK3osIPnlKhcclxuICAgICAqL1xyXG4gICAgdXBkYXRlQnVmZkRpc3BsYXkoKSB7XHJcbiAgICAgICAgY29uc3QgQnVmZkNvbXBvbmVudCA9IHJlcXVpcmUoXCJCdWZmQ29tcG9uZW50XCIpO1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudHMoQnVmZkNvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIC8vIOenu+mZpOW3sue7j+S4jeWtmOWcqOeahEJ1Zmblm77moIdcclxuICAgICAgICBmb3IgKGxldCBidWZmTmFtZSBpbiB0aGlzLmJ1ZmZJY29ucykge1xyXG4gICAgICAgICAgICBjb25zdCBleGlzdHMgPSBidWZmcy5maW5kKGIgPT4gYi5idWZmTmFtZSA9PT0gYnVmZk5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoIWV4aXN0cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWZmSWNvbnNbYnVmZk5hbWVdLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmJ1ZmZJY29uc1tidWZmTmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOa3u+WKoOaIluabtOaWsEJ1Zmblm77moIdcclxuICAgICAgICBmb3IgKGxldCBidWZmIG9mIGJ1ZmZzKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5idWZmSWNvbnNbYnVmZi5idWZmTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUJ1ZmZJY29uKGJ1ZmYpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQnVmZkljb24oYnVmZik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu6QnVmZuWbvuagh1xyXG4gICAgICovXHJcbiAgICBfY3JlYXRlQnVmZkljb24oYnVmZikge1xyXG4gICAgICAgIGNvbnN0IGljb25Ob2RlID0gbmV3IGNjLk5vZGUoYEJ1ZmZJY29uXyR7YnVmZi5idWZmTmFtZX1gKTtcclxuICAgICAgICBpY29uTm9kZS5zZXRDb250ZW50U2l6ZSh0aGlzLmljb25TaXplLCB0aGlzLmljb25TaXplKTtcclxuXHJcbiAgICAgICAgLy8g5re75Yqg6IOM5pmvXHJcbiAgICAgICAgY29uc3QgYmcgPSBpY29uTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIGNvbnN0IGhhbGZTaXplID0gdGhpcy5pY29uU2l6ZSAvIDI7XHJcbiAgICAgICAgYmcucm91bmRSZWN0KC1oYWxmU2l6ZSwgLWhhbGZTaXplLCB0aGlzLmljb25TaXplLCB0aGlzLmljb25TaXplLCAzKTtcclxuICAgICAgICBiZy5maWxsQ29sb3IgPSB0aGlzLl9nZXRCdWZmQ29sb3IoYnVmZi5idWZmTmFtZSk7XHJcbiAgICAgICAgYmcuZmlsbCgpO1xyXG4gICAgICAgIGJnLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgYmcubGluZVdpZHRoID0gMTtcclxuICAgICAgICBiZy5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgLy8g5re75Yqg5paH5a2X5qCH562+77yI5pi+56S6QnVmZummluWtl++8iVxyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gbmV3IGNjLk5vZGUoXCJMYWJlbFwiKTtcclxuICAgICAgICBjb25zdCBsYWJlbENvbXAgPSBsYWJlbC5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIGxhYmVsQ29tcC5zdHJpbmcgPSB0aGlzLl9nZXRCdWZmSWNvbihidWZmLmJ1ZmZOYW1lKTtcclxuICAgICAgICBsYWJlbENvbXAuZm9udFNpemUgPSAxNDsvL+iuvue9ruWtl+S9k+Wkp+Wwj1xyXG4gICAgICAgIGxhYmVsQ29tcC5ob3Jpem9udGFsQWxpZ24gPSBjYy5MYWJlbC5Ib3Jpem9udGFsQWxpZ24uQ0VOVEVSO1xyXG4gICAgICAgIGxhYmVsQ29tcC52ZXJ0aWNhbEFsaWduID0gY2MuTGFiZWwuVmVydGljYWxBbGlnbi5DRU5URVI7XHJcbiAgICAgICAgbGFiZWwuc2V0UG9zaXRpb24oMCwgMik7XHJcbiAgICAgICAgaWNvbk5vZGUuYWRkQ2hpbGQobGFiZWwpO1xyXG5cclxuICAgICAgICAvLyDlpoLmnpzmmL7npLrorqHml7blmajvvIzmt7vliqDml7bpl7TmloflrZdcclxuICAgICAgICBpZiAodGhpcy5zaG93VGltZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgdGltZXJMYWJlbCA9IG5ldyBjYy5Ob2RlKFwiVGltZXJcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyQ29tcCA9IHRpbWVyTGFiZWwuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgdGltZXJDb21wLmZvbnRTaXplID0gMTA7XHJcbiAgICAgICAgICAgIHRpbWVyQ29tcC5ob3Jpem9udGFsQWxpZ24gPSBjYy5MYWJlbC5Ib3Jpem9udGFsQWxpZ24uQ0VOVEVSO1xyXG4gICAgICAgICAgICB0aW1lckxhYmVsLnNldFBvc2l0aW9uKDAsIC1oYWxmU2l6ZSAtIDgpO1xyXG4gICAgICAgICAgICB0aW1lckxhYmVsLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgIGljb25Ob2RlLmFkZENoaWxkKHRpbWVyTGFiZWwpO1xyXG4gICAgICAgICAgICBpY29uTm9kZS50aW1lckxhYmVsID0gdGltZXJDb21wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5idWZmQ29udGFpbmVyLmFkZENoaWxkKGljb25Ob2RlKTtcclxuICAgICAgICB0aGlzLmJ1ZmZJY29uc1tidWZmLmJ1ZmZOYW1lXSA9IGljb25Ob2RlO1xyXG5cclxuICAgICAgICAvLyDmt7vliqDlh7rnjrDliqjnlLtcclxuICAgICAgICBpY29uTm9kZS5zY2FsZSA9IDA7XHJcbiAgICAgICAgY2MudHdlZW4oaWNvbk5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjIsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrBCdWZm5Zu+5qCH77yI5Li76KaB5piv5pu05paw5Ymp5L2Z5pe26Ze077yJXHJcbiAgICAgKi9cclxuICAgIF91cGRhdGVCdWZmSWNvbihidWZmKSB7XHJcbiAgICAgICAgY29uc3QgaWNvbk5vZGUgPSB0aGlzLmJ1ZmZJY29uc1tidWZmLmJ1ZmZOYW1lXTtcclxuICAgICAgICBpZiAoIWljb25Ob2RlIHx8ICFpY29uTm9kZS50aW1lckxhYmVsKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbWFpbmluZyA9IE1hdGgubWF4KDAsIGJ1ZmYuZHVyYXRpb24gLSBidWZmLmVsYXBzZWQpO1xyXG4gICAgICAgIGljb25Ob2RlLnRpbWVyTGFiZWwuc3RyaW5nID0gcmVtYWluaW5nLnRvRml4ZWQoMSk7XHJcblxyXG4gICAgICAgIC8vIOW/q+imgee7k+adn+aXtumXqueDgeaPkOekulxyXG4gICAgICAgIGlmIChyZW1haW5pbmcgPD0gMS4wKSB7XHJcbiAgICAgICAgICAgIGljb25Ob2RlLm9wYWNpdHkgPSAxMjggKyBNYXRoLnNpbihEYXRlLm5vdygpIC8gMTAwKSAqIDEyNztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpY29uTm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5ZCdWZm5a+55bqU55qE6aKc6ImyXHJcbiAgICAgKi9cclxuICAgIF9nZXRCdWZmQ29sb3IoYnVmZk5hbWUpIHtcclxuICAgICAgICBjb25zdCBjb2xvck1hcCA9IHtcclxuICAgICAgICAgICAgXCLnh4Png6dcIjogY2MuQ29sb3IuUkVELFxyXG4gICAgICAgICAgICBcIuecqeaZlVwiOiBjYy5Db2xvci5ZRUxMT1csXHJcbiAgICAgICAgICAgIFwi5oiY5ZC8XCI6IGNjLkNvbG9yLk9SQU5HRSxcclxuICAgICAgICAgICAgXCLni4LmmrRcIjogbmV3IGNjLkNvbG9yKDIwMCwgNTAsIDUwKSxcclxuICAgICAgICAgICAgXCLmiqTnm75cIjogY2MuQ29sb3IuQkxVRSxcclxuICAgICAgICAgICAgXCLmjIHnu63mgaLlpI1cIjogbmV3IGNjLkNvbG9yKDUwLCAyNTUsIDUwKSAgLy8g57u/6ImyXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gY29sb3JNYXBbYnVmZk5hbWVdIHx8IGNjLkNvbG9yLkdSQVk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+WQnVmZuWvueW6lOeahOWbvuagh+aWh+Wtl1xyXG4gICAgICovXHJcbiAgICBfZ2V0QnVmZkljb24oYnVmZk5hbWUpIHtcclxuICAgICAgICBjb25zdCBpY29uTWFwID0ge1xyXG4gICAgICAgICAgICBcIueHg+eDp1wiOiBcIvCflKVcIixcclxuICAgICAgICAgICAgXCLnnKnmmZVcIjogXCLwn5i1XCIsXHJcbiAgICAgICAgICAgIFwi5oiY5ZC8XCI6IFwi8J+TolwiLFxyXG4gICAgICAgICAgICBcIueLguaatFwiOiBcIvCfmKFcIixcclxuICAgICAgICAgICAgXCLmiqTnm75cIjogXCLwn5uhXCIsXHJcbiAgICAgICAgICAgIFwi5oyB57ut5oGi5aSNXCI6IFwi8J+SmlwiICAvLyDnu7/oibLlv4PlvaLvvIzooajnpLrmsrvnlpdcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBpY29uTWFwW2J1ZmZOYW1lXSB8fCBcIuKXj1wiO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8g5riF55CG5omA5pyJ5Zu+5qCHXHJcbiAgICAgICAgZm9yIChsZXQgYnVmZk5hbWUgaW4gdGhpcy5idWZmSWNvbnMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYnVmZkljb25zW2J1ZmZOYW1lXSAmJiB0aGlzLmJ1ZmZJY29uc1tidWZmTmFtZV0uaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWZmSWNvbnNbYnVmZk5hbWVdLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJ1ZmZJY29ucyA9IHt9O1xyXG4gICAgfVxyXG59KTtcclxuXHJcbiJdfQ==