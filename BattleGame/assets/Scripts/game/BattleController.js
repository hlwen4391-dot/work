const AnimationState = {
    ATTACK: "atk",      // 攻击动画
    BY_ATK: "byatk",    // 受击动画
    DIE: "die",         // 死亡动画
    SHI_HUA: "shihua",  // 石化动画
    WAIT: "wait",       // 待机动画
}


/**
 * 战斗控制器
 * 负责战斗场景的初始化和战斗系统的驱动
 */
cc.Class({
    extends: cc.Component,

    properties: {
        // 英雄节点数组（从场景中直接引用）
        heroNodes: {
            default: [],
            type: [cc.Node],
            tooltip: "拖入场景中的英雄节点"
        },

        // 怪物节点数组（从场景中直接引用）
        monsterNodes: {
            default: [],
            type: [cc.Node],
            tooltip: "拖入场景中的怪物节点"
        },

        // 或者使用父节点自动获取（二选一）
        heroParent: {
            default: null,
            type: cc.Node,
            tooltip: "英雄父节点，自动获取所有子节点作为英雄"
        },

        monsterParent: {
            default: null,
            type: cc.Node,
            tooltip: "怪物父节点，自动获取所有子节点作为怪物"
        },

        // 是否使用父节点模式
        useParentMode: {
            default: false,
            tooltip: "true: 从父节点获取子节点 | false: 使用heroNodes和monsterNodes"
        }
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

        // 创建战斗系统
        this.battleSystem = new BattleSystem(
            this.heros,
            this.monsters,
            this.logger,
            this.rand
        );

        this.lastTime = Date.now();
    },

    /**
     * 获取场景中的角色节点
     */
    spawnUnits() {
        // 根据模式获取节点
        if (this.useParentMode) {
            // 模式1: 从父节点获取子节点
            this._getUnitsFromParent();
        } else {
            // 模式2: 使用预先配置的节点数组
            this._getUnitsFromArray();
        }

        // 为所有角色初始化战斗数据和动画
        this._initAllUnits();
    },

    /**
     * 从父节点获取所有子节点作为战斗单位
     * @private
     */
    _getUnitsFromParent() {
        // 获取英雄
        if (this.heroParent) {
            this.heros = this.heroParent.children.filter(child => child.active);
            cc.log(`[BattleController] 从 heroParent 获取到 ${this.heros.length} 个英雄`);
        }

        // 获取怪物
        if (this.monsterParent) {
            this.monsters = this.monsterParent.children.filter(child => child.active);
            cc.log(`[BattleController] 从 monsterParent 获取到 ${this.monsters.length} 个怪物`);
        }
    },

    /**
     * 从配置的节点数组获取战斗单位
     * @private
     */
    _getUnitsFromArray() {
        // 获取英雄（过滤掉无效和未激活的节点）
        this.heros = this.heroNodes.filter(node => node && node.isValid && node.active);
        cc.log(`[BattleController] 从 heroNodes 获取到 ${this.heros.length} 个英雄`);

        // 获取怪物
        this.monsters = this.monsterNodes.filter(node => node && node.isValid && node.active);
        cc.log(`[BattleController] 从 monsterNodes 获取到 ${this.monsters.length} 个怪物`);
    },

    /**
     * 初始化所有战斗单位
     * @private
     */
    _initAllUnits() {
        const { SkillConfig } = this;

        // 角色数据配置（根据名称匹配）
        const unitDataConfig = {
            "战士": {
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
            "法师": {
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
            },
            "巨狼": {
                hp: 80,
                attack: 10,
                defense: 5,
                speed: 15,
                skills: [
                    SkillConfig.normalAttack,
                    SkillConfig.rageSkill
                ]
            },
            "Boss": {
                hp: 150,
                attack: 12,
                defense: 8,
                speed: 10,
                skills: [
                    SkillConfig.normalAttack,
                    SkillConfig.warCry
                ]
            }
        };

        // 初始化英雄
        for (let node of this.heros) {
            const data = unitDataConfig[node.name] || this._getDefaultData();
            this.initEntity(node, data, "hero");

            // 设置初始待机动画
            const skeleton = node.getComponent(sp.Skeleton);
            if (skeleton) {
                skeleton.setAnimation(0, AnimationState.WAIT, true);
            }

            cc.log(`[BattleController] 初始化英雄: ${node.name}`);
        }

        // 初始化怪物
        for (let node of this.monsters) {
            const data = unitDataConfig[node.name] || this._getDefaultData();
            this.initEntity(node, data, "monster");

            // 设置初始待机动画
            const skeleton = node.getComponent(sp.Skeleton);
            if (skeleton) {
                skeleton.setAnimation(0, AnimationState.WAIT, true);
            }

            cc.log(`[BattleController] 初始化怪物: ${node.name}`);
        }
    },

    /**
     * 获取默认数据（如果没有配置）
     * @private
     */
    _getDefaultData() {
        return {
            hp: 100,
            attack: 10,
            defense: 5,
            speed: 10,
            crit: 0.1,
            skills: [this.SkillConfig.normalAttack]
        };
    },

    initEntity(node, data, teamName) {
        const stats = node.getComponent("StatsComponent");
        const team = node.getComponent("TeamComponent");
        const skills = node.getComponent("SkillComponent");

        // 检查必需组件是否存在
        if (!stats) {
            cc.error(`❌ [BattleController] 节点 "${node.name}" 缺少 StatsComponent 组件!`);
            cc.error(`   请在节点上添加 StatsComponent 组件`);
            return;
        }
        if (!team) {
            cc.error(`❌ [BattleController] 节点 "${node.name}" 缺少 TeamComponent 组件!`);
            cc.error(`   请在节点上添加 TeamComponent 组件`);
            return;
        }
        if (!skills) {
            cc.error(`❌ [BattleController] 节点 "${node.name}" 缺少 SkillComponent 组件!`);
            cc.error(`   请在节点上添加 SkillComponent 组件`);
            return;
        }

        // 初始化属性 - 优先使用编辑器中设置的值，如果为默认值则使用配置
        // 只有当编辑器值为默认值(100)时，才使用代码配置的值
        if (stats.hp === 100 && data.hp !== undefined) {
            stats.hp = data.hp;
            stats.maxHp = data.hp;
        } else {
            // 使用编辑器中设置的值
            stats.maxHp = stats.hp;
        }
        
        if (stats.attack === 1 && data.attack !== undefined) {
            stats.attack = data.attack;
        }
        if (stats.defense === 1 && data.defense !== undefined) {
            stats.defense = data.defense;
        }
        if (stats.speed === 1 && data.speed !== undefined) {
            stats.speed = data.speed;
        }
        if (stats.crit === 0 && data.crit !== undefined) {
            stats.crit = data.crit;
        }
        if (stats.miss === 0 && data.miss !== undefined) {
            stats.miss = data.miss;
        }
        if (stats.immune === 0 && data.immune !== undefined) {
            stats.immune = data.immune;
        }

        // 初始化技能
        if (data.skills && data.skills.length > 0) {
            skills.init(data.skills);
        }

        // 设置队伍
        team.team = teamName;

        // 初始化血条显示（可能不存在血条组件）
        if (stats.updateHealthBar) {
            stats.updateHealthBar();
        }

        cc.log(`✅ [BattleController] ${node.name} 初始化成功 (${teamName}) - HP:${stats.hp}, ATK:${stats.attack}, DEF:${stats.defense}, SPD:${stats.speed}`);
    },

    update() {
        if (!this.battleSystem || this.battleSystem.finished) return;

        const now = Date.now();
        const dt = (now - this.lastTime) / 1000;
        this.lastTime = now;

        this.battleSystem.update(dt);
    }
});
