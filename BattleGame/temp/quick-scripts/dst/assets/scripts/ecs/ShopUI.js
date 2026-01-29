
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ecs/ShopUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd7881Y746tMn5YuZ+kKnttd', 'ShopUI');
// Scripts/ecs/ShopUI.js

"use strict";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * 商城UI组件
 * 负责展示商品列表、处理购买、显示金币等
 */
var ShopConfig = require("ShopConfig");
var CoinManager = require("CoinManager");
var ItemDataManager = require("ItemDataManager");
cc.Class({
  "extends": cc.Component,
  properties: {
    // 商品列表容器
    itemListContainer: {
      "default": null,
      type: cc.Node,
      tooltip: "商品列表容器节点（用于放置商品项）"
    },
    // 商品项Prefab
    shopItemPrefab: {
      "default": null,
      type: cc.Prefab,
      tooltip: "商品项Prefab（包含图标、名称、价格、购买按钮等）"
    },
    // 金币显示标签
    coinLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "金币数量显示标签"
    },
    // 返回按钮
    backButton: {
      "default": null,
      type: cc.Node,
      tooltip: "返回按钮节点"
    },
    // 刷新按钮（可选）
    refreshButton: {
      "default": null,
      type: cc.Node,
      tooltip: "刷新按钮节点（刷新金币和商品列表）"
    },
    // 商品项布局配置（参考专业商城布局）
    shopItemWidth: {
      "default": 220,
      // ⭐ 从180增加到220，让卡片更宽
      tooltip: "商品项宽度（卡片宽度）"
    },
    shopItemHeight: {
      "default": 240,
      tooltip: "商品项高度（卡片高度）"
    },
    shopItemSpacing: {
      "default": 15,
      tooltip: "商品项之间的间距"
    },
    shopColumns: {
      "default": 4,
      tooltip: "商品列表列数（每行显示的商品数量，参考图是4列）"
    },
    shopPadding: {
      "default": 20,
      tooltip: "商品列表容器的内边距"
    },
    // ⭐ 背景透明度配置
    backgroundOpacity: {
      "default": 180,
      tooltip: "商城背景面板的透明度（0-255，180=约70%不透明，128=50%透明）"
    }
  },
  onLoad: function onLoad() {
    // 绑定返回按钮事件
    if (this.backButton) {
      this.backButton.on(cc.Node.EventType.TOUCH_END, this.onBackClick, this);
    }

    // 绑定刷新按钮事件
    if (this.refreshButton) {
      this.refreshButton.on(cc.Node.EventType.TOUCH_END, this.refresh, this);
    }
  },
  /**
   * 初始化商城UI
   */
  init: function init() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            cc.log("[ShopUI] 初始化商城UI");

            // 刷新金币显示
            _context.next = 3;
            return _this.updateCoinDisplay();
          case 3:
            // 加载商品列表
            _this.loadShopItems();
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  /**
   * 更新金币显示
   */
  updateCoinDisplay: function updateCoinDisplay() {
    var _this2 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var coins;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return CoinManager.getCoins();
          case 3:
            coins = _context2.sent;
            if (_this2.coinLabel) {
              _this2.coinLabel.string = "\u91D1\u5E01: " + coins;
            }
            cc.log("[ShopUI] \u91D1\u5E01\u66F4\u65B0: " + coins);
            _context2.next = 12;
            break;
          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            cc.error("[ShopUI] \u66F4\u65B0\u91D1\u5E01\u663E\u793A\u5931\u8D25:", _context2.t0);
            if (_this2.coinLabel) {
              _this2.coinLabel.string = "金币: --";
            }
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 8]]);
    }))();
  },
  /**
   * 加载商品列表
   */
  loadShopItems: function loadShopItems() {
    var _this3 = this;
    if (!this.itemListContainer) {
      cc.error("[ShopUI] 商品列表容器未设置");
      return;
    }
    if (!this.shopItemPrefab) {
      cc.error("[ShopUI] 商品项Prefab未设置");
      return;
    }

    // 清空现有商品
    this.itemListContainer.removeAllChildren();

    // 获取所有商品
    var shopItems = ShopConfig.getAllItems();

    // 设置容器布局（网格布局）
    this._setupContainerLayout(shopItems.length);

    // 为每个商品创建UI项
    shopItems.forEach(function (shopItem, index) {
      var itemNode = cc.instantiate(_this3.shopItemPrefab);
      itemNode.name = "ShopItem_" + shopItem.id;

      // ⭐ 关键：先设置商品项大小和位置（在设置内容之前）
      _this3._layoutShopItem(itemNode, index, shopItems.length, shopItem);

      // 设置商品数据（包括内部布局）
      _this3.setupShopItem(itemNode, shopItem);

      // 添加到容器
      _this3.itemListContainer.addChild(itemNode);
      cc.log("[ShopUI] \u521B\u5EFA\u5546\u54C1\u9879 " + index + ": " + shopItem.name + ", \u4F4D\u7F6E: (" + itemNode.x + ", " + itemNode.y + "), \u5927\u5C0F: " + itemNode.width + " x " + itemNode.height);
    });
    cc.log("[ShopUI] \u5DF2\u52A0\u8F7D " + shopItems.length + " \u4E2A\u5546\u54C1");
  },
  /**
   * 设置容器布局（参考专业商城布局）
   * @private
   * @param {number} itemCount - 商品数量
   */
  _setupContainerLayout: function _setupContainerLayout(itemCount) {
    if (!this.itemListContainer) {
      cc.error("[ShopUI] 商品列表容器未设置，无法布局");
      return;
    }

    // 计算需要的行数
    var rows = Math.ceil(itemCount / this.shopColumns);

    // 计算容器大小（包含内边距）
    var containerWidth = this.shopColumns * (this.shopItemWidth + this.shopItemSpacing) - this.shopItemSpacing + this.shopPadding * 2;
    var containerHeight = rows * (this.shopItemHeight + this.shopItemSpacing) - this.shopItemSpacing + this.shopPadding * 2;

    // 设置容器大小和锚点
    this.itemListContainer.setContentSize(containerWidth, containerHeight);
    this.itemListContainer.setAnchorPoint(0.5, 0.5);
    this.itemListContainer.setPosition(0, 0); // 确保容器在中心

    // 设置容器背景（可选，如果需要白色背景卡片效果）
    this._setupContainerBackground();
    cc.log("[ShopUI] \u2713 \u5BB9\u5668\u5E03\u5C40\u5B8C\u6210: " + this.shopColumns + "\u5217 x " + rows + "\u884C, \u5927\u5C0F: " + containerWidth + " x " + containerHeight + ", \u5546\u54C1\u6570: " + itemCount);
    cc.log("[ShopUI] \u5546\u54C1\u9879\u914D\u7F6E: \u5BBD\u5EA6=" + this.shopItemWidth + ", \u9AD8\u5EA6=" + this.shopItemHeight + ", \u95F4\u8DDD=" + this.shopItemSpacing);
  },
  /**
   * 设置容器背景（⭐ 半透明白色卡片效果）
   * @private
   */
  _setupContainerBackground: function _setupContainerBackground() {
    // 检查是否已有背景节点
    var bgNode = this.itemListContainer.getChildByName("Background");
    if (!bgNode) {
      bgNode = new cc.Node("Background");
      var graphics = bgNode.addComponent(cc.Graphics);

      // ⭐ 绘制半透明白色圆角矩形背景
      var width = this.itemListContainer.width;
      var height = this.itemListContainer.height;
      var radius = 10; // 圆角半径

      // ⭐ 半透明背景：使用可配置的透明度值
      // 可以根据需要调整：128=50%透明，180=70%不透明，200=78%不透明，255=完全不透明
      var opacity = this.backgroundOpacity || 180; // 默认180（约70%不透明）
      var backgroundColor = new cc.Color(255, 255, 255, opacity);
      graphics.fillColor = backgroundColor;
      graphics.roundRect(-width / 2, -height / 2, width, height, radius);
      graphics.fill();

      // ⭐ 设置节点透明度（确保半透明效果）
      bgNode.setContentSize(width, height);
      bgNode.setAnchorPoint(0.5, 0.5);
      bgNode.setPosition(0, 0);
      bgNode.opacity = opacity; // 节点透明度（与fillColor的alpha值保持一致）
      bgNode.zIndex = -1; // 背景在最下层

      this.itemListContainer.addChild(bgNode);
      cc.log("[ShopUI] \u2713 \u5DF2\u8BBE\u7F6E\u534A\u900F\u660E\u80CC\u666F: alpha=" + backgroundColor.a + ", opacity=" + bgNode.opacity);
    }
  },
  /**
   * 布局商品项（设置位置）
   * @private
   * @param {cc.Node} itemNode - 商品项节点
   * @param {number} index - 商品索引
   * @param {number} totalItems - 商品总数
   * @param {Object} shopItem - 商品数据（可选，用于设置样式）
   */
  _layoutShopItem: function _layoutShopItem(itemNode, index, totalItems, shopItem) {
    if (shopItem === void 0) {
      shopItem = null;
    }
    // 计算行列位置
    var row = Math.floor(index / this.shopColumns);
    var col = index % this.shopColumns;
    var totalRows = Math.ceil(totalItems / this.shopColumns);

    // 计算位置（居中布局）
    var totalWidth = this.shopColumns * (this.shopItemWidth + this.shopItemSpacing) - this.shopItemSpacing;
    var totalHeight = totalRows * (this.shopItemHeight + this.shopItemSpacing) - this.shopItemSpacing;
    var startX = -totalWidth / 2 + this.shopItemWidth / 2;
    var startY = totalHeight / 2 - this.shopItemHeight / 2;
    var x = startX + col * (this.shopItemWidth + this.shopItemSpacing);
    var y = startY - row * (this.shopItemHeight + this.shopItemSpacing);

    // 设置商品项大小和位置
    itemNode.setContentSize(this.shopItemWidth, this.shopItemHeight);
    itemNode.setAnchorPoint(0.5, 0.5);
    itemNode.setPosition(x, y);

    // ⭐ 为商品项添加容器背景和边框（根据商品类型设置样式）
    this._setupItemCardBackground(itemNode, shopItem);

    // ⭐ 添加Mask组件，确保内容严格限制在容器内
    this._setupItemCardMask(itemNode);
  },
  /**
   * 设置商品项容器背景（卡片样式，⭐ 根据商品类型使用不同样式）
   * @private
   * @param {cc.Node} itemNode - 商品项节点
   * @param {Object} shopItem - 商品数据（可选，用于获取类型样式）
   */
  _setupItemCardBackground: function _setupItemCardBackground(itemNode, shopItem) {
    if (shopItem === void 0) {
      shopItem = null;
    }
    // 检查是否已有背景节点
    var bgNode = itemNode.getChildByName("CardBackground");
    if (!bgNode) {
      bgNode = new cc.Node("CardBackground");
      var graphics = bgNode.addComponent(cc.Graphics);

      // ⭐ 根据商品类型获取样式（如果提供了商品数据）
      var backgroundColor = new cc.Color(245, 245, 245, 255); // 默认浅灰
      var borderColor = new cc.Color(200, 200, 200, 255); // 默认灰色边框

      if (shopItem && shopItem.category) {
        var _ShopConfig = require("ShopConfig");
        var style = _ShopConfig.getCategoryStyle(shopItem.category);
        if (style) {
          backgroundColor = style.backgroundColor;
          borderColor = style.borderColor;
        }
      }

      // 绘制卡片背景（带圆角和边框）
      var width = itemNode.width;
      var height = itemNode.height;
      var radius = 8; // 圆角半径
      var borderWidth = 2; // 边框宽度

      // 绘制背景
      graphics.fillColor = backgroundColor;
      graphics.roundRect(-width / 2, -height / 2, width, height, radius);
      graphics.fill();

      // 绘制边框
      graphics.strokeColor = borderColor;
      graphics.lineWidth = borderWidth;
      graphics.roundRect(-width / 2, -height / 2, width, height, radius);
      graphics.stroke();

      // 设置背景节点属性
      bgNode.setContentSize(width, height);
      bgNode.setAnchorPoint(0.5, 0.5);
      bgNode.setPosition(0, 0);
      bgNode.zIndex = -100; // 背景在最下层

      itemNode.addChild(bgNode);
      cc.log("[ShopUI] \u2713 \u5DF2\u4E3A\u5546\u54C1\u9879\u6DFB\u52A0\u5BB9\u5668\u80CC\u666F: " + width + "x" + height + ", \u7C7B\u578B=" + (shopItem ? shopItem.category : 'default'));
    }
  },
  /**
   * 设置商品项容器遮罩（确保内容不超出容器）
   * @private
   * @param {cc.Node} itemNode - 商品项节点
   */
  _setupItemCardMask: function _setupItemCardMask(itemNode) {
    // 检查是否已有Mask组件
    var mask = itemNode.getComponent(cc.Mask);
    if (!mask) {
      mask = itemNode.addComponent(cc.Mask);
      mask.type = cc.Mask.Type.RECT; // 矩形遮罩
      mask.segements = 1; // 圆角分段数（1表示无圆角，但配合Graphics使用）

      // 设置遮罩大小（略小于容器，确保边框可见）
      var padding = 1; // 内边距，确保内容不贴边
      mask.width = itemNode.width - padding * 2;
      mask.height = itemNode.height - padding * 2;
      cc.log("[ShopUI] \u2713 \u5DF2\u4E3A\u5546\u54C1\u9879\u6DFB\u52A0\u906E\u7F69: " + mask.width + "x" + mask.height);
    }
  },
  /**
   * 设置商品项UI
   * @param {cc.Node} itemNode - 商品项节点
   * @param {Object} shopItem - 商品数据
   */
  setupShopItem: function setupShopItem(itemNode, shopItem) {
    var _this4 = this;
    // 查找子节点（根据Prefab结构调整）
    var nameLabel = itemNode.getChildByName("NameLabel");
    var priceLabel = itemNode.getChildByName("PriceLabel");
    var descriptionLabel = itemNode.getChildByName("DescriptionLabel");
    var iconNode = itemNode.getChildByName("Icon");
    // ⭐ 修改：按钮名称是"购买"而不是"BuyButton"
    var buyButton = itemNode.getChildByName("购买") || itemNode.getChildByName("BuyButton");

    // ⭐ 调试：输出找到的节点
    cc.log("[ShopUI] \u8BBE\u7F6E\u5546\u54C1 " + shopItem.name + ":", {
      nameLabel: !!nameLabel,
      priceLabel: !!priceLabel,
      descriptionLabel: !!descriptionLabel,
      iconNode: !!iconNode,
      buyButton: !!buyButton,
      buyButtonName: buyButton ? buyButton.name : '未找到'
    });

    // 设置商品项内部布局
    this._layoutShopItemContent(itemNode, iconNode, nameLabel, priceLabel, descriptionLabel, buyButton);

    // ⭐ 根据商品类型获取样式配置
    var ShopConfig = require("ShopConfig");
    var style = shopItem.category ? ShopConfig.getCategoryStyle(shopItem.category) : null;
    // ⭐ 优化：文字颜色更明显（深色）
    var nameColor = style ? style.nameColor : new cc.Color(30, 30, 30, 255); // 深黑色，更明显
    var priceColor = style ? style.priceColor : new cc.Color(255, 215, 0, 255); // 金色保持不变
    var descColor = style ? style.descColor : new cc.Color(60, 60, 60, 255); // 深灰色，更明显（原来是120）

    // 设置名称（⭐ 根据商品类型使用不同颜色，更明显）
    if (nameLabel) {
      var label = nameLabel.getComponent(cc.Label);
      if (label) {
        label.string = shopItem.name;
        // ⭐ 优化：字体更大，颜色更深
        label.fontSize = 30; // 从26增加到30
        label.node.color = nameColor;
        label.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
      }
    }

    // 设置价格（⭐ 根据商品类型使用不同颜色）
    if (priceLabel) {
      var _label = priceLabel.getComponent(cc.Label);
      if (_label) {
        _label.string = shopItem.price + " \u91D1\u5E01";
        // ⭐ 优化：字体更大，价格更突出
        _label.fontSize = 32; // 从28增加到32
        _label.node.color = priceColor;
        _label.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
      }
    }

    // 设置描述（⭐ 优化：确保文字自动换行且限制在容器内，根据商品类型使用不同颜色，更明显）
    if (descriptionLabel) {
      var _label2 = descriptionLabel.getComponent(cc.Label);
      if (_label2) {
        _label2.string = shopItem.description || "";
        // ⭐ 优化：字体更大，颜色更深，更明显
        _label2.fontSize = 20; // 从18增加到20
        _label2.node.color = descColor; // 深灰色(60,60,60)，更明显
        _label2.horizontalAlign = cc.Label.HorizontalAlign.LEFT; // 左对齐，更易阅读
        _label2.verticalAlign = cc.Label.VerticalAlign.TOP; // 顶部对齐
        _label2.enableWrapText = true; // ⭐ 启用自动换行
        _label2.overflow = cc.Label.Overflow.RESIZE_HEIGHT; // ⭐ 自动调整高度以适应内容
        // ⭐ 增加行间距（通过增加行高来给文字更多空间）
        _label2.lineHeight = 26; // 行高：从22增加到26，配合更大的字体

        // ⭐ 设置描述标签尺寸（严格限制在容器内，留出内边距）
        var padding = 12; // 左右内边距
        var descWidth = this.shopItemWidth - padding * 2; // 宽度 = 容器宽度 - 左右内边距
        var maxDescHeight = 60; // 最大高度：从55增加到60，给更大的字体更多空间
        descriptionLabel.setContentSize(descWidth, maxDescHeight);
        descriptionLabel.setAnchorPoint(0.5, 1); // 锚点在顶部中心，便于定位

        cc.log("[ShopUI] \u2713 \u63CF\u8FF0\u6807\u7B7E\u5DF2\u8BBE\u7F6E: \u5BBD\u5EA6=" + descWidth + ", \u6700\u5927\u9AD8\u5EA6=" + maxDescHeight + ", \u5B57\u4F53=" + _label2.fontSize + ", \u884C\u9AD8=" + _label2.lineHeight);
      }
    }

    // 设置图标（如果有）
    if (iconNode) {
      if (shopItem.icon) {
        var sprite = iconNode.getComponent(cc.Sprite);
        if (sprite) {
          sprite.spriteFrame = shopItem.icon;
        }
      }
      // 设置图标大小和位置
      iconNode.setContentSize(80, 80);
      iconNode.setAnchorPoint(0.5, 0.5);
    }

    // 设置购买按钮（参考专业商城样式：蓝色按钮，白色文字）
    if (buyButton) {
      var button = buyButton.getComponent(cc.Button);
      if (button) {
        // 查找按钮文字标签
        var _label3 = buyButton.getChildByName("Label");
        if (!_label3) {
          // 如果没有Label子节点，创建一个
          _label3 = new cc.Node("Label");
          var labelComp = _label3.addComponent(cc.Label);
          labelComp.string = "购买"; // 按钮文字改为"购买"
          labelComp.fontSize = 18;
          labelComp.node.color = cc.Color.WHITE;
          labelComp.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
          labelComp.verticalAlign = cc.Label.VerticalAlign.CENTER;
          _label3.setContentSize(buyButton.width, buyButton.height);
          _label3.setAnchorPoint(0.5, 0.5);
          _label3.setPosition(0, 0);
          buyButton.addChild(_label3);
        } else {
          var _labelComp = _label3.getComponent(cc.Label);
          if (_labelComp) {
            _labelComp.string = "购买"; // 按钮文字改为"购买"
            _labelComp.fontSize = 18;
            _labelComp.node.color = cc.Color.WHITE;
            _labelComp.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
            _labelComp.verticalAlign = cc.Label.VerticalAlign.CENTER;
          }
        }
      }

      // 绑定购买按钮事件
      buyButton.off(cc.Node.EventType.TOUCH_END); // 先移除旧事件
      buyButton.on(cc.Node.EventType.TOUCH_END, function () {
        _this4.onBuyItem(shopItem);
      }, this);
    }

    // 保存商品数据到节点
    itemNode._shopItemData = shopItem;
  },
  /**
   * 布局商品项内部内容（⭐ 优化版：图标->名称->描述->价格->按钮，严格限制在容器内）
   * @private
   * @param {cc.Node} itemNode - 商品项节点
   * @param {cc.Node} iconNode - 图标节点
   * @param {cc.Node} nameLabel - 名称标签
   * @param {cc.Node} priceLabel - 价格标签
   * @param {cc.Node} descriptionLabel - 描述标签
   * @param {cc.Node} buyButton - 购买按钮
   */
  _layoutShopItemContent: function _layoutShopItemContent(itemNode, iconNode, nameLabel, priceLabel, descriptionLabel, buyButton) {
    var itemHeight = this.shopItemHeight;
    var itemWidth = this.shopItemWidth;
    var padding = 12; // 内边距（确保内容不贴边）

    // ⭐ 调试：输出布局信息
    cc.log("[ShopUI] \u5E03\u5C40\u5546\u54C1\u9879\u5185\u5BB9: \u5927\u5C0F=" + itemWidth + "x" + itemHeight + ", \u5185\u8FB9\u8DDD=" + padding);

    // ⭐ 布局顺序（从上到下）：图标 -> 名称 -> 描述 -> 价格 -> 按钮
    // ⭐ 所有元素都严格限制在容器内（使用相对位置计算）

    var currentY = itemHeight / 2 - padding; // 从顶部开始，留出内边距

    // 1. 图标位置（顶部，居中）
    if (iconNode) {
      var iconSize = 70; // 图标大小（略小，为其他内容留出空间）
      var iconTopMargin = 12; // ⭐ 图标顶部边距：从10增加到12
      currentY -= iconTopMargin;
      iconNode.setPosition(0, currentY - iconSize / 2); // 图标中心位置
      iconNode.setContentSize(iconSize, iconSize);
      iconNode.setAnchorPoint(0.5, 0.5);
      iconNode.active = true;
      iconNode.opacity = 255;
      currentY -= iconSize + 10; // ⭐ 图标高度 + 间距：从8增加到10
      cc.log("[ShopUI]   \u56FE\u6807\u4F4D\u7F6E: (0, " + (currentY - iconSize / 2).toFixed(1) + "), \u5927\u5C0F=" + iconSize + "x" + iconSize);
    } else {
      cc.warn("[ShopUI]   \u672A\u627E\u5230Icon\u8282\u70B9");
    }

    // 2. 名称位置（图标下方，居中）
    if (nameLabel) {
      var nameHeight = 32; // ⭐ 从28增加到32（配合更大的字体30）
      var nameMargin = 12; // ⭐ 名称与图标的间距：从6增加到12
      currentY -= nameMargin;
      nameLabel.setPosition(0, currentY - nameHeight / 2);
      nameLabel.setContentSize(itemWidth - padding * 2, nameHeight);
      nameLabel.setAnchorPoint(0.5, 0.5);
      nameLabel.active = true;
      currentY -= nameHeight + 8; // ⭐ 名称高度 + 间距：从4增加到8
      cc.log("[ShopUI]   \u540D\u79F0\u4F4D\u7F6E: (0, " + (currentY - nameHeight / 2).toFixed(1) + "), \u5927\u5C0F=" + (itemWidth - padding * 2) + "x" + nameHeight);
    } else {
      cc.warn("[ShopUI]   \u672A\u627E\u5230NameLabel\u8282\u70B9");
    }

    // 3. 描述位置（名称下方，左对齐，自动换行）
    if (descriptionLabel) {
      var descMargin = 10; // ⭐ 描述与名称的间距：从4增加到10
      var descMaxHeight = 60; // ⭐ 描述最大高度：从55增加到60（配合更大的字体20和行高26）
      currentY -= descMargin;
      // ⭐ 锚点在顶部中心，便于文字从上到下排列
      descriptionLabel.setPosition(0, currentY);
      descriptionLabel.setContentSize(itemWidth - padding * 2, descMaxHeight);
      descriptionLabel.setAnchorPoint(0.5, 1); // 顶部中心锚点
      descriptionLabel.active = true; // ⭐ 显示描述
      currentY -= descMaxHeight + 8; // ⭐ 描述高度 + 间距：从4增加到8
      cc.log("[ShopUI]   \u63CF\u8FF0\u4F4D\u7F6E: (0, " + currentY.toFixed(1) + "), \u5927\u5C0F=" + (itemWidth - padding * 2) + "x" + descMaxHeight + ", \u81EA\u52A8\u6362\u884C=\u542F\u7528");
    }

    // 4. 价格位置（描述下方，居中，金色突出显示）
    if (priceLabel) {
      var priceHeight = 34; // ⭐ 从30增加到34（配合更大的字体32）
      var priceMargin = 50; // ⭐ 价格与描述的间距：从12增加到18（让价格更靠下）
      currentY -= priceMargin;
      priceLabel.setPosition(0, currentY - priceHeight / 2);
      priceLabel.setContentSize(itemWidth - padding * 2, priceHeight);
      priceLabel.setAnchorPoint(0.5, 0.5);
      priceLabel.active = true;
      currentY -= priceHeight + 10; // ⭐ 价格高度 + 间距：从8增加到10
      cc.log("[ShopUI]   \u4EF7\u683C\u4F4D\u7F6E: (0, " + (currentY - priceHeight / 2).toFixed(1) + "), \u5927\u5C0F=" + (itemWidth - padding * 2) + "x" + priceHeight);
    } else {
      cc.warn("[ShopUI]   \u672A\u627E\u5230PriceLabel\u8282\u70B9");
    }

    // 5. 购买按钮位置（底部，居中，蓝色按钮样式）
    if (buyButton) {
      var btnHeight = 38;
      var btnBottomMargin = 10; // 按钮底部边距
      var btnY = -itemHeight / 2 + padding + btnBottomMargin + btnHeight / 2; // 从底部计算
      buyButton.setPosition(0, btnY);
      buyButton.setContentSize(itemWidth - padding * 2, btnHeight);
      buyButton.setAnchorPoint(0.5, 0.5);
      buyButton.active = true;

      // 设置按钮背景颜色（蓝色）
      var buttonSprite = buyButton.getComponent(cc.Sprite);
      if (!buttonSprite) {
        // 如果没有Sprite组件，添加Graphics组件绘制按钮背景
        var graphics = buyButton.getComponent(cc.Graphics);
        if (!graphics) {
          graphics = buyButton.addComponent(cc.Graphics);
        }
        var btnWidth = itemWidth - padding * 2;
        graphics.fillColor = new cc.Color(70, 130, 200, 255); // 蓝色
        graphics.roundRect(-btnWidth / 2, -btnHeight / 2, btnWidth, btnHeight, 5);
        graphics.fill();
      }
      cc.log("[ShopUI]   \u6309\u94AE\u4F4D\u7F6E: (0, " + btnY.toFixed(1) + "), \u5927\u5C0F=" + (itemWidth - padding * 2) + "x" + btnHeight);
    } else {
      cc.warn("[ShopUI]   \u672A\u627E\u5230\u8D2D\u4E70\u6309\u94AE\u8282\u70B9\uFF08\u5C1D\u8BD5\u67E5\u627E\"\u8D2D\u4E70\"\u6216\"BuyButton\"\uFF09");
    }

    // ⭐ 验证：确保所有内容都在容器内
    var minY = -itemHeight / 2 + padding;
    var maxY = itemHeight / 2 - padding;
    if (currentY < minY) {
      cc.warn("[ShopUI] \u26A0 \u8B66\u544A\uFF1A\u5185\u5BB9\u53EF\u80FD\u8D85\u51FA\u5BB9\u5668\u5E95\u90E8\u8FB9\u754C\uFF01\u5F53\u524DY=" + currentY.toFixed(1) + ", \u6700\u5C0FY=" + minY.toFixed(1));
    }
  },
  /**
   * 购买商品
   * @param {Object} shopItem - 商品数据
   */
  onBuyItem: function onBuyItem(shopItem) {
    var _this5 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var currentCoins, ServerConfig, response, errorData, data, spendSuccess, addSuccess;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            cc.log("[ShopUI] \u5C1D\u8BD5\u8D2D\u4E70\u5546\u54C1: " + shopItem.name + ", \u4EF7\u683C: " + shopItem.price);

            // 检查金币是否足够（本地检查，避免不必要的请求）
            _context3.next = 3;
            return CoinManager.getCoins();
          case 3:
            currentCoins = _context3.sent;
            if (!(currentCoins < shopItem.price)) {
              _context3.next = 7;
              break;
            }
            cc.warn("[ShopUI] \u91D1\u5E01\u4E0D\u8DB3: \u5F53\u524D " + currentCoins + ", \u9700\u8981 " + shopItem.price);
            // TODO: 显示提示UI
            return _context3.abrupt("return");
          case 7:
            _context3.prev = 7;
            ServerConfig = require("ServerConfig"); // 如果使用服务器模式，使用服务器API购买（服务器会同时处理金币扣除和道具添加）
            if (!(ServerConfig.getStorageMode() === 'server' || ServerConfig.getStorageMode() === 'hybrid')) {
              _context3.next = 30;
              break;
            }
            _context3.next = 12;
            return fetch(ServerConfig.getBaseURL() + "/shop/purchase", {
              method: 'POST',
              headers: _extends({
                'Content-Type': 'application/json'
              }, ServerConfig.getAuthHeaders()),
              body: JSON.stringify({
                shopItemId: shopItem.id,
                itemId: shopItem.itemId,
                count: shopItem.count,
                price: shopItem.price
              })
            });
          case 12:
            response = _context3.sent;
            if (response.ok) {
              _context3.next = 23;
              break;
            }
            _context3.next = 16;
            return response.json()["catch"](function () {
              return {};
            });
          case 16:
            errorData = _context3.sent;
            if (!(errorData.error === 'insufficient_coins')) {
              _context3.next = 21;
              break;
            }
            cc.warn("[ShopUI] \u91D1\u5E01\u4E0D\u8DB3: \u5F53\u524D " + errorData.currentCoins + ", \u9700\u8981 " + shopItem.price);
            _context3.next = 22;
            break;
          case 21:
            throw new Error("\u8D2D\u4E70\u5931\u8D25: " + response.status);
          case 22:
            return _context3.abrupt("return");
          case 23:
            _context3.next = 25;
            return response.json();
          case 25:
            data = _context3.sent;
            cc.log("[ShopUI] \u2713 \u8D2D\u4E70\u6210\u529F: " + shopItem.name + " x" + shopItem.count + ", \u5269\u4F59\u91D1\u5E01: " + data.coins);

            // 更新金币显示
            _context3.next = 29;
            return _this5.updateCoinDisplay();
          case 29:
            return _context3.abrupt("return");
          case 30:
            _context3.next = 32;
            return CoinManager.spendCoins(shopItem.price);
          case 32:
            spendSuccess = _context3.sent;
            if (spendSuccess) {
              _context3.next = 36;
              break;
            }
            cc.error("[ShopUI] \u6263\u9664\u91D1\u5E01\u5931\u8D25");
            return _context3.abrupt("return");
          case 36:
            _context3.next = 38;
            return ItemDataManager.addItem(shopItem.itemId, shopItem.count);
          case 38:
            addSuccess = _context3.sent;
            if (addSuccess) {
              _context3.next = 44;
              break;
            }
            cc.error("[ShopUI] \u6DFB\u52A0\u9053\u5177\u5931\u8D25");
            // 如果添加道具失败，需要回退金币（这里简化处理，实际应该用事务）
            _context3.next = 43;
            return CoinManager.addCoins(shopItem.price);
          case 43:
            return _context3.abrupt("return");
          case 44:
            cc.log("[ShopUI] \u2713 \u8D2D\u4E70\u6210\u529F: " + shopItem.name + " x" + shopItem.count);

            // 更新金币显示
            _context3.next = 47;
            return _this5.updateCoinDisplay();
          case 47:
            _context3.next = 52;
            break;
          case 49:
            _context3.prev = 49;
            _context3.t0 = _context3["catch"](7);
            cc.error("[ShopUI] \u8D2D\u4E70\u5546\u54C1\u5931\u8D25:", _context3.t0);
          case 52:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[7, 49]]);
    }))();
  },
  /**
   * 刷新（重新加载金币和商品列表）
   */
  refresh: function refresh() {
    var _this6 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            cc.log("[ShopUI] 刷新商城数据");
            _context4.next = 3;
            return _this6.updateCoinDisplay();
          case 3:
            _this6.loadShopItems();
          case 4:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))();
  },
  /**
   * 返回按钮点击事件
   */
  onBackClick: function onBackClick() {
    cc.log("[ShopUI] 返回按钮点击");
    // 返回主菜单场景
    cc.director.loadScene("MainMenu");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxTaG9wVUkuanMiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJTaG9wQ29uZmlnIiwicmVxdWlyZSIsIkNvaW5NYW5hZ2VyIiwiSXRlbURhdGFNYW5hZ2VyIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpdGVtTGlzdENvbnRhaW5lciIsIk5vZGUiLCJ0b29sdGlwIiwic2hvcEl0ZW1QcmVmYWIiLCJQcmVmYWIiLCJjb2luTGFiZWwiLCJMYWJlbCIsImJhY2tCdXR0b24iLCJyZWZyZXNoQnV0dG9uIiwic2hvcEl0ZW1XaWR0aCIsInNob3BJdGVtSGVpZ2h0Iiwic2hvcEl0ZW1TcGFjaW5nIiwic2hvcENvbHVtbnMiLCJzaG9wUGFkZGluZyIsImJhY2tncm91bmRPcGFjaXR5Iiwib25Mb2FkIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJvbkJhY2tDbGljayIsInJlZnJlc2giLCJpbml0IiwiX3RoaXMiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImxvZyIsInVwZGF0ZUNvaW5EaXNwbGF5IiwibG9hZFNob3BJdGVtcyIsIl90aGlzMiIsIl9jYWxsZWUyIiwiY29pbnMiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJnZXRDb2lucyIsInN0cmluZyIsInQwIiwiX3RoaXMzIiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJzaG9wSXRlbXMiLCJnZXRBbGxJdGVtcyIsIl9zZXR1cENvbnRhaW5lckxheW91dCIsInNob3BJdGVtIiwiaW5kZXgiLCJpdGVtTm9kZSIsImluc3RhbnRpYXRlIiwiaWQiLCJfbGF5b3V0U2hvcEl0ZW0iLCJzZXR1cFNob3BJdGVtIiwiYWRkQ2hpbGQiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiaXRlbUNvdW50Iiwicm93cyIsIk1hdGgiLCJjZWlsIiwiY29udGFpbmVyV2lkdGgiLCJjb250YWluZXJIZWlnaHQiLCJzZXRDb250ZW50U2l6ZSIsInNldEFuY2hvclBvaW50Iiwic2V0UG9zaXRpb24iLCJfc2V0dXBDb250YWluZXJCYWNrZ3JvdW5kIiwiYmdOb2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJncmFwaGljcyIsImFkZENvbXBvbmVudCIsIkdyYXBoaWNzIiwicmFkaXVzIiwib3BhY2l0eSIsImJhY2tncm91bmRDb2xvciIsIkNvbG9yIiwiZmlsbENvbG9yIiwicm91bmRSZWN0IiwiZmlsbCIsInpJbmRleCIsImEiLCJ0b3RhbEl0ZW1zIiwicm93IiwiZmxvb3IiLCJjb2wiLCJ0b3RhbFJvd3MiLCJ0b3RhbFdpZHRoIiwidG90YWxIZWlnaHQiLCJzdGFydFgiLCJzdGFydFkiLCJfc2V0dXBJdGVtQ2FyZEJhY2tncm91bmQiLCJfc2V0dXBJdGVtQ2FyZE1hc2siLCJib3JkZXJDb2xvciIsImNhdGVnb3J5Iiwic3R5bGUiLCJnZXRDYXRlZ29yeVN0eWxlIiwiYm9yZGVyV2lkdGgiLCJzdHJva2VDb2xvciIsImxpbmVXaWR0aCIsInN0cm9rZSIsIm1hc2siLCJnZXRDb21wb25lbnQiLCJNYXNrIiwiVHlwZSIsIlJFQ1QiLCJzZWdlbWVudHMiLCJwYWRkaW5nIiwiX3RoaXM0IiwibmFtZUxhYmVsIiwicHJpY2VMYWJlbCIsImRlc2NyaXB0aW9uTGFiZWwiLCJpY29uTm9kZSIsImJ1eUJ1dHRvbiIsImJ1eUJ1dHRvbk5hbWUiLCJfbGF5b3V0U2hvcEl0ZW1Db250ZW50IiwibmFtZUNvbG9yIiwicHJpY2VDb2xvciIsImRlc2NDb2xvciIsImxhYmVsIiwiZm9udFNpemUiLCJub2RlIiwiY29sb3IiLCJob3Jpem9udGFsQWxpZ24iLCJIb3Jpem9udGFsQWxpZ24iLCJDRU5URVIiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiTEVGVCIsInZlcnRpY2FsQWxpZ24iLCJWZXJ0aWNhbEFsaWduIiwiVE9QIiwiZW5hYmxlV3JhcFRleHQiLCJvdmVyZmxvdyIsIk92ZXJmbG93IiwiUkVTSVpFX0hFSUdIVCIsImxpbmVIZWlnaHQiLCJkZXNjV2lkdGgiLCJtYXhEZXNjSGVpZ2h0IiwiaWNvbiIsInNwcml0ZSIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiYnV0dG9uIiwiQnV0dG9uIiwibGFiZWxDb21wIiwiV0hJVEUiLCJvZmYiLCJvbkJ1eUl0ZW0iLCJfc2hvcEl0ZW1EYXRhIiwiaXRlbUhlaWdodCIsIml0ZW1XaWR0aCIsImN1cnJlbnRZIiwiaWNvblNpemUiLCJpY29uVG9wTWFyZ2luIiwiYWN0aXZlIiwidG9GaXhlZCIsIndhcm4iLCJuYW1lSGVpZ2h0IiwibmFtZU1hcmdpbiIsImRlc2NNYXJnaW4iLCJkZXNjTWF4SGVpZ2h0IiwicHJpY2VIZWlnaHQiLCJwcmljZU1hcmdpbiIsImJ0bkhlaWdodCIsImJ0bkJvdHRvbU1hcmdpbiIsImJ0blkiLCJidXR0b25TcHJpdGUiLCJidG5XaWR0aCIsIm1pblkiLCJtYXhZIiwiX3RoaXM1IiwiX2NhbGxlZTMiLCJjdXJyZW50Q29pbnMiLCJTZXJ2ZXJDb25maWciLCJyZXNwb25zZSIsImVycm9yRGF0YSIsImRhdGEiLCJzcGVuZFN1Y2Nlc3MiLCJhZGRTdWNjZXNzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiZ2V0U3RvcmFnZU1vZGUiLCJmZXRjaCIsImdldEJhc2VVUkwiLCJoZWFkZXJzIiwiX2V4dGVuZHMiLCJnZXRBdXRoSGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2hvcEl0ZW1JZCIsIml0ZW1JZCIsImNvdW50Iiwib2siLCJqc29uIiwic3RhdHVzIiwic3BlbmRDb2lucyIsImFkZEl0ZW0iLCJhZGRDb2lucyIsIl90aGlzNiIsIl9jYWxsZWU0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsT0FBQSxTQUFBQSxPQUFBLE9BQUFDLEVBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLE1BQUEsR0FBQUgsRUFBQSxDQUFBSSxjQUFBLEVBQUFDLGNBQUEsR0FBQUosTUFBQSxDQUFBSSxjQUFBLGNBQUFDLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxJQUFBLElBQUFGLEdBQUEsQ0FBQUMsR0FBQSxJQUFBQyxJQUFBLENBQUFDLEtBQUEsS0FBQUMs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QUFDO0VBRUQ7QUFDSjtBQUNBO0VBQ1VwSixPQUFPLFdBQUFBLFFBQUEsRUFBRztJQUFBLElBQUFnTCxNQUFBO0lBQUEsT0FBQWhOLGlCQUFBLGVBQUFoSixtQkFBQSxHQUFBNkcsSUFBQSxVQUFBb1AsU0FBQTtNQUFBLE9BQUFqVyxtQkFBQSxHQUFBeUIsSUFBQSxVQUFBeVUsVUFBQUMsU0FBQTtRQUFBLGtCQUFBQSxTQUFBLENBQUF6TyxJQUFBLEdBQUF5TyxTQUFBLENBQUEvUSxJQUFBO1VBQUE7WUFDWm9FLEVBQUUsQ0FBQzhCLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztZQUFDNkssU0FBQSxDQUFBL1EsSUFBQTtZQUFBLE9BQ3BCNFEsTUFBSSxDQUFDekssaUJBQWlCLEVBQUU7VUFBQTtZQUM5QnlLLE1BQUksQ0FBQ3hLLGFBQWEsRUFBRTtVQUFDO1VBQUE7WUFBQSxPQUFBMkssU0FBQSxDQUFBdE8sSUFBQTtRQUFBO01BQUEsR0FBQW9PLFFBQUE7SUFBQTtFQUN6QixDQUFDO0VBRUQ7QUFDSjtBQUNBO0VBQ0lsTCxXQUFXLFdBQUFBLFlBQUEsRUFBRztJQUNWdkIsRUFBRSxDQUFDOEIsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0lBQ3pCO0lBQ0E5QixFQUFFLENBQUM0TSxRQUFRLENBQUNDLFNBQVMsQ0FBQyxVQUFVLENBQUM7RUFDckM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5ZWG5Z+OVUnnu4Tku7ZcbiAqIOi0n+i0o+WxleekuuWVhuWTgeWIl+ihqOOAgeWkhOeQhui0reS5sOOAgeaYvuekuumHkeW4geetiVxuICovXG5jb25zdCBTaG9wQ29uZmlnID0gcmVxdWlyZShcIlNob3BDb25maWdcIik7XG5jb25zdCBDb2luTWFuYWdlciA9IHJlcXVpcmUoXCJDb2luTWFuYWdlclwiKTtcbmNvbnN0IEl0ZW1EYXRhTWFuYWdlciA9IHJlcXVpcmUoXCJJdGVtRGF0YU1hbmFnZXJcIik7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIOWVhuWTgeWIl+ihqOWuueWZqFxuICAgICAgICBpdGVtTGlzdENvbnRhaW5lcjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWVhuWTgeWIl+ihqOWuueWZqOiKgueCue+8iOeUqOS6juaUvue9ruWVhuWTgemhue+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5ZWG5ZOB6aG5UHJlZmFiXG4gICAgICAgIHNob3BJdGVtUHJlZmFiOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLllYblk4HpoblQcmVmYWLvvIjljIXlkKvlm77moIfjgIHlkI3np7DjgIHku7fmoLzjgIHotK3kubDmjInpkq7nrYnvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOmHkeW4geaYvuekuuagh+etvlxuICAgICAgICBjb2luTGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6YeR5biB5pWw6YeP5pi+56S65qCH562+XCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDov5Tlm57mjInpkq5cbiAgICAgICAgYmFja0J1dHRvbjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICB0b29sdGlwOiBcIui/lOWbnuaMiemSruiKgueCuVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5Yi35paw5oyJ6ZKu77yI5Y+v6YCJ77yJXG4gICAgICAgIHJlZnJlc2hCdXR0b246IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLliLfmlrDmjInpkq7oioLngrnvvIjliLfmlrDph5HluIHlkozllYblk4HliJfooajvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOWVhuWTgemhueW4g+WxgOmFjee9ru+8iOWPguiAg+S4k+S4muWVhuWfjuW4g+WxgO+8iVxuICAgICAgICBzaG9wSXRlbVdpZHRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAyMjAsIC8vIOKtkCDku44xODDlop7liqDliLAyMjDvvIzorqnljaHniYfmm7Tlrr1cbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5ZWG5ZOB6aG55a695bqm77yI5Y2h54mH5a695bqm77yJXCJcbiAgICAgICAgfSxcbiAgICAgICAgc2hvcEl0ZW1IZWlnaHQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDI0MCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5ZWG5ZOB6aG56auY5bqm77yI5Y2h54mH6auY5bqm77yJXCJcbiAgICAgICAgfSxcbiAgICAgICAgc2hvcEl0ZW1TcGFjaW5nOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAxNSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5ZWG5ZOB6aG55LmL6Ze055qE6Ze06LedXCJcbiAgICAgICAgfSxcbiAgICAgICAgc2hvcENvbHVtbnM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDQsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWVhuWTgeWIl+ihqOWIl+aVsO+8iOavj+ihjOaYvuekuueahOWVhuWTgeaVsOmHj++8jOWPguiAg+WbvuaYrzTliJfvvIlcIlxuICAgICAgICB9LFxuICAgICAgICBzaG9wUGFkZGluZzoge1xuICAgICAgICAgICAgZGVmYXVsdDogMjAsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWVhuWTgeWIl+ihqOWuueWZqOeahOWGhei+uei3nVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g4q2QIOiDjOaZr+mAj+aYjuW6pumFjee9rlxuICAgICAgICBiYWNrZ3JvdW5kT3BhY2l0eToge1xuICAgICAgICAgICAgZGVmYXVsdDogMTgwLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLllYbln47og4zmma/pnaLmnb/nmoTpgI/mmI7luqbvvIgwLTI1Ne+8jDE4MD3nuqY3MCXkuI3pgI/mmI7vvIwxMjg9NTAl6YCP5piO77yJXCJcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIOe7keWumui/lOWbnuaMiemSruS6i+S7tlxuICAgICAgICBpZiAodGhpcy5iYWNrQnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLmJhY2tCdXR0b24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQmFja0NsaWNrLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOe7keWumuWIt+aWsOaMiemSruS6i+S7tlxuICAgICAgICBpZiAodGhpcy5yZWZyZXNoQnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hCdXR0b24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnJlZnJlc2gsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluWVhuWfjlVJXG4gICAgICovXG4gICAgYXN5bmMgaW5pdCgpIHtcbiAgICAgICAgY2MubG9nKFwiW1Nob3BVSV0g5Yid5aeL5YyW5ZWG5Z+OVUlcIik7XG5cbiAgICAgICAgLy8g5Yi35paw6YeR5biB5pi+56S6XG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ29pbkRpc3BsYXkoKTtcblxuICAgICAgICAvLyDliqDovb3llYblk4HliJfooahcbiAgICAgICAgdGhpcy5sb2FkU2hvcEl0ZW1zKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOabtOaWsOmHkeW4geaYvuekulxuICAgICAqL1xuICAgIGFzeW5jIHVwZGF0ZUNvaW5EaXNwbGF5KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgY29pbnMgPSBhd2FpdCBDb2luTWFuYWdlci5nZXRDb2lucygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29pbkxhYmVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2luTGFiZWwuc3RyaW5nID0gYOmHkeW4gTogJHtjb2luc31gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MubG9nKGBbU2hvcFVJXSDph5HluIHmm7TmlrA6ICR7Y29pbnN9YCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihgW1Nob3BVSV0g5pu05paw6YeR5biB5pi+56S65aSx6LSlOmAsIGVycm9yKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvaW5MYWJlbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29pbkxhYmVsLnN0cmluZyA9IFwi6YeR5biBOiAtLVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWKoOi9veWVhuWTgeWIl+ihqFxuICAgICAqL1xuICAgIGxvYWRTaG9wSXRlbXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5pdGVtTGlzdENvbnRhaW5lcikge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJbU2hvcFVJXSDllYblk4HliJfooajlrrnlmajmnKrorr7nva5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuc2hvcEl0ZW1QcmVmYWIpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwiW1Nob3BVSV0g5ZWG5ZOB6aG5UHJlZmFi5pyq6K6+572uXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5riF56m6546w5pyJ5ZWG5ZOBXG4gICAgICAgIHRoaXMuaXRlbUxpc3RDb250YWluZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcblxuICAgICAgICAvLyDojrflj5bmiYDmnInllYblk4FcbiAgICAgICAgY29uc3Qgc2hvcEl0ZW1zID0gU2hvcENvbmZpZy5nZXRBbGxJdGVtcygpO1xuXG4gICAgICAgIC8vIOiuvue9ruWuueWZqOW4g+WxgO+8iOe9keagvOW4g+WxgO+8iVxuICAgICAgICB0aGlzLl9zZXR1cENvbnRhaW5lckxheW91dChzaG9wSXRlbXMubGVuZ3RoKTtcblxuICAgICAgICAvLyDkuLrmr4/kuKrllYblk4HliJvlu7pVSemhuVxuICAgICAgICBzaG9wSXRlbXMuZm9yRWFjaCgoc2hvcEl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2hvcEl0ZW1QcmVmYWIpO1xuICAgICAgICAgICAgaXRlbU5vZGUubmFtZSA9IGBTaG9wSXRlbV8ke3Nob3BJdGVtLmlkfWA7XG5cbiAgICAgICAgICAgIC8vIOKtkCDlhbPplK7vvJrlhYjorr7nva7llYblk4HpobnlpKflsI/lkozkvY3nva7vvIjlnKjorr7nva7lhoXlrrnkuYvliY3vvIlcbiAgICAgICAgICAgIHRoaXMuX2xheW91dFNob3BJdGVtKGl0ZW1Ob2RlLCBpbmRleCwgc2hvcEl0ZW1zLmxlbmd0aCwgc2hvcEl0ZW0pO1xuXG4gICAgICAgICAgICAvLyDorr7nva7llYblk4HmlbDmja7vvIjljIXmi6zlhoXpg6jluIPlsYDvvIlcbiAgICAgICAgICAgIHRoaXMuc2V0dXBTaG9wSXRlbShpdGVtTm9kZSwgc2hvcEl0ZW0pO1xuXG4gICAgICAgICAgICAvLyDmt7vliqDliLDlrrnlmahcbiAgICAgICAgICAgIHRoaXMuaXRlbUxpc3RDb250YWluZXIuYWRkQ2hpbGQoaXRlbU5vZGUpO1xuXG4gICAgICAgICAgICBjYy5sb2coYFtTaG9wVUldIOWIm+W7uuWVhuWTgemhuSAke2luZGV4fTogJHtzaG9wSXRlbS5uYW1lfSwg5L2N572uOiAoJHtpdGVtTm9kZS54fSwgJHtpdGVtTm9kZS55fSksIOWkp+WwjzogJHtpdGVtTm9kZS53aWR0aH0geCAke2l0ZW1Ob2RlLmhlaWdodH1gKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2MubG9nKGBbU2hvcFVJXSDlt7LliqDovb0gJHtzaG9wSXRlbXMubGVuZ3RofSDkuKrllYblk4FgKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6K6+572u5a655Zmo5biD5bGA77yI5Y+C6ICD5LiT5Lia5ZWG5Z+O5biD5bGA77yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaXRlbUNvdW50IC0g5ZWG5ZOB5pWw6YePXG4gICAgICovXG4gICAgX3NldHVwQ29udGFpbmVyTGF5b3V0KGl0ZW1Db3VudCkge1xuICAgICAgICBpZiAoIXRoaXMuaXRlbUxpc3RDb250YWluZXIpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwiW1Nob3BVSV0g5ZWG5ZOB5YiX6KGo5a655Zmo5pyq6K6+572u77yM5peg5rOV5biD5bGAXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6K6h566X6ZyA6KaB55qE6KGM5pWwXG4gICAgICAgIGNvbnN0IHJvd3MgPSBNYXRoLmNlaWwoaXRlbUNvdW50IC8gdGhpcy5zaG9wQ29sdW1ucyk7XG5cbiAgICAgICAgLy8g6K6h566X5a655Zmo5aSn5bCP77yI5YyF5ZCr5YaF6L656Led77yJXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gdGhpcy5zaG9wQ29sdW1ucyAqICh0aGlzLnNob3BJdGVtV2lkdGggKyB0aGlzLnNob3BJdGVtU3BhY2luZykgLSB0aGlzLnNob3BJdGVtU3BhY2luZyArIHRoaXMuc2hvcFBhZGRpbmcgKiAyO1xuICAgICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSByb3dzICogKHRoaXMuc2hvcEl0ZW1IZWlnaHQgKyB0aGlzLnNob3BJdGVtU3BhY2luZykgLSB0aGlzLnNob3BJdGVtU3BhY2luZyArIHRoaXMuc2hvcFBhZGRpbmcgKiAyO1xuXG4gICAgICAgIC8vIOiuvue9ruWuueWZqOWkp+Wwj+WSjOmUmueCuVxuICAgICAgICB0aGlzLml0ZW1MaXN0Q29udGFpbmVyLnNldENvbnRlbnRTaXplKGNvbnRhaW5lcldpZHRoLCBjb250YWluZXJIZWlnaHQpO1xuICAgICAgICB0aGlzLml0ZW1MaXN0Q29udGFpbmVyLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcbiAgICAgICAgdGhpcy5pdGVtTGlzdENvbnRhaW5lci5zZXRQb3NpdGlvbigwLCAwKTsgLy8g56Gu5L+d5a655Zmo5Zyo5Lit5b+DXG5cbiAgICAgICAgLy8g6K6+572u5a655Zmo6IOM5pmv77yI5Y+v6YCJ77yM5aaC5p6c6ZyA6KaB55m96Imy6IOM5pmv5Y2h54mH5pWI5p6c77yJXG4gICAgICAgIHRoaXMuX3NldHVwQ29udGFpbmVyQmFja2dyb3VuZCgpO1xuXG4gICAgICAgIGNjLmxvZyhgW1Nob3BVSV0g4pyTIOWuueWZqOW4g+WxgOWujOaIkDogJHt0aGlzLnNob3BDb2x1bW5zfeWIlyB4ICR7cm93c33ooYwsIOWkp+WwjzogJHtjb250YWluZXJXaWR0aH0geCAke2NvbnRhaW5lckhlaWdodH0sIOWVhuWTgeaVsDogJHtpdGVtQ291bnR9YCk7XG4gICAgICAgIGNjLmxvZyhgW1Nob3BVSV0g5ZWG5ZOB6aG56YWN572uOiDlrr3luqY9JHt0aGlzLnNob3BJdGVtV2lkdGh9LCDpq5jluqY9JHt0aGlzLnNob3BJdGVtSGVpZ2h0fSwg6Ze06LedPSR7dGhpcy5zaG9wSXRlbVNwYWNpbmd9YCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiuvue9ruWuueWZqOiDjOaZr++8iOKtkCDljYrpgI/mmI7nmb3oibLljaHniYfmlYjmnpzvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9zZXR1cENvbnRhaW5lckJhY2tncm91bmQoKSB7XG4gICAgICAgIC8vIOajgOafpeaYr+WQpuW3suacieiDjOaZr+iKgueCuVxuICAgICAgICBsZXQgYmdOb2RlID0gdGhpcy5pdGVtTGlzdENvbnRhaW5lci5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIik7XG4gICAgICAgIGlmICghYmdOb2RlKSB7XG4gICAgICAgICAgICBiZ05vZGUgPSBuZXcgY2MuTm9kZShcIkJhY2tncm91bmRcIik7XG4gICAgICAgICAgICBjb25zdCBncmFwaGljcyA9IGJnTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuXG4gICAgICAgICAgICAvLyDirZAg57uY5Yi25Y2K6YCP5piO55m96Imy5ZyG6KeS55+p5b2i6IOM5pmvXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuaXRlbUxpc3RDb250YWluZXIud2lkdGg7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLml0ZW1MaXN0Q29udGFpbmVyLmhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IDEwOyAvLyDlnIbop5LljYrlvoRcblxuICAgICAgICAgICAgLy8g4q2QIOWNiumAj+aYjuiDjOaZr++8muS9v+eUqOWPr+mFjee9rueahOmAj+aYjuW6puWAvFxuICAgICAgICAgICAgLy8g5Y+v5Lul5qC55o2u6ZyA6KaB6LCD5pW077yaMTI4PTUwJemAj+aYju+8jDE4MD03MCXkuI3pgI/mmI7vvIwyMDA9Nzgl5LiN6YCP5piO77yMMjU1PeWujOWFqOS4jemAj+aYjlxuICAgICAgICAgICAgY29uc3Qgb3BhY2l0eSA9IHRoaXMuYmFja2dyb3VuZE9wYWNpdHkgfHwgMTgwOyAvLyDpu5jorqQxODDvvIjnuqY3MCXkuI3pgI/mmI7vvIlcbiAgICAgICAgICAgIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMjU1LCBvcGFjaXR5KTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmZpbGxDb2xvciA9IGJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgIGdyYXBoaWNzLnJvdW5kUmVjdCgtd2lkdGggLyAyLCAtaGVpZ2h0IC8gMiwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmZpbGwoKTtcblxuICAgICAgICAgICAgLy8g4q2QIOiuvue9ruiKgueCuemAj+aYjuW6pu+8iOehruS/neWNiumAj+aYjuaViOaenO+8iVxuICAgICAgICAgICAgYmdOb2RlLnNldENvbnRlbnRTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgICAgYmdOb2RlLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcbiAgICAgICAgICAgIGJnTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgICAgIGJnTm9kZS5vcGFjaXR5ID0gb3BhY2l0eTsgLy8g6IqC54K56YCP5piO5bqm77yI5LiOZmlsbENvbG9y55qEYWxwaGHlgLzkv53mjIHkuIDoh7TvvIlcbiAgICAgICAgICAgIGJnTm9kZS56SW5kZXggPSAtMTsgLy8g6IOM5pmv5Zyo5pyA5LiL5bGCXG5cbiAgICAgICAgICAgIHRoaXMuaXRlbUxpc3RDb250YWluZXIuYWRkQ2hpbGQoYmdOb2RlKTtcbiAgICAgICAgICAgIGNjLmxvZyhgW1Nob3BVSV0g4pyTIOW3suiuvue9ruWNiumAj+aYjuiDjOaZrzogYWxwaGE9JHtiYWNrZ3JvdW5kQ29sb3IuYX0sIG9wYWNpdHk9JHtiZ05vZGUub3BhY2l0eX1gKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDluIPlsYDllYblk4HpobnvvIjorr7nva7kvY3nva7vvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gaXRlbU5vZGUgLSDllYblk4HpobnoioLngrlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSDllYblk4HntKLlvJVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdG90YWxJdGVtcyAtIOWVhuWTgeaAu+aVsFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzaG9wSXRlbSAtIOWVhuWTgeaVsOaNru+8iOWPr+mAie+8jOeUqOS6juiuvue9ruagt+W8j++8iVxuICAgICAqL1xuICAgIF9sYXlvdXRTaG9wSXRlbShpdGVtTm9kZSwgaW5kZXgsIHRvdGFsSXRlbXMsIHNob3BJdGVtID0gbnVsbCkge1xuICAgICAgICAvLyDorqHnrpfooYzliJfkvY3nva5cbiAgICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpbmRleCAvIHRoaXMuc2hvcENvbHVtbnMpO1xuICAgICAgICBjb25zdCBjb2wgPSBpbmRleCAlIHRoaXMuc2hvcENvbHVtbnM7XG4gICAgICAgIGNvbnN0IHRvdGFsUm93cyA9IE1hdGguY2VpbCh0b3RhbEl0ZW1zIC8gdGhpcy5zaG9wQ29sdW1ucyk7XG5cbiAgICAgICAgLy8g6K6h566X5L2N572u77yI5bGF5Lit5biD5bGA77yJXG4gICAgICAgIGNvbnN0IHRvdGFsV2lkdGggPSB0aGlzLnNob3BDb2x1bW5zICogKHRoaXMuc2hvcEl0ZW1XaWR0aCArIHRoaXMuc2hvcEl0ZW1TcGFjaW5nKSAtIHRoaXMuc2hvcEl0ZW1TcGFjaW5nO1xuICAgICAgICBjb25zdCB0b3RhbEhlaWdodCA9IHRvdGFsUm93cyAqICh0aGlzLnNob3BJdGVtSGVpZ2h0ICsgdGhpcy5zaG9wSXRlbVNwYWNpbmcpIC0gdGhpcy5zaG9wSXRlbVNwYWNpbmc7XG5cbiAgICAgICAgY29uc3Qgc3RhcnRYID0gLXRvdGFsV2lkdGggLyAyICsgdGhpcy5zaG9wSXRlbVdpZHRoIC8gMjtcbiAgICAgICAgY29uc3Qgc3RhcnRZID0gdG90YWxIZWlnaHQgLyAyIC0gdGhpcy5zaG9wSXRlbUhlaWdodCAvIDI7XG5cbiAgICAgICAgY29uc3QgeCA9IHN0YXJ0WCArIGNvbCAqICh0aGlzLnNob3BJdGVtV2lkdGggKyB0aGlzLnNob3BJdGVtU3BhY2luZyk7XG4gICAgICAgIGNvbnN0IHkgPSBzdGFydFkgLSByb3cgKiAodGhpcy5zaG9wSXRlbUhlaWdodCArIHRoaXMuc2hvcEl0ZW1TcGFjaW5nKTtcblxuICAgICAgICAvLyDorr7nva7llYblk4HpobnlpKflsI/lkozkvY3nva5cbiAgICAgICAgaXRlbU5vZGUuc2V0Q29udGVudFNpemUodGhpcy5zaG9wSXRlbVdpZHRoLCB0aGlzLnNob3BJdGVtSGVpZ2h0KTtcbiAgICAgICAgaXRlbU5vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgICAgICBpdGVtTm9kZS5zZXRQb3NpdGlvbih4LCB5KTtcblxuICAgICAgICAvLyDirZAg5Li65ZWG5ZOB6aG55re75Yqg5a655Zmo6IOM5pmv5ZKM6L655qGG77yI5qC55o2u5ZWG5ZOB57G75Z6L6K6+572u5qC35byP77yJXG4gICAgICAgIHRoaXMuX3NldHVwSXRlbUNhcmRCYWNrZ3JvdW5kKGl0ZW1Ob2RlLCBzaG9wSXRlbSk7XG5cbiAgICAgICAgLy8g4q2QIOa3u+WKoE1hc2vnu4Tku7bvvIznoa7kv53lhoXlrrnkuKXmoLzpmZDliLblnKjlrrnlmajlhoVcbiAgICAgICAgdGhpcy5fc2V0dXBJdGVtQ2FyZE1hc2soaXRlbU5vZGUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDorr7nva7llYblk4Hpobnlrrnlmajog4zmma/vvIjljaHniYfmoLflvI/vvIzirZAg5qC55o2u5ZWG5ZOB57G75Z6L5L2/55So5LiN5ZCM5qC35byP77yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGl0ZW1Ob2RlIC0g5ZWG5ZOB6aG56IqC54K5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNob3BJdGVtIC0g5ZWG5ZOB5pWw5o2u77yI5Y+v6YCJ77yM55So5LqO6I635Y+W57G75Z6L5qC35byP77yJXG4gICAgICovXG4gICAgX3NldHVwSXRlbUNhcmRCYWNrZ3JvdW5kKGl0ZW1Ob2RlLCBzaG9wSXRlbSA9IG51bGwpIHtcbiAgICAgICAgLy8g5qOA5p+l5piv5ZCm5bey5pyJ6IOM5pmv6IqC54K5XG4gICAgICAgIGxldCBiZ05vZGUgPSBpdGVtTm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNhcmRCYWNrZ3JvdW5kXCIpO1xuICAgICAgICBpZiAoIWJnTm9kZSkge1xuICAgICAgICAgICAgYmdOb2RlID0gbmV3IGNjLk5vZGUoXCJDYXJkQmFja2dyb3VuZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGdyYXBoaWNzID0gYmdOb2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG5cbiAgICAgICAgICAgIC8vIOKtkCDmoLnmja7llYblk4Hnsbvlnovojrflj5bmoLflvI/vvIjlpoLmnpzmj5DkvpvkuobllYblk4HmlbDmja7vvIlcbiAgICAgICAgICAgIGxldCBiYWNrZ3JvdW5kQ29sb3IgPSBuZXcgY2MuQ29sb3IoMjQ1LCAyNDUsIDI0NSwgMjU1KTsgLy8g6buY6K6k5rWF54GwXG4gICAgICAgICAgICBsZXQgYm9yZGVyQ29sb3IgPSBuZXcgY2MuQ29sb3IoMjAwLCAyMDAsIDIwMCwgMjU1KTsgICAgIC8vIOm7mOiupOeBsOiJsui+ueahhlxuXG4gICAgICAgICAgICBpZiAoc2hvcEl0ZW0gJiYgc2hvcEl0ZW0uY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBTaG9wQ29uZmlnID0gcmVxdWlyZShcIlNob3BDb25maWdcIik7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBTaG9wQ29uZmlnLmdldENhdGVnb3J5U3R5bGUoc2hvcEl0ZW0uY2F0ZWdvcnkpO1xuICAgICAgICAgICAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBzdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yID0gc3R5bGUuYm9yZGVyQ29sb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDnu5jliLbljaHniYfog4zmma/vvIjluKblnIbop5LlkozovrnmoYbvvIlcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gaXRlbU5vZGUud2lkdGg7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBpdGVtTm9kZS5oZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCByYWRpdXMgPSA4OyAvLyDlnIbop5LljYrlvoRcbiAgICAgICAgICAgIGNvbnN0IGJvcmRlcldpZHRoID0gMjsgLy8g6L655qGG5a695bqmXG5cbiAgICAgICAgICAgIC8vIOe7mOWItuiDjOaZr1xuICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgZ3JhcGhpY3Mucm91bmRSZWN0KC13aWR0aCAvIDIsIC1oZWlnaHQgLyAyLCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpO1xuICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbCgpO1xuXG4gICAgICAgICAgICAvLyDnu5jliLbovrnmoYZcbiAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yID0gYm9yZGVyQ29sb3I7XG4gICAgICAgICAgICBncmFwaGljcy5saW5lV2lkdGggPSBib3JkZXJXaWR0aDtcbiAgICAgICAgICAgIGdyYXBoaWNzLnJvdW5kUmVjdCgtd2lkdGggLyAyLCAtaGVpZ2h0IC8gMiwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAvLyDorr7nva7og4zmma/oioLngrnlsZ7mgKdcbiAgICAgICAgICAgIGJnTm9kZS5zZXRDb250ZW50U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIGJnTm9kZS5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG4gICAgICAgICAgICBiZ05vZGUuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgICAgICBiZ05vZGUuekluZGV4ID0gLTEwMDsgLy8g6IOM5pmv5Zyo5pyA5LiL5bGCXG5cbiAgICAgICAgICAgIGl0ZW1Ob2RlLmFkZENoaWxkKGJnTm9kZSk7XG4gICAgICAgICAgICBjYy5sb2coYFtTaG9wVUldIOKckyDlt7LkuLrllYblk4Hpobnmt7vliqDlrrnlmajog4zmma86ICR7d2lkdGh9eCR7aGVpZ2h0fSwg57G75Z6LPSR7c2hvcEl0ZW0gPyBzaG9wSXRlbS5jYXRlZ29yeSA6ICdkZWZhdWx0J31gKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDorr7nva7llYblk4Hpobnlrrnlmajpga7nvanvvIjnoa7kv53lhoXlrrnkuI3otoXlh7rlrrnlmajvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gaXRlbU5vZGUgLSDllYblk4HpobnoioLngrlcbiAgICAgKi9cbiAgICBfc2V0dXBJdGVtQ2FyZE1hc2soaXRlbU5vZGUpIHtcbiAgICAgICAgLy8g5qOA5p+l5piv5ZCm5bey5pyJTWFza+e7hOS7tlxuICAgICAgICBsZXQgbWFzayA9IGl0ZW1Ob2RlLmdldENvbXBvbmVudChjYy5NYXNrKTtcbiAgICAgICAgaWYgKCFtYXNrKSB7XG4gICAgICAgICAgICBtYXNrID0gaXRlbU5vZGUuYWRkQ29tcG9uZW50KGNjLk1hc2spO1xuICAgICAgICAgICAgbWFzay50eXBlID0gY2MuTWFzay5UeXBlLlJFQ1Q7IC8vIOefqeW9oumBrue9qVxuICAgICAgICAgICAgbWFzay5zZWdlbWVudHMgPSAxOyAvLyDlnIbop5LliIbmrrXmlbDvvIgx6KGo56S65peg5ZyG6KeS77yM5L2G6YWN5ZCIR3JhcGhpY3Pkvb/nlKjvvIlcblxuICAgICAgICAgICAgLy8g6K6+572u6YGu572p5aSn5bCP77yI55Wl5bCP5LqO5a655Zmo77yM56Gu5L+d6L655qGG5Y+v6KeB77yJXG4gICAgICAgICAgICBjb25zdCBwYWRkaW5nID0gMTsgLy8g5YaF6L656Led77yM56Gu5L+d5YaF5a655LiN6LS06L65XG4gICAgICAgICAgICBtYXNrLndpZHRoID0gaXRlbU5vZGUud2lkdGggLSBwYWRkaW5nICogMjtcbiAgICAgICAgICAgIG1hc2suaGVpZ2h0ID0gaXRlbU5vZGUuaGVpZ2h0IC0gcGFkZGluZyAqIDI7XG5cbiAgICAgICAgICAgIGNjLmxvZyhgW1Nob3BVSV0g4pyTIOW3suS4uuWVhuWTgemhuea3u+WKoOmBrue9qTogJHttYXNrLndpZHRofXgke21hc2suaGVpZ2h0fWApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiuvue9ruWVhuWTgemhuVVJXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBpdGVtTm9kZSAtIOWVhuWTgemhueiKgueCuVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzaG9wSXRlbSAtIOWVhuWTgeaVsOaNrlxuICAgICAqL1xuICAgIHNldHVwU2hvcEl0ZW0oaXRlbU5vZGUsIHNob3BJdGVtKSB7XG4gICAgICAgIC8vIOafpeaJvuWtkOiKgueCue+8iOagueaNrlByZWZhYue7k+aehOiwg+aVtO+8iVxuICAgICAgICBjb25zdCBuYW1lTGFiZWwgPSBpdGVtTm9kZS5nZXRDaGlsZEJ5TmFtZShcIk5hbWVMYWJlbFwiKTtcbiAgICAgICAgY29uc3QgcHJpY2VMYWJlbCA9IGl0ZW1Ob2RlLmdldENoaWxkQnlOYW1lKFwiUHJpY2VMYWJlbFwiKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGl0ZW1Ob2RlLmdldENoaWxkQnlOYW1lKFwiRGVzY3JpcHRpb25MYWJlbFwiKTtcbiAgICAgICAgY29uc3QgaWNvbk5vZGUgPSBpdGVtTm9kZS5nZXRDaGlsZEJ5TmFtZShcIkljb25cIik7XG4gICAgICAgIC8vIOKtkCDkv67mlLnvvJrmjInpkq7lkI3np7DmmK9cIui0reS5sFwi6ICM5LiN5pivXCJCdXlCdXR0b25cIlxuICAgICAgICBjb25zdCBidXlCdXR0b24gPSBpdGVtTm9kZS5nZXRDaGlsZEJ5TmFtZShcIui0reS5sFwiKSB8fCBpdGVtTm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ1eUJ1dHRvblwiKTtcblxuICAgICAgICAvLyDirZAg6LCD6K+V77ya6L6T5Ye65om+5Yiw55qE6IqC54K5XG4gICAgICAgIGNjLmxvZyhgW1Nob3BVSV0g6K6+572u5ZWG5ZOBICR7c2hvcEl0ZW0ubmFtZX06YCwge1xuICAgICAgICAgICAgbmFtZUxhYmVsOiAhIW5hbWVMYWJlbCxcbiAgICAgICAgICAgIHByaWNlTGFiZWw6ICEhcHJpY2VMYWJlbCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uTGFiZWw6ICEhZGVzY3JpcHRpb25MYWJlbCxcbiAgICAgICAgICAgIGljb25Ob2RlOiAhIWljb25Ob2RlLFxuICAgICAgICAgICAgYnV5QnV0dG9uOiAhIWJ1eUJ1dHRvbixcbiAgICAgICAgICAgIGJ1eUJ1dHRvbk5hbWU6IGJ1eUJ1dHRvbiA/IGJ1eUJ1dHRvbi5uYW1lIDogJ+acquaJvuWIsCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g6K6+572u5ZWG5ZOB6aG55YaF6YOo5biD5bGAXG4gICAgICAgIHRoaXMuX2xheW91dFNob3BJdGVtQ29udGVudChpdGVtTm9kZSwgaWNvbk5vZGUsIG5hbWVMYWJlbCwgcHJpY2VMYWJlbCwgZGVzY3JpcHRpb25MYWJlbCwgYnV5QnV0dG9uKTtcblxuICAgICAgICAvLyDirZAg5qC55o2u5ZWG5ZOB57G75Z6L6I635Y+W5qC35byP6YWN572uXG4gICAgICAgIGNvbnN0IFNob3BDb25maWcgPSByZXF1aXJlKFwiU2hvcENvbmZpZ1wiKTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBzaG9wSXRlbS5jYXRlZ29yeSA/IFNob3BDb25maWcuZ2V0Q2F0ZWdvcnlTdHlsZShzaG9wSXRlbS5jYXRlZ29yeSkgOiBudWxsO1xuICAgICAgICAvLyDirZAg5LyY5YyW77ya5paH5a2X6aKc6Imy5pu05piO5pi+77yI5rex6Imy77yJXG4gICAgICAgIGNvbnN0IG5hbWVDb2xvciA9IHN0eWxlID8gc3R5bGUubmFtZUNvbG9yIDogbmV3IGNjLkNvbG9yKDMwLCAzMCwgMzAsIDI1NSk7IC8vIOa3sem7keiJsu+8jOabtOaYjuaYvlxuICAgICAgICBjb25zdCBwcmljZUNvbG9yID0gc3R5bGUgPyBzdHlsZS5wcmljZUNvbG9yIDogbmV3IGNjLkNvbG9yKDI1NSwgMjE1LCAwLCAyNTUpOyAvLyDph5HoibLkv53mjIHkuI3lj5hcbiAgICAgICAgY29uc3QgZGVzY0NvbG9yID0gc3R5bGUgPyBzdHlsZS5kZXNjQ29sb3IgOiBuZXcgY2MuQ29sb3IoNjAsIDYwLCA2MCwgMjU1KTsgLy8g5rex54Gw6Imy77yM5pu05piO5pi+77yI5Y6f5p2l5pivMTIw77yJXG5cbiAgICAgICAgLy8g6K6+572u5ZCN56ew77yI4q2QIOagueaNruWVhuWTgeexu+Wei+S9v+eUqOS4jeWQjOminOiJsu+8jOabtOaYjuaYvu+8iVxuICAgICAgICBpZiAobmFtZUxhYmVsKSB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IG5hbWVMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gc2hvcEl0ZW0ubmFtZTtcbiAgICAgICAgICAgICAgICAvLyDirZAg5LyY5YyW77ya5a2X5L2T5pu05aSn77yM6aKc6Imy5pu05rexXG4gICAgICAgICAgICAgICAgbGFiZWwuZm9udFNpemUgPSAzMDsgLy8g5LuOMjblop7liqDliLAzMFxuICAgICAgICAgICAgICAgIGxhYmVsLm5vZGUuY29sb3IgPSBuYW1lQ29sb3I7XG4gICAgICAgICAgICAgICAgbGFiZWwuaG9yaXpvbnRhbEFsaWduID0gY2MuTGFiZWwuSG9yaXpvbnRhbEFsaWduLkNFTlRFUjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiuvue9ruS7t+agvO+8iOKtkCDmoLnmja7llYblk4Hnsbvlnovkvb/nlKjkuI3lkIzpopzoibLvvIlcbiAgICAgICAgaWYgKHByaWNlTGFiZWwpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gcHJpY2VMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gYCR7c2hvcEl0ZW0ucHJpY2V9IOmHkeW4gWA7XG4gICAgICAgICAgICAgICAgLy8g4q2QIOS8mOWMlu+8muWtl+S9k+abtOWkp++8jOS7t+agvOabtOeqgeWHulxuICAgICAgICAgICAgICAgIGxhYmVsLmZvbnRTaXplID0gMzI7IC8vIOS7jjI45aKe5Yqg5YiwMzJcbiAgICAgICAgICAgICAgICBsYWJlbC5ub2RlLmNvbG9yID0gcHJpY2VDb2xvcjtcbiAgICAgICAgICAgICAgICBsYWJlbC5ob3Jpem9udGFsQWxpZ24gPSBjYy5MYWJlbC5Ib3Jpem9udGFsQWxpZ24uQ0VOVEVSO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g6K6+572u5o+P6L+w77yI4q2QIOS8mOWMlu+8muehruS/neaWh+Wtl+iHquWKqOaNouihjOS4lOmZkOWItuWcqOWuueWZqOWGhe+8jOagueaNruWVhuWTgeexu+Wei+S9v+eUqOS4jeWQjOminOiJsu+8jOabtOaYjuaYvu+8iVxuICAgICAgICBpZiAoZGVzY3JpcHRpb25MYWJlbCkge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkZXNjcmlwdGlvbkxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBzaG9wSXRlbS5kZXNjcmlwdGlvbiB8fCBcIlwiO1xuICAgICAgICAgICAgICAgIC8vIOKtkCDkvJjljJbvvJrlrZfkvZPmm7TlpKfvvIzpopzoibLmm7Tmt7HvvIzmm7TmmI7mmL5cbiAgICAgICAgICAgICAgICBsYWJlbC5mb250U2l6ZSA9IDIwOyAvLyDku44xOOWinuWKoOWIsDIwXG4gICAgICAgICAgICAgICAgbGFiZWwubm9kZS5jb2xvciA9IGRlc2NDb2xvcjsgLy8g5rex54Gw6ImyKDYwLDYwLDYwKe+8jOabtOaYjuaYvlxuICAgICAgICAgICAgICAgIGxhYmVsLmhvcml6b250YWxBbGlnbiA9IGNjLkxhYmVsLkhvcml6b250YWxBbGlnbi5MRUZUOyAvLyDlt6blr7npvZDvvIzmm7TmmJPpmIXor7tcbiAgICAgICAgICAgICAgICBsYWJlbC52ZXJ0aWNhbEFsaWduID0gY2MuTGFiZWwuVmVydGljYWxBbGlnbi5UT1A7IC8vIOmhtumDqOWvuem9kFxuICAgICAgICAgICAgICAgIGxhYmVsLmVuYWJsZVdyYXBUZXh0ID0gdHJ1ZTsgLy8g4q2QIOWQr+eUqOiHquWKqOaNouihjFxuICAgICAgICAgICAgICAgIGxhYmVsLm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuUkVTSVpFX0hFSUdIVDsgLy8g4q2QIOiHquWKqOiwg+aVtOmrmOW6puS7pemAguW6lOWGheWuuVxuICAgICAgICAgICAgICAgIC8vIOKtkCDlop7liqDooYzpl7Tot53vvIjpgJrov4flop7liqDooYzpq5jmnaXnu5nmloflrZfmm7TlpJrnqbrpl7TvvIlcbiAgICAgICAgICAgICAgICBsYWJlbC5saW5lSGVpZ2h0ID0gMjY7IC8vIOihjOmrmO+8muS7jjIy5aKe5Yqg5YiwMjbvvIzphY3lkIjmm7TlpKfnmoTlrZfkvZNcblxuICAgICAgICAgICAgICAgIC8vIOKtkCDorr7nva7mj4/ov7DmoIfnrb7lsLrlr7jvvIjkuKXmoLzpmZDliLblnKjlrrnlmajlhoXvvIznlZnlh7rlhoXovrnot53vvIlcbiAgICAgICAgICAgICAgICBjb25zdCBwYWRkaW5nID0gMTI7IC8vIOW3puWPs+WGhei+uei3nVxuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NXaWR0aCA9IHRoaXMuc2hvcEl0ZW1XaWR0aCAtIHBhZGRpbmcgKiAyOyAvLyDlrr3luqYgPSDlrrnlmajlrr3luqYgLSDlt6blj7PlhoXovrnot51cbiAgICAgICAgICAgICAgICBjb25zdCBtYXhEZXNjSGVpZ2h0ID0gNjA7IC8vIOacgOWkp+mrmOW6pu+8muS7jjU15aKe5Yqg5YiwNjDvvIznu5nmm7TlpKfnmoTlrZfkvZPmm7TlpJrnqbrpl7RcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnNldENvbnRlbnRTaXplKGRlc2NXaWR0aCwgbWF4RGVzY0hlaWdodCk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBbmNob3JQb2ludCgwLjUsIDEpOyAvLyDplJrngrnlnKjpobbpg6jkuK3lv4PvvIzkvr/kuo7lrprkvY1cblxuICAgICAgICAgICAgICAgIGNjLmxvZyhgW1Nob3BVSV0g4pyTIOaPj+i/sOagh+etvuW3suiuvue9rjog5a695bqmPSR7ZGVzY1dpZHRofSwg5pyA5aSn6auY5bqmPSR7bWF4RGVzY0hlaWdodH0sIOWtl+S9kz0ke2xhYmVsLmZvbnRTaXplfSwg6KGM6auYPSR7bGFiZWwubGluZUhlaWdodH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiuvue9ruWbvuagh++8iOWmguaenOacie+8iVxuICAgICAgICBpZiAoaWNvbk5vZGUpIHtcbiAgICAgICAgICAgIGlmIChzaG9wSXRlbS5pY29uKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlID0gaWNvbk5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNwcml0ZSkge1xuICAgICAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzaG9wSXRlbS5pY29uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOiuvue9ruWbvuagh+Wkp+Wwj+WSjOS9jee9rlxuICAgICAgICAgICAgaWNvbk5vZGUuc2V0Q29udGVudFNpemUoODAsIDgwKTtcbiAgICAgICAgICAgIGljb25Ob2RlLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiuvue9rui0reS5sOaMiemSru+8iOWPguiAg+S4k+S4muWVhuWfjuagt+W8j++8muiTneiJsuaMiemSru+8jOeZveiJsuaWh+Wtl++8iVxuICAgICAgICBpZiAoYnV5QnV0dG9uKSB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBidXlCdXR0b24uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgLy8g5p+l5om+5oyJ6ZKu5paH5a2X5qCH562+XG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gYnV5QnV0dG9uLmdldENoaWxkQnlOYW1lKFwiTGFiZWxcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzmsqHmnIlMYWJlbOWtkOiKgueCue+8jOWIm+W7uuS4gOS4qlxuICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IG5ldyBjYy5Ob2RlKFwiTGFiZWxcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsQ29tcCA9IGxhYmVsLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsQ29tcC5zdHJpbmcgPSBcIui0reS5sFwiOyAvLyDmjInpkq7mloflrZfmlLnkuLpcIui0reS5sFwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsQ29tcC5mb250U2l6ZSA9IDE4O1xuICAgICAgICAgICAgICAgICAgICBsYWJlbENvbXAubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbENvbXAuaG9yaXpvbnRhbEFsaWduID0gY2MuTGFiZWwuSG9yaXpvbnRhbEFsaWduLkNFTlRFUjtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxDb21wLnZlcnRpY2FsQWxpZ24gPSBjYy5MYWJlbC5WZXJ0aWNhbEFsaWduLkNFTlRFUjtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0Q29udGVudFNpemUoYnV5QnV0dG9uLndpZHRoLCBidXlCdXR0b24uaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgYnV5QnV0dG9uLmFkZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbENvbXAgPSBsYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWxDb21wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbENvbXAuc3RyaW5nID0gXCLotK3kubBcIjsgLy8g5oyJ6ZKu5paH5a2X5pS55Li6XCLotK3kubBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxDb21wLmZvbnRTaXplID0gMTg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbENvbXAubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxDb21wLmhvcml6b250YWxBbGlnbiA9IGNjLkxhYmVsLkhvcml6b250YWxBbGlnbi5DRU5URVI7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbENvbXAudmVydGljYWxBbGlnbiA9IGNjLkxhYmVsLlZlcnRpY2FsQWxpZ24uQ0VOVEVSO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDnu5HlrprotK3kubDmjInpkq7kuovku7ZcbiAgICAgICAgICAgIGJ1eUJ1dHRvbi5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKTsgLy8g5YWI56e76Zmk5pen5LqL5Lu2XG4gICAgICAgICAgICBidXlCdXR0b24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkJ1eUl0ZW0oc2hvcEl0ZW0pO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDkv53lrZjllYblk4HmlbDmja7liLDoioLngrlcbiAgICAgICAgaXRlbU5vZGUuX3Nob3BJdGVtRGF0YSA9IHNob3BJdGVtO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDluIPlsYDllYblk4HpobnlhoXpg6jlhoXlrrnvvIjirZAg5LyY5YyW54mI77ya5Zu+5qCHLT7lkI3np7AtPuaPj+i/sC0+5Lu35qC8LT7mjInpkq7vvIzkuKXmoLzpmZDliLblnKjlrrnlmajlhoXvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gaXRlbU5vZGUgLSDllYblk4HpobnoioLngrlcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGljb25Ob2RlIC0g5Zu+5qCH6IqC54K5XG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBuYW1lTGFiZWwgLSDlkI3np7DmoIfnrb5cbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IHByaWNlTGFiZWwgLSDku7fmoLzmoIfnrb5cbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGRlc2NyaXB0aW9uTGFiZWwgLSDmj4/ov7DmoIfnrb5cbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGJ1eUJ1dHRvbiAtIOi0reS5sOaMiemSrlxuICAgICAqL1xuICAgIF9sYXlvdXRTaG9wSXRlbUNvbnRlbnQoaXRlbU5vZGUsIGljb25Ob2RlLCBuYW1lTGFiZWwsIHByaWNlTGFiZWwsIGRlc2NyaXB0aW9uTGFiZWwsIGJ1eUJ1dHRvbikge1xuICAgICAgICBjb25zdCBpdGVtSGVpZ2h0ID0gdGhpcy5zaG9wSXRlbUhlaWdodDtcbiAgICAgICAgY29uc3QgaXRlbVdpZHRoID0gdGhpcy5zaG9wSXRlbVdpZHRoO1xuICAgICAgICBjb25zdCBwYWRkaW5nID0gMTI7IC8vIOWGhei+uei3ne+8iOehruS/neWGheWuueS4jei0tOi+ue+8iVxuXG4gICAgICAgIC8vIOKtkCDosIPor5XvvJrovpPlh7rluIPlsYDkv6Hmga9cbiAgICAgICAgY2MubG9nKGBbU2hvcFVJXSDluIPlsYDllYblk4HpobnlhoXlrrk6IOWkp+Wwjz0ke2l0ZW1XaWR0aH14JHtpdGVtSGVpZ2h0fSwg5YaF6L656LedPSR7cGFkZGluZ31gKTtcblxuICAgICAgICAvLyDirZAg5biD5bGA6aG65bqP77yI5LuO5LiK5Yiw5LiL77yJ77ya5Zu+5qCHIC0+IOWQjeensCAtPiDmj4/ov7AgLT4g5Lu35qC8IC0+IOaMiemSrlxuICAgICAgICAvLyDirZAg5omA5pyJ5YWD57Sg6YO95Lil5qC86ZmQ5Yi25Zyo5a655Zmo5YaF77yI5L2/55So55u45a+55L2N572u6K6h566X77yJXG5cbiAgICAgICAgbGV0IGN1cnJlbnRZID0gaXRlbUhlaWdodCAvIDIgLSBwYWRkaW5nOyAvLyDku47pobbpg6jlvIDlp4vvvIznlZnlh7rlhoXovrnot51cblxuICAgICAgICAvLyAxLiDlm77moIfkvY3nva7vvIjpobbpg6jvvIzlsYXkuK3vvIlcbiAgICAgICAgaWYgKGljb25Ob2RlKSB7XG4gICAgICAgICAgICBjb25zdCBpY29uU2l6ZSA9IDcwOyAvLyDlm77moIflpKflsI/vvIjnlaXlsI/vvIzkuLrlhbbku5blhoXlrrnnlZnlh7rnqbrpl7TvvIlcbiAgICAgICAgICAgIGNvbnN0IGljb25Ub3BNYXJnaW4gPSAxMjsgLy8g4q2QIOWbvuagh+mhtumDqOi+uei3ne+8muS7jjEw5aKe5Yqg5YiwMTJcbiAgICAgICAgICAgIGN1cnJlbnRZIC09IGljb25Ub3BNYXJnaW47XG4gICAgICAgICAgICBpY29uTm9kZS5zZXRQb3NpdGlvbigwLCBjdXJyZW50WSAtIGljb25TaXplIC8gMik7IC8vIOWbvuagh+S4reW/g+S9jee9rlxuICAgICAgICAgICAgaWNvbk5vZGUuc2V0Q29udGVudFNpemUoaWNvblNpemUsIGljb25TaXplKTtcbiAgICAgICAgICAgIGljb25Ob2RlLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcbiAgICAgICAgICAgIGljb25Ob2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBpY29uTm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgY3VycmVudFkgLT0gaWNvblNpemUgKyAxMDsgLy8g4q2QIOWbvuagh+mrmOW6piArIOmXtOi3ne+8muS7jjjlop7liqDliLAxMFxuICAgICAgICAgICAgY2MubG9nKGBbU2hvcFVJXSAgIOWbvuagh+S9jee9rjogKDAsICR7KGN1cnJlbnRZIC0gaWNvblNpemUgLyAyKS50b0ZpeGVkKDEpfSksIOWkp+Wwjz0ke2ljb25TaXplfXgke2ljb25TaXplfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2Mud2FybihgW1Nob3BVSV0gICDmnKrmib7liLBJY29u6IqC54K5YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAyLiDlkI3np7DkvY3nva7vvIjlm77moIfkuIvmlrnvvIzlsYXkuK3vvIlcbiAgICAgICAgaWYgKG5hbWVMYWJlbCkge1xuICAgICAgICAgICAgY29uc3QgbmFtZUhlaWdodCA9IDMyOyAvLyDirZAg5LuOMjjlop7liqDliLAzMu+8iOmFjeWQiOabtOWkp+eahOWtl+S9kzMw77yJXG4gICAgICAgICAgICBjb25zdCBuYW1lTWFyZ2luID0gMTI7IC8vIOKtkCDlkI3np7DkuI7lm77moIfnmoTpl7Tot53vvJrku4425aKe5Yqg5YiwMTJcbiAgICAgICAgICAgIGN1cnJlbnRZIC09IG5hbWVNYXJnaW47XG4gICAgICAgICAgICBuYW1lTGFiZWwuc2V0UG9zaXRpb24oMCwgY3VycmVudFkgLSBuYW1lSGVpZ2h0IC8gMik7XG4gICAgICAgICAgICBuYW1lTGFiZWwuc2V0Q29udGVudFNpemUoaXRlbVdpZHRoIC0gcGFkZGluZyAqIDIsIG5hbWVIZWlnaHQpO1xuICAgICAgICAgICAgbmFtZUxhYmVsLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcbiAgICAgICAgICAgIG5hbWVMYWJlbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgY3VycmVudFkgLT0gbmFtZUhlaWdodCArIDg7IC8vIOKtkCDlkI3np7Dpq5jluqYgKyDpl7Tot53vvJrku4405aKe5Yqg5YiwOFxuICAgICAgICAgICAgY2MubG9nKGBbU2hvcFVJXSAgIOWQjeensOS9jee9rjogKDAsICR7KGN1cnJlbnRZIC0gbmFtZUhlaWdodCAvIDIpLnRvRml4ZWQoMSl9KSwg5aSn5bCPPSR7aXRlbVdpZHRoIC0gcGFkZGluZyAqIDJ9eCR7bmFtZUhlaWdodH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLndhcm4oYFtTaG9wVUldICAg5pyq5om+5YiwTmFtZUxhYmVs6IqC54K5YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAzLiDmj4/ov7DkvY3nva7vvIjlkI3np7DkuIvmlrnvvIzlt6blr7npvZDvvIzoh6rliqjmjaLooYzvvIlcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uTGFiZWwpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NNYXJnaW4gPSAxMDsgLy8g4q2QIOaPj+i/sOS4juWQjeensOeahOmXtOi3ne+8muS7jjTlop7liqDliLAxMFxuICAgICAgICAgICAgY29uc3QgZGVzY01heEhlaWdodCA9IDYwOyAvLyDirZAg5o+P6L+w5pyA5aSn6auY5bqm77ya5LuONTXlop7liqDliLA2MO+8iOmFjeWQiOabtOWkp+eahOWtl+S9kzIw5ZKM6KGM6auYMjbvvIlcbiAgICAgICAgICAgIGN1cnJlbnRZIC09IGRlc2NNYXJnaW47XG4gICAgICAgICAgICAvLyDirZAg6ZSa54K55Zyo6aG26YOo5Lit5b+D77yM5L6/5LqO5paH5a2X5LuO5LiK5Yiw5LiL5o6S5YiXXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnNldFBvc2l0aW9uKDAsIGN1cnJlbnRZKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0Q29udGVudFNpemUoaXRlbVdpZHRoIC0gcGFkZGluZyAqIDIsIGRlc2NNYXhIZWlnaHQpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBbmNob3JQb2ludCgwLjUsIDEpOyAvLyDpobbpg6jkuK3lv4PplJrngrlcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuYWN0aXZlID0gdHJ1ZTsgLy8g4q2QIOaYvuekuuaPj+i/sFxuICAgICAgICAgICAgY3VycmVudFkgLT0gZGVzY01heEhlaWdodCArIDg7IC8vIOKtkCDmj4/ov7Dpq5jluqYgKyDpl7Tot53vvJrku4405aKe5Yqg5YiwOFxuICAgICAgICAgICAgY2MubG9nKGBbU2hvcFVJXSAgIOaPj+i/sOS9jee9rjogKDAsICR7Y3VycmVudFkudG9GaXhlZCgxKX0pLCDlpKflsI89JHtpdGVtV2lkdGggLSBwYWRkaW5nICogMn14JHtkZXNjTWF4SGVpZ2h0fSwg6Ieq5Yqo5o2i6KGMPeWQr+eUqGApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gNC4g5Lu35qC85L2N572u77yI5o+P6L+w5LiL5pa577yM5bGF5Lit77yM6YeR6Imy56qB5Ye65pi+56S677yJXG4gICAgICAgIGlmIChwcmljZUxhYmVsKSB7XG4gICAgICAgICAgICBjb25zdCBwcmljZUhlaWdodCA9IDM0OyAvLyDirZAg5LuOMzDlop7liqDliLAzNO+8iOmFjeWQiOabtOWkp+eahOWtl+S9kzMy77yJXG4gICAgICAgICAgICBjb25zdCBwcmljZU1hcmdpbiA9IDUwOyAvLyDirZAg5Lu35qC85LiO5o+P6L+w55qE6Ze06Led77ya5LuOMTLlop7liqDliLAxOO+8iOiuqeS7t+agvOabtOmdoOS4i++8iVxuICAgICAgICAgICAgY3VycmVudFkgLT0gcHJpY2VNYXJnaW47XG4gICAgICAgICAgICBwcmljZUxhYmVsLnNldFBvc2l0aW9uKDAsIGN1cnJlbnRZIC0gcHJpY2VIZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIHByaWNlTGFiZWwuc2V0Q29udGVudFNpemUoaXRlbVdpZHRoIC0gcGFkZGluZyAqIDIsIHByaWNlSGVpZ2h0KTtcbiAgICAgICAgICAgIHByaWNlTGFiZWwuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgICAgICAgICAgcHJpY2VMYWJlbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgY3VycmVudFkgLT0gcHJpY2VIZWlnaHQgKyAxMDsgLy8g4q2QIOS7t+agvOmrmOW6piArIOmXtOi3ne+8muS7jjjlop7liqDliLAxMFxuICAgICAgICAgICAgY2MubG9nKGBbU2hvcFVJXSAgIOS7t+agvOS9jee9rjogKDAsICR7KGN1cnJlbnRZIC0gcHJpY2VIZWlnaHQgLyAyKS50b0ZpeGVkKDEpfSksIOWkp+Wwjz0ke2l0ZW1XaWR0aCAtIHBhZGRpbmcgKiAyfXgke3ByaWNlSGVpZ2h0fWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2Mud2FybihgW1Nob3BVSV0gICDmnKrmib7liLBQcmljZUxhYmVs6IqC54K5YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyA1LiDotK3kubDmjInpkq7kvY3nva7vvIjlupXpg6jvvIzlsYXkuK3vvIzok53oibLmjInpkq7moLflvI/vvIlcbiAgICAgICAgaWYgKGJ1eUJ1dHRvbikge1xuICAgICAgICAgICAgY29uc3QgYnRuSGVpZ2h0ID0gMzg7XG4gICAgICAgICAgICBjb25zdCBidG5Cb3R0b21NYXJnaW4gPSAxMDsgLy8g5oyJ6ZKu5bqV6YOo6L656LedXG4gICAgICAgICAgICBjb25zdCBidG5ZID0gLWl0ZW1IZWlnaHQgLyAyICsgcGFkZGluZyArIGJ0bkJvdHRvbU1hcmdpbiArIGJ0bkhlaWdodCAvIDI7IC8vIOS7juW6lemDqOiuoeeul1xuICAgICAgICAgICAgYnV5QnV0dG9uLnNldFBvc2l0aW9uKDAsIGJ0blkpO1xuICAgICAgICAgICAgYnV5QnV0dG9uLnNldENvbnRlbnRTaXplKGl0ZW1XaWR0aCAtIHBhZGRpbmcgKiAyLCBidG5IZWlnaHQpO1xuICAgICAgICAgICAgYnV5QnV0dG9uLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcbiAgICAgICAgICAgIGJ1eUJ1dHRvbi5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyDorr7nva7mjInpkq7og4zmma/popzoibLvvIjok53oibLvvIlcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblNwcml0ZSA9IGJ1eUJ1dHRvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIGlmICghYnV0dG9uU3ByaXRlKSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5rKh5pyJU3ByaXRl57uE5Lu277yM5re75YqgR3JhcGhpY3Pnu4Tku7bnu5jliLbmjInpkq7og4zmma9cbiAgICAgICAgICAgICAgICBsZXQgZ3JhcGhpY3MgPSBidXlCdXR0b24uZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgICAgICAgICBpZiAoIWdyYXBoaWNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzID0gYnV5QnV0dG9uLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGJ0bldpZHRoID0gaXRlbVdpZHRoIC0gcGFkZGluZyAqIDI7XG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gbmV3IGNjLkNvbG9yKDcwLCAxMzAsIDIwMCwgMjU1KTsgLy8g6JOd6ImyXG4gICAgICAgICAgICAgICAgZ3JhcGhpY3Mucm91bmRSZWN0KC1idG5XaWR0aCAvIDIsIC1idG5IZWlnaHQgLyAyLCBidG5XaWR0aCwgYnRuSGVpZ2h0LCA1KTtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5sb2coYFtTaG9wVUldICAg5oyJ6ZKu5L2N572uOiAoMCwgJHtidG5ZLnRvRml4ZWQoMSl9KSwg5aSn5bCPPSR7aXRlbVdpZHRoIC0gcGFkZGluZyAqIDJ9eCR7YnRuSGVpZ2h0fWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2Mud2FybihgW1Nob3BVSV0gICDmnKrmib7liLDotK3kubDmjInpkq7oioLngrnvvIjlsJ3or5Xmn6Xmib5cIui0reS5sFwi5oiWXCJCdXlCdXR0b25cIu+8iWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g4q2QIOmqjOivge+8muehruS/neaJgOacieWGheWuuemDveWcqOWuueWZqOWGhVxuICAgICAgICBjb25zdCBtaW5ZID0gLWl0ZW1IZWlnaHQgLyAyICsgcGFkZGluZztcbiAgICAgICAgY29uc3QgbWF4WSA9IGl0ZW1IZWlnaHQgLyAyIC0gcGFkZGluZztcbiAgICAgICAgaWYgKGN1cnJlbnRZIDwgbWluWSkge1xuICAgICAgICAgICAgY2Mud2FybihgW1Nob3BVSV0g4pqgIOitpuWRiu+8muWGheWuueWPr+iDvei2heWHuuWuueWZqOW6lemDqOi+ueeVjO+8geW9k+WJjVk9JHtjdXJyZW50WS50b0ZpeGVkKDEpfSwg5pyA5bCPWT0ke21pblkudG9GaXhlZCgxKX1gKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDotK3kubDllYblk4FcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2hvcEl0ZW0gLSDllYblk4HmlbDmja5cbiAgICAgKi9cbiAgICBhc3luYyBvbkJ1eUl0ZW0oc2hvcEl0ZW0pIHtcbiAgICAgICAgY2MubG9nKGBbU2hvcFVJXSDlsJ3or5XotK3kubDllYblk4E6ICR7c2hvcEl0ZW0ubmFtZX0sIOS7t+agvDogJHtzaG9wSXRlbS5wcmljZX1gKTtcblxuICAgICAgICAvLyDmo4Dmn6Xph5HluIHmmK/lkKbotrPlpJ/vvIjmnKzlnLDmo4Dmn6XvvIzpgb/lhY3kuI3lv4XopoHnmoTor7fmsYLvvIlcbiAgICAgICAgY29uc3QgY3VycmVudENvaW5zID0gYXdhaXQgQ29pbk1hbmFnZXIuZ2V0Q29pbnMoKTtcbiAgICAgICAgaWYgKGN1cnJlbnRDb2lucyA8IHNob3BJdGVtLnByaWNlKSB7XG4gICAgICAgICAgICBjYy53YXJuKGBbU2hvcFVJXSDph5HluIHkuI3otrM6IOW9k+WJjSAke2N1cnJlbnRDb2luc30sIOmcgOimgSAke3Nob3BJdGVtLnByaWNlfWApO1xuICAgICAgICAgICAgLy8gVE9ETzog5pi+56S65o+Q56S6VUlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBTZXJ2ZXJDb25maWcgPSByZXF1aXJlKFwiU2VydmVyQ29uZmlnXCIpO1xuXG4gICAgICAgICAgICAvLyDlpoLmnpzkvb/nlKjmnI3liqHlmajmqKHlvI/vvIzkvb/nlKjmnI3liqHlmahBUEnotK3kubDvvIjmnI3liqHlmajkvJrlkIzml7blpITnkIbph5HluIHmiaPpmaTlkozpgZPlhbfmt7vliqDvvIlcbiAgICAgICAgICAgIGlmIChTZXJ2ZXJDb25maWcuZ2V0U3RvcmFnZU1vZGUoKSA9PT0gJ3NlcnZlcicgfHwgU2VydmVyQ29uZmlnLmdldFN0b3JhZ2VNb2RlKCkgPT09ICdoeWJyaWQnKSB7XG4gICAgICAgICAgICAgICAgLy8g4q2QIOS/ruWkje+8mmdldEJhc2VVUkwoKeW3sue7j+WMheWQqy9hcGnvvIzmiYDku6XkuI3pnIDopoHlho3liqAvYXBpXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtTZXJ2ZXJDb25maWcuZ2V0QmFzZVVSTCgpfS9zaG9wL3B1cmNoYXNlYCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLlNlcnZlckNvbmZpZy5nZXRBdXRoSGVhZGVycygpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3BJdGVtSWQ6IHNob3BJdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUlkOiBzaG9wSXRlbS5pdGVtSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogc2hvcEl0ZW0uY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogc2hvcEl0ZW0ucHJpY2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpLmNhdGNoKCgpID0+ICh7fSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JEYXRhLmVycm9yID09PSAnaW5zdWZmaWNpZW50X2NvaW5zJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2Mud2FybihgW1Nob3BVSV0g6YeR5biB5LiN6LazOiDlvZPliY0gJHtlcnJvckRhdGEuY3VycmVudENvaW5zfSwg6ZyA6KaBICR7c2hvcEl0ZW0ucHJpY2V9YCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYOi0reS5sOWksei0pTogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbU2hvcFVJXSDinJMg6LSt5Lmw5oiQ5YqfOiAke3Nob3BJdGVtLm5hbWV9IHgke3Nob3BJdGVtLmNvdW50fSwg5Ymp5L2Z6YeR5biBOiAke2RhdGEuY29pbnN9YCk7XG5cbiAgICAgICAgICAgICAgICAvLyDmm7TmlrDph5HluIHmmL7npLpcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvaW5EaXNwbGF5KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiDmmL7npLrotK3kubDmiJDlip/mj5DnpLpVSVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5pys5Zyw5qih5byP77ya5YiG5Yir5aSE55CG6YeR5biB5ZKM6YGT5YW3XG4gICAgICAgICAgICAvLyDmiaPpmaTph5HluIFcbiAgICAgICAgICAgIGNvbnN0IHNwZW5kU3VjY2VzcyA9IGF3YWl0IENvaW5NYW5hZ2VyLnNwZW5kQ29pbnMoc2hvcEl0ZW0ucHJpY2UpO1xuICAgICAgICAgICAgaWYgKCFzcGVuZFN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihgW1Nob3BVSV0g5omj6Zmk6YeR5biB5aSx6LSlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDmt7vliqDpgZPlhbfliLDog4zljIVcbiAgICAgICAgICAgIGNvbnN0IGFkZFN1Y2Nlc3MgPSBhd2FpdCBJdGVtRGF0YU1hbmFnZXIuYWRkSXRlbShzaG9wSXRlbS5pdGVtSWQsIHNob3BJdGVtLmNvdW50KTtcbiAgICAgICAgICAgIGlmICghYWRkU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbU2hvcFVJXSDmt7vliqDpgZPlhbflpLHotKVgKTtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmt7vliqDpgZPlhbflpLHotKXvvIzpnIDopoHlm57pgIDph5HluIHvvIjov5nph4znroDljJblpITnkIbvvIzlrp7pmYXlupTor6XnlKjkuovliqHvvIlcbiAgICAgICAgICAgICAgICBhd2FpdCBDb2luTWFuYWdlci5hZGRDb2lucyhzaG9wSXRlbS5wcmljZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYy5sb2coYFtTaG9wVUldIOKckyDotK3kubDmiJDlip86ICR7c2hvcEl0ZW0ubmFtZX0geCR7c2hvcEl0ZW0uY291bnR9YCk7XG5cbiAgICAgICAgICAgIC8vIOabtOaWsOmHkeW4geaYvuekulxuICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVDb2luRGlzcGxheSgpO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiDmmL7npLrotK3kubDmiJDlip/mj5DnpLpVSVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihgW1Nob3BVSV0g6LSt5Lmw5ZWG5ZOB5aSx6LSlOmAsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDliLfmlrDvvIjph43mlrDliqDovb3ph5HluIHlkozllYblk4HliJfooajvvIlcbiAgICAgKi9cbiAgICBhc3luYyByZWZyZXNoKCkge1xuICAgICAgICBjYy5sb2coXCJbU2hvcFVJXSDliLfmlrDllYbln47mlbDmja5cIik7XG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ29pbkRpc3BsYXkoKTtcbiAgICAgICAgdGhpcy5sb2FkU2hvcEl0ZW1zKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOi/lOWbnuaMiemSrueCueWHu+S6i+S7tlxuICAgICAqL1xuICAgIG9uQmFja0NsaWNrKCkge1xuICAgICAgICBjYy5sb2coXCJbU2hvcFVJXSDov5Tlm57mjInpkq7ngrnlh7tcIik7XG4gICAgICAgIC8vIOi/lOWbnuS4u+iPnOWNleWcuuaZr1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJNYWluTWVudVwiKTtcbiAgICB9XG59KTtcbiJdfQ==