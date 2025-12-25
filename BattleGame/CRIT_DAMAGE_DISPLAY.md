# 暴击飘字效果系统

## ✨ 功能介绍

为战斗系统添加了炫酷的暴击变色飘字效果，让战斗更有视觉冲击力！

## 🎨 效果类型

### 1. 暴击伤害 (CRIT)
- **颜色**: 🔥 橙红色 `(255, 69, 0)`
- **大小**: 1.5倍
- **动画**: 震动 + 飘高 + 淡出
- **飘动高度**: 50像素
- **触发**: 攻击者暴击率判定成功

### 2. 普通伤害 (NORMAL)
- **颜色**: ⚪ 白色 `(255, 255, 255)`
- **大小**: 1.0倍
- **动画**: 飘高 + 淡出
- **飘动高度**: 30像素
- **触发**: 正常攻击命中

### 3. 闪避 (MISS)
- **文本**: "MISS!"
- **颜色**: 灰色 `(150, 150, 150)`
- **大小**: 1.0倍
- **动画**: 轻微飘动 + 淡出
- **飘动高度**: 20像素
- **触发**: 目标闪避判定成功

### 4. 治疗 (HEAL) - 预留接口
- **颜色**: 💚 绿色 `(50, 205, 50)`
- **大小**: 1.2倍
- **动画**: 飘高 + 淡出
- **飘动高度**: 40像素
- **文本**: "+数值"

## 🔧 实现细节

### 1. HealthBar.js - 飘字显示

```javascript
/**
 * 显示伤害数字
 * @param {number} value - 伤害值
 * @param {string} type - 'normal' | 'crit' | 'miss' | 'heal'
 */
showDamage(value, type = 'normal')
```

**暴击特效动画流程**:
```
震动放大 (0.1s) → 恢复 (0.1s) → 同时: [向上飘动 + 淡出] (1.2s)
```

**普通特效动画流程**:
```
同时: [向上飘动 + 淡出] (1.0s)
```

### 2. StatsComponent.js - 属性组件

```javascript
/**
 * 更新血条显示
 * @param {number} damage - 伤害值
 * @param {string} type - 伤害类型
 */
updateHealthBar(damage, type = 'normal')
```

### 3. CombatSystem.js - 战斗计算

#### damage() 方法
- 检测闪避 → 显示 `'miss'`
- 检测暴击 → 显示 `'crit'`
- 普通伤害 → 显示 `'normal'`

```javascript
// 闪避
if (Math.random() < missChance) {
    tgtStats.updateHealthBar(0, 'miss');
}

// 暴击
if (Math.random() < critChance) {
    tgtStats.updateHealthBar(finalDamage, 'crit');
}

// 普通
tgtStats.updateHealthBar(finalDamage, 'normal');
```

## 📦 修改的文件

1. ✅ `BattleGame/assets/Scripts/ecs/HealthBar.js`
   - 添加 `type` 参数支持
   - 实现不同类型的颜色/大小/动画
   - 添加震动效果

2. ✅ `BattleGame/assets/Scripts/ecs/StatsComponent.js`
   - `updateHealthBar()` 添加 `type` 参数
   - 处理闪避的 MISS 显示

3. ✅ `BattleGame/assets/Scripts/system/CombatSystem.js`
   - `damage()` 检测暴击并传递类型
   - `damageTrue()` 传递普通类型
   - 闪避时显示 MISS

4. ✅ `BattleGame/assets/Scripts/system/BuffRegistry.js`
   - 燃烧 buff 伤害显示为普通类型

## 🎮 如何使用

### 自动生效

已经集成到战斗系统中，**无需额外配置**！

只要角色有 `HealthBar` 组件和 `damageLabel` 属性，暴击飘字就会自动工作。

### 编辑器设置

1. 选中角色节点的 **HealthBar** 组件
2. 确保 `Damage Label` 属性已绑定一个 Label 节点
3. 运行游戏，观察效果！

## 🎨 自定义颜色/效果

如果你想修改暴击颜色或动画效果，编辑 `HealthBar.js`:

