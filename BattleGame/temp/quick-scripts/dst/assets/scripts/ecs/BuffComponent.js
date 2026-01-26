
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ecs/BuffComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1574el8BZFBnZWM8QtINxu5', 'BuffComponent');
// Scripts/ecs/BuffComponent.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    buffName: "",
    duration: 0,
    elapsed: 0,
    stackable: false,
    modifiers: {
      "default": function _default() {
        return {};
      },
      visible: false
    },
    interval: 1,
    tickTimer: 0,
    status: {
      "default": function _default() {
        return {};
      },
      visible: false
    },
    shieldValue: {
      "default": 0,
      tooltip: "护盾值"
    },
    caster: {
      "default": null,
      type: cc.Node,
      visible: false,
      tooltip: "施法者（释放这个Buff的单位）"
    }
  },
  onLoad: function onLoad() {
    // 确保shieldValue在onLoad时也被正确设置
    if (this._initShieldValue !== undefined) {
      this.shieldValue = this._initShieldValue;
      cc.log("[BuffComponent] onLoad: \u6062\u590DshieldValue=" + this.shieldValue);
    }
  },
  init: function init(config) {
    cc.log("[BuffComponent] init\u5F00\u59CB: config=", config);
    cc.log("[BuffComponent] init\u5F00\u59CB: config.shieldValue=" + config.shieldValue + ", typeof=" + typeof config.shieldValue);
    this.buffName = config.name;
    this.duration = config.duration;
    this.stackable = config.stackable || false;
    this.onApply = config.onApply;
    this.onTick = config.onTick;
    this.onExpire = config.onExpire;
    this.modifiers = config.modifiers || {};
    this.interval = config.interval || 1;
    this.status = config.status || {};

    // 初始化护盾值：如果config.shieldValue是undefined，使用0；否则使用config.shieldValue（即使是0也使用）
    if (config.shieldValue !== undefined && config.shieldValue !== null) {
      this.shieldValue = config.shieldValue;
      this._initShieldValue = config.shieldValue; // 保存初始值，以防被properties重置
      cc.log("[BuffComponent] \u8BBE\u7F6EshieldValue=" + this.shieldValue + " (\u6765\u81EAconfig)");
    } else {
      this.shieldValue = 0;
      this._initShieldValue = 0;
      cc.log("[BuffComponent] config.shieldValue\u672A\u5B9A\u4E49\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u503C0");
    }
    cc.log("[BuffComponent] \u521D\u59CB\u5316\u5B8C\u6210: name=" + this.buffName + ", shieldValue=" + this.shieldValue + ", this.shieldValue\u7C7B\u578B=" + typeof this.shieldValue);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcZWNzXFxCdWZmQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYnVmZk5hbWUiLCJkdXJhdGlvbiIsImVsYXBzZWQiLCJzdGFja2FibGUiLCJtb2RpZmllcnMiLCJfZGVmYXVsdCIsInZpc2libGUiLCJpbnRlcnZhbCIsInRpY2tUaW1lciIsInN0YXR1cyIsInNoaWVsZFZhbHVlIiwidG9vbHRpcCIsImNhc3RlciIsInR5cGUiLCJOb2RlIiwib25Mb2FkIiwiX2luaXRTaGllbGRWYWx1ZSIsInVuZGVmaW5lZCIsImxvZyIsImluaXQiLCJjb25maWciLCJuYW1lIiwib25BcHBseSIsIm9uVGljayIsIm9uRXhwaXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLFFBQVEsRUFBRSxDQUFDO0lBQ1hDLE9BQU8sRUFBRSxDQUFDO0lBQ1ZDLFNBQVMsRUFBRSxLQUFLO0lBQ2hCQyxTQUFTLEVBQUU7TUFBRSxXQUFTLFNBQUFDLFNBQUE7UUFBQSxPQUFPLENBQUMsQ0FBQztNQUFBLENBQUM7TUFBRUMsT0FBTyxFQUFFO0lBQU0sQ0FBQztJQUNsREMsUUFBUSxFQUFFLENBQUM7SUFDWEMsU0FBUyxFQUFFLENBQUM7SUFDWkMsTUFBTSxFQUFFO01BQUUsV0FBUyxTQUFBSixTQUFBO1FBQUEsT0FBTyxDQUFDLENBQUM7TUFBQSxDQUFDO01BQUVDLE9BQU8sRUFBRTtJQUFNLENBQUM7SUFDL0NJLFdBQVcsRUFBRTtNQUNULFdBQVMsQ0FBQztNQUNWQyxPQUFPLEVBQUU7SUFDYixDQUFDO0lBQ0RDLE1BQU0sRUFBRTtNQUNKLFdBQVMsSUFBSTtNQUNiQyxJQUFJLEVBQUVqQixFQUFFLENBQUNrQixJQUFJO01BQ2JSLE9BQU8sRUFBRSxLQUFLO01BQ2RLLE9BQU8sRUFBRTtJQUNiO0VBQ0osQ0FBQztFQUVESSxNQUFNLFdBQUFBLE9BQUEsRUFBRztJQUNMO0lBQ0EsSUFBSSxJQUFJLENBQUNDLGdCQUFnQixLQUFLQyxTQUFTLEVBQUU7TUFDckMsSUFBSSxDQUFDUCxXQUFXLEdBQUcsSUFBSSxDQUFDTSxnQkFBZ0I7TUFDeENwQixFQUFFLENBQUNzQixHQUFHLHNEQUEwQyxJQUFJLENBQUNSLFdBQVcsQ0FBRztJQUN2RTtFQUNKLENBQUM7RUFFRFMsSUFBSSxXQUFBQSxLQUFDQyxNQUFNLEVBQUU7SUFDVHhCLEVBQUUsQ0FBQ3NCLEdBQUcsOENBQW9DRSxNQUFNLENBQUM7SUFDakR4QixFQUFFLENBQUNzQixHQUFHLDJEQUErQ0UsTUFBTSxDQUFDVixXQUFXLGlCQUFZLE9BQU9VLE1BQU0sQ0FBQ1YsV0FBVyxDQUFHO0lBRS9HLElBQUksQ0FBQ1YsUUFBUSxHQUFHb0IsTUFBTSxDQUFDQyxJQUFJO0lBQzNCLElBQUksQ0FBQ3BCLFFBQVEsR0FBR21CLE1BQU0sQ0FBQ25CLFFBQVE7SUFDL0IsSUFBSSxDQUFDRSxTQUFTLEdBQUdpQixNQUFNLENBQUNqQixTQUFTLElBQUksS0FBSztJQUUxQyxJQUFJLENBQUNtQixPQUFPLEdBQUdGLE1BQU0sQ0FBQ0UsT0FBTztJQUM3QixJQUFJLENBQUNDLE1BQU0sR0FBR0gsTUFBTSxDQUFDRyxNQUFNO0lBQzNCLElBQUksQ0FBQ0MsUUFBUSxHQUFHSixNQUFNLENBQUNJLFFBQVE7SUFDL0IsSUFBSSxDQUFDcEIsU0FBUyxHQUFHZ0IsTUFBTSxDQUFDaEIsU0FBUyxJQUFJLENBQUMsQ0FBQztJQUN2QyxJQUFJLENBQUNHLFFBQVEsR0FBR2EsTUFBTSxDQUFDYixRQUFRLElBQUksQ0FBQztJQUNwQyxJQUFJLENBQUNFLE1BQU0sR0FBR1csTUFBTSxDQUFDWCxNQUFNLElBQUksQ0FBQyxDQUFDOztJQUVqQztJQUNBLElBQUlXLE1BQU0sQ0FBQ1YsV0FBVyxLQUFLTyxTQUFTLElBQUlHLE1BQU0sQ0FBQ1YsV0FBVyxLQUFLLElBQUksRUFBRTtNQUNqRSxJQUFJLENBQUNBLFdBQVcsR0FBR1UsTUFBTSxDQUFDVixXQUFXO01BQ3JDLElBQUksQ0FBQ00sZ0JBQWdCLEdBQUdJLE1BQU0sQ0FBQ1YsV0FBVyxDQUFDLENBQUM7TUFDNUNkLEVBQUUsQ0FBQ3NCLEdBQUcsOENBQWtDLElBQUksQ0FBQ1IsV0FBVywyQkFBYztJQUMxRSxDQUFDLE1BQU07TUFDSCxJQUFJLENBQUNBLFdBQVcsR0FBRyxDQUFDO01BQ3BCLElBQUksQ0FBQ00sZ0JBQWdCLEdBQUcsQ0FBQztNQUN6QnBCLEVBQUUsQ0FBQ3NCLEdBQUcsNkZBQWdEO0lBQzFEO0lBRUF0QixFQUFFLENBQUNzQixHQUFHLDJEQUFnQyxJQUFJLENBQUNsQixRQUFRLHNCQUFpQixJQUFJLENBQUNVLFdBQVcsdUNBQXdCLE9BQU8sSUFBSSxDQUFDQSxXQUFXLENBQUc7RUFDMUk7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGJ1ZmZOYW1lOiBcIlwiLFxuICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgZWxhcHNlZDogMCxcbiAgICAgICAgc3RhY2thYmxlOiBmYWxzZSxcbiAgICAgICAgbW9kaWZpZXJzOiB7IGRlZmF1bHQ6ICgpID0+ICh7fSksIHZpc2libGU6IGZhbHNlIH0sXG4gICAgICAgIGludGVydmFsOiAxLFxuICAgICAgICB0aWNrVGltZXI6IDAsXG4gICAgICAgIHN0YXR1czogeyBkZWZhdWx0OiAoKSA9PiAoe30pLCB2aXNpYmxlOiBmYWxzZSB9LFxuICAgICAgICBzaGllbGRWYWx1ZToge1xuICAgICAgICAgICAgZGVmYXVsdDogMCxcbiAgICAgICAgICAgIHRvb2x0aXA6IFwi5oqk55u+5YC8XCJcbiAgICAgICAgfSxcbiAgICAgICAgY2FzdGVyOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgdG9vbHRpcDogXCLmlr3ms5XogIXvvIjph4rmlL7ov5nkuKpCdWZm55qE5Y2V5L2N77yJXCJcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIOehruS/nXNoaWVsZFZhbHVl5Zyob25Mb2Fk5pe25Lmf6KKr5q2j56Gu6K6+572uXG4gICAgICAgIGlmICh0aGlzLl9pbml0U2hpZWxkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zaGllbGRWYWx1ZSA9IHRoaXMuX2luaXRTaGllbGRWYWx1ZTtcbiAgICAgICAgICAgIGNjLmxvZyhgW0J1ZmZDb21wb25lbnRdIG9uTG9hZDog5oGi5aSNc2hpZWxkVmFsdWU9JHt0aGlzLnNoaWVsZFZhbHVlfWApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGluaXQoY29uZmlnKSB7XG4gICAgICAgIGNjLmxvZyhgW0J1ZmZDb21wb25lbnRdIGluaXTlvIDlp4s6IGNvbmZpZz1gLCBjb25maWcpO1xuICAgICAgICBjYy5sb2coYFtCdWZmQ29tcG9uZW50XSBpbml05byA5aeLOiBjb25maWcuc2hpZWxkVmFsdWU9JHtjb25maWcuc2hpZWxkVmFsdWV9LCB0eXBlb2Y9JHt0eXBlb2YgY29uZmlnLnNoaWVsZFZhbHVlfWApO1xuXG4gICAgICAgIHRoaXMuYnVmZk5hbWUgPSBjb25maWcubmFtZTtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGNvbmZpZy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFja2FibGUgPSBjb25maWcuc3RhY2thYmxlIHx8IGZhbHNlO1xuXG4gICAgICAgIHRoaXMub25BcHBseSA9IGNvbmZpZy5vbkFwcGx5O1xuICAgICAgICB0aGlzLm9uVGljayA9IGNvbmZpZy5vblRpY2s7XG4gICAgICAgIHRoaXMub25FeHBpcmUgPSBjb25maWcub25FeHBpcmU7XG4gICAgICAgIHRoaXMubW9kaWZpZXJzID0gY29uZmlnLm1vZGlmaWVycyB8fCB7fTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IGNvbmZpZy5pbnRlcnZhbCB8fCAxO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IGNvbmZpZy5zdGF0dXMgfHwge307XG5cbiAgICAgICAgLy8g5Yid5aeL5YyW5oqk55u+5YC877ya5aaC5p6cY29uZmlnLnNoaWVsZFZhbHVl5pivdW5kZWZpbmVk77yM5L2/55SoMO+8m+WQpuWImeS9v+eUqGNvbmZpZy5zaGllbGRWYWx1Ze+8iOWNs+S9v+aYrzDkuZ/kvb/nlKjvvIlcbiAgICAgICAgaWYgKGNvbmZpZy5zaGllbGRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5zaGllbGRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zaGllbGRWYWx1ZSA9IGNvbmZpZy5zaGllbGRWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX2luaXRTaGllbGRWYWx1ZSA9IGNvbmZpZy5zaGllbGRWYWx1ZTsgLy8g5L+d5a2Y5Yid5aeL5YC877yM5Lul6Ziy6KKrcHJvcGVydGllc+mHjee9rlxuICAgICAgICAgICAgY2MubG9nKGBbQnVmZkNvbXBvbmVudF0g6K6+572uc2hpZWxkVmFsdWU9JHt0aGlzLnNoaWVsZFZhbHVlfSAo5p2l6IeqY29uZmlnKWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaGllbGRWYWx1ZSA9IDA7XG4gICAgICAgICAgICB0aGlzLl9pbml0U2hpZWxkVmFsdWUgPSAwO1xuICAgICAgICAgICAgY2MubG9nKGBbQnVmZkNvbXBvbmVudF0gY29uZmlnLnNoaWVsZFZhbHVl5pyq5a6a5LmJ77yM5L2/55So6buY6K6k5YC8MGApO1xuICAgICAgICB9XG5cbiAgICAgICAgY2MubG9nKGBbQnVmZkNvbXBvbmVudF0g5Yid5aeL5YyW5a6M5oiQOiBuYW1lPSR7dGhpcy5idWZmTmFtZX0sIHNoaWVsZFZhbHVlPSR7dGhpcy5zaGllbGRWYWx1ZX0sIHRoaXMuc2hpZWxkVmFsdWXnsbvlnos9JHt0eXBlb2YgdGhpcy5zaGllbGRWYWx1ZX1gKTtcbiAgICB9XG59KTtcbiJdfQ==