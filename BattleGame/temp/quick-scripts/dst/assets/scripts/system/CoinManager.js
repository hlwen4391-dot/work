
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/system/CoinManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8b1d8cH8khECIf6m10wcut/', 'CoinManager');
// Scripts/system/CoinManager.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * 金币系统管理器
 * 统一管理金币的增减，支持本地存储和服务器存储
 */
var ServerConfig = require("ServerConfig");
var CoinManager = {
  // 存储键
  COIN_KEY: "player_coins",
  // 默认金币数量
  DEFAULT_COINS: 1000,
  /**
   * 获取当前金币数量
   * @returns {Promise<number>|number} 金币数量（服务器模式下返回Promise）
   */
  getCoins: function getCoins() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(ServerConfig.getStorageMode() === 'server' || ServerConfig.getStorageMode() === 'hybrid')) {
              _context.next = 19;
              break;
            }
            _context.prev = 1;
            _context.next = 4;
            return fetch(ServerConfig.getBaseURL() + "/coins", {
              method: 'GET',
              headers: _extends({
                'Content-Type': 'application/json'
              }, ServerConfig.getAuthHeaders())
            });
          case 4:
            response = _context.sent;
            if (response.ok) {
              _context.next = 7;
              break;
            }
            throw new Error("\u83B7\u53D6\u91D1\u5E01\u5931\u8D25: " + response.status);
          case 7:
            _context.next = 9;
            return response.json();
          case 9:
            data = _context.sent;
            return _context.abrupt("return", data.coins || _this.DEFAULT_COINS);
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            cc.error("[CoinManager] \u83B7\u53D6\u91D1\u5E01\u5931\u8D25:", _context.t0);
            // 服务器失败时，如果是hybrid模式，尝试从本地获取
            if (!(ServerConfig.getStorageMode() === 'hybrid')) {
              _context.next = 18;
              break;
            }
            return _context.abrupt("return", _this._getCoinsFromLocal());
          case 18:
            return _context.abrupt("return", _this.DEFAULT_COINS);
          case 19:
            return _context.abrupt("return", _this._getCoinsFromLocal());
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 13]]);
    }))();
  },
  /**
   * 从本地存储获取金币
   * @private
   * @returns {number} 金币数量
   */
  _getCoinsFromLocal: function _getCoinsFromLocal() {
    var coinsStr = cc.sys.localStorage.getItem(this.COIN_KEY);
    if (coinsStr) {
      var coins = parseInt(coinsStr, 10);
      return isNaN(coins) ? this.DEFAULT_COINS : coins;
    }
    return this.DEFAULT_COINS;
  },
  /**
   * 增加金币
   * @param {number} amount - 增加的数量
   * @returns {Promise<boolean>|boolean} 是否成功（服务器模式下返回Promise）
   */
  addCoins: function addCoins(amount) {
    var _this2 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response, data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(amount <= 0)) {
              _context2.next = 3;
              break;
            }
            cc.warn("[CoinManager] \u589E\u52A0\u91D1\u5E01\u6570\u91CF\u65E0\u6548: " + amount);
            return _context2.abrupt("return", false);
          case 3:
            if (!(ServerConfig.getStorageMode() === 'server' || ServerConfig.getStorageMode() === 'hybrid')) {
              _context2.next = 24;
              break;
            }
            _context2.prev = 4;
            _context2.next = 7;
            return fetch(ServerConfig.getBaseURL() + "/coins/add", {
              method: 'POST',
              headers: _extends({
                'Content-Type': 'application/json'
              }, ServerConfig.getAuthHeaders()),
              body: JSON.stringify({
                amount: amount
              })
            });
          case 7:
            response = _context2.sent;
            if (response.ok) {
              _context2.next = 10;
              break;
            }
            throw new Error("\u589E\u52A0\u91D1\u5E01\u5931\u8D25: " + response.status);
          case 10:
            _context2.next = 12;
            return response.json();
          case 12:
            data = _context2.sent;
            cc.log("[CoinManager] \u2713 \u589E\u52A0\u91D1\u5E01\u6210\u529F: +" + amount + ", \u5F53\u524D: " + data.coins);

            // 如果是hybrid模式，也更新本地
            if (ServerConfig.getStorageMode() === 'hybrid') {
              _this2._saveCoinsToLocal(data.coins);
            }
            return _context2.abrupt("return", true);
          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](4);
            cc.error("[CoinManager] \u589E\u52A0\u91D1\u5E01\u5931\u8D25:", _context2.t0);
            // 服务器失败时，如果是hybrid模式，尝试本地操作
            if (!(ServerConfig.getStorageMode() === 'hybrid')) {
              _context2.next = 23;
              break;
            }
            return _context2.abrupt("return", _this2._addCoinsToLocal(amount));
          case 23:
            return _context2.abrupt("return", false);
          case 24:
            return _context2.abrupt("return", _this2._addCoinsToLocal(amount));
          case 25:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[4, 18]]);
    }))();
  },
  /**
   * 减少金币（购买商品时使用）
   * @param {number} amount - 减少的数量
   * @returns {Promise<boolean>|boolean} 是否成功（服务器模式下返回Promise）
   */
  spendCoins: function spendCoins(amount) {
    var _this3 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var currentCoins, response, errorData, data;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!(amount <= 0)) {
              _context3.next = 3;
              break;
            }
            cc.warn("[CoinManager] \u51CF\u5C11\u91D1\u5E01\u6570\u91CF\u65E0\u6548: " + amount);
            return _context3.abrupt("return", false);
          case 3:
            _context3.next = 5;
            return _this3.getCoins();
          case 5:
            currentCoins = _context3.sent;
            if (!(currentCoins < amount)) {
              _context3.next = 9;
              break;
            }
            cc.warn("[CoinManager] \u91D1\u5E01\u4E0D\u8DB3: \u5F53\u524D " + currentCoins + ", \u9700\u8981 " + amount);
            return _context3.abrupt("return", false);
          case 9:
            if (!(ServerConfig.getStorageMode() === 'server' || ServerConfig.getStorageMode() === 'hybrid')) {
              _context3.next = 38;
              break;
            }
            _context3.prev = 10;
            _context3.next = 13;
            return fetch(ServerConfig.getBaseURL() + "/coins/spend", {
              method: 'POST',
              headers: _extends({
                'Content-Type': 'application/json'
              }, ServerConfig.getAuthHeaders()),
              body: JSON.stringify({
                amount: amount
              })
            });
          case 13:
            response = _context3.sent;
            if (response.ok) {
              _context3.next = 24;
              break;
            }
            _context3.next = 17;
            return response.json()["catch"](function () {
              return {};
            });
          case 17:
            errorData = _context3.sent;
            if (!(response.status === 400 && errorData.error === 'insufficient_coins')) {
              _context3.next = 22;
              break;
            }
            cc.warn("[CoinManager] \u91D1\u5E01\u4E0D\u8DB3: \u5F53\u524D " + errorData.currentCoins + ", \u9700\u8981 " + amount);
            _context3.next = 23;
            break;
          case 22:
            throw new Error("\u51CF\u5C11\u91D1\u5E01\u5931\u8D25: " + response.status);
          case 23:
            return _context3.abrupt("return", false);
          case 24:
            _context3.next = 26;
            return response.json();
          case 26:
            data = _context3.sent;
            cc.log("[CoinManager] \u2713 \u51CF\u5C11\u91D1\u5E01\u6210\u529F: -" + amount + ", \u5F53\u524D: " + data.coins);

            // 如果是hybrid模式，也更新本地
            if (ServerConfig.getStorageMode() === 'hybrid') {
              _this3._saveCoinsToLocal(data.coins);
            }
            return _context3.abrupt("return", true);
          case 32:
            _context3.prev = 32;
            _context3.t0 = _context3["catch"](10);
            cc.error("[CoinManager] \u51CF\u5C11\u91D1\u5E01\u5931\u8D25:", _context3.t0);
            // 服务器失败时，如果是hybrid模式，尝试本地操作
            if (!(ServerConfig.getStorageMode() === 'hybrid')) {
              _context3.next = 37;
              break;
            }
            return _context3.abrupt("return", _this3._spendCoinsFromLocal(amount));
          case 37:
            return _context3.abrupt("return", false);
          case 38:
            return _context3.abrupt("return", _this3._spendCoinsFromLocal(amount));
          case 39:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[10, 32]]);
    }))();
  },
  /**
   * 本地增加金币
   * @private
   * @param {number} amount - 增加的数量
   * @returns {boolean} 是否成功
   */
  _addCoinsToLocal: function _addCoinsToLocal(amount) {
    var currentCoins = this._getCoinsFromLocal();
    var newCoins = currentCoins + amount;
    this._saveCoinsToLocal(newCoins);
    cc.log("[CoinManager] \u2713 \u589E\u52A0\u91D1\u5E01\u6210\u529F: +" + amount + ", \u5F53\u524D: " + newCoins);
    return true;
  },
  /**
   * 本地减少金币
   * @private
   * @param {number} amount - 减少的数量
   * @returns {boolean} 是否成功
   */
  _spendCoinsFromLocal: function _spendCoinsFromLocal(amount) {
    var currentCoins = this._getCoinsFromLocal();
    if (currentCoins < amount) {
      cc.warn("[CoinManager] \u91D1\u5E01\u4E0D\u8DB3: \u5F53\u524D " + currentCoins + ", \u9700\u8981 " + amount);
      return false;
    }
    var newCoins = currentCoins - amount;
    this._saveCoinsToLocal(newCoins);
    cc.log("[CoinManager] \u2713 \u51CF\u5C11\u91D1\u5E01\u6210\u529F: -" + amount + ", \u5F53\u524D: " + newCoins);
    return true;
  },
  /**
   * 保存金币到本地存储
   * @private
   * @param {number} coins - 金币数量
   */
  _saveCoinsToLocal: function _saveCoinsToLocal(coins) {
    cc.sys.localStorage.setItem(this.COIN_KEY, coins.toString());
  }
};
module.exports = CoinManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxDb2luTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiX2V4dGVuZHMiLCJhc3NpZ24iLCJiaW5kIiwidGFyZ2V0IiwiYXJndW1lbnRzIiwic291cmNlIiwiYXBwbHkiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsIlNlcnZlckNvbmZpZyIsInJlcXVpcmUiLCJDb2luTWFuYWdlciIsIkNPSU5fS0VZIiwiREVGQVVMVF9DT0lOUyIsImdldENvaW5zIiwiX3RoaXMiLCJfY2FsbGVlIiwicmVzcG9uc2UiLCJkYXRhIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImdldFN0b3JhZ2VNb2RlIiwiZmV0Y2giLCJnZXRCYXNlVVJMIiwiaGVhZGVycyIsImdldEF1dGhIZWFkZXJzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiY29pbnMiLCJ0MCIsImNjIiwiX2dldENvaW5zRnJvbUxvY2FsIiwiY29pbnNTdHIiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VJbnQiLCJhZGRDb2lucyIsImFtb3VudCIsIl90aGlzMiIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwid2FybiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibG9nIiwiX3NhdmVDb2luc1RvTG9jYWwiLCJfYWRkQ29pbnNUb0xvY2FsIiwic3BlbmRDb2lucyIsIl90aGlzMyIsIl9jYWxsZWUzIiwiY3VycmVudENvaW5zIiwiZXJyb3JEYXRhIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiX3NwZW5kQ29pbnNGcm9tTG9jYWwiLCJuZXdDb2lucyIsInNldEl0ZW0iLCJ0b1N0cmluZyIsIm1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0EscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLE9BQUEsU0FBQUEsT0FBQSxPQUFBQyxFQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxNQUFBLEdBQUFILEVBQUEsQ0FBQUksY0FBQSxFQUFBQyxjQUFBLEdBQUFKLE1BQUEsQ0FBQUksY0FBQSxjQUFBQyxHQUFBLEVBQUFDLEdBQUEsRUFBQUMsSUFBQSxJQUFBRixHQUFBLENBQUFDLEdBQUEsSUFBQUMsSUFBQSxDQUFBQyxLQUFBLEtBQUFDLE9BQUEsd0JBQUFDLE1BQUEs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QUksQ0FBQ2hELFFBQVEsRUFBRWlCLEtBQUssQ0FBQ2dDLFFBQVEsRUFBRSxDQUFDO0VBQ2hFO0FBQ0osQ0FBQztBQUVEQyxNQUFNLENBQUM3TSxPQUFPLEdBQUcwSixXQUFXIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOmHkeW4geezu+e7n+euoeeQhuWZqFxuICog57uf5LiA566h55CG6YeR5biB55qE5aKe5YeP77yM5pSv5oyB5pys5Zyw5a2Y5YKo5ZKM5pyN5Yqh5Zmo5a2Y5YKoXG4gKi9cbmNvbnN0IFNlcnZlckNvbmZpZyA9IHJlcXVpcmUoXCJTZXJ2ZXJDb25maWdcIik7XG5cbnZhciBDb2luTWFuYWdlciA9IHtcbiAgICAvLyDlrZjlgqjplK5cbiAgICBDT0lOX0tFWTogXCJwbGF5ZXJfY29pbnNcIixcbiAgICBcbiAgICAvLyDpu5jorqTph5HluIHmlbDph49cbiAgICBERUZBVUxUX0NPSU5TOiAxMDAwLFxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5b2T5YmN6YeR5biB5pWw6YePXG4gICAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPnxudW1iZXJ9IOmHkeW4geaVsOmHj++8iOacjeWKoeWZqOaooeW8j+S4i+i/lOWbnlByb21pc2XvvIlcbiAgICAgKi9cbiAgICBhc3luYyBnZXRDb2lucygpIHtcbiAgICAgICAgLy8g5aaC5p6c5L2/55So5pyN5Yqh5Zmo5qih5byPXG4gICAgICAgIGlmIChTZXJ2ZXJDb25maWcuZ2V0U3RvcmFnZU1vZGUoKSA9PT0gJ3NlcnZlcicgfHwgU2VydmVyQ29uZmlnLmdldFN0b3JhZ2VNb2RlKCkgPT09ICdoeWJyaWQnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIOKtkCDkv67lpI3vvJpnZXRCYXNlVVJMKCnlt7Lnu4/ljIXlkKsvYXBp77yM5omA5Lul5LiN6ZyA6KaB5YaN5YqgL2FwaVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7U2VydmVyQ29uZmlnLmdldEJhc2VVUkwoKX0vY29pbnNgLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5TZXJ2ZXJDb25maWcuZ2V0QXV0aEhlYWRlcnMoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihg6I635Y+W6YeR5biB5aSx6LSlOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmNvaW5zIHx8IHRoaXMuREVGQVVMVF9DT0lOUztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtDb2luTWFuYWdlcl0g6I635Y+W6YeR5biB5aSx6LSlOmAsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAvLyDmnI3liqHlmajlpLHotKXml7bvvIzlpoLmnpzmmK9oeWJyaWTmqKHlvI/vvIzlsJ3or5Xku47mnKzlnLDojrflj5ZcbiAgICAgICAgICAgICAgICBpZiAoU2VydmVyQ29uZmlnLmdldFN0b3JhZ2VNb2RlKCkgPT09ICdoeWJyaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRDb2luc0Zyb21Mb2NhbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ERUZBVUxUX0NPSU5TO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pys5Zyw5qih5byPXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRDb2luc0Zyb21Mb2NhbCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDku47mnKzlnLDlrZjlgqjojrflj5bph5HluIFcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IOmHkeW4geaVsOmHj1xuICAgICAqL1xuICAgIF9nZXRDb2luc0Zyb21Mb2NhbCgpIHtcbiAgICAgICAgY29uc3QgY29pbnNTdHIgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5DT0lOX0tFWSk7XG4gICAgICAgIGlmIChjb2luc1N0cikge1xuICAgICAgICAgICAgY29uc3QgY29pbnMgPSBwYXJzZUludChjb2luc1N0ciwgMTApO1xuICAgICAgICAgICAgcmV0dXJuIGlzTmFOKGNvaW5zKSA/IHRoaXMuREVGQVVMVF9DT0lOUyA6IGNvaW5zO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLkRFRkFVTFRfQ09JTlM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWinuWKoOmHkeW4gVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBhbW91bnQgLSDlop7liqDnmoTmlbDph49cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPnxib29sZWFufSDmmK/lkKbmiJDlip/vvIjmnI3liqHlmajmqKHlvI/kuIvov5Tlm55Qcm9taXNl77yJXG4gICAgICovXG4gICAgYXN5bmMgYWRkQ29pbnMoYW1vdW50KSB7XG4gICAgICAgIGlmIChhbW91bnQgPD0gMCkge1xuICAgICAgICAgICAgY2Mud2FybihgW0NvaW5NYW5hZ2VyXSDlop7liqDph5HluIHmlbDph4/ml6DmlYg6ICR7YW1vdW50fWApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5aaC5p6c5L2/55So5pyN5Yqh5Zmo5qih5byPXG4gICAgICAgIGlmIChTZXJ2ZXJDb25maWcuZ2V0U3RvcmFnZU1vZGUoKSA9PT0gJ3NlcnZlcicgfHwgU2VydmVyQ29uZmlnLmdldFN0b3JhZ2VNb2RlKCkgPT09ICdoeWJyaWQnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIOKtkCDkv67lpI3vvJpnZXRCYXNlVVJMKCnlt7Lnu4/ljIXlkKsvYXBp77yM5omA5Lul5LiN6ZyA6KaB5YaN5YqgL2FwaVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7U2VydmVyQ29uZmlnLmdldEJhc2VVUkwoKX0vY29pbnMvYWRkYCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLlNlcnZlckNvbmZpZy5nZXRBdXRoSGVhZGVycygpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYW1vdW50IH0pXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihg5aKe5Yqg6YeR5biB5aSx6LSlOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGNjLmxvZyhgW0NvaW5NYW5hZ2VyXSDinJMg5aKe5Yqg6YeR5biB5oiQ5YqfOiArJHthbW91bnR9LCDlvZPliY06ICR7ZGF0YS5jb2luc31gKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmmK9oeWJyaWTmqKHlvI/vvIzkuZ/mm7TmlrDmnKzlnLBcbiAgICAgICAgICAgICAgICBpZiAoU2VydmVyQ29uZmlnLmdldFN0b3JhZ2VNb2RlKCkgPT09ICdoeWJyaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NhdmVDb2luc1RvTG9jYWwoZGF0YS5jb2lucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihgW0NvaW5NYW5hZ2VyXSDlop7liqDph5HluIHlpLHotKU6YCwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIC8vIOacjeWKoeWZqOWksei0peaXtu+8jOWmguaenOaYr2h5YnJpZOaooeW8j++8jOWwneivleacrOWcsOaTjeS9nFxuICAgICAgICAgICAgICAgIGlmIChTZXJ2ZXJDb25maWcuZ2V0U3RvcmFnZU1vZGUoKSA9PT0gJ2h5YnJpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENvaW5zVG9Mb2NhbChhbW91bnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmnKzlnLDmqKHlvI9cbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZENvaW5zVG9Mb2NhbChhbW91bnQpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDlh4/lsJHph5HluIHvvIjotK3kubDllYblk4Hml7bkvb/nlKjvvIlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYW1vdW50IC0g5YeP5bCR55qE5pWw6YePXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj58Ym9vbGVhbn0g5piv5ZCm5oiQ5Yqf77yI5pyN5Yqh5Zmo5qih5byP5LiL6L+U5ZueUHJvbWlzZe+8iVxuICAgICAqL1xuICAgIGFzeW5jIHNwZW5kQ29pbnMoYW1vdW50KSB7XG4gICAgICAgIGlmIChhbW91bnQgPD0gMCkge1xuICAgICAgICAgICAgY2Mud2FybihgW0NvaW5NYW5hZ2VyXSDlh4/lsJHph5HluIHmlbDph4/ml6DmlYg6ICR7YW1vdW50fWApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5YWI5qOA5p+l6YeR5biB5piv5ZCm6Laz5aSfXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2lucyA9IGF3YWl0IHRoaXMuZ2V0Q29pbnMoKTtcbiAgICAgICAgaWYgKGN1cnJlbnRDb2lucyA8IGFtb3VudCkge1xuICAgICAgICAgICAgY2Mud2FybihgW0NvaW5NYW5hZ2VyXSDph5HluIHkuI3otrM6IOW9k+WJjSAke2N1cnJlbnRDb2luc30sIOmcgOimgSAke2Ftb3VudH1gKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWmguaenOS9v+eUqOacjeWKoeWZqOaooeW8j1xuICAgICAgICBpZiAoU2VydmVyQ29uZmlnLmdldFN0b3JhZ2VNb2RlKCkgPT09ICdzZXJ2ZXInIHx8IFNlcnZlckNvbmZpZy5nZXRTdG9yYWdlTW9kZSgpID09PSAnaHlicmlkJykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyDirZAg5L+u5aSN77yaZ2V0QmFzZVVSTCgp5bey57uP5YyF5ZCrL2Fwae+8jOaJgOS7peS4jemcgOimgeWGjeWKoC9hcGlcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke1NlcnZlckNvbmZpZy5nZXRCYXNlVVJMKCl9L2NvaW5zL3NwZW5kYCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLlNlcnZlckNvbmZpZy5nZXRBdXRoSGVhZGVycygpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYW1vdW50IH0pXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKS5jYXRjaCgoKSA9PiAoe30pKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwICYmIGVycm9yRGF0YS5lcnJvciA9PT0gJ2luc3VmZmljaWVudF9jb2lucycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLndhcm4oYFtDb2luTWFuYWdlcl0g6YeR5biB5LiN6LazOiDlvZPliY0gJHtlcnJvckRhdGEuY3VycmVudENvaW5zfSwg6ZyA6KaBICR7YW1vdW50fWApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGDlh4/lsJHph5HluIHlpLHotKU6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGNjLmxvZyhgW0NvaW5NYW5hZ2VyXSDinJMg5YeP5bCR6YeR5biB5oiQ5YqfOiAtJHthbW91bnR9LCDlvZPliY06ICR7ZGF0YS5jb2luc31gKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmmK9oeWJyaWTmqKHlvI/vvIzkuZ/mm7TmlrDmnKzlnLBcbiAgICAgICAgICAgICAgICBpZiAoU2VydmVyQ29uZmlnLmdldFN0b3JhZ2VNb2RlKCkgPT09ICdoeWJyaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NhdmVDb2luc1RvTG9jYWwoZGF0YS5jb2lucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihgW0NvaW5NYW5hZ2VyXSDlh4/lsJHph5HluIHlpLHotKU6YCwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIC8vIOacjeWKoeWZqOWksei0peaXtu+8jOWmguaenOaYr2h5YnJpZOaooeW8j++8jOWwneivleacrOWcsOaTjeS9nFxuICAgICAgICAgICAgICAgIGlmIChTZXJ2ZXJDb25maWcuZ2V0U3RvcmFnZU1vZGUoKSA9PT0gJ2h5YnJpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NwZW5kQ29pbnNGcm9tTG9jYWwoYW1vdW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pys5Zyw5qih5byPXG4gICAgICAgIHJldHVybiB0aGlzLl9zcGVuZENvaW5zRnJvbUxvY2FsKGFtb3VudCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOacrOWcsOWinuWKoOmHkeW4gVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGFtb3VudCAtIOWinuWKoOeahOaVsOmHj1xuICAgICAqIEByZXR1cm5zIHtib29sZWFufSDmmK/lkKbmiJDlip9cbiAgICAgKi9cbiAgICBfYWRkQ29pbnNUb0xvY2FsKGFtb3VudCkge1xuICAgICAgICBjb25zdCBjdXJyZW50Q29pbnMgPSB0aGlzLl9nZXRDb2luc0Zyb21Mb2NhbCgpO1xuICAgICAgICBjb25zdCBuZXdDb2lucyA9IGN1cnJlbnRDb2lucyArIGFtb3VudDtcbiAgICAgICAgdGhpcy5fc2F2ZUNvaW5zVG9Mb2NhbChuZXdDb2lucyk7XG4gICAgICAgIGNjLmxvZyhgW0NvaW5NYW5hZ2VyXSDinJMg5aKe5Yqg6YeR5biB5oiQ5YqfOiArJHthbW91bnR9LCDlvZPliY06ICR7bmV3Q29pbnN9YCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmnKzlnLDlh4/lsJHph5HluIFcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBhbW91bnQgLSDlh4/lsJHnmoTmlbDph49cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g5piv5ZCm5oiQ5YqfXG4gICAgICovXG4gICAgX3NwZW5kQ29pbnNGcm9tTG9jYWwoYW1vdW50KSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb2lucyA9IHRoaXMuX2dldENvaW5zRnJvbUxvY2FsKCk7XG4gICAgICAgIGlmIChjdXJyZW50Q29pbnMgPCBhbW91bnQpIHtcbiAgICAgICAgICAgIGNjLndhcm4oYFtDb2luTWFuYWdlcl0g6YeR5biB5LiN6LazOiDlvZPliY0gJHtjdXJyZW50Q29pbnN9LCDpnIDopoEgJHthbW91bnR9YCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3Q29pbnMgPSBjdXJyZW50Q29pbnMgLSBhbW91bnQ7XG4gICAgICAgIHRoaXMuX3NhdmVDb2luc1RvTG9jYWwobmV3Q29pbnMpO1xuICAgICAgICBjYy5sb2coYFtDb2luTWFuYWdlcl0g4pyTIOWHj+WwkemHkeW4geaIkOWKnzogLSR7YW1vdW50fSwg5b2T5YmNOiAke25ld0NvaW5zfWApO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5L+d5a2Y6YeR5biB5Yiw5pys5Zyw5a2Y5YKoXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29pbnMgLSDph5HluIHmlbDph49cbiAgICAgKi9cbiAgICBfc2F2ZUNvaW5zVG9Mb2NhbChjb2lucykge1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5DT0lOX0tFWSwgY29pbnMudG9TdHJpbmcoKSk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb2luTWFuYWdlcjtcbiJdfQ==