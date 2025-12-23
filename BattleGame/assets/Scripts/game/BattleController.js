/**
 * 战斗控制器
 * 负责战斗场景的初始化和战斗系统的驱动
 */
cc.Class({
    extends: cc.Component,

    properties: {
        heroPrefab: cc.Prefab,
        monsterPrefab: cc.Prefab,
        heroParent: cc.Node,
        monsterParent: cc.Node,
    },

    onLoad() {
        const BattleSystem = require("BattleSystem");
        const BattleLoggers = require("BattleLoggers");
        const mulberry32 = require("random");
        const { SkillConfig } = require("SkillConfig");

        // 保存技能配置供后续使用
        this.SkillConfig = SkillConfig;

        this.rand = mulberry32(123456);
        this.logger = new BattleLoggers();

        this.heros = [];
        this.monsters = [];

        // 创建单位（这是初始化 ECS 组件的关键步骤）
        this.spawnUnits();

        // 延迟一帧,确保所有组件都初始化完成后再更新血条
        this.scheduleOnce(() => {
            this.refreshAllHealthBars();
        }, 0);

        // 创建战斗系统
        this.battleSystem = new BattleSystem(
            this.heros,
            this.monsters,
            this.logger,
            this.rand
        );

        this.lastTime = Date.now();
    },

    spawnUnits() {
        const { SkillConfig } = this;

        // 英雄数据配置
        const heroData = [
            {
                name: "战士",
                hp: 50,
                attack: 8,
                defense: 6,
                speed: 15,
                crit: 0.1,
                position: cc.v2(-200, 0), // 设置初始位置
                skills: [
                    SkillConfig.normalAttack,
                    SkillConfig.stunSkill,
                    SkillConfig.shieldAllies
                ]
            },
            {
                name: "法师",
                hp: 100,
                attack: 10,
                defense: 6,
                speed: 9,
                crit: 0.1,
                miss: 0.2,
                position: cc.v2(-200, -100), // 设置初始位置
                skills: [
                    SkillConfig.normalAttack,
                    SkillConfig.fireball
                ]
            }
        ];

        for (let i = 0; i < heroData.length; i++) {
            let data = heroData[i];
            let node = cc.instantiate(this.heroPrefab);
            node.parent = this.heroParent;
            // 设置初始位置
            if (data.position) {
                node.setPosition(data.position);
            } else {
                node.setPosition(-200, i * -100);
            }
            this.initEntity(node, data, "hero");
            this.heros.push(node);
        }

        // 怪物数据配置
        const monsterData = [
            {
                name: "巨狼",
                hp: 50,
                attack: 7,
                defense: 7,
                speed: 14,
                position: cc.v2(200, 0), // 设置初始位置
                skills: [
                    SkillConfig.normalAttack,
                    SkillConfig.rageSkill
                ]
            },
            {
                name: "Boss",
                hp: 200,
                attack: 10,
                defense: 20,
                speed: 10,
                position: cc.v2(200, -100), // 设置初始位置
                skills: [
                    SkillConfig.normalAttack,
                    SkillConfig.warCry
                ]
            }
        ];

        for (let i = 0; i < monsterData.length; i++) {
            let data = monsterData[i];
            let node = cc.instantiate(this.monsterPrefab);
            node.parent = this.monsterParent;
            // 设置初始位置
            if (data.position) {
                node.setPosition(data.position);
            } else {
                node.setPosition(200, i * -100);
            }
            this.initEntity(node, data, "monster");
            this.monsters.push(node);
        }
    },

    initEntity(node, data, teamName) {
        const stats = node.getComponent("StatsComponent");
        const team = node.getComponent("TeamComponent");
        const skills = node.getComponent("SkillComponent");

        node.name = data.name;

        // 初始化属性
        stats.hp = data.hp;
        stats.maxHp = data.hp; // 设置最大生命值
        stats.attack = data.attack;
        stats.defense = data.defense;
        stats.speed = data.speed;
        stats.crit = data.crit || 0;
        stats.miss = data.miss || 0;
        stats.immune = data.immune || 0;

        // 初始化技能
        if (data.skills && data.skills.length > 0) {
            skills.init(data.skills);
        }

        // 设置队伍
        team.team = teamName;
    },

    /**
     * 刷新所有单位的血条显示
     */
    refreshAllHealthBars() {
        const allUnits = [...this.heros, ...this.monsters];
        for (let unit of allUnits) {
            const stats = unit.getComponent("StatsComponent");
            if (stats) {
                stats.updateHealthBar();
            }
        }
    },

    update() {
        if (!this.battleSystem || this.battleSystem.finished) return;

        const now = Date.now();
        const dt = (now - this.lastTime) / 1000;
        this.lastTime = now;

        this.battleSystem.update(dt);
    }
});
