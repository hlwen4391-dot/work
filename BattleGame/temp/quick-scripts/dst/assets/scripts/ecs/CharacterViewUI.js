
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

    // 绑定点击事件（点击任意地方关闭属性面板）
    // 使用Canvas或场景根节点来捕获点击事件
    var canvas = cc.find("Canvas");
    if (canvas) {
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
        graphics.fillColor = new cc.Color(60, 60, 60, 200);
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
   * 设置道具格子内容
   * @private
   * @param {cc.Node} slotNode - 道具格子节点
   * @param {Object} item - 道具数据 { id, name, icon, count }
   */
  _setItemSlot: function _setItemSlot(slotNode, item) {
    var _this7 = this;
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

    // 记录触摸开始时间（用于区分点击和长按）
    slotNode._touchStartTime = null;
    slotNode.off(cc.Node.EventType.TOUCH_START);
    slotNode.on(cc.Node.EventType.TOUCH_START, function (event) {
      slotNode._touchStartTime = Date.now();
    }, this);

    // 绑定触摸结束事件（处理左键点击和长按）
    slotNode.off(cc.Node.EventType.TOUCH_END); // 先移除旧的事件
    slotNode.on(cc.Node.EventType.TOUCH_END, function (event) {
      var pressTime = slotNode._touchStartTime ? Date.now() - slotNode._touchStartTime : 0;
      var LONG_PRESS_TIME = 500; // 长按500毫秒

      if (pressTime >= LONG_PRESS_TIME) {
        // 长按：显示道具信息（移动设备上模拟右键）
        event.stopPropagation();
        _this7._showItemTooltipOnTouch(slotNode, item, event);
      } else if (pressTime > 0 && pressTime < LONG_PRESS_TIME) {
        // 短按：使用道具（左键点击）
        event.stopPropagation();
        _this7._onItemSlotClick(slotNode, item);
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
    var _this8 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var ItemSystem, result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!(!item || !item.config)) {
              _context3.next = 3;
              break;
            }
            cc.warn("[CharacterViewUI] 无效的道具数据");
            return _context3.abrupt("return");
          case 3:
            if (_this8.currentDisplayPrefab) {
              _context3.next = 6;
              break;
            }
            cc.warn("[CharacterViewUI] 请先选择一个角色");
            // 可以显示提示给用户
            return _context3.abrupt("return");
          case 6:
            ItemSystem = require("ItemSystem"); // 使用道具
            _context3.next = 9;
            return ItemSystem.useItem(_this8.currentDisplayPrefab, item.id);
          case 9:
            result = _context3.sent;
            if (!result.success) {
              _context3.next = 17;
              break;
            }
            cc.log("[CharacterViewUI] \u2713 \u4F7F\u7528\u9053\u5177\u6210\u529F: " + item.name + " - " + result.message);

            // 刷新道具栏显示
            _context3.next = 14;
            return _this8._updateInventory();
          case 14:
            // 更新角色属性显示（如果属性面板已打开）
            if (_this8.statsPanel && _this8.statsPanel.active && _this8.currentUnitData) {
              _this8._showStatsPanel(_this8.currentUnitData);
            }

            // TODO: 可以显示使用成功的提示UI
            _context3.next = 18;
            break;
          case 17:
            cc.warn("[CharacterViewUI] \u2717 \u4F7F\u7528\u9053\u5177\u5931\u8D25: " + item.name + " - " + result.message);
            // TODO: 可以显示错误提示UI
          case 18:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
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
    var _this9 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var ItemDataManager, INIT_FLAG_KEY, hasInitialized, currentCount, success;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            ItemDataManager = require("ItemDataManager"); // 检查是否已经初始化过道具（使用localStorage标志）
            INIT_FLAG_KEY = "character_view_items_initialized";
            hasInitialized = cc.sys.localStorage.getItem(INIT_FLAG_KEY);
            if (!hasInitialized) {
              _context4.next = 6;
              break;
            }
            // 已经初始化过，不再自动添加道具
            cc.log("[CharacterViewUI] 道具已初始化过，跳过自动添加");
            return _context4.abrupt("return");
          case 6:
            _context4.next = 8;
            return ItemDataManager.getItemCount("upgrade_potion");
          case 8:
            currentCount = _context4.sent;
            if (!(currentCount === 0)) {
              _context4.next = 24;
              break;
            }
            _context4.next = 12;
            return ItemDataManager.addItem("upgrade_potion", 10);
          case 12:
            success = _context4.sent;
            if (!success) {
              _context4.next = 21;
              break;
            }
            cc.log("[CharacterViewUI] ✓ 首次进入，已添加10个升级药水到全局道具栏");

            // 标记已初始化，确保只初始化一次
            cc.sys.localStorage.setItem(INIT_FLAG_KEY, "true");

            // 如果当前已选中角色，刷新道具栏显示
            if (!_this9.currentUnitData) {
              _context4.next = 19;
              break;
            }
            _context4.next = 19;
            return _this9._updateInventory();
          case 19:
            _context4.next = 22;
            break;
          case 21:
            cc.error("[CharacterViewUI] ✗ 添加升级药水失败");
          case 22:
            _context4.next = 26;
            break;
          case 24:
            // 如果已有升级药水，也标记为已初始化（可能是从其他地方添加的）
            cc.sys.localStorage.setItem(INIT_FLAG_KEY, "true");
            cc.log("[CharacterViewUI] \u5168\u5C40\u9053\u5177\u680F\u5DF2\u6709 " + currentCount + " \u4E2A\u5347\u7EA7\u836F\u6C34\uFF0C\u6807\u8BB0\u4E3A\u5DF2\u521D\u59CB\u5316");
          case 26:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))();
  },
  /**
   * 获取道具列表（全局共享，所有角色共用）
   * @private
   * @param {string} characterName - 角色名称（已废弃，保留用于兼容）
   * @returns {Promise<Array>|Array} 道具列表 [{ id, name, icon, count }, ...]（服务器模式下返回Promise）
   */
  _getCharacterItems: function _getCharacterItems(characterName) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var ItemDataManager, itemsWithConfig;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            ItemDataManager = require("ItemDataManager"); // 获取全局道具（所有角色共享，忽略characterName参数）
            _context5.next = 3;
            return ItemDataManager.getAllItemsWithConfig();
          case 3:
            itemsWithConfig = _context5.sent;
            return _context5.abrupt("return", itemsWithConfig.filter(function (item) {
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
            return _context5.stop();
        }
      }, _callee5);
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
    var _this10 = this;
    // 实例化头像Prefab
    var avatarNode = cc.instantiate(this.avatarPrefab);
    avatarNode.name = "Avatar_" + unitData.name;

    // 保存单位数据到节点
    avatarNode._unitData = unitData;
    avatarNode._team = team;

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

    // 绑定点击事件
    avatarNode.on(cc.Node.EventType.TOUCH_END, function () {
      _this10._onAvatarClick(unitData, team);
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
    cc.log("[CharacterViewUI] \u70B9\u51FB\u5934\u50CF: " + unitData.name);
    this._displayCharacterPrefab(unitData);
  },
  /**
   * 显示人物原型
   * @private
   * @param {Object} unitData - 单位数据
   */
  _displayCharacterPrefab: function _displayCharacterPrefab(unitData) {
    var _this11 = this;
    if (!this.characterDisplayArea) {
      cc.warn("[CharacterViewUI] 未设置characterDisplayArea，无法显示人物原型");
      return;
    }

    // 清除之前显示的原型
    if (this.currentDisplayPrefab) {
      this.currentDisplayPrefab.destroy();
      this.currentDisplayPrefab = null;
    }

    // 隐藏属性面板
    if (this.statsPanel) {
      this.statsPanel.active = false;
    }

    // 保存当前单位数据
    this.currentUnitData = unitData;

    // 更新道具栏显示
    this._updateInventory();

    // 如果有Prefab，实例化并显示
    if (unitData.prefab) {
      var prefabInstance = cc.instantiate(unitData.prefab);
      prefabInstance.name = "Display_" + unitData.name;

      // 保存原始角色名称，用于数据保存和加载
      prefabInstance._originalCharacterName = unitData.name;

      // 确保节点可见
      prefabInstance.active = true;
      prefabInstance.opacity = 255;
      this.characterDisplayArea.addChild(prefabInstance);
      this.currentDisplayPrefab = prefabInstance;

      // 设置位置和缩放（居中显示，缩小显示，位置向上调整）
      prefabInstance.setPosition(0, 100);
      prefabInstance.setScale(0.7);

      // 初始化角色属性（根据保存的等级数据，支持异步）
      this._initCharacterStats(prefabInstance, unitData)["catch"](function (err) {
        cc.error("[CharacterViewUI] \u521D\u59CB\u5316\u89D2\u8272\u5C5E\u6027\u5931\u8D25: " + err.message);
      });

      // 绑定点击事件（点击人物原型显示属性面板）
      prefabInstance.on(cc.Node.EventType.TOUCH_END, function (event) {
        event.stopPropagation(); // 阻止事件冒泡
        _this11._showStatsPanel(unitData);
      }, this);

      // 确保可以接收触摸事件
      prefabInstance.setContentSize(200, 200);

      // 标记这是人物原型节点（用于判断点击位置）
      prefabInstance._isCharacterPrefab = true;
      cc.log("[CharacterViewUI] \u2713 \u663E\u793A\u4EBA\u7269\u539F\u578B: " + unitData.name);
    } else {
      cc.warn("[CharacterViewUI] \u2717 \u5355\u4F4D " + unitData.name + " \u6CA1\u6709\u8BBE\u7F6Eprefab");
    }
  },
  /**
   * 初始化角色属性（根据保存的等级数据）
   * @private
   * @param {cc.Node} prefabInstance - 人物原型实例
   * @param {Object} unitData - 单位数据
   */
  _initCharacterStats: function _initCharacterStats(prefabInstance, unitData) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var CharacterDataManager, stats, savedData;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            CharacterDataManager = require("CharacterDataManager"); // StatsComponent 是组件类，不需要 require，直接使用 getComponent 获取
            // 获取StatsComponent组件
            stats = prefabInstance.getComponent("StatsComponent");
            if (stats) {
              _context6.next = 5;
              break;
            }
            cc.log("[CharacterViewUI] " + unitData.name + " \u6CA1\u6709StatsComponent\u7EC4\u4EF6\uFF0C\u8DF3\u8FC7\u5C5E\u6027\u521D\u59CB\u5316");
            return _context6.abrupt("return");
          case 5:
            _context6.next = 7;
            return CharacterDataManager.loadCharacterLevel(unitData.name);
          case 7:
            savedData = _context6.sent;
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
          case 13:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
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
    var _this12 = this;
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
        _this12.statsPanel.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxDaGFyYWN0ZXJWaWV3VUkuanMiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImF2YXRhckxpc3RDb250YWluZXIiLCJOb2RlIiwidG9vbHRpcCIsImNoYXJhY3RlckRpc3BsYXlBcmVhIiwiaW52ZW50b3J5Q29udGFpbmVyIiwiaXRlbVNsb3RQcmVmYWIiLCJQcmVmYWIiLCJpdGVtVG9vbHRpcCIsImludmVudG9yeUNvbHVtbnMiLCJpbnZlbnRvcnlSb3dzIiwiaXRlbVNsb3RTaXplIiwiaXRlbVNsb3RTcGFjaW5nIiwic3RhdHNQYW5lbCIsImF2YXRhclByZWZhYiIsInVuaXREYXRhQ29uZmlnIiwiaGVyb0ljb25zIiwiU3ByaXRlRnJhbWUiLCJtb25zdGVySWNvbnMiLCJoZXJvUHJlZmFicyIsIm1vbnN0ZXJQcmVmYWJzIiwiYXZhdGFyU3BhY2luZyIsImhwTGFiZWwiLCJMYWJlbCIsImF0dGFja0xhYmVsIiwiZGVmZW5zZUxhYmVsIiwic3BlZWRMYWJlbCIsImNyaXRMYWJlbCIsIm1pc3NMYWJlbCIsImxldmVsTGFiZWwiLCJleHBMYWJlbCIsIm9uTG9hZCIsIl90aGlzIiwicmVxdWlyZSIsIl9sb2FkQ29uZmlnSWZOZWVkZWQiLCJjdXJyZW50RGlzcGxheVByZWZhYiIsImN1cnJlbnRVbml0RGF0YSIsIl9pbml0QXZhdGFycyIsInNjaGVkdWxlT25jZSIsIl9pbml0SW52ZW50b3J5IiwiX3NldHVwSXRlbUljb25zIiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJfaW5pdERlZmF1bHRJdGVtcyIsImFjdGl2ZSIsImNhbnZhcyIsImZpbmQiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX0VORCIsIl9vbkNhbnZhc0NsaWNrIiwiX3RoaXMyIiwibmVlZExvYWQiLCJoZXJvcyIsImljb24iLCJwcmVmYWIiLCJtb25zdGVycyIsImxvZyIsImluZGV4IiwiX2JpbmRDYW52YXNDbGljayIsIl90aGlzMyIsIl90aGlzNCIsInJlbW92ZUFsbENoaWxkcmVuIiwiaGVyb0NvdW50IiwiaGVyb0RhdGEiLCJfY3JlYXRlQXZhdGFyIiwibW9uc3RlckRhdGEiLCJ3YXJuIiwib3BhY2l0eSIsInNldEFuY2hvclBvaW50IiwidG90YWxTbG90cyIsInNsb3RTaXplIiwic3BhY2luZyIsInRvdGFsV2lkdGgiLCJ0b3RhbEhlaWdodCIsInNldENvbnRlbnRTaXplIiwibWFzayIsImdldENvbXBvbmVudCIsIk1hc2siLCJhZGRDb21wb25lbnQiLCJUeXBlIiwiUkVDVCIsImdldEFuY2hvclBvaW50IiwieCIsInkiLCJsYXlvdXQiLCJMYXlvdXQiLCJlbmFibGVkIiwic2xvdE5vZGUiLCJpbnN0YW50aWF0ZSIsInNldFNjYWxlIiwiYWRkQ2hpbGQiLCJfaW5pdEl0ZW1TbG90IiwiY3JlYXRlZFNsb3RzIiwiY2hpbGRyZW4iLCJfbWFudWFsTGF5b3V0SW52ZW50b3J5IiwiY29udGFpbmVyUG9zIiwiZ2V0UG9zaXRpb24iLCJjb250YWluZXJXb3JsZFBvcyIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsInYyIiwidG9GaXhlZCIsImdldENvbnRlbnRTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJfdGhpczUiLCJzY2FsZSIsInNsb3RzIiwiY29udGFpbmVyU2l6ZSIsImFuY2hvclBvaW50IiwiZGlzcGxheVNpemUiLCJzdGFydFgiLCJzdGFydFkiLCJyb3ciLCJNYXRoIiwiZmxvb3IiLCJjb2wiLCJzZXRQb3NpdGlvbiIsImoiLCJjaGlsZCIsIl9lbnN1cmVTbG90VmlzaWJsZSIsIl9hZGRTbG90Qm9yZGVyIiwic2xvdFBvcyIsInNsb3RIYWxmU2l6ZSIsImNvbnRhaW5lckhhbGZXaWR0aCIsImNvbnRhaW5lckhhbGZIZWlnaHQiLCJpc0luUmFuZ2UiLCJoYXNWaXNpYmxlU3ByaXRlIiwic3ByaXRlTm9kZSIsIm1haW5TcHJpdGUiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsImNoaWxkU3ByaXRlIiwiYmdOb2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJncmFwaGljcyIsIkdyYXBoaWNzIiwiZmlsbENvbG9yIiwiQ29sb3IiLCJyZWN0IiwiZmlsbCIsImJvcmRlck5vZGUiLCJkZXN0cm95Iiwic3Ryb2tlQ29sb3IiLCJsaW5lV2lkdGgiLCJoYWxmU2l6ZSIsInN0cm9rZSIsInpJbmRleCIsImljb25Ob2RlIiwiY291bnRMYWJlbCIsInNwcml0ZSIsImxhYmVsIiwic3RyaW5nIiwiX3Nsb3RJbmRleCIsIl9pc0VtcHR5IiwiX3VwZGF0ZUludmVudG9yeSIsIl90aGlzNiIsIl9jYWxsZWUyIiwiaXRlbXMiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJfZ2V0Q2hhcmFjdGVySXRlbXMiLCJfc2V0SXRlbVNsb3QiLCJvZmYiLCJNT1VTRV9ET1dOIiwiTU9VU0VfVVAiLCJUT1VDSF9TVEFSVCIsIl90b3VjaFN0YXJ0VGltZSIsIml0ZW0iLCJfdGhpczciLCJjb3VudCIsInRvU3RyaW5nIiwiX2l0ZW1EYXRhIiwiZXZlbnQiLCJEYXRlIiwibm93IiwicHJlc3NUaW1lIiwiTE9OR19QUkVTU19USU1FIiwic3RvcFByb3BhZ2F0aW9uIiwiX3Nob3dJdGVtVG9vbHRpcE9uVG91Y2giLCJfb25JdGVtU2xvdENsaWNrIiwiX3NldHVwSXRlbVRvb2x0aXAiLCJ0b29sdGlwQ29tcG9uZW50IiwiaWQiLCJidXR0b24iLCJnZXRCdXR0b24iLCJFdmVudCIsIkV2ZW50TW91c2UiLCJCVVRUT05fUklHSFQiLCJwcmV2ZW50RGVmYXVsdCIsInRvb2x0aXBEYXRhIiwiaXRlbUlkIiwic2hvd0l0ZW1JbmZvIiwiaGlkZUl0ZW1JbmZvIiwiX3RoaXM4IiwiX2NhbGxlZTMiLCJJdGVtU3lzdGVtIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiY29uZmlnIiwidXNlSXRlbSIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiX3Nob3dTdGF0c1BhbmVsIiwic2NlbmUiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiaWNvblNldHRlciIsImdldENvbXBvbmVudEluQ2hpbGRyZW4iLCJfdGhpczkiLCJfY2FsbGVlNCIsIkl0ZW1EYXRhTWFuYWdlciIsIklOSVRfRkxBR19LRVkiLCJoYXNJbml0aWFsaXplZCIsImN1cnJlbnRDb3VudCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZXRJdGVtQ291bnQiLCJhZGRJdGVtIiwic2V0SXRlbSIsImNoYXJhY3Rlck5hbWUiLCJfY2FsbGVlNSIsIml0ZW1zV2l0aENvbmZpZyIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsImdldEFsbEl0ZW1zV2l0aENvbmZpZyIsImZpbHRlciIsIm1hcCIsInVuaXREYXRhIiwidGVhbSIsIl90aGlzMTAiLCJhdmF0YXJOb2RlIiwiX3VuaXREYXRhIiwiX3RlYW0iLCJhdmF0YXJDb21wIiwiaW5pdCIsIl9vbkF2YXRhckNsaWNrIiwiX2Rpc3BsYXlDaGFyYWN0ZXJQcmVmYWIiLCJfdGhpczExIiwicHJlZmFiSW5zdGFuY2UiLCJfb3JpZ2luYWxDaGFyYWN0ZXJOYW1lIiwiX2luaXRDaGFyYWN0ZXJTdGF0cyIsIl9pc0NoYXJhY3RlclByZWZhYiIsIl9jYWxsZWU2IiwiQ2hhcmFjdGVyRGF0YU1hbmFnZXIiLCJzdGF0cyIsInNhdmVkRGF0YSIsIl9jYWxsZWU2JCIsIl9jb250ZXh0NiIsImxvYWRDaGFyYWN0ZXJMZXZlbCIsImJhc2VIcCIsImhwIiwiYmFzZUF0dGFjayIsImF0dGFjayIsImJhc2VEZWZlbnNlIiwiZGVmZW5zZSIsImJhc2VTcGVlZCIsInNwZWVkIiwiYmFzZUNyaXQiLCJjcml0IiwiYmFzZU1pc3MiLCJtaXNzIiwibGV2ZWwiLCJleHAiLCJfYXBwbHlMZXZlbEJvbnVzIiwibWF4SHAiLCJ1cGRhdGVIZWFsdGhCYXIiLCJ1cGRhdGVFeHBCYXIiLCJ1cGRhdGVSYWdlQmFyIiwicmFnZSIsIkxldmVsQ29uZmlnIiwiY3VycmVudExldmVsRXhwIiwiZ2V0RXhwRm9yTGV2ZWwiLCJuZXh0TGV2ZWxFeHAiLCJleHBJbkN1cnJlbnRMZXZlbCIsImV4cFRvTmV4dCIsImRpc3BsYXlQb3MiLCJ0d2VlbiIsInRvIiwiZWFzaW5nIiwic3RhcnQiLCJfdGhpczEyIiwiaXNWYWxpZCIsInRhcmdldCIsImlz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bnQiOlsiLyoqXG4gKiDkurrnianlsZ7mgKfmn6XnnItVSee7hOS7tlxuICog566h55CG5aS05YOP5YiX6KGo44CB5Lq654mp5Y6f5Z6L5pi+56S644CB5bGe5oCn6Z2i5p2/XG4gKi9cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIOW3puS+p+WktOWDj+WIl+ihqOWuueWZqFxuICAgICAgICBhdmF0YXJMaXN0Q29udGFpbmVyOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5bem5L6n5aS05YOP5YiX6KGo5a655Zmo6IqC54K5XCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDkuK3pl7Tkurrnianljp/lnovmmL7npLrljLrln59cbiAgICAgICAgY2hhcmFjdGVyRGlzcGxheUFyZWE6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLkuK3pl7Tkurrnianljp/lnovmmL7npLrljLrln5/oioLngrlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOmBk+WFt+agj+WuueWZqO+8iOaYvuekuuWcqOS6uueJqeWOn+Wei+S4i+aWue+8iVxuICAgICAgICBpbnZlbnRvcnlDb250YWluZXI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLpgZPlhbfmoI/lrrnlmajoioLngrnvvIjnvZHmoLzluIPlsYDvvIzmmL7npLrlnKjkurrnianljp/lnovkuIvmlrnvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOmBk+WFt+mhuVByZWZhYu+8iOeUqOS6juWIm+W7uumBk+WFt+agvOWtkO+8iVxuICAgICAgICBpdGVtU2xvdFByZWZhYjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6YGT5YW35qC85a2QUHJlZmFi77yI5YyF5ZCr5Zu+5qCH5ZKM5pWw6YeP5qCH562+77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDpgZPlhbfkv6Hmga/lvLnnqpfnu4Tku7bvvIjlj6/pgInvvIlcbiAgICAgICAgaXRlbVRvb2x0aXA6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLpgZPlhbfkv6Hmga/lvLnnqpfoioLngrnvvIjljIXlkKtJdGVtVG9vbHRpcOe7hOS7tu+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g6YGT5YW35qCP572R5qC86YWN572uXG4gICAgICAgIGludmVudG9yeUNvbHVtbnM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDYsXG4gICAgICAgICAgICB0b29sdGlwOiBcIumBk+WFt+agj+WIl+aVsO+8iOavj+ihjOaYvuekuueahOmBk+WFt+aVsOmHj++8iVwiXG4gICAgICAgIH0sXG4gICAgICAgIGludmVudG9yeVJvd3M6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDQsXG4gICAgICAgICAgICB0b29sdGlwOiBcIumBk+WFt+agj+ihjOaVsFwiXG4gICAgICAgIH0sXG4gICAgICAgIGl0ZW1TbG90U2l6ZToge1xuICAgICAgICAgICAgZGVmYXVsdDogODAsXG4gICAgICAgICAgICB0b29sdGlwOiBcIumBk+WFt+agvOWtkOWkp+Wwj++8iOWuvemrmO+8iVwiXG4gICAgICAgIH0sXG4gICAgICAgIGl0ZW1TbG90U3BhY2luZzoge1xuICAgICAgICAgICAgZGVmYXVsdDogMCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6YGT5YW35qC85a2Q5LmL6Ze055qE6Ze06LedXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDlsZ7mgKfpnaLmnb/vvIjljYrpgI/mmI7og4zmma/vvIlcbiAgICAgICAgc3RhdHNQYW5lbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWxnuaAp+mdouadv+iKgueCue+8iOWNiumAj+aYjuiDjOaZr++8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5aS05YOPUHJlZmFi77yI55So5LqO5Yqo5oCB5Yib5bu65aS05YOP77yJXG4gICAgICAgIGF2YXRhclByZWZhYjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5aS05YOPUHJlZmFi77yI5YyF5ZCr5aS05YOP5Zu+54mH77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDljZXkvY3mlbDmja7phY3nva5cbiAgICAgICAgdW5pdERhdGFDb25maWc6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWNleS9jeaVsOaNrumFjee9ru+8iOWPr+mAie+8jOWmguaenOS4jeiuvue9ruWImeS7jlVuaXREYXRhQ29uZmln6I635Y+W77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDlpIfnlKjotYTmupDvvJroi7Hpm4TlpLTlg4/otYTmupDliJfooajvvIjku4XlnKhVbml0RGF0YUNvbmZpZ+S4rei1hOa6kOS4uuepuuaXtuS9v+eUqO+8iVxuICAgICAgICBoZXJvSWNvbnM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW2NjLlNwcml0ZUZyYW1lXSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6Iux6ZuE5aS05YOP6LWE5rqQ5YiX6KGo77yI5aSH55So77yM5LuF5ZyoU2VsZWN0U2NlbmXmnKrliqDovb3ml7bkvb/nlKjvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOWkh+eUqOi1hOa6kO+8muaAqueJqeWktOWDj+i1hOa6kOWIl+ihqO+8iOS7heWcqFVuaXREYXRhQ29uZmln5Lit6LWE5rqQ5Li656m65pe25L2/55So77yJXG4gICAgICAgIG1vbnN0ZXJJY29uczoge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuU3ByaXRlRnJhbWVdLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmgKrnianlpLTlg4/otYTmupDliJfooajvvIjlpIfnlKjvvIzku4XlnKhTZWxlY3RTY2VuZeacquWKoOi9veaXtuS9v+eUqO+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5aSH55So6LWE5rqQ77ya6Iux6ZuEUHJlZmFi5YiX6KGo77yI5LuF5ZyoVW5pdERhdGFDb25maWfkuK3otYTmupDkuLrnqbrml7bkvb/nlKjvvIlcbiAgICAgICAgaGVyb1ByZWZhYnM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW2NjLlByZWZhYl0sXG4gICAgICAgICAgICB0b29sdGlwOiBcIuiLsembhFByZWZhYuWIl+ihqO+8iOWkh+eUqO+8jOS7heWcqFNlbGVjdFNjZW5l5pyq5Yqg6L295pe25L2/55So77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDlpIfnlKjotYTmupDvvJrmgKrnialQcmVmYWLliJfooajvvIjku4XlnKhVbml0RGF0YUNvbmZpZ+S4rei1hOa6kOS4uuepuuaXtuS9v+eUqO+8iVxuICAgICAgICBtb25zdGVyUHJlZmFiczoge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuUHJlZmFiXSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5oCq54mpUHJlZmFi5YiX6KGo77yI5aSH55So77yM5LuF5ZyoU2VsZWN0U2NlbmXmnKrliqDovb3ml7bkvb/nlKjvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOWktOWDj+mXtOi3nVxuICAgICAgICBhdmF0YXJTcGFjaW5nOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAxMDAsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWktOWDj+S5i+mXtOeahOmXtOi3nVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5bGe5oCn6Z2i5p2/5Lit55qE5bGe5oCn5qCH562+77yI6ZyA6KaB5Zyo57yW6L6R5Zmo5Lit57uR5a6a77yJXG4gICAgICAgIGhwTGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi55Sf5ZG95YC85qCH562+XCJcbiAgICAgICAgfSxcbiAgICAgICAgYXR0YWNrTGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5pS75Ye75Yqb5qCH562+XCJcbiAgICAgICAgfSxcbiAgICAgICAgZGVmZW5zZUxhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgICAgICB0b29sdGlwOiBcIumYsuW+oeWKm+agh+etvlwiXG4gICAgICAgIH0sXG4gICAgICAgIHNwZWVkTGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6YCf5bqm5qCH562+XCJcbiAgICAgICAgfSxcbiAgICAgICAgY3JpdExhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuaatOWHu+eOh+agh+etvlwiXG4gICAgICAgIH0sXG4gICAgICAgIG1pc3NMYWJlbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLpl6rpgb/njofmoIfnrb5cIlxuICAgICAgICB9LFxuICAgICAgICBsZXZlbExhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuetiee6p+agh+etvlwiXG4gICAgICAgIH0sXG4gICAgICAgIGV4cExhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgICAgICB0b29sdGlwOiBcIue7j+mqjOWAvOagh+etvlwiXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyDojrflj5bljZXkvY3mlbDmja7phY3nva7vvIjkvJjlhYjkvb/nlKhTZWxlY3RTY2VuZeS4reW3suiuvue9ruWlveeahOi1hOa6kO+8iVxuICAgICAgICBpZiAoIXRoaXMudW5pdERhdGFDb25maWcpIHtcbiAgICAgICAgICAgIHRoaXMudW5pdERhdGFDb25maWcgPSByZXF1aXJlKFwiVW5pdERhdGFDb25maWdcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlpoLmnpxVbml0RGF0YUNvbmZpZ+S4reeahOi1hOa6kOS4uuepuu+8jOS7juWcuuaZr+mFjee9ruS4reWKoOi9ve+8iOWkh+eUqOaWueahiO+8iVxuICAgICAgICB0aGlzLl9sb2FkQ29uZmlnSWZOZWVkZWQoKTtcblxuICAgICAgICAvLyDlvZPliY3mmL7npLrnmoTkurrnianljp/lnotcbiAgICAgICAgdGhpcy5jdXJyZW50RGlzcGxheVByZWZhYiA9IG51bGw7XG4gICAgICAgIC8vIOW9k+WJjemAieS4reeahOWNleS9jeaVsOaNrlxuICAgICAgICB0aGlzLmN1cnJlbnRVbml0RGF0YSA9IG51bGw7XG5cbiAgICAgICAgLy8g5Yid5aeL5YyWVUlcbiAgICAgICAgdGhpcy5faW5pdEF2YXRhcnMoKTtcblxuICAgICAgICAvLyDliJ3lp4vljJbpgZPlhbfmoI/vvIjlu7bov5/kuIDluKfvvIznoa7kv53lrrnlmajoioLngrnlt7LlrozlhajliJ3lp4vljJbvvIlcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5faW5pdEludmVudG9yeSgpO1xuICAgICAgICB9LCAwKTtcblxuICAgICAgICAvLyDorr7nva7pgZPlhbflm77moIfvvIjlpoLmnpxJdGVtSWNvblNldHRlcue7hOS7tuW3suiuvue9ru+8iVxuICAgICAgICB0aGlzLl9zZXR1cEl0ZW1JY29ucygpO1xuXG4gICAgICAgIC8vIOWIneWni+WMlumBk+WFt+aVsOaNru+8iOa3u+WKoDXkuKrljYfnuqfoja/msLTnlKjkuo7mtYvor5XvvIlcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5faW5pdERlZmF1bHRJdGVtcygpO1xuICAgICAgICB9LCAwLjUpO1xuXG4gICAgICAgIC8vIOmakOiXj+WxnuaAp+mdouadv1xuICAgICAgICBpZiAodGhpcy5zdGF0c1BhbmVsKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRzUGFuZWwuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDnu5Hlrprngrnlh7vkuovku7bvvIjngrnlh7vku7vmhI/lnLDmlrnlhbPpl63lsZ7mgKfpnaLmnb/vvIlcbiAgICAgICAgLy8g5L2/55SoQ2FudmFz5oiW5Zy65pmv5qC56IqC54K55p2l5o2V6I6354K55Ye75LqL5Lu2XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XG4gICAgICAgIGlmIChjYW52YXMpIHtcbiAgICAgICAgICAgIGNhbnZhcy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX29uQ2FudmFzQ2xpY2ssIHRoaXMpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWmguaenFVuaXREYXRhQ29uZmln5Lit55qE6LWE5rqQ5Li656m677yM5LuO5Zy65pmv6YWN572u5Lit5Yqg6L2977yI5aSH55So5pa55qGI77yJXG4gICAgICog5LyY5YWI5L2/55SoU2VsZWN0U2NlbmXkuK3lt7Lorr7nva7lpb3nmoTotYTmupDvvIzlpoLmnpzkuLrnqbrmiY3kvb/nlKjlnLrmma/phY3nva5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9sb2FkQ29uZmlnSWZOZWVkZWQoKSB7XG4gICAgICAgIGxldCBuZWVkTG9hZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIOajgOafpeaYr+WQpuaciei1hOa6kOS4uuepulxuICAgICAgICBpZiAodGhpcy51bml0RGF0YUNvbmZpZyAmJiB0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudW5pdERhdGFDb25maWcuaGVyb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudW5pdERhdGFDb25maWcuaGVyb3NbaV0uaWNvbiB8fCAhdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpXS5wcmVmYWIpIHtcbiAgICAgICAgICAgICAgICAgICAgbmVlZExvYWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5lZWRMb2FkICYmIHRoaXMudW5pdERhdGFDb25maWcgJiYgdGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVycykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzW2ldLmljb24gfHwgIXRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnNbaV0ucHJlZmFiKSB7XG4gICAgICAgICAgICAgICAgICAgIG5lZWRMb2FkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5aaC5p6c5pyJ6LWE5rqQ5Li656m677yM5LuO5Zy65pmv6YWN572u5Lit5Yqg6L29XG4gICAgICAgIGlmIChuZWVkTG9hZCkge1xuICAgICAgICAgICAgY2MubG9nKFwiW0NoYXJhY3RlclZpZXdVSV0g5qOA5rWL5YiwVW5pdERhdGFDb25maWfkuK3otYTmupDkuLrnqbrvvIzku47lnLrmma/phY3nva7liqDovb3vvIjlpIfnlKjmlrnmoYjvvIlcIik7XG5cbiAgICAgICAgICAgIC8vIOW6lOeUqOiLsembhOWktOWDj+WSjFByZWZhYumFjee9ru+8iOS7heWcqFVuaXREYXRhQ29uZmln5Lit6LWE5rqQ5Li656m65pe26K6+572u77yJXG4gICAgICAgICAgICBpZiAodGhpcy5oZXJvSWNvbnMgJiYgdGhpcy5oZXJvSWNvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVyb0ljb25zLmZvckVhY2goKGljb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zICYmIHRoaXMudW5pdERhdGFDb25maWcuaGVyb3NbaW5kZXhdICYmIGljb24gJiYgIXRoaXMudW5pdERhdGFDb25maWcuaGVyb3NbaW5kZXhdLmljb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5pdERhdGFDb25maWcuaGVyb3NbaW5kZXhdLmljb24gPSBpY29uO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDku47lnLrmma/phY3nva7orr7nva7oi7Hpm4TlpLTlg486ICR7dGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpbmRleF0ubmFtZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5oZXJvUHJlZmFicyAmJiB0aGlzLmhlcm9QcmVmYWJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlcm9QcmVmYWJzLmZvckVhY2goKHByZWZhYiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudW5pdERhdGFDb25maWcuaGVyb3MgJiYgdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpbmRleF0gJiYgcHJlZmFiICYmICF0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zW2luZGV4XS5wcmVmYWIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5pdERhdGFDb25maWcuaGVyb3NbaW5kZXhdLnByZWZhYiA9IHByZWZhYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5LuO5Zy65pmv6YWN572u6K6+572u6Iux6ZuEUHJlZmFiOiAke3RoaXMudW5pdERhdGFDb25maWcuaGVyb3NbaW5kZXhdLm5hbWV9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5bqU55So5oCq54mp5aS05YOP5ZKMUHJlZmFi6YWN572u77yI5LuF5ZyoVW5pdERhdGFDb25maWfkuK3otYTmupDkuLrnqbrml7borr7nva7vvIlcbiAgICAgICAgICAgIGlmICh0aGlzLm1vbnN0ZXJJY29ucyAmJiB0aGlzLm1vbnN0ZXJJY29ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb25zdGVySWNvbnMuZm9yRWFjaCgoaWNvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnMgJiYgdGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVyc1tpbmRleF0gJiYgaWNvbiAmJiAhdGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVyc1tpbmRleF0uaWNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVyc1tpbmRleF0uaWNvbiA9IGljb247XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOS7juWcuuaZr+mFjee9ruiuvue9ruaAqueJqeWktOWDjzogJHt0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzW2luZGV4XS5uYW1lfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1vbnN0ZXJQcmVmYWJzICYmIHRoaXMubW9uc3RlclByZWZhYnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9uc3RlclByZWZhYnMuZm9yRWFjaCgocHJlZmFiLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVycyAmJiB0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzW2luZGV4XSAmJiBwcmVmYWIgJiYgIXRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnNbaW5kZXhdLnByZWZhYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVyc1tpbmRleF0ucHJlZmFiID0gcHJlZmFiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDku47lnLrmma/phY3nva7orr7nva7mgKrnialQcmVmYWI6ICR7dGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVyc1tpbmRleF0ubmFtZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MubG9nKFwiW0NoYXJhY3RlclZpZXdVSV0gVW5pdERhdGFDb25maWfkuK3lt7LmnInotYTmupDvvIznm7TmjqXkvb/nlKjvvIjlj6/og73nlLFTZWxlY3RTY2VuZeiuvue9ru+8iVwiKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDnu5HlrppDYW52YXPngrnlh7vkuovku7ZcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9iaW5kQ2FudmFzQ2xpY2soKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XG4gICAgICAgIGlmIChjYW52YXMpIHtcbiAgICAgICAgICAgIGNhbnZhcy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX29uQ2FudmFzQ2xpY2ssIHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5bu26L+f57uR5a6a77yI5aaC5p6cQ2FudmFz6L+Y5pyq5Yib5bu677yJXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmluZENhbnZhc0NsaWNrKCk7XG4gICAgICAgICAgICB9LCAwLjEpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluWktOWDj+WIl+ihqFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2luaXRBdmF0YXJzKCkge1xuICAgICAgICBpZiAoIXRoaXMuYXZhdGFyTGlzdENvbnRhaW5lcikge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJbQ2hhcmFjdGVyVmlld1VJXSDmnKrorr7nva5hdmF0YXJMaXN0Q29udGFpbmVy77yM5peg5rOV5Yib5bu65aS05YOP5YiX6KGoXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmF2YXRhclByZWZhYikge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJbQ2hhcmFjdGVyVmlld1VJXSDmnKrorr7nva5hdmF0YXJQcmVmYWLvvIzml6Dms5XliJvlu7rlpLTlg49cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmuIXnqbrlrrnlmahcbiAgICAgICAgdGhpcy5hdmF0YXJMaXN0Q29udGFpbmVyLnJlbW92ZUFsbENoaWxkcmVuKCk7XG5cbiAgICAgICAgLy8g6K6h566X6Iux6ZuE5pWw6YeP77yI55So5LqO5oCq54mp5aS05YOP55qE5L2N572u5YGP56e777yJXG4gICAgICAgIGNvbnN0IGhlcm9Db3VudCA9IHRoaXMudW5pdERhdGFDb25maWcgJiYgdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvcyA/IHRoaXMudW5pdERhdGFDb25maWcuaGVyb3MubGVuZ3RoIDogMDtcblxuICAgICAgICAvLyDliJvlu7roi7Hpm4TlpLTlg49cbiAgICAgICAgaWYgKHRoaXMudW5pdERhdGFDb25maWcgJiYgdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvcykge1xuICAgICAgICAgICAgdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvcy5mb3JFYWNoKChoZXJvRGF0YSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVBdmF0YXIoaGVyb0RhdGEsIFwiaGVyb1wiLCBpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWIm+W7uuaAqueJqeWktOWDj++8iOS9jee9ruS7juiLsembhOWQjumdouW8gOWni++8iVxuICAgICAgICBpZiAodGhpcy51bml0RGF0YUNvbmZpZyAmJiB0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzLmZvckVhY2goKG1vbnN0ZXJEYXRhLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIOS9v+eUqCBoZXJvQ291bnQgKyBpbmRleCDkvZzkuLrkvY3nva7ntKLlvJXvvIzorqnmgKrnianmjpLlnKjoi7Hpm4TlkI7pnaJcbiAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVBdmF0YXIobW9uc3RlckRhdGEsIFwibW9uc3RlclwiLCBoZXJvQ291bnQgKyBpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbpgZPlhbfmoI9cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9pbml0SW52ZW50b3J5KCkge1xuICAgICAgICBpZiAoIXRoaXMuaW52ZW50b3J5Q29udGFpbmVyKSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiW0NoYXJhY3RlclZpZXdVSV0g5pyq6K6+572uaW52ZW50b3J5Q29udGFpbmVy77yM6Lez6L+H6YGT5YW35qCP5Yid5aeL5YyWXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLml0ZW1TbG90UHJlZmFiKSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiW0NoYXJhY3RlclZpZXdVSV0g5pyq6K6+572uaXRlbVNsb3RQcmVmYWLvvIzot7Pov4fpgZPlhbfmoI/liJ3lp4vljJZcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlvLrliLborr7nva7ooYzliJfmlbDvvIjnoa7kv53kvb/nlKjmlrDnmoTlgLzvvIlcbiAgICAgICAgaWYgKHRoaXMuaW52ZW50b3J5Q29sdW1ucyAhPT0gNikge1xuICAgICAgICAgICAgdGhpcy5pbnZlbnRvcnlDb2x1bW5zID0gNjtcbiAgICAgICAgICAgIGNjLmxvZyhcIltDaGFyYWN0ZXJWaWV3VUldIOW8uuWItuiuvue9ruWIl+aVsOS4ujZcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaW52ZW50b3J5Um93cyAhPT0gNCkge1xuICAgICAgICAgICAgdGhpcy5pbnZlbnRvcnlSb3dzID0gNDtcbiAgICAgICAgICAgIGNjLmxvZyhcIltDaGFyYWN0ZXJWaWV3VUldIOW8uuWItuiuvue9ruihjOaVsOS4ujRcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmuIXnqbrlrrnlmahcbiAgICAgICAgdGhpcy5pbnZlbnRvcnlDb250YWluZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcblxuICAgICAgICAvLyDnoa7kv53lrrnlmajlj6/op4FcbiAgICAgICAgdGhpcy5pbnZlbnRvcnlDb250YWluZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbnZlbnRvcnlDb250YWluZXIub3BhY2l0eSA9IDI1NTtcblxuICAgICAgICAvLyDorr7nva7lrrnlmajplJrngrnkuLrlsYXkuK3vvIgwLjUsIDAuNe+8ie+8jOi/meagt+S9jee9ruiuoeeul+abtOeugOWNlVxuICAgICAgICB0aGlzLmludmVudG9yeUNvbnRhaW5lci5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG5cbiAgICAgICAgLy8g6K6h566X6YGT5YW35qCP5oC75qC85a2Q5pWw5ZKM5a655Zmo5aSn5bCPXG4gICAgICAgIGNvbnN0IHRvdGFsU2xvdHMgPSB0aGlzLmludmVudG9yeUNvbHVtbnMgKiB0aGlzLmludmVudG9yeVJvd3M7XG4gICAgICAgIGNvbnN0IHNsb3RTaXplID0gdGhpcy5pdGVtU2xvdFNpemUgfHwgODA7XG4gICAgICAgIGNvbnN0IHNwYWNpbmcgPSB0aGlzLml0ZW1TbG90U3BhY2luZyB8fCAwOyAvLyDpl7TpmpTmlLnkuLowXG5cbiAgICAgICAgLy8g5YWI6K6h566X5bm26K6+572u5a655Zmo5aSn5bCP77yI5b+F6aG75Zyo5re75Yqg5a2Q6IqC54K55LmL5YmN77yJXG4gICAgICAgIGNvbnN0IHRvdGFsV2lkdGggPSAodGhpcy5pbnZlbnRvcnlDb2x1bW5zICogc2xvdFNpemUpICsgKCh0aGlzLmludmVudG9yeUNvbHVtbnMgLSAxKSAqIHNwYWNpbmcpO1xuICAgICAgICBjb25zdCB0b3RhbEhlaWdodCA9ICh0aGlzLmludmVudG9yeVJvd3MgKiBzbG90U2l6ZSkgKyAoKHRoaXMuaW52ZW50b3J5Um93cyAtIDEpICogc3BhY2luZyk7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5Q29udGFpbmVyLnNldENvbnRlbnRTaXplKHRvdGFsV2lkdGgsIHRvdGFsSGVpZ2h0KTtcblxuICAgICAgICAvLyDmt7vliqBNYXNr57uE5Lu277yM6KOB5Ymq6LaF5Ye66IyD5Zu055qE5qC85a2QXG4gICAgICAgIGxldCBtYXNrID0gdGhpcy5pbnZlbnRvcnlDb250YWluZXIuZ2V0Q29tcG9uZW50KGNjLk1hc2spO1xuICAgICAgICBpZiAoIW1hc2spIHtcbiAgICAgICAgICAgIG1hc2sgPSB0aGlzLmludmVudG9yeUNvbnRhaW5lci5hZGRDb21wb25lbnQoY2MuTWFzayk7XG4gICAgICAgICAgICBtYXNrLnR5cGUgPSBjYy5NYXNrLlR5cGUuUkVDVDsgLy8g55+p5b2i6KOB5YmqXG4gICAgICAgICAgICBjYy5sb2coXCJbQ2hhcmFjdGVyVmlld1VJXSDoh6rliqjmt7vliqBNYXNr57uE5Lu25Yiw6YGT5YW35qCP5a655Zmo77yI55So5LqO6KOB5Ymq6LaF5Ye66IyD5Zu055qE5qC85a2Q77yJXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDpgZPlhbfmoI/lrrnlmajlpKflsI86ICR7dG90YWxXaWR0aH0geCAke3RvdGFsSGVpZ2h0fSwg5qC85a2Q5pWwOiAke3RvdGFsU2xvdHN9LCDplJrngrk6ICgke3RoaXMuaW52ZW50b3J5Q29udGFpbmVyLmdldEFuY2hvclBvaW50KCkueH0sICR7dGhpcy5pbnZlbnRvcnlDb250YWluZXIuZ2V0QW5jaG9yUG9pbnQoKS55fSlgKTtcblxuICAgICAgICAvLyDmlrnlvI/kuIDvvJrkvb/nlKhMYXlvdXTnu4Tku7boh6rliqjluIPlsYDvvIjmjqjojZDvvIlcbiAgICAgICAgLy8g5qOA5p+l5piv5ZCm5bey5pyJTGF5b3V057uE5Lu277yM5aaC5p6c5rKh5pyJ5YiZ5re75YqgXG4gICAgICAgIGxldCBsYXlvdXQgPSB0aGlzLmludmVudG9yeUNvbnRhaW5lci5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcbiAgICAgICAgaWYgKCFsYXlvdXQpIHtcbiAgICAgICAgICAgIGxheW91dCA9IHRoaXMuaW52ZW50b3J5Q29udGFpbmVyLmFkZENvbXBvbmVudChjYy5MYXlvdXQpO1xuICAgICAgICAgICAgY2MubG9nKFwiW0NoYXJhY3RlclZpZXdVSV0g6Ieq5Yqo5re75YqgTGF5b3V057uE5Lu25Yiw6YGT5YW35qCP5a655ZmoXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g56aB55SoTGF5b3V057uE5Lu277yM5L2/55So5omL5Yqo5biD5bGA77yI5pu05Y+v5o6n77yJXG4gICAgICAgIC8vIExheW91dOe7hOS7tuWcqEdSSUTmqKHlvI/kuIvlj6/og73mnInpl67popjvvIzmiYvliqjluIPlsYDmm7Tlj6/pnaBcbiAgICAgICAgaWYgKGxheW91dCkge1xuICAgICAgICAgICAgbGF5b3V0LmVuYWJsZWQgPSBmYWxzZTsgLy8g56aB55SoTGF5b3V057uE5Lu2XG4gICAgICAgICAgICBjYy5sb2coXCJbQ2hhcmFjdGVyVmlld1VJXSDnpoHnlKhMYXlvdXTnu4Tku7bvvIzkvb/nlKjmiYvliqjluIPlsYBcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDliJvlu7rpgZPlhbfmoLzlrZBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbFNsb3RzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNsb3ROb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtU2xvdFByZWZhYik7XG4gICAgICAgICAgICBpZiAoIXNsb3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtDaGFyYWN0ZXJWaWV3VUldIOaXoOazleWunuS+i+WMlumBk+WFt+agvOWtkFByZWZhYiAo57Si5byVOiAke2l9KWApO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzbG90Tm9kZS5uYW1lID0gYEl0ZW1TbG90XyR7aX1gO1xuXG4gICAgICAgICAgICAvLyDnoa7kv53oioLngrnlj6/op4FcbiAgICAgICAgICAgIHNsb3ROb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBzbG90Tm9kZS5vcGFjaXR5ID0gMjU1O1xuXG4gICAgICAgICAgICAvLyDlvLrliLborr7nva7oioLngrnlpKflsI/kuLpzbG90U2l6Ze+8iOimhuebllByZWZhYueahOm7mOiupOWkp+Wwj++8iVxuICAgICAgICAgICAgc2xvdE5vZGUuc2V0Q29udGVudFNpemUoc2xvdFNpemUsIHNsb3RTaXplKTtcblxuICAgICAgICAgICAgLy8g6K6+572u6IqC54K56ZSa54K55Li65bGF5Lit77yI5L6/5LqO5a6a5L2N77yJXG4gICAgICAgICAgICBzbG90Tm9kZS5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG5cbiAgICAgICAgICAgIC8vIOiuvue9rue8qeaUvuS4ujAuOFxuICAgICAgICAgICAgc2xvdE5vZGUuc2V0U2NhbGUoMC44LCAwLjgsIDAuOCk7XG5cbiAgICAgICAgICAgIC8vIOa3u+WKoOWIsOWuueWZqFxuICAgICAgICAgICAgdGhpcy5pbnZlbnRvcnlDb250YWluZXIuYWRkQ2hpbGQoc2xvdE5vZGUpO1xuXG4gICAgICAgICAgICAvLyDliJ3lp4vljJbpgZPlhbfmoLzlrZDvvIjnqbrnirbmgIHvvIlcbiAgICAgICAgICAgIHRoaXMuX2luaXRJdGVtU2xvdChzbG90Tm9kZSwgaSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDpqozor4HliJvlu7rnu5PmnpxcbiAgICAgICAgY29uc3QgY3JlYXRlZFNsb3RzID0gdGhpcy5pbnZlbnRvcnlDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOmBk+WFt+agj+WIneWni+WMluWujOaIkDogJHt0aGlzLmludmVudG9yeVJvd3N96KGMIHggJHt0aGlzLmludmVudG9yeUNvbHVtbnN95YiXID0gJHt0b3RhbFNsb3RzfeS4quagvOWtkCwg5a6e6ZmF5Yib5bu6OiAke2NyZWF0ZWRTbG90c33kuKpgKTtcblxuICAgICAgICBpZiAoY3JlYXRlZFNsb3RzID09PSAwKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIltDaGFyYWN0ZXJWaWV3VUldIOitpuWRiu+8muayoeacieWIm+W7uuS7u+S9lemBk+WFt+agvOWtkO+8geivt+ajgOafpWl0ZW1TbG90UHJlZmFi5piv5ZCm5q2j56Gu57uR5a6a44CCXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5L2/55So5omL5Yqo5biD5bGA77yI56Gu5L+d6Ze06ZqU5Li6MO+8jOW5tua3u+WKoOi+ueahhu+8iVxuICAgICAgICB0aGlzLl9tYW51YWxMYXlvdXRJbnZlbnRvcnkoKTtcblxuICAgICAgICAvLyDovpPlh7rosIPor5Xkv6Hmga9cbiAgICAgICAgY29uc3QgY29udGFpbmVyUG9zID0gdGhpcy5pbnZlbnRvcnlDb250YWluZXIuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyV29ybGRQb3MgPSB0aGlzLmludmVudG9yeUNvbnRhaW5lci5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xuICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOWuueWZqOS9jee9rjog5pys5ZywKCR7Y29udGFpbmVyUG9zLngudG9GaXhlZCgxKX0sICR7Y29udGFpbmVyUG9zLnkudG9GaXhlZCgxKX0pLCDkuJbnlYwoJHtjb250YWluZXJXb3JsZFBvcy54LnRvRml4ZWQoMSl9LCAke2NvbnRhaW5lcldvcmxkUG9zLnkudG9GaXhlZCgxKX0pYCk7XG4gICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5a655Zmo5aSn5bCPOiAke3RoaXMuaW52ZW50b3J5Q29udGFpbmVyLmdldENvbnRlbnRTaXplKCkud2lkdGh9IHggJHt0aGlzLmludmVudG9yeUNvbnRhaW5lci5nZXRDb250ZW50U2l6ZSgpLmhlaWdodH1gKTtcbiAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDlrrnlmajlj6/op4HmgKc6IGFjdGl2ZT0ke3RoaXMuaW52ZW50b3J5Q29udGFpbmVyLmFjdGl2ZX0sIG9wYWNpdHk9JHt0aGlzLmludmVudG9yeUNvbnRhaW5lci5vcGFjaXR5fWApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmiYvliqjluIPlsYDpgZPlhbfmoI/vvIjlpIfnlKjmlrnmoYjvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9tYW51YWxMYXlvdXRJbnZlbnRvcnkoKSB7XG4gICAgICAgIGlmICghdGhpcy5pbnZlbnRvcnlDb250YWluZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNsb3RTaXplID0gdGhpcy5pdGVtU2xvdFNpemUgfHwgODA7XG4gICAgICAgIGNvbnN0IHNwYWNpbmcgPSB0aGlzLml0ZW1TbG90U3BhY2luZyB8fCAwOyAvLyDpl7TpmpTmlLnkuLowXG4gICAgICAgIGNvbnN0IHNjYWxlID0gMC44OyAvLyDnvKnmlL7lgLxcbiAgICAgICAgY29uc3Qgc2xvdHMgPSB0aGlzLmludmVudG9yeUNvbnRhaW5lci5jaGlsZHJlbjtcblxuICAgICAgICAvLyDojrflj5blrrnlmajlpKflsI/lkozplJrngrlcbiAgICAgICAgY29uc3QgY29udGFpbmVyU2l6ZSA9IHRoaXMuaW52ZW50b3J5Q29udGFpbmVyLmdldENvbnRlbnRTaXplKCk7XG4gICAgICAgIGNvbnN0IGFuY2hvclBvaW50ID0gdGhpcy5pbnZlbnRvcnlDb250YWluZXIuZ2V0QW5jaG9yUG9pbnQoKTtcblxuICAgICAgICAvLyDorqHnrpflrp7pmYXmmL7npLrlpKflsI/vvIjogIPomZHnvKnmlL7vvIlcbiAgICAgICAgY29uc3QgZGlzcGxheVNpemUgPSBzbG90U2l6ZSAqIHNjYWxlO1xuXG4gICAgICAgIC8vIOiuoeeul+WuueWZqOWkp+Wwj++8iOS9v+eUqOWunumZheaYvuekuuWkp+Wwj++8jOehruS/nee0p+WvhuaOkuWIl++8iVxuICAgICAgICBjb25zdCB0b3RhbFdpZHRoID0gdGhpcy5pbnZlbnRvcnlDb2x1bW5zICogZGlzcGxheVNpemU7XG4gICAgICAgIGNvbnN0IHRvdGFsSGVpZ2h0ID0gdGhpcy5pbnZlbnRvcnlSb3dzICogZGlzcGxheVNpemU7XG5cbiAgICAgICAgLy8g5pu05paw5a655Zmo5aSn5bCP77yI5L2/55So5a6e6ZmF5pi+56S65aSn5bCP77yJXG4gICAgICAgIHRoaXMuaW52ZW50b3J5Q29udGFpbmVyLnNldENvbnRlbnRTaXplKHRvdGFsV2lkdGgsIHRvdGFsSGVpZ2h0KTtcblxuICAgICAgICAvLyDorqHnrpfotbflp4vkvY3nva7vvJrku47lt6bkuIrop5LlvIDlp4vvvIznrKzkuIDkuKrmoLzlrZDnmoTkuK3lv4PkvY3nva5cbiAgICAgICAgLy8g5L2/55So5a6e6ZmF5pi+56S65aSn5bCP5p2l6K6h566X5L2N572u77yM56Gu5L+d57Sn5a+G5o6S5YiXXG4gICAgICAgIGNvbnN0IHN0YXJ0WCA9IC10b3RhbFdpZHRoIC8gMiArIGRpc3BsYXlTaXplIC8gMjtcbiAgICAgICAgY29uc3Qgc3RhcnRZID0gdG90YWxIZWlnaHQgLyAyIC0gZGlzcGxheVNpemUgLyAyO1xuXG4gICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5omL5Yqo5biD5bGA5Y+C5pWwOiBzbG90U2l6ZT0ke3Nsb3RTaXplfSwgc2NhbGU9JHtzY2FsZX0sIGRpc3BsYXlTaXplPSR7ZGlzcGxheVNpemUudG9GaXhlZCgxKX0sIHNwYWNpbmc9JHtzcGFjaW5nfWApO1xuICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOWuueWZqOWkp+WwjzogJHt0b3RhbFdpZHRoLnRvRml4ZWQoMSl9IHggJHt0b3RhbEhlaWdodC50b0ZpeGVkKDEpfSwgc3RhcnRYPSR7c3RhcnRYLnRvRml4ZWQoMSl9LCBzdGFydFk9JHtzdGFydFkudG9GaXhlZCgxKX1gKTtcblxuICAgICAgICAvLyDmiYvliqjorr7nva7mr4/kuKrmoLzlrZDnmoTkvY3nva5cbiAgICAgICAgc2xvdHMuZm9yRWFjaCgoc2xvdE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gdGhpcy5pbnZlbnRvcnlDb2x1bW5zKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IGluZGV4ICUgdGhpcy5pbnZlbnRvcnlDb2x1bW5zO1xuXG4gICAgICAgICAgICAvLyDorqHnrpfkvY3nva7vvIjkvb/nlKjlrp7pmYXmmL7npLrlpKflsI/vvIznoa7kv53ntKflr4bmjpLliJfvvIzml6Dpl7TpmpnvvIlcbiAgICAgICAgICAgIGNvbnN0IHggPSBzdGFydFggKyBjb2wgKiBkaXNwbGF5U2l6ZTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBzdGFydFkgLSByb3cgKiBkaXNwbGF5U2l6ZTtcblxuICAgICAgICAgICAgLy8g6K6+572u5L2N572u77yI56Gu5L+d5Zyo5a655Zmo6IyD5Zu05YaF77yJXG4gICAgICAgICAgICBzbG90Tm9kZS5zZXRQb3NpdGlvbih4LCB5KTtcblxuICAgICAgICAgICAgLy8g5by65Yi26K6+572u6IqC54K55aSn5bCP5Li6c2xvdFNpemXvvIjopobnm5ZQcmVmYWLnmoTpu5jorqTlpKflsI/vvIlcbiAgICAgICAgICAgIHNsb3ROb2RlLnNldENvbnRlbnRTaXplKHNsb3RTaXplLCBzbG90U2l6ZSk7XG5cbiAgICAgICAgICAgIC8vIOiuvue9ruiKgueCuemUmueCueS4uuWxheS4rVxuICAgICAgICAgICAgc2xvdE5vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuXG4gICAgICAgICAgICAvLyDorr7nva7nvKnmlL7kuLowLjjvvIjlv4XpobvlnKjorr7nva7kvY3nva7kuYvlkI7vvIznoa7kv53kvY3nva7orqHnrpfmraPnoa7vvIlcbiAgICAgICAgICAgIHNsb3ROb2RlLnNldFNjYWxlKDAuOCwgMC44LCAwLjgpO1xuXG4gICAgICAgICAgICAvLyDnoa7kv53oioLngrnlj6/op4FcbiAgICAgICAgICAgIHNsb3ROb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBzbG90Tm9kZS5vcGFjaXR5ID0gMjU1O1xuXG4gICAgICAgICAgICAvLyDosIPmlbTlrZDoioLngrnlpKflsI/vvIhCYWNrZ3JvdW5k44CBSWNvbuetie+8iVxuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBzbG90Tm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2pdO1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOaYr+iDjOaZr+aIluWbvuagh+iKgueCue+8jOiuvue9ruS4uuS4jueItuiKgueCueebuOWQjOWkp+Wwj1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5uYW1lID09PSBcIkJhY2tncm91bmRcIiB8fCBjaGlsZC5uYW1lID09PSBcIkljb25cIikge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5zZXRDb250ZW50U2l6ZShzbG90U2l6ZSwgc2xvdFNpemUpO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDnoa7kv53moLzlrZDlj6/op4HvvIjmt7vliqDog4zmma/vvIlcbiAgICAgICAgICAgIHRoaXMuX2Vuc3VyZVNsb3RWaXNpYmxlKHNsb3ROb2RlLCBpbmRleCk7XG5cbiAgICAgICAgICAgIC8vIOa3u+WKoOi+ueahhue6v+ahhu+8iOeUqOS6juWMuuWIhuavj+S4quagvOWtkO+8iS0g5b+F6aG75Zyo5pyA5ZCO5re75Yqg77yM56Gu5L+d5pi+56S65Zyo5pyA5LiK5bGCXG4gICAgICAgICAgICB0aGlzLl9hZGRTbG90Qm9yZGVyKHNsb3ROb2RlLCBzbG90U2l6ZSk7XG5cbiAgICAgICAgICAgIC8vIOmqjOivgeS9jee9ruaYr+WQpuWcqOWuueWZqOiMg+WbtOWGhe+8iOS9v+eUqOWunumZheaYvuekuuWkp+Wwj++8iVxuICAgICAgICAgICAgY29uc3Qgc2xvdFBvcyA9IHNsb3ROb2RlLmdldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBzbG90SGFsZlNpemUgPSBkaXNwbGF5U2l6ZSAvIDI7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJIYWxmV2lkdGggPSB0b3RhbFdpZHRoIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckhhbGZIZWlnaHQgPSB0b3RhbEhlaWdodCAvIDI7XG5cbiAgICAgICAgICAgIGNvbnN0IGlzSW5SYW5nZSA9IChzbG90UG9zLnggLSBzbG90SGFsZlNpemUgPj0gLWNvbnRhaW5lckhhbGZXaWR0aCkgJiZcbiAgICAgICAgICAgICAgICAoc2xvdFBvcy54ICsgc2xvdEhhbGZTaXplIDw9IGNvbnRhaW5lckhhbGZXaWR0aCkgJiZcbiAgICAgICAgICAgICAgICAoc2xvdFBvcy55IC0gc2xvdEhhbGZTaXplID49IC1jb250YWluZXJIYWxmSGVpZ2h0KSAmJlxuICAgICAgICAgICAgICAgIChzbG90UG9zLnkgKyBzbG90SGFsZlNpemUgPD0gY29udGFpbmVySGFsZkhlaWdodCk7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA8IDUpIHsgLy8g6L6T5Ye65YmNNeS4quagvOWtkOeahOivpue7huS/oeaBr1xuICAgICAgICAgICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5qC85a2QJHtpbmRleH06IOS9jee9rigke3gudG9GaXhlZCgxKX0sICR7eS50b0ZpeGVkKDEpfSksIOWkp+WwjyR7c2xvdFNpemV9eCR7c2xvdFNpemV9LCDlrrnlmajlhoU6ICR7aXNJblJhbmdlID8gJ+KckycgOiAn4pyXJ31gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpc0luUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKGBbQ2hhcmFjdGVyVmlld1VJXSDorablkYrvvJrmoLzlrZAke2luZGV4feS9jee9rui2heWHuuWuueWZqOiMg+WbtO+8geS9jee9rjogKCR7eC50b0ZpeGVkKDEpfSwgJHt5LnRvRml4ZWQoMSl9KSwg5a655Zmo5aSn5bCPOiAke2NvbnRhaW5lclNpemUud2lkdGh9eCR7Y29udGFpbmVyU2l6ZS5oZWlnaHR9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5omL5Yqo5biD5bGA5a6M5oiQ77yM5YWxJHtzbG90cy5sZW5ndGh95Liq5qC85a2QYCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOehruS/nemBk+WFt+agvOWtkOWPr+inge+8iOWmguaenOayoeacieiDjOaZr++8jOa3u+WKoOS4gOS4queugOWNleeahOiDjOaZr++8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBzbG90Tm9kZSAtIOmBk+WFt+agvOWtkOiKgueCuVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIOagvOWtkOe0ouW8lVxuICAgICAqL1xuICAgIF9lbnN1cmVTbG90VmlzaWJsZShzbG90Tm9kZSwgaW5kZXgpIHtcbiAgICAgICAgLy8g5qOA5p+l6IqC54K55piv5ZCm5pyJ5Y+v6KeB55qEU3ByaXRl57uE5Lu2XG4gICAgICAgIGxldCBoYXNWaXNpYmxlU3ByaXRlID0gZmFsc2U7XG4gICAgICAgIGxldCBzcHJpdGVOb2RlID0gbnVsbDtcblxuICAgICAgICAvLyDmo4Dmn6XkuLvoioLngrlcbiAgICAgICAgY29uc3QgbWFpblNwcml0ZSA9IHNsb3ROb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBpZiAobWFpblNwcml0ZSAmJiBtYWluU3ByaXRlLnNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICBoYXNWaXNpYmxlU3ByaXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHNwcml0ZU5vZGUgPSBzbG90Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOajgOafpeWtkOiKgueCue+8iEJhY2tncm91bmTjgIFJY29u562J77yJXG4gICAgICAgIGlmICghaGFzVmlzaWJsZVNwcml0ZSkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBzbG90Tm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkU3ByaXRlID0gY2hpbGQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkU3ByaXRlICYmIGNoaWxkU3ByaXRlLnNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc1Zpc2libGVTcHJpdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzcHJpdGVOb2RlID0gY2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWmguaenOayoeacieWPr+ingeeahFNwcml0Ze+8jOWIm+W7uuS4gOS4queugOWNleeahOiDjOaZr++8iOS4jeWMheWQq+i+ueahhu+8jOi+ueahhueUsV9hZGRTbG90Qm9yZGVy5Y2V54us5aSE55CG77yJXG4gICAgICAgIGlmICghaGFzVmlzaWJsZVNwcml0ZSkge1xuICAgICAgICAgICAgLy8g5qOA5p+l5piv5ZCm5bey5pyJQmFja2dyb3VuZOiKgueCuVxuICAgICAgICAgICAgbGV0IGJnTm9kZSA9IHNsb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKTtcblxuICAgICAgICAgICAgaWYgKCFiZ05vZGUpIHtcbiAgICAgICAgICAgICAgICAvLyDliJvlu7rog4zmma/oioLngrlcbiAgICAgICAgICAgICAgICBiZ05vZGUgPSBuZXcgY2MuTm9kZShcIkJhY2tncm91bmRcIik7XG4gICAgICAgICAgICAgICAgYmdOb2RlLnNldENvbnRlbnRTaXplKHNsb3ROb2RlLmdldENvbnRlbnRTaXplKCkud2lkdGgsIHNsb3ROb2RlLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBiZ05vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuXG4gICAgICAgICAgICAgICAgLy8g5L2/55SoR3JhcGhpY3Pnu4Tku7bnu5jliLbog4zmma/vvIjkuI3nu5jliLbovrnmoYbvvIlcbiAgICAgICAgICAgICAgICBjb25zdCBncmFwaGljcyA9IGJnTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuXG4gICAgICAgICAgICAgICAgLy8g57uY5Yi26IOM5pmv77yI5Y2K6YCP5piO54Gw6Imy77yJXG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gbmV3IGNjLkNvbG9yKDYwLCA2MCwgNjAsIDIwMCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2xvdFNpemUgPSBzbG90Tm9kZS5nZXRDb250ZW50U2l6ZSgpLndpZHRoO1xuICAgICAgICAgICAgICAgIGdyYXBoaWNzLnJlY3QoLXNsb3RTaXplIC8gMiwgLXNsb3RTaXplIC8gMiwgc2xvdFNpemUsIHNsb3RTaXplKTtcbiAgICAgICAgICAgICAgICBncmFwaGljcy5maWxsKCk7XG5cbiAgICAgICAgICAgICAgICBzbG90Tm9kZS5hZGRDaGlsZChiZ05vZGUpO1xuICAgICAgICAgICAgICAgIGJnTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOS4uumBk+WFt+agvOWtkOa3u+WKoOS6hkdyYXBoaWNz6IOM5pmvYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOmBk+WFt+agvOWtkOW3suacieWPr+ingeiDjOaZrzogJHtzcHJpdGVOb2RlLm5hbWV9YCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Li66YGT5YW35qC85a2Q5re75Yqg6L655qGG57q/5qGG77yI55So5LqO5Yy65YiG5q+P5Liq5qC85a2Q77yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IHNsb3ROb2RlIC0g6YGT5YW35qC85a2Q6IqC54K5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNsb3RTaXplIC0g5qC85a2Q5aSn5bCPXG4gICAgICovXG4gICAgX2FkZFNsb3RCb3JkZXIoc2xvdE5vZGUsIHNsb3RTaXplKSB7XG4gICAgICAgIC8vIOajgOafpeaYr+WQpuW3suaciUJvcmRlcuiKgueCue+8jOWmguaenOacieWImeWFiOenu+mZpFxuICAgICAgICBsZXQgYm9yZGVyTm9kZSA9IHNsb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiQm9yZGVyXCIpO1xuICAgICAgICBpZiAoYm9yZGVyTm9kZSkge1xuICAgICAgICAgICAgYm9yZGVyTm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDliJvlu7rovrnmoYboioLngrlcbiAgICAgICAgYm9yZGVyTm9kZSA9IG5ldyBjYy5Ob2RlKFwiQm9yZGVyXCIpO1xuICAgICAgICBib3JkZXJOb2RlLnNldENvbnRlbnRTaXplKHNsb3RTaXplLCBzbG90U2l6ZSk7XG4gICAgICAgIGJvcmRlck5vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuXG4gICAgICAgIC8vIOS9v+eUqEdyYXBoaWNz57uE5Lu257uY5Yi26L655qGG57q/5qGGXG4gICAgICAgIGNvbnN0IGdyYXBoaWNzID0gYm9yZGVyTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuXG4gICAgICAgIC8vIOiuvue9rui+ueahhuagt+W8j++8iOeZveiJsu+8jDXlg4/ntKDlrr3vvIzmm7TmmI7mmL7vvIlcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVdpZHRoID0gNTtcblxuICAgICAgICAvLyDnu5jliLbnn6nlvaLovrnmoYbvvIjku47kuK3lv4PngrnlvIDlp4vnu5jliLbvvIlcbiAgICAgICAgLy8g5rOo5oSP77ya55Sx5LqO6IqC54K55pyJ57yp5pS+MC4477yM5a6e6ZmF5pi+56S65aSn5bCP5Lya5bCP5LiA5Lqb77yM5L2G6L655qGG5Lya5q2j56Gu5pi+56S6XG4gICAgICAgIGNvbnN0IGhhbGZTaXplID0gc2xvdFNpemUgLyAyO1xuICAgICAgICBncmFwaGljcy5yZWN0KC1oYWxmU2l6ZSwgLWhhbGZTaXplLCBzbG90U2l6ZSwgc2xvdFNpemUpO1xuICAgICAgICBncmFwaGljcy5zdHJva2UoKTtcblxuICAgICAgICAvLyDnoa7kv53ovrnmoYboioLngrnlnKjmnIDkuIrlsYLvvIjmnIDlkI7mt7vliqDvvIzmmL7npLrlnKjmnIDliY3pnaLvvIlcbiAgICAgICAgc2xvdE5vZGUuYWRkQ2hpbGQoYm9yZGVyTm9kZSk7XG4gICAgICAgIGJvcmRlck5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICAgIGJvcmRlck5vZGUuekluZGV4ID0gOTk5OyAvLyDkvb/nlKh6SW5kZXjmm7/ku6Plt7Llup/lvIPnmoRzZXRMb2NhbFpPcmRlcu+8jOiuvue9rui+g+mrmOeahOWxgue6p++8jOehruS/neaYvuekuuWcqOacgOWJjemdolxuXG4gICAgICAgIC8vIOehruS/nei+ueahhuiKgueCueWPr+ingVxuICAgICAgICBib3JkZXJOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGJvcmRlck5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW6YGT5YW35qC85a2QXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IHNsb3ROb2RlIC0g6YGT5YW35qC85a2Q6IqC54K5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0g5qC85a2Q57Si5byVXG4gICAgICovXG4gICAgX2luaXRJdGVtU2xvdChzbG90Tm9kZSwgaW5kZXgpIHtcbiAgICAgICAgLy8g5p+l5om+5Zu+5qCH6IqC54K55ZKM5pWw6YeP5qCH562+XG4gICAgICAgIGNvbnN0IGljb25Ob2RlID0gc2xvdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJJY29uXCIpIHx8IHNsb3ROb2RlO1xuICAgICAgICBjb25zdCBjb3VudExhYmVsID0gc2xvdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDb3VudExhYmVsXCIpO1xuXG4gICAgICAgIC8vIOWIneWni+eKtuaAge+8muepuuagvOWtkFxuICAgICAgICBpZiAoaWNvbk5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZSA9IGljb25Ob2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgaWYgKHNwcml0ZSkge1xuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG51bGw7IC8vIOa4heepuuWbvuagh1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWNvbk5vZGUub3BhY2l0eSA9IDEwMDsgLy8g5Y2K6YCP5piO5pi+56S656m65qC85a2QXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY291bnRMYWJlbCkge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBjb3VudExhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIlwiOyAvLyDmuIXnqbrmlbDph49cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOS/neWtmOagvOWtkOe0ouW8lVxuICAgICAgICBzbG90Tm9kZS5fc2xvdEluZGV4ID0gaW5kZXg7XG4gICAgICAgIHNsb3ROb2RlLl9pc0VtcHR5ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5pu05paw6YGT5YW35qCP5pi+56S677yI5qC55o2u5b2T5YmN6YCJ5Lit55qE6KeS6Imy77yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhc3luYyBfdXBkYXRlSW52ZW50b3J5KCkge1xuICAgICAgICBpZiAoIXRoaXMuaW52ZW50b3J5Q29udGFpbmVyIHx8ICF0aGlzLmN1cnJlbnRVbml0RGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5LuO6KeS6Imy5pWw5o2u5Lit6I635Y+W6YGT5YW35YiX6KGo77yI5pSv5oyB5byC5q2l77yJXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgdGhpcy5fZ2V0Q2hhcmFjdGVySXRlbXModGhpcy5jdXJyZW50VW5pdERhdGEubmFtZSk7XG5cbiAgICAgICAgLy8g5pu05paw5q+P5Liq5qC85a2QXG4gICAgICAgIGNvbnN0IHNsb3RzID0gdGhpcy5pbnZlbnRvcnlDb250YWluZXIuY2hpbGRyZW47XG4gICAgICAgIHNsb3RzLmZvckVhY2goKHNsb3ROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgaXRlbXMubGVuZ3RoICYmIGl0ZW1zW2luZGV4XSkge1xuICAgICAgICAgICAgICAgIC8vIOaciemBk+WFt++8jOaYvuekuumBk+WFt+S/oeaBr1xuICAgICAgICAgICAgICAgIHRoaXMuX3NldEl0ZW1TbG90KHNsb3ROb2RlLCBpdGVtc1tpbmRleF0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDnqbrmoLzlrZBcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0SXRlbVNsb3Qoc2xvdE5vZGUsIGluZGV4KTtcblxuICAgICAgICAgICAgICAgIC8vIOa4heepuuaJgOacieS6i+S7tu+8iOepuuagvOWtkOS4jemcgOimgeaYvuekunRvb2x0aXDvvIlcbiAgICAgICAgICAgICAgICBzbG90Tm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTik7XG4gICAgICAgICAgICAgICAgc2xvdE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX1VQKTtcbiAgICAgICAgICAgICAgICBzbG90Tm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQpO1xuICAgICAgICAgICAgICAgIHNsb3ROb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpO1xuICAgICAgICAgICAgICAgIHNsb3ROb2RlLl90b3VjaFN0YXJ0VGltZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDorr7nva7pgZPlhbfmoLzlrZDlhoXlrrlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gc2xvdE5vZGUgLSDpgZPlhbfmoLzlrZDoioLngrlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSAtIOmBk+WFt+aVsOaNriB7IGlkLCBuYW1lLCBpY29uLCBjb3VudCB9XG4gICAgICovXG4gICAgX3NldEl0ZW1TbG90KHNsb3ROb2RlLCBpdGVtKSB7XG4gICAgICAgIGlmICghaXRlbSB8fCAhaXRlbS5jb3VudCB8fCBpdGVtLmNvdW50IDw9IDApIHtcbiAgICAgICAgICAgIC8vIOmBk+WFt+S4jeWtmOWcqOaIluaVsOmHj+S4ujDvvIzmuIXnqbrmoLzlrZBcbiAgICAgICAgICAgIHRoaXMuX2luaXRJdGVtU2xvdChzbG90Tm9kZSwgc2xvdE5vZGUuX3Nsb3RJbmRleCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmn6Xmib7lm77moIfoioLngrnlkozmlbDph4/moIfnrb5cbiAgICAgICAgY29uc3QgaWNvbk5vZGUgPSBzbG90Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIkljb25cIikgfHwgc2xvdE5vZGU7XG4gICAgICAgIGNvbnN0IGNvdW50TGFiZWwgPSBzbG90Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNvdW50TGFiZWxcIik7XG5cbiAgICAgICAgLy8g6K6+572u5Zu+5qCHXG4gICAgICAgIGlmIChpY29uTm9kZSAmJiBpdGVtLmljb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZSA9IGljb25Ob2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgaWYgKHNwcml0ZSkge1xuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IGl0ZW0uaWNvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGljb25Ob2RlLm9wYWNpdHkgPSAyNTU7IC8vIOWujOWFqOS4jemAj+aYjlxuICAgICAgICB9XG5cbiAgICAgICAgLy8g6K6+572u5pWw6YePXG4gICAgICAgIGlmIChjb3VudExhYmVsKSB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGNvdW50TGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNvdW50ICYmIGl0ZW0uY291bnQgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IGl0ZW0uY291bnQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOS/neWtmOmBk+WFt+aVsOaNrlxuICAgICAgICBzbG90Tm9kZS5faXRlbURhdGEgPSBpdGVtO1xuICAgICAgICBzbG90Tm9kZS5faXNFbXB0eSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIOiusOW9leinpuaRuOW8gOWni+aXtumXtO+8iOeUqOS6juWMuuWIhueCueWHu+WSjOmVv+aMie+8iVxuICAgICAgICBzbG90Tm9kZS5fdG91Y2hTdGFydFRpbWUgPSBudWxsO1xuICAgICAgICBzbG90Tm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQpO1xuICAgICAgICBzbG90Tm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBzbG90Tm9kZS5fdG91Y2hTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAvLyDnu5Hlrprop6bmkbjnu5PmnZ/kuovku7bvvIjlpITnkIblt6bplK7ngrnlh7vlkozplb/mjInvvIlcbiAgICAgICAgc2xvdE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7IC8vIOWFiOenu+mZpOaXp+eahOS6i+S7tlxuICAgICAgICBzbG90Tm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlc3NUaW1lID0gc2xvdE5vZGUuX3RvdWNoU3RhcnRUaW1lID8gKERhdGUubm93KCkgLSBzbG90Tm9kZS5fdG91Y2hTdGFydFRpbWUpIDogMDtcbiAgICAgICAgICAgIGNvbnN0IExPTkdfUFJFU1NfVElNRSA9IDUwMDsgLy8g6ZW/5oyJNTAw5q+r56eSXG5cbiAgICAgICAgICAgIGlmIChwcmVzc1RpbWUgPj0gTE9OR19QUkVTU19USU1FKSB7XG4gICAgICAgICAgICAgICAgLy8g6ZW/5oyJ77ya5pi+56S66YGT5YW35L+h5oGv77yI56e75Yqo6K6+5aSH5LiK5qih5ouf5Y+z6ZSu77yJXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd0l0ZW1Ub29sdGlwT25Ub3VjaChzbG90Tm9kZSwgaXRlbSwgZXZlbnQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcmVzc1RpbWUgPiAwICYmIHByZXNzVGltZSA8IExPTkdfUFJFU1NfVElNRSkge1xuICAgICAgICAgICAgICAgIC8vIOefreaMie+8muS9v+eUqOmBk+WFt++8iOW3pumUrueCueWHu++8iVxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX29uSXRlbVNsb3RDbGljayhzbG90Tm9kZSwgaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzbG90Tm9kZS5fdG91Y2hTdGFydFRpbWUgPSBudWxsO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAvLyDnu5Hlrprlj7PplK7ngrnlh7vkuovku7bvvIjmmL7npLrpgZPlhbfkv6Hmga/vvIktIOS7hVBD56uvXG4gICAgICAgIHRoaXMuX3NldHVwSXRlbVRvb2x0aXAoc2xvdE5vZGUsIGl0ZW0pO1xuXG4gICAgICAgIC8vIOehruS/neWPr+S7peaOpeaUtuinpuaRuOS6i+S7tlxuICAgICAgICBzbG90Tm9kZS5zZXRDb250ZW50U2l6ZSh0aGlzLml0ZW1TbG90U2l6ZSwgdGhpcy5pdGVtU2xvdFNpemUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDorr7nva7pgZPlhbfmoLzlrZDnmoTlj7PplK7ngrnlh7vkuovku7bvvIjmmL7npLrpgZPlhbfkv6Hmga/vvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gc2xvdE5vZGUgLSDpgZPlhbfmoLzlrZDoioLngrlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSAtIOmBk+WFt+aVsOaNrlxuICAgICAqL1xuICAgIF9zZXR1cEl0ZW1Ub29sdGlwKHNsb3ROb2RlLCBpdGVtKSB7XG4gICAgICAgIGlmICghdGhpcy5pdGVtVG9vbHRpcCkge1xuICAgICAgICAgICAgLy8g5aaC5p6c5rKh5pyJ6K6+572udG9vbHRpcOiKgueCue+8jOi3s+i/h1xuICAgICAgICAgICAgY2Mud2FybihcIltDaGFyYWN0ZXJWaWV3VUldIGl0ZW1Ub29sdGlw6IqC54K55pyq57uR5a6a77yM6Lez6L+HdG9vbHRpcOiuvue9rlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRvb2x0aXBDb21wb25lbnQgPSB0aGlzLml0ZW1Ub29sdGlwLmdldENvbXBvbmVudChcIkl0ZW1Ub29sdGlwXCIpO1xuICAgICAgICBpZiAoIXRvb2x0aXBDb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJbQ2hhcmFjdGVyVmlld1VJXSBpdGVtVG9vbHRpcOiKgueCueayoeaciUl0ZW1Ub29sdGlw57uE5Lu277yM6K+35re75YqgSXRlbVRvb2x0aXDnu4Tku7ZcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWl0ZW0gfHwgIWl0ZW0uaWQpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJbQ2hhcmFjdGVyVmlld1VJXSDpgZPlhbfmlbDmja7ml6DmlYjvvIznvLrlsJFpZOWtl+autVwiLCBpdGVtKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOa3u+WKoOiwg+ivleaXpeW/l1xuICAgICAgICBjYy5sb2coXCJbQ2hhcmFjdGVyVmlld1VJXSDorr7nva7pgZPlhbflj7PplK7ngrnlh7t0b29sdGlwOlwiLCBpdGVtLmlkLCBcInRvb2x0aXDoioLngrk6XCIsIHRoaXMuaXRlbVRvb2x0aXAubmFtZSk7XG5cbiAgICAgICAgLy8g56e76Zmk5pen55qE6byg5qCH5LqL5Lu255uR5ZCsXG4gICAgICAgIHNsb3ROb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOKTtcbiAgICAgICAgc2xvdE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX1VQKTtcblxuICAgICAgICAvLyDnu5HlrprpvKDmoIflj7PplK7mjInkuIvkuovku7bvvIjmmL7npLrpgZPlhbfkv6Hmga/vvIlcbiAgICAgICAgc2xvdE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAvLyDmo4Dmn6XmmK/lkKbmmK/lj7PplK5cbiAgICAgICAgICAgIC8vIOazqOaEj++8mmNjLkV2ZW50LkV2ZW50TW91c2UuQlVUVE9OX1JJR0hUIOeahOWAvOaYryAyXG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBldmVudC5nZXRCdXR0b24gPyBldmVudC5nZXRCdXR0b24oKSA6IC0xO1xuICAgICAgICAgICAgaWYgKGJ1dHRvbiA9PT0gMiB8fCBidXR0b24gPT09IGNjLkV2ZW50LkV2ZW50TW91c2UuQlVUVE9OX1JJR0hUKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIOmYu+atouS6i+S7tuWGkuazoe+8jOmYsuatouinpuWPkeWPs+mUruiPnOWNlVxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0ICYmIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIOmYu+atoum7mOiupOWPs+mUruiPnOWNlVxuXG4gICAgICAgICAgICAgICAgLy8g5L2/55SoaXRlbS5pZOS9nOS4uml0ZW1JZOS8oOmAkue7mXRvb2x0aXBcbiAgICAgICAgICAgICAgICBjb25zdCB0b29sdGlwRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbUlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICBjb3VudDogaXRlbS5jb3VudFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyDkvKDpgJLpgZPlhbfmoLzlrZDoioLngrnvvIzorql0b29sdGlw5pi+56S65Zyo6IqC54K55Y+z5LiK5pa5XG4gICAgICAgICAgICAgICAgdG9vbHRpcENvbXBvbmVudC5zaG93SXRlbUluZm8odG9vbHRpcERhdGEsIHNsb3ROb2RlKTtcblxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIltDaGFyYWN0ZXJWaWV3VUldIOWPs+mUrueCueWHu+mBk+WFt++8jOaYvuekuuS/oeaBrzpcIiwgaXRlbS5pZCwgXCLmjInpkq46XCIsIGJ1dHRvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIC8vIOe7keWumum8oOagh+WPs+mUrumHiuaUvuS6i+S7tu+8iOmakOiXj+mBk+WFt+S/oeaBr++8iVxuICAgICAgICBzbG90Tm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9VUCwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAvLyDmo4Dmn6XmmK/lkKbmmK/lj7PplK5cbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LmdldEJ1dHRvbiA/IGV2ZW50LmdldEJ1dHRvbigpIDogLTE7XG4gICAgICAgICAgICBpZiAoYnV0dG9uID09PSAyIHx8IGJ1dHRvbiA9PT0gY2MuRXZlbnQuRXZlbnRNb3VzZS5CVVRUT05fUklHSFQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCAmJiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRvb2x0aXBDb21wb25lbnQuaGlkZUl0ZW1JbmZvKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWcqOinpuaRuOiuvuWkh+S4iuaYvuekuumBk+WFt+S/oeaBr++8iOmVv+aMieinpuWPke+8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBzbG90Tm9kZSAtIOmBk+WFt+agvOWtkOiKgueCuVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIC0g6YGT5YW35pWw5o2uXG4gICAgICogQHBhcmFtIHtjYy5FdmVudH0gZXZlbnQgLSDop6bmkbjkuovku7ZcbiAgICAgKi9cbiAgICBfc2hvd0l0ZW1Ub29sdGlwT25Ub3VjaChzbG90Tm9kZSwgaXRlbSwgZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLml0ZW1Ub29sdGlwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0b29sdGlwQ29tcG9uZW50ID0gdGhpcy5pdGVtVG9vbHRpcC5nZXRDb21wb25lbnQoXCJJdGVtVG9vbHRpcFwiKTtcbiAgICAgICAgaWYgKCF0b29sdGlwQ29tcG9uZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0b29sdGlwRGF0YSA9IHtcbiAgICAgICAgICAgIGl0ZW1JZDogaXRlbS5pZCxcbiAgICAgICAgICAgIGNvdW50OiBpdGVtLmNvdW50XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g5Lyg6YCS6YGT5YW35qC85a2Q6IqC54K577yM6K6pdG9vbHRpcOaYvuekuuWcqOiKgueCueWPs+S4iuaWuVxuICAgICAgICB0b29sdGlwQ29tcG9uZW50LnNob3dJdGVtSW5mbyh0b29sdGlwRGF0YSwgc2xvdE5vZGUpO1xuXG4gICAgICAgIGNjLmxvZyhcIltDaGFyYWN0ZXJWaWV3VUldIOmVv+aMiemBk+WFt++8jOaYvuekuuS/oeaBrzpcIiwgaXRlbS5pZCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOmBk+WFt+agvOWtkOeCueWHu+S6i+S7tu+8iOS9v+eUqOmBk+WFt++8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBzbG90Tm9kZSAtIOmBk+WFt+agvOWtkOiKgueCuVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIC0g6YGT5YW35pWw5o2uXG4gICAgICovXG4gICAgYXN5bmMgX29uSXRlbVNsb3RDbGljayhzbG90Tm9kZSwgaXRlbSkge1xuICAgICAgICBpZiAoIWl0ZW0gfHwgIWl0ZW0uY29uZmlnKSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiW0NoYXJhY3RlclZpZXdVSV0g5peg5pWI55qE6YGT5YW35pWw5o2uXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5qOA5p+l5piv5ZCm5pyJ5b2T5YmN5pi+56S655qE6KeS6ImyXG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50RGlzcGxheVByZWZhYikge1xuICAgICAgICAgICAgY2Mud2FybihcIltDaGFyYWN0ZXJWaWV3VUldIOivt+WFiOmAieaLqeS4gOS4quinkuiJslwiKTtcbiAgICAgICAgICAgIC8vIOWPr+S7peaYvuekuuaPkOekuue7meeUqOaIt1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgSXRlbVN5c3RlbSA9IHJlcXVpcmUoXCJJdGVtU3lzdGVtXCIpO1xuXG4gICAgICAgIC8vIOS9v+eUqOmBk+WFt1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBJdGVtU3lzdGVtLnVzZUl0ZW0odGhpcy5jdXJyZW50RGlzcGxheVByZWZhYiwgaXRlbS5pZCk7XG5cbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOKckyDkvb/nlKjpgZPlhbfmiJDlip86ICR7aXRlbS5uYW1lfSAtICR7cmVzdWx0Lm1lc3NhZ2V9YCk7XG5cbiAgICAgICAgICAgIC8vIOWIt+aWsOmBk+WFt+agj+aYvuekulxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fdXBkYXRlSW52ZW50b3J5KCk7XG5cbiAgICAgICAgICAgIC8vIOabtOaWsOinkuiJsuWxnuaAp+aYvuekuu+8iOWmguaenOWxnuaAp+mdouadv+W3suaJk+W8gO+8iVxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHNQYW5lbCAmJiB0aGlzLnN0YXRzUGFuZWwuYWN0aXZlICYmIHRoaXMuY3VycmVudFVuaXREYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd1N0YXRzUGFuZWwodGhpcy5jdXJyZW50VW5pdERhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUT0RPOiDlj6/ku6XmmL7npLrkvb/nlKjmiJDlip/nmoTmj5DnpLpVSVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2Mud2FybihgW0NoYXJhY3RlclZpZXdVSV0g4pyXIOS9v+eUqOmBk+WFt+Wksei0pTogJHtpdGVtLm5hbWV9IC0gJHtyZXN1bHQubWVzc2FnZX1gKTtcbiAgICAgICAgICAgIC8vIFRPRE86IOWPr+S7peaYvuekuumUmeivr+aPkOekulVJXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6K6+572u6YGT5YW35Zu+5qCH77yI5LuOSXRlbUljb25TZXR0ZXLnu4Tku7bojrflj5bvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9zZXR1cEl0ZW1JY29ucygpIHtcbiAgICAgICAgLy8g5p+l5om+5Zy65pmv5Lit55qESXRlbUljb25TZXR0ZXLnu4Tku7ZcbiAgICAgICAgY29uc3Qgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xuICAgICAgICBpZiAoIXNjZW5lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYW52YXMgPSBzY2VuZS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKTtcbiAgICAgICAgaWYgKCFjYW52YXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOafpeaJvkl0ZW1JY29uU2V0dGVy57uE5Lu2XG4gICAgICAgIGNvbnN0IGljb25TZXR0ZXIgPSBjYW52YXMuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihcIkl0ZW1JY29uU2V0dGVyXCIpO1xuICAgICAgICBpZiAoaWNvblNldHRlcikge1xuICAgICAgICAgICAgY2MubG9nKFwiW0NoYXJhY3RlclZpZXdVSV0g5om+5YiwSXRlbUljb25TZXR0ZXLnu4Tku7bvvIzpgZPlhbflm77moIflt7Lorr7nva5cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5sb2coXCJbQ2hhcmFjdGVyVmlld1VJXSDmnKrmib7liLBJdGVtSWNvblNldHRlcue7hOS7tu+8jOmBk+WFt+Wbvuagh+mcgOimgeWcqOS7o+eggeS4reiuvue9rlwiKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbpu5jorqTpgZPlhbfvvIjmt7vliqA15Liq5Y2H57qn6I2v5rC077yM5LuF6aaW5qyh6L+b5YWl5pe277yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhc3luYyBfaW5pdERlZmF1bHRJdGVtcygpIHtcbiAgICAgICAgY29uc3QgSXRlbURhdGFNYW5hZ2VyID0gcmVxdWlyZShcIkl0ZW1EYXRhTWFuYWdlclwiKTtcblxuICAgICAgICAvLyDmo4Dmn6XmmK/lkKblt7Lnu4/liJ3lp4vljJbov4fpgZPlhbfvvIjkvb/nlKhsb2NhbFN0b3JhZ2XmoIflv5fvvIlcbiAgICAgICAgY29uc3QgSU5JVF9GTEFHX0tFWSA9IFwiY2hhcmFjdGVyX3ZpZXdfaXRlbXNfaW5pdGlhbGl6ZWRcIjtcbiAgICAgICAgY29uc3QgaGFzSW5pdGlhbGl6ZWQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oSU5JVF9GTEFHX0tFWSk7XG5cbiAgICAgICAgaWYgKGhhc0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAvLyDlt7Lnu4/liJ3lp4vljJbov4fvvIzkuI3lho3oh6rliqjmt7vliqDpgZPlhbdcbiAgICAgICAgICAgIGNjLmxvZyhcIltDaGFyYWN0ZXJWaWV3VUldIOmBk+WFt+W3suWIneWni+WMlui/h++8jOi3s+i/h+iHquWKqOa3u+WKoFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOajgOafpeaYr+WQpuW3suacieWNh+e6p+iNr+awtFxuICAgICAgICBjb25zdCBjdXJyZW50Q291bnQgPSBhd2FpdCBJdGVtRGF0YU1hbmFnZXIuZ2V0SXRlbUNvdW50KFwidXBncmFkZV9wb3Rpb25cIik7XG5cbiAgICAgICAgLy8g5aaC5p6c6L+Y5rKh5pyJ5Y2H57qn6I2v5rC077yM5re75YqgNeS4qu+8iOS7hemmluasoe+8iVxuICAgICAgICBpZiAoY3VycmVudENvdW50ID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgSXRlbURhdGFNYW5hZ2VyLmFkZEl0ZW0oXCJ1cGdyYWRlX3BvdGlvblwiLCAxMCk7XG4gICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcIltDaGFyYWN0ZXJWaWV3VUldIOKckyDpppbmrKHov5vlhaXvvIzlt7Lmt7vliqAxMOS4quWNh+e6p+iNr+awtOWIsOWFqOWxgOmBk+WFt+agj1wiKTtcblxuICAgICAgICAgICAgICAgIC8vIOagh+iusOW3suWIneWni+WMlu+8jOehruS/neWPquWIneWni+WMluS4gOasoVxuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShJTklUX0ZMQUdfS0VZLCBcInRydWVcIik7XG5cbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzlvZPliY3lt7LpgInkuK3op5LoibLvvIzliLfmlrDpgZPlhbfmoI/mmL7npLpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VW5pdERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fdXBkYXRlSW52ZW50b3J5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIltDaGFyYWN0ZXJWaWV3VUldIOKclyDmt7vliqDljYfnuqfoja/msLTlpLHotKVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzlt7LmnInljYfnuqfoja/msLTvvIzkuZ/moIforrDkuLrlt7LliJ3lp4vljJbvvIjlj6/og73mmK/ku47lhbbku5blnLDmlrnmt7vliqDnmoTvvIlcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShJTklUX0ZMQUdfS0VZLCBcInRydWVcIik7XG4gICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOWFqOWxgOmBk+WFt+agj+W3suaciSAke2N1cnJlbnRDb3VudH0g5Liq5Y2H57qn6I2v5rC077yM5qCH6K6w5Li65bey5Yid5aeL5YyWYCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6I635Y+W6YGT5YW35YiX6KGo77yI5YWo5bGA5YWx5Lqr77yM5omA5pyJ6KeS6Imy5YWx55So77yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFjdGVyTmFtZSAtIOinkuiJsuWQjeensO+8iOW3suW6n+W8g++8jOS/neeVmeeUqOS6juWFvOWuue+8iVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PnxBcnJheX0g6YGT5YW35YiX6KGoIFt7IGlkLCBuYW1lLCBpY29uLCBjb3VudCB9LCAuLi5d77yI5pyN5Yqh5Zmo5qih5byP5LiL6L+U5ZueUHJvbWlzZe+8iVxuICAgICAqL1xuICAgIGFzeW5jIF9nZXRDaGFyYWN0ZXJJdGVtcyhjaGFyYWN0ZXJOYW1lKSB7XG4gICAgICAgIGNvbnN0IEl0ZW1EYXRhTWFuYWdlciA9IHJlcXVpcmUoXCJJdGVtRGF0YU1hbmFnZXJcIik7XG5cbiAgICAgICAgLy8g6I635Y+W5YWo5bGA6YGT5YW377yI5omA5pyJ6KeS6Imy5YWx5Lqr77yM5b+955WlY2hhcmFjdGVyTmFtZeWPguaVsO+8iVxuICAgICAgICBjb25zdCBpdGVtc1dpdGhDb25maWcgPSBhd2FpdCBJdGVtRGF0YU1hbmFnZXIuZ2V0QWxsSXRlbXNXaXRoQ29uZmlnKCk7XG5cbiAgICAgICAgLy8g6L2s5o2i5Li65pi+56S65qC85byP77yM5bm26L+H5ruk5o6J5pWw6YeP5Li6MOeahOmBk+WFt++8iOS4gOasoeaAp+a2iOiAl+WTgeS9v+eUqOWujOWQjuW6lOivpea2iOWkse+8iVxuICAgICAgICByZXR1cm4gaXRlbXNXaXRoQ29uZmlnXG4gICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jb3VudCA+IDApIC8vIOWPquaYvuekuuaVsOmHj+Wkp+S6jjDnmoTpgZPlhbdcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaXRlbUlkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLmNvbmZpZy5kaXNwbGF5TmFtZSB8fCBpdGVtLmNvbmZpZy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBpdGVtLmNvbmZpZy5pY29uLCAvLyBTcHJpdGVGcmFtZei1hOa6kFxuICAgICAgICAgICAgICAgICAgICBjb3VudDogaXRlbS5jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBpdGVtLmNvbmZpZyAvLyDkv53lrZjlrozmlbTphY3nva7vvIznlKjkuo7lkI7nu63kvb/nlKjpgZPlhbdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIm+W7uuWktOWDj1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHVuaXREYXRhIC0g5Y2V5L2N5pWw5o2uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRlYW0gLSDpmJ/kvI3nsbvlnovvvIhcImhlcm9cIiDmiJYgXCJtb25zdGVyXCLvvIlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSDntKLlvJVcbiAgICAgKi9cbiAgICBfY3JlYXRlQXZhdGFyKHVuaXREYXRhLCB0ZWFtLCBpbmRleCkge1xuICAgICAgICAvLyDlrp7kvovljJblpLTlg49QcmVmYWJcbiAgICAgICAgY29uc3QgYXZhdGFyTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYXZhdGFyUHJlZmFiKTtcbiAgICAgICAgYXZhdGFyTm9kZS5uYW1lID0gYEF2YXRhcl8ke3VuaXREYXRhLm5hbWV9YDtcblxuICAgICAgICAvLyDkv53lrZjljZXkvY3mlbDmja7liLDoioLngrlcbiAgICAgICAgYXZhdGFyTm9kZS5fdW5pdERhdGEgPSB1bml0RGF0YTtcbiAgICAgICAgYXZhdGFyTm9kZS5fdGVhbSA9IHRlYW07XG5cbiAgICAgICAgLy8g5re75Yqg5Yiw5a655ZmoXG4gICAgICAgIHRoaXMuYXZhdGFyTGlzdENvbnRhaW5lci5hZGRDaGlsZChhdmF0YXJOb2RlKTtcblxuICAgICAgICAvLyDorr7nva7kvY3nva7vvIjlnoLnm7TmjpLliJfvvIlcbiAgICAgICAgY29uc3Qgc3BhY2luZyA9IHRoaXMuYXZhdGFyU3BhY2luZyB8fCAxMDA7XG4gICAgICAgIGNvbnN0IHN0YXJ0WSA9IDIwMDsgLy8g5LuO5LiK5pa55byA5aeLXG4gICAgICAgIGNvbnN0IHkgPSBzdGFydFkgLSAoaW5kZXggKiBzcGFjaW5nKTtcbiAgICAgICAgYXZhdGFyTm9kZS5zZXRQb3NpdGlvbigwLCB5KTsvL1RPRE86IOi/memHjOmcgOimgeagueaNrumYn+S8jeexu+Wei+iuvue9ruS9jee9rlxuXG4gICAgICAgIC8vIOiuvue9ruWktOWDj+WbvueJh1xuICAgICAgICBjb25zdCBhdmF0YXJDb21wID0gYXZhdGFyTm9kZS5nZXRDb21wb25lbnQoXCJBdmF0YXJJdGVtXCIpO1xuICAgICAgICBpZiAoYXZhdGFyQ29tcCkge1xuICAgICAgICAgICAgYXZhdGFyQ29tcC5pbml0KHVuaXREYXRhLCB0ZWFtLCB0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWmguaenOayoeaciee7hOS7tu+8jOaJi+WKqOiuvue9rlxuICAgICAgICAgICAgY29uc3QgaWNvbk5vZGUgPSBhdmF0YXJOb2RlLmdldENoaWxkQnlOYW1lKFwiSWNvblwiKTtcbiAgICAgICAgICAgIGlmIChpY29uTm9kZSAmJiB1bml0RGF0YS5pY29uKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlID0gaWNvbk5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNwcml0ZSkge1xuICAgICAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB1bml0RGF0YS5pY29uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOe7keWumueCueWHu+S6i+S7tlxuICAgICAgICBhdmF0YXJOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fb25BdmF0YXJDbGljayh1bml0RGF0YSwgdGVhbSk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIC8vIOehruS/neWPr+S7peaOpeaUtuinpuaRuOS6i+S7tlxuICAgICAgICBhdmF0YXJOb2RlLnNldENvbnRlbnRTaXplKDEwMCwgMTAwKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5aS05YOP54K55Ye75LqL5Lu2XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdW5pdERhdGEgLSDljZXkvY3mlbDmja5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGVhbSAtIOmYn+S8jeexu+Wei1xuICAgICAqL1xuICAgIF9vbkF2YXRhckNsaWNrKHVuaXREYXRhLCB0ZWFtKSB7XG4gICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g54K55Ye75aS05YOPOiAke3VuaXREYXRhLm5hbWV9YCk7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXlDaGFyYWN0ZXJQcmVmYWIodW5pdERhdGEpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmmL7npLrkurrnianljp/lnotcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB1bml0RGF0YSAtIOWNleS9jeaVsOaNrlxuICAgICAqL1xuICAgIF9kaXNwbGF5Q2hhcmFjdGVyUHJlZmFiKHVuaXREYXRhKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGFyYWN0ZXJEaXNwbGF5QXJlYSkge1xuICAgICAgICAgICAgY2Mud2FybihcIltDaGFyYWN0ZXJWaWV3VUldIOacquiuvue9rmNoYXJhY3RlckRpc3BsYXlBcmVh77yM5peg5rOV5pi+56S65Lq654mp5Y6f5Z6LXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5riF6Zmk5LmL5YmN5pi+56S655qE5Y6f5Z6LXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6ZqQ6JeP5bGe5oCn6Z2i5p2/XG4gICAgICAgIGlmICh0aGlzLnN0YXRzUGFuZWwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdHNQYW5lbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOS/neWtmOW9k+WJjeWNleS9jeaVsOaNrlxuICAgICAgICB0aGlzLmN1cnJlbnRVbml0RGF0YSA9IHVuaXREYXRhO1xuXG4gICAgICAgIC8vIOabtOaWsOmBk+WFt+agj+aYvuekulxuICAgICAgICB0aGlzLl91cGRhdGVJbnZlbnRvcnkoKTtcblxuICAgICAgICAvLyDlpoLmnpzmnIlQcmVmYWLvvIzlrp7kvovljJblubbmmL7npLpcbiAgICAgICAgaWYgKHVuaXREYXRhLnByZWZhYikge1xuICAgICAgICAgICAgY29uc3QgcHJlZmFiSW5zdGFuY2UgPSBjYy5pbnN0YW50aWF0ZSh1bml0RGF0YS5wcmVmYWIpO1xuICAgICAgICAgICAgcHJlZmFiSW5zdGFuY2UubmFtZSA9IGBEaXNwbGF5XyR7dW5pdERhdGEubmFtZX1gO1xuXG4gICAgICAgICAgICAvLyDkv53lrZjljp/lp4vop5LoibLlkI3np7DvvIznlKjkuo7mlbDmja7kv53lrZjlkozliqDovb1cbiAgICAgICAgICAgIHByZWZhYkluc3RhbmNlLl9vcmlnaW5hbENoYXJhY3Rlck5hbWUgPSB1bml0RGF0YS5uYW1lO1xuXG4gICAgICAgICAgICAvLyDnoa7kv53oioLngrnlj6/op4FcbiAgICAgICAgICAgIHByZWZhYkluc3RhbmNlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBwcmVmYWJJbnN0YW5jZS5vcGFjaXR5ID0gMjU1O1xuXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlckRpc3BsYXlBcmVhLmFkZENoaWxkKHByZWZhYkluc3RhbmNlKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIgPSBwcmVmYWJJbnN0YW5jZTtcblxuICAgICAgICAgICAgLy8g6K6+572u5L2N572u5ZKM57yp5pS+77yI5bGF5Lit5pi+56S677yM57yp5bCP5pi+56S677yM5L2N572u5ZCR5LiK6LCD5pW077yJXG4gICAgICAgICAgICBwcmVmYWJJbnN0YW5jZS5zZXRQb3NpdGlvbigwLCAxMDApO1xuICAgICAgICAgICAgcHJlZmFiSW5zdGFuY2Uuc2V0U2NhbGUoMC43KTtcblxuICAgICAgICAgICAgLy8g5Yid5aeL5YyW6KeS6Imy5bGe5oCn77yI5qC55o2u5L+d5a2Y55qE562J57qn5pWw5o2u77yM5pSv5oyB5byC5q2l77yJXG4gICAgICAgICAgICB0aGlzLl9pbml0Q2hhcmFjdGVyU3RhdHMocHJlZmFiSW5zdGFuY2UsIHVuaXREYXRhKS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbQ2hhcmFjdGVyVmlld1VJXSDliJ3lp4vljJbop5LoibLlsZ7mgKflpLHotKU6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8g57uR5a6a54K55Ye75LqL5Lu277yI54K55Ye75Lq654mp5Y6f5Z6L5pi+56S65bGe5oCn6Z2i5p2/77yJXG4gICAgICAgICAgICBwcmVmYWJJbnN0YW5jZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyDpmLvmraLkuovku7blhpLms6FcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93U3RhdHNQYW5lbCh1bml0RGF0YSk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgICAgLy8g56Gu5L+d5Y+v5Lul5o6l5pS26Kem5pG45LqL5Lu2XG4gICAgICAgICAgICBwcmVmYWJJbnN0YW5jZS5zZXRDb250ZW50U2l6ZSgyMDAsIDIwMCk7XG5cbiAgICAgICAgICAgIC8vIOagh+iusOi/meaYr+S6uueJqeWOn+Wei+iKgueCue+8iOeUqOS6juWIpOaWreeCueWHu+S9jee9ru+8iVxuICAgICAgICAgICAgcHJlZmFiSW5zdGFuY2UuX2lzQ2hhcmFjdGVyUHJlZmFiID0gdHJ1ZTtcblxuICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDinJMg5pi+56S65Lq654mp5Y6f5Z6LOiAke3VuaXREYXRhLm5hbWV9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy53YXJuKGBbQ2hhcmFjdGVyVmlld1VJXSDinJcg5Y2V5L2NICR7dW5pdERhdGEubmFtZX0g5rKh5pyJ6K6+572ucHJlZmFiYCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW6KeS6Imy5bGe5oCn77yI5qC55o2u5L+d5a2Y55qE562J57qn5pWw5o2u77yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IHByZWZhYkluc3RhbmNlIC0g5Lq654mp5Y6f5Z6L5a6e5L6LXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHVuaXREYXRhIC0g5Y2V5L2N5pWw5o2uXG4gICAgICovXG4gICAgYXN5bmMgX2luaXRDaGFyYWN0ZXJTdGF0cyhwcmVmYWJJbnN0YW5jZSwgdW5pdERhdGEpIHtcbiAgICAgICAgY29uc3QgQ2hhcmFjdGVyRGF0YU1hbmFnZXIgPSByZXF1aXJlKFwiQ2hhcmFjdGVyRGF0YU1hbmFnZXJcIik7XG4gICAgICAgIC8vIFN0YXRzQ29tcG9uZW50IOaYr+e7hOS7tuexu++8jOS4jemcgOimgSByZXF1aXJl77yM55u05o6l5L2/55SoIGdldENvbXBvbmVudCDojrflj5ZcblxuICAgICAgICAvLyDojrflj5ZTdGF0c0NvbXBvbmVudOe7hOS7tlxuICAgICAgICBjb25zdCBzdGF0cyA9IHByZWZhYkluc3RhbmNlLmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xuICAgICAgICBpZiAoIXN0YXRzKSB7XG4gICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldICR7dW5pdERhdGEubmFtZX0g5rKh5pyJU3RhdHNDb21wb25lbnTnu4Tku7bvvIzot7Pov4flsZ7mgKfliJ3lp4vljJZgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOS7juacrOWcsOWtmOWCqOWKoOi9veinkuiJsueahOetiee6p+aVsOaNru+8iOaUr+aMgeW8guatpe+8iVxuICAgICAgICBjb25zdCBzYXZlZERhdGEgPSBhd2FpdCBDaGFyYWN0ZXJEYXRhTWFuYWdlci5sb2FkQ2hhcmFjdGVyTGV2ZWwodW5pdERhdGEubmFtZSk7XG5cbiAgICAgICAgaWYgKHNhdmVkRGF0YSkge1xuICAgICAgICAgICAgLy8g5aaC5p6c5pyJ5L+d5a2Y55qE5pWw5o2u77yM5L2/55So5L+d5a2Y55qE5Z+656GA5bGe5oCnXG4gICAgICAgICAgICBzdGF0cy5iYXNlSHAgPSBzYXZlZERhdGEuYmFzZUhwIHx8IHVuaXREYXRhLmhwIHx8IDEwMDtcbiAgICAgICAgICAgIHN0YXRzLmJhc2VBdHRhY2sgPSBzYXZlZERhdGEuYmFzZUF0dGFjayB8fCB1bml0RGF0YS5hdHRhY2sgfHwgMTtcbiAgICAgICAgICAgIHN0YXRzLmJhc2VEZWZlbnNlID0gc2F2ZWREYXRhLmJhc2VEZWZlbnNlIHx8IHVuaXREYXRhLmRlZmVuc2UgfHwgMTtcbiAgICAgICAgICAgIHN0YXRzLmJhc2VTcGVlZCA9IHNhdmVkRGF0YS5iYXNlU3BlZWQgfHwgdW5pdERhdGEuc3BlZWQgfHwgMTtcbiAgICAgICAgICAgIHN0YXRzLmJhc2VDcml0ID0gc2F2ZWREYXRhLmJhc2VDcml0IHx8IHVuaXREYXRhLmNyaXQgfHwgMDtcbiAgICAgICAgICAgIHN0YXRzLmJhc2VNaXNzID0gc2F2ZWREYXRhLmJhc2VNaXNzIHx8IHVuaXREYXRhLm1pc3MgfHwgMDtcblxuICAgICAgICAgICAgLy8g6K6+572u562J57qn5ZKM57uP6aqM5YC8XG4gICAgICAgICAgICBzdGF0cy5sZXZlbCA9IHNhdmVkRGF0YS5sZXZlbCB8fCAxO1xuICAgICAgICAgICAgc3RhdHMuZXhwID0gc2F2ZWREYXRhLmV4cCB8fCAwO1xuXG4gICAgICAgICAgICAvLyDlupTnlKjnrYnnuqfliqDmiJBcbiAgICAgICAgICAgIHN0YXRzLl9hcHBseUxldmVsQm9udXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWmguaenOayoeacieS/neWtmOeahOaVsOaNru+8jOS9v+eUqHVuaXREYXRh5Lit55qE5Z+656GA5bGe5oCnXG4gICAgICAgICAgICBzdGF0cy5iYXNlSHAgPSB1bml0RGF0YS5ocCB8fCAxMDA7XG4gICAgICAgICAgICBzdGF0cy5iYXNlQXR0YWNrID0gdW5pdERhdGEuYXR0YWNrIHx8IDE7XG4gICAgICAgICAgICBzdGF0cy5iYXNlRGVmZW5zZSA9IHVuaXREYXRhLmRlZmVuc2UgfHwgMTtcbiAgICAgICAgICAgIHN0YXRzLmJhc2VTcGVlZCA9IHVuaXREYXRhLnNwZWVkIHx8IDE7XG4gICAgICAgICAgICBzdGF0cy5iYXNlQ3JpdCA9IHVuaXREYXRhLmNyaXQgfHwgMDtcbiAgICAgICAgICAgIHN0YXRzLmJhc2VNaXNzID0gdW5pdERhdGEubWlzcyB8fCAwO1xuXG4gICAgICAgICAgICAvLyDorr7nva7pu5jorqTnrYnnuqflkoznu4/pqozlgLxcbiAgICAgICAgICAgIHN0YXRzLmxldmVsID0gMTtcbiAgICAgICAgICAgIHN0YXRzLmV4cCA9IDA7XG5cbiAgICAgICAgICAgIC8vIOW6lOeUqOetiee6p+WKoOaIkFxuICAgICAgICAgICAgc3RhdHMuX2FwcGx5TGV2ZWxCb251cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6K6+572u5b2T5YmN55Sf5ZG95YC85Li65pyA5aSn55Sf5ZG95YC877yI5ruh6KGA5pi+56S677yJXG4gICAgICAgIHN0YXRzLmhwID0gc3RhdHMubWF4SHA7XG5cbiAgICAgICAgLy8g5pu05paw6KGA5p2h5pi+56S6XG4gICAgICAgIGlmIChzdGF0cy51cGRhdGVIZWFsdGhCYXIpIHtcbiAgICAgICAgICAgIHN0YXRzLnVwZGF0ZUhlYWx0aEJhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pu05paw57uP6aqM5p2h5pi+56S6XG4gICAgICAgIGlmIChzdGF0cy51cGRhdGVFeHBCYXIpIHtcbiAgICAgICAgICAgIHN0YXRzLnVwZGF0ZUV4cEJhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pu05paw5oCS5rCU5p2h5pi+56S677yI5Yid5aeL5Li6MO+8iVxuICAgICAgICBpZiAoc3RhdHMudXBkYXRlUmFnZUJhcikge1xuICAgICAgICAgICAgc3RhdHMucmFnZSA9IDA7XG4gICAgICAgICAgICBzdGF0cy51cGRhdGVSYWdlQmFyKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5pi+56S65bGe5oCn6Z2i5p2/XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdW5pdERhdGEgLSDljZXkvY3mlbDmja5cbiAgICAgKi9cbiAgICBfc2hvd1N0YXRzUGFuZWwodW5pdERhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRzUGFuZWwpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJbQ2hhcmFjdGVyVmlld1VJXSDmnKrorr7nva5zdGF0c1BhbmVs77yM5peg5rOV5pi+56S65bGe5oCn6Z2i5p2/XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6I635Y+W5b2T5YmN5pi+56S655qE5Lq654mp5Y6f5Z6L55qEU3RhdHNDb21wb25lbnRcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDojrflj5ZTdGF0c0NvbXBvbmVudOe7hOS7tlxuICAgICAgICBjb25zdCBzdGF0cyA9IHRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XG5cbiAgICAgICAgaWYgKCFzdGF0cykge1xuICAgICAgICAgICAgY2Mud2FybihgW0NoYXJhY3RlclZpZXdVSV0gJHt1bml0RGF0YS5uYW1lfSDmsqHmnIlTdGF0c0NvbXBvbmVudOe7hOS7tu+8jOaXoOazleaYvuekuuWxnuaAp2ApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pu05paw5bGe5oCn5qCH562+XG4gICAgICAgIGlmICh0aGlzLmhwTGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuaHBMYWJlbC5zdHJpbmcgPSBg55Sf5ZG95YC8OiAke3N0YXRzLmhwfS8ke3N0YXRzLm1heEhwfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYXR0YWNrTGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrTGFiZWwuc3RyaW5nID0gYOaUu+WHu+WKmzogJHtzdGF0cy5hdHRhY2t9YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kZWZlbnNlTGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmZW5zZUxhYmVsLnN0cmluZyA9IGDpmLLlvqHlips6ICR7c3RhdHMuZGVmZW5zZX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNwZWVkTGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWRMYWJlbC5zdHJpbmcgPSBg6YCf5bqmOiAke3N0YXRzLnNwZWVkfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3JpdExhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLmNyaXRMYWJlbC5zdHJpbmcgPSBg5pq05Ye7546HOiAkeyhzdGF0cy5jcml0ICogMTAwKS50b0ZpeGVkKDEpfSVgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1pc3NMYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5taXNzTGFiZWwuc3RyaW5nID0gYOmXqumBv+eOhzogJHsoc3RhdHMubWlzcyAqIDEwMCkudG9GaXhlZCgxKX0lYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sZXZlbExhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsTGFiZWwuc3RyaW5nID0gYOetiee6pzogJHtzdGF0cy5sZXZlbH1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmV4cExhYmVsKSB7XG4gICAgICAgICAgICBjb25zdCBMZXZlbENvbmZpZyA9IHJlcXVpcmUoXCJMZXZlbENvbmZpZ1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMZXZlbEV4cCA9IExldmVsQ29uZmlnLmdldEV4cEZvckxldmVsKHN0YXRzLmxldmVsKTtcbiAgICAgICAgICAgIGNvbnN0IG5leHRMZXZlbEV4cCA9IExldmVsQ29uZmlnLmdldEV4cEZvckxldmVsKHN0YXRzLmxldmVsICsgMSk7XG4gICAgICAgICAgICBjb25zdCBleHBJbkN1cnJlbnRMZXZlbCA9IHN0YXRzLmV4cCAtIGN1cnJlbnRMZXZlbEV4cDtcbiAgICAgICAgICAgIGNvbnN0IGV4cFRvTmV4dCA9IG5leHRMZXZlbEV4cCAtIGN1cnJlbnRMZXZlbEV4cDtcbiAgICAgICAgICAgIGlmIChleHBUb05leHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBMYWJlbC5zdHJpbmcgPSBg57uP6aqM5YC8OiAke2V4cEluQ3VycmVudExldmVsfS8ke2V4cFRvTmV4dH1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cExhYmVsLnN0cmluZyA9IGDnu4/pqozlgLw6IOW3sua7oee6p2A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmmL7npLrlsZ7mgKfpnaLmnb/vvIjluKbliqjnlLvvvIlcbiAgICAgICAgdGhpcy5zdGF0c1BhbmVsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc3RhdHNQYW5lbC5zZXRTY2FsZSgwLjgpO1xuICAgICAgICB0aGlzLnN0YXRzUGFuZWwub3BhY2l0eSA9IDA7XG5cbiAgICAgICAgLy8g6K6+572u6Z2i5p2/5L2N572u77yI5pi+56S65Zyo5Lq654mp5Y6f5Z6L6ZmE6L+R77yJXG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3RlckRpc3BsYXlBcmVhKSB7XG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5UG9zID0gdGhpcy5jaGFyYWN0ZXJEaXNwbGF5QXJlYS5nZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5zdGF0c1BhbmVsLnNldFBvc2l0aW9uKGRpc3BsYXlQb3MueCArIDI1MCwgZGlzcGxheVBvcy55KTsgLy8g5pi+56S65Zyo5Y+z5L6nXG4gICAgICAgIH1cblxuICAgICAgICBjYy50d2Vlbih0aGlzLnN0YXRzUGFuZWwpXG4gICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAxLjAsIG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogJ2JhY2tPdXQnIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOaYvuekuuWxnuaAp+mdouadvzogJHt1bml0RGF0YS5uYW1lfWApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDngrnlh7tDYW52YXPkuovku7bvvIjlhbPpl63lsZ7mgKfpnaLmnb/vvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9vbkNhbnZhc0NsaWNrKGV2ZW50KSB7XG4gICAgICAgIC8vIOWmguaenOeCueWHu+eahOaYr+WxnuaAp+mdouadv+acrOi6q++8jOS4jeWFs+mXrVxuICAgICAgICBpZiAodGhpcy5zdGF0c1BhbmVsICYmIGNjLmlzVmFsaWQodGhpcy5zdGF0c1BhbmVsKSAmJiB0aGlzLnN0YXRzUGFuZWwuYWN0aXZlKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICAvLyDmo4Dmn6Xngrnlh7vnmoTnm67moIfmmK/lkKbmmK/lsZ7mgKfpnaLmnb/miJblhbblrZDoioLngrlcbiAgICAgICAgICAgIGxldCBpc1N0YXRzUGFuZWwgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGFyZ2V0O1xuICAgICAgICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZSA9PT0gdGhpcy5zdGF0c1BhbmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzU3RhdHNQYW5lbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNTdGF0c1BhbmVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvLyDngrnlh7vnmoTmmK/lsZ7mgKfpnaLmnb/vvIzkuI3lhbPpl61cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWmguaenOeCueWHu+eahOaYr+S6uueJqeWOn+Wei++8jOS4jeWFs+mXre+8iOeUseS6uueJqeWOn+Wei+eahOeCueWHu+S6i+S7tuWkhOeQhu+8iVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50RGlzcGxheVByZWZhYiAmJiBjYy5pc1ZhbGlkKHRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIpKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRhcmdldDtcbiAgICAgICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUgPT09IHRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIgfHwgbm9kZS5faXNDaGFyYWN0ZXJQcmVmYWIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyDngrnlh7vnmoTmmK/kurrnianljp/lnovvvIzkuI3lhbPpl61cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g54K55Ye75YW25LuW5Yy65Z+f77yM5YWz6Zet5bGe5oCn6Z2i5p2/XG4gICAgICAgIGlmICh0aGlzLnN0YXRzUGFuZWwgJiYgdGhpcy5zdGF0c1BhbmVsLmFjdGl2ZSkge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5zdGF0c1BhbmVsKVxuICAgICAgICAgICAgICAgIC50bygwLjIsIHsgb3BhY2l0eTogMCwgc2NhbGU6IDAuOCB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0c1BhbmVsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOWFs+mXreWxnuaAp+mdouadv2ApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgLy8g5riF55CG5LqL5Lu255uR5ZCsXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XG4gICAgICAgIGlmIChjYW52YXMpIHtcbiAgICAgICAgICAgIGNhbnZhcy5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl9vbkNhbnZhc0NsaWNrLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19