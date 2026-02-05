
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
      var wasDragging, hadDragState, target, characterName, slotNode, slotIndex, itemData, EquipmentDataManager, ItemDataManager, beforeEquip, beforeCount, afterEquip, afterCount, item, ItemConfig, cfg, itemToEquip, _EquipmentDataManager, _ItemDataManager, _slotIndex, current, _beforeCount, prevItemId, count, ok, _afterEquip, _afterCount;
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
              _context4.next = 47;
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
            ItemDataManager = require("ItemDataManager"); // 调试：卸下前的装备槽与背包数量
            _context4.next = 24;
            return EquipmentDataManager.getEquipment(characterName);
          case 24:
            beforeEquip = _context4.sent;
            _context4.next = 27;
            return ItemDataManager.getItemCount(itemData.id);
          case 27:
            beforeCount = _context4.sent;
            cc.log("[EquipDebug] \u5378\u4E0B\u524D => \u89D2\u8272=" + characterName + ", \u69FD\u4F4D=" + slotIndex + ", itemId=" + itemData.id + ", \u80CC\u5305\u6570\u91CF=" + beforeCount + ", \u69FD\u4F4D=", beforeEquip && beforeEquip.slots);
            // 装备占用背包数量：卸下时需要把装备还回背包
            _context4.next = 31;
            return EquipmentDataManager.unequipSlot(characterName, slotIndex);
          case 31:
            _context4.next = 33;
            return ItemDataManager.addItem(itemData.id, 1);
          case 33:
            _context4.next = 35;
            return EquipmentDataManager.getEquipment(characterName);
          case 35:
            afterEquip = _context4.sent;
            _context4.next = 38;
            return ItemDataManager.getItemCount(itemData.id);
          case 38:
            afterCount = _context4.sent;
            cc.log("[EquipDebug] \u5378\u4E0B\u540E => \u89D2\u8272=" + characterName + ", \u69FD\u4F4D=" + slotIndex + ", itemId=" + itemData.id + ", \u80CC\u5305\u6570\u91CF=" + afterCount + ", \u69FD\u4F4D=", afterEquip && afterEquip.slots);
            _context4.next = 42;
            return _this10._updateEquipmentBar();
          case 42:
            _context4.next = 44;
            return _this10._updateInventory();
          case 44:
            _context4.next = 46;
            return _this10._applyEquipmentBonusesToDisplay();
          case 46:
            return _context4.abrupt("return");
          case 47:
            if (!(_this10._draggingSlot && _this10._draggingItem && characterName)) {
              _context4.next = 110;
              break;
            }
            item = _this10._draggingItem;
            ItemConfig = require("ItemConfig");
            cfg = item.config || ItemConfig.getItemById(item.id);
            itemToEquip = _this10._draggingItem;
            _this10._draggingSlot = null;
            _this10._draggingItem = null;
            if (!(!cfg || cfg.type !== "equipment" || !cfg.equipmentSlot)) {
              _context4.next = 57;
              break;
            }
            _this10._clearDragState();
            return _context4.abrupt("return");
          case 57:
            if (!(wasDragging && target && target.isEquipment && target.slotType === cfg.equipmentSlot)) {
              _context4.next = 109;
              break;
            }
            _EquipmentDataManager = require("EquipmentDataManager");
            _ItemDataManager = require("ItemDataManager");
            _slotIndex = target.slotIndex;
            _context4.next = 63;
            return _EquipmentDataManager.getEquipment(characterName);
          case 63:
            current = _context4.sent;
            if (!(current && current.slots && current.slots[_slotIndex] === itemToEquip.id)) {
              _context4.next = 68;
              break;
            }
            cc.log("[CharacterViewUI] \u69FD\u4F4D " + _slotIndex + " \u5DF2\u7ECF\u662F\u88C5\u5907 " + itemToEquip.id + "\uFF0C\u62D6\u62FD\u5FFD\u7565");
            _this10._clearDragState();
            return _context4.abrupt("return");
          case 68:
            if (!(current && current.slots && current.slots.some(function (id, idx) {
              return idx !== _slotIndex && id === itemToEquip.id;
            }))) {
              _context4.next = 72;
              break;
            }
            cc.warn("[CharacterViewUI] \u89D2\u8272 " + characterName + " \u5DF2\u7ECF\u88C5\u5907\u4E86\u76F8\u540C\u7684\u88C5\u5907(" + itemToEquip.id + ")\uFF0C\u672C\u6B21\u62D6\u62FD\u4E0D\u751F\u6548");
            _this10._clearDragState();
            return _context4.abrupt("return");
          case 72:
            _context4.next = 74;
            return _ItemDataManager.getItemCount(itemToEquip.id);
          case 74:
            _beforeCount = _context4.sent;
            cc.log("[EquipDebug] \u88C5\u5907\u524D => \u89D2\u8272=" + characterName + ", \u69FD\u4F4D=" + _slotIndex + ", itemId=" + itemToEquip.id + ", \u80CC\u5305\u6570\u91CF=" + _beforeCount + ", \u69FD\u4F4D=", current && current.slots);

            // 如果该槽位原来有装备，先把旧装备还回背包
            prevItemId = current.slots[_slotIndex];
            if (!prevItemId) {
              _context4.next = 80;
              break;
            }
            _context4.next = 80;
            return _ItemDataManager.addItem(prevItemId, 1);
          case 80:
            _context4.next = 82;
            return _ItemDataManager.getItemCount(itemToEquip.id);
          case 82:
            count = _context4.sent;
            if (!(count <= 0)) {
              _context4.next = 86;
              break;
            }
            _this10._clearDragState();
            return _context4.abrupt("return");
          case 86:
            _context4.next = 88;
            return _ItemDataManager.removeItem(itemToEquip.id, 1);
          case 88:
            _context4.next = 90;
            return _EquipmentDataManager.setEquipmentSlot(characterName, _slotIndex, itemToEquip.id);
          case 90:
            ok = _context4.sent;
            if (ok) {
              _context4.next = 96;
              break;
            }
            _context4.next = 94;
            return _ItemDataManager.addItem(itemToEquip.id, 1);
          case 94:
            _this10._clearDragState();
            return _context4.abrupt("return");
          case 96:
            _context4.next = 98;
            return _EquipmentDataManager.getEquipment(characterName);
          case 98:
            _afterEquip = _context4.sent;
            _context4.next = 101;
            return _ItemDataManager.getItemCount(itemToEquip.id);
          case 101:
            _afterCount = _context4.sent;
            cc.log("[EquipDebug] \u88C5\u5907\u540E => \u89D2\u8272=" + characterName + ", \u69FD\u4F4D=" + _slotIndex + ", itemId=" + itemToEquip.id + ", \u80CC\u5305\u6570\u91CF=" + _afterCount + ", \u69FD\u4F4D=", _afterEquip && _afterEquip.slots);
            _context4.next = 105;
            return _this10._updateEquipmentBar();
          case 105:
            _context4.next = 107;
            return _this10._updateInventory();
          case 107:
            _context4.next = 109;
            return _this10._applyEquipmentBonusesToDisplay();
          case 109:
            return _context4.abrupt("return");
          case 110:
            _context4.next = 115;
            break;
          case 112:
            _context4.prev = 112;
            _context4.t0 = _context4["catch"](10);
            cc.error("[CharacterViewUI] 拖拽处理错误:", _context4.t0.message);
          case 115:
            _context4.prev = 115;
            _this10._clearDragState();
            return _context4.finish(115);
          case 118:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[10, 112, 115, 118]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxDaGFyYWN0ZXJWaWV3VUkuanMiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImF2YXRhckxpc3RDb250YWluZXIiLCJOb2RlIiwidG9vbHRpcCIsImNoYXJhY3RlckRpc3BsYXlBcmVhIiwiaW52ZW50b3J5Q29udGFpbmVyIiwiZXF1aXBtZW50Q29udGFpbmVyIiwiZXF1aXBtZW50U2xvdFByZWZhYiIsIlByZWZhYiIsIml0ZW1TbG90UHJlZmFiIiwiaXRlbVRvb2x0aXAiLCJpbnZlbnRvcnlDb2x1bW5zIiwiaW52ZW50b3J5Um93cyIsIml0ZW1TbG90U2l6ZSIsIml0ZW1TbG90U3BhY2luZyIsInN0YXRzUGFuZWwiLCJhdmF0YXJQcmVmYWIiLCJ1bml0RGF0YUNvbmZpZyIsImhlcm9JY29ucyIsIlNwcml0ZUZyYW1lIiwibW9uc3Rlckljb25zIiwiaGVyb1ByZWZhYnMiLCJtb25zdGVyUHJlZmFicyIsImF2YXRhclNwYWNpbmciLCJocExhYmVsIiwiTGFiZWwiLCJhdHRhY2tMYWJlbCIsImRlZmVuc2VMYWJlbCIsInNwZWVkTGFiZWwiLCJjcml0TGFiZWwiLCJtaXNzTGFiZWwiLCJsZXZlbExhYmVsIiwiZXhwTGFiZWwiLCJvbkxvYWQiLCJfdGhpcyIsInJlcXVpcmUiLCJfbG9hZENvbmZpZ0lmTmVlZGVkIiwiY3VycmVudERpc3BsYXlQcmVmYWIiLCJjdXJyZW50VW5pdERhdGEiLCJfaW5pdEF2YXRhcnMiLCJzY2hlZHVsZU9uY2UiLCJfaW5pdEludmVudG9yeSIsIl9pbml0RXF1aXBtZW50QmFyIiwiX3NldHVwSXRlbUljb25zIiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJfaW5pdERlZmF1bHRJdGVtcyIsImFjdGl2ZSIsIl9kcmFnU3ByaXRlIiwiX2RyYWdnaW5nSXRlbSIsIl9kcmFnZ2luZ1Nsb3QiLCJfZHJhZ2dpbmdGcm9tRXF1aXBtZW50IiwiX2RyYWdJY29uU2l6ZSIsIl9kcmFnU3RhcnRDYW52YXNQb3MiLCJjYW52YXMiLCJmaW5kIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9NT1ZFIiwiX29uR2xvYmFsVG91Y2hNb3ZlIiwiVE9VQ0hfRU5EIiwiX29uR2xvYmFsVG91Y2hFbmQiLCJUT1VDSF9DQU5DRUwiLCJfb25DYW52YXNDbGljayIsIl90aGlzMiIsIm5lZWRMb2FkIiwiaGVyb3MiLCJpY29uIiwicHJlZmFiIiwibW9uc3RlcnMiLCJsb2ciLCJpbmRleCIsIl9iaW5kQ2FudmFzQ2xpY2siLCJfdGhpczMiLCJfdGhpczQiLCJyZW1vdmVBbGxDaGlsZHJlbiIsImhlcm9Db3VudCIsImhlcm9EYXRhIiwiX2NyZWF0ZUF2YXRhciIsIm1vbnN0ZXJEYXRhIiwid2FybiIsIm9wYWNpdHkiLCJzZXRBbmNob3JQb2ludCIsInRvdGFsU2xvdHMiLCJzbG90U2l6ZSIsInNwYWNpbmciLCJ0b3RhbFdpZHRoIiwidG90YWxIZWlnaHQiLCJzZXRDb250ZW50U2l6ZSIsIm1hc2siLCJnZXRDb21wb25lbnQiLCJNYXNrIiwiYWRkQ29tcG9uZW50IiwiVHlwZSIsIlJFQ1QiLCJnZXRBbmNob3JQb2ludCIsIngiLCJ5IiwibGF5b3V0IiwiTGF5b3V0IiwiZW5hYmxlZCIsInNsb3ROb2RlIiwiaW5zdGFudGlhdGUiLCJzZXRTY2FsZSIsImFkZENoaWxkIiwiX2luaXRJdGVtU2xvdCIsImNyZWF0ZWRTbG90cyIsImNoaWxkcmVuIiwiX21hbnVhbExheW91dEludmVudG9yeSIsImNvbnRhaW5lclBvcyIsImdldFBvc2l0aW9uIiwiY29udGFpbmVyV29ybGRQb3MiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJ2MiIsInRvRml4ZWQiLCJnZXRDb250ZW50U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiX3RoaXM1Iiwic2NhbGUiLCJzbG90cyIsImNvbnRhaW5lclNpemUiLCJhbmNob3JQb2ludCIsImRpc3BsYXlTaXplIiwic3RhcnRYIiwic3RhcnRZIiwicm93IiwiTWF0aCIsImZsb29yIiwiY29sIiwic2V0UG9zaXRpb24iLCJqIiwiY2hpbGQiLCJfZW5zdXJlU2xvdFZpc2libGUiLCJfYWRkU2xvdEJvcmRlciIsInNsb3RQb3MiLCJzbG90SGFsZlNpemUiLCJjb250YWluZXJIYWxmV2lkdGgiLCJjb250YWluZXJIYWxmSGVpZ2h0IiwiaXNJblJhbmdlIiwiaGFzVmlzaWJsZVNwcml0ZSIsInNwcml0ZU5vZGUiLCJtYWluU3ByaXRlIiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJjaGlsZFNwcml0ZSIsImJnTm9kZSIsImdldENoaWxkQnlOYW1lIiwiZ3JhcGhpY3MiLCJHcmFwaGljcyIsImZpbGxDb2xvciIsIkNvbG9yIiwicmVjdCIsImZpbGwiLCJib3JkZXJOb2RlIiwiZGVzdHJveSIsInN0cm9rZUNvbG9yIiwibGluZVdpZHRoIiwiaGFsZlNpemUiLCJzdHJva2UiLCJ6SW5kZXgiLCJpY29uTm9kZSIsImNvdW50TGFiZWwiLCJzcHJpdGUiLCJsYWJlbCIsInN0cmluZyIsIl9zbG90SW5kZXgiLCJfaXNFbXB0eSIsIl91cGRhdGVJbnZlbnRvcnkiLCJfdGhpczYiLCJfY2FsbGVlMiIsIml0ZW1zIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiX2dldENoYXJhY3Rlckl0ZW1zIiwiX3NldEl0ZW1TbG90Iiwib2ZmIiwiTU9VU0VfRE9XTiIsIk1PVVNFX1VQIiwiVE9VQ0hfU1RBUlQiLCJfdG91Y2hTdGFydFRpbWUiLCJzbG90Q291bnQiLCJJdGVtQ29uZmlnIiwic2xvdFR5cGVzIiwiRVFVSVBNRU5UX1NMT1RTIiwiX3Nsb3RUeXBlIiwiX2lzRXF1aXBtZW50IiwiX2xheW91dEVxdWlwbWVudEJhciIsIl90aGlzNyIsInNwIiwic2l6ZU1vZGUiLCJTaXplTW9kZSIsIkNVU1RPTSIsIl91cGRhdGVFcXVpcG1lbnRCYXIiLCJfdGhpczgiLCJfY2FsbGVlMyIsIkVxdWlwbWVudERhdGFNYW5hZ2VyIiwiX3lpZWxkJEVxdWlwbWVudERhdGFNIiwiZXF1aXBtZW50U2xvdHMiLCJzbG90Tm9kZXMiLCJpdGVtSWQiLCJjb25maWciLCJpdGVtRGF0YSIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImdldEVxdWlwbWVudCIsImdldEl0ZW1CeUlkIiwiaWQiLCJjb3VudCIsIl9zZXRFcXVpcG1lbnRTbG90IiwiX2l0ZW1EYXRhIiwic2xvdEluZGV4IiwiX3RoaXM5IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIl9nZXRTbG90SWNvbkRpc3BsYXlTaXplIiwiaXNWYWxpZCIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwid29ybGRQb3MiLCJfZ2V0Tm9kZVVuZGVyVG91Y2giLCJldmVudCIsInRvdWNoIiwidWlQb3MiLCJnZXRVSUxvY2F0aW9uIiwic2NyZWVuUG9zIiwiZ2V0TG9jYXRpb24iLCJDYW1lcmEiLCJjYW1lcmEiLCJnZXRTY3JlZW5Ub1dvcmxkUG9pbnQiLCJzbG90IiwicGFyZW50IiwibG9jYWxQb3MiLCJnZXRCb3VuZGluZ0JveCIsImNvbnRhaW5zIiwibm9kZSIsImlzRXF1aXBtZW50Iiwic2xvdFR5cGUiLCJjYW52YXNQb3MiLCJEUkFHX1NUQVJUX0RJU1RBTkNFIiwiZHgiLCJkeSIsIml0ZW0iLCJzb3VyY2VTbG90IiwiaWNvblNpemUiLCJzdGFydFBvcyIsIl90aGlzMTAiLCJfY2FsbGVlNCIsIndhc0RyYWdnaW5nIiwiaGFkRHJhZ1N0YXRlIiwidGFyZ2V0IiwiY2hhcmFjdGVyTmFtZSIsIkl0ZW1EYXRhTWFuYWdlciIsImJlZm9yZUVxdWlwIiwiYmVmb3JlQ291bnQiLCJhZnRlckVxdWlwIiwiYWZ0ZXJDb3VudCIsImNmZyIsIml0ZW1Ub0VxdWlwIiwiX0VxdWlwbWVudERhdGFNYW5hZ2VyIiwiX0l0ZW1EYXRhTWFuYWdlciIsImN1cnJlbnQiLCJfYmVmb3JlQ291bnQiLCJwcmV2SXRlbUlkIiwib2siLCJfYWZ0ZXJFcXVpcCIsIl9hZnRlckNvdW50IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiX2NsZWFyRHJhZ1N0YXRlIiwiZ2V0SXRlbUNvdW50IiwidW5lcXVpcFNsb3QiLCJhZGRJdGVtIiwiX2FwcGx5RXF1aXBtZW50Qm9udXNlc1RvRGlzcGxheSIsImVxdWlwbWVudFNsb3QiLCJzb21lIiwiaWR4IiwicmVtb3ZlSXRlbSIsInNldEVxdWlwbWVudFNsb3QiLCJ0MCIsIm1lc3NhZ2UiLCJmYWxsYmFjayIsImdldEJvdW5kaW5nQm94VG9Xb3JsZCIsInJhdyIsInciLCJoIiwic3giLCJzY2FsZVgiLCJzeSIsInNjYWxlWSIsIl90aGlzMTEiLCJfY2FsbGVlNSIsInN0YXRzIiwiYm9udXNlcyIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsImFwcGx5RXF1aXBtZW50Qm9udXNlcyIsIl9nZXRFcXVpcG1lbnRCb251c2VzIiwiX3Nob3dTdGF0c1BhbmVsIiwiX3RoaXMxMiIsInRvU3RyaW5nIiwiX3RvdWNoU3RhcnRQb3MiLCJEYXRlIiwibm93IiwicHJlc3NUaW1lIiwiTE9OR19QUkVTU19USU1FIiwiX3Nob3dJdGVtVG9vbHRpcE9uVG91Y2giLCJfb25JdGVtU2xvdENsaWNrIiwiX3NldHVwSXRlbVRvb2x0aXAiLCJ0b29sdGlwQ29tcG9uZW50IiwiYnV0dG9uIiwiZ2V0QnV0dG9uIiwiRXZlbnQiLCJFdmVudE1vdXNlIiwiQlVUVE9OX1JJR0hUIiwicHJldmVudERlZmF1bHQiLCJ0b29sdGlwRGF0YSIsInNob3dJdGVtSW5mbyIsImhpZGVJdGVtSW5mbyIsIl90aGlzMTMiLCJfY2FsbGVlNiIsIkl0ZW1TeXN0ZW0iLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJ1c2VJdGVtIiwic3VjY2VzcyIsInNraWxsTmFtZSIsInNjZW5lIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImljb25TZXR0ZXIiLCJnZXRDb21wb25lbnRJbkNoaWxkcmVuIiwiX3RoaXMxNCIsIl9jYWxsZWU3IiwiSU5JVF9GTEFHX0tFWSIsImhhc0luaXRpYWxpemVkIiwiY3VycmVudENvdW50IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3Iiwic3lzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJfY2FsbGVlOCIsIml0ZW1zV2l0aENvbmZpZyIsIl9jYWxsZWU4JCIsIl9jb250ZXh0OCIsImdldEFsbEl0ZW1zV2l0aENvbmZpZyIsImZpbHRlciIsIm1hcCIsInVuaXREYXRhIiwidGVhbSIsIl90aGlzMTUiLCJhdmF0YXJOb2RlIiwiX3VuaXREYXRhIiwiYXNzaWduIiwiX3RlYW0iLCJhdmF0YXJDb21wIiwiaW5pdCIsIm5vZGVVbml0RGF0YSIsIm5vZGVUZWFtIiwiX29uQXZhdGFyQ2xpY2siLCJfdGhpczE2IiwiX2NhbGxlZTkiLCJfY2FsbGVlOSQiLCJfY29udGV4dDkiLCJfZGlzcGxheUNoYXJhY3RlclByZWZhYiIsIl90aGlzMTciLCJfY2FsbGVlMTAiLCJwcmVmYWJJbnN0YW5jZSIsIl9jYWxsZWUxMCQiLCJfY29udGV4dDEwIiwiX29yaWdpbmFsQ2hhcmFjdGVyTmFtZSIsIl9pbml0Q2hhcmFjdGVyU3RhdHMiLCJfaXNDaGFyYWN0ZXJQcmVmYWIiLCJfdGhpczE4IiwiX2NhbGxlZTExIiwiQ2hhcmFjdGVyRGF0YU1hbmFnZXIiLCJzYXZlZERhdGEiLCJfY2FsbGVlMTEkIiwiX2NvbnRleHQxMSIsImxvYWRDaGFyYWN0ZXJMZXZlbCIsImJhc2VIcCIsImhwIiwiYmFzZUF0dGFjayIsImF0dGFjayIsImJhc2VEZWZlbnNlIiwiZGVmZW5zZSIsImJhc2VTcGVlZCIsInNwZWVkIiwiYmFzZUNyaXQiLCJjcml0IiwiYmFzZU1pc3MiLCJtaXNzIiwibGV2ZWwiLCJleHAiLCJfYXBwbHlMZXZlbEJvbnVzIiwibWF4SHAiLCJ1cGRhdGVIZWFsdGhCYXIiLCJ1cGRhdGVFeHBCYXIiLCJ1cGRhdGVSYWdlQmFyIiwicmFnZSIsIl9jYWxsZWUxMiIsIl95aWVsZCRFcXVpcG1lbnREYXRhTTIiLCJfaXRlcmF0b3IiLCJfc3RlcCIsInQiLCJ2IiwiX2NhbGxlZTEyJCIsIl9jb250ZXh0MTIiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlIiwiZWZmZWN0VHlwZSIsIlN0cmluZyIsInRvTG93ZXJDYXNlIiwiZWZmZWN0VmFsdWUiLCJMZXZlbENvbmZpZyIsImN1cnJlbnRMZXZlbEV4cCIsImdldEV4cEZvckxldmVsIiwibmV4dExldmVsRXhwIiwiZXhwSW5DdXJyZW50TGV2ZWwiLCJleHBUb05leHQiLCJkaXNwbGF5UG9zIiwidHdlZW4iLCJ0byIsImVhc2luZyIsInN0YXJ0IiwiX3RoaXMxOSIsImlzU3RhdHNQYW5lbCIsIm9uRGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0EscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLE9BQUEsU0FBQUEsT0FBQSxPQUFBQyxFQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxNQUFBLEdBQUFILEVBQUEsQ0FBQUksY0FBQSxFQUFBQyxjQUFBLEdBQUFKLE1BQUEsQ0FBQUksY0FBQSxjQUFBQyxHQUFBLEVBQUFDLEdBQUEsRUFBQUMsSUFBQSxJQUFBRixHQUFBLENBQUFDLEdBQUEsSUFBQUMsSUFBQSxDQUFBQyxLQUFBLEtBQUFDLE9BQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxjQUFBLEdBQUFGLE9BQUEsQ0FBQUcsUUFBQSxrQkFBQUMsbUJBQUEsR0FBQUosT0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxpQkFBQSxHQUFBTixPQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFaLEdBQUEsRUFBQUMsR0FBQSxFQUFBRSxLQUFBLFdBQUFSLE1BQUEsQ0FBQUksY0FBQSxDQUFBQyxHQUFBLEVBQUFDLEdBQUEsSUFBQUUsS0FBQSxFQUFBQSxLQUFBLEVBQUFVLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFmLEdBQUEsQ0FBQUMsR0FBQSxXQUFBVyxNQUFBLG1CQUFBSSxHQUFBLElBQUFKLE1BQUEsWUFBQUEsT0FBQVosR0FBQSxFQUFBQyxHQUFBLEVBQUFFLEtBQUEsV0FBQUgsR0FBQSxDQUFBQyxHQUFBLElBQUFFLEtBQUEsZ0JBQUFjLEtBQUFDLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsUUFBQUMsY0FBQSxHQUFBSCxPQUFBLElBQUFBLE9BQUEsQ0FBQXZCLFNBQUEsWUFBQTJCLFNBQUEsR0FBQUosT0FBQSxHQUFBSSxTQUFBLEVBQUFD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QUFDO1FBQUVzQyxLQUFLLEVBQUU7TUFBSSxDQUFDLENBQUMsQ0FDbkN0TyxJQUFJLENBQUMsWUFBTTtRQUNSd2hCLE9BQUksQ0FBQzNaLFVBQVUsQ0FBQ2lDLE1BQU0sR0FBRyxLQUFLO01BQ2xDLENBQUMsQ0FBQyxDQUNEeVgsS0FBSyxFQUFFO01BQ1o1YSxFQUFFLENBQUMwRSxHQUFHLDBEQUE0QjtJQUN0QztFQUNKLENBQUM7RUFFRHFXLFNBQVMsV0FBQUEsVUFBQSxFQUFHO0lBQ1I7SUFDQSxJQUFNclgsTUFBTSxHQUFHMUQsRUFBRSxDQUFDMkQsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNoQyxJQUFJRCxNQUFNLEVBQUU7TUFDUkEsTUFBTSxDQUFDMEgsR0FBRyxDQUFDcEwsRUFBRSxDQUFDSyxJQUFJLENBQUN3RCxTQUFTLENBQUNHLFNBQVMsRUFBRSxJQUFJLENBQUNHLGNBQWMsRUFBRSxJQUFJLENBQUM7SUFDdEU7RUFDSjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDkurrnianlsZ7mgKfmn6XnnItVSee7hOS7tlxuICog566h55CG5aS05YOP5YiX6KGo44CB5Lq654mp5Y6f5Z6L5pi+56S644CB5bGe5oCn6Z2i5p2/XG4gKi9cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIOW3puS+p+WktOWDj+WIl+ihqOWuueWZqFxuICAgICAgICBhdmF0YXJMaXN0Q29udGFpbmVyOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5bem5L6n5aS05YOP5YiX6KGo5a655Zmo6IqC54K5XCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDkuK3pl7Tkurrnianljp/lnovmmL7npLrljLrln59cbiAgICAgICAgY2hhcmFjdGVyRGlzcGxheUFyZWE6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLkuK3pl7Tkurrnianljp/lnovmmL7npLrljLrln5/oioLngrlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOmBk+WFt+agj+WuueWZqO+8iOaYvuekuuWcqOS6uueJqeWOn+Wei+S4i+aWue+8iVxuICAgICAgICBpbnZlbnRvcnlDb250YWluZXI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLpgZPlhbfmoI/lrrnlmajoioLngrnvvIjnvZHmoLzluIPlsYDvvIzmmL7npLrlnKjkurrnianljp/lnovkuIvmlrnvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOijheWkh+agj+WuueWZqO+8iDPkuKrmoLzlrZDvvIzlj6/mlL7lnKjpgZPlhbfmoI/kuIrmlrnmiJbkuIvmlrnvvIlcbiAgICAgICAgZXF1aXBtZW50Q29udGFpbmVyOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6KOF5aSH5qCP5a655Zmo6IqC54K577yIM+S4quagvOWtkO+8muWmguatpuWZqC/pmLLlhbcv6aWw5ZOB77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDoo4XlpIfmoLzlrZBQcmVmYWLvvIjkuI3loavliJnkvb/nlKggaXRlbVNsb3RQcmVmYWLvvIlcbiAgICAgICAgZXF1aXBtZW50U2xvdFByZWZhYjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6KOF5aSH5qC85a2QUHJlZmFi77yM55WZ56m65YiZ5L2/55So6YGT5YW35qC85a2QUHJlZmFiXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDpgZPlhbfpoblQcmVmYWLvvIjnlKjkuo7liJvlu7rpgZPlhbfmoLzlrZDvvIlcbiAgICAgICAgaXRlbVNsb3RQcmVmYWI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXG4gICAgICAgICAgICB0b29sdGlwOiBcIumBk+WFt+agvOWtkFByZWZhYu+8iOWMheWQq+Wbvuagh+WSjOaVsOmHj+agh+etvu+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g6YGT5YW35L+h5oGv5by556qX57uE5Lu277yI5Y+v6YCJ77yJXG4gICAgICAgIGl0ZW1Ub29sdGlwOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6YGT5YW35L+h5oGv5by556qX6IqC54K577yI5YyF5ZCrSXRlbVRvb2x0aXDnu4Tku7bvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOmBk+WFt+agj+e9keagvOmFjee9rlxuICAgICAgICBpbnZlbnRvcnlDb2x1bW5zOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiA2LFxuICAgICAgICAgICAgdG9vbHRpcDogXCLpgZPlhbfmoI/liJfmlbDvvIjmr4/ooYzmmL7npLrnmoTpgZPlhbfmlbDph4/vvIlcIlxuICAgICAgICB9LFxuICAgICAgICBpbnZlbnRvcnlSb3dzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiA0LFxuICAgICAgICAgICAgdG9vbHRpcDogXCLpgZPlhbfmoI/ooYzmlbBcIlxuICAgICAgICB9LFxuICAgICAgICBpdGVtU2xvdFNpemU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDgwLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLpgZPlhbfmoLzlrZDlpKflsI/vvIjlrr3pq5jvvIlcIlxuICAgICAgICB9LFxuICAgICAgICBpdGVtU2xvdFNwYWNpbmc6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAsXG4gICAgICAgICAgICB0b29sdGlwOiBcIumBk+WFt+agvOWtkOS5i+mXtOeahOmXtOi3nVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5bGe5oCn6Z2i5p2/77yI5Y2K6YCP5piO6IOM5pmv77yJXG4gICAgICAgIHN0YXRzUGFuZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLlsZ7mgKfpnaLmnb/oioLngrnvvIjljYrpgI/mmI7og4zmma/vvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOWktOWDj1ByZWZhYu+8iOeUqOS6juWKqOaAgeWIm+W7uuWktOWDj++8iVxuICAgICAgICBhdmF0YXJQcmVmYWI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWktOWDj1ByZWZhYu+8iOWMheWQq+WktOWDj+WbvueJh++8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5Y2V5L2N5pWw5o2u6YWN572uXG4gICAgICAgIHVuaXREYXRhQ29uZmlnOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLljZXkvY3mlbDmja7phY3nva7vvIjlj6/pgInvvIzlpoLmnpzkuI3orr7nva7liJnku45Vbml0RGF0YUNvbmZpZ+iOt+WPlu+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5aSH55So6LWE5rqQ77ya6Iux6ZuE5aS05YOP6LWE5rqQ5YiX6KGo77yI5LuF5ZyoVW5pdERhdGFDb25maWfkuK3otYTmupDkuLrnqbrml7bkvb/nlKjvvIlcbiAgICAgICAgaGVyb0ljb25zOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5TcHJpdGVGcmFtZV0sXG4gICAgICAgICAgICB0b29sdGlwOiBcIuiLsembhOWktOWDj+i1hOa6kOWIl+ihqO+8iOWkh+eUqO+8jOS7heWcqFNlbGVjdFNjZW5l5pyq5Yqg6L295pe25L2/55So77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDlpIfnlKjotYTmupDvvJrmgKrnianlpLTlg4/otYTmupDliJfooajvvIjku4XlnKhVbml0RGF0YUNvbmZpZ+S4rei1hOa6kOS4uuepuuaXtuS9v+eUqO+8iVxuICAgICAgICBtb25zdGVySWNvbnM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW2NjLlNwcml0ZUZyYW1lXSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5oCq54mp5aS05YOP6LWE5rqQ5YiX6KGo77yI5aSH55So77yM5LuF5ZyoU2VsZWN0U2NlbmXmnKrliqDovb3ml7bkvb/nlKjvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOWkh+eUqOi1hOa6kO+8muiLsembhFByZWZhYuWIl+ihqO+8iOS7heWcqFVuaXREYXRhQ29uZmln5Lit6LWE5rqQ5Li656m65pe25L2/55So77yJXG4gICAgICAgIGhlcm9QcmVmYWJzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5QcmVmYWJdLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLoi7Hpm4RQcmVmYWLliJfooajvvIjlpIfnlKjvvIzku4XlnKhTZWxlY3RTY2VuZeacquWKoOi9veaXtuS9v+eUqO+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5aSH55So6LWE5rqQ77ya5oCq54mpUHJlZmFi5YiX6KGo77yI5LuF5ZyoVW5pdERhdGFDb25maWfkuK3otYTmupDkuLrnqbrml7bkvb/nlKjvvIlcbiAgICAgICAgbW9uc3RlclByZWZhYnM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW2NjLlByZWZhYl0sXG4gICAgICAgICAgICB0b29sdGlwOiBcIuaAqueJqVByZWZhYuWIl+ihqO+8iOWkh+eUqO+8jOS7heWcqFNlbGVjdFNjZW5l5pyq5Yqg6L295pe25L2/55So77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDlpLTlg4/pl7Tot51cbiAgICAgICAgYXZhdGFyU3BhY2luZzoge1xuICAgICAgICAgICAgZGVmYXVsdDogMTAwLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLlpLTlg4/kuYvpl7TnmoTpl7Tot51cIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOWxnuaAp+mdouadv+S4reeahOWxnuaAp+agh+etvu+8iOmcgOimgeWcqOe8lui+keWZqOS4ree7keWumu+8iVxuICAgICAgICBocExhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgICAgICB0b29sdGlwOiBcIueUn+WRveWAvOagh+etvlwiXG4gICAgICAgIH0sXG4gICAgICAgIGF0dGFja0xhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuaUu+WHu+WKm+agh+etvlwiXG4gICAgICAgIH0sXG4gICAgICAgIGRlZmVuc2VMYWJlbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLpmLLlvqHlipvmoIfnrb5cIlxuICAgICAgICB9LFxuICAgICAgICBzcGVlZExhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgICAgICB0b29sdGlwOiBcIumAn+W6puagh+etvlwiXG4gICAgICAgIH0sXG4gICAgICAgIGNyaXRMYWJlbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmmrTlh7vnjofmoIfnrb5cIlxuICAgICAgICB9LFxuICAgICAgICBtaXNzTGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6Zeq6YG/546H5qCH562+XCJcbiAgICAgICAgfSxcbiAgICAgICAgbGV2ZWxMYWJlbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLnrYnnuqfmoIfnrb5cIlxuICAgICAgICB9LFxuICAgICAgICBleHBMYWJlbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLnu4/pqozlgLzmoIfnrb5cIlxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8g6I635Y+W5Y2V5L2N5pWw5o2u6YWN572u77yI5LyY5YWI5L2/55SoU2VsZWN0U2NlbmXkuK3lt7Lorr7nva7lpb3nmoTotYTmupDvvIlcbiAgICAgICAgaWYgKCF0aGlzLnVuaXREYXRhQ29uZmlnKSB7XG4gICAgICAgICAgICB0aGlzLnVuaXREYXRhQ29uZmlnID0gcmVxdWlyZShcIlVuaXREYXRhQ29uZmlnXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5aaC5p6cVW5pdERhdGFDb25maWfkuK3nmoTotYTmupDkuLrnqbrvvIzku47lnLrmma/phY3nva7kuK3liqDovb3vvIjlpIfnlKjmlrnmoYjvvIlcbiAgICAgICAgdGhpcy5fbG9hZENvbmZpZ0lmTmVlZGVkKCk7XG5cbiAgICAgICAgLy8g5b2T5YmN5pi+56S655qE5Lq654mp5Y6f5Z6LXG4gICAgICAgIHRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIgPSBudWxsO1xuICAgICAgICAvLyDlvZPliY3pgInkuK3nmoTljZXkvY3mlbDmja5cbiAgICAgICAgdGhpcy5jdXJyZW50VW5pdERhdGEgPSBudWxsO1xuXG4gICAgICAgIC8vIOWIneWni+WMllVJXG4gICAgICAgIHRoaXMuX2luaXRBdmF0YXJzKCk7XG5cbiAgICAgICAgLy8g5Yid5aeL5YyW6YGT5YW35qCP77yI5bu26L+f5LiA5bin77yM56Gu5L+d5a655Zmo6IqC54K55bey5a6M5YWo5Yid5aeL5YyW77yJXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRJbnZlbnRvcnkoKTtcbiAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgLy8g5Yid5aeL5YyW6KOF5aSH5qCP77yIM+S4quagvOWtkO+8iVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9pbml0RXF1aXBtZW50QmFyKCk7XG4gICAgICAgIH0sIDAuMDUpO1xuXG4gICAgICAgIC8vIOiuvue9rumBk+WFt+Wbvuagh++8iOWmguaenEl0ZW1JY29uU2V0dGVy57uE5Lu25bey6K6+572u77yJXG4gICAgICAgIHRoaXMuX3NldHVwSXRlbUljb25zKCk7XG5cbiAgICAgICAgLy8g5Yid5aeL5YyW6YGT5YW35pWw5o2u77yI5re75YqgNeS4quWNh+e6p+iNr+awtOeUqOS6jua1i+ivle+8iVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9pbml0RGVmYXVsdEl0ZW1zKCk7XG4gICAgICAgIH0sIDAuNSk7XG5cbiAgICAgICAgLy8g6ZqQ6JeP5bGe5oCn6Z2i5p2/XG4gICAgICAgIGlmICh0aGlzLnN0YXRzUGFuZWwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdHNQYW5lbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaLluaLveeKtuaAge+8iOijheWkh+S7jumBk+WFt+agj+aLluWIsOijheWkh+agjyAvIOS7juijheWkh+agj+aLluWbnu+8iVxuICAgICAgICB0aGlzLl9kcmFnU3ByaXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmdJdGVtID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmdTbG90ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmdGcm9tRXF1aXBtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZHJhZ0ljb25TaXplID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZHJhZ1N0YXJ0Q2FudmFzUG9zID0gbnVsbDsgLy8g5ouW5ou95byA5aeL5pe25Y6f5aeL5Zu+5qCH5ZyoIENhbnZhcyDkuIvnmoTlnZDmoIfvvIjnlKjkuo7ku47ljp/kvY3nva7igJzmi73lh7rmnaXigJ3vvIlcblxuICAgICAgICAvLyDnu5Hlrprngrnlh7vkuovku7bvvIjngrnlh7vku7vmhI/lnLDmlrnlhbPpl63lsZ7mgKfpnaLmnb/vvIlcbiAgICAgICAgLy8g5L2/55SoQ2FudmFz5oiW5Zy65pmv5qC56IqC54K55p2l5o2V6I6354K55Ye75LqL5Lu2XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XG4gICAgICAgIGlmIChjYW52YXMpIHtcbiAgICAgICAgICAgIC8vIOWFiOe7keWumuaLluaLveebuOWFs+S6i+S7tu+8iOS8mOWFiOe6p+abtOmrmO+8iVxuICAgICAgICAgICAgY2FudmFzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMuX29uR2xvYmFsVG91Y2hNb3ZlLCB0aGlzKTtcbiAgICAgICAgICAgIGNhbnZhcy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX29uR2xvYmFsVG91Y2hFbmQsIHRoaXMpO1xuICAgICAgICAgICAgY2FudmFzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5fb25HbG9iYWxUb3VjaEVuZCwgdGhpcyk7XG4gICAgICAgICAgICAvLyDngrnlh7vlhbPpl63pnaLmnb/kuovku7bvvIjlnKjmi5bmi73kuovku7bkuYvlkI7vvIzpgb/lhY3lhrLnqoHvvIlcbiAgICAgICAgICAgIGNhbnZhcy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX29uQ2FudmFzQ2xpY2ssIHRoaXMpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWmguaenFVuaXREYXRhQ29uZmln5Lit55qE6LWE5rqQ5Li656m677yM5LuO5Zy65pmv6YWN572u5Lit5Yqg6L2977yI5aSH55So5pa55qGI77yJXG4gICAgICog5LyY5YWI5L2/55SoU2VsZWN0U2NlbmXkuK3lt7Lorr7nva7lpb3nmoTotYTmupDvvIzlpoLmnpzkuLrnqbrmiY3kvb/nlKjlnLrmma/phY3nva5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9sb2FkQ29uZmlnSWZOZWVkZWQoKSB7XG4gICAgICAgIGxldCBuZWVkTG9hZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIOajgOafpeaYr+WQpuaciei1hOa6kOS4uuepulxuICAgICAgICBpZiAodGhpcy51bml0RGF0YUNvbmZpZyAmJiB0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudW5pdERhdGFDb25maWcuaGVyb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudW5pdERhdGFDb25maWcuaGVyb3NbaV0uaWNvbiB8fCAhdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpXS5wcmVmYWIpIHtcbiAgICAgICAgICAgICAgICAgICAgbmVlZExvYWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5lZWRMb2FkICYmIHRoaXMudW5pdERhdGFDb25maWcgJiYgdGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVycykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzW2ldLmljb24gfHwgIXRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnNbaV0ucHJlZmFiKSB7XG4gICAgICAgICAgICAgICAgICAgIG5lZWRMb2FkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5aaC5p6c5pyJ6LWE5rqQ5Li656m677yM5LuO5Zy65pmv6YWN572u5Lit5Yqg6L29XG4gICAgICAgIGlmIChuZWVkTG9hZCkge1xuICAgICAgICAgICAgY2MubG9nKFwiW0NoYXJhY3RlclZpZXdVSV0g5qOA5rWL5YiwVW5pdERhdGFDb25maWfkuK3otYTmupDkuLrnqbrvvIzku47lnLrmma/phY3nva7liqDovb3vvIjlpIfnlKjmlrnmoYjvvIlcIik7XG5cbiAgICAgICAgICAgIC8vIOW6lOeUqOiLsembhOWktOWDj+WSjFByZWZhYumFjee9ru+8iOS7heWcqFVuaXREYXRhQ29uZmln5Lit6LWE5rqQ5Li656m65pe26K6+572u77yJXG4gICAgICAgICAgICBpZiAodGhpcy5oZXJvSWNvbnMgJiYgdGhpcy5oZXJvSWNvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVyb0ljb25zLmZvckVhY2goKGljb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zICYmIHRoaXMudW5pdERhdGFDb25maWcuaGVyb3NbaW5kZXhdICYmIGljb24gJiYgIXRoaXMudW5pdERhdGFDb25maWcuaGVyb3NbaW5kZXhdLmljb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5pdERhdGFDb25maWcuaGVyb3NbaW5kZXhdLmljb24gPSBpY29uO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDku47lnLrmma/phY3nva7orr7nva7oi7Hpm4TlpLTlg486ICR7dGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpbmRleF0ubmFtZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5oZXJvUHJlZmFicyAmJiB0aGlzLmhlcm9QcmVmYWJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlcm9QcmVmYWJzLmZvckVhY2goKHByZWZhYiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudW5pdERhdGFDb25maWcuaGVyb3MgJiYgdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpbmRleF0gJiYgcHJlZmFiICYmICF0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zW2luZGV4XS5wcmVmYWIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5pdERhdGFDb25maWcuaGVyb3NbaW5kZXhdLnByZWZhYiA9IHByZWZhYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5LuO5Zy65pmv6YWN572u6K6+572u6Iux6ZuEUHJlZmFiOiAke3RoaXMudW5pdERhdGFDb25maWcuaGVyb3NbaW5kZXhdLm5hbWV9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5bqU55So5oCq54mp5aS05YOP5ZKMUHJlZmFi6YWN572u77yI5LuF5ZyoVW5pdERhdGFDb25maWfkuK3otYTmupDkuLrnqbrml7borr7nva7vvIlcbiAgICAgICAgICAgIGlmICh0aGlzLm1vbnN0ZXJJY29ucyAmJiB0aGlzLm1vbnN0ZXJJY29ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb25zdGVySWNvbnMuZm9yRWFjaCgoaWNvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnMgJiYgdGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVyc1tpbmRleF0gJiYgaWNvbiAmJiAhdGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVyc1tpbmRleF0uaWNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVyc1tpbmRleF0uaWNvbiA9IGljb247XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOS7juWcuuaZr+mFjee9ruiuvue9ruaAqueJqeWktOWDjzogJHt0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzW2luZGV4XS5uYW1lfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1vbnN0ZXJQcmVmYWJzICYmIHRoaXMubW9uc3RlclByZWZhYnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9uc3RlclByZWZhYnMuZm9yRWFjaCgocHJlZmFiLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVycyAmJiB0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzW2luZGV4XSAmJiBwcmVmYWIgJiYgIXRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnNbaW5kZXhdLnByZWZhYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVyc1tpbmRleF0ucHJlZmFiID0gcHJlZmFiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDku47lnLrmma/phY3nva7orr7nva7mgKrnialQcmVmYWI6ICR7dGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVyc1tpbmRleF0ubmFtZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MubG9nKFwiW0NoYXJhY3RlclZpZXdVSV0gVW5pdERhdGFDb25maWfkuK3lt7LmnInotYTmupDvvIznm7TmjqXkvb/nlKjvvIjlj6/og73nlLFTZWxlY3RTY2VuZeiuvue9ru+8iVwiKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDnu5HlrppDYW52YXPngrnlh7vkuovku7ZcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9iaW5kQ2FudmFzQ2xpY2soKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XG4gICAgICAgIGlmIChjYW52YXMpIHtcbiAgICAgICAgICAgIGNhbnZhcy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX29uQ2FudmFzQ2xpY2ssIHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5bu26L+f57uR5a6a77yI5aaC5p6cQ2FudmFz6L+Y5pyq5Yib5bu677yJXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmluZENhbnZhc0NsaWNrKCk7XG4gICAgICAgICAgICB9LCAwLjEpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluWktOWDj+WIl+ihqFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2luaXRBdmF0YXJzKCkge1xuICAgICAgICBpZiAoIXRoaXMuYXZhdGFyTGlzdENvbnRhaW5lcikge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJbQ2hhcmFjdGVyVmlld1VJXSDmnKrorr7nva5hdmF0YXJMaXN0Q29udGFpbmVy77yM5peg5rOV5Yib5bu65aS05YOP5YiX6KGoXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmF2YXRhclByZWZhYikge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJbQ2hhcmFjdGVyVmlld1VJXSDmnKrorr7nva5hdmF0YXJQcmVmYWLvvIzml6Dms5XliJvlu7rlpLTlg49cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmuIXnqbrlrrnlmahcbiAgICAgICAgdGhpcy5hdmF0YXJMaXN0Q29udGFpbmVyLnJlbW92ZUFsbENoaWxkcmVuKCk7XG5cbiAgICAgICAgLy8g6K6h566X6Iux6ZuE5pWw6YeP77yI55So5LqO5oCq54mp5aS05YOP55qE5L2N572u5YGP56e777yJXG4gICAgICAgIGNvbnN0IGhlcm9Db3VudCA9IHRoaXMudW5pdERhdGFDb25maWcgJiYgdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvcyA/IHRoaXMudW5pdERhdGFDb25maWcuaGVyb3MubGVuZ3RoIDogMDtcblxuICAgICAgICAvLyDliJvlu7roi7Hpm4TlpLTlg49cbiAgICAgICAgaWYgKHRoaXMudW5pdERhdGFDb25maWcgJiYgdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvcykge1xuICAgICAgICAgICAgdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvcy5mb3JFYWNoKChoZXJvRGF0YSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVBdmF0YXIoaGVyb0RhdGEsIFwiaGVyb1wiLCBpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWIm+W7uuaAqueJqeWktOWDj++8iOS9jee9ruS7juiLsembhOWQjumdouW8gOWni++8iVxuICAgICAgICBpZiAodGhpcy51bml0RGF0YUNvbmZpZyAmJiB0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzLmZvckVhY2goKG1vbnN0ZXJEYXRhLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIOS9v+eUqCBoZXJvQ291bnQgKyBpbmRleCDkvZzkuLrkvY3nva7ntKLlvJXvvIzorqnmgKrnianmjpLlnKjoi7Hpm4TlkI7pnaJcbiAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVBdmF0YXIobW9uc3RlckRhdGEsIFwibW9uc3RlclwiLCBoZXJvQ291bnQgKyBpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbpgZPlhbfmoI9cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9pbml0SW52ZW50b3J5KCkge1xuICAgICAgICBpZiAoIXRoaXMuaW52ZW50b3J5Q29udGFpbmVyKSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiW0NoYXJhY3RlclZpZXdVSV0g5pyq6K6+572uaW52ZW50b3J5Q29udGFpbmVy77yM6Lez6L+H6YGT5YW35qCP5Yid5aeL5YyWXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLml0ZW1TbG90UHJlZmFiKSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiW0NoYXJhY3RlclZpZXdVSV0g5pyq6K6+572uaXRlbVNsb3RQcmVmYWLvvIzot7Pov4fpgZPlhbfmoI/liJ3lp4vljJZcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlvLrliLborr7nva7ooYzliJfmlbDvvIjnoa7kv53kvb/nlKjmlrDnmoTlgLzvvIlcbiAgICAgICAgaWYgKHRoaXMuaW52ZW50b3J5Q29sdW1ucyAhPT0gNikge1xuICAgICAgICAgICAgdGhpcy5pbnZlbnRvcnlDb2x1bW5zID0gNjtcbiAgICAgICAgICAgIGNjLmxvZyhcIltDaGFyYWN0ZXJWaWV3VUldIOW8uuWItuiuvue9ruWIl+aVsOS4ujZcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaW52ZW50b3J5Um93cyAhPT0gNCkge1xuICAgICAgICAgICAgdGhpcy5pbnZlbnRvcnlSb3dzID0gNDtcbiAgICAgICAgICAgIGNjLmxvZyhcIltDaGFyYWN0ZXJWaWV3VUldIOW8uuWItuiuvue9ruihjOaVsOS4ujRcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmuIXnqbrlrrnlmahcbiAgICAgICAgdGhpcy5pbnZlbnRvcnlDb250YWluZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcblxuICAgICAgICAvLyDnoa7kv53lrrnlmajlj6/op4FcbiAgICAgICAgdGhpcy5pbnZlbnRvcnlDb250YWluZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbnZlbnRvcnlDb250YWluZXIub3BhY2l0eSA9IDI1NTtcblxuICAgICAgICAvLyDorr7nva7lrrnlmajplJrngrnkuLrlsYXkuK3vvIgwLjUsIDAuNe+8ie+8jOi/meagt+S9jee9ruiuoeeul+abtOeugOWNlVxuICAgICAgICB0aGlzLmludmVudG9yeUNvbnRhaW5lci5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG5cbiAgICAgICAgLy8g6K6h566X6YGT5YW35qCP5oC75qC85a2Q5pWw5ZKM5a655Zmo5aSn5bCPXG4gICAgICAgIGNvbnN0IHRvdGFsU2xvdHMgPSB0aGlzLmludmVudG9yeUNvbHVtbnMgKiB0aGlzLmludmVudG9yeVJvd3M7XG4gICAgICAgIGNvbnN0IHNsb3RTaXplID0gdGhpcy5pdGVtU2xvdFNpemUgfHwgODA7XG4gICAgICAgIGNvbnN0IHNwYWNpbmcgPSB0aGlzLml0ZW1TbG90U3BhY2luZyB8fCAwOyAvLyDpl7TpmpTmlLnkuLowXG5cbiAgICAgICAgLy8g5YWI6K6h566X5bm26K6+572u5a655Zmo5aSn5bCP77yI5b+F6aG75Zyo5re75Yqg5a2Q6IqC54K55LmL5YmN77yJXG4gICAgICAgIGNvbnN0IHRvdGFsV2lkdGggPSAodGhpcy5pbnZlbnRvcnlDb2x1bW5zICogc2xvdFNpemUpICsgKCh0aGlzLmludmVudG9yeUNvbHVtbnMgLSAxKSAqIHNwYWNpbmcpO1xuICAgICAgICBjb25zdCB0b3RhbEhlaWdodCA9ICh0aGlzLmludmVudG9yeVJvd3MgKiBzbG90U2l6ZSkgKyAoKHRoaXMuaW52ZW50b3J5Um93cyAtIDEpICogc3BhY2luZyk7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5Q29udGFpbmVyLnNldENvbnRlbnRTaXplKHRvdGFsV2lkdGgsIHRvdGFsSGVpZ2h0KTtcblxuICAgICAgICAvLyDmt7vliqBNYXNr57uE5Lu277yM6KOB5Ymq6LaF5Ye66IyD5Zu055qE5qC85a2QXG4gICAgICAgIGxldCBtYXNrID0gdGhpcy5pbnZlbnRvcnlDb250YWluZXIuZ2V0Q29tcG9uZW50KGNjLk1hc2spO1xuICAgICAgICBpZiAoIW1hc2spIHtcbiAgICAgICAgICAgIG1hc2sgPSB0aGlzLmludmVudG9yeUNvbnRhaW5lci5hZGRDb21wb25lbnQoY2MuTWFzayk7XG4gICAgICAgICAgICBtYXNrLnR5cGUgPSBjYy5NYXNrLlR5cGUuUkVDVDsgLy8g55+p5b2i6KOB5YmqXG4gICAgICAgICAgICBjYy5sb2coXCJbQ2hhcmFjdGVyVmlld1VJXSDoh6rliqjmt7vliqBNYXNr57uE5Lu25Yiw6YGT5YW35qCP5a655Zmo77yI55So5LqO6KOB5Ymq6LaF5Ye66IyD5Zu055qE5qC85a2Q77yJXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDpgZPlhbfmoI/lrrnlmajlpKflsI86ICR7dG90YWxXaWR0aH0geCAke3RvdGFsSGVpZ2h0fSwg5qC85a2Q5pWwOiAke3RvdGFsU2xvdHN9LCDplJrngrk6ICgke3RoaXMuaW52ZW50b3J5Q29udGFpbmVyLmdldEFuY2hvclBvaW50KCkueH0sICR7dGhpcy5pbnZlbnRvcnlDb250YWluZXIuZ2V0QW5jaG9yUG9pbnQoKS55fSlgKTtcblxuICAgICAgICAvLyDmlrnlvI/kuIDvvJrkvb/nlKhMYXlvdXTnu4Tku7boh6rliqjluIPlsYDvvIjmjqjojZDvvIlcbiAgICAgICAgLy8g5qOA5p+l5piv5ZCm5bey5pyJTGF5b3V057uE5Lu277yM5aaC5p6c5rKh5pyJ5YiZ5re75YqgXG4gICAgICAgIGxldCBsYXlvdXQgPSB0aGlzLmludmVudG9yeUNvbnRhaW5lci5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcbiAgICAgICAgaWYgKCFsYXlvdXQpIHtcbiAgICAgICAgICAgIGxheW91dCA9IHRoaXMuaW52ZW50b3J5Q29udGFpbmVyLmFkZENvbXBvbmVudChjYy5MYXlvdXQpO1xuICAgICAgICAgICAgY2MubG9nKFwiW0NoYXJhY3RlclZpZXdVSV0g6Ieq5Yqo5re75YqgTGF5b3V057uE5Lu25Yiw6YGT5YW35qCP5a655ZmoXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g56aB55SoTGF5b3V057uE5Lu277yM5L2/55So5omL5Yqo5biD5bGA77yI5pu05Y+v5o6n77yJXG4gICAgICAgIC8vIExheW91dOe7hOS7tuWcqEdSSUTmqKHlvI/kuIvlj6/og73mnInpl67popjvvIzmiYvliqjluIPlsYDmm7Tlj6/pnaBcbiAgICAgICAgaWYgKGxheW91dCkge1xuICAgICAgICAgICAgbGF5b3V0LmVuYWJsZWQgPSBmYWxzZTsgLy8g56aB55SoTGF5b3V057uE5Lu2XG4gICAgICAgICAgICBjYy5sb2coXCJbQ2hhcmFjdGVyVmlld1VJXSDnpoHnlKhMYXlvdXTnu4Tku7bvvIzkvb/nlKjmiYvliqjluIPlsYBcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDliJvlu7rpgZPlhbfmoLzlrZBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbFNsb3RzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNsb3ROb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtU2xvdFByZWZhYik7XG4gICAgICAgICAgICBpZiAoIXNsb3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtDaGFyYWN0ZXJWaWV3VUldIOaXoOazleWunuS+i+WMlumBk+WFt+agvOWtkFByZWZhYiAo57Si5byVOiAke2l9KWApO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzbG90Tm9kZS5uYW1lID0gYEl0ZW1TbG90XyR7aX1gO1xuXG4gICAgICAgICAgICAvLyDnoa7kv53oioLngrnlj6/op4FcbiAgICAgICAgICAgIHNsb3ROb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBzbG90Tm9kZS5vcGFjaXR5ID0gMjU1O1xuXG4gICAgICAgICAgICAvLyDlvLrliLborr7nva7oioLngrnlpKflsI/kuLpzbG90U2l6Ze+8iOimhuebllByZWZhYueahOm7mOiupOWkp+Wwj++8iVxuICAgICAgICAgICAgc2xvdE5vZGUuc2V0Q29udGVudFNpemUoc2xvdFNpemUsIHNsb3RTaXplKTtcblxuICAgICAgICAgICAgLy8g6K6+572u6IqC54K56ZSa54K55Li65bGF5Lit77yI5L6/5LqO5a6a5L2N77yJXG4gICAgICAgICAgICBzbG90Tm9kZS5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG5cbiAgICAgICAgICAgIC8vIOiuvue9rue8qeaUvuS4ujAuOFxuICAgICAgICAgICAgc2xvdE5vZGUuc2V0U2NhbGUoMC44LCAwLjgsIDAuOCk7XG5cbiAgICAgICAgICAgIC8vIOa3u+WKoOWIsOWuueWZqFxuICAgICAgICAgICAgdGhpcy5pbnZlbnRvcnlDb250YWluZXIuYWRkQ2hpbGQoc2xvdE5vZGUpO1xuXG4gICAgICAgICAgICAvLyDliJ3lp4vljJbpgZPlhbfmoLzlrZDvvIjnqbrnirbmgIHvvIlcbiAgICAgICAgICAgIHRoaXMuX2luaXRJdGVtU2xvdChzbG90Tm9kZSwgaSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDpqozor4HliJvlu7rnu5PmnpxcbiAgICAgICAgY29uc3QgY3JlYXRlZFNsb3RzID0gdGhpcy5pbnZlbnRvcnlDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOmBk+WFt+agj+WIneWni+WMluWujOaIkDogJHt0aGlzLmludmVudG9yeVJvd3N96KGMIHggJHt0aGlzLmludmVudG9yeUNvbHVtbnN95YiXID0gJHt0b3RhbFNsb3RzfeS4quagvOWtkCwg5a6e6ZmF5Yib5bu6OiAke2NyZWF0ZWRTbG90c33kuKpgKTtcblxuICAgICAgICBpZiAoY3JlYXRlZFNsb3RzID09PSAwKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIltDaGFyYWN0ZXJWaWV3VUldIOitpuWRiu+8muayoeacieWIm+W7uuS7u+S9lemBk+WFt+agvOWtkO+8geivt+ajgOafpWl0ZW1TbG90UHJlZmFi5piv5ZCm5q2j56Gu57uR5a6a44CCXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5L2/55So5omL5Yqo5biD5bGA77yI56Gu5L+d6Ze06ZqU5Li6MO+8jOW5tua3u+WKoOi+ueahhu+8iVxuICAgICAgICB0aGlzLl9tYW51YWxMYXlvdXRJbnZlbnRvcnkoKTtcblxuICAgICAgICAvLyDovpPlh7rosIPor5Xkv6Hmga9cbiAgICAgICAgY29uc3QgY29udGFpbmVyUG9zID0gdGhpcy5pbnZlbnRvcnlDb250YWluZXIuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyV29ybGRQb3MgPSB0aGlzLmludmVudG9yeUNvbnRhaW5lci5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xuICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOWuueWZqOS9jee9rjog5pys5ZywKCR7Y29udGFpbmVyUG9zLngudG9GaXhlZCgxKX0sICR7Y29udGFpbmVyUG9zLnkudG9GaXhlZCgxKX0pLCDkuJbnlYwoJHtjb250YWluZXJXb3JsZFBvcy54LnRvRml4ZWQoMSl9LCAke2NvbnRhaW5lcldvcmxkUG9zLnkudG9GaXhlZCgxKX0pYCk7XG4gICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5a655Zmo5aSn5bCPOiAke3RoaXMuaW52ZW50b3J5Q29udGFpbmVyLmdldENvbnRlbnRTaXplKCkud2lkdGh9IHggJHt0aGlzLmludmVudG9yeUNvbnRhaW5lci5nZXRDb250ZW50U2l6ZSgpLmhlaWdodH1gKTtcbiAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDlrrnlmajlj6/op4HmgKc6IGFjdGl2ZT0ke3RoaXMuaW52ZW50b3J5Q29udGFpbmVyLmFjdGl2ZX0sIG9wYWNpdHk9JHt0aGlzLmludmVudG9yeUNvbnRhaW5lci5vcGFjaXR5fWApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmiYvliqjluIPlsYDpgZPlhbfmoI/vvIjlpIfnlKjmlrnmoYjvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9tYW51YWxMYXlvdXRJbnZlbnRvcnkoKSB7XG4gICAgICAgIGlmICghdGhpcy5pbnZlbnRvcnlDb250YWluZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNsb3RTaXplID0gdGhpcy5pdGVtU2xvdFNpemUgfHwgODA7XG4gICAgICAgIGNvbnN0IHNwYWNpbmcgPSB0aGlzLml0ZW1TbG90U3BhY2luZyB8fCAwOyAvLyDpl7TpmpTmlLnkuLowXG4gICAgICAgIGNvbnN0IHNjYWxlID0gMC44OyAvLyDnvKnmlL7lgLxcbiAgICAgICAgY29uc3Qgc2xvdHMgPSB0aGlzLmludmVudG9yeUNvbnRhaW5lci5jaGlsZHJlbjtcblxuICAgICAgICAvLyDojrflj5blrrnlmajlpKflsI/lkozplJrngrlcbiAgICAgICAgY29uc3QgY29udGFpbmVyU2l6ZSA9IHRoaXMuaW52ZW50b3J5Q29udGFpbmVyLmdldENvbnRlbnRTaXplKCk7XG4gICAgICAgIGNvbnN0IGFuY2hvclBvaW50ID0gdGhpcy5pbnZlbnRvcnlDb250YWluZXIuZ2V0QW5jaG9yUG9pbnQoKTtcblxuICAgICAgICAvLyDorqHnrpflrp7pmYXmmL7npLrlpKflsI/vvIjogIPomZHnvKnmlL7vvIlcbiAgICAgICAgY29uc3QgZGlzcGxheVNpemUgPSBzbG90U2l6ZSAqIHNjYWxlO1xuXG4gICAgICAgIC8vIOiuoeeul+WuueWZqOWkp+Wwj++8iOS9v+eUqOWunumZheaYvuekuuWkp+Wwj++8jOehruS/nee0p+WvhuaOkuWIl++8iVxuICAgICAgICBjb25zdCB0b3RhbFdpZHRoID0gdGhpcy5pbnZlbnRvcnlDb2x1bW5zICogZGlzcGxheVNpemU7XG4gICAgICAgIGNvbnN0IHRvdGFsSGVpZ2h0ID0gdGhpcy5pbnZlbnRvcnlSb3dzICogZGlzcGxheVNpemU7XG5cbiAgICAgICAgLy8g5pu05paw5a655Zmo5aSn5bCP77yI5L2/55So5a6e6ZmF5pi+56S65aSn5bCP77yJXG4gICAgICAgIHRoaXMuaW52ZW50b3J5Q29udGFpbmVyLnNldENvbnRlbnRTaXplKHRvdGFsV2lkdGgsIHRvdGFsSGVpZ2h0KTtcblxuICAgICAgICAvLyDorqHnrpfotbflp4vkvY3nva7vvJrku47lt6bkuIrop5LlvIDlp4vvvIznrKzkuIDkuKrmoLzlrZDnmoTkuK3lv4PkvY3nva5cbiAgICAgICAgLy8g5L2/55So5a6e6ZmF5pi+56S65aSn5bCP5p2l6K6h566X5L2N572u77yM56Gu5L+d57Sn5a+G5o6S5YiXXG4gICAgICAgIGNvbnN0IHN0YXJ0WCA9IC10b3RhbFdpZHRoIC8gMiArIGRpc3BsYXlTaXplIC8gMjtcbiAgICAgICAgY29uc3Qgc3RhcnRZID0gdG90YWxIZWlnaHQgLyAyIC0gZGlzcGxheVNpemUgLyAyO1xuXG4gICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5omL5Yqo5biD5bGA5Y+C5pWwOiBzbG90U2l6ZT0ke3Nsb3RTaXplfSwgc2NhbGU9JHtzY2FsZX0sIGRpc3BsYXlTaXplPSR7ZGlzcGxheVNpemUudG9GaXhlZCgxKX0sIHNwYWNpbmc9JHtzcGFjaW5nfWApO1xuICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOWuueWZqOWkp+WwjzogJHt0b3RhbFdpZHRoLnRvRml4ZWQoMSl9IHggJHt0b3RhbEhlaWdodC50b0ZpeGVkKDEpfSwgc3RhcnRYPSR7c3RhcnRYLnRvRml4ZWQoMSl9LCBzdGFydFk9JHtzdGFydFkudG9GaXhlZCgxKX1gKTtcblxuICAgICAgICAvLyDmiYvliqjorr7nva7mr4/kuKrmoLzlrZDnmoTkvY3nva5cbiAgICAgICAgc2xvdHMuZm9yRWFjaCgoc2xvdE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gdGhpcy5pbnZlbnRvcnlDb2x1bW5zKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IGluZGV4ICUgdGhpcy5pbnZlbnRvcnlDb2x1bW5zO1xuXG4gICAgICAgICAgICAvLyDorqHnrpfkvY3nva7vvIjkvb/nlKjlrp7pmYXmmL7npLrlpKflsI/vvIznoa7kv53ntKflr4bmjpLliJfvvIzml6Dpl7TpmpnvvIlcbiAgICAgICAgICAgIGNvbnN0IHggPSBzdGFydFggKyBjb2wgKiBkaXNwbGF5U2l6ZTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBzdGFydFkgLSByb3cgKiBkaXNwbGF5U2l6ZTtcblxuICAgICAgICAgICAgLy8g6K6+572u5L2N572u77yI56Gu5L+d5Zyo5a655Zmo6IyD5Zu05YaF77yJXG4gICAgICAgICAgICBzbG90Tm9kZS5zZXRQb3NpdGlvbih4LCB5KTtcblxuICAgICAgICAgICAgLy8g5by65Yi26K6+572u6IqC54K55aSn5bCP5Li6c2xvdFNpemXvvIjopobnm5ZQcmVmYWLnmoTpu5jorqTlpKflsI/vvIlcbiAgICAgICAgICAgIHNsb3ROb2RlLnNldENvbnRlbnRTaXplKHNsb3RTaXplLCBzbG90U2l6ZSk7XG5cbiAgICAgICAgICAgIC8vIOiuvue9ruiKgueCuemUmueCueS4uuWxheS4rVxuICAgICAgICAgICAgc2xvdE5vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuXG4gICAgICAgICAgICAvLyDorr7nva7nvKnmlL7kuLowLjjvvIjlv4XpobvlnKjorr7nva7kvY3nva7kuYvlkI7vvIznoa7kv53kvY3nva7orqHnrpfmraPnoa7vvIlcbiAgICAgICAgICAgIHNsb3ROb2RlLnNldFNjYWxlKDAuOCwgMC44LCAwLjgpO1xuXG4gICAgICAgICAgICAvLyDnoa7kv53oioLngrnlj6/op4FcbiAgICAgICAgICAgIHNsb3ROb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBzbG90Tm9kZS5vcGFjaXR5ID0gMjU1O1xuXG4gICAgICAgICAgICAvLyDosIPmlbTlrZDoioLngrnlpKflsI/vvIhCYWNrZ3JvdW5k44CBSWNvbuetie+8iVxuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBzbG90Tm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2pdO1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOaYr+iDjOaZr+aIluWbvuagh+iKgueCue+8jOiuvue9ruS4uuS4jueItuiKgueCueebuOWQjOWkp+Wwj1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5uYW1lID09PSBcIkJhY2tncm91bmRcIiB8fCBjaGlsZC5uYW1lID09PSBcIkljb25cIikge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5zZXRDb250ZW50U2l6ZShzbG90U2l6ZSwgc2xvdFNpemUpO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDnoa7kv53moLzlrZDlj6/op4HvvIjmt7vliqDog4zmma/vvIlcbiAgICAgICAgICAgIHRoaXMuX2Vuc3VyZVNsb3RWaXNpYmxlKHNsb3ROb2RlLCBpbmRleCk7XG5cbiAgICAgICAgICAgIC8vIOa3u+WKoOi+ueahhue6v+ahhu+8iOeUqOS6juWMuuWIhuavj+S4quagvOWtkO+8iS0g5b+F6aG75Zyo5pyA5ZCO5re75Yqg77yM56Gu5L+d5pi+56S65Zyo5pyA5LiK5bGCXG4gICAgICAgICAgICB0aGlzLl9hZGRTbG90Qm9yZGVyKHNsb3ROb2RlLCBzbG90U2l6ZSk7XG5cbiAgICAgICAgICAgIC8vIOmqjOivgeS9jee9ruaYr+WQpuWcqOWuueWZqOiMg+WbtOWGhe+8iOS9v+eUqOWunumZheaYvuekuuWkp+Wwj++8iVxuICAgICAgICAgICAgY29uc3Qgc2xvdFBvcyA9IHNsb3ROb2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBzbG90SGFsZlNpemUgPSBkaXNwbGF5U2l6ZSAvIDI7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJIYWxmV2lkdGggPSB0b3RhbFdpZHRoIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckhhbGZIZWlnaHQgPSB0b3RhbEhlaWdodCAvIDI7XG5cbiAgICAgICAgICAgIGNvbnN0IGlzSW5SYW5nZSA9IChzbG90UG9zLnggLSBzbG90SGFsZlNpemUgPj0gLWNvbnRhaW5lckhhbGZXaWR0aCkgJiZcbiAgICAgICAgICAgICAgICAoc2xvdFBvcy54ICsgc2xvdEhhbGZTaXplIDw9IGNvbnRhaW5lckhhbGZXaWR0aCkgJiZcbiAgICAgICAgICAgICAgICAoc2xvdFBvcy55IC0gc2xvdEhhbGZTaXplID49IC1jb250YWluZXJIYWxmSGVpZ2h0KSAmJlxuICAgICAgICAgICAgICAgIChzbG90UG9zLnkgKyBzbG90SGFsZlNpemUgPD0gY29udGFpbmVySGFsZkhlaWdodCk7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA8IDUpIHsgLy8g6L6T5Ye65YmNNeS4quagvOWtkOeahOivpue7huS/oeaBr1xuICAgICAgICAgICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5qC85a2QJHtpbmRleH06IOS9jee9rigke3gudG9GaXhlZCgxKX0sICR7eS50b0ZpeGVkKDEpfSksIOWkp+WwjyR7c2xvdFNpemV9eCR7c2xvdFNpemV9LCDlrrnlmajlhoU6ICR7aXNJblJhbmdlID8gJ+KckycgOiAn4pyXJ31gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpc0luUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKGBbQ2hhcmFjdGVyVmlld1VJXSDorablkYrvvJrmoLzlrZAke2luZGV4feS9jee9rui2heWHuuWuueWZqOiMg+WbtO+8geS9jee9rjogKCR7eC50b0ZpeGVkKDEpfSwgJHt5LnRvRml4ZWQoMSl9KSwg5a655Zmo5aSn5bCPOiAke2NvbnRhaW5lclNpemUud2lkdGh9eCR7Y29udGFpbmVyU2l6ZS5oZWlnaHR9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5omL5Yqo5biD5bGA5a6M5oiQ77yM5YWxJHtzbG90cy5sZW5ndGh95Liq5qC85a2QYCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOehruS/nemBk+WFt+agvOWtkOWPr+inge+8iOWmguaenOayoeacieiDjOaZr++8jOa3u+WKoOS4gOS4queugOWNleeahOiDjOaZr++8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBzbG90Tm9kZSAtIOmBk+WFt+agvOWtkOiKgueCuVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIOagvOWtkOe0ouW8lVxuICAgICAqL1xuICAgIF9lbnN1cmVTbG90VmlzaWJsZShzbG90Tm9kZSwgaW5kZXgpIHtcbiAgICAgICAgLy8g5qOA5p+l6IqC54K55piv5ZCm5pyJ5Y+v6KeB55qEU3ByaXRl57uE5Lu2XG4gICAgICAgIGxldCBoYXNWaXNpYmxlU3ByaXRlID0gZmFsc2U7XG4gICAgICAgIGxldCBzcHJpdGVOb2RlID0gbnVsbDtcblxuICAgICAgICAvLyDmo4Dmn6XkuLvoioLngrlcbiAgICAgICAgY29uc3QgbWFpblNwcml0ZSA9IHNsb3ROb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBpZiAobWFpblNwcml0ZSAmJiBtYWluU3ByaXRlLnNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICBoYXNWaXNpYmxlU3ByaXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHNwcml0ZU5vZGUgPSBzbG90Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOajgOafpeWtkOiKgueCue+8iEJhY2tncm91bmTjgIFJY29u562J77yJXG4gICAgICAgIGlmICghaGFzVmlzaWJsZVNwcml0ZSkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBzbG90Tm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkU3ByaXRlID0gY2hpbGQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkU3ByaXRlICYmIGNoaWxkU3ByaXRlLnNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc1Zpc2libGVTcHJpdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzcHJpdGVOb2RlID0gY2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWmguaenOayoeacieWPr+ingeeahFNwcml0Ze+8jOWIm+W7uuS4gOS4queugOWNleeahOiDjOaZr++8iOS4jeWMheWQq+i+ueahhu+8jOi+ueahhueUsV9hZGRTbG90Qm9yZGVy5Y2V54us5aSE55CG77yJXG4gICAgICAgIGlmICghaGFzVmlzaWJsZVNwcml0ZSkge1xuICAgICAgICAgICAgLy8g5qOA5p+l5piv5ZCm5bey5pyJQmFja2dyb3VuZOiKgueCuVxuICAgICAgICAgICAgbGV0IGJnTm9kZSA9IHNsb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKTtcblxuICAgICAgICAgICAgaWYgKCFiZ05vZGUpIHtcbiAgICAgICAgICAgICAgICAvLyDliJvlu7rog4zmma/oioLngrlcbiAgICAgICAgICAgICAgICBiZ05vZGUgPSBuZXcgY2MuTm9kZShcIkJhY2tncm91bmRcIik7XG4gICAgICAgICAgICAgICAgYmdOb2RlLnNldENvbnRlbnRTaXplKHNsb3ROb2RlLmdldENvbnRlbnRTaXplKCkud2lkdGgsIHNsb3ROb2RlLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBiZ05vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuXG4gICAgICAgICAgICAgICAgLy8g5L2/55SoR3JhcGhpY3Pnu4Tku7bnu5jliLbog4zmma/vvIjkuI3nu5jliLbovrnmoYbvvIlcbiAgICAgICAgICAgICAgICBjb25zdCBncmFwaGljcyA9IGJnTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuXG4gICAgICAgICAgICAgICAgLy8g57uY5Yi26IOM5pmv77yI5Y2K6YCP5piO54Gw6Imy77yJXG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gbmV3IGNjLkNvbG9yKDYwLCA2MCwgNjAsIDgwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90U2l6ZSA9IHNsb3ROb2RlLmdldENvbnRlbnRTaXplKCkud2lkdGg7XG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MucmVjdCgtc2xvdFNpemUgLyAyLCAtc2xvdFNpemUgLyAyLCBzbG90U2l6ZSwgc2xvdFNpemUpO1xuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIHNsb3ROb2RlLmFkZENoaWxkKGJnTm9kZSk7XG4gICAgICAgICAgICAgICAgYmdOb2RlLnNldFBvc2l0aW9uKDAsIDApO1xuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5Li66YGT5YW35qC85a2Q5re75Yqg5LqGR3JhcGhpY3Pog4zmma9gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g6YGT5YW35qC85a2Q5bey5pyJ5Y+v6KeB6IOM5pmvOiAke3Nwcml0ZU5vZGUubmFtZX1gKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDkuLrpgZPlhbfmoLzlrZDmt7vliqDovrnmoYbnur/moYbvvIjnlKjkuo7ljLrliIbmr4/kuKrmoLzlrZDvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gc2xvdE5vZGUgLSDpgZPlhbfmoLzlrZDoioLngrlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2xvdFNpemUgLSDmoLzlrZDlpKflsI9cbiAgICAgKi9cbiAgICBfYWRkU2xvdEJvcmRlcihzbG90Tm9kZSwgc2xvdFNpemUpIHtcbiAgICAgICAgLy8g5qOA5p+l5piv5ZCm5bey5pyJQm9yZGVy6IqC54K577yM5aaC5p6c5pyJ5YiZ5YWI56e76ZmkXG4gICAgICAgIGxldCBib3JkZXJOb2RlID0gc2xvdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCb3JkZXJcIik7XG4gICAgICAgIGlmIChib3JkZXJOb2RlKSB7XG4gICAgICAgICAgICBib3JkZXJOb2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWIm+W7uui+ueahhuiKgueCuVxuICAgICAgICBib3JkZXJOb2RlID0gbmV3IGNjLk5vZGUoXCJCb3JkZXJcIik7XG4gICAgICAgIGJvcmRlck5vZGUuc2V0Q29udGVudFNpemUoc2xvdFNpemUsIHNsb3RTaXplKTtcbiAgICAgICAgYm9yZGVyTm9kZS5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG5cbiAgICAgICAgLy8g5L2/55SoR3JhcGhpY3Pnu4Tku7bnu5jliLbovrnmoYbnur/moYZcbiAgICAgICAgY29uc3QgZ3JhcGhpY3MgPSBib3JkZXJOb2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG5cbiAgICAgICAgLy8g6K6+572u6L655qGG5qC35byP77yI55m96Imy77yMNeWDj+e0oOWuve+8jOabtOaYjuaYvu+8iVxuICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICBncmFwaGljcy5saW5lV2lkdGggPSA1O1xuXG4gICAgICAgIC8vIOe7mOWItuefqeW9oui+ueahhu+8iOS7juS4reW/g+eCueW8gOWni+e7mOWItu+8iVxuICAgICAgICAvLyDms6jmhI/vvJrnlLHkuo7oioLngrnmnInnvKnmlL4wLjjvvIzlrp7pmYXmmL7npLrlpKflsI/kvJrlsI/kuIDkupvvvIzkvYbovrnmoYbkvJrmraPnoa7mmL7npLpcbiAgICAgICAgY29uc3QgaGFsZlNpemUgPSBzbG90U2l6ZSAvIDI7XG4gICAgICAgIGdyYXBoaWNzLnJlY3QoLWhhbGZTaXplLCAtaGFsZlNpemUsIHNsb3RTaXplLCBzbG90U2l6ZSk7XG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIOehruS/nei+ueahhuiKgueCueWcqOacgOS4iuWxgu+8iOacgOWQjua3u+WKoO+8jOaYvuekuuWcqOacgOWJjemdou+8iVxuICAgICAgICBzbG90Tm9kZS5hZGRDaGlsZChib3JkZXJOb2RlKTtcbiAgICAgICAgYm9yZGVyTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgYm9yZGVyTm9kZS56SW5kZXggPSA5OTk7IC8vIOS9v+eUqHpJbmRleOabv+S7o+W3suW6n+W8g+eahHNldExvY2FsWk9yZGVy77yM6K6+572u6L6D6auY55qE5bGC57qn77yM56Gu5L+d5pi+56S65Zyo5pyA5YmN6Z2iXG5cbiAgICAgICAgLy8g56Gu5L+d6L655qGG6IqC54K55Y+v6KeBXG4gICAgICAgIGJvcmRlck5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgYm9yZGVyTm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbpgZPlhbfmoLzlrZBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gc2xvdE5vZGUgLSDpgZPlhbfmoLzlrZDoioLngrlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSDmoLzlrZDntKLlvJVcbiAgICAgKi9cbiAgICBfaW5pdEl0ZW1TbG90KHNsb3ROb2RlLCBpbmRleCkge1xuICAgICAgICAvLyDmn6Xmib7lm77moIfoioLngrnlkozmlbDph4/moIfnrb5cbiAgICAgICAgY29uc3QgaWNvbk5vZGUgPSBzbG90Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIkljb25cIikgfHwgc2xvdE5vZGU7XG4gICAgICAgIGNvbnN0IGNvdW50TGFiZWwgPSBzbG90Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNvdW50TGFiZWxcIik7XG5cbiAgICAgICAgLy8g5Yid5aeL54q25oCB77ya56m65qC85a2QXG4gICAgICAgIGlmIChpY29uTm9kZSkge1xuICAgICAgICAgICAgY29uc3Qgc3ByaXRlID0gaWNvbk5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpZiAoc3ByaXRlKSB7XG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gbnVsbDsgLy8g5riF56m65Zu+5qCHXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpY29uTm9kZS5vcGFjaXR5ID0gMTAwOyAvLyDljYrpgI/mmI7mmL7npLrnqbrmoLzlrZBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb3VudExhYmVsKSB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGNvdW50TGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IFwiXCI7IC8vIOa4heepuuaVsOmHj1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5L+d5a2Y5qC85a2Q57Si5byVXG4gICAgICAgIHNsb3ROb2RlLl9zbG90SW5kZXggPSBpbmRleDtcbiAgICAgICAgc2xvdE5vZGUuX2lzRW1wdHkgPSB0cnVlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmm7TmlrDpgZPlhbfmoI/mmL7npLrvvIjmoLnmja7lvZPliY3pgInkuK3nmoTop5LoibLvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFzeW5jIF91cGRhdGVJbnZlbnRvcnkoKSB7XG4gICAgICAgIGlmICghdGhpcy5pbnZlbnRvcnlDb250YWluZXIgfHwgIXRoaXMuY3VycmVudFVuaXREYXRhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDku47op5LoibLmlbDmja7kuK3ojrflj5bpgZPlhbfliJfooajvvIjmlK/mjIHlvILmraXvvIlcbiAgICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCB0aGlzLl9nZXRDaGFyYWN0ZXJJdGVtcyh0aGlzLmN1cnJlbnRVbml0RGF0YS5uYW1lKTtcblxuICAgICAgICAvLyDmm7TmlrDmr4/kuKrmoLzlrZBcbiAgICAgICAgY29uc3Qgc2xvdHMgPSB0aGlzLmludmVudG9yeUNvbnRhaW5lci5jaGlsZHJlbjtcbiAgICAgICAgc2xvdHMuZm9yRWFjaCgoc2xvdE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPCBpdGVtcy5sZW5ndGggJiYgaXRlbXNbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgLy8g5pyJ6YGT5YW377yM5pi+56S66YGT5YW35L+h5oGvXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0SXRlbVNsb3Qoc2xvdE5vZGUsIGl0ZW1zW2luZGV4XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOepuuagvOWtkFxuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRJdGVtU2xvdChzbG90Tm9kZSwgaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgLy8g5riF56m65omA5pyJ5LqL5Lu277yI56m65qC85a2Q5LiN6ZyA6KaB5pi+56S6dG9vbHRpcO+8iVxuICAgICAgICAgICAgICAgIHNsb3ROb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOKTtcbiAgICAgICAgICAgICAgICBzbG90Tm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfVVApO1xuICAgICAgICAgICAgICAgIHNsb3ROb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCk7XG4gICAgICAgICAgICAgICAgc2xvdE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XG4gICAgICAgICAgICAgICAgc2xvdE5vZGUuX3RvdWNoU3RhcnRUaW1lID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluijheWkh+agj++8iDPkuKrmoLzlrZDvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9pbml0RXF1aXBtZW50QmFyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZXF1aXBtZW50Q29udGFpbmVyKSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiW0NoYXJhY3RlclZpZXdVSV0g5pyq6K6+572uZXF1aXBtZW50Q29udGFpbmVy77yM6Lez6L+H6KOF5aSH5qCP5Yid5aeL5YyWXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJlZmFiID0gdGhpcy5lcXVpcG1lbnRTbG90UHJlZmFiIHx8IHRoaXMuaXRlbVNsb3RQcmVmYWI7XG4gICAgICAgIGlmICghcHJlZmFiKSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiW0NoYXJhY3RlclZpZXdVSV0g5pyq6K6+572uZXF1aXBtZW50U2xvdFByZWZhYuS4lOaXoGl0ZW1TbG90UHJlZmFi77yM6Lez6L+H6KOF5aSH5qCP5Yid5aeL5YyWXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2xvdENvdW50ID0gMztcbiAgICAgICAgY29uc3Qgc2xvdFNpemUgPSB0aGlzLml0ZW1TbG90U2l6ZSB8fCA4MDtcbiAgICAgICAgY29uc3Qgc3BhY2luZyA9IDEwO1xuXG4gICAgICAgIHRoaXMuZXF1aXBtZW50Q29udGFpbmVyLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuZXF1aXBtZW50Q29udGFpbmVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZXF1aXBtZW50Q29udGFpbmVyLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIHRoaXMuZXF1aXBtZW50Q29udGFpbmVyLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcblxuICAgICAgICBjb25zdCB0b3RhbEhlaWdodCA9IHNsb3RDb3VudCAqIHNsb3RTaXplICsgKHNsb3RDb3VudCAtIDEpICogc3BhY2luZztcbiAgICAgICAgdGhpcy5lcXVpcG1lbnRDb250YWluZXIuc2V0Q29udGVudFNpemUoc2xvdFNpemUsIHRvdGFsSGVpZ2h0KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsb3RDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzbG90Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICBpZiAoIXNsb3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtDaGFyYWN0ZXJWaWV3VUldIOaXoOazleWunuS+i+WMluijheWkh+agvOWtkCBQcmVmYWIgKOe0ouW8lTogJHtpfSlgKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgSXRlbUNvbmZpZyA9IHJlcXVpcmUoXCJJdGVtQ29uZmlnXCIpO1xuICAgICAgICAgICAgY29uc3Qgc2xvdFR5cGVzID0gSXRlbUNvbmZpZy5FUVVJUE1FTlRfU0xPVFMgfHwgW1wid2VhcG9uXCIsIFwiYXJtb3JcIiwgXCJzaG9lc1wiXTtcbiAgICAgICAgICAgIHNsb3ROb2RlLm5hbWUgPSBgRXF1aXBtZW50U2xvdF8ke2l9YDtcbiAgICAgICAgICAgIHNsb3ROb2RlLl9zbG90SW5kZXggPSBpO1xuICAgICAgICAgICAgc2xvdE5vZGUuX3Nsb3RUeXBlID0gc2xvdFR5cGVzW2ldIHx8IFwid2VhcG9uXCI7XG4gICAgICAgICAgICBzbG90Tm9kZS5faXNFcXVpcG1lbnQgPSB0cnVlO1xuICAgICAgICAgICAgc2xvdE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHNsb3ROb2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICBzbG90Tm9kZS5zZXRDb250ZW50U2l6ZShzbG90U2l6ZSwgc2xvdFNpemUpO1xuICAgICAgICAgICAgc2xvdE5vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgICAgICAgICAgc2xvdE5vZGUuc2V0U2NhbGUoMC44LCAwLjgsIDAuOCk7XG5cbiAgICAgICAgICAgIHRoaXMuZXF1aXBtZW50Q29udGFpbmVyLmFkZENoaWxkKHNsb3ROb2RlKTtcbiAgICAgICAgICAgIHRoaXMuX2luaXRJdGVtU2xvdChzbG90Tm9kZSwgaSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sYXlvdXRFcXVpcG1lbnRCYXIoKTtcbiAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDoo4XlpIfmoI/liJ3lp4vljJblrozmiJDvvIzlhbEgJHtzbG90Q291bnR9IOS4quagvOWtkGApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDoo4XlpIfmoI/luIPlsYDvvIgz5Liq5qC85a2Q57q15ZCR5o6S5YiX77yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfbGF5b3V0RXF1aXBtZW50QmFyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZXF1aXBtZW50Q29udGFpbmVyIHx8IHRoaXMuZXF1aXBtZW50Q29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2xvdFNpemUgPSB0aGlzLml0ZW1TbG90U2l6ZSB8fCA4MDtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSAwLjg7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlTaXplID0gc2xvdFNpemUgKiBzY2FsZTtcbiAgICAgICAgY29uc3Qgc3BhY2luZyA9IDEwO1xuICAgICAgICBjb25zdCBzbG90cyA9IHRoaXMuZXF1aXBtZW50Q29udGFpbmVyLmNoaWxkcmVuO1xuICAgICAgICBjb25zdCB0b3RhbEhlaWdodCA9IHNsb3RzLmxlbmd0aCAqIGRpc3BsYXlTaXplICsgKHNsb3RzLmxlbmd0aCAtIDEpICogc3BhY2luZztcblxuICAgICAgICB0aGlzLmVxdWlwbWVudENvbnRhaW5lci5zZXRDb250ZW50U2l6ZShkaXNwbGF5U2l6ZSwgdG90YWxIZWlnaHQpO1xuICAgICAgICBjb25zdCBzdGFydFkgPSB0b3RhbEhlaWdodCAvIDIgLSBkaXNwbGF5U2l6ZSAvIDI7XG5cbiAgICAgICAgc2xvdHMuZm9yRWFjaCgoc2xvdE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB5ID0gc3RhcnRZIC0gaW5kZXggKiAoZGlzcGxheVNpemUgKyBzcGFjaW5nKTtcbiAgICAgICAgICAgIHNsb3ROb2RlLnNldFBvc2l0aW9uKDAsIHkpO1xuICAgICAgICAgICAgc2xvdE5vZGUuc2V0Q29udGVudFNpemUoc2xvdFNpemUsIHNsb3RTaXplKTtcbiAgICAgICAgICAgIHNsb3ROb2RlLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcbiAgICAgICAgICAgIHNsb3ROb2RlLnNldFNjYWxlKDAuOCwgMC44LCAwLjgpO1xuICAgICAgICAgICAgdGhpcy5fZW5zdXJlU2xvdFZpc2libGUoc2xvdE5vZGUsIGluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuX2FkZFNsb3RCb3JkZXIoc2xvdE5vZGUsIHNsb3RTaXplKTtcblxuICAgICAgICAgICAgLy8g6K6p6KOF5aSH5qCP5qC85a2Q6YeM55qEIEljb24g6IqC54K55bC65a+46YCC6YWN5qC85a2Q5aSn5bCPXG4gICAgICAgICAgICBjb25zdCBpY29uTm9kZSA9IHNsb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiSWNvblwiKTtcbiAgICAgICAgICAgIGlmIChpY29uTm9kZSkge1xuICAgICAgICAgICAgICAgIGljb25Ob2RlLnNldENvbnRlbnRTaXplKHNsb3RTaXplLCBzbG90U2l6ZSk7XG4gICAgICAgICAgICAgICAgaWNvbk5vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwID0gaWNvbk5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmm7TmlrDoo4XlpIfmoI/mmL7npLrvvIjmjInlvZPliY3op5LoibLku44gRXF1aXBtZW50RGF0YU1hbmFnZXIg5Yqg6L2977yM5q+P5L2N6Iux6ZuE54us56uL77yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhc3luYyBfdXBkYXRlRXF1aXBtZW50QmFyKCkge1xuICAgICAgICBpZiAoIXRoaXMuZXF1aXBtZW50Q29udGFpbmVyIHx8ICF0aGlzLmN1cnJlbnRVbml0RGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgRXF1aXBtZW50RGF0YU1hbmFnZXIgPSByZXF1aXJlKFwiRXF1aXBtZW50RGF0YU1hbmFnZXJcIik7XG4gICAgICAgIGNvbnN0IEl0ZW1Db25maWcgPSByZXF1aXJlKFwiSXRlbUNvbmZpZ1wiKTtcbiAgICAgICAgY29uc3QgeyBzbG90czogZXF1aXBtZW50U2xvdHMgfSA9IGF3YWl0IEVxdWlwbWVudERhdGFNYW5hZ2VyLmdldEVxdWlwbWVudCh0aGlzLmN1cnJlbnRVbml0RGF0YS5uYW1lKTtcbiAgICAgICAgY29uc3Qgc2xvdE5vZGVzID0gdGhpcy5lcXVpcG1lbnRDb250YWluZXIuY2hpbGRyZW47XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbG90Tm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNsb3ROb2RlID0gc2xvdE5vZGVzW2ldO1xuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gZXF1aXBtZW50U2xvdHNbaV0gfHwgbnVsbDtcbiAgICAgICAgICAgIGlmIChpdGVtSWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb25maWcgPSBJdGVtQ29uZmlnLmdldEl0ZW1CeUlkKGl0ZW1JZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbURhdGEgPSBjb25maWcgPyB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBjb25maWcuaWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGNvbmZpZy5kaXNwbGF5TmFtZSB8fCBjb25maWcubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogY29uZmlnLmljb24sXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLFxuICAgICAgICAgICAgICAgICAgICBjb25maWc6IGNvbmZpZ1xuICAgICAgICAgICAgICAgIH0gOiBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXRFcXVpcG1lbnRTbG90KHNsb3ROb2RlLCBpdGVtRGF0YSwgaSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5pdEl0ZW1TbG90KHNsb3ROb2RlLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgc2xvdE5vZGUuX2lzRW1wdHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzbG90Tm9kZS5faXRlbURhdGEgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faW5pdEl0ZW1TbG90KHNsb3ROb2RlLCBpKTtcbiAgICAgICAgICAgICAgICBzbG90Tm9kZS5faXNFbXB0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2xvdE5vZGUuX2l0ZW1EYXRhID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDorr7nva7oo4XlpIfmoLzlrZDlhoXlrrnvvIjluKbmi5bmi73ljbjkuIvvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9zZXRFcXVpcG1lbnRTbG90KHNsb3ROb2RlLCBpdGVtRGF0YSwgc2xvdEluZGV4KSB7XG4gICAgICAgIGNvbnN0IGljb25Ob2RlID0gc2xvdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJJY29uXCIpIHx8IHNsb3ROb2RlO1xuICAgICAgICBjb25zdCBjb3VudExhYmVsID0gc2xvdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDb3VudExhYmVsXCIpO1xuXG4gICAgICAgIGlmIChpY29uTm9kZSAmJiBpdGVtRGF0YS5pY29uKSB7XG4gICAgICAgICAgICBjb25zdCBzcHJpdGUgPSBpY29uTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIGlmIChzcHJpdGUpIHtcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBpdGVtRGF0YS5pY29uO1xuICAgICAgICAgICAgICAgIC8vIOehruS/neWbvuagh+aMieagvOWtkOWkp+Wwj+e8qeaUvuaYvuekulxuICAgICAgICAgICAgICAgIHNwcml0ZS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDlsIYgSWNvbiDoioLngrnmnKzouqvnvKnmlL7liLDkuI7moLzlrZDkuIDoh7RcbiAgICAgICAgICAgIGNvbnN0IHNsb3RTaXplID0gdGhpcy5pdGVtU2xvdFNpemUgfHwgc2xvdE5vZGUud2lkdGggfHwgODA7XG4gICAgICAgICAgICBpY29uTm9kZS5zZXRDb250ZW50U2l6ZShzbG90U2l6ZSwgc2xvdFNpemUpO1xuICAgICAgICAgICAgaWNvbk5vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgICAgICAgICAgaWNvbk5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgfSBlbHNlIGlmIChpY29uTm9kZSkge1xuICAgICAgICAgICAgY29uc3Qgc3ByaXRlID0gaWNvbk5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpZiAoc3ByaXRlKSBzcHJpdGUuc3ByaXRlRnJhbWUgPSBudWxsO1xuICAgICAgICAgICAgaWNvbk5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY291bnRMYWJlbCkge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBjb3VudExhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBpZiAobGFiZWwpIGxhYmVsLnN0cmluZyA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBzbG90Tm9kZS5faXRlbURhdGEgPSBpdGVtRGF0YTtcbiAgICAgICAgc2xvdE5vZGUuX2lzRW1wdHkgPSBmYWxzZTtcbiAgICAgICAgc2xvdE5vZGUuX3Nsb3RJbmRleCA9IHNsb3RJbmRleDtcbiAgICAgICAgc2xvdE5vZGUuX3Nsb3RUeXBlID0gc2xvdE5vZGUuX3Nsb3RUeXBlIHx8IChyZXF1aXJlKFwiSXRlbUNvbmZpZ1wiKS5FUVVJUE1FTlRfU0xPVFMgfHwgW1wid2VhcG9uXCIsIFwiYXJtb3JcIiwgXCJzaG9lc1wiXSlbc2xvdEluZGV4XTtcblxuICAgICAgICBzbG90Tm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQpO1xuICAgICAgICBzbG90Tm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLl9kcmFnZ2luZ0Zyb21FcXVpcG1lbnQgPSBzbG90Tm9kZTtcbiAgICAgICAgICAgIHRoaXMuX2RyYWdnaW5nSXRlbSA9IGl0ZW1EYXRhO1xuICAgICAgICAgICAgdGhpcy5fZHJhZ0ljb25TaXplID0gdGhpcy5fZ2V0U2xvdEljb25EaXNwbGF5U2l6ZShzbG90Tm9kZSk7XG4gICAgICAgICAgICAvLyDorrDlvZXljp/lp4vlm77moIflnKggQ2FudmFzIOS4i+eahOS9jee9ru+8iOeUqOS6juS7juWOn+agvOWtkOKAnOaLveWHuuadpeKAne+8iVxuICAgICAgICAgICAgY29uc3QgaWNvbk5vZGUgPSBzbG90Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIkljb25cIikgfHwgc2xvdE5vZGU7XG4gICAgICAgICAgICBjb25zdCBjYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xuICAgICAgICAgICAgaWYgKGNhbnZhcyAmJiBpY29uTm9kZSAmJiBpY29uTm9kZS5pc1ZhbGlkICYmIGljb25Ob2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUiAmJiBjYW52YXMuY29udmVydFRvTm9kZVNwYWNlQVIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3b3JsZFBvcyA9IGljb25Ob2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhZ1N0YXJ0Q2FudmFzUG9zID0gY2FudmFzLmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhZ1N0YXJ0Q2FudmFzUG9zID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiOt+WPluinpuaRuOeCueS4i+eahOagvOWtkOiKgueCue+8iOijheWkh+agj+aIlumBk+WFt+agj++8iVxuICAgICAqIEBwYXJhbSB7Y2MuRXZlbnQuRXZlbnRUb3VjaH0gZXZlbnRcbiAgICAgKiBAcmV0dXJucyB7eyBub2RlOiBjYy5Ob2RlLCBpc0VxdWlwbWVudDogYm9vbGVhbiwgc2xvdEluZGV4OiBudW1iZXIsIHNsb3RUeXBlPzogc3RyaW5nIH18bnVsbH1cbiAgICAgKi9cbiAgICBfZ2V0Tm9kZVVuZGVyVG91Y2goZXZlbnQpIHtcbiAgICAgICAgaWYgKCFldmVudCB8fCAhZXZlbnQudG91Y2gpIHJldHVybiBudWxsO1xuXG4gICAgICAgIC8vIOiOt+WPllVJ5Z2Q5qCH77yI55u45a+55LqOQ2FudmFz77yJXG4gICAgICAgIGxldCB1aVBvcyA9IG51bGw7XG4gICAgICAgIGlmIChldmVudC5nZXRVSUxvY2F0aW9uKSB7XG4gICAgICAgICAgICB1aVBvcyA9IGV2ZW50LmdldFVJTG9jYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50b3VjaCAmJiBldmVudC50b3VjaC5nZXRVSUxvY2F0aW9uKSB7XG4gICAgICAgICAgICB1aVBvcyA9IGV2ZW50LnRvdWNoLmdldFVJTG9jYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOmZjee6p+aWueahiO+8muS9v+eUqOWxj+W5leWdkOagh1xuICAgICAgICAgICAgY29uc3Qgc2NyZWVuUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XG4gICAgICAgICAgICBpZiAoY2FudmFzICYmIGNhbnZhcy5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbWVyYSA9IGNhbnZhcy5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKTtcbiAgICAgICAgICAgICAgICB1aVBvcyA9IGNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQoc2NyZWVuUG9zKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdWlQb3MgPSBzY3JlZW5Qb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXVpUG9zKSByZXR1cm4gbnVsbDtcbiAgICAgICAgY29uc3Qgd29ybGRQb3MgPSBjYy52Mih1aVBvcy54LCB1aVBvcy55KTtcblxuICAgICAgICBpZiAodGhpcy5lcXVpcG1lbnRDb250YWluZXIgJiYgdGhpcy5lcXVpcG1lbnRDb250YWluZXIuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IHNsb3RzID0gdGhpcy5lcXVpcG1lbnRDb250YWluZXIuY2hpbGRyZW47XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2xvdCA9IHNsb3RzW2ldO1xuICAgICAgICAgICAgICAgIGlmICghc2xvdCB8fCAhc2xvdC5wYXJlbnQpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsUG9zID0gc2xvdC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gc2xvdC5nZXRCb3VuZGluZ0JveCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVjdCAmJiByZWN0LmNvbnRhaW5zICYmIHJlY3QuY29udGFpbnMobG9jYWxQb3MpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBub2RlOiBzbG90LCBpc0VxdWlwbWVudDogdHJ1ZSwgc2xvdEluZGV4OiBpLCBzbG90VHlwZTogc2xvdC5fc2xvdFR5cGUgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5b+955Wl6L2s5o2i6ZSZ6K+vXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmludmVudG9yeUNvbnRhaW5lciAmJiB0aGlzLmludmVudG9yeUNvbnRhaW5lci5jaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3Qgc2xvdHMgPSB0aGlzLmludmVudG9yeUNvbnRhaW5lci5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90ID0gc2xvdHNbaV07XG4gICAgICAgICAgICAgICAgaWYgKCFzbG90IHx8ICFzbG90LnBhcmVudCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9jYWxQb3MgPSBzbG90LnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBzbG90LmdldEJvdW5kaW5nQm94KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWN0ICYmIHJlY3QuY29udGFpbnMgJiYgcmVjdC5jb250YWlucyhsb2NhbFBvcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5vZGU6IHNsb3QsIGlzRXF1aXBtZW50OiBmYWxzZSwgc2xvdEluZGV4OiBpIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOW/veeVpei9rOaNoumUmeivr1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuXG4gICAgX29uR2xvYmFsVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5fZHJhZ2dpbmdJdGVtICYmICF0aGlzLl9kcmFnZ2luZ0Zyb21FcXVpcG1lbnQpIHJldHVybjtcbiAgICAgICAgaWYgKCFldmVudCB8fCAhZXZlbnQudG91Y2gpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xuICAgICAgICBpZiAoIWNhbnZhcykgcmV0dXJuO1xuXG4gICAgICAgIC8vIOiOt+WPliBVSSDlnZDmoIfvvIzlho3nu5/kuIDovazmjaLliLAgQ2FudmFzIOacrOWcsOWdkOagh+ezu1xuICAgICAgICBsZXQgdWlQb3MgPSBudWxsO1xuICAgICAgICBpZiAoZXZlbnQuZ2V0VUlMb2NhdGlvbikge1xuICAgICAgICAgICAgdWlQb3MgPSBldmVudC5nZXRVSUxvY2F0aW9uKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudG91Y2ggJiYgZXZlbnQudG91Y2guZ2V0VUlMb2NhdGlvbikge1xuICAgICAgICAgICAgdWlQb3MgPSBldmVudC50b3VjaC5nZXRVSUxvY2F0aW9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzY3JlZW5Qb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xuICAgICAgICAgICAgaWYgKGNhbnZhcy5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbWVyYSA9IGNhbnZhcy5nZXRDb21wb25lbnQoY2MuQ2FtZXJhKTtcbiAgICAgICAgICAgICAgICB1aVBvcyA9IGNhbWVyYS5nZXRTY3JlZW5Ub1dvcmxkUG9pbnQoc2NyZWVuUG9zKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdWlQb3MgPSBzY3JlZW5Qb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF1aVBvcykgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGNhbnZhc1BvcyA9IGNhbnZhcy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52Mih1aVBvcy54LCB1aVBvcy55KSk7XG5cbiAgICAgICAgLy8g5Y+q5pyJ56e75Yqo6LaF6L+H5LiA5a6a6Led56a75omN5byA5aeL5Yib5bu65ouW5ou95Zu+5qCH77yI6YG/5YWN6L276Kem5bCx4oCc5YaS5Ye64oCd5ouW5ou96IqC54K577yJXG4gICAgICAgIGNvbnN0IERSQUdfU1RBUlRfRElTVEFOQ0UgPSA4O1xuICAgICAgICBpZiAoIXRoaXMuX2RyYWdTcHJpdGUgJiYgdGhpcy5fZHJhZ1N0YXJ0Q2FudmFzUG9zKSB7XG4gICAgICAgICAgICBjb25zdCBkeCA9IGNhbnZhc1Bvcy54IC0gdGhpcy5fZHJhZ1N0YXJ0Q2FudmFzUG9zLng7XG4gICAgICAgICAgICBjb25zdCBkeSA9IGNhbnZhc1Bvcy55IC0gdGhpcy5fZHJhZ1N0YXJ0Q2FudmFzUG9zLnk7XG4gICAgICAgICAgICBpZiAoKGR4ICogZHggKyBkeSAqIGR5KSA8IERSQUdfU1RBUlRfRElTVEFOQ0UgKiBEUkFHX1NUQVJUX0RJU1RBTkNFKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9kcmFnU3ByaXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9kcmFnU3ByaXRlID0gbmV3IGNjLk5vZGUoXCJEcmFnSWNvblwiKTtcbiAgICAgICAgICAgIGNvbnN0IHNwID0gdGhpcy5fZHJhZ1Nwcml0ZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9kcmFnZ2luZ0l0ZW0gfHwgKHRoaXMuX2RyYWdnaW5nRnJvbUVxdWlwbWVudCAmJiB0aGlzLl9kcmFnZ2luZ0Zyb21FcXVpcG1lbnQuX2l0ZW1EYXRhKTtcbiAgICAgICAgICAgIGlmIChpdGVtICYmIGl0ZW0uaWNvbikgc3Auc3ByaXRlRnJhbWUgPSBpdGVtLmljb247XG4gICAgICAgICAgICAvLyDorqnmi5bmi73lm77moIflsLrlr7jkuI7moLzlrZDlhoUgSWNvbiDnmoTmmL7npLrlsLrlr7jkuIDoh7TvvIjljIXlkKvniLboioLngrnnvKnmlL7vvIlcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZVNsb3QgPSB0aGlzLl9kcmFnZ2luZ1Nsb3QgfHwgdGhpcy5fZHJhZ2dpbmdGcm9tRXF1aXBtZW50O1xuICAgICAgICAgICAgY29uc3QgaWNvblNpemUgPSB0aGlzLl9kcmFnSWNvblNpemUgfHwgdGhpcy5fZ2V0U2xvdEljb25EaXNwbGF5U2l6ZShzb3VyY2VTbG90KTtcbiAgICAgICAgICAgIHRoaXMuX2RyYWdTcHJpdGUuc2V0Q29udGVudFNpemUoaWNvblNpemUud2lkdGgsIGljb25TaXplLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLl9kcmFnU3ByaXRlLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcbiAgICAgICAgICAgIHRoaXMuX2RyYWdTcHJpdGUuc2V0U2NhbGUoMSwgMSk7XG4gICAgICAgICAgICBpZiAoc3ApIHtcbiAgICAgICAgICAgICAgICBzcC5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYW52YXMuYWRkQ2hpbGQodGhpcy5fZHJhZ1Nwcml0ZSk7XG4gICAgICAgICAgICAvLyDku47ljp/lp4vlm77moIfkvY3nva7lvIDlp4vvvIzogIzkuI3mmK/op6bmkbjkvY3nva5cbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0UG9zID0gdGhpcy5fZHJhZ1N0YXJ0Q2FudmFzUG9zIHx8IGNhbnZhc1BvcztcbiAgICAgICAgICAgIHRoaXMuX2RyYWdTcHJpdGUuc2V0UG9zaXRpb24oc3RhcnRQb3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g6Lef6ZqP5omL5oyH56e75Yqo77yIQ2FudmFzIOWdkOagh+ezu++8iVxuICAgICAgICAgICAgdGhpcy5fZHJhZ1Nwcml0ZS5zZXRQb3NpdGlvbihjYW52YXNQb3MpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGFzeW5jIF9vbkdsb2JhbFRvdWNoRW5kKGV2ZW50KSB7XG4gICAgICAgIGlmICghZXZlbnQpIHJldHVybjtcblxuICAgICAgICBjb25zdCB3YXNEcmFnZ2luZyA9ICEhdGhpcy5fZHJhZ1Nwcml0ZTtcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdTcHJpdGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RyYWdTcHJpdGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5fZHJhZ1Nwcml0ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoYWREcmFnU3RhdGUgPSB0aGlzLl9kcmFnZ2luZ0l0ZW0gfHwgdGhpcy5fZHJhZ2dpbmdGcm9tRXF1aXBtZW50O1xuICAgICAgICBpZiAoIWhhZERyYWdTdGF0ZSkgcmV0dXJuOyAvLyDmsqHmnInmi5bmi73nirbmgIHvvIzkuI3lpITnkIZcblxuICAgICAgICAvLyDpmLvmraLkuovku7blhpLms6HvvIzpgb/lhY3op6blj5Hngrnlh7vlhbPpl63pnaLmnb9cbiAgICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5fZ2V0Tm9kZVVuZGVyVG91Y2goZXZlbnQpO1xuICAgICAgICBjb25zdCBjaGFyYWN0ZXJOYW1lID0gdGhpcy5jdXJyZW50VW5pdERhdGEgPyB0aGlzLmN1cnJlbnRVbml0RGF0YS5uYW1lIDogbnVsbDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2RyYWdnaW5nRnJvbUVxdWlwbWVudCAmJiBjaGFyYWN0ZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2xvdE5vZGUgPSB0aGlzLl9kcmFnZ2luZ0Zyb21FcXVpcG1lbnQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2xvdEluZGV4ID0gc2xvdE5vZGUuX3Nsb3RJbmRleDtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtRGF0YSA9IHNsb3ROb2RlLl9pdGVtRGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnZ2luZ0Zyb21FcXVpcG1lbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdnaW5nSXRlbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtRGF0YSB8fCAhd2FzRHJhZ2dpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xlYXJEcmFnU3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBFcXVpcG1lbnREYXRhTWFuYWdlciA9IHJlcXVpcmUoXCJFcXVpcG1lbnREYXRhTWFuYWdlclwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBJdGVtRGF0YU1hbmFnZXIgPSByZXF1aXJlKFwiSXRlbURhdGFNYW5hZ2VyXCIpO1xuICAgICAgICAgICAgICAgIC8vIOiwg+ivle+8muWNuOS4i+WJjeeahOijheWkh+anveS4juiDjOWMheaVsOmHj1xuICAgICAgICAgICAgICAgIGNvbnN0IGJlZm9yZUVxdWlwID0gYXdhaXQgRXF1aXBtZW50RGF0YU1hbmFnZXIuZ2V0RXF1aXBtZW50KGNoYXJhY3Rlck5hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJlZm9yZUNvdW50ID0gYXdhaXQgSXRlbURhdGFNYW5hZ2VyLmdldEl0ZW1Db3VudChpdGVtRGF0YS5pZCk7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbRXF1aXBEZWJ1Z10g5Y245LiL5YmNID0+IOinkuiJsj0ke2NoYXJhY3Rlck5hbWV9LCDmp73kvY09JHtzbG90SW5kZXh9LCBpdGVtSWQ9JHtpdGVtRGF0YS5pZH0sIOiDjOWMheaVsOmHjz0ke2JlZm9yZUNvdW50fSwg5qe95L2NPWAsIGJlZm9yZUVxdWlwICYmIGJlZm9yZUVxdWlwLnNsb3RzKTtcbiAgICAgICAgICAgICAgICAvLyDoo4XlpIfljaDnlKjog4zljIXmlbDph4/vvJrljbjkuIvml7bpnIDopoHmioroo4XlpIfov5jlm57og4zljIVcbiAgICAgICAgICAgICAgICBhd2FpdCBFcXVpcG1lbnREYXRhTWFuYWdlci51bmVxdWlwU2xvdChjaGFyYWN0ZXJOYW1lLCBzbG90SW5kZXgpO1xuICAgICAgICAgICAgICAgIGF3YWl0IEl0ZW1EYXRhTWFuYWdlci5hZGRJdGVtKGl0ZW1EYXRhLmlkLCAxKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhZnRlckVxdWlwID0gYXdhaXQgRXF1aXBtZW50RGF0YU1hbmFnZXIuZ2V0RXF1aXBtZW50KGNoYXJhY3Rlck5hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFmdGVyQ291bnQgPSBhd2FpdCBJdGVtRGF0YU1hbmFnZXIuZ2V0SXRlbUNvdW50KGl0ZW1EYXRhLmlkKTtcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtFcXVpcERlYnVnXSDljbjkuIvlkI4gPT4g6KeS6ImyPSR7Y2hhcmFjdGVyTmFtZX0sIOanveS9jT0ke3Nsb3RJbmRleH0sIGl0ZW1JZD0ke2l0ZW1EYXRhLmlkfSwg6IOM5YyF5pWw6YePPSR7YWZ0ZXJDb3VudH0sIOanveS9jT1gLCBhZnRlckVxdWlwICYmIGFmdGVyRXF1aXAuc2xvdHMpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX3VwZGF0ZUVxdWlwbWVudEJhcigpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX3VwZGF0ZUludmVudG9yeSgpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX2FwcGx5RXF1aXBtZW50Qm9udXNlc1RvRGlzcGxheSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuX2RyYWdnaW5nU2xvdCAmJiB0aGlzLl9kcmFnZ2luZ0l0ZW0gJiYgY2hhcmFjdGVyTmFtZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9kcmFnZ2luZ0l0ZW07XG4gICAgICAgICAgICAgICAgY29uc3QgSXRlbUNvbmZpZyA9IHJlcXVpcmUoXCJJdGVtQ29uZmlnXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNmZyA9IGl0ZW0uY29uZmlnIHx8IEl0ZW1Db25maWcuZ2V0SXRlbUJ5SWQoaXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbVRvRXF1aXAgPSB0aGlzLl9kcmFnZ2luZ0l0ZW07XG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhZ2dpbmdTbG90ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnZ2luZ0l0ZW0gPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmICghY2ZnIHx8IGNmZy50eXBlICE9PSBcImVxdWlwbWVudFwiIHx8ICFjZmcuZXF1aXBtZW50U2xvdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbGVhckRyYWdTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh3YXNEcmFnZ2luZyAmJiB0YXJnZXQgJiYgdGFyZ2V0LmlzRXF1aXBtZW50ICYmIHRhcmdldC5zbG90VHlwZSA9PT0gY2ZnLmVxdWlwbWVudFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgRXF1aXBtZW50RGF0YU1hbmFnZXIgPSByZXF1aXJlKFwiRXF1aXBtZW50RGF0YU1hbmFnZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IEl0ZW1EYXRhTWFuYWdlciA9IHJlcXVpcmUoXCJJdGVtRGF0YU1hbmFnZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNsb3RJbmRleCA9IHRhcmdldC5zbG90SW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBhd2FpdCBFcXVpcG1lbnREYXRhTWFuYWdlci5nZXRFcXVpcG1lbnQoY2hhcmFjdGVyTmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c55uu5qCH5qe95L2N5pys5p2l5bCx5piv6L+Z5Lu26KOF5aSH77yM55u05o6l5b+955Wl6L+Z5qyh5ouW5ou977yM5LiN5raI6ICX6IOM5YyF6YGT5YW3XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnQuc2xvdHMgJiYgY3VycmVudC5zbG90c1tzbG90SW5kZXhdID09PSBpdGVtVG9FcXVpcC5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDmp73kvY0gJHtzbG90SW5kZXh9IOW3sue7j+aYr+ijheWkhyAke2l0ZW1Ub0VxdWlwLmlkfe+8jOaLluaLveW/veeVpWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xlYXJEcmFnU3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIOKchSDmlrDlop7vvJrlkIzkuIDop5LoibLkuI3og73oo4XlpIfkuKTku7blrozlhajnm7jlkIznmoToo4XlpIfvvIjlkIzkuIDkuKogaXRlbUlk77yJXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnQuc2xvdHMgJiYgY3VycmVudC5zbG90cy5zb21lKChpZCwgaWR4KSA9PiBpZHggIT09IHNsb3RJbmRleCAmJiBpZCA9PT0gaXRlbVRvRXF1aXAuaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy53YXJuKGBbQ2hhcmFjdGVyVmlld1VJXSDop5LoibIgJHtjaGFyYWN0ZXJOYW1lfSDlt7Lnu4/oo4XlpIfkuobnm7jlkIznmoToo4XlpIcoJHtpdGVtVG9FcXVpcC5pZH0p77yM5pys5qyh5ouW5ou95LiN55Sf5pWIYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbGVhckRyYWdTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g6LCD6K+V77ya6KOF5aSH5YmN55qE6KOF5aSH5qe95LiO6IOM5YyF5pWw6YePXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJlZm9yZUNvdW50ID0gYXdhaXQgSXRlbURhdGFNYW5hZ2VyLmdldEl0ZW1Db3VudChpdGVtVG9FcXVpcC5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0VxdWlwRGVidWddIOijheWkh+WJjSA9PiDop5LoibI9JHtjaGFyYWN0ZXJOYW1lfSwg5qe95L2NPSR7c2xvdEluZGV4fSwgaXRlbUlkPSR7aXRlbVRvRXF1aXAuaWR9LCDog4zljIXmlbDph489JHtiZWZvcmVDb3VudH0sIOanveS9jT1gLCBjdXJyZW50ICYmIGN1cnJlbnQuc2xvdHMpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOivpeanveS9jeWOn+adpeacieijheWkh++8jOWFiOaKiuaXp+ijheWkh+i/mOWbnuiDjOWMhVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2SXRlbUlkID0gY3VycmVudC5zbG90c1tzbG90SW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJldkl0ZW1JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgSXRlbURhdGFNYW5hZ2VyLmFkZEl0ZW0ocHJldkl0ZW1JZCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyDmo4Dmn6Xog4zljIXph4zmmK/lkKbov5jmnInlj6/ku6Xoo4XlpIfnmoTmlbDph49cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY291bnQgPSBhd2FpdCBJdGVtRGF0YU1hbmFnZXIuZ2V0SXRlbUNvdW50KGl0ZW1Ub0VxdWlwLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50IDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFyRHJhZ1N0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyDku47og4zljIXmiaPpmaTkuIDku7bvvIzlho3lhpnlhaXoo4XlpIfmoI9cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgSXRlbURhdGFNYW5hZ2VyLnJlbW92ZUl0ZW0oaXRlbVRvRXF1aXAuaWQsIDEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvayA9IGF3YWl0IEVxdWlwbWVudERhdGFNYW5hZ2VyLnNldEVxdWlwbWVudFNsb3QoY2hhcmFjdGVyTmFtZSwgc2xvdEluZGV4LCBpdGVtVG9FcXVpcC5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOeQhuiuuuS4iuS4jeS8mui/m+adpe+8iOWJjemdouW3suWBmumHjeWkjeajgOafpe+8ie+8jOS4uuS6huWuieWFqO+8jOaKiuaJo+aOieeahOmBk+WFt+ihpeWbnuWOu1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgSXRlbURhdGFNYW5hZ2VyLmFkZEl0ZW0oaXRlbVRvRXF1aXAuaWQsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xlYXJEcmFnU3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFmdGVyRXF1aXAgPSBhd2FpdCBFcXVpcG1lbnREYXRhTWFuYWdlci5nZXRFcXVpcG1lbnQoY2hhcmFjdGVyTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFmdGVyQ291bnQgPSBhd2FpdCBJdGVtRGF0YU1hbmFnZXIuZ2V0SXRlbUNvdW50KGl0ZW1Ub0VxdWlwLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbRXF1aXBEZWJ1Z10g6KOF5aSH5ZCOID0+IOinkuiJsj0ke2NoYXJhY3Rlck5hbWV9LCDmp73kvY09JHtzbG90SW5kZXh9LCBpdGVtSWQ9JHtpdGVtVG9FcXVpcC5pZH0sIOiDjOWMheaVsOmHjz0ke2FmdGVyQ291bnR9LCDmp73kvY09YCwgYWZ0ZXJFcXVpcCAmJiBhZnRlckVxdWlwLnNsb3RzKTtcblxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl91cGRhdGVFcXVpcG1lbnRCYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fdXBkYXRlSW52ZW50b3J5KCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuX2FwcGx5RXF1aXBtZW50Qm9udXNlc1RvRGlzcGxheSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwiW0NoYXJhY3RlclZpZXdVSV0g5ouW5ou95aSE55CG6ZSZ6K+vOlwiLCBlLm1lc3NhZ2UpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy5fY2xlYXJEcmFnU3RhdGUoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmuIXpmaTmi5bmi73nirbmgIFcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9jbGVhckRyYWdTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmdTbG90ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmdJdGVtID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmdGcm9tRXF1aXBtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZHJhZ0ljb25TaXplID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZHJhZ1N0YXJ0Q2FudmFzUG9zID0gbnVsbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5p+Q5Liq5qC85a2Q5LitIEljb24g6IqC54K555qE4oCc5a6e6ZmF5pi+56S65bC65a+44oCd77yI6ICD6JmR54i26IqC54K557yp5pS+77yJ44CCXG4gICAgICog55So5LqO5ouW5ou95pe26K6pIERyYWdJY29uIOS4juagvOWtkOWGheWbvuagh+S/neaMgeWQjOagt+Wkp+Wwj+OAglxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBzbG90Tm9kZVxuICAgICAqIEByZXR1cm5zIHt7d2lkdGg6bnVtYmVyLGhlaWdodDpudW1iZXJ9fVxuICAgICAqL1xuICAgIF9nZXRTbG90SWNvbkRpc3BsYXlTaXplKHNsb3ROb2RlKSB7XG4gICAgICAgIGNvbnN0IHNsb3RTaXplID0gdGhpcy5pdGVtU2xvdFNpemUgfHwgODA7XG4gICAgICAgIGNvbnN0IGZhbGxiYWNrID0geyB3aWR0aDogc2xvdFNpemUgKiAwLjgsIGhlaWdodDogc2xvdFNpemUgKiAwLjggfTtcbiAgICAgICAgaWYgKCFzbG90Tm9kZSB8fCAhc2xvdE5vZGUuaXNWYWxpZCkgcmV0dXJuIGZhbGxiYWNrO1xuXG4gICAgICAgIGNvbnN0IGljb25Ob2RlID0gc2xvdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJJY29uXCIpIHx8IHNsb3ROb2RlO1xuICAgICAgICBpZiAoIWljb25Ob2RlIHx8ICFpY29uTm9kZS5pc1ZhbGlkKSByZXR1cm4gZmFsbGJhY2s7XG5cbiAgICAgICAgLy8g5LyY5YWI55So5LiW55WM5YyF5Zu055uS5ou/5Yiw4oCc5pyA57uI5pi+56S65bC65a+44oCd77yI5YyF5ZCr57yp5pS+77yJXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoaWNvbk5vZGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGljb25Ob2RlLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpO1xuICAgICAgICAgICAgICAgIGlmIChyZWN0ICYmIHJlY3Qud2lkdGggPiAwICYmIHJlY3QuaGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB3aWR0aDogcmVjdC53aWR0aCwgaGVpZ2h0OiByZWN0LmhlaWdodCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8g5b+955WlXG4gICAgICAgIH1cblxuICAgICAgICAvLyDlhZzlupXvvJrnlKjlhoXlrrnlsLrlr7ggKiBzbG90Tm9kZSDnvKnmlL5cbiAgICAgICAgY29uc3QgcmF3ID0gaWNvbk5vZGUuZ2V0Q29udGVudFNpemUgPyBpY29uTm9kZS5nZXRDb250ZW50U2l6ZSgpIDogbnVsbDtcbiAgICAgICAgY29uc3QgdyA9IHJhdyAmJiByYXcud2lkdGggPyByYXcud2lkdGggOiBzbG90U2l6ZTtcbiAgICAgICAgY29uc3QgaCA9IHJhdyAmJiByYXcuaGVpZ2h0ID8gcmF3LmhlaWdodCA6IHNsb3RTaXplO1xuICAgICAgICBjb25zdCBzeCA9IHR5cGVvZiBzbG90Tm9kZS5zY2FsZVggPT09IFwibnVtYmVyXCIgPyBzbG90Tm9kZS5zY2FsZVggOiAxO1xuICAgICAgICBjb25zdCBzeSA9IHR5cGVvZiBzbG90Tm9kZS5zY2FsZVkgPT09IFwibnVtYmVyXCIgPyBzbG90Tm9kZS5zY2FsZVkgOiAxO1xuICAgICAgICByZXR1cm4geyB3aWR0aDogdyAqIHN4LCBoZWlnaHQ6IGggKiBzeSB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDlsIblvZPliY3op5LoibLnmoToo4XlpIfliqDmiJDlupTnlKjliLDlvZPliY3mmL7npLrnmoTkurrnianljp/lnovkuIpcbiAgICAgKi9cbiAgICBhc3luYyBfYXBwbHlFcXVpcG1lbnRCb251c2VzVG9EaXNwbGF5KCkge1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIgfHwgIXRoaXMuY3VycmVudFVuaXREYXRhKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHN0YXRzID0gdGhpcy5jdXJyZW50RGlzcGxheVByZWZhYi5nZXRDb21wb25lbnQoXCJTdGF0c0NvbXBvbmVudFwiKTtcbiAgICAgICAgaWYgKCFzdGF0cyB8fCAhc3RhdHMuYXBwbHlFcXVpcG1lbnRCb251c2VzKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGJvbnVzZXMgPSBhd2FpdCB0aGlzLl9nZXRFcXVpcG1lbnRCb251c2VzKHRoaXMuY3VycmVudFVuaXREYXRhLm5hbWUpO1xuICAgICAgICBzdGF0cy5hcHBseUVxdWlwbWVudEJvbnVzZXMoYm9udXNlcyk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRzUGFuZWwgJiYgdGhpcy5zdGF0c1BhbmVsLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2hvd1N0YXRzUGFuZWwodGhpcy5jdXJyZW50VW5pdERhdGEpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiuvue9rumBk+WFt+agvOWtkOWGheWuuVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBzbG90Tm9kZSAtIOmBk+WFt+agvOWtkOiKgueCuVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIC0g6YGT5YW35pWw5o2uIHsgaWQsIG5hbWUsIGljb24sIGNvdW50IH1cbiAgICAgKi9cbiAgICBfc2V0SXRlbVNsb3Qoc2xvdE5vZGUsIGl0ZW0pIHtcbiAgICAgICAgaWYgKCFpdGVtIHx8ICFpdGVtLmNvdW50IHx8IGl0ZW0uY291bnQgPD0gMCkge1xuICAgICAgICAgICAgLy8g6YGT5YW35LiN5a2Y5Zyo5oiW5pWw6YeP5Li6MO+8jOa4heepuuagvOWtkFxuICAgICAgICAgICAgdGhpcy5faW5pdEl0ZW1TbG90KHNsb3ROb2RlLCBzbG90Tm9kZS5fc2xvdEluZGV4KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOafpeaJvuWbvuagh+iKgueCueWSjOaVsOmHj+agh+etvlxuICAgICAgICBjb25zdCBpY29uTm9kZSA9IHNsb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiSWNvblwiKSB8fCBzbG90Tm9kZTtcbiAgICAgICAgY29uc3QgY291bnRMYWJlbCA9IHNsb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiQ291bnRMYWJlbFwiKTtcblxuICAgICAgICAvLyDorr7nva7lm77moIdcbiAgICAgICAgaWYgKGljb25Ob2RlICYmIGl0ZW0uaWNvbikge1xuICAgICAgICAgICAgY29uc3Qgc3ByaXRlID0gaWNvbk5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpZiAoc3ByaXRlKSB7XG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gaXRlbS5pY29uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWNvbk5vZGUub3BhY2l0eSA9IDI1NTsgLy8g5a6M5YWo5LiN6YCP5piOXG4gICAgICAgIH1cblxuICAgICAgICAvLyDorr7nva7mlbDph49cbiAgICAgICAgaWYgKGNvdW50TGFiZWwpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gY291bnRMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY291bnQgJiYgaXRlbS5jb3VudCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gaXRlbS5jb3VudC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5L+d5a2Y6YGT5YW35pWw5o2uXG4gICAgICAgIHNsb3ROb2RlLl9pdGVtRGF0YSA9IGl0ZW07XG4gICAgICAgIHNsb3ROb2RlLl9pc0VtcHR5ID0gZmFsc2U7XG5cbiAgICAgICAgLy8g6K6w5b2V6Kem5pG45byA5aeL5pe26Ze077yI55So5LqO5Yy65YiG54K55Ye75ZKM6ZW/5oyJ77yJ77yb6KOF5aSH57G76YGT5YW36K6w5b2V5ouW5ou96LW354K5XG4gICAgICAgIHNsb3ROb2RlLl90b3VjaFN0YXJ0VGltZSA9IG51bGw7XG4gICAgICAgIHNsb3ROb2RlLl90b3VjaFN0YXJ0UG9zID0gbnVsbDtcbiAgICAgICAgc2xvdE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJUKTtcbiAgICAgICAgc2xvdE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgc2xvdE5vZGUuX3RvdWNoU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHNsb3ROb2RlLl90b3VjaFN0YXJ0UG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGNmZyA9IGl0ZW0uY29uZmlnIHx8IChpdGVtLmlkICYmIHJlcXVpcmUoXCJJdGVtQ29uZmlnXCIpLmdldEl0ZW1CeUlkKGl0ZW0uaWQpKTtcbiAgICAgICAgICAgIGlmIChjZmcgJiYgY2ZnLnR5cGUgPT09IFwiZXF1aXBtZW50XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnZ2luZ1Nsb3QgPSBzbG90Tm9kZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnZ2luZ0l0ZW0gPSBpdGVtO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdJY29uU2l6ZSA9IHRoaXMuX2dldFNsb3RJY29uRGlzcGxheVNpemUoc2xvdE5vZGUpO1xuICAgICAgICAgICAgICAgIC8vIOiusOW9leWOn+Wni+Wbvuagh+WcqCBDYW52YXMg5LiL55qE5L2N572u77yI55So5LqO5LuO5Y6f5qC85a2Q4oCc5ou95Ye65p2l4oCd77yJXG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbk5vZGUgPSBzbG90Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIkljb25cIikgfHwgc2xvdE5vZGU7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FudmFzICYmIGljb25Ob2RlICYmIGljb25Ob2RlLmlzVmFsaWQgJiYgaWNvbk5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSICYmIGNhbnZhcy5jb252ZXJ0VG9Ob2RlU3BhY2VBUikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB3b3JsZFBvcyA9IGljb25Ob2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdTdGFydENhbnZhc1BvcyA9IGNhbnZhcy5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZHJhZ1N0YXJ0Q2FudmFzUG9zID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIC8vIOe7keWumuinpuaRuOe7k+adn+S6i+S7tu+8iOWkhOeQhuW3pumUrueCueWHu+WSjOmVv+aMie+8m+iLpeato+WcqOaLluaLveWImeS4jeWGjeinpuWPkeeCueWHu++8iVxuICAgICAgICBzbG90Tm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKTtcbiAgICAgICAgc2xvdE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9kcmFnU3ByaXRlKSB7XG4gICAgICAgICAgICAgICAgc2xvdE5vZGUuX3RvdWNoU3RhcnRUaW1lID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcmVzc1RpbWUgPSBzbG90Tm9kZS5fdG91Y2hTdGFydFRpbWUgPyAoRGF0ZS5ub3coKSAtIHNsb3ROb2RlLl90b3VjaFN0YXJ0VGltZSkgOiAwO1xuICAgICAgICAgICAgY29uc3QgTE9OR19QUkVTU19USU1FID0gNTAwO1xuXG4gICAgICAgICAgICBpZiAocHJlc3NUaW1lID49IExPTkdfUFJFU1NfVElNRSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dJdGVtVG9vbHRpcE9uVG91Y2goc2xvdE5vZGUsIGl0ZW0sIGV2ZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJlc3NUaW1lID4gMCAmJiBwcmVzc1RpbWUgPCBMT05HX1BSRVNTX1RJTUUpIHtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbkl0ZW1TbG90Q2xpY2soc2xvdE5vZGUsIGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2xvdE5vZGUuX3RvdWNoU3RhcnRUaW1lID0gbnVsbDtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgLy8g57uR5a6a5Y+z6ZSu54K55Ye75LqL5Lu277yI5pi+56S66YGT5YW35L+h5oGv77yJLSDku4VQQ+err1xuICAgICAgICB0aGlzLl9zZXR1cEl0ZW1Ub29sdGlwKHNsb3ROb2RlLCBpdGVtKTtcblxuICAgICAgICAvLyDnoa7kv53lj6/ku6XmjqXmlLbop6bmkbjkuovku7ZcbiAgICAgICAgc2xvdE5vZGUuc2V0Q29udGVudFNpemUodGhpcy5pdGVtU2xvdFNpemUsIHRoaXMuaXRlbVNsb3RTaXplKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6K6+572u6YGT5YW35qC85a2Q55qE5Y+z6ZSu54K55Ye75LqL5Lu277yI5pi+56S66YGT5YW35L+h5oGv77yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IHNsb3ROb2RlIC0g6YGT5YW35qC85a2Q6IqC54K5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gLSDpgZPlhbfmlbDmja5cbiAgICAgKi9cbiAgICBfc2V0dXBJdGVtVG9vbHRpcChzbG90Tm9kZSwgaXRlbSkge1xuICAgICAgICBpZiAoIXRoaXMuaXRlbVRvb2x0aXApIHtcbiAgICAgICAgICAgIC8vIOWmguaenOayoeacieiuvue9rnRvb2x0aXDoioLngrnvvIzot7Pov4dcbiAgICAgICAgICAgIGNjLndhcm4oXCJbQ2hhcmFjdGVyVmlld1VJXSBpdGVtVG9vbHRpcOiKgueCueacque7keWumu+8jOi3s+i/h3Rvb2x0aXDorr7nva5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0b29sdGlwQ29tcG9uZW50ID0gdGhpcy5pdGVtVG9vbHRpcC5nZXRDb21wb25lbnQoXCJJdGVtVG9vbHRpcFwiKTtcbiAgICAgICAgaWYgKCF0b29sdGlwQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiW0NoYXJhY3RlclZpZXdVSV0gaXRlbVRvb2x0aXDoioLngrnmsqHmnIlJdGVtVG9vbHRpcOe7hOS7tu+8jOivt+a3u+WKoEl0ZW1Ub29sdGlw57uE5Lu2XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpdGVtIHx8ICFpdGVtLmlkKSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiW0NoYXJhY3RlclZpZXdVSV0g6YGT5YW35pWw5o2u5peg5pWI77yM57y65bCRaWTlrZfmrrVcIiwgaXRlbSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmt7vliqDosIPor5Xml6Xlv5dcbiAgICAgICAgY2MubG9nKFwiW0NoYXJhY3RlclZpZXdVSV0g6K6+572u6YGT5YW35Y+z6ZSu54K55Ye7dG9vbHRpcDpcIiwgaXRlbS5pZCwgXCJ0b29sdGlw6IqC54K5OlwiLCB0aGlzLml0ZW1Ub29sdGlwLm5hbWUpO1xuXG4gICAgICAgIC8vIOenu+mZpOaXp+eahOm8oOagh+S6i+S7tuebkeWQrFxuICAgICAgICBzbG90Tm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTik7XG4gICAgICAgIHNsb3ROb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9VUCk7XG5cbiAgICAgICAgLy8g57uR5a6a6byg5qCH5Y+z6ZSu5oyJ5LiL5LqL5Lu277yI5pi+56S66YGT5YW35L+h5oGv77yJXG4gICAgICAgIHNsb3ROb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sIChldmVudCkgPT4ge1xuICAgICAgICAgICAgLy8g5qOA5p+l5piv5ZCm5piv5Y+z6ZSuXG4gICAgICAgICAgICAvLyDms6jmhI/vvJpjYy5FdmVudC5FdmVudE1vdXNlLkJVVFRPTl9SSUdIVCDnmoTlgLzmmK8gMlxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZXZlbnQuZ2V0QnV0dG9uID8gZXZlbnQuZ2V0QnV0dG9uKCkgOiAtMTtcbiAgICAgICAgICAgIGlmIChidXR0b24gPT09IDIgfHwgYnV0dG9uID09PSBjYy5FdmVudC5FdmVudE1vdXNlLkJVVFRPTl9SSUdIVCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyDpmLvmraLkuovku7blhpLms6HvvIzpmLLmraLop6blj5Hlj7PplK7oj5zljZVcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCAmJiBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyDpmLvmraLpu5jorqTlj7PplK7oj5zljZVcblxuICAgICAgICAgICAgICAgIC8vIOS9v+eUqGl0ZW0uaWTkvZzkuLppdGVtSWTkvKDpgJLnu5l0b29sdGlwXG4gICAgICAgICAgICAgICAgY29uc3QgdG9vbHRpcERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1JZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IGl0ZW0uY291bnRcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8g5Lyg6YCS6YGT5YW35qC85a2Q6IqC54K577yM6K6pdG9vbHRpcOaYvuekuuWcqOiKgueCueWPs+S4iuaWuVxuICAgICAgICAgICAgICAgIHRvb2x0aXBDb21wb25lbnQuc2hvd0l0ZW1JbmZvKHRvb2x0aXBEYXRhLCBzbG90Tm9kZSk7XG5cbiAgICAgICAgICAgICAgICBjYy5sb2coXCJbQ2hhcmFjdGVyVmlld1VJXSDlj7PplK7ngrnlh7vpgZPlhbfvvIzmmL7npLrkv6Hmga86XCIsIGl0ZW0uaWQsIFwi5oyJ6ZKuOlwiLCBidXR0b24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAvLyDnu5HlrprpvKDmoIflj7PplK7ph4rmlL7kuovku7bvvIjpmpDol4/pgZPlhbfkv6Hmga/vvIlcbiAgICAgICAgc2xvdE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfVVAsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgLy8g5qOA5p+l5piv5ZCm5piv5Y+z6ZSuXG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBldmVudC5nZXRCdXR0b24gPyBldmVudC5nZXRCdXR0b24oKSA6IC0xO1xuICAgICAgICAgICAgaWYgKGJ1dHRvbiA9PT0gMiB8fCBidXR0b24gPT09IGNjLkV2ZW50LkV2ZW50TW91c2UuQlVUVE9OX1JJR0hUKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgJiYgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0b29sdGlwQ29tcG9uZW50LmhpZGVJdGVtSW5mbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDlnKjop6bmkbjorr7lpIfkuIrmmL7npLrpgZPlhbfkv6Hmga/vvIjplb/mjInop6blj5HvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gc2xvdE5vZGUgLSDpgZPlhbfmoLzlrZDoioLngrlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSAtIOmBk+WFt+aVsOaNrlxuICAgICAqIEBwYXJhbSB7Y2MuRXZlbnR9IGV2ZW50IC0g6Kem5pG45LqL5Lu2XG4gICAgICovXG4gICAgX3Nob3dJdGVtVG9vbHRpcE9uVG91Y2goc2xvdE5vZGUsIGl0ZW0sIGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5pdGVtVG9vbHRpcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdG9vbHRpcENvbXBvbmVudCA9IHRoaXMuaXRlbVRvb2x0aXAuZ2V0Q29tcG9uZW50KFwiSXRlbVRvb2x0aXBcIik7XG4gICAgICAgIGlmICghdG9vbHRpcENvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdG9vbHRpcERhdGEgPSB7XG4gICAgICAgICAgICBpdGVtSWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICBjb3VudDogaXRlbS5jb3VudFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIOS8oOmAkumBk+WFt+agvOWtkOiKgueCue+8jOiuqXRvb2x0aXDmmL7npLrlnKjoioLngrnlj7PkuIrmlrlcbiAgICAgICAgdG9vbHRpcENvbXBvbmVudC5zaG93SXRlbUluZm8odG9vbHRpcERhdGEsIHNsb3ROb2RlKTtcblxuICAgICAgICBjYy5sb2coXCJbQ2hhcmFjdGVyVmlld1VJXSDplb/mjInpgZPlhbfvvIzmmL7npLrkv6Hmga86XCIsIGl0ZW0uaWQpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDpgZPlhbfmoLzlrZDngrnlh7vkuovku7bvvIjkvb/nlKjpgZPlhbfvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gc2xvdE5vZGUgLSDpgZPlhbfmoLzlrZDoioLngrlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSAtIOmBk+WFt+aVsOaNrlxuICAgICAqL1xuICAgIGFzeW5jIF9vbkl0ZW1TbG90Q2xpY2soc2xvdE5vZGUsIGl0ZW0pIHtcbiAgICAgICAgaWYgKCFpdGVtIHx8ICFpdGVtLmNvbmZpZykge1xuICAgICAgICAgICAgY2Mud2FybihcIltDaGFyYWN0ZXJWaWV3VUldIOaXoOaViOeahOmBk+WFt+aVsOaNrlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOajgOafpeaYr+WQpuacieW9k+WJjeaYvuekuueahOinkuiJslxuICAgICAgICBpZiAoIXRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJbQ2hhcmFjdGVyVmlld1VJXSDor7flhYjpgInmi6nkuIDkuKrop5LoibJcIik7XG4gICAgICAgICAgICAvLyDlj6/ku6XmmL7npLrmj5DnpLrnu5nnlKjmiLdcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IEl0ZW1TeXN0ZW0gPSByZXF1aXJlKFwiSXRlbVN5c3RlbVwiKTtcblxuICAgICAgICAvLyDkvb/nlKjpgZPlhbdcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgSXRlbVN5c3RlbS51c2VJdGVtKHRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIsIGl0ZW0uaWQpO1xuXG4gICAgICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDinJMg5L2/55So6YGT5YW35oiQ5YqfOiAke2l0ZW0ubmFtZX0gLSAke3Jlc3VsdC5tZXNzYWdlfWApO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5za2lsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOinkuiJsuW3suWtpuS8muaKgOiDvTogJHtyZXN1bHQuc2tpbGxOYW1lfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDliLfmlrDpgZPlhbfmoI/mmL7npLpcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX3VwZGF0ZUludmVudG9yeSgpO1xuXG4gICAgICAgICAgICAvLyDmm7TmlrDop5LoibLlsZ7mgKfmmL7npLrvvIjlpoLmnpzlsZ7mgKfpnaLmnb/lt7LmiZPlvIDvvIlcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRzUGFuZWwgJiYgdGhpcy5zdGF0c1BhbmVsLmFjdGl2ZSAmJiB0aGlzLmN1cnJlbnRVbml0RGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dTdGF0c1BhbmVsKHRoaXMuY3VycmVudFVuaXREYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVE9ETzog5Y+v5Lul5pi+56S65L2/55So5oiQ5Yqf55qE5o+Q56S6VUnvvIjlpoIgVG9hc3Qg5pi+56S644CM5oqA6IO95a2m5Lmg5oiQ5Yqf44CN77yJXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy53YXJuKGBbQ2hhcmFjdGVyVmlld1VJXSDinJcg5L2/55So6YGT5YW35aSx6LSlOiAke2l0ZW0ubmFtZX0gLSAke3Jlc3VsdC5tZXNzYWdlfWApO1xuICAgICAgICAgICAgLy8gVE9ETzog5Y+v5Lul5pi+56S66ZSZ6K+v5o+Q56S6VUlcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDorr7nva7pgZPlhbflm77moIfvvIjku45JdGVtSWNvblNldHRlcue7hOS7tuiOt+WPlu+8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3NldHVwSXRlbUljb25zKCkge1xuICAgICAgICAvLyDmn6Xmib7lnLrmma/kuK3nmoRJdGVtSWNvblNldHRlcue7hOS7tlxuICAgICAgICBjb25zdCBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XG4gICAgICAgIGlmICghc2NlbmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHNjZW5lLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xuICAgICAgICBpZiAoIWNhbnZhcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5p+l5om+SXRlbUljb25TZXR0ZXLnu4Tku7ZcbiAgICAgICAgY29uc3QgaWNvblNldHRlciA9IGNhbnZhcy5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFwiSXRlbUljb25TZXR0ZXJcIik7XG4gICAgICAgIGlmIChpY29uU2V0dGVyKSB7XG4gICAgICAgICAgICBjYy5sb2coXCJbQ2hhcmFjdGVyVmlld1VJXSDmib7liLBJdGVtSWNvblNldHRlcue7hOS7tu+8jOmBk+WFt+Wbvuagh+W3suiuvue9rlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIltDaGFyYWN0ZXJWaWV3VUldIOacquaJvuWIsEl0ZW1JY29uU2V0dGVy57uE5Lu277yM6YGT5YW35Zu+5qCH6ZyA6KaB5Zyo5Luj56CB5Lit6K6+572uXCIpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMlum7mOiupOmBk+WFt++8iOa3u+WKoDXkuKrljYfnuqfoja/msLTvvIzku4XpppbmrKHov5vlhaXml7bvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFzeW5jIF9pbml0RGVmYXVsdEl0ZW1zKCkge1xuICAgICAgICBjb25zdCBJdGVtRGF0YU1hbmFnZXIgPSByZXF1aXJlKFwiSXRlbURhdGFNYW5hZ2VyXCIpO1xuXG4gICAgICAgIC8vIOajgOafpeaYr+WQpuW3sue7j+WIneWni+WMlui/h+mBk+WFt++8iOS9v+eUqGxvY2FsU3RvcmFnZeagh+W/l++8iVxuICAgICAgICBjb25zdCBJTklUX0ZMQUdfS0VZID0gXCJjaGFyYWN0ZXJfdmlld19pdGVtc19pbml0aWFsaXplZFwiO1xuICAgICAgICBjb25zdCBoYXNJbml0aWFsaXplZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShJTklUX0ZMQUdfS0VZKTtcblxuICAgICAgICBpZiAoaGFzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIC8vIOW3sue7j+WIneWni+WMlui/h++8jOS4jeWGjeiHquWKqOa3u+WKoOmBk+WFt1xuICAgICAgICAgICAgY2MubG9nKFwiW0NoYXJhY3RlclZpZXdVSV0g6YGT5YW35bey5Yid5aeL5YyW6L+H77yM6Lez6L+H6Ieq5Yqo5re75YqgXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5qOA5p+l5piv5ZCm5bey5pyJ5Y2H57qn6I2v5rC0XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb3VudCA9IGF3YWl0IEl0ZW1EYXRhTWFuYWdlci5nZXRJdGVtQ291bnQoXCJ1cGdyYWRlX3BvdGlvblwiKTtcblxuICAgICAgICAvLyDlpoLmnpzov5jmsqHmnInljYfnuqfoja/msLTvvIzmt7vliqA15Liq77yI5LuF6aaW5qyh77yJXG4gICAgICAgIGlmIChjdXJyZW50Q291bnQgPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCBJdGVtRGF0YU1hbmFnZXIuYWRkSXRlbShcInVwZ3JhZGVfcG90aW9uXCIsIDEwKTtcbiAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwiW0NoYXJhY3RlclZpZXdVSV0g4pyTIOmmluasoei/m+WFpe+8jOW3sua3u+WKoDEw5Liq5Y2H57qn6I2v5rC05Yiw5YWo5bGA6YGT5YW35qCPXCIpO1xuXG4gICAgICAgICAgICAgICAgLy8g5qCH6K6w5bey5Yid5aeL5YyW77yM56Gu5L+d5Y+q5Yid5aeL5YyW5LiA5qyhXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKElOSVRfRkxBR19LRVksIFwidHJ1ZVwiKTtcblxuICAgICAgICAgICAgICAgIC8vIOWmguaenOW9k+WJjeW3sumAieS4reinkuiJsu+8jOWIt+aWsOmBk+WFt+agj+aYvuekulxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRVbml0RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl91cGRhdGVJbnZlbnRvcnkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiW0NoYXJhY3RlclZpZXdVSV0g4pyXIOa3u+WKoOWNh+e6p+iNr+awtOWksei0pVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWmguaenOW3suacieWNh+e6p+iNr+awtO+8jOS5n+agh+iusOS4uuW3suWIneWni+WMlu+8iOWPr+iDveaYr+S7juWFtuS7luWcsOaWuea3u+WKoOeahO+8iVxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKElOSVRfRkxBR19LRVksIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5YWo5bGA6YGT5YW35qCP5bey5pyJICR7Y3VycmVudENvdW50fSDkuKrljYfnuqfoja/msLTvvIzmoIforrDkuLrlt7LliJ3lp4vljJZgKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDojrflj5bpgZPlhbfliJfooajvvIjlhajlsYDlhbHkuqvvvIzmiYDmnInop5LoibLlhbHnlKjvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJOYW1lIC0g6KeS6Imy5ZCN56ew77yI5bey5bqf5byD77yM5L+d55WZ55So5LqO5YW85a6577yJXG4gICAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXk+fEFycmF5fSDpgZPlhbfliJfooaggW3sgaWQsIG5hbWUsIGljb24sIGNvdW50IH0sIC4uLl3vvIjmnI3liqHlmajmqKHlvI/kuIvov5Tlm55Qcm9taXNl77yJXG4gICAgICovXG4gICAgYXN5bmMgX2dldENoYXJhY3Rlckl0ZW1zKGNoYXJhY3Rlck5hbWUpIHtcbiAgICAgICAgY29uc3QgSXRlbURhdGFNYW5hZ2VyID0gcmVxdWlyZShcIkl0ZW1EYXRhTWFuYWdlclwiKTtcblxuICAgICAgICAvLyDojrflj5blhajlsYDpgZPlhbfvvIjmiYDmnInop5LoibLlhbHkuqvvvIzlv73nlaVjaGFyYWN0ZXJOYW1l5Y+C5pWw77yJXG4gICAgICAgIGNvbnN0IGl0ZW1zV2l0aENvbmZpZyA9IGF3YWl0IEl0ZW1EYXRhTWFuYWdlci5nZXRBbGxJdGVtc1dpdGhDb25maWcoKTtcblxuICAgICAgICAvLyDovazmjaLkuLrmmL7npLrmoLzlvI/vvIzlubbov4fmu6TmjonmlbDph4/kuLow55qE6YGT5YW377yI5LiA5qyh5oCn5raI6ICX5ZOB5L2/55So5a6M5ZCO5bqU6K+l5raI5aSx77yJXG4gICAgICAgIHJldHVybiBpdGVtc1dpdGhDb25maWdcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLmNvdW50ID4gMCkgLy8g5Y+q5pi+56S65pWw6YeP5aSn5LqOMOeahOmBk+WFt1xuICAgICAgICAgICAgLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pdGVtSWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0uY29uZmlnLmRpc3BsYXlOYW1lIHx8IGl0ZW0uY29uZmlnLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGljb246IGl0ZW0uY29uZmlnLmljb24sIC8vIFNwcml0ZUZyYW1l6LWE5rqQXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiBpdGVtLmNvdW50LFxuICAgICAgICAgICAgICAgICAgICBjb25maWc6IGl0ZW0uY29uZmlnIC8vIOS/neWtmOWujOaVtOmFjee9ru+8jOeUqOS6juWQjue7reS9v+eUqOmBk+WFt1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yib5bu65aS05YOPXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdW5pdERhdGEgLSDljZXkvY3mlbDmja5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGVhbSAtIOmYn+S8jeexu+Wei++8iFwiaGVyb1wiIOaIliBcIm1vbnN0ZXJcIu+8iVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIOe0ouW8lVxuICAgICAqL1xuICAgIF9jcmVhdGVBdmF0YXIodW5pdERhdGEsIHRlYW0sIGluZGV4KSB7XG4gICAgICAgIGlmICghdW5pdERhdGEgfHwgIXVuaXREYXRhLm5hbWUpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKGBbQ2hhcmFjdGVyVmlld1VJXSBfY3JlYXRlQXZhdGFyOiB1bml0RGF0YeaXoOaViGAsIHVuaXREYXRhKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWunuS+i+WMluWktOWDj1ByZWZhYlxuICAgICAgICBjb25zdCBhdmF0YXJOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5hdmF0YXJQcmVmYWIpO1xuICAgICAgICBhdmF0YXJOb2RlLm5hbWUgPSBgQXZhdGFyXyR7dW5pdERhdGEubmFtZX1gO1xuXG4gICAgICAgIC8vIOS/neWtmOWNleS9jeaVsOaNruWIsOiKgueCue+8iOa1heaLt+i0ne+8jOS/neeVmVByZWZhYuW8leeUqO+8iVxuICAgICAgICBhdmF0YXJOb2RlLl91bml0RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHVuaXREYXRhKTtcbiAgICAgICAgYXZhdGFyTm9kZS5fdGVhbSA9IHRlYW07XG5cbiAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDliJvlu7rlpLTlg486IG5hbWU9JHt1bml0RGF0YS5uYW1lfSwgdGVhbT0ke3RlYW19LCBpbmRleD0ke2luZGV4fSwgcHJlZmFiPSR7dW5pdERhdGEucHJlZmFiID8gdW5pdERhdGEucHJlZmFiLm5hbWUgOiAnbnVsbCd9YCk7XG5cbiAgICAgICAgLy8g5re75Yqg5Yiw5a655ZmoXG4gICAgICAgIHRoaXMuYXZhdGFyTGlzdENvbnRhaW5lci5hZGRDaGlsZChhdmF0YXJOb2RlKTtcblxuICAgICAgICAvLyDorr7nva7kvY3nva7vvIjlnoLnm7TmjpLliJfvvIlcbiAgICAgICAgY29uc3Qgc3BhY2luZyA9IHRoaXMuYXZhdGFyU3BhY2luZyB8fCAxMDA7XG4gICAgICAgIGNvbnN0IHN0YXJ0WSA9IDIwMDsgLy8g5LuO5LiK5pa55byA5aeLXG4gICAgICAgIGNvbnN0IHkgPSBzdGFydFkgLSAoaW5kZXggKiBzcGFjaW5nKTtcbiAgICAgICAgYXZhdGFyTm9kZS5zZXRQb3NpdGlvbigwLCB5KTsvL1RPRE86IOi/memHjOmcgOimgeagueaNrumYn+S8jeexu+Wei+iuvue9ruS9jee9rlxuXG4gICAgICAgIC8vIOiuvue9ruWktOWDj+WbvueJh1xuICAgICAgICBjb25zdCBhdmF0YXJDb21wID0gYXZhdGFyTm9kZS5nZXRDb21wb25lbnQoXCJBdmF0YXJJdGVtXCIpO1xuICAgICAgICBpZiAoYXZhdGFyQ29tcCkge1xuICAgICAgICAgICAgYXZhdGFyQ29tcC5pbml0KHVuaXREYXRhLCB0ZWFtLCB0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWmguaenOayoeaciee7hOS7tu+8jOaJi+WKqOiuvue9rlxuICAgICAgICAgICAgY29uc3QgaWNvbk5vZGUgPSBhdmF0YXJOb2RlLmdldENoaWxkQnlOYW1lKFwiSWNvblwiKTtcbiAgICAgICAgICAgIGlmIChpY29uTm9kZSAmJiB1bml0RGF0YS5pY29uKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlID0gaWNvbk5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNwcml0ZSkge1xuICAgICAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB1bml0RGF0YS5pY29uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOe7keWumueCueWHu+S6i+S7tu+8iOS7juiKgueCueiOt+WPlnVuaXREYXRh77yM6YG/5YWN6Zet5YyF5byV55So6Zeu6aKY77yJXG4gICAgICAgIGF2YXRhck5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICAvLyDkvJjlhYjku47oioLngrnojrflj5Z1bml0RGF0Ye+8iOehruS/neaVsOaNruato+ehru+8iVxuICAgICAgICAgICAgY29uc3Qgbm9kZVVuaXREYXRhID0gYXZhdGFyTm9kZS5fdW5pdERhdGEgfHwgdW5pdERhdGE7XG4gICAgICAgICAgICBjb25zdCBub2RlVGVhbSA9IGF2YXRhck5vZGUuX3RlYW0gfHwgdGVhbTtcbiAgICAgICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5aS05YOP54K55Ye75LqL5Lu26Kem5Y+ROiDoioLngrnlkI3np7A9JHthdmF0YXJOb2RlLm5hbWV9LCB1bml0RGF0YS5uYW1lPSR7bm9kZVVuaXREYXRhLm5hbWV9LCB0ZWFtPSR7bm9kZVRlYW19YCk7XG4gICAgICAgICAgICB0aGlzLl9vbkF2YXRhckNsaWNrKG5vZGVVbml0RGF0YSwgbm9kZVRlYW0pO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAvLyDnoa7kv53lj6/ku6XmjqXmlLbop6bmkbjkuovku7ZcbiAgICAgICAgYXZhdGFyTm9kZS5zZXRDb250ZW50U2l6ZSgxMDAsIDEwMCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWktOWDj+eCueWHu+S6i+S7tlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHVuaXREYXRhIC0g5Y2V5L2N5pWw5o2uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRlYW0gLSDpmJ/kvI3nsbvlnotcbiAgICAgKi9cbiAgICBhc3luYyBfb25BdmF0YXJDbGljayh1bml0RGF0YSwgdGVhbSkge1xuICAgICAgICBpZiAoIXVuaXREYXRhKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihgW0NoYXJhY3RlclZpZXdVSV0g54K55Ye75aS05YOP5aSx6LSlOiB1bml0RGF0YeS4uuepumApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g54K55Ye75aS05YOPOiAke3VuaXREYXRhLm5hbWV9LCB0ZWFtPSR7dGVhbX0sIHByZWZhYj0ke3VuaXREYXRhLnByZWZhYiA/IHVuaXREYXRhLnByZWZhYi5uYW1lIDogJ251bGwnfWApO1xuICAgICAgICB0aGlzLl9kaXNwbGF5Q2hhcmFjdGVyUHJlZmFiKHVuaXREYXRhKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5pi+56S65Lq654mp5Y6f5Z6LXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdW5pdERhdGEgLSDljZXkvY3mlbDmja5cbiAgICAgKi9cbiAgICBhc3luYyBfZGlzcGxheUNoYXJhY3RlclByZWZhYih1bml0RGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMuY2hhcmFjdGVyRGlzcGxheUFyZWEpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJbQ2hhcmFjdGVyVmlld1VJXSDmnKrorr7nva5jaGFyYWN0ZXJEaXNwbGF5QXJlYe+8jOaXoOazleaYvuekuuS6uueJqeWOn+Wei1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOa4hemZpOS5i+WJjeaYvuekuueahOWOn+Wei1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50RGlzcGxheVByZWZhYikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGlzcGxheVByZWZhYi5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOmakOiXj+WxnuaAp+mdouadv1xuICAgICAgICBpZiAodGhpcy5zdGF0c1BhbmVsKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRzUGFuZWwuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDkv53lrZjlvZPliY3ljZXkvY3mlbDmja5cbiAgICAgICAgdGhpcy5jdXJyZW50VW5pdERhdGEgPSB1bml0RGF0YTtcblxuICAgICAgICAvLyDmm7TmlrDpgZPlhbfmoI/kuI7oo4XlpIfmoI/vvIjmr4/kvY3oi7Hpm4Too4XlpIfni6znq4vvvIlcbiAgICAgICAgYXdhaXQgdGhpcy5fdXBkYXRlSW52ZW50b3J5KCk7XG4gICAgICAgIGF3YWl0IHRoaXMuX3VwZGF0ZUVxdWlwbWVudEJhcigpO1xuXG4gICAgICAgIC8vIOWmguaenOaciVByZWZhYu+8jOWunuS+i+WMluW5tuaYvuekulxuICAgICAgICBpZiAodW5pdERhdGEucHJlZmFiKSB7XG4gICAgICAgICAgICBjb25zdCBwcmVmYWJJbnN0YW5jZSA9IGNjLmluc3RhbnRpYXRlKHVuaXREYXRhLnByZWZhYik7XG4gICAgICAgICAgICBwcmVmYWJJbnN0YW5jZS5uYW1lID0gYERpc3BsYXlfJHt1bml0RGF0YS5uYW1lfWA7XG5cbiAgICAgICAgICAgIC8vIOS/neWtmOWOn+Wni+inkuiJsuWQjeensO+8jOeUqOS6juaVsOaNruS/neWtmOWSjOWKoOi9vVxuICAgICAgICAgICAgcHJlZmFiSW5zdGFuY2UuX29yaWdpbmFsQ2hhcmFjdGVyTmFtZSA9IHVuaXREYXRhLm5hbWU7XG5cbiAgICAgICAgICAgIC8vIOehruS/neiKgueCueWPr+ingVxuICAgICAgICAgICAgcHJlZmFiSW5zdGFuY2UuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHByZWZhYkluc3RhbmNlLm9wYWNpdHkgPSAyNTU7XG5cbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyRGlzcGxheUFyZWEuYWRkQ2hpbGQocHJlZmFiSW5zdGFuY2UpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGlzcGxheVByZWZhYiA9IHByZWZhYkluc3RhbmNlO1xuXG4gICAgICAgICAgICAvLyDorr7nva7kvY3nva7lkoznvKnmlL7vvIjlsYXkuK3mmL7npLrvvIznvKnlsI/mmL7npLrvvIzkvY3nva7lkJHkuIrosIPmlbTvvIlcbiAgICAgICAgICAgIHByZWZhYkluc3RhbmNlLnNldFBvc2l0aW9uKDAsIDEwMCk7XG4gICAgICAgICAgICBwcmVmYWJJbnN0YW5jZS5zZXRTY2FsZSgwLjcpO1xuXG4gICAgICAgICAgICAvLyDliJ3lp4vljJbop5LoibLlsZ7mgKfvvIjmoLnmja7kv53lrZjnmoTnrYnnuqfmlbDmja7vvIzmlK/mjIHlvILmraXvvIlcbiAgICAgICAgICAgIHRoaXMuX2luaXRDaGFyYWN0ZXJTdGF0cyhwcmVmYWJJbnN0YW5jZSwgdW5pdERhdGEpLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtDaGFyYWN0ZXJWaWV3VUldIOWIneWni+WMluinkuiJsuWxnuaAp+Wksei0pTogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyDnu5Hlrprngrnlh7vkuovku7bvvIjngrnlh7vkurrnianljp/lnovmmL7npLrlsZ7mgKfpnaLmnb/vvIlcbiAgICAgICAgICAgIHByZWZhYkluc3RhbmNlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIOmYu+atouS6i+S7tuWGkuazoVxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dTdGF0c1BhbmVsKHVuaXREYXRhKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgICAvLyDnoa7kv53lj6/ku6XmjqXmlLbop6bmkbjkuovku7ZcbiAgICAgICAgICAgIHByZWZhYkluc3RhbmNlLnNldENvbnRlbnRTaXplKDIwMCwgMjAwKTtcblxuICAgICAgICAgICAgLy8g5qCH6K6w6L+Z5piv5Lq654mp5Y6f5Z6L6IqC54K577yI55So5LqO5Yik5pat54K55Ye75L2N572u77yJXG4gICAgICAgICAgICBwcmVmYWJJbnN0YW5jZS5faXNDaGFyYWN0ZXJQcmVmYWIgPSB0cnVlO1xuXG4gICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOKckyDmmL7npLrkurrnianljp/lnos6ICR7dW5pdERhdGEubmFtZX1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLndhcm4oYFtDaGFyYWN0ZXJWaWV3VUldIOKclyDljZXkvY0gJHt1bml0RGF0YS5uYW1lfSDmsqHmnInorr7nva5wcmVmYWJgKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbop5LoibLlsZ7mgKfvvIjmoLnmja7kv53lrZjnmoTnrYnnuqfmlbDmja7vvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gcHJlZmFiSW5zdGFuY2UgLSDkurrnianljp/lnovlrp7kvotcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdW5pdERhdGEgLSDljZXkvY3mlbDmja5cbiAgICAgKi9cbiAgICBhc3luYyBfaW5pdENoYXJhY3RlclN0YXRzKHByZWZhYkluc3RhbmNlLCB1bml0RGF0YSkge1xuICAgICAgICBjb25zdCBDaGFyYWN0ZXJEYXRhTWFuYWdlciA9IHJlcXVpcmUoXCJDaGFyYWN0ZXJEYXRhTWFuYWdlclwiKTtcbiAgICAgICAgLy8gU3RhdHNDb21wb25lbnQg5piv57uE5Lu257G777yM5LiN6ZyA6KaBIHJlcXVpcmXvvIznm7TmjqXkvb/nlKggZ2V0Q29tcG9uZW50IOiOt+WPllxuXG4gICAgICAgIC8vIOiOt+WPllN0YXRzQ29tcG9uZW5057uE5Lu2XG4gICAgICAgIGNvbnN0IHN0YXRzID0gcHJlZmFiSW5zdGFuY2UuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XG4gICAgICAgIGlmICghc3RhdHMpIHtcbiAgICAgICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0gJHt1bml0RGF0YS5uYW1lfSDmsqHmnIlTdGF0c0NvbXBvbmVudOe7hOS7tu+8jOi3s+i/h+WxnuaAp+WIneWni+WMlmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5LuO5pys5Zyw5a2Y5YKo5Yqg6L296KeS6Imy55qE562J57qn5pWw5o2u77yI5pSv5oyB5byC5q2l77yJXG4gICAgICAgIGNvbnN0IHNhdmVkRGF0YSA9IGF3YWl0IENoYXJhY3RlckRhdGFNYW5hZ2VyLmxvYWRDaGFyYWN0ZXJMZXZlbCh1bml0RGF0YS5uYW1lKTtcblxuICAgICAgICBpZiAoc2F2ZWREYXRhKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzmnInkv53lrZjnmoTmlbDmja7vvIzkvb/nlKjkv53lrZjnmoTln7rnoYDlsZ7mgKdcbiAgICAgICAgICAgIHN0YXRzLmJhc2VIcCA9IHNhdmVkRGF0YS5iYXNlSHAgfHwgdW5pdERhdGEuaHAgfHwgMTAwO1xuICAgICAgICAgICAgc3RhdHMuYmFzZUF0dGFjayA9IHNhdmVkRGF0YS5iYXNlQXR0YWNrIHx8IHVuaXREYXRhLmF0dGFjayB8fCAxO1xuICAgICAgICAgICAgc3RhdHMuYmFzZURlZmVuc2UgPSBzYXZlZERhdGEuYmFzZURlZmVuc2UgfHwgdW5pdERhdGEuZGVmZW5zZSB8fCAxO1xuICAgICAgICAgICAgc3RhdHMuYmFzZVNwZWVkID0gc2F2ZWREYXRhLmJhc2VTcGVlZCB8fCB1bml0RGF0YS5zcGVlZCB8fCAxO1xuICAgICAgICAgICAgc3RhdHMuYmFzZUNyaXQgPSBzYXZlZERhdGEuYmFzZUNyaXQgfHwgdW5pdERhdGEuY3JpdCB8fCAwO1xuICAgICAgICAgICAgc3RhdHMuYmFzZU1pc3MgPSBzYXZlZERhdGEuYmFzZU1pc3MgfHwgdW5pdERhdGEubWlzcyB8fCAwO1xuXG4gICAgICAgICAgICAvLyDorr7nva7nrYnnuqflkoznu4/pqozlgLxcbiAgICAgICAgICAgIHN0YXRzLmxldmVsID0gc2F2ZWREYXRhLmxldmVsIHx8IDE7XG4gICAgICAgICAgICBzdGF0cy5leHAgPSBzYXZlZERhdGEuZXhwIHx8IDA7XG5cbiAgICAgICAgICAgIC8vIOW6lOeUqOetiee6p+WKoOaIkFxuICAgICAgICAgICAgc3RhdHMuX2FwcGx5TGV2ZWxCb251cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5aaC5p6c5rKh5pyJ5L+d5a2Y55qE5pWw5o2u77yM5L2/55SodW5pdERhdGHkuK3nmoTln7rnoYDlsZ7mgKdcbiAgICAgICAgICAgIHN0YXRzLmJhc2VIcCA9IHVuaXREYXRhLmhwIHx8IDEwMDtcbiAgICAgICAgICAgIHN0YXRzLmJhc2VBdHRhY2sgPSB1bml0RGF0YS5hdHRhY2sgfHwgMTtcbiAgICAgICAgICAgIHN0YXRzLmJhc2VEZWZlbnNlID0gdW5pdERhdGEuZGVmZW5zZSB8fCAxO1xuICAgICAgICAgICAgc3RhdHMuYmFzZVNwZWVkID0gdW5pdERhdGEuc3BlZWQgfHwgMTtcbiAgICAgICAgICAgIHN0YXRzLmJhc2VDcml0ID0gdW5pdERhdGEuY3JpdCB8fCAwO1xuICAgICAgICAgICAgc3RhdHMuYmFzZU1pc3MgPSB1bml0RGF0YS5taXNzIHx8IDA7XG5cbiAgICAgICAgICAgIC8vIOiuvue9rum7mOiupOetiee6p+WSjOe7j+mqjOWAvFxuICAgICAgICAgICAgc3RhdHMubGV2ZWwgPSAxO1xuICAgICAgICAgICAgc3RhdHMuZXhwID0gMDtcblxuICAgICAgICAgICAgLy8g5bqU55So562J57qn5Yqg5oiQXG4gICAgICAgICAgICBzdGF0cy5fYXBwbHlMZXZlbEJvbnVzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDorr7nva7lvZPliY3nlJ/lkb3lgLzkuLrmnIDlpKfnlJ/lkb3lgLzvvIjmu6HooYDmmL7npLrvvIlcbiAgICAgICAgc3RhdHMuaHAgPSBzdGF0cy5tYXhIcDtcblxuICAgICAgICAvLyDmm7TmlrDooYDmnaHmmL7npLpcbiAgICAgICAgaWYgKHN0YXRzLnVwZGF0ZUhlYWx0aEJhcikge1xuICAgICAgICAgICAgc3RhdHMudXBkYXRlSGVhbHRoQmFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmm7TmlrDnu4/pqozmnaHmmL7npLpcbiAgICAgICAgaWYgKHN0YXRzLnVwZGF0ZUV4cEJhcikge1xuICAgICAgICAgICAgc3RhdHMudXBkYXRlRXhwQmFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmm7TmlrDmgJLmsJTmnaHmmL7npLrvvIjliJ3lp4vkuLow77yJXG4gICAgICAgIGlmIChzdGF0cy51cGRhdGVSYWdlQmFyKSB7XG4gICAgICAgICAgICBzdGF0cy5yYWdlID0gMDtcbiAgICAgICAgICAgIHN0YXRzLnVwZGF0ZVJhZ2VCYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOW6lOeUqOijheWkh+WKoOaIkO+8iOavj+S9jeiLsembhOeLrOeri+ijheWkh++8jOWxnuaAp+WQjOatpeabtOaWsO+8iVxuICAgICAgICBjb25zdCBib251c2VzID0gYXdhaXQgdGhpcy5fZ2V0RXF1aXBtZW50Qm9udXNlcyh1bml0RGF0YS5uYW1lKTtcbiAgICAgICAgaWYgKHN0YXRzLmFwcGx5RXF1aXBtZW50Qm9udXNlcykge1xuICAgICAgICAgICAgc3RhdHMuYXBwbHlFcXVpcG1lbnRCb251c2VzKGJvbnVzZXMpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOagueaNruinkuiJsuijheWkh+iuoeeul+WxnuaAp+WKoOaIkFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJOYW1lIC0g6KeS6Imy5ZCN56ewXG4gICAgICogQHJldHVybnMge1Byb21pc2U8eyBhdHRhY2s6IG51bWJlciwgZGVmZW5zZTogbnVtYmVyLCBzcGVlZDogbnVtYmVyIH0+fVxuICAgICAqL1xuICAgIGFzeW5jIF9nZXRFcXVpcG1lbnRCb251c2VzKGNoYXJhY3Rlck5hbWUpIHtcbiAgICAgICAgY29uc3QgRXF1aXBtZW50RGF0YU1hbmFnZXIgPSByZXF1aXJlKFwiRXF1aXBtZW50RGF0YU1hbmFnZXJcIik7XG4gICAgICAgIGNvbnN0IEl0ZW1Db25maWcgPSByZXF1aXJlKFwiSXRlbUNvbmZpZ1wiKTtcbiAgICAgICAgY29uc3QgeyBzbG90cyB9ID0gYXdhaXQgRXF1aXBtZW50RGF0YU1hbmFnZXIuZ2V0RXF1aXBtZW50KGNoYXJhY3Rlck5hbWUpO1xuICAgICAgICBjb25zdCBib251c2VzID0geyBhdHRhY2s6IDAsIGRlZmVuc2U6IDAsIHNwZWVkOiAwIH07XG4gICAgICAgIGZvciAoY29uc3QgaXRlbUlkIG9mIHNsb3RzKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW1JZCkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBjZmcgPSBJdGVtQ29uZmlnLmdldEl0ZW1CeUlkKGl0ZW1JZCk7XG4gICAgICAgICAgICBpZiAoIWNmZyB8fCAhY2ZnLmVmZmVjdFR5cGUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgdCA9IFN0cmluZyhjZmcuZWZmZWN0VHlwZSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBjZmcuZWZmZWN0VmFsdWUgfHwgMDtcbiAgICAgICAgICAgIGlmICh0ID09PSBcImF0dGFja1wiKSBib251c2VzLmF0dGFjayArPSB2O1xuICAgICAgICAgICAgZWxzZSBpZiAodCA9PT0gXCJkZWZlbnNlXCIpIGJvbnVzZXMuZGVmZW5zZSArPSB2O1xuICAgICAgICAgICAgZWxzZSBpZiAodCA9PT0gXCJzcGVlZFwiKSBib251c2VzLnNwZWVkICs9IHY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvbnVzZXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOaYvuekuuWxnuaAp+mdouadv1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHVuaXREYXRhIC0g5Y2V5L2N5pWw5o2uXG4gICAgICovXG4gICAgX3Nob3dTdGF0c1BhbmVsKHVuaXREYXRhKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0c1BhbmVsKSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiW0NoYXJhY3RlclZpZXdVSV0g5pyq6K6+572uc3RhdHNQYW5lbO+8jOaXoOazleaYvuekuuWxnuaAp+mdouadv1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiOt+WPluW9k+WJjeaYvuekuueahOS6uueJqeWOn+Wei+eahFN0YXRzQ29tcG9uZW50XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50RGlzcGxheVByZWZhYikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6I635Y+WU3RhdHNDb21wb25lbnTnu4Tku7ZcbiAgICAgICAgY29uc3Qgc3RhdHMgPSB0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiLmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xuXG4gICAgICAgIGlmICghc3RhdHMpIHtcbiAgICAgICAgICAgIGNjLndhcm4oYFtDaGFyYWN0ZXJWaWV3VUldICR7dW5pdERhdGEubmFtZX0g5rKh5pyJU3RhdHNDb21wb25lbnTnu4Tku7bvvIzml6Dms5XmmL7npLrlsZ7mgKdgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOabtOaWsOWxnuaAp+agh+etvlxuICAgICAgICBpZiAodGhpcy5ocExhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLmhwTGFiZWwuc3RyaW5nID0gYOeUn+WRveWAvDogJHtzdGF0cy5ocH0vJHtzdGF0cy5tYXhIcH1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmF0dGFja0xhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLmF0dGFja0xhYmVsLnN0cmluZyA9IGDmlLvlh7vlips6ICR7c3RhdHMuYXR0YWNrfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGVmZW5zZUxhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmVuc2VMYWJlbC5zdHJpbmcgPSBg6Ziy5b6h5YqbOiAke3N0YXRzLmRlZmVuc2V9YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zcGVlZExhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkTGFiZWwuc3RyaW5nID0gYOmAn+W6pjogJHtzdGF0cy5zcGVlZH1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNyaXRMYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5jcml0TGFiZWwuc3RyaW5nID0gYOaatOWHu+eOhzogJHsoc3RhdHMuY3JpdCAqIDEwMCkudG9GaXhlZCgxKX0lYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5taXNzTGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMubWlzc0xhYmVsLnN0cmluZyA9IGDpl6rpgb/njoc6ICR7KHN0YXRzLm1pc3MgKiAxMDApLnRvRml4ZWQoMSl9JWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGV2ZWxMYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbExhYmVsLnN0cmluZyA9IGDnrYnnuqc6ICR7c3RhdHMubGV2ZWx9YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5leHBMYWJlbCkge1xuICAgICAgICAgICAgY29uc3QgTGV2ZWxDb25maWcgPSByZXF1aXJlKFwiTGV2ZWxDb25maWdcIik7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TGV2ZWxFeHAgPSBMZXZlbENvbmZpZy5nZXRFeHBGb3JMZXZlbChzdGF0cy5sZXZlbCk7XG4gICAgICAgICAgICBjb25zdCBuZXh0TGV2ZWxFeHAgPSBMZXZlbENvbmZpZy5nZXRFeHBGb3JMZXZlbChzdGF0cy5sZXZlbCArIDEpO1xuICAgICAgICAgICAgY29uc3QgZXhwSW5DdXJyZW50TGV2ZWwgPSBzdGF0cy5leHAgLSBjdXJyZW50TGV2ZWxFeHA7XG4gICAgICAgICAgICBjb25zdCBleHBUb05leHQgPSBuZXh0TGV2ZWxFeHAgLSBjdXJyZW50TGV2ZWxFeHA7XG4gICAgICAgICAgICBpZiAoZXhwVG9OZXh0ID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwTGFiZWwuc3RyaW5nID0gYOe7j+mqjOWAvDogJHtleHBJbkN1cnJlbnRMZXZlbH0vJHtleHBUb05leHR9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBMYWJlbC5zdHJpbmcgPSBg57uP6aqM5YC8OiDlt7Lmu6HnuqdgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pi+56S65bGe5oCn6Z2i5p2/77yI5bim5Yqo55S777yJXG4gICAgICAgIHRoaXMuc3RhdHNQYW5lbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXRzUGFuZWwuc2V0U2NhbGUoMC44KTtcbiAgICAgICAgdGhpcy5zdGF0c1BhbmVsLm9wYWNpdHkgPSAwO1xuXG4gICAgICAgIC8vIOiuvue9rumdouadv+S9jee9ru+8iOaYvuekuuWcqOS6uueJqeWOn+Wei+mZhOi/ke+8iVxuICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXJEaXNwbGF5QXJlYSkge1xuICAgICAgICAgICAgY29uc3QgZGlzcGxheVBvcyA9IHRoaXMuY2hhcmFjdGVyRGlzcGxheUFyZWEuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdHNQYW5lbC5zZXRQb3NpdGlvbihkaXNwbGF5UG9zLnggKyAyNTAsIGRpc3BsYXlQb3MueSk7IC8vIOaYvuekuuWcqOWPs+S+p1xuICAgICAgICB9XG5cbiAgICAgICAgY2MudHdlZW4odGhpcy5zdGF0c1BhbmVsKVxuICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMS4wLCBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6ICdiYWNrT3V0JyB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG5cbiAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDmmL7npLrlsZ7mgKfpnaLmnb86ICR7dW5pdERhdGEubmFtZX1gKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog54K55Ye7Q2FudmFz5LqL5Lu277yI5YWz6Zet5bGe5oCn6Z2i5p2/77yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfb25DYW52YXNDbGljayhldmVudCkge1xuICAgICAgICAvLyDlpoLmnpzngrnlh7vnmoTmmK/lsZ7mgKfpnaLmnb/mnKzouqvvvIzkuI3lhbPpl61cbiAgICAgICAgaWYgKHRoaXMuc3RhdHNQYW5lbCAmJiBjYy5pc1ZhbGlkKHRoaXMuc3RhdHNQYW5lbCkgJiYgdGhpcy5zdGF0c1BhbmVsLmFjdGl2ZSkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgLy8g5qOA5p+l54K55Ye755qE55uu5qCH5piv5ZCm5piv5bGe5oCn6Z2i5p2/5oiW5YW25a2Q6IqC54K5XG4gICAgICAgICAgICBsZXQgaXNTdGF0c1BhbmVsID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRhcmdldDtcbiAgICAgICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUgPT09IHRoaXMuc3RhdHNQYW5lbCkge1xuICAgICAgICAgICAgICAgICAgICBpc1N0YXRzUGFuZWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzU3RhdHNQYW5lbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjsgLy8g54K55Ye755qE5piv5bGe5oCn6Z2i5p2/77yM5LiN5YWz6ZetXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlpoLmnpzngrnlh7vnmoTmmK/kurrnianljp/lnovvvIzkuI3lhbPpl63vvIjnlLHkurrnianljp/lnovnmoTngrnlh7vkuovku7blpITnkIbvvIlcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIgJiYgY2MuaXNWYWxpZCh0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiKSkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0YXJnZXQ7XG4gICAgICAgICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlID09PSB0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiIHx8IG5vZGUuX2lzQ2hhcmFjdGVyUHJlZmFiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8g54K55Ye755qE5piv5Lq654mp5Y6f5Z6L77yM5LiN5YWz6ZetXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOeCueWHu+WFtuS7luWMuuWfn++8jOWFs+mXreWxnuaAp+mdouadv1xuICAgICAgICBpZiAodGhpcy5zdGF0c1BhbmVsICYmIHRoaXMuc3RhdHNQYW5lbC5hY3RpdmUpIHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuc3RhdHNQYW5lbClcbiAgICAgICAgICAgICAgICAudG8oMC4yLCB7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjggfSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHNQYW5lbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDlhbPpl63lsZ7mgKfpnaLmnb9gKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIC8vIOa4heeQhuS6i+S7tuebkeWQrFxuICAgICAgICBjb25zdCBjYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xuICAgICAgICBpZiAoY2FudmFzKSB7XG4gICAgICAgICAgICBjYW52YXMub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fb25DYW52YXNDbGljaywgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==