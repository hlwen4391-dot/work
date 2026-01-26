
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/system/BuffSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxCdWZmU3lzdGVtLmpzIl0sIm5hbWVzIjpbIkJ1ZmZDb21wb25lbnQiLCJyZXF1aXJlIiwiQnVmZkZhY3RvcnkiLCJTdGF0c0NvbXBvbmVudCIsIkJ1ZmZTeXN0ZW0iLCJhZGRCdWZmIiwiZW50aXR5IiwiYnVmZkNvbXBvbmVudCIsImxvZ2dlciIsInJlY29yZGVyIiwiY2FzdGVyIiwiZXhpc3RpbmciLCJnZXRDb21wb25lbnRzIiwiZmluZCIsImIiLCJidWZmTmFtZSIsInN0YWNrYWJsZSIsImVsYXBzZWQiLCJkdXJhdGlvbiIsInNoaWVsZFZhbHVlIiwidW5kZWZpbmVkIiwiY2MiLCJsb2ciLCJ3YXJuIiwib25BcHBseSIsInJlY29yZEJ1ZmZBcHBseSIsInN0YXRzIiwiZ2V0Q29tcG9uZW50IiwidXBkYXRlSGVhbHRoQmFyIiwiX3VwZGF0ZUJ1ZmZEaXNwbGF5IiwibmV3QnVmZiIsImFkZENvbXBvbmVudCIsIm5hbWUiLCJpbml0IiwibW9kaWZpZXJzIiwia2V5Iiwic3BlZWQiLCJ1cGRhdGVBdHRhY2tJbnRlcnZhbCIsInVwZGF0ZSIsImR0IiwiaXNEZWFkIiwiYnVmZnMiLCJidWZmUmVtb3ZlZCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJfc3RlcCIsImRvbmUiLCJidWZmIiwidmFsdWUiLCJ0aWNrVGltZXIiLCJvblRpY2siLCJpbnRlcnZhbCIsIm9uRXhwaXJlIiwiayIsInJlY29yZEJ1ZmZSZW1vdmUiLCJyZW1vdmVDb21wb25lbnQiLCJoYXNTdGF0dXMiLCJzdGF0dXNLZXkiLCJzb21lIiwic3RhdHVzIiwicmVtb3ZlQnVmZnMiLCJidWZmTmFtZXMiLCJpc1ZhbGlkIiwicmVtb3ZlZENvdW50IiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsImluY2x1ZGVzIiwiYnVmZkRpc3BsYXkiLCJ1cGRhdGVCdWZmRGlzcGxheSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFw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UztNQUN6RDtNQUNBLElBQUksQ0FBQ2xDLGtCQUFrQixDQUFDdkIsTUFBTSxDQUFDO0lBQ25DO0VBQ0osQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0l1QixrQkFBa0IsV0FBQUEsbUJBQUN2QixNQUFNLEVBQUU7SUFDdkIsSUFBTTZELFdBQVcsR0FBRzdELE1BQU0sQ0FBQ3FCLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztJQUMxRCxJQUFJd0MsV0FBVyxJQUFJQSxXQUFXLENBQUNDLGlCQUFpQixFQUFFO01BQzlDRCxXQUFXLENBQUNDLGlCQUFpQixFQUFFO0lBQ25DO0VBQ0o7QUFDSixDQUFDO0FBRURDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHbEUsVUFBVSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEJ1ZmZDb21wb25lbnQgPSByZXF1aXJlKFwiQnVmZkNvbXBvbmVudFwiKTtcclxudmFyIEJ1ZmZGYWN0b3J5ID0gcmVxdWlyZShcIkJ1ZmZGYWN0b3J5XCIpO1xyXG52YXIgU3RhdHNDb21wb25lbnQgPSByZXF1aXJlKFwiU3RhdHNDb21wb25lbnRcIik7XHJcblxyXG52YXIgQnVmZlN5c3RlbSA9IHtcclxuXHJcbiAgICBhZGRCdWZmKGVudGl0eSwgYnVmZkNvbXBvbmVudCwgbG9nZ2VyLCByZWNvcmRlciwgY2FzdGVyKSB7XHJcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBlbnRpdHkuZ2V0Q29tcG9uZW50cyhCdWZmQ29tcG9uZW50KVxyXG4gICAgICAgICAgICAuZmluZChiID0+IGIuYnVmZk5hbWUgPT09IGJ1ZmZDb21wb25lbnQuYnVmZk5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoZXhpc3RpbmcgJiYgIWJ1ZmZDb21wb25lbnQuc3RhY2thYmxlKSB7XHJcbiAgICAgICAgICAgIGV4aXN0aW5nLmVsYXBzZWQgPSAwO1xyXG4gICAgICAgICAgICBleGlzdGluZy5kdXJhdGlvbiA9IGJ1ZmZDb21wb25lbnQuZHVyYXRpb247XHJcbiAgICAgICAgICAgIC8vIOWmguaenOaYr+aKpOebvkJ1ZmbvvIzph43nva7miqTnm77lgLxcclxuICAgICAgICAgICAgaWYgKGJ1ZmZDb21wb25lbnQuc2hpZWxkVmFsdWUgIT09IHVuZGVmaW5lZCAmJiBidWZmQ29tcG9uZW50LnNoaWVsZFZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBleGlzdGluZy5zaGllbGRWYWx1ZSA9IGJ1ZmZDb21wb25lbnQuc2hpZWxkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coYFtCdWZmU3lzdGVtXSDmm7TmlrDnjrDmnInmiqTnm75CdWZmOiBzaGllbGRWYWx1ZT0ke2V4aXN0aW5nLnNoaWVsZFZhbHVlfWApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2Mud2FybihgW0J1ZmZTeXN0ZW1dIGJ1ZmZDb21wb25lbnQuc2hpZWxkVmFsdWXmnKrlrprkuYk6ICR7YnVmZkNvbXBvbmVudC5zaGllbGRWYWx1ZX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDmm7TmlrDmlr3ms5XogIXvvIjlpoLmnpzmj5DkvpvkuobvvIlcclxuICAgICAgICAgICAgaWYgKGNhc3Rlcikge1xyXG4gICAgICAgICAgICAgICAgZXhpc3RpbmcuY2FzdGVyID0gY2FzdGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChleGlzdGluZy5vbkFwcGx5KSBleGlzdGluZy5vbkFwcGx5KGVudGl0eSwgbG9nZ2VyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOiusOW9lUJ1ZmblupTnlKjkuovku7bvvIjmm7TmlrDnjrDmnIlCdWZm5Lmf566X5bqU55So77yJXHJcbiAgICAgICAgICAgIGlmIChyZWNvcmRlciAmJiB0eXBlb2YgcmVjb3JkZXIgPT09ICdvYmplY3QnICYmIHJlY29yZGVyLnJlY29yZEJ1ZmZBcHBseSkge1xyXG4gICAgICAgICAgICAgICAgcmVjb3JkZXIucmVjb3JkQnVmZkFwcGx5KGVudGl0eSwgZXhpc3RpbmcuYnVmZk5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDlpoLmnpzmmK/miqTnm75CdWZm77yM5pu05paw6KGA5p2h5pi+56S6XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRzID0gZW50aXR5LmdldENvbXBvbmVudChcIlN0YXRzQ29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICBpZiAoZXhpc3RpbmcuYnVmZk5hbWUgPT09IFwi5oqk55u+XCIgJiYgc3RhdHMpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRzLnVwZGF0ZUhlYWx0aEJhcigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDmm7TmlrBCdWZm5Zu+5qCH5pi+56S6XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUJ1ZmZEaXNwbGF5KGVudGl0eSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBuZXdCdWZmID0gZW50aXR5LmFkZENvbXBvbmVudChcIkJ1ZmZDb21wb25lbnRcIik7XHJcbiAgICAgICAgY2MubG9nKGBbQnVmZlN5c3RlbV0g5re75Yqg5pawQnVmZjogbmFtZT0ke2J1ZmZDb21wb25lbnQubmFtZX0sIHNoaWVsZFZhbHVlPSR7YnVmZkNvbXBvbmVudC5zaGllbGRWYWx1ZX0sIGJ1ZmZDb21wb25lbnQ9YCwgYnVmZkNvbXBvbmVudCk7XHJcbiAgICAgICAgY2MubG9nKGBbQnVmZlN5c3RlbV0g6LCD55SoaW5pdOWJjTogbmV3QnVmZi5zaGllbGRWYWx1ZT0ke25ld0J1ZmYuc2hpZWxkVmFsdWV9YCk7XHJcbiAgICAgICAgbmV3QnVmZi5pbml0KGJ1ZmZDb21wb25lbnQpO1xyXG4gICAgICAgIC8vIOiuvue9ruaWveazleiAhe+8iOWmguaenOaPkOS+m+S6hu+8iVxyXG4gICAgICAgIGlmIChjYXN0ZXIpIHtcclxuICAgICAgICAgICAgbmV3QnVmZi5jYXN0ZXIgPSBjYXN0ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmxvZyhgW0J1ZmZTeXN0ZW1dIEJ1ZmbliJ3lp4vljJblkI46IGJ1ZmZOYW1lPSR7bmV3QnVmZi5idWZmTmFtZX0sIHNoaWVsZFZhbHVlPSR7bmV3QnVmZi5zaGllbGRWYWx1ZX0sIHNoaWVsZFZhbHVl57G75Z6LPSR7dHlwZW9mIG5ld0J1ZmYuc2hpZWxkVmFsdWV9LCBjYXN0ZXI9JHtjYXN0ZXIgPyBjYXN0ZXIubmFtZSA6ICdudWxsJ31gKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhdHMgPSBlbnRpdHkuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XHJcblxyXG4gICAgICAgIGlmIChzdGF0cyAmJiBuZXdCdWZmLm1vZGlmaWVycykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gbmV3QnVmZi5tb2RpZmllcnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0c1trZXldICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHNba2V5XSArPSBuZXdCdWZmLm1vZGlmaWVyc1trZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuZXdCdWZmLm1vZGlmaWVycy5zcGVlZCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgc3RhdHMudXBkYXRlQXR0YWNrSW50ZXJ2YWwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZXdCdWZmLm9uQXBwbHkpXHJcbiAgICAgICAgICAgIG5ld0J1ZmYub25BcHBseShlbnRpdHksIGxvZ2dlcik7XHJcblxyXG4gICAgICAgIC8vIOWmguaenOaYr+aKpOebvkJ1ZmbvvIzmm7TmlrDooYDmnaHmmL7npLpcclxuICAgICAgICBpZiAobmV3QnVmZi5idWZmTmFtZSA9PT0gXCLmiqTnm75cIiAmJiBzdGF0cykge1xyXG4gICAgICAgICAgICBzdGF0cy51cGRhdGVIZWFsdGhCYXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOabtOaWsEJ1Zmblm77moIfmmL7npLpcclxuICAgICAgICB0aGlzLl91cGRhdGVCdWZmRGlzcGxheShlbnRpdHkpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUoZW50aXR5LCBkdCwgbG9nZ2VyLCByZWNvcmRlcikge1xyXG4gICAgICAgIC8vIOWmguaenOWNleS9jeW3suatu+S6oe+8jOS4jeabtOaWsEJ1ZmZcclxuICAgICAgICBjb25zdCBzdGF0cyA9IGVudGl0eS5nZXRDb21wb25lbnQoXCJTdGF0c0NvbXBvbmVudFwiKTtcclxuICAgICAgICBpZiAoc3RhdHMgJiYgc3RhdHMuaXNEZWFkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYnVmZnMgPSBlbnRpdHkuZ2V0Q29tcG9uZW50cyhCdWZmQ29tcG9uZW50KTtcclxuICAgICAgICBsZXQgYnVmZlJlbW92ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgYnVmZiBvZiBidWZmcykge1xyXG4gICAgICAgICAgICBidWZmLmVsYXBzZWQgKz0gZHQ7XHJcbiAgICAgICAgICAgIGJ1ZmYudGlja1RpbWVyICs9IGR0O1xyXG5cclxuICAgICAgICAgICAgaWYgKGJ1ZmYub25UaWNrICYmIGJ1ZmYudGlja1RpbWVyID49IGJ1ZmYuaW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgICAgIC8vIOWGjeasoeajgOafpeaYr+WQpuatu+S6oe+8iOmYsuatouWcqHRpY2vov4fnqIvkuK3mrbvkuqHvvIlcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0cyAmJiBzdGF0cy5pc0RlYWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ1ZmYub25UaWNrKGVudGl0eSwgbG9nZ2VyKTtcclxuICAgICAgICAgICAgICAgIGJ1ZmYudGlja1RpbWVyID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGJ1ZmYuZWxhcHNlZCA+PSBidWZmLmR1cmF0aW9uKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJ1ZmYub25FeHBpcmUpXHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZi5vbkV4cGlyZShlbnRpdHksIGxvZ2dlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRzICYmIGJ1ZmYubW9kaWZpZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayBpbiBidWZmLm1vZGlmaWVycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHNba10gIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzW2tdIC09IGJ1ZmYubW9kaWZpZXJzW2tdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmmK/miqTnm75CdWZm77yM5pu05paw6KGA5p2h5pi+56S6XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVmZi5idWZmTmFtZSA9PT0gXCLmiqTnm75cIiAmJiBzdGF0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRzLnVwZGF0ZUhlYWx0aEJhcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIOiusOW9lUJ1Zmbnp7vpmaTkuovku7bvvIjnoa7kv51yZWNvcmRlcuaYr+acieaViOeahOWvueixoe+8iVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZGVyICYmIHR5cGVvZiByZWNvcmRlciA9PT0gJ29iamVjdCcgJiYgcmVjb3JkZXIucmVjb3JkQnVmZlJlbW92ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZGVyLnJlY29yZEJ1ZmZSZW1vdmUoZW50aXR5LCBidWZmLmJ1ZmZOYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbnRpdHkucmVtb3ZlQ29tcG9uZW50KGJ1ZmYpO1xyXG4gICAgICAgICAgICAgICAgYnVmZlJlbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmm7TmlrBCdWZm5Zu+5qCH5pi+56S6XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlQnVmZkRpc3BsYXkoZW50aXR5KTtcclxuICAgIH0sXHJcblxyXG4gICAgaGFzU3RhdHVzKGVudGl0eSwgc3RhdHVzS2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIGVudGl0eS5nZXRDb21wb25lbnRzKEJ1ZmZDb21wb25lbnQpXHJcbiAgICAgICAgICAgIC5zb21lKGIgPT4gYi5zdGF0dXMgJiYgYi5zdGF0dXNbc3RhdHVzS2V5XSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog56e76Zmk5oyH5a6a55qEQnVmZuWIl+ihqFxyXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBlbnRpdHkgLSDlrp7kvZPoioLngrlcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gYnVmZk5hbWVzIC0g6KaB56e76Zmk55qEQnVmZuWQjeensOWIl+ihqFxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbG9nZ2VyIC0g5pel5b+X5Ye95pWwXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkZXIgLSDmiJjmlpforrDlvZXlmajvvIjlj6/pgInvvIlcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlQnVmZnMoZW50aXR5LCBidWZmTmFtZXMsIGxvZ2dlciwgcmVjb3JkZXIpIHtcclxuICAgICAgICBpZiAoIWVudGl0eSB8fCAhZW50aXR5LmlzVmFsaWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgQnVmZkNvbXBvbmVudCA9IHJlcXVpcmUoXCJCdWZmQ29tcG9uZW50XCIpO1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZzID0gZW50aXR5LmdldENvbXBvbmVudHMoQnVmZkNvbXBvbmVudCk7XHJcbiAgICAgICAgY29uc3Qgc3RhdHMgPSBlbnRpdHkuZ2V0Q29tcG9uZW50KFwiU3RhdHNDb21wb25lbnRcIik7XHJcbiAgICAgICAgbGV0IHJlbW92ZWRDb3VudCA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGJ1ZmYgb2YgYnVmZnMpIHtcclxuICAgICAgICAgICAgLy8g5qOA5p+l6L+Z5LiqQnVmZuaYr+WQpuWcqOimgeenu+mZpOeahOWIl+ihqOS4rVxyXG4gICAgICAgICAgICBpZiAoYnVmZk5hbWVzLmluY2x1ZGVzKGJ1ZmYuYnVmZk5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDosIPnlKhCdWZm55qEb25FeHBpcmXlm57osIPvvIjlpoLmnpzlrZjlnKjvvIlcclxuICAgICAgICAgICAgICAgIGlmIChidWZmLm9uRXhwaXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmZi5vbkV4cGlyZShlbnRpdHksIGxvZ2dlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g5oGi5aSN5bGe5oCn5L+u5pS577yI5aaC5p6c5pyJ77yJXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHMgJiYgYnVmZi5tb2RpZmllcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gYnVmZi5tb2RpZmllcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRzW2tleV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHNba2V5XSAtPSBidWZmLm1vZGlmaWVyc1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChidWZmLm1vZGlmaWVycy5zcGVlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRzLnVwZGF0ZUF0dGFja0ludGVydmFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIOWmguaenOaYr+aKpOebvkJ1ZmbvvIzmm7TmlrDooYDmnaHmmL7npLpcclxuICAgICAgICAgICAgICAgIGlmIChidWZmLmJ1ZmZOYW1lID09PSBcIuaKpOebvlwiICYmIHN0YXRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHMudXBkYXRlSGVhbHRoQmFyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g6K6w5b2VQnVmZuenu+mZpOS6i+S7tu+8iOehruS/nXJlY29yZGVy5piv5pyJ5pWI55qE5a+56LGh77yJXHJcbiAgICAgICAgICAgICAgICBpZiAocmVjb3JkZXIgJiYgdHlwZW9mIHJlY29yZGVyID09PSAnb2JqZWN0JyAmJiByZWNvcmRlci5yZWNvcmRCdWZmUmVtb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkZXIucmVjb3JkQnVmZlJlbW92ZShlbnRpdHksIGJ1ZmYuYnVmZk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIOenu+mZpEJ1Zmbnu4Tku7ZcclxuICAgICAgICAgICAgICAgIGVudGl0eS5yZW1vdmVDb21wb25lbnQoYnVmZik7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVkQ291bnQrKztcclxuXHJcbiAgICAgICAgICAgICAgICBsb2dnZXIoYOKcqCAke2VudGl0eS5uYW1lfSDnmoQgJHtidWZmLmJ1ZmZOYW1lfSDmlYjmnpzooqvlh4DljJbkuoZgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlbW92ZWRDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgbG9nZ2VyKGDwn4yfICR7ZW50aXR5Lm5hbWV9IOiiq+WHgOWMlu+8jOenu+mZpOS6hiAke3JlbW92ZWRDb3VudH0g5Liq6LSf6Z2i5pWI5p6cYCk7XHJcbiAgICAgICAgICAgIC8vIOabtOaWsEJ1Zmblm77moIfmmL7npLpcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQnVmZkRpc3BsYXkoZW50aXR5KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5a6e5L2T55qEQnVmZuWbvuagh+aYvuekulxyXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBlbnRpdHkgLSDlrp7kvZPoioLngrlcclxuICAgICAqL1xyXG4gICAgX3VwZGF0ZUJ1ZmZEaXNwbGF5KGVudGl0eSkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZEaXNwbGF5ID0gZW50aXR5LmdldENvbXBvbmVudChcIkJ1ZmZJY29uRGlzcGxheVwiKTtcclxuICAgICAgICBpZiAoYnVmZkRpc3BsYXkgJiYgYnVmZkRpc3BsYXkudXBkYXRlQnVmZkRpc3BsYXkpIHtcclxuICAgICAgICAgICAgYnVmZkRpc3BsYXkudXBkYXRlQnVmZkRpc3BsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJ1ZmZTeXN0ZW07Il19