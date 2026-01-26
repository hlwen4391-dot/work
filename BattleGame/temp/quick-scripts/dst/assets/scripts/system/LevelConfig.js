
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/system/LevelConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '59196xtQ89DT4DX+J0WKZtU', 'LevelConfig');
// Scripts/system/LevelConfig.js

"use strict";

/**
 * 等级配置系统
 * 定义每个等级的属性加成和所需经验值
 */
var LevelConfig = {
  // 最大等级
  MAX_LEVEL: 100,
  // 每个等级所需经验值计算公式：baseExp * (level ^ expMultiplier)
  BASE_EXP: 100,
  // 基础经验值
  EXP_MULTIPLIER: 1.5,
  // 经验值增长倍数
  /**
   * 获取指定等级所需的总经验值
   * @param {number} level - 目标等级
   * @returns {number} 所需的总经验值
   */
  getExpForLevel: function getExpForLevel(level) {
    if (level <= 1) return 0;
    // 使用公式：baseExp * (level - 1) ^ multiplier
    return Math.floor(this.BASE_EXP * Math.pow(level - 1, this.EXP_MULTIPLIER));
  },
  /**
   * 获取从当前等级到下一级所需的经验值
   * @param {number} currentLevel - 当前等级
   * @returns {number} 升级所需经验值
   */
  getExpToNextLevel: function getExpToNextLevel(currentLevel) {
    if (currentLevel >= this.MAX_LEVEL) return 0;
    var currentExp = this.getExpForLevel(currentLevel);
    var nextExp = this.getExpForLevel(currentLevel + 1);
    return nextExp - currentExp;
  },
  /**
   * 根据总经验值计算等级
   * @param {number} totalExp - 总经验值
   * @returns {number} 当前等级
   */
  getLevelFromExp: function getLevelFromExp(totalExp) {
    var level = 1;
    while (level < this.MAX_LEVEL) {
      var expForNextLevel = this.getExpForLevel(level + 1);
      if (totalExp < expForNextLevel) {
        break;
      }
      level++;
    }
    return level;
  },
  /**
   * 获取当前等级的经验进度（0-1）
   * @param {number} totalExp - 总经验值
   * @returns {number} 经验进度（0-1）
   */
  getExpProgress: function getExpProgress(totalExp) {
    var currentLevel = this.getLevelFromExp(totalExp);
    if (currentLevel >= this.MAX_LEVEL) return 1.0;
    var currentLevelExp = this.getExpForLevel(currentLevel);
    var nextLevelExp = this.getExpForLevel(currentLevel + 1);
    var expInCurrentLevel = totalExp - currentLevelExp;
    var expNeeded = nextLevelExp - currentLevelExp;
    return expNeeded > 0 ? expInCurrentLevel / expNeeded : 0;
  },
  /**
   * 获取指定等级的属性加成
   * @param {number} level - 等级
   * @param {string} statType - 属性类型 ('hp', 'attack', 'defense', 'speed', 'crit', 'miss')
   * @returns {number} 属性加成值
   */
  getStatBonus: function getStatBonus(level, statType) {
    if (level <= 1) return 0;

    // 基础属性加成倍数（每级增加的百分比）
    var bonusMultipliers = {
      hp: 0.05,
      // 每级增加5%最大生命值
      attack: 0.03,
      // 每级增加3%攻击力
      defense: 0.03,
      // 每级增加3%防御力
      speed: 0.02,
      // 每级增加2%速度
      crit: 0.01,
      // 每级增加1%暴击率
      miss: 0.01 // 每级增加1%闪避率
    };

    var multiplier = bonusMultipliers[statType] || 0;
    // 返回累计加成（相对于1级的倍数）
    return (level - 1) * multiplier;
  },
  /**
   * 计算指定等级的实际属性值
   * @param {number} baseStat - 基础属性值（1级时的值）
   * @param {number} level - 当前等级
   * @param {string} statType - 属性类型
   * @returns {number} 实际属性值
   */
  calculateStatValue: function calculateStatValue(baseStat, level, statType) {
    if (level <= 1) return baseStat;
    var bonus = this.getStatBonus(level, statType);
    return Math.floor(baseStat * (1 + bonus));
  }
};
module.exports = LevelConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcc3lzdGVtXFxMZXZlbENvbmZpZy5qcyJdLCJuYW1lcyI6WyJMZXZlbENvbmZpZyIsIk1BWF9MRVZFTCIsIkJBU0VfRVhQIiwiRVhQX01VTFRJUExJRVIiLCJnZXRFeHBGb3JMZXZlbCIsImxldmVsIiwiTWF0aCIsImZsb29yIiwicG93IiwiZ2V0RXhwVG9OZXh0TGV2ZWwiLCJjdXJyZW50TGV2ZWwiLCJjdXJyZW50RXhwIiwibmV4dEV4cCIsImdldExldmVsRnJvbUV4cCIsInRvdGFsRXhwIiwiZXhwRm9yTmV4dExldmVsIiwiZ2V0RXhwUHJvZ3Jlc3MiLCJjdXJyZW50TGV2ZWxFeHAiLCJuZXh0TGV2ZWxFeHAiLCJleHBJbkN1cnJlbnRMZXZlbCIsImV4cE5lZWRlZCIsImdldFN0YXRCb251cyIsInN0YXRUeXBlIiwiYm9udXNNdWx0aXBsaWVycyIsImhwIiwiYXR0YWNrIiwiZGVmZW5zZSIsInNwZWVkIiwiY3JpdCIsIm1pc3MiLCJtdWx0aXBsaWVyIiwiY2FsY3VsYXRlU3RhdFZhbHVlIiwiYmFzZVN0YXQiLCJib251cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxXQUFXLEdBQUc7RUFDZDtFQUNBQyxTQUFTLEVBQUUsR0FBRztFQUVkO0VBQ0FDLFFBQVEsRUFBRSxHQUFHO0VBQVM7RUFDdEJDLGNBQWMsRUFBRSxHQUFHO0VBQUc7RUFFdEI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJQyxjQUFjLFdBQUFBLGVBQUNDLEtBQUssRUFBRTtJQUNsQixJQUFJQSxLQUFLLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQztJQUN4QjtJQUNBLE9BQU9DLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQ0wsUUFBUSxHQUFHSSxJQUFJLENBQUNFLEdBQUcsQ0FBQ0gsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUNGLGNBQWMs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ZXNDb250ZW50IjpbIi8qKlxyXG4gKiDnrYnnuqfphY3nva7ns7vnu59cclxuICog5a6a5LmJ5q+P5Liq562J57qn55qE5bGe5oCn5Yqg5oiQ5ZKM5omA6ZyA57uP6aqM5YC8XHJcbiAqL1xyXG52YXIgTGV2ZWxDb25maWcgPSB7XHJcbiAgICAvLyDmnIDlpKfnrYnnuqdcclxuICAgIE1BWF9MRVZFTDogMTAwLFxyXG5cclxuICAgIC8vIOavj+S4quetiee6p+aJgOmcgOe7j+mqjOWAvOiuoeeul+WFrOW8j++8mmJhc2VFeHAgKiAobGV2ZWwgXiBleHBNdWx0aXBsaWVyKVxyXG4gICAgQkFTRV9FWFA6IDEwMCwgICAgICAgIC8vIOWfuuehgOe7j+mqjOWAvFxyXG4gICAgRVhQX01VTFRJUExJRVI6IDEuNSwgIC8vIOe7j+mqjOWAvOWinumVv+WAjeaVsFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5oyH5a6a562J57qn5omA6ZyA55qE5oC757uP6aqM5YC8XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGV2ZWwgLSDnm67moIfnrYnnuqdcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IOaJgOmcgOeahOaAu+e7j+mqjOWAvFxyXG4gICAgICovXHJcbiAgICBnZXRFeHBGb3JMZXZlbChsZXZlbCkge1xyXG4gICAgICAgIGlmIChsZXZlbCA8PSAxKSByZXR1cm4gMDtcclxuICAgICAgICAvLyDkvb/nlKjlhazlvI/vvJpiYXNlRXhwICogKGxldmVsIC0gMSkgXiBtdWx0aXBsaWVyXHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5CQVNFX0VYUCAqIE1hdGgucG93KGxldmVsIC0gMSwgdGhpcy5FWFBfTVVMVElQTElFUikpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS7juW9k+WJjeetiee6p+WIsOS4i+S4gOe6p+aJgOmcgOeahOe7j+mqjOWAvFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGN1cnJlbnRMZXZlbCAtIOW9k+WJjeetiee6p1xyXG4gICAgICogQHJldHVybnMge251bWJlcn0g5Y2H57qn5omA6ZyA57uP6aqM5YC8XHJcbiAgICAgKi9cclxuICAgIGdldEV4cFRvTmV4dExldmVsKGN1cnJlbnRMZXZlbCkge1xyXG4gICAgICAgIGlmIChjdXJyZW50TGV2ZWwgPj0gdGhpcy5NQVhfTEVWRUwpIHJldHVybiAwO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRFeHAgPSB0aGlzLmdldEV4cEZvckxldmVsKGN1cnJlbnRMZXZlbCk7XHJcbiAgICAgICAgY29uc3QgbmV4dEV4cCA9IHRoaXMuZ2V0RXhwRm9yTGV2ZWwoY3VycmVudExldmVsICsgMSk7XHJcbiAgICAgICAgcmV0dXJuIG5leHRFeHAgLSBjdXJyZW50RXhwO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOagueaNruaAu+e7j+mqjOWAvOiuoeeul+etiee6p1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRvdGFsRXhwIC0g5oC757uP6aqM5YC8XHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSDlvZPliY3nrYnnuqdcclxuICAgICAqL1xyXG4gICAgZ2V0TGV2ZWxGcm9tRXhwKHRvdGFsRXhwKSB7XHJcbiAgICAgICAgbGV0IGxldmVsID0gMTtcclxuICAgICAgICB3aGlsZSAobGV2ZWwgPCB0aGlzLk1BWF9MRVZFTCkge1xyXG4gICAgICAgICAgICBjb25zdCBleHBGb3JOZXh0TGV2ZWwgPSB0aGlzLmdldEV4cEZvckxldmVsKGxldmVsICsgMSk7XHJcbiAgICAgICAgICAgIGlmICh0b3RhbEV4cCA8IGV4cEZvck5leHRMZXZlbCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV2ZWwrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxldmVsO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluW9k+WJjeetiee6p+eahOe7j+mqjOi/m+W6pu+8iDAtMe+8iVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRvdGFsRXhwIC0g5oC757uP6aqM5YC8XHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSDnu4/pqozov5vluqbvvIgwLTHvvIlcclxuICAgICAqL1xyXG4gICAgZ2V0RXhwUHJvZ3Jlc3ModG90YWxFeHApIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50TGV2ZWwgPSB0aGlzLmdldExldmVsRnJvbUV4cCh0b3RhbEV4cCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRMZXZlbCA+PSB0aGlzLk1BWF9MRVZFTCkgcmV0dXJuIDEuMDtcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudExldmVsRXhwID0gdGhpcy5nZXRFeHBGb3JMZXZlbChjdXJyZW50TGV2ZWwpO1xyXG4gICAgICAgIGNvbnN0IG5leHRMZXZlbEV4cCA9IHRoaXMuZ2V0RXhwRm9yTGV2ZWwoY3VycmVudExldmVsICsgMSk7XHJcbiAgICAgICAgY29uc3QgZXhwSW5DdXJyZW50TGV2ZWwgPSB0b3RhbEV4cCAtIGN1cnJlbnRMZXZlbEV4cDtcclxuICAgICAgICBjb25zdCBleHBOZWVkZWQgPSBuZXh0TGV2ZWxFeHAgLSBjdXJyZW50TGV2ZWxFeHA7XHJcblxyXG4gICAgICAgIHJldHVybiBleHBOZWVkZWQgPiAwID8gZXhwSW5DdXJyZW50TGV2ZWwgLyBleHBOZWVkZWQgOiAwO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluaMh+Wumuetiee6p+eahOWxnuaAp+WKoOaIkFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxldmVsIC0g562J57qnXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RhdFR5cGUgLSDlsZ7mgKfnsbvlnosgKCdocCcsICdhdHRhY2snLCAnZGVmZW5zZScsICdzcGVlZCcsICdjcml0JywgJ21pc3MnKVxyXG4gICAgICogQHJldHVybnMge251bWJlcn0g5bGe5oCn5Yqg5oiQ5YC8XHJcbiAgICAgKi9cclxuICAgIGdldFN0YXRCb251cyhsZXZlbCwgc3RhdFR5cGUpIHtcclxuICAgICAgICBpZiAobGV2ZWwgPD0gMSkgcmV0dXJuIDA7XHJcblxyXG4gICAgICAgIC8vIOWfuuehgOWxnuaAp+WKoOaIkOWAjeaVsO+8iOavj+e6p+WinuWKoOeahOeZvuWIhuavlO+8iVxyXG4gICAgICAgIGNvbnN0IGJvbnVzTXVsdGlwbGllcnMgPSB7XHJcbiAgICAgICAgICAgIGhwOiAwLjA1LCAgICAgIC8vIOavj+e6p+WinuWKoDUl5pyA5aSn55Sf5ZG95YC8XHJcbiAgICAgICAgICAgIGF0dGFjazogMC4wMywgIC8vIOavj+e6p+WinuWKoDMl5pS75Ye75YqbXHJcbiAgICAgICAgICAgIGRlZmVuc2U6IDAuMDMsIC8vIOavj+e6p+WinuWKoDMl6Ziy5b6h5YqbXHJcbiAgICAgICAgICAgIHNwZWVkOiAwLjAyLCAgIC8vIOavj+e6p+WinuWKoDIl6YCf5bqmXHJcbiAgICAgICAgICAgIGNyaXQ6IDAuMDEsICAgIC8vIOavj+e6p+WinuWKoDEl5pq05Ye7546HXHJcbiAgICAgICAgICAgIG1pc3M6IDAuMDEgICAgIC8vIOavj+e6p+WinuWKoDEl6Zeq6YG/546HXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbXVsdGlwbGllciA9IGJvbnVzTXVsdGlwbGllcnNbc3RhdFR5cGVdIHx8IDA7XHJcbiAgICAgICAgLy8g6L+U5Zue57Sv6K6h5Yqg5oiQ77yI55u45a+55LqOMee6p+eahOWAjeaVsO+8iVxyXG4gICAgICAgIHJldHVybiAobGV2ZWwgLSAxKSAqIG11bHRpcGxpZXI7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6h566X5oyH5a6a562J57qn55qE5a6e6ZmF5bGe5oCn5YC8XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYmFzZVN0YXQgLSDln7rnoYDlsZ7mgKflgLzvvIgx57qn5pe255qE5YC877yJXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGV2ZWwgLSDlvZPliY3nrYnnuqdcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0VHlwZSAtIOWxnuaAp+exu+Wei1xyXG4gICAgICogQHJldHVybnMge251bWJlcn0g5a6e6ZmF5bGe5oCn5YC8XHJcbiAgICAgKi9cclxuICAgIGNhbGN1bGF0ZVN0YXRWYWx1ZShiYXNlU3RhdCwgbGV2ZWwsIHN0YXRUeXBlKSB7XHJcbiAgICAgICAgaWYgKGxldmVsIDw9IDEpIHJldHVybiBiYXNlU3RhdDtcclxuICAgICAgICBjb25zdCBib251cyA9IHRoaXMuZ2V0U3RhdEJvbnVzKGxldmVsLCBzdGF0VHlwZSk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoYmFzZVN0YXQgKiAoMSArIGJvbnVzKSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExldmVsQ29uZmlnO1xyXG4iXX0=