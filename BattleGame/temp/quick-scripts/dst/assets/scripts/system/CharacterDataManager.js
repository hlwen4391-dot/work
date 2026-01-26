
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/system/CharacterDataManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '81480VEokxLd5AireppIEHG', 'CharacterDataManager');
// Scripts/system/CharacterDataManager.js

"use strict";

/**
 * 角色数据管理器
 * 负责保存和加载角色的等级、经验值等数据
 * 
 * 注意：现在使用 CharacterDataAdapter 作为数据层，支持本地存储和服务器存储的切换
 * 要切换到服务器模式，只需调用：CharacterDataAdapter.setStorageMode('server')
 */
var CharacterDataAdapter = require("CharacterDataAdapter");
var CharacterDataManager = {
  // 存储键前缀（仅用于本地存储）
  STORAGE_PREFIX: "character_data_",
  /**
   * 保存角色数据
   * @param {string} characterName - 角色名称（唯一标识）
   * @param {Object} data - 角色数据 { level, exp, ... }
   * @returns {Promise<boolean>|boolean} 是否保存成功（服务器模式下返回Promise）
   */
  saveCharacterData: function saveCharacterData(characterName, data) {
    if (!characterName) {
      cc.warn("[CharacterDataManager] 角色名称为空，无法保存数据");
      return false;
    }
    var result = CharacterDataAdapter.saveCharacterData(characterName, data);

    // 如果是Promise（服务器模式），返回Promise
    if (result instanceof Promise) {
      return result.then(function (success) {
        if (success) {
          cc.log("[CharacterDataManager] \u4FDD\u5B58\u89D2\u8272\u6570\u636E: " + characterName, data);
        }
        return success;
      });
    }

    // 本地模式，直接返回结果
    if (result) {
      cc.log("[CharacterDataManager] \u4FDD\u5B58\u89D2\u8272\u6570\u636E: " + characterName, data);
    }
    return result;
  },
  /**
   * 加载角色数据
   * @param {string} characterName - 角色名称
   * @returns {Promise<Object|null>|Object|null} 角色数据 { level, exp, ... } 或 null（服务器模式下返回Promise）
   */
  loadCharacterData: function loadCharacterData(characterName) {
    if (!characterName) {
      return null;
    }
    var result = CharacterDataAdapter.loadCharacterData(characterName);

    // 如果是Promise（服务器模式），返回Promise
    if (result instanceof Promise) {
      return result.then(function (data) {
        if (data) {
          cc.log("[CharacterDataManager] \u52A0\u8F7D\u89D2\u8272\u6570\u636E: " + characterName, data);
        }
        return data;
      });
    }

    // 本地模式，直接返回结果
    if (result) {
      cc.log("[CharacterDataManager] \u52A0\u8F7D\u89D2\u8272\u6570\u636E: " + characterName, result);
    }
    return result;
  },
  /**
   * 保存角色的等级和经验值
   * @param {cc.Node} characterNode - 角色节点
   * @returns {Promise<boolean>|boolean} 是否保存成功（服务器模式下返回Promise）
   */
  saveCharacterLevel: function saveCharacterLevel(characterNode) {
    var StatsComponent = require("StatsComponent");
    var stats = characterNode.getComponent(StatsComponent);
    if (!stats) {
      cc.warn("[CharacterDataManager] \u8282\u70B9 " + characterNode.name + " \u6CA1\u6709 StatsComponent \u7EC4\u4EF6");
      return false;
    }

    // 获取角色名称（优先使用原始名称）
    var characterName = characterNode.name;
    if (characterNode._originalCharacterName) {
      characterName = characterNode._originalCharacterName;
    } else if (characterName.startsWith("Display_")) {
      characterName = characterName.replace("Display_", "");
    }
    var data = {
      level: stats.level,
      exp: stats.exp,
      baseHp: stats.baseHp,
      baseAttack: stats.baseAttack,
      baseDefense: stats.baseDefense,
      baseSpeed: stats.baseSpeed,
      baseCrit: stats.baseCrit,
      baseMiss: stats.baseMiss,
      saveTime: Date.now()
    };
    return this.saveCharacterData(characterName, data);
  },
  /**
   * 加载角色的等级和经验值
   * @param {string} characterName - 角色名称
   * @returns {Promise<Object|null>|Object|null} { level, exp, ... } 或 null（服务器模式下返回Promise）
   */
  loadCharacterLevel: function loadCharacterLevel(characterName) {
    return this.loadCharacterData(characterName);
  },
  /**
   * 删除角色数据
   * @param {string} characterName - 角色名称
   */
  deleteCharacterData: function deleteCharacterData(characterName) {
    if (!characterName) {
      return false;
    }
    try {
      var key = this.STORAGE_PREFIX + characterName;
      cc.sys.localStorage.removeItem(key);
      cc.log("[CharacterDataManager] \u5220\u9664\u89D2\u8272\u6570\u636E: " + characterName);
      return true;
    } catch (e) {
      cc.error("[CharacterDataManager] \u5220\u9664\u5931\u8D25: " + e.message);
      return false;
    }
  },
  /**
   * 获取所有保存的角色数据
   * @returns {Promise<Object>|Object} { characterName: data, ... }（服务器模式下返回Promise）
   */
  getAllCharacterData: function getAllCharacterData() {
    var result = CharacterDataAdapter.loadAllCharacterData();

    // 如果是Promise（服务器模式），返回Promise
    if (result instanceof Promise) {
      return result.then(function (data) {
        if (data) {
          cc.log("[CharacterDataManager] \u83B7\u53D6\u6240\u6709\u89D2\u8272\u6570\u636E:", Object.keys(data).length, "个角色");
        }
        return data || {};
      });
    }

    // 本地模式，直接返回结果
    if (result && Object.keys(result).length > 0) {
      cc.log("[CharacterDataManager] \u83B7\u53D6\u6240\u6709\u89D2\u8272\u6570\u636E:", Object.keys(result).length, "个角色");
    }
    return result || {};
  },
  /**
   * 清除所有角色数据
   */
  clearAllCharacterData: function clearAllCharacterData() {
    var _this = this;
    try {
      var keys = Object.keys(cc.sys.localStorage);
      keys.forEach(function (key) {
        if (key.startsWith(_this.STORAGE_PREFIX)) {
          cc.sys.localStorage.removeItem(key);
        }
      });
      cc.log("[CharacterDataManager] 已清除所有角色数据");
      return true;
    } catch (e) {
      cc.error("[CharacterDataManager] \u6E05\u9664\u5931\u8D25: " + e.message);
      return false;
    }
  },
  /**
   * 重置角色的等级和经验值（重置为1级，0经验）
   * @param {string} characterName - 角色名称
   * @returns {boolean} 是否重置成功
   */
  resetCharacterLevel: function resetCharacterLevel(characterName) {
    if (!characterName) {
      return false;
    }

    // 删除保存的数据（下次加载时会使用默认值1级，0经验）
    return this.deleteCharacterData(characterName);
  }
};
module.exports = CharacterDataManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxDaGFyYWN0ZXJEYXRhTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJDaGFyYWN0ZXJEYXRhQWRhcHRlciIsInJlcXVpcmUiLCJDaGFyYWN0ZXJEYXRhTWFuYWdlciIsIlNUT1JBR0VfUFJFRklYIiwic2F2ZUNoYXJhY3RlckRhdGEiLCJjaGFyYWN0ZXJOYW1lIiwiZGF0YSIsImNjIiwid2FybiIsInJlc3VsdCIsIlByb21pc2UiLCJ0aGVuIiwic3VjY2VzcyIsImxvZyIsImxvYWRDaGFyYWN0ZXJEYXRhIiwic2F2ZUNoYXJhY3RlckxldmVsIiwiY2hhcmFjdGVyTm9kZSIsIlN0YXRzQ29tcG9uZW50Iiwic3RhdHMiLCJnZXRDb21wb25lbnQiLCJuYW1lIiwiX29yaWdpbmFsQ2hhcmFjdGVyTmFtZSIsInN0YXJ0c1dpdGgiLCJyZXBsYWNlIiwibGV2ZWwiLCJleHAiLCJiYXNlSHAiLCJiYXNlQXR0YWNrIiwiYmFzZURlZmVuc2UiLCJiYXNlU3BlZWQiLCJiYXNlQ3JpdCIsImJhc2VNaXNzIiwic2F2ZVRpbWUiLCJEYXRlIiwibm93IiwibG9hZENoYXJhY3RlckxldmVsIiwiZGVsZXRlQ2hhcmFjdGVyRGF0YSIsImtleSIsInN5cyIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJlIiwiZXJyb3IiLCJtZXNzYWdlIiwiZ2V0QWxsQ2hhcmFjdGVyRGF0YSIsImxvYWRBbGxDaGFyYWN0ZXJEYXRhIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImNsZWFyQWxsQ2hhcmFjdGVyRGF0YSIsIl90aGlzIiwiZm9yRWFjaCIsInJlc2V0Q2hhcmFjdGVyTGV2ZWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsb0JBQW9CLEdBQUdDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQztBQUU1RCxJQUFJQyxvQkFB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RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJUyxtQkFBbUIsV0FBQUEsb0JBQUMvQyxhQUFhLEVBQUU7SUFDL0IsSUFBSSxDQUFDQSxhQUFhLEVBQUU7TUFDaEIsT0FBTyxLQUFLO0lBQ2hCOztJQUVBO0lBQ0EsT0FBTyxJQUFJLENBQUMrQixtQkFBbUIsQ0FBQy9CLGFBQWEsQ0FBQztFQUNsRDtBQUNKLENBQUM7QUFFRGdELE1BQU0sQ0FBQ0MsT0FBTyxHQUFHcEQsb0JBQW9CIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog6KeS6Imy5pWw5o2u566h55CG5ZmoXHJcbiAqIOi0n+i0o+S/neWtmOWSjOWKoOi9veinkuiJsueahOetiee6p+OAgee7j+mqjOWAvOetieaVsOaNrlxyXG4gKiBcclxuICog5rOo5oSP77ya546w5Zyo5L2/55SoIENoYXJhY3RlckRhdGFBZGFwdGVyIOS9nOS4uuaVsOaNruWxgu+8jOaUr+aMgeacrOWcsOWtmOWCqOWSjOacjeWKoeWZqOWtmOWCqOeahOWIh+aNolxyXG4gKiDopoHliIfmjaLliLDmnI3liqHlmajmqKHlvI/vvIzlj6rpnIDosIPnlKjvvJpDaGFyYWN0ZXJEYXRhQWRhcHRlci5zZXRTdG9yYWdlTW9kZSgnc2VydmVyJylcclxuICovXHJcbmNvbnN0IENoYXJhY3RlckRhdGFBZGFwdGVyID0gcmVxdWlyZShcIkNoYXJhY3RlckRhdGFBZGFwdGVyXCIpO1xyXG5cclxudmFyIENoYXJhY3RlckRhdGFNYW5hZ2VyID0ge1xyXG4gICAgLy8g5a2Y5YKo6ZSu5YmN57yA77yI5LuF55So5LqO5pys5Zyw5a2Y5YKo77yJXHJcbiAgICBTVE9SQUdFX1BSRUZJWDogXCJjaGFyYWN0ZXJfZGF0YV9cIixcclxuXHJcbiAgICAvKipcclxuICAgICAqIOS/neWtmOinkuiJsuaVsOaNrlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3Rlck5hbWUgLSDop5LoibLlkI3np7DvvIjllK/kuIDmoIfor4bvvIlcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0g6KeS6Imy5pWw5o2uIHsgbGV2ZWwsIGV4cCwgLi4uIH1cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fGJvb2xlYW59IOaYr+WQpuS/neWtmOaIkOWKn++8iOacjeWKoeWZqOaooeW8j+S4i+i/lOWbnlByb21pc2XvvIlcclxuICAgICAqL1xyXG4gICAgc2F2ZUNoYXJhY3RlckRhdGEoY2hhcmFjdGVyTmFtZSwgZGF0YSkge1xyXG4gICAgICAgIGlmICghY2hhcmFjdGVyTmFtZSkge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwiW0NoYXJhY3RlckRhdGFNYW5hZ2VyXSDop5LoibLlkI3np7DkuLrnqbrvvIzml6Dms5Xkv53lrZjmlbDmja5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IENoYXJhY3RlckRhdGFBZGFwdGVyLnNhdmVDaGFyYWN0ZXJEYXRhKGNoYXJhY3Rlck5hbWUsIGRhdGEpO1xyXG5cclxuICAgICAgICAvLyDlpoLmnpzmmK9Qcm9taXNl77yI5pyN5Yqh5Zmo5qih5byP77yJ77yM6L+U5ZueUHJvbWlzZVxyXG4gICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQudGhlbihzdWNjZXNzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyRGF0YU1hbmFnZXJdIOS/neWtmOinkuiJsuaVsOaNrjogJHtjaGFyYWN0ZXJOYW1lfWAsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5pys5Zyw5qih5byP77yM55u05o6l6L+U5Zue57uT5p6cXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJEYXRhTWFuYWdlcl0g5L+d5a2Y6KeS6Imy5pWw5o2uOiAke2NoYXJhY3Rlck5hbWV9YCwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6L296KeS6Imy5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFjdGVyTmFtZSAtIOinkuiJsuWQjeensFxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8T2JqZWN0fG51bGw+fE9iamVjdHxudWxsfSDop5LoibLmlbDmja4geyBsZXZlbCwgZXhwLCAuLi4gfSDmiJYgbnVsbO+8iOacjeWKoeWZqOaooeW8j+S4i+i/lOWbnlByb21pc2XvvIlcclxuICAgICAqL1xyXG4gICAgbG9hZENoYXJhY3RlckRhdGEoY2hhcmFjdGVyTmFtZSkge1xyXG4gICAgICAgIGlmICghY2hhcmFjdGVyTmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IENoYXJhY3RlckRhdGFBZGFwdGVyLmxvYWRDaGFyYWN0ZXJEYXRhKGNoYXJhY3Rlck5hbWUpO1xyXG5cclxuICAgICAgICAvLyDlpoLmnpzmmK9Qcm9taXNl77yI5pyN5Yqh5Zmo5qih5byP77yJ77yM6L+U5ZueUHJvbWlzZVxyXG4gICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyRGF0YU1hbmFnZXJdIOWKoOi9veinkuiJsuaVsOaNrjogJHtjaGFyYWN0ZXJOYW1lfWAsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5pys5Zyw5qih5byP77yM55u05o6l6L+U5Zue57uT5p6cXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJEYXRhTWFuYWdlcl0g5Yqg6L296KeS6Imy5pWw5o2uOiAke2NoYXJhY3Rlck5hbWV9YCwgcmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkv53lrZjop5LoibLnmoTnrYnnuqflkoznu4/pqozlgLxcclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gY2hhcmFjdGVyTm9kZSAtIOinkuiJsuiKgueCuVxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj58Ym9vbGVhbn0g5piv5ZCm5L+d5a2Y5oiQ5Yqf77yI5pyN5Yqh5Zmo5qih5byP5LiL6L+U5ZueUHJvbWlzZe+8iVxyXG4gICAgICovXHJcbiAgICBzYXZlQ2hhcmFjdGVyTGV2ZWwoY2hhcmFjdGVyTm9kZSkge1xyXG4gICAgICAgIGNvbnN0IFN0YXRzQ29tcG9uZW50ID0gcmVxdWlyZShcIlN0YXRzQ29tcG9uZW50XCIpO1xyXG4gICAgICAgIGNvbnN0IHN0YXRzID0gY2hhcmFjdGVyTm9kZS5nZXRDb21wb25lbnQoU3RhdHNDb21wb25lbnQpO1xyXG5cclxuICAgICAgICBpZiAoIXN0YXRzKSB7XHJcbiAgICAgICAgICAgIGNjLndhcm4oYFtDaGFyYWN0ZXJEYXRhTWFuYWdlcl0g6IqC54K5ICR7Y2hhcmFjdGVyTm9kZS5uYW1lfSDmsqHmnIkgU3RhdHNDb21wb25lbnQg57uE5Lu2YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOiOt+WPluinkuiJsuWQjeensO+8iOS8mOWFiOS9v+eUqOWOn+Wni+WQjeensO+8iVxyXG4gICAgICAgIGxldCBjaGFyYWN0ZXJOYW1lID0gY2hhcmFjdGVyTm9kZS5uYW1lO1xyXG4gICAgICAgIGlmIChjaGFyYWN0ZXJOb2RlLl9vcmlnaW5hbENoYXJhY3Rlck5hbWUpIHtcclxuICAgICAgICAgICAgY2hhcmFjdGVyTmFtZSA9IGNoYXJhY3Rlck5vZGUuX29yaWdpbmFsQ2hhcmFjdGVyTmFtZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3Rlck5hbWUuc3RhcnRzV2l0aChcIkRpc3BsYXlfXCIpKSB7XHJcbiAgICAgICAgICAgIGNoYXJhY3Rlck5hbWUgPSBjaGFyYWN0ZXJOYW1lLnJlcGxhY2UoXCJEaXNwbGF5X1wiLCBcIlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGxldmVsOiBzdGF0cy5sZXZlbCxcclxuICAgICAgICAgICAgZXhwOiBzdGF0cy5leHAsXHJcbiAgICAgICAgICAgIGJhc2VIcDogc3RhdHMuYmFzZUhwLFxyXG4gICAgICAgICAgICBiYXNlQXR0YWNrOiBzdGF0cy5iYXNlQXR0YWNrLFxyXG4gICAgICAgICAgICBiYXNlRGVmZW5zZTogc3RhdHMuYmFzZURlZmVuc2UsXHJcbiAgICAgICAgICAgIGJhc2VTcGVlZDogc3RhdHMuYmFzZVNwZWVkLFxyXG4gICAgICAgICAgICBiYXNlQ3JpdDogc3RhdHMuYmFzZUNyaXQsXHJcbiAgICAgICAgICAgIGJhc2VNaXNzOiBzdGF0cy5iYXNlTWlzcyxcclxuICAgICAgICAgICAgc2F2ZVRpbWU6IERhdGUubm93KClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zYXZlQ2hhcmFjdGVyRGF0YShjaGFyYWN0ZXJOYW1lLCBkYXRhKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3op5LoibLnmoTnrYnnuqflkoznu4/pqozlgLxcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJOYW1lIC0g6KeS6Imy5ZCN56ewXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3R8bnVsbD58T2JqZWN0fG51bGx9IHsgbGV2ZWwsIGV4cCwgLi4uIH0g5oiWIG51bGzvvIjmnI3liqHlmajmqKHlvI/kuIvov5Tlm55Qcm9taXNl77yJXHJcbiAgICAgKi9cclxuICAgIGxvYWRDaGFyYWN0ZXJMZXZlbChjaGFyYWN0ZXJOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZENoYXJhY3RlckRhdGEoY2hhcmFjdGVyTmFtZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yig6Zmk6KeS6Imy5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFjdGVyTmFtZSAtIOinkuiJsuWQjeensFxyXG4gICAgICovXHJcbiAgICBkZWxldGVDaGFyYWN0ZXJEYXRhKGNoYXJhY3Rlck5hbWUpIHtcclxuICAgICAgICBpZiAoIWNoYXJhY3Rlck5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5TVE9SQUdFX1BSRUZJWCArIGNoYXJhY3Rlck5hbWU7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJEYXRhTWFuYWdlcl0g5Yig6Zmk6KeS6Imy5pWw5o2uOiAke2NoYXJhY3Rlck5hbWV9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoYFtDaGFyYWN0ZXJEYXRhTWFuYWdlcl0g5Yig6Zmk5aSx6LSlOiAke2UubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmiYDmnInkv53lrZjnmoTop5LoibLmlbDmja5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD58T2JqZWN0fSB7IGNoYXJhY3Rlck5hbWU6IGRhdGEsIC4uLiB977yI5pyN5Yqh5Zmo5qih5byP5LiL6L+U5ZueUHJvbWlzZe+8iVxyXG4gICAgICovXHJcbiAgICBnZXRBbGxDaGFyYWN0ZXJEYXRhKCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IENoYXJhY3RlckRhdGFBZGFwdGVyLmxvYWRBbGxDaGFyYWN0ZXJEYXRhKCk7XHJcblxyXG4gICAgICAgIC8vIOWmguaenOaYr1Byb21pc2XvvIjmnI3liqHlmajmqKHlvI/vvInvvIzov5Tlm55Qcm9taXNlXHJcbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJEYXRhTWFuYWdlcl0g6I635Y+W5omA5pyJ6KeS6Imy5pWw5o2uOmAsIE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCwgXCLkuKrop5LoibJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YSB8fCB7fTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmnKzlnLDmqKHlvI/vvIznm7TmjqXov5Tlm57nu5PmnpxcclxuICAgICAgICBpZiAocmVzdWx0ICYmIE9iamVjdC5rZXlzKHJlc3VsdCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJEYXRhTWFuYWdlcl0g6I635Y+W5omA5pyJ6KeS6Imy5pWw5o2uOmAsIE9iamVjdC5rZXlzKHJlc3VsdCkubGVuZ3RoLCBcIuS4quinkuiJslwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCB8fCB7fTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXpmaTmiYDmnInop5LoibLmlbDmja5cclxuICAgICAqL1xyXG4gICAgY2xlYXJBbGxDaGFyYWN0ZXJEYXRhKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjYy5zeXMubG9jYWxTdG9yYWdlKTtcclxuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgodGhpcy5TVE9SQUdFX1BSRUZJWCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIltDaGFyYWN0ZXJEYXRhTWFuYWdlcl0g5bey5riF6Zmk5omA5pyJ6KeS6Imy5pWw5o2uXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKGBbQ2hhcmFjdGVyRGF0YU1hbmFnZXJdIOa4hemZpOWksei0pTogJHtlLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YeN572u6KeS6Imy55qE562J57qn5ZKM57uP6aqM5YC877yI6YeN572u5Li6Mee6p++8jDDnu4/pqozvvIlcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJOYW1lIC0g6KeS6Imy5ZCN56ewXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g5piv5ZCm6YeN572u5oiQ5YqfXHJcbiAgICAgKi9cclxuICAgIHJlc2V0Q2hhcmFjdGVyTGV2ZWwoY2hhcmFjdGVyTmFtZSkge1xyXG4gICAgICAgIGlmICghY2hhcmFjdGVyTmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDliKDpmaTkv53lrZjnmoTmlbDmja7vvIjkuIvmrKHliqDovb3ml7bkvJrkvb/nlKjpu5jorqTlgLwx57qn77yMMOe7j+mqjO+8iVxyXG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZUNoYXJhY3RlckRhdGEoY2hhcmFjdGVyTmFtZSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlckRhdGFNYW5hZ2VyO1xyXG4iXX0=