
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ecs/HealthBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0610drFjIFIHY/BQHhzHYxx', 'HealthBar');
// Scripts/ecs/HealthBar.js

"use strict";

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
  "extends": cc.Component,
  properties: {
    // ProgressBar方式（推荐）
    healthProgress: {
      "default": null,
      type: cc.ProgressBar,
      tooltip: "血条进度条组件(如果使用ProgressBar)"
    },
    // Sprite填充方式（备用）
    healthFill: {
      "default": null,
      type: cc.Sprite,
      tooltip: "血条填充精灵(如果不使用ProgressBar)"
    },
    // 护盾进度条（白色，显示在HP之上）- 已废弃，现在与HP共用进度条
    shieldProgress: {
      "default": null,
      type: cc.ProgressBar,
      tooltip: "护盾进度条组件(已废弃，现在与HP共用进度条)"
    },
    // 护盾填充精灵（备用）
    shieldFill: {
      "default": null,
      type: cc.Sprite,
      tooltip: "护盾填充精灵(如果不使用ProgressBar)"
    },
    // 伤害数字标签
    damageLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "显示伤害数字的标签"
    },
    // 伤害数字显示时间
    damageDisplayTime: 3.0
  },
  onLoad: function onLoad() {
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
  updateHealth: function updateHealth(hp, maxHp, shieldValue) {
    if (shieldValue === void 0) {
      shieldValue = 0;
    }
    if (maxHp <= 0) return;
    var hpPercent = Math.max(0, Math.min(1, hp / maxHp));
    var shieldPercent = shieldValue > 0 ? Math.max(0, Math.min(1, shieldValue / maxHp)) : 0;
    var totalPercent = Math.max(0, Math.min(1, (hp + shieldValue) / maxHp));
    cc.log("[HealthBar] \u66F4\u65B0\u8840\u6761: HP=" + hp + "/" + maxHp + " (" + (hpPercent * 100).toFixed(1) + "%), \u62A4\u76FE=" + shieldValue + " (" + (shieldPercent * 100).toFixed(1) + "%)");

    // 更新HP和护盾显示（共用同一个进度条）
    // 优先使用ProgressBar
    if (this.healthProgress) {
      // 计算总进度（HP+护盾）
      var _totalPercent = Math.max(0, Math.min(1, (hp + shieldValue) / maxHp));
      // 设置总进度
      this.healthProgress.progress = _totalPercent;

      // 在barSprite上创建两个层：HP（绿色）+ 护盾（白色）
      var hpBarSprite = this.healthProgress.barSprite;
      if (hpBarSprite && shieldValue > 0) {
        // 获取HP和护盾的显示宽度
        var hpProgressBarWidth = this.healthProgress.node.width;
        var hpDisplayWidth = hpProgressBarWidth * hpPercent;
        var shieldDisplayWidth = hpProgressBarWidth * shieldPercent;

        // 查找或创建HP和护盾的显示层
        var hpLayer = hpBarSprite.node.getChildByName("HPLayer");
        var shieldLayer = hpBarSprite.node.getChildByName("ShieldLayer");
        if (!hpLayer) {
          // 创建HP层（绿色）
          hpLayer = new cc.Node("HPLayer");
          var hpSprite = hpLayer.addComponent(cc.Sprite);
          hpSprite.spriteFrame = hpBarSprite.spriteFrame; // 使用相同的spriteFrame
          hpLayer.color = cc.Color.GREEN;
          hpLayer.anchorX = 0;
          hpLayer.anchorY = 0.5;
          hpBarSprite.node.addChild(hpLayer);
        }
        if (!shieldLayer && shieldValue > 0) {
          // 创建护盾层（白色）
          shieldLayer = new cc.Node("ShieldLayer");
          var shieldSprite = shieldLayer.addComponent(cc.Sprite);
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
          var hpLeftX = -hpProgressBarWidth * (this.healthProgress.node.anchorX - 0.5);
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
        var _hpLayer = hpBarSprite.node.getChildByName("HPLayer");
        var _shieldLayer = hpBarSprite.node.getChildByName("ShieldLayer");
        if (_hpLayer) _hpLayer.active = false;
        if (_shieldLayer) _shieldLayer.active = false;
      }
      cc.log("[HealthBar] HP+\u62A4\u76FE ProgressBar\u5DF2\u66F4\u65B0: HP=" + hpPercent + ", \u62A4\u76FE=" + shieldPercent + ", \u603B\u8FDB\u5EA6=" + _totalPercent);
    }
    // 否则使用Sprite宽度方式
    else if (this.healthFill) {
      this.healthFill.node.width = this._originalWidth * hpPercent;
      cc.log("[HealthBar] HP Sprite\u5DF2\u66F4\u65B0: \u5BBD\u5EA6=" + this._originalWidth * hpPercent);
    } else {
      cc.warn("[HealthBar] \u672A\u627E\u5230HP\u663E\u793A\u7EC4\u4EF6 (healthProgress\u6216healthFill)");
    }

    // 护盾显示已集成到HP进度条中（共用同一个进度条）
    // 如果使用Sprite方式，仍然需要单独处理护盾
    if (!this.healthProgress && this.healthFill && shieldValue > 0) {
      // 使用Sprite宽度方式时，护盾需要单独显示
      if (this.shieldFill) {
        // 护盾宽度 = 护盾值对应的宽度
        var shieldWidth = this._originalShieldWidth * shieldPercent;
        this.shieldFill.node.width = shieldWidth;
        // 设置护盾颜色为白色
        this.shieldFill.node.color = cc.Color.WHITE;
        // 设置护盾位置：紧跟在HP后面（从HP结束处开始）
        // 计算HP Fill的实际显示宽度
        var hpWidth = this._originalWidth * hpPercent;
        // 获取HP Fill节点的位置和anchor
        var hpFillX = this.healthFill.node.x;
        var hpFillAnchorX = this.healthFill.node.anchorX;
        // 计算HP Fill的左边缘位置
        var _hpLeftX = hpFillX - this._originalWidth * (hpFillAnchorX - 0.5);
        // 计算HP Fill的右边缘位置（HP结束位置）
        var hpRightX = _hpLeftX + hpWidth;
        // 设置护盾Fill的anchor为左对齐
        this.shieldFill.node.anchorX = 0;
        this.shieldFill.node.anchorY = this.healthFill.node.anchorY; // 保持Y轴对齐
        // 设置护盾Fill的位置（紧跟在HP结束处，无间隙）
        this.shieldFill.node.x = hpRightX;
        this.shieldFill.node.y = this.healthFill.node.y; // 保持Y轴位置一致
        this.shieldFill.node.active = true;
        cc.log("[HealthBar] \u62A4\u76FESprite\u5DF2\u66F4\u65B0: \u5BBD\u5EA6=" + shieldWidth + ", \u4F4D\u7F6Ex=" + this.shieldFill.node.x + ", active=true");
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
  showDamage: function showDamage(value, type) {
    if (type === void 0) {
      type = 'normal';
    }
    if (!this.damageLabel) return;

    // 保存初始状态
    var startY = this.damageLabel.node.y;
    var startScale = this.damageLabel.node.scale;

    // 根据伤害类型设置样式
    switch (type) {
      case 'crit':
        // 暴击
        this.damageLabel.string = "-" + Math.floor(value);
        this.damageLabel.node.color = cc.color(255, 0, 0); // 红色
        this.damageLabel.node.scale = 2.0; // 更大
        this._playFloatAnimation(startY, startScale, 100, 0.35, true); // 更高、持续时间稍微延长
        break;
      case 'miss':
        // 闪避
        this.damageLabel.string = "MISS!";
        this.damageLabel.node.color = cc.Color.BLUE; // 蓝色
        this.damageLabel.node.scale = 1.5;
        this._playFloatAnimation(startY, startScale, 50, 0.3, false);
        break;
      case 'heal':
        // 治疗
        this.damageLabel.string = "+" + Math.floor(value);
        this.damageLabel.node.color = cc.color(50, 205, 50); // 绿色
        this.damageLabel.node.scale = 1.8;
        this._playFloatAnimation(startY, startScale, 70, 0.3, false);
        break;
      case 'normal': // 普通伤害
      default:
        this.damageLabel.string = "-" + Math.floor(value);
        this.damageLabel.node.color = cc.color(255, 255, 255); // 白色
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
  _playFloatAnimation: function _playFloatAnimation(startY, startScale, floatHeight, duration, shake) {
    var _this = this;
    var node = this.damageLabel.node;
    var tween = cc.tween(node);
    if (shake) {
      // 暴击特效：快速震动 + 飘动 + 淡出
      tween.to(0.05, {
        scale: startScale * 1.2
      }, {
        easing: 'backOut'
      }).to(0.05, {
        scale: startScale
      }).parallel(cc.tween().to(duration, {
        y: startY + floatHeight
      }, {
        easing: 'sineOut'
      }), cc.tween().to(duration, {
        opacity: 0
      }, {
        easing: 'sineIn'
      })).call(function () {
        _this._resetLabel(startY, startScale);
      }).start();
    } else {
      // 普通飘字：快速飘动 + 淡出
      tween.parallel(cc.tween().to(duration, {
        y: startY + floatHeight
      }, {
        easing: 'sineOut'
      }), cc.tween().to(duration, {
        opacity: 0
      }, {
        easing: 'sineIn'
      })).call(function () {
        _this._resetLabel(startY, startScale);
      }).start();
    }
  },
  /**
   * 重置标签状态
   * @private
   */
  _resetLabel: function _resetLabel(startY, startScale) {
    this.damageLabel.node.active = false;
    this.damageLabel.node.y = startY;
    this.damageLabel.node.opacity = 255;
    this.damageLabel.node.scale = startScale;
    this.damageLabel.node.color = cc.color(255, 255, 255);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxIZWFsdGhCYXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJoZWFsdGhQcm9ncmVzcyIsInR5cGUiLCJQcm9ncmVzc0JhciIsInRvb2x0aXAiLCJoZWFsdGhGaWxsIiwiU3ByaXRlIiwic2hpZWxkUHJvZ3Jlc3MiLCJzaGllbGRGaWxsIiwiZGFtYWdlTGFiZWwiLCJMYWJlbCIsImRhbWFnZURpc3BsYXlUaW1lIiwib25Mb2FkIiwiX29yaWdpbmFsV2lkdGgiLCJub2RlIiwid2lkdGgiLCJfb3JpZ2luYWxTaGllbGRXaWR0aCIsImFjdGl2ZSIsInVwZGF0ZUhlYWx0aCIsImhwIiwibWF4SHAiLCJzaGllbGRWYWx1ZSIsImhwUGVyY2VudCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJzaGllbGRQZXJjZW50IiwidG90YWxQZXJjZW50IiwibG9nIiwidG9GaXhlZCIsInByb2dyZXNzIiwiaHBCYXJTcHJpdGUiLCJiYXJTcHJpdGUiLCJocFByb2dyZXNzQmFyV2lkdGgiLCJocERpc3BsYXlXaWR0aCIsInNoaWVsZERpc3BsYXlXaWR0aCIsImhwTGF5ZXIiLCJnZXRDaGlsZEJ5TmFtZSIsInNoaWVsZExheWVyIiwiTm9kZSIsImhwU3ByaXRlIiwiYWRkQ29tcG9uZW50Iiwic3ByaXRlRnJhbWUiLCJjb2xvciIsIkNvbG9yIiwiR1JFRU4iLCJhbmNob3JYIiwiYW5jaG9yWSIsImFkZENoaWxkIiwic2hpZWxkU3ByaXRlIiwiV0hJVEUiLCJoZWlnaHQiLCJ4IiwieSIsImhwTGVmdFgiLCJ3YXJuIiwic2hpZWxkV2lkdGgiLCJocFdpZHRoIiwiaHBGaWxsWCIsImhwRmlsbEFuY2hvclgiLCJocFJpZ2h0WCIsInNob3dEYW1hZ2UiLCJ2YWx1ZSIsInN0YXJ0WSIsInN0YXJ0U2NhbGUiLCJzY2FsZSIsInN0cmluZyIsImZsb29yIiwiX3BsYXlGbG9hdEFuaW1hdGlvbiIsIkJMVUUiLCJmbG9hdEhlaWdodCIsImR1cmF0aW9uIiwic2hha2UiLCJfdGhpcyIsInR3ZWVuIiwidG8iLCJlYXNpbmciLCJwYXJhbGxlbCIsIm9wYWNpdHkiLCJjYWxsIiwiX3Jlc2V0TGFiZWwiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSO0lBQ0FDLGNBQWMsRUFBRTtNQUNaLFdBQVMsSUFBSTtNQUNiQyxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sV0FBVztNQUNwQkMsT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVEO0lBQ0FDLFVBQVUsRUFBRTtNQUNSLFdBQVMsSUFBSTtNQUNiSCxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1MsTUFBTTtNQUNmRixPQUFPLEVBQUU7SUFDYixDQUFDO0lBRUQ7SUFDQUcsY0FBYyxFQUFFO01BQ1osV0FBUyxJQUFJO01BQ2JMLElBQUksRUFBRUwsRUFBRSxDQUFDTSxXQUFXO01BQ3BCQyxPQUFPLEVBQUU7SUFDYixDQUFDO0lBRUQ7SUFDQUksVUFBVSxFQUFFO01BQ1IsV0FBUyxJQUFJO01BQ2JOLElBQUksRUFBRUwsRUFBRSxDQUFDUyxNQUFNO01BQ2ZGLE9BQU8sRUFBRTtJQUNiLENBQUM7SUFFRDtJQUNBSyxXQUFXLEVBQUU7TUFDVCxXQUFTLElBQUk7TUFDYlAsSUFBSSxFQUFFTCxFQUFFLENBQUNhLEtBQUs7TUFDZE4sT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVEO0lBQ0FPLGlCQUFpQixFQUFFO0VBQ3ZCLENBQUM7RUFFREMsTUFBTSxXQUFBQSxPQUFBLEVBQUc7SUFDTDtJQUNBLElBQUks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QUMsQ0FDaEUsQ0FDQUcsSUFBSSxDQUFDLFlBQU07UUFDUk4sS0FBSSxDQUFDTyxXQUFXLENBQUNqQixNQUFNLEVBQUVDLFVBQVUsQ0FBQztNQUN4QyxDQUFDLENBQUMsQ0FDRGlCLEtBQUssRUFBRTtJQUNoQjtFQUNKLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJRCxXQUFXLFdBQUFBLFlBQUNqQixNQUFNLEVBQUVDLFVBQVUsRUFBRTtJQUM1QixJQUFJLENBQUN2RCxXQUFXLENBQUNLLElBQUksQ0FBQ0csTUFBTSxHQUFHLEtBQUs7SUFDcEMsSUFBSSxDQUFDUixXQUFXLENBQUNLLElBQUksQ0FBQ3VDLENBQUMsR0FBR1UsTUFBTTtJQUNoQyxJQUFJLENBQUN0RCxXQUFXLENBQUNLLElBQUksQ0FBQ2dFLE9BQU8sR0FBRyxHQUFHO0lBQ25DLElBQUksQ0FBQ3JFLFdBQVcsQ0FBQ0ssSUFBSSxDQUFDbUQsS0FBSyxHQUFHRCxVQUFVO0lBQ3hDLElBQUksQ0FBQ3ZELFdBQVcsQ0FBQ0ssSUFBSSxDQUFDNkIsS0FBSyxHQUFHOUMsRUFBRSxDQUFDOEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0VBQ3pEO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGNjLkNsYXNzKHtcbi8vICAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbi8vICAgICBwcm9wZXJ0aWVzOiB7XG4vLyAgICAgICAgIGJhckZHOiBjYy5Ob2RlXG5cbi8vICAgICB9LFxuXG4vLyAgICAgaW5pdChlbnRpdHkpIHtcbi8vICAgICAgICAgdGhpcy5lbnRpdHkgPSBlbnRpdHk7XG4vLyAgICAgICAgIHRoaXMuc3RhdHMgPSBlbnRpdHkuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XG4vLyAgICAgfSxcblxuLy8gICAgIHVwZGF0ZSgpIHtcbi8vICAgICAgICAgaWYgKCF0aGlzLmVudGl0eSB8fCAhdGhpcy5zdGF0cykgcmV0dXJuO1xuXG4vLyAgICAgICAgIGxldCB3b3JsZFBvcyA9IHRoaXMuZW50aXR5LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCA3MCkpOy8v6L2s5o2i5Li65LiW55WM5Z2Q5qCHXG4vLyAgICAgICAgIGxldCBsb2NhbFBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpOy8v6L2s5o2i5Li65pys5Zyw5Z2Q5qCHXG4vLyAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XG5cbi8vICAgICAgICAgbGV0IHAgPSB0aGlzLnN0YXRzLmhwIC8gdGhpcy5zdGF0cy5tYXhIcDsvL+iuoeeul+ihgOmHj+eZvuWIhuavlFxuLy8gICAgICAgICBwID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgcCkpO1xuLy8gICAgICAgICB0aGlzLmJhckZHLnNjYWxlWCA9IHA7Ly/orr7nva7ooYDmnaHplb/luqZcblxuLy8gICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gcCA+IDA7Ly/orr7nva7ooYDmnaHlj6/op4HmgKdcbi8vICAgICB9XG5cblxuLy8gfSk7XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gSGVhbHRoQmFyO1xuXG4vKipcbiAqIOihgOadoee7hOS7tlxuICog6LSf6LSj5pi+56S65Y2V5L2N55qE6KGA6YeP5ZKM5Lyk5a6z5pWw5a2XXG4gKi9cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIFByb2dyZXNzQmFy5pa55byP77yI5o6o6I2Q77yJXG4gICAgICAgIGhlYWx0aFByb2dyZXNzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJvZ3Jlc3NCYXIsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuihgOadoei/m+W6puadoee7hOS7tijlpoLmnpzkvb/nlKhQcm9ncmVzc0JhcilcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFNwcml0ZeWhq+WFheaWueW8j++8iOWkh+eUqO+8iVxuICAgICAgICBoZWFsdGhGaWxsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLooYDmnaHloavlhYXnsr7ngbUo5aaC5p6c5LiN5L2/55SoUHJvZ3Jlc3NCYXIpXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDmiqTnm77ov5vluqbmnaHvvIjnmb3oibLvvIzmmL7npLrlnKhIUOS5i+S4iu+8iS0g5bey5bqf5byD77yM546w5Zyo5LiOSFDlhbHnlKjov5vluqbmnaFcbiAgICAgICAgc2hpZWxkUHJvZ3Jlc3M6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Qcm9ncmVzc0JhcixcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5oqk55u+6L+b5bqm5p2h57uE5Lu2KOW3suW6n+W8g++8jOeOsOWcqOS4jkhQ5YWx55So6L+b5bqm5p2hKVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5oqk55u+5aGr5YWF57K+54G177yI5aSH55So77yJXG4gICAgICAgIHNoaWVsZEZpbGw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGUsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuaKpOebvuWhq+WFheeyvueBtSjlpoLmnpzkuI3kvb/nlKhQcm9ncmVzc0JhcilcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOS8pOWus+aVsOWtl+agh+etvlxuICAgICAgICBkYW1hZ2VMYWJlbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmmL7npLrkvKTlrrPmlbDlrZfnmoTmoIfnrb5cIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOS8pOWus+aVsOWtl+aYvuekuuaXtumXtFxuICAgICAgICBkYW1hZ2VEaXNwbGF5VGltZTogMy4wXG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8g5aaC5p6c5L2/55SoU3ByaXRl5pa55byP77yM5L+d5a2Y5Y6f5aeL5a695bqmXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aEZpbGwpIHtcbiAgICAgICAgICAgIHRoaXMuX29yaWdpbmFsV2lkdGggPSB0aGlzLmhlYWx0aEZpbGwubm9kZS53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zaGllbGRGaWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9vcmlnaW5hbFNoaWVsZFdpZHRoID0gdGhpcy5zaGllbGRGaWxsLm5vZGUud2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDpmpDol4/kvKTlrrPmoIfnrb5cbiAgICAgICAgaWYgKHRoaXMuZGFtYWdlTGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuZGFtYWdlTGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmm7TmlrDooYDmnaHmmL7npLpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaHAgLSDlvZPliY3nlJ/lkb3lgLxcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4SHAgLSDmnIDlpKfnlJ/lkb3lgLxcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2hpZWxkVmFsdWUgLSDlvZPliY3miqTnm77lgLzvvIjlj6/pgInvvIlcbiAgICAgKi9cbiAgICB1cGRhdGVIZWFsdGgoaHAsIG1heEhwLCBzaGllbGRWYWx1ZSA9IDApIHtcbiAgICAgICAgaWYgKG1heEhwIDw9IDApIHJldHVybjtcblxuICAgICAgICBjb25zdCBocFBlcmNlbnQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBocCAvIG1heEhwKSk7XG4gICAgICAgIGNvbnN0IHNoaWVsZFBlcmNlbnQgPSBzaGllbGRWYWx1ZSA+IDAgPyBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBzaGllbGRWYWx1ZSAvIG1heEhwKSkgOiAwO1xuICAgICAgICBjb25zdCB0b3RhbFBlcmNlbnQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoaHAgKyBzaGllbGRWYWx1ZSkgLyBtYXhIcCkpO1xuXG4gICAgICAgIGNjLmxvZyhgW0hlYWx0aEJhcl0g5pu05paw6KGA5p2hOiBIUD0ke2hwfS8ke21heEhwfSAoJHsoaHBQZXJjZW50ICogMTAwKS50b0ZpeGVkKDEpfSUpLCDmiqTnm749JHtzaGllbGRWYWx1ZX0gKCR7KHNoaWVsZFBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMSl9JSlgKTtcblxuICAgICAgICAvLyDmm7TmlrBIUOWSjOaKpOebvuaYvuekuu+8iOWFseeUqOWQjOS4gOS4qui/m+W6puadoe+8iVxuICAgICAgICAvLyDkvJjlhYjkvb/nlKhQcm9ncmVzc0JhclxuICAgICAgICBpZiAodGhpcy5oZWFsdGhQcm9ncmVzcykge1xuICAgICAgICAgICAgLy8g6K6h566X5oC76L+b5bqm77yISFAr5oqk55u+77yJXG4gICAgICAgICAgICBjb25zdCB0b3RhbFBlcmNlbnQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoaHAgKyBzaGllbGRWYWx1ZSkgLyBtYXhIcCkpO1xuICAgICAgICAgICAgLy8g6K6+572u5oC76L+b5bqmXG4gICAgICAgICAgICB0aGlzLmhlYWx0aFByb2dyZXNzLnByb2dyZXNzID0gdG90YWxQZXJjZW50O1xuXG4gICAgICAgICAgICAvLyDlnKhiYXJTcHJpdGXkuIrliJvlu7rkuKTkuKrlsYLvvJpIUO+8iOe7v+iJsu+8iSsg5oqk55u+77yI55m96Imy77yJXG4gICAgICAgICAgICBjb25zdCBocEJhclNwcml0ZSA9IHRoaXMuaGVhbHRoUHJvZ3Jlc3MuYmFyU3ByaXRlO1xuICAgICAgICAgICAgaWYgKGhwQmFyU3ByaXRlICYmIHNoaWVsZFZhbHVlID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIOiOt+WPlkhQ5ZKM5oqk55u+55qE5pi+56S65a695bqmXG4gICAgICAgICAgICAgICAgY29uc3QgaHBQcm9ncmVzc0JhcldpZHRoID0gdGhpcy5oZWFsdGhQcm9ncmVzcy5ub2RlLndpZHRoO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhwRGlzcGxheVdpZHRoID0gaHBQcm9ncmVzc0JhcldpZHRoICogaHBQZXJjZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoaWVsZERpc3BsYXlXaWR0aCA9IGhwUHJvZ3Jlc3NCYXJXaWR0aCAqIHNoaWVsZFBlcmNlbnQ7XG5cbiAgICAgICAgICAgICAgICAvLyDmn6Xmib7miJbliJvlu7pIUOWSjOaKpOebvueahOaYvuekuuWxglxuICAgICAgICAgICAgICAgIGxldCBocExheWVyID0gaHBCYXJTcHJpdGUubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkhQTGF5ZXJcIik7XG4gICAgICAgICAgICAgICAgbGV0IHNoaWVsZExheWVyID0gaHBCYXJTcHJpdGUubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlNoaWVsZExheWVyXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFocExheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWIm+W7ukhQ5bGC77yI57u/6Imy77yJXG4gICAgICAgICAgICAgICAgICAgIGhwTGF5ZXIgPSBuZXcgY2MuTm9kZShcIkhQTGF5ZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhwU3ByaXRlID0gaHBMYXllci5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgaHBTcHJpdGUuc3ByaXRlRnJhbWUgPSBocEJhclNwcml0ZS5zcHJpdGVGcmFtZTsgLy8g5L2/55So55u45ZCM55qEc3ByaXRlRnJhbWVcbiAgICAgICAgICAgICAgICAgICAgaHBMYXllci5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xuICAgICAgICAgICAgICAgICAgICBocExheWVyLmFuY2hvclggPSAwO1xuICAgICAgICAgICAgICAgICAgICBocExheWVyLmFuY2hvclkgPSAwLjU7XG4gICAgICAgICAgICAgICAgICAgIGhwQmFyU3ByaXRlLm5vZGUuYWRkQ2hpbGQoaHBMYXllcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFzaGllbGRMYXllciAmJiBzaGllbGRWYWx1ZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5Yib5bu65oqk55u+5bGC77yI55m96Imy77yJXG4gICAgICAgICAgICAgICAgICAgIHNoaWVsZExheWVyID0gbmV3IGNjLk5vZGUoXCJTaGllbGRMYXllclwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpZWxkU3ByaXRlID0gc2hpZWxkTGF5ZXIuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHNoaWVsZFNwcml0ZS5zcHJpdGVGcmFtZSA9IGhwQmFyU3ByaXRlLnNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgICAgICBzaGllbGRMYXllci5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgICAgICAgICBzaGllbGRMYXllci5hbmNob3JYID0gMDtcbiAgICAgICAgICAgICAgICAgICAgc2hpZWxkTGF5ZXIuYW5jaG9yWSA9IDAuNTtcbiAgICAgICAgICAgICAgICAgICAgaHBCYXJTcHJpdGUubm9kZS5hZGRDaGlsZChzaGllbGRMYXllcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g5pu05pawSFDlsYJcbiAgICAgICAgICAgICAgICBpZiAoaHBMYXllcikge1xuICAgICAgICAgICAgICAgICAgICBocExheWVyLndpZHRoID0gaHBEaXNwbGF5V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGhwTGF5ZXIuaGVpZ2h0ID0gaHBCYXJTcHJpdGUubm9kZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGhwTGF5ZXIueCA9IC1ocFByb2dyZXNzQmFyV2lkdGggKiAodGhpcy5oZWFsdGhQcm9ncmVzcy5ub2RlLmFuY2hvclggLSAwLjUpO1xuICAgICAgICAgICAgICAgICAgICBocExheWVyLnkgPSAwO1xuICAgICAgICAgICAgICAgICAgICBocExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g5pu05paw5oqk55u+5bGCXG4gICAgICAgICAgICAgICAgaWYgKHNoaWVsZExheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaWVsZExheWVyLndpZHRoID0gc2hpZWxkRGlzcGxheVdpZHRoO1xuICAgICAgICAgICAgICAgICAgICBzaGllbGRMYXllci5oZWlnaHQgPSBocEJhclNwcml0ZS5ub2RlLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaHBMZWZ0WCA9IC1ocFByb2dyZXNzQmFyV2lkdGggKiAodGhpcy5oZWFsdGhQcm9ncmVzcy5ub2RlLmFuY2hvclggLSAwLjUpO1xuICAgICAgICAgICAgICAgICAgICBzaGllbGRMYXllci54ID0gaHBMZWZ0WCArIGhwRGlzcGxheVdpZHRoOyAvLyDntKfot5/lnKhIUOWQjumdolxuICAgICAgICAgICAgICAgICAgICBzaGllbGRMYXllci55ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgc2hpZWxkTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDpmpDol4/ljp/lp4tiYXJTcHJpdGXvvIjlm6DkuLrmiJHku6znjrDlnKjnlKjlrZDoioLngrnmmL7npLrvvIlcbiAgICAgICAgICAgICAgICBocEJhclNwcml0ZS5ub2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwgMjU1LCAyNTUsIDApOyAvLyDpgI/mmI5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaHBCYXJTcHJpdGUgJiYgc2hpZWxkVmFsdWUgPD0gMCkge1xuICAgICAgICAgICAgICAgIC8vIOayoeacieaKpOebvuaXtu+8jOWPquaYvuekukhQ77yI5L2/55So5Y6f5aeLYmFyU3ByaXRl77yJXG4gICAgICAgICAgICAgICAgaHBCYXJTcHJpdGUubm9kZS5jb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xuICAgICAgICAgICAgICAgIC8vIOmakOiXj+WtkOWxglxuICAgICAgICAgICAgICAgIGNvbnN0IGhwTGF5ZXIgPSBocEJhclNwcml0ZS5ub2RlLmdldENoaWxkQnlOYW1lKFwiSFBMYXllclwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGllbGRMYXllciA9IGhwQmFyU3ByaXRlLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJTaGllbGRMYXllclwiKTtcbiAgICAgICAgICAgICAgICBpZiAoaHBMYXllcikgaHBMYXllci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoc2hpZWxkTGF5ZXIpIHNoaWVsZExheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYy5sb2coYFtIZWFsdGhCYXJdIEhQK+aKpOebviBQcm9ncmVzc0JhcuW3suabtOaWsDogSFA9JHtocFBlcmNlbnR9LCDmiqTnm749JHtzaGllbGRQZXJjZW50fSwg5oC76L+b5bqmPSR7dG90YWxQZXJjZW50fWApO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWQpuWImeS9v+eUqFNwcml0ZeWuveW6puaWueW8j1xuICAgICAgICBlbHNlIGlmICh0aGlzLmhlYWx0aEZpbGwpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoRmlsbC5ub2RlLndpZHRoID0gdGhpcy5fb3JpZ2luYWxXaWR0aCAqIGhwUGVyY2VudDtcbiAgICAgICAgICAgIGNjLmxvZyhgW0hlYWx0aEJhcl0gSFAgU3ByaXRl5bey5pu05pawOiDlrr3luqY9JHt0aGlzLl9vcmlnaW5hbFdpZHRoICogaHBQZXJjZW50fWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2Mud2FybihgW0hlYWx0aEJhcl0g5pyq5om+5YiwSFDmmL7npLrnu4Tku7YgKGhlYWx0aFByb2dyZXNz5oiWaGVhbHRoRmlsbClgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaKpOebvuaYvuekuuW3sumbhuaIkOWIsEhQ6L+b5bqm5p2h5Lit77yI5YWx55So5ZCM5LiA5Liq6L+b5bqm5p2h77yJXG4gICAgICAgIC8vIOWmguaenOS9v+eUqFNwcml0ZeaWueW8j++8jOS7jeeEtumcgOimgeWNleeLrOWkhOeQhuaKpOebvlxuICAgICAgICBpZiAoIXRoaXMuaGVhbHRoUHJvZ3Jlc3MgJiYgdGhpcy5oZWFsdGhGaWxsICYmIHNoaWVsZFZhbHVlID4gMCkge1xuICAgICAgICAgICAgLy8g5L2/55SoU3ByaXRl5a695bqm5pa55byP5pe277yM5oqk55u+6ZyA6KaB5Y2V54us5pi+56S6XG4gICAgICAgICAgICBpZiAodGhpcy5zaGllbGRGaWxsKSB7XG4gICAgICAgICAgICAgICAgLy8g5oqk55u+5a695bqmID0g5oqk55u+5YC85a+55bqU55qE5a695bqmXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpZWxkV2lkdGggPSB0aGlzLl9vcmlnaW5hbFNoaWVsZFdpZHRoICogc2hpZWxkUGVyY2VudDtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaWVsZEZpbGwubm9kZS53aWR0aCA9IHNoaWVsZFdpZHRoO1xuICAgICAgICAgICAgICAgIC8vIOiuvue9ruaKpOebvuminOiJsuS4uueZveiJslxuICAgICAgICAgICAgICAgIHRoaXMuc2hpZWxkRmlsbC5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICAgICAgLy8g6K6+572u5oqk55u+5L2N572u77ya57Sn6Lef5ZyoSFDlkI7pnaLvvIjku45IUOe7k+adn+WkhOW8gOWni++8iVxuICAgICAgICAgICAgICAgIC8vIOiuoeeul0hQIEZpbGznmoTlrp7pmYXmmL7npLrlrr3luqZcbiAgICAgICAgICAgICAgICBjb25zdCBocFdpZHRoID0gdGhpcy5fb3JpZ2luYWxXaWR0aCAqIGhwUGVyY2VudDtcbiAgICAgICAgICAgICAgICAvLyDojrflj5ZIUCBGaWxs6IqC54K555qE5L2N572u5ZKMYW5jaG9yXG4gICAgICAgICAgICAgICAgY29uc3QgaHBGaWxsWCA9IHRoaXMuaGVhbHRoRmlsbC5ub2RlLng7XG4gICAgICAgICAgICAgICAgY29uc3QgaHBGaWxsQW5jaG9yWCA9IHRoaXMuaGVhbHRoRmlsbC5ub2RlLmFuY2hvclg7XG4gICAgICAgICAgICAgICAgLy8g6K6h566XSFAgRmlsbOeahOW3pui+uee8mOS9jee9rlxuICAgICAgICAgICAgICAgIGNvbnN0IGhwTGVmdFggPSBocEZpbGxYIC0gdGhpcy5fb3JpZ2luYWxXaWR0aCAqIChocEZpbGxBbmNob3JYIC0gMC41KTtcbiAgICAgICAgICAgICAgICAvLyDorqHnrpdIUCBGaWxs55qE5Y+z6L6557yY5L2N572u77yISFDnu5PmnZ/kvY3nva7vvIlcbiAgICAgICAgICAgICAgICBjb25zdCBocFJpZ2h0WCA9IGhwTGVmdFggKyBocFdpZHRoO1xuICAgICAgICAgICAgICAgIC8vIOiuvue9ruaKpOebvkZpbGznmoRhbmNob3LkuLrlt6blr7npvZBcbiAgICAgICAgICAgICAgICB0aGlzLnNoaWVsZEZpbGwubm9kZS5hbmNob3JYID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaWVsZEZpbGwubm9kZS5hbmNob3JZID0gdGhpcy5oZWFsdGhGaWxsLm5vZGUuYW5jaG9yWTsgLy8g5L+d5oyBWei9tOWvuem9kFxuICAgICAgICAgICAgICAgIC8vIOiuvue9ruaKpOebvkZpbGznmoTkvY3nva7vvIjntKfot5/lnKhIUOe7k+adn+WkhO+8jOaXoOmXtOmame+8iVxuICAgICAgICAgICAgICAgIHRoaXMuc2hpZWxkRmlsbC5ub2RlLnggPSBocFJpZ2h0WDtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaWVsZEZpbGwubm9kZS55ID0gdGhpcy5oZWFsdGhGaWxsLm5vZGUueTsgLy8g5L+d5oyBWei9tOS9jee9ruS4gOiHtFxuICAgICAgICAgICAgICAgIHRoaXMuc2hpZWxkRmlsbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbSGVhbHRoQmFyXSDmiqTnm75TcHJpdGXlt7Lmm7TmlrA6IOWuveW6pj0ke3NoaWVsZFdpZHRofSwg5L2N572ueD0ke3RoaXMuc2hpZWxkRmlsbC5ub2RlLnh9LCBhY3RpdmU9dHJ1ZWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmhlYWx0aFByb2dyZXNzICYmIHNoaWVsZFZhbHVlIDw9IDApIHtcbiAgICAgICAgICAgIC8vIOayoeacieaKpOebvuaXtumakOiXj+aKpOebvuaYvuekuu+8iFNwcml0ZeaWueW8j++8iVxuICAgICAgICAgICAgaWYgKHRoaXMuc2hpZWxkRmlsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpZWxkRmlsbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOaYvuekuuS8pOWus+aVsOWtl1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIOS8pOWus+WAvFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0g5Lyk5a6z57G75Z6LOiAnbm9ybWFsJyjmma7pgJopLCAnY3JpdCco5pq05Ye7KSwgJ21pc3MnKOmXqumBvyksICdoZWFsJyjmsrvnlpcpXG4gICAgICovXG4gICAgc2hvd0RhbWFnZSh2YWx1ZSwgdHlwZSA9ICdub3JtYWwnKSB7XG4gICAgICAgIGlmICghdGhpcy5kYW1hZ2VMYWJlbCkgcmV0dXJuO1xuXG4gICAgICAgIC8vIOS/neWtmOWIneWni+eKtuaAgVxuICAgICAgICBjb25zdCBzdGFydFkgPSB0aGlzLmRhbWFnZUxhYmVsLm5vZGUueTtcbiAgICAgICAgY29uc3Qgc3RhcnRTY2FsZSA9IHRoaXMuZGFtYWdlTGFiZWwubm9kZS5zY2FsZTtcblxuICAgICAgICAvLyDmoLnmja7kvKTlrrPnsbvlnovorr7nva7moLflvI9cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdjcml0JzogIC8vIOaatOWHu1xuICAgICAgICAgICAgICAgIHRoaXMuZGFtYWdlTGFiZWwuc3RyaW5nID0gXCItXCIgKyBNYXRoLmZsb29yKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhbWFnZUxhYmVsLm5vZGUuY29sb3IgPSBjYy5jb2xvcigyNTUsIDAsIDApOyAgLy8g57qi6ImyXG4gICAgICAgICAgICAgICAgdGhpcy5kYW1hZ2VMYWJlbC5ub2RlLnNjYWxlID0gMi4wOyAgLy8g5pu05aSnXG4gICAgICAgICAgICAgICAgdGhpcy5fcGxheUZsb2F0QW5pbWF0aW9uKHN0YXJ0WSwgc3RhcnRTY2FsZSwgMTAwLCAwLjM1LCB0cnVlKTsgIC8vIOabtOmrmOOAgeaMgee7reaXtumXtOeojeW+ruW7tumVv1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdtaXNzJzogIC8vIOmXqumBv1xuICAgICAgICAgICAgICAgIHRoaXMuZGFtYWdlTGFiZWwuc3RyaW5nID0gXCJNSVNTIVwiO1xuICAgICAgICAgICAgICAgIHRoaXMuZGFtYWdlTGFiZWwubm9kZS5jb2xvciA9IGNjLkNvbG9yLkJMVUU7ICAvLyDok53oibJcbiAgICAgICAgICAgICAgICB0aGlzLmRhbWFnZUxhYmVsLm5vZGUuc2NhbGUgPSAxLjU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGxheUZsb2F0QW5pbWF0aW9uKHN0YXJ0WSwgc3RhcnRTY2FsZSwgNTAsIDAuMywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdoZWFsJzogIC8vIOayu+eWl1xuICAgICAgICAgICAgICAgIHRoaXMuZGFtYWdlTGFiZWwuc3RyaW5nID0gXCIrXCIgKyBNYXRoLmZsb29yKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhbWFnZUxhYmVsLm5vZGUuY29sb3IgPSBjYy5jb2xvcig1MCwgMjA1LCA1MCk7ICAvLyDnu7/oibJcbiAgICAgICAgICAgICAgICB0aGlzLmRhbWFnZUxhYmVsLm5vZGUuc2NhbGUgPSAxLjg7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGxheUZsb2F0QW5pbWF0aW9uKHN0YXJ0WSwgc3RhcnRTY2FsZSwgNzAsIDAuMywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdub3JtYWwnOiAgLy8g5pmu6YCa5Lyk5a6zXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuZGFtYWdlTGFiZWwuc3RyaW5nID0gXCItXCIgKyBNYXRoLmZsb29yKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhbWFnZUxhYmVsLm5vZGUuY29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1KTsgIC8vIOeZveiJslxuICAgICAgICAgICAgICAgIHRoaXMuZGFtYWdlTGFiZWwubm9kZS5zY2FsZSA9IDEuNTtcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGF5RmxvYXRBbmltYXRpb24oc3RhcnRZLCBzdGFydFNjYWxlLCA2MCwgMC4zLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRhbWFnZUxhYmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5pKt5pS+6aOY5a2X5Yqo55S7XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0WSAtIOi1t+Wni1nlnZDmoIdcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRTY2FsZSAtIOi1t+Wni+e8qeaUvlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBmbG9hdEhlaWdodCAtIOmjmOWKqOmrmOW6plxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiAtIOaMgee7reaXtumXtFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hha2UgLSDmmK/lkKbpnIfliqhcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9wbGF5RmxvYXRBbmltYXRpb24oc3RhcnRZLCBzdGFydFNjYWxlLCBmbG9hdEhlaWdodCwgZHVyYXRpb24sIHNoYWtlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmRhbWFnZUxhYmVsLm5vZGU7XG5cbiAgICAgICAgbGV0IHR3ZWVuID0gY2MudHdlZW4obm9kZSk7XG5cbiAgICAgICAgaWYgKHNoYWtlKSB7XG4gICAgICAgICAgICAvLyDmmrTlh7vnibnmlYjvvJrlv6vpgJ/pnIfliqggKyDpo5jliqggKyDmt6Hlh7pcbiAgICAgICAgICAgIHR3ZWVuXG4gICAgICAgICAgICAgICAgLnRvKDAuMDUsIHsgc2NhbGU6IHN0YXJ0U2NhbGUgKiAxLjIgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KVxuICAgICAgICAgICAgICAgIC50bygwLjA1LCB7IHNjYWxlOiBzdGFydFNjYWxlIH0pXG4gICAgICAgICAgICAgICAgLnBhcmFsbGVsKFxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKGR1cmF0aW9uLCB7IHk6IHN0YXJ0WSArIGZsb2F0SGVpZ2h0IH0sIHsgZWFzaW5nOiAnc2luZU91dCcgfSksXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oZHVyYXRpb24sIHsgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogJ3NpbmVJbicgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXNldExhYmVsKHN0YXJ0WSwgc3RhcnRTY2FsZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOaZrumAmumjmOWtl++8muW/q+mAn+mjmOWKqCArIOa3oeWHulxuICAgICAgICAgICAgdHdlZW5cbiAgICAgICAgICAgICAgICAucGFyYWxsZWwoXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oZHVyYXRpb24sIHsgeTogc3RhcnRZICsgZmxvYXRIZWlnaHQgfSwgeyBlYXNpbmc6ICdzaW5lT3V0JyB9KSxcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50byhkdXJhdGlvbiwgeyBvcGFjaXR5OiAwIH0sIHsgZWFzaW5nOiAnc2luZUluJyB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2V0TGFiZWwoc3RhcnRZLCBzdGFydFNjYWxlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOmHjee9ruagh+etvueKtuaAgVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3Jlc2V0TGFiZWwoc3RhcnRZLCBzdGFydFNjYWxlKSB7XG4gICAgICAgIHRoaXMuZGFtYWdlTGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kYW1hZ2VMYWJlbC5ub2RlLnkgPSBzdGFydFk7XG4gICAgICAgIHRoaXMuZGFtYWdlTGFiZWwubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICB0aGlzLmRhbWFnZUxhYmVsLm5vZGUuc2NhbGUgPSBzdGFydFNjYWxlO1xuICAgICAgICB0aGlzLmRhbWFnZUxhYmVsLm5vZGUuY29sb3IgPSBjYy5jb2xvcigyNTUsIDI1NSwgMjU1KTtcbiAgICB9XG59KTsiXX0=