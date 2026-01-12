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
            speed: 18,  // 提高速度以加快战斗节奏（原12）
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
            speed: 12,  // 提高速度以加快战斗节奏（原8）
            crit: 0.1,
            miss: 0.1,
            skills: [
                SkillConfig.normalAttack,
                SkillConfig.fireball
            ]
        },
        {
            name: "修女",
            displayName: "修女",
            icon: null, // 头像图片资源（SpriteFrame，需要在编辑器中设置）
            prefab: null, // 人物原型Prefab（需要在编辑器中设置）
            avatarPosition: 2, // 头像固定位置索引（2 = 第三个位置）
            hp: 100,
            attack: 5,
            defense: 6,
            speed: 15,  // 提高速度以加快战斗节奏（原10）
            crit: 0.05,
            miss: 0.05,
            skills: [
                SkillConfig.normalAttack,
                SkillConfig.healAllies
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
            speed: 22,  // 提高速度以加快战斗节奏（原15）
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
            speed: 15,  // 提高速度以加快战斗节奏（原10）
            skills: [
                SkillConfig.normalAttack,
                SkillConfig.warCry
            ]
        },
        {
            name: "大祭司",
            displayName: "大祭司",
            icon: null,
            prefab: null,
            avatarPosition: 2,
            hp: 150,
            attack: 10,
            defense: 8,
            speed: 15,  // 提高速度以加快战斗节奏（原10）
            skills: [
                SkillConfig.normalAttack,
                SkillConfig.cleanseAllies
            ]
        }

    ]
};

module.exports = UnitDataConfig;

