"use strict";
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