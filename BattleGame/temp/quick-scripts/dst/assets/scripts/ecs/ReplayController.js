
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ecs/ReplayController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e832cjFgtpO9rdBaBbPOFwx', 'ReplayController');
// Scripts/ecs/ReplayController.js

"use strict";

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * 战斗回放控制器组件
 * 提供回放控制UI和功能
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // 回放控制面板
    replayPanel: {
      "default": null,
      type: cc.Node,
      tooltip: "回放控制面板节点"
    },
    // 播放/暂停按钮
    playPauseButton: {
      "default": null,
      type: cc.Button,
      tooltip: "播放/暂停按钮"
    },
    // 停止按钮
    stopButton: {
      "default": null,
      type: cc.Button,
      tooltip: "停止按钮"
    },
    // 速度控制滑块（可选）
    speedSlider: {
      "default": null,
      type: cc.Slider,
      tooltip: "回放速度控制滑块（0.5x - 4.0x）"
    },
    // 速度显示标签（可选）
    speedLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "显示当前回放速度的标签（如：1.0x）"
    },
    // 进度条（可选）
    progressBar: {
      "default": null,
      type: cc.ProgressBar,
      tooltip: "回放进度条"
    },
    // 当前时间显示标签（可选）
    timeLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "显示当前回放时间的标签"
    },
    // 游戏结束场景名称（停止回放时跳转）
    gameOverSceneName: {
      "default": "GameOverScene",
      tooltip: "停止回放时跳转到的游戏结束场景名称"
    }
  },
  onLoad: function onLoad() {
    // 绑定按钮事件
    if (this.playPauseButton) {
      this.playPauseButton.node.on(cc.Node.EventType.TOUCH_END, this.onPlayPauseClick, this);
    }
    if (this.stopButton) {
      this.stopButton.node.on(cc.Node.EventType.TOUCH_END, this.onStopClick, this);
    }
    if (this.speedSlider) {
      this.speedSlider.node.on('slide', this.onSpeedChange, this);
      // 初始化滑块值为1.0x（正常速度）
      // progress范围是0-1，对应速度0.5x-4.0x
      // 1.0x对应的progress = (1.0 - 0.5) / (4.0 - 0.5) = 0.5 / 3.5 ≈ 0.143
      this.speedSlider.progress = (1.0 - 0.5) / (4.0 - 0.5);
      this._updateSpeedLabel(1.0); // 更新速度显示
      // 初始隐藏速度控制滑块（只在回放时显示）
      this.speedSlider.node.active = false;
    }

    // 初始隐藏速度显示标签（如果存在）
    if (this.speedLabel) {
      this.speedLabel.node.active = false;
    }

    // 初始隐藏面板
    if (this.replayPanel) {
      this.replayPanel.active = false;
    }

    // 回放器引用
    this.replayer = null;
    this.battleRecord = null;
    this.battleSystem = null; // BattleSystem引用（用于暂停/恢复）
    this.battleController = null; // BattleController引用（用于设置回放标志）

    // 保存回放数据，用于重新播放
    this.savedHeros = null;
    this.savedMonsters = null;
    this.savedRecordKey = null; // 保存记录键，用于重新加载
    this.isReplayCompleted = false; // 回放是否已完成
  },
  /**
   * 开始回放
   * @param {Object} battleRecord - 战斗记录数据
   * @param {Array} heros - 英雄列表（可选，如果为空则从BattleController获取）
   * @param {Array} monsters - 怪物列表（可选，如果为空则从BattleController获取）
   */
  startReplay: function startReplay(battleRecord, heros, monsters) {
    var _this = this;
    cc.log("[ReplayController] ===== \u5F00\u59CB\u56DE\u653E =====");
    cc.log("[ReplayController] battleRecord: " + (battleRecord ? '存在' : '不存在'));
    cc.log("[ReplayController] replayPanel: " + (this.replayPanel ? this.replayPanel.name : '未绑定'));
    if (!battleRecord) {
      cc.error("[ReplayController] 无效的战斗记录");
      return;
    }
    this.battleRecord = battleRecord;

    // 如果传入的单位列表为空或无效，从BattleController获取当前场景的单位列表
    if (!heros || heros.length === 0 || !monsters || monsters.length === 0) {
      cc.log("[ReplayController] \u4F20\u5165\u7684\u5355\u4F4D\u5217\u8868\u4E3A\u7A7A\uFF0C\u5C1D\u8BD5\u4ECEBattleController\u83B7\u53D6\u5F53\u524D\u573A\u666F\u7684\u5355\u4F4D");
      var currentUnits = this._getCurrentSceneUnits();
      cc.log("[ReplayController] _getCurrentSceneUnits\u8FD4\u56DE: \u82F1\u96C4" + (currentUnits.heros ? currentUnits.heros.length : 0) + "\u4E2A, \u602A\u7269" + (currentUnits.monsters ? currentUnits.monsters.length : 0) + "\u4E2A");
      if (currentUnits.heros && currentUnits.heros.length > 0) {
        heros = currentUnits.heros;
        cc.log("[ReplayController] \u2713 \u4ECEBattleController\u83B7\u53D6\u5230 " + heros.length + " \u4E2A\u82F1\u96C4");
      } else {
        cc.warn("[ReplayController] \u26A0\uFE0F \u4ECEBattleController\u83B7\u53D6\u7684\u82F1\u96C4\u5217\u8868\u4E3A\u7A7A");
      }
      if (currentUnits.monsters && currentUnits.monsters.length > 0) {
        monsters = currentUnits.monsters;
        cc.log("[ReplayController] \u2713 \u4ECEBattleController\u83B7\u53D6\u5230 " + monsters.length + " \u4E2A\u602A\u7269");
      } else {
        cc.warn("[ReplayController] \u26A0\uFE0F \u4ECEBattleController\u83B7\u53D6\u7684\u602A\u7269\u5217\u8868\u4E3A\u7A7A");
      }

      // 如果仍然为空，尝试延迟获取（可能单位还在创建中）
      if ((!heros || heros.length === 0) && (!monsters || monsters.length === 0)) {
        cc.warn("[ReplayController] \u26A0\uFE0F \u5355\u4F4D\u5217\u8868\u4ECD\u4E3A\u7A7A\uFF0C\u5EF6\u8FDF200ms\u540E\u91CD\u8BD5");
        this.scheduleOnce(function () {
          var retryUnits = _this._getCurrentSceneUnits();
          cc.log("[ReplayController] \u5EF6\u8FDF\u83B7\u53D6\u7ED3\u679C: \u82F1\u96C4" + (retryUnits.heros ? retryUnits.heros.length : 0) + "\u4E2A, \u602A\u7269" + (retryUnits.monsters ? retryUnits.monsters.length : 0) + "\u4E2A");
          var retryHeros = retryUnits.heros || [];
          var retryMonsters = retryUnits.monsters || [];
          if (retryHeros.length > 0) {
            cc.log("[ReplayController] \u2713 \u5EF6\u8FDF\u83B7\u53D6\u6210\u529F: " + retryHeros.length + " \u4E2A\u82F1\u96C4");
          }
          if (retryMonsters.length > 0) {
            cc.log("[ReplayController] \u2713 \u5EF6\u8FDF\u83B7\u53D6\u6210\u529F: " + retryMonsters.length + " \u4E2A\u602A\u7269");
          }

          // 如果延迟后获取到单位，重新开始回放
          if (retryHeros.length > 0 || retryMonsters.length > 0) {
            cc.log("[ReplayController] \u5EF6\u8FDF\u83B7\u53D6\u5230\u5355\u4F4D\uFF0C\u91CD\u65B0\u5F00\u59CB\u56DE\u653E");
            _this.startReplay(_this.battleRecord, retryHeros, retryMonsters);
          } else {
            cc.error("[ReplayController] \u2717 \u5EF6\u8FDF\u83B7\u53D6\u540E\u5355\u4F4D\u5217\u8868\u4ECD\u4E3A\u7A7A\uFF0C\u56DE\u653E\u65E0\u6CD5\u7EE7\u7EED");
            cc.error("[ReplayController] \u8BF7\u786E\u4FDDBattleController\u5DF2\u6B63\u786E\u521D\u59CB\u5316\uFF0C\u4E14\u5355\u4F4D\u5DF2\u521B\u5EFA");
          }
        }, 0.2);

        // 如果延迟获取，先不继续执行，等待延迟回调
        return;
      }
    }

    // 验证单位列表
    if (!heros || heros.length === 0) {
      cc.warn("[ReplayController] \u26A0\uFE0F \u82F1\u96C4\u5217\u8868\u4E3A\u7A7A\uFF0C\u56DE\u653E\u53EF\u80FD\u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C");
    }
    if (!monsters || monsters.length === 0) {
      cc.warn("[ReplayController] \u26A0\uFE0F \u602A\u7269\u5217\u8868\u4E3A\u7A7A\uFF0C\u56DE\u653E\u53EF\u80FD\u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C");
    }

    // 保存单位列表，用于重新播放（创建副本，避免引用被修改）
    this.savedHeros = heros ? [].concat(heros) : []; // 创建数组副本
    this.savedMonsters = monsters ? [].concat(monsters) : []; // 创建数组副本
    this.isReplayCompleted = false; // 重置完成标志

    cc.log("[ReplayController] \u4F7F\u7528\u5355\u4F4D\u5217\u8868 - \u82F1\u96C4: " + this.savedHeros.length + "\u4E2A, \u602A\u7269: " + this.savedMonsters.length + "\u4E2A");

    // 创建回放器
    var BattleReplayer = require("BattleReplayer");
    this.replayer = new BattleReplayer();

    // 显示回放控制面板
    if (this.replayPanel) {
      // 确保父节点也是激活的（向上遍历所有父节点）
      var parent = this.replayPanel.parent;
      while (parent) {
        if (!parent.active) {
          cc.log("[ReplayController] \u6FC0\u6D3B\u7236\u8282\u70B9: " + parent.name);
          parent.active = true;
        }
        parent = parent.parent;
      }

      // 设置节点可见
      this.replayPanel.active = true;
      this.replayPanel.opacity = 255;

      // 确保所有子节点也是可见的
      var ensureChildrenVisible = function ensureChildrenVisible(node) {
        if (!node.active) {
          node.active = true;
        }
        if (node.opacity === 0) {
          node.opacity = 255;
        }
        for (var _iterator = _createForOfIteratorHelperLoose(node.children), _step; !(_step = _iterator()).done;) {
          var child = _step.value;
          ensureChildrenVisible(child);
        }
      };
      ensureChildrenVisible(this.replayPanel);
      cc.log("[ReplayController] \u2713 \u56DE\u653E\u63A7\u5236\u9762\u677F\u5DF2\u663E\u793A");
      cc.log("[ReplayController]   \u8282\u70B9\u540D\u79F0: " + this.replayPanel.name);
      cc.log("[ReplayController]   active: " + this.replayPanel.active);
      cc.log("[ReplayController]   opacity: " + this.replayPanel.opacity);
      cc.log("[ReplayController]   \u7236\u8282\u70B9: " + (this.replayPanel.parent ? this.replayPanel.parent.name : '无'));
    } else {
      cc.error("[ReplayController] ⚠️ 未绑定replayPanel节点，回放控制面板不会显示");
      cc.error("[ReplayController] 请在ReplayController组件中绑定replayPanel节点");
      cc.error("[ReplayController] 步骤：");
      cc.error("[ReplayController]   1. 在BattleScene中创建回放控制面板节点");
      cc.error("[ReplayController]   2. 在ReplayController组件中，将replayPanel属性绑定到该节点");
    }

    // 显示速度控制滑块（只在回放时显示）
    if (this.speedSlider) {
      if (this.speedSlider.node.parent) {
        this.speedSlider.node.parent.active = true;
      }
      this.speedSlider.node.active = true;
      this.speedSlider.node.opacity = 255;
      cc.log("[ReplayController] \u901F\u5EA6\u63A7\u5236\u6ED1\u5757\u5DF2\u663E\u793A");
    }

    // 显示速度显示标签（如果存在）
    if (this.speedLabel) {
      if (this.speedLabel.node.parent) {
        this.speedLabel.node.parent.active = true;
      }
      this.speedLabel.node.active = true;
      this.speedLabel.node.opacity = 255;
    }

    // 显示播放/暂停按钮（如果存在）
    if (this.playPauseButton) {
      if (this.playPauseButton.node.parent) {
        this.playPauseButton.node.parent.active = true;
      }
      this.playPauseButton.node.active = true;
      this.playPauseButton.node.opacity = 255;
    }

    // 显示停止按钮（如果存在）
    if (this.stopButton) {
      if (this.stopButton.node.parent) {
        this.stopButton.node.parent.active = true;
      }
      this.stopButton.node.active = true;
      this.stopButton.node.opacity = 255;
    }

    // 开始回放
    this.replayer.startReplay(battleRecord, heros, monsters, function () {
      // 回放完成回调
      _this.onReplayComplete();
    });

    // 更新UI
    this._updatePlayPauseButton(true);

    // 初始化速度控制（如果存在）
    if (this.speedSlider && this.replayer) {
      // 设置默认速度为1.0x（正常速度）
      var defaultSpeed = 1.0;
      this.replayer.setPlaybackSpeed(defaultSpeed);
      // 更新滑块位置
      this.speedSlider.progress = (defaultSpeed - 0.5) / (4.0 - 0.5);
      this._updateSpeedLabel(defaultSpeed);
    }

    // 暂停BattleSystem（如果存在）
    this._pauseBattleSystem();
    cc.log("[ReplayController] \u56DE\u653E\u5DF2\u542F\u52A8");
  },
  /**
   * 播放/暂停按钮点击
   */
  onPlayPauseClick: function onPlayPauseClick() {
    // 如果回放已完成，点击播放时重新开始回放（像从GameOverScene点击回放那样）
    if (this.isReplayCompleted) {
      cc.log("[ReplayController] 回放已完成，重新开始回放");

      // 优先使用保存的记录键重新加载（如果存在）
      if (this.savedRecordKey) {
        // 重新获取当前场景的单位列表
        var scene = cc.director.getScene();
        var heros = [];
        var monsters = [];

        // 查找BattleController获取单位列表
        if (scene) {
          var canvas = scene.getChildByName("Canvas");
          if (canvas) {
            var battleController = canvas.getComponent("BattleController");
            if (!battleController) {
              // 尝试在子节点中查找
              var battleControllerNode = canvas.getChildByName("BattleController");
              if (battleControllerNode) {
                var bc = battleControllerNode.getComponent("BattleController");
                if (bc) {
                  heros = bc.heros || [];
                  monsters = bc.monsters || [];
                }
              }
            } else {
              heros = battleController.heros || [];
              monsters = battleController.monsters || [];
            }
          }
        }

        // 如果找不到单位列表，使用保存的列表
        if (heros.length === 0 && monsters.length === 0 && this.savedHeros && this.savedMonsters) {
          heros = this.savedHeros;
          monsters = this.savedMonsters;
        }

        // 使用loadAndReplay重新加载并回放（像从GameOverScene点击回放那样）
        this.loadAndReplay(this.savedRecordKey, heros, monsters);
      } else if (this.battleRecord && this.savedHeros && this.savedMonsters) {
        // 如果没有保存记录键，使用保存的记录数据
        this.startReplay(this.battleRecord, this.savedHeros, this.savedMonsters);
      } else {
        cc.error("[ReplayController] 无法重新播放：缺少回放数据");
      }
      return;
    }

    // 如果没有回放器，无法操作
    if (!this.replayer) {
      cc.warn("[ReplayController] 回放器不存在，无法播放/暂停");
      return;
    }
    var wasPaused = this.replayer.isPaused;
    this.replayer.togglePause();
    var isNowPaused = this.replayer.isPaused;
    if (isNowPaused) {
      // 暂停时：完全冻结画面
      // 1. 停止所有动画（包括 tween 和 Spine 动画）
      this._pauseAllAnimations();
      // 2. 确保战斗逻辑不执行（通过 isReplaying 标志）
      this._pauseBattleSystem(); // 确保 isReplaying = true，阻止战斗逻辑执行
      // 3. 回放事件已通过 BattleReplayer.togglePause() 停止
      cc.log("[ReplayController] 已暂停回放，画面已冻结，战斗逻辑已禁用");
    } else {
      // 继续时：恢复动画播放速度
      // 注意：不恢复战斗逻辑，因为还在回放模式
      this._resumeAllAnimations();
      cc.log("[ReplayController] 已继续回放");
    }
    this._updatePlayPauseButton(!isNowPaused);
  },
  /**
   * 停止按钮点击
   */
  onStopClick: function onStopClick() {
    var _this2 = this;
    if (this.replayer) {
      this.replayer.stopReplay();
      this.replayer = null;
    }

    // 停止所有动画
    this._stopAllAnimations();

    // 隐藏回放控制面板
    if (this.replayPanel) {
      this.replayPanel.active = false;
    }

    // 隐藏速度控制滑块
    if (this.speedSlider) {
      this.speedSlider.node.active = false;
      cc.log("[ReplayController] \u901F\u5EA6\u63A7\u5236\u6ED1\u5757\u5DF2\u9690\u85CF");
    }

    // 隐藏速度显示标签（如果存在）
    if (this.speedLabel) {
      this.speedLabel.node.active = false;
    }

    // 恢复BattleSystem（如果存在）
    this._resumeBattleSystem();
    cc.log("[ReplayController] 停止回放");

    // 跳转到游戏结束场景
    if (this.gameOverSceneName) {
      cc.log("[ReplayController] \u51C6\u5907\u8DF3\u8F6C\u5230\u6E38\u620F\u7ED3\u675F\u573A\u666F: " + this.gameOverSceneName);
      cc.director.loadScene(this.gameOverSceneName, function (error) {
        if (error) {
          cc.error("[ReplayController] \u52A0\u8F7D\u6E38\u620F\u7ED3\u675F\u573A\u666F\u5931\u8D25: " + error);
          cc.error("[ReplayController] \u8BF7\u68C0\u67E5\u573A\u666F\u540D\u79F0\u662F\u5426\u6B63\u786E: " + _this2.gameOverSceneName);
        } else {
          cc.log("[ReplayController] \u6210\u529F\u8DF3\u8F6C\u5230\u6E38\u620F\u7ED3\u675F\u573A\u666F: " + _this2.gameOverSceneName);
        }
      });
    } else {
      cc.warn("[ReplayController] 未设置gameOverSceneName，不会跳转场景");
    }
  },
  /**
   * 速度改变
   */
  onSpeedChange: function onSpeedChange() {
    if (!this.replayer || !this.speedSlider) return;

    // 速度范围：0.5x - 4.0x
    // progress范围：0 - 1
    // speed = 0.5 + progress * (4.0 - 0.5) = 0.5 + progress * 3.5
    var speed = 0.5 + this.speedSlider.progress * 3.5;
    this.replayer.setPlaybackSpeed(speed);
    this._updateSpeedLabel(speed);
    cc.log("[ReplayController] \u56DE\u653E\u901F\u5EA6\u5DF2\u8BBE\u7F6E\u4E3A: " + speed.toFixed(1) + "x");
  },
  /**
   * 更新速度显示标签
   * @private
   */
  _updateSpeedLabel: function _updateSpeedLabel(speed) {
    if (this.speedLabel) {
      this.speedLabel.string = speed.toFixed(1) + "x";
    }
  },
  /**
   * 回放完成
   */
  onReplayComplete: function onReplayComplete() {
    cc.log("[ReplayController] 回放完成");
    this.isReplayCompleted = true; // 标记回放已完成
    this._updatePlayPauseButton(false); // 更新按钮为"播放"状态
    cc.log("[ReplayController] 回放已完成，点击播放按钮可重新播放");
  },
  /**
   * 更新播放/暂停按钮状态
   * @private
   */
  _updatePlayPauseButton: function _updatePlayPauseButton(isPlaying) {
    if (this.playPauseButton) {
      var label = this.playPauseButton.node.getComponentInChildren(cc.Label);
      if (label) {
        label.string = isPlaying ? "暂停" : "播放";
      }
    }
  },
  /**
   * 从本地存储加载并回放
   * @param {string} key - 存储键名
   * @param {Array} heros - 英雄列表
   * @param {Array} monsters - 怪物列表
   */
  loadAndReplay: function loadAndReplay(key, heros, monsters) {
    cc.log("[ReplayController] ===== \u5F00\u59CB\u52A0\u8F7D\u5E76\u56DE\u653E\u6218\u6597\u8BB0\u5F55 =====");
    cc.log("[ReplayController] \u8BB0\u5F55\u952E\u540D: " + key);
    cc.log("[ReplayController] \u82F1\u96C4\u6570\u91CF: " + (heros ? heros.length : 0));
    cc.log("[ReplayController] \u602A\u7269\u6570\u91CF: " + (monsters ? monsters.length : 0));
    cc.log("[ReplayController] replayPanel\u7ED1\u5B9A\u72B6\u6001: " + (this.replayPanel ? '已绑定' : '未绑定'));

    // 详细检查UI节点状态
    if (this.replayPanel) {
      cc.log("[ReplayController] replayPanel\u8282\u70B9\u4FE1\u606F:");
      cc.log("[ReplayController]   \u8282\u70B9\u540D\u79F0: " + this.replayPanel.name);
      cc.log("[ReplayController]   \u5F53\u524Dactive: " + this.replayPanel.active);
      cc.log("[ReplayController]   \u5F53\u524Dopacity: " + this.replayPanel.opacity);
      cc.log("[ReplayController]   \u7236\u8282\u70B9: " + (this.replayPanel.parent ? this.replayPanel.parent.name : '无'));
      if (this.replayPanel.parent) {
        cc.log("[ReplayController]   \u7236\u8282\u70B9active: " + this.replayPanel.parent.active);
      }
    } else {
      cc.error("[ReplayController] \u26A0\uFE0F replayPanel\u672A\u7ED1\u5B9A\uFF01");
      cc.error("[ReplayController] \u8BF7\u5728ReplayController\u7EC4\u4EF6\u4E2D\u7ED1\u5B9AreplayPanel\u8282\u70B9");
    }
    if (!key) {
      cc.error("[ReplayController] \u8BB0\u5F55\u952E\u540D\u4E3A\u7A7A\uFF01");
      return;
    }

    // 保存记录键，用于重新播放
    this.savedRecordKey = key;
    var BattleRecorder = require("BattleRecorder");
    var recorder = new BattleRecorder();
    var record = recorder.loadFromLocalStorage(key);
    if (record) {
      cc.log("[ReplayController] \u6210\u529F\u52A0\u8F7D\u6218\u6597\u8BB0\u5F55\uFF0C\u4E8B\u4EF6\u6570\u91CF: " + (record.events ? record.events.length : 0));
      // 确保在开始回放前UI已准备好
      this.startReplay(record, heros, monsters);
    } else {
      cc.error("[ReplayController] \u65E0\u6CD5\u52A0\u8F7D\u6218\u6597\u8BB0\u5F55: " + key);
      cc.error("[ReplayController] \u8BF7\u68C0\u67E5\u8BB0\u5F55\u952E\u540D\u662F\u5426\u6B63\u786E\uFF0C\u6216\u6218\u6597\u8BB0\u5F55\u662F\u5426\u5DF2\u4FDD\u5B58");
    }
  },
  /**
   * 获取当前场景的单位列表
   * @private
   * @returns {Object} 包含heros和monsters的对象
   */
  _getCurrentSceneUnits: function _getCurrentSceneUnits() {
    var scene = cc.director.getScene();
    if (!scene) {
      cc.warn("[ReplayController] 未找到场景");
      return {
        heros: [],
        monsters: []
      };
    }
    var battleController = null;

    // 方法1: 如果已经保存了 battleController，直接使用
    if (this.battleController && this.battleController.isValid) {
      battleController = this.battleController;
    } else {
      // 方法2: 在 Canvas 的子节点中查找
      var canvas = scene.getChildByName("Canvas");
      if (canvas) {
        // 先尝试在 Canvas 节点本身查找组件
        battleController = canvas.getComponent("BattleController");

        // 如果没找到，尝试在 Canvas 的子节点中查找名为 "BattleController" 的节点
        if (!battleController) {
          var battleControllerNode = canvas.getChildByName("BattleController");
          if (battleControllerNode) {
            battleController = battleControllerNode.getComponent("BattleController");
          }
        }
      }

      // 方法3: 如果还没找到，在场景根节点中查找
      if (!battleController) {
        var _battleControllerNode = scene.getChildByName("BattleController");
        if (_battleControllerNode) {
          battleController = _battleControllerNode.getComponent("BattleController");
        }
      }

      // 方法4: 遍历场景所有节点查找（最后手段）
      if (!battleController) {
        var findBattleController = function findBattleController(node) {
          var comp = node.getComponent("BattleController");
          if (comp) return comp;
          for (var _iterator2 = _createForOfIteratorHelperLoose(node.children), _step2; !(_step2 = _iterator2()).done;) {
            var child = _step2.value;
            var result = findBattleController(child);
            if (result) return result;
          }
          return null;
        };
        battleController = findBattleController(scene);
      }

      // 保存引用供后续使用
      if (battleController) {
        this.battleController = battleController;
      }
    }
    if (battleController) {
      // 优先从BattleController.heros/monsters数组获取
      var heros = battleController.heros || [];
      var monsters = battleController.monsters || [];
      cc.log("[ReplayController] \u627E\u5230BattleController\uFF0C\u6570\u7EC4\u4E2D\u7684\u5355\u4F4D: \u82F1\u96C4" + heros.length + "\u4E2A, \u602A\u7269" + monsters.length + "\u4E2A");

      // 如果数组为空，尝试从场景节点中直接获取（从heroParent和monsterParent的子节点）
      if (heros.length === 0 && battleController.heroParent) {
        cc.log("[ReplayController] \u82F1\u96C4\u6570\u7EC4\u4E3A\u7A7A\uFF0C\u5C1D\u8BD5\u4ECEheroParent\u5B50\u8282\u70B9\u83B7\u53D6");
        var heroParent = battleController.heroParent;
        if (heroParent && heroParent.isValid) {
          heros = heroParent.children.filter(function (child) {
            // 只获取有效的、有StatsComponent的节点
            return child && child.isValid && child.getComponent("StatsComponent");
          });
          cc.log("[ReplayController] \u4ECEheroParent\u83B7\u53D6\u5230 " + heros.length + " \u4E2A\u82F1\u96C4\u8282\u70B9");
          if (heros.length > 0) {
            var heroNames = heros.map(function (h) {
              return h ? h.name : 'null';
            }).join(', ');
            cc.log("[ReplayController] \u82F1\u96C4\u8282\u70B9\u5217\u8868: [" + heroNames + "]");
          }
        }
      }
      if (monsters.length === 0 && battleController.monsterParent) {
        cc.log("[ReplayController] \u602A\u7269\u6570\u7EC4\u4E3A\u7A7A\uFF0C\u5C1D\u8BD5\u4ECEmonsterParent\u5B50\u8282\u70B9\u83B7\u53D6");
        var monsterParent = battleController.monsterParent;
        if (monsterParent && monsterParent.isValid) {
          monsters = monsterParent.children.filter(function (child) {
            // 只获取有效的、有StatsComponent的节点
            return child && child.isValid && child.getComponent("StatsComponent");
          });
          cc.log("[ReplayController] \u4ECEmonsterParent\u83B7\u53D6\u5230 " + monsters.length + " \u4E2A\u602A\u7269\u8282\u70B9");
          if (monsters.length > 0) {
            var monsterNames = monsters.map(function (m) {
              return m ? m.name : 'null';
            }).join(', ');
            cc.log("[ReplayController] \u602A\u7269\u8282\u70B9\u5217\u8868: [" + monsterNames + "]");
          }
        }
      }

      // 详细日志：列出所有单位名称
      if (heros.length > 0) {
        var _heroNames = heros.map(function (h) {
          return h ? h.name : 'null';
        }).join(', ');
        cc.log("[ReplayController] \u6700\u7EC8\u82F1\u96C4\u5217\u8868: [" + _heroNames + "]");
      }
      if (monsters.length > 0) {
        var _monsterNames = monsters.map(function (m) {
          return m ? m.name : 'null';
        }).join(', ');
        cc.log("[ReplayController] \u6700\u7EC8\u602A\u7269\u5217\u8868: [" + _monsterNames + "]");
      }
      return {
        heros: heros,
        monsters: monsters
      };
    }
    cc.warn("[ReplayController] ✗ 未找到BattleController，无法获取单位列表");
    cc.warn("[ReplayController] 可能的原因：");
    cc.warn("[ReplayController]   1. BattleController组件未正确挂载");
    cc.warn("[ReplayController]   2. 场景还未完全加载");
    cc.warn("[ReplayController]   3. BattleController节点名称不正确");
    return {
      heros: [],
      monsters: []
    };
  },
  /**
   * 暂停BattleSystem（回放时禁用正常战斗逻辑）
   * @private
   */
  _pauseBattleSystem: function _pauseBattleSystem() {
    // 如果已经保存了 battleController，直接使用
    if (this.battleController && this.battleController.isValid) {
      this.battleController.isReplaying = true; // 设置回放标志
      if (this.battleSystem) {
        this.battleSystem.finished = true; // 双重保险
      }

      cc.log("[ReplayController] 已设置回放模式，BattleSystem已禁用");
      return;
    }

    // 否则重新查找BattleController
    // BattleController 可能是：
    // 1. Canvas 的子节点（节点名为 "BattleController"）
    // 2. 直接挂载在 Canvas 上的组件
    // 3. 场景根节点的子节点
    var scene = cc.director.getScene();
    if (!scene) {
      cc.warn("[ReplayController] 未找到场景，无法禁用战斗逻辑");
      return;
    }
    var battleController = null;

    // 方法1: 在 Canvas 的子节点中查找
    var canvas = scene.getChildByName("Canvas");
    if (canvas) {
      // 先尝试在 Canvas 节点本身查找组件
      battleController = canvas.getComponent("BattleController");

      // 如果没找到，尝试在 Canvas 的子节点中查找名为 "BattleController" 的节点
      if (!battleController) {
        var battleControllerNode = canvas.getChildByName("BattleController");
        if (battleControllerNode) {
          battleController = battleControllerNode.getComponent("BattleController");
        }
      }
    }

    // 方法2: 如果还没找到，在场景根节点中查找
    if (!battleController) {
      var _battleControllerNode2 = scene.getChildByName("BattleController");
      if (_battleControllerNode2) {
        battleController = _battleControllerNode2.getComponent("BattleController");
      }
    }

    // 方法3: 遍历场景所有节点查找（最后手段）
    if (!battleController) {
      var findBattleController = function findBattleController(node) {
        var comp = node.getComponent("BattleController");
        if (comp) return comp;
        for (var _iterator3 = _createForOfIteratorHelperLoose(node.children), _step3; !(_step3 = _iterator3()).done;) {
          var child = _step3.value;
          var result = findBattleController(child);
          if (result) return result;
        }
        return null;
      };
      battleController = findBattleController(scene);
    }
    if (battleController) {
      this.battleController = battleController;
      this.battleSystem = battleController.battleSystem;

      // 标记为回放模式，禁用正常更新
      battleController.isReplaying = true; // 设置回放标志
      cc.log("[ReplayController] 已找到并设置回放模式，BattleSystem已禁用");

      // 同时标记BattleSystem为结束状态（双重保险）
      if (this.battleSystem) {
        this.battleSystem.finished = true;
      }
    } else {
      cc.warn("[ReplayController] 未找到BattleController，无法禁用战斗逻辑");
      cc.warn("[ReplayController] 请确保BattleController组件已正确挂载在场景中");
    }
  },
  /**
   * 恢复BattleSystem（回放结束后恢复）
   * @private
   */
  _resumeBattleSystem: function _resumeBattleSystem() {
    if (this.battleController) {
      // 清除回放标志
      this.battleController.isReplaying = false;
      cc.log("[ReplayController] 已清除回放模式");
    }

    // 停止所有动画
    this._stopAllAnimations();

    // 注意：不恢复BattleSystem的finished状态，因为战斗已经结束
    // 如果需要重新开始战斗，应该重新加载场景
  },
  /**
   * 暂停所有正在进行的动画（回放暂停时调用）
   * 完全冻结画面：停止所有 tween 动画、Spine 动画，确保画面静止
   * @private
   */
  _pauseAllAnimations: function _pauseAllAnimations() {
    if (!this.battleController) return;
    var heros = this.battleController.heros || [];
    var monsters = this.battleController.monsters || [];
    var allUnits = [].concat(heros, monsters);
    var stoppedCount = 0;
    var pausedSpineCount = 0;
    allUnits.forEach(function (unit) {
      if (unit && unit.isValid) {
        // 1. 停止所有 tween 动画（移动、缩放、旋转等）
        cc.Tween.stopAllByTarget(unit);

        // 2. 停止 AttackMover 的动画
        var attackMover = unit.getComponent("AttackMover");
        if (attackMover) {
          if (attackMover.isAttacking) {
            attackMover.isAttacking = false;
            stoppedCount++;
          }
        }

        // 3. 暂停 Spine 动画（通过设置 timeScale = 0）
        var skeleton = unit.getComponent(sp.Skeleton);
        if (skeleton) {
          // 保存原始 timeScale（如果还没有保存）
          if (skeleton._originalTimeScale === undefined) {
            skeleton._originalTimeScale = skeleton.timeScale || 1.0;
          }
          // 暂停动画（timeScale = 0 时动画完全停止）
          skeleton.timeScale = 0;
          pausedSpineCount++;
        }

        // 4. 停止所有节点上的 tween（包括子节点）
        var stopTweenOnNode = function stopTweenOnNode(node) {
          cc.Tween.stopAllByTarget(node);
          node.children.forEach(function (child) {
            stopTweenOnNode(child);
          });
        };
        stopTweenOnNode(unit);
      }
    });
    cc.log("[ReplayController] \u5DF2\u6682\u505C " + stoppedCount + " \u4E2A\u5355\u4F4D\u7684\u653B\u51FB\u52A8\u753B\uFF0C" + pausedSpineCount + " \u4E2A\u5355\u4F4D\u7684 Spine \u52A8\u753B");
  },
  /**
   * 恢复所有动画（回放继续时调用）
   * @private
   */
  _resumeAllAnimations: function _resumeAllAnimations() {
    if (!this.battleController) return;
    var heros = this.battleController.heros || [];
    var monsters = this.battleController.monsters || [];
    var allUnits = [].concat(heros, monsters);
    var resumedCount = 0;
    allUnits.forEach(function (unit) {
      if (unit && unit.isValid) {
        // 恢复 Spine 动画的播放速度
        var skeleton = unit.getComponent(sp.Skeleton);
        if (skeleton && skeleton._originalTimeScale !== undefined) {
          skeleton.timeScale = skeleton._originalTimeScale;
          delete skeleton._originalTimeScale;
          resumedCount++;
        }
      }
    });
    if (resumedCount > 0) {
      cc.log("[ReplayController] \u5DF2\u6062\u590D " + resumedCount + " \u4E2A\u5355\u4F4D\u7684 Spine \u52A8\u753B");
    }
  },
  /**
   * 停止所有动画（回放停止时调用）
   * @private
   */
  _stopAllAnimations: function _stopAllAnimations() {
    if (!this.battleController) return;
    var heros = this.battleController.heros || [];
    var monsters = this.battleController.monsters || [];
    var allUnits = [].concat(heros, monsters);
    var stoppedCount = 0;
    allUnits.forEach(function (unit) {
      if (unit && unit.isValid) {
        var attackMover = unit.getComponent("AttackMover");
        if (attackMover) {
          // 停止所有动画并重置
          attackMover.stopAttack();
          stoppedCount++;
        }

        // 停止所有tween动画（包括其他可能的动画）
        cc.Tween.stopAllByTarget(unit);
      }
    });
    if (stoppedCount > 0) {
      cc.log("[ReplayController] \u5DF2\u505C\u6B62 " + stoppedCount + " \u4E2A\u5355\u4F4D\u7684\u52A8\u753B");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxSZXBsYXlDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmVwbGF5UGFuZWwiLCJ0eXBlIiwiTm9kZSIsInRvb2x0aXAiLCJwbGF5UGF1c2VCdXR0b24iLCJCdXR0b24iLCJzdG9wQnV0dG9uIiwic3BlZWRTbGlkZXIiLCJTbGlkZXIiLCJzcGVlZExhYmVsIiwiTGFiZWwiLCJwcm9ncmVzc0JhciIsIlByb2dyZXNzQmFyIiwidGltZUxhYmVsIiwiZ2FtZU92ZXJTY2VuZU5hbWUiLCJvbkxvYWQiLCJub2RlIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJvblBsYXlQYXVzZUNsaWNrIiwib25TdG9wQ2xpY2siLCJvblNwZWVkQ2hhbmdlIiwicHJvZ3Jlc3MiLCJfdXBkYXRlU3BlZWRMYWJlbCIsImFjdGl2ZSIsInJlcGxheWVyIiwiYmF0dGxlUmVjb3JkIiwiYmF0dGxlU3lzdGVtIiwiYmF0dGxlQ29udHJvbGxlciIsInNhdmVkSGVyb3MiLCJzYXZlZE1vbnN0ZXJzIiwic2F2ZWRSZWNvcmRLZXkiLCJpc1JlcGxheUNvbXBsZXRlZCIsInN0YXJ0UmVwbGF5IiwiaGVyb3MiLCJtb25zdGVycyIsIl90aGlzIiwibG9nIiwibmFtZSIsImVycm9yIiwibGVuZ3RoIiwiY3VycmVudFVuaXRzIiwiX2dldEN1cnJlbnRTY2VuZVVuaXRzIiwid2FybiIsInNjaGVkdWxlT25jZSIsInJldHJ5VW5pdHMiLCJyZXRyeUhlcm9zIiwicmV0cnlNb25zdGVycyIsImNvbmNhdCIsIkJhdHRsZVJlcGxheWVyIiwicmVxdWlyZSIsInBhcmVudCIsIm9wYWNpdHkiLCJlbnN1cmVDaGlsZHJlblZpc2libGUiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlIiwiY2hpbGRyZW4iLCJfc3RlcCIsImRvbmUiLCJjaGlsZCIsInZhbHVlIiwib25SZXBsYXlDb21wbGV0ZSIsIl91cGRhdGVQbGF5UGF1c2VCdXR0b24iLCJkZWZhdWx0U3BlZWQiLCJzZXRQbGF5YmFja1NwZWVkIiwiX3BhdXNlQmF0dGxlU3lzdGVtIiwic2NlbmUiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiY2FudmFzIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJiYXR0bGVDb250cm9sbGVyTm9kZSIsImJjIiwibG9hZEFuZFJlcGxheSIsIndhc1BhdXNlZCIsImlzUGF1c2VkIiwidG9nZ2xlUGF1c2UiLCJpc05vd1BhdXNlZCIsIl9wYXVzZUFsbEFuaW1hdGlvbnMiLCJfcmVzdW1lQWxsQW5pbWF0aW9ucyIsIl90aGlzMiIsInN0b3BSZXBsYXkiLCJfc3RvcEFsbEFuaW1hdGlvbnMiLCJfcmVzdW1lQmF0dGxlU3lzdGVtIiwibG9hZFNjZW5lIiwic3BlZWQiLCJ0b0ZpeGVkIiwic3RyaW5nIiwiaXNQbGF5aW5nIiwibGFiZWwiLCJnZXRDb21wb25lbnRJbkNoaWxkcmVuIiwia2V5IiwiQmF0dGxlUmVjb3JkZXIiLCJyZWNvcmRlciIsInJlY29yZCIsImxvYWRGcm9tTG9jYWxTdG9yYWdlIiwiZXZlbnRzIiwiaXNWYWxpZCIsImZpbmRCYXR0bGVDb250cm9sbGVyIiwiY29tcCIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJyZXN1bHQiLCJoZXJvUGFyZW50IiwiZmlsdGVyIiwiaGVyb05hbWVzIiwibWFwIiwiaCIsImpvaW4iLCJtb25zdGVyUGFyZW50IiwibW9uc3Rlck5hbWVzIiwibSIsImlzUmVwbGF5aW5nIiwiZmluaXNoZWQiLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwiYWxsVW5pdHMiLCJzdG9wcGVkQ291bnQiLCJwYXVzZWRTcGluZUNvdW50IiwiZm9yRWFjaCIsInVuaXQiLCJUd2VlbiIsInN0b3BBbGxCeVRhcmdldCIsImF0dGFja01vdmVyIiwiaXNBdHRhY2tpbmciLCJza2VsZXRvbiIsInNwIiwiU2tlbGV0b24iLCJfb3JpZ2luYWxUaW1lU2NhbGUiLCJ1bmRlZmluZWQiLCJ0aW1lU2NhbGUiLCJzdG9wVHdlZW5Pbk5vZGUiLCJyZXN1bWVkQ291bnQiLCJzdG9wQXR0YWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUjtJQUNBQyxXQUFXLEVBQUU7TUFDVCxXQUFTLElBQUk7TUFDYkMsSUFBSSxFQUFFTCxFQUFFLENBQUNNLElBQUk7TUFDYkMsT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVEO0lBQ0FDLGVBQWUsRUFBRTtNQUNiLFdBQVMsSUFBSTtNQUNiSCxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1MsTUFBTTtNQUNmRixPQUFPLEVBQUU7SUFDYixDQUFDO0lBRUQ7SUFDQUcsVUFBVSxFQUFFO01BQ1IsV0FBUyxJQUFJO01BQ2JMLElBQUksRUFBRUwsRUFBRSxDQUFDUyxNQUFNO01BQ2ZGLE9BQU8sRUFBRTtJQUNiLENBQUM7SUFFRDtJQUNBSSxXQUFXLEVBQUU7TUFDVCxXQUFTLElBQUk7TUFDYk4sSUFBSSxFQUFFTCxFQUFFLENBQUNZLE1BQU07TUFDZkwsT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVEO0lBQ0FNLFVBQVUsRUFBRTtNQUNSLFdBQVMsSUFBSTtNQUNiUixJQUFJLEVBQUVMLEVBQUUsQ0FBQ2MsS0FBSztNQUNkUCxPQUFPLEVBQUU7SUFDYixDQUFDO0lBRUQ7SUFDQVEsV0FBVyxFQUFFO01BQ1QsV0FBUyxJQUFJO01BQ2JWLElBQUksRUFBRUwsRUFBRSxDQUFDZ0IsV0FBVztNQUNwQlQsT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVEO0lBQ0FVLFNBQVMsRUFBRTtNQUNQLFdBQVMsSUFBSTtNQUNiWixJQUFJLEVBQUVMLEVBQUUsQ0FBQ2MsS0FBSztNQUNkUCxPQUFPLEVBQUU7SUFDYixDQUFDO0lBRUQ7SUFDQVcsaUJBQWlCLEVBQUU7TUFDZixXQUFTLGVBQWU7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QUVGLElBQUlBLFlBQVksR0FBRyxDQUFDLEVBQUU7TUFDbEIxSSxFQUFFLENBQUMwQyxHQUFHLDRDQUEyQmdHLFlBQVksa0RBQWlCO0lBQ2xFO0VBQ0osQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0lsRCxrQkFBa0IsV0FBQUEsbUJBQUEsRUFBRztJQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDdkQsZ0JBQWdCLEVBQUU7SUFFNUIsSUFBTU0sS0FBSyxHQUFHLElBQUksQ0FBQ04sZ0JBQWdCLENBQUNNLEtBQUssSUFBSSxFQUFFO0lBQy9DLElBQU1DLFFBQVEsR0FBRyxJQUFJLENBQUNQLGdCQUFnQixDQUFDTyxRQUFRLElBQUksRUFBRTtJQUNyRCxJQUFNa0YsUUFBUSxNQUFBckUsTUFBQSxDQUFPZCxLQUFLLEVBQUtDLFFBQVEsQ0FBQztJQUV4QyxJQUFJbUYsWUFBWSxHQUFHLENBQUM7SUFDcEJELFFBQVEsQ0FBQ0csT0FBTyxDQUFDLFVBQUFDLElBQUksRUFBSTtNQUNyQixJQUFJQSxJQUFJLElBQUlBLElBQUksQ0FBQ3ZCLE9BQU8sRUFBRTtRQUN0QixJQUFNMEIsV0FBVyxHQUFHSCxJQUFJLENBQUNsRCxZQUFZLENBQUMsYUFBYSxDQUFDO1FBQ3BELElBQUlxRCxXQUFXLEVBQUU7VUFDYjtVQUNBQSxXQUFXLENBQUNVLFVBQVUsRUFBRTtVQUN4QmhCLFlBQVksRUFBRTtRQUNsQjs7UUFFQTtRQUNBM0gsRUFBRSxDQUFDK0gsS0FBSyxDQUFDQyxlQUFlLENBQUNGLElBQUksQ0FBQztNQUNsQztJQUNKLENBQUMsQ0FBQztJQUVGLElBQUlILFlBQVksR0FBRyxDQUFDLEVBQUU7TUFDbEIzSCxFQUFFLENBQUMwQyxHQUFHLDRDQUEyQmlGLFlBQVksMkNBQVU7SUFDM0Q7RUFDSjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOaImOaWl+WbnuaUvuaOp+WItuWZqOe7hOS7tlxyXG4gKiDmj5Dkvpvlm57mlL7mjqfliLZVSeWSjOWKn+iDvVxyXG4gKi9cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyDlm57mlL7mjqfliLbpnaLmnb9cclxuICAgICAgICByZXBsYXlQYW5lbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWbnuaUvuaOp+WItumdouadv+iKgueCuVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5pKt5pS+L+aaguWBnOaMiemSrlxyXG4gICAgICAgIHBsYXlQYXVzZUJ1dHRvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b24sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5pKt5pS+L+aaguWBnOaMiemSrlwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5YGc5q2i5oyJ6ZKuXHJcbiAgICAgICAgc3RvcEJ1dHRvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b24sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5YGc5q2i5oyJ6ZKuXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDpgJ/luqbmjqfliLbmu5HlnZfvvIjlj6/pgInvvIlcclxuICAgICAgICBzcGVlZFNsaWRlcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TbGlkZXIsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5Zue5pS+6YCf5bqm5o6n5Yi25ruR5Z2X77yIMC41eCAtIDQuMHjvvIlcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOmAn+W6puaYvuekuuagh+etvu+8iOWPr+mAie+8iVxyXG4gICAgICAgIHNwZWVkTGFiZWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5pi+56S65b2T5YmN5Zue5pS+6YCf5bqm55qE5qCH562+77yI5aaC77yaMS4weO+8iVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g6L+b5bqm5p2h77yI5Y+v6YCJ77yJXHJcbiAgICAgICAgcHJvZ3Jlc3NCYXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJvZ3Jlc3NCYXIsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5Zue5pS+6L+b5bqm5p2hXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDlvZPliY3ml7bpl7TmmL7npLrmoIfnrb7vvIjlj6/pgInvvIlcclxuICAgICAgICB0aW1lTGFiZWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5pi+56S65b2T5YmN5Zue5pS+5pe26Ze055qE5qCH562+XCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDmuLjmiI/nu5PmnZ/lnLrmma/lkI3np7DvvIjlgZzmraLlm57mlL7ml7bot7PovazvvIlcclxuICAgICAgICBnYW1lT3ZlclNjZW5lTmFtZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBcIkdhbWVPdmVyU2NlbmVcIixcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLlgZzmraLlm57mlL7ml7bot7PovazliLDnmoTmuLjmiI/nu5PmnZ/lnLrmma/lkI3np7BcIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIOe7keWumuaMiemSruS6i+S7tlxyXG4gICAgICAgIGlmICh0aGlzLnBsYXlQYXVzZUJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlQYXVzZUJ1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblBsYXlQYXVzZUNsaWNrLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0b3BCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wQnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uU3RvcENsaWNrLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNwZWVkU2xpZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRTbGlkZXIubm9kZS5vbignc2xpZGUnLCB0aGlzLm9uU3BlZWRDaGFuZ2UsIHRoaXMpO1xyXG4gICAgICAgICAgICAvLyDliJ3lp4vljJbmu5HlnZflgLzkuLoxLjB477yI5q2j5bi46YCf5bqm77yJXHJcbiAgICAgICAgICAgIC8vIHByb2dyZXNz6IyD5Zu05pivMC0x77yM5a+55bqU6YCf5bqmMC41eC00LjB4XHJcbiAgICAgICAgICAgIC8vIDEuMHjlr7nlupTnmoRwcm9ncmVzcyA9ICgxLjAgLSAwLjUpIC8gKDQuMCAtIDAuNSkgPSAwLjUgLyAzLjUg4omIIDAuMTQzXHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRTbGlkZXIucHJvZ3Jlc3MgPSAoMS4wIC0gMC41KSAvICg0LjAgLSAwLjUpO1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVTcGVlZExhYmVsKDEuMCk7IC8vIOabtOaWsOmAn+W6puaYvuekulxyXG4gICAgICAgICAgICAvLyDliJ3lp4vpmpDol4/pgJ/luqbmjqfliLbmu5HlnZfvvIjlj6rlnKjlm57mlL7ml7bmmL7npLrvvIlcclxuICAgICAgICAgICAgdGhpcy5zcGVlZFNsaWRlci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5Yid5aeL6ZqQ6JeP6YCf5bqm5pi+56S65qCH562+77yI5aaC5p6c5a2Y5Zyo77yJXHJcbiAgICAgICAgaWYgKHRoaXMuc3BlZWRMYWJlbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkTGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWIneWni+makOiXj+mdouadv1xyXG4gICAgICAgIGlmICh0aGlzLnJlcGxheVBhbmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwbGF5UGFuZWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDlm57mlL7lmajlvJXnlKhcclxuICAgICAgICB0aGlzLnJlcGxheWVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmJhdHRsZVJlY29yZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5iYXR0bGVTeXN0ZW0gPSBudWxsOyAvLyBCYXR0bGVTeXN0ZW3lvJXnlKjvvIjnlKjkuo7mmoLlgZwv5oGi5aSN77yJXHJcbiAgICAgICAgdGhpcy5iYXR0bGVDb250cm9sbGVyID0gbnVsbDsgLy8gQmF0dGxlQ29udHJvbGxlcuW8leeUqO+8iOeUqOS6juiuvue9ruWbnuaUvuagh+W/l++8iVxyXG5cclxuICAgICAgICAvLyDkv53lrZjlm57mlL7mlbDmja7vvIznlKjkuo7ph43mlrDmkq3mlL5cclxuICAgICAgICB0aGlzLnNhdmVkSGVyb3MgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2F2ZWRNb25zdGVycyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zYXZlZFJlY29yZEtleSA9IG51bGw7IC8vIOS/neWtmOiusOW9lemUru+8jOeUqOS6jumHjeaWsOWKoOi9vVxyXG4gICAgICAgIHRoaXMuaXNSZXBsYXlDb21wbGV0ZWQgPSBmYWxzZTsgLy8g5Zue5pS+5piv5ZCm5bey5a6M5oiQXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeL5Zue5pS+XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYmF0dGxlUmVjb3JkIC0g5oiY5paX6K6w5b2V5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBoZXJvcyAtIOiLsembhOWIl+ihqO+8iOWPr+mAie+8jOWmguaenOS4uuepuuWImeS7jkJhdHRsZUNvbnRyb2xsZXLojrflj5bvvIlcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vbnN0ZXJzIC0g5oCq54mp5YiX6KGo77yI5Y+v6YCJ77yM5aaC5p6c5Li656m65YiZ5LuOQmF0dGxlQ29udHJvbGxlcuiOt+WPlu+8iVxyXG4gICAgICovXHJcbiAgICBzdGFydFJlcGxheShiYXR0bGVSZWNvcmQsIGhlcm9zLCBtb25zdGVycykge1xyXG4gICAgICAgIGNjLmxvZyhgW1JlcGxheUNvbnRyb2xsZXJdID09PT09IOW8gOWni+WbnuaUviA9PT09PWApO1xyXG4gICAgICAgIGNjLmxvZyhgW1JlcGxheUNvbnRyb2xsZXJdIGJhdHRsZVJlY29yZDogJHtiYXR0bGVSZWNvcmQgPyAn5a2Y5ZyoJyA6ICfkuI3lrZjlnKgnfWApO1xyXG4gICAgICAgIGNjLmxvZyhgW1JlcGxheUNvbnRyb2xsZXJdIHJlcGxheVBhbmVsOiAke3RoaXMucmVwbGF5UGFuZWwgPyB0aGlzLnJlcGxheVBhbmVsLm5hbWUgOiAn5pyq57uR5a6aJ31gKTtcclxuXHJcbiAgICAgICAgaWYgKCFiYXR0bGVSZWNvcmQpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCJbUmVwbGF5Q29udHJvbGxlcl0g5peg5pWI55qE5oiY5paX6K6w5b2VXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJhdHRsZVJlY29yZCA9IGJhdHRsZVJlY29yZDtcclxuXHJcbiAgICAgICAgLy8g5aaC5p6c5Lyg5YWl55qE5Y2V5L2N5YiX6KGo5Li656m65oiW5peg5pWI77yM5LuOQmF0dGxlQ29udHJvbGxlcuiOt+WPluW9k+WJjeWcuuaZr+eahOWNleS9jeWIl+ihqFxyXG4gICAgICAgIGlmICghaGVyb3MgfHwgaGVyb3MubGVuZ3RoID09PSAwIHx8ICFtb25zdGVycyB8fCBtb25zdGVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY2MubG9nKGBbUmVwbGF5Q29udHJvbGxlcl0g5Lyg5YWl55qE5Y2V5L2N5YiX6KGo5Li656m677yM5bCd6K+V5LuOQmF0dGxlQ29udHJvbGxlcuiOt+WPluW9k+WJjeWcuuaZr+eahOWNleS9jWApO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VW5pdHMgPSB0aGlzLl9nZXRDdXJyZW50U2NlbmVVbml0cygpO1xyXG4gICAgICAgICAgICBjYy5sb2coYFtSZXBsYXlDb250cm9sbGVyXSBfZ2V0Q3VycmVudFNjZW5lVW5pdHPov5Tlm546IOiLsembhCR7Y3VycmVudFVuaXRzLmhlcm9zID8gY3VycmVudFVuaXRzLmhlcm9zLmxlbmd0aCA6IDB95LiqLCDmgKrniakke2N1cnJlbnRVbml0cy5tb25zdGVycyA/IGN1cnJlbnRVbml0cy5tb25zdGVycy5sZW5ndGggOiAwfeS4qmApO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRVbml0cy5oZXJvcyAmJiBjdXJyZW50VW5pdHMuaGVyb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaGVyb3MgPSBjdXJyZW50VW5pdHMuaGVyb3M7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtSZXBsYXlDb250cm9sbGVyXSDinJMg5LuOQmF0dGxlQ29udHJvbGxlcuiOt+WPluWIsCAke2hlcm9zLmxlbmd0aH0g5Liq6Iux6ZuEYCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy53YXJuKGBbUmVwbGF5Q29udHJvbGxlcl0g4pqg77iPIOS7jkJhdHRsZUNvbnRyb2xsZXLojrflj5bnmoToi7Hpm4TliJfooajkuLrnqbpgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY3VycmVudFVuaXRzLm1vbnN0ZXJzICYmIGN1cnJlbnRVbml0cy5tb25zdGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBtb25zdGVycyA9IGN1cnJlbnRVbml0cy5tb25zdGVycztcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhgW1JlcGxheUNvbnRyb2xsZXJdIOKckyDku45CYXR0bGVDb250cm9sbGVy6I635Y+W5YiwICR7bW9uc3RlcnMubGVuZ3RofSDkuKrmgKrnialgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLndhcm4oYFtSZXBsYXlDb250cm9sbGVyXSDimqDvuI8g5LuOQmF0dGxlQ29udHJvbGxlcuiOt+WPlueahOaAqueJqeWIl+ihqOS4uuepumApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDlpoLmnpzku43nhLbkuLrnqbrvvIzlsJ3or5Xlu7bov5/ojrflj5bvvIjlj6/og73ljZXkvY3ov5jlnKjliJvlu7rkuK3vvIlcclxuICAgICAgICAgICAgaWYgKCghaGVyb3MgfHwgaGVyb3MubGVuZ3RoID09PSAwKSAmJiAoIW1vbnN0ZXJzIHx8IG1vbnN0ZXJzLmxlbmd0aCA9PT0gMCkpIHtcclxuICAgICAgICAgICAgICAgIGNjLndhcm4oYFtSZXBsYXlDb250cm9sbGVyXSDimqDvuI8g5Y2V5L2N5YiX6KGo5LuN5Li656m677yM5bu26L+fMjAwbXPlkI7ph43or5VgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXRyeVVuaXRzID0gdGhpcy5fZ2V0Q3VycmVudFNjZW5lVW5pdHMoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtSZXBsYXlDb250cm9sbGVyXSDlu7bov5/ojrflj5bnu5Pmnpw6IOiLsembhCR7cmV0cnlVbml0cy5oZXJvcyA/IHJldHJ5VW5pdHMuaGVyb3MubGVuZ3RoIDogMH3kuKosIOaAqueJqSR7cmV0cnlVbml0cy5tb25zdGVycyA/IHJldHJ5VW5pdHMubW9uc3RlcnMubGVuZ3RoIDogMH3kuKpgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJldHJ5SGVyb3MgPSByZXRyeVVuaXRzLmhlcm9zIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXRyeU1vbnN0ZXJzID0gcmV0cnlVbml0cy5tb25zdGVycyB8fCBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldHJ5SGVyb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtSZXBsYXlDb250cm9sbGVyXSDinJMg5bu26L+f6I635Y+W5oiQ5YqfOiAke3JldHJ5SGVyb3MubGVuZ3RofSDkuKroi7Hpm4RgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldHJ5TW9uc3RlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtSZXBsYXlDb250cm9sbGVyXSDinJMg5bu26L+f6I635Y+W5oiQ5YqfOiAke3JldHJ5TW9uc3RlcnMubGVuZ3RofSDkuKrmgKrnialgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOW7tui/n+WQjuiOt+WPluWIsOWNleS9je+8jOmHjeaWsOW8gOWni+WbnuaUvlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXRyeUhlcm9zLmxlbmd0aCA+IDAgfHwgcmV0cnlNb25zdGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW1JlcGxheUNvbnRyb2xsZXJdIOW7tui/n+iOt+WPluWIsOWNleS9je+8jOmHjeaWsOW8gOWni+WbnuaUvmApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0UmVwbGF5KHRoaXMuYmF0dGxlUmVjb3JkLCByZXRyeUhlcm9zLCByZXRyeU1vbnN0ZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgW1JlcGxheUNvbnRyb2xsZXJdIOKclyDlu7bov5/ojrflj5blkI7ljZXkvY3liJfooajku43kuLrnqbrvvIzlm57mlL7ml6Dms5Xnu6fnu61gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtSZXBsYXlDb250cm9sbGVyXSDor7fnoa7kv51CYXR0bGVDb250cm9sbGVy5bey5q2j56Gu5Yid5aeL5YyW77yM5LiU5Y2V5L2N5bey5Yib5bu6YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgMC4yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzlu7bov5/ojrflj5bvvIzlhYjkuI3nu6fnu63miafooYzvvIznrYnlvoXlu7bov5/lm57osINcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6aqM6K+B5Y2V5L2N5YiX6KGoXHJcbiAgICAgICAgaWYgKCFoZXJvcyB8fCBoZXJvcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY2Mud2FybihgW1JlcGxheUNvbnRyb2xsZXJdIOKaoO+4jyDoi7Hpm4TliJfooajkuLrnqbrvvIzlm57mlL7lj6/og73ml6Dms5XmraPluLjlt6XkvZxgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFtb25zdGVycyB8fCBtb25zdGVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY2Mud2FybihgW1JlcGxheUNvbnRyb2xsZXJdIOKaoO+4jyDmgKrnianliJfooajkuLrnqbrvvIzlm57mlL7lj6/og73ml6Dms5XmraPluLjlt6XkvZxgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOS/neWtmOWNleS9jeWIl+ihqO+8jOeUqOS6jumHjeaWsOaSreaUvu+8iOWIm+W7uuWJr+acrO+8jOmBv+WFjeW8leeUqOiiq+S/ruaUue+8iVxyXG4gICAgICAgIHRoaXMuc2F2ZWRIZXJvcyA9IGhlcm9zID8gWy4uLmhlcm9zXSA6IFtdOyAvLyDliJvlu7rmlbDnu4Tlia/mnKxcclxuICAgICAgICB0aGlzLnNhdmVkTW9uc3RlcnMgPSBtb25zdGVycyA/IFsuLi5tb25zdGVyc10gOiBbXTsgLy8g5Yib5bu65pWw57uE5Ymv5pysXHJcbiAgICAgICAgdGhpcy5pc1JlcGxheUNvbXBsZXRlZCA9IGZhbHNlOyAvLyDph43nva7lrozmiJDmoIflv5dcclxuXHJcbiAgICAgICAgY2MubG9nKGBbUmVwbGF5Q29udHJvbGxlcl0g5L2/55So5Y2V5L2N5YiX6KGoIC0g6Iux6ZuEOiAke3RoaXMuc2F2ZWRIZXJvcy5sZW5ndGh95LiqLCDmgKrniak6ICR7dGhpcy5zYXZlZE1vbnN0ZXJzLmxlbmd0aH3kuKpgKTtcclxuXHJcbiAgICAgICAgLy8g5Yib5bu65Zue5pS+5ZmoXHJcbiAgICAgICAgY29uc3QgQmF0dGxlUmVwbGF5ZXIgPSByZXF1aXJlKFwiQmF0dGxlUmVwbGF5ZXJcIik7XHJcbiAgICAgICAgdGhpcy5yZXBsYXllciA9IG5ldyBCYXR0bGVSZXBsYXllcigpO1xyXG5cclxuICAgICAgICAvLyDmmL7npLrlm57mlL7mjqfliLbpnaLmnb9cclxuICAgICAgICBpZiAodGhpcy5yZXBsYXlQYW5lbCkge1xyXG4gICAgICAgICAgICAvLyDnoa7kv53niLboioLngrnkuZ/mmK/mv4DmtLvnmoTvvIjlkJHkuIrpgY3ljobmiYDmnInniLboioLngrnvvIlcclxuICAgICAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMucmVwbGF5UGFuZWwucGFyZW50O1xyXG4gICAgICAgICAgICB3aGlsZSAocGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmVudC5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtSZXBsYXlDb250cm9sbGVyXSDmv4DmtLvniLboioLngrk6ICR7cGFyZW50Lm5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDorr7nva7oioLngrnlj6/op4FcclxuICAgICAgICAgICAgdGhpcy5yZXBsYXlQYW5lbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnJlcGxheVBhbmVsLm9wYWNpdHkgPSAyNTU7XHJcblxyXG4gICAgICAgICAgICAvLyDnoa7kv53miYDmnInlrZDoioLngrnkuZ/mmK/lj6/op4HnmoRcclxuICAgICAgICAgICAgY29uc3QgZW5zdXJlQ2hpbGRyZW5WaXNpYmxlID0gKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghbm9kZS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5vcGFjaXR5ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuc3VyZUNoaWxkcmVuVmlzaWJsZShjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGVuc3VyZUNoaWxkcmVuVmlzaWJsZSh0aGlzLnJlcGxheVBhbmVsKTtcclxuXHJcbiAgICAgICAgICAgIGNjLmxvZyhgW1JlcGxheUNvbnRyb2xsZXJdIOKckyDlm57mlL7mjqfliLbpnaLmnb/lt7LmmL7npLpgKTtcclxuICAgICAgICAgICAgY2MubG9nKGBbUmVwbGF5Q29udHJvbGxlcl0gICDoioLngrnlkI3np7A6ICR7dGhpcy5yZXBsYXlQYW5lbC5uYW1lfWApO1xyXG4gICAgICAgICAgICBjYy5sb2coYFtSZXBsYXlDb250cm9sbGVyXSAgIGFjdGl2ZTogJHt0aGlzLnJlcGxheVBhbmVsLmFjdGl2ZX1gKTtcclxuICAgICAgICAgICAgY2MubG9nKGBbUmVwbGF5Q29udHJvbGxlcl0gICBvcGFjaXR5OiAke3RoaXMucmVwbGF5UGFuZWwub3BhY2l0eX1gKTtcclxuICAgICAgICAgICAgY2MubG9nKGBbUmVwbGF5Q29udHJvbGxlcl0gICDniLboioLngrk6ICR7dGhpcy5yZXBsYXlQYW5lbC5wYXJlbnQgPyB0aGlzLnJlcGxheVBhbmVsLnBhcmVudC5uYW1lIDogJ+aXoCd9YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCJbUmVwbGF5Q29udHJvbGxlcl0g4pqg77iPIOacque7keWumnJlcGxheVBhbmVs6IqC54K577yM5Zue5pS+5o6n5Yi26Z2i5p2/5LiN5Lya5pi+56S6XCIpO1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIltSZXBsYXlDb250cm9sbGVyXSDor7flnKhSZXBsYXlDb250cm9sbGVy57uE5Lu25Lit57uR5a6acmVwbGF5UGFuZWzoioLngrlcIik7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKFwiW1JlcGxheUNvbnRyb2xsZXJdIOatpemqpO+8mlwiKTtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCJbUmVwbGF5Q29udHJvbGxlcl0gICAxLiDlnKhCYXR0bGVTY2VuZeS4reWIm+W7uuWbnuaUvuaOp+WItumdouadv+iKgueCuVwiKTtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCJbUmVwbGF5Q29udHJvbGxlcl0gICAyLiDlnKhSZXBsYXlDb250cm9sbGVy57uE5Lu25Lit77yM5bCGcmVwbGF5UGFuZWzlsZ7mgKfnu5HlrprliLDor6XoioLngrlcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmmL7npLrpgJ/luqbmjqfliLbmu5HlnZfvvIjlj6rlnKjlm57mlL7ml7bmmL7npLrvvIlcclxuICAgICAgICBpZiAodGhpcy5zcGVlZFNsaWRlcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zcGVlZFNsaWRlci5ub2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZFNsaWRlci5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRTbGlkZXIubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkU2xpZGVyLm5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgY2MubG9nKGBbUmVwbGF5Q29udHJvbGxlcl0g6YCf5bqm5o6n5Yi25ruR5Z2X5bey5pi+56S6YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmmL7npLrpgJ/luqbmmL7npLrmoIfnrb7vvIjlpoLmnpzlrZjlnKjvvIlcclxuICAgICAgICBpZiAodGhpcy5zcGVlZExhYmVsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkTGFiZWwubm9kZS5wYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRMYWJlbC5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRMYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRMYWJlbC5ub2RlLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmmL7npLrmkq3mlL4v5pqC5YGc5oyJ6ZKu77yI5aaC5p6c5a2Y5Zyo77yJXHJcbiAgICAgICAgaWYgKHRoaXMucGxheVBhdXNlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXlQYXVzZUJ1dHRvbi5ub2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5UGF1c2VCdXR0b24ubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBsYXlQYXVzZUJ1dHRvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucGxheVBhdXNlQnV0dG9uLm5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOaYvuekuuWBnOatouaMiemSru+8iOWmguaenOWtmOWcqO+8iVxyXG4gICAgICAgIGlmICh0aGlzLnN0b3BCdXR0b24pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcEJ1dHRvbi5ub2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wQnV0dG9uLm5vZGUucGFyZW50LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zdG9wQnV0dG9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdG9wQnV0dG9uLm5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOW8gOWni+WbnuaUvlxyXG4gICAgICAgIHRoaXMucmVwbGF5ZXIuc3RhcnRSZXBsYXkoXHJcbiAgICAgICAgICAgIGJhdHRsZVJlY29yZCxcclxuICAgICAgICAgICAgaGVyb3MsXHJcbiAgICAgICAgICAgIG1vbnN0ZXJzLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDlm57mlL7lrozmiJDlm57osINcclxuICAgICAgICAgICAgICAgIHRoaXMub25SZXBsYXlDb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8g5pu05pawVUlcclxuICAgICAgICB0aGlzLl91cGRhdGVQbGF5UGF1c2VCdXR0b24odHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMlumAn+W6puaOp+WItu+8iOWmguaenOWtmOWcqO+8iVxyXG4gICAgICAgIGlmICh0aGlzLnNwZWVkU2xpZGVyICYmIHRoaXMucmVwbGF5ZXIpIHtcclxuICAgICAgICAgICAgLy8g6K6+572u6buY6K6k6YCf5bqm5Li6MS4weO+8iOato+W4uOmAn+W6pu+8iVxyXG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0U3BlZWQgPSAxLjA7XHJcbiAgICAgICAgICAgIHRoaXMucmVwbGF5ZXIuc2V0UGxheWJhY2tTcGVlZChkZWZhdWx0U3BlZWQpO1xyXG4gICAgICAgICAgICAvLyDmm7TmlrDmu5HlnZfkvY3nva5cclxuICAgICAgICAgICAgdGhpcy5zcGVlZFNsaWRlci5wcm9ncmVzcyA9IChkZWZhdWx0U3BlZWQgLSAwLjUpIC8gKDQuMCAtIDAuNSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVNwZWVkTGFiZWwoZGVmYXVsdFNwZWVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOaaguWBnEJhdHRsZVN5c3Rlbe+8iOWmguaenOWtmOWcqO+8iVxyXG4gICAgICAgIHRoaXMuX3BhdXNlQmF0dGxlU3lzdGVtKCk7XHJcblxyXG4gICAgICAgIGNjLmxvZyhgW1JlcGxheUNvbnRyb2xsZXJdIOWbnuaUvuW3suWQr+WKqGApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvi/mmoLlgZzmjInpkq7ngrnlh7tcclxuICAgICAqL1xyXG4gICAgb25QbGF5UGF1c2VDbGljaygpIHtcclxuICAgICAgICAvLyDlpoLmnpzlm57mlL7lt7LlrozmiJDvvIzngrnlh7vmkq3mlL7ml7bph43mlrDlvIDlp4vlm57mlL7vvIjlg4/ku45HYW1lT3ZlclNjZW5l54K55Ye75Zue5pS+6YKj5qC377yJXHJcbiAgICAgICAgaWYgKHRoaXMuaXNSZXBsYXlDb21wbGV0ZWQpIHtcclxuICAgICAgICAgICAgY2MubG9nKFwiW1JlcGxheUNvbnRyb2xsZXJdIOWbnuaUvuW3suWujOaIkO+8jOmHjeaWsOW8gOWni+WbnuaUvlwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOS8mOWFiOS9v+eUqOS/neWtmOeahOiusOW9lemUrumHjeaWsOWKoOi9ve+8iOWmguaenOWtmOWcqO+8iVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zYXZlZFJlY29yZEtleSkge1xyXG4gICAgICAgICAgICAgICAgLy8g6YeN5paw6I635Y+W5b2T5YmN5Zy65pmv55qE5Y2V5L2N5YiX6KGoXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGVyb3MgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBtb25zdGVycyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOafpeaJvkJhdHRsZUNvbnRyb2xsZXLojrflj5bljZXkvY3liJfooahcclxuICAgICAgICAgICAgICAgIGlmIChzY2VuZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IHNjZW5lLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYW52YXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmF0dGxlQ29udHJvbGxlciA9IGNhbnZhcy5nZXRDb21wb25lbnQoXCJCYXR0bGVDb250cm9sbGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJhdHRsZUNvbnRyb2xsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWwneivleWcqOWtkOiKgueCueS4reafpeaJvlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmF0dGxlQ29udHJvbGxlck5vZGUgPSBjYW52YXMuZ2V0Q2hpbGRCeU5hbWUoXCJCYXR0bGVDb250cm9sbGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhdHRsZUNvbnRyb2xsZXJOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmMgPSBiYXR0bGVDb250cm9sbGVyTm9kZS5nZXRDb21wb25lbnQoXCJCYXR0bGVDb250cm9sbGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXJvcyA9IGJjLmhlcm9zIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb25zdGVycyA9IGJjLm1vbnN0ZXJzIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlcm9zID0gYmF0dGxlQ29udHJvbGxlci5oZXJvcyB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnN0ZXJzID0gYmF0dGxlQ29udHJvbGxlci5tb25zdGVycyB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmib7kuI3liLDljZXkvY3liJfooajvvIzkvb/nlKjkv53lrZjnmoTliJfooahcclxuICAgICAgICAgICAgICAgIGlmIChoZXJvcy5sZW5ndGggPT09IDAgJiYgbW9uc3RlcnMubGVuZ3RoID09PSAwICYmIHRoaXMuc2F2ZWRIZXJvcyAmJiB0aGlzLnNhdmVkTW9uc3RlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZXJvcyA9IHRoaXMuc2F2ZWRIZXJvcztcclxuICAgICAgICAgICAgICAgICAgICBtb25zdGVycyA9IHRoaXMuc2F2ZWRNb25zdGVycztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDkvb/nlKhsb2FkQW5kUmVwbGF56YeN5paw5Yqg6L295bm25Zue5pS+77yI5YOP5LuOR2FtZU92ZXJTY2VuZeeCueWHu+WbnuaUvumCo+agt++8iVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQW5kUmVwbGF5KHRoaXMuc2F2ZWRSZWNvcmRLZXksIGhlcm9zLCBtb25zdGVycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5iYXR0bGVSZWNvcmQgJiYgdGhpcy5zYXZlZEhlcm9zICYmIHRoaXMuc2F2ZWRNb25zdGVycykge1xyXG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5rKh5pyJ5L+d5a2Y6K6w5b2V6ZSu77yM5L2/55So5L+d5a2Y55qE6K6w5b2V5pWw5o2uXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0UmVwbGF5KHRoaXMuYmF0dGxlUmVjb3JkLCB0aGlzLnNhdmVkSGVyb3MsIHRoaXMuc2F2ZWRNb25zdGVycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIltSZXBsYXlDb250cm9sbGVyXSDml6Dms5Xph43mlrDmkq3mlL7vvJrnvLrlsJHlm57mlL7mlbDmja5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5aaC5p6c5rKh5pyJ5Zue5pS+5Zmo77yM5peg5rOV5pON5L2cXHJcbiAgICAgICAgaWYgKCF0aGlzLnJlcGxheWVyKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCJbUmVwbGF5Q29udHJvbGxlcl0g5Zue5pS+5Zmo5LiN5a2Y5Zyo77yM5peg5rOV5pKt5pS+L+aaguWBnFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgd2FzUGF1c2VkID0gdGhpcy5yZXBsYXllci5pc1BhdXNlZDtcclxuICAgICAgICB0aGlzLnJlcGxheWVyLnRvZ2dsZVBhdXNlKCk7XHJcbiAgICAgICAgY29uc3QgaXNOb3dQYXVzZWQgPSB0aGlzLnJlcGxheWVyLmlzUGF1c2VkO1xyXG5cclxuICAgICAgICBpZiAoaXNOb3dQYXVzZWQpIHtcclxuICAgICAgICAgICAgLy8g5pqC5YGc5pe277ya5a6M5YWo5Ya757uT55S76Z2iXHJcbiAgICAgICAgICAgIC8vIDEuIOWBnOatouaJgOacieWKqOeUu++8iOWMheaLrCB0d2VlbiDlkowgU3BpbmUg5Yqo55S777yJXHJcbiAgICAgICAgICAgIHRoaXMuX3BhdXNlQWxsQW5pbWF0aW9ucygpO1xyXG4gICAgICAgICAgICAvLyAyLiDnoa7kv53miJjmlpfpgLvovpHkuI3miafooYzvvIjpgJrov4cgaXNSZXBsYXlpbmcg5qCH5b+X77yJXHJcbiAgICAgICAgICAgIHRoaXMuX3BhdXNlQmF0dGxlU3lzdGVtKCk7IC8vIOehruS/nSBpc1JlcGxheWluZyA9IHRydWXvvIzpmLvmraLmiJjmlpfpgLvovpHmiafooYxcclxuICAgICAgICAgICAgLy8gMy4g5Zue5pS+5LqL5Lu25bey6YCa6L+HIEJhdHRsZVJlcGxheWVyLnRvZ2dsZVBhdXNlKCkg5YGc5q2iXHJcbiAgICAgICAgICAgIGNjLmxvZyhcIltSZXBsYXlDb250cm9sbGVyXSDlt7LmmoLlgZzlm57mlL7vvIznlLvpnaLlt7Llhrvnu5PvvIzmiJjmlpfpgLvovpHlt7LnpoHnlKhcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g57un57ut5pe277ya5oGi5aSN5Yqo55S75pKt5pS+6YCf5bqmXHJcbiAgICAgICAgICAgIC8vIOazqOaEj++8muS4jeaBouWkjeaImOaWl+mAu+i+ke+8jOWboOS4uui/mOWcqOWbnuaUvuaooeW8j1xyXG4gICAgICAgICAgICB0aGlzLl9yZXN1bWVBbGxBbmltYXRpb25zKCk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIltSZXBsYXlDb250cm9sbGVyXSDlt7Lnu6fnu63lm57mlL5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl91cGRhdGVQbGF5UGF1c2VCdXR0b24oIWlzTm93UGF1c2VkKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLmjInpkq7ngrnlh7tcclxuICAgICAqL1xyXG4gICAgb25TdG9wQ2xpY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVwbGF5ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBsYXllci5zdG9wUmVwbGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVwbGF5ZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5YGc5q2i5omA5pyJ5Yqo55S7XHJcbiAgICAgICAgdGhpcy5fc3RvcEFsbEFuaW1hdGlvbnMoKTtcclxuXHJcbiAgICAgICAgLy8g6ZqQ6JeP5Zue5pS+5o6n5Yi26Z2i5p2/XHJcbiAgICAgICAgaWYgKHRoaXMucmVwbGF5UGFuZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBsYXlQYW5lbC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOmakOiXj+mAn+W6puaOp+WItua7keWdl1xyXG4gICAgICAgIGlmICh0aGlzLnNwZWVkU2xpZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRTbGlkZXIubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MubG9nKGBbUmVwbGF5Q29udHJvbGxlcl0g6YCf5bqm5o6n5Yi25ruR5Z2X5bey6ZqQ6JePYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDpmpDol4/pgJ/luqbmmL7npLrmoIfnrb7vvIjlpoLmnpzlrZjlnKjvvIlcclxuICAgICAgICBpZiAodGhpcy5zcGVlZExhYmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRMYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5oGi5aSNQmF0dGxlU3lzdGVt77yI5aaC5p6c5a2Y5Zyo77yJXHJcbiAgICAgICAgdGhpcy5fcmVzdW1lQmF0dGxlU3lzdGVtKCk7XHJcblxyXG4gICAgICAgIGNjLmxvZyhcIltSZXBsYXlDb250cm9sbGVyXSDlgZzmraLlm57mlL5cIik7XHJcblxyXG4gICAgICAgIC8vIOi3s+i9rOWIsOa4uOaIj+e7k+adn+WcuuaZr1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVPdmVyU2NlbmVOYW1lKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhgW1JlcGxheUNvbnRyb2xsZXJdIOWHhuWkh+i3s+i9rOWIsOa4uOaIj+e7k+adn+WcuuaZrzogJHt0aGlzLmdhbWVPdmVyU2NlbmVOYW1lfWApO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5nYW1lT3ZlclNjZW5lTmFtZSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgW1JlcGxheUNvbnRyb2xsZXJdIOWKoOi9vea4uOaIj+e7k+adn+WcuuaZr+Wksei0pTogJHtlcnJvcn1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgW1JlcGxheUNvbnRyb2xsZXJdIOivt+ajgOafpeWcuuaZr+WQjeensOaYr+WQpuato+ehrjogJHt0aGlzLmdhbWVPdmVyU2NlbmVOYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtSZXBsYXlDb250cm9sbGVyXSDmiJDlip/ot7PovazliLDmuLjmiI/nu5PmnZ/lnLrmma86ICR7dGhpcy5nYW1lT3ZlclNjZW5lTmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIltSZXBsYXlDb250cm9sbGVyXSDmnKrorr7nva5nYW1lT3ZlclNjZW5lTmFtZe+8jOS4jeS8mui3s+i9rOWcuuaZr1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YCf5bqm5pS55Y+YXHJcbiAgICAgKi9cclxuICAgIG9uU3BlZWRDaGFuZ2UoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJlcGxheWVyIHx8ICF0aGlzLnNwZWVkU2xpZGVyKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIOmAn+W6puiMg+WbtO+8mjAuNXggLSA0LjB4XHJcbiAgICAgICAgLy8gcHJvZ3Jlc3PojIPlm7TvvJowIC0gMVxyXG4gICAgICAgIC8vIHNwZWVkID0gMC41ICsgcHJvZ3Jlc3MgKiAoNC4wIC0gMC41KSA9IDAuNSArIHByb2dyZXNzICogMy41XHJcbiAgICAgICAgY29uc3Qgc3BlZWQgPSAwLjUgKyB0aGlzLnNwZWVkU2xpZGVyLnByb2dyZXNzICogMy41O1xyXG4gICAgICAgIHRoaXMucmVwbGF5ZXIuc2V0UGxheWJhY2tTcGVlZChzcGVlZCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlU3BlZWRMYWJlbChzcGVlZCk7XHJcbiAgICAgICAgY2MubG9nKGBbUmVwbGF5Q29udHJvbGxlcl0g5Zue5pS+6YCf5bqm5bey6K6+572u5Li6OiAke3NwZWVkLnRvRml4ZWQoMSl9eGApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOmAn+W6puaYvuekuuagh+etvlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX3VwZGF0ZVNwZWVkTGFiZWwoc3BlZWQpIHtcclxuICAgICAgICBpZiAodGhpcy5zcGVlZExhYmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRMYWJlbC5zdHJpbmcgPSBgJHtzcGVlZC50b0ZpeGVkKDEpfXhgO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlm57mlL7lrozmiJBcclxuICAgICAqL1xyXG4gICAgb25SZXBsYXlDb21wbGV0ZSgpIHtcclxuICAgICAgICBjYy5sb2coXCJbUmVwbGF5Q29udHJvbGxlcl0g5Zue5pS+5a6M5oiQXCIpO1xyXG4gICAgICAgIHRoaXMuaXNSZXBsYXlDb21wbGV0ZWQgPSB0cnVlOyAvLyDmoIforrDlm57mlL7lt7LlrozmiJBcclxuICAgICAgICB0aGlzLl91cGRhdGVQbGF5UGF1c2VCdXR0b24oZmFsc2UpOyAvLyDmm7TmlrDmjInpkq7kuLpcIuaSreaUvlwi54q25oCBXHJcbiAgICAgICAgY2MubG9nKFwiW1JlcGxheUNvbnRyb2xsZXJdIOWbnuaUvuW3suWujOaIkO+8jOeCueWHu+aSreaUvuaMiemSruWPr+mHjeaWsOaSreaUvlwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDmkq3mlL4v5pqC5YGc5oyJ6ZKu54q25oCBXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfdXBkYXRlUGxheVBhdXNlQnV0dG9uKGlzUGxheWluZykge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXlQYXVzZUJ1dHRvbikge1xyXG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMucGxheVBhdXNlQnV0dG9uLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIGlmIChsYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gaXNQbGF5aW5nID8gXCLmmoLlgZxcIiA6IFwi5pKt5pS+XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5LuO5pys5Zyw5a2Y5YKo5Yqg6L295bm25Zue5pS+XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0g5a2Y5YKo6ZSu5ZCNXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBoZXJvcyAtIOiLsembhOWIl+ihqFxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gbW9uc3RlcnMgLSDmgKrnianliJfooahcclxuICAgICAqL1xyXG4gICAgbG9hZEFuZFJlcGxheShrZXksIGhlcm9zLCBtb25zdGVycykge1xyXG4gICAgICAgIGNjLmxvZyhgW1JlcGxheUNvbnRyb2xsZXJdID09PT09IOW8gOWni+WKoOi9veW5tuWbnuaUvuaImOaWl+iusOW9lSA9PT09PWApO1xyXG4gICAgICAgIGNjLmxvZyhgW1JlcGxheUNvbnRyb2xsZXJdIOiusOW9lemUruWQjTogJHtrZXl9YCk7XHJcbiAgICAgICAgY2MubG9nKGBbUmVwbGF5Q29udHJvbGxlcl0g6Iux6ZuE5pWw6YePOiAke2hlcm9zID8gaGVyb3MubGVuZ3RoIDogMH1gKTtcclxuICAgICAgICBjYy5sb2coYFtSZXBsYXlDb250cm9sbGVyXSDmgKrnianmlbDph486ICR7bW9uc3RlcnMgPyBtb25zdGVycy5sZW5ndGggOiAwfWApO1xyXG4gICAgICAgIGNjLmxvZyhgW1JlcGxheUNvbnRyb2xsZXJdIHJlcGxheVBhbmVs57uR5a6a54q25oCBOiAke3RoaXMucmVwbGF5UGFuZWwgPyAn5bey57uR5a6aJyA6ICfmnKrnu5HlrponfWApO1xyXG5cclxuICAgICAgICAvLyDor6bnu4bmo4Dmn6VVSeiKgueCueeKtuaAgVxyXG4gICAgICAgIGlmICh0aGlzLnJlcGxheVBhbmVsKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhgW1JlcGxheUNvbnRyb2xsZXJdIHJlcGxheVBhbmVs6IqC54K55L+h5oGvOmApO1xyXG4gICAgICAgICAgICBjYy5sb2coYFtSZXBsYXlDb250cm9sbGVyXSAgIOiKgueCueWQjeensDogJHt0aGlzLnJlcGxheVBhbmVsLm5hbWV9YCk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhgW1JlcGxheUNvbnRyb2xsZXJdICAg5b2T5YmNYWN0aXZlOiAke3RoaXMucmVwbGF5UGFuZWwuYWN0aXZlfWApO1xyXG4gICAgICAgICAgICBjYy5sb2coYFtSZXBsYXlDb250cm9sbGVyXSAgIOW9k+WJjW9wYWNpdHk6ICR7dGhpcy5yZXBsYXlQYW5lbC5vcGFjaXR5fWApO1xyXG4gICAgICAgICAgICBjYy5sb2coYFtSZXBsYXlDb250cm9sbGVyXSAgIOeItuiKgueCuTogJHt0aGlzLnJlcGxheVBhbmVsLnBhcmVudCA/IHRoaXMucmVwbGF5UGFuZWwucGFyZW50Lm5hbWUgOiAn5pegJ31gKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVwbGF5UGFuZWwucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtSZXBsYXlDb250cm9sbGVyXSAgIOeItuiKgueCuWFjdGl2ZTogJHt0aGlzLnJlcGxheVBhbmVsLnBhcmVudC5hY3RpdmV9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihgW1JlcGxheUNvbnRyb2xsZXJdIOKaoO+4jyByZXBsYXlQYW5lbOacque7keWumu+8gWApO1xyXG4gICAgICAgICAgICBjYy5lcnJvcihgW1JlcGxheUNvbnRyb2xsZXJdIOivt+WcqFJlcGxheUNvbnRyb2xsZXLnu4Tku7bkuK3nu5HlrppyZXBsYXlQYW5lbOiKgueCuWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFrZXkpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoYFtSZXBsYXlDb250cm9sbGVyXSDorrDlvZXplK7lkI3kuLrnqbrvvIFgKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5L+d5a2Y6K6w5b2V6ZSu77yM55So5LqO6YeN5paw5pKt5pS+XHJcbiAgICAgICAgdGhpcy5zYXZlZFJlY29yZEtleSA9IGtleTtcclxuXHJcbiAgICAgICAgY29uc3QgQmF0dGxlUmVjb3JkZXIgPSByZXF1aXJlKFwiQmF0dGxlUmVjb3JkZXJcIik7XHJcbiAgICAgICAgY29uc3QgcmVjb3JkZXIgPSBuZXcgQmF0dGxlUmVjb3JkZXIoKTtcclxuICAgICAgICBjb25zdCByZWNvcmQgPSByZWNvcmRlci5sb2FkRnJvbUxvY2FsU3RvcmFnZShrZXkpO1xyXG5cclxuICAgICAgICBpZiAocmVjb3JkKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhgW1JlcGxheUNvbnRyb2xsZXJdIOaIkOWKn+WKoOi9veaImOaWl+iusOW9le+8jOS6i+S7tuaVsOmHjzogJHtyZWNvcmQuZXZlbnRzID8gcmVjb3JkLmV2ZW50cy5sZW5ndGggOiAwfWApO1xyXG4gICAgICAgICAgICAvLyDnoa7kv53lnKjlvIDlp4vlm57mlL7liY1VSeW3suWHhuWkh+WlvVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0UmVwbGF5KHJlY29yZCwgaGVyb3MsIG1vbnN0ZXJzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihgW1JlcGxheUNvbnRyb2xsZXJdIOaXoOazleWKoOi9veaImOaWl+iusOW9lTogJHtrZXl9YCk7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKGBbUmVwbGF5Q29udHJvbGxlcl0g6K+35qOA5p+l6K6w5b2V6ZSu5ZCN5piv5ZCm5q2j56Gu77yM5oiW5oiY5paX6K6w5b2V5piv5ZCm5bey5L+d5a2YYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluW9k+WJjeWcuuaZr+eahOWNleS9jeWIl+ihqFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IOWMheWQq2hlcm9z5ZKMbW9uc3RlcnPnmoTlr7nosaFcclxuICAgICAqL1xyXG4gICAgX2dldEN1cnJlbnRTY2VuZVVuaXRzKCkge1xyXG4gICAgICAgIGNvbnN0IHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuICAgICAgICBpZiAoIXNjZW5lKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCJbUmVwbGF5Q29udHJvbGxlcl0g5pyq5om+5Yiw5Zy65pmvXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4geyBoZXJvczogW10sIG1vbnN0ZXJzOiBbXSB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJhdHRsZUNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuICAgICAgICAvLyDmlrnms5UxOiDlpoLmnpzlt7Lnu4/kv53lrZjkuoYgYmF0dGxlQ29udHJvbGxlcu+8jOebtOaOpeS9v+eUqFxyXG4gICAgICAgIGlmICh0aGlzLmJhdHRsZUNvbnRyb2xsZXIgJiYgdGhpcy5iYXR0bGVDb250cm9sbGVyLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgYmF0dGxlQ29udHJvbGxlciA9IHRoaXMuYmF0dGxlQ29udHJvbGxlcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDmlrnms5UyOiDlnKggQ2FudmFzIOeahOWtkOiKgueCueS4reafpeaJvlxyXG4gICAgICAgICAgICBjb25zdCBjYW52YXMgPSBzY2VuZS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKTtcclxuICAgICAgICAgICAgaWYgKGNhbnZhcykge1xyXG4gICAgICAgICAgICAgICAgLy8g5YWI5bCd6K+V5ZyoIENhbnZhcyDoioLngrnmnKzouqvmn6Xmib7nu4Tku7ZcclxuICAgICAgICAgICAgICAgIGJhdHRsZUNvbnRyb2xsZXIgPSBjYW52YXMuZ2V0Q29tcG9uZW50KFwiQmF0dGxlQ29udHJvbGxlclwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmsqHmib7liLDvvIzlsJ3or5XlnKggQ2FudmFzIOeahOWtkOiKgueCueS4reafpeaJvuWQjeS4uiBcIkJhdHRsZUNvbnRyb2xsZXJcIiDnmoToioLngrlcclxuICAgICAgICAgICAgICAgIGlmICghYmF0dGxlQ29udHJvbGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhdHRsZUNvbnRyb2xsZXJOb2RlID0gY2FudmFzLmdldENoaWxkQnlOYW1lKFwiQmF0dGxlQ29udHJvbGxlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmF0dGxlQ29udHJvbGxlck5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmF0dGxlQ29udHJvbGxlciA9IGJhdHRsZUNvbnRyb2xsZXJOb2RlLmdldENvbXBvbmVudChcIkJhdHRsZUNvbnRyb2xsZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDmlrnms5UzOiDlpoLmnpzov5jmsqHmib7liLDvvIzlnKjlnLrmma/moLnoioLngrnkuK3mn6Xmib5cclxuICAgICAgICAgICAgaWYgKCFiYXR0bGVDb250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYXR0bGVDb250cm9sbGVyTm9kZSA9IHNjZW5lLmdldENoaWxkQnlOYW1lKFwiQmF0dGxlQ29udHJvbGxlclwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChiYXR0bGVDb250cm9sbGVyTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhdHRsZUNvbnRyb2xsZXIgPSBiYXR0bGVDb250cm9sbGVyTm9kZS5nZXRDb21wb25lbnQoXCJCYXR0bGVDb250cm9sbGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDmlrnms5U0OiDpgY3ljoblnLrmma/miYDmnInoioLngrnmn6Xmib7vvIjmnIDlkI7miYvmrrXvvIlcclxuICAgICAgICAgICAgaWYgKCFiYXR0bGVDb250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaW5kQmF0dGxlQ29udHJvbGxlciA9IChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcCA9IG5vZGUuZ2V0Q29tcG9uZW50KFwiQmF0dGxlQ29udHJvbGxlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcCkgcmV0dXJuIGNvbXA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmaW5kQmF0dGxlQ29udHJvbGxlcihjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJhdHRsZUNvbnRyb2xsZXIgPSBmaW5kQmF0dGxlQ29udHJvbGxlcihzY2VuZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIOS/neWtmOW8leeUqOS+m+WQjue7reS9v+eUqFxyXG4gICAgICAgICAgICBpZiAoYmF0dGxlQ29udHJvbGxlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXR0bGVDb250cm9sbGVyID0gYmF0dGxlQ29udHJvbGxlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJhdHRsZUNvbnRyb2xsZXIpIHtcclxuICAgICAgICAgICAgLy8g5LyY5YWI5LuOQmF0dGxlQ29udHJvbGxlci5oZXJvcy9tb25zdGVyc+aVsOe7hOiOt+WPllxyXG4gICAgICAgICAgICBsZXQgaGVyb3MgPSBiYXR0bGVDb250cm9sbGVyLmhlcm9zIHx8IFtdO1xyXG4gICAgICAgICAgICBsZXQgbW9uc3RlcnMgPSBiYXR0bGVDb250cm9sbGVyLm1vbnN0ZXJzIHx8IFtdO1xyXG5cclxuICAgICAgICAgICAgY2MubG9nKGBbUmVwbGF5Q29udHJvbGxlcl0g5om+5YiwQmF0dGxlQ29udHJvbGxlcu+8jOaVsOe7hOS4reeahOWNleS9jTog6Iux6ZuEJHtoZXJvcy5sZW5ndGh95LiqLCDmgKrniakke21vbnN0ZXJzLmxlbmd0aH3kuKpgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOWmguaenOaVsOe7hOS4uuepuu+8jOWwneivleS7juWcuuaZr+iKgueCueS4reebtOaOpeiOt+WPlu+8iOS7jmhlcm9QYXJlbnTlkoxtb25zdGVyUGFyZW5055qE5a2Q6IqC54K577yJXHJcbiAgICAgICAgICAgIGlmIChoZXJvcy5sZW5ndGggPT09IDAgJiYgYmF0dGxlQ29udHJvbGxlci5oZXJvUGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtSZXBsYXlDb250cm9sbGVyXSDoi7Hpm4TmlbDnu4TkuLrnqbrvvIzlsJ3or5Xku45oZXJvUGFyZW505a2Q6IqC54K56I635Y+WYCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZXJvUGFyZW50ID0gYmF0dGxlQ29udHJvbGxlci5oZXJvUGFyZW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKGhlcm9QYXJlbnQgJiYgaGVyb1BhcmVudC5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVyb3MgPSBoZXJvUGFyZW50LmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWPquiOt+WPluacieaViOeahOOAgeaciVN0YXRzQ29tcG9uZW5055qE6IqC54K5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZCAmJiBjaGlsZC5pc1ZhbGlkICYmIGNoaWxkLmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW1JlcGxheUNvbnRyb2xsZXJdIOS7jmhlcm9QYXJlbnTojrflj5bliLAgJHtoZXJvcy5sZW5ndGh9IOS4quiLsembhOiKgueCuWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoZXJvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlcm9OYW1lcyA9IGhlcm9zLm1hcChoID0+IGggPyBoLm5hbWUgOiAnbnVsbCcpLmpvaW4oJywgJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW1JlcGxheUNvbnRyb2xsZXJdIOiLsembhOiKgueCueWIl+ihqDogWyR7aGVyb05hbWVzfV1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChtb25zdGVycy5sZW5ndGggPT09IDAgJiYgYmF0dGxlQ29udHJvbGxlci5tb25zdGVyUGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtSZXBsYXlDb250cm9sbGVyXSDmgKrnianmlbDnu4TkuLrnqbrvvIzlsJ3or5Xku45tb25zdGVyUGFyZW505a2Q6IqC54K56I635Y+WYCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb25zdGVyUGFyZW50ID0gYmF0dGxlQ29udHJvbGxlci5tb25zdGVyUGFyZW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vbnN0ZXJQYXJlbnQgJiYgbW9uc3RlclBhcmVudC5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9uc3RlcnMgPSBtb25zdGVyUGFyZW50LmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWPquiOt+WPluacieaViOeahOOAgeaciVN0YXRzQ29tcG9uZW5055qE6IqC54K5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZCAmJiBjaGlsZC5pc1ZhbGlkICYmIGNoaWxkLmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW1JlcGxheUNvbnRyb2xsZXJdIOS7jm1vbnN0ZXJQYXJlbnTojrflj5bliLAgJHttb25zdGVycy5sZW5ndGh9IOS4quaAqueJqeiKgueCuWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb25zdGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vbnN0ZXJOYW1lcyA9IG1vbnN0ZXJzLm1hcChtID0+IG0gPyBtLm5hbWUgOiAnbnVsbCcpLmpvaW4oJywgJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW1JlcGxheUNvbnRyb2xsZXJdIOaAqueJqeiKgueCueWIl+ihqDogWyR7bW9uc3Rlck5hbWVzfV1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIOivpue7huaXpeW/l++8muWIl+WHuuaJgOacieWNleS9jeWQjeensFxyXG4gICAgICAgICAgICBpZiAoaGVyb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVyb05hbWVzID0gaGVyb3MubWFwKGggPT4gaCA/IGgubmFtZSA6ICdudWxsJykuam9pbignLCAnKTtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhgW1JlcGxheUNvbnRyb2xsZXJdIOacgOe7iOiLsembhOWIl+ihqDogWyR7aGVyb05hbWVzfV1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobW9uc3RlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9uc3Rlck5hbWVzID0gbW9uc3RlcnMubWFwKG0gPT4gbSA/IG0ubmFtZSA6ICdudWxsJykuam9pbignLCAnKTtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhgW1JlcGxheUNvbnRyb2xsZXJdIOacgOe7iOaAqueJqeWIl+ihqDogWyR7bW9uc3Rlck5hbWVzfV1gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGhlcm9zOiBoZXJvcyxcclxuICAgICAgICAgICAgICAgIG1vbnN0ZXJzOiBtb25zdGVyc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2Mud2FybihcIltSZXBsYXlDb250cm9sbGVyXSDinJcg5pyq5om+5YiwQmF0dGxlQ29udHJvbGxlcu+8jOaXoOazleiOt+WPluWNleS9jeWIl+ihqFwiKTtcclxuICAgICAgICBjYy53YXJuKFwiW1JlcGxheUNvbnRyb2xsZXJdIOWPr+iDveeahOWOn+WboO+8mlwiKTtcclxuICAgICAgICBjYy53YXJuKFwiW1JlcGxheUNvbnRyb2xsZXJdICAgMS4gQmF0dGxlQ29udHJvbGxlcue7hOS7tuacquato+ehruaMgui9vVwiKTtcclxuICAgICAgICBjYy53YXJuKFwiW1JlcGxheUNvbnRyb2xsZXJdICAgMi4g5Zy65pmv6L+Y5pyq5a6M5YWo5Yqg6L29XCIpO1xyXG4gICAgICAgIGNjLndhcm4oXCJbUmVwbGF5Q29udHJvbGxlcl0gICAzLiBCYXR0bGVDb250cm9sbGVy6IqC54K55ZCN56ew5LiN5q2j56GuXCIpO1xyXG4gICAgICAgIHJldHVybiB7IGhlcm9zOiBbXSwgbW9uc3RlcnM6IFtdIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pqC5YGcQmF0dGxlU3lzdGVt77yI5Zue5pS+5pe256aB55So5q2j5bi45oiY5paX6YC76L6R77yJXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfcGF1c2VCYXR0bGVTeXN0ZW0oKSB7XHJcbiAgICAgICAgLy8g5aaC5p6c5bey57uP5L+d5a2Y5LqGIGJhdHRsZUNvbnRyb2xsZXLvvIznm7TmjqXkvb/nlKhcclxuICAgICAgICBpZiAodGhpcy5iYXR0bGVDb250cm9sbGVyICYmIHRoaXMuYmF0dGxlQ29udHJvbGxlci5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmF0dGxlQ29udHJvbGxlci5pc1JlcGxheWluZyA9IHRydWU7IC8vIOiuvue9ruWbnuaUvuagh+W/l1xyXG4gICAgICAgICAgICBpZiAodGhpcy5iYXR0bGVTeXN0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmF0dGxlU3lzdGVtLmZpbmlzaGVkID0gdHJ1ZTsgLy8g5Y+M6YeN5L+d6ZmpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MubG9nKFwiW1JlcGxheUNvbnRyb2xsZXJdIOW3suiuvue9ruWbnuaUvuaooeW8j++8jEJhdHRsZVN5c3RlbeW3suemgeeUqFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5ZCm5YiZ6YeN5paw5p+l5om+QmF0dGxlQ29udHJvbGxlclxyXG4gICAgICAgIC8vIEJhdHRsZUNvbnRyb2xsZXIg5Y+v6IO95piv77yaXHJcbiAgICAgICAgLy8gMS4gQ2FudmFzIOeahOWtkOiKgueCue+8iOiKgueCueWQjeS4uiBcIkJhdHRsZUNvbnRyb2xsZXJcIu+8iVxyXG4gICAgICAgIC8vIDIuIOebtOaOpeaMgui9veWcqCBDYW52YXMg5LiK55qE57uE5Lu2XHJcbiAgICAgICAgLy8gMy4g5Zy65pmv5qC56IqC54K555qE5a2Q6IqC54K5XHJcbiAgICAgICAgY29uc3Qgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xyXG4gICAgICAgIGlmICghc2NlbmUpIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIltSZXBsYXlDb250cm9sbGVyXSDmnKrmib7liLDlnLrmma/vvIzml6Dms5XnpoHnlKjmiJjmlpfpgLvovpFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBiYXR0bGVDb250cm9sbGVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8g5pa55rOVMTog5ZyoIENhbnZhcyDnmoTlrZDoioLngrnkuK3mn6Xmib5cclxuICAgICAgICBjb25zdCBjYW52YXMgPSBzY2VuZS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKTtcclxuICAgICAgICBpZiAoY2FudmFzKSB7XHJcbiAgICAgICAgICAgIC8vIOWFiOWwneivleWcqCBDYW52YXMg6IqC54K55pys6Lqr5p+l5om+57uE5Lu2XHJcbiAgICAgICAgICAgIGJhdHRsZUNvbnRyb2xsZXIgPSBjYW52YXMuZ2V0Q29tcG9uZW50KFwiQmF0dGxlQ29udHJvbGxlclwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOWmguaenOayoeaJvuWIsO+8jOWwneivleWcqCBDYW52YXMg55qE5a2Q6IqC54K55Lit5p+l5om+5ZCN5Li6IFwiQmF0dGxlQ29udHJvbGxlclwiIOeahOiKgueCuVxyXG4gICAgICAgICAgICBpZiAoIWJhdHRsZUNvbnRyb2xsZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhdHRsZUNvbnRyb2xsZXJOb2RlID0gY2FudmFzLmdldENoaWxkQnlOYW1lKFwiQmF0dGxlQ29udHJvbGxlclwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChiYXR0bGVDb250cm9sbGVyTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhdHRsZUNvbnRyb2xsZXIgPSBiYXR0bGVDb250cm9sbGVyTm9kZS5nZXRDb21wb25lbnQoXCJCYXR0bGVDb250cm9sbGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmlrnms5UyOiDlpoLmnpzov5jmsqHmib7liLDvvIzlnKjlnLrmma/moLnoioLngrnkuK3mn6Xmib5cclxuICAgICAgICBpZiAoIWJhdHRsZUNvbnRyb2xsZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgYmF0dGxlQ29udHJvbGxlck5vZGUgPSBzY2VuZS5nZXRDaGlsZEJ5TmFtZShcIkJhdHRsZUNvbnRyb2xsZXJcIik7XHJcbiAgICAgICAgICAgIGlmIChiYXR0bGVDb250cm9sbGVyTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgYmF0dGxlQ29udHJvbGxlciA9IGJhdHRsZUNvbnRyb2xsZXJOb2RlLmdldENvbXBvbmVudChcIkJhdHRsZUNvbnRyb2xsZXJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOaWueazlTM6IOmBjeWOhuWcuuaZr+aJgOacieiKgueCueafpeaJvu+8iOacgOWQjuaJi+aute+8iVxyXG4gICAgICAgIGlmICghYmF0dGxlQ29udHJvbGxlcikge1xyXG4gICAgICAgICAgICBjb25zdCBmaW5kQmF0dGxlQ29udHJvbGxlciA9IChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wID0gbm9kZS5nZXRDb21wb25lbnQoXCJCYXR0bGVDb250cm9sbGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXApIHJldHVybiBjb21wO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZpbmRCYXR0bGVDb250cm9sbGVyKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGJhdHRsZUNvbnRyb2xsZXIgPSBmaW5kQmF0dGxlQ29udHJvbGxlcihzY2VuZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmF0dGxlQ29udHJvbGxlcikge1xyXG4gICAgICAgICAgICB0aGlzLmJhdHRsZUNvbnRyb2xsZXIgPSBiYXR0bGVDb250cm9sbGVyO1xyXG4gICAgICAgICAgICB0aGlzLmJhdHRsZVN5c3RlbSA9IGJhdHRsZUNvbnRyb2xsZXIuYmF0dGxlU3lzdGVtO1xyXG5cclxuICAgICAgICAgICAgLy8g5qCH6K6w5Li65Zue5pS+5qih5byP77yM56aB55So5q2j5bi45pu05pawXHJcbiAgICAgICAgICAgIGJhdHRsZUNvbnRyb2xsZXIuaXNSZXBsYXlpbmcgPSB0cnVlOyAvLyDorr7nva7lm57mlL7moIflv5dcclxuICAgICAgICAgICAgY2MubG9nKFwiW1JlcGxheUNvbnRyb2xsZXJdIOW3suaJvuWIsOW5tuiuvue9ruWbnuaUvuaooeW8j++8jEJhdHRsZVN5c3RlbeW3suemgeeUqFwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOWQjOaXtuagh+iusEJhdHRsZVN5c3RlbeS4uue7k+adn+eKtuaAge+8iOWPjOmHjeS/nemZqe+8iVxyXG4gICAgICAgICAgICBpZiAodGhpcy5iYXR0bGVTeXN0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmF0dGxlU3lzdGVtLmZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCJbUmVwbGF5Q29udHJvbGxlcl0g5pyq5om+5YiwQmF0dGxlQ29udHJvbGxlcu+8jOaXoOazleemgeeUqOaImOaWl+mAu+i+kVwiKTtcclxuICAgICAgICAgICAgY2Mud2FybihcIltSZXBsYXlDb250cm9sbGVyXSDor7fnoa7kv51CYXR0bGVDb250cm9sbGVy57uE5Lu25bey5q2j56Gu5oyC6L295Zyo5Zy65pmv5LitXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmgaLlpI1CYXR0bGVTeXN0ZW3vvIjlm57mlL7nu5PmnZ/lkI7mgaLlpI3vvIlcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9yZXN1bWVCYXR0bGVTeXN0ZW0oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmF0dGxlQ29udHJvbGxlcikge1xyXG4gICAgICAgICAgICAvLyDmuIXpmaTlm57mlL7moIflv5dcclxuICAgICAgICAgICAgdGhpcy5iYXR0bGVDb250cm9sbGVyLmlzUmVwbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIltSZXBsYXlDb250cm9sbGVyXSDlt7LmuIXpmaTlm57mlL7mqKHlvI9cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDlgZzmraLmiYDmnInliqjnlLtcclxuICAgICAgICB0aGlzLl9zdG9wQWxsQW5pbWF0aW9ucygpO1xyXG5cclxuICAgICAgICAvLyDms6jmhI/vvJrkuI3mgaLlpI1CYXR0bGVTeXN0ZW3nmoRmaW5pc2hlZOeKtuaAge+8jOWboOS4uuaImOaWl+W3sue7j+e7k+adn1xyXG4gICAgICAgIC8vIOWmguaenOmcgOimgemHjeaWsOW8gOWni+aImOaWl++8jOW6lOivpemHjeaWsOWKoOi9veWcuuaZr1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaaguWBnOaJgOacieato+WcqOi/m+ihjOeahOWKqOeUu++8iOWbnuaUvuaaguWBnOaXtuiwg+eUqO+8iVxyXG4gICAgICog5a6M5YWo5Ya757uT55S76Z2i77ya5YGc5q2i5omA5pyJIHR3ZWVuIOWKqOeUu+OAgVNwaW5lIOWKqOeUu++8jOehruS/neeUu+mdoumdmeatolxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX3BhdXNlQWxsQW5pbWF0aW9ucygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYmF0dGxlQ29udHJvbGxlcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBoZXJvcyA9IHRoaXMuYmF0dGxlQ29udHJvbGxlci5oZXJvcyB8fCBbXTtcclxuICAgICAgICBjb25zdCBtb25zdGVycyA9IHRoaXMuYmF0dGxlQ29udHJvbGxlci5tb25zdGVycyB8fCBbXTtcclxuICAgICAgICBjb25zdCBhbGxVbml0cyA9IFsuLi5oZXJvcywgLi4ubW9uc3RlcnNdO1xyXG5cclxuICAgICAgICBsZXQgc3RvcHBlZENvdW50ID0gMDtcclxuICAgICAgICBsZXQgcGF1c2VkU3BpbmVDb3VudCA9IDA7XHJcblxyXG4gICAgICAgIGFsbFVuaXRzLmZvckVhY2godW5pdCA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1bml0ICYmIHVuaXQuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gMS4g5YGc5q2i5omA5pyJIHR3ZWVuIOWKqOeUu++8iOenu+WKqOOAgee8qeaUvuOAgeaXi+i9rOetie+8iVxyXG4gICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHVuaXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDIuIOWBnOatoiBBdHRhY2tNb3ZlciDnmoTliqjnlLtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dGFja01vdmVyID0gdW5pdC5nZXRDb21wb25lbnQoXCJBdHRhY2tNb3ZlclwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChhdHRhY2tNb3Zlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRhY2tNb3Zlci5pc0F0dGFja2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tNb3Zlci5pc0F0dGFja2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wcGVkQ291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMy4g5pqC5YGcIFNwaW5lIOWKqOeUu++8iOmAmui/h+iuvue9riB0aW1lU2NhbGUgPSAw77yJXHJcbiAgICAgICAgICAgICAgICBjb25zdCBza2VsZXRvbiA9IHVuaXQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICAgICAgICAgIGlmIChza2VsZXRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOS/neWtmOWOn+WniyB0aW1lU2NhbGXvvIjlpoLmnpzov5jmsqHmnInkv53lrZjvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2tlbGV0b24uX29yaWdpbmFsVGltZVNjYWxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2tlbGV0b24uX29yaWdpbmFsVGltZVNjYWxlID0gc2tlbGV0b24udGltZVNjYWxlIHx8IDEuMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5pqC5YGc5Yqo55S777yIdGltZVNjYWxlID0gMCDml7bliqjnlLvlrozlhajlgZzmraLvvIlcclxuICAgICAgICAgICAgICAgICAgICBza2VsZXRvbi50aW1lU2NhbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdXNlZFNwaW5lQ291bnQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyA0LiDlgZzmraLmiYDmnInoioLngrnkuIrnmoQgdHdlZW7vvIjljIXmi6zlrZDoioLngrnvvIlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0b3BUd2Vlbk9uTm9kZSA9IChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BUd2Vlbk9uTm9kZShjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgc3RvcFR3ZWVuT25Ob2RlKHVuaXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNjLmxvZyhgW1JlcGxheUNvbnRyb2xsZXJdIOW3suaaguWBnCAke3N0b3BwZWRDb3VudH0g5Liq5Y2V5L2N55qE5pS75Ye75Yqo55S777yMJHtwYXVzZWRTcGluZUNvdW50fSDkuKrljZXkvY3nmoQgU3BpbmUg5Yqo55S7YCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5oGi5aSN5omA5pyJ5Yqo55S777yI5Zue5pS+57un57ut5pe26LCD55So77yJXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfcmVzdW1lQWxsQW5pbWF0aW9ucygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYmF0dGxlQ29udHJvbGxlcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBoZXJvcyA9IHRoaXMuYmF0dGxlQ29udHJvbGxlci5oZXJvcyB8fCBbXTtcclxuICAgICAgICBjb25zdCBtb25zdGVycyA9IHRoaXMuYmF0dGxlQ29udHJvbGxlci5tb25zdGVycyB8fCBbXTtcclxuICAgICAgICBjb25zdCBhbGxVbml0cyA9IFsuLi5oZXJvcywgLi4ubW9uc3RlcnNdO1xyXG5cclxuICAgICAgICBsZXQgcmVzdW1lZENvdW50ID0gMDtcclxuXHJcbiAgICAgICAgYWxsVW5pdHMuZm9yRWFjaCh1bml0ID0+IHtcclxuICAgICAgICAgICAgaWYgKHVuaXQgJiYgdW5pdC5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmgaLlpI0gU3BpbmUg5Yqo55S755qE5pKt5pS+6YCf5bqmXHJcbiAgICAgICAgICAgICAgICBjb25zdCBza2VsZXRvbiA9IHVuaXQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcclxuICAgICAgICAgICAgICAgIGlmIChza2VsZXRvbiAmJiBza2VsZXRvbi5fb3JpZ2luYWxUaW1lU2NhbGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNrZWxldG9uLnRpbWVTY2FsZSA9IHNrZWxldG9uLl9vcmlnaW5hbFRpbWVTY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2tlbGV0b24uX29yaWdpbmFsVGltZVNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VtZWRDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bWVkQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhgW1JlcGxheUNvbnRyb2xsZXJdIOW3suaBouWkjSAke3Jlc3VtZWRDb3VudH0g5Liq5Y2V5L2N55qEIFNwaW5lIOWKqOeUu2ApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLmiYDmnInliqjnlLvvvIjlm57mlL7lgZzmraLml7bosIPnlKjvvIlcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9zdG9wQWxsQW5pbWF0aW9ucygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYmF0dGxlQ29udHJvbGxlcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBoZXJvcyA9IHRoaXMuYmF0dGxlQ29udHJvbGxlci5oZXJvcyB8fCBbXTtcclxuICAgICAgICBjb25zdCBtb25zdGVycyA9IHRoaXMuYmF0dGxlQ29udHJvbGxlci5tb25zdGVycyB8fCBbXTtcclxuICAgICAgICBjb25zdCBhbGxVbml0cyA9IFsuLi5oZXJvcywgLi4ubW9uc3RlcnNdO1xyXG5cclxuICAgICAgICBsZXQgc3RvcHBlZENvdW50ID0gMDtcclxuICAgICAgICBhbGxVbml0cy5mb3JFYWNoKHVuaXQgPT4ge1xyXG4gICAgICAgICAgICBpZiAodW5pdCAmJiB1bml0LmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dGFja01vdmVyID0gdW5pdC5nZXRDb21wb25lbnQoXCJBdHRhY2tNb3ZlclwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChhdHRhY2tNb3Zlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWBnOatouaJgOacieWKqOeUu+W5tumHjee9rlxyXG4gICAgICAgICAgICAgICAgICAgIGF0dGFja01vdmVyLnN0b3BBdHRhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICBzdG9wcGVkQ291bnQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDlgZzmraLmiYDmnIl0d2VlbuWKqOeUu++8iOWMheaLrOWFtuS7luWPr+iDveeahOWKqOeUu++8iVxyXG4gICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHVuaXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChzdG9wcGVkQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhgW1JlcGxheUNvbnRyb2xsZXJdIOW3suWBnOatoiAke3N0b3BwZWRDb3VudH0g5Liq5Y2V5L2N55qE5Yqo55S7YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbiJdfQ==