
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/system/EquipmentDataAdapter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd583pohWBHeYeXn8AxVSjB', 'EquipmentDataAdapter');
// Scripts/system/EquipmentDataAdapter.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * 装备数据适配器
 * 抽象装备存储层，支持本地存储和服务器存储的切换
 *
 * - 本地模式：使用 localStorage
 * - 服务器模式：使用 Node/Express 提供的 HTTP API
 * - 混合模式：本地缓存 + 服务器同步
 */
var EquipmentDataAdapter = {
  // 存储模式：'local' | 'server' | 'hybrid'
  storageMode: "local",
  // 默认使用本地存储

  // 服务器API配置
  serverConfig: {
    baseURL: "https://your-api-server.com/api",
    timeout: 5000,
    retryCount: 3
  },
  /**
   * 切换存储模式
   * @param {string} mode - 'local' | 'server' | 'hybrid'
   */
  setStorageMode: function setStorageMode(mode) {
    if (['local', 'server', 'hybrid'].includes(mode)) {
      this.storageMode = mode;
      cc.log("[EquipmentDataAdapter] \u5B58\u50A8\u6A21\u5F0F\u5DF2\u5207\u6362\u4E3A: " + mode);
    } else {
      cc.warn("[EquipmentDataAdapter] \u65E0\u6548\u7684\u5B58\u50A8\u6A21\u5F0F: " + mode);
    }
  },
  /**
   * 保存角色装备数据（slots 数组）
   * @param {string} characterName
   * @param {Array<string|null>} slots
   * @returns {Promise<boolean>|boolean}
   */
  saveCharacterEquipment: function saveCharacterEquipment(characterName, slots) {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = _this.storageMode;
            _context.next = _context.t0 === "local" ? 3 : _context.t0 === "server" ? 4 : _context.t0 === "hybrid" ? 7 : 11;
            break;
          case 3:
            return _context.abrupt("return", _this._saveLocal(characterName, slots));
          case 4:
            _context.next = 6;
            return _this._saveServer(characterName, slots);
          case 6:
            return _context.abrupt("return", _context.sent);
          case 7:
            // 本地快速保存 + 服务器同步
            _this._saveLocal(characterName, slots);
            _context.next = 10;
            return _this._saveServer(characterName, slots);
          case 10:
            return _context.abrupt("return", _context.sent);
          case 11:
            return _context.abrupt("return", _this._saveLocal(characterName, slots));
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  /**
   * 加载角色装备数据
   * @param {string} characterName
   * @returns {Promise<{slots:Array<string|null>}>|{slots:Array<string|null>}}
   */
  loadCharacterEquipment: function loadCharacterEquipment(characterName) {
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
            return _context2.abrupt("return", _this2._loadLocal(characterName));
          case 4:
            _context2.next = 6;
            return _this2._loadServer(characterName);
          case 6:
            return _context2.abrupt("return", _context2.sent);
          case 7:
            _context2.prev = 7;
            _context2.next = 10;
            return _this2._loadServer(characterName);
          case 10:
            serverData = _context2.sent;
            // 同步到本地缓存
            _this2._saveLocal(characterName, serverData.slots || []);
            return _context2.abrupt("return", serverData);
          case 15:
            _context2.prev = 15;
            _context2.t1 = _context2["catch"](7);
            cc.warn("[EquipmentDataAdapter] \u670D\u52A1\u5668\u52A0\u8F7D\u5931\u8D25\uFF0C\u4F7F\u7528\u672C\u5730\u7F13\u5B58: " + _context2.t1.message);
            return _context2.abrupt("return", _this2._loadLocal(characterName));
          case 19:
            return _context2.abrupt("return", _this2._loadLocal(characterName));
          case 20:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[7, 15]]);
    }))();
  },
  // ===== 本地存储实现 =====
  _saveLocal: function _saveLocal(characterName, slots) {
    try {
      var key = "character_equipment_" + characterName;
      var json = JSON.stringify({
        slots: slots || []
      });
      cc.sys.localStorage.setItem(key, json);
      return true;
    } catch (e) {
      cc.warn("[EquipmentDataAdapter] \u672C\u5730\u4FDD\u5B58\u5931\u8D25: " + e.message);
      return false;
    }
  },
  _loadLocal: function _loadLocal(characterName) {
    try {
      var key = "character_equipment_" + characterName;
      var json = cc.sys.localStorage.getItem(key);
      if (!json) {
        return {
          slots: [null, null, null]
        };
      }
      var data = JSON.parse(json);
      var slots = Array.isArray(data.slots) ? data.slots : [];
      return {
        slots: slots
      };
    } catch (e) {
      cc.warn("[EquipmentDataAdapter] \u672C\u5730\u52A0\u8F7D\u5931\u8D25: " + e.message);
      return {
        slots: [null, null, null]
      };
    }
  },
  // ===== 服务器存储实现 =====
  _saveServer: function _saveServer(characterName, slots) {
    var _this3 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var ServerConfig, baseURL, url, response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            ServerConfig = require("ServerConfig");
            baseURL = ServerConfig.getBaseURL() || _this3.serverConfig.baseURL;
            url = baseURL + "/characters/" + encodeURIComponent(characterName) + "/equipment";
            _context3.next = 6;
            return _this3._httpRequest('PUT', url, {
              equipment: {
                slots: slots || []
              }
            });
          case 6:
            response = _context3.sent;
            if (!response.success) {
              _context3.next = 12;
              break;
            }
            cc.log("[EquipmentDataAdapter] \u670D\u52A1\u5668\u4FDD\u5B58\u6210\u529F: " + characterName);
            return _context3.abrupt("return", true);
          case 12:
            throw new Error(response.message || "服务器保存失败");
          case 13:
            _context3.next = 19;
            break;
          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](0);
            cc.error("[EquipmentDataAdapter] \u670D\u52A1\u5668\u4FDD\u5B58\u5931\u8D25: " + _context3.t0.message);
            throw _context3.t0;
          case 19:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 15]]);
    }))();
  },
  _loadServer: function _loadServer(characterName) {
    var _this4 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var ServerConfig, baseURL, url, response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            ServerConfig = require("ServerConfig");
            baseURL = ServerConfig.getBaseURL() || _this4.serverConfig.baseURL;
            url = baseURL + "/characters/" + encodeURIComponent(characterName) + "/equipment";
            _context4.next = 6;
            return _this4._httpRequest('GET', url);
          case 6:
            response = _context4.sent;
            if (!(response.success && response.data && response.data.equipment)) {
              _context4.next = 10;
              break;
            }
            cc.log("[EquipmentDataAdapter] \u670D\u52A1\u5668\u52A0\u8F7D\u6210\u529F: " + characterName);
            return _context4.abrupt("return", response.data.equipment);
          case 10:
            return _context4.abrupt("return", {
              slots: [null, null, null]
            });
          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](0);
            cc.error("[EquipmentDataAdapter] \u670D\u52A1\u5668\u52A0\u8F7D\u5931\u8D25: " + _context4.t0.message);
            throw _context4.t0;
          case 17:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 13]]);
    }))();
  },
  /**
   * HTTP 请求封装（带重试）
   * @private
   */
  _httpRequest: function _httpRequest(method, url, data) {
    var _this5 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var ServerConfig, headers, lastError, _loop, i, _ret;
      return _regeneratorRuntime().wrap(function _callee5$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (data === void 0) {
              data = null;
            }
            ServerConfig = require("ServerConfig");
            headers = Object.assign({
              'Content-Type': 'application/json'
            }, ServerConfig.getAuthHeaders() || {});
            lastError = null;
            _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(i) {
              var options, response, result;
              return _regeneratorRuntime().wrap(function _loop$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.prev = 0;
                    options = {
                      method: method,
                      headers: headers,
                      timeout: _this5.serverConfig.timeout
                    };
                    if (data && (method === 'POST' || method === 'PUT')) {
                      options.body = JSON.stringify(data);
                    }
                    _context5.next = 5;
                    return fetch(url, options);
                  case 5:
                    response = _context5.sent;
                    _context5.next = 8;
                    return response.json();
                  case 8:
                    result = _context5.sent;
                    if (response.ok) {
                      _context5.next = 11;
                      break;
                    }
                    throw new Error(result.message || "HTTP " + response.status);
                  case 11:
                    return _context5.abrupt("return", {
                      v: result
                    });
                  case 14:
                    _context5.prev = 14;
                    _context5.t0 = _context5["catch"](0);
                    lastError = _context5.t0;
                    if (!(i < _this5.serverConfig.retryCount - 1)) {
                      _context5.next = 21;
                      break;
                    }
                    cc.warn("[EquipmentDataAdapter] \u8BF7\u6C42\u5931\u8D25\uFF0C" + 1000 * (i + 1) + "ms \u540E\u91CD\u8BD5... (" + (i + 1) + "/" + _this5.serverConfig.retryCount + ")");
                    _context5.next = 21;
                    return new Promise(function (resolve) {
                      return setTimeout(resolve, 1000 * (i + 1));
                    });
                  case 21:
                  case "end":
                    return _context5.stop();
                }
              }, _loop, null, [[0, 14]]);
            });
            i = 0;
          case 6:
            if (!(i < _this5.serverConfig.retryCount)) {
              _context6.next = 14;
              break;
            }
            return _context6.delegateYield(_loop(i), "t0", 8);
          case 8:
            _ret = _context6.t0;
            if (!(typeof _ret === "object")) {
              _context6.next = 11;
              break;
            }
            return _context6.abrupt("return", _ret.v);
          case 11:
            i++;
            _context6.next = 6;
            break;
          case 14:
            throw lastError || new Error("请求失败");
          case 15:
          case "end":
            return _context6.stop();
        }
      }, _callee5);
    }))();
  }
};
module.exports = EquipmentDataAdapter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxFcXVpcG1lbnREYXRhQWRhcHRlci5qcyJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsIkVxdWlwbWVudERhdGFBZGFwdGVyIiwic3RvcmFnZU1vZGUiLCJzZXJ2ZXJDb25maWciLCJiYXNlVVJMIiwidGltZW91dCIsInJldHJ5Q291bnQiLCJzZXRTdG9yYWdlTW9kZSIsIm1vZGUiLCJpbmNsdWRlcyIsImNjIiwibG9nIiwid2FybiIsInNhdmVDaGFyYWN0ZXJFcXVpcG1lbnQiLCJjaGFyYWN0ZXJOYW1lIiwic2xvdHMiLCJfdGhpcyIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwidDAiLCJfc2F2ZUxvY2FsIiwiX3NhdmVTZXJ2ZXIiLCJsb2FkQ2hhcmFjdGVyRXF1aXBtZW50IiwiX3RoaXMyIiwiX2NhbGxlZTIiLCJzZXJ2ZXJEYXRhIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiX2xvYWRMb2NhbCIsIl9sb2FkU2VydmVyIiwidDEiLCJtZXNzYWdlIiwianNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZSIsImdldEl0ZW0iLCJkYXRhIiwicGFyc2UiLCJBcnJheSIsImlzQXJyYXkiLCJfdGhpczMiLCJfY2FsbGVlMyIsIlNlcnZlckNvbmZpZyIsInVybCIsInJlc3BvbnNlIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwicmVxdWlyZSIsImdldEJhc2VVUkwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfaHR0cFJlcXVlc3QiLCJlcXVpcG1lbnQiLCJzdWNjZXNzIiwiX3RoaXM0IiwiX2NhbGxlZTQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJfdGhpczUiLCJfY2FsbGVlNSIsImhlYWRlcnMiLCJsYXN0RXJyb3IiLCJfbG9vcCIsIl9yZXQiLCJfY2FsbGVlNSQiLCJfY29udGV4dDYiLCJhc3NpZ24iLCJnZXRBdXRoSGVhZGVycyIsIm9wdGlvbnMiLCJfbG9vcCQiLCJfY29udGV4dDUiLCJib2R5IiwiZmV0Y2giLCJvayIsInN0YXR1cyIsInYiLCJzZXRUaW1lb3V0IiwibW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxxSkFB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O29CQUFBLE9BQ3ZHLElBQUk4QixPQUFPLENBQUMsVUFBQXhELE9BQU87c0JBQUEsT0FBSXlLLFVBQVUsQ0FBQ3pLLE9BQU8sRUFBRSxJQUFJLElBQUk0QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQUEsRUFBQztrQkFBQTtrQkFBQTtvQkFBQSxPQUFBdUgsU0FBQSxDQUFBaEcsSUFBQTtnQkFBQTtjQUFBLEdBQUF3RixLQUFBO1lBQUE7WUF4QnBFL0csQ0FBQyxHQUFHLENBQUM7VUFBQTtZQUFBLE1BQUVBLENBQUMsR0FBRzJHLE1BQUksQ0FBQzNELFlBQVksQ0FBQ0csVUFBVTtjQUFBK0QsU0FBQSxDQUFBcEksSUFBQTtjQUFBO1lBQUE7WUFBQSxPQUFBb0ksU0FBQSxDQUFBN0UsYUFBQSxDQUFBMEUsS0FBQSxDQUFBL0csQ0FBQTtVQUFBO1lBQUFnSCxJQUFBLEdBQUFFLFNBQUEsQ0FBQWpELEVBQUE7WUFBQSxhQUFBK0MsSUFBQTtjQUFBRSxTQUFBLENBQUFwSSxJQUFBO2NBQUE7WUFBQTtZQUFBLE9BQUFvSSxTQUFBLENBQUEzSSxNQUFBLFdBQUF5SSxJQUFBLENBQUFZLENBQUE7VUFBQTtZQUFFNUgsQ0FBQyxFQUFFO1lBQUFrSCxTQUFBLENBQUFwSSxJQUFBO1lBQUE7VUFBQTtZQUFBLE1BNkIvQ2dJLFNBQVMsSUFBSSxJQUFJL0ksS0FBSyxDQUFDLE1BQU0sQ0FBQztVQUFBO1VBQUE7WUFBQSxPQUFBbUosU0FBQSxDQUFBM0YsSUFBQTtRQUFBO01BQUEsR0FBQXFGLFFBQUE7SUFBQTtFQUN4QztBQUNKLENBQUM7QUFFRGtCLE1BQU0sQ0FBQ25PLE9BQU8sR0FBR21KLG9CQUFvQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDoo4XlpIfmlbDmja7pgILphY3lmahcbiAqIOaKveixoeijheWkh+WtmOWCqOWxgu+8jOaUr+aMgeacrOWcsOWtmOWCqOWSjOacjeWKoeWZqOWtmOWCqOeahOWIh+aNolxuICpcbiAqIC0g5pys5Zyw5qih5byP77ya5L2/55SoIGxvY2FsU3RvcmFnZVxuICogLSDmnI3liqHlmajmqKHlvI/vvJrkvb/nlKggTm9kZS9FeHByZXNzIOaPkOS+m+eahCBIVFRQIEFQSVxuICogLSDmt7flkIjmqKHlvI/vvJrmnKzlnLDnvJPlrZggKyDmnI3liqHlmajlkIzmraVcbiAqL1xudmFyIEVxdWlwbWVudERhdGFBZGFwdGVyID0ge1xuICAgIC8vIOWtmOWCqOaooeW8j++8midsb2NhbCcgfCAnc2VydmVyJyB8ICdoeWJyaWQnXG4gICAgc3RvcmFnZU1vZGU6IFwibG9jYWxcIiwgLy8g6buY6K6k5L2/55So5pys5Zyw5a2Y5YKoXG5cbiAgICAvLyDmnI3liqHlmahBUEnphY3nva5cbiAgICBzZXJ2ZXJDb25maWc6IHtcbiAgICAgICAgYmFzZVVSTDogXCJodHRwczovL3lvdXItYXBpLXNlcnZlci5jb20vYXBpXCIsXG4gICAgICAgIHRpbWVvdXQ6IDUwMDAsXG4gICAgICAgIHJldHJ5Q291bnQ6IDNcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5YiH5o2i5a2Y5YKo5qih5byPXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgLSAnbG9jYWwnIHwgJ3NlcnZlcicgfCAnaHlicmlkJ1xuICAgICAqL1xuICAgIHNldFN0b3JhZ2VNb2RlKG1vZGUpIHtcbiAgICAgICAgaWYgKFsnbG9jYWwnLCAnc2VydmVyJywgJ2h5YnJpZCddLmluY2x1ZGVzKG1vZGUpKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2VNb2RlID0gbW9kZTtcbiAgICAgICAgICAgIGNjLmxvZyhgW0VxdWlwbWVudERhdGFBZGFwdGVyXSDlrZjlgqjmqKHlvI/lt7LliIfmjaLkuLo6ICR7bW9kZX1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLndhcm4oYFtFcXVpcG1lbnREYXRhQWRhcHRlcl0g5peg5pWI55qE5a2Y5YKo5qih5byPOiAke21vZGV9YCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5L+d5a2Y6KeS6Imy6KOF5aSH5pWw5o2u77yIc2xvdHMg5pWw57uE77yJXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3Rlck5hbWVcbiAgICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZ3xudWxsPn0gc2xvdHNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPnxib29sZWFufVxuICAgICAqL1xuICAgIGFzeW5jIHNhdmVDaGFyYWN0ZXJFcXVpcG1lbnQoY2hhcmFjdGVyTmFtZSwgc2xvdHMpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0b3JhZ2VNb2RlKSB7XG4gICAgICAgICAgICBjYXNlIFwibG9jYWxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZUxvY2FsKGNoYXJhY3Rlck5hbWUsIHNsb3RzKTtcbiAgICAgICAgICAgIGNhc2UgXCJzZXJ2ZXJcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fc2F2ZVNlcnZlcihjaGFyYWN0ZXJOYW1lLCBzbG90cyk7XG4gICAgICAgICAgICBjYXNlIFwiaHlicmlkXCI6XG4gICAgICAgICAgICAgICAgLy8g5pys5Zyw5b+r6YCf5L+d5a2YICsg5pyN5Yqh5Zmo5ZCM5q2lXG4gICAgICAgICAgICAgICAgdGhpcy5fc2F2ZUxvY2FsKGNoYXJhY3Rlck5hbWUsIHNsb3RzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fc2F2ZVNlcnZlcihjaGFyYWN0ZXJOYW1lLCBzbG90cyk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlTG9jYWwoY2hhcmFjdGVyTmFtZSwgc2xvdHMpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWKoOi9veinkuiJsuijheWkh+aVsOaNrlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJOYW1lXG4gICAgICogQHJldHVybnMge1Byb21pc2U8e3Nsb3RzOkFycmF5PHN0cmluZ3xudWxsPn0+fHtzbG90czpBcnJheTxzdHJpbmd8bnVsbD59fVxuICAgICAqL1xuICAgIGFzeW5jIGxvYWRDaGFyYWN0ZXJFcXVpcG1lbnQoY2hhcmFjdGVyTmFtZSkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RvcmFnZU1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJsb2NhbFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkTG9jYWwoY2hhcmFjdGVyTmFtZSk7XG4gICAgICAgICAgICBjYXNlIFwic2VydmVyXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2xvYWRTZXJ2ZXIoY2hhcmFjdGVyTmFtZSk7XG4gICAgICAgICAgICBjYXNlIFwiaHlicmlkXCI6XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VydmVyRGF0YSA9IGF3YWl0IHRoaXMuX2xvYWRTZXJ2ZXIoY2hhcmFjdGVyTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWQjOatpeWIsOacrOWcsOe8k+WtmFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zYXZlTG9jYWwoY2hhcmFjdGVyTmFtZSwgc2VydmVyRGF0YS5zbG90cyB8fCBbXSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2ZXJEYXRhO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2Mud2FybihgW0VxdWlwbWVudERhdGFBZGFwdGVyXSDmnI3liqHlmajliqDovb3lpLHotKXvvIzkvb/nlKjmnKzlnLDnvJPlrZg6ICR7ZS5tZXNzYWdlfWApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZExvY2FsKGNoYXJhY3Rlck5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRMb2NhbChjaGFyYWN0ZXJOYW1lKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyA9PT09PSDmnKzlnLDlrZjlgqjlrp7njrAgPT09PT1cblxuICAgIF9zYXZlTG9jYWwoY2hhcmFjdGVyTmFtZSwgc2xvdHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IFwiY2hhcmFjdGVyX2VxdWlwbWVudF9cIiArIGNoYXJhY3Rlck5hbWU7XG4gICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkoeyBzbG90czogc2xvdHMgfHwgW10gfSk7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBqc29uKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjYy53YXJuKGBbRXF1aXBtZW50RGF0YUFkYXB0ZXJdIOacrOWcsOS/neWtmOWksei0pTogJHtlLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX2xvYWRMb2NhbChjaGFyYWN0ZXJOYW1lKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBcImNoYXJhY3Rlcl9lcXVpcG1lbnRfXCIgKyBjaGFyYWN0ZXJOYW1lO1xuICAgICAgICAgICAgY29uc3QganNvbiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICAgICAgaWYgKCFqc29uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc2xvdHM6IFtudWxsLCBudWxsLCBudWxsXSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoanNvbik7XG4gICAgICAgICAgICBjb25zdCBzbG90cyA9IEFycmF5LmlzQXJyYXkoZGF0YS5zbG90cykgPyBkYXRhLnNsb3RzIDogW107XG4gICAgICAgICAgICByZXR1cm4geyBzbG90cyB9O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjYy53YXJuKGBbRXF1aXBtZW50RGF0YUFkYXB0ZXJdIOacrOWcsOWKoOi9veWksei0pTogJHtlLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICByZXR1cm4geyBzbG90czogW251bGwsIG51bGwsIG51bGxdIH07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gPT09PT0g5pyN5Yqh5Zmo5a2Y5YKo5a6e546wID09PT09XG5cbiAgICBhc3luYyBfc2F2ZVNlcnZlcihjaGFyYWN0ZXJOYW1lLCBzbG90cykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgU2VydmVyQ29uZmlnID0gcmVxdWlyZShcIlNlcnZlckNvbmZpZ1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGJhc2VVUkwgPSBTZXJ2ZXJDb25maWcuZ2V0QmFzZVVSTCgpIHx8IHRoaXMuc2VydmVyQ29uZmlnLmJhc2VVUkw7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgJHtiYXNlVVJMfS9jaGFyYWN0ZXJzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGNoYXJhY3Rlck5hbWUpfS9lcXVpcG1lbnRgO1xuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuX2h0dHBSZXF1ZXN0KCdQVVQnLCB1cmwsIHtcbiAgICAgICAgICAgICAgICBlcXVpcG1lbnQ6IHsgc2xvdHM6IHNsb3RzIHx8IFtdIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGNjLmxvZyhgW0VxdWlwbWVudERhdGFBZGFwdGVyXSDmnI3liqHlmajkv53lrZjmiJDlip86ICR7Y2hhcmFjdGVyTmFtZX1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLm1lc3NhZ2UgfHwgXCLmnI3liqHlmajkv53lrZjlpLHotKVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKGBbRXF1aXBtZW50RGF0YUFkYXB0ZXJdIOacjeWKoeWZqOS/neWtmOWksei0pTogJHtlLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGFzeW5jIF9sb2FkU2VydmVyKGNoYXJhY3Rlck5hbWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IFNlcnZlckNvbmZpZyA9IHJlcXVpcmUoXCJTZXJ2ZXJDb25maWdcIik7XG4gICAgICAgICAgICBjb25zdCBiYXNlVVJMID0gU2VydmVyQ29uZmlnLmdldEJhc2VVUkwoKSB8fCB0aGlzLnNlcnZlckNvbmZpZy5iYXNlVVJMO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7YmFzZVVSTH0vY2hhcmFjdGVycy8ke2VuY29kZVVSSUNvbXBvbmVudChjaGFyYWN0ZXJOYW1lKX0vZXF1aXBtZW50YDtcblxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9odHRwUmVxdWVzdCgnR0VUJywgdXJsKTtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgJiYgcmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmVxdWlwbWVudCkge1xuICAgICAgICAgICAgICAgIGNjLmxvZyhgW0VxdWlwbWVudERhdGFBZGFwdGVyXSDmnI3liqHlmajliqDovb3miJDlip86ICR7Y2hhcmFjdGVyTmFtZX1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5lcXVpcG1lbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOayoeacieaVsOaNruaXtui/lOWbnum7mOiupOWAvFxuICAgICAgICAgICAgcmV0dXJuIHsgc2xvdHM6IFtudWxsLCBudWxsLCBudWxsXSB9O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihgW0VxdWlwbWVudERhdGFBZGFwdGVyXSDmnI3liqHlmajliqDovb3lpLHotKU6ICR7ZS5tZXNzYWdlfWApO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIVFRQIOivt+axguWwgeijhe+8iOW4pumHjeivle+8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgX2h0dHBSZXF1ZXN0KG1ldGhvZCwgdXJsLCBkYXRhID0gbnVsbCkge1xuICAgICAgICBjb25zdCBTZXJ2ZXJDb25maWcgPSByZXF1aXJlKFwiU2VydmVyQ29uZmlnXCIpO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgU2VydmVyQ29uZmlnLmdldEF1dGhIZWFkZXJzKCkgfHwge31cbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgbGFzdEVycm9yID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlcnZlckNvbmZpZy5yZXRyeUNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMuc2VydmVyQ29uZmlnLnRpbWVvdXRcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgKG1ldGhvZCA9PT0gJ1BPU1QnIHx8IG1ldGhvZCA9PT0gJ1BVVCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXN1bHQubWVzc2FnZSB8fCBgSFRUUCAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBsYXN0RXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICBpZiAoaSA8IHRoaXMuc2VydmVyQ29uZmlnLnJldHJ5Q291bnQgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLndhcm4oYFtFcXVpcG1lbnREYXRhQWRhcHRlcl0g6K+35rGC5aSx6LSl77yMJHsxMDAwICogKGkgKyAxKX1tcyDlkI7ph43or5UuLi4gKCR7aSArIDF9LyR7dGhpcy5zZXJ2ZXJDb25maWcucmV0cnlDb3VudH0pYCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwICogKGkgKyAxKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IGxhc3RFcnJvciB8fCBuZXcgRXJyb3IoXCLor7fmsYLlpLHotKVcIik7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFcXVpcG1lbnREYXRhQWRhcHRlcjtcblxuIl19