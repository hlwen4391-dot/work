cc.Class({
    extends: cc.Component,

    properties: {
        hp: 100,
        maxHp: 100, // 最大生命值
        attack: 1,
        defense: 1,
        speed: 1,
        miss: 0,
        crit: 0,
        immune: 0,
        attackInterval: 1,
        rage: 0,      // 当前怒气值
        maxRage: 120,  // 最大怒气值
        level: 1,      // 当前等级
        exp: 0,        // 当前经验值
        baseHp: 100,   // 基础生命值（1级时的值）
        baseAttack: 1,  // 基础攻击力（1级时的值）
        baseDefense: 1, // 基础防御力（1级时的值）
        baseSpeed: 1,   // 基础速度（1级时的值）
        baseCrit: 0,    // 基础暴击率（1级时的值）
        baseMiss: 0     // 基础闪避率（1级时的值）
    },

    onLoad() {
        this.updateAttackInterval();
        // 获取血条组件引用
        this.healthBar = this.node.getComponent("HealthBar");
        // 获取怒气条组件引用
        this.rageBar = this.node.getComponent("RageBar");
        // 获取经验条组件引用
        this.expBar = this.node.getComponent("ExpBar");

        // 检查编辑器中是否设置了等级或经验值（非默认值）
        const editorLevelSet = this.level !== 1;
        const editorExpSet = this.exp !== 0;

        // 如果编辑器中设置了等级或经验值，标记为使用编辑器值
        if (editorLevelSet || editorExpSet) {
            this._useEditorValues = true;
            cc.log(`[StatsComponent] ${this.node.name} 检测到编辑器设置了等级/经验值: Lv.${this.level}, Exp:${this.exp}`);
        } else {
            this._useEditorValues = false;
        }

        // 初始化怒气条显示（确保从0开始）
        this.updateRageBar();
        // 初始化经验条显示（确保从0开始）
        this.updateExpBar();
        // 保存基础属性值（用于等级加成计算）
        this._saveBaseStats();
    },

    updateAttackInterval() {
        this.attackInterval = 1 / this.speed;
    },

    isDead() {
        return this.hp <= 0;
    },

    /**
     * 更新血条显示
     * @param {number} damage - 本次受到的伤害(可选,用于显示伤害数字)
     * @param {string} type - 伤害类型: 'normal'(普通), 'crit'(暴击), 'miss'(闪避), 'heal'(治疗)
     */
    updateHealthBar(damage, type = 'normal') {
        if (this.healthBar) {
            // 获取当前护盾值
            let shieldValue = 0;
            const BuffComponent = require("BuffComponent");
            const allBuffs = this.node.getComponents(BuffComponent);
            cc.log(`[StatsComponent] ${this.node.name} 查找护盾Buff，当前Buff数量: ${allBuffs.length}`);

            for (let buff of allBuffs) {
                cc.log(`[StatsComponent] Buff: name=${buff.buffName}, shieldValue=${buff.shieldValue}`);
            }

            const shieldBuff = allBuffs.find(b => b.buffName === "护盾");
            if (shieldBuff) {
                shieldValue = shieldBuff.shieldValue || 0;
                cc.log(`[StatsComponent] 找到护盾Buff: shieldValue=${shieldValue}, buffName=${shieldBuff.buffName}`);
            } else {
                cc.log(`[StatsComponent] 未找到护盾Buff`);
            }

            this.healthBar.updateHealth(this.hp, this.maxHp, shieldValue);
            // 显示伤害数字（包括闪避MISS）
            if (damage !== undefined) {
                if (type === 'miss') {
                    // 闪避时显示MISS
                    this.healthBar.showDamage(0, 'miss');
                } else if (damage > 0) {
                    // 显示伤害（带类型）
                    this.healthBar.showDamage(damage, type);
                }
            }
        }
    },

    /**
     * 增加怒气值（限制不超过最大值）
     * @param {number} value - 增加的怒气值
     */
    addRage(value) {
        // 限制怒气值不超过最大值
        this.rage = Math.min(this.rage + value, this.maxRage);
        this.updateRageBar();
    },

    /**
     * 消耗怒气值（释放大招时）
     * @param {number} value - 消耗的怒气值
     */
    consumeRage(value) {
        this.rage = Math.max(0, this.rage - value);
        this.updateRageBar();
    },

    /**
     * 检查怒气值是否已满
     * @returns {boolean}
     */
    isRageFull() {
        return this.rage >= this.maxRage;
    },

    /**
     * 更新怒气条显示
     */
    updateRageBar() {
        if (this.rageBar) {
            this.rageBar.updateRage(this.rage, this.maxRage);
        }
    },

    /**
     * 保存基础属性值（1级时的值）
     */
    _saveBaseStats() {
        this.baseHp = this.maxHp;
        this.baseAttack = this.attack;
        this.baseDefense = this.defense;
        this.baseSpeed = this.speed;
        this.baseCrit = this.crit;
        this.baseMiss = this.miss;
    },

    /**
     * 增加经验值
     * @param {number} value - 增加的经验值
     * @returns {boolean} 是否升级
     */
    addExp(value) {
        const LevelConfig = require("LevelConfig");
        const CharacterDataManager = require("CharacterDataManager");
        const oldLevel = this.level;
        const oldExp = this.exp;

        // 增加经验值
        this.exp += value;
        cc.log(`[StatsComponent] ${this.node.name} 经验值变化: ${oldExp} + ${value} = ${this.exp}`);

        // 计算新等级
        const newLevel = LevelConfig.getLevelFromExp(this.exp);
        const leveledUp = newLevel > oldLevel;

        cc.log(`[StatsComponent] ${this.node.name} 等级计算: 旧等级=${oldLevel}, 新等级=${newLevel}, 是否升级=${leveledUp}`);

        if (leveledUp) {
            this.level = newLevel;
            // 应用等级加成
            this._applyLevelBonus();
            cc.log(`[StatsComponent] ✅ ${this.node.name} 升级到 ${this.level} 级！`);
            cc.log(`[StatsComponent] 属性变化 - HP: ${this.maxHp}, ATK: ${this.attack}, DEF: ${this.defense}, SPD: ${this.speed}`);
        } else {
            // 计算距离下一级还需要多少经验
            const currentLevelExp = LevelConfig.getExpForLevel(this.level);
            const nextLevelExp = LevelConfig.getExpForLevel(this.level + 1);
            const expInCurrentLevel = this.exp - currentLevelExp;
            const expNeeded = nextLevelExp - currentLevelExp;
            cc.log(`[StatsComponent] ${this.node.name} 当前经验进度: ${expInCurrentLevel}/${expNeeded} (${((expInCurrentLevel / expNeeded) * 100).toFixed(1)}%)`);
        }

        // 更新经验条显示
        this.updateExpBar();

        // 保存到本地存储（每次经验值变化都保存）
        CharacterDataManager.saveCharacterLevel(this.node);

        return leveledUp;
    },

    /**
     * 应用等级加成到属性
     */
    _applyLevelBonus() {
        const LevelConfig = require("LevelConfig");

        // 根据等级重新计算属性值
        this.maxHp = LevelConfig.calculateStatValue(this.baseHp, this.level, 'hp');
        this.attack = LevelConfig.calculateStatValue(this.baseAttack, this.level, 'attack');
        this.defense = LevelConfig.calculateStatValue(this.baseDefense, this.level, 'defense');
        this.speed = LevelConfig.calculateStatValue(this.baseSpeed, this.level, 'speed');
        this.crit = LevelConfig.calculateStatValue(this.baseCrit, this.level, 'crit');
        this.miss = LevelConfig.calculateStatValue(this.baseMiss, this.level, 'miss');

        // 更新攻击间隔
        this.updateAttackInterval();

        // 如果当前生命值超过新的最大生命值，调整为最大生命值
        if (this.hp > this.maxHp) {
            this.hp = this.maxHp;
        }

        // 更新血条显示
        this.updateHealthBar();
    },

    /**
     * 更新经验条显示
     */
    updateExpBar() {
        if (this.expBar) {
            const LevelConfig = require("LevelConfig");
            const progress = LevelConfig.getExpProgress(this.exp);
            const currentLevel = LevelConfig.getLevelFromExp(this.exp);
            const expToNext = LevelConfig.getExpToNextLevel(currentLevel);
            const currentLevelExp = LevelConfig.getExpForLevel(currentLevel);
            const expInCurrentLevel = this.exp - currentLevelExp;

            this.expBar.updateExp(expInCurrentLevel, expToNext, currentLevel, progress);
        }
    },

    /**
     * 检查是否达到最大等级
     * @returns {boolean}
     */
    isMaxLevel() {
        const LevelConfig = require("LevelConfig");
        return this.level >= LevelConfig.MAX_LEVEL;
    }
});
