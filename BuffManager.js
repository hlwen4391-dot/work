class BuffManager {
    constructor(owner) {
        this.owner = owner;//拥有者
        this.buffs = [];
    }

    addBuff(buff, logger) {

        if (!buff.stackable) {
            const old = this.buffs.find(b => b.name === buff.name);//查找是否存在同名buff
            if (old) {
                old.duration = buff.duration;//
                old.elapsed = 0;
                if (old.onApply) old.onApply(this.owner, logger);
                return;
            }
        }
        //添加新buff
        buff.apply(this.owner, logger);
        this.buffs.push(buff);

    }


    //更新buff
    updateBuffs(deltaTime, logger) {
        for (let i = this.buffs.length - 1; i >= 0; i--) {
            const buff = this.buffs[i];

            const expired = buff.update(this.owner, deltaTime, logger);//更新buff
            if (expired) {
                buff.expire(this.owner, logger);//结束buff
                this.buffs.splice(i, 1);//删除buff
            }
        }

    }


    hasStatus(statusName) {
        return this.buffs.some(buff => buff.status && buff.status[statusName]);//查找是否存在特殊状态
    }

}

module.exports = BuffManager;