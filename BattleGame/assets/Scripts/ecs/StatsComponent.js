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
     */
    updateHealthBar(damage) {
        if (this.healthBar) {
            this.healthBar.updateHealth(this.hp, this.maxHp);
            if (damage && damage > 0) {
                this.healthBar.showDamage(damage);
            }
        }
    }
});
