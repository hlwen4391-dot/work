
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
cc._RF.push(module, '39c7cWSuT9F0qGocWVQ5qsv', 'ShopUI');
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
      "default": 180,
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
      _this3._layoutShopItem(itemNode, index, shopItems.length);

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
   * 设置容器背景（白色卡片效果）
   * @private
   */
  _setupContainerBackground: function _setupContainerBackground() {
    // 检查是否已有背景节点
    var bgNode = this.itemListContainer.getChildByName("Background");
    if (!bgNode) {
      bgNode = new cc.Node("Background");
      var graphics = bgNode.addComponent(cc.Graphics);

      // 绘制白色圆角矩形背景
      var width = this.itemListContainer.width;
      var height = this.itemListContainer.height;
      var radius = 10; // 圆角半径

      graphics.fillColor = new cc.Color(255, 255, 255, 255);
      graphics.roundRect(-width / 2, -height / 2, width, height, radius);
      graphics.fill();

      // 设置阴影效果（可选）
      bgNode.setContentSize(width, height);
      bgNode.setAnchorPoint(0.5, 0.5);
      bgNode.setPosition(0, 0);
      bgNode.zIndex = -1; // 背景在最下层

      this.itemListContainer.addChild(bgNode);
    }
  },
  /**
   * 布局商品项（设置位置）
   * @private
   * @param {cc.Node} itemNode - 商品项节点
   * @param {number} index - 商品索引
   * @param {number} totalItems - 商品总数
   */
  _layoutShopItem: function _layoutShopItem(itemNode, index, totalItems) {
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

    // 设置名称
    if (nameLabel) {
      var label = nameLabel.getComponent(cc.Label);
      if (label) {
        label.string = shopItem.name;
        // 设置字体样式
        label.fontSize = 24;
        label.node.color = cc.Color.WHITE;
        label.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
      }
    }

    // 设置价格
    if (priceLabel) {
      var _label = priceLabel.getComponent(cc.Label);
      if (_label) {
        _label.string = shopItem.price + " \u91D1\u5E01";
        // 设置字体样式（价格更突出）
        _label.fontSize = 28;
        _label.node.color = new cc.Color(255, 215, 0, 255); // 金色
        _label.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
      }
    }

    // 设置描述
    if (descriptionLabel) {
      var _label2 = descriptionLabel.getComponent(cc.Label);
      if (_label2) {
        _label2.string = shopItem.description || "";
        // 设置字体样式
        _label2.fontSize = 18;
        _label2.node.color = new cc.Color(200, 200, 200, 255); // 浅灰色
        _label2.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
        _label2.enableWrapText = true; // 允许换行
        // 设置描述标签宽度（留出左右边距）
        var descWidth = this.shopItemWidth - 20;
        descriptionLabel.setContentSize(descWidth, 60);
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
   * 布局商品项内部内容（参考专业商城布局：图标->名称->价格->按钮）
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
    var padding = 12; // 内边距

    // ⭐ 调试：输出布局信息
    cc.log("[ShopUI] \u5E03\u5C40\u5546\u54C1\u9879\u5185\u5BB9: \u5927\u5C0F=" + itemWidth + "x" + itemHeight);

    // 参考布局：图标在顶部，名称在图标下方，价格在名称下方，按钮在最底部
    // 移除描述标签（参考图中没有单独的描述区域）

    // 图标位置（顶部，居中）
    if (iconNode) {
      iconNode.setPosition(0, itemHeight / 2 - padding - 50); // 距离顶部50px
      iconNode.setContentSize(80, 80); // 图标大小
      iconNode.setAnchorPoint(0.5, 0.5);
      iconNode.active = true;
      iconNode.opacity = 255;
      cc.log("[ShopUI]   \u56FE\u6807\u4F4D\u7F6E: (0, " + (itemHeight / 2 - padding - 50).toFixed(1) + ")");
    } else {
      cc.warn("[ShopUI]   \u672A\u627E\u5230Icon\u8282\u70B9");
    }

    // 名称位置（图标下方，居中）
    if (nameLabel) {
      nameLabel.setPosition(0, itemHeight / 2 - padding - 140); // 图标下方约90px
      nameLabel.setContentSize(itemWidth - padding * 2, 28);
      nameLabel.setAnchorPoint(0.5, 0.5);
      nameLabel.active = true;
      cc.log("[ShopUI]   \u540D\u79F0\u4F4D\u7F6E: (0, " + (itemHeight / 2 - padding - 140).toFixed(1) + ")");
    } else {
      cc.warn("[ShopUI]   \u672A\u627E\u5230NameLabel\u8282\u70B9");
    }

    // 价格位置（名称下方，居中，带金币图标效果）
    if (priceLabel) {
      priceLabel.setPosition(0, itemHeight / 2 - padding - 175); // 名称下方约35px
      priceLabel.setContentSize(itemWidth - padding * 2, 30);
      priceLabel.setAnchorPoint(0.5, 0.5);
      priceLabel.active = true;
      cc.log("[ShopUI]   \u4EF7\u683C\u4F4D\u7F6E: (0, " + (itemHeight / 2 - padding - 175).toFixed(1) + ")");
    } else {
      cc.warn("[ShopUI]   \u672A\u627E\u5230PriceLabel\u8282\u70B9");
    }

    // 描述位置（隐藏或放在价格下方，小字体）
    if (descriptionLabel) {
      // 参考图中没有明显的描述区域，可以隐藏或放在价格下方
      descriptionLabel.setPosition(0, itemHeight / 2 - padding - 200);
      descriptionLabel.setContentSize(itemWidth - padding * 2, 40);
      descriptionLabel.setAnchorPoint(0.5, 0.5);
      // 可选：隐藏描述
      descriptionLabel.active = false; // 默认隐藏描述
    }

    // 购买按钮位置（底部，居中，蓝色按钮样式）
    if (buyButton) {
      buyButton.setPosition(0, -itemHeight / 2 + padding + 25); // 距离底部25px
      buyButton.setContentSize(itemWidth - padding * 2, 40);
      buyButton.setAnchorPoint(0.5, 0.5);
      buyButton.active = true;

      // 设置按钮背景颜色（蓝色，参考图）
      var buttonSprite = buyButton.getComponent(cc.Sprite);
      if (!buttonSprite) {
        // 如果没有Sprite组件，添加Graphics组件绘制按钮背景
        var graphics = buyButton.getComponent(cc.Graphics);
        if (!graphics) {
          graphics = buyButton.addComponent(cc.Graphics);
        }
        var btnWidth = itemWidth - padding * 2;
        var btnHeight = 40;
        graphics.fillColor = new cc.Color(70, 130, 200, 255); // 蓝色
        graphics.roundRect(-btnWidth / 2, -btnHeight / 2, btnWidth, btnHeight, 5);
        graphics.fill();
      }
      cc.log("[ShopUI]   \u6309\u94AE\u4F4D\u7F6E: (0, " + (-itemHeight / 2 + padding + 25).toFixed(1) + ")");
    } else {
      cc.warn("[ShopUI]   \u672A\u627E\u5230\u8D2D\u4E70\u6309\u94AE\u8282\u70B9\uFF08\u5C1D\u8BD5\u67E5\u627E\"\u8D2D\u4E70\"\u6216\"BuyButton\"\uFF09");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxTaG9wVUkuanMiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJTaG9wQ29uZmlnIiwicmVxdWlyZSIsIkNvaW5NYW5hZ2VyIiwiSXRlbURhdGFNYW5hZ2VyIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpdGVtTGlzdENvbnRhaW5lciIsIk5vZGUiLCJ0b29sdGlwIiwic2hvcEl0ZW1QcmVmYWIiLCJQcmVmYWIiLCJjb2luTGFiZWwiLCJMYWJlbCIsImJhY2tCdXR0b24iLCJyZWZyZXNoQnV0dG9uIiwic2hvcEl0ZW1XaWR0aCIsInNob3BJdGVtSGVpZ2h0Iiwic2hvcEl0ZW1TcGFjaW5nIiwic2hvcENvbHVtbnMiLCJzaG9wUGFkZGluZyIsIm9uTG9hZCIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwib25CYWNrQ2xpY2siLCJyZWZyZXNoIiwiaW5pdCIsIl90aGlzIiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJsb2ciLCJ1cGRhdGVDb2luRGlzcGxheSIsImxvYWRTaG9wSXRlbXMiLCJfdGhpczIiLCJfY2FsbGVlMiIsImNvaW5zIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZ2V0Q29pbnMiLCJzdHJpbmciLCJ0MCIsIl90aGlzMyIsInJlbW92ZUFsbENoaWxkcmVuIiwic2hvcEl0ZW1zIiwiZ2V0QWxsSXRlbXMiLCJfc2V0dXBDb250YWluZXJMYXlvdXQiLCJzaG9wSXRlbSIsImluZGV4IiwiaXRlbU5vZGUiLCJpbnN0YW50aWF0ZSIsImlkIiwiX2xheW91dFNob3BJdGVtIiwic2V0dXBTaG9wSXRlbSIsImFkZENoaWxkIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsIml0ZW1Db3VudCIsInJvd3MiLCJNYXRoIiwiY2VpbCIsImNvbnRhaW5lcldpZHRoIiwiY29udGFpbmVySGVpZ2h0Iiwic2V0Q29udGVudFNpemUiLCJzZXRBbmNob3JQb2ludCIsInNldFBvc2l0aW9uIiwiX3NldHVwQ29udGFpbmVyQmFja2dyb3VuZCIsImJnTm9kZSIsImdldENoaWxkQnlOYW1lIiwiZ3JhcGhpY3MiLCJhZGRDb21wb25lbnQiLCJHcmFwaGljcyIsInJhZGl1cyIsImZpbGxDb2xvciIsIkNvbG9yIiwicm91bmRSZWN0IiwiZmlsbCIsInpJbmRleCIsInRvdGFsSXRlbXMiLCJyb3ciLCJmbG9vciIsImNvbCIsInRvdGFsUm93cyIsInRvdGFsV2lkdGgiLCJ0b3RhbEhlaWdodCIsInN0YXJ0WCIsInN0YXJ0WSIsIl90aGlzNCIsIm5hbWVMYWJlbCIsInByaWNlTGFiZWwiLCJkZXNjcmlwdGlvbkxhYmVsIiwiaWNvbk5vZGUiLCJidXlCdXR0b24iLCJidXlCdXR0b25OYW1lIiwiX2xheW91dFNob3BJdGVtQ29udGVudCIsImxhYmVsIiwiZ2V0Q29tcG9uZW50IiwiZm9udFNpemUiLCJub2RlIiwiY29sb3IiLCJXSElURSIsImhvcml6b250YWxBbGlnbiIsIkhvcml6b250YWxBbGlnbiIsIkNFTlRFUiIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJlbmFibGVXcmFwVGV4dCIsImRlc2NXaWR0aCIsImljb24iLCJzcHJpdGUiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsImJ1dHRvbiIsIkJ1dHRvbiIsImxhYmVsQ29tcCIsInZlcnRpY2FsQWxpZ24iLCJWZXJ0aWNhbEFsaWduIiwib2ZmIiwib25CdXlJdGVtIiwiX3Nob3BJdGVtRGF0YSIsIml0ZW1IZWlnaHQiLCJpdGVtV2lkdGgiLCJwYWRkaW5nIiwiYWN0aXZlIiwib3BhY2l0eSIsInRvRml4ZWQiLCJ3YXJuIiwiYnV0dG9uU3ByaXRlIiwiYnRuV2lkdGgiLCJidG5IZWlnaHQiLCJfdGhpczUiLCJfY2FsbGVlMyIsImN1cnJlbnRDb2lucyIsIlNlcnZlckNvbmZpZyIsInJlc3BvbnNlIiwiZXJyb3JEYXRhIiwiZGF0YSIsInNwZW5kU3VjY2VzcyIsImFkZFN1Y2Nlc3MiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJnZXRTdG9yYWdlTW9kZSIsImZldGNoIiwiZ2V0QmFzZVVSTCIsImhlYWRlcnMiLCJfZXh0ZW5kcyIsImdldEF1dGhIZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzaG9wSXRlbUlkIiwiaXRlbUlkIiwiY291bnQiLCJvayIsImpzb24iLCJzdGF0dXMiLCJzcGVuZENvaW5zIiwiYWRkSXRlbSIsImFkZENvaW5zIiwiX3RoaXM2IiwiX2NhbGxlZTQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJkaXJlY3RvciIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBLHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxPQUFBLFNBQUFBLE9BQUEsT0FBQUMsRUFBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsTUFBQSxHQUFBSCxFQUFBLENBQUFJLGNBQUEsRUFBQUMsY0FBQSxHQUFBSixNQUFBLENBQUFJLGNBQUEsY0FBQUMsR0FBQSxFQUFBQyxHQUFBLEVBQUFDLElBQUEsSUFBQUYsR0FBQSxDQUFBQyxHQUFBLElBQUFDLElBQUEsQ0FBQUMsS0FBQSxLQUFBQyxPQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsY0FBQSxHQUFBRixPQUFBLENBQUFHLFFBQUEsa0JBQUFDLG1CQUFBLEdBQUFKLE9BQUEsQ0FBQUssYUFBQSx1QkFBQUMsaUJBQUEsR0FBQU4sT0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBWixHQUFBLEVBQUFDLEdBQUEsRUFBQUUsS0FBQSxXQUFBUixNQUFBLENBQUFJLGNBQUEsQ0FBQUMsR0FBQSxFQUFBQyxHQUFBLElBQUFFLEtBQUEsRUFBQUEsS0FBQSxFQUFBVSxVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBZixHQUFBLENBQUFDLEdBQUEsV0FBQVcsTUFBQSxtQkFBQUksR0FBQSxJQUFBSixNQUFBLFlBQUFBLE9BQUFaLEdBQUEsRUFBQUMsR0FBQSxFQUFBRSxLQUFBLFdBQUFILEdBQUEsQ0FBQUMsR0FBQSxJQUFBRSxLQUFBLGdCQUFBYyxLQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLFFBQUFDLGNBQUEsR0FBQUgsT0FBQSxJQUFBQSxPQUFBLENBQUF2QixTQUFBLFlBQUEyQixTQUFBLEdB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O0VBQ1U1RyxPQUFPLFdBQUFBLFFBQUEsRUFBRztJQUFBLElBQUF3SSxNQUFBO0lBQUEsT0FBQXZLLGlCQUFBLGVBQUFoSixtQkFBQSxHQUFBNkcsSUFBQSxVQUFBMk0sU0FBQTtNQUFBLE9BQUF4VCxtQkFBQSxHQUFBeUIsSUFBQSxVQUFBZ1MsVUFBQUMsU0FBQTtRQUFBLGtCQUFBQSxTQUFBLENBQUFoTSxJQUFBLEdBQUFnTSxTQUFBLENBQUF0TyxJQUFBO1VBQUE7WUFDWm9FLEVBQUUsQ0FBQzZCLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztZQUFDcUksU0FBQSxDQUFBdE8sSUFBQTtZQUFBLE9BQ3BCbU8sTUFBSSxDQUFDakksaUJBQWlCLEVBQUU7VUFBQTtZQUM5QmlJLE1BQUksQ0FBQ2hJLGFBQWEsRUFBRTtVQUFDO1VBQUE7WUFBQSxPQUFBbUksU0FBQSxDQUFBN0wsSUFBQTtRQUFBO01BQUEsR0FBQTJMLFFBQUE7SUFBQTtFQUN6QixDQUFDO0VBRUQ7QUFDSjtBQUNBO0VBQ0kxSSxXQUFXLFdBQUFBLFlBQUEsRUFBRztJQUNWdEIsRUFBRSxDQUFDNkIsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0lBQ3pCO0lBQ0E3QixFQUFFLENBQUNtSyxRQUFRLENBQUNDLFNBQVMsQ0FBQyxVQUFVLENBQUM7RUFDckM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5ZWG5Z+OVUnnu4Tku7ZcbiAqIOi0n+i0o+WxleekuuWVhuWTgeWIl+ihqOOAgeWkhOeQhui0reS5sOOAgeaYvuekuumHkeW4geetiVxuICovXG5jb25zdCBTaG9wQ29uZmlnID0gcmVxdWlyZShcIlNob3BDb25maWdcIik7XG5jb25zdCBDb2luTWFuYWdlciA9IHJlcXVpcmUoXCJDb2luTWFuYWdlclwiKTtcbmNvbnN0IEl0ZW1EYXRhTWFuYWdlciA9IHJlcXVpcmUoXCJJdGVtRGF0YU1hbmFnZXJcIik7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIOWVhuWTgeWIl+ihqOWuueWZqFxuICAgICAgICBpdGVtTGlzdENvbnRhaW5lcjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWVhuWTgeWIl+ihqOWuueWZqOiKgueCue+8iOeUqOS6juaUvue9ruWVhuWTgemhue+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5ZWG5ZOB6aG5UHJlZmFiXG4gICAgICAgIHNob3BJdGVtUHJlZmFiOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLllYblk4HpoblQcmVmYWLvvIjljIXlkKvlm77moIfjgIHlkI3np7DjgIHku7fmoLzjgIHotK3kubDmjInpkq7nrYnvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOmHkeW4geaYvuekuuagh+etvlxuICAgICAgICBjb2luTGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6YeR5biB5pWw6YeP5pi+56S65qCH562+XCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDov5Tlm57mjInpkq5cbiAgICAgICAgYmFja0J1dHRvbjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICB0b29sdGlwOiBcIui/lOWbnuaMiemSruiKgueCuVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5Yi35paw5oyJ6ZKu77yI5Y+v6YCJ77yJXG4gICAgICAgIHJlZnJlc2hCdXR0b246IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLliLfmlrDmjInpkq7oioLngrnvvIjliLfmlrDph5HluIHlkozllYblk4HliJfooajvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOWVhuWTgemhueW4g+WxgOmFjee9ru+8iOWPguiAg+S4k+S4muWVhuWfjuW4g+WxgO+8iVxuICAgICAgICBzaG9wSXRlbVdpZHRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAxODAsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWVhuWTgemhueWuveW6pu+8iOWNoeeJh+WuveW6pu+8iVwiXG4gICAgICAgIH0sXG4gICAgICAgIHNob3BJdGVtSGVpZ2h0OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAyNDAsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWVhuWTgemhuemrmOW6pu+8iOWNoeeJh+mrmOW6pu+8iVwiXG4gICAgICAgIH0sXG4gICAgICAgIHNob3BJdGVtU3BhY2luZzoge1xuICAgICAgICAgICAgZGVmYXVsdDogMTUsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWVhuWTgemhueS5i+mXtOeahOmXtOi3nVwiXG4gICAgICAgIH0sXG4gICAgICAgIHNob3BDb2x1bW5zOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiA0LFxuICAgICAgICAgICAgdG9vbHRpcDogXCLllYblk4HliJfooajliJfmlbDvvIjmr4/ooYzmmL7npLrnmoTllYblk4HmlbDph4/vvIzlj4LogIPlm77mmK805YiX77yJXCJcbiAgICAgICAgfSxcbiAgICAgICAgc2hvcFBhZGRpbmc6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDIwLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLllYblk4HliJfooajlrrnlmajnmoTlhoXovrnot51cIlxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8g57uR5a6a6L+U5Zue5oyJ6ZKu5LqL5Lu2XG4gICAgICAgIGlmICh0aGlzLmJhY2tCdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuYmFja0J1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25CYWNrQ2xpY2ssIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g57uR5a6a5Yi35paw5oyJ6ZKu5LqL5Lu2XG4gICAgICAgIGlmICh0aGlzLnJlZnJlc2hCdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMucmVmcmVzaCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5ZWG5Z+OVUlcbiAgICAgKi9cbiAgICBhc3luYyBpbml0KCkge1xuICAgICAgICBjYy5sb2coXCJbU2hvcFVJXSDliJ3lp4vljJbllYbln45VSVwiKTtcblxuICAgICAgICAvLyDliLfmlrDph5HluIHmmL7npLpcbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVDb2luRGlzcGxheSgpO1xuXG4gICAgICAgIC8vIOWKoOi9veWVhuWTgeWIl+ihqFxuICAgICAgICB0aGlzLmxvYWRTaG9wSXRlbXMoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5pu05paw6YeR5biB5pi+56S6XG4gICAgICovXG4gICAgYXN5bmMgdXBkYXRlQ29pbkRpc3BsYXkoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBjb2lucyA9IGF3YWl0IENvaW5NYW5hZ2VyLmdldENvaW5zKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jb2luTGFiZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvaW5MYWJlbC5zdHJpbmcgPSBg6YeR5biBOiAke2NvaW5zfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5sb2coYFtTaG9wVUldIOmHkeW4geabtOaWsDogJHtjb2luc31gKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKGBbU2hvcFVJXSDmm7TmlrDph5HluIHmmL7npLrlpLHotKU6YCwgZXJyb3IpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29pbkxhYmVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2luTGFiZWwuc3RyaW5nID0gXCLph5HluIE6IC0tXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yqg6L295ZWG5ZOB5YiX6KGoXG4gICAgICovXG4gICAgbG9hZFNob3BJdGVtcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLml0ZW1MaXN0Q29udGFpbmVyKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIltTaG9wVUldIOWVhuWTgeWIl+ihqOWuueWZqOacquiuvue9rlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5zaG9wSXRlbVByZWZhYikge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJbU2hvcFVJXSDllYblk4HpoblQcmVmYWLmnKrorr7nva5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmuIXnqbrnjrDmnInllYblk4FcbiAgICAgICAgdGhpcy5pdGVtTGlzdENvbnRhaW5lci5yZW1vdmVBbGxDaGlsZHJlbigpO1xuXG4gICAgICAgIC8vIOiOt+WPluaJgOacieWVhuWTgVxuICAgICAgICBjb25zdCBzaG9wSXRlbXMgPSBTaG9wQ29uZmlnLmdldEFsbEl0ZW1zKCk7XG5cbiAgICAgICAgLy8g6K6+572u5a655Zmo5biD5bGA77yI572R5qC85biD5bGA77yJXG4gICAgICAgIHRoaXMuX3NldHVwQ29udGFpbmVyTGF5b3V0KHNob3BJdGVtcy5sZW5ndGgpO1xuXG4gICAgICAgIC8vIOS4uuavj+S4quWVhuWTgeWIm+W7ulVJ6aG5XG4gICAgICAgIHNob3BJdGVtcy5mb3JFYWNoKChzaG9wSXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5zaG9wSXRlbVByZWZhYik7XG4gICAgICAgICAgICBpdGVtTm9kZS5uYW1lID0gYFNob3BJdGVtXyR7c2hvcEl0ZW0uaWR9YDtcblxuICAgICAgICAgICAgLy8g4q2QIOWFs+mUru+8muWFiOiuvue9ruWVhuWTgemhueWkp+Wwj+WSjOS9jee9ru+8iOWcqOiuvue9ruWGheWuueS5i+WJje+8iVxuICAgICAgICAgICAgdGhpcy5fbGF5b3V0U2hvcEl0ZW0oaXRlbU5vZGUsIGluZGV4LCBzaG9wSXRlbXMubGVuZ3RoKTtcblxuICAgICAgICAgICAgLy8g6K6+572u5ZWG5ZOB5pWw5o2u77yI5YyF5ous5YaF6YOo5biD5bGA77yJXG4gICAgICAgICAgICB0aGlzLnNldHVwU2hvcEl0ZW0oaXRlbU5vZGUsIHNob3BJdGVtKTtcblxuICAgICAgICAgICAgLy8g5re75Yqg5Yiw5a655ZmoXG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0Q29udGFpbmVyLmFkZENoaWxkKGl0ZW1Ob2RlKTtcblxuICAgICAgICAgICAgY2MubG9nKGBbU2hvcFVJXSDliJvlu7rllYblk4HpobkgJHtpbmRleH06ICR7c2hvcEl0ZW0ubmFtZX0sIOS9jee9rjogKCR7aXRlbU5vZGUueH0sICR7aXRlbU5vZGUueX0pLCDlpKflsI86ICR7aXRlbU5vZGUud2lkdGh9IHggJHtpdGVtTm9kZS5oZWlnaHR9YCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNjLmxvZyhgW1Nob3BVSV0g5bey5Yqg6L29ICR7c2hvcEl0ZW1zLmxlbmd0aH0g5Liq5ZWG5ZOBYCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiuvue9ruWuueWZqOW4g+WxgO+8iOWPguiAg+S4k+S4muWVhuWfjuW4g+WxgO+8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGl0ZW1Db3VudCAtIOWVhuWTgeaVsOmHj1xuICAgICAqL1xuICAgIF9zZXR1cENvbnRhaW5lckxheW91dChpdGVtQ291bnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLml0ZW1MaXN0Q29udGFpbmVyKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIltTaG9wVUldIOWVhuWTgeWIl+ihqOWuueWZqOacquiuvue9ru+8jOaXoOazleW4g+WxgFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiuoeeul+mcgOimgeeahOihjOaVsFxuICAgICAgICBjb25zdCByb3dzID0gTWF0aC5jZWlsKGl0ZW1Db3VudCAvIHRoaXMuc2hvcENvbHVtbnMpO1xuXG4gICAgICAgIC8vIOiuoeeul+WuueWZqOWkp+Wwj++8iOWMheWQq+WGhei+uei3ne+8iVxuICAgICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IHRoaXMuc2hvcENvbHVtbnMgKiAodGhpcy5zaG9wSXRlbVdpZHRoICsgdGhpcy5zaG9wSXRlbVNwYWNpbmcpIC0gdGhpcy5zaG9wSXRlbVNwYWNpbmcgKyB0aGlzLnNob3BQYWRkaW5nICogMjtcbiAgICAgICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gcm93cyAqICh0aGlzLnNob3BJdGVtSGVpZ2h0ICsgdGhpcy5zaG9wSXRlbVNwYWNpbmcpIC0gdGhpcy5zaG9wSXRlbVNwYWNpbmcgKyB0aGlzLnNob3BQYWRkaW5nICogMjtcblxuICAgICAgICAvLyDorr7nva7lrrnlmajlpKflsI/lkozplJrngrlcbiAgICAgICAgdGhpcy5pdGVtTGlzdENvbnRhaW5lci5zZXRDb250ZW50U2l6ZShjb250YWluZXJXaWR0aCwgY29udGFpbmVySGVpZ2h0KTtcbiAgICAgICAgdGhpcy5pdGVtTGlzdENvbnRhaW5lci5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG4gICAgICAgIHRoaXMuaXRlbUxpc3RDb250YWluZXIuc2V0UG9zaXRpb24oMCwgMCk7IC8vIOehruS/neWuueWZqOWcqOS4reW/g1xuXG4gICAgICAgIC8vIOiuvue9ruWuueWZqOiDjOaZr++8iOWPr+mAie+8jOWmguaenOmcgOimgeeZveiJsuiDjOaZr+WNoeeJh+aViOaenO+8iVxuICAgICAgICB0aGlzLl9zZXR1cENvbnRhaW5lckJhY2tncm91bmQoKTtcblxuICAgICAgICBjYy5sb2coYFtTaG9wVUldIOKckyDlrrnlmajluIPlsYDlrozmiJA6ICR7dGhpcy5zaG9wQ29sdW1uc33liJcgeCAke3Jvd3N96KGMLCDlpKflsI86ICR7Y29udGFpbmVyV2lkdGh9IHggJHtjb250YWluZXJIZWlnaHR9LCDllYblk4HmlbA6ICR7aXRlbUNvdW50fWApO1xuICAgICAgICBjYy5sb2coYFtTaG9wVUldIOWVhuWTgemhuemFjee9rjog5a695bqmPSR7dGhpcy5zaG9wSXRlbVdpZHRofSwg6auY5bqmPSR7dGhpcy5zaG9wSXRlbUhlaWdodH0sIOmXtOi3nT0ke3RoaXMuc2hvcEl0ZW1TcGFjaW5nfWApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDorr7nva7lrrnlmajog4zmma/vvIjnmb3oibLljaHniYfmlYjmnpzvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9zZXR1cENvbnRhaW5lckJhY2tncm91bmQoKSB7XG4gICAgICAgIC8vIOajgOafpeaYr+WQpuW3suacieiDjOaZr+iKgueCuVxuICAgICAgICBsZXQgYmdOb2RlID0gdGhpcy5pdGVtTGlzdENvbnRhaW5lci5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIik7XG4gICAgICAgIGlmICghYmdOb2RlKSB7XG4gICAgICAgICAgICBiZ05vZGUgPSBuZXcgY2MuTm9kZShcIkJhY2tncm91bmRcIik7XG4gICAgICAgICAgICBjb25zdCBncmFwaGljcyA9IGJnTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuXG4gICAgICAgICAgICAvLyDnu5jliLbnmb3oibLlnIbop5Lnn6nlvaLog4zmma9cbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5pdGVtTGlzdENvbnRhaW5lci53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaXRlbUxpc3RDb250YWluZXIuaGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgcmFkaXVzID0gMTA7IC8vIOWchuinkuWNiuW+hFxuXG4gICAgICAgICAgICBncmFwaGljcy5maWxsQ29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgICAgIGdyYXBoaWNzLnJvdW5kUmVjdCgtd2lkdGggLyAyLCAtaGVpZ2h0IC8gMiwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmZpbGwoKTtcblxuICAgICAgICAgICAgLy8g6K6+572u6Zi05b2x5pWI5p6c77yI5Y+v6YCJ77yJXG4gICAgICAgICAgICBiZ05vZGUuc2V0Q29udGVudFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICBiZ05vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgICAgICAgICAgYmdOb2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICAgICAgYmdOb2RlLnpJbmRleCA9IC0xOyAvLyDog4zmma/lnKjmnIDkuIvlsYJcblxuICAgICAgICAgICAgdGhpcy5pdGVtTGlzdENvbnRhaW5lci5hZGRDaGlsZChiZ05vZGUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOW4g+WxgOWVhuWTgemhue+8iOiuvue9ruS9jee9ru+8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBpdGVtTm9kZSAtIOWVhuWTgemhueiKgueCuVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIOWVhuWTgee0ouW8lVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0b3RhbEl0ZW1zIC0g5ZWG5ZOB5oC75pWwXG4gICAgICovXG4gICAgX2xheW91dFNob3BJdGVtKGl0ZW1Ob2RlLCBpbmRleCwgdG90YWxJdGVtcykge1xuICAgICAgICAvLyDorqHnrpfooYzliJfkvY3nva5cbiAgICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpbmRleCAvIHRoaXMuc2hvcENvbHVtbnMpO1xuICAgICAgICBjb25zdCBjb2wgPSBpbmRleCAlIHRoaXMuc2hvcENvbHVtbnM7XG4gICAgICAgIGNvbnN0IHRvdGFsUm93cyA9IE1hdGguY2VpbCh0b3RhbEl0ZW1zIC8gdGhpcy5zaG9wQ29sdW1ucyk7XG5cbiAgICAgICAgLy8g6K6h566X5L2N572u77yI5bGF5Lit5biD5bGA77yJXG4gICAgICAgIGNvbnN0IHRvdGFsV2lkdGggPSB0aGlzLnNob3BDb2x1bW5zICogKHRoaXMuc2hvcEl0ZW1XaWR0aCArIHRoaXMuc2hvcEl0ZW1TcGFjaW5nKSAtIHRoaXMuc2hvcEl0ZW1TcGFjaW5nO1xuICAgICAgICBjb25zdCB0b3RhbEhlaWdodCA9IHRvdGFsUm93cyAqICh0aGlzLnNob3BJdGVtSGVpZ2h0ICsgdGhpcy5zaG9wSXRlbVNwYWNpbmcpIC0gdGhpcy5zaG9wSXRlbVNwYWNpbmc7XG5cbiAgICAgICAgY29uc3Qgc3RhcnRYID0gLXRvdGFsV2lkdGggLyAyICsgdGhpcy5zaG9wSXRlbVdpZHRoIC8gMjtcbiAgICAgICAgY29uc3Qgc3RhcnRZID0gdG90YWxIZWlnaHQgLyAyIC0gdGhpcy5zaG9wSXRlbUhlaWdodCAvIDI7XG5cbiAgICAgICAgY29uc3QgeCA9IHN0YXJ0WCArIGNvbCAqICh0aGlzLnNob3BJdGVtV2lkdGggKyB0aGlzLnNob3BJdGVtU3BhY2luZyk7XG4gICAgICAgIGNvbnN0IHkgPSBzdGFydFkgLSByb3cgKiAodGhpcy5zaG9wSXRlbUhlaWdodCArIHRoaXMuc2hvcEl0ZW1TcGFjaW5nKTtcblxuICAgICAgICAvLyDorr7nva7llYblk4HpobnlpKflsI/lkozkvY3nva5cbiAgICAgICAgaXRlbU5vZGUuc2V0Q29udGVudFNpemUodGhpcy5zaG9wSXRlbVdpZHRoLCB0aGlzLnNob3BJdGVtSGVpZ2h0KTtcbiAgICAgICAgaXRlbU5vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgICAgICBpdGVtTm9kZS5zZXRQb3NpdGlvbih4LCB5KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6K6+572u5ZWG5ZOB6aG5VUlcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGl0ZW1Ob2RlIC0g5ZWG5ZOB6aG56IqC54K5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNob3BJdGVtIC0g5ZWG5ZOB5pWw5o2uXG4gICAgICovXG4gICAgc2V0dXBTaG9wSXRlbShpdGVtTm9kZSwgc2hvcEl0ZW0pIHtcbiAgICAgICAgLy8g5p+l5om+5a2Q6IqC54K577yI5qC55o2uUHJlZmFi57uT5p6E6LCD5pW077yJXG4gICAgICAgIGNvbnN0IG5hbWVMYWJlbCA9IGl0ZW1Ob2RlLmdldENoaWxkQnlOYW1lKFwiTmFtZUxhYmVsXCIpO1xuICAgICAgICBjb25zdCBwcmljZUxhYmVsID0gaXRlbU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQcmljZUxhYmVsXCIpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gaXRlbU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJEZXNjcmlwdGlvbkxhYmVsXCIpO1xuICAgICAgICBjb25zdCBpY29uTm9kZSA9IGl0ZW1Ob2RlLmdldENoaWxkQnlOYW1lKFwiSWNvblwiKTtcbiAgICAgICAgLy8g4q2QIOS/ruaUue+8muaMiemSruWQjeensOaYr1wi6LSt5LmwXCLogIzkuI3mmK9cIkJ1eUJ1dHRvblwiXG4gICAgICAgIGNvbnN0IGJ1eUJ1dHRvbiA9IGl0ZW1Ob2RlLmdldENoaWxkQnlOYW1lKFwi6LSt5LmwXCIpIHx8IGl0ZW1Ob2RlLmdldENoaWxkQnlOYW1lKFwiQnV5QnV0dG9uXCIpO1xuXG4gICAgICAgIC8vIOKtkCDosIPor5XvvJrovpPlh7rmib7liLDnmoToioLngrlcbiAgICAgICAgY2MubG9nKGBbU2hvcFVJXSDorr7nva7llYblk4EgJHtzaG9wSXRlbS5uYW1lfTpgLCB7XG4gICAgICAgICAgICBuYW1lTGFiZWw6ICEhbmFtZUxhYmVsLFxuICAgICAgICAgICAgcHJpY2VMYWJlbDogISFwcmljZUxhYmVsLFxuICAgICAgICAgICAgZGVzY3JpcHRpb25MYWJlbDogISFkZXNjcmlwdGlvbkxhYmVsLFxuICAgICAgICAgICAgaWNvbk5vZGU6ICEhaWNvbk5vZGUsXG4gICAgICAgICAgICBidXlCdXR0b246ICEhYnV5QnV0dG9uLFxuICAgICAgICAgICAgYnV5QnV0dG9uTmFtZTogYnV5QnV0dG9uID8gYnV5QnV0dG9uLm5hbWUgOiAn5pyq5om+5YiwJ1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDorr7nva7llYblk4HpobnlhoXpg6jluIPlsYBcbiAgICAgICAgdGhpcy5fbGF5b3V0U2hvcEl0ZW1Db250ZW50KGl0ZW1Ob2RlLCBpY29uTm9kZSwgbmFtZUxhYmVsLCBwcmljZUxhYmVsLCBkZXNjcmlwdGlvbkxhYmVsLCBidXlCdXR0b24pO1xuXG4gICAgICAgIC8vIOiuvue9ruWQjeensFxuICAgICAgICBpZiAobmFtZUxhYmVsKSB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IG5hbWVMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gc2hvcEl0ZW0ubmFtZTtcbiAgICAgICAgICAgICAgICAvLyDorr7nva7lrZfkvZPmoLflvI9cbiAgICAgICAgICAgICAgICBsYWJlbC5mb250U2l6ZSA9IDI0O1xuICAgICAgICAgICAgICAgIGxhYmVsLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgICAgICBsYWJlbC5ob3Jpem9udGFsQWxpZ24gPSBjYy5MYWJlbC5Ib3Jpem9udGFsQWxpZ24uQ0VOVEVSO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g6K6+572u5Lu35qC8XG4gICAgICAgIGlmIChwcmljZUxhYmVsKSB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IHByaWNlTGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IGAke3Nob3BJdGVtLnByaWNlfSDph5HluIFgO1xuICAgICAgICAgICAgICAgIC8vIOiuvue9ruWtl+S9k+agt+W8j++8iOS7t+agvOabtOeqgeWHuu+8iVxuICAgICAgICAgICAgICAgIGxhYmVsLmZvbnRTaXplID0gMjg7XG4gICAgICAgICAgICAgICAgbGFiZWwubm9kZS5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDIxNSwgMCwgMjU1KTsgLy8g6YeR6ImyXG4gICAgICAgICAgICAgICAgbGFiZWwuaG9yaXpvbnRhbEFsaWduID0gY2MuTGFiZWwuSG9yaXpvbnRhbEFsaWduLkNFTlRFUjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiuvue9ruaPj+i/sFxuICAgICAgICBpZiAoZGVzY3JpcHRpb25MYWJlbCkge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkZXNjcmlwdGlvbkxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBzaG9wSXRlbS5kZXNjcmlwdGlvbiB8fCBcIlwiO1xuICAgICAgICAgICAgICAgIC8vIOiuvue9ruWtl+S9k+agt+W8j1xuICAgICAgICAgICAgICAgIGxhYmVsLmZvbnRTaXplID0gMTg7XG4gICAgICAgICAgICAgICAgbGFiZWwubm9kZS5jb2xvciA9IG5ldyBjYy5Db2xvcigyMDAsIDIwMCwgMjAwLCAyNTUpOyAvLyDmtYXngbDoibJcbiAgICAgICAgICAgICAgICBsYWJlbC5ob3Jpem9udGFsQWxpZ24gPSBjYy5MYWJlbC5Ib3Jpem9udGFsQWxpZ24uQ0VOVEVSO1xuICAgICAgICAgICAgICAgIGxhYmVsLmVuYWJsZVdyYXBUZXh0ID0gdHJ1ZTsgLy8g5YWB6K645o2i6KGMXG4gICAgICAgICAgICAgICAgLy8g6K6+572u5o+P6L+w5qCH562+5a695bqm77yI55WZ5Ye65bem5Y+z6L656Led77yJXG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY1dpZHRoID0gdGhpcy5zaG9wSXRlbVdpZHRoIC0gMjA7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5zZXRDb250ZW50U2l6ZShkZXNjV2lkdGgsIDYwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiuvue9ruWbvuagh++8iOWmguaenOacie+8iVxuICAgICAgICBpZiAoaWNvbk5vZGUpIHtcbiAgICAgICAgICAgIGlmIChzaG9wSXRlbS5pY29uKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlID0gaWNvbk5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNwcml0ZSkge1xuICAgICAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzaG9wSXRlbS5pY29uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOiuvue9ruWbvuagh+Wkp+Wwj+WSjOS9jee9rlxuICAgICAgICAgICAgaWNvbk5vZGUuc2V0Q29udGVudFNpemUoODAsIDgwKTtcbiAgICAgICAgICAgIGljb25Ob2RlLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiuvue9rui0reS5sOaMiemSru+8iOWPguiAg+S4k+S4muWVhuWfjuagt+W8j++8muiTneiJsuaMiemSru+8jOeZveiJsuaWh+Wtl++8iVxuICAgICAgICBpZiAoYnV5QnV0dG9uKSB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBidXlCdXR0b24uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgLy8g5p+l5om+5oyJ6ZKu5paH5a2X5qCH562+XG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gYnV5QnV0dG9uLmdldENoaWxkQnlOYW1lKFwiTGFiZWxcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzmsqHmnIlMYWJlbOWtkOiKgueCue+8jOWIm+W7uuS4gOS4qlxuICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IG5ldyBjYy5Ob2RlKFwiTGFiZWxcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsQ29tcCA9IGxhYmVsLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsQ29tcC5zdHJpbmcgPSBcIui0reS5sFwiOyAvLyDmjInpkq7mloflrZfmlLnkuLpcIui0reS5sFwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsQ29tcC5mb250U2l6ZSA9IDE4O1xuICAgICAgICAgICAgICAgICAgICBsYWJlbENvbXAubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbENvbXAuaG9yaXpvbnRhbEFsaWduID0gY2MuTGFiZWwuSG9yaXpvbnRhbEFsaWduLkNFTlRFUjtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxDb21wLnZlcnRpY2FsQWxpZ24gPSBjYy5MYWJlbC5WZXJ0aWNhbEFsaWduLkNFTlRFUjtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0Q29udGVudFNpemUoYnV5QnV0dG9uLndpZHRoLCBidXlCdXR0b24uaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgYnV5QnV0dG9uLmFkZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbENvbXAgPSBsYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWxDb21wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbENvbXAuc3RyaW5nID0gXCLotK3kubBcIjsgLy8g5oyJ6ZKu5paH5a2X5pS55Li6XCLotK3kubBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxDb21wLmZvbnRTaXplID0gMTg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbENvbXAubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxDb21wLmhvcml6b250YWxBbGlnbiA9IGNjLkxhYmVsLkhvcml6b250YWxBbGlnbi5DRU5URVI7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbENvbXAudmVydGljYWxBbGlnbiA9IGNjLkxhYmVsLlZlcnRpY2FsQWxpZ24uQ0VOVEVSO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDnu5HlrprotK3kubDmjInpkq7kuovku7ZcbiAgICAgICAgICAgIGJ1eUJ1dHRvbi5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKTsgLy8g5YWI56e76Zmk5pen5LqL5Lu2XG4gICAgICAgICAgICBidXlCdXR0b24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkJ1eUl0ZW0oc2hvcEl0ZW0pO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDkv53lrZjllYblk4HmlbDmja7liLDoioLngrlcbiAgICAgICAgaXRlbU5vZGUuX3Nob3BJdGVtRGF0YSA9IHNob3BJdGVtO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDluIPlsYDllYblk4HpobnlhoXpg6jlhoXlrrnvvIjlj4LogIPkuJPkuJrllYbln47luIPlsYDvvJrlm77moIctPuWQjeensC0+5Lu35qC8LT7mjInpkq7vvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gaXRlbU5vZGUgLSDllYblk4HpobnoioLngrlcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGljb25Ob2RlIC0g5Zu+5qCH6IqC54K5XG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBuYW1lTGFiZWwgLSDlkI3np7DmoIfnrb5cbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IHByaWNlTGFiZWwgLSDku7fmoLzmoIfnrb5cbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGRlc2NyaXB0aW9uTGFiZWwgLSDmj4/ov7DmoIfnrb5cbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGJ1eUJ1dHRvbiAtIOi0reS5sOaMiemSrlxuICAgICAqL1xuICAgIF9sYXlvdXRTaG9wSXRlbUNvbnRlbnQoaXRlbU5vZGUsIGljb25Ob2RlLCBuYW1lTGFiZWwsIHByaWNlTGFiZWwsIGRlc2NyaXB0aW9uTGFiZWwsIGJ1eUJ1dHRvbikge1xuICAgICAgICBjb25zdCBpdGVtSGVpZ2h0ID0gdGhpcy5zaG9wSXRlbUhlaWdodDtcbiAgICAgICAgY29uc3QgaXRlbVdpZHRoID0gdGhpcy5zaG9wSXRlbVdpZHRoO1xuICAgICAgICBjb25zdCBwYWRkaW5nID0gMTI7IC8vIOWGhei+uei3nVxuXG4gICAgICAgIC8vIOKtkCDosIPor5XvvJrovpPlh7rluIPlsYDkv6Hmga9cbiAgICAgICAgY2MubG9nKGBbU2hvcFVJXSDluIPlsYDllYblk4HpobnlhoXlrrk6IOWkp+Wwjz0ke2l0ZW1XaWR0aH14JHtpdGVtSGVpZ2h0fWApO1xuXG4gICAgICAgIC8vIOWPguiAg+W4g+WxgO+8muWbvuagh+WcqOmhtumDqO+8jOWQjeensOWcqOWbvuagh+S4i+aWue+8jOS7t+agvOWcqOWQjeensOS4i+aWue+8jOaMiemSruWcqOacgOW6lemDqFxuICAgICAgICAvLyDnp7vpmaTmj4/ov7DmoIfnrb7vvIjlj4LogIPlm77kuK3msqHmnInljZXni6znmoTmj4/ov7DljLrln5/vvIlcblxuICAgICAgICAvLyDlm77moIfkvY3nva7vvIjpobbpg6jvvIzlsYXkuK3vvIlcbiAgICAgICAgaWYgKGljb25Ob2RlKSB7XG4gICAgICAgICAgICBpY29uTm9kZS5zZXRQb3NpdGlvbigwLCBpdGVtSGVpZ2h0IC8gMiAtIHBhZGRpbmcgLSA1MCk7IC8vIOi3neemu+mhtumDqDUwcHhcbiAgICAgICAgICAgIGljb25Ob2RlLnNldENvbnRlbnRTaXplKDgwLCA4MCk7IC8vIOWbvuagh+Wkp+Wwj1xuICAgICAgICAgICAgaWNvbk5vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgICAgICAgICAgaWNvbk5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGljb25Ob2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICBjYy5sb2coYFtTaG9wVUldICAg5Zu+5qCH5L2N572uOiAoMCwgJHsoaXRlbUhlaWdodCAvIDIgLSBwYWRkaW5nIC0gNTApLnRvRml4ZWQoMSl9KWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2Mud2FybihgW1Nob3BVSV0gICDmnKrmib7liLBJY29u6IqC54K5YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlkI3np7DkvY3nva7vvIjlm77moIfkuIvmlrnvvIzlsYXkuK3vvIlcbiAgICAgICAgaWYgKG5hbWVMYWJlbCkge1xuICAgICAgICAgICAgbmFtZUxhYmVsLnNldFBvc2l0aW9uKDAsIGl0ZW1IZWlnaHQgLyAyIC0gcGFkZGluZyAtIDE0MCk7IC8vIOWbvuagh+S4i+aWuee6pjkwcHhcbiAgICAgICAgICAgIG5hbWVMYWJlbC5zZXRDb250ZW50U2l6ZShpdGVtV2lkdGggLSBwYWRkaW5nICogMiwgMjgpO1xuICAgICAgICAgICAgbmFtZUxhYmVsLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcbiAgICAgICAgICAgIG5hbWVMYWJlbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgY2MubG9nKGBbU2hvcFVJXSAgIOWQjeensOS9jee9rjogKDAsICR7KGl0ZW1IZWlnaHQgLyAyIC0gcGFkZGluZyAtIDE0MCkudG9GaXhlZCgxKX0pYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy53YXJuKGBbU2hvcFVJXSAgIOacquaJvuWIsE5hbWVMYWJlbOiKgueCuWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5Lu35qC85L2N572u77yI5ZCN56ew5LiL5pa577yM5bGF5Lit77yM5bim6YeR5biB5Zu+5qCH5pWI5p6c77yJXG4gICAgICAgIGlmIChwcmljZUxhYmVsKSB7XG4gICAgICAgICAgICBwcmljZUxhYmVsLnNldFBvc2l0aW9uKDAsIGl0ZW1IZWlnaHQgLyAyIC0gcGFkZGluZyAtIDE3NSk7IC8vIOWQjeensOS4i+aWuee6pjM1cHhcbiAgICAgICAgICAgIHByaWNlTGFiZWwuc2V0Q29udGVudFNpemUoaXRlbVdpZHRoIC0gcGFkZGluZyAqIDIsIDMwKTtcbiAgICAgICAgICAgIHByaWNlTGFiZWwuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgICAgICAgICAgcHJpY2VMYWJlbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgY2MubG9nKGBbU2hvcFVJXSAgIOS7t+agvOS9jee9rjogKDAsICR7KGl0ZW1IZWlnaHQgLyAyIC0gcGFkZGluZyAtIDE3NSkudG9GaXhlZCgxKX0pYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy53YXJuKGBbU2hvcFVJXSAgIOacquaJvuWIsFByaWNlTGFiZWzoioLngrlgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaPj+i/sOS9jee9ru+8iOmakOiXj+aIluaUvuWcqOS7t+agvOS4i+aWue+8jOWwj+Wtl+S9k++8iVxuICAgICAgICBpZiAoZGVzY3JpcHRpb25MYWJlbCkge1xuICAgICAgICAgICAgLy8g5Y+C6ICD5Zu+5Lit5rKh5pyJ5piO5pi+55qE5o+P6L+w5Yy65Z+f77yM5Y+v5Lul6ZqQ6JeP5oiW5pS+5Zyo5Lu35qC85LiL5pa5XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnNldFBvc2l0aW9uKDAsIGl0ZW1IZWlnaHQgLyAyIC0gcGFkZGluZyAtIDIwMCk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnNldENvbnRlbnRTaXplKGl0ZW1XaWR0aCAtIHBhZGRpbmcgKiAyLCA0MCk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcbiAgICAgICAgICAgIC8vIOWPr+mAie+8mumakOiXj+aPj+i/sFxuICAgICAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5hY3RpdmUgPSBmYWxzZTsgLy8g6buY6K6k6ZqQ6JeP5o+P6L+wXG4gICAgICAgIH1cblxuICAgICAgICAvLyDotK3kubDmjInpkq7kvY3nva7vvIjlupXpg6jvvIzlsYXkuK3vvIzok53oibLmjInpkq7moLflvI/vvIlcbiAgICAgICAgaWYgKGJ1eUJ1dHRvbikge1xuICAgICAgICAgICAgYnV5QnV0dG9uLnNldFBvc2l0aW9uKDAsIC1pdGVtSGVpZ2h0IC8gMiArIHBhZGRpbmcgKyAyNSk7IC8vIOi3neemu+W6lemDqDI1cHhcbiAgICAgICAgICAgIGJ1eUJ1dHRvbi5zZXRDb250ZW50U2l6ZShpdGVtV2lkdGggLSBwYWRkaW5nICogMiwgNDApO1xuICAgICAgICAgICAgYnV5QnV0dG9uLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcbiAgICAgICAgICAgIGJ1eUJ1dHRvbi5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyDorr7nva7mjInpkq7og4zmma/popzoibLvvIjok53oibLvvIzlj4LogIPlm77vvIlcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvblNwcml0ZSA9IGJ1eUJ1dHRvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIGlmICghYnV0dG9uU3ByaXRlKSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5rKh5pyJU3ByaXRl57uE5Lu277yM5re75YqgR3JhcGhpY3Pnu4Tku7bnu5jliLbmjInpkq7og4zmma9cbiAgICAgICAgICAgICAgICBsZXQgZ3JhcGhpY3MgPSBidXlCdXR0b24uZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgICAgICAgICBpZiAoIWdyYXBoaWNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzID0gYnV5QnV0dG9uLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGJ0bldpZHRoID0gaXRlbVdpZHRoIC0gcGFkZGluZyAqIDI7XG4gICAgICAgICAgICAgICAgY29uc3QgYnRuSGVpZ2h0ID0gNDA7XG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gbmV3IGNjLkNvbG9yKDcwLCAxMzAsIDIwMCwgMjU1KTsgLy8g6JOd6ImyXG4gICAgICAgICAgICAgICAgZ3JhcGhpY3Mucm91bmRSZWN0KC1idG5XaWR0aCAvIDIsIC1idG5IZWlnaHQgLyAyLCBidG5XaWR0aCwgYnRuSGVpZ2h0LCA1KTtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5maWxsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5sb2coYFtTaG9wVUldICAg5oyJ6ZKu5L2N572uOiAoMCwgJHsoLWl0ZW1IZWlnaHQgLyAyICsgcGFkZGluZyArIDI1KS50b0ZpeGVkKDEpfSlgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLndhcm4oYFtTaG9wVUldICAg5pyq5om+5Yiw6LSt5Lmw5oyJ6ZKu6IqC54K577yI5bCd6K+V5p+l5om+XCLotK3kubBcIuaIllwiQnV5QnV0dG9uXCLvvIlgKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDotK3kubDllYblk4FcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2hvcEl0ZW0gLSDllYblk4HmlbDmja5cbiAgICAgKi9cbiAgICBhc3luYyBvbkJ1eUl0ZW0oc2hvcEl0ZW0pIHtcbiAgICAgICAgY2MubG9nKGBbU2hvcFVJXSDlsJ3or5XotK3kubDllYblk4E6ICR7c2hvcEl0ZW0ubmFtZX0sIOS7t+agvDogJHtzaG9wSXRlbS5wcmljZX1gKTtcblxuICAgICAgICAvLyDmo4Dmn6Xph5HluIHmmK/lkKbotrPlpJ/vvIjmnKzlnLDmo4Dmn6XvvIzpgb/lhY3kuI3lv4XopoHnmoTor7fmsYLvvIlcbiAgICAgICAgY29uc3QgY3VycmVudENvaW5zID0gYXdhaXQgQ29pbk1hbmFnZXIuZ2V0Q29pbnMoKTtcbiAgICAgICAgaWYgKGN1cnJlbnRDb2lucyA8IHNob3BJdGVtLnByaWNlKSB7XG4gICAgICAgICAgICBjYy53YXJuKGBbU2hvcFVJXSDph5HluIHkuI3otrM6IOW9k+WJjSAke2N1cnJlbnRDb2luc30sIOmcgOimgSAke3Nob3BJdGVtLnByaWNlfWApO1xuICAgICAgICAgICAgLy8gVE9ETzog5pi+56S65o+Q56S6VUlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBTZXJ2ZXJDb25maWcgPSByZXF1aXJlKFwiU2VydmVyQ29uZmlnXCIpO1xuXG4gICAgICAgICAgICAvLyDlpoLmnpzkvb/nlKjmnI3liqHlmajmqKHlvI/vvIzkvb/nlKjmnI3liqHlmahBUEnotK3kubDvvIjmnI3liqHlmajkvJrlkIzml7blpITnkIbph5HluIHmiaPpmaTlkozpgZPlhbfmt7vliqDvvIlcbiAgICAgICAgICAgIGlmIChTZXJ2ZXJDb25maWcuZ2V0U3RvcmFnZU1vZGUoKSA9PT0gJ3NlcnZlcicgfHwgU2VydmVyQ29uZmlnLmdldFN0b3JhZ2VNb2RlKCkgPT09ICdoeWJyaWQnKSB7XG4gICAgICAgICAgICAgICAgLy8g4q2QIOS/ruWkje+8mmdldEJhc2VVUkwoKeW3sue7j+WMheWQqy9hcGnvvIzmiYDku6XkuI3pnIDopoHlho3liqAvYXBpXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtTZXJ2ZXJDb25maWcuZ2V0QmFzZVVSTCgpfS9zaG9wL3B1cmNoYXNlYCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLlNlcnZlckNvbmZpZy5nZXRBdXRoSGVhZGVycygpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3BJdGVtSWQ6IHNob3BJdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUlkOiBzaG9wSXRlbS5pdGVtSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogc2hvcEl0ZW0uY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogc2hvcEl0ZW0ucHJpY2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpLmNhdGNoKCgpID0+ICh7fSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JEYXRhLmVycm9yID09PSAnaW5zdWZmaWNpZW50X2NvaW5zJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2Mud2FybihgW1Nob3BVSV0g6YeR5biB5LiN6LazOiDlvZPliY0gJHtlcnJvckRhdGEuY3VycmVudENvaW5zfSwg6ZyA6KaBICR7c2hvcEl0ZW0ucHJpY2V9YCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYOi0reS5sOWksei0pTogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbU2hvcFVJXSDinJMg6LSt5Lmw5oiQ5YqfOiAke3Nob3BJdGVtLm5hbWV9IHgke3Nob3BJdGVtLmNvdW50fSwg5Ymp5L2Z6YeR5biBOiAke2RhdGEuY29pbnN9YCk7XG5cbiAgICAgICAgICAgICAgICAvLyDmm7TmlrDph5HluIHmmL7npLpcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvaW5EaXNwbGF5KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiDmmL7npLrotK3kubDmiJDlip/mj5DnpLpVSVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5pys5Zyw5qih5byP77ya5YiG5Yir5aSE55CG6YeR5biB5ZKM6YGT5YW3XG4gICAgICAgICAgICAvLyDmiaPpmaTph5HluIFcbiAgICAgICAgICAgIGNvbnN0IHNwZW5kU3VjY2VzcyA9IGF3YWl0IENvaW5NYW5hZ2VyLnNwZW5kQ29pbnMoc2hvcEl0ZW0ucHJpY2UpO1xuICAgICAgICAgICAgaWYgKCFzcGVuZFN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihgW1Nob3BVSV0g5omj6Zmk6YeR5biB5aSx6LSlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDmt7vliqDpgZPlhbfliLDog4zljIVcbiAgICAgICAgICAgIGNvbnN0IGFkZFN1Y2Nlc3MgPSBhd2FpdCBJdGVtRGF0YU1hbmFnZXIuYWRkSXRlbShzaG9wSXRlbS5pdGVtSWQsIHNob3BJdGVtLmNvdW50KTtcbiAgICAgICAgICAgIGlmICghYWRkU3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbU2hvcFVJXSDmt7vliqDpgZPlhbflpLHotKVgKTtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmt7vliqDpgZPlhbflpLHotKXvvIzpnIDopoHlm57pgIDph5HluIHvvIjov5nph4znroDljJblpITnkIbvvIzlrp7pmYXlupTor6XnlKjkuovliqHvvIlcbiAgICAgICAgICAgICAgICBhd2FpdCBDb2luTWFuYWdlci5hZGRDb2lucyhzaG9wSXRlbS5wcmljZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYy5sb2coYFtTaG9wVUldIOKckyDotK3kubDmiJDlip86ICR7c2hvcEl0ZW0ubmFtZX0geCR7c2hvcEl0ZW0uY291bnR9YCk7XG5cbiAgICAgICAgICAgIC8vIOabtOaWsOmHkeW4geaYvuekulxuICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVDb2luRGlzcGxheSgpO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiDmmL7npLrotK3kubDmiJDlip/mj5DnpLpVSVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihgW1Nob3BVSV0g6LSt5Lmw5ZWG5ZOB5aSx6LSlOmAsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDliLfmlrDvvIjph43mlrDliqDovb3ph5HluIHlkozllYblk4HliJfooajvvIlcbiAgICAgKi9cbiAgICBhc3luYyByZWZyZXNoKCkge1xuICAgICAgICBjYy5sb2coXCJbU2hvcFVJXSDliLfmlrDllYbln47mlbDmja5cIik7XG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ29pbkRpc3BsYXkoKTtcbiAgICAgICAgdGhpcy5sb2FkU2hvcEl0ZW1zKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOi/lOWbnuaMiemSrueCueWHu+S6i+S7tlxuICAgICAqL1xuICAgIG9uQmFja0NsaWNrKCkge1xuICAgICAgICBjYy5sb2coXCJbU2hvcFVJXSDov5Tlm57mjInpkq7ngrnlh7tcIik7XG4gICAgICAgIC8vIOi/lOWbnuS4u+iPnOWNleWcuuaZr1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJNYWluTWVudVwiKTtcbiAgICB9XG59KTtcbiJdfQ==