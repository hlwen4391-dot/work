
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/system/SkillDataAdapter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3823m6T/lG8atgyeZiDdHw', 'SkillDataAdapter');
// Scripts/system/SkillDataAdapter.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * 技能数据适配器
 * 抽象数据存储层，支持本地存储和服务器存储的切换
 * 
 * 使用适配器模式，可以轻松切换数据源：
 * - 本地模式：使用 localStorage
 * - 服务器模式：使用 HTTP API
 * - 混合模式：本地缓存 + 服务器同步
 */
var SkillDataAdapter = {
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
    // 技能数据的API路径
    skillsPath: "/characters" // 技能数据路径，例如：/api/characters/:name/skills
  },
  /**
   * 设置存储模式
   * @param {string} mode - 'local' | 'server' | 'hybrid'
   */
  setStorageMode: function setStorageMode(mode) {
    if (['local', 'server', 'hybrid'].includes(mode)) {
      this.storageMode = mode;
      cc.log("[SkillDataAdapter] \u5B58\u50A8\u6A21\u5F0F\u5DF2\u5207\u6362\u4E3A: " + mode);
    } else {
      cc.warn("[SkillDataAdapter] \u65E0\u6548\u7684\u5B58\u50A8\u6A21\u5F0F: " + mode);
    }
  },
  /**
   * 初始化适配器（设置服务器配置）
   * @param {Object} config - 服务器配置 { baseURL, timeout, retryCount, ... }
   */
  init: function init(config) {
    if (config) {
      Object.assign(this.serverConfig, config);
      cc.log("[SkillDataAdapter] \u670D\u52A1\u5668\u914D\u7F6E\u5DF2\u66F4\u65B0:", this.serverConfig);
    }
  },
  /**
   * 保存角色的技能数据（适配器方法）
   * @param {string} characterName - 角色名称
   * @param {Array} skills - 技能列表 [{ id, name, cooldown, effect, requireRage }, ...]
   * @returns {Promise<boolean>|boolean} 是否保存成功
   */
  saveCharacterSkills: function saveCharacterSkills(characterName, skills) {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = _this.storageMode;
            _context.next = _context.t0 === "local" ? 3 : _context.t0 === "server" ? 4 : _context.t0 === "hybrid" ? 7 : 11;
            break;
          case 3:
            return _context.abrupt("return", _this._saveLocal(characterName, skills));
          case 4:
            _context.next = 6;
            return _this._saveServer(characterName, skills);
          case 6:
            return _context.abrupt("return", _context.sent);
          case 7:
            // 先保存到本地（快速响应），然后同步到服务器
            _this._saveLocal(characterName, skills);
            _context.next = 10;
            return _this._saveServer(characterName, skills);
          case 10:
            return _context.abrupt("return", _context.sent);
          case 11:
            return _context.abrupt("return", _this._saveLocal(characterName, skills));
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  /**
   * 加载角色的技能数据（适配器方法）
   * @param {string} characterName - 角色名称
   * @returns {Promise<Array>|Array} 技能列表
   */
  loadCharacterSkills: function loadCharacterSkills(characterName) {
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
            cc.warn("[SkillDataAdapter] \u670D\u52A1\u5668\u52A0\u8F7D\u5931\u8D25\uFF0C\u4F7F\u7528\u672C\u5730\u7F13\u5B58: " + _context2.t1.message);
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
  _saveLocal: function _saveLocal(characterName, skills) {
    try {
      var key = "character_skills_" + characterName;
      var json = JSON.stringify(skills);
      cc.sys.localStorage.setItem(key, json);
      return true;
    } catch (e) {
      cc.error("[SkillDataAdapter] \u672C\u5730\u4FDD\u5B58\u5931\u8D25: " + e.message);
      return false;
    }
  },
  /**
   * 本地存储：加载数据
   * @private
   */
  _loadLocal: function _loadLocal(characterName) {
    try {
      var key = "character_skills_" + characterName;
      var json = cc.sys.localStorage.getItem(key);
      return json ? JSON.parse(json) : [];
    } catch (e) {
      cc.error("[SkillDataAdapter] \u672C\u5730\u52A0\u8F7D\u5931\u8D25: " + e.message);
      return [];
    }
  },
  /**
   * 服务器存储：保存数据
   * @private
   */
  _saveServer: function _saveServer(characterName, skills) {
    var _this3 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var skillsArray, ServerConfig, baseURL, url, response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            skillsArray = Array.isArray(skills) ? skills : skills ? [skills] : [];
            ServerConfig = require("ServerConfig");
            baseURL = ServerConfig.getBaseURL() || _this3.serverConfig.baseURL;
            url = baseURL + "/characters/" + encodeURIComponent(characterName) + "/skills";
            _context3.next = 7;
            return _this3._httpRequest('PUT', url, {
              skills: skillsArray
            });
          case 7:
            response = _context3.sent;
            if (!response.success) {
              _context3.next = 13;
              break;
            }
            cc.log("[SkillDataAdapter] \u670D\u52A1\u5668\u4FDD\u5B58\u6210\u529F: " + characterName);
            return _context3.abrupt("return", true);
          case 13:
            throw new Error(response.message || "服务器保存失败");
          case 14:
            _context3.next = 20;
            break;
          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](0);
            cc.error("[SkillDataAdapter] \u670D\u52A1\u5668\u4FDD\u5B58\u5931\u8D25: " + _context3.t0.message);
            throw _context3.t0;
          case 20:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 16]]);
    }))();
  },
  /**
   * 服务器存储：加载数据
   * @private
   */
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
            url = baseURL + "/characters/" + encodeURIComponent(characterName) + "/skills";
            _context4.next = 6;
            return _this4._httpRequest('GET', url);
          case 6:
            response = _context4.sent;
            if (!(response.success && response.data)) {
              _context4.next = 12;
              break;
            }
            cc.log("[SkillDataAdapter] \u670D\u52A1\u5668\u52A0\u8F7D\u6210\u529F: " + characterName);
            return _context4.abrupt("return", response.data.skills || []);
          case 12:
            return _context4.abrupt("return", []);
          case 13:
            _context4.next = 19;
            break;
          case 15:
            _context4.prev = 15;
            _context4.t0 = _context4["catch"](0);
            cc.error("[SkillDataAdapter] \u670D\u52A1\u5668\u52A0\u8F7D\u5931\u8D25: " + _context4.t0.message);
            throw _context4.t0;
          case 19:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 15]]);
    }))();
  },
  /**
   * HTTP请求封装（带重试机制）
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
                    cc.warn("[SkillDataAdapter] \u8BF7\u6C42\u5931\u8D25\uFF0C" + 1000 * (i + 1) + "ms\u540E\u91CD\u8BD5... (" + (i + 1) + "/" + _this5.serverConfig.retryCount + ")");
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
module.exports = SkillDataAdapter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxTa2lsbERhdGFBZGFwdGVyLmpzIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiU2tpbGxEYXRhQWRhcHRlciIsInN0b3JhZ2VNb2RlIiwic2VydmVyQ29uZmlnIiwiYmFzZVVSTCIsInRpbWVvdXQiLCJyZXRyeUNvdW50Iiwic2tpbGxzUGF0aCIsInNldFN0b3JhZ2VNb2RlIiwibW9kZSIsImluY2x1ZGVzIiwiY2MiLCJsb2ciLCJ3YXJuIiwiaW5pdCIsImNvbmZpZyIsImFzc2lnbiIsInNhdmVDaGFyYWN0ZXJTa2lsbHMiLCJjaGFyYWN0ZXJOYW1lIiwic2tpbGxzIiwiX3RoaXMiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInQwIiwiX3NhdmVMb2NhbCIsIl9zYXZlU2VydmVyIiwibG9hZENoYXJhY3RlclNraWxscyIsIl90aGlzMiIsIl9jYWxsZWUyIiwic2VydmVyRGF0YSIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsIl9sb2FkTG9jYWwiLCJfbG9hZFNlcnZlciIsInQxIiwibWVzc2FnZSIsImpzb24iLCJKU09OIiwic3RyaW5naWZ5Iiwic3lzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImUiLCJnZXRJdGVtIiwicGFyc2UiLCJfdGhpczMiLCJfY2FsbGVlMyIsInNraWxsc0FycmF5IiwiU2VydmVyQ29uZmlnIiwidXJsIiwicmVzcG9uc2UiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJBcnJheSIsImlzQXJyYXkiLCJyZXF1aXJlIiwiZ2V0QmFzZVVSTCIsImVuY29kZVVSSUNvbXBvbmVudCIsIl9odHRwUmVxdWVzdCIsInN1Y2Nlc3MiLCJfdGhpczQiLCJfY2FsbGVlNCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImRhdGEiLCJfdGhpczUiLCJfY2FsbGVlNSIsImhlYWRlcnMiLCJsYXN0RXJyb3IiLCJfbG9vcCIsIl9yZXQiLCJfY2FsbGVlNSQiLCJfY29udGV4dDYiLCJnZXRBdXRoSGVhZGVycyIsIm9wdGlvbnMiLCJfbG9vcCQiLCJfY29udGV4dDUiLCJib2R5IiwiZmV0Y2giLCJvayIsInN0YXR1cyIsInYiLCJzZXRUaW1lb3V0IiwibW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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RCxZQUFZLENBQUNHLFVBQVUsT0FBSTtvQkFBQ3VFLFNBQUEsQ0FBQTVJLElBQUE7b0JBQUEsT0FDbEcsSUFBSThCLE9BQU8sQ0FBQyxVQUFBeEQsT0FBTztzQkFBQSxPQUFJNEssVUFBVSxDQUFDNUssT0FBTyxFQUFFLElBQUksSUFBSTRDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFBQSxFQUFDO2tCQUFBO2tCQUFBO29CQUFBLE9BQUEwSCxTQUFBLENBQUFuRyxJQUFBO2dCQUFBO2NBQUEsR0FBQTRGLEtBQUE7WUFBQTtZQXhCcEVuSCxDQUFDLEdBQUcsQ0FBQztVQUFBO1lBQUEsTUFBRUEsQ0FBQyxHQUFHK0csTUFBSSxDQUFDL0QsWUFBWSxDQUFDRyxVQUFVO2NBQUFtRSxTQUFBLENBQUF4SSxJQUFBO2NBQUE7WUFBQTtZQUFBLE9BQUF3SSxTQUFBLENBQUFqRixhQUFBLENBQUE4RSxLQUFBLENBQUFuSCxDQUFBO1VBQUE7WUFBQW9ILElBQUEsR0FBQUUsU0FBQSxDQUFBakQsRUFBQTtZQUFBLGFBQUErQyxJQUFBO2NBQUFFLFNBQUEsQ0FBQXhJLElBQUE7Y0FBQTtZQUFBO1lBQUEsT0FBQXdJLFNBQUEsQ0FBQS9JLE1BQUEsV0FBQTZJLElBQUEsQ0FBQVcsQ0FBQTtVQUFBO1lBQUUvSCxDQUFDLEVBQUU7WUFBQXNILFNBQUEsQ0FBQXhJLElBQUE7WUFBQTtVQUFBO1lBQUEsTUE2Qi9Db0ksU0FBUyxJQUFJLElBQUluSixLQUFLLENBQUMsTUFBTSxDQUFDO1VBQUE7VUFBQTtZQUFBLE9BQUF1SixTQUFBLENBQUEvRixJQUFBO1FBQUE7TUFBQSxHQUFBeUYsUUFBQTtJQUFBO0VBQ3hDO0FBQ0osQ0FBQztBQUVEaUIsTUFBTSxDQUFDdE8sT0FBTyxHQUFHbUosZ0JBQWdCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOaKgOiDveaVsOaNrumAgumFjeWZqFxuICog5oq96LGh5pWw5o2u5a2Y5YKo5bGC77yM5pSv5oyB5pys5Zyw5a2Y5YKo5ZKM5pyN5Yqh5Zmo5a2Y5YKo55qE5YiH5o2iXG4gKiBcbiAqIOS9v+eUqOmAgumFjeWZqOaooeW8j++8jOWPr+S7pei9u+advuWIh+aNouaVsOaNrua6kO+8mlxuICogLSDmnKzlnLDmqKHlvI/vvJrkvb/nlKggbG9jYWxTdG9yYWdlXG4gKiAtIOacjeWKoeWZqOaooeW8j++8muS9v+eUqCBIVFRQIEFQSVxuICogLSDmt7flkIjmqKHlvI/vvJrmnKzlnLDnvJPlrZggKyDmnI3liqHlmajlkIzmraVcbiAqL1xudmFyIFNraWxsRGF0YUFkYXB0ZXIgPSB7XG4gICAgLy8g5a2Y5YKo5qih5byP77yaJ2xvY2FsJyB8ICdzZXJ2ZXInIHwgJ2h5YnJpZCdcbiAgICBzdG9yYWdlTW9kZTogXCJsb2NhbFwiLCAvLyDpu5jorqTkvb/nlKjmnKzlnLDlrZjlgqhcblxuICAgIC8vIOacjeWKoeWZqEFQSemFjee9rlxuICAgIHNlcnZlckNvbmZpZzoge1xuICAgICAgICBiYXNlVVJMOiBcImh0dHBzOi8veW91ci1hcGktc2VydmVyLmNvbS9hcGlcIixcbiAgICAgICAgdGltZW91dDogNTAwMCwgLy8g6K+35rGC6LaF5pe25pe26Ze077yI5q+r56eS77yJXG4gICAgICAgIHJldHJ5Q291bnQ6IDMsICAvLyDlpLHotKXph43or5XmrKHmlbBcbiAgICAgICAgLy8g5oqA6IO95pWw5o2u55qEQVBJ6Lev5b6EXG4gICAgICAgIHNraWxsc1BhdGg6IFwiL2NoYXJhY3RlcnNcIiAvLyDmioDog73mlbDmja7ot6/lvoTvvIzkvovlpoLvvJovYXBpL2NoYXJhY3RlcnMvOm5hbWUvc2tpbGxzXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiuvue9ruWtmOWCqOaooeW8j1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIC0gJ2xvY2FsJyB8ICdzZXJ2ZXInIHwgJ2h5YnJpZCdcbiAgICAgKi9cbiAgICBzZXRTdG9yYWdlTW9kZShtb2RlKSB7XG4gICAgICAgIGlmIChbJ2xvY2FsJywgJ3NlcnZlcicsICdoeWJyaWQnXS5pbmNsdWRlcyhtb2RlKSkge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlTW9kZSA9IG1vZGU7XG4gICAgICAgICAgICBjYy5sb2coYFtTa2lsbERhdGFBZGFwdGVyXSDlrZjlgqjmqKHlvI/lt7LliIfmjaLkuLo6ICR7bW9kZX1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLndhcm4oYFtTa2lsbERhdGFBZGFwdGVyXSDml6DmlYjnmoTlrZjlgqjmqKHlvI86ICR7bW9kZX1gKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbpgILphY3lmajvvIjorr7nva7mnI3liqHlmajphY3nva7vvIlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIC0g5pyN5Yqh5Zmo6YWN572uIHsgYmFzZVVSTCwgdGltZW91dCwgcmV0cnlDb3VudCwgLi4uIH1cbiAgICAgKi9cbiAgICBpbml0KGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuc2VydmVyQ29uZmlnLCBjb25maWcpO1xuICAgICAgICAgICAgY2MubG9nKGBbU2tpbGxEYXRhQWRhcHRlcl0g5pyN5Yqh5Zmo6YWN572u5bey5pu05pawOmAsIHRoaXMuc2VydmVyQ29uZmlnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDkv53lrZjop5LoibLnmoTmioDog73mlbDmja7vvIjpgILphY3lmajmlrnms5XvvIlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFjdGVyTmFtZSAtIOinkuiJsuWQjeensFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHNraWxscyAtIOaKgOiDveWIl+ihqCBbeyBpZCwgbmFtZSwgY29vbGRvd24sIGVmZmVjdCwgcmVxdWlyZVJhZ2UgfSwgLi4uXVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fGJvb2xlYW59IOaYr+WQpuS/neWtmOaIkOWKn1xuICAgICAqL1xuICAgIGFzeW5jIHNhdmVDaGFyYWN0ZXJTa2lsbHMoY2hhcmFjdGVyTmFtZSwgc2tpbGxzKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zdG9yYWdlTW9kZSkge1xuICAgICAgICAgICAgY2FzZSBcImxvY2FsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVMb2NhbChjaGFyYWN0ZXJOYW1lLCBza2lsbHMpO1xuICAgICAgICAgICAgY2FzZSBcInNlcnZlclwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9zYXZlU2VydmVyKGNoYXJhY3Rlck5hbWUsIHNraWxscyk7XG4gICAgICAgICAgICBjYXNlIFwiaHlicmlkXCI6XG4gICAgICAgICAgICAgICAgLy8g5YWI5L+d5a2Y5Yiw5pys5Zyw77yI5b+r6YCf5ZON5bqU77yJ77yM54S25ZCO5ZCM5q2l5Yiw5pyN5Yqh5ZmoXG4gICAgICAgICAgICAgICAgdGhpcy5fc2F2ZUxvY2FsKGNoYXJhY3Rlck5hbWUsIHNraWxscyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX3NhdmVTZXJ2ZXIoY2hhcmFjdGVyTmFtZSwgc2tpbGxzKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVMb2NhbChjaGFyYWN0ZXJOYW1lLCBza2lsbHMpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWKoOi9veinkuiJsueahOaKgOiDveaVsOaNru+8iOmAgumFjeWZqOaWueazle+8iVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJOYW1lIC0g6KeS6Imy5ZCN56ewXG4gICAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXk+fEFycmF5fSDmioDog73liJfooahcbiAgICAgKi9cbiAgICBhc3luYyBsb2FkQ2hhcmFjdGVyU2tpbGxzKGNoYXJhY3Rlck5hbWUpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0b3JhZ2VNb2RlKSB7XG4gICAgICAgICAgICBjYXNlIFwibG9jYWxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZExvY2FsKGNoYXJhY3Rlck5hbWUpO1xuICAgICAgICAgICAgY2FzZSBcInNlcnZlclwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9sb2FkU2VydmVyKGNoYXJhY3Rlck5hbWUpO1xuICAgICAgICAgICAgY2FzZSBcImh5YnJpZFwiOlxuICAgICAgICAgICAgICAgIC8vIOWFiOS7juacjeWKoeWZqOWKoOi9ve+8jOWksei0peWImeS9v+eUqOacrOWcsOe8k+WtmFxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZlckRhdGEgPSBhd2FpdCB0aGlzLl9sb2FkU2VydmVyKGNoYXJhY3Rlck5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAvLyDlkIzmraXliLDmnKzlnLDnvJPlrZhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2F2ZUxvY2FsKGNoYXJhY3Rlck5hbWUsIHNlcnZlckRhdGEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VydmVyRGF0YTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLndhcm4oYFtTa2lsbERhdGFBZGFwdGVyXSDmnI3liqHlmajliqDovb3lpLHotKXvvIzkvb/nlKjmnKzlnLDnvJPlrZg6ICR7ZS5tZXNzYWdlfWApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZExvY2FsKGNoYXJhY3Rlck5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRMb2NhbChjaGFyYWN0ZXJOYW1lKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmnKzlnLDlrZjlgqjvvJrkv53lrZjmlbDmja5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9zYXZlTG9jYWwoY2hhcmFjdGVyTmFtZSwgc2tpbGxzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBcImNoYXJhY3Rlcl9za2lsbHNfXCIgKyBjaGFyYWN0ZXJOYW1lO1xuICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHNraWxscyk7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBqc29uKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihgW1NraWxsRGF0YUFkYXB0ZXJdIOacrOWcsOS/neWtmOWksei0pTogJHtlLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5pys5Zyw5a2Y5YKo77ya5Yqg6L295pWw5o2uXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfbG9hZExvY2FsKGNoYXJhY3Rlck5hbWUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IFwiY2hhcmFjdGVyX3NraWxsc19cIiArIGNoYXJhY3Rlck5hbWU7XG4gICAgICAgICAgICBjb25zdCBqc29uID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgICAgICByZXR1cm4ganNvbiA/IEpTT04ucGFyc2UoanNvbikgOiBbXTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY2MuZXJyb3IoYFtTa2lsbERhdGFBZGFwdGVyXSDmnKzlnLDliqDovb3lpLHotKU6ICR7ZS5tZXNzYWdlfWApO1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOacjeWKoeWZqOWtmOWCqO+8muS/neWtmOaVsOaNrlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgX3NhdmVTZXJ2ZXIoY2hhcmFjdGVyTmFtZSwgc2tpbGxzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBza2lsbHNBcnJheSA9IEFycmF5LmlzQXJyYXkoc2tpbGxzKSA/IHNraWxscyA6IChza2lsbHMgPyBbc2tpbGxzXSA6IFtdKTtcbiAgICAgICAgICAgIGNvbnN0IFNlcnZlckNvbmZpZyA9IHJlcXVpcmUoXCJTZXJ2ZXJDb25maWdcIik7XG4gICAgICAgICAgICBjb25zdCBiYXNlVVJMID0gU2VydmVyQ29uZmlnLmdldEJhc2VVUkwoKSB8fCB0aGlzLnNlcnZlckNvbmZpZy5iYXNlVVJMO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7YmFzZVVSTH0vY2hhcmFjdGVycy8ke2VuY29kZVVSSUNvbXBvbmVudChjaGFyYWN0ZXJOYW1lKX0vc2tpbGxzYDtcblxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9odHRwUmVxdWVzdCgnUFVUJywgdXJsLCB7XG4gICAgICAgICAgICAgICAgc2tpbGxzOiBza2lsbHNBcnJheVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbU2tpbGxEYXRhQWRhcHRlcl0g5pyN5Yqh5Zmo5L+d5a2Y5oiQ5YqfOiAke2NoYXJhY3Rlck5hbWV9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5tZXNzYWdlIHx8IFwi5pyN5Yqh5Zmo5L+d5a2Y5aSx6LSlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihgW1NraWxsRGF0YUFkYXB0ZXJdIOacjeWKoeWZqOS/neWtmOWksei0pTogJHtlLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOacjeWKoeWZqOWtmOWCqO+8muWKoOi9veaVsOaNrlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgX2xvYWRTZXJ2ZXIoY2hhcmFjdGVyTmFtZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgU2VydmVyQ29uZmlnID0gcmVxdWlyZShcIlNlcnZlckNvbmZpZ1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGJhc2VVUkwgPSBTZXJ2ZXJDb25maWcuZ2V0QmFzZVVSTCgpIHx8IHRoaXMuc2VydmVyQ29uZmlnLmJhc2VVUkw7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgJHtiYXNlVVJMfS9jaGFyYWN0ZXJzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGNoYXJhY3Rlck5hbWUpfS9za2lsbHNgO1xuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuX2h0dHBSZXF1ZXN0KCdHRVQnLCB1cmwpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyAmJiByZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbU2tpbGxEYXRhQWRhcHRlcl0g5pyN5Yqh5Zmo5Yqg6L295oiQ5YqfOiAke2NoYXJhY3Rlck5hbWV9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuc2tpbGxzIHx8IFtdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDmsqHmnInmlbDmja7vvIzov5Tlm57nqbrmlbDnu4RcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKGBbU2tpbGxEYXRhQWRhcHRlcl0g5pyN5Yqh5Zmo5Yqg6L295aSx6LSlOiAke2UubWVzc2FnZX1gKTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSFRUUOivt+axguWwgeijhe+8iOW4pumHjeivleacuuWItu+8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgX2h0dHBSZXF1ZXN0KG1ldGhvZCwgdXJsLCBkYXRhID0gbnVsbCkge1xuICAgICAgICBjb25zdCBTZXJ2ZXJDb25maWcgPSByZXF1aXJlKFwiU2VydmVyQ29uZmlnXCIpO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgU2VydmVyQ29uZmlnLmdldEF1dGhIZWFkZXJzKCkgfHwge31cbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgbGFzdEVycm9yID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNlcnZlckNvbmZpZy5yZXRyeUNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMuc2VydmVyQ29uZmlnLnRpbWVvdXRcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgKG1ldGhvZCA9PT0gJ1BPU1QnIHx8IG1ldGhvZCA9PT0gJ1BVVCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXN1bHQubWVzc2FnZSB8fCBgSFRUUCAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBsYXN0RXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICBpZiAoaSA8IHRoaXMuc2VydmVyQ29uZmlnLnJldHJ5Q291bnQgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLndhcm4oYFtTa2lsbERhdGFBZGFwdGVyXSDor7fmsYLlpLHotKXvvIwkezEwMDAgKiAoaSArIDEpfW1z5ZCO6YeN6K+VLi4uICgke2kgKyAxfS8ke3RoaXMuc2VydmVyQ29uZmlnLnJldHJ5Q291bnR9KWApO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCAqIChpICsgMSkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBsYXN0RXJyb3IgfHwgbmV3IEVycm9yKFwi6K+35rGC5aSx6LSlXCIpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2tpbGxEYXRhQWRhcHRlcjtcbiJdfQ==