
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
              _context3.next = 18;
              break;
            }
            cc.log("[CharacterViewUI] \u2713 \u4F7F\u7528\u9053\u5177\u6210\u529F: " + item.name + " - " + result.message);
            if (result.skillName) {
              cc.log("[CharacterViewUI] \u89D2\u8272\u5DF2\u5B66\u4F1A\u6280\u80FD: " + result.skillName);
            }

            // 刷新道具栏显示
            _context3.next = 15;
            return _this8._updateInventory();
          case 15:
            // 更新角色属性显示（如果属性面板已打开）
            if (_this8.statsPanel && _this8.statsPanel.active && _this8.currentUnitData) {
              _this8._showStatsPanel(_this8.currentUnitData);
            }

            // TODO: 可以显示使用成功的提示UI（如 Toast 显示「技能学习成功」）
            _context3.next = 19;
            break;
          case 18:
            cc.warn("[CharacterViewUI] \u2717 \u4F7F\u7528\u9053\u5177\u5931\u8D25: " + item.name + " - " + result.message);
            // TODO: 可以显示错误提示UI
          case 19:
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
      _this10._onAvatarClick(nodeUnitData, nodeTeam);
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
    if (!unitData) {
      cc.error("[CharacterViewUI] \u70B9\u51FB\u5934\u50CF\u5931\u8D25: unitData\u4E3A\u7A7A");
      return;
    }
    cc.log("[CharacterViewUI] \u70B9\u51FB\u5934\u50CF: " + unitData.name + ", team=" + team + ", prefab=" + (unitData.prefab ? unitData.prefab.name : 'null'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxDaGFyYWN0ZXJWaWV3VUkuanMiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImF2YXRhckxpc3RDb250YWluZXIiLCJOb2RlIiwidG9vbHRpcCIsImNoYXJhY3RlckRpc3BsYXlBcmVhIiwiaW52ZW50b3J5Q29udGFpbmVyIiwiaXRlbVNsb3RQcmVmYWIiLCJQcmVmYWIiLCJpdGVtVG9vbHRpcCIsImludmVudG9yeUNvbHVtbnMiLCJpbnZlbnRvcnlSb3dzIiwiaXRlbVNsb3RTaXplIiwiaXRlbVNsb3RTcGFjaW5nIiwic3RhdHNQYW5lbCIsImF2YXRhclByZWZhYiIsInVuaXREYXRhQ29uZmlnIiwiaGVyb0ljb25zIiwiU3ByaXRlRnJhbWUiLCJtb25zdGVySWNvbnMiLCJoZXJvUHJlZmFicyIsIm1vbnN0ZXJQcmVmYWJzIiwiYXZhdGFyU3BhY2luZyIsImhwTGFiZWwiLCJMYWJlbCIsImF0dGFja0xhYmVsIiwiZGVmZW5zZUxhYmVsIiwic3BlZWRMYWJlbCIsImNyaXRMYWJlbCIsIm1pc3NMYWJlbCIsImxldmVsTGFiZWwiLCJleHBMYWJlbCIsIm9uTG9hZCIsIl90aGlzIiwicmVxdWlyZSIsIl9sb2FkQ29uZmlnSWZOZWVkZWQiLCJjdXJyZW50RGlzcGxheVByZWZhYiIsImN1cnJlbnRVbml0RGF0YSIsIl9pbml0QXZhdGFycyIsInNjaGVkdWxlT25jZSIsIl9pbml0SW52ZW50b3J5IiwiX3NldHVwSXRlbUljb25zIiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJfaW5pdERlZmF1bHRJdGVtcyIsImFjdGl2ZSIsImNhbnZhcyIsImZpbmQiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX0VORCIsIl9vbkNhbnZhc0NsaWNrIiwiX3RoaXMyIiwibmVlZExvYWQiLCJoZXJvcyIsImljb24iLCJwcmVmYWIiLCJtb25zdGVycyIsImxvZyIsImluZGV4IiwiX2JpbmRDYW52YXNDbGljayIsIl90aGlzMyIsIl90aGlzNCIsInJlbW92ZUFsbENoaWxkcmVuIiwiaGVyb0NvdW50IiwiaGVyb0RhdGEiLCJfY3JlYXRlQXZhdGFyIiwibW9uc3RlckRhdGEiLCJ3YXJuIiwib3BhY2l0eSIsInNldEFuY2hvclBvaW50IiwidG90YWxTbG90cyIsInNsb3RTaXplIiwic3BhY2luZyIsInRvdGFsV2lkdGgiLCJ0b3RhbEhlaWdodCIsInNldENvbnRlbnRTaXplIiwibWFzayIsImdldENvbXBvbmVudCIsIk1hc2siLCJhZGRDb21wb25lbnQiLCJUeXBlIiwiUkVDVCIsImdldEFuY2hvclBvaW50IiwieCIsInkiLCJsYXlvdXQiLCJMYXlvdXQiLCJlbmFibGVkIiwic2xvdE5vZGUiLCJpbnN0YW50aWF0ZSIsInNldFNjYWxlIiwiYWRkQ2hpbGQiLCJfaW5pdEl0ZW1TbG90IiwiY3JlYXRlZFNsb3RzIiwiY2hpbGRyZW4iLCJfbWFudWFsTGF5b3V0SW52ZW50b3J5IiwiY29udGFpbmVyUG9zIiwiZ2V0UG9zaXRpb24iLCJjb250YWluZXJXb3JsZFBvcyIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsInYyIiwidG9GaXhlZCIsImdldENvbnRlbnRTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJfdGhpczUiLCJzY2FsZSIsInNsb3RzIiwiY29udGFpbmVyU2l6ZSIsImFuY2hvclBvaW50IiwiZGlzcGxheVNpemUiLCJzdGFydFgiLCJzdGFydFkiLCJyb3ciLCJNYXRoIiwiZmxvb3IiLCJjb2wiLCJzZXRQb3NpdGlvbiIsImoiLCJjaGlsZCIsIl9lbnN1cmVTbG90VmlzaWJsZSIsIl9hZGRTbG90Qm9yZGVyIiwic2xvdFBvcyIsInNsb3RIYWxmU2l6ZSIsImNvbnRhaW5lckhhbGZXaWR0aCIsImNvbnRhaW5lckhhbGZIZWlnaHQiLCJpc0luUmFuZ2UiLCJoYXNWaXNpYmxlU3ByaXRlIiwic3ByaXRlTm9kZSIsIm1haW5TcHJpdGUiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsImNoaWxkU3ByaXRlIiwiYmdOb2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJncmFwaGljcyIsIkdyYXBoaWNzIiwiZmlsbENvbG9yIiwiQ29sb3IiLCJyZWN0IiwiZmlsbCIsImJvcmRlck5vZGUiLCJkZXN0cm95Iiwic3Ryb2tlQ29sb3IiLCJsaW5lV2lkdGgiLCJoYWxmU2l6ZSIsInN0cm9rZSIsInpJbmRleCIsImljb25Ob2RlIiwiY291bnRMYWJlbCIsInNwcml0ZSIsImxhYmVsIiwic3RyaW5nIiwiX3Nsb3RJbmRleCIsIl9pc0VtcHR5IiwiX3VwZGF0ZUludmVudG9yeSIsIl90aGlzNiIsIl9jYWxsZWUyIiwiaXRlbXMiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJfZ2V0Q2hhcmFjdGVySXRlbXMiLCJfc2V0SXRlbVNsb3QiLCJvZmYiLCJNT1VTRV9ET1dOIiwiTU9VU0VfVVAiLCJUT1VDSF9TVEFSVCIsIl90b3VjaFN0YXJ0VGltZSIsIml0ZW0iLCJfdGhpczciLCJjb3VudCIsInRvU3RyaW5nIiwiX2l0ZW1EYXRhIiwiZXZlbnQiLCJEYXRlIiwibm93IiwicHJlc3NUaW1lIiwiTE9OR19QUkVTU19USU1FIiwic3RvcFByb3BhZ2F0aW9uIiwiX3Nob3dJdGVtVG9vbHRpcE9uVG91Y2giLCJfb25JdGVtU2xvdENsaWNrIiwiX3NldHVwSXRlbVRvb2x0aXAiLCJ0b29sdGlwQ29tcG9uZW50IiwiaWQiLCJidXR0b24iLCJnZXRCdXR0b24iLCJFdmVudCIsIkV2ZW50TW91c2UiLCJCVVRUT05fUklHSFQiLCJwcmV2ZW50RGVmYXVsdCIsInRvb2x0aXBEYXRhIiwiaXRlbUlkIiwic2hvd0l0ZW1JbmZvIiwiaGlkZUl0ZW1JbmZvIiwiX3RoaXM4IiwiX2NhbGxlZTMiLCJJdGVtU3lzdGVtIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiY29uZmlnIiwidXNlSXRlbSIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwic2tpbGxOYW1lIiwiX3Nob3dTdGF0c1BhbmVsIiwic2NlbmUiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiaWNvblNldHRlciIsImdldENvbXBvbmVudEluQ2hpbGRyZW4iLCJfdGhpczkiLCJfY2FsbGVlNCIsIkl0ZW1EYXRhTWFuYWdlciIsIklOSVRfRkxBR19LRVkiLCJoYXNJbml0aWFsaXplZCIsImN1cnJlbnRDb3VudCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZXRJdGVtQ291bnQiLCJhZGRJdGVtIiwic2V0SXRlbSIsImNoYXJhY3Rlck5hbWUiLCJfY2FsbGVlNSIsIml0ZW1zV2l0aENvbmZpZyIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsImdldEFsbEl0ZW1zV2l0aENvbmZpZyIsImZpbHRlciIsIm1hcCIsInVuaXREYXRhIiwidGVhbSIsIl90aGlzMTAiLCJhdmF0YXJOb2RlIiwiX3VuaXREYXRhIiwiYXNzaWduIiwiX3RlYW0iLCJhdmF0YXJDb21wIiwiaW5pdCIsIm5vZGVVbml0RGF0YSIsIm5vZGVUZWFtIiwiX29uQXZhdGFyQ2xpY2siLCJfZGlzcGxheUNoYXJhY3RlclByZWZhYiIsIl90aGlzMTEiLCJwcmVmYWJJbnN0YW5jZSIsIl9vcmlnaW5hbENoYXJhY3Rlck5hbWUiLCJfaW5pdENoYXJhY3RlclN0YXRzIiwiX2lzQ2hhcmFjdGVyUHJlZmFiIiwiX2NhbGxlZTYiLCJDaGFyYWN0ZXJEYXRhTWFuYWdlciIsInN0YXRzIiwic2F2ZWREYXRhIiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwibG9hZENoYXJhY3RlckxldmVsIiwiYmFzZUhwIiwiaHAiLCJiYXNlQXR0YWNrIiwiYXR0YWNrIiwiYmFzZURlZmVuc2UiLCJkZWZlbnNlIiwiYmFzZVNwZWVkIiwic3BlZWQiLCJiYXNlQ3JpdCIsImNyaXQiLCJiYXNlTWlzcyIsIm1pc3MiLCJsZXZlbCIsImV4cCIsIl9hcHBseUxldmVsQm9udXMiLCJtYXhIcCIsInVwZGF0ZUhlYWx0aEJhciIsInVwZGF0ZUV4cEJhciIsInVwZGF0ZVJhZ2VCYXIiLCJyYWdlIiwiTGV2ZWxDb25maWciLCJjdXJyZW50TGV2ZWxFeHAiLCJnZXRFeHBGb3JMZXZlbCIsIm5leHRMZXZlbEV4cCIsImV4cEluQ3VycmVudExldmVsIiwiZXhwVG9OZXh0IiwiZGlzcGxheVBvcyIsInR3ZWVuIiwidG8iLCJlYXNpbmciLCJzdGFydCIsIl90aGlzMTIiLCJpc1ZhbGlkIiwidGFyZ2V0IiwiaXNTdGF0c1BhbmVsIiwibm9kZSIsInBhcmVudCIsIm9uRGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0EscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLE9BQUEsU0FBQUEsT0FBQSxPQUFBQyxFQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxNQUFBLEdBQUFILEVBQUEsQ0FBQUksY0FBQSxFQUFBQyxjQUFBLEdBQUFKLE1BQUEsQ0FBQUksY0FBQSxjQUFBQyxHQUFBLEVBQUFDLEdBQUEsRUFBQUMsSUFBQSxJQUFBRixHQUFBLENBQUFDLEdBQUEsSUFBQUMsSUFBQSxDQUFBQyxLQUFBLEtBQUFDLE9BQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxjQUFBLEdBQUFGLE9BQUEsQ0FBQUcsUUFBQSxrQkFBQUMsbUJBQUEsR0FBQUosT0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxpQkFBQSxHQUFBTixPQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFaLEdBQUEsRUFBQUMsR0FBQSxFQUFBRSxLQUFBLFdBQUFSLE1BQUEsQ0FBQUksY0FBQSxDQUFBQyxHQUFBLEVBQUFDLEdBQUEsSUFBQUUsS0FBQSxFQUFBQSxLQUFBLEVBQUFVLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFmLEdBQUEsQ0FBQUMsR0FBQSxXQUFBVyxNQUFBLG1CQUFBSSxHQUFBLElBQUFKLE1BQUEsWUFBQUEsT0FBQVosR0FBQSxFQUFBQyxHQUFBLEVBQUFFLEtBQUEsV0FBQUgsR0FBQSxDQUFBQyxHQUFBLElBQUFFLEtBQUEsZ0JBQUFjLEtBQUFDLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsUUFBQUMsY0FBQSxHQUFBSCxPQUFBLElBQUFBLE9BQUEsQ0FBQXZCLFNBQUEsWUFBQTJCLFNBQUEsR0FBQUosT0FBQSxHQUFBSSxTQUFBLEVBQUFDLFNBQUEsR0FBQTdCLE1B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SSxHQUFHRixPQUFNO01BQ2pCLE9BQU9FLEtBQUksRUFBRTtRQUNULElBQUlBLEtBQUksS0FBSyxJQUFJLENBQUNsUSxvQkFBb0IsSUFBSWtRLEtBQUksQ0FBQzNDLGtCQUFrQixFQUFFO1VBQy9ELE9BQU8sQ0FBQztRQUNaOztRQUNBMkMsS0FBSSxHQUFHQSxLQUFJLENBQUNDLE1BQU07TUFDdEI7SUFDSjs7SUFFQTtJQUNBLElBQUksSUFBSSxDQUFDelIsVUFBVSxJQUFJLElBQUksQ0FBQ0EsVUFBVSxDQUFDZ0MsTUFBTSxFQUFFO01BQzNDaEQsRUFBRSxDQUFDZ1MsS0FBSyxDQUFDLElBQUksQ0FBQ2hSLFVBQVUsQ0FBQyxDQUNwQmlSLEVBQUUsQ0FBQyxHQUFHLEVBQUU7UUFBRXpOLE9BQU8sRUFBRSxDQUFDO1FBQUVzQyxLQUFLLEVBQUU7TUFBSSxDQUFDLENBQUMsQ0FDbkN6TixJQUFJLENBQUMsWUFBTTtRQUNSK1ksT0FBSSxDQUFDcFIsVUFBVSxDQUFDZ0MsTUFBTSxHQUFHLEtBQUs7TUFDbEMsQ0FBQyxDQUFDLENBQ0RtUCxLQUFLLEVBQUU7TUFDWm5TLEVBQUUsQ0FBQzZELEdBQUcsMERBQTRCO0lBQ3RDO0VBQ0osQ0FBQztFQUVENk8sU0FBUyxXQUFBQSxVQUFBLEVBQUc7SUFDUjtJQUNBLElBQU16UCxNQUFNLEdBQUdqRCxFQUFFLENBQUNrRCxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2hDLElBQUlELE1BQU0sRUFBRTtNQUNSQSxNQUFNLENBQUNzSCxHQUFHLENBQUN2SyxFQUFFLENBQUNLLElBQUksQ0FBQytDLFNBQVMsQ0FBQ0MsU0FBUyxFQUFFLElBQUksQ0FBQ0MsY0FBYyxFQUFFLElBQUksQ0FBQztJQUN0RTtFQUNKO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOS6uueJqeWxnuaAp+afpeeci1VJ57uE5Lu2XG4gKiDnrqHnkIblpLTlg4/liJfooajjgIHkurrnianljp/lnovmmL7npLrjgIHlsZ7mgKfpnaLmnb9cbiAqL1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8g5bem5L6n5aS05YOP5YiX6KGo5a655ZmoXG4gICAgICAgIGF2YXRhckxpc3RDb250YWluZXI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLlt6bkvqflpLTlg4/liJfooajlrrnlmajoioLngrlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOS4remXtOS6uueJqeWOn+Wei+aYvuekuuWMuuWfn1xuICAgICAgICBjaGFyYWN0ZXJEaXNwbGF5QXJlYToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuS4remXtOS6uueJqeWOn+Wei+aYvuekuuWMuuWfn+iKgueCuVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g6YGT5YW35qCP5a655Zmo77yI5pi+56S65Zyo5Lq654mp5Y6f5Z6L5LiL5pa577yJXG4gICAgICAgIGludmVudG9yeUNvbnRhaW5lcjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICB0b29sdGlwOiBcIumBk+WFt+agj+WuueWZqOiKgueCue+8iOe9keagvOW4g+WxgO+8jOaYvuekuuWcqOS6uueJqeWOn+Wei+S4i+aWue+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g6YGT5YW36aG5UHJlZmFi77yI55So5LqO5Yib5bu66YGT5YW35qC85a2Q77yJXG4gICAgICAgIGl0ZW1TbG90UHJlZmFiOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLpgZPlhbfmoLzlrZBQcmVmYWLvvIjljIXlkKvlm77moIflkozmlbDph4/moIfnrb7vvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOmBk+WFt+S/oeaBr+W8ueeql+e7hOS7tu+8iOWPr+mAie+8iVxuICAgICAgICBpdGVtVG9vbHRpcDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICB0b29sdGlwOiBcIumBk+WFt+S/oeaBr+W8ueeql+iKgueCue+8iOWMheWQq0l0ZW1Ub29sdGlw57uE5Lu277yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDpgZPlhbfmoI/nvZHmoLzphY3nva5cbiAgICAgICAgaW52ZW50b3J5Q29sdW1uczoge1xuICAgICAgICAgICAgZGVmYXVsdDogNixcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6YGT5YW35qCP5YiX5pWw77yI5q+P6KGM5pi+56S655qE6YGT5YW35pWw6YeP77yJXCJcbiAgICAgICAgfSxcbiAgICAgICAgaW52ZW50b3J5Um93czoge1xuICAgICAgICAgICAgZGVmYXVsdDogNCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6YGT5YW35qCP6KGM5pWwXCJcbiAgICAgICAgfSxcbiAgICAgICAgaXRlbVNsb3RTaXplOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiA4MCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6YGT5YW35qC85a2Q5aSn5bCP77yI5a696auY77yJXCJcbiAgICAgICAgfSxcbiAgICAgICAgaXRlbVNsb3RTcGFjaW5nOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLpgZPlhbfmoLzlrZDkuYvpl7TnmoTpl7Tot51cIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOWxnuaAp+mdouadv++8iOWNiumAj+aYjuiDjOaZr++8iVxuICAgICAgICBzdGF0c1BhbmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5bGe5oCn6Z2i5p2/6IqC54K577yI5Y2K6YCP5piO6IOM5pmv77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDlpLTlg49QcmVmYWLvvIjnlKjkuo7liqjmgIHliJvlu7rlpLTlg4/vvIlcbiAgICAgICAgYXZhdGFyUHJlZmFiOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLlpLTlg49QcmVmYWLvvIjljIXlkKvlpLTlg4/lm77niYfvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOWNleS9jeaVsOaNrumFjee9rlxuICAgICAgICB1bml0RGF0YUNvbmZpZzoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5Y2V5L2N5pWw5o2u6YWN572u77yI5Y+v6YCJ77yM5aaC5p6c5LiN6K6+572u5YiZ5LuOVW5pdERhdGFDb25maWfojrflj5bvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOWkh+eUqOi1hOa6kO+8muiLsembhOWktOWDj+i1hOa6kOWIl+ihqO+8iOS7heWcqFVuaXREYXRhQ29uZmln5Lit6LWE5rqQ5Li656m65pe25L2/55So77yJXG4gICAgICAgIGhlcm9JY29uczoge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuU3ByaXRlRnJhbWVdLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLoi7Hpm4TlpLTlg4/otYTmupDliJfooajvvIjlpIfnlKjvvIzku4XlnKhTZWxlY3RTY2VuZeacquWKoOi9veaXtuS9v+eUqO+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5aSH55So6LWE5rqQ77ya5oCq54mp5aS05YOP6LWE5rqQ5YiX6KGo77yI5LuF5ZyoVW5pdERhdGFDb25maWfkuK3otYTmupDkuLrnqbrml7bkvb/nlKjvvIlcbiAgICAgICAgbW9uc3Rlckljb25zOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5TcHJpdGVGcmFtZV0sXG4gICAgICAgICAgICB0b29sdGlwOiBcIuaAqueJqeWktOWDj+i1hOa6kOWIl+ihqO+8iOWkh+eUqO+8jOS7heWcqFNlbGVjdFNjZW5l5pyq5Yqg6L295pe25L2/55So77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDlpIfnlKjotYTmupDvvJroi7Hpm4RQcmVmYWLliJfooajvvIjku4XlnKhVbml0RGF0YUNvbmZpZ+S4rei1hOa6kOS4uuepuuaXtuS9v+eUqO+8iVxuICAgICAgICBoZXJvUHJlZmFiczoge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuUHJlZmFiXSxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6Iux6ZuEUHJlZmFi5YiX6KGo77yI5aSH55So77yM5LuF5ZyoU2VsZWN0U2NlbmXmnKrliqDovb3ml7bkvb/nlKjvvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOWkh+eUqOi1hOa6kO+8muaAqueJqVByZWZhYuWIl+ihqO+8iOS7heWcqFVuaXREYXRhQ29uZmln5Lit6LWE5rqQ5Li656m65pe25L2/55So77yJXG4gICAgICAgIG1vbnN0ZXJQcmVmYWJzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5QcmVmYWJdLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmgKrnialQcmVmYWLliJfooajvvIjlpIfnlKjvvIzku4XlnKhTZWxlY3RTY2VuZeacquWKoOi9veaXtuS9v+eUqO+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5aS05YOP6Ze06LedXG4gICAgICAgIGF2YXRhclNwYWNpbmc6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEwMCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5aS05YOP5LmL6Ze055qE6Ze06LedXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDlsZ7mgKfpnaLmnb/kuK3nmoTlsZ7mgKfmoIfnrb7vvIjpnIDopoHlnKjnvJbovpHlmajkuK3nu5HlrprvvIlcbiAgICAgICAgaHBMYWJlbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLnlJ/lkb3lgLzmoIfnrb5cIlxuICAgICAgICB9LFxuICAgICAgICBhdHRhY2tMYWJlbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmlLvlh7vlipvmoIfnrb5cIlxuICAgICAgICB9LFxuICAgICAgICBkZWZlbnNlTGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6Ziy5b6h5Yqb5qCH562+XCJcbiAgICAgICAgfSxcbiAgICAgICAgc3BlZWRMYWJlbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLpgJ/luqbmoIfnrb5cIlxuICAgICAgICB9LFxuICAgICAgICBjcml0TGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5pq05Ye7546H5qCH562+XCJcbiAgICAgICAgfSxcbiAgICAgICAgbWlzc0xhYmVsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgICAgICB0b29sdGlwOiBcIumXqumBv+eOh+agh+etvlwiXG4gICAgICAgIH0sXG4gICAgICAgIGxldmVsTGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi562J57qn5qCH562+XCJcbiAgICAgICAgfSxcbiAgICAgICAgZXhwTGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi57uP6aqM5YC85qCH562+XCJcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIOiOt+WPluWNleS9jeaVsOaNrumFjee9ru+8iOS8mOWFiOS9v+eUqFNlbGVjdFNjZW5l5Lit5bey6K6+572u5aW955qE6LWE5rqQ77yJXG4gICAgICAgIGlmICghdGhpcy51bml0RGF0YUNvbmZpZykge1xuICAgICAgICAgICAgdGhpcy51bml0RGF0YUNvbmZpZyA9IHJlcXVpcmUoXCJVbml0RGF0YUNvbmZpZ1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWmguaenFVuaXREYXRhQ29uZmln5Lit55qE6LWE5rqQ5Li656m677yM5LuO5Zy65pmv6YWN572u5Lit5Yqg6L2977yI5aSH55So5pa55qGI77yJXG4gICAgICAgIHRoaXMuX2xvYWRDb25maWdJZk5lZWRlZCgpO1xuXG4gICAgICAgIC8vIOW9k+WJjeaYvuekuueahOS6uueJqeWOn+Wei1xuICAgICAgICB0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiID0gbnVsbDtcbiAgICAgICAgLy8g5b2T5YmN6YCJ5Lit55qE5Y2V5L2N5pWw5o2uXG4gICAgICAgIHRoaXMuY3VycmVudFVuaXREYXRhID0gbnVsbDtcblxuICAgICAgICAvLyDliJ3lp4vljJZVSVxuICAgICAgICB0aGlzLl9pbml0QXZhdGFycygpO1xuXG4gICAgICAgIC8vIOWIneWni+WMlumBk+WFt+agj++8iOW7tui/n+S4gOW4p++8jOehruS/neWuueWZqOiKgueCueW3suWujOWFqOWIneWni+WMlu+8iVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9pbml0SW52ZW50b3J5KCk7XG4gICAgICAgIH0sIDApO1xuXG4gICAgICAgIC8vIOiuvue9rumBk+WFt+Wbvuagh++8iOWmguaenEl0ZW1JY29uU2V0dGVy57uE5Lu25bey6K6+572u77yJXG4gICAgICAgIHRoaXMuX3NldHVwSXRlbUljb25zKCk7XG5cbiAgICAgICAgLy8g5Yid5aeL5YyW6YGT5YW35pWw5o2u77yI5re75YqgNeS4quWNh+e6p+iNr+awtOeUqOS6jua1i+ivle+8iVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9pbml0RGVmYXVsdEl0ZW1zKCk7XG4gICAgICAgIH0sIDAuNSk7XG5cbiAgICAgICAgLy8g6ZqQ6JeP5bGe5oCn6Z2i5p2/XG4gICAgICAgIGlmICh0aGlzLnN0YXRzUGFuZWwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdHNQYW5lbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOe7keWumueCueWHu+S6i+S7tu+8iOeCueWHu+S7u+aEj+WcsOaWueWFs+mXreWxnuaAp+mdouadv++8iVxuICAgICAgICAvLyDkvb/nlKhDYW52YXPmiJblnLrmma/moLnoioLngrnmnaXmjZXojrfngrnlh7vkuovku7ZcbiAgICAgICAgY29uc3QgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICAgICAgaWYgKGNhbnZhcykge1xuICAgICAgICAgICAgY2FudmFzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fb25DYW52YXNDbGljaywgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5aaC5p6cVW5pdERhdGFDb25maWfkuK3nmoTotYTmupDkuLrnqbrvvIzku47lnLrmma/phY3nva7kuK3liqDovb3vvIjlpIfnlKjmlrnmoYjvvIlcbiAgICAgKiDkvJjlhYjkvb/nlKhTZWxlY3RTY2VuZeS4reW3suiuvue9ruWlveeahOi1hOa6kO+8jOWmguaenOS4uuepuuaJjeS9v+eUqOWcuuaZr+mFjee9rlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2xvYWRDb25maWdJZk5lZWRlZCgpIHtcbiAgICAgICAgbGV0IG5lZWRMb2FkID0gZmFsc2U7XG5cbiAgICAgICAgLy8g5qOA5p+l5piv5ZCm5pyJ6LWE5rqQ5Li656m6XG4gICAgICAgIGlmICh0aGlzLnVuaXREYXRhQ29uZmlnICYmIHRoaXMudW5pdERhdGFDb25maWcuaGVyb3MpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpXS5pY29uIHx8ICF0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zW2ldLnByZWZhYikge1xuICAgICAgICAgICAgICAgICAgICBuZWVkTG9hZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbmVlZExvYWQgJiYgdGhpcy51bml0RGF0YUNvbmZpZyAmJiB0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnNbaV0uaWNvbiB8fCAhdGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVyc1tpXS5wcmVmYWIpIHtcbiAgICAgICAgICAgICAgICAgICAgbmVlZExvYWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlpoLmnpzmnInotYTmupDkuLrnqbrvvIzku47lnLrmma/phY3nva7kuK3liqDovb1cbiAgICAgICAgaWYgKG5lZWRMb2FkKSB7XG4gICAgICAgICAgICBjYy5sb2coXCJbQ2hhcmFjdGVyVmlld1VJXSDmo4DmtYvliLBVbml0RGF0YUNvbmZpZ+S4rei1hOa6kOS4uuepuu+8jOS7juWcuuaZr+mFjee9ruWKoOi9ve+8iOWkh+eUqOaWueahiO+8iVwiKTtcblxuICAgICAgICAgICAgLy8g5bqU55So6Iux6ZuE5aS05YOP5ZKMUHJlZmFi6YWN572u77yI5LuF5ZyoVW5pdERhdGFDb25maWfkuK3otYTmupDkuLrnqbrml7borr7nva7vvIlcbiAgICAgICAgICAgIGlmICh0aGlzLmhlcm9JY29ucyAmJiB0aGlzLmhlcm9JY29ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZXJvSWNvbnMuZm9yRWFjaCgoaWNvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudW5pdERhdGFDb25maWcuaGVyb3MgJiYgdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpbmRleF0gJiYgaWNvbiAmJiAhdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpbmRleF0uaWNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpbmRleF0uaWNvbiA9IGljb247XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOS7juWcuuaZr+mFjee9ruiuvue9ruiLsembhOWktOWDjzogJHt0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zW2luZGV4XS5uYW1lfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmhlcm9QcmVmYWJzICYmIHRoaXMuaGVyb1ByZWZhYnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVyb1ByZWZhYnMuZm9yRWFjaCgocHJlZmFiLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51bml0RGF0YUNvbmZpZy5oZXJvcyAmJiB0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zW2luZGV4XSAmJiBwcmVmYWIgJiYgIXRoaXMudW5pdERhdGFDb25maWcuaGVyb3NbaW5kZXhdLnByZWZhYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpbmRleF0ucHJlZmFiID0gcHJlZmFiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDku47lnLrmma/phY3nva7orr7nva7oi7Hpm4RQcmVmYWI6ICR7dGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpbmRleF0ubmFtZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDlupTnlKjmgKrnianlpLTlg4/lkoxQcmVmYWLphY3nva7vvIjku4XlnKhVbml0RGF0YUNvbmZpZ+S4rei1hOa6kOS4uuepuuaXtuiuvue9ru+8iVxuICAgICAgICAgICAgaWYgKHRoaXMubW9uc3Rlckljb25zICYmIHRoaXMubW9uc3Rlckljb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnN0ZXJJY29ucy5mb3JFYWNoKChpY29uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVycyAmJiB0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzW2luZGV4XSAmJiBpY29uICYmICF0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzW2luZGV4XS5pY29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzW2luZGV4XS5pY29uID0gaWNvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5LuO5Zy65pmv6YWN572u6K6+572u5oCq54mp5aS05YOPOiAke3RoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnNbaW5kZXhdLm5hbWV9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMubW9uc3RlclByZWZhYnMgJiYgdGhpcy5tb25zdGVyUHJlZmFicy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb25zdGVyUHJlZmFicy5mb3JFYWNoKChwcmVmYWIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzICYmIHRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnNbaW5kZXhdICYmIHByZWZhYiAmJiAhdGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVyc1tpbmRleF0ucHJlZmFiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzW2luZGV4XS5wcmVmYWIgPSBwcmVmYWI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOS7juWcuuaZr+mFjee9ruiuvue9ruaAqueJqVByZWZhYjogJHt0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzW2luZGV4XS5uYW1lfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5sb2coXCJbQ2hhcmFjdGVyVmlld1VJXSBVbml0RGF0YUNvbmZpZ+S4reW3suaciei1hOa6kO+8jOebtOaOpeS9v+eUqO+8iOWPr+iDveeUsVNlbGVjdFNjZW5l6K6+572u77yJXCIpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOe7keWumkNhbnZhc+eCueWHu+S6i+S7tlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2JpbmRDYW52YXNDbGljaygpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICAgICAgaWYgKGNhbnZhcykge1xuICAgICAgICAgICAgY2FudmFzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fb25DYW52YXNDbGljaywgdGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlu7bov5/nu5HlrprvvIjlpoLmnpxDYW52YXPov5jmnKrliJvlu7rvvIlcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9iaW5kQ2FudmFzQ2xpY2soKTtcbiAgICAgICAgICAgIH0sIDAuMSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5aS05YOP5YiX6KGoXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfaW5pdEF2YXRhcnMoKSB7XG4gICAgICAgIGlmICghdGhpcy5hdmF0YXJMaXN0Q29udGFpbmVyKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIltDaGFyYWN0ZXJWaWV3VUldIOacquiuvue9rmF2YXRhckxpc3RDb250YWluZXLvvIzml6Dms5XliJvlu7rlpLTlg4/liJfooahcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuYXZhdGFyUHJlZmFiKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihcIltDaGFyYWN0ZXJWaWV3VUldIOacquiuvue9rmF2YXRhclByZWZhYu+8jOaXoOazleWIm+W7uuWktOWDj1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOa4heepuuWuueWZqFxuICAgICAgICB0aGlzLmF2YXRhckxpc3RDb250YWluZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcblxuICAgICAgICAvLyDorqHnrpfoi7Hpm4TmlbDph4/vvIjnlKjkuo7mgKrnianlpLTlg4/nmoTkvY3nva7lgY/np7vvvIlcbiAgICAgICAgY29uc3QgaGVyb0NvdW50ID0gdGhpcy51bml0RGF0YUNvbmZpZyAmJiB0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zID8gdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvcy5sZW5ndGggOiAwO1xuXG4gICAgICAgIC8vIOWIm+W7uuiLsembhOWktOWDj1xuICAgICAgICBpZiAodGhpcy51bml0RGF0YUNvbmZpZyAmJiB0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zKSB7XG4gICAgICAgICAgICB0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zLmZvckVhY2goKGhlcm9EYXRhLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUF2YXRhcihoZXJvRGF0YSwgXCJoZXJvXCIsIGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5Yib5bu65oCq54mp5aS05YOP77yI5L2N572u5LuO6Iux6ZuE5ZCO6Z2i5byA5aeL77yJXG4gICAgICAgIGlmICh0aGlzLnVuaXREYXRhQ29uZmlnICYmIHRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnMpIHtcbiAgICAgICAgICAgIHRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnMuZm9yRWFjaCgobW9uc3RlckRhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g5L2/55SoIGhlcm9Db3VudCArIGluZGV4IOS9nOS4uuS9jee9rue0ouW8le+8jOiuqeaAqueJqeaOkuWcqOiLsembhOWQjumdolxuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUF2YXRhcihtb25zdGVyRGF0YSwgXCJtb25zdGVyXCIsIGhlcm9Db3VudCArIGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMlumBk+WFt+agj1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2luaXRJbnZlbnRvcnkoKSB7XG4gICAgICAgIGlmICghdGhpcy5pbnZlbnRvcnlDb250YWluZXIpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJbQ2hhcmFjdGVyVmlld1VJXSDmnKrorr7nva5pbnZlbnRvcnlDb250YWluZXLvvIzot7Pov4fpgZPlhbfmoI/liJ3lp4vljJZcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaXRlbVNsb3RQcmVmYWIpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJbQ2hhcmFjdGVyVmlld1VJXSDmnKrorr7nva5pdGVtU2xvdFByZWZhYu+8jOi3s+i/h+mBk+WFt+agj+WIneWni+WMllwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOW8uuWItuiuvue9ruihjOWIl+aVsO+8iOehruS/neS9v+eUqOaWsOeahOWAvO+8iVxuICAgICAgICBpZiAodGhpcy5pbnZlbnRvcnlDb2x1bW5zICE9PSA2KSB7XG4gICAgICAgICAgICB0aGlzLmludmVudG9yeUNvbHVtbnMgPSA2O1xuICAgICAgICAgICAgY2MubG9nKFwiW0NoYXJhY3RlclZpZXdVSV0g5by65Yi26K6+572u5YiX5pWw5Li6NlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pbnZlbnRvcnlSb3dzICE9PSA0KSB7XG4gICAgICAgICAgICB0aGlzLmludmVudG9yeVJvd3MgPSA0O1xuICAgICAgICAgICAgY2MubG9nKFwiW0NoYXJhY3RlclZpZXdVSV0g5by65Yi26K6+572u6KGM5pWw5Li6NFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOa4heepuuWuueWZqFxuICAgICAgICB0aGlzLmludmVudG9yeUNvbnRhaW5lci5yZW1vdmVBbGxDaGlsZHJlbigpO1xuXG4gICAgICAgIC8vIOehruS/neWuueWZqOWPr+ingVxuICAgICAgICB0aGlzLmludmVudG9yeUNvbnRhaW5lci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmludmVudG9yeUNvbnRhaW5lci5vcGFjaXR5ID0gMjU1O1xuXG4gICAgICAgIC8vIOiuvue9ruWuueWZqOmUmueCueS4uuWxheS4re+8iDAuNSwgMC4177yJ77yM6L+Z5qC35L2N572u6K6h566X5pu0566A5Y2VXG4gICAgICAgIHRoaXMuaW52ZW50b3J5Q29udGFpbmVyLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcblxuICAgICAgICAvLyDorqHnrpfpgZPlhbfmoI/mgLvmoLzlrZDmlbDlkozlrrnlmajlpKflsI9cbiAgICAgICAgY29uc3QgdG90YWxTbG90cyA9IHRoaXMuaW52ZW50b3J5Q29sdW1ucyAqIHRoaXMuaW52ZW50b3J5Um93cztcbiAgICAgICAgY29uc3Qgc2xvdFNpemUgPSB0aGlzLml0ZW1TbG90U2l6ZSB8fCA4MDtcbiAgICAgICAgY29uc3Qgc3BhY2luZyA9IHRoaXMuaXRlbVNsb3RTcGFjaW5nIHx8IDA7IC8vIOmXtOmalOaUueS4ujBcblxuICAgICAgICAvLyDlhYjorqHnrpflubborr7nva7lrrnlmajlpKflsI/vvIjlv4XpobvlnKjmt7vliqDlrZDoioLngrnkuYvliY3vvIlcbiAgICAgICAgY29uc3QgdG90YWxXaWR0aCA9ICh0aGlzLmludmVudG9yeUNvbHVtbnMgKiBzbG90U2l6ZSkgKyAoKHRoaXMuaW52ZW50b3J5Q29sdW1ucyAtIDEpICogc3BhY2luZyk7XG4gICAgICAgIGNvbnN0IHRvdGFsSGVpZ2h0ID0gKHRoaXMuaW52ZW50b3J5Um93cyAqIHNsb3RTaXplKSArICgodGhpcy5pbnZlbnRvcnlSb3dzIC0gMSkgKiBzcGFjaW5nKTtcbiAgICAgICAgdGhpcy5pbnZlbnRvcnlDb250YWluZXIuc2V0Q29udGVudFNpemUodG90YWxXaWR0aCwgdG90YWxIZWlnaHQpO1xuXG4gICAgICAgIC8vIOa3u+WKoE1hc2vnu4Tku7bvvIzoo4HliarotoXlh7rojIPlm7TnmoTmoLzlrZBcbiAgICAgICAgbGV0IG1hc2sgPSB0aGlzLmludmVudG9yeUNvbnRhaW5lci5nZXRDb21wb25lbnQoY2MuTWFzayk7XG4gICAgICAgIGlmICghbWFzaykge1xuICAgICAgICAgICAgbWFzayA9IHRoaXMuaW52ZW50b3J5Q29udGFpbmVyLmFkZENvbXBvbmVudChjYy5NYXNrKTtcbiAgICAgICAgICAgIG1hc2sudHlwZSA9IGNjLk1hc2suVHlwZS5SRUNUOyAvLyDnn6nlvaLoo4HliapcbiAgICAgICAgICAgIGNjLmxvZyhcIltDaGFyYWN0ZXJWaWV3VUldIOiHquWKqOa3u+WKoE1hc2vnu4Tku7bliLDpgZPlhbfmoI/lrrnlmajvvIjnlKjkuo7oo4HliarotoXlh7rojIPlm7TnmoTmoLzlrZDvvIlcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOmBk+WFt+agj+WuueWZqOWkp+WwjzogJHt0b3RhbFdpZHRofSB4ICR7dG90YWxIZWlnaHR9LCDmoLzlrZDmlbA6ICR7dG90YWxTbG90c30sIOmUmueCuTogKCR7dGhpcy5pbnZlbnRvcnlDb250YWluZXIuZ2V0QW5jaG9yUG9pbnQoKS54fSwgJHt0aGlzLmludmVudG9yeUNvbnRhaW5lci5nZXRBbmNob3JQb2ludCgpLnl9KWApO1xuXG4gICAgICAgIC8vIOaWueW8j+S4gO+8muS9v+eUqExheW91dOe7hOS7tuiHquWKqOW4g+WxgO+8iOaOqOiNkO+8iVxuICAgICAgICAvLyDmo4Dmn6XmmK/lkKblt7LmnIlMYXlvdXTnu4Tku7bvvIzlpoLmnpzmsqHmnInliJnmt7vliqBcbiAgICAgICAgbGV0IGxheW91dCA9IHRoaXMuaW52ZW50b3J5Q29udGFpbmVyLmdldENvbXBvbmVudChjYy5MYXlvdXQpO1xuICAgICAgICBpZiAoIWxheW91dCkge1xuICAgICAgICAgICAgbGF5b3V0ID0gdGhpcy5pbnZlbnRvcnlDb250YWluZXIuYWRkQ29tcG9uZW50KGNjLkxheW91dCk7XG4gICAgICAgICAgICBjYy5sb2coXCJbQ2hhcmFjdGVyVmlld1VJXSDoh6rliqjmt7vliqBMYXlvdXTnu4Tku7bliLDpgZPlhbfmoI/lrrnlmahcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDnpoHnlKhMYXlvdXTnu4Tku7bvvIzkvb/nlKjmiYvliqjluIPlsYDvvIjmm7Tlj6/mjqfvvIlcbiAgICAgICAgLy8gTGF5b3V057uE5Lu25ZyoR1JJROaooeW8j+S4i+WPr+iDveaciemXrumimO+8jOaJi+WKqOW4g+WxgOabtOWPr+mdoFxuICAgICAgICBpZiAobGF5b3V0KSB7XG4gICAgICAgICAgICBsYXlvdXQuZW5hYmxlZCA9IGZhbHNlOyAvLyDnpoHnlKhMYXlvdXTnu4Tku7ZcbiAgICAgICAgICAgIGNjLmxvZyhcIltDaGFyYWN0ZXJWaWV3VUldIOemgeeUqExheW91dOe7hOS7tu+8jOS9v+eUqOaJi+WKqOW4g+WxgFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWIm+W7uumBk+WFt+agvOWtkFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsU2xvdHM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc2xvdE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1TbG90UHJlZmFiKTtcbiAgICAgICAgICAgIGlmICghc2xvdE5vZGUpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihgW0NoYXJhY3RlclZpZXdVSV0g5peg5rOV5a6e5L6L5YyW6YGT5YW35qC85a2QUHJlZmFiICjntKLlvJU6ICR7aX0pYCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNsb3ROb2RlLm5hbWUgPSBgSXRlbVNsb3RfJHtpfWA7XG5cbiAgICAgICAgICAgIC8vIOehruS/neiKgueCueWPr+ingVxuICAgICAgICAgICAgc2xvdE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHNsb3ROb2RlLm9wYWNpdHkgPSAyNTU7XG5cbiAgICAgICAgICAgIC8vIOW8uuWItuiuvue9ruiKgueCueWkp+Wwj+S4unNsb3RTaXpl77yI6KaG55uWUHJlZmFi55qE6buY6K6k5aSn5bCP77yJXG4gICAgICAgICAgICBzbG90Tm9kZS5zZXRDb250ZW50U2l6ZShzbG90U2l6ZSwgc2xvdFNpemUpO1xuXG4gICAgICAgICAgICAvLyDorr7nva7oioLngrnplJrngrnkuLrlsYXkuK3vvIjkvr/kuo7lrprkvY3vvIlcbiAgICAgICAgICAgIHNsb3ROb2RlLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcblxuICAgICAgICAgICAgLy8g6K6+572u57yp5pS+5Li6MC44XG4gICAgICAgICAgICBzbG90Tm9kZS5zZXRTY2FsZSgwLjgsIDAuOCwgMC44KTtcblxuICAgICAgICAgICAgLy8g5re75Yqg5Yiw5a655ZmoXG4gICAgICAgICAgICB0aGlzLmludmVudG9yeUNvbnRhaW5lci5hZGRDaGlsZChzbG90Tm9kZSk7XG5cbiAgICAgICAgICAgIC8vIOWIneWni+WMlumBk+WFt+agvOWtkO+8iOepuueKtuaAge+8iVxuICAgICAgICAgICAgdGhpcy5faW5pdEl0ZW1TbG90KHNsb3ROb2RlLCBpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOmqjOivgeWIm+W7uue7k+aenFxuICAgICAgICBjb25zdCBjcmVhdGVkU2xvdHMgPSB0aGlzLmludmVudG9yeUNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g6YGT5YW35qCP5Yid5aeL5YyW5a6M5oiQOiAke3RoaXMuaW52ZW50b3J5Um93c33ooYwgeCAke3RoaXMuaW52ZW50b3J5Q29sdW1uc33liJcgPSAke3RvdGFsU2xvdHN95Liq5qC85a2QLCDlrp7pmYXliJvlu7o6ICR7Y3JlYXRlZFNsb3RzfeS4qmApO1xuXG4gICAgICAgIGlmIChjcmVhdGVkU2xvdHMgPT09IDApIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwiW0NoYXJhY3RlclZpZXdVSV0g6K2m5ZGK77ya5rKh5pyJ5Yib5bu65Lu75L2V6YGT5YW35qC85a2Q77yB6K+35qOA5p+laXRlbVNsb3RQcmVmYWLmmK/lkKbmraPnoa7nu5HlrprjgIJcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDkvb/nlKjmiYvliqjluIPlsYDvvIjnoa7kv53pl7TpmpTkuLow77yM5bm25re75Yqg6L655qGG77yJXG4gICAgICAgIHRoaXMuX21hbnVhbExheW91dEludmVudG9yeSgpO1xuXG4gICAgICAgIC8vIOi+k+WHuuiwg+ivleS/oeaBr1xuICAgICAgICBjb25zdCBjb250YWluZXJQb3MgPSB0aGlzLmludmVudG9yeUNvbnRhaW5lci5nZXRQb3NpdGlvbigpO1xuICAgICAgICBjb25zdCBjb250YWluZXJXb3JsZFBvcyA9IHRoaXMuaW52ZW50b3J5Q29udGFpbmVyLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG4gICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5a655Zmo5L2N572uOiDmnKzlnLAoJHtjb250YWluZXJQb3MueC50b0ZpeGVkKDEpfSwgJHtjb250YWluZXJQb3MueS50b0ZpeGVkKDEpfSksIOS4lueVjCgke2NvbnRhaW5lcldvcmxkUG9zLngudG9GaXhlZCgxKX0sICR7Y29udGFpbmVyV29ybGRQb3MueS50b0ZpeGVkKDEpfSlgKTtcbiAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDlrrnlmajlpKflsI86ICR7dGhpcy5pbnZlbnRvcnlDb250YWluZXIuZ2V0Q29udGVudFNpemUoKS53aWR0aH0geCAke3RoaXMuaW52ZW50b3J5Q29udGFpbmVyLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0fWApO1xuICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOWuueWZqOWPr+ingeaApzogYWN0aXZlPSR7dGhpcy5pbnZlbnRvcnlDb250YWluZXIuYWN0aXZlfSwgb3BhY2l0eT0ke3RoaXMuaW52ZW50b3J5Q29udGFpbmVyLm9wYWNpdHl9YCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOaJi+WKqOW4g+WxgOmBk+WFt+agj++8iOWkh+eUqOaWueahiO+8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX21hbnVhbExheW91dEludmVudG9yeSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmludmVudG9yeUNvbnRhaW5lcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2xvdFNpemUgPSB0aGlzLml0ZW1TbG90U2l6ZSB8fCA4MDtcbiAgICAgICAgY29uc3Qgc3BhY2luZyA9IHRoaXMuaXRlbVNsb3RTcGFjaW5nIHx8IDA7IC8vIOmXtOmalOaUueS4ujBcbiAgICAgICAgY29uc3Qgc2NhbGUgPSAwLjg7IC8vIOe8qeaUvuWAvFxuICAgICAgICBjb25zdCBzbG90cyA9IHRoaXMuaW52ZW50b3J5Q29udGFpbmVyLmNoaWxkcmVuO1xuXG4gICAgICAgIC8vIOiOt+WPluWuueWZqOWkp+Wwj+WSjOmUmueCuVxuICAgICAgICBjb25zdCBjb250YWluZXJTaXplID0gdGhpcy5pbnZlbnRvcnlDb250YWluZXIuZ2V0Q29udGVudFNpemUoKTtcbiAgICAgICAgY29uc3QgYW5jaG9yUG9pbnQgPSB0aGlzLmludmVudG9yeUNvbnRhaW5lci5nZXRBbmNob3JQb2ludCgpO1xuXG4gICAgICAgIC8vIOiuoeeul+WunumZheaYvuekuuWkp+Wwj++8iOiAg+iZkee8qeaUvu+8iVxuICAgICAgICBjb25zdCBkaXNwbGF5U2l6ZSA9IHNsb3RTaXplICogc2NhbGU7XG5cbiAgICAgICAgLy8g6K6h566X5a655Zmo5aSn5bCP77yI5L2/55So5a6e6ZmF5pi+56S65aSn5bCP77yM56Gu5L+d57Sn5a+G5o6S5YiX77yJXG4gICAgICAgIGNvbnN0IHRvdGFsV2lkdGggPSB0aGlzLmludmVudG9yeUNvbHVtbnMgKiBkaXNwbGF5U2l6ZTtcbiAgICAgICAgY29uc3QgdG90YWxIZWlnaHQgPSB0aGlzLmludmVudG9yeVJvd3MgKiBkaXNwbGF5U2l6ZTtcblxuICAgICAgICAvLyDmm7TmlrDlrrnlmajlpKflsI/vvIjkvb/nlKjlrp7pmYXmmL7npLrlpKflsI/vvIlcbiAgICAgICAgdGhpcy5pbnZlbnRvcnlDb250YWluZXIuc2V0Q29udGVudFNpemUodG90YWxXaWR0aCwgdG90YWxIZWlnaHQpO1xuXG4gICAgICAgIC8vIOiuoeeul+i1t+Wni+S9jee9ru+8muS7juW3puS4iuinkuW8gOWni++8jOesrOS4gOS4quagvOWtkOeahOS4reW/g+S9jee9rlxuICAgICAgICAvLyDkvb/nlKjlrp7pmYXmmL7npLrlpKflsI/mnaXorqHnrpfkvY3nva7vvIznoa7kv53ntKflr4bmjpLliJdcbiAgICAgICAgY29uc3Qgc3RhcnRYID0gLXRvdGFsV2lkdGggLyAyICsgZGlzcGxheVNpemUgLyAyO1xuICAgICAgICBjb25zdCBzdGFydFkgPSB0b3RhbEhlaWdodCAvIDIgLSBkaXNwbGF5U2l6ZSAvIDI7XG5cbiAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDmiYvliqjluIPlsYDlj4LmlbA6IHNsb3RTaXplPSR7c2xvdFNpemV9LCBzY2FsZT0ke3NjYWxlfSwgZGlzcGxheVNpemU9JHtkaXNwbGF5U2l6ZS50b0ZpeGVkKDEpfSwgc3BhY2luZz0ke3NwYWNpbmd9YCk7XG4gICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5a655Zmo5aSn5bCPOiAke3RvdGFsV2lkdGgudG9GaXhlZCgxKX0geCAke3RvdGFsSGVpZ2h0LnRvRml4ZWQoMSl9LCBzdGFydFg9JHtzdGFydFgudG9GaXhlZCgxKX0sIHN0YXJ0WT0ke3N0YXJ0WS50b0ZpeGVkKDEpfWApO1xuXG4gICAgICAgIC8vIOaJi+WKqOiuvue9ruavj+S4quagvOWtkOeahOS9jee9rlxuICAgICAgICBzbG90cy5mb3JFYWNoKChzbG90Tm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaW5kZXggLyB0aGlzLmludmVudG9yeUNvbHVtbnMpO1xuICAgICAgICAgICAgY29uc3QgY29sID0gaW5kZXggJSB0aGlzLmludmVudG9yeUNvbHVtbnM7XG5cbiAgICAgICAgICAgIC8vIOiuoeeul+S9jee9ru+8iOS9v+eUqOWunumZheaYvuekuuWkp+Wwj++8jOehruS/nee0p+WvhuaOkuWIl++8jOaXoOmXtOmame+8iVxuICAgICAgICAgICAgY29uc3QgeCA9IHN0YXJ0WCArIGNvbCAqIGRpc3BsYXlTaXplO1xuICAgICAgICAgICAgY29uc3QgeSA9IHN0YXJ0WSAtIHJvdyAqIGRpc3BsYXlTaXplO1xuXG4gICAgICAgICAgICAvLyDorr7nva7kvY3nva7vvIjnoa7kv53lnKjlrrnlmajojIPlm7TlhoXvvIlcbiAgICAgICAgICAgIHNsb3ROb2RlLnNldFBvc2l0aW9uKHgsIHkpO1xuXG4gICAgICAgICAgICAvLyDlvLrliLborr7nva7oioLngrnlpKflsI/kuLpzbG90U2l6Ze+8iOimhuebllByZWZhYueahOm7mOiupOWkp+Wwj++8iVxuICAgICAgICAgICAgc2xvdE5vZGUuc2V0Q29udGVudFNpemUoc2xvdFNpemUsIHNsb3RTaXplKTtcblxuICAgICAgICAgICAgLy8g6K6+572u6IqC54K56ZSa54K55Li65bGF5LitXG4gICAgICAgICAgICBzbG90Tm9kZS5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG5cbiAgICAgICAgICAgIC8vIOiuvue9rue8qeaUvuS4ujAuOO+8iOW/hemhu+WcqOiuvue9ruS9jee9ruS5i+WQju+8jOehruS/neS9jee9ruiuoeeul+ato+ehru+8iVxuICAgICAgICAgICAgc2xvdE5vZGUuc2V0U2NhbGUoMC44LCAwLjgsIDAuOCk7XG5cbiAgICAgICAgICAgIC8vIOehruS/neiKgueCueWPr+ingVxuICAgICAgICAgICAgc2xvdE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHNsb3ROb2RlLm9wYWNpdHkgPSAyNTU7XG5cbiAgICAgICAgICAgIC8vIOiwg+aVtOWtkOiKgueCueWkp+Wwj++8iEJhY2tncm91bmTjgIFJY29u562J77yJXG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHNsb3ROb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5bal07XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5piv6IOM5pmv5oiW5Zu+5qCH6IqC54K577yM6K6+572u5Li65LiO54i26IqC54K555u45ZCM5aSn5bCPXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5hbWUgPT09IFwiQmFja2dyb3VuZFwiIHx8IGNoaWxkLm5hbWUgPT09IFwiSWNvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnNldENvbnRlbnRTaXplKHNsb3RTaXplLCBzbG90U2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOehruS/neagvOWtkOWPr+inge+8iOa3u+WKoOiDjOaZr++8iVxuICAgICAgICAgICAgdGhpcy5fZW5zdXJlU2xvdFZpc2libGUoc2xvdE5vZGUsIGluZGV4KTtcblxuICAgICAgICAgICAgLy8g5re75Yqg6L655qGG57q/5qGG77yI55So5LqO5Yy65YiG5q+P5Liq5qC85a2Q77yJLSDlv4XpobvlnKjmnIDlkI7mt7vliqDvvIznoa7kv53mmL7npLrlnKjmnIDkuIrlsYJcbiAgICAgICAgICAgIHRoaXMuX2FkZFNsb3RCb3JkZXIoc2xvdE5vZGUsIHNsb3RTaXplKTtcblxuICAgICAgICAgICAgLy8g6aqM6K+B5L2N572u5piv5ZCm5Zyo5a655Zmo6IyD5Zu05YaF77yI5L2/55So5a6e6ZmF5pi+56S65aSn5bCP77yJXG4gICAgICAgICAgICBjb25zdCBzbG90UG9zID0gc2xvdE5vZGUuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHNsb3RIYWxmU2l6ZSA9IGRpc3BsYXlTaXplIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckhhbGZXaWR0aCA9IHRvdGFsV2lkdGggLyAyO1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVySGFsZkhlaWdodCA9IHRvdGFsSGVpZ2h0IC8gMjtcblxuICAgICAgICAgICAgY29uc3QgaXNJblJhbmdlID0gKHNsb3RQb3MueCAtIHNsb3RIYWxmU2l6ZSA+PSAtY29udGFpbmVySGFsZldpZHRoKSAmJlxuICAgICAgICAgICAgICAgIChzbG90UG9zLnggKyBzbG90SGFsZlNpemUgPD0gY29udGFpbmVySGFsZldpZHRoKSAmJlxuICAgICAgICAgICAgICAgIChzbG90UG9zLnkgLSBzbG90SGFsZlNpemUgPj0gLWNvbnRhaW5lckhhbGZIZWlnaHQpICYmXG4gICAgICAgICAgICAgICAgKHNsb3RQb3MueSArIHNsb3RIYWxmU2l6ZSA8PSBjb250YWluZXJIYWxmSGVpZ2h0KTtcblxuICAgICAgICAgICAgaWYgKGluZGV4IDwgNSkgeyAvLyDovpPlh7rliY015Liq5qC85a2Q55qE6K+m57uG5L+h5oGvXG4gICAgICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDmoLzlrZAke2luZGV4fTog5L2N572uKCR7eC50b0ZpeGVkKDEpfSwgJHt5LnRvRml4ZWQoMSl9KSwg5aSn5bCPJHtzbG90U2l6ZX14JHtzbG90U2l6ZX0sIOWuueWZqOWGhTogJHtpc0luUmFuZ2UgPyAn4pyTJyA6ICfinJcnfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzSW5SYW5nZSkge1xuICAgICAgICAgICAgICAgIGNjLndhcm4oYFtDaGFyYWN0ZXJWaWV3VUldIOitpuWRiu+8muagvOWtkCR7aW5kZXh95L2N572u6LaF5Ye65a655Zmo6IyD5Zu077yB5L2N572uOiAoJHt4LnRvRml4ZWQoMSl9LCAke3kudG9GaXhlZCgxKX0pLCDlrrnlmajlpKflsI86ICR7Y29udGFpbmVyU2l6ZS53aWR0aH14JHtjb250YWluZXJTaXplLmhlaWdodH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDmiYvliqjluIPlsYDlrozmiJDvvIzlhbEke3Nsb3RzLmxlbmd0aH3kuKrmoLzlrZBgKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog56Gu5L+d6YGT5YW35qC85a2Q5Y+v6KeB77yI5aaC5p6c5rKh5pyJ6IOM5pmv77yM5re75Yqg5LiA5Liq566A5Y2V55qE6IOM5pmv77yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IHNsb3ROb2RlIC0g6YGT5YW35qC85a2Q6IqC54K5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0g5qC85a2Q57Si5byVXG4gICAgICovXG4gICAgX2Vuc3VyZVNsb3RWaXNpYmxlKHNsb3ROb2RlLCBpbmRleCkge1xuICAgICAgICAvLyDmo4Dmn6XoioLngrnmmK/lkKbmnInlj6/op4HnmoRTcHJpdGXnu4Tku7ZcbiAgICAgICAgbGV0IGhhc1Zpc2libGVTcHJpdGUgPSBmYWxzZTtcbiAgICAgICAgbGV0IHNwcml0ZU5vZGUgPSBudWxsO1xuXG4gICAgICAgIC8vIOajgOafpeS4u+iKgueCuVxuICAgICAgICBjb25zdCBtYWluU3ByaXRlID0gc2xvdE5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIGlmIChtYWluU3ByaXRlICYmIG1haW5TcHJpdGUuc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgIGhhc1Zpc2libGVTcHJpdGUgPSB0cnVlO1xuICAgICAgICAgICAgc3ByaXRlTm9kZSA9IHNsb3ROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5qOA5p+l5a2Q6IqC54K577yIQmFja2dyb3VuZOOAgUljb27nrYnvvIlcbiAgICAgICAgaWYgKCFoYXNWaXNpYmxlU3ByaXRlKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHNsb3ROb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRTcHJpdGUgPSBjaGlsZC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRTcHJpdGUgJiYgY2hpbGRTcHJpdGUuc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzVmlzaWJsZVNwcml0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZU5vZGUgPSBjaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5aaC5p6c5rKh5pyJ5Y+v6KeB55qEU3ByaXRl77yM5Yib5bu65LiA5Liq566A5Y2V55qE6IOM5pmv77yI5LiN5YyF5ZCr6L655qGG77yM6L655qGG55SxX2FkZFNsb3RCb3JkZXLljZXni6zlpITnkIbvvIlcbiAgICAgICAgaWYgKCFoYXNWaXNpYmxlU3ByaXRlKSB7XG4gICAgICAgICAgICAvLyDmo4Dmn6XmmK/lkKblt7LmnIlCYWNrZ3JvdW5k6IqC54K5XG4gICAgICAgICAgICBsZXQgYmdOb2RlID0gc2xvdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpO1xuXG4gICAgICAgICAgICBpZiAoIWJnTm9kZSkge1xuICAgICAgICAgICAgICAgIC8vIOWIm+W7uuiDjOaZr+iKgueCuVxuICAgICAgICAgICAgICAgIGJnTm9kZSA9IG5ldyBjYy5Ob2RlKFwiQmFja2dyb3VuZFwiKTtcbiAgICAgICAgICAgICAgICBiZ05vZGUuc2V0Q29udGVudFNpemUoc2xvdE5vZGUuZ2V0Q29udGVudFNpemUoKS53aWR0aCwgc2xvdE5vZGUuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIGJnTm9kZS5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG5cbiAgICAgICAgICAgICAgICAvLyDkvb/nlKhHcmFwaGljc+e7hOS7tue7mOWItuiDjOaZr++8iOS4jee7mOWItui+ueahhu+8iVxuICAgICAgICAgICAgICAgIGNvbnN0IGdyYXBoaWNzID0gYmdOb2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG5cbiAgICAgICAgICAgICAgICAvLyDnu5jliLbog4zmma/vvIjljYrpgI/mmI7ngbDoibLvvIlcbiAgICAgICAgICAgICAgICBncmFwaGljcy5maWxsQ29sb3IgPSBuZXcgY2MuQ29sb3IoNjAsIDYwLCA2MCwgMjAwKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90U2l6ZSA9IHNsb3ROb2RlLmdldENvbnRlbnRTaXplKCkud2lkdGg7XG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MucmVjdCgtc2xvdFNpemUgLyAyLCAtc2xvdFNpemUgLyAyLCBzbG90U2l6ZSwgc2xvdFNpemUpO1xuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmZpbGwoKTtcblxuICAgICAgICAgICAgICAgIHNsb3ROb2RlLmFkZENoaWxkKGJnTm9kZSk7XG4gICAgICAgICAgICAgICAgYmdOb2RlLnNldFBvc2l0aW9uKDAsIDApO1xuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5Li66YGT5YW35qC85a2Q5re75Yqg5LqGR3JhcGhpY3Pog4zmma9gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g6YGT5YW35qC85a2Q5bey5pyJ5Y+v6KeB6IOM5pmvOiAke3Nwcml0ZU5vZGUubmFtZX1gKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDkuLrpgZPlhbfmoLzlrZDmt7vliqDovrnmoYbnur/moYbvvIjnlKjkuo7ljLrliIbmr4/kuKrmoLzlrZDvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gc2xvdE5vZGUgLSDpgZPlhbfmoLzlrZDoioLngrlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2xvdFNpemUgLSDmoLzlrZDlpKflsI9cbiAgICAgKi9cbiAgICBfYWRkU2xvdEJvcmRlcihzbG90Tm9kZSwgc2xvdFNpemUpIHtcbiAgICAgICAgLy8g5qOA5p+l5piv5ZCm5bey5pyJQm9yZGVy6IqC54K577yM5aaC5p6c5pyJ5YiZ5YWI56e76ZmkXG4gICAgICAgIGxldCBib3JkZXJOb2RlID0gc2xvdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCb3JkZXJcIik7XG4gICAgICAgIGlmIChib3JkZXJOb2RlKSB7XG4gICAgICAgICAgICBib3JkZXJOb2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWIm+W7uui+ueahhuiKgueCuVxuICAgICAgICBib3JkZXJOb2RlID0gbmV3IGNjLk5vZGUoXCJCb3JkZXJcIik7XG4gICAgICAgIGJvcmRlck5vZGUuc2V0Q29udGVudFNpemUoc2xvdFNpemUsIHNsb3RTaXplKTtcbiAgICAgICAgYm9yZGVyTm9kZS5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG5cbiAgICAgICAgLy8g5L2/55SoR3JhcGhpY3Pnu4Tku7bnu5jliLbovrnmoYbnur/moYZcbiAgICAgICAgY29uc3QgZ3JhcGhpY3MgPSBib3JkZXJOb2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG5cbiAgICAgICAgLy8g6K6+572u6L655qGG5qC35byP77yI55m96Imy77yMNeWDj+e0oOWuve+8jOabtOaYjuaYvu+8iVxuICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICBncmFwaGljcy5saW5lV2lkdGggPSA1O1xuXG4gICAgICAgIC8vIOe7mOWItuefqeW9oui+ueahhu+8iOS7juS4reW/g+eCueW8gOWni+e7mOWItu+8iVxuICAgICAgICAvLyDms6jmhI/vvJrnlLHkuo7oioLngrnmnInnvKnmlL4wLjjvvIzlrp7pmYXmmL7npLrlpKflsI/kvJrlsI/kuIDkupvvvIzkvYbovrnmoYbkvJrmraPnoa7mmL7npLpcbiAgICAgICAgY29uc3QgaGFsZlNpemUgPSBzbG90U2l6ZSAvIDI7XG4gICAgICAgIGdyYXBoaWNzLnJlY3QoLWhhbGZTaXplLCAtaGFsZlNpemUsIHNsb3RTaXplLCBzbG90U2l6ZSk7XG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIOehruS/nei+ueahhuiKgueCueWcqOacgOS4iuWxgu+8iOacgOWQjua3u+WKoO+8jOaYvuekuuWcqOacgOWJjemdou+8iVxuICAgICAgICBzbG90Tm9kZS5hZGRDaGlsZChib3JkZXJOb2RlKTtcbiAgICAgICAgYm9yZGVyTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgYm9yZGVyTm9kZS56SW5kZXggPSA5OTk7IC8vIOS9v+eUqHpJbmRleOabv+S7o+W3suW6n+W8g+eahHNldExvY2FsWk9yZGVy77yM6K6+572u6L6D6auY55qE5bGC57qn77yM56Gu5L+d5pi+56S65Zyo5pyA5YmN6Z2iXG5cbiAgICAgICAgLy8g56Gu5L+d6L655qGG6IqC54K55Y+v6KeBXG4gICAgICAgIGJvcmRlck5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgYm9yZGVyTm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbpgZPlhbfmoLzlrZBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gc2xvdE5vZGUgLSDpgZPlhbfmoLzlrZDoioLngrlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSDmoLzlrZDntKLlvJVcbiAgICAgKi9cbiAgICBfaW5pdEl0ZW1TbG90KHNsb3ROb2RlLCBpbmRleCkge1xuICAgICAgICAvLyDmn6Xmib7lm77moIfoioLngrnlkozmlbDph4/moIfnrb5cbiAgICAgICAgY29uc3QgaWNvbk5vZGUgPSBzbG90Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIkljb25cIikgfHwgc2xvdE5vZGU7XG4gICAgICAgIGNvbnN0IGNvdW50TGFiZWwgPSBzbG90Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNvdW50TGFiZWxcIik7XG5cbiAgICAgICAgLy8g5Yid5aeL54q25oCB77ya56m65qC85a2QXG4gICAgICAgIGlmIChpY29uTm9kZSkge1xuICAgICAgICAgICAgY29uc3Qgc3ByaXRlID0gaWNvbk5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpZiAoc3ByaXRlKSB7XG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gbnVsbDsgLy8g5riF56m65Zu+5qCHXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpY29uTm9kZS5vcGFjaXR5ID0gMTAwOyAvLyDljYrpgI/mmI7mmL7npLrnqbrmoLzlrZBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb3VudExhYmVsKSB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGNvdW50TGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IFwiXCI7IC8vIOa4heepuuaVsOmHj1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5L+d5a2Y5qC85a2Q57Si5byVXG4gICAgICAgIHNsb3ROb2RlLl9zbG90SW5kZXggPSBpbmRleDtcbiAgICAgICAgc2xvdE5vZGUuX2lzRW1wdHkgPSB0cnVlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmm7TmlrDpgZPlhbfmoI/mmL7npLrvvIjmoLnmja7lvZPliY3pgInkuK3nmoTop5LoibLvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFzeW5jIF91cGRhdGVJbnZlbnRvcnkoKSB7XG4gICAgICAgIGlmICghdGhpcy5pbnZlbnRvcnlDb250YWluZXIgfHwgIXRoaXMuY3VycmVudFVuaXREYXRhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDku47op5LoibLmlbDmja7kuK3ojrflj5bpgZPlhbfliJfooajvvIjmlK/mjIHlvILmraXvvIlcbiAgICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCB0aGlzLl9nZXRDaGFyYWN0ZXJJdGVtcyh0aGlzLmN1cnJlbnRVbml0RGF0YS5uYW1lKTtcblxuICAgICAgICAvLyDmm7TmlrDmr4/kuKrmoLzlrZBcbiAgICAgICAgY29uc3Qgc2xvdHMgPSB0aGlzLmludmVudG9yeUNvbnRhaW5lci5jaGlsZHJlbjtcbiAgICAgICAgc2xvdHMuZm9yRWFjaCgoc2xvdE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPCBpdGVtcy5sZW5ndGggJiYgaXRlbXNbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgLy8g5pyJ6YGT5YW377yM5pi+56S66YGT5YW35L+h5oGvXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0SXRlbVNsb3Qoc2xvdE5vZGUsIGl0ZW1zW2luZGV4XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOepuuagvOWtkFxuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRJdGVtU2xvdChzbG90Tm9kZSwgaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgLy8g5riF56m65omA5pyJ5LqL5Lu277yI56m65qC85a2Q5LiN6ZyA6KaB5pi+56S6dG9vbHRpcO+8iVxuICAgICAgICAgICAgICAgIHNsb3ROb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOKTtcbiAgICAgICAgICAgICAgICBzbG90Tm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfVVApO1xuICAgICAgICAgICAgICAgIHNsb3ROb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCk7XG4gICAgICAgICAgICAgICAgc2xvdE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XG4gICAgICAgICAgICAgICAgc2xvdE5vZGUuX3RvdWNoU3RhcnRUaW1lID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiuvue9rumBk+WFt+agvOWtkOWGheWuuVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBzbG90Tm9kZSAtIOmBk+WFt+agvOWtkOiKgueCuVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIC0g6YGT5YW35pWw5o2uIHsgaWQsIG5hbWUsIGljb24sIGNvdW50IH1cbiAgICAgKi9cbiAgICBfc2V0SXRlbVNsb3Qoc2xvdE5vZGUsIGl0ZW0pIHtcbiAgICAgICAgaWYgKCFpdGVtIHx8ICFpdGVtLmNvdW50IHx8IGl0ZW0uY291bnQgPD0gMCkge1xuICAgICAgICAgICAgLy8g6YGT5YW35LiN5a2Y5Zyo5oiW5pWw6YeP5Li6MO+8jOa4heepuuagvOWtkFxuICAgICAgICAgICAgdGhpcy5faW5pdEl0ZW1TbG90KHNsb3ROb2RlLCBzbG90Tm9kZS5fc2xvdEluZGV4KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOafpeaJvuWbvuagh+iKgueCueWSjOaVsOmHj+agh+etvlxuICAgICAgICBjb25zdCBpY29uTm9kZSA9IHNsb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiSWNvblwiKSB8fCBzbG90Tm9kZTtcbiAgICAgICAgY29uc3QgY291bnRMYWJlbCA9IHNsb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiQ291bnRMYWJlbFwiKTtcblxuICAgICAgICAvLyDorr7nva7lm77moIdcbiAgICAgICAgaWYgKGljb25Ob2RlICYmIGl0ZW0uaWNvbikge1xuICAgICAgICAgICAgY29uc3Qgc3ByaXRlID0gaWNvbk5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpZiAoc3ByaXRlKSB7XG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gaXRlbS5pY29uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWNvbk5vZGUub3BhY2l0eSA9IDI1NTsgLy8g5a6M5YWo5LiN6YCP5piOXG4gICAgICAgIH1cblxuICAgICAgICAvLyDorr7nva7mlbDph49cbiAgICAgICAgaWYgKGNvdW50TGFiZWwpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gY291bnRMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY291bnQgJiYgaXRlbS5jb3VudCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gaXRlbS5jb3VudC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5L+d5a2Y6YGT5YW35pWw5o2uXG4gICAgICAgIHNsb3ROb2RlLl9pdGVtRGF0YSA9IGl0ZW07XG4gICAgICAgIHNsb3ROb2RlLl9pc0VtcHR5ID0gZmFsc2U7XG5cbiAgICAgICAgLy8g6K6w5b2V6Kem5pG45byA5aeL5pe26Ze077yI55So5LqO5Yy65YiG54K55Ye75ZKM6ZW/5oyJ77yJXG4gICAgICAgIHNsb3ROb2RlLl90b3VjaFN0YXJ0VGltZSA9IG51bGw7XG4gICAgICAgIHNsb3ROb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCk7XG4gICAgICAgIHNsb3ROb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHNsb3ROb2RlLl90b3VjaFN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIC8vIOe7keWumuinpuaRuOe7k+adn+S6i+S7tu+8iOWkhOeQhuW3pumUrueCueWHu+WSjOmVv+aMie+8iVxuICAgICAgICBzbG90Tm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKTsgLy8g5YWI56e76Zmk5pen55qE5LqL5Lu2XG4gICAgICAgIHNsb3ROb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmVzc1RpbWUgPSBzbG90Tm9kZS5fdG91Y2hTdGFydFRpbWUgPyAoRGF0ZS5ub3coKSAtIHNsb3ROb2RlLl90b3VjaFN0YXJ0VGltZSkgOiAwO1xuICAgICAgICAgICAgY29uc3QgTE9OR19QUkVTU19USU1FID0gNTAwOyAvLyDplb/mjIk1MDDmr6vnp5JcblxuICAgICAgICAgICAgaWYgKHByZXNzVGltZSA+PSBMT05HX1BSRVNTX1RJTUUpIHtcbiAgICAgICAgICAgICAgICAvLyDplb/mjInvvJrmmL7npLrpgZPlhbfkv6Hmga/vvIjnp7vliqjorr7lpIfkuIrmqKHmi5/lj7PplK7vvIlcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93SXRlbVRvb2x0aXBPblRvdWNoKHNsb3ROb2RlLCBpdGVtLCBldmVudCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByZXNzVGltZSA+IDAgJiYgcHJlc3NUaW1lIDwgTE9OR19QUkVTU19USU1FKSB7XG4gICAgICAgICAgICAgICAgLy8g55+t5oyJ77ya5L2/55So6YGT5YW377yI5bem6ZSu54K55Ye777yJXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25JdGVtU2xvdENsaWNrKHNsb3ROb2RlLCBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNsb3ROb2RlLl90b3VjaFN0YXJ0VGltZSA9IG51bGw7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIC8vIOe7keWumuWPs+mUrueCueWHu+S6i+S7tu+8iOaYvuekuumBk+WFt+S/oeaBr++8iS0g5LuFUEPnq69cbiAgICAgICAgdGhpcy5fc2V0dXBJdGVtVG9vbHRpcChzbG90Tm9kZSwgaXRlbSk7XG5cbiAgICAgICAgLy8g56Gu5L+d5Y+v5Lul5o6l5pS26Kem5pG45LqL5Lu2XG4gICAgICAgIHNsb3ROb2RlLnNldENvbnRlbnRTaXplKHRoaXMuaXRlbVNsb3RTaXplLCB0aGlzLml0ZW1TbG90U2l6ZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiuvue9rumBk+WFt+agvOWtkOeahOWPs+mUrueCueWHu+S6i+S7tu+8iOaYvuekuumBk+WFt+S/oeaBr++8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBzbG90Tm9kZSAtIOmBk+WFt+agvOWtkOiKgueCuVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIC0g6YGT5YW35pWw5o2uXG4gICAgICovXG4gICAgX3NldHVwSXRlbVRvb2x0aXAoc2xvdE5vZGUsIGl0ZW0pIHtcbiAgICAgICAgaWYgKCF0aGlzLml0ZW1Ub29sdGlwKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzmsqHmnInorr7nva50b29sdGlw6IqC54K577yM6Lez6L+HXG4gICAgICAgICAgICBjYy53YXJuKFwiW0NoYXJhY3RlclZpZXdVSV0gaXRlbVRvb2x0aXDoioLngrnmnKrnu5HlrprvvIzot7Pov4d0b29sdGlw6K6+572uXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdG9vbHRpcENvbXBvbmVudCA9IHRoaXMuaXRlbVRvb2x0aXAuZ2V0Q29tcG9uZW50KFwiSXRlbVRvb2x0aXBcIik7XG4gICAgICAgIGlmICghdG9vbHRpcENvbXBvbmVudCkge1xuICAgICAgICAgICAgY2Mud2FybihcIltDaGFyYWN0ZXJWaWV3VUldIGl0ZW1Ub29sdGlw6IqC54K55rKh5pyJSXRlbVRvb2x0aXDnu4Tku7bvvIzor7fmt7vliqBJdGVtVG9vbHRpcOe7hOS7tlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXRlbSB8fCAhaXRlbS5pZCkge1xuICAgICAgICAgICAgY2Mud2FybihcIltDaGFyYWN0ZXJWaWV3VUldIOmBk+WFt+aVsOaNruaXoOaViO+8jOe8uuWwkWlk5a2X5q61XCIsIGl0ZW0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5re75Yqg6LCD6K+V5pel5b+XXG4gICAgICAgIGNjLmxvZyhcIltDaGFyYWN0ZXJWaWV3VUldIOiuvue9rumBk+WFt+WPs+mUrueCueWHu3Rvb2x0aXA6XCIsIGl0ZW0uaWQsIFwidG9vbHRpcOiKgueCuTpcIiwgdGhpcy5pdGVtVG9vbHRpcC5uYW1lKTtcblxuICAgICAgICAvLyDnp7vpmaTml6fnmoTpvKDmoIfkuovku7bnm5HlkKxcbiAgICAgICAgc2xvdE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04pO1xuICAgICAgICBzbG90Tm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfVVApO1xuXG4gICAgICAgIC8vIOe7keWumum8oOagh+WPs+mUruaMieS4i+S6i+S7tu+8iOaYvuekuumBk+WFt+S/oeaBr++8iVxuICAgICAgICBzbG90Tm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIC8vIOajgOafpeaYr+WQpuaYr+WPs+mUrlxuICAgICAgICAgICAgLy8g5rOo5oSP77yaY2MuRXZlbnQuRXZlbnRNb3VzZS5CVVRUT05fUklHSFQg55qE5YC85pivIDJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LmdldEJ1dHRvbiA/IGV2ZW50LmdldEJ1dHRvbigpIDogLTE7XG4gICAgICAgICAgICBpZiAoYnV0dG9uID09PSAyIHx8IGJ1dHRvbiA9PT0gY2MuRXZlbnQuRXZlbnRNb3VzZS5CVVRUT05fUklHSFQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8g6Zi75q2i5LqL5Lu25YaS5rOh77yM6Ziy5q2i6Kem5Y+R5Y+z6ZSu6I+c5Y2VXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgJiYgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8g6Zi75q2i6buY6K6k5Y+z6ZSu6I+c5Y2VXG5cbiAgICAgICAgICAgICAgICAvLyDkvb/nlKhpdGVtLmlk5L2c5Li6aXRlbUlk5Lyg6YCS57uZdG9vbHRpcFxuICAgICAgICAgICAgICAgIGNvbnN0IHRvb2x0aXBEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtSWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiBpdGVtLmNvdW50XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIOS8oOmAkumBk+WFt+agvOWtkOiKgueCue+8jOiuqXRvb2x0aXDmmL7npLrlnKjoioLngrnlj7PkuIrmlrlcbiAgICAgICAgICAgICAgICB0b29sdGlwQ29tcG9uZW50LnNob3dJdGVtSW5mbyh0b29sdGlwRGF0YSwgc2xvdE5vZGUpO1xuXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiW0NoYXJhY3RlclZpZXdVSV0g5Y+z6ZSu54K55Ye76YGT5YW377yM5pi+56S65L+h5oGvOlwiLCBpdGVtLmlkLCBcIuaMiemSrjpcIiwgYnV0dG9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgLy8g57uR5a6a6byg5qCH5Y+z6ZSu6YeK5pS+5LqL5Lu277yI6ZqQ6JeP6YGT5YW35L+h5oGv77yJXG4gICAgICAgIHNsb3ROb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX1VQLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIC8vIOajgOafpeaYr+WQpuaYr+WPs+mUrlxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZXZlbnQuZ2V0QnV0dG9uID8gZXZlbnQuZ2V0QnV0dG9uKCkgOiAtMTtcbiAgICAgICAgICAgIGlmIChidXR0b24gPT09IDIgfHwgYnV0dG9uID09PSBjYy5FdmVudC5FdmVudE1vdXNlLkJVVFRPTl9SSUdIVCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0ICYmIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdG9vbHRpcENvbXBvbmVudC5oaWRlSXRlbUluZm8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Zyo6Kem5pG46K6+5aSH5LiK5pi+56S66YGT5YW35L+h5oGv77yI6ZW/5oyJ6Kem5Y+R77yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IHNsb3ROb2RlIC0g6YGT5YW35qC85a2Q6IqC54K5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gLSDpgZPlhbfmlbDmja5cbiAgICAgKiBAcGFyYW0ge2NjLkV2ZW50fSBldmVudCAtIOinpuaRuOS6i+S7tlxuICAgICAqL1xuICAgIF9zaG93SXRlbVRvb2x0aXBPblRvdWNoKHNsb3ROb2RlLCBpdGVtLCBldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuaXRlbVRvb2x0aXApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRvb2x0aXBDb21wb25lbnQgPSB0aGlzLml0ZW1Ub29sdGlwLmdldENvbXBvbmVudChcIkl0ZW1Ub29sdGlwXCIpO1xuICAgICAgICBpZiAoIXRvb2x0aXBDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRvb2x0aXBEYXRhID0ge1xuICAgICAgICAgICAgaXRlbUlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgY291bnQ6IGl0ZW0uY291bnRcbiAgICAgICAgfTtcblxuICAgICAgICAvLyDkvKDpgJLpgZPlhbfmoLzlrZDoioLngrnvvIzorql0b29sdGlw5pi+56S65Zyo6IqC54K55Y+z5LiK5pa5XG4gICAgICAgIHRvb2x0aXBDb21wb25lbnQuc2hvd0l0ZW1JbmZvKHRvb2x0aXBEYXRhLCBzbG90Tm9kZSk7XG5cbiAgICAgICAgY2MubG9nKFwiW0NoYXJhY3RlclZpZXdVSV0g6ZW/5oyJ6YGT5YW377yM5pi+56S65L+h5oGvOlwiLCBpdGVtLmlkKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6YGT5YW35qC85a2Q54K55Ye75LqL5Lu277yI5L2/55So6YGT5YW377yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IHNsb3ROb2RlIC0g6YGT5YW35qC85a2Q6IqC54K5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gLSDpgZPlhbfmlbDmja5cbiAgICAgKi9cbiAgICBhc3luYyBfb25JdGVtU2xvdENsaWNrKHNsb3ROb2RlLCBpdGVtKSB7XG4gICAgICAgIGlmICghaXRlbSB8fCAhaXRlbS5jb25maWcpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJbQ2hhcmFjdGVyVmlld1VJXSDml6DmlYjnmoTpgZPlhbfmlbDmja5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmo4Dmn6XmmK/lkKbmnInlvZPliY3mmL7npLrnmoTop5LoibJcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiKSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiW0NoYXJhY3RlclZpZXdVSV0g6K+35YWI6YCJ5oup5LiA5Liq6KeS6ImyXCIpO1xuICAgICAgICAgICAgLy8g5Y+v5Lul5pi+56S65o+Q56S657uZ55So5oi3XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBJdGVtU3lzdGVtID0gcmVxdWlyZShcIkl0ZW1TeXN0ZW1cIik7XG5cbiAgICAgICAgLy8g5L2/55So6YGT5YW3XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEl0ZW1TeXN0ZW0udXNlSXRlbSh0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiLCBpdGVtLmlkKTtcblxuICAgICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g4pyTIOS9v+eUqOmBk+WFt+aIkOWKnzogJHtpdGVtLm5hbWV9IC0gJHtyZXN1bHQubWVzc2FnZX1gKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc2tpbGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDop5LoibLlt7LlrabkvJrmioDog706ICR7cmVzdWx0LnNraWxsTmFtZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5Yi35paw6YGT5YW35qCP5pi+56S6XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl91cGRhdGVJbnZlbnRvcnkoKTtcblxuICAgICAgICAgICAgLy8g5pu05paw6KeS6Imy5bGe5oCn5pi+56S677yI5aaC5p6c5bGe5oCn6Z2i5p2/5bey5omT5byA77yJXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0c1BhbmVsICYmIHRoaXMuc3RhdHNQYW5lbC5hY3RpdmUgJiYgdGhpcy5jdXJyZW50VW5pdERhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93U3RhdHNQYW5lbCh0aGlzLmN1cnJlbnRVbml0RGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRPRE86IOWPr+S7peaYvuekuuS9v+eUqOaIkOWKn+eahOaPkOekulVJ77yI5aaCIFRvYXN0IOaYvuekuuOAjOaKgOiDveWtpuS5oOaIkOWKn+OAje+8iVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2Mud2FybihgW0NoYXJhY3RlclZpZXdVSV0g4pyXIOS9v+eUqOmBk+WFt+Wksei0pTogJHtpdGVtLm5hbWV9IC0gJHtyZXN1bHQubWVzc2FnZX1gKTtcbiAgICAgICAgICAgIC8vIFRPRE86IOWPr+S7peaYvuekuumUmeivr+aPkOekulVJXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6K6+572u6YGT5YW35Zu+5qCH77yI5LuOSXRlbUljb25TZXR0ZXLnu4Tku7bojrflj5bvvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9zZXR1cEl0ZW1JY29ucygpIHtcbiAgICAgICAgLy8g5p+l5om+5Zy65pmv5Lit55qESXRlbUljb25TZXR0ZXLnu4Tku7ZcbiAgICAgICAgY29uc3Qgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xuICAgICAgICBpZiAoIXNjZW5lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYW52YXMgPSBzY2VuZS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKTtcbiAgICAgICAgaWYgKCFjYW52YXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOafpeaJvkl0ZW1JY29uU2V0dGVy57uE5Lu2XG4gICAgICAgIGNvbnN0IGljb25TZXR0ZXIgPSBjYW52YXMuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihcIkl0ZW1JY29uU2V0dGVyXCIpO1xuICAgICAgICBpZiAoaWNvblNldHRlcikge1xuICAgICAgICAgICAgY2MubG9nKFwiW0NoYXJhY3RlclZpZXdVSV0g5om+5YiwSXRlbUljb25TZXR0ZXLnu4Tku7bvvIzpgZPlhbflm77moIflt7Lorr7nva5cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5sb2coXCJbQ2hhcmFjdGVyVmlld1VJXSDmnKrmib7liLBJdGVtSWNvblNldHRlcue7hOS7tu+8jOmBk+WFt+Wbvuagh+mcgOimgeWcqOS7o+eggeS4reiuvue9rlwiKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbpu5jorqTpgZPlhbfvvIjmt7vliqA15Liq5Y2H57qn6I2v5rC077yM5LuF6aaW5qyh6L+b5YWl5pe277yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhc3luYyBfaW5pdERlZmF1bHRJdGVtcygpIHtcbiAgICAgICAgY29uc3QgSXRlbURhdGFNYW5hZ2VyID0gcmVxdWlyZShcIkl0ZW1EYXRhTWFuYWdlclwiKTtcblxuICAgICAgICAvLyDmo4Dmn6XmmK/lkKblt7Lnu4/liJ3lp4vljJbov4fpgZPlhbfvvIjkvb/nlKhsb2NhbFN0b3JhZ2XmoIflv5fvvIlcbiAgICAgICAgY29uc3QgSU5JVF9GTEFHX0tFWSA9IFwiY2hhcmFjdGVyX3ZpZXdfaXRlbXNfaW5pdGlhbGl6ZWRcIjtcbiAgICAgICAgY29uc3QgaGFzSW5pdGlhbGl6ZWQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oSU5JVF9GTEFHX0tFWSk7XG5cbiAgICAgICAgaWYgKGhhc0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAvLyDlt7Lnu4/liJ3lp4vljJbov4fvvIzkuI3lho3oh6rliqjmt7vliqDpgZPlhbdcbiAgICAgICAgICAgIGNjLmxvZyhcIltDaGFyYWN0ZXJWaWV3VUldIOmBk+WFt+W3suWIneWni+WMlui/h++8jOi3s+i/h+iHquWKqOa3u+WKoFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOajgOafpeaYr+WQpuW3suacieWNh+e6p+iNr+awtFxuICAgICAgICBjb25zdCBjdXJyZW50Q291bnQgPSBhd2FpdCBJdGVtRGF0YU1hbmFnZXIuZ2V0SXRlbUNvdW50KFwidXBncmFkZV9wb3Rpb25cIik7XG5cbiAgICAgICAgLy8g5aaC5p6c6L+Y5rKh5pyJ5Y2H57qn6I2v5rC077yM5re75YqgNeS4qu+8iOS7hemmluasoe+8iVxuICAgICAgICBpZiAoY3VycmVudENvdW50ID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgSXRlbURhdGFNYW5hZ2VyLmFkZEl0ZW0oXCJ1cGdyYWRlX3BvdGlvblwiLCAxMCk7XG4gICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcIltDaGFyYWN0ZXJWaWV3VUldIOKckyDpppbmrKHov5vlhaXvvIzlt7Lmt7vliqAxMOS4quWNh+e6p+iNr+awtOWIsOWFqOWxgOmBk+WFt+agj1wiKTtcblxuICAgICAgICAgICAgICAgIC8vIOagh+iusOW3suWIneWni+WMlu+8jOehruS/neWPquWIneWni+WMluS4gOasoVxuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShJTklUX0ZMQUdfS0VZLCBcInRydWVcIik7XG5cbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzlvZPliY3lt7LpgInkuK3op5LoibLvvIzliLfmlrDpgZPlhbfmoI/mmL7npLpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VW5pdERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fdXBkYXRlSW52ZW50b3J5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIltDaGFyYWN0ZXJWaWV3VUldIOKclyDmt7vliqDljYfnuqfoja/msLTlpLHotKVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzlt7LmnInljYfnuqfoja/msLTvvIzkuZ/moIforrDkuLrlt7LliJ3lp4vljJbvvIjlj6/og73mmK/ku47lhbbku5blnLDmlrnmt7vliqDnmoTvvIlcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShJTklUX0ZMQUdfS0VZLCBcInRydWVcIik7XG4gICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOWFqOWxgOmBk+WFt+agj+W3suaciSAke2N1cnJlbnRDb3VudH0g5Liq5Y2H57qn6I2v5rC077yM5qCH6K6w5Li65bey5Yid5aeL5YyWYCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6I635Y+W6YGT5YW35YiX6KGo77yI5YWo5bGA5YWx5Lqr77yM5omA5pyJ6KeS6Imy5YWx55So77yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFjdGVyTmFtZSAtIOinkuiJsuWQjeensO+8iOW3suW6n+W8g++8jOS/neeVmeeUqOS6juWFvOWuue+8iVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PnxBcnJheX0g6YGT5YW35YiX6KGoIFt7IGlkLCBuYW1lLCBpY29uLCBjb3VudCB9LCAuLi5d77yI5pyN5Yqh5Zmo5qih5byP5LiL6L+U5ZueUHJvbWlzZe+8iVxuICAgICAqL1xuICAgIGFzeW5jIF9nZXRDaGFyYWN0ZXJJdGVtcyhjaGFyYWN0ZXJOYW1lKSB7XG4gICAgICAgIGNvbnN0IEl0ZW1EYXRhTWFuYWdlciA9IHJlcXVpcmUoXCJJdGVtRGF0YU1hbmFnZXJcIik7XG5cbiAgICAgICAgLy8g6I635Y+W5YWo5bGA6YGT5YW377yI5omA5pyJ6KeS6Imy5YWx5Lqr77yM5b+955WlY2hhcmFjdGVyTmFtZeWPguaVsO+8iVxuICAgICAgICBjb25zdCBpdGVtc1dpdGhDb25maWcgPSBhd2FpdCBJdGVtRGF0YU1hbmFnZXIuZ2V0QWxsSXRlbXNXaXRoQ29uZmlnKCk7XG5cbiAgICAgICAgLy8g6L2s5o2i5Li65pi+56S65qC85byP77yM5bm26L+H5ruk5o6J5pWw6YeP5Li6MOeahOmBk+WFt++8iOS4gOasoeaAp+a2iOiAl+WTgeS9v+eUqOWujOWQjuW6lOivpea2iOWkse+8iVxuICAgICAgICByZXR1cm4gaXRlbXNXaXRoQ29uZmlnXG4gICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jb3VudCA+IDApIC8vIOWPquaYvuekuuaVsOmHj+Wkp+S6jjDnmoTpgZPlhbdcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaXRlbUlkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLmNvbmZpZy5kaXNwbGF5TmFtZSB8fCBpdGVtLmNvbmZpZy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBpdGVtLmNvbmZpZy5pY29uLCAvLyBTcHJpdGVGcmFtZei1hOa6kFxuICAgICAgICAgICAgICAgICAgICBjb3VudDogaXRlbS5jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBpdGVtLmNvbmZpZyAvLyDkv53lrZjlrozmlbTphY3nva7vvIznlKjkuo7lkI7nu63kvb/nlKjpgZPlhbdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIm+W7uuWktOWDj1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHVuaXREYXRhIC0g5Y2V5L2N5pWw5o2uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRlYW0gLSDpmJ/kvI3nsbvlnovvvIhcImhlcm9cIiDmiJYgXCJtb25zdGVyXCLvvIlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSDntKLlvJVcbiAgICAgKi9cbiAgICBfY3JlYXRlQXZhdGFyKHVuaXREYXRhLCB0ZWFtLCBpbmRleCkge1xuICAgICAgICBpZiAoIXVuaXREYXRhIHx8ICF1bml0RGF0YS5uYW1lKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihgW0NoYXJhY3RlclZpZXdVSV0gX2NyZWF0ZUF2YXRhcjogdW5pdERhdGHml6DmlYhgLCB1bml0RGF0YSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIOWunuS+i+WMluWktOWDj1ByZWZhYlxuICAgICAgICBjb25zdCBhdmF0YXJOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5hdmF0YXJQcmVmYWIpO1xuICAgICAgICBhdmF0YXJOb2RlLm5hbWUgPSBgQXZhdGFyXyR7dW5pdERhdGEubmFtZX1gO1xuXG4gICAgICAgIC8vIOS/neWtmOWNleS9jeaVsOaNruWIsOiKgueCue+8iOa1heaLt+i0ne+8jOS/neeVmVByZWZhYuW8leeUqO+8iVxuICAgICAgICBhdmF0YXJOb2RlLl91bml0RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHVuaXREYXRhKTtcbiAgICAgICAgYXZhdGFyTm9kZS5fdGVhbSA9IHRlYW07XG4gICAgICAgIFxuICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOWIm+W7uuWktOWDjzogbmFtZT0ke3VuaXREYXRhLm5hbWV9LCB0ZWFtPSR7dGVhbX0sIGluZGV4PSR7aW5kZXh9LCBwcmVmYWI9JHt1bml0RGF0YS5wcmVmYWIgPyB1bml0RGF0YS5wcmVmYWIubmFtZSA6ICdudWxsJ31gKTtcblxuICAgICAgICAvLyDmt7vliqDliLDlrrnlmahcbiAgICAgICAgdGhpcy5hdmF0YXJMaXN0Q29udGFpbmVyLmFkZENoaWxkKGF2YXRhck5vZGUpO1xuXG4gICAgICAgIC8vIOiuvue9ruS9jee9ru+8iOWeguebtOaOkuWIl++8iVxuICAgICAgICBjb25zdCBzcGFjaW5nID0gdGhpcy5hdmF0YXJTcGFjaW5nIHx8IDEwMDtcbiAgICAgICAgY29uc3Qgc3RhcnRZID0gMjAwOyAvLyDku47kuIrmlrnlvIDlp4tcbiAgICAgICAgY29uc3QgeSA9IHN0YXJ0WSAtIChpbmRleCAqIHNwYWNpbmcpO1xuICAgICAgICBhdmF0YXJOb2RlLnNldFBvc2l0aW9uKDAsIHkpOy8vVE9ETzog6L+Z6YeM6ZyA6KaB5qC55o2u6Zif5LyN57G75Z6L6K6+572u5L2N572uXG5cbiAgICAgICAgLy8g6K6+572u5aS05YOP5Zu+54mHXG4gICAgICAgIGNvbnN0IGF2YXRhckNvbXAgPSBhdmF0YXJOb2RlLmdldENvbXBvbmVudChcIkF2YXRhckl0ZW1cIik7XG4gICAgICAgIGlmIChhdmF0YXJDb21wKSB7XG4gICAgICAgICAgICBhdmF0YXJDb21wLmluaXQodW5pdERhdGEsIHRlYW0sIHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5aaC5p6c5rKh5pyJ57uE5Lu277yM5omL5Yqo6K6+572uXG4gICAgICAgICAgICBjb25zdCBpY29uTm9kZSA9IGF2YXRhck5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJJY29uXCIpO1xuICAgICAgICAgICAgaWYgKGljb25Ob2RlICYmIHVuaXREYXRhLmljb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGUgPSBpY29uTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgICAgICBpZiAoc3ByaXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHVuaXREYXRhLmljb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g57uR5a6a54K55Ye75LqL5Lu277yI5LuO6IqC54K56I635Y+WdW5pdERhdGHvvIzpgb/lhY3pl63ljIXlvJXnlKjpl67popjvvIlcbiAgICAgICAgYXZhdGFyTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcbiAgICAgICAgICAgIC8vIOS8mOWFiOS7juiKgueCueiOt+WPlnVuaXREYXRh77yI56Gu5L+d5pWw5o2u5q2j56Gu77yJXG4gICAgICAgICAgICBjb25zdCBub2RlVW5pdERhdGEgPSBhdmF0YXJOb2RlLl91bml0RGF0YSB8fCB1bml0RGF0YTtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVUZWFtID0gYXZhdGFyTm9kZS5fdGVhbSB8fCB0ZWFtO1xuICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDlpLTlg4/ngrnlh7vkuovku7bop6blj5E6IOiKgueCueWQjeensD0ke2F2YXRhck5vZGUubmFtZX0sIHVuaXREYXRhLm5hbWU9JHtub2RlVW5pdERhdGEubmFtZX0sIHRlYW09JHtub2RlVGVhbX1gKTtcbiAgICAgICAgICAgIHRoaXMuX29uQXZhdGFyQ2xpY2sobm9kZVVuaXREYXRhLCBub2RlVGVhbSk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIC8vIOehruS/neWPr+S7peaOpeaUtuinpuaRuOS6i+S7tlxuICAgICAgICBhdmF0YXJOb2RlLnNldENvbnRlbnRTaXplKDEwMCwgMTAwKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5aS05YOP54K55Ye75LqL5Lu2XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdW5pdERhdGEgLSDljZXkvY3mlbDmja5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGVhbSAtIOmYn+S8jeexu+Wei1xuICAgICAqL1xuICAgIF9vbkF2YXRhckNsaWNrKHVuaXREYXRhLCB0ZWFtKSB7XG4gICAgICAgIGlmICghdW5pdERhdGEpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKGBbQ2hhcmFjdGVyVmlld1VJXSDngrnlh7vlpLTlg4/lpLHotKU6IHVuaXREYXRh5Li656m6YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDngrnlh7vlpLTlg486ICR7dW5pdERhdGEubmFtZX0sIHRlYW09JHt0ZWFtfSwgcHJlZmFiPSR7dW5pdERhdGEucHJlZmFiID8gdW5pdERhdGEucHJlZmFiLm5hbWUgOiAnbnVsbCd9YCk7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXlDaGFyYWN0ZXJQcmVmYWIodW5pdERhdGEpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmmL7npLrkurrnianljp/lnotcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB1bml0RGF0YSAtIOWNleS9jeaVsOaNrlxuICAgICAqL1xuICAgIF9kaXNwbGF5Q2hhcmFjdGVyUHJlZmFiKHVuaXREYXRhKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGFyYWN0ZXJEaXNwbGF5QXJlYSkge1xuICAgICAgICAgICAgY2Mud2FybihcIltDaGFyYWN0ZXJWaWV3VUldIOacquiuvue9rmNoYXJhY3RlckRpc3BsYXlBcmVh77yM5peg5rOV5pi+56S65Lq654mp5Y6f5Z6LXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5riF6Zmk5LmL5YmN5pi+56S655qE5Y6f5Z6LXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6ZqQ6JeP5bGe5oCn6Z2i5p2/XG4gICAgICAgIGlmICh0aGlzLnN0YXRzUGFuZWwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdHNQYW5lbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOS/neWtmOW9k+WJjeWNleS9jeaVsOaNrlxuICAgICAgICB0aGlzLmN1cnJlbnRVbml0RGF0YSA9IHVuaXREYXRhO1xuXG4gICAgICAgIC8vIOabtOaWsOmBk+WFt+agj+aYvuekulxuICAgICAgICB0aGlzLl91cGRhdGVJbnZlbnRvcnkoKTtcblxuICAgICAgICAvLyDlpoLmnpzmnIlQcmVmYWLvvIzlrp7kvovljJblubbmmL7npLpcbiAgICAgICAgaWYgKHVuaXREYXRhLnByZWZhYikge1xuICAgICAgICAgICAgY29uc3QgcHJlZmFiSW5zdGFuY2UgPSBjYy5pbnN0YW50aWF0ZSh1bml0RGF0YS5wcmVmYWIpO1xuICAgICAgICAgICAgcHJlZmFiSW5zdGFuY2UubmFtZSA9IGBEaXNwbGF5XyR7dW5pdERhdGEubmFtZX1gO1xuXG4gICAgICAgICAgICAvLyDkv53lrZjljp/lp4vop5LoibLlkI3np7DvvIznlKjkuo7mlbDmja7kv53lrZjlkozliqDovb1cbiAgICAgICAgICAgIHByZWZhYkluc3RhbmNlLl9vcmlnaW5hbENoYXJhY3Rlck5hbWUgPSB1bml0RGF0YS5uYW1lO1xuXG4gICAgICAgICAgICAvLyDnoa7kv53oioLngrnlj6/op4FcbiAgICAgICAgICAgIHByZWZhYkluc3RhbmNlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBwcmVmYWJJbnN0YW5jZS5vcGFjaXR5ID0gMjU1O1xuXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlckRpc3BsYXlBcmVhLmFkZENoaWxkKHByZWZhYkluc3RhbmNlKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIgPSBwcmVmYWJJbnN0YW5jZTtcblxuICAgICAgICAgICAgLy8g6K6+572u5L2N572u5ZKM57yp5pS+77yI5bGF5Lit5pi+56S677yM57yp5bCP5pi+56S677yM5L2N572u5ZCR5LiK6LCD5pW077yJXG4gICAgICAgICAgICBwcmVmYWJJbnN0YW5jZS5zZXRQb3NpdGlvbigwLCAxMDApO1xuICAgICAgICAgICAgcHJlZmFiSW5zdGFuY2Uuc2V0U2NhbGUoMC43KTtcblxuICAgICAgICAgICAgLy8g5Yid5aeL5YyW6KeS6Imy5bGe5oCn77yI5qC55o2u5L+d5a2Y55qE562J57qn5pWw5o2u77yM5pSv5oyB5byC5q2l77yJXG4gICAgICAgICAgICB0aGlzLl9pbml0Q2hhcmFjdGVyU3RhdHMocHJlZmFiSW5zdGFuY2UsIHVuaXREYXRhKS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbQ2hhcmFjdGVyVmlld1VJXSDliJ3lp4vljJbop5LoibLlsZ7mgKflpLHotKU6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8g57uR5a6a54K55Ye75LqL5Lu277yI54K55Ye75Lq654mp5Y6f5Z6L5pi+56S65bGe5oCn6Z2i5p2/77yJXG4gICAgICAgICAgICBwcmVmYWJJbnN0YW5jZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyDpmLvmraLkuovku7blhpLms6FcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93U3RhdHNQYW5lbCh1bml0RGF0YSk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgICAgLy8g56Gu5L+d5Y+v5Lul5o6l5pS26Kem5pG45LqL5Lu2XG4gICAgICAgICAgICBwcmVmYWJJbnN0YW5jZS5zZXRDb250ZW50U2l6ZSgyMDAsIDIwMCk7XG5cbiAgICAgICAgICAgIC8vIOagh+iusOi/meaYr+S6uueJqeWOn+Wei+iKgueCue+8iOeUqOS6juWIpOaWreeCueWHu+S9jee9ru+8iVxuICAgICAgICAgICAgcHJlZmFiSW5zdGFuY2UuX2lzQ2hhcmFjdGVyUHJlZmFiID0gdHJ1ZTtcblxuICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDinJMg5pi+56S65Lq654mp5Y6f5Z6LOiAke3VuaXREYXRhLm5hbWV9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy53YXJuKGBbQ2hhcmFjdGVyVmlld1VJXSDinJcg5Y2V5L2NICR7dW5pdERhdGEubmFtZX0g5rKh5pyJ6K6+572ucHJlZmFiYCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW6KeS6Imy5bGe5oCn77yI5qC55o2u5L+d5a2Y55qE562J57qn5pWw5o2u77yJXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IHByZWZhYkluc3RhbmNlIC0g5Lq654mp5Y6f5Z6L5a6e5L6LXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHVuaXREYXRhIC0g5Y2V5L2N5pWw5o2uXG4gICAgICovXG4gICAgYXN5bmMgX2luaXRDaGFyYWN0ZXJTdGF0cyhwcmVmYWJJbnN0YW5jZSwgdW5pdERhdGEpIHtcbiAgICAgICAgY29uc3QgQ2hhcmFjdGVyRGF0YU1hbmFnZXIgPSByZXF1aXJlKFwiQ2hhcmFjdGVyRGF0YU1hbmFnZXJcIik7XG4gICAgICAgIC8vIFN0YXRzQ29tcG9uZW50IOaYr+e7hOS7tuexu++8jOS4jemcgOimgSByZXF1aXJl77yM55u05o6l5L2/55SoIGdldENvbXBvbmVudCDojrflj5ZcblxuICAgICAgICAvLyDojrflj5ZTdGF0c0NvbXBvbmVudOe7hOS7tlxuICAgICAgICBjb25zdCBzdGF0cyA9IHByZWZhYkluc3RhbmNlLmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xuICAgICAgICBpZiAoIXN0YXRzKSB7XG4gICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldICR7dW5pdERhdGEubmFtZX0g5rKh5pyJU3RhdHNDb21wb25lbnTnu4Tku7bvvIzot7Pov4flsZ7mgKfliJ3lp4vljJZgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOS7juacrOWcsOWtmOWCqOWKoOi9veinkuiJsueahOetiee6p+aVsOaNru+8iOaUr+aMgeW8guatpe+8iVxuICAgICAgICBjb25zdCBzYXZlZERhdGEgPSBhd2FpdCBDaGFyYWN0ZXJEYXRhTWFuYWdlci5sb2FkQ2hhcmFjdGVyTGV2ZWwodW5pdERhdGEubmFtZSk7XG5cbiAgICAgICAgaWYgKHNhdmVkRGF0YSkge1xuICAgICAgICAgICAgLy8g5aaC5p6c5pyJ5L+d5a2Y55qE5pWw5o2u77yM5L2/55So5L+d5a2Y55qE5Z+656GA5bGe5oCnXG4gICAgICAgICAgICBzdGF0cy5iYXNlSHAgPSBzYXZlZERhdGEuYmFzZUhwIHx8IHVuaXREYXRhLmhwIHx8IDEwMDtcbiAgICAgICAgICAgIHN0YXRzLmJhc2VBdHRhY2sgPSBzYXZlZERhdGEuYmFzZUF0dGFjayB8fCB1bml0RGF0YS5hdHRhY2sgfHwgMTtcbiAgICAgICAgICAgIHN0YXRzLmJhc2VEZWZlbnNlID0gc2F2ZWREYXRhLmJhc2VEZWZlbnNlIHx8IHVuaXREYXRhLmRlZmVuc2UgfHwgMTtcbiAgICAgICAgICAgIHN0YXRzLmJhc2VTcGVlZCA9IHNhdmVkRGF0YS5iYXNlU3BlZWQgfHwgdW5pdERhdGEuc3BlZWQgfHwgMTtcbiAgICAgICAgICAgIHN0YXRzLmJhc2VDcml0ID0gc2F2ZWREYXRhLmJhc2VDcml0IHx8IHVuaXREYXRhLmNyaXQgfHwgMDtcbiAgICAgICAgICAgIHN0YXRzLmJhc2VNaXNzID0gc2F2ZWREYXRhLmJhc2VNaXNzIHx8IHVuaXREYXRhLm1pc3MgfHwgMDtcblxuICAgICAgICAgICAgLy8g6K6+572u562J57qn5ZKM57uP6aqM5YC8XG4gICAgICAgICAgICBzdGF0cy5sZXZlbCA9IHNhdmVkRGF0YS5sZXZlbCB8fCAxO1xuICAgICAgICAgICAgc3RhdHMuZXhwID0gc2F2ZWREYXRhLmV4cCB8fCAwO1xuXG4gICAgICAgICAgICAvLyDlupTnlKjnrYnnuqfliqDmiJBcbiAgICAgICAgICAgIHN0YXRzLl9hcHBseUxldmVsQm9udXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWmguaenOayoeacieS/neWtmOeahOaVsOaNru+8jOS9v+eUqHVuaXREYXRh5Lit55qE5Z+656GA5bGe5oCnXG4gICAgICAgICAgICBzdGF0cy5iYXNlSHAgPSB1bml0RGF0YS5ocCB8fCAxMDA7XG4gICAgICAgICAgICBzdGF0cy5iYXNlQXR0YWNrID0gdW5pdERhdGEuYXR0YWNrIHx8IDE7XG4gICAgICAgICAgICBzdGF0cy5iYXNlRGVmZW5zZSA9IHVuaXREYXRhLmRlZmVuc2UgfHwgMTtcbiAgICAgICAgICAgIHN0YXRzLmJhc2VTcGVlZCA9IHVuaXREYXRhLnNwZWVkIHx8IDE7XG4gICAgICAgICAgICBzdGF0cy5iYXNlQ3JpdCA9IHVuaXREYXRhLmNyaXQgfHwgMDtcbiAgICAgICAgICAgIHN0YXRzLmJhc2VNaXNzID0gdW5pdERhdGEubWlzcyB8fCAwO1xuXG4gICAgICAgICAgICAvLyDorr7nva7pu5jorqTnrYnnuqflkoznu4/pqozlgLxcbiAgICAgICAgICAgIHN0YXRzLmxldmVsID0gMTtcbiAgICAgICAgICAgIHN0YXRzLmV4cCA9IDA7XG5cbiAgICAgICAgICAgIC8vIOW6lOeUqOetiee6p+WKoOaIkFxuICAgICAgICAgICAgc3RhdHMuX2FwcGx5TGV2ZWxCb251cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6K6+572u5b2T5YmN55Sf5ZG95YC85Li65pyA5aSn55Sf5ZG95YC877yI5ruh6KGA5pi+56S677yJXG4gICAgICAgIHN0YXRzLmhwID0gc3RhdHMubWF4SHA7XG5cbiAgICAgICAgLy8g5pu05paw6KGA5p2h5pi+56S6XG4gICAgICAgIGlmIChzdGF0cy51cGRhdGVIZWFsdGhCYXIpIHtcbiAgICAgICAgICAgIHN0YXRzLnVwZGF0ZUhlYWx0aEJhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pu05paw57uP6aqM5p2h5pi+56S6XG4gICAgICAgIGlmIChzdGF0cy51cGRhdGVFeHBCYXIpIHtcbiAgICAgICAgICAgIHN0YXRzLnVwZGF0ZUV4cEJhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pu05paw5oCS5rCU5p2h5pi+56S677yI5Yid5aeL5Li6MO+8iVxuICAgICAgICBpZiAoc3RhdHMudXBkYXRlUmFnZUJhcikge1xuICAgICAgICAgICAgc3RhdHMucmFnZSA9IDA7XG4gICAgICAgICAgICBzdGF0cy51cGRhdGVSYWdlQmFyKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5pi+56S65bGe5oCn6Z2i5p2/XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdW5pdERhdGEgLSDljZXkvY3mlbDmja5cbiAgICAgKi9cbiAgICBfc2hvd1N0YXRzUGFuZWwodW5pdERhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRzUGFuZWwpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJbQ2hhcmFjdGVyVmlld1VJXSDmnKrorr7nva5zdGF0c1BhbmVs77yM5peg5rOV5pi+56S65bGe5oCn6Z2i5p2/XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6I635Y+W5b2T5YmN5pi+56S655qE5Lq654mp5Y6f5Z6L55qEU3RhdHNDb21wb25lbnRcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDojrflj5ZTdGF0c0NvbXBvbmVudOe7hOS7tlxuICAgICAgICBjb25zdCBzdGF0cyA9IHRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XG5cbiAgICAgICAgaWYgKCFzdGF0cykge1xuICAgICAgICAgICAgY2Mud2FybihgW0NoYXJhY3RlclZpZXdVSV0gJHt1bml0RGF0YS5uYW1lfSDmsqHmnIlTdGF0c0NvbXBvbmVudOe7hOS7tu+8jOaXoOazleaYvuekuuWxnuaAp2ApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pu05paw5bGe5oCn5qCH562+XG4gICAgICAgIGlmICh0aGlzLmhwTGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuaHBMYWJlbC5zdHJpbmcgPSBg55Sf5ZG95YC8OiAke3N0YXRzLmhwfS8ke3N0YXRzLm1heEhwfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYXR0YWNrTGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrTGFiZWwuc3RyaW5nID0gYOaUu+WHu+WKmzogJHtzdGF0cy5hdHRhY2t9YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kZWZlbnNlTGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmZW5zZUxhYmVsLnN0cmluZyA9IGDpmLLlvqHlips6ICR7c3RhdHMuZGVmZW5zZX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNwZWVkTGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWRMYWJlbC5zdHJpbmcgPSBg6YCf5bqmOiAke3N0YXRzLnNwZWVkfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3JpdExhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLmNyaXRMYWJlbC5zdHJpbmcgPSBg5pq05Ye7546HOiAkeyhzdGF0cy5jcml0ICogMTAwKS50b0ZpeGVkKDEpfSVgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1pc3NMYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5taXNzTGFiZWwuc3RyaW5nID0gYOmXqumBv+eOhzogJHsoc3RhdHMubWlzcyAqIDEwMCkudG9GaXhlZCgxKX0lYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sZXZlbExhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsTGFiZWwuc3RyaW5nID0gYOetiee6pzogJHtzdGF0cy5sZXZlbH1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmV4cExhYmVsKSB7XG4gICAgICAgICAgICBjb25zdCBMZXZlbENvbmZpZyA9IHJlcXVpcmUoXCJMZXZlbENvbmZpZ1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMZXZlbEV4cCA9IExldmVsQ29uZmlnLmdldEV4cEZvckxldmVsKHN0YXRzLmxldmVsKTtcbiAgICAgICAgICAgIGNvbnN0IG5leHRMZXZlbEV4cCA9IExldmVsQ29uZmlnLmdldEV4cEZvckxldmVsKHN0YXRzLmxldmVsICsgMSk7XG4gICAgICAgICAgICBjb25zdCBleHBJbkN1cnJlbnRMZXZlbCA9IHN0YXRzLmV4cCAtIGN1cnJlbnRMZXZlbEV4cDtcbiAgICAgICAgICAgIGNvbnN0IGV4cFRvTmV4dCA9IG5leHRMZXZlbEV4cCAtIGN1cnJlbnRMZXZlbEV4cDtcbiAgICAgICAgICAgIGlmIChleHBUb05leHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5leHBMYWJlbC5zdHJpbmcgPSBg57uP6aqM5YC8OiAke2V4cEluQ3VycmVudExldmVsfS8ke2V4cFRvTmV4dH1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cExhYmVsLnN0cmluZyA9IGDnu4/pqozlgLw6IOW3sua7oee6p2A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmmL7npLrlsZ7mgKfpnaLmnb/vvIjluKbliqjnlLvvvIlcbiAgICAgICAgdGhpcy5zdGF0c1BhbmVsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc3RhdHNQYW5lbC5zZXRTY2FsZSgwLjgpO1xuICAgICAgICB0aGlzLnN0YXRzUGFuZWwub3BhY2l0eSA9IDA7XG5cbiAgICAgICAgLy8g6K6+572u6Z2i5p2/5L2N572u77yI5pi+56S65Zyo5Lq654mp5Y6f5Z6L6ZmE6L+R77yJXG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3RlckRpc3BsYXlBcmVhKSB7XG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5UG9zID0gdGhpcy5jaGFyYWN0ZXJEaXNwbGF5QXJlYS5nZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5zdGF0c1BhbmVsLnNldFBvc2l0aW9uKGRpc3BsYXlQb3MueCArIDI1MCwgZGlzcGxheVBvcy55KTsgLy8g5pi+56S65Zyo5Y+z5L6nXG4gICAgICAgIH1cblxuICAgICAgICBjYy50d2Vlbih0aGlzLnN0YXRzUGFuZWwpXG4gICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAxLjAsIG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogJ2JhY2tPdXQnIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOaYvuekuuWxnuaAp+mdouadvzogJHt1bml0RGF0YS5uYW1lfWApO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDngrnlh7tDYW52YXPkuovku7bvvIjlhbPpl63lsZ7mgKfpnaLmnb/vvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9vbkNhbnZhc0NsaWNrKGV2ZW50KSB7XG4gICAgICAgIC8vIOWmguaenOeCueWHu+eahOaYr+WxnuaAp+mdouadv+acrOi6q++8jOS4jeWFs+mXrVxuICAgICAgICBpZiAodGhpcy5zdGF0c1BhbmVsICYmIGNjLmlzVmFsaWQodGhpcy5zdGF0c1BhbmVsKSAmJiB0aGlzLnN0YXRzUGFuZWwuYWN0aXZlKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICAvLyDmo4Dmn6Xngrnlh7vnmoTnm67moIfmmK/lkKbmmK/lsZ7mgKfpnaLmnb/miJblhbblrZDoioLngrlcbiAgICAgICAgICAgIGxldCBpc1N0YXRzUGFuZWwgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGFyZ2V0O1xuICAgICAgICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZSA9PT0gdGhpcy5zdGF0c1BhbmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzU3RhdHNQYW5lbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNTdGF0c1BhbmVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvLyDngrnlh7vnmoTmmK/lsZ7mgKfpnaLmnb/vvIzkuI3lhbPpl61cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWmguaenOeCueWHu+eahOaYr+S6uueJqeWOn+Wei++8jOS4jeWFs+mXre+8iOeUseS6uueJqeWOn+Wei+eahOeCueWHu+S6i+S7tuWkhOeQhu+8iVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50RGlzcGxheVByZWZhYiAmJiBjYy5pc1ZhbGlkKHRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIpKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRhcmdldDtcbiAgICAgICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUgPT09IHRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIgfHwgbm9kZS5faXNDaGFyYWN0ZXJQcmVmYWIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyDngrnlh7vnmoTmmK/kurrnianljp/lnovvvIzkuI3lhbPpl61cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g54K55Ye75YW25LuW5Yy65Z+f77yM5YWz6Zet5bGe5oCn6Z2i5p2/XG4gICAgICAgIGlmICh0aGlzLnN0YXRzUGFuZWwgJiYgdGhpcy5zdGF0c1BhbmVsLmFjdGl2ZSkge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5zdGF0c1BhbmVsKVxuICAgICAgICAgICAgICAgIC50bygwLjIsIHsgb3BhY2l0eTogMCwgc2NhbGU6IDAuOCB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0c1BhbmVsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOWFs+mXreWxnuaAp+mdouadv2ApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgLy8g5riF55CG5LqL5Lu255uR5ZCsXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIik7XG4gICAgICAgIGlmIChjYW52YXMpIHtcbiAgICAgICAgICAgIGNhbnZhcy5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl9vbkNhbnZhc0NsaWNrLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19