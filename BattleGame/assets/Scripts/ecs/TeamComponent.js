cc.Class({
    extends: cc.Component,

    properties: {
        team: {
            default: "",
            type: cc.String,
            tooltip: "队伍名称（hero/monster）"
        }
    }
});
