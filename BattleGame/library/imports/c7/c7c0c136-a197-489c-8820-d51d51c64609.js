"use strict";
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