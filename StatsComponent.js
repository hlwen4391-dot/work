class StatsComponent {
    constructor({ hp = 100, attack = 1, defense = 1, speed = 1 }) {
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
    }

    isDead() {
        return this.hp <= 0;
    }
}

module.exports = StatsComponent;