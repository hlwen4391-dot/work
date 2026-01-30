/**
 * 道具图标设置器
 * 在编辑器中按「ItemConfig.items 的顺序」绑定图标数组，运行时自动写入 ItemConfig，
 * 使每个道具拥有不同图标（道具栏、商城等会从 ItemConfig 读取 icon 显示）。
 *
 * 使用方式：
 * 1. 将本组件挂在场景中（如 Canvas 下）;
 * 2. 在属性检查器中展开 itemIcons 数组，长度与 ItemConfig.items 一致;
 * 3. 按顺序拖入 SpriteFrame：第 0 个=升级药水，第 1 个=火球术卷轴，第 2 个=兽化狂暴卷轴，第 3 个=治疗术卷轴 ……
 */
cc.Class({
    extends: cc.Component,

    properties: {
        /**
         * 道具图标数组，与 ItemConfig.items 顺序一一对应
         * 第 i 个元素对应 ItemConfig.items[i] 的图标
         */
        itemIcons: {
            default: [],
            type: [cc.SpriteFrame],
            tooltip: "按 ItemConfig 中道具顺序：升级药水、火球术卷轴、兽化狂暴卷轴、治疗术卷轴……"
        }
    },

    onLoad() {
        const ItemConfig = require("ItemConfig");
        const items = ItemConfig.getAllItems();
        let setCount = 0;

        for (let i = 0; i < items.length; i++) {
            if (this.itemIcons && this.itemIcons[i]) {
                items[i].icon = this.itemIcons[i];
                setCount++;
                cc.log(`[ItemIconSetter] ✓ ${items[i].name} (${items[i].id}) 图标已设置`);
            } else if (items[i].icon == null) {
                cc.warn(`[ItemIconSetter] ⚠️ 第 ${i + 1} 个道具「${items[i].name}」未绑定图标，请在 itemIcons[${i}] 中拖入 SpriteFrame`);
            }
        }

        if (setCount > 0) {
            cc.log(`[ItemIconSetter] 共设置 ${setCount}/${items.length} 个道具图标`);
        }
    }
});