```javascript
case 'crit':  // 暴击
    this.damageLabel.node.color = cc.color(255, 69, 0);  // 修改颜色
    this.damageLabel.node.scale = 1.5;  // 修改大小
    this._playFloatAnimation(startY, startScale, 50, 1.2, true);  // 修改动画
    break;
```

### 参数说明

```javascript
_playFloatAnimation(startY, startScale, floatHeight, duration, shake)
```

- `startY`: 起始Y坐标（自动传入）
- `startScale`: 起始缩放（自动传入）
- `floatHeight`: 飘动高度（像素）
- `duration`: 动画持续时间（秒）
- `shake`: 是否震动（true/false）

## 📊 效果对比表

| 效果类型 | 颜色 | 大小 | 飘动高度 | 持续时间 | 震动 |
|---------|------|------|---------|---------|------|
| 暴击 | 橙红色 | 1.5x | 50px | 1.2s | ✅ |
| 普通 | 白色 | 1.0x | 30px | 1.0s | ❌ |
| 闪避 | 灰色 | 1.0x | 20px | 1.0s | ❌ |
| 治疗 | 绿色 | 1.2x | 40px | 1.0s | ❌ |

## 🎯 扩展功能

### 添加新的伤害类型

1. **在 `HealthBar.js` 的 `showDamage()` 中添加新类型**:

```javascript
case 'armor_break':  // 破甲
    this.damageLabel.string = "-" + Math.floor(value);
    this.damageLabel.node.color = cc.color(255, 215, 0);  // 金色
    this.damageLabel.node.scale = 1.3;
    this._playFloatAnimation(startY, startScale, 45, 1.1, true);
    break;
```

2. **在战斗逻辑中调用**:

```javascript
tgtStats.updateHealthBar(damage, 'armor_break');
```

### 添加音效

在 `HealthBar.js` 的 `showDamage()` 中:

```javascript
case 'crit':
    // ... 其他代码 ...
    cc.audioEngine.playEffect(this.critSoundClip, false);
    break;
```

### 添加粒子特效

```javascript
case 'crit':
    // ... 其他代码 ...
    const particle = cc.instantiate(this.critParticlePrefab);
    particle.setPosition(this.node.position);
    this.node.parent.addChild(particle);
    break;
```

## ✨ 视觉效果演示

### 暴击效果
```
💥 震动放大 → 橙红色数字 → 快速飘高50px → 淡出消失
   【-240】
```

### 普通伤害
```
⚪ 白色数字 → 飘高30px → 淡出消失
   【-120】
```

### 闪避效果
```
💨 灰色 "MISS!" → 轻飘20px → 快速淡出
   【MISS!】
```

## 🐛 常见问题

### 1. 飘字不显示？

**检查**:
- HealthBar 组件的 `damageLabel` 是否绑定了 Label 节点？
- Label 节点是否在场景中？
- Label 的 Opacity 是否为 255？

### 2. 暴击没有橙红色？

**检查**:
- 是否正确传递了 `'crit'` 类型？
- Label 的初始颜色是否被其他地方修改？

### 3. 动画不流畅？

**优化**:
- 确保场景帧率稳定
- 减少同时显示的飘字数量
- 使用对象池复用 Label 节点

### 4. 暴击判定不生效？

**检查**:
- 角色的 `StatsComponent.crit` 属性是否设置？
- `CombatSystem.damage()` 是否正确调用？

## 🎉 效果展示

运行游戏后，你会看到：

```
[战斗日志]
⚡ 暴击！战士 对 巨狼 造成双倍伤害
战士 对 巨狼 造成 32 点伤害 (剩余HP: 48)
```

同时，巨狼头顶会出现：
- 🔥 橙红色的 **-32**
- 震动效果
- 快速向上飘动
- 逐渐淡出消失

## 🚀 下一步

- [ ] 添加音效支持
- [ ] 添加粒子特效
- [ ] 实现伤害数字的对象池
- [ ] 支持多段飘字（连击）
- [ ] 添加更多伤害类型（毒、火、冰等）

现在去体验暴击的快感吧！💥


