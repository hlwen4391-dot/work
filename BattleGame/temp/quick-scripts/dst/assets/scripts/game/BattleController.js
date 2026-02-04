
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
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
    var _this4 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var stats, team, skills, CharacterDataManager, savedData, LevelSystem, initialLevel, initialExp, characterName, bonuses, skillsToInit, SkillDataManager, _characterName, savedSkills, _require2, SkillConfig;
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

            // ⭐ 应用装备属性加成（战斗中使用的 Stats 也要带上装备效果）
            _context2.prev = 26;
            characterName = data.name || node._originalCharacterName || node.name;
            if (!(characterName && stats.applyEquipmentBonuses)) {
              _context2.next = 34;
              break;
            }
            _context2.next = 31;
            return _this4._getEquipmentBonuses(characterName);
          case 31:
            bonuses = _context2.sent;
            stats.applyEquipmentBonuses(bonuses);
            cc.log("[BattleController] \u5DF2\u4E3A " + characterName + " \u5E94\u7528\u88C5\u5907\u52A0\u6210:", bonuses);
          case 34:
            _context2.next = 39;
            break;
          case 36:
            _context2.prev = 36;
            _context2.t0 = _context2["catch"](26);
            cc.warn("[BattleController] \u5E94\u7528\u88C5\u5907\u52A0\u6210\u65F6\u51FA\u9519: " + _context2.t0.message);
          case 39:
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

            // ⭐ 初始化技能（优先从服务器加载，否则使用data中的技能）
            skillsToInit = data.skills || []; // 尝试从服务器加载技能数据
            _context2.prev = 43;
            SkillDataManager = require("SkillDataManager");
            _characterName = data.name || node.name;
            _context2.next = 48;
            return SkillDataManager.loadCharacterSkills(_characterName);
          case 48:
            savedSkills = _context2.sent;
            if (savedSkills && savedSkills.length > 0) {
              // ⭐ 将保存的技能ID转换为完整的技能配置
              _require2 = require("SkillConfig"), SkillConfig = _require2.SkillConfig;
              skillsToInit = savedSkills.map(function (skillData) {
                // 根据技能ID从SkillConfig中获取完整配置
                var skillId = skillData.id;
                var skillConfig = null;

                // 查找对应的技能配置
                Object.keys(SkillConfig).forEach(function (key) {
                  if (SkillConfig[key].id === skillId) {
                    skillConfig = SkillConfig[key];
                  }
                });
                if (skillConfig) {
                  return _extends({}, skillConfig, {
                    requireRage: skillData.requireRage || skillConfig.requireRage || 0
                  });
                } else {
                  cc.warn("[BattleController] \u672A\u627E\u5230\u6280\u80FD\u914D\u7F6E: id=" + skillId);
                  return null;
                }
              }).filter(function (skill) {
                return skill !== null;
              }); // 过滤掉未找到的技能

              cc.log("[BattleController] \u2713 \u4ECE\u670D\u52A1\u5668\u52A0\u8F7D\u6280\u80FD: " + _characterName + ", \u6570\u91CF=" + skillsToInit.length);
            }
            _context2.next = 55;
            break;
          case 52:
            _context2.prev = 52;
            _context2.t1 = _context2["catch"](43);
            cc.warn("[BattleController] \u52A0\u8F7D\u6280\u80FD\u6570\u636E\u5931\u8D25\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u6280\u80FD: " + _context2.t1.message);
          case 55:
            // 初始化技能
            if (skillsToInit && skillsToInit.length > 0) {
              skills.init(skillsToInit);
            }

            // 设置队伍
            team.team = teamName;

            // 初始化血条显示（可能不存在血条组件）
            if (stats.updateHealthBar) {
              stats.updateHealthBar();
            }
            cc.log("\u2705 [BattleController] " + node.name + " \u521D\u59CB\u5316\u6210\u529F (" + teamName + ") - Lv." + stats.level + ", HP:" + stats.hp + ", ATK:" + stats.attack + ", DEF:" + stats.defense + ", SPD:" + stats.speed);
          case 59:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[26, 36], [43, 52]]);
    }))();
  },
  /**
   * 根据角色装备计算属性加成（攻/防/速），供战斗初始化使用
   * @param {string} characterName
   * @returns {Promise<{attack:number, defense:number, speed:number}>}
   * @private
   */
  _getEquipmentBonuses: function _getEquipmentBonuses(characterName) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var bonuses, EquipmentDataManager, ItemConfig, _yield$EquipmentDataM, slots, _iterator3, _step3, itemId, cfg, t, v;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            bonuses = {
              attack: 0,
              defense: 0,
              speed: 0
            };
            if (characterName) {
              _context3.next = 3;
              break;
            }
            return _context3.abrupt("return", bonuses);
          case 3:
            _context3.prev = 3;
            EquipmentDataManager = require("EquipmentDataManager");
            ItemConfig = require("ItemConfig");
            _context3.next = 8;
            return EquipmentDataManager.getEquipment(characterName);
          case 8:
            _yield$EquipmentDataM = _context3.sent;
            slots = _yield$EquipmentDataM.slots;
            if (!(!slots || !Array.isArray(slots))) {
              _context3.next = 12;
              break;
            }
            return _context3.abrupt("return", bonuses);
          case 12:
            _iterator3 = _createForOfIteratorHelperLoose(slots);
          case 13:
            if ((_step3 = _iterator3()).done) {
              _context3.next = 25;
              break;
            }
            itemId = _step3.value;
            if (itemId) {
              _context3.next = 17;
              break;
            }
            return _context3.abrupt("continue", 23);
          case 17:
            cfg = ItemConfig.getItemById(itemId);
            if (!(!cfg || !cfg.effectType)) {
              _context3.next = 20;
              break;
            }
            return _context3.abrupt("continue", 23);
          case 20:
            t = String(cfg.effectType).toLowerCase();
            v = cfg.effectValue || 0;
            if (t === "attack") bonuses.attack += v;else if (t === "defense") bonuses.defense += v;else if (t === "speed") bonuses.speed += v;
          case 23:
            _context3.next = 13;
            break;
          case 25:
            _context3.next = 30;
            break;
          case 27:
            _context3.prev = 27;
            _context3.t0 = _context3["catch"](3);
            cc.warn("[BattleController] \u8BA1\u7B97\u88C5\u5907\u52A0\u6210\u5931\u8D25(" + characterName + "): " + _context3.t0.message);
          case 30:
            return _context3.abrupt("return", bonuses);
          case 31:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[3, 27]]);
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
    var _this5 = this;
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
      var avatarNode = _this5._createBattleAvatar(unitData, team, index, iconList);
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
    var _this6 = this;
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
      _this6._onAvatarClick(characterNode, event);
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
    var _this7 = this;
    // 更新英雄头像的颜色
    if (this.heroAvatarContainer) {
      this.heroAvatarContainer.children.forEach(function (avatarNode) {
        _this7._updateAvatarColor(avatarNode, avatarNode._characterNode);
      });
    }

    // 更新怪物头像的颜色
    if (this.monsterAvatarContainer) {
      this.monsterAvatarContainer.children.forEach(function (avatarNode) {
        _this7._updateAvatarColor(avatarNode, avatarNode._characterNode);
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
    var _this8 = this;
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
      cc.log("[BattleController] \u5F00\u59CB\u52A0\u8F7D\u573A\u666F: " + _this8.gameOverSceneName);
      try {
        cc.director.loadScene(_this8.gameOverSceneName, function (error) {
          if (error) {
            cc.error("[BattleController] \u573A\u666F\u52A0\u8F7D\u5931\u8D25: " + error);
            cc.error("[BattleController] \u8BF7\u68C0\u67E5\u573A\u666F\u540D\u79F0\u662F\u5426\u6B63\u786E\uFF0C\u573A\u666F\u6587\u4EF6\u662F\u5426\u5B58\u5728");
            // 如果场景加载失败，回退到面板显示方式
            _this8._showGameOverPanel(winner);
          } else {
            cc.log("[BattleController] \u2705 \u573A\u666F\u52A0\u8F7D\u6210\u529F: " + _this8.gameOverSceneName);
          }
        });
      } catch (e) {
        cc.error("[BattleController] \u573A\u666F\u8DF3\u8F6C\u5F02\u5E38: " + e.message);
        cc.error("[BattleController] \u9519\u8BEF\u5806\u6808: " + e.stack);
        // 如果发生异常，回退到面板显示方式
        _this8._showGameOverPanel(winner);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZVxcQmF0dGxlQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIm8iLCJhbGxvd0FycmF5TGlrZSIsIml0IiwiYmluZCIsIkFycmF5IiwiaXNBcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwibiIsInRvU3RyaW5nIiwiZnJvbSIsInRlc3QiLCJhcnIiLCJsZW4iLCJhcnIyIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsIkFuaW1hdGlvblN0YXRlIiwiQVRUQUNLIiwiQllfQVRLIiwiRElFIiwiU0hJX0hVQSIsIldBSVQiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIl9wcm9wZXJ0aWVzIiwiaGVyb05vZGVzIiwiTm9kZSIsInRvb2x0aXAiLCJtb25zdGVyTm9kZXMiLCJoZXJvUGFyZW50IiwibW9uc3RlclBhcmVudCIsInVzZVBhcmVudE1vZGUiLCJ1c2VTZWxlY3RTY2VuZU1vZGUiLCJoZXJvUHJlZmFiIiwiUHJlZmFiIiwibW9uc3RlclByZWZhYiIsImhlcm9BcmVhTGVmdCIsImhlcm9BcmVhUmlnaHQiLCJoZXJvQXJlYVRvcCIsImhlcm9BcmVhQm90dG9tIiwibW9uc3RlckFyZWFMZWZ0IiwibW9uc3RlckFyZWFSaWdodCIsIm1vbnN0ZXJBcmVhVG9wIiwibW9uc3RlckFyZWFCb3R0b20iLCJ1bml0U2NhbGUiLCJtaW5Vbml0U3BhY2luZyIsImdhbWVPdmVyUGFuZWwiLCJlbmFibGVSZWNvcmRpbmciLCJoZXJvQXZhdGFyQ29udGFpbmVyIiwibW9uc3RlckF2YXRhckNvbnRhaW5lciIsImF2YXRhclByZWZhYiIsImhlcm9JY29ucyIsIlNwcml0ZUZyYW1lIiwibW9uc3Rlckljb25zIiwiYXZhdGFyU2l6ZSIsImF2YXRhclNwYWNpbmciLCJnYW1lT3ZlclNjZW5lTmFtZSIsInVzZVNjZW5lVHJhbnNpdGlvbiIsInJlcGxheUNvbnRyb2xsZXIiLCJvbkxvYWQiLCJfdGhpcyIsIkJhdHRsZVN5c3RlbSIsInJlcXVpcmUiLCJCYXR0bGVMb2dnZXJzIiwibXVsYmVycnkzMiIsIl9yZXF1aXJlIiwiU2tpbGxDb25maWciLCJyYW5kIiwibG9nZ2VyIiwiaGVyb3MiLCJtb25zdGVycyIsIl9nZW5lcmF0ZWRQb3NpdGlvbnMiLCJoZXJvIiwibW9uc3RlciIsImlzUmVwbGF5aW5nIiwid2luZG93IiwiU2VsZWN0ZWRVbml0cyIsImxvZyIsInNwYXduVW5pdHNGcm9tU2VsZWN0aW9uIiwic3Bhd25Vbml0cyIsIm9uR2FtZU92ZXIiLCJ3aW5uZXIiLCJ3aW5uZXJUZXh0IiwiX29uR2FtZU92ZXIiLCJyZWNvcmRlciIsIkJhdHRsZVJlY29yZGVyIiwiYmF0dGxlUmVjb3JkZXIiLCJzY2hlZHVsZU9uY2UiLCJpbml0QmF0dGxlQXZhdGFycyIsInNjaGVkdWxlIiwiX3VwZGF0ZUFsbEF2YXRhckNvbG9ycyIsImJhdHRsZVN5c3RlbSIsImxhc3RUaW1lIiwiRGF0ZSIsIm5vdyIsIl9jaGVja0F1dG9SZXBsYXkiLCJBdXRvU3RhcnRSZXBsYXkiLCJlbmFibGVkIiwicmVjb3JkS2V5IiwiZ2V0Q29tcG9uZW50Iiwic2NlbmUiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiY2FudmFzIiwiZ2V0Q2hpbGRCeU5hbWUiLCJyZXBsYXlOb2RlIiwiY3VycmVudEhlcm9zIiwiY3VycmVudE1vbnN0ZXJzIiwibG9hZEFuZFJlcGxheSIsIl9nZXRVbml0c0Zyb21QYXJlbnQiLCJfZ2V0VW5pdHNGcm9tQXJyYXkiLCJfaW5pdEFsbFVuaXRzIiwibWVzc2FnZSIsIl90aGlzMiIsInNlbGVjdGVkVW5pdHMiLCJ1bml0RGF0YSIsImluZGV4IiwiaGVyb05vZGUiLCJfY3JlYXRlVW5pdE5vZGUiLCJtb25zdGVyTm9kZSIsInRlYW0iLCJ0b3RhbENvdW50IiwicHJlZmFiIiwicHJlZmFiU291cmNlIiwid2FybiIsInVuaXROb2RlIiwiaW5zdGFudGlhdGUiLCJhY3RpdmUiLCJvcGFjaXR5IiwicGFyZW50IiwiYWRkQ2hpbGQiLCJ4IiwieSIsImZpbmQiLCJwb3NpdGlvbiIsInYyIiwidG9GaXhlZCIsIl9jYWxjdWxhdGVGb3JtYXRpb25Qb3NpdGlvbiIsInNldFBvc2l0aW9uIiwic2V0U2NhbGUiLCJzY2FsZVgiLCJNYXRoIiwiYWJzIiwiX3VuaXREYXRhIiwiX3RlYW0iLCJzdGF0cyIsInRlYW1Db21wIiwic2tpbGxzIiwic2tlbGV0b24iLCJzcCIsIlNrZWxldG9uIiwic2tlbGV0b25EYXRhIiwiY29udGVudFNpemUiLCJnZXRDb250ZW50U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2hpbGRyZW4iLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImNoaWxkIiwiY2hpbGRTaXplIiwiY2hpbGRMb2NhbFBvcyIsImdldFBvc2l0aW9uIiwicmFuZ2VYIiwicmFuZ2VZIiwiYXJlYUxlZnQiLCJhcmVhUmlnaHQiLCJhcmVhVG9wIiwiYXJlYUJvdHRvbSIsImV4aXN0aW5nUG9zaXRpb25zIiwibWluU3BhY2luZyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdHMiLCJ2YWxpZFBvc2l0aW9uIiwicmFuZG9tIiwiZXhpc3RpbmdQb3MiLCJkaXN0YW5jZSIsInNxcnQiLCJwb3ciLCJmb3VuZEdhcCIsImdhcEF0dGVtcHRzIiwiZ2FwQXR0ZW1wdCIsInJlZlBvcyIsImZsb29yIiwiYW5nbGUiLCJQSSIsIm9mZnNldERpc3RhbmNlIiwiY29zIiwic2luIiwibWF4IiwibWluIiwiZ3JpZENvbHMiLCJjZWlsIiwiZ3JpZFJvd3MiLCJncmlkWCIsImdyaWRZIiwiZ3JpZFNwYWNpbmdYIiwiZ3JpZFNwYWNpbmdZIiwidG90YWxHcmlkV2lkdGgiLCJ0b3RhbEdyaWRIZWlnaHQiLCJzdGFydFgiLCJzdGFydFkiLCJuZXdQb3NpdGlvbiIsImZpbHRlciIsIm5vZGUiLCJpc1ZhbGlkIiwiX3RoaXMzIiwiX2NhbGxlZSIsInVuaXREYXRhQ29uZmlnIiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJkYXRhIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9ub2RlIiwiX2RhdGEiLCJfc2tlbGV0b24iLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiaHAiLCJhdHRhY2siLCJkZWZlbnNlIiwic3BlZWQiLCJjcml0Iiwibm9ybWFsQXR0YWNrIiwic3R1blNraWxsIiwic2hpZWxkQWxsaWVzIiwibWlzcyIsImZpcmViYWxsIiwiYmVhc3RSYWdlIiwid2FyQ3J5IiwiX2dldERlZmF1bHREYXRhIiwiaW5pdEVudGl0eSIsInNldEFuaW1hdGlvbiIsInRlYW1OYW1lIiwiX3RoaXM0IiwiX2NhbGxlZTIiLCJDaGFyYWN0ZXJEYXRhTWFuYWdlciIsInNhdmVkRGF0YSIsIkxldmVsU3lzdGVtIiwiaW5pdGlhbExldmVsIiwiaW5pdGlhbEV4cCIsImNoYXJhY3Rlck5hbWUiLCJib251c2VzIiwic2tpbGxzVG9Jbml0IiwiU2tpbGxEYXRhTWFuYWdlciIsIl9jaGFyYWN0ZXJOYW1lIiwic2F2ZWRTa2lsbHMiLCJfcmVxdWlyZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJsb2FkQ2hhcmFjdGVyTGV2ZWwiLCJiYXNlSHAiLCJiYXNlQXR0YWNrIiwiYmFzZURlZmVuc2UiLCJiYXNlU3BlZWQiLCJiYXNlQ3JpdCIsImJhc2VNaXNzIiwibWF4UmFnZSIsInJhZ2UiLCJsZXZlbCIsImV4cCIsImluaXRMZXZlbCIsIl9vcmlnaW5hbENoYXJhY3Rlck5hbWUiLCJhcHBseUVxdWlwbWVudEJvbnVzZXMiLCJfZ2V0RXF1aXBtZW50Qm9udXNlcyIsInQwIiwibWF4SHAiLCJpbW11bmUiLCJsb2FkQ2hhcmFjdGVyU2tpbGxzIiwibWFwIiwic2tpbGxEYXRhIiwic2tpbGxJZCIsImlkIiwic2tpbGxDb25maWciLCJfZXh0ZW5kcyIsInJlcXVpcmVSYWdlIiwic2tpbGwiLCJ0MSIsImluaXQiLCJ1cGRhdGVIZWFsdGhCYXIiLCJfY2FsbGVlMyIsIkVxdWlwbWVudERhdGFNYW5hZ2VyIiwiSXRlbUNvbmZpZyIsIl95aWVsZCRFcXVpcG1lbnREYXRhTSIsInNsb3RzIiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsIml0ZW1JZCIsImNmZyIsInQiLCJ2IiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiZ2V0RXF1aXBtZW50IiwiZ2V0SXRlbUJ5SWQiLCJlZmZlY3RUeXBlIiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJlZmZlY3RWYWx1ZSIsInVwZGF0ZSIsImZpbmlzaGVkIiwiZHQiLCJleHBSZXdhcmQiLCJpc0RlYWQiLCJzdGF0dXNUZXh0IiwiYWRkRXhwIiwibGV2ZWxlZFVwIiwibmV3TGV2ZWwiLCJzdGF0Q2hhbmdlcyIsInJlY29yZEV2ZW50Iiwic3RvcFJlY29yZGluZyIsInNhdmVUb0xvY2FsU3RvcmFnZSIsIkxhc3RCYXR0bGVSZWNvcmRLZXkiLCJfdHJhbnNpdGlvblRvR2FtZU92ZXJTY2VuZSIsIl9zaG93R2FtZU92ZXJQYW5lbCIsIl9jcmVhdGVCYXR0bGVBdmF0YXJzIiwiX3RoaXM1IiwiY29udGFpbmVyIiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJpY29uTGlzdCIsImF2YXRhck5vZGUiLCJfY3JlYXRlQmF0dGxlQXZhdGFyIiwiX2xheW91dEJhdHRsZUF2YXRhcnMiLCJ1bml0TmFtZSIsImNoYXJhY3Rlck5vZGUiLCJfZmluZENoYXJhY3Rlck5vZGUiLCJfY2hhcmFjdGVyTm9kZSIsIl9hZGRBdmF0YXJDbGlja0hhbmRsZXIiLCJqb2luIiwiaWNvbk5vZGUiLCJzcHJpdGUiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsImljb24iLCJVbml0RGF0YUNvbmZpZyIsInVuaXRDb25maWdMaXN0IiwiY29uZmlnSW5kZXgiLCJmaW5kSW5kZXgiLCJjb25maWciLCJUeXBlIiwiU0lNUExFIiwic2l6ZU1vZGUiLCJTaXplTW9kZSIsIkNVU1RPTSIsIm5hbWVMYWJlbCIsImxhYmVsIiwiTGFiZWwiLCJzdHJpbmciLCJmb250U2l6ZSIsImNoZWNrbWFyayIsIl91cGRhdGVBdmF0YXJDb2xvciIsInVuaXRMaXN0IiwicGFyc2VJbnQiLCJfdGhpczYiLCJfdG91Y2hFbmFibGVkIiwic2V0Q29udGVudFNpemUiLCJvZmYiLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJUT1VDSF9TVEFSVCIsImJ1dHRvbiIsIkJ1dHRvbiIsImFkZENvbXBvbmVudCIsInRyYW5zaXRpb24iLCJUcmFuc2l0aW9uIiwiU0NBTEUiLCJ6b29tU2NhbGUiLCJvbiIsImV2ZW50IiwiX29uQXZhdGFyQ2xpY2siLCJfaXNSZWxlYXNpbmdVbHRpbWF0ZSIsIlNraWxsU3lzdGVtIiwiVGVhbVJlZiIsIlRlYW1Db21wb25lbnQiLCJjYW5Vc2VVbHRpbWF0ZVNraWxsIiwiZW5lbWllcyIsIm1vbnN0ZXJzUmVmIiwiaGVyb3NSZWYiLCJ0YXJnZXQiLCJlIiwicyIsIm1zZyIsInVzZVVsdGltYXRlU2tpbGwiLCJfdGhpczciLCJpc1JhZ2VGdWxsIiwiY29sb3IiLCJDb2xvciIsIldISVRFIiwiY291bnQiLCJzcGFjaW5nIiwiYXZhdGFyV2lkdGgiLCJ0b3RhbFdpZHRoIiwiX3RoaXM4IiwiQmF0dGxlR2FtZVJlc3VsdCIsImxvYWRTY2VuZSIsInN0YWNrIiwiZ2FtZU92ZXJQYW5lbENvbXAiLCJzaG93R2FtZU92ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0EscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLE9BQUEsU0FBQUEsT0FBQSxPQUFBQyxFQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxNQUFBLEdBQUFILEVBQUEsQ0FBQUksY0FBQSxFQUFBQyxjQUFBLEdBQUFKLE1BQUEsQ0FBQUksY0FBQSxjQUFBQyxHQUFBLEVBQUFDLEdBQUEsRUFBQUMsSUFBQSxJQUFBRixHQUFBLENBQUFDLEdBQUEsSUFBQUMsSUFBQSxDQUFBQyxLQUFBLEtBQUFDLE9BQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxjQUFBLEdBQUFGLE9BQUEsQ0FBQUcsUUFBQSxrQkFBQUMsbUJBQUEsR0FBQUosT0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxpQkFBQSxHQUFBTixPQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFaLEdBQUEsRUFBQUMsR0FBQSxFQUFBRSxLQUFBLFdBQUFSLE1BQUEsQ0FBQUksY0FBQSxDQUFBQyxHQUFBLEVBQUFDLEdBQUEsSUFBQUUsS0FBQSxFQUFBQSxLQUFBLEVBQUFVLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFmLEdBQUEsQ0FBQUMsR0FBQSxXQUFBVyxNQUFBLG1CQUFBSSxHQUFBLElBQUFKLE1BQUEsWUFBQUEsT0FBQVosR0FBQSxFQUFBQyxHQUFBLEVBQUFFLEtBQUEsV0FBQUgsR0FBQSxDQUFBQyxHQUFBLElBQUFFLEtBQUEsZ0JBQUFjLEtBQUFDLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsUUFBQUMsY0FBQSxHQUFBSCxPQUFBLElBQUFBLE9BQUEsQ0FBQXZCLFNBQUEsWUFBQTJCLFNBQUEsR0FBQUosT0FBQSxHQUFBSSxTQUFBLEVBQUFDLFNBQUEsR0FBQTdCLE1BQUEsQ0FBQThCLE1BQUEsQ0FBQUgsY0FBQSxDQUFBMUIsU0FBQSxHQUFBOEIsT0FBQSxPQUFBQyxPQUFBLENBQUFOLFdBQUEsZ0JBQUF0QixjQUFBLENBQUF5QixTQUFBLGVBQUFyQixLQUFBLEVBQUF5QixnQkFBQSxDQUFBVixPQUFBLEVBQUFFLElBQUEsRUFBQU0sT0FBQSxNQUFBRixTQUFBLGFBQUFLLFNBQUFDLEVBQUEsRUFBQTlCLEdBQUEsRUFBQStCLEdBQUEsbUJBQUFDLElBQUEsWUFBQUQsR0FBQSxFQUFBRCxFQUFBLENBQUFHLElBQUEsQ0FBQWpDLEdBQUEsRUFBQStCLEdBQUEsY0FBQWYsR0FBQSxhQUFBZ0IsSUFBQSxXQUFBRCxHQUFBLEVBQUFmLEdBQUEsUUFBQXZCLE9BQUEsQ0FBQXdCLElBQUEsR0FBQUEsSUFBQSxNQUFBaUIsZ0JBQUEsZ0JBQUFYLFVBQUEsY0FBQVksa0JBQUEsY0FBQUMsMkJBQUEsU0FBQUMsaUJBQUEsT0FBQXpCLE1BQUEsQ0FBQXlCLGlCQUFBLEVBQUEvQixjQUFBLHFDQUFBZ0MsUUFBQSxHQUFBM0MsTUFBQSxDQUFBNEMsY0FBQSxFQUFBQyx1QkFBQSxHQUFBRixRQUFBLElBQUFBLFFBQUEsQ0FBQUEsUUFBQSxDQUFBRyxNQUFBLFFBQUFELHVCQUFBLElBQUFBLHVCQUFBLEtBQUE5QyxFQUFBLElBQUFHLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQU8sdUJBQUEsRUFBQWxDLGNBQUEsTUFBQStCLGlCQUFBLEdBQUFHLHVCQUFBLE9BQUFFLEVBQUEsR0FBQU4sMEJBQUEsQ0FBQXhDLFNBQUEsR0FBQTJCLFNBQUEsQ0FBQTNCLFNBQUEsR0FBQUQsTUFBQSxDQUFBOEIsTUFBQSxDQUFBWSxpQkFBQSxZQUFBTSxzQkFBQS9DLFNBQUEsZ0NBQUFnRCxPQUFBLFdBQUFDLE1BQUEsSUFBQWpDLE1BQUEsQ0FBQWhCLFNBQUEsRUFBQWlELE1BQUEsWUFBQWQsR0FBQSxnQkFBQWUsT0FBQSxDQUFBRCxNQUFBLEVBQUFkLEdBQUEsc0JBQUFnQixjQUFBdkIsU0FBQSxFQUFBd0IsV0FBQSxhQUFBQyxPQUFBSixNQUFBLEVBQUFkLEdBQUEsRUFBQW1CLE9BQUEsRUFBQUMsTUFBQSxRQUFBQyxNQUFBLEdBQUF2QixRQUFBLENBQUFMLFNBQUEsQ0FBQXFCLE1BQUEsR0FBQXJCLFNBQUEsRUFBQU8sR0FBQSxtQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsUUFBQXFCLE1BQUEsR0FBQUQsTUFBQSxDQUFBckIsR0FBQSxFQUFBNUIsS0FBQSxHQUFBa0QsTUFBQSxDQUFBbEQsS0FBQSxTQUFBQSxLQUFBLHVCQUFBQSxLQUFBLElBQUFOLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQTlCLEtBQUEsZUFBQTZDLFdBQUEsQ0FBQUUsT0FBQSxDQUFBL0MsS0FBQSxDQUFBbUQsT0FBQSxFQUFBQyxJQUFBLFdBQUFwRCxLQUFBLElBQUE4QyxNQUFBLFNBQUE5QyxLQUFBLEVBQUErQyxPQUFBLEVBQUFDLE1BQUEsZ0JBQUFuQyxHQUFBLElBQUFpQyxNQUFBLFVBQUFqQyxHQUFBLEVBQUFrQyxPQUFBLEVBQUFDLE1BQUEsUUFBQUgsV0FBQSxDQUFBRSxPQUFBLENBQUEvQyxLQUFBLEVBQUFvRCxJQUFBLFdBQUFDLFNBQUEsSUFBQUgsTUFBQSxDQUFBbEQsS0FBQSxHQUFBcUQsU0FBQSxFQUFBTixPQUFBLENBQUFHLE1BQUEsZ0JBQUFJLEtBQUEsV0FBQVIsTUFBQSxVQUFBUSxLQUFBLEVBQUFQLE9BQUEsRUFBQUMsTUFBQSxTQUFBQSxNQUFBLENBQUFDLE1BQUEsQ0FBQXJCLEdBQUEsU0FBQTJCLGVBQUEsRUFBQTNELGNBQUEsb0JBQUFJLEtBQUEsV0FBQUEsTUFBQTBDLE1BQUEsRUFBQWQsR0FBQSxhQUFBNEIsMkJBQUEsZUFBQVgsV0FBQSxXQUFBRSxPQUFBLEVBQUFDLE1BQUEsSUFBQUYsTUFBQSxDQUFBSixNQUFBLEVBQUFkLEdBQUEsRUFBQW1CLE9BQUEsRUFBQUMsTUFBQSxnQkFBQU8sZUFBQSxHQUFBQSxlQUFBLEdBQUFBLGVBQUEsQ0FBQUgsSUFBQSxDQUFBSSwwQkFBQSxFQUFBQSwwQkFBQSxJQUFBQSwwQkFBQSxxQkFBQS9CLGlCQUFBVixPQUFBLEVBQUFFLElBQUEsRUFBQU0sT0FBQSxRQUFBa0MsS0FBQSxzQ0FBQWYsTUFBQSxFQUFBZCxHQUFBLHdCQUFBNkIsS0FBQSxZQUFBQyxLQUFBLHNEQUFBRCxLQUFBLG9CQUFBZixNQUFBLFFBQUFkLEdBQUEsU0FBQStCLFVBQUEsV0FBQXBDLE9BQUEsQ0FBQW1CLE1BQUEsR0FBQUEsTUFBQSxFQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUFBLEdBQUEsVUFBQWdDLFFBQUEsR0FBQXJDLE9BQUEsQ0FBQXFDLFFBQUEsTUFBQUEsUUFBQSxRQUFBQyxjQUFBLEdBQUFDLG1CQUFBLENBQUFGLFFBQUEsRUFBQXJDLE9BQUEsT0FBQXNDLGNBQUEsUUFBQUEsY0FBQSxLQUFBOUIsZ0JBQUEsbUJBQUE4QixjQUFBLHFCQUFBdEMsT0FBQSxDQUFBbUIsTUFBQSxFQUFBbkIsT0FBQSxDQUFBd0MsSUFBQSxHQUFBeEMsT0FBQSxDQUFBeUMsS0FBQSxHQUFBekMsT0FBQSxDQUFBSyxHQUFBLHNCQUFBTCxPQUFBLENBQUFtQixNQUFBLDZCQUFBZSxLQUFBLFFBQUFBLEtBQUEsZ0JBQUFsQyxPQUFBLENBQUFLLEdBQUEsRUFBQUwsT0FBQSxDQUFBMEMsaUJBQUEsQ0FBQTFDLE9BQUEsQ0FBQUssR0FBQSx1QkFBQUwsT0FBQSxDQUFBbUIsTUFBQSxJQUFBbkIsT0FBQSxDQUFBMkMsTUFBQSxXQUFBM0MsT0FBQSxDQUFBSyxHQUFBLEdBQUE2QixLQUFBLG9CQUFBUixNQUFBLEdBQUF2QixRQUFBLENBQUFYLE9BQUEsRUFBQUUsSUFBQSxFQUFBTSxPQUFBLG9CQUFBMEIsTUFBQSxDQUFBcEIsSUFBQSxRQUFBNEIsS0FBQSxHQUFBbEMsT0FBQSxDQUFBNEMsSUFBQSxtQ0FBQWxCLE1BQUEsQ0FBQXJCLEdBQUEsS0FBQUcsZ0JBQUEscUJBQUEvQixLQUFBLEVBQUFpRCxNQUFBLENBQUFyQixHQUFBLEVBQUF1QyxJQUFBLEVBQUE1QyxPQUFBLENBQUE0QyxJQUFBLGtCQUFBbEIsTUFBQSxDQUFBcEIsSUFBQSxLQUFBNEIsS0FBQSxnQkFBQWxDLE9BQUEsQ0FBQW1CLE1BQUEsWUFBQW5CLE9BQUEsQ0FBQUssR0FBQSxHQUFBcUIsTUFBQSxDQUFBckIsR0FBQSxtQkFBQWtDLG9CQUFBRixRQUFBLEVBQUFyQyxPQUFBLFFBQUE2QyxVQUFBLEdBQUE3QyxPQUFBLENBQUFtQixNQUFBLEVBQUFBLE1BQUEsR0FBQWtCLFFBQUEsQ0FBQXhELFFBQUEsQ0FBQWdFLFVBQUEsT0FBQUMsU0FBQSxLQUFBM0IsTUFBQSxTQUFBbkIsT0FBQSxDQUFBcUMsUUFBQSxxQkFBQVEsVUFBQSxJQUFBUixRQUFBLENBQUF4RCxRQUFBLGVBQUFtQixPQUFBLENBQUFtQixNQUFBLGFBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQXlDLFNBQUEsRUFBQVAsbUJBQUEsQ0FBQUYsUUFBQSxFQUFBckMsT0FBQSxlQUFBQSxPQUFBLENBQUFtQixNQUFBLGtCQUFBMEIsVUFBQSxLQUFBN0MsT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLE9BQUEwQyxTQUFBLHVDQUFBRixVQUFBLGlCQUFBckMsZ0JBQUEsTUFBQWtCLE1BQUEsR0FBQXZCLFFBQUEsQ0FBQWdCLE1BQUEsRUFBQWtCLFFBQUEsQ0FBQXhELFFBQUEsRUFBQW1CLE9BQUEsQ0FBQUssR0FBQSxtQkFBQXFCLE1BQUEsQ0FBQXBCLElBQUEsU0FBQU4sT0FBQSxDQUFBbUIsTUFBQSxZQUFBbkIsT0FBQSxDQUFBSyxHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLEVBQUFMLE9BQUEsQ0FBQXFDLFFBQUEsU0FBQTdCLGdCQUFBLE1BQUF3QyxJQUFBLEdBQUF0QixNQUFBLENBQUFyQixHQUFBLFNBQUEyQyxJQUFBLEdBQUFBLElBQUEsQ0FBQUosSUFBQSxJQUFBNUMsT0FBQSxDQUFBcUMsUUFBQSxDQUFBWSxVQUFBLElBQUFELElBQUEsQ0FBQXZFLEtBQUEsRUFBQXVCLE9BQUEsQ0FBQWtELElBQUEsR0FBQWIsUUFBQSxDQUFBYyxPQUFBLGVBQUFuRCxPQUFBLENBQUFtQixNQUFBLEtBQUFuQixPQUFBLENBQUFtQixNQUFBLFdBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQXlDLFNBQUEsR0FBQTlDLE9BQUEsQ0FBQXFDLFFBQUEsU0FBQTdCLGdCQUFBLElBQUF3QyxJQUFBLElBQUFoRCxPQUFBLENBQUFtQixNQUFBLFlBQUFuQixPQUFBLENBQUFLLEdBQUEsT0FBQTBDLFNBQUEsc0NBQUEvQyxPQUFBLENBQUFxQyxRQUFBLFNBQUE3QixnQkFBQSxjQUFBNEMsYUFBQUMsSUFBQSxRQUFBQyxLQUFBLEtBQUFDLE1BQUEsRUFBQUYsSUFBQSxZQUFBQSxJQUFBLEtBQUFDLEtBQUEsQ0FBQUUsUUFBQSxHQUFBSCxJQUFBLFdBQUFBLElBQUEsS0FBQUMsS0FBQSxDQUFBRyxVQUFBLEdBQUFKLElBQUEsS0FBQUMsS0FBQSxDQUFBSSxRQUFBLEdBQUFMLElBQUEsV0FBQU0sVUFBQSxDQUFBQyxJQUFBLENBQUFOLEtBQUEsY0FBQU8sY0FBQVAsS0FBQSxRQUFBNUIsTUFBQSxHQUFBNEIsS0FBQSxDQUFBUSxVQUFBLFFBQUFwQyxNQUFBLENBQUFwQixJQUFBLG9CQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxFQUFBaUQsS0FBQSxDQUFBUSxVQUFBLEdBQUFwQyxNQUFBLGFBQUF6QixRQUFBTixXQUFBLFNBQUFnRSxVQUFBLE1BQUFKLE1BQUEsYUFBQTVELFdBQUEsQ0FBQXVCLE9BQUEsQ0FBQWtDLFlBQUEsY0FBQVcsS0FBQSxpQkFBQWhELE9BQUFpRCxRQUFBLFFBQUFBLFFBQUEsUUFBQUMsY0FBQSxHQUFBRCxRQUFBLENBQUFwRixjQUFBLE9BQUFxRixjQUFBLFNBQUFBLGNBQUEsQ0FBQTFELElBQUEsQ0FBQXlELFFBQUEsNEJBQUFBLFFBQUEsQ0FBQWQsSUFBQSxTQUFBYyxRQUFBLE9BQUFFLEtBQUEsQ0FBQUYsUUFBQSxDQUFBRyxNQUFBLFNBQUFDLENBQUEsT0FBQWxCLElBQUEsWUFBQUEsS0FBQSxhQUFBa0IsQ0FBQSxHQUFBSixRQUFBLENBQUFHLE1BQUEsT0FBQWhHLE1BQUEsQ0FBQW9DLElBQUEsQ0FBQXlELFFBQUEsRUFBQUksQ0FBQSxVQUFBbEIsSUFBQSxDQUFBekUsS0FBQSxHQUFBdUYsUUFBQSxDQUFBSSxDQUFBLEdBQUFsQixJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxTQUFBQSxJQUFBLENBQUF6RSxLQUFBLEdBQUFxRSxTQUFBLEVBQUFJLElBQUEsQ0FBQU4sSUFBQSxPQUFBTSxJQUFBLFlBQUFBLElBQUEsQ0FBQUEsSUFBQSxHQUFBQSxJQUFBLGVBQUFBLElBQUEsRUFBQWQsVUFBQSxlQUFBQSxXQUFBLGFBQUEzRCxLQUFBLEVBQUFxRSxTQUFBLEVBQUFGLElBQUEsaUJBQUFuQyxpQkFBQSxDQUFBdkMsU0FBQSxHQUFBd0MsMEJBQUEsRUFBQXJDLGNBQUEsQ0FBQTJDLEVBQUEsbUJBQUF2QyxLQUFBLEVBQUFpQywwQkFBQSxFQUFBdEIsWUFBQSxTQUFBZixjQUFBLENBQUFxQywwQkFBQSxtQkFBQWpDLEtBQUEsRUFBQWdDLGlCQUFBLEVBQUFyQixZQUFBLFNBQUFxQixpQkFBQSxDQUFBNEQsV0FBQSxHQUFBbkYsTUFBQSxDQUFBd0IsMEJBQUEsRUFBQTFCLGlCQUFBLHdCQUFBakIsT0FBQSxDQUFBdUcsbUJBQUEsYUFBQUMsTUFBQSxRQUFBQyxJQUFBLHdCQUFBRCxNQUFBLElBQUFBLE1BQUEsQ0FBQUUsV0FBQSxXQUFBRCxJQUFBLEtBQUFBLElBQUEsS0FBQS9ELGlCQUFBLDZCQUFBK0QsSUFBQSxDQUFBSCxXQUFBLElBQUFHLElBQUEsQ0FBQUUsSUFBQSxPQUFBM0csT0FBQSxDQUFBNEcsSUFBQSxhQUFBSixNQUFBLFdBQUF0RyxNQUFBLENBQUEyRyxjQUFBLEdBQUEzRyxNQUFBLENBQUEyRyxjQUFBLENBQUFMLE1BQUEsRUFBQTdELDBCQUFBLEtBQUE2RCxNQUFBLENBQUFNLFNBQUEsR0FBQW5FLDBCQUFBLEVBQUF4QixNQUFBLENBQUFxRixNQUFBLEVBQUF2RixpQkFBQSx5QkFBQXVGLE1BQUEsQ0FBQXJHLFNBQUEsR0FBQUQsTUFBQSxDQUFBOEIsTUFBQSxDQUFBaUIsRUFBQSxHQUFBdUQsTUFBQSxLQUFBeEcsT0FBQSxDQUFBK0csS0FBQSxhQUFBekUsR0FBQSxhQUFBdUIsT0FBQSxFQUFBdkIsR0FBQSxPQUFBWSxxQkFBQSxDQUFBSSxhQUFBLENBQUFuRCxTQUFBLEdBQUFnQixNQUFBLENBQUFtQyxhQUFBLENBQUFuRCxTQUFBLEVBQUFZLG1CQUFBLGlDQUFBZixPQUFBLENBQUFzRCxhQUFBLEdBQUFBLGFBQUEsRUFBQXRELE9BQUEsQ0FBQWdILEtBQUEsYUFBQXZGLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsRUFBQTJCLFdBQUEsZUFBQUEsV0FBQSxLQUFBQSxXQUFBLEdBQUEwRCxPQUFBLE9BQUFDLElBQUEsT0FBQTVELGFBQUEsQ0FBQTlCLElBQUEsQ0FBQUMsT0FBQSxFQUFBQyxPQUFBLEVBQUFDLElBQUEsRUFBQUMsV0FBQSxHQUFBMkIsV0FBQSxVQUFBdkQsT0FBQSxDQUFBdUcsbUJBQUEsQ0FBQTdFLE9BQUEsSUFBQXdGLElBQUEsR0FBQUEsSUFBQSxDQUFBL0IsSUFBQSxHQUFBckIsSUFBQSxXQUFBRixNQUFBLFdBQUFBLE1BQUEsQ0FBQWlCLElBQUEsR0FBQWpCLE1BQUEsQ0FBQWxELEtBQUEsR0FBQXdHLElBQUEsQ0FBQS9CLElBQUEsV0FBQWpDLHFCQUFBLENBQUFELEVBQUEsR0FBQTlCLE1BQUEsQ0FBQThCLEVBQUEsRUFBQWhDLGlCQUFBLGdCQUFBRSxNQUFBLENBQUE4QixFQUFBLEVBQUFwQyxjQUFBLGlDQUFBTSxNQUFBLENBQUE4QixFQUFBLDZEQUFBakQsT0FBQSxDQUFBbUgsSUFBQSxhQUFBQyxHQUFBLFFBQUFDLE1BQUEsR0FBQW5ILE1BQUEsQ0FBQWtILEdBQUEsR0FBQUQsSUFBQSxnQkFBQTNHLEdBQUEsSUFBQTZHLE1BQUEsRUFBQUYsSUFBQSxDQUFBdEIsSUFBQSxDQUFBckYsR0FBQSxVQUFBMkcsSUFBQSxDQUFBRyxPQUFBLGFBQUFuQyxLQUFBLFdBQUFnQyxJQUFBLENBQUFmLE1BQUEsU0FBQTVGLEdBQUEsR0FBQTJHLElBQUEsQ0FBQUksR0FBQSxRQUFBL0csR0FBQSxJQUFBNkcsTUFBQSxTQUFBbEMsSUFBQSxDQUFBekUsS0FBQSxHQUFBRixHQUFBLEVBQUEyRSxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxXQUFBQSxJQUFBLENBQUFOLElBQUEsT0FBQU0sSUFBQSxRQUFBbkYsT0FBQSxDQUFBZ0QsTUFBQSxHQUFBQSxNQUFBLEVBQUFkLE9BQUEsQ0FBQS9CLFNBQUEsS0FBQXVHLFdBQUEsRUFBQXhFLE9BQUEsRUFBQThELEtBQUEsV0FBQUEsTUFBQXdCLGFBQUEsYUFBQUMsSUFBQSxXQUFBdEMsSUFBQSxXQUFBVixJQUFBLFFBQUFDLEtBQUEsR0FBQUssU0FBQSxPQUFBRixJQUFBLFlBQUFQLFFBQUEsY0FBQWxCLE1BQUEsZ0JBQUFkLEdBQUEsR0FBQXlDLFNBQUEsT0FBQWEsVUFBQSxDQUFBekMsT0FBQSxDQUFBMkMsYUFBQSxJQUFBMEIsYUFBQSxXQUFBYixJQUFBLGtCQUFBQSxJQUFBLENBQUFlLE1BQUEsT0FBQXRILE1BQUEsQ0FBQW9DLElBQUEsT0FBQW1FLElBQUEsTUFBQVIsS0FBQSxFQUFBUSxJQUFBLENBQUFnQixLQUFBLGNBQUFoQixJQUFBLElBQUE1QixTQUFBLE1BQUE2QyxJQUFBLFdBQUFBLEtBQUEsU0FBQS9DLElBQUEsV0FBQWdELFVBQUEsUUFBQWpDLFVBQUEsSUFBQUcsVUFBQSxrQkFBQThCLFVBQUEsQ0FBQXRGLElBQUEsUUFBQXNGLFVBQUEsQ0FBQXZGLEdBQUEsY0FBQXdGLElBQUEsS0FBQW5ELGlCQUFBLFdBQUFBLGtCQUFBb0QsU0FBQSxhQUFBbEQsSUFBQSxRQUFBa0QsU0FBQSxNQUFBOUYsT0FBQSxrQkFBQStGLE9BQUFDLEdBQUEsRUFBQUMsTUFBQSxXQUFBdkUsTUFBQSxDQUFBcEIsSUFBQSxZQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxHQUFBeUYsU0FBQSxFQUFBOUYsT0FBQSxDQUFBa0QsSUFBQSxHQUFBOEMsR0FBQSxFQUFBQyxNQUFBLEtBQUFqRyxPQUFBLENBQUFtQixNQUFBLFdBQUFuQixPQUFBLENBQUFLLEdBQUEsR0FBQXlDLFNBQUEsS0FBQW1ELE1BQUEsYUFBQTdCLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxHQUFBMUMsTUFBQSxHQUFBNEIsS0FBQSxDQUFBUSxVQUFBLGlCQUFBUixLQUFBLENBQUFDLE1BQUEsU0FBQXdDLE1BQUEsYUFBQXpDLEtBQUEsQ0FBQUMsTUFBQSxTQUFBaUMsSUFBQSxRQUFBVSxRQUFBLEdBQUEvSCxNQUFBLENBQUFvQyxJQUFBLENBQUErQyxLQUFBLGVBQUE2QyxVQUFBLEdBQUFoSSxNQUFBLENBQUFvQyxJQUFBLENBQUErQyxLQUFBLHFCQUFBNEMsUUFBQSxJQUFBQyxVQUFBLGFBQUFYLElBQUEsR0FBQWxDLEtBQUEsQ0FBQUUsUUFBQSxTQUFBdUMsTUFBQSxDQUFBekMsS0FBQSxDQUFBRSxRQUFBLGdCQUFBZ0MsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRyxVQUFBLFNBQUFzQyxNQUFBLENBQUF6QyxLQUFBLENBQUFHLFVBQUEsY0FBQXlDLFFBQUEsYUFBQVYsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRSxRQUFBLFNBQUF1QyxNQUFBLENBQUF6QyxLQUFBLENBQUFFLFFBQUEscUJBQUEyQyxVQUFBLFlBQUFoRSxLQUFBLHFEQUFBcUQsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRyxVQUFBLFNBQUFzQyxNQUFBLENBQUF6QyxLQUFBLENBQUFHLFVBQUEsWUFBQWQsTUFBQSxXQUFBQSxPQUFBckMsSUFBQSxFQUFBRCxHQUFBLGFBQUErRCxDQUFBLFFBQUFULFVBQUEsQ0FBQVEsTUFBQSxNQUFBQyxDQUFBLFNBQUFBLENBQUEsUUFBQWQsS0FBQSxRQUFBSyxVQUFBLENBQUFTLENBQUEsT0FBQWQsS0FBQSxDQUFBQyxNQUFBLFNBQUFpQyxJQUFBLElBQUFySCxNQUFBLENBQUFvQyxJQUFBLENBQUErQyxLQUFBLHdCQUFBa0MsSUFBQSxHQUFBbEMsS0FBQSxDQUFBRyxVQUFBLFFBQUEyQyxZQUFBLEdBQUE5QyxLQUFBLGFBQUE4QyxZQUFBLGlCQUFBOUYsSUFBQSxtQkFBQUEsSUFBQSxLQUFBOEYsWUFBQSxDQUFBN0MsTUFBQSxJQUFBbEQsR0FBQSxJQUFBQSxHQUFBLElBQUErRixZQUFBLENBQUEzQyxVQUFBLEtBQUEyQyxZQUFBLGNBQUExRSxNQUFBLEdBQUEwRSxZQUFBLEdBQUFBLFlBQUEsQ0FBQXRDLFVBQUEsY0FBQXBDLE1BQUEsQ0FBQXBCLElBQUEsR0FBQUEsSUFBQSxFQUFBb0IsTUFBQSxDQUFBckIsR0FBQSxHQUFBQSxHQUFBLEVBQUErRixZQUFBLFNBQUFqRixNQUFBLGdCQUFBK0IsSUFBQSxHQUFBa0QsWUFBQSxDQUFBM0MsVUFBQSxFQUFBakQsZ0JBQUEsU0FBQTZGLFFBQUEsQ0FBQTNFLE1BQUEsTUFBQTJFLFFBQUEsV0FBQUEsU0FBQTNFLE1BQUEsRUFBQWdDLFFBQUEsb0JBQUFoQyxNQUFBLENBQUFwQixJQUFBLFFBQUFvQixNQUFBLENBQUFyQixHQUFBLHFCQUFBcUIsTUFBQSxDQUFBcEIsSUFBQSxtQkFBQW9CLE1BQUEsQ0FBQXBCLElBQUEsUUFBQTRDLElBQUEsR0FBQXhCLE1BQUEsQ0FBQXJCLEdBQUEsZ0JBQUFxQixNQUFBLENBQUFwQixJQUFBLFNBQUF1RixJQUFBLFFBQUF4RixHQUFBLEdBQUFxQixNQUFBLENBQUFyQixHQUFBLE9BQUFjLE1BQUEsa0JBQUErQixJQUFBLHlCQUFBeEIsTUFBQSxDQUFBcEIsSUFBQSxJQUFBb0QsUUFBQSxVQUFBUixJQUFBLEdBQUFRLFFBQUEsR0FBQWxELGdCQUFBLEtBQUE4RixNQUFBLFdBQUFBLE9BQUE3QyxVQUFBLGFBQUFXLENBQUEsUUFBQVQsVUFBQSxDQUFBUSxNQUFBLE1BQUFDLENBQUEsU0FBQUEsQ0FBQSxRQUFBZCxLQUFBLFFBQUFLLFVBQUEsQ0FBQVMsQ0FBQSxPQUFBZCxLQUFBLENBQUFHLFVBQUEsS0FBQUEsVUFBQSxjQUFBNEMsUUFBQSxDQUFBL0MsS0FBQSxDQUFBUSxVQUFBLEVBQUFSLEtBQUEsQ0FBQUksUUFBQSxHQUFBRyxhQUFBLENBQUFQLEtBQUEsR0FBQTlDLGdCQUFBLHlCQUFBK0YsT0FBQWhELE1BQUEsYUFBQWEsQ0FBQSxRQUFBVCxVQUFBLENBQUFRLE1BQUEsTUFBQUMsQ0FBQSxTQUFBQSxDQUFBLFFBQUFkLEtBQUEsUUFBQUssVUFBQSxDQUFBUyxDQUFBLE9BQUFkLEtBQUEsQ0FBQUMsTUFBQSxLQUFBQSxNQUFBLFFBQUE3QixNQUFBLEdBQUE0QixLQUFBLENBQUFRLFVBQUEsa0JBQUFwQyxNQUFBLENBQUFwQixJQUFBLFFBQUFrRyxNQUFBLEdBQUE5RSxNQUFBLENBQUFyQixHQUFBLEVBQUF3RCxhQUFBLENBQUFQLEtBQUEsWUFBQWtELE1BQUEsZ0JBQUFyRSxLQUFBLDhCQUFBc0UsYUFBQSxXQUFBQSxjQUFBekMsUUFBQSxFQUFBZixVQUFBLEVBQUFFLE9BQUEsZ0JBQUFkLFFBQUEsS0FBQXhELFFBQUEsRUFBQWtDLE1BQUEsQ0FBQWlELFFBQUEsR0FBQWYsVUFBQSxFQUFBQSxVQUFBLEVBQUFFLE9BQUEsRUFBQUEsT0FBQSxvQkFBQWhDLE1BQUEsVUFBQWQsR0FBQSxHQUFBeUMsU0FBQSxHQUFBdEMsZ0JBQUEsT0FBQXpDLE9BQUE7QUFBQSxTQUFBMkksZ0NBQUFDLENBQUEsRUFBQUMsY0FBQSxRQUFBQyxFQUFBLFVBQUFsSSxNQUFBLG9CQUFBZ0ksQ0FBQSxDQUFBaEksTUFBQSxDQUFBRSxRQUFBLEtBQUE4SCxDQUFBLG9CQUFBRSxFQUFBLFVBQUFBLEVBQUEsR0FBQUEsRUFBQSxDQUFBdEcsSUFBQSxDQUFBb0csQ0FBQSxHQUFBekQsSUFBQSxDQUFBNEQsSUFBQSxDQUFBRCxFQUFBLE9BQUFFLEtBQUEsQ0FBQUMsT0FBQSxDQUFBTCxDQUFBLE1BQUFFLEVBQUEsR0FBQUksMkJBQUEsQ0FBQU4sQ0FBQSxNQUFBQyxjQUFBLElBQUFELENBQUEsV0FBQUEsQ0FBQSxDQUFBeEMsTUFBQSxxQkFBQTBDLEVBQUEsRUFBQUYsQ0FBQSxHQUFBRSxFQUFBLE1BQUF6QyxDQUFBLCtCQUFBQSxDQUFBLElBQUF1QyxDQUFBLENBQUF4QyxNQUFBLFdBQUF2QixJQUFBLG1CQUFBQSxJQUFBLFNBQUFuRSxLQUFBLEVBQUFrSSxDQUFBLENBQUF2QyxDQUFBLHNCQUFBckIsU0FBQTtBQUFBLFNBQUFrRSw0QkFBQU4sQ0FBQSxFQUFBTyxNQUFBLFNBQUFQLENBQUEscUJBQUFBLENBQUEsc0JBQUFRLGlCQUFBLENBQUFSLENBQUEsRUFBQU8sTUFBQSxPQUFBRSxDQUFBLEdBQUFuSixNQUFBLENBQUFDLFNBQUEsQ0FBQW1KLFFBQUEsQ0FBQTlHLElBQUEsQ0FBQW9HLENBQUEsRUFBQWpCLEtBQUEsYUFBQTBCLENBQUEsaUJBQUFULENBQUEsQ0FBQWxDLFdBQUEsRUFBQTJDLENBQUEsR0FBQVQsQ0FBQSxDQUFBbEMsV0FBQSxDQUFBQyxJQUFBLE1BQUEwQyxDQUFBLGNBQUFBLENBQUEsbUJBQUFMLEtBQUEsQ0FBQU8sSUFBQSxDQUFBWCxDQUFBLE9BQUFTLENBQUEsK0RBQUFHLElBQUEsQ0FBQUgsQ0FBQSxVQUFBRCxpQkFBQSxDQUFBUixDQUFBLEVBQUFPLE1BQUE7QUFBQSxTQUFBQyxrQkFBQUssR0FBQSxFQUFBQyxHQUFBLFFBQUFBLEdBQUEsWUFBQUEsR0FBQSxHQUFBRCxHQUFBLENBQUFyRCxNQUFBLEVBQUFzRCxHQUFBLEdBQUFELEdBQUEsQ0FBQXJELE1BQUEsV0FBQUMsQ0FBQSxNQUFBc0QsSUFBQSxPQUFBWCxLQUFBLENBQUFVLEdBQUEsR0FBQXJELENBQUEsR0FBQXFELEdBQUEsRUFBQXJELENBQUEsSUFBQXNELElBQUEsQ0FBQXRELENBQUEsSUFBQW9ELEdBQUEsQ0FBQXBELENBQUEsVUFBQXNELElBQUE7QUFBQSxTQUFBQyxtQkFBQUMsR0FBQSxFQUFBcEcsT0FBQSxFQUFBQyxNQUFBLEVBQUFvRyxLQUFBLEVBQUFDLE1BQUEsRUFBQXZKLEdBQUEsRUFBQThCLEdBQUEsY0FBQTJDLElBQUEsR0FBQTRFLEdBQUEsQ0FBQXJKLEdBQUEsRUFBQThCLEdBQUEsT0FBQTVCLEtBQUEsR0FBQXVFLElBQUEsQ0FBQXZFLEtBQUEsV0FBQXNELEtBQUEsSUFBQU4sTUFBQSxDQUFBTSxLQUFBLGlCQUFBaUIsSUFBQSxDQUFBSixJQUFBLElBQUFwQixPQUFBLENBQUEvQyxLQUFBLFlBQUF1RyxPQUFBLENBQUF4RCxPQUFBLENBQUEvQyxLQUFBLEVBQUFvRCxJQUFBLENBQUFnRyxLQUFBLEVBQUFDLE1BQUE7QUFBQSxTQUFBQyxrQkFBQTNILEVBQUEsNkJBQUFWLElBQUEsU0FBQXNJLElBQUEsR0FBQUMsU0FBQSxhQUFBakQsT0FBQSxXQUFBeEQsT0FBQSxFQUFBQyxNQUFBLFFBQUFtRyxHQUFBLEdBQUF4SCxFQUFBLENBQUE4SCxLQUFBLENBQUF4SSxJQUFBLEVBQUFzSSxJQUFBLFlBQUFILE1BQUFwSixLQUFBLElBQUFrSixrQkFBQSxDQUFBQyxHQUFBLEVBQUFwRyxPQUFBLEVBQUFDLE1BQUEsRUFBQW9HLEtBQUEsRUFBQUMsTUFBQSxVQUFBckosS0FBQSxjQUFBcUosT0FBQXhJLEdBQUEsSUFBQXFJLGtCQUFBLENBQUFDLEdBQUEsRUFBQXBHLE9BQUEsRUFBQUMsTUFBQSxFQUFBb0csS0FBQSxFQUFBQyxNQUFBLFdBQUF4SSxHQUFBLEtBQUF1SSxLQUFBLENBQUEvRSxTQUFBO0FBREEsSUFBTXFGLGNBQWMsR0FBRztFQUNuQkMsTUFBTSxFQUFFLEtBQUs7RUFBTztFQUNwQkMsTUFBTSxFQUFFLE9BQU87RUFBSztFQUNwQkMsR0FBRyxFQUFFLEtBQUs7RUFBVTtFQUNwQkMsT0FBTyxFQUFFLFFBQVE7RUFBRztFQUNwQkMsSUFBSSxFQUFFLE1BQU0sQ0FBUTtBQUN4QixDQUFDOztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEdBQUFDLFdBQUE7SUFDTjtJQUNBQyxTQUFTLEVBQUU7TUFDUCxXQUFTLEVBQUU7TUFDWHhJLElBQUksRUFBRSxDQUFDbUksRUFBRSxDQUFDTSxJQUFJLENBQUM7TUFDZkMsT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVEO0lBQ0FDLFlBQVksRUFBRTtNQUNWLFdBQVMsRUFBRTtNQUNYM0ksSUFBSSxFQUFFLENBQUNtSSxFQUFFLENBQUNNLElBQUksQ0FBQztNQUNmQyxPQUFPLEVBQUU7SUFDYixDQUFDO0lBRUQ7SUFDQUUsVUFBVSxFQUFFO01BQ1IsV0FBUyxJQUFJO01BQ2I1SSxJQUFJLEVBQUVtSSxFQUFFLENBQUNNLElBQUk7TUFDYkMsT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVERyxhQUFhLEVBQUU7TUFDWCxXQUFTLElBQUk7TUFDYjdJLElBQUksRUFBRW1JLEVBQUUsQ0FBQ00sSUFBSTtNQUNiQyxPQUFPLEVBQUU7SUFDYixDQUFDO0lBRUQ7SUFDQUksYUFBYSxFQUFFO01BQ1gsV0FBUyxLQUFLO01BQ2RKLE9BQU8sRUFBRTtJQUNiLENBQUM7SUFFRDtJQUNBSyxrQkFBa0IsRUFBRTtNQUNoQixXQUFTLEtBQUs7TUFDZEwsT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVEO0lBQ0FNLFVBQVUsRUFBRTtNQUNSLFdBQVMsSUFBSTtNQUNiaEosSUFBSSxFQUFFbUksRUFBRSxDQUFDYyxNQUFNO01BQ2ZQLE9BQU8sRUFBRTtJQUNiLENBQUM7SUFFRDtJQUNBUSxhQUFhLEVBQUU7TUFDWCxXQUFTLElBQUk7TUFDYmxKLElBQUksRUFBRW1JLEVBQUUsQ0FBQ2MsTUFBTTtNQUNmUCxPQUFPLEVBQUU7SUFDYjtFQUFDLEdBQUFILFdBQUEsaUJBR1c7SUFDUixXQUFTLElBQUk7SUFDYnZJLElBQUksRUFBRW1JLEVBQUUsQ0FBQ00sSUFBSTtJQUNiQyxPQUFPLEVBQUU7RUFDYixDQUFDLEVBQUFILFdBQUEsb0JBR2M7SUFDWCxXQUFTLElBQUk7SUFDYnZJLElBQUksRUFBRW1JLEVBQUUsQ0FBQ00sSUFBSTtJQUNiQyxPQUFPLEVBQUU7RUFDYixDQUFDLEVBQUFILFdBQUEsQ0FHRFksWUFBWSxHQUFFO0lBQ1YsV0FBUyxDQUFDLEdBQUc7SUFDYlQsT0FBTyxFQUFFO0VBQ2IsQ0FBQyxFQUFBSCxXQUFBLENBRURhLGFBQWEsR0FBRTtJQUNYLFdBQVMsQ0FBQztJQUNWVixPQUFPLEVBQUU7RUFDYixDQUFDLEVBQUFILFdBQUEsQ0FFRGMsV0FBVyxHQUFFO0lBQ1QsV0FBUyxHQUFHO0lBQ1pYLE9BQU8sRUFBRTtFQUNiLENBQUMsRUFBQUgsV0FBQSxDQUVEZSxjQUFjLEdBQUU7SUFDWixXQUFTLENBQUMsR0FBRztJQUNiWixPQUFPLEVBQUU7RUFDYixDQUFDLEVBQUFILFdBQUEsQ0FFRGdCLGVBQWUsR0FBRTtJQUNiLFdBQVMsQ0FBQztJQUNWYixPQUFPLEVBQUU7RUFDYixDQUFDLEVBQUFILFdBQUEsQ0FFRGlCLGdCQUFnQixHQUFFO0lBQ2QsV0FBUyxHQUFHO0lBQ1pkLE9BQU8sRUFBRTtFQUNiLENBQUMsRUFBQUgsV0FBQSxDQUVEa0IsY0FBYyxHQUFFO0lBQ1osV0FBUyxHQUFHO0lBQ1pmLE9BQU8sRUFBRTtFQUNiLENBQUMsRUFBQUgsV0FBQSxDQUVEbUIsaUJBQWlCLEdBQUU7SUFDZixXQUFTLENBQUMsR0FBRztJQUNiaEIsT0FBTyxFQUFFO0VBQ2IsQ0FBQyxFQUFBSCxXQUFBLENBR0RvQixTQUFTLEdBQUU7SUFDUCxXQUFTLEdBQUc7SUFDWmpCLE9BQU8sRUFBRTtFQUNiLENBQUMsRUFBQUgsV0FBQSxDQUdEcUIsY0FBYyxHQUFFO0lBQ1osV0FBUyxHQUFHO0lBQ1psQixPQUFPLEVBQUU7RUFDYixDQUFDLEVBQUFILFdBQUEsQ0FHRHNCLGFBQWEsR0FBRTtJQUNYLFdBQVMsSUFBSTtJQUNiN0osSUFBSSxFQUFFbUksRUFBRSxDQUFDTSxJQUFJO0lBQ2JDLE9BQU8sRUFBRTtFQUNiLENBQUMsRUFBQUgsV0FBQSxDQUdEdUIsZUFBZSxHQUFFO0lBQ2IsV0FBUyxJQUFJO0lBQ2JwQixPQUFPLEVBQUU7RUFDYixDQUFDLEVBQUFILFdBQUEsQ0FHRHdCLG1CQUFtQixHQUFFO0lBQ2pCLFdBQVMsSUFBSTtJQUNiL0osSUFBSSxFQUFFbUksRUFBRSxDQUFDTSxJQUFJO0lBQ2JDLE9BQU8sRUFBRTtFQUNiLENBQUMsRUFBQUgsV0FBQSxDQUVEeUIsc0JBQXNCLEdBQUU7SUFDcEIsV0FBUyxJQUFJO0lBQ2JoSyxJQUFJLEVBQUVtSSxFQUFFLENBQUNNLElBQUk7SUFDYkMsT0FBTyxFQUFFO0VBQ2IsQ0FBQyxFQUFBSCxXQUFBLENBRUQwQixZQUFZLEdBQUU7SUFDVixXQUFTLElBQUk7SUFDYmpLLElBQUksRUFBRW1JLEVBQUUsQ0FBQ2MsTUFBTTtJQUNmUCxPQUFPLEVBQUU7RUFDYixDQUFDLEVBQUFILFdBQUEsQ0FFRDJCLFNBQVMsR0FBRTtJQUNQLFdBQVMsRUFBRTtJQUNYbEssSUFBSSxFQUFFLENBQUNtSSxFQUFFLENBQUNnQyxXQUFXLENBQUM7SUFDdEJ6QixPQUFPLEVBQUU7RUFDYixDQUFDLEVBQUFILFdBQUEsQ0FFRDZCLFlBQVksR0FBRTtJQUNWLFdBQVMsRUFBRTtJQUNYcEssSUFBSSxFQUFFLENBQUNtSSxFQUFFLENBQUNnQyxXQUFXLENBQUM7SUFDdEJ6QixPQUFPLEVBQUU7RUFDYixDQUFDLEVBQUFILFdBQUEsQ0FFRDhCLFVBQVUsR0FBRTtJQUNSLFdBQVMsRUFBRTtJQUNYM0IsT0FBTyxFQUFFO0VBQ2IsQ0FBQyxFQUFBSCxXQUFBLENBRUQrQixhQUFhLEdBQUU7SUFDWCxXQUFTLEVBQUU7SUFDWDVCLE9BQU8sRUFBRTtFQUNiLENBQUMsRUFBQUgsV0FBQSxDQUdEZ0MsaUJBQWlCLEdBQUU7SUFDZixXQUFTLGVBQWU7SUFDeEI3QixPQUFPLEVBQUU7RUFDYixDQUFDLEVBQUFILFdBQUEsQ0FHRGlDLGtCQUFrQixHQUFFO0lBQ2hCLFdBQVMsSUFBSTtJQUNiOUIsT0FBTyxFQUFFO0VBQ2IsQ0FBQyxFQUFBSCxXQUFBLENBR0RrQyxnQkFBZ0IsR0FBRTtJQUNkLFdBQVMsSUFBSTtJQUNiekssSUFBSSxFQUFFbUksRUFBRSxDQUFDTSxJQUFJO0lBQ2JDLE9BQU8sRUFBRTtFQUNiLENBQUMsRUFBQUgsV0FBQSxDQUNKO0VBRURtQyxNQUFNLFdBQUFBLE9BQUEsRUFBRztJQUFBLElBQUFDLEtBQUE7SUFDTCxJQUFNQyxZQUFZLEdBQUdDLE9BQU8sQ0FBQyxjQUFjLENBQUM7SUFDNUMsSUFBTUMsYUFBYSxHQUFHRCxPQUFPLENBQUMsZUFBZSxDQUFDO0lBQzlDLElBQU1FLFVBQVUsR0FBR0YsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUNwQyxJQUFBRyxRQUFBLEdBQXdCSCxPQUFPLENBQUMsYUFBYSxDQUFDO01BQXRDSSxXQUFXLEdBQUFELFFBQUEsQ0FBWEMsV0FBVzs7SUFFbkI7SUFDQSxJQUFJLENBQUNBLFdBQVcsR0FBR0EsV0FBVztJQUU5QixJQUFJLENBQUNDLElBQUksR0FBR0gsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUM5QixJQUFJLENBQUNJLE1BQU0sR0FBRyxJQUFJTCxhQUFhLEVBQUU7SUFFakMsSUFBSSxDQUFDTSxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQ0MsUUFBUSxHQUFHLEVBQUU7O0lBRWxCO0lBQ0EsSUFBSSxDQUFDQyxtQkFBbUIsR0FBRztNQUN2QkMsSUFBSSxFQUFFLEVBQUU7TUFDUkMsT0FBTyxFQUFFO0lBQ2IsQ0FBQzs7SUFFRDtJQUNBLElBQUksQ0FBQ0MsV0FBVyxHQUFHLEtBQUs7O0lBRXhCO0lBQ0EsSUFBSUMsTUFBTSxDQUFDQyxhQUFhLEtBQUtELE1BQU0sQ0FBQ0MsYUFBYSxDQUFDUCxLQUFLLENBQUN2SCxNQUFNLEdBQUcsQ0FBQyxJQUFJNkgsTUFBTSxDQUFDQyxhQUFhLENBQUNOLFFBQVEsQ0FBQ3hILE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtNQUM3R3NFLEVBQUUsQ0FBQ3lELEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQztNQUNqRCxJQUFJLENBQUM3QyxrQkFBa0IsR0FBRyxJQUFJO01BQzlCO01BQ0EsSUFBSSxDQUFDOEMsdUJBQXVCLEVBQUU7SUFDbEMsQ0FBQyxNQUFNO01BQ0g7TUFDQSxJQUFJLENBQUNDLFVBQVUsRUFBRTtJQUNyQjs7SUFFQTtJQUNBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJQyxNQUFNLEVBQUVDLFVBQVUsRUFBSztNQUN2QzlELEVBQUUsQ0FBQ3lELEdBQUcsMkVBQWtEO01BQ3hEekQsRUFBRSxDQUFDeUQsR0FBRyxpQ0FBK0JJLE1BQU0sc0JBQWlCQyxVQUFVLENBQUc7TUFDekV0QixLQUFJLENBQUN1QixXQUFXLENBQUNGLE1BQU0sRUFBRUMsVUFBVSxDQUFDO0lBQ3hDLENBQUM7O0lBRUQ7SUFDQSxJQUFJRSxRQUFRLEdBQUcsSUFBSTtJQUNuQixJQUFJLElBQUksQ0FBQ3JDLGVBQWUsRUFBRTtNQUN0QixJQUFNc0MsY0FBYyxHQUFHdkIsT0FBTyxDQUFDLGdCQUFnQixDQUFDO01BQ2hEc0IsUUFBUSxHQUFHLElBQUlDLGNBQWMsRUFBRSxDQUFDO01BQ2hDLElBQUksQ0FBQ0MsY0FBYyxHQUFHRixRQUFRLENBQUMsQ0FBQztJQUNwQzs7SUFFQTtJQUNBLElBQUksQ0FBQ0csWUFBWSxDQUFDLFlBQU07TUFDcEIzQixLQUFJLENBQUM0QixpQkFBaUIsRUFBRTtJQUM1QixDQUFDLEVBQUUsR0FBRyxDQUFDOztJQUVQO0lBQ0EsSUFBSSxDQUFDRCxZQUFZLENBQUMsWUFBTTtNQUNwQixJQUFJWixNQUFNLENBQUNDLGFBQWEsRUFBRTtRQUN0QnhELEVBQUUsQ0FBQ3lELEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQztRQUNuREYsTUFBTSxDQUFDQyxhQUFhLEdBQUcsSUFBSTtNQUMvQjtJQUNKLENBQUMsRUFBRSxHQUFHLENBQUM7O0lBRVA7SUFDQSxJQUFJLENBQUNhLFFBQVEsQ0FBQyxJQUFJLENBQUNDLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0lBRWpEO0lBQ0EsSUFBSSxDQUFDQyxZQUFZLEdBQUcsSUFBSTlCLFlBQVksQ0FDaEMsSUFBSSxDQUFDUSxLQUFLLEVBQ1YsSUFBSSxDQUFDQyxRQUFRLEVBQ2IsSUFBSSxDQUFDRixNQUFNLEVBQ1gsSUFBSSxDQUFDRCxJQUFJLEVBQ1RhLFVBQVUsRUFDVkksUUFBUSxDQUNYO0lBRUQsSUFBSSxDQUFDUSxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsR0FBRyxFQUFFOztJQUUxQjtJQUNBO0lBQ0EsSUFBSSxDQUFDUCxZQUFZLENBQUMsWUFBTTtNQUNwQjNCLEtBQUksQ0FBQ21DLGdCQUFnQixFQUFFO0lBQzNCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQ2IsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0lBLGdCQUFnQixXQUFBQSxpQkFBQSxFQUFHO0lBQ2YsSUFBSXBCLE1BQU0sQ0FBQ3FCLGVBQWUsSUFBSXJCLE1BQU0sQ0FBQ3FCLGVBQWUsQ0FBQ0MsT0FBTyxFQUFFO01BQzFELElBQU1DLFNBQVMsR0FBR3ZCLE1BQU0sQ0FBQ3FCLGVBQWUsQ0FBQ0UsU0FBUztNQUNsRDlFLEVBQUUsQ0FBQ3lELEdBQUcsMkhBQXlDcUIsU0FBUyxDQUFHOztNQUUzRDtNQUNBLElBQUl4QyxnQkFBZ0IsR0FBRyxJQUFJO01BQzNCLElBQUksSUFBSSxDQUFDQSxnQkFBZ0IsRUFBRTtRQUN2QkEsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDQSxnQkFBZ0IsQ0FBQ3lDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQztNQUM3RSxDQUFDLE1BQU07UUFDSDtRQUNBLElBQU1DLEtBQUssR0FBR2hGLEVBQUUsQ0FBQ2lGLFFBQVEsQ0FBQ0MsUUFBUSxFQUFFO1FBQ3BDLElBQUlGLEtBQUssRUFBRTtVQUNQLElBQU1HLE1BQU0sR0FBR0gsS0FBSyxDQUFDSSxjQUFjLENBQUMsUUFBUSxDQUFDO1VBQzdDLElBQUlELE1BQU0sRUFBRTtZQUNSLElBQU1FLFVBQVUsR0FBR0YsTUFBTSxDQUFDQyxjQUFjLENBQUMsa0JBQWtCLENBQUM7WUFDNUQsSUFBSUMsVUFBVSxFQUFFO2NBQ1ovQyxnQkFBZ0IsR0FBRytDLFVBQVUsQ0FBQ04sWUFBWSxDQUFDLGtCQUFrQixDQUFDO1lBQ2xFO1VBQ0o7UUFDSjtNQUNKO01BRUEsSUFBSXpDLGdCQUFnQixJQUFJd0MsU0FBUyxFQUFFO1FBQy9CO1FBQ0EsSUFBTVEsWUFBWSxHQUFHLElBQUksQ0FBQ3JDLEtBQUssSUFBSSxFQUFFO1FBQ3JDLElBQU1zQyxlQUFlLEdBQUcsSUFBSSxDQUFDckMsUUFBUSxJQUFJLEVBQUU7UUFDM0NsRCxFQUFFLENBQUN5RCxHQUFHLDBJQUE4QzZCLFlBQVksQ0FBQzVKLE1BQU0sOEJBQVU2SixlQUFlLENBQUM3SixNQUFNLFlBQUk7O1FBRTNHO1FBQ0E0RyxnQkFBZ0IsQ0FBQ2tELGFBQWEsQ0FBQ1YsU0FBUyxFQUFFUSxZQUFZLEVBQUVDLGVBQWUsQ0FBQztRQUN4RXZGLEVBQUUsQ0FBQ3lELEdBQUcsaUVBQThCOztRQUVwQztRQUNBRixNQUFNLENBQUNxQixlQUFlLEdBQUcsSUFBSTtNQUNqQyxDQUFDLE1BQU07UUFDSDVFLEVBQUUsQ0FBQzFHLEtBQUssdUVBQStCO1FBQ3ZDMEcsRUFBRSxDQUFDMUcsS0FBSyw4QkFBMkJnSixnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsS0FBSyxFQUFHO1FBQ3JFdEMsRUFBRSxDQUFDMUcsS0FBSyx1QkFBb0J3TCxTQUFTLEdBQUdBLFNBQVMsR0FBRyxLQUFLLEVBQUc7TUFDaEU7SUFDSjtFQUNKLENBQUM7RUFFRDtBQUNKO0FBQ0E7RUFDSW5CLFVBQVUsV0FBQUEsV0FBQSxFQUFHO0lBQ1Q7SUFDQSxJQUFJLElBQUksQ0FBQ2hELGFBQWEsRUFBRTtNQUNwQjtNQUNBLElBQUksQ0FBQzhFLG1CQUFtQixFQUFFO0lBQzlCLENBQUMsTUFBTTtNQUNIO01BQ0EsSUFBSSxDQUFDQyxrQkFBa0IsRUFBRTtJQUM3Qjs7SUFFQTtJQUNBO0lBQ0EsSUFBSSxDQUFDQyxhQUFhLEVBQUUsU0FBTSxDQUFDLFVBQUE5TyxHQUFHLEVBQUk7TUFDOUJtSixFQUFFLENBQUMxRyxLQUFLLGlGQUFrQ3pDLEdBQUcsQ0FBQytPLE9BQU8sQ0FBRztJQUM1RCxDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSWxDLHVCQUF1QixXQUFBQSx3QkFBQSxFQUFHO0lBQUEsSUFBQW1DLE1BQUE7SUFDdEIsSUFBSSxDQUFDdEMsTUFBTSxDQUFDQyxhQUFhLEVBQUU7TUFDdkJ4RCxFQUFFLENBQUMxRyxLQUFLLENBQUMsc0RBQXNELENBQUM7TUFDaEU7SUFDSjtJQUVBLElBQU13TSxhQUFhLEdBQUd2QyxNQUFNLENBQUNDLGFBQWE7SUFDMUN4RCxFQUFFLENBQUN5RCxHQUFHLDBGQUFzQ3FDLGFBQWEsQ0FBQzdDLEtBQUssQ0FBQ3ZILE1BQU0sOEJBQVVvSyxhQUFhLENBQUM1QyxRQUFRLENBQUN4SCxNQUFNLFlBQUk7O0lBRWpIO0lBQ0EsSUFBSW9LLGFBQWEsQ0FBQzdDLEtBQUssSUFBSTZDLGFBQWEsQ0FBQzdDLEtBQUssQ0FBQ3ZILE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQ21GLFVBQVUsRUFBRTtRQUNsQmIsRUFBRSxDQUFDMUcsS0FBSyxDQUFDLDJDQUEyQyxDQUFDO01BQ3pELENBQUMsTUFBTTtRQUNId00sYUFBYSxDQUFDN0MsS0FBSyxDQUFDeEssT0FBTyxDQUFDLFVBQUNzTixRQUFRLEVBQUVDLEtBQUssRUFBSztVQUM3QyxJQUFNQyxRQUFRLEdBQUdKLE1BQUksQ0FBQ0ssZUFBZSxDQUFDSCxRQUFRLEVBQUUsTUFBTSxFQUFFQyxLQUFLLEVBQUVGLGFBQWEsQ0FBQzdDLEtBQUssQ0FBQ3ZILE1BQU0sQ0FBQztVQUMxRixJQUFJdUssUUFBUSxFQUFFO1lBQ1ZKLE1BQUksQ0FBQzVDLEtBQUssQ0FBQzlILElBQUksQ0FBQzhLLFFBQVEsQ0FBQztVQUM3QjtRQUNKLENBQUMsQ0FBQztNQUNOO0lBQ0o7O0lBRUE7SUFDQSxJQUFJSCxhQUFhLENBQUM1QyxRQUFRLElBQUk0QyxhQUFhLENBQUM1QyxRQUFRLENBQUN4SCxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQzdELElBQUksQ0FBQyxJQUFJLENBQUNxRixhQUFhLEVBQUU7UUFDckJmLEVBQUUsQ0FBQzFHLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQztNQUM1RCxDQUFDLE1BQU07UUFDSHdNLGFBQWEsQ0FBQzVDLFFBQVEsQ0FBQ3pLLE9BQU8sQ0FBQyxVQUFDc04sUUFBUSxFQUFFQyxLQUFLLEVBQUs7VUFDaEQsSUFBTUcsV0FBVyxHQUFHTixNQUFJLENBQUNLLGVBQWUsQ0FBQ0gsUUFBUSxFQUFFLFNBQVMsRUFBRUMsS0FBSyxFQUFFRixhQUFhLENBQUM1QyxRQUFRLENBQUN4SCxNQUFNLENBQUM7VUFDbkcsSUFBSXlLLFdBQVcsRUFBRTtZQUNiTixNQUFJLENBQUMzQyxRQUFRLENBQUMvSCxJQUFJLENBQUNnTCxXQUFXLENBQUM7VUFDbkM7UUFDSixDQUFDLENBQUM7TUFDTjtJQUNKOztJQUVBO0lBQ0E7SUFDQSxJQUFJLENBQUNSLGFBQWEsRUFBRSxTQUFNLENBQUMsVUFBQTlPLEdBQUcsRUFBSTtNQUM5Qm1KLEVBQUUsQ0FBQzFHLEtBQUssaUZBQWtDekMsR0FBRyxDQUFDK08sT0FBTyxDQUFHO0lBQzVELENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSU0sZUFBZSxXQUFBQSxnQkFBQ0gsUUFBUSxFQUFFSyxJQUFJLEVBQUVKLEtBQUssRUFBRUssVUFBVSxFQUFFO0lBQy9DO0lBQ0E7SUFDQSxJQUFJQyxNQUFNLEdBQUdQLFFBQVEsQ0FBQ08sTUFBTTtJQUM1QixJQUFJQyxZQUFZLEdBQUcsaUJBQWlCO0lBRXBDLElBQUksQ0FBQ0QsTUFBTSxFQUFFO01BQ1Q7TUFDQUEsTUFBTSxHQUFHRixJQUFJLEtBQUssTUFBTSxHQUFHLElBQUksQ0FBQ3ZGLFVBQVUsR0FBRyxJQUFJLENBQUNFLGFBQWE7TUFDL0R3RixZQUFZLEdBQU1ILElBQUksV0FBUTtNQUU5QixJQUFJLENBQUNFLE1BQU0sRUFBRTtRQUNUdEcsRUFBRSxDQUFDMUcsS0FBSyxrREFBNEI4TSxJQUFJLHlGQUFrQ0EsSUFBSSxrQkFBSztRQUNuRnBHLEVBQUUsQ0FBQzFHLEtBQUssbUZBQWlDO1FBQ3pDMEcsRUFBRSxDQUFDMUcsS0FBSyxnRUFBOEN5TSxRQUFRLENBQUM5SixJQUFJLGtEQUFnQjtRQUNuRitELEVBQUUsQ0FBQzFHLEtBQUssa0ZBQWtEOE0sSUFBSSxZQUFTO1FBQ3ZFLE9BQU8sSUFBSTtNQUNmLENBQUMsTUFBTTtRQUNIcEcsRUFBRSxDQUFDd0csSUFBSSwrRkFBZ0RKLElBQUksZ0JBQVdMLFFBQVEsQ0FBQzlKLElBQUksQ0FBRztRQUN0RitELEVBQUUsQ0FBQ3dHLElBQUkseUZBQW9DVCxRQUFRLENBQUM5SixJQUFJLDhGQUFtQztNQUMvRjtJQUNKLENBQUMsTUFBTTtNQUNIK0QsRUFBRSxDQUFDeUQsR0FBRyxxRkFBZ0RzQyxRQUFRLENBQUM5SixJQUFJLENBQUc7SUFDMUU7SUFFQStELEVBQUUsQ0FBQ3lELEdBQUcsaURBQTJCMkMsSUFBSSxzQkFBT0wsUUFBUSxDQUFDOUosSUFBSSxzQkFBT3NLLFlBQVksT0FBSTs7SUFFaEY7SUFDQSxJQUFNRSxRQUFRLEdBQUd6RyxFQUFFLENBQUMwRyxXQUFXLENBQUNKLE1BQU0sQ0FBQztJQUN2Q0csUUFBUSxDQUFDeEssSUFBSSxHQUFHOEosUUFBUSxDQUFDOUosSUFBSTs7SUFFN0I7SUFDQXdLLFFBQVEsQ0FBQ0UsTUFBTSxHQUFHLElBQUk7SUFDdEJGLFFBQVEsQ0FBQ0csT0FBTyxHQUFHLEdBQUc7O0lBRXRCO0lBQ0EsSUFBTUMsTUFBTSxHQUFHVCxJQUFJLEtBQUssTUFBTSxHQUFHLElBQUksQ0FBQzNGLFVBQVUsR0FBRyxJQUFJLENBQUNDLGFBQWE7SUFDckUsSUFBSW1HLE1BQU0sRUFBRTtNQUNSO01BQ0EsSUFBSSxDQUFDQSxNQUFNLENBQUNGLE1BQU0sRUFBRTtRQUNoQjNHLEVBQUUsQ0FBQ3dHLElBQUksc0NBQTBCSixJQUFJLGtFQUFrQjtRQUN2RFMsTUFBTSxDQUFDRixNQUFNLEdBQUcsSUFBSTtNQUN4QjtNQUNBLElBQUlFLE1BQU0sQ0FBQ0QsT0FBTyxLQUFLLENBQUMsRUFBRTtRQUN0QjVHLEVBQUUsQ0FBQ3dHLElBQUksc0NBQTBCSixJQUFJLHNFQUFzQjtRQUMzRFMsTUFBTSxDQUFDRCxPQUFPLEdBQUcsR0FBRztNQUN4QjtNQUNBQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0wsUUFBUSxDQUFDO01BQ3pCekcsRUFBRSxDQUFDeUQsR0FBRyx5QkFBdUIyQyxJQUFJLGdFQUFjUyxNQUFNLENBQUM1SyxJQUFJLDJDQUFhNEssTUFBTSxDQUFDRSxDQUFDLFVBQUtGLE1BQU0sQ0FBQ0csQ0FBQyxPQUFJO0lBQ3BHLENBQUMsTUFBTTtNQUNIO01BQ0EsSUFBTTdCLE1BQU0sR0FBR25GLEVBQUUsQ0FBQ2lILElBQUksQ0FBQyxRQUFRLENBQUM7TUFDaEMsSUFBSTlCLE1BQU0sRUFBRTtRQUNSQSxNQUFNLENBQUMyQixRQUFRLENBQUNMLFFBQVEsQ0FBQztRQUN6QnpHLEVBQUUsQ0FBQ3lELEdBQUcseUJBQXVCMkMsSUFBSSxnREFBZTtNQUNwRCxDQUFDLE1BQU07UUFDSHBHLEVBQUUsQ0FBQzFHLEtBQUssa0dBQXlDOE0sSUFBSSxrQkFBSztRQUMxRCxPQUFPLElBQUk7TUFDZjtJQUNKOztJQUVBO0lBQ0EsSUFBSWMsUUFBUTtJQUNaLElBQUluQixRQUFRLENBQUNtQixRQUFRLElBQUluQixRQUFRLENBQUNtQixRQUFRLENBQUNILENBQUMsS0FBSzFNLFNBQVMsSUFBSTBMLFFBQVEsQ0FBQ21CLFFBQVEsQ0FBQ0YsQ0FBQyxLQUFLM00sU0FBUyxFQUFFO01BQzdGO01BQ0E2TSxRQUFRLEdBQUdsSCxFQUFFLENBQUNtSCxFQUFFLENBQUNwQixRQUFRLENBQUNtQixRQUFRLENBQUNILENBQUMsRUFBRWhCLFFBQVEsQ0FBQ21CLFFBQVEsQ0FBQ0YsQ0FBQyxDQUFDO01BQzFEaEgsRUFBRSxDQUFDeUQsR0FBRyxzRUFBaUN5RCxRQUFRLENBQUNILENBQUMsQ0FBQ0ssT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFLRixRQUFRLENBQUNGLENBQUMsQ0FBQ0ksT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFJO0lBQzlGLENBQUMsTUFBTTtNQUNIO01BQ0FGLFFBQVEsR0FBRyxJQUFJLENBQUNHLDJCQUEyQixDQUFDakIsSUFBSSxFQUFFSixLQUFLLEVBQUVLLFVBQVUsQ0FBQztNQUNwRXJHLEVBQUUsQ0FBQ3lELEdBQUcsZ0VBQWdDeUQsUUFBUSxDQUFDSCxDQUFDLENBQUNLLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBS0YsUUFBUSxDQUFDRixDQUFDLENBQUNJLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBSTtJQUM3RjtJQUNBWCxRQUFRLENBQUNhLFdBQVcsQ0FBQ0osUUFBUSxDQUFDSCxDQUFDLEVBQUVHLFFBQVEsQ0FBQ0YsQ0FBQyxDQUFDOztJQUU1QztJQUNBUCxRQUFRLENBQUNjLFFBQVEsQ0FBQyxJQUFJLENBQUMvRixTQUFTLEVBQUUsSUFBSSxDQUFDQSxTQUFTLEVBQUUsR0FBRyxDQUFDO0lBQ3REeEIsRUFBRSxDQUFDeUQsR0FBRyxxQ0FBeUIyQyxJQUFJLDhDQUFXLElBQUksQ0FBQzVFLFNBQVMsU0FBSSxJQUFJLENBQUNBLFNBQVMsQ0FBRzs7SUFFakY7SUFDQTtJQUNBLElBQUk0RSxJQUFJLEtBQUssTUFBTSxFQUFFO01BQ2pCSyxRQUFRLENBQUNlLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxHQUFHLENBQUNqQixRQUFRLENBQUNlLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQyxNQUFNO01BQ0hmLFFBQVEsQ0FBQ2UsTUFBTSxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDakIsUUFBUSxDQUFDZSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2xEOztJQUNBeEgsRUFBRSxDQUFDeUQsR0FBRyxxQ0FBeUIyQyxJQUFJLHFEQUFrQkssUUFBUSxDQUFDZSxNQUFNLENBQUc7O0lBRXZFO0lBQ0FmLFFBQVEsQ0FBQ2tCLFNBQVMsR0FBRzVCLFFBQVE7SUFDN0JVLFFBQVEsQ0FBQ21CLEtBQUssR0FBR3hCLElBQUk7O0lBRXJCO0lBQ0EsSUFBTXlCLEtBQUssR0FBR3BCLFFBQVEsQ0FBQzFCLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNyRCxJQUFNK0MsUUFBUSxHQUFHckIsUUFBUSxDQUFDMUIsWUFBWSxDQUFDLGVBQWUsQ0FBQztJQUN2RCxJQUFNZ0QsTUFBTSxHQUFHdEIsUUFBUSxDQUFDMUIsWUFBWSxDQUFDLGdCQUFnQixDQUFDO0lBQ3RELElBQU1pRCxRQUFRLEdBQUd2QixRQUFRLENBQUMxQixZQUFZLENBQUNrRCxFQUFFLENBQUNDLFFBQVEsQ0FBQztJQUVuRGxJLEVBQUUsQ0FBQ3lELEdBQUcseUJBQXVCMkMsSUFBSSw4Q0FBV0wsUUFBUSxDQUFDOUosSUFBSSxDQUFHO0lBQzVEK0QsRUFBRSxDQUFDeUQsR0FBRyw0Q0FBeUNvRSxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRztJQUNuRTdILEVBQUUsQ0FBQ3lELEdBQUcsMkNBQXdDcUUsUUFBUSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUc7SUFDckU5SCxFQUFFLENBQUN5RCxHQUFHLDRDQUF5Q3NFLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFHO0lBQ3BFL0gsRUFBRSxDQUFDeUQsR0FBRyw0Q0FBeUN1RSxRQUFRLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRztJQUV0RSxJQUFJLENBQUNILEtBQUssRUFBRTtNQUNSN0gsRUFBRSxDQUFDMUcsS0FBSyxnQ0FBeUI4TSxJQUFJLDREQUF5QkwsUUFBUSxDQUFDOUosSUFBSSxDQUFHO01BQzlFK0QsRUFBRSxDQUFDMUcsS0FBSyxnREFBbUNnTixNQUFNLENBQUNySyxJQUFJLDZFQUE0QjtJQUN0RjtJQUNBLElBQUksQ0FBQzZMLFFBQVEsRUFBRTtNQUNYOUgsRUFBRSxDQUFDMUcsS0FBSyxnQ0FBeUI4TSxJQUFJLDJEQUF3QkwsUUFBUSxDQUFDOUosSUFBSSxDQUFHO01BQzdFK0QsRUFBRSxDQUFDMUcsS0FBSyxnREFBbUNnTixNQUFNLENBQUNySyxJQUFJLDRFQUEyQjtJQUNyRjtJQUNBLElBQUksQ0FBQzhMLE1BQU0sRUFBRTtNQUNUL0gsRUFBRSxDQUFDMUcsS0FBSyxnQ0FBeUI4TSxJQUFJLDREQUF5QkwsUUFBUSxDQUFDOUosSUFBSSxDQUFHO01BQzlFK0QsRUFBRSxDQUFDMUcsS0FBSyxnREFBbUNnTixNQUFNLENBQUNySyxJQUFJLDZFQUE0QjtJQUN0RjtJQUNBLElBQUksQ0FBQytMLFFBQVEsRUFBRTtNQUNYaEksRUFBRSxDQUFDd0csSUFBSSxzQ0FBMEJKLElBQUksNERBQXlCTCxRQUFRLENBQUM5SixJQUFJLENBQUc7TUFDOUUrRCxFQUFFLENBQUN3RyxJQUFJLGtIQUE4Q0YsTUFBTSxDQUFDckssSUFBSSxrREFBcUI7SUFDekYsQ0FBQyxNQUFNO01BQ0g7TUFDQSxJQUFJLENBQUMrTCxRQUFRLENBQUNHLFlBQVksRUFBRTtRQUN4Qm5JLEVBQUUsQ0FBQ3dHLElBQUksc0NBQTBCSixJQUFJLDhFQUFzQ0wsUUFBUSxDQUFDOUosSUFBSSxDQUFHO01BQy9GLENBQUMsTUFBTTtRQUNIK0QsRUFBRSxDQUFDeUQsR0FBRywrQ0FBa0N1RSxRQUFRLENBQUNHLFlBQVksQ0FBQ2xNLElBQUksSUFBSSxLQUFLLEVBQUc7TUFDbEY7SUFDSjs7SUFFQTtJQUNBLElBQU1tTSxXQUFXLEdBQUczQixRQUFRLENBQUM0QixjQUFjLEVBQUU7SUFDN0MsSUFBSUQsV0FBVyxDQUFDRSxLQUFLLEtBQUssQ0FBQyxJQUFJRixXQUFXLENBQUNHLE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDckR2SSxFQUFFLENBQUN3RyxJQUFJLHNDQUEwQkosSUFBSSxxREFBYUwsUUFBUSxDQUFDOUosSUFBSSxDQUFHO01BQ2xFK0QsRUFBRSxDQUFDd0csSUFBSSxnSkFBc0Q7TUFDN0R4RyxFQUFFLENBQUN3RyxJQUFJLHNEQUFvQ0YsTUFBTSxDQUFDckssSUFBSSw4REFBdUI7O01BRTdFO01BQ0EsSUFBTXVNLFFBQVEsR0FBRy9CLFFBQVEsQ0FBQytCLFFBQVE7TUFDbEMsSUFBSUEsUUFBUSxJQUFJQSxRQUFRLENBQUM5TSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ2pDLElBQUkrTSxRQUFRLEdBQUcsQ0FBQztVQUFFQyxTQUFTLEdBQUcsQ0FBQztRQUMvQkYsUUFBUSxDQUFDL1AsT0FBTyxDQUFDLFVBQUFrUSxLQUFLLEVBQUk7VUFDdEIsSUFBTUMsU0FBUyxHQUFHRCxLQUFLLENBQUNOLGNBQWMsRUFBRTtVQUN4QyxJQUFNUSxhQUFhLEdBQUdGLEtBQUssQ0FBQ0csV0FBVyxFQUFFO1VBQ3pDLElBQUlGLFNBQVMsQ0FBQ04sS0FBSyxHQUFHRyxRQUFRLEVBQUVBLFFBQVEsR0FBR0csU0FBUyxDQUFDTixLQUFLO1VBQzFELElBQUlNLFNBQVMsQ0FBQ0wsTUFBTSxHQUFHRyxTQUFTLEVBQUVBLFNBQVMsR0FBR0UsU0FBUyxDQUFDTCxNQUFNO1VBQzlEdkksRUFBRSxDQUFDeUQsR0FBRywrQ0FBOEJrRixLQUFLLENBQUMxTSxJQUFJLHdCQUFTMk0sU0FBUyxDQUFDTixLQUFLLFNBQUlNLFNBQVMsQ0FBQ0wsTUFBTSx5QkFBVU0sYUFBYSxDQUFDOUIsQ0FBQyxVQUFLOEIsYUFBYSxDQUFDN0IsQ0FBQyxPQUFJO1FBQy9JLENBQUMsQ0FBQztRQUNGLElBQUl5QixRQUFRLEdBQUcsQ0FBQyxJQUFJQyxTQUFTLEdBQUcsQ0FBQyxFQUFFO1VBQy9CMUksRUFBRSxDQUFDeUQsR0FBRyx5RkFBcUNnRixRQUFRLFNBQUlDLFNBQVMsQ0FBRztRQUN2RTtNQUNKLENBQUMsTUFBTTtRQUNIMUksRUFBRSxDQUFDd0csSUFBSSxvQ0FBaUNGLE1BQU0sQ0FBQ3JLLElBQUksbURBQVk7TUFDbkU7SUFDSjs7SUFFQTtJQUNBK0QsRUFBRSxDQUFDeUQsR0FBRyw0Q0FBMkIyQyxJQUFJLGtDQUFTTCxRQUFRLENBQUM5SixJQUFJLENBQUc7SUFDOUQrRCxFQUFFLENBQUN5RCxHQUFHLHNEQUFnQ3lELFFBQVEsQ0FBQ0gsQ0FBQyxDQUFDSyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQUtGLFFBQVEsQ0FBQ0YsQ0FBQyxDQUFDSSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQUk7SUFDekZwSCxFQUFFLENBQUN5RCxHQUFHLHFEQUErQjJFLFdBQVcsQ0FBQ0UsS0FBSyxDQUFDbEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFJZ0IsV0FBVyxDQUFDRyxNQUFNLENBQUNuQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUc7SUFDckdwSCxFQUFFLENBQUN5RCxHQUFHLCtDQUFtQ2dELFFBQVEsQ0FBQ0UsTUFBTSxtQkFBY0YsUUFBUSxDQUFDRyxPQUFPLENBQUc7SUFDekYsSUFBSUgsUUFBUSxDQUFDSSxNQUFNLEVBQUU7TUFDakI3RyxFQUFFLENBQUN5RCxHQUFHLCtDQUE4QmdELFFBQVEsQ0FBQ0ksTUFBTSxDQUFDNUssSUFBSSwyQ0FBYXdLLFFBQVEsQ0FBQ0ksTUFBTSxDQUFDRSxDQUFDLFVBQUtOLFFBQVEsQ0FBQ0ksTUFBTSxDQUFDRyxDQUFDLE9BQUk7SUFDcEg7SUFFQSxPQUFPUCxRQUFRO0VBQ25CLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0lZLDJCQUEyQixXQUFBQSw0QkFBQ2pCLElBQUksRUFBRUosS0FBSyxFQUFFSyxVQUFVLEVBQUU7SUFDakQsSUFBSVUsQ0FBQyxFQUFFQyxDQUFDO0lBQ1IsSUFBSStCLE1BQU0sRUFBRUMsTUFBTTtJQUNsQixJQUFJQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsT0FBTyxFQUFFQyxVQUFVOztJQUU1QztJQUNBLElBQUloRCxJQUFJLEtBQUssTUFBTSxFQUFFO01BQ2pCNkMsUUFBUSxHQUFHLElBQUksQ0FBQ2pJLFlBQVk7TUFDNUJrSSxTQUFTLEdBQUcsSUFBSSxDQUFDakksYUFBYTtNQUM5QmtJLE9BQU8sR0FBRyxJQUFJLENBQUNqSSxXQUFXO01BQzFCa0ksVUFBVSxHQUFHLElBQUksQ0FBQ2pJLGNBQWM7SUFDcEMsQ0FBQyxNQUFNO01BQ0g4SCxRQUFRLEdBQUcsSUFBSSxDQUFDN0gsZUFBZTtNQUMvQjhILFNBQVMsR0FBRyxJQUFJLENBQUM3SCxnQkFBZ0I7TUFDakM4SCxPQUFPLEdBQUcsSUFBSSxDQUFDN0gsY0FBYztNQUM3QjhILFVBQVUsR0FBRyxJQUFJLENBQUM3SCxpQkFBaUI7SUFDdkM7SUFFQXdILE1BQU0sR0FBR0csU0FBUyxHQUFHRCxRQUFRO0lBQzdCRCxNQUFNLEdBQUdHLE9BQU8sR0FBR0MsVUFBVTs7SUFFN0I7SUFDQSxJQUFJTCxNQUFNLElBQUksQ0FBQyxJQUFJQyxNQUFNLElBQUksQ0FBQyxFQUFFO01BQzVCaEosRUFBRSxDQUFDd0csSUFBSSxzQ0FBMEJKLElBQUkseURBQWlCNkMsUUFBUSxnQkFBV0MsU0FBUyxjQUFTQyxPQUFPLGlCQUFZQyxVQUFVLENBQUc7TUFDM0g7TUFDQSxJQUFJaEQsSUFBSSxLQUFLLE1BQU0sRUFBRTtRQUNqQlcsQ0FBQyxHQUFHLENBQUMsR0FBRztRQUNSQyxDQUFDLEdBQUcsQ0FBQztNQUNULENBQUMsTUFBTTtRQUNIRCxDQUFDLEdBQUcsR0FBRztRQUNQQyxDQUFDLEdBQUcsQ0FBQztNQUNUO01BQ0EsT0FBT2hILEVBQUUsQ0FBQ21ILEVBQUUsQ0FBQ0osQ0FBQyxFQUFFQyxDQUFDLENBQUM7SUFDdEI7O0lBRUE7SUFDQSxJQUFNcUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDbEcsbUJBQW1CLENBQUNpRCxJQUFJLENBQUMsSUFBSSxFQUFFO0lBQzlELElBQU1rRCxVQUFVLEdBQUcsSUFBSSxDQUFDN0gsY0FBYyxJQUFJLEdBQUcsQ0FBQyxDQUFFO0lBQ2hELElBQU04SCxXQUFXLEdBQUcsR0FBRyxDQUFDLENBQUU7O0lBRTFCO0lBQ0EsSUFBSUMsUUFBUSxHQUFHLENBQUM7SUFDaEIsSUFBSUMsYUFBYSxHQUFHLEtBQUs7SUFFekIsT0FBTyxDQUFDQSxhQUFhLElBQUlELFFBQVEsR0FBR0QsV0FBVyxFQUFFO01BQzdDO01BQ0F4QyxDQUFDLEdBQUdrQyxRQUFRLEdBQUd4QixJQUFJLENBQUNpQyxNQUFNLEVBQUUsR0FBR1gsTUFBTTtNQUNyQy9CLENBQUMsR0FBR29DLFVBQVUsR0FBRzNCLElBQUksQ0FBQ2lDLE1BQU0sRUFBRSxHQUFHVixNQUFNOztNQUV2QztNQUNBUyxhQUFhLEdBQUcsSUFBSTtNQUNwQixLQUFLLElBQUk5TixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcwTixpQkFBaUIsQ0FBQzNOLE1BQU0sRUFBRUMsQ0FBQyxFQUFFLEVBQUU7UUFDL0MsSUFBTWdPLFdBQVcsR0FBR04saUJBQWlCLENBQUMxTixDQUFDLENBQUM7UUFDeEMsSUFBTWlPLFFBQVEsR0FBR25DLElBQUksQ0FBQ29DLElBQUksQ0FDdEJwQyxJQUFJLENBQUNxQyxHQUFHLENBQUMvQyxDQUFDLEdBQUc0QyxXQUFXLENBQUM1QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUdVLElBQUksQ0FBQ3FDLEdBQUcsQ0FBQzlDLENBQUMsR0FBRzJDLFdBQVcsQ0FBQzNDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDbEU7UUFFRCxJQUFJNEMsUUFBUSxHQUFHTixVQUFVLEVBQUU7VUFDdkJHLGFBQWEsR0FBRyxLQUFLO1VBQ3JCO1FBQ0o7TUFDSjtNQUVBRCxRQUFRLEVBQUU7SUFDZDs7SUFFQTtJQUNBLElBQUksQ0FBQ0MsYUFBYSxFQUFFO01BQ2hCekosRUFBRSxDQUFDd0csSUFBSSxzQ0FBMEJKLElBQUksb0JBQUtKLEtBQUssMEVBQWN3RCxRQUFRLDhFQUFlOztNQUVwRjtNQUNBO01BQ0EsSUFBSU8sUUFBUSxHQUFHLEtBQUs7TUFDcEIsSUFBTUMsV0FBVyxHQUFHLEVBQUU7TUFFdEIsS0FBSyxJQUFJQyxVQUFVLEdBQUcsQ0FBQyxFQUFFQSxVQUFVLEdBQUdELFdBQVcsSUFBSSxDQUFDRCxRQUFRLEVBQUVFLFVBQVUsRUFBRSxFQUFFO1FBQzFFO1FBQ0EsSUFBSVosaUJBQWlCLENBQUMzTixNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQzlCLElBQU13TyxNQUFNLEdBQUdiLGlCQUFpQixDQUFDNUIsSUFBSSxDQUFDMEMsS0FBSyxDQUFDMUMsSUFBSSxDQUFDaUMsTUFBTSxFQUFFLEdBQUdMLGlCQUFpQixDQUFDM04sTUFBTSxDQUFDLENBQUM7O1VBRXRGO1VBQ0EsSUFBTTBPLEtBQUssR0FBRzNDLElBQUksQ0FBQ2lDLE1BQU0sRUFBRSxHQUFHakMsSUFBSSxDQUFDNEMsRUFBRSxHQUFHLENBQUM7VUFDekMsSUFBTUMsY0FBYyxHQUFHaEIsVUFBVSxHQUFHN0IsSUFBSSxDQUFDaUMsTUFBTSxFQUFFLEdBQUdKLFVBQVUsQ0FBQyxDQUFDOztVQUVoRXZDLENBQUMsR0FBR21ELE1BQU0sQ0FBQ25ELENBQUMsR0FBR1UsSUFBSSxDQUFDOEMsR0FBRyxDQUFDSCxLQUFLLENBQUMsR0FBR0UsY0FBYztVQUMvQ3RELENBQUMsR0FBR2tELE1BQU0sQ0FBQ2xELENBQUMsR0FBR1MsSUFBSSxDQUFDK0MsR0FBRyxDQUFDSixLQUFLLENBQUMsR0FBR0UsY0FBYzs7VUFFL0M7VUFDQXZELENBQUMsR0FBR1UsSUFBSSxDQUFDZ0QsR0FBRyxDQUFDeEIsUUFBUSxFQUFFeEIsSUFBSSxDQUFDaUQsR0FBRyxDQUFDeEIsU0FBUyxFQUFFbkMsQ0FBQyxDQUFDLENBQUM7VUFDOUNDLENBQUMsR0FBR1MsSUFBSSxDQUFDZ0QsR0FBRyxDQUFDckIsVUFBVSxFQUFFM0IsSUFBSSxDQUFDaUQsR0FBRyxDQUFDdkIsT0FBTyxFQUFFbkMsQ0FBQyxDQUFDLENBQUM7O1VBRTlDO1VBQ0ErQyxRQUFRLEdBQUcsSUFBSTtVQUNmLEtBQUssSUFBSXBPLEVBQUMsR0FBRyxDQUFDLEVBQUVBLEVBQUMsR0FBRzBOLGlCQUFpQixDQUFDM04sTUFBTSxFQUFFQyxFQUFDLEVBQUUsRUFBRTtZQUMvQyxJQUFNZ08sWUFBVyxHQUFHTixpQkFBaUIsQ0FBQzFOLEVBQUMsQ0FBQztZQUN4QyxJQUFNaU8sU0FBUSxHQUFHbkMsSUFBSSxDQUFDb0MsSUFBSSxDQUN0QnBDLElBQUksQ0FBQ3FDLEdBQUcsQ0FBQy9DLENBQUMsR0FBRzRDLFlBQVcsQ0FBQzVDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBR1UsSUFBSSxDQUFDcUMsR0FBRyxDQUFDOUMsQ0FBQyxHQUFHMkMsWUFBVyxDQUFDM0MsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNsRTtZQUVELElBQUk0QyxTQUFRLEdBQUdOLFVBQVUsRUFBRTtjQUN2QlMsUUFBUSxHQUFHLEtBQUs7Y0FDaEI7WUFDSjtVQUNKO1FBQ0o7TUFDSjs7TUFFQTtNQUNBLElBQUksQ0FBQ0EsUUFBUSxFQUFFO1FBQ1gsSUFBTVksUUFBUSxHQUFHbEQsSUFBSSxDQUFDbUQsSUFBSSxDQUFDbkQsSUFBSSxDQUFDb0MsSUFBSSxDQUFDeEQsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFFO1FBQ3BELElBQU13RSxRQUFRLEdBQUdwRCxJQUFJLENBQUNtRCxJQUFJLENBQUN2RSxVQUFVLEdBQUdzRSxRQUFRLENBQUMsQ0FBQyxDQUFFOztRQUVwRCxJQUFNRyxLQUFLLEdBQUc5RSxLQUFLLEdBQUcyRSxRQUFRO1FBQzlCLElBQU1JLEtBQUssR0FBR3RELElBQUksQ0FBQzBDLEtBQUssQ0FBQ25FLEtBQUssR0FBRzJFLFFBQVEsQ0FBQzs7UUFFMUM7UUFDQSxJQUFNSyxZQUFZLEdBQUd2RCxJQUFJLENBQUNpRCxHQUFHLENBQUMzQixNQUFNLElBQUk0QixRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUVyQixVQUFVLENBQUM7UUFDbEUsSUFBTTJCLFlBQVksR0FBR3hELElBQUksQ0FBQ2lELEdBQUcsQ0FBQzFCLE1BQU0sSUFBSTZCLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBRXZCLFVBQVUsQ0FBQzs7UUFFbEU7UUFDQSxJQUFNNEIsY0FBYyxHQUFHLENBQUNQLFFBQVEsR0FBRyxDQUFDLElBQUlLLFlBQVk7UUFDcEQsSUFBTUcsZUFBZSxHQUFHLENBQUNOLFFBQVEsR0FBRyxDQUFDLElBQUlJLFlBQVk7UUFDckQsSUFBTUcsTUFBTSxHQUFHbkMsUUFBUSxHQUFHLENBQUNGLE1BQU0sR0FBR21DLGNBQWMsSUFBSSxDQUFDO1FBQ3ZELElBQU1HLE1BQU0sR0FBR2pDLFVBQVUsR0FBRyxDQUFDSixNQUFNLEdBQUdtQyxlQUFlLElBQUksQ0FBQztRQUUxRHBFLENBQUMsR0FBR3FFLE1BQU0sR0FBR04sS0FBSyxHQUFHRSxZQUFZO1FBQ2pDaEUsQ0FBQyxHQUFHcUUsTUFBTSxHQUFHTixLQUFLLEdBQUdFLFlBQVk7UUFFakNqTCxFQUFFLENBQUN5RCxHQUFHLHlCQUF1QjJDLElBQUksb0JBQUtKLEtBQUssK0ZBQW9COEUsS0FBSyxVQUFLQyxLQUFLLDBCQUFXaEUsQ0FBQyxDQUFDSyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQUtKLENBQUMsQ0FBQ0ksT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFJO01BQzlILENBQUMsTUFBTTtRQUNIcEgsRUFBRSxDQUFDeUQsR0FBRyx5QkFBdUIyQyxJQUFJLG9CQUFLSixLQUFLLDZEQUFnQmUsQ0FBQyxDQUFDSyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQUtKLENBQUMsQ0FBQ0ksT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFJO01BQ2hHO0lBQ0osQ0FBQyxNQUFNO01BQ0hwSCxFQUFFLENBQUN5RCxHQUFHLHlCQUF1QjJDLElBQUksK0NBQVk2QyxRQUFRLFVBQUtDLFNBQVMsV0FBTUUsVUFBVSxVQUFLRCxPQUFPLDBCQUFXcEMsQ0FBQyxDQUFDSyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQUtKLENBQUMsQ0FBQ0ksT0FBTyxDQUFDLENBQUMsQ0FBQyxxQ0FBWW9DLFFBQVEsQ0FBRztJQUNsSzs7SUFFQTtJQUNBLElBQU04QixXQUFXLEdBQUd0TCxFQUFFLENBQUNtSCxFQUFFLENBQUNKLENBQUMsRUFBRUMsQ0FBQyxDQUFDO0lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUM3RCxtQkFBbUIsQ0FBQ2lELElBQUksQ0FBQyxFQUFFO01BQ2pDLElBQUksQ0FBQ2pELG1CQUFtQixDQUFDaUQsSUFBSSxDQUFDLEdBQUcsRUFBRTtJQUN2QztJQUNBLElBQUksQ0FBQ2pELG1CQUFtQixDQUFDaUQsSUFBSSxDQUFDLENBQUNqTCxJQUFJLENBQUNtUSxXQUFXLENBQUM7SUFFaEQsT0FBT0EsV0FBVztFQUN0QixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSTdGLG1CQUFtQixXQUFBQSxvQkFBQSxFQUFHO0lBQ2xCO0lBQ0EsSUFBSSxJQUFJLENBQUNoRixVQUFVLEVBQUU7TUFDakIsSUFBSSxDQUFDd0MsS0FBSyxHQUFHLElBQUksQ0FBQ3hDLFVBQVUsQ0FBQytILFFBQVEsQ0FBQytDLE1BQU0sQ0FBQyxVQUFBNUMsS0FBSztRQUFBLE9BQUlBLEtBQUssQ0FBQ2hDLE1BQU07TUFBQSxFQUFDO01BQ25FM0csRUFBRSxDQUFDeUQsR0FBRyw4REFBd0MsSUFBSSxDQUFDUixLQUFLLENBQUN2SCxNQUFNLHlCQUFPO0lBQzFFOztJQUVBO0lBQ0EsSUFBSSxJQUFJLENBQUNnRixhQUFhLEVBQUU7TUFDcEIsSUFBSSxDQUFDd0MsUUFBUSxHQUFHLElBQUksQ0FBQ3hDLGFBQWEsQ0FBQzhILFFBQVEsQ0FBQytDLE1BQU0sQ0FBQyxVQUFBNUMsS0FBSztRQUFBLE9BQUlBLEtBQUssQ0FBQ2hDLE1BQU07TUFBQSxFQUFDO01BQ3pFM0csRUFBRSxDQUFDeUQsR0FBRyxpRUFBMkMsSUFBSSxDQUFDUCxRQUFRLENBQUN4SCxNQUFNLHlCQUFPO0lBQ2hGO0VBQ0osQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0lnSyxrQkFBa0IsV0FBQUEsbUJBQUEsRUFBRztJQUNqQjtJQUNBLElBQUksQ0FBQ3pDLEtBQUssR0FBRyxJQUFJLENBQUM1QyxTQUFTLENBQUNrTCxNQUFNLENBQUMsVUFBQUMsSUFBSTtNQUFBLE9BQUlBLElBQUksSUFBSUEsSUFBSSxDQUFDQyxPQUFPLElBQUlELElBQUksQ0FBQzdFLE1BQU07SUFBQSxFQUFDO0lBQy9FM0csRUFBRSxDQUFDeUQsR0FBRyw2REFBdUMsSUFBSSxDQUFDUixLQUFLLENBQUN2SCxNQUFNLHlCQUFPOztJQUVyRTtJQUNBLElBQUksQ0FBQ3dILFFBQVEsR0FBRyxJQUFJLENBQUMxQyxZQUFZLENBQUMrSyxNQUFNLENBQUMsVUFBQUMsSUFBSTtNQUFBLE9BQUlBLElBQUksSUFBSUEsSUFBSSxDQUFDQyxPQUFPLElBQUlELElBQUksQ0FBQzdFLE1BQU07SUFBQSxFQUFDO0lBQ3JGM0csRUFBRSxDQUFDeUQsR0FBRyxnRUFBMEMsSUFBSSxDQUFDUCxRQUFRLENBQUN4SCxNQUFNLHlCQUFPO0VBQy9FLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNVaUssYUFBYSxXQUFBQSxjQUFBLEVBQUc7SUFBQSxJQUFBK0YsTUFBQTtJQUFBLE9BQUFwTSxpQkFBQSxlQUFBakssbUJBQUEsR0FBQTZHLElBQUEsVUFBQXlQLFFBQUE7TUFBQSxJQUFBN0ksV0FBQSxFQUFBOEksY0FBQSxFQUFBQyxTQUFBLEVBQUFDLEtBQUEsRUFBQU4sSUFBQSxFQUFBTyxJQUFBLEVBQUEvRCxRQUFBLEVBQUFnRSxVQUFBLEVBQUFDLE1BQUEsRUFBQUMsS0FBQSxFQUFBQyxLQUFBLEVBQUFDLFNBQUE7TUFBQSxPQUFBL1csbUJBQUEsR0FBQXlCLElBQUEsVUFBQXVWLFNBQUFDLFFBQUE7UUFBQSxrQkFBQUEsUUFBQSxDQUFBdlAsSUFBQSxHQUFBdVAsUUFBQSxDQUFBN1IsSUFBQTtVQUFBO1lBQ1ZxSSxXQUFXLEdBQUs0SSxNQUFJLENBQXBCNUksV0FBVyxFQUVuQjtZQUNNOEksY0FBYyxHQUFHO2NBQ25CLElBQUksRUFBRTtnQkFDRlcsRUFBRSxFQUFFLEdBQUc7Z0JBQ1BDLE1BQU0sRUFBRSxDQUFDO2dCQUNUQyxPQUFPLEVBQUUsRUFBRTtnQkFDWEMsS0FBSyxFQUFFLEVBQUU7Z0JBQ1RDLElBQUksRUFBRSxJQUFJO2dCQUNWNUUsTUFBTSxFQUFFLENBQ0pqRixXQUFXLENBQUM4SixZQUFZLEVBQ3hCOUosV0FBVyxDQUFDK0osU0FBUyxFQUNyQi9KLFdBQVcsQ0FBQ2dLLFlBQVk7Y0FFaEMsQ0FBQztjQUNELElBQUksRUFBRTtnQkFDRlAsRUFBRSxFQUFFLEVBQUU7Z0JBQ05DLE1BQU0sRUFBRSxFQUFFO2dCQUNWQyxPQUFPLEVBQUUsQ0FBQztnQkFDVkMsS0FBSyxFQUFFLENBQUM7Z0JBQ1JDLElBQUksRUFBRSxHQUFHO2dCQUNUSSxJQUFJLEVBQUUsR0FBRztnQkFDVGhGLE1BQU0sRUFBRSxDQUNKakYsV0FBVyxDQUFDOEosWUFBWSxFQUN4QjlKLFdBQVcsQ0FBQ2tLLFFBQVE7Y0FFNUIsQ0FBQztjQUNELElBQUksRUFBRTtnQkFDRlQsRUFBRSxFQUFFLEVBQUU7Z0JBQ05DLE1BQU0sRUFBRSxFQUFFO2dCQUNWQyxPQUFPLEVBQUUsQ0FBQztnQkFDVkMsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QzRSxNQUFNLEVBQUUsQ0FDSmpGLFdBQVcsQ0FBQzhKLFlBQVksRUFDeEI5SixXQUFXLENBQUNtSyxTQUFTO2NBRTdCLENBQUM7Y0FDRCxNQUFNLEVBQUU7Z0JBQ0pWLEVBQUUsRUFBRSxHQUFHO2dCQUNQQyxNQUFNLEVBQUUsRUFBRTtnQkFDVkMsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZDLEtBQUssRUFBRSxFQUFFO2dCQUNUM0UsTUFBTSxFQUFFLENBQ0pqRixXQUFXLENBQUM4SixZQUFZLEVBQ3hCOUosV0FBVyxDQUFDb0ssTUFBTTtjQUUxQjtZQUNKLENBQUMsRUFFRDtZQUFBckIsU0FBQSxHQUFBNU4sK0JBQUEsQ0FDaUJ5TixNQUFJLENBQUN6SSxLQUFLO1VBQUE7WUFBQSxLQUFBNkksS0FBQSxHQUFBRCxTQUFBLElBQUExUixJQUFBO2NBQUFtUyxRQUFBLENBQUE3UixJQUFBO2NBQUE7WUFBQTtZQUFsQitRLElBQUksR0FBQU0sS0FBQSxDQUFBOVYsS0FBQTtZQUNUO1lBQ0krVixJQUFJO1lBQ1IsSUFBSVAsSUFBSSxDQUFDN0QsU0FBUyxFQUFFO2NBQ2hCb0UsSUFBSSxHQUFHUCxJQUFJLENBQUM3RCxTQUFTO2NBQ3JCM0gsRUFBRSxDQUFDeUQsR0FBRywrR0FBdUMrSCxJQUFJLENBQUN2UCxJQUFJLENBQUc7WUFDN0QsQ0FBQyxNQUFNO2NBQ0g4UCxJQUFJLEdBQUdILGNBQWMsQ0FBQ0osSUFBSSxDQUFDdlAsSUFBSSxDQUFDLElBQUl5UCxNQUFJLENBQUN5QixlQUFlLEVBQUU7WUFDOUQ7WUFBQ2IsUUFBQSxDQUFBN1IsSUFBQTtZQUFBLE9BQ0tpUixNQUFJLENBQUMwQixVQUFVLENBQUM1QixJQUFJLEVBQUVPLElBQUksRUFBRSxNQUFNLENBQUM7VUFBQTtZQUV6QztZQUNNL0QsUUFBUSxHQUFHd0QsSUFBSSxDQUFDekcsWUFBWSxDQUFDa0QsRUFBRSxDQUFDQyxRQUFRLENBQUM7WUFDL0MsSUFBSUYsUUFBUSxFQUFFO2NBQ1ZBLFFBQVEsQ0FBQ3FGLFlBQVksQ0FBQyxDQUFDLEVBQUUzTixjQUFjLENBQUNLLElBQUksRUFBRSxJQUFJLENBQUM7WUFDdkQ7WUFFQUMsRUFBRSxDQUFDeUQsR0FBRyx5REFBOEIrSCxJQUFJLENBQUN2UCxJQUFJLENBQUc7VUFBQztZQUFBcVEsUUFBQSxDQUFBN1IsSUFBQTtZQUFBO1VBQUE7WUFBQXVSLFVBQUEsR0FBQS9OLCtCQUFBLENBSXBDeU4sTUFBSSxDQUFDeEksUUFBUTtVQUFBO1lBQUEsS0FBQStJLE1BQUEsR0FBQUQsVUFBQSxJQUFBN1IsSUFBQTtjQUFBbVMsUUFBQSxDQUFBN1IsSUFBQTtjQUFBO1lBQUE7WUFBckIrUSxLQUFJLEdBQUFTLE1BQUEsQ0FBQWpXLEtBQUE7WUFDVDtZQUNJK1YsS0FBSTtZQUNSLElBQUlQLEtBQUksQ0FBQzdELFNBQVMsRUFBRTtjQUNoQm9FLEtBQUksR0FBR1AsS0FBSSxDQUFDN0QsU0FBUztjQUNyQjNILEVBQUUsQ0FBQ3lELEdBQUcsK0dBQXVDK0gsS0FBSSxDQUFDdlAsSUFBSSxDQUFHO1lBQzdELENBQUMsTUFBTTtjQUNIOFAsS0FBSSxHQUFHSCxjQUFjLENBQUNKLEtBQUksQ0FBQ3ZQLElBQUksQ0FBQyxJQUFJeVAsTUFBSSxDQUFDeUIsZUFBZSxFQUFFO1lBQzlEO1lBQUNiLFFBQUEsQ0FBQTdSLElBQUE7WUFBQSxPQUNLaVIsTUFBSSxDQUFDMEIsVUFBVSxDQUFDNUIsS0FBSSxFQUFFTyxLQUFJLEVBQUUsU0FBUyxDQUFDO1VBQUE7WUFFNUM7WUFDTS9ELFNBQVEsR0FBR3dELEtBQUksQ0FBQ3pHLFlBQVksQ0FBQ2tELEVBQUUsQ0FBQ0MsUUFBUSxDQUFDO1lBQy9DLElBQUlGLFNBQVEsRUFBRTtjQUNWQSxTQUFRLENBQUNxRixZQUFZLENBQUMsQ0FBQyxFQUFFM04sY0FBYyxDQUFDSyxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQ3ZEO1lBRUFDLEVBQUUsQ0FBQ3lELEdBQUcseURBQThCK0gsS0FBSSxDQUFDdlAsSUFBSSxDQUFHO1VBQUM7WUFBQXFRLFFBQUEsQ0FBQTdSLElBQUE7WUFBQTtVQUFBO1VBQUE7WUFBQSxPQUFBNlIsUUFBQSxDQUFBcFAsSUFBQTtRQUFBO01BQUEsR0FBQXlPLE9BQUE7SUFBQTtFQUV6RCxDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSXdCLGVBQWUsV0FBQUEsZ0JBQUEsRUFBRztJQUNkLE9BQU87TUFDSFosRUFBRSxFQUFFLEdBQUc7TUFDUEMsTUFBTSxFQUFFLEVBQUU7TUFDVkMsT0FBTyxFQUFFLENBQUM7TUFDVkMsS0FBSyxFQUFFLEVBQUU7TUFDVEMsSUFBSSxFQUFFLEdBQUc7TUFDVDVFLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQ2pGLFdBQVcsQ0FBQzhKLFlBQVk7SUFDMUMsQ0FBQztFQUNMLENBQUM7RUFFS1EsVUFBVSxXQUFBQSxXQUFDNUIsSUFBSSxFQUFFTyxJQUFJLEVBQUV1QixRQUFRLEVBQUU7SUFBQSxJQUFBQyxNQUFBO0lBQUEsT0FBQWpPLGlCQUFBLGVBQUFqSyxtQkFBQSxHQUFBNkcsSUFBQSxVQUFBc1IsU0FBQTtNQUFBLElBQUEzRixLQUFBLEVBQUF6QixJQUFBLEVBQUEyQixNQUFBLEVBQUEwRixvQkFBQSxFQUFBQyxTQUFBLEVBQUFDLFdBQUEsRUFBQUMsWUFBQSxFQUFBQyxVQUFBLEVBQUFDLGFBQUEsRUFBQUMsT0FBQSxFQUFBQyxZQUFBLEVBQUFDLGdCQUFBLEVBQUFDLGNBQUEsRUFBQUMsV0FBQSxFQUFBQyxTQUFBLEVBQUF0TCxXQUFBO01BQUEsT0FBQXpOLG1CQUFBLEdBQUF5QixJQUFBLFVBQUF1WCxVQUFBQyxTQUFBO1FBQUEsa0JBQUFBLFNBQUEsQ0FBQXZSLElBQUEsR0FBQXVSLFNBQUEsQ0FBQTdULElBQUE7VUFBQTtZQUM3Qm9OLEtBQUssR0FBRzJELElBQUksQ0FBQ3pHLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztZQUMzQ3FCLElBQUksR0FBR29GLElBQUksQ0FBQ3pHLFlBQVksQ0FBQyxlQUFlLENBQUM7WUFDekNnRCxNQUFNLEdBQUd5RCxJQUFJLENBQUN6RyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsRUFFbEQ7WUFBQSxJQUNLOEMsS0FBSztjQUFBeUcsU0FBQSxDQUFBN1QsSUFBQTtjQUFBO1lBQUE7WUFDTnVGLEVBQUUsQ0FBQzFHLEtBQUssK0NBQTZCa1MsSUFBSSxDQUFDdlAsSUFBSSxrREFBMEI7WUFDeEUrRCxFQUFFLENBQUMxRyxLQUFLLDZFQUFnQztZQUFDLE9BQUFnVixTQUFBLENBQUFwVSxNQUFBO1VBQUE7WUFBQSxJQUd4Q2tNLElBQUk7Y0FBQWtJLFNBQUEsQ0FBQTdULElBQUE7Y0FBQTtZQUFBO1lBQ0x1RixFQUFFLENBQUMxRyxLQUFLLCtDQUE2QmtTLElBQUksQ0FBQ3ZQLElBQUksaURBQXlCO1lBQ3ZFK0QsRUFBRSxDQUFDMUcsS0FBSyw0RUFBK0I7WUFBQyxPQUFBZ1YsU0FBQSxDQUFBcFUsTUFBQTtVQUFBO1lBQUEsSUFHdkM2TixNQUFNO2NBQUF1RyxTQUFBLENBQUE3VCxJQUFBO2NBQUE7WUFBQTtZQUNQdUYsRUFBRSxDQUFDMUcsS0FBSywrQ0FBNkJrUyxJQUFJLENBQUN2UCxJQUFJLGtEQUEwQjtZQUN4RStELEVBQUUsQ0FBQzFHLEtBQUssNkVBQWdDO1lBQUMsT0FBQWdWLFNBQUEsQ0FBQXBVLE1BQUE7VUFBQTtZQUk3QztZQUNNdVQsb0JBQW9CLEdBQUcvSyxPQUFPLENBQUMsc0JBQXNCLENBQUM7WUFBQTRMLFNBQUEsQ0FBQTdULElBQUE7WUFBQSxPQUNwQ2dULG9CQUFvQixDQUFDYyxrQkFBa0IsQ0FBQ3hDLElBQUksQ0FBQzlQLElBQUksSUFBSXVQLElBQUksQ0FBQ3ZQLElBQUksQ0FBQztVQUFBO1lBQWpGeVIsU0FBUyxHQUFBWSxTQUFBLENBQUF2VSxJQUFBO1lBRWY7WUFDQSxJQUFJMlQsU0FBUyxFQUFFO2NBQ1gsSUFBSUEsU0FBUyxDQUFDYyxNQUFNLEVBQUUzRyxLQUFLLENBQUMyRyxNQUFNLEdBQUdkLFNBQVMsQ0FBQ2MsTUFBTTtjQUNyRCxJQUFJZCxTQUFTLENBQUNlLFVBQVUsRUFBRTVHLEtBQUssQ0FBQzRHLFVBQVUsR0FBR2YsU0FBUyxDQUFDZSxVQUFVO2NBQ2pFLElBQUlmLFNBQVMsQ0FBQ2dCLFdBQVcsRUFBRTdHLEtBQUssQ0FBQzZHLFdBQVcsR0FBR2hCLFNBQVMsQ0FBQ2dCLFdBQVc7Y0FDcEUsSUFBSWhCLFNBQVMsQ0FBQ2lCLFNBQVMsRUFBRTlHLEtBQUssQ0FBQzhHLFNBQVMsR0FBR2pCLFNBQVMsQ0FBQ2lCLFNBQVM7Y0FDOUQsSUFBSWpCLFNBQVMsQ0FBQ2tCLFFBQVEsS0FBS3ZVLFNBQVMsRUFBRXdOLEtBQUssQ0FBQytHLFFBQVEsR0FBR2xCLFNBQVMsQ0FBQ2tCLFFBQVE7Y0FDekUsSUFBSWxCLFNBQVMsQ0FBQ21CLFFBQVEsS0FBS3hVLFNBQVMsRUFBRXdOLEtBQUssQ0FBQ2dILFFBQVEsR0FBR25CLFNBQVMsQ0FBQ21CLFFBQVE7WUFDN0UsQ0FBQyxNQUFNO2NBQ0g7Y0FDQSxJQUFJOUMsSUFBSSxDQUFDUSxFQUFFLEVBQUUxRSxLQUFLLENBQUMyRyxNQUFNLEdBQUd6QyxJQUFJLENBQUNRLEVBQUU7Y0FDbkMsSUFBSVIsSUFBSSxDQUFDUyxNQUFNLEVBQUUzRSxLQUFLLENBQUM0RyxVQUFVLEdBQUcxQyxJQUFJLENBQUNTLE1BQU07Y0FDL0MsSUFBSVQsSUFBSSxDQUFDVSxPQUFPLEVBQUU1RSxLQUFLLENBQUM2RyxXQUFXLEdBQUczQyxJQUFJLENBQUNVLE9BQU87Y0FDbEQsSUFBSVYsSUFBSSxDQUFDVyxLQUFLLEVBQUU3RSxLQUFLLENBQUM4RyxTQUFTLEdBQUc1QyxJQUFJLENBQUNXLEtBQUs7Y0FDNUMsSUFBSVgsSUFBSSxDQUFDWSxJQUFJLEtBQUt0UyxTQUFTLEVBQUV3TixLQUFLLENBQUMrRyxRQUFRLEdBQUc3QyxJQUFJLENBQUNZLElBQUk7Y0FDdkQsSUFBSVosSUFBSSxDQUFDZ0IsSUFBSSxLQUFLMVMsU0FBUyxFQUFFd04sS0FBSyxDQUFDZ0gsUUFBUSxHQUFHOUMsSUFBSSxDQUFDZ0IsSUFBSTtZQUMzRDs7WUFFQTtZQUNBbEYsS0FBSyxDQUFDaUgsT0FBTyxHQUFHLEdBQUc7WUFDbkJqSCxLQUFLLENBQUNrSCxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1lBRWhCO1lBQ0E7WUFDTXBCLFdBQVcsR0FBR2pMLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFFMUM7WUFDTWtMLFlBQVksR0FBR0YsU0FBUyxHQUFJQSxTQUFTLENBQUNzQixLQUFLLElBQUlqRCxJQUFJLENBQUNpRCxLQUFLLElBQUksQ0FBQyxHQUFLakQsSUFBSSxDQUFDaUQsS0FBSyxJQUFJLENBQUU7WUFDbkZuQixVQUFVLEdBQUdILFNBQVMsR0FBSUEsU0FBUyxDQUFDdUIsR0FBRyxJQUFJbEQsSUFBSSxDQUFDa0QsR0FBRyxJQUFJLENBQUMsR0FBS2xELElBQUksQ0FBQ2tELEdBQUcsSUFBSSxDQUFFLEVBRWpGO1lBQ0E7WUFDQXRCLFdBQVcsQ0FBQ3VCLFNBQVMsQ0FBQzFELElBQUksRUFBRW9DLFlBQVksRUFBRUMsVUFBVSxFQUFFLEtBQUssQ0FBQzs7WUFFNUQ7WUFBQVMsU0FBQSxDQUFBdlIsSUFBQTtZQUVVK1EsYUFBYSxHQUFHL0IsSUFBSSxDQUFDOVAsSUFBSSxJQUFJdVAsSUFBSSxDQUFDMkQsc0JBQXNCLElBQUkzRCxJQUFJLENBQUN2UCxJQUFJO1lBQUEsTUFDdkU2UixhQUFhLElBQUlqRyxLQUFLLENBQUN1SCxxQkFBcUI7Y0FBQWQsU0FBQSxDQUFBN1QsSUFBQTtjQUFBO1lBQUE7WUFBQTZULFNBQUEsQ0FBQTdULElBQUE7WUFBQSxPQUN0QjhTLE1BQUksQ0FBQzhCLG9CQUFvQixDQUFDdkIsYUFBYSxDQUFDO1VBQUE7WUFBeERDLE9BQU8sR0FBQU8sU0FBQSxDQUFBdlUsSUFBQTtZQUNiOE4sS0FBSyxDQUFDdUgscUJBQXFCLENBQUNyQixPQUFPLENBQUM7WUFDcEMvTixFQUFFLENBQUN5RCxHQUFHLHNDQUEwQnFLLGFBQWEsNkNBQVlDLE9BQU8sQ0FBQztVQUFDO1lBQUFPLFNBQUEsQ0FBQTdULElBQUE7WUFBQTtVQUFBO1lBQUE2VCxTQUFBLENBQUF2UixJQUFBO1lBQUF1UixTQUFBLENBQUFnQixFQUFBLEdBQUFoQixTQUFBO1lBR3RFdE8sRUFBRSxDQUFDd0csSUFBSSxpRkFBa0M4SCxTQUFBLENBQUFnQixFQUFBLENBQUUxSixPQUFPLENBQUc7VUFBQztZQUcxRDtZQUNBaUMsS0FBSyxDQUFDMEUsRUFBRSxHQUFHMUUsS0FBSyxDQUFDMEgsS0FBSzs7WUFFdEI7WUFDQSxJQUFJMUgsS0FBSyxDQUFDMkgsTUFBTSxLQUFLLENBQUMsSUFBSXpELElBQUksQ0FBQ3lELE1BQU0sS0FBS25WLFNBQVMsRUFBRTtjQUNqRHdOLEtBQUssQ0FBQzJILE1BQU0sR0FBR3pELElBQUksQ0FBQ3lELE1BQU07WUFDOUI7O1lBRUE7WUFDQSxJQUFJekQsSUFBSSxDQUFDOVAsSUFBSSxFQUFFO2NBQ1h1UCxJQUFJLENBQUMyRCxzQkFBc0IsR0FBR3BELElBQUksQ0FBQzlQLElBQUk7WUFDM0M7O1lBRUE7WUFDSStSLFlBQVksR0FBR2pDLElBQUksQ0FBQ2hFLE1BQU0sSUFBSSxFQUFFLEVBRXBDO1lBQUF1RyxTQUFBLENBQUF2UixJQUFBO1lBRVVrUixnQkFBZ0IsR0FBR3ZMLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUM5Q29MLGNBQWEsR0FBRy9CLElBQUksQ0FBQzlQLElBQUksSUFBSXVQLElBQUksQ0FBQ3ZQLElBQUk7WUFBQXFTLFNBQUEsQ0FBQTdULElBQUE7WUFBQSxPQUNsQndULGdCQUFnQixDQUFDd0IsbUJBQW1CLENBQUMzQixjQUFhLENBQUM7VUFBQTtZQUF2RUssV0FBVyxHQUFBRyxTQUFBLENBQUF2VSxJQUFBO1lBRWpCLElBQUlvVSxXQUFXLElBQUlBLFdBQVcsQ0FBQ3pTLE1BQU0sR0FBRyxDQUFDLEVBQUU7Y0FDdkM7Y0FBQTBTLFNBQUEsR0FDd0IxTCxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQXRDSSxXQUFXLEdBQUFzTCxTQUFBLENBQVh0TCxXQUFXO2NBQ25Ca0wsWUFBWSxHQUFHRyxXQUFXLENBQUN1QixHQUFHLENBQUMsVUFBQUMsU0FBUyxFQUFJO2dCQUN4QztnQkFDQSxJQUFNQyxPQUFPLEdBQUdELFNBQVMsQ0FBQ0UsRUFBRTtnQkFDNUIsSUFBSUMsV0FBVyxHQUFHLElBQUk7O2dCQUV0QjtnQkFDQXRhLE1BQU0sQ0FBQ2lILElBQUksQ0FBQ3FHLFdBQVcsQ0FBQyxDQUFDckssT0FBTyxDQUFDLFVBQUEzQyxHQUFHLEVBQUk7a0JBQ3BDLElBQUlnTixXQUFXLENBQUNoTixHQUFHLENBQUMsQ0FBQytaLEVBQUUsS0FBS0QsT0FBTyxFQUFFO29CQUNqQ0UsV0FBVyxHQUFHaE4sV0FBVyxDQUFDaE4sR0FBRyxDQUFDO2tCQUNsQztnQkFDSixDQUFDLENBQUM7Z0JBRUYsSUFBSWdhLFdBQVcsRUFBRTtrQkFDYixPQUFBQyxRQUFBLEtBQ09ELFdBQVc7b0JBQ2RFLFdBQVcsRUFBRUwsU0FBUyxDQUFDSyxXQUFXLElBQUlGLFdBQVcsQ0FBQ0UsV0FBVyxJQUFJO2tCQUFDO2dCQUUxRSxDQUFDLE1BQU07a0JBQ0hoUSxFQUFFLENBQUN3RyxJQUFJLHdFQUFtQ29KLE9BQU8sQ0FBRztrQkFDcEQsT0FBTyxJQUFJO2dCQUNmO2NBQ0osQ0FBQyxDQUFDLENBQUNyRSxNQUFNLENBQUMsVUFBQTBFLEtBQUs7Z0JBQUEsT0FBSUEsS0FBSyxLQUFLLElBQUk7Y0FBQSxFQUFDLENBQUMsQ0FBQzs7Y0FFcENqUSxFQUFFLENBQUN5RCxHQUFHLGtGQUFtQ3FLLGNBQWEsdUJBQVFFLFlBQVksQ0FBQ3RTLE1BQU0sQ0FBRztZQUN4RjtZQUFDNFMsU0FBQSxDQUFBN1QsSUFBQTtZQUFBO1VBQUE7WUFBQTZULFNBQUEsQ0FBQXZSLElBQUE7WUFBQXVSLFNBQUEsQ0FBQTRCLEVBQUEsR0FBQTVCLFNBQUE7WUFFRHRPLEVBQUUsQ0FBQ3dHLElBQUkscUhBQXdDOEgsU0FBQSxDQUFBNEIsRUFBQSxDQUFNdEssT0FBTyxDQUFHO1VBQUM7WUFHcEU7WUFDQSxJQUFJb0ksWUFBWSxJQUFJQSxZQUFZLENBQUN0UyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2NBQ3pDcU0sTUFBTSxDQUFDb0ksSUFBSSxDQUFDbkMsWUFBWSxDQUFDO1lBQzdCOztZQUVBO1lBQ0E1SCxJQUFJLENBQUNBLElBQUksR0FBR2tILFFBQVE7O1lBRXBCO1lBQ0EsSUFBSXpGLEtBQUssQ0FBQ3VJLGVBQWUsRUFBRTtjQUN2QnZJLEtBQUssQ0FBQ3VJLGVBQWUsRUFBRTtZQUMzQjtZQUVBcFEsRUFBRSxDQUFDeUQsR0FBRyxnQ0FBeUIrSCxJQUFJLENBQUN2UCxJQUFJLHlDQUFXcVIsUUFBUSxlQUFVekYsS0FBSyxDQUFDbUgsS0FBSyxhQUFRbkgsS0FBSyxDQUFDMEUsRUFBRSxjQUFTMUUsS0FBSyxDQUFDMkUsTUFBTSxjQUFTM0UsS0FBSyxDQUFDNEUsT0FBTyxjQUFTNUUsS0FBSyxDQUFDNkUsS0FBSyxDQUFHO1VBQUM7VUFBQTtZQUFBLE9BQUE0QixTQUFBLENBQUFwUixJQUFBO1FBQUE7TUFBQSxHQUFBc1EsUUFBQTtJQUFBO0VBQ3ZLLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDVTZCLG9CQUFvQixXQUFBQSxxQkFBQ3ZCLGFBQWEsRUFBRTtJQUFBLE9BQUF4TyxpQkFBQSxlQUFBakssbUJBQUEsR0FBQTZHLElBQUEsVUFBQW1VLFNBQUE7TUFBQSxJQUFBdEMsT0FBQSxFQUFBdUMsb0JBQUEsRUFBQUMsVUFBQSxFQUFBQyxxQkFBQSxFQUFBQyxLQUFBLEVBQUFDLFVBQUEsRUFBQUMsTUFBQSxFQUFBQyxNQUFBLEVBQUFDLEdBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBO01BQUEsT0FBQTFiLG1CQUFBLEdBQUF5QixJQUFBLFVBQUFrYSxVQUFBQyxTQUFBO1FBQUEsa0JBQUFBLFNBQUEsQ0FBQWxVLElBQUEsR0FBQWtVLFNBQUEsQ0FBQXhXLElBQUE7VUFBQTtZQUNoQ3NULE9BQU8sR0FBRztjQUFFdkIsTUFBTSxFQUFFLENBQUM7Y0FBRUMsT0FBTyxFQUFFLENBQUM7Y0FBRUMsS0FBSyxFQUFFO1lBQUUsQ0FBQztZQUFBLElBQzlDb0IsYUFBYTtjQUFBbUQsU0FBQSxDQUFBeFcsSUFBQTtjQUFBO1lBQUE7WUFBQSxPQUFBd1csU0FBQSxDQUFBL1csTUFBQSxXQUNQNlQsT0FBTztVQUFBO1lBQUFrRCxTQUFBLENBQUFsVSxJQUFBO1lBSVJ1VCxvQkFBb0IsR0FBRzVOLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUN0RDZOLFVBQVUsR0FBRzdOLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFBQXVPLFNBQUEsQ0FBQXhXLElBQUE7WUFBQSxPQUNoQjZWLG9CQUFvQixDQUFDWSxZQUFZLENBQUNwRCxhQUFhLENBQUM7VUFBQTtZQUFBMEMscUJBQUEsR0FBQVMsU0FBQSxDQUFBbFgsSUFBQTtZQUFoRTBXLEtBQUssR0FBQUQscUJBQUEsQ0FBTEMsS0FBSztZQUFBLE1BQ1QsQ0FBQ0EsS0FBSyxJQUFJLENBQUNuUyxLQUFLLENBQUNDLE9BQU8sQ0FBQ2tTLEtBQUssQ0FBQztjQUFBUSxTQUFBLENBQUF4VyxJQUFBO2NBQUE7WUFBQTtZQUFBLE9BQUF3VyxTQUFBLENBQUEvVyxNQUFBLFdBQ3hCNlQsT0FBTztVQUFBO1lBQUEyQyxVQUFBLEdBQUF6UywrQkFBQSxDQUdHd1MsS0FBSztVQUFBO1lBQUEsS0FBQUUsTUFBQSxHQUFBRCxVQUFBLElBQUF2VyxJQUFBO2NBQUE4VyxTQUFBLENBQUF4VyxJQUFBO2NBQUE7WUFBQTtZQUFmbVcsTUFBTSxHQUFBRCxNQUFBLENBQUEzYSxLQUFBO1lBQUEsSUFDUjRhLE1BQU07Y0FBQUssU0FBQSxDQUFBeFcsSUFBQTtjQUFBO1lBQUE7WUFBQSxPQUFBd1csU0FBQSxDQUFBL1csTUFBQTtVQUFBO1lBQ0wyVyxHQUFHLEdBQUdOLFVBQVUsQ0FBQ1ksV0FBVyxDQUFDUCxNQUFNLENBQUM7WUFBQSxNQUN0QyxDQUFDQyxHQUFHLElBQUksQ0FBQ0EsR0FBRyxDQUFDTyxVQUFVO2NBQUFILFNBQUEsQ0FBQXhXLElBQUE7Y0FBQTtZQUFBO1lBQUEsT0FBQXdXLFNBQUEsQ0FBQS9XLE1BQUE7VUFBQTtZQUVyQjRXLENBQUMsR0FBR08sTUFBTSxDQUFDUixHQUFHLENBQUNPLFVBQVUsQ0FBQyxDQUFDRSxXQUFXLEVBQUU7WUFDeENQLENBQUMsR0FBR0YsR0FBRyxDQUFDVSxXQUFXLElBQUksQ0FBQztZQUM5QixJQUFJVCxDQUFDLEtBQUssUUFBUSxFQUFFL0MsT0FBTyxDQUFDdkIsTUFBTSxJQUFJdUUsQ0FBQyxDQUFDLEtBQ25DLElBQUlELENBQUMsS0FBSyxTQUFTLEVBQUUvQyxPQUFPLENBQUN0QixPQUFPLElBQUlzRSxDQUFDLENBQUMsS0FDMUMsSUFBSUQsQ0FBQyxLQUFLLE9BQU8sRUFBRS9DLE9BQU8sQ0FBQ3JCLEtBQUssSUFBSXFFLENBQUM7VUFBQztZQUFBRSxTQUFBLENBQUF4VyxJQUFBO1lBQUE7VUFBQTtZQUFBd1csU0FBQSxDQUFBeFcsSUFBQTtZQUFBO1VBQUE7WUFBQXdXLFNBQUEsQ0FBQWxVLElBQUE7WUFBQWtVLFNBQUEsQ0FBQTNCLEVBQUEsR0FBQTJCLFNBQUE7WUFHL0NqUixFQUFFLENBQUN3RyxJQUFJLDBFQUFnQ3NILGFBQWEsV0FBTW1ELFNBQUEsQ0FBQTNCLEVBQUEsQ0FBRTFKLE9BQU8sQ0FBRztVQUFDO1lBQUEsT0FBQXFMLFNBQUEsQ0FBQS9XLE1BQUEsV0FHcEU2VCxPQUFPO1VBQUE7VUFBQTtZQUFBLE9BQUFrRCxTQUFBLENBQUEvVCxJQUFBO1FBQUE7TUFBQSxHQUFBbVQsUUFBQTtJQUFBO0VBQ2xCLENBQUM7RUFFRG1CLE1BQU0sV0FBQUEsT0FBQSxFQUFHO0lBQ0w7SUFDQSxJQUFJLElBQUksQ0FBQ2xPLFdBQVcsRUFBRTtNQUNsQjtJQUNKO0lBRUEsSUFBSSxDQUFDLElBQUksQ0FBQ2lCLFlBQVksSUFBSSxJQUFJLENBQUNBLFlBQVksQ0FBQ2tOLFFBQVEsRUFBRTtJQUV0RCxJQUFNL00sR0FBRyxHQUFHRCxJQUFJLENBQUNDLEdBQUcsRUFBRTtJQUN0QixJQUFNZ04sRUFBRSxHQUFHLENBQUNoTixHQUFHLEdBQUcsSUFBSSxDQUFDRixRQUFRLElBQUksSUFBSTtJQUN2QyxJQUFJLENBQUNBLFFBQVEsR0FBR0UsR0FBRztJQUVuQixJQUFJLENBQUNILFlBQVksQ0FBQ2lOLE1BQU0sQ0FBQ0UsRUFBRSxDQUFDO0VBQ2hDLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSTNOLFdBQVcsV0FBQUEsWUFBQ0YsTUFBTSxFQUFFQyxVQUFVLEVBQUU7SUFDNUI5RCxFQUFFLENBQUN5RCxHQUFHLDRFQUFtRDtJQUN6RHpELEVBQUUsQ0FBQ3lELEdBQUcsdURBQTRCSyxVQUFVLGtCQUFLO0lBQ2pEOUQsRUFBRSxDQUFDeUQsR0FBRyxxREFBbUNJLE1BQU0sUUFBSTtJQUNuRDdELEVBQUUsQ0FBQ3lELEdBQUcsK0RBQStCLElBQUksQ0FBQ1IsS0FBSyxDQUFDdkgsTUFBTSxvQ0FBVyxJQUFJLENBQUN3SCxRQUFRLENBQUN4SCxNQUFNLENBQUc7SUFDeEZzRSxFQUFFLENBQUN5RCxHQUFHLDRDQUEwQyxJQUFJLENBQUNwQixrQkFBa0IsOEJBQXdCLElBQUksQ0FBQ0QsaUJBQWlCLFFBQUk7O0lBRXpIO0lBQ0EsSUFBTXVMLFdBQVcsR0FBR2pMLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDMUMsSUFBTWlQLFNBQVMsR0FBRyxHQUFHLENBQUMsQ0FBQzs7SUFFdkIzUixFQUFFLENBQUN5RCxHQUFHLHNGQUFtREksTUFBTSxLQUFLLE1BQU0sRUFBRztJQUU3RSxJQUFJQSxNQUFNLEtBQUssTUFBTSxFQUFFO01BQ25CO01BQ0E3RCxFQUFFLENBQUN5RCxHQUFHLDJHQUErQztNQUNyRHpELEVBQUUsQ0FBQ3lELEdBQUcsbURBQTZCa08sU0FBUywwRUFBZ0I7TUFFNUQsSUFBSSxDQUFDMU8sS0FBSyxDQUFDeEssT0FBTyxDQUFDLFVBQUMySyxJQUFJLEVBQUU0QyxLQUFLLEVBQUs7UUFDaENoRyxFQUFFLENBQUN5RCxHQUFHLGtEQUE0QnVDLEtBQUssV0FBTTVDLElBQUksQ0FBQ25ILElBQUksQ0FBRztRQUN6RCxJQUFNNEwsS0FBSyxHQUFHekUsSUFBSSxDQUFDMkIsWUFBWSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pEL0UsRUFBRSxDQUFDeUQsR0FBRyxxREFBeUMsQ0FBQyxDQUFDb0UsS0FBSyxDQUFHO1FBQ3pELElBQUlBLEtBQUssRUFBRTtVQUNQN0gsRUFBRSxDQUFDeUQsR0FBRyx5QkFBdUJMLElBQUksQ0FBQ25ILElBQUksbUNBQVU0TCxLQUFLLENBQUMrSixNQUFNLEVBQUUsQ0FBRztVQUNqRTVSLEVBQUUsQ0FBQ3lELEdBQUcseUJBQXVCTCxJQUFJLENBQUNuSCxJQUFJLG1DQUFVNEwsS0FBSyxDQUFDbUgsS0FBSyxvQ0FBV25ILEtBQUssQ0FBQ29ILEdBQUcsQ0FBRztRQUN0RjtRQUVBLElBQUlwSCxLQUFLLEVBQUU7VUFDUDtVQUNBLElBQU1nSyxVQUFVLEdBQUdoSyxLQUFLLENBQUMrSixNQUFNLEVBQUUsR0FBRyxPQUFPLEdBQUcsTUFBTTtVQUNwRDVSLEVBQUUsQ0FBQ3lELEdBQUcsdUNBQTJCTCxJQUFJLENBQUNuSCxJQUFJLEdBQUc0VixVQUFVLHNCQUFPRixTQUFTLCtCQUFRO1VBQy9FLElBQU16WSxNQUFNLEdBQUd5VSxXQUFXLENBQUNtRSxNQUFNLENBQUMxTyxJQUFJLEVBQUV1TyxTQUFTLENBQUM7VUFDbEQzUixFQUFFLENBQUN5RCxHQUFHLHVEQUFtQ3ZLLE1BQU0sQ0FBQztVQUNoRCxJQUFJQSxNQUFNLElBQUlBLE1BQU0sQ0FBQzZZLFNBQVMsRUFBRTtZQUM1Qi9SLEVBQUUsQ0FBQ3lELEdBQUcsc0NBQTBCTCxJQUFJLENBQUNuSCxJQUFJLDRCQUFRL0MsTUFBTSxDQUFDOFksUUFBUSxtQkFBTTtZQUN0RWhTLEVBQUUsQ0FBQ3lELEdBQUcsaURBQTZCdkssTUFBTSxDQUFDK1ksV0FBVyxDQUFDO1VBQzFELENBQUMsTUFBTSxJQUFJL1ksTUFBTSxFQUFFO1lBQ2Y4RyxFQUFFLENBQUN5RCxHQUFHLHlCQUF1QkwsSUFBSSxDQUFDbkgsSUFBSSx1RUFBZ0IvQyxNQUFNLENBQUM4WSxRQUFRLHdCQUFTbkssS0FBSyxDQUFDb0gsR0FBRyxDQUFHO1VBQzlGLENBQUMsTUFBTTtZQUNIalAsRUFBRSxDQUFDd0csSUFBSSx5QkFBdUJwRCxJQUFJLENBQUNuSCxJQUFJLG1DQUFpQjtVQUM1RDtRQUNKLENBQUMsTUFBTTtVQUNIK0QsRUFBRSxDQUFDd0csSUFBSSx5QkFBdUJwRCxJQUFJLENBQUNuSCxJQUFJLHVGQUE2QjtRQUN4RTtNQUNKLENBQUMsQ0FBQztNQUNGK0QsRUFBRSxDQUFDeUQsR0FBRyx5RkFBNEM7SUFDdEQsQ0FBQyxNQUFNLElBQUlJLE1BQU0sS0FBSyxTQUFTLEVBQUU7TUFDN0I7TUFDQTdELEVBQUUsQ0FBQ3lELEdBQUcsMkdBQStDO01BQ3JEekQsRUFBRSxDQUFDeUQsR0FBRyxtREFBNkJrTyxTQUFTLDBFQUFnQjtNQUU1RCxJQUFJLENBQUN6TyxRQUFRLENBQUN6SyxPQUFPLENBQUMsVUFBQzRLLE9BQU8sRUFBRTJDLEtBQUssRUFBSztRQUN0Q2hHLEVBQUUsQ0FBQ3lELEdBQUcsa0RBQTRCdUMsS0FBSyxXQUFNM0MsT0FBTyxDQUFDcEgsSUFBSSxDQUFHO1FBQzVELElBQU00TCxLQUFLLEdBQUd4RSxPQUFPLENBQUMwQixZQUFZLENBQUMsZ0JBQWdCLENBQUM7UUFDcEQvRSxFQUFFLENBQUN5RCxHQUFHLHFEQUF5QyxDQUFDLENBQUNvRSxLQUFLLENBQUc7UUFDekQsSUFBSUEsS0FBSyxFQUFFO1VBQ1A3SCxFQUFFLENBQUN5RCxHQUFHLHlCQUF1QkosT0FBTyxDQUFDcEgsSUFBSSxtQ0FBVTRMLEtBQUssQ0FBQytKLE1BQU0sRUFBRSxDQUFHO1VBQ3BFNVIsRUFBRSxDQUFDeUQsR0FBRyx5QkFBdUJKLE9BQU8sQ0FBQ3BILElBQUksbUNBQVU0TCxLQUFLLENBQUNtSCxLQUFLLG9DQUFXbkgsS0FBSyxDQUFDb0gsR0FBRyxDQUFHO1FBQ3pGO1FBRUEsSUFBSXBILEtBQUssRUFBRTtVQUNQO1VBQ0EsSUFBTWdLLFVBQVUsR0FBR2hLLEtBQUssQ0FBQytKLE1BQU0sRUFBRSxHQUFHLE9BQU8sR0FBRyxNQUFNO1VBQ3BENVIsRUFBRSxDQUFDeUQsR0FBRyx1Q0FBMkJKLE9BQU8sQ0FBQ3BILElBQUksR0FBRzRWLFVBQVUsc0JBQU9GLFNBQVMsK0JBQVE7VUFDbEYsSUFBTXpZLE1BQU0sR0FBR3lVLFdBQVcsQ0FBQ21FLE1BQU0sQ0FBQ3pPLE9BQU8sRUFBRXNPLFNBQVMsQ0FBQztVQUNyRDNSLEVBQUUsQ0FBQ3lELEdBQUcsdURBQW1DdkssTUFBTSxDQUFDO1VBQ2hELElBQUlBLE1BQU0sSUFBSUEsTUFBTSxDQUFDNlksU0FBUyxFQUFFO1lBQzVCL1IsRUFBRSxDQUFDeUQsR0FBRyxzQ0FBMEJKLE9BQU8sQ0FBQ3BILElBQUksNEJBQVEvQyxNQUFNLENBQUM4WSxRQUFRLG1CQUFNO1lBQ3pFaFMsRUFBRSxDQUFDeUQsR0FBRyxpREFBNkJ2SyxNQUFNLENBQUMrWSxXQUFXLENBQUM7VUFDMUQsQ0FBQyxNQUFNLElBQUkvWSxNQUFNLEVBQUU7WUFDZjhHLEVBQUUsQ0FBQ3lELEdBQUcseUJBQXVCSixPQUFPLENBQUNwSCxJQUFJLHVFQUFnQi9DLE1BQU0sQ0FBQzhZLFFBQVEsd0JBQVNuSyxLQUFLLENBQUNvSCxHQUFHLENBQUc7VUFDakcsQ0FBQyxNQUFNO1lBQ0hqUCxFQUFFLENBQUN3RyxJQUFJLHlCQUF1Qm5ELE9BQU8sQ0FBQ3BILElBQUksbUNBQWlCO1VBQy9EO1FBQ0osQ0FBQyxNQUFNO1VBQ0grRCxFQUFFLENBQUN3RyxJQUFJLHlCQUF1Qm5ELE9BQU8sQ0FBQ3BILElBQUksdUZBQTZCO1FBQzNFO01BQ0osQ0FBQyxDQUFDO01BQ0YrRCxFQUFFLENBQUN5RCxHQUFHLHlGQUE0QztJQUN0RDs7SUFFQTtJQUNBLElBQUksSUFBSSxDQUFDUyxjQUFjLEVBQUU7TUFDckIsSUFBSSxDQUFDQSxjQUFjLENBQUNnTyxXQUFXLENBQUMsVUFBVSxFQUFFO1FBQUVyTyxNQUFNLEVBQUVBLE1BQU07UUFBRUMsVUFBVSxFQUFFQTtNQUFXLENBQUMsQ0FBQztNQUN2RixJQUFJLENBQUNJLGNBQWMsQ0FBQ2lPLGFBQWEsRUFBRTs7TUFFbkM7TUFDQSxJQUFNck4sU0FBUyxzQkFBb0JMLElBQUksQ0FBQ0MsR0FBRyxFQUFJO01BQy9DLElBQUksQ0FBQ1IsY0FBYyxDQUFDa08sa0JBQWtCLENBQUN0TixTQUFTLENBQUM7TUFDakQ5RSxFQUFFLENBQUN5RCxHQUFHLHFFQUFnQ3FCLFNBQVMsQ0FBRzs7TUFFbEQ7TUFDQXZCLE1BQU0sQ0FBQzhPLG1CQUFtQixHQUFHdk4sU0FBUztJQUMxQzs7SUFFQTtJQUNBLElBQUksSUFBSSxDQUFDekMsa0JBQWtCLElBQUksSUFBSSxDQUFDRCxpQkFBaUIsRUFBRTtNQUNuRDtNQUNBcEMsRUFBRSxDQUFDeUQsR0FBRyx1RUFBK0I7TUFDckMsSUFBSSxDQUFDNk8sMEJBQTBCLENBQUN6TyxNQUFNLEVBQUVDLFVBQVUsQ0FBQztJQUN2RCxDQUFDLE1BQU07TUFDSDtNQUNBOUQsRUFBRSxDQUFDeUQsR0FBRyxtRkFBaUM7TUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQ3BCLGtCQUFrQixFQUFFO1FBQzFCckMsRUFBRSxDQUFDeUQsR0FBRyw4RkFBc0Q7TUFDaEU7TUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDckIsaUJBQWlCLEVBQUU7UUFDekJwQyxFQUFFLENBQUN5RCxHQUFHLDhGQUFpRDtNQUMzRDtNQUNBLElBQUksQ0FBQzhPLGtCQUFrQixDQUFDMU8sTUFBTSxDQUFDO0lBQ25DO0VBQ0osQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0lPLGlCQUFpQixXQUFBQSxrQkFBQSxFQUFHO0lBQ2hCLElBQUksQ0FBQ2IsTUFBTSxDQUFDQyxhQUFhLEVBQUU7TUFDdkJ4RCxFQUFFLENBQUN5RCxHQUFHLENBQUMsNENBQTRDLENBQUM7TUFDcEQ7SUFDSjtJQUVBLElBQU1xQyxhQUFhLEdBQUd2QyxNQUFNLENBQUNDLGFBQWE7SUFDMUN4RCxFQUFFLENBQUN5RCxHQUFHLDZHQUF5Q3FDLGFBQWEsQ0FBQzdDLEtBQUssR0FBRzZDLGFBQWEsQ0FBQzdDLEtBQUssQ0FBQ3ZILE1BQU0sR0FBRyxDQUFDLGdDQUFVb0ssYUFBYSxDQUFDNUMsUUFBUSxHQUFHNEMsYUFBYSxDQUFDNUMsUUFBUSxDQUFDeEgsTUFBTSxHQUFHLENBQUMsYUFBSTs7SUFFM0s7SUFDQSxJQUFJb0ssYUFBYSxDQUFDN0MsS0FBSyxJQUFJNkMsYUFBYSxDQUFDN0MsS0FBSyxDQUFDdkgsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUNrRyxtQkFBbUIsSUFBSSxJQUFJLENBQUNFLFlBQVksRUFBRTtNQUN4RyxJQUFJLENBQUMwUSxvQkFBb0IsQ0FBQzFNLGFBQWEsQ0FBQzdDLEtBQUssRUFBRSxNQUFNLENBQUM7SUFDMUQ7O0lBRUE7SUFDQSxJQUFJNkMsYUFBYSxDQUFDNUMsUUFBUSxJQUFJNEMsYUFBYSxDQUFDNUMsUUFBUSxDQUFDeEgsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUNtRyxzQkFBc0IsSUFBSSxJQUFJLENBQUNDLFlBQVksRUFBRTtNQUNqSCxJQUFJLENBQUMwUSxvQkFBb0IsQ0FBQzFNLGFBQWEsQ0FBQzVDLFFBQVEsRUFBRSxTQUFTLENBQUM7SUFDaEU7RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0lzUCxvQkFBb0IsV0FBQUEscUJBQUMxTSxhQUFhLEVBQUVNLElBQUksRUFBRTtJQUFBLElBQUFxTSxNQUFBO0lBQ3RDLElBQUksQ0FBQzNNLGFBQWEsSUFBSUEsYUFBYSxDQUFDcEssTUFBTSxLQUFLLENBQUMsRUFBRTtNQUM5QztJQUNKO0lBRUEsSUFBTWdYLFNBQVMsR0FBR3RNLElBQUksS0FBSyxNQUFNLEdBQUcsSUFBSSxDQUFDeEUsbUJBQW1CLEdBQUcsSUFBSSxDQUFDQyxzQkFBc0I7SUFDMUYsSUFBSSxDQUFDNlEsU0FBUyxFQUFFO01BQ1oxUyxFQUFFLENBQUN3RyxJQUFJLHlCQUF1QkosSUFBSSxnREFBVTtNQUM1QztJQUNKOztJQUVBO0lBQ0FzTSxTQUFTLENBQUNDLGlCQUFpQixFQUFFOztJQUU3QjtJQUNBLElBQU1DLFFBQVEsR0FBR3hNLElBQUksS0FBSyxNQUFNLEdBQUcsSUFBSSxDQUFDckUsU0FBUyxHQUFHLElBQUksQ0FBQ0UsWUFBWTs7SUFFckU7SUFDQTZELGFBQWEsQ0FBQ3JOLE9BQU8sQ0FBQyxVQUFDc04sUUFBUSxFQUFFQyxLQUFLLEVBQUs7TUFDdkMsSUFBTTZNLFVBQVUsR0FBR0osTUFBSSxDQUFDSyxtQkFBbUIsQ0FBQy9NLFFBQVEsRUFBRUssSUFBSSxFQUFFSixLQUFLLEVBQUU0TSxRQUFRLENBQUM7TUFDNUUsSUFBSUMsVUFBVSxFQUFFO1FBQ1pILFNBQVMsQ0FBQzVMLFFBQVEsQ0FBQytMLFVBQVUsQ0FBQztNQUNsQztJQUNKLENBQUMsQ0FBQzs7SUFFRjtJQUNBLElBQUksQ0FBQ0Usb0JBQW9CLENBQUNMLFNBQVMsRUFBRTVNLGFBQWEsQ0FBQ3BLLE1BQU0sQ0FBQztFQUM5RCxDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0lvWCxtQkFBbUIsV0FBQUEsb0JBQUMvTSxRQUFRLEVBQUVLLElBQUksRUFBRUosS0FBSyxFQUFFNE0sUUFBUSxFQUFFO0lBQ2pELElBQUksQ0FBQyxJQUFJLENBQUM5USxZQUFZLEVBQUU7TUFDcEI5QixFQUFFLENBQUN3RyxJQUFJLENBQUMsb0NBQW9DLENBQUM7TUFDN0MsT0FBTyxJQUFJO0lBQ2Y7O0lBRUE7SUFDQSxJQUFNcU0sVUFBVSxHQUFHN1MsRUFBRSxDQUFDMEcsV0FBVyxDQUFDLElBQUksQ0FBQzVFLFlBQVksQ0FBQztJQUNwRCtRLFVBQVUsQ0FBQzVXLElBQUksc0JBQW1COEosUUFBUSxDQUFDOUosSUFBSSxJQUFJOEosUUFBUSxDQUFDbkssV0FBVyxJQUFJb0ssS0FBSyxDQUFFOztJQUVsRjtJQUNBLElBQU1nTixRQUFRLEdBQUdqTixRQUFRLENBQUM5SixJQUFJLElBQUk4SixRQUFRLENBQUNuSyxXQUFXO0lBQ3REb0UsRUFBRSxDQUFDeUQsR0FBRywrREFBK0J1UCxRQUFRLHdCQUFTNU0sSUFBSSxDQUFHO0lBQzdELElBQU02TSxhQUFhLEdBQUcsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ0YsUUFBUSxFQUFFNU0sSUFBSSxDQUFDO0lBQzdELElBQUk2TSxhQUFhLEVBQUU7TUFDZmpULEVBQUUsQ0FBQ3lELEdBQUcsc0VBQWlDd1AsYUFBYSxDQUFDaFgsSUFBSSxDQUFHO01BQzVEO01BQ0E0VyxVQUFVLENBQUNNLGNBQWMsR0FBR0YsYUFBYTtNQUN6QztNQUNBLElBQUksQ0FBQ0csc0JBQXNCLENBQUNQLFVBQVUsRUFBRUksYUFBYSxDQUFDO0lBQzFELENBQUMsTUFBTTtNQUNIalQsRUFBRSxDQUFDd0csSUFBSSw4RkFBcUN3TSxRQUFRLENBQUc7TUFDdkRoVCxFQUFFLENBQUN3RyxJQUFJLHVDQUEyQkosSUFBSSxzQkFBTyxDQUFDQSxJQUFJLEtBQUssTUFBTSxHQUFHLElBQUksQ0FBQ25ELEtBQUssR0FBRyxJQUFJLENBQUNDLFFBQVEsRUFBRXdNLEdBQUcsQ0FBQyxVQUFBL1EsQ0FBQztRQUFBLE9BQUlBLENBQUMsR0FBR0EsQ0FBQyxDQUFDMUMsSUFBSSxHQUFHLE1BQU07TUFBQSxFQUFDLENBQUNvWCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUc7SUFDM0k7O0lBRUE7SUFDQSxJQUFNQyxRQUFRLEdBQUdULFVBQVUsQ0FBQ3pOLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSXlOLFVBQVU7SUFDaEUsSUFBTVUsTUFBTSxHQUFHRCxRQUFRLENBQUN2TyxZQUFZLENBQUMvRSxFQUFFLENBQUN3VCxNQUFNLENBQUM7SUFFL0MsSUFBSUQsTUFBTSxFQUFFO01BQ1I7TUFDQSxJQUFJRSxXQUFXLEdBQUcxTixRQUFRLENBQUMyTixJQUFJLElBQUksSUFBSTs7TUFFdkM7TUFDQSxJQUFJLENBQUNELFdBQVcsSUFBSWIsUUFBUSxJQUFJQSxRQUFRLENBQUNsWCxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ2pEO1FBQ0EsSUFBTWlZLGNBQWMsR0FBR2pSLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoRCxJQUFNa1IsY0FBYyxHQUFHeE4sSUFBSSxLQUFLLE1BQU0sR0FBSXVOLGNBQWMsQ0FBQzFRLEtBQUssSUFBSSxFQUFFLEdBQUswUSxjQUFjLENBQUN6USxRQUFRLElBQUksRUFBRztRQUN2RyxJQUFNMlEsV0FBVyxHQUFHRCxjQUFjLENBQUNFLFNBQVMsQ0FBQyxVQUFBQyxNQUFNO1VBQUEsT0FDL0NBLE1BQU0sQ0FBQzlYLElBQUksS0FBSzhKLFFBQVEsQ0FBQzlKLElBQUksSUFBSThYLE1BQU0sQ0FBQ25ZLFdBQVcsS0FBS21LLFFBQVEsQ0FBQ25LLFdBQVc7UUFBQSxFQUMvRTtRQUNELElBQUlpWSxXQUFXLElBQUksQ0FBQyxJQUFJQSxXQUFXLEdBQUdqQixRQUFRLENBQUNsWCxNQUFNLEVBQUU7VUFDbkQrWCxXQUFXLEdBQUdiLFFBQVEsQ0FBQ2lCLFdBQVcsQ0FBQztRQUN2QyxDQUFDLE1BQU0sSUFBSTdOLEtBQUssR0FBRzRNLFFBQVEsQ0FBQ2xYLE1BQU0sRUFBRTtVQUNoQztVQUNBK1gsV0FBVyxHQUFHYixRQUFRLENBQUM1TSxLQUFLLENBQUM7UUFDakM7TUFDSjtNQUVBLElBQUl5TixXQUFXLEVBQUU7UUFDYkYsTUFBTSxDQUFDRSxXQUFXLEdBQUdBLFdBQVc7UUFDaENGLE1BQU0sQ0FBQzFiLElBQUksR0FBR21JLEVBQUUsQ0FBQ3dULE1BQU0sQ0FBQ1EsSUFBSSxDQUFDQyxNQUFNO1FBQ25DVixNQUFNLENBQUNXLFFBQVEsR0FBR2xVLEVBQUUsQ0FBQ3dULE1BQU0sQ0FBQ1csUUFBUSxDQUFDQyxNQUFNOztRQUUzQztRQUNBZCxRQUFRLENBQUNoTCxLQUFLLEdBQUcsSUFBSSxDQUFDcEcsVUFBVSxJQUFJLEVBQUU7UUFDdENvUixRQUFRLENBQUMvSyxNQUFNLEdBQUcsSUFBSSxDQUFDckcsVUFBVSxJQUFJLEVBQUU7TUFDM0MsQ0FBQyxNQUFNO1FBQ0hsQyxFQUFFLENBQUN3RyxJQUFJLHNFQUFnQ1QsUUFBUSxDQUFDOUosSUFBSSxJQUFJOEosUUFBUSxDQUFDbkssV0FBVyxFQUFHO01BQ25GO0lBQ0o7O0lBRUE7SUFDQSxJQUFNeVksU0FBUyxHQUFHeEIsVUFBVSxDQUFDek4sY0FBYyxDQUFDLFdBQVcsQ0FBQztJQUN4RCxJQUFJaVAsU0FBUyxFQUFFO01BQ1gsSUFBTUMsS0FBSyxHQUFHRCxTQUFTLENBQUN0UCxZQUFZLENBQUMvRSxFQUFFLENBQUN1VSxLQUFLLENBQUM7TUFDOUMsSUFBSUQsS0FBSyxFQUFFO1FBQ1BBLEtBQUssQ0FBQ0UsTUFBTSxHQUFHek8sUUFBUSxDQUFDbkssV0FBVyxJQUFJbUssUUFBUSxDQUFDOUosSUFBSSxJQUFJLElBQUk7UUFDNUQ7UUFDQSxJQUFJcVksS0FBSyxDQUFDRyxRQUFRLEdBQUcsQ0FBQyxFQUFFO1VBQ3BCSCxLQUFLLENBQUNHLFFBQVEsR0FBR2hOLElBQUksQ0FBQ2dELEdBQUcsQ0FBQyxFQUFFLEVBQUU2SixLQUFLLENBQUNHLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDdkQsQ0FBQyxNQUFNO1VBQ0hILEtBQUssQ0FBQ0csUUFBUSxHQUFHLEVBQUU7UUFDdkI7TUFDSjtJQUNKOztJQUVBO0lBQ0EsSUFBTUMsU0FBUyxHQUFHN0IsVUFBVSxDQUFDek4sY0FBYyxDQUFDLFdBQVcsQ0FBQztJQUN4RCxJQUFJc1AsU0FBUyxFQUFFO01BQ1hBLFNBQVMsQ0FBQy9OLE1BQU0sR0FBRyxLQUFLO0lBQzVCOztJQUVBO0lBQ0EsSUFBSXNNLGFBQWEsRUFBRTtNQUNmLElBQUksQ0FBQzBCLGtCQUFrQixDQUFDOUIsVUFBVSxFQUFFSSxhQUFhLENBQUM7SUFDdEQ7SUFFQSxPQUFPSixVQUFVO0VBQ3JCLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJSyxrQkFBa0IsV0FBQUEsbUJBQUNGLFFBQVEsRUFBRTVNLElBQUksRUFBRTtJQUMvQixJQUFNd08sUUFBUSxHQUFHeE8sSUFBSSxLQUFLLE1BQU0sR0FBRyxJQUFJLENBQUNuRCxLQUFLLEdBQUcsSUFBSSxDQUFDQyxRQUFRO0lBQzdELElBQUksQ0FBQzBSLFFBQVEsSUFBSUEsUUFBUSxDQUFDbFosTUFBTSxLQUFLLENBQUMsRUFBRTtNQUNwQyxPQUFPLElBQUk7SUFDZjs7SUFFQTtJQUNBLElBQUl1WCxhQUFhLEdBQUcyQixRQUFRLENBQUMzTixJQUFJLENBQUMsVUFBQXVFLElBQUksRUFBSTtNQUN0QyxJQUFJLENBQUNBLElBQUksSUFBSSxDQUFDQSxJQUFJLENBQUNDLE9BQU8sRUFBRSxPQUFPLEtBQUs7TUFDeEMsSUFBTTVELEtBQUssR0FBRzJELElBQUksQ0FBQ3pHLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztNQUNqRCxJQUFJLENBQUM4QyxLQUFLLEVBQUUsT0FBTyxLQUFLO01BQ3hCLE9BQU9BLEtBQUssQ0FBQzVMLElBQUksS0FBSytXLFFBQVEsSUFBSXhILElBQUksQ0FBQ3ZQLElBQUksS0FBSytXLFFBQVE7SUFDNUQsQ0FBQyxDQUFDOztJQUVGO0lBQ0EsSUFBSSxDQUFDQyxhQUFhLElBQUksQ0FBQ3hYLEtBQUssQ0FBQ3VYLFFBQVEsQ0FBQyxFQUFFO01BQ3BDLElBQU1oTixLQUFLLEdBQUc2TyxRQUFRLENBQUM3QixRQUFRLENBQUM7TUFDaEMsSUFBSWhOLEtBQUssSUFBSSxDQUFDLElBQUlBLEtBQUssR0FBRzRPLFFBQVEsQ0FBQ2xaLE1BQU0sRUFBRTtRQUN2Q3VYLGFBQWEsR0FBRzJCLFFBQVEsQ0FBQzVPLEtBQUssQ0FBQztNQUNuQztJQUNKO0lBRUEsT0FBT2lOLGFBQWE7RUFDeEIsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJRyxzQkFBc0IsV0FBQUEsdUJBQUNQLFVBQVUsRUFBRUksYUFBYSxFQUFFO0lBQUEsSUFBQTZCLE1BQUE7SUFDOUM7SUFDQWpDLFVBQVUsQ0FBQ2tDLGFBQWEsR0FBRyxJQUFJOztJQUUvQjtJQUNBLElBQUlsQyxVQUFVLENBQUN2SyxLQUFLLEtBQUssQ0FBQyxJQUFJdUssVUFBVSxDQUFDdEssTUFBTSxLQUFLLENBQUMsRUFBRTtNQUNuRHNLLFVBQVUsQ0FBQ21DLGNBQWMsQ0FBQyxJQUFJLENBQUM5UyxVQUFVLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQ0EsVUFBVSxJQUFJLEVBQUUsQ0FBQztJQUMzRTs7SUFFQTtJQUNBMlEsVUFBVSxDQUFDb0MsR0FBRyxDQUFDalYsRUFBRSxDQUFDTSxJQUFJLENBQUM0VSxTQUFTLENBQUNDLFNBQVMsQ0FBQztJQUMzQ3RDLFVBQVUsQ0FBQ29DLEdBQUcsQ0FBQ2pWLEVBQUUsQ0FBQ00sSUFBSSxDQUFDNFUsU0FBUyxDQUFDRSxXQUFXLENBQUM7SUFDN0N2QyxVQUFVLENBQUNvQyxHQUFHLENBQUMsT0FBTyxDQUFDOztJQUV2QjtJQUNBLElBQUlJLE1BQU0sR0FBR3hDLFVBQVUsQ0FBQzlOLFlBQVksQ0FBQy9FLEVBQUUsQ0FBQ3NWLE1BQU0sQ0FBQztJQUMvQyxJQUFJLENBQUNELE1BQU0sRUFBRTtNQUNUQSxNQUFNLEdBQUd4QyxVQUFVLENBQUMwQyxZQUFZLENBQUN2VixFQUFFLENBQUNzVixNQUFNLENBQUM7TUFDM0NELE1BQU0sQ0FBQ0csVUFBVSxHQUFHeFYsRUFBRSxDQUFDc1YsTUFBTSxDQUFDRyxVQUFVLENBQUNDLEtBQUs7TUFDOUNMLE1BQU0sQ0FBQ00sU0FBUyxHQUFHLEdBQUc7SUFDMUI7O0lBRUE7SUFDQU4sTUFBTSxDQUFDN0osSUFBSSxDQUFDb0ssRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDQyxLQUFLLEVBQUs7TUFDL0I3VixFQUFFLENBQUN5RCxHQUFHLGlGQUF1Q29QLFVBQVUsQ0FBQzVXLElBQUksQ0FBRztNQUMvRDtNQUNBO01BQ0E2WSxNQUFJLENBQUNnQixjQUFjLENBQUM3QyxhQUFhLEVBQUU0QyxLQUFLLENBQUM7SUFDN0MsQ0FBQyxFQUFFLElBQUksQ0FBQzs7SUFFUjtJQUNBLElBQU12QyxRQUFRLEdBQUdULFVBQVUsQ0FBQ3pOLGNBQWMsQ0FBQyxNQUFNLENBQUM7SUFDbEQsSUFBSWtPLFFBQVEsRUFBRTtNQUNWQSxRQUFRLENBQUN5QixhQUFhLEdBQUcsSUFBSTtNQUM3QixJQUFJekIsUUFBUSxDQUFDaEwsS0FBSyxLQUFLLENBQUMsSUFBSWdMLFFBQVEsQ0FBQy9LLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDL0MrSyxRQUFRLENBQUMwQixjQUFjLENBQUMsSUFBSSxDQUFDOVMsVUFBVSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUNBLFVBQVUsSUFBSSxFQUFFLENBQUM7TUFDekU7SUFDSjtJQUVBbEMsRUFBRSxDQUFDeUQsR0FBRyw4RkFBcUNvUCxVQUFVLENBQUM1VyxJQUFJLFlBQU9nWCxhQUFhLENBQUNoWCxJQUFJLENBQUc7RUFDMUYsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJNlosY0FBYyxXQUFBQSxlQUFDN0MsYUFBYSxFQUFFNEMsS0FBSyxFQUFFO0lBQ2pDLElBQUksQ0FBQzVDLGFBQWEsSUFBSSxDQUFDQSxhQUFhLENBQUN4SCxPQUFPLEVBQUU7TUFDMUN6TCxFQUFFLENBQUN3RyxJQUFJLENBQUMsa0NBQWtDLENBQUM7TUFDM0M7SUFDSjs7SUFFQTtJQUNBLElBQUl5TSxhQUFhLENBQUM4QyxvQkFBb0IsRUFBRTtNQUNwQy9WLEVBQUUsQ0FBQ3lELEdBQUcseUJBQXVCd1AsYUFBYSxDQUFDaFgsSUFBSSwyRkFBa0I7TUFDakU7SUFDSjtJQUVBK0QsRUFBRSxDQUFDeUQsR0FBRywyRUFBa0Q7SUFDeER6RCxFQUFFLENBQUN5RCxHQUFHLHVDQUEyQndQLGFBQWEsQ0FBQ2hYLElBQUksQ0FBRztJQUN0RCtELEVBQUUsQ0FBQ3lELEdBQUcsOERBQWdDOztJQUV0QztJQUNBLElBQU1vRSxLQUFLLEdBQUdvTCxhQUFhLENBQUNsTyxZQUFZLENBQUMsZ0JBQWdCLENBQUM7SUFDMUQsSUFBSThDLEtBQUssSUFBSUEsS0FBSyxDQUFDK0osTUFBTSxFQUFFLEVBQUU7TUFDekI1UixFQUFFLENBQUN5RCxHQUFHLHlCQUF1QndQLGFBQWEsQ0FBQ2hYLElBQUksbUVBQWM7TUFDN0Q7SUFDSjs7SUFFQTtJQUNBLElBQUksSUFBSSxDQUFDcUgsV0FBVyxFQUFFO01BQ2xCdEQsRUFBRSxDQUFDeUQsR0FBRywrRkFBbUM7TUFDekM7SUFDSjtJQUVBLElBQU11UyxXQUFXLEdBQUd0VCxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQzFDLElBQU11VCxPQUFPLEdBQUd2VCxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ2xDLElBQU13VCxhQUFhLEdBQUd4VCxPQUFPLENBQUMsZUFBZSxDQUFDOztJQUU5QztJQUNBLElBQUksQ0FBQ3NULFdBQVcsQ0FBQ0csbUJBQW1CLENBQUNsRCxhQUFhLENBQUMsRUFBRTtNQUNqRGpULEVBQUUsQ0FBQ3lELEdBQUcseUJBQXVCd1AsYUFBYSxDQUFDaFgsSUFBSSwrRUFBZ0I7TUFDL0Q7SUFDSjtJQUVBK0QsRUFBRSxDQUFDeUQsR0FBRyx5QkFBdUJ3UCxhQUFhLENBQUNoWCxJQUFJLDRFQUFrQjs7SUFFakU7SUFDQSxJQUFNNkwsUUFBUSxHQUFHbUwsYUFBYSxDQUFDbE8sWUFBWSxDQUFDLGVBQWUsQ0FBQztJQUM1RCxJQUFJLENBQUMrQyxRQUFRLEVBQUU7TUFDWDlILEVBQUUsQ0FBQ3dHLElBQUkseUJBQXVCeU0sYUFBYSxDQUFDaFgsSUFBSSw0Q0FBcUI7TUFDckU7SUFDSjtJQUVBLElBQU1tYSxPQUFPLEdBQUd0TyxRQUFRLENBQUMxQixJQUFJLEtBQUssTUFBTSxHQUNsQzZQLE9BQU8sQ0FBQ0ksV0FBVyxHQUNuQkosT0FBTyxDQUFDSyxRQUFRO0lBRXRCLElBQU1DLE1BQU0sR0FBR0gsT0FBTyxDQUFDblAsSUFBSSxDQUFDLFVBQUF1UCxDQUFDLEVBQUk7TUFDN0IsSUFBSSxDQUFDQSxDQUFDLElBQUksQ0FBQ0EsQ0FBQyxDQUFDL0ssT0FBTyxFQUFFLE9BQU8sS0FBSztNQUNsQyxJQUFNZ0wsQ0FBQyxHQUFHRCxDQUFDLENBQUN6UixZQUFZLENBQUMsZ0JBQWdCLENBQUM7TUFDMUMsT0FBTzBSLENBQUMsSUFBSSxDQUFDQSxDQUFDLENBQUM3RSxNQUFNLEVBQUU7SUFDM0IsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDMkUsTUFBTSxFQUFFO01BQ1R2VyxFQUFFLENBQUN5RCxHQUFHLHlCQUF1QndQLGFBQWEsQ0FBQ2hYLElBQUksdURBQVk7TUFDM0Q7SUFDSjs7SUFFQTtJQUNBZ1gsYUFBYSxDQUFDOEMsb0JBQW9CLEdBQUcsSUFBSTs7SUFFekM7SUFDQSxJQUFNdFMsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUlpVCxHQUFHO01BQUEsT0FBSzFXLEVBQUUsQ0FBQ3lELEdBQUcsQ0FBQ2lULEdBQUcsQ0FBQztJQUFBO0lBQ2hDLElBQU0zVCxJQUFJLEdBQUcwRSxJQUFJLENBQUNpQyxNQUFNO0lBQ3hCc00sV0FBVyxDQUFDVyxnQkFBZ0IsQ0FBQzFELGFBQWEsRUFBRXNELE1BQU0sRUFBRTlTLEdBQUcsRUFBRVYsSUFBSSxDQUFDOztJQUU5RDtJQUNBLElBQUksQ0FBQ29CLFlBQVksQ0FBQyxZQUFNO01BQ3BCOE8sYUFBYSxDQUFDOEMsb0JBQW9CLEdBQUcsS0FBSztNQUMxQy9WLEVBQUUsQ0FBQ3lELEdBQUcseUJBQXVCd1AsYUFBYSxDQUFDaFgsSUFBSSx5RUFBZTtJQUNsRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUNiLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJcUksc0JBQXNCLFdBQUFBLHVCQUFBLEVBQUc7SUFBQSxJQUFBc1MsTUFBQTtJQUNyQjtJQUNBLElBQUksSUFBSSxDQUFDaFYsbUJBQW1CLEVBQUU7TUFDMUIsSUFBSSxDQUFDQSxtQkFBbUIsQ0FBQzRHLFFBQVEsQ0FBQy9QLE9BQU8sQ0FBQyxVQUFBb2EsVUFBVSxFQUFJO1FBQ3BEK0QsTUFBSSxDQUFDakMsa0JBQWtCLENBQUM5QixVQUFVLEVBQUVBLFVBQVUsQ0FBQ00sY0FBYyxDQUFDO01BQ2xFLENBQUMsQ0FBQztJQUNOOztJQUVBO0lBQ0EsSUFBSSxJQUFJLENBQUN0UixzQkFBc0IsRUFBRTtNQUM3QixJQUFJLENBQUNBLHNCQUFzQixDQUFDMkcsUUFBUSxDQUFDL1AsT0FBTyxDQUFDLFVBQUFvYSxVQUFVLEVBQUk7UUFDdkQrRCxNQUFJLENBQUNqQyxrQkFBa0IsQ0FBQzlCLFVBQVUsRUFBRUEsVUFBVSxDQUFDTSxjQUFjLENBQUM7TUFDbEUsQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0l3QixrQkFBa0IsV0FBQUEsbUJBQUM5QixVQUFVLEVBQUVJLGFBQWEsRUFBRTtJQUMxQyxJQUFJLENBQUNKLFVBQVUsSUFBSSxDQUFDQSxVQUFVLENBQUNwSCxPQUFPLEVBQUU7TUFDcEM7SUFDSjtJQUVBLElBQUksQ0FBQ3dILGFBQWEsSUFBSSxDQUFDQSxhQUFhLENBQUN4SCxPQUFPLEVBQUU7TUFDMUM7SUFDSjtJQUVBLElBQU01RCxLQUFLLEdBQUdvTCxhQUFhLENBQUNsTyxZQUFZLENBQUMsZ0JBQWdCLENBQUM7SUFDMUQsSUFBSSxDQUFDOEMsS0FBSyxFQUFFO01BQ1I7SUFDSjs7SUFFQTtJQUNBLElBQU1nUCxVQUFVLEdBQUdoUCxLQUFLLENBQUNnUCxVQUFVLEVBQUU7O0lBRXJDO0lBQ0EsSUFBTXZELFFBQVEsR0FBR1QsVUFBVSxDQUFDek4sY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJeU4sVUFBVTs7SUFFaEU7SUFDQSxJQUFJZ0UsVUFBVSxFQUFFO01BQ1o7TUFDQXZELFFBQVEsQ0FBQ3dELEtBQUssR0FBRzlXLEVBQUUsQ0FBQytXLEtBQUssQ0FBQ0MsS0FBSztNQUMvQm5FLFVBQVUsQ0FBQ2lFLEtBQUssR0FBRzlXLEVBQUUsQ0FBQytXLEtBQUssQ0FBQ0MsS0FBSztJQUNyQyxDQUFDLE1BQU07TUFDSDtNQUNBMUQsUUFBUSxDQUFDd0QsS0FBSyxHQUFHLElBQUk5VyxFQUFFLENBQUMrVyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO01BQ2pEbEUsVUFBVSxDQUFDaUUsS0FBSyxHQUFHLElBQUk5VyxFQUFFLENBQUMrVyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ3ZEO0VBQ0osQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJaEUsb0JBQW9CLFdBQUFBLHFCQUFDTCxTQUFTLEVBQUV1RSxLQUFLLEVBQUU7SUFDbkMsSUFBSUEsS0FBSyxLQUFLLENBQUMsRUFBRTtJQUVqQixJQUFNek8sUUFBUSxHQUFHa0ssU0FBUyxDQUFDbEssUUFBUTtJQUNuQyxJQUFNME8sT0FBTyxHQUFHLElBQUksQ0FBQy9VLGFBQWEsSUFBSSxFQUFFO0lBQ3hDLElBQU1nVixXQUFXLEdBQUcsSUFBSSxDQUFDalYsVUFBVSxJQUFJLEVBQUU7SUFDekMsSUFBTWtWLFVBQVUsR0FBR0gsS0FBSyxHQUFHRSxXQUFXLEdBQUcsQ0FBQ0YsS0FBSyxHQUFHLENBQUMsSUFBSUMsT0FBTzs7SUFFOUQ7SUFDQTFPLFFBQVEsQ0FBQy9QLE9BQU8sQ0FBQyxVQUFDa1EsS0FBSyxFQUFFM0MsS0FBSyxFQUFLO01BQy9CLElBQU1lLENBQUMsR0FBRyxDQUFDcVEsVUFBVSxHQUFHLENBQUMsR0FBR0QsV0FBVyxHQUFHLENBQUMsR0FBR25SLEtBQUssSUFBSW1SLFdBQVcsR0FBR0QsT0FBTyxDQUFDO01BQzdFdk8sS0FBSyxDQUFDckIsV0FBVyxDQUFDUCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJdUwsMEJBQTBCLFdBQUFBLDJCQUFDek8sTUFBTSxFQUFFQyxVQUFVLEVBQUU7SUFBQSxJQUFBdVQsTUFBQTtJQUMzQ3JYLEVBQUUsQ0FBQ3lELEdBQUcsbUZBQTJDO0lBQ2pEekQsRUFBRSxDQUFDeUQsR0FBRywrRkFBcUMsSUFBSSxDQUFDckIsaUJBQWlCLFFBQUk7SUFDckVwQyxFQUFFLENBQUN5RCxHQUFHLDZDQUE0QkssVUFBVSxVQUFLRCxNQUFNLE9BQUk7O0lBRTNEO0lBQ0FOLE1BQU0sQ0FBQytULGdCQUFnQixHQUFHO01BQ3RCelQsTUFBTSxFQUFFQSxNQUFNO01BQ2RDLFVBQVUsRUFBRUE7SUFDaEIsQ0FBQztJQUNEOUQsRUFBRSxDQUFDeUQsR0FBRyw2RkFBMERGLE1BQU0sQ0FBQytULGdCQUFnQixDQUFDOztJQUV4RjtJQUNBdFgsRUFBRSxDQUFDeUQsR0FBRyw2RUFBcUM7SUFDM0MsSUFBSSxDQUFDVSxZQUFZLENBQUMsWUFBTTtNQUNwQm5FLEVBQUUsQ0FBQ3lELEdBQUcsK0RBQStCNFQsTUFBSSxDQUFDalYsaUJBQWlCLENBQUc7TUFDOUQsSUFBSTtRQUNBcEMsRUFBRSxDQUFDaUYsUUFBUSxDQUFDc1MsU0FBUyxDQUFDRixNQUFJLENBQUNqVixpQkFBaUIsRUFBRSxVQUFDOUksS0FBSyxFQUFLO1VBQ3JELElBQUlBLEtBQUssRUFBRTtZQUNQMEcsRUFBRSxDQUFDMUcsS0FBSywrREFBK0JBLEtBQUssQ0FBRztZQUMvQzBHLEVBQUUsQ0FBQzFHLEtBQUssK0lBQTJDO1lBQ25EO1lBQ0ErZCxNQUFJLENBQUM5RSxrQkFBa0IsQ0FBQzFPLE1BQU0sQ0FBQztVQUNuQyxDQUFDLE1BQU07WUFDSDdELEVBQUUsQ0FBQ3lELEdBQUcsc0VBQWlDNFQsTUFBSSxDQUFDalYsaUJBQWlCLENBQUc7VUFDcEU7UUFDSixDQUFDLENBQUM7TUFDTixDQUFDLENBQUMsT0FBT29VLENBQUMsRUFBRTtRQUNSeFcsRUFBRSxDQUFDMUcsS0FBSywrREFBK0JrZCxDQUFDLENBQUM1USxPQUFPLENBQUc7UUFDbkQ1RixFQUFFLENBQUMxRyxLQUFLLG1EQUE2QmtkLENBQUMsQ0FBQ2dCLEtBQUssQ0FBRztRQUMvQztRQUNBSCxNQUFJLENBQUM5RSxrQkFBa0IsQ0FBQzFPLE1BQU0sQ0FBQztNQUNuQztJQUNKLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQ2IsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0kwTyxrQkFBa0IsV0FBQUEsbUJBQUMxTyxNQUFNLEVBQUU7SUFDdkIsSUFBSSxJQUFJLENBQUNuQyxhQUFhLEVBQUU7TUFDcEIsSUFBTStWLGlCQUFpQixHQUFHLElBQUksQ0FBQy9WLGFBQWEsQ0FBQ3FELFlBQVksQ0FBQyxlQUFlLENBQUM7TUFDMUUsSUFBSTBTLGlCQUFpQixFQUFFO1FBQ25CQSxpQkFBaUIsQ0FBQ0MsWUFBWSxDQUFDN1QsTUFBTSxDQUFDO01BQzFDLENBQUMsTUFBTTtRQUNIN0QsRUFBRSxDQUFDMUcsS0FBSyxDQUFDLHVEQUF1RCxDQUFDO1FBQ2pFMEcsRUFBRSxDQUFDMUcsS0FBSyxDQUFDLHdDQUF3QyxDQUFDO01BQ3REO0lBQ0osQ0FBQyxNQUFNO01BQ0gwRyxFQUFFLENBQUMxRyxLQUFLLENBQUMsd0NBQXdDLENBQUM7TUFDbEQwRyxFQUFFLENBQUMxRyxLQUFLLENBQUMsK0NBQStDLENBQUM7SUFDN0Q7RUFDSjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQW5pbWF0aW9uU3RhdGUgPSB7XG4gICAgQVRUQUNLOiBcImF0a1wiLCAgICAgIC8vIOaUu+WHu+WKqOeUu1xuICAgIEJZX0FUSzogXCJieWF0a1wiLCAgICAvLyDlj5flh7vliqjnlLtcbiAgICBESUU6IFwiZGllXCIsICAgICAgICAgLy8g5q275Lqh5Yqo55S7XG4gICAgU0hJX0hVQTogXCJzaGlodWFcIiwgIC8vIOefs+WMluWKqOeUu1xuICAgIFdBSVQ6IFwid2FpdFwiLCAgICAgICAvLyDlvoXmnLrliqjnlLtcbn1cblxuXG4vKipcbiAqIOaImOaWl+aOp+WItuWZqFxuICog6LSf6LSj5oiY5paX5Zy65pmv55qE5Yid5aeL5YyW5ZKM5oiY5paX57O757uf55qE6amx5YqoXG4gKi9cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIOiLsembhOiKgueCueaVsOe7hO+8iOS7juWcuuaZr+S4reebtOaOpeW8leeUqO+8iVxuICAgICAgICBoZXJvTm9kZXM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW2NjLk5vZGVdLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmi5blhaXlnLrmma/kuK3nmoToi7Hpm4ToioLngrlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOaAqueJqeiKgueCueaVsOe7hO+8iOS7juWcuuaZr+S4reebtOaOpeW8leeUqO+8iVxuICAgICAgICBtb25zdGVyTm9kZXM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW2NjLk5vZGVdLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmi5blhaXlnLrmma/kuK3nmoTmgKrnianoioLngrlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOaIluiAheS9v+eUqOeItuiKgueCueiHquWKqOiOt+WPlu+8iOS6jOmAieS4gO+8iVxuICAgICAgICBoZXJvUGFyZW50OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6Iux6ZuE54i26IqC54K577yM6Ieq5Yqo6I635Y+W5omA5pyJ5a2Q6IqC54K55L2c5Li66Iux6ZuEXCJcbiAgICAgICAgfSxcblxuICAgICAgICBtb25zdGVyUGFyZW50OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5oCq54mp54i26IqC54K577yM6Ieq5Yqo6I635Y+W5omA5pyJ5a2Q6IqC54K55L2c5Li65oCq54mpXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDmmK/lkKbkvb/nlKjniLboioLngrnmqKHlvI9cbiAgICAgICAgdXNlUGFyZW50TW9kZToge1xuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICB0b29sdGlwOiBcInRydWU6IOS7jueItuiKgueCueiOt+WPluWtkOiKgueCuSB8IGZhbHNlOiDkvb/nlKhoZXJvTm9kZXPlkoxtb25zdGVyTm9kZXNcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOaYr+WQpuS9v+eUqOmAieaLqeWcuuaZr+aooeW8j++8iOiHquWKqOWIm+W7uuiKgueCueWSjOaOkuWFteW4g+mYte+8iVxuICAgICAgICB1c2VTZWxlY3RTY2VuZU1vZGU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCJ0cnVlOiDku45TZWxlY3RTY2VuZemAieaLqeeahOaVsOaNruiHquWKqOWIm+W7uuiKgueCuSB8IGZhbHNlOiDkvb/nlKjljp/mnInmqKHlvI9cIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOiLsembhFByZWZhYu+8iOeUqOS6juiHquWKqOWIm+W7uu+8iVxuICAgICAgICBoZXJvUHJlZmFiOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLoi7Hpm4RQcmVmYWLvvIjkvb/nlKjpgInmi6nlnLrmma/mqKHlvI/ml7bpnIDopoHvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOaAqueJqVByZWZhYu+8iOeUqOS6juiHquWKqOWIm+W7uu+8iVxuICAgICAgICBtb25zdGVyUHJlZmFiOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmgKrnialQcmVmYWLvvIjkvb/nlKjpgInmi6nlnLrmma/mqKHlvI/ml7bpnIDopoHvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOiLsembhOeItuiKgueCue+8iOeUqOS6juiHquWKqOaOkuWFteW4g+mYte+8iVxuICAgICAgICBoZXJvUGFyZW50OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6Iux6ZuE54i26IqC54K577yI55So5LqO6Ieq5Yqo5o6S5YW15biD6Zi177yM6Iux6ZuE5Lya5pS+5Zyo5bem6L6577yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDmgKrnianniLboioLngrnvvIjnlKjkuo7oh6rliqjmjpLlhbXluIPpmLXvvIlcbiAgICAgICAgbW9uc3RlclBhcmVudDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuaAqueJqeeItuiKgueCue+8iOeUqOS6juiHquWKqOaOkuWFteW4g+mYte+8jOaAqueJqeS8muaUvuWcqOWPs+i+ue+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5o6S5YW15biD6Zi15Yy65Z+f77yI6Iux6ZuE5Zyo5bem6L6577yM5oCq54mp5Zyo5Y+z6L6577yJXG4gICAgICAgIGhlcm9BcmVhTGVmdDoge1xuICAgICAgICAgICAgZGVmYXVsdDogLTIwMCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6Iux6ZuE5Yy65Z+f5bem6L6555WM77yIWOWdkOagh++8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgaGVyb0FyZWFSaWdodDoge1xuICAgICAgICAgICAgZGVmYXVsdDogMCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6Iux6ZuE5Yy65Z+f5Y+z6L6555WM77yIWOWdkOagh++8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgaGVyb0FyZWFUb3A6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEwMCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6Iux6ZuE5Yy65Z+f5LiK6L6555WM77yIWeWdkOagh++8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgaGVyb0FyZWFCb3R0b206IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IC0xMDAsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuiLsembhOWMuuWfn+S4i+i+ueeVjO+8iFnlnZDmoIfvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIG1vbnN0ZXJBcmVhTGVmdDoge1xuICAgICAgICAgICAgZGVmYXVsdDogMCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5oCq54mp5Yy65Z+f5bem6L6555WM77yIWOWdkOagh++8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgbW9uc3RlckFyZWFSaWdodDoge1xuICAgICAgICAgICAgZGVmYXVsdDogMjAwLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmgKrnianljLrln5/lj7PovrnnlYzvvIhY5Z2Q5qCH77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICBtb25zdGVyQXJlYVRvcDoge1xuICAgICAgICAgICAgZGVmYXVsdDogMTAwLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmgKrnianljLrln5/kuIrovrnnlYzvvIhZ5Z2Q5qCH77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICBtb25zdGVyQXJlYUJvdHRvbToge1xuICAgICAgICAgICAgZGVmYXVsdDogLTEwMCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5oCq54mp5Yy65Z+f5LiL6L6555WM77yIWeWdkOagh++8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5Zu65a6a5Y2V5L2N5aSn5bCP77yI5omA5pyJ5Y2V5L2N5L2/55So55u45ZCM5aSn5bCP77yJXG4gICAgICAgIHVuaXRTY2FsZToge1xuICAgICAgICAgICAgZGVmYXVsdDogMS4wLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLljZXkvY3lm7rlrprnvKnmlL7lpKflsI/vvIjmiYDmnInljZXkvY3nu5/kuIDkvb/nlKjmraTlpKflsI/vvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOWNleS9jeS5i+mXtOeahOacgOWwj+mXtOmalOi3neemu++8iOmYsuatoumHjeWPoOWSjOivr+inpu+8iVxuICAgICAgICBtaW5Vbml0U3BhY2luZzoge1xuICAgICAgICAgICAgZGVmYXVsdDogMTIwLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLljZXkvY3kuYvpl7TnmoTmnIDlsI/pl7TpmpTot53nprvvvIjlg4/ntKDvvInvvIzpmLLmraLph43lj6Dlkozngrnlh7vor6/op6ZcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOa4uOaIj+e7k+adn+mdouadv+e7hOS7tu+8iOWPr+mAie+8jOWmguaenOS9v+eUqOWcuuaZr+i3s+i9rOWImeS4jemcgOimge+8iVxuICAgICAgICBnYW1lT3ZlclBhbmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5ri45oiP57uT5p2f6Z2i5p2/6IqC54K577yI5aaC5p6c5L2/55So5Zy65pmv6Lez6L2s5YiZ5LiN6ZyA6KaB77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDmmK/lkKblkK/nlKjmiJjmlpforrDlvZVcbiAgICAgICAgZW5hYmxlUmVjb3JkaW5nOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmmK/lkKblkK/nlKjmiJjmlpforrDlvZXlip/og71cIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOaImOaWl+WcuuaZr+WktOWDj+aYvuekuu+8iOW3puS4i+inkuWSjOWPs+S4i+inku+8iVxuICAgICAgICBoZXJvQXZhdGFyQ29udGFpbmVyOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5bem5L6n6Iux6ZuE5aS05YOP5a655Zmo6IqC54K577yI5bem5LiL6KeS77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICBtb25zdGVyQXZhdGFyQ29udGFpbmVyOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5Y+z5L6n5oCq54mp5aS05YOP5a655Zmo6IqC54K577yI5Y+z5LiL6KeS77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICBhdmF0YXJQcmVmYWI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWktOWDj1ByZWZhYu+8iOeUqOS6juWKqOaAgeWIm+W7uuWktOWDj++8jOS4jlNlbGVjdFNjZW5lVUnkvb/nlKjnm7jlkIznmoRQcmVmYWLvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIGhlcm9JY29uczoge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuU3ByaXRlRnJhbWVdLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLoi7Hpm4TlpLTlg4/otYTmupDliJfooajvvIjmjInpobrluo/vvJrmiJjlo6vjgIHms5XluIguLi7vvIzkuI5TZWxlY3RTY2VuZVVJ55u45ZCM77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICBtb25zdGVySWNvbnM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW2NjLlNwcml0ZUZyYW1lXSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5oCq54mp5aS05YOP6LWE5rqQ5YiX6KGo77yI5oyJ6aG65bqP77ya5oCq54mp44CBQm9zcy4uLu+8jOS4jlNlbGVjdFNjZW5lVUnnm7jlkIzvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIGF2YXRhclNpemU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDgwLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLlpLTlg4/mmL7npLrlpKflsI/vvIjlg4/ntKDvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIGF2YXRhclNwYWNpbmc6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEwLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLlpLTlg4/kuYvpl7TnmoTpl7Tot53vvIjlg4/ntKDvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOa4uOaIj+e7k+adn+WcuuaZr+WQjeensFxuICAgICAgICBnYW1lT3ZlclNjZW5lTmFtZToge1xuICAgICAgICAgICAgZGVmYXVsdDogXCJHYW1lT3ZlclNjZW5lXCIsXG4gICAgICAgICAgICB0b29sdGlwOiBcIua4uOaIj+e7k+adn+WcuuaZr+WQjeensO+8iOWmguaenOS4uuepuuWImeS9v+eUqOW9k+WJjeWcuuaZr+eahGdhbWVPdmVyUGFuZWzvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOaYr+WQpuS9v+eUqOWcuuaZr+i3s+i9rO+8iHRydWU6IOi3s+i9rOWIsOaWsOWcuuaZryB8IGZhbHNlOiDlnKjlvZPliY3lnLrmma/mmL7npLrpnaLmnb/vvIlcbiAgICAgICAgdXNlU2NlbmVUcmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmmK/lkKbkvb/nlKjlnLrmma/ot7PovazmmL7npLrmuLjmiI/nu5PmnZ/nlLvpnaJcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOWbnuaUvuaOp+WItuWZqO+8iOWPr+mAie+8iVxuICAgICAgICByZXBsYXlDb250cm9sbGVyOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5Zue5pS+5o6n5Yi25Zmo6IqC54K577yI5oyC6L295LqGUmVwbGF5Q29udHJvbGxlcue7hOS7tu+8iVwiXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjb25zdCBCYXR0bGVTeXN0ZW0gPSByZXF1aXJlKFwiQmF0dGxlU3lzdGVtXCIpO1xuICAgICAgICBjb25zdCBCYXR0bGVMb2dnZXJzID0gcmVxdWlyZShcIkJhdHRsZUxvZ2dlcnNcIik7XG4gICAgICAgIGNvbnN0IG11bGJlcnJ5MzIgPSByZXF1aXJlKFwicmFuZG9tXCIpO1xuICAgICAgICBjb25zdCB7IFNraWxsQ29uZmlnIH0gPSByZXF1aXJlKFwiU2tpbGxDb25maWdcIik7XG5cbiAgICAgICAgLy8g5L+d5a2Y5oqA6IO96YWN572u5L6b5ZCO57ut5L2/55SoXG4gICAgICAgIHRoaXMuU2tpbGxDb25maWcgPSBTa2lsbENvbmZpZztcblxuICAgICAgICB0aGlzLnJhbmQgPSBtdWxiZXJyeTMyKDEyMzQ1Nik7XG4gICAgICAgIHRoaXMubG9nZ2VyID0gbmV3IEJhdHRsZUxvZ2dlcnMoKTtcblxuICAgICAgICB0aGlzLmhlcm9zID0gW107XG4gICAgICAgIHRoaXMubW9uc3RlcnMgPSBbXTtcblxuICAgICAgICAvLyDliJ3lp4vljJblt7LnlJ/miJDkvY3nva7orrDlvZXvvIjnlKjkuo7pmLLmraLljZXkvY3ph43lj6DvvIlcbiAgICAgICAgdGhpcy5fZ2VuZXJhdGVkUG9zaXRpb25zID0ge1xuICAgICAgICAgICAgaGVybzogW10sXG4gICAgICAgICAgICBtb25zdGVyOiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIOaYr+WQpuato+WcqOWbnuaUvu+8iOeUqOS6juemgeeUqEJhdHRsZVN5c3RlbeeahHVwZGF0Ze+8iVxuICAgICAgICB0aGlzLmlzUmVwbGF5aW5nID0gZmFsc2U7XG5cbiAgICAgICAgLy8g5qOA5p+l5piv5ZCm5L2/55So6YCJ5oup5Zy65pmv5qih5byPXG4gICAgICAgIGlmICh3aW5kb3cuU2VsZWN0ZWRVbml0cyAmJiAod2luZG93LlNlbGVjdGVkVW5pdHMuaGVyb3MubGVuZ3RoID4gMCB8fCB3aW5kb3cuU2VsZWN0ZWRVbml0cy5tb25zdGVycy5sZW5ndGggPiAwKSkge1xuICAgICAgICAgICAgY2MubG9nKFwiW0JhdHRsZUNvbnRyb2xsZXJdIOajgOa1i+WIsOmAieaLqeWcuuaZr+aVsOaNru+8jOS9v+eUqOiHquWKqOWIm+W7uuiKgueCueaooeW8j1wiKTtcbiAgICAgICAgICAgIHRoaXMudXNlU2VsZWN0U2NlbmVNb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIOWIm+W7uuWNleS9je+8iOS7jumAieaLqeWcuuaZr+eahOaVsOaNruiHquWKqOWIm+W7uu+8iVxuICAgICAgICAgICAgdGhpcy5zcGF3blVuaXRzRnJvbVNlbGVjdGlvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5Yib5bu65Y2V5L2N77yI6L+Z5piv5Yid5aeL5YyWIEVDUyDnu4Tku7bnmoTlhbPplK7mraXpqqTvvIlcbiAgICAgICAgICAgIHRoaXMuc3Bhd25Vbml0cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5ri45oiP57uT5p2f5Zue6LCD5Ye95pWwXG4gICAgICAgIGNvbnN0IG9uR2FtZU92ZXIgPSAod2lubmVyLCB3aW5uZXJUZXh0KSA9PiB7XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSA9PT09PSBvbkdhbWVPdmVy5Zue6LCD6KKr6LCD55SoID09PT09YCk7XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSB3aW5uZXI6ICR7d2lubmVyfSwgd2lubmVyVGV4dDogJHt3aW5uZXJUZXh0fWApO1xuICAgICAgICAgICAgdGhpcy5fb25HYW1lT3Zlcih3aW5uZXIsIHdpbm5lclRleHQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIOWIm+W7uuaImOaWl+iusOW9leWZqO+8iOWmguaenOWQr+eUqO+8iVxuICAgICAgICBsZXQgcmVjb3JkZXIgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5lbmFibGVSZWNvcmRpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IEJhdHRsZVJlY29yZGVyID0gcmVxdWlyZShcIkJhdHRsZVJlY29yZGVyXCIpO1xuICAgICAgICAgICAgcmVjb3JkZXIgPSBuZXcgQmF0dGxlUmVjb3JkZXIoKTsvL+WIm+W7uuaImOaWl+iusOW9leWZqFxuICAgICAgICAgICAgdGhpcy5iYXR0bGVSZWNvcmRlciA9IHJlY29yZGVyOyAvLyDkv53lrZjlvJXnlKjvvIznlKjkuo7lkI7nu63orr/pl67orrDlvZVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaYvuekuuaImOaWl+WcuuaZr+WktOWDj++8iOS7jlNlbGVjdGVkVW5pdHPojrflj5bvvIlcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0QmF0dGxlQXZhdGFycygpO1xuICAgICAgICB9LCAwLjIpO1xuXG4gICAgICAgIC8vIOa4hemZpOWFqOWxgOaVsOaNru+8iOWcqOWktOWDj+aYvuekuuWujOaIkOWQjua4hemZpO+8iVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAod2luZG93LlNlbGVjdGVkVW5pdHMpIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJbQmF0dGxlQ29udHJvbGxlcl0g5riF6Zmkd2luZG93LlNlbGVjdGVkVW5pdHNcIik7XG4gICAgICAgICAgICAgICAgd2luZG93LlNlbGVjdGVkVW5pdHMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAwLjUpO1xuXG4gICAgICAgIC8vIOW8gOWni+abtOaWsOWktOWDj+minOiJsu+8iOagueaNruaAkuawlOWAvO+8iVxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuX3VwZGF0ZUFsbEF2YXRhckNvbG9ycywgMC4xKTsgLy8g5q+PMC4x56eS5qOA5p+l5LiA5qyhXG5cbiAgICAgICAgLy8g5Yib5bu65oiY5paX57O757ufXG4gICAgICAgIHRoaXMuYmF0dGxlU3lzdGVtID0gbmV3IEJhdHRsZVN5c3RlbShcbiAgICAgICAgICAgIHRoaXMuaGVyb3MsXG4gICAgICAgICAgICB0aGlzLm1vbnN0ZXJzLFxuICAgICAgICAgICAgdGhpcy5sb2dnZXIsXG4gICAgICAgICAgICB0aGlzLnJhbmQsXG4gICAgICAgICAgICBvbkdhbWVPdmVyLFxuICAgICAgICAgICAgcmVjb3JkZXJcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAvLyDmo4Dmn6XmmK/lkKbpnIDopoHoh6rliqjlvIDlp4vlm57mlL7vvIjku45HYW1lT3ZlclNjZW5l6Lez6L2s5Zue5p2l5pe277yJXG4gICAgICAgIC8vIOWinuWKoOW7tui/n+aXtumXtO+8jOehruS/neWNleS9jeWIm+W7uuWujOaIkO+8iOeJueWIq+aYr+S7jlNlbGVjdFNjZW5l6YCJ5oup55qE5Lq654mp77yJXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrQXV0b1JlcGxheSgpO1xuICAgICAgICB9LCAwLjUpOyAvLyDlu7bov58wLjXnp5LvvIznoa7kv53miYDmnInljZXkvY3pg73lt7LliJvlu7rlrozmiJBcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5qOA5p+l5piv5ZCm6ZyA6KaB6Ieq5Yqo5byA5aeL5Zue5pS+XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfY2hlY2tBdXRvUmVwbGF5KCkge1xuICAgICAgICBpZiAod2luZG93LkF1dG9TdGFydFJlcGxheSAmJiB3aW5kb3cuQXV0b1N0YXJ0UmVwbGF5LmVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZEtleSA9IHdpbmRvdy5BdXRvU3RhcnRSZXBsYXkucmVjb3JkS2V5O1xuICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g5qOA5rWL5Yiw6Ieq5Yqo5Zue5pS+5qCH5b+X77yM5YeG5aSH5byA5aeL5Zue5pS+OiAke3JlY29yZEtleX1gKTtcblxuICAgICAgICAgICAgLy8g6I635Y+WUmVwbGF5Q29udHJvbGxlclxuICAgICAgICAgICAgbGV0IHJlcGxheUNvbnRyb2xsZXIgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHRoaXMucmVwbGF5Q29udHJvbGxlcikge1xuICAgICAgICAgICAgICAgIHJlcGxheUNvbnRyb2xsZXIgPSB0aGlzLnJlcGxheUNvbnRyb2xsZXIuZ2V0Q29tcG9uZW50KFwiUmVwbGF5Q29udHJvbGxlclwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5bCd6K+V5LuO5Zy65pmv5Lit5p+l5om+XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xuICAgICAgICAgICAgICAgIGlmIChzY2VuZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYW52YXMgPSBzY2VuZS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbnZhcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVwbGF5Tm9kZSA9IGNhbnZhcy5nZXRDaGlsZEJ5TmFtZShcIlJlcGxheUNvbnRyb2xsZXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVwbGF5Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxheUNvbnRyb2xsZXIgPSByZXBsYXlOb2RlLmdldENvbXBvbmVudChcIlJlcGxheUNvbnRyb2xsZXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXBsYXlDb250cm9sbGVyICYmIHJlY29yZEtleSkge1xuICAgICAgICAgICAgICAgIC8vIOehruS/neS9v+eUqOW9k+WJjeWcuuaZr+eahOWNleS9jeWIl+ihqO+8iOS7jlNlbGVjdFNjZW5l6YCJ5oup55qE5Lq654mp77yJXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEhlcm9zID0gdGhpcy5oZXJvcyB8fCBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50TW9uc3RlcnMgPSB0aGlzLm1vbnN0ZXJzIHx8IFtdO1xuICAgICAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOW8gOWni+WbnuaUvu+8jOS9v+eUqOW9k+WJjeWcuuaZr+eahOWNleS9jeWIl+ihqCAtIOiLsembhDogJHtjdXJyZW50SGVyb3MubGVuZ3RofeS4qiwg5oCq54mpOiAke2N1cnJlbnRNb25zdGVycy5sZW5ndGh95LiqYCk7XG5cbiAgICAgICAgICAgICAgICAvLyDlvIDlp4vlm57mlL7vvIjkvKDlhaXlvZPliY3lnLrmma/nmoTljZXkvY3liJfooajvvIlcbiAgICAgICAgICAgICAgICByZXBsYXlDb250cm9sbGVyLmxvYWRBbmRSZXBsYXkocmVjb3JkS2V5LCBjdXJyZW50SGVyb3MsIGN1cnJlbnRNb25zdGVycyk7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g6Ieq5Yqo5Zue5pS+5bey5ZCv5YqoYCk7XG5cbiAgICAgICAgICAgICAgICAvLyDmuIXpmaToh6rliqjlm57mlL7moIflv5dcbiAgICAgICAgICAgICAgICB3aW5kb3cuQXV0b1N0YXJ0UmVwbGF5ID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtCYXR0bGVDb250cm9sbGVyXSDml6Dms5Xoh6rliqjlvIDlp4vlm57mlL5gKTtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihgICAgLSBSZXBsYXlDb250cm9sbGVyOiAke3JlcGxheUNvbnRyb2xsZXIgPyAn5om+5YiwJyA6ICfmnKrmib7liLAnfWApO1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGAgICAtIHJlY29yZEtleTogJHtyZWNvcmRLZXkgPyByZWNvcmRLZXkgOiAn5LiN5a2Y5ZyoJ31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDojrflj5blnLrmma/kuK3nmoTop5LoibLoioLngrlcbiAgICAgKi9cbiAgICBzcGF3blVuaXRzKCkge1xuICAgICAgICAvLyDmoLnmja7mqKHlvI/ojrflj5boioLngrlcbiAgICAgICAgaWYgKHRoaXMudXNlUGFyZW50TW9kZSkge1xuICAgICAgICAgICAgLy8g5qih5byPMTog5LuO54i26IqC54K56I635Y+W5a2Q6IqC54K5XG4gICAgICAgICAgICB0aGlzLl9nZXRVbml0c0Zyb21QYXJlbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOaooeW8jzI6IOS9v+eUqOmihOWFiOmFjee9rueahOiKgueCueaVsOe7hFxuICAgICAgICAgICAgdGhpcy5fZ2V0VW5pdHNGcm9tQXJyYXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOS4uuaJgOacieinkuiJsuWIneWni+WMluaImOaWl+aVsOaNruWSjOWKqOeUu1xuICAgICAgICAvLyDliJ3lp4vljJbmiYDmnInmiJjmlpfljZXkvY3vvIjmlK/mjIHlvILmraXvvIlcbiAgICAgICAgdGhpcy5faW5pdEFsbFVuaXRzKCkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNjLmVycm9yKGBbQmF0dGxlQ29udHJvbGxlcl0g5Yid5aeL5YyW5oiY5paX5Y2V5L2N5aSx6LSlOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5LuO6YCJ5oup5Zy65pmv55qE5pWw5o2u6Ieq5Yqo5Yib5bu66IqC54K55bm25o6S5YW15biD6Zi1XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzcGF3blVuaXRzRnJvbVNlbGVjdGlvbigpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cuU2VsZWN0ZWRVbml0cykge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJbQmF0dGxlQ29udHJvbGxlcl0gd2luZG93LlNlbGVjdGVkVW5pdHMg5LiN5a2Y5Zyo77yM5peg5rOV6Ieq5Yqo5Yib5bu66IqC54K5XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRVbml0cyA9IHdpbmRvdy5TZWxlY3RlZFVuaXRzO1xuICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDlvIDlp4voh6rliqjliJvlu7roioLngrkgLSDoi7Hpm4Q6ICR7c2VsZWN0ZWRVbml0cy5oZXJvcy5sZW5ndGh95LiqLCDmgKrniak6ICR7c2VsZWN0ZWRVbml0cy5tb25zdGVycy5sZW5ndGh95LiqYCk7XG5cbiAgICAgICAgLy8g5Yib5bu66Iux6ZuE6IqC54K5XG4gICAgICAgIGlmIChzZWxlY3RlZFVuaXRzLmhlcm9zICYmIHNlbGVjdGVkVW5pdHMuaGVyb3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmhlcm9QcmVmYWIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIltCYXR0bGVDb250cm9sbGVyXSDmnKrorr7nva5oZXJvUHJlZmFi77yM5peg5rOV5Yib5bu66Iux6ZuE6IqC54K5XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFVuaXRzLmhlcm9zLmZvckVhY2goKHVuaXREYXRhLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZXJvTm9kZSA9IHRoaXMuX2NyZWF0ZVVuaXROb2RlKHVuaXREYXRhLCBcImhlcm9cIiwgaW5kZXgsIHNlbGVjdGVkVW5pdHMuaGVyb3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhlcm9Ob2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlcm9zLnB1c2goaGVyb05vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDliJvlu7rmgKrnianoioLngrlcbiAgICAgICAgaWYgKHNlbGVjdGVkVW5pdHMubW9uc3RlcnMgJiYgc2VsZWN0ZWRVbml0cy5tb25zdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubW9uc3RlclByZWZhYikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiW0JhdHRsZUNvbnRyb2xsZXJdIOacquiuvue9rm1vbnN0ZXJQcmVmYWLvvIzml6Dms5XliJvlu7rmgKrnianoioLngrlcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkVW5pdHMubW9uc3RlcnMuZm9yRWFjaCgodW5pdERhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vbnN0ZXJOb2RlID0gdGhpcy5fY3JlYXRlVW5pdE5vZGUodW5pdERhdGEsIFwibW9uc3RlclwiLCBpbmRleCwgc2VsZWN0ZWRVbml0cy5tb25zdGVycy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobW9uc3Rlck5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9uc3RlcnMucHVzaChtb25zdGVyTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOS4uuaJgOacieinkuiJsuWIneWni+WMluaImOaWl+aVsOaNruWSjOWKqOeUu1xuICAgICAgICAvLyDliJ3lp4vljJbmiYDmnInmiJjmlpfljZXkvY3vvIjmlK/mjIHlvILmraXvvIlcbiAgICAgICAgdGhpcy5faW5pdEFsbFVuaXRzKCkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNjLmVycm9yKGBbQmF0dGxlQ29udHJvbGxlcl0g5Yid5aeL5YyW5oiY5paX5Y2V5L2N5aSx6LSlOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yib5bu65Y2V5L2N6IqC54K5XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdW5pdERhdGEgLSDljZXkvY3mlbDmja5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGVhbSAtIOmYn+S8jeexu+Wei++8iFwiaGVyb1wiIOaIliBcIm1vbnN0ZXJcIu+8iVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIOe0ouW8lVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0b3RhbENvdW50IC0g5oC75pWw6YePXG4gICAgICogQHJldHVybnMge2NjLk5vZGV9IOWIm+W7uueahOWNleS9jeiKgueCuVxuICAgICAqL1xuICAgIF9jcmVhdGVVbml0Tm9kZSh1bml0RGF0YSwgdGVhbSwgaW5kZXgsIHRvdGFsQ291bnQpIHtcbiAgICAgICAgLy8g5LyY5YWI5L2/55SodW5pdERhdGHkuK3nmoRwcmVmYWLvvIjov5nmmK/lrozmlbTnmoTop5LoibJQcmVmYWLvvIzljIXlkKvmiYDmnInnu4Tku7bvvIlcbiAgICAgICAgLy8g5aaC5p6c5rKh5pyJ77yM5YaN5L2/55So6YCa55So55qEaGVyb1ByZWZhYi9tb25zdGVyUHJlZmFi5L2c5Li65ZCO5aSHXG4gICAgICAgIGxldCBwcmVmYWIgPSB1bml0RGF0YS5wcmVmYWI7XG4gICAgICAgIGxldCBwcmVmYWJTb3VyY2UgPSBcInVuaXREYXRhLnByZWZhYlwiO1xuXG4gICAgICAgIGlmICghcHJlZmFiKSB7XG4gICAgICAgICAgICAvLyDlkI7lpIfmlrnmoYjvvJrkvb/nlKjpgJrnlKjnmoRQcmVmYWJcbiAgICAgICAgICAgIHByZWZhYiA9IHRlYW0gPT09IFwiaGVyb1wiID8gdGhpcy5oZXJvUHJlZmFiIDogdGhpcy5tb25zdGVyUHJlZmFiO1xuICAgICAgICAgICAgcHJlZmFiU291cmNlID0gYCR7dGVhbX1QcmVmYWJgO1xuXG4gICAgICAgICAgICBpZiAoIXByZWZhYikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbQmF0dGxlQ29udHJvbGxlcl0g4pyXIOacquiuvue9riR7dGVhbX1QcmVmYWLvvIzkuJR1bml0RGF0YS5wcmVmYWLkuZ/kuLrnqbrvvIzml6Dms5XliJvlu7oke3RlYW196IqC54K5YCk7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtCYXR0bGVDb250cm9sbGVyXSDor7fpgInmi6nku6XkuIvmlrnmoYjkuYvkuIDvvJpgKTtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihgW0JhdHRsZUNvbnRyb2xsZXJdICAgMS4g5ZyoVW5pdERhdGFDb25maWfkuK3kuLpcIiR7dW5pdERhdGEubmFtZX1cIuiuvue9rnByZWZhYu+8iOaOqOiNkO+8iWApO1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbQmF0dGxlQ29udHJvbGxlcl0gICAyLiDlnKhCYXR0bGVDb250cm9sbGVy57uE5Lu25Lit57uR5a6aJHt0ZWFtfVByZWZhYmApO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKGBbQmF0dGxlQ29udHJvbGxlcl0g4pqg77iPIHVuaXREYXRhLnByZWZhYuS4uuepuu+8jOS9v+eUqOmAmueUqCR7dGVhbX1QcmVmYWI6ICR7dW5pdERhdGEubmFtZX1gKTtcbiAgICAgICAgICAgICAgICBjYy53YXJuKGBbQmF0dGxlQ29udHJvbGxlcl0gICDlu7rorq7vvJrlsIblnLrmma/kuK3lrozmlbTnmoRcIiR7dW5pdERhdGEubmFtZX1cIuiKgueCueS/neWtmOS4ulByZWZhYu+8jOW5tuWcqFVuaXREYXRhQ29uZmln5Lit57uR5a6aYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDinJMg5L2/55SodW5pdERhdGEucHJlZmFi5Yib5bu66IqC54K5OiAke3VuaXREYXRhLm5hbWV9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDlvIDlp4vliJvlu7oke3RlYW196IqC54K5OiAke3VuaXREYXRhLm5hbWV9ICjkvb/nlKgke3ByZWZhYlNvdXJjZX0pYCk7XG5cbiAgICAgICAgLy8g5a6e5L6L5YyWUHJlZmFiXG4gICAgICAgIGNvbnN0IHVuaXROb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgdW5pdE5vZGUubmFtZSA9IHVuaXREYXRhLm5hbWU7XG5cbiAgICAgICAgLy8g56Gu5L+d6IqC54K55Y+v6KeBXG4gICAgICAgIHVuaXROb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHVuaXROb2RlLm9wYWNpdHkgPSAyNTU7XG5cbiAgICAgICAgLy8g6K6+572u54i26IqC54K5XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRlYW0gPT09IFwiaGVyb1wiID8gdGhpcy5oZXJvUGFyZW50IDogdGhpcy5tb25zdGVyUGFyZW50O1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICAvLyDnoa7kv53niLboioLngrnlj6/op4FcbiAgICAgICAgICAgIGlmICghcGFyZW50LmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGNjLndhcm4oYFtCYXR0bGVDb250cm9sbGVyXSDimqDvuI8gJHt0ZWFtfVBhcmVudOacqua/gOa0u++8jOW3suiHquWKqOa/gOa0u2ApO1xuICAgICAgICAgICAgICAgIHBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmVudC5vcGFjaXR5ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY2Mud2FybihgW0JhdHRsZUNvbnRyb2xsZXJdIOKaoO+4jyAke3RlYW19UGFyZW506YCP5piO5bqm5Li6MO+8jOW3suiuvue9ruS4ujI1NWApO1xuICAgICAgICAgICAgICAgIHBhcmVudC5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyZW50LmFkZENoaWxkKHVuaXROb2RlKTtcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdICR7dGVhbX3oioLngrnlt7Lmt7vliqDliLDniLboioLngrk6ICR7cGFyZW50Lm5hbWV9LCDniLboioLngrnkvY3nva46ICgke3BhcmVudC54fSwgJHtwYXJlbnQueX0pYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzmsqHmnInniLboioLngrnvvIzmt7vliqDliLBDYW52YXNcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XG4gICAgICAgICAgICBpZiAoY2FudmFzKSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLmFkZENoaWxkKHVuaXROb2RlKTtcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSAke3RlYW196IqC54K55bey5re75Yqg5YiwQ2FudmFzYCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbQmF0dGxlQ29udHJvbGxlcl0g4pyXIOacquaJvuWIsENhbnZhc+iKgueCue+8jOaXoOazlea3u+WKoCR7dGVhbX3oioLngrlgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiHquWKqOaOkuWFteW4g+mYte+8iOS8mOWFiOS9v+eUqHVuaXREYXRh5Lit55qE5L2N572u77yM5ZCm5YiZ5L2/55So6ZqP5py65L2N572u77yJXG4gICAgICAgIGxldCBwb3NpdGlvbjtcbiAgICAgICAgaWYgKHVuaXREYXRhLnBvc2l0aW9uICYmIHVuaXREYXRhLnBvc2l0aW9uLnggIT09IHVuZGVmaW5lZCAmJiB1bml0RGF0YS5wb3NpdGlvbi55ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIOS9v+eUqOS/neWtmOeahOS9jee9ru+8iOS7juaImOaWl+iusOW9leaBouWkjeeahO+8iVxuICAgICAgICAgICAgcG9zaXRpb24gPSBjYy52Mih1bml0RGF0YS5wb3NpdGlvbi54LCB1bml0RGF0YS5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOS9v+eUqOS/neWtmOeahOS9jee9rjogKCR7cG9zaXRpb24ueC50b0ZpeGVkKDEpfSwgJHtwb3NpdGlvbi55LnRvRml4ZWQoMSl9KWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5L2/55So6ZqP5py65L2N572u77yI5paw5Yib5bu655qE5Y2V5L2N77yJXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuX2NhbGN1bGF0ZUZvcm1hdGlvblBvc2l0aW9uKHRlYW0sIGluZGV4LCB0b3RhbENvdW50KTtcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOS9v+eUqOmaj+acuuS9jee9rjogKCR7cG9zaXRpb24ueC50b0ZpeGVkKDEpfSwgJHtwb3NpdGlvbi55LnRvRml4ZWQoMSl9KWApO1xuICAgICAgICB9XG4gICAgICAgIHVuaXROb2RlLnNldFBvc2l0aW9uKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xuXG4gICAgICAgIC8vIOiuvue9ruWbuuWumuWkp+Wwj1xuICAgICAgICB1bml0Tm9kZS5zZXRTY2FsZSh0aGlzLnVuaXRTY2FsZSwgdGhpcy51bml0U2NhbGUsIDEuMCk7XG4gICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOiuvue9riR7dGVhbX3oioLngrnlm7rlrprlpKflsI86ICR7dGhpcy51bml0U2NhbGV9eCR7dGhpcy51bml0U2NhbGV9YCk7XG5cbiAgICAgICAgLy8g6K6+572u5Yid5aeL6Z2i5ZCR5pa55ZCRXG4gICAgICAgIC8vIOiLsembhOmdouWQkeWPs+i+ue+8iOato3NjYWxlWO+8ie+8jOaAqueJqemdouWQkeW3pui+ue+8iOi0n3NjYWxlWO+8iVxuICAgICAgICBpZiAodGVhbSA9PT0gXCJoZXJvXCIpIHtcbiAgICAgICAgICAgIHVuaXROb2RlLnNjYWxlWCA9IE1hdGguYWJzKHVuaXROb2RlLnNjYWxlWCk7IC8vIOehruS/neS4uuato++8iOmdouWQkeWPs+i+ue+8iVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdW5pdE5vZGUuc2NhbGVYID0gLU1hdGguYWJzKHVuaXROb2RlLnNjYWxlWCk7IC8vIOehruS/neS4uui0n++8iOmdouWQkeW3pui+ue+8iVxuICAgICAgICB9XG4gICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOiuvue9riR7dGVhbX3oioLngrnliJ3lp4vpnaLlkJE6IHNjYWxlWD0ke3VuaXROb2RlLnNjYWxlWH1gKTtcblxuICAgICAgICAvLyDkv53lrZjljZXkvY3mlbDmja7liLDoioLngrnvvIjnlKjkuo7lkI7nu63liJ3lp4vljJbvvIlcbiAgICAgICAgdW5pdE5vZGUuX3VuaXREYXRhID0gdW5pdERhdGE7XG4gICAgICAgIHVuaXROb2RlLl90ZWFtID0gdGVhbTtcblxuICAgICAgICAvLyDmo4Dmn6XoioLngrnmmK/lkKbmnInlv4XpnIDnmoTnu4Tku7ZcbiAgICAgICAgY29uc3Qgc3RhdHMgPSB1bml0Tm9kZS5nZXRDb21wb25lbnQoXCJTdGF0c0NvbXBvbmVudFwiKTtcbiAgICAgICAgY29uc3QgdGVhbUNvbXAgPSB1bml0Tm9kZS5nZXRDb21wb25lbnQoXCJUZWFtQ29tcG9uZW50XCIpO1xuICAgICAgICBjb25zdCBza2lsbHMgPSB1bml0Tm9kZS5nZXRDb21wb25lbnQoXCJTa2lsbENvbXBvbmVudFwiKTtcbiAgICAgICAgY29uc3Qgc2tlbGV0b24gPSB1bml0Tm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuXG4gICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdICR7dGVhbX3oioLngrnnu4Tku7bmo4Dmn6U6ICR7dW5pdERhdGEubmFtZX1gKTtcbiAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gICBTdGF0c0NvbXBvbmVudDogJHtzdGF0cyA/ICfinJMnIDogJ+Kclyd9YCk7XG4gICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdICAgVGVhbUNvbXBvbmVudDogJHt0ZWFtQ29tcCA/ICfinJMnIDogJ+Kclyd9YCk7XG4gICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdICAgU2tpbGxDb21wb25lbnQ6ICR7c2tpbGxzID8gJ+KckycgOiAn4pyXJ31gKTtcbiAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gICBTcGluZSBTa2VsZXRvbjogJHtza2VsZXRvbiA/ICfinJMnIDogJ+Kclyd9YCk7XG5cbiAgICAgICAgaWYgKCFzdGF0cykge1xuICAgICAgICAgICAgY2MuZXJyb3IoYFtCYXR0bGVDb250cm9sbGVyXSDinJcgJHt0ZWFtfeiKgueCuee8uuWwkVN0YXRzQ29tcG9uZW5057uE5Lu2OiAke3VuaXREYXRhLm5hbWV9YCk7XG4gICAgICAgICAgICBjYy5lcnJvcihgW0JhdHRsZUNvbnRyb2xsZXJdICAg6K+35ZyoUHJlZmFiIFwiJHtwcmVmYWIubmFtZX1cIiDnmoTmoLnoioLngrnkuIrmt7vliqBTdGF0c0NvbXBvbmVudOe7hOS7tmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGVhbUNvbXApIHtcbiAgICAgICAgICAgIGNjLmVycm9yKGBbQmF0dGxlQ29udHJvbGxlcl0g4pyXICR7dGVhbX3oioLngrnnvLrlsJFUZWFtQ29tcG9uZW5057uE5Lu2OiAke3VuaXREYXRhLm5hbWV9YCk7XG4gICAgICAgICAgICBjYy5lcnJvcihgW0JhdHRsZUNvbnRyb2xsZXJdICAg6K+35ZyoUHJlZmFiIFwiJHtwcmVmYWIubmFtZX1cIiDnmoTmoLnoioLngrnkuIrmt7vliqBUZWFtQ29tcG9uZW5057uE5Lu2YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFza2lsbHMpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKGBbQmF0dGxlQ29udHJvbGxlcl0g4pyXICR7dGVhbX3oioLngrnnvLrlsJFTa2lsbENvbXBvbmVudOe7hOS7tjogJHt1bml0RGF0YS5uYW1lfWApO1xuICAgICAgICAgICAgY2MuZXJyb3IoYFtCYXR0bGVDb250cm9sbGVyXSAgIOivt+WcqFByZWZhYiBcIiR7cHJlZmFiLm5hbWV9XCIg55qE5qC56IqC54K55LiK5re75YqgU2tpbGxDb21wb25lbnTnu4Tku7ZgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNrZWxldG9uKSB7XG4gICAgICAgICAgICBjYy53YXJuKGBbQmF0dGxlQ29udHJvbGxlcl0g4pqg77iPICR7dGVhbX3oioLngrnnvLrlsJFTcGluZSBTa2VsZXRvbue7hOS7tjogJHt1bml0RGF0YS5uYW1lfWApO1xuICAgICAgICAgICAgY2Mud2FybihgW0JhdHRsZUNvbnRyb2xsZXJdICAg6IqC54K55Y+v6IO95rKh5pyJ5Yqo55S75pi+56S677yM6K+35ZyoUHJlZmFiIFwiJHtwcmVmYWIubmFtZX1cIiDkuIrmt7vliqBzcC5Ta2VsZXRvbue7hOS7tmApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5qOA5p+lU3BpbmXotYTmupDmmK/lkKbliqDovb1cbiAgICAgICAgICAgIGlmICghc2tlbGV0b24uc2tlbGV0b25EYXRhKSB7XG4gICAgICAgICAgICAgICAgY2Mud2FybihgW0JhdHRsZUNvbnRyb2xsZXJdIOKaoO+4jyAke3RlYW196IqC54K555qEU3BpbmUgU2tlbGV0b27nu4Tku7bmsqHmnIlza2VsZXRvbkRhdGE6ICR7dW5pdERhdGEubmFtZX1gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gICBTcGluZei1hOa6kDogJHtza2VsZXRvbi5za2VsZXRvbkRhdGEubmFtZSB8fCAn5bey5Yqg6L29J31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOajgOafpeiKgueCueWGheWuueWkp+Wwj1xuICAgICAgICBjb25zdCBjb250ZW50U2l6ZSA9IHVuaXROb2RlLmdldENvbnRlbnRTaXplKCk7XG4gICAgICAgIGlmIChjb250ZW50U2l6ZS53aWR0aCA9PT0gMCAmJiBjb250ZW50U2l6ZS5oZWlnaHQgPT09IDApIHtcbiAgICAgICAgICAgIGNjLndhcm4oYFtCYXR0bGVDb250cm9sbGVyXSDimqDvuI8gJHt0ZWFtfeiKgueCueWGheWuueWkp+Wwj+S4ujA6ICR7dW5pdERhdGEubmFtZX1gKTtcbiAgICAgICAgICAgIGNjLndhcm4oYFtCYXR0bGVDb250cm9sbGVyXSAgIOi/memAmuW4uOaEj+WRs+edgOiKgueCueayoeacieinhuinieWGheWuue+8iOWmglNwcml0ZeaIllNwaW5l77yJYCk7XG4gICAgICAgICAgICBjYy53YXJuKGBbQmF0dGxlQ29udHJvbGxlcl0gICDor7fmo4Dmn6VQcmVmYWIgXCIke3ByZWZhYi5uYW1lfVwiIOaYr+WQpuaciVNwcml0ZeaIllNwaW5l5a2Q6IqC54K5YCk7XG5cbiAgICAgICAgICAgIC8vIOWwneivleS7juWtkOiKgueCueiOt+WPluWkp+Wwj1xuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB1bml0Tm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGlmIChjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1heFdpZHRoID0gMCwgbWF4SGVpZ2h0ID0gMDtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGRTaXplID0gY2hpbGQuZ2V0Q29udGVudFNpemUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGRMb2NhbFBvcyA9IGNoaWxkLmdldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZFNpemUud2lkdGggPiBtYXhXaWR0aCkgbWF4V2lkdGggPSBjaGlsZFNpemUud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZFNpemUuaGVpZ2h0ID4gbWF4SGVpZ2h0KSBtYXhIZWlnaHQgPSBjaGlsZFNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSAgIOWtkOiKgueCuTogJHtjaGlsZC5uYW1lfSwg5aSn5bCPOiAke2NoaWxkU2l6ZS53aWR0aH14JHtjaGlsZFNpemUuaGVpZ2h0fSwg5L2N572uOiAoJHtjaGlsZExvY2FsUG9zLnh9LCAke2NoaWxkTG9jYWxQb3MueX0pYCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKG1heFdpZHRoID4gMCB8fCBtYXhIZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdICAg5bu66K6u6K6+572u6IqC54K55YaF5a655aSn5bCPOiAke21heFdpZHRofXgke21heEhlaWdodH1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLndhcm4oYFtCYXR0bGVDb250cm9sbGVyXSAgIFByZWZhYiBcIiR7cHJlZmFiLm5hbWV9XCIg5rKh5pyJ5Lu75L2V5a2Q6IqC54K5YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmnIDnu4jml6Xlv5fovpPlh7pcbiAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g4pyTIOWIm+W7uiR7dGVhbX3oioLngrnlrozmiJA6ICR7dW5pdERhdGEubmFtZX1gKTtcbiAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gICDmnKzlnLDkvY3nva46ICgke3Bvc2l0aW9uLngudG9GaXhlZCgxKX0sICR7cG9zaXRpb24ueS50b0ZpeGVkKDEpfSlgKTtcbiAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gICDoioLngrnlpKflsI86ICR7Y29udGVudFNpemUud2lkdGgudG9GaXhlZCgxKX14JHtjb250ZW50U2l6ZS5oZWlnaHQudG9GaXhlZCgxKX1gKTtcbiAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gICDoioLngrlhY3RpdmU6ICR7dW5pdE5vZGUuYWN0aXZlfSwgb3BhY2l0eTogJHt1bml0Tm9kZS5vcGFjaXR5fWApO1xuICAgICAgICBpZiAodW5pdE5vZGUucGFyZW50KSB7XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSAgIOeItuiKgueCuTogJHt1bml0Tm9kZS5wYXJlbnQubmFtZX0sIOeItuiKgueCueS9jee9rjogKCR7dW5pdE5vZGUucGFyZW50Lnh9LCAke3VuaXROb2RlLnBhcmVudC55fSlgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bml0Tm9kZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6K6h566X5o6S5YW15biD6Zi15L2N572u77yI5bim6Ze06ZqU5qOA5p+l77yM6Ziy5q2i6YeN5Y+g77yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGVhbSAtIOmYn+S8jeexu+Wei1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIOe0ouW8lVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0b3RhbENvdW50IC0g5oC75pWw6YePXG4gICAgICogQHJldHVybnMge2NjLlZlYzJ9IOS9jee9ruWdkOagh1xuICAgICAqL1xuICAgIF9jYWxjdWxhdGVGb3JtYXRpb25Qb3NpdGlvbih0ZWFtLCBpbmRleCwgdG90YWxDb3VudCkge1xuICAgICAgICBsZXQgeCwgeTtcbiAgICAgICAgbGV0IHJhbmdlWCwgcmFuZ2VZO1xuICAgICAgICBsZXQgYXJlYUxlZnQsIGFyZWFSaWdodCwgYXJlYVRvcCwgYXJlYUJvdHRvbTtcblxuICAgICAgICAvLyDmoLnmja7pmJ/kvI3nsbvlnovnoa7lrprljLrln5/ojIPlm7RcbiAgICAgICAgaWYgKHRlYW0gPT09IFwiaGVyb1wiKSB7XG4gICAgICAgICAgICBhcmVhTGVmdCA9IHRoaXMuaGVyb0FyZWFMZWZ0O1xuICAgICAgICAgICAgYXJlYVJpZ2h0ID0gdGhpcy5oZXJvQXJlYVJpZ2h0O1xuICAgICAgICAgICAgYXJlYVRvcCA9IHRoaXMuaGVyb0FyZWFUb3A7XG4gICAgICAgICAgICBhcmVhQm90dG9tID0gdGhpcy5oZXJvQXJlYUJvdHRvbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFyZWFMZWZ0ID0gdGhpcy5tb25zdGVyQXJlYUxlZnQ7XG4gICAgICAgICAgICBhcmVhUmlnaHQgPSB0aGlzLm1vbnN0ZXJBcmVhUmlnaHQ7XG4gICAgICAgICAgICBhcmVhVG9wID0gdGhpcy5tb25zdGVyQXJlYVRvcDtcbiAgICAgICAgICAgIGFyZWFCb3R0b20gPSB0aGlzLm1vbnN0ZXJBcmVhQm90dG9tO1xuICAgICAgICB9XG5cbiAgICAgICAgcmFuZ2VYID0gYXJlYVJpZ2h0IC0gYXJlYUxlZnQ7XG4gICAgICAgIHJhbmdlWSA9IGFyZWFUb3AgLSBhcmVhQm90dG9tO1xuXG4gICAgICAgIC8vIOajgOafpeWMuuWfn+iuvue9ruaYr+WQpuWQiOeQhlxuICAgICAgICBpZiAocmFuZ2VYIDw9IDAgfHwgcmFuZ2VZIDw9IDApIHtcbiAgICAgICAgICAgIGNjLndhcm4oYFtCYXR0bGVDb250cm9sbGVyXSDimqDvuI8gJHt0ZWFtfeWMuuWfn+iuvue9ruS4jeWQiOeQhjogTGVmdD0ke2FyZWFMZWZ0fSwgUmlnaHQ9JHthcmVhUmlnaHR9LCBUb3A9JHthcmVhVG9wfSwgQm90dG9tPSR7YXJlYUJvdHRvbX1gKTtcbiAgICAgICAgICAgIC8vIOS9v+eUqOm7mOiupOWAvFxuICAgICAgICAgICAgaWYgKHRlYW0gPT09IFwiaGVyb1wiKSB7XG4gICAgICAgICAgICAgICAgeCA9IC0yMDA7XG4gICAgICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHggPSAyMDA7XG4gICAgICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2MudjIoeCwgeSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDojrflj5bor6XpmJ/kvI3lt7LnlJ/miJDnmoTkvY3nva7liJfooahcbiAgICAgICAgY29uc3QgZXhpc3RpbmdQb3NpdGlvbnMgPSB0aGlzLl9nZW5lcmF0ZWRQb3NpdGlvbnNbdGVhbV0gfHwgW107XG4gICAgICAgIGNvbnN0IG1pblNwYWNpbmcgPSB0aGlzLm1pblVuaXRTcGFjaW5nIHx8IDEwMDsgIC8vIOacgOWwj+mXtOmalOi3neemu1xuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDEwMDsgIC8vIOacgOWkmuWwneivleasoeaVsO+8iOWinuWKoOWwneivleasoeaVsO+8jOaPkOmrmOmaj+acuuWIhuW4g+aIkOWKn+eOh++8iVxuXG4gICAgICAgIC8vIOWwneivleeUn+aIkOS4gOS4quS4jeS4juW3suacieS9jee9rumHjeWPoOeahOS9jee9rlxuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBsZXQgdmFsaWRQb3NpdGlvbiA9IGZhbHNlO1xuXG4gICAgICAgIHdoaWxlICghdmFsaWRQb3NpdGlvbiAmJiBhdHRlbXB0cyA8IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAvLyDnlJ/miJDpmo/mnLrkvY3nva7vvIjkv53mjIHljp/mnInnmoTpmo/mnLrliIbluIPpgLvovpHvvIlcbiAgICAgICAgICAgIHggPSBhcmVhTGVmdCArIE1hdGgucmFuZG9tKCkgKiByYW5nZVg7XG4gICAgICAgICAgICB5ID0gYXJlYUJvdHRvbSArIE1hdGgucmFuZG9tKCkgKiByYW5nZVk7XG5cbiAgICAgICAgICAgIC8vIOajgOafpeaYr+WQpuS4juW3suacieS9jee9ruWkqui/kVxuICAgICAgICAgICAgdmFsaWRQb3NpdGlvbiA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4aXN0aW5nUG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdQb3MgPSBleGlzdGluZ1Bvc2l0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5wb3coeCAtIGV4aXN0aW5nUG9zLngsIDIpICsgTWF0aC5wb3coeSAtIGV4aXN0aW5nUG9zLnksIDIpXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IG1pblNwYWNpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRQb3NpdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlpoLmnpzlsJ3or5XlpJrmrKHlkI7ku43nhLbmib7kuI3liLDlkIjpgILkvY3nva7vvIzkvb/nlKjmlLnov5vnmoTlkI7lpIfmlrnmoYjvvIjkv53mjIHpmo/mnLrliIbluIPpo47moLzvvIlcbiAgICAgICAgaWYgKCF2YWxpZFBvc2l0aW9uKSB7XG4gICAgICAgICAgICBjYy53YXJuKGBbQmF0dGxlQ29udHJvbGxlcl0g4pqg77iPICR7dGVhbX3ljZXkvY0ke2luZGV4feaXoOazleaJvuWIsOWQiOmAguS9jee9ru+8iOWwneivlSR7YXR0ZW1wdHN95qyh77yJ77yM5L2/55So5pS56L+b55qE5ZCO5aSH5pa55qGIYCk7XG5cbiAgICAgICAgICAgIC8vIOaUuei/m+eahOWQjuWkh+aWueahiO+8muWcqOW3suacieS9jee9ruWRqOWbtOWvu+aJvuepuumame+8jOS/neaMgemaj+acuuWIhuW4g+eahOaEn+iniVxuICAgICAgICAgICAgLy8g5aaC5p6c5Yy65Z+f6Laz5aSf5aSn77yM5bCd6K+V5Zyo5bey5pyJ5L2N572u5ZGo5Zu05a+75om+56m66ZqZXG4gICAgICAgICAgICBsZXQgZm91bmRHYXAgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IGdhcEF0dGVtcHRzID0gMzA7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGdhcEF0dGVtcHQgPSAwOyBnYXBBdHRlbXB0IDwgZ2FwQXR0ZW1wdHMgJiYgIWZvdW5kR2FwOyBnYXBBdHRlbXB0KyspIHtcbiAgICAgICAgICAgICAgICAvLyDpmo/mnLrpgInmi6nkuIDkuKrlt7LmnInkvY3nva7kvZzkuLrlj4LogIPngrlcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdQb3NpdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWZQb3MgPSBleGlzdGluZ1Bvc2l0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBleGlzdGluZ1Bvc2l0aW9ucy5sZW5ndGgpXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyDlnKjlj4LogIPngrnlkajlm7Tpmo/mnLrlgY/np7vvvIjlgY/np7vot53nprvoh7PlsJHkuLptaW5TcGFjaW5n77yJXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvZmZzZXREaXN0YW5jZSA9IG1pblNwYWNpbmcgKyBNYXRoLnJhbmRvbSgpICogbWluU3BhY2luZzsgLy8g5YGP56e76Led56a777yabWluU3BhY2luZyDliLAgMiptaW5TcGFjaW5nXG5cbiAgICAgICAgICAgICAgICAgICAgeCA9IHJlZlBvcy54ICsgTWF0aC5jb3MoYW5nbGUpICogb2Zmc2V0RGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgICAgIHkgPSByZWZQb3MueSArIE1hdGguc2luKGFuZ2xlKSAqIG9mZnNldERpc3RhbmNlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIOehruS/neWcqOWMuuWfn+WGhVxuICAgICAgICAgICAgICAgICAgICB4ID0gTWF0aC5tYXgoYXJlYUxlZnQsIE1hdGgubWluKGFyZWFSaWdodCwgeCkpO1xuICAgICAgICAgICAgICAgICAgICB5ID0gTWF0aC5tYXgoYXJlYUJvdHRvbSwgTWF0aC5taW4oYXJlYVRvcCwgeSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIOajgOafpeaYr+WQpua7oei2s+mXtOmalOimgeaxglxuICAgICAgICAgICAgICAgICAgICBmb3VuZEdhcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhpc3RpbmdQb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUG9zID0gZXhpc3RpbmdQb3NpdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdyh4IC0gZXhpc3RpbmdQb3MueCwgMikgKyBNYXRoLnBvdyh5IC0gZXhpc3RpbmdQb3MueSwgMilcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IG1pblNwYWNpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZEdhcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDlpoLmnpzku43nhLbmib7kuI3liLDnqbrpmpnvvIzkvb/nlKjnroDljZXnmoTnvZHmoLzluIPlsYDvvIjmnIDlkI7nmoTlkI7lpIfmlrnmoYjvvIlcbiAgICAgICAgICAgIGlmICghZm91bmRHYXApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkQ29scyA9IE1hdGguY2VpbChNYXRoLnNxcnQodG90YWxDb3VudCkpOyAgLy8g5YiX5pWwXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZFJvd3MgPSBNYXRoLmNlaWwodG90YWxDb3VudCAvIGdyaWRDb2xzKTsgIC8vIOihjOaVsFxuXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZFggPSBpbmRleCAlIGdyaWRDb2xzO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRZID0gTWF0aC5mbG9vcihpbmRleCAvIGdyaWRDb2xzKTtcblxuICAgICAgICAgICAgICAgIC8vIOiuoeeul+e9keagvOmXtOi3ne+8iOehruS/neS4jei2hei/h+WMuuWfn+iMg+WbtO+8iVxuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRTcGFjaW5nWCA9IE1hdGgubWluKHJhbmdlWCAvIChncmlkQ29scyArIDEpLCBtaW5TcGFjaW5nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkU3BhY2luZ1kgPSBNYXRoLm1pbihyYW5nZVkgLyAoZ3JpZFJvd3MgKyAxKSwgbWluU3BhY2luZyk7XG5cbiAgICAgICAgICAgICAgICAvLyDorqHnrpfnvZHmoLzkvY3nva7vvIjlnKjlkIToh6rljLrln5/lhoXlsYXkuK3mjpLliJfvvIzkv53mjIHlt6blj7PliIbnprvvvIlcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbEdyaWRXaWR0aCA9IChncmlkQ29scyAtIDEpICogZ3JpZFNwYWNpbmdYO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsR3JpZEhlaWdodCA9IChncmlkUm93cyAtIDEpICogZ3JpZFNwYWNpbmdZO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0WCA9IGFyZWFMZWZ0ICsgKHJhbmdlWCAtIHRvdGFsR3JpZFdpZHRoKSAvIDI7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRZID0gYXJlYUJvdHRvbSArIChyYW5nZVkgLSB0b3RhbEdyaWRIZWlnaHQpIC8gMjtcblxuICAgICAgICAgICAgICAgIHggPSBzdGFydFggKyBncmlkWCAqIGdyaWRTcGFjaW5nWDtcbiAgICAgICAgICAgICAgICB5ID0gc3RhcnRZICsgZ3JpZFkgKiBncmlkU3BhY2luZ1k7XG5cbiAgICAgICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSAke3RlYW195Y2V5L2NJHtpbmRleH3kvb/nlKjnvZHmoLzluIPlsYDvvIjmnIDlkI7lkI7lpIfvvIk6IOe9keagvCgke2dyaWRYfSwgJHtncmlkWX0pLCDkvY3nva46ICgke3gudG9GaXhlZCgxKX0sICR7eS50b0ZpeGVkKDEpfSlgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gJHt0ZWFtfeWNleS9jSR7aW5kZXh95L2/55So56m66ZqZ5p+l5om+OiDkvY3nva46ICgke3gudG9GaXhlZCgxKX0sICR7eS50b0ZpeGVkKDEpfSlgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdICR7dGVhbX3kvY3nva7orqHnrpc6IOWMuuWfn1ske2FyZWFMZWZ0fSwgJHthcmVhUmlnaHR9XXhbJHthcmVhQm90dG9tfSwgJHthcmVhVG9wfV0sIOe7k+aenDogKCR7eC50b0ZpeGVkKDEpfSwgJHt5LnRvRml4ZWQoMSl9KSwg5bCd6K+V5qyh5pWwOiAke2F0dGVtcHRzfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5bCG5paw5L2N572u5re75Yqg5Yiw5bey55Sf5oiQ5L2N572u5YiX6KGoXG4gICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gY2MudjIoeCwgeSk7XG4gICAgICAgIGlmICghdGhpcy5fZ2VuZXJhdGVkUG9zaXRpb25zW3RlYW1dKSB7XG4gICAgICAgICAgICB0aGlzLl9nZW5lcmF0ZWRQb3NpdGlvbnNbdGVhbV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9nZW5lcmF0ZWRQb3NpdGlvbnNbdGVhbV0ucHVzaChuZXdQb3NpdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIG5ld1Bvc2l0aW9uO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDku47niLboioLngrnojrflj5bmiYDmnInlrZDoioLngrnkvZzkuLrmiJjmlpfljZXkvY1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9nZXRVbml0c0Zyb21QYXJlbnQoKSB7XG4gICAgICAgIC8vIOiOt+WPluiLsembhFxuICAgICAgICBpZiAodGhpcy5oZXJvUGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLmhlcm9zID0gdGhpcy5oZXJvUGFyZW50LmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5hY3RpdmUpO1xuICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g5LuOIGhlcm9QYXJlbnQg6I635Y+W5YiwICR7dGhpcy5oZXJvcy5sZW5ndGh9IOS4quiLsembhGApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6I635Y+W5oCq54mpXG4gICAgICAgIGlmICh0aGlzLm1vbnN0ZXJQYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMubW9uc3RlcnMgPSB0aGlzLm1vbnN0ZXJQYXJlbnQuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmFjdGl2ZSk7XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDku44gbW9uc3RlclBhcmVudCDojrflj5bliLAgJHt0aGlzLm1vbnN0ZXJzLmxlbmd0aH0g5Liq5oCq54mpYCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5LuO6YWN572u55qE6IqC54K55pWw57uE6I635Y+W5oiY5paX5Y2V5L2NXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZ2V0VW5pdHNGcm9tQXJyYXkoKSB7XG4gICAgICAgIC8vIOiOt+WPluiLsembhO+8iOi/h+a7pOaOieaXoOaViOWSjOacqua/gOa0u+eahOiKgueCue+8iVxuICAgICAgICB0aGlzLmhlcm9zID0gdGhpcy5oZXJvTm9kZXMuZmlsdGVyKG5vZGUgPT4gbm9kZSAmJiBub2RlLmlzVmFsaWQgJiYgbm9kZS5hY3RpdmUpO1xuICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDku44gaGVyb05vZGVzIOiOt+WPluWIsCAke3RoaXMuaGVyb3MubGVuZ3RofSDkuKroi7Hpm4RgKTtcblxuICAgICAgICAvLyDojrflj5bmgKrnialcbiAgICAgICAgdGhpcy5tb25zdGVycyA9IHRoaXMubW9uc3Rlck5vZGVzLmZpbHRlcihub2RlID0+IG5vZGUgJiYgbm9kZS5pc1ZhbGlkICYmIG5vZGUuYWN0aXZlKTtcbiAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g5LuOIG1vbnN0ZXJOb2RlcyDojrflj5bliLAgJHt0aGlzLm1vbnN0ZXJzLmxlbmd0aH0g5Liq5oCq54mpYCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluaJgOacieaImOaWl+WNleS9jVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgX2luaXRBbGxVbml0cygpIHtcbiAgICAgICAgY29uc3QgeyBTa2lsbENvbmZpZyB9ID0gdGhpcztcblxuICAgICAgICAvLyDop5LoibLmlbDmja7phY3nva7vvIjmoLnmja7lkI3np7DljLnphY3vvIlcbiAgICAgICAgY29uc3QgdW5pdERhdGFDb25maWcgPSB7XG4gICAgICAgICAgICBcIuaImOWjq1wiOiB7XG4gICAgICAgICAgICAgICAgaHA6IDEyMCxcbiAgICAgICAgICAgICAgICBhdHRhY2s6IDgsXG4gICAgICAgICAgICAgICAgZGVmZW5zZTogMTAsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDEyLFxuICAgICAgICAgICAgICAgIGNyaXQ6IDAuMTUsXG4gICAgICAgICAgICAgICAgc2tpbGxzOiBbXG4gICAgICAgICAgICAgICAgICAgIFNraWxsQ29uZmlnLm5vcm1hbEF0dGFjayxcbiAgICAgICAgICAgICAgICAgICAgU2tpbGxDb25maWcuc3R1blNraWxsLFxuICAgICAgICAgICAgICAgICAgICBTa2lsbENvbmZpZy5zaGllbGRBbGxpZXNcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCLms5XluIhcIjoge1xuICAgICAgICAgICAgICAgIGhwOiA4MCxcbiAgICAgICAgICAgICAgICBhdHRhY2s6IDEyLFxuICAgICAgICAgICAgICAgIGRlZmVuc2U6IDQsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDgsXG4gICAgICAgICAgICAgICAgY3JpdDogMC4xLFxuICAgICAgICAgICAgICAgIG1pc3M6IDAuMSxcbiAgICAgICAgICAgICAgICBza2lsbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgU2tpbGxDb25maWcubm9ybWFsQXR0YWNrLFxuICAgICAgICAgICAgICAgICAgICBTa2lsbENvbmZpZy5maXJlYmFsbFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIuaAqueJqVwiOiB7XG4gICAgICAgICAgICAgICAgaHA6IDgwLFxuICAgICAgICAgICAgICAgIGF0dGFjazogMTAsXG4gICAgICAgICAgICAgICAgZGVmZW5zZTogNSxcbiAgICAgICAgICAgICAgICBzcGVlZDogMTUsXG4gICAgICAgICAgICAgICAgc2tpbGxzOiBbXG4gICAgICAgICAgICAgICAgICAgIFNraWxsQ29uZmlnLm5vcm1hbEF0dGFjayxcbiAgICAgICAgICAgICAgICAgICAgU2tpbGxDb25maWcuYmVhc3RSYWdlXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiQm9zc1wiOiB7XG4gICAgICAgICAgICAgICAgaHA6IDE1MCxcbiAgICAgICAgICAgICAgICBhdHRhY2s6IDEyLFxuICAgICAgICAgICAgICAgIGRlZmVuc2U6IDgsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDEwLFxuICAgICAgICAgICAgICAgIHNraWxsczogW1xuICAgICAgICAgICAgICAgICAgICBTa2lsbENvbmZpZy5ub3JtYWxBdHRhY2ssXG4gICAgICAgICAgICAgICAgICAgIFNraWxsQ29uZmlnLndhckNyeVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyDliJ3lp4vljJboi7Hpm4RcbiAgICAgICAgZm9yIChsZXQgbm9kZSBvZiB0aGlzLmhlcm9zKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzmmK/ku47pgInmi6nlnLrmma/liJvlu7rnmoToioLngrnvvIzkvb/nlKjkv53lrZjnmoTljZXkvY3mlbDmja5cbiAgICAgICAgICAgIGxldCBkYXRhO1xuICAgICAgICAgICAgaWYgKG5vZGUuX3VuaXREYXRhKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IG5vZGUuX3VuaXREYXRhO1xuICAgICAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOS9v+eUqOmAieaLqeWcuuaZr+eahOWNleS9jeaVsOaNruWIneWni+WMljogJHtub2RlLm5hbWV9YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEgPSB1bml0RGF0YUNvbmZpZ1tub2RlLm5hbWVdIHx8IHRoaXMuX2dldERlZmF1bHREYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmluaXRFbnRpdHkobm9kZSwgZGF0YSwgXCJoZXJvXCIpO1xuXG4gICAgICAgICAgICAvLyDorr7nva7liJ3lp4vlvoXmnLrliqjnlLtcbiAgICAgICAgICAgIGNvbnN0IHNrZWxldG9uID0gbm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgaWYgKHNrZWxldG9uKSB7XG4gICAgICAgICAgICAgICAgc2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIEFuaW1hdGlvblN0YXRlLldBSVQsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDliJ3lp4vljJboi7Hpm4Q6ICR7bm9kZS5uYW1lfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5Yid5aeL5YyW5oCq54mpXG4gICAgICAgIGZvciAobGV0IG5vZGUgb2YgdGhpcy5tb25zdGVycykge1xuICAgICAgICAgICAgLy8g5aaC5p6c5piv5LuO6YCJ5oup5Zy65pmv5Yib5bu655qE6IqC54K577yM5L2/55So5L+d5a2Y55qE5Y2V5L2N5pWw5o2uXG4gICAgICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgICAgIGlmIChub2RlLl91bml0RGF0YSkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBub2RlLl91bml0RGF0YTtcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDkvb/nlKjpgInmi6nlnLrmma/nmoTljZXkvY3mlbDmja7liJ3lp4vljJY6ICR7bm9kZS5uYW1lfWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gdW5pdERhdGFDb25maWdbbm9kZS5uYW1lXSB8fCB0aGlzLl9nZXREZWZhdWx0RGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5pbml0RW50aXR5KG5vZGUsIGRhdGEsIFwibW9uc3RlclwiKTtcblxuICAgICAgICAgICAgLy8g6K6+572u5Yid5aeL5b6F5py65Yqo55S7XG4gICAgICAgICAgICBjb25zdCBza2VsZXRvbiA9IG5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgICAgIGlmIChza2VsZXRvbikge1xuICAgICAgICAgICAgICAgIHNrZWxldG9uLnNldEFuaW1hdGlvbigwLCBBbmltYXRpb25TdGF0ZS5XQUlULCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g5Yid5aeL5YyW5oCq54mpOiAke25vZGUubmFtZX1gKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDojrflj5bpu5jorqTmlbDmja7vvIjlpoLmnpzmsqHmnInphY3nva7vvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9nZXREZWZhdWx0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhwOiAxMDAsXG4gICAgICAgICAgICBhdHRhY2s6IDEwLFxuICAgICAgICAgICAgZGVmZW5zZTogNSxcbiAgICAgICAgICAgIHNwZWVkOiAxMCxcbiAgICAgICAgICAgIGNyaXQ6IDAuMSxcbiAgICAgICAgICAgIHNraWxsczogW3RoaXMuU2tpbGxDb25maWcubm9ybWFsQXR0YWNrXVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBhc3luYyBpbml0RW50aXR5KG5vZGUsIGRhdGEsIHRlYW1OYW1lKSB7XG4gICAgICAgIGNvbnN0IHN0YXRzID0gbm9kZS5nZXRDb21wb25lbnQoXCJTdGF0c0NvbXBvbmVudFwiKTtcbiAgICAgICAgY29uc3QgdGVhbSA9IG5vZGUuZ2V0Q29tcG9uZW50KFwiVGVhbUNvbXBvbmVudFwiKTtcbiAgICAgICAgY29uc3Qgc2tpbGxzID0gbm9kZS5nZXRDb21wb25lbnQoXCJTa2lsbENvbXBvbmVudFwiKTtcblxuICAgICAgICAvLyDmo4Dmn6Xlv4XpnIDnu4Tku7bmmK/lkKblrZjlnKhcbiAgICAgICAgaWYgKCFzdGF0cykge1xuICAgICAgICAgICAgY2MuZXJyb3IoYOKdjCBbQmF0dGxlQ29udHJvbGxlcl0g6IqC54K5IFwiJHtub2RlLm5hbWV9XCIg57y65bCRIFN0YXRzQ29tcG9uZW50IOe7hOS7tiFgKTtcbiAgICAgICAgICAgIGNjLmVycm9yKGAgICDor7flnKjoioLngrnkuIrmt7vliqAgU3RhdHNDb21wb25lbnQg57uE5Lu2YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0ZWFtKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihg4p2MIFtCYXR0bGVDb250cm9sbGVyXSDoioLngrkgXCIke25vZGUubmFtZX1cIiDnvLrlsJEgVGVhbUNvbXBvbmVudCDnu4Tku7YhYCk7XG4gICAgICAgICAgICBjYy5lcnJvcihgICAg6K+35Zyo6IqC54K55LiK5re75YqgIFRlYW1Db21wb25lbnQg57uE5Lu2YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFza2lsbHMpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKGDinYwgW0JhdHRsZUNvbnRyb2xsZXJdIOiKgueCuSBcIiR7bm9kZS5uYW1lfVwiIOe8uuWwkSBTa2lsbENvbXBvbmVudCDnu4Tku7YhYCk7XG4gICAgICAgICAgICBjYy5lcnJvcihgICAg6K+35Zyo6IqC54K55LiK5re75YqgIFNraWxsQ29tcG9uZW50IOe7hOS7tmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6YeN6KaB77ya5YWI5Yqg6L295L+d5a2Y55qE562J57qn5pWw5o2u77yM5Lul5L6/5q2j56Gu6K6+572u5Z+656GA5bGe5oCnXG4gICAgICAgIGNvbnN0IENoYXJhY3RlckRhdGFNYW5hZ2VyID0gcmVxdWlyZShcIkNoYXJhY3RlckRhdGFNYW5hZ2VyXCIpO1xuICAgICAgICBjb25zdCBzYXZlZERhdGEgPSBhd2FpdCBDaGFyYWN0ZXJEYXRhTWFuYWdlci5sb2FkQ2hhcmFjdGVyTGV2ZWwoZGF0YS5uYW1lIHx8IG5vZGUubmFtZSk7XG5cbiAgICAgICAgLy8g5aaC5p6c5pyJ5L+d5a2Y55qE5Z+656GA5bGe5oCn5pWw5o2u77yM5LyY5YWI5L2/55So5L+d5a2Y55qE5Z+656GA5bGe5oCn77yI55So5LqO5q2j56Gu6K6h566X562J57qn5Yqg5oiQ77yJXG4gICAgICAgIGlmIChzYXZlZERhdGEpIHtcbiAgICAgICAgICAgIGlmIChzYXZlZERhdGEuYmFzZUhwKSBzdGF0cy5iYXNlSHAgPSBzYXZlZERhdGEuYmFzZUhwO1xuICAgICAgICAgICAgaWYgKHNhdmVkRGF0YS5iYXNlQXR0YWNrKSBzdGF0cy5iYXNlQXR0YWNrID0gc2F2ZWREYXRhLmJhc2VBdHRhY2s7XG4gICAgICAgICAgICBpZiAoc2F2ZWREYXRhLmJhc2VEZWZlbnNlKSBzdGF0cy5iYXNlRGVmZW5zZSA9IHNhdmVkRGF0YS5iYXNlRGVmZW5zZTtcbiAgICAgICAgICAgIGlmIChzYXZlZERhdGEuYmFzZVNwZWVkKSBzdGF0cy5iYXNlU3BlZWQgPSBzYXZlZERhdGEuYmFzZVNwZWVkO1xuICAgICAgICAgICAgaWYgKHNhdmVkRGF0YS5iYXNlQ3JpdCAhPT0gdW5kZWZpbmVkKSBzdGF0cy5iYXNlQ3JpdCA9IHNhdmVkRGF0YS5iYXNlQ3JpdDtcbiAgICAgICAgICAgIGlmIChzYXZlZERhdGEuYmFzZU1pc3MgIT09IHVuZGVmaW5lZCkgc3RhdHMuYmFzZU1pc3MgPSBzYXZlZERhdGEuYmFzZU1pc3M7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzmsqHmnInkv53lrZjnmoTmlbDmja7vvIzkvb/nlKhkYXRh5Lit55qE5Z+656GA5bGe5oCnXG4gICAgICAgICAgICBpZiAoZGF0YS5ocCkgc3RhdHMuYmFzZUhwID0gZGF0YS5ocDtcbiAgICAgICAgICAgIGlmIChkYXRhLmF0dGFjaykgc3RhdHMuYmFzZUF0dGFjayA9IGRhdGEuYXR0YWNrO1xuICAgICAgICAgICAgaWYgKGRhdGEuZGVmZW5zZSkgc3RhdHMuYmFzZURlZmVuc2UgPSBkYXRhLmRlZmVuc2U7XG4gICAgICAgICAgICBpZiAoZGF0YS5zcGVlZCkgc3RhdHMuYmFzZVNwZWVkID0gZGF0YS5zcGVlZDtcbiAgICAgICAgICAgIGlmIChkYXRhLmNyaXQgIT09IHVuZGVmaW5lZCkgc3RhdHMuYmFzZUNyaXQgPSBkYXRhLmNyaXQ7XG4gICAgICAgICAgICBpZiAoZGF0YS5taXNzICE9PSB1bmRlZmluZWQpIHN0YXRzLmJhc2VNaXNzID0gZGF0YS5taXNzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5by65Yi26K6+572u5pyA5aSn5oCS5rCU5YC85Li6MTIw77yI6KaG55uWUHJlZmFi5Lit55qE6buY6K6k5YC877yJXG4gICAgICAgIHN0YXRzLm1heFJhZ2UgPSAxMjA7XG4gICAgICAgIHN0YXRzLnJhZ2UgPSAwOyAvLyDph43nva7lvZPliY3mgJLmsJTlgLxcblxuICAgICAgICAvLyDliJ3lp4vljJbnrYnnuqfns7vnu5/vvIjlv4XpobvlnKjorr7nva7lhbbku5blsZ7mgKfkuYvliY3vvIzlm6DkuLrnrYnnuqfliqDmiJDkvJrph43mlrDorqHnrpfmiYDmnInlsZ7mgKfvvIlcbiAgICAgICAgLy8g6YeN6KaB77ya5L2/55SoZGF0YS5uYW1l77yI6KeS6Imy5Y6f5aeL5ZCN56ew77yJ5p2l5Yqg6L295L+d5a2Y55qE562J57qn5pWw5o2uXG4gICAgICAgIGNvbnN0IExldmVsU3lzdGVtID0gcmVxdWlyZShcIkxldmVsU3lzdGVtXCIpO1xuXG4gICAgICAgIC8vIOWmguaenOacieS/neWtmOeahOaVsOaNru+8jOS9v+eUqOS/neWtmOeahOetiee6p+WSjOe7j+mqjOWAvO+8m+WQpuWImeS9v+eUqOS8oOWFpeeahOWAvOaIlum7mOiupOWAvFxuICAgICAgICBjb25zdCBpbml0aWFsTGV2ZWwgPSBzYXZlZERhdGEgPyAoc2F2ZWREYXRhLmxldmVsIHx8IGRhdGEubGV2ZWwgfHwgMSkgOiAoZGF0YS5sZXZlbCB8fCAxKTtcbiAgICAgICAgY29uc3QgaW5pdGlhbEV4cCA9IHNhdmVkRGF0YSA/IChzYXZlZERhdGEuZXhwIHx8IGRhdGEuZXhwIHx8IDApIDogKGRhdGEuZXhwIHx8IDApO1xuXG4gICAgICAgIC8vIOWIneWni+WMluetiee6p++8iOS4jeiHquWKqOS7juWtmOWCqOWKoOi9ve+8jOWboOS4uuaIkeS7rOW3sue7j+aJi+WKqOWKoOi9veS6hu+8iVxuICAgICAgICAvLyDov5nkvJrosIPnlKhfYXBwbHlMZXZlbEJvbnVz77yM5qC55o2u562J57qn6K6h566X5a6e6ZmF5bGe5oCn5YC877yIbWF4SHAsIGF0dGFja+etie+8iVxuICAgICAgICBMZXZlbFN5c3RlbS5pbml0TGV2ZWwobm9kZSwgaW5pdGlhbExldmVsLCBpbml0aWFsRXhwLCBmYWxzZSk7XG5cbiAgICAgICAgLy8g4q2QIOW6lOeUqOijheWkh+WxnuaAp+WKoOaIkO+8iOaImOaWl+S4reS9v+eUqOeahCBTdGF0cyDkuZ/opoHluKbkuIroo4XlpIfmlYjmnpzvvIlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXJhY3Rlck5hbWUgPSBkYXRhLm5hbWUgfHwgbm9kZS5fb3JpZ2luYWxDaGFyYWN0ZXJOYW1lIHx8IG5vZGUubmFtZTtcbiAgICAgICAgICAgIGlmIChjaGFyYWN0ZXJOYW1lICYmIHN0YXRzLmFwcGx5RXF1aXBtZW50Qm9udXNlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvbnVzZXMgPSBhd2FpdCB0aGlzLl9nZXRFcXVpcG1lbnRCb251c2VzKGNoYXJhY3Rlck5hbWUpO1xuICAgICAgICAgICAgICAgIHN0YXRzLmFwcGx5RXF1aXBtZW50Qm9udXNlcyhib251c2VzKTtcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDlt7LkuLogJHtjaGFyYWN0ZXJOYW1lfSDlupTnlKjoo4XlpIfliqDmiJA6YCwgYm9udXNlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNjLndhcm4oYFtCYXR0bGVDb250cm9sbGVyXSDlupTnlKjoo4XlpIfliqDmiJDml7blh7rplJk6ICR7ZS5tZXNzYWdlfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6K6+572u5b2T5YmN55Sf5ZG95YC85Li65pyA5aSn55Sf5ZG95YC877yI5ruh6KGA77yJXG4gICAgICAgIHN0YXRzLmhwID0gc3RhdHMubWF4SHA7XG5cbiAgICAgICAgLy8g6K6+572u5YW25LuW54m55q6K5bGe5oCn77yI6L+Z5Lqb5bGe5oCn5LiN5Y+X562J57qn5Yqg5oiQ5b2x5ZON77yJXG4gICAgICAgIGlmIChzdGF0cy5pbW11bmUgPT09IDAgJiYgZGF0YS5pbW11bmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc3RhdHMuaW1tdW5lID0gZGF0YS5pbW11bmU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDkv53lrZjljp/lp4vop5LoibLlkI3np7DvvIjnlKjkuo7lkI7nu63kv53lrZjmlbDmja7vvIlcbiAgICAgICAgaWYgKGRhdGEubmFtZSkge1xuICAgICAgICAgICAgbm9kZS5fb3JpZ2luYWxDaGFyYWN0ZXJOYW1lID0gZGF0YS5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g4q2QIOWIneWni+WMluaKgOiDve+8iOS8mOWFiOS7juacjeWKoeWZqOWKoOi9ve+8jOWQpuWImeS9v+eUqGRhdGHkuK3nmoTmioDog73vvIlcbiAgICAgICAgbGV0IHNraWxsc1RvSW5pdCA9IGRhdGEuc2tpbGxzIHx8IFtdO1xuXG4gICAgICAgIC8vIOWwneivleS7juacjeWKoeWZqOWKoOi9veaKgOiDveaVsOaNrlxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgU2tpbGxEYXRhTWFuYWdlciA9IHJlcXVpcmUoXCJTa2lsbERhdGFNYW5hZ2VyXCIpO1xuICAgICAgICAgICAgY29uc3QgY2hhcmFjdGVyTmFtZSA9IGRhdGEubmFtZSB8fCBub2RlLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBzYXZlZFNraWxscyA9IGF3YWl0IFNraWxsRGF0YU1hbmFnZXIubG9hZENoYXJhY3RlclNraWxscyhjaGFyYWN0ZXJOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHNhdmVkU2tpbGxzICYmIHNhdmVkU2tpbGxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyDirZAg5bCG5L+d5a2Y55qE5oqA6IO9SUTovazmjaLkuLrlrozmlbTnmoTmioDog73phY3nva5cbiAgICAgICAgICAgICAgICBjb25zdCB7IFNraWxsQ29uZmlnIH0gPSByZXF1aXJlKFwiU2tpbGxDb25maWdcIik7XG4gICAgICAgICAgICAgICAgc2tpbGxzVG9Jbml0ID0gc2F2ZWRTa2lsbHMubWFwKHNraWxsRGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOagueaNruaKgOiDvUlE5LuOU2tpbGxDb25maWfkuK3ojrflj5blrozmlbTphY3nva5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2tpbGxJZCA9IHNraWxsRGF0YS5pZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNraWxsQ29uZmlnID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAvLyDmn6Xmib7lr7nlupTnmoTmioDog73phY3nva5cbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoU2tpbGxDb25maWcpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChTa2lsbENvbmZpZ1trZXldLmlkID09PSBza2lsbElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpbGxDb25maWcgPSBTa2lsbENvbmZpZ1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2tpbGxDb25maWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2tpbGxDb25maWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZVJhZ2U6IHNraWxsRGF0YS5yZXF1aXJlUmFnZSB8fCBza2lsbENvbmZpZy5yZXF1aXJlUmFnZSB8fCAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2Mud2FybihgW0JhdHRsZUNvbnRyb2xsZXJdIOacquaJvuWIsOaKgOiDvemFjee9rjogaWQ9JHtza2lsbElkfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5maWx0ZXIoc2tpbGwgPT4gc2tpbGwgIT09IG51bGwpOyAvLyDov4fmu6TmjonmnKrmib7liLDnmoTmioDog71cblxuICAgICAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOKckyDku47mnI3liqHlmajliqDovb3mioDog706ICR7Y2hhcmFjdGVyTmFtZX0sIOaVsOmHjz0ke3NraWxsc1RvSW5pdC5sZW5ndGh9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjYy53YXJuKGBbQmF0dGxlQ29udHJvbGxlcl0g5Yqg6L295oqA6IO95pWw5o2u5aSx6LSl77yM5L2/55So6buY6K6k5oqA6IO9OiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDliJ3lp4vljJbmioDog71cbiAgICAgICAgaWYgKHNraWxsc1RvSW5pdCAmJiBza2lsbHNUb0luaXQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2tpbGxzLmluaXQoc2tpbGxzVG9Jbml0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiuvue9rumYn+S8jVxuICAgICAgICB0ZWFtLnRlYW0gPSB0ZWFtTmFtZTtcblxuICAgICAgICAvLyDliJ3lp4vljJbooYDmnaHmmL7npLrvvIjlj6/og73kuI3lrZjlnKjooYDmnaHnu4Tku7bvvIlcbiAgICAgICAgaWYgKHN0YXRzLnVwZGF0ZUhlYWx0aEJhcikge1xuICAgICAgICAgICAgc3RhdHMudXBkYXRlSGVhbHRoQmFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjYy5sb2coYOKchSBbQmF0dGxlQ29udHJvbGxlcl0gJHtub2RlLm5hbWV9IOWIneWni+WMluaIkOWKnyAoJHt0ZWFtTmFtZX0pIC0gTHYuJHtzdGF0cy5sZXZlbH0sIEhQOiR7c3RhdHMuaHB9LCBBVEs6JHtzdGF0cy5hdHRhY2t9LCBERUY6JHtzdGF0cy5kZWZlbnNlfSwgU1BEOiR7c3RhdHMuc3BlZWR9YCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOagueaNruinkuiJsuijheWkh+iuoeeul+WxnuaAp+WKoOaIkO+8iOaUuy/pmLIv6YCf77yJ77yM5L6b5oiY5paX5Yid5aeL5YyW5L2/55SoXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3Rlck5hbWVcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7YXR0YWNrOm51bWJlciwgZGVmZW5zZTpudW1iZXIsIHNwZWVkOm51bWJlcn0+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgX2dldEVxdWlwbWVudEJvbnVzZXMoY2hhcmFjdGVyTmFtZSkge1xuICAgICAgICBjb25zdCBib251c2VzID0geyBhdHRhY2s6IDAsIGRlZmVuc2U6IDAsIHNwZWVkOiAwIH07XG4gICAgICAgIGlmICghY2hhcmFjdGVyTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGJvbnVzZXM7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgRXF1aXBtZW50RGF0YU1hbmFnZXIgPSByZXF1aXJlKFwiRXF1aXBtZW50RGF0YU1hbmFnZXJcIik7XG4gICAgICAgICAgICBjb25zdCBJdGVtQ29uZmlnID0gcmVxdWlyZShcIkl0ZW1Db25maWdcIik7XG4gICAgICAgICAgICBjb25zdCB7IHNsb3RzIH0gPSBhd2FpdCBFcXVpcG1lbnREYXRhTWFuYWdlci5nZXRFcXVpcG1lbnQoY2hhcmFjdGVyTmFtZSk7XG4gICAgICAgICAgICBpZiAoIXNsb3RzIHx8ICFBcnJheS5pc0FycmF5KHNsb3RzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBib251c2VzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW1JZCBvZiBzbG90cykge1xuICAgICAgICAgICAgICAgIGlmICghaXRlbUlkKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjZmcgPSBJdGVtQ29uZmlnLmdldEl0ZW1CeUlkKGl0ZW1JZCk7XG4gICAgICAgICAgICAgICAgaWYgKCFjZmcgfHwgIWNmZy5lZmZlY3RUeXBlKSBjb250aW51ZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBTdHJpbmcoY2ZnLmVmZmVjdFR5cGUpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdiA9IGNmZy5lZmZlY3RWYWx1ZSB8fCAwO1xuICAgICAgICAgICAgICAgIGlmICh0ID09PSBcImF0dGFja1wiKSBib251c2VzLmF0dGFjayArPSB2O1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHQgPT09IFwiZGVmZW5zZVwiKSBib251c2VzLmRlZmVuc2UgKz0gdjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0ID09PSBcInNwZWVkXCIpIGJvbnVzZXMuc3BlZWQgKz0gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY2Mud2FybihgW0JhdHRsZUNvbnRyb2xsZXJdIOiuoeeul+ijheWkh+WKoOaIkOWksei0pSgke2NoYXJhY3Rlck5hbWV9KTogJHtlLm1lc3NhZ2V9YCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYm9udXNlcztcbiAgICB9LFxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICAvLyDlpoLmnpzmraPlnKjlm57mlL7vvIzkuI3miafooYxCYXR0bGVTeXN0ZW3nmoR1cGRhdGXvvIjpgb/lhY3lhrLnqoHvvIlcbiAgICAgICAgaWYgKHRoaXMuaXNSZXBsYXlpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5iYXR0bGVTeXN0ZW0gfHwgdGhpcy5iYXR0bGVTeXN0ZW0uZmluaXNoZWQpIHJldHVybjtcblxuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBkdCA9IChub3cgLSB0aGlzLmxhc3RUaW1lKSAvIDEwMDA7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSBub3c7XG5cbiAgICAgICAgdGhpcy5iYXR0bGVTeXN0ZW0udXBkYXRlKGR0KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5ri45oiP57uT5p2f5aSE55CGXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHdpbm5lciAtIOiDnOWIqeaWue+8iFwiaGVyb1wiIOaIliBcIm1vbnN0ZXJcIu+8iVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB3aW5uZXJUZXh0IC0g6IOc5Yip5pa55paH5pys77yIXCLoi7Hpm4RcIiDmiJYgXCLmgKrnialcIu+8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX29uR2FtZU92ZXIod2lubmVyLCB3aW5uZXJUZXh0KSB7XG4gICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdID09PT09IF9vbkdhbWVPdmVy5pa55rOV6KKr6LCD55SoID09PT09YCk7XG4gICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOa4uOaIj+e7k+adn++8miR7d2lubmVyVGV4dH3og5zliKlgKTtcbiAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gd2lubmVy5Y+C5pWw5YC8OiBcIiR7d2lubmVyfVwiYCk7XG4gICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOW9k+WJjeiLsembhOaVsOmHjzogJHt0aGlzLmhlcm9zLmxlbmd0aH0sIOaAqueJqeaVsOmHjzogJHt0aGlzLm1vbnN0ZXJzLmxlbmd0aH1gKTtcbiAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gdXNlU2NlbmVUcmFuc2l0aW9uPSR7dGhpcy51c2VTY2VuZVRyYW5zaXRpb259LCBnYW1lT3ZlclNjZW5lTmFtZT1cIiR7dGhpcy5nYW1lT3ZlclNjZW5lTmFtZX1cImApO1xuXG4gICAgICAgIC8vIOe7meiDnOWIqeaWueeahOWtmOa0u+WNleS9jea3u+WKoOe7j+mqjOWAvFxuICAgICAgICBjb25zdCBMZXZlbFN5c3RlbSA9IHJlcXVpcmUoXCJMZXZlbFN5c3RlbVwiKTtcbiAgICAgICAgY29uc3QgZXhwUmV3YXJkID0gMjAwOyAvLyDln7rnoYDnu4/pqozlpZblirHvvIjlj6/ku6XmoLnmja7pmr7luqbosIPmlbTvvIlcblxuICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDmo4Dmn6Xog5zliKnmnaHku7Y6IHdpbm5lciA9PT0gXCJoZXJvXCIgPyAke3dpbm5lciA9PT0gXCJoZXJvXCJ9YCk7XG5cbiAgICAgICAgaWYgKHdpbm5lciA9PT0gXCJoZXJvXCIpIHtcbiAgICAgICAgICAgIC8vIOiLsembhOiDnOWIqe+8jOe7meaJgOacieWPguaImOeahOiLsembhOa3u+WKoOe7j+mqjOWAvO+8iOWMheaLrOatu+S6oeeahO+8iVxuICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gPT09PT0g6Iux6ZuE6IOc5Yip77yM5byA5aeL5YiG6YWN57uP6aqM5YC8ID09PT09YCk7XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDnu4/pqozlpZblirE6ICR7ZXhwUmV3YXJkfSDngrkv5Lq677yI5YyF5ous5q275Lqh55qE5Y2V5L2N77yJYCk7XG5cbiAgICAgICAgICAgIHRoaXMuaGVyb3MuZm9yRWFjaCgoaGVybywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDlpITnkIboi7Hpm4RbJHtpbmRleH1dOiAke2hlcm8ubmFtZX1gKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0cyA9IGhlcm8uZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gU3RhdHNDb21wb25lbnTlrZjlnKg6ICR7ISFzdGF0c31gKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gJHtoZXJvLm5hbWV9IOaYr+WQpuatu+S6oTogJHtzdGF0cy5pc0RlYWQoKX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gJHtoZXJvLm5hbWV9IOW9k+WJjeetiee6pzogJHtzdGF0cy5sZXZlbH0sIOW9k+WJjee7j+mqjDogJHtzdGF0cy5leHB9YCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOS4jeeuoeaYr+WQpuatu+S6oe+8jOmDvee7mee7j+mqjOWAvFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNUZXh0ID0gc3RhdHMuaXNEZWFkKCkgPyBcIu+8iOW3suatu+S6oe+8iVwiIDogXCLvvIjlrZjmtLvvvIlcIjtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g4pyFIOe7mSAke2hlcm8ubmFtZX0ke3N0YXR1c1RleHR9IOa3u+WKoCAke2V4cFJld2FyZH0g54K557uP6aqM5YC8YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IExldmVsU3lzdGVtLmFkZEV4cChoZXJvLCBleHBSZXdhcmQpO1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSBhZGRFeHDov5Tlm57nu5Pmnpw6YCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQubGV2ZWxlZFVwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDwn46JICR7aGVyby5uYW1lfSDljYfnuqfliLAgJHtyZXN1bHQubmV3TGV2ZWx9IOe6p++8gWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g5bGe5oCn5Y+Y5YyWOmAsIHJlc3VsdC5zdGF0Q2hhbmdlcyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSAke2hlcm8ubmFtZX0g6I635b6X57uP6aqM5YC877yM5b2T5YmN562J57qnOiAke3Jlc3VsdC5uZXdMZXZlbH0sIOe7j+mqjDogJHtzdGF0cy5leHB9YCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy53YXJuKGBbQmF0dGxlQ29udHJvbGxlcl0gJHtoZXJvLm5hbWV9IGFkZEV4cOi/lOWbnm51bGzvvIFgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLndhcm4oYFtCYXR0bGVDb250cm9sbGVyXSAke2hlcm8ubmFtZX0g5rKh5pyJU3RhdHNDb21wb25lbnTnu4Tku7bvvIzkuI3ojrflvpfnu4/pqozlgLxgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdID09PT09IOiLsembhOe7j+mqjOWAvOWIhumFjeWujOaIkCA9PT09PWApO1xuICAgICAgICB9IGVsc2UgaWYgKHdpbm5lciA9PT0gXCJtb25zdGVyXCIpIHtcbiAgICAgICAgICAgIC8vIOaAqueJqeiDnOWIqe+8jOe7meaJgOacieWPguaImOeahOaAqueJqea3u+WKoOe7j+mqjOWAvO+8iOWMheaLrOatu+S6oeeahO+8iVxuICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gPT09PT0g5oCq54mp6IOc5Yip77yM5byA5aeL5YiG6YWN57uP6aqM5YC8ID09PT09YCk7XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDnu4/pqozlpZblirE6ICR7ZXhwUmV3YXJkfSDngrkv5Lq677yI5YyF5ous5q275Lqh55qE5Y2V5L2N77yJYCk7XG5cbiAgICAgICAgICAgIHRoaXMubW9uc3RlcnMuZm9yRWFjaCgobW9uc3RlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDlpITnkIbmgKrnialbJHtpbmRleH1dOiAke21vbnN0ZXIubmFtZX1gKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0cyA9IG1vbnN0ZXIuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gU3RhdHNDb21wb25lbnTlrZjlnKg6ICR7ISFzdGF0c31gKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gJHttb25zdGVyLm5hbWV9IOaYr+WQpuatu+S6oTogJHtzdGF0cy5pc0RlYWQoKX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gJHttb25zdGVyLm5hbWV9IOW9k+WJjeetiee6pzogJHtzdGF0cy5sZXZlbH0sIOW9k+WJjee7j+mqjDogJHtzdGF0cy5leHB9YCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOS4jeeuoeaYr+WQpuatu+S6oe+8jOmDvee7mee7j+mqjOWAvFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNUZXh0ID0gc3RhdHMuaXNEZWFkKCkgPyBcIu+8iOW3suatu+S6oe+8iVwiIDogXCLvvIjlrZjmtLvvvIlcIjtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g4pyFIOe7mSAke21vbnN0ZXIubmFtZX0ke3N0YXR1c1RleHR9IOa3u+WKoCAke2V4cFJld2FyZH0g54K557uP6aqM5YC8YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IExldmVsU3lzdGVtLmFkZEV4cChtb25zdGVyLCBleHBSZXdhcmQpO1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSBhZGRFeHDov5Tlm57nu5Pmnpw6YCwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQubGV2ZWxlZFVwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDwn46JICR7bW9uc3Rlci5uYW1lfSDljYfnuqfliLAgJHtyZXN1bHQubmV3TGV2ZWx9IOe6p++8gWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g5bGe5oCn5Y+Y5YyWOmAsIHJlc3VsdC5zdGF0Q2hhbmdlcyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSAke21vbnN0ZXIubmFtZX0g6I635b6X57uP6aqM5YC877yM5b2T5YmN562J57qnOiAke3Jlc3VsdC5uZXdMZXZlbH0sIOe7j+mqjDogJHtzdGF0cy5leHB9YCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy53YXJuKGBbQmF0dGxlQ29udHJvbGxlcl0gJHttb25zdGVyLm5hbWV9IGFkZEV4cOi/lOWbnm51bGzvvIFgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLndhcm4oYFtCYXR0bGVDb250cm9sbGVyXSAke21vbnN0ZXIubmFtZX0g5rKh5pyJU3RhdHNDb21wb25lbnTnu4Tku7bvvIzkuI3ojrflvpfnu4/pqozlgLxgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdID09PT09IOaAqueJqee7j+mqjOWAvOWIhumFjeWujOaIkCA9PT09PWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6K6w5b2V5ri45oiP57uT5p2f5LqL5Lu25bm25L+d5a2Y5oiY5paX6K6w5b2VXG4gICAgICAgIGlmICh0aGlzLmJhdHRsZVJlY29yZGVyKSB7XG4gICAgICAgICAgICB0aGlzLmJhdHRsZVJlY29yZGVyLnJlY29yZEV2ZW50KFwiZ2FtZU92ZXJcIiwgeyB3aW5uZXI6IHdpbm5lciwgd2lubmVyVGV4dDogd2lubmVyVGV4dCB9KTtcbiAgICAgICAgICAgIHRoaXMuYmF0dGxlUmVjb3JkZXIuc3RvcFJlY29yZGluZygpO1xuXG4gICAgICAgICAgICAvLyDkv53lrZjmiJjmlpforrDlvZXliLDmnKzlnLDlrZjlgqhcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZEtleSA9IGBiYXR0bGVfcmVwbGF5XyR7RGF0ZS5ub3coKX1gO1xuICAgICAgICAgICAgdGhpcy5iYXR0bGVSZWNvcmRlci5zYXZlVG9Mb2NhbFN0b3JhZ2UocmVjb3JkS2V5KTtcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOaImOaWl+iusOW9leW3suS/neWtmDogJHtyZWNvcmRLZXl9YCk7XG5cbiAgICAgICAgICAgIC8vIOWwhuiusOW9lemUruS/neWtmOWIsOWFqOWxgO+8jOS+m0dhbWVPdmVyUGFuZWzkvb/nlKhcbiAgICAgICAgICAgIHdpbmRvdy5MYXN0QmF0dGxlUmVjb3JkS2V5ID0gcmVjb3JkS2V5O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5qC55o2u6K6+572u6YCJ5oup5pi+56S65pa55byPXG4gICAgICAgIGlmICh0aGlzLnVzZVNjZW5lVHJhbnNpdGlvbiAmJiB0aGlzLmdhbWVPdmVyU2NlbmVOYW1lKSB7XG4gICAgICAgICAgICAvLyDmlrnlvI8xOiDot7PovazliLDmuLjmiI/nu5PmnZ/lnLrmma9cbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOS9v+eUqOWcuuaZr+i3s+i9rOaWueW8j2ApO1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvblRvR2FtZU92ZXJTY2VuZSh3aW5uZXIsIHdpbm5lclRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5pa55byPMjog5Zyo5b2T5YmN5Zy65pmv5pi+56S65ri45oiP57uT5p2f6Z2i5p2/XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDkvb/nlKjlvZPliY3lnLrmma/pnaLmnb/mlrnlvI9gKTtcbiAgICAgICAgICAgIGlmICghdGhpcy51c2VTY2VuZVRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSB1c2VTY2VuZVRyYW5zaXRpb27kuLpmYWxzZe+8jOS9v+eUqOmdouadv+aWueW8j2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmdhbWVPdmVyU2NlbmVOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gZ2FtZU92ZXJTY2VuZU5hbWXkuLrnqbrvvIzkvb/nlKjpnaLmnb/mlrnlvI9gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3Nob3dHYW1lT3ZlclBhbmVsKHdpbm5lcik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5oiY5paX5Zy65pmv5aS05YOP5pi+56S677yI5LuOU2VsZWN0ZWRVbml0c+iOt+WPlu+8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaW5pdEJhdHRsZUF2YXRhcnMoKSB7XG4gICAgICAgIGlmICghd2luZG93LlNlbGVjdGVkVW5pdHMpIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIltCYXR0bGVDb250cm9sbGVyXSDml6BTZWxlY3RlZFVuaXRz5pWw5o2u77yM6Lez6L+H5aS05YOP5pi+56S6XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRVbml0cyA9IHdpbmRvdy5TZWxlY3RlZFVuaXRzO1xuICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDlvIDlp4vliJ3lp4vljJbmiJjmlpflnLrmma/lpLTlg48gLSDoi7Hpm4Q6ICR7c2VsZWN0ZWRVbml0cy5oZXJvcyA/IHNlbGVjdGVkVW5pdHMuaGVyb3MubGVuZ3RoIDogMH3kuKosIOaAqueJqTogJHtzZWxlY3RlZFVuaXRzLm1vbnN0ZXJzID8gc2VsZWN0ZWRVbml0cy5tb25zdGVycy5sZW5ndGggOiAwfeS4qmApO1xuXG4gICAgICAgIC8vIOaYvuekuuiLsembhOWktOWDj++8iOW3puS4i+inku+8iVxuICAgICAgICBpZiAoc2VsZWN0ZWRVbml0cy5oZXJvcyAmJiBzZWxlY3RlZFVuaXRzLmhlcm9zLmxlbmd0aCA+IDAgJiYgdGhpcy5oZXJvQXZhdGFyQ29udGFpbmVyICYmIHRoaXMuYXZhdGFyUHJlZmFiKSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVCYXR0bGVBdmF0YXJzKHNlbGVjdGVkVW5pdHMuaGVyb3MsIFwiaGVyb1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaYvuekuuaAqueJqeWktOWDj++8iOWPs+S4i+inku+8iVxuICAgICAgICBpZiAoc2VsZWN0ZWRVbml0cy5tb25zdGVycyAmJiBzZWxlY3RlZFVuaXRzLm1vbnN0ZXJzLmxlbmd0aCA+IDAgJiYgdGhpcy5tb25zdGVyQXZhdGFyQ29udGFpbmVyICYmIHRoaXMuYXZhdGFyUHJlZmFiKSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVCYXR0bGVBdmF0YXJzKHNlbGVjdGVkVW5pdHMubW9uc3RlcnMsIFwibW9uc3RlclwiKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDliJvlu7rmiJjmlpflnLrmma/lpLTlg4/liJfooahcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHNlbGVjdGVkVW5pdHMgLSDpgInkuK3nmoTkurrnianmlbDmja7liJfooahcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGVhbSAtIOmYn+S8jeexu+Wei++8iFwiaGVyb1wiIOaIliBcIm1vbnN0ZXJcIu+8iVxuICAgICAqL1xuICAgIF9jcmVhdGVCYXR0bGVBdmF0YXJzKHNlbGVjdGVkVW5pdHMsIHRlYW0pIHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZFVuaXRzIHx8IHNlbGVjdGVkVW5pdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0ZWFtID09PSBcImhlcm9cIiA/IHRoaXMuaGVyb0F2YXRhckNvbnRhaW5lciA6IHRoaXMubW9uc3RlckF2YXRhckNvbnRhaW5lcjtcbiAgICAgICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgICAgIGNjLndhcm4oYFtCYXR0bGVDb250cm9sbGVyXSAke3RlYW195aS05YOP5a655Zmo5pyq57uR5a6aYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmuIXnqbrlrrnlmahcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUFsbENoaWxkcmVuKCk7XG5cbiAgICAgICAgLy8g6I635Y+W5aS05YOP6LWE5rqQ5YiX6KGoXG4gICAgICAgIGNvbnN0IGljb25MaXN0ID0gdGVhbSA9PT0gXCJoZXJvXCIgPyB0aGlzLmhlcm9JY29ucyA6IHRoaXMubW9uc3Rlckljb25zO1xuXG4gICAgICAgIC8vIOWIm+W7uuWktOWDj1xuICAgICAgICBzZWxlY3RlZFVuaXRzLmZvckVhY2goKHVuaXREYXRhLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXZhdGFyTm9kZSA9IHRoaXMuX2NyZWF0ZUJhdHRsZUF2YXRhcih1bml0RGF0YSwgdGVhbSwgaW5kZXgsIGljb25MaXN0KTtcbiAgICAgICAgICAgIGlmIChhdmF0YXJOb2RlKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKGF2YXRhck5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDosIPmlbTlrrnlmajluIPlsYDvvIjlnoLnm7TmjpLliJfvvIlcbiAgICAgICAgdGhpcy5fbGF5b3V0QmF0dGxlQXZhdGFycyhjb250YWluZXIsIHNlbGVjdGVkVW5pdHMubGVuZ3RoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yib5bu65Y2V5Liq5oiY5paX5Zy65pmv5aS05YOPXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdW5pdERhdGEgLSDljZXkvY3mlbDmja5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGVhbSAtIOmYn+S8jeexu+Wei1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIOe0ouW8lVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGljb25MaXN0IC0g5aS05YOP6LWE5rqQ5YiX6KGoXG4gICAgICogQHJldHVybnMge2NjLk5vZGV8bnVsbH0g5aS05YOP6IqC54K5XG4gICAgICovXG4gICAgX2NyZWF0ZUJhdHRsZUF2YXRhcih1bml0RGF0YSwgdGVhbSwgaW5kZXgsIGljb25MaXN0KSB7XG4gICAgICAgIGlmICghdGhpcy5hdmF0YXJQcmVmYWIpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJbQmF0dGxlQ29udHJvbGxlcl0gYXZhdGFyUHJlZmFi5pyq57uR5a6aXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlrp7kvovljJblpLTlg49QcmVmYWJcbiAgICAgICAgY29uc3QgYXZhdGFyTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYXZhdGFyUHJlZmFiKTtcbiAgICAgICAgYXZhdGFyTm9kZS5uYW1lID0gYEJhdHRsZUF2YXRhcl8ke3VuaXREYXRhLm5hbWUgfHwgdW5pdERhdGEuZGlzcGxheU5hbWUgfHwgaW5kZXh9YDtcblxuICAgICAgICAvLyDmn6Xmib7lr7nlupTnmoTkurrnianoioLngrnvvIjpgJrov4flkI3np7DljLnphY3vvIlcbiAgICAgICAgY29uc3QgdW5pdE5hbWUgPSB1bml0RGF0YS5uYW1lIHx8IHVuaXREYXRhLmRpc3BsYXlOYW1lO1xuICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDmn6Xmib7kurrnianoioLngrk6ICR7dW5pdE5hbWV9LCDpmJ/kvI06ICR7dGVhbX1gKTtcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyTm9kZSA9IHRoaXMuX2ZpbmRDaGFyYWN0ZXJOb2RlKHVuaXROYW1lLCB0ZWFtKTtcbiAgICAgICAgaWYgKGNoYXJhY3Rlck5vZGUpIHtcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOKckyDmib7liLDkurrnianoioLngrk6ICR7Y2hhcmFjdGVyTm9kZS5uYW1lfWApO1xuICAgICAgICAgICAgLy8g5L+d5a2Y5Lq654mp6IqC54K55byV55So5Yiw5aS05YOP6IqC54K5XG4gICAgICAgICAgICBhdmF0YXJOb2RlLl9jaGFyYWN0ZXJOb2RlID0gY2hhcmFjdGVyTm9kZTtcbiAgICAgICAgICAgIC8vIOa3u+WKoOeCueWHu+S6i+S7tuebkeWQrFxuICAgICAgICAgICAgdGhpcy5fYWRkQXZhdGFyQ2xpY2tIYW5kbGVyKGF2YXRhck5vZGUsIGNoYXJhY3Rlck5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2Mud2FybihgW0JhdHRsZUNvbnRyb2xsZXJdIOKclyDmnKrmib7liLDlr7nlupTnmoTkurrnianoioLngrk6ICR7dW5pdE5hbWV9YCk7XG4gICAgICAgICAgICBjYy53YXJuKGBbQmF0dGxlQ29udHJvbGxlcl0gICDlvZPliY0ke3RlYW195YiX6KGoOiAkeyh0ZWFtID09PSBcImhlcm9cIiA/IHRoaXMuaGVyb3MgOiB0aGlzLm1vbnN0ZXJzKS5tYXAobiA9PiBuID8gbi5uYW1lIDogXCJudWxsXCIpLmpvaW4oXCIsIFwiKX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOafpeaJvuWktOWDj+WbvueJh+iKgueCuVxuICAgICAgICBjb25zdCBpY29uTm9kZSA9IGF2YXRhck5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJJY29uXCIpIHx8IGF2YXRhck5vZGU7XG4gICAgICAgIGNvbnN0IHNwcml0ZSA9IGljb25Ob2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuXG4gICAgICAgIGlmIChzcHJpdGUpIHtcbiAgICAgICAgICAgIC8vIOS8mOWFiOS9v+eUqHVuaXREYXRh5Lit55qEaWNvblxuICAgICAgICAgICAgbGV0IHNwcml0ZUZyYW1lID0gdW5pdERhdGEuaWNvbiB8fCBudWxsO1xuXG4gICAgICAgICAgICAvLyDlpoLmnpx1bml0RGF0YeayoeaciWljb27vvIzlsJ3or5Xku45pY29uTGlzdOaMiee0ouW8leiOt+WPllxuICAgICAgICAgICAgaWYgKCFzcHJpdGVGcmFtZSAmJiBpY29uTGlzdCAmJiBpY29uTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8g5bCd6K+V5qC55o2u5ZCN56ew5Yy56YWNXG4gICAgICAgICAgICAgICAgY29uc3QgVW5pdERhdGFDb25maWcgPSByZXF1aXJlKFwiVW5pdERhdGFDb25maWdcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgdW5pdENvbmZpZ0xpc3QgPSB0ZWFtID09PSBcImhlcm9cIiA/IChVbml0RGF0YUNvbmZpZy5oZXJvcyB8fCBbXSkgOiAoVW5pdERhdGFDb25maWcubW9uc3RlcnMgfHwgW10pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpZ0luZGV4ID0gdW5pdENvbmZpZ0xpc3QuZmluZEluZGV4KGNvbmZpZyA9PlxuICAgICAgICAgICAgICAgICAgICBjb25maWcubmFtZSA9PT0gdW5pdERhdGEubmFtZSB8fCBjb25maWcuZGlzcGxheU5hbWUgPT09IHVuaXREYXRhLmRpc3BsYXlOYW1lXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnSW5kZXggPj0gMCAmJiBjb25maWdJbmRleCA8IGljb25MaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZSA9IGljb25MaXN0W2NvbmZpZ0luZGV4XTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgaWNvbkxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOaJvuS4jeWIsOWMuemFje+8jOaMiee0ouW8leiOt+WPllxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZSA9IGljb25MaXN0W2luZGV4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzcHJpdGVGcmFtZSkge1xuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgIHNwcml0ZS50eXBlID0gY2MuU3ByaXRlLlR5cGUuU0lNUExFO1xuICAgICAgICAgICAgICAgIHNwcml0ZS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XG5cbiAgICAgICAgICAgICAgICAvLyDorr7nva7lpLTlg4/lpKflsI9cbiAgICAgICAgICAgICAgICBpY29uTm9kZS53aWR0aCA9IHRoaXMuYXZhdGFyU2l6ZSB8fCA4MDtcbiAgICAgICAgICAgICAgICBpY29uTm9kZS5oZWlnaHQgPSB0aGlzLmF2YXRhclNpemUgfHwgODA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLndhcm4oYFtCYXR0bGVDb250cm9sbGVyXSDmnKrmib7liLDlpLTlg4/otYTmupA6ICR7dW5pdERhdGEubmFtZSB8fCB1bml0RGF0YS5kaXNwbGF5TmFtZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOafpeaJvuWQjeensOagh+etvlxuICAgICAgICBjb25zdCBuYW1lTGFiZWwgPSBhdmF0YXJOb2RlLmdldENoaWxkQnlOYW1lKFwiTmFtZUxhYmVsXCIpO1xuICAgICAgICBpZiAobmFtZUxhYmVsKSB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IG5hbWVMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gdW5pdERhdGEuZGlzcGxheU5hbWUgfHwgdW5pdERhdGEubmFtZSB8fCBcIuacquefpVwiO1xuICAgICAgICAgICAgICAgIC8vIOiwg+aVtOWtl+S9k+Wkp+Wwj1xuICAgICAgICAgICAgICAgIGlmIChsYWJlbC5mb250U2l6ZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuZm9udFNpemUgPSBNYXRoLm1heCgxNCwgbGFiZWwuZm9udFNpemUgKiAwLjYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLmZvbnRTaXplID0gMTY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g6ZqQ6JeP5Yu+6YCJ5qCH6K6w77yI5oiY5paX5Zy65pmv5LiN6ZyA6KaB77yJXG4gICAgICAgIGNvbnN0IGNoZWNrbWFyayA9IGF2YXRhck5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDaGVja21hcmtcIik7XG4gICAgICAgIGlmIChjaGVja21hcmspIHtcbiAgICAgICAgICAgIGNoZWNrbWFyay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOagueaNruaAkuawlOWAvOiuvue9ruWktOWDj+minOiJsu+8iOWIneWni+eKtuaAge+8iVxuICAgICAgICBpZiAoY2hhcmFjdGVyTm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQXZhdGFyQ29sb3IoYXZhdGFyTm9kZSwgY2hhcmFjdGVyTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXZhdGFyTm9kZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5p+l5om+5a+55bqU55qE5Lq654mp6IqC54K5XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdE5hbWUgLSDljZXkvY3lkI3np7BcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGVhbSAtIOmYn+S8jeexu+Wei1xuICAgICAqIEByZXR1cm5zIHtjYy5Ob2RlfG51bGx9IOS6uueJqeiKgueCuVxuICAgICAqL1xuICAgIF9maW5kQ2hhcmFjdGVyTm9kZSh1bml0TmFtZSwgdGVhbSkge1xuICAgICAgICBjb25zdCB1bml0TGlzdCA9IHRlYW0gPT09IFwiaGVyb1wiID8gdGhpcy5oZXJvcyA6IHRoaXMubW9uc3RlcnM7XG4gICAgICAgIGlmICghdW5pdExpc3QgfHwgdW5pdExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOmAmui/h+WQjeensOWMuemFjVxuICAgICAgICBsZXQgY2hhcmFjdGVyTm9kZSA9IHVuaXRMaXN0LmZpbmQobm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAoIW5vZGUgfHwgIW5vZGUuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgY29uc3Qgc3RhdHMgPSBub2RlLmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xuICAgICAgICAgICAgaWYgKCFzdGF0cykgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRzLm5hbWUgPT09IHVuaXROYW1lIHx8IG5vZGUubmFtZSA9PT0gdW5pdE5hbWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIOWmguaenOaJvuS4jeWIsO+8jOWwneivlemAmui/h+e0ouW8leWMuemFje+8iOWmguaenHVuaXROYW1l5piv57Si5byV77yJXG4gICAgICAgIGlmICghY2hhcmFjdGVyTm9kZSAmJiAhaXNOYU4odW5pdE5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KHVuaXROYW1lKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdW5pdExpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyTm9kZSA9IHVuaXRMaXN0W2luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGFyYWN0ZXJOb2RlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDnu5nlpLTlg4/mt7vliqDngrnlh7vkuovku7blpITnkIZcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gYXZhdGFyTm9kZSAtIOWktOWDj+iKgueCuVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gY2hhcmFjdGVyTm9kZSAtIOS6uueJqeiKgueCuVxuICAgICAqL1xuICAgIF9hZGRBdmF0YXJDbGlja0hhbmRsZXIoYXZhdGFyTm9kZSwgY2hhcmFjdGVyTm9kZSkge1xuICAgICAgICAvLyDnoa7kv53oioLngrnlj6/ku6XmjqXmlLbop6bmkbjkuovku7ZcbiAgICAgICAgYXZhdGFyTm9kZS5fdG91Y2hFbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyDnoa7kv53oioLngrnmnInotrPlpJ/nmoTlpKflsI/mnaXmjqXmlLbop6bmkbhcbiAgICAgICAgaWYgKGF2YXRhck5vZGUud2lkdGggPT09IDAgfHwgYXZhdGFyTm9kZS5oZWlnaHQgPT09IDApIHtcbiAgICAgICAgICAgIGF2YXRhck5vZGUuc2V0Q29udGVudFNpemUodGhpcy5hdmF0YXJTaXplIHx8IDgwLCB0aGlzLmF2YXRhclNpemUgfHwgODApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g56e76Zmk5LmL5YmN5Y+v6IO957uR5a6a55qE5LqL5Lu255uR5ZCs77yI6Ziy5q2i6YeN5aSN57uR5a6a77yJXG4gICAgICAgIGF2YXRhck5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XG4gICAgICAgIGF2YXRhck5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJUKTtcbiAgICAgICAgYXZhdGFyTm9kZS5vZmYoJ2NsaWNrJyk7XG5cbiAgICAgICAgLy8g5re75Yqg5oyJ6ZKu57uE5Lu277yI55So5LqO5pu05aW955qE54K55Ye75Y+N6aaI5ZKM5LqL5Lu25aSE55CG77yJXG4gICAgICAgIGxldCBidXR0b24gPSBhdmF0YXJOb2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICBpZiAoIWJ1dHRvbikge1xuICAgICAgICAgICAgYnV0dG9uID0gYXZhdGFyTm9kZS5hZGRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgIGJ1dHRvbi50cmFuc2l0aW9uID0gY2MuQnV0dG9uLlRyYW5zaXRpb24uU0NBTEU7XG4gICAgICAgICAgICBidXR0b24uem9vbVNjYWxlID0gMC45O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5Y+q5L2/55SoQnV0dG9u57uE5Lu255qEY2xpY2vkuovku7bvvIjpgb/lhY3kuI5UT1VDSF9FTkTph43lpI3op6blj5HvvIlcbiAgICAgICAgYnV0dG9uLm5vZGUub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDlpLTlg49CdXR0b27ngrnlh7vkuovku7bop6blj5E6ICR7YXZhdGFyTm9kZS5uYW1lfWApO1xuICAgICAgICAgICAgLy8g5rOo5oSP77yaQnV0dG9u55qEY2xpY2vkuovku7blr7nosaHlj6/og73kuI3mlK/mjIFzdG9wUHJvcGFnYXRpb27vvIzmiYDku6XkuI3osIPnlKhcbiAgICAgICAgICAgIC8vIOWmguaenOmcgOimgemYu+atouS6i+S7tuWGkuazoe+8jOWPr+S7peWcqOS6i+S7tuWkhOeQhuWHveaVsOS4reebtOaOpei/lOWbnlxuICAgICAgICAgICAgdGhpcy5fb25BdmF0YXJDbGljayhjaGFyYWN0ZXJOb2RlLCBldmVudCk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIC8vIOehruS/nUljb27lrZDoioLngrnkuZ/lj6/ku6XmjqXmlLbop6bmkbjvvIjlpoLmnpzlrZjlnKjvvIlcbiAgICAgICAgY29uc3QgaWNvbk5vZGUgPSBhdmF0YXJOb2RlLmdldENoaWxkQnlOYW1lKFwiSWNvblwiKTtcbiAgICAgICAgaWYgKGljb25Ob2RlKSB7XG4gICAgICAgICAgICBpY29uTm9kZS5fdG91Y2hFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChpY29uTm9kZS53aWR0aCA9PT0gMCB8fCBpY29uTm9kZS5oZWlnaHQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpY29uTm9kZS5zZXRDb250ZW50U2l6ZSh0aGlzLmF2YXRhclNpemUgfHwgODAsIHRoaXMuYXZhdGFyU2l6ZSB8fCA4MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSDinJMg5bey5Li65aS05YOP5re75Yqg54K55Ye75LqL5Lu2OiAke2F2YXRhck5vZGUubmFtZX0gLT4gJHtjaGFyYWN0ZXJOb2RlLm5hbWV9YCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWktOWDj+eCueWHu+S6i+S7tuWkhOeQhlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBjaGFyYWN0ZXJOb2RlIC0g5Lq654mp6IqC54K5XG4gICAgICogQHBhcmFtIHtjYy5FdmVudH0gZXZlbnQgLSDkuovku7blr7nosaFcbiAgICAgKi9cbiAgICBfb25BdmF0YXJDbGljayhjaGFyYWN0ZXJOb2RlLCBldmVudCkge1xuICAgICAgICBpZiAoIWNoYXJhY3Rlck5vZGUgfHwgIWNoYXJhY3Rlck5vZGUuaXNWYWxpZCkge1xuICAgICAgICAgICAgY2Mud2FybihcIltCYXR0bGVDb250cm9sbGVyXSDkurrnianoioLngrnml6DmlYjvvIzml6Dms5Xph4rmlL7lpKfmi5tcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDpmLLmraLph43lpI3op6blj5HvvJrlpoLmnpzor6XkurrnianmraPlnKjph4rmlL7lpKfmi5vvvIzliJnlv73nlaVcbiAgICAgICAgaWYgKGNoYXJhY3Rlck5vZGUuX2lzUmVsZWFzaW5nVWx0aW1hdGUpIHtcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdICR7Y2hhcmFjdGVyTm9kZS5uYW1lfSDmraPlnKjph4rmlL7lpKfmi5vkuK3vvIzlv73nlaXph43lpI3ngrnlh7tgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdID09PT09PT09PT0g5aS05YOP6KKr54K55Ye7ID09PT09PT09PT1gKTtcbiAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g5Lq654mpOiAke2NoYXJhY3Rlck5vZGUubmFtZX1gKTtcbiAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g5bCd6K+V6YeK5pS+5aSn5oubLi4uYCk7XG5cbiAgICAgICAgLy8g5qOA5p+l6KeS6Imy5piv5ZCm5bey5q275LqhXG4gICAgICAgIGNvbnN0IHN0YXRzID0gY2hhcmFjdGVyTm9kZS5nZXRDb21wb25lbnQoXCJTdGF0c0NvbXBvbmVudFwiKTtcbiAgICAgICAgaWYgKHN0YXRzICYmIHN0YXRzLmlzRGVhZCgpKSB7XG4gICAgICAgICAgICBjYy5sb2coYFtCYXR0bGVDb250cm9sbGVyXSAke2NoYXJhY3Rlck5vZGUubmFtZX0g5bey5q275Lqh77yM56aB5q2i6YeK5pS+5aSn5oubYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmo4Dmn6XmmK/lkKbmraPlnKjlm57mlL7vvIzlpoLmnpzmmK/liJnnpoHnlKjlpKfmi5vph4rmlL5cbiAgICAgICAgaWYgKHRoaXMuaXNSZXBsYXlpbmcpIHtcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOato+WcqOWbnuaUvuS4re+8jOemgeeUqOWkp+aLm+mHiuaUvmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgU2tpbGxTeXN0ZW0gPSByZXF1aXJlKFwiU2tpbGxTeXN0ZW1cIik7XG4gICAgICAgIGNvbnN0IFRlYW1SZWYgPSByZXF1aXJlKFwiVGVhbVJlZlwiKTtcbiAgICAgICAgY29uc3QgVGVhbUNvbXBvbmVudCA9IHJlcXVpcmUoXCJUZWFtQ29tcG9uZW50XCIpO1xuXG4gICAgICAgIC8vIOajgOafpeaYr+WQpuWPr+S7pemHiuaUvuWkp+aLm1xuICAgICAgICBpZiAoIVNraWxsU3lzdGVtLmNhblVzZVVsdGltYXRlU2tpbGwoY2hhcmFjdGVyTm9kZSkpIHtcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdICR7Y2hhcmFjdGVyTm9kZS5uYW1lfSDmgJLmsJTlgLzkuI3otrPvvIzml6Dms5Xph4rmlL7lpKfmi5tgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdICR7Y2hhcmFjdGVyTm9kZS5uYW1lfSDlj6/ku6Xph4rmlL7lpKfmi5vvvIznu6fnu63miafooYwuLi5gKTtcblxuICAgICAgICAvLyDojrflj5bnm67moIdcbiAgICAgICAgY29uc3QgdGVhbUNvbXAgPSBjaGFyYWN0ZXJOb2RlLmdldENvbXBvbmVudChcIlRlYW1Db21wb25lbnRcIik7XG4gICAgICAgIGlmICghdGVhbUNvbXApIHtcbiAgICAgICAgICAgIGNjLndhcm4oYFtCYXR0bGVDb250cm9sbGVyXSAke2NoYXJhY3Rlck5vZGUubmFtZX0g57y65bCRVGVhbUNvbXBvbmVudOe7hOS7tmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZW5lbWllcyA9IHRlYW1Db21wLnRlYW0gPT09IFwiaGVyb1wiXG4gICAgICAgICAgICA/IFRlYW1SZWYubW9uc3RlcnNSZWZcbiAgICAgICAgICAgIDogVGVhbVJlZi5oZXJvc1JlZjtcblxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlbmVtaWVzLmZpbmQoZSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUgfHwgIWUuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgcyA9IGUuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XG4gICAgICAgICAgICByZXR1cm4gcyAmJiAhcy5pc0RlYWQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdICR7Y2hhcmFjdGVyTm9kZS5uYW1lfSDmsqHmnInlj6/mlLvlh7vnmoTnm67moIdgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOagh+iusOS4uuato+WcqOmHiuaUvuWkp+aLm++8iOmYsuatoumHjeWkjeinpuWPke+8iVxuICAgICAgICBjaGFyYWN0ZXJOb2RlLl9pc1JlbGVhc2luZ1VsdGltYXRlID0gdHJ1ZTtcblxuICAgICAgICAvLyDph4rmlL7lpKfmi5tcbiAgICAgICAgY29uc3QgbG9nID0gKG1zZykgPT4gY2MubG9nKG1zZyk7XG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLnJhbmRvbTtcbiAgICAgICAgU2tpbGxTeXN0ZW0udXNlVWx0aW1hdGVTa2lsbChjaGFyYWN0ZXJOb2RlLCB0YXJnZXQsIGxvZywgcmFuZCk7XG5cbiAgICAgICAgLy8g5bu26L+f6YeN572u5qCH5b+X77yI5aSn5oubVUnliqjnlLvlrozmiJDlkI7ph43nva7vvIlcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgY2hhcmFjdGVyTm9kZS5faXNSZWxlYXNpbmdVbHRpbWF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gJHtjaGFyYWN0ZXJOb2RlLm5hbWV9IOWkp+aLm+mHiuaUvuWujOaIkO+8jOmHjee9ruagh+W/l2ApO1xuICAgICAgICB9LCAzLjApOyAvLyDlu7bov58z56eS77yM56Gu5L+d5aSn5oubVUnliqjnlLvlrozmiJBcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5pu05paw5omA5pyJ5aS05YOP55qE6aKc6Imy77yI5qC55o2u5oCS5rCU5YC877yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfdXBkYXRlQWxsQXZhdGFyQ29sb3JzKCkge1xuICAgICAgICAvLyDmm7TmlrDoi7Hpm4TlpLTlg4/nmoTpopzoibJcbiAgICAgICAgaWYgKHRoaXMuaGVyb0F2YXRhckNvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhpcy5oZXJvQXZhdGFyQ29udGFpbmVyLmNoaWxkcmVuLmZvckVhY2goYXZhdGFyTm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQXZhdGFyQ29sb3IoYXZhdGFyTm9kZSwgYXZhdGFyTm9kZS5fY2hhcmFjdGVyTm9kZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOabtOaWsOaAqueJqeWktOWDj+eahOminOiJslxuICAgICAgICBpZiAodGhpcy5tb25zdGVyQXZhdGFyQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLm1vbnN0ZXJBdmF0YXJDb250YWluZXIuY2hpbGRyZW4uZm9yRWFjaChhdmF0YXJOb2RlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVBdmF0YXJDb2xvcihhdmF0YXJOb2RlLCBhdmF0YXJOb2RlLl9jaGFyYWN0ZXJOb2RlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOabtOaWsOWNleS4quWktOWDj+eahOminOiJsu+8iOagueaNruaAkuawlOWAvO+8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBhdmF0YXJOb2RlIC0g5aS05YOP6IqC54K5XG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBjaGFyYWN0ZXJOb2RlIC0g5Lq654mp6IqC54K5XG4gICAgICovXG4gICAgX3VwZGF0ZUF2YXRhckNvbG9yKGF2YXRhck5vZGUsIGNoYXJhY3Rlck5vZGUpIHtcbiAgICAgICAgaWYgKCFhdmF0YXJOb2RlIHx8ICFhdmF0YXJOb2RlLmlzVmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2hhcmFjdGVyTm9kZSB8fCAhY2hhcmFjdGVyTm9kZS5pc1ZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdGF0cyA9IGNoYXJhY3Rlck5vZGUuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XG4gICAgICAgIGlmICghc3RhdHMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOajgOafpeaAkuawlOWAvOaYr+WQpuW3sua7oVxuICAgICAgICBjb25zdCBpc1JhZ2VGdWxsID0gc3RhdHMuaXNSYWdlRnVsbCgpO1xuXG4gICAgICAgIC8vIOafpeaJvuWktOWDj+WbvueJh+iKgueCuVxuICAgICAgICBjb25zdCBpY29uTm9kZSA9IGF2YXRhck5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJJY29uXCIpIHx8IGF2YXRhck5vZGU7XG5cbiAgICAgICAgLy8g5qC55o2u5oCS5rCU5YC86K6+572u6aKc6ImyXG4gICAgICAgIGlmIChpc1JhZ2VGdWxsKSB7XG4gICAgICAgICAgICAvLyDmgJLmsJTlgLzmu6HvvJrmraPluLjpopzoibLvvIjnmb3oibLvvIxSR0I9MjU1LDI1NSwyNTXvvIlcbiAgICAgICAgICAgIGljb25Ob2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICBhdmF0YXJOb2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDmgJLmsJTlgLzmnKrmu6HvvJrngbDoibLvvIhSR0I9MTI4LDEyOCwxMjjvvIlcbiAgICAgICAgICAgIGljb25Ob2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKDEyOCwgMTI4LCAxMjgsIDI1NSk7XG4gICAgICAgICAgICBhdmF0YXJOb2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKDEyOCwgMTI4LCAxMjgsIDI1NSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6LCD5pW05aS05YOP5a655Zmo5biD5bGA77yI5rC05bmz5o6S5YiX77yM5LuO5bem5b6A5Y+z77yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGNvbnRhaW5lciAtIOWuueWZqOiKgueCuVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCAtIOWktOWDj+aVsOmHj1xuICAgICAqL1xuICAgIF9sYXlvdXRCYXR0bGVBdmF0YXJzKGNvbnRhaW5lciwgY291bnQpIHtcbiAgICAgICAgaWYgKGNvdW50ID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBjb250YWluZXIuY2hpbGRyZW47XG4gICAgICAgIGNvbnN0IHNwYWNpbmcgPSB0aGlzLmF2YXRhclNwYWNpbmcgfHwgMTA7XG4gICAgICAgIGNvbnN0IGF2YXRhcldpZHRoID0gdGhpcy5hdmF0YXJTaXplIHx8IDgwO1xuICAgICAgICBjb25zdCB0b3RhbFdpZHRoID0gY291bnQgKiBhdmF0YXJXaWR0aCArIChjb3VudCAtIDEpICogc3BhY2luZztcblxuICAgICAgICAvLyDku47lt6blvoDlj7PmjpLliJdcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4ID0gLXRvdGFsV2lkdGggLyAyICsgYXZhdGFyV2lkdGggLyAyICsgaW5kZXggKiAoYXZhdGFyV2lkdGggKyBzcGFjaW5nKTtcbiAgICAgICAgICAgIGNoaWxkLnNldFBvc2l0aW9uKHgsIDApO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6Lez6L2s5Yiw5ri45oiP57uT5p2f5Zy65pmvXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfdHJhbnNpdGlvblRvR2FtZU92ZXJTY2VuZSh3aW5uZXIsIHdpbm5lclRleHQpIHtcbiAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0gPT09PT0g5byA5aeL5Zy65pmv6Lez6L2s5rWB56iLID09PT09YCk7XG4gICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOWHhuWkh+i3s+i9rOWIsOa4uOaIj+e7k+adn+WcuuaZrzogXCIke3RoaXMuZ2FtZU92ZXJTY2VuZU5hbWV9XCJgKTtcbiAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g6IOc5Yip5pa5OiAke3dpbm5lclRleHR9ICgke3dpbm5lcn0pYCk7XG5cbiAgICAgICAgLy8g5pa55rOVMTog5L2/55So5YWo5bGA5a+56LGh5Lyg6YCS5pWw5o2u77yI5o6o6I2Q77yJXG4gICAgICAgIHdpbmRvdy5CYXR0bGVHYW1lUmVzdWx0ID0ge1xuICAgICAgICAgICAgd2lubmVyOiB3aW5uZXIsXG4gICAgICAgICAgICB3aW5uZXJUZXh0OiB3aW5uZXJUZXh0XG4gICAgICAgIH07XG4gICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOW3suiuvue9ruWFqOWxgOaVsOaNrjogd2luZG93LkJhdHRsZUdhbWVSZXN1bHQgPWAsIHdpbmRvdy5CYXR0bGVHYW1lUmVzdWx0KTtcblxuICAgICAgICAvLyDlu7bov5/kuIDlsI/mrrXml7bpl7Tlho3ot7PovazvvIznoa7kv53miYDmnInmiJjmlpfliqjnlLvlrozmiJBcbiAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g5bu26L+fMC4156eS5ZCO6Lez6L2s5Zy65pmvLi4uYCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGNjLmxvZyhgW0JhdHRsZUNvbnRyb2xsZXJdIOW8gOWni+WKoOi9veWcuuaZrzogJHt0aGlzLmdhbWVPdmVyU2NlbmVOYW1lfWApO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5nYW1lT3ZlclNjZW5lTmFtZSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtCYXR0bGVDb250cm9sbGVyXSDlnLrmma/liqDovb3lpLHotKU6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgW0JhdHRsZUNvbnRyb2xsZXJdIOivt+ajgOafpeWcuuaZr+WQjeensOaYr+WQpuato+ehru+8jOWcuuaZr+aWh+S7tuaYr+WQpuWtmOWcqGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5Zy65pmv5Yqg6L295aSx6LSl77yM5Zue6YCA5Yiw6Z2i5p2/5pi+56S65pa55byPXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaG93R2FtZU92ZXJQYW5lbCh3aW5uZXIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQmF0dGxlQ29udHJvbGxlcl0g4pyFIOWcuuaZr+WKoOi9veaIkOWKnzogJHt0aGlzLmdhbWVPdmVyU2NlbmVOYW1lfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtCYXR0bGVDb250cm9sbGVyXSDlnLrmma/ot7PovazlvILluLg6ICR7ZS5tZXNzYWdlfWApO1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbQmF0dGxlQ29udHJvbGxlcl0g6ZSZ6K+v5aCG5qCIOiAke2Uuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5Y+R55Sf5byC5bi477yM5Zue6YCA5Yiw6Z2i5p2/5pi+56S65pa55byPXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd0dhbWVPdmVyUGFuZWwod2lubmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMC41KTsgLy8g5bu26L+fMC4156eSXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWcqOW9k+WJjeWcuuaZr+aYvuekuua4uOaIj+e7k+adn+mdouadv1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3Nob3dHYW1lT3ZlclBhbmVsKHdpbm5lcikge1xuICAgICAgICBpZiAodGhpcy5nYW1lT3ZlclBhbmVsKSB7XG4gICAgICAgICAgICBjb25zdCBnYW1lT3ZlclBhbmVsQ29tcCA9IHRoaXMuZ2FtZU92ZXJQYW5lbC5nZXRDb21wb25lbnQoXCJHYW1lT3ZlclBhbmVsXCIpO1xuICAgICAgICAgICAgaWYgKGdhbWVPdmVyUGFuZWxDb21wKSB7XG4gICAgICAgICAgICAgICAgZ2FtZU92ZXJQYW5lbENvbXAuc2hvd0dhbWVPdmVyKHdpbm5lcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiW0JhdHRsZUNvbnRyb2xsZXJdIGdhbWVPdmVyUGFuZWzoioLngrnmnKrmjILovb1HYW1lT3ZlclBhbmVs57uE5Lu277yBXCIpO1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiICAg6K+35ZyoZ2FtZU92ZXJQYW5lbOiKgueCueS4iua3u+WKoEdhbWVPdmVyUGFuZWznu4Tku7ZcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIltCYXR0bGVDb250cm9sbGVyXSDmnKrorr7nva5nYW1lT3ZlclBhbmVs6IqC54K577yBXCIpO1xuICAgICAgICAgICAgY2MuZXJyb3IoXCIgICDor7flnKhCYXR0bGVDb250cm9sbGVy55qE5bGe5oCn5qOA5p+l5Zmo5Lit6K6+572uZ2FtZU92ZXJQYW5lbOWxnuaAp1wiKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19