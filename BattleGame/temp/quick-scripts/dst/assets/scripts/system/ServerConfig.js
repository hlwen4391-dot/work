
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/system/ServerConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3a8czxgPpLjo8LuJIzzpS3', 'ServerConfig');
// Scripts/system/ServerConfig.js

"use strict";

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * 服务器配置管理器
 * 统一管理所有系统的服务器配置
 */
var ServerConfig = {
  // 服务器基础URL
  baseURL: "https://your-api-server.com/api",
  // 请求超时时间（毫秒）
  timeout: 5000,
  // 失败重试次数
  retryCount: 3,
  // 身份验证配置
  auth: {
    enabled: false,
    // 是否启用身份验证
    token: null,
    // 用户token
    headerName: "Authorization",
    // 请求头名称
    headerValue: null // 请求头值，例如："Bearer {token}"
  },

  // 所有角色数据的服务器地址（可选，如果为null则使用baseURL）
  baseURLForAll: null,
  /**
   * 初始化服务器配置
   * @param {Object} config - 配置对象
   */
  init: function init(config) {
    if (config.baseURL) this.baseURL = config.baseURL;
    if (config.baseURLForAll !== undefined) this.baseURLForAll = config.baseURLForAll;
    if (config.timeout) this.timeout = config.timeout;
    if (config.retryCount) this.retryCount = config.retryCount;
    if (config.auth) {
      this.auth = _extends({}, this.auth, config.auth);
    }

    // 更新所有适配器的配置
    this._updateAdapters();
    cc.log("[ServerConfig] 服务器配置已初始化", {
      baseURL: this.baseURL,
      timeout: this.timeout,
      retryCount: this.retryCount,
      authEnabled: this.auth.enabled
    });
  },
  /**
   * 更新所有适配器的配置
   * @private
   */
  _updateAdapters: function _updateAdapters() {
    // 更新道具系统适配器
    try {
      var ItemDataAdapter = require("ItemDataAdapter");
      ItemDataAdapter.serverConfig.baseURL = this.baseURL;
      ItemDataAdapter.serverConfig.timeout = this.timeout;
      ItemDataAdapter.serverConfig.retryCount = this.retryCount;

      // 设置身份验证头
      if (this.auth.enabled && this.auth.headerValue) {
        var _ItemDataAdapter$serv;
        ItemDataAdapter.serverConfig.headers = (_ItemDataAdapter$serv = {}, _ItemDataAdapter$serv[this.auth.headerName] = this.auth.headerValue, _ItemDataAdapter$serv);
      } else {
        ItemDataAdapter.serverConfig.headers = null;
      }
    } catch (e) {
      cc.warn("[ServerConfig] ItemDataAdapter 未找到，跳过配置");
    }

    // 更新等级系统适配器
    try {
      var CharacterDataAdapter = require("CharacterDataAdapter");
      CharacterDataAdapter.serverConfig.baseURL = this.baseURL;
      CharacterDataAdapter.serverConfig.baseURLForAll = this.baseURLForAll;
      CharacterDataAdapter.serverConfig.timeout = this.timeout;
      CharacterDataAdapter.serverConfig.retryCount = this.retryCount;

      // 设置身份验证头
      if (this.auth.enabled && this.auth.headerValue) {
        var _CharacterDataAdapter;
        CharacterDataAdapter.serverConfig.headers = (_CharacterDataAdapter = {}, _CharacterDataAdapter[this.auth.headerName] = this.auth.headerValue, _CharacterDataAdapter);
      } else {
        CharacterDataAdapter.serverConfig.headers = null;
      }
    } catch (e) {
      cc.warn("[ServerConfig] CharacterDataAdapter 未找到，跳过配置");
    }
  },
  /**
   * 设置用户token
   * @param {string} token - 用户token
   */
  setAuthToken: function setAuthToken(token) {
    this.auth.token = token;
    this.auth.headerValue = "Bearer " + token; //设置请求头值
    this.auth.enabled = true; //设置是否启用身份验证
    this._updateAdapters(); //更新所有适配器的配置
    cc.log("[ServerConfig] 用户token已设置");
  },
  /**
   * 清除用户token
   */
  clearAuthToken: function clearAuthToken() {
    this.auth.token = null;
    this.auth.headerValue = null;
    this.auth.enabled = false;
    this._updateAdapters();
    cc.log("[ServerConfig] 用户token已清除");
  }
};
module.exports = ServerConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxTZXJ2ZXJDb25maWcuanMiXSwibmFtZXMiOlsiU2VydmVyQ29uZmlnIiwiYmFzZVVSTCIsInRpbWVvdXQiLCJyZXRyeUNvdW50IiwiYXV0aCIsImVuYWJsZWQiLCJ0b2tlbiIsImhlYWRlck5hbWUiLCJoZWFkZXJWYWx1ZSIsImJhc2VVUkxGb3JBbGwiLCJpbml0IiwiY29uZmlnIiwidW5kZWZpbmVkIiwiX2V4dGVuZHMiLCJfdXBkYXRlQWRhcHRlcnMiLCJjYyIsImxvZyIsImF1dGhFbmFibGVkIiwiSXRlbURhdGFBZGFwdGVyIiwicmVxdWlyZSIsInNlcnZlckNvbmZpZyIsIl9JdGVtRGF0YUFkYXB0ZXIkc2VydiIsImhlYWRlcnMiLCJlIiwid2FybiIsIkNoYXJhY3RlckRhdGFBZGFwdGVyIiwiX0NoYXJhY3RlckRhdGFBZGFwdGVyIiwic2V0QXV0aFRva2VuIiwiY2xlYXJBdXRoVG9rZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLFlBQVksR0FBRztFQUNmO0VBQ0FDLE9BQU8sRUFBRSxpQ0FBaUM7RUFFMUM7RUFDQUMsT0FBTyxFQUFFLElBQUk7RUFFYjtFQUNBQyxVQUFVLEVBQUUsQ0FBQztFQUViO0VBQ0FDLElBQUksRUFBRTtJQUNGQyxPQUFPLEVBQUUsS0FBSztJQUFFO0lBQ2hCQyxLQUFLLEVBQUUsSUFBSTtJQUFLO0lBQ2hCQyxVQUFVLEVBQUUsZUFBZTtJQUFFO0lBQzdCQyxXQUFXLEVBQUUsSUFBSSxDQUFDO0VBQ3RCLENBQUM7O0VBRUQ7RUFDQUMsYUFBYSxFQUFFLElBQUk7RUFFbkI7QUFDSjtBQUNBO0FBQ0E7RUFDSUMsSUFBSSxXQUFBQSxLQUFDQyxNQUFNLEVBQUU7SUFDVCxJQUFJQSxNQUFNLENBQUNWLE9BQU8sRUFBRSxJQUFJLENBQUNBLE9BQU8sR0FBR1UsTUFBTSxDQUFDVixP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LG9CQUFvQixDQUFDTCxZQUFZLENBQUNFLE9BQU8sR0FBRyxJQUFJO01BQ3BEO0lBQ0osQ0FBQyxDQUFDLE9BQU9DLENBQUMsRUFBRTtNQUNSUixFQUFFLENBQUNTLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQztJQUMzRDtFQUNKLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJRyxZQUFZLFdBQUFBLGFBQUNyQixLQUFLLEVBQUU7SUFDaEIsSUFBSSxDQUFDRixJQUFJLENBQUNFLEtBQUssR0FBR0EsS0FBSztJQUN2QixJQUFJLENBQUNGLElBQUksQ0FBQ0ksV0FBVyxlQUFhRixLQUFPLENBQUM7SUFDMUMsSUFBSSxDQUFDRixJQUFJLENBQUNDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDekIsSUFBSSxDQUFDUyxlQUFlLEVBQUUsQ0FBQztJQUN2QkMsRUFBRSxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLENBQUM7RUFDdkMsQ0FBQztFQUVEO0FBQ0o7QUFDQTtFQUNJWSxjQUFjLFdBQUFBLGVBQUEsRUFBRztJQUNiLElBQUksQ0FBQ3hCLElBQUksQ0FBQ0UsS0FBSyxHQUFHLElBQUk7SUFDdEIsSUFBSSxDQUFDRixJQUFJLENBQUNJLFdBQVcsR0FBRyxJQUFJO0lBQzVCLElBQUksQ0FBQ0osSUFBSSxDQUFDQyxPQUFPLEdBQUcsS0FBSztJQUN6QixJQUFJLENBQUNTLGVBQWUsRUFBRTtJQUN0QkMsRUFBRSxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLENBQUM7RUFDdkM7QUFDSixDQUFDO0FBRURhLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHOUIsWUFBWSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOacjeWKoeWZqOmFjee9rueuoeeQhuWZqFxyXG4gKiDnu5/kuIDnrqHnkIbmiYDmnInns7vnu5/nmoTmnI3liqHlmajphY3nva5cclxuICovXHJcbnZhciBTZXJ2ZXJDb25maWcgPSB7XHJcbiAgICAvLyDmnI3liqHlmajln7rnoYBVUkxcclxuICAgIGJhc2VVUkw6IFwiaHR0cHM6Ly95b3VyLWFwaS1zZXJ2ZXIuY29tL2FwaVwiLFxyXG5cclxuICAgIC8vIOivt+axgui2heaXtuaXtumXtO+8iOavq+enku+8iVxyXG4gICAgdGltZW91dDogNTAwMCxcclxuXHJcbiAgICAvLyDlpLHotKXph43or5XmrKHmlbBcclxuICAgIHJldHJ5Q291bnQ6IDMsXHJcblxyXG4gICAgLy8g6Lqr5Lu96aqM6K+B6YWN572uXHJcbiAgICBhdXRoOiB7XHJcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsIC8vIOaYr+WQpuWQr+eUqOi6q+S7vemqjOivgVxyXG4gICAgICAgIHRva2VuOiBudWxsLCAgICAvLyDnlKjmiLd0b2tlblxyXG4gICAgICAgIGhlYWRlck5hbWU6IFwiQXV0aG9yaXphdGlvblwiLCAvLyDor7fmsYLlpLTlkI3np7BcclxuICAgICAgICBoZWFkZXJWYWx1ZTogbnVsbCAvLyDor7fmsYLlpLTlgLzvvIzkvovlpoLvvJpcIkJlYXJlciB7dG9rZW59XCJcclxuICAgIH0sXHJcblxyXG4gICAgLy8g5omA5pyJ6KeS6Imy5pWw5o2u55qE5pyN5Yqh5Zmo5Zyw5Z2A77yI5Y+v6YCJ77yM5aaC5p6c5Li6bnVsbOWImeS9v+eUqGJhc2VVUkzvvIlcclxuICAgIGJhc2VVUkxGb3JBbGw6IG51bGwsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbmnI3liqHlmajphY3nva5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgLSDphY3nva7lr7nosaFcclxuICAgICAqL1xyXG4gICAgaW5pdChjb25maWcpIHtcclxuICAgICAgICBpZiAoY29uZmlnLmJhc2VVUkwpIHRoaXMuYmFzZVVSTCA9IGNvbmZpZy5iYXNlVVJMO1xyXG4gICAgICAgIGlmIChjb25maWcuYmFzZVVSTEZvckFsbCAhPT0gdW5kZWZpbmVkKSB0aGlzLmJhc2VVUkxGb3JBbGwgPSBjb25maWcuYmFzZVVSTEZvckFsbDtcclxuICAgICAgICBpZiAoY29uZmlnLnRpbWVvdXQpIHRoaXMudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xyXG4gICAgICAgIGlmIChjb25maWcucmV0cnlDb3VudCkgdGhpcy5yZXRyeUNvdW50ID0gY29uZmlnLnJldHJ5Q291bnQ7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5hdXRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aCA9IHsgLi4udGhpcy5hdXRoLCAuLi5jb25maWcuYXV0aCB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5pu05paw5omA5pyJ6YCC6YWN5Zmo55qE6YWN572uXHJcbiAgICAgICAgdGhpcy5fdXBkYXRlQWRhcHRlcnMoKTtcclxuXHJcbiAgICAgICAgY2MubG9nKFwiW1NlcnZlckNvbmZpZ10g5pyN5Yqh5Zmo6YWN572u5bey5Yid5aeL5YyWXCIsIHtcclxuICAgICAgICAgICAgYmFzZVVSTDogdGhpcy5iYXNlVVJMLFxyXG4gICAgICAgICAgICB0aW1lb3V0OiB0aGlzLnRpbWVvdXQsXHJcbiAgICAgICAgICAgIHJldHJ5Q291bnQ6IHRoaXMucmV0cnlDb3VudCxcclxuICAgICAgICAgICAgYXV0aEVuYWJsZWQ6IHRoaXMuYXV0aC5lbmFibGVkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5omA5pyJ6YCC6YWN5Zmo55qE6YWN572uXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfdXBkYXRlQWRhcHRlcnMoKSB7XHJcbiAgICAgICAgLy8g5pu05paw6YGT5YW357O757uf6YCC6YWN5ZmoXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgSXRlbURhdGFBZGFwdGVyID0gcmVxdWlyZShcIkl0ZW1EYXRhQWRhcHRlclwiKTtcclxuICAgICAgICAgICAgSXRlbURhdGFBZGFwdGVyLnNlcnZlckNvbmZpZy5iYXNlVVJMID0gdGhpcy5iYXNlVVJMO1xyXG4gICAgICAgICAgICBJdGVtRGF0YUFkYXB0ZXIuc2VydmVyQ29uZmlnLnRpbWVvdXQgPSB0aGlzLnRpbWVvdXQ7XHJcbiAgICAgICAgICAgIEl0ZW1EYXRhQWRhcHRlci5zZXJ2ZXJDb25maWcucmV0cnlDb3VudCA9IHRoaXMucmV0cnlDb3VudDtcclxuXHJcbiAgICAgICAgICAgIC8vIOiuvue9rui6q+S7vemqjOivgeWktFxyXG4gICAgICAgICAgICBpZiAodGhpcy5hdXRoLmVuYWJsZWQgJiYgdGhpcy5hdXRoLmhlYWRlclZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBJdGVtRGF0YUFkYXB0ZXIuc2VydmVyQ29uZmlnLmhlYWRlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgW3RoaXMuYXV0aC5oZWFkZXJOYW1lXTogdGhpcy5hdXRoLmhlYWRlclZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgSXRlbURhdGFBZGFwdGVyLnNlcnZlckNvbmZpZy5oZWFkZXJzID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIltTZXJ2ZXJDb25maWddIEl0ZW1EYXRhQWRhcHRlciDmnKrmib7liLDvvIzot7Pov4fphY3nva5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmm7TmlrDnrYnnuqfns7vnu5/pgILphY3lmahcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBDaGFyYWN0ZXJEYXRhQWRhcHRlciA9IHJlcXVpcmUoXCJDaGFyYWN0ZXJEYXRhQWRhcHRlclwiKTtcclxuICAgICAgICAgICAgQ2hhcmFjdGVyRGF0YUFkYXB0ZXIuc2VydmVyQ29uZmlnLmJhc2VVUkwgPSB0aGlzLmJhc2VVUkw7XHJcbiAgICAgICAgICAgIENoYXJhY3RlckRhdGFBZGFwdGVyLnNlcnZlckNvbmZpZy5iYXNlVVJMRm9yQWxsID0gdGhpcy5iYXNlVVJMRm9yQWxsO1xyXG4gICAgICAgICAgICBDaGFyYWN0ZXJEYXRhQWRhcHRlci5zZXJ2ZXJDb25maWcudGltZW91dCA9IHRoaXMudGltZW91dDtcclxuICAgICAgICAgICAgQ2hhcmFjdGVyRGF0YUFkYXB0ZXIuc2VydmVyQ29uZmlnLnJldHJ5Q291bnQgPSB0aGlzLnJldHJ5Q291bnQ7XHJcblxyXG4gICAgICAgICAgICAvLyDorr7nva7ouqvku73pqozor4HlpLRcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXV0aC5lbmFibGVkICYmIHRoaXMuYXV0aC5oZWFkZXJWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgQ2hhcmFjdGVyRGF0YUFkYXB0ZXIuc2VydmVyQ29uZmlnLmhlYWRlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgW3RoaXMuYXV0aC5oZWFkZXJOYW1lXTogdGhpcy5hdXRoLmhlYWRlclZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgQ2hhcmFjdGVyRGF0YUFkYXB0ZXIuc2VydmVyQ29uZmlnLmhlYWRlcnMgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwiW1NlcnZlckNvbmZpZ10gQ2hhcmFjdGVyRGF0YUFkYXB0ZXIg5pyq5om+5Yiw77yM6Lez6L+H6YWN572uXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7nlKjmiLd0b2tlblxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRva2VuIC0g55So5oi3dG9rZW5cclxuICAgICAqL1xyXG4gICAgc2V0QXV0aFRva2VuKHRva2VuKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoLnRva2VuID0gdG9rZW47XHJcbiAgICAgICAgdGhpcy5hdXRoLmhlYWRlclZhbHVlID0gYEJlYXJlciAke3Rva2VufWA7Ly/orr7nva7or7fmsYLlpLTlgLxcclxuICAgICAgICB0aGlzLmF1dGguZW5hYmxlZCA9IHRydWU7Ly/orr7nva7mmK/lkKblkK/nlKjouqvku73pqozor4FcclxuICAgICAgICB0aGlzLl91cGRhdGVBZGFwdGVycygpOy8v5pu05paw5omA5pyJ6YCC6YWN5Zmo55qE6YWN572uXHJcbiAgICAgICAgY2MubG9nKFwiW1NlcnZlckNvbmZpZ10g55So5oi3dG9rZW7lt7Lorr7nva5cIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5riF6Zmk55So5oi3dG9rZW5cclxuICAgICAqL1xyXG4gICAgY2xlYXJBdXRoVG9rZW4oKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoLnRva2VuID0gbnVsbDtcclxuICAgICAgICB0aGlzLmF1dGguaGVhZGVyVmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYXV0aC5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlQWRhcHRlcnMoKTtcclxuICAgICAgICBjYy5sb2coXCJbU2VydmVyQ29uZmlnXSDnlKjmiLd0b2tlbuW3sua4hemZpFwiKTtcclxuICAgIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2VydmVyQ29uZmlnO1xyXG4iXX0=