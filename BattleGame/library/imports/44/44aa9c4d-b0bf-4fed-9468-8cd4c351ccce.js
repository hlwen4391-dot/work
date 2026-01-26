"use strict";
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