
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
    this.auth.headerValue = "Bearer " + token;
    this.auth.enabled = true;
    this._updateAdapters();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxTZXJ2ZXJDb25maWcuanMiXSwibmFtZXMiOlsiU2VydmVyQ29uZmlnIiwiYmFzZVVSTCIsInRpbWVvdXQiLCJyZXRyeUNvdW50IiwiYXV0aCIsImVuYWJsZWQiLCJ0b2tlbiIsImhlYWRlck5hbWUiLCJoZWFkZXJWYWx1ZSIsImJhc2VVUkxGb3JBbGwiLCJpbml0IiwiY29uZmlnIiwidW5kZWZpbmVkIiwiX2V4dGVuZHMiLCJfdXBkYXRlQWRhcHRlcnMiLCJjYyIsImxvZyIsImF1dGhFbmFibGVkIiwiSXRlbURhdGFBZGFwdGVyIiwicmVxdWlyZSIsInNlcnZlckNvbmZpZyIsIl9JdGVtRGF0YUFkYXB0ZXIkc2VydiIsImhlYWRlcnMiLCJlIiwid2FybiIsIkNoYXJhY3RlckRhdGFBZGFwdGVyIiwiX0NoYXJhY3RlckRhdGFBZGFwdGVyIiwic2V0QXV0aFRva2VuIiwiY2xlYXJBdXRoVG9rZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLFlBQVksR0FBRztFQUNmO0VBQ0FDLE9BQU8sRUFBRSxpQ0FBaUM7RUFFMUM7RUFDQUMsT0FBTyxFQUFFLElBQUk7RUFFYjtFQUNBQyxVQUFVLEVBQUUsQ0FBQztFQUViO0VBQ0FDLElBQUksRUFBRTtJQUNGQyxPQUFPLEVBQUUsS0FBSztJQUFFO0lBQ2hCQyxLQUFLLEVBQUUsSUFBSTtJQUFLO0lBQ2hCQyxVQUFVLEVBQUUsZUFBZTtJQUFFO0lBQzdCQyxXQUFXLEVBQUUsSUFBSSxDQUFDO0VBQ3RCLENBQUM7O0VBRUQ7RUFDQUMsYUFBYSxFQUFFLElBQUk7RUFFbkI7QUFDSjtBQUNBO0FBQ0E7RUFDSUMsSUFBSSxXQUFBQSxLQUFDQyxNQUFNLEVBQUU7SUFDVCxJQUFJQSxNQUFNLENBQUNWLE9BQU8sRUFBRSxJQUFJLENBQUNBLE9BQU8sR0FBR1UsTUFBTSxDQUFDVixP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LG9CQUFvQixDQUFDTCxZQUFZLENBQUNFLE9BQU8sR0FBRyxJQUFJO01BQ3BEO0lBQ0osQ0FBQyxDQUFDLE9BQU9DLENBQUMsRUFBRTtNQUNSUixFQUFFLENBQUNTLElBQUksQ0FBQyw4Q0FBOEMsQ0FBQztJQUMzRDtFQUNKLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJRyxZQUFZLFdBQUFBLGFBQUNyQixLQUFLLEVBQUU7SUFDaEIsSUFBSSxDQUFDRixJQUFJLENBQUNFLEtBQUssR0FBR0EsS0FBSztJQUN2QixJQUFJLENBQUNGLElBQUksQ0FBQ0ksV0FBVyxlQUFhRixLQUFPO0lBQ3pDLElBQUksQ0FBQ0YsSUFBSSxDQUFDQyxPQUFPLEdBQUcsSUFBSTtJQUN4QixJQUFJLENBQUNTLGVBQWUsRUFBRTtJQUN0QkMsRUFBRSxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLENBQUM7RUFDdkMsQ0FBQztFQUVEO0FBQ0o7QUFDQTtFQUNJWSxjQUFjLFdBQUFBLGVBQUEsRUFBRztJQUNiLElBQUksQ0FBQ3hCLElBQUksQ0FBQ0UsS0FBSyxHQUFHLElBQUk7SUFDdEIsSUFBSSxDQUFDRixJQUFJLENBQUNJLFdBQVcsR0FBRyxJQUFJO0lBQzVCLElBQUksQ0FBQ0osSUFBSSxDQUFDQyxPQUFPLEdBQUcsS0FBSztJQUN6QixJQUFJLENBQUNTLGVBQWUsRUFBRTtJQUN0QkMsRUFBRSxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLENBQUM7RUFDdkM7QUFDSixDQUFDO0FBRURhLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHOUIsWUFBWSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOacjeWKoeWZqOmFjee9rueuoeeQhuWZqFxyXG4gKiDnu5/kuIDnrqHnkIbmiYDmnInns7vnu5/nmoTmnI3liqHlmajphY3nva5cclxuICovXHJcbnZhciBTZXJ2ZXJDb25maWcgPSB7XHJcbiAgICAvLyDmnI3liqHlmajln7rnoYBVUkxcclxuICAgIGJhc2VVUkw6IFwiaHR0cHM6Ly95b3VyLWFwaS1zZXJ2ZXIuY29tL2FwaVwiLFxyXG4gICAgXHJcbiAgICAvLyDor7fmsYLotoXml7bml7bpl7TvvIjmr6vnp5LvvIlcclxuICAgIHRpbWVvdXQ6IDUwMDAsXHJcbiAgICBcclxuICAgIC8vIOWksei0pemHjeivleasoeaVsFxyXG4gICAgcmV0cnlDb3VudDogMyxcclxuICAgIFxyXG4gICAgLy8g6Lqr5Lu96aqM6K+B6YWN572uXHJcbiAgICBhdXRoOiB7XHJcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsIC8vIOaYr+WQpuWQr+eUqOi6q+S7vemqjOivgVxyXG4gICAgICAgIHRva2VuOiBudWxsLCAgICAvLyDnlKjmiLd0b2tlblxyXG4gICAgICAgIGhlYWRlck5hbWU6IFwiQXV0aG9yaXphdGlvblwiLCAvLyDor7fmsYLlpLTlkI3np7BcclxuICAgICAgICBoZWFkZXJWYWx1ZTogbnVsbCAvLyDor7fmsYLlpLTlgLzvvIzkvovlpoLvvJpcIkJlYXJlciB7dG9rZW59XCJcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8vIOaJgOacieinkuiJsuaVsOaNrueahOacjeWKoeWZqOWcsOWdgO+8iOWPr+mAie+8jOWmguaenOS4um51bGzliJnkvb/nlKhiYXNlVVJM77yJXHJcbiAgICBiYXNlVVJMRm9yQWxsOiBudWxsLFxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluacjeWKoeWZqOmFjee9rlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAtIOmFjee9ruWvueixoVxyXG4gICAgICovXHJcbiAgICBpbml0KGNvbmZpZykge1xyXG4gICAgICAgIGlmIChjb25maWcuYmFzZVVSTCkgdGhpcy5iYXNlVVJMID0gY29uZmlnLmJhc2VVUkw7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5iYXNlVVJMRm9yQWxsICE9PSB1bmRlZmluZWQpIHRoaXMuYmFzZVVSTEZvckFsbCA9IGNvbmZpZy5iYXNlVVJMRm9yQWxsO1xyXG4gICAgICAgIGlmIChjb25maWcudGltZW91dCkgdGhpcy50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5yZXRyeUNvdW50KSB0aGlzLnJldHJ5Q291bnQgPSBjb25maWcucmV0cnlDb3VudDtcclxuICAgICAgICBpZiAoY29uZmlnLmF1dGgpIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoID0geyAuLi50aGlzLmF1dGgsIC4uLmNvbmZpZy5hdXRoIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOabtOaWsOaJgOaciemAgumFjeWZqOeahOmFjee9rlxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUFkYXB0ZXJzKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2MubG9nKFwiW1NlcnZlckNvbmZpZ10g5pyN5Yqh5Zmo6YWN572u5bey5Yid5aeL5YyWXCIsIHtcclxuICAgICAgICAgICAgYmFzZVVSTDogdGhpcy5iYXNlVVJMLFxyXG4gICAgICAgICAgICB0aW1lb3V0OiB0aGlzLnRpbWVvdXQsXHJcbiAgICAgICAgICAgIHJldHJ5Q291bnQ6IHRoaXMucmV0cnlDb3VudCxcclxuICAgICAgICAgICAgYXV0aEVuYWJsZWQ6IHRoaXMuYXV0aC5lbmFibGVkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOaJgOaciemAgumFjeWZqOeahOmFjee9rlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX3VwZGF0ZUFkYXB0ZXJzKCkge1xyXG4gICAgICAgIC8vIOabtOaWsOmBk+WFt+ezu+e7n+mAgumFjeWZqFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IEl0ZW1EYXRhQWRhcHRlciA9IHJlcXVpcmUoXCJJdGVtRGF0YUFkYXB0ZXJcIik7XHJcbiAgICAgICAgICAgIEl0ZW1EYXRhQWRhcHRlci5zZXJ2ZXJDb25maWcuYmFzZVVSTCA9IHRoaXMuYmFzZVVSTDtcclxuICAgICAgICAgICAgSXRlbURhdGFBZGFwdGVyLnNlcnZlckNvbmZpZy50aW1lb3V0ID0gdGhpcy50aW1lb3V0O1xyXG4gICAgICAgICAgICBJdGVtRGF0YUFkYXB0ZXIuc2VydmVyQ29uZmlnLnJldHJ5Q291bnQgPSB0aGlzLnJldHJ5Q291bnQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyDorr7nva7ouqvku73pqozor4HlpLRcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXV0aC5lbmFibGVkICYmIHRoaXMuYXV0aC5oZWFkZXJWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgSXRlbURhdGFBZGFwdGVyLnNlcnZlckNvbmZpZy5oZWFkZXJzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIFt0aGlzLmF1dGguaGVhZGVyTmFtZV06IHRoaXMuYXV0aC5oZWFkZXJWYWx1ZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIEl0ZW1EYXRhQWRhcHRlci5zZXJ2ZXJDb25maWcuaGVhZGVycyA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCJbU2VydmVyQ29uZmlnXSBJdGVtRGF0YUFkYXB0ZXIg5pyq5om+5Yiw77yM6Lez6L+H6YWN572uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyDmm7TmlrDnrYnnuqfns7vnu5/pgILphY3lmahcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBDaGFyYWN0ZXJEYXRhQWRhcHRlciA9IHJlcXVpcmUoXCJDaGFyYWN0ZXJEYXRhQWRhcHRlclwiKTtcclxuICAgICAgICAgICAgQ2hhcmFjdGVyRGF0YUFkYXB0ZXIuc2VydmVyQ29uZmlnLmJhc2VVUkwgPSB0aGlzLmJhc2VVUkw7XHJcbiAgICAgICAgICAgIENoYXJhY3RlckRhdGFBZGFwdGVyLnNlcnZlckNvbmZpZy5iYXNlVVJMRm9yQWxsID0gdGhpcy5iYXNlVVJMRm9yQWxsO1xyXG4gICAgICAgICAgICBDaGFyYWN0ZXJEYXRhQWRhcHRlci5zZXJ2ZXJDb25maWcudGltZW91dCA9IHRoaXMudGltZW91dDtcclxuICAgICAgICAgICAgQ2hhcmFjdGVyRGF0YUFkYXB0ZXIuc2VydmVyQ29uZmlnLnJldHJ5Q291bnQgPSB0aGlzLnJldHJ5Q291bnQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyDorr7nva7ouqvku73pqozor4HlpLRcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXV0aC5lbmFibGVkICYmIHRoaXMuYXV0aC5oZWFkZXJWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgQ2hhcmFjdGVyRGF0YUFkYXB0ZXIuc2VydmVyQ29uZmlnLmhlYWRlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgW3RoaXMuYXV0aC5oZWFkZXJOYW1lXTogdGhpcy5hdXRoLmhlYWRlclZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgQ2hhcmFjdGVyRGF0YUFkYXB0ZXIuc2VydmVyQ29uZmlnLmhlYWRlcnMgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwiW1NlcnZlckNvbmZpZ10gQ2hhcmFjdGVyRGF0YUFkYXB0ZXIg5pyq5om+5Yiw77yM6Lez6L+H6YWN572uXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICog6K6+572u55So5oi3dG9rZW5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0b2tlbiAtIOeUqOaIt3Rva2VuXHJcbiAgICAgKi9cclxuICAgIHNldEF1dGhUb2tlbih0b2tlbikge1xyXG4gICAgICAgIHRoaXMuYXV0aC50b2tlbiA9IHRva2VuO1xyXG4gICAgICAgIHRoaXMuYXV0aC5oZWFkZXJWYWx1ZSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gICAgICAgIHRoaXMuYXV0aC5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl91cGRhdGVBZGFwdGVycygpO1xyXG4gICAgICAgIGNjLmxvZyhcIltTZXJ2ZXJDb25maWddIOeUqOaIt3Rva2Vu5bey6K6+572uXCIpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXpmaTnlKjmiLd0b2tlblxyXG4gICAgICovXHJcbiAgICBjbGVhckF1dGhUb2tlbigpIHtcclxuICAgICAgICB0aGlzLmF1dGgudG9rZW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYXV0aC5oZWFkZXJWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hdXRoLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl91cGRhdGVBZGFwdGVycygpO1xyXG4gICAgICAgIGNjLmxvZyhcIltTZXJ2ZXJDb25maWddIOeUqOaIt3Rva2Vu5bey5riF6ZmkXCIpO1xyXG4gICAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTZXJ2ZXJDb25maWc7XHJcbiJdfQ==