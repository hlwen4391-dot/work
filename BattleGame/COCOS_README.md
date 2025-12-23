# 🎮 Cocos Creator ECS 战斗系统 完整指南

## 📋 项目概述

这是一个基于 **ECS (Entity-Component-System)** 架构的回合制战斗系统，完全适配 Cocos Creator 2.x 引擎。

### ✨ 核心特性

- ✅ **ECS架构** - 完全组件化，高度可扩展
- ✅ **实时战斗** - 基于 deltaTime 的真实时间驱动
- ✅ **技能系统** - 支持多种技能，技能优先级，冷却管理
- ✅ **Buff系统** - 支持增益/减益效果，属性修改，持续伤害
- ✅ **战斗日志** - 完整的战斗过程记录
- ✅ **可复现** - 使用种子随机数，战斗结果可复现

---

## 📂 项目结构

```
BattleGame/assets/Scripts/
├── ecs/                          # 组件层 (Components)
│   ├── StatsComponent.js         属性组件 (HP、攻击、防御等)
│   ├── BuffComponent.js          Buff组件
│   ├── CombatComponent.js        战斗数据组件
│   ├── TeamComponent.js          队伍组件
│   ├── SkillComponent.js         技能组件
│   ├── HealthBar.js              血条UI组件
│   └── random.js                 随机数生成器
│
├── system/                       # 系统层 (Systems)
│   ├── BattleSystem.js           战斗主系统
│   ├── ActionSystem.js           行动系统
│   ├── SkillSystem.js            技能系统
│   ├── BuffSystem.js             Buff系统
│   ├── CombatSystem.js           战斗计算系统
│   ├── DeathSystem.js            死亡处理系统
│   ├── BuffFactory.js            Buff工厂
│   ├── BuffRegistry.js           Buff数据库
│   ├── SkillConfig.js            技能配置
│   ├── BattleLoggers.js          日志系统
│   └── TeamRef.js                队伍引用
│
└── game/                         # 控制器层 (Controllers)
    ├── BattleController.js       战斗总控制器 ⭐核心
    ├── HeroController.js         英雄控制器
    └── MonsterController.js      怪物控制器
```

---

## 🚀 快速开始

### 1️⃣ 在 Cocos Creator 中创建场景

1. 打开 Cocos Creator
2. 打开 `BattleScene` 场景
3. 创建如下节点结构：

```
Canvas
├── BattleController (挂载 BattleController.js)
├── HeroParent (空节点，用于放置英雄)
└── MonsterParent (空节点，用于放置怪物)
```

### 2️⃣ 创建 Prefab

#### Hero Prefab (英雄预制体)
```
Hero
├── StatsComponent       属性组件
├── TeamComponent        队伍组件  
├── CombatComponent      战斗组件
├── SkillComponent       技能组件
└── HeroController       英雄控制器
```

#### Monster Prefab (怪物预制体)
```
Monster
├── StatsComponent       属性组件
├── TeamComponent        队伍组件
├── CombatComponent      战斗组件
├── SkillComponent       技能组件
└── MonsterController    怪物控制器
```

### 3️⃣ 配置 BattleController

在 **BattleController** 节点的属性面板中：
- **HeroPrefab**: 拖入 Hero Prefab
- **MonsterPrefab**: 拖入 Monster Prefab  
- **HeroParent**: 拖入 HeroParent 节点
- **MonsterParent**: 拖入 MonsterParent 节点

### 4️⃣ 运行场景

点击运行，战斗将自动开始！查看控制台可以看到详细的战斗日志。

---

## 🎯 技能列表

| 技能ID | 技能名称 | 冷却时间 | 效果 |
|--------|---------|---------|------|
| 1 | 普通攻击 | 1.0s | 基础攻击，可暴击 |
| 2 | 盾击 | 4.0s | 造成伤害 + 眩晕1秒 |
| 3 | 火球术 | 3.0s | 5点真实伤害 + 燃烧3秒 |
| 4 | 狂暴 | 4.0s | 自身攻击+5，持续2秒 |
| 5 | 战吼 | 10.0s | 全队攻击+5、速度+3，持续3秒 |
| 6 | 群体护盾 | 9.0s | 全队获得10点护盾，持续3秒 |

---

## 🔮 Buff列表

| Buff名称 | 持续时间 | 效果 |
|---------|---------|------|
| 燃烧 | 3秒 | 每秒损失5点HP |
| 眩晕 | 1秒 | 无法行动 |
| 战吼 | 3秒 | 攻击+5，速度+3 |
| 狂暴 | 2秒 | 攻击+5 |
| 护盾 | 3秒 | 吸收10点伤害 |

---

## 🔧 如何添加新技能

### 步骤1: 在 SkillConfig.js 中定义技能

```javascript
// 在 SkillEnum 中添加技能ID
var SkillEnum = {
    // ... 现有技能
    yourNewSkill: 7  // 新技能ID
};

// 在 SkillConfig 中添加技能配置
var SkillConfig = {
    // ... 现有技能
    
    yourNewSkill: {
        name: "你的技能名",
        id: SkillEnum.yourNewSkill,
        cooldown: 5.0,  // 冷却时间
        effect: (self, target, log, rand) => {
            // 技能效果逻辑
            log(`${self.name} 释放了新技能！`);
            
            return [
                { type: "damage", value: 10 },  // 造成10点伤害
                { type: "applyBuff", buff: "stun" }  // 添加眩晕Buff
            ];
        }
    }
};
```

