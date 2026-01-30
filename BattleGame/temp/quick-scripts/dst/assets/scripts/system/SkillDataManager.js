
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/system/SkillDataManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb7475gbchPn4qK8sYBF84G', 'SkillDataManager');
// Scripts/system/SkillDataManager.js

"use strict";

/**
 * 技能数据管理器
 * 负责保存和加载角色的技能数据
 * 
 * 注意：现在使用 SkillDataAdapter 作为数据层，支持本地存储和服务器存储的切换
 * 要切换到服务器模式，只需调用：SkillDataAdapter.setStorageMode('server')
 */
var SkillDataAdapter = require("SkillDataAdapter");
var SkillDataManager = {
  // 存储键前缀（仅用于本地存储）
  STORAGE_PREFIX: "character_skills_",
  /**
   * 保存角色技能数据
   * @param {string} characterName - 角色名称（唯一标识）
   * @param {Array} skills - 技能列表 [{ id, name, cooldown, effect, requireRage }, ...]
   * @returns {Promise<boolean>|boolean} 是否保存成功（服务器模式下返回Promise）
   */
  saveCharacterSkills: function saveCharacterSkills(characterName, skills) {
    if (!characterName) {
      cc.warn("[SkillDataManager] 角色名称为空，无法保存技能数据");
      return false;
    }
    var result = SkillDataAdapter.saveCharacterSkills(characterName, skills);

    // 如果是Promise（服务器模式），返回Promise
    if (result instanceof Promise) {
      return result.then(function (success) {
        if (success) {
          cc.log("[SkillDataManager] \u4FDD\u5B58\u89D2\u8272\u6280\u80FD\u6570\u636E: " + characterName, skills);
        }
        return success;
      });
    }

    // 本地模式，直接返回结果
    if (result) {
      cc.log("[SkillDataManager] \u4FDD\u5B58\u89D2\u8272\u6280\u80FD\u6570\u636E: " + characterName, skills);
    }
    return result;
  },
  /**
   * 加载角色技能数据
   * @param {string} characterName - 角色名称
   * @returns {Promise<Array>|Array} 技能列表（服务器模式下返回Promise）
   */
  loadCharacterSkills: function loadCharacterSkills(characterName) {
    if (!characterName) {
      return [];
    }
    var result = SkillDataAdapter.loadCharacterSkills(characterName);

    // 如果是Promise（服务器模式），返回Promise
    if (result instanceof Promise) {
      return result.then(function (skills) {
        if (skills && skills.length > 0) {
          cc.log("[SkillDataManager] \u52A0\u8F7D\u89D2\u8272\u6280\u80FD\u6570\u636E: " + characterName, skills);
        }
        return skills || [];
      });
    }

    // 本地模式，直接返回结果
    if (result && result.length > 0) {
      cc.log("[SkillDataManager] \u52A0\u8F7D\u89D2\u8272\u6280\u80FD\u6570\u636E: " + characterName, result);
    }
    return result || [];
  },
  /**
   * 从角色节点保存技能数据
   * @param {cc.Node} characterNode - 角色节点
   * @returns {Promise<boolean>|boolean} 是否保存成功
   */
  saveSkillsFromNode: function saveSkillsFromNode(characterNode) {
    var SkillComponent = require("SkillComponent");
    var skills = characterNode.getComponent(SkillComponent);
    if (!skills) {
      cc.warn("[SkillDataManager] \u8282\u70B9 " + characterNode.name + " \u6CA1\u6709 SkillComponent \u7EC4\u4EF6");
      return false;
    }

    // 获取角色名称（优先使用原始名称）
    var characterName = characterNode.name;
    if (characterNode._originalCharacterName) {
      characterName = characterNode._originalCharacterName;
    } else if (characterName.startsWith("Display_")) {
      characterName = characterName.replace("Display_", "");
    }

    // 提取技能数据（只保存必要的字段，不保存effect函数）
    var skillsData = skills.skills.map(function (skill) {
      return {
        id: skill.id,
        name: skill.skillName,
        cooldown: skill.cooldown,
        requireRage: skill.requireRage || 0,
        isUltimate: skill.isUltimate || false
      };
    });
    return this.saveCharacterSkills(characterName, skillsData);
  }
};
module.exports = SkillDataManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxTa2lsbERhdGFNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIlNraWxsRGF0YUFkYXB0ZXIiLCJyZXF1aXJlIiwiU2tpbGxEYXRhTWFuYWdlciIsIlNUT1JBR0VfUFJFRklYIiwic2F2ZUNoYXJhY3RlclNraWxscyIsImNoYXJhY3Rlck5hbWUiLCJza2lsbHMiLCJjYyIsIndhcm4iLCJyZXN1bHQiLCJQcm9taXNlIiwidGhlbiIsInN1Y2Nlc3MiLCJsb2ciLCJsb2FkQ2hhcmFjdGVyU2tpbGxzIiwibGVuZ3RoIiwic2F2ZVNraWxsc0Zyb21Ob2RlIiwiY2hhcmFjdGVyTm9kZSIsIlNraWxsQ29tcG9uZW50IiwiZ2V0Q29tcG9uZW50IiwibmFtZSIsIl9vcmlnaW5hbENoYXJhY3Rlck5hbWUiLCJzdGFydHNXaXRoIiwicmVwbGFjZSIsInNraWxsc0RhdGEiLCJtYXAiLCJza2lsbCIsImlkIiwic2tpbGxOYW1lIiwiY29vbGRvd24iLCJyZXF1aXJlUmFnZSIsImlzVWx0aW1hdGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsZ0JBQWdCLEdBQUdDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztBQUVwRCxJQUFJQyxnQkFBZ0IsR0FBRztFQUNuQjtFQUNBQyxjQUFjLEVBQUUsbUJBQW1CO0VBRW5DO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJQyxtQkFBbUIsV0FBQUEsb0JBQUNDLGFBQWEsRUFBRUMsTUFBTSxFQUFFO0lBQ3ZDLElBQUksQ0FBQ0QsYUFBYSxFQUFFO01BQ2hCRSxFQUFFLENBQUNDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQztNQUM3QyxPQUFPLEtBQUs7SUFDaEI7SUFFQSxJQUFNQyxNQUFNLEdBQUdULGdCQUFnQixDQUFDSSxtQkFBbUIsQ0FBQ0MsYUFBYSxFQUFFQyxNQUFNLENB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cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOaKgOiDveaVsOaNrueuoeeQhuWZqFxuICog6LSf6LSj5L+d5a2Y5ZKM5Yqg6L296KeS6Imy55qE5oqA6IO95pWw5o2uXG4gKiBcbiAqIOazqOaEj++8mueOsOWcqOS9v+eUqCBTa2lsbERhdGFBZGFwdGVyIOS9nOS4uuaVsOaNruWxgu+8jOaUr+aMgeacrOWcsOWtmOWCqOWSjOacjeWKoeWZqOWtmOWCqOeahOWIh+aNolxuICog6KaB5YiH5o2i5Yiw5pyN5Yqh5Zmo5qih5byP77yM5Y+q6ZyA6LCD55So77yaU2tpbGxEYXRhQWRhcHRlci5zZXRTdG9yYWdlTW9kZSgnc2VydmVyJylcbiAqL1xuY29uc3QgU2tpbGxEYXRhQWRhcHRlciA9IHJlcXVpcmUoXCJTa2lsbERhdGFBZGFwdGVyXCIpO1xuXG52YXIgU2tpbGxEYXRhTWFuYWdlciA9IHtcbiAgICAvLyDlrZjlgqjplK7liY3nvIDvvIjku4XnlKjkuo7mnKzlnLDlrZjlgqjvvIlcbiAgICBTVE9SQUdFX1BSRUZJWDogXCJjaGFyYWN0ZXJfc2tpbGxzX1wiLFxuXG4gICAgLyoqXG4gICAgICog5L+d5a2Y6KeS6Imy5oqA6IO95pWw5o2uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3Rlck5hbWUgLSDop5LoibLlkI3np7DvvIjllK/kuIDmoIfor4bvvIlcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBza2lsbHMgLSDmioDog73liJfooaggW3sgaWQsIG5hbWUsIGNvb2xkb3duLCBlZmZlY3QsIHJlcXVpcmVSYWdlIH0sIC4uLl1cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPnxib29sZWFufSDmmK/lkKbkv53lrZjmiJDlip/vvIjmnI3liqHlmajmqKHlvI/kuIvov5Tlm55Qcm9taXNl77yJXG4gICAgICovXG4gICAgc2F2ZUNoYXJhY3RlclNraWxscyhjaGFyYWN0ZXJOYW1lLCBza2lsbHMpIHtcbiAgICAgICAgaWYgKCFjaGFyYWN0ZXJOYW1lKSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiW1NraWxsRGF0YU1hbmFnZXJdIOinkuiJsuWQjeensOS4uuepuu+8jOaXoOazleS/neWtmOaKgOiDveaVsOaNrlwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFNraWxsRGF0YUFkYXB0ZXIuc2F2ZUNoYXJhY3RlclNraWxscyhjaGFyYWN0ZXJOYW1lLCBza2lsbHMpO1xuXG4gICAgICAgIC8vIOWmguaenOaYr1Byb21pc2XvvIjmnI3liqHlmajmqKHlvI/vvInvvIzov5Tlm55Qcm9taXNlXG4gICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnRoZW4oc3VjY2VzcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGBbU2tpbGxEYXRhTWFuYWdlcl0g5L+d5a2Y6KeS6Imy5oqA6IO95pWw5o2uOiAke2NoYXJhY3Rlck5hbWV9YCwgc2tpbGxzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOacrOWcsOaooeW8j++8jOebtOaOpei/lOWbnue7k+aenFxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICBjYy5sb2coYFtTa2lsbERhdGFNYW5hZ2VyXSDkv53lrZjop5LoibLmioDog73mlbDmja46ICR7Y2hhcmFjdGVyTmFtZX1gLCBza2lsbHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWKoOi9veinkuiJsuaKgOiDveaVsOaNrlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJOYW1lIC0g6KeS6Imy5ZCN56ewXG4gICAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXk+fEFycmF5fSDmioDog73liJfooajvvIjmnI3liqHlmajmqKHlvI/kuIvov5Tlm55Qcm9taXNl77yJXG4gICAgICovXG4gICAgbG9hZENoYXJhY3RlclNraWxscyhjaGFyYWN0ZXJOYW1lKSB7XG4gICAgICAgIGlmICghY2hhcmFjdGVyTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gU2tpbGxEYXRhQWRhcHRlci5sb2FkQ2hhcmFjdGVyU2tpbGxzKGNoYXJhY3Rlck5hbWUpO1xuXG4gICAgICAgIC8vIOWmguaenOaYr1Byb21pc2XvvIjmnI3liqHlmajmqKHlvI/vvInvvIzov5Tlm55Qcm9taXNlXG4gICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnRoZW4oc2tpbGxzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2tpbGxzICYmIHNraWxscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhgW1NraWxsRGF0YU1hbmFnZXJdIOWKoOi9veinkuiJsuaKgOiDveaVsOaNrjogJHtjaGFyYWN0ZXJOYW1lfWAsIHNraWxscyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBza2lsbHMgfHwgW107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOacrOWcsOaooeW8j++8jOebtOaOpei/lOWbnue7k+aenFxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjYy5sb2coYFtTa2lsbERhdGFNYW5hZ2VyXSDliqDovb3op5LoibLmioDog73mlbDmja46ICR7Y2hhcmFjdGVyTmFtZX1gLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQgfHwgW107XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOS7juinkuiJsuiKgueCueS/neWtmOaKgOiDveaVsOaNrlxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gY2hhcmFjdGVyTm9kZSAtIOinkuiJsuiKgueCuVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fGJvb2xlYW59IOaYr+WQpuS/neWtmOaIkOWKn1xuICAgICAqL1xuICAgIHNhdmVTa2lsbHNGcm9tTm9kZShjaGFyYWN0ZXJOb2RlKSB7XG4gICAgICAgIGNvbnN0IFNraWxsQ29tcG9uZW50ID0gcmVxdWlyZShcIlNraWxsQ29tcG9uZW50XCIpO1xuICAgICAgICBjb25zdCBza2lsbHMgPSBjaGFyYWN0ZXJOb2RlLmdldENvbXBvbmVudChTa2lsbENvbXBvbmVudCk7XG4gICAgICAgIGlmICghc2tpbGxzKSB7XG4gICAgICAgICAgICBjYy53YXJuKGBbU2tpbGxEYXRhTWFuYWdlcl0g6IqC54K5ICR7Y2hhcmFjdGVyTm9kZS5uYW1lfSDmsqHmnIkgU2tpbGxDb21wb25lbnQg57uE5Lu2YCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDojrflj5bop5LoibLlkI3np7DvvIjkvJjlhYjkvb/nlKjljp/lp4vlkI3np7DvvIlcbiAgICAgICAgbGV0IGNoYXJhY3Rlck5hbWUgPSBjaGFyYWN0ZXJOb2RlLm5hbWU7XG4gICAgICAgIGlmIChjaGFyYWN0ZXJOb2RlLl9vcmlnaW5hbENoYXJhY3Rlck5hbWUpIHtcbiAgICAgICAgICAgIGNoYXJhY3Rlck5hbWUgPSBjaGFyYWN0ZXJOb2RlLl9vcmlnaW5hbENoYXJhY3Rlck5hbWU7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyTmFtZS5zdGFydHNXaXRoKFwiRGlzcGxheV9cIikpIHtcbiAgICAgICAgICAgIGNoYXJhY3Rlck5hbWUgPSBjaGFyYWN0ZXJOYW1lLnJlcGxhY2UoXCJEaXNwbGF5X1wiLCBcIlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaPkOWPluaKgOiDveaVsOaNru+8iOWPquS/neWtmOW/heimgeeahOWtl+aute+8jOS4jeS/neWtmGVmZmVjdOWHveaVsO+8iVxuICAgICAgICBjb25zdCBza2lsbHNEYXRhID0gc2tpbGxzLnNraWxscy5tYXAoc2tpbGwgPT4gKHtcbiAgICAgICAgICAgIGlkOiBza2lsbC5pZCxcbiAgICAgICAgICAgIG5hbWU6IHNraWxsLnNraWxsTmFtZSxcbiAgICAgICAgICAgIGNvb2xkb3duOiBza2lsbC5jb29sZG93bixcbiAgICAgICAgICAgIHJlcXVpcmVSYWdlOiBza2lsbC5yZXF1aXJlUmFnZSB8fCAwLFxuICAgICAgICAgICAgaXNVbHRpbWF0ZTogc2tpbGwuaXNVbHRpbWF0ZSB8fCBmYWxzZVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2F2ZUNoYXJhY3RlclNraWxscyhjaGFyYWN0ZXJOYW1lLCBza2lsbHNEYXRhKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNraWxsRGF0YU1hbmFnZXI7XG4iXX0=