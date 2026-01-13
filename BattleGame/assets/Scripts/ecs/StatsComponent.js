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
        maxRage: 120  // 最大怒气值
    },

    onLoad() {
        this.updateAttackInterval();
        // 获取血条组件引用
        this.healthBar = this.node.getComponent("HealthBar");
        // 获取怒气条组件引用
        this.rageBar = this.node.getComponent("RageBar");
        // 初始化怒气条显示（确保从0开始）
        this.updateRageBar();
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
    }
});
