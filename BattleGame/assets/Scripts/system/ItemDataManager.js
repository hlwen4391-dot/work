/**
 * 道具数据管理器
 * 负责保存和加载道具数据（全局共享，所有角色共用）
 * 
 * 注意：现在使用 ItemDataAdapter 作为数据层，支持本地存储和服务器存储的切换
 * 要切换到服务器模式，只需调用：ItemDataAdapter.setStorageMode('server')
 */
const ItemDataAdapter = require("ItemDataAdapter");

var ItemDataManager = {
    // 全局道具栏标识（所有角色共享）
    GLOBAL_INVENTORY_KEY: "shared_inventory",

    // 存储键前缀（仅用于本地存储）
    STORAGE_PREFIX: "character_items_",

    /**
     * 保存道具数据（全局共享）
     * @param {Array} items - 道具列表 [{ itemId, count }, ...]
     * @returns {Promise<boolean>|boolean} 是否保存成功（服务器模式下返回Promise）
     */
    saveItems(items) {
        // 使用全局道具栏标识
        const result = ItemDataAdapter.saveCharacterItems(this.GLOBAL_INVENTORY_KEY, items);

        // 如果是Promise（服务器模式），返回Promise
        if (result instanceof Promise) {
            return result.then(success => {
                if (success) {
                    cc.log(`[ItemDataManager] 保存全局道具数据`, items);
                }
                return success;
            });
        }

        // 本地模式，直接返回结果
        if (result) {
            cc.log(`[ItemDataManager] 保存全局道具数据`, items);
        }
        return result;
    },

    /**
     * 加载道具数据（全局共享）
     * @returns {Promise<Array>|Array} 道具列表 [{ itemId, count }, ...] 或空数组（服务器模式下返回Promise）
     */
    loadItems() {
        // 使用全局道具栏标识
        const result = ItemDataAdapter.loadCharacterItems(this.GLOBAL_INVENTORY_KEY);

        // 如果是Promise（服务器模式），返回Promise
        if (result instanceof Promise) {
            return result.then(items => {
                if (items && items.length > 0) {
                    cc.log(`[ItemDataManager] 加载全局道具数据`, items);
                }
                return items || [];
            });
        }

        // 本地模式，直接返回结果
        if (result && result.length > 0) {
            cc.log(`[ItemDataManager] 加载全局道具数据`, result);
        }
        return result || [];
    },

    /**
     * 添加道具到全局背包
     * @param {string} itemId - 道具ID
     * @param {number} count - 数量（默认1）
     * @returns {Promise<boolean>|boolean} 是否添加成功（服务器模式下返回Promise）
     */
    async addItem(itemId, count = 1) {
        // 先加载一次数据，用于记录操作前的数量（避免多次请求导致数据不一致）
        const items = await this.loadItems();
        const existingItemBefore = items.find(item => item.itemId === itemId);
        const beforeCount = existingItemBefore ? existingItemBefore.count : 0;
        cc.log(`[ItemDebug] addItem 前 => itemId=${itemId}, count=${beforeCount}, 增加=${count}`);

        const ItemConfig = require("ItemConfig");
        const itemConfig = ItemConfig.getItemById(itemId);

        if (!itemConfig) {
            cc.error(`[ItemDataManager] 无效的道具ID: ${itemId}`);
            return false;
        }

        // 查找是否已有该道具（使用上面加载的 items，不再重新加载）
        const existingItem = items.find(item => item.itemId === itemId);

        // [ItemDebug] 详细日志：检查 existingItem 的状态
        cc.log(`[ItemDebug] addItem 内部检查 => existingItem=${existingItem ? JSON.stringify(existingItem) : 'null'}, items数组长度=${items.length}, items内容=${JSON.stringify(items)}`);

        if (existingItem) {
            // 已有该道具，增加数量（不超过最大堆叠）
            const oldCount = existingItem.count;
            const newCount = Math.min(existingItem.count + count, itemConfig.maxStack || 99);
            cc.log(`[ItemDebug] addItem 计算 => oldCount=${oldCount}, count=${count}, maxStack=${itemConfig.maxStack || 99}, newCount=${newCount}`);
            existingItem.count = newCount;
            cc.log(`[ItemDataManager] 增加道具数量: ${itemId}, 当前数量: ${newCount}`);
        } else {
            // 新道具，添加到列表
            items.push({ itemId, count: Math.min(count, itemConfig.maxStack || 99) });
            cc.log(`[ItemDataManager] 添加新道具: ${itemId}, 数量: ${count}`);
        }

        // [ItemDebug] 保存前的完整 items 数组状态
        cc.log(`[ItemDebug] addItem 保存前 => items数组=${JSON.stringify(items)}`);

        const saveResult = await this.saveItems(items);

        // [ItemDebug] 保存后的完整 items 数组状态
        cc.log(`[ItemDebug] addItem 保存后 => items数组=${JSON.stringify(items)}, 保存结果=${saveResult}`);

        // [ItemDebug] 记录操作后的数量（从保存后的 items 数组计算，不再重新请求）
        const existingItemAfter = items.find(item => item.itemId === itemId);
        const afterCount = existingItemAfter ? existingItemAfter.count : 0;
        cc.log(`[ItemDebug] addItem 后 => itemId=${itemId}, count=${afterCount}, 成功=${saveResult}`);

        return saveResult;
    },

    /**
     * 移除道具（使用道具）
     * @param {string} itemId - 道具ID
     * @param {number} count - 数量（默认1）
     * @returns {Promise<boolean>|boolean} 是否移除成功（服务器模式下返回Promise）
     */
    async removeItem(itemId, count = 1) {
        // 先加载一次数据，用于记录操作前的数量（避免多次请求导致数据不一致）
        const items = await this.loadItems();
        const existingItemBefore = items.find(item => item.itemId === itemId);
        const beforeCount = existingItemBefore ? existingItemBefore.count : 0;
        cc.log(`[ItemDebug] removeItem 前 => itemId=${itemId}, count=${beforeCount}, 减少=${count}`);

        const itemIndex = items.findIndex(item => item.itemId === itemId);

        if (itemIndex === -1) {
            cc.warn(`[ItemDataManager] 没有道具: ${itemId}`);
            cc.log(`[ItemDebug] removeItem 后 => itemId=${itemId}, count=${beforeCount}, 成功=false (道具不存在)`);
            return false;
        }

        const item = items[itemIndex];
        if (item.count < count) {
            cc.warn(`[ItemDataManager] 道具数量不足: ${itemId}, 当前: ${item.count}, 需要: ${count}`);
            cc.log(`[ItemDebug] removeItem 后 => itemId=${itemId}, count=${beforeCount}, 成功=false (数量不足)`);
            return false;
        }

        item.count -= count;
        if (item.count <= 0) {
            // 数量为0，移除该道具
            items.splice(itemIndex, 1);
            cc.log(`[ItemDataManager] 移除道具: ${itemId}`);
        } else {
            cc.log(`[ItemDataManager] 减少道具数量: ${itemId}, 剩余数量: ${item.count}`);
        }

        const saveResult = await this.saveItems(items);

        // [ItemDebug] 记录操作后的数量（从保存后的 items 数组计算，不再重新请求）
        const existingItemAfter = items.find(item => item.itemId === itemId);
        const afterCount = existingItemAfter ? existingItemAfter.count : 0;
        cc.log(`[ItemDebug] removeItem 后 => itemId=${itemId}, count=${afterCount}, 成功=${saveResult}`);

        return saveResult;
    },

    /**
     * 获取道具数量（全局共享）
     * @param {string} itemId - 道具ID
     * @returns {Promise<number>|number} 道具数量，如果没有返回0（服务器模式下返回Promise）
     */
    async getItemCount(itemId) {
        const items = await this.loadItems();
        const item = items.find(item => item.itemId === itemId);
        return item ? item.count : 0;
    },

    /**
     * 获取所有道具（包含完整配置信息，全局共享）
     * @returns {Promise<Array>|Array} 道具列表 [{ itemId, count, config }, ...]（服务器模式下返回Promise）
     */
    async getAllItemsWithConfig() {
        const items = await this.loadItems();
        const ItemConfig = require("ItemConfig");

        return items.map(item => {
            const config = ItemConfig.getItemById(item.itemId);
            return {
                itemId: item.itemId,
                count: item.count,
                config: config
            };
        }).filter(item => item.config !== null); // 过滤掉配置不存在的道具
    },

    // ========== 向后兼容的旧方法（已废弃，建议使用新方法） ==========

    /**
     * @deprecated 使用 saveItems() 代替
     * 保存角色的道具数据（保留用于向后兼容）
     */
    saveCharacterItems(characterName, items) {
        cc.warn(`[ItemDataManager] saveCharacterItems() 已废弃，请使用 saveItems() 代替`);
        return this.saveItems(items);
    },

    /**
     * @deprecated 使用 loadItems() 代替
     * 加载角色的道具数据（保留用于向后兼容）
     */
    loadCharacterItems(characterName) {
        cc.warn(`[ItemDataManager] loadCharacterItems() 已废弃，请使用 loadItems() 代替`);
        return this.loadItems();
    },

    /**
     * @deprecated 使用 getAllItemsWithConfig() 代替
     * 获取角色的所有道具（保留用于向后兼容）
     */
    getCharacterItemsWithConfig(characterName) {
        cc.warn(`[ItemDataManager] getCharacterItemsWithConfig() 已废弃，请使用 getAllItemsWithConfig() 代替`);
        return this.getAllItemsWithConfig();
    }
};

module.exports = ItemDataManager;
