"use strict";
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
            return _context.abrupt("return", data.coins !== undefined && data.coins !== null ? data.coins : _this.DEFAULT_COINS);
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