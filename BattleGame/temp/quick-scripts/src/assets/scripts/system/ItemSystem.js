"use strict";
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
      var itemCount, itemConfig, result, effectType, beforeCount, afterCount;
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
              _context.next = 45;
              break;
            }
            _context.next = 36;
            return ItemDataManager.getItemCount(itemId);
          case 36:
            beforeCount = _context.sent;
            cc.log("[ItemDebug] useItem \u524D => itemId=" + itemId + ", count=" + beforeCount + ", effectType=" + effectType);
            _context.next = 40;
            return ItemDataManager.removeItem(itemId, 1);
          case 40:
            _context.next = 42;
            return ItemDataManager.getItemCount(itemId);
          case 42:
            afterCount = _context.sent;
            cc.log("1111111[ItemDebug] useItem \u540E => itemId=" + itemId + ", count=" + afterCount + ", effectType=" + effectType);
            cc.log("[ItemSystem] \u4F7F\u7528\u9053\u5177\u6210\u529F: " + itemConfig.name);
          case 45:
            return _context.abrupt("return", result);
          case 46:
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