### 步骤2: 在 BattleController.js 中为角色添加技能

```javascript
const heroData = [
    { 
        name: "战士", 
        hp: 50, 
        attack: 8, 
        skills: [
            SkillConfig.normalAttack,
            SkillConfig.yourNewSkill  // 添加你的新技能
        ] 
    }
];
```

---

## 🎨 如何添加新Buff

### 在 BuffRegistry.js 中定义Buff

```javascript
var BuffRegistry = {
    // ... 现有Buff
    
    yourNewBuff: {
        name: "你的Buff名",
        duration: 3,  // 持续3秒
        interval: 1,  // 每秒触发一次
        modifiers: {
            attack: 10,  // 攻击+10
            speed: 5     // 速度+5
        },
        onApply(target, log) {
            log(`${target.name} 获得了新Buff！`);
        },
        onTick(target, log) {
            // 每秒执行的逻辑
            log(`${target.name} 的Buff效果触发`);
        },
        onExpire(target, log) {
            log(`${target.name} 的Buff效果结束`);
        }
    }
};
```

---

## 📊 战斗流程

```
战斗开始
    ↓
BattleController.onLoad()
    ↓
创建英雄和怪物节点
    ↓
初始化 BattleSystem
    ↓
每帧 update(dt)
    ↓
BattleSystem.update(dt)
    ↓
按速度排序所有单位
    ↓
for each 单位:
    ↓
    ActionSystem.performAction()
        ↓
        1. 更新Buff效果
        2. 检查死亡
        3. 更新技能CD
        4. 查找可用技能
        5. 选择目标
        6. 释放技能
            ↓
            - 计算伤害 (CombatSystem)
            - 添加Buff (BuffSystem)
        7. 再次检查死亡
    ↓
检查战斗是否结束
    ↓
战斗结束
```

---

## 🔑 关键API

### BattleController (战斗控制器)

```javascript
// 创建战斗系统
this.battleSystem = new BattleSystem(
    this.heros,      // 英雄数组
    this.monsters,   // 怪物数组
    this.logger,     // 日志系统
    this.rand        // 随机数生成器
);

// 每帧更新
this.battleSystem.update(dt);
```

### SkillSystem (技能系统)

```javascript
// 更新技能冷却
SkillSystem.updateCooldowns(entity, dt);

// 查找可用技能
const skill = SkillSystem.findAvailableSkill(entity);

// 使用技能
SkillSystem.useSkill(entity, target, skill, log, rand);
```

### BuffSystem (Buff系统)

```javascript
// 添加Buff
const buffComp = BuffFactory.create("burn");
BuffSystem.addBuff(entity, buffComp, log);

// 更新Buff
BuffSystem.update(entity, dt, log);

// 检查状态
const isStunned = BuffSystem.hasStatus(entity, "stun");
```

---

## 💡 重要提示

### 组件获取方式

在 Cocos Creator 中，组件获取使用**字符串名称**：

```javascript
// ✅ 正确
const stats = node.getComponent("StatsComponent");

// ❌ 错误（这是Node.js版本的写法）
const stats = node.get(StatsComponent);
```

### 添加组件方式

```javascript
// 动态添加Buff组件
let buff = entity.addComponent("BuffComponent");
buff.init(buffConfig);
```

### 节点命名

确保你的组件脚本文件名和注册的类名一致，否则 Cocos 无法找到组件。

---

## 🐛 常见问题

### Q: 战斗不开始？
**A**: 检查以下几点：
1. BattleController 是否正确挂载
2. Hero 和 Monster Prefab 是否正确配置
3. 所有必需的组件是否都已添加到 Prefab 上

### Q: 控制台报错 "Cannot find module"？
**A**: 确保所有 `.js` 文件都有对应的 `.meta` 文件，并且在 Cocos Creator 中正确导入。

### Q: 技能不释放？
**A**: 检查：
1. 技能是否正确添加到 SkillComponent
2. 技能冷却时间是否合理
3. 查看战斗日志确认技能执行情况

### Q: Buff不生效？
**A**: 确认：
1. BuffFactory 和 BuffRegistry 是否正确引用
2. Buff 配置是否正确
3. BuffSystem.addBuff 是否被正确调用

---

## 📚 扩展功能建议

### 可以添加的功能

1. **可视化血条** - 使用 HealthBar 组件显示HP
2. **技能特效** - 添加粒子效果和动画
3. **战斗UI** - 显示技能图标、冷却时间
4. **回合回放** - 保存战斗日志用于回放
5. **AI系统** - 添加更智能的技能选择逻辑
6. **装备系统** - 通过装备修改角色属性
7. **等级系统** - 角色升级和属性成长
8. **多队伍战斗** - 支持3v3或更多

---

## 📝 版本历史

- **v1.0** (2025-01-12) - 完成 ECS 架构改造
- **v1.1** (2025-01-12) - 适配 Cocos Creator
- **v1.2** (2025-01-12) - 添加完整的配置系统

---

## 🎓 学习资源

- [Cocos Creator 官方文档](https://docs.cocos.com/creator/2.4/manual/zh/)
- [ECS 架构介绍](https://github.com/SanderMertens/ecs-faq)
- JavaScript 模块系统

---

## 👨‍💻 开发者

如有问题，请查看代码注释或提交 Issue。

**祝你开发愉快！** 🚀

