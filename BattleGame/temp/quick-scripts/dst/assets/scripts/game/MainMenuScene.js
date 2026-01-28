
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/game/MainMenuScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ad722P/HTlKy54jQxsdi2BJ', 'MainMenuScene');
// Scripts/game/MainMenuScene.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * 主菜单场景控制器
 * 负责显示主菜单和导航到其他场景
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // 开始游戏按钮
    startButton: {
      "default": null,
      type: cc.Button,
      tooltip: "开始游戏按钮"
    },
    // 选择场景名称
    selectSceneName: {
      "default": "SelectScene",
      tooltip: "选择场景名称（开始游戏时跳转的场景）"
    },
    // 清除数据按钮（可选，用于测试）
    clearDataButton: {
      "default": null,
      type: cc.Button,
      tooltip: "清除所有等级数据按钮（测试用，可选）"
    },
    // 查看人物按钮
    characterViewButton: {
      "default": null,
      type: cc.Button,
      tooltip: "查看人物属性按钮"
    },
    // 人物属性查看场景名称
    characterViewSceneName: {
      "default": "CharacterViewScene",
      tooltip: "人物属性查看场景名称"
    },
    // 添加道具测试按钮（可选，用于测试）
    addItemTestButton: {
      "default": null,
      type: cc.Button,
      tooltip: "添加升级药水测试按钮（测试用，可选）"
    },
    // 添加金币测试按钮（可选，用于测试）
    addCoinTestButton: {
      "default": null,
      type: cc.Button,
      tooltip: "添加金币测试按钮（测试用，可选）"
    },
    // 商城按钮
    shopButton: {
      "default": null,
      type: cc.Button,
      tooltip: "商城按钮（跳转到商城场景）"
    },
    // 商城场景名称
    shopSceneName: {
      "default": "ShopScene",
      tooltip: "商城场景名称"
    }
  },
  onLoad: function onLoad() {
    cc.log("[MainMenuScene] 主菜单场景已加载");

    // 初始化服务器配置
    this._initServerConfig();

    // 加载所有角色数据（可选，用于初始化或显示）
    this._loadAllCharacters();

    // 绑定开始游戏按钮事件
    if (this.startButton) {
      this.startButton.node.on(cc.Node.EventType.TOUCH_END, this.onStartClick, this);
      cc.log("[MainMenuScene] \u5DF2\u7ED1\u5B9AstartButton\u4E8B\u4EF6");
    } else {
      cc.warn("[MainMenuScene] 未设置startButton，请在主菜单场景中绑定开始游戏按钮");
    }

    // 绑定清除数据按钮事件（如果存在）
    if (this.clearDataButton) {
      this.clearDataButton.node.on(cc.Node.EventType.TOUCH_END, this.onClearDataClick, this);
      cc.log("[MainMenuScene] \u5DF2\u7ED1\u5B9AclearDataButton\u4E8B\u4EF6");
    }

    // 绑定查看人物按钮事件（如果存在）
    if (this.characterViewButton) {
      this.characterViewButton.node.on(cc.Node.EventType.TOUCH_END, this.onCharacterViewClick, this);
      cc.log("[MainMenuScene] \u5DF2\u7ED1\u5B9AcharacterViewButton\u4E8B\u4EF6");
    } else {
      cc.warn("[MainMenuScene] 未设置characterViewButton，如需查看人物属性功能，请在主菜单场景中绑定查看人物按钮");
    }

    // 绑定添加道具测试按钮事件（如果存在）
    if (this.addItemTestButton) {
      this.addItemTestButton.node.on(cc.Node.EventType.TOUCH_END, this.onAddItemTestClick, this);
      cc.log("[MainMenuScene] \u5DF2\u7ED1\u5B9AaddItemTestButton\u4E8B\u4EF6");
    }

    // 绑定添加金币测试按钮事件（如果存在）
    if (this.addCoinTestButton) {
      this.addCoinTestButton.node.on(cc.Node.EventType.TOUCH_END, this.onAddCoinTestClick, this);
      cc.log("[MainMenuScene] \u5DF2\u7ED1\u5B9AaddCoinTestButton\u4E8B\u4EF6");
    }

    // 绑定商城按钮事件（如果存在）
    if (this.shopButton) {
      this.shopButton.node.on(cc.Node.EventType.TOUCH_END, this.onShopClick, this);
      cc.log("[MainMenuScene] \u5DF2\u7ED1\u5B9AshopButton\u4E8B\u4EF6");
    } else {
      cc.warn("[MainMenuScene] 未设置shopButton，如需商城功能，请在主菜单场景中绑定商城按钮");
    }
  },
  /**
   * 开始游戏按钮点击事件
   */
  onStartClick: function onStartClick() {
    var _this = this;
    cc.log("[MainMenuScene] \u5F00\u59CB\u6E38\u620F\uFF0C\u573A\u666F\u540D\u79F0: " + this.selectSceneName);
    if (this.selectSceneName) {
      cc.director.loadScene(this.selectSceneName, function (error) {
        if (error) {
          cc.error("[MainMenuScene] \u52A0\u8F7D\u9009\u62E9\u573A\u666F\u5931\u8D25: " + error);
          cc.error("[MainMenuScene] \u8BF7\u68C0\u67E5\u573A\u666F\u540D\u79F0\u662F\u5426\u6B63\u786E: " + _this.selectSceneName);
          cc.error("[MainMenuScene] \u8BF7\u786E\u4FDD\u573A\u666F\u6587\u4EF6\u5B58\u5728\u4E8E\u9879\u76EE\u4E2D");
        } else {
          cc.log("[MainMenuScene] \u6210\u529F\u52A0\u8F7D\u9009\u62E9\u573A\u666F: " + _this.selectSceneName);
        }
      });
    } else {
      cc.warn("[MainMenuScene] 未设置selectSceneName，无法开始游戏");
    }
  },
  /**
   * 清除所有等级数据按钮点击事件
   */
  onClearDataClick: function onClearDataClick() {
    // 确认对话框（可选）
    if (confirm("确定要清除所有角色的等级数据吗？\n此操作不可恢复！")) {
      var CharacterDataManager = require("CharacterDataManager");
      CharacterDataManager.clearAllCharacterData();
      cc.log("[MainMenuScene] 已清除所有角色的等级数据");
      alert("已清除所有角色的等级数据！\n下次进入游戏时，所有角色将从1级开始。");
    }
  },
  /**
   * 查看人物属性按钮点击事件
   */
  onCharacterViewClick: function onCharacterViewClick() {
    var _this2 = this;
    cc.log("[MainMenuScene] \u67E5\u770B\u4EBA\u7269\u5C5E\u6027\uFF0C\u573A\u666F\u540D\u79F0: " + this.characterViewSceneName);
    if (this.characterViewSceneName) {
      cc.director.loadScene(this.characterViewSceneName, function (error) {
        if (error) {
          cc.error("[MainMenuScene] \u52A0\u8F7D\u4EBA\u7269\u5C5E\u6027\u67E5\u770B\u573A\u666F\u5931\u8D25: " + error);
          cc.error("[MainMenuScene] \u8BF7\u68C0\u67E5\u573A\u666F\u540D\u79F0\u662F\u5426\u6B63\u786E: " + _this2.characterViewSceneName);
          cc.error("[MainMenuScene] \u8BF7\u786E\u4FDD\u573A\u666F\u6587\u4EF6\u5B58\u5728\u4E8E\u9879\u76EE\u4E2D");
        } else {
          cc.log("[MainMenuScene] \u6210\u529F\u52A0\u8F7D\u4EBA\u7269\u5C5E\u6027\u67E5\u770B\u573A\u666F: " + _this2.characterViewSceneName);
        }
      });
    } else {
      cc.warn("[MainMenuScene] 未设置characterViewSceneName，无法跳转到人物属性查看场景");
    }
  },
  /**
   * 加载所有角色数据
   * @private
   */
  _loadAllCharacters: function _loadAllCharacters() {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var CharacterDataManager, allCharacters, characterCount;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            CharacterDataManager = require("CharacterDataManager"); // 获取所有角色数据（支持异步）
            _context.next = 4;
            return CharacterDataManager.getAllCharacterData();
          case 4:
            allCharacters = _context.sent;
            characterCount = Object.keys(allCharacters).length;
            if (characterCount > 0) {
              cc.log("[MainMenuScene] \u2713 \u5DF2\u52A0\u8F7D " + characterCount + " \u4E2A\u89D2\u8272\u7684\u6570\u636E");

              // 遍历所有角色，显示信息（可选）
              Object.keys(allCharacters).forEach(function (characterName) {
                var data = allCharacters[characterName];
                cc.log("[MainMenuScene]   - " + characterName + ": \u7B49\u7EA7" + data.level + ", \u7ECF\u9A8C" + data.exp);
              });

              // 保存到全局变量供其他场景使用（可选）
              window.AllCharacters = allCharacters;
            } else {
              cc.log("[MainMenuScene] 当前没有角色数据");
            }
            _context.next = 12;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            cc.warn("[MainMenuScene] \u52A0\u8F7D\u6240\u6709\u89D2\u8272\u6570\u636E\u5931\u8D25: " + _context.t0.message);
            // 失败不影响游戏运行，继续执行
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 9]]);
    }))();
  },
  /**
   * 初始化服务器配置
   * @private
   */
  _initServerConfig: function _initServerConfig() {
    try {
      var ServerConfig = require("ServerConfig");
      var ItemDataAdapter = require("ItemDataAdapter");
      var CharacterDataAdapter = require("CharacterDataAdapter");

      // 服务器配置
      // 注意：如果服务器未运行，会自动降级到本地模式
      var serverBaseURL = "http://localhost:3000/api"; // 单个角色数据服务器地址（端口3000）
      var serverBaseURLForAll = "http://localhost:3001/api"; // 所有角色数据服务器地址（端口3001）

      // 初始化服务器配置
      ServerConfig.init({
        baseURL: serverBaseURL,
        // 单个角色数据使用端口3000
        baseURLForAll: serverBaseURLForAll,
        // 所有角色数据使用端口3001
        timeout: 5000,
        retryCount: 3,
        auth: {
          enabled: true,
          token: "1" // 用户ID（这里简化处理，实际应该从登录系统获取）
        }
      });

      // 切换到混合模式（推荐）
      // 混合模式：优先从服务器加载，失败则使用本地缓存
      // 保存时：先保存到本地（快速响应），然后同步到服务器
      ItemDataAdapter.setStorageMode("hybrid");
      CharacterDataAdapter.setStorageMode("hybrid");
      cc.log("[MainMenuScene] ✓ 服务器配置已初始化");
      cc.log("[MainMenuScene] \u5355\u4E2A\u89D2\u8272\u6570\u636E\u670D\u52A1\u5668: " + serverBaseURL + " (\u7AEF\u53E33000)");
      cc.log("[MainMenuScene] \u6240\u6709\u89D2\u8272\u6570\u636E\u670D\u52A1\u5668: " + serverBaseURLForAll + " (\u7AEF\u53E33001)");
      cc.log("[MainMenuScene] 存储模式: 混合模式（本地+服务器）");
    } catch (error) {
      cc.warn("[MainMenuScene] \u670D\u52A1\u5668\u914D\u7F6E\u521D\u59CB\u5316\u5931\u8D25: " + error.message);
      cc.warn("[MainMenuScene] 将使用本地存储模式");

      // 如果配置失败，确保使用本地模式
      try {
        var _ItemDataAdapter = require("ItemDataAdapter");
        var _CharacterDataAdapter = require("CharacterDataAdapter");
        _ItemDataAdapter.setStorageMode("local");
        _CharacterDataAdapter.setStorageMode("local");
      } catch (e) {
        cc.error("[MainMenuScene] \u8BBE\u7F6E\u672C\u5730\u6A21\u5F0F\u5931\u8D25: " + e.message);
      }
    }
  },
  /**
   * 添加道具测试按钮点击事件
   */
  onAddItemTestClick: function onAddItemTestClick() {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var ItemDataManager, success, count;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            ItemDataManager = require("ItemDataManager");
            _context2.prev = 1;
            _context2.next = 4;
            return ItemDataManager.addItem("upgrade_potion", 10);
          case 4:
            success = _context2.sent;
            if (!success) {
              _context2.next = 13;
              break;
            }
            _context2.next = 8;
            return ItemDataManager.getItemCount("upgrade_potion");
          case 8:
            count = _context2.sent;
            cc.log("[MainMenuScene] \u2713 \u5DF2\u6DFB\u52A010\u4E2A\u5347\u7EA7\u836F\u6C34\uFF0C\u5F53\u524D\u603B\u6570: " + count);
            alert("\u5DF2\u6DFB\u52A010\u4E2A\u5347\u7EA7\u836F\u6C34\uFF01\n\u5F53\u524D\u603B\u6570: " + count);
            _context2.next = 15;
            break;
          case 13:
            cc.error("[MainMenuScene] ✗ 添加升级药水失败");
            alert("添加升级药水失败，请查看控制台日志");
          case 15:
            _context2.next = 21;
            break;
          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](1);
            cc.error("[MainMenuScene] \u6DFB\u52A0\u9053\u5177\u65F6\u53D1\u751F\u9519\u8BEF: " + _context2.t0.message);
            alert("\u6DFB\u52A0\u9053\u5177\u5931\u8D25: " + _context2.t0.message);
          case 21:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 17]]);
    }))();
  },
  /**
   * 添加金币测试按钮点击事件
   */
  onAddCoinTestClick: function onAddCoinTestClick() {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var CoinManager, amount, success, coins;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            CoinManager = require("CoinManager");
            _context3.prev = 1;
            amount = 1000; // 每次增加1000金币
            _context3.next = 5;
            return CoinManager.addCoins(amount);
          case 5:
            success = _context3.sent;
            if (!success) {
              _context3.next = 14;
              break;
            }
            _context3.next = 9;
            return CoinManager.getCoins();
          case 9:
            coins = _context3.sent;
            cc.log("[MainMenuScene] \u2713 \u5DF2\u589E\u52A0 " + amount + " \u91D1\u5E01\uFF0C\u5F53\u524D\u91D1\u5E01: " + coins);
            alert("\u5DF2\u589E\u52A0 " + amount + " \u91D1\u5E01\uFF01\n\u5F53\u524D\u91D1\u5E01: " + coins);
            _context3.next = 16;
            break;
          case 14:
            cc.error("[MainMenuScene] ✗ 增加金币失败");
            alert("增加金币失败，请查看控制台日志");
          case 16:
            _context3.next = 22;
            break;
          case 18:
            _context3.prev = 18;
            _context3.t0 = _context3["catch"](1);
            cc.error("[MainMenuScene] \u589E\u52A0\u91D1\u5E01\u65F6\u53D1\u751F\u9519\u8BEF: " + _context3.t0.message);
            alert("\u589E\u52A0\u91D1\u5E01\u5931\u8D25: " + _context3.t0.message);
          case 22:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[1, 18]]);
    }))();
  },
  /**
   * 商城按钮点击事件
   */
  onShopClick: function onShopClick() {
    var _this3 = this;
    cc.log("[MainMenuScene] \u6253\u5F00\u5546\u57CE\uFF0C\u573A\u666F\u540D\u79F0: " + this.shopSceneName);
    if (this.shopSceneName) {
      cc.director.loadScene(this.shopSceneName, function (error) {
        if (error) {
          cc.error("[MainMenuScene] \u52A0\u8F7D\u5546\u57CE\u573A\u666F\u5931\u8D25: " + error);
          cc.error("[MainMenuScene] \u8BF7\u68C0\u67E5\u573A\u666F\u540D\u79F0\u662F\u5426\u6B63\u786E: " + _this3.shopSceneName);
          cc.error("[MainMenuScene] \u8BF7\u786E\u4FDD\u573A\u666F\u6587\u4EF6\u5B58\u5728\u4E8E\u9879\u76EE\u4E2D");
        } else {
          cc.log("[MainMenuScene] \u6210\u529F\u52A0\u8F7D\u5546\u57CE\u573A\u666F: " + _this3.shopSceneName);
        }
      });
    } else {
      cc.warn("[MainMenuScene] 未设置shopSceneName，无法跳转到商城场景");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZVxcTWFpbk1lbnVTY2VuZS5qcyJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnRCdXR0b24iLCJCdXR0b24iLCJ0b29sdGlwIiwic2VsZWN0U2NlbmVOYW1lIiwiY2xlYXJEYXRhQnV0dG9uIiwiY2hhcmFjdGVyVmlld0J1dHRvbiIsImNoYXJhY3RlclZpZXdTY2VuZU5hbWUiLCJhZGRJdGVtVGVzdEJ1dHRvbiIsImFkZENvaW5UZXN0QnV0dG9uIiwic2hvcEJ1dHRvbiIsInNob3BTY2VuZU5hbWUiLCJvbkxvYWQiLCJsb2ciLCJfaW5pdFNlcnZlckNvbmZpZyIsIl9sb2FkQWxsQ2hhcmFjdGVycyIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJvblN0YXJ0Q2xpY2siLCJ3YXJuIiwib25DbGVhckRhdGFDbGljayIsIm9uQ2hhcmFjdGVyVmlld0NsaWNrIiwib25BZGRJdGVtVGVzdENsaWNrIiwib25BZGRDb2luVGVzdENsaWNrIiwib25TaG9wQ2xpY2siLCJfdGhpcyIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiY29uZmlybSIsIkNoYXJhY3RlckRhdGFNYW5hZ2VyIiwicmVxdWlyZSIsImNsZWFyQWxsQ2hhcmFjdGVyRGF0YSIsImFsZXJ0IiwiX3RoaXMyIiwiX2NhbGxlZSIsImFsbENoYXJhY3RlcnMiLCJjaGFyYWN0ZXJDb3VudCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJnZXRBbGxDaGFyYWN0ZXJEYXRhIiwiY2hhcmFjdGVyTmFtZSIsImRhdGEiLCJsZXZlbCIsImV4cCIsIndpbmRvdyIsIkFsbENoYXJhY3RlcnMiLCJ0MCIsIm1lc3NhZ2UiLCJTZXJ2ZXJDb25maWciLCJJdGVtRGF0YUFkYXB0ZXIiLCJDaGFyYWN0ZXJEYXRhQWRhcHRlciIsInNlcnZlckJhc2VVUkwiLCJzZXJ2ZXJCYXNlVVJMRm9yQWxsIiwiaW5pdCIsImJhc2VVUkwiLCJiYXNlVVJMRm9yQWxsIiwidGltZW91dCIsInJldHJ5Q291bnQiLCJhdXRoIiwiZW5hYmxlZCIsInRva2VuIiwic2V0U3RvcmFnZU1vZGUiLCJlIiwiX2NhbGxlZTIiLCJJdGVtRGF0YU1hbmFnZXIiLCJzdWNjZXNzIiwiY291bnQiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJhZGRJdGVtIiwiZ2V0SXRlbUNvdW50IiwiX2NhbGxlZTMiLCJDb2luTWFuYWdlciIsImFtb3VudCIsImNvaW5zIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiYWRkQ29pbnMiLCJnZXRDb2lucyIsIl90aGlzMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0EscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLE9BQUEsU0FBQUEsT0FBQSxPQUFBQyxFQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxNQUFBLEdBQUFILEVBQUEsQ0FBQUksY0FBQSxFQUFBQyxjQUFBLEdBQUFKLE1BQUEsQ0FBQUksY0FBQSxjQUFBQyxHQUFBLEVBQUFDLEdBQUEsRUFBQUMsSUFBQSxJQUFBRixHQUFBLENBQUFDLEdBQUEsSUFBQUMsSUFBQSxDQUFBQyxLQUFBLEtBQUFDLE9BQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxjQUFBLEdBQUFGLE9BQUEsQ0FBQUcsUUFBQSxrQkFBQUMsbUJBQUEsR0FBQUosT0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxpQkFBQSxHQUFBTixPQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFaLEdBQUEsRUFBQUMsR0FBQSxFQUFBRSxLQUFBLFdBQUFSLE1BQUEsQ0FBQUksY0FBQSxDQUFBQyxHQUFBLEVBQUFDLEdBQUEsSUFBQUUsS0FBQSxFQUFBQSxLQUFBLEVBQUFVLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFmLEdBQUEsQ0FBQUMsR0FBQSxXQUFBVyxNQUFBLG1CQUFBSSxHQUFBLElBQUFKLE1BQUEsWUFBQUEsT0FBQVosR0FBQSxFQUFBQyxHQUFBLEVBQUFFLEtBQUEsV0FBQUgsR0FBQSxDQUFBQyxHQUFBLElBQUFFLEtBQUEsZ0JBQUFjLEtBQUFDLE9BQUEsRUFBQUMsT0FBQSxFQUFBQyxJQUFBLEVBQUFDLFdBQUEsUUFBQUMs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LElBQUlBLEtBQUssRUFBRTtVQUNQbUYsRUFBRSxDQUFDbkYsS0FBSyx3RUFBOEJBLEtBQUssQ0FBRztVQUM5Q21GLEVBQUUsQ0FBQ25GLEtBQUssMEZBQWlDd0ssTUFBSSxDQUFDdkUsYUFBYSxDQUFHO1VBQzlEZCxFQUFFLENBQUNuRixLQUFLLGtHQUFpQztRQUM3QyxDQUFDLE1BQU07VUFDSG1GLEVBQUUsQ0FBQ2dCLEdBQUcsd0VBQThCcUUsTUFBSSxDQUFDdkUsYUFBYSxDQUFHO1FBQzdEO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxNQUFNO01BQ0hkLEVBQUUsQ0FBQ3lCLElBQUksQ0FBQyw0Q0FBNEMsQ0FBQztJQUN6RDtFQUNKO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5Li76I+c5Y2V5Zy65pmv5o6n5Yi25ZmoXHJcbiAqIOi0n+i0o+aYvuekuuS4u+iPnOWNleWSjOWvvOiIquWIsOWFtuS7luWcuuaZr1xyXG4gKi9cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyDlvIDlp4vmuLjmiI/mjInpkq5cclxuICAgICAgICBzdGFydEJ1dHRvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b24sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5byA5aeL5ri45oiP5oyJ6ZKuXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDpgInmi6nlnLrmma/lkI3np7BcclxuICAgICAgICBzZWxlY3RTY2VuZU5hbWU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogXCJTZWxlY3RTY2VuZVwiLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIumAieaLqeWcuuaZr+WQjeensO+8iOW8gOWni+a4uOaIj+aXtui3s+i9rOeahOWcuuaZr++8iVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5riF6Zmk5pWw5o2u5oyJ6ZKu77yI5Y+v6YCJ77yM55So5LqO5rWL6K+V77yJXHJcbiAgICAgICAgY2xlYXJEYXRhQnV0dG9uOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvbixcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLmuIXpmaTmiYDmnInnrYnnuqfmlbDmja7mjInpkq7vvIjmtYvor5XnlKjvvIzlj6/pgInvvIlcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOafpeeci+S6uueJqeaMiemSrlxyXG4gICAgICAgIGNoYXJhY3RlclZpZXdCdXR0b246IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIuafpeeci+S6uueJqeWxnuaAp+aMiemSrlwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5Lq654mp5bGe5oCn5p+l55yL5Zy65pmv5ZCN56ewXHJcbiAgICAgICAgY2hhcmFjdGVyVmlld1NjZW5lTmFtZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBcIkNoYXJhY3RlclZpZXdTY2VuZVwiLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIuS6uueJqeWxnuaAp+afpeeci+WcuuaZr+WQjeensFwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5re75Yqg6YGT5YW35rWL6K+V5oyJ6ZKu77yI5Y+v6YCJ77yM55So5LqO5rWL6K+V77yJXHJcbiAgICAgICAgYWRkSXRlbVRlc3RCdXR0b246IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIua3u+WKoOWNh+e6p+iNr+awtOa1i+ivleaMiemSru+8iOa1i+ivleeUqO+8jOWPr+mAie+8iVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5re75Yqg6YeR5biB5rWL6K+V5oyJ6ZKu77yI5Y+v6YCJ77yM55So5LqO5rWL6K+V77yJXHJcbiAgICAgICAgYWRkQ29pblRlc3RCdXR0b246IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIua3u+WKoOmHkeW4gea1i+ivleaMiemSru+8iOa1i+ivleeUqO+8jOWPr+mAie+8iVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5ZWG5Z+O5oyJ6ZKuXHJcbiAgICAgICAgc2hvcEJ1dHRvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b24sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5ZWG5Z+O5oyJ6ZKu77yI6Lez6L2s5Yiw5ZWG5Z+O5Zy65pmv77yJXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDllYbln47lnLrmma/lkI3np7BcclxuICAgICAgICBzaG9wU2NlbmVOYW1lOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiU2hvcFNjZW5lXCIsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5ZWG5Z+O5Zy65pmv5ZCN56ewXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5sb2coXCJbTWFpbk1lbnVTY2VuZV0g5Li76I+c5Y2V5Zy65pmv5bey5Yqg6L29XCIpO1xyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJbmnI3liqHlmajphY3nva5cclxuICAgICAgICB0aGlzLl9pbml0U2VydmVyQ29uZmlnKCk7XHJcblxyXG4gICAgICAgIC8vIOWKoOi9veaJgOacieinkuiJsuaVsOaNru+8iOWPr+mAie+8jOeUqOS6juWIneWni+WMluaIluaYvuekuu+8iVxyXG4gICAgICAgIHRoaXMuX2xvYWRBbGxDaGFyYWN0ZXJzKCk7XHJcblxyXG4gICAgICAgIC8vIOe7keWumuW8gOWni+a4uOaIj+aMiemSruS6i+S7tlxyXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0QnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCdXR0b24ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25TdGFydENsaWNrLCB0aGlzKTtcclxuICAgICAgICAgICAgY2MubG9nKGBbTWFpbk1lbnVTY2VuZV0g5bey57uR5a6ac3RhcnRCdXR0b27kuovku7ZgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwiW01haW5NZW51U2NlbmVdIOacquiuvue9rnN0YXJ0QnV0dG9u77yM6K+35Zyo5Li76I+c5Y2V5Zy65pmv5Lit57uR5a6a5byA5aeL5ri45oiP5oyJ6ZKuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g57uR5a6a5riF6Zmk5pWw5o2u5oyJ6ZKu5LqL5Lu277yI5aaC5p6c5a2Y5Zyo77yJXHJcbiAgICAgICAgaWYgKHRoaXMuY2xlYXJEYXRhQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJEYXRhQnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQ2xlYXJEYXRhQ2xpY2ssIHRoaXMpO1xyXG4gICAgICAgICAgICBjYy5sb2coYFtNYWluTWVudVNjZW5lXSDlt7Lnu5HlrppjbGVhckRhdGFCdXR0b27kuovku7ZgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOe7keWumuafpeeci+S6uueJqeaMiemSruS6i+S7tu+8iOWmguaenOWtmOWcqO+8iVxyXG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3RlclZpZXdCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJWaWV3QnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQ2hhcmFjdGVyVmlld0NsaWNrLCB0aGlzKTtcclxuICAgICAgICAgICAgY2MubG9nKGBbTWFpbk1lbnVTY2VuZV0g5bey57uR5a6aY2hhcmFjdGVyVmlld0J1dHRvbuS6i+S7tmApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCJbTWFpbk1lbnVTY2VuZV0g5pyq6K6+572uY2hhcmFjdGVyVmlld0J1dHRvbu+8jOWmgumcgOafpeeci+S6uueJqeWxnuaAp+WKn+iDve+8jOivt+WcqOS4u+iPnOWNleWcuuaZr+S4ree7keWumuafpeeci+S6uueJqeaMiemSrlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOe7keWumua3u+WKoOmBk+WFt+a1i+ivleaMiemSruS6i+S7tu+8iOWmguaenOWtmOWcqO+8iVxyXG4gICAgICAgIGlmICh0aGlzLmFkZEl0ZW1UZXN0QnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkSXRlbVRlc3RCdXR0b24ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25BZGRJdGVtVGVzdENsaWNrLCB0aGlzKTtcclxuICAgICAgICAgICAgY2MubG9nKGBbTWFpbk1lbnVTY2VuZV0g5bey57uR5a6aYWRkSXRlbVRlc3RCdXR0b27kuovku7ZgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOe7keWumua3u+WKoOmHkeW4gea1i+ivleaMiemSruS6i+S7tu+8iOWmguaenOWtmOWcqO+8iVxyXG4gICAgICAgIGlmICh0aGlzLmFkZENvaW5UZXN0QnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ29pblRlc3RCdXR0b24ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25BZGRDb2luVGVzdENsaWNrLCB0aGlzKTtcclxuICAgICAgICAgICAgY2MubG9nKGBbTWFpbk1lbnVTY2VuZV0g5bey57uR5a6aYWRkQ29pblRlc3RCdXR0b27kuovku7ZgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOe7keWumuWVhuWfjuaMiemSruS6i+S7tu+8iOWmguaenOWtmOWcqO+8iVxyXG4gICAgICAgIGlmICh0aGlzLnNob3BCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy5zaG9wQnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uU2hvcENsaWNrLCB0aGlzKTtcclxuICAgICAgICAgICAgY2MubG9nKGBbTWFpbk1lbnVTY2VuZV0g5bey57uR5a6ac2hvcEJ1dHRvbuS6i+S7tmApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCJbTWFpbk1lbnVTY2VuZV0g5pyq6K6+572uc2hvcEJ1dHRvbu+8jOWmgumcgOWVhuWfjuWKn+iDve+8jOivt+WcqOS4u+iPnOWNleWcuuaZr+S4ree7keWumuWVhuWfjuaMiemSrlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byA5aeL5ri45oiP5oyJ6ZKu54K55Ye75LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnRDbGljaygpIHtcclxuICAgICAgICBjYy5sb2coYFtNYWluTWVudVNjZW5lXSDlvIDlp4vmuLjmiI/vvIzlnLrmma/lkI3np7A6ICR7dGhpcy5zZWxlY3RTY2VuZU5hbWV9YCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0U2NlbmVOYW1lKSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh0aGlzLnNlbGVjdFNjZW5lTmFtZSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgW01haW5NZW51U2NlbmVdIOWKoOi9vemAieaLqeWcuuaZr+Wksei0pTogJHtlcnJvcn1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgW01haW5NZW51U2NlbmVdIOivt+ajgOafpeWcuuaZr+WQjeensOaYr+WQpuato+ehrjogJHt0aGlzLnNlbGVjdFNjZW5lTmFtZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgW01haW5NZW51U2NlbmVdIOivt+ehruS/neWcuuaZr+aWh+S7tuWtmOWcqOS6jumhueebruS4rWApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtNYWluTWVudVNjZW5lXSDmiJDlip/liqDovb3pgInmi6nlnLrmma86ICR7dGhpcy5zZWxlY3RTY2VuZU5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCJbTWFpbk1lbnVTY2VuZV0g5pyq6K6+572uc2VsZWN0U2NlbmVOYW1l77yM5peg5rOV5byA5aeL5ri45oiPXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXpmaTmiYDmnInnrYnnuqfmlbDmja7mjInpkq7ngrnlh7vkuovku7ZcclxuICAgICAqL1xyXG4gICAgb25DbGVhckRhdGFDbGljaygpIHtcclxuICAgICAgICAvLyDnoa7orqTlr7nor53moYbvvIjlj6/pgInvvIlcclxuICAgICAgICBpZiAoY29uZmlybShcIuehruWumuimgea4hemZpOaJgOacieinkuiJsueahOetiee6p+aVsOaNruWQl++8n1xcbuatpOaTjeS9nOS4jeWPr+aBouWkje+8gVwiKSkge1xyXG4gICAgICAgICAgICBjb25zdCBDaGFyYWN0ZXJEYXRhTWFuYWdlciA9IHJlcXVpcmUoXCJDaGFyYWN0ZXJEYXRhTWFuYWdlclwiKTtcclxuICAgICAgICAgICAgQ2hhcmFjdGVyRGF0YU1hbmFnZXIuY2xlYXJBbGxDaGFyYWN0ZXJEYXRhKCk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIltNYWluTWVudVNjZW5lXSDlt7LmuIXpmaTmiYDmnInop5LoibLnmoTnrYnnuqfmlbDmja5cIik7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwi5bey5riF6Zmk5omA5pyJ6KeS6Imy55qE562J57qn5pWw5o2u77yBXFxu5LiL5qyh6L+b5YWl5ri45oiP5pe277yM5omA5pyJ6KeS6Imy5bCG5LuOMee6p+W8gOWni+OAglwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5p+l55yL5Lq654mp5bGe5oCn5oyJ6ZKu54K55Ye75LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIG9uQ2hhcmFjdGVyVmlld0NsaWNrKCkge1xyXG4gICAgICAgIGNjLmxvZyhgW01haW5NZW51U2NlbmVdIOafpeeci+S6uueJqeWxnuaAp++8jOWcuuaZr+WQjeensDogJHt0aGlzLmNoYXJhY3RlclZpZXdTY2VuZU5hbWV9YCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyVmlld1NjZW5lTmFtZSkge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5jaGFyYWN0ZXJWaWV3U2NlbmVOYW1lLCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbTWFpbk1lbnVTY2VuZV0g5Yqg6L295Lq654mp5bGe5oCn5p+l55yL5Zy65pmv5aSx6LSlOiAke2Vycm9yfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbTWFpbk1lbnVTY2VuZV0g6K+35qOA5p+l5Zy65pmv5ZCN56ew5piv5ZCm5q2j56GuOiAke3RoaXMuY2hhcmFjdGVyVmlld1NjZW5lTmFtZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgW01haW5NZW51U2NlbmVdIOivt+ehruS/neWcuuaZr+aWh+S7tuWtmOWcqOS6jumhueebruS4rWApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtNYWluTWVudVNjZW5lXSDmiJDlip/liqDovb3kurrnianlsZ7mgKfmn6XnnIvlnLrmma86ICR7dGhpcy5jaGFyYWN0ZXJWaWV3U2NlbmVOYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwiW01haW5NZW51U2NlbmVdIOacquiuvue9rmNoYXJhY3RlclZpZXdTY2VuZU5hbWXvvIzml6Dms5Xot7PovazliLDkurrnianlsZ7mgKfmn6XnnIvlnLrmma9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9veaJgOacieinkuiJsuaVsOaNrlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgYXN5bmMgX2xvYWRBbGxDaGFyYWN0ZXJzKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IENoYXJhY3RlckRhdGFNYW5hZ2VyID0gcmVxdWlyZShcIkNoYXJhY3RlckRhdGFNYW5hZ2VyXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8g6I635Y+W5omA5pyJ6KeS6Imy5pWw5o2u77yI5pSv5oyB5byC5q2l77yJXHJcbiAgICAgICAgICAgIGNvbnN0IGFsbENoYXJhY3RlcnMgPSBhd2FpdCBDaGFyYWN0ZXJEYXRhTWFuYWdlci5nZXRBbGxDaGFyYWN0ZXJEYXRhKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjaGFyYWN0ZXJDb3VudCA9IE9iamVjdC5rZXlzKGFsbENoYXJhY3RlcnMpLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKGNoYXJhY3RlckNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKGBbTWFpbk1lbnVTY2VuZV0g4pyTIOW3suWKoOi9vSAke2NoYXJhY3RlckNvdW50fSDkuKrop5LoibLnmoTmlbDmja5gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDpgY3ljobmiYDmnInop5LoibLvvIzmmL7npLrkv6Hmga/vvIjlj6/pgInvvIlcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGFsbENoYXJhY3RlcnMpLmZvckVhY2goY2hhcmFjdGVyTmFtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGFsbENoYXJhY3RlcnNbY2hhcmFjdGVyTmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbTWFpbk1lbnVTY2VuZV0gICAtICR7Y2hhcmFjdGVyTmFtZX06IOetiee6pyR7ZGF0YS5sZXZlbH0sIOe7j+mqjCR7ZGF0YS5leHB9YCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDkv53lrZjliLDlhajlsYDlj5jph4/kvpvlhbbku5blnLrmma/kvb/nlKjvvIjlj6/pgInvvIlcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5BbGxDaGFyYWN0ZXJzID0gYWxsQ2hhcmFjdGVycztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIltNYWluTWVudVNjZW5lXSDlvZPliY3msqHmnInop5LoibLmlbDmja5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjYy53YXJuKGBbTWFpbk1lbnVTY2VuZV0g5Yqg6L295omA5pyJ6KeS6Imy5pWw5o2u5aSx6LSlOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgIC8vIOWksei0peS4jeW9seWTjea4uOaIj+i/kOihjO+8jOe7p+e7reaJp+ihjFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbmnI3liqHlmajphY3nva5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9pbml0U2VydmVyQ29uZmlnKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFNlcnZlckNvbmZpZyA9IHJlcXVpcmUoXCJTZXJ2ZXJDb25maWdcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IEl0ZW1EYXRhQWRhcHRlciA9IHJlcXVpcmUoXCJJdGVtRGF0YUFkYXB0ZXJcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IENoYXJhY3RlckRhdGFBZGFwdGVyID0gcmVxdWlyZShcIkNoYXJhY3RlckRhdGFBZGFwdGVyXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8g5pyN5Yqh5Zmo6YWN572uXHJcbiAgICAgICAgICAgIC8vIOazqOaEj++8muWmguaenOacjeWKoeWZqOacqui/kOihjO+8jOS8muiHquWKqOmZjee6p+WIsOacrOWcsOaooeW8j1xyXG4gICAgICAgICAgICBjb25zdCBzZXJ2ZXJCYXNlVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpXCI7IC8vIOWNleS4quinkuiJsuaVsOaNruacjeWKoeWZqOWcsOWdgO+8iOerr+WPozMwMDDvvIlcclxuICAgICAgICAgICAgY29uc3Qgc2VydmVyQmFzZVVSTEZvckFsbCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaVwiOyAvLyDmiYDmnInop5LoibLmlbDmja7mnI3liqHlmajlnLDlnYDvvIjnq6/lj6MzMDAx77yJXHJcblxyXG4gICAgICAgICAgICAvLyDliJ3lp4vljJbmnI3liqHlmajphY3nva5cclxuICAgICAgICAgICAgU2VydmVyQ29uZmlnLmluaXQoe1xyXG4gICAgICAgICAgICAgICAgYmFzZVVSTDogc2VydmVyQmFzZVVSTCwgLy8g5Y2V5Liq6KeS6Imy5pWw5o2u5L2/55So56uv5Y+jMzAwMFxyXG4gICAgICAgICAgICAgICAgYmFzZVVSTEZvckFsbDogc2VydmVyQmFzZVVSTEZvckFsbCwgLy8g5omA5pyJ6KeS6Imy5pWw5o2u5L2/55So56uv5Y+jMzAwMVxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogNTAwMCxcclxuICAgICAgICAgICAgICAgIHJldHJ5Q291bnQ6IDMsXHJcbiAgICAgICAgICAgICAgICBhdXRoOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogXCIxXCIgLy8g55So5oi3SUTvvIjov5nph4znroDljJblpITnkIbvvIzlrp7pmYXlupTor6Xku47nmbvlvZXns7vnu5/ojrflj5bvvIlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyDliIfmjaLliLDmt7flkIjmqKHlvI/vvIjmjqjojZDvvIlcclxuICAgICAgICAgICAgLy8g5re35ZCI5qih5byP77ya5LyY5YWI5LuO5pyN5Yqh5Zmo5Yqg6L2977yM5aSx6LSl5YiZ5L2/55So5pys5Zyw57yT5a2YXHJcbiAgICAgICAgICAgIC8vIOS/neWtmOaXtu+8muWFiOS/neWtmOWIsOacrOWcsO+8iOW/q+mAn+WTjeW6lO+8ie+8jOeEtuWQjuWQjOatpeWIsOacjeWKoeWZqFxyXG4gICAgICAgICAgICBJdGVtRGF0YUFkYXB0ZXIuc2V0U3RvcmFnZU1vZGUoXCJoeWJyaWRcIik7XHJcbiAgICAgICAgICAgIENoYXJhY3RlckRhdGFBZGFwdGVyLnNldFN0b3JhZ2VNb2RlKFwiaHlicmlkXCIpO1xyXG5cclxuICAgICAgICAgICAgY2MubG9nKFwiW01haW5NZW51U2NlbmVdIOKckyDmnI3liqHlmajphY3nva7lt7LliJ3lp4vljJZcIik7XHJcbiAgICAgICAgICAgIGNjLmxvZyhgW01haW5NZW51U2NlbmVdIOWNleS4quinkuiJsuaVsOaNruacjeWKoeWZqDogJHtzZXJ2ZXJCYXNlVVJMfSAo56uv5Y+jMzAwMClgKTtcclxuICAgICAgICAgICAgY2MubG9nKGBbTWFpbk1lbnVTY2VuZV0g5omA5pyJ6KeS6Imy5pWw5o2u5pyN5Yqh5ZmoOiAke3NlcnZlckJhc2VVUkxGb3JBbGx9ICjnq6/lj6MzMDAxKWApO1xyXG4gICAgICAgICAgICBjYy5sb2coXCJbTWFpbk1lbnVTY2VuZV0g5a2Y5YKo5qih5byPOiDmt7flkIjmqKHlvI/vvIjmnKzlnLAr5pyN5Yqh5Zmo77yJXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oYFtNYWluTWVudVNjZW5lXSDmnI3liqHlmajphY3nva7liJ3lp4vljJblpLHotKU6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgY2Mud2FybihcIltNYWluTWVudVNjZW5lXSDlsIbkvb/nlKjmnKzlnLDlrZjlgqjmqKHlvI9cIik7XHJcblxyXG4gICAgICAgICAgICAvLyDlpoLmnpzphY3nva7lpLHotKXvvIznoa7kv53kvb/nlKjmnKzlnLDmqKHlvI9cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IEl0ZW1EYXRhQWRhcHRlciA9IHJlcXVpcmUoXCJJdGVtRGF0YUFkYXB0ZXJcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBDaGFyYWN0ZXJEYXRhQWRhcHRlciA9IHJlcXVpcmUoXCJDaGFyYWN0ZXJEYXRhQWRhcHRlclwiKTtcclxuICAgICAgICAgICAgICAgIEl0ZW1EYXRhQWRhcHRlci5zZXRTdG9yYWdlTW9kZShcImxvY2FsXCIpO1xyXG4gICAgICAgICAgICAgICAgQ2hhcmFjdGVyRGF0YUFkYXB0ZXIuc2V0U3RvcmFnZU1vZGUoXCJsb2NhbFwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtNYWluTWVudVNjZW5lXSDorr7nva7mnKzlnLDmqKHlvI/lpLHotKU6ICR7ZS5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOmBk+WFt+a1i+ivleaMiemSrueCueWHu+S6i+S7tlxyXG4gICAgICovXHJcbiAgICBhc3luYyBvbkFkZEl0ZW1UZXN0Q2xpY2soKSB7XHJcbiAgICAgICAgY29uc3QgSXRlbURhdGFNYW5hZ2VyID0gcmVxdWlyZShcIkl0ZW1EYXRhTWFuYWdlclwiKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8g5re75YqgMTDkuKrljYfnuqfoja/msLRcclxuICAgICAgICAgICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IEl0ZW1EYXRhTWFuYWdlci5hZGRJdGVtKFwidXBncmFkZV9wb3Rpb25cIiwgMTApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIC8vIOiOt+WPluW9k+WJjeaVsOmHj1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY291bnQgPSBhd2FpdCBJdGVtRGF0YU1hbmFnZXIuZ2V0SXRlbUNvdW50KFwidXBncmFkZV9wb3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtNYWluTWVudVNjZW5lXSDinJMg5bey5re75YqgMTDkuKrljYfnuqfoja/msLTvvIzlvZPliY3mgLvmlbA6ICR7Y291bnR9YCk7XHJcbiAgICAgICAgICAgICAgICBhbGVydChg5bey5re75YqgMTDkuKrljYfnuqfoja/msLTvvIFcXG7lvZPliY3mgLvmlbA6ICR7Y291bnR9YCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIltNYWluTWVudVNjZW5lXSDinJcg5re75Yqg5Y2H57qn6I2v5rC05aSx6LSlXCIpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCLmt7vliqDljYfnuqfoja/msLTlpLHotKXvvIzor7fmn6XnnIvmjqfliLblj7Dml6Xlv5dcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihgW01haW5NZW51U2NlbmVdIOa3u+WKoOmBk+WFt+aXtuWPkeeUn+mUmeivrzogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICBhbGVydChg5re75Yqg6YGT5YW35aSx6LSlOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOmHkeW4gea1i+ivleaMiemSrueCueWHu+S6i+S7tlxyXG4gICAgICovXHJcbiAgICBhc3luYyBvbkFkZENvaW5UZXN0Q2xpY2soKSB7XHJcbiAgICAgICAgY29uc3QgQ29pbk1hbmFnZXIgPSByZXF1aXJlKFwiQ29pbk1hbmFnZXJcIik7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9IDEwMDA7IC8vIOavj+asoeWinuWKoDEwMDDph5HluIFcclxuICAgICAgICAgICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IENvaW5NYW5hZ2VyLmFkZENvaW5zKGFtb3VudCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgLy8g6I635Y+W5b2T5YmN6YeR5biB5pWw6YePXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2lucyA9IGF3YWl0IENvaW5NYW5hZ2VyLmdldENvaW5zKCk7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtNYWluTWVudVNjZW5lXSDinJMg5bey5aKe5YqgICR7YW1vdW50fSDph5HluIHvvIzlvZPliY3ph5HluIE6ICR7Y29pbnN9YCk7XHJcbiAgICAgICAgICAgICAgICBhbGVydChg5bey5aKe5YqgICR7YW1vdW50fSDph5HluIHvvIFcXG7lvZPliY3ph5HluIE6ICR7Y29pbnN9YCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIltNYWluTWVudVNjZW5lXSDinJcg5aKe5Yqg6YeR5biB5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCLlop7liqDph5HluIHlpLHotKXvvIzor7fmn6XnnIvmjqfliLblj7Dml6Xlv5dcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihgW01haW5NZW51U2NlbmVdIOWinuWKoOmHkeW4geaXtuWPkeeUn+mUmeivrzogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICBhbGVydChg5aKe5Yqg6YeR5biB5aSx6LSlOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWVhuWfjuaMiemSrueCueWHu+S6i+S7tlxyXG4gICAgICovXHJcbiAgICBvblNob3BDbGljaygpIHtcclxuICAgICAgICBjYy5sb2coYFtNYWluTWVudVNjZW5lXSDmiZPlvIDllYbln47vvIzlnLrmma/lkI3np7A6ICR7dGhpcy5zaG9wU2NlbmVOYW1lfWApO1xyXG4gICAgICAgIGlmICh0aGlzLnNob3BTY2VuZU5hbWUpIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMuc2hvcFNjZW5lTmFtZSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgW01haW5NZW51U2NlbmVdIOWKoOi9veWVhuWfjuWcuuaZr+Wksei0pTogJHtlcnJvcn1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgW01haW5NZW51U2NlbmVdIOivt+ajgOafpeWcuuaZr+WQjeensOaYr+WQpuato+ehrjogJHt0aGlzLnNob3BTY2VuZU5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtNYWluTWVudVNjZW5lXSDor7fnoa7kv53lnLrmma/mlofku7blrZjlnKjkuo7pobnnm67kuK1gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbTWFpbk1lbnVTY2VuZV0g5oiQ5Yqf5Yqg6L295ZWG5Z+O5Zy65pmvOiAke3RoaXMuc2hvcFNjZW5lTmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIltNYWluTWVudVNjZW5lXSDmnKrorr7nva5zaG9wU2NlbmVOYW1l77yM5peg5rOV6Lez6L2s5Yiw5ZWG5Z+O5Zy65pmvXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4iXX0=