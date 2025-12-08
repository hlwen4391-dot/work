const BuffFactory = require("./BuffFactory");

class BuffSystem {
    static addbuff(target, buffName, logger) {

        const buff = BuffFactory.creat(buffName);
        target.buffManager.addBuff(buff, logger);
    }
}//buff统一入口

module.exports = BuffSystem;