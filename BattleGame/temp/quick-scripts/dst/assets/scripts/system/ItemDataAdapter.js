
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/system/ItemDataAdapter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '177e3HVmfxDbJ0gInSKDnTN', 'ItemDataAdapter');
// Scripts/system/ItemDataAdapter.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * 道具数据适配器
 * 抽象数据存储层，支持本地存储和服务器存储的切换
 * 
 * 使用适配器模式，可以轻松切换数据源：
 * - 本地模式：使用 localStorage
 * - 服务器模式：使用 HTTP API
 * - 混合模式：本地缓存 + 服务器同步
 */
var ItemDataAdapter = {
  // 存储模式：'local' | 'server' | 'hybrid'
  storageMode: "local",
  // 默认使用本地存储

  // 服务器API配置
  serverConfig: {
    baseURL: "https://your-api-server.com/api",
    timeout: 5000,
    // 请求超时时间（毫秒）
    retryCount: 3,
    // 失败重试次数
    // 全局道具栏的API路径（如果服务器需要特殊处理）
    globalInventoryPath: "/inventory" // 全局道具栏路径，例如：/api/inventory
  },
  /**
   * 设置存储模式
   * @param {string} mode - 'local' | 'server' | 'hybrid'
   */
  setStorageMode: function setStorageMode(mode) {
    if (['local', 'server', 'hybrid'].includes(mode)) {
      this.storageMode = mode;
      cc.log("[ItemDataAdapter] \u5B58\u50A8\u6A21\u5F0F\u5DF2\u5207\u6362\u4E3A: " + mode);
    } else {
      cc.warn("[ItemDataAdapter] \u65E0\u6548\u7684\u5B58\u50A8\u6A21\u5F0F: " + mode);
    }
  },
  /**
   * 保存角色的道具数据（适配器方法）
   * @param {string} characterName - 角色名称
   * @param {Array} items - 道具列表
   * @returns {Promise<boolean>} 是否保存成功
   */
  saveCharacterItems: function saveCharacterItems(characterName, items) {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = _this.storageMode;
            _context.next = _context.t0 === "local" ? 3 : _context.t0 === "server" ? 4 : _context.t0 === "hybrid" ? 7 : 11;
            break;
          case 3:
            return _context.abrupt("return", _this._saveLocal(characterName, items));
          case 4:
            _context.next = 6;
            return _this._saveServer(characterName, items);
          case 6:
            return _context.abrupt("return", _context.sent);
          case 7:
            // 先保存到本地（快速响应），然后同步到服务器
            _this._saveLocal(characterName, items);
            _context.next = 10;
            return _this._saveServer(characterName, items);
          case 10:
            return _context.abrupt("return", _context.sent);
          case 11:
            return _context.abrupt("return", _this._saveLocal(characterName, items));
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  /**
   * 加载角色的道具数据（适配器方法）
   * @param {string} characterName - 角色名称
   * @returns {Promise<Array>} 道具列表
   */
  loadCharacterItems: function loadCharacterItems(characterName) {
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
            _this2._saveLocal(characterName, serverData);
            return _context2.abrupt("return", serverData);
          case 15:
            _context2.prev = 15;
            _context2.t1 = _context2["catch"](7);
            cc.warn("[ItemDataAdapter] \u670D\u52A1\u5668\u52A0\u8F7D\u5931\u8D25\uFF0C\u4F7F\u7528\u672C\u5730\u7F13\u5B58: " + _context2.t1.message);
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
  /**
   * 本地存储：保存数据
   * @private
   */
  _saveLocal: function _saveLocal(characterName, items) {
    try {
      var key = "character_items_" + characterName;
      var json = JSON.stringify(items);
      cc.sys.localStorage.setItem(key, json);
      return true;
    } catch (e) {
      cc.error("[ItemDataAdapter] \u672C\u5730\u4FDD\u5B58\u5931\u8D25: " + e.message);
      return false;
    }
  },
  /**
   * 本地存储：加载数据
   * @private
   */
  _loadLocal: function _loadLocal(characterName) {
    try {
      var key = "character_items_" + characterName;
      var json = cc.sys.localStorage.getItem(key);
      return json ? JSON.parse(json) : [];
    } catch (e) {
      cc.error("[ItemDataAdapter] \u672C\u5730\u52A0\u8F7D\u5931\u8D25: " + e.message);
      return [];
    }
  },
  /**
   * 服务器存储：保存数据
   * @private
   */
  _saveServer: function _saveServer(characterName, items) {
    var _this3 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var url, response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            // 如果是全局道具栏，使用特殊路径

            if (characterName === "shared_inventory") {
              url = "" + _this3.serverConfig.baseURL + (_this3.serverConfig.globalInventoryPath || "/inventory");
            } else {
              url = _this3.serverConfig.baseURL + "/characters/" + characterName + "/items";
            }
            _context3.next = 4;
            return _this3._httpRequest('PUT', url, {
              items: items
            });
          case 4:
            response = _context3.sent;
            if (!response.success) {
              _context3.next = 10;
              break;
            }
            cc.log("[ItemDataAdapter] \u670D\u52A1\u5668\u4FDD\u5B58\u6210\u529F: " + characterName);
            return _context3.abrupt("return", true);
          case 10:
            throw new Error(response.message || "服务器保存失败");
          case 11:
            _context3.next = 17;
            break;
          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            cc.error("[ItemDataAdapter] \u670D\u52A1\u5668\u4FDD\u5B58\u5931\u8D25: " + _context3.t0.message);
            throw _context3.t0;
          case 17:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 13]]);
    }))();
  },
  /**
   * 服务器存储：加载数据
   * @private
   */
  _loadServer: function _loadServer(characterName) {
    var _this4 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var url, response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            // 如果是全局道具栏，使用特殊路径

            if (characterName === "shared_inventory") {
              url = "" + _this4.serverConfig.baseURL + (_this4.serverConfig.globalInventoryPath || "/inventory");
            } else {
              url = _this4.serverConfig.baseURL + "/characters/" + characterName + "/items";
            }
            _context4.next = 4;
            return _this4._httpRequest('GET', url);
          case 4:
            response = _context4.sent;
            if (!(response.success && response.data)) {
              _context4.next = 10;
              break;
            }
            cc.log("[ItemDataAdapter] \u670D\u52A1\u5668\u52A0\u8F7D\u6210\u529F: " + characterName);
            return _context4.abrupt("return", response.data.items || []);
          case 10:
            throw new Error(response.message || "服务器加载失败");
          case 11:
            _context4.next = 17;
            break;
          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](0);
            cc.error("[ItemDataAdapter] \u670D\u52A1\u5668\u52A0\u8F7D\u5931\u8D25: " + _context4.t0.message);
            throw _context4.t0;
          case 17:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 13]]);
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
    var _this5 = this;
    if (data === void 0) {
      data = null;
    }
    return new Promise(function (resolve, reject) {
      var retryCount = 0;
      var doRequest = function doRequest() {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        // 设置超时
        xhr.timeout = _this5.serverConfig.timeout;
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
            if (retryCount < _this5.serverConfig.retryCount) {
              retryCount++;
              cc.log("[ItemDataAdapter] \u8BF7\u6C42\u5931\u8D25\uFF0C\u91CD\u8BD5 " + retryCount + "/" + _this5.serverConfig.retryCount);
              setTimeout(doRequest, 1000 * retryCount); // 递增延迟
            } else {
              reject(new Error("HTTP " + xhr.status + ": " + xhr.statusText));
            }
          }
        };
        xhr.onerror = function () {
          if (retryCount < _this5.serverConfig.retryCount) {
            retryCount++;
            cc.log("[ItemDataAdapter] \u7F51\u7EDC\u9519\u8BEF\uFF0C\u91CD\u8BD5 " + retryCount + "/" + _this5.serverConfig.retryCount);
            setTimeout(doRequest, 1000 * retryCount);
          } else {
            reject(new Error("网络请求失败"));
          }
        };
        xhr.ontimeout = function () {
          if (retryCount < _this5.serverConfig.retryCount) {
            retryCount++;
            cc.log("[ItemDataAdapter] \u8BF7\u6C42\u8D85\u65F6\uFF0C\u91CD\u8BD5 " + retryCount + "/" + _this5.serverConfig.retryCount);
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
module.exports = ItemDataAdapter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxJdGVtRGF0YUFkYXB0ZXIuanMiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJJdGVtRGF0YUFkYXB0ZXIiLCJzdG9yYWdlTW9kZSIsInNlcnZlckNvbmZpZyIsImJhc2VVUkwiLCJ0aW1lb3V0IiwicmV0cnlDb3VudCIsImdsb2JhbEludmVudG9yeVBhdGgiLCJzZXRTdG9yYWdlTW9kZSIsIm1vZGUiLCJpbmNsdWRlcyIsImNjIiwibG9nIiwid2FybiIsInNhdmVDaGFyYWN0ZXJJdGVtcyIsImNoYXJhY3Rlck5hbWUiLCJpdGVtcyIsIl90aGlzIiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJ0MCIsIl9zYXZlTG9jYWwiLCJfc2F2ZVNlcnZlciIsImxvYWRDaGFyYWN0ZXJJdGVtcyIsIl90aGlzMiIsIl9jYWxsZWUyIiwic2VydmVyRGF0YSIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsIl9sb2FkTG9jYWwiLCJfbG9hZFNlcnZlciIsInQxIiwibWVzc2FnZSIsImpzb24iLCJKU09OIiwic3RyaW5naWZ5Iiwic3lzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImUiLCJnZXRJdGVtIiwicGFyc2UiLCJfdGhpczMiLCJfY2FsbGVlMyIsInVybCIsInJlc3BvbnNlIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiX2h0dHBSZXF1ZXN0Iiwic3VjY2VzcyIsIl90aGlzNCIsIl9jYWxsZWU0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiZGF0YSIsIl90aGlzNSIsImRvUmVxdWVzdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbmxvYWQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJzZXRUaW1lb3V0Iiwic3RhdHVzVGV4dCIsIm9uZXJyb3IiLCJvbnRpbWVvdXQiLCJzZW5kIiwibW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsT0FBQSxTQUFBQSxPQUFBLE9BQUFDLEVBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLE1BQUEsR0FBQUgsRUFBQSxDQUFBSSxjQUFBLEVB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LE1BQUksQ0FBQ3JELFlBQVksQ0FBQ0csVUFBVSxFQUFFO1lBQzNDQSxVQUFVLEVBQUU7WUFDWkssRUFBRSxDQUFDQyxHQUFHLG1FQUE4Qk4sVUFBVSxTQUFJa0QsTUFBSSxDQUFDckQsWUFBWSxDQUFDRyxVQUFVLENBQUc7WUFDakYyRCxVQUFVLENBQUNSLFNBQVMsRUFBRSxJQUFJLEdBQUduRCxVQUFVLENBQUM7VUFDNUMsQ0FBQyxNQUFNO1lBQ0g5RixNQUFNLENBQUMsSUFBSVUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1VBQy9CO1FBQ0osQ0FBQztRQUVEd0ksR0FBRyxDQUFDVSxTQUFTLEdBQUcsWUFBTTtVQUNsQixJQUFJOUQsVUFBVSxHQUFHa0QsTUFBSSxDQUFDckQsWUFBWSxDQUFDRyxVQUFVLEVBQUU7WUFDM0NBLFVBQVUsRUFBRTtZQUNaSyxFQUFFLENBQUNDLEdBQUcsbUVBQThCTixVQUFVLFNBQUlrRCxNQUFJLENBQUNyRCxZQUFZLENBQUNHLFVBQVUsQ0FBRztZQUNqRjJELFVBQVUsQ0FBQ1IsU0FBUyxFQUFFLElBQUksR0FBR25ELFVBQVUsQ0FBQztVQUM1QyxDQUFDLE1BQU07WUFDSDlGLE1BQU0sQ0FBQyxJQUFJVSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7VUFDN0I7UUFDSixDQUFDO1FBRUQsSUFBSXFJLElBQUksRUFBRTtVQUNORyxHQUFHLENBQUNXLElBQUksQ0FBQ2xDLElBQUksQ0FBQ0MsU0FBUyxDQUFDbUIsSUFBSSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxNQUFNO1VBQ0hHLEdBQUcsQ0FBQ1csSUFBSSxFQUFFO1FBQ2Q7TUFDSixDQUFDO01BRURaLFNBQVMsRUFBRTtJQUNmLENBQUMsQ0FBQztFQUNOO0FBQ0osQ0FBQztBQUVEYSxNQUFNLENBQUN4TixPQUFPLEdBQUdtSixlQUFlIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog6YGT5YW35pWw5o2u6YCC6YWN5ZmoXHJcbiAqIOaKveixoeaVsOaNruWtmOWCqOWxgu+8jOaUr+aMgeacrOWcsOWtmOWCqOWSjOacjeWKoeWZqOWtmOWCqOeahOWIh+aNolxyXG4gKiBcclxuICog5L2/55So6YCC6YWN5Zmo5qih5byP77yM5Y+v5Lul6L275p2+5YiH5o2i5pWw5o2u5rqQ77yaXHJcbiAqIC0g5pys5Zyw5qih5byP77ya5L2/55SoIGxvY2FsU3RvcmFnZVxyXG4gKiAtIOacjeWKoeWZqOaooeW8j++8muS9v+eUqCBIVFRQIEFQSVxyXG4gKiAtIOa3t+WQiOaooeW8j++8muacrOWcsOe8k+WtmCArIOacjeWKoeWZqOWQjOatpVxyXG4gKi9cclxudmFyIEl0ZW1EYXRhQWRhcHRlciA9IHtcclxuICAgIC8vIOWtmOWCqOaooeW8j++8midsb2NhbCcgfCAnc2VydmVyJyB8ICdoeWJyaWQnXHJcbiAgICBzdG9yYWdlTW9kZTogXCJsb2NhbFwiLCAvLyDpu5jorqTkvb/nlKjmnKzlnLDlrZjlgqhcclxuXHJcbiAgICAvLyDmnI3liqHlmahBUEnphY3nva5cclxuICAgIHNlcnZlckNvbmZpZzoge1xyXG4gICAgICAgIGJhc2VVUkw6IFwiaHR0cHM6Ly95b3VyLWFwaS1zZXJ2ZXIuY29tL2FwaVwiLFxyXG4gICAgICAgIHRpbWVvdXQ6IDUwMDAsIC8vIOivt+axgui2heaXtuaXtumXtO+8iOavq+enku+8iVxyXG4gICAgICAgIHJldHJ5Q291bnQ6IDMsICAvLyDlpLHotKXph43or5XmrKHmlbBcclxuICAgICAgICAvLyDlhajlsYDpgZPlhbfmoI/nmoRBUEnot6/lvoTvvIjlpoLmnpzmnI3liqHlmajpnIDopoHnibnmrorlpITnkIbvvIlcclxuICAgICAgICBnbG9iYWxJbnZlbnRvcnlQYXRoOiBcIi9pbnZlbnRvcnlcIiAvLyDlhajlsYDpgZPlhbfmoI/ot6/lvoTvvIzkvovlpoLvvJovYXBpL2ludmVudG9yeVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWtmOWCqOaooeW8j1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgLSAnbG9jYWwnIHwgJ3NlcnZlcicgfCAnaHlicmlkJ1xyXG4gICAgICovXHJcbiAgICBzZXRTdG9yYWdlTW9kZShtb2RlKSB7XHJcbiAgICAgICAgaWYgKFsnbG9jYWwnLCAnc2VydmVyJywgJ2h5YnJpZCddLmluY2x1ZGVzKG1vZGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZU1vZGUgPSBtb2RlO1xyXG4gICAgICAgICAgICBjYy5sb2coYFtJdGVtRGF0YUFkYXB0ZXJdIOWtmOWCqOaooeW8j+W3suWIh+aNouS4ujogJHttb2RlfWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oYFtJdGVtRGF0YUFkYXB0ZXJdIOaXoOaViOeahOWtmOWCqOaooeW8jzogJHttb2RlfWApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkv53lrZjop5LoibLnmoTpgZPlhbfmlbDmja7vvIjpgILphY3lmajmlrnms5XvvIlcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJOYW1lIC0g6KeS6Imy5ZCN56ewXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBpdGVtcyAtIOmBk+WFt+WIl+ihqFxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IOaYr+WQpuS/neWtmOaIkOWKn1xyXG4gICAgICovXHJcbiAgICBhc3luYyBzYXZlQ2hhcmFjdGVySXRlbXMoY2hhcmFjdGVyTmFtZSwgaXRlbXMpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RvcmFnZU1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImxvY2FsXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZUxvY2FsKGNoYXJhY3Rlck5hbWUsIGl0ZW1zKTtcclxuICAgICAgICAgICAgY2FzZSBcInNlcnZlclwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX3NhdmVTZXJ2ZXIoY2hhcmFjdGVyTmFtZSwgaXRlbXMpO1xyXG4gICAgICAgICAgICBjYXNlIFwiaHlicmlkXCI6XHJcbiAgICAgICAgICAgICAgICAvLyDlhYjkv53lrZjliLDmnKzlnLDvvIjlv6vpgJ/lk43lupTvvInvvIznhLblkI7lkIzmraXliLDmnI3liqHlmahcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NhdmVMb2NhbChjaGFyYWN0ZXJOYW1lLCBpdGVtcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fc2F2ZVNlcnZlcihjaGFyYWN0ZXJOYW1lLCBpdGVtcyk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZUxvY2FsKGNoYXJhY3Rlck5hbWUsIGl0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296KeS6Imy55qE6YGT5YW35pWw5o2u77yI6YCC6YWN5Zmo5pa55rOV77yJXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFjdGVyTmFtZSAtIOinkuiJsuWQjeensFxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXk+fSDpgZPlhbfliJfooahcclxuICAgICAqL1xyXG4gICAgYXN5bmMgbG9hZENoYXJhY3Rlckl0ZW1zKGNoYXJhY3Rlck5hbWUpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RvcmFnZU1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImxvY2FsXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZExvY2FsKGNoYXJhY3Rlck5hbWUpO1xyXG4gICAgICAgICAgICBjYXNlIFwic2VydmVyXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fbG9hZFNlcnZlcihjaGFyYWN0ZXJOYW1lKTtcclxuICAgICAgICAgICAgY2FzZSBcImh5YnJpZFwiOlxyXG4gICAgICAgICAgICAgICAgLy8g5YWI5LuO5pyN5Yqh5Zmo5Yqg6L2977yM5aSx6LSl5YiZ5L2/55So5pys5Zyw57yT5a2YXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZlckRhdGEgPSBhd2FpdCB0aGlzLl9sb2FkU2VydmVyKGNoYXJhY3Rlck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWQjOatpeWIsOacrOWcsOe8k+WtmFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NhdmVMb2NhbChjaGFyYWN0ZXJOYW1lLCBzZXJ2ZXJEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VydmVyRGF0YTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy53YXJuKGBbSXRlbURhdGFBZGFwdGVyXSDmnI3liqHlmajliqDovb3lpLHotKXvvIzkvb/nlKjmnKzlnLDnvJPlrZg6ICR7ZS5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkTG9jYWwoY2hhcmFjdGVyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZExvY2FsKGNoYXJhY3Rlck5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnKzlnLDlrZjlgqjvvJrkv53lrZjmlbDmja5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9zYXZlTG9jYWwoY2hhcmFjdGVyTmFtZSwgaXRlbXMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBcImNoYXJhY3Rlcl9pdGVtc19cIiArIGNoYXJhY3Rlck5hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShpdGVtcyk7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGpzb24pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKGBbSXRlbURhdGFBZGFwdGVyXSDmnKzlnLDkv53lrZjlpLHotKU6ICR7ZS5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOacrOWcsOWtmOWCqO+8muWKoOi9veaVsOaNrlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2xvYWRMb2NhbChjaGFyYWN0ZXJOYW1lKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gXCJjaGFyYWN0ZXJfaXRlbXNfXCIgKyBjaGFyYWN0ZXJOYW1lO1xyXG4gICAgICAgICAgICBjb25zdCBqc29uID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgICAgIHJldHVybiBqc29uID8gSlNPTi5wYXJzZShqc29uKSA6IFtdO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoYFtJdGVtRGF0YUFkYXB0ZXJdIOacrOWcsOWKoOi9veWksei0pTogJHtlLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pyN5Yqh5Zmo5a2Y5YKo77ya5L+d5a2Y5pWw5o2uXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBhc3luYyBfc2F2ZVNlcnZlcihjaGFyYWN0ZXJOYW1lLCBpdGVtcykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIOWmguaenOaYr+WFqOWxgOmBk+WFt+agj++8jOS9v+eUqOeJueauiui3r+W+hFxyXG4gICAgICAgICAgICBsZXQgdXJsO1xyXG4gICAgICAgICAgICBpZiAoY2hhcmFjdGVyTmFtZSA9PT0gXCJzaGFyZWRfaW52ZW50b3J5XCIpIHtcclxuICAgICAgICAgICAgICAgIHVybCA9IGAke3RoaXMuc2VydmVyQ29uZmlnLmJhc2VVUkx9JHt0aGlzLnNlcnZlckNvbmZpZy5nbG9iYWxJbnZlbnRvcnlQYXRoIHx8IFwiL2ludmVudG9yeVwifWA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSBgJHt0aGlzLnNlcnZlckNvbmZpZy5iYXNlVVJMfS9jaGFyYWN0ZXJzLyR7Y2hhcmFjdGVyTmFtZX0vaXRlbXNgO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuX2h0dHBSZXF1ZXN0KCdQVVQnLCB1cmwsIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBpdGVtc1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtJdGVtRGF0YUFkYXB0ZXJdIOacjeWKoeWZqOS/neWtmOaIkOWKnzogJHtjaGFyYWN0ZXJOYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UubWVzc2FnZSB8fCBcIuacjeWKoeWZqOS/neWtmOWksei0pVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoYFtJdGVtRGF0YUFkYXB0ZXJdIOacjeWKoeWZqOS/neWtmOWksei0pTogJHtlLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOacjeWKoeWZqOWtmOWCqO+8muWKoOi9veaVsOaNrlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgYXN5bmMgX2xvYWRTZXJ2ZXIoY2hhcmFjdGVyTmFtZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIOWmguaenOaYr+WFqOWxgOmBk+WFt+agj++8jOS9v+eUqOeJueauiui3r+W+hFxyXG4gICAgICAgICAgICBsZXQgdXJsO1xyXG4gICAgICAgICAgICBpZiAoY2hhcmFjdGVyTmFtZSA9PT0gXCJzaGFyZWRfaW52ZW50b3J5XCIpIHtcclxuICAgICAgICAgICAgICAgIHVybCA9IGAke3RoaXMuc2VydmVyQ29uZmlnLmJhc2VVUkx9JHt0aGlzLnNlcnZlckNvbmZpZy5nbG9iYWxJbnZlbnRvcnlQYXRoIHx8IFwiL2ludmVudG9yeVwifWA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSBgJHt0aGlzLnNlcnZlckNvbmZpZy5iYXNlVVJMfS9jaGFyYWN0ZXJzLyR7Y2hhcmFjdGVyTmFtZX0vaXRlbXNgO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuX2h0dHBSZXF1ZXN0KCdHRVQnLCB1cmwpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgJiYgcmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKGBbSXRlbURhdGFBZGFwdGVyXSDmnI3liqHlmajliqDovb3miJDlip86ICR7Y2hhcmFjdGVyTmFtZX1gKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLml0ZW1zIHx8IFtdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLm1lc3NhZ2UgfHwgXCLmnI3liqHlmajliqDovb3lpLHotKVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKGBbSXRlbURhdGFBZGFwdGVyXSDmnI3liqHlmajliqDovb3lpLHotKU6ICR7ZS5tZXNzYWdlfWApO1xyXG4gICAgICAgICAgICB0aHJvdyBlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIVFRQ6K+35rGC5bCB6KOF77yI5pSv5oyB6YeN6K+V77yJXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCAtIEhUVFDmlrnms5VcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSDor7fmsYJVUkxcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0g6K+35rGC5pWw5o2uXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fSDlk43lupTmlbDmja5cclxuICAgICAqL1xyXG4gICAgX2h0dHBSZXF1ZXN0KG1ldGhvZCwgdXJsLCBkYXRhID0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXRyeUNvdW50ID0gMDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRvUmVxdWVzdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICAgICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g6K6+572u6LaF5pe2XHJcbiAgICAgICAgICAgICAgICB4aHIudGltZW91dCA9IHRoaXMuc2VydmVyQ29uZmlnLnRpbWVvdXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB4aHIucmVzcG9uc2VUZXh0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJldHJ5Q291bnQgPCB0aGlzLnNlcnZlckNvbmZpZy5yZXRyeUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRyeUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtJdGVtRGF0YUFkYXB0ZXJdIOivt+axguWksei0pe+8jOmHjeivlSAke3JldHJ5Q291bnR9LyR7dGhpcy5zZXJ2ZXJDb25maWcucmV0cnlDb3VudH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZG9SZXF1ZXN0LCAxMDAwICogcmV0cnlDb3VudCk7IC8vIOmAkuWinuW7tui/n1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgSFRUUCAke3hoci5zdGF0dXN9OiAke3hoci5zdGF0dXNUZXh0fWApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldHJ5Q291bnQgPCB0aGlzLnNlcnZlckNvbmZpZy5yZXRyeUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHJ5Q291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbSXRlbURhdGFBZGFwdGVyXSDnvZHnu5zplJnor6/vvIzph43or5UgJHtyZXRyeUNvdW50fS8ke3RoaXMuc2VydmVyQ29uZmlnLnJldHJ5Q291bnR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZG9SZXF1ZXN0LCAxMDAwICogcmV0cnlDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIue9kee7nOivt+axguWksei0pVwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB4aHIub250aW1lb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXRyeUNvdW50IDwgdGhpcy5zZXJ2ZXJDb25maWcucmV0cnlDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRyeUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0l0ZW1EYXRhQWRhcHRlcl0g6K+35rGC6LaF5pe277yM6YeN6K+VICR7cmV0cnlDb3VudH0vJHt0aGlzLnNlcnZlckNvbmZpZy5yZXRyeUNvdW50fWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGRvUmVxdWVzdCwgMTAwMCAqIHJldHJ5Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCLor7fmsYLotoXml7ZcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBkb1JlcXVlc3QoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSXRlbURhdGFBZGFwdGVyO1xyXG4iXX0=