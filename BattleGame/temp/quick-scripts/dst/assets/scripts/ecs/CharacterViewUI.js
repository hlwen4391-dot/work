
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

    // 绑定点击事件（点击道具使用）
    slotNode.off(cc.Node.EventType.TOUCH_END); // 先移除旧的事件
    slotNode.on(cc.Node.EventType.TOUCH_END, function (event) {
      event.stopPropagation(); // 阻止事件冒泡
      _this7._onItemSlotClick(slotNode, item);
    }, this);

    // 确保可以接收触摸事件
    slotNode.setContentSize(this.itemSlotSize, this.itemSlotSize);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxDaGFyYWN0ZXJWaWV3VUkuanMiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImF2YXRhckxpc3RDb250YWluZXIiLCJOb2RlIiwidG9vbHRpcCIsImNoYXJhY3RlckRpc3BsYXlBcmVhIiwiaW52ZW50b3J5Q29udGFpbmVyIiwiaXRlbVNsb3RQcmVmYWIiLCJQcmVmYWIiLCJpbnZlbnRvcnlDb2x1bW5zIiwiaW52ZW50b3J5Um93cyIsIml0ZW1TbG90U2l6ZSIsIml0ZW1TbG90U3BhY2luZyIsInN0YXRzUGFuZWwiLCJhdmF0YXJQcmVmYWIiLCJ1bml0RGF0YUNvbmZpZyIsImhlcm9JY29ucyIsIlNwcml0ZUZyYW1lIiwibW9uc3Rlckljb25zIiwiaGVyb1ByZWZhYnMiLCJtb25zdGVyUHJlZmFicyIsImF2YXRhclNwYWNpbmciLCJocExhYmVsIiwiTGFiZWwiLCJhdHRhY2tMYWJlbCIsImRlZmVuc2VMYWJlbCIsInNwZWVkTGFiZWwiLCJjcml0TGFiZWwiLCJtaXNzTGFiZWwiLCJsZXZlbExhYmVsIiwiZXhwTGFiZWwiLCJvbkxvYWQiLCJfdGhpcyIsInJlcXVpcmUiLCJfbG9hZENvbmZpZ0lmTmVlZGVkIiwiY3VycmVudERpc3BsYXlQcmVmYWIiLCJjdXJyZW50VW5pdERhdGEiLCJfaW5pdEF2YXRhcnMiLCJzY2hlZHVsZU9uY2UiLCJfaW5pdEludmVudG9yeSIsIl9zZXR1cEl0ZW1JY29ucyIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiX2luaXREZWZhdWx0SXRlbXMiLCJhY3RpdmUiLCJjYW52YXMiLCJmaW5kIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJfb25DYW52YXNDbGljayIsIl90aGlzMiIsIm5lZWRMb2FkIiwiaGVyb3MiLCJpY29uIiwicHJlZmFiIiwibW9uc3RlcnMiLCJsb2ciLCJpbmRleCIsIl9iaW5kQ2FudmFzQ2xpY2siLCJfdGhpczMiLCJfdGhpczQiLCJyZW1vdmVBbGxDaGlsZHJlbiIsImhlcm9Db3VudCIsImhlcm9EYXRhIiwiX2NyZWF0ZUF2YXRhciIsIm1vbnN0ZXJEYXRhIiwid2FybiIsIm9wYWNpdHkiLCJzZXRBbmNob3JQb2ludCIsInRvdGFsU2xvdHMiLCJzbG90U2l6ZSIsInNwYWNpbmciLCJ0b3RhbFdpZHRoIiwidG90YWxIZWlnaHQiLCJzZXRDb250ZW50U2l6ZSIsIm1hc2siLCJnZXRDb21wb25lbnQiLCJNYXNrIiwiYWRkQ29tcG9uZW50IiwiVHlwZSIsIlJFQ1QiLCJnZXRBbmNob3JQb2ludCIsIngiLCJ5IiwibGF5b3V0IiwiTGF5b3V0IiwiZW5hYmxlZCIsInNsb3ROb2RlIiwiaW5zdGFudGlhdGUiLCJzZXRTY2FsZSIsImFkZENoaWxkIiwiX2luaXRJdGVtU2xvdCIsImNyZWF0ZWRTbG90cyIsImNoaWxkcmVuIiwiX21hbnVhbExheW91dEludmVudG9yeSIsImNvbnRhaW5lclBvcyIsImdldFBvc2l0aW9uIiwiY29udGFpbmVyV29ybGRQb3MiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJ2MiIsInRvRml4ZWQiLCJnZXRDb250ZW50U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiX3RoaXM1Iiwic2NhbGUiLCJzbG90cyIsImNvbnRhaW5lclNpemUiLCJhbmNob3JQb2ludCIsImRpc3BsYXlTaXplIiwic3RhcnRYIiwic3RhcnRZIiwicm93IiwiTWF0aCIsImZsb29yIiwiY29sIiwic2V0UG9zaXRpb24iLCJqIiwiY2hpbGQiLCJfZW5zdXJlU2xvdFZpc2libGUiLCJfYWRkU2xvdEJvcmRlciIsInNsb3RQb3MiLCJzbG90SGFsZlNpemUiLCJjb250YWluZXJIYWxmV2lkdGgiLCJjb250YWluZXJIYWxmSGVpZ2h0IiwiaXNJblJhbmdlIiwiaGFzVmlzaWJsZVNwcml0ZSIsInNwcml0ZU5vZGUiLCJtYWluU3ByaXRlIiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJjaGlsZFNwcml0ZSIsImJnTm9kZSIsImdldENoaWxkQnlOYW1lIiwiZ3JhcGhpY3MiLCJHcmFwaGljcyIsImZpbGxDb2xvciIsIkNvbG9yIiwicmVjdCIsImZpbGwiLCJib3JkZXJOb2RlIiwiZGVzdHJveSIsInN0cm9rZUNvbG9yIiwibGluZVdpZHRoIiwiaGFsZlNpemUiLCJzdHJva2UiLCJ6SW5kZXgiLCJpY29uTm9kZSIsImNvdW50TGFiZWwiLCJzcHJpdGUiLCJsYWJlbCIsInN0cmluZyIsIl9zbG90SW5kZXgiLCJfaXNFbXB0eSIsIl91cGRhdGVJbnZlbnRvcnkiLCJfdGhpczYiLCJfY2FsbGVlMiIsIml0ZW1zIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiX2dldENoYXJhY3Rlckl0ZW1zIiwiX3NldEl0ZW1TbG90IiwiaXRlbSIsIl90aGlzNyIsImNvdW50IiwidG9TdHJpbmciLCJfaXRlbURhdGEiLCJvZmYiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIl9vbkl0ZW1TbG90Q2xpY2siLCJfdGhpczgiLCJfY2FsbGVlMyIsIkl0ZW1TeXN0ZW0iLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJjb25maWciLCJ1c2VJdGVtIiwiaWQiLCJzdWNjZXNzIiwibWVzc2FnZSIsIl9zaG93U3RhdHNQYW5lbCIsInNjZW5lIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImljb25TZXR0ZXIiLCJnZXRDb21wb25lbnRJbkNoaWxkcmVuIiwiX3RoaXM5IiwiX2NhbGxlZTQiLCJJdGVtRGF0YU1hbmFnZXIiLCJJTklUX0ZMQUdfS0VZIiwiaGFzSW5pdGlhbGl6ZWQiLCJjdXJyZW50Q291bnQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0SXRlbUNvdW50IiwiYWRkSXRlbSIsInNldEl0ZW0iLCJjaGFyYWN0ZXJOYW1lIiwiX2NhbGxlZTUiLCJpdGVtc1dpdGhDb25maWciLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJnZXRBbGxJdGVtc1dpdGhDb25maWciLCJmaWx0ZXIiLCJtYXAiLCJpdGVtSWQiLCJ1bml0RGF0YSIsInRlYW0iLCJfdGhpczEwIiwiYXZhdGFyTm9kZSIsIl91bml0RGF0YSIsIl90ZWFtIiwiYXZhdGFyQ29tcCIsImluaXQiLCJfb25BdmF0YXJDbGljayIsIl9kaXNwbGF5Q2hhcmFjdGVyUHJlZmFiIiwiX3RoaXMxMSIsInByZWZhYkluc3RhbmNlIiwiX29yaWdpbmFsQ2hhcmFjdGVyTmFtZSIsIl9pbml0Q2hhcmFjdGVyU3RhdHMiLCJfaXNDaGFyYWN0ZXJQcmVmYWIiLCJfY2FsbGVlNiIsIkNoYXJhY3RlckRhdGFNYW5hZ2VyIiwic3RhdHMiLCJzYXZlZERhdGEiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJsb2FkQ2hhcmFjdGVyTGV2ZWwiLCJiYXNlSHAiLCJocCIsImJhc2VBdHRhY2siLCJhdHRhY2siLCJiYXNlRGVmZW5zZSIsImRlZmVuc2UiLCJiYXNlU3BlZWQiLCJzcGVlZCIsImJhc2VDcml0IiwiY3JpdCIsImJhc2VNaXNzIiwibWlzcyIsImxldmVsIiwiZXhwIiwiX2FwcGx5TGV2ZWxCb251cyIsIm1heEhwIiwidXBkYXRlSGVhbHRoQmFyIiwidXBkYXRlRXhwQmFyIiwidXBkYXRlUmFnZUJhciIsInJhZ2UiLCJMZXZlbENvbmZpZyIsImN1cnJlbnRMZXZlbEV4cCIsImdldEV4cEZvckxldmVsIiwibmV4dExldmVsRXhwIiwiZXhwSW5DdXJyZW50TGV2ZWwiLCJleHBUb05leHQiLCJkaXNwbGF5UG9zIiwidHdlZW4iLCJ0byIsImVhc2luZyIsInN0YXJ0IiwiX3RoaXMxMiIsImlzVmFsaWQiLCJ0YXJnZXQiLCJpc1N0YXRzUGFuZWwiLCJub2RlIiwicGFyZW50Iiwib25EZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsT0FBQSxTQUFBQSxPQUFBLE9BQUFDLEVBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLE1BQUEsR0FBQUgsRUFBQSxDQUFBSSxjQUFBLEVBQUFDLGNBQUEsR0FBQUosTUFBQSxDQUFBSSxjQUFBLGNBQUFDLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxJQUFBLElBQUFGLEdBQUEsQ0FBQUMsR0FBQSxJQUFBQyxJQUFBLENBQUFDLEtB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QUksQ0FBQzFPLG9CQUFvQixJQUFJME8sS0FBSSxDQUFDM0Msa0JBQWtCLEVBQUU7VUFDL0QsT0FBTyxDQUFDO1FBQ1o7O1FBQ0EyQyxLQUFJLEdBQUdBLEtBQUksQ0FBQ0MsTUFBTTtNQUN0QjtJQUNKOztJQUVBO0lBQ0EsSUFBSSxJQUFJLENBQUNqUSxVQUFVLElBQUksSUFBSSxDQUFDQSxVQUFVLENBQUNnQyxNQUFNLEVBQUU7TUFDM0MvQyxFQUFFLENBQUN1USxLQUFLLENBQUMsSUFBSSxDQUFDeFAsVUFBVSxDQUFDLENBQ3BCeVAsRUFBRSxDQUFDLEdBQUcsRUFBRTtRQUFFak0sT0FBTyxFQUFFLENBQUM7UUFBRXNDLEtBQUssRUFBRTtNQUFJLENBQUMsQ0FBQyxDQUNuQ3hOLElBQUksQ0FBQyxZQUFNO1FBQ1JzWCxPQUFJLENBQUM1UCxVQUFVLENBQUNnQyxNQUFNLEdBQUcsS0FBSztNQUNsQyxDQUFDLENBQUMsQ0FDRDJOLEtBQUssRUFBRTtNQUNaMVEsRUFBRSxDQUFDNEQsR0FBRywwREFBNEI7SUFDdEM7RUFDSixDQUFDO0VBRURxTixTQUFTLFdBQUFBLFVBQUEsRUFBRztJQUNSO0lBQ0EsSUFBTWpPLE1BQU0sR0FBR2hELEVBQUUsQ0FBQ2lELElBQUksQ0FBQyxRQUFRLENBQUM7SUFDaEMsSUFBSUQsTUFBTSxFQUFFO01BQ1JBLE1BQU0sQ0FBQzJILEdBQUcsQ0FBQzNLLEVBQUUsQ0FBQ0ssSUFBSSxDQUFDOEMsU0FBUyxDQUFDQyxTQUFTLEVBQUUsSUFBSSxDQUFDQyxjQUFjLEVBQUUsSUFBSSxDQUFDO0lBQ3RFO0VBQ0o7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDkurrnianlsZ7mgKfmn6XnnItVSee7hOS7tlxyXG4gKiDnrqHnkIblpLTlg4/liJfooajjgIHkurrnianljp/lnovmmL7npLrjgIHlsZ7mgKfpnaLmnb9cclxuICovXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8g5bem5L6n5aS05YOP5YiX6KGo5a655ZmoXHJcbiAgICAgICAgYXZhdGFyTGlzdENvbnRhaW5lcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIuW3puS+p+WktOWDj+WIl+ihqOWuueWZqOiKgueCuVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5Lit6Ze05Lq654mp5Y6f5Z6L5pi+56S65Yy65Z+fXHJcbiAgICAgICAgY2hhcmFjdGVyRGlzcGxheUFyZWE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLkuK3pl7Tkurrnianljp/lnovmmL7npLrljLrln5/oioLngrlcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOmBk+WFt+agj+WuueWZqO+8iOaYvuekuuWcqOS6uueJqeWOn+Wei+S4i+aWue+8iVxyXG4gICAgICAgIGludmVudG9yeUNvbnRhaW5lcjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIumBk+WFt+agj+WuueWZqOiKgueCue+8iOe9keagvOW4g+WxgO+8jOaYvuekuuWcqOS6uueJqeWOn+Wei+S4i+aWue+8iVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g6YGT5YW36aG5UHJlZmFi77yI55So5LqO5Yib5bu66YGT5YW35qC85a2Q77yJXHJcbiAgICAgICAgaXRlbVNsb3RQcmVmYWI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIumBk+WFt+agvOWtkFByZWZhYu+8iOWMheWQq+Wbvuagh+WSjOaVsOmHj+agh+etvu+8iVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g6YGT5YW35qCP572R5qC86YWN572uXHJcbiAgICAgICAgaW52ZW50b3J5Q29sdW1uczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiA2LFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIumBk+WFt+agj+WIl+aVsO+8iOavj+ihjOaYvuekuueahOmBk+WFt+aVsOmHj++8iVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnZlbnRvcnlSb3dzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDQsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6YGT5YW35qCP6KGM5pWwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGl0ZW1TbG90U2l6ZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiA4MCxcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLpgZPlhbfmoLzlrZDlpKflsI/vvIjlrr3pq5jvvIlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXRlbVNsb3RTcGFjaW5nOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6YGT5YW35qC85a2Q5LmL6Ze055qE6Ze06LedXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDlsZ7mgKfpnaLmnb/vvIjljYrpgI/mmI7og4zmma/vvIlcclxuICAgICAgICBzdGF0c1BhbmVsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5bGe5oCn6Z2i5p2/6IqC54K577yI5Y2K6YCP5piO6IOM5pmv77yJXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDlpLTlg49QcmVmYWLvvIjnlKjkuo7liqjmgIHliJvlu7rlpLTlg4/vvIlcclxuICAgICAgICBhdmF0YXJQcmVmYWI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWktOWDj1ByZWZhYu+8iOWMheWQq+WktOWDj+WbvueJh++8iVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5Y2V5L2N5pWw5o2u6YWN572uXHJcbiAgICAgICAgdW5pdERhdGFDb25maWc6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLljZXkvY3mlbDmja7phY3nva7vvIjlj6/pgInvvIzlpoLmnpzkuI3orr7nva7liJnku45Vbml0RGF0YUNvbmZpZ+iOt+WPlu+8iVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5aSH55So6LWE5rqQ77ya6Iux6ZuE5aS05YOP6LWE5rqQ5YiX6KGo77yI5LuF5ZyoVW5pdERhdGFDb25maWfkuK3otYTmupDkuLrnqbrml7bkvb/nlKjvvIlcclxuICAgICAgICBoZXJvSWNvbnM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5TcHJpdGVGcmFtZV0sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6Iux6ZuE5aS05YOP6LWE5rqQ5YiX6KGo77yI5aSH55So77yM5LuF5ZyoU2VsZWN0U2NlbmXmnKrliqDovb3ml7bkvb/nlKjvvIlcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOWkh+eUqOi1hOa6kO+8muaAqueJqeWktOWDj+i1hOa6kOWIl+ihqO+8iOS7heWcqFVuaXREYXRhQ29uZmln5Lit6LWE5rqQ5Li656m65pe25L2/55So77yJXHJcbiAgICAgICAgbW9uc3Rlckljb25zOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBbY2MuU3ByaXRlRnJhbWVdLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIuaAqueJqeWktOWDj+i1hOa6kOWIl+ihqO+8iOWkh+eUqO+8jOS7heWcqFNlbGVjdFNjZW5l5pyq5Yqg6L295pe25L2/55So77yJXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDlpIfnlKjotYTmupDvvJroi7Hpm4RQcmVmYWLliJfooajvvIjku4XlnKhVbml0RGF0YUNvbmZpZ+S4rei1hOa6kOS4uuepuuaXtuS9v+eUqO+8iVxyXG4gICAgICAgIGhlcm9QcmVmYWJzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBbY2MuUHJlZmFiXSxcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLoi7Hpm4RQcmVmYWLliJfooajvvIjlpIfnlKjvvIzku4XlnKhTZWxlY3RTY2VuZeacquWKoOi9veaXtuS9v+eUqO+8iVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5aSH55So6LWE5rqQ77ya5oCq54mpUHJlZmFi5YiX6KGo77yI5LuF5ZyoVW5pdERhdGFDb25maWfkuK3otYTmupDkuLrnqbrml7bkvb/nlKjvvIlcclxuICAgICAgICBtb25zdGVyUHJlZmFiczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLlByZWZhYl0sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5oCq54mpUHJlZmFi5YiX6KGo77yI5aSH55So77yM5LuF5ZyoU2VsZWN0U2NlbmXmnKrliqDovb3ml7bkvb/nlKjvvIlcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOWktOWDj+mXtOi3nVxyXG4gICAgICAgIGF2YXRhclNwYWNpbmc6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogMTAwLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWktOWDj+S5i+mXtOeahOmXtOi3nVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5bGe5oCn6Z2i5p2/5Lit55qE5bGe5oCn5qCH562+77yI6ZyA6KaB5Zyo57yW6L6R5Zmo5Lit57uR5a6a77yJXHJcbiAgICAgICAgaHBMYWJlbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLnlJ/lkb3lgLzmoIfnrb5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXR0YWNrTGFiZWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5pS75Ye75Yqb5qCH562+XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlZmVuc2VMYWJlbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLpmLLlvqHlipvmoIfnrb5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3BlZWRMYWJlbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLpgJ/luqbmoIfnrb5cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JpdExhYmVsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIuaatOWHu+eOh+agh+etvlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtaXNzTGFiZWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi6Zeq6YG/546H5qCH562+XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxldmVsTGFiZWw6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi562J57qn5qCH562+XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4cExhYmVsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIue7j+mqjOWAvOagh+etvlwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8g6I635Y+W5Y2V5L2N5pWw5o2u6YWN572u77yI5LyY5YWI5L2/55SoU2VsZWN0U2NlbmXkuK3lt7Lorr7nva7lpb3nmoTotYTmupDvvIlcclxuICAgICAgICBpZiAoIXRoaXMudW5pdERhdGFDb25maWcpIHtcclxuICAgICAgICAgICAgdGhpcy51bml0RGF0YUNvbmZpZyA9IHJlcXVpcmUoXCJVbml0RGF0YUNvbmZpZ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWmguaenFVuaXREYXRhQ29uZmln5Lit55qE6LWE5rqQ5Li656m677yM5LuO5Zy65pmv6YWN572u5Lit5Yqg6L2977yI5aSH55So5pa55qGI77yJXHJcbiAgICAgICAgdGhpcy5fbG9hZENvbmZpZ0lmTmVlZGVkKCk7XHJcblxyXG4gICAgICAgIC8vIOW9k+WJjeaYvuekuueahOS6uueJqeWOn+Wei1xyXG4gICAgICAgIHRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIgPSBudWxsO1xyXG4gICAgICAgIC8vIOW9k+WJjemAieS4reeahOWNleS9jeaVsOaNrlxyXG4gICAgICAgIHRoaXMuY3VycmVudFVuaXREYXRhID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWVUlcclxuICAgICAgICB0aGlzLl9pbml0QXZhdGFycygpO1xyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJbpgZPlhbfmoI/vvIjlu7bov5/kuIDluKfvvIznoa7kv53lrrnlmajoioLngrnlt7LlrozlhajliJ3lp4vljJbvvIlcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRJbnZlbnRvcnkoKTtcclxuICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgLy8g6K6+572u6YGT5YW35Zu+5qCH77yI5aaC5p6cSXRlbUljb25TZXR0ZXLnu4Tku7blt7Lorr7nva7vvIlcclxuICAgICAgICB0aGlzLl9zZXR1cEl0ZW1JY29ucygpO1xyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJbpgZPlhbfmlbDmja7vvIjmt7vliqA15Liq5Y2H57qn6I2v5rC055So5LqO5rWL6K+V77yJXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9pbml0RGVmYXVsdEl0ZW1zKCk7XHJcbiAgICAgICAgfSwgMC41KTtcclxuXHJcbiAgICAgICAgLy8g6ZqQ6JeP5bGe5oCn6Z2i5p2/XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdHNQYW5lbCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRzUGFuZWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDnu5Hlrprngrnlh7vkuovku7bvvIjngrnlh7vku7vmhI/lnLDmlrnlhbPpl63lsZ7mgKfpnaLmnb/vvIlcclxuICAgICAgICAvLyDkvb/nlKhDYW52YXPmiJblnLrmma/moLnoioLngrnmnaXmjZXojrfngrnlh7vkuovku7ZcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xyXG4gICAgICAgIGlmIChjYW52YXMpIHtcclxuICAgICAgICAgICAgY2FudmFzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fb25DYW52YXNDbGljaywgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWmguaenFVuaXREYXRhQ29uZmln5Lit55qE6LWE5rqQ5Li656m677yM5LuO5Zy65pmv6YWN572u5Lit5Yqg6L2977yI5aSH55So5pa55qGI77yJXHJcbiAgICAgKiDkvJjlhYjkvb/nlKhTZWxlY3RTY2VuZeS4reW3suiuvue9ruWlveeahOi1hOa6kO+8jOWmguaenOS4uuepuuaJjeS9v+eUqOWcuuaZr+mFjee9rlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2xvYWRDb25maWdJZk5lZWRlZCgpIHtcclxuICAgICAgICBsZXQgbmVlZExvYWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8g5qOA5p+l5piv5ZCm5pyJ6LWE5rqQ5Li656m6XHJcbiAgICAgICAgaWYgKHRoaXMudW5pdERhdGFDb25maWcgJiYgdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudW5pdERhdGFDb25maWcuaGVyb3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpXS5pY29uIHx8ICF0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zW2ldLnByZWZhYikge1xyXG4gICAgICAgICAgICAgICAgICAgIG5lZWRMb2FkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFuZWVkTG9hZCAmJiB0aGlzLnVuaXREYXRhQ29uZmlnICYmIHRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnNbaV0uaWNvbiB8fCAhdGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVyc1tpXS5wcmVmYWIpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWVkTG9hZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWmguaenOaciei1hOa6kOS4uuepuu+8jOS7juWcuuaZr+mFjee9ruS4reWKoOi9vVxyXG4gICAgICAgIGlmIChuZWVkTG9hZCkge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJbQ2hhcmFjdGVyVmlld1VJXSDmo4DmtYvliLBVbml0RGF0YUNvbmZpZ+S4rei1hOa6kOS4uuepuu+8jOS7juWcuuaZr+mFjee9ruWKoOi9ve+8iOWkh+eUqOaWueahiO+8iVwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOW6lOeUqOiLsembhOWktOWDj+WSjFByZWZhYumFjee9ru+8iOS7heWcqFVuaXREYXRhQ29uZmln5Lit6LWE5rqQ5Li656m65pe26K6+572u77yJXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhlcm9JY29ucyAmJiB0aGlzLmhlcm9JY29ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlcm9JY29ucy5mb3JFYWNoKChpY29uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zICYmIHRoaXMudW5pdERhdGFDb25maWcuaGVyb3NbaW5kZXhdICYmIGljb24gJiYgIXRoaXMudW5pdERhdGFDb25maWcuaGVyb3NbaW5kZXhdLmljb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpbmRleF0uaWNvbiA9IGljb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5LuO5Zy65pmv6YWN572u6K6+572u6Iux6ZuE5aS05YOPOiAke3RoaXMudW5pdERhdGFDb25maWcuaGVyb3NbaW5kZXhdLm5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhlcm9QcmVmYWJzICYmIHRoaXMuaGVyb1ByZWZhYnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZXJvUHJlZmFicy5mb3JFYWNoKChwcmVmYWIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudW5pdERhdGFDb25maWcuaGVyb3MgJiYgdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpbmRleF0gJiYgcHJlZmFiICYmICF0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zW2luZGV4XS5wcmVmYWIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpbmRleF0ucHJlZmFiID0gcHJlZmFiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOS7juWcuuaZr+mFjee9ruiuvue9ruiLsembhFByZWZhYjogJHt0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zW2luZGV4XS5uYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDlupTnlKjmgKrnianlpLTlg4/lkoxQcmVmYWLphY3nva7vvIjku4XlnKhVbml0RGF0YUNvbmZpZ+S4rei1hOa6kOS4uuepuuaXtuiuvue9ru+8iVxyXG4gICAgICAgICAgICBpZiAodGhpcy5tb25zdGVySWNvbnMgJiYgdGhpcy5tb25zdGVySWNvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb25zdGVySWNvbnMuZm9yRWFjaCgoaWNvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVycyAmJiB0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzW2luZGV4XSAmJiBpY29uICYmICF0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzW2luZGV4XS5pY29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnNbaW5kZXhdLmljb24gPSBpY29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOS7juWcuuaZr+mFjee9ruiuvue9ruaAqueJqeWktOWDjzogJHt0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzW2luZGV4XS5uYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5tb25zdGVyUHJlZmFicyAmJiB0aGlzLm1vbnN0ZXJQcmVmYWJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9uc3RlclByZWZhYnMuZm9yRWFjaCgocHJlZmFiLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzICYmIHRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnNbaW5kZXhdICYmIHByZWZhYiAmJiAhdGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVyc1tpbmRleF0ucHJlZmFiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnNbaW5kZXhdLnByZWZhYiA9IHByZWZhYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDku47lnLrmma/phY3nva7orr7nva7mgKrnialQcmVmYWI6ICR7dGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVyc1tpbmRleF0ubmFtZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIltDaGFyYWN0ZXJWaWV3VUldIFVuaXREYXRhQ29uZmln5Lit5bey5pyJ6LWE5rqQ77yM55u05o6l5L2/55So77yI5Y+v6IO955SxU2VsZWN0U2NlbmXorr7nva7vvIlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe7keWumkNhbnZhc+eCueWHu+S6i+S7tlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2JpbmRDYW52YXNDbGljaygpIHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xyXG4gICAgICAgIGlmIChjYW52YXMpIHtcclxuICAgICAgICAgICAgY2FudmFzLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fb25DYW52YXNDbGljaywgdGhpcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g5bu26L+f57uR5a6a77yI5aaC5p6cQ2FudmFz6L+Y5pyq5Yib5bu677yJXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JpbmRDYW52YXNDbGljaygpO1xyXG4gICAgICAgICAgICB9LCAwLjEpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJblpLTlg4/liJfooahcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9pbml0QXZhdGFycygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYXZhdGFyTGlzdENvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihcIltDaGFyYWN0ZXJWaWV3VUldIOacquiuvue9rmF2YXRhckxpc3RDb250YWluZXLvvIzml6Dms5XliJvlu7rlpLTlg4/liJfooahcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5hdmF0YXJQcmVmYWIpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCJbQ2hhcmFjdGVyVmlld1VJXSDmnKrorr7nva5hdmF0YXJQcmVmYWLvvIzml6Dms5XliJvlu7rlpLTlg49cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOa4heepuuWuueWZqFxyXG4gICAgICAgIHRoaXMuYXZhdGFyTGlzdENvbnRhaW5lci5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG5cclxuICAgICAgICAvLyDorqHnrpfoi7Hpm4TmlbDph4/vvIjnlKjkuo7mgKrnianlpLTlg4/nmoTkvY3nva7lgY/np7vvvIlcclxuICAgICAgICBjb25zdCBoZXJvQ291bnQgPSB0aGlzLnVuaXREYXRhQ29uZmlnICYmIHRoaXMudW5pdERhdGFDb25maWcuaGVyb3MgPyB0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zLmxlbmd0aCA6IDA7XHJcblxyXG4gICAgICAgIC8vIOWIm+W7uuiLsembhOWktOWDj1xyXG4gICAgICAgIGlmICh0aGlzLnVuaXREYXRhQ29uZmlnICYmIHRoaXMudW5pdERhdGFDb25maWcuaGVyb3MpIHtcclxuICAgICAgICAgICAgdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvcy5mb3JFYWNoKChoZXJvRGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUF2YXRhcihoZXJvRGF0YSwgXCJoZXJvXCIsIGluZGV4KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDliJvlu7rmgKrnianlpLTlg4/vvIjkvY3nva7ku47oi7Hpm4TlkI7pnaLlvIDlp4vvvIlcclxuICAgICAgICBpZiAodGhpcy51bml0RGF0YUNvbmZpZyAmJiB0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnMuZm9yRWFjaCgobW9uc3RlckRhdGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDkvb/nlKggaGVyb0NvdW50ICsgaW5kZXgg5L2c5Li65L2N572u57Si5byV77yM6K6p5oCq54mp5o6S5Zyo6Iux6ZuE5ZCO6Z2iXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVBdmF0YXIobW9uc3RlckRhdGEsIFwibW9uc3RlclwiLCBoZXJvQ291bnQgKyBpbmRleCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbpgZPlhbfmoI9cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9pbml0SW52ZW50b3J5KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnZlbnRvcnlDb250YWluZXIpIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIltDaGFyYWN0ZXJWaWV3VUldIOacquiuvue9rmludmVudG9yeUNvbnRhaW5lcu+8jOi3s+i/h+mBk+WFt+agj+WIneWni+WMllwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLml0ZW1TbG90UHJlZmFiKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCJbQ2hhcmFjdGVyVmlld1VJXSDmnKrorr7nva5pdGVtU2xvdFByZWZhYu+8jOi3s+i/h+mBk+WFt+agj+WIneWni+WMllwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5by65Yi26K6+572u6KGM5YiX5pWw77yI56Gu5L+d5L2/55So5paw55qE5YC877yJXHJcbiAgICAgICAgaWYgKHRoaXMuaW52ZW50b3J5Q29sdW1ucyAhPT0gNikge1xyXG4gICAgICAgICAgICB0aGlzLmludmVudG9yeUNvbHVtbnMgPSA2O1xyXG4gICAgICAgICAgICBjYy5sb2coXCJbQ2hhcmFjdGVyVmlld1VJXSDlvLrliLborr7nva7liJfmlbDkuLo2XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pbnZlbnRvcnlSb3dzICE9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW52ZW50b3J5Um93cyA9IDQ7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIltDaGFyYWN0ZXJWaWV3VUldIOW8uuWItuiuvue9ruihjOaVsOS4ujRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmuIXnqbrlrrnlmahcclxuICAgICAgICB0aGlzLmludmVudG9yeUNvbnRhaW5lci5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG5cclxuICAgICAgICAvLyDnoa7kv53lrrnlmajlj6/op4FcclxuICAgICAgICB0aGlzLmludmVudG9yeUNvbnRhaW5lci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaW52ZW50b3J5Q29udGFpbmVyLm9wYWNpdHkgPSAyNTU7XHJcblxyXG4gICAgICAgIC8vIOiuvue9ruWuueWZqOmUmueCueS4uuWxheS4re+8iDAuNSwgMC4177yJ77yM6L+Z5qC35L2N572u6K6h566X5pu0566A5Y2VXHJcbiAgICAgICAgdGhpcy5pbnZlbnRvcnlDb250YWluZXIuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xyXG5cclxuICAgICAgICAvLyDorqHnrpfpgZPlhbfmoI/mgLvmoLzlrZDmlbDlkozlrrnlmajlpKflsI9cclxuICAgICAgICBjb25zdCB0b3RhbFNsb3RzID0gdGhpcy5pbnZlbnRvcnlDb2x1bW5zICogdGhpcy5pbnZlbnRvcnlSb3dzO1xyXG4gICAgICAgIGNvbnN0IHNsb3RTaXplID0gdGhpcy5pdGVtU2xvdFNpemUgfHwgODA7XHJcbiAgICAgICAgY29uc3Qgc3BhY2luZyA9IHRoaXMuaXRlbVNsb3RTcGFjaW5nIHx8IDA7IC8vIOmXtOmalOaUueS4ujBcclxuXHJcbiAgICAgICAgLy8g5YWI6K6h566X5bm26K6+572u5a655Zmo5aSn5bCP77yI5b+F6aG75Zyo5re75Yqg5a2Q6IqC54K55LmL5YmN77yJXHJcbiAgICAgICAgY29uc3QgdG90YWxXaWR0aCA9ICh0aGlzLmludmVudG9yeUNvbHVtbnMgKiBzbG90U2l6ZSkgKyAoKHRoaXMuaW52ZW50b3J5Q29sdW1ucyAtIDEpICogc3BhY2luZyk7XHJcbiAgICAgICAgY29uc3QgdG90YWxIZWlnaHQgPSAodGhpcy5pbnZlbnRvcnlSb3dzICogc2xvdFNpemUpICsgKCh0aGlzLmludmVudG9yeVJvd3MgLSAxKSAqIHNwYWNpbmcpO1xyXG4gICAgICAgIHRoaXMuaW52ZW50b3J5Q29udGFpbmVyLnNldENvbnRlbnRTaXplKHRvdGFsV2lkdGgsIHRvdGFsSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8g5re75YqgTWFza+e7hOS7tu+8jOijgeWJqui2heWHuuiMg+WbtOeahOagvOWtkFxyXG4gICAgICAgIGxldCBtYXNrID0gdGhpcy5pbnZlbnRvcnlDb250YWluZXIuZ2V0Q29tcG9uZW50KGNjLk1hc2spO1xyXG4gICAgICAgIGlmICghbWFzaykge1xyXG4gICAgICAgICAgICBtYXNrID0gdGhpcy5pbnZlbnRvcnlDb250YWluZXIuYWRkQ29tcG9uZW50KGNjLk1hc2spO1xyXG4gICAgICAgICAgICBtYXNrLnR5cGUgPSBjYy5NYXNrLlR5cGUuUkVDVDsgLy8g55+p5b2i6KOB5YmqXHJcbiAgICAgICAgICAgIGNjLmxvZyhcIltDaGFyYWN0ZXJWaWV3VUldIOiHquWKqOa3u+WKoE1hc2vnu4Tku7bliLDpgZPlhbfmoI/lrrnlmajvvIjnlKjkuo7oo4HliarotoXlh7rojIPlm7TnmoTmoLzlrZDvvIlcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOmBk+WFt+agj+WuueWZqOWkp+WwjzogJHt0b3RhbFdpZHRofSB4ICR7dG90YWxIZWlnaHR9LCDmoLzlrZDmlbA6ICR7dG90YWxTbG90c30sIOmUmueCuTogKCR7dGhpcy5pbnZlbnRvcnlDb250YWluZXIuZ2V0QW5jaG9yUG9pbnQoKS54fSwgJHt0aGlzLmludmVudG9yeUNvbnRhaW5lci5nZXRBbmNob3JQb2ludCgpLnl9KWApO1xyXG5cclxuICAgICAgICAvLyDmlrnlvI/kuIDvvJrkvb/nlKhMYXlvdXTnu4Tku7boh6rliqjluIPlsYDvvIjmjqjojZDvvIlcclxuICAgICAgICAvLyDmo4Dmn6XmmK/lkKblt7LmnIlMYXlvdXTnu4Tku7bvvIzlpoLmnpzmsqHmnInliJnmt7vliqBcclxuICAgICAgICBsZXQgbGF5b3V0ID0gdGhpcy5pbnZlbnRvcnlDb250YWluZXIuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XHJcbiAgICAgICAgaWYgKCFsYXlvdXQpIHtcclxuICAgICAgICAgICAgbGF5b3V0ID0gdGhpcy5pbnZlbnRvcnlDb250YWluZXIuYWRkQ29tcG9uZW50KGNjLkxheW91dCk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIltDaGFyYWN0ZXJWaWV3VUldIOiHquWKqOa3u+WKoExheW91dOe7hOS7tuWIsOmBk+WFt+agj+WuueWZqFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOemgeeUqExheW91dOe7hOS7tu+8jOS9v+eUqOaJi+WKqOW4g+WxgO+8iOabtOWPr+aOp++8iVxyXG4gICAgICAgIC8vIExheW91dOe7hOS7tuWcqEdSSUTmqKHlvI/kuIvlj6/og73mnInpl67popjvvIzmiYvliqjluIPlsYDmm7Tlj6/pnaBcclxuICAgICAgICBpZiAobGF5b3V0KSB7XHJcbiAgICAgICAgICAgIGxheW91dC5lbmFibGVkID0gZmFsc2U7IC8vIOemgeeUqExheW91dOe7hOS7tlxyXG4gICAgICAgICAgICBjYy5sb2coXCJbQ2hhcmFjdGVyVmlld1VJXSDnpoHnlKhMYXlvdXTnu4Tku7bvvIzkvb/nlKjmiYvliqjluIPlsYBcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDliJvlu7rpgZPlhbfmoLzlrZBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsU2xvdHM7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzbG90Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVNsb3RQcmVmYWIpO1xyXG4gICAgICAgICAgICBpZiAoIXNsb3ROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihgW0NoYXJhY3RlclZpZXdVSV0g5peg5rOV5a6e5L6L5YyW6YGT5YW35qC85a2QUHJlZmFiICjntKLlvJU6ICR7aX0pYCk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2xvdE5vZGUubmFtZSA9IGBJdGVtU2xvdF8ke2l9YDtcclxuXHJcbiAgICAgICAgICAgIC8vIOehruS/neiKgueCueWPr+ingVxyXG4gICAgICAgICAgICBzbG90Tm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBzbG90Tm9kZS5vcGFjaXR5ID0gMjU1O1xyXG5cclxuICAgICAgICAgICAgLy8g5by65Yi26K6+572u6IqC54K55aSn5bCP5Li6c2xvdFNpemXvvIjopobnm5ZQcmVmYWLnmoTpu5jorqTlpKflsI/vvIlcclxuICAgICAgICAgICAgc2xvdE5vZGUuc2V0Q29udGVudFNpemUoc2xvdFNpemUsIHNsb3RTaXplKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOiuvue9ruiKgueCuemUmueCueS4uuWxheS4re+8iOS+v+S6juWumuS9je+8iVxyXG4gICAgICAgICAgICBzbG90Tm9kZS5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XHJcblxyXG4gICAgICAgICAgICAvLyDorr7nva7nvKnmlL7kuLowLjhcclxuICAgICAgICAgICAgc2xvdE5vZGUuc2V0U2NhbGUoMC44LCAwLjgsIDAuOCk7XHJcblxyXG4gICAgICAgICAgICAvLyDmt7vliqDliLDlrrnlmahcclxuICAgICAgICAgICAgdGhpcy5pbnZlbnRvcnlDb250YWluZXIuYWRkQ2hpbGQoc2xvdE5vZGUpO1xyXG5cclxuICAgICAgICAgICAgLy8g5Yid5aeL5YyW6YGT5YW35qC85a2Q77yI56m654q25oCB77yJXHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRJdGVtU2xvdChzbG90Tm9kZSwgaSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDpqozor4HliJvlu7rnu5PmnpxcclxuICAgICAgICBjb25zdCBjcmVhdGVkU2xvdHMgPSB0aGlzLmludmVudG9yeUNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDpgZPlhbfmoI/liJ3lp4vljJblrozmiJA6ICR7dGhpcy5pbnZlbnRvcnlSb3dzfeihjCB4ICR7dGhpcy5pbnZlbnRvcnlDb2x1bW5zfeWIlyA9ICR7dG90YWxTbG90c33kuKrmoLzlrZAsIOWunumZheWIm+W7ujogJHtjcmVhdGVkU2xvdHN95LiqYCk7XHJcblxyXG4gICAgICAgIGlmIChjcmVhdGVkU2xvdHMgPT09IDApIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoXCJbQ2hhcmFjdGVyVmlld1VJXSDorablkYrvvJrmsqHmnInliJvlu7rku7vkvZXpgZPlhbfmoLzlrZDvvIHor7fmo4Dmn6VpdGVtU2xvdFByZWZhYuaYr+WQpuato+ehrue7keWumuOAglwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5L2/55So5omL5Yqo5biD5bGA77yI56Gu5L+d6Ze06ZqU5Li6MO+8jOW5tua3u+WKoOi+ueahhu+8iVxyXG4gICAgICAgIHRoaXMuX21hbnVhbExheW91dEludmVudG9yeSgpO1xyXG5cclxuICAgICAgICAvLyDovpPlh7rosIPor5Xkv6Hmga9cclxuICAgICAgICBjb25zdCBjb250YWluZXJQb3MgPSB0aGlzLmludmVudG9yeUNvbnRhaW5lci5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lcldvcmxkUG9zID0gdGhpcy5pbnZlbnRvcnlDb250YWluZXIuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOWuueWZqOS9jee9rjog5pys5ZywKCR7Y29udGFpbmVyUG9zLngudG9GaXhlZCgxKX0sICR7Y29udGFpbmVyUG9zLnkudG9GaXhlZCgxKX0pLCDkuJbnlYwoJHtjb250YWluZXJXb3JsZFBvcy54LnRvRml4ZWQoMSl9LCAke2NvbnRhaW5lcldvcmxkUG9zLnkudG9GaXhlZCgxKX0pYCk7XHJcbiAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDlrrnlmajlpKflsI86ICR7dGhpcy5pbnZlbnRvcnlDb250YWluZXIuZ2V0Q29udGVudFNpemUoKS53aWR0aH0geCAke3RoaXMuaW52ZW50b3J5Q29udGFpbmVyLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0fWApO1xyXG4gICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5a655Zmo5Y+v6KeB5oCnOiBhY3RpdmU9JHt0aGlzLmludmVudG9yeUNvbnRhaW5lci5hY3RpdmV9LCBvcGFjaXR5PSR7dGhpcy5pbnZlbnRvcnlDb250YWluZXIub3BhY2l0eX1gKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiYvliqjluIPlsYDpgZPlhbfmoI/vvIjlpIfnlKjmlrnmoYjvvIlcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9tYW51YWxMYXlvdXRJbnZlbnRvcnkoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmludmVudG9yeUNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzbG90U2l6ZSA9IHRoaXMuaXRlbVNsb3RTaXplIHx8IDgwO1xyXG4gICAgICAgIGNvbnN0IHNwYWNpbmcgPSB0aGlzLml0ZW1TbG90U3BhY2luZyB8fCAwOyAvLyDpl7TpmpTmlLnkuLowXHJcbiAgICAgICAgY29uc3Qgc2NhbGUgPSAwLjg7IC8vIOe8qeaUvuWAvFxyXG4gICAgICAgIGNvbnN0IHNsb3RzID0gdGhpcy5pbnZlbnRvcnlDb250YWluZXIuY2hpbGRyZW47XHJcblxyXG4gICAgICAgIC8vIOiOt+WPluWuueWZqOWkp+Wwj+WSjOmUmueCuVxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lclNpemUgPSB0aGlzLmludmVudG9yeUNvbnRhaW5lci5nZXRDb250ZW50U2l6ZSgpO1xyXG4gICAgICAgIGNvbnN0IGFuY2hvclBvaW50ID0gdGhpcy5pbnZlbnRvcnlDb250YWluZXIuZ2V0QW5jaG9yUG9pbnQoKTtcclxuXHJcbiAgICAgICAgLy8g6K6h566X5a6e6ZmF5pi+56S65aSn5bCP77yI6ICD6JmR57yp5pS+77yJXHJcbiAgICAgICAgY29uc3QgZGlzcGxheVNpemUgPSBzbG90U2l6ZSAqIHNjYWxlO1xyXG5cclxuICAgICAgICAvLyDorqHnrpflrrnlmajlpKflsI/vvIjkvb/nlKjlrp7pmYXmmL7npLrlpKflsI/vvIznoa7kv53ntKflr4bmjpLliJfvvIlcclxuICAgICAgICBjb25zdCB0b3RhbFdpZHRoID0gdGhpcy5pbnZlbnRvcnlDb2x1bW5zICogZGlzcGxheVNpemU7XHJcbiAgICAgICAgY29uc3QgdG90YWxIZWlnaHQgPSB0aGlzLmludmVudG9yeVJvd3MgKiBkaXNwbGF5U2l6ZTtcclxuXHJcbiAgICAgICAgLy8g5pu05paw5a655Zmo5aSn5bCP77yI5L2/55So5a6e6ZmF5pi+56S65aSn5bCP77yJXHJcbiAgICAgICAgdGhpcy5pbnZlbnRvcnlDb250YWluZXIuc2V0Q29udGVudFNpemUodG90YWxXaWR0aCwgdG90YWxIZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyDorqHnrpfotbflp4vkvY3nva7vvJrku47lt6bkuIrop5LlvIDlp4vvvIznrKzkuIDkuKrmoLzlrZDnmoTkuK3lv4PkvY3nva5cclxuICAgICAgICAvLyDkvb/nlKjlrp7pmYXmmL7npLrlpKflsI/mnaXorqHnrpfkvY3nva7vvIznoa7kv53ntKflr4bmjpLliJdcclxuICAgICAgICBjb25zdCBzdGFydFggPSAtdG90YWxXaWR0aCAvIDIgKyBkaXNwbGF5U2l6ZSAvIDI7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRZID0gdG90YWxIZWlnaHQgLyAyIC0gZGlzcGxheVNpemUgLyAyO1xyXG5cclxuICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOaJi+WKqOW4g+WxgOWPguaVsDogc2xvdFNpemU9JHtzbG90U2l6ZX0sIHNjYWxlPSR7c2NhbGV9LCBkaXNwbGF5U2l6ZT0ke2Rpc3BsYXlTaXplLnRvRml4ZWQoMSl9LCBzcGFjaW5nPSR7c3BhY2luZ31gKTtcclxuICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOWuueWZqOWkp+WwjzogJHt0b3RhbFdpZHRoLnRvRml4ZWQoMSl9IHggJHt0b3RhbEhlaWdodC50b0ZpeGVkKDEpfSwgc3RhcnRYPSR7c3RhcnRYLnRvRml4ZWQoMSl9LCBzdGFydFk9JHtzdGFydFkudG9GaXhlZCgxKX1gKTtcclxuXHJcbiAgICAgICAgLy8g5omL5Yqo6K6+572u5q+P5Liq5qC85a2Q55qE5L2N572uXHJcbiAgICAgICAgc2xvdHMuZm9yRWFjaCgoc2xvdE5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaW5kZXggLyB0aGlzLmludmVudG9yeUNvbHVtbnMpO1xyXG4gICAgICAgICAgICBjb25zdCBjb2wgPSBpbmRleCAlIHRoaXMuaW52ZW50b3J5Q29sdW1ucztcclxuXHJcbiAgICAgICAgICAgIC8vIOiuoeeul+S9jee9ru+8iOS9v+eUqOWunumZheaYvuekuuWkp+Wwj++8jOehruS/nee0p+WvhuaOkuWIl++8jOaXoOmXtOmame+8iVxyXG4gICAgICAgICAgICBjb25zdCB4ID0gc3RhcnRYICsgY29sICogZGlzcGxheVNpemU7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBzdGFydFkgLSByb3cgKiBkaXNwbGF5U2l6ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIOiuvue9ruS9jee9ru+8iOehruS/neWcqOWuueWZqOiMg+WbtOWGhe+8iVxyXG4gICAgICAgICAgICBzbG90Tm9kZS5zZXRQb3NpdGlvbih4LCB5KTtcclxuXHJcbiAgICAgICAgICAgIC8vIOW8uuWItuiuvue9ruiKgueCueWkp+Wwj+S4unNsb3RTaXpl77yI6KaG55uWUHJlZmFi55qE6buY6K6k5aSn5bCP77yJXHJcbiAgICAgICAgICAgIHNsb3ROb2RlLnNldENvbnRlbnRTaXplKHNsb3RTaXplLCBzbG90U2l6ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyDorr7nva7oioLngrnplJrngrnkuLrlsYXkuK1cclxuICAgICAgICAgICAgc2xvdE5vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xyXG5cclxuICAgICAgICAgICAgLy8g6K6+572u57yp5pS+5Li6MC4477yI5b+F6aG75Zyo6K6+572u5L2N572u5LmL5ZCO77yM56Gu5L+d5L2N572u6K6h566X5q2j56Gu77yJXHJcbiAgICAgICAgICAgIHNsb3ROb2RlLnNldFNjYWxlKDAuOCwgMC44LCAwLjgpO1xyXG5cclxuICAgICAgICAgICAgLy8g56Gu5L+d6IqC54K55Y+v6KeBXHJcbiAgICAgICAgICAgIHNsb3ROb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHNsb3ROb2RlLm9wYWNpdHkgPSAyNTU7XHJcblxyXG4gICAgICAgICAgICAvLyDosIPmlbTlrZDoioLngrnlpKflsI/vvIhCYWNrZ3JvdW5k44CBSWNvbuetie+8iVxyXG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHNsb3ROb2RlLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2pdO1xyXG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5piv6IOM5pmv5oiW5Zu+5qCH6IqC54K577yM6K6+572u5Li65LiO54i26IqC54K555u45ZCM5aSn5bCPXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQubmFtZSA9PT0gXCJCYWNrZ3JvdW5kXCIgfHwgY2hpbGQubmFtZSA9PT0gXCJJY29uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5zZXRDb250ZW50U2l6ZShzbG90U2l6ZSwgc2xvdFNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g56Gu5L+d5qC85a2Q5Y+v6KeB77yI5re75Yqg6IOM5pmv77yJXHJcbiAgICAgICAgICAgIHRoaXMuX2Vuc3VyZVNsb3RWaXNpYmxlKHNsb3ROb2RlLCBpbmRleCk7XHJcblxyXG4gICAgICAgICAgICAvLyDmt7vliqDovrnmoYbnur/moYbvvIjnlKjkuo7ljLrliIbmr4/kuKrmoLzlrZDvvIktIOW/hemhu+WcqOacgOWQjua3u+WKoO+8jOehruS/neaYvuekuuWcqOacgOS4iuWxglxyXG4gICAgICAgICAgICB0aGlzLl9hZGRTbG90Qm9yZGVyKHNsb3ROb2RlLCBzbG90U2l6ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyDpqozor4HkvY3nva7mmK/lkKblnKjlrrnlmajojIPlm7TlhoXvvIjkvb/nlKjlrp7pmYXmmL7npLrlpKflsI/vvIlcclxuICAgICAgICAgICAgY29uc3Qgc2xvdFBvcyA9IHNsb3ROb2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsb3RIYWxmU2l6ZSA9IGRpc3BsYXlTaXplIC8gMjtcclxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVySGFsZldpZHRoID0gdG90YWxXaWR0aCAvIDI7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckhhbGZIZWlnaHQgPSB0b3RhbEhlaWdodCAvIDI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpc0luUmFuZ2UgPSAoc2xvdFBvcy54IC0gc2xvdEhhbGZTaXplID49IC1jb250YWluZXJIYWxmV2lkdGgpICYmXHJcbiAgICAgICAgICAgICAgICAoc2xvdFBvcy54ICsgc2xvdEhhbGZTaXplIDw9IGNvbnRhaW5lckhhbGZXaWR0aCkgJiZcclxuICAgICAgICAgICAgICAgIChzbG90UG9zLnkgLSBzbG90SGFsZlNpemUgPj0gLWNvbnRhaW5lckhhbGZIZWlnaHQpICYmXHJcbiAgICAgICAgICAgICAgICAoc2xvdFBvcy55ICsgc2xvdEhhbGZTaXplIDw9IGNvbnRhaW5lckhhbGZIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluZGV4IDwgNSkgeyAvLyDovpPlh7rliY015Liq5qC85a2Q55qE6K+m57uG5L+h5oGvXHJcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOagvOWtkCR7aW5kZXh9OiDkvY3nva4oJHt4LnRvRml4ZWQoMSl9LCAke3kudG9GaXhlZCgxKX0pLCDlpKflsI8ke3Nsb3RTaXplfXgke3Nsb3RTaXplfSwg5a655Zmo5YaFOiAke2lzSW5SYW5nZSA/ICfinJMnIDogJ+Kclyd9YCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaXNJblJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICBjYy53YXJuKGBbQ2hhcmFjdGVyVmlld1VJXSDorablkYrvvJrmoLzlrZAke2luZGV4feS9jee9rui2heWHuuWuueWZqOiMg+WbtO+8geS9jee9rjogKCR7eC50b0ZpeGVkKDEpfSwgJHt5LnRvRml4ZWQoMSl9KSwg5a655Zmo5aSn5bCPOiAke2NvbnRhaW5lclNpemUud2lkdGh9eCR7Y29udGFpbmVyU2l6ZS5oZWlnaHR9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSDmiYvliqjluIPlsYDlrozmiJDvvIzlhbEke3Nsb3RzLmxlbmd0aH3kuKrmoLzlrZBgKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnoa7kv53pgZPlhbfmoLzlrZDlj6/op4HvvIjlpoLmnpzmsqHmnInog4zmma/vvIzmt7vliqDkuIDkuKrnroDljZXnmoTog4zmma/vvIlcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IHNsb3ROb2RlIC0g6YGT5YW35qC85a2Q6IqC54K5XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSDmoLzlrZDntKLlvJVcclxuICAgICAqL1xyXG4gICAgX2Vuc3VyZVNsb3RWaXNpYmxlKHNsb3ROb2RlLCBpbmRleCkge1xyXG4gICAgICAgIC8vIOajgOafpeiKgueCueaYr+WQpuacieWPr+ingeeahFNwcml0Zee7hOS7tlxyXG4gICAgICAgIGxldCBoYXNWaXNpYmxlU3ByaXRlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHNwcml0ZU5vZGUgPSBudWxsO1xyXG5cclxuICAgICAgICAvLyDmo4Dmn6XkuLvoioLngrlcclxuICAgICAgICBjb25zdCBtYWluU3ByaXRlID0gc2xvdE5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgaWYgKG1haW5TcHJpdGUgJiYgbWFpblNwcml0ZS5zcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICBoYXNWaXNpYmxlU3ByaXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgc3ByaXRlTm9kZSA9IHNsb3ROb2RlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5qOA5p+l5a2Q6IqC54K577yIQmFja2dyb3VuZOOAgUljb27nrYnvvIlcclxuICAgICAgICBpZiAoIWhhc1Zpc2libGVTcHJpdGUpIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBzbG90Tm9kZS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkU3ByaXRlID0gY2hpbGQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRTcHJpdGUgJiYgY2hpbGRTcHJpdGUuc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBoYXNWaXNpYmxlU3ByaXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGVOb2RlID0gY2hpbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWmguaenOayoeacieWPr+ingeeahFNwcml0Ze+8jOWIm+W7uuS4gOS4queugOWNleeahOiDjOaZr++8iOS4jeWMheWQq+i+ueahhu+8jOi+ueahhueUsV9hZGRTbG90Qm9yZGVy5Y2V54us5aSE55CG77yJXHJcbiAgICAgICAgaWYgKCFoYXNWaXNpYmxlU3ByaXRlKSB7XHJcbiAgICAgICAgICAgIC8vIOajgOafpeaYr+WQpuW3suaciUJhY2tncm91bmToioLngrlcclxuICAgICAgICAgICAgbGV0IGJnTm9kZSA9IHNsb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghYmdOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDliJvlu7rog4zmma/oioLngrlcclxuICAgICAgICAgICAgICAgIGJnTm9kZSA9IG5ldyBjYy5Ob2RlKFwiQmFja2dyb3VuZFwiKTtcclxuICAgICAgICAgICAgICAgIGJnTm9kZS5zZXRDb250ZW50U2l6ZShzbG90Tm9kZS5nZXRDb250ZW50U2l6ZSgpLndpZHRoLCBzbG90Tm9kZS5nZXRDb250ZW50U2l6ZSgpLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBiZ05vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOS9v+eUqEdyYXBoaWNz57uE5Lu257uY5Yi26IOM5pmv77yI5LiN57uY5Yi26L655qGG77yJXHJcbiAgICAgICAgICAgICAgICBjb25zdCBncmFwaGljcyA9IGJnTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOe7mOWItuiDjOaZr++8iOWNiumAj+aYjueBsOiJsu+8iVxyXG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gbmV3IGNjLkNvbG9yKDYwLCA2MCwgNjAsIDIwMCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90U2l6ZSA9IHNsb3ROb2RlLmdldENvbnRlbnRTaXplKCkud2lkdGg7XHJcbiAgICAgICAgICAgICAgICBncmFwaGljcy5yZWN0KC1zbG90U2l6ZSAvIDIsIC1zbG90U2l6ZSAvIDIsIHNsb3RTaXplLCBzbG90U2l6ZSk7XHJcbiAgICAgICAgICAgICAgICBncmFwaGljcy5maWxsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2xvdE5vZGUuYWRkQ2hpbGQoYmdOb2RlKTtcclxuICAgICAgICAgICAgICAgIGJnTm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOS4uumBk+WFt+agvOWtkOa3u+WKoOS6hkdyYXBoaWNz6IOM5pmvYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g6YGT5YW35qC85a2Q5bey5pyJ5Y+v6KeB6IOM5pmvOiAke3Nwcml0ZU5vZGUubmFtZX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Li66YGT5YW35qC85a2Q5re75Yqg6L655qGG57q/5qGG77yI55So5LqO5Yy65YiG5q+P5Liq5qC85a2Q77yJXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBzbG90Tm9kZSAtIOmBk+WFt+agvOWtkOiKgueCuVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNsb3RTaXplIC0g5qC85a2Q5aSn5bCPXHJcbiAgICAgKi9cclxuICAgIF9hZGRTbG90Qm9yZGVyKHNsb3ROb2RlLCBzbG90U2l6ZSkge1xyXG4gICAgICAgIC8vIOajgOafpeaYr+WQpuW3suaciUJvcmRlcuiKgueCue+8jOWmguaenOacieWImeWFiOenu+mZpFxyXG4gICAgICAgIGxldCBib3JkZXJOb2RlID0gc2xvdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCb3JkZXJcIik7XHJcbiAgICAgICAgaWYgKGJvcmRlck5vZGUpIHtcclxuICAgICAgICAgICAgYm9yZGVyTm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDliJvlu7rovrnmoYboioLngrlcclxuICAgICAgICBib3JkZXJOb2RlID0gbmV3IGNjLk5vZGUoXCJCb3JkZXJcIik7XHJcbiAgICAgICAgYm9yZGVyTm9kZS5zZXRDb250ZW50U2l6ZShzbG90U2l6ZSwgc2xvdFNpemUpO1xyXG4gICAgICAgIGJvcmRlck5vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xyXG5cclxuICAgICAgICAvLyDkvb/nlKhHcmFwaGljc+e7hOS7tue7mOWItui+ueahhue6v+ahhlxyXG4gICAgICAgIGNvbnN0IGdyYXBoaWNzID0gYm9yZGVyTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG5cclxuICAgICAgICAvLyDorr7nva7ovrnmoYbmoLflvI/vvIjnmb3oibLvvIw15YOP57Sg5a6977yM5pu05piO5pi+77yJXHJcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICBncmFwaGljcy5saW5lV2lkdGggPSA1O1xyXG5cclxuICAgICAgICAvLyDnu5jliLbnn6nlvaLovrnmoYbvvIjku47kuK3lv4PngrnlvIDlp4vnu5jliLbvvIlcclxuICAgICAgICAvLyDms6jmhI/vvJrnlLHkuo7oioLngrnmnInnvKnmlL4wLjjvvIzlrp7pmYXmmL7npLrlpKflsI/kvJrlsI/kuIDkupvvvIzkvYbovrnmoYbkvJrmraPnoa7mmL7npLpcclxuICAgICAgICBjb25zdCBoYWxmU2l6ZSA9IHNsb3RTaXplIC8gMjtcclxuICAgICAgICBncmFwaGljcy5yZWN0KC1oYWxmU2l6ZSwgLWhhbGZTaXplLCBzbG90U2l6ZSwgc2xvdFNpemUpO1xyXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xyXG5cclxuICAgICAgICAvLyDnoa7kv53ovrnmoYboioLngrnlnKjmnIDkuIrlsYLvvIjmnIDlkI7mt7vliqDvvIzmmL7npLrlnKjmnIDliY3pnaLvvIlcclxuICAgICAgICBzbG90Tm9kZS5hZGRDaGlsZChib3JkZXJOb2RlKTtcclxuICAgICAgICBib3JkZXJOb2RlLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgIGJvcmRlck5vZGUuekluZGV4ID0gOTk5OyAvLyDkvb/nlKh6SW5kZXjmm7/ku6Plt7Llup/lvIPnmoRzZXRMb2NhbFpPcmRlcu+8jOiuvue9rui+g+mrmOeahOWxgue6p++8jOehruS/neaYvuekuuWcqOacgOWJjemdolxyXG5cclxuICAgICAgICAvLyDnoa7kv53ovrnmoYboioLngrnlj6/op4FcclxuICAgICAgICBib3JkZXJOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgYm9yZGVyTm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMlumBk+WFt+agvOWtkFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gc2xvdE5vZGUgLSDpgZPlhbfmoLzlrZDoioLngrlcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIOagvOWtkOe0ouW8lVxyXG4gICAgICovXHJcbiAgICBfaW5pdEl0ZW1TbG90KHNsb3ROb2RlLCBpbmRleCkge1xyXG4gICAgICAgIC8vIOafpeaJvuWbvuagh+iKgueCueWSjOaVsOmHj+agh+etvlxyXG4gICAgICAgIGNvbnN0IGljb25Ob2RlID0gc2xvdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJJY29uXCIpIHx8IHNsb3ROb2RlO1xyXG4gICAgICAgIGNvbnN0IGNvdW50TGFiZWwgPSBzbG90Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNvdW50TGFiZWxcIik7XHJcblxyXG4gICAgICAgIC8vIOWIneWni+eKtuaAge+8muepuuagvOWtkFxyXG4gICAgICAgIGlmIChpY29uTm9kZSkge1xyXG4gICAgICAgICAgICBjb25zdCBzcHJpdGUgPSBpY29uTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgaWYgKHNwcml0ZSkge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gbnVsbDsgLy8g5riF56m65Zu+5qCHXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWNvbk5vZGUub3BhY2l0eSA9IDEwMDsgLy8g5Y2K6YCP5piO5pi+56S656m65qC85a2QXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY291bnRMYWJlbCkge1xyXG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGNvdW50TGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIlwiOyAvLyDmuIXnqbrmlbDph49cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5L+d5a2Y5qC85a2Q57Si5byVXHJcbiAgICAgICAgc2xvdE5vZGUuX3Nsb3RJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHNsb3ROb2RlLl9pc0VtcHR5ID0gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDpgZPlhbfmoI/mmL7npLrvvIjmoLnmja7lvZPliY3pgInkuK3nmoTop5LoibLvvIlcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIF91cGRhdGVJbnZlbnRvcnkoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmludmVudG9yeUNvbnRhaW5lciB8fCAhdGhpcy5jdXJyZW50VW5pdERhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5LuO6KeS6Imy5pWw5o2u5Lit6I635Y+W6YGT5YW35YiX6KGo77yI5pSv5oyB5byC5q2l77yJXHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCB0aGlzLl9nZXRDaGFyYWN0ZXJJdGVtcyh0aGlzLmN1cnJlbnRVbml0RGF0YS5uYW1lKTtcclxuXHJcbiAgICAgICAgLy8g5pu05paw5q+P5Liq5qC85a2QXHJcbiAgICAgICAgY29uc3Qgc2xvdHMgPSB0aGlzLmludmVudG9yeUNvbnRhaW5lci5jaGlsZHJlbjtcclxuICAgICAgICBzbG90cy5mb3JFYWNoKChzbG90Tm9kZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGluZGV4IDwgaXRlbXMubGVuZ3RoICYmIGl0ZW1zW2luZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgLy8g5pyJ6YGT5YW377yM5pi+56S66YGT5YW35L+h5oGvXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRJdGVtU2xvdChzbG90Tm9kZSwgaXRlbXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOepuuagvOWtkFxyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5pdEl0ZW1TbG90KHNsb3ROb2RlLCBpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7pgZPlhbfmoLzlrZDlhoXlrrlcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IHNsb3ROb2RlIC0g6YGT5YW35qC85a2Q6IqC54K5XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSAtIOmBk+WFt+aVsOaNriB7IGlkLCBuYW1lLCBpY29uLCBjb3VudCB9XHJcbiAgICAgKi9cclxuICAgIF9zZXRJdGVtU2xvdChzbG90Tm9kZSwgaXRlbSkge1xyXG4gICAgICAgIGlmICghaXRlbSB8fCAhaXRlbS5jb3VudCB8fCBpdGVtLmNvdW50IDw9IDApIHtcclxuICAgICAgICAgICAgLy8g6YGT5YW35LiN5a2Y5Zyo5oiW5pWw6YeP5Li6MO+8jOa4heepuuagvOWtkFxyXG4gICAgICAgICAgICB0aGlzLl9pbml0SXRlbVNsb3Qoc2xvdE5vZGUsIHNsb3ROb2RlLl9zbG90SW5kZXgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmn6Xmib7lm77moIfoioLngrnlkozmlbDph4/moIfnrb5cclxuICAgICAgICBjb25zdCBpY29uTm9kZSA9IHNsb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiSWNvblwiKSB8fCBzbG90Tm9kZTtcclxuICAgICAgICBjb25zdCBjb3VudExhYmVsID0gc2xvdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDb3VudExhYmVsXCIpO1xyXG5cclxuICAgICAgICAvLyDorr7nva7lm77moIdcclxuICAgICAgICBpZiAoaWNvbk5vZGUgJiYgaXRlbS5pY29uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZSA9IGljb25Ob2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICBpZiAoc3ByaXRlKSB7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBpdGVtLmljb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWNvbk5vZGUub3BhY2l0eSA9IDI1NTsgLy8g5a6M5YWo5LiN6YCP5piOXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDorr7nva7mlbDph49cclxuICAgICAgICBpZiAoY291bnRMYWJlbCkge1xyXG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGNvdW50TGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jb3VudCAmJiBpdGVtLmNvdW50ID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IGl0ZW0uY291bnQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5L+d5a2Y6YGT5YW35pWw5o2uXHJcbiAgICAgICAgc2xvdE5vZGUuX2l0ZW1EYXRhID0gaXRlbTtcclxuICAgICAgICBzbG90Tm9kZS5faXNFbXB0eSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyDnu5Hlrprngrnlh7vkuovku7bvvIjngrnlh7vpgZPlhbfkvb/nlKjvvIlcclxuICAgICAgICBzbG90Tm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EKTsgLy8g5YWI56e76Zmk5pen55qE5LqL5Lu2XHJcbiAgICAgICAgc2xvdE5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIOmYu+atouS6i+S7tuWGkuazoVxyXG4gICAgICAgICAgICB0aGlzLl9vbkl0ZW1TbG90Q2xpY2soc2xvdE5vZGUsIGl0ZW0pO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyDnoa7kv53lj6/ku6XmjqXmlLbop6bmkbjkuovku7ZcclxuICAgICAgICBzbG90Tm9kZS5zZXRDb250ZW50U2l6ZSh0aGlzLml0ZW1TbG90U2l6ZSwgdGhpcy5pdGVtU2xvdFNpemUpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmBk+WFt+agvOWtkOeCueWHu+S6i+S7tu+8iOS9v+eUqOmBk+WFt++8iVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gc2xvdE5vZGUgLSDpgZPlhbfmoLzlrZDoioLngrlcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIC0g6YGT5YW35pWw5o2uXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIF9vbkl0ZW1TbG90Q2xpY2soc2xvdE5vZGUsIGl0ZW0pIHtcclxuICAgICAgICBpZiAoIWl0ZW0gfHwgIWl0ZW0uY29uZmlnKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCJbQ2hhcmFjdGVyVmlld1VJXSDml6DmlYjnmoTpgZPlhbfmlbDmja5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOajgOafpeaYr+WQpuacieW9k+WJjeaYvuekuueahOinkuiJslxyXG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50RGlzcGxheVByZWZhYikge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwiW0NoYXJhY3RlclZpZXdVSV0g6K+35YWI6YCJ5oup5LiA5Liq6KeS6ImyXCIpO1xyXG4gICAgICAgICAgICAvLyDlj6/ku6XmmL7npLrmj5DnpLrnu5nnlKjmiLdcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgSXRlbVN5c3RlbSA9IHJlcXVpcmUoXCJJdGVtU3lzdGVtXCIpO1xyXG5cclxuICAgICAgICAvLyDkvb/nlKjpgZPlhbdcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBJdGVtU3lzdGVtLnVzZUl0ZW0odGhpcy5jdXJyZW50RGlzcGxheVByZWZhYiwgaXRlbS5pZCk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOKckyDkvb/nlKjpgZPlhbfmiJDlip86ICR7aXRlbS5uYW1lfSAtICR7cmVzdWx0Lm1lc3NhZ2V9YCk7XHJcblxyXG4gICAgICAgICAgICAvLyDliLfmlrDpgZPlhbfmoI/mmL7npLpcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fdXBkYXRlSW52ZW50b3J5KCk7XHJcblxyXG4gICAgICAgICAgICAvLyDmm7TmlrDop5LoibLlsZ7mgKfmmL7npLrvvIjlpoLmnpzlsZ7mgKfpnaLmnb/lt7LmiZPlvIDvvIlcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHNQYW5lbCAmJiB0aGlzLnN0YXRzUGFuZWwuYWN0aXZlICYmIHRoaXMuY3VycmVudFVuaXREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93U3RhdHNQYW5lbCh0aGlzLmN1cnJlbnRVbml0RGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE86IOWPr+S7peaYvuekuuS9v+eUqOaIkOWKn+eahOaPkOekulVJXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2Mud2FybihgW0NoYXJhY3RlclZpZXdVSV0g4pyXIOS9v+eUqOmBk+WFt+Wksei0pTogJHtpdGVtLm5hbWV9IC0gJHtyZXN1bHQubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgLy8gVE9ETzog5Y+v5Lul5pi+56S66ZSZ6K+v5o+Q56S6VUlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6YGT5YW35Zu+5qCH77yI5LuOSXRlbUljb25TZXR0ZXLnu4Tku7bojrflj5bvvIlcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9zZXR1cEl0ZW1JY29ucygpIHtcclxuICAgICAgICAvLyDmn6Xmib7lnLrmma/kuK3nmoRJdGVtSWNvblNldHRlcue7hOS7tlxyXG4gICAgICAgIGNvbnN0IHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuICAgICAgICBpZiAoIXNjZW5lKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHNjZW5lLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xyXG4gICAgICAgIGlmICghY2FudmFzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOafpeaJvkl0ZW1JY29uU2V0dGVy57uE5Lu2XHJcbiAgICAgICAgY29uc3QgaWNvblNldHRlciA9IGNhbnZhcy5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFwiSXRlbUljb25TZXR0ZXJcIik7XHJcbiAgICAgICAgaWYgKGljb25TZXR0ZXIpIHtcclxuICAgICAgICAgICAgY2MubG9nKFwiW0NoYXJhY3RlclZpZXdVSV0g5om+5YiwSXRlbUljb25TZXR0ZXLnu4Tku7bvvIzpgZPlhbflm77moIflt7Lorr7nva5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MubG9nKFwiW0NoYXJhY3RlclZpZXdVSV0g5pyq5om+5YiwSXRlbUljb25TZXR0ZXLnu4Tku7bvvIzpgZPlhbflm77moIfpnIDopoHlnKjku6PnoIHkuK3orr7nva5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMlum7mOiupOmBk+WFt++8iOa3u+WKoDXkuKrljYfnuqfoja/msLTvvIzku4XpppbmrKHov5vlhaXml7bvvIlcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIF9pbml0RGVmYXVsdEl0ZW1zKCkge1xyXG4gICAgICAgIGNvbnN0IEl0ZW1EYXRhTWFuYWdlciA9IHJlcXVpcmUoXCJJdGVtRGF0YU1hbmFnZXJcIik7XHJcblxyXG4gICAgICAgIC8vIOajgOafpeaYr+WQpuW3sue7j+WIneWni+WMlui/h+mBk+WFt++8iOS9v+eUqGxvY2FsU3RvcmFnZeagh+W/l++8iVxyXG4gICAgICAgIGNvbnN0IElOSVRfRkxBR19LRVkgPSBcImNoYXJhY3Rlcl92aWV3X2l0ZW1zX2luaXRpYWxpemVkXCI7XHJcbiAgICAgICAgY29uc3QgaGFzSW5pdGlhbGl6ZWQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oSU5JVF9GTEFHX0tFWSk7XHJcblxyXG4gICAgICAgIGlmIChoYXNJbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICAvLyDlt7Lnu4/liJ3lp4vljJbov4fvvIzkuI3lho3oh6rliqjmt7vliqDpgZPlhbdcclxuICAgICAgICAgICAgY2MubG9nKFwiW0NoYXJhY3RlclZpZXdVSV0g6YGT5YW35bey5Yid5aeL5YyW6L+H77yM6Lez6L+H6Ieq5Yqo5re75YqgXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmo4Dmn6XmmK/lkKblt7LmnInljYfnuqfoja/msLRcclxuICAgICAgICBjb25zdCBjdXJyZW50Q291bnQgPSBhd2FpdCBJdGVtRGF0YU1hbmFnZXIuZ2V0SXRlbUNvdW50KFwidXBncmFkZV9wb3Rpb25cIik7XHJcblxyXG4gICAgICAgIC8vIOWmguaenOi/mOayoeacieWNh+e6p+iNr+awtO+8jOa3u+WKoDXkuKrvvIjku4XpppbmrKHvvIlcclxuICAgICAgICBpZiAoY3VycmVudENvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCBJdGVtRGF0YU1hbmFnZXIuYWRkSXRlbShcInVwZ3JhZGVfcG90aW9uXCIsIDEwKTtcclxuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIltDaGFyYWN0ZXJWaWV3VUldIOKckyDpppbmrKHov5vlhaXvvIzlt7Lmt7vliqAxMOS4quWNh+e6p+iNr+awtOWIsOWFqOWxgOmBk+WFt+agj1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDmoIforrDlt7LliJ3lp4vljJbvvIznoa7kv53lj6rliJ3lp4vljJbkuIDmrKFcclxuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShJTklUX0ZMQUdfS0VZLCBcInRydWVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5b2T5YmN5bey6YCJ5Lit6KeS6Imy77yM5Yi35paw6YGT5YW35qCP5pi+56S6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VW5pdERhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl91cGRhdGVJbnZlbnRvcnkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiW0NoYXJhY3RlclZpZXdVSV0g4pyXIOa3u+WKoOWNh+e6p+iNr+awtOWksei0pVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOWmguaenOW3suacieWNh+e6p+iNr+awtO+8jOS5n+agh+iusOS4uuW3suWIneWni+WMlu+8iOWPr+iDveaYr+S7juWFtuS7luWcsOaWuea3u+WKoOeahO+8iVxyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oSU5JVF9GTEFHX0tFWSwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOWFqOWxgOmBk+WFt+agj+W3suaciSAke2N1cnJlbnRDb3VudH0g5Liq5Y2H57qn6I2v5rC077yM5qCH6K6w5Li65bey5Yid5aeL5YyWYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumBk+WFt+WIl+ihqO+8iOWFqOWxgOWFseS6q++8jOaJgOacieinkuiJsuWFseeUqO+8iVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJOYW1lIC0g6KeS6Imy5ZCN56ew77yI5bey5bqf5byD77yM5L+d55WZ55So5LqO5YW85a6577yJXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheT58QXJyYXl9IOmBk+WFt+WIl+ihqCBbeyBpZCwgbmFtZSwgaWNvbiwgY291bnQgfSwgLi4uXe+8iOacjeWKoeWZqOaooeW8j+S4i+i/lOWbnlByb21pc2XvvIlcclxuICAgICAqL1xyXG4gICAgYXN5bmMgX2dldENoYXJhY3Rlckl0ZW1zKGNoYXJhY3Rlck5hbWUpIHtcclxuICAgICAgICBjb25zdCBJdGVtRGF0YU1hbmFnZXIgPSByZXF1aXJlKFwiSXRlbURhdGFNYW5hZ2VyXCIpO1xyXG5cclxuICAgICAgICAvLyDojrflj5blhajlsYDpgZPlhbfvvIjmiYDmnInop5LoibLlhbHkuqvvvIzlv73nlaVjaGFyYWN0ZXJOYW1l5Y+C5pWw77yJXHJcbiAgICAgICAgY29uc3QgaXRlbXNXaXRoQ29uZmlnID0gYXdhaXQgSXRlbURhdGFNYW5hZ2VyLmdldEFsbEl0ZW1zV2l0aENvbmZpZygpO1xyXG5cclxuICAgICAgICAvLyDovazmjaLkuLrmmL7npLrmoLzlvI/vvIzlubbov4fmu6TmjonmlbDph4/kuLow55qE6YGT5YW377yI5LiA5qyh5oCn5raI6ICX5ZOB5L2/55So5a6M5ZCO5bqU6K+l5raI5aSx77yJXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zV2l0aENvbmZpZ1xyXG4gICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jb3VudCA+IDApIC8vIOWPquaYvuekuuaVsOmHj+Wkp+S6jjDnmoTpgZPlhbdcclxuICAgICAgICAgICAgLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaXRlbUlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0uY29uZmlnLmRpc3BsYXlOYW1lIHx8IGl0ZW0uY29uZmlnLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogaXRlbS5jb25maWcuaWNvbiwgLy8gU3ByaXRlRnJhbWXotYTmupBcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogaXRlbS5jb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBjb25maWc6IGl0ZW0uY29uZmlnIC8vIOS/neWtmOWujOaVtOmFjee9ru+8jOeUqOS6juWQjue7reS9v+eUqOmBk+WFt1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu65aS05YOPXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHVuaXREYXRhIC0g5Y2V5L2N5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGVhbSAtIOmYn+S8jeexu+Wei++8iFwiaGVyb1wiIOaIliBcIm1vbnN0ZXJcIu+8iVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0g57Si5byVXHJcbiAgICAgKi9cclxuICAgIF9jcmVhdGVBdmF0YXIodW5pdERhdGEsIHRlYW0sIGluZGV4KSB7XHJcbiAgICAgICAgLy8g5a6e5L6L5YyW5aS05YOPUHJlZmFiXHJcbiAgICAgICAgY29uc3QgYXZhdGFyTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYXZhdGFyUHJlZmFiKTtcclxuICAgICAgICBhdmF0YXJOb2RlLm5hbWUgPSBgQXZhdGFyXyR7dW5pdERhdGEubmFtZX1gO1xyXG5cclxuICAgICAgICAvLyDkv53lrZjljZXkvY3mlbDmja7liLDoioLngrlcclxuICAgICAgICBhdmF0YXJOb2RlLl91bml0RGF0YSA9IHVuaXREYXRhO1xyXG4gICAgICAgIGF2YXRhck5vZGUuX3RlYW0gPSB0ZWFtO1xyXG5cclxuICAgICAgICAvLyDmt7vliqDliLDlrrnlmahcclxuICAgICAgICB0aGlzLmF2YXRhckxpc3RDb250YWluZXIuYWRkQ2hpbGQoYXZhdGFyTm9kZSk7XHJcblxyXG4gICAgICAgIC8vIOiuvue9ruS9jee9ru+8iOWeguebtOaOkuWIl++8iVxyXG4gICAgICAgIGNvbnN0IHNwYWNpbmcgPSB0aGlzLmF2YXRhclNwYWNpbmcgfHwgMTAwO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0WSA9IDIwMDsgLy8g5LuO5LiK5pa55byA5aeLXHJcbiAgICAgICAgY29uc3QgeSA9IHN0YXJ0WSAtIChpbmRleCAqIHNwYWNpbmcpO1xyXG4gICAgICAgIGF2YXRhck5vZGUuc2V0UG9zaXRpb24oMCwgeSk7Ly9UT0RPOiDov5nph4zpnIDopoHmoLnmja7pmJ/kvI3nsbvlnovorr7nva7kvY3nva5cclxuXHJcbiAgICAgICAgLy8g6K6+572u5aS05YOP5Zu+54mHXHJcbiAgICAgICAgY29uc3QgYXZhdGFyQ29tcCA9IGF2YXRhck5vZGUuZ2V0Q29tcG9uZW50KFwiQXZhdGFySXRlbVwiKTtcclxuICAgICAgICBpZiAoYXZhdGFyQ29tcCkge1xyXG4gICAgICAgICAgICBhdmF0YXJDb21wLmluaXQodW5pdERhdGEsIHRlYW0sIHRoaXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOWmguaenOayoeaciee7hOS7tu+8jOaJi+WKqOiuvue9rlxyXG4gICAgICAgICAgICBjb25zdCBpY29uTm9kZSA9IGF2YXRhck5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJJY29uXCIpO1xyXG4gICAgICAgICAgICBpZiAoaWNvbk5vZGUgJiYgdW5pdERhdGEuaWNvbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlID0gaWNvbk5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ByaXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdW5pdERhdGEuaWNvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g57uR5a6a54K55Ye75LqL5Lu2XHJcbiAgICAgICAgYXZhdGFyTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fb25BdmF0YXJDbGljayh1bml0RGF0YSwgdGVhbSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIOehruS/neWPr+S7peaOpeaUtuinpuaRuOS6i+S7tlxyXG4gICAgICAgIGF2YXRhck5vZGUuc2V0Q29udGVudFNpemUoMTAwLCAxMDApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWktOWDj+eCueWHu+S6i+S7tlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB1bml0RGF0YSAtIOWNleS9jeaVsOaNrlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRlYW0gLSDpmJ/kvI3nsbvlnotcclxuICAgICAqL1xyXG4gICAgX29uQXZhdGFyQ2xpY2sodW5pdERhdGEsIHRlYW0pIHtcclxuICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOeCueWHu+WktOWDjzogJHt1bml0RGF0YS5uYW1lfWApO1xyXG4gICAgICAgIHRoaXMuX2Rpc3BsYXlDaGFyYWN0ZXJQcmVmYWIodW5pdERhdGEpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYvuekuuS6uueJqeWOn+Wei1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB1bml0RGF0YSAtIOWNleS9jeaVsOaNrlxyXG4gICAgICovXHJcbiAgICBfZGlzcGxheUNoYXJhY3RlclByZWZhYih1bml0RGF0YSkge1xyXG4gICAgICAgIGlmICghdGhpcy5jaGFyYWN0ZXJEaXNwbGF5QXJlYSkge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwiW0NoYXJhY3RlclZpZXdVSV0g5pyq6K6+572uY2hhcmFjdGVyRGlzcGxheUFyZWHvvIzml6Dms5XmmL7npLrkurrnianljp/lnotcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOa4hemZpOS5i+WJjeaYvuekuueahOWOn+Wei1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOmakOiXj+WxnuaAp+mdouadv1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRzUGFuZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0c1BhbmVsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5L+d5a2Y5b2T5YmN5Y2V5L2N5pWw5o2uXHJcbiAgICAgICAgdGhpcy5jdXJyZW50VW5pdERhdGEgPSB1bml0RGF0YTtcclxuXHJcbiAgICAgICAgLy8g5pu05paw6YGT5YW35qCP5pi+56S6XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlSW52ZW50b3J5KCk7XHJcblxyXG4gICAgICAgIC8vIOWmguaenOaciVByZWZhYu+8jOWunuS+i+WMluW5tuaYvuekulxyXG4gICAgICAgIGlmICh1bml0RGF0YS5wcmVmYWIpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJlZmFiSW5zdGFuY2UgPSBjYy5pbnN0YW50aWF0ZSh1bml0RGF0YS5wcmVmYWIpO1xyXG4gICAgICAgICAgICBwcmVmYWJJbnN0YW5jZS5uYW1lID0gYERpc3BsYXlfJHt1bml0RGF0YS5uYW1lfWA7XHJcblxyXG4gICAgICAgICAgICAvLyDkv53lrZjljp/lp4vop5LoibLlkI3np7DvvIznlKjkuo7mlbDmja7kv53lrZjlkozliqDovb1cclxuICAgICAgICAgICAgcHJlZmFiSW5zdGFuY2UuX29yaWdpbmFsQ2hhcmFjdGVyTmFtZSA9IHVuaXREYXRhLm5hbWU7XHJcblxyXG4gICAgICAgICAgICAvLyDnoa7kv53oioLngrnlj6/op4FcclxuICAgICAgICAgICAgcHJlZmFiSW5zdGFuY2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJlZmFiSW5zdGFuY2Uub3BhY2l0eSA9IDI1NTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyRGlzcGxheUFyZWEuYWRkQ2hpbGQocHJlZmFiSW5zdGFuY2UpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiID0gcHJlZmFiSW5zdGFuY2U7XHJcblxyXG4gICAgICAgICAgICAvLyDorr7nva7kvY3nva7lkoznvKnmlL7vvIjlsYXkuK3mmL7npLrvvIznvKnlsI/mmL7npLrvvIzkvY3nva7lkJHkuIrosIPmlbTvvIlcclxuICAgICAgICAgICAgcHJlZmFiSW5zdGFuY2Uuc2V0UG9zaXRpb24oMCwgMTAwKTtcclxuICAgICAgICAgICAgcHJlZmFiSW5zdGFuY2Uuc2V0U2NhbGUoMC43KTtcclxuXHJcbiAgICAgICAgICAgIC8vIOWIneWni+WMluinkuiJsuWxnuaAp++8iOagueaNruS/neWtmOeahOetiee6p+aVsOaNru+8jOaUr+aMgeW8guatpe+8iVxyXG4gICAgICAgICAgICB0aGlzLl9pbml0Q2hhcmFjdGVyU3RhdHMocHJlZmFiSW5zdGFuY2UsIHVuaXREYXRhKS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtDaGFyYWN0ZXJWaWV3VUldIOWIneWni+WMluinkuiJsuWxnuaAp+Wksei0pTogJHtlcnIubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyDnu5Hlrprngrnlh7vkuovku7bvvIjngrnlh7vkurrnianljp/lnovmmL7npLrlsZ7mgKfpnaLmnb/vvIlcclxuICAgICAgICAgICAgcHJlZmFiSW5zdGFuY2Uub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyDpmLvmraLkuovku7blhpLms6FcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dTdGF0c1BhbmVsKHVuaXREYXRhKTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICAvLyDnoa7kv53lj6/ku6XmjqXmlLbop6bmkbjkuovku7ZcclxuICAgICAgICAgICAgcHJlZmFiSW5zdGFuY2Uuc2V0Q29udGVudFNpemUoMjAwLCAyMDApO1xyXG5cclxuICAgICAgICAgICAgLy8g5qCH6K6w6L+Z5piv5Lq654mp5Y6f5Z6L6IqC54K577yI55So5LqO5Yik5pat54K55Ye75L2N572u77yJXHJcbiAgICAgICAgICAgIHByZWZhYkluc3RhbmNlLl9pc0NoYXJhY3RlclByZWZhYiA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOKckyDmmL7npLrkurrnianljp/lnos6ICR7dW5pdERhdGEubmFtZX1gKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy53YXJuKGBbQ2hhcmFjdGVyVmlld1VJXSDinJcg5Y2V5L2NICR7dW5pdERhdGEubmFtZX0g5rKh5pyJ6K6+572ucHJlZmFiYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluinkuiJsuWxnuaAp++8iOagueaNruS/neWtmOeahOetiee6p+aVsOaNru+8iVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gcHJlZmFiSW5zdGFuY2UgLSDkurrnianljp/lnovlrp7kvotcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB1bml0RGF0YSAtIOWNleS9jeaVsOaNrlxyXG4gICAgICovXHJcbiAgICBhc3luYyBfaW5pdENoYXJhY3RlclN0YXRzKHByZWZhYkluc3RhbmNlLCB1bml0RGF0YSkge1xyXG4gICAgICAgIGNvbnN0IENoYXJhY3RlckRhdGFNYW5hZ2VyID0gcmVxdWlyZShcIkNoYXJhY3RlckRhdGFNYW5hZ2VyXCIpO1xyXG4gICAgICAgIC8vIFN0YXRzQ29tcG9uZW50IOaYr+e7hOS7tuexu++8jOS4jemcgOimgSByZXF1aXJl77yM55u05o6l5L2/55SoIGdldENvbXBvbmVudCDojrflj5ZcclxuXHJcbiAgICAgICAgLy8g6I635Y+WU3RhdHNDb21wb25lbnTnu4Tku7ZcclxuICAgICAgICBjb25zdCBzdGF0cyA9IHByZWZhYkluc3RhbmNlLmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xyXG4gICAgICAgIGlmICghc3RhdHMpIHtcclxuICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyVmlld1VJXSAke3VuaXREYXRhLm5hbWV9IOayoeaciVN0YXRzQ29tcG9uZW5057uE5Lu277yM6Lez6L+H5bGe5oCn5Yid5aeL5YyWYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOS7juacrOWcsOWtmOWCqOWKoOi9veinkuiJsueahOetiee6p+aVsOaNru+8iOaUr+aMgeW8guatpe+8iVxyXG4gICAgICAgIGNvbnN0IHNhdmVkRGF0YSA9IGF3YWl0IENoYXJhY3RlckRhdGFNYW5hZ2VyLmxvYWRDaGFyYWN0ZXJMZXZlbCh1bml0RGF0YS5uYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKHNhdmVkRGF0YSkge1xyXG4gICAgICAgICAgICAvLyDlpoLmnpzmnInkv53lrZjnmoTmlbDmja7vvIzkvb/nlKjkv53lrZjnmoTln7rnoYDlsZ7mgKdcclxuICAgICAgICAgICAgc3RhdHMuYmFzZUhwID0gc2F2ZWREYXRhLmJhc2VIcCB8fCB1bml0RGF0YS5ocCB8fCAxMDA7XHJcbiAgICAgICAgICAgIHN0YXRzLmJhc2VBdHRhY2sgPSBzYXZlZERhdGEuYmFzZUF0dGFjayB8fCB1bml0RGF0YS5hdHRhY2sgfHwgMTtcclxuICAgICAgICAgICAgc3RhdHMuYmFzZURlZmVuc2UgPSBzYXZlZERhdGEuYmFzZURlZmVuc2UgfHwgdW5pdERhdGEuZGVmZW5zZSB8fCAxO1xyXG4gICAgICAgICAgICBzdGF0cy5iYXNlU3BlZWQgPSBzYXZlZERhdGEuYmFzZVNwZWVkIHx8IHVuaXREYXRhLnNwZWVkIHx8IDE7XHJcbiAgICAgICAgICAgIHN0YXRzLmJhc2VDcml0ID0gc2F2ZWREYXRhLmJhc2VDcml0IHx8IHVuaXREYXRhLmNyaXQgfHwgMDtcclxuICAgICAgICAgICAgc3RhdHMuYmFzZU1pc3MgPSBzYXZlZERhdGEuYmFzZU1pc3MgfHwgdW5pdERhdGEubWlzcyB8fCAwO1xyXG5cclxuICAgICAgICAgICAgLy8g6K6+572u562J57qn5ZKM57uP6aqM5YC8XHJcbiAgICAgICAgICAgIHN0YXRzLmxldmVsID0gc2F2ZWREYXRhLmxldmVsIHx8IDE7XHJcbiAgICAgICAgICAgIHN0YXRzLmV4cCA9IHNhdmVkRGF0YS5leHAgfHwgMDtcclxuXHJcbiAgICAgICAgICAgIC8vIOW6lOeUqOetiee6p+WKoOaIkFxyXG4gICAgICAgICAgICBzdGF0cy5fYXBwbHlMZXZlbEJvbnVzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g5aaC5p6c5rKh5pyJ5L+d5a2Y55qE5pWw5o2u77yM5L2/55SodW5pdERhdGHkuK3nmoTln7rnoYDlsZ7mgKdcclxuICAgICAgICAgICAgc3RhdHMuYmFzZUhwID0gdW5pdERhdGEuaHAgfHwgMTAwO1xyXG4gICAgICAgICAgICBzdGF0cy5iYXNlQXR0YWNrID0gdW5pdERhdGEuYXR0YWNrIHx8IDE7XHJcbiAgICAgICAgICAgIHN0YXRzLmJhc2VEZWZlbnNlID0gdW5pdERhdGEuZGVmZW5zZSB8fCAxO1xyXG4gICAgICAgICAgICBzdGF0cy5iYXNlU3BlZWQgPSB1bml0RGF0YS5zcGVlZCB8fCAxO1xyXG4gICAgICAgICAgICBzdGF0cy5iYXNlQ3JpdCA9IHVuaXREYXRhLmNyaXQgfHwgMDtcclxuICAgICAgICAgICAgc3RhdHMuYmFzZU1pc3MgPSB1bml0RGF0YS5taXNzIHx8IDA7XHJcblxyXG4gICAgICAgICAgICAvLyDorr7nva7pu5jorqTnrYnnuqflkoznu4/pqozlgLxcclxuICAgICAgICAgICAgc3RhdHMubGV2ZWwgPSAxO1xyXG4gICAgICAgICAgICBzdGF0cy5leHAgPSAwO1xyXG5cclxuICAgICAgICAgICAgLy8g5bqU55So562J57qn5Yqg5oiQXHJcbiAgICAgICAgICAgIHN0YXRzLl9hcHBseUxldmVsQm9udXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOiuvue9ruW9k+WJjeeUn+WRveWAvOS4uuacgOWkp+eUn+WRveWAvO+8iOa7oeihgOaYvuekuu+8iVxyXG4gICAgICAgIHN0YXRzLmhwID0gc3RhdHMubWF4SHA7XHJcblxyXG4gICAgICAgIC8vIOabtOaWsOihgOadoeaYvuekulxyXG4gICAgICAgIGlmIChzdGF0cy51cGRhdGVIZWFsdGhCYXIpIHtcclxuICAgICAgICAgICAgc3RhdHMudXBkYXRlSGVhbHRoQmFyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmm7TmlrDnu4/pqozmnaHmmL7npLpcclxuICAgICAgICBpZiAoc3RhdHMudXBkYXRlRXhwQmFyKSB7XHJcbiAgICAgICAgICAgIHN0YXRzLnVwZGF0ZUV4cEJhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5pu05paw5oCS5rCU5p2h5pi+56S677yI5Yid5aeL5Li6MO+8iVxyXG4gICAgICAgIGlmIChzdGF0cy51cGRhdGVSYWdlQmFyKSB7XHJcbiAgICAgICAgICAgIHN0YXRzLnJhZ2UgPSAwO1xyXG4gICAgICAgICAgICBzdGF0cy51cGRhdGVSYWdlQmFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYvuekuuWxnuaAp+mdouadv1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB1bml0RGF0YSAtIOWNleS9jeaVsOaNrlxyXG4gICAgICovXHJcbiAgICBfc2hvd1N0YXRzUGFuZWwodW5pdERhdGEpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdHNQYW5lbCkge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwiW0NoYXJhY3RlclZpZXdVSV0g5pyq6K6+572uc3RhdHNQYW5lbO+8jOaXoOazleaYvuekuuWxnuaAp+mdouadv1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6I635Y+W5b2T5YmN5pi+56S655qE5Lq654mp5Y6f5Z6L55qEU3RhdHNDb21wb25lbnRcclxuICAgICAgICBpZiAoIXRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6I635Y+WU3RhdHNDb21wb25lbnTnu4Tku7ZcclxuICAgICAgICBjb25zdCBzdGF0cyA9IHRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XHJcblxyXG4gICAgICAgIGlmICghc3RhdHMpIHtcclxuICAgICAgICAgICAgY2Mud2FybihgW0NoYXJhY3RlclZpZXdVSV0gJHt1bml0RGF0YS5uYW1lfSDmsqHmnIlTdGF0c0NvbXBvbmVudOe7hOS7tu+8jOaXoOazleaYvuekuuWxnuaAp2ApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmm7TmlrDlsZ7mgKfmoIfnrb5cclxuICAgICAgICBpZiAodGhpcy5ocExhYmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHBMYWJlbC5zdHJpbmcgPSBg55Sf5ZG95YC8OiAke3N0YXRzLmhwfS8ke3N0YXRzLm1heEhwfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmF0dGFja0xhYmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNrTGFiZWwuc3RyaW5nID0gYOaUu+WHu+WKmzogJHtzdGF0cy5hdHRhY2t9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGVmZW5zZUxhYmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmZW5zZUxhYmVsLnN0cmluZyA9IGDpmLLlvqHlips6ICR7c3RhdHMuZGVmZW5zZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zcGVlZExhYmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRMYWJlbC5zdHJpbmcgPSBg6YCf5bqmOiAke3N0YXRzLnNwZWVkfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNyaXRMYWJlbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyaXRMYWJlbC5zdHJpbmcgPSBg5pq05Ye7546HOiAkeyhzdGF0cy5jcml0ICogMTAwKS50b0ZpeGVkKDEpfSVgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5taXNzTGFiZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5taXNzTGFiZWwuc3RyaW5nID0gYOmXqumBv+eOhzogJHsoc3RhdHMubWlzcyAqIDEwMCkudG9GaXhlZCgxKX0lYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxMYWJlbCkge1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsTGFiZWwuc3RyaW5nID0gYOetiee6pzogJHtzdGF0cy5sZXZlbH1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5leHBMYWJlbCkge1xyXG4gICAgICAgICAgICBjb25zdCBMZXZlbENvbmZpZyA9IHJlcXVpcmUoXCJMZXZlbENvbmZpZ1wiKTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudExldmVsRXhwID0gTGV2ZWxDb25maWcuZ2V0RXhwRm9yTGV2ZWwoc3RhdHMubGV2ZWwpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0TGV2ZWxFeHAgPSBMZXZlbENvbmZpZy5nZXRFeHBGb3JMZXZlbChzdGF0cy5sZXZlbCArIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBleHBJbkN1cnJlbnRMZXZlbCA9IHN0YXRzLmV4cCAtIGN1cnJlbnRMZXZlbEV4cDtcclxuICAgICAgICAgICAgY29uc3QgZXhwVG9OZXh0ID0gbmV4dExldmVsRXhwIC0gY3VycmVudExldmVsRXhwO1xyXG4gICAgICAgICAgICBpZiAoZXhwVG9OZXh0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHBMYWJlbC5zdHJpbmcgPSBg57uP6aqM5YC8OiAke2V4cEluQ3VycmVudExldmVsfS8ke2V4cFRvTmV4dH1gO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHBMYWJlbC5zdHJpbmcgPSBg57uP6aqM5YC8OiDlt7Lmu6HnuqdgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmmL7npLrlsZ7mgKfpnaLmnb/vvIjluKbliqjnlLvvvIlcclxuICAgICAgICB0aGlzLnN0YXRzUGFuZWwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnN0YXRzUGFuZWwuc2V0U2NhbGUoMC44KTtcclxuICAgICAgICB0aGlzLnN0YXRzUGFuZWwub3BhY2l0eSA9IDA7XHJcblxyXG4gICAgICAgIC8vIOiuvue9rumdouadv+S9jee9ru+8iOaYvuekuuWcqOS6uueJqeWOn+Wei+mZhOi/ke+8iVxyXG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3RlckRpc3BsYXlBcmVhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXlQb3MgPSB0aGlzLmNoYXJhY3RlckRpc3BsYXlBcmVhLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHNQYW5lbC5zZXRQb3NpdGlvbihkaXNwbGF5UG9zLnggKyAyNTAsIGRpc3BsYXlQb3MueSk7IC8vIOaYvuekuuWcqOWPs+S+p1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5zdGF0c1BhbmVsKVxyXG4gICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAxLjAsIG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogJ2JhY2tPdXQnIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJWaWV3VUldIOaYvuekuuWxnuaAp+mdouadvzogJHt1bml0RGF0YS5uYW1lfWApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeCueWHu0NhbnZhc+S6i+S7tu+8iOWFs+mXreWxnuaAp+mdouadv++8iVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX29uQ2FudmFzQ2xpY2soZXZlbnQpIHtcclxuICAgICAgICAvLyDlpoLmnpzngrnlh7vnmoTmmK/lsZ7mgKfpnaLmnb/mnKzouqvvvIzkuI3lhbPpl61cclxuICAgICAgICBpZiAodGhpcy5zdGF0c1BhbmVsICYmIGNjLmlzVmFsaWQodGhpcy5zdGF0c1BhbmVsKSAmJiB0aGlzLnN0YXRzUGFuZWwuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgLy8g5qOA5p+l54K55Ye755qE55uu5qCH5piv5ZCm5piv5bGe5oCn6Z2i5p2/5oiW5YW25a2Q6IqC54K5XHJcbiAgICAgICAgICAgIGxldCBpc1N0YXRzUGFuZWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0YXJnZXQ7XHJcbiAgICAgICAgICAgIHdoaWxlIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZSA9PT0gdGhpcy5zdGF0c1BhbmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTdGF0c1BhbmVsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNTdGF0c1BhbmVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIOeCueWHu+eahOaYr+WxnuaAp+mdouadv++8jOS4jeWFs+mXrVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDlpoLmnpzngrnlh7vnmoTmmK/kurrnianljp/lnovvvIzkuI3lhbPpl63vvIjnlLHkurrnianljp/lnovnmoTngrnlh7vkuovku7blpITnkIbvvIlcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50RGlzcGxheVByZWZhYiAmJiBjYy5pc1ZhbGlkKHRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSB0YXJnZXQ7XHJcbiAgICAgICAgICAgIHdoaWxlIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZSA9PT0gdGhpcy5jdXJyZW50RGlzcGxheVByZWZhYiB8fCBub2RlLl9pc0NoYXJhY3RlclByZWZhYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8g54K55Ye755qE5piv5Lq654mp5Y6f5Z6L77yM5LiN5YWz6ZetXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOeCueWHu+WFtuS7luWMuuWfn++8jOWFs+mXreWxnuaAp+mdouadv1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRzUGFuZWwgJiYgdGhpcy5zdGF0c1BhbmVsLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnN0YXRzUGFuZWwpXHJcbiAgICAgICAgICAgICAgICAudG8oMC4yLCB7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjggfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRzUGFuZWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlclZpZXdVSV0g5YWz6Zet5bGe5oCn6Z2i5p2/YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8g5riF55CG5LqL5Lu255uR5ZCsXHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuICAgICAgICBpZiAoY2FudmFzKSB7XHJcbiAgICAgICAgICAgIGNhbnZhcy5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl9vbkNhbnZhc0NsaWNrLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=