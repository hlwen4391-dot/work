
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/system/CharacterDataAdapter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab3fevAIthJMK50PlZ8j6Mg', 'CharacterDataAdapter');
// Scripts/system/CharacterDataAdapter.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * 角色数据适配器
 * 抽象数据存储层，支持本地存储和服务器存储的切换
 * 
 * 使用适配器模式，可以轻松切换数据源：
 * - 本地模式：使用 localStorage
 * - 服务器模式：使用 HTTP API
 * - 混合模式：本地缓存 + 服务器同步
 */
var CharacterDataAdapter = {
  // 存储模式：'local' | 'server' | 'hybrid'
  storageMode: "local",
  // 默认使用本地存储

  // 服务器API配置
  serverConfig: {
    baseURL: "https://your-api-server.com/api",
    baseURLForAll: null,
    // 获取所有角色数据的服务器地址（如果为null，则使用baseURL）
    timeout: 5000,
    // 请求超时时间（毫秒）
    retryCount: 3,
    // 失败重试次数
    // 角色数据的API路径
    characterDataPath: "/characters",
    // 角色数据路径，例如：/api/characters
    // 请求头（用于身份验证等）
    headers: null
  },
  /**
   * 设置存储模式
   * @param {string} mode - 'local' | 'server' | 'hybrid'
   */
  setStorageMode: function setStorageMode(mode) {
    if (['local', 'server', 'hybrid'].includes(mode)) {
      this.storageMode = mode;
      cc.log("[CharacterDataAdapter] \u5B58\u50A8\u6A21\u5F0F\u5DF2\u5207\u6362\u4E3A: " + mode);
    } else {
      cc.warn("[CharacterDataAdapter] \u65E0\u6548\u7684\u5B58\u50A8\u6A21\u5F0F: " + mode);
    }
  },
  /**
   * 保存角色数据（适配器方法）
   * @param {string} characterName - 角色名称
   * @param {Object} data - 角色数据 { level, exp, baseHp, ... }
   * @returns {Promise<boolean>|boolean} 是否保存成功
   */
  saveCharacterData: function saveCharacterData(characterName, data) {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = _this.storageMode;
            _context.next = _context.t0 === "local" ? 3 : _context.t0 === "server" ? 4 : _context.t0 === "hybrid" ? 7 : 11;
            break;
          case 3:
            return _context.abrupt("return", _this._saveLocal(characterName, data));
          case 4:
            _context.next = 6;
            return _this._saveServer(characterName, data);
          case 6:
            return _context.abrupt("return", _context.sent);
          case 7:
            // 先保存到本地（快速响应），然后同步到服务器
            _this._saveLocal(characterName, data);
            _context.next = 10;
            return _this._saveServer(characterName, data);
          case 10:
            return _context.abrupt("return", _context.sent);
          case 11:
            return _context.abrupt("return", _this._saveLocal(characterName, data));
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  /**
   * 加载所有角色数据（适配器方法）
   * @returns {Promise<Object>|Object} 所有角色数据 { characterName: data, ... }
   */
  loadAllCharacterData: function loadAllCharacterData() {
    var _this2 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var serverData;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = _this2.storageMode;
            _context2.next = _context2.t0 === "local" ? 3 : _context2.t0 === "server" ? 4 : _context2.t0 === "hybrid" ? 7 : 19;
            break;
          case 3:
            return _context2.abrupt("return", _this2._loadAllLocal());
          case 4:
            _context2.next = 6;
            return _this2._loadAllServer();
          case 6:
            return _context2.abrupt("return", _context2.sent);
          case 7:
            _context2.prev = 7;
            _context2.next = 10;
            return _this2._loadAllServer();
          case 10:
            serverData = _context2.sent;
            // 同步到本地缓存
            if (serverData) {
              Object.keys(serverData).forEach(function (characterName) {
                _this2._saveLocal(characterName, serverData[characterName]);
              });
            }
            return _context2.abrupt("return", serverData);
          case 15:
            _context2.prev = 15;
            _context2.t1 = _context2["catch"](7);
            cc.warn("[CharacterDataAdapter] \u670D\u52A1\u5668\u52A0\u8F7D\u5931\u8D25\uFF0C\u4F7F\u7528\u672C\u5730\u7F13\u5B58: " + _context2.t1.message);
            return _context2.abrupt("return", _this2._loadAllLocal());
          case 19:
            return _context2.abrupt("return", _this2._loadAllLocal());
          case 20:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[7, 15]]);
    }))();
  },
  /**
   * 加载角色数据（适配器方法）
   * @param {string} characterName - 角色名称
   * @returns {Promise<Object|null>|Object|null} 角色数据或null
   */
  loadCharacterData: function loadCharacterData(characterName) {
    var _this3 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var serverData;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.t0 = _this3.storageMode;
            _context3.next = _context3.t0 === "local" ? 3 : _context3.t0 === "server" ? 4 : _context3.t0 === "hybrid" ? 7 : 19;
            break;
          case 3:
            return _context3.abrupt("return", _this3._loadLocal(characterName));
          case 4:
            _context3.next = 6;
            return _this3._loadServer(characterName);
          case 6:
            return _context3.abrupt("return", _context3.sent);
          case 7:
            _context3.prev = 7;
            _context3.next = 10;
            return _this3._loadServer(characterName);
          case 10:
            serverData = _context3.sent;
            // 同步到本地缓存
            _this3._saveLocal(characterName, serverData);
            return _context3.abrupt("return", serverData);
          case 15:
            _context3.prev = 15;
            _context3.t1 = _context3["catch"](7);
            cc.warn("[CharacterDataAdapter] \u670D\u52A1\u5668\u52A0\u8F7D\u5931\u8D25\uFF0C\u4F7F\u7528\u672C\u5730\u7F13\u5B58: " + _context3.t1.message);
            return _context3.abrupt("return", _this3._loadLocal(characterName));
          case 19:
            return _context3.abrupt("return", _this3._loadLocal(characterName));
          case 20:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[7, 15]]);
    }))();
  },
  /**
   * 本地存储：保存数据
   * @private
   */
  _saveLocal: function _saveLocal(characterName, data) {
    try {
      var key = "character_data_" + characterName;
      var json = JSON.stringify(data);
      cc.sys.localStorage.setItem(key, json);
      return true;
    } catch (e) {
      cc.error("[CharacterDataAdapter] \u672C\u5730\u4FDD\u5B58\u5931\u8D25: " + e.message);
      return false;
    }
  },
  /**
   * 本地存储：加载数据
   * @private
   */
  _loadLocal: function _loadLocal(characterName) {
    try {
      var key = "character_data_" + characterName;
      var json = cc.sys.localStorage.getItem(key);
      return json ? JSON.parse(json) : null;
    } catch (e) {
      cc.error("[CharacterDataAdapter] \u672C\u5730\u52A0\u8F7D\u5931\u8D25: " + e.message);
      return null;
    }
  },
  /**
   * 本地存储：加载所有数据
   * @private
   */
  _loadAllLocal: function _loadAllLocal() {
    var _this4 = this;
    var result = {};
    try {
      var keys = Object.keys(cc.sys.localStorage);
      keys.forEach(function (key) {
        if (key.startsWith("character_data_")) {
          var characterName = key.replace("character_data_", "");
          var data = _this4._loadLocal(characterName);
          if (data) {
            result[characterName] = data;
          }
        }
      });
    } catch (e) {
      cc.error("[CharacterDataAdapter] \u672C\u5730\u52A0\u8F7D\u6240\u6709\u6570\u636E\u5931\u8D25: " + e.message);
    }
    return result;
  },
  /**
   * 服务器存储：保存数据
   * @private
   */
  _saveServer: function _saveServer(characterName, data) {
    var _this5 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var url, response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            url = "" + _this5.serverConfig.baseURL + _this5.serverConfig.characterDataPath + "/" + characterName;
            _context4.next = 4;
            return _this5._httpRequest('PUT', url, data);
          case 4:
            response = _context4.sent;
            if (!response.success) {
              _context4.next = 10;
              break;
            }
            cc.log("[CharacterDataAdapter] \u670D\u52A1\u5668\u4FDD\u5B58\u6210\u529F: " + characterName);
            return _context4.abrupt("return", true);
          case 10:
            throw new Error(response.message || "服务器保存失败");
          case 11:
            _context4.next = 17;
            break;
          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](0);
            cc.error("[CharacterDataAdapter] \u670D\u52A1\u5668\u4FDD\u5B58\u5931\u8D25: " + _context4.t0.message);
            throw _context4.t0;
          case 17:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 13]]);
    }))();
  },
  /**
   * 服务器存储：加载数据
   * @private
   */
  _loadServer: function _loadServer(characterName) {
    var _this6 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var url, response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            url = "" + _this6.serverConfig.baseURL + _this6.serverConfig.characterDataPath + "/" + characterName;
            _context5.next = 4;
            return _this6._httpRequest('GET', url);
          case 4:
            response = _context5.sent;
            if (!(response.success && response.data)) {
              _context5.next = 10;
              break;
            }
            cc.log("[CharacterDataAdapter] \u670D\u52A1\u5668\u52A0\u8F7D\u6210\u529F: " + characterName);
            return _context5.abrupt("return", response.data);
          case 10:
            if (!(response.success && !response.data)) {
              _context5.next = 14;
              break;
            }
            return _context5.abrupt("return", null);
          case 14:
            throw new Error(response.message || "服务器加载失败");
          case 15:
            _context5.next = 21;
            break;
          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](0);
            cc.error("[CharacterDataAdapter] \u670D\u52A1\u5668\u52A0\u8F7D\u5931\u8D25: " + _context5.t0.message);
            throw _context5.t0;
          case 21:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 17]]);
    }))();
  },
  /**
   * 服务器存储：加载所有数据
   * @private
   */
  _loadAllServer: function _loadAllServer() {
    var _this7 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var baseURL, url, response;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            // 如果配置了baseURLForAll，使用它；否则使用baseURL
            baseURL = _this7.serverConfig.baseURLForAll || _this7.serverConfig.baseURL;
            url = "" + baseURL + _this7.serverConfig.characterDataPath;
            _context6.next = 5;
            return _this7._httpRequest('GET', url);
          case 5:
            response = _context6.sent;
            if (!(response.success && response.data)) {
              _context6.next = 11;
              break;
            }
            cc.log("[CharacterDataAdapter] \u670D\u52A1\u5668\u52A0\u8F7D\u6240\u6709\u89D2\u8272\u6570\u636E\u6210\u529F");
            return _context6.abrupt("return", response.data || {});
          case 11:
            throw new Error(response.message || "服务器加载失败");
          case 12:
            _context6.next = 18;
            break;
          case 14:
            _context6.prev = 14;
            _context6.t0 = _context6["catch"](0);
            cc.error("[CharacterDataAdapter] \u670D\u52A1\u5668\u52A0\u8F7D\u6240\u6709\u6570\u636E\u5931\u8D25: " + _context6.t0.message);
            throw _context6.t0;
          case 18:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 14]]);
    }))();
  },
  /**
   * HTTP请求封装（支持重试）
   * @private
   * @param {string} method - HTTP方法
   * @param {string} url - 请求URL
   * @param {Object} data - 请求数据
   * @returns {Promise<Object>} 响应数据
   */
  _httpRequest: function _httpRequest(method, url, data) {
    var _this8 = this;
    if (data === void 0) {
      data = null;
    }
    return new Promise(function (resolve, reject) {
      var retryCount = 0;
      var doRequest = function doRequest() {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        // 添加自定义请求头（用于身份验证等）
        if (_this8.serverConfig.headers) {
          Object.keys(_this8.serverConfig.headers).forEach(function (key) {
            xhr.setRequestHeader(key, _this8.serverConfig.headers[key]);
          });
        }

        // 设置超时
        xhr.timeout = _this8.serverConfig.timeout;
        xhr.onload = function () {
          if (xhr.status >= 200 && xhr.status < 300) {
            try {
              var response = JSON.parse(xhr.responseText);
              resolve(response);
            } catch (e) {
              resolve({
                success: true,
                data: xhr.responseText
              });
            }
          } else {
            if (retryCount < _this8.serverConfig.retryCount) {
              retryCount++;
              cc.log("[CharacterDataAdapter] \u8BF7\u6C42\u5931\u8D25\uFF0C\u91CD\u8BD5 " + retryCount + "/" + _this8.serverConfig.retryCount);
              setTimeout(doRequest, 1000 * retryCount); // 递增延迟
            } else {
              reject(new Error("HTTP " + xhr.status + ": " + xhr.statusText));
            }
          }
        };
        xhr.onerror = function () {
          if (retryCount < _this8.serverConfig.retryCount) {
            retryCount++;
            cc.log("[CharacterDataAdapter] \u7F51\u7EDC\u9519\u8BEF\uFF0C\u91CD\u8BD5 " + retryCount + "/" + _this8.serverConfig.retryCount);
            setTimeout(doRequest, 1000 * retryCount);
          } else {
            reject(new Error("网络请求失败"));
          }
        };
        xhr.ontimeout = function () {
          if (retryCount < _this8.serverConfig.retryCount) {
            retryCount++;
            cc.log("[CharacterDataAdapter] \u8BF7\u6C42\u8D85\u65F6\uFF0C\u91CD\u8BD5 " + retryCount + "/" + _this8.serverConfig.retryCount);
            setTimeout(doRequest, 1000 * retryCount);
          } else {
            reject(new Error("请求超时"));
          }
        };
        if (data) {
          xhr.send(JSON.stringify(data));
        } else {
          xhr.send();
        }
      };
      doRequest();
    });
  }
};
module.exports = CharacterDataAdapter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxDaGFyYWN0ZXJEYXRhQWRhcHRlci5qcyJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsIkNoYXJhY3RlckRhdGFBZGFwdGVyIiwic3RvcmFnZU1vZGUiLCJzZXJ2ZXJDb25maWciLCJiYXNlVVJMIiwiYmFzZVVSTEZvckFsbCIsInRpbWVvdXQiLCJyZXRyeUNvdW50IiwiY2hhcmFjdGVyRGF0YVBhdGgiLCJoZWFkZXJzIiwic2V0U3RvcmFnZU1vZGUiLCJtb2RlIiwiaW5jbHVkZXMiLCJjYyIsImxvZyIsIndhcm4iLCJzYXZlQ2hhcmFjdGVyRGF0YSIsImNoYXJhY3Rlck5hbWUiLCJkYXRhIiwiX3RoaXMiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInQwIiwiX3NhdmVMb2NhbCIsIl9zYXZlU2VydmVyIiwibG9hZEFsbENoYXJhY3RlckRhdGEiLCJfdGhpczIiLCJfY2FsbGVlMiIsInNlcnZlckRhdGEiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJfbG9hZEFsbExvY2FsIiwiX2xvYWRBbGxTZXJ2ZXIiLCJ0MSIsIm1lc3NhZ2UiLCJsb2FkQ2hhcmFjdGVyRGF0YSIsIl90aGlzMyIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiX2xvYWRMb2NhbCIsIl9sb2FkU2VydmVyIiwianNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZSIsImdldEl0ZW0iLCJwYXJzZSIsIl90aGlzNCIsInN0YXJ0c1dpdGgiLCJyZXBsYWNlIiwiX3RoaXM1IiwiX2NhbGxlZTQiLCJ1cmwiLCJyZXNwb25zZSIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsIl9odHRwUmVxdWVzdCIsInN1Y2Nlc3MiLCJfdGhpczYiLCJfY2FsbGVlNSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsIl90aGlzNyIsIl9jYWxsZWU2IiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwiX3RoaXM4IiwiZG9SZXF1ZXN0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ubG9hZCIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsInNldFRpbWVvdXQiLCJz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QjtRQUNKLENBQUM7UUFFRHVKLEdBQUcsQ0FBQ1UsU0FBUyxHQUFHLFlBQU07VUFDbEIsSUFBSTVFLFVBQVUsR0FBR2dFLE1BQUksQ0FBQ3BFLFlBQVksQ0FBQ0ksVUFBVSxFQUFFO1lBQzNDQSxVQUFVLEVBQUU7WUFDWk0sRUFBRSxDQUFDQyxHQUFHLHdFQUFtQ1AsVUFBVSxTQUFJZ0UsTUFBSSxDQUFDcEUsWUFBWSxDQUFDSSxVQUFVLENBQUc7WUFDdEZ5RSxVQUFVLENBQUNSLFNBQVMsRUFBRSxJQUFJLEdBQUdqRSxVQUFVLENBQUM7VUFDNUMsQ0FBQyxNQUFNO1lBQ0gvRixNQUFNLENBQUMsSUFBSVUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1VBQzdCO1FBQ0osQ0FBQztRQUVELElBQUlnRyxJQUFJLEVBQUU7VUFDTnVELEdBQUcsQ0FBQ1csSUFBSSxDQUFDeEMsSUFBSSxDQUFDQyxTQUFTLENBQUMzQixJQUFJLENBQUMsQ0FBQztRQUNsQyxDQUFDLE1BQU07VUFDSHVELEdBQUcsQ0FBQ1csSUFBSSxFQUFFO1FBQ2Q7TUFDSixDQUFDO01BRURaLFNBQVMsRUFBRTtJQUNmLENBQUMsQ0FBQztFQUNOO0FBQ0osQ0FBQztBQUVEYSxNQUFNLENBQUN2TyxPQUFPLEdBQUdtSixvQkFBb0IiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDop5LoibLmlbDmja7pgILphY3lmahcclxuICog5oq96LGh5pWw5o2u5a2Y5YKo5bGC77yM5pSv5oyB5pys5Zyw5a2Y5YKo5ZKM5pyN5Yqh5Zmo5a2Y5YKo55qE5YiH5o2iXHJcbiAqIFxyXG4gKiDkvb/nlKjpgILphY3lmajmqKHlvI/vvIzlj6/ku6Xovbvmnb7liIfmjaLmlbDmja7mupDvvJpcclxuICogLSDmnKzlnLDmqKHlvI/vvJrkvb/nlKggbG9jYWxTdG9yYWdlXHJcbiAqIC0g5pyN5Yqh5Zmo5qih5byP77ya5L2/55SoIEhUVFAgQVBJXHJcbiAqIC0g5re35ZCI5qih5byP77ya5pys5Zyw57yT5a2YICsg5pyN5Yqh5Zmo5ZCM5q2lXHJcbiAqL1xyXG52YXIgQ2hhcmFjdGVyRGF0YUFkYXB0ZXIgPSB7XHJcbiAgICAvLyDlrZjlgqjmqKHlvI/vvJonbG9jYWwnIHwgJ3NlcnZlcicgfCAnaHlicmlkJ1xyXG4gICAgc3RvcmFnZU1vZGU6IFwibG9jYWxcIiwgLy8g6buY6K6k5L2/55So5pys5Zyw5a2Y5YKoXHJcblxyXG4gICAgLy8g5pyN5Yqh5ZmoQVBJ6YWN572uXHJcbiAgICBzZXJ2ZXJDb25maWc6IHtcclxuICAgICAgICBiYXNlVVJMOiBcImh0dHBzOi8veW91ci1hcGktc2VydmVyLmNvbS9hcGlcIixcclxuICAgICAgICBiYXNlVVJMRm9yQWxsOiBudWxsLCAvLyDojrflj5bmiYDmnInop5LoibLmlbDmja7nmoTmnI3liqHlmajlnLDlnYDvvIjlpoLmnpzkuLpudWxs77yM5YiZ5L2/55SoYmFzZVVSTO+8iVxyXG4gICAgICAgIHRpbWVvdXQ6IDUwMDAsIC8vIOivt+axgui2heaXtuaXtumXtO+8iOavq+enku+8iVxyXG4gICAgICAgIHJldHJ5Q291bnQ6IDMsICAvLyDlpLHotKXph43or5XmrKHmlbBcclxuICAgICAgICAvLyDop5LoibLmlbDmja7nmoRBUEnot6/lvoRcclxuICAgICAgICBjaGFyYWN0ZXJEYXRhUGF0aDogXCIvY2hhcmFjdGVyc1wiLCAvLyDop5LoibLmlbDmja7ot6/lvoTvvIzkvovlpoLvvJovYXBpL2NoYXJhY3RlcnNcclxuICAgICAgICAvLyDor7fmsYLlpLTvvIjnlKjkuo7ouqvku73pqozor4HnrYnvvIlcclxuICAgICAgICBoZWFkZXJzOiBudWxsXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u5a2Y5YKo5qih5byPXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZSAtICdsb2NhbCcgfCAnc2VydmVyJyB8ICdoeWJyaWQnXHJcbiAgICAgKi9cclxuICAgIHNldFN0b3JhZ2VNb2RlKG1vZGUpIHtcclxuICAgICAgICBpZiAoWydsb2NhbCcsICdzZXJ2ZXInLCAnaHlicmlkJ10uaW5jbHVkZXMobW9kZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlTW9kZSA9IG1vZGU7XHJcbiAgICAgICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlckRhdGFBZGFwdGVyXSDlrZjlgqjmqKHlvI/lt7LliIfmjaLkuLo6ICR7bW9kZX1gKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy53YXJuKGBbQ2hhcmFjdGVyRGF0YUFkYXB0ZXJdIOaXoOaViOeahOWtmOWCqOaooeW8jzogJHttb2RlfWApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkv53lrZjop5LoibLmlbDmja7vvIjpgILphY3lmajmlrnms5XvvIlcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJOYW1lIC0g6KeS6Imy5ZCN56ewXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIOinkuiJsuaVsOaNriB7IGxldmVsLCBleHAsIGJhc2VIcCwgLi4uIH1cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fGJvb2xlYW59IOaYr+WQpuS/neWtmOaIkOWKn1xyXG4gICAgICovXHJcbiAgICBhc3luYyBzYXZlQ2hhcmFjdGVyRGF0YShjaGFyYWN0ZXJOYW1lLCBkYXRhKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0b3JhZ2VNb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsb2NhbFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVMb2NhbChjaGFyYWN0ZXJOYW1lLCBkYXRhKTtcclxuICAgICAgICAgICAgY2FzZSBcInNlcnZlclwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX3NhdmVTZXJ2ZXIoY2hhcmFjdGVyTmFtZSwgZGF0YSk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJoeWJyaWRcIjpcclxuICAgICAgICAgICAgICAgIC8vIOWFiOS/neWtmOWIsOacrOWcsO+8iOW/q+mAn+WTjeW6lO+8ie+8jOeEtuWQjuWQjOatpeWIsOacjeWKoeWZqFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2F2ZUxvY2FsKGNoYXJhY3Rlck5hbWUsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX3NhdmVTZXJ2ZXIoY2hhcmFjdGVyTmFtZSwgZGF0YSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZUxvY2FsKGNoYXJhY3Rlck5hbWUsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3miYDmnInop5LoibLmlbDmja7vvIjpgILphY3lmajmlrnms5XvvIlcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD58T2JqZWN0fSDmiYDmnInop5LoibLmlbDmja4geyBjaGFyYWN0ZXJOYW1lOiBkYXRhLCAuLi4gfVxyXG4gICAgICovXHJcbiAgICBhc3luYyBsb2FkQWxsQ2hhcmFjdGVyRGF0YSgpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RvcmFnZU1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImxvY2FsXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEFsbExvY2FsKCk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzZXJ2ZXJcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9sb2FkQWxsU2VydmVyKCk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJoeWJyaWRcIjpcclxuICAgICAgICAgICAgICAgIC8vIOWFiOS7juacjeWKoeWZqOWKoOi9ve+8jOWksei0peWImeS9v+eUqOacrOWcsOe8k+WtmFxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXJ2ZXJEYXRhID0gYXdhaXQgdGhpcy5fbG9hZEFsbFNlcnZlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWQjOatpeWIsOacrOWcsOe8k+WtmFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXJ2ZXJEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNlcnZlckRhdGEpLmZvckVhY2goY2hhcmFjdGVyTmFtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zYXZlTG9jYWwoY2hhcmFjdGVyTmFtZSwgc2VydmVyRGF0YVtjaGFyYWN0ZXJOYW1lXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VydmVyRGF0YTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy53YXJuKGBbQ2hhcmFjdGVyRGF0YUFkYXB0ZXJdIOacjeWKoeWZqOWKoOi9veWksei0pe+8jOS9v+eUqOacrOWcsOe8k+WtmDogJHtlLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRBbGxMb2NhbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRBbGxMb2NhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3op5LoibLmlbDmja7vvIjpgILphY3lmajmlrnms5XvvIlcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJOYW1lIC0g6KeS6Imy5ZCN56ewXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3R8bnVsbD58T2JqZWN0fG51bGx9IOinkuiJsuaVsOaNruaIlm51bGxcclxuICAgICAqL1xyXG4gICAgYXN5bmMgbG9hZENoYXJhY3RlckRhdGEoY2hhcmFjdGVyTmFtZSkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdG9yYWdlTW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwibG9jYWxcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkTG9jYWwoY2hhcmFjdGVyTmFtZSk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzZXJ2ZXJcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9sb2FkU2VydmVyKGNoYXJhY3Rlck5hbWUpO1xyXG4gICAgICAgICAgICBjYXNlIFwiaHlicmlkXCI6XHJcbiAgICAgICAgICAgICAgICAvLyDlhYjku47mnI3liqHlmajliqDovb3vvIzlpLHotKXliJnkvb/nlKjmnKzlnLDnvJPlrZhcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VydmVyRGF0YSA9IGF3YWl0IHRoaXMuX2xvYWRTZXJ2ZXIoY2hhcmFjdGVyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5ZCM5q2l5Yiw5pys5Zyw57yT5a2YXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2F2ZUxvY2FsKGNoYXJhY3Rlck5hbWUsIHNlcnZlckRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2ZXJEYXRhO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLndhcm4oYFtDaGFyYWN0ZXJEYXRhQWRhcHRlcl0g5pyN5Yqh5Zmo5Yqg6L295aSx6LSl77yM5L2/55So5pys5Zyw57yT5a2YOiAke2UubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZExvY2FsKGNoYXJhY3Rlck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRMb2NhbChjaGFyYWN0ZXJOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pys5Zyw5a2Y5YKo77ya5L+d5a2Y5pWw5o2uXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfc2F2ZUxvY2FsKGNoYXJhY3Rlck5hbWUsIGRhdGEpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBcImNoYXJhY3Rlcl9kYXRhX1wiICsgY2hhcmFjdGVyTmFtZTtcclxuICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBqc29uKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjYy5lcnJvcihgW0NoYXJhY3RlckRhdGFBZGFwdGVyXSDmnKzlnLDkv53lrZjlpLHotKU6ICR7ZS5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOacrOWcsOWtmOWCqO+8muWKoOi9veaVsOaNrlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2xvYWRMb2NhbChjaGFyYWN0ZXJOYW1lKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gXCJjaGFyYWN0ZXJfZGF0YV9cIiArIGNoYXJhY3Rlck5hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgcmV0dXJuIGpzb24gPyBKU09OLnBhcnNlKGpzb24pIDogbnVsbDtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKGBbQ2hhcmFjdGVyRGF0YUFkYXB0ZXJdIOacrOWcsOWKoOi9veWksei0pTogJHtlLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnKzlnLDlrZjlgqjvvJrliqDovb3miYDmnInmlbDmja5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9sb2FkQWxsTG9jYWwoKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNjLnN5cy5sb2NhbFN0b3JhZ2UpO1xyXG4gICAgICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChcImNoYXJhY3Rlcl9kYXRhX1wiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJhY3Rlck5hbWUgPSBrZXkucmVwbGFjZShcImNoYXJhY3Rlcl9kYXRhX1wiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5fbG9hZExvY2FsKGNoYXJhY3Rlck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtjaGFyYWN0ZXJOYW1lXSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKGBbQ2hhcmFjdGVyRGF0YUFkYXB0ZXJdIOacrOWcsOWKoOi9veaJgOacieaVsOaNruWksei0pTogJHtlLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pyN5Yqh5Zmo5a2Y5YKo77ya5L+d5a2Y5pWw5o2uXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBhc3luYyBfc2F2ZVNlcnZlcihjaGFyYWN0ZXJOYW1lLCBkYXRhKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy5zZXJ2ZXJDb25maWcuYmFzZVVSTH0ke3RoaXMuc2VydmVyQ29uZmlnLmNoYXJhY3RlckRhdGFQYXRofS8ke2NoYXJhY3Rlck5hbWV9YDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5faHR0cFJlcXVlc3QoJ1BVVCcsIHVybCwgZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyRGF0YUFkYXB0ZXJdIOacjeWKoeWZqOS/neWtmOaIkOWKnzogJHtjaGFyYWN0ZXJOYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UubWVzc2FnZSB8fCBcIuacjeWKoeWZqOS/neWtmOWksei0pVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoYFtDaGFyYWN0ZXJEYXRhQWRhcHRlcl0g5pyN5Yqh5Zmo5L+d5a2Y5aSx6LSlOiAke2UubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pyN5Yqh5Zmo5a2Y5YKo77ya5Yqg6L295pWw5o2uXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBhc3luYyBfbG9hZFNlcnZlcihjaGFyYWN0ZXJOYW1lKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy5zZXJ2ZXJDb25maWcuYmFzZVVSTH0ke3RoaXMuc2VydmVyQ29uZmlnLmNoYXJhY3RlckRhdGFQYXRofS8ke2NoYXJhY3Rlck5hbWV9YDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5faHR0cFJlcXVlc3QoJ0dFVCcsIHVybCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyAmJiByZXNwb25zZS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJEYXRhQWRhcHRlcl0g5pyN5Yqh5Zmo5Yqg6L295oiQ5YqfOiAke2NoYXJhY3Rlck5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdWNjZXNzICYmICFyZXNwb25zZS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmnI3liqHlmajov5Tlm57miJDlip/kvYbmsqHmnInmlbDmja7vvIzor7TmmI7op5LoibLkuI3lrZjlnKhcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLm1lc3NhZ2UgfHwgXCLmnI3liqHlmajliqDovb3lpLHotKVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKGBbQ2hhcmFjdGVyRGF0YUFkYXB0ZXJdIOacjeWKoeWZqOWKoOi9veWksei0pTogJHtlLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOacjeWKoeWZqOWtmOWCqO+8muWKoOi9veaJgOacieaVsOaNrlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgYXN5bmMgX2xvYWRBbGxTZXJ2ZXIoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8g5aaC5p6c6YWN572u5LqGYmFzZVVSTEZvckFsbO+8jOS9v+eUqOWug++8m+WQpuWImeS9v+eUqGJhc2VVUkxcclxuICAgICAgICAgICAgY29uc3QgYmFzZVVSTCA9IHRoaXMuc2VydmVyQ29uZmlnLmJhc2VVUkxGb3JBbGwgfHwgdGhpcy5zZXJ2ZXJDb25maWcuYmFzZVVSTDtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7YmFzZVVSTH0ke3RoaXMuc2VydmVyQ29uZmlnLmNoYXJhY3RlckRhdGFQYXRofWA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuX2h0dHBSZXF1ZXN0KCdHRVQnLCB1cmwpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgJiYgcmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyRGF0YUFkYXB0ZXJdIOacjeWKoeWZqOWKoOi9veaJgOacieinkuiJsuaVsOaNruaIkOWKn2ApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEgfHwge307XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UubWVzc2FnZSB8fCBcIuacjeWKoeWZqOWKoOi9veWksei0pVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoYFtDaGFyYWN0ZXJEYXRhQWRhcHRlcl0g5pyN5Yqh5Zmo5Yqg6L295omA5pyJ5pWw5o2u5aSx6LSlOiAke2UubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSFRUUOivt+axguWwgeijhe+8iOaUr+aMgemHjeivle+8iVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgLSBIVFRQ5pa55rOVXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0g6K+35rGCVVJMXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIOivt+axguaVsOaNrlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0g5ZON5bqU5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIF9odHRwUmVxdWVzdChtZXRob2QsIHVybCwgZGF0YSA9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmV0cnlDb3VudCA9IDA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkb1JlcXVlc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyDmt7vliqDoh6rlrprkuYnor7fmsYLlpLTvvIjnlKjkuo7ouqvku73pqozor4HnrYnvvIlcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlcnZlckNvbmZpZy5oZWFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5zZXJ2ZXJDb25maWcuaGVhZGVycykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIHRoaXMuc2VydmVyQ29uZmlnLmhlYWRlcnNba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g6K6+572u6LaF5pe2XHJcbiAgICAgICAgICAgICAgICB4aHIudGltZW91dCA9IHRoaXMuc2VydmVyQ29uZmlnLnRpbWVvdXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB4aHIucmVzcG9uc2VUZXh0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJldHJ5Q291bnQgPCB0aGlzLnNlcnZlckNvbmZpZy5yZXRyeUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRyeUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJEYXRhQWRhcHRlcl0g6K+35rGC5aSx6LSl77yM6YeN6K+VICR7cmV0cnlDb3VudH0vJHt0aGlzLnNlcnZlckNvbmZpZy5yZXRyeUNvdW50fWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChkb1JlcXVlc3QsIDEwMDAgKiByZXRyeUNvdW50KTsgLy8g6YCS5aKe5bu26L+fXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBIVFRQICR7eGhyLnN0YXR1c306ICR7eGhyLnN0YXR1c1RleHR9YCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB4aHIub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmV0cnlDb3VudCA8IHRoaXMuc2VydmVyQ29uZmlnLnJldHJ5Q291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0cnlDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJEYXRhQWRhcHRlcl0g572R57uc6ZSZ6K+v77yM6YeN6K+VICR7cmV0cnlDb3VudH0vJHt0aGlzLnNlcnZlckNvbmZpZy5yZXRyeUNvdW50fWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGRvUmVxdWVzdCwgMTAwMCAqIHJldHJ5Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCLnvZHnu5zor7fmsYLlpLHotKVcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgeGhyLm9udGltZW91dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmV0cnlDb3VudCA8IHRoaXMuc2VydmVyQ29uZmlnLnJldHJ5Q291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0cnlDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJEYXRhQWRhcHRlcl0g6K+35rGC6LaF5pe277yM6YeN6K+VICR7cmV0cnlDb3VudH0vJHt0aGlzLnNlcnZlckNvbmZpZy5yZXRyeUNvdW50fWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGRvUmVxdWVzdCwgMTAwMCAqIHJldHJ5Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCLor7fmsYLotoXml7ZcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBkb1JlcXVlc3QoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyRGF0YUFkYXB0ZXI7XHJcbiJdfQ==