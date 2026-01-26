
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ecs/SelectSceneUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fec3dfGdXlM4Y0PXFXgGyX9', 'SelectSceneUI');
// Scripts/ecs/SelectSceneUI.js

"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * 选择场景UI组件
 * 管理头像列表、勾选状态、中间显示区域
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    // 左侧英雄头像容器
    heroAvatarContainer: {
      "default": null,
      type: cc.Node,
      tooltip: "左侧英雄头像容器节点"
    },
    // 右侧怪物头像容器
    monsterAvatarContainer: {
      "default": null,
      type: cc.Node,
      tooltip: "右侧怪物头像容器节点"
    },
    // 中间显示区域（用于显示选中的人物原型）
    centerDisplayArea: {
      "default": null,
      type: cc.Node,
      tooltip: "中间显示区域节点（用于显示选中的人物原型）"
    },
    // 头像Prefab（用于动态创建头像）
    avatarPrefab: {
      "default": null,
      type: cc.Prefab,
      tooltip: "头像Prefab（包含头像图片和勾选标记）"
    },
    // 单位数据配置（不使用type，在代码中动态获取）
    // unitDataConfig: {
    //     default: null,
    //     type: require("UnitDataConfig"),
    //     tooltip: "单位数据配置（可选，如果不设置则从UnitDataConfig获取）"
    // },

    // 英雄头像资源列表（按顺序对应UnitDataConfig中的英雄）
    heroIcons: {
      "default": [],
      type: [cc.SpriteFrame],
      tooltip: "英雄头像资源列表（按顺序：战士、法师...）"
    },
    // 怪物头像资源列表（按顺序对应UnitDataConfig中的怪物）
    monsterIcons: {
      "default": [],
      type: [cc.SpriteFrame],
      tooltip: "怪物头像资源列表（按顺序：怪物、Boss...）"
    },
    // 英雄Prefab列表（按顺序对应UnitDataConfig中的英雄）
    heroPrefabs: {
      "default": [],
      type: [cc.Prefab],
      tooltip: "英雄Prefab列表（用于在中间显示原型，按顺序：战士、法师...）"
    },
    // 怪物Prefab列表（按顺序对应UnitDataConfig中的怪物）
    monsterPrefabs: {
      "default": [],
      type: [cc.Prefab],
      tooltip: "怪物Prefab列表（用于在中间显示原型，按顺序：怪物、Boss...）"
    },
    // 头像间距（垂直排列时使用）
    avatarSpacing: {
      "default": 120,
      tooltip: "头像之间的垂直间距"
    },
    // 头像起始Y坐标
    avatarStartY: {
      "default": 100,
      tooltip: "头像列表起始Y坐标（从上方开始）"
    }
  },
  onLoad: function onLoad() {
    // 获取单位数据配置
    if (!this.unitDataConfig) {
      this.unitDataConfig = require("UnitDataConfig");
    }

    // 从场景中查找UnitDataConfigComponent并应用配置
    this._loadConfigFromScene();

    // 选中的单位列表（用于传递给战斗场景）
    this.selectedHeros = [];
    this.selectedMonsters = [];

    // 当前显示的单位原型
    this.currentDisplayPrefab = null;

    // 初始化UI
    this._initAvatars();
  },
  /**
   * 从场景中加载配置
   * @private
   */
  _loadConfigFromScene: function _loadConfigFromScene() {
    var _this = this;
    // 应用英雄头像和Prefab配置
    if (this.heroIcons && this.heroIcons.length > 0) {
      this.heroIcons.forEach(function (icon, index) {
        if (_this.unitDataConfig.heros && _this.unitDataConfig.heros[index] && icon) {
          _this.unitDataConfig.heros[index].icon = icon;
          cc.log("[SelectSceneUI] \u8BBE\u7F6E\u82F1\u96C4\u5934\u50CF: " + _this.unitDataConfig.heros[index].name + " -> " + (icon.name || '已设置'));
        }
      });
    }
    if (this.heroPrefabs && this.heroPrefabs.length > 0) {
      this.heroPrefabs.forEach(function (prefab, index) {
        if (_this.unitDataConfig.heros && _this.unitDataConfig.heros[index] && prefab) {
          _this.unitDataConfig.heros[index].prefab = prefab;
          cc.log("[SelectSceneUI] \u8BBE\u7F6E\u82F1\u96C4Prefab: " + _this.unitDataConfig.heros[index].name + " -> " + (prefab.name || '已设置'));
        }
      });
    }

    // 应用怪物头像和Prefab配置
    if (this.monsterIcons && this.monsterIcons.length > 0) {
      cc.log("[SelectSceneUI] \u5F00\u59CB\u52A0\u8F7D\u602A\u7269\u5934\u50CF\u914D\u7F6E\uFF0C\u5171" + this.monsterIcons.length + "\u4E2A");
      this.monsterIcons.forEach(function (icon, index) {
        if (_this.unitDataConfig.monsters && _this.unitDataConfig.monsters[index]) {
          if (icon) {
            _this.unitDataConfig.monsters[index].icon = icon;
            cc.log("[SelectSceneUI] \u2713 \u8BBE\u7F6E\u602A\u7269\u5934\u50CF[" + index + "]: " + _this.unitDataConfig.monsters[index].name + " -> " + (icon.name || icon.uuid || '已设置'));
          } else {
            cc.warn("[SelectSceneUI] \u2717 \u602A\u7269\u5934\u50CF[" + index + "]\u4E3A\u7A7A: " + _this.unitDataConfig.monsters[index].name);
          }
        } else {
          cc.warn("[SelectSceneUI] \u2717 \u602A\u7269\u914D\u7F6E\u4E0D\u5B58\u5728\u6216\u7D22\u5F15\u8D8A\u754C: index=" + index);
        }
      });
    } else {
      cc.warn("[SelectSceneUI] monsterIcons\u6570\u7EC4\u4E3A\u7A7A\u6216\u672A\u914D\u7F6E");
    }
    if (this.monsterPrefabs && this.monsterPrefabs.length > 0) {
      this.monsterPrefabs.forEach(function (prefab, index) {
        if (_this.unitDataConfig.monsters && _this.unitDataConfig.monsters[index] && prefab) {
          _this.unitDataConfig.monsters[index].prefab = prefab;
          cc.log("[SelectSceneUI] \u8BBE\u7F6E\u602A\u7269Prefab: " + _this.unitDataConfig.monsters[index].name + " -> " + (prefab.name || '已设置'));
        }
      });
    }
    cc.log("[SelectSceneUI] 已从组件属性加载头像和Prefab配置");
  },
  /**
   * 初始化头像列表
   * @private
   */
  _initAvatars: function _initAvatars() {
    var _this2 = this,
      _this$unitDataConfig,
      _this$unitDataConfig$,
      _this$unitDataConfig2,
      _this$unitDataConfig3;
    if (!this.avatarPrefab) {
      cc.error("[SelectSceneUI] 未设置avatarPrefab，无法创建头像列表");
      return;
    }

    // 检查容器是否绑定
    if (!this.heroAvatarContainer) {
      cc.error("[SelectSceneUI] ✗ heroAvatarContainer未绑定！请在编辑器中绑定左侧英雄头像容器节点");
      return;
    }
    if (!this.monsterAvatarContainer) {
      cc.error("[SelectSceneUI] ✗ monsterAvatarContainer未绑定！请在编辑器中绑定右侧怪物头像容器节点");
      return;
    }

    // 检查容器是否绑定到同一个节点
    if (this.heroAvatarContainer === this.monsterAvatarContainer) {
      cc.error("[SelectSceneUI] ✗ 错误：heroAvatarContainer 和 monsterAvatarContainer 绑定到了同一个节点！");
      cc.error("[SelectSceneUI] 请确保两个容器是不同的节点，且位置不同");
      return;
    }

    // 输出容器位置信息
    cc.log("[SelectSceneUI] \u82F1\u96C4\u5BB9\u5668\u4F4D\u7F6E: (" + this.heroAvatarContainer.x + ", " + this.heroAvatarContainer.y + "), \u8282\u70B9\u540D: " + this.heroAvatarContainer.name);
    cc.log("[SelectSceneUI] \u602A\u7269\u5BB9\u5668\u4F4D\u7F6E: (" + this.monsterAvatarContainer.x + ", " + this.monsterAvatarContainer.y + "), \u8282\u70B9\u540D: " + this.monsterAvatarContainer.name);

    // 如果容器位置都在(0,0)，给出警告
    if (this.heroAvatarContainer.x === 0 && this.monsterAvatarContainer.x === 0) {
      cc.warn("[SelectSceneUI] ⚠️ 警告：两个容器都在X=0位置，头像会重叠！");
      cc.warn("[SelectSceneUI] 建议：HeroContainer X=-300, MonsterContainer X=300");
    }

    // 清空容器
    this.heroAvatarContainer.removeAllChildren();
    this.monsterAvatarContainer.removeAllChildren();

    // 创建英雄头像（按照UnitDataConfig中的固定顺序）
    if (this.unitDataConfig && this.unitDataConfig.heros) {
      cc.log("[SelectSceneUI] \u5F00\u59CB\u521B\u5EFA" + this.unitDataConfig.heros.length + "\u4E2A\u82F1\u96C4\u5934\u50CF");
      this.unitDataConfig.heros.forEach(function (heroData, index) {
        _this2._createAvatar(heroData, "hero", index);
      });
    } else {
      cc.warn("[SelectSceneUI] unitDataConfig.heros为空或未定义");
    }

    // 创建怪物头像（按照UnitDataConfig中的固定顺序）
    if (this.unitDataConfig && this.unitDataConfig.monsters) {
      cc.log("[SelectSceneUI] \u5F00\u59CB\u521B\u5EFA" + this.unitDataConfig.monsters.length + "\u4E2A\u602A\u7269\u5934\u50CF");
      this.unitDataConfig.monsters.forEach(function (monsterData, index) {
        _this2._createAvatar(monsterData, "monster", index);
      });
    } else {
      cc.warn("[SelectSceneUI] unitDataConfig.monsters为空或未定义");
    }
    cc.log("[SelectSceneUI] \u5934\u50CF\u5217\u8868\u521D\u59CB\u5316\u5B8C\u6210 - \u82F1\u96C4: " + (((_this$unitDataConfig = this.unitDataConfig) == null ? void 0 : (_this$unitDataConfig$ = _this$unitDataConfig.heros) == null ? void 0 : _this$unitDataConfig$.length) || 0) + "\u4E2A, \u602A\u7269: " + (((_this$unitDataConfig2 = this.unitDataConfig) == null ? void 0 : (_this$unitDataConfig3 = _this$unitDataConfig2.monsters) == null ? void 0 : _this$unitDataConfig3.length) || 0) + "\u4E2A");
  },
  /**
   * 创建头像
   * @private
   * @param {Object} unitData - 单位数据
   * @param {string} team - 队伍类型（"hero" 或 "monster"）
   * @param {number} index - 索引
   */
  _createAvatar: function _createAvatar(unitData, team, index) {
    var _this3 = this;
    if (!this.avatarPrefab) return;

    // 实例化头像Prefab
    var avatarNode = cc.instantiate(this.avatarPrefab);
    avatarNode.name = "Avatar_" + unitData.name;

    // 保存单位数据到节点（用于后续使用）
    avatarNode._unitData = unitData;
    avatarNode._team = team;

    // 添加到对应容器（按照固定顺序）
    var container = team === "hero" ? this.heroAvatarContainer : this.monsterAvatarContainer;
    if (container) {
      container.addChild(avatarNode);
      // 设置固定位置（根据unitData中的avatarPosition或index）
      this._setAvatarPosition(avatarNode, team, index);
      cc.log("[SelectSceneUI] \u521B\u5EFA" + team + "\u5934\u50CF: " + unitData.name + ", \u6DFB\u52A0\u5230\u5BB9\u5668: " + container.name + ", \u5BB9\u5668\u4F4D\u7F6E: (" + container.x + ", " + container.y + ")");
    } else {
      cc.error("[SelectSceneUI] \u2717 " + team + "\u5BB9\u5668\u672A\u7ED1\u5B9A: " + (team === "hero" ? "heroAvatarContainer" : "monsterAvatarContainer"));
    }

    // 获取头像组件（如果Prefab上有）
    var avatarComp = avatarNode.getComponent("AvatarItem");
    if (avatarComp) {
      cc.log("[SelectSceneUI] \u521B\u5EFA\u5934\u50CF: " + unitData.name + ", icon=" + (unitData.icon ? unitData.icon.name || '已设置' : 'null'));
      avatarComp.init(unitData, team, this);

      // 验证头像是否设置成功
      if (avatarComp.iconSprite) {
        if (avatarComp.iconSprite.spriteFrame) {
          cc.log("[SelectSceneUI] \u2713 \u5934\u50CF\u8BBE\u7F6E\u6210\u529F: " + unitData.name + " -> " + (avatarComp.iconSprite.spriteFrame.name || '已设置'));
          // 检查节点是否可见
          if (!avatarNode.active) {
            cc.warn("[SelectSceneUI] \u26A0\uFE0F \u5934\u50CF\u8282\u70B9\u672A\u6FC0\u6D3B: " + unitData.name);
            avatarNode.active = true;
          }
          if (avatarNode.opacity === 0) {
            cc.warn("[SelectSceneUI] \u26A0\uFE0F \u5934\u50CF\u8282\u70B9\u900F\u660E\u5EA6\u4E3A0: " + unitData.name);
            avatarNode.opacity = 255;
          }
        } else {
          cc.warn("[SelectSceneUI] \u2717 \u5934\u50CFSpriteFrame\u4E3A\u7A7A: " + unitData.name + ", iconSprite\u5B58\u5728\u4F46spriteFrame\u4E3Anull");
          cc.warn("[SelectSceneUI] \u8BF7\u68C0\u67E5SelectSceneUI\u7684" + (team === "hero" ? "heroIcons" : "monsterIcons") + "\u6570\u7EC4\u662F\u5426\u5DF2\u914D\u7F6E");
        }
      } else {
        cc.warn("[SelectSceneUI] \u2717 AvatarItem.iconSprite\u672A\u7ED1\u5B9A: " + unitData.name);
        cc.warn("[SelectSceneUI] \u8BF7\u5728AvatarPrefab\u4E2D\uFF0C\u5C06AvatarItem\u7EC4\u4EF6\u7684Icon Sprite\u5C5E\u6027\u7ED1\u5B9A\u5230Icon\u8282\u70B9");
      }

      // 如果AvatarItem有checkmarkNode，确保它初始隐藏
      if (avatarComp.checkmarkNode) {
        avatarComp.checkmarkNode.active = false;
        avatarComp.checkmarkNode.opacity = 255; // 确保透明度正常
        cc.log("[SelectSceneUI] \u2713 \u627E\u5230AvatarItem.checkmarkNode\uFF0C\u5DF2\u521D\u59CB\u9690\u85CF");
        cc.log("[SelectSceneUI]   checkmark\u8282\u70B9\u4F4D\u7F6E: (" + avatarComp.checkmarkNode.x + ", " + avatarComp.checkmarkNode.y + ")");
        cc.log("[SelectSceneUI]   checkmark\u8282\u70B9\u5927\u5C0F: " + avatarComp.checkmarkNode.width + "x" + avatarComp.checkmarkNode.height);
      } else {
        // 检查是否有名为Checkmark的子节点
        var checkmarkNode = avatarNode.getChildByName("Checkmark");
        if (checkmarkNode) {
          checkmarkNode.active = false;
          checkmarkNode.opacity = 255;
          cc.log("[SelectSceneUI] \u2713 \u627E\u5230Checkmark\u5B50\u8282\u70B9\uFF0C\u5DF2\u521D\u59CB\u9690\u85CF");
        } else {
          cc.warn("[SelectSceneUI] \u26A0\uFE0F \u672A\u627E\u5230\u52FE\u9009\u6807\u8BB0\u8282\u70B9: " + unitData.name);
          cc.warn("[SelectSceneUI]   \u8BF7\u5728AvatarPrefab\u4E2D\u521B\u5EFACheckmark\u8282\u70B9\uFF0C\u6216\u7ED1\u5B9A\u5230AvatarItem.checkmarkNode");
        }
      }
    } else {
      // 如果没有组件，手动设置
      cc.log("[SelectSceneUI] AvatarItem\u7EC4\u4EF6\u4E0D\u5B58\u5728\uFF0C\u4F7F\u7528\u624B\u52A8\u8BBE\u7F6E: " + unitData.name);
      this._setupAvatarNode(avatarNode, unitData, team);
    }

    // 确保头像节点可见
    avatarNode.active = true;
    avatarNode.opacity = 255;

    // 确保节点可以接收触摸事件
    avatarNode.setContentSize(100, 100); // 设置触摸区域大小
    avatarNode._touchEnabled = true;

    // 方法1：尝试使用Button组件
    var button = avatarNode.getComponent(cc.Button);
    if (!button) {
      // 如果没有Button组件，添加一个
      button = avatarNode.addComponent(cc.Button);
      cc.log("[SelectSceneUI] \u4E3A\u5934\u50CF\u6DFB\u52A0Button\u7EC4\u4EF6: " + unitData.name);
    }

    // 绑定Button点击事件
    if (button) {
      // 移除之前的事件监听（防止重复绑定）
      button.node.off(cc.Node.EventType.TOUCH_END);
      button.node.off(cc.Node.EventType.TOUCH_START);
      button.node.off(cc.Node.EventType.TOUCH_CANCEL);

      // 绑定点击事件
      button.node.on(cc.Node.EventType.TOUCH_END, function (event) {
        event.stopPropagation(); // 阻止事件冒泡
        cc.log("[SelectSceneUI] Button\u70B9\u51FB\u4E8B\u4EF6\u89E6\u53D1: " + unitData.name);
        _this3._onAvatarClick(unitData, team, avatarNode);
      }, this);

      // 也可以绑定TOUCH_START来测试触摸是否被检测到
      button.node.on(cc.Node.EventType.TOUCH_START, function (event) {
        cc.log("[SelectSceneUI] \u89E6\u6478\u5F00\u59CB: " + unitData.name);
      }, this);
      cc.log("[SelectSceneUI] \u2713 \u5DF2\u7ED1\u5B9AButton\u70B9\u51FB\u4E8B\u4EF6: " + unitData.name);
    }

    // 方法2：同时绑定直接触摸事件（作为备用）
    avatarNode.off(cc.Node.EventType.TOUCH_END);
    avatarNode.on(cc.Node.EventType.TOUCH_END, function (event) {
      event.stopPropagation();
      cc.log("[SelectSceneUI] \u76F4\u63A5\u89E6\u6478\u4E8B\u4EF6\u89E6\u53D1: " + unitData.name);
      _this3._onAvatarClick(unitData, team, avatarNode);
    }, this);

    // 确保Icon子节点也可以接收触摸（如果存在）
    var iconNode = avatarNode.getChildByName("Icon");
    if (iconNode) {
      iconNode.setContentSize(100, 100);
      iconNode._touchEnabled = true;
      iconNode.off(cc.Node.EventType.TOUCH_END);
      iconNode.on(cc.Node.EventType.TOUCH_END, function (event) {
        event.stopPropagation();
        cc.log("[SelectSceneUI] Icon\u8282\u70B9\u89E6\u6478\u4E8B\u4EF6\u89E6\u53D1: " + unitData.name);
        _this3._onAvatarClick(unitData, team, avatarNode);
      }, this);
    }
    cc.log("[SelectSceneUI] \u2713 \u5934\u50CF\u70B9\u51FB\u4E8B\u4EF6\u7ED1\u5B9A\u5B8C\u6210: " + unitData.name);
  },
  /**
   * 设置头像节点（如果没有AvatarItem组件）
   * @private
   */
  _setupAvatarNode: function _setupAvatarNode(avatarNode, unitData, team) {
    // 查找头像图片节点
    var iconNode = avatarNode.getChildByName("Icon") || avatarNode;
    if (iconNode && unitData.icon) {
      var sprite = iconNode.getComponent(cc.Sprite);
      if (sprite && unitData.icon) {
        sprite.spriteFrame = unitData.icon;
      }
    }

    // 查找名称标签
    var nameLabel = avatarNode.getChildByName("NameLabel");
    if (nameLabel) {
      var label = nameLabel.getComponent(cc.Label);
      if (label) {
        label.string = unitData.displayName || unitData.name;
      }
    }

    // 查找勾选标记节点（初始隐藏）
    var checkmark = avatarNode.getChildByName("Checkmark");
    if (checkmark) {
      checkmark.active = false;
    }
  },
  /**
   * 头像点击事件
   * @private
   * @param {Object} unitData - 单位数据
   * @param {string} team - 队伍类型
   * @param {cc.Node} avatarNode - 头像节点
   */
  _onAvatarClick: function _onAvatarClick(unitData, team, avatarNode) {
    cc.log("[SelectSceneUI] \u70B9\u51FB\u5934\u50CF: " + unitData.name + " (" + team + ")");

    // 切换勾选状态
    var isSelected = this._toggleSelection(unitData, team, avatarNode);

    // 根据选中状态显示或隐藏人物原型
    if (isSelected) {
      // 选中时，显示人物原型
      this._displayUnitPrefab(unitData, isSelected);
    } else {
      // 取消选中时，清除中间显示的人物原型
      this._clearUnitPrefab();
      cc.log("[SelectSceneUI] \u5DF2\u6E05\u9664\u4E2D\u95F4\u663E\u793A\u7684\u4EBA\u7269\u539F\u578B");
    }
  },
  /**
   * 切换选择状态
   * @private
   * @param {Object} unitData - 单位数据
   * @param {string} team - 队伍类型
   * @param {cc.Node} avatarNode - 头像节点
   * @returns {boolean} 是否已选中
   */
  _toggleSelection: function _toggleSelection(unitData, team, avatarNode) {
    var selectedList = team === "hero" ? this.selectedHeros : this.selectedMonsters;
    var index = selectedList.findIndex(function (u) {
      return u.name === unitData.name;
    });

    // 方法1：优先使用AvatarItem组件的checkmarkNode
    var avatarComp = avatarNode.getComponent("AvatarItem");
    var checkmark = null;
    if (avatarComp && avatarComp.checkmarkNode) {
      // 使用AvatarItem组件的checkmarkNode
      checkmark = avatarComp.checkmarkNode;
      cc.log("[SelectSceneUI] \u2713 \u4F7F\u7528AvatarItem.checkmarkNode: " + unitData.name);
      cc.log("[SelectSceneUI]   checkmark\u8282\u70B9: " + checkmark.name + ", active: " + checkmark.active + ", opacity: " + checkmark.opacity);
    } else {
      // 方法2：查找名为"Checkmark"的子节点
      checkmark = avatarNode.getChildByName("Checkmark");
      if (checkmark) {
        cc.log("[SelectSceneUI] \u2713 \u627E\u5230Checkmark\u5B50\u8282\u70B9: " + unitData.name);
        cc.log("[SelectSceneUI]   checkmark\u8282\u70B9: " + checkmark.name + ", active: " + checkmark.active + ", opacity: " + checkmark.opacity);
      } else {
        cc.warn("[SelectSceneUI] \u2717 \u672A\u627E\u5230Checkmark\u8282\u70B9: " + unitData.name);
        cc.warn("[SelectSceneUI]   \u8BF7\u786E\u4FDDAvatarPrefab\u4E2D\u6709Checkmark\u5B50\u8282\u70B9\uFF0C\u6216\u7ED1\u5B9A\u5230AvatarItem.checkmarkNode");
      }
    }

    // 方法3：如果都没有，自动创建一个简单的勾选标记
    if (!checkmark) {
      cc.log("[SelectSceneUI] \u672A\u627E\u5230\u52FE\u9009\u6807\u8BB0\uFF0C\u81EA\u52A8\u521B\u5EFA: " + unitData.name);
      checkmark = new cc.Node("Checkmark");

      // 创建一个简单的勾选标记（绿色圆圈）
      var graphics = checkmark.addComponent(cc.Graphics);
      graphics.fillColor = cc.Color.GREEN;
      graphics.circle(0, 0, 20);
      graphics.fill();

      // 设置位置（头像右上角）
      var nodeSize = avatarNode.getContentSize();
      checkmark.setPosition(nodeSize.width / 2 - 20, nodeSize.height / 2 - 20);
      avatarNode.addChild(checkmark);
    }
    if (index === -1) {
      // 未选中，添加到选中列表
      selectedList.push(unitData);

      // 显示勾选标记
      if (checkmark) {
        checkmark.active = true;
        checkmark.opacity = 255;
        // 确保层级在最上层
        if (checkmark.parent) {
          checkmark.setSiblingIndex(checkmark.parent.children.length - 1);
        }
        cc.log("[SelectSceneUI] \u663E\u793A\u52FE\u9009\u6807\u8BB0: " + unitData.name + ", active: " + checkmark.active + ", opacity: " + checkmark.opacity);
      } else {
        cc.error("[SelectSceneUI] \u2717 checkmark\u8282\u70B9\u4E3A\u7A7A\uFF0C\u65E0\u6CD5\u663E\u793A\u52FE\u9009\u6807\u8BB0: " + unitData.name);
      }

      // 如果使用AvatarItem组件，也更新其状态
      if (avatarComp) {
        avatarComp.setSelected(true);
      }
      cc.log("[SelectSceneUI] \u2713 \u9009\u4E2D: " + unitData.name);
      return true;
    } else {
      // 已选中，从选中列表移除
      selectedList.splice(index, 1);

      // 隐藏勾选标记
      if (checkmark) {
        checkmark.active = false;
        cc.log("[SelectSceneUI] \u9690\u85CF\u52FE\u9009\u6807\u8BB0: " + unitData.name + ", active: " + checkmark.active);
      }

      // 如果使用AvatarItem组件，也更新其状态
      if (avatarComp) {
        avatarComp.setSelected(false);
      }
      cc.log("[SelectSceneUI] \u2717 \u53D6\u6D88\u9009\u4E2D: " + unitData.name);
      return false;
    }
  },
  /**
   * 清除中间显示的单位原型
   * @private
   */
  _clearUnitPrefab: function _clearUnitPrefab() {
    if (!this.centerDisplayArea) {
      return;
    }

    // 清除之前显示的原型
    if (this.currentDisplayPrefab) {
      cc.log("[SelectSceneUI] \u6E05\u9664\u4E2D\u95F4\u663E\u793A\u7684\u539F\u578B: " + this.currentDisplayPrefab.name);
      this.currentDisplayPrefab.destroy();
      this.currentDisplayPrefab = null;
    }
  },
  /**
   * 在中间显示单位原型
   * @private
   * @param {Object} unitData - 单位数据
   * @param {boolean} isSelected - 是否已选中（已废弃，保留参数以兼容）
   */
  _displayUnitPrefab: function _displayUnitPrefab(unitData, isSelected) {
    if (!this.centerDisplayArea) {
      cc.warn("[SelectSceneUI] 未设置centerDisplayArea，无法显示单位原型");
      cc.warn("[SelectSceneUI] 请在SelectSceneUI组件中绑定centerDisplayArea节点");
      return;
    }

    // 清除之前显示的原型
    if (this.currentDisplayPrefab) {
      this.currentDisplayPrefab.destroy();
      this.currentDisplayPrefab = null;
      cc.log("[SelectSceneUI] \u6E05\u9664\u4E4B\u524D\u663E\u793A\u7684\u539F\u578B");
    }

    // 如果有Prefab，实例化并显示
    if (unitData.prefab) {
      var prefabInstance = cc.instantiate(unitData.prefab);
      prefabInstance.name = "Display_" + unitData.name;

      // 确保节点可见
      prefabInstance.active = true;
      prefabInstance.opacity = 255;
      this.centerDisplayArea.addChild(prefabInstance);
      this.currentDisplayPrefab = prefabInstance;

      // 设置位置和缩放（居中显示，缩小显示）
      prefabInstance.setPosition(0, 0);
      prefabInstance.setScale(0.8);

      // 确保centerDisplayArea可见
      if (!this.centerDisplayArea.active) {
        this.centerDisplayArea.active = true;
      }
      if (this.centerDisplayArea.opacity === 0) {
        this.centerDisplayArea.opacity = 255;
      }

      // 初始化角色属性（根据保存的等级数据，支持异步）
      this._initCharacterStats(prefabInstance, unitData)["catch"](function (err) {
        cc.error("[SelectSceneUI] \u521D\u59CB\u5316\u89D2\u8272\u5C5E\u6027\u5931\u8D25: " + err.message);
      });
      cc.log("[SelectSceneUI] \u2713 \u663E\u793A\u5355\u4F4D\u539F\u578B: " + unitData.name + ", Prefab: " + (unitData.prefab.name || '已设置'));
      cc.log("[SelectSceneUI] centerDisplayArea\u4F4D\u7F6E: (" + this.centerDisplayArea.x + ", " + this.centerDisplayArea.y + ")");
    } else {
      cc.warn("[SelectSceneUI] \u2717 \u5355\u4F4D " + unitData.name + " \u6CA1\u6709\u8BBE\u7F6Eprefab\uFF0C\u65E0\u6CD5\u663E\u793A\u539F\u578B");
      cc.warn("[SelectSceneUI] \u8BF7\u5728SelectSceneUI\u7684" + (unitData.name.includes("战士") || unitData.name.includes("法师") ? "heroPrefabs" : "monsterPrefabs") + "\u6570\u7EC4\u4E2D\u914D\u7F6EPrefab");
    }
  },
  /**
   * 初始化角色属性（根据保存的等级数据）
   * @private
   * @param {cc.Node} prefabInstance - 人物原型实例
   * @param {Object} unitData - 单位数据
   */
  _initCharacterStats: function _initCharacterStats(prefabInstance, unitData) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var CharacterDataManager, LevelSystem, StatsComponent, stats, savedData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            CharacterDataManager = require("CharacterDataManager");
            LevelSystem = require("LevelSystem");
            StatsComponent = require("StatsComponent"); // 获取StatsComponent组件
            stats = prefabInstance.getComponent(StatsComponent);
            if (stats) {
              _context.next = 7;
              break;
            }
            cc.log("[SelectSceneUI] " + unitData.name + " \u6CA1\u6709StatsComponent\u7EC4\u4EF6\uFF0C\u8DF3\u8FC7\u5C5E\u6027\u521D\u59CB\u5316");
            return _context.abrupt("return");
          case 7:
            _context.next = 9;
            return CharacterDataManager.loadCharacterLevel(unitData.name);
          case 9:
            savedData = _context.sent;
            if (savedData) {
              // 如果有保存的数据，使用保存的基础属性
              stats.baseHp = savedData.baseHp || unitData.hp || 100;
              stats.baseAttack = savedData.baseAttack || unitData.attack || 1;
              stats.baseDefense = savedData.baseDefense || unitData.defense || 1;
              stats.baseSpeed = savedData.baseSpeed || unitData.speed || 1;
              stats.baseCrit = savedData.baseCrit || unitData.crit || 0;
              stats.baseMiss = savedData.baseMiss || unitData.miss || 0;

              // 设置等级和经验值
              stats.level = savedData.level || 1;
              stats.exp = savedData.exp || 0;

              // 应用等级加成
              stats._applyLevelBonus();
              cc.log("[SelectSceneUI] \u521D\u59CB\u5316 " + unitData.name + " \u5C5E\u6027: Lv." + stats.level + ", HP:" + stats.maxHp + "/" + stats.maxHp + ", ATK:" + stats.attack + ", DEF:" + stats.defense);
            } else {
              // 如果没有保存的数据，使用unitData中的基础属性
              stats.baseHp = unitData.hp || 100;
              stats.baseAttack = unitData.attack || 1;
              stats.baseDefense = unitData.defense || 1;
              stats.baseSpeed = unitData.speed || 1;
              stats.baseCrit = unitData.crit || 0;
              stats.baseMiss = unitData.miss || 0;

              // 设置默认等级和经验值
              stats.level = 1;
              stats.exp = 0;

              // 应用等级加成
              stats._applyLevelBonus();
              cc.log("[SelectSceneUI] \u521D\u59CB\u5316 " + unitData.name + " \u5C5E\u6027\uFF08\u9ED8\u8BA4\uFF09: Lv." + stats.level + ", HP:" + stats.maxHp + "/" + stats.maxHp);
            }

            // 设置当前生命值为最大生命值（满血显示）
            stats.hp = stats.maxHp;

            // 更新血条显示
            if (stats.updateHealthBar) {
              stats.updateHealthBar();
            }

            // 更新经验条显示
            if (stats.updateExpBar) {
              stats.updateExpBar();
            }

            // 更新怒气条显示（初始为0）
            if (stats.updateRageBar) {
              stats.rage = 0;
              stats.updateRageBar();
            }
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  /**
   * 获取选中的单位列表
   * @returns {Object} { heros: [], monsters: [] }
   */
  getSelectedUnits: function getSelectedUnits() {
    return {
      heros: [].concat(this.selectedHeros),
      monsters: [].concat(this.selectedMonsters)
    };
  },
  /**
   * 检查是否有选中的单位
   * @returns {boolean}
   */
  hasSelectedUnits: function hasSelectedUnits() {
    return this.selectedHeros.length > 0 || this.selectedMonsters.length > 0;
  },
  /**
   * 设置头像固定位置
   * @private
   * @param {cc.Node} avatarNode - 头像节点
   * @param {string} team - 队伍类型
   * @param {number} index - 索引（使用unitData中的avatarPosition，如果没有则使用index）
   */
  _setAvatarPosition: function _setAvatarPosition(avatarNode, team, index) {
    // 获取单位数据中的固定位置索引（如果有）
    var unitData = avatarNode._unitData;
    var positionIndex = unitData && unitData.avatarPosition !== undefined ? unitData.avatarPosition : index;

    // 使用配置的间距和起始位置
    var spacing = this.avatarSpacing || 120;
    var startY = this.avatarStartY || 100;

    // 计算固定位置（垂直排列，从上到下）
    var y = startY - positionIndex * spacing;
    avatarNode.setPosition(0, y);
    cc.log("[SelectSceneUI] \u8BBE\u7F6E" + team + "\u5934\u50CF\u4F4D\u7F6E: " + avatarNode.name + " -> (0, " + y + "), \u4F4D\u7F6E\u7D22\u5F15: " + positionIndex);
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxTZWxlY3RTY2VuZVVJLmpzIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJoZXJvQXZhdGFyQ29udGFpbmVyIiwiTm9kZSIsInRvb2x0aXAiLCJtb25zdGVyQXZhdGFyQ29udGFpbmVyIiwiY2VudGVyRGlzcGxheUFyZWEiLCJhdmF0YXJQcmVmYWIiLCJQcmVmYWIiLCJoZXJvSWNvbnMiLCJTcHJpdGVGcmFtZSIsIm1vbnN0ZXJJY29ucyIsImhlcm9QcmVmYWJzIiwibW9uc3RlclByZWZhYnMiLCJhdmF0YXJTcGFjaW5nIiwiYXZhdGFyU3RhcnRZIiwib25Mb2FkIiwidW5pdERhdGFDb25maWciLCJyZXF1aXJlIiwiX2xvYWRDb25maWdGcm9tU2NlbmUiLCJzZWxlY3RlZEhlcm9zIiwic2VsZWN0ZWRNb25zdGVycyIsImN1cnJlbnREaXNwbGF5UHJlZmFiIiwiX2luaXRBdmF0YXJzIiwiX3RoaXMiLCJpY29uIiwiaW5kZXgiLCJoZXJvcyIsImxvZyIsInByZWZhYiIsIm1vbnN0ZXJzIiwidXVpZCIsIndhcm4iLCJfdGhpczIiLCJfdGhpcyR1bml0RGF0YUNvbmZpZyIsIl90aGlzJHVuaXREYXRhQ29uZmlnJCIsIl90aGlzJHVuaXREYXRhQ29uZmlnMiIsIl90aGlzJHVuaXREYXRhQ29uZmlnMyIsIngiLCJ5IiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJoZXJvRGF0YSIsIl9jcmVhdGVBdmF0YXIiLCJtb25zdGVyRGF0YSIsInVuaXREYXRhIiwidGVhbSIsIl90aGlzMyIsImF2YXRhck5vZGUiLCJpbnN0YW50aWF0ZSIsIl91bml0RGF0YSIsIl90ZWFtIiwiY29udGFpbmVyIiwiYWRkQ2hpbGQiLCJfc2V0QXZhdGFyUG9zaXRpb24iLCJhdmF0YXJDb21wIiwiZ2V0Q29tcG9uZW50IiwiaW5pdCIsImljb25TcHJpdGUiLCJzcHJpdGVGcmFtZSIsImFjdGl2ZSIsIm9wYWNpdHkiLCJjaGVja21hcmtOb2RlIiwid2lkdGgiLCJoZWlnaHQiLCJnZXRDaGlsZEJ5TmFtZSIsIl9zZXR1cEF2YXRhck5vZGUiLCJzZXRDb250ZW50U2l6ZSIsIl90b3VjaEVuYWJsZWQiLCJidXR0b24iLCJCdXR0b24iLCJhZGRDb21wb25lbnQiLCJub2RlIiwib2ZmIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwiVE9VQ0hfU1RBUlQiLCJUT1VDSF9DQU5DRUwiLCJvbiIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiX29uQXZhdGFyQ2xpY2siLCJpY29uTm9kZSIsInNwcml0ZSIsIlNwcml0ZSIsIm5hbWVMYWJlbCIsImxhYmVsIiwiTGFiZWwiLCJzdHJpbmciLCJjaGVja21hcmsiLCJpc1NlbGVjdGVkIiwiX3RvZ2dsZVNlbGVjdGlvbiIsIl9kaXNwbGF5VW5pdFByZWZhYiIsIl9jbGVhclVuaXRQcmVmYWIiLCJzZWxlY3RlZExpc3QiLCJmaW5kSW5kZXgiLCJ1IiwiZ3JhcGhpY3MiLCJHcmFwaGljcyIsImZpbGxDb2xvciIsIkNvbG9yIiwiR1JFRU4iLCJjaXJjbGUiLCJmaWxsIiwibm9kZVNpemUiLCJnZXRDb250ZW50U2l6ZSIsInNldFBvc2l0aW9uIiwicGFyZW50Iiwic2V0U2libGluZ0luZGV4IiwiY2hpbGRyZW4iLCJzZXRTZWxlY3RlZCIsInNwbGljZSIsImRlc3Ryb3kiLCJwcmVmYWJJbnN0YW5jZSIsInNldFNjYWxlIiwiX2luaXRDaGFyYWN0ZXJTdGF0cyIsIm1lc3NhZ2UiLCJpbmNsdWRlcyIsIl9jYWxsZWUiLCJDaGFyYWN0ZXJEYXRhTWFuYWdlciIsIkxldmVsU3lzdGVtIiwiU3RhdHNDb21wb25lbnQiLCJzdGF0cyIsInNhdmVkRGF0YSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJsb2FkQ2hhcmFjdGVyTGV2ZWwiLCJiYXNlSHAiLCJocCIsImJhc2VBdHRhY2siLCJhdHRhY2siLCJiYXNlRGVmZW5zZSIsImRlZmVuc2UiLCJiYXNlU3BlZWQiLCJzcGVlZCIsImJhc2VDcml0IiwiY3JpdCIsImJhc2VNaXNzIiwibWlzcyIsImxldmVsIiwiZXhwIiwiX2FwcGx5TGV2ZWxCb251cyIsIm1heEhwIiwidXBkYXRlSGVhbHRoQmFyIiwidXBkYXRlRXhwQmFyIiwidXBkYXRlUmFnZUJhciIsInJhZ2UiLCJnZXRTZWxlY3RlZFVuaXRzIiwiY29uY2F0IiwiaGFzU2VsZWN0ZWRVbml0cyIsInBvc2l0aW9uSW5kZXgiLCJhdmF0YXJQb3NpdGlvbiIsInNwYWNpbmciLCJzdGFydFkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBLHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxPQUFBLFNBQUFBLE9BQUEsT0FBQUMsRUFBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsTUFBQSxHQUFBSCxFQUFBLENBQUFJLGNBQUEsRUFBQUMsY0FBQSxHQUFBSixNQUFBLENBQUFJLGNBQUEsY0FBQUMsR0FBQSxFQUFBQyxHQUFBLEVBQUFDLElBQUEsSUFBQUYsR0FBQSxDQUFBQyxHQUFBLElBQUFDLElBQUEsQ0FBQUMsS0FBQSxLQUFBQyxPQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsY0FBQSxHQUFBRixPQUFBLENBQUFHLFFBQUEsa0JBQUFDLG1CQUFBLEdBQUFKLE9BQUEsQ0FBQUssYUFBQSx1QkFBQUMsaUJBQUEsR0FBQU4sT0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBWixHQUFBLEVBQUFDLEdBQUEsRUFBQUUsS0FBQSxXQUFBUixNQUFBLENBQUFJLGNBQUEsQ0FBQUMsR0FBQSxFQUFBQyxHQUFBLElBQUFFLEtBQUEsRUFBQUEsS0FBQSxFQUFBVSxVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBZixHQUFBLENBQUFDLEdBQUEsV0FBQVcsTUFBQSxtQkFBQUksR0FBQSxJQUFBSixNQUFBLFlBQUFBLE9BQUFaLEdBQUEsRUFBQUMsR0FBQSxFQUFBRSxLQUFBLFdBQUFILEdBQUEsQ0FBQUMsR0FBQSxJQUFBRSxLQUFBLGdCQUFBYyxLQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQUMsSUFBQSxFQUFBQyxXQUFBLFFBQUFDLGNBQUEsR0FBQUgsT0FBQSxJQUFBQSxPQUFBLENBQUF2QixTQUFBLFlBQUEyQixTQUFBLEdBQUFKLE9BQUEsR0FBQUks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QUFJLEVBQUVuQixLQUFLLEVBQUU7SUFDeEM7SUFDQSxJQUFNa0IsUUFBUSxHQUFHRyxVQUFVLENBQUNFLFNBQVM7SUFDckMsSUFBTW9HLGFBQWEsR0FBSXpHLFFBQVEsSUFBSUEsUUFBUSxDQUFDMEcsY0FBYyxLQUFLNU4sU0FBUyxHQUFJa0gsUUFBUSxDQUFDMEcsY0FBYyxHQUFHNUgsS0FBSzs7SUFFM0c7SUFDQSxJQUFNNkgsT0FBTyxHQUFHLElBQUksQ0FBQ3pJLGFBQWEsSUFBSSxHQUFHO0lBQ3pDLElBQU0wSSxNQUFNLEdBQUcsSUFBSSxDQUFDekksWUFBWSxJQUFJLEdBQUc7O0lBRXZDO0lBQ0EsSUFBTXdCLENBQUMsR0FBR2lILE1BQU0sR0FBSUgsYUFBYSxHQUFHRSxPQUFRO0lBQzVDeEcsVUFBVSxDQUFDMEQsV0FBVyxDQUFDLENBQUMsRUFBRWxFLENBQUMsQ0FBQztJQUU1QnpDLEVBQUUsQ0FBQzhCLEdBQUcsa0NBQXNCaUIsSUFBSSxrQ0FBU0UsVUFBVSxDQUFDekYsSUFBSSxnQkFBV2lGLENBQUMscUNBQVk4RyxhQUFhLENBQUc7RUFDcEc7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog6YCJ5oup5Zy65pmvVUnnu4Tku7ZcbiAqIOeuoeeQhuWktOWDj+WIl+ihqOOAgeWLvumAieeKtuaAgeOAgeS4remXtOaYvuekuuWMuuWfn1xuICovXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyDlt6bkvqfoi7Hpm4TlpLTlg4/lrrnlmahcbiAgICAgICAgaGVyb0F2YXRhckNvbnRhaW5lcjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuW3puS+p+iLsembhOWktOWDj+WuueWZqOiKgueCuVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5Y+z5L6n5oCq54mp5aS05YOP5a655ZmoXG4gICAgICAgIG1vbnN0ZXJBdmF0YXJDb250YWluZXI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLlj7PkvqfmgKrnianlpLTlg4/lrrnlmajoioLngrlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOS4remXtOaYvuekuuWMuuWfn++8iOeUqOS6juaYvuekuumAieS4reeahOS6uueJqeWOn+Wei++8iVxuICAgICAgICBjZW50ZXJEaXNwbGF5QXJlYToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuS4remXtOaYvuekuuWMuuWfn+iKgueCue+8iOeUqOS6juaYvuekuumAieS4reeahOS6uueJqeWOn+Wei++8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5aS05YOPUHJlZmFi77yI55So5LqO5Yqo5oCB5Yib5bu65aS05YOP77yJXG4gICAgICAgIGF2YXRhclByZWZhYjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5aS05YOPUHJlZmFi77yI5YyF5ZCr5aS05YOP5Zu+54mH5ZKM5Yu+6YCJ5qCH6K6w77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDljZXkvY3mlbDmja7phY3nva7vvIjkuI3kvb/nlKh0eXBl77yM5Zyo5Luj56CB5Lit5Yqo5oCB6I635Y+W77yJXG4gICAgICAgIC8vIHVuaXREYXRhQ29uZmlnOiB7XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICAgdHlwZTogcmVxdWlyZShcIlVuaXREYXRhQ29uZmlnXCIpLFxuICAgICAgICAvLyAgICAgdG9vbHRpcDogXCLljZXkvY3mlbDmja7phY3nva7vvIjlj6/pgInvvIzlpoLmnpzkuI3orr7nva7liJnku45Vbml0RGF0YUNvbmZpZ+iOt+WPlu+8iVwiXG4gICAgICAgIC8vIH0sXG5cbiAgICAgICAgLy8g6Iux6ZuE5aS05YOP6LWE5rqQ5YiX6KGo77yI5oyJ6aG65bqP5a+55bqUVW5pdERhdGFDb25maWfkuK3nmoToi7Hpm4TvvIlcbiAgICAgICAgaGVyb0ljb25zOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5TcHJpdGVGcmFtZV0sXG4gICAgICAgICAgICB0b29sdGlwOiBcIuiLsembhOWktOWDj+i1hOa6kOWIl+ihqO+8iOaMiemhuuW6j++8muaImOWjq+OAgeazleW4iC4uLu+8iVwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g5oCq54mp5aS05YOP6LWE5rqQ5YiX6KGo77yI5oyJ6aG65bqP5a+55bqUVW5pdERhdGFDb25maWfkuK3nmoTmgKrnianvvIlcbiAgICAgICAgbW9uc3Rlckljb25zOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5TcHJpdGVGcmFtZV0sXG4gICAgICAgICAgICB0b29sdGlwOiBcIuaAqueJqeWktOWDj+i1hOa6kOWIl+ihqO+8iOaMiemhuuW6j++8muaAqueJqeOAgUJvc3MuLi7vvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOiLsembhFByZWZhYuWIl+ihqO+8iOaMiemhuuW6j+WvueW6lFVuaXREYXRhQ29uZmln5Lit55qE6Iux6ZuE77yJXG4gICAgICAgIGhlcm9QcmVmYWJzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5QcmVmYWJdLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLoi7Hpm4RQcmVmYWLliJfooajvvIjnlKjkuo7lnKjkuK3pl7TmmL7npLrljp/lnovvvIzmjInpobrluo/vvJrmiJjlo6vjgIHms5XluIguLi7vvIlcIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOaAqueJqVByZWZhYuWIl+ihqO+8iOaMiemhuuW6j+WvueW6lFVuaXREYXRhQ29uZmln5Lit55qE5oCq54mp77yJXG4gICAgICAgIG1vbnN0ZXJQcmVmYWJzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5QcmVmYWJdLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmgKrnialQcmVmYWLliJfooajvvIjnlKjkuo7lnKjkuK3pl7TmmL7npLrljp/lnovvvIzmjInpobrluo/vvJrmgKrnianjgIFCb3NzLi4u77yJXCJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDlpLTlg4/pl7Tot53vvIjlnoLnm7TmjpLliJfml7bkvb/nlKjvvIlcbiAgICAgICAgYXZhdGFyU3BhY2luZzoge1xuICAgICAgICAgICAgZGVmYXVsdDogMTIwLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLlpLTlg4/kuYvpl7TnmoTlnoLnm7Tpl7Tot51cIlxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIOWktOWDj+i1t+Wni1nlnZDmoIdcbiAgICAgICAgYXZhdGFyU3RhcnRZOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAxMDAsXG4gICAgICAgICAgICB0b29sdGlwOiBcIuWktOWDj+WIl+ihqOi1t+Wni1nlnZDmoIfvvIjku47kuIrmlrnlvIDlp4vvvIlcIlxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8g6I635Y+W5Y2V5L2N5pWw5o2u6YWN572uXG4gICAgICAgIGlmICghdGhpcy51bml0RGF0YUNvbmZpZykge1xuICAgICAgICAgICAgdGhpcy51bml0RGF0YUNvbmZpZyA9IHJlcXVpcmUoXCJVbml0RGF0YUNvbmZpZ1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOS7juWcuuaZr+S4reafpeaJvlVuaXREYXRhQ29uZmlnQ29tcG9uZW505bm25bqU55So6YWN572uXG4gICAgICAgIHRoaXMuX2xvYWRDb25maWdGcm9tU2NlbmUoKTtcblxuICAgICAgICAvLyDpgInkuK3nmoTljZXkvY3liJfooajvvIjnlKjkuo7kvKDpgJLnu5nmiJjmlpflnLrmma/vvIlcbiAgICAgICAgdGhpcy5zZWxlY3RlZEhlcm9zID0gW107XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRNb25zdGVycyA9IFtdO1xuXG4gICAgICAgIC8vIOW9k+WJjeaYvuekuueahOWNleS9jeWOn+Wei1xuICAgICAgICB0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiID0gbnVsbDtcblxuICAgICAgICAvLyDliJ3lp4vljJZVSVxuICAgICAgICB0aGlzLl9pbml0QXZhdGFycygpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDku47lnLrmma/kuK3liqDovb3phY3nva5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9sb2FkQ29uZmlnRnJvbVNjZW5lKCkge1xuICAgICAgICAvLyDlupTnlKjoi7Hpm4TlpLTlg4/lkoxQcmVmYWLphY3nva5cbiAgICAgICAgaWYgKHRoaXMuaGVyb0ljb25zICYmIHRoaXMuaGVyb0ljb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaGVyb0ljb25zLmZvckVhY2goKGljb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudW5pdERhdGFDb25maWcuaGVyb3MgJiYgdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpbmRleF0gJiYgaWNvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zW2luZGV4XS5pY29uID0gaWNvbjtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVVSV0g6K6+572u6Iux6ZuE5aS05YOPOiAke3RoaXMudW5pdERhdGFDb25maWcuaGVyb3NbaW5kZXhdLm5hbWV9IC0+ICR7aWNvbi5uYW1lIHx8ICflt7Lorr7nva4nfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGVyb1ByZWZhYnMgJiYgdGhpcy5oZXJvUHJlZmFicy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmhlcm9QcmVmYWJzLmZvckVhY2goKHByZWZhYiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51bml0RGF0YUNvbmZpZy5oZXJvcyAmJiB0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zW2luZGV4XSAmJiBwcmVmYWIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpbmRleF0ucHJlZmFiID0gcHJlZmFiO1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtTZWxlY3RTY2VuZVVJXSDorr7nva7oi7Hpm4RQcmVmYWI6ICR7dGhpcy51bml0RGF0YUNvbmZpZy5oZXJvc1tpbmRleF0ubmFtZX0gLT4gJHtwcmVmYWIubmFtZSB8fCAn5bey6K6+572uJ31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOW6lOeUqOaAqueJqeWktOWDj+WSjFByZWZhYumFjee9rlxuICAgICAgICBpZiAodGhpcy5tb25zdGVySWNvbnMgJiYgdGhpcy5tb25zdGVySWNvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVVSV0g5byA5aeL5Yqg6L295oCq54mp5aS05YOP6YWN572u77yM5YWxJHt0aGlzLm1vbnN0ZXJJY29ucy5sZW5ndGh95LiqYCk7XG4gICAgICAgICAgICB0aGlzLm1vbnN0ZXJJY29ucy5mb3JFYWNoKChpY29uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzICYmIHRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnNbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpY29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzW2luZGV4XS5pY29uID0gaWNvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW1NlbGVjdFNjZW5lVUldIOKckyDorr7nva7mgKrnianlpLTlg49bJHtpbmRleH1dOiAke3RoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnNbaW5kZXhdLm5hbWV9IC0+ICR7aWNvbi5uYW1lIHx8IGljb24udXVpZCB8fCAn5bey6K6+572uJ31gKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLndhcm4oYFtTZWxlY3RTY2VuZVVJXSDinJcg5oCq54mp5aS05YOPWyR7aW5kZXh9XeS4uuepujogJHt0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzW2luZGV4XS5uYW1lfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2Mud2FybihgW1NlbGVjdFNjZW5lVUldIOKclyDmgKrnianphY3nva7kuI3lrZjlnKjmiJbntKLlvJXotornlYw6IGluZGV4PSR7aW5kZXh9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy53YXJuKGBbU2VsZWN0U2NlbmVVSV0gbW9uc3Rlckljb25z5pWw57uE5Li656m65oiW5pyq6YWN572uYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tb25zdGVyUHJlZmFicyAmJiB0aGlzLm1vbnN0ZXJQcmVmYWJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubW9uc3RlclByZWZhYnMuZm9yRWFjaCgocHJlZmFiLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzICYmIHRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnNbaW5kZXhdICYmIHByZWZhYikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzW2luZGV4XS5wcmVmYWIgPSBwcmVmYWI7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW1NlbGVjdFNjZW5lVUldIOiuvue9ruaAqueJqVByZWZhYjogJHt0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzW2luZGV4XS5uYW1lfSAtPiAke3ByZWZhYi5uYW1lIHx8ICflt7Lorr7nva4nfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY2MubG9nKFwiW1NlbGVjdFNjZW5lVUldIOW3suS7jue7hOS7tuWxnuaAp+WKoOi9veWktOWDj+WSjFByZWZhYumFjee9rlwiKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5aS05YOP5YiX6KGoXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfaW5pdEF2YXRhcnMoKSB7XG4gICAgICAgIGlmICghdGhpcy5hdmF0YXJQcmVmYWIpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwiW1NlbGVjdFNjZW5lVUldIOacquiuvue9rmF2YXRhclByZWZhYu+8jOaXoOazleWIm+W7uuWktOWDj+WIl+ihqFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOajgOafpeWuueWZqOaYr+WQpue7keWumlxuICAgICAgICBpZiAoIXRoaXMuaGVyb0F2YXRhckNvbnRhaW5lcikge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJbU2VsZWN0U2NlbmVVSV0g4pyXIGhlcm9BdmF0YXJDb250YWluZXLmnKrnu5HlrprvvIHor7flnKjnvJbovpHlmajkuK3nu5Hlrprlt6bkvqfoi7Hpm4TlpLTlg4/lrrnlmajoioLngrlcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLm1vbnN0ZXJBdmF0YXJDb250YWluZXIpIHtcbiAgICAgICAgICAgIGNjLmVycm9yKFwiW1NlbGVjdFNjZW5lVUldIOKclyBtb25zdGVyQXZhdGFyQ29udGFpbmVy5pyq57uR5a6a77yB6K+35Zyo57yW6L6R5Zmo5Lit57uR5a6a5Y+z5L6n5oCq54mp5aS05YOP5a655Zmo6IqC54K5XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5qOA5p+l5a655Zmo5piv5ZCm57uR5a6a5Yiw5ZCM5LiA5Liq6IqC54K5XG4gICAgICAgIGlmICh0aGlzLmhlcm9BdmF0YXJDb250YWluZXIgPT09IHRoaXMubW9uc3RlckF2YXRhckNvbnRhaW5lcikge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJbU2VsZWN0U2NlbmVVSV0g4pyXIOmUmeivr++8mmhlcm9BdmF0YXJDb250YWluZXIg5ZKMIG1vbnN0ZXJBdmF0YXJDb250YWluZXIg57uR5a6a5Yiw5LqG5ZCM5LiA5Liq6IqC54K577yBXCIpO1xuICAgICAgICAgICAgY2MuZXJyb3IoXCJbU2VsZWN0U2NlbmVVSV0g6K+356Gu5L+d5Lik5Liq5a655Zmo5piv5LiN5ZCM55qE6IqC54K577yM5LiU5L2N572u5LiN5ZCMXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6L6T5Ye65a655Zmo5L2N572u5L+h5oGvXG4gICAgICAgIGNjLmxvZyhgW1NlbGVjdFNjZW5lVUldIOiLsembhOWuueWZqOS9jee9rjogKCR7dGhpcy5oZXJvQXZhdGFyQ29udGFpbmVyLnh9LCAke3RoaXMuaGVyb0F2YXRhckNvbnRhaW5lci55fSksIOiKgueCueWQjTogJHt0aGlzLmhlcm9BdmF0YXJDb250YWluZXIubmFtZX1gKTtcbiAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVVSV0g5oCq54mp5a655Zmo5L2N572uOiAoJHt0aGlzLm1vbnN0ZXJBdmF0YXJDb250YWluZXIueH0sICR7dGhpcy5tb25zdGVyQXZhdGFyQ29udGFpbmVyLnl9KSwg6IqC54K55ZCNOiAke3RoaXMubW9uc3RlckF2YXRhckNvbnRhaW5lci5uYW1lfWApO1xuXG4gICAgICAgIC8vIOWmguaenOWuueWZqOS9jee9rumDveWcqCgwLDAp77yM57uZ5Ye66K2m5ZGKXG4gICAgICAgIGlmICh0aGlzLmhlcm9BdmF0YXJDb250YWluZXIueCA9PT0gMCAmJiB0aGlzLm1vbnN0ZXJBdmF0YXJDb250YWluZXIueCA9PT0gMCkge1xuICAgICAgICAgICAgY2Mud2FybihcIltTZWxlY3RTY2VuZVVJXSDimqDvuI8g6K2m5ZGK77ya5Lik5Liq5a655Zmo6YO95ZyoWD0w5L2N572u77yM5aS05YOP5Lya6YeN5Y+g77yBXCIpO1xuICAgICAgICAgICAgY2Mud2FybihcIltTZWxlY3RTY2VuZVVJXSDlu7rorq7vvJpIZXJvQ29udGFpbmVyIFg9LTMwMCwgTW9uc3RlckNvbnRhaW5lciBYPTMwMFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOa4heepuuWuueWZqFxuICAgICAgICB0aGlzLmhlcm9BdmF0YXJDb250YWluZXIucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5tb25zdGVyQXZhdGFyQ29udGFpbmVyLnJlbW92ZUFsbENoaWxkcmVuKCk7XG5cbiAgICAgICAgLy8g5Yib5bu66Iux6ZuE5aS05YOP77yI5oyJ54WnVW5pdERhdGFDb25maWfkuK3nmoTlm7rlrprpobrluo/vvIlcbiAgICAgICAgaWYgKHRoaXMudW5pdERhdGFDb25maWcgJiYgdGhpcy51bml0RGF0YUNvbmZpZy5oZXJvcykge1xuICAgICAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVVSV0g5byA5aeL5Yib5bu6JHt0aGlzLnVuaXREYXRhQ29uZmlnLmhlcm9zLmxlbmd0aH3kuKroi7Hpm4TlpLTlg49gKTtcbiAgICAgICAgICAgIHRoaXMudW5pdERhdGFDb25maWcuaGVyb3MuZm9yRWFjaCgoaGVyb0RhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlQXZhdGFyKGhlcm9EYXRhLCBcImhlcm9cIiwgaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiW1NlbGVjdFNjZW5lVUldIHVuaXREYXRhQ29uZmlnLmhlcm9z5Li656m65oiW5pyq5a6a5LmJXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5Yib5bu65oCq54mp5aS05YOP77yI5oyJ54WnVW5pdERhdGFDb25maWfkuK3nmoTlm7rlrprpobrluo/vvIlcbiAgICAgICAgaWYgKHRoaXMudW5pdERhdGFDb25maWcgJiYgdGhpcy51bml0RGF0YUNvbmZpZy5tb25zdGVycykge1xuICAgICAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVVSV0g5byA5aeL5Yib5bu6JHt0aGlzLnVuaXREYXRhQ29uZmlnLm1vbnN0ZXJzLmxlbmd0aH3kuKrmgKrnianlpLTlg49gKTtcbiAgICAgICAgICAgIHRoaXMudW5pdERhdGFDb25maWcubW9uc3RlcnMuZm9yRWFjaCgobW9uc3RlckRhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlQXZhdGFyKG1vbnN0ZXJEYXRhLCBcIm1vbnN0ZXJcIiwgaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiW1NlbGVjdFNjZW5lVUldIHVuaXREYXRhQ29uZmlnLm1vbnN0ZXJz5Li656m65oiW5pyq5a6a5LmJXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVVSV0g5aS05YOP5YiX6KGo5Yid5aeL5YyW5a6M5oiQIC0g6Iux6ZuEOiAke3RoaXMudW5pdERhdGFDb25maWc/Lmhlcm9zPy5sZW5ndGggfHwgMH3kuKosIOaAqueJqTogJHt0aGlzLnVuaXREYXRhQ29uZmlnPy5tb25zdGVycz8ubGVuZ3RoIHx8IDB95LiqYCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIm+W7uuWktOWDj1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHVuaXREYXRhIC0g5Y2V5L2N5pWw5o2uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRlYW0gLSDpmJ/kvI3nsbvlnovvvIhcImhlcm9cIiDmiJYgXCJtb25zdGVyXCLvvIlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSDntKLlvJVcbiAgICAgKi9cbiAgICBfY3JlYXRlQXZhdGFyKHVuaXREYXRhLCB0ZWFtLCBpbmRleCkge1xuICAgICAgICBpZiAoIXRoaXMuYXZhdGFyUHJlZmFiKSByZXR1cm47XG5cbiAgICAgICAgLy8g5a6e5L6L5YyW5aS05YOPUHJlZmFiXG4gICAgICAgIGNvbnN0IGF2YXRhck5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmF2YXRhclByZWZhYik7XG4gICAgICAgIGF2YXRhck5vZGUubmFtZSA9IGBBdmF0YXJfJHt1bml0RGF0YS5uYW1lfWA7XG5cbiAgICAgICAgLy8g5L+d5a2Y5Y2V5L2N5pWw5o2u5Yiw6IqC54K577yI55So5LqO5ZCO57ut5L2/55So77yJXG4gICAgICAgIGF2YXRhck5vZGUuX3VuaXREYXRhID0gdW5pdERhdGE7XG4gICAgICAgIGF2YXRhck5vZGUuX3RlYW0gPSB0ZWFtO1xuXG4gICAgICAgIC8vIOa3u+WKoOWIsOWvueW6lOWuueWZqO+8iOaMieeFp+WbuuWumumhuuW6j++8iVxuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0ZWFtID09PSBcImhlcm9cIiA/IHRoaXMuaGVyb0F2YXRhckNvbnRhaW5lciA6IHRoaXMubW9uc3RlckF2YXRhckNvbnRhaW5lcjtcbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKGF2YXRhck5vZGUpO1xuICAgICAgICAgICAgLy8g6K6+572u5Zu65a6a5L2N572u77yI5qC55o2udW5pdERhdGHkuK3nmoRhdmF0YXJQb3NpdGlvbuaIlmluZGV477yJXG4gICAgICAgICAgICB0aGlzLl9zZXRBdmF0YXJQb3NpdGlvbihhdmF0YXJOb2RlLCB0ZWFtLCBpbmRleCk7XG4gICAgICAgICAgICBjYy5sb2coYFtTZWxlY3RTY2VuZVVJXSDliJvlu7oke3RlYW195aS05YOPOiAke3VuaXREYXRhLm5hbWV9LCDmt7vliqDliLDlrrnlmag6ICR7Y29udGFpbmVyLm5hbWV9LCDlrrnlmajkvY3nva46ICgke2NvbnRhaW5lci54fSwgJHtjb250YWluZXIueX0pYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5lcnJvcihgW1NlbGVjdFNjZW5lVUldIOKclyAke3RlYW195a655Zmo5pyq57uR5a6aOiAke3RlYW0gPT09IFwiaGVyb1wiID8gXCJoZXJvQXZhdGFyQ29udGFpbmVyXCIgOiBcIm1vbnN0ZXJBdmF0YXJDb250YWluZXJcIn1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiOt+WPluWktOWDj+e7hOS7tu+8iOWmguaenFByZWZhYuS4iuacie+8iVxuICAgICAgICBjb25zdCBhdmF0YXJDb21wID0gYXZhdGFyTm9kZS5nZXRDb21wb25lbnQoXCJBdmF0YXJJdGVtXCIpO1xuICAgICAgICBpZiAoYXZhdGFyQ29tcCkge1xuICAgICAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVVSV0g5Yib5bu65aS05YOPOiAke3VuaXREYXRhLm5hbWV9LCBpY29uPSR7dW5pdERhdGEuaWNvbiA/IHVuaXREYXRhLmljb24ubmFtZSB8fCAn5bey6K6+572uJyA6ICdudWxsJ31gKTtcbiAgICAgICAgICAgIGF2YXRhckNvbXAuaW5pdCh1bml0RGF0YSwgdGVhbSwgdGhpcyk7XG5cbiAgICAgICAgICAgIC8vIOmqjOivgeWktOWDj+aYr+WQpuiuvue9ruaIkOWKn1xuICAgICAgICAgICAgaWYgKGF2YXRhckNvbXAuaWNvblNwcml0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChhdmF0YXJDb21wLmljb25TcHJpdGUuc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVVSV0g4pyTIOWktOWDj+iuvue9ruaIkOWKnzogJHt1bml0RGF0YS5uYW1lfSAtPiAke2F2YXRhckNvbXAuaWNvblNwcml0ZS5zcHJpdGVGcmFtZS5uYW1lIHx8ICflt7Lorr7nva4nfWApO1xuICAgICAgICAgICAgICAgICAgICAvLyDmo4Dmn6XoioLngrnmmK/lkKblj6/op4FcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhdmF0YXJOb2RlLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2Mud2FybihgW1NlbGVjdFNjZW5lVUldIOKaoO+4jyDlpLTlg4/oioLngrnmnKrmv4DmtLs6ICR7dW5pdERhdGEubmFtZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhck5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYXZhdGFyTm9kZS5vcGFjaXR5ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy53YXJuKGBbU2VsZWN0U2NlbmVVSV0g4pqg77iPIOWktOWDj+iKgueCuemAj+aYjuW6puS4ujA6ICR7dW5pdERhdGEubmFtZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhck5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLndhcm4oYFtTZWxlY3RTY2VuZVVJXSDinJcg5aS05YOPU3ByaXRlRnJhbWXkuLrnqbo6ICR7dW5pdERhdGEubmFtZX0sIGljb25TcHJpdGXlrZjlnKjkvYZzcHJpdGVGcmFtZeS4um51bGxgKTtcbiAgICAgICAgICAgICAgICAgICAgY2Mud2FybihgW1NlbGVjdFNjZW5lVUldIOivt+ajgOafpVNlbGVjdFNjZW5lVUnnmoQke3RlYW0gPT09IFwiaGVyb1wiID8gXCJoZXJvSWNvbnNcIiA6IFwibW9uc3Rlckljb25zXCJ95pWw57uE5piv5ZCm5bey6YWN572uYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKGBbU2VsZWN0U2NlbmVVSV0g4pyXIEF2YXRhckl0ZW0uaWNvblNwcml0Zeacque7keWumjogJHt1bml0RGF0YS5uYW1lfWApO1xuICAgICAgICAgICAgICAgIGNjLndhcm4oYFtTZWxlY3RTY2VuZVVJXSDor7flnKhBdmF0YXJQcmVmYWLkuK3vvIzlsIZBdmF0YXJJdGVt57uE5Lu255qESWNvbiBTcHJpdGXlsZ7mgKfnu5HlrprliLBJY29u6IqC54K5YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOWmguaenEF2YXRhckl0ZW3mnIljaGVja21hcmtOb2Rl77yM56Gu5L+d5a6D5Yid5aeL6ZqQ6JePXG4gICAgICAgICAgICBpZiAoYXZhdGFyQ29tcC5jaGVja21hcmtOb2RlKSB7XG4gICAgICAgICAgICAgICAgYXZhdGFyQ29tcC5jaGVja21hcmtOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGF2YXRhckNvbXAuY2hlY2ttYXJrTm9kZS5vcGFjaXR5ID0gMjU1OyAvLyDnoa7kv53pgI/mmI7luqbmraPluLhcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtTZWxlY3RTY2VuZVVJXSDinJMg5om+5YiwQXZhdGFySXRlbS5jaGVja21hcmtOb2Rl77yM5bey5Yid5aeL6ZqQ6JePYCk7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVVSV0gICBjaGVja21hcmvoioLngrnkvY3nva46ICgke2F2YXRhckNvbXAuY2hlY2ttYXJrTm9kZS54fSwgJHthdmF0YXJDb21wLmNoZWNrbWFya05vZGUueX0pYCk7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVVSV0gICBjaGVja21hcmvoioLngrnlpKflsI86ICR7YXZhdGFyQ29tcC5jaGVja21hcmtOb2RlLndpZHRofXgke2F2YXRhckNvbXAuY2hlY2ttYXJrTm9kZS5oZWlnaHR9YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOajgOafpeaYr+WQpuacieWQjeS4ukNoZWNrbWFya+eahOWtkOiKgueCuVxuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrbWFya05vZGUgPSBhdmF0YXJOb2RlLmdldENoaWxkQnlOYW1lKFwiQ2hlY2ttYXJrXCIpO1xuICAgICAgICAgICAgICAgIGlmIChjaGVja21hcmtOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbWFya05vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrbWFya05vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVVSV0g4pyTIOaJvuWIsENoZWNrbWFya+WtkOiKgueCue+8jOW3suWIneWni+makOiXj2ApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLndhcm4oYFtTZWxlY3RTY2VuZVVJXSDimqDvuI8g5pyq5om+5Yiw5Yu+6YCJ5qCH6K6w6IqC54K5OiAke3VuaXREYXRhLm5hbWV9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNjLndhcm4oYFtTZWxlY3RTY2VuZVVJXSAgIOivt+WcqEF2YXRhclByZWZhYuS4reWIm+W7ukNoZWNrbWFya+iKgueCue+8jOaIlue7keWumuWIsEF2YXRhckl0ZW0uY2hlY2ttYXJrTm9kZWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWmguaenOayoeaciee7hOS7tu+8jOaJi+WKqOiuvue9rlxuICAgICAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVVSV0gQXZhdGFySXRlbee7hOS7tuS4jeWtmOWcqO+8jOS9v+eUqOaJi+WKqOiuvue9rjogJHt1bml0RGF0YS5uYW1lfWApO1xuICAgICAgICAgICAgdGhpcy5fc2V0dXBBdmF0YXJOb2RlKGF2YXRhck5vZGUsIHVuaXREYXRhLCB0ZWFtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOehruS/neWktOWDj+iKgueCueWPr+ingVxuICAgICAgICBhdmF0YXJOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGF2YXRhck5vZGUub3BhY2l0eSA9IDI1NTtcblxuICAgICAgICAvLyDnoa7kv53oioLngrnlj6/ku6XmjqXmlLbop6bmkbjkuovku7ZcbiAgICAgICAgYXZhdGFyTm9kZS5zZXRDb250ZW50U2l6ZSgxMDAsIDEwMCk7IC8vIOiuvue9ruinpuaRuOWMuuWfn+Wkp+Wwj1xuICAgICAgICBhdmF0YXJOb2RlLl90b3VjaEVuYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIOaWueazlTHvvJrlsJ3or5Xkvb/nlKhCdXR0b27nu4Tku7ZcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGF2YXRhck5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIGlmICghYnV0dG9uKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzmsqHmnIlCdXR0b27nu4Tku7bvvIzmt7vliqDkuIDkuKpcbiAgICAgICAgICAgIGJ1dHRvbiA9IGF2YXRhck5vZGUuYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICBjYy5sb2coYFtTZWxlY3RTY2VuZVVJXSDkuLrlpLTlg4/mt7vliqBCdXR0b27nu4Tku7Y6ICR7dW5pdERhdGEubmFtZX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOe7keWumkJ1dHRvbueCueWHu+S6i+S7tlxuICAgICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgICAgICAvLyDnp7vpmaTkuYvliY3nmoTkuovku7bnm5HlkKzvvIjpmLLmraLph43lpI3nu5HlrprvvIlcbiAgICAgICAgICAgIGJ1dHRvbi5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpO1xuICAgICAgICAgICAgYnV0dG9uLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJUKTtcbiAgICAgICAgICAgIGJ1dHRvbi5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwpO1xuXG4gICAgICAgICAgICAvLyDnu5Hlrprngrnlh7vkuovku7ZcbiAgICAgICAgICAgIGJ1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIOmYu+atouS6i+S7tuWGkuazoVxuICAgICAgICAgICAgICAgIGNjLmxvZyhgW1NlbGVjdFNjZW5lVUldIEJ1dHRvbueCueWHu+S6i+S7tuinpuWPkTogJHt1bml0RGF0YS5uYW1lfWApO1xuICAgICAgICAgICAgICAgIHRoaXMuX29uQXZhdGFyQ2xpY2sodW5pdERhdGEsIHRlYW0sIGF2YXRhck5vZGUpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgIC8vIOS5n+WPr+S7pee7keWumlRPVUNIX1NUQVJU5p2l5rWL6K+V6Kem5pG45piv5ZCm6KKr5qOA5rWL5YiwXG4gICAgICAgICAgICBidXR0b24ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVVSV0g6Kem5pG45byA5aeLOiAke3VuaXREYXRhLm5hbWV9YCk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVVSV0g4pyTIOW3sue7keWumkJ1dHRvbueCueWHu+S6i+S7tjogJHt1bml0RGF0YS5uYW1lfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pa55rOVMu+8muWQjOaXtue7keWumuebtOaOpeinpuaRuOS6i+S7tu+8iOS9nOS4uuWkh+eUqO+8iVxuICAgICAgICBhdmF0YXJOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpO1xuICAgICAgICBhdmF0YXJOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNjLmxvZyhgW1NlbGVjdFNjZW5lVUldIOebtOaOpeinpuaRuOS6i+S7tuinpuWPkTogJHt1bml0RGF0YS5uYW1lfWApO1xuICAgICAgICAgICAgdGhpcy5fb25BdmF0YXJDbGljayh1bml0RGF0YSwgdGVhbSwgYXZhdGFyTm9kZSk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIC8vIOehruS/nUljb27lrZDoioLngrnkuZ/lj6/ku6XmjqXmlLbop6bmkbjvvIjlpoLmnpzlrZjlnKjvvIlcbiAgICAgICAgY29uc3QgaWNvbk5vZGUgPSBhdmF0YXJOb2RlLmdldENoaWxkQnlOYW1lKFwiSWNvblwiKTtcbiAgICAgICAgaWYgKGljb25Ob2RlKSB7XG4gICAgICAgICAgICBpY29uTm9kZS5zZXRDb250ZW50U2l6ZSgxMDAsIDEwMCk7XG4gICAgICAgICAgICBpY29uTm9kZS5fdG91Y2hFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGljb25Ob2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpO1xuICAgICAgICAgICAgaWNvbk5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtTZWxlY3RTY2VuZVVJXSBJY29u6IqC54K56Kem5pG45LqL5Lu26Kem5Y+ROiAke3VuaXREYXRhLm5hbWV9YCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25BdmF0YXJDbGljayh1bml0RGF0YSwgdGVhbSwgYXZhdGFyTm9kZSk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNjLmxvZyhgW1NlbGVjdFNjZW5lVUldIOKckyDlpLTlg4/ngrnlh7vkuovku7bnu5HlrprlrozmiJA6ICR7dW5pdERhdGEubmFtZX1gKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6K6+572u5aS05YOP6IqC54K577yI5aaC5p6c5rKh5pyJQXZhdGFySXRlbee7hOS7tu+8iVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3NldHVwQXZhdGFyTm9kZShhdmF0YXJOb2RlLCB1bml0RGF0YSwgdGVhbSkge1xuICAgICAgICAvLyDmn6Xmib7lpLTlg4/lm77niYfoioLngrlcbiAgICAgICAgY29uc3QgaWNvbk5vZGUgPSBhdmF0YXJOb2RlLmdldENoaWxkQnlOYW1lKFwiSWNvblwiKSB8fCBhdmF0YXJOb2RlO1xuICAgICAgICBpZiAoaWNvbk5vZGUgJiYgdW5pdERhdGEuaWNvbikge1xuICAgICAgICAgICAgY29uc3Qgc3ByaXRlID0gaWNvbk5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpZiAoc3ByaXRlICYmIHVuaXREYXRhLmljb24pIHtcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB1bml0RGF0YS5pY29uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5p+l5om+5ZCN56ew5qCH562+XG4gICAgICAgIGNvbnN0IG5hbWVMYWJlbCA9IGF2YXRhck5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJOYW1lTGFiZWxcIik7XG4gICAgICAgIGlmIChuYW1lTGFiZWwpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gbmFtZUxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSB1bml0RGF0YS5kaXNwbGF5TmFtZSB8fCB1bml0RGF0YS5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5p+l5om+5Yu+6YCJ5qCH6K6w6IqC54K577yI5Yid5aeL6ZqQ6JeP77yJXG4gICAgICAgIGNvbnN0IGNoZWNrbWFyayA9IGF2YXRhck5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDaGVja21hcmtcIik7XG4gICAgICAgIGlmIChjaGVja21hcmspIHtcbiAgICAgICAgICAgIGNoZWNrbWFyay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDlpLTlg4/ngrnlh7vkuovku7ZcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB1bml0RGF0YSAtIOWNleS9jeaVsOaNrlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZWFtIC0g6Zif5LyN57G75Z6LXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBhdmF0YXJOb2RlIC0g5aS05YOP6IqC54K5XG4gICAgICovXG4gICAgX29uQXZhdGFyQ2xpY2sodW5pdERhdGEsIHRlYW0sIGF2YXRhck5vZGUpIHtcbiAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVVSV0g54K55Ye75aS05YOPOiAke3VuaXREYXRhLm5hbWV9ICgke3RlYW19KWApO1xuXG4gICAgICAgIC8vIOWIh+aNouWLvumAieeKtuaAgVxuICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gdGhpcy5fdG9nZ2xlU2VsZWN0aW9uKHVuaXREYXRhLCB0ZWFtLCBhdmF0YXJOb2RlKTtcblxuICAgICAgICAvLyDmoLnmja7pgInkuK3nirbmgIHmmL7npLrmiJbpmpDol4/kurrnianljp/lnotcbiAgICAgICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIC8vIOmAieS4reaXtu+8jOaYvuekuuS6uueJqeWOn+Wei1xuICAgICAgICAgICAgdGhpcy5fZGlzcGxheVVuaXRQcmVmYWIodW5pdERhdGEsIGlzU2VsZWN0ZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5Y+W5raI6YCJ5Lit5pe277yM5riF6Zmk5Lit6Ze05pi+56S655qE5Lq654mp5Y6f5Z6LXG4gICAgICAgICAgICB0aGlzLl9jbGVhclVuaXRQcmVmYWIoKTtcbiAgICAgICAgICAgIGNjLmxvZyhgW1NlbGVjdFNjZW5lVUldIOW3sua4hemZpOS4remXtOaYvuekuueahOS6uueJqeWOn+Wei2ApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIh+aNoumAieaLqeeKtuaAgVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHVuaXREYXRhIC0g5Y2V5L2N5pWw5o2uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRlYW0gLSDpmJ/kvI3nsbvlnotcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGF2YXRhck5vZGUgLSDlpLTlg4/oioLngrlcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g5piv5ZCm5bey6YCJ5LitXG4gICAgICovXG4gICAgX3RvZ2dsZVNlbGVjdGlvbih1bml0RGF0YSwgdGVhbSwgYXZhdGFyTm9kZSkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZExpc3QgPSB0ZWFtID09PSBcImhlcm9cIiA/IHRoaXMuc2VsZWN0ZWRIZXJvcyA6IHRoaXMuc2VsZWN0ZWRNb25zdGVycztcbiAgICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3RlZExpc3QuZmluZEluZGV4KHUgPT4gdS5uYW1lID09PSB1bml0RGF0YS5uYW1lKTtcblxuICAgICAgICAvLyDmlrnms5Ux77ya5LyY5YWI5L2/55SoQXZhdGFySXRlbee7hOS7tueahGNoZWNrbWFya05vZGVcbiAgICAgICAgY29uc3QgYXZhdGFyQ29tcCA9IGF2YXRhck5vZGUuZ2V0Q29tcG9uZW50KFwiQXZhdGFySXRlbVwiKTtcbiAgICAgICAgbGV0IGNoZWNrbWFyayA9IG51bGw7XG5cbiAgICAgICAgaWYgKGF2YXRhckNvbXAgJiYgYXZhdGFyQ29tcC5jaGVja21hcmtOb2RlKSB7XG4gICAgICAgICAgICAvLyDkvb/nlKhBdmF0YXJJdGVt57uE5Lu255qEY2hlY2ttYXJrTm9kZVxuICAgICAgICAgICAgY2hlY2ttYXJrID0gYXZhdGFyQ29tcC5jaGVja21hcmtOb2RlO1xuICAgICAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVVSV0g4pyTIOS9v+eUqEF2YXRhckl0ZW0uY2hlY2ttYXJrTm9kZTogJHt1bml0RGF0YS5uYW1lfWApO1xuICAgICAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVVSV0gICBjaGVja21hcmvoioLngrk6ICR7Y2hlY2ttYXJrLm5hbWV9LCBhY3RpdmU6ICR7Y2hlY2ttYXJrLmFjdGl2ZX0sIG9wYWNpdHk6ICR7Y2hlY2ttYXJrLm9wYWNpdHl9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDmlrnms5Uy77ya5p+l5om+5ZCN5Li6XCJDaGVja21hcmtcIueahOWtkOiKgueCuVxuICAgICAgICAgICAgY2hlY2ttYXJrID0gYXZhdGFyTm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNoZWNrbWFya1wiKTtcbiAgICAgICAgICAgIGlmIChjaGVja21hcmspIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtTZWxlY3RTY2VuZVVJXSDinJMg5om+5YiwQ2hlY2ttYXJr5a2Q6IqC54K5OiAke3VuaXREYXRhLm5hbWV9YCk7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVVSV0gICBjaGVja21hcmvoioLngrk6ICR7Y2hlY2ttYXJrLm5hbWV9LCBhY3RpdmU6ICR7Y2hlY2ttYXJrLmFjdGl2ZX0sIG9wYWNpdHk6ICR7Y2hlY2ttYXJrLm9wYWNpdHl9YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLndhcm4oYFtTZWxlY3RTY2VuZVVJXSDinJcg5pyq5om+5YiwQ2hlY2ttYXJr6IqC54K5OiAke3VuaXREYXRhLm5hbWV9YCk7XG4gICAgICAgICAgICAgICAgY2Mud2FybihgW1NlbGVjdFNjZW5lVUldICAg6K+356Gu5L+dQXZhdGFyUHJlZmFi5Lit5pyJQ2hlY2ttYXJr5a2Q6IqC54K577yM5oiW57uR5a6a5YiwQXZhdGFySXRlbS5jaGVja21hcmtOb2RlYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmlrnms5Uz77ya5aaC5p6c6YO95rKh5pyJ77yM6Ieq5Yqo5Yib5bu65LiA5Liq566A5Y2V55qE5Yu+6YCJ5qCH6K6wXG4gICAgICAgIGlmICghY2hlY2ttYXJrKSB7XG4gICAgICAgICAgICBjYy5sb2coYFtTZWxlY3RTY2VuZVVJXSDmnKrmib7liLDli77pgInmoIforrDvvIzoh6rliqjliJvlu7o6ICR7dW5pdERhdGEubmFtZX1gKTtcbiAgICAgICAgICAgIGNoZWNrbWFyayA9IG5ldyBjYy5Ob2RlKFwiQ2hlY2ttYXJrXCIpO1xuXG4gICAgICAgICAgICAvLyDliJvlu7rkuIDkuKrnroDljZXnmoTli77pgInmoIforrDvvIjnu7/oibLlnIblnIjvvIlcbiAgICAgICAgICAgIGNvbnN0IGdyYXBoaWNzID0gY2hlY2ttYXJrLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICAgICAgICBncmFwaGljcy5maWxsQ29sb3IgPSBjYy5Db2xvci5HUkVFTjtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNpcmNsZSgwLCAwLCAyMCk7XG4gICAgICAgICAgICBncmFwaGljcy5maWxsKCk7XG5cbiAgICAgICAgICAgIC8vIOiuvue9ruS9jee9ru+8iOWktOWDj+WPs+S4iuinku+8iVxuICAgICAgICAgICAgY29uc3Qgbm9kZVNpemUgPSBhdmF0YXJOb2RlLmdldENvbnRlbnRTaXplKCk7XG4gICAgICAgICAgICBjaGVja21hcmsuc2V0UG9zaXRpb24obm9kZVNpemUud2lkdGggLyAyIC0gMjAsIG5vZGVTaXplLmhlaWdodCAvIDIgLSAyMCk7XG4gICAgICAgICAgICBhdmF0YXJOb2RlLmFkZENoaWxkKGNoZWNrbWFyayk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAvLyDmnKrpgInkuK3vvIzmt7vliqDliLDpgInkuK3liJfooahcbiAgICAgICAgICAgIHNlbGVjdGVkTGlzdC5wdXNoKHVuaXREYXRhKTtcblxuICAgICAgICAgICAgLy8g5pi+56S65Yu+6YCJ5qCH6K6wXG4gICAgICAgICAgICBpZiAoY2hlY2ttYXJrKSB7XG4gICAgICAgICAgICAgICAgY2hlY2ttYXJrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2hlY2ttYXJrLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICAgICAgLy8g56Gu5L+d5bGC57qn5Zyo5pyA5LiK5bGCXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrbWFyay5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2ttYXJrLnNldFNpYmxpbmdJbmRleChjaGVja21hcmsucGFyZW50LmNoaWxkcmVuLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYy5sb2coYFtTZWxlY3RTY2VuZVVJXSDmmL7npLrli77pgInmoIforrA6ICR7dW5pdERhdGEubmFtZX0sIGFjdGl2ZTogJHtjaGVja21hcmsuYWN0aXZlfSwgb3BhY2l0eTogJHtjaGVja21hcmsub3BhY2l0eX1gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYFtTZWxlY3RTY2VuZVVJXSDinJcgY2hlY2ttYXJr6IqC54K55Li656m677yM5peg5rOV5pi+56S65Yu+6YCJ5qCH6K6wOiAke3VuaXREYXRhLm5hbWV9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOWmguaenOS9v+eUqEF2YXRhckl0ZW3nu4Tku7bvvIzkuZ/mm7TmlrDlhbbnirbmgIFcbiAgICAgICAgICAgIGlmIChhdmF0YXJDb21wKSB7XG4gICAgICAgICAgICAgICAgYXZhdGFyQ29tcC5zZXRTZWxlY3RlZCh0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVVSV0g4pyTIOmAieS4rTogJHt1bml0RGF0YS5uYW1lfWApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlt7LpgInkuK3vvIzku47pgInkuK3liJfooajnp7vpmaRcbiAgICAgICAgICAgIHNlbGVjdGVkTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgICAgICAvLyDpmpDol4/li77pgInmoIforrBcbiAgICAgICAgICAgIGlmIChjaGVja21hcmspIHtcbiAgICAgICAgICAgICAgICBjaGVja21hcmsuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVVSV0g6ZqQ6JeP5Yu+6YCJ5qCH6K6wOiAke3VuaXREYXRhLm5hbWV9LCBhY3RpdmU6ICR7Y2hlY2ttYXJrLmFjdGl2ZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5aaC5p6c5L2/55SoQXZhdGFySXRlbee7hOS7tu+8jOS5n+abtOaWsOWFtueKtuaAgVxuICAgICAgICAgICAgaWYgKGF2YXRhckNvbXApIHtcbiAgICAgICAgICAgICAgICBhdmF0YXJDb21wLnNldFNlbGVjdGVkKGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVVSV0g4pyXIOWPlua2iOmAieS4rTogJHt1bml0RGF0YS5uYW1lfWApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOa4hemZpOS4remXtOaYvuekuueahOWNleS9jeWOn+Wei1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2NsZWFyVW5pdFByZWZhYigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNlbnRlckRpc3BsYXlBcmVhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDmuIXpmaTkuYvliY3mmL7npLrnmoTljp/lnotcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIpIHtcbiAgICAgICAgICAgIGNjLmxvZyhgW1NlbGVjdFNjZW5lVUldIOa4hemZpOS4remXtOaYvuekuueahOWOn+WeizogJHt0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiLm5hbWV9YCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWcqOS4remXtOaYvuekuuWNleS9jeWOn+Wei1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHVuaXREYXRhIC0g5Y2V5L2N5pWw5o2uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc1NlbGVjdGVkIC0g5piv5ZCm5bey6YCJ5Lit77yI5bey5bqf5byD77yM5L+d55WZ5Y+C5pWw5Lul5YW85a6577yJXG4gICAgICovXG4gICAgX2Rpc3BsYXlVbml0UHJlZmFiKHVuaXREYXRhLCBpc1NlbGVjdGVkKSB7XG4gICAgICAgIGlmICghdGhpcy5jZW50ZXJEaXNwbGF5QXJlYSkge1xuICAgICAgICAgICAgY2Mud2FybihcIltTZWxlY3RTY2VuZVVJXSDmnKrorr7nva5jZW50ZXJEaXNwbGF5QXJlYe+8jOaXoOazleaYvuekuuWNleS9jeWOn+Wei1wiKTtcbiAgICAgICAgICAgIGNjLndhcm4oXCJbU2VsZWN0U2NlbmVVSV0g6K+35ZyoU2VsZWN0U2NlbmVVSee7hOS7tuS4ree7keWummNlbnRlckRpc3BsYXlBcmVh6IqC54K5XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5riF6Zmk5LmL5YmN5pi+56S655qE5Y6f5Z6LXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREaXNwbGF5UHJlZmFiLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIgPSBudWxsO1xuICAgICAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVVSV0g5riF6Zmk5LmL5YmN5pi+56S655qE5Y6f5Z6LYCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlpoLmnpzmnIlQcmVmYWLvvIzlrp7kvovljJblubbmmL7npLpcbiAgICAgICAgaWYgKHVuaXREYXRhLnByZWZhYikge1xuICAgICAgICAgICAgY29uc3QgcHJlZmFiSW5zdGFuY2UgPSBjYy5pbnN0YW50aWF0ZSh1bml0RGF0YS5wcmVmYWIpO1xuICAgICAgICAgICAgcHJlZmFiSW5zdGFuY2UubmFtZSA9IGBEaXNwbGF5XyR7dW5pdERhdGEubmFtZX1gO1xuXG4gICAgICAgICAgICAvLyDnoa7kv53oioLngrnlj6/op4FcbiAgICAgICAgICAgIHByZWZhYkluc3RhbmNlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBwcmVmYWJJbnN0YW5jZS5vcGFjaXR5ID0gMjU1O1xuXG4gICAgICAgICAgICB0aGlzLmNlbnRlckRpc3BsYXlBcmVhLmFkZENoaWxkKHByZWZhYkluc3RhbmNlKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERpc3BsYXlQcmVmYWIgPSBwcmVmYWJJbnN0YW5jZTtcblxuICAgICAgICAgICAgLy8g6K6+572u5L2N572u5ZKM57yp5pS+77yI5bGF5Lit5pi+56S677yM57yp5bCP5pi+56S677yJXG4gICAgICAgICAgICBwcmVmYWJJbnN0YW5jZS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgICAgIHByZWZhYkluc3RhbmNlLnNldFNjYWxlKDAuOCk7XG5cbiAgICAgICAgICAgIC8vIOehruS/nWNlbnRlckRpc3BsYXlBcmVh5Y+v6KeBXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2VudGVyRGlzcGxheUFyZWEuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJEaXNwbGF5QXJlYS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2VudGVyRGlzcGxheUFyZWEub3BhY2l0eSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyRGlzcGxheUFyZWEub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g5Yid5aeL5YyW6KeS6Imy5bGe5oCn77yI5qC55o2u5L+d5a2Y55qE562J57qn5pWw5o2u77yM5pSv5oyB5byC5q2l77yJXG4gICAgICAgICAgICB0aGlzLl9pbml0Q2hhcmFjdGVyU3RhdHMocHJlZmFiSW5zdGFuY2UsIHVuaXREYXRhKS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGBbU2VsZWN0U2NlbmVVSV0g5Yid5aeL5YyW6KeS6Imy5bGe5oCn5aSx6LSlOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNjLmxvZyhgW1NlbGVjdFNjZW5lVUldIOKckyDmmL7npLrljZXkvY3ljp/lnos6ICR7dW5pdERhdGEubmFtZX0sIFByZWZhYjogJHt1bml0RGF0YS5wcmVmYWIubmFtZSB8fCAn5bey6K6+572uJ31gKTtcbiAgICAgICAgICAgIGNjLmxvZyhgW1NlbGVjdFNjZW5lVUldIGNlbnRlckRpc3BsYXlBcmVh5L2N572uOiAoJHt0aGlzLmNlbnRlckRpc3BsYXlBcmVhLnh9LCAke3RoaXMuY2VudGVyRGlzcGxheUFyZWEueX0pYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy53YXJuKGBbU2VsZWN0U2NlbmVVSV0g4pyXIOWNleS9jSAke3VuaXREYXRhLm5hbWV9IOayoeacieiuvue9rnByZWZhYu+8jOaXoOazleaYvuekuuWOn+Wei2ApO1xuICAgICAgICAgICAgY2Mud2FybihgW1NlbGVjdFNjZW5lVUldIOivt+WcqFNlbGVjdFNjZW5lVUnnmoQke3VuaXREYXRhLm5hbWUuaW5jbHVkZXMoXCLmiJjlo6tcIikgfHwgdW5pdERhdGEubmFtZS5pbmNsdWRlcyhcIuazleW4iFwiKSA/IFwiaGVyb1ByZWZhYnNcIiA6IFwibW9uc3RlclByZWZhYnNcIn3mlbDnu4TkuK3phY3nva5QcmVmYWJgKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbop5LoibLlsZ7mgKfvvIjmoLnmja7kv53lrZjnmoTnrYnnuqfmlbDmja7vvIlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gcHJlZmFiSW5zdGFuY2UgLSDkurrnianljp/lnovlrp7kvotcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdW5pdERhdGEgLSDljZXkvY3mlbDmja5cbiAgICAgKi9cbiAgICBhc3luYyBfaW5pdENoYXJhY3RlclN0YXRzKHByZWZhYkluc3RhbmNlLCB1bml0RGF0YSkge1xuICAgICAgICBjb25zdCBDaGFyYWN0ZXJEYXRhTWFuYWdlciA9IHJlcXVpcmUoXCJDaGFyYWN0ZXJEYXRhTWFuYWdlclwiKTtcbiAgICAgICAgY29uc3QgTGV2ZWxTeXN0ZW0gPSByZXF1aXJlKFwiTGV2ZWxTeXN0ZW1cIik7XG4gICAgICAgIGNvbnN0IFN0YXRzQ29tcG9uZW50ID0gcmVxdWlyZShcIlN0YXRzQ29tcG9uZW50XCIpO1xuXG4gICAgICAgIC8vIOiOt+WPllN0YXRzQ29tcG9uZW5057uE5Lu2XG4gICAgICAgIGNvbnN0IHN0YXRzID0gcHJlZmFiSW5zdGFuY2UuZ2V0Q29tcG9uZW50KFN0YXRzQ29tcG9uZW50KTtcbiAgICAgICAgaWYgKCFzdGF0cykge1xuICAgICAgICAgICAgY2MubG9nKGBbU2VsZWN0U2NlbmVVSV0gJHt1bml0RGF0YS5uYW1lfSDmsqHmnIlTdGF0c0NvbXBvbmVudOe7hOS7tu+8jOi3s+i/h+WxnuaAp+WIneWni+WMlmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5LuO5pys5Zyw5a2Y5YKo5Yqg6L296KeS6Imy55qE562J57qn5pWw5o2u77yI5pSv5oyB5byC5q2l77yJXG4gICAgICAgIGNvbnN0IHNhdmVkRGF0YSA9IGF3YWl0IENoYXJhY3RlckRhdGFNYW5hZ2VyLmxvYWRDaGFyYWN0ZXJMZXZlbCh1bml0RGF0YS5uYW1lKTtcblxuICAgICAgICBpZiAoc2F2ZWREYXRhKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzmnInkv53lrZjnmoTmlbDmja7vvIzkvb/nlKjkv53lrZjnmoTln7rnoYDlsZ7mgKdcbiAgICAgICAgICAgIHN0YXRzLmJhc2VIcCA9IHNhdmVkRGF0YS5iYXNlSHAgfHwgdW5pdERhdGEuaHAgfHwgMTAwO1xuICAgICAgICAgICAgc3RhdHMuYmFzZUF0dGFjayA9IHNhdmVkRGF0YS5iYXNlQXR0YWNrIHx8IHVuaXREYXRhLmF0dGFjayB8fCAxO1xuICAgICAgICAgICAgc3RhdHMuYmFzZURlZmVuc2UgPSBzYXZlZERhdGEuYmFzZURlZmVuc2UgfHwgdW5pdERhdGEuZGVmZW5zZSB8fCAxO1xuICAgICAgICAgICAgc3RhdHMuYmFzZVNwZWVkID0gc2F2ZWREYXRhLmJhc2VTcGVlZCB8fCB1bml0RGF0YS5zcGVlZCB8fCAxO1xuICAgICAgICAgICAgc3RhdHMuYmFzZUNyaXQgPSBzYXZlZERhdGEuYmFzZUNyaXQgfHwgdW5pdERhdGEuY3JpdCB8fCAwO1xuICAgICAgICAgICAgc3RhdHMuYmFzZU1pc3MgPSBzYXZlZERhdGEuYmFzZU1pc3MgfHwgdW5pdERhdGEubWlzcyB8fCAwO1xuXG4gICAgICAgICAgICAvLyDorr7nva7nrYnnuqflkoznu4/pqozlgLxcbiAgICAgICAgICAgIHN0YXRzLmxldmVsID0gc2F2ZWREYXRhLmxldmVsIHx8IDE7XG4gICAgICAgICAgICBzdGF0cy5leHAgPSBzYXZlZERhdGEuZXhwIHx8IDA7XG5cbiAgICAgICAgICAgIC8vIOW6lOeUqOetiee6p+WKoOaIkFxuICAgICAgICAgICAgc3RhdHMuX2FwcGx5TGV2ZWxCb251cygpO1xuXG4gICAgICAgICAgICBjYy5sb2coYFtTZWxlY3RTY2VuZVVJXSDliJ3lp4vljJYgJHt1bml0RGF0YS5uYW1lfSDlsZ7mgKc6IEx2LiR7c3RhdHMubGV2ZWx9LCBIUDoke3N0YXRzLm1heEhwfS8ke3N0YXRzLm1heEhwfSwgQVRLOiR7c3RhdHMuYXR0YWNrfSwgREVGOiR7c3RhdHMuZGVmZW5zZX1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWmguaenOayoeacieS/neWtmOeahOaVsOaNru+8jOS9v+eUqHVuaXREYXRh5Lit55qE5Z+656GA5bGe5oCnXG4gICAgICAgICAgICBzdGF0cy5iYXNlSHAgPSB1bml0RGF0YS5ocCB8fCAxMDA7XG4gICAgICAgICAgICBzdGF0cy5iYXNlQXR0YWNrID0gdW5pdERhdGEuYXR0YWNrIHx8IDE7XG4gICAgICAgICAgICBzdGF0cy5iYXNlRGVmZW5zZSA9IHVuaXREYXRhLmRlZmVuc2UgfHwgMTtcbiAgICAgICAgICAgIHN0YXRzLmJhc2VTcGVlZCA9IHVuaXREYXRhLnNwZWVkIHx8IDE7XG4gICAgICAgICAgICBzdGF0cy5iYXNlQ3JpdCA9IHVuaXREYXRhLmNyaXQgfHwgMDtcbiAgICAgICAgICAgIHN0YXRzLmJhc2VNaXNzID0gdW5pdERhdGEubWlzcyB8fCAwO1xuXG4gICAgICAgICAgICAvLyDorr7nva7pu5jorqTnrYnnuqflkoznu4/pqozlgLxcbiAgICAgICAgICAgIHN0YXRzLmxldmVsID0gMTtcbiAgICAgICAgICAgIHN0YXRzLmV4cCA9IDA7XG5cbiAgICAgICAgICAgIC8vIOW6lOeUqOetiee6p+WKoOaIkFxuICAgICAgICAgICAgc3RhdHMuX2FwcGx5TGV2ZWxCb251cygpO1xuXG4gICAgICAgICAgICBjYy5sb2coYFtTZWxlY3RTY2VuZVVJXSDliJ3lp4vljJYgJHt1bml0RGF0YS5uYW1lfSDlsZ7mgKfvvIjpu5jorqTvvIk6IEx2LiR7c3RhdHMubGV2ZWx9LCBIUDoke3N0YXRzLm1heEhwfS8ke3N0YXRzLm1heEhwfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6K6+572u5b2T5YmN55Sf5ZG95YC85Li65pyA5aSn55Sf5ZG95YC877yI5ruh6KGA5pi+56S677yJXG4gICAgICAgIHN0YXRzLmhwID0gc3RhdHMubWF4SHA7XG5cbiAgICAgICAgLy8g5pu05paw6KGA5p2h5pi+56S6XG4gICAgICAgIGlmIChzdGF0cy51cGRhdGVIZWFsdGhCYXIpIHtcbiAgICAgICAgICAgIHN0YXRzLnVwZGF0ZUhlYWx0aEJhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pu05paw57uP6aqM5p2h5pi+56S6XG4gICAgICAgIGlmIChzdGF0cy51cGRhdGVFeHBCYXIpIHtcbiAgICAgICAgICAgIHN0YXRzLnVwZGF0ZUV4cEJhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pu05paw5oCS5rCU5p2h5pi+56S677yI5Yid5aeL5Li6MO+8iVxuICAgICAgICBpZiAoc3RhdHMudXBkYXRlUmFnZUJhcikge1xuICAgICAgICAgICAgc3RhdHMucmFnZSA9IDA7XG4gICAgICAgICAgICBzdGF0cy51cGRhdGVSYWdlQmFyKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiDojrflj5bpgInkuK3nmoTljZXkvY3liJfooahcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB7IGhlcm9zOiBbXSwgbW9uc3RlcnM6IFtdIH1cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZFVuaXRzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGVyb3M6IFsuLi50aGlzLnNlbGVjdGVkSGVyb3NdLFxuICAgICAgICAgICAgbW9uc3RlcnM6IFsuLi50aGlzLnNlbGVjdGVkTW9uc3RlcnNdXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOajgOafpeaYr+WQpuaciemAieS4reeahOWNleS9jVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGhhc1NlbGVjdGVkVW5pdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSGVyb3MubGVuZ3RoID4gMCB8fCB0aGlzLnNlbGVjdGVkTW9uc3RlcnMubGVuZ3RoID4gMDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6K6+572u5aS05YOP5Zu65a6a5L2N572uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGF2YXRhck5vZGUgLSDlpLTlg4/oioLngrlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGVhbSAtIOmYn+S8jeexu+Wei1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIOe0ouW8le+8iOS9v+eUqHVuaXREYXRh5Lit55qEYXZhdGFyUG9zaXRpb27vvIzlpoLmnpzmsqHmnInliJnkvb/nlKhpbmRleO+8iVxuICAgICAqL1xuICAgIF9zZXRBdmF0YXJQb3NpdGlvbihhdmF0YXJOb2RlLCB0ZWFtLCBpbmRleCkge1xuICAgICAgICAvLyDojrflj5bljZXkvY3mlbDmja7kuK3nmoTlm7rlrprkvY3nva7ntKLlvJXvvIjlpoLmnpzmnInvvIlcbiAgICAgICAgY29uc3QgdW5pdERhdGEgPSBhdmF0YXJOb2RlLl91bml0RGF0YTtcbiAgICAgICAgY29uc3QgcG9zaXRpb25JbmRleCA9ICh1bml0RGF0YSAmJiB1bml0RGF0YS5hdmF0YXJQb3NpdGlvbiAhPT0gdW5kZWZpbmVkKSA/IHVuaXREYXRhLmF2YXRhclBvc2l0aW9uIDogaW5kZXg7XG5cbiAgICAgICAgLy8g5L2/55So6YWN572u55qE6Ze06Led5ZKM6LW35aeL5L2N572uXG4gICAgICAgIGNvbnN0IHNwYWNpbmcgPSB0aGlzLmF2YXRhclNwYWNpbmcgfHwgMTIwO1xuICAgICAgICBjb25zdCBzdGFydFkgPSB0aGlzLmF2YXRhclN0YXJ0WSB8fCAxMDA7XG5cbiAgICAgICAgLy8g6K6h566X5Zu65a6a5L2N572u77yI5Z6C55u05o6S5YiX77yM5LuO5LiK5Yiw5LiL77yJXG4gICAgICAgIGNvbnN0IHkgPSBzdGFydFkgLSAocG9zaXRpb25JbmRleCAqIHNwYWNpbmcpO1xuICAgICAgICBhdmF0YXJOb2RlLnNldFBvc2l0aW9uKDAsIHkpO1xuXG4gICAgICAgIGNjLmxvZyhgW1NlbGVjdFNjZW5lVUldIOiuvue9riR7dGVhbX3lpLTlg4/kvY3nva46ICR7YXZhdGFyTm9kZS5uYW1lfSAtPiAoMCwgJHt5fSksIOS9jee9rue0ouW8lTogJHtwb3NpdGlvbkluZGV4fWApO1xuICAgIH1cbn0pO1xuXG4iXX0=