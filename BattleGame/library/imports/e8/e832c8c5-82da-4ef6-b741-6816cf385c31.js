"use strict";
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