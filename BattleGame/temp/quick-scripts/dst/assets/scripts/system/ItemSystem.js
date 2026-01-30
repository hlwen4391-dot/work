
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/system/ItemSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6e72npIwRCu5W0QZ45HO2u', 'ItemSystem');
// Scripts/system/ItemSystem.js

"use strict";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * 道具使用系统
 * 处理道具的使用逻辑
 */
var ItemConfig = require("ItemConfig");
var ItemDataManager = require("ItemDataManager");
var LevelSystem = require("LevelSystem");
var SkillDataManager = require("SkillDataManager");
var _require = require("SkillConfig"),
  getSkillById = _require.getSkillById;
var ItemSystem = {
  /**
   * 使用道具（全局共享道具栏）
   * @param {cc.Node} characterNode - 角色节点
   * @param {string} itemId - 道具ID
   * @returns {Promise<Object>|Object} 使用结果 { success: boolean, message: string, ... }（服务器模式下返回Promise）
   */
  useItem: function useItem(characterNode, itemId) {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var itemCount, itemConfig, result, effectType;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(!characterNode || !itemId)) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return", {
              success: false,
              message: "参数不完整"
            });
          case 2:
            _context.next = 4;
            return ItemDataManager.getItemCount(itemId);
          case 4:
            itemCount = _context.sent;
            if (!(itemCount <= 0)) {
              _context.next = 7;
              break;
            }
            return _context.abrupt("return", {
              success: false,
              message: "没有该道具"
            });
          case 7:
            // 获取道具配置
            itemConfig = ItemConfig.getItemById(itemId);
            if (itemConfig) {
              _context.next = 10;
              break;
            }
            return _context.abrupt("return", {
              success: false,
              message: "无效的道具配置"
            });
          case 10:
            // 根据道具效果类型执行相应逻辑
            result = null;
            effectType = String(itemConfig.effectType || "").toLowerCase();
            _context.t0 = effectType;
            _context.next = _context.t0 === "level_up" ? 15 : _context.t0 === "exp" ? 17 : _context.t0 === "hp" ? 19 : _context.t0 === "skill_scroll" ? 21 : 25;
            break;
          case 15:
            result = _this._useLevelUpItem(characterNode, itemConfig);
            return _context.abrupt("break", 33);
          case 17:
            result = _this._useExpItem(characterNode, itemConfig);
            return _context.abrupt("break", 33);
          case 19:
            result = _this._useHpItem(characterNode, itemConfig);
            return _context.abrupt("break", 33);
          case 21:
            _context.next = 23;
            return _this._useSkillScrollItem(characterNode, itemConfig);
          case 23:
            result = _context.sent;
            return _context.abrupt("break", 33);
          case 25:
            if (!(itemConfig.skillId != null && itemConfig.skillId !== undefined)) {
              _context.next = 31;
              break;
            }
            _context.next = 28;
            return _this._useSkillScrollItem(characterNode, itemConfig);
          case 28:
            result = _context.sent;
            _context.next = 32;
            break;
          case 31:
            return _context.abrupt("return", {
              success: false,
              message: "\u672A\u77E5\u7684\u9053\u5177\u6548\u679C\u7C7B\u578B: " + itemConfig.effectType
            });
          case 32:
            return _context.abrupt("break", 33);
          case 33:
            if (!result.success) {
              _context.next = 37;
              break;
            }
            _context.next = 36;
            return ItemDataManager.removeItem(itemId, 1);
          case 36:
            cc.log("[ItemSystem] \u4F7F\u7528\u9053\u5177\u6210\u529F: " + itemConfig.name);
          case 37:
            return _context.abrupt("return", result);
          case 38:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  /**
   * 使用升级类道具
   * @private
   * @param {cc.Node} characterNode - 角色节点
   * @param {Object} itemConfig - 道具配置
   * @returns {Object} 使用结果
   */
  _useLevelUpItem: function _useLevelUpItem(characterNode, itemConfig) {
    var LevelConfig = require("LevelConfig");
    var CharacterDataManager = require("CharacterDataManager");
    var stats = characterNode.getComponent("StatsComponent");
    if (!stats) {
      return {
        success: false,
        message: "角色没有StatsComponent组件"
      };
    }

    // 检查是否已满级
    if (stats.isMaxLevel && stats.isMaxLevel()) {
      return {
        success: false,
        message: "角色已达到最大等级"
      };
    }

    // 提升等级
    var oldLevel = stats.level;
    var levelUpCount = itemConfig.effectValue || 1;
    for (var i = 0; i < levelUpCount; i++) {
      if (stats.isMaxLevel && stats.isMaxLevel()) {
        break; // 已达到最大等级，停止升级
      }

      // 直接升级
      stats.level += 1;
      stats._applyLevelBonus();
    }
    var newLevel = stats.level;

    // 重置经验值为新等级对应的最小经验值（这样显示时就是0/下一级所需经验）
    stats.exp = LevelConfig.getExpForLevel(newLevel);
    cc.log("[ItemSystem] \u5347\u7EA7\u540E\u91CD\u7F6E\u7ECF\u9A8C\u503C: " + stats.exp + " (\u7B49\u7EA7" + newLevel + "\u7684\u6700\u5C0F\u7ECF\u9A8C\u503C)");

    // 恢复满生命值
    stats.hp = stats.maxHp;
    cc.log("[ItemSystem] \u5347\u7EA7\u540E\u6062\u590D\u6EE1\u751F\u547D\u503C: " + stats.hp + "/" + stats.maxHp);

    // 更新显示
    if (stats.updateExpBar) {
      stats.updateExpBar();
    }
    if (stats.updateHealthBar) {
      stats.updateHealthBar();
    }

    // 保存到本地存储（使用原始角色名称，而不是节点名称）
    // 节点名称可能是 "Display_英雄1"，需要提取原始名称
    var characterName = characterNode.name;
    if (characterName.startsWith("Display_")) {
      characterName = characterName.replace("Display_", "");
    }

    // 如果节点上有存储的原始名称，优先使用
    if (characterNode._originalCharacterName) {
      characterName = characterNode._originalCharacterName;
    }

    // 直接保存数据，而不是通过saveCharacterLevel（因为节点名称可能不匹配）
    // 重要：保存基础属性时，必须保持原有的基础属性不变（基础属性不应该因为升级而改变）
    var UnitDataConfig = require("UnitDataConfig");
    var existingData = CharacterDataManager.loadCharacterLevel(characterName);

    // 基础属性应该在第一次创建角色时保存，之后不应该改变
    // 如果已有保存的数据，使用原有的基础属性（保持不变）
    // 如果没有保存的数据，需要从UnitDataConfig中获取原始基础属性
    var baseHp, baseAttack, baseDefense, baseSpeed, baseCrit, baseMiss;
    if (existingData && existingData.baseHp) {
      // 已有保存的数据，使用原有的基础属性（保持不变）
      baseHp = existingData.baseHp;
      baseAttack = existingData.baseAttack;
      baseDefense = existingData.baseDefense;
      baseSpeed = existingData.baseSpeed;
      baseCrit = existingData.baseCrit;
      baseMiss = existingData.baseMiss;
      cc.log("[ItemSystem] \u4F7F\u7528\u5DF2\u4FDD\u5B58\u7684\u57FA\u7840\u5C5E\u6027: baseHp=" + baseHp + ", baseAttack=" + baseAttack);
    } else {
      // 首次保存，需要从UnitDataConfig中获取原始基础属性
      // 查找角色配置
      var allUnits = [].concat(UnitDataConfig.heros || [], UnitDataConfig.monsters || []);
      var unitConfig = allUnits.find(function (u) {
        return u.name === characterName;
      });
      if (unitConfig) {
        // 从配置中获取基础属性
        baseHp = unitConfig.hp || 100;
        baseAttack = unitConfig.attack || 1;
        baseDefense = unitConfig.defense || 1;
        baseSpeed = unitConfig.speed || 1;
        baseCrit = unitConfig.crit || 0;
        baseMiss = unitConfig.miss || 0;
        cc.log("[ItemSystem] \u9996\u6B21\u4FDD\u5B58\uFF0C\u4ECEUnitDataConfig\u83B7\u53D6\u57FA\u7840\u5C5E\u6027: baseHp=" + baseHp + ", baseAttack=" + baseAttack);
      } else {
        // 如果找不到配置，使用当前的baseHp等（作为后备方案）
        baseHp = stats.baseHp;
        baseAttack = stats.baseAttack;
        baseDefense = stats.baseDefense;
        baseSpeed = stats.baseSpeed;
        baseCrit = stats.baseCrit;
        baseMiss = stats.baseMiss;
        cc.warn("[ItemSystem] \u672A\u627E\u5230\u89D2\u8272\u914D\u7F6E " + characterName + "\uFF0C\u4F7F\u7528\u5F53\u524DbaseHp=" + baseHp);
      }
    }
    var data = {
      level: stats.level,
      exp: stats.exp,
      baseHp: baseHp,
      baseAttack: baseAttack,
      baseDefense: baseDefense,
      baseSpeed: baseSpeed,
      baseCrit: baseCrit,
      baseMiss: baseMiss,
      saveTime: Date.now()
    };
    cc.log("[ItemSystem] \u4FDD\u5B58\u89D2\u8272\u6570\u636E: " + characterName + ", \u7B49\u7EA7=" + data.level + ", baseHp=" + data.baseHp + ", baseAttack=" + data.baseAttack);
    var saveSuccess = CharacterDataManager.saveCharacterData(characterName, data);
    if (saveSuccess) {
      cc.log("[ItemSystem] \u2713 \u4FDD\u5B58\u89D2\u8272\u6570\u636E\u6210\u529F: " + characterName + " (\u7B49\u7EA7" + newLevel + ", \u7ECF\u9A8C" + stats.exp + ")");
    } else {
      cc.error("[ItemSystem] \u2717 \u4FDD\u5B58\u89D2\u8272\u6570\u636E\u5931\u8D25: " + characterName);
    }
    return {
      success: true,
      message: "\u7B49\u7EA7\u63D0\u5347: " + oldLevel + " \u2192 " + newLevel,
      oldLevel: oldLevel,
      newLevel: newLevel
    };
  },
  /**
   * 使用经验类道具
   * @private
   * @param {cc.Node} characterNode - 角色节点
   * @param {Object} itemConfig - 道具配置
   * @returns {Object} 使用结果
   */
  _useExpItem: function _useExpItem(characterNode, itemConfig) {
    var expValue = itemConfig.effectValue || 0;
    if (expValue <= 0) {
      return {
        success: false,
        message: "无效的经验值"
      };
    }
    var result = LevelSystem.addExp(characterNode, expValue);
    return _extends({
      success: true,
      message: result.leveledUp ? "\u83B7\u5F97" + expValue + "\u7ECF\u9A8C\u503C\uFF0C\u5347\u7EA7\u4E86\uFF01" : "\u83B7\u5F97" + expValue + "\u7ECF\u9A8C\u503C"
    }, result);
  },
  /**
   * 使用生命值恢复类道具
   * @private
   * @param {cc.Node} characterNode - 角色节点
   * @param {Object} itemConfig - 道具配置
   * @returns {Object} 使用结果
   */
  _useHpItem: function _useHpItem(characterNode, itemConfig) {
    var stats = characterNode.getComponent("StatsComponent");
    if (!stats) {
      return {
        success: false,
        message: "角色没有StatsComponent组件"
      };
    }
    var healAmount = itemConfig.effectValue || 0;
    var oldHp = stats.hp;
    var newHp = Math.min(stats.hp + healAmount, stats.maxHp);
    stats.hp = newHp;

    // 更新血条显示
    if (stats.updateHealthBar) {
      stats.updateHealthBar();
    }
    return {
      success: true,
      message: "\u6062\u590D" + (newHp - oldHp) + "\u70B9\u751F\u547D\u503C",
      oldHp: oldHp,
      newHp: newHp,
      healAmount: newHp - oldHp
    };
  },
  /**
   * 使用技能卷轴：解锁对应技能并写入角色技能列表，更新节点 SkillComponent
   * @private
   * @param {cc.Node} characterNode - 角色节点
   * @param {Object} itemConfig - 道具配置（须含 skillId）
   * @returns {Promise<Object>} 使用结果
   */
  _useSkillScrollItem: function _useSkillScrollItem(characterNode, itemConfig) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var skillId, skillConfig, characterName, savedSkills, alreadyHas, newEntry, newList, saveResult, skillComp, fullConfigs;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            skillId = itemConfig.skillId;
            if (!(skillId == null || skillId === undefined)) {
              _context2.next = 3;
              break;
            }
            return _context2.abrupt("return", {
              success: false,
              message: "卷轴未绑定技能"
            });
          case 3:
            skillConfig = getSkillById(skillId);
            if (skillConfig) {
              _context2.next = 6;
              break;
            }
            return _context2.abrupt("return", {
              success: false,
              message: "\u672A\u627E\u5230\u6280\u80FD\u914D\u7F6E: " + skillId
            });
          case 6:
            characterName = characterNode.name;
            if (characterNode._originalCharacterName) {
              characterName = characterNode._originalCharacterName;
            } else if (characterName.startsWith("Display_")) {
              characterName = characterName.replace("Display_", "");
            }
            savedSkills = SkillDataManager.loadCharacterSkills(characterName); //TODO: 从服务器加载技能数据
            if (!(savedSkills && savedSkills.then)) {
              _context2.next = 13;
              break;
            }
            _context2.next = 12;
            return savedSkills;
          case 12:
            savedSkills = _context2.sent;
          case 13:
            savedSkills = savedSkills || [];
            alreadyHas = savedSkills.some(function (s) {
              return s.id === skillId;
            });
            if (!alreadyHas) {
              _context2.next = 17;
              break;
            }
            return _context2.abrupt("return", {
              success: false,
              message: "已学会该技能"
            });
          case 17:
            newEntry = {
              id: skillConfig.id,
              name: skillConfig.name,
              cooldown: skillConfig.cooldown,
              requireRage: skillConfig.requireRage !== undefined && skillConfig.requireRage !== null ? skillConfig.requireRage : 0,
              isUltimate: skillConfig.requireRage > 0
            };
            newList = [].concat(savedSkills, [newEntry]);
            saveResult = SkillDataManager.saveCharacterSkills(characterName, newList);
            if (!(saveResult && saveResult.then)) {
              _context2.next = 24;
              break;
            }
            _context2.next = 23;
            return saveResult;
          case 23:
            saveResult = _context2.sent;
          case 24:
            if (saveResult) {
              _context2.next = 26;
              break;
            }
            return _context2.abrupt("return", {
              success: false,
              message: "保存技能数据失败"
            });
          case 26:
            skillComp = characterNode.getComponent("SkillComponent");
            if (skillComp) {
              fullConfigs = newList.map(function (s) {
                var cfg = getSkillById(s.id);
                return cfg ? _extends({}, cfg, {
                  requireRage: s.requireRage
                }) : null;
              }).filter(Boolean);
              skillComp.init(fullConfigs);
            }
            return _context2.abrupt("return", {
              success: true,
              message: "技能学习成功",
              skillName: skillConfig.name
            });
          case 29:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
};
module.exports = ItemSystem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxJdGVtU3lzdGVtLmpzIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiSXRlbUNvbmZpZyIsInJlcXVpcmUiLCJJdGVtRGF0YU1hbmFnZXIiLCJMZXZlbFN5c3RlbSIsIlNraWxsRGF0YU1hbmFnZXIiLCJfcmVxdWlyZSIsImdldFNraWxsQnlJZCIsIkl0ZW1TeXN0ZW0iLCJ1c2VJdGVtIiwiY2hhcmFjdGVyTm9kZSIsIml0ZW1JZCIsIl90aGlzIiwiX2NhbGxlZSIsIml0ZW1Db3VudCIsIml0ZW1Db25maWciLCJlZmZlY3RUeXBlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiZ2V0SXRlbUNvdW50IiwiZ2V0SXRlbUJ5SWQiLCJTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInQwIiwiX3VzZUxldmVsVXBJdGVtIiwiX3VzZUV4cEl0ZW0iLCJfdXNlSHBJdGVtIiwiX3VzZVNraWxsU2Nyb2xsSXRlbSIsInNraWxsSWQiLCJyZW1vdmVJdGVtIiwiY2MiLCJsb2ciLCJMZXZlbENvbmZpZyIsIkNoYXJhY3RlckRhdGFNYW5hZ2VyIiwic3RhdHMiLCJnZXRDb21wb25lbnQiLCJpc01heExldmVsIiwib2xkTGV2ZWwiLCJsZXZlbCIsImxldmVsVXBDb3VudCIsImVmZmVjdFZhbHVlIiwiX2FwcGx5TGV2ZWxCb251cyIsIm5ld0xldmVsIiwiZXhwIiwiZ2V0RXhwRm9yTGV2ZWwiLCJocCIsIm1heEhwIiwidXBkYXRlRXhwQmFyIiwidXBkYXRlSGVhbHRoQmFyIiwiY2hhcmFjdGVyTmFtZSIsInN0YXJ0c1dpdGgiLCJyZXBsYWNlIiwiX29yaWdpbmFsQ2hhcmFjdGVyTmFtZSIsIlVuaXREYXRhQ29uZmlnIiwiZXhpc3RpbmdEYXRhIiwibG9hZENoYXJhY3RlckxldmVsIiwiYmFzZUhwIiwiYmFzZUF0dGFjayIsImJhc2VEZWZlbnNlIiwiYmFzZVNwZWVkIiwiYmFzZUNyaXQiLCJiYXNlTWlzcyIsImFsbFVuaXRzIiwiY29uY2F0IiwiaGVyb3MiLCJtb25zdGVycyIsInVuaXRDb25maWciLCJmaW5kIiwidSIsImF0dGFjayIsImRlZmVuc2UiLCJzcGVlZCIsImNyaXQiLCJtaXNzIiwid2FybiIsImRhdGEiLCJzYXZlVGltZSIsIkRhdGUiLCJub3ciLCJzYXZlU3VjY2VzcyIsInNhdmVDaGFyYWN0ZXJEYXRhIiwiZXhwVmFsdWUiLCJhZGRFeHAiLCJfZXh0ZW5kcyIsImxldmVsZWRVcCIsImhlYWxBbW91bnQiLCJvbGRIcCIsIm5ld0hwIiwiTWF0aCIsIm1pbiIsIl9jYWxsZWUyIiwic2tpbGxDb25maWciLCJzYXZlZFNraWxscyIsImFscmVhZHlIYXMiLCJuZXdFbnRyeSIsIm5ld0xpc3QiLCJzYXZlUmVzdWx0Iiwic2tpbGxDb21wIiwiZnVsbENvbmZpZ3MiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJsb2FkQ2hhcmFjdGVyU2tpbGxzIiwic29tZSIsInMiLCJpZCIsImNvb2xkb3duIiwicmVxdWlyZVJhZ2UiLCJpc1VsdGltYXRlIiwic2F2ZUNoYXJhY3RlclNraWxscyIsIm1hcCIsImNmZyIsImZpbHRlciIsIkJvb2xlYW4iLCJpbml0Iiwic2tpbGxOYW1lIiwibW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0EscUpBQUFBLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLE9BQUEsU0FBQUEsT0FBQSxPQUFBQyxFQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxNQUFBLEdBQUFILEVBQUEsQ0FBQUksY0FBQSxFQUFBQyxjQUFBLEdBQUFKLE1BQUEsQ0FBQUksY0FBQSxjQUFBQyxHQUFBLEVBQUFDLEdBQUEsRUFBQUMsSUFBQSxJQUFBRixHQUFBLENBQUFDLEdBQUEsSUFBQUMsSUFBQSxDQUFBQyxLQUFBLEtBQUFDLE9BQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxjQUFBLEdBQUFGLE9BQUEsQ0FBQUcsUUFBQSxrQkFBQUMsbUJBQUEsR0FBQUosT0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxpQkFBQSxHQUFBTixPQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFaLEdBQUEsRUFBQUMsR0FBQSxFQUFBRSxLQUFBLFdBQUFSLE1BQUEsQ0FBQUksY0FBQSxDQUFBQyxH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QmdHLFNBQVMsRUFBRXZCLFdBQVcsQ0FBQ3BJO1lBQzNCLENBQUM7VUFBQTtVQUFBO1lBQUEsT0FBQTZJLFNBQUEsQ0FBQTVILElBQUE7UUFBQTtNQUFBLEdBQUFrSCxRQUFBO0lBQUE7RUFDTDtBQUNKLENBQUM7QUFFRHlCLE1BQU0sQ0FBQ3ZRLE9BQU8sR0FBRzBKLFVBQVUiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog6YGT5YW35L2/55So57O757ufXG4gKiDlpITnkIbpgZPlhbfnmoTkvb/nlKjpgLvovpFcbiAqL1xuY29uc3QgSXRlbUNvbmZpZyA9IHJlcXVpcmUoXCJJdGVtQ29uZmlnXCIpO1xuY29uc3QgSXRlbURhdGFNYW5hZ2VyID0gcmVxdWlyZShcIkl0ZW1EYXRhTWFuYWdlclwiKTtcbmNvbnN0IExldmVsU3lzdGVtID0gcmVxdWlyZShcIkxldmVsU3lzdGVtXCIpO1xuY29uc3QgU2tpbGxEYXRhTWFuYWdlciA9IHJlcXVpcmUoXCJTa2lsbERhdGFNYW5hZ2VyXCIpO1xuY29uc3QgeyBnZXRTa2lsbEJ5SWQgfSA9IHJlcXVpcmUoXCJTa2lsbENvbmZpZ1wiKTtcblxudmFyIEl0ZW1TeXN0ZW0gPSB7XG4gICAgLyoqXG4gICAgICog5L2/55So6YGT5YW377yI5YWo5bGA5YWx5Lqr6YGT5YW35qCP77yJXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBjaGFyYWN0ZXJOb2RlIC0g6KeS6Imy6IqC54K5XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGl0ZW1JZCAtIOmBk+WFt0lEXG4gICAgICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0PnxPYmplY3R9IOS9v+eUqOe7k+aenCB7IHN1Y2Nlc3M6IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZywgLi4uIH3vvIjmnI3liqHlmajmqKHlvI/kuIvov5Tlm55Qcm9taXNl77yJXG4gICAgICovXG4gICAgYXN5bmMgdXNlSXRlbShjaGFyYWN0ZXJOb2RlLCBpdGVtSWQpIHtcbiAgICAgICAgaWYgKCFjaGFyYWN0ZXJOb2RlIHx8ICFpdGVtSWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCLlj4LmlbDkuI3lrozmlbRcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOajgOafpeaYr+WQpuaLpeacieivpemBk+WFt++8iOWFqOWxgOmBk+WFt+agj++8iVxuICAgICAgICBjb25zdCBpdGVtQ291bnQgPSBhd2FpdCBJdGVtRGF0YU1hbmFnZXIuZ2V0SXRlbUNvdW50KGl0ZW1JZCk7XG4gICAgICAgIGlmIChpdGVtQ291bnQgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuayoeacieivpemBk+WFt1wiXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6I635Y+W6YGT5YW36YWN572uXG4gICAgICAgIGNvbnN0IGl0ZW1Db25maWcgPSBJdGVtQ29uZmlnLmdldEl0ZW1CeUlkKGl0ZW1JZCk7XG4gICAgICAgIGlmICghaXRlbUNvbmZpZykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuaXoOaViOeahOmBk+WFt+mFjee9rlwiXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5qC55o2u6YGT5YW35pWI5p6c57G75Z6L5omn6KGM55u45bqU6YC76L6RXG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgICBjb25zdCBlZmZlY3RUeXBlID0gU3RyaW5nKGl0ZW1Db25maWcuZWZmZWN0VHlwZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIHN3aXRjaCAoZWZmZWN0VHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcImxldmVsX3VwXCI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fdXNlTGV2ZWxVcEl0ZW0oY2hhcmFjdGVyTm9kZSwgaXRlbUNvbmZpZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZXhwXCI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fdXNlRXhwSXRlbShjaGFyYWN0ZXJOb2RlLCBpdGVtQ29uZmlnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJocFwiOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX3VzZUhwSXRlbShjaGFyYWN0ZXJOb2RlLCBpdGVtQ29uZmlnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJza2lsbF9zY3JvbGxcIjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBhd2FpdCB0aGlzLl91c2VTa2lsbFNjcm9sbEl0ZW0oY2hhcmFjdGVyTm9kZSwgaXRlbUNvbmZpZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vIOWFnOW6le+8muiLpeaciSBza2lsbElkIOS4lOmdnuWFtuS7luW3suefpeexu+Wei++8jOaMieaKgOiDveWNt+i9tOWkhOeQhu+8iOmBv+WFjeeDreabtOaWsC/nvJPlrZjlr7zoh7TmnKrljLnphY3vvIlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbUNvbmZpZy5za2lsbElkICE9IG51bGwgJiYgaXRlbUNvbmZpZy5za2lsbElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgdGhpcy5fdXNlU2tpbGxTY3JvbGxJdGVtKGNoYXJhY3Rlck5vZGUsIGl0ZW1Db25maWcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGDmnKrnn6XnmoTpgZPlhbfmlYjmnpznsbvlnos6ICR7aXRlbUNvbmZpZy5lZmZlY3RUeXBlfWBcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlpoLmnpzkvb/nlKjmiJDlip/vvIzlh4/lsJHpgZPlhbfmlbDph4/vvIjlhajlsYDpgZPlhbfmoI/vvIlcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgICBhd2FpdCBJdGVtRGF0YU1hbmFnZXIucmVtb3ZlSXRlbShpdGVtSWQsIDEpO1xuICAgICAgICAgICAgY2MubG9nKGBbSXRlbVN5c3RlbV0g5L2/55So6YGT5YW35oiQ5YqfOiAke2l0ZW1Db25maWcubmFtZX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOS9v+eUqOWNh+e6p+exu+mBk+WFt1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBjaGFyYWN0ZXJOb2RlIC0g6KeS6Imy6IqC54K5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1Db25maWcgLSDpgZPlhbfphY3nva5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSDkvb/nlKjnu5PmnpxcbiAgICAgKi9cbiAgICBfdXNlTGV2ZWxVcEl0ZW0oY2hhcmFjdGVyTm9kZSwgaXRlbUNvbmZpZykge1xuICAgICAgICBjb25zdCBMZXZlbENvbmZpZyA9IHJlcXVpcmUoXCJMZXZlbENvbmZpZ1wiKTtcbiAgICAgICAgY29uc3QgQ2hhcmFjdGVyRGF0YU1hbmFnZXIgPSByZXF1aXJlKFwiQ2hhcmFjdGVyRGF0YU1hbmFnZXJcIik7XG4gICAgICAgIGNvbnN0IHN0YXRzID0gY2hhcmFjdGVyTm9kZS5nZXRDb21wb25lbnQoXCJTdGF0c0NvbXBvbmVudFwiKTtcbiAgICAgICAgaWYgKCFzdGF0cykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuinkuiJsuayoeaciVN0YXRzQ29tcG9uZW5057uE5Lu2XCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmo4Dmn6XmmK/lkKblt7Lmu6HnuqdcbiAgICAgICAgaWYgKHN0YXRzLmlzTWF4TGV2ZWwgJiYgc3RhdHMuaXNNYXhMZXZlbCgpKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi6KeS6Imy5bey6L6+5Yiw5pyA5aSn562J57qnXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmj5DljYfnrYnnuqdcbiAgICAgICAgY29uc3Qgb2xkTGV2ZWwgPSBzdGF0cy5sZXZlbDtcbiAgICAgICAgY29uc3QgbGV2ZWxVcENvdW50ID0gaXRlbUNvbmZpZy5lZmZlY3RWYWx1ZSB8fCAxO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGV2ZWxVcENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzdGF0cy5pc01heExldmVsICYmIHN0YXRzLmlzTWF4TGV2ZWwoKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrOyAvLyDlt7Lovr7liLDmnIDlpKfnrYnnuqfvvIzlgZzmraLljYfnuqdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g55u05o6l5Y2H57qnXG4gICAgICAgICAgICBzdGF0cy5sZXZlbCArPSAxO1xuICAgICAgICAgICAgc3RhdHMuX2FwcGx5TGV2ZWxCb251cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3TGV2ZWwgPSBzdGF0cy5sZXZlbDtcblxuICAgICAgICAvLyDph43nva7nu4/pqozlgLzkuLrmlrDnrYnnuqflr7nlupTnmoTmnIDlsI/nu4/pqozlgLzvvIjov5nmoLfmmL7npLrml7blsLHmmK8wL+S4i+S4gOe6p+aJgOmcgOe7j+mqjO+8iVxuICAgICAgICBzdGF0cy5leHAgPSBMZXZlbENvbmZpZy5nZXRFeHBGb3JMZXZlbChuZXdMZXZlbCk7XG4gICAgICAgIGNjLmxvZyhgW0l0ZW1TeXN0ZW1dIOWNh+e6p+WQjumHjee9rue7j+mqjOWAvDogJHtzdGF0cy5leHB9ICjnrYnnuqcke25ld0xldmVsfeeahOacgOWwj+e7j+mqjOWAvClgKTtcblxuICAgICAgICAvLyDmgaLlpI3mu6HnlJ/lkb3lgLxcbiAgICAgICAgc3RhdHMuaHAgPSBzdGF0cy5tYXhIcDtcbiAgICAgICAgY2MubG9nKGBbSXRlbVN5c3RlbV0g5Y2H57qn5ZCO5oGi5aSN5ruh55Sf5ZG95YC8OiAke3N0YXRzLmhwfS8ke3N0YXRzLm1heEhwfWApO1xuXG4gICAgICAgIC8vIOabtOaWsOaYvuekulxuICAgICAgICBpZiAoc3RhdHMudXBkYXRlRXhwQmFyKSB7XG4gICAgICAgICAgICBzdGF0cy51cGRhdGVFeHBCYXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdHMudXBkYXRlSGVhbHRoQmFyKSB7XG4gICAgICAgICAgICBzdGF0cy51cGRhdGVIZWFsdGhCYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOS/neWtmOWIsOacrOWcsOWtmOWCqO+8iOS9v+eUqOWOn+Wni+inkuiJsuWQjeensO+8jOiAjOS4jeaYr+iKgueCueWQjeensO+8iVxuICAgICAgICAvLyDoioLngrnlkI3np7Dlj6/og73mmK8gXCJEaXNwbGF5X+iLsembhDFcIu+8jOmcgOimgeaPkOWPluWOn+Wni+WQjeensFxuICAgICAgICBsZXQgY2hhcmFjdGVyTmFtZSA9IGNoYXJhY3Rlck5vZGUubmFtZTtcbiAgICAgICAgaWYgKGNoYXJhY3Rlck5hbWUuc3RhcnRzV2l0aChcIkRpc3BsYXlfXCIpKSB7XG4gICAgICAgICAgICBjaGFyYWN0ZXJOYW1lID0gY2hhcmFjdGVyTmFtZS5yZXBsYWNlKFwiRGlzcGxheV9cIiwgXCJcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlpoLmnpzoioLngrnkuIrmnInlrZjlgqjnmoTljp/lp4vlkI3np7DvvIzkvJjlhYjkvb/nlKhcbiAgICAgICAgaWYgKGNoYXJhY3Rlck5vZGUuX29yaWdpbmFsQ2hhcmFjdGVyTmFtZSkge1xuICAgICAgICAgICAgY2hhcmFjdGVyTmFtZSA9IGNoYXJhY3Rlck5vZGUuX29yaWdpbmFsQ2hhcmFjdGVyTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOebtOaOpeS/neWtmOaVsOaNru+8jOiAjOS4jeaYr+mAmui/h3NhdmVDaGFyYWN0ZXJMZXZlbO+8iOWboOS4uuiKgueCueWQjeensOWPr+iDveS4jeWMuemFje+8iVxuICAgICAgICAvLyDph43opoHvvJrkv53lrZjln7rnoYDlsZ7mgKfml7bvvIzlv4Xpobvkv53mjIHljp/mnInnmoTln7rnoYDlsZ7mgKfkuI3lj5jvvIjln7rnoYDlsZ7mgKfkuI3lupTor6Xlm6DkuLrljYfnuqfogIzmlLnlj5jvvIlcbiAgICAgICAgY29uc3QgVW5pdERhdGFDb25maWcgPSByZXF1aXJlKFwiVW5pdERhdGFDb25maWdcIik7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRGF0YSA9IENoYXJhY3RlckRhdGFNYW5hZ2VyLmxvYWRDaGFyYWN0ZXJMZXZlbChjaGFyYWN0ZXJOYW1lKTtcblxuICAgICAgICAvLyDln7rnoYDlsZ7mgKflupTor6XlnKjnrKzkuIDmrKHliJvlu7rop5LoibLml7bkv53lrZjvvIzkuYvlkI7kuI3lupTor6XmlLnlj5hcbiAgICAgICAgLy8g5aaC5p6c5bey5pyJ5L+d5a2Y55qE5pWw5o2u77yM5L2/55So5Y6f5pyJ55qE5Z+656GA5bGe5oCn77yI5L+d5oyB5LiN5Y+Y77yJXG4gICAgICAgIC8vIOWmguaenOayoeacieS/neWtmOeahOaVsOaNru+8jOmcgOimgeS7jlVuaXREYXRhQ29uZmln5Lit6I635Y+W5Y6f5aeL5Z+656GA5bGe5oCnXG4gICAgICAgIGxldCBiYXNlSHAsIGJhc2VBdHRhY2ssIGJhc2VEZWZlbnNlLCBiYXNlU3BlZWQsIGJhc2VDcml0LCBiYXNlTWlzcztcblxuICAgICAgICBpZiAoZXhpc3RpbmdEYXRhICYmIGV4aXN0aW5nRGF0YS5iYXNlSHApIHtcbiAgICAgICAgICAgIC8vIOW3suacieS/neWtmOeahOaVsOaNru+8jOS9v+eUqOWOn+acieeahOWfuuehgOWxnuaAp++8iOS/neaMgeS4jeWPmO+8iVxuICAgICAgICAgICAgYmFzZUhwID0gZXhpc3RpbmdEYXRhLmJhc2VIcDtcbiAgICAgICAgICAgIGJhc2VBdHRhY2sgPSBleGlzdGluZ0RhdGEuYmFzZUF0dGFjaztcbiAgICAgICAgICAgIGJhc2VEZWZlbnNlID0gZXhpc3RpbmdEYXRhLmJhc2VEZWZlbnNlO1xuICAgICAgICAgICAgYmFzZVNwZWVkID0gZXhpc3RpbmdEYXRhLmJhc2VTcGVlZDtcbiAgICAgICAgICAgIGJhc2VDcml0ID0gZXhpc3RpbmdEYXRhLmJhc2VDcml0O1xuICAgICAgICAgICAgYmFzZU1pc3MgPSBleGlzdGluZ0RhdGEuYmFzZU1pc3M7XG4gICAgICAgICAgICBjYy5sb2coYFtJdGVtU3lzdGVtXSDkvb/nlKjlt7Lkv53lrZjnmoTln7rnoYDlsZ7mgKc6IGJhc2VIcD0ke2Jhc2VIcH0sIGJhc2VBdHRhY2s9JHtiYXNlQXR0YWNrfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g6aaW5qyh5L+d5a2Y77yM6ZyA6KaB5LuOVW5pdERhdGFDb25maWfkuK3ojrflj5bljp/lp4vln7rnoYDlsZ7mgKdcbiAgICAgICAgICAgIC8vIOafpeaJvuinkuiJsumFjee9rlxuICAgICAgICAgICAgY29uc3QgYWxsVW5pdHMgPSBbLi4uKFVuaXREYXRhQ29uZmlnLmhlcm9zIHx8IFtdKSwgLi4uKFVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzIHx8IFtdKV07XG4gICAgICAgICAgICBjb25zdCB1bml0Q29uZmlnID0gYWxsVW5pdHMuZmluZCh1ID0+IHUubmFtZSA9PT0gY2hhcmFjdGVyTmFtZSk7XG5cbiAgICAgICAgICAgIGlmICh1bml0Q29uZmlnKSB7XG4gICAgICAgICAgICAgICAgLy8g5LuO6YWN572u5Lit6I635Y+W5Z+656GA5bGe5oCnXG4gICAgICAgICAgICAgICAgYmFzZUhwID0gdW5pdENvbmZpZy5ocCB8fCAxMDA7XG4gICAgICAgICAgICAgICAgYmFzZUF0dGFjayA9IHVuaXRDb25maWcuYXR0YWNrIHx8IDE7XG4gICAgICAgICAgICAgICAgYmFzZURlZmVuc2UgPSB1bml0Q29uZmlnLmRlZmVuc2UgfHwgMTtcbiAgICAgICAgICAgICAgICBiYXNlU3BlZWQgPSB1bml0Q29uZmlnLnNwZWVkIHx8IDE7XG4gICAgICAgICAgICAgICAgYmFzZUNyaXQgPSB1bml0Q29uZmlnLmNyaXQgfHwgMDtcbiAgICAgICAgICAgICAgICBiYXNlTWlzcyA9IHVuaXRDb25maWcubWlzcyB8fCAwO1xuICAgICAgICAgICAgICAgIGNjLmxvZyhgW0l0ZW1TeXN0ZW1dIOmmluasoeS/neWtmO+8jOS7jlVuaXREYXRhQ29uZmln6I635Y+W5Z+656GA5bGe5oCnOiBiYXNlSHA9JHtiYXNlSHB9LCBiYXNlQXR0YWNrPSR7YmFzZUF0dGFja31gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5om+5LiN5Yiw6YWN572u77yM5L2/55So5b2T5YmN55qEYmFzZUhw562J77yI5L2c5Li65ZCO5aSH5pa55qGI77yJXG4gICAgICAgICAgICAgICAgYmFzZUhwID0gc3RhdHMuYmFzZUhwO1xuICAgICAgICAgICAgICAgIGJhc2VBdHRhY2sgPSBzdGF0cy5iYXNlQXR0YWNrO1xuICAgICAgICAgICAgICAgIGJhc2VEZWZlbnNlID0gc3RhdHMuYmFzZURlZmVuc2U7XG4gICAgICAgICAgICAgICAgYmFzZVNwZWVkID0gc3RhdHMuYmFzZVNwZWVkO1xuICAgICAgICAgICAgICAgIGJhc2VDcml0ID0gc3RhdHMuYmFzZUNyaXQ7XG4gICAgICAgICAgICAgICAgYmFzZU1pc3MgPSBzdGF0cy5iYXNlTWlzcztcbiAgICAgICAgICAgICAgICBjYy53YXJuKGBbSXRlbVN5c3RlbV0g5pyq5om+5Yiw6KeS6Imy6YWN572uICR7Y2hhcmFjdGVyTmFtZX3vvIzkvb/nlKjlvZPliY1iYXNlSHA9JHtiYXNlSHB9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgbGV2ZWw6IHN0YXRzLmxldmVsLFxuICAgICAgICAgICAgZXhwOiBzdGF0cy5leHAsXG4gICAgICAgICAgICBiYXNlSHA6IGJhc2VIcCxcbiAgICAgICAgICAgIGJhc2VBdHRhY2s6IGJhc2VBdHRhY2ssXG4gICAgICAgICAgICBiYXNlRGVmZW5zZTogYmFzZURlZmVuc2UsXG4gICAgICAgICAgICBiYXNlU3BlZWQ6IGJhc2VTcGVlZCxcbiAgICAgICAgICAgIGJhc2VDcml0OiBiYXNlQ3JpdCxcbiAgICAgICAgICAgIGJhc2VNaXNzOiBiYXNlTWlzcyxcbiAgICAgICAgICAgIHNhdmVUaW1lOiBEYXRlLm5vdygpXG4gICAgICAgIH07XG5cbiAgICAgICAgY2MubG9nKGBbSXRlbVN5c3RlbV0g5L+d5a2Y6KeS6Imy5pWw5o2uOiAke2NoYXJhY3Rlck5hbWV9LCDnrYnnuqc9JHtkYXRhLmxldmVsfSwgYmFzZUhwPSR7ZGF0YS5iYXNlSHB9LCBiYXNlQXR0YWNrPSR7ZGF0YS5iYXNlQXR0YWNrfWApO1xuXG4gICAgICAgIGNvbnN0IHNhdmVTdWNjZXNzID0gQ2hhcmFjdGVyRGF0YU1hbmFnZXIuc2F2ZUNoYXJhY3RlckRhdGEoY2hhcmFjdGVyTmFtZSwgZGF0YSk7XG4gICAgICAgIGlmIChzYXZlU3VjY2Vzcykge1xuICAgICAgICAgICAgY2MubG9nKGBbSXRlbVN5c3RlbV0g4pyTIOS/neWtmOinkuiJsuaVsOaNruaIkOWKnzogJHtjaGFyYWN0ZXJOYW1lfSAo562J57qnJHtuZXdMZXZlbH0sIOe7j+mqjCR7c3RhdHMuZXhwfSlgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmVycm9yKGBbSXRlbVN5c3RlbV0g4pyXIOS/neWtmOinkuiJsuaVsOaNruWksei0pTogJHtjaGFyYWN0ZXJOYW1lfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBg562J57qn5o+Q5Y2HOiAke29sZExldmVsfSDihpIgJHtuZXdMZXZlbH1gLFxuICAgICAgICAgICAgb2xkTGV2ZWw6IG9sZExldmVsLFxuICAgICAgICAgICAgbmV3TGV2ZWw6IG5ld0xldmVsXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOS9v+eUqOe7j+mqjOexu+mBk+WFt1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBjaGFyYWN0ZXJOb2RlIC0g6KeS6Imy6IqC54K5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1Db25maWcgLSDpgZPlhbfphY3nva5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSDkvb/nlKjnu5PmnpxcbiAgICAgKi9cbiAgICBfdXNlRXhwSXRlbShjaGFyYWN0ZXJOb2RlLCBpdGVtQ29uZmlnKSB7XG4gICAgICAgIGNvbnN0IGV4cFZhbHVlID0gaXRlbUNvbmZpZy5lZmZlY3RWYWx1ZSB8fCAwO1xuICAgICAgICBpZiAoZXhwVmFsdWUgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuaXoOaViOeahOe7j+mqjOWAvFwiXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gTGV2ZWxTeXN0ZW0uYWRkRXhwKGNoYXJhY3Rlck5vZGUsIGV4cFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICBtZXNzYWdlOiByZXN1bHQubGV2ZWxlZFVwID8gYOiOt+W+lyR7ZXhwVmFsdWV957uP6aqM5YC877yM5Y2H57qn5LqG77yBYCA6IGDojrflvpcke2V4cFZhbHVlfee7j+mqjOWAvGAsXG4gICAgICAgICAgICAuLi5yZXN1bHRcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5L2/55So55Sf5ZG95YC85oGi5aSN57G76YGT5YW3XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGNoYXJhY3Rlck5vZGUgLSDop5LoibLoioLngrlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbUNvbmZpZyAtIOmBk+WFt+mFjee9rlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IOS9v+eUqOe7k+aenFxuICAgICAqL1xuICAgIF91c2VIcEl0ZW0oY2hhcmFjdGVyTm9kZSwgaXRlbUNvbmZpZykge1xuICAgICAgICBjb25zdCBzdGF0cyA9IGNoYXJhY3Rlck5vZGUuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XG4gICAgICAgIGlmICghc3RhdHMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCLop5LoibLmsqHmnIlTdGF0c0NvbXBvbmVudOe7hOS7tlwiXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGVhbEFtb3VudCA9IGl0ZW1Db25maWcuZWZmZWN0VmFsdWUgfHwgMDtcbiAgICAgICAgY29uc3Qgb2xkSHAgPSBzdGF0cy5ocDtcbiAgICAgICAgY29uc3QgbmV3SHAgPSBNYXRoLm1pbihzdGF0cy5ocCArIGhlYWxBbW91bnQsIHN0YXRzLm1heEhwKTtcbiAgICAgICAgc3RhdHMuaHAgPSBuZXdIcDtcblxuICAgICAgICAvLyDmm7TmlrDooYDmnaHmmL7npLpcbiAgICAgICAgaWYgKHN0YXRzLnVwZGF0ZUhlYWx0aEJhcikge1xuICAgICAgICAgICAgc3RhdHMudXBkYXRlSGVhbHRoQmFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGDmgaLlpI0ke25ld0hwIC0gb2xkSHB954K555Sf5ZG95YC8YCxcbiAgICAgICAgICAgIG9sZEhwOiBvbGRIcCxcbiAgICAgICAgICAgIG5ld0hwOiBuZXdIcCxcbiAgICAgICAgICAgIGhlYWxBbW91bnQ6IG5ld0hwIC0gb2xkSHBcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5L2/55So5oqA6IO95Y236L2077ya6Kej6ZSB5a+55bqU5oqA6IO95bm25YaZ5YWl6KeS6Imy5oqA6IO95YiX6KGo77yM5pu05paw6IqC54K5IFNraWxsQ29tcG9uZW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGNoYXJhY3Rlck5vZGUgLSDop5LoibLoioLngrlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbUNvbmZpZyAtIOmBk+WFt+mFjee9ru+8iOmhu+WQqyBza2lsbElk77yJXG4gICAgICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0Pn0g5L2/55So57uT5p6cXG4gICAgICovXG4gICAgYXN5bmMgX3VzZVNraWxsU2Nyb2xsSXRlbShjaGFyYWN0ZXJOb2RlLCBpdGVtQ29uZmlnKSB7XG4gICAgICAgIGNvbnN0IHNraWxsSWQgPSBpdGVtQ29uZmlnLnNraWxsSWQ7XG4gICAgICAgIGlmIChza2lsbElkID09IG51bGwgfHwgc2tpbGxJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCLljbfovbTmnKrnu5HlrprmioDog71cIiB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2tpbGxDb25maWcgPSBnZXRTa2lsbEJ5SWQoc2tpbGxJZCk7XG4gICAgICAgIGlmICghc2tpbGxDb25maWcpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBg5pyq5om+5Yiw5oqA6IO96YWN572uOiAke3NraWxsSWR9YCB9O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNoYXJhY3Rlck5hbWUgPSBjaGFyYWN0ZXJOb2RlLm5hbWU7XG4gICAgICAgIGlmIChjaGFyYWN0ZXJOb2RlLl9vcmlnaW5hbENoYXJhY3Rlck5hbWUpIHtcbiAgICAgICAgICAgIGNoYXJhY3Rlck5hbWUgPSBjaGFyYWN0ZXJOb2RlLl9vcmlnaW5hbENoYXJhY3Rlck5hbWU7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyTmFtZS5zdGFydHNXaXRoKFwiRGlzcGxheV9cIikpIHtcbiAgICAgICAgICAgIGNoYXJhY3Rlck5hbWUgPSBjaGFyYWN0ZXJOYW1lLnJlcGxhY2UoXCJEaXNwbGF5X1wiLCBcIlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzYXZlZFNraWxscyA9IFNraWxsRGF0YU1hbmFnZXIubG9hZENoYXJhY3RlclNraWxscyhjaGFyYWN0ZXJOYW1lKTsvL1RPRE86IOS7juacjeWKoeWZqOWKoOi9veaKgOiDveaVsOaNrlxuICAgICAgICBpZiAoc2F2ZWRTa2lsbHMgJiYgc2F2ZWRTa2lsbHMudGhlbikge1xuICAgICAgICAgICAgc2F2ZWRTa2lsbHMgPSBhd2FpdCBzYXZlZFNraWxscztcbiAgICAgICAgfVxuICAgICAgICBzYXZlZFNraWxscyA9IHNhdmVkU2tpbGxzIHx8IFtdO1xuXG4gICAgICAgIGNvbnN0IGFscmVhZHlIYXMgPSBzYXZlZFNraWxscy5zb21lKHMgPT4gcy5pZCA9PT0gc2tpbGxJZCk7XG4gICAgICAgIGlmIChhbHJlYWR5SGFzKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCLlt7LlrabkvJror6XmioDog71cIiB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3RW50cnkgPSB7XG4gICAgICAgICAgICBpZDogc2tpbGxDb25maWcuaWQsXG4gICAgICAgICAgICBuYW1lOiBza2lsbENvbmZpZy5uYW1lLFxuICAgICAgICAgICAgY29vbGRvd246IHNraWxsQ29uZmlnLmNvb2xkb3duLFxuICAgICAgICAgICAgcmVxdWlyZVJhZ2U6IHNraWxsQ29uZmlnLnJlcXVpcmVSYWdlICE9PSB1bmRlZmluZWQgJiYgc2tpbGxDb25maWcucmVxdWlyZVJhZ2UgIT09IG51bGwgPyBza2lsbENvbmZpZy5yZXF1aXJlUmFnZSA6IDAsXG4gICAgICAgICAgICBpc1VsdGltYXRlOiAoc2tpbGxDb25maWcucmVxdWlyZVJhZ2UgPiAwKVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBuZXdMaXN0ID0gWy4uLnNhdmVkU2tpbGxzLCBuZXdFbnRyeV07XG5cbiAgICAgICAgbGV0IHNhdmVSZXN1bHQgPSBTa2lsbERhdGFNYW5hZ2VyLnNhdmVDaGFyYWN0ZXJTa2lsbHMoY2hhcmFjdGVyTmFtZSwgbmV3TGlzdCk7XG4gICAgICAgIGlmIChzYXZlUmVzdWx0ICYmIHNhdmVSZXN1bHQudGhlbikge1xuICAgICAgICAgICAgc2F2ZVJlc3VsdCA9IGF3YWl0IHNhdmVSZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzYXZlUmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCLkv53lrZjmioDog73mlbDmja7lpLHotKVcIiB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2tpbGxDb21wID0gY2hhcmFjdGVyTm9kZS5nZXRDb21wb25lbnQoXCJTa2lsbENvbXBvbmVudFwiKTtcbiAgICAgICAgaWYgKHNraWxsQ29tcCkge1xuICAgICAgICAgICAgY29uc3QgZnVsbENvbmZpZ3MgPSBuZXdMaXN0Lm1hcChzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZmcgPSBnZXRTa2lsbEJ5SWQocy5pZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNmZyA/IHsgLi4uY2ZnLCByZXF1aXJlUmFnZTogcy5yZXF1aXJlUmFnZSB9IDogbnVsbDtcbiAgICAgICAgICAgIH0pLmZpbHRlcihCb29sZWFuKTtcbiAgICAgICAgICAgIHNraWxsQ29tcC5pbml0KGZ1bGxDb25maWdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogXCLmioDog73lrabkuaDmiJDlip9cIixcbiAgICAgICAgICAgIHNraWxsTmFtZTogc2tpbGxDb25maWcubmFtZVxuICAgICAgICB9O1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSXRlbVN5c3RlbTtcbiJdfQ==