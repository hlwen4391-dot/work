
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ecs/UltimateSkillUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7c0cE2oZdInIgg1R1RxkYJ', 'UltimateSkillUI');
// Scripts/ecs/UltimateSkillUI.js

"use strict";

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * 大招释放UI组件
 * 显示大招释放时的屏幕蒙版和顶部动画（人物头像+技能名称）
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // 蒙版节点（半透明黑色遮罩）
    maskNode: {
      "default": null,
      type: cc.Node,
      tooltip: "蒙版节点（半透明黑色遮罩）"
    },
    // 顶部容器节点（包含头像和技能名称）
    topContainer: {
      "default": null,
      type: cc.Node,
      tooltip: "顶部容器节点（包含头像和技能名称）"
    },
    // 头像Sprite组件
    avatarSprite: {
      "default": null,
      type: cc.Sprite,
      tooltip: "头像Sprite组件"
    },
    // 技能名称Label组件
    skillNameLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "技能名称Label组件"
    },
    // 人物名称Label组件（可选）
    characterNameLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "人物名称Label组件（可选）"
    },
    // 显示持续时间
    displayDuration: {
      "default": 1.5,
      tooltip: "显示持续时间（秒）"
    },
    // 头像大小（像素）
    avatarSize: {
      "default": 120,
      tooltip: "头像显示大小（像素，宽高相同）"
    }
  },
  onLoad: function onLoad() {
    // 初始化时隐藏所有元素
    if (this.maskNode) {
      this.maskNode.active = false;
      this.maskNode.opacity = 0;
    }
    if (this.topContainer) {
      this.topContainer.active = false;
    }

    // 初始化大招队列（用于处理多个同时释放的大招）
    this._ultimateQueue = [];
    this._isPlaying = false; // 是否正在播放动画
  },
  /**
   * 显示大招释放UI（支持队列机制，多个大招会按顺序播放）
   * @param {cc.Node} caster - 施法者节点
   * @param {string} skillName - 技能名称
   * @param {cc.SpriteFrame} avatarSpriteFrame - 头像图片（可选）
   * @param {Function} onComplete - 完成回调（可选）
   */
  showUltimateSkill: function showUltimateSkill(caster, skillName, avatarSpriteFrame, onComplete) {
    var _this = this;
    if (!caster || !skillName) {
      cc.warn("[UltimateSkillUI] 参数不完整，无法显示大招UI");
      if (onComplete) onComplete();
      return;
    }

    // 如果正在播放动画，将请求加入队列
    if (this._isPlaying) {
      cc.log("[UltimateSkillUI] \u5F53\u524D\u6B63\u5728\u64AD\u653E\u5927\u62DB\u52A8\u753B\uFF0C\u5C06 " + caster.name + " \u7684 " + skillName + " \u52A0\u5165\u961F\u5217");
      this._ultimateQueue.push({
        caster: caster,
        skillName: skillName,
        avatarSpriteFrame: avatarSpriteFrame,
        onComplete: onComplete
      });
      return;
    }

    // 标记为正在播放
    this._isPlaying = true;

    // 暂停战斗系统（只在第一个大招时暂停，后续的会在队列中自动处理）
    this._pauseBattle();

    // 设置技能名称
    if (this.skillNameLabel) {
      this.skillNameLabel.string = skillName;
    }

    // 设置人物名称
    if (this.characterNameLabel) {
      this.characterNameLabel.string = caster.name;
    }

    // 设置头像（如果提供了头像资源）
    if (this.avatarSprite && avatarSpriteFrame) {
      this.avatarSprite.spriteFrame = avatarSpriteFrame;

      // 确保Sprite组件设置正确，并限制头像大小
      if (this.avatarSprite.type !== cc.Sprite.Type.SIMPLE) {
        this.avatarSprite.type = cc.Sprite.Type.SIMPLE;
      }
      if (this.avatarSprite.sizeMode !== cc.Sprite.SizeMode.CUSTOM) {
        this.avatarSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
      }

      // 设置头像节点大小（限制大小，防止过大）
      if (this.avatarSprite.node) {
        var avatarSize = this.avatarSize || 120;
        this.avatarSprite.node.width = avatarSize;
        this.avatarSprite.node.height = avatarSize;
        cc.log("[UltimateSkillUI] \u8BBE\u7F6E\u5934\u50CF\u5927\u5C0F: " + avatarSize + "x" + avatarSize);
      }
    }

    // 显示并播放动画（传入包装的回调，处理队列）
    this._playAnimation(function () {
      // 执行原始回调
      if (onComplete) {
        onComplete();
      }

      // 处理队列中的下一个大招
      _this._processNextUltimate();
    });
  },
  /**
   * 播放显示动画
   * @private
   * @param {Function} onComplete - 完成回调
   */
  _playAnimation: function _playAnimation(onComplete) {
    var _this2 = this;
    // 1. 显示蒙版（淡入）
    if (this.maskNode) {
      this.maskNode.active = true;
      this.maskNode.opacity = 0;
      cc.tween(this.maskNode).to(0.3, {
        opacity: 180
      }, {
        easing: 'sineOut'
      }) // 半透明黑色（180/255）
      .start();
    }

    // 2. 显示顶部容器（从上方滑入）
    if (this.topContainer) {
      this.topContainer.active = true;

      // 获取Canvas尺寸（用于计算顶部位置）
      var canvas = cc.find("Canvas");
      var canvasHeight = canvas ? canvas.height : 640;
      var startY = canvasHeight / 2 + 100; // 从屏幕上方外开始
      var endY = canvasHeight / 2 - 50; // 最终位置（距离顶部50像素）

      // 设置初始位置（屏幕上方外）
      this.topContainer.y = startY;
      this.topContainer.opacity = 0;
      this.topContainer.scale = 0.8;

      // 滑入动画
      cc.tween(this.topContainer).parallel(cc.tween().to(0.4, {
        y: endY
      }, {
        easing: 'backOut'
      }), cc.tween().to(0.4, {
        opacity: 255
      }, {
        easing: 'sineOut'
      }), cc.tween().to(0.4, {
        scale: 1.0
      }, {
        easing: 'backOut'
      })).delay(this.displayDuration - 0.4) // 停留时间
      .parallel(cc.tween().to(0.3, {
        y: startY
      }, {
        easing: 'sineIn'
      }), cc.tween().to(0.3, {
        opacity: 0
      }, {
        easing: 'sineIn'
      }), cc.tween().to(0.3, {
        scale: 0.8
      }, {
        easing: 'sineIn'
      })).call(function () {
        // 隐藏节点
        if (_this2.topContainer) {
          _this2.topContainer.active = false;
        }
        // 隐藏蒙版（淡出）
        if (_this2.maskNode) {
          cc.tween(_this2.maskNode).to(0.2, {
            opacity: 0
          }, {
            easing: 'sineIn'
          }).call(function () {
            if (_this2.maskNode) {
              _this2.maskNode.active = false;
            }
            // 只有在队列为空时才恢复战斗系统（最后一个动画）
            if (_this2._ultimateQueue.length === 0) {
              _this2._resumeBattle();
            }
            if (onComplete) onComplete();
          }).start();
        } else {
          // 只有在队列为空时才恢复战斗系统（最后一个动画）
          if (_this2._ultimateQueue.length === 0) {
            _this2._resumeBattle();
          }
          if (onComplete) onComplete();
        }
      }).start();
    } else {
      // 如果没有顶部容器，只显示蒙版
      this.scheduleOnce(function () {
        if (_this2.maskNode) {
          cc.tween(_this2.maskNode).to(0.2, {
            opacity: 0
          }, {
            easing: 'sineIn'
          }).call(function () {
            if (_this2.maskNode) {
              _this2.maskNode.active = false;
            }
            // 只有在队列为空时才恢复战斗系统（最后一个动画）
            if (_this2._ultimateQueue.length === 0) {
              _this2._resumeBattle();
            }
            if (onComplete) onComplete();
          }).start();
        } else {
          // 只有在队列为空时才恢复战斗系统（最后一个动画）
          if (_this2._ultimateQueue.length === 0) {
            _this2._resumeBattle();
          }
          if (onComplete) onComplete();
        }
      }, this.displayDuration);
    }
  },
  /**
   * 暂停战斗系统
   * @private
   */
  _pauseBattle: function _pauseBattle() {
    // 查找BattleController（使用多种方法）
    var scene = cc.director.getScene();
    if (!scene) {
      cc.warn("[UltimateSkillUI] 无法找到场景");
      return;
    }
    var battleController = null;

    // 方法1: 在Canvas节点上查找BattleController组件
    var canvas = scene.getChildByName("Canvas");
    if (canvas) {
      battleController = canvas.getComponent("BattleController");
    }

    // 方法2: 在Canvas的子节点中查找名为"BattleController"的节点
    if (!battleController && canvas) {
      var battleControllerNode = canvas.getChildByName("BattleController");
      if (battleControllerNode) {
        battleController = battleControllerNode.getComponent("BattleController");
      }
    }

    // 方法3: 在场景根节点中查找名为"BattleController"的节点（重要！）
    if (!battleController) {
      var _battleControllerNode = scene.getChildByName("BattleController");
      if (_battleControllerNode) {
        battleController = _battleControllerNode.getComponent("BattleController");
      }
    }

    // 方法4: 使用getComponentInChildren递归查找（从场景根节点）
    if (!battleController) {
      battleController = scene.getComponentInChildren("BattleController");
    }

    // 方法5: 遍历场景所有子节点查找（最后手段）
    if (!battleController) {
      var findComponent = function findComponent(node, componentName) {
        var comp = node.getComponent(componentName);
        if (comp) return comp;
        for (var _iterator = _createForOfIteratorHelperLoose(node.children), _step; !(_step = _iterator()).done;) {
          var child = _step.value;
          var result = findComponent(child, componentName);
          if (result) return result;
        }
        return null;
      };
      battleController = findComponent(scene, "BattleController");
    }
    if (battleController && battleController.battleSystem) {
      battleController.battleSystem.pause();
      cc.log("[UltimateSkillUI] ✓ 战斗系统已暂停");
    } else {
      cc.warn("[UltimateSkillUI] ⚠️ 未找到BattleController，无法暂停战斗");
      cc.warn("[UltimateSkillUI] 请确保BattleController节点存在于场景中");
    }
  },
  /**
   * 恢复战斗系统
   * @private
   */
  _resumeBattle: function _resumeBattle() {
    // 查找BattleController（使用多种方法）
    var scene = cc.director.getScene();
    if (!scene) {
      cc.warn("[UltimateSkillUI] 无法找到场景");
      return;
    }
    var battleController = null;

    // 方法1: 在Canvas节点上查找BattleController组件
    var canvas = scene.getChildByName("Canvas");
    if (canvas) {
      battleController = canvas.getComponent("BattleController");
    }

    // 方法2: 在Canvas的子节点中查找名为"BattleController"的节点
    if (!battleController && canvas) {
      var battleControllerNode = canvas.getChildByName("BattleController");
      if (battleControllerNode) {
        battleController = battleControllerNode.getComponent("BattleController");
      }
    }

    // 方法3: 在场景根节点中查找名为"BattleController"的节点（重要！）
    if (!battleController) {
      var _battleControllerNode2 = scene.getChildByName("BattleController");
      if (_battleControllerNode2) {
        battleController = _battleControllerNode2.getComponent("BattleController");
      }
    }

    // 方法4: 使用getComponentInChildren递归查找（从场景根节点）
    if (!battleController) {
      battleController = scene.getComponentInChildren("BattleController");
    }

    // 方法5: 遍历场景所有子节点查找（最后手段）
    if (!battleController) {
      var findComponent = function findComponent(node, componentName) {
        var comp = node.getComponent(componentName);
        if (comp) return comp;
        for (var _iterator2 = _createForOfIteratorHelperLoose(node.children), _step2; !(_step2 = _iterator2()).done;) {
          var child = _step2.value;
          var result = findComponent(child, componentName);
          if (result) return result;
        }
        return null;
      };
      battleController = findComponent(scene, "BattleController");
    }
    if (battleController && battleController.battleSystem) {
      battleController.battleSystem.resume();
      cc.log("[UltimateSkillUI] ✓ 战斗系统已恢复");
    } else {
      cc.warn("[UltimateSkillUI] ⚠️ 未找到BattleController，无法恢复战斗");
      cc.warn("[UltimateSkillUI] 请确保BattleController节点存在于场景中");
    }
  },
  /**
   * 处理队列中的下一个大招
   * @private
   */
  _processNextUltimate: function _processNextUltimate() {
    var _this3 = this;
    // 如果队列为空，恢复战斗系统并重置状态
    if (this._ultimateQueue.length === 0) {
      this._isPlaying = false;
      // 注意：这里不恢复战斗系统，因为最后一个动画的回调中已经恢复了
      cc.log("[UltimateSkillUI] 大招队列已清空");
      return;
    }

    // 从队列中取出下一个大招
    var nextUltimate = this._ultimateQueue.shift();
    cc.log("[UltimateSkillUI] \u64AD\u653E\u961F\u5217\u4E2D\u7684\u4E0B\u4E00\u4E2A\u5927\u62DB: " + nextUltimate.caster.name + " \u7684 " + nextUltimate.skillName);

    // 延迟一小段时间（让上一个动画完全结束），然后播放下一个
    this.scheduleOnce(function () {
      // 重新调用 showUltimateSkill（此时 _isPlaying 为 false，会直接播放）
      _this3._isPlaying = false; // 先重置，让 showUltimateSkill 可以正常处理
      _this3.showUltimateSkill(nextUltimate.caster, nextUltimate.skillName, nextUltimate.avatarSpriteFrame, nextUltimate.onComplete);
    }, 0.1); // 延迟0.1秒，确保上一个动画完全结束
  },
  /**
   * 立即隐藏UI（用于紧急情况）
   */
  hide: function hide() {
    if (this.maskNode) {
      this.maskNode.active = false;
      this.maskNode.opacity = 0;
    }
    if (this.topContainer) {
      this.topContainer.active = false;
    }

    // 清空队列并重置状态
    this._ultimateQueue = [];
    this._isPlaying = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxVbHRpbWF0ZVNraWxsVUkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtYXNrTm9kZSIsInR5cGUiLCJOb2RlIiwidG9vbHRpcCIsInRvcENvbnRhaW5lciIsImF2YXRhclNwcml0ZSIsIlNwcml0ZSIsInNraWxsTmFtZUxhYmVsIiwiTGFiZWwiLCJjaGFyYWN0ZXJOYW1lTGFiZWwiLCJkaXNwbGF5RHVyYXRpb24iLCJhdmF0YXJTaXplIiwib25Mb2FkIiwiYWN0aXZlIiwib3BhY2l0eSIsIl91bHRpbWF0ZVF1ZXVlIiwiX2lzUGxheWluZyIsInNob3dVbHRpbWF0ZVNraWxsIiwiY2FzdGVyIiwic2tpbGxOYW1lIiwiYXZhdGFyU3ByaXRlRnJhbWUiLCJvbkNvbXBsZXRlIiwiX3RoaXMiLCJ3YXJuIiwibG9nIiwibmFtZSIsInB1c2giLCJfcGF1c2VCYXR0bGUiLCJzdHJpbmciLCJzcHJpdGVGcmFtZSIsIlR5cGUiLCJTSU1QTEUiLCJzaXplTW9kZSIsIlNpemVNb2RlIiwiQ1VTVE9NIiwibm9kZSIsIndpZHRoIiwiaGVpZ2h0IiwiX3BsYXlBbmltYXRpb24iLCJfcHJvY2Vzc05leHRVbHRpbWF0ZSIsIl90aGlzMiIsInR3ZWVuIiwidG8iLCJlYXNpbmciLCJzdGFydCIsImNhbnZhcyIsImZpbmQiLCJjYW52YXNIZWlnaHQiLCJzdGFydFkiLCJlbmRZIiwieSIsInNjYWxlIiwicGFyYWxsZWwiLCJkZWxheSIsImNhbGwiLCJsZW5ndGgiLCJfcmVzdW1lQmF0dGxlIiwic2NoZWR1bGVPbmNlIiwic2NlbmUiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiYmF0dGxlQ29udHJvbGxlciIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiYmF0dGxlQ29udHJvbGxlck5vZGUiLCJnZXRDb21wb25lbnRJbkNoaWxkcmVuIiwiZmluZENvbXBvbmVudCIsImNvbXBvbmVudE5hbWUiLCJjb21wIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsImNoaWxkcmVuIiwiX3N0ZXAiLCJkb25lIiwiY2hpbGQiLCJ2YWx1ZSIsInJlc3VsdCIsImJhdHRsZVN5c3RlbSIsInBhdXNlIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsInJlc3VtZSIsIl90aGlzMyIsIm5leHRVbHRpbWF0ZSIsInNoaWZ0IiwiaGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1I7SUFDQUMsUUFBUSxFQUFFO01BQ04sV0FBUyxJQUFJO01BQ2JDLElBQUksRUFBRUwsRUFBRSxDQUFDTSxJQUFJO01BQ2JDLE9BQU8sRUFBRTtJQUNiLENBQUM7SUFFRDtJQUNBQyxZQUFZLEVBQUU7TUFDVixXQUFTLElBQUk7TUFDYkgsSUFBSSxFQUFFTCxFQUFFLENBQUNNLElBQUk7TUFDYkMsT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVEO0lBQ0FFLFlBQVksRUFBRTtNQUNWLFdBQVMsSUFBSTtNQUNiSixJQUFJLEVBQUVMLEVBQUUsQ0FBQ1UsTUFBTTtNQUNmSCxPQUFPLEVBQUU7SUFDYixDQUFDO0lBRUQ7SUFDQUksY0FBYyxFQUFFO01BQ1osV0FBUyxJQUFJO01BQ2JOLElBQUksRUFBRUwsRUFBRSxDQUFDWSxLQUFLO01BQ2RMLE9BQU8sRUFBRTtJQUNiLENBQUM7SUFFRDtJQUNBTSxrQkFBa0IsRUFBRTtNQUNoQixXQUFTLElBQUk7TUFDYlIsSUFBSSxFQUFFTCxFQUFFLENBQUNZLEtBQUs7TUFDZEwsT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVEO0lBQ0FPLGVBQWUsRUFBRTtNQUNiLFdBQVMsR0FBRztNQUNaUCxPQUFPLEVBQUU7SUFDYixDQUFDO0lBRUQ7SUFDQVEsVUFBVSxFQUFFO01BQ1IsV0FBUyxH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RSxJQUFJLFdBQUFBLEtBQUEsRUFBRztJQUNILElBQUksSUFBSSxDQUFDckYsUUFBUSxFQUFFO01BQ2YsSUFBSSxDQUFDQSxRQUFRLENBQUNhLE1BQU0sR0FBRyxLQUFLO01BQzVCLElBQUksQ0FBQ2IsUUFBUSxDQUFDYyxPQUFPLEdBQUcsQ0FBQztJQUM3QjtJQUNBLElBQUksSUFBSSxDQUFDVixZQUFZLEVBQUU7TUFDbkIsSUFBSSxDQUFDQSxZQUFZLENBQUNTLE1BQU0sR0FBRyxLQUFLO0lBQ3BDOztJQUVBO0lBQ0EsSUFBSSxDQUFDRSxjQUFjLEdBQUcsRUFBRTtJQUN4QixJQUFJLENBQUNDLFVBQVUsR0FBRyxLQUFLO0VBQzNCO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5aSn5oub6YeK5pS+VUnnu4Tku7ZcclxuICog5pi+56S65aSn5oub6YeK5pS+5pe255qE5bGP5bmV6JKZ54mI5ZKM6aG26YOo5Yqo55S777yI5Lq654mp5aS05YOPK+aKgOiDveWQjeensO+8iVxyXG4gKi9cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyDokpnniYjoioLngrnvvIjljYrpgI/mmI7pu5HoibLpga7nvanvvIlcclxuICAgICAgICBtYXNrTm9kZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIuiSmeeJiOiKgueCue+8iOWNiumAj+aYjum7keiJsumBrue9qe+8iVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g6aG26YOo5a655Zmo6IqC54K577yI5YyF5ZCr5aS05YOP5ZKM5oqA6IO95ZCN56ew77yJXHJcbiAgICAgICAgdG9wQ29udGFpbmVyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6aG26YOo5a655Zmo6IqC54K577yI5YyF5ZCr5aS05YOP5ZKM5oqA6IO95ZCN56ew77yJXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDlpLTlg49TcHJpdGXnu4Tku7ZcclxuICAgICAgICBhdmF0YXJTcHJpdGU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWktOWDj1Nwcml0Zee7hOS7tlwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5oqA6IO95ZCN56ewTGFiZWznu4Tku7ZcclxuICAgICAgICBza2lsbE5hbWVMYWJlbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLmioDog73lkI3np7BMYWJlbOe7hOS7tlwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5Lq654mp5ZCN56ewTGFiZWznu4Tku7bvvIjlj6/pgInvvIlcclxuICAgICAgICBjaGFyYWN0ZXJOYW1lTGFiZWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5Lq654mp5ZCN56ewTGFiZWznu4Tku7bvvIjlj6/pgInvvIlcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOaYvuekuuaMgee7reaXtumXtFxyXG4gICAgICAgIGRpc3BsYXlEdXJhdGlvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAxLjUsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5pi+56S65oyB57ut5pe26Ze077yI56eS77yJXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDlpLTlg4/lpKflsI/vvIjlg4/ntKDvvIlcclxuICAgICAgICBhdmF0YXJTaXplOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEyMCxcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLlpLTlg4/mmL7npLrlpKflsI/vvIjlg4/ntKDvvIzlrr3pq5jnm7jlkIzvvIlcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIOWIneWni+WMluaXtumakOiXj+aJgOacieWFg+e0oFxyXG4gICAgICAgIGlmICh0aGlzLm1hc2tOb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFza05vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubWFza05vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRvcENvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLnRvcENvbnRhaW5lci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMluWkp+aLm+mYn+WIl++8iOeUqOS6juWkhOeQhuWkmuS4quWQjOaXtumHiuaUvueahOWkp+aLm++8iVxyXG4gICAgICAgIHRoaXMuX3VsdGltYXRlUXVldWUgPSBbXTtcclxuICAgICAgICB0aGlzLl9pc1BsYXlpbmcgPSBmYWxzZTsgLy8g5piv5ZCm5q2j5Zyo5pKt5pS+5Yqo55S7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65aSn5oub6YeK5pS+VUnvvIjmlK/mjIHpmJ/liJfmnLrliLbvvIzlpJrkuKrlpKfmi5vkvJrmjInpobrluo/mkq3mlL7vvIlcclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gY2FzdGVyIC0g5pa95rOV6ICF6IqC54K5XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2tpbGxOYW1lIC0g5oqA6IO95ZCN56ewXHJcbiAgICAgKiBAcGFyYW0ge2NjLlNwcml0ZUZyYW1lfSBhdmF0YXJTcHJpdGVGcmFtZSAtIOWktOWDj+WbvueJh++8iOWPr+mAie+8iVxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25Db21wbGV0ZSAtIOWujOaIkOWbnuiwg++8iOWPr+mAie+8iVxyXG4gICAgICovXHJcbiAgICBzaG93VWx0aW1hdGVTa2lsbChjYXN0ZXIsIHNraWxsTmFtZSwgYXZhdGFyU3ByaXRlRnJhbWUsIG9uQ29tcGxldGUpIHtcclxuICAgICAgICBpZiAoIWNhc3RlciB8fCAhc2tpbGxOYW1lKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCJbVWx0aW1hdGVTa2lsbFVJXSDlj4LmlbDkuI3lrozmlbTvvIzml6Dms5XmmL7npLrlpKfmi5tVSVwiKTtcclxuICAgICAgICAgICAgaWYgKG9uQ29tcGxldGUpIG9uQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5aaC5p6c5q2j5Zyo5pKt5pS+5Yqo55S777yM5bCG6K+35rGC5Yqg5YWl6Zif5YiXXHJcbiAgICAgICAgaWYgKHRoaXMuX2lzUGxheWluZykge1xyXG4gICAgICAgICAgICBjYy5sb2coYFtVbHRpbWF0ZVNraWxsVUldIOW9k+WJjeato+WcqOaSreaUvuWkp+aLm+WKqOeUu++8jOWwhiAke2Nhc3Rlci5uYW1lfSDnmoQgJHtza2lsbE5hbWV9IOWKoOWFpemYn+WIl2ApO1xyXG4gICAgICAgICAgICB0aGlzLl91bHRpbWF0ZVF1ZXVlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgY2FzdGVyOiBjYXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBza2lsbE5hbWU6IHNraWxsTmFtZSxcclxuICAgICAgICAgICAgICAgIGF2YXRhclNwcml0ZUZyYW1lOiBhdmF0YXJTcHJpdGVGcmFtZSxcclxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IG9uQ29tcGxldGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOagh+iusOS4uuato+WcqOaSreaUvlxyXG4gICAgICAgIHRoaXMuX2lzUGxheWluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIOaaguWBnOaImOaWl+ezu+e7n++8iOWPquWcqOesrOS4gOS4quWkp+aLm+aXtuaaguWBnO+8jOWQjue7reeahOS8muWcqOmYn+WIl+S4reiHquWKqOWkhOeQhu+8iVxyXG4gICAgICAgIHRoaXMuX3BhdXNlQmF0dGxlKCk7XHJcblxyXG4gICAgICAgIC8vIOiuvue9ruaKgOiDveWQjeensFxyXG4gICAgICAgIGlmICh0aGlzLnNraWxsTmFtZUxhYmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2tpbGxOYW1lTGFiZWwuc3RyaW5nID0gc2tpbGxOYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6K6+572u5Lq654mp5ZCN56ewXHJcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyTmFtZUxhYmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyTmFtZUxhYmVsLnN0cmluZyA9IGNhc3Rlci5uYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6K6+572u5aS05YOP77yI5aaC5p6c5o+Q5L6b5LqG5aS05YOP6LWE5rqQ77yJXHJcbiAgICAgICAgaWYgKHRoaXMuYXZhdGFyU3ByaXRlICYmIGF2YXRhclNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXZhdGFyU3ByaXRlLnNwcml0ZUZyYW1lID0gYXZhdGFyU3ByaXRlRnJhbWU7XHJcblxyXG4gICAgICAgICAgICAvLyDnoa7kv51TcHJpdGXnu4Tku7borr7nva7mraPnoa7vvIzlubbpmZDliLblpLTlg4/lpKflsI9cclxuICAgICAgICAgICAgaWYgKHRoaXMuYXZhdGFyU3ByaXRlLnR5cGUgIT09IGNjLlNwcml0ZS5UeXBlLlNJTVBMRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdmF0YXJTcHJpdGUudHlwZSA9IGNjLlNwcml0ZS5UeXBlLlNJTVBMRTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5hdmF0YXJTcHJpdGUuc2l6ZU1vZGUgIT09IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT00pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXZhdGFyU3ByaXRlLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g6K6+572u5aS05YOP6IqC54K55aSn5bCP77yI6ZmQ5Yi25aSn5bCP77yM6Ziy5q2i6L+H5aSn77yJXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmF2YXRhclNwcml0ZS5ub2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdmF0YXJTaXplID0gdGhpcy5hdmF0YXJTaXplIHx8IDEyMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXZhdGFyU3ByaXRlLm5vZGUud2lkdGggPSBhdmF0YXJTaXplO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdmF0YXJTcHJpdGUubm9kZS5oZWlnaHQgPSBhdmF0YXJTaXplO1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKGBbVWx0aW1hdGVTa2lsbFVJXSDorr7nva7lpLTlg4/lpKflsI86ICR7YXZhdGFyU2l6ZX14JHthdmF0YXJTaXplfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmmL7npLrlubbmkq3mlL7liqjnlLvvvIjkvKDlhaXljIXoo4XnmoTlm57osIPvvIzlpITnkIbpmJ/liJfvvIlcclxuICAgICAgICB0aGlzLl9wbGF5QW5pbWF0aW9uKCgpID0+IHtcclxuICAgICAgICAgICAgLy8g5omn6KGM5Y6f5aeL5Zue6LCDXHJcbiAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIOWkhOeQhumYn+WIl+S4reeahOS4i+S4gOS4quWkp+aLm1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9jZXNzTmV4dFVsdGltYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+5pi+56S65Yqo55S7XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25Db21wbGV0ZSAtIOWujOaIkOWbnuiwg1xyXG4gICAgICovXHJcbiAgICBfcGxheUFuaW1hdGlvbihvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgLy8gMS4g5pi+56S66JKZ54mI77yI5reh5YWl77yJXHJcbiAgICAgICAgaWYgKHRoaXMubWFza05vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXNrTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1hc2tOb2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm1hc2tOb2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMywgeyBvcGFjaXR5OiAxODAgfSwgeyBlYXNpbmc6ICdzaW5lT3V0JyB9KSAgLy8g5Y2K6YCP5piO6buR6Imy77yIMTgwLzI1Ne+8iVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAyLiDmmL7npLrpobbpg6jlrrnlmajvvIjku47kuIrmlrnmu5HlhaXvvIlcclxuICAgICAgICBpZiAodGhpcy50b3BDb250YWluZXIpIHtcclxuICAgICAgICAgICAgdGhpcy50b3BDb250YWluZXIuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIOiOt+WPlkNhbnZhc+WwuuWvuO+8iOeUqOS6juiuoeeul+mhtumDqOS9jee9ru+8iVxyXG4gICAgICAgICAgICBjb25zdCBjYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBjYW52YXNIZWlnaHQgPSBjYW52YXMgPyBjYW52YXMuaGVpZ2h0IDogNjQwO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFkgPSBjYW52YXNIZWlnaHQgLyAyICsgMTAwOyAgLy8g5LuO5bGP5bmV5LiK5pa55aSW5byA5aeLXHJcbiAgICAgICAgICAgIGNvbnN0IGVuZFkgPSBjYW52YXNIZWlnaHQgLyAyIC0gNTA7ICAgIC8vIOacgOe7iOS9jee9ru+8iOi3neemu+mhtumDqDUw5YOP57Sg77yJXHJcblxyXG4gICAgICAgICAgICAvLyDorr7nva7liJ3lp4vkvY3nva7vvIjlsY/luZXkuIrmlrnlpJbvvIlcclxuICAgICAgICAgICAgdGhpcy50b3BDb250YWluZXIueSA9IHN0YXJ0WTtcclxuICAgICAgICAgICAgdGhpcy50b3BDb250YWluZXIub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMudG9wQ29udGFpbmVyLnNjYWxlID0gMC44O1xyXG5cclxuICAgICAgICAgICAgLy8g5ruR5YWl5Yqo55S7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMudG9wQ29udGFpbmVyKVxyXG4gICAgICAgICAgICAgICAgLnBhcmFsbGVsKFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC40LCB7IHk6IGVuZFkgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuNCwgeyBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6ICdzaW5lT3V0JyB9KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuNCwgeyBzY2FsZTogMS4wIH0sIHsgZWFzaW5nOiAnYmFja091dCcgfSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5kZWxheSh0aGlzLmRpc3BsYXlEdXJhdGlvbiAtIDAuNCkgIC8vIOWBnOeVmeaXtumXtFxyXG4gICAgICAgICAgICAgICAgLnBhcmFsbGVsKFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4zLCB7IHk6IHN0YXJ0WSB9LCB7IGVhc2luZzogJ3NpbmVJbicgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjMsIHsgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogJ3NpbmVJbicgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjMsIHsgc2NhbGU6IDAuOCB9LCB7IGVhc2luZzogJ3NpbmVJbicgfSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDpmpDol4/oioLngrlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b3BDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BDb250YWluZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOmakOiXj+iSmeeJiO+8iOa3oeWHuu+8iVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hc2tOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFza05vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6ICdzaW5lSW4nIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFza05vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Y+q5pyJ5Zyo6Zif5YiX5Li656m65pe25omN5oGi5aSN5oiY5paX57O757uf77yI5pyA5ZCO5LiA5Liq5Yqo55S777yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3VsdGltYXRlUXVldWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jlc3VtZUJhdHRsZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob25Db21wbGV0ZSkgb25Db21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWPquacieWcqOmYn+WIl+S4uuepuuaXtuaJjeaBouWkjeaImOaWl+ezu+e7n++8iOacgOWQjuS4gOS4quWKqOeUu++8iVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fdWx0aW1hdGVRdWV1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jlc3VtZUJhdHRsZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSBvbkNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOWmguaenOayoeaciemhtumDqOWuueWZqO+8jOWPquaYvuekuuiSmeeJiFxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXNrTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubWFza05vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjIsIHsgb3BhY2l0eTogMCB9LCB7IGVhc2luZzogJ3NpbmVJbicgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFza05vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2tOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Y+q5pyJ5Zyo6Zif5YiX5Li656m65pe25omN5oGi5aSN5oiY5paX57O757uf77yI5pyA5ZCO5LiA5Liq5Yqo55S777yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fdWx0aW1hdGVRdWV1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXN1bWVCYXR0bGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSBvbkNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDlj6rmnInlnKjpmJ/liJfkuLrnqbrml7bmiY3mgaLlpI3miJjmlpfns7vnu5/vvIjmnIDlkI7kuIDkuKrliqjnlLvvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fdWx0aW1hdGVRdWV1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVzdW1lQmF0dGxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSBvbkNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHRoaXMuZGlzcGxheUR1cmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pqC5YGc5oiY5paX57O757ufXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfcGF1c2VCYXR0bGUoKSB7XHJcbiAgICAgICAgLy8g5p+l5om+QmF0dGxlQ29udHJvbGxlcu+8iOS9v+eUqOWkmuenjeaWueazle+8iVxyXG4gICAgICAgIGNvbnN0IHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuICAgICAgICBpZiAoIXNjZW5lKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCJbVWx0aW1hdGVTa2lsbFVJXSDml6Dms5Xmib7liLDlnLrmma9cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBiYXR0bGVDb250cm9sbGVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8g5pa55rOVMTog5ZyoQ2FudmFz6IqC54K55LiK5p+l5om+QmF0dGxlQ29udHJvbGxlcue7hOS7tlxyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHNjZW5lLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xyXG4gICAgICAgIGlmIChjYW52YXMpIHtcclxuICAgICAgICAgICAgYmF0dGxlQ29udHJvbGxlciA9IGNhbnZhcy5nZXRDb21wb25lbnQoXCJCYXR0bGVDb250cm9sbGVyXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5pa55rOVMjog5ZyoQ2FudmFz55qE5a2Q6IqC54K55Lit5p+l5om+5ZCN5Li6XCJCYXR0bGVDb250cm9sbGVyXCLnmoToioLngrlcclxuICAgICAgICBpZiAoIWJhdHRsZUNvbnRyb2xsZXIgJiYgY2FudmFzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhdHRsZUNvbnRyb2xsZXJOb2RlID0gY2FudmFzLmdldENoaWxkQnlOYW1lKFwiQmF0dGxlQ29udHJvbGxlclwiKTtcclxuICAgICAgICAgICAgaWYgKGJhdHRsZUNvbnRyb2xsZXJOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBiYXR0bGVDb250cm9sbGVyID0gYmF0dGxlQ29udHJvbGxlck5vZGUuZ2V0Q29tcG9uZW50KFwiQmF0dGxlQ29udHJvbGxlclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5pa55rOVMzog5Zyo5Zy65pmv5qC56IqC54K55Lit5p+l5om+5ZCN5Li6XCJCYXR0bGVDb250cm9sbGVyXCLnmoToioLngrnvvIjph43opoHvvIHvvIlcclxuICAgICAgICBpZiAoIWJhdHRsZUNvbnRyb2xsZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgYmF0dGxlQ29udHJvbGxlck5vZGUgPSBzY2VuZS5nZXRDaGlsZEJ5TmFtZShcIkJhdHRsZUNvbnRyb2xsZXJcIik7XHJcbiAgICAgICAgICAgIGlmIChiYXR0bGVDb250cm9sbGVyTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgYmF0dGxlQ29udHJvbGxlciA9IGJhdHRsZUNvbnRyb2xsZXJOb2RlLmdldENvbXBvbmVudChcIkJhdHRsZUNvbnRyb2xsZXJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOaWueazlTQ6IOS9v+eUqGdldENvbXBvbmVudEluQ2hpbGRyZW7pgJLlvZLmn6Xmib7vvIjku47lnLrmma/moLnoioLngrnvvIlcclxuICAgICAgICBpZiAoIWJhdHRsZUNvbnRyb2xsZXIpIHtcclxuICAgICAgICAgICAgYmF0dGxlQ29udHJvbGxlciA9IHNjZW5lLmdldENvbXBvbmVudEluQ2hpbGRyZW4oXCJCYXR0bGVDb250cm9sbGVyXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5pa55rOVNTog6YGN5Y6G5Zy65pmv5omA5pyJ5a2Q6IqC54K55p+l5om+77yI5pyA5ZCO5omL5q6177yJXHJcbiAgICAgICAgaWYgKCFiYXR0bGVDb250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbmRDb21wb25lbnQgPSAobm9kZSwgY29tcG9uZW50TmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcCA9IG5vZGUuZ2V0Q29tcG9uZW50KGNvbXBvbmVudE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXApIHJldHVybiBjb21wO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZpbmRDb21wb25lbnQoY2hpbGQsIGNvbXBvbmVudE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgYmF0dGxlQ29udHJvbGxlciA9IGZpbmRDb21wb25lbnQoc2NlbmUsIFwiQmF0dGxlQ29udHJvbGxlclwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiYXR0bGVDb250cm9sbGVyICYmIGJhdHRsZUNvbnRyb2xsZXIuYmF0dGxlU3lzdGVtKSB7XHJcbiAgICAgICAgICAgIGJhdHRsZUNvbnRyb2xsZXIuYmF0dGxlU3lzdGVtLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIltVbHRpbWF0ZVNraWxsVUldIOKckyDmiJjmlpfns7vnu5/lt7LmmoLlgZxcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIltVbHRpbWF0ZVNraWxsVUldIOKaoO+4jyDmnKrmib7liLBCYXR0bGVDb250cm9sbGVy77yM5peg5rOV5pqC5YGc5oiY5paXXCIpO1xyXG4gICAgICAgICAgICBjYy53YXJuKFwiW1VsdGltYXRlU2tpbGxVSV0g6K+356Gu5L+dQmF0dGxlQ29udHJvbGxlcuiKgueCueWtmOWcqOS6juWcuuaZr+S4rVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5oGi5aSN5oiY5paX57O757ufXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfcmVzdW1lQmF0dGxlKCkge1xyXG4gICAgICAgIC8vIOafpeaJvkJhdHRsZUNvbnRyb2xsZXLvvIjkvb/nlKjlpJrnp43mlrnms5XvvIlcclxuICAgICAgICBjb25zdCBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICAgICAgaWYgKCFzY2VuZSkge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwiW1VsdGltYXRlU2tpbGxVSV0g5peg5rOV5om+5Yiw5Zy65pmvXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYmF0dGxlQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIOaWueazlTE6IOWcqENhbnZhc+iKgueCueS4iuafpeaJvkJhdHRsZUNvbnRyb2xsZXLnu4Tku7ZcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBzY2VuZS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKTtcclxuICAgICAgICBpZiAoY2FudmFzKSB7XHJcbiAgICAgICAgICAgIGJhdHRsZUNvbnRyb2xsZXIgPSBjYW52YXMuZ2V0Q29tcG9uZW50KFwiQmF0dGxlQ29udHJvbGxlclwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOaWueazlTI6IOWcqENhbnZhc+eahOWtkOiKgueCueS4reafpeaJvuWQjeS4ulwiQmF0dGxlQ29udHJvbGxlclwi55qE6IqC54K5XHJcbiAgICAgICAgaWYgKCFiYXR0bGVDb250cm9sbGVyICYmIGNhbnZhcykge1xyXG4gICAgICAgICAgICBjb25zdCBiYXR0bGVDb250cm9sbGVyTm9kZSA9IGNhbnZhcy5nZXRDaGlsZEJ5TmFtZShcIkJhdHRsZUNvbnRyb2xsZXJcIik7XHJcbiAgICAgICAgICAgIGlmIChiYXR0bGVDb250cm9sbGVyTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgYmF0dGxlQ29udHJvbGxlciA9IGJhdHRsZUNvbnRyb2xsZXJOb2RlLmdldENvbXBvbmVudChcIkJhdHRsZUNvbnRyb2xsZXJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOaWueazlTM6IOWcqOWcuuaZr+agueiKgueCueS4reafpeaJvuWQjeS4ulwiQmF0dGxlQ29udHJvbGxlclwi55qE6IqC54K577yI6YeN6KaB77yB77yJXHJcbiAgICAgICAgaWYgKCFiYXR0bGVDb250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhdHRsZUNvbnRyb2xsZXJOb2RlID0gc2NlbmUuZ2V0Q2hpbGRCeU5hbWUoXCJCYXR0bGVDb250cm9sbGVyXCIpO1xyXG4gICAgICAgICAgICBpZiAoYmF0dGxlQ29udHJvbGxlck5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGJhdHRsZUNvbnRyb2xsZXIgPSBiYXR0bGVDb250cm9sbGVyTm9kZS5nZXRDb21wb25lbnQoXCJCYXR0bGVDb250cm9sbGVyXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmlrnms5U0OiDkvb/nlKhnZXRDb21wb25lbnRJbkNoaWxkcmVu6YCS5b2S5p+l5om+77yI5LuO5Zy65pmv5qC56IqC54K577yJXHJcbiAgICAgICAgaWYgKCFiYXR0bGVDb250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgIGJhdHRsZUNvbnRyb2xsZXIgPSBzY2VuZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFwiQmF0dGxlQ29udHJvbGxlclwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOaWueazlTU6IOmBjeWOhuWcuuaZr+aJgOacieWtkOiKgueCueafpeaJvu+8iOacgOWQjuaJi+aute+8iVxyXG4gICAgICAgIGlmICghYmF0dGxlQ29udHJvbGxlcikge1xyXG4gICAgICAgICAgICBjb25zdCBmaW5kQ29tcG9uZW50ID0gKG5vZGUsIGNvbXBvbmVudE5hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXAgPSBub2RlLmdldENvbXBvbmVudChjb21wb25lbnROYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb21wKSByZXR1cm4gY29tcDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmaW5kQ29tcG9uZW50KGNoaWxkLCBjb21wb25lbnROYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGJhdHRsZUNvbnRyb2xsZXIgPSBmaW5kQ29tcG9uZW50KHNjZW5lLCBcIkJhdHRsZUNvbnRyb2xsZXJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmF0dGxlQ29udHJvbGxlciAmJiBiYXR0bGVDb250cm9sbGVyLmJhdHRsZVN5c3RlbSkge1xyXG4gICAgICAgICAgICBiYXR0bGVDb250cm9sbGVyLmJhdHRsZVN5c3RlbS5yZXN1bWUoKTtcclxuICAgICAgICAgICAgY2MubG9nKFwiW1VsdGltYXRlU2tpbGxVSV0g4pyTIOaImOaWl+ezu+e7n+W3suaBouWkjVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwiW1VsdGltYXRlU2tpbGxVSV0g4pqg77iPIOacquaJvuWIsEJhdHRsZUNvbnRyb2xsZXLvvIzml6Dms5XmgaLlpI3miJjmlpdcIik7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCJbVWx0aW1hdGVTa2lsbFVJXSDor7fnoa7kv51CYXR0bGVDb250cm9sbGVy6IqC54K55a2Y5Zyo5LqO5Zy65pmv5LitXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpITnkIbpmJ/liJfkuK3nmoTkuIvkuIDkuKrlpKfmi5tcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9wcm9jZXNzTmV4dFVsdGltYXRlKCkge1xyXG4gICAgICAgIC8vIOWmguaenOmYn+WIl+S4uuepuu+8jOaBouWkjeaImOaWl+ezu+e7n+W5tumHjee9rueKtuaAgVxyXG4gICAgICAgIGlmICh0aGlzLl91bHRpbWF0ZVF1ZXVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8g5rOo5oSP77ya6L+Z6YeM5LiN5oGi5aSN5oiY5paX57O757uf77yM5Zug5Li65pyA5ZCO5LiA5Liq5Yqo55S755qE5Zue6LCD5Lit5bey57uP5oGi5aSN5LqGXHJcbiAgICAgICAgICAgIGNjLmxvZyhcIltVbHRpbWF0ZVNraWxsVUldIOWkp+aLm+mYn+WIl+W3sua4heepulwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5LuO6Zif5YiX5Lit5Y+W5Ye65LiL5LiA5Liq5aSn5oubXHJcbiAgICAgICAgY29uc3QgbmV4dFVsdGltYXRlID0gdGhpcy5fdWx0aW1hdGVRdWV1ZS5zaGlmdCgpO1xyXG4gICAgICAgIGNjLmxvZyhgW1VsdGltYXRlU2tpbGxVSV0g5pKt5pS+6Zif5YiX5Lit55qE5LiL5LiA5Liq5aSn5oubOiAke25leHRVbHRpbWF0ZS5jYXN0ZXIubmFtZX0g55qEICR7bmV4dFVsdGltYXRlLnNraWxsTmFtZX1gKTtcclxuXHJcbiAgICAgICAgLy8g5bu26L+f5LiA5bCP5q615pe26Ze077yI6K6p5LiK5LiA5Liq5Yqo55S75a6M5YWo57uT5p2f77yJ77yM54S25ZCO5pKt5pS+5LiL5LiA5LiqXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyDph43mlrDosIPnlKggc2hvd1VsdGltYXRlU2tpbGzvvIjmraTml7YgX2lzUGxheWluZyDkuLogZmFsc2XvvIzkvJrnm7TmjqXmkq3mlL7vvIlcclxuICAgICAgICAgICAgdGhpcy5faXNQbGF5aW5nID0gZmFsc2U7IC8vIOWFiOmHjee9ru+8jOiuqSBzaG93VWx0aW1hdGVTa2lsbCDlj6/ku6XmraPluLjlpITnkIZcclxuICAgICAgICAgICAgdGhpcy5zaG93VWx0aW1hdGVTa2lsbChcclxuICAgICAgICAgICAgICAgIG5leHRVbHRpbWF0ZS5jYXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBuZXh0VWx0aW1hdGUuc2tpbGxOYW1lLFxyXG4gICAgICAgICAgICAgICAgbmV4dFVsdGltYXRlLmF2YXRhclNwcml0ZUZyYW1lLFxyXG4gICAgICAgICAgICAgICAgbmV4dFVsdGltYXRlLm9uQ29tcGxldGVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LCAwLjEpOyAvLyDlu7bov58wLjHnp5LvvIznoa7kv53kuIrkuIDkuKrliqjnlLvlrozlhajnu5PmnZ9cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnq4vljbPpmpDol49VSe+8iOeUqOS6jue0p+aApeaDheWGte+8iVxyXG4gICAgICovXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1hc2tOb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFza05vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubWFza05vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRvcENvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLnRvcENvbnRhaW5lci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOa4heepuumYn+WIl+W5tumHjee9rueKtuaAgVxyXG4gICAgICAgIHRoaXMuX3VsdGltYXRlUXVldWUgPSBbXTtcclxuICAgICAgICB0aGlzLl9pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==