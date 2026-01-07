/**
 * 单位数据配置
 * 定义所有可选择的英雄和怪物数据
 */
const { SkillConfig } = require("SkillConfig");

var UnitDataConfig = {
    // 英雄列表（按照固定顺序排列）
    heros: [
        {
            name: "战士",
            displayName: "战士",
            icon: null, // 头像图片资源（SpriteFrame，需要在编辑器中设置）
            prefab: null, // 人物原型Prefab（需要在编辑器中设置）
            avatarPosition: 0, // 头像固定位置索引（0 = 第一个位置）
            hp: 120,
            attack: 8,
            defense: 10,
            speed: 12,
            crit: 0.15,
            skills: [
                SkillConfig.normalAttack,
                SkillConfig.stunSkill,
                SkillConfig.shieldAllies
            ]
        },
        {
            name: "法师",
            displayName: "法师",
            icon: null, // 头像图片资源（SpriteFrame，需要在编辑器中设置）
            prefab: null, // 人物原型Prefab（需要在编辑器中设置）
            avatarPosition: 1, // 头像固定位置索引（1 = 第二个位置）
            hp: 80,
            attack: 12,
            defense: 4,
            speed: 8,
            crit: 0.1,
            miss: 0.1,
            skills: [
                SkillConfig.normalAttack,
                SkillConfig.fireball
            ]
        }
    ],

    // 怪物列表（按照固定顺序排列）
    monsters: [
        {
            name: "怪物",
            displayName: "怪物",
            icon: null, // 头像图片资源（SpriteFrame，需要在编辑器中设置）
            prefab: null, // 人物原型Prefab（需要在编辑器中设置）
            avatarPosition: 0, // 头像固定位置索引（0 = 第一个位置）
            hp: 80,
            attack: 10,
            defense: 5,
            speed: 15,
            skills: [
                SkillConfig.normalAttack,
                SkillConfig.beastRage
            ]
        },
        {
            name: "Boss",
            displayName: "Boss",
            icon: null, // 头像图片资源（SpriteFrame，需要在编辑器中设置）
            prefab: null, // 人物原型Prefab（需要在编辑器中设置）
            avatarPosition: 1, // 头像固定位置索引（1 = 第二个位置）
            hp: 150,
            attack: 12,
            defense: 8,
            speed: 10,
            skills: [
                SkillConfig.normalAttack,
                SkillConfig.warCry
            ]
        }
    ]
};

module.exports = UnitDataConfig;

