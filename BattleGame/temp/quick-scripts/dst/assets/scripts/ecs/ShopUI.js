
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
    },
    // ⭐ 翻页相关配置
    itemsPerPage: {
      "default": 8,
      tooltip: "每页显示的商品数量"
    },
    prevPageButton: {
      "default": null,
      type: cc.Node,
      tooltip: "上一页按钮节点"
    },
    nextPageButton: {
      "default": null,
      type: cc.Node,
      tooltip: "下一页按钮节点"
    },
    pageLabel: {
      "default": null,
      type: cc.Label,
      tooltip: "页码显示标签（可选，显示当前页/总页数）"
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

    // 绑定翻页按钮事件
    if (this.prevPageButton) {
      this.prevPageButton.on(cc.Node.EventType.TOUCH_END, this.goToPrevPage, this);
    }
    if (this.nextPageButton) {
      this.nextPageButton.on(cc.Node.EventType.TOUCH_END, this.goToNextPage, this);
    }

    // 初始化当前页码
    this.currentPage = 0;
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
   * 加载商品列表（支持翻页）
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

    // 获取所有商品
    var allShopItems = ShopConfig.getAllItems();
    var totalItems = allShopItems.length;
    var itemsPerPage = this.itemsPerPage || 8;
    var totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

    // 确保当前页码在有效范围内
    if (this.currentPage < 0) {
      this.currentPage = 0;
    } else if (this.currentPage >= totalPages) {
      this.currentPage = totalPages - 1;
    }

    // 计算当前页的商品范围
    var startIndex = this.currentPage * itemsPerPage;
    var endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    var currentPageItems = allShopItems.slice(startIndex, endIndex);

    // 清空现有商品
    this.itemListContainer.removeAllChildren();

    // 设置容器布局（网格布局，基于当前页商品数）
    this._setupContainerLayout(currentPageItems.length);

    // 为当前页的每个商品创建UI项
    currentPageItems.forEach(function (shopItem, index) {
      var itemNode = cc.instantiate(_this3.shopItemPrefab);
      itemNode.name = "ShopItem_" + shopItem.id;

      // ⭐ 关键：先设置商品项大小和位置（在设置内容之前）
      // 注意：这里的index是当前页内的索引，不是全局索引
      _this3._layoutShopItem(itemNode, index, currentPageItems.length, shopItem);

      // 设置商品数据（包括内部布局）
      _this3.setupShopItem(itemNode, shopItem);

      // 添加到容器
      _this3.itemListContainer.addChild(itemNode);
      cc.log("[ShopUI] \u521B\u5EFA\u5546\u54C1\u9879 " + (startIndex + index) + ": " + shopItem.name + ", \u4F4D\u7F6E: (" + itemNode.x + ", " + itemNode.y + "), \u5927\u5C0F: " + itemNode.width + " x " + itemNode.height);
    });

    // 更新翻页按钮状态
    this.updatePageButtons();

    // 更新页码显示
    this.updatePageLabel();
    cc.log("[ShopUI] \u5DF2\u52A0\u8F7D\u7B2C " + (this.currentPage + 1) + "/" + totalPages + " \u9875\uFF0C\u663E\u793A " + currentPageItems.length + " \u4E2A\u5546\u54C1\uFF08\u5171 " + totalItems + " \u4E2A\uFF09");
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

    // 设置图标：优先用商品自身 icon，否则按 itemId 从 ItemConfig 取（与道具栏一致）
    if (iconNode) {
      var iconSpriteFrame = shopItem.icon;
      if (!iconSpriteFrame && shopItem.itemId) {
        var ItemConfig = require("ItemConfig");
        var itemConfig = ItemConfig.getItemById(shopItem.itemId);
        if (itemConfig && itemConfig.icon) {
          iconSpriteFrame = itemConfig.icon;
        }
      }
      if (iconSpriteFrame) {
        var sprite = iconNode.getComponent(cc.Sprite);
        if (sprite) {
          sprite.spriteFrame = iconSpriteFrame;
        }
      }
      iconNode.setContentSize(80, 80);
      iconNode.setAnchorPoint(0.5, 0.5);
    }

    // 设置购买按钮（保持原始背景，黑色文字）
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
          labelComp.node.color = cc.Color.BLACK; // 黑色文字
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
            _labelComp.node.color = cc.Color.BLACK; // 黑色文字
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

    // 5. 购买按钮位置（底部，居中，使用原始背景）
    if (buyButton) {
      var btnHeight = 38;
      var btnBottomMargin = 10; // 按钮底部边距
      var btnY = -itemHeight / 2 + padding + btnBottomMargin + btnHeight / 2; // 从底部计算
      buyButton.setPosition(0, btnY);
      buyButton.setContentSize(itemWidth - padding * 2, btnHeight);
      buyButton.setAnchorPoint(0.5, 0.5);
      buyButton.active = true;

      // 不绘制按钮背景，使用Prefab中设置的原始背景
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
            _this6.currentPage = 0; // 重置到第一页
            _this6.loadShopItems();
          case 5:
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
  },
  /**
   * 翻页：跳转到指定页码
   * @param {number} page - 页码（从0开始）
   */
  goToPage: function goToPage(page) {
    var allShopItems = ShopConfig.getAllItems();
    var totalItems = allShopItems.length;
    var itemsPerPage = this.itemsPerPage || 8;
    var totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
    if (page < 0 || page >= totalPages) {
      cc.warn("[ShopUI] \u65E0\u6548\u7684\u9875\u7801: " + page + "\uFF0C\u603B\u9875\u6570: " + totalPages);
      return;
    }
    this.currentPage = page;
    this.loadShopItems();
  },
  /**
   * 翻页：上一页
   */
  goToPrevPage: function goToPrevPage() {
    if (this.currentPage > 0) {
      this.goToPage(this.currentPage - 1);
    }
  },
  /**
   * 翻页：下一页
   */
  goToNextPage: function goToNextPage() {
    var allShopItems = ShopConfig.getAllItems();
    var totalItems = allShopItems.length;
    var itemsPerPage = this.itemsPerPage || 8;
    var totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
    if (this.currentPage < totalPages - 1) {
      this.goToPage(this.currentPage + 1);
    }
  },
  /**
   * 更新翻页按钮状态（禁用/启用）
   */
  updatePageButtons: function updatePageButtons() {
    var allShopItems = ShopConfig.getAllItems();
    var totalItems = allShopItems.length;
    var itemsPerPage = this.itemsPerPage || 8;
    var totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

    // 更新上一页按钮
    if (this.prevPageButton) {
      var prevButton = this.prevPageButton.getComponent(cc.Button);
      if (prevButton) {
        prevButton.interactable = this.currentPage > 0;
      }
      // 更新按钮透明度（禁用时半透明）
      this.prevPageButton.opacity = this.currentPage > 0 ? 255 : 128;
    }

    // 更新下一页按钮
    if (this.nextPageButton) {
      var nextButton = this.nextPageButton.getComponent(cc.Button);
      if (nextButton) {
        nextButton.interactable = this.currentPage < totalPages - 1;
      }
      // 更新按钮透明度（禁用时半透明）
      this.nextPageButton.opacity = this.currentPage < totalPages - 1 ? 255 : 128;
    }
  },
  /**
   * 更新页码显示标签
   */
  updatePageLabel: function updatePageLabel() {
    if (!this.pageLabel) {
      return;
    }
    var allShopItems = ShopConfig.getAllItems();
    var totalItems = allShopItems.length;
    var itemsPerPage = this.itemsPerPage || 8;
    var totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
    this.pageLabel.string = this.currentPage + 1 + " / " + totalPages;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxTaG9wVUkuanMiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJTaG9wQ29uZmlnIiwicmVxdWlyZSIsIkNvaW5NYW5hZ2VyIiwiSXRlbURhdGFNYW5hZ2VyIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpdGVtTGlzdENvbnRhaW5lciIsIk5vZGUiLCJ0b29sdGlwIiwic2hvcEl0ZW1QcmVmYWIiLCJQcmVmYWIiLCJjb2luTGFiZWwiLCJMYWJlbCIsImJhY2tCdXR0b24iLCJyZWZyZXNoQnV0dG9uIiwic2hvcEl0ZW1XaWR0aCIsInNob3BJdGVtSGVpZ2h0Iiwic2hvcEl0ZW1TcGFjaW5nIiwic2hvcENvbHVtbnMiLCJzaG9wUGFkZGluZyIsImJhY2tncm91bmRPcGFjaXR5IiwiaXRlbXNQZXJQYWdlIiwicHJldlBhZ2VCdXR0b24iLCJuZXh0UGFnZUJ1dHRvbiIsInBhZ2VMYWJlbCIsIm9uTG9hZCIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwib25CYWNrQ2xpY2siLCJyZWZyZXNoIiwiZ29Ub1ByZXZQYWdlIiwiZ29Ub05leHRQYWdlIiwiY3VycmVudFBhZ2UiLCJpbml0IiwiX3RoaXMiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImxvZyIsInVwZGF0ZUNvaW5EaXNwbGF5IiwibG9hZFNob3BJdGVtcyIsIl90aGlzMiIsIl9jYWxsZWUyIiwiY29pbnMiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJnZXRDb2lucyIsInN0cmluZyIsInQwIiwiX3RoaXMzIiwiYWxsU2hvcEl0ZW1zIiwiZ2V0QWxsSXRlbXMiLCJ0b3RhbEl0ZW1zIiwidG90YWxQYWdlcyIsIk1hdGgiLCJtYXgiLCJjZWlsIiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwibWluIiwiY3VycmVudFBhZ2VJdGVtcyIsInJlbW92ZUFsbENoaWxkcmVuIiwiX3NldHVwQ29udGFpbmVyTGF5b3V0Iiwic2hvcEl0ZW0iLCJpbmRleCIsIml0ZW1Ob2RlIiwiaW5zdGFudGlhdGUiLCJpZCIsIl9sYXlvdXRTaG9wSXRlbSIsInNldHVwU2hvcEl0ZW0iLCJhZGRDaGlsZCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJ1cGRhdGVQYWdlQnV0dG9ucyIsInVwZGF0ZVBhZ2VMYWJlbCIsIml0ZW1Db3VudCIsInJvd3MiLCJjb250YWluZXJXaWR0aCIsImNvbnRhaW5lckhlaWdodCIsInNldENvbnRlbnRTaXplIiwic2V0QW5jaG9yUG9pbnQiLCJzZXRQb3NpdGlvbiIsIl9zZXR1cENvbnRhaW5lckJhY2tncm91bmQiLCJiZ05vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImdyYXBoaWNzIiwiYWRkQ29tcG9uZW50IiwiR3JhcGhpY3MiLCJyYWRpdXMiLCJvcGFjaXR5IiwiYmFja2dyb3VuZENvbG9yIiwiQ29sb3IiLCJmaWxsQ29sb3IiLCJyb3VuZFJlY3QiLCJmaWxsIiwiekluZGV4IiwiYSIsInJvdyIsImZsb29yIiwiY29sIiwidG90YWxSb3dzIiwidG90YWxXaWR0aCIsInRvdGFsSGVpZ2h0Iiwic3RhcnRYIiwic3RhcnRZIiwiX3NldHVwSXRlbUNhcmRCYWNrZ3JvdW5kIiwiX3NldHVwSXRlbUNhcmRNYXNrIiwiYm9yZGVyQ29sb3IiLCJjYXRlZ29yeSIsInN0eWxlIiwiZ2V0Q2F0ZWdvcnlTdHlsZSIsImJvcmRlcldpZHRoIiwic3Ryb2tlQ29sb3IiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJtYXNrIiwiZ2V0Q29tcG9uZW50IiwiTWFzayIsIlR5cGUiLCJSRUNUIiwic2VnZW1lbnRzIiwicGFkZGluZyIsIl90aGlzNCIsIm5hbWVMYWJlbCIsInByaWNlTGFiZWwiLCJkZXNjcmlwdGlvbkxhYmVsIiwiaWNvbk5vZGUiLCJidXlCdXR0b24iLCJidXlCdXR0b25OYW1lIiwiX2xheW91dFNob3BJdGVtQ29udGVudCIsIm5hbWVDb2xvciIsInByaWNlQ29sb3IiLCJkZXNjQ29sb3IiLCJsYWJlbCIsImZvbnRTaXplIiwibm9kZSIsImNvbG9yIiwiaG9yaXpvbnRhbEFsaWduIiwiSG9yaXpvbnRhbEFsaWduIiwiQ0VOVEVSIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsIkxFRlQiLCJ2ZXJ0aWNhbEFsaWduIiwiVmVydGljYWxBbGlnbiIsIlRPUCIsImVuYWJsZVdyYXBUZXh0Iiwib3ZlcmZsb3ciLCJPdmVyZmxvdyIsIlJFU0laRV9IRUlHSFQiLCJsaW5lSGVpZ2h0IiwiZGVzY1dpZHRoIiwibWF4RGVzY0hlaWdodCIsImljb25TcHJpdGVGcmFtZSIsImljb24iLCJpdGVtSWQiLCJJdGVtQ29uZmlnIiwiaXRlbUNvbmZpZyIsImdldEl0ZW1CeUlkIiwic3ByaXRlIiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJidXR0b24iLCJCdXR0b24iLCJsYWJlbENvbXAiLCJCTEFDSyIsIm9mZiIsIm9uQnV5SXRlbSIsIl9zaG9wSXRlbURhdGEiLCJpdGVtSGVpZ2h0IiwiaXRlbVdpZHRoIiwiY3VycmVudFkiLCJpY29uU2l6ZSIsImljb25Ub3BNYXJnaW4iLCJhY3RpdmUiLCJ0b0ZpeGVkIiwid2FybiIsIm5hbWVIZWlnaHQiLCJuYW1lTWFyZ2luIiwiZGVzY01hcmdpbiIsImRlc2NNYXhIZWlnaHQiLCJwcmljZUhlaWdodCIsInByaWNlTWFyZ2luIiwiYnRuSGVpZ2h0IiwiYnRuQm90dG9tTWFyZ2luIiwiYnRuWSIsIm1pblkiLCJtYXhZIiwiX3RoaXM1IiwiX2NhbGxlZTMiLCJjdXJyZW50Q29pbnMiLCJTZXJ2ZXJDb25maWciLCJyZXNwb25zZSIsImVycm9yRGF0YSIsImRhdGEiLCJzcGVuZFN1Y2Nlc3MiLCJhZGRTdWNjZXNzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiZ2V0U3RvcmFnZU1vZGUiLCJmZXRjaCIsImdldEJhc2VVUkwiLCJoZWFkZXJzIiwiX2V4dGVuZHMiLCJnZXRBdXRoSGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2hvcEl0ZW1JZCIsImNvdW50Iiwib2siLCJqc29uIiwic3RhdHVzIiwic3BlbmRDb2lucyIsImFkZEl0ZW0iLCJhZGRDb2lucyIsIl90aGlzNiIsIl9jYWxsZWU0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJnb1RvUGFnZSIsInBhZ2UiLCJw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Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDllYbln45VSee7hOS7tlxuICog6LSf6LSj5bGV56S65ZWG5ZOB5YiX6KGo44CB5aSE55CG6LSt5Lmw44CB5pi+56S66YeR5biB562JXG4gKi9cbmNvbnN0IFNob3BDb25maWcgPSByZXF1aXJlKFwiU2hvcENvbmZpZ1wiKTtcbmNvbnN0IENvaW5NYW5hZ2VyID0gcmVxdWlyZShcIkNvaW5NYW5hZ2VyXCIpO1xuY29uc3QgSXRlbURhdGFNYW5hZ2VyID0gcmVxdWlyZShcIkl0ZW1EYXRhTWFuYWdlclwiKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8g5ZWG5ZOB5YiX6KGo5a655ZmoXG4gICAgICAgIGl0ZW1MaXN0Q29udGFpbmVyOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5ZWG5ZOB5YiX6KGo5a655Zmo6IqC54K577yI55So5LqO5pS+572u5ZWG5ZOB6aG577yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDllYblk4HpoblQcmVmYWJcbiAgICAgICAgc2hvcEl0ZW1QcmVmYWI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWVhuWTgemhuVByZWZhYu+8iOWMheWQq+Wbvuagh+OAgeWQjeensOOAgeS7t+agvOOAgei0reS5sOaMiemSruetie+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g6YeR5biB5pi+56S65qCH562+XG4gICAgICAgIGNvaW5MYWJlbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLph5HluIHmlbDph4/mmL7npLrmoIfnrb5cIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOi/lOWbnuaMiemSrlxuICAgICAgICBiYWNrQnV0dG9uOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6L+U5Zue5oyJ6ZKu6IqC54K5XCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDliLfmlrDmjInpkq7vvIjlj6/pgInvvIlcbiAgICAgICAgcmVmcmVzaEJ1dHRvbjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWIt+aWsOaMiemSruiKgueCue+8iOWIt+aWsOmHkeW4geWSjOWVhuWTgeWIl+ihqO+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5ZWG5ZOB6aG55biD5bGA6YWN572u77yI5Y+C6ICD5LiT5Lia5ZWG5Z+O5biD5bGA77yJXG4gICAgICAgIHNob3BJdGVtV2lkdGg6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDIyMCwgLy8g4q2QIOS7jjE4MOWinuWKoOWIsDIyMO+8jOiuqeWNoeeJh+abtOWuvVxuICAgICAgICAgICAgdG9vbHRpcDogXCLllYblk4Hpobnlrr3luqbvvIjljaHniYflrr3luqbvvIlcIlxuICAgICAgICB9LFxuICAgICAgICBzaG9wSXRlbUhlaWdodDoge1xuICAgICAgICAgICAgZGVmYXVsdDogMjQwLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLllYblk4Hpobnpq5jluqbvvIjljaHniYfpq5jluqbvvIlcIlxuICAgICAgICB9LFxuICAgICAgICBzaG9wSXRlbVNwYWNpbmc6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDE1LFxuICAgICAgICAgICAgdG9vbHRpcDogXCLllYblk4HpobnkuYvpl7TnmoTpl7Tot51cIlxuICAgICAgICB9LFxuICAgICAgICBzaG9wQ29sdW1uczoge1xuICAgICAgICAgICAgZGVmYXVsdDogNCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5ZWG5ZOB5YiX6KGo5YiX5pWw77yI5q+P6KGM5pi+56S655qE5ZWG5ZOB5pWw6YeP77yM5Y+C6ICD5Zu+5pivNOWIl++8iVwiXG4gICAgICAgIH0sXG4gICAgICAgIHNob3BQYWRkaW5nOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAyMCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5ZWG5ZOB5YiX6KGo5a655Zmo55qE5YaF6L656LedXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDirZAg6IOM5pmv6YCP5piO5bqm6YWN572uXG4gICAgICAgIGJhY2tncm91bmRPcGFjaXR5OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAxODAsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWVhuWfjuiDjOaZr+mdouadv+eahOmAj+aYjuW6pu+8iDAtMjU177yMMTgwPee6pjcwJeS4jemAj+aYju+8jDEyOD01MCXpgI/mmI7vvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOKtkCDnv7vpobXnm7jlhbPphY3nva5cbiAgICAgICAgaXRlbXNQZXJQYWdlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiA4LFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmr4/pobXmmL7npLrnmoTllYblk4HmlbDph49cIlxuICAgICAgICB9LFxuICAgICAgICBwcmV2UGFnZUJ1dHRvbjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuS4iuS4gOmhteaMiemSruiKgueCuVwiXG4gICAgICAgIH0sXG4gICAgICAgIG5leHRQYWdlQnV0dG9uOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5LiL5LiA6aG15oyJ6ZKu6IqC54K5XCJcbiAgICAgICAgfSxcbiAgICAgICAgcGFnZUxhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgICAgICB0b29sdGlwOiBcIumhteeggeaYvuekuuagh+etvu+8iOWPr+mAie+8jOaYvuekuuW9k+WJjemhtS/mgLvpobXmlbDvvIlcIlxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8g57uR5a6a6L+U5Zue5oyJ6ZKu5LqL5Lu2XG4gICAgICAgIGlmICh0aGlzLmJhY2tCdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuYmFja0J1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25CYWNrQ2xpY2ssIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g57uR5a6a5Yi35paw5oyJ6ZKu5LqL5Lu2XG4gICAgICAgIGlmICh0aGlzLnJlZnJlc2hCdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMucmVmcmVzaCwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDnu5Hlrprnv7vpobXmjInpkq7kuovku7ZcbiAgICAgICAgaWYgKHRoaXMucHJldlBhZ2VCdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMucHJldlBhZ2VCdXR0b24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmdvVG9QcmV2UGFnZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubmV4dFBhZ2VCdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMubmV4dFBhZ2VCdXR0b24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmdvVG9OZXh0UGFnZSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDliJ3lp4vljJblvZPliY3pobXnoIFcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluWVhuWfjlVJXG4gICAgICovXG4gICAgYXN5bmMgaW5pdCgpIHtcbiAgICAgICAgY2MubG9nKFwiW1Nob3BVSV0g5Yid5aeL5YyW5ZWG5Z+OVUlcIik7XG5cbiAgICAgICAgLy8g5Yi35paw6YeR5biB5pi+56S6XG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ29pbkRpc3BsYXkoKTtcblxuICAgICAgICAvLyDliqDovb3llYblk4HliJfooahcbiAgICAgICAgdGhpcy5sb2FkU2hvcEl0ZW1zKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOabtOaWsOmHkeW4geaYvuekulxuICAgICAqL1xuICAgIGFzeW5jIHVwZGF0ZUNvaW5EaXNwbGF5KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgY29pbnMgPSBhd2FpdCBDb2luTWFuYWdlci5nZXRDb2lucygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29pbkxhYmVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2luTGFiZWwuc3RyaW5nID0gYOmHkeW4gTogJHtjb2luc31gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MubG9nKGBbU2hvcFVJXSDph5HluIHmm7TmlrA6ICR7Y29pbnN9YCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihgW1Nob3BVSV0g5pu05paw6YeR5biB5pi+56S65aSx6LSlOmAsIGVycm9yKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvaW5MYWJlbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29pbkxhYmVsLnN0cmluZyA9IFwi6YeR5biBOiAtLVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWKoOi9veWVhuWTgeWIl+ihqO+8iOaUr+aMgee/u+mhte+8iVxuICAgICAqL1xuICAgIGxvYWRTaG9wSXRlbXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5pdGVtTGlzdENvbnRhaW5lcikge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJbU2hvcFVJXSDllYblk4HliJfooajlrrnlmajmnKrorr7nva5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuc2hvcEl0ZW1QcmVmYWIpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwiW1Nob3BVSV0g5ZWG5ZOB6aG5UHJlZmFi5pyq6K6+572uXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6I635Y+W5omA5pyJ5ZWG5ZOBXG4gICAgICAgIGNvbnN0IGFsbFNob3BJdGVtcyA9IFNob3BDb25maWcuZ2V0QWxsSXRlbXMoKTtcbiAgICAgICAgY29uc3QgdG90YWxJdGVtcyA9IGFsbFNob3BJdGVtcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGl0ZW1zUGVyUGFnZSA9IHRoaXMuaXRlbXNQZXJQYWdlIHx8IDg7XG4gICAgICAgIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLm1heCgxLCBNYXRoLmNlaWwodG90YWxJdGVtcyAvIGl0ZW1zUGVyUGFnZSkpO1xuXG4gICAgICAgIC8vIOehruS/neW9k+WJjemhteeggeWcqOacieaViOiMg+WbtOWGhVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFBhZ2UgPj0gdG90YWxQYWdlcykge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHRvdGFsUGFnZXMgLSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6K6h566X5b2T5YmN6aG155qE5ZWG5ZOB6IyD5Zu0XG4gICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSB0aGlzLmN1cnJlbnRQYWdlICogaXRlbXNQZXJQYWdlO1xuICAgICAgICBjb25zdCBlbmRJbmRleCA9IE1hdGgubWluKHN0YXJ0SW5kZXggKyBpdGVtc1BlclBhZ2UsIHRvdGFsSXRlbXMpO1xuICAgICAgICBjb25zdCBjdXJyZW50UGFnZUl0ZW1zID0gYWxsU2hvcEl0ZW1zLnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcblxuICAgICAgICAvLyDmuIXnqbrnjrDmnInllYblk4FcbiAgICAgICAgdGhpcy5pdGVtTGlzdENvbnRhaW5lci5yZW1vdmVBbGxDaGlsZHJlbigpO1xuXG4gICAgICAgIC8vIOiuvue9ruWuueWZqOW4g+WxgO+8iOe9keagvOW4g+WxgO+8jOWfuuS6juW9k+WJjemhteWVhuWTgeaVsO+8iVxuICAgICAgICB0aGlzLl9zZXR1cENvbnRhaW5lckxheW91dChjdXJyZW50UGFnZUl0ZW1zLmxlbmd0aCk7XG5cbiAgICAgICAgLy8g5Li65b2T5YmN6aG155qE5q+P5Liq5ZWG5ZOB5Yib5bu6VUnpoblcbiAgICAgICAgY3VycmVudFBhZ2VJdGVtcy5mb3JFYWNoKChzaG9wSXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5zaG9wSXRlbVByZWZhYik7XG4gICAgICAgICAgICBpdGVtTm9kZS5uYW1lID0gYFNob3BJdGVtXyR7c2hvcEl0ZW0uaWR9YDtcblxuICAgICAgICAgICAgLy8g4q2QIOWFs+mUru+8muWFiOiuvue9ruWVhuWTgemhueWkp+Wwj+WSjOS9jee9ru+8iOWcqOiuvue9ruWGheWuueS5i+WJje+8iVxuICAgICAgICAgICAgLy8g5rOo5oSP77ya6L+Z6YeM55qEaW5kZXjmmK/lvZPliY3pobXlhoXnmoTntKLlvJXvvIzkuI3mmK/lhajlsYDntKLlvJVcbiAgICAgICAgICAgIHRoaXMuX2xheW91dFNob3BJdGVtKGl0ZW1Ob2RlLCBpbmRleCwgY3VycmVudFBhZ2VJdGVtcy5sZW5ndGgsIHNob3BJdGVtKTtcblxuICAgICAgICAgICAgLy8g6K6+572u5ZWG5ZOB5pWw5o2u77yI5YyF5ous5YaF6YOo5biD5bGA77yJXG4gICAgICAgICAgICB0aGlzLnNldHVwU2hvcEl0ZW0oaXRlbU5vZGUsIHNob3BJdGVtKTtcblxuICAgICAgICAgICAgLy8g5re75Yqg5Yiw5a655ZmoXG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0Q29udGFpbmVyLmFkZENoaWxkKGl0ZW1Ob2RlKTtcblxuICAgICAgICAgICAgY2MubG9nKGBbU2hvcFVJXSDliJvlu7rllYblk4HpobkgJHtzdGFydEluZGV4ICsgaW5kZXh9OiAke3Nob3BJdGVtLm5hbWV9LCDkvY3nva46ICgke2l0ZW1Ob2RlLnh9LCAke2l0ZW1Ob2RlLnl9KSwg5aSn5bCPOiAke2l0ZW1Ob2RlLndpZHRofSB4ICR7aXRlbU5vZGUuaGVpZ2h0fWApO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDmm7TmlrDnv7vpobXmjInpkq7nirbmgIFcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlQnV0dG9ucygpO1xuXG4gICAgICAgIC8vIOabtOaWsOmhteeggeaYvuekulxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VMYWJlbCgpO1xuXG4gICAgICAgIGNjLmxvZyhgW1Nob3BVSV0g5bey5Yqg6L2956ysICR7dGhpcy5jdXJyZW50UGFnZSArIDF9LyR7dG90YWxQYWdlc30g6aG177yM5pi+56S6ICR7Y3VycmVudFBhZ2VJdGVtcy5sZW5ndGh9IOS4quWVhuWTge+8iOWFsSAke3RvdGFsSXRlbXN9IOS4qu+8iWApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDorr7nva7lrrnlmajluIPlsYDvvIjlj4LogIPkuJPkuJrllYbln47luIPlsYDvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpdGVtQ291bnQgLSDllYblk4HmlbDph49cbiAgICAgKi9cbiAgICBfc2V0dXBDb250YWluZXJMYXlvdXQoaXRlbUNvdW50KSB7XG4gICAgICAgIGlmICghdGhpcy5pdGVtTGlzdENvbnRhaW5lcikge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJbU2hvcFVJXSDllYblk4HliJfooajlrrnlmajmnKrorr7nva7vvIzml6Dms5XluIPlsYBcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDorqHnrpfpnIDopoHnmoTooYzmlbBcbiAgICAgICAgY29uc3Qgcm93cyA9IE1hdGguY2VpbChpdGVtQ291bnQgLyB0aGlzLnNob3BDb2x1bW5zKTtcblxuICAgICAgICAvLyDorqHnrpflrrnlmajlpKflsI/vvIjljIXlkKvlhoXovrnot53vvIlcbiAgICAgICAgY29uc3QgY29udGFpbmVyV2lkdGggPSB0aGlzLnNob3BDb2x1bW5zICogKHRoaXMuc2hvcEl0ZW1XaWR0aCArIHRoaXMuc2hvcEl0ZW1TcGFjaW5nKSAtIHRoaXMuc2hvcEl0ZW1TcGFjaW5nICsgdGhpcy5zaG9wUGFkZGluZyAqIDI7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9IHJvd3MgKiAodGhpcy5zaG9wSXRlbUhlaWdodCArIHRoaXMuc2hvcEl0ZW1TcGFjaW5nKSAtIHRoaXMuc2hvcEl0ZW1TcGFjaW5nICsgdGhpcy5zaG9wUGFkZGluZyAqIDI7XG5cbiAgICAgICAgLy8g6K6+572u5a655Zmo5aSn5bCP5ZKM6ZSa54K5XG4gICAgICAgIHRoaXMuaXRlbUxpc3RDb250YWluZXIuc2V0Q29udGVudFNpemUoY29udGFpbmVyV2lkdGgsIGNvbnRhaW5lckhlaWdodCk7XG4gICAgICAgIHRoaXMuaXRlbUxpc3RDb250YWluZXIuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgICAgICB0aGlzLml0ZW1MaXN0Q29udGFpbmVyLnNldFBvc2l0aW9uKDAsIDApOyAvLyDnoa7kv53lrrnlmajlnKjkuK3lv4NcblxuICAgICAgICAvLyDorr7nva7lrrnlmajog4zmma/vvIjlj6/pgInvvIzlpoLmnpzpnIDopoHnmb3oibLog4zmma/ljaHniYfmlYjmnpzvvIlcbiAgICAgICAgdGhpcy5fc2V0dXBDb250YWluZXJCYWNrZ3JvdW5kKCk7XG5cbiAgICAgICAgY2MubG9nKGBbU2hvcFVJXSDinJMg5a655Zmo5biD5bGA5a6M5oiQOiAke3RoaXMuc2hvcENvbHVtbnN95YiXIHggJHtyb3dzfeihjCwg5aSn5bCPOiAke2NvbnRhaW5lcldpZHRofSB4ICR7Y29udGFpbmVySGVpZ2h0fSwg5ZWG5ZOB5pWwOiAke2l0ZW1Db3VudH1gKTtcbiAgICAgICAgY2MubG9nKGBbU2hvcFVJXSDllYblk4HpobnphY3nva46IOWuveW6pj0ke3RoaXMuc2hvcEl0ZW1XaWR0aH0sIOmrmOW6pj0ke3RoaXMuc2hvcEl0ZW1IZWlnaHR9LCDpl7Tot509JHt0aGlzLnNob3BJdGVtU3BhY2luZ31gKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6K6+572u5a655Zmo6IOM5pmv77yI4q2QIOWNiumAj+aYjueZveiJsuWNoeeJh+aViOaenO+8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3NldHVwQ29udGFpbmVyQmFja2dyb3VuZCgpIHtcbiAgICAgICAgLy8g5qOA5p+l5piv5ZCm5bey5pyJ6IOM5pmv6IqC54K5XG4gICAgICAgIGxldCBiZ05vZGUgPSB0aGlzLml0ZW1MaXN0Q29udGFpbmVyLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKTtcbiAgICAgICAgaWYgKCFiZ05vZGUpIHtcbiAgICAgICAgICAgIGJnTm9kZSA9IG5ldyBjYy5Ob2RlKFwiQmFja2dyb3VuZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGdyYXBoaWNzID0gYmdOb2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG5cbiAgICAgICAgICAgIC8vIOKtkCDnu5jliLbljYrpgI/mmI7nmb3oibLlnIbop5Lnn6nlvaLog4zmma9cbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5pdGVtTGlzdENvbnRhaW5lci53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaXRlbUxpc3RDb250YWluZXIuaGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgcmFkaXVzID0gMTA7IC8vIOWchuinkuWNiuW+hFxuXG4gICAgICAgICAgICAvLyDirZAg5Y2K6YCP5piO6IOM5pmv77ya5L2/55So5Y+v6YWN572u55qE6YCP5piO5bqm5YC8XG4gICAgICAgICAgICAvLyDlj6/ku6XmoLnmja7pnIDopoHosIPmlbTvvJoxMjg9NTAl6YCP5piO77yMMTgwPTcwJeS4jemAj+aYju+8jDIwMD03OCXkuI3pgI/mmI7vvIwyNTU95a6M5YWo5LiN6YCP5piOXG4gICAgICAgICAgICBjb25zdCBvcGFjaXR5ID0gdGhpcy5iYWNrZ3JvdW5kT3BhY2l0eSB8fCAxODA7IC8vIOm7mOiupDE4MO+8iOe6pjcwJeS4jemAj+aYju+8iVxuICAgICAgICAgICAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwgMjU1LCAyNTUsIG9wYWNpdHkpO1xuICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgZ3JhcGhpY3Mucm91bmRSZWN0KC13aWR0aCAvIDIsIC1oZWlnaHQgLyAyLCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpO1xuICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbCgpO1xuXG4gICAgICAgICAgICAvLyDirZAg6K6+572u6IqC54K56YCP5piO5bqm77yI56Gu5L+d5Y2K6YCP5piO5pWI5p6c77yJXG4gICAgICAgICAgICBiZ05vZGUuc2V0Q29udGVudFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICBiZ05vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgICAgICAgICAgYmdOb2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICAgICAgYmdOb2RlLm9wYWNpdHkgPSBvcGFjaXR5OyAvLyDoioLngrnpgI/mmI7luqbvvIjkuI5maWxsQ29sb3LnmoRhbHBoYeWAvOS/neaMgeS4gOiHtO+8iVxuICAgICAgICAgICAgYmdOb2RlLnpJbmRleCA9IC0xOyAvLyDog4zmma/lnKjmnIDkuIvlsYJcblxuICAgICAgICAgICAgdGhpcy5pdGVtTGlzdENvbnRhaW5lci5hZGRDaGlsZChiZ05vZGUpO1xuICAgICAgICAgICAgY2MubG9nKGBbU2hvcFVJXSDinJMg5bey6K6+572u5Y2K6YCP5piO6IOM5pmvOiBhbHBoYT0ke2JhY2tncm91bmRDb2xvci5hfSwgb3BhY2l0eT0ke2JnTm9kZS5vcGFjaXR5fWApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOW4g+WxgOWVhuWTgemhue+8iOiuvue9ruS9jee9ru+8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBpdGVtTm9kZSAtIOWVhuWTgemhueiKgueCuVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIOWVhuWTgee0ouW8lVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0b3RhbEl0ZW1zIC0g5ZWG5ZOB5oC75pWwXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNob3BJdGVtIC0g5ZWG5ZOB5pWw5o2u77yI5Y+v6YCJ77yM55So5LqO6K6+572u5qC35byP77yJXG4gICAgICovXG4gICAgX2xheW91dFNob3BJdGVtKGl0ZW1Ob2RlLCBpbmRleCwgdG90YWxJdGVtcywgc2hvcEl0ZW0gPSBudWxsKSB7XG4gICAgICAgIC8vIOiuoeeul+ihjOWIl+S9jee9rlxuICAgICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gdGhpcy5zaG9wQ29sdW1ucyk7XG4gICAgICAgIGNvbnN0IGNvbCA9IGluZGV4ICUgdGhpcy5zaG9wQ29sdW1ucztcbiAgICAgICAgY29uc3QgdG90YWxSb3dzID0gTWF0aC5jZWlsKHRvdGFsSXRlbXMgLyB0aGlzLnNob3BDb2x1bW5zKTtcblxuICAgICAgICAvLyDorqHnrpfkvY3nva7vvIjlsYXkuK3luIPlsYDvvIlcbiAgICAgICAgY29uc3QgdG90YWxXaWR0aCA9IHRoaXMuc2hvcENvbHVtbnMgKiAodGhpcy5zaG9wSXRlbVdpZHRoICsgdGhpcy5zaG9wSXRlbVNwYWNpbmcpIC0gdGhpcy5zaG9wSXRlbVNwYWNpbmc7XG4gICAgICAgIGNvbnN0IHRvdGFsSGVpZ2h0ID0gdG90YWxSb3dzICogKHRoaXMuc2hvcEl0ZW1IZWlnaHQgKyB0aGlzLnNob3BJdGVtU3BhY2luZykgLSB0aGlzLnNob3BJdGVtU3BhY2luZztcblxuICAgICAgICBjb25zdCBzdGFydFggPSAtdG90YWxXaWR0aCAvIDIgKyB0aGlzLnNob3BJdGVtV2lkdGggLyAyO1xuICAgICAgICBjb25zdCBzdGFydFkgPSB0b3RhbEhlaWdodCAvIDIgLSB0aGlzLnNob3BJdGVtSGVpZ2h0IC8gMjtcblxuICAgICAgICBjb25zdCB4ID0gc3RhcnRYICsgY29sICogKHRoaXMuc2hvcEl0ZW1XaWR0aCArIHRoaXMuc2hvcEl0ZW1TcGFjaW5nKTtcbiAgICAgICAgY29uc3QgeSA9IHN0YXJ0WSAtIHJvdyAqICh0aGlzLnNob3BJdGVtSGVpZ2h0ICsgdGhpcy5zaG9wSXRlbVNwYWNpbmcpO1xuXG4gICAgICAgIC8vIOiuvue9ruWVhuWTgemhueWkp+Wwj+WSjOS9jee9rlxuICAgICAgICBpdGVtTm9kZS5zZXRDb250ZW50U2l6ZSh0aGlzLnNob3BJdGVtV2lkdGgsIHRoaXMuc2hvcEl0ZW1IZWlnaHQpO1xuICAgICAgICBpdGVtTm9kZS5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG4gICAgICAgIGl0ZW1Ob2RlLnNldFBvc2l0aW9uKHgsIHkpO1xuXG4gICAgICAgIC8vIOKtkCDkuLrllYblk4Hpobnmt7vliqDlrrnlmajog4zmma/lkozovrnmoYbvvIjmoLnmja7llYblk4Hnsbvlnovorr7nva7moLflvI/vvIlcbiAgICAgICAgdGhpcy5fc2V0dXBJdGVtQ2FyZEJhY2tncm91bmQoaXRlbU5vZGUsIHNob3BJdGVtKTtcblxuICAgICAgICAvLyDirZAg5re75YqgTWFza+e7hOS7tu+8jOehruS/neWGheWuueS4peagvOmZkOWItuWcqOWuueWZqOWGhVxuICAgICAgICB0aGlzLl9zZXR1cEl0ZW1DYXJkTWFzayhpdGVtTm9kZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiuvue9ruWVhuWTgemhueWuueWZqOiDjOaZr++8iOWNoeeJh+agt+W8j++8jOKtkCDmoLnmja7llYblk4Hnsbvlnovkvb/nlKjkuI3lkIzmoLflvI/vvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gaXRlbU5vZGUgLSDllYblk4HpobnoioLngrlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2hvcEl0ZW0gLSDllYblk4HmlbDmja7vvIjlj6/pgInvvIznlKjkuo7ojrflj5bnsbvlnovmoLflvI/vvIlcbiAgICAgKi9cbiAgICBfc2V0dXBJdGVtQ2FyZEJhY2tncm91bmQoaXRlbU5vZGUsIHNob3BJdGVtID0gbnVsbCkge1xuICAgICAgICAvLyDmo4Dmn6XmmK/lkKblt7LmnInog4zmma/oioLngrlcbiAgICAgICAgbGV0IGJnTm9kZSA9IGl0ZW1Ob2RlLmdldENoaWxkQnlOYW1lKFwiQ2FyZEJhY2tncm91bmRcIik7XG4gICAgICAgIGlmICghYmdOb2RlKSB7XG4gICAgICAgICAgICBiZ05vZGUgPSBuZXcgY2MuTm9kZShcIkNhcmRCYWNrZ3JvdW5kXCIpO1xuICAgICAgICAgICAgY29uc3QgZ3JhcGhpY3MgPSBiZ05vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcblxuICAgICAgICAgICAgLy8g4q2QIOagueaNruWVhuWTgeexu+Wei+iOt+WPluagt+W8j++8iOWmguaenOaPkOS+m+S6huWVhuWTgeaVsOaNru+8iVxuICAgICAgICAgICAgbGV0IGJhY2tncm91bmRDb2xvciA9IG5ldyBjYy5Db2xvcigyNDUsIDI0NSwgMjQ1LCAyNTUpOyAvLyDpu5jorqTmtYXngbBcbiAgICAgICAgICAgIGxldCBib3JkZXJDb2xvciA9IG5ldyBjYy5Db2xvcigyMDAsIDIwMCwgMjAwLCAyNTUpOyAgICAgLy8g6buY6K6k54Gw6Imy6L655qGGXG5cbiAgICAgICAgICAgIGlmIChzaG9wSXRlbSAmJiBzaG9wSXRlbS5jYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFNob3BDb25maWcgPSByZXF1aXJlKFwiU2hvcENvbmZpZ1wiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IFNob3BDb25maWcuZ2V0Q2F0ZWdvcnlTdHlsZShzaG9wSXRlbS5jYXRlZ29yeSk7XG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvciA9IHN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3IgPSBzdHlsZS5ib3JkZXJDb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOe7mOWItuWNoeeJh+iDjOaZr++8iOW4puWchuinkuWSjOi+ueahhu+8iVxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBpdGVtTm9kZS53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGl0ZW1Ob2RlLmhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IDg7IC8vIOWchuinkuWNiuW+hFxuICAgICAgICAgICAgY29uc3QgYm9yZGVyV2lkdGggPSAyOyAvLyDovrnmoYblrr3luqZcblxuICAgICAgICAgICAgLy8g57uY5Yi26IOM5pmvXG4gICAgICAgICAgICBncmFwaGljcy5maWxsQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICBncmFwaGljcy5yb3VuZFJlY3QoLXdpZHRoIC8gMiwgLWhlaWdodCAvIDIsIHdpZHRoLCBoZWlnaHQsIHJhZGl1cyk7XG4gICAgICAgICAgICBncmFwaGljcy5maWxsKCk7XG5cbiAgICAgICAgICAgIC8vIOe7mOWItui+ueahhlxuICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBib3JkZXJDb2xvcjtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9IGJvcmRlcldpZHRoO1xuICAgICAgICAgICAgZ3JhcGhpY3Mucm91bmRSZWN0KC13aWR0aCAvIDIsIC1oZWlnaHQgLyAyLCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpO1xuICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgIC8vIOiuvue9ruiDjOaZr+iKgueCueWxnuaAp1xuICAgICAgICAgICAgYmdOb2RlLnNldENvbnRlbnRTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgICAgYmdOb2RlLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcbiAgICAgICAgICAgIGJnTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgICAgIGJnTm9kZS56SW5kZXggPSAtMTAwOyAvLyDog4zmma/lnKjmnIDkuIvlsYJcblxuICAgICAgICAgICAgaXRlbU5vZGUuYWRkQ2hpbGQoYmdOb2RlKTtcbiAgICAgICAgICAgIGNjLmxvZyhgW1Nob3BVSV0g4pyTIOW3suS4uuWVhuWTgemhuea3u+WKoOWuueWZqOiDjOaZrzogJHt3aWR0aH14JHtoZWlnaHR9LCDnsbvlnos9JHtzaG9wSXRlbSA/IHNob3BJdGVtLmNhdGVnb3J5IDogJ2RlZmF1bHQnfWApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiuvue9ruWVhuWTgemhueWuueWZqOmBrue9qe+8iOehruS/neWGheWuueS4jei2heWHuuWuueWZqO+8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBpdGVtTm9kZSAtIOWVhuWTgemhueiKgueCuVxuICAgICAqL1xuICAgIF9zZXR1cEl0ZW1DYXJkTWFzayhpdGVtTm9kZSkge1xuICAgICAgICAvLyDmo4Dmn6XmmK/lkKblt7LmnIlNYXNr57uE5Lu2XG4gICAgICAgIGxldCBtYXNrID0gaXRlbU5vZGUuZ2V0Q29tcG9uZW50KGNjLk1hc2spO1xuICAgICAgICBpZiAoIW1hc2spIHtcbiAgICAgICAgICAgIG1hc2sgPSBpdGVtTm9kZS5hZGRDb21wb25lbnQoY2MuTWFzayk7XG4gICAgICAgICAgICBtYXNrLnR5cGUgPSBjYy5NYXNrLlR5cGUuUkVDVDsgLy8g55+p5b2i6YGu572pXG4gICAgICAgICAgICBtYXNrLnNlZ2VtZW50cyA9IDE7IC8vIOWchuinkuWIhuauteaVsO+8iDHooajnpLrml6DlnIbop5LvvIzkvYbphY3lkIhHcmFwaGljc+S9v+eUqO+8iVxuXG4gICAgICAgICAgICAvLyDorr7nva7pga7nvanlpKflsI/vvIjnlaXlsI/kuo7lrrnlmajvvIznoa7kv53ovrnmoYblj6/op4HvvIlcbiAgICAgICAgICAgIGNvbnN0IHBhZGRpbmcgPSAxOyAvLyDlhoXovrnot53vvIznoa7kv53lhoXlrrnkuI3otLTovrlcbiAgICAgICAgICAgIG1hc2sud2lkdGggPSBpdGVtTm9kZS53aWR0aCAtIHBhZGRpbmcgKiAyO1xuICAgICAgICAgICAgbWFzay5oZWlnaHQgPSBpdGVtTm9kZS5oZWlnaHQgLSBwYWRkaW5nICogMjtcblxuICAgICAgICAgICAgY2MubG9nKGBbU2hvcFVJXSDinJMg5bey5Li65ZWG5ZOB6aG55re75Yqg6YGu572pOiAke21hc2sud2lkdGh9eCR7bWFzay5oZWlnaHR9YCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6K6+572u5ZWG5ZOB6aG5VUlcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGl0ZW1Ob2RlIC0g5ZWG5ZOB6aG56IqC54K5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNob3BJdGVtIC0g5ZWG5ZOB5pWw5o2uXG4gICAgICovXG4gICAgc2V0dXBTaG9wSXRlbShpdGVtTm9kZSwgc2hvcEl0ZW0pIHtcbiAgICAgICAgLy8g5p+l5om+5a2Q6IqC54K577yI5qC55o2uUHJlZmFi57uT5p6E6LCD5pW077yJXG4gICAgICAgIGNvbnN0IG5hbWVMYWJlbCA9IGl0ZW1Ob2RlLmdldENoaWxkQnlOYW1lKFwiTmFtZUxhYmVsXCIpO1xuICAgICAgICBjb25zdCBwcmljZUxhYmVsID0gaXRlbU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQcmljZUxhYmVsXCIpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gaXRlbU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJEZXNjcmlwdGlvbkxhYmVsXCIpO1xuICAgICAgICBjb25zdCBpY29uTm9kZSA9IGl0ZW1Ob2RlLmdldENoaWxkQnlOYW1lKFwiSWNvblwiKTtcbiAgICAgICAgLy8g4q2QIOS/ruaUue+8muaMiemSruWQjeensOaYr1wi6LSt5LmwXCLogIzkuI3mmK9cIkJ1eUJ1dHRvblwiXG4gICAgICAgIGNvbnN0IGJ1eUJ1dHRvbiA9IGl0ZW1Ob2RlLmdldENoaWxkQnlOYW1lKFwi6LSt5LmwXCIpIHx8IGl0ZW1Ob2RlLmdldENoaWxkQnlOYW1lKFwiQnV5QnV0dG9uXCIpO1xuXG4gICAgICAgIC8vIOKtkCDosIPor5XvvJrovpPlh7rmib7liLDnmoToioLngrlcbiAgICAgICAgY2MubG9nKGBbU2hvcFVJXSDorr7nva7llYblk4EgJHtzaG9wSXRlbS5uYW1lfTpgLCB7XG4gICAgICAgICAgICBuYW1lTGFiZWw6ICEhbmFtZUxhYmVsLFxuICAgICAgICAgICAgcHJpY2VMYWJlbDogISFwcmljZUxhYmVsLFxuICAgICAgICAgICAgZGVzY3JpcHRpb25MYWJlbDogISFkZXNjcmlwdGlvbkxhYmVsLFxuICAgICAgICAgICAgaWNvbk5vZGU6ICEhaWNvbk5vZGUsXG4gICAgICAgICAgICBidXlCdXR0b246ICEhYnV5QnV0dG9uLFxuICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogYnV5QnV0dG9uID8gYnV5QnV0dG9uLm5hbWUgOiAn5pyq5om+5YiwJ1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDorr7nva7llYblk4HpobnlhoXpg6jluIPlsYBcbiAgICAgICAgdGhpcy5fbGF5b3V0U2hvcEl0ZW1Db250ZW50KGl0ZW1Ob2RlLCBpY29uTm9kZSwgbmFtZUxhYmVsLCBwcmljZUxhYmVsLCBkZXNjcmlwdGlvbkxhYmVsLCBidXlCdXR0b24pO1xuXG4gICAgICAgIC8vIOKtkCDmoLnmja7llYblk4Hnsbvlnovojrflj5bmoLflvI/phY3nva5cbiAgICAgICAgY29uc3QgU2hvcENvbmZpZyA9IHJlcXVpcmUoXCJTaG9wQ29uZmlnXCIpO1xuICAgICAgICBjb25zdCBzdHlsZSA9IHNob3BJdGVtLmNhdGVnb3J5ID8gU2hvcENvbmZpZy5nZXRDYXRlZ29yeVN0eWxlKHNob3BJdGVtLmNhdGVnb3J5KSA6IG51bGw7XG4gICAgICAgIC8vIOKtkCDkvJjljJbvvJrmloflrZfpopzoibLmm7TmmI7mmL7vvIjmt7HoibLvvIlcbiAgICAgICAgY29uc3QgbmFtZUNvbG9yID0gc3R5bGUgPyBzdHlsZS5uYW1lQ29sb3IgOiBuZXcgY2MuQ29sb3IoMzAsIDMwLCAzMCwgMjU1KTsgLy8g5rex6buR6Imy77yM5pu05piO5pi+XG4gICAgICAgIGNvbnN0IHByaWNlQ29sb3IgPSBzdHlsZSA/IHN0eWxlLnByaWNlQ29sb3IgOiBuZXcgY2MuQ29sb3IoMjU1LCAyMTUsIDAsIDI1NSk7IC8vIOmHkeiJsuS/neaMgeS4jeWPmFxuICAgICAgICBjb25zdCBkZXNjQ29sb3IgPSBzdHlsZSA/IHN0eWxlLmRlc2NDb2xvciA6IG5ldyBjYy5Db2xvcig2MCwgNjAsIDYwLCAyNTUpOyAvLyDmt7HngbDoibLvvIzmm7TmmI7mmL7vvIjljp/mnaXmmK8xMjDvvIlcblxuICAgICAgICAvLyDorr7nva7lkI3np7DvvIjirZAg5qC55o2u5ZWG5ZOB57G75Z6L5L2/55So5LiN5ZCM6aKc6Imy77yM5pu05piO5pi+77yJXG4gICAgICAgIGlmIChuYW1lTGFiZWwpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gbmFtZUxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBzaG9wSXRlbS5uYW1lO1xuICAgICAgICAgICAgICAgIC8vIOKtkCDkvJjljJbvvJrlrZfkvZPmm7TlpKfvvIzpopzoibLmm7Tmt7FcbiAgICAgICAgICAgICAgICBsYWJlbC5mb250U2l6ZSA9IDMwOyAvLyDku44yNuWinuWKoOWIsDMwXG4gICAgICAgICAgICAgICAgbGFiZWwubm9kZS5jb2xvciA9IG5hbWVDb2xvcjtcbiAgICAgICAgICAgICAgICBsYWJlbC5ob3Jpem9udGFsQWxpZ24gPSBjYy5MYWJlbC5Ib3Jpem9udGFsQWxpZ24uQ0VOVEVSO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g6K6+572u5Lu35qC877yI4q2QIOagueaNruWVhuWTgeexu+Wei+S9v+eUqOS4jeWQjOminOiJsu+8iVxuICAgICAgICBpZiAocHJpY2VMYWJlbCkge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBwcmljZUxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBgJHtzaG9wSXRlbS5wcmljZX0g6YeR5biBYDtcbiAgICAgICAgICAgICAgICAvLyDirZAg5LyY5YyW77ya5a2X5L2T5pu05aSn77yM5Lu35qC85pu056qB5Ye6XG4gICAgICAgICAgICAgICAgbGFiZWwuZm9udFNpemUgPSAzMjsgLy8g5LuOMjjlop7liqDliLAzMlxuICAgICAgICAgICAgICAgIGxhYmVsLm5vZGUuY29sb3IgPSBwcmljZUNvbG9yO1xuICAgICAgICAgICAgICAgIGxhYmVsLmhvcml6b250YWxBbGlnbiA9IGNjLkxhYmVsLkhvcml6b250YWxBbGlnbi5DRU5URVI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDorr7nva7mj4/ov7DvvIjirZAg5LyY5YyW77ya56Gu5L+d5paH5a2X6Ieq5Yqo5o2i6KGM5LiU6ZmQ5Yi25Zyo5a655Zmo5YaF77yM5qC55o2u5ZWG5ZOB57G75Z6L5L2/55So5LiN5ZCM6aKc6Imy77yM5pu05piO5pi+77yJXG4gICAgICAgIGlmIChkZXNjcmlwdGlvbkxhYmVsKSB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRlc2NyaXB0aW9uTGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IHNob3BJdGVtLmRlc2NyaXB0aW9uIHx8IFwiXCI7XG4gICAgICAgICAgICAgICAgLy8g4q2QIOS8mOWMlu+8muWtl+S9k+abtOWkp++8jOminOiJsuabtOa3se+8jOabtOaYjuaYvlxuICAgICAgICAgICAgICAgIGxhYmVsLmZvbnRTaXplID0gMjA7IC8vIOS7jjE45aKe5Yqg5YiwMjBcbiAgICAgICAgICAgICAgICBsYWJlbC5ub2RlLmNvbG9yID0gZGVzY0NvbG9yOyAvLyDmt7HngbDoibIoNjAsNjAsNjAp77yM5pu05piO5pi+XG4gICAgICAgICAgICAgICAgbGFiZWwuaG9yaXpvbnRhbEFsaWduID0gY2MuTGFiZWwuSG9yaXpvbnRhbEFsaWduLkxFRlQ7IC8vIOW3puWvuem9kO+8jOabtOaYk+mYheivu1xuICAgICAgICAgICAgICAgIGxhYmVsLnZlcnRpY2FsQWxpZ24gPSBjYy5MYWJlbC5WZXJ0aWNhbEFsaWduLlRPUDsgLy8g6aG26YOo5a+56b2QXG4gICAgICAgICAgICAgICAgbGFiZWwuZW5hYmxlV3JhcFRleHQgPSB0cnVlOyAvLyDirZAg5ZCv55So6Ieq5Yqo5o2i6KGMXG4gICAgICAgICAgICAgICAgbGFiZWwub3ZlcmZsb3cgPSBjYy5MYWJlbC5PdmVyZmxvdy5SRVNJWkVfSEVJR0hUOyAvLyDirZAg6Ieq5Yqo6LCD5pW06auY5bqm5Lul6YCC5bqU5YaF5a65XG4gICAgICAgICAgICAgICAgLy8g4q2QIOWinuWKoOihjOmXtOi3ne+8iOmAmui/h+WinuWKoOihjOmrmOadpee7meaWh+Wtl+abtOWkmuepuumXtO+8iVxuICAgICAgICAgICAgICAgIGxhYmVsLmxpbmVIZWlnaHQgPSAyNjsgLy8g6KGM6auY77ya5LuOMjLlop7liqDliLAyNu+8jOmFjeWQiOabtOWkp+eahOWtl+S9k1xuXG4gICAgICAgICAgICAgICAgLy8g4q2QIOiuvue9ruaPj+i/sOagh+etvuWwuuWvuO+8iOS4peagvOmZkOWItuWcqOWuueWZqOWGhe+8jOeVmeWHuuWGhei+uei3ne+8iVxuICAgICAgICAgICAgICAgIGNvbnN0IHBhZGRpbmcgPSAxMjsgLy8g5bem5Y+z5YaF6L656LedXG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY1dpZHRoID0gdGhpcy5zaG9wSXRlbVdpZHRoIC0gcGFkZGluZyAqIDI7IC8vIOWuveW6piA9IOWuueWZqOWuveW6piAtIOW3puWPs+WGhei+uei3nVxuICAgICAgICAgICAgICAgIGNvbnN0IG1heERlc2NIZWlnaHQgPSA2MDsgLy8g5pyA5aSn6auY5bqm77ya5LuONTXlop7liqDliLA2MO+8jOe7meabtOWkp+eahOWtl+S9k+abtOWkmuepuumXtFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0Q29udGVudFNpemUoZGVzY1dpZHRoLCBtYXhEZXNjSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEFuY2hvclBvaW50KDAuNSwgMSk7IC8vIOmUmueCueWcqOmhtumDqOS4reW/g++8jOS+v+S6juWumuS9jVxuXG4gICAgICAgICAgICAgICAgY2MubG9nKGBbU2hvcFVJXSDinJMg5o+P6L+w5qCH562+5bey6K6+572uOiDlrr3luqY9JHtkZXNjV2lkdGh9LCDmnIDlpKfpq5jluqY9JHttYXhEZXNjSGVpZ2h0fSwg5a2X5L2TPSR7bGFiZWwuZm9udFNpemV9LCDooYzpq5g9JHtsYWJlbC5saW5lSGVpZ2h0fWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g6K6+572u5Zu+5qCH77ya5LyY5YWI55So5ZWG5ZOB6Ieq6LqrIGljb27vvIzlkKbliJnmjIkgaXRlbUlkIOS7jiBJdGVtQ29uZmlnIOWPlu+8iOS4jumBk+WFt+agj+S4gOiHtO+8iVxuICAgICAgICBpZiAoaWNvbk5vZGUpIHtcbiAgICAgICAgICAgIGxldCBpY29uU3ByaXRlRnJhbWUgPSBzaG9wSXRlbS5pY29uO1xuICAgICAgICAgICAgaWYgKCFpY29uU3ByaXRlRnJhbWUgJiYgc2hvcEl0ZW0uaXRlbUlkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgSXRlbUNvbmZpZyA9IHJlcXVpcmUoXCJJdGVtQ29uZmlnXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1Db25maWcgPSBJdGVtQ29uZmlnLmdldEl0ZW1CeUlkKHNob3BJdGVtLml0ZW1JZCk7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1Db25maWcgJiYgaXRlbUNvbmZpZy5pY29uKSB7XG4gICAgICAgICAgICAgICAgICAgIGljb25TcHJpdGVGcmFtZSA9IGl0ZW1Db25maWcuaWNvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaWNvblNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlID0gaWNvbk5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNwcml0ZSkge1xuICAgICAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBpY29uU3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWNvbk5vZGUuc2V0Q29udGVudFNpemUoODAsIDgwKTtcbiAgICAgICAgICAgIGljb25Ob2RlLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiuvue9rui0reS5sOaMiemSru+8iOS/neaMgeWOn+Wni+iDjOaZr++8jOm7keiJsuaWh+Wtl++8iVxuICAgICAgICBpZiAoYnV5QnV0dG9uKSB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBidXlCdXR0b24uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgLy8g5p+l5om+5oyJ6ZKu5paH5a2X5qCH562+XG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gYnV5QnV0dG9uLmdldENoaWxkQnlOYW1lKFwiTGFiZWxcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzmsqHmnIlMYWJlbOWtkOiKgueCue+8jOWIm+W7uuS4gOS4qlxuICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IG5ldyBjYy5Ob2RlKFwiTGFiZWxcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsQ29tcCA9IGxhYmVsLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsQ29tcC5zdHJpbmcgPSBcIui0reS5sFwiOyAvLyDmjInpkq7mloflrZfmlLnkuLpcIui0reS5sFwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsQ29tcC5mb250U2l6ZSA9IDE4O1xuICAgICAgICAgICAgICAgICAgICBsYWJlbENvbXAubm9kZS5jb2xvciA9IGNjLkNvbG9yLkJMQUNLOyAvLyDpu5HoibLmloflrZdcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxDb21wLmhvcml6b250YWxBbGlnbiA9IGNjLkxhYmVsLkhvcml6b250YWxBbGlnbi5DRU5URVI7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsQ29tcC52ZXJ0aWNhbEFsaWduID0gY2MuTGFiZWwuVmVydGljYWxBbGlnbi5DRU5URVI7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnNldENvbnRlbnRTaXplKGJ1eUJ1dHRvbi53aWR0aCwgYnV5QnV0dG9uLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGJ1eUJ1dHRvbi5hZGRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWxDb21wID0gbGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsQ29tcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxDb21wLnN0cmluZyA9IFwi6LSt5LmwXCI7IC8vIOaMiemSruaWh+Wtl+aUueS4ulwi6LSt5LmwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsQ29tcC5mb250U2l6ZSA9IDE4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxDb21wLm5vZGUuY29sb3IgPSBjYy5Db2xvci5CTEFDSzsgLy8g6buR6Imy5paH5a2XXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbENvbXAuaG9yaXpvbnRhbEFsaWduID0gY2MuTGFiZWwuSG9yaXpvbnRhbEFsaWduLkNFTlRFUjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsQ29tcC52ZXJ0aWNhbEFsaWduID0gY2MuTGFiZWwuVmVydGljYWxBbGlnbi5DRU5URVI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOe7keWumui0reS5sOaMiemSruS6i+S7tlxuICAgICAgICAgICAgYnV5QnV0dG9uLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpOyAvLyDlhYjnp7vpmaTml6fkuovku7ZcbiAgICAgICAgICAgIGJ1eUJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQnV5SXRlbShzaG9wSXRlbSk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOS/neWtmOWVhuWTgeaVsOaNruWIsOiKgueCuVxuICAgICAgICBpdGVtTm9kZS5fc2hvcEl0ZW1EYXRhID0gc2hvcEl0ZW07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOW4g+WxgOWVhuWTgemhueWGhemDqOWGheWuue+8iOKtkCDkvJjljJbniYjvvJrlm77moIctPuWQjeensC0+5o+P6L+wLT7ku7fmoLwtPuaMiemSru+8jOS4peagvOmZkOWItuWcqOWuueWZqOWGhe+8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBpdGVtTm9kZSAtIOWVhuWTgemhueiKgueCuVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gaWNvbk5vZGUgLSDlm77moIfoioLngrlcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IG5hbWVMYWJlbCAtIOWQjeensOagh+etvlxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gcHJpY2VMYWJlbCAtIOS7t+agvOagh+etvlxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gZGVzY3JpcHRpb25MYWJlbCAtIOaPj+i/sOagh+etvlxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gYnV5QnV0dG9uIC0g6LSt5Lmw5oyJ6ZKuXG4gICAgICovXG4gICAgX2xheW91dFNob3BJdGVtQ29udGVudChpdGVtTm9kZSwgaWNvbk5vZGUsIG5hbWVMYWJlbCwgcHJpY2VMYWJlbCwgZGVzY3JpcHRpb25MYWJlbCwgYnV5QnV0dG9uKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1IZWlnaHQgPSB0aGlzLnNob3BJdGVtSGVpZ2h0O1xuICAgICAgICBjb25zdCBpdGVtV2lkdGggPSB0aGlzLnNob3BJdGVtV2lkdGg7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSAxMjsgLy8g5YaF6L656Led77yI56Gu5L+d5YaF5a655LiN6LS06L6577yJXG5cbiAgICAgICAgLy8g4q2QIOiwg+ivle+8mui+k+WHuuW4g+WxgOS/oeaBr1xuICAgICAgICBjYy5sb2coYFtTaG9wVUldIOW4g+WxgOWVhuWTgemhueWGheWuuTog5aSn5bCPPSR7aXRlbVdpZHRofXgke2l0ZW1IZWlnaHR9LCDlhoXovrnot509JHtwYWRkaW5nfWApO1xuXG4gICAgICAgIC8vIOKtkCDluIPlsYDpobrluo/vvIjku47kuIrliLDkuIvvvInvvJrlm77moIcgLT4g5ZCN56ewIC0+IOaPj+i/sCAtPiDku7fmoLwgLT4g5oyJ6ZKuXG4gICAgICAgIC8vIOKtkCDmiYDmnInlhYPntKDpg73kuKXmoLzpmZDliLblnKjlrrnlmajlhoXvvIjkvb/nlKjnm7jlr7nkvY3nva7orqHnrpfvvIlcblxuICAgICAgICBsZXQgY3VycmVudFkgPSBpdGVtSGVpZ2h0IC8gMiAtIHBhZGRpbmc7IC8vIOS7jumhtumDqOW8gOWni++8jOeVmeWHuuWGhei+uei3nVxuXG4gICAgICAgIC8vIDEuIOWbvuagh+S9jee9ru+8iOmhtumDqO+8jOWxheS4re+8iVxuICAgICAgICBpZiAoaWNvbk5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGljb25TaXplID0gNzA7IC8vIOWbvuagh+Wkp+Wwj++8iOeVpeWwj++8jOS4uuWFtuS7luWGheWuueeVmeWHuuepuumXtO+8iVxuICAgICAgICAgICAgY29uc3QgaWNvblRvcE1hcmdpbiA9IDEyOyAvLyDirZAg5Zu+5qCH6aG26YOo6L656Led77ya5LuOMTDlop7liqDliLAxMlxuICAgICAgICAgICAgY3VycmVudFkgLT0gaWNvblRvcE1hcmdpbjtcbiAgICAgICAgICAgIGljb25Ob2RlLnNldFBvc2l0aW9uKDAsIGN1cnJlbnRZIC0gaWNvblNpemUgLyAyKTsgLy8g5Zu+5qCH5Lit5b+D5L2N572uXG4gICAgICAgICAgICBpY29uTm9kZS5zZXRDb250ZW50U2l6ZShpY29uU2l6ZSwgaWNvblNpemUpO1xuICAgICAgICAgICAgaWNvbk5vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgICAgICAgICAgaWNvbk5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGljb25Ob2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICBjdXJyZW50WSAtPSBpY29uU2l6ZSArIDEwOyAvLyDirZAg5Zu+5qCH6auY5bqmICsg6Ze06Led77ya5LuOOOWinuWKoOWIsDEwXG4gICAgICAgICAgICBjYy5sb2coYFtTaG9wVUldICAg5Zu+5qCH5L2N572uOiAoMCwgJHsoY3VycmVudFkgLSBpY29uU2l6ZSAvIDIpLnRvRml4ZWQoMSl9KSwg5aSn5bCPPSR7aWNvblNpemV9eCR7aWNvblNpemV9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy53YXJuKGBbU2hvcFVJXSAgIOacquaJvuWIsEljb27oioLngrlgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDIuIOWQjeensOS9jee9ru+8iOWbvuagh+S4i+aWue+8jOWxheS4re+8iVxuICAgICAgICBpZiAobmFtZUxhYmVsKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lSGVpZ2h0ID0gMzI7IC8vIOKtkCDku44yOOWinuWKoOWIsDMy77yI6YWN5ZCI5pu05aSn55qE5a2X5L2TMzDvvIlcbiAgICAgICAgICAgIGNvbnN0IG5hbWVNYXJnaW4gPSAxMjsgLy8g4q2QIOWQjeensOS4juWbvuagh+eahOmXtOi3ne+8muS7jjblop7liqDliLAxMlxuICAgICAgICAgICAgY3VycmVudFkgLT0gbmFtZU1hcmdpbjtcbiAgICAgICAgICAgIG5hbWVMYWJlbC5zZXRQb3NpdGlvbigwLCBjdXJyZW50WSAtIG5hbWVIZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIG5hbWVMYWJlbC5zZXRDb250ZW50U2l6ZShpdGVtV2lkdGggLSBwYWRkaW5nICogMiwgbmFtZUhlaWdodCk7XG4gICAgICAgICAgICBuYW1lTGFiZWwuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgICAgICAgICAgbmFtZUxhYmVsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBjdXJyZW50WSAtPSBuYW1lSGVpZ2h0ICsgODsgLy8g4q2QIOWQjeensOmrmOW6piArIOmXtOi3ne+8muS7jjTlop7liqDliLA4XG4gICAgICAgICAgICBjYy5sb2coYFtTaG9wVUldICAg5ZCN56ew5L2N572uOiAoMCwgJHsoY3VycmVudFkgLSBuYW1lSGVpZ2h0IC8gMikudG9GaXhlZCgxKX0pLCDlpKflsI89JHtpdGVtV2lkdGggLSBwYWRkaW5nICogMn14JHtuYW1lSGVpZ2h0fWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2Mud2FybihgW1Nob3BVSV0gICDmnKrmib7liLBOYW1lTGFiZWzoioLngrlgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDMuIOaPj+i/sOS9jee9ru+8iOWQjeensOS4i+aWue+8jOW3puWvuem9kO+8jOiHquWKqOaNouihjO+8iVxuICAgICAgICBpZiAoZGVzY3JpcHRpb25MYWJlbCkge1xuICAgICAgICAgICAgY29uc3QgZGVzY01hcmdpbiA9IDEwOyAvLyDirZAg5o+P6L+w5LiO5ZCN56ew55qE6Ze06Led77ya5LuONOWinuWKoOWIsDEwXG4gICAgICAgICAgICBjb25zdCBkZXNjTWF4SGVpZ2h0ID0gNjA7IC8vIOKtkCDmj4/ov7DmnIDlpKfpq5jluqbvvJrku441NeWinuWKoOWIsDYw77yI6YWN5ZCI5pu05aSn55qE5a2X5L2TMjDlkozooYzpq5gyNu+8iVxuICAgICAgICAgICAgY3VycmVudFkgLT0gZGVzY01hcmdpbjtcbiAgICAgICAgICAgIC8vIOKtkCDplJrngrnlnKjpobbpg6jkuK3lv4PvvIzkvr/kuo7mloflrZfku47kuIrliLDkuIvmjpLliJdcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0UG9zaXRpb24oMCwgY3VycmVudFkpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5zZXRDb250ZW50U2l6ZShpdGVtV2lkdGggLSBwYWRkaW5nICogMiwgZGVzY01heEhlaWdodCk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEFuY2hvclBvaW50KDAuNSwgMSk7IC8vIOmhtumDqOS4reW/g+mUmueCuVxuICAgICAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5hY3RpdmUgPSB0cnVlOyAvLyDirZAg5pi+56S65o+P6L+wXG4gICAgICAgICAgICBjdXJyZW50WSAtPSBkZXNjTWF4SGVpZ2h0ICsgODsgLy8g4q2QIOaPj+i/sOmrmOW6piArIOmXtOi3ne+8muS7jjTlop7liqDliLA4XG4gICAgICAgICAgICBjYy5sb2coYFtTaG9wVUldICAg5o+P6L+w5L2N572uOiAoMCwgJHtjdXJyZW50WS50b0ZpeGVkKDEpfSksIOWkp+Wwjz0ke2l0ZW1XaWR0aCAtIHBhZGRpbmcgKiAyfXgke2Rlc2NNYXhIZWlnaHR9LCDoh6rliqjmjaLooYw95ZCv55SoYCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyA0LiDku7fmoLzkvY3nva7vvIjmj4/ov7DkuIvmlrnvvIzlsYXkuK3vvIzph5HoibLnqoHlh7rmmL7npLrvvIlcbiAgICAgICAgaWYgKHByaWNlTGFiZWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHByaWNlSGVpZ2h0ID0gMzQ7IC8vIOKtkCDku44zMOWinuWKoOWIsDM077yI6YWN5ZCI5pu05aSn55qE5a2X5L2TMzLvvIlcbiAgICAgICAgICAgIGNvbnN0IHByaWNlTWFyZ2luID0gNTA7IC8vIOKtkCDku7fmoLzkuI7mj4/ov7DnmoTpl7Tot53vvJrku44xMuWinuWKoOWIsDE477yI6K6p5Lu35qC85pu06Z2g5LiL77yJXG4gICAgICAgICAgICBjdXJyZW50WSAtPSBwcmljZU1hcmdpbjtcbiAgICAgICAgICAgIHByaWNlTGFiZWwuc2V0UG9zaXRpb24oMCwgY3VycmVudFkgLSBwcmljZUhlaWdodCAvIDIpO1xuICAgICAgICAgICAgcHJpY2VMYWJlbC5zZXRDb250ZW50U2l6ZShpdGVtV2lkdGggLSBwYWRkaW5nICogMiwgcHJpY2VIZWlnaHQpO1xuICAgICAgICAgICAgcHJpY2VMYWJlbC5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG4gICAgICAgICAgICBwcmljZUxhYmVsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBjdXJyZW50WSAtPSBwcmljZUhlaWdodCArIDEwOyAvLyDirZAg5Lu35qC86auY5bqmICsg6Ze06Led77ya5LuOOOWinuWKoOWIsDEwXG4gICAgICAgICAgICBjYy5sb2coYFtTaG9wVUldICAg5Lu35qC85L2N572uOiAoMCwgJHsoY3VycmVudFkgLSBwcmljZUhlaWdodCAvIDIpLnRvRml4ZWQoMSl9KSwg5aSn5bCPPSR7aXRlbVdpZHRoIC0gcGFkZGluZyAqIDJ9eCR7cHJpY2VIZWlnaHR9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy53YXJuKGBbU2hvcFVJXSAgIOacquaJvuWIsFByaWNlTGFiZWzoioLngrlgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDUuIOi0reS5sOaMiemSruS9jee9ru+8iOW6lemDqO+8jOWxheS4re+8jOS9v+eUqOWOn+Wni+iDjOaZr++8iVxuICAgICAgICBpZiAoYnV5QnV0dG9uKSB7XG4gICAgICAgICAgICBjb25zdCBidG5IZWlnaHQgPSAzODtcbiAgICAgICAgICAgIGNvbnN0IGJ0bkJvdHRvbU1hcmdpbiA9IDEwOyAvLyDmjInpkq7lupXpg6jovrnot51cbiAgICAgICAgICAgIGNvbnN0IGJ0blkgPSAtaXRlbUhlaWdodCAvIDIgKyBwYWRkaW5nICsgYnRuQm90dG9tTWFyZ2luICsgYnRuSGVpZ2h0IC8gMjsgLy8g5LuO5bqV6YOo6K6h566XXG4gICAgICAgICAgICBidXlCdXR0b24uc2V0UG9zaXRpb24oMCwgYnRuWSk7XG4gICAgICAgICAgICBidXlCdXR0b24uc2V0Q29udGVudFNpemUoaXRlbVdpZHRoIC0gcGFkZGluZyAqIDIsIGJ0bkhlaWdodCk7XG4gICAgICAgICAgICBidXlCdXR0b24uc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgICAgICAgICAgYnV5QnV0dG9uLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIOS4jee7mOWItuaMiemSruiDjOaZr++8jOS9v+eUqFByZWZhYuS4reiuvue9rueahOWOn+Wni+iDjOaZr1xuICAgICAgICAgICAgY2MubG9nKGBbU2hvcFVJXSAgIOaMiemSruS9jee9rjogKDAsICR7YnRuWS50b0ZpeGVkKDEpfSksIOWkp+Wwjz0ke2l0ZW1XaWR0aCAtIHBhZGRpbmcgKiAyfXgke2J0bkhlaWdodH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLndhcm4oYFtTaG9wVUldICAg5pyq5om+5Yiw6LSt5Lmw5oyJ6ZKu6IqC54K577yI5bCd6K+V5p+l5om+XCLotK3kubBcIuaIllwiQnV5QnV0dG9uXCLvvIlgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOKtkCDpqozor4HvvJrnoa7kv53miYDmnInlhoXlrrnpg73lnKjlrrnlmajlhoVcbiAgICAgICAgY29uc3QgbWluWSA9IC1pdGVtSGVpZ2h0IC8gMiArIHBhZGRpbmc7XG4gICAgICAgIGNvbnN0IG1heFkgPSBpdGVtSGVpZ2h0IC8gMiAtIHBhZGRpbmc7XG4gICAgICAgIGlmIChjdXJyZW50WSA8IG1pblkpIHtcbiAgICAgICAgICAgIGNjLndhcm4oYFtTaG9wVUldIOKaoCDorablkYrvvJrlhoXlrrnlj6/og73otoXlh7rlrrnlmajlupXpg6jovrnnlYzvvIHlvZPliY1ZPSR7Y3VycmVudFkudG9GaXhlZCgxKX0sIOacgOWwj1k9JHttaW5ZLnRvRml4ZWQoMSl9YCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6LSt5Lmw5ZWG5ZOBXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNob3BJdGVtIC0g5ZWG5ZOB5pWw5o2uXG4gICAgICovXG4gICAgYXN5bmMgb25CdXlJdGVtKHNob3BJdGVtKSB7XG4gICAgICAgIGNjLmxvZyhgW1Nob3BVSV0g5bCd6K+V6LSt5Lmw5ZWG5ZOBOiAke3Nob3BJdGVtLm5hbWV9LCDku7fmoLw6ICR7c2hvcEl0ZW0ucHJpY2V9YCk7XG5cbiAgICAgICAgLy8g5qOA5p+l6YeR5biB5piv5ZCm6Laz5aSf77yI5pys5Zyw5qOA5p+l77yM6YG/5YWN5LiN5b+F6KaB55qE6K+35rGC77yJXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2lucyA9IGF3YWl0IENvaW5NYW5hZ2VyLmdldENvaW5zKCk7XG4gICAgICAgIGlmIChjdXJyZW50Q29pbnMgPCBzaG9wSXRlbS5wcmljZSkge1xuICAgICAgICAgICAgY2Mud2FybihgW1Nob3BVSV0g6YeR5biB5LiN6LazOiDlvZPliY0gJHtjdXJyZW50Q29pbnN9LCDpnIDopoEgJHtzaG9wSXRlbS5wcmljZX1gKTtcbiAgICAgICAgICAgIC8vIFRPRE86IOaYvuekuuaPkOekulVJXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgU2VydmVyQ29uZmlnID0gcmVxdWlyZShcIlNlcnZlckNvbmZpZ1wiKTtcblxuICAgICAgICAgICAgLy8g5aaC5p6c5L2/55So5pyN5Yqh5Zmo5qih5byP77yM5L2/55So5pyN5Yqh5ZmoQVBJ6LSt5Lmw77yI5pyN5Yqh5Zmo5Lya5ZCM5pe25aSE55CG6YeR5biB5omj6Zmk5ZKM6YGT5YW35re75Yqg77yJXG4gICAgICAgICAgICBpZiAoU2VydmVyQ29uZmlnLmdldFN0b3JhZ2VNb2RlKCkgPT09ICdzZXJ2ZXInIHx8IFNlcnZlckNvbmZpZy5nZXRTdG9yYWdlTW9kZSgpID09PSAnaHlicmlkJykge1xuICAgICAgICAgICAgICAgIC8vIOKtkCDkv67lpI3vvJpnZXRCYXNlVVJMKCnlt7Lnu4/ljIXlkKsvYXBp77yM5omA5Lul5LiN6ZyA6KaB5YaN5YqgL2FwaVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7U2VydmVyQ29uZmlnLmdldEJhc2VVUkwoKX0vc2hvcC9wdXJjaGFzZWAsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5TZXJ2ZXJDb25maWcuZ2V0QXV0aEhlYWRlcnMoKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG9wSXRlbUlkOiBzaG9wSXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1JZDogc2hvcEl0ZW0uaXRlbUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHNob3BJdGVtLmNvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHNob3BJdGVtLnByaWNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKS5jYXRjaCgoKSA9PiAoe30pKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yRGF0YS5lcnJvciA9PT0gJ2luc3VmZmljaWVudF9jb2lucycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLndhcm4oYFtTaG9wVUldIOmHkeW4geS4jei2szog5b2T5YmNICR7ZXJyb3JEYXRhLmN1cnJlbnRDb2luc30sIOmcgOimgSAke3Nob3BJdGVtLnByaWNlfWApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGDotK3kubDlpLHotKU6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGNjLmxvZyhgW1Nob3BVSV0g4pyTIOi0reS5sOaIkOWKnzogJHtzaG9wSXRlbS5uYW1lfSB4JHtzaG9wSXRlbS5jb3VudH0sIOWJqeS9memHkeW4gTogJHtkYXRhLmNvaW5zfWApO1xuXG4gICAgICAgICAgICAgICAgLy8g5pu05paw6YeR5biB5pi+56S6XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVDb2luRGlzcGxheSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzog5pi+56S66LSt5Lmw5oiQ5Yqf5o+Q56S6VUlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOacrOWcsOaooeW8j++8muWIhuWIq+WkhOeQhumHkeW4geWSjOmBk+WFt1xuICAgICAgICAgICAgLy8g5omj6Zmk6YeR5biBXG4gICAgICAgICAgICBjb25zdCBzcGVuZFN1Y2Nlc3MgPSBhd2FpdCBDb2luTWFuYWdlci5zcGVuZENvaW5zKHNob3BJdGVtLnByaWNlKTtcbiAgICAgICAgICAgIGlmICghc3BlbmRTdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtTaG9wVUldIOaJo+mZpOmHkeW4geWksei0pWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5re75Yqg6YGT5YW35Yiw6IOM5YyFXG4gICAgICAgICAgICBjb25zdCBhZGRTdWNjZXNzID0gYXdhaXQgSXRlbURhdGFNYW5hZ2VyLmFkZEl0ZW0oc2hvcEl0ZW0uaXRlbUlkLCBzaG9wSXRlbS5jb3VudCk7XG4gICAgICAgICAgICBpZiAoIWFkZFN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihgW1Nob3BVSV0g5re75Yqg6YGT5YW35aSx6LSlYCk7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5re75Yqg6YGT5YW35aSx6LSl77yM6ZyA6KaB5Zue6YCA6YeR5biB77yI6L+Z6YeM566A5YyW5aSE55CG77yM5a6e6ZmF5bqU6K+l55So5LqL5Yqh77yJXG4gICAgICAgICAgICAgICAgYXdhaXQgQ29pbk1hbmFnZXIuYWRkQ29pbnMoc2hvcEl0ZW0ucHJpY2UpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2MubG9nKGBbU2hvcFVJXSDinJMg6LSt5Lmw5oiQ5YqfOiAke3Nob3BJdGVtLm5hbWV9IHgke3Nob3BJdGVtLmNvdW50fWApO1xuXG4gICAgICAgICAgICAvLyDmm7TmlrDph5HluIHmmL7npLpcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ29pbkRpc3BsYXkoKTtcblxuICAgICAgICAgICAgLy8gVE9ETzog5pi+56S66LSt5Lmw5oiQ5Yqf5o+Q56S6VUlcblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY2MuZXJyb3IoYFtTaG9wVUldIOi0reS5sOWVhuWTgeWksei0pTpgLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yi35paw77yI6YeN5paw5Yqg6L296YeR5biB5ZKM5ZWG5ZOB5YiX6KGo77yJXG4gICAgICovXG4gICAgYXN5bmMgcmVmcmVzaCgpIHtcbiAgICAgICAgY2MubG9nKFwiW1Nob3BVSV0g5Yi35paw5ZWG5Z+O5pWw5o2uXCIpO1xuICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvaW5EaXNwbGF5KCk7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSAwOyAvLyDph43nva7liLDnrKzkuIDpobVcbiAgICAgICAgdGhpcy5sb2FkU2hvcEl0ZW1zKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOi/lOWbnuaMiemSrueCueWHu+S6i+S7tlxuICAgICAqL1xuICAgIG9uQmFja0NsaWNrKCkge1xuICAgICAgICBjYy5sb2coXCJbU2hvcFVJXSDov5Tlm57mjInpkq7ngrnlh7tcIik7XG4gICAgICAgIC8vIOi/lOWbnuS4u+iPnOWNleWcuuaZr1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJNYWluTWVudVwiKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog57+76aG177ya6Lez6L2s5Yiw5oyH5a6a6aG156CBXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBhZ2UgLSDpobXnoIHvvIjku44w5byA5aeL77yJXG4gICAgICovXG4gICAgZ29Ub1BhZ2UocGFnZSkge1xuICAgICAgICBjb25zdCBhbGxTaG9wSXRlbXMgPSBTaG9wQ29uZmlnLmdldEFsbEl0ZW1zKCk7XG4gICAgICAgIGNvbnN0IHRvdGFsSXRlbXMgPSBhbGxTaG9wSXRlbXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBpdGVtc1BlclBhZ2UgPSB0aGlzLml0ZW1zUGVyUGFnZSB8fCA4O1xuICAgICAgICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKHRvdGFsSXRlbXMgLyBpdGVtc1BlclBhZ2UpKTtcblxuICAgICAgICBpZiAocGFnZSA8IDAgfHwgcGFnZSA+PSB0b3RhbFBhZ2VzKSB7XG4gICAgICAgICAgICBjYy53YXJuKGBbU2hvcFVJXSDml6DmlYjnmoTpobXnoIE6ICR7cGFnZX3vvIzmgLvpobXmlbA6ICR7dG90YWxQYWdlc31gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgICAgICB0aGlzLmxvYWRTaG9wSXRlbXMoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog57+76aG177ya5LiK5LiA6aG1XG4gICAgICovXG4gICAgZ29Ub1ByZXZQYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ29Ub1BhZ2UodGhpcy5jdXJyZW50UGFnZSAtIDEpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOe/u+mhte+8muS4i+S4gOmhtVxuICAgICAqL1xuICAgIGdvVG9OZXh0UGFnZSgpIHtcbiAgICAgICAgY29uc3QgYWxsU2hvcEl0ZW1zID0gU2hvcENvbmZpZy5nZXRBbGxJdGVtcygpO1xuICAgICAgICBjb25zdCB0b3RhbEl0ZW1zID0gYWxsU2hvcEl0ZW1zLmxlbmd0aDtcbiAgICAgICAgY29uc3QgaXRlbXNQZXJQYWdlID0gdGhpcy5pdGVtc1BlclBhZ2UgfHwgODtcbiAgICAgICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGgubWF4KDEsIE1hdGguY2VpbCh0b3RhbEl0ZW1zIC8gaXRlbXNQZXJQYWdlKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPCB0b3RhbFBhZ2VzIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5nb1RvUGFnZSh0aGlzLmN1cnJlbnRQYWdlICsgMSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5pu05paw57+76aG15oyJ6ZKu54q25oCB77yI56aB55SoL+WQr+eUqO+8iVxuICAgICAqL1xuICAgIHVwZGF0ZVBhZ2VCdXR0b25zKCkge1xuICAgICAgICBjb25zdCBhbGxTaG9wSXRlbXMgPSBTaG9wQ29uZmlnLmdldEFsbEl0ZW1zKCk7XG4gICAgICAgIGNvbnN0IHRvdGFsSXRlbXMgPSBhbGxTaG9wSXRlbXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBpdGVtc1BlclBhZ2UgPSB0aGlzLml0ZW1zUGVyUGFnZSB8fCA4O1xuICAgICAgICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKHRvdGFsSXRlbXMgLyBpdGVtc1BlclBhZ2UpKTtcblxuICAgICAgICAvLyDmm7TmlrDkuIrkuIDpobXmjInpkq5cbiAgICAgICAgaWYgKHRoaXMucHJldlBhZ2VCdXR0b24pIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZCdXR0b24gPSB0aGlzLnByZXZQYWdlQnV0dG9uLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgaWYgKHByZXZCdXR0b24pIHtcbiAgICAgICAgICAgICAgICBwcmV2QnV0dG9uLmludGVyYWN0YWJsZSA9IHRoaXMuY3VycmVudFBhZ2UgPiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5pu05paw5oyJ6ZKu6YCP5piO5bqm77yI56aB55So5pe25Y2K6YCP5piO77yJXG4gICAgICAgICAgICB0aGlzLnByZXZQYWdlQnV0dG9uLm9wYWNpdHkgPSB0aGlzLmN1cnJlbnRQYWdlID4gMCA/IDI1NSA6IDEyODtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOabtOaWsOS4i+S4gOmhteaMiemSrlxuICAgICAgICBpZiAodGhpcy5uZXh0UGFnZUJ1dHRvbikge1xuICAgICAgICAgICAgY29uc3QgbmV4dEJ1dHRvbiA9IHRoaXMubmV4dFBhZ2VCdXR0b24uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICBpZiAobmV4dEJ1dHRvbikge1xuICAgICAgICAgICAgICAgIG5leHRCdXR0b24uaW50ZXJhY3RhYmxlID0gdGhpcy5jdXJyZW50UGFnZSA8IHRvdGFsUGFnZXMgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5pu05paw5oyJ6ZKu6YCP5piO5bqm77yI56aB55So5pe25Y2K6YCP5piO77yJXG4gICAgICAgICAgICB0aGlzLm5leHRQYWdlQnV0dG9uLm9wYWNpdHkgPSB0aGlzLmN1cnJlbnRQYWdlIDwgdG90YWxQYWdlcyAtIDEgPyAyNTUgOiAxMjg7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5pu05paw6aG156CB5pi+56S65qCH562+XG4gICAgICovXG4gICAgdXBkYXRlUGFnZUxhYmVsKCkge1xuICAgICAgICBpZiAoIXRoaXMucGFnZUxhYmVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbGxTaG9wSXRlbXMgPSBTaG9wQ29uZmlnLmdldEFsbEl0ZW1zKCk7XG4gICAgICAgIGNvbnN0IHRvdGFsSXRlbXMgPSBhbGxTaG9wSXRlbXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBpdGVtc1BlclBhZ2UgPSB0aGlzLml0ZW1zUGVyUGFnZSB8fCA4O1xuICAgICAgICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKHRvdGFsSXRlbXMgLyBpdGVtc1BlclBhZ2UpKTtcblxuICAgICAgICB0aGlzLnBhZ2VMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLmN1cnJlbnRQYWdlICsgMX0gLyAke3RvdGFsUGFnZXN9YDtcbiAgICB9XG59KTtcbiJdfQ==