
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
  },
  /**
   * 获取存储模式（从ItemDataAdapter获取，因为存储模式由适配器管理）
   * @returns {string} 存储模式：'local', 'server', 'hybrid'
   */
  getStorageMode: function getStorageMode() {
    try {
      var ItemDataAdapter = require("ItemDataAdapter");
      return ItemDataAdapter.storageMode || 'local';
    } catch (e) {
      // 如果ItemDataAdapter不存在，默认返回local
      return 'local';
    }
  },
  /**
   * 获取基础URL
   * @returns {string} 服务器基础URL
   */
  getBaseURL: function getBaseURL() {
    return this.baseURL;
  },
  /**
   * 获取身份验证请求头
   * @returns {Object} 请求头对象
   */
  getAuthHeaders: function getAuthHeaders() {
    if (this.auth.enabled && this.auth.headerValue) {
      var _ref;
      return _ref = {}, _ref[this.auth.headerName] = this.auth.headerValue, _ref;
    }
    return {};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxTZXJ2ZXJDb25maWcuanMiXSwibmFtZXMiOlsiU2VydmVyQ29uZmlnIiwiYmFzZVVSTCIsInRpbWVvdXQiLCJyZXRyeUNvdW50IiwiYXV0aCIsImVuYWJsZWQiLCJ0b2tlbiIsImhlYWRlck5hbWUiLCJoZWFkZXJWYWx1ZSIsImJhc2VVUkxGb3JBbGwiLCJpbml0IiwiY29uZmlnIiwidW5kZWZpbmVkIiwiX2V4dGVuZHMiLCJfdXBkYXRlQWRhcHRlcnMiLCJjYyIsImxvZyIsImF1dGhFbmFibGVkIiwiSXRlbURhdGFBZGFwdGVyIiwicmVxdWlyZSIsInNlcnZlckNvbmZpZyIsIl9JdGVtRGF0YUFkYXB0ZXIkc2VydiIsImhlYWRlcnMiLCJlIiwid2FybiIsIkNoYXJhY3RlckRhdGFBZGFwdGVyIiwiX0NoYXJhY3RlckRhdGFBZGFwdGVyIiwic2V0QXV0aFRva2VuIiwiY2xlYXJBdXRoVG9rZW4iLCJnZXRTdG9yYWdlTW9kZSIsInN0b3JhZ2VNb2RlIiwiZ2V0QmFzZVVSTCIsImdldEF1dGhIZWFkZXJzIiwiX3JlZiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsWUFBWSxHQUFHO0VBQ2Y7RUFDQUMsT0FBTyxFQUFFLGlDQUFpQztFQUUxQztFQUNBQyxPQUFPLEVBQUUsSUFBSTtFQUViO0VBQ0FDLFVBQVUsRUFBRSxDQUFDO0VBRWI7RUFDQUMsSUFBSSxFQUFFO0lBQ0ZDLE9BQU8sRUFBRSxLQUFLO0lBQUU7SUFDaEJDLEtBQUssRUFBRSxJQUFJO0lBQUs7SUFDaEJDLFVBQVUsRUFBRSxlQUFlO0lBQUU7SUFDN0JDLFdBQVcsRUFBRSxJQUFJLENBQUM7RUFDdEIsQ0FBQzs7RUFFRDtFQUNBQyxhQUFhLEVBQUUsSUFBSTtFQUVuQjtBQUNKO0FBQ0E7QUFDQTtFQUNJQyxJQUFJLFdBQUFBLEtBQUNDLE1BQU0sRUFB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Q1I7TUFDQSxPQUFPLE9BQU87SUFDbEI7RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSVEsVUFBVSxXQUFBQSxXQUFBLEVBQUc7SUFDVCxPQUFPLElBQUksQ0FBQzlCLE9BQU87RUFDdkIsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0VBQ0krQixjQUFjLFdBQUFBLGVBQUEsRUFBRztJQUNiLElBQUksSUFBSSxDQUFDNUIsSUFBSSxDQUFDQyxPQUFPLElBQUksSUFBSSxDQUFDRCxJQUFJLENBQUNJLFdBQVcsRUFBRTtNQUFBLElBQUF5QixJQUFBO01BQzVDLE9BQUFBLElBQUEsT0FBQUEsSUFBQSxDQUNLLElBQUksQ0FBQzdCLElBQUksQ0FBQ0csVUFBVSxJQUFHLElBQUksQ0FBQ0gsSUFBSSxDQUFDSSxXQUFXLEVBQUF5QixJQUFBO0lBRXJEO0lBQ0EsT0FBTyxDQUFDLENBQUM7RUFDYjtBQUNKLENBQUM7QUFFREMsTUFBTSxDQUFDQyxPQUFPLEdBQUduQyxZQUFZIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5pyN5Yqh5Zmo6YWN572u566h55CG5ZmoXHJcbiAqIOe7n+S4gOeuoeeQhuaJgOacieezu+e7n+eahOacjeWKoeWZqOmFjee9rlxyXG4gKi9cclxudmFyIFNlcnZlckNvbmZpZyA9IHtcclxuICAgIC8vIOacjeWKoeWZqOWfuuehgFVSTFxyXG4gICAgYmFzZVVSTDogXCJodHRwczovL3lvdXItYXBpLXNlcnZlci5jb20vYXBpXCIsXHJcblxyXG4gICAgLy8g6K+35rGC6LaF5pe25pe26Ze077yI5q+r56eS77yJXHJcbiAgICB0aW1lb3V0OiA1MDAwLFxyXG5cclxuICAgIC8vIOWksei0pemHjeivleasoeaVsFxyXG4gICAgcmV0cnlDb3VudDogMyxcclxuXHJcbiAgICAvLyDouqvku73pqozor4HphY3nva5cclxuICAgIGF1dGg6IHtcclxuICAgICAgICBlbmFibGVkOiBmYWxzZSwgLy8g5piv5ZCm5ZCv55So6Lqr5Lu96aqM6K+BXHJcbiAgICAgICAgdG9rZW46IG51bGwsICAgIC8vIOeUqOaIt3Rva2VuXHJcbiAgICAgICAgaGVhZGVyTmFtZTogXCJBdXRob3JpemF0aW9uXCIsIC8vIOivt+axguWktOWQjeensFxyXG4gICAgICAgIGhlYWRlclZhbHVlOiBudWxsIC8vIOivt+axguWktOWAvO+8jOS+i+Wmgu+8mlwiQmVhcmVyIHt0b2tlbn1cIlxyXG4gICAgfSxcclxuXHJcbiAgICAvLyDmiYDmnInop5LoibLmlbDmja7nmoTmnI3liqHlmajlnLDlnYDvvIjlj6/pgInvvIzlpoLmnpzkuLpudWxs5YiZ5L2/55SoYmFzZVVSTO+8iVxyXG4gICAgYmFzZVVSTEZvckFsbDogbnVsbCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluacjeWKoeWZqOmFjee9rlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAtIOmFjee9ruWvueixoVxyXG4gICAgICovXHJcbiAgICBpbml0KGNvbmZpZykge1xyXG4gICAgICAgIGlmIChjb25maWcuYmFzZVVSTCkgdGhpcy5iYXNlVVJMID0gY29uZmlnLmJhc2VVUkw7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5iYXNlVVJMRm9yQWxsICE9PSB1bmRlZmluZWQpIHRoaXMuYmFzZVVSTEZvckFsbCA9IGNvbmZpZy5iYXNlVVJMRm9yQWxsO1xyXG4gICAgICAgIGlmIChjb25maWcudGltZW91dCkgdGhpcy50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5yZXRyeUNvdW50KSB0aGlzLnJldHJ5Q291bnQgPSBjb25maWcucmV0cnlDb3VudDtcclxuICAgICAgICBpZiAoY29uZmlnLmF1dGgpIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoID0geyAuLi50aGlzLmF1dGgsIC4uLmNvbmZpZy5hdXRoIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmm7TmlrDmiYDmnInpgILphY3lmajnmoTphY3nva5cclxuICAgICAgICB0aGlzLl91cGRhdGVBZGFwdGVycygpO1xyXG5cclxuICAgICAgICBjYy5sb2coXCJbU2VydmVyQ29uZmlnXSDmnI3liqHlmajphY3nva7lt7LliJ3lp4vljJZcIiwge1xyXG4gICAgICAgICAgICBiYXNlVVJMOiB0aGlzLmJhc2VVUkwsXHJcbiAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMudGltZW91dCxcclxuICAgICAgICAgICAgcmV0cnlDb3VudDogdGhpcy5yZXRyeUNvdW50LFxyXG4gICAgICAgICAgICBhdXRoRW5hYmxlZDogdGhpcy5hdXRoLmVuYWJsZWRcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDmiYDmnInpgILphY3lmajnmoTphY3nva5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF91cGRhdGVBZGFwdGVycygpIHtcclxuICAgICAgICAvLyDmm7TmlrDpgZPlhbfns7vnu5/pgILphY3lmahcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBJdGVtRGF0YUFkYXB0ZXIgPSByZXF1aXJlKFwiSXRlbURhdGFBZGFwdGVyXCIpO1xyXG4gICAgICAgICAgICBJdGVtRGF0YUFkYXB0ZXIuc2VydmVyQ29uZmlnLmJhc2VVUkwgPSB0aGlzLmJhc2VVUkw7XHJcbiAgICAgICAgICAgIEl0ZW1EYXRhQWRhcHRlci5zZXJ2ZXJDb25maWcudGltZW91dCA9IHRoaXMudGltZW91dDtcclxuICAgICAgICAgICAgSXRlbURhdGFBZGFwdGVyLnNlcnZlckNvbmZpZy5yZXRyeUNvdW50ID0gdGhpcy5yZXRyeUNvdW50O1xyXG5cclxuICAgICAgICAgICAgLy8g6K6+572u6Lqr5Lu96aqM6K+B5aS0XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmF1dGguZW5hYmxlZCAmJiB0aGlzLmF1dGguaGVhZGVyVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIEl0ZW1EYXRhQWRhcHRlci5zZXJ2ZXJDb25maWcuaGVhZGVycyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBbdGhpcy5hdXRoLmhlYWRlck5hbWVdOiB0aGlzLmF1dGguaGVhZGVyVmFsdWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBJdGVtRGF0YUFkYXB0ZXIuc2VydmVyQ29uZmlnLmhlYWRlcnMgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwiW1NlcnZlckNvbmZpZ10gSXRlbURhdGFBZGFwdGVyIOacquaJvuWIsO+8jOi3s+i/h+mFjee9rlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOabtOaWsOetiee6p+ezu+e7n+mAgumFjeWZqFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IENoYXJhY3RlckRhdGFBZGFwdGVyID0gcmVxdWlyZShcIkNoYXJhY3RlckRhdGFBZGFwdGVyXCIpO1xyXG4gICAgICAgICAgICBDaGFyYWN0ZXJEYXRhQWRhcHRlci5zZXJ2ZXJDb25maWcuYmFzZVVSTCA9IHRoaXMuYmFzZVVSTDtcclxuICAgICAgICAgICAgQ2hhcmFjdGVyRGF0YUFkYXB0ZXIuc2VydmVyQ29uZmlnLmJhc2VVUkxGb3JBbGwgPSB0aGlzLmJhc2VVUkxGb3JBbGw7XHJcbiAgICAgICAgICAgIENoYXJhY3RlckRhdGFBZGFwdGVyLnNlcnZlckNvbmZpZy50aW1lb3V0ID0gdGhpcy50aW1lb3V0O1xyXG4gICAgICAgICAgICBDaGFyYWN0ZXJEYXRhQWRhcHRlci5zZXJ2ZXJDb25maWcucmV0cnlDb3VudCA9IHRoaXMucmV0cnlDb3VudDtcclxuXHJcbiAgICAgICAgICAgIC8vIOiuvue9rui6q+S7vemqjOivgeWktFxyXG4gICAgICAgICAgICBpZiAodGhpcy5hdXRoLmVuYWJsZWQgJiYgdGhpcy5hdXRoLmhlYWRlclZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBDaGFyYWN0ZXJEYXRhQWRhcHRlci5zZXJ2ZXJDb25maWcuaGVhZGVycyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBbdGhpcy5hdXRoLmhlYWRlck5hbWVdOiB0aGlzLmF1dGguaGVhZGVyVmFsdWVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBDaGFyYWN0ZXJEYXRhQWRhcHRlci5zZXJ2ZXJDb25maWcuaGVhZGVycyA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oXCJbU2VydmVyQ29uZmlnXSBDaGFyYWN0ZXJEYXRhQWRhcHRlciDmnKrmib7liLDvvIzot7Pov4fphY3nva5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9rueUqOaIt3Rva2VuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdG9rZW4gLSDnlKjmiLd0b2tlblxyXG4gICAgICovXHJcbiAgICBzZXRBdXRoVG9rZW4odG9rZW4pIHtcclxuICAgICAgICB0aGlzLmF1dGgudG9rZW4gPSB0b2tlbjtcclxuICAgICAgICB0aGlzLmF1dGguaGVhZGVyVmFsdWUgPSBgQmVhcmVyICR7dG9rZW59YDsvL+iuvue9ruivt+axguWktOWAvFxyXG4gICAgICAgIHRoaXMuYXV0aC5lbmFibGVkID0gdHJ1ZTsvL+iuvue9ruaYr+WQpuWQr+eUqOi6q+S7vemqjOivgVxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUFkYXB0ZXJzKCk7Ly/mm7TmlrDmiYDmnInpgILphY3lmajnmoTphY3nva5cclxuICAgICAgICBjYy5sb2coXCJbU2VydmVyQ29uZmlnXSDnlKjmiLd0b2tlbuW3suiuvue9rlwiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXpmaTnlKjmiLd0b2tlblxyXG4gICAgICovXHJcbiAgICBjbGVhckF1dGhUb2tlbigpIHtcclxuICAgICAgICB0aGlzLmF1dGgudG9rZW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYXV0aC5oZWFkZXJWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hdXRoLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl91cGRhdGVBZGFwdGVycygpO1xyXG4gICAgICAgIGNjLmxvZyhcIltTZXJ2ZXJDb25maWddIOeUqOaIt3Rva2Vu5bey5riF6ZmkXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluWtmOWCqOaooeW8j++8iOS7jkl0ZW1EYXRhQWRhcHRlcuiOt+WPlu+8jOWboOS4uuWtmOWCqOaooeW8j+eUsemAgumFjeWZqOeuoeeQhu+8iVxyXG4gICAgICogQHJldHVybnMge3N0cmluZ30g5a2Y5YKo5qih5byP77yaJ2xvY2FsJywgJ3NlcnZlcicsICdoeWJyaWQnXHJcbiAgICAgKi9cclxuICAgIGdldFN0b3JhZ2VNb2RlKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IEl0ZW1EYXRhQWRhcHRlciA9IHJlcXVpcmUoXCJJdGVtRGF0YUFkYXB0ZXJcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBJdGVtRGF0YUFkYXB0ZXIuc3RvcmFnZU1vZGUgfHwgJ2xvY2FsJztcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vIOWmguaenEl0ZW1EYXRhQWRhcHRlcuS4jeWtmOWcqO+8jOm7mOiupOi/lOWbnmxvY2FsXHJcbiAgICAgICAgICAgIHJldHVybiAnbG9jYWwnO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bln7rnoYBVUkxcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IOacjeWKoeWZqOWfuuehgFVSTFxyXG4gICAgICovXHJcbiAgICBnZXRCYXNlVVJMKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VVUkw7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6Lqr5Lu96aqM6K+B6K+35rGC5aS0XHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSDor7fmsYLlpLTlr7nosaFcclxuICAgICAqL1xyXG4gICAgZ2V0QXV0aEhlYWRlcnMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0aC5lbmFibGVkICYmIHRoaXMuYXV0aC5oZWFkZXJWYWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgW3RoaXMuYXV0aC5oZWFkZXJOYW1lXTogdGhpcy5hdXRoLmhlYWRlclZhbHVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2VydmVyQ29uZmlnO1xyXG4iXX0=