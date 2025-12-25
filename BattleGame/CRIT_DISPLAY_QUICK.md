# 暴击飘字快速指南

## 🎯 已完成的功能

✅ 暴击伤害：橙红色大字 + 震动效果
✅ 普通伤害：白色飘字
✅ 闪避：灰色 "MISS!"
✅ 治疗：绿色"+数值"（预留）

## 🚀 无需配置，自动生效！

只要你的角色节点有 `HealthBar` 组件并绑定了 `damageLabel`，就会自动显示暴击飘字效果。

## 🎨 效果一览

### 暴击 💥
```
颜色: 橙红色 (255, 69, 0)
大小: 1.5倍
动画: 震动 → 飘高50px → 淡出
```

### 普通伤害 ⚪
```
颜色: 白色 (255, 255, 255)
大小: 1.0倍
动画: 飘高30px → 淡出
```

### 闪避 💨
```
文本: "MISS!"
颜色: 灰色 (150, 150, 150)
动画: 飘高20px → 淡出
```

## 🔧 如何自定义

### 修改暴击颜色

编辑 `BattleGame/assets/Scripts/ecs/HealthBar.js`:

```javascript
case 'crit':
    this.damageLabel.node.color = cc.color(255, 69, 0);  // 改成你想要的颜色
    this.damageLabel.node.scale = 1.5;  // 改成你想要的大小
    break;
```

### 修改动画速度

```javascript
this._playFloatAnimation(startY, startScale, 50, 1.2, true);
//                                           ↑    ↑    ↑
//                                        飘高度  时长  震动
```

## 📋 涉及的文件

- `HealthBar.js` - 飘字显示逻辑
- `StatsComponent.js` - 属性组件接口
- `CombatSystem.js` - 暴击检测
- `BuffRegistry.js` - Buff伤害显示

## 🎉 运行游戏查看效果

现在直接运行游戏，当攻击者触发暴击时，你会看到炫酷的橙红色大字震动飘出！

详细文档请查看：`CRIT_DAMAGE_DISPLAY.md`

