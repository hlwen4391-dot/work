"use strict";
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