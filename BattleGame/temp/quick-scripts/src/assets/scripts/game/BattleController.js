"use strict";
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
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var stats, team, skills, CharacterDataManager, savedData, LevelSystem, initialLevel, initialExp, skillsToInit, SkillDataManager, characterName, savedSkills, _require2, SkillConfig;
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

            // ⭐ 初始化技能（优先从服务器加载，否则使用data中的技能）
            skillsToInit = data.skills || []; // 尝试从服务器加载技能数据
            _context2.prev = 30;
            SkillDataManager = require("SkillDataManager");
            characterName = data.name || node.name;
            _context2.next = 35;
            return SkillDataManager.loadCharacterSkills(characterName);
          case 35:
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

              cc.log("[BattleController] \u2713 \u4ECE\u670D\u52A1\u5668\u52A0\u8F7D\u6280\u80FD: " + characterName + ", \u6570\u91CF=" + skillsToInit.length);
            }
            _context2.next = 42;
            break;
          case 39:
            _context2.prev = 39;
            _context2.t0 = _context2["catch"](30);
            cc.warn("[BattleController] \u52A0\u8F7D\u6280\u80FD\u6570\u636E\u5931\u8D25\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u6280\u80FD: " + _context2.t0.message);
          case 42:
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
          case 46:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[30, 39]]);
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