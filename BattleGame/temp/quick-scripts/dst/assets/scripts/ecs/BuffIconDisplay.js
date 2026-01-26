
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
    labelComp.fontSize = 14;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxCdWZmSWNvbkRpc3BsYXkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvZmZzZXRZIiwidG9vbHRpcCIsImljb25TaXplIiwiaWNvblNwYWNpbmciLCJzaG93VGltZXIiLCJvbkxvYWQiLCJfY3JlYXRlQnVmZkNvbnRhaW5lciIsImJ1ZmZJY29ucyIsImJ1ZmZDb250YWluZXIiLCJOb2RlIiwic2V0UG9zaXRpb24iLCJub2RlIiwiYWRkQ2hpbGQiLCJsYXlvdXQiLCJhZGRDb21wb25lbnQiLCJMYXlvdXQiLCJ0eXBlIiwiVHlwZSIsIkhPUklaT05UQUwiLCJzcGFjaW5nWCIsImhvcml6b250YWxEaXJlY3Rpb24iLCJIb3Jpem9udGFsRGlyZWN0aW9uIiwiTEVGVF9UT19SSUdIVCIsInJlc2l6ZU1vZGUiLCJSZXNpemVNb2RlIiwiQ09OVEFJTkVSIiwidXBkYXRlQnVmZkRpc3BsYXkiLCJfdGhpcyIsIkJ1ZmZDb21wb25lbnQiLCJyZXF1aXJlIiwiYnVmZnMiLCJnZXRDb21wb25lbnRzIiwiX2xvb3AiLCJidWZmTmFtZSIsImV4aXN0cyIsImZpbmQiLCJiIiwiZGVzdHJveSIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJfc3RlcCIsImRvbmUiLCJidWZmIiwidmFsdWUiLCJfY3JlYXRlQnVmZkljb24iLCJfdXBkYXRlQnVmZkljb24iLCJpY29uTm9kZSIsInNldENvbnRlbnRTaXplIiwiYmciLCJHcmFwaGljcyIsImhhbGZTaXplIiwicm91bmRSZWN0IiwiZmlsbENvbG9yIiwiX2dldEJ1ZmZDb2xvciIsImZpbGwiLCJzdHJva2VDb2xvciIsIkNvbG9yIiwiV0hJVEUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJsYWJlbCIsImxhYmVsQ29tcCIsIkxhYmVsIiwic3RyaW5nIiwiX2dldEJ1ZmZJY29uIiwiZm9udFNpemUiLCJob3Jpem9udGFsQWxpZ24iLCJIb3Jpem9udGFsQWxpZ24iLCJDRU5URVIiLCJ2ZXJ0aWNhbEFsaWduIiwiVmVydGljYWxBbGlnbiIsInRpbWVyTGFiZWwiLCJ0aW1lckNvbXAiLCJjb2xvciIsInNjYWxlIiwidHdlZW4iLCJ0byIsImVhc2luZyIsInN0YXJ0IiwicmVtYWluaW5nIiwiTWF0aCIsIm1heCIsImR1cmF0aW9uIiwiZWxhcHNlZCIsInRvRml4ZWQiLCJvcGFjaXR5Iiwic2luIiwiRGF0ZSIsIm5vdyIsImNvbG9yTWFwIiwiUkVEIiwiWUVMTE9XIiwiT1JBTkdFIiwiQkxVRSIsIkdSQVkiLCJpY29uTWFwIiwib25EZXN0cm95IiwiaXNWYWxpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1I7SUFDQUMsT0FBTyxFQUFFO01BQ0wsV0FBUyxFQUFFO01BQ1hDLE9BQU8sRUFBRTtJQUNiLENBQUM7SUFFRDtJQUNBQyxRQUFRLEVBQUU7TUFDTixXQUFTLEVBQUU7TUFDWEQsT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVEO0lBQ0FFLFdBQVcsRUFBRTtNQUNULFdBQVMsQ0FBQztNQUNWRixPQUFPLEVBQUU7SUFDYixDQUFDO0lBRUQ7SUFDQUcsU0FBUyxFQUFFO01BQ1AsV0FBUyxJQUFJO01BQ2JILE9BQU8sRUFBRTtJQUNiO0VBQ0osQ0FBQztFQUVESSxNQUFNLFdBQUFBLE9BQUEsRUFBRztJQUNMO0lBQ0EsSUFBSSxDQUFDQyxvQkFBb0IsRUFBRTs7SUFFM0I7SUFDQSxJQUFJLENBQUNDLFNBQVMsR0FBRyxDQUFDLENBQUM7RUFDdkIsQ0FBQztFQUVEO0FBQ0o7QUFDQTtFQUNJRCxvQkFBb0IsV0FBQUEscUJBQUEsRUFBRztJQUNuQixJQUFJLENBQUNFLGFBQWEsR0FBRyxJQUFJWixFQUFFLENBQUNhLElBQUksQ0FBQyxl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QU0sRUFBRSxJQUFJLENBQUU7SUFDbEIsQ0FBQzs7SUFDRCxPQUFPQSxPQUFPLENBQUM5RCxRQUFRLENBQUMsSUFBSSxHQUFHO0VBQ25DLENBQUM7RUFFRCtELFNBQVMsV0FBQUEsVUFBQSxFQUFHO0lBQ1I7SUFDQSxLQUFLLElBQUkvRCxRQUFRLElBQUksSUFBSSxDQUFDMUIsU0FBUyxFQUFFO01BQ2pDLElBQUksSUFBSSxDQUFDQSxTQUFTLENBQUMwQixRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMxQixTQUFTLENBQUMwQixRQUFRLENBQUMsQ0FBQ2dFLE9BQU8sRUFBRTtRQUM5RCxJQUFJLENBQUMxRixTQUFTLENBQUMwQixRQUFRLENBQUMsQ0FBQ0ksT0FBTyxFQUFFO01BQ3RDO0lBQ0o7SUFDQSxJQUFJLENBQUM5QixTQUFTLEdBQUcsQ0FBQyxDQUFDO0VBQ3ZCO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQnVmZuWbvuagh+aYvuekuue7hOS7tlxyXG4gKiDlnKjop5LoibLlpLTpobbmmL7npLrlvZPliY3nmoRCdWZm54q25oCBXHJcbiAqL1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIEJ1Zmblm77moIflrrnlmajnmoTlgY/np7vkvY3nva5cclxuICAgICAgICBvZmZzZXRZOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDYwLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIkJ1Zmblm77moIflrrnlmajnm7jlr7nkuo7op5LoibLnmoRZ6L205YGP56e7XCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDlm77moIflpKflsI9cclxuICAgICAgICBpY29uU2l6ZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAyMCxcclxuICAgICAgICAgICAgdG9vbHRpcDogXCJCdWZm5Zu+5qCH55qE5aSn5bCPXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDlm77moIfpl7Tot51cclxuICAgICAgICBpY29uU3BhY2luZzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiA1LFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWbvuagh+S5i+mXtOeahOmXtOi3nVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5piv5ZCm5pi+56S6QnVmZuWJqeS9meaXtumXtFxyXG4gICAgICAgIHNob3dUaW1lcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIuaYr+WQpuaYvuekukJ1ZmbliankvZnml7bpl7RcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIOWIm+W7ukJ1Zmblm77moIflrrnlmahcclxuICAgICAgICB0aGlzLl9jcmVhdGVCdWZmQ29udGFpbmVyKCk7XHJcblxyXG4gICAgICAgIC8vIOWtmOWCqOW9k+WJjeaYvuekuueahEJ1Zmblm77moIdcclxuICAgICAgICB0aGlzLmJ1ZmZJY29ucyA9IHt9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7ukJ1Zmblm77moIflrrnlmahcclxuICAgICAqL1xyXG4gICAgX2NyZWF0ZUJ1ZmZDb250YWluZXIoKSB7XHJcbiAgICAgICAgdGhpcy5idWZmQ29udGFpbmVyID0gbmV3IGNjLk5vZGUoXCJCdWZmQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIHRoaXMuYnVmZkNvbnRhaW5lci5zZXRQb3NpdGlvbigwLCB0aGlzLm9mZnNldFkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLmJ1ZmZDb250YWluZXIpO1xyXG5cclxuICAgICAgICAvLyDmt7vliqBMYXlvdXTnu4Tku7boh6rliqjmjpLliJflm77moIdcclxuICAgICAgICBjb25zdCBsYXlvdXQgPSB0aGlzLmJ1ZmZDb250YWluZXIuYWRkQ29tcG9uZW50KGNjLkxheW91dCk7XHJcbiAgICAgICAgbGF5b3V0LnR5cGUgPSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMO1xyXG4gICAgICAgIGxheW91dC5zcGFjaW5nWCA9IHRoaXMuaWNvblNwYWNpbmc7XHJcbiAgICAgICAgbGF5b3V0Lmhvcml6b250YWxEaXJlY3Rpb24gPSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5MRUZUX1RPX1JJR0hUO1xyXG4gICAgICAgIGxheW91dC5yZXNpemVNb2RlID0gY2MuTGF5b3V0LlJlc2l6ZU1vZGUuQ09OVEFJTkVSO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsEJ1ZmbmmL7npLpcclxuICAgICAqIOW6lOivpeWcqEJ1ZmZTeXN0ZW0uYWRkQnVmZuWSjEJ1ZmZTeXN0ZW0udXBkYXRl5Lit6LCD55SoXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUJ1ZmZEaXNwbGF5KCkge1xyXG4gICAgICAgIGNvbnN0IEJ1ZmZDb21wb25lbnQgPSByZXF1aXJlKFwiQnVmZkNvbXBvbmVudFwiKTtcclxuICAgICAgICBjb25zdCBidWZmcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnRzKEJ1ZmZDb21wb25lbnQpO1xyXG5cclxuICAgICAgICAvLyDnp7vpmaTlt7Lnu4/kuI3lrZjlnKjnmoRCdWZm5Zu+5qCHXHJcbiAgICAgICAgZm9yIChsZXQgYnVmZk5hbWUgaW4gdGhpcy5idWZmSWNvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3RzID0gYnVmZnMuZmluZChiID0+IGIuYnVmZk5hbWUgPT09IGJ1ZmZOYW1lKTtcclxuICAgICAgICAgICAgaWYgKCFleGlzdHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVmZkljb25zW2J1ZmZOYW1lXS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5idWZmSWNvbnNbYnVmZk5hbWVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmt7vliqDmiJbmm7TmlrBCdWZm5Zu+5qCHXHJcbiAgICAgICAgZm9yIChsZXQgYnVmZiBvZiBidWZmcykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYnVmZkljb25zW2J1ZmYuYnVmZk5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVCdWZmSWNvbihidWZmKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUJ1ZmZJY29uKGJ1ZmYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7ukJ1Zmblm77moIdcclxuICAgICAqL1xyXG4gICAgX2NyZWF0ZUJ1ZmZJY29uKGJ1ZmYpIHtcclxuICAgICAgICBjb25zdCBpY29uTm9kZSA9IG5ldyBjYy5Ob2RlKGBCdWZmSWNvbl8ke2J1ZmYuYnVmZk5hbWV9YCk7XHJcbiAgICAgICAgaWNvbk5vZGUuc2V0Q29udGVudFNpemUodGhpcy5pY29uU2l6ZSwgdGhpcy5pY29uU2l6ZSk7XHJcblxyXG4gICAgICAgIC8vIOa3u+WKoOiDjOaZr1xyXG4gICAgICAgIGNvbnN0IGJnID0gaWNvbk5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBjb25zdCBoYWxmU2l6ZSA9IHRoaXMuaWNvblNpemUgLyAyO1xyXG4gICAgICAgIGJnLnJvdW5kUmVjdCgtaGFsZlNpemUsIC1oYWxmU2l6ZSwgdGhpcy5pY29uU2l6ZSwgdGhpcy5pY29uU2l6ZSwgMyk7XHJcbiAgICAgICAgYmcuZmlsbENvbG9yID0gdGhpcy5fZ2V0QnVmZkNvbG9yKGJ1ZmYuYnVmZk5hbWUpO1xyXG4gICAgICAgIGJnLmZpbGwoKTtcclxuICAgICAgICBiZy5zdHJva2VDb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgIGJnLmxpbmVXaWR0aCA9IDE7XHJcbiAgICAgICAgYmcuc3Ryb2tlKCk7XHJcblxyXG4gICAgICAgIC8vIOa3u+WKoOaWh+Wtl+agh+etvu+8iOaYvuekukJ1ZmbpppblrZfvvIlcclxuICAgICAgICBjb25zdCBsYWJlbCA9IG5ldyBjYy5Ob2RlKFwiTGFiZWxcIik7XHJcbiAgICAgICAgY29uc3QgbGFiZWxDb21wID0gbGFiZWwuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICBsYWJlbENvbXAuc3RyaW5nID0gdGhpcy5fZ2V0QnVmZkljb24oYnVmZi5idWZmTmFtZSk7XHJcbiAgICAgICAgbGFiZWxDb21wLmZvbnRTaXplID0gMTQ7XHJcbiAgICAgICAgbGFiZWxDb21wLmhvcml6b250YWxBbGlnbiA9IGNjLkxhYmVsLkhvcml6b250YWxBbGlnbi5DRU5URVI7XHJcbiAgICAgICAgbGFiZWxDb21wLnZlcnRpY2FsQWxpZ24gPSBjYy5MYWJlbC5WZXJ0aWNhbEFsaWduLkNFTlRFUjtcclxuICAgICAgICBsYWJlbC5zZXRQb3NpdGlvbigwLCAyKTtcclxuICAgICAgICBpY29uTm9kZS5hZGRDaGlsZChsYWJlbCk7XHJcblxyXG4gICAgICAgIC8vIOWmguaenOaYvuekuuiuoeaXtuWZqO+8jOa3u+WKoOaXtumXtOaWh+Wtl1xyXG4gICAgICAgIGlmICh0aGlzLnNob3dUaW1lcikge1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lckxhYmVsID0gbmV3IGNjLk5vZGUoXCJUaW1lclwiKTtcclxuICAgICAgICAgICAgY29uc3QgdGltZXJDb21wID0gdGltZXJMYWJlbC5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICB0aW1lckNvbXAuZm9udFNpemUgPSAxMDtcclxuICAgICAgICAgICAgdGltZXJDb21wLmhvcml6b250YWxBbGlnbiA9IGNjLkxhYmVsLkhvcml6b250YWxBbGlnbi5DRU5URVI7XHJcbiAgICAgICAgICAgIHRpbWVyTGFiZWwuc2V0UG9zaXRpb24oMCwgLWhhbGZTaXplIC0gOCk7XHJcbiAgICAgICAgICAgIHRpbWVyTGFiZWwuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgaWNvbk5vZGUuYWRkQ2hpbGQodGltZXJMYWJlbCk7XHJcbiAgICAgICAgICAgIGljb25Ob2RlLnRpbWVyTGFiZWwgPSB0aW1lckNvbXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJ1ZmZDb250YWluZXIuYWRkQ2hpbGQoaWNvbk5vZGUpO1xyXG4gICAgICAgIHRoaXMuYnVmZkljb25zW2J1ZmYuYnVmZk5hbWVdID0gaWNvbk5vZGU7XHJcblxyXG4gICAgICAgIC8vIOa3u+WKoOWHuueOsOWKqOeUu1xyXG4gICAgICAgIGljb25Ob2RlLnNjYWxlID0gMDtcclxuICAgICAgICBjYy50d2VlbihpY29uTm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogJ2JhY2tPdXQnIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsEJ1Zmblm77moIfvvIjkuLvopoHmmK/mm7TmlrDliankvZnml7bpl7TvvIlcclxuICAgICAqL1xyXG4gICAgX3VwZGF0ZUJ1ZmZJY29uKGJ1ZmYpIHtcclxuICAgICAgICBjb25zdCBpY29uTm9kZSA9IHRoaXMuYnVmZkljb25zW2J1ZmYuYnVmZk5hbWVdO1xyXG4gICAgICAgIGlmICghaWNvbk5vZGUgfHwgIWljb25Ob2RlLnRpbWVyTGFiZWwpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcmVtYWluaW5nID0gTWF0aC5tYXgoMCwgYnVmZi5kdXJhdGlvbiAtIGJ1ZmYuZWxhcHNlZCk7XHJcbiAgICAgICAgaWNvbk5vZGUudGltZXJMYWJlbC5zdHJpbmcgPSByZW1haW5pbmcudG9GaXhlZCgxKTtcclxuXHJcbiAgICAgICAgLy8g5b+r6KaB57uT5p2f5pe26Zeq54OB5o+Q56S6XHJcbiAgICAgICAgaWYgKHJlbWFpbmluZyA8PSAxLjApIHtcclxuICAgICAgICAgICAgaWNvbk5vZGUub3BhY2l0eSA9IDEyOCArIE1hdGguc2luKERhdGUubm93KCkgLyAxMDApICogMTI3O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGljb25Ob2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlkJ1Zmblr7nlupTnmoTpopzoibJcclxuICAgICAqL1xyXG4gICAgX2dldEJ1ZmZDb2xvcihidWZmTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbG9yTWFwID0ge1xyXG4gICAgICAgICAgICBcIueHg+eDp1wiOiBjYy5Db2xvci5SRUQsXHJcbiAgICAgICAgICAgIFwi55yp5pmVXCI6IGNjLkNvbG9yLllFTExPVyxcclxuICAgICAgICAgICAgXCLmiJjlkLxcIjogY2MuQ29sb3IuT1JBTkdFLFxyXG4gICAgICAgICAgICBcIueLguaatFwiOiBuZXcgY2MuQ29sb3IoMjAwLCA1MCwgNTApLFxyXG4gICAgICAgICAgICBcIuaKpOebvlwiOiBjYy5Db2xvci5CTFVFLFxyXG4gICAgICAgICAgICBcIuaMgee7reaBouWkjVwiOiBuZXcgY2MuQ29sb3IoNTAsIDI1NSwgNTApICAvLyDnu7/oibJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBjb2xvck1hcFtidWZmTmFtZV0gfHwgY2MuQ29sb3IuR1JBWTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5ZCdWZm5a+55bqU55qE5Zu+5qCH5paH5a2XXHJcbiAgICAgKi9cclxuICAgIF9nZXRCdWZmSWNvbihidWZmTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGljb25NYXAgPSB7XHJcbiAgICAgICAgICAgIFwi54eD54OnXCI6IFwi8J+UpVwiLFxyXG4gICAgICAgICAgICBcIuecqeaZlVwiOiBcIvCfmLVcIixcclxuICAgICAgICAgICAgXCLmiJjlkLxcIjogXCLwn5OiXCIsXHJcbiAgICAgICAgICAgIFwi54uC5pq0XCI6IFwi8J+YoVwiLFxyXG4gICAgICAgICAgICBcIuaKpOebvlwiOiBcIvCfm6FcIixcclxuICAgICAgICAgICAgXCLmjIHnu63mgaLlpI1cIjogXCLwn5KaXCIgIC8vIOe7v+iJsuW/g+W9ou+8jOihqOekuuayu+eWl1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGljb25NYXBbYnVmZk5hbWVdIHx8IFwi4pePXCI7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICAvLyDmuIXnkIbmiYDmnInlm77moIdcclxuICAgICAgICBmb3IgKGxldCBidWZmTmFtZSBpbiB0aGlzLmJ1ZmZJY29ucykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5idWZmSWNvbnNbYnVmZk5hbWVdICYmIHRoaXMuYnVmZkljb25zW2J1ZmZOYW1lXS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZJY29uc1tidWZmTmFtZV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYnVmZkljb25zID0ge307XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuIl19