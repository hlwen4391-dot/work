var BattleLoggers = cc.Class({
    name: "BattleLoggers",

    properties: {
        logs: {
            default: [],
            visible: false
        }
    },

    log(msg) {
        this.logs.push(msg);
        cc.log(msg);
    }
});

module.exports = BattleLoggers;