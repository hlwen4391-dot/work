/**
 * 装备数据管理器
 * 按角色存储装备栏数据（3 槽位：武器 / 防具 / 鞋子），每位英雄独立
 *
 * 注意：现在使用 EquipmentDataAdapter 作为数据层，支持本地 / 服务器 / 混合存储模式。
 * 要切换到服务器模式，只需调用：EquipmentDataAdapter.setStorageMode('server')
 */
const STORAGE_PREFIX = "character_equipment_"; // 向后兼容本地存储
const SLOT_COUNT = 3;
const EquipmentDataAdapter = require("EquipmentDataAdapter");

var EquipmentDataManager = {
    /**
     * 获取某角色的装备数据
     * @param {string} characterName - 角色名称
     * @returns {Promise<{ slots: Array<string|null> }>} slots: [weaponId|null, armorId|null, shoesId|null]
     */
    async getEquipment(characterName) {
        if (!characterName) return { slots: [null, null, null] };
        try {
            // 通过适配器获取装备数据（根据存储模式决定从本地还是服务器获取）
            const result = await EquipmentDataAdapter.loadCharacterEquipment(characterName);
            let slots = [];

            if (result) {
                if (Array.isArray(result.slots)) {
                    slots = result.slots;
                } else if (Array.isArray(result)) {
                    // 兼容直接返回数组的情况
                    slots = result;
                }
            }

            while (slots.length < SLOT_COUNT) slots.push(null);
            return { slots: slots.slice(0, SLOT_COUNT) };
        } catch (e) {
            cc.warn("[EquipmentDataManager] getEquipment 失败:", e.message);
            return { slots: [null, null, null] };
        }
    },

    /**
     * 设置某角色某槽位的装备
     * @param {string} characterName - 角色名称
     * @param {number} slotIndex - 槽位索引 0=武器 1=防具 2=鞋子
     * @param {string|null} itemId - 道具 id，卸下传 null
     * @returns {Promise<boolean>}
     */
    async setEquipmentSlot(characterName, slotIndex, itemId) {
        if (!characterName || slotIndex < 0 || slotIndex >= SLOT_COUNT) return false;
        try {
            const { slots } = await this.getEquipment(characterName);

            // 如果目标槽位本来就是同一件装备，直接视为成功，不做任何修改
            if (itemId && slots[slotIndex] === itemId) {
                cc.log(`[EquipmentDataManager] 槽位 ${slotIndex} 已经是装备 ${itemId}，忽略重复设置`);
                return true;
            }

            // 如果要装备的是同一件装备（该角色其他槽位已经有相同 itemId），则禁止装备
            if (itemId) {
                const hasSame = slots.some((id, idx) => idx !== slotIndex && id === itemId);
                if (hasSame) {
                    cc.warn(`[EquipmentDataManager] 角色 ${characterName} 已经装备了相同的装备(${itemId})，本次操作忽略`);
                    return false;
                }
            }

            slots[slotIndex] = itemId;
            // 通过适配器保存（内部会根据存储模式决定保存到本地或服务器）
            const ok = await EquipmentDataAdapter.saveCharacterEquipment(characterName, slots);
            if (!ok) {
                // 向后兼容：如果适配器保存失败，退回到本地存储
                const key = STORAGE_PREFIX + characterName;
                cc.sys.localStorage.setItem(key, JSON.stringify({ slots }));
            }
            return ok;
        } catch (e) {
            cc.warn("[EquipmentDataManager] setEquipmentSlot 失败:", e.message);
            return false;
        }
    },

    /**
     * 卸下某槽位装备并返回原装备 id
     * @param {string} characterName - 角色名称
     * @param {number} slotIndex - 槽位索引
     * @returns {Promise<string|null>} 原装备 itemId
     */
    async unequipSlot(characterName, slotIndex) {
        const { slots } = await this.getEquipment(characterName);
        const prev = slots[slotIndex] || null;
        await this.setEquipmentSlot(characterName, slotIndex, null);
        return prev;
    }
};


module.exports = EquipmentDataManager;
