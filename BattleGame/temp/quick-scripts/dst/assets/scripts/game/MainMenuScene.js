
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
      var SkillDataAdapter = require("SkillDataAdapter"); // ⭐ 技能数据适配器

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
      SkillDataAdapter.setStorageMode("hybrid"); // ⭐ 技能数据也使用混合模式

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZ2FtZVxcTWFpbk1lbnVTY2VuZS5qcyJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnRCdXR0b24iLCJCdXR0b24iLCJ0b29sdGlwIiwic2VsZWN0U2NlbmVOYW1lIiwiY2xlYXJEYXRhQnV0dG9uIiwiY2hhcmFjdGVyVmlld0J1dHRvbiIsImNoYXJhY3RlclZpZXdTY2VuZU5hbWUiLCJhZGRJdGVtVGVzdEJ1dHRvbiIsImFkZENvaW5UZXN0QnV0dG9uIiwic2hvcEJ1dHRvbiIsInNob3BTY2VuZU5hbWUiLCJvbkxvYWQiLCJsb2ciLCJfaW5pdFNlcnZlckNvbmZpZyIsIl9sb2FkQWxsQ2hhcmFjdGVycyIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJvblN0YXJ0Q2xpY2siLCJ3YXJuIiwib25DbGVhckRhdGFDbGljayIsIm9uQ2hhcmFjdGVyVmlld0NsaWNrIiwib25BZGRJdGVtVGVzdENsaWNrIiwib25BZGRDb2luVGVzdENsaWNrIiwib25TaG9wQ2xpY2siLCJfdGhpcyIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiY29uZmlybSIsIkNoYXJhY3RlckRhdGFNYW5hZ2VyIiwicmVxdWlyZSIsImNsZWFyQWxsQ2hhcmFjdGVyRGF0YSIsImFsZXJ0IiwiX3RoaXMyIiwiX2NhbGxlZSIsImFsbENoYXJhY3RlcnMiLCJjaGFyYWN0ZXJDb3VudCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJnZXRBbGxDaGFyYWN0ZXJEYXRhIiwiY2hhcmFjdGVyTmFtZSIsImRhdGEiLCJsZXZlbCIsImV4cCIsIndpbmRvdyIsIkFsbENoYXJhY3RlcnMiLCJ0MCIsIm1lc3NhZ2UiLCJTZXJ2ZXJDb25maWciLCJJdGVtRGF0YUFkYXB0ZXIiLCJDaGFyYWN0ZXJEYXRhQWRhcHRlciIsIlNraWxsRGF0YUFkYXB0ZXIiLCJzZXJ2ZXJCYXNlVVJMIiwic2VydmVyQmFzZVVSTEZvckFsbCIsImluaXQiLCJiYXNlVVJMIiwiYmFzZVVSTEZvckFsbCIsInRpbWVvdXQiLCJyZXRyeUNvdW50IiwiYXV0aCIsImVuYWJsZWQiLCJ0b2tlbiIsInNldFN0b3JhZ2VNb2RlIiwiZSIsIl9jYWxsZWUyIiwiSXRlbURhdGFNYW5hZ2VyIiwic3VjY2VzcyIsImNvdW50IiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiYWRkSXRlbSIsImdldEl0ZW1Db3VudCIsIl9jYWxsZWUzIiwiQ29pbk1hbmFnZXIiLCJhbW91bnQiLCJjb2lucyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImFkZENvaW5zIiwiZ2V0Q29pbnMiLCJfdGhpczMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBLHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxPQUFBLFNBQUFBLE9BQUEsT0FBQUMsRUFBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsTUFBQSxHQUFBSCxFQUFBLENBQUFJLGNBQUEsRUFBQUMsY0FBQSxHQUFBSixNQUFBLENBQUFJLGNBQUEsY0FBQUMsR0FBQSxFQUFBQyxHQUFBLEVBQUFDLElBQUEsSUFBQUYsR0FBQSxDQUFBQyxHQUFBLElBQUFDLElBQUEsQ0FBQUMsS0FBQSxLQUFBQyxPQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsY0FBQSxHQUFBRixPQUFBLENBQUFHLFFBQUEsa0JBQUFDLG1CQUFBLEdBQUFKLE9BQUEsQ0FBQUssYUFBQSx1QkFBQUMsaUJBQUEsR0FBQU4sT0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBWixHQUFBLEVBQUFDLEdBQUEsRUFBQUUsS0FBQSxXQUFBUixNQUFBLENBQUFJLGNBQUEsQ0FBQUMsR0FBQSxFQUFBQyxHQUFBLElBQUFFLEtBQUEsRUFBQUEsS0FBQSxFQUFBVSxVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBZixHQUFBLENBQUFDLEdBQUEsV0FBQVcsTUFBQSxtQkFBQUksR0FBQSxJQUFBSixNQUFBLFlBQUFBLE9BQUFaLEdBQUEsRUFBQUMsR0FBQSxFQUFBRSxLQUFBLFdBQUFILEdBQUEsQ0FBQUMsR0FBQSxJQUFBRSxLQUFBLGdCQUFBYyxLQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFB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QUNGLGFBQWEsQ0FBRztJQUMxRCxJQUFJLElBQUksQ0FBQ0EsYUFBYSxFQUFFO01BQ3BCZCxFQUFFLENBQUNnQyxRQUFRLENBQUNDLFNBQVMsQ0FBQyxJQUFJLENBQUNuQixhQUFhLEVBQUUsVUFBQ2pHLEtBQUssRUFBSztRQUNqRCxJQUFJQSxLQUFLLEVBQUU7VUFDUG1GLEVBQUUsQ0FBQ25GLEtBQUssd0VBQThCQSxLQUFLLENBQUc7VUFDOUNtRixFQUFFLENBQUNuRixLQUFLLDBGQUFpQ3lLLE1BQUksQ0FBQ3hFLGFBQWEsQ0FBRztVQUM5RGQsRUFBRSxDQUFDbkYsS0FBSyxrR0FBaUM7UUFDN0MsQ0FBQyxNQUFNO1VBQ0htRixFQUFFLENBQUNnQixHQUFHLHdFQUE4QnNFLE1BQUksQ0FBQ3hFLGFBQWEsQ0FBRztRQUM3RDtNQUNKLENBQUMsQ0FBQztJQUNOLENBQUMsTUFBTTtNQUNIZCxFQUFFLENBQUN5QixJQUFJLENBQUMsNENBQTRDLENBQUM7SUFDekQ7RUFDSjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOS4u+iPnOWNleWcuuaZr+aOp+WItuWZqFxyXG4gKiDotJ/otKPmmL7npLrkuLvoj5zljZXlkozlr7zoiKrliLDlhbbku5blnLrmma9cclxuICovXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8g5byA5aeL5ri45oiP5oyJ6ZKuXHJcbiAgICAgICAgc3RhcnRCdXR0b246IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIuW8gOWni+a4uOaIj+aMiemSrlwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g6YCJ5oup5Zy65pmv5ZCN56ewXHJcbiAgICAgICAgc2VsZWN0U2NlbmVOYW1lOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiU2VsZWN0U2NlbmVcIixcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLpgInmi6nlnLrmma/lkI3np7DvvIjlvIDlp4vmuLjmiI/ml7bot7PovaznmoTlnLrmma/vvIlcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOa4hemZpOaVsOaNruaMiemSru+8iOWPr+mAie+8jOeUqOS6jua1i+ivle+8iVxyXG4gICAgICAgIGNsZWFyRGF0YUJ1dHRvbjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b24sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5riF6Zmk5omA5pyJ562J57qn5pWw5o2u5oyJ6ZKu77yI5rWL6K+V55So77yM5Y+v6YCJ77yJXCJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDmn6XnnIvkurrnianmjInpkq5cclxuICAgICAgICBjaGFyYWN0ZXJWaWV3QnV0dG9uOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvbixcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLmn6XnnIvkurrnianlsZ7mgKfmjInpkq5cIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOS6uueJqeWxnuaAp+afpeeci+WcuuaZr+WQjeensFxyXG4gICAgICAgIGNoYXJhY3RlclZpZXdTY2VuZU5hbWU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogXCJDaGFyYWN0ZXJWaWV3U2NlbmVcIixcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLkurrnianlsZ7mgKfmn6XnnIvlnLrmma/lkI3np7BcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOa3u+WKoOmBk+WFt+a1i+ivleaMiemSru+8iOWPr+mAie+8jOeUqOS6jua1i+ivle+8iVxyXG4gICAgICAgIGFkZEl0ZW1UZXN0QnV0dG9uOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvbixcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLmt7vliqDljYfnuqfoja/msLTmtYvor5XmjInpkq7vvIjmtYvor5XnlKjvvIzlj6/pgInvvIlcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOa3u+WKoOmHkeW4gea1i+ivleaMiemSru+8iOWPr+mAie+8jOeUqOS6jua1i+ivle+8iVxyXG4gICAgICAgIGFkZENvaW5UZXN0QnV0dG9uOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkJ1dHRvbixcclxuICAgICAgICAgICAgdG9vbHRpcDogXCLmt7vliqDph5HluIHmtYvor5XmjInpkq7vvIjmtYvor5XnlKjvvIzlj6/pgInvvIlcIlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOWVhuWfjuaMiemSrlxyXG4gICAgICAgIHNob3BCdXR0b246IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQnV0dG9uLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWVhuWfjuaMiemSru+8iOi3s+i9rOWIsOWVhuWfjuWcuuaZr++8iVwiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5ZWG5Z+O5Zy65pmv5ZCN56ewXHJcbiAgICAgICAgc2hvcFNjZW5lTmFtZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBcIlNob3BTY2VuZVwiLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWVhuWfjuWcuuaZr+WQjeensFwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MubG9nKFwiW01haW5NZW51U2NlbmVdIOS4u+iPnOWNleWcuuaZr+W3suWKoOi9vVwiKTtcclxuXHJcbiAgICAgICAgLy8g5Yid5aeL5YyW5pyN5Yqh5Zmo6YWN572uXHJcbiAgICAgICAgdGhpcy5faW5pdFNlcnZlckNvbmZpZygpO1xyXG5cclxuICAgICAgICAvLyDliqDovb3miYDmnInop5LoibLmlbDmja7vvIjlj6/pgInvvIznlKjkuo7liJ3lp4vljJbmiJbmmL7npLrvvIlcclxuICAgICAgICB0aGlzLl9sb2FkQWxsQ2hhcmFjdGVycygpO1xyXG5cclxuICAgICAgICAvLyDnu5HlrprlvIDlp4vmuLjmiI/mjInpkq7kuovku7ZcclxuICAgICAgICBpZiAodGhpcy5zdGFydEJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uU3RhcnRDbGljaywgdGhpcyk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhgW01haW5NZW51U2NlbmVdIOW3sue7keWumnN0YXJ0QnV0dG9u5LqL5Lu2YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIltNYWluTWVudVNjZW5lXSDmnKrorr7nva5zdGFydEJ1dHRvbu+8jOivt+WcqOS4u+iPnOWNleWcuuaZr+S4ree7keWumuW8gOWni+a4uOaIj+aMiemSrlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOe7keWumua4hemZpOaVsOaNruaMiemSruS6i+S7tu+8iOWmguaenOWtmOWcqO+8iVxyXG4gICAgICAgIGlmICh0aGlzLmNsZWFyRGF0YUJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyRGF0YUJ1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkNsZWFyRGF0YUNsaWNrLCB0aGlzKTtcclxuICAgICAgICAgICAgY2MubG9nKGBbTWFpbk1lbnVTY2VuZV0g5bey57uR5a6aY2xlYXJEYXRhQnV0dG9u5LqL5Lu2YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDnu5Hlrprmn6XnnIvkurrnianmjInpkq7kuovku7bvvIjlpoLmnpzlrZjlnKjvvIlcclxuICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXJWaWV3QnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyVmlld0J1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkNoYXJhY3RlclZpZXdDbGljaywgdGhpcyk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhgW01haW5NZW51U2NlbmVdIOW3sue7keWummNoYXJhY3RlclZpZXdCdXR0b27kuovku7ZgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwiW01haW5NZW51U2NlbmVdIOacquiuvue9rmNoYXJhY3RlclZpZXdCdXR0b27vvIzlpoLpnIDmn6XnnIvkurrnianlsZ7mgKflip/og73vvIzor7flnKjkuLvoj5zljZXlnLrmma/kuK3nu5Hlrprmn6XnnIvkurrnianmjInpkq5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDnu5Hlrprmt7vliqDpgZPlhbfmtYvor5XmjInpkq7kuovku7bvvIjlpoLmnpzlrZjlnKjvvIlcclxuICAgICAgICBpZiAodGhpcy5hZGRJdGVtVGVzdEJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEl0ZW1UZXN0QnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQWRkSXRlbVRlc3RDbGljaywgdGhpcyk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhgW01haW5NZW51U2NlbmVdIOW3sue7keWummFkZEl0ZW1UZXN0QnV0dG9u5LqL5Lu2YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDnu5Hlrprmt7vliqDph5HluIHmtYvor5XmjInpkq7kuovku7bvvIjlpoLmnpzlrZjlnKjvvIlcclxuICAgICAgICBpZiAodGhpcy5hZGRDb2luVGVzdEJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLmFkZENvaW5UZXN0QnV0dG9uLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQWRkQ29pblRlc3RDbGljaywgdGhpcyk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhgW01haW5NZW51U2NlbmVdIOW3sue7keWummFkZENvaW5UZXN0QnV0dG9u5LqL5Lu2YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDnu5HlrprllYbln47mjInpkq7kuovku7bvvIjlpoLmnpzlrZjlnKjvvIlcclxuICAgICAgICBpZiAodGhpcy5zaG9wQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvcEJ1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblNob3BDbGljaywgdGhpcyk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhgW01haW5NZW51U2NlbmVdIOW3sue7keWumnNob3BCdXR0b27kuovku7ZgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwiW01haW5NZW51U2NlbmVdIOacquiuvue9rnNob3BCdXR0b27vvIzlpoLpnIDllYbln47lip/og73vvIzor7flnKjkuLvoj5zljZXlnLrmma/kuK3nu5HlrprllYbln47mjInpkq5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW8gOWni+a4uOaIj+aMiemSrueCueWHu+S6i+S7tlxyXG4gICAgICovXHJcbiAgICBvblN0YXJ0Q2xpY2soKSB7XHJcbiAgICAgICAgY2MubG9nKGBbTWFpbk1lbnVTY2VuZV0g5byA5aeL5ri45oiP77yM5Zy65pmv5ZCN56ewOiAke3RoaXMuc2VsZWN0U2NlbmVOYW1lfWApO1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdFNjZW5lTmFtZSkge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUodGhpcy5zZWxlY3RTY2VuZU5hbWUsIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtNYWluTWVudVNjZW5lXSDliqDovb3pgInmi6nlnLrmma/lpLHotKU6ICR7ZXJyb3J9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtNYWluTWVudVNjZW5lXSDor7fmo4Dmn6XlnLrmma/lkI3np7DmmK/lkKbmraPnoa46ICR7dGhpcy5zZWxlY3RTY2VuZU5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtNYWluTWVudVNjZW5lXSDor7fnoa7kv53lnLrmma/mlofku7blrZjlnKjkuo7pobnnm67kuK1gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbTWFpbk1lbnVTY2VuZV0g5oiQ5Yqf5Yqg6L296YCJ5oup5Zy65pmvOiAke3RoaXMuc2VsZWN0U2NlbmVOYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwiW01haW5NZW51U2NlbmVdIOacquiuvue9rnNlbGVjdFNjZW5lTmFtZe+8jOaXoOazleW8gOWni+a4uOaIj1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5riF6Zmk5omA5pyJ562J57qn5pWw5o2u5oyJ6ZKu54K55Ye75LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIG9uQ2xlYXJEYXRhQ2xpY2soKSB7XHJcbiAgICAgICAgLy8g56Gu6K6k5a+56K+d5qGG77yI5Y+v6YCJ77yJXHJcbiAgICAgICAgaWYgKGNvbmZpcm0oXCLnoa7lrpropoHmuIXpmaTmiYDmnInop5LoibLnmoTnrYnnuqfmlbDmja7lkJfvvJ9cXG7mraTmk43kvZzkuI3lj6/mgaLlpI3vvIFcIikpIHtcclxuICAgICAgICAgICAgY29uc3QgQ2hhcmFjdGVyRGF0YU1hbmFnZXIgPSByZXF1aXJlKFwiQ2hhcmFjdGVyRGF0YU1hbmFnZXJcIik7XHJcbiAgICAgICAgICAgIENoYXJhY3RlckRhdGFNYW5hZ2VyLmNsZWFyQWxsQ2hhcmFjdGVyRGF0YSgpO1xyXG4gICAgICAgICAgICBjYy5sb2coXCJbTWFpbk1lbnVTY2VuZV0g5bey5riF6Zmk5omA5pyJ6KeS6Imy55qE562J57qn5pWw5o2uXCIpO1xyXG4gICAgICAgICAgICBhbGVydChcIuW3sua4hemZpOaJgOacieinkuiJsueahOetiee6p+aVsOaNru+8gVxcbuS4i+asoei/m+WFpea4uOaIj+aXtu+8jOaJgOacieinkuiJsuWwhuS7jjHnuqflvIDlp4vjgIJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOafpeeci+S6uueJqeWxnuaAp+aMiemSrueCueWHu+S6i+S7tlxyXG4gICAgICovXHJcbiAgICBvbkNoYXJhY3RlclZpZXdDbGljaygpIHtcclxuICAgICAgICBjYy5sb2coYFtNYWluTWVudVNjZW5lXSDmn6XnnIvkurrnianlsZ7mgKfvvIzlnLrmma/lkI3np7A6ICR7dGhpcy5jaGFyYWN0ZXJWaWV3U2NlbmVOYW1lfWApO1xyXG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3RlclZpZXdTY2VuZU5hbWUpIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMuY2hhcmFjdGVyVmlld1NjZW5lTmFtZSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgW01haW5NZW51U2NlbmVdIOWKoOi9veS6uueJqeWxnuaAp+afpeeci+WcuuaZr+Wksei0pTogJHtlcnJvcn1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihgW01haW5NZW51U2NlbmVdIOivt+ajgOafpeWcuuaZr+WQjeensOaYr+WQpuato+ehrjogJHt0aGlzLmNoYXJhY3RlclZpZXdTY2VuZU5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtNYWluTWVudVNjZW5lXSDor7fnoa7kv53lnLrmma/mlofku7blrZjlnKjkuo7pobnnm67kuK1gKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbTWFpbk1lbnVTY2VuZV0g5oiQ5Yqf5Yqg6L295Lq654mp5bGe5oCn5p+l55yL5Zy65pmvOiAke3RoaXMuY2hhcmFjdGVyVmlld1NjZW5lTmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIltNYWluTWVudVNjZW5lXSDmnKrorr7nva5jaGFyYWN0ZXJWaWV3U2NlbmVOYW1l77yM5peg5rOV6Lez6L2s5Yiw5Lq654mp5bGe5oCn5p+l55yL5Zy65pmvXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3miYDmnInop5LoibLmlbDmja5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIF9sb2FkQWxsQ2hhcmFjdGVycygpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBDaGFyYWN0ZXJEYXRhTWFuYWdlciA9IHJlcXVpcmUoXCJDaGFyYWN0ZXJEYXRhTWFuYWdlclwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOiOt+WPluaJgOacieinkuiJsuaVsOaNru+8iOaUr+aMgeW8guatpe+8iVxyXG4gICAgICAgICAgICBjb25zdCBhbGxDaGFyYWN0ZXJzID0gYXdhaXQgQ2hhcmFjdGVyRGF0YU1hbmFnZXIuZ2V0QWxsQ2hhcmFjdGVyRGF0YSgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2hhcmFjdGVyQ291bnQgPSBPYmplY3Qua2V5cyhhbGxDaGFyYWN0ZXJzKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChjaGFyYWN0ZXJDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhgW01haW5NZW51U2NlbmVdIOKckyDlt7LliqDovb0gJHtjaGFyYWN0ZXJDb3VudH0g5Liq6KeS6Imy55qE5pWw5o2uYCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g6YGN5Y6G5omA5pyJ6KeS6Imy77yM5pi+56S65L+h5oGv77yI5Y+v6YCJ77yJXHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhhbGxDaGFyYWN0ZXJzKS5mb3JFYWNoKGNoYXJhY3Rlck5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhbGxDaGFyYWN0ZXJzW2NoYXJhY3Rlck5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW01haW5NZW51U2NlbmVdICAgLSAke2NoYXJhY3Rlck5hbWV9OiDnrYnnuqcke2RhdGEubGV2ZWx9LCDnu4/pqowke2RhdGEuZXhwfWApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g5L+d5a2Y5Yiw5YWo5bGA5Y+Y6YeP5L6b5YW25LuW5Zy65pmv5L2/55So77yI5Y+v6YCJ77yJXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuQWxsQ2hhcmFjdGVycyA9IGFsbENoYXJhY3RlcnM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJbTWFpbk1lbnVTY2VuZV0g5b2T5YmN5rKh5pyJ6KeS6Imy5pWw5o2uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY2Mud2FybihgW01haW5NZW51U2NlbmVdIOWKoOi9veaJgOacieinkuiJsuaVsOaNruWksei0pTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAvLyDlpLHotKXkuI3lvbHlk43muLjmiI/ov5DooYzvvIznu6fnu63miafooYxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5pyN5Yqh5Zmo6YWN572uXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfaW5pdFNlcnZlckNvbmZpZygpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBTZXJ2ZXJDb25maWcgPSByZXF1aXJlKFwiU2VydmVyQ29uZmlnXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBJdGVtRGF0YUFkYXB0ZXIgPSByZXF1aXJlKFwiSXRlbURhdGFBZGFwdGVyXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBDaGFyYWN0ZXJEYXRhQWRhcHRlciA9IHJlcXVpcmUoXCJDaGFyYWN0ZXJEYXRhQWRhcHRlclwiKTtcclxuICAgICAgICAgICAgY29uc3QgU2tpbGxEYXRhQWRhcHRlciA9IHJlcXVpcmUoXCJTa2lsbERhdGFBZGFwdGVyXCIpOyAvLyDirZAg5oqA6IO95pWw5o2u6YCC6YWN5ZmoXHJcblxyXG4gICAgICAgICAgICAvLyDmnI3liqHlmajphY3nva5cclxuICAgICAgICAgICAgLy8g5rOo5oSP77ya5aaC5p6c5pyN5Yqh5Zmo5pyq6L+Q6KGM77yM5Lya6Ieq5Yqo6ZmN57qn5Yiw5pys5Zyw5qih5byPXHJcbiAgICAgICAgICAgIGNvbnN0IHNlcnZlckJhc2VVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGlcIjsgLy8g5Y2V5Liq6KeS6Imy5pWw5o2u5pyN5Yqh5Zmo5Zyw5Z2A77yI56uv5Y+jMzAwMO+8iVxyXG4gICAgICAgICAgICBjb25zdCBzZXJ2ZXJCYXNlVVJMRm9yQWxsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpXCI7IC8vIOaJgOacieinkuiJsuaVsOaNruacjeWKoeWZqOWcsOWdgO+8iOerr+WPozMwMDHvvIlcclxuXHJcbiAgICAgICAgICAgIC8vIOWIneWni+WMluacjeWKoeWZqOmFjee9rlxyXG4gICAgICAgICAgICBTZXJ2ZXJDb25maWcuaW5pdCh7XHJcbiAgICAgICAgICAgICAgICBiYXNlVVJMOiBzZXJ2ZXJCYXNlVVJMLCAvLyDljZXkuKrop5LoibLmlbDmja7kvb/nlKjnq6/lj6MzMDAwXHJcbiAgICAgICAgICAgICAgICBiYXNlVVJMRm9yQWxsOiBzZXJ2ZXJCYXNlVVJMRm9yQWxsLCAvLyDmiYDmnInop5LoibLmlbDmja7kvb/nlKjnq6/lj6MzMDAxXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiA1MDAwLFxyXG4gICAgICAgICAgICAgICAgcmV0cnlDb3VudDogMyxcclxuICAgICAgICAgICAgICAgIGF1dGg6IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiBcIjFcIiAvLyDnlKjmiLdJRO+8iOi/memHjOeugOWMluWkhOeQhu+8jOWunumZheW6lOivpeS7jueZu+W9leezu+e7n+iOt+WPlu+8iVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIOWIh+aNouWIsOa3t+WQiOaooeW8j++8iOaOqOiNkO+8iVxyXG4gICAgICAgICAgICAvLyDmt7flkIjmqKHlvI/vvJrkvJjlhYjku47mnI3liqHlmajliqDovb3vvIzlpLHotKXliJnkvb/nlKjmnKzlnLDnvJPlrZhcclxuICAgICAgICAgICAgLy8g5L+d5a2Y5pe277ya5YWI5L+d5a2Y5Yiw5pys5Zyw77yI5b+r6YCf5ZON5bqU77yJ77yM54S25ZCO5ZCM5q2l5Yiw5pyN5Yqh5ZmoXHJcbiAgICAgICAgICAgIEl0ZW1EYXRhQWRhcHRlci5zZXRTdG9yYWdlTW9kZShcImh5YnJpZFwiKTtcclxuICAgICAgICAgICAgQ2hhcmFjdGVyRGF0YUFkYXB0ZXIuc2V0U3RvcmFnZU1vZGUoXCJoeWJyaWRcIik7XHJcbiAgICAgICAgICAgIFNraWxsRGF0YUFkYXB0ZXIuc2V0U3RvcmFnZU1vZGUoXCJoeWJyaWRcIik7IC8vIOKtkCDmioDog73mlbDmja7kuZ/kvb/nlKjmt7flkIjmqKHlvI9cclxuXHJcbiAgICAgICAgICAgIGNjLmxvZyhcIltNYWluTWVudVNjZW5lXSDinJMg5pyN5Yqh5Zmo6YWN572u5bey5Yid5aeL5YyWXCIpO1xyXG4gICAgICAgICAgICBjYy5sb2coYFtNYWluTWVudVNjZW5lXSDljZXkuKrop5LoibLmlbDmja7mnI3liqHlmag6ICR7c2VydmVyQmFzZVVSTH0gKOerr+WPozMwMDApYCk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhgW01haW5NZW51U2NlbmVdIOaJgOacieinkuiJsuaVsOaNruacjeWKoeWZqDogJHtzZXJ2ZXJCYXNlVVJMRm9yQWxsfSAo56uv5Y+jMzAwMSlgKTtcclxuICAgICAgICAgICAgY2MubG9nKFwiW01haW5NZW51U2NlbmVdIOWtmOWCqOaooeW8jzog5re35ZCI5qih5byP77yI5pys5ZywK+acjeWKoeWZqO+8iVwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjYy53YXJuKGBbTWFpbk1lbnVTY2VuZV0g5pyN5Yqh5Zmo6YWN572u5Yid5aeL5YyW5aSx6LSlOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCJbTWFpbk1lbnVTY2VuZV0g5bCG5L2/55So5pys5Zyw5a2Y5YKo5qih5byPXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8g5aaC5p6c6YWN572u5aSx6LSl77yM56Gu5L+d5L2/55So5pys5Zyw5qih5byPXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBJdGVtRGF0YUFkYXB0ZXIgPSByZXF1aXJlKFwiSXRlbURhdGFBZGFwdGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgQ2hhcmFjdGVyRGF0YUFkYXB0ZXIgPSByZXF1aXJlKFwiQ2hhcmFjdGVyRGF0YUFkYXB0ZXJcIik7XHJcbiAgICAgICAgICAgICAgICBJdGVtRGF0YUFkYXB0ZXIuc2V0U3RvcmFnZU1vZGUoXCJsb2NhbFwiKTtcclxuICAgICAgICAgICAgICAgIENoYXJhY3RlckRhdGFBZGFwdGVyLnNldFN0b3JhZ2VNb2RlKFwibG9jYWxcIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbTWFpbk1lbnVTY2VuZV0g6K6+572u5pys5Zyw5qih5byP5aSx6LSlOiAke2UubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDpgZPlhbfmtYvor5XmjInpkq7ngrnlh7vkuovku7ZcclxuICAgICAqL1xyXG4gICAgYXN5bmMgb25BZGRJdGVtVGVzdENsaWNrKCkge1xyXG4gICAgICAgIGNvbnN0IEl0ZW1EYXRhTWFuYWdlciA9IHJlcXVpcmUoXCJJdGVtRGF0YU1hbmFnZXJcIik7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIOa3u+WKoDEw5Liq5Y2H57qn6I2v5rC0XHJcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCBJdGVtRGF0YU1hbmFnZXIuYWRkSXRlbShcInVwZ3JhZGVfcG90aW9uXCIsIDEwKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDojrflj5blvZPliY3mlbDph49cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgSXRlbURhdGFNYW5hZ2VyLmdldEl0ZW1Db3VudChcInVwZ3JhZGVfcG90aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKGBbTWFpbk1lbnVTY2VuZV0g4pyTIOW3sua3u+WKoDEw5Liq5Y2H57qn6I2v5rC077yM5b2T5YmN5oC75pWwOiAke2NvdW50fWApO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYOW3sua3u+WKoDEw5Liq5Y2H57qn6I2v5rC077yBXFxu5b2T5YmN5oC75pWwOiAke2NvdW50fWApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJbTWFpbk1lbnVTY2VuZV0g4pyXIOa3u+WKoOWNh+e6p+iNr+awtOWksei0pVwiKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwi5re75Yqg5Y2H57qn6I2v5rC05aSx6LSl77yM6K+35p+l55yL5o6n5Yi25Y+w5pel5b+XXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoYFtNYWluTWVudVNjZW5lXSDmt7vliqDpgZPlhbfml7blj5HnlJ/plJnor686ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgYWxlcnQoYOa3u+WKoOmBk+WFt+Wksei0pTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDph5HluIHmtYvor5XmjInpkq7ngrnlh7vkuovku7ZcclxuICAgICAqL1xyXG4gICAgYXN5bmMgb25BZGRDb2luVGVzdENsaWNrKCkge1xyXG4gICAgICAgIGNvbnN0IENvaW5NYW5hZ2VyID0gcmVxdWlyZShcIkNvaW5NYW5hZ2VyXCIpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBhbW91bnQgPSAxMDAwOyAvLyDmr4/mrKHlop7liqAxMDAw6YeR5biBXHJcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCBDb2luTWFuYWdlci5hZGRDb2lucyhhbW91bnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIC8vIOiOt+WPluW9k+WJjemHkeW4geaVsOmHj1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29pbnMgPSBhd2FpdCBDb2luTWFuYWdlci5nZXRDb2lucygpO1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKGBbTWFpbk1lbnVTY2VuZV0g4pyTIOW3suWinuWKoCAke2Ftb3VudH0g6YeR5biB77yM5b2T5YmN6YeR5biBOiAke2NvaW5zfWApO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYOW3suWinuWKoCAke2Ftb3VudH0g6YeR5biB77yBXFxu5b2T5YmN6YeR5biBOiAke2NvaW5zfWApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJbTWFpbk1lbnVTY2VuZV0g4pyXIOWinuWKoOmHkeW4geWksei0pVwiKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwi5aKe5Yqg6YeR5biB5aSx6LSl77yM6K+35p+l55yL5o6n5Yi25Y+w5pel5b+XXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoYFtNYWluTWVudVNjZW5lXSDlop7liqDph5HluIHml7blj5HnlJ/plJnor686ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgYWxlcnQoYOWinuWKoOmHkeW4geWksei0pTogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDllYbln47mjInpkq7ngrnlh7vkuovku7ZcclxuICAgICAqL1xyXG4gICAgb25TaG9wQ2xpY2soKSB7XHJcbiAgICAgICAgY2MubG9nKGBbTWFpbk1lbnVTY2VuZV0g5omT5byA5ZWG5Z+O77yM5Zy65pmv5ZCN56ewOiAke3RoaXMuc2hvcFNjZW5lTmFtZX1gKTtcclxuICAgICAgICBpZiAodGhpcy5zaG9wU2NlbmVOYW1lKSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSh0aGlzLnNob3BTY2VuZU5hbWUsIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtNYWluTWVudVNjZW5lXSDliqDovb3llYbln47lnLrmma/lpLHotKU6ICR7ZXJyb3J9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtNYWluTWVudVNjZW5lXSDor7fmo4Dmn6XlnLrmma/lkI3np7DmmK/lkKbmraPnoa46ICR7dGhpcy5zaG9wU2NlbmVOYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbTWFpbk1lbnVTY2VuZV0g6K+356Gu5L+d5Zy65pmv5paH5Lu25a2Y5Zyo5LqO6aG555uu5LitYCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW01haW5NZW51U2NlbmVdIOaIkOWKn+WKoOi9veWVhuWfjuWcuuaZrzogJHt0aGlzLnNob3BTY2VuZU5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCJbTWFpbk1lbnVTY2VuZV0g5pyq6K6+572uc2hvcFNjZW5lTmFtZe+8jOaXoOazlei3s+i9rOWIsOWVhuWfjuWcuuaZr1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuIl19