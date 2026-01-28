/**
 * 商城配置
 * 定义所有可购买的商品及其价格
 */
var ShopConfig = {
    /**
     * 获取所有商品列表
     * @returns {Array} 商品列表 [{ id, name, price, itemId, count, icon, description }, ...]
     */
    getAllItems() {
        return [
            {
                id: "upgrade_potion_1",
                name: "升级药水",
                price: 100,
                itemId: "upgrade_potion", // 购买后获得的道具ID
                count: 1, // 购买数量
                icon: null, // 图标（由ItemIconSetter设置）
                description: "使用后可以提升角色等级",
                category: "consumable" // 消耗品
            },
            {
                id: "upgrade_potion_5",
                name: "升级药水 x5",
                price: 450, // 5个打包优惠价
                itemId: "upgrade_potion",
                count: 5,
                icon: null,
                description: "5个升级药水打包，更优惠",
                category: "consumable"
            },
            {
                id: "upgrade_potion_10",
                name: "升级药水 x10",
                price: 800, // 10个打包优惠价
                itemId: "upgrade_potion",
                count: 10,
                icon: null,
                description: "10个升级药水打包，超值优惠",
                category: "consumable"
            }
            // 后续可以添加更多商品
            // {
            //     id: "exp_potion_1",
            //     name: "经验药水",
            //     price: 50,
            //     itemId: "exp_potion",
            //     count: 1,
            //     icon: null,
            //     description: "使用后可以获得经验值",
            //     category: "consumable"
            // }
        ];
    },

    /**
     * 根据商品ID获取商品信息
     * @param {string} shopItemId - 商城商品ID
     * @returns {Object|null} 商品信息
     */
    getItemById(shopItemId) {
        const items = this.getAllItems();
        return items.find(item => item.id === shopItemId) || null;
    },

    /**
     * 根据分类获取商品列表
     * @param {string} category - 商品分类（如 "consumable"）
     * @returns {Array} 商品列表
     */
    getItemsByCategory(category) {
        const items = this.getAllItems();
        return items.filter(item => item.category === category);
    }
};

module.exports = ShopConfig;
