const Character = require("./Character");

class Monster extends Character {
    constructor(args) {
        super(args);//调用父类构造函数
        this.team = "monster";
    }

}

module.exports = Monster;