class Entity {
    constructor() {
        this.id = crypto.randomUUID();//唯一标识符
        this.components = new Map();//组件列表
    }

    addComponent(component) {
        this.components.set(component.constructor.name, component);//组件名称作为键，组件本身作为值
        component.entity = this;
        return this;
    }//返回实体本身，方便链式调用

    get(componentClass) {
        return this.components.get(componentClass.name);//获取组件
    }
}

module.exports = Entity;