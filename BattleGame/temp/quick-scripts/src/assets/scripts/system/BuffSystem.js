"use strict";
cc._RF.push(module, 'd141adxuKZGs70aX8BO0US+', 'BuffSystem');
// Scripts/system/BuffSystem.js

"use strict";

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var BuffComponent = require("BuffComponent");
var BuffFactory = require("BuffFactory");
var StatsComponent = require("StatsComponent");
var BuffSystem = {
  addBuff: function addBuff(entity, buffComponent, logger, recorder, caster) {
    var existing = entity.getComponents(BuffComponent).find(function (b) {
      return b.buffName === buffComponent.buffName;
    });
    if (existing && !buffComponent.stackable) {
      existing.elapsed = 0;
      existing.duration = buffComponent.duration;
      // 如果是护盾Buff，重置护盾值
      if (buffComponent.shieldValue !== undefined && buffComponent.shieldValue !== null) {
        existing.shieldValue = buffComponent.shieldValue;
        cc.log("[BuffSystem] \u66F4\u65B0\u73B0\u6709\u62A4\u76FEBuff: shieldValue=" + existing.shieldValue);
      } else {
        cc.warn("[BuffSystem] buffComponent.shieldValue\u672A\u5B9A\u4E49: " + buffComponent.shieldValue);
      }
      // 更新施法者（如果提供了）
      if (caster) {
        existing.caster = caster;
      }
      if (existing.onApply) existing.onApply(entity, logger);

      // 记录Buff应用事件（更新现有Buff也算应用）
      if (recorder && typeof recorder === 'object' && recorder.recordBuffApply) {
        recorder.recordBuffApply(entity, existing.buffName);
      }

      // 如果是护盾Buff，更新血条显示
      var _stats = entity.getComponent("StatsComponent");
      if (existing.buffName === "护盾" && _stats) {
        _stats.updateHealthBar();
      }

      // 更新Buff图标显示
      this._updateBuffDisplay(entity);
      return;
    }
    var newBuff = entity.addComponent("BuffComponent");
    cc.log("[BuffSystem] \u6DFB\u52A0\u65B0Buff: name=" + buffComponent.name + ", shieldValue=" + buffComponent.shieldValue + ", buffComponent=", buffComponent);
    cc.log("[BuffSystem] \u8C03\u7528init\u524D: newBuff.shieldValue=" + newBuff.shieldValue);
    newBuff.init(buffComponent);
    // 设置施法者（如果提供了）
    if (caster) {
      newBuff.caster = caster;
    }
    cc.log("[BuffSystem] Buff\u521D\u59CB\u5316\u540E: buffName=" + newBuff.buffName + ", shieldValue=" + newBuff.shieldValue + ", shieldValue\u7C7B\u578B=" + typeof newBuff.shieldValue + ", caster=" + (caster ? caster.name : 'null'));
    var stats = entity.getComponent("StatsComponent");
    if (stats && newBuff.modifiers) {
      for (var key in newBuff.modifiers) {
        if (stats[key] !== undefined) stats[key] += newBuff.modifiers[key];
      }
      if (newBuff.modifiers.speed !== undefined) stats.updateAttackInterval();
    }
    if (newBuff.onApply) newBuff.onApply(entity, logger);

    // 如果是护盾Buff，更新血条显示
    if (newBuff.buffName === "护盾" && stats) {
      stats.updateHealthBar();
    }

    // 更新Buff图标显示
    this._updateBuffDisplay(entity);
  },
  update: function update(entity, dt, logger, recorder) {
    // 如果单位已死亡，不更新Buff
    var stats = entity.getComponent("StatsComponent");
    if (stats && stats.isDead()) {
      return;
    }
    var buffs = entity.getComponents(BuffComponent);
    var buffRemoved = false;
    for (var _iterator = _createForOfIteratorHelperLoose(buffs), _step; !(_step = _iterator()).done;) {
      var buff = _step.value;
      buff.elapsed += dt;
      buff.tickTimer += dt;
      if (buff.onTick && buff.tickTimer >= buff.interval) {
        // 再次检查是否死亡（防止在tick过程中死亡）
        if (stats && stats.isDead()) {
          return;
        }
        buff.onTick(entity, logger);
        buff.tickTimer = 0;
      }
      if (buff.elapsed >= buff.duration) {
        if (buff.onExpire) buff.onExpire(entity, logger);
        if (stats && buff.modifiers) {
          for (var k in buff.modifiers) {
            if (stats[k] !== undefined) stats[k] -= buff.modifiers[k];
          }
        }

        // 如果是护盾Buff，更新血条显示
        if (buff.buffName === "护盾" && stats) {
          stats.updateHealthBar();
        }

        // 记录Buff移除事件（确保recorder是有效的对象）
        if (recorder && typeof recorder === 'object' && recorder.recordBuffRemove) {
          recorder.recordBuffRemove(entity, buff.buffName);
        }
        entity.removeComponent(buff);
        buffRemoved = true;
      }
    }

    // 更新Buff图标显示
    this._updateBuffDisplay(entity);
  },
  hasStatus: function hasStatus(entity, statusKey) {
    return entity.getComponents(BuffComponent).some(function (b) {
      return b.status && b.status[statusKey];
    });
  },
  /**
   * 移除指定的Buff列表
   * @param {cc.Node} entity - 实体节点
   * @param {Array<string>} buffNames - 要移除的Buff名称列表
   * @param {Function} logger - 日志函数
   * @param {Object} recorder - 战斗记录器（可选）
   */
  removeBuffs: function removeBuffs(entity, buffNames, logger, recorder) {
    if (!entity || !entity.isValid) return;
    var BuffComponent = require("BuffComponent");
    var buffs = entity.getComponents(BuffComponent);
    var stats = entity.getComponent("StatsComponent");
    var removedCount = 0;
    for (var _iterator2 = _createForOfIteratorHelperLoose(buffs), _step2; !(_step2 = _iterator2()).done;) {
      var buff = _step2.value;
      // 检查这个Buff是否在要移除的列表中
      if (buffNames.includes(buff.buffName)) {
        // 调用Buff的onExpire回调（如果存在）
        if (buff.onExpire) {
          buff.onExpire(entity, logger);
        }

        // 恢复属性修改（如果有）
        if (stats && buff.modifiers) {
          for (var key in buff.modifiers) {
            if (stats[key] !== undefined) {
              stats[key] -= buff.modifiers[key];
            }
          }
          if (buff.modifiers.speed !== undefined) {
            stats.updateAttackInterval();
          }
        }

        // 如果是护盾Buff，更新血条显示
        if (buff.buffName === "护盾" && stats) {
          stats.updateHealthBar();
        }

        // 记录Buff移除事件（确保recorder是有效的对象）
        if (recorder && typeof recorder === 'object' && recorder.recordBuffRemove) {
          recorder.recordBuffRemove(entity, buff.buffName);
        }

        // 移除Buff组件
        entity.removeComponent(buff);
        removedCount++;
        logger("\u2728 " + entity.name + " \u7684 " + buff.buffName + " \u6548\u679C\u88AB\u51C0\u5316\u4E86");
      }
    }
    if (removedCount > 0) {
      logger("\uD83C\uDF1F " + entity.name + " \u88AB\u51C0\u5316\uFF0C\u79FB\u9664\u4E86 " + removedCount + " \u4E2A\u8D1F\u9762\u6548\u679C");
      // 更新Buff图标显示
      this._updateBuffDisplay(entity);
    }
  },
  /**
   * 更新实体的Buff图标显示
   * @param {cc.Node} entity - 实体节点
   */
  _updateBuffDisplay: function _updateBuffDisplay(entity) {
    var buffDisplay = entity.getComponent("BuffIconDisplay");
    if (buffDisplay && buffDisplay.updateBuffDisplay) {
      buffDisplay.updateBuffDisplay();
    }
  }
};
module.exports = BuffSystem;

cc._RF.pop();