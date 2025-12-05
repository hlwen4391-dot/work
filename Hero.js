const Character = require("./Character");

class Hero extends Character {
    constructor(args) {
        super(args);//调用父类构造函数
        this.team = "hero";
    }
}

module.exports = Hero;