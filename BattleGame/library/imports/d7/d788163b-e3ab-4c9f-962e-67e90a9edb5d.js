"use strict";
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