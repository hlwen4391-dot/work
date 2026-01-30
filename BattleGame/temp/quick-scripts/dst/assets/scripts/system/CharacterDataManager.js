
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

    // ⭐ 同时保存技能数据（服务器/混合模式下会一起同步）
    try {
      var skillComp = characterNode.getComponent("SkillComponent");
      if (skillComp && skillComp.skills && skillComp.skills.length > 0) {
        data.skills = skillComp.skills.map(function (s) {
          return {
            id: s.id,
            name: s.skillName,
            cooldown: s.cooldown,
            requireRage: s.requireRage || 0,
            isUltimate: s.isUltimate || false
          };
        });
      }
    } catch (e) {
      // 无 SkillComponent 或 require 失败时不影响保存
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxDaGFyYWN0ZXJEYXRhTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJDaGFyYWN0ZXJEYXRhQWRhcHRlciIsInJlcXVpcmUiLCJDaGFyYWN0ZXJEYXRhTWFuYWdlciIsIlNUT1JBR0VfUFJFRklYIiwic2F2ZUNoYXJhY3RlckRhdGEiLCJjaGFyYWN0ZXJOYW1lIiwiZGF0YSIsImNjIiwid2FybiIsInJlc3VsdCIsIlByb21pc2UiLCJ0aGVuIiwic3VjY2VzcyIsImxvZyIsImxvYWRDaGFyYWN0ZXJEYXRhIiwic2F2ZUNoYXJhY3RlckxldmVsIiwiY2hhcmFjdGVyTm9kZSIsIlN0YXRzQ29tcG9uZW50Iiwic3RhdHMiLCJnZXRDb21wb25lbnQiLCJuYW1lIiwiX29yaWdpbmFsQ2hhcmFjdGVyTmFtZSIsInN0YXJ0c1dpdGgiLCJyZXBsYWNlIiwibGV2ZWwiLCJleHAiLCJiYXNlSHAiLCJiYXNlQXR0YWNrIiwiYmFzZURlZmVuc2UiLCJiYXNlU3BlZWQiLCJiYXNlQ3JpdCIsImJhc2VNaXNzIiwic2F2ZVRpbWUiLCJEYXRlIiwibm93Iiwic2tpbGxDb21wIiwic2tpbGxzIiwibGVuZ3RoIiwibWFwIiwicyIsImlkIiwic2tpbGxOYW1lIiwiY29vbGRvd24iLCJyZXF1aXJlUmFnZSIsImlzVWx0aW1hdGUiLCJlIiwibG9hZENoYXJhY3RlckxldmVsIiwiZGVsZXRlQ2hhcmFjdGVyRGF0YSIsImtleSIsInN5cyIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJlcnJvciIsIm1lc3NhZ2UiLCJnZXRBbGxDaGFyYWN0ZXJEYXRhIiwibG9hZEFsbENoYXJhY3RlckRhdGEiLCJPYmplY3QiLCJrZXlzIiwiY2xlYXJBbGxDaGFyYWN0ZXJEYXRhIiwiX3RoaXMiLCJmb3JFYWNoIiwicmVzZXRDaGFyYWN0ZXJMZXZlbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxvQkFBb0IsR0FBR0MsT0FBTyxDQUFDLHNCQUFzQixDQUFDO0FBRTVELElBQUlDLG9CQUFvQixHQUFHO0VBQ3ZCO0VBQ0FDLGNBQWMsRUFBRSxpQkFBaUI7RUFFakM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0lDLGlCQUFpQixXQUFBQSxrQkFBQ0MsYUFBYSxFQUFFQyxJQUFJLEVBQUU7SUFDbkMsSUFBSSxDQUFDRCxhQUFhLEVBQUU7TUFDaEJFLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLHNDQUFzQyxDQUFDO01BQy9DLE9BQU8sS0FBSztJQUNoQjtJQUVBLElBQU1DLE1BQU0sR0FBR1Qsb0JBQW9CLENBQUNJLGlCQUFpQixDQUFDQyxhQUFhLEVBQUVDLElBQUksQ0FBQzs7SUFFMUU7SUFDQSxJQUFJRyxNQUFNLFlBQVlDLE9BQU8sRUFBRTtNQUMzQixPQUFPRCxNQUFNLENBQUNFLElBQUksQ0FBQyxVQUFBQyxPQUFPLEVBQUk7UUFDMUIsSUFBSUEsT0FBTyxFQUFFO1VBQ1RMLEVBQUUsQ0FBQ00sR0FBRyxtRUFBbUNSLGFBQWEsRUFBSUMsSUFBSSxDQUFDO1FBQ25FO1FBQ0EsT0FBT00sT0FBTztNQUNsQixDQUFDLENBQUM7SUFDTjs7SUFFQTtJQUNBLElBQUlILE1BQU0sRUFBRTtNQUNSRixFQUFFLENBQUNNLEdBQUcsbUVBQW1DUixhQUFhLEVBQUlDLElBQUksQ0FBQztJQUNuRTtJQUNBLE9BQU9HLE1BQU07RUFDakIsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSUssaUJBQWlCLFdBQUFBLGtCQUFDVCxhQUFhLEVBQUU7SUFDN0IsSUFBSSxDQUFDQSxhQUFhLEVBQUU7TUFDaEIsT0FBTyxJQUFJO0lBQ2Y7SUFFQSxJQUFNSSxNQUFNLEdBQUdULG9CQUFvQixDQUFDYyxpQkFBaUIsQ0FBQ1QsYUFBYSxDQUFDOztJQUVwRTtJQUNBLElBQUlJLE1BQU0sWUFBWUMsT0FBTyxFQUFFO01BQzNCLE9BQU9ELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLFVBQUFMLElBQUksRUFBSTtRQUN2QixJQUFJQSxJQUFJLEVBQUU7VUFDTkMsRUFBRSxDQUFDTSxHQUFHLG1FQUFtQ1IsYUFBYSxFQUFJQyxJQUFJLENBQUM7UUFDbkU7UUFDQSxPQUFPQSxJQUFJO01BQ2YsQ0FBQyxDQUFDO0lBQ047O0lBRUE7SUFDQSxJQUFJRyxNQUFNLEVBQUU7TUFDUkYsRUFBRSxDQUFDTSxHQUFHLG1FQUFtQ1IsYUFBYSxFQUFJSSxNQUFNLENBQUM7SUFDckU7SUFDQSxPQUFPQSxNQUFNO0VBQ2pCLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0lNLGtCQUFrQixXQUFBQSxtQkFBQ0MsYUFBYSxFQUFFO0lBQzlCLElBQU1DLGNBQWMsR0FBR2hCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztJQUNoRCxJQUFNaUIsS0FBSyxHQUFHRixhQUFhLENBQUNHLFlBQVksQ0FBQ0YsY0FBYyxDQUFDO0lBRXhELElBQUksQ0FBQ0MsS0FBSyxFQUFFO01BQ1JYLEVBQUUsQ0FBQ0MsSUFBSSwwQ0FBOEJRLGFBQWEsQ0FBQ0ksSUFBSSwrQ0FBd0I7TUFDL0UsT0FBTyxLQUFLO0lBQ2hCOztJQUVBO0lBQ0EsSUFBSWYsYUFBYSxHQUFHVyxhQUFhLENBQUNJLElBQUk7SUFDdEMsSUFBSUosYUFBYSxDQUFDSyxzQkFBc0IsRUFBRTtNQUN0Q2hCLGFBQWEsR0FBR1csYUFBYSxDQUFDSyxzQkFBc0I7SUFDeEQsQ0FBQyxNQUFNLElBQUloQixhQUFhLENBQUNpQixVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7TUFDN0NqQixhQUFhLEdBQUdBLGFBQWEsQ0FBQ2tCLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO0lBQ3pEO0lBRUEsSUFBTWpCLElBQUksR0FBRztNQUNUa0IsS0FBSyxFQUFFTixLQUFLLENBQUNNLEtBQUs7TUFDbEJDLEdBQUcsRUFBRVAsS0FBSyxDQUFDTyxHQUFHO01BQ2RDLE1BQU0sRUFBRVIsS0FBSyxDQUFDUSxNQUFNO01BQ3BCQyxVQUFVLEVBQUVULEtBQUssQ0FBQ1MsVUFBVTtNQUM1QkMsV0FBVyxFQUFFVixLQUFLLENBQUNVLFdBQVc7TUFDOUJDLFNBQVMsRUFBRVgsS0FBSyxDQUFDVyxTQUFTO01BQzFCQyxRQUFRLEVBQUVaLEtBQUssQ0FBQ1ksUUFBUTtNQUN4QkMsUUFBUSxFQUFFYixLQUFLLENBQUNhLFFBQVE7TUFDeEJDLFFBQVEsRUFBRUMsSUFBSSxDQUFDQyxHQUFHO0lBQ3RCLENBQUM7O0lBRUQ7SUFDQSxJQUFJO01BQ0EsSUFBTUMsU0FBUyxHQUFHbkIsYUFBYSxDQUFDRyxZQUFZLENBQUMsZ0JBQWdCLENBQUM7TUFDOUQsSUFBSWdCLFNBQVMsSUFBSUEsU0FBUyxDQUFDQyxNQUFNLElBQUlELFNBQVMsQ0FBQ0MsTUFBTSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzlEL0IsSUFBSSxDQUFDOEIsTUFBTSxHQUFHRCxTQUFTLENBQUNDLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLFVBQUFDLENBQUM7VUFBQSxPQUFLO1lBQ3JDQyxFQUFFLEVBQUVELENBQUMsQ0FBQ0MsRUFBRTtZQUNScEIsSUFBSSxFQUFFbUIsQ0FBQyxDQUFDRSxTQUFTO1lBQ2pCQyxRQUFRLEVBQUVILENBQUMsQ0FBQ0csUUFBUTtZQUNwQkMsV0FBVyxFQUFFSixDQUFDLENBQUNJLFdBQVcsSUFBSSxDQUFDO1lBQy9CQyxVQUFVLEVBQUVMLENBQUMsQ0FBQ0ssVUFBVSxJQUFJO1VBQ2hDLENBQUM7UUFBQSxDQUFDLENBQUM7TUFDUDtJQUNKLENBQUMsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7TUFDUjtJQUFBO0lBR0osT0FBTyxJQUFJLENBQUN6QyxpQkFBaUIsQ0FBQ0MsYUFBYSxFQUFFQyxJQUFJLENBQUM7RUFDdEQsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSXdDLGtCQUFrQixXQUFBQSxtQkFBQ3pDLGFBQWEsRUFBRTtJQUM5QixPQUFPLElBQUksQ0FBQ1MsaUJBQWlCLENBQUNULGFBQWEsQ0FBQztFQUNoRCxDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSTBDLG1CQUFtQixXQUFBQSxvQkFBQzFDLGFBQWEsRUFBRTtJQUMvQixJQUFJLENBQUNBLGFBQWEsRUFBRTtNQUNoQixPQUFPLEtBQUs7SUFDaEI7SUFFQSxJQUFJO01BQ0EsSUFBTTJDLEdBQUcsR0FBRyxJQUFJLENBQUM3QyxjQUFjLEdBQUdFLGFBQWE7TUFDL0NFLEVBQUUsQ0FBQzBDLEdBQUcsQ0FBQ0MsWUFBWSxDQUFDQyxVQUFVLENBQUNILEdBQUcsQ0FBQztNQUNuQ3pDLEVBQUUsQ0FBQ00sR0FBRyxtRUFBbUNSLGFBQWEsQ0FBRztNQUN6RCxPQUFPLElBQUk7SUFDZixDQUFDLENBQUMsT0FBT3dDLENBQUMsRUFBRTtNQUNSdEMsRUFBRSxDQUFDNkMsS0FBSyx1REFBaUNQLENBQUMsQ0FBQ1EsT0FBTyxDQUFHO01BQ3JELE9BQU8sS0FBSztJQUNoQjtFQUNKLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtFQUNJQyxtQkFBbUIsV0FBQUEsb0JBQUEsRUFBRztJQUNsQixJQUFNN0MsTUFBTSxHQUFHVCxvQkFBb0IsQ0FBQ3VELG9CQUFvQixFQUFFOztJQUUxRDtJQUNBLElBQUk5QyxNQUFNLFlBQVlDLE9BQU8sRUFBRTtNQUMzQixPQUFPRCxNQUFNLENBQUNFLElBQUksQ0FBQyxVQUFBTCxJQUFJLEVBQUk7UUFDdkIsSUFBSUEsSUFBSSxFQUFFO1VBQ05DLEVBQUUsQ0FBQ00sR0FBRyw2RUFBcUMyQyxNQUFNLENBQUNDLElBQUksQ0FBQ25ELElBQUksQ0FBQyxDQUFDK0IsTUFBTSxFQUFFLEtBQUssQ0FBQztRQUMvRTtRQUNBLE9BQU8vQixJQUFJLElBQUksQ0FBQyxDQUFDO01BQ3JCLENBQUMsQ0FBQztJQUNOOztJQUVBO0lBQ0EsSUFBSUcsTUFBTSxJQUFJK0MsTUFBTSxDQUFDQyxJQUFJLENBQUNoRCxNQUFNLENBQUMsQ0FBQzRCLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDMUM5QixFQUFFLENBQUNNLEdBQUcsNkVBQXFDMkMsTUFBTSxDQUFDQyxJQUFJLENBQUNoRCxNQUFNLENBQUMsQ0FBQzRCLE1BQU0sRUFBRSxLQUFLLENBQUM7SUFDakY7SUFDQSxPQUFPNUIsTUFBTSxJQUFJLENBQUMsQ0FBQztFQUN2QixDQUFDO0VBRUQ7QUFDSjtBQUNBO0VBQ0lpRCxxQkFBcUIsV0FBQUEsc0JBQUEsRUFBRztJQUFBLElBQUFDLEtBQUE7SUFDcEIsSUFBSTtNQUNBLElBQU1GLElBQUksR0FBR0QsTUFBTSxDQUFDQyxJQUFJLENBQUNsRCxFQUFFLENBQUMwQyxHQUFHLENBQUNDLFlBQVksQ0FBQztNQUM3Q08sSUFBSSxDQUFDRyxPQUFPLENBQUMsVUFBQVosR0FBRyxFQUFJO1FBQ2hCLElBQUlBLEdBQUcsQ0FBQzFCLFVBQVUsQ0FBQ3FDLEtBQUksQ0FBQ3hELGNBQWMsQ0FBQyxFQUFFO1VBQ3JDSSxFQUFFLENBQUMwQyxHQUFHLENBQUNDLFlBQVksQ0FBQ0MsVUFBVSxDQUFDSCxHQUFHLENBQUM7UUFDdkM7TUFDSixDQUFDLENBQUM7TUFDRnpDLEVBQUUsQ0FBQ00sR0FBRyxDQUFDLGtDQUFrQyxDQUFDO01BQzFDLE9BQU8sSUFBSTtJQUNmLENBQUMsQ0FBQyxPQUFPZ0MsQ0FBQyxFQUFFO01BQ1J0QyxFQUFFLENBQUM2QyxLQUFLLHVEQUFpQ1AsQ0FBQyxDQUFDUSxPQUFPLENBQUc7TUFDckQsT0FBTyxLQUFLO0lBQ2hCO0VBQ0osQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSVEsbUJBQW1CLFdBQUFBLG9CQUFDeEQsYUFBYSxFQUFFO0lBQy9CLElBQUksQ0FBQ0EsYUFBYSxFQUFFO01BQ2hCLE9BQU8sS0FBSztJQUNoQjs7SUFFQTtJQUNBLE9BQU8sSUFBSSxDQUFDMEMsbUJBQW1CLENBQUMxQyxhQUFhLENBQUM7RUFDbEQ7QUFDSixDQUFDO0FBRUR5RCxNQUFNLENBQUNDLE9BQU8sR0FBRzdELG9CQUFvQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOinkuiJsuaVsOaNrueuoeeQhuWZqFxyXG4gKiDotJ/otKPkv53lrZjlkozliqDovb3op5LoibLnmoTnrYnnuqfjgIHnu4/pqozlgLznrYnmlbDmja5cclxuICogXHJcbiAqIOazqOaEj++8mueOsOWcqOS9v+eUqCBDaGFyYWN0ZXJEYXRhQWRhcHRlciDkvZzkuLrmlbDmja7lsYLvvIzmlK/mjIHmnKzlnLDlrZjlgqjlkozmnI3liqHlmajlrZjlgqjnmoTliIfmjaJcclxuICog6KaB5YiH5o2i5Yiw5pyN5Yqh5Zmo5qih5byP77yM5Y+q6ZyA6LCD55So77yaQ2hhcmFjdGVyRGF0YUFkYXB0ZXIuc2V0U3RvcmFnZU1vZGUoJ3NlcnZlcicpXHJcbiAqL1xyXG5jb25zdCBDaGFyYWN0ZXJEYXRhQWRhcHRlciA9IHJlcXVpcmUoXCJDaGFyYWN0ZXJEYXRhQWRhcHRlclwiKTtcclxuXHJcbnZhciBDaGFyYWN0ZXJEYXRhTWFuYWdlciA9IHtcclxuICAgIC8vIOWtmOWCqOmUruWJjee8gO+8iOS7heeUqOS6juacrOWcsOWtmOWCqO+8iVxyXG4gICAgU1RPUkFHRV9QUkVGSVg6IFwiY2hhcmFjdGVyX2RhdGFfXCIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkv53lrZjop5LoibLmlbDmja5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJOYW1lIC0g6KeS6Imy5ZCN56ew77yI5ZSv5LiA5qCH6K+G77yJXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIOinkuiJsuaVsOaNriB7IGxldmVsLCBleHAsIC4uLiB9XHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPnxib29sZWFufSDmmK/lkKbkv53lrZjmiJDlip/vvIjmnI3liqHlmajmqKHlvI/kuIvov5Tlm55Qcm9taXNl77yJXHJcbiAgICAgKi9cclxuICAgIHNhdmVDaGFyYWN0ZXJEYXRhKGNoYXJhY3Rlck5hbWUsIGRhdGEpIHtcclxuICAgICAgICBpZiAoIWNoYXJhY3Rlck5hbWUpIHtcclxuICAgICAgICAgICAgY2Mud2FybihcIltDaGFyYWN0ZXJEYXRhTWFuYWdlcl0g6KeS6Imy5ZCN56ew5Li656m677yM5peg5rOV5L+d5a2Y5pWw5o2uXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBDaGFyYWN0ZXJEYXRhQWRhcHRlci5zYXZlQ2hhcmFjdGVyRGF0YShjaGFyYWN0ZXJOYW1lLCBkYXRhKTtcclxuXHJcbiAgICAgICAgLy8g5aaC5p6c5pivUHJvbWlzZe+8iOacjeWKoeWZqOaooeW8j++8ie+8jOi/lOWbnlByb21pc2VcclxuICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnRoZW4oc3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlckRhdGFNYW5hZ2VyXSDkv53lrZjop5LoibLmlbDmja46ICR7Y2hhcmFjdGVyTmFtZX1gLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBzdWNjZXNzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOacrOWcsOaooeW8j++8jOebtOaOpei/lOWbnue7k+aenFxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyRGF0YU1hbmFnZXJdIOS/neWtmOinkuiJsuaVsOaNrjogJHtjaGFyYWN0ZXJOYW1lfWAsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi9veinkuiJsuaVsOaNrlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3Rlck5hbWUgLSDop5LoibLlkI3np7BcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdHxudWxsPnxPYmplY3R8bnVsbH0g6KeS6Imy5pWw5o2uIHsgbGV2ZWwsIGV4cCwgLi4uIH0g5oiWIG51bGzvvIjmnI3liqHlmajmqKHlvI/kuIvov5Tlm55Qcm9taXNl77yJXHJcbiAgICAgKi9cclxuICAgIGxvYWRDaGFyYWN0ZXJEYXRhKGNoYXJhY3Rlck5hbWUpIHtcclxuICAgICAgICBpZiAoIWNoYXJhY3Rlck5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBDaGFyYWN0ZXJEYXRhQWRhcHRlci5sb2FkQ2hhcmFjdGVyRGF0YShjaGFyYWN0ZXJOYW1lKTtcclxuXHJcbiAgICAgICAgLy8g5aaC5p6c5pivUHJvbWlzZe+8iOacjeWKoeWZqOaooeW8j++8ie+8jOi/lOWbnlByb21pc2VcclxuICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW0NoYXJhY3RlckRhdGFNYW5hZ2VyXSDliqDovb3op5LoibLmlbDmja46ICR7Y2hhcmFjdGVyTmFtZX1gLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOacrOWcsOaooeW8j++8jOebtOaOpei/lOWbnue7k+aenFxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2MubG9nKGBbQ2hhcmFjdGVyRGF0YU1hbmFnZXJdIOWKoOi9veinkuiJsuaVsOaNrjogJHtjaGFyYWN0ZXJOYW1lfWAsIHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5L+d5a2Y6KeS6Imy55qE562J57qn5ZKM57uP6aqM5YC8XHJcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGNoYXJhY3Rlck5vZGUgLSDop5LoibLoioLngrlcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fGJvb2xlYW59IOaYr+WQpuS/neWtmOaIkOWKn++8iOacjeWKoeWZqOaooeW8j+S4i+i/lOWbnlByb21pc2XvvIlcclxuICAgICAqL1xyXG4gICAgc2F2ZUNoYXJhY3RlckxldmVsKGNoYXJhY3Rlck5vZGUpIHtcclxuICAgICAgICBjb25zdCBTdGF0c0NvbXBvbmVudCA9IHJlcXVpcmUoXCJTdGF0c0NvbXBvbmVudFwiKTtcclxuICAgICAgICBjb25zdCBzdGF0cyA9IGNoYXJhY3Rlck5vZGUuZ2V0Q29tcG9uZW50KFN0YXRzQ29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgaWYgKCFzdGF0cykge1xyXG4gICAgICAgICAgICBjYy53YXJuKGBbQ2hhcmFjdGVyRGF0YU1hbmFnZXJdIOiKgueCuSAke2NoYXJhY3Rlck5vZGUubmFtZX0g5rKh5pyJIFN0YXRzQ29tcG9uZW50IOe7hOS7tmApO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDojrflj5bop5LoibLlkI3np7DvvIjkvJjlhYjkvb/nlKjljp/lp4vlkI3np7DvvIlcclxuICAgICAgICBsZXQgY2hhcmFjdGVyTmFtZSA9IGNoYXJhY3Rlck5vZGUubmFtZTtcclxuICAgICAgICBpZiAoY2hhcmFjdGVyTm9kZS5fb3JpZ2luYWxDaGFyYWN0ZXJOYW1lKSB7XHJcbiAgICAgICAgICAgIGNoYXJhY3Rlck5hbWUgPSBjaGFyYWN0ZXJOb2RlLl9vcmlnaW5hbENoYXJhY3Rlck5hbWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXJOYW1lLnN0YXJ0c1dpdGgoXCJEaXNwbGF5X1wiKSkge1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJOYW1lID0gY2hhcmFjdGVyTmFtZS5yZXBsYWNlKFwiRGlzcGxheV9cIiwgXCJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBsZXZlbDogc3RhdHMubGV2ZWwsXHJcbiAgICAgICAgICAgIGV4cDogc3RhdHMuZXhwLFxyXG4gICAgICAgICAgICBiYXNlSHA6IHN0YXRzLmJhc2VIcCxcclxuICAgICAgICAgICAgYmFzZUF0dGFjazogc3RhdHMuYmFzZUF0dGFjayxcclxuICAgICAgICAgICAgYmFzZURlZmVuc2U6IHN0YXRzLmJhc2VEZWZlbnNlLFxyXG4gICAgICAgICAgICBiYXNlU3BlZWQ6IHN0YXRzLmJhc2VTcGVlZCxcclxuICAgICAgICAgICAgYmFzZUNyaXQ6IHN0YXRzLmJhc2VDcml0LFxyXG4gICAgICAgICAgICBiYXNlTWlzczogc3RhdHMuYmFzZU1pc3MsXHJcbiAgICAgICAgICAgIHNhdmVUaW1lOiBEYXRlLm5vdygpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8g4q2QIOWQjOaXtuS/neWtmOaKgOiDveaVsOaNru+8iOacjeWKoeWZqC/mt7flkIjmqKHlvI/kuIvkvJrkuIDotbflkIzmraXvvIlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBza2lsbENvbXAgPSBjaGFyYWN0ZXJOb2RlLmdldENvbXBvbmVudChcIlNraWxsQ29tcG9uZW50XCIpO1xyXG4gICAgICAgICAgICBpZiAoc2tpbGxDb21wICYmIHNraWxsQ29tcC5za2lsbHMgJiYgc2tpbGxDb21wLnNraWxscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnNraWxscyA9IHNraWxsQ29tcC5za2lsbHMubWFwKHMgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBzLnNraWxsTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBjb29sZG93bjogcy5jb29sZG93bixcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlUmFnZTogcy5yZXF1aXJlUmFnZSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzVWx0aW1hdGU6IHMuaXNVbHRpbWF0ZSB8fCBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyDml6AgU2tpbGxDb21wb25lbnQg5oiWIHJlcXVpcmUg5aSx6LSl5pe25LiN5b2x5ZON5L+d5a2YXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zYXZlQ2hhcmFjdGVyRGF0YShjaGFyYWN0ZXJOYW1lLCBkYXRhKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3op5LoibLnmoTnrYnnuqflkoznu4/pqozlgLxcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJOYW1lIC0g6KeS6Imy5ZCN56ewXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3R8bnVsbD58T2JqZWN0fG51bGx9IHsgbGV2ZWwsIGV4cCwgLi4uIH0g5oiWIG51bGzvvIjmnI3liqHlmajmqKHlvI/kuIvov5Tlm55Qcm9taXNl77yJXHJcbiAgICAgKi9cclxuICAgIGxvYWRDaGFyYWN0ZXJMZXZlbChjaGFyYWN0ZXJOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZENoYXJhY3RlckRhdGEoY2hhcmFjdGVyTmFtZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yig6Zmk6KeS6Imy5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFjdGVyTmFtZSAtIOinkuiJsuWQjeensFxyXG4gICAgICovXHJcbiAgICBkZWxldGVDaGFyYWN0ZXJEYXRhKGNoYXJhY3Rlck5hbWUpIHtcclxuICAgICAgICBpZiAoIWNoYXJhY3Rlck5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5TVE9SQUdFX1BSRUZJWCArIGNoYXJhY3Rlck5hbWU7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJEYXRhTWFuYWdlcl0g5Yig6Zmk6KeS6Imy5pWw5o2uOiAke2NoYXJhY3Rlck5hbWV9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoYFtDaGFyYWN0ZXJEYXRhTWFuYWdlcl0g5Yig6Zmk5aSx6LSlOiAke2UubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmiYDmnInkv53lrZjnmoTop5LoibLmlbDmja5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD58T2JqZWN0fSB7IGNoYXJhY3Rlck5hbWU6IGRhdGEsIC4uLiB977yI5pyN5Yqh5Zmo5qih5byP5LiL6L+U5ZueUHJvbWlzZe+8iVxyXG4gICAgICovXHJcbiAgICBnZXRBbGxDaGFyYWN0ZXJEYXRhKCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IENoYXJhY3RlckRhdGFBZGFwdGVyLmxvYWRBbGxDaGFyYWN0ZXJEYXRhKCk7XHJcblxyXG4gICAgICAgIC8vIOWmguaenOaYr1Byb21pc2XvvIjmnI3liqHlmajmqKHlvI/vvInvvIzov5Tlm55Qcm9taXNlXHJcbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJEYXRhTWFuYWdlcl0g6I635Y+W5omA5pyJ6KeS6Imy5pWw5o2uOmAsIE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCwgXCLkuKrop5LoibJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YSB8fCB7fTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmnKzlnLDmqKHlvI/vvIznm7TmjqXov5Tlm57nu5PmnpxcclxuICAgICAgICBpZiAocmVzdWx0ICYmIE9iamVjdC5rZXlzKHJlc3VsdCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjYy5sb2coYFtDaGFyYWN0ZXJEYXRhTWFuYWdlcl0g6I635Y+W5omA5pyJ6KeS6Imy5pWw5o2uOmAsIE9iamVjdC5rZXlzKHJlc3VsdCkubGVuZ3RoLCBcIuS4quinkuiJslwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCB8fCB7fTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXpmaTmiYDmnInop5LoibLmlbDmja5cclxuICAgICAqL1xyXG4gICAgY2xlYXJBbGxDaGFyYWN0ZXJEYXRhKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjYy5zeXMubG9jYWxTdG9yYWdlKTtcclxuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgodGhpcy5TVE9SQUdFX1BSRUZJWCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIltDaGFyYWN0ZXJEYXRhTWFuYWdlcl0g5bey5riF6Zmk5omA5pyJ6KeS6Imy5pWw5o2uXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKGBbQ2hhcmFjdGVyRGF0YU1hbmFnZXJdIOa4hemZpOWksei0pTogJHtlLm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YeN572u6KeS6Imy55qE562J57qn5ZKM57uP6aqM5YC877yI6YeN572u5Li6Mee6p++8jDDnu4/pqozvvIlcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJOYW1lIC0g6KeS6Imy5ZCN56ewXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g5piv5ZCm6YeN572u5oiQ5YqfXHJcbiAgICAgKi9cclxuICAgIHJlc2V0Q2hhcmFjdGVyTGV2ZWwoY2hhcmFjdGVyTmFtZSkge1xyXG4gICAgICAgIGlmICghY2hhcmFjdGVyTmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDliKDpmaTkv53lrZjnmoTmlbDmja7vvIjkuIvmrKHliqDovb3ml7bkvJrkvb/nlKjpu5jorqTlgLwx57qn77yMMOe7j+mqjO+8iVxyXG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZUNoYXJhY3RlckRhdGEoY2hhcmFjdGVyTmFtZSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENoYXJhY3RlckRhdGFNYW5hZ2VyO1xyXG4iXX0=