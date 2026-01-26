"use strict";
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