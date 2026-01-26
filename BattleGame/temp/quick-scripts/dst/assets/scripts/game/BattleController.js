
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/game/BattleController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a2d9edQN8VOjZVGW4gLFEDf', 'BattleController');
// Scripts/game/BattleController.js

"use strict";

var _properties;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var AnimationState = {
  ATTACK: "atk",
  // 攻击动画
  BY_ATK: "byatk",
  // 受击动画
  DIE: "die",
  // 死亡动画
  SHI_HUA: "shihua",
  // 石化动画
  WAIT: "wait" // 待机动画
};

/**
 * 战斗控制器
 * 负责战斗场景的初始化和战斗系统的驱动
 */
cc.Class({
  "extends": cc.Component,
  properties: (_properties = {
    // 英雄节点数组（从场景中直接引用）
    heroNodes: {
      "default": [],
      type: [cc.Node],
      tooltip: "拖入场景中的英雄节点"
    },
    // 怪物节点数组（从场景中直接引用）
    monsterNodes: {
      "default": [],
      type: [cc.Node],
      tooltip: "拖入场景中的怪物节点"
    },
    // 或者使用父节点自动获取（二选一）
    heroParent: {
      "default": null,
      type: cc.Node,
      tooltip: "英雄父节点，自动获取所有子节点作为英雄"
    },
    monsterParent: {
      "default": null,
      type: cc.Node,
      tooltip: "怪物父节点，自动获取所有子节点作为怪物"
    },
    // 是否使用父节点模式
    useParentMode: {
      "default": false,
      tooltip: "true: 从父节点获取子节点 | false: 使用heroNodes和monsterNodes"
    },
    // 是否使用选择场景模式（自动创建节点和排兵布阵）
    useSelectSceneMode: {
      "default": false,
      tooltip: "true: 从SelectScene选择的数据自动创建节点 | false: 使用原有模式"
    },
    // 英雄Prefab（用于自动创建）
    heroPrefab: {
      "default": null,
      type: cc.Prefab,
      tooltip: "英雄Prefab（使用选择场景模式时需要）"
    },
    // 怪物Prefab（用于自动创建）
    monsterPrefab: {
      "default": null,
      type: cc.Prefab,
      tooltip: "怪物Prefab（使用选择场景模式时需要）"
    }
  }, _properties["heroParent"] = {
    "default": null,
    type: cc.Node,
    tooltip: "英雄父节点（用于自动排兵布阵，英雄会放在左边）"
  }, _properties["monsterParent"] = {
    "default": null,
    type: cc.Node,
    tooltip: "怪物父节点（用于自动排兵布阵，怪物会放在右边）"
  }, _properties.heroAreaLeft = {
    "default": -200,
    tooltip: "英雄区域左边界（X坐标）"
  }, _properties.heroAreaRight = {
    "default": 0,
    tooltip: "英雄区域右边界（X坐标）"
  }, _properties.heroAreaTop = {
    "default": 100,
    tooltip: "英雄区域上边界（Y坐标）"
  }, _properties.heroAreaBottom = {
    "default": -100,
    tooltip: "英雄区域下边界（Y坐标）"
  }, _properties.monsterAreaLeft = {
    "default": 0,
    tooltip: "怪物区域左边界（X坐标）"
  }, _properties.monsterAreaRight = {
    "default": 200,
    tooltip: "怪物区域右边界（X坐标）"
  }, _properties.monsterAreaTop = {
    "default": 100,
    tooltip: "怪物区域上边界（Y坐标）"
  }, _properties.monsterAreaBottom = {
    "default": -100,
    tooltip: "怪物区域下边界（Y坐标）"
  }, _properties.unitScale = {
    "default": 1.0,
    tooltip: "单位固定缩放大小（所有单位统一使用此大小）"
  }, _properties.minUnitSpacing = {
    "default": 120,
    tooltip: "单位之间的最小间隔距离（像素），防止重叠和点击误触"
  }, _properties.gameOverPanel = {
    "default": null,
    type: cc.Node,
    tooltip: "游戏结束面板节点（如果使用场景跳转则不需要）"
  }, _properties.enableRecording = {
    "default": true,
    tooltip: "是否启用战斗记录功能"
  }, _properties.heroAvatarContainer = {
    "default": null,
    type: cc.Node,
    tooltip: "左侧英雄头像容器节点（左下角）"
  }, _properties.monsterAvatarContainer = {
    "default": null,
    type: cc.Node,
    tooltip: "右侧怪物头像容器节点（右下角）"
  }, _properties.avatarPrefab = {
    "default": null,
    type: cc.Prefab,
    tooltip: "头像Prefab（用于动态创建头像，与SelectSceneUI使用相同的Prefab）"
  }, _properties.heroIcons = {
    "default": [],
    type: [cc.SpriteFrame],
    tooltip: "英雄头像资源列表（按顺序：战士、法师...，与SelectSceneUI相同）"
  }, _properties.monsterIcons = {
    "default": [],
    type: [cc.SpriteFrame],
    tooltip: "怪物头像资源列表（按顺序：怪物、Boss...，与SelectSceneUI相同）"
  }, _properties.avatarSize = {
    "default": 80,
    tooltip: "头像显示大小（像素）"
  }, _properties.avatarSpacing = {
    "default": 10,
    tooltip: "头像之间的间距（像素）"
  }, _properties.gameOverSceneName = {
    "default": "GameOverScene",
    tooltip: "游戏结束场景名称（如果为空则使用当前场景的gameOverPanel）"
  }, _properties.useSceneTransition = {
    "default": true,
    tooltip: "是否使用场景跳转显示游戏结束画面"
  }, _properties.replayController = {
    "default": null,
    type: cc.Node,
    tooltip: "回放控制器节点（挂载了ReplayController组件）"
  }, _properties),
  onLoad: function onLoad() {
    var _this = this;
    var BattleSystem = require("BattleSystem");
    var BattleLoggers = require("BattleLoggers");
    var mulberry32 = require("random");
    var _require = require("SkillConfig"),
      SkillConfig = _require.SkillConfig;

    // 保存技能配置供后续使用
    this.SkillConfig = SkillConfig;
    this.rand = mulberry32(123456);
    this.logger = new BattleLoggers();
    this.heros = [];
    this.monsters = [];

    // 初始化已生成位置记录（用于防止单位重叠）
    this._generatedPositions = {
      hero: [],
      monster: []
    };

    // 是否正在回放（用于禁用BattleSystem的update）
    this.isReplaying = false;

    // 检查是否使用选择场景模式
    if (window.SelectedUnits && (window.SelectedUnits.heros.length > 0 || window.SelectedUnits.monsters.length > 0)) {
      cc.log("[BattleController] 检测到选择场景数据，使用自动创建节点模式");
      this.useSelectSceneMode = true;
      // 创建单位（从选择场景的数据自动创建）
      this.spawnUnitsFromSelection();
    } else {
      // 创建单位（这是初始化 ECS 组件的关键步骤）
      this.spawnUnits();
    }

    // 游戏结束回调函数
    var onGameOver = function onGameOver(winner, winnerText) {
      cc.log("[BattleController] ===== onGameOver\u56DE\u8C03\u88AB\u8C03\u7528 =====");
      cc.log("[BattleController] winner: " + winner + ", winnerText: " + winnerText);
      _this._onGameOver(winner, winnerText);
    };

    // 创建战斗记录器（如果启用）
    var recorder = null;
    if (this.enableRecording) {
      var BattleRecorder = require("BattleRecorder");
      recorder = new BattleRecorder(); //创建战斗记录器
      this.battleRecorder = recorder; // 保存引用，用于后续访问记录
    }

    // 显示战斗场景头像（从SelectedUnits获取）
    this.scheduleOnce(function () {
      _this.initBattleAvatars();
    }, 0.2);

    // 清除全局数据（在头像显示完成后清除）
    this.scheduleOnce(function () {
      if (window.SelectedUnits) {
        cc.log("[BattleController] 清除window.SelectedUnits");
        window.SelectedUnits = null;
      }
    }, 0.5);

    // 开始更新头像颜色（根据怒气值）
    this.schedule(this._updateAllAvatarColors, 0.1); // 每0.1秒检查一次

    // 创建战斗系统
    this.battleSystem = new BattleSystem(this.heros, this.monsters, this.logger, this.rand, onGameOver, recorder);
    this.lastTime = Date.now();

    // 检查是否需要自动开始回放（从GameOverScene跳转回来时）
    // 增加延迟时间，确保单位创建完成（特别是从SelectScene选择的人物）
    this.scheduleOnce(function () {
      _this._checkAutoReplay();
    }, 0.5); // 延迟0.5秒，确保所有单位都已创建完成
  },
  /**
   * 检查是否需要自动开始回放
   * @private
   */
  _checkAutoReplay: function _checkAutoReplay() {
    if (window.AutoStartReplay && window.AutoStartReplay.enabled) {
      var recordKey = window.AutoStartReplay.recordKey;
      cc.log("[BattleController] \u68C0\u6D4B\u5230\u81EA\u52A8\u56DE\u653E\u6807\u5FD7\uFF0C\u51C6\u5907\u5F00\u59CB\u56DE\u653E: " + recordKey);

      // 获取ReplayController
      var replayController = null;
      if (this.replayController) {
        replayController = this.replayController.getComponent("ReplayController");
      } else {
        // 尝试从场景中查找
        var scene = cc.director.getScene();
        if (scene) {
          var canvas = scene.getChildByName("Canvas");
          if (canvas) {
            var replayNode = canvas.getChildByName("ReplayController");
            if (replayNode) {
              replayController = replayNode.getComponent("ReplayController");
            }
          }
        }
      }
      if (replayController && recordKey) {
        // 确保使用当前场景的单位列表（从SelectScene选择的人物）
        var currentHeros = this.heros || [];
        var currentMonsters = this.monsters || [];
        cc.log("[BattleController] \u5F00\u59CB\u56DE\u653E\uFF0C\u4F7F\u7528\u5F53\u524D\u573A\u666F\u7684\u5355\u4F4D\u5217\u8868 - \u82F1\u96C4: " + currentHeros.length + "\u4E2A, \u602A\u7269: " + currentMonsters.length + "\u4E2A");

        // 开始回放（传入当前场景的单位列表）
        replayController.loadAndReplay(recordKey, currentHeros, currentMonsters);
        cc.log("[BattleController] \u81EA\u52A8\u56DE\u653E\u5DF2\u542F\u52A8");

        // 清除自动回放标志
        window.AutoStartReplay = null;
      } else {
        cc.error("[BattleController] \u65E0\u6CD5\u81EA\u52A8\u5F00\u59CB\u56DE\u653E");
        cc.error("   - ReplayController: " + (replayController ? '找到' : '未找到'));
        cc.error("   - recordKey: " + (recordKey ? recordKey : '不存在'));
      }
    }
  },
  /**
   * 获取场景中的角色节点
   */
  spawnUnits: function spawnUnits() {
    // 根据模式获取节点
    if (this.useParentMode) {
      // 模式1: 从父节点获取子节点
      this._getUnitsFromParent();
    } else {
      // 模式2: 使用预先配置的节点数组
      this._getUnitsFromArray();
    }

    // 为所有角色初始化战斗数据和动画
    // 初始化所有战斗单位（支持异步）
    this._initAllUnits()["catch"](function (err) {
      cc.error("[BattleController] \u521D\u59CB\u5316\u6218\u6597\u5355\u4F4D\u5931\u8D25: " + err.message);
    });
  },
  /**
   * 从选择场景的数据自动创建节点并排兵布阵
   * @private
   */
  spawnUnitsFromSelection: function spawnUnitsFromSelection() {
    var _this2 = this;
    if (!window.SelectedUnits) {
      cc.error("[BattleController] window.SelectedUnits 不存在，无法自动创建节点");
      return;
    }
    var selectedUnits = window.SelectedUnits;
    cc.log("[BattleController] \u5F00\u59CB\u81EA\u52A8\u521B\u5EFA\u8282\u70B9 - \u82F1\u96C4: " + selectedUnits.heros.length + "\u4E2A, \u602A\u7269: " + selectedUnits.monsters.length + "\u4E2A");

    // 创建英雄节点
    if (selectedUnits.heros && selectedUnits.heros.length > 0) {
      if (!this.heroPrefab) {
        cc.error("[BattleController] 未设置heroPrefab，无法创建英雄节点");
      } else {
        selectedUnits.heros.forEach(function (unitData, index) {
          var heroNode = _this2._createUnitNode(unitData, "hero", index, selectedUnits.heros.length);
          if (heroNode) {
            _this2.heros.push(heroNode);
          }
        });
      }
    }

    // 创建怪物节点
    if (selectedUnits.monsters && selectedUnits.monsters.length > 0) {
      if (!this.monsterPrefab) {
        cc.error("[BattleController] 未设置monsterPrefab，无法创建怪物节点");
      } else {
        selectedUnits.monsters.forEach(function (unitData, index) {
          var monsterNode = _this2._createUnitNode(unitData, "monster", index, selectedUnits.monsters.length);
          if (monsterNode) {
            _this2.monsters.push(monsterNode);
          }
        });
      }
    }

    // 为所有角色初始化战斗数据和动画
    // 初始化所有战斗单位（支持异步）
    this._initAllUnits()["catch"](function (err) {
      cc.error("[BattleController] \u521D\u59CB\u5316\u6218\u6597\u5355\u4F4D\u5931\u8D25: " + err.message);
    });
  },
  /**
   * 创建单位节点
   * @private
   * @param {Object} unitData - 单位数据
   * @param {string} team - 队伍类型（"hero" 或 "monster"）
   * @param {number} index - 索引
   * @param {number} totalCount - 总数量
   * @returns {cc.Node} 创建的单位节点
   */
  _createUnitNode: function _createUnitNode(unitData, team, index, totalCount) {
    // 优先使用unitData中的prefab（这是完整的角色Prefab，包含所有组件）
    // 如果没有，再使用通用的heroPrefab/monsterPrefab作为后备
    var prefab = unitData.prefab;
    var prefabSource = "unitData.prefab";
    if (!prefab) {
      // 后备方案：使用通用的Prefab
      prefab = team === "hero" ? this.heroPrefab : this.monsterPrefab;
      prefabSource = team + "Prefab";
      if (!prefab) {
        cc.error("[BattleController] \u2717 \u672A\u8BBE\u7F6E" + team + "Prefab\uFF0C\u4E14unitData.prefab\u4E5F\u4E3A\u7A7A\uFF0C\u65E0\u6CD5\u521B\u5EFA" + team + "\u8282\u70B9");
        cc.error("[BattleController] \u8BF7\u9009\u62E9\u4EE5\u4E0B\u65B9\u6848\u4E4B\u4E00\uFF1A");
        cc.error("[BattleController]   1. \u5728UnitDataConfig\u4E2D\u4E3A\"" + unitData.name + "\"\u8BBE\u7F6Eprefab\uFF08\u63A8\u8350\uFF09");
        cc.error("[BattleController]   2. \u5728BattleController\u7EC4\u4EF6\u4E2D\u7ED1\u5B9A" + team + "Prefab");
        return null;
      } else {
        cc.warn("[BattleController] \u26A0\uFE0F unitData.prefab\u4E3A\u7A7A\uFF0C\u4F7F\u7528\u901A\u7528" + team + "Prefab: " + unitData.name);
        cc.warn("[BattleController]   \u5EFA\u8BAE\uFF1A\u5C06\u573A\u666F\u4E2D\u5B8C\u6574\u7684\"" + unitData.name + "\"\u8282\u70B9\u4FDD\u5B58\u4E3APrefab\uFF0C\u5E76\u5728UnitDataConfig\u4E2D\u7ED1\u5B9A");
      }
    } else {
      cc.log("[BattleController] \u2713 \u4F7F\u7528unitData.prefab\u521B\u5EFA\u8282\u70B9: " + unitData.name);
    }
    cc.log("[BattleController] \u5F00\u59CB\u521B\u5EFA" + team + "\u8282\u70B9: " + unitData.name + " (\u4F7F\u7528" + prefabSource + ")");

    // 实例化Prefab
    var unitNode = cc.instantiate(prefab);
    unitNode.name = unitData.name;

    // 确保节点可见
    unitNode.active = true;
    unitNode.opacity = 255;

    // 设置父节点
    var parent = team === "hero" ? this.heroParent : this.monsterParent;
    if (parent) {
      // 确保父节点可见
      if (!parent.active) {
        cc.warn("[BattleController] \u26A0\uFE0F " + team + "Parent\u672A\u6FC0\u6D3B\uFF0C\u5DF2\u81EA\u52A8\u6FC0\u6D3B");
        parent.active = true;
      }
      if (parent.opacity === 0) {
        cc.warn("[BattleController] \u26A0\uFE0F " + team + "Parent\u900F\u660E\u5EA6\u4E3A0\uFF0C\u5DF2\u8BBE\u7F6E\u4E3A255");
        parent.opacity = 255;
      }
      parent.addChild(unitNode);
      cc.log("[BattleController] " + team + "\u8282\u70B9\u5DF2\u6DFB\u52A0\u5230\u7236\u8282\u70B9: " + parent.name + ", \u7236\u8282\u70B9\u4F4D\u7F6E: (" + parent.x + ", " + parent.y + ")");
    } else {
      // 如果没有父节点，添加到Canvas
      var canvas = cc.find("Canvas");
      if (canvas) {
        canvas.addChild(unitNode);
        cc.log("[BattleController] " + team + "\u8282\u70B9\u5DF2\u6DFB\u52A0\u5230Canvas");
      } else {
        cc.error("[BattleController] \u2717 \u672A\u627E\u5230Canvas\u8282\u70B9\uFF0C\u65E0\u6CD5\u6DFB\u52A0" + team + "\u8282\u70B9");
        return null;
      }
    }

    // 自动排兵布阵（优先使用unitData中的位置，否则使用随机位置）
    var position;
    if (unitData.position && unitData.position.x !== undefined && unitData.position.y !== undefined) {
      // 使用保存的位置（从战斗记录恢复的）
      position = cc.v2(unitData.position.x, unitData.position.y);
      cc.log("[BattleController] \u4F7F\u7528\u4FDD\u5B58\u7684\u4F4D\u7F6E: (" + position.x.toFixed(1) + ", " + position.y.toFixed(1) + ")");
    } else {
      // 使用随机位置（新创建的单位）
      position = this._calculateFormationPosition(team, index, totalCount);
      cc.log("[BattleController] \u4F7F\u7528\u968F\u673A\u4F4D\u7F6E: (" + position.x.toFixed(1) + ", " + position.y.toFixed(1) + ")");
    }
    unitNode.setPosition(position.x, position.y);

    // 设置固定大小
    unitNode.setScale(this.unitScale, this.unitScale, 1.0);
    cc.log("[BattleController] \u8BBE\u7F6E" + team + "\u8282\u70B9\u56FA\u5B9A\u5927\u5C0F: " + this.unitScale + "x" + this.unitScale);

    // 设置初始面向方向
    // 英雄面向右边（正scaleX），怪物面向左边（负scaleX）
    if (team === "hero") {
      unitNode.scaleX = Math.abs(unitNode.scaleX); // 确保为正（面向右边）
    } else {
      unitNode.scaleX = -Math.abs(unitNode.scaleX); // 确保为负（面向左边）
    }

    cc.log("[BattleController] \u8BBE\u7F6E" + team + "\u8282\u70B9\u521D\u59CB\u9762\u5411: scaleX=" + unitNode.scaleX);

    // 保存单位数据到节点（用于后续初始化）
    unitNode._unitData = unitData;
    unitNode._team = team;

    // 检查节点是否有必需的组件
    var stats = unitNode.getComponent("StatsComponent");
    var teamComp = unitNode.getComponent("TeamComponent");
    var skills = unitNode.getComponent("SkillComponent");
    var skeleton = unitNode.getComponent(sp.Skeleton);
    cc.log("[BattleController] " + team + "\u8282\u70B9\u7EC4\u4EF6\u68C0\u67E5: " + unitData.name);
    cc.log("[BattleController]   StatsComponent: " + (stats ? '✓' : '✗'));
    cc.log("[BattleController]   TeamComponent: " + (teamComp ? '✓' : '✗'));
    cc.log("[BattleController]   SkillComponent: " + (skills ? '✓' : '✗'));
    cc.log("[BattleController]   Spine Skeleton: " + (skeleton ? '✓' : '✗'));
    if (!stats) {
      cc.error("[BattleController] \u2717 " + team + "\u8282\u70B9\u7F3A\u5C11StatsComponent\u7EC4\u4EF6: " + unitData.name);
      cc.error("[BattleController]   \u8BF7\u5728Prefab \"" + prefab.name + "\" \u7684\u6839\u8282\u70B9\u4E0A\u6DFB\u52A0StatsComponent\u7EC4\u4EF6");
    }
    if (!teamComp) {
      cc.error("[BattleController] \u2717 " + team + "\u8282\u70B9\u7F3A\u5C11TeamComponent\u7EC4\u4EF6: " + unitData.name);
      cc.error("[BattleController]   \u8BF7\u5728Prefab \"" + prefab.name + "\" \u7684\u6839\u8282\u70B9\u4E0A\u6DFB\u52A0TeamComponent\u7EC4\u4EF6");
    }
    if (!skills) {
      cc.error("[BattleController] \u2717 " + team + "\u8282\u70B9\u7F3A\u5C11SkillComponent\u7EC4\u4EF6: " + unitData.name);
      cc.error("[BattleController]   \u8BF7\u5728Prefab \"" + prefab.name + "\" \u7684\u6839\u8282\u70B9\u4E0A\u6DFB\u52A0SkillComponent\u7EC4\u4EF6");
    }
    if (!skeleton) {
      cc.warn("[BattleController] \u26A0\uFE0F " + team + "\u8282\u70B9\u7F3A\u5C11Spine Skeleton\u7EC4\u4EF6: " + unitData.name);
      cc.warn("[BattleController]   \u8282\u70B9\u53EF\u80FD\u6CA1\u6709\u52A8\u753B\u663E\u793A\uFF0C\u8BF7\u5728Prefab \"" + prefab.name + "\" \u4E0A\u6DFB\u52A0sp.Skeleton\u7EC4\u4EF6");
    } else {
      // 检查Spine资源是否加载
      if (!skeleton.skeletonData) {
        cc.warn("[BattleController] \u26A0\uFE0F " + team + "\u8282\u70B9\u7684Spine Skeleton\u7EC4\u4EF6\u6CA1\u6709skeletonData: " + unitData.name);
      } else {
        cc.log("[BattleController]   Spine\u8D44\u6E90: " + (skeleton.skeletonData.name || '已加载'));
      }
    }

    // 检查节点内容大小
    var contentSize = unitNode.getContentSize();
    if (contentSize.width === 0 && contentSize.height === 0) {
      cc.warn("[BattleController] \u26A0\uFE0F " + team + "\u8282\u70B9\u5185\u5BB9\u5927\u5C0F\u4E3A0: " + unitData.name);
      cc.warn("[BattleController]   \u8FD9\u901A\u5E38\u610F\u5473\u7740\u8282\u70B9\u6CA1\u6709\u89C6\u89C9\u5185\u5BB9\uFF08\u5982Sprite\u6216Spine\uFF09");
      cc.warn("[BattleController]   \u8BF7\u68C0\u67E5Prefab \"" + prefab.name + "\" \u662F\u5426\u6709Sprite\u6216Spine\u5B50\u8282\u70B9");

      // 尝试从子节点获取大小
      var children = unitNode.children;
      if (children && children.length > 0) {
        var maxWidth = 0,
          maxHeight = 0;
        children.forEach(function (child) {
          var childSize = child.getContentSize();
          var childLocalPos = child.getPosition();
          if (childSize.width > maxWidth) maxWidth = childSize.width;
          if (childSize.height > maxHeight) maxHeight = childSize.height;
          cc.log("[BattleController]   \u5B50\u8282\u70B9: " + child.name + ", \u5927\u5C0F: " + childSize.width + "x" + childSize.height + ", \u4F4D\u7F6E: (" + childLocalPos.x + ", " + childLocalPos.y + ")");
        });
        if (maxWidth > 0 || maxHeight > 0) {
          cc.log("[BattleController]   \u5EFA\u8BAE\u8BBE\u7F6E\u8282\u70B9\u5185\u5BB9\u5927\u5C0F: " + maxWidth + "x" + maxHeight);
        }
      } else {
        cc.warn("[BattleController]   Prefab \"" + prefab.name + "\" \u6CA1\u6709\u4EFB\u4F55\u5B50\u8282\u70B9");
      }
    }

    // 最终日志输出
    cc.log("[BattleController] \u2713 \u521B\u5EFA" + team + "\u8282\u70B9\u5B8C\u6210: " + unitData.name);
    cc.log("[BattleController]   \u672C\u5730\u4F4D\u7F6E: (" + position.x.toFixed(1) + ", " + position.y.toFixed(1) + ")");
    cc.log("[BattleController]   \u8282\u70B9\u5927\u5C0F: " + contentSize.width.toFixed(1) + "x" + contentSize.height.toFixed(1));
    cc.log("[BattleController]   \u8282\u70B9active: " + unitNode.active + ", opacity: " + unitNode.opacity);
    if (unitNode.parent) {
      cc.log("[BattleController]   \u7236\u8282\u70B9: " + unitNode.parent.name + ", \u7236\u8282\u70B9\u4F4D\u7F6E: (" + unitNode.parent.x + ", " + unitNode.parent.y + ")");
    }
    return unitNode;
  },
  /**
   * 计算排兵布阵位置（带间隔检查，防止重叠）
   * @private
   * @param {string} team - 队伍类型
   * @param {number} index - 索引
   * @param {number} totalCount - 总数量
   * @returns {cc.Vec2} 位置坐标
   */
  _calculateFormationPosition: function _calculateFormationPosition(team, index, totalCount) {
    var x, y;
    var rangeX, rangeY;
    var areaLeft, areaRight, areaTop, areaBottom;

    // 根据队伍类型确定区域范围
    if (team === "hero") {
      areaLeft = this.heroAreaLeft;
      areaRight = this.heroAreaRight;
      areaTop = this.heroAreaTop;
      areaBottom = this.heroAreaBottom;
    } else {
      areaLeft = this.monsterAreaLeft;
      areaRight = this.monsterAreaRight;
      areaTop = this.monsterAreaTop;
      areaBottom = this.monsterAreaBottom;
    }
    rangeX = areaRight - areaLeft;
    rangeY = areaTop - areaBottom;

    // 检查区域设置是否合理
    if (rangeX <= 0 || rangeY <= 0) {
      cc.warn("[BattleController] \u26A0\uFE0F " + team + "\u533A\u57DF\u8BBE\u7F6E\u4E0D\u5408\u7406: Left=" + areaLeft + ", Right=" + areaRight + ", Top=" + areaTop + ", Bottom=" + areaBottom);
      // 使用默认值
      if (team === "hero") {
        x = -200;
        y = 0;
      } else {
        x = 200;
        y = 0;
      }
      return cc.v2(x, y);
    }

    // 获取该队伍已生成的位置列表
    var existingPositions = this._generatedPositions[team] || [];
    var minSpacing = this.minUnitSpacing || 100; // 最小间隔距离
    var maxAttempts = 100; // 最多尝试次数（增加尝试次数，提高随机分布成功率）

    // 尝试生成一个不与已有位置重叠的位置
    var attempts = 0;
    var validPosition = false;
    while (!validPosition && attempts < maxAttempts) {
      // 生成随机位置（保持原有的随机分布逻辑）
      x = areaLeft + Math.random() * rangeX;
      y = areaBottom + Math.random() * rangeY;

      // 检查是否与已有位置太近
      validPosition = true;
      for (var i = 0; i < existingPositions.length; i++) {
        var existingPos = existingPositions[i];
        var distance = Math.sqrt(Math.pow(x - existingPos.x, 2) + Math.pow(y - existingPos.y, 2));
        if (distance < minSpacing) {
          validPosition = false;
          break;
        }
      }
      attempts++;
    }

    // 如果尝试多次后仍然找不到合适位置，使用改进的后备方案（保持随机分布风格）
    if (!validPosition) {
      cc.warn("[BattleController] \u26A0\uFE0F " + team + "\u5355\u4F4D" + index + "\u65E0\u6CD5\u627E\u5230\u5408\u9002\u4F4D\u7F6E\uFF08\u5C1D\u8BD5" + attempts + "\u6B21\uFF09\uFF0C\u4F7F\u7528\u6539\u8FDB\u7684\u540E\u5907\u65B9\u6848");

      // 改进的后备方案：在已有位置周围寻找空隙，保持随机分布的感觉
      // 如果区域足够大，尝试在已有位置周围寻找空隙
      var foundGap = false;
      var gapAttempts = 30;
      for (var gapAttempt = 0; gapAttempt < gapAttempts && !foundGap; gapAttempt++) {
        // 随机选择一个已有位置作为参考点
        if (existingPositions.length > 0) {
          var refPos = existingPositions[Math.floor(Math.random() * existingPositions.length)];

          // 在参考点周围随机偏移（偏移距离至少为minSpacing）
          var angle = Math.random() * Math.PI * 2;
          var offsetDistance = minSpacing + Math.random() * minSpacing; // 偏移距离：minSpacing 到 2*minSpacing

          x = refPos.x + Math.cos(angle) * offsetDistance;
          y = refPos.y + Math.sin(angle) * offsetDistance;

          // 确保在区域内
          x = Math.max(areaLeft, Math.min(areaRight, x));
          y = Math.max(areaBottom, Math.min(areaTop, y));

          // 检查是否满足间隔要求
          foundGap = true;
          for (var _i = 0; _i < existingPositions.length; _i++) {
            var _existingPos = existingPositions[_i];
            var _distance = Math.sqrt(Math.pow(x - _existingPos.x, 2) + Math.pow(y - _existingPos.y, 2));
            if (_distance < minSpacing) {
              foundGap = false;
              break;
            }
          }
        }
      }

      // 如果仍然找不到空隙，使用简单的网格布局（最后的后备方案）
      if (!foundGap) {
        var gridCols = Math.ceil(Math.sqrt(totalCount)); // 列数
        var gridRows = Math.ceil(totalCount / gridCols); // 行数

        var gridX = index % gridCols;
        var gridY = Math.floor(index / gridCols);

        // 计算网格间距（确保不超过区域范围）
        var gridSpacingX = Math.min(rangeX / (gridCols + 1), minSpacing);
        var gridSpacingY = Math.min(rangeY / (gridRows + 1), minSpacing);

        // 计算网格位置（在各自区域内居中排列，保持左右分离）
        var totalGridWidth = (gridCols - 1) * gridSpacingX;
        var totalGridHeight = (gridRows - 1) * gridSpacingY;
        var startX = areaLeft + (rangeX - totalGridWidth) / 2;
        var startY = areaBottom + (rangeY - totalGridHeight) / 2;
        x = startX + gridX * gridSpacingX;
        y = startY + gridY * gridSpacingY;
        cc.log("[BattleController] " + team + "\u5355\u4F4D" + index + "\u4F7F\u7528\u7F51\u683C\u5E03\u5C40\uFF08\u6700\u540E\u540E\u5907\uFF09: \u7F51\u683C(" + gridX + ", " + gridY + "), \u4F4D\u7F6E: (" + x.toFixed(1) + ", " + y.toFixed(1) + ")");
      } else {
        cc.log("[BattleController] " + team + "\u5355\u4F4D" + index + "\u4F7F\u7528\u7A7A\u9699\u67E5\u627E: \u4F4D\u7F6E: (" + x.toFixed(1) + ", " + y.toFixed(1) + ")");
      }
    } else {
      cc.log("[BattleController] " + team + "\u4F4D\u7F6E\u8BA1\u7B97: \u533A\u57DF[" + areaLeft + ", " + areaRight + "]x[" + areaBottom + ", " + areaTop + "], \u7ED3\u679C: (" + x.toFixed(1) + ", " + y.toFixed(1) + "), \u5C1D\u8BD5\u6B21\u6570: " + attempts);
    }

    // 将新位置添加到已生成位置列表
    var newPosition = cc.v2(x, y);
    if (!this._generatedPositions[team]) {
      this._generatedPositions[team] = [];
    }
    this._generatedPositions[team].push(newPosition);
    return newPosition;
  },
  /**
   * 从父节点获取所有子节点作为战斗单位
   * @private
   */
  _getUnitsFromParent: function _getUnitsFromParent() {
    // 获取英雄
    if (this.heroParent) {
      this.heros = this.heroParent.children.filter(function (child) {
        return child.active;
      });
      cc.log("[BattleController] \u4ECE heroParent \u83B7\u53D6\u5230 " + this.heros.length + " \u4E2A\u82F1\u96C4");
    }

    // 获取怪物
    if (this.monsterParent) {
      this.monsters = this.monsterParent.children.filter(function (child) {
        return child.active;
      });
      cc.log("[BattleController] \u4ECE monsterParent \u83B7\u53D6\u5230 " + this.monsters.length + " \u4E2A\u602A\u7269");
    }
  },
  /**
   * 从配置的节点数组获取战斗单位
   * @private
   */
  _getUnitsFromArray: function _getUnitsFromArray() {
    // 获取英雄（过滤掉无效和未激活的节点）
    this.heros = this.heroNodes.filter(function (node) {
      return node && node.isValid && node.active;
    });
    cc.log("[BattleController] \u4ECE heroNodes \u83B7\u53D6\u5230 " + this.heros.length + " \u4E2A\u82F1\u96C4");

    // 获取怪物
    this.monsters = this.monsterNodes.filter(function (node) {
      return node && node.isValid && node.active;
    });
    cc.log("[BattleController] \u4ECE monsterNodes \u83B7\u53D6\u5230 " + this.monsters.length + " \u4E2A\u602A\u7269");
  },
  /**
   * 初始化所有战斗单位
   * @private
   */
  _initAllUnits: function _initAllUnits() {
    var _this3 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var SkillConfig, unitDataConfig, _iterator, _step, node, data, skeleton, _iterator2, _step2, _node, _data, _skeleton;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            SkillConfig = _this3.SkillConfig; // 角色数据配置（根据名称匹配）
            unitDataConfig = {
              "战士": {
                hp: 120,
                attack: 8,
                defense: 10,
                speed: 12,
                crit: 0.15,
                skills: [SkillConfig.normalAttack, SkillConfig.stunSkill, SkillConfig.shieldAllies]
              },
              "法师": {
                hp: 80,
                attack: 12,
                defense: 4,
                speed: 8,
                crit: 0.1,
                miss: 0.1,
                skills: [SkillConfig.normalAttack, SkillConfig.fireball]
              },
              "怪物": {
                hp: 80,
                attack: 10,
                defense: 5,
                speed: 15,
                skills: [SkillConfig.normalAttack, SkillConfig.beastRage]
              },
              "Boss": {
                hp: 150,
                attack: 12,
                defense: 8,
                speed: 10,
                skills: [SkillConfig.normalAttack, SkillConfig.warCry]
              }
            }; // 初始化英雄
            _iterator = _createForOfIteratorHelperLoose(_this3.heros);
          case 3:
            if ((_step = _iterator()).done) {
              _context.next = 14;
              break;
            }
            node = _step.value;
            // 如果是从选择场景创建的节点，使用保存的单位数据
            data = void 0;
            if (node._unitData) {
              data = node._unitData;
              cc.log("[BattleController] \u4F7F\u7528\u9009\u62E9\u573A\u666F\u7684\u5355\u4F4D\u6570\u636E\u521D\u59CB\u5316: " + node.name);
            } else {
              data = unitDataConfig[node.name] || _this3._getDefaultData();
            }
            _context.next = 9;
            return _this3.initEntity(node, data, "hero");
          case 9:
            // 设置初始待机动画
            skeleton = node.getComponent(sp.Skeleton);
            if (skeleton) {
              skeleton.setAnimation(0, AnimationState.WAIT, true);
            }
            cc.log("[BattleController] \u521D\u59CB\u5316\u82F1\u96C4: " + node.name);
          case 12:
            _context.next = 3;
            break;
          case 14:
            _iterator2 = _createForOfIteratorHelperLoose(_this3.monsters);
          case 15:
            if ((_step2 = _iterator2()).done) {
              _context.next = 26;
              break;
            }
            _node = _step2.value;
            // 如果是从选择场景创建的节点，使用保存的单位数据
            _data = void 0;
            if (_node._unitData) {
              _data = _node._unitData;
              cc.log("[BattleController] \u4F7F\u7528\u9009\u62E9\u573A\u666F\u7684\u5355\u4F4D\u6570\u636E\u521D\u59CB\u5316: " + _node.name);
            } else {
              _data = unitDataConfig[_node.name] || _this3._getDefaultData();
            }
            _context.next = 21;
            return _this3.initEntity(_node, _data, "monster");
          case 21:
            // 设置初始待机动画
            _skeleton = _node.getComponent(sp.Skeleton);
            if (_skeleton) {
              _skeleton.setAnimation(0, AnimationState.WAIT, true);
            }
            cc.log("[BattleController] \u521D\u59CB\u5316\u602A\u7269: " + _node.name);
          case 24:
            _context.next = 15;
            break;
          case 26:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  /**
   * 获取默认数据（如果没有配置）
   * @private
   */
  _getDefaultData: function _getDefaultData() {
    return {
      hp: 100,
      attack: 10,
      defense: 5,
      speed: 10,
      crit: 0.1,
      skills: [this.SkillConfig.normalAttack]
    };
  },
  initEntity: function initEntity(node, data, teamName) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var stats, team, skills, CharacterDataManager, savedData, LevelSystem, initialLevel, initialExp;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            stats = node.getComponent("StatsComponent");
            team = node.getComponent("TeamComponent");
            skills = node.getComponent("SkillComponent"); // 检查必需组件是否存在
            if (stats) {
              _context2.next = 7;
              break;
            }
            cc.error("\u274C [BattleController] \u8282\u70B9 \"" + node.name + "\" \u7F3A\u5C11 StatsComponent \u7EC4\u4EF6!");
            cc.error("   \u8BF7\u5728\u8282\u70B9\u4E0A\u6DFB\u52A0 StatsComponent \u7EC4\u4EF6");
            return _context2.abrupt("return");
          case 7:
            if (team) {
              _context2.next = 11;
              break;
            }
            cc.error("\u274C [BattleController] \u8282\u70B9 \"" + node.name + "\" \u7F3A\u5C11 TeamComponent \u7EC4\u4EF6!");
            cc.error("   \u8BF7\u5728\u8282\u70B9\u4E0A\u6DFB\u52A0 TeamComponent \u7EC4\u4EF6");
            return _context2.abrupt("return");
          case 11:
            if (skills) {
              _context2.next = 15;
              break;
            }
            cc.error("\u274C [BattleController] \u8282\u70B9 \"" + node.name + "\" \u7F3A\u5C11 SkillComponent \u7EC4\u4EF6!");
            cc.error("   \u8BF7\u5728\u8282\u70B9\u4E0A\u6DFB\u52A0 SkillComponent \u7EC4\u4EF6");
            return _context2.abrupt("return");
          case 15:
            // 重要：先加载保存的等级数据，以便正确设置基础属性
            CharacterDataManager = require("CharacterDataManager");
            _context2.next = 18;
            return CharacterDataManager.loadCharacterLevel(data.name || node.name);
          case 18:
            savedData = _context2.sent;
            // 如果有保存的基础属性数据，优先使用保存的基础属性（用于正确计算等级加成）
            if (savedData) {
              if (savedData.baseHp) stats.baseHp = savedData.baseHp;
              if (savedData.baseAttack) stats.baseAttack = savedData.baseAttack;
              if (savedData.baseDefense) stats.baseDefense = savedData.baseDefense;
              if (savedData.baseSpeed) stats.baseSpeed = savedData.baseSpeed;
              if (savedData.baseCrit !== undefined) stats.baseCrit = savedData.baseCrit;
              if (savedData.baseMiss !== undefined) stats.baseMiss = savedData.baseMiss;
            } else {
              // 如果没有保存的数据，使用data中的基础属性
              if (data.hp) stats.baseHp = data.hp;
              if (data.attack) stats.baseAttack = data.attack;
              if (data.defense) stats.baseDefense = data.defense;
              if (data.speed) stats.baseSpeed = data.speed;
              if (data.crit !== undefined) stats.baseCrit = data.crit;
              if (data.miss !== undefined) stats.baseMiss = data.miss;
            }

            // 强制设置最大怒气值为120（覆盖Prefab中的默认值）
            stats.maxRage = 120;
            stats.rage = 0; // 重置当前怒气值

            // 初始化等级系统（必须在设置其他属性之前，因为等级加成会重新计算所有属性）
            // 重要：使用data.name（角色原始名称）来加载保存的等级数据
            LevelSystem = require("LevelSystem"); // 如果有保存的数据，使用保存的等级和经验值；否则使用传入的值或默认值
            initialLevel = savedData ? savedData.level || data.level || 1 : data.level || 1;
            initialExp = savedData ? savedData.exp || data.exp || 0 : data.exp || 0; // 初始化等级（不自动从存储加载，因为我们已经手动加载了）
            // 这会调用_applyLevelBonus，根据等级计算实际属性值（maxHp, attack等）
            LevelSystem.initLevel(node, initialLevel, initialExp, false);

            // 设置当前生命值为最大生命值（满血）
            stats.hp = stats.maxHp;

            // 设置其他特殊属性（这些属性不受等级加成影响）
            if (stats.immune === 0 && data.immune !== undefined) {
              stats.immune = data.immune;
            }

            // 保存原始角色名称（用于后续保存数据）
            if (data.name) {
              node._originalCharacterName = data.name;
            }

            // 初始化技能
            if (data.skills && data.skills.length > 0) {
              skills.init(data.skills);
            }

            // 设置队伍
            team.team = teamName;

            // 初始化血条显示（可能不存在血条组件）
            if (stats.updateHealthBar) {
              stats.updateHealthBar();
            }
            cc.log("\u2705 [BattleController] " + node.name + " \u521D\u59CB\u5316\u6210\u529F (" + teamName + ") - Lv." + stats.level + ", HP:" + stats.hp + ", ATK:" + stats.attack + ", DEF:" + stats.defense + ", SPD:" + stats.speed);
          case 33:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  update: function update() {
    // 如果正在回放，不执行BattleSystem的update（避免冲突）
    if (this.isReplaying) {
      return;
    }
    if (!this.battleSystem || this.battleSystem.finished) return;
    var now = Date.now();
    var dt = (now - this.lastTime) / 1000;
    this.lastTime = now;
    this.battleSystem.update(dt);
  },
  /**
   * 游戏结束处理
   * @param {string} winner - 胜利方（"hero" 或 "monster"）
   * @param {string} winnerText - 胜利方文本（"英雄" 或 "怪物"）
   * @private
   */
  _onGameOver: function _onGameOver(winner, winnerText) {
    cc.log("[BattleController] ===== _onGameOver\u65B9\u6CD5\u88AB\u8C03\u7528 =====");
    cc.log("[BattleController] \u6E38\u620F\u7ED3\u675F\uFF1A" + winnerText + "\u80DC\u5229");
    cc.log("[BattleController] winner\u53C2\u6570\u503C: \"" + winner + "\"");
    cc.log("[BattleController] \u5F53\u524D\u82F1\u96C4\u6570\u91CF: " + this.heros.length + ", \u602A\u7269\u6570\u91CF: " + this.monsters.length);
    cc.log("[BattleController] useSceneTransition=" + this.useSceneTransition + ", gameOverSceneName=\"" + this.gameOverSceneName + "\"");

    // 给胜利方的存活单位添加经验值
    var LevelSystem = require("LevelSystem");
    var expReward = 200; // 基础经验奖励（可以根据难度调整）

    cc.log("[BattleController] \u68C0\u67E5\u80DC\u5229\u6761\u4EF6: winner === \"hero\" ? " + (winner === "hero"));
    if (winner === "hero") {
      // 英雄胜利，给所有参战的英雄添加经验值（包括死亡的）
      cc.log("[BattleController] ===== \u82F1\u96C4\u80DC\u5229\uFF0C\u5F00\u59CB\u5206\u914D\u7ECF\u9A8C\u503C =====");
      cc.log("[BattleController] \u7ECF\u9A8C\u5956\u52B1: " + expReward + " \u70B9/\u4EBA\uFF08\u5305\u62EC\u6B7B\u4EA1\u7684\u5355\u4F4D\uFF09");
      this.heros.forEach(function (hero, index) {
        cc.log("[BattleController] \u5904\u7406\u82F1\u96C4[" + index + "]: " + hero.name);
        var stats = hero.getComponent("StatsComponent");
        cc.log("[BattleController] StatsComponent\u5B58\u5728: " + !!stats);
        if (stats) {
          cc.log("[BattleController] " + hero.name + " \u662F\u5426\u6B7B\u4EA1: " + stats.isDead());
          cc.log("[BattleController] " + hero.name + " \u5F53\u524D\u7B49\u7EA7: " + stats.level + ", \u5F53\u524D\u7ECF\u9A8C: " + stats.exp);
        }
        if (stats) {
          // 不管是否死亡，都给经验值
          var statusText = stats.isDead() ? "（已死亡）" : "（存活）";
          cc.log("[BattleController] \u2705 \u7ED9 " + hero.name + statusText + " \u6DFB\u52A0 " + expReward + " \u70B9\u7ECF\u9A8C\u503C");
          var result = LevelSystem.addExp(hero, expReward);
          cc.log("[BattleController] addExp\u8FD4\u56DE\u7ED3\u679C:", result);
          if (result && result.leveledUp) {
            cc.log("[BattleController] \uD83C\uDF89 " + hero.name + " \u5347\u7EA7\u5230 " + result.newLevel + " \u7EA7\uFF01");
            cc.log("[BattleController] \u5C5E\u6027\u53D8\u5316:", result.statChanges);
          } else if (result) {
            cc.log("[BattleController] " + hero.name + " \u83B7\u5F97\u7ECF\u9A8C\u503C\uFF0C\u5F53\u524D\u7B49\u7EA7: " + result.newLevel + ", \u7ECF\u9A8C: " + stats.exp);
          } else {
            cc.warn("[BattleController] " + hero.name + " addExp\u8FD4\u56DEnull\uFF01");
          }
        } else {
          cc.warn("[BattleController] " + hero.name + " \u6CA1\u6709StatsComponent\u7EC4\u4EF6\uFF0C\u4E0D\u83B7\u5F97\u7ECF\u9A8C\u503C");
        }
      });
      cc.log("[BattleController] ===== \u82F1\u96C4\u7ECF\u9A8C\u503C\u5206\u914D\u5B8C\u6210 =====");
    } else if (winner === "monster") {
      // 怪物胜利，给所有参战的怪物添加经验值（包括死亡的）
      cc.log("[BattleController] ===== \u602A\u7269\u80DC\u5229\uFF0C\u5F00\u59CB\u5206\u914D\u7ECF\u9A8C\u503C =====");
      cc.log("[BattleController] \u7ECF\u9A8C\u5956\u52B1: " + expReward + " \u70B9/\u4EBA\uFF08\u5305\u62EC\u6B7B\u4EA1\u7684\u5355\u4F4D\uFF09");
      this.monsters.forEach(function (monster, index) {
        cc.log("[BattleController] \u5904\u7406\u602A\u7269[" + index + "]: " + monster.name);
        var stats = monster.getComponent("StatsComponent");
        cc.log("[BattleController] StatsComponent\u5B58\u5728: " + !!stats);
        if (stats) {
          cc.log("[BattleController] " + monster.name + " \u662F\u5426\u6B7B\u4EA1: " + stats.isDead());
          cc.log("[BattleController] " + monster.name + " \u5F53\u524D\u7B49\u7EA7: " + stats.level + ", \u5F53\u524D\u7ECF\u9A8C: " + stats.exp);
        }
        if (stats) {
          // 不管是否死亡，都给经验值
          var statusText = stats.isDead() ? "（已死亡）" : "（存活）";
          cc.log("[BattleController] \u2705 \u7ED9 " + monster.name + statusText + " \u6DFB\u52A0 " + expReward + " \u70B9\u7ECF\u9A8C\u503C");
          var result = LevelSystem.addExp(monster, expReward);
          cc.log("[BattleController] addExp\u8FD4\u56DE\u7ED3\u679C:", result);
          if (result && result.leveledUp) {
            cc.log("[BattleController] \uD83C\uDF89 " + monster.name + " \u5347\u7EA7\u5230 " + result.newLevel + " \u7EA7\uFF01");
            cc.log("[BattleController] \u5C5E\u6027\u53D8\u5316:", result.statChanges);
          } else if (result) {
            cc.log("[BattleController] " + monster.name + " \u83B7\u5F97\u7ECF\u9A8C\u503C\uFF0C\u5F53\u524D\u7B49\u7EA7: " + result.newLevel + ", \u7ECF\u9A8C: " + stats.exp);
          } else {
            cc.warn("[BattleController] " + monster.name + " addExp\u8FD4\u56DEnull\uFF01");
          }
        } else {
          cc.warn("[BattleController] " + monster.name + " \u6CA1\u6709StatsComponent\u7EC4\u4EF6\uFF0C\u4E0D\u83B7\u5F97\u7ECF\u9A8C\u503C");
        }
      });
      cc.log("[BattleController] ===== \u602A\u7269\u7ECF\u9A8C\u503C\u5206\u914D\u5B8C\u6210 =====");
    }

    // 记录游戏结束事件并保存战斗记录
    if (this.battleRecorder) {
      this.battleRecorder.recordEvent("gameOver", {
        winner: winner,
        winnerText: winnerText
      });
      this.battleRecorder.stopRecording();

      // 保存战斗记录到本地存储
      var recordKey = "battle_replay_" + Date.now();
      this.battleRecorder.saveToLocalStorage(recordKey);
      cc.log("[BattleController] \u6218\u6597\u8BB0\u5F55\u5DF2\u4FDD\u5B58: " + recordKey);

      // 将记录键保存到全局，供GameOverPanel使用
      window.LastBattleRecordKey = recordKey;
    }

    // 根据设置选择显示方式
    if (this.useSceneTransition && this.gameOverSceneName) {
      // 方式1: 跳转到游戏结束场景
      cc.log("[BattleController] \u4F7F\u7528\u573A\u666F\u8DF3\u8F6C\u65B9\u5F0F");
      this._transitionToGameOverScene(winner, winnerText);
    } else {
      // 方式2: 在当前场景显示游戏结束面板
      cc.log("[BattleController] \u4F7F\u7528\u5F53\u524D\u573A\u666F\u9762\u677F\u65B9\u5F0F");
      if (!this.useSceneTransition) {
        cc.log("[BattleController] useSceneTransition\u4E3Afalse\uFF0C\u4F7F\u7528\u9762\u677F\u65B9\u5F0F");
      }
      if (!this.gameOverSceneName) {
        cc.log("[BattleController] gameOverSceneName\u4E3A\u7A7A\uFF0C\u4F7F\u7528\u9762\u677F\u65B9\u5F0F");
      }
      this._showGameOverPanel(winner);
    }
  },
  /**
   * 初始化战斗场景头像显示（从SelectedUnits获取）
   * @private
   */
  initBattleAvatars: function initBattleAvatars() {
    if (!window.SelectedUnits) {
      cc.log("[BattleController] 无SelectedUnits数据，跳过头像显示");
      return;
    }
    var selectedUnits = window.SelectedUnits;
    cc.log("[BattleController] \u5F00\u59CB\u521D\u59CB\u5316\u6218\u6597\u573A\u666F\u5934\u50CF - \u82F1\u96C4: " + (selectedUnits.heros ? selectedUnits.heros.length : 0) + "\u4E2A, \u602A\u7269: " + (selectedUnits.monsters ? selectedUnits.monsters.length : 0) + "\u4E2A");

    // 显示英雄头像（左下角）
    if (selectedUnits.heros && selectedUnits.heros.length > 0 && this.heroAvatarContainer && this.avatarPrefab) {
      this._createBattleAvatars(selectedUnits.heros, "hero");
    }

    // 显示怪物头像（右下角）
    if (selectedUnits.monsters && selectedUnits.monsters.length > 0 && this.monsterAvatarContainer && this.avatarPrefab) {
      this._createBattleAvatars(selectedUnits.monsters, "monster");
    }
  },
  /**
   * 创建战斗场景头像列表
   * @private
   * @param {Array} selectedUnits - 选中的人物数据列表
   * @param {string} team - 队伍类型（"hero" 或 "monster"）
   */
  _createBattleAvatars: function _createBattleAvatars(selectedUnits, team) {
    var _this4 = this;
    if (!selectedUnits || selectedUnits.length === 0) {
      return;
    }
    var container = team === "hero" ? this.heroAvatarContainer : this.monsterAvatarContainer;
    if (!container) {
      cc.warn("[BattleController] " + team + "\u5934\u50CF\u5BB9\u5668\u672A\u7ED1\u5B9A");
      return;
    }

    // 清空容器
    container.removeAllChildren();

    // 获取头像资源列表
    var iconList = team === "hero" ? this.heroIcons : this.monsterIcons;

    // 创建头像
    selectedUnits.forEach(function (unitData, index) {
      var avatarNode = _this4._createBattleAvatar(unitData, team, index, iconList);
      if (avatarNode) {
        container.addChild(avatarNode);
      }
    });

    // 调整容器布局（垂直排列）
    this._layoutBattleAvatars(container, selectedUnits.length);
  },
  /**
   * 创建单个战斗场景头像
   * @private
   * @param {Object} unitData - 单位数据
   * @param {string} team - 队伍类型
   * @param {number} index - 索引
   * @param {Array} iconList - 头像资源列表
   * @returns {cc.Node|null} 头像节点
   */
  _createBattleAvatar: function _createBattleAvatar(unitData, team, index, iconList) {
    if (!this.avatarPrefab) {
      cc.warn("[BattleController] avatarPrefab未绑定");
      return null;
    }

    // 实例化头像Prefab
    var avatarNode = cc.instantiate(this.avatarPrefab);
    avatarNode.name = "BattleAvatar_" + (unitData.name || unitData.displayName || index);

    // 查找对应的人物节点（通过名称匹配）
    var unitName = unitData.name || unitData.displayName;
    cc.log("[BattleController] \u67E5\u627E\u4EBA\u7269\u8282\u70B9: " + unitName + ", \u961F\u4F0D: " + team);
    var characterNode = this._findCharacterNode(unitName, team);
    if (characterNode) {
      cc.log("[BattleController] \u2713 \u627E\u5230\u4EBA\u7269\u8282\u70B9: " + characterNode.name);
      // 保存人物节点引用到头像节点
      avatarNode._characterNode = characterNode;
      // 添加点击事件监听
      this._addAvatarClickHandler(avatarNode, characterNode);
    } else {
      cc.warn("[BattleController] \u2717 \u672A\u627E\u5230\u5BF9\u5E94\u7684\u4EBA\u7269\u8282\u70B9: " + unitName);
      cc.warn("[BattleController]   \u5F53\u524D" + team + "\u5217\u8868: " + (team === "hero" ? this.heros : this.monsters).map(function (n) {
        return n ? n.name : "null";
      }).join(", "));
    }

    // 查找头像图片节点
    var iconNode = avatarNode.getChildByName("Icon") || avatarNode;
    var sprite = iconNode.getComponent(cc.Sprite);
    if (sprite) {
      // 优先使用unitData中的icon
      var spriteFrame = unitData.icon || null;

      // 如果unitData没有icon，尝试从iconList按索引获取
      if (!spriteFrame && iconList && iconList.length > 0) {
        // 尝试根据名称匹配
        var UnitDataConfig = require("UnitDataConfig");
        var unitConfigList = team === "hero" ? UnitDataConfig.heros || [] : UnitDataConfig.monsters || [];
        var configIndex = unitConfigList.findIndex(function (config) {
          return config.name === unitData.name || config.displayName === unitData.displayName;
        });
        if (configIndex >= 0 && configIndex < iconList.length) {
          spriteFrame = iconList[configIndex];
        } else if (index < iconList.length) {
          // 如果找不到匹配，按索引获取
          spriteFrame = iconList[index];
        }
      }
      if (spriteFrame) {
        sprite.spriteFrame = spriteFrame;
        sprite.type = cc.Sprite.Type.SIMPLE;
        sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;

        // 设置头像大小
        iconNode.width = this.avatarSize || 80;
        iconNode.height = this.avatarSize || 80;
      } else {
        cc.warn("[BattleController] \u672A\u627E\u5230\u5934\u50CF\u8D44\u6E90: " + (unitData.name || unitData.displayName));
      }
    }

    // 查找名称标签
    var nameLabel = avatarNode.getChildByName("NameLabel");
    if (nameLabel) {
      var label = nameLabel.getComponent(cc.Label);
      if (label) {
        label.string = unitData.displayName || unitData.name || "未知";
        // 调整字体大小
        if (label.fontSize > 0) {
          label.fontSize = Math.max(14, label.fontSize * 0.6);
        } else {
          label.fontSize = 16;
        }
      }
    }

    // 隐藏勾选标记（战斗场景不需要）
    var checkmark = avatarNode.getChildByName("Checkmark");
    if (checkmark) {
      checkmark.active = false;
    }

    // 根据怒气值设置头像颜色（初始状态）
    if (characterNode) {
      this._updateAvatarColor(avatarNode, characterNode);
    }
    return avatarNode;
  },
  /**
   * 查找对应的人物节点
   * @private
   * @param {string} unitName - 单位名称
   * @param {string} team - 队伍类型
   * @returns {cc.Node|null} 人物节点
   */
  _findCharacterNode: function _findCharacterNode(unitName, team) {
    var unitList = team === "hero" ? this.heros : this.monsters;
    if (!unitList || unitList.length === 0) {
      return null;
    }

    // 通过名称匹配
    var characterNode = unitList.find(function (node) {
      if (!node || !node.isValid) return false;
      var stats = node.getComponent("StatsComponent");
      if (!stats) return false;
      return stats.name === unitName || node.name === unitName;
    });

    // 如果找不到，尝试通过索引匹配（如果unitName是索引）
    if (!characterNode && !isNaN(unitName)) {
      var index = parseInt(unitName);
      if (index >= 0 && index < unitList.length) {
        characterNode = unitList[index];
      }
    }
    return characterNode;
  },
  /**
   * 给头像添加点击事件处理
   * @private
   * @param {cc.Node} avatarNode - 头像节点
   * @param {cc.Node} characterNode - 人物节点
   */
  _addAvatarClickHandler: function _addAvatarClickHandler(avatarNode, characterNode) {
    var _this5 = this;
    // 确保节点可以接收触摸事件
    avatarNode._touchEnabled = true;

    // 确保节点有足够的大小来接收触摸
    if (avatarNode.width === 0 || avatarNode.height === 0) {
      avatarNode.setContentSize(this.avatarSize || 80, this.avatarSize || 80);
    }

    // 移除之前可能绑定的事件监听（防止重复绑定）
    avatarNode.off(cc.Node.EventType.TOUCH_END);
    avatarNode.off(cc.Node.EventType.TOUCH_START);
    avatarNode.off('click');

    // 添加按钮组件（用于更好的点击反馈和事件处理）
    var button = avatarNode.getComponent(cc.Button);
    if (!button) {
      button = avatarNode.addComponent(cc.Button);
      button.transition = cc.Button.Transition.SCALE;
      button.zoomScale = 0.9;
    }

    // 只使用Button组件的click事件（避免与TOUCH_END重复触发）
    button.node.on('click', function (event) {
      cc.log("[BattleController] \u5934\u50CFButton\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1: " + avatarNode.name);
      // 注意：Button的click事件对象可能不支持stopPropagation，所以不调用
      // 如果需要阻止事件冒泡，可以在事件处理函数中直接返回
      _this5._onAvatarClick(characterNode, event);
    }, this);

    // 确保Icon子节点也可以接收触摸（如果存在）
    var iconNode = avatarNode.getChildByName("Icon");
    if (iconNode) {
      iconNode._touchEnabled = true;
      if (iconNode.width === 0 || iconNode.height === 0) {
        iconNode.setContentSize(this.avatarSize || 80, this.avatarSize || 80);
      }
    }
    cc.log("[BattleController] \u2713 \u5DF2\u4E3A\u5934\u50CF\u6DFB\u52A0\u70B9\u51FB\u4E8B\u4EF6: " + avatarNode.name + " -> " + characterNode.name);
  },
  /**
   * 头像点击事件处理
   * @private
   * @param {cc.Node} characterNode - 人物节点
   * @param {cc.Event} event - 事件对象
   */
  _onAvatarClick: function _onAvatarClick(characterNode, event) {
    if (!characterNode || !characterNode.isValid) {
      cc.warn("[BattleController] 人物节点无效，无法释放大招");
      return;
    }

    // 防止重复触发：如果该人物正在释放大招，则忽略
    if (characterNode._isReleasingUltimate) {
      cc.log("[BattleController] " + characterNode.name + " \u6B63\u5728\u91CA\u653E\u5927\u62DB\u4E2D\uFF0C\u5FFD\u7565\u91CD\u590D\u70B9\u51FB");
      return;
    }
    cc.log("[BattleController] ========== \u5934\u50CF\u88AB\u70B9\u51FB ==========");
    cc.log("[BattleController] \u4EBA\u7269: " + characterNode.name);
    cc.log("[BattleController] \u5C1D\u8BD5\u91CA\u653E\u5927\u62DB...");

    // 检查角色是否已死亡
    var stats = characterNode.getComponent("StatsComponent");
    if (stats && stats.isDead()) {
      cc.log("[BattleController] " + characterNode.name + " \u5DF2\u6B7B\u4EA1\uFF0C\u7981\u6B62\u91CA\u653E\u5927\u62DB");
      return;
    }

    // 检查是否正在回放，如果是则禁用大招释放
    if (this.isReplaying) {
      cc.log("[BattleController] \u6B63\u5728\u56DE\u653E\u4E2D\uFF0C\u7981\u7528\u5927\u62DB\u91CA\u653E");
      return;
    }
    var SkillSystem = require("SkillSystem");
    var TeamRef = require("TeamRef");
    var TeamComponent = require("TeamComponent");

    // 检查是否可以释放大招
    if (!SkillSystem.canUseUltimateSkill(characterNode)) {
      cc.log("[BattleController] " + characterNode.name + " \u6012\u6C14\u503C\u4E0D\u8DB3\uFF0C\u65E0\u6CD5\u91CA\u653E\u5927\u62DB");
      return;
    }
    cc.log("[BattleController] " + characterNode.name + " \u53EF\u4EE5\u91CA\u653E\u5927\u62DB\uFF0C\u7EE7\u7EED\u6267\u884C...");

    // 获取目标
    var teamComp = characterNode.getComponent("TeamComponent");
    if (!teamComp) {
      cc.warn("[BattleController] " + characterNode.name + " \u7F3A\u5C11TeamComponent\u7EC4\u4EF6");
      return;
    }
    var enemies = teamComp.team === "hero" ? TeamRef.monstersRef : TeamRef.herosRef;
    var target = enemies.find(function (e) {
      if (!e || !e.isValid) return false;
      var s = e.getComponent("StatsComponent");
      return s && !s.isDead();
    });
    if (!target) {
      cc.log("[BattleController] " + characterNode.name + " \u6CA1\u6709\u53EF\u653B\u51FB\u7684\u76EE\u6807");
      return;
    }

    // 标记为正在释放大招（防止重复触发）
    characterNode._isReleasingUltimate = true;

    // 释放大招
    var log = function log(msg) {
      return cc.log(msg);
    };
    var rand = Math.random;
    SkillSystem.useUltimateSkill(characterNode, target, log, rand);

    // 延迟重置标志（大招UI动画完成后重置）
    this.scheduleOnce(function () {
      characterNode._isReleasingUltimate = false;
      cc.log("[BattleController] " + characterNode.name + " \u5927\u62DB\u91CA\u653E\u5B8C\u6210\uFF0C\u91CD\u7F6E\u6807\u5FD7");
    }, 3.0); // 延迟3秒，确保大招UI动画完成
  },
  /**
   * 更新所有头像的颜色（根据怒气值）
   * @private
   */
  _updateAllAvatarColors: function _updateAllAvatarColors() {
    var _this6 = this;
    // 更新英雄头像的颜色
    if (this.heroAvatarContainer) {
      this.heroAvatarContainer.children.forEach(function (avatarNode) {
        _this6._updateAvatarColor(avatarNode, avatarNode._characterNode);
      });
    }

    // 更新怪物头像的颜色
    if (this.monsterAvatarContainer) {
      this.monsterAvatarContainer.children.forEach(function (avatarNode) {
        _this6._updateAvatarColor(avatarNode, avatarNode._characterNode);
      });
    }
  },
  /**
   * 更新单个头像的颜色（根据怒气值）
   * @private
   * @param {cc.Node} avatarNode - 头像节点
   * @param {cc.Node} characterNode - 人物节点
   */
  _updateAvatarColor: function _updateAvatarColor(avatarNode, characterNode) {
    if (!avatarNode || !avatarNode.isValid) {
      return;
    }
    if (!characterNode || !characterNode.isValid) {
      return;
    }
    var stats = characterNode.getComponent("StatsComponent");
    if (!stats) {
      return;
    }

    // 检查怒气值是否已满
    var isRageFull = stats.isRageFull();

    // 查找头像图片节点
    var iconNode = avatarNode.getChildByName("Icon") || avatarNode;

    // 根据怒气值设置颜色
    if (isRageFull) {
      // 怒气值满：正常颜色（白色，RGB=255,255,255）
      iconNode.color = cc.Color.WHITE;
      avatarNode.color = cc.Color.WHITE;
    } else {
      // 怒气值未满：灰色（RGB=128,128,128）
      iconNode.color = new cc.Color(128, 128, 128, 255);
      avatarNode.color = new cc.Color(128, 128, 128, 255);
    }
  },
  /**
   * 调整头像容器布局（水平排列，从左往右）
   * @private
   * @param {cc.Node} container - 容器节点
   * @param {number} count - 头像数量
   */
  _layoutBattleAvatars: function _layoutBattleAvatars(container, count) {
    if (count === 0) return;
    var children = container.children;
    var spacing = this.avatarSpacing || 10;
    var avatarWidth = this.avatarSize || 80;
    var totalWidth = count * avatarWidth + (count - 1) * spacing;

    // 从左往右排列
    children.forEach(function (child, index) {
      var x = -totalWidth / 2 + avatarWidth / 2 + index * (avatarWidth + spacing);
      child.setPosition(x, 0);
    });
  },
  /**
   * 跳转到游戏结束场景
   * @private
   */
  _transitionToGameOverScene: function _transitionToGameOverScene(winner, winnerText) {
    var _this7 = this;
    cc.log("[BattleController] ===== \u5F00\u59CB\u573A\u666F\u8DF3\u8F6C\u6D41\u7A0B =====");
    cc.log("[BattleController] \u51C6\u5907\u8DF3\u8F6C\u5230\u6E38\u620F\u7ED3\u675F\u573A\u666F: \"" + this.gameOverSceneName + "\"");
    cc.log("[BattleController] \u80DC\u5229\u65B9: " + winnerText + " (" + winner + ")");

    // 方法1: 使用全局对象传递数据（推荐）
    window.BattleGameResult = {
      winner: winner,
      winnerText: winnerText
    };
    cc.log("[BattleController] \u5DF2\u8BBE\u7F6E\u5168\u5C40\u6570\u636E: window.BattleGameResult =", window.BattleGameResult);

    // 延迟一小段时间再跳转，确保所有战斗动画完成
    cc.log("[BattleController] \u5EF6\u8FDF0.5\u79D2\u540E\u8DF3\u8F6C\u573A\u666F...");
    this.scheduleOnce(function () {
      cc.log("[BattleController] \u5F00\u59CB\u52A0\u8F7D\u573A\u666F: " + _this7.gameOverSceneName);
      try {
        cc.director.loadScene(_this7.gameOverSceneName, function (error) {
          if (error) {
            cc.error("[BattleController] \u573A\u666F\u52A0\u8F7D\u5931\u8D25: " + error);
            cc.error("[BattleController] \u8BF7\u68C0\u67E5\u573A\u666F\u540D\u79F0\u662F\u5426\u6B63\u786E\uFF0C\u573A\u666F\u6587\u4EF6\u662F\u5426\u5B58\u5728");
            // 如果场景加载失败，回退到面板显示方式
            _this7._showGameOverPanel(winner);
          } else {
            cc.log("[BattleController] \u2705 \u573A\u666F\u52A0\u8F7D\u6210\u529F: " + _this7.gameOverSceneName);
          }
        });
      } catch (e) {
        cc.error("[BattleController] \u573A\u666F\u8DF3\u8F6C\u5F02\u5E38: " + e.message);
        cc.error("[BattleController] \u9519\u8BEF\u5806\u6808: " + e.stack);
        // 如果发生异常，回退到面板显示方式
        _this7._showGameOverPanel(winner);
      }
    }, 0.5); // 延迟0.5秒
  },
  /**
   * 在当前场景显示游戏结束面板
   * @private
   */
  _showGameOverPanel: function _showGameOverPanel(winner) {
    if (this.gameOverPanel) {
      var gameOverPanelComp = this.gameOverPanel.getComponent("GameOverPanel");
      if (gameOverPanelComp) {
        gameOverPanelComp.showGameOver(winner);
      } else {
        cc.error("[BattleController] gameOverPanel节点未挂载GameOverPanel组件！");
        cc.error("   请在gameOverPanel节点上添加GameOverPanel组件");
      }
    } else {
      cc.error("[BattleController] 未设置gameOverPanel节点！");
      cc.error("   请在BattleController的属性检查器中设置gameOverPanel属性");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZVxcQmF0dGxlQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIm8iLCJhbGxvd0FycmF5TGlrZSIsIml0IiwiYmluZCIsIkFycmF5IiwiaXNBcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwibiIsInRvU3RyaW5nIiwiZnJvbSIsInRlc3QiLCJhcnIiLCJsZW4iLCJhcnIyIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsIkFuaW1hdGlvblN0YXRlIiwiQVRUQUNLIiwiQllfQVRLIiwiRElFIiwiU0hJX0hVQSIsIldBSVQiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIl9wcm9wZXJ0aWVzIiwiaGVyb05vZGVzIiwiTm9kZSIsInRvb2x0aXAiLCJtb25zdGVyTm9kZXMiLCJoZXJvUGFyZW50IiwibW9uc3RlclBhcmVudCIsInVzZVBhcmVudE1vZGUiLCJ1c2VTZWxlY3RTY2VuZU1vZGUiLCJoZXJvUHJlZmFiIiwiUHJlZmFiIiwibW9uc3RlclByZWZhYiIsImhlcm9BcmVhTGVmdCIsImhlcm9BcmVhUmlnaHQiLCJoZXJvQXJlYVRvcCIsImhlcm9BcmVhQm90dG9tIiwibW9uc3RlckFyZWFMZWZ0IiwibW9uc3RlckFyZWFSaWdodCIsIm1vbnN0ZXJBcmVhVG9wIiwibW9uc3RlckFyZWFCb3R0b20iLCJ1bml0U2NhbGUiLCJtaW5Vbml0U3BhY2luZyIsImdhbWVPdmVyUGFuZWwiLCJlbmFibGVSZWNvcmRpbmciLCJoZXJvQXZhdGFyQ29udGFpbmVyIiwibW9uc3RlckF2YXRhckNvbnRhaW5lciIsImF2YXRhclByZWZhYiIsImhlcm9JY29ucyIsIlNwcml0ZUZyYW1lIiwibW9uc3Rlckljb25zIiwiYXZhdGFyU2l6ZSIsImF2YXRhclNwYWNpbmciLCJnYW1lT3ZlclNjZW5lTmFtZSIsInVzZVNjZW5lVHJhbnNpdGlvbiIsInJlcGxheUNvbnRyb2xsZXIiLCJvbkxvYWQiLCJfdGhpcyIsIkJhdHRsZVN5c3RlbSIsInJlcXVpcmUiLCJCYXR0bGVMb2dnZXJzIiwibXVsYmVycnkzMiIsIl9yZXF1aXJlIiwiU2tpbGxDb25maWciLCJyYW5kIiwibG9nZ2VyIiwiaGVyb3MiLCJtb25zdGVycyIsIl9nZW5lcmF0ZWRQb3NpdGlvbnMiLCJoZXJvIiwibW9uc3RlciIsImlzUmVwbGF5aW5nIiwid2luZG93IiwiU2VsZWN0ZWRVbml0cyIsImxvZyIsInNwYXduVW5pdHNGcm9tU2VsZWN0aW9uIiwic3Bhd25Vbml0cyIsIm9uR2FtZU92ZXIiLCJ3aW5uZXIiLCJ3aW5uZXJUZXh0IiwiX29uR2FtZU92ZXIiLCJyZWNvcmRlciIsIkJhdHRsZVJlY29yZGVyIiwiYmF0dGxlUmVjb3JkZXIiLCJzY2hlZHVsZU9uY2UiLCJpbml0QmF0dGxlQXZhdGFycyIsInNjaGVkdWxlIiwiX3VwZGF0ZUFsbEF2YXRhckNvbG9ycyIsImJhdHRsZVN5c3RlbSIsImxhc3RUaW1lIiwiRGF0ZSIsIm5vdyIsIl9jaGVja0F1dG9SZXBsYXkiLCJBdXRvU3RhcnRSZXBsYXkiLCJlbmFibGVkIiwicmVjb3JkS2V5IiwiZ2V0Q29tcG9uZW50Iiwic2NlbmUiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiY2FudmFzIiwiZ2V0Q2hpbGRCeU5hbWUiLCJyZXBsYXlOb2RlIiwiY3VycmVudEhlcm9zIiwiY3VycmVudE1vbnN0ZXJzIiwibG9hZEFuZFJlcGxheSIsIl9nZXRVbml0c0Zyb21QYXJlbnQiLCJfZ2V0VW5pdHNGcm9tQXJyYXkiLCJfaW5pdEFsbFVuaXRzIiwibWVzc2FnZSIsIl90aGlzMiIsInNlbGVjdGVkVW5pdHMiLCJ1bml0RGF0YSIsImluZGV4IiwiaGVyb05vZGUiLCJfY3JlYXRlVW5pdE5vZGUiLCJtb25zdGVyTm9kZSIsInRlYW0iLCJ0b3RhbENvdW50IiwicHJlZmFiIiwicHJlZmFiU291cmNlIiwid2FybiIsInVuaXROb2RlIiwiaW5zdGFudGlhdGUiLCJhY3RpdmUiLCJvcGFjaXR5IiwicGFyZW50IiwiYWRkQ2hpbGQiLCJ4IiwieSIsImZpbmQiLCJwb3NpdGlvbiIsInYyIiwidG9GaXhlZCIsIl9jYWxjdWxhdGVGb3JtYXRpb25Qb3NpdGlvbiIsInNldFBvc2l0aW9uIiwic2V0U2NhbGUiLCJzY2FsZVgiLCJNYXRoIiwiYWJzIiwiX3VuaXREYXRhIiwiX3RlYW0iLCJzdGF0cyIsInRlYW1Db21wIiwic2tpbGxzIiwic2tlbGV0b24iLCJzcCIsIlNrZWxldG9uIiwic2tlbGV0b25EYXRhIiwiY29udGVudFNpemUiLCJnZXRDb250ZW50U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2hpbGRyZW4iLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImNoaWxkIiwiY2hpbGRTaXplIiwiY2hpbGRMb2NhbFBvcyIsImdldFBvc2l0aW9uIiwicmFuZ2VYIiwicmFuZ2VZIiwiYXJlYUxlZnQiLCJhcmVhUmlnaHQiLCJhcmVhVG9wIiwiYXJlYUJvdHRvbSIsImV4aXN0aW5nUG9zaXRpb25zIiwibWluU3BhY2luZyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdHMiLCJ2YWxpZFBvc2l0aW9uIiwicmFuZG9tIiwiZXhpc3RpbmdQb3MiLCJkaXN0YW5jZSIsInNxcnQiLCJwb3ciLCJmb3VuZEdhcCIsImdhcEF0dGVtcHRzIiwiZ2FwQXR0ZW1wdCIsInJlZlBvcyIsImZsb29yIiwiYW5nbGUiLCJQSSIsIm9mZnNldERpc3RhbmNlIiwiY29zIiwic2luIiwibWF4IiwibWluIiwiZ3JpZENvbHMiLCJjZWlsIiwiZ3JpZFJvd3MiLCJncmlkWCIsImdyaWRZIiwiZ3JpZFNwYWNpbmdYIiwiZ3JpZFNwYWNpbmdZIiwidG90YWxHcmlkV2lkdGgiLCJ0b3RhbEdyaWRIZWlnaHQiLCJzdGFydFgiLCJzdGFydFkiLCJuZXdQb3NpdGlvbiIsImZpbHRlciIsIm5vZGUiLCJpc1ZhbGlkIiwiX3RoaXMzIiwiX2NhbGxlZSIsInVuaXREYXRhQ29uZmlnIiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJkYXRhIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9ub2RlIiwiX2RhdGEiLCJfc2tlbGV0b24iLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiaHAiLCJhdHRhY2siLCJkZWZlbnNlIiwic3BlZWQiLCJjcml0Iiwibm9ybWFsQXR0YWNrIiwic3R1blNraWxsIiwic2hpZWxkQWxsaWVzIiwibWlzcyIsImZpcmViYWxsIiwiYmVhc3RSYWdlIiwid2FyQ3J5IiwiX2dldERlZmF1bHREYXRhIiwiaW5pdEVudGl0eSIsInNldEFuaW1hdGlvbiIsInRlYW1OYW1lIiwiX2NhbGxlZTIiLCJDaGFyYWN0ZXJEYXRhTWFuYWdlciIsInNhdmVkRGF0YSIsIkxldmVsU3lzdGVtIiwiaW5pdGlhbExldmVsIiwiaW5pdGlhbEV4cCIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImxvYWRDaGFyYWN0ZXJMZXZlbCIsImJhc2VIcCIsImJhc2VBdHRhY2siLCJiYXNlRGVmZW5zZSIsImJhc2VTcGVlZCIsImJhc2VDcml0IiwiYmFzZU1pc3MiLCJtYXhSYWdlIiwicmFnZSIsImxldmVsIiwiZXhwIiwiaW5pdExldmVsIiwibWF4SHAiLCJpbW11bmUiLCJfb3JpZ2luYWxDaGFyYWN0ZXJOYW1lIiwiaW5pdCIsInVwZGF0ZUhlYWx0aEJhciIsInVwZGF0ZSIsImZpbmlzaGVkIiwiZHQiLCJleHBSZXdhcmQiLCJpc0RlYWQiLCJzdGF0dXNUZXh0IiwiYWRkRXhwIiwibGV2ZWxlZFVwIiwibmV3TGV2ZWwiLCJzdGF0Q2hhbmdlcyIsInJlY29yZEV2ZW50Iiwic3RvcFJlY29yZGluZyIsInNhdmVUb0xvY2FsU3RvcmFnZSIsIkxhc3RCYXR0bGVSZWNvcmRLZXkiLCJfdHJhbnNpdGlvblRvR2FtZU92ZXJTY2VuZSIsIl9zaG93R2FtZU92ZXJQYW5lbCIsIl9jcmVhdGVCYXR0bGVBdmF0YXJzIiwiX3RoaXM0IiwiY29udGFpbmVyIiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJpY29uTGlzdCIsImF2YXRhck5vZGUiLCJfY3JlYXRlQmF0dGxlQXZhdGFyIiwiX2xheW91dEJhdHRsZUF2YXRhcnMiLCJ1bml0TmFtZSIsImNoYXJhY3Rlck5vZGUiLCJfZmluZENoYXJhY3Rlck5vZGUiLCJfY2hhcmFjdGVyTm9kZSIsIl9hZGRBdmF0YXJDbGlja0hhbmRsZXIiLCJtYXAiLCJqb2luIiwiaWNvbk5vZGUiLCJzcHJpdGUiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsImljb24iLCJVbml0RGF0YUNvbmZpZyIsInVuaXRDb25maWdMaXN0IiwiY29uZmlnSW5kZXgiLCJmaW5kSW5kZXgiLCJjb25maWciLCJUeXBlIiwiU0lNUExFIiwic2l6ZU1vZGUiLCJTaXplTW9kZSIsIkNVU1RPTSIsIm5hbWVMYWJlbCIsImxhYmVsIiwiTGFiZWwiLCJzdHJpbmciLCJmb250U2l6ZSIsImNoZWNrbWFyayIsIl91cGRhdGVBdmF0YXJDb2xvciIsInVuaXRMaXN0IiwicGFyc2VJbnQiLCJfdGhpczUiLCJfdG91Y2hFbmFibGVkIiwic2V0Q29udGVudFNpemUiLCJvZmYiLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJUT1VDSF9TVEFSVCIsImJ1dHRvbiIsIkJ1dHRvbiIsImFkZENvbXBvbmVudCIsInRyYW5zaXRpb24iLCJUcmFuc2l0aW9uIiwiU0NBTEUiLCJ6b29tU2NhbGUiLCJvbiIsImV2ZW50IiwiX29uQXZhdGFyQ2xpY2siLCJfaXNSZWxlYXNpbmdVbHRpbWF0ZSIsIlNraWxsU3lzdGVtIiwiVGVhbVJlZiIsIlRlYW1Db21wb25lbnQiLCJjYW5Vc2VVbHRpbWF0ZVNraWxsIiwiZW5lbWllcyIsIm1vbnN0ZXJzUmVmIiwiaGVyb3NSZWYiLCJ0YXJnZXQiLCJlIiwicyIsIm1zZyIsInVzZVVsdGltYXRlU2tpbGwiLCJfdGhpczYiLCJpc1JhZ2VGdWxsIiwiY29sb3IiLCJDb2xvciIsIldISVRFIiwiY291bnQiLCJzcGFjaW5nIiwiYXZhdGFyV2lkdGgiLCJ0b3RhbFdpZHRoIiwiX3RoaXM3IiwiQmF0dGxlR2FtZVJlc3VsdCIsImxvYWRTY2VuZSIsInN0YWNrIiwiZ2FtZU92ZXJQYW5lbENvbXAiLCJzaG93R2FtZU92ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsT0FBQSxT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LE9BQU8sQ0FBRztRQUNuRDVGLEVBQUUsQ0FBQzFHLEtBQUssbURBQTZCMmEsQ0FBQyxDQUFDZ0IsS0FBSyxDQUFHO1FBQy9DO1FBQ0FILE1BQUksQ0FBQy9FLGtCQUFrQixDQUFDbE0sTUFBTSxDQUFDO01BQ25DO0lBQ0osQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDYixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSWtNLGtCQUFrQixXQUFBQSxtQkFBQ2xNLE1BQU0sRUFBRTtJQUN2QixJQUFJLElBQUksQ0FBQ25DLGFBQWEsRUFBRTtNQUNwQixJQUFNd1QsaUJBQWlCLEdBQUcsSUFBSSxDQUFDeFQsYUFBYSxDQUFDcUQsWUFBWSxDQUFDLGVBQWUsQ0FBQztNQUMxRSxJQUFJbVEsaUJBQWlCLEVBQUU7UUFDbkJBLGlCQUFpQixDQUFDQyxZQUFZLENBQUN0UixNQUFNLENBQUM7TUFDMUMsQ0FBQyxNQUFNO1FBQ0g3RCxFQUFFLENBQUMxRyxLQUFLLENBQUMsdURBQXVELENBQUM7UUFDakUwRyxFQUFFLENBQUMxRyxLQUFLLENBQUMsd0NBQXdDLENBQUM7TUFDdEQ7SUFDSixDQUFDLE1BQU07TUFDSDBHLEVBQUUsQ0FBQzFHLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQztNQUNsRDBHLEVBQUUsQ0FBQzFHLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQztJQUM3RDtFQUNKO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBbmltYXRpb25TdGF0ZSA9IHtcbiAgICBBVFRBQ0s6IFwiYXRrXCIsICAgICAgLy8g5pS75Ye75Yqo55S7XG4gICAgQllfQVRLOiBcImJ5YXRrXCIsICAgIC8vIOWPl+WHu+WKqOeUu1xuICAgIERJRTogXCJkaWVcIiwgICAgICAgICAvLyDmrbvkuqHliqjnlLtcbiAgICBTSElfSFVBOiBcInNoaWh1YVwiLCAgLy8g55+z5YyW5Yqo55S7XG4gICAgV0FJVDogXCJ3YWl0XCIsICAgICAgIC8vIOW+heacuuWKqOeUu1xufVxuXG5cbi8qKlxuICog5oiY5paX5o6n5Yi25ZmoXG4gKiDotJ/otKPmiJjmlpflnLrmma/nmoTliJ3lp4vljJblkozmiJjmlpfns7vnu5/nmoTpqbHliqhcbiAqL1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8g6Iux6ZuE6IqC54K55pWw57uE77yI5LuO5Zy65pmv5Lit55u05o6l5byV55So77yJXG4gICAgICAgIGhlcm9Ob2Rlczoge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuTm9kZV0sXG4gICAgICAgICAgICB0b29sdGlwOiBcIuaLluWFpeWcuuaZr+S4reeahOiLsembhOiKgueCuVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5oCq54mp6IqC54K55pWw57uE77yI5LuO5Zy65pmv5Lit55u05o6l5byV55So77yJXG4gICAgICAgIG1vbnN0ZXJOb2Rlczoge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuTm9kZV0sXG4gICAgICAgICAgICB0b29sdGlwOiBcIuaLluWFpeWcuuaZr+S4reeahOaAqueJqeiKgueCuVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5oiW6ICF5L2/55So54i26IqC54K56Ieq5Yqo6I635Y+W77yI5LqM6YCJ5LiA77yJXG4gICAgICAgIGhlcm9QYXJlbnQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLoi7Hpm4TniLboioLngrnvvIzoh6rliqjojrflj5bmiYDmnInlrZDoioLngrnkvZzkuLroi7Hpm4RcIlxuICAgICAgICB9LFxuXG4gICAgICAgIG1vbnN0ZXJQYXJlbnQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmgKrnianniLboioLngrnvvIzoh6rliqjojrflj5bmiYDmnInlrZDoioLngrnkvZzkuLrmgKrnialcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOaYr+WQpuS9v+eUqOeItuiKgueCueaooeW8j1xuICAgICAgICB1c2VQYXJlbnRNb2RlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwidHJ1ZTog5LuO54i26IqC54K56I635Y+W5a2Q6IqC54K5IHwgZmFsc2U6IOS9v+eUqGhlcm9Ob2Rlc+WSjG1vbnN0ZXJOb2Rlc1wiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5piv5ZCm5L2/55So6YCJ5oup5Zy65pmv5qih5byP77yI6Ieq5Yqo5Yib5bu66IqC54K55ZKM5o6S5YW15biD6Zi177yJXG4gICAgICAgIHVzZVNlbGVjdFNjZW5lTW9kZToge1xuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICB0b29sdGlwOiBcInRydWU6IOS7jlNlbGVjdFNjZW5l6YCJ5oup55qE5pWw5o2u6Ieq5Yqo5Yib5bu66IqC54K5IHwgZmFsc2U6IOS9v+eUqOWOn+acieaooeW8j1wiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g6Iux6ZuEUHJlZmFi77yI55So5LqO6Ieq5Yqo5Yib5bu677yJXG4gICAgICAgIGhlcm9QcmVmYWI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuiLsembhFByZWZhYu+8iOS9v+eUqOmAieaLqeWcuuaZr+aooeW8j+aXtumcgOimge+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5oCq54mpUHJlZmFi77yI55So5LqO6Ieq5Yqo5Yib5bu677yJXG4gICAgICAgIG1vbnN0ZXJQcmVmYWI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuaAqueJqVByZWZhYu+8iOS9v+eUqOmAieaLqeWcuuaZr+aooeW8j+aXtumcgOimge+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g6Iux6ZuE54i26IqC54K577yI55So5LqO6Ieq5Yqo5o6S5YW15biD6Zi177yJXG4gICAgICAgIGhlcm9QYXJlbnQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLoi7Hpm4TniLboioLngrnvvIjnlKjkuo7oh6rliqjmjpLlhbXluIPpmLXvvIzoi7Hpm4TkvJrmlL7lnKjlt6bovrnvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOaAqueJqeeItuiKgueCue+8iOeUqOS6juiHquWKqOaOkuWFteW4g+mYte+8iVxuICAgICAgICBtb25zdGVyUGFyZW50OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5oCq54mp54i26IqC54K577yI55So5LqO6Ieq5Yqo5o6S5YW15biD6Zi177yM5oCq54mp5Lya5pS+5Zyo5Y+z6L6577yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDmjpLlhbXluIPpmLXljLrln5/vvIjoi7Hpm4TlnKjlt6bovrnvvIzmgKrnianlnKjlj7PovrnvvIlcbiAgICAgICAgaGVyb0FyZWFMZWZ0OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAtMjAwLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLoi7Hpm4TljLrln5/lt6bovrnnlYzvvIhY5Z2Q5qCH77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICBoZXJvQXJlYVJpZ2h0OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLoi7Hpm4TljLrln5/lj7PovrnnlYzvvIhY5Z2Q5qCH77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICBoZXJvQXJlYVRvcDoge1xuICAgICAgICAgICAgZGVmYXVsdDogMTAwLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLoi7Hpm4TljLrln5/kuIrovrnnlYzvvIhZ5Z2Q5qCH77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICBoZXJvQXJlYUJvdHRvbToge1xuICAgICAgICAgICAgZGVmYXVsdDogLTEwMCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6Iux6ZuE5Yy65Z+f5LiL6L6555WM77yIWeWdkOagh++8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgbW9uc3RlckFyZWFMZWZ0OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmgKrnianljLrln5/lt6bovrnnlYzvvIhY5Z2Q5qCH77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICBtb25zdGVyQXJlYVJpZ2h0OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAyMDAsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuaAqueJqeWMuuWfn+WPs+i+ueeVjO+8iFjlnZDmoIfvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIG1vbnN0ZXJBcmVhVG9wOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAxMDAsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuaAqueJqeWMuuWfn+S4iui+ueeVjO+8iFnlnZDmoIfvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIG1vbnN0ZXJBcmVhQm90dG9tOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAtMTAwLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmgKrnianljLrln5/kuIvovrnnlYzvvIhZ5Z2Q5qCH77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDlm7rlrprljZXkvY3lpKflsI/vvIjmiYDmnInljZXkvY3kvb/nlKjnm7jlkIzlpKflsI/vvIlcbiAgICAgICAgdW5pdFNjYWxlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAxLjAsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWNleS9jeWbuuWumue8qeaUvuWkp+Wwj++8iOaJgOacieWNleS9jee7n+S4gOS9v+eUqOatpOWkp+Wwj++8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5Y2V5L2N5LmL6Ze055qE5pyA5bCP6Ze06ZqU6Led56a777yI6Ziy5q2i6YeN5Y+g5ZKM6K+v6Kem77yJXG4gICAgICAgIG1pblVuaXRTcGFjaW5nOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAxMjAsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWNleS9jeS5i+mXtOeahOacgOWwj+mXtOmalOi3neemu++8iOWDj+e0oO+8ie+8jOmYsuatoumHjeWPoOWSjOeCueWHu+ivr+inplwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5ri45oiP57uT5p2f6Z2i5p2/57uE5Lu277yI5Y+v6YCJ77yM5aaC5p6c5L2/55So5Zy65pmv6Lez6L2s5YiZ5LiN6ZyA6KaB77yJXG4gICAgICAgIGdhbWVPdmVyUGFuZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmuLjmiI/nu5PmnZ/pnaLmnb/oioLngrnvvIjlpoLmnpzkvb/nlKjlnLrmma/ot7PovazliJnkuI3pnIDopoHvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOaYr+WQpuWQr+eUqOaImOaWl+iusOW9lVxuICAgICAgICBlbmFibGVSZWNvcmRpbmc6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuaYr+WQpuWQr+eUqOaImOaWl+iusOW9leWKn+iDvVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5oiY5paX5Zy65pmv5aS05YOP5pi+56S677yI5bem5LiL6KeS5ZKM5Y+z5LiL6KeS77yJXG4gICAgICAgIGhlcm9BdmF0YXJDb250YWluZXI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLlt6bkvqfoi7Hpm4TlpLTlg4/lrrnlmajoioLngrnvvIjlt6bkuIvop5LvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIG1vbnN0ZXJBdmF0YXJDb250YWluZXI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLlj7PkvqfmgKrnianlpLTlg4/lrrnlmajoioLngrnvvIjlj7PkuIvop5LvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIGF2YXRhclByZWZhYjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5aS05YOPUHJlZmFi77yI55So5LqO5Yqo5oCB5Yib5bu65aS05YOP77yM5LiOU2VsZWN0U2NlbmVVSeS9v+eUqOebuOWQjOeahFByZWZhYu+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgaGVyb0ljb25zOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5TcHJpdGVGcmFtZV0sXG4gICAgICAgICAgICB0b29sdGlwOiBcIuiLsembhOWktOWDj+i1hOa6kOWIl+ihqO+8iOaMiemhuuW6j++8muaImOWjq+OAgeazleW4iC4uLu+8jOS4jlNlbGVjdFNjZW5lVUnnm7jlkIzvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIG1vbnN0ZXJJY29uczoge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuU3ByaXRlRnJhbWVdLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmgKrnianlpLTlg4/otYTmupDliJfooajvvIjmjInpobrluo/vvJrmgKrnianjgIFCb3NzLi4u77yM5LiOU2VsZWN0U2NlbmVVSeebuOWQjO+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgYXZhdGFyU2l6ZToge1xuICAgICAgICAgICAgZGVmYXVsdDogODAsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWktOWDj+aYvuekuuWkp+Wwj++8iOWDj+e0oO+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgYXZhdGFyU3BhY2luZzoge1xuICAgICAgICAgICAgZGVmYXVsdDogMTAsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWktOWDj+S5i+mXtOeahOmXtOi3ne+8iOWDj+e0oO+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5ri45oiP57uT5p2f5Zy65pmv5ZCN56ewXG4gICAgICAgIGdhbWVPdmVyU2NlbmVOYW1lOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBcIkdhbWVPdmVyU2NlbmVcIixcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5ri45oiP57uT5p2f5Zy65pmv5ZCN56ew77yI5aaC5p6c5Li656m65YiZ5L2/55So5b2T5YmN5Zy65pmv55qEZ2FtZU92ZXJQYW5lbO+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5piv5ZCm5L2/55So5Zy65pmv6Lez6L2s77yIdHJ1ZTog6Lez6L2s5Yiw5paw5Zy65pmvIHwgZmFsc2U6IOWcqOW9k+WJjeWcuuaZr+aYvuekuumdouadv++8iVxuICAgICAgICB1c2VTY2VuZVRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuaYr+WQpuS9v+eUqOWcuuaZr+i3s+i9rOaYvuekuua4uOaIj+e7k+adn+eUu+mdolwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5Zue5pS+5o6n5Yi25Zmo77yI5Y+v6YCJ77yJXG4gICAgICAgIHJlcGxheUNvbnRyb2xsZXI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLlm57mlL7mjqfliLblmajoioLngrnvvIjmjILovb3kuoZSZXBsYXlDb250cm9sbGVy57uE5Lu277yJXCJcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNvbnN0IEJhdHRsZVN5c3RlbSA9IHJlcXVpcmUoXCJCYXR0bGVTeXN0ZW1cIik7XG4gICAgICAgIGNvbnN0IEJhdHRsZUxvZ2dlcnMgPSByZXF1aXJlKFwiQmF0dGxlTG9nZ2Vyc1wiKTtcbiAgICAgICAgY29uc3QgbXVsYmVycnkzMiA9IHJlcXVpcmUoXCJyYW5kb21cIik7XG4gICAgICAgIGNvbnN0IHsgU2tpbGxDb25maWcgfSA9IHJlcXVpcmUoXCJTa2lsbENvbmZpZ1wiKTtcblxuICAgICAgICAvLyDkv53lrZjmioDog73phY3nva7kvpvlkI7nu63kvb/nlKhcbiAgICAgICAgdGhpcy5Ta2lsbENvbmZpZyA9IFNraWxsQ29uZmlnO1xuXG4gICAgICAgIHRoaXMucmFuZCA9IG11bGJlcnJ5MzIoMTIzNDU2KTtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBuZXcgQmF0dGxlTG9nZ2VycygpO1xuXG4gICAgICAgIHRoaXMuaGVyb3MgPSBbXTtcbiAgICAgICAgdGhpcy5tb25zdGVycyA9IFtdO1xuXG4gICAgICAgIC8vIOWIneWni+WMluW3sueUn+aIkOS9jee9ruiusOW9le+8iOeUqOS6jumYsuatouWNleS9jemHjeWPoO+8iVxuICAgICAgICB0aGlzLl9nZW5lcmF0ZWRQb3NpdGlvbnMgPSB7XG4gICAgICAgICAgICBoZXJvOiBbXSxcbiAgICAgICAgICAgIG1vbnN0ZXI6IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g5piv5ZCm5q2j5Zyo5Zue5pS+77yI55So5LqO56aB55SoQmF0dGxlU3lzdGVt55qEdXBkYXRl77yJXG4gICAgICAgIHRoaXMuaXNSZXBsYXlpbmcgPSBmYWxzZTtcblxuICAgICAgICAvLyDmo4Dmn6XmmK/lkKbkvb/nlKjpgInmi6nlnLrmma/mqKHlvI9cbiAgICAgICAgaWYgKHdpbmRvdy5TZWxlY3RlZFVuaXRzICYmICh3aW5kb3cuU2VsZWN0ZWRVbml0cy5oZXJvcy5sZW5ndGggPiAwIHx8IHdpbmRvdy5TZWxlY3RlZFVuaXRzLm1vbnN0ZXJzLmxlbmd0aCA+IDApKSB7XG4gICAgICAgICAgICBjYy5sb2coXCJbQmF0dGxlQ29udHJvbGxlcl0g5qOA5rWL5Yiw6YCJ5oup5Zy65pmv5pWw5o2u77yM5L2/55So6Ieq5Yqo5Yib5bu66IqC54K55qih5byPXCIpO1xuICAgICAgICAgICAgdGhpcy51c2VTZWxlY3RTY2VuZU1vZGUgPSB0cnVlO1xuICAgICAgICAgICAgLy8g5Yib5bu65Y2V5L2N77yI5LuO6YCJ5oup5Zy65pmv55qE5pWw5o2u6Ieq5Yqo5Yib5bu677yJXG4gICAgICAgICAgICB0aGlzLnNwYXduVW5pdHNGcm9tU2VsZWN0aW9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDliJvlu7rljZXkvY3vvIjov5nmmK/liJ3lp4vljJYgRUNTIOe7hOS7tueahOWFs+mUruatpemqpO+8iVxuICAgICAgICAgICAgdGhpcy5zcGF3blVuaXRzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmuLjmiI/nu5PmnZ/lm57osIPlh73mlbBcbiAgICAgICAgY29uc3Qgb25HYW1lT3ZlciA9ICh3aW5uZXIsIHdpbm5lclRleHQpID0+IHtcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdID09PT09IG9uR2FtZU92ZXLlm57osIPooqvosIPnlKggPT09PT1gKTtcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIHdpbm5lcjogJHt3aW5uZXJ9LCB3aW5uZXJUZXh0OiAke3dpbm5lclRleHR9YCk7XG4gICAgICAgICAgICB0aGlzLl9vbkdhbWVPdmVyKHdpbm5lciwgd2lubmVyVGV4dCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g5Yib5bu65oiY5paX6K6w5b2V5Zmo77yI5aaC5p6c5ZCv55So77yJXG4gICAgICAgIGxldCByZWNvcmRlciA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZVJlY29yZGluZykge1xuICAgICAgICAgICAgY29uc3QgQmF0dGxlUmVjb3JkZXIgPSByZXF1aXJlKFwiQmF0dGxlUmVjb3JkZXJcIik7XG4gICAgICAgICAgICByZWNvcmRlciA9IG5ldyBCYXR0bGVSZWNvcmRlcigpOy8v5Yib5bu65oiY5paX6K6w5b2V5ZmoXG4gICAgICAgICAgICB0aGlzLmJhdHRsZVJlY29yZGVyID0gcmVjb3JkZXI7IC8vIOS/neWtmOW8leeUqO+8jOeUqOS6juWQjue7reiuv+mXruiusOW9lVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pi+56S65oiY5paX5Zy65pmv5aS05YOP77yI5LuOU2VsZWN0ZWRVbml0c+iOt+WPlu+8iVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRCYXR0bGVBdmF0YXJzKCk7XG4gICAgICAgIH0sIDAuMik7XG5cbiAgICAgICAgLy8g5riF6Zmk5YWo5bGA5pWw5o2u77yI5Zyo5aS05YOP5pi+56S65a6M5oiQ5ZCO5riF6Zmk77yJXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuU2VsZWN0ZWRVbml0cykge1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcIltCYXR0bGVDb250cm9sbGVyXSDmuIXpmaR3aW5kb3cuU2VsZWN0ZWRVbml0c1wiKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuU2VsZWN0ZWRVbml0cyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDAuNSk7XG5cbiAgICAgICAgLy8g5byA5aeL5pu05paw5aS05YOP6aKc6Imy77yI5qC55o2u5oCS5rCU5YC877yJXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5fdXBkYXRlQWxsQXZhdGFyQ29sb3JzLCAwLjEpOyAvLyDmr48wLjHnp5Lmo4Dmn6XkuIDmrKFcblxuICAgICAgICAvLyDliJvlu7rmiJjmlpfns7vnu59cbiAgICAgICAgdGhpcy5iYXR0bGVTeXN0ZW0gPSBuZXcgQmF0dGxlU3lzdGVtKFxuICAgICAgICAgICAgdGhpcy5oZXJvcyxcbiAgICAgICAgICAgIHRoaXMubW9uc3RlcnMsXG4gICAgICAgICAgICB0aGlzLmxvZ2dlcixcbiAgICAgICAgICAgIHRoaXMucmFuZCxcbiAgICAgICAgICAgIG9uR2FtZU92ZXIsXG4gICAgICAgICAgICByZWNvcmRlclxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIC8vIOajgOafpeaYr+WQpumcgOimgeiHquWKqOW8gOWni+WbnuaUvu+8iOS7jkdhbWVPdmVyU2NlbmXot7Povazlm57mnaXml7bvvIlcbiAgICAgICAgLy8g5aKe5Yqg5bu26L+f5pe26Ze077yM56Gu5L+d5Y2V5L2N5Yib5bu65a6M5oiQ77yI54m55Yir5piv5LuOU2VsZWN0U2NlbmXpgInmi6nnmoTkurrnianvvIlcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tBdXRvUmVwbGF5KCk7XG4gICAgICAgIH0sIDAuNSk7IC8vIOW7tui/nzAuNeenku+8jOehruS/neaJgOacieWNleS9jemDveW3suWIm+W7uuWujOaIkFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmo4Dmn6XmmK/lkKbpnIDopoHoh6rliqjlvIDlp4vlm57mlL5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9jaGVja0F1dG9SZXBsYXkoKSB7XG4gICAgICAgIGlmICh3aW5kb3cuQXV0b1N0YXJ0UmVwbGF5ICYmIHdpbmRvdy5BdXRvU3RhcnRSZXBsYXkuZW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc3QgcmVjb3JkS2V5ID0gd2luZG93LkF1dG9TdGFydFJlcGxheS5yZWNvcmRLZXk7XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDmo4DmtYvliLDoh6rliqjlm57mlL7moIflv5fvvIzlh4blpIflvIDlp4vlm57mlL46ICR7cmVjb3JkS2V5fWApO1xuXG4gICAgICAgICAgICAvLyDojrflj5ZSZXBsYXlDb250cm9sbGVyXG4gICAgICAgICAgICBsZXQgcmVwbGF5Q29udHJvbGxlciA9IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXBsYXlDb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgcmVwbGF5Q29udHJvbGxlciA9IHRoaXMucmVwbGF5Q29udHJvbGxlci5nZXRDb21wb25lbnQoXCJSZXBsYXlDb250cm9sbGVyXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDlsJ3or5Xku47lnLrmma/kuK3mn6Xmib5cbiAgICAgICAgICAgICAgICBjb25zdCBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XG4gICAgICAgICAgICAgICAgaWYgKHNjZW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IHNjZW5lLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FudmFzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXBsYXlOb2RlID0gY2FudmFzLmdldENoaWxkQnlOYW1lKFwiUmVwbGF5Q29udHJvbGxlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXBsYXlOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGF5Q29udHJvbGxlciA9IHJlcGxheU5vZGUuZ2V0Q29tcG9uZW50KFwiUmVwbGF5Q29udHJvbGxlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlcGxheUNvbnRyb2xsZXIgJiYgcmVjb3JkS2V5KSB7XG4gICAgICAgICAgICAgICAgLy8g56Gu5L+d5L2/55So5b2T5YmN5Zy65pmv55qE5Y2V5L2N5YiX6KGo77yI5LuOU2VsZWN0U2NlbmXpgInmi6nnmoTkurrnianvvIlcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SGVyb3MgPSB0aGlzLmhlcm9zIHx8IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRNb25zdGVycyA9IHRoaXMubW9uc3RlcnMgfHwgW107XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g5byA5aeL5Zue5pS+77yM5L2/55So5b2T5YmN5Zy65pmv55qE5Y2V5L2N5YiX6KGoIC0g6Iux6ZuEOiAke2N1cnJlbnRIZXJvcy5sZW5ndGh95LiqLCDmgKrniak6ICR7Y3VycmVudE1vbnN0ZXJzLmxlbmd0aH3kuKpgKTtcblxuICAgICAgICAgICAgICAgIC8vIOW8gOWni+WbnuaUvu+8iOS8oOWFpeW9k+WJjeWcuuaZr+eahOWNleS9jeWIl+ihqO+8iVxuICAgICAgICAgICAgICAgIHJlcGxheUNvbnRyb2xsZXIubG9hZEFuZFJlcGxheShyZWNvcmRLZXksIGN1cnJlbnRIZXJvcywgY3VycmVudE1vbnN0ZXJzKTtcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDoh6rliqjlm57mlL7lt7LlkK/liqhgKTtcblxuICAgICAgICAgICAgICAgIC8vIOa4hemZpOiHquWKqOWbnuaUvuagh+W/l1xuICAgICAgICAgICAgICAgIHdpbmRvdy5BdXRvU3RhcnRSZXBsYXkgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihgW0JhdHRsZUNvbnRyb2xsZXJdIOaXoOazleiHquWKqOW8gOWni+WbnuaUvmApO1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGAgICAtIFJlcGxheUNvbnRyb2xsZXI6ICR7cmVwbGF5Q29udHJvbGxlciA/ICfmib7liLAnIDogJ+acquaJvuWIsCd9YCk7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYCAgIC0gcmVjb3JkS2V5OiAke3JlY29yZEtleSA/IHJlY29yZEtleSA6ICfkuI3lrZjlnKgnfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiOt+WPluWcuuaZr+S4reeahOinkuiJsuiKgueCuVxuICAgICAqL1xuICAgIHNwYXduVW5pdHMoKSB7XG4gICAgICAgIC8vIOagueaNruaooeW8j+iOt+WPluiKgueCuVxuICAgICAgICBpZiAodGhpcy51c2VQYXJlbnRNb2RlKSB7XG4gICAgICAgICAgICAvLyDmqKHlvI8xOiDku47niLboioLngrnojrflj5blrZDoioLngrlcbiAgICAgICAgICAgIHRoaXMuX2dldFVuaXRzRnJvbVBhcmVudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5qih5byPMjog5L2/55So6aKE5YWI6YWN572u55qE6IqC54K55pWw57uEXG4gICAgICAgICAgICB0aGlzLl9nZXRVbml0c0Zyb21BcnJheSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5Li65omA5pyJ6KeS6Imy5Yid5aeL5YyW5oiY5paX5pWw5o2u5ZKM5Yqo55S7XG4gICAgICAgIC8vIOWIneWni+WMluaJgOacieaImOaWl+WNleS9je+8iOaUr+aMgeW8guatpe+8iVxuICAgICAgICB0aGlzLl9pbml0QWxsVW5pdHMoKS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY2MuZXJyb3IoYFtCYXR0bGVDb250cm9sbGVyXSDliJ3lp4vljJbmiJjmlpfljZXkvY3lpLHotKU6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDku47pgInmi6nlnLrmma/nmoTmlbDmja7oh6rliqjliJvlu7roioLngrnlubbmjpLlhbXluIPpmLVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHNwYXduVW5pdHNGcm9tU2VsZWN0aW9uKCkge1xuICAgICAgICBpZiAoIXdpbmRvdy5TZWxlY3RlZFVuaXRzKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIltCYXR0bGVDb250cm9sbGVyXSB3aW5kb3cuU2VsZWN0ZWRVbml0cyDkuI3lrZjlnKjvvIzml6Dms5Xoh6rliqjliJvlu7roioLngrlcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWxlY3RlZFVuaXRzID0gd2luZG93LlNlbGVjdGVkVW5pdHM7XG4gICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOW8gOWni+iHquWKqOWIm+W7uuiKgueCuSAtIOiLsembhDogJHtzZWxlY3RlZFVuaXRzLmhlcm9zLmxlbmd0aH3kuKosIOaAqueJqTogJHtzZWxlY3RlZFVuaXRzLm1vbnN0ZXJzLmxlbmd0aH3kuKpgKTtcblxuICAgICAgICAvLyDliJvlu7roi7Hpm4ToioLngrlcbiAgICAgICAgaWYgKHNlbGVjdGVkVW5pdHMuaGVyb3MgJiYgc2VsZWN0ZWRVbml0cy5oZXJvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaGVyb1ByZWZhYikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiW0JhdHRsZUNvbnRyb2xsZXJdIOacquiuvue9rmhlcm9QcmVmYWLvvIzml6Dms5XliJvlu7roi7Hpm4ToioLngrlcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkVW5pdHMuaGVyb3MuZm9yRWFjaCgodW5pdERhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlcm9Ob2RlID0gdGhpcy5fY3JlYXRlVW5pdE5vZGUodW5pdERhdGEsIFwiaGVyb1wiLCBpbmRleCwgc2VsZWN0ZWRVbml0cy5oZXJvcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGVyb05vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVyb3MucHVzaChoZXJvTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWIm+W7uuaAqueJqeiKgueCuVxuICAgICAgICBpZiAoc2VsZWN0ZWRVbml0cy5tb25zdGVycyAmJiBzZWxlY3RlZFVuaXRzLm1vbnN0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5tb25zdGVyUHJlZmFiKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJbQmF0dGxlQ29udHJvbGxlcl0g5pyq6K6+572ubW9uc3RlclByZWZhYu+8jOaXoOazleWIm+W7uuaAqueJqeiKgueCuVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRVbml0cy5tb25zdGVycy5mb3JFYWNoKCh1bml0RGF0YSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9uc3Rlck5vZGUgPSB0aGlzLl9jcmVhdGVVbml0Tm9kZSh1bml0RGF0YSwgXCJtb25zdGVyXCIsIGluZGV4LCBzZWxlY3RlZFVuaXRzLm1vbnN0ZXJzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb25zdGVyTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb25zdGVycy5wdXNoKG1vbnN0ZXJOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5Li65omA5pyJ6KeS6Imy5Yid5aeL5YyW5oiY5paX5pWw5o2u5ZKM5Yqo55S7XG4gICAgICAgIC8vIOWIneWni+WMluaJgOacieaImOaWl+WNleS9je+8iOaUr+aMgeW8guatpe+8iVxuICAgICAgICB0aGlzLl9pbml0QWxsVW5pdHMoKS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY2MuZXJyb3IoYFtCYXR0bGVDb250cm9sbGVyXSDliJ3lp4vljJbmiJjmlpfljZXkvY3lpLHotKU6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDliJvlu7rljZXkvY3oioLngrlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB1bml0RGF0YSAtIOWNleS9jeaVsOaNrlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZWFtIC0g6Zif5LyN57G75Z6L77yIXCJoZXJvXCIg5oiWIFwibW9uc3Rlclwi77yJXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0g57Si5byVXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRvdGFsQ291bnQgLSDmgLvmlbDph49cbiAgICAgKiBAcmV0dXJucyB7Y2MuTm9kZX0g5Yib5bu655qE5Y2V5L2N6IqC54K5XG4gICAgICovXG4gICAgX2NyZWF0ZVVuaXROb2RlKHVuaXREYXRhLCB0ZWFtLCBpbmRleCwgdG90YWxDb3VudCkge1xuICAgICAgICAvLyDkvJjlhYjkvb/nlKh1bml0RGF0YeS4reeahHByZWZhYu+8iOi/meaYr+WujOaVtOeahOinkuiJslByZWZhYu+8jOWMheWQq+aJgOaciee7hOS7tu+8iVxuICAgICAgICAvLyDlpoLmnpzmsqHmnInvvIzlho3kvb/nlKjpgJrnlKjnmoRoZXJvUHJlZmFiL21vbnN0ZXJQcmVmYWLkvZzkuLrlkI7lpIdcbiAgICAgICAgbGV0IHByZWZhYiA9IHVuaXREYXRhLnByZWZhYjtcbiAgICAgICAgbGV0IHByZWZhYlNvdXJjZSA9IFwidW5pdERhdGEucHJlZmFiXCI7XG5cbiAgICAgICAgaWYgKCFwcmVmYWIpIHtcbiAgICAgICAgICAgIC8vIOWQjuWkh+aWueahiO+8muS9v+eUqOmAmueUqOeahFByZWZhYlxuICAgICAgICAgICAgcHJlZmFiID0gdGVhbSA9PT0gXCJoZXJvXCIgPyB0aGlzLmhlcm9QcmVmYWIgOiB0aGlzLm1vbnN0ZXJQcmVmYWI7XG4gICAgICAgICAgICBwcmVmYWJTb3VyY2UgPSBgJHt0ZWFtfVByZWZhYmA7XG5cbiAgICAgICAgICAgIGlmICghcHJlZmFiKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtCYXR0bGVDb250cm9sbGVyXSDinJcg5pyq6K6+572uJHt0ZWFtfVByZWZhYu+8jOS4lHVuaXREYXRhLnByZWZhYuS5n+S4uuepuu+8jOaXoOazleWIm+W7uiR7dGVhbX3oioLngrlgKTtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihgW0JhdHRsZUNvbnRyb2xsZXJdIOivt+mAieaLqeS7peS4i+aWueahiOS5i+S4gO+8mmApO1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbQmF0dGxlQ29udHJvbGxlcl0gICAxLiDlnKhVbml0RGF0YUNvbmZpZ+S4reS4ulwiJHt1bml0RGF0YS5uYW1lfVwi6K6+572ucHJlZmFi77yI5o6o6I2Q77yJYCk7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtCYXR0bGVDb250cm9sbGVyXSAgIDIuIOWcqEJhdHRsZUNvbnRyb2xsZXLnu4Tku7bkuK3nu5Hlrpoke3RlYW19UHJlZmFiYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLndhcm4oYFtCYXR0bGVDb250cm9sbGVyXSDimqDvuI8gdW5pdERhdGEucHJlZmFi5Li656m677yM5L2/55So6YCa55SoJHt0ZWFtfVByZWZhYjogJHt1bml0RGF0YS5uYW1lfWApO1xuICAgICAgICAgICAgICAgIGNjLndhcm4oYFtCYXR0bGVDb250cm9sbGVyXSAgIOW7uuiuru+8muWwhuWcuuaZr+S4reWujOaVtOeahFwiJHt1bml0RGF0YS5uYW1lfVwi6IqC54K55L+d5a2Y5Li6UHJlZmFi77yM5bm25ZyoVW5pdERhdGFDb25maWfkuK3nu5HlrppgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOKckyDkvb/nlKh1bml0RGF0YS5wcmVmYWLliJvlu7roioLngrk6ICR7dW5pdERhdGEubmFtZX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOW8gOWni+WIm+W7uiR7dGVhbX3oioLngrk6ICR7dW5pdERhdGEubmFtZX0gKOS9v+eUqCR7cHJlZmFiU291cmNlfSlgKTtcblxuICAgICAgICAvLyDlrp7kvovljJZQcmVmYWJcbiAgICAgICAgY29uc3QgdW5pdE5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICB1bml0Tm9kZS5uYW1lID0gdW5pdERhdGEubmFtZTtcblxuICAgICAgICAvLyDnoa7kv53oioLngrnlj6/op4FcbiAgICAgICAgdW5pdE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdW5pdE5vZGUub3BhY2l0eSA9IDI1NTtcblxuICAgICAgICAvLyDorr7nva7niLboioLngrlcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGVhbSA9PT0gXCJoZXJvXCIgPyB0aGlzLmhlcm9QYXJlbnQgOiB0aGlzLm1vbnN0ZXJQYXJlbnQ7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIC8vIOehruS/neeItuiKgueCueWPr+ingVxuICAgICAgICAgICAgaWYgKCFwYXJlbnQuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgY2Mud2FybihgW0JhdHRsZUNvbnRyb2xsZXJdIOKaoO+4jyAke3RlYW19UGFyZW505pyq5r+A5rS777yM5bey6Ieq5Yqo5r+A5rS7YCk7XG4gICAgICAgICAgICAgICAgcGFyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyZW50Lm9wYWNpdHkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKGBbQmF0dGxlQ29udHJvbGxlcl0g4pqg77iPICR7dGVhbX1QYXJlbnTpgI/mmI7luqbkuLow77yM5bey6K6+572u5Li6MjU1YCk7XG4gICAgICAgICAgICAgICAgcGFyZW50Lm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJlbnQuYWRkQ2hpbGQodW5pdE5vZGUpO1xuICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gJHt0ZWFtfeiKgueCueW3sua3u+WKoOWIsOeItuiKgueCuTogJHtwYXJlbnQubmFtZX0sIOeItuiKgueCueS9jee9rjogKCR7cGFyZW50Lnh9LCAke3BhcmVudC55fSlgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWmguaenOayoeacieeItuiKgueCue+8jOa3u+WKoOWIsENhbnZhc1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICAgICAgICAgIGlmIChjYW52YXMpIHtcbiAgICAgICAgICAgICAgICBjYW52YXMuYWRkQ2hpbGQodW5pdE5vZGUpO1xuICAgICAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdICR7dGVhbX3oioLngrnlt7Lmt7vliqDliLBDYW52YXNgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtCYXR0bGVDb250cm9sbGVyXSDinJcg5pyq5om+5YiwQ2FudmFz6IqC54K577yM5peg5rOV5re75YqgJHt0ZWFtfeiKgueCuWApO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g6Ieq5Yqo5o6S5YW15biD6Zi177yI5LyY5YWI5L2/55SodW5pdERhdGHkuK3nmoTkvY3nva7vvIzlkKbliJnkvb/nlKjpmo/mnLrkvY3nva7vvIlcbiAgICAgICAgbGV0IHBvc2l0aW9uO1xuICAgICAgICBpZiAodW5pdERhdGEucG9zaXRpb24gJiYgdW5pdERhdGEucG9zaXRpb24ueCAhPT0gdW5kZWZpbmVkICYmIHVuaXREYXRhLnBvc2l0aW9uLnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8g5L2/55So5L+d5a2Y55qE5L2N572u77yI5LuO5oiY5paX6K6w5b2V5oGi5aSN55qE77yJXG4gICAgICAgICAgICBwb3NpdGlvbiA9IGNjLnYyKHVuaXREYXRhLnBvc2l0aW9uLngsIHVuaXREYXRhLnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g5L2/55So5L+d5a2Y55qE5L2N572uOiAoJHtwb3NpdGlvbi54LnRvRml4ZWQoMSl9LCAke3Bvc2l0aW9uLnkudG9GaXhlZCgxKX0pYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDkvb/nlKjpmo/mnLrkvY3nva7vvIjmlrDliJvlu7rnmoTljZXkvY3vvIlcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5fY2FsY3VsYXRlRm9ybWF0aW9uUG9zaXRpb24odGVhbSwgaW5kZXgsIHRvdGFsQ291bnQpO1xuICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g5L2/55So6ZqP5py65L2N572uOiAoJHtwb3NpdGlvbi54LnRvRml4ZWQoMSl9LCAke3Bvc2l0aW9uLnkudG9GaXhlZCgxKX0pYCk7XG4gICAgICAgIH1cbiAgICAgICAgdW5pdE5vZGUuc2V0UG9zaXRpb24ocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG5cbiAgICAgICAgLy8g6K6+572u5Zu65a6a5aSn5bCPXG4gICAgICAgIHVuaXROb2RlLnNldFNjYWxlKHRoaXMudW5pdFNjYWxlLCB0aGlzLnVuaXRTY2FsZSwgMS4wKTtcbiAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g6K6+572uJHt0ZWFtfeiKgueCueWbuuWumuWkp+WwjzogJHt0aGlzLnVuaXRTY2FsZX14JHt0aGlzLnVuaXRTY2FsZX1gKTtcblxuICAgICAgICAvLyDorr7nva7liJ3lp4vpnaLlkJHmlrnlkJFcbiAgICAgICAgLy8g6Iux6ZuE6Z2i5ZCR5Y+z6L6577yI5q2jc2NhbGVY77yJ77yM5oCq54mp6Z2i5ZCR5bem6L6577yI6LSfc2NhbGVY77yJXG4gICAgICAgIGlmICh0ZWFtID09PSBcImhlcm9cIikge1xuICAgICAgICAgICAgdW5pdE5vZGUuc2NhbGVYID0gTWF0aC5hYnModW5pdE5vZGUuc2NhbGVYKTsgLy8g56Gu5L+d5Li65q2j77yI6Z2i5ZCR5Y+z6L6577yJXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1bml0Tm9kZS5zY2FsZVggPSAtTWF0aC5hYnModW5pdE5vZGUuc2NhbGVYKTsgLy8g56Gu5L+d5Li66LSf77yI6Z2i5ZCR5bem6L6577yJXG4gICAgICAgIH1cbiAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g6K6+572uJHt0ZWFtfeiKgueCueWIneWni+mdouWQkTogc2NhbGVYPSR7dW5pdE5vZGUuc2NhbGVYfWApO1xuXG4gICAgICAgIC8vIOS/neWtmOWNleS9jeaVsOaNruWIsOiKgueCue+8iOeUqOS6juWQjue7reWIneWni+WMlu+8iVxuICAgICAgICB1bml0Tm9kZS5fdW5pdERhdGEgPSB1bml0RGF0YTtcbiAgICAgICAgdW5pdE5vZGUuX3RlYW0gPSB0ZWFtO1xuXG4gICAgICAgIC8vIOajgOafpeiKgueCueaYr+WQpuacieW/hemcgOeahOe7hOS7tlxuICAgICAgICBjb25zdCBzdGF0cyA9IHVuaXROb2RlLmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xuICAgICAgICBjb25zdCB0ZWFtQ29tcCA9IHVuaXROb2RlLmdldENvbXBvbmVudChcIlRlYW1Db21wb25lbnRcIik7XG4gICAgICAgIGNvbnN0IHNraWxscyA9IHVuaXROb2RlLmdldENvbXBvbmVudChcIlNraWxsQ29tcG9uZW50XCIpO1xuICAgICAgICBjb25zdCBza2VsZXRvbiA9IHVuaXROb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG5cbiAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gJHt0ZWFtfeiKgueCuee7hOS7tuajgOafpTogJHt1bml0RGF0YS5uYW1lfWApO1xuICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSAgIFN0YXRzQ29tcG9uZW50OiAke3N0YXRzID8gJ+KckycgOiAn4pyXJ31gKTtcbiAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gICBUZWFtQ29tcG9uZW50OiAke3RlYW1Db21wID8gJ+KckycgOiAn4pyXJ31gKTtcbiAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gICBTa2lsbENvbXBvbmVudDogJHtza2lsbHMgPyAn4pyTJyA6ICfinJcnfWApO1xuICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSAgIFNwaW5lIFNrZWxldG9uOiAke3NrZWxldG9uID8gJ+KckycgOiAn4pyXJ31gKTtcblxuICAgICAgICBpZiAoIXN0YXRzKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihgW0JhdHRsZUNvbnRyb2xsZXJdIOKclyAke3RlYW196IqC54K557y65bCRU3RhdHNDb21wb25lbnTnu4Tku7Y6ICR7dW5pdERhdGEubmFtZX1gKTtcbiAgICAgICAgICAgIGNjLmVycm9yKGBbQmF0dGxlQ29udHJvbGxlcl0gICDor7flnKhQcmVmYWIgXCIke3ByZWZhYi5uYW1lfVwiIOeahOagueiKgueCueS4iua3u+WKoFN0YXRzQ29tcG9uZW5057uE5Lu2YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0ZWFtQ29tcCkge1xuICAgICAgICAgICAgY2MuZXJyb3IoYFtCYXR0bGVDb250cm9sbGVyXSDinJcgJHt0ZWFtfeiKgueCuee8uuWwkVRlYW1Db21wb25lbnTnu4Tku7Y6ICR7dW5pdERhdGEubmFtZX1gKTtcbiAgICAgICAgICAgIGNjLmVycm9yKGBbQmF0dGxlQ29udHJvbGxlcl0gICDor7flnKhQcmVmYWIgXCIke3ByZWZhYi5uYW1lfVwiIOeahOagueiKgueCueS4iua3u+WKoFRlYW1Db21wb25lbnTnu4Tku7ZgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNraWxscykge1xuICAgICAgICAgICAgY2MuZXJyb3IoYFtCYXR0bGVDb250cm9sbGVyXSDinJcgJHt0ZWFtfeiKgueCuee8uuWwkVNraWxsQ29tcG9uZW5057uE5Lu2OiAke3VuaXREYXRhLm5hbWV9YCk7XG4gICAgICAgICAgICBjYy5lcnJvcihgW0JhdHRsZUNvbnRyb2xsZXJdICAg6K+35ZyoUHJlZmFiIFwiJHtwcmVmYWIubmFtZX1cIiDnmoTmoLnoioLngrnkuIrmt7vliqBTa2lsbENvbXBvbmVudOe7hOS7tmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2tlbGV0b24pIHtcbiAgICAgICAgICAgIGNjLndhcm4oYFtCYXR0bGVDb250cm9sbGVyXSDimqDvuI8gJHt0ZWFtfeiKgueCuee8uuWwkVNwaW5lIFNrZWxldG9u57uE5Lu2OiAke3VuaXREYXRhLm5hbWV9YCk7XG4gICAgICAgICAgICBjYy53YXJuKGBbQmF0dGxlQ29udHJvbGxlcl0gICDoioLngrnlj6/og73msqHmnInliqjnlLvmmL7npLrvvIzor7flnKhQcmVmYWIgXCIke3ByZWZhYi5uYW1lfVwiIOS4iua3u+WKoHNwLlNrZWxldG9u57uE5Lu2YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDmo4Dmn6VTcGluZei1hOa6kOaYr+WQpuWKoOi9vVxuICAgICAgICAgICAgaWYgKCFza2VsZXRvbi5za2VsZXRvbkRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKGBbQmF0dGxlQ29udHJvbGxlcl0g4pqg77iPICR7dGVhbX3oioLngrnnmoRTcGluZSBTa2VsZXRvbue7hOS7tuayoeaciXNrZWxldG9uRGF0YTogJHt1bml0RGF0YS5uYW1lfWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSAgIFNwaW5l6LWE5rqQOiAke3NrZWxldG9uLnNrZWxldG9uRGF0YS5uYW1lIHx8ICflt7LliqDovb0nfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5qOA5p+l6IqC54K55YaF5a655aSn5bCPXG4gICAgICAgIGNvbnN0IGNvbnRlbnRTaXplID0gdW5pdE5vZGUuZ2V0Q29udGVudFNpemUoKTtcbiAgICAgICAgaWYgKGNvbnRlbnRTaXplLndpZHRoID09PSAwICYmIGNvbnRlbnRTaXplLmhlaWdodCA9PT0gMCkge1xuICAgICAgICAgICAgY2Mud2FybihgW0JhdHRsZUNvbnRyb2xsZXJdIOKaoO+4jyAke3RlYW196IqC54K55YaF5a655aSn5bCP5Li6MDogJHt1bml0RGF0YS5uYW1lfWApO1xuICAgICAgICAgICAgY2Mud2FybihgW0JhdHRsZUNvbnRyb2xsZXJdICAg6L+Z6YCa5bi45oSP5ZGz552A6IqC54K55rKh5pyJ6KeG6KeJ5YaF5a6577yI5aaCU3ByaXRl5oiWU3BpbmXvvIlgKTtcbiAgICAgICAgICAgIGNjLndhcm4oYFtCYXR0bGVDb250cm9sbGVyXSAgIOivt+ajgOafpVByZWZhYiBcIiR7cHJlZmFiLm5hbWV9XCIg5piv5ZCm5pyJU3ByaXRl5oiWU3BpbmXlrZDoioLngrlgKTtcblxuICAgICAgICAgICAgLy8g5bCd6K+V5LuO5a2Q6IqC54K56I635Y+W5aSn5bCPXG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHVuaXROb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgaWYgKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgbWF4V2lkdGggPSAwLCBtYXhIZWlnaHQgPSAwO1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZFNpemUgPSBjaGlsZC5nZXRDb250ZW50U2l6ZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZExvY2FsUG9zID0gY2hpbGQuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkU2l6ZS53aWR0aCA+IG1heFdpZHRoKSBtYXhXaWR0aCA9IGNoaWxkU2l6ZS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkU2l6ZS5oZWlnaHQgPiBtYXhIZWlnaHQpIG1heEhlaWdodCA9IGNoaWxkU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdICAg5a2Q6IqC54K5OiAke2NoaWxkLm5hbWV9LCDlpKflsI86ICR7Y2hpbGRTaXplLndpZHRofXgke2NoaWxkU2l6ZS5oZWlnaHR9LCDkvY3nva46ICgke2NoaWxkTG9jYWxQb3MueH0sICR7Y2hpbGRMb2NhbFBvcy55fSlgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAobWF4V2lkdGggPiAwIHx8IG1heEhlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gICDlu7rorq7orr7nva7oioLngrnlhoXlrrnlpKflsI86ICR7bWF4V2lkdGh9eCR7bWF4SGVpZ2h0fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2Mud2FybihgW0JhdHRsZUNvbnRyb2xsZXJdICAgUHJlZmFiIFwiJHtwcmVmYWIubmFtZX1cIiDmsqHmnInku7vkvZXlrZDoioLngrlgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOacgOe7iOaXpeW/l+i+k+WHulxuICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDinJMg5Yib5bu6JHt0ZWFtfeiKgueCueWujOaIkDogJHt1bml0RGF0YS5uYW1lfWApO1xuICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSAgIOacrOWcsOS9jee9rjogKCR7cG9zaXRpb24ueC50b0ZpeGVkKDEpfSwgJHtwb3NpdGlvbi55LnRvRml4ZWQoMSl9KWApO1xuICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSAgIOiKgueCueWkp+WwjzogJHtjb250ZW50U2l6ZS53aWR0aC50b0ZpeGVkKDEpfXgke2NvbnRlbnRTaXplLmhlaWdodC50b0ZpeGVkKDEpfWApO1xuICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSAgIOiKgueCuWFjdGl2ZTogJHt1bml0Tm9kZS5hY3RpdmV9LCBvcGFjaXR5OiAke3VuaXROb2RlLm9wYWNpdHl9YCk7XG4gICAgICAgIGlmICh1bml0Tm9kZS5wYXJlbnQpIHtcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdICAg54i26IqC54K5OiAke3VuaXROb2RlLnBhcmVudC5uYW1lfSwg54i26IqC54K55L2N572uOiAoJHt1bml0Tm9kZS5wYXJlbnQueH0sICR7dW5pdE5vZGUucGFyZW50Lnl9KWApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuaXROb2RlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDorqHnrpfmjpLlhbXluIPpmLXkvY3nva7vvIjluKbpl7TpmpTmo4Dmn6XvvIzpmLLmraLph43lj6DvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZWFtIC0g6Zif5LyN57G75Z6LXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0g57Si5byVXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRvdGFsQ291bnQgLSDmgLvmlbDph49cbiAgICAgKiBAcmV0dXJucyB7Y2MuVmVjMn0g5L2N572u5Z2Q5qCHXG4gICAgICovXG4gICAgX2NhbGN1bGF0ZUZvcm1hdGlvblBvc2l0aW9uKHRlYW0sIGluZGV4LCB0b3RhbENvdW50KSB7XG4gICAgICAgIGxldCB4LCB5O1xuICAgICAgICBsZXQgcmFuZ2VYLCByYW5nZVk7XG4gICAgICAgIGxldCBhcmVhTGVmdCwgYXJlYVJpZ2h0LCBhcmVhVG9wLCBhcmVhQm90dG9tO1xuXG4gICAgICAgIC8vIOagueaNrumYn+S8jeexu+Wei+ehruWumuWMuuWfn+iMg+WbtFxuICAgICAgICBpZiAodGVhbSA9PT0gXCJoZXJvXCIpIHtcbiAgICAgICAgICAgIGFyZWFMZWZ0ID0gdGhpcy5oZXJvQXJlYUxlZnQ7XG4gICAgICAgICAgICBhcmVhUmlnaHQgPSB0aGlzLmhlcm9BcmVhUmlnaHQ7XG4gICAgICAgICAgICBhcmVhVG9wID0gdGhpcy5oZXJvQXJlYVRvcDtcbiAgICAgICAgICAgIGFyZWFCb3R0b20gPSB0aGlzLmhlcm9BcmVhQm90dG9tO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJlYUxlZnQgPSB0aGlzLm1vbnN0ZXJBcmVhTGVmdDtcbiAgICAgICAgICAgIGFyZWFSaWdodCA9IHRoaXMubW9uc3RlckFyZWFSaWdodDtcbiAgICAgICAgICAgIGFyZWFUb3AgPSB0aGlzLm1vbnN0ZXJBcmVhVG9wO1xuICAgICAgICAgICAgYXJlYUJvdHRvbSA9IHRoaXMubW9uc3RlckFyZWFCb3R0b207XG4gICAgICAgIH1cblxuICAgICAgICByYW5nZVggPSBhcmVhUmlnaHQgLSBhcmVhTGVmdDtcbiAgICAgICAgcmFuZ2VZID0gYXJlYVRvcCAtIGFyZWFCb3R0b207XG5cbiAgICAgICAgLy8g5qOA5p+l5Yy65Z+f6K6+572u5piv5ZCm5ZCI55CGXG4gICAgICAgIGlmIChyYW5nZVggPD0gMCB8fCByYW5nZVkgPD0gMCkge1xuICAgICAgICAgICAgY2Mud2FybihgW0JhdHRsZUNvbnRyb2xsZXJdIOKaoO+4jyAke3RlYW195Yy65Z+f6K6+572u5LiN5ZCI55CGOiBMZWZ0PSR7YXJlYUxlZnR9LCBSaWdodD0ke2FyZWFSaWdodH0sIFRvcD0ke2FyZWFUb3B9LCBCb3R0b209JHthcmVhQm90dG9tfWApO1xuICAgICAgICAgICAgLy8g5L2/55So6buY6K6k5YC8XG4gICAgICAgICAgICBpZiAodGVhbSA9PT0gXCJoZXJvXCIpIHtcbiAgICAgICAgICAgICAgICB4ID0gLTIwMDtcbiAgICAgICAgICAgICAgICB5ID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeCA9IDIwMDtcbiAgICAgICAgICAgICAgICB5ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjYy52Mih4LCB5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiOt+WPluivpemYn+S8jeW3sueUn+aIkOeahOS9jee9ruWIl+ihqFxuICAgICAgICBjb25zdCBleGlzdGluZ1Bvc2l0aW9ucyA9IHRoaXMuX2dlbmVyYXRlZFBvc2l0aW9uc1t0ZWFtXSB8fCBbXTtcbiAgICAgICAgY29uc3QgbWluU3BhY2luZyA9IHRoaXMubWluVW5pdFNwYWNpbmcgfHwgMTAwOyAgLy8g5pyA5bCP6Ze06ZqU6Led56a7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMTAwOyAgLy8g5pyA5aSa5bCd6K+V5qyh5pWw77yI5aKe5Yqg5bCd6K+V5qyh5pWw77yM5o+Q6auY6ZqP5py65YiG5biD5oiQ5Yqf546H77yJXG5cbiAgICAgICAgLy8g5bCd6K+V55Sf5oiQ5LiA5Liq5LiN5LiO5bey5pyJ5L2N572u6YeN5Y+g55qE5L2N572uXG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGxldCB2YWxpZFBvc2l0aW9uID0gZmFsc2U7XG5cbiAgICAgICAgd2hpbGUgKCF2YWxpZFBvc2l0aW9uICYmIGF0dGVtcHRzIDwgbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgIC8vIOeUn+aIkOmaj+acuuS9jee9ru+8iOS/neaMgeWOn+acieeahOmaj+acuuWIhuW4g+mAu+i+ke+8iVxuICAgICAgICAgICAgeCA9IGFyZWFMZWZ0ICsgTWF0aC5yYW5kb20oKSAqIHJhbmdlWDtcbiAgICAgICAgICAgIHkgPSBhcmVhQm90dG9tICsgTWF0aC5yYW5kb20oKSAqIHJhbmdlWTtcblxuICAgICAgICAgICAgLy8g5qOA5p+l5piv5ZCm5LiO5bey5pyJ5L2N572u5aSq6L+RXG4gICAgICAgICAgICB2YWxpZFBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhpc3RpbmdQb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1BvcyA9IGV4aXN0aW5nUG9zaXRpb25zW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KFxuICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdyh4IC0gZXhpc3RpbmdQb3MueCwgMikgKyBNYXRoLnBvdyh5IC0gZXhpc3RpbmdQb3MueSwgMilcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgbWluU3BhY2luZykge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZFBvc2l0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWmguaenOWwneivleWkmuasoeWQjuS7jeeEtuaJvuS4jeWIsOWQiOmAguS9jee9ru+8jOS9v+eUqOaUuei/m+eahOWQjuWkh+aWueahiO+8iOS/neaMgemaj+acuuWIhuW4g+mjjuagvO+8iVxuICAgICAgICBpZiAoIXZhbGlkUG9zaXRpb24pIHtcbiAgICAgICAgICAgIGNjLndhcm4oYFtCYXR0bGVDb250cm9sbGVyXSDimqDvuI8gJHt0ZWFtfeWNleS9jSR7aW5kZXh95peg5rOV5om+5Yiw5ZCI6YCC5L2N572u77yI5bCd6K+VJHthdHRlbXB0c33mrKHvvInvvIzkvb/nlKjmlLnov5vnmoTlkI7lpIfmlrnmoYhgKTtcblxuICAgICAgICAgICAgLy8g5pS56L+b55qE5ZCO5aSH5pa55qGI77ya5Zyo5bey5pyJ5L2N572u5ZGo5Zu05a+75om+56m66ZqZ77yM5L+d5oyB6ZqP5py65YiG5biD55qE5oSf6KeJXG4gICAgICAgICAgICAvLyDlpoLmnpzljLrln5/otrPlpJ/lpKfvvIzlsJ3or5XlnKjlt7LmnInkvY3nva7lkajlm7Tlr7vmib7nqbrpmplcbiAgICAgICAgICAgIGxldCBmb3VuZEdhcCA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgZ2FwQXR0ZW1wdHMgPSAzMDtcblxuICAgICAgICAgICAgZm9yIChsZXQgZ2FwQXR0ZW1wdCA9IDA7IGdhcEF0dGVtcHQgPCBnYXBBdHRlbXB0cyAmJiAhZm91bmRHYXA7IGdhcEF0dGVtcHQrKykge1xuICAgICAgICAgICAgICAgIC8vIOmaj+acuumAieaLqeS4gOS4quW3suacieS9jee9ruS9nOS4uuWPguiAg+eCuVxuICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1Bvc2l0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZlBvcyA9IGV4aXN0aW5nUG9zaXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGV4aXN0aW5nUG9zaXRpb25zLmxlbmd0aCldO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIOWcqOWPguiAg+eCueWRqOWbtOmaj+acuuWBj+enu++8iOWBj+enu+i3neemu+iHs+WwkeS4um1pblNwYWNpbmfvvIlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldERpc3RhbmNlID0gbWluU3BhY2luZyArIE1hdGgucmFuZG9tKCkgKiBtaW5TcGFjaW5nOyAvLyDlgY/np7vot53nprvvvJptaW5TcGFjaW5nIOWIsCAyKm1pblNwYWNpbmdcblxuICAgICAgICAgICAgICAgICAgICB4ID0gcmVmUG9zLnggKyBNYXRoLmNvcyhhbmdsZSkgKiBvZmZzZXREaXN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgeSA9IHJlZlBvcy55ICsgTWF0aC5zaW4oYW5nbGUpICogb2Zmc2V0RGlzdGFuY2U7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g56Gu5L+d5Zyo5Yy65Z+f5YaFXG4gICAgICAgICAgICAgICAgICAgIHggPSBNYXRoLm1heChhcmVhTGVmdCwgTWF0aC5taW4oYXJlYVJpZ2h0LCB4KSk7XG4gICAgICAgICAgICAgICAgICAgIHkgPSBNYXRoLm1heChhcmVhQm90dG9tLCBNYXRoLm1pbihhcmVhVG9wLCB5KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g5qOA5p+l5piv5ZCm5ruh6Laz6Ze06ZqU6KaB5rGCXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kR2FwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleGlzdGluZ1Bvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdQb3MgPSBleGlzdGluZ1Bvc2l0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucG93KHggLSBleGlzdGluZ1Bvcy54LCAyKSArIE1hdGgucG93KHkgLSBleGlzdGluZ1Bvcy55LCAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgbWluU3BhY2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kR2FwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOWmguaenOS7jeeEtuaJvuS4jeWIsOepuumame+8jOS9v+eUqOeugOWNleeahOe9keagvOW4g+WxgO+8iOacgOWQjueahOWQjuWkh+aWueahiO+8iVxuICAgICAgICAgICAgaWYgKCFmb3VuZEdhcCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRDb2xzID0gTWF0aC5jZWlsKE1hdGguc3FydCh0b3RhbENvdW50KSk7ICAvLyDliJfmlbBcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkUm93cyA9IE1hdGguY2VpbCh0b3RhbENvdW50IC8gZ3JpZENvbHMpOyAgLy8g6KGM5pWwXG5cbiAgICAgICAgICAgICAgICBjb25zdCBncmlkWCA9IGluZGV4ICUgZ3JpZENvbHM7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZFkgPSBNYXRoLmZsb29yKGluZGV4IC8gZ3JpZENvbHMpO1xuXG4gICAgICAgICAgICAgICAgLy8g6K6h566X572R5qC86Ze06Led77yI56Gu5L+d5LiN6LaF6L+H5Yy65Z+f6IyD5Zu077yJXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZFNwYWNpbmdYID0gTWF0aC5taW4ocmFuZ2VYIC8gKGdyaWRDb2xzICsgMSksIG1pblNwYWNpbmcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRTcGFjaW5nWSA9IE1hdGgubWluKHJhbmdlWSAvIChncmlkUm93cyArIDEpLCBtaW5TcGFjaW5nKTtcblxuICAgICAgICAgICAgICAgIC8vIOiuoeeul+e9keagvOS9jee9ru+8iOWcqOWQhOiHquWMuuWfn+WGheWxheS4reaOkuWIl++8jOS/neaMgeW3puWPs+WIhuemu++8iVxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsR3JpZFdpZHRoID0gKGdyaWRDb2xzIC0gMSkgKiBncmlkU3BhY2luZ1g7XG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxHcmlkSGVpZ2h0ID0gKGdyaWRSb3dzIC0gMSkgKiBncmlkU3BhY2luZ1k7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRYID0gYXJlYUxlZnQgKyAocmFuZ2VYIC0gdG90YWxHcmlkV2lkdGgpIC8gMjtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydFkgPSBhcmVhQm90dG9tICsgKHJhbmdlWSAtIHRvdGFsR3JpZEhlaWdodCkgLyAyO1xuXG4gICAgICAgICAgICAgICAgeCA9IHN0YXJ0WCArIGdyaWRYICogZ3JpZFNwYWNpbmdYO1xuICAgICAgICAgICAgICAgIHkgPSBzdGFydFkgKyBncmlkWSAqIGdyaWRTcGFjaW5nWTtcblxuICAgICAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdICR7dGVhbX3ljZXkvY0ke2luZGV4feS9v+eUqOe9keagvOW4g+WxgO+8iOacgOWQjuWQjuWkh++8iTog572R5qC8KCR7Z3JpZFh9LCAke2dyaWRZfSksIOS9jee9rjogKCR7eC50b0ZpeGVkKDEpfSwgJHt5LnRvRml4ZWQoMSl9KWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSAke3RlYW195Y2V5L2NJHtpbmRleH3kvb/nlKjnqbrpmpnmn6Xmib46IOS9jee9rjogKCR7eC50b0ZpeGVkKDEpfSwgJHt5LnRvRml4ZWQoMSl9KWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gJHt0ZWFtfeS9jee9ruiuoeeulzog5Yy65Z+fWyR7YXJlYUxlZnR9LCAke2FyZWFSaWdodH1deFske2FyZWFCb3R0b219LCAke2FyZWFUb3B9XSwg57uT5p6cOiAoJHt4LnRvRml4ZWQoMSl9LCAke3kudG9GaXhlZCgxKX0pLCDlsJ3or5XmrKHmlbA6ICR7YXR0ZW1wdHN9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlsIbmlrDkvY3nva7mt7vliqDliLDlt7LnlJ/miJDkvY3nva7liJfooahcbiAgICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSBjYy52Mih4LCB5KTtcbiAgICAgICAgaWYgKCF0aGlzLl9nZW5lcmF0ZWRQb3NpdGlvbnNbdGVhbV0pIHtcbiAgICAgICAgICAgIHRoaXMuX2dlbmVyYXRlZFBvc2l0aW9uc1t0ZWFtXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2dlbmVyYXRlZFBvc2l0aW9uc1t0ZWFtXS5wdXNoKG5ld1Bvc2l0aW9uKTtcblxuICAgICAgICByZXR1cm4gbmV3UG9zaXRpb247XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOS7jueItuiKgueCueiOt+WPluaJgOacieWtkOiKgueCueS9nOS4uuaImOaWl+WNleS9jVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2dldFVuaXRzRnJvbVBhcmVudCgpIHtcbiAgICAgICAgLy8g6I635Y+W6Iux6ZuEXG4gICAgICAgIGlmICh0aGlzLmhlcm9QYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaGVyb3MgPSB0aGlzLmhlcm9QYXJlbnQuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmFjdGl2ZSk7XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDku44gaGVyb1BhcmVudCDojrflj5bliLAgJHt0aGlzLmhlcm9zLmxlbmd0aH0g5Liq6Iux6ZuEYCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDojrflj5bmgKrnialcbiAgICAgICAgaWYgKHRoaXMubW9uc3RlclBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5tb25zdGVycyA9IHRoaXMubW9uc3RlclBhcmVudC5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQuYWN0aXZlKTtcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOS7jiBtb25zdGVyUGFyZW50IOiOt+WPluWIsCAke3RoaXMubW9uc3RlcnMubGVuZ3RofSDkuKrmgKrnialgKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDku47phY3nva7nmoToioLngrnmlbDnu4Tojrflj5bmiJjmlpfljZXkvY1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9nZXRVbml0c0Zyb21BcnJheSgpIHtcbiAgICAgICAgLy8g6I635Y+W6Iux6ZuE77yI6L+H5ruk5o6J5peg5pWI5ZKM5pyq5r+A5rS755qE6IqC54K577yJXG4gICAgICAgIHRoaXMuaGVyb3MgPSB0aGlzLmhlcm9Ob2Rlcy5maWx0ZXIobm9kZSA9PiBub2RlICYmIG5vZGUuaXNWYWxpZCAmJiBub2RlLmFjdGl2ZSk7XG4gICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOS7jiBoZXJvTm9kZXMg6I635Y+W5YiwICR7dGhpcy5oZXJvcy5sZW5ndGh9IOS4quiLsembhGApO1xuXG4gICAgICAgIC8vIOiOt+WPluaAqueJqVxuICAgICAgICB0aGlzLm1vbnN0ZXJzID0gdGhpcy5tb25zdGVyTm9kZXMuZmlsdGVyKG5vZGUgPT4gbm9kZSAmJiBub2RlLmlzVmFsaWQgJiYgbm9kZS5hY3RpdmUpO1xuICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDku44gbW9uc3Rlck5vZGVzIOiOt+WPluWIsCAke3RoaXMubW9uc3RlcnMubGVuZ3RofSDkuKrmgKrnialgKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5omA5pyJ5oiY5paX5Y2V5L2NXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhc3luYyBfaW5pdEFsbFVuaXRzKCkge1xuICAgICAgICBjb25zdCB7IFNraWxsQ29uZmlnIH0gPSB0aGlzO1xuXG4gICAgICAgIC8vIOinkuiJsuaVsOaNrumFjee9ru+8iOagueaNruWQjeensOWMuemFje+8iVxuICAgICAgICBjb25zdCB1bml0RGF0YUNvbmZpZyA9IHtcbiAgICAgICAgICAgIFwi5oiY5aOrXCI6IHtcbiAgICAgICAgICAgICAgICBocDogMTIwLFxuICAgICAgICAgICAgICAgIGF0dGFjazogOCxcbiAgICAgICAgICAgICAgICBkZWZlbnNlOiAxMCxcbiAgICAgICAgICAgICAgICBzcGVlZDogMTIsXG4gICAgICAgICAgICAgICAgY3JpdDogMC4xNSxcbiAgICAgICAgICAgICAgICBza2lsbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgU2tpbGxDb25maWcubm9ybWFsQXR0YWNrLFxuICAgICAgICAgICAgICAgICAgICBTa2lsbENvbmZpZy5zdHVuU2tpbGwsXG4gICAgICAgICAgICAgICAgICAgIFNraWxsQ29uZmlnLnNoaWVsZEFsbGllc1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIuazleW4iFwiOiB7XG4gICAgICAgICAgICAgICAgaHA6IDgwLFxuICAgICAgICAgICAgICAgIGF0dGFjazogMTIsXG4gICAgICAgICAgICAgICAgZGVmZW5zZTogNCxcbiAgICAgICAgICAgICAgICBzcGVlZDogOCxcbiAgICAgICAgICAgICAgICBjcml0OiAwLjEsXG4gICAgICAgICAgICAgICAgbWlzczogMC4xLFxuICAgICAgICAgICAgICAgIHNraWxsczogW1xuICAgICAgICAgICAgICAgICAgICBTa2lsbENvbmZpZy5ub3JtYWxBdHRhY2ssXG4gICAgICAgICAgICAgICAgICAgIFNraWxsQ29uZmlnLmZpcmViYWxsXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwi5oCq54mpXCI6IHtcbiAgICAgICAgICAgICAgICBocDogODAsXG4gICAgICAgICAgICAgICAgYXR0YWNrOiAxMCxcbiAgICAgICAgICAgICAgICBkZWZlbnNlOiA1LFxuICAgICAgICAgICAgICAgIHNwZWVkOiAxNSxcbiAgICAgICAgICAgICAgICBza2lsbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgU2tpbGxDb25maWcubm9ybWFsQXR0YWNrLFxuICAgICAgICAgICAgICAgICAgICBTa2lsbENvbmZpZy5iZWFzdFJhZ2VcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJCb3NzXCI6IHtcbiAgICAgICAgICAgICAgICBocDogMTUwLFxuICAgICAgICAgICAgICAgIGF0dGFjazogMTIsXG4gICAgICAgICAgICAgICAgZGVmZW5zZTogOCxcbiAgICAgICAgICAgICAgICBzcGVlZDogMTAsXG4gICAgICAgICAgICAgICAgc2tpbGxzOiBbXG4gICAgICAgICAgICAgICAgICAgIFNraWxsQ29uZmlnLm5vcm1hbEF0dGFjayxcbiAgICAgICAgICAgICAgICAgICAgU2tpbGxDb25maWcud2FyQ3J5XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIOWIneWni+WMluiLsembhFxuICAgICAgICBmb3IgKGxldCBub2RlIG9mIHRoaXMuaGVyb3MpIHtcbiAgICAgICAgICAgIC8vIOWmguaenOaYr+S7jumAieaLqeWcuuaZr+WIm+W7uueahOiKgueCue+8jOS9v+eUqOS/neWtmOeahOWNleS9jeaVsOaNrlxuICAgICAgICAgICAgbGV0IGRhdGE7XG4gICAgICAgICAgICBpZiAobm9kZS5fdW5pdERhdGEpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gbm9kZS5fdW5pdERhdGE7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g5L2/55So6YCJ5oup5Zy65pmv55qE5Y2V5L2N5pWw5o2u5Yid5aeL5YyWOiAke25vZGUubmFtZX1gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IHVuaXREYXRhQ29uZmlnW25vZGUubmFtZV0gfHwgdGhpcy5fZ2V0RGVmYXVsdERhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuaW5pdEVudGl0eShub2RlLCBkYXRhLCBcImhlcm9cIik7XG5cbiAgICAgICAgICAgIC8vIOiuvue9ruWIneWni+W+heacuuWKqOeUu1xuICAgICAgICAgICAgY29uc3Qgc2tlbGV0b24gPSBub2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICBpZiAoc2tlbGV0b24pIHtcbiAgICAgICAgICAgICAgICBza2VsZXRvbi5zZXRBbmltYXRpb24oMCwgQW5pbWF0aW9uU3RhdGUuV0FJVCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOWIneWni+WMluiLsembhDogJHtub2RlLm5hbWV9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDliJ3lp4vljJbmgKrnialcbiAgICAgICAgZm9yIChsZXQgbm9kZSBvZiB0aGlzLm1vbnN0ZXJzKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzmmK/ku47pgInmi6nlnLrmma/liJvlu7rnmoToioLngrnvvIzkvb/nlKjkv53lrZjnmoTljZXkvY3mlbDmja5cbiAgICAgICAgICAgIGxldCBkYXRhO1xuICAgICAgICAgICAgaWYgKG5vZGUuX3VuaXREYXRhKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IG5vZGUuX3VuaXREYXRhO1xuICAgICAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOS9v+eUqOmAieaLqeWcuuaZr+eahOWNleS9jeaVsOaNruWIneWni+WMljogJHtub2RlLm5hbWV9YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEgPSB1bml0RGF0YUNvbmZpZ1tub2RlLm5hbWVdIHx8IHRoaXMuX2dldERlZmF1bHREYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmluaXRFbnRpdHkobm9kZSwgZGF0YSwgXCJtb25zdGVyXCIpO1xuXG4gICAgICAgICAgICAvLyDorr7nva7liJ3lp4vlvoXmnLrliqjnlLtcbiAgICAgICAgICAgIGNvbnN0IHNrZWxldG9uID0gbm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgaWYgKHNrZWxldG9uKSB7XG4gICAgICAgICAgICAgICAgc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIEFuaW1hdGlvblN0YXRlLldBSVQsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDliJ3lp4vljJbmgKrniak6ICR7bm9kZS5uYW1lfWApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiOt+WPlum7mOiupOaVsOaNru+8iOWmguaenOayoeaciemFjee9ru+8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2dldERlZmF1bHREYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHA6IDEwMCxcbiAgICAgICAgICAgIGF0dGFjazogMTAsXG4gICAgICAgICAgICBkZWZlbnNlOiA1LFxuICAgICAgICAgICAgc3BlZWQ6IDEwLFxuICAgICAgICAgICAgY3JpdDogMC4xLFxuICAgICAgICAgICAgc2tpbGxzOiBbdGhpcy5Ta2lsbENvbmZpZy5ub3JtYWxBdHRhY2tdXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGFzeW5jIGluaXRFbnRpdHkobm9kZSwgZGF0YSwgdGVhbU5hbWUpIHtcbiAgICAgICAgY29uc3Qgc3RhdHMgPSBub2RlLmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xuICAgICAgICBjb25zdCB0ZWFtID0gbm9kZS5nZXRDb21wb25lbnQoXCJUZWFtQ29tcG9uZW50XCIpO1xuICAgICAgICBjb25zdCBza2lsbHMgPSBub2RlLmdldENvbXBvbmVudChcIlNraWxsQ29tcG9uZW50XCIpO1xuXG4gICAgICAgIC8vIOajgOafpeW/hemcgOe7hOS7tuaYr+WQpuWtmOWcqFxuICAgICAgICBpZiAoIXN0YXRzKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihg4p2MIFtCYXR0bGVDb250cm9sbGVyXSDoioLngrkgXCIke25vZGUubmFtZX1cIiDnvLrlsJEgU3RhdHNDb21wb25lbnQg57uE5Lu2IWApO1xuICAgICAgICAgICAgY2MuZXJyb3IoYCAgIOivt+WcqOiKgueCueS4iua3u+WKoCBTdGF0c0NvbXBvbmVudCDnu4Tku7ZgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRlYW0pIHtcbiAgICAgICAgICAgIGNjLmVycm9yKGDinYwgW0JhdHRsZUNvbnRyb2xsZXJdIOiKgueCuSBcIiR7bm9kZS5uYW1lfVwiIOe8uuWwkSBUZWFtQ29tcG9uZW50IOe7hOS7tiFgKTtcbiAgICAgICAgICAgIGNjLmVycm9yKGAgICDor7flnKjoioLngrnkuIrmt7vliqAgVGVhbUNvbXBvbmVudCDnu4Tku7ZgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNraWxscykge1xuICAgICAgICAgICAgY2MuZXJyb3IoYOKdjCBbQmF0dGxlQ29udHJvbGxlcl0g6IqC54K5IFwiJHtub2RlLm5hbWV9XCIg57y65bCRIFNraWxsQ29tcG9uZW50IOe7hOS7tiFgKTtcbiAgICAgICAgICAgIGNjLmVycm9yKGAgICDor7flnKjoioLngrnkuIrmt7vliqAgU2tpbGxDb21wb25lbnQg57uE5Lu2YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDph43opoHvvJrlhYjliqDovb3kv53lrZjnmoTnrYnnuqfmlbDmja7vvIzku6Xkvr/mraPnoa7orr7nva7ln7rnoYDlsZ7mgKdcbiAgICAgICAgY29uc3QgQ2hhcmFjdGVyRGF0YU1hbmFnZXIgPSByZXF1aXJlKFwiQ2hhcmFjdGVyRGF0YU1hbmFnZXJcIik7XG4gICAgICAgIGNvbnN0IHNhdmVkRGF0YSA9IGF3YWl0IENoYXJhY3RlckRhdGFNYW5hZ2VyLmxvYWRDaGFyYWN0ZXJMZXZlbChkYXRhLm5hbWUgfHwgbm9kZS5uYW1lKTtcblxuICAgICAgICAvLyDlpoLmnpzmnInkv53lrZjnmoTln7rnoYDlsZ7mgKfmlbDmja7vvIzkvJjlhYjkvb/nlKjkv53lrZjnmoTln7rnoYDlsZ7mgKfvvIjnlKjkuo7mraPnoa7orqHnrpfnrYnnuqfliqDmiJDvvIlcbiAgICAgICAgaWYgKHNhdmVkRGF0YSkge1xuICAgICAgICAgICAgaWYgKHNhdmVkRGF0YS5iYXNlSHApIHN0YXRzLmJhc2VIcCA9IHNhdmVkRGF0YS5iYXNlSHA7XG4gICAgICAgICAgICBpZiAoc2F2ZWREYXRhLmJhc2VBdHRhY2spIHN0YXRzLmJhc2VBdHRhY2sgPSBzYXZlZERhdGEuYmFzZUF0dGFjaztcbiAgICAgICAgICAgIGlmIChzYXZlZERhdGEuYmFzZURlZmVuc2UpIHN0YXRzLmJhc2VEZWZlbnNlID0gc2F2ZWREYXRhLmJhc2VEZWZlbnNlO1xuICAgICAgICAgICAgaWYgKHNhdmVkRGF0YS5iYXNlU3BlZWQpIHN0YXRzLmJhc2VTcGVlZCA9IHNhdmVkRGF0YS5iYXNlU3BlZWQ7XG4gICAgICAgICAgICBpZiAoc2F2ZWREYXRhLmJhc2VDcml0ICE9PSB1bmRlZmluZWQpIHN0YXRzLmJhc2VDcml0ID0gc2F2ZWREYXRhLmJhc2VDcml0O1xuICAgICAgICAgICAgaWYgKHNhdmVkRGF0YS5iYXNlTWlzcyAhPT0gdW5kZWZpbmVkKSBzdGF0cy5iYXNlTWlzcyA9IHNhdmVkRGF0YS5iYXNlTWlzcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWmguaenOayoeacieS/neWtmOeahOaVsOaNru+8jOS9v+eUqGRhdGHkuK3nmoTln7rnoYDlsZ7mgKdcbiAgICAgICAgICAgIGlmIChkYXRhLmhwKSBzdGF0cy5iYXNlSHAgPSBkYXRhLmhwO1xuICAgICAgICAgICAgaWYgKGRhdGEuYXR0YWNrKSBzdGF0cy5iYXNlQXR0YWNrID0gZGF0YS5hdHRhY2s7XG4gICAgICAgICAgICBpZiAoZGF0YS5kZWZlbnNlKSBzdGF0cy5iYXNlRGVmZW5zZSA9IGRhdGEuZGVmZW5zZTtcbiAgICAgICAgICAgIGlmIChkYXRhLnNwZWVkKSBzdGF0cy5iYXNlU3BlZWQgPSBkYXRhLnNwZWVkO1xuICAgICAgICAgICAgaWYgKGRhdGEuY3JpdCAhPT0gdW5kZWZpbmVkKSBzdGF0cy5iYXNlQ3JpdCA9IGRhdGEuY3JpdDtcbiAgICAgICAgICAgIGlmIChkYXRhLm1pc3MgIT09IHVuZGVmaW5lZCkgc3RhdHMuYmFzZU1pc3MgPSBkYXRhLm1pc3M7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlvLrliLborr7nva7mnIDlpKfmgJLmsJTlgLzkuLoxMjDvvIjopobnm5ZQcmVmYWLkuK3nmoTpu5jorqTlgLzvvIlcbiAgICAgICAgc3RhdHMubWF4UmFnZSA9IDEyMDtcbiAgICAgICAgc3RhdHMucmFnZSA9IDA7IC8vIOmHjee9ruW9k+WJjeaAkuawlOWAvFxuXG4gICAgICAgIC8vIOWIneWni+WMluetiee6p+ezu+e7n++8iOW/hemhu+WcqOiuvue9ruWFtuS7luWxnuaAp+S5i+WJje+8jOWboOS4uuetiee6p+WKoOaIkOS8mumHjeaWsOiuoeeul+aJgOacieWxnuaAp++8iVxuICAgICAgICAvLyDph43opoHvvJrkvb/nlKhkYXRhLm5hbWXvvIjop5LoibLljp/lp4vlkI3np7DvvInmnaXliqDovb3kv53lrZjnmoTnrYnnuqfmlbDmja5cbiAgICAgICAgY29uc3QgTGV2ZWxTeXN0ZW0gPSByZXF1aXJlKFwiTGV2ZWxTeXN0ZW1cIik7XG5cbiAgICAgICAgLy8g5aaC5p6c5pyJ5L+d5a2Y55qE5pWw5o2u77yM5L2/55So5L+d5a2Y55qE562J57qn5ZKM57uP6aqM5YC877yb5ZCm5YiZ5L2/55So5Lyg5YWl55qE5YC85oiW6buY6K6k5YC8XG4gICAgICAgIGNvbnN0IGluaXRpYWxMZXZlbCA9IHNhdmVkRGF0YSA/IChzYXZlZERhdGEubGV2ZWwgfHwgZGF0YS5sZXZlbCB8fCAxKSA6IChkYXRhLmxldmVsIHx8IDEpO1xuICAgICAgICBjb25zdCBpbml0aWFsRXhwID0gc2F2ZWREYXRhID8gKHNhdmVkRGF0YS5leHAgfHwgZGF0YS5leHAgfHwgMCkgOiAoZGF0YS5leHAgfHwgMCk7XG5cbiAgICAgICAgLy8g5Yid5aeL5YyW562J57qn77yI5LiN6Ieq5Yqo5LuO5a2Y5YKo5Yqg6L2977yM5Zug5Li65oiR5Lus5bey57uP5omL5Yqo5Yqg6L295LqG77yJXG4gICAgICAgIC8vIOi/meS8muiwg+eUqF9hcHBseUxldmVsQm9udXPvvIzmoLnmja7nrYnnuqforqHnrpflrp7pmYXlsZ7mgKflgLzvvIhtYXhIcCwgYXR0YWNr562J77yJXG4gICAgICAgIExldmVsU3lzdGVtLmluaXRMZXZlbChub2RlLCBpbml0aWFsTGV2ZWwsIGluaXRpYWxFeHAsIGZhbHNlKTtcblxuICAgICAgICAvLyDorr7nva7lvZPliY3nlJ/lkb3lgLzkuLrmnIDlpKfnlJ/lkb3lgLzvvIjmu6HooYDvvIlcbiAgICAgICAgc3RhdHMuaHAgPSBzdGF0cy5tYXhIcDtcblxuICAgICAgICAvLyDorr7nva7lhbbku5bnibnmrorlsZ7mgKfvvIjov5nkupvlsZ7mgKfkuI3lj5fnrYnnuqfliqDmiJDlvbHlk43vvIlcbiAgICAgICAgaWYgKHN0YXRzLmltbXVuZSA9PT0gMCAmJiBkYXRhLmltbXVuZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdGF0cy5pbW11bmUgPSBkYXRhLmltbXVuZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOS/neWtmOWOn+Wni+inkuiJsuWQjeensO+8iOeUqOS6juWQjue7reS/neWtmOaVsOaNru+8iVxuICAgICAgICBpZiAoZGF0YS5uYW1lKSB7XG4gICAgICAgICAgICBub2RlLl9vcmlnaW5hbENoYXJhY3Rlck5hbWUgPSBkYXRhLm5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDliJ3lp4vljJbmioDog71cbiAgICAgICAgaWYgKGRhdGEuc2tpbGxzICYmIGRhdGEuc2tpbGxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNraWxscy5pbml0KGRhdGEuc2tpbGxzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiuvue9rumYn+S8jVxuICAgICAgICB0ZWFtLnRlYW0gPSB0ZWFtTmFtZTtcblxuICAgICAgICAvLyDliJ3lp4vljJbooYDmnaHmmL7npLrvvIjlj6/og73kuI3lrZjlnKjooYDmnaHnu4Tku7bvvIlcbiAgICAgICAgaWYgKHN0YXRzLnVwZGF0ZUhlYWx0aEJhcikge1xuICAgICAgICAgICAgc3RhdHMudXBkYXRlSGVhbHRoQmFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjYy5sb2coYOKchSBbQmF0dGxlQ29udHJvbGxlcl0gJHtub2RlLm5hbWV9IOWIneWni+WMluaIkOWKnyAoJHt0ZWFtTmFtZX0pIC0gTHYuJHtzdGF0cy5sZXZlbH0sIEhQOiR7c3RhdHMuaHB9LCBBVEs6JHtzdGF0cy5hdHRhY2t9LCBERUY6JHtzdGF0cy5kZWZlbnNlfSwgU1BEOiR7c3RhdHMuc3BlZWR9YCk7XG4gICAgfSxcblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgLy8g5aaC5p6c5q2j5Zyo5Zue5pS+77yM5LiN5omn6KGMQmF0dGxlU3lzdGVt55qEdXBkYXRl77yI6YG/5YWN5Yay56qB77yJXG4gICAgICAgIGlmICh0aGlzLmlzUmVwbGF5aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuYmF0dGxlU3lzdGVtIHx8IHRoaXMuYmF0dGxlU3lzdGVtLmZpbmlzaGVkKSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3QgZHQgPSAobm93IC0gdGhpcy5sYXN0VGltZSkgLyAxMDAwO1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gbm93O1xuXG4gICAgICAgIHRoaXMuYmF0dGxlU3lzdGVtLnVwZGF0ZShkdCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOa4uOaIj+e7k+adn+WkhOeQhlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB3aW5uZXIgLSDog5zliKnmlrnvvIhcImhlcm9cIiDmiJYgXCJtb25zdGVyXCLvvIlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gd2lubmVyVGV4dCAtIOiDnOWIqeaWueaWh+acrO+8iFwi6Iux6ZuEXCIg5oiWIFwi5oCq54mpXCLvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9vbkdhbWVPdmVyKHdpbm5lciwgd2lubmVyVGV4dCkge1xuICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSA9PT09PSBfb25HYW1lT3ZlcuaWueazleiiq+iwg+eUqCA9PT09PWApO1xuICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDmuLjmiI/nu5PmnZ/vvJoke3dpbm5lclRleHR96IOc5YipYCk7XG4gICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIHdpbm5lcuWPguaVsOWAvDogXCIke3dpbm5lcn1cImApO1xuICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDlvZPliY3oi7Hpm4TmlbDph486ICR7dGhpcy5oZXJvcy5sZW5ndGh9LCDmgKrnianmlbDph486ICR7dGhpcy5tb25zdGVycy5sZW5ndGh9YCk7XG4gICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIHVzZVNjZW5lVHJhbnNpdGlvbj0ke3RoaXMudXNlU2NlbmVUcmFuc2l0aW9ufSwgZ2FtZU92ZXJTY2VuZU5hbWU9XCIke3RoaXMuZ2FtZU92ZXJTY2VuZU5hbWV9XCJgKTtcblxuICAgICAgICAvLyDnu5nog5zliKnmlrnnmoTlrZjmtLvljZXkvY3mt7vliqDnu4/pqozlgLxcbiAgICAgICAgY29uc3QgTGV2ZWxTeXN0ZW0gPSByZXF1aXJlKFwiTGV2ZWxTeXN0ZW1cIik7XG4gICAgICAgIGNvbnN0IGV4cFJld2FyZCA9IDIwMDsgLy8g5Z+656GA57uP6aqM5aWW5Yqx77yI5Y+v5Lul5qC55o2u6Zq+5bqm6LCD5pW077yJXG5cbiAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g5qOA5p+l6IOc5Yip5p2h5Lu2OiB3aW5uZXIgPT09IFwiaGVyb1wiID8gJHt3aW5uZXIgPT09IFwiaGVyb1wifWApO1xuXG4gICAgICAgIGlmICh3aW5uZXIgPT09IFwiaGVyb1wiKSB7XG4gICAgICAgICAgICAvLyDoi7Hpm4Tog5zliKnvvIznu5nmiYDmnInlj4LmiJjnmoToi7Hpm4Tmt7vliqDnu4/pqozlgLzvvIjljIXmi6zmrbvkuqHnmoTvvIlcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdID09PT09IOiLsembhOiDnOWIqe+8jOW8gOWni+WIhumFjee7j+mqjOWAvCA9PT09PWApO1xuICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g57uP6aqM5aWW5YqxOiAke2V4cFJld2FyZH0g54K5L+S6uu+8iOWMheaLrOatu+S6oeeahOWNleS9je+8iWApO1xuXG4gICAgICAgICAgICB0aGlzLmhlcm9zLmZvckVhY2goKGhlcm8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g5aSE55CG6Iux6ZuEWyR7aW5kZXh9XTogJHtoZXJvLm5hbWV9YCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHMgPSBoZXJvLmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xuICAgICAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIFN0YXRzQ29tcG9uZW505a2Y5ZyoOiAkeyEhc3RhdHN9YCk7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdICR7aGVyby5uYW1lfSDmmK/lkKbmrbvkuqE6ICR7c3RhdHMuaXNEZWFkKCl9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdICR7aGVyby5uYW1lfSDlvZPliY3nrYnnuqc6ICR7c3RhdHMubGV2ZWx9LCDlvZPliY3nu4/pqow6ICR7c3RhdHMuZXhwfWApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzdGF0cykge1xuICAgICAgICAgICAgICAgICAgICAvLyDkuI3nrqHmmK/lkKbmrbvkuqHvvIzpg73nu5nnu4/pqozlgLxcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzVGV4dCA9IHN0YXRzLmlzRGVhZCgpID8gXCLvvIjlt7LmrbvkuqHvvIlcIiA6IFwi77yI5a2Y5rS777yJXCI7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOKchSDnu5kgJHtoZXJvLm5hbWV9JHtzdGF0dXNUZXh0fSDmt7vliqAgJHtleHBSZXdhcmR9IOeCuee7j+mqjOWAvGApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBMZXZlbFN5c3RlbS5hZGRFeHAoaGVybywgZXhwUmV3YXJkKTtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gYWRkRXhw6L+U5Zue57uT5p6cOmAsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmxldmVsZWRVcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g8J+OiSAke2hlcm8ubmFtZX0g5Y2H57qn5YiwICR7cmVzdWx0Lm5ld0xldmVsfSDnuqfvvIFgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOWxnuaAp+WPmOWMljpgLCByZXN1bHQuc3RhdENoYW5nZXMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gJHtoZXJvLm5hbWV9IOiOt+W+l+e7j+mqjOWAvO+8jOW9k+WJjeetiee6pzogJHtyZXN1bHQubmV3TGV2ZWx9LCDnu4/pqow6ICR7c3RhdHMuZXhwfWApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2Mud2FybihgW0JhdHRsZUNvbnRyb2xsZXJdICR7aGVyby5uYW1lfSBhZGRFeHDov5Tlm55udWxs77yBYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYy53YXJuKGBbQmF0dGxlQ29udHJvbGxlcl0gJHtoZXJvLm5hbWV9IOayoeaciVN0YXRzQ29tcG9uZW5057uE5Lu277yM5LiN6I635b6X57uP6aqM5YC8YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSA9PT09PSDoi7Hpm4Tnu4/pqozlgLzliIbphY3lrozmiJAgPT09PT1gKTtcbiAgICAgICAgfSBlbHNlIGlmICh3aW5uZXIgPT09IFwibW9uc3RlclwiKSB7XG4gICAgICAgICAgICAvLyDmgKrnianog5zliKnvvIznu5nmiYDmnInlj4LmiJjnmoTmgKrnianmt7vliqDnu4/pqozlgLzvvIjljIXmi6zmrbvkuqHnmoTvvIlcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdID09PT09IOaAqueJqeiDnOWIqe+8jOW8gOWni+WIhumFjee7j+mqjOWAvCA9PT09PWApO1xuICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g57uP6aqM5aWW5YqxOiAke2V4cFJld2FyZH0g54K5L+S6uu+8iOWMheaLrOatu+S6oeeahOWNleS9je+8iWApO1xuXG4gICAgICAgICAgICB0aGlzLm1vbnN0ZXJzLmZvckVhY2goKG1vbnN0ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g5aSE55CG5oCq54mpWyR7aW5kZXh9XTogJHttb25zdGVyLm5hbWV9YCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHMgPSBtb25zdGVyLmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xuICAgICAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIFN0YXRzQ29tcG9uZW505a2Y5ZyoOiAkeyEhc3RhdHN9YCk7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdICR7bW9uc3Rlci5uYW1lfSDmmK/lkKbmrbvkuqE6ICR7c3RhdHMuaXNEZWFkKCl9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdICR7bW9uc3Rlci5uYW1lfSDlvZPliY3nrYnnuqc6ICR7c3RhdHMubGV2ZWx9LCDlvZPliY3nu4/pqow6ICR7c3RhdHMuZXhwfWApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzdGF0cykge1xuICAgICAgICAgICAgICAgICAgICAvLyDkuI3nrqHmmK/lkKbmrbvkuqHvvIzpg73nu5nnu4/pqozlgLxcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzVGV4dCA9IHN0YXRzLmlzRGVhZCgpID8gXCLvvIjlt7LmrbvkuqHvvIlcIiA6IFwi77yI5a2Y5rS777yJXCI7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOKchSDnu5kgJHttb25zdGVyLm5hbWV9JHtzdGF0dXNUZXh0fSDmt7vliqAgJHtleHBSZXdhcmR9IOeCuee7j+mqjOWAvGApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBMZXZlbFN5c3RlbS5hZGRFeHAobW9uc3RlciwgZXhwUmV3YXJkKTtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gYWRkRXhw6L+U5Zue57uT5p6cOmAsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmxldmVsZWRVcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g8J+OiSAke21vbnN0ZXIubmFtZX0g5Y2H57qn5YiwICR7cmVzdWx0Lm5ld0xldmVsfSDnuqfvvIFgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOWxnuaAp+WPmOWMljpgLCByZXN1bHQuc3RhdENoYW5nZXMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gJHttb25zdGVyLm5hbWV9IOiOt+W+l+e7j+mqjOWAvO+8jOW9k+WJjeetiee6pzogJHtyZXN1bHQubmV3TGV2ZWx9LCDnu4/pqow6ICR7c3RhdHMuZXhwfWApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2Mud2FybihgW0JhdHRsZUNvbnRyb2xsZXJdICR7bW9uc3Rlci5uYW1lfSBhZGRFeHDov5Tlm55udWxs77yBYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYy53YXJuKGBbQmF0dGxlQ29udHJvbGxlcl0gJHttb25zdGVyLm5hbWV9IOayoeaciVN0YXRzQ29tcG9uZW5057uE5Lu277yM5LiN6I635b6X57uP6aqM5YC8YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSA9PT09PSDmgKrniannu4/pqozlgLzliIbphY3lrozmiJAgPT09PT1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiusOW9lea4uOaIj+e7k+adn+S6i+S7tuW5tuS/neWtmOaImOaWl+iusOW9lVxuICAgICAgICBpZiAodGhpcy5iYXR0bGVSZWNvcmRlcikge1xuICAgICAgICAgICAgdGhpcy5iYXR0bGVSZWNvcmRlci5yZWNvcmRFdmVudChcImdhbWVPdmVyXCIsIHsgd2lubmVyOiB3aW5uZXIsIHdpbm5lclRleHQ6IHdpbm5lclRleHQgfSk7XG4gICAgICAgICAgICB0aGlzLmJhdHRsZVJlY29yZGVyLnN0b3BSZWNvcmRpbmcoKTtcblxuICAgICAgICAgICAgLy8g5L+d5a2Y5oiY5paX6K6w5b2V5Yiw5pys5Zyw5a2Y5YKoXG4gICAgICAgICAgICBjb25zdCByZWNvcmRLZXkgPSBgYmF0dGxlX3JlcGxheV8ke0RhdGUubm93KCl9YDtcbiAgICAgICAgICAgIHRoaXMuYmF0dGxlUmVjb3JkZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKHJlY29yZEtleSk7XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDmiJjmlpforrDlvZXlt7Lkv53lrZg6ICR7cmVjb3JkS2V5fWApO1xuXG4gICAgICAgICAgICAvLyDlsIborrDlvZXplK7kv53lrZjliLDlhajlsYDvvIzkvptHYW1lT3ZlclBhbmVs5L2/55SoXG4gICAgICAgICAgICB3aW5kb3cuTGFzdEJhdHRsZVJlY29yZEtleSA9IHJlY29yZEtleTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOagueaNruiuvue9rumAieaLqeaYvuekuuaWueW8j1xuICAgICAgICBpZiAodGhpcy51c2VTY2VuZVRyYW5zaXRpb24gJiYgdGhpcy5nYW1lT3ZlclNjZW5lTmFtZSkge1xuICAgICAgICAgICAgLy8g5pa55byPMTog6Lez6L2s5Yiw5ri45oiP57uT5p2f5Zy65pmvXG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDkvb/nlKjlnLrmma/ot7PovazmlrnlvI9gKTtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Ub0dhbWVPdmVyU2NlbmUod2lubmVyLCB3aW5uZXJUZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOaWueW8jzI6IOWcqOW9k+WJjeWcuuaZr+aYvuekuua4uOaIj+e7k+adn+mdouadv1xuICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g5L2/55So5b2T5YmN5Zy65pmv6Z2i5p2/5pa55byPYCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMudXNlU2NlbmVUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gdXNlU2NlbmVUcmFuc2l0aW9u5Li6ZmFsc2XvvIzkvb/nlKjpnaLmnb/mlrnlvI9gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5nYW1lT3ZlclNjZW5lTmFtZSkge1xuICAgICAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIGdhbWVPdmVyU2NlbmVOYW1l5Li656m677yM5L2/55So6Z2i5p2/5pa55byPYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zaG93R2FtZU92ZXJQYW5lbCh3aW5uZXIpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluaImOaWl+WcuuaZr+WktOWDj+aYvuekuu+8iOS7jlNlbGVjdGVkVW5pdHPojrflj5bvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGluaXRCYXR0bGVBdmF0YXJzKCkge1xuICAgICAgICBpZiAoIXdpbmRvdy5TZWxlY3RlZFVuaXRzKSB7XG4gICAgICAgICAgICBjYy5sb2coXCJbQmF0dGxlQ29udHJvbGxlcl0g5pegU2VsZWN0ZWRVbml0c+aVsOaNru+8jOi3s+i/h+WktOWDj+aYvuekulwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVW5pdHMgPSB3aW5kb3cuU2VsZWN0ZWRVbml0cztcbiAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g5byA5aeL5Yid5aeL5YyW5oiY5paX5Zy65pmv5aS05YOPIC0g6Iux6ZuEOiAke3NlbGVjdGVkVW5pdHMuaGVyb3MgPyBzZWxlY3RlZFVuaXRzLmhlcm9zLmxlbmd0aCA6IDB95LiqLCDmgKrniak6ICR7c2VsZWN0ZWRVbml0cy5tb25zdGVycyA/IHNlbGVjdGVkVW5pdHMubW9uc3RlcnMubGVuZ3RoIDogMH3kuKpgKTtcblxuICAgICAgICAvLyDmmL7npLroi7Hpm4TlpLTlg4/vvIjlt6bkuIvop5LvvIlcbiAgICAgICAgaWYgKHNlbGVjdGVkVW5pdHMuaGVyb3MgJiYgc2VsZWN0ZWRVbml0cy5oZXJvcy5sZW5ndGggPiAwICYmIHRoaXMuaGVyb0F2YXRhckNvbnRhaW5lciAmJiB0aGlzLmF2YXRhclByZWZhYikge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlQmF0dGxlQXZhdGFycyhzZWxlY3RlZFVuaXRzLmhlcm9zLCBcImhlcm9cIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmmL7npLrmgKrnianlpLTlg4/vvIjlj7PkuIvop5LvvIlcbiAgICAgICAgaWYgKHNlbGVjdGVkVW5pdHMubW9uc3RlcnMgJiYgc2VsZWN0ZWRVbml0cy5tb25zdGVycy5sZW5ndGggPiAwICYmIHRoaXMubW9uc3RlckF2YXRhckNvbnRhaW5lciAmJiB0aGlzLmF2YXRhclByZWZhYikge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlQmF0dGxlQXZhdGFycyhzZWxlY3RlZFVuaXRzLm1vbnN0ZXJzLCBcIm1vbnN0ZXJcIik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yib5bu65oiY5paX5Zy65pmv5aS05YOP5YiX6KGoXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBzZWxlY3RlZFVuaXRzIC0g6YCJ5Lit55qE5Lq654mp5pWw5o2u5YiX6KGoXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRlYW0gLSDpmJ/kvI3nsbvlnovvvIhcImhlcm9cIiDmiJYgXCJtb25zdGVyXCLvvIlcbiAgICAgKi9cbiAgICBfY3JlYXRlQmF0dGxlQXZhdGFycyhzZWxlY3RlZFVuaXRzLCB0ZWFtKSB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRVbml0cyB8fCBzZWxlY3RlZFVuaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGVhbSA9PT0gXCJoZXJvXCIgPyB0aGlzLmhlcm9BdmF0YXJDb250YWluZXIgOiB0aGlzLm1vbnN0ZXJBdmF0YXJDb250YWluZXI7XG4gICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICBjYy53YXJuKGBbQmF0dGxlQ29udHJvbGxlcl0gJHt0ZWFtfeWktOWDj+WuueWZqOacque7keWummApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5riF56m65a655ZmoXG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVBbGxDaGlsZHJlbigpO1xuXG4gICAgICAgIC8vIOiOt+WPluWktOWDj+i1hOa6kOWIl+ihqFxuICAgICAgICBjb25zdCBpY29uTGlzdCA9IHRlYW0gPT09IFwiaGVyb1wiID8gdGhpcy5oZXJvSWNvbnMgOiB0aGlzLm1vbnN0ZXJJY29ucztcblxuICAgICAgICAvLyDliJvlu7rlpLTlg49cbiAgICAgICAgc2VsZWN0ZWRVbml0cy5mb3JFYWNoKCh1bml0RGF0YSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF2YXRhck5vZGUgPSB0aGlzLl9jcmVhdGVCYXR0bGVBdmF0YXIodW5pdERhdGEsIHRlYW0sIGluZGV4LCBpY29uTGlzdCk7XG4gICAgICAgICAgICBpZiAoYXZhdGFyTm9kZSkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChhdmF0YXJOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g6LCD5pW05a655Zmo5biD5bGA77yI5Z6C55u05o6S5YiX77yJXG4gICAgICAgIHRoaXMuX2xheW91dEJhdHRsZUF2YXRhcnMoY29udGFpbmVyLCBzZWxlY3RlZFVuaXRzLmxlbmd0aCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIm+W7uuWNleS4quaImOaWl+WcuuaZr+WktOWDj1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHVuaXREYXRhIC0g5Y2V5L2N5pWw5o2uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRlYW0gLSDpmJ/kvI3nsbvlnotcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSDntKLlvJVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBpY29uTGlzdCAtIOWktOWDj+i1hOa6kOWIl+ihqFxuICAgICAqIEByZXR1cm5zIHtjYy5Ob2RlfG51bGx9IOWktOWDj+iKgueCuVxuICAgICAqL1xuICAgIF9jcmVhdGVCYXR0bGVBdmF0YXIodW5pdERhdGEsIHRlYW0sIGluZGV4LCBpY29uTGlzdCkge1xuICAgICAgICBpZiAoIXRoaXMuYXZhdGFyUHJlZmFiKSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiW0JhdHRsZUNvbnRyb2xsZXJdIGF2YXRhclByZWZhYuacque7keWumlwiKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5a6e5L6L5YyW5aS05YOPUHJlZmFiXG4gICAgICAgIGNvbnN0IGF2YXRhck5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmF2YXRhclByZWZhYik7XG4gICAgICAgIGF2YXRhck5vZGUubmFtZSA9IGBCYXR0bGVBdmF0YXJfJHt1bml0RGF0YS5uYW1lIHx8IHVuaXREYXRhLmRpc3BsYXlOYW1lIHx8IGluZGV4fWA7XG5cbiAgICAgICAgLy8g5p+l5om+5a+55bqU55qE5Lq654mp6IqC54K577yI6YCa6L+H5ZCN56ew5Yy56YWN77yJXG4gICAgICAgIGNvbnN0IHVuaXROYW1lID0gdW5pdERhdGEubmFtZSB8fCB1bml0RGF0YS5kaXNwbGF5TmFtZTtcbiAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g5p+l5om+5Lq654mp6IqC54K5OiAke3VuaXROYW1lfSwg6Zif5LyNOiAke3RlYW19YCk7XG4gICAgICAgIGNvbnN0IGNoYXJhY3Rlck5vZGUgPSB0aGlzLl9maW5kQ2hhcmFjdGVyTm9kZSh1bml0TmFtZSwgdGVhbSk7XG4gICAgICAgIGlmIChjaGFyYWN0ZXJOb2RlKSB7XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDinJMg5om+5Yiw5Lq654mp6IqC54K5OiAke2NoYXJhY3Rlck5vZGUubmFtZX1gKTtcbiAgICAgICAgICAgIC8vIOS/neWtmOS6uueJqeiKgueCueW8leeUqOWIsOWktOWDj+iKgueCuVxuICAgICAgICAgICAgYXZhdGFyTm9kZS5fY2hhcmFjdGVyTm9kZSA9IGNoYXJhY3Rlck5vZGU7XG4gICAgICAgICAgICAvLyDmt7vliqDngrnlh7vkuovku7bnm5HlkKxcbiAgICAgICAgICAgIHRoaXMuX2FkZEF2YXRhckNsaWNrSGFuZGxlcihhdmF0YXJOb2RlLCBjaGFyYWN0ZXJOb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLndhcm4oYFtCYXR0bGVDb250cm9sbGVyXSDinJcg5pyq5om+5Yiw5a+55bqU55qE5Lq654mp6IqC54K5OiAke3VuaXROYW1lfWApO1xuICAgICAgICAgICAgY2Mud2FybihgW0JhdHRsZUNvbnRyb2xsZXJdICAg5b2T5YmNJHt0ZWFtfeWIl+ihqDogJHsodGVhbSA9PT0gXCJoZXJvXCIgPyB0aGlzLmhlcm9zIDogdGhpcy5tb25zdGVycykubWFwKG4gPT4gbiA/IG4ubmFtZSA6IFwibnVsbFwiKS5qb2luKFwiLCBcIil9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmn6Xmib7lpLTlg4/lm77niYfoioLngrlcbiAgICAgICAgY29uc3QgaWNvbk5vZGUgPSBhdmF0YXJOb2RlLmdldENoaWxkQnlOYW1lKFwiSWNvblwiKSB8fCBhdmF0YXJOb2RlO1xuICAgICAgICBjb25zdCBzcHJpdGUgPSBpY29uTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcblxuICAgICAgICBpZiAoc3ByaXRlKSB7XG4gICAgICAgICAgICAvLyDkvJjlhYjkvb/nlKh1bml0RGF0YeS4reeahGljb25cbiAgICAgICAgICAgIGxldCBzcHJpdGVGcmFtZSA9IHVuaXREYXRhLmljb24gfHwgbnVsbDtcblxuICAgICAgICAgICAgLy8g5aaC5p6cdW5pdERhdGHmsqHmnIlpY29u77yM5bCd6K+V5LuOaWNvbkxpc3TmjInntKLlvJXojrflj5ZcbiAgICAgICAgICAgIGlmICghc3ByaXRlRnJhbWUgJiYgaWNvbkxpc3QgJiYgaWNvbkxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIOWwneivleagueaNruWQjeensOWMuemFjVxuICAgICAgICAgICAgICAgIGNvbnN0IFVuaXREYXRhQ29uZmlnID0gcmVxdWlyZShcIlVuaXREYXRhQ29uZmlnXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVuaXRDb25maWdMaXN0ID0gdGVhbSA9PT0gXCJoZXJvXCIgPyAoVW5pdERhdGFDb25maWcuaGVyb3MgfHwgW10pIDogKFVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzIHx8IFtdKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb25maWdJbmRleCA9IHVuaXRDb25maWdMaXN0LmZpbmRJbmRleChjb25maWcgPT5cbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLm5hbWUgPT09IHVuaXREYXRhLm5hbWUgfHwgY29uZmlnLmRpc3BsYXlOYW1lID09PSB1bml0RGF0YS5kaXNwbGF5TmFtZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZ0luZGV4ID49IDAgJiYgY29uZmlnSW5kZXggPCBpY29uTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlRnJhbWUgPSBpY29uTGlzdFtjb25maWdJbmRleF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IGljb25MaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzmib7kuI3liLDljLnphY3vvIzmjInntKLlvJXojrflj5ZcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlRnJhbWUgPSBpY29uTGlzdFtpbmRleF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICBzcHJpdGUudHlwZSA9IGNjLlNwcml0ZS5UeXBlLlNJTVBMRTtcbiAgICAgICAgICAgICAgICBzcHJpdGUuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xuXG4gICAgICAgICAgICAgICAgLy8g6K6+572u5aS05YOP5aSn5bCPXG4gICAgICAgICAgICAgICAgaWNvbk5vZGUud2lkdGggPSB0aGlzLmF2YXRhclNpemUgfHwgODA7XG4gICAgICAgICAgICAgICAgaWNvbk5vZGUuaGVpZ2h0ID0gdGhpcy5hdmF0YXJTaXplIHx8IDgwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKGBbQmF0dGxlQ29udHJvbGxlcl0g5pyq5om+5Yiw5aS05YOP6LWE5rqQOiAke3VuaXREYXRhLm5hbWUgfHwgdW5pdERhdGEuZGlzcGxheU5hbWV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmn6Xmib7lkI3np7DmoIfnrb5cbiAgICAgICAgY29uc3QgbmFtZUxhYmVsID0gYXZhdGFyTm9kZS5nZXRDaGlsZEJ5TmFtZShcIk5hbWVMYWJlbFwiKTtcbiAgICAgICAgaWYgKG5hbWVMYWJlbCkge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBuYW1lTGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IHVuaXREYXRhLmRpc3BsYXlOYW1lIHx8IHVuaXREYXRhLm5hbWUgfHwgXCLmnKrnn6VcIjtcbiAgICAgICAgICAgICAgICAvLyDosIPmlbTlrZfkvZPlpKflsI9cbiAgICAgICAgICAgICAgICBpZiAobGFiZWwuZm9udFNpemUgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLmZvbnRTaXplID0gTWF0aC5tYXgoMTQsIGxhYmVsLmZvbnRTaXplICogMC42KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5mb250U2l6ZSA9IDE2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOmakOiXj+WLvumAieagh+iusO+8iOaImOaWl+WcuuaZr+S4jemcgOimge+8iVxuICAgICAgICBjb25zdCBjaGVja21hcmsgPSBhdmF0YXJOb2RlLmdldENoaWxkQnlOYW1lKFwiQ2hlY2ttYXJrXCIpO1xuICAgICAgICBpZiAoY2hlY2ttYXJrKSB7XG4gICAgICAgICAgICBjaGVja21hcmsuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmoLnmja7mgJLmsJTlgLzorr7nva7lpLTlg4/popzoibLvvIjliJ3lp4vnirbmgIHvvIlcbiAgICAgICAgaWYgKGNoYXJhY3Rlck5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUF2YXRhckNvbG9yKGF2YXRhck5vZGUsIGNoYXJhY3Rlck5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGF2YXRhck5vZGU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOafpeaJvuWvueW6lOeahOS6uueJqeiKgueCuVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXROYW1lIC0g5Y2V5L2N5ZCN56ewXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRlYW0gLSDpmJ/kvI3nsbvlnotcbiAgICAgKiBAcmV0dXJucyB7Y2MuTm9kZXxudWxsfSDkurrnianoioLngrlcbiAgICAgKi9cbiAgICBfZmluZENoYXJhY3Rlck5vZGUodW5pdE5hbWUsIHRlYW0pIHtcbiAgICAgICAgY29uc3QgdW5pdExpc3QgPSB0ZWFtID09PSBcImhlcm9cIiA/IHRoaXMuaGVyb3MgOiB0aGlzLm1vbnN0ZXJzO1xuICAgICAgICBpZiAoIXVuaXRMaXN0IHx8IHVuaXRMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDpgJrov4flkI3np7DljLnphY1cbiAgICAgICAgbGV0IGNoYXJhY3Rlck5vZGUgPSB1bml0TGlzdC5maW5kKG5vZGUgPT4ge1xuICAgICAgICAgICAgaWYgKCFub2RlIHx8ICFub2RlLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRzID0gbm9kZS5nZXRDb21wb25lbnQoXCJTdGF0c0NvbXBvbmVudFwiKTtcbiAgICAgICAgICAgIGlmICghc3RhdHMpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBzdGF0cy5uYW1lID09PSB1bml0TmFtZSB8fCBub2RlLm5hbWUgPT09IHVuaXROYW1lO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDlpoLmnpzmib7kuI3liLDvvIzlsJ3or5XpgJrov4fntKLlvJXljLnphY3vvIjlpoLmnpx1bml0TmFtZeaYr+e0ouW8le+8iVxuICAgICAgICBpZiAoIWNoYXJhY3Rlck5vZGUgJiYgIWlzTmFOKHVuaXROYW1lKSkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludCh1bml0TmFtZSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHVuaXRMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNoYXJhY3Rlck5vZGUgPSB1bml0TGlzdFtpbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hhcmFjdGVyTm9kZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog57uZ5aS05YOP5re75Yqg54K55Ye75LqL5Lu25aSE55CGXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGF2YXRhck5vZGUgLSDlpLTlg4/oioLngrlcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGNoYXJhY3Rlck5vZGUgLSDkurrnianoioLngrlcbiAgICAgKi9cbiAgICBfYWRkQXZhdGFyQ2xpY2tIYW5kbGVyKGF2YXRhck5vZGUsIGNoYXJhY3Rlck5vZGUpIHtcbiAgICAgICAgLy8g56Gu5L+d6IqC54K55Y+v5Lul5o6l5pS26Kem5pG45LqL5Lu2XG4gICAgICAgIGF2YXRhck5vZGUuX3RvdWNoRW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgLy8g56Gu5L+d6IqC54K55pyJ6Laz5aSf55qE5aSn5bCP5p2l5o6l5pS26Kem5pG4XG4gICAgICAgIGlmIChhdmF0YXJOb2RlLndpZHRoID09PSAwIHx8IGF2YXRhck5vZGUuaGVpZ2h0ID09PSAwKSB7XG4gICAgICAgICAgICBhdmF0YXJOb2RlLnNldENvbnRlbnRTaXplKHRoaXMuYXZhdGFyU2l6ZSB8fCA4MCwgdGhpcy5hdmF0YXJTaXplIHx8IDgwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOenu+mZpOS5i+WJjeWPr+iDvee7keWumueahOS6i+S7tuebkeWQrO+8iOmYsuatoumHjeWkjee7keWumu+8iVxuICAgICAgICBhdmF0YXJOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpO1xuICAgICAgICBhdmF0YXJOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCk7XG4gICAgICAgIGF2YXRhck5vZGUub2ZmKCdjbGljaycpO1xuXG4gICAgICAgIC8vIOa3u+WKoOaMiemSrue7hOS7tu+8iOeUqOS6juabtOWlveeahOeCueWHu+WPjemmiOWSjOS6i+S7tuWkhOeQhu+8iVxuICAgICAgICBsZXQgYnV0dG9uID0gYXZhdGFyTm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgaWYgKCFidXR0b24pIHtcbiAgICAgICAgICAgIGJ1dHRvbiA9IGF2YXRhck5vZGUuYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICBidXR0b24udHJhbnNpdGlvbiA9IGNjLkJ1dHRvbi5UcmFuc2l0aW9uLlNDQUxFO1xuICAgICAgICAgICAgYnV0dG9uLnpvb21TY2FsZSA9IDAuOTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWPquS9v+eUqEJ1dHRvbue7hOS7tueahGNsaWNr5LqL5Lu277yI6YG/5YWN5LiOVE9VQ0hfRU5E6YeN5aSN6Kem5Y+R77yJXG4gICAgICAgIGJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g5aS05YOPQnV0dG9u54K55Ye75LqL5Lu26Kem5Y+ROiAke2F2YXRhck5vZGUubmFtZX1gKTtcbiAgICAgICAgICAgIC8vIOazqOaEj++8mkJ1dHRvbueahGNsaWNr5LqL5Lu25a+56LGh5Y+v6IO95LiN5pSv5oyBc3RvcFByb3BhZ2F0aW9u77yM5omA5Lul5LiN6LCD55SoXG4gICAgICAgICAgICAvLyDlpoLmnpzpnIDopoHpmLvmraLkuovku7blhpLms6HvvIzlj6/ku6XlnKjkuovku7blpITnkIblh73mlbDkuK3nm7TmjqXov5Tlm55cbiAgICAgICAgICAgIHRoaXMuX29uQXZhdGFyQ2xpY2soY2hhcmFjdGVyTm9kZSwgZXZlbnQpO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAvLyDnoa7kv51JY29u5a2Q6IqC54K55Lmf5Y+v5Lul5o6l5pS26Kem5pG477yI5aaC5p6c5a2Y5Zyo77yJXG4gICAgICAgIGNvbnN0IGljb25Ob2RlID0gYXZhdGFyTm9kZS5nZXRDaGlsZEJ5TmFtZShcIkljb25cIik7XG4gICAgICAgIGlmIChpY29uTm9kZSkge1xuICAgICAgICAgICAgaWNvbk5vZGUuX3RvdWNoRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoaWNvbk5vZGUud2lkdGggPT09IDAgfHwgaWNvbk5vZGUuaGVpZ2h0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWNvbk5vZGUuc2V0Q29udGVudFNpemUodGhpcy5hdmF0YXJTaXplIHx8IDgwLCB0aGlzLmF2YXRhclNpemUgfHwgODApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g4pyTIOW3suS4uuWktOWDj+a3u+WKoOeCueWHu+S6i+S7tjogJHthdmF0YXJOb2RlLm5hbWV9IC0+ICR7Y2hhcmFjdGVyTm9kZS5uYW1lfWApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDlpLTlg4/ngrnlh7vkuovku7blpITnkIZcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gY2hhcmFjdGVyTm9kZSAtIOS6uueJqeiKgueCuVxuICAgICAqIEBwYXJhbSB7Y2MuRXZlbnR9IGV2ZW50IC0g5LqL5Lu25a+56LGhXG4gICAgICovXG4gICAgX29uQXZhdGFyQ2xpY2soY2hhcmFjdGVyTm9kZSwgZXZlbnQpIHtcbiAgICAgICAgaWYgKCFjaGFyYWN0ZXJOb2RlIHx8ICFjaGFyYWN0ZXJOb2RlLmlzVmFsaWQpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJbQmF0dGxlQ29udHJvbGxlcl0g5Lq654mp6IqC54K55peg5pWI77yM5peg5rOV6YeK5pS+5aSn5oubXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6Ziy5q2i6YeN5aSN6Kem5Y+R77ya5aaC5p6c6K+l5Lq654mp5q2j5Zyo6YeK5pS+5aSn5oub77yM5YiZ5b+955WlXG4gICAgICAgIGlmIChjaGFyYWN0ZXJOb2RlLl9pc1JlbGVhc2luZ1VsdGltYXRlKSB7XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSAke2NoYXJhY3Rlck5vZGUubmFtZX0g5q2j5Zyo6YeK5pS+5aSn5oub5Lit77yM5b+955Wl6YeN5aSN54K55Ye7YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSA9PT09PT09PT09IOWktOWDj+iiq+eCueWHuyA9PT09PT09PT09YCk7XG4gICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOS6uueJqTogJHtjaGFyYWN0ZXJOb2RlLm5hbWV9YCk7XG4gICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOWwneivlemHiuaUvuWkp+aLmy4uLmApO1xuXG4gICAgICAgIC8vIOajgOafpeinkuiJsuaYr+WQpuW3suatu+S6oVxuICAgICAgICBjb25zdCBzdGF0cyA9IGNoYXJhY3Rlck5vZGUuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XG4gICAgICAgIGlmIChzdGF0cyAmJiBzdGF0cy5pc0RlYWQoKSkge1xuICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gJHtjaGFyYWN0ZXJOb2RlLm5hbWV9IOW3suatu+S6oe+8jOemgeatoumHiuaUvuWkp+aLm2ApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5qOA5p+l5piv5ZCm5q2j5Zyo5Zue5pS+77yM5aaC5p6c5piv5YiZ56aB55So5aSn5oub6YeK5pS+XG4gICAgICAgIGlmICh0aGlzLmlzUmVwbGF5aW5nKSB7XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDmraPlnKjlm57mlL7kuK3vvIznpoHnlKjlpKfmi5vph4rmlL5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IFNraWxsU3lzdGVtID0gcmVxdWlyZShcIlNraWxsU3lzdGVtXCIpO1xuICAgICAgICBjb25zdCBUZWFtUmVmID0gcmVxdWlyZShcIlRlYW1SZWZcIik7XG4gICAgICAgIGNvbnN0IFRlYW1Db21wb25lbnQgPSByZXF1aXJlKFwiVGVhbUNvbXBvbmVudFwiKTtcblxuICAgICAgICAvLyDmo4Dmn6XmmK/lkKblj6/ku6Xph4rmlL7lpKfmi5tcbiAgICAgICAgaWYgKCFTa2lsbFN5c3RlbS5jYW5Vc2VVbHRpbWF0ZVNraWxsKGNoYXJhY3Rlck5vZGUpKSB7XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSAke2NoYXJhY3Rlck5vZGUubmFtZX0g5oCS5rCU5YC85LiN6Laz77yM5peg5rOV6YeK5pS+5aSn5oubYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSAke2NoYXJhY3Rlck5vZGUubmFtZX0g5Y+v5Lul6YeK5pS+5aSn5oub77yM57un57ut5omn6KGMLi4uYCk7XG5cbiAgICAgICAgLy8g6I635Y+W55uu5qCHXG4gICAgICAgIGNvbnN0IHRlYW1Db21wID0gY2hhcmFjdGVyTm9kZS5nZXRDb21wb25lbnQoXCJUZWFtQ29tcG9uZW50XCIpO1xuICAgICAgICBpZiAoIXRlYW1Db21wKSB7XG4gICAgICAgICAgICBjYy53YXJuKGBbQmF0dGxlQ29udHJvbGxlcl0gJHtjaGFyYWN0ZXJOb2RlLm5hbWV9IOe8uuWwkVRlYW1Db21wb25lbnTnu4Tku7ZgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVuZW1pZXMgPSB0ZWFtQ29tcC50ZWFtID09PSBcImhlcm9cIlxuICAgICAgICAgICAgPyBUZWFtUmVmLm1vbnN0ZXJzUmVmXG4gICAgICAgICAgICA6IFRlYW1SZWYuaGVyb3NSZWY7XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZW5lbWllcy5maW5kKGUgPT4ge1xuICAgICAgICAgICAgaWYgKCFlIHx8ICFlLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IHMgPSBlLmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xuICAgICAgICAgICAgcmV0dXJuIHMgJiYgIXMuaXNEZWFkKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSAke2NoYXJhY3Rlck5vZGUubmFtZX0g5rKh5pyJ5Y+v5pS75Ye755qE55uu5qCHYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmoIforrDkuLrmraPlnKjph4rmlL7lpKfmi5vvvIjpmLLmraLph43lpI3op6blj5HvvIlcbiAgICAgICAgY2hhcmFjdGVyTm9kZS5faXNSZWxlYXNpbmdVbHRpbWF0ZSA9IHRydWU7XG5cbiAgICAgICAgLy8g6YeK5pS+5aSn5oubXG4gICAgICAgIGNvbnN0IGxvZyA9IChtc2cpID0+IGNjLmxvZyhtc2cpO1xuICAgICAgICBjb25zdCByYW5kID0gTWF0aC5yYW5kb207XG4gICAgICAgIFNraWxsU3lzdGVtLnVzZVVsdGltYXRlU2tpbGwoY2hhcmFjdGVyTm9kZSwgdGFyZ2V0LCBsb2csIHJhbmQpO1xuXG4gICAgICAgIC8vIOW7tui/n+mHjee9ruagh+W/l++8iOWkp+aLm1VJ5Yqo55S75a6M5oiQ5ZCO6YeN572u77yJXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGNoYXJhY3Rlck5vZGUuX2lzUmVsZWFzaW5nVWx0aW1hdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdICR7Y2hhcmFjdGVyTm9kZS5uYW1lfSDlpKfmi5vph4rmlL7lrozmiJDvvIzph43nva7moIflv5dgKTtcbiAgICAgICAgfSwgMy4wKTsgLy8g5bu26L+fM+enku+8jOehruS/neWkp+aLm1VJ5Yqo55S75a6M5oiQXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOabtOaWsOaJgOacieWktOWDj+eahOminOiJsu+8iOagueaNruaAkuawlOWAvO+8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3VwZGF0ZUFsbEF2YXRhckNvbG9ycygpIHtcbiAgICAgICAgLy8g5pu05paw6Iux6ZuE5aS05YOP55qE6aKc6ImyXG4gICAgICAgIGlmICh0aGlzLmhlcm9BdmF0YXJDb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaGVyb0F2YXRhckNvbnRhaW5lci5jaGlsZHJlbi5mb3JFYWNoKGF2YXRhck5vZGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUF2YXRhckNvbG9yKGF2YXRhck5vZGUsIGF2YXRhck5vZGUuX2NoYXJhY3Rlck5vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmm7TmlrDmgKrnianlpLTlg4/nmoTpopzoibJcbiAgICAgICAgaWYgKHRoaXMubW9uc3RlckF2YXRhckNvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhpcy5tb25zdGVyQXZhdGFyQ29udGFpbmVyLmNoaWxkcmVuLmZvckVhY2goYXZhdGFyTm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQXZhdGFyQ29sb3IoYXZhdGFyTm9kZSwgYXZhdGFyTm9kZS5fY2hhcmFjdGVyTm9kZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmm7TmlrDljZXkuKrlpLTlg4/nmoTpopzoibLvvIjmoLnmja7mgJLmsJTlgLzvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gYXZhdGFyTm9kZSAtIOWktOWDj+iKgueCuVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gY2hhcmFjdGVyTm9kZSAtIOS6uueJqeiKgueCuVxuICAgICAqL1xuICAgIF91cGRhdGVBdmF0YXJDb2xvcihhdmF0YXJOb2RlLCBjaGFyYWN0ZXJOb2RlKSB7XG4gICAgICAgIGlmICghYXZhdGFyTm9kZSB8fCAhYXZhdGFyTm9kZS5pc1ZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNoYXJhY3Rlck5vZGUgfHwgIWNoYXJhY3Rlck5vZGUuaXNWYWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RhdHMgPSBjaGFyYWN0ZXJOb2RlLmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xuICAgICAgICBpZiAoIXN0YXRzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmo4Dmn6XmgJLmsJTlgLzmmK/lkKblt7Lmu6FcbiAgICAgICAgY29uc3QgaXNSYWdlRnVsbCA9IHN0YXRzLmlzUmFnZUZ1bGwoKTtcblxuICAgICAgICAvLyDmn6Xmib7lpLTlg4/lm77niYfoioLngrlcbiAgICAgICAgY29uc3QgaWNvbk5vZGUgPSBhdmF0YXJOb2RlLmdldENoaWxkQnlOYW1lKFwiSWNvblwiKSB8fCBhdmF0YXJOb2RlO1xuXG4gICAgICAgIC8vIOagueaNruaAkuawlOWAvOiuvue9ruminOiJslxuICAgICAgICBpZiAoaXNSYWdlRnVsbCkge1xuICAgICAgICAgICAgLy8g5oCS5rCU5YC85ruh77ya5q2j5bi46aKc6Imy77yI55m96Imy77yMUkdCPTI1NSwyNTUsMjU177yJXG4gICAgICAgICAgICBpY29uTm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgYXZhdGFyTm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5oCS5rCU5YC85pyq5ruh77ya54Gw6Imy77yIUkdCPTEyOCwxMjgsMTI477yJXG4gICAgICAgICAgICBpY29uTm9kZS5jb2xvciA9IG5ldyBjYy5Db2xvcigxMjgsIDEyOCwgMTI4LCAyNTUpO1xuICAgICAgICAgICAgYXZhdGFyTm9kZS5jb2xvciA9IG5ldyBjYy5Db2xvcigxMjgsIDEyOCwgMTI4LCAyNTUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiwg+aVtOWktOWDj+WuueWZqOW4g+WxgO+8iOawtOW5s+aOkuWIl++8jOS7juW3puW+gOWPs++8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBjb250YWluZXIgLSDlrrnlmajoioLngrlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY291bnQgLSDlpLTlg4/mlbDph49cbiAgICAgKi9cbiAgICBfbGF5b3V0QmF0dGxlQXZhdGFycyhjb250YWluZXIsIGNvdW50KSB7XG4gICAgICAgIGlmIChjb3VudCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gY29udGFpbmVyLmNoaWxkcmVuO1xuICAgICAgICBjb25zdCBzcGFjaW5nID0gdGhpcy5hdmF0YXJTcGFjaW5nIHx8IDEwO1xuICAgICAgICBjb25zdCBhdmF0YXJXaWR0aCA9IHRoaXMuYXZhdGFyU2l6ZSB8fCA4MDtcbiAgICAgICAgY29uc3QgdG90YWxXaWR0aCA9IGNvdW50ICogYXZhdGFyV2lkdGggKyAoY291bnQgLSAxKSAqIHNwYWNpbmc7XG5cbiAgICAgICAgLy8g5LuO5bem5b6A5Y+z5o6S5YiXXG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeCA9IC10b3RhbFdpZHRoIC8gMiArIGF2YXRhcldpZHRoIC8gMiArIGluZGV4ICogKGF2YXRhcldpZHRoICsgc3BhY2luZyk7XG4gICAgICAgICAgICBjaGlsZC5zZXRQb3NpdGlvbih4LCAwKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOi3s+i9rOWIsOa4uOaIj+e7k+adn+WcuuaZr1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3RyYW5zaXRpb25Ub0dhbWVPdmVyU2NlbmUod2lubmVyLCB3aW5uZXJUZXh0KSB7XG4gICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdID09PT09IOW8gOWni+WcuuaZr+i3s+i9rOa1geeoiyA9PT09PWApO1xuICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDlh4blpIfot7PovazliLDmuLjmiI/nu5PmnZ/lnLrmma86IFwiJHt0aGlzLmdhbWVPdmVyU2NlbmVOYW1lfVwiYCk7XG4gICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOiDnOWIqeaWuTogJHt3aW5uZXJUZXh0fSAoJHt3aW5uZXJ9KWApO1xuXG4gICAgICAgIC8vIOaWueazlTE6IOS9v+eUqOWFqOWxgOWvueixoeS8oOmAkuaVsOaNru+8iOaOqOiNkO+8iVxuICAgICAgICB3aW5kb3cuQmF0dGxlR2FtZVJlc3VsdCA9IHtcbiAgICAgICAgICAgIHdpbm5lcjogd2lubmVyLFxuICAgICAgICAgICAgd2lubmVyVGV4dDogd2lubmVyVGV4dFxuICAgICAgICB9O1xuICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDlt7Lorr7nva7lhajlsYDmlbDmja46IHdpbmRvdy5CYXR0bGVHYW1lUmVzdWx0ID1gLCB3aW5kb3cuQmF0dGxlR2FtZVJlc3VsdCk7XG5cbiAgICAgICAgLy8g5bu26L+f5LiA5bCP5q615pe26Ze05YaN6Lez6L2s77yM56Gu5L+d5omA5pyJ5oiY5paX5Yqo55S75a6M5oiQXG4gICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOW7tui/nzAuNeenkuWQjui3s+i9rOWcuuaZry4uLmApO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDlvIDlp4vliqDovb3lnLrmma86ICR7dGhpcy5nYW1lT3ZlclNjZW5lTmFtZX1gKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMuZ2FtZU92ZXJTY2VuZU5hbWUsIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbQmF0dGxlQ29udHJvbGxlcl0g5Zy65pmv5Yqg6L295aSx6LSlOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtCYXR0bGVDb250cm9sbGVyXSDor7fmo4Dmn6XlnLrmma/lkI3np7DmmK/lkKbmraPnoa7vvIzlnLrmma/mlofku7bmmK/lkKblrZjlnKhgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOWcuuaZr+WKoOi9veWksei0pe+8jOWbnumAgOWIsOmdouadv+aYvuekuuaWueW8j1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2hvd0dhbWVPdmVyUGFuZWwod2lubmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOKchSDlnLrmma/liqDovb3miJDlip86ICR7dGhpcy5nYW1lT3ZlclNjZW5lTmFtZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbQmF0dGxlQ29udHJvbGxlcl0g5Zy65pmv6Lez6L2s5byC5bi4OiAke2UubWVzc2FnZX1gKTtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihgW0JhdHRsZUNvbnRyb2xsZXJdIOmUmeivr+WghuagiDogJHtlLnN0YWNrfWApO1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOWPkeeUn+W8guW4uO+8jOWbnumAgOWIsOmdouadv+aYvuekuuaWueW8j1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dHYW1lT3ZlclBhbmVsKHdpbm5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDAuNSk7IC8vIOW7tui/nzAuNeenklxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDlnKjlvZPliY3lnLrmma/mmL7npLrmuLjmiI/nu5PmnZ/pnaLmnb9cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9zaG93R2FtZU92ZXJQYW5lbCh3aW5uZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZU92ZXJQYW5lbCkge1xuICAgICAgICAgICAgY29uc3QgZ2FtZU92ZXJQYW5lbENvbXAgPSB0aGlzLmdhbWVPdmVyUGFuZWwuZ2V0Q29tcG9uZW50KFwiR2FtZU92ZXJQYW5lbFwiKTtcbiAgICAgICAgICAgIGlmIChnYW1lT3ZlclBhbmVsQ29tcCkge1xuICAgICAgICAgICAgICAgIGdhbWVPdmVyUGFuZWxDb21wLnNob3dHYW1lT3Zlcih3aW5uZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIltCYXR0bGVDb250cm9sbGVyXSBnYW1lT3ZlclBhbmVs6IqC54K55pyq5oyC6L29R2FtZU92ZXJQYW5lbOe7hOS7tu+8gVwiKTtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIiAgIOivt+WcqGdhbWVPdmVyUGFuZWzoioLngrnkuIrmt7vliqBHYW1lT3ZlclBhbmVs57uE5Lu2XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJbQmF0dGxlQ29udHJvbGxlcl0g5pyq6K6+572uZ2FtZU92ZXJQYW5lbOiKgueCue+8gVwiKTtcbiAgICAgICAgICAgIGNjLmVycm9yKFwiICAg6K+35ZyoQmF0dGxlQ29udHJvbGxlcueahOWxnuaAp+ajgOafpeWZqOS4reiuvue9rmdhbWVPdmVyUGFuZWzlsZ7mgKdcIik7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==