"use strict";
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