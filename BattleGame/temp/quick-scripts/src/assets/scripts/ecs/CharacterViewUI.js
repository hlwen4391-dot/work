"use strict";
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