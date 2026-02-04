
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ecs/CharacterViewUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b65e6CyLjFJiZlgPPPHKXLR', 'CharacterViewUI');
// Scripts/ecs/CharacterViewUI.js

"use strict";

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * 人物属性查看UI组件
 * 管理头像列表、人物原型显示、属性面板
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // 左侧头像列表容器
    avatarListContainer: {
      "default": null,
      type: cc.Node,
      tooltip: "左侧头像列表容器节点"
    },
    // 中间人物原型显示区域
    characterDisplayArea: {
      "default": null,
      type: cc.Node,
      tooltip: "中间人物原型显示区域节点"
    },
    // 道具栏容器（显示在人物原型下方）
    inventoryContainer: {
      "default": null,
      type: cc.Node,
      tooltip: "道具栏容器节点（网格布局，显示在人物原型下方）"
    },
    // 装备栏容器（3个格子，可放在道具栏上方或下方）
    equipmentContainer: {
      "default": null,
      type: cc.Node,
      tooltip: "装备栏容器节点（3个格子：如武器/防具/饰品）"
    },
    // 装备格子Prefab（不填则使用 itemSlotPrefab）
    equipmentSlotPrefab: {
      "default": null,
      type: cc.Prefab,
      tooltip: "装备格子Prefab，留空则使用道具格子Prefab"
    },
    // 道具项Prefab（用于创建道具格子）
    itemSlotPrefab: {
      "default": null,
      type: cc.Prefab,
      tooltip: "道具格子Prefab（包含图标和数量标签）"
    },
    // 道具信息弹窗组件（可选）
    itemTooltip: {
      "default": null,
      type: cc.Node,
      tooltip: "道具信息弹窗节点（包含ItemTooltip组件）"
    },
    // 道具栏网格配置
    inventoryColumns: {
      "default": 6,
      tooltip: "道具栏列数（每行显示的道具数量）"
    },
    inventoryRows: {
      "default": 4,
      tooltip: "道具栏行数"
    },
    itemSlotSize: {
      "default": 80,
      tooltip: "道具格子大小（宽高）"
    },
    itemSlotSpacing: {
      "default": 0,
      tooltip: "道具格子之间的间距"
    },
    // 属性面板（半透明背景）
    statsPanel: {
      "default": null,
      type: cc.Node,
      tooltip: "属性面板节点（半透明背景）"
    },
    // 头像Prefab（用于动态创建头像）
    avatarPrefab: {
      "default": null,
      type: cc.Prefab,
      tooltip: "头像Prefab（包含头像图片）"
    },
    // 单位数据配置
    unitDataConfig: {
      "default": null,
      tooltip: "单位数据配置（可选，如果不设置则从UnitDataConfig获取）"
    },
    // 备用资源：英雄头像资源列表（仅在UnitDataConfig中资源为空时使用）
    heroIcons: {
      "default": [],
      type: [cc.SpriteFrame],
      tooltip: "英雄头像资源列表（备用，仅在SelectScene未加载时使用）"
    },
    // 备用资源：怪物头像资源列表（仅在UnitDataConfig中资源为空时使用）
    monsterIcons: {
      "default": [],
      type: [cc.SpriteFrame],
      tooltip: "怪物头像资源列表（备用，仅在SelectScene未加载时使用）"
    },
    // 备用资源：英雄Prefab列表（仅在UnitDataConfig中资源为空时使用）
    heroPrefabs: {
      "default": [],
      type: [cc.Prefab],
      tooltip: "英雄Prefab列表（备用，仅在SelectScene未加载时使用）"
    },
    // 备用资源：怪物Prefab列表（仅在UnitDataConfig中资源为空时使用）
    monsterPrefabs: {
      "default": [],
      type: [cc.Prefab],
      tooltip: "怪物Prefab列表（备用，仅在SelectScene未加载时使用）"
    },
    // 头像间距
    avatarSpacing: {
      "default": 100,
      tooltip: "头像之间的间距"
    },
    // 属性面板中的属性标签（需要在编辑器中绑定）
    hpLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "生命值标签"
    },
    attackLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "攻击力标签"
    },
    defenseLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "防御力标签"
    },
    speedLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "速度标签"
    },
    critLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "暴击率标签"
    },
    missLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "闪避率标签"
    },
    levelLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "等级标签"
    },
    expLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "经验值标签"
    }
  },
  onLoad: function onLoad() {
    var _this = this;
    // 获取单位数据配置（优先使用SelectScene中已设置好的资源）
    if (!this.unitDataConfig) {
      this.unitDataConfig = require("UnitDataConfig");
    }

    // 如果UnitDataConfig中的资源为空，从场景配置中加载（备用方案）
    this._loadConfigIfNeeded();

    // 当前显示的人物原型
    this.currentDisplayPrefab = null;
    // 当前选中的单位数据
    this.currentUnitData = null;

    // 初始化UI
    this._initAvatars();

    // 初始化道具栏（延迟一帧，确保容器节点已完全初始化）
    this.scheduleOnce(function () {
      _this._initInventory();
    }, 0);

    // 初始化装备栏（3个格子）
    this.scheduleOnce(function () {
      _this._initEquipmentBar();
    }, 0.05);

    // 设置道具图标（如果ItemIconSetter组件已设置）
    this._setupItemIcons();

    // 初始化道具数据（添加5个升级药水用于测试）
    this.scheduleOnce( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this._initDefaultItems();
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })), 0.5);

    // 隐藏属性面板
    if (this.statsPanel) {
      this.statsPanel.active = false;
    }

    // 拖拽状态（装备从道具栏拖到装备栏 / 从装备栏拖回）
    this._dragSprite = null;
    this._draggingItem = null;
    this._draggingSlot = null;
    this._draggingFromEquipment = null;
    this._dragIconSize = null;
    this._dragStartCanvasPos = null; // 拖拽开始时原始图标在 Canvas 下的坐标（用于从原位置“拽出来”）

    // 绑定点击事件（点击任意地方关闭属性面板）
    // 使用Canvas或场景根节点来捕获点击事件
    var canvas = cc.find("Canvas");
    if (canvas) {
      // 先绑定拖拽相关事件（优先级更高）
      canvas.on(cc.Node.EventType.TOUCH_MOVE, this._onGlobalTouchMove, this);
      canvas.on(cc.Node.EventType.TOUCH_END, this._onGlobalTouchEnd, this);
      canvas.on(cc.Node.EventType.TOUCH_CANCEL, this._onGlobalTouchEnd, this);
      // 点击关闭面板事件（在拖拽事件之后，避免冲突）
      canvas.on(cc.Node.EventType.TOUCH_END, this._onCanvasClick, this);
    }
  },
  /**
   * 如果UnitDataConfig中的资源为空，从场景配置中加载（备用方案）
   * 优先使用SelectScene中已设置好的资源，如果为空才使用场景配置
   * @private
   */
  _loadConfigIfNeeded: function _loadConfigIfNeeded() {
    var _this2 = this;
    var needLoad = false;

    // 检查是否有资源为空
    if (this.unitDataConfig && this.unitDataConfig.heros) {
      for (var i = 0; i < this.unitDataConfig.heros.length; i++) {
        if (!this.unitDataConfig.heros[i].icon || !this.unitDataConfig.heros[i].prefab) {
          needLoad = true;
          break;
        }
      }
    }
    if (!needLoad && this.unitDataConfig && this.unitDataConfig.monsters) {
      for (var _i = 0; _i < this.unitDataConfig.monsters.length; _i++) {
        if (!this.unitDataConfig.monsters[_i].icon || !this.unitDataConfig.monsters[_i].prefab) {
          needLoad = true;
          break;
        }
      }
    }

    // 如果有资源为空，从场景配置中加载
    if (needLoad) {
      cc.log("[CharacterViewUI] 检测到UnitDataConfig中资源为空，从场景配置加载（备用方案）");

      // 应用英雄头像和Prefab配置（仅在UnitDataConfig中资源为空时设置）
      if (this.heroIcons && this.heroIcons.length > 0) {
        this.heroIcons.forEach(function (icon, index) {
          if (_this2.unitDataConfig.heros && _this2.unitDataConfig.heros[index] && icon && !_this2.unitDataConfig.heros[index].icon) {
            _this2.unitDataConfig.heros[index].icon = icon;
            cc.log("[CharacterViewUI] \u4ECE\u573A\u666F\u914D\u7F6E\u8BBE\u7F6E\u82F1\u96C4\u5934\u50CF: " + _this2.unitDataConfig.heros[index].name);
          }
        });
      }
      if (this.heroPrefabs && this.heroPrefabs.length > 0) {
        this.heroPrefabs.forEach(function (prefab, index) {
          if (_this2.unitDataConfig.heros && _this2.unitDataConfig.heros[index] && prefab && !_this2.unitDataConfig.heros[index].prefab) {
            _this2.unitDataConfig.heros[index].prefab = prefab;
            cc.log("[CharacterViewUI] \u4ECE\u573A\u666F\u914D\u7F6E\u8BBE\u7F6E\u82F1\u96C4Prefab: " + _this2.unitDataConfig.heros[index].name);
          }
        });
      }

      // 应用怪物头像和Prefab配置（仅在UnitDataConfig中资源为空时设置）
      if (this.monsterIcons && this.monsterIcons.length > 0) {
        this.monsterIcons.forEach(function (icon, index) {
          if (_this2.unitDataConfig.monsters && _this2.unitDataConfig.monsters[index] && icon && !_this2.unitDataConfig.monsters[index].icon) {
            _this2.unitDataConfig.monsters[index].icon = icon;
            cc.log("[CharacterViewUI] \u4ECE\u573A\u666F\u914D\u7F6E\u8BBE\u7F6E\u602A\u7269\u5934\u50CF: " + _this2.unitDataConfig.monsters[index].name);
          }
        });
      }
      if (this.monsterPrefabs && this.monsterPrefabs.length > 0) {
        this.monsterPrefabs.forEach(function (prefab, index) {
          if (_this2.unitDataConfig.monsters && _this2.unitDataConfig.monsters[index] && prefab && !_this2.unitDataConfig.monsters[index].prefab) {
            _this2.unitDataConfig.monsters[index].prefab = prefab;
            cc.log("[CharacterViewUI] \u4ECE\u573A\u666F\u914D\u7F6E\u8BBE\u7F6E\u602A\u7269Prefab: " + _this2.unitDataConfig.monsters[index].name);
          }
        });
      }
    } else {
      cc.log("[CharacterViewUI] UnitDataConfig中已有资源，直接使用（可能由SelectScene设置）");
    }
  },
  /**
   * 绑定Canvas点击事件
   * @private
   */
  _bindCanvasClick: function _bindCanvasClick() {
    var _this3 = this;
    var canvas = cc.find("Canvas");
    if (canvas) {
      canvas.on(cc.Node.EventType.TOUCH_END, this._onCanvasClick, this);
    } else {
      // 延迟绑定（如果Canvas还未创建）
      this.scheduleOnce(function () {
        _this3._bindCanvasClick();
      }, 0.1);
    }
  },
  /**
   * 初始化头像列表
   * @private
   */
  _initAvatars: function _initAvatars() {
    var _this4 = this;
    if (!this.avatarListContainer) {
      cc.error("[CharacterViewUI] 未设置avatarListContainer，无法创建头像列表");
      return;
    }
    if (!this.avatarPrefab) {
      cc.error("[CharacterViewUI] 未设置avatarPrefab，无法创建头像");
      return;
    }

    // 清空容器
    this.avatarListContainer.removeAllChildren();

    // 计算英雄数量（用于怪物头像的位置偏移）
    var heroCount = this.unitDataConfig && this.unitDataConfig.heros ? this.unitDataConfig.heros.length : 0;

    // 创建英雄头像
    if (this.unitDataConfig && this.unitDataConfig.heros) {
      this.unitDataConfig.heros.forEach(function (heroData, index) {
        _this4._createAvatar(heroData, "hero", index);
      });
    }

    // 创建怪物头像（位置从英雄后面开始）
    if (this.unitDataConfig && this.unitDataConfig.monsters) {
      this.unitDataConfig.monsters.forEach(function (monsterData, index) {
        // 使用 heroCount + index 作为位置索引，让怪物排在英雄后面
        _this4._createAvatar(monsterData, "monster", heroCount + index);
      });
    }
  },
  /**
   * 初始化道具栏
   * @private
   */
  _initInventory: function _initInventory() {
    if (!this.inventoryContainer) {
      cc.warn("[CharacterViewUI] 未设置inventoryContainer，跳过道具栏初始化");
      return;
    }
    if (!this.itemSlotPrefab) {
      cc.warn("[CharacterViewUI] 未设置itemSlotPrefab，跳过道具栏初始化");
      return;
    }

    // 强制设置行列数（确保使用新的值）
    if (this.inventoryColumns !== 6) {
      this.inventoryColumns = 6;
      cc.log("[CharacterViewUI] 强制设置列数为6");
    }
    if (this.inventoryRows !== 4) {
      this.inventoryRows = 4;
      cc.log("[CharacterViewUI] 强制设置行数为4");
    }

    // 清空容器
    this.inventoryContainer.removeAllChildren();

    // 确保容器可见
    this.inventoryContainer.active = true;
    this.inventoryContainer.opacity = 255;

    // 设置容器锚点为居中（0.5, 0.5），这样位置计算更简单
    this.inventoryContainer.setAnchorPoint(0.5, 0.5);

    // 计算道具栏总格子数和容器大小
    var totalSlots = this.inventoryColumns * this.inventoryRows;
    var slotSize = this.itemSlotSize || 80;
    var spacing = this.itemSlotSpacing || 0; // 间隔改为0

    // 先计算并设置容器大小（必须在添加子节点之前）
    var totalWidth = this.inventoryColumns * slotSize + (this.inventoryColumns - 1) * spacing;
    var totalHeight = this.inventoryRows * slotSize + (this.inventoryRows - 1) * spacing;
    this.inventoryContainer.setContentSize(totalWidth, totalHeight);

    // 添加Mask组件，裁剪超出范围的格子
    var mask = this.inventoryContainer.getComponent(cc.Mask);
    if (!mask) {
      mask = this.inventoryContainer.addComponent(cc.Mask);
      mask.type = cc.Mask.Type.RECT; // 矩形裁剪
      cc.log("[CharacterViewUI] 自动添加Mask组件到道具栏容器（用于裁剪超出范围的格子）");
    }
    cc.log("[CharacterViewUI] \u9053\u5177\u680F\u5BB9\u5668\u5927\u5C0F: " + totalWidth + " x " + totalHeight + ", \u683C\u5B50\u6570: " + totalSlots + ", \u951A\u70B9: (" + this.inventoryContainer.getAnchorPoint().x + ", " + this.inventoryContainer.getAnchorPoint().y + ")");

    // 方式一：使用Layout组件自动布局（推荐）
    // 检查是否已有Layout组件，如果没有则添加
    var layout = this.inventoryContainer.getComponent(cc.Layout);
    if (!layout) {
      layout = this.inventoryContainer.addComponent(cc.Layout);
      cc.log("[CharacterViewUI] 自动添加Layout组件到道具栏容器");
    }

    // 禁用Layout组件，使用手动布局（更可控）
    // Layout组件在GRID模式下可能有问题，手动布局更可靠
    if (layout) {
      layout.enabled = false; // 禁用Layout组件
      cc.log("[CharacterViewUI] 禁用Layout组件，使用手动布局");
    }

    // 创建道具格子
    for (var i = 0; i < totalSlots; i++) {
      var slotNode = cc.instantiate(this.itemSlotPrefab);
      if (!slotNode) {
        cc.error("[CharacterViewUI] \u65E0\u6CD5\u5B9E\u4F8B\u5316\u9053\u5177\u683C\u5B50Prefab (\u7D22\u5F15: " + i + ")");
        continue;
      }
      slotNode.name = "ItemSlot_" + i;

      // 确保节点可见
      slotNode.active = true;
      slotNode.opacity = 255;

      // 强制设置节点大小为slotSize（覆盖Prefab的默认大小）
      slotNode.setContentSize(slotSize, slotSize);

      // 设置节点锚点为居中（便于定位）
      slotNode.setAnchorPoint(0.5, 0.5);

      // 设置缩放为0.8
      slotNode.setScale(0.8, 0.8, 0.8);

      // 添加到容器
      this.inventoryContainer.addChild(slotNode);

      // 初始化道具格子（空状态）
      this._initItemSlot(slotNode, i);
    }

    // 验证创建结果
    var createdSlots = this.inventoryContainer.children.length;
    cc.log("[CharacterViewUI] \u9053\u5177\u680F\u521D\u59CB\u5316\u5B8C\u6210: " + this.inventoryRows + "\u884C x " + this.inventoryColumns + "\u5217 = " + totalSlots + "\u4E2A\u683C\u5B50, \u5B9E\u9645\u521B\u5EFA: " + createdSlots + "\u4E2A");
    if (createdSlots === 0) {
      cc.error("[CharacterViewUI] 警告：没有创建任何道具格子！请检查itemSlotPrefab是否正确绑定。");
      return;
    }

    // 使用手动布局（确保间隔为0，并添加边框）
    this._manualLayoutInventory();

    // 输出调试信息
    var containerPos = this.inventoryContainer.getPosition();
    var containerWorldPos = this.inventoryContainer.convertToWorldSpaceAR(cc.v2(0, 0));
    cc.log("[CharacterViewUI] \u5BB9\u5668\u4F4D\u7F6E: \u672C\u5730(" + containerPos.x.toFixed(1) + ", " + containerPos.y.toFixed(1) + "), \u4E16\u754C(" + containerWorldPos.x.toFixed(1) + ", " + containerWorldPos.y.toFixed(1) + ")");
    cc.log("[CharacterViewUI] \u5BB9\u5668\u5927\u5C0F: " + this.inventoryContainer.getContentSize().width + " x " + this.inventoryContainer.getContentSize().height);
    cc.log("[CharacterViewUI] \u5BB9\u5668\u53EF\u89C1\u6027: active=" + this.inventoryContainer.active + ", opacity=" + this.inventoryContainer.opacity);
  },
  /**
   * 手动布局道具栏（备用方案）
   * @private
   */
  _manualLayoutInventory: function _manualLayoutInventory() {
    var _this5 = this;
    if (!this.inventoryContainer) {
      return;
    }
    var slotSize = this.itemSlotSize || 80;
    var spacing = this.itemSlotSpacing || 0; // 间隔改为0
    var scale = 0.8; // 缩放值
    var slots = this.inventoryContainer.children;

    // 获取容器大小和锚点
    var containerSize = this.inventoryContainer.getContentSize();
    var anchorPoint = this.inventoryContainer.getAnchorPoint();

    // 计算实际显示大小（考虑缩放）
    var displaySize = slotSize * scale;

    // 计算容器大小（使用实际显示大小，确保紧密排列）
    var totalWidth = this.inventoryColumns * displaySize;
    var totalHeight = this.inventoryRows * displaySize;

    // 更新容器大小（使用实际显示大小）
    this.inventoryContainer.setContentSize(totalWidth, totalHeight);

    // 计算起始位置：从左上角开始，第一个格子的中心位置
    // 使用实际显示大小来计算位置，确保紧密排列
    var startX = -totalWidth / 2 + displaySize / 2;
    var startY = totalHeight / 2 - displaySize / 2;
    cc.log("[CharacterViewUI] \u624B\u52A8\u5E03\u5C40\u53C2\u6570: slotSize=" + slotSize + ", scale=" + scale + ", displaySize=" + displaySize.toFixed(1) + ", spacing=" + spacing);
    cc.log("[CharacterViewUI] \u5BB9\u5668\u5927\u5C0F: " + totalWidth.toFixed(1) + " x " + totalHeight.toFixed(1) + ", startX=" + startX.toFixed(1) + ", startY=" + startY.toFixed(1));

    // 手动设置每个格子的位置
    slots.forEach(function (slotNode, index) {
      var row = Math.floor(index / _this5.inventoryColumns);
      var col = index % _this5.inventoryColumns;

      // 计算位置（使用实际显示大小，确保紧密排列，无间隙）
      var x = startX + col * displaySize;
      var y = startY - row * displaySize;

      // 设置位置（确保在容器范围内）
      slotNode.setPosition(x, y);

      // 强制设置节点大小为slotSize（覆盖Prefab的默认大小）
      slotNode.setContentSize(slotSize, slotSize);

      // 设置节点锚点为居中
      slotNode.setAnchorPoint(0.5, 0.5);

      // 设置缩放为0.8（必须在设置位置之后，确保位置计算正确）
      slotNode.setScale(0.8, 0.8, 0.8);

      // 确保节点可见
      slotNode.active = true;
      slotNode.opacity = 255;

      // 调整子节点大小（Background、Icon等）
      var children = slotNode.children;
      for (var j = 0; j < children.length; j++) {
        var child = children[j];
        // 如果是背景或图标节点，设置为与父节点相同大小
        if (child.name === "Background" || child.name === "Icon") {
          child.setContentSize(slotSize, slotSize);
          child.setAnchorPoint(0.5, 0.5);
        }
      }

      // 确保格子可见（添加背景）
      _this5._ensureSlotVisible(slotNode, index);

      // 添加边框线框（用于区分每个格子）- 必须在最后添加，确保显示在最上层
      _this5._addSlotBorder(slotNode, slotSize);

      // 验证位置是否在容器范围内（使用实际显示大小）
      var slotPos = slotNode.getPosition();
      var slotHalfSize = displaySize / 2;
      var containerHalfWidth = totalWidth / 2;
      var containerHalfHeight = totalHeight / 2;
      var isInRange = slotPos.x - slotHalfSize >= -containerHalfWidth && slotPos.x + slotHalfSize <= containerHalfWidth && slotPos.y - slotHalfSize >= -containerHalfHeight && slotPos.y + slotHalfSize <= containerHalfHeight;
      if (index < 5) {
        // 输出前5个格子的详细信息
        cc.log("[CharacterViewUI] \u683C\u5B50" + index + ": \u4F4D\u7F6E(" + x.toFixed(1) + ", " + y.toFixed(1) + "), \u5927\u5C0F" + slotSize + "x" + slotSize + ", \u5BB9\u5668\u5185: " + (isInRange ? '✓' : '✗'));
      }
      if (!isInRange) {
        cc.warn("[CharacterViewUI] \u8B66\u544A\uFF1A\u683C\u5B50" + index + "\u4F4D\u7F6E\u8D85\u51FA\u5BB9\u5668\u8303\u56F4\uFF01\u4F4D\u7F6E: (" + x.toFixed(1) + ", " + y.toFixed(1) + "), \u5BB9\u5668\u5927\u5C0F: " + containerSize.width + "x" + containerSize.height);
      }
    });
    cc.log("[CharacterViewUI] \u624B\u52A8\u5E03\u5C40\u5B8C\u6210\uFF0C\u5171" + slots.length + "\u4E2A\u683C\u5B50");
  },
  /**
   * 确保道具格子可见（如果没有背景，添加一个简单的背景）
   * @private
   * @param {cc.Node} slotNode - 道具格子节点
   * @param {number} index - 格子索引
   */
  _ensureSlotVisible: function _ensureSlotVisible(slotNode, index) {
    // 检查节点是否有可见的Sprite组件
    var hasVisibleSprite = false;
    var spriteNode = null;

    // 检查主节点
    var mainSprite = slotNode.getComponent(cc.Sprite);
    if (mainSprite && mainSprite.spriteFrame) {
      hasVisibleSprite = true;
      spriteNode = slotNode;
    }

    // 检查子节点（Background、Icon等）
    if (!hasVisibleSprite) {
      var children = slotNode.children;
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        var childSprite = child.getComponent(cc.Sprite);
        if (childSprite && childSprite.spriteFrame) {
          hasVisibleSprite = true;
          spriteNode = child;
          break;
        }
      }
    }

    // 如果没有可见的Sprite，创建一个简单的背景（不包含边框，边框由_addSlotBorder单独处理）
    if (!hasVisibleSprite) {
      // 检查是否已有Background节点
      var bgNode = slotNode.getChildByName("Background");
      if (!bgNode) {
        // 创建背景节点
        bgNode = new cc.Node("Background");
        bgNode.setContentSize(slotNode.getContentSize().width, slotNode.getContentSize().height);
        bgNode.setAnchorPoint(0.5, 0.5);

        // 使用Graphics组件绘制背景（不绘制边框）
        var graphics = bgNode.addComponent(cc.Graphics);

        // 绘制背景（半透明灰色）
        graphics.fillColor = new cc.Color(60, 60, 60, 80);
        var slotSize = slotNode.getContentSize().width;
        graphics.rect(-slotSize / 2, -slotSize / 2, slotSize, slotSize);
        graphics.fill();
        slotNode.addChild(bgNode);
        bgNode.setPosition(0, 0);
        if (index === 0) {
          cc.log("[CharacterViewUI] \u4E3A\u9053\u5177\u683C\u5B50\u6DFB\u52A0\u4E86Graphics\u80CC\u666F");
        }
      }
    } else if (index === 0) {
      cc.log("[CharacterViewUI] \u9053\u5177\u683C\u5B50\u5DF2\u6709\u53EF\u89C1\u80CC\u666F: " + spriteNode.name);
    }
  },
  /**
   * 为道具格子添加边框线框（用于区分每个格子）
   * @private
   * @param {cc.Node} slotNode - 道具格子节点
   * @param {number} slotSize - 格子大小
   */
  _addSlotBorder: function _addSlotBorder(slotNode, slotSize) {
    // 检查是否已有Border节点，如果有则先移除
    var borderNode = slotNode.getChildByName("Border");
    if (borderNode) {
      borderNode.destroy();
    }

    // 创建边框节点
    borderNode = new cc.Node("Border");
    borderNode.setContentSize(slotSize, slotSize);
    borderNode.setAnchorPoint(0.5, 0.5);

    // 使用Graphics组件绘制边框线框
    var graphics = borderNode.addComponent(cc.Graphics);

    // 设置边框样式（白色，5像素宽，更明显）
    graphics.strokeColor = new cc.Color(255, 255, 255, 255);
    graphics.lineWidth = 5;

    // 绘制矩形边框（从中心点开始绘制）
    // 注意：由于节点有缩放0.8，实际显示大小会小一些，但边框会正确显示
    var halfSize = slotSize / 2;
    graphics.rect(-halfSize, -halfSize, slotSize, slotSize);
    graphics.stroke();

    // 确保边框节点在最上层（最后添加，显示在最前面）
    slotNode.addChild(borderNode);
    borderNode.setPosition(0, 0);
    borderNode.zIndex = 999; // 使用zIndex替代已废弃的setLocalZOrder，设置较高的层级，确保显示在最前面

    // 确保边框节点可见
    borderNode.active = true;
    borderNode.opacity = 255;
  },
  /**
   * 初始化道具格子
   * @private
   * @param {cc.Node} slotNode - 道具格子节点
   * @param {number} index - 格子索引
   */
  _initItemSlot: function _initItemSlot(slotNode, index) {
    // 查找图标节点和数量标签
    var iconNode = slotNode.getChildByName("Icon") || slotNode;
    var countLabel = slotNode.getChildByName("CountLabel");

    // 初始状态：空格子
    if (iconNode) {
      var sprite = iconNode.getComponent(cc.Sprite);
      if (sprite) {
        sprite.spriteFrame = null; // 清空图标
      }

      iconNode.opacity = 100; // 半透明显示空格子
    }

    if (countLabel) {
      var label = countLabel.getComponent(cc.Label);
      if (label) {
        label.string = ""; // 清空数量
      }
    }

    // 保存格子索引
    slotNode._slotIndex = index;
    slotNode._isEmpty = true;
  },
  /**
   * 更新道具栏显示（根据当前选中的角色）
   * @private
   */
  _updateInventory: function _updateInventory() {
    var _this6 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var items, slots;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(!_this6.inventoryContainer || !_this6.currentUnitData)) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return");
          case 2:
            _context2.next = 4;
            return _this6._getCharacterItems(_this6.currentUnitData.name);
          case 4:
            items = _context2.sent;
            // 更新每个格子
            slots = _this6.inventoryContainer.children;
            slots.forEach(function (slotNode, index) {
              if (index < items.length && items[index]) {
                // 有道具，显示道具信息
                _this6._setItemSlot(slotNode, items[index]);
              } else {
                // 空格子
                _this6._initItemSlot(slotNode, index);

                // 清空所有事件（空格子不需要显示tooltip）
                slotNode.off(cc.Node.EventType.MOUSE_DOWN);
                slotNode.off(cc.Node.EventType.MOUSE_UP);
                slotNode.off(cc.Node.EventType.TOUCH_START);
                slotNode.off(cc.Node.EventType.TOUCH_END);
                slotNode._touchStartTime = null;
              }
            });
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  /**
   * 初始化装备栏（3个格子）
   * @private
   */
  _initEquipmentBar: function _initEquipmentBar() {
    if (!this.equipmentContainer) {
      cc.warn("[CharacterViewUI] 未设置equipmentContainer，跳过装备栏初始化");
      return;
    }
    var prefab = this.equipmentSlotPrefab || this.itemSlotPrefab;
    if (!prefab) {
      cc.warn("[CharacterViewUI] 未设置equipmentSlotPrefab且无itemSlotPrefab，跳过装备栏初始化");
      return;
    }
    var slotCount = 3;
    var slotSize = this.itemSlotSize || 80;
    var spacing = 10;
    this.equipmentContainer.removeAllChildren();
    this.equipmentContainer.active = true;
    this.equipmentContainer.opacity = 255;
    this.equipmentContainer.setAnchorPoint(0.5, 0.5);
    var totalHeight = slotCount * slotSize + (slotCount - 1) * spacing;
    this.equipmentContainer.setContentSize(slotSize, totalHeight);
    for (var i = 0; i < slotCount; i++) {
      var slotNode = cc.instantiate(prefab);
      if (!slotNode) {
        cc.error("[CharacterViewUI] \u65E0\u6CD5\u5B9E\u4F8B\u5316\u88C5\u5907\u683C\u5B50 Prefab (\u7D22\u5F15: " + i + ")");
        continue;
      }
      var ItemConfig = require("ItemConfig");
      var slotTypes = ItemConfig.EQUIPMENT_SLOTS || ["weapon", "armor", "shoes"];
      slotNode.name = "EquipmentSlot_" + i;
      slotNode._slotIndex = i;
      slotNode._slotType = slotTypes[i] || "weapon";
      slotNode._isEquipment = true;
      slotNode.active = true;
      slotNode.opacity = 255;
      slotNode.setContentSize(slotSize, slotSize);
      slotNode.setAnchorPoint(0.5, 0.5);
      slotNode.setScale(0.8, 0.8, 0.8);
      this.equipmentContainer.addChild(slotNode);
      this._initItemSlot(slotNode, i);
    }
    this._layoutEquipmentBar();
    cc.log("[CharacterViewUI] \u88C5\u5907\u680F\u521D\u59CB\u5316\u5B8C\u6210\uFF0C\u5171 " + slotCount + " \u4E2A\u683C\u5B50");
  },
  /**
   * 装备栏布局（3个格子纵向排列）
   * @private
   */
  _layoutEquipmentBar: function _layoutEquipmentBar() {
    var _this7 = this;
    if (!this.equipmentContainer || this.equipmentContainer.children.length === 0) {
      return;
    }
    var slotSize = this.itemSlotSize || 80;
    var scale = 0.8;
    var displaySize = slotSize * scale;
    var spacing = 10;
    var slots = this.equipmentContainer.children;
    var totalHeight = slots.length * displaySize + (slots.length - 1) * spacing;
    this.equipmentContainer.setContentSize(displaySize, totalHeight);
    var startY = totalHeight / 2 - displaySize / 2;
    slots.forEach(function (slotNode, index) {
      var y = startY - index * (displaySize + spacing);
      slotNode.setPosition(0, y);
      slotNode.setContentSize(slotSize, slotSize);
      slotNode.setAnchorPoint(0.5, 0.5);
      slotNode.setScale(0.8, 0.8, 0.8);
      _this7._ensureSlotVisible(slotNode, index);
      _this7._addSlotBorder(slotNode, slotSize);

      // 让装备栏格子里的 Icon 节点尺寸适配格子大小
      var iconNode = slotNode.getChildByName("Icon");
      if (iconNode) {
        iconNode.setContentSize(slotSize, slotSize);
        iconNode.setAnchorPoint(0.5, 0.5);
        var sp = iconNode.getComponent(cc.Sprite);
        if (sp) {
          sp.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        }
      }
    });
  },
  /**
   * 更新装备栏显示（按当前角色从 EquipmentDataManager 加载，每位英雄独立）
   * @private
   */
  _updateEquipmentBar: function _updateEquipmentBar() {
    var _this8 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var EquipmentDataManager, ItemConfig, _yield$EquipmentDataM, equipmentSlots, slotNodes, i, slotNode, itemId, config, itemData;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!(!_this8.equipmentContainer || !_this8.currentUnitData)) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            EquipmentDataManager = require("EquipmentDataManager");
            ItemConfig = require("ItemConfig");
            _context3.next = 6;
            return EquipmentDataManager.getEquipment(_this8.currentUnitData.name);
          case 6:
            _yield$EquipmentDataM = _context3.sent;
            equipmentSlots = _yield$EquipmentDataM.slots;
            slotNodes = _this8.equipmentContainer.children;
            for (i = 0; i < slotNodes.length; i++) {
              slotNode = slotNodes[i];
              itemId = equipmentSlots[i] || null;
              if (itemId) {
                config = ItemConfig.getItemById(itemId);
                itemData = config ? {
                  id: config.id,
                  name: config.displayName || config.name,
                  icon: config.icon,
                  count: 1,
                  config: config
                } : null;
                if (itemData) {
                  _this8._setEquipmentSlot(slotNode, itemData, i);
                } else {
                  _this8._initItemSlot(slotNode, i);
                  slotNode._isEmpty = true;
                  slotNode._itemData = null;
                }
              } else {
                _this8._initItemSlot(slotNode, i);
                slotNode._isEmpty = true;
                slotNode._itemData = null;
              }
            }
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  /**
   * 设置装备格子内容（带拖拽卸下）
   * @private
   */
  _setEquipmentSlot: function _setEquipmentSlot(slotNode, itemData, slotIndex) {
    var _this9 = this;
    var iconNode = slotNode.getChildByName("Icon") || slotNode;
    var countLabel = slotNode.getChildByName("CountLabel");
    if (iconNode && itemData.icon) {
      var sprite = iconNode.getComponent(cc.Sprite);
      if (sprite) {
        sprite.spriteFrame = itemData.icon;
        // 确保图标按格子大小缩放显示
        sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
      }
      // 将 Icon 节点本身缩放到与格子一致
      var slotSize = this.itemSlotSize || slotNode.width || 80;
      iconNode.setContentSize(slotSize, slotSize);
      iconNode.setAnchorPoint(0.5, 0.5);
      iconNode.opacity = 255;
    } else if (iconNode) {
      var _sprite = iconNode.getComponent(cc.Sprite);
      if (_sprite) _sprite.spriteFrame = null;
      iconNode.opacity = 255;
    }
    if (countLabel) {
      var label = countLabel.getComponent(cc.Label);
      if (label) label.string = "";
    }
    slotNode._itemData = itemData;
    slotNode._isEmpty = false;
    slotNode._slotIndex = slotIndex;
    slotNode._slotType = slotNode._slotType || (require("ItemConfig").EQUIPMENT_SLOTS || ["weapon", "armor", "shoes"])[slotIndex];
    slotNode.off(cc.Node.EventType.TOUCH_START);
    slotNode.on(cc.Node.EventType.TOUCH_START, function (e) {
      e.stopPropagation();
      _this9._draggingFromEquipment = slotNode;
      _this9._draggingItem = itemData;
      _this9._dragIconSize = _this9._getSlotIconDisplaySize(slotNode);
      // 记录原始图标在 Canvas 下的位置（用于从原格子“拽出来”）
      var iconNode = slotNode.getChildByName("Icon") || slotNode;
      var canvas = cc.find("Canvas");
      if (canvas && iconNode && iconNode.isValid && iconNode.convertToWorldSpaceAR && canvas.convertToNodeSpaceAR) {
        var worldPos = iconNode.convertToWorldSpaceAR(cc.v2(0, 0));
        _this9._dragStartCanvasPos = canvas.convertToNodeSpaceAR(worldPos);
      } else {
        _this9._dragStartCanvasPos = null;
      }
    }, this);
  },
  /**
   * 获取触摸点下的格子节点（装备栏或道具栏）
   * @param {cc.Event.EventTouch} event
   * @returns {{ node: cc.Node, isEquipment: boolean, slotIndex: number, slotType?: string }|null}
   */
  _getNodeUnderTouch: function _getNodeUnderTouch(event) {
    if (!event || !event.touch) return null;

    // 获取UI坐标（相对于Canvas）
    var uiPos = null;
    if (event.getUILocation) {
      uiPos = event.getUILocation();
    } else if (event.touch && event.touch.getUILocation) {
      uiPos = event.touch.getUILocation();
    } else {
      // 降级方案：使用屏幕坐标
      var screenPos = event.getLocation();
      var canvas = cc.find("Canvas");
      if (canvas && canvas.getComponent(cc.Camera)) {
        var camera = canvas.getComponent(cc.Camera);
        uiPos = camera.getScreenToWorldPoint(screenPos);
      } else {
        uiPos = screenPos;
      }
    }
    if (!uiPos) return null;
    var worldPos = cc.v2(uiPos.x, uiPos.y);
    if (this.equipmentContainer && this.equipmentContainer.children) {
      var slots = this.equipmentContainer.children;
      for (var i = 0; i < slots.length; i++) {
        var slot = slots[i];
        if (!slot || !slot.parent) continue;
        try {
          var localPos = slot.parent.convertToNodeSpaceAR(worldPos);
          var rect = slot.getBoundingBox();
          if (rect && rect.contains && rect.contains(localPos)) {
            return {
              node: slot,
              isEquipment: true,
              slotIndex: i,
              slotType: slot._slotType
            };
          }
        } catch (e) {
          // 忽略转换错误
        }
      }
    }
    if (this.inventoryContainer && this.inventoryContainer.children) {
      var _slots = this.inventoryContainer.children;
      for (var _i2 = 0; _i2 < _slots.length; _i2++) {
        var _slot = _slots[_i2];
        if (!_slot || !_slot.parent) continue;
        try {
          var _localPos = _slot.parent.convertToNodeSpaceAR(worldPos);
          var _rect = _slot.getBoundingBox();
          if (_rect && _rect.contains && _rect.contains(_localPos)) {
            return {
              node: _slot,
              isEquipment: false,
              slotIndex: _i2
            };
          }
        } catch (e) {
          // 忽略转换错误
        }
      }
    }
    return null;
  },
  _onGlobalTouchMove: function _onGlobalTouchMove(event) {
    if (!this._draggingItem && !this._draggingFromEquipment) return;
    if (!event || !event.touch) return;
    var canvas = cc.find("Canvas");
    if (!canvas) return;

    // 获取 UI 坐标，再统一转换到 Canvas 本地坐标系
    var uiPos = null;
    if (event.getUILocation) {
      uiPos = event.getUILocation();
    } else if (event.touch && event.touch.getUILocation) {
      uiPos = event.touch.getUILocation();
    } else {
      var screenPos = event.getLocation();
      if (canvas.getComponent(cc.Camera)) {
        var camera = canvas.getComponent(cc.Camera);
        uiPos = camera.getScreenToWorldPoint(screenPos);
      } else {
        uiPos = screenPos;
      }
    }
    if (!uiPos) return;
    var canvasPos = canvas.convertToNodeSpaceAR(cc.v2(uiPos.x, uiPos.y));

    // 只有移动超过一定距离才开始创建拖拽图标（避免轻触就“冒出”拖拽节点）
    var DRAG_START_DISTANCE = 8;
    if (!this._dragSprite && this._dragStartCanvasPos) {
      var dx = canvasPos.x - this._dragStartCanvasPos.x;
      var dy = canvasPos.y - this._dragStartCanvasPos.y;
      if (dx * dx + dy * dy < DRAG_START_DISTANCE * DRAG_START_DISTANCE) {
        return;
      }
    }
    if (!this._dragSprite) {
      this._dragSprite = new cc.Node("DragIcon");
      var sp = this._dragSprite.addComponent(cc.Sprite);
      var item = this._draggingItem || this._draggingFromEquipment && this._draggingFromEquipment._itemData;
      if (item && item.icon) sp.spriteFrame = item.icon;
      // 让拖拽图标尺寸与格子内 Icon 的显示尺寸一致（包含父节点缩放）
      var sourceSlot = this._draggingSlot || this._draggingFromEquipment;
      var iconSize = this._dragIconSize || this._getSlotIconDisplaySize(sourceSlot);
      this._dragSprite.setContentSize(iconSize.width, iconSize.height);
      this._dragSprite.setAnchorPoint(0.5, 0.5);
      this._dragSprite.setScale(1, 1);
      if (sp) {
        sp.sizeMode = cc.Sprite.SizeMode.CUSTOM;
      }
      canvas.addChild(this._dragSprite);
      // 从原始图标位置开始，而不是触摸位置
      var startPos = this._dragStartCanvasPos || canvasPos;
      this._dragSprite.setPosition(startPos);
    } else {
      // 跟随手指移动（Canvas 坐标系）
      this._dragSprite.setPosition(canvasPos);
    }
  },
  _onGlobalTouchEnd: function _onGlobalTouchEnd(event) {
    var _this10 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var wasDragging, hadDragState, target, characterName, slotNode, slotIndex, itemData, EquipmentDataManager, ItemDataManager, item, ItemConfig, cfg, itemToEquip, _EquipmentDataManager, _ItemDataManager, _slotIndex, current, prevItemId, count, ok;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (event) {
              _context4.next = 2;
              break;
            }
            return _context4.abrupt("return");
          case 2:
            wasDragging = !!_this10._dragSprite;
            if (_this10._dragSprite) {
              _this10._dragSprite.destroy();
              _this10._dragSprite = null;
            }
            hadDragState = _this10._draggingItem || _this10._draggingFromEquipment;
            if (hadDragState) {
              _context4.next = 7;
              break;
            }
            return _context4.abrupt("return");
          case 7:
            // 没有拖拽状态，不处理

            // 阻止事件冒泡，避免触发点击关闭面板
            if (event.stopPropagation) event.stopPropagation();
            target = _this10._getNodeUnderTouch(event);
            characterName = _this10.currentUnitData ? _this10.currentUnitData.name : null;
            _context4.prev = 10;
            if (!(_this10._draggingFromEquipment && characterName)) {
              _context4.next = 33;
              break;
            }
            slotNode = _this10._draggingFromEquipment;
            slotIndex = slotNode._slotIndex;
            itemData = slotNode._itemData;
            _this10._draggingFromEquipment = null;
            _this10._draggingItem = null;
            if (!(!itemData || !wasDragging)) {
              _context4.next = 20;
              break;
            }
            _this10._clearDragState();
            return _context4.abrupt("return");
          case 20:
            EquipmentDataManager = require("EquipmentDataManager");
            ItemDataManager = require("ItemDataManager"); // 装备占用背包数量：卸下时需要把装备还回背包
            _context4.next = 24;
            return EquipmentDataManager.unequipSlot(characterName, slotIndex);
          case 24:
            _context4.next = 26;
            return ItemDataManager.addItem(itemData.id, 1);
          case 26:
            _context4.next = 28;
            return _this10._updateEquipmentBar();
          case 28:
            _context4.next = 30;
            return _this10._updateInventory();
          case 30:
            _context4.next = 32;
            return _this10._applyEquipmentBonusesToDisplay();
          case 32:
            return _context4.abrupt("return");
          case 33:
            if (!(_this10._draggingSlot && _this10._draggingItem && characterName)) {
              _context4.next = 85;
              break;
            }
            item = _this10._draggingItem;
            ItemConfig = require("ItemConfig");
            cfg = item.config || ItemConfig.getItemById(item.id);
            itemToEquip = _this10._draggingItem;
            _this10._draggingSlot = null;
            _this10._draggingItem = null;
            if (!(!cfg || cfg.type !== "equipment" || !cfg.equipmentSlot)) {
              _context4.next = 43;
              break;
            }
            _this10._clearDragState();
            return _context4.abrupt("return");
          case 43:
            if (!(wasDragging && target && target.isEquipment && target.slotType === cfg.equipmentSlot)) {
              _context4.next = 84;
              break;
            }
            _EquipmentDataManager = require("EquipmentDataManager");
            _ItemDataManager = require("ItemDataManager");
            _slotIndex = target.slotIndex;
            _context4.next = 49;
            return _EquipmentDataManager.getEquipment(characterName);
          case 49:
            current = _context4.sent;
            if (!(current && current.slots && current.slots[_slotIndex] === itemToEquip.id)) {
              _context4.next = 54;
              break;
            }
            cc.log("[CharacterViewUI] \u69FD\u4F4D " + _slotIndex + " \u5DF2\u7ECF\u662F\u88C5\u5907 " + itemToEquip.id + "\uFF0C\u62D6\u62FD\u5FFD\u7565");
            _this10._clearDragState();
            return _context4.abrupt("return");
          case 54:
            if (!(current && current.slots && current.slots.some(function (id, idx) {
              return idx !== _slotIndex && id === itemToEquip.id;
            }))) {
              _context4.next = 58;
              break;
            }
            cc.warn("[CharacterViewUI] \u89D2\u8272 " + characterName + " \u5DF2\u7ECF\u88C5\u5907\u4E86\u76F8\u540C\u7684\u88C5\u5907(" + itemToEquip.id + ")\uFF0C\u672C\u6B21\u62D6\u62FD\u4E0D\u751F\u6548");
            _this10._clearDragState();
            return _context4.abrupt("return");
          case 58:
            // 如果该槽位原来有装备，先把旧装备还回背包
            prevItemId = current.slots[_slotIndex];
            if (!prevItemId) {
              _context4.next = 62;
              break;
            }
            _context4.next = 62;
            return _ItemDataManager.addItem(prevItemId, 1);
          case 62:
            _context4.next = 64;
            return _ItemDataManager.getItemCount(itemToEquip.id);
          case 64:
            count = _context4.sent;
            if (!(count <= 0)) {
              _context4.next = 68;
              break;
            }
            _this10._clearDragState();
            return _context4.abrupt("return");
          case 68:
            _context4.next = 70;
            return _ItemDataManager.removeItem(itemToEquip.id, 1);
          case 70:
            _context4.next = 72;
            return _EquipmentDataManager.setEquipmentSlot(characterName, _slotIndex, itemToEquip.id);
          case 72:
            ok = _context4.sent;
            if (ok) {
              _context4.next = 78;
              break;
            }
            _context4.next = 76;
            return _ItemDataManager.addItem(itemToEquip.id, 1);
          case 76:
            _this10._clearDragState();
            return _context4.abrupt("return");
          case 78:
            _context4.next = 80;
            return _this10._updateEquipmentBar();
          case 80:
            _context4.next = 82;
            return _this10._updateInventory();
          case 82:
            _context4.next = 84;
            return _this10._applyEquipmentBonusesToDisplay();
          case 84:
            return _context4.abrupt("return");
          case 85:
            _context4.next = 90;
            break;
          case 87:
            _context4.prev = 87;
            _context4.t0 = _context4["catch"](10);
            cc.error("[CharacterViewUI] 拖拽处理错误:", _context4.t0.message);
          case 90:
            _context4.prev = 90;
            _this10._clearDragState();
            return _context4.finish(90);
          case 93:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[10, 87, 90, 93]]);
    }))();
  },
  /**
   * 清除拖拽状态
   * @private
   */
  _clearDragState: function _clearDragState() {
    this._draggingSlot = null;
    this._draggingItem = null;
    this._draggingFromEquipment = null;
    this._dragIconSize = null;
    this._dragStartCanvasPos = null;
  },
  /**
   * 获取某个格子中 Icon 节点的“实际显示尺寸”（考虑父节点缩放）。
   * 用于拖拽时让 DragIcon 与格子内图标保持同样大小。
   * @private
   * @param {cc.Node} slotNode
   * @returns {{width:number,height:number}}
   */
  _getSlotIconDisplaySize: function _getSlotIconDisplaySize(slotNode) {
    var slotSize = this.itemSlotSize || 80;
    var fallback = {
      width: slotSize * 0.8,
      height: slotSize * 0.8
    };
    if (!slotNode || !slotNode.isValid) return fallback;
    var iconNode = slotNode.getChildByName("Icon") || slotNode;
    if (!iconNode || !iconNode.isValid) return fallback;

    // 优先用世界包围盒拿到“最终显示尺寸”（包含缩放）
    try {
      if (iconNode.getBoundingBoxToWorld) {
        var rect = iconNode.getBoundingBoxToWorld();
        if (rect && rect.width > 0 && rect.height > 0) {
          return {
            width: rect.width,
            height: rect.height
          };
        }
      }
    } catch (e) {
      // 忽略
    }

    // 兜底：用内容尺寸 * slotNode 缩放
    var raw = iconNode.getContentSize ? iconNode.getContentSize() : null;
    var w = raw && raw.width ? raw.width : slotSize;
    var h = raw && raw.height ? raw.height : slotSize;
    var sx = typeof slotNode.scaleX === "number" ? slotNode.scaleX : 1;
    var sy = typeof slotNode.scaleY === "number" ? slotNode.scaleY : 1;
    return {
      width: w * sx,
      height: h * sy
    };
  },
  /**
   * 将当前角色的装备加成应用到当前显示的人物原型上
   */
  _applyEquipmentBonusesToDisplay: function _applyEquipmentBonusesToDisplay() {
    var _this11 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var stats, bonuses;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (!(!_this11.currentDisplayPrefab || !_this11.currentUnitData)) {
              _context5.next = 2;
              break;
            }
            return _context5.abrupt("return");
          case 2:
            stats = _this11.currentDisplayPrefab.getComponent("StatsComponent");
            if (!(!stats || !stats.applyEquipmentBonuses)) {
              _context5.next = 5;
              break;
            }
            return _context5.abrupt("return");
          case 5:
            _context5.next = 7;
            return _this11._getEquipmentBonuses(_this11.currentUnitData.name);
          case 7:
            bonuses = _context5.sent;
            stats.applyEquipmentBonuses(bonuses);
            if (_this11.statsPanel && _this11.statsPanel.active) {
              _this11._showStatsPanel(_this11.currentUnitData);
            }
          case 10:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }))();
  },
  /**
   * 设置道具格子内容
   * @private
   * @param {cc.Node} slotNode - 道具格子节点
   * @param {Object} item - 道具数据 { id, name, icon, count }
   */
  _setItemSlot: function _setItemSlot(slotNode, item) {
    var _this12 = this;
    if (!item || !item.count || item.count <= 0) {
      // 道具不存在或数量为0，清空格子
      this._initItemSlot(slotNode, slotNode._slotIndex);
      return;
    }

    // 查找图标节点和数量标签
    var iconNode = slotNode.getChildByName("Icon") || slotNode;
    var countLabel = slotNode.getChildByName("CountLabel");

    // 设置图标
    if (iconNode && item.icon) {
      var sprite = iconNode.getComponent(cc.Sprite);
      if (sprite) {
        sprite.spriteFrame = item.icon;
      }
      iconNode.opacity = 255; // 完全不透明
    }

    // 设置数量
    if (countLabel) {
      var label = countLabel.getComponent(cc.Label);
      if (label) {
        if (item.count && item.count > 1) {
          label.string = item.count.toString();
        } else {
          label.string = "";
        }
      }
    }

    // 保存道具数据
    slotNode._itemData = item;
    slotNode._isEmpty = false;

    // 记录触摸开始时间（用于区分点击和长按）；装备类道具记录拖拽起点
    slotNode._touchStartTime = null;
    slotNode._touchStartPos = null;
    slotNode.off(cc.Node.EventType.TOUCH_START);
    slotNode.on(cc.Node.EventType.TOUCH_START, function (event) {
      slotNode._touchStartTime = Date.now();
      slotNode._touchStartPos = event.getLocation();
      var cfg = item.config || item.id && require("ItemConfig").getItemById(item.id);
      if (cfg && cfg.type === "equipment") {
        _this12._draggingSlot = slotNode;
        _this12._draggingItem = item;
        _this12._dragIconSize = _this12._getSlotIconDisplaySize(slotNode);
        // 记录原始图标在 Canvas 下的位置（用于从原格子“拽出来”）
        var _iconNode = slotNode.getChildByName("Icon") || slotNode;
        var canvas = cc.find("Canvas");
        if (canvas && _iconNode && _iconNode.isValid && _iconNode.convertToWorldSpaceAR && canvas.convertToNodeSpaceAR) {
          var worldPos = _iconNode.convertToWorldSpaceAR(cc.v2(0, 0));
          _this12._dragStartCanvasPos = canvas.convertToNodeSpaceAR(worldPos);
        } else {
          _this12._dragStartCanvasPos = null;
        }
      }
    }, this);

    // 绑定触摸结束事件（处理左键点击和长按；若正在拖拽则不再触发点击）
    slotNode.off(cc.Node.EventType.TOUCH_END);
    slotNode.on(cc.Node.EventType.TOUCH_END, function (event) {
      if (_this12._dragSprite) {
        slotNode._touchStartTime = null;
        return;
      }
      var pressTime = slotNode._touchStartTime ? Date.now() - slotNode._touchStartTime : 0;
      var LONG_PRESS_TIME = 500;
      if (pressTime >= LONG_PRESS_TIME) {
        event.stopPropagation();
        _this12._showItemTooltipOnTouch(slotNode, item, event);
      } else if (pressTime > 0 && pressTime < LONG_PRESS_TIME) {
        event.stopPropagation();
        _this12._onItemSlotClick(slotNode, item);
      }
      slotNode._touchStartTime = null;
    }, this);

    // 绑定右键点击事件（显示道具信息）- 仅PC端
    this._setupItemTooltip(slotNode, item);

    // 确保可以接收触摸事件
    slotNode.setContentSize(this.itemSlotSize, this.itemSlotSize);
  },
  /**
   * 设置道具格子的右键点击事件（显示道具信息）
   * @private
   * @param {cc.Node} slotNode - 道具格子节点
   * @param {Object} item - 道具数据
   */
  _setupItemTooltip: function _setupItemTooltip(slotNode, item) {
    if (!this.itemTooltip) {
      // 如果没有设置tooltip节点，跳过
      cc.warn("[CharacterViewUI] itemTooltip节点未绑定，跳过tooltip设置");
      return;
    }
    var tooltipComponent = this.itemTooltip.getComponent("ItemTooltip");
    if (!tooltipComponent) {
      cc.warn("[CharacterViewUI] itemTooltip节点没有ItemTooltip组件，请添加ItemTooltip组件");
      return;
    }
    if (!item || !item.id) {
      cc.warn("[CharacterViewUI] 道具数据无效，缺少id字段", item);
      return;
    }

    // 添加调试日志
    cc.log("[CharacterViewUI] 设置道具右键点击tooltip:", item.id, "tooltip节点:", this.itemTooltip.name);

    // 移除旧的鼠标事件监听
    slotNode.off(cc.Node.EventType.MOUSE_DOWN);
    slotNode.off(cc.Node.EventType.MOUSE_UP);

    // 绑定鼠标右键按下事件（显示道具信息）
    slotNode.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
      // 检查是否是右键
      // 注意：cc.Event.EventMouse.BUTTON_RIGHT 的值是 2
      var button = event.getButton ? event.getButton() : -1;
      if (button === 2 || button === cc.Event.EventMouse.BUTTON_RIGHT) {
        event.stopPropagation(); // 阻止事件冒泡，防止触发右键菜单
        event.preventDefault && event.preventDefault(); // 阻止默认右键菜单

        // 使用item.id作为itemId传递给tooltip
        var tooltipData = {
          itemId: item.id,
          count: item.count
        };

        // 传递道具格子节点，让tooltip显示在节点右上方
        tooltipComponent.showItemInfo(tooltipData, slotNode);
        cc.log("[CharacterViewUI] 右键点击道具，显示信息:", item.id, "按钮:", button);
      }
    }, this);

    // 绑定鼠标右键释放事件（隐藏道具信息）
    slotNode.on(cc.Node.EventType.MOUSE_UP, function (event) {
      // 检查是否是右键
      var button = event.getButton ? event.getButton() : -1;
      if (button === 2 || button === cc.Event.EventMouse.BUTTON_RIGHT) {
        event.stopPropagation();
        event.preventDefault && event.preventDefault();
        tooltipComponent.hideItemInfo();
      }
    }, this);
  },
  /**
   * 在触摸设备上显示道具信息（长按触发）
   * @private
   * @param {cc.Node} slotNode - 道具格子节点
   * @param {Object} item - 道具数据
   * @param {cc.Event} event - 触摸事件
   */
  _showItemTooltipOnTouch: function _showItemTooltipOnTouch(slotNode, item, event) {
    if (!this.itemTooltip) {
      return;
    }
    var tooltipComponent = this.itemTooltip.getComponent("ItemTooltip");
    if (!tooltipComponent) {
      return;
    }
    var tooltipData = {
      itemId: item.id,
      count: item.count
    };

    // 传递道具格子节点，让tooltip显示在节点右上方
    tooltipComponent.showItemInfo(tooltipData, slotNode);
    cc.log("[CharacterViewUI] 长按道具，显示信息:", item.id);
  },
  /**
   * 道具格子点击事件（使用道具）
   * @private
   * @param {cc.Node} slotNode - 道具格子节点
   * @param {Object} item - 道具数据
   */
  _onItemSlotClick: function _onItemSlotClick(slotNode, item) {
    var _this13 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var ItemSystem, result;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (!(!item || !item.config)) {
              _context6.next = 3;
              break;
            }
            cc.warn("[CharacterViewUI] 无效的道具数据");
            return _context6.abrupt("return");
          case 3:
            if (_this13.currentDisplayPrefab) {
              _context6.next = 6;
              break;
            }
            cc.warn("[CharacterViewUI] 请先选择一个角色");
            // 可以显示提示给用户
            return _context6.abrupt("return");
          case 6:
            ItemSystem = require("ItemSystem"); // 使用道具
            _context6.next = 9;
            return ItemSystem.useItem(_this13.currentDisplayPrefab, item.id);
          case 9:
            result = _context6.sent;
            if (!result.success) {
              _context6.next = 18;
              break;
            }
            cc.log("[CharacterViewUI] \u2713 \u4F7F\u7528\u9053\u5177\u6210\u529F: " + item.name + " - " + result.message);
            if (result.skillName) {
              cc.log("[CharacterViewUI] \u89D2\u8272\u5DF2\u5B66\u4F1A\u6280\u80FD: " + result.skillName);
            }

            // 刷新道具栏显示
            _context6.next = 15;
            return _this13._updateInventory();
          case 15:
            // 更新角色属性显示（如果属性面板已打开）
            if (_this13.statsPanel && _this13.statsPanel.active && _this13.currentUnitData) {
              _this13._showStatsPanel(_this13.currentUnitData);
            }

            // TODO: 可以显示使用成功的提示UI（如 Toast 显示「技能学习成功」）
            _context6.next = 19;
            break;
          case 18:
            cc.warn("[CharacterViewUI] \u2717 \u4F7F\u7528\u9053\u5177\u5931\u8D25: " + item.name + " - " + result.message);
            // TODO: 可以显示错误提示UI
          case 19:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }))();
  },
  /**
   * 设置道具图标（从ItemIconSetter组件获取）
   * @private
   */
  _setupItemIcons: function _setupItemIcons() {
    // 查找场景中的ItemIconSetter组件
    var scene = cc.director.getScene();
    if (!scene) {
      return;
    }
    var canvas = scene.getChildByName("Canvas");
    if (!canvas) {
      return;
    }

    // 查找ItemIconSetter组件
    var iconSetter = canvas.getComponentInChildren("ItemIconSetter");
    if (iconSetter) {
      cc.log("[CharacterViewUI] 找到ItemIconSetter组件，道具图标已设置");
    } else {
      cc.log("[CharacterViewUI] 未找到ItemIconSetter组件，道具图标需要在代码中设置");
    }
  },
  /**
   * 初始化默认道具（添加5个升级药水，仅首次进入时）
   * @private
   */
  _initDefaultItems: function _initDefaultItems() {
    var _this14 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var ItemDataManager, INIT_FLAG_KEY, hasInitialized, currentCount, success;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            ItemDataManager = require("ItemDataManager"); // 检查是否已经初始化过道具（使用localStorage标志）
            INIT_FLAG_KEY = "character_view_items_initialized";
            hasInitialized = cc.sys.localStorage.getItem(INIT_FLAG_KEY);
            if (!hasInitialized) {
              _context7.next = 6;
              break;
            }
            // 已经初始化过，不再自动添加道具
            cc.log("[CharacterViewUI] 道具已初始化过，跳过自动添加");
            return _context7.abrupt("return");
          case 6:
            _context7.next = 8;
            return ItemDataManager.getItemCount("upgrade_potion");
          case 8:
            currentCount = _context7.sent;
            if (!(currentCount === 0)) {
              _context7.next = 24;
              break;
            }
            _context7.next = 12;
            return ItemDataManager.addItem("upgrade_potion", 10);
          case 12:
            success = _context7.sent;
            if (!success) {
              _context7.next = 21;
              break;
            }
            cc.log("[CharacterViewUI] ✓ 首次进入，已添加10个升级药水到全局道具栏");

            // 标记已初始化，确保只初始化一次
            cc.sys.localStorage.setItem(INIT_FLAG_KEY, "true");

            // 如果当前已选中角色，刷新道具栏显示
            if (!_this14.currentUnitData) {
              _context7.next = 19;
              break;
            }
            _context7.next = 19;
            return _this14._updateInventory();
          case 19:
            _context7.next = 22;
            break;
          case 21:
            cc.error("[CharacterViewUI] ✗ 添加升级药水失败");
          case 22:
            _context7.next = 26;
            break;
          case 24:
            // 如果已有升级药水，也标记为已初始化（可能是从其他地方添加的）
            cc.sys.localStorage.setItem(INIT_FLAG_KEY, "true");
            cc.log("[CharacterViewUI] \u5168\u5C40\u9053\u5177\u680F\u5DF2\u6709 " + currentCount + " \u4E2A\u5347\u7EA7\u836F\u6C34\uFF0C\u6807\u8BB0\u4E3A\u5DF2\u521D\u59CB\u5316");
          case 26:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }))();
  },
  /**
   * 获取道具列表（全局共享，所有角色共用）
   * @private
   * @param {string} characterName - 角色名称（已废弃，保留用于兼容）
   * @returns {Promise<Array>|Array} 道具列表 [{ id, name, icon, count }, ...]（服务器模式下返回Promise）
   */
  _getCharacterItems: function _getCharacterItems(characterName) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var ItemDataManager, itemsWithConfig;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            ItemDataManager = require("ItemDataManager"); // 获取全局道具（所有角色共享，忽略characterName参数）
            _context8.next = 3;
            return ItemDataManager.getAllItemsWithConfig();
          case 3:
            itemsWithConfig = _context8.sent;
            return _context8.abrupt("return", itemsWithConfig.filter(function (item) {
              return item.count > 0;
            }) // 只显示数量大于0的道具
            .map(function (item) {
              return {
                id: item.itemId,
                name: item.config.displayName || item.config.name,
                icon: item.config.icon,
                // SpriteFrame资源
                count: item.count,
                config: item.config // 保存完整配置，用于后续使用道具
              };
            }));
          case 5:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }))();
  },
  /**
   * 创建头像
   * @private
   * @param {Object} unitData - 单位数据
   * @param {string} team - 队伍类型（"hero" 或 "monster"）
   * @param {number} index - 索引
   */
  _createAvatar: function _createAvatar(unitData, team, index) {
    var _this15 = this;
    if (!unitData || !unitData.name) {
      cc.error("[CharacterViewUI] _createAvatar: unitData\u65E0\u6548", unitData);
      return;
    }

    // 实例化头像Prefab
    var avatarNode = cc.instantiate(this.avatarPrefab);
    avatarNode.name = "Avatar_" + unitData.name;

    // 保存单位数据到节点（浅拷贝，保留Prefab引用）
    avatarNode._unitData = Object.assign({}, unitData);
    avatarNode._team = team;
    cc.log("[CharacterViewUI] \u521B\u5EFA\u5934\u50CF: name=" + unitData.name + ", team=" + team + ", index=" + index + ", prefab=" + (unitData.prefab ? unitData.prefab.name : 'null'));

    // 添加到容器
    this.avatarListContainer.addChild(avatarNode);

    // 设置位置（垂直排列）
    var spacing = this.avatarSpacing || 100;
    var startY = 200; // 从上方开始
    var y = startY - index * spacing;
    avatarNode.setPosition(0, y); //TODO: 这里需要根据队伍类型设置位置

    // 设置头像图片
    var avatarComp = avatarNode.getComponent("AvatarItem");
    if (avatarComp) {
      avatarComp.init(unitData, team, this);
    } else {
      // 如果没有组件，手动设置
      var iconNode = avatarNode.getChildByName("Icon");
      if (iconNode && unitData.icon) {
        var sprite = iconNode.getComponent(cc.Sprite);
        if (sprite) {
          sprite.spriteFrame = unitData.icon;
        }
      }
    }

    // 绑定点击事件（从节点获取unitData，避免闭包引用问题）
    avatarNode.on(cc.Node.EventType.TOUCH_END, function () {
      // 优先从节点获取unitData（确保数据正确）
      var nodeUnitData = avatarNode._unitData || unitData;
      var nodeTeam = avatarNode._team || team;
      cc.log("[CharacterViewUI] \u5934\u50CF\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1: \u8282\u70B9\u540D\u79F0=" + avatarNode.name + ", unitData.name=" + nodeUnitData.name + ", team=" + nodeTeam);
      _this15._onAvatarClick(nodeUnitData, nodeTeam);
    }, this);

    // 确保可以接收触摸事件
    avatarNode.setContentSize(100, 100);
  },
  /**
   * 头像点击事件
   * @private
   * @param {Object} unitData - 单位数据
   * @param {string} team - 队伍类型
   */
  _onAvatarClick: function _onAvatarClick(unitData, team) {
    var _this16 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            if (unitData) {
              _context9.next = 3;
              break;
            }
            cc.error("[CharacterViewUI] \u70B9\u51FB\u5934\u50CF\u5931\u8D25: unitData\u4E3A\u7A7A");
            return _context9.abrupt("return");
          case 3:
            cc.log("[CharacterViewUI] \u70B9\u51FB\u5934\u50CF: " + unitData.name + ", team=" + team + ", prefab=" + (unitData.prefab ? unitData.prefab.name : 'null'));
            _this16._displayCharacterPrefab(unitData);
          case 5:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }))();
  },
  /**
   * 显示人物原型
   * @private
   * @param {Object} unitData - 单位数据
   */
  _displayCharacterPrefab: function _displayCharacterPrefab(unitData) {
    var _this17 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      var prefabInstance;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            if (_this17.characterDisplayArea) {
              _context10.next = 3;
              break;
            }
            cc.warn("[CharacterViewUI] 未设置characterDisplayArea，无法显示人物原型");
            return _context10.abrupt("return");
          case 3:
            // 清除之前显示的原型
            if (_this17.currentDisplayPrefab) {
              _this17.currentDisplayPrefab.destroy();
              _this17.currentDisplayPrefab = null;
            }

            // 隐藏属性面板
            if (_this17.statsPanel) {
              _this17.statsPanel.active = false;
            }

            // 保存当前单位数据
            _this17.currentUnitData = unitData;

            // 更新道具栏与装备栏（每位英雄装备独立）
            _context10.next = 8;
            return _this17._updateInventory();
          case 8:
            _context10.next = 10;
            return _this17._updateEquipmentBar();
          case 10:
            // 如果有Prefab，实例化并显示
            if (unitData.prefab) {
              prefabInstance = cc.instantiate(unitData.prefab);
              prefabInstance.name = "Display_" + unitData.name;

              // 保存原始角色名称，用于数据保存和加载
              prefabInstance._originalCharacterName = unitData.name;

              // 确保节点可见
              prefabInstance.active = true;
              prefabInstance.opacity = 255;
              _this17.characterDisplayArea.addChild(prefabInstance);
              _this17.currentDisplayPrefab = prefabInstance;

              // 设置位置和缩放（居中显示，缩小显示，位置向上调整）
              prefabInstance.setPosition(0, 100);
              prefabInstance.setScale(0.7);

              // 初始化角色属性（根据保存的等级数据，支持异步）
              _this17._initCharacterStats(prefabInstance, unitData)["catch"](function (err) {
                cc.error("[CharacterViewUI] \u521D\u59CB\u5316\u89D2\u8272\u5C5E\u6027\u5931\u8D25: " + err.message);
              });

              // 绑定点击事件（点击人物原型显示属性面板）
              prefabInstance.on(cc.Node.EventType.TOUCH_END, function (event) {
                event.stopPropagation(); // 阻止事件冒泡
                _this17._showStatsPanel(unitData);
              }, _this17);

              // 确保可以接收触摸事件
              prefabInstance.setContentSize(200, 200);

              // 标记这是人物原型节点（用于判断点击位置）
              prefabInstance._isCharacterPrefab = true;
              cc.log("[CharacterViewUI] \u2713 \u663E\u793A\u4EBA\u7269\u539F\u578B: " + unitData.name);
            } else {
              cc.warn("[CharacterViewUI] \u2717 \u5355\u4F4D " + unitData.name + " \u6CA1\u6709\u8BBE\u7F6Eprefab");
            }
          case 11:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    }))();
  },
  /**
   * 初始化角色属性（根据保存的等级数据）
   * @private
   * @param {cc.Node} prefabInstance - 人物原型实例
   * @param {Object} unitData - 单位数据
   */
  _initCharacterStats: function _initCharacterStats(prefabInstance, unitData) {
    var _this18 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      var CharacterDataManager, stats, savedData, bonuses;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            CharacterDataManager = require("CharacterDataManager"); // StatsComponent 是组件类，不需要 require，直接使用 getComponent 获取
            // 获取StatsComponent组件
            stats = prefabInstance.getComponent("StatsComponent");
            if (stats) {
              _context11.next = 5;
              break;
            }
            cc.log("[CharacterViewUI] " + unitData.name + " \u6CA1\u6709StatsComponent\u7EC4\u4EF6\uFF0C\u8DF3\u8FC7\u5C5E\u6027\u521D\u59CB\u5316");
            return _context11.abrupt("return");
          case 5:
            _context11.next = 7;
            return CharacterDataManager.loadCharacterLevel(unitData.name);
          case 7:
            savedData = _context11.sent;
            if (savedData) {
              // 如果有保存的数据，使用保存的基础属性
              stats.baseHp = savedData.baseHp || unitData.hp || 100;
              stats.baseAttack = savedData.baseAttack || unitData.attack || 1;
              stats.baseDefense = savedData.baseDefense || unitData.defense || 1;
              stats.baseSpeed = savedData.baseSpeed || unitData.speed || 1;
              stats.baseCrit = savedData.baseCrit || unitData.crit || 0;
              stats.baseMiss = savedData.baseMiss || unitData.miss || 0;

              // 设置等级和经验值
              stats.level = savedData.level || 1;
              stats.exp = savedData.exp || 0;

              // 应用等级加成
              stats._applyLevelBonus();
            } else {
              // 如果没有保存的数据，使用unitData中的基础属性
              stats.baseHp = unitData.hp || 100;
              stats.baseAttack = unitData.attack || 1;
              stats.baseDefense = unitData.defense || 1;
              stats.baseSpeed = unitData.speed || 1;
              stats.baseCrit = unitData.crit || 0;
              stats.baseMiss = unitData.miss || 0;

              // 设置默认等级和经验值
              stats.level = 1;
              stats.exp = 0;

              // 应用等级加成
              stats._applyLevelBonus();
            }

            // 设置当前生命值为最大生命值（满血显示）
            stats.hp = stats.maxHp;

            // 更新血条显示
            if (stats.updateHealthBar) {
              stats.updateHealthBar();
            }

            // 更新经验条显示
            if (stats.updateExpBar) {
              stats.updateExpBar();
            }

            // 更新怒气条显示（初始为0）
            if (stats.updateRageBar) {
              stats.rage = 0;
              stats.updateRageBar();
            }

            // 应用装备加成（每位英雄独立装备，属性同步更新）
            _context11.next = 15;
            return _this18._getEquipmentBonuses(unitData.name);
          case 15:
            bonuses = _context11.sent;
            if (stats.applyEquipmentBonuses) {
              stats.applyEquipmentBonuses(bonuses);
            }
          case 17:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    }))();
  },
  /**
   * 根据角色装备计算属性加成
   * @param {string} characterName - 角色名称
   * @returns {Promise<{ attack: number, defense: number, speed: number }>}
   */
  _getEquipmentBonuses: function _getEquipmentBonuses(characterName) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
      var EquipmentDataManager, ItemConfig, _yield$EquipmentDataM2, slots, bonuses, _iterator, _step, itemId, cfg, t, v;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            EquipmentDataManager = require("EquipmentDataManager");
            ItemConfig = require("ItemConfig");
            _context12.next = 4;
            return EquipmentDataManager.getEquipment(characterName);
          case 4:
            _yield$EquipmentDataM2 = _context12.sent;
            slots = _yield$EquipmentDataM2.slots;
            bonuses = {
              attack: 0,
              defense: 0,
              speed: 0
            };
            _iterator = _createForOfIteratorHelperLoose(slots);
          case 8:
            if ((_step = _iterator()).done) {
              _context12.next = 20;
              break;
            }
            itemId = _step.value;
            if (itemId) {
              _context12.next = 12;
              break;
            }
            return _context12.abrupt("continue", 18);
          case 12:
            cfg = ItemConfig.getItemById(itemId);
            if (!(!cfg || !cfg.effectType)) {
              _context12.next = 15;
              break;
            }
            return _context12.abrupt("continue", 18);
          case 15:
            t = String(cfg.effectType).toLowerCase();
            v = cfg.effectValue || 0;
            if (t === "attack") bonuses.attack += v;else if (t === "defense") bonuses.defense += v;else if (t === "speed") bonuses.speed += v;
          case 18:
            _context12.next = 8;
            break;
          case 20:
            return _context12.abrupt("return", bonuses);
          case 21:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    }))();
  },
  /**
   * 显示属性面板
   * @private
   * @param {Object} unitData - 单位数据
   */
  _showStatsPanel: function _showStatsPanel(unitData) {
    if (!this.statsPanel) {
      cc.warn("[CharacterViewUI] 未设置statsPanel，无法显示属性面板");
      return;
    }

    // 获取当前显示的人物原型的StatsComponent
    if (!this.currentDisplayPrefab) {
      return;
    }

    // 获取StatsComponent组件
    var stats = this.currentDisplayPrefab.getComponent("StatsComponent");
    if (!stats) {
      cc.warn("[CharacterViewUI] " + unitData.name + " \u6CA1\u6709StatsComponent\u7EC4\u4EF6\uFF0C\u65E0\u6CD5\u663E\u793A\u5C5E\u6027");
      return;
    }

    // 更新属性标签
    if (this.hpLabel) {
      this.hpLabel.string = "\u751F\u547D\u503C: " + stats.hp + "/" + stats.maxHp;
    }
    if (this.attackLabel) {
      this.attackLabel.string = "\u653B\u51FB\u529B: " + stats.attack;
    }
    if (this.defenseLabel) {
      this.defenseLabel.string = "\u9632\u5FA1\u529B: " + stats.defense;
    }
    if (this.speedLabel) {
      this.speedLabel.string = "\u901F\u5EA6: " + stats.speed;
    }
    if (this.critLabel) {
      this.critLabel.string = "\u66B4\u51FB\u7387: " + (stats.crit * 100).toFixed(1) + "%";
    }
    if (this.missLabel) {
      this.missLabel.string = "\u95EA\u907F\u7387: " + (stats.miss * 100).toFixed(1) + "%";
    }
    if (this.levelLabel) {
      this.levelLabel.string = "\u7B49\u7EA7: " + stats.level;
    }
    if (this.expLabel) {
      var LevelConfig = require("LevelConfig");
      var currentLevelExp = LevelConfig.getExpForLevel(stats.level);
      var nextLevelExp = LevelConfig.getExpForLevel(stats.level + 1);
      var expInCurrentLevel = stats.exp - currentLevelExp;
      var expToNext = nextLevelExp - currentLevelExp;
      if (expToNext > 0) {
        this.expLabel.string = "\u7ECF\u9A8C\u503C: " + expInCurrentLevel + "/" + expToNext;
      } else {
        this.expLabel.string = "\u7ECF\u9A8C\u503C: \u5DF2\u6EE1\u7EA7";
      }
    }

    // 显示属性面板（带动画）
    this.statsPanel.active = true;
    this.statsPanel.setScale(0.8);
    this.statsPanel.opacity = 0;

    // 设置面板位置（显示在人物原型附近）
    if (this.characterDisplayArea) {
      var displayPos = this.characterDisplayArea.getPosition();
      this.statsPanel.setPosition(displayPos.x + 250, displayPos.y); // 显示在右侧
    }

    cc.tween(this.statsPanel).to(0.2, {
      scale: 1.0,
      opacity: 255
    }, {
      easing: 'backOut'
    }).start();
    cc.log("[CharacterViewUI] \u663E\u793A\u5C5E\u6027\u9762\u677F: " + unitData.name);
  },
  /**
   * 点击Canvas事件（关闭属性面板）
   * @private
   */
  _onCanvasClick: function _onCanvasClick(event) {
    var _this19 = this;
    // 如果点击的是属性面板本身，不关闭
    if (this.statsPanel && cc.isValid(this.statsPanel) && this.statsPanel.active) {
      var target = event.target;
      // 检查点击的目标是否是属性面板或其子节点
      var isStatsPanel = false;
      var node = target;
      while (node) {
        if (node === this.statsPanel) {
          isStatsPanel = true;
          break;
        }
        node = node.parent;
      }
      if (isStatsPanel) {
        return; // 点击的是属性面板，不关闭
      }
    }

    // 如果点击的是人物原型，不关闭（由人物原型的点击事件处理）
    if (this.currentDisplayPrefab && cc.isValid(this.currentDisplayPrefab)) {
      var _target = event.target;
      var _node = _target;
      while (_node) {
        if (_node === this.currentDisplayPrefab || _node._isCharacterPrefab) {
          return; // 点击的是人物原型，不关闭
        }

        _node = _node.parent;
      }
    }

    // 点击其他区域，关闭属性面板
    if (this.statsPanel && this.statsPanel.active) {
      cc.tween(this.statsPanel).to(0.2, {
        opacity: 0,
        scale: 0.8
      }).call(function () {
        _this19.statsPanel.active = false;
      }).start();
      cc.log("[CharacterViewUI] \u5173\u95ED\u5C5E\u6027\u9762\u677F");
    }
  },
  onDestroy: function onDestroy() {
    // 清理事件监听
    var canvas = cc.find("Canvas");
    if (canvas) {
      canvas.off(cc.Node.EventType.TOUCH_END, this._onCanvasClick, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxDaGFyYWN0ZXJWaWV3VUkuanMiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImF2YXRhckxpc3RDb250YWluZXIiLCJOb2RlIiwidG9vbHRpcCIsImNoYXJhY3RlckRpc3BsYXlBcmVhIiwiaW52ZW50b3J5Q29udGFpbmVyIiwiZXF1aXBtZW50Q29udGFpbmVyIiwiZXF1aXBtZW50U2xvdFByZWZhYiIsIlByZWZhYiIsIml0ZW1TbG90UHJlZmFiIiwiaXRlbVRvb2x0aXAiLCJpbnZlbnRvcnlDb2x1bW5zIiwiaW52ZW50b3J5Um93cyIsIml0ZW1TbG90U2l6ZSIsIml0ZW1TbG90U3BhY2luZyIsInN0YXRzUGFuZWwiLCJhdmF0YXJQcmVmYWIiLCJ1bml0RGF0YUNvbmZpZyIsImhlcm9JY29ucyIsIlNwcml0ZUZyYW1lIiwibW9uc3Rlckljb25zIiwiaGVyb1ByZWZhYnMiLCJtb25zdGVyUHJlZmFicyIsImF2YXRhclNwYWNpbmciLCJocExhYmVsIiwiTGFiZWwiLCJhdHRhY2tMYWJlbCIsImRlZmVuc2VMYWJlbCIsInNwZWVkTGFiZWwiLCJjcml0TGFiZWwiLCJtaXNzTGFiZWwiLCJsZXZlbExhYmVsIiwiZXhwTGFiZWwiLCJvbkxvYWQiLCJfdGhpcyIsInJlcXVpcmUiLCJfbG9hZENvbmZpZ0lmTmVlZGVkIiwiY3VycmVudERpc3BsYXlQcmVmYWIiLCJjdXJyZW50VW5pdERhdGEiLCJfaW5pdEF2YXRhcnMiLCJzY2hlZHVsZU9uY2UiLCJfaW5pdEludmVudG9yeSIsIl9pbml0RXF1aXBtZW50QmFyIiwiX3NldHVwSXRlbUljb25zIiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJfaW5pdERlZmF1bHRJdGVtcyIsImFjdGl2ZSIsIl9kcmFnU3ByaXRlIiwiX2RyYWdnaW5nSXRlbSIsIl9kcmFnZ2luZ1Nsb3QiLCJfZHJhZ2dpbmdGcm9tRXF1aXBtZW50IiwiX2RyYWdJY29uU2l6ZSIsIl9kcmFnU3RhcnRDYW52YXNQb3MiLCJjYW52YXMiLCJmaW5kIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9NT1ZFIiwiX29uR2xvYmFsVG91Y2hNb3ZlIiwiVE9VQ0hfRU5EIiwiX29uR2xvYmFsVG91Y2hFbmQiLCJUT1VDSF9DQU5DRUwiLCJfb25DYW52YXNDbGljayIsIl90aGlzMiIsIm5lZWRMb2FkIiwiaGVyb3MiLCJpY29uIiwicHJlZmFiIiwibW9uc3RlcnMiLCJsb2ciLCJpbmRleCIsIl9iaW5kQ2FudmFzQ2xpY2siLCJfdGhpczMiLCJfdGhpczQiLCJyZW1vdmVBbGxDaGlsZHJlbiIsImhlcm9Db3VudCIsImhlcm9EYXRhIiwiX2NyZWF0ZUF2YXRhciIsIm1vbnN0ZXJEYXRhIiwid2FybiIsIm9wYWNpdHkiLCJzZXRBbmNob3JQb2ludCIsInRvdGFsU2xvdHMiLCJzbG90U2l6ZSIsInNwYWNpbmciLCJ0b3RhbFdpZHRoIiwidG90YWxIZWlnaHQiLCJzZXRDb250ZW50U2l6ZSIsIm1hc2siLCJnZXRDb21wb25lbnQiLCJNYXNrIiwiYWRkQ29tcG9uZW50IiwiVHlwZSIsIlJFQ1QiLCJnZXRBbmNob3JQb2ludCIsIngiLCJ5IiwibGF5b3V0IiwiTGF5b3V0IiwiZW5hYmxlZCIsInNsb3ROb2RlIiwiaW5zdGFudGlhdGUiLCJzZXRTY2FsZSIsImFkZENoaWxkIiwiX2luaXRJdGVtU2xvdCIsImNyZWF0ZWRTbG90cyIsImNoaWxkcmVuIiwiX21hbnVhbExheW91dEludmVudG9yeSIsImNvbnRhaW5lclBvcyIsImdldFBvc2l0aW9uIiwiY29udGFpbmVyV29ybGRQb3MiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJ2MiIsInRvRml4ZWQiLCJnZXRDb250ZW50U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiX3RoaXM1Iiwic2NhbGUiLCJzbG90cyIsImNvbnRhaW5lclNpemUiLCJhbmNob3JQb2ludCIsImRpc3BsYXlTaXplIiwic3RhcnRYIiwic3RhcnRZIiwicm93IiwiTWF0aCIsImZsb29yIiwiY29sIiwic2V0UG9zaXRpb24iLCJqIiwiY2hpbGQiLCJfZW5zdXJlU2xvdFZpc2libGUiLCJfYWRkU2xvdEJvcmRlciIsInNsb3RQb3MiLCJzbG90SGFsZlNpemUiLCJjb250YWluZXJIYWxmV2lkdGgiLCJjb250YWluZXJIYWxmSGVpZ2h0IiwiaXNJblJhbmdlIiwiaGFzVmlzaWJsZVNwcml0ZSIsInNwcml0ZU5vZGUiLCJtYWluU3ByaXRlIiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJjaGlsZFNwcml0ZSIsImJnTm9kZSIsImdldENoaWxkQnlOYW1lIiwiZ3JhcGhpY3MiLCJHcmFwaGljcyIsImZpbGxDb2xvciIsIkNvbG9yIiwicmVjdCIsImZpbGwiLCJib3JkZXJOb2RlIiwiZGVzdHJveSIsInN0cm9rZUNvbG9yIiwibGluZVdpZHRoIiwiaGFsZlNpemUiLCJzdHJva2UiLCJ6SW5kZXgiLCJpY29uTm9kZSIsImNvdW50TGFiZWwiLCJzcHJpdGUiLCJsYWJlbCIsInN0cmluZyIsIl9zbG90SW5kZXgiLCJfaXNFbXB0eSIsIl91cGRhdGVJbnZlbnRvcnkiLCJfdGhpczYiLCJfY2FsbGVlMiIsIml0ZW1zIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiX2dldENoYXJhY3Rlckl0ZW1zIiwiX3NldEl0ZW1TbG90Iiwib2ZmIiwiTU9VU0VfRE9XTiIsIk1PVVNFX1VQIiwiVE9VQ0hfU1RBUlQiLCJfdG91Y2hTdGFydFRpbWUiLCJzbG90Q291bnQiLCJJdGVtQ29uZmlnIiwic2xvdFR5cGVzIiwiRVFVSVBNRU5UX1NMT1RTIiwiX3Nsb3RUeXBlIiwiX2lzRXF1aXBtZW50IiwiX2xheW91dEVxdWlwbWVudEJhciIsIl90aGlzNyIsInNwIiwic2l6ZU1vZGUiLCJTaXplTW9kZSIsIkNVU1RPTSIsIl91cGRhdGVFcXVpcG1lbnRCYXIiLCJfdGhpczgiLCJfY2FsbGVlMyIsIkVxdWlwbWVudERhdGFNYW5hZ2VyIiwiX3lpZWxkJEVxdWlwbWVudERhdGFNIiwiZXF1aXBtZW50U2xvdHMiLCJzbG90Tm9kZXMiLCJpdGVtSWQiLCJjb25maWciLCJpdGVtRGF0YSIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImdldEVxdWlwbWVudCIsImdldEl0ZW1CeUlkIiwiaWQiLCJjb3VudCIsIl9zZXRFcXVpcG1lbnRTbG90IiwiX2l0ZW1EYXRhIiwic2xvdEluZGV4IiwiX3RoaXM5IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIl9nZXRTbG90SWNvbkRpc3BsYXlTaXplIiwiaXNWYWxpZCIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwid29ybGRQb3MiLCJfZ2V0Tm9kZVVuZGVyVG91Y2giLCJldmVudCIsInRvdWNoIiwidWlQb3MiLCJnZXRVSUxvY2F0aW9uIiwic2NyZWVuUG9zIiwiZ2V0TG9jYXRpb24iLCJDYW1lcmEiLCJjYW1lcmEiLCJnZXRTY3JlZW5Ub1dvcmxkUG9pbnQiLCJzbG90IiwicGFyZW50IiwibG9jYWxQb3MiLCJnZXRCb3VuZGluZ0JveCIsImNvbnRhaW5zIiwibm9kZSIsImlzRXF1aXBtZW50Iiwic2xvdFR5cGUiLCJjYW52YXNQb3MiLCJEUkFHX1NUQVJUX0RJU1RBTkNFIiwiZHgiLCJkeSIsIml0ZW0iLCJzb3VyY2VTbG90IiwiaWNvblNpemUiLCJzdGFydFBvcyIsIl90aGlzMTAiLCJfY2FsbGVlNCIsIndhc0RyYWdnaW5nIiwiaGFkRHJhZ1N0YXRlIiwidGFyZ2V0IiwiY2hhcmFjdGVyTmFtZSIsIkl0ZW1EYXRhTWFuYWdlciIsImNmZyIsIml0ZW1Ub0VxdWlwIiwiX0VxdWlwbWVudERhdGFNYW5hZ2VyIiwiX0l0ZW1EYXRhTWFuYWdlciIsImN1cnJlbnQiLCJwcmV2SXRlbUlkIiwib2siLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJfY2xlYXJEcmFnU3RhdGUiLCJ1bmVxdWlwU2xvdCIsImFkZEl0ZW0iLCJfYXBwbHlFcXVpcG1lbnRCb251c2VzVG9EaXNwbGF5IiwiZXF1aXBtZW50U2xvdCIsInNvbWUiLCJpZHgiLCJnZXRJdGVtQ291bnQiLCJyZW1vdmVJdGVtIiwic2V0RXF1aXBtZW50U2xvdCIsInQwIiwibWVzc2FnZSIsImZhbGxiYWNrIiwiZ2V0Qm91bmRpbmdCb3hUb1dvcmxkIiwicmF3IiwidyIsImgiLCJzeCIsInNjYWxlWCIsInN5Iiwic2NhbGVZIiwiX3RoaXMxMSIsIl9jYWxsZWU1Iiwic3RhdHMiLCJib251c2VzIiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwiYXBwbHlFcXVpcG1lbnRCb251c2VzIiwiX2dldEVxdWlwbWVudEJvbnVzZXMiLCJfc2hvd1N0YXRzUGFuZWwiLCJfdGhpczEyIiwidG9TdHJpbmciLCJfdG91Y2hTdGFydFBvcyIsIkRhdGUiLCJub3ciLCJwcmVzc1RpbWUiLCJMT05HX1BSRVNTX1RJTUUiLCJfc2hvd0l0ZW1Ub29sdGlwT25Ub3VjaCIsIl9vbkl0ZW1TbG90Q2xpY2siLCJfc2V0dXBJdGVtVG9vbHRpcCIsInRvb2x0aXBDb21wb25lbnQiLCJidXR0b24iLCJnZXRCdXR0b24iLCJFdmVudCIsIkV2ZW50TW91c2UiLCJCVVRUT05fUklHSFQiLCJwcmV2ZW50RGVmYXVsdCIsInRvb2x0aXBEYXRhIiwic2hvd0l0ZW1JbmZvIiwiaGlkZUl0ZW1JbmZvIiwiX3RoaXMxMyIsIl9jYWxsZWU2IiwiSXRlbVN5c3RlbSIsIl9jYWxsZWU2JCIsIl9jb250ZXh0NiIsInVzZUl0ZW0iLCJzdWNjZXNzIiwic2tpbGxOYW1lIiwic2NlbmUiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiaWNvblNldHRlciIsImdldENvbXBvbmVudEluQ2hpbGRyZW4iLCJfdGhpczE0IiwiX2NhbGxlZTciLCJJTklUX0ZMQUdfS0VZIiwiaGFzSW5pdGlhbGl6ZWQiLCJjdXJyZW50Q291bnQiLCJfY2FsbGVlNyQiLCJfY29udGV4dDciLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsIl9jYWxsZWU4IiwiaXRlbXNXaXRoQ29uZmlnIiwiX2NhbGxlZTgkIiwiX2NvbnRleHQ4IiwiZ2V0QWxsSXRlbXNXaXRoQ29uZmlnIiwiZmlsdGVyIiwibWFwIiwidW5pdERhdGEiLCJ0ZWFtIiwiX3RoaXMxNSIsImF2YXRhck5vZGUiLCJfdW5pdERhdGEiLCJhc3NpZ24iLCJfdGVhbSIsImF2YXRhckNvbXAiLCJpbml0Iiwibm9kZVVuaXREYXRhIiwibm9kZVRlYW0iLCJfb25BdmF0YXJDbGljayIsIl90aGlzMTYiLCJfY2FsbGVlOSIsIl9jYWxsZWU5JCIsIl9jb250ZXh0OSIsIl9kaXNwbGF5Q2hhcmFjdGVyUHJlZmFiIiwiX3RoaXMxNyIsIl9jYWxsZWUxMCIsInByZWZhYkluc3RhbmNlIiwiX2NhbGxlZTEwJCIsIl9jb250ZXh0MTAiLCJfb3JpZ2luYWxDaGFyYWN0ZXJOYW1lIiwiX2luaXRDaGFyYWN0ZXJTdGF0cyIsIl9pc0NoYXJhY3RlclByZWZhYiIsIl90aGlzMTgiLCJfY2FsbGVlMTEiLCJDaGFyYWN0ZXJEYXRhTWFuYWdlciIsInNhdmVkRGF0YSIsIl9jYWxsZWUxMSQiLCJfY29udGV4dDExIiwibG9hZENoYXJhY3RlckxldmVsIiwiYmFzZUhwIiwiaHAiLCJiYXNlQXR0YWNrIiwiYXR0YWNrIiwiYmFzZURlZmVuc2UiLCJkZWZlbnNlIiwiYmFzZVNwZWVkIiwic3BlZWQiLCJiYXNlQ3JpdCIsImNyaXQiLCJiYXNlTWlzcyIsIm1pc3MiLCJsZXZlbCIsImV4cCIsIl9hcHBseUxldmVsQm9udXMiLCJtYXhIcCIsInVwZGF0ZUhlYWx0aEJhciIsInVwZGF0ZUV4cEJhciIsInVwZGF0ZVJhZ2VCYXIiLCJyYWdlIiwiX2NhbGxlZTEyIiwiX3lpZWxkJEVxdWlwbWVudERhdGFNMiIsIl9pdGVyYXRvciIsIl9zdGVwIiwidCIsInYiLCJfY2FsbGVlMTIkIiwiX2NvbnRleHQxMiIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJlZmZlY3RUeXBlIiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJlZmZlY3RWYWx1ZSIsIkxldmVsQ29uZmlnIiwiY3VycmVudExldmVsRXhwIiwiZ2V0RXhwRm9yTGV2ZWwiLCJuZXh0TGV2ZWxFeHAiLCJleHBJbkN1cnJlbnRMZXZlbCIsImV4cFRvTmV4dCIsImRpc3BsYXlQb3MiLCJ0d2VlbiIsInRvIiwiZWFzaW5nIiwic3RhcnQiLCJfdGhpczE5IiwiaXNTdGF0c1BhbmVsIiwib25EZXN0cm95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QUFJc00sS0FBSSxDQUFDb0ksa0JBQWtCLEVBQUU7VUFDL0QsT0FBTyxDQUFDO1FBQ1o7O1FBQ0FwSSxLQUFJLEdBQUdBLEtBQUksQ0FBQ0osTUFBTTtNQUN0QjtJQUNKOztJQUVBO0lBQ0EsSUFBSSxJQUFJLENBQUN4TixVQUFVLElBQUksSUFBSSxDQUFDQSxVQUFVLENBQUNpQyxNQUFNLEVBQUU7TUFDM0NuRCxFQUFFLENBQUNrYSxLQUFLLENBQUMsSUFBSSxDQUFDaFosVUFBVSxDQUFDLENBQ3BCaVosRUFBRSxDQUFDLEdBQUcsRUFBRTtRQUFFOVUsT0FBTyxFQUFFLENBQUM7UUFBRXNDLEtBQUssRUFBRTtNQUFJLENBQUMsQ0FBQyxDQUNuQ3RPLElBQUksQ0FBQyxZQUFNO1FBQ1JpaEIsT0FBSSxDQUFDcFosVUFBVSxDQUFDaUMsTUFBTSxHQUFHLEtBQUs7TUFDbEMsQ0FBQyxDQUFDLENBQ0RrWCxLQUFLLEVBQUU7TUFDWnJhLEVBQUUsQ0FBQzBFLEdBQUcsMERBQTRCO0lBQ3RDO0VBQ0osQ0FBQztFQUVEOFYsU0FBUyxXQUFBQSxVQUFBLEVBQUc7SUFDUjtJQUNBLElBQU05VyxNQUFNLEdBQUcxRCxFQUFFLENBQUMyRCxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2hDLElBQUlELE1BQU0sRUFBRTtNQUNSQSxNQUFNLENBQUMwSCxHQUFHLENBQUNwTCxFQUFFLENBQUNLLElBQUksQ0FBQ3dELFNBQVMsQ0FBQ0csU0FBUyxFQUFFLElBQUksQ0FBQ0csY0FBYyxFQUFFLElBQUksQ0FBQztJQUN0RTtFQUNKO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOS6uueJqeWxnuaAp+afpeeci1VJ57uE5Lu2XG4gKiDnrqHnkIblpLTlg4/liJfooajjgIHkurrnianljp/lnovmmL7npLrjgIHlsZ7mgKfpnaLmnb9cbiAqL1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8g5bem5L6n5aS05YOP5YiX6KGo5a655ZmoXG4gICAgICAgIGF2YXRhckxpc3RDb250YWluZXI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLlt6bkvqflpLTlg4/liJfooajlrrnlmajoioLngrlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOS4remXtOS6uueJqeWOn+Wei+aYvuekuuWMuuWfn1xuICAgICAgICBjaGFyYWN0ZXJEaXNwbGF5QXJlYToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuS4remXtOS6uueJqeWOn+Wei+aYvuekuuWMuuWfn+iKgueCuVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g6YGT5YW35qCP5a655Zmo77yI5pi+56S65Zyo5Lq654mp5Y6f5Z6L5LiL5pa577yJXG4gICAgICAgIGludmVudG9yeUNvbnRhaW5lcjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICB0b29sdGlwOiBcIumBk+WFt+agj+WuueWZqOiKgueCue+8iOe9keagvOW4g+WxgO+8jOaYvuekuuWcqOS6uueJqeWOn+Wei+S4i+aWue+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g6KOF5aSH5qCP5a655Zmo77yIM+S4quagvOWtkO+8jOWPr+aUvuWcqOmBk+WFt+agj+S4iuaWueaIluS4i+aWue+8iVxuICAgICAgICBlcXVpcG1lbnRDb250YWluZXI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLoo4XlpIfmoI/lrrnlmajoioLngrnvvIgz5Liq5qC85a2Q77ya5aaC5q2m5ZmoL+mYsuWFty/ppbDlk4HvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOijheWkh+agvOWtkFByZWZhYu+8iOS4jeWhq+WImeS9v+eUqCBpdGVtU2xvdFByZWZhYu+8iVxuICAgICAgICBlcXVpcG1lbnRTbG90UHJlZmFiOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLoo4XlpIfmoLzlrZBQcmVmYWLvvIznlZnnqbrliJnkvb/nlKjpgZPlhbfmoLzlrZBQcmVmYWJcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOmBk+WFt+mhuVByZWZhYu+8iOeUqOS6juWIm+W7uumBk+WFt+agvOWtkO+8iVxuICAgICAgICBpdGVtU2xvdFByZWZhYjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6YGT5YW35qC85a2QUHJlZmFi77yI5YyF5ZCr5Zu+5qCH5ZKM5pWw6YeP5qCH562+77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDpgZPlhbfkv6Hmga/lvLnnqpfnu4Tku7bvvIjlj6/pgInvvIlcbiAgICAgICAgaXRlbVRvb2x0aXA6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLpgZPlhbfkv6Hmga/lvLnnqpfoioLngrnvvIjljIXlkKtJdGVtVG9vbHRpcOe7hOS7tu+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g6YGT5YW35qCP572R5qC86YWN572uXG4gICAgICAgIGludmVudG9yeUNvbHVtbnM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDYsXG4gICAgICAgICAgICB0b29sdGlwOiBcIumBk+WFt+agj+WIl+aVsO+8iOavj+ihjOaYvuekuueahOmBk+WFt+aVsOmHj++8iVwiXG4gICAgICAgIH0sXG4gICAgICAgIGludmVudG9yeVJvd3M6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDQsXG4gICAgICAgICAgICB0b29sdGlwOiBcIumBk+WFt+agj+ihjOaVsFwiXG4gICAgICAgIH0sXG4gICAgICAgIGl0ZW1TbG90U2l6ZToge1xuICAgICAgICAgICAgZGVmYXVsdDogODAsXG4gICAgICAgICAgICB0b29sdGlwOiBcIumBk+WFt+agvOWtkOWkp+Wwj++8iOWuvemrmO+8iVwiXG4gICAgICAgIH0sXG4gICAgICAgIGl0ZW1TbG90U3BhY2luZzoge1xuICAgICAgICAgICAgZGVmYXVsdDogMCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6YGT5YW35qC85a2Q5LmL6Ze055qE6Ze06LedXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDlsZ7mgKfpnaLmnb/vvIjljYrpgI/mmI7og4zmma/vvIlcbiAgICAgICAgc3RhdHNQYW5lbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWxnuaAp+mdouadv+iKgueCue+8iOWNiumAj+aYjuiDjOaZr++8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5aS05YOPUHJlZmFi77yI55So5LqO5Yqo5oCB5Yib5bu65aS05YOP77yJXG4gICAgICAgIGF2YXRhclByZWZhYjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5aS05YOPUHJlZmFi77yI5YyF5ZCr5aS05YOP5Zu+54mH77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDljZXkvY3mlbDmja7phY3nva5cbiAgICAgICAgdW5pdERhdGFDb25maWc6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWNleS9jeaVsOaNrumFjee9ru+8iOWPr+mAie+8jOWmguaenOS4jeiuvue9ruWImeS7jlVuaXREYXRhQ29uZmln6I635Y+W77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDlpIfnlKjotYTmupDvvJroi7Hpm4TlpLTlg4/otYTmupDliJfooajvvIjku4XlnKhVbml0RGF0YUNvbmZpZ+S4rei1hOa6kOS4uuepuuaXtuS9v+eUqO+8iVxuICAgICAgICBoZXJvSWNvbnM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW2NjLlNwcml0ZUZyYW1lXSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6Iux6ZuE5aS05YOP6LWE5rqQ5YiX6KGo77yI5aSH55So77yM5LuF5ZyoU2VsZWN0U2NlbmXmnKrliqDovb3ml7bkvb/nlKjvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOWkh+eUqOi1hOa6kO+8muaAqueJqeWktOWDj+i1hOa6kOWIl+ihqO+8iOS7heWcqFVuaXREYXRhQ29uZmln5Lit6LWE5rqQ5Li656m65pe25L2/55So77yJXG4gICAgICAgIG1vbnN0ZXJJY29uczoge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuU3ByaXRlRnJhbWVdLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmgKrnianlpLTlg4/otYTmupDliJfooajvvIjlpIfnlKjvvIzku4XlnKhTZWxlY3RTY2VuZeacquWKoOi9veaXtuS9v+eUqO+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5aSH55So6LWE5rqQ77ya6Iux6ZuEUHJlZmFi5YiX6KGo77yI5LuF5ZyoVW5pdERhdGFDb25maWfkuK3otYTmupDkuLrnqbrml7bkvb/nlKjvvIlcbiAgICAgICAgaGVyb1ByZWZhYnM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW2NjLlByZWZhYl0sXG4gICAgICAgICAgICB0b29sdGlwOiBcIuiLsembhFByZWZhYuWIl+ihqO+8iOWkh+eUqO+8jOS7heWcqFNlbGVjdFNjZW5l5pyq5Yqg6L295pe25L2/55So77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDlpIfnlKjotYTmupDvvJrmgKrnialQcmVmYWLliJfooajvvIjku4XlnKhVbml0RGF0YUNvbmZpZ+S4rei1hOa6kOS4uuepuuaXtuS9v+eUqO+8iVxuICAgICAgICBtb25zdGVyUHJlZmFiczoge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuUHJlZmFiXSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5oCq54mpUHJlZmFi5YiX6KGo77yI5aSH55So77yM5LuF5ZyoU2VsZWN0U2NlbmXmnKrliqDovb3ml7bkvb/nlKjvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOWktOWDj+mXtOi3nVxuICAgICAgICBhdmF0YXJTcGFjaW5nOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAxMDAsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWktOWDj+S5i+mXtOeahOmXtOi3nVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5bGe5oCn6Z2i5p2/5Lit55qE5bGe5oCn5qCH562+77yI6ZyA6KaB5Zyo57yW6L6R5Zmo5Lit57uR5a6a77yJXG4gICAgICAgIGhwTGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi55Sf5ZG95YC85qCH562+XCJcbiAgICAgICAgfSxcbiAgICAgICAgYXR0YWNrTGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5pS75Ye75Yqb5qCH562+XCJcbiAgICAgICAgfSxcbiAgICAgICAgZGVmZW5zZUxhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgICAgICB0b29sdGlwOiBcIumYsuW+oeWKm+agh+etvlwiXG4gICAgICAgIH0sXG4gICAgICAgIHNwZWVkTGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6YCf5bqm5qCH562+XCJcbiAgICAgICAgfSxcbiAgICAgICAgY3JpdExhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuaatOWHu+eOh+agh+etvlwiXG4gICAgICAgIH0sXG4gICAgICAgIG1pc3NMYWJlbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLpl6rpgb/njofmoIfnrb5cIlxuICAgICAgICB9LFxuICAgICAgICBsZXZlbExhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuetiee6p+agh+etvlwiXG4gICAgICAgIH0sXG4gICAgICAgIGV4cExhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgICAgICB0b29sdGlwOiBcIue7j+mqjOWAvOagh+etvlwiXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyDojrflj5bljZXkvY3mlbDmja7phY3nva7vvIjkvJjlhYjkvb/nlKhTZWxlY3RTY2VuZeS4reW3suiuvue9ruWlveeahOi1hOa6kO+8iVxuICAgICAgICBpZiAoIXRoaXMudW5pdERhdGFDb25maWcpIHtcbiAgICAgICAgICAgIHRoaXMudW5pdERhdGFDb25maWcgPSByZXF1aXJlKFwiVW5pdERhdGFDb25maWdcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlpoLmnpxVbml0RGF0YUNvbmZpZ+S4reeahOi1hOa6kOS4uuepuu+8jOS7juWcuuaZr+mFjee9ruS4reWKoOi9ve+8iOWkh+eUqOaWueahiO+8iVxuICAgICAgICB0aGlzLl9sb2FkQ29uZmlnSWZOZWVkZWQoKTtcblxuICAgICAgICAvLyDlvZPliY3mmL7npLrnmoTkurrnianljp/lnotcbiAgICAgICAgdGhpcy5jdXJyZW50RGlzcGxheVByZWZhYiA9IG51bGw7XG4gICAgICAgIC8vIOW9k+WJjemAieS4reeahOWNleS9jeaVsOaNrlxuICAgICAgICB0aGlzLmN1cnJlbnRVbml0RGF0YSA9IG51bGw7XG5cbiAgICAgICAgLy8g5Yid5aeL5YyWVUlcbiAgICAgICAgdGhpcy5faW5pdEF2YXRhcnMoKTtcblxuICAgICAgICAvLyDliJ3lp4vljJbpgZPlhbfmoI/vvIjlu7bov5/kuIDluKfvvIznoa7kv53lrrnlmajoioLngrnlt7LlrozlhajliJ3lp4vljJbvvIlcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5faW5pdEludmVudG9yeSgpO1xuICAgICAgICB9LCAwKTtcblxuICAgICAgICAvLyDliJ3lp4vljJboo4XlpIfmoI/vvIgz5Liq5qC85a2Q77yJXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRFcXVpcG1lbnRCYXIoKTtcbiAgICAgICAgfSwgMC4wNSk7XG5cbiAgICAgICAgLy8g6K6+572u6YGT5YW35Zu+5qCH77yI5aaC5p6cSXRlbUljb25TZXR0ZXLnu4Tku7blt7Lorr7nva7vvIlcbiAgICAgICAgdGhpcy5fc2V0dXBJdGVtSWNvbnMoKTtcblxuICAgICAgICAvLyDliJ3lp4vljJbpgZPlhbfmlbDmja7vvIjmt7vliqA15Liq5Y2H57qn6I2v5rC055So5LqO5rWL6K+V77yJXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX2luaXREZWZhdWx0SXRlbXMoKTtcbiAgICAgICAgfSwgMC41KTtcblxuICAgICAgICAvLyDpmpDol4/lsZ7mgKfpnaLmnb9cbiAgICAgICAgaWYgKHRoaXMuc3RhdHNQYW5lbCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0c1BhbmVsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5ouW5ou954q25oCB77yI6KOF5aSH5LuO6YGT5YW35qCP5ouW5Yiw6KOF5aSH5qCPIC8g5LuO6KOF5aSH5qCP5ouW5Zue77yJXG4gICAgICAgIHRoaXMuX2RyYWdTcHJpdGUgPSBudWxsO1xuICAgICAgICB0aGlzLl9kcmFnZ2luZ0l0ZW0gPSBudWxsO1xuICAgICAgICB0aGlzLl9kcmFnZ2luZ1Nsb3QgPSBudWxsO1xuICAgICAgICB0aGlzLl9kcmFnZ2luZ0Zyb21FcXVpcG1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLl9kcmFnSWNvblNpemUgPSBudWxsO1xuICAgICAgICB0aGlzLl9kcmFnU3RhcnRDYW52YXNQb3MgPSBudWxsOyAvLyDmi5bmi73lvIDlp4vml7bljp/lp4vlm77moIflnKggQ2FudmFzIOS4i+eahOWdkOagh++8iOeUqOS6juS7juWOn+S9jee9ruKAnOaLveWHuuadpeKAne+8iVxuXG4gICAgICAgIC8vIOe7keWumueCueWHu+S6i+S7tu+8iOeCueWHu+S7u+aEj+WcsOaWueWFs+mXreWxnuaAp+mdouadv++8iVxuICAgICAgICAvLyDkvb/nlKhDYW52YXPmiJblnLrmma/moLnoioLngrnmnaXmjZXojrfngrnlh7vkuovku7ZcbiAgICAgICAgY29uc3QgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICAgICAgaWYgKGNhbnZhcykge1xuICAgICAgICAgICAgLy8g5YWI57uR5a6a5ouW5ou955u45YWz5LqL5Lu277yI5LyY5YWI57qn5pu06auY77yJXG4gICAgICAgICAgICBjYW52YXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5fb25HbG9iYWxUb3VjaE1vdmUsIHRoaXMpO1xuICAgICAgICAgICAgY2FudmFzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fb25HbG9iYWxUb3VjaEVuZCwgdGhpcyk7XG4gICAgICAgICAgICBjYW52YXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLl9vbkdsb2JhbFRvdWNoRW5kLCB0aGlzKTtcbiAgICAgICAgICAgIC8vIOeCueWHu+WFs+mXremdouadv+S6i+S7tu+8iOWcqOaLluaLveS6i+S7tuS5i+WQju+8jOmBv+WFjeWGsueqge+8iVxuICAgICAgICAgICAgY2FudmFzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fb25DYW52YXNDbGljaywgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5aaC5p6cVW5pdERhdGFDb25maWfkuK3nmoTotYTmupDkuLrnqbrvvIzku47lnLrmma/phY3nva7kuK3liqDovb3vvIjlpIfnlKjmlrnmoYjvvIlcbiAgICAgKiDkvJjlhYjkvb/nlKhTZWxlY3RTY2VuZeS4reW3suiuvue9ruWlveeahOi1hOa6kO+8jOWmguaenOS4uuepuuaJjeS9v+eUqOWcuuaZr+mFjee9rlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2xvYWRDb25maWdJZk5lZWRlZCgpIHtcbiAgICAgICAgbGV0IG5lZWRMb2FkID0gZmFsc2U7XG5cbiAgICAgICAgLy8g5qOA5p+l5piv5ZCm5pyJ6LWE5rqQ5Li656m6XG4gICAgICAgIGlmICh0aGlzLnVuaXREYXRhQ29uZmlnICYmIHRoaXMudW5pdERhdGFDb25maWcuaGVyb3MpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpXS5pY29uIHx8ICF0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zW2ldLnByZWZhYikge1xuICAgICAgICAgICAgICAgICAgICBuZWVkTG9hZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbmVlZExvYWQgJiYgdGhpcy51bml0RGF0YUNvbmZpZyAmJiB0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnNbaV0uaWNvbiB8fCAhdGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVyc1tpXS5wcmVmYWIpIHtcbiAgICAgICAgICAgICAgICAgICAgbmVlZExvYWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlpoLmnpzmnInotYTmupDkuLrnqbrvvIzku47lnLrmma/phY3nva7kuK3liqDovb1cbiAgICAgICAgaWYgKG5lZWRMb2FkKSB7XG4gICAgICAgICAgICBjYy5sb2coXCJbQ2hhcmFjdGVyVmlld1VJXSDmo4DmtYvliLBVbml0RGF0YUNvbmZpZ+S4rei1hOa6kOS4uuepuu+8jOS7juWcuuaZr+mFjee9ruWKoOi9ve+8iOWkh+eUqOaWueahiO+8iVwiKTtcblxuICAgICAgICAgICAgLy8g5bqU55So6Iux6ZuE5aS05YOP5ZKMUHJlZmFi6YWN572u77yI5LuF5ZyoVW5pdERhdGFDb25maWfkuK3otYTmupDkuLrnqbrml7borr7nva7vvIlcbiAgICAgICAgICAgIGlmICh0aGlzLmhlcm9JY29ucyAmJiB0aGlzLmhlcm9JY29ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZXJvSWNvbnMuZm9yRWFjaCgoaWNvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudW5pdERhdGFDb25maWcuaGVyb3MgJiYgdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpbmRleF0gJiYgaWNvbiAmJiAhdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpbmRleF0uaWNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpbmRleF0uaWNvbiA9IGljb247XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOS7juWcuuaZr+mFjee9ruiuvue9ruiLsembhOWktOWDjzogJHt0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zW2luZGV4XS5uYW1lfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmhlcm9QcmVmYWJzICYmIHRoaXMuaGVyb1ByZWZhYnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVyb1ByZWZhYnMuZm9yRWFjaCgocHJlZmFiLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51bml0RGF0YUNvbmZpZy5oZXJvcyAmJiB0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zW2luZGV4XSAmJiBwcmVmYWIgJiYgIXRoaXMudW5pdERhdGFDb25maWcuaGVyb3NbaW5kZXhdLnByZWZhYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpbmRleF0ucHJlZmFiID0gcHJlZmFiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDku47lnLrmma/phY3nva7orr7nva7oi7Hpm4RQcmVmYWI6ICR7dGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpbmRleF0ubmFtZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDlupTnlKjmgKrnianlpLTlg4/lkoxQcmVmYWLphY3nva7vvIjku4XlnKhVbml0RGF0YUNvbmZpZ+S4rei1hOa6kOS4uuepuuaXtuiuvue9ru+8iVxuICAgICAgICAgICAgaWYgKHRoaXMubW9uc3Rlckljb25zICYmIHRoaXMubW9uc3Rlckljb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnN0ZXJJY29ucy5mb3JFYWNoKChpY29uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVycyAmJiB0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzW2luZGV4XSAmJiBpY29uICYmICF0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzW2luZGV4XS5pY29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzW2luZGV4XS5pY29uID0gaWNvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5LuO5Zy65pmv6YWN572u6K6+572u5oCq54mp5aS05YOPOiAke3RoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnNbaW5kZXhdLm5hbWV9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMubW9uc3RlclByZWZhYnMgJiYgdGhpcy5tb25zdGVyUHJlZmFicy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb25zdGVyUHJlZmFicy5mb3JFYWNoKChwcmVmYWIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzICYmIHRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnNbaW5kZXhdICYmIHByZWZhYiAmJiAhdGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVyc1tpbmRleF0ucHJlZmFiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzW2luZGV4XS5wcmVmYWIgPSBwcmVmYWI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOS7juWcuuaZr+mFjee9ruiuvue9ruaAqueJqVByZWZhYjogJHt0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzW2luZGV4XS5uYW1lfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5sb2coXCJbQ2hhcmFjdGVyVmlld1VJXSBVbml0RGF0YUNvbmZpZ+S4reW3suaciei1hOa6kO+8jOebtOaOpeS9v+eUqO+8iOWPr+iDveeUsVNlbGVjdFNjZW5l6K6+572u77yJXCIpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOe7keWumkNhbnZhc+eCueWHu+S6i+S7tlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2JpbmRDYW52YXNDbGljaygpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICAgICAgaWYgKGNhbnZhcykge1xuICAgICAgICAgICAgY2FudmFzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fb25DYW52YXNDbGljaywgdGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlu7bov5/nu5HlrprvvIjlpoLmnpxDYW52YXPov5jmnKrliJvlu7rvvIlcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9iaW5kQ2FudmFzQ2xpY2soKTtcbiAgICAgICAgICAgIH0sIDAuMSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5aS05YOP5YiX6KGoXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfaW5pdEF2YXRhcnMoKSB7XG4gICAgICAgIGlmICghdGhpcy5hdmF0YXJMaXN0Q29udGFpbmVyKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIltDaGFyYWN0ZXJWaWV3VUldIOacquiuvue9rmF2YXRhckxpc3RDb250YWluZXLvvIzml6Dms5XliJvlu7rlpLTlg4/liJfooahcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuYXZhdGFyUHJlZmFiKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIltDaGFyYWN0ZXJWaWV3VUldIOacquiuvue9rmF2YXRhclByZWZhYu+8jOaXoOazleWIm+W7uuWktOWDj1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOa4heepuuWuueWZqFxuICAgICAgICB0aGlzLmF2YXRhckxpc3RDb250YWluZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcblxuICAgICAgICAvLyDorqHnrpfoi7Hpm4TmlbDph4/vvIjnlKjkuo7mgKrnianlpLTlg4/nmoTkvY3nva7lgY/np7vvvIlcbiAgICAgICAgY29uc3QgaGVyb0NvdW50ID0gdGhpcy51bml0RGF0YUNvbmZpZyAmJiB0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zID8gdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvcy5sZW5ndGggOiAwO1xuXG4gICAgICAgIC8vIOWIm+W7uuiLsembhOWktOWDj1xuICAgICAgICBpZiAodGhpcy51bml0RGF0YUNvbmZpZyAmJiB0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zKSB7XG4gICAgICAgICAgICB0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zLmZvckVhY2goKGhlcm9EYXRhLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUF2YXRhcihoZXJvRGF0YSwgXCJoZXJvXCIsIGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5Yib5bu65oCq54mp5aS05YOP77yI5L2N572u5LuO6Iux6ZuE5ZCO6Z2i5byA5aeL77yJXG4gICAgICAgIGlmICh0aGlzLnVuaXREYXRhQ29uZmlnICYmIHRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnMpIHtcbiAgICAgICAgICAgIHRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnMuZm9yRWFjaCgobW9uc3RlckRhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g5L2/55SoIGhlcm9Db3VudCArIGluZGV4IOS9nOS4uuS9jee9rue0ouW8le+8jOiuqeaAqueJqeaOkuWcqOiLsembhOWQjumdolxuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUF2YXRhcihtb25zdGVyRGF0YSwgXCJtb25zdGVyXCIsIGhlcm9Db3VudCArIGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMlumBk+WFt+agj1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2luaXRJbnZlbnRvcnkoKSB7XG4gICAgICAgIGlmICghdGhpcy5pbnZlbnRvcnlDb250YWluZXIpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJbQ2hhcmFjdGVyVmlld1VJXSDmnKrorr7nva5pbnZlbnRvcnlDb250YWluZXLvvIzot7Pov4fpgZPlhbfmoI/liJ3lp4vljJZcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaXRlbVNsb3RQcmVmYWIpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJbQ2hhcmFjdGVyVmlld1VJXSDmnKrorr7nva5pdGVtU2xvdFByZWZhYu+8jOi3s+i/h+mBk+WFt+agj+WIneWni+WMllwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOW8uuWItuiuvue9ruihjOWIl+aVsO+8iOehruS/neS9v+eUqOaWsOeahOWAvO+8iVxuICAgICAgICBpZiAodGhpcy5pbnZlbnRvcnlDb2x1bW5zICE9PSA2KSB7XG4gICAgICAgICAgICB0aGlzLmludmVudG9yeUNvbHVtbnMgPSA2O1xuICAgICAgICAgICAgY2MubG9nKFwiW0NoYXJhY3RlclZpZXdVSV0g5by65Yi26K6+572u5YiX5pWw5Li6NlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pbnZlbnRvcnlSb3dzICE9PSA0KSB7XG4gICAgICAgICAgICB0aGlzLmludmVudG9yeVJvd3MgPSA0O1xuICAgICAgICAgICAgY2MubG9nKFwiW0NoYXJhY3RlclZpZXdVSV0g5by65Yi26K6+572u6KGM5pWw5Li6NFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOa4heepuuWuueWZqFxuICAgICAgICB0aGlzLmludmVudG9yeUNvbnRhaW5lci5yZW1vdmVBbGxDaGlsZHJlbigpO1xuXG4gICAgICAgIC8vIOehruS/neWuueWZqOWPr+ingVxuICAgICAgICB0aGlzLmludmVudG9yeUNvbnRhaW5lci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmludmVudG9yeUNvbnRhaW5lci5vcGFjaXR5ID0gMjU1O1xuXG4gICAgICAgIC8vIOiuvue9ruWuueWZqOmUmueCueS4uuWxheS4re+8iDAuNSwgMC4177yJ77yM6L+Z5qC35L2N572u6K6h566X5pu0566A5Y2VXG4gICAgICAgIHRoaXMuaW52ZW50b3J5Q29udGFpbmVyLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcblxuICAgICAgICAvLyDorqHnrpfpgZPlhbfmoI/mgLvmoLzlrZDmlbDlkozlrrnlmajlpKflsI9cbiAgICAgICAgY29uc3QgdG90YWxTbG90cyA9IHRoaXMuaW52ZW50b3J5Q29sdW1ucyAqIHRoaXMuaW52ZW50b3J5Um93cztcbiAgICAgICAgY29uc3Qgc2xvdFNpemUgPSB0aGlzLml0ZW1TbG90U2l6ZSB8fCA4MDtcbiAgICAgICAgY29uc3Qgc3BhY2luZyA9IHRoaXMuaXRlbVNsb3RTcGFjaW5nIHx8IDA7IC8vIOmXtOmalOaUueS4ujBcblxuICAgICAgICAvLyDlhYjorqHnrpflubborr7nva7lrrnlmajlpKflsI/vvIjlv4XpobvlnKjmt7vliqDlrZDoioLngrnkuYvliY3vvIlcbiAgICAgICAgY29uc3QgdG90YWxXaWR0aCA9ICh0aGlzLmludmVudG9yeUNvbHVtbnMgKiBzbG90U2l6ZSkgKyAoKHRoaXMuaW52ZW50b3J5Q29sdW1ucyAtIDEpICogc3BhY2luZyk7XG4gICAgICAgIGNvbnN0IHRvdGFsSGVpZ2h0ID0gKHRoaXMuaW52ZW50b3J5Um93cyAqIHNsb3RTaXplKSArICgodGhpcy5pbnZlbnRvcnlSb3dzIC0gMSkgKiBzcGFjaW5nKTtcbiAgICAgICAgdGhpcy5pbnZlbnRvcnlDb250YWluZXIuc2V0Q29udGVudFNpemUodG90YWxXaWR0aCwgdG90YWxIZWlnaHQpO1xuXG4gICAgICAgIC8vIOa3u+WKoE1hc2vnu4Tku7bvvIzoo4HliarotoXlh7rojIPlm7TnmoTmoLzlrZBcbiAgICAgICAgbGV0IG1hc2sgPSB0aGlzLmludmVudG9yeUNvbnRhaW5lci5nZXRDb21wb25lbnQoY2MuTWFzayk7XG4gICAgICAgIGlmICghbWFzaykge1xuICAgICAgICAgICAgbWFzayA9IHRoaXMuaW52ZW50b3J5Q29udGFpbmVyLmFkZENvbXBvbmVudChjYy5NYXNrKTtcbiAgICAgICAgICAgIG1hc2sudHlwZSA9IGNjLk1hc2suVHlwZS5SRUNUOyAvLyDnn6nlvaLoo4HliapcbiAgICAgICAgICAgIGNjLmxvZyhcIltDaGFyYWN0ZXJWaWV3VUldIOiHquWKqOa3u+WKoE1hc2vnu4Tku7bliLDpgZPlhbfmoI/lrrnlmajvvIjnlKjkuo7oo4HliarotoXlh7rojIPlm7TnmoTmoLzlrZDvvIlcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOmBk+WFt+agj+WuueWZqOWkp+WwjzogJHt0b3RhbFdpZHRofSB4ICR7dG90YWxIZWlnaHR9LCDmoLzlrZDmlbA6ICR7dG90YWxTbG90c30sIOmUmueCuTogKCR7dGhpcy5pbnZlbnRvcnlDb250YWluZXIuZ2V0QW5jaG9yUG9pbnQoKS54fSwgJHt0aGlzLmludmVudG9yeUNvbnRhaW5lci5nZXRBbmNob3JQb2ludCgpLnl9KWApO1xuXG4gICAgICAgIC8vIOaWueW8j+S4gO+8muS9v+eUqExheW91dOe7hOS7tuiHquWKqOW4g+WxgO+8iOaOqOiNkO+8iVxuICAgICAgICAvLyDmo4Dmn6XmmK/lkKblt7LmnIlMYXlvdXTnu4Tku7bvvIzlpoLmnpzmsqHmnInliJnmt7vliqBcbiAgICAgICAgbGV0IGxheW91dCA9IHRoaXMuaW52ZW50b3J5Q29udGFpbmVyLmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xuICAgICAgICBpZiAoIWxheW91dCkge1xuICAgICAgICAgICAgbGF5b3V0ID0gdGhpcy5pbnZlbnRvcnlDb250YWluZXIuYWRkQ29tcG9uZW50KGNjLkxheW91dCk7XG4gICAgICAgICAgICBjYy5sb2coXCJbQ2hhcmFjdGVyVmlld1VJXSDoh6rliqjmt7vliqBMYXlvdXTnu4Tku7bliLDpgZPlhbfmoI/lrrnlmahcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDnpoHnlKhMYXlvdXTnu4Tku7bvvIzkvb/nlKjmiYvliqjluIPlsYDvvIjmm7Tlj6/mjqfvvIlcbiAgICAgICAgLy8gTGF5b3V057uE5Lu25ZyoR1JJROaooeW8j+S4i+WPr+iDveaciemXrumimO+8jOaJi+WKqOW4g+WxgOabtOWPr+mdoFxuICAgICAgICBpZiAobGF5b3V0KSB7XG4gICAgICAgICAgICBsYXlvdXQuZW5hYmxlZCA9IGZhbHNlOyAvLyDnpoHnlKhMYXlvdXTnu4Tku7ZcbiAgICAgICAgICAgIGNjLmxvZyhcIltDaGFyYWN0ZXJWaWV3VUldIOemgeeUqExheW91dOe7hOS7tu+8jOS9v+eUqOaJi+WKqOW4g+WxgFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWIm+W7uumBk+WFt+agvOWtkFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsU2xvdHM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc2xvdE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1TbG90UHJlZmFiKTtcbiAgICAgICAgICAgIGlmICghc2xvdE5vZGUpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihgW0NoYXJhY3RlclZpZXdVSV0g5peg5rOV5a6e5L6L5YyW6YGT5YW35qC85a2QUHJlZmFiICjntKLlvJU6ICR7aX0pYCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNsb3ROb2RlLm5hbWUgPSBgSXRlbVNsb3RfJHtpfWA7XG5cbiAgICAgICAgICAgIC8vIOehruS/neiKgueCueWPr+ingVxuICAgICAgICAgICAgc2xvdE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHNsb3ROb2RlLm9wYWNpdHkgPSAyNTU7XG5cbiAgICAgICAgICAgIC8vIOW8uuWItuiuvue9ruiKgueCueWkp+Wwj+S4unNsb3RTaXpl77yI6KaG55uWUHJlZmFi55qE6buY6K6k5aSn5bCP77yJXG4gICAgICAgICAgICBzbG90Tm9kZS5zZXRDb250ZW50U2l6ZShzbG90U2l6ZSwgc2xvdFNpemUpO1xuXG4gICAgICAgICAgICAvLyDorr7nva7oioLngrnplJrngrnkuLrlsYXkuK3vvIjkvr/kuo7lrprkvY3vvIlcbiAgICAgICAgICAgIHNsb3ROb2RlLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcblxuICAgICAgICAgICAgLy8g6K6+572u57yp5pS+5Li6MC44XG4gICAgICAgICAgICBzbG90Tm9kZS5zZXRTY2FsZSgwLjgsIDAuOCwgMC44KTtcblxuICAgICAgICAgICAgLy8g5re75Yqg5Yiw5a655ZmoXG4gICAgICAgICAgICB0aGlzLmludmVudG9yeUNvbnRhaW5lci5hZGRDaGlsZChzbG90Tm9kZSk7XG5cbiAgICAgICAgICAgIC8vIOWIneWni+WMlumBk+WFt+agvOWtkO+8iOepuueKtuaAge+8iVxuICAgICAgICAgICAgdGhpcy5faW5pdEl0ZW1TbG90KHNsb3ROb2RlLCBpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOmqjOivgeWIm+W7uue7k+aenFxuICAgICAgICBjb25zdCBjcmVhdGVkU2xvdHMgPSB0aGlzLmludmVudG9yeUNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g6YGT5YW35qCP5Yid5aeL5YyW5a6M5oiQOiAke3RoaXMuaW52ZW50b3J5Um93c33ooYwgeCAke3RoaXMuaW52ZW50b3J5Q29sdW1uc33liJcgPSAke3RvdGFsU2xvdHN95Liq5qC85a2QLCDlrp7pmYXliJvlu7o6ICR7Y3JlYXRlZFNsb3RzfeS4qmApO1xuXG4gICAgICAgIGlmIChjcmVhdGVkU2xvdHMgPT09IDApIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwiW0NoYXJhY3RlclZpZXdVSV0g6K2m5ZGK77ya5rKh5pyJ5Yib5bu65Lu75L2V6YGT5YW35qC85a2Q77yB6K+35qOA5p+laXRlbVNsb3RQcmVmYWLmmK/lkKbmraPnoa7nu5HlrprjgIJcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDkvb/nlKjmiYvliqjluIPlsYDvvIjnoa7kv53pl7TpmpTkuLow77yM5bm25re75Yqg6L655qGG77yJXG4gICAgICAgIHRoaXMuX21hbnVhbExheW91dEludmVudG9yeSgpO1xuXG4gICAgICAgIC8vIOi+k+WHuuiwg+ivleS/oeaBr1xuICAgICAgICBjb25zdCBjb250YWluZXJQb3MgPSB0aGlzLmludmVudG9yeUNvbnRhaW5lci5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBjb250YWluZXJXb3JsZFBvcyA9IHRoaXMuaW52ZW50b3J5Q29udGFpbmVyLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5a655Zmo5L2N572uOiDmnKzlnLAoJHtjb250YWluZXJQb3MueC50b0ZpeGVkKDEpfSwgJHtjb250YWluZXJQb3MueS50b0ZpeGVkKDEpfSksIOS4lueVjCgke2NvbnRhaW5lcldvcmxkUG9zLngudG9GaXhlZCgxKX0sICR7Y29udGFpbmVyV29ybGRQb3MueS50b0ZpeGVkKDEpfSlgKTtcbiAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDlrrnlmajlpKflsI86ICR7dGhpcy5pbnZlbnRvcnlDb250YWluZXIuZ2V0Q29udGVudFNpemUoKS53aWR0aH0geCAke3RoaXMuaW52ZW50b3J5Q29udGFpbmVyLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0fWApO1xuICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOWuueWZqOWPr+ingeaApzogYWN0aXZlPSR7dGhpcy5pbnZlbnRvcnlDb250YWluZXIuYWN0aXZlfSwgb3BhY2l0eT0ke3RoaXMuaW52ZW50b3J5Q29udGFpbmVyLm9wYWNpdHl9YCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOaJi+WKqOW4g+WxgOmBk+WFt+agj++8iOWkh+eUqOaWueahiO+8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX21hbnVhbExheW91dEludmVudG9yeSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmludmVudG9yeUNvbnRhaW5lcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2xvdFNpemUgPSB0aGlzLml0ZW1TbG90U2l6ZSB8fCA4MDtcbiAgICAgICAgY29uc3Qgc3BhY2luZyA9IHRoaXMuaXRlbVNsb3RTcGFjaW5nIHx8IDA7IC8vIOmXtOmalOaUueS4ujBcbiAgICAgICAgY29uc3Qgc2NhbGUgPSAwLjg7IC8vIOe8qeaUvuWAvFxuICAgICAgICBjb25zdCBzbG90cyA9IHRoaXMuaW52ZW50b3J5Q29udGFpbmVyLmNoaWxkcmVuO1xuXG4gICAgICAgIC8vIOiOt+WPluWuueWZqOWkp+Wwj+WSjOmUmueCuVxuICAgICAgICBjb25zdCBjb250YWluZXJTaXplID0gdGhpcy5pbnZlbnRvcnlDb250YWluZXIuZ2V0Q29udGVudFNpemUoKTtcbiAgICAgICAgY29uc3QgYW5jaG9yUG9pbnQgPSB0aGlzLmludmVudG9yeUNvbnRhaW5lci5nZXRBbmNob3JQb2ludCgpO1xuXG4gICAgICAgIC8vIOiuoeeul+WunumZheaYvuekuuWkp+Wwj++8iOiAg+iZkee8qeaUvu+8iVxuICAgICAgICBjb25zdCBkaXNwbGF5U2l6ZSA9IHNsb3RTaXplICogc2NhbGU7XG5cbiAgICAgICAgLy8g6K6h566X5a655Zmo5aSn5bCP77yI5L2/55So5a6e6ZmF5pi+56S65aSn5bCP77yM56Gu5L+d57Sn5a+G5o6S5YiX77yJXG4gICAgICAgIGNvbnN0IHRvdGFsV2lkdGggPSB0aGlzLmludmVudG9yeUNvbHVtbnMgKiBkaXNwbGF5U2l6ZTtcbiAgICAgICAgY29uc3QgdG90YWxIZWlnaHQgPSB0aGlzLmludmVudG9yeVJvd3MgKiBkaXNwbGF5U2l6ZTtcblxuICAgICAgICAvLyDmm7TmlrDlrrnlmajlpKflsI/vvIjkvb/nlKjlrp7pmYXmmL7npLrlpKflsI/vvIlcbiAgICAgICAgdGhpcy5pbnZlbnRvcnlDb250YWluZXIuc2V0Q29udGVudFNpemUodG90YWxXaWR0aCwgdG90YWxIZWlnaHQpO1xuXG4gICAgICAgIC8vIOiuoeeul+i1t+Wni+S9jee9ru+8muS7juW3puS4iuinkuW8gOWni++8jOesrOS4gOS4quagvOWtkOeahOS4reW/g+S9jee9rlxuICAgICAgICAvLyDkvb/nlKjlrp7pmYXmmL7npLrlpKflsI/mnaXorqHnrpfkvY3nva7vvIznoa7kv53ntKflr4bmjpLliJdcbiAgICAgICAgY29uc3Qgc3RhcnRYID0gLXRvdGFsV2lkdGggLyAyICsgZGlzcGxheVNpemUgLyAyO1xuICAgICAgICBjb25zdCBzdGFydFkgPSB0b3RhbEhlaWdodCAvIDIgLSBkaXNwbGF5U2l6ZSAvIDI7XG5cbiAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDmiYvliqjluIPlsYDlj4LmlbA6IHNsb3RTaXplPSR7c2xvdFNpemV9LCBzY2FsZT0ke3NjYWxlfSwgZGlzcGxheVNpemU9JHtkaXNwbGF5U2l6ZS50b0ZpeGVkKDEpfSwgc3BhY2luZz0ke3NwYWNpbmd9YCk7XG4gICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5a655Zmo5aSn5bCPOiAke3RvdGFsV2lkdGgudG9GaXhlZCgxKX0geCAke3RvdGFsSGVpZ2h0LnRvRml4ZWQoMSl9LCBzdGFydFg9JHtzdGFydFgudG9GaXhlZCgxKX0sIHN0YXJ0WT0ke3N0YXJ0WS50b0ZpeGVkKDEpfWApO1xuXG4gICAgICAgIC8vIOaJi+WKqOiuvue9ruavj+S4quagvOWtkOeahOS9jee9rlxuICAgICAgICBzbG90cy5mb3JFYWNoKChzbG90Tm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaW5kZXggLyB0aGlzLmludmVudG9yeUNvbHVtbnMpO1xuICAgICAgICAgICAgY29uc3QgY29sID0gaW5kZXggJSB0aGlzLmludmVudG9yeUNvbHVtbnM7XG5cbiAgICAgICAgICAgIC8vIOiuoeeul+S9jee9ru+8iOS9v+eUqOWunumZheaYvuekuuWkp+Wwj++8jOehruS/nee0p+WvhuaOkuWIl++8jOaXoOmXtOmame+8iVxuICAgICAgICAgICAgY29uc3QgeCA9IHN0YXJ0WCArIGNvbCAqIGRpc3BsYXlTaXplO1xuICAgICAgICAgICAgY29uc3QgeSA9IHN0YXJ0WSAtIHJvdyAqIGRpc3BsYXlTaXplO1xuXG4gICAgICAgICAgICAvLyDorr7nva7kvY3nva7vvIjnoa7kv53lnKjlrrnlmajojIPlm7TlhoXvvIlcbiAgICAgICAgICAgIHNsb3ROb2RlLnNldFBvc2l0aW9uKHgsIHkpO1xuXG4gICAgICAgICAgICAvLyDlvLrliLborr7nva7oioLngrnlpKflsI/kuLpzbG90U2l6Ze+8iOimhuebllByZWZhYueahOm7mOiupOWkp+Wwj++8iVxuICAgICAgICAgICAgc2xvdE5vZGUuc2V0Q29udGVudFNpemUoc2xvdFNpemUsIHNsb3RTaXplKTtcblxuICAgICAgICAgICAgLy8g6K6+572u6IqC54K56ZSa54K55Li65bGF5LitXG4gICAgICAgICAgICBzbG90Tm9kZS5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG5cbiAgICAgICAgICAgIC8vIOiuvue9rue8qeaUvuS4ujAuOO+8iOW/hemhu+WcqOiuvue9ruS9jee9ruS5i+WQju+8jOehruS/neS9jee9ruiuoeeul+ato+ehru+8iVxuICAgICAgICAgICAgc2xvdE5vZGUuc2V0U2NhbGUoMC44LCAwLjgsIDAuOCk7XG5cbiAgICAgICAgICAgIC8vIOehruS/neiKgueCueWPr+ingVxuICAgICAgICAgICAgc2xvdE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHNsb3ROb2RlLm9wYWNpdHkgPSAyNTU7XG5cbiAgICAgICAgICAgIC8vIOiwg+aVtOWtkOiKgueCueWkp+Wwj++8iEJhY2tncm91bmTjgIFJY29u562J77yJXG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHNsb3ROb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5bal07XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5piv6IOM5pmv5oiW5Zu+5qCH6IqC54K577yM6K6+572u5Li65LiO54i26IqC54K555u45ZCM5aSn5bCPXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5hbWUgPT09IFwiQmFja2dyb3VuZFwiIHx8IGNoaWxkLm5hbWUgPT09IFwiSWNvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnNldENvbnRlbnRTaXplKHNsb3RTaXplLCBzbG90U2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOehruS/neagvOWtkOWPr+inge+8iOa3u+WKoOiDjOaZr++8iVxuICAgICAgICAgICAgdGhpcy5fZW5zdXJlU2xvdFZpc2libGUoc2xvdE5vZGUsIGluZGV4KTtcblxuICAgICAgICAgICAgLy8g5re75Yqg6L655qGG57q/5qGG77yI55So5LqO5Yy65YiG5q+P5Liq5qC85a2Q77yJLSDlv4XpobvlnKjmnIDlkI7mt7vliqDvvIznoa7kv53mmL7npLrlnKjmnIDkuIrlsYJcbiAgICAgICAgICAgIHRoaXMuX2FkZFNsb3RCb3JkZXIoc2xvdE5vZGUsIHNsb3RTaXplKTtcblxuICAgICAgICAgICAgLy8g6aqM6K+B5L2N572u5piv5ZCm5Zyo5a655Zmo6IyD5Zu05YaF77yI5L2/55So5a6e6ZmF5pi+56S65aSn5bCP77yJXG4gICAgICAgICAgICBjb25zdCBzbG90UG9zID0gc2xvdE5vZGUuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHNsb3RIYWxmU2l6ZSA9IGRpc3BsYXlTaXplIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckhhbGZXaWR0aCA9IHRvdGFsV2lkdGggLyAyO1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVySGFsZkhlaWdodCA9IHRvdGFsSGVpZ2h0IC8gMjtcblxuICAgICAgICAgICAgY29uc3QgaXNJblJhbmdlID0gKHNsb3RQb3MueCAtIHNsb3RIYWxmU2l6ZSA+PSAtY29udGFpbmVySGFsZldpZHRoKSAmJlxuICAgICAgICAgICAgICAgIChzbG90UG9zLnggKyBzbG90SGFsZlNpemUgPD0gY29udGFpbmVySGFsZldpZHRoKSAmJlxuICAgICAgICAgICAgICAgIChzbG90UG9zLnkgLSBzbG90SGFsZlNpemUgPj0gLWNvbnRhaW5lckhhbGZIZWlnaHQpICYmXG4gICAgICAgICAgICAgICAgKHNsb3RQb3MueSArIHNsb3RIYWxmU2l6ZSA8PSBjb250YWluZXJIYWxmSGVpZ2h0KTtcblxuICAgICAgICAgICAgaWYgKGluZGV4IDwgNSkgeyAvLyDovpPlh7rliY015Liq5qC85a2Q55qE6K+m57uG5L+h5oGvXG4gICAgICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDmoLzlrZAke2luZGV4fTog5L2N572uKCR7eC50b0ZpeGVkKDEpfSwgJHt5LnRvRml4ZWQoMSl9KSwg5aSn5bCPJHtzbG90U2l6ZX14JHtzbG90U2l6ZX0sIOWuueWZqOWGhTogJHtpc0luUmFuZ2UgPyAn4pyTJyA6ICfinJcnfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzSW5SYW5nZSkge1xuICAgICAgICAgICAgICAgIGNjLndhcm4oYFtDaGFyYWN0ZXJWaWV3VUldIOitpuWRiu+8muagvOWtkCR7aW5kZXh95L2N572u6LaF5Ye65a655Zmo6IyD5Zu077yB5L2N572uOiAoJHt4LnRvRml4ZWQoMSl9LCAke3kudG9GaXhlZCgxKX0pLCDlrrnlmajlpKflsI86ICR7Y29udGFpbmVyU2l6ZS53aWR0aH14JHtjb250YWluZXJTaXplLmhlaWdodH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDmiYvliqjluIPlsYDlrozmiJDvvIzlhbEke3Nsb3RzLmxlbmd0aH3kuKrmoLzlrZBgKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog56Gu5L+d6YGT5YW35qC85a2Q5Y+v6KeB77yI5aaC5p6c5rKh5pyJ6IOM5pmv77yM5re75Yqg5LiA5Liq566A5Y2V55qE6IOM5pmv77yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IHNsb3ROb2RlIC0g6YGT5YW35qC85a2Q6IqC54K5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0g5qC85a2Q57Si5byVXG4gICAgICovXG4gICAgX2Vuc3VyZVNsb3RWaXNpYmxlKHNsb3ROb2RlLCBpbmRleCkge1xuICAgICAgICAvLyDmo4Dmn6XoioLngrnmmK/lkKbmnInlj6/op4HnmoRTcHJpdGXnu4Tku7ZcbiAgICAgICAgbGV0IGhhc1Zpc2libGVTcHJpdGUgPSBmYWxzZTtcbiAgICAgICAgbGV0IHNwcml0ZU5vZGUgPSBudWxsO1xuXG4gICAgICAgIC8vIOajgOafpeS4u+iKgueCuVxuICAgICAgICBjb25zdCBtYWluU3ByaXRlID0gc2xvdE5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIGlmIChtYWluU3ByaXRlICYmIG1haW5TcHJpdGUuc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgIGhhc1Zpc2libGVTcHJpdGUgPSB0cnVlO1xuICAgICAgICAgICAgc3ByaXRlTm9kZSA9IHNsb3ROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5qOA5p+l5a2Q6IqC54K577yIQmFja2dyb3VuZOOAgUljb27nrYnvvIlcbiAgICAgICAgaWYgKCFoYXNWaXNpYmxlU3ByaXRlKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHNsb3ROb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRTcHJpdGUgPSBjaGlsZC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRTcHJpdGUgJiYgY2hpbGRTcHJpdGUuc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzVmlzaWJsZVNwcml0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZU5vZGUgPSBjaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5aaC5p6c5rKh5pyJ5Y+v6KeB55qEU3ByaXRl77yM5Yib5bu65LiA5Liq566A5Y2V55qE6IOM5pmv77yI5LiN5YyF5ZCr6L655qGG77yM6L655qGG55SxX2FkZFNsb3RCb3JkZXLljZXni6zlpITnkIbvvIlcbiAgICAgICAgaWYgKCFoYXNWaXNpYmxlU3ByaXRlKSB7XG4gICAgICAgICAgICAvLyDmo4Dmn6XmmK/lkKblt7LmnIlCYWNrZ3JvdW5k6IqC54K5XG4gICAgICAgICAgICBsZXQgYmdOb2RlID0gc2xvdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpO1xuXG4gICAgICAgICAgICBpZiAoIWJnTm9kZSkge1xuICAgICAgICAgICAgICAgIC8vIOWIm+W7uuiDjOaZr+iKgueCuVxuICAgICAgICAgICAgICAgIGJnTm9kZSA9IG5ldyBjYy5Ob2RlKFwiQmFja2dyb3VuZFwiKTtcbiAgICAgICAgICAgICAgICBiZ05vZGUuc2V0Q29udGVudFNpemUoc2xvdE5vZGUuZ2V0Q29udGVudFNpemUoKS53aWR0aCwgc2xvdE5vZGUuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIGJnTm9kZS5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG5cbiAgICAgICAgICAgICAgICAvLyDkvb/nlKhHcmFwaGljc+e7hOS7tue7mOWItuiDjOaZr++8iOS4jee7mOWItui+ueahhu+8iVxuICAgICAgICAgICAgICAgIGNvbnN0IGdyYXBoaWNzID0gYmdOb2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG5cbiAgICAgICAgICAgICAgICAvLyDnu5jliLbog4zmma/vvIjljYrpgI/mmI7ngbDoibLvvIlcbiAgICAgICAgICAgICAgICBncmFwaGljcy5maWxsQ29sb3IgPSBuZXcgY2MuQ29sb3IoNjAsIDYwLCA2MCwgODApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsb3RTaXplID0gc2xvdE5vZGUuZ2V0Q29udGVudFNpemUoKS53aWR0aDtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5yZWN0KC1zbG90U2l6ZSAvIDIsIC1zbG90U2l6ZSAvIDIsIHNsb3RTaXplLCBzbG90U2l6ZSk7XG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbCgpO1xuXG4gICAgICAgICAgICAgICAgc2xvdE5vZGUuYWRkQ2hpbGQoYmdOb2RlKTtcbiAgICAgICAgICAgICAgICBiZ05vZGUuc2V0UG9zaXRpb24oMCwgMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDkuLrpgZPlhbfmoLzlrZDmt7vliqDkuoZHcmFwaGljc+iDjOaZr2ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDpgZPlhbfmoLzlrZDlt7LmnInlj6/op4Hog4zmma86ICR7c3ByaXRlTm9kZS5uYW1lfWApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOS4uumBk+WFt+agvOWtkOa3u+WKoOi+ueahhue6v+ahhu+8iOeUqOS6juWMuuWIhuavj+S4quagvOWtkO+8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBzbG90Tm9kZSAtIOmBk+WFt+agvOWtkOiKgueCuVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzbG90U2l6ZSAtIOagvOWtkOWkp+Wwj1xuICAgICAqL1xuICAgIF9hZGRTbG90Qm9yZGVyKHNsb3ROb2RlLCBzbG90U2l6ZSkge1xuICAgICAgICAvLyDmo4Dmn6XmmK/lkKblt7LmnIlCb3JkZXLoioLngrnvvIzlpoLmnpzmnInliJnlhYjnp7vpmaRcbiAgICAgICAgbGV0IGJvcmRlck5vZGUgPSBzbG90Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJvcmRlclwiKTtcbiAgICAgICAgaWYgKGJvcmRlck5vZGUpIHtcbiAgICAgICAgICAgIGJvcmRlck5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5Yib5bu66L655qGG6IqC54K5XG4gICAgICAgIGJvcmRlck5vZGUgPSBuZXcgY2MuTm9kZShcIkJvcmRlclwiKTtcbiAgICAgICAgYm9yZGVyTm9kZS5zZXRDb250ZW50U2l6ZShzbG90U2l6ZSwgc2xvdFNpemUpO1xuICAgICAgICBib3JkZXJOb2RlLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcblxuICAgICAgICAvLyDkvb/nlKhHcmFwaGljc+e7hOS7tue7mOWItui+ueahhue6v+ahhlxuICAgICAgICBjb25zdCBncmFwaGljcyA9IGJvcmRlck5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcblxuICAgICAgICAvLyDorr7nva7ovrnmoYbmoLflvI/vvIjnmb3oibLvvIw15YOP57Sg5a6977yM5pu05piO5pi+77yJXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9IDU7XG5cbiAgICAgICAgLy8g57uY5Yi255+p5b2i6L655qGG77yI5LuO5Lit5b+D54K55byA5aeL57uY5Yi277yJXG4gICAgICAgIC8vIOazqOaEj++8mueUseS6juiKgueCueaciee8qeaUvjAuOO+8jOWunumZheaYvuekuuWkp+Wwj+S8muWwj+S4gOS6m++8jOS9hui+ueahhuS8muato+ehruaYvuekulxuICAgICAgICBjb25zdCBoYWxmU2l6ZSA9IHNsb3RTaXplIC8gMjtcbiAgICAgICAgZ3JhcGhpY3MucmVjdCgtaGFsZlNpemUsIC1oYWxmU2l6ZSwgc2xvdFNpemUsIHNsb3RTaXplKTtcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XG5cbiAgICAgICAgLy8g56Gu5L+d6L655qGG6IqC54K55Zyo5pyA5LiK5bGC77yI5pyA5ZCO5re75Yqg77yM5pi+56S65Zyo5pyA5YmN6Z2i77yJXG4gICAgICAgIHNsb3ROb2RlLmFkZENoaWxkKGJvcmRlck5vZGUpO1xuICAgICAgICBib3JkZXJOb2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICBib3JkZXJOb2RlLnpJbmRleCA9IDk5OTsgLy8g5L2/55SoekluZGV45pu/5Luj5bey5bqf5byD55qEc2V0TG9jYWxaT3JkZXLvvIzorr7nva7ovoPpq5jnmoTlsYLnuqfvvIznoa7kv53mmL7npLrlnKjmnIDliY3pnaJcblxuICAgICAgICAvLyDnoa7kv53ovrnmoYboioLngrnlj6/op4FcbiAgICAgICAgYm9yZGVyTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBib3JkZXJOb2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMlumBk+WFt+agvOWtkFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBzbG90Tm9kZSAtIOmBk+WFt+agvOWtkOiKgueCuVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIOagvOWtkOe0ouW8lVxuICAgICAqL1xuICAgIF9pbml0SXRlbVNsb3Qoc2xvdE5vZGUsIGluZGV4KSB7XG4gICAgICAgIC8vIOafpeaJvuWbvuagh+iKgueCueWSjOaVsOmHj+agh+etvlxuICAgICAgICBjb25zdCBpY29uTm9kZSA9IHNsb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiSWNvblwiKSB8fCBzbG90Tm9kZTtcbiAgICAgICAgY29uc3QgY291bnRMYWJlbCA9IHNsb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiQ291bnRMYWJlbFwiKTtcblxuICAgICAgICAvLyDliJ3lp4vnirbmgIHvvJrnqbrmoLzlrZBcbiAgICAgICAgaWYgKGljb25Ob2RlKSB7XG4gICAgICAgICAgICBjb25zdCBzcHJpdGUgPSBpY29uTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIGlmIChzcHJpdGUpIHtcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBudWxsOyAvLyDmuIXnqbrlm77moIdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGljb25Ob2RlLm9wYWNpdHkgPSAxMDA7IC8vIOWNiumAj+aYjuaYvuekuuepuuagvOWtkFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvdW50TGFiZWwpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gY291bnRMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gXCJcIjsgLy8g5riF56m65pWw6YePXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDkv53lrZjmoLzlrZDntKLlvJVcbiAgICAgICAgc2xvdE5vZGUuX3Nsb3RJbmRleCA9IGluZGV4O1xuICAgICAgICBzbG90Tm9kZS5faXNFbXB0eSA9IHRydWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOabtOaWsOmBk+WFt+agj+aYvuekuu+8iOagueaNruW9k+WJjemAieS4reeahOinkuiJsu+8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgX3VwZGF0ZUludmVudG9yeSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmludmVudG9yeUNvbnRhaW5lciB8fCAhdGhpcy5jdXJyZW50VW5pdERhdGEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOS7juinkuiJsuaVsOaNruS4reiOt+WPlumBk+WFt+WIl+ihqO+8iOaUr+aMgeW8guatpe+8iVxuICAgICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IHRoaXMuX2dldENoYXJhY3Rlckl0ZW1zKHRoaXMuY3VycmVudFVuaXREYXRhLm5hbWUpO1xuXG4gICAgICAgIC8vIOabtOaWsOavj+S4quagvOWtkFxuICAgICAgICBjb25zdCBzbG90cyA9IHRoaXMuaW52ZW50b3J5Q29udGFpbmVyLmNoaWxkcmVuO1xuICAgICAgICBzbG90cy5mb3JFYWNoKChzbG90Tm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCA8IGl0ZW1zLmxlbmd0aCAmJiBpdGVtc1tpbmRleF0pIHtcbiAgICAgICAgICAgICAgICAvLyDmnInpgZPlhbfvvIzmmL7npLrpgZPlhbfkv6Hmga9cbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRJdGVtU2xvdChzbG90Tm9kZSwgaXRlbXNbaW5kZXhdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g56m65qC85a2QXG4gICAgICAgICAgICAgICAgdGhpcy5faW5pdEl0ZW1TbG90KHNsb3ROb2RlLCBpbmRleCk7XG5cbiAgICAgICAgICAgICAgICAvLyDmuIXnqbrmiYDmnInkuovku7bvvIjnqbrmoLzlrZDkuI3pnIDopoHmmL7npLp0b29sdGlw77yJXG4gICAgICAgICAgICAgICAgc2xvdE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04pO1xuICAgICAgICAgICAgICAgIHNsb3ROb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9VUCk7XG4gICAgICAgICAgICAgICAgc2xvdE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJUKTtcbiAgICAgICAgICAgICAgICBzbG90Tm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKTtcbiAgICAgICAgICAgICAgICBzbG90Tm9kZS5fdG91Y2hTdGFydFRpbWUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW6KOF5aSH5qCP77yIM+S4quagvOWtkO+8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2luaXRFcXVpcG1lbnRCYXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5lcXVpcG1lbnRDb250YWluZXIpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJbQ2hhcmFjdGVyVmlld1VJXSDmnKrorr7nva5lcXVpcG1lbnRDb250YWluZXLvvIzot7Pov4foo4XlpIfmoI/liJ3lp4vljJZcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmVmYWIgPSB0aGlzLmVxdWlwbWVudFNsb3RQcmVmYWIgfHwgdGhpcy5pdGVtU2xvdFByZWZhYjtcbiAgICAgICAgaWYgKCFwcmVmYWIpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJbQ2hhcmFjdGVyVmlld1VJXSDmnKrorr7nva5lcXVpcG1lbnRTbG90UHJlZmFi5LiU5pegaXRlbVNsb3RQcmVmYWLvvIzot7Pov4foo4XlpIfmoI/liJ3lp4vljJZcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzbG90Q291bnQgPSAzO1xuICAgICAgICBjb25zdCBzbG90U2l6ZSA9IHRoaXMuaXRlbVNsb3RTaXplIHx8IDgwO1xuICAgICAgICBjb25zdCBzcGFjaW5nID0gMTA7XG5cbiAgICAgICAgdGhpcy5lcXVpcG1lbnRDb250YWluZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5lcXVpcG1lbnRDb250YWluZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lcXVpcG1lbnRDb250YWluZXIub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgdGhpcy5lcXVpcG1lbnRDb250YWluZXIuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuXG4gICAgICAgIGNvbnN0IHRvdGFsSGVpZ2h0ID0gc2xvdENvdW50ICogc2xvdFNpemUgKyAoc2xvdENvdW50IC0gMSkgKiBzcGFjaW5nO1xuICAgICAgICB0aGlzLmVxdWlwbWVudENvbnRhaW5lci5zZXRDb250ZW50U2l6ZShzbG90U2l6ZSwgdG90YWxIZWlnaHQpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xvdENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNsb3ROb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIGlmICghc2xvdE5vZGUpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihgW0NoYXJhY3RlclZpZXdVSV0g5peg5rOV5a6e5L6L5YyW6KOF5aSH5qC85a2QIFByZWZhYiAo57Si5byVOiAke2l9KWApO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBJdGVtQ29uZmlnID0gcmVxdWlyZShcIkl0ZW1Db25maWdcIik7XG4gICAgICAgICAgICBjb25zdCBzbG90VHlwZXMgPSBJdGVtQ29uZmlnLkVRVUlQTUVOVF9TTE9UUyB8fCBbXCJ3ZWFwb25cIiwgXCJhcm1vclwiLCBcInNob2VzXCJdO1xuICAgICAgICAgICAgc2xvdE5vZGUubmFtZSA9IGBFcXVpcG1lbnRTbG90XyR7aX1gO1xuICAgICAgICAgICAgc2xvdE5vZGUuX3Nsb3RJbmRleCA9IGk7XG4gICAgICAgICAgICBzbG90Tm9kZS5fc2xvdFR5cGUgPSBzbG90VHlwZXNbaV0gfHwgXCJ3ZWFwb25cIjtcbiAgICAgICAgICAgIHNsb3ROb2RlLl9pc0VxdWlwbWVudCA9IHRydWU7XG4gICAgICAgICAgICBzbG90Tm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgc2xvdE5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIHNsb3ROb2RlLnNldENvbnRlbnRTaXplKHNsb3RTaXplLCBzbG90U2l6ZSk7XG4gICAgICAgICAgICBzbG90Tm9kZS5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG4gICAgICAgICAgICBzbG90Tm9kZS5zZXRTY2FsZSgwLjgsIDAuOCwgMC44KTtcblxuICAgICAgICAgICAgdGhpcy5lcXVpcG1lbnRDb250YWluZXIuYWRkQ2hpbGQoc2xvdE5vZGUpO1xuICAgICAgICAgICAgdGhpcy5faW5pdEl0ZW1TbG90KHNsb3ROb2RlLCBpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2xheW91dEVxdWlwbWVudEJhcigpO1xuICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOijheWkh+agj+WIneWni+WMluWujOaIkO+8jOWFsSAke3Nsb3RDb3VudH0g5Liq5qC85a2QYCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOijheWkh+agj+W4g+WxgO+8iDPkuKrmoLzlrZDnurXlkJHmjpLliJfvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9sYXlvdXRFcXVpcG1lbnRCYXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5lcXVpcG1lbnRDb250YWluZXIgfHwgdGhpcy5lcXVpcG1lbnRDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzbG90U2l6ZSA9IHRoaXMuaXRlbVNsb3RTaXplIHx8IDgwO1xuICAgICAgICBjb25zdCBzY2FsZSA9IDAuODtcbiAgICAgICAgY29uc3QgZGlzcGxheVNpemUgPSBzbG90U2l6ZSAqIHNjYWxlO1xuICAgICAgICBjb25zdCBzcGFjaW5nID0gMTA7XG4gICAgICAgIGNvbnN0IHNsb3RzID0gdGhpcy5lcXVpcG1lbnRDb250YWluZXIuY2hpbGRyZW47XG4gICAgICAgIGNvbnN0IHRvdGFsSGVpZ2h0ID0gc2xvdHMubGVuZ3RoICogZGlzcGxheVNpemUgKyAoc2xvdHMubGVuZ3RoIC0gMSkgKiBzcGFjaW5nO1xuXG4gICAgICAgIHRoaXMuZXF1aXBtZW50Q29udGFpbmVyLnNldENvbnRlbnRTaXplKGRpc3BsYXlTaXplLCB0b3RhbEhlaWdodCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0WSA9IHRvdGFsSGVpZ2h0IC8gMiAtIGRpc3BsYXlTaXplIC8gMjtcblxuICAgICAgICBzbG90cy5mb3JFYWNoKChzbG90Tm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBzdGFydFkgLSBpbmRleCAqIChkaXNwbGF5U2l6ZSArIHNwYWNpbmcpO1xuICAgICAgICAgICAgc2xvdE5vZGUuc2V0UG9zaXRpb24oMCwgeSk7XG4gICAgICAgICAgICBzbG90Tm9kZS5zZXRDb250ZW50U2l6ZShzbG90U2l6ZSwgc2xvdFNpemUpO1xuICAgICAgICAgICAgc2xvdE5vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgICAgICAgICAgc2xvdE5vZGUuc2V0U2NhbGUoMC44LCAwLjgsIDAuOCk7XG4gICAgICAgICAgICB0aGlzLl9lbnN1cmVTbG90VmlzaWJsZShzbG90Tm9kZSwgaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5fYWRkU2xvdEJvcmRlcihzbG90Tm9kZSwgc2xvdFNpemUpO1xuXG4gICAgICAgICAgICAvLyDorqnoo4XlpIfmoI/moLzlrZDph4znmoQgSWNvbiDoioLngrnlsLrlr7jpgILphY3moLzlrZDlpKflsI9cbiAgICAgICAgICAgIGNvbnN0IGljb25Ob2RlID0gc2xvdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJJY29uXCIpO1xuICAgICAgICAgICAgaWYgKGljb25Ob2RlKSB7XG4gICAgICAgICAgICAgICAgaWNvbk5vZGUuc2V0Q29udGVudFNpemUoc2xvdFNpemUsIHNsb3RTaXplKTtcbiAgICAgICAgICAgICAgICBpY29uTm9kZS5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3AgPSBpY29uTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgICAgICBpZiAoc3ApIHtcbiAgICAgICAgICAgICAgICAgICAgc3Auc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOabtOaWsOijheWkh+agj+aYvuekuu+8iOaMieW9k+WJjeinkuiJsuS7jiBFcXVpcG1lbnREYXRhTWFuYWdlciDliqDovb3vvIzmr4/kvY3oi7Hpm4Tni6znq4vvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFzeW5jIF91cGRhdGVFcXVpcG1lbnRCYXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5lcXVpcG1lbnRDb250YWluZXIgfHwgIXRoaXMuY3VycmVudFVuaXREYXRhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBFcXVpcG1lbnREYXRhTWFuYWdlciA9IHJlcXVpcmUoXCJFcXVpcG1lbnREYXRhTWFuYWdlclwiKTtcbiAgICAgICAgY29uc3QgSXRlbUNvbmZpZyA9IHJlcXVpcmUoXCJJdGVtQ29uZmlnXCIpO1xuICAgICAgICBjb25zdCB7IHNsb3RzOiBlcXVpcG1lbnRTbG90cyB9ID0gYXdhaXQgRXF1aXBtZW50RGF0YU1hbmFnZXIuZ2V0RXF1aXBtZW50KHRoaXMuY3VycmVudFVuaXREYXRhLm5hbWUpO1xuICAgICAgICBjb25zdCBzbG90Tm9kZXMgPSB0aGlzLmVxdWlwbWVudENvbnRhaW5lci5jaGlsZHJlbjtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsb3ROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc2xvdE5vZGUgPSBzbG90Tm9kZXNbaV07XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSBlcXVpcG1lbnRTbG90c1tpXSB8fCBudWxsO1xuICAgICAgICAgICAgaWYgKGl0ZW1JZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IEl0ZW1Db25maWcuZ2V0SXRlbUJ5SWQoaXRlbUlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtRGF0YSA9IGNvbmZpZyA/IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGNvbmZpZy5pZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogY29uZmlnLmRpc3BsYXlOYW1lIHx8IGNvbmZpZy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBjb25maWcuaWNvbixcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZzogY29uZmlnXG4gICAgICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1EYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NldEVxdWlwbWVudFNsb3Qoc2xvdE5vZGUsIGl0ZW1EYXRhLCBpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbml0SXRlbVNsb3Qoc2xvdE5vZGUsIGkpO1xuICAgICAgICAgICAgICAgICAgICBzbG90Tm9kZS5faXNFbXB0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNsb3ROb2RlLl9pdGVtRGF0YSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0SXRlbVNsb3Qoc2xvdE5vZGUsIGkpO1xuICAgICAgICAgICAgICAgIHNsb3ROb2RlLl9pc0VtcHR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzbG90Tm9kZS5faXRlbURhdGEgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiuvue9ruijheWkh+agvOWtkOWGheWuue+8iOW4puaLluaLveWNuOS4i++8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3NldEVxdWlwbWVudFNsb3Qoc2xvdE5vZGUsIGl0ZW1EYXRhLCBzbG90SW5kZXgpIHtcbiAgICAgICAgY29uc3QgaWNvbk5vZGUgPSBzbG90Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIkljb25cIikgfHwgc2xvdE5vZGU7XG4gICAgICAgIGNvbnN0IGNvdW50TGFiZWwgPSBzbG90Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNvdW50TGFiZWxcIik7XG5cbiAgICAgICAgaWYgKGljb25Ob2RlICYmIGl0ZW1EYXRhLmljb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZSA9IGljb25Ob2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgaWYgKHNwcml0ZSkge1xuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IGl0ZW1EYXRhLmljb247XG4gICAgICAgICAgICAgICAgLy8g56Gu5L+d5Zu+5qCH5oyJ5qC85a2Q5aSn5bCP57yp5pS+5pi+56S6XG4gICAgICAgICAgICAgICAgc3ByaXRlLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOWwhiBJY29uIOiKgueCueacrOi6q+e8qeaUvuWIsOS4juagvOWtkOS4gOiHtFxuICAgICAgICAgICAgY29uc3Qgc2xvdFNpemUgPSB0aGlzLml0ZW1TbG90U2l6ZSB8fCBzbG90Tm9kZS53aWR0aCB8fCA4MDtcbiAgICAgICAgICAgIGljb25Ob2RlLnNldENvbnRlbnRTaXplKHNsb3RTaXplLCBzbG90U2l6ZSk7XG4gICAgICAgICAgICBpY29uTm9kZS5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG4gICAgICAgICAgICBpY29uTm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICB9IGVsc2UgaWYgKGljb25Ob2RlKSB7XG4gICAgICAgICAgICBjb25zdCBzcHJpdGUgPSBpY29uTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIGlmIChzcHJpdGUpIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgICAgICAgICBpY29uTm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb3VudExhYmVsKSB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGNvdW50TGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGlmIChsYWJlbCkgbGFiZWwuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNsb3ROb2RlLl9pdGVtRGF0YSA9IGl0ZW1EYXRhO1xuICAgICAgICBzbG90Tm9kZS5faXNFbXB0eSA9IGZhbHNlO1xuICAgICAgICBzbG90Tm9kZS5fc2xvdEluZGV4ID0gc2xvdEluZGV4O1xuICAgICAgICBzbG90Tm9kZS5fc2xvdFR5cGUgPSBzbG90Tm9kZS5fc2xvdFR5cGUgfHwgKHJlcXVpcmUoXCJJdGVtQ29uZmlnXCIpLkVRVUlQTUVOVF9TTE9UUyB8fCBbXCJ3ZWFwb25cIiwgXCJhcm1vclwiLCBcInNob2VzXCJdKVtzbG90SW5kZXhdO1xuXG4gICAgICAgIHNsb3ROb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCk7XG4gICAgICAgIHNsb3ROb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuX2RyYWdnaW5nRnJvbUVxdWlwbWVudCA9IHNsb3ROb2RlO1xuICAgICAgICAgICAgdGhpcy5fZHJhZ2dpbmdJdGVtID0gaXRlbURhdGE7XG4gICAgICAgICAgICB0aGlzLl9kcmFnSWNvblNpemUgPSB0aGlzLl9nZXRTbG90SWNvbkRpc3BsYXlTaXplKHNsb3ROb2RlKTtcbiAgICAgICAgICAgIC8vIOiusOW9leWOn+Wni+Wbvuagh+WcqCBDYW52YXMg5LiL55qE5L2N572u77yI55So5LqO5LuO5Y6f5qC85a2Q4oCc5ou95Ye65p2l4oCd77yJXG4gICAgICAgICAgICBjb25zdCBpY29uTm9kZSA9IHNsb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiSWNvblwiKSB8fCBzbG90Tm9kZTtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XG4gICAgICAgICAgICBpZiAoY2FudmFzICYmIGljb25Ob2RlICYmIGljb25Ob2RlLmlzVmFsaWQgJiYgaWNvbk5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSICYmIGNhbnZhcy5jb252ZXJ0VG9Ob2RlU3BhY2VBUikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdvcmxkUG9zID0gaWNvbk5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnU3RhcnRDYW52YXNQb3MgPSBjYW52YXMuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnU3RhcnRDYW52YXNQb3MgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6I635Y+W6Kem5pG454K55LiL55qE5qC85a2Q6IqC54K577yI6KOF5aSH5qCP5oiW6YGT5YW35qCP77yJXG4gICAgICogQHBhcmFtIHtjYy5FdmVudC5FdmVudFRvdWNofSBldmVudFxuICAgICAqIEByZXR1cm5zIHt7IG5vZGU6IGNjLk5vZGUsIGlzRXF1aXBtZW50OiBib29sZWFuLCBzbG90SW5kZXg6IG51bWJlciwgc2xvdFR5cGU/OiBzdHJpbmcgfXxudWxsfVxuICAgICAqL1xuICAgIF9nZXROb2RlVW5kZXJUb3VjaChldmVudCkge1xuICAgICAgICBpZiAoIWV2ZW50IHx8ICFldmVudC50b3VjaCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgLy8g6I635Y+WVUnlnZDmoIfvvIjnm7jlr7nkuo5DYW52YXPvvIlcbiAgICAgICAgbGV0IHVpUG9zID0gbnVsbDtcbiAgICAgICAgaWYgKGV2ZW50LmdldFVJTG9jYXRpb24pIHtcbiAgICAgICAgICAgIHVpUG9zID0gZXZlbnQuZ2V0VUlMb2NhdGlvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRvdWNoICYmIGV2ZW50LnRvdWNoLmdldFVJTG9jYXRpb24pIHtcbiAgICAgICAgICAgIHVpUG9zID0gZXZlbnQudG91Y2guZ2V0VUlMb2NhdGlvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g6ZmN57qn5pa55qGI77ya5L2/55So5bGP5bmV5Z2Q5qCHXG4gICAgICAgICAgICBjb25zdCBzY3JlZW5Qb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICAgICAgICAgIGlmIChjYW52YXMgJiYgY2FudmFzLmdldENvbXBvbmVudChjYy5DYW1lcmEpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gY2FudmFzLmdldENvbXBvbmVudChjYy5DYW1lcmEpO1xuICAgICAgICAgICAgICAgIHVpUG9zID0gY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChzY3JlZW5Qb3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1aVBvcyA9IHNjcmVlblBvcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdWlQb3MpIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCB3b3JsZFBvcyA9IGNjLnYyKHVpUG9zLngsIHVpUG9zLnkpO1xuXG4gICAgICAgIGlmICh0aGlzLmVxdWlwbWVudENvbnRhaW5lciAmJiB0aGlzLmVxdWlwbWVudENvbnRhaW5lci5jaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3Qgc2xvdHMgPSB0aGlzLmVxdWlwbWVudENvbnRhaW5lci5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90ID0gc2xvdHNbaV07XG4gICAgICAgICAgICAgICAgaWYgKCFzbG90IHx8ICFzbG90LnBhcmVudCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9jYWxQb3MgPSBzbG90LnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBzbG90LmdldEJvdW5kaW5nQm94KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWN0ICYmIHJlY3QuY29udGFpbnMgJiYgcmVjdC5jb250YWlucyhsb2NhbFBvcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5vZGU6IHNsb3QsIGlzRXF1aXBtZW50OiB0cnVlLCBzbG90SW5kZXg6IGksIHNsb3RUeXBlOiBzbG90Ll9zbG90VHlwZSB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDlv73nlaXovazmjaLplJnor69cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaW52ZW50b3J5Q29udGFpbmVyICYmIHRoaXMuaW52ZW50b3J5Q29udGFpbmVyLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBzbG90cyA9IHRoaXMuaW52ZW50b3J5Q29udGFpbmVyLmNoaWxkcmVuO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsb3QgPSBzbG90c1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoIXNsb3QgfHwgIXNsb3QucGFyZW50KSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFBvcyA9IHNsb3QucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IHNsb3QuZ2V0Qm91bmRpbmdCb3goKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlY3QgJiYgcmVjdC5jb250YWlucyAmJiByZWN0LmNvbnRhaW5zKGxvY2FsUG9zKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbm9kZTogc2xvdCwgaXNFcXVpcG1lbnQ6IGZhbHNlLCBzbG90SW5kZXg6IGkgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5b+955Wl6L2s5o2i6ZSZ6K+vXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICBfb25HbG9iYWxUb3VjaE1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9kcmFnZ2luZ0l0ZW0gJiYgIXRoaXMuX2RyYWdnaW5nRnJvbUVxdWlwbWVudCkgcmV0dXJuO1xuICAgICAgICBpZiAoIWV2ZW50IHx8ICFldmVudC50b3VjaCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XG4gICAgICAgIGlmICghY2FudmFzKSByZXR1cm47XG5cbiAgICAgICAgLy8g6I635Y+WIFVJIOWdkOagh++8jOWGjee7n+S4gOi9rOaNouWIsCBDYW52YXMg5pys5Zyw5Z2Q5qCH57O7XG4gICAgICAgIGxldCB1aVBvcyA9IG51bGw7XG4gICAgICAgIGlmIChldmVudC5nZXRVSUxvY2F0aW9uKSB7XG4gICAgICAgICAgICB1aVBvcyA9IGV2ZW50LmdldFVJTG9jYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50b3VjaCAmJiBldmVudC50b3VjaC5nZXRVSUxvY2F0aW9uKSB7XG4gICAgICAgICAgICB1aVBvcyA9IGV2ZW50LnRvdWNoLmdldFVJTG9jYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHNjcmVlblBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAoY2FudmFzLmdldENvbXBvbmVudChjYy5DYW1lcmEpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gY2FudmFzLmdldENvbXBvbmVudChjYy5DYW1lcmEpO1xuICAgICAgICAgICAgICAgIHVpUG9zID0gY2FtZXJhLmdldFNjcmVlblRvV29ybGRQb2ludChzY3JlZW5Qb3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1aVBvcyA9IHNjcmVlblBvcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXVpUG9zKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY2FudmFzUG9zID0gY2FudmFzLmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYyKHVpUG9zLngsIHVpUG9zLnkpKTtcblxuICAgICAgICAvLyDlj6rmnInnp7vliqjotoXov4fkuIDlrprot53nprvmiY3lvIDlp4vliJvlu7rmi5bmi73lm77moIfvvIjpgb/lhY3ovbvop6blsLHigJzlhpLlh7rigJ3mi5bmi73oioLngrnvvIlcbiAgICAgICAgY29uc3QgRFJBR19TVEFSVF9ESVNUQU5DRSA9IDg7XG4gICAgICAgIGlmICghdGhpcy5fZHJhZ1Nwcml0ZSAmJiB0aGlzLl9kcmFnU3RhcnRDYW52YXNQb3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGR4ID0gY2FudmFzUG9zLnggLSB0aGlzLl9kcmFnU3RhcnRDYW52YXNQb3MueDtcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gY2FudmFzUG9zLnkgLSB0aGlzLl9kcmFnU3RhcnRDYW52YXNQb3MueTtcbiAgICAgICAgICAgIGlmICgoZHggKiBkeCArIGR5ICogZHkpIDwgRFJBR19TVEFSVF9ESVNUQU5DRSAqIERSQUdfU1RBUlRfRElTVEFOQ0UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2RyYWdTcHJpdGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RyYWdTcHJpdGUgPSBuZXcgY2MuTm9kZShcIkRyYWdJY29uXCIpO1xuICAgICAgICAgICAgY29uc3Qgc3AgPSB0aGlzLl9kcmFnU3ByaXRlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX2RyYWdnaW5nSXRlbSB8fCAodGhpcy5fZHJhZ2dpbmdGcm9tRXF1aXBtZW50ICYmIHRoaXMuX2RyYWdnaW5nRnJvbUVxdWlwbWVudC5faXRlbURhdGEpO1xuICAgICAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS5pY29uKSBzcC5zcHJpdGVGcmFtZSA9IGl0ZW0uaWNvbjtcbiAgICAgICAgICAgIC8vIOiuqeaLluaLveWbvuagh+WwuuWvuOS4juagvOWtkOWGhSBJY29uIOeahOaYvuekuuWwuuWvuOS4gOiHtO+8iOWMheWQq+eItuiKgueCuee8qeaUvu+8iVxuICAgICAgICAgICAgY29uc3Qgc291cmNlU2xvdCA9IHRoaXMuX2RyYWdnaW5nU2xvdCB8fCB0aGlzLl9kcmFnZ2luZ0Zyb21FcXVpcG1lbnQ7XG4gICAgICAgICAgICBjb25zdCBpY29uU2l6ZSA9IHRoaXMuX2RyYWdJY29uU2l6ZSB8fCB0aGlzLl9nZXRTbG90SWNvbkRpc3BsYXlTaXplKHNvdXJjZVNsb3QpO1xuICAgICAgICAgICAgdGhpcy5fZHJhZ1Nwcml0ZS5zZXRDb250ZW50U2l6ZShpY29uU2l6ZS53aWR0aCwgaWNvblNpemUuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuX2RyYWdTcHJpdGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgICAgICAgICAgdGhpcy5fZHJhZ1Nwcml0ZS5zZXRTY2FsZSgxLCAxKTtcbiAgICAgICAgICAgIGlmIChzcCkge1xuICAgICAgICAgICAgICAgIHNwLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbnZhcy5hZGRDaGlsZCh0aGlzLl9kcmFnU3ByaXRlKTtcbiAgICAgICAgICAgIC8vIOS7juWOn+Wni+Wbvuagh+S9jee9ruW8gOWni++8jOiAjOS4jeaYr+inpuaRuOS9jee9rlxuICAgICAgICAgICAgY29uc3Qgc3RhcnRQb3MgPSB0aGlzLl9kcmFnU3RhcnRDYW52YXNQb3MgfHwgY2FudmFzUG9zO1xuICAgICAgICAgICAgdGhpcy5fZHJhZ1Nwcml0ZS5zZXRQb3NpdGlvbihzdGFydFBvcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDot5/pmo/miYvmjIfnp7vliqjvvIhDYW52YXMg5Z2Q5qCH57O777yJXG4gICAgICAgICAgICB0aGlzLl9kcmFnU3ByaXRlLnNldFBvc2l0aW9uKGNhbnZhc1Bvcyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYXN5bmMgX29uR2xvYmFsVG91Y2hFbmQoZXZlbnQpIHtcbiAgICAgICAgaWYgKCFldmVudCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHdhc0RyYWdnaW5nID0gISF0aGlzLl9kcmFnU3ByaXRlO1xuICAgICAgICBpZiAodGhpcy5fZHJhZ1Nwcml0ZSkge1xuICAgICAgICAgICAgdGhpcy5fZHJhZ1Nwcml0ZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLl9kcmFnU3ByaXRlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhZERyYWdTdGF0ZSA9IHRoaXMuX2RyYWdnaW5nSXRlbSB8fCB0aGlzLl9kcmFnZ2luZ0Zyb21FcXVpcG1lbnQ7XG4gICAgICAgIGlmICghaGFkRHJhZ1N0YXRlKSByZXR1cm47IC8vIOayoeacieaLluaLveeKtuaAge+8jOS4jeWkhOeQhlxuXG4gICAgICAgIC8vIOmYu+atouS6i+S7tuWGkuazoe+8jOmBv+WFjeinpuWPkeeCueWHu+WFs+mXremdouadv1xuICAgICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLl9nZXROb2RlVW5kZXJUb3VjaChldmVudCk7XG4gICAgICAgIGNvbnN0IGNoYXJhY3Rlck5hbWUgPSB0aGlzLmN1cnJlbnRVbml0RGF0YSA/IHRoaXMuY3VycmVudFVuaXREYXRhLm5hbWUgOiBudWxsO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZHJhZ2dpbmdGcm9tRXF1aXBtZW50ICYmIGNoYXJhY3Rlck5hbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90Tm9kZSA9IHRoaXMuX2RyYWdnaW5nRnJvbUVxdWlwbWVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90SW5kZXggPSBzbG90Tm9kZS5fc2xvdEluZGV4O1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1EYXRhID0gc2xvdE5vZGUuX2l0ZW1EYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdnaW5nRnJvbUVxdWlwbWVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhZ2dpbmdJdGVtID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW1EYXRhIHx8ICF3YXNEcmFnZ2luZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbGVhckRyYWdTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IEVxdWlwbWVudERhdGFNYW5hZ2VyID0gcmVxdWlyZShcIkVxdWlwbWVudERhdGFNYW5hZ2VyXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IEl0ZW1EYXRhTWFuYWdlciA9IHJlcXVpcmUoXCJJdGVtRGF0YU1hbmFnZXJcIik7XG4gICAgICAgICAgICAgICAgLy8g6KOF5aSH5Y2g55So6IOM5YyF5pWw6YeP77ya5Y245LiL5pe26ZyA6KaB5oqK6KOF5aSH6L+Y5Zue6IOM5YyFXG4gICAgICAgICAgICAgICAgYXdhaXQgRXF1aXBtZW50RGF0YU1hbmFnZXIudW5lcXVpcFNsb3QoY2hhcmFjdGVyTmFtZSwgc2xvdEluZGV4KTtcbiAgICAgICAgICAgICAgICBhd2FpdCBJdGVtRGF0YU1hbmFnZXIuYWRkSXRlbShpdGVtRGF0YS5pZCwgMSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fdXBkYXRlRXF1aXBtZW50QmFyKCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fdXBkYXRlSW52ZW50b3J5KCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fYXBwbHlFcXVpcG1lbnRCb251c2VzVG9EaXNwbGF5KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5fZHJhZ2dpbmdTbG90ICYmIHRoaXMuX2RyYWdnaW5nSXRlbSAmJiBjaGFyYWN0ZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX2RyYWdnaW5nSXRlbTtcbiAgICAgICAgICAgICAgICBjb25zdCBJdGVtQ29uZmlnID0gcmVxdWlyZShcIkl0ZW1Db25maWdcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgY2ZnID0gaXRlbS5jb25maWcgfHwgSXRlbUNvbmZpZy5nZXRJdGVtQnlJZChpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtVG9FcXVpcCA9IHRoaXMuX2RyYWdnaW5nSXRlbTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnZ2luZ1Nsb3QgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdnaW5nSXRlbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKCFjZmcgfHwgY2ZnLnR5cGUgIT09IFwiZXF1aXBtZW50XCIgfHwgIWNmZy5lcXVpcG1lbnRTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFyRHJhZ1N0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHdhc0RyYWdnaW5nICYmIHRhcmdldCAmJiB0YXJnZXQuaXNFcXVpcG1lbnQgJiYgdGFyZ2V0LnNsb3RUeXBlID09PSBjZmcuZXF1aXBtZW50U2xvdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBFcXVpcG1lbnREYXRhTWFuYWdlciA9IHJlcXVpcmUoXCJFcXVpcG1lbnREYXRhTWFuYWdlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgSXRlbURhdGFNYW5hZ2VyID0gcmVxdWlyZShcIkl0ZW1EYXRhTWFuYWdlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2xvdEluZGV4ID0gdGFyZ2V0LnNsb3RJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGF3YWl0IEVxdWlwbWVudERhdGFNYW5hZ2VyLmdldEVxdWlwbWVudChjaGFyYWN0ZXJOYW1lKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpznm67moIfmp73kvY3mnKzmnaXlsLHmmK/ov5nku7boo4XlpIfvvIznm7TmjqXlv73nlaXov5nmrKHmi5bmi73vvIzkuI3mtojogJfog4zljIXpgZPlhbdcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudC5zbG90cyAmJiBjdXJyZW50LnNsb3RzW3Nsb3RJbmRleF0gPT09IGl0ZW1Ub0VxdWlwLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOanveS9jSAke3Nsb3RJbmRleH0g5bey57uP5piv6KOF5aSHICR7aXRlbVRvRXF1aXAuaWR977yM5ouW5ou95b+955WlYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbGVhckRyYWdTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g4pyFIOaWsOWinu+8muWQjOS4gOinkuiJsuS4jeiDveijheWkh+S4pOS7tuWujOWFqOebuOWQjOeahOijheWkh++8iOWQjOS4gOS4qiBpdGVtSWTvvIlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudC5zbG90cyAmJiBjdXJyZW50LnNsb3RzLnNvbWUoKGlkLCBpZHgpID0+IGlkeCAhPT0gc2xvdEluZGV4ICYmIGlkID09PSBpdGVtVG9FcXVpcC5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLndhcm4oYFtDaGFyYWN0ZXJWaWV3VUldIOinkuiJsiAke2NoYXJhY3Rlck5hbWV9IOW3sue7j+ijheWkh+S6huebuOWQjOeahOijheWkhygke2l0ZW1Ub0VxdWlwLmlkfSnvvIzmnKzmrKHmi5bmi73kuI3nlJ/mlYhgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFyRHJhZ1N0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzor6Xmp73kvY3ljp/mnaXmnInoo4XlpIfvvIzlhYjmiorml6foo4XlpIfov5jlm57og4zljIVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldkl0ZW1JZCA9IGN1cnJlbnQuc2xvdHNbc2xvdEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZJdGVtSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IEl0ZW1EYXRhTWFuYWdlci5hZGRJdGVtKHByZXZJdGVtSWQsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g5qOA5p+l6IOM5YyF6YeM5piv5ZCm6L+Y5pyJ5Y+v5Lul6KOF5aSH55qE5pWw6YePXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgSXRlbURhdGFNYW5hZ2VyLmdldEl0ZW1Db3VudChpdGVtVG9FcXVpcC5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbGVhckRyYWdTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g5LuO6IOM5YyF5omj6Zmk5LiA5Lu277yM5YaN5YaZ5YWl6KOF5aSH5qCPXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IEl0ZW1EYXRhTWFuYWdlci5yZW1vdmVJdGVtKGl0ZW1Ub0VxdWlwLmlkLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2sgPSBhd2FpdCBFcXVpcG1lbnREYXRhTWFuYWdlci5zZXRFcXVpcG1lbnRTbG90KGNoYXJhY3Rlck5hbWUsIHNsb3RJbmRleCwgaXRlbVRvRXF1aXAuaWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDnkIborrrkuIrkuI3kvJrov5vmnaXvvIjliY3pnaLlt7LlgZrph43lpI3mo4Dmn6XvvInvvIzkuLrkuoblronlhajvvIzmiormiaPmjonnmoTpgZPlhbfooaXlm57ljrtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IEl0ZW1EYXRhTWFuYWdlci5hZGRJdGVtKGl0ZW1Ub0VxdWlwLmlkLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFyRHJhZ1N0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl91cGRhdGVFcXVpcG1lbnRCYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fdXBkYXRlSW52ZW50b3J5KCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX2FwcGx5RXF1aXBtZW50Qm9udXNlc1RvRGlzcGxheSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwiW0NoYXJhY3RlclZpZXdVSV0g5ouW5ou95aSE55CG6ZSZ6K+vOlwiLCBlLm1lc3NhZ2UpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy5fY2xlYXJEcmFnU3RhdGUoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmuIXpmaTmi5bmi73nirbmgIFcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9jbGVhckRyYWdTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmdTbG90ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmdJdGVtID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmdGcm9tRXF1aXBtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZHJhZ0ljb25TaXplID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZHJhZ1N0YXJ0Q2FudmFzUG9zID0gbnVsbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5p+Q5Liq5qC85a2Q5LitIEljb24g6IqC54K555qE4oCc5a6e6ZmF5pi+56S65bC65a+44oCd77yI6ICD6JmR54i26IqC54K557yp5pS+77yJ44CCXG4gICAgICog55So5LqO5ouW5ou95pe26K6pIERyYWdJY29uIOS4juagvOWtkOWGheWbvuagh+S/neaMgeWQjOagt+Wkp+Wwj+OAglxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBzbG90Tm9kZVxuICAgICAqIEByZXR1cm5zIHt7d2lkdGg6bnVtYmVyLGhlaWdodDpudW1iZXJ9fVxuICAgICAqL1xuICAgIF9nZXRTbG90SWNvbkRpc3BsYXlTaXplKHNsb3ROb2RlKSB7XG4gICAgICAgIGNvbnN0IHNsb3RTaXplID0gdGhpcy5pdGVtU2xvdFNpemUgfHwgODA7XG4gICAgICAgIGNvbnN0IGZhbGxiYWNrID0geyB3aWR0aDogc2xvdFNpemUgKiAwLjgsIGhlaWdodDogc2xvdFNpemUgKiAwLjggfTtcbiAgICAgICAgaWYgKCFzbG90Tm9kZSB8fCAhc2xvdE5vZGUuaXNWYWxpZCkgcmV0dXJuIGZhbGxiYWNrO1xuXG4gICAgICAgIGNvbnN0IGljb25Ob2RlID0gc2xvdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJJY29uXCIpIHx8IHNsb3ROb2RlO1xuICAgICAgICBpZiAoIWljb25Ob2RlIHx8ICFpY29uTm9kZS5pc1ZhbGlkKSByZXR1cm4gZmFsbGJhY2s7XG5cbiAgICAgICAgLy8g5LyY5YWI55So5LiW55WM5YyF5Zu055uS5ou/5Yiw4oCc5pyA57uI5pi+56S65bC65a+44oCd77yI5YyF5ZCr57yp5pS+77yJXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoaWNvbk5vZGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGljb25Ob2RlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpO1xuICAgICAgICAgICAgICAgIGlmIChyZWN0ICYmIHJlY3Qud2lkdGggPiAwICYmIHJlY3QuaGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB3aWR0aDogcmVjdC53aWR0aCwgaGVpZ2h0OiByZWN0LmhlaWdodCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8g5b+955WlXG4gICAgICAgIH1cblxuICAgICAgICAvLyDlhZzlupXvvJrnlKjlhoXlrrnlsLrlr7ggKiBzbG90Tm9kZSDnvKnmlL5cbiAgICAgICAgY29uc3QgcmF3ID0gaWNvbk5vZGUuZ2V0Q29udGVudFNpemUgPyBpY29uTm9kZS5nZXRDb250ZW50U2l6ZSgpIDogbnVsbDtcbiAgICAgICAgY29uc3QgdyA9IHJhdyAmJiByYXcud2lkdGggPyByYXcud2lkdGggOiBzbG90U2l6ZTtcbiAgICAgICAgY29uc3QgaCA9IHJhdyAmJiByYXcuaGVpZ2h0ID8gcmF3LmhlaWdodCA6IHNsb3RTaXplO1xuICAgICAgICBjb25zdCBzeCA9IHR5cGVvZiBzbG90Tm9kZS5zY2FsZVggPT09IFwibnVtYmVyXCIgPyBzbG90Tm9kZS5zY2FsZVggOiAxO1xuICAgICAgICBjb25zdCBzeSA9IHR5cGVvZiBzbG90Tm9kZS5zY2FsZVkgPT09IFwibnVtYmVyXCIgPyBzbG90Tm9kZS5zY2FsZVkgOiAxO1xuICAgICAgICByZXR1cm4geyB3aWR0aDogdyAqIHN4LCBoZWlnaHQ6IGggKiBzeSB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDlsIblvZPliY3op5LoibLnmoToo4XlpIfliqDmiJDlupTnlKjliLDlvZPliY3mmL7npLrnmoTkurrnianljp/lnovkuIpcbiAgICAgKi9cbiAgICBhc3luYyBfYXBwbHlFcXVpcG1lbnRCb251c2VzVG9EaXNwbGF5KCkge1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIgfHwgIXRoaXMuY3VycmVudFVuaXREYXRhKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHN0YXRzID0gdGhpcy5jdXJyZW50RGlzcGxheVByZWZhYi5nZXRDb21wb25lbnQoXCJTdGF0c0NvbXBvbmVudFwiKTtcbiAgICAgICAgaWYgKCFzdGF0cyB8fCAhc3RhdHMuYXBwbHlFcXVpcG1lbnRCb251c2VzKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGJvbnVzZXMgPSBhd2FpdCB0aGlzLl9nZXRFcXVpcG1lbnRCb251c2VzKHRoaXMuY3VycmVudFVuaXREYXRhLm5hbWUpO1xuICAgICAgICBzdGF0cy5hcHBseUVxdWlwbWVudEJvbnVzZXMoYm9udXNlcyk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRzUGFuZWwgJiYgdGhpcy5zdGF0c1BhbmVsLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2hvd1N0YXRzUGFuZWwodGhpcy5jdXJyZW50VW5pdERhdGEpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiuvue9rumBk+WFt+agvOWtkOWGheWuuVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBzbG90Tm9kZSAtIOmBk+WFt+agvOWtkOiKgueCuVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIC0g6YGT5YW35pWw5o2uIHsgaWQsIG5hbWUsIGljb24sIGNvdW50IH1cbiAgICAgKi9cbiAgICBfc2V0SXRlbVNsb3Qoc2xvdE5vZGUsIGl0ZW0pIHtcbiAgICAgICAgaWYgKCFpdGVtIHx8ICFpdGVtLmNvdW50IHx8IGl0ZW0uY291bnQgPD0gMCkge1xuICAgICAgICAgICAgLy8g6YGT5YW35LiN5a2Y5Zyo5oiW5pWw6YeP5Li6MO+8jOa4heepuuagvOWtkFxuICAgICAgICAgICAgdGhpcy5faW5pdEl0ZW1TbG90KHNsb3ROb2RlLCBzbG90Tm9kZS5fc2xvdEluZGV4KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOafpeaJvuWbvuagh+iKgueCueWSjOaVsOmHj+agh+etvlxuICAgICAgICBjb25zdCBpY29uTm9kZSA9IHNsb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiSWNvblwiKSB8fCBzbG90Tm9kZTtcbiAgICAgICAgY29uc3QgY291bnRMYWJlbCA9IHNsb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiQ291bnRMYWJlbFwiKTtcblxuICAgICAgICAvLyDorr7nva7lm77moIdcbiAgICAgICAgaWYgKGljb25Ob2RlICYmIGl0ZW0uaWNvbikge1xuICAgICAgICAgICAgY29uc3Qgc3ByaXRlID0gaWNvbk5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpZiAoc3ByaXRlKSB7XG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gaXRlbS5pY29uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWNvbk5vZGUub3BhY2l0eSA9IDI1NTsgLy8g5a6M5YWo5LiN6YCP5piOXG4gICAgICAgIH1cblxuICAgICAgICAvLyDorr7nva7mlbDph49cbiAgICAgICAgaWYgKGNvdW50TGFiZWwpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gY291bnRMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY291bnQgJiYgaXRlbS5jb3VudCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gaXRlbS5jb3VudC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5L+d5a2Y6YGT5YW35pWw5o2uXG4gICAgICAgIHNsb3ROb2RlLl9pdGVtRGF0YSA9IGl0ZW07XG4gICAgICAgIHNsb3ROb2RlLl9pc0VtcHR5ID0gZmFsc2U7XG5cbiAgICAgICAgLy8g6K6w5b2V6Kem5pG45byA5aeL5pe26Ze077yI55So5LqO5Yy65YiG54K55Ye75ZKM6ZW/5oyJ77yJ77yb6KOF5aSH57G76YGT5YW36K6w5b2V5ouW5ou96LW354K5XG4gICAgICAgIHNsb3ROb2RlLl90b3VjaFN0YXJ0VGltZSA9IG51bGw7XG4gICAgICAgIHNsb3ROb2RlLl90b3VjaFN0YXJ0UG9zID0gbnVsbDtcbiAgICAgICAgc2xvdE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJUKTtcbiAgICAgICAgc2xvdE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgc2xvdE5vZGUuX3RvdWNoU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHNsb3ROb2RlLl90b3VjaFN0YXJ0UG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGNmZyA9IGl0ZW0uY29uZmlnIHx8IChpdGVtLmlkICYmIHJlcXVpcmUoXCJJdGVtQ29uZmlnXCIpLmdldEl0ZW1CeUlkKGl0ZW0uaWQpKTtcbiAgICAgICAgICAgIGlmIChjZmcgJiYgY2ZnLnR5cGUgPT09IFwiZXF1aXBtZW50XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnZ2luZ1Nsb3QgPSBzbG90Tm9kZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnZ2luZ0l0ZW0gPSBpdGVtO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdJY29uU2l6ZSA9IHRoaXMuX2dldFNsb3RJY29uRGlzcGxheVNpemUoc2xvdE5vZGUpO1xuICAgICAgICAgICAgICAgIC8vIOiusOW9leWOn+Wni+Wbvuagh+WcqCBDYW52YXMg5LiL55qE5L2N572u77yI55So5LqO5LuO5Y6f5qC85a2Q4oCc5ou95Ye65p2l4oCd77yJXG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbk5vZGUgPSBzbG90Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIkljb25cIikgfHwgc2xvdE5vZGU7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FudmFzICYmIGljb25Ob2RlICYmIGljb25Ob2RlLmlzVmFsaWQgJiYgaWNvbk5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSICYmIGNhbnZhcy5jb252ZXJ0VG9Ob2RlU3BhY2VBUikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB3b3JsZFBvcyA9IGljb25Ob2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdTdGFydENhbnZhc1BvcyA9IGNhbnZhcy5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhZ1N0YXJ0Q2FudmFzUG9zID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIC8vIOe7keWumuinpuaRuOe7k+adn+S6i+S7tu+8iOWkhOeQhuW3pumUrueCueWHu+WSjOmVv+aMie+8m+iLpeato+WcqOaLluaLveWImeS4jeWGjeinpuWPkeeCueWHu++8iVxuICAgICAgICBzbG90Tm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKTtcbiAgICAgICAgc2xvdE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9kcmFnU3ByaXRlKSB7XG4gICAgICAgICAgICAgICAgc2xvdE5vZGUuX3RvdWNoU3RhcnRUaW1lID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcmVzc1RpbWUgPSBzbG90Tm9kZS5fdG91Y2hTdGFydFRpbWUgPyAoRGF0ZS5ub3coKSAtIHNsb3ROb2RlLl90b3VjaFN0YXJ0VGltZSkgOiAwO1xuICAgICAgICAgICAgY29uc3QgTE9OR19QUkVTU19USU1FID0gNTAwO1xuXG4gICAgICAgICAgICBpZiAocHJlc3NUaW1lID49IExPTkdfUFJFU1NfVElNRSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dJdGVtVG9vbHRpcE9uVG91Y2goc2xvdE5vZGUsIGl0ZW0sIGV2ZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJlc3NUaW1lID4gMCAmJiBwcmVzc1RpbWUgPCBMT05HX1BSRVNTX1RJTUUpIHtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbkl0ZW1TbG90Q2xpY2soc2xvdE5vZGUsIGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2xvdE5vZGUuX3RvdWNoU3RhcnRUaW1lID0gbnVsbDtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgLy8g57uR5a6a5Y+z6ZSu54K55Ye75LqL5Lu277yI5pi+56S66YGT5YW35L+h5oGv77yJLSDku4VQQ+err1xuICAgICAgICB0aGlzLl9zZXR1cEl0ZW1Ub29sdGlwKHNsb3ROb2RlLCBpdGVtKTtcblxuICAgICAgICAvLyDnoa7kv53lj6/ku6XmjqXmlLbop6bmkbjkuovku7ZcbiAgICAgICAgc2xvdE5vZGUuc2V0Q29udGVudFNpemUodGhpcy5pdGVtU2xvdFNpemUsIHRoaXMuaXRlbVNsb3RTaXplKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6K6+572u6YGT5YW35qC85a2Q55qE5Y+z6ZSu54K55Ye75LqL5Lu277yI5pi+56S66YGT5YW35L+h5oGv77yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IHNsb3ROb2RlIC0g6YGT5YW35qC85a2Q6IqC54K5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gLSDpgZPlhbfmlbDmja5cbiAgICAgKi9cbiAgICBfc2V0dXBJdGVtVG9vbHRpcChzbG90Tm9kZSwgaXRlbSkge1xuICAgICAgICBpZiAoIXRoaXMuaXRlbVRvb2x0aXApIHtcbiAgICAgICAgICAgIC8vIOWmguaenOayoeacieiuvue9rnRvb2x0aXDoioLngrnvvIzot7Pov4dcbiAgICAgICAgICAgIGNjLndhcm4oXCJbQ2hhcmFjdGVyVmlld1VJXSBpdGVtVG9vbHRpcOiKgueCueacque7keWumu+8jOi3s+i/h3Rvb2x0aXDorr7nva5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0b29sdGlwQ29tcG9uZW50ID0gdGhpcy5pdGVtVG9vbHRpcC5nZXRDb21wb25lbnQoXCJJdGVtVG9vbHRpcFwiKTtcbiAgICAgICAgaWYgKCF0b29sdGlwQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiW0NoYXJhY3RlclZpZXdVSV0gaXRlbVRvb2x0aXDoioLngrnmsqHmnIlJdGVtVG9vbHRpcOe7hOS7tu+8jOivt+a3u+WKoEl0ZW1Ub29sdGlw57uE5Lu2XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpdGVtIHx8ICFpdGVtLmlkKSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiW0NoYXJhY3RlclZpZXdVSV0g6YGT5YW35pWw5o2u5peg5pWI77yM57y65bCRaWTlrZfmrrVcIiwgaXRlbSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmt7vliqDosIPor5Xml6Xlv5dcbiAgICAgICAgY2MubG9nKFwiW0NoYXJhY3RlclZpZXdVSV0g6K6+572u6YGT5YW35Y+z6ZSu54K55Ye7dG9vbHRpcDpcIiwgaXRlbS5pZCwgXCJ0b29sdGlw6IqC54K5OlwiLCB0aGlzLml0ZW1Ub29sdGlwLm5hbWUpO1xuXG4gICAgICAgIC8vIOenu+mZpOaXp+eahOm8oOagh+S6i+S7tuebkeWQrFxuICAgICAgICBzbG90Tm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTik7XG4gICAgICAgIHNsb3ROb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9VUCk7XG5cbiAgICAgICAgLy8g57uR5a6a6byg5qCH5Y+z6ZSu5oyJ5LiL5LqL5Lu277yI5pi+56S66YGT5YW35L+h5oGv77yJXG4gICAgICAgIHNsb3ROb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sIChldmVudCkgPT4ge1xuICAgICAgICAgICAgLy8g5qOA5p+l5piv5ZCm5piv5Y+z6ZSuXG4gICAgICAgICAgICAvLyDms6jmhI/vvJpjYy5FdmVudC5FdmVudE1vdXNlLkJVVFRPTl9SSUdIVCDnmoTlgLzmmK8gMlxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZXZlbnQuZ2V0QnV0dG9uID8gZXZlbnQuZ2V0QnV0dG9uKCkgOiAtMTtcbiAgICAgICAgICAgIGlmIChidXR0b24gPT09IDIgfHwgYnV0dG9uID09PSBjYy5FdmVudC5FdmVudE1vdXNlLkJVVFRPTl9SSUdIVCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyDpmLvmraLkuovku7blhpLms6HvvIzpmLLmraLop6blj5Hlj7PplK7oj5zljZVcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCAmJiBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyDpmLvmraLpu5jorqTlj7PplK7oj5zljZVcblxuICAgICAgICAgICAgICAgIC8vIOS9v+eUqGl0ZW0uaWTkvZzkuLppdGVtSWTkvKDpgJLnu5l0b29sdGlwXG4gICAgICAgICAgICAgICAgY29uc3QgdG9vbHRpcERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1JZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IGl0ZW0uY291bnRcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8g5Lyg6YCS6YGT5YW35qC85a2Q6IqC54K577yM6K6pdG9vbHRpcOaYvuekuuWcqOiKgueCueWPs+S4iuaWuVxuICAgICAgICAgICAgICAgIHRvb2x0aXBDb21wb25lbnQuc2hvd0l0ZW1JbmZvKHRvb2x0aXBEYXRhLCBzbG90Tm9kZSk7XG5cbiAgICAgICAgICAgICAgICBjYy5sb2coXCJbQ2hhcmFjdGVyVmlld1VJXSDlj7PplK7ngrnlh7vpgZPlhbfvvIzmmL7npLrkv6Hmga86XCIsIGl0ZW0uaWQsIFwi5oyJ6ZKuOlwiLCBidXR0b24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAvLyDnu5HlrprpvKDmoIflj7PplK7ph4rmlL7kuovku7bvvIjpmpDol4/pgZPlhbfkv6Hmga/vvIlcbiAgICAgICAgc2xvdE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfVVAsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgLy8g5qOA5p+l5piv5ZCm5piv5Y+z6ZSuXG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBldmVudC5nZXRCdXR0b24gPyBldmVudC5nZXRCdXR0b24oKSA6IC0xO1xuICAgICAgICAgICAgaWYgKGJ1dHRvbiA9PT0gMiB8fCBidXR0b24gPT09IGNjLkV2ZW50LkV2ZW50TW91c2UuQlVUVE9OX1JJR0hUKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgJiYgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0b29sdGlwQ29tcG9uZW50LmhpZGVJdGVtSW5mbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDlnKjop6bmkbjorr7lpIfkuIrmmL7npLrpgZPlhbfkv6Hmga/vvIjplb/mjInop6blj5HvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gc2xvdE5vZGUgLSDpgZPlhbfmoLzlrZDoioLngrlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSAtIOmBk+WFt+aVsOaNrlxuICAgICAqIEBwYXJhbSB7Y2MuRXZlbnR9IGV2ZW50IC0g6Kem5pG45LqL5Lu2XG4gICAgICovXG4gICAgX3Nob3dJdGVtVG9vbHRpcE9uVG91Y2goc2xvdE5vZGUsIGl0ZW0sIGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5pdGVtVG9vbHRpcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdG9vbHRpcENvbXBvbmVudCA9IHRoaXMuaXRlbVRvb2x0aXAuZ2V0Q29tcG9uZW50KFwiSXRlbVRvb2x0aXBcIik7XG4gICAgICAgIGlmICghdG9vbHRpcENvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdG9vbHRpcERhdGEgPSB7XG4gICAgICAgICAgICBpdGVtSWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICBjb3VudDogaXRlbS5jb3VudFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIOS8oOmAkumBk+WFt+agvOWtkOiKgueCue+8jOiuqXRvb2x0aXDmmL7npLrlnKjoioLngrnlj7PkuIrmlrlcbiAgICAgICAgdG9vbHRpcENvbXBvbmVudC5zaG93SXRlbUluZm8odG9vbHRpcERhdGEsIHNsb3ROb2RlKTtcblxuICAgICAgICBjYy5sb2coXCJbQ2hhcmFjdGVyVmlld1VJXSDplb/mjInpgZPlhbfvvIzmmL7npLrkv6Hmga86XCIsIGl0ZW0uaWQpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDpgZPlhbfmoLzlrZDngrnlh7vkuovku7bvvIjkvb/nlKjpgZPlhbfvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gc2xvdE5vZGUgLSDpgZPlhbfmoLzlrZDoioLngrlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSAtIOmBk+WFt+aVsOaNrlxuICAgICAqL1xuICAgIGFzeW5jIF9vbkl0ZW1TbG90Q2xpY2soc2xvdE5vZGUsIGl0ZW0pIHtcbiAgICAgICAgaWYgKCFpdGVtIHx8ICFpdGVtLmNvbmZpZykge1xuICAgICAgICAgICAgY2Mud2FybihcIltDaGFyYWN0ZXJWaWV3VUldIOaXoOaViOeahOmBk+WFt+aVsOaNrlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOajgOafpeaYr+WQpuacieW9k+WJjeaYvuekuueahOinkuiJslxuICAgICAgICBpZiAoIXRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJbQ2hhcmFjdGVyVmlld1VJXSDor7flhYjpgInmi6nkuIDkuKrop5LoibJcIik7XG4gICAgICAgICAgICAvLyDlj6/ku6XmmL7npLrmj5DnpLrnu5nnlKjmiLdcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IEl0ZW1TeXN0ZW0gPSByZXF1aXJlKFwiSXRlbVN5c3RlbVwiKTtcblxuICAgICAgICAvLyDkvb/nlKjpgZPlhbdcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgSXRlbVN5c3RlbS51c2VJdGVtKHRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIsIGl0ZW0uaWQpO1xuXG4gICAgICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDinJMg5L2/55So6YGT5YW35oiQ5YqfOiAke2l0ZW0ubmFtZX0gLSAke3Jlc3VsdC5tZXNzYWdlfWApO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5za2lsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOinkuiJsuW3suWtpuS8muaKgOiDvTogJHtyZXN1bHQuc2tpbGxOYW1lfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDliLfmlrDpgZPlhbfmoI/mmL7npLpcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX3VwZGF0ZUludmVudG9yeSgpO1xuXG4gICAgICAgICAgICAvLyDmm7TmlrDop5LoibLlsZ7mgKfmmL7npLrvvIjlpoLmnpzlsZ7mgKfpnaLmnb/lt7LmiZPlvIDvvIlcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRzUGFuZWwgJiYgdGhpcy5zdGF0c1BhbmVsLmFjdGl2ZSAmJiB0aGlzLmN1cnJlbnRVbml0RGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dTdGF0c1BhbmVsKHRoaXMuY3VycmVudFVuaXREYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVE9ETzog5Y+v5Lul5pi+56S65L2/55So5oiQ5Yqf55qE5o+Q56S6VUnvvIjlpoIgVG9hc3Qg5pi+56S644CM5oqA6IO95a2m5Lmg5oiQ5Yqf44CN77yJXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy53YXJuKGBbQ2hhcmFjdGVyVmlld1VJXSDinJcg5L2/55So6YGT5YW35aSx6LSlOiAke2l0ZW0ubmFtZX0gLSAke3Jlc3VsdC5tZXNzYWdlfWApO1xuICAgICAgICAgICAgLy8gVE9ETzog5Y+v5Lul5pi+56S66ZSZ6K+v5o+Q56S6VUlcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDorr7nva7pgZPlhbflm77moIfvvIjku45JdGVtSWNvblNldHRlcue7hOS7tuiOt+WPlu+8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3NldHVwSXRlbUljb25zKCkge1xuICAgICAgICAvLyDmn6Xmib7lnLrmma/kuK3nmoRJdGVtSWNvblNldHRlcue7hOS7tlxuICAgICAgICBjb25zdCBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XG4gICAgICAgIGlmICghc2NlbmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHNjZW5lLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xuICAgICAgICBpZiAoIWNhbnZhcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5p+l5om+SXRlbUljb25TZXR0ZXLnu4Tku7ZcbiAgICAgICAgY29uc3QgaWNvblNldHRlciA9IGNhbnZhcy5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFwiSXRlbUljb25TZXR0ZXJcIik7XG4gICAgICAgIGlmIChpY29uU2V0dGVyKSB7XG4gICAgICAgICAgICBjYy5sb2coXCJbQ2hhcmFjdGVyVmlld1VJXSDmib7liLBJdGVtSWNvblNldHRlcue7hOS7tu+8jOmBk+WFt+Wbvuagh+W3suiuvue9rlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIltDaGFyYWN0ZXJWaWV3VUldIOacquaJvuWIsEl0ZW1JY29uU2V0dGVy57uE5Lu277yM6YGT5YW35Zu+5qCH6ZyA6KaB5Zyo5Luj56CB5Lit6K6+572uXCIpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMlum7mOiupOmBk+WFt++8iOa3u+WKoDXkuKrljYfnuqfoja/msLTvvIzku4XpppbmrKHov5vlhaXml7bvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFzeW5jIF9pbml0RGVmYXVsdEl0ZW1zKCkge1xuICAgICAgICBjb25zdCBJdGVtRGF0YU1hbmFnZXIgPSByZXF1aXJlKFwiSXRlbURhdGFNYW5hZ2VyXCIpO1xuXG4gICAgICAgIC8vIOajgOafpeaYr+WQpuW3sue7j+WIneWni+WMlui/h+mBk+WFt++8iOS9v+eUqGxvY2FsU3RvcmFnZeagh+W/l++8iVxuICAgICAgICBjb25zdCBJTklUX0ZMQUdfS0VZID0gXCJjaGFyYWN0ZXJfdmlld19pdGVtc19pbml0aWFsaXplZFwiO1xuICAgICAgICBjb25zdCBoYXNJbml0aWFsaXplZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShJTklUX0ZMQUdfS0VZKTtcblxuICAgICAgICBpZiAoaGFzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIC8vIOW3sue7j+WIneWni+WMlui/h++8jOS4jeWGjeiHquWKqOa3u+WKoOmBk+WFt1xuICAgICAgICAgICAgY2MubG9nKFwiW0NoYXJhY3RlclZpZXdVSV0g6YGT5YW35bey5Yid5aeL5YyW6L+H77yM6Lez6L+H6Ieq5Yqo5re75YqgXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5qOA5p+l5piv5ZCm5bey5pyJ5Y2H57qn6I2v5rC0XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb3VudCA9IGF3YWl0IEl0ZW1EYXRhTWFuYWdlci5nZXRJdGVtQ291bnQoXCJ1cGdyYWRlX3BvdGlvblwiKTtcblxuICAgICAgICAvLyDlpoLmnpzov5jmsqHmnInljYfnuqfoja/msLTvvIzmt7vliqA15Liq77yI5LuF6aaW5qyh77yJXG4gICAgICAgIGlmIChjdXJyZW50Q291bnQgPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCBJdGVtRGF0YU1hbmFnZXIuYWRkSXRlbShcInVwZ3JhZGVfcG90aW9uXCIsIDEwKTtcbiAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwiW0NoYXJhY3RlclZpZXdVSV0g4pyTIOmmluasoei/m+WFpe+8jOW3sua3u+WKoDEw5Liq5Y2H57qn6I2v5rC05Yiw5YWo5bGA6YGT5YW35qCPXCIpO1xuXG4gICAgICAgICAgICAgICAgLy8g5qCH6K6w5bey5Yid5aeL5YyW77yM56Gu5L+d5Y+q5Yid5aeL5YyW5LiA5qyhXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKElOSVRfRkxBR19LRVksIFwidHJ1ZVwiKTtcblxuICAgICAgICAgICAgICAgIC8vIOWmguaenOW9k+WJjeW3sumAieS4reinkuiJsu+8jOWIt+aWsOmBk+WFt+agj+aYvuekulxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRVbml0RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl91cGRhdGVJbnZlbnRvcnkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiW0NoYXJhY3RlclZpZXdVSV0g4pyXIOa3u+WKoOWNh+e6p+iNr+awtOWksei0pVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWmguaenOW3suacieWNh+e6p+iNr+awtO+8jOS5n+agh+iusOS4uuW3suWIneWni+WMlu+8iOWPr+iDveaYr+S7juWFtuS7luWcsOaWuea3u+WKoOeahO+8iVxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKElOSVRfRkxBR19LRVksIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5YWo5bGA6YGT5YW35qCP5bey5pyJICR7Y3VycmVudENvdW50fSDkuKrljYfnuqfoja/msLTvvIzmoIforrDkuLrlt7LliJ3lp4vljJZgKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDojrflj5bpgZPlhbfliJfooajvvIjlhajlsYDlhbHkuqvvvIzmiYDmnInop5LoibLlhbHnlKjvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJOYW1lIC0g6KeS6Imy5ZCN56ew77yI5bey5bqf5byD77yM5L+d55WZ55So5LqO5YW85a6577yJXG4gICAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXk+fEFycmF5fSDpgZPlhbfliJfooaggW3sgaWQsIG5hbWUsIGljb24sIGNvdW50IH0sIC4uLl3vvIjmnI3liqHlmajmqKHlvI/kuIvov5Tlm55Qcm9taXNl77yJXG4gICAgICovXG4gICAgYXN5bmMgX2dldENoYXJhY3Rlckl0ZW1zKGNoYXJhY3Rlck5hbWUpIHtcbiAgICAgICAgY29uc3QgSXRlbURhdGFNYW5hZ2VyID0gcmVxdWlyZShcIkl0ZW1EYXRhTWFuYWdlclwiKTtcblxuICAgICAgICAvLyDojrflj5blhajlsYDpgZPlhbfvvIjmiYDmnInop5LoibLlhbHkuqvvvIzlv73nlaVjaGFyYWN0ZXJOYW1l5Y+C5pWw77yJXG4gICAgICAgIGNvbnN0IGl0ZW1zV2l0aENvbmZpZyA9IGF3YWl0IEl0ZW1EYXRhTWFuYWdlci5nZXRBbGxJdGVtc1dpdGhDb25maWcoKTtcblxuICAgICAgICAvLyDovazmjaLkuLrmmL7npLrmoLzlvI/vvIzlubbov4fmu6TmjonmlbDph4/kuLow55qE6YGT5YW377yI5LiA5qyh5oCn5raI6ICX5ZOB5L2/55So5a6M5ZCO5bqU6K+l5raI5aSx77yJXG4gICAgICAgIHJldHVybiBpdGVtc1dpdGhDb25maWdcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLmNvdW50ID4gMCkgLy8g5Y+q5pi+56S65pWw6YeP5aSn5LqOMOeahOmBk+WFt1xuICAgICAgICAgICAgLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pdGVtSWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0uY29uZmlnLmRpc3BsYXlOYW1lIHx8IGl0ZW0uY29uZmlnLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGljb246IGl0ZW0uY29uZmlnLmljb24sIC8vIFNwcml0ZUZyYW1l6LWE5rqQXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiBpdGVtLmNvdW50LFxuICAgICAgICAgICAgICAgICAgICBjb25maWc6IGl0ZW0uY29uZmlnIC8vIOS/neWtmOWujOaVtOmFjee9ru+8jOeUqOS6juWQjue7reS9v+eUqOmBk+WFt1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yib5bu65aS05YOPXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdW5pdERhdGEgLSDljZXkvY3mlbDmja5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGVhbSAtIOmYn+S8jeexu+Wei++8iFwiaGVyb1wiIOaIliBcIm1vbnN0ZXJcIu+8iVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIOe0ouW8lVxuICAgICAqL1xuICAgIF9jcmVhdGVBdmF0YXIodW5pdERhdGEsIHRlYW0sIGluZGV4KSB7XG4gICAgICAgIGlmICghdW5pdERhdGEgfHwgIXVuaXREYXRhLm5hbWUpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKGBbQ2hhcmFjdGVyVmlld1VJXSBfY3JlYXRlQXZhdGFyOiB1bml0RGF0YeaXoOaViGAsIHVuaXREYXRhKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWunuS+i+WMluWktOWDj1ByZWZhYlxuICAgICAgICBjb25zdCBhdmF0YXJOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5hdmF0YXJQcmVmYWIpO1xuICAgICAgICBhdmF0YXJOb2RlLm5hbWUgPSBgQXZhdGFyXyR7dW5pdERhdGEubmFtZX1gO1xuXG4gICAgICAgIC8vIOS/neWtmOWNleS9jeaVsOaNruWIsOiKgueCue+8iOa1heaLt+i0ne+8jOS/neeVmVByZWZhYuW8leeUqO+8iVxuICAgICAgICBhdmF0YXJOb2RlLl91bml0RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHVuaXREYXRhKTtcbiAgICAgICAgYXZhdGFyTm9kZS5fdGVhbSA9IHRlYW07XG5cbiAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDliJvlu7rlpLTlg486IG5hbWU9JHt1bml0RGF0YS5uYW1lfSwgdGVhbT0ke3RlYW19LCBpbmRleD0ke2luZGV4fSwgcHJlZmFiPSR7dW5pdERhdGEucHJlZmFiID8gdW5pdERhdGEucHJlZmFiLm5hbWUgOiAnbnVsbCd9YCk7XG5cbiAgICAgICAgLy8g5re75Yqg5Yiw5a655ZmoXG4gICAgICAgIHRoaXMuYXZhdGFyTGlzdENvbnRhaW5lci5hZGRDaGlsZChhdmF0YXJOb2RlKTtcblxuICAgICAgICAvLyDorr7nva7kvY3nva7vvIjlnoLnm7TmjpLliJfvvIlcbiAgICAgICAgY29uc3Qgc3BhY2luZyA9IHRoaXMuYXZhdGFyU3BhY2luZyB8fCAxMDA7XG4gICAgICAgIGNvbnN0IHN0YXJ0WSA9IDIwMDsgLy8g5LuO5LiK5pa55byA5aeLXG4gICAgICAgIGNvbnN0IHkgPSBzdGFydFkgLSAoaW5kZXggKiBzcGFjaW5nKTtcbiAgICAgICAgYXZhdGFyTm9kZS5zZXRQb3NpdGlvbigwLCB5KTsvL1RPRE86IOi/memHjOmcgOimgeagueaNrumYn+S8jeexu+Wei+iuvue9ruS9jee9rlxuXG4gICAgICAgIC8vIOiuvue9ruWktOWDj+WbvueJh1xuICAgICAgICBjb25zdCBhdmF0YXJDb21wID0gYXZhdGFyTm9kZS5nZXRDb21wb25lbnQoXCJBdmF0YXJJdGVtXCIpO1xuICAgICAgICBpZiAoYXZhdGFyQ29tcCkge1xuICAgICAgICAgICAgYXZhdGFyQ29tcC5pbml0KHVuaXREYXRhLCB0ZWFtLCB0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWmguaenOayoeaciee7hOS7tu+8jOaJi+WKqOiuvue9rlxuICAgICAgICAgICAgY29uc3QgaWNvbk5vZGUgPSBhdmF0YXJOb2RlLmdldENoaWxkQnlOYW1lKFwiSWNvblwiKTtcbiAgICAgICAgICAgIGlmIChpY29uTm9kZSAmJiB1bml0RGF0YS5pY29uKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlID0gaWNvbk5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNwcml0ZSkge1xuICAgICAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB1bml0RGF0YS5pY29uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOe7keWumueCueWHu+S6i+S7tu+8iOS7juiKgueCueiOt+WPlnVuaXREYXRh77yM6YG/5YWN6Zet5YyF5byV55So6Zeu6aKY77yJXG4gICAgICAgIGF2YXRhck5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICAvLyDkvJjlhYjku47oioLngrnojrflj5Z1bml0RGF0Ye+8iOehruS/neaVsOaNruato+ehru+8iVxuICAgICAgICAgICAgY29uc3Qgbm9kZVVuaXREYXRhID0gYXZhdGFyTm9kZS5fdW5pdERhdGEgfHwgdW5pdERhdGE7XG4gICAgICAgICAgICBjb25zdCBub2RlVGVhbSA9IGF2YXRhck5vZGUuX3RlYW0gfHwgdGVhbTtcbiAgICAgICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5aS05YOP54K55Ye75LqL5Lu26Kem5Y+ROiDoioLngrnlkI3np7A9JHthdmF0YXJOb2RlLm5hbWV9LCB1bml0RGF0YS5uYW1lPSR7bm9kZVVuaXREYXRhLm5hbWV9LCB0ZWFtPSR7bm9kZVRlYW19YCk7XG4gICAgICAgICAgICB0aGlzLl9vbkF2YXRhckNsaWNrKG5vZGVVbml0RGF0YSwgbm9kZVRlYW0pO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAvLyDnoa7kv53lj6/ku6XmjqXmlLbop6bmkbjkuovku7ZcbiAgICAgICAgYXZhdGFyTm9kZS5zZXRDb250ZW50U2l6ZSgxMDAsIDEwMCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWktOWDj+eCueWHu+S6i+S7tlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHVuaXREYXRhIC0g5Y2V5L2N5pWw5o2uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRlYW0gLSDpmJ/kvI3nsbvlnotcbiAgICAgKi9cbiAgICBhc3luYyBfb25BdmF0YXJDbGljayh1bml0RGF0YSwgdGVhbSkge1xuICAgICAgICBpZiAoIXVuaXREYXRhKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihgW0NoYXJhY3RlclZpZXdVSV0g54K55Ye75aS05YOP5aSx6LSlOiB1bml0RGF0YeS4uuepumApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g54K55Ye75aS05YOPOiAke3VuaXREYXRhLm5hbWV9LCB0ZWFtPSR7dGVhbX0sIHByZWZhYj0ke3VuaXREYXRhLnByZWZhYiA/IHVuaXREYXRhLnByZWZhYi5uYW1lIDogJ251bGwnfWApO1xuICAgICAgICB0aGlzLl9kaXNwbGF5Q2hhcmFjdGVyUHJlZmFiKHVuaXREYXRhKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5pi+56S65Lq654mp5Y6f5Z6LXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdW5pdERhdGEgLSDljZXkvY3mlbDmja5cbiAgICAgKi9cbiAgICBhc3luYyBfZGlzcGxheUNoYXJhY3RlclByZWZhYih1bml0RGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMuY2hhcmFjdGVyRGlzcGxheUFyZWEpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJbQ2hhcmFjdGVyVmlld1VJXSDmnKrorr7nva5jaGFyYWN0ZXJEaXNwbGF5QXJlYe+8jOaXoOazleaYvuekuuS6uueJqeWOn+Wei1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOa4hemZpOS5i+WJjeaYvuekuueahOWOn+Wei1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50RGlzcGxheVByZWZhYikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGlzcGxheVByZWZhYi5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOmakOiXj+WxnuaAp+mdouadv1xuICAgICAgICBpZiAodGhpcy5zdGF0c1BhbmVsKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRzUGFuZWwuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDkv53lrZjlvZPliY3ljZXkvY3mlbDmja5cbiAgICAgICAgdGhpcy5jdXJyZW50VW5pdERhdGEgPSB1bml0RGF0YTtcblxuICAgICAgICAvLyDmm7TmlrDpgZPlhbfmoI/kuI7oo4XlpIfmoI/vvIjmr4/kvY3oi7Hpm4Too4XlpIfni6znq4vvvIlcbiAgICAgICAgYXdhaXQgdGhpcy5fdXBkYXRlSW52ZW50b3J5KCk7XG4gICAgICAgIGF3YWl0IHRoaXMuX3VwZGF0ZUVxdWlwbWVudEJhcigpO1xuXG4gICAgICAgIC8vIOWmguaenOaciVByZWZhYu+8jOWunuS+i+WMluW5tuaYvuekulxuICAgICAgICBpZiAodW5pdERhdGEucHJlZmFiKSB7XG4gICAgICAgICAgICBjb25zdCBwcmVmYWJJbnN0YW5jZSA9IGNjLmluc3RhbnRpYXRlKHVuaXREYXRhLnByZWZhYik7XG4gICAgICAgICAgICBwcmVmYWJJbnN0YW5jZS5uYW1lID0gYERpc3BsYXlfJHt1bml0RGF0YS5uYW1lfWA7XG5cbiAgICAgICAgICAgIC8vIOS/neWtmOWOn+Wni+inkuiJsuWQjeensO+8jOeUqOS6juaVsOaNruS/neWtmOWSjOWKoOi9vVxuICAgICAgICAgICAgcHJlZmFiSW5zdGFuY2UuX29yaWdpbmFsQ2hhcmFjdGVyTmFtZSA9IHVuaXREYXRhLm5hbWU7XG5cbiAgICAgICAgICAgIC8vIOehruS/neiKgueCueWPr+ingVxuICAgICAgICAgICAgcHJlZmFiSW5zdGFuY2UuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHByZWZhYkluc3RhbmNlLm9wYWNpdHkgPSAyNTU7XG5cbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyRGlzcGxheUFyZWEuYWRkQ2hpbGQocHJlZmFiSW5zdGFuY2UpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGlzcGxheVByZWZhYiA9IHByZWZhYkluc3RhbmNlO1xuXG4gICAgICAgICAgICAvLyDorr7nva7kvY3nva7lkoznvKnmlL7vvIjlsYXkuK3mmL7npLrvvIznvKnlsI/mmL7npLrvvIzkvY3nva7lkJHkuIrosIPmlbTvvIlcbiAgICAgICAgICAgIHByZWZhYkluc3RhbmNlLnNldFBvc2l0aW9uKDAsIDEwMCk7XG4gICAgICAgICAgICBwcmVmYWJJbnN0YW5jZS5zZXRTY2FsZSgwLjcpO1xuXG4gICAgICAgICAgICAvLyDliJ3lp4vljJbop5LoibLlsZ7mgKfvvIjmoLnmja7kv53lrZjnmoTnrYnnuqfmlbDmja7vvIzmlK/mjIHlvILmraXvvIlcbiAgICAgICAgICAgIHRoaXMuX2luaXRDaGFyYWN0ZXJTdGF0cyhwcmVmYWJJbnN0YW5jZSwgdW5pdERhdGEpLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtDaGFyYWN0ZXJWaWV3VUldIOWIneWni+WMluinkuiJsuWxnuaAp+Wksei0pTogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyDnu5Hlrprngrnlh7vkuovku7bvvIjngrnlh7vkurrnianljp/lnovmmL7npLrlsZ7mgKfpnaLmnb/vvIlcbiAgICAgICAgICAgIHByZWZhYkluc3RhbmNlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIOmYu+atouS6i+S7tuWGkuazoVxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dTdGF0c1BhbmVsKHVuaXREYXRhKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgICAvLyDnoa7kv53lj6/ku6XmjqXmlLbop6bmkbjkuovku7ZcbiAgICAgICAgICAgIHByZWZhYkluc3RhbmNlLnNldENvbnRlbnRTaXplKDIwMCwgMjAwKTtcblxuICAgICAgICAgICAgLy8g5qCH6K6w6L+Z5piv5Lq654mp5Y6f5Z6L6IqC54K577yI55So5LqO5Yik5pat54K55Ye75L2N572u77yJXG4gICAgICAgICAgICBwcmVmYWJJbnN0YW5jZS5faXNDaGFyYWN0ZXJQcmVmYWIgPSB0cnVlO1xuXG4gICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOKckyDmmL7npLrkurrnianljp/lnos6ICR7dW5pdERhdGEubmFtZX1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLndhcm4oYFtDaGFyYWN0ZXJWaWV3VUldIOKclyDljZXkvY0gJHt1bml0RGF0YS5uYW1lfSDmsqHmnInorr7nva5wcmVmYWJgKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbop5LoibLlsZ7mgKfvvIjmoLnmja7kv53lrZjnmoTnrYnnuqfmlbDmja7vvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gcHJlZmFiSW5zdGFuY2UgLSDkurrnianljp/lnovlrp7kvotcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdW5pdERhdGEgLSDljZXkvY3mlbDmja5cbiAgICAgKi9cbiAgICBhc3luYyBfaW5pdENoYXJhY3RlclN0YXRzKHByZWZhYkluc3RhbmNlLCB1bml0RGF0YSkge1xuICAgICAgICBjb25zdCBDaGFyYWN0ZXJEYXRhTWFuYWdlciA9IHJlcXVpcmUoXCJDaGFyYWN0ZXJEYXRhTWFuYWdlclwiKTtcbiAgICAgICAgLy8gU3RhdHNDb21wb25lbnQg5piv57uE5Lu257G777yM5LiN6ZyA6KaBIHJlcXVpcmXvvIznm7TmjqXkvb/nlKggZ2V0Q29tcG9uZW50IOiOt+WPllxuXG4gICAgICAgIC8vIOiOt+WPllN0YXRzQ29tcG9uZW5057uE5Lu2XG4gICAgICAgIGNvbnN0IHN0YXRzID0gcHJlZmFiSW5zdGFuY2UuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XG4gICAgICAgIGlmICghc3RhdHMpIHtcbiAgICAgICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0gJHt1bml0RGF0YS5uYW1lfSDmsqHmnIlTdGF0c0NvbXBvbmVudOe7hOS7tu+8jOi3s+i/h+WxnuaAp+WIneWni+WMlmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5LuO5pys5Zyw5a2Y5YKo5Yqg6L296KeS6Imy55qE562J57qn5pWw5o2u77yI5pSv5oyB5byC5q2l77yJXG4gICAgICAgIGNvbnN0IHNhdmVkRGF0YSA9IGF3YWl0IENoYXJhY3RlckRhdGFNYW5hZ2VyLmxvYWRDaGFyYWN0ZXJMZXZlbCh1bml0RGF0YS5uYW1lKTtcblxuICAgICAgICBpZiAoc2F2ZWREYXRhKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzmnInkv53lrZjnmoTmlbDmja7vvIzkvb/nlKjkv53lrZjnmoTln7rnoYDlsZ7mgKdcbiAgICAgICAgICAgIHN0YXRzLmJhc2VIcCA9IHNhdmVkRGF0YS5iYXNlSHAgfHwgdW5pdERhdGEuaHAgfHwgMTAwO1xuICAgICAgICAgICAgc3RhdHMuYmFzZUF0dGFjayA9IHNhdmVkRGF0YS5iYXNlQXR0YWNrIHx8IHVuaXREYXRhLmF0dGFjayB8fCAxO1xuICAgICAgICAgICAgc3RhdHMuYmFzZURlZmVuc2UgPSBzYXZlZERhdGEuYmFzZURlZmVuc2UgfHwgdW5pdERhdGEuZGVmZW5zZSB8fCAxO1xuICAgICAgICAgICAgc3RhdHMuYmFzZVNwZWVkID0gc2F2ZWREYXRhLmJhc2VTcGVlZCB8fCB1bml0RGF0YS5zcGVlZCB8fCAxO1xuICAgICAgICAgICAgc3RhdHMuYmFzZUNyaXQgPSBzYXZlZERhdGEuYmFzZUNyaXQgfHwgdW5pdERhdGEuY3JpdCB8fCAwO1xuICAgICAgICAgICAgc3RhdHMuYmFzZU1pc3MgPSBzYXZlZERhdGEuYmFzZU1pc3MgfHwgdW5pdERhdGEubWlzcyB8fCAwO1xuXG4gICAgICAgICAgICAvLyDorr7nva7nrYnnuqflkoznu4/pqozlgLxcbiAgICAgICAgICAgIHN0YXRzLmxldmVsID0gc2F2ZWREYXRhLmxldmVsIHx8IDE7XG4gICAgICAgICAgICBzdGF0cy5leHAgPSBzYXZlZERhdGEuZXhwIHx8IDA7XG5cbiAgICAgICAgICAgIC8vIOW6lOeUqOetiee6p+WKoOaIkFxuICAgICAgICAgICAgc3RhdHMuX2FwcGx5TGV2ZWxCb251cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5aaC5p6c5rKh5pyJ5L+d5a2Y55qE5pWw5o2u77yM5L2/55SodW5pdERhdGHkuK3nmoTln7rnoYDlsZ7mgKdcbiAgICAgICAgICAgIHN0YXRzLmJhc2VIcCA9IHVuaXREYXRhLmhwIHx8IDEwMDtcbiAgICAgICAgICAgIHN0YXRzLmJhc2VBdHRhY2sgPSB1bml0RGF0YS5hdHRhY2sgfHwgMTtcbiAgICAgICAgICAgIHN0YXRzLmJhc2VEZWZlbnNlID0gdW5pdERhdGEuZGVmZW5zZSB8fCAxO1xuICAgICAgICAgICAgc3RhdHMuYmFzZVNwZWVkID0gdW5pdERhdGEuc3BlZWQgfHwgMTtcbiAgICAgICAgICAgIHN0YXRzLmJhc2VDcml0ID0gdW5pdERhdGEuY3JpdCB8fCAwO1xuICAgICAgICAgICAgc3RhdHMuYmFzZU1pc3MgPSB1bml0RGF0YS5taXNzIHx8IDA7XG5cbiAgICAgICAgICAgIC8vIOiuvue9rum7mOiupOetiee6p+WSjOe7j+mqjOWAvFxuICAgICAgICAgICAgc3RhdHMubGV2ZWwgPSAxO1xuICAgICAgICAgICAgc3RhdHMuZXhwID0gMDtcblxuICAgICAgICAgICAgLy8g5bqU55So562J57qn5Yqg5oiQXG4gICAgICAgICAgICBzdGF0cy5fYXBwbHlMZXZlbEJvbnVzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDorr7nva7lvZPliY3nlJ/lkb3lgLzkuLrmnIDlpKfnlJ/lkb3lgLzvvIjmu6HooYDmmL7npLrvvIlcbiAgICAgICAgc3RhdHMuaHAgPSBzdGF0cy5tYXhIcDtcblxuICAgICAgICAvLyDmm7TmlrDooYDmnaHmmL7npLpcbiAgICAgICAgaWYgKHN0YXRzLnVwZGF0ZUhlYWx0aEJhcikge1xuICAgICAgICAgICAgc3RhdHMudXBkYXRlSGVhbHRoQmFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmm7TmlrDnu4/pqozmnaHmmL7npLpcbiAgICAgICAgaWYgKHN0YXRzLnVwZGF0ZUV4cEJhcikge1xuICAgICAgICAgICAgc3RhdHMudXBkYXRlRXhwQmFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmm7TmlrDmgJLmsJTmnaHmmL7npLrvvIjliJ3lp4vkuLow77yJXG4gICAgICAgIGlmIChzdGF0cy51cGRhdGVSYWdlQmFyKSB7XG4gICAgICAgICAgICBzdGF0cy5yYWdlID0gMDtcbiAgICAgICAgICAgIHN0YXRzLnVwZGF0ZVJhZ2VCYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOW6lOeUqOijheWkh+WKoOaIkO+8iOavj+S9jeiLsembhOeLrOeri+ijheWkh++8jOWxnuaAp+WQjOatpeabtOaWsO+8iVxuICAgICAgICBjb25zdCBib251c2VzID0gYXdhaXQgdGhpcy5fZ2V0RXF1aXBtZW50Qm9udXNlcyh1bml0RGF0YS5uYW1lKTtcbiAgICAgICAgaWYgKHN0YXRzLmFwcGx5RXF1aXBtZW50Qm9udXNlcykge1xuICAgICAgICAgICAgc3RhdHMuYXBwbHlFcXVpcG1lbnRCb251c2VzKGJvbnVzZXMpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOagueaNruinkuiJsuijheWkh+iuoeeul+WxnuaAp+WKoOaIkFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJOYW1lIC0g6KeS6Imy5ZCN56ewXG4gICAgICogQHJldHVybnMge1Byb21pc2U8eyBhdHRhY2s6IG51bWJlciwgZGVmZW5zZTogbnVtYmVyLCBzcGVlZDogbnVtYmVyIH0+fVxuICAgICAqL1xuICAgIGFzeW5jIF9nZXRFcXVpcG1lbnRCb251c2VzKGNoYXJhY3Rlck5hbWUpIHtcbiAgICAgICAgY29uc3QgRXF1aXBtZW50RGF0YU1hbmFnZXIgPSByZXF1aXJlKFwiRXF1aXBtZW50RGF0YU1hbmFnZXJcIik7XG4gICAgICAgIGNvbnN0IEl0ZW1Db25maWcgPSByZXF1aXJlKFwiSXRlbUNvbmZpZ1wiKTtcbiAgICAgICAgY29uc3QgeyBzbG90cyB9ID0gYXdhaXQgRXF1aXBtZW50RGF0YU1hbmFnZXIuZ2V0RXF1aXBtZW50KGNoYXJhY3Rlck5hbWUpO1xuICAgICAgICBjb25zdCBib251c2VzID0geyBhdHRhY2s6IDAsIGRlZmVuc2U6IDAsIHNwZWVkOiAwIH07XG4gICAgICAgIGZvciAoY29uc3QgaXRlbUlkIG9mIHNsb3RzKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW1JZCkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBjZmcgPSBJdGVtQ29uZmlnLmdldEl0ZW1CeUlkKGl0ZW1JZCk7XG4gICAgICAgICAgICBpZiAoIWNmZyB8fCAhY2ZnLmVmZmVjdFR5cGUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgdCA9IFN0cmluZyhjZmcuZWZmZWN0VHlwZSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBjZmcuZWZmZWN0VmFsdWUgfHwgMDtcbiAgICAgICAgICAgIGlmICh0ID09PSBcImF0dGFja1wiKSBib251c2VzLmF0dGFjayArPSB2O1xuICAgICAgICAgICAgZWxzZSBpZiAodCA9PT0gXCJkZWZlbnNlXCIpIGJvbnVzZXMuZGVmZW5zZSArPSB2O1xuICAgICAgICAgICAgZWxzZSBpZiAodCA9PT0gXCJzcGVlZFwiKSBib251c2VzLnNwZWVkICs9IHY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvbnVzZXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOaYvuekuuWxnuaAp+mdouadv1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHVuaXREYXRhIC0g5Y2V5L2N5pWw5o2uXG4gICAgICovXG4gICAgX3Nob3dTdGF0c1BhbmVsKHVuaXREYXRhKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0c1BhbmVsKSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiW0NoYXJhY3RlclZpZXdVSV0g5pyq6K6+572uc3RhdHNQYW5lbO+8jOaXoOazleaYvuekuuWxnuaAp+mdouadv1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiOt+WPluW9k+WJjeaYvuekuueahOS6uueJqeWOn+Wei+eahFN0YXRzQ29tcG9uZW50XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50RGlzcGxheVByZWZhYikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6I635Y+WU3RhdHNDb21wb25lbnTnu4Tku7ZcbiAgICAgICAgY29uc3Qgc3RhdHMgPSB0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiLmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xuXG4gICAgICAgIGlmICghc3RhdHMpIHtcbiAgICAgICAgICAgIGNjLndhcm4oYFtDaGFyYWN0ZXJWaWV3VUldICR7dW5pdERhdGEubmFtZX0g5rKh5pyJU3RhdHNDb21wb25lbnTnu4Tku7bvvIzml6Dms5XmmL7npLrlsZ7mgKdgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOabtOaWsOWxnuaAp+agh+etvlxuICAgICAgICBpZiAodGhpcy5ocExhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLmhwTGFiZWwuc3RyaW5nID0gYOeUn+WRveWAvDogJHtzdGF0cy5ocH0vJHtzdGF0cy5tYXhIcH1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmF0dGFja0xhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLmF0dGFja0xhYmVsLnN0cmluZyA9IGDmlLvlh7vlips6ICR7c3RhdHMuYXR0YWNrfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGVmZW5zZUxhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmVuc2VMYWJlbC5zdHJpbmcgPSBg6Ziy5b6h5YqbOiAke3N0YXRzLmRlZmVuc2V9YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zcGVlZExhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkTGFiZWwuc3RyaW5nID0gYOmAn+W6pjogJHtzdGF0cy5zcGVlZH1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNyaXRMYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5jcml0TGFiZWwuc3RyaW5nID0gYOaatOWHu+eOhzogJHsoc3RhdHMuY3JpdCAqIDEwMCkudG9GaXhlZCgxKX0lYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5taXNzTGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMubWlzc0xhYmVsLnN0cmluZyA9IGDpl6rpgb/njoc6ICR7KHN0YXRzLm1pc3MgKiAxMDApLnRvRml4ZWQoMSl9JWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGV2ZWxMYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbExhYmVsLnN0cmluZyA9IGDnrYnnuqc6ICR7c3RhdHMubGV2ZWx9YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5leHBMYWJlbCkge1xuICAgICAgICAgICAgY29uc3QgTGV2ZWxDb25maWcgPSByZXF1aXJlKFwiTGV2ZWxDb25maWdcIik7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TGV2ZWxFeHAgPSBMZXZlbENvbmZpZy5nZXRFeHBGb3JMZXZlbChzdGF0cy5sZXZlbCk7XG4gICAgICAgICAgICBjb25zdCBuZXh0TGV2ZWxFeHAgPSBMZXZlbENvbmZpZy5nZXRFeHBGb3JMZXZlbChzdGF0cy5sZXZlbCArIDEpO1xuICAgICAgICAgICAgY29uc3QgZXhwSW5DdXJyZW50TGV2ZWwgPSBzdGF0cy5leHAgLSBjdXJyZW50TGV2ZWxFeHA7XG4gICAgICAgICAgICBjb25zdCBleHBUb05leHQgPSBuZXh0TGV2ZWxFeHAgLSBjdXJyZW50TGV2ZWxFeHA7XG4gICAgICAgICAgICBpZiAoZXhwVG9OZXh0ID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwTGFiZWwuc3RyaW5nID0gYOe7j+mqjOWAvDogJHtleHBJbkN1cnJlbnRMZXZlbH0vJHtleHBUb05leHR9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBMYWJlbC5zdHJpbmcgPSBg57uP6aqM5YC8OiDlt7Lmu6HnuqdgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pi+56S65bGe5oCn6Z2i5p2/77yI5bim5Yqo55S777yJXG4gICAgICAgIHRoaXMuc3RhdHNQYW5lbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXRzUGFuZWwuc2V0U2NhbGUoMC44KTtcbiAgICAgICAgdGhpcy5zdGF0c1BhbmVsLm9wYWNpdHkgPSAwO1xuXG4gICAgICAgIC8vIOiuvue9rumdouadv+S9jee9ru+8iOaYvuekuuWcqOS6uueJqeWOn+Wei+mZhOi/ke+8iVxuICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXJEaXNwbGF5QXJlYSkge1xuICAgICAgICAgICAgY29uc3QgZGlzcGxheVBvcyA9IHRoaXMuY2hhcmFjdGVyRGlzcGxheUFyZWEuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdHNQYW5lbC5zZXRQb3NpdGlvbihkaXNwbGF5UG9zLnggKyAyNTAsIGRpc3BsYXlQb3MueSk7IC8vIOaYvuekuuWcqOWPs+S+p1xuICAgICAgICB9XG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5zdGF0c1BhbmVsKVxuICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMS4wLCBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDmmL7npLrlsZ7mgKfpnaLmnb86ICR7dW5pdERhdGEubmFtZX1gKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog54K55Ye7Q2FudmFz5LqL5Lu277yI5YWz6Zet5bGe5oCn6Z2i5p2/77yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfb25DYW52YXNDbGljayhldmVudCkge1xuICAgICAgICAvLyDlpoLmnpzngrnlh7vnmoTmmK/lsZ7mgKfpnaLmnb/mnKzouqvvvIzkuI3lhbPpl61cbiAgICAgICAgaWYgKHRoaXMuc3RhdHNQYW5lbCAmJiBjYy5pc1ZhbGlkKHRoaXMuc3RhdHNQYW5lbCkgJiYgdGhpcy5zdGF0c1BhbmVsLmFjdGl2ZSkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgLy8g5qOA5p+l54K55Ye755qE55uu5qCH5piv5ZCm5piv5bGe5oCn6Z2i5p2/5oiW5YW25a2Q6IqC54K5XG4gICAgICAgICAgICBsZXQgaXNTdGF0c1BhbmVsID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRhcmdldDtcbiAgICAgICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUgPT09IHRoaXMuc3RhdHNQYW5lbCkge1xuICAgICAgICAgICAgICAgICAgICBpc1N0YXRzUGFuZWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzU3RhdHNQYW5lbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjsgLy8g54K55Ye755qE5piv5bGe5oCn6Z2i5p2/77yM5LiN5YWz6ZetXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlpoLmnpzngrnlh7vnmoTmmK/kurrnianljp/lnovvvIzkuI3lhbPpl63vvIjnlLHkurrnianljp/lnovnmoTngrnlh7vkuovku7blpITnkIbvvIlcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIgJiYgY2MuaXNWYWxpZCh0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiKSkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0YXJnZXQ7XG4gICAgICAgICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlID09PSB0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiIHx8IG5vZGUuX2lzQ2hhcmFjdGVyUHJlZmFiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8g54K55Ye755qE5piv5Lq654mp5Y6f5Z6L77yM5LiN5YWz6ZetXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOeCueWHu+WFtuS7luWMuuWfn++8jOWFs+mXreWxnuaAp+mdouadv1xuICAgICAgICBpZiAodGhpcy5zdGF0c1BhbmVsICYmIHRoaXMuc3RhdHNQYW5lbC5hY3RpdmUpIHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuc3RhdHNQYW5lbClcbiAgICAgICAgICAgICAgICAudG8oMC4yLCB7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjggfSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHNQYW5lbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDlhbPpl63lsZ7mgKfpnaLmnb9gKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIC8vIOa4heeQhuS6i+S7tuebkeWQrFxuICAgICAgICBjb25zdCBjYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xuICAgICAgICBpZiAoY2FudmFzKSB7XG4gICAgICAgICAgICBjYW52YXMub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fb25DYW52YXNDbGljaywgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==