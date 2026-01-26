"use strict";
cc._RF.push(module, 'cf3e7dmCoNAy7s7xuf+Yavo', 'ItemDataManager');
// Scripts/system/ItemDataManager.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * 道具数据管理器
 * 负责保存和加载道具数据（全局共享，所有角色共用）
 * 
 * 注意：现在使用 ItemDataAdapter 作为数据层，支持本地存储和服务器存储的切换
 * 要切换到服务器模式，只需调用：ItemDataAdapter.setStorageMode('server')
 */
var ItemDataAdapter = require("ItemDataAdapter");
var ItemDataManager = {
  // 全局道具栏标识（所有角色共享）
  GLOBAL_INVENTORY_KEY: "shared_inventory",
  // 存储键前缀（仅用于本地存储）
  STORAGE_PREFIX: "character_items_",
  /**
   * 保存道具数据（全局共享）
   * @param {Array} items - 道具列表 [{ itemId, count }, ...]
   * @returns {Promise<boolean>|boolean} 是否保存成功（服务器模式下返回Promise）
   */
  saveItems: function saveItems(items) {
    // 使用全局道具栏标识
    var result = ItemDataAdapter.saveCharacterItems(this.GLOBAL_INVENTORY_KEY, items);

    // 如果是Promise（服务器模式），返回Promise
    if (result instanceof Promise) {
      return result.then(function (success) {
        if (success) {
          cc.log("[ItemDataManager] \u4FDD\u5B58\u5168\u5C40\u9053\u5177\u6570\u636E", items);
        }
        return success;
      });
    }

    // 本地模式，直接返回结果
    if (result) {
      cc.log("[ItemDataManager] \u4FDD\u5B58\u5168\u5C40\u9053\u5177\u6570\u636E", items);
    }
    return result;
  },
  /**
   * 加载道具数据（全局共享）
   * @returns {Promise<Array>|Array} 道具列表 [{ itemId, count }, ...] 或空数组（服务器模式下返回Promise）
   */
  loadItems: function loadItems() {
    // 使用全局道具栏标识
    var result = ItemDataAdapter.loadCharacterItems(this.GLOBAL_INVENTORY_KEY);

    // 如果是Promise（服务器模式），返回Promise
    if (result instanceof Promise) {
      return result.then(function (items) {
        if (items && items.length > 0) {
          cc.log("[ItemDataManager] \u52A0\u8F7D\u5168\u5C40\u9053\u5177\u6570\u636E", items);
        }
        return items || [];
      });
    }

    // 本地模式，直接返回结果
    if (result && result.length > 0) {
      cc.log("[ItemDataManager] \u52A0\u8F7D\u5168\u5C40\u9053\u5177\u6570\u636E", result);
    }
    return result || [];
  },
  /**
   * 添加道具到全局背包
   * @param {string} itemId - 道具ID
   * @param {number} count - 数量（默认1）
   * @returns {Promise<boolean>|boolean} 是否添加成功（服务器模式下返回Promise）
   */
  addItem: function addItem(itemId, count) {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var items, ItemConfig, itemConfig, existingItem, newCount;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (count === void 0) {
              count = 1;
            }
            _context.next = 3;
            return _this.loadItems();
          case 3:
            items = _context.sent;
            ItemConfig = require("ItemConfig");
            itemConfig = ItemConfig.getItemById(itemId);
            if (itemConfig) {
              _context.next = 9;
              break;
            }
            cc.error("[ItemDataManager] \u65E0\u6548\u7684\u9053\u5177ID: " + itemId);
            return _context.abrupt("return", false);
          case 9:
            // 查找是否已有该道具
            existingItem = items.find(function (item) {
              return item.itemId === itemId;
            });
            if (existingItem) {
              // 已有该道具，增加数量（不超过最大堆叠）
              newCount = Math.min(existingItem.count + count, itemConfig.maxStack || 99);
              existingItem.count = newCount;
              cc.log("[ItemDataManager] \u589E\u52A0\u9053\u5177\u6570\u91CF: " + itemId + ", \u5F53\u524D\u6570\u91CF: " + newCount);
            } else {
              // 新道具，添加到列表
              items.push({
                itemId: itemId,
                count: Math.min(count, itemConfig.maxStack || 99)
              });
              cc.log("[ItemDataManager] \u6DFB\u52A0\u65B0\u9053\u5177: " + itemId + ", \u6570\u91CF: " + count);
            }
            _context.next = 13;
            return _this.saveItems(items);
          case 13:
            return _context.abrupt("return", _context.sent);
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  /**
   * 移除道具（使用道具）
   * @param {string} itemId - 道具ID
   * @param {number} count - 数量（默认1）
   * @returns {Promise<boolean>|boolean} 是否移除成功（服务器模式下返回Promise）
   */
  removeItem: function removeItem(itemId, count) {
    var _this2 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var items, itemIndex, item;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (count === void 0) {
              count = 1;
            }
            _context2.next = 3;
            return _this2.loadItems();
          case 3:
            items = _context2.sent;
            itemIndex = items.findIndex(function (item) {
              return item.itemId === itemId;
            });
            if (!(itemIndex === -1)) {
              _context2.next = 8;
              break;
            }
            cc.warn("[ItemDataManager] \u6CA1\u6709\u9053\u5177: " + itemId);
            return _context2.abrupt("return", false);
          case 8:
            item = items[itemIndex];
            if (!(item.count < count)) {
              _context2.next = 12;
              break;
            }
            cc.warn("[ItemDataManager] \u9053\u5177\u6570\u91CF\u4E0D\u8DB3: " + itemId + ", \u5F53\u524D: " + item.count + ", \u9700\u8981: " + count);
            return _context2.abrupt("return", false);
          case 12:
            item.count -= count;
            if (item.count <= 0) {
              // 数量为0，移除该道具
              items.splice(itemIndex, 1);
              cc.log("[ItemDataManager] \u79FB\u9664\u9053\u5177: " + itemId);
            } else {
              cc.log("[ItemDataManager] \u51CF\u5C11\u9053\u5177\u6570\u91CF: " + itemId + ", \u5269\u4F59\u6570\u91CF: " + item.count);
            }
            _context2.next = 16;
            return _this2.saveItems(items);
          case 16:
            return _context2.abrupt("return", _context2.sent);
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  /**
   * 获取道具数量（全局共享）
   * @param {string} itemId - 道具ID
   * @returns {Promise<number>|number} 道具数量，如果没有返回0（服务器模式下返回Promise）
   */
  getItemCount: function getItemCount(itemId) {
    var _this3 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var items, item;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _this3.loadItems();
          case 2:
            items = _context3.sent;
            item = items.find(function (item) {
              return item.itemId === itemId;
            });
            return _context3.abrupt("return", item ? item.count : 0);
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  /**
   * 获取所有道具（包含完整配置信息，全局共享）
   * @returns {Promise<Array>|Array} 道具列表 [{ itemId, count, config }, ...]（服务器模式下返回Promise）
   */
  getAllItemsWithConfig: function getAllItemsWithConfig() {
    var _this4 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var items, ItemConfig;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _this4.loadItems();
          case 2:
            items = _context4.sent;
            ItemConfig = require("ItemConfig");
            return _context4.abrupt("return", items.map(function (item) {
              var config = ItemConfig.getItemById(item.itemId);
              return {
                itemId: item.itemId,
                count: item.count,
                config: config
              };
            }).filter(function (item) {
              return item.config !== null;
            }));
          case 5:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))();
  },
  // ========== 向后兼容的旧方法（已废弃，建议使用新方法） ==========
  /**
   * @deprecated 使用 saveItems() 代替
   * 保存角色的道具数据（保留用于向后兼容）
   */
  saveCharacterItems: function saveCharacterItems(characterName, items) {
    cc.warn("[ItemDataManager] saveCharacterItems() \u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 saveItems() \u4EE3\u66FF");
    return this.saveItems(items);
  },
  /**
   * @deprecated 使用 loadItems() 代替
   * 加载角色的道具数据（保留用于向后兼容）
   */
  loadCharacterItems: function loadCharacterItems(characterName) {
    cc.warn("[ItemDataManager] loadCharacterItems() \u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 loadItems() \u4EE3\u66FF");
    return this.loadItems();
  },
  /**
   * @deprecated 使用 getAllItemsWithConfig() 代替
   * 获取角色的所有道具（保留用于向后兼容）
   */
  getCharacterItemsWithConfig: function getCharacterItemsWithConfig(characterName) {
    cc.warn("[ItemDataManager] getCharacterItemsWithConfig() \u5DF2\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 getAllItemsWithConfig() \u4EE3\u66FF");
    return this.getAllItemsWithConfig();
  }
};
module.exports = ItemDataManager;

cc._RF.pop();