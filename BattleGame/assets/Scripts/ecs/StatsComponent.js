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
        attackInterval: 1
    },

    onLoad() {
        this.updateAttackInterval();
        // 获取血条组件引用
        this.healthBar = this.node.getComponent("HealthBar");
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
            this.healthBar.updateHealth(this.hp, this.maxHp);
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
    }
});
