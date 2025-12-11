class StatsComponent {
    constructor(args) {
        this.hp = args.hp || 100;
        this.attack = args.attack || 1;
        this.defense = args.defense || 1;
        this.speed = args.speed || 1;
        this.immune = args.immune || 0;
        this.miss = args.miss || 0;
        this.crit = args.crit || 0;

        this.attackInterval = 1 / this.speed;
    }

    updateAttackInterval() {
        this.attackInterval = 1 / this.speed;
    }

    isDead() {
        return this.hp <= 0;
    }
}

module.exports = StatsComponent;