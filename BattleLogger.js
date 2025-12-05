class BattleLogger {
    constructor() {
        this.logs = [];
    }

    log(msg) {
        this.logs.push(msg);
        console.log(msg);
    }
}

module.exports = BattleLogger;