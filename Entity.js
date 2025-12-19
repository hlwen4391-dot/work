class Entity {
    constructor() {
        this.id = crypto.randomUUID();//唯一标识符
        this.components = new Map();//组件列表
    }

    addComponent(component) {
        this.components.set(component.constructor.name, component);//组件名称作为键，组件本身作为值
        component.entity = this;//组件所属实体 
        return this;
    }//返回实体本身，方便链式调用

    get(componentClass) {
        return this.components.get(componentClass.name);//获取组件
    }

    getAll(componentClass) {
        return [...this.components.values()].filter(c => c instanceof componentClass);//过滤出所有组件实例
    }

    //删除组件实例
    removeComponentInstance(instance) {
        //遍历组件列表，找到实例并删除
        for (const [key, comp] of this.components.entries()) {
            //如果组件实例与要删除的实例相同，则删除
            if (comp === instance) {
                this.components.delete(key);
                return;
            }
        }
    }
}

module.exports = Entity;