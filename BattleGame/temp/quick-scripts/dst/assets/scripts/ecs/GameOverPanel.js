
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ecs/GameOverPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '44aa9xNsL9P7ZRojNTDUczO', 'GameOverPanel');
// Scripts/ecs/GameOverPanel.js

"use strict";

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * 游戏结束面板组件
 * 显示游戏结束画面和胜利信息
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // 游戏结束面板背景
    panelBg: {
      "default": null,
      type: cc.Node,
      tooltip: "游戏结束面板背景节点"
    },
    // 胜利文本标签
    winnerLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "显示胜利方的文本标签"
    },
    // 游戏结束文本标签
    gameOverLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "显示'游戏结束'的文本标签"
    },
    // 重新开始按钮（可选）
    restartButton: {
      "default": null,
      type: cc.Button,
      tooltip: "重新开始按钮（可选）"
    },
    // 返回主菜单按钮（可选）
    menuButton: {
      "default": null,
      type: cc.Button,
      tooltip: "返回主菜单按钮（可选）"
    },
    // 回放按钮（可选）
    replayButton: {
      "default": null,
      type: cc.Button,
      tooltip: "回放按钮（可选）"
    },
    // 显示动画持续时间
    showDuration: {
      "default": 0.5,
      tooltip: "面板显示动画持续时间（秒）"
    }
  },
  onLoad: function onLoad() {
    // 初始隐藏面板（确保完全隐藏）
    if (this.panelBg) {
      this.panelBg.active = false;
      this.panelBg.opacity = 0;
      this.panelBg.scale = 0.5;
    }

    // 确保按钮一开始就显示（在场景加载时就显示，不受panelBg影响）
    this._ensureButtonVisible(this.restartButton, "restartButton");
    this._ensureButtonVisible(this.menuButton, "menuButton");
    this._ensureButtonVisible(this.replayButton, "replayButton");

    // 标记是否已显示（防止重复显示）
    this._isShown = false;

    // 绑定按钮事件
    if (this.restartButton) {
      this.restartButton.node.on(cc.Node.EventType.TOUCH_END, this.onRestartClick, this);
    }
    if (this.menuButton) {
      this.menuButton.node.on(cc.Node.EventType.TOUCH_END, this.onMenuClick, this);
    }
    if (this.replayButton) {
      this.replayButton.node.on(cc.Node.EventType.TOUCH_END, this.onReplayClick, this);
    }
  },
  /**
   * 显示游戏结束画面
   * @param {string} winner - 胜利方名称（"hero" 或 "monster"）
   */
  showGameOver: function showGameOver(winner) {
    var _this = this;
    cc.log("[GameOverPanel] ===== \u5F00\u59CB\u663E\u793A\u6E38\u620F\u7ED3\u675F\u753B\u9762 =====");
    cc.log("[GameOverPanel] winner\u53C2\u6570: " + winner);
    cc.log("[GameOverPanel] panelBg\u8282\u70B9: " + (this.panelBg ? this.panelBg.name : 'null'));
    cc.log("[GameOverPanel] panelBg.active: " + (this.panelBg ? this.panelBg.active : 'N/A'));

    // 防止重复显示
    if (this._isShown) {
      cc.log("[GameOverPanel] 游戏结束画面已显示，跳过重复调用");
      return;
    }
    if (!this.panelBg) {
      cc.error("[GameOverPanel] 未设置 panelBg 节点！");
      cc.error("   请在GameOverPanel组件的属性检查器中绑定panelBg节点");
      return;
    }

    // 确定胜利方显示文本
    var winnerText = "";
    if (winner === "hero" || winner === "英雄") {
      winnerText = "英雄";
    } else if (winner === "monster" || winner === "怪物") {
      winnerText = "怪物";
    } else {
      winnerText = winner || "未知";
    }

    // 更新文本标签
    if (this.winnerLabel) {
      this.winnerLabel.string = winnerText + "\u80DC\u5229\uFF01";
    }
    if (this.gameOverLabel) {
      this.gameOverLabel.string = "游戏结束";
    }

    // 标记已显示
    this._isShown = true;

    // 显示面板（带动画）
    cc.log("[GameOverPanel] \u8BBE\u7F6EpanelBg.active = true");
    this.panelBg.active = true;
    this.panelBg.scale = 0.5;
    this.panelBg.opacity = 0;

    // 确保按钮一直显示（不受panelBg动画影响，且不会消失）
    this._ensureButtonVisible(this.restartButton, "restartButton");
    this._ensureButtonVisible(this.menuButton, "menuButton");
    this._ensureButtonVisible(this.replayButton, "replayButton");

    // 确保面板在最上层（设置到场景最上层）
    if (this.panelBg.parent) {
      this.panelBg.setSiblingIndex(this.panelBg.parent.children.length - 1);
      cc.log("[GameOverPanel] \u9762\u677F\u5C42\u7EA7\u5DF2\u8BBE\u7F6E\u5230\u6700\u4E0A\u5C42");
    }

    // 确保面板可见（设置颜色alpha）
    this.panelBg.color = new cc.Color(255, 255, 255, 255);

    // 淡入和缩放动画（完成后保持显示，不会消失）
    cc.log("[GameOverPanel] \u5F00\u59CB\u64AD\u653E\u663E\u793A\u52A8\u753B");
    cc.tween(this.panelBg).to(this.showDuration, {
      opacity: 255,
      scale: 1.0
    }, {
      easing: 'backOut'
    }).call(function () {
      // 动画完成后，确保面板保持显示状态
      _this.panelBg.opacity = 255;
      _this.panelBg.scale = 1.0;

      // 再次确保按钮一直显示（防止任何意外隐藏）
      _this._ensureButtonVisible(_this.restartButton, "restartButton");
      _this._ensureButtonVisible(_this.menuButton, "menuButton");
      _this._ensureButtonVisible(_this.replayButton, "replayButton");
      cc.log("[GameOverPanel] \u663E\u793A\u52A8\u753B\u5B8C\u6210\uFF0C\u9762\u677F\u548C\u6309\u94AE\u5E94\u8BE5\u5DF2\u663E\u793A\u5E76\u4FDD\u6301\u53EF\u89C1");
    }).start();
    cc.log("[GameOverPanel] \u663E\u793A\u6E38\u620F\u7ED3\u675F\u753B\u9762\uFF1A" + winnerText + "\u80DC\u5229");
    cc.log("[GameOverPanel] panelBg\u6700\u7EC8\u72B6\u6001: active=" + this.panelBg.active + ", opacity=" + this.panelBg.opacity + ", scale=" + this.panelBg.scale);
  },
  /**
   * 隐藏游戏结束画面
   */
  hideGameOver: function hideGameOver() {
    var _this2 = this;
    if (this.panelBg) {
      cc.tween(this.panelBg).to(0.3, {
        opacity: 0,
        scale: 0.5
      }).call(function () {
        _this2.panelBg.active = false;
      }).start();
    }
  },
  /**
   * 重新开始按钮点击事件
   */
  onRestartClick: function onRestartClick() {
    cc.log("[GameOverPanel] 重新开始游戏");
    // 重新加载当前场景
    cc.director.loadScene(cc.director.getScene().name);
  },
  /**
   * 返回主菜单按钮点击事件
   */
  onMenuClick: function onMenuClick() {
    cc.log("[GameOverPanel] 返回主菜单");

    // 检查当前场景，如果在GameOverScene，则跳转到主菜单
    var scene = cc.director.getScene();
    var sceneName = scene ? scene.name : "";
    if (sceneName === "GameOverScene") {
      // 在GameOverScene中，跳转到主菜单场景
      var menuSceneName = "MainMenu";
      cc.log("[GameOverPanel] \u4ECEGameOverScene\u8DF3\u8F6C\u5230\u4E3B\u83DC\u5355\u573A\u666F: " + menuSceneName);
      cc.director.loadScene(menuSceneName, function (error) {
        if (error) {
          cc.error("[GameOverPanel] \u52A0\u8F7D\u4E3B\u83DC\u5355\u573A\u666F\u5931\u8D25: " + error);
          cc.error("[GameOverPanel] \u8BF7\u68C0\u67E5\u573A\u666F\u540D\u79F0\u662F\u5426\u6B63\u786E: " + menuSceneName);
        } else {
          cc.log("[GameOverPanel] \u6210\u529F\u52A0\u8F7D\u4E3B\u83DC\u5355\u573A\u666F: " + menuSceneName);
        }
      });
    } else {
      // 在BattleScene中，也跳转到主菜单场景
      var _menuSceneName = "MainMenu";
      cc.log("[GameOverPanel] \u4ECEBattleScene\u8DF3\u8F6C\u5230\u4E3B\u83DC\u5355\u573A\u666F: " + _menuSceneName);
      cc.director.loadScene(_menuSceneName, function (error) {
        if (error) {
          cc.error("[GameOverPanel] \u52A0\u8F7D\u4E3B\u83DC\u5355\u573A\u666F\u5931\u8D25: " + error);
          cc.error("[GameOverPanel] \u8BF7\u68C0\u67E5\u573A\u666F\u540D\u79F0\u662F\u5426\u6B63\u786E: " + _menuSceneName);
        } else {
          cc.log("[GameOverPanel] \u6210\u529F\u52A0\u8F7D\u4E3B\u83DC\u5355\u573A\u666F: " + _menuSceneName);
        }
      });
    }
  },
  /**
   * 回放按钮点击事件
   * 如果当前在GameOverScene，则跳转回BattleScene并自动开始回放
   * 如果当前在BattleScene，则直接开始回放
   */
  onReplayClick: function onReplayClick() {
    cc.log("[GameOverPanel] 开始回放战斗");

    // 从全局获取最后一场战斗的记录键
    var recordKey = window.LastBattleRecordKey;
    if (!recordKey) {
      cc.error("[GameOverPanel] 未找到战斗记录，无法回放");
      cc.error("   请确保战斗记录已保存（战斗结束后会自动保存）");
      return;
    }

    // 检查当前场景名称
    var currentScene = cc.director.getScene();
    var currentSceneName = currentScene ? currentScene.name : "";
    cc.log("[GameOverPanel] \u5F53\u524D\u573A\u666F: " + currentSceneName);

    // 如果当前在GameOverScene，需要跳转回BattleScene
    if (currentSceneName === "GameOverScene" || currentSceneName.includes("GameOver")) {
      cc.log("[GameOverPanel] \u68C0\u6D4B\u5230\u5728GameOverScene\uFF0C\u51C6\u5907\u8DF3\u8F6C\u56DEBattleScene\u5E76\u5F00\u59CB\u56DE\u653E");

      // 从战斗记录中恢复SelectedUnits数据（用于重新创建单位）
      var BattleRecorder = require("BattleRecorder");
      var recorder = new BattleRecorder();
      var record = recorder.loadFromLocalStorage(recordKey);
      if (record && record.selectedUnits) {
        // 恢复SelectedUnits数据（需要重新获取prefab引用）
        var UnitDataConfig = require("UnitDataConfig");
        var restoreSelectedUnits = function restoreSelectedUnits() {
          var restored = {
            heros: [],
            monsters: []
          };

          // 恢复英雄数据
          if (record.selectedUnits.heros && record.selectedUnits.heros.length > 0) {
            record.selectedUnits.heros.forEach(function (savedData) {
              // 从UnitDataConfig中查找对应的单位数据
              var unitData = UnitDataConfig.heros.find(function (h) {
                return h.name === savedData.name;
              });
              if (unitData) {
                // 合并保存的数据和配置数据（优先使用保存的数据，包括位置信息）
                restored.heros.push(_extends({}, unitData, savedData, {
                  prefab: unitData.prefab,
                  // 使用配置中的prefab
                  icon: unitData.icon,
                  // 使用配置中的icon
                  // 保留位置信息（如果存在）
                  position: savedData.position || null
                }));
                if (savedData.position) {
                  cc.log("[GameOverPanel] \u6062\u590D\u82F1\u96C4\u4F4D\u7F6E: " + savedData.name + " -> (" + savedData.position.x + ", " + savedData.position.y + ")");
                }
              } else {
                cc.warn("[GameOverPanel] \u672A\u627E\u5230\u82F1\u96C4\u914D\u7F6E: " + savedData.name);
              }
            });
          }

          // 恢复怪物数据
          if (record.selectedUnits.monsters && record.selectedUnits.monsters.length > 0) {
            record.selectedUnits.monsters.forEach(function (savedData) {
              // 从UnitDataConfig中查找对应的单位数据
              var unitData = UnitDataConfig.monsters.find(function (m) {
                return m.name === savedData.name;
              });
              if (unitData) {
                // 合并保存的数据和配置数据（优先使用保存的数据，包括位置信息）
                restored.monsters.push(_extends({}, unitData, savedData, {
                  prefab: unitData.prefab,
                  // 使用配置中的prefab
                  icon: unitData.icon,
                  // 使用配置中的icon
                  // 保留位置信息（如果存在）
                  position: savedData.position || null
                }));
                if (savedData.position) {
                  cc.log("[GameOverPanel] \u6062\u590D\u602A\u7269\u4F4D\u7F6E: " + savedData.name + " -> (" + savedData.position.x + ", " + savedData.position.y + ")");
                }
              } else {
                cc.warn("[GameOverPanel] \u672A\u627E\u5230\u602A\u7269\u914D\u7F6E: " + savedData.name);
              }
            });
          }
          return restored;
        };
        var restoredUnits = restoreSelectedUnits();
        if (restoredUnits.heros.length > 0 || restoredUnits.monsters.length > 0) {
          window.SelectedUnits = restoredUnits;
          cc.log("[GameOverPanel] \u2713 \u5DF2\u4ECE\u6218\u6597\u8BB0\u5F55\u6062\u590DSelectedUnits - \u82F1\u96C4: " + restoredUnits.heros.length + "\u4E2A, \u602A\u7269: " + restoredUnits.monsters.length + "\u4E2A");
        } else {
          cc.warn("[GameOverPanel] \u26A0\uFE0F \u6062\u590D\u7684SelectedUnits\u4E3A\u7A7A");
        }
      } else {
        cc.warn("[GameOverPanel] \u26A0\uFE0F \u6218\u6597\u8BB0\u5F55\u4E2D\u6CA1\u6709selectedUnits\u6570\u636E\uFF0C\u5C1D\u8BD5\u4ECEinitialState\u6062\u590D\uFF08\u517C\u5BB9\u65E7\u7248\u672C\uFF09");

        // 兼容旧版本：从initialState恢复单位数据
        if (record && record.initialState) {
          var _UnitDataConfig = require("UnitDataConfig");
          var restored = {
            heros: [],
            monsters: []
          };

          // 从initialState恢复英雄数据
          if (record.initialState.heros && record.initialState.heros.length > 0) {
            record.initialState.heros.forEach(function (initialData) {
              var unitData = _UnitDataConfig.heros.find(function (h) {
                return h.name === initialData.name;
              });
              if (unitData) {
                restored.heros.push(_extends({}, unitData, {
                  hp: initialData.hp || unitData.hp,
                  maxHp: initialData.maxHp || unitData.hp,
                  attack: initialData.attack || unitData.attack,
                  defense: initialData.defense || unitData.defense,
                  speed: initialData.speed || unitData.speed,
                  // 保留位置信息（如果存在）
                  position: initialData.position || null
                }));
                if (initialData.position) {
                  cc.log("[GameOverPanel] \u4ECEinitialState\u6062\u590D\u82F1\u96C4: " + initialData.name + ", \u4F4D\u7F6E: (" + initialData.position.x + ", " + initialData.position.y + ")");
                } else {
                  cc.log("[GameOverPanel] \u4ECEinitialState\u6062\u590D\u82F1\u96C4: " + initialData.name + " (\u65E0\u4F4D\u7F6E\u4FE1\u606F)");
                }
              } else {
                cc.warn("[GameOverPanel] \u672A\u627E\u5230\u82F1\u96C4\u914D\u7F6E: " + initialData.name);
              }
            });
          }

          // 从initialState恢复怪物数据
          if (record.initialState.monsters && record.initialState.monsters.length > 0) {
            record.initialState.monsters.forEach(function (initialData) {
              var unitData = _UnitDataConfig.monsters.find(function (m) {
                return m.name === initialData.name;
              });
              if (unitData) {
                restored.monsters.push(_extends({}, unitData, {
                  hp: initialData.hp || unitData.hp,
                  maxHp: initialData.maxHp || unitData.hp,
                  attack: initialData.attack || unitData.attack,
                  defense: initialData.defense || unitData.defense,
                  speed: initialData.speed || unitData.speed,
                  // 保留位置信息（如果存在）
                  position: initialData.position || null
                }));
                if (initialData.position) {
                  cc.log("[GameOverPanel] \u4ECEinitialState\u6062\u590D\u602A\u7269: " + initialData.name + ", \u4F4D\u7F6E: (" + initialData.position.x + ", " + initialData.position.y + ")");
                } else {
                  cc.log("[GameOverPanel] \u4ECEinitialState\u6062\u590D\u602A\u7269: " + initialData.name + " (\u65E0\u4F4D\u7F6E\u4FE1\u606F)");
                }
              } else {
                cc.warn("[GameOverPanel] \u672A\u627E\u5230\u602A\u7269\u914D\u7F6E: " + initialData.name);
              }
            });
          }
          if (restored.heros.length > 0 || restored.monsters.length > 0) {
            window.SelectedUnits = restored;
            cc.log("[GameOverPanel] \u2713 \u5DF2\u4ECEinitialState\u6062\u590DSelectedUnits - \u82F1\u96C4: " + restored.heros.length + "\u4E2A, \u602A\u7269: " + restored.monsters.length + "\u4E2A");
          } else {
            cc.warn("[GameOverPanel] \u26A0\uFE0F \u4ECEinitialState\u6062\u590D\u7684SelectedUnits\u4E5F\u4E3A\u7A7A");
            cc.warn("[GameOverPanel] \u8BF7\u91CD\u65B0\u6253\u4E00\u573A\u6218\u6597\uFF0C\u65B0\u7684\u6218\u6597\u8BB0\u5F55\u4F1A\u5305\u542BselectedUnits\u6570\u636E");
          }
        } else {
          cc.warn("[GameOverPanel] \u26A0\uFE0F \u6218\u6597\u8BB0\u5F55\u4E2D\u4E5F\u6CA1\u6709initialState\u6570\u636E\uFF0C\u65E0\u6CD5\u6062\u590D\u5355\u4F4D\u9009\u62E9");
          cc.warn("[GameOverPanel] \u8BF7\u91CD\u65B0\u6253\u4E00\u573A\u6218\u6597\uFF0C\u65B0\u7684\u6218\u6597\u8BB0\u5F55\u4F1A\u5305\u542BselectedUnits\u6570\u636E");
        }
      }

      // 设置全局标志，告诉BattleScene需要自动开始回放
      window.AutoStartReplay = {
        recordKey: recordKey,
        enabled: true
      };

      // 跳转回BattleScene
      var battleSceneName = "BattleScene"; // 默认战斗场景名称
      cc.director.loadScene(battleSceneName, function (error) {
        if (error) {
          cc.error("[GameOverPanel] \u52A0\u8F7D\u6218\u6597\u573A\u666F\u5931\u8D25: " + error);
          cc.error("[GameOverPanel] \u8BF7\u68C0\u67E5\u573A\u666F\u540D\u79F0\u662F\u5426\u6B63\u786E: " + battleSceneName);
        } else {
          cc.log("[GameOverPanel] \u6210\u529F\u52A0\u8F7D\u6218\u6597\u573A\u666F: " + battleSceneName);
          cc.log("[GameOverPanel] BattleScene\u52A0\u8F7D\u540E\u4F1A\u81EA\u52A8\u5F00\u59CB\u56DE\u653E");
        }
      });
    } else {
      // 当前在BattleScene，直接开始回放
      cc.log("[GameOverPanel] \u68C0\u6D4B\u5230\u5728BattleScene\uFF0C\u76F4\u63A5\u5F00\u59CB\u56DE\u653E");

      // 获取BattleController和单位列表
      var scene = cc.director.getScene();
      var battleController = null;
      var heros = [];
      var monsters = [];

      // 查找BattleController
      if (scene) {
        var canvas = scene.getChildByName("Canvas");
        if (canvas) {
          battleController = canvas.getComponent("BattleController");
          if (battleController) {
            heros = battleController.heros || [];
            monsters = battleController.monsters || [];
          }
        }
      }

      // 如果找不到BattleController，尝试从场景中查找
      if (!battleController) {
        var allNodes = scene.children;
        for (var _iterator = _createForOfIteratorHelperLoose(allNodes), _step; !(_step = _iterator()).done;) {
          var node = _step.value;
          var bc = node.getComponent("BattleController");
          if (bc) {
            battleController = bc;
            heros = bc.heros || [];
            monsters = bc.monsters || [];
            break;
          }
        }
      }

      // 获取ReplayController
      var replayController = null;
      if (battleController && battleController.replayController) {
        replayController = battleController.replayController.getComponent("ReplayController");
      } else {
        // 尝试从场景中查找ReplayController
        var _canvas = scene.getChildByName("Canvas");
        if (_canvas) {
          var replayNode = _canvas.getChildByName("ReplayController");
          if (replayNode) {
            replayController = replayNode.getComponent("ReplayController");
          }
        }
      }
      if (replayController) {
        cc.log("[GameOverPanel] \u627E\u5230ReplayController\uFF0C\u51C6\u5907\u5F00\u59CB\u56DE\u653E");
        // 使用ReplayController加载并回放
        replayController.loadAndReplay(recordKey, heros, monsters);
        cc.log("[GameOverPanel] \u5F00\u59CB\u56DE\u653E\u6218\u6597\u8BB0\u5F55: " + recordKey);
      } else {
        cc.error("[GameOverPanel] 未找到ReplayController组件，无法回放");
        cc.error("   请在BattleScene中添加ReplayController节点并挂载ReplayController组件");
        cc.error("   或者在BattleController中绑定replayController属性");
      }
    }
  },
  /**
   * 确保按钮完全可见
   * @private
   * @param {cc.Button} button - 按钮组件
   * @param {string} buttonName - 按钮名称（用于日志）
   */
  _ensureButtonVisible: function _ensureButtonVisible(button, buttonName) {
    if (!button || !button.node) {
      return;
    }
    var node = button.node;

    // 1. 确保节点激活
    node.active = true;

    // 2. 确保透明度为255（完全不透明）
    node.opacity = 255;

    // 3. 确保缩放为1（正常大小）
    node.scale = 1;

    // 4. 确保节点颜色不透明
    node.color = new cc.Color(255, 255, 255, 255);

    // 5. 确保Button组件启用
    if (button) {
      button.enabled = true;
      button.interactable = true;
    }

    // 6. 确保Button的过渡状态正常
    if (button && button.transition !== cc.Button.Transition.NONE) {
      // 确保按钮处于正常状态
      button.node.color = new cc.Color(255, 255, 255, 255);
    }

    // 7. 检查并设置按钮内部的Sprite组件（如果有）
    var sprite = node.getComponent(cc.Sprite);
    if (sprite) {
      sprite.enabled = true;
      sprite.node.active = true;
      sprite.node.opacity = 255;
      sprite.node.color = new cc.Color(255, 255, 255, 255);
    }

    // 8. 检查并设置按钮内部的Label组件（如果有）
    var label = node.getComponentInChildren(cc.Label);
    if (label && label.node) {
      label.node.active = true;
      label.node.opacity = 255;
      // 设置按钮文字颜色为黑色
      label.node.color = cc.Color.BLACK;
    }

    // 9. 确保按钮在面板之上（层级）
    if (node.parent) {
      node.setSiblingIndex(node.parent.children.length - 1);
    }

    // 10. 确保按钮可以接收触摸事件
    var buttonComp = node.getComponent(cc.Button);
    if (buttonComp) {
      buttonComp.interactable = true;
    }
    cc.log("[GameOverPanel] " + buttonName + "\u5DF2\u786E\u4FDD\u5B8C\u5168\u53EF\u89C1: active=" + node.active + ", opacity=" + node.opacity + ", scale=" + node.scale + ", color=" + node.color.toString());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxHYW1lT3ZlclBhbmVsLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGFuZWxCZyIsInR5cGUiLCJOb2RlIiwidG9vbHRpcCIsIndpbm5lckxhYmVsIiwiTGFiZWwiLCJnYW1lT3ZlckxhYmVsIiwicmVzdGFydEJ1dHRvbiIsIkJ1dHRvbiIsIm1lbnVCdXR0b24iLCJyZXBsYXlCdXR0b24iLCJzaG93RHVyYXRpb24iLCJvbkxvYWQiLCJhY3RpdmUiLCJvcGFjaXR5Iiwic2NhbGUiLCJfZW5zdXJlQnV0dG9uVmlzaWJsZSIsIl9pc1Nob3duIiwibm9kZSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwib25SZXN0YXJ0Q2xpY2siLCJvbk1lbnVDbGljayIsIm9uUmVwbGF5Q2xpY2siLCJzaG93R2FtZU92ZXIiLCJ3aW5uZXIiLCJfdGhpcyIsImxvZyIsIm5hbWUiLCJlcnJvciIsIndpbm5lclRleHQiLCJzdHJpbmciLCJwYXJlbnQiLCJzZXRTaWJsaW5nSW5kZXgiLCJjaGlsZHJlbiIsImxlbmd0aCIsImNvbG9yIiwiQ29sb3IiLCJ0d2VlbiIsInRvIiwiZWFzaW5nIiwiY2FsbCIsInN0YXJ0IiwiaGlkZUdhbWVPdmVyIiwiX3RoaXMyIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJnZXRTY2VuZSIsInNjZW5lIiwic2NlbmVOYW1lIiwibWVudVNjZW5lTmFtZSIsInJlY29yZEtleSIsIndpbmRvdyIsIkxhc3RCYXR0bGVSZWNvcmRLZXkiLCJjdXJyZW50U2NlbmUiLCJjdXJyZW50U2NlbmVOYW1lIiwiaW5jbHVkZXMiLCJCYXR0bGVSZWNvcmRlciIsInJlcXVpcmUiLCJyZWNvcmRlciIsInJlY29yZCIsImxvYWRGcm9tTG9jYWxTdG9yYWdlIiwic2VsZWN0ZWRVbml0cyIsIlVuaXREYXRhQ29uZmlnIiwicmVzdG9yZVNlbGVjdGVkVW5pdHMiLCJyZXN0b3JlZCIsImhlcm9zIiwibW9uc3RlcnMiLCJmb3JFYWNoIiwic2F2ZWREYXRhIiwidW5pdERhdGEiLCJmaW5kIiwiaCIsInB1c2giLCJfZXh0ZW5kcyIsInByZWZhYiIsImljb24iLCJwb3NpdGlvbiIsIngiLCJ5Iiwid2FybiIsIm0iLCJyZXN0b3JlZFVuaXRzIiwiU2VsZWN0ZWRVbml0cyIsImluaXRpYWxTdGF0ZSIsImluaXRpYWxEYXRhIiwiaHAiLCJtYXhIcCIsImF0dGFjayIsImRlZmVuc2UiLCJzcGVlZCIsIkF1dG9TdGFydFJlcGxheSIsImVuYWJsZWQiLCJiYXR0bGVTY2VuZU5hbWUiLCJiYXR0bGVDb250cm9sbGVyIiwiY2FudmFzIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJhbGxOb2RlcyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJfc3RlcCIsImRvbmUiLCJ2YWx1ZSIsImJjIiwicmVwbGF5Q29udHJvbGxlciIsInJlcGxheU5vZGUiLCJsb2FkQW5kUmVwbGF5IiwiYnV0dG9uIiwiYnV0dG9uTmFtZSIsImludGVyYWN0YWJsZSIsInRyYW5zaXRpb24iLCJUcmFuc2l0aW9uIiwiTk9ORSIsInNwcml0ZSIsIlNwcml0ZSIsImxhYmVsIiwiZ2V0Q29tcG9uZW50SW5DaGlsZHJlbiIsIkJMQUNLIiwiYnV0dG9uQ29tcCIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1I7SUFDQUMsT0FBTyxFQUFFO01BQ0wsV0FBUyxJQUFJO01BQ2JDLElBQUksRUFBRUwsRUFBRSxDQUFDTSxJQUFJO01BQ2JDLE9BQU8sRUFBRTtJQUNiLENBQUM7SUFFRDtJQUNBQyxXQUFXLEVBQUU7TUFDVCxXQUFTLElBQUk7TUFDYkgsSUFBSSxFQUFFTCxFQUFFLENB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O0lBQ0EsSUFBSXJHLElBQUksQ0FBQ2UsTUFBTSxFQUFFO01BQ2JmLElBQUksQ0FBQ2dCLGVBQWUsQ0FBQ2hCLElBQUksQ0FBQ2UsTUFBTSxDQUFDRSxRQUFRLENBQUNDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDekQ7O0lBRUE7SUFDQSxJQUFNb0YsVUFBVSxHQUFHdEcsSUFBSSxDQUFDZ0YsWUFBWSxDQUFDdEcsRUFBRSxDQUFDWSxNQUFNLENBQUM7SUFDL0MsSUFBSWdILFVBQVUsRUFBRTtNQUNaQSxVQUFVLENBQUNULFlBQVksR0FBRyxJQUFJO0lBQ2xDO0lBRUFuSCxFQUFFLENBQUNnQyxHQUFHLHNCQUFvQmtGLFVBQVUsMkRBQW1CNUYsSUFBSSxDQUFDTCxNQUFNLGtCQUFhSyxJQUFJLENBQUNKLE9BQU8sZ0JBQVdJLElBQUksQ0FBQ0gsS0FBSyxnQkFBV0csSUFBSSxDQUFDbUIsS0FBSyxDQUFDb0YsUUFBUSxFQUFFLENBQUc7RUFDdko7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5ri45oiP57uT5p2f6Z2i5p2/57uE5Lu2XG4gKiDmmL7npLrmuLjmiI/nu5PmnZ/nlLvpnaLlkozog5zliKnkv6Hmga9cbiAqL1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8g5ri45oiP57uT5p2f6Z2i5p2/6IOM5pmvXG4gICAgICAgIHBhbmVsQmc6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmuLjmiI/nu5PmnZ/pnaLmnb/og4zmma/oioLngrlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOiDnOWIqeaWh+acrOagh+etvlxuICAgICAgICB3aW5uZXJMYWJlbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmmL7npLrog5zliKnmlrnnmoTmlofmnKzmoIfnrb5cIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOa4uOaIj+e7k+adn+aWh+acrOagh+etvlxuICAgICAgICBnYW1lT3ZlckxhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuaYvuekuifmuLjmiI/nu5PmnZ8n55qE5paH5pys5qCH562+XCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDph43mlrDlvIDlp4vmjInpkq7vvIjlj6/pgInvvIlcbiAgICAgICAgcmVzdGFydEJ1dHRvbjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvbixcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6YeN5paw5byA5aeL5oyJ6ZKu77yI5Y+v6YCJ77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDov5Tlm57kuLvoj5zljZXmjInpkq7vvIjlj6/pgInvvIlcbiAgICAgICAgbWVudUJ1dHRvbjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvbixcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6L+U5Zue5Li76I+c5Y2V5oyJ6ZKu77yI5Y+v6YCJ77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDlm57mlL7mjInpkq7vvIjlj6/pgInvvIlcbiAgICAgICAgcmVwbGF5QnV0dG9uOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLlm57mlL7mjInpkq7vvIjlj6/pgInvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOaYvuekuuWKqOeUu+aMgee7reaXtumXtFxuICAgICAgICBzaG93RHVyYXRpb246IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAuNSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6Z2i5p2/5pi+56S65Yqo55S75oyB57ut5pe26Ze077yI56eS77yJXCJcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIOWIneWni+makOiXj+mdouadv++8iOehruS/neWujOWFqOmakOiXj++8iVxuICAgICAgICBpZiAodGhpcy5wYW5lbEJnKSB7XG4gICAgICAgICAgICB0aGlzLnBhbmVsQmcuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBhbmVsQmcub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICB0aGlzLnBhbmVsQmcuc2NhbGUgPSAwLjU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDnoa7kv53mjInpkq7kuIDlvIDlp4vlsLHmmL7npLrvvIjlnKjlnLrmma/liqDovb3ml7blsLHmmL7npLrvvIzkuI3lj5dwYW5lbEJn5b2x5ZON77yJXG4gICAgICAgIHRoaXMuX2Vuc3VyZUJ1dHRvblZpc2libGUodGhpcy5yZXN0YXJ0QnV0dG9uLCBcInJlc3RhcnRCdXR0b25cIik7XG4gICAgICAgIHRoaXMuX2Vuc3VyZUJ1dHRvblZpc2libGUodGhpcy5tZW51QnV0dG9uLCBcIm1lbnVCdXR0b25cIik7XG4gICAgICAgIHRoaXMuX2Vuc3VyZUJ1dHRvblZpc2libGUodGhpcy5yZXBsYXlCdXR0b24sIFwicmVwbGF5QnV0dG9uXCIpO1xuXG4gICAgICAgIC8vIOagh+iusOaYr+WQpuW3suaYvuekuu+8iOmYsuatoumHjeWkjeaYvuekuu+8iVxuICAgICAgICB0aGlzLl9pc1Nob3duID0gZmFsc2U7XG5cbiAgICAgICAgLy8g57uR5a6a5oyJ6ZKu5LqL5Lu2XG4gICAgICAgIGlmICh0aGlzLnJlc3RhcnRCdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydEJ1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblJlc3RhcnRDbGljaywgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tZW51QnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLm1lbnVCdXR0b24ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25NZW51Q2xpY2ssIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucmVwbGF5QnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLnJlcGxheUJ1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblJlcGxheUNsaWNrLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmmL7npLrmuLjmiI/nu5PmnZ/nlLvpnaJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gd2lubmVyIC0g6IOc5Yip5pa55ZCN56ew77yIXCJoZXJvXCIg5oiWIFwibW9uc3Rlclwi77yJXG4gICAgICovXG4gICAgc2hvd0dhbWVPdmVyKHdpbm5lcikge1xuICAgICAgICBjYy5sb2coYFtHYW1lT3ZlclBhbmVsXSA9PT09PSDlvIDlp4vmmL7npLrmuLjmiI/nu5PmnZ/nlLvpnaIgPT09PT1gKTtcbiAgICAgICAgY2MubG9nKGBbR2FtZU92ZXJQYW5lbF0gd2lubmVy5Y+C5pWwOiAke3dpbm5lcn1gKTtcbiAgICAgICAgY2MubG9nKGBbR2FtZU92ZXJQYW5lbF0gcGFuZWxCZ+iKgueCuTogJHt0aGlzLnBhbmVsQmcgPyB0aGlzLnBhbmVsQmcubmFtZSA6ICdudWxsJ31gKTtcbiAgICAgICAgY2MubG9nKGBbR2FtZU92ZXJQYW5lbF0gcGFuZWxCZy5hY3RpdmU6ICR7dGhpcy5wYW5lbEJnID8gdGhpcy5wYW5lbEJnLmFjdGl2ZSA6ICdOL0EnfWApO1xuXG4gICAgICAgIC8vIOmYsuatoumHjeWkjeaYvuekulxuICAgICAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgICAgICAgY2MubG9nKFwiW0dhbWVPdmVyUGFuZWxdIOa4uOaIj+e7k+adn+eUu+mdouW3suaYvuekuu+8jOi3s+i/h+mHjeWkjeiwg+eUqFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5wYW5lbEJnKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIltHYW1lT3ZlclBhbmVsXSDmnKrorr7nva4gcGFuZWxCZyDoioLngrnvvIFcIik7XG4gICAgICAgICAgICBjYy5lcnJvcihcIiAgIOivt+WcqEdhbWVPdmVyUGFuZWznu4Tku7bnmoTlsZ7mgKfmo4Dmn6XlmajkuK3nu5HlrppwYW5lbEJn6IqC54K5XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g56Gu5a6a6IOc5Yip5pa55pi+56S65paH5pysXG4gICAgICAgIGxldCB3aW5uZXJUZXh0ID0gXCJcIjtcbiAgICAgICAgaWYgKHdpbm5lciA9PT0gXCJoZXJvXCIgfHwgd2lubmVyID09PSBcIuiLsembhFwiKSB7XG4gICAgICAgICAgICB3aW5uZXJUZXh0ID0gXCLoi7Hpm4RcIjtcbiAgICAgICAgfSBlbHNlIGlmICh3aW5uZXIgPT09IFwibW9uc3RlclwiIHx8IHdpbm5lciA9PT0gXCLmgKrnialcIikge1xuICAgICAgICAgICAgd2lubmVyVGV4dCA9IFwi5oCq54mpXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5uZXJUZXh0ID0gd2lubmVyIHx8IFwi5pyq55+lXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmm7TmlrDmlofmnKzmoIfnrb5cbiAgICAgICAgaWYgKHRoaXMud2lubmVyTGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMud2lubmVyTGFiZWwuc3RyaW5nID0gYCR7d2lubmVyVGV4dH3og5zliKnvvIFgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZU92ZXJMYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlckxhYmVsLnN0cmluZyA9IFwi5ri45oiP57uT5p2fXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmoIforrDlt7LmmL7npLpcbiAgICAgICAgdGhpcy5faXNTaG93biA9IHRydWU7XG5cbiAgICAgICAgLy8g5pi+56S66Z2i5p2/77yI5bim5Yqo55S777yJXG4gICAgICAgIGNjLmxvZyhgW0dhbWVPdmVyUGFuZWxdIOiuvue9rnBhbmVsQmcuYWN0aXZlID0gdHJ1ZWApO1xuICAgICAgICB0aGlzLnBhbmVsQmcuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYW5lbEJnLnNjYWxlID0gMC41O1xuICAgICAgICB0aGlzLnBhbmVsQmcub3BhY2l0eSA9IDA7XG5cbiAgICAgICAgLy8g56Gu5L+d5oyJ6ZKu5LiA55u05pi+56S677yI5LiN5Y+XcGFuZWxCZ+WKqOeUu+W9seWTje+8jOS4lOS4jeS8mua2iOWkse+8iVxuICAgICAgICB0aGlzLl9lbnN1cmVCdXR0b25WaXNpYmxlKHRoaXMucmVzdGFydEJ1dHRvbiwgXCJyZXN0YXJ0QnV0dG9uXCIpO1xuICAgICAgICB0aGlzLl9lbnN1cmVCdXR0b25WaXNpYmxlKHRoaXMubWVudUJ1dHRvbiwgXCJtZW51QnV0dG9uXCIpO1xuICAgICAgICB0aGlzLl9lbnN1cmVCdXR0b25WaXNpYmxlKHRoaXMucmVwbGF5QnV0dG9uLCBcInJlcGxheUJ1dHRvblwiKTtcblxuICAgICAgICAvLyDnoa7kv53pnaLmnb/lnKjmnIDkuIrlsYLvvIjorr7nva7liLDlnLrmma/mnIDkuIrlsYLvvIlcbiAgICAgICAgaWYgKHRoaXMucGFuZWxCZy5wYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMucGFuZWxCZy5zZXRTaWJsaW5nSW5kZXgodGhpcy5wYW5lbEJnLnBhcmVudC5jaGlsZHJlbi5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIGNjLmxvZyhgW0dhbWVPdmVyUGFuZWxdIOmdouadv+Wxgue6p+W3suiuvue9ruWIsOacgOS4iuWxgmApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g56Gu5L+d6Z2i5p2/5Y+v6KeB77yI6K6+572u6aKc6ImyYWxwaGHvvIlcbiAgICAgICAgdGhpcy5wYW5lbEJnLmNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSk7XG5cbiAgICAgICAgLy8g5reh5YWl5ZKM57yp5pS+5Yqo55S777yI5a6M5oiQ5ZCO5L+d5oyB5pi+56S677yM5LiN5Lya5raI5aSx77yJXG4gICAgICAgIGNjLmxvZyhgW0dhbWVPdmVyUGFuZWxdIOW8gOWni+aSreaUvuaYvuekuuWKqOeUu2ApO1xuICAgICAgICBjYy50d2Vlbih0aGlzLnBhbmVsQmcpXG4gICAgICAgICAgICAudG8odGhpcy5zaG93RHVyYXRpb24sIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAyNTUsXG4gICAgICAgICAgICAgICAgc2NhbGU6IDEuMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGVhc2luZzogJ2JhY2tPdXQnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIOWKqOeUu+WujOaIkOWQju+8jOehruS/nemdouadv+S/neaMgeaYvuekuueKtuaAgVxuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxCZy5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgICAgIHRoaXMucGFuZWxCZy5zY2FsZSA9IDEuMDtcblxuICAgICAgICAgICAgICAgIC8vIOWGjeasoeehruS/neaMiemSruS4gOebtOaYvuekuu+8iOmYsuatouS7u+S9leaEj+WklumakOiXj++8iVxuICAgICAgICAgICAgICAgIHRoaXMuX2Vuc3VyZUJ1dHRvblZpc2libGUodGhpcy5yZXN0YXJ0QnV0dG9uLCBcInJlc3RhcnRCdXR0b25cIik7XG4gICAgICAgICAgICAgICAgdGhpcy5fZW5zdXJlQnV0dG9uVmlzaWJsZSh0aGlzLm1lbnVCdXR0b24sIFwibWVudUJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9lbnN1cmVCdXR0b25WaXNpYmxlKHRoaXMucmVwbGF5QnV0dG9uLCBcInJlcGxheUJ1dHRvblwiKTtcblxuICAgICAgICAgICAgICAgIGNjLmxvZyhgW0dhbWVPdmVyUGFuZWxdIOaYvuekuuWKqOeUu+WujOaIkO+8jOmdouadv+WSjOaMiemSruW6lOivpeW3suaYvuekuuW5tuS/neaMgeWPr+ingWApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuXG4gICAgICAgIGNjLmxvZyhgW0dhbWVPdmVyUGFuZWxdIOaYvuekuua4uOaIj+e7k+adn+eUu+mdou+8miR7d2lubmVyVGV4dH3og5zliKlgKTtcbiAgICAgICAgY2MubG9nKGBbR2FtZU92ZXJQYW5lbF0gcGFuZWxCZ+acgOe7iOeKtuaAgTogYWN0aXZlPSR7dGhpcy5wYW5lbEJnLmFjdGl2ZX0sIG9wYWNpdHk9JHt0aGlzLnBhbmVsQmcub3BhY2l0eX0sIHNjYWxlPSR7dGhpcy5wYW5lbEJnLnNjYWxlfWApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDpmpDol4/muLjmiI/nu5PmnZ/nlLvpnaJcbiAgICAgKi9cbiAgICBoaWRlR2FtZU92ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhbmVsQmcpIHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMucGFuZWxCZylcbiAgICAgICAgICAgICAgICAudG8oMC4zLCB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiAwLjVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbEJnLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6YeN5paw5byA5aeL5oyJ6ZKu54K55Ye75LqL5Lu2XG4gICAgICovXG4gICAgb25SZXN0YXJ0Q2xpY2soKSB7XG4gICAgICAgIGNjLmxvZyhcIltHYW1lT3ZlclBhbmVsXSDph43mlrDlvIDlp4vmuLjmiI9cIik7XG4gICAgICAgIC8vIOmHjeaWsOWKoOi9veW9k+WJjeWcuuaZr1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6L+U5Zue5Li76I+c5Y2V5oyJ6ZKu54K55Ye75LqL5Lu2XG4gICAgICovXG4gICAgb25NZW51Q2xpY2soKSB7XG4gICAgICAgIGNjLmxvZyhcIltHYW1lT3ZlclBhbmVsXSDov5Tlm57kuLvoj5zljZVcIik7XG5cbiAgICAgICAgLy8g5qOA5p+l5b2T5YmN5Zy65pmv77yM5aaC5p6c5ZyoR2FtZU92ZXJTY2VuZe+8jOWImei3s+i9rOWIsOS4u+iPnOWNlVxuICAgICAgICBjb25zdCBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XG4gICAgICAgIGNvbnN0IHNjZW5lTmFtZSA9IHNjZW5lID8gc2NlbmUubmFtZSA6IFwiXCI7XG5cbiAgICAgICAgaWYgKHNjZW5lTmFtZSA9PT0gXCJHYW1lT3ZlclNjZW5lXCIpIHtcbiAgICAgICAgICAgIC8vIOWcqEdhbWVPdmVyU2NlbmXkuK3vvIzot7PovazliLDkuLvoj5zljZXlnLrmma9cbiAgICAgICAgICAgIGNvbnN0IG1lbnVTY2VuZU5hbWUgPSBcIk1haW5NZW51XCI7XG4gICAgICAgICAgICBjYy5sb2coYFtHYW1lT3ZlclBhbmVsXSDku45HYW1lT3ZlclNjZW5l6Lez6L2s5Yiw5Li76I+c5Y2V5Zy65pmvOiAke21lbnVTY2VuZU5hbWV9YCk7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUobWVudVNjZW5lTmFtZSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbR2FtZU92ZXJQYW5lbF0g5Yqg6L295Li76I+c5Y2V5Zy65pmv5aSx6LSlOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgW0dhbWVPdmVyUGFuZWxdIOivt+ajgOafpeWcuuaZr+WQjeensOaYr+WQpuato+ehrjogJHttZW51U2NlbmVOYW1lfWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0dhbWVPdmVyUGFuZWxdIOaIkOWKn+WKoOi9veS4u+iPnOWNleWcuuaZrzogJHttZW51U2NlbmVOYW1lfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5ZyoQmF0dGxlU2NlbmXkuK3vvIzkuZ/ot7PovazliLDkuLvoj5zljZXlnLrmma9cbiAgICAgICAgICAgIGNvbnN0IG1lbnVTY2VuZU5hbWUgPSBcIk1haW5NZW51XCI7XG4gICAgICAgICAgICBjYy5sb2coYFtHYW1lT3ZlclBhbmVsXSDku45CYXR0bGVTY2VuZei3s+i9rOWIsOS4u+iPnOWNleWcuuaZrzogJHttZW51U2NlbmVOYW1lfWApO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKG1lbnVTY2VuZU5hbWUsIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgW0dhbWVPdmVyUGFuZWxdIOWKoOi9veS4u+iPnOWNleWcuuaZr+Wksei0pTogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtHYW1lT3ZlclBhbmVsXSDor7fmo4Dmn6XlnLrmma/lkI3np7DmmK/lkKbmraPnoa46ICR7bWVudVNjZW5lTmFtZX1gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtHYW1lT3ZlclBhbmVsXSDmiJDlip/liqDovb3kuLvoj5zljZXlnLrmma86ICR7bWVudVNjZW5lTmFtZX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDlm57mlL7mjInpkq7ngrnlh7vkuovku7ZcbiAgICAgKiDlpoLmnpzlvZPliY3lnKhHYW1lT3ZlclNjZW5l77yM5YiZ6Lez6L2s5ZueQmF0dGxlU2NlbmXlubboh6rliqjlvIDlp4vlm57mlL5cbiAgICAgKiDlpoLmnpzlvZPliY3lnKhCYXR0bGVTY2VuZe+8jOWImeebtOaOpeW8gOWni+WbnuaUvlxuICAgICAqL1xuICAgIG9uUmVwbGF5Q2xpY2soKSB7XG4gICAgICAgIGNjLmxvZyhcIltHYW1lT3ZlclBhbmVsXSDlvIDlp4vlm57mlL7miJjmlpdcIik7XG5cbiAgICAgICAgLy8g5LuO5YWo5bGA6I635Y+W5pyA5ZCO5LiA5Zy65oiY5paX55qE6K6w5b2V6ZSuXG4gICAgICAgIGNvbnN0IHJlY29yZEtleSA9IHdpbmRvdy5MYXN0QmF0dGxlUmVjb3JkS2V5O1xuICAgICAgICBpZiAoIXJlY29yZEtleSkge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJbR2FtZU92ZXJQYW5lbF0g5pyq5om+5Yiw5oiY5paX6K6w5b2V77yM5peg5rOV5Zue5pS+XCIpO1xuICAgICAgICAgICAgY2MuZXJyb3IoXCIgICDor7fnoa7kv53miJjmlpforrDlvZXlt7Lkv53lrZjvvIjmiJjmlpfnu5PmnZ/lkI7kvJroh6rliqjkv53lrZjvvIlcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmo4Dmn6XlvZPliY3lnLrmma/lkI3np7BcbiAgICAgICAgY29uc3QgY3VycmVudFNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcbiAgICAgICAgY29uc3QgY3VycmVudFNjZW5lTmFtZSA9IGN1cnJlbnRTY2VuZSA/IGN1cnJlbnRTY2VuZS5uYW1lIDogXCJcIjtcblxuICAgICAgICBjYy5sb2coYFtHYW1lT3ZlclBhbmVsXSDlvZPliY3lnLrmma86ICR7Y3VycmVudFNjZW5lTmFtZX1gKTtcblxuICAgICAgICAvLyDlpoLmnpzlvZPliY3lnKhHYW1lT3ZlclNjZW5l77yM6ZyA6KaB6Lez6L2s5ZueQmF0dGxlU2NlbmVcbiAgICAgICAgaWYgKGN1cnJlbnRTY2VuZU5hbWUgPT09IFwiR2FtZU92ZXJTY2VuZVwiIHx8IGN1cnJlbnRTY2VuZU5hbWUuaW5jbHVkZXMoXCJHYW1lT3ZlclwiKSkge1xuICAgICAgICAgICAgY2MubG9nKGBbR2FtZU92ZXJQYW5lbF0g5qOA5rWL5Yiw5ZyoR2FtZU92ZXJTY2VuZe+8jOWHhuWkh+i3s+i9rOWbnkJhdHRsZVNjZW5l5bm25byA5aeL5Zue5pS+YCk7XG5cbiAgICAgICAgICAgIC8vIOS7juaImOaWl+iusOW9leS4reaBouWkjVNlbGVjdGVkVW5pdHPmlbDmja7vvIjnlKjkuo7ph43mlrDliJvlu7rljZXkvY3vvIlcbiAgICAgICAgICAgIGNvbnN0IEJhdHRsZVJlY29yZGVyID0gcmVxdWlyZShcIkJhdHRsZVJlY29yZGVyXCIpO1xuICAgICAgICAgICAgY29uc3QgcmVjb3JkZXIgPSBuZXcgQmF0dGxlUmVjb3JkZXIoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZCA9IHJlY29yZGVyLmxvYWRGcm9tTG9jYWxTdG9yYWdlKHJlY29yZEtleSk7XG5cbiAgICAgICAgICAgIGlmIChyZWNvcmQgJiYgcmVjb3JkLnNlbGVjdGVkVW5pdHMpIHtcbiAgICAgICAgICAgICAgICAvLyDmgaLlpI1TZWxlY3RlZFVuaXRz5pWw5o2u77yI6ZyA6KaB6YeN5paw6I635Y+WcHJlZmFi5byV55So77yJXG4gICAgICAgICAgICAgICAgY29uc3QgVW5pdERhdGFDb25maWcgPSByZXF1aXJlKFwiVW5pdERhdGFDb25maWdcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdG9yZVNlbGVjdGVkVW5pdHMgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3RvcmVkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVyb3M6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9uc3RlcnM6IFtdXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g5oGi5aSN6Iux6ZuE5pWw5o2uXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuc2VsZWN0ZWRVbml0cy5oZXJvcyAmJiByZWNvcmQuc2VsZWN0ZWRVbml0cy5oZXJvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmQuc2VsZWN0ZWRVbml0cy5oZXJvcy5mb3JFYWNoKHNhdmVkRGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5LuOVW5pdERhdGFDb25maWfkuK3mn6Xmib7lr7nlupTnmoTljZXkvY3mlbDmja5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1bml0RGF0YSA9IFVuaXREYXRhQ29uZmlnLmhlcm9zLmZpbmQoaCA9PiBoLm5hbWUgPT09IHNhdmVkRGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodW5pdERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5ZCI5bm25L+d5a2Y55qE5pWw5o2u5ZKM6YWN572u5pWw5o2u77yI5LyY5YWI5L2/55So5L+d5a2Y55qE5pWw5o2u77yM5YyF5ous5L2N572u5L+h5oGv77yJXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RvcmVkLmhlcm9zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udW5pdERhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zYXZlZERhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmYWI6IHVuaXREYXRhLnByZWZhYiwgLy8g5L2/55So6YWN572u5Lit55qEcHJlZmFiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiB1bml0RGF0YS5pY29uLCAvLyDkvb/nlKjphY3nva7kuK3nmoRpY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDkv53nlZnkvY3nva7kv6Hmga/vvIjlpoLmnpzlrZjlnKjvvIlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzYXZlZERhdGEucG9zaXRpb24gfHwgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNhdmVkRGF0YS5wb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbR2FtZU92ZXJQYW5lbF0g5oGi5aSN6Iux6ZuE5L2N572uOiAke3NhdmVkRGF0YS5uYW1lfSAtPiAoJHtzYXZlZERhdGEucG9zaXRpb24ueH0sICR7c2F2ZWREYXRhLnBvc2l0aW9uLnl9KWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Mud2FybihgW0dhbWVPdmVyUGFuZWxdIOacquaJvuWIsOiLsembhOmFjee9rjogJHtzYXZlZERhdGEubmFtZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIOaBouWkjeaAqueJqeaVsOaNrlxuICAgICAgICAgICAgICAgICAgICBpZiAocmVjb3JkLnNlbGVjdGVkVW5pdHMubW9uc3RlcnMgJiYgcmVjb3JkLnNlbGVjdGVkVW5pdHMubW9uc3RlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkLnNlbGVjdGVkVW5pdHMubW9uc3RlcnMuZm9yRWFjaChzYXZlZERhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOS7jlVuaXREYXRhQ29uZmln5Lit5p+l5om+5a+55bqU55qE5Y2V5L2N5pWw5o2uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5pdERhdGEgPSBVbml0RGF0YUNvbmZpZy5tb25zdGVycy5maW5kKG0gPT4gbS5uYW1lID09PSBzYXZlZERhdGEubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVuaXREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWQiOW5tuS/neWtmOeahOaVsOaNruWSjOmFjee9ruaVsOaNru+8iOS8mOWFiOS9v+eUqOS/neWtmOeahOaVsOaNru+8jOWMheaLrOS9jee9ruS/oeaBr++8iVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN0b3JlZC5tb25zdGVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnVuaXREYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2F2ZWREYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmFiOiB1bml0RGF0YS5wcmVmYWIsIC8vIOS9v+eUqOmFjee9ruS4reeahHByZWZhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogdW5pdERhdGEuaWNvbiwgLy8g5L2/55So6YWN572u5Lit55qEaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5L+d55WZ5L2N572u5L+h5oGv77yI5aaC5p6c5a2Y5Zyo77yJXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogc2F2ZWREYXRhLnBvc2l0aW9uIHx8IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzYXZlZERhdGEucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0dhbWVPdmVyUGFuZWxdIOaBouWkjeaAqueJqeS9jee9rjogJHtzYXZlZERhdGEubmFtZX0gLT4gKCR7c2F2ZWREYXRhLnBvc2l0aW9uLnh9LCAke3NhdmVkRGF0YS5wb3NpdGlvbi55fSlgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLndhcm4oYFtHYW1lT3ZlclBhbmVsXSDmnKrmib7liLDmgKrnianphY3nva46ICR7c2F2ZWREYXRhLm5hbWV9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdG9yZWQ7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3RvcmVkVW5pdHMgPSByZXN0b3JlU2VsZWN0ZWRVbml0cygpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN0b3JlZFVuaXRzLmhlcm9zLmxlbmd0aCA+IDAgfHwgcmVzdG9yZWRVbml0cy5tb25zdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5TZWxlY3RlZFVuaXRzID0gcmVzdG9yZWRVbml0cztcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbR2FtZU92ZXJQYW5lbF0g4pyTIOW3suS7juaImOaWl+iusOW9leaBouWkjVNlbGVjdGVkVW5pdHMgLSDoi7Hpm4Q6ICR7cmVzdG9yZWRVbml0cy5oZXJvcy5sZW5ndGh95LiqLCDmgKrniak6ICR7cmVzdG9yZWRVbml0cy5tb25zdGVycy5sZW5ndGh95LiqYCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2Mud2FybihgW0dhbWVPdmVyUGFuZWxdIOKaoO+4jyDmgaLlpI3nmoRTZWxlY3RlZFVuaXRz5Li656m6YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKGBbR2FtZU92ZXJQYW5lbF0g4pqg77iPIOaImOaWl+iusOW9leS4reayoeaciXNlbGVjdGVkVW5pdHPmlbDmja7vvIzlsJ3or5Xku45pbml0aWFsU3RhdGXmgaLlpI3vvIjlhbzlrrnml6fniYjmnKzvvIlgKTtcblxuICAgICAgICAgICAgICAgIC8vIOWFvOWuueaXp+eJiOacrO+8muS7jmluaXRpYWxTdGF0ZeaBouWkjeWNleS9jeaVsOaNrlxuICAgICAgICAgICAgICAgIGlmIChyZWNvcmQgJiYgcmVjb3JkLmluaXRpYWxTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBVbml0RGF0YUNvbmZpZyA9IHJlcXVpcmUoXCJVbml0RGF0YUNvbmZpZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdG9yZWQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZXJvczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb25zdGVyczogW11cbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAvLyDku45pbml0aWFsU3RhdGXmgaLlpI3oi7Hpm4TmlbDmja5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5pbml0aWFsU3RhdGUuaGVyb3MgJiYgcmVjb3JkLmluaXRpYWxTdGF0ZS5oZXJvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmQuaW5pdGlhbFN0YXRlLmhlcm9zLmZvckVhY2goaW5pdGlhbERhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVuaXREYXRhID0gVW5pdERhdGFDb25maWcuaGVyb3MuZmluZChoID0+IGgubmFtZSA9PT0gaW5pdGlhbERhdGEubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVuaXREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RvcmVkLmhlcm9zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udW5pdERhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocDogaW5pdGlhbERhdGEuaHAgfHwgdW5pdERhdGEuaHAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIcDogaW5pdGlhbERhdGEubWF4SHAgfHwgdW5pdERhdGEuaHAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2s6IGluaXRpYWxEYXRhLmF0dGFjayB8fCB1bml0RGF0YS5hdHRhY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlbnNlOiBpbml0aWFsRGF0YS5kZWZlbnNlIHx8IHVuaXREYXRhLmRlZmVuc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDogaW5pdGlhbERhdGEuc3BlZWQgfHwgdW5pdERhdGEuc3BlZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDkv53nlZnkvY3nva7kv6Hmga/vvIjlpoLmnpzlrZjlnKjvvIlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBpbml0aWFsRGF0YS5wb3NpdGlvbiB8fCBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbERhdGEucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0dhbWVPdmVyUGFuZWxdIOS7jmluaXRpYWxTdGF0ZeaBouWkjeiLsembhDogJHtpbml0aWFsRGF0YS5uYW1lfSwg5L2N572uOiAoJHtpbml0aWFsRGF0YS5wb3NpdGlvbi54fSwgJHtpbml0aWFsRGF0YS5wb3NpdGlvbi55fSlgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0dhbWVPdmVyUGFuZWxdIOS7jmluaXRpYWxTdGF0ZeaBouWkjeiLsembhDogJHtpbml0aWFsRGF0YS5uYW1lfSAo5peg5L2N572u5L+h5oGvKWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Mud2FybihgW0dhbWVPdmVyUGFuZWxdIOacquaJvuWIsOiLsembhOmFjee9rjogJHtpbml0aWFsRGF0YS5uYW1lfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g5LuOaW5pdGlhbFN0YXRl5oGi5aSN5oCq54mp5pWw5o2uXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuaW5pdGlhbFN0YXRlLm1vbnN0ZXJzICYmIHJlY29yZC5pbml0aWFsU3RhdGUubW9uc3RlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkLmluaXRpYWxTdGF0ZS5tb25zdGVycy5mb3JFYWNoKGluaXRpYWxEYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1bml0RGF0YSA9IFVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzLmZpbmQobSA9PiBtLm5hbWUgPT09IGluaXRpYWxEYXRhLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bml0RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN0b3JlZC5tb25zdGVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnVuaXREYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHA6IGluaXRpYWxEYXRhLmhwIHx8IHVuaXREYXRhLmhwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4SHA6IGluaXRpYWxEYXRhLm1heEhwIHx8IHVuaXREYXRhLmhwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrOiBpbml0aWFsRGF0YS5hdHRhY2sgfHwgdW5pdERhdGEuYXR0YWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZW5zZTogaW5pdGlhbERhdGEuZGVmZW5zZSB8fCB1bml0RGF0YS5kZWZlbnNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IGluaXRpYWxEYXRhLnNwZWVkIHx8IHVuaXREYXRhLnNwZWVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5L+d55WZ5L2N572u5L+h5oGv77yI5aaC5p6c5a2Y5Zyo77yJXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbERhdGEucG9zaXRpb24gfHwgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWxEYXRhLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtHYW1lT3ZlclBhbmVsXSDku45pbml0aWFsU3RhdGXmgaLlpI3mgKrniak6ICR7aW5pdGlhbERhdGEubmFtZX0sIOS9jee9rjogKCR7aW5pdGlhbERhdGEucG9zaXRpb24ueH0sICR7aW5pdGlhbERhdGEucG9zaXRpb24ueX0pYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtHYW1lT3ZlclBhbmVsXSDku45pbml0aWFsU3RhdGXmgaLlpI3mgKrniak6ICR7aW5pdGlhbERhdGEubmFtZX0gKOaXoOS9jee9ruS/oeaBrylgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLndhcm4oYFtHYW1lT3ZlclBhbmVsXSDmnKrmib7liLDmgKrnianphY3nva46ICR7aW5pdGlhbERhdGEubmFtZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN0b3JlZC5oZXJvcy5sZW5ndGggPiAwIHx8IHJlc3RvcmVkLm1vbnN0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5TZWxlY3RlZFVuaXRzID0gcmVzdG9yZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtHYW1lT3ZlclBhbmVsXSDinJMg5bey5LuOaW5pdGlhbFN0YXRl5oGi5aSNU2VsZWN0ZWRVbml0cyAtIOiLsembhDogJHtyZXN0b3JlZC5oZXJvcy5sZW5ndGh95LiqLCDmgKrniak6ICR7cmVzdG9yZWQubW9uc3RlcnMubGVuZ3RofeS4qmApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2Mud2FybihgW0dhbWVPdmVyUGFuZWxdIOKaoO+4jyDku45pbml0aWFsU3RhdGXmgaLlpI3nmoRTZWxlY3RlZFVuaXRz5Lmf5Li656m6YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy53YXJuKGBbR2FtZU92ZXJQYW5lbF0g6K+36YeN5paw5omT5LiA5Zy65oiY5paX77yM5paw55qE5oiY5paX6K6w5b2V5Lya5YyF5ZCrc2VsZWN0ZWRVbml0c+aVsOaNrmApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2Mud2FybihgW0dhbWVPdmVyUGFuZWxdIOKaoO+4jyDmiJjmlpforrDlvZXkuK3kuZ/msqHmnIlpbml0aWFsU3RhdGXmlbDmja7vvIzml6Dms5XmgaLlpI3ljZXkvY3pgInmi6lgKTtcbiAgICAgICAgICAgICAgICAgICAgY2Mud2FybihgW0dhbWVPdmVyUGFuZWxdIOivt+mHjeaWsOaJk+S4gOWcuuaImOaWl++8jOaWsOeahOaImOaWl+iusOW9leS8muWMheWQq3NlbGVjdGVkVW5pdHPmlbDmja5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOiuvue9ruWFqOWxgOagh+W/l++8jOWRiuiviUJhdHRsZVNjZW5l6ZyA6KaB6Ieq5Yqo5byA5aeL5Zue5pS+XG4gICAgICAgICAgICB3aW5kb3cuQXV0b1N0YXJ0UmVwbGF5ID0ge1xuICAgICAgICAgICAgICAgIHJlY29yZEtleTogcmVjb3JkS2V5LFxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIOi3s+i9rOWbnkJhdHRsZVNjZW5lXG4gICAgICAgICAgICBjb25zdCBiYXR0bGVTY2VuZU5hbWUgPSBcIkJhdHRsZVNjZW5lXCI7IC8vIOm7mOiupOaImOaWl+WcuuaZr+WQjeensFxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKGJhdHRsZVNjZW5lTmFtZSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbR2FtZU92ZXJQYW5lbF0g5Yqg6L295oiY5paX5Zy65pmv5aSx6LSlOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgW0dhbWVPdmVyUGFuZWxdIOivt+ajgOafpeWcuuaZr+WQjeensOaYr+WQpuato+ehrjogJHtiYXR0bGVTY2VuZU5hbWV9YCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbR2FtZU92ZXJQYW5lbF0g5oiQ5Yqf5Yqg6L295oiY5paX5Zy65pmvOiAke2JhdHRsZVNjZW5lTmFtZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbR2FtZU92ZXJQYW5lbF0gQmF0dGxlU2NlbmXliqDovb3lkI7kvJroh6rliqjlvIDlp4vlm57mlL5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOW9k+WJjeWcqEJhdHRsZVNjZW5l77yM55u05o6l5byA5aeL5Zue5pS+XG4gICAgICAgICAgICBjYy5sb2coYFtHYW1lT3ZlclBhbmVsXSDmo4DmtYvliLDlnKhCYXR0bGVTY2VuZe+8jOebtOaOpeW8gOWni+WbnuaUvmApO1xuXG4gICAgICAgICAgICAvLyDojrflj5ZCYXR0bGVDb250cm9sbGVy5ZKM5Y2V5L2N5YiX6KGoXG4gICAgICAgICAgICBjb25zdCBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XG4gICAgICAgICAgICBsZXQgYmF0dGxlQ29udHJvbGxlciA9IG51bGw7XG4gICAgICAgICAgICBsZXQgaGVyb3MgPSBbXTtcbiAgICAgICAgICAgIGxldCBtb25zdGVycyA9IFtdO1xuXG4gICAgICAgICAgICAvLyDmn6Xmib5CYXR0bGVDb250cm9sbGVyXG4gICAgICAgICAgICBpZiAoc2NlbmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYW52YXMgPSBzY2VuZS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FudmFzKSB7XG4gICAgICAgICAgICAgICAgICAgIGJhdHRsZUNvbnRyb2xsZXIgPSBjYW52YXMuZ2V0Q29tcG9uZW50KFwiQmF0dGxlQ29udHJvbGxlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhdHRsZUNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlcm9zID0gYmF0dGxlQ29udHJvbGxlci5oZXJvcyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnN0ZXJzID0gYmF0dGxlQ29udHJvbGxlci5tb25zdGVycyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5aaC5p6c5om+5LiN5YiwQmF0dGxlQ29udHJvbGxlcu+8jOWwneivleS7juWcuuaZr+S4reafpeaJvlxuICAgICAgICAgICAgaWYgKCFiYXR0bGVDb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxsTm9kZXMgPSBzY2VuZS5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBub2RlIG9mIGFsbE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJjID0gbm9kZS5nZXRDb21wb25lbnQoXCJCYXR0bGVDb250cm9sbGVyXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhdHRsZUNvbnRyb2xsZXIgPSBiYztcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlcm9zID0gYmMuaGVyb3MgfHwgW107XG4gICAgICAgICAgICAgICAgICAgICAgICBtb25zdGVycyA9IGJjLm1vbnN0ZXJzIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOiOt+WPllJlcGxheUNvbnRyb2xsZXJcbiAgICAgICAgICAgIGxldCByZXBsYXlDb250cm9sbGVyID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChiYXR0bGVDb250cm9sbGVyICYmIGJhdHRsZUNvbnRyb2xsZXIucmVwbGF5Q29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgIHJlcGxheUNvbnRyb2xsZXIgPSBiYXR0bGVDb250cm9sbGVyLnJlcGxheUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KFwiUmVwbGF5Q29udHJvbGxlclwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5bCd6K+V5LuO5Zy65pmv5Lit5p+l5om+UmVwbGF5Q29udHJvbGxlclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IHNjZW5lLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xuICAgICAgICAgICAgICAgIGlmIChjYW52YXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVwbGF5Tm9kZSA9IGNhbnZhcy5nZXRDaGlsZEJ5TmFtZShcIlJlcGxheUNvbnRyb2xsZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXBsYXlOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBsYXlDb250cm9sbGVyID0gcmVwbGF5Tm9kZS5nZXRDb21wb25lbnQoXCJSZXBsYXlDb250cm9sbGVyXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVwbGF5Q29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgIGNjLmxvZyhgW0dhbWVPdmVyUGFuZWxdIOaJvuWIsFJlcGxheUNvbnRyb2xsZXLvvIzlh4blpIflvIDlp4vlm57mlL5gKTtcbiAgICAgICAgICAgICAgICAvLyDkvb/nlKhSZXBsYXlDb250cm9sbGVy5Yqg6L295bm25Zue5pS+XG4gICAgICAgICAgICAgICAgcmVwbGF5Q29udHJvbGxlci5sb2FkQW5kUmVwbGF5KHJlY29yZEtleSwgaGVyb3MsIG1vbnN0ZXJzKTtcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtHYW1lT3ZlclBhbmVsXSDlvIDlp4vlm57mlL7miJjmlpforrDlvZU6ICR7cmVjb3JkS2V5fWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIltHYW1lT3ZlclBhbmVsXSDmnKrmib7liLBSZXBsYXlDb250cm9sbGVy57uE5Lu277yM5peg5rOV5Zue5pS+XCIpO1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiICAg6K+35ZyoQmF0dGxlU2NlbmXkuK3mt7vliqBSZXBsYXlDb250cm9sbGVy6IqC54K55bm25oyC6L29UmVwbGF5Q29udHJvbGxlcue7hOS7tlwiKTtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIiAgIOaIluiAheWcqEJhdHRsZUNvbnRyb2xsZXLkuK3nu5HlrppyZXBsYXlDb250cm9sbGVy5bGe5oCnXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOehruS/neaMiemSruWujOWFqOWPr+ingVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtjYy5CdXR0b259IGJ1dHRvbiAtIOaMiemSrue7hOS7tlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBidXR0b25OYW1lIC0g5oyJ6ZKu5ZCN56ew77yI55So5LqO5pel5b+X77yJXG4gICAgICovXG4gICAgX2Vuc3VyZUJ1dHRvblZpc2libGUoYnV0dG9uLCBidXR0b25OYW1lKSB7XG4gICAgICAgIGlmICghYnV0dG9uIHx8ICFidXR0b24ubm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm9kZSA9IGJ1dHRvbi5ub2RlO1xuXG4gICAgICAgIC8vIDEuIOehruS/neiKgueCuea/gOa0u1xuICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgLy8gMi4g56Gu5L+d6YCP5piO5bqm5Li6MjU177yI5a6M5YWo5LiN6YCP5piO77yJXG4gICAgICAgIG5vZGUub3BhY2l0eSA9IDI1NTtcblxuICAgICAgICAvLyAzLiDnoa7kv53nvKnmlL7kuLox77yI5q2j5bi45aSn5bCP77yJXG4gICAgICAgIG5vZGUuc2NhbGUgPSAxO1xuXG4gICAgICAgIC8vIDQuIOehruS/neiKgueCueminOiJsuS4jemAj+aYjlxuICAgICAgICBub2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSk7XG5cbiAgICAgICAgLy8gNS4g56Gu5L+dQnV0dG9u57uE5Lu25ZCv55SoXG4gICAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgICAgIGJ1dHRvbi5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGJ1dHRvbi5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gNi4g56Gu5L+dQnV0dG9u55qE6L+H5rih54q25oCB5q2j5bi4XG4gICAgICAgIGlmIChidXR0b24gJiYgYnV0dG9uLnRyYW5zaXRpb24gIT09IGNjLkJ1dHRvbi5UcmFuc2l0aW9uLk5PTkUpIHtcbiAgICAgICAgICAgIC8vIOehruS/neaMiemSruWkhOS6juato+W4uOeKtuaAgVxuICAgICAgICAgICAgYnV0dG9uLm5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDcuIOajgOafpeW5tuiuvue9ruaMiemSruWGhemDqOeahFNwcml0Zee7hOS7tu+8iOWmguaenOacie+8iVxuICAgICAgICBjb25zdCBzcHJpdGUgPSBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBpZiAoc3ByaXRlKSB7XG4gICAgICAgICAgICBzcHJpdGUuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBzcHJpdGUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgc3ByaXRlLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIHNwcml0ZS5ub2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyA4LiDmo4Dmn6Xlubborr7nva7mjInpkq7lhoXpg6jnmoRMYWJlbOe7hOS7tu+8iOWmguaenOacie+8iVxuICAgICAgICBjb25zdCBsYWJlbCA9IG5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCk7XG4gICAgICAgIGlmIChsYWJlbCAmJiBsYWJlbC5ub2RlKSB7XG4gICAgICAgICAgICBsYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBsYWJlbC5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICAvLyDorr7nva7mjInpkq7mloflrZfpopzoibLkuLrpu5HoibJcbiAgICAgICAgICAgIGxhYmVsLm5vZGUuY29sb3IgPSBjYy5Db2xvci5CTEFDSztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDkuIOehruS/neaMiemSruWcqOmdouadv+S5i+S4iu+8iOWxgue6p++8iVxuICAgICAgICBpZiAobm9kZS5wYXJlbnQpIHtcbiAgICAgICAgICAgIG5vZGUuc2V0U2libGluZ0luZGV4KG5vZGUucGFyZW50LmNoaWxkcmVuLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMTAuIOehruS/neaMiemSruWPr+S7peaOpeaUtuinpuaRuOS6i+S7tlxuICAgICAgICBjb25zdCBidXR0b25Db21wID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgaWYgKGJ1dHRvbkNvbXApIHtcbiAgICAgICAgICAgIGJ1dHRvbkNvbXAuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNjLmxvZyhgW0dhbWVPdmVyUGFuZWxdICR7YnV0dG9uTmFtZX3lt7Lnoa7kv53lrozlhajlj6/op4E6IGFjdGl2ZT0ke25vZGUuYWN0aXZlfSwgb3BhY2l0eT0ke25vZGUub3BhY2l0eX0sIHNjYWxlPSR7bm9kZS5zY2FsZX0sIGNvbG9yPSR7bm9kZS5jb2xvci50b1N0cmluZygpfWApO1xuICAgIH1cbn0pO1xuXG4iXX0=