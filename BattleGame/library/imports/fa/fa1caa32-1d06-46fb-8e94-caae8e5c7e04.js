"use strict";
cc._RF.push(module, 'fa1caoyHQZG+46Uyq6OXH4E', 'ShopConfig');
// Scripts/game/ShopConfig.js

"use strict";

/**
 * 商城配置
 * 定义所有可购买的商品及其价格
 * ⭐ 支持多种商品类型：消耗品(consumable)、装备(equipment)、材料(material)等
 */
var ShopConfig = {
  /**
   * 商品类型常量（便于扩展）
   */
  CATEGORY: {
    CONSUMABLE: "consumable",
    // 消耗品（药水等）
    EQUIPMENT: "equipment",
    // 装备（武器、防具等）
    MATERIAL: "material",
    // 材料（用于合成等）
    SPECIAL: "special" // 特殊商品
  },
  /**
   * 获取所有商品列表
   * @returns {Array} 商品列表 [{ id, name, price, itemId, count, icon, description, category }, ...]
   */
  getAllItems: function getAllItems() {
    return [
    // ========== 消耗品类 ==========
    {
      id: "upgrade_potion_1",
      name: "升级药水",
      price: 100,
      itemId: "upgrade_potion",
      count: 1,
      icon: null,
      description: "使用后可以提升角色等级",
      category: this.CATEGORY.CONSUMABLE
    }, {
      id: "upgrade_potion_5",
      name: "升级药水 x5",
      price: 450,
      itemId: "upgrade_potion",
      count: 5,
      icon: null,
      description: "5个升级药水打包，更优惠",
      category: this.CATEGORY.CONSUMABLE
    }, {
      id: "upgrade_potion_10",
      name: "升级药水 x10",
      price: 800,
      itemId: "upgrade_potion",
      count: 10,
      icon: null,
      description: "10个升级药水打包，超值优惠",
      category: this.CATEGORY.CONSUMABLE
    },
    // ========== 技能卷轴（特殊商品） ==========
    {
      id: "shop_scroll_fireball",
      name: "火球术卷轴",
      price: 200,
      itemId: "scroll_fireball",
      count: 1,
      icon: null,
      description: "使用后学会技能：火球术",
      category: this.CATEGORY.SPECIAL,
      skillId: 3
    }, {
      id: "shop_scroll_beast_rage",
      name: "兽化狂暴卷轴",
      price: 250,
      itemId: "scroll_beast_rage",
      count: 1,
      icon: null,
      description: "使用后学会技能：兽化狂暴",
      category: this.CATEGORY.SPECIAL,
      skillId: 7
    }, {
      id: "shop_scroll_heal_allies",
      name: "治疗术卷轴",
      price: 300,
      itemId: "scroll_heal_allies",
      count: 1,
      icon: null,
      description: "使用后学会技能：群体治疗",
      category: this.CATEGORY.SPECIAL,
      skillId: 9
    }, {
      id: "shop_scroll_stun",
      name: "盾击卷轴",
      price: 180,
      itemId: "scroll_stun",
      count: 1,
      icon: null,
      description: "使用后学会技能：盾击",
      category: this.CATEGORY.SPECIAL,
      skillId: 2
    }, {
      id: "shop_scroll_war_cry",
      name: "战吼卷轴",
      price: 350,
      itemId: "scroll_war_cry",
      count: 1,
      icon: null,
      description: "使用后学会技能：战吼",
      category: this.CATEGORY.SPECIAL,
      skillId: 5
    }, {
      id: "shop_scroll_shield_allies",
      name: "群体护盾卷轴",
      price: 320,
      itemId: "scroll_shield_allies",
      count: 1,
      icon: null,
      description: "使用后学会技能：群体护盾",
      category: this.CATEGORY.SPECIAL,
      skillId: 6
    }, {
      id: "shop_scroll_cleanse_allies",
      name: "净化术卷轴",
      price: 380,
      itemId: "scroll_cleanse_allies",
      count: 1,
      icon: null,
      description: "使用后学会技能：净化术",
      category: this.CATEGORY.SPECIAL,
      skillId: 10
    },
    // ========== 消耗品类（新增） ==========
    {
      id: "exp_potion_1",
      name: "经验药水",
      price: 50,
      itemId: "exp_potion",
      count: 1,
      icon: null,
      description: "使用后获得100点经验值",
      category: this.CATEGORY.CONSUMABLE
    }, {
      id: "exp_potion_5",
      name: "经验药水 x5",
      price: 220,
      itemId: "exp_potion",
      count: 5,
      icon: null,
      description: "5个经验药水打包，更优惠",
      category: this.CATEGORY.CONSUMABLE
    }, {
      id: "hp_potion_1",
      name: "生命药水",
      price: 30,
      itemId: "hp_potion",
      count: 1,
      icon: null,
      description: "使用后恢复50点生命值",
      category: this.CATEGORY.CONSUMABLE
    }, {
      id: "hp_potion_5",
      name: "生命药水 x5",
      price: 130,
      itemId: "hp_potion",
      count: 5,
      icon: null,
      description: "5个生命药水打包，更优惠",
      category: this.CATEGORY.CONSUMABLE
    }, {
      id: "hp_potion_10",
      name: "生命药水 x10",
      price: 240,
      itemId: "hp_potion",
      count: 10,
      icon: null,
      description: "10个生命药水打包，超值优惠",
      category: this.CATEGORY.CONSUMABLE
    },
    // ========== 装备类 ==========
    {
      id: "shop_war_hammer",
      name: "战锤(武器)",
      price: 500,
      itemId: "war_hammer",
      count: 1,
      icon: null,
      description: "装备后攻击力+15",
      category: this.CATEGORY.EQUIPMENT,
      equipmentSlot: "weapon"
    }, {
      id: "shop_iron_armor",
      name: "铁甲",
      price: 400,
      itemId: "iron_armor",
      count: 1,
      icon: null,
      description: "装备后防御力+10",
      category: this.CATEGORY.EQUIPMENT,
      equipmentSlot: "armor"
    }, {
      id: "shop_leather_boots",
      name: "皮靴",
      price: 200,
      itemId: "leather_boots",
      count: 1,
      icon: null,
      description: "装备后速度+2",
      category: this.CATEGORY.EQUIPMENT,
      equipmentSlot: "shoes"
    }
    // ========== 后续扩展示例 ==========
    // 消耗品示例：
    // {
    //     id: "exp_potion_1",
    //     name: "经验药水",
    //     price: 50,
    //     itemId: "exp_potion",
    //     count: 1,
    //     icon: null,
    //     description: "使用后可以获得大量经验值",
    //     category: this.CATEGORY.CONSUMABLE
    // },
    // {
    //     id: "hp_potion_1",
    //     name: "生命药水",
    //     price: 30,
    //     itemId: "hp_potion",
    //     count: 1,
    //     icon: null,
    //     description: "使用后可以恢复生命值",
    //     category: this.CATEGORY.CONSUMABLE
    // },
    // 装备示例：
    // {
    //     id: "sword_iron",
    //     name: "铁剑",
    //     price: 500,
    //     itemId: "sword_iron",
    //     count: 1,
    //     icon: null,
    //     description: "基础武器，攻击力+10",
    //     category: this.CATEGORY.EQUIPMENT,
    //     equipmentType: "weapon" // 装备类型：武器
    // },
    // {
    //     id: "armor_leather",
    //     name: "皮甲",
    //     price: 400,
    //     itemId: "armor_leather",
    //     count: 1,
    //     icon: null,
    //     description: "基础防具，防御力+5",
    //     category: this.CATEGORY.EQUIPMENT,
    //     equipmentType: "armor" // 装备类型：防具
    // },
    // 材料示例：
    // {
    //     id: "material_iron_ore",
    //     name: "铁矿石",
    //     price: 20,
    //     itemId: "iron_ore",
    //     count: 1,
    //     icon: null,
    //     description: "用于锻造装备的基础材料",
    //     category: this.CATEGORY.MATERIAL
    // }
    ];
  },
  /**
   * 根据商品ID获取商品信息
   * @param {string} shopItemId - 商城商品ID
   * @returns {Object|null} 商品信息
   */
  getItemById: function getItemById(shopItemId) {
    var items = this.getAllItems();
    return items.find(function (item) {
      return item.id === shopItemId;
    }) || null;
  },
  /**
   * 根据分类获取商品列表
   * @param {string} category - 商品分类（如 "consumable"）
   * @returns {Array} 商品列表
   */
  getItemsByCategory: function getItemsByCategory(category) {
    var items = this.getAllItems();
    return items.filter(function (item) {
      return item.category === category;
    });
  },
  /**
   * 获取所有商品分类列表（用于分类显示）
   * @returns {Array<string>} 分类列表
   */
  getAllCategories: function getAllCategories() {
    var items = this.getAllItems();
    var categories = [].concat(new Set(items.map(function (item) {
      return item.category;
    })));
    return categories;
  },
  /**
   * 根据商品类型获取显示样式配置（⭐ 扩展点：为不同类型商品设置不同样式）
   * @param {string} category - 商品分类
   * @returns {Object} 样式配置 { backgroundColor, borderColor, nameColor, priceColor, ... }
   */
  getCategoryStyle: function getCategoryStyle(category) {
    var _styles;
    var styles = (_styles = {}, _styles[this.CATEGORY.CONSUMABLE] = {
      backgroundColor: new cc.Color(245, 245, 245, 255),
      // 浅灰背景
      borderColor: new cc.Color(200, 200, 200, 255),
      // 灰色边框
      nameColor: new cc.Color(30, 30, 30, 255),
      // ⭐ 深黑色名称（更明显）
      priceColor: new cc.Color(255, 215, 0, 255),
      // 金色价格
      descColor: new cc.Color(60, 60, 60, 255) // ⭐ 深灰色描述（更明显，从120改为60）
    }, _styles[this.CATEGORY.EQUIPMENT] = {
      backgroundColor: new cc.Color(240, 248, 255, 255),
      // 淡蓝背景
      borderColor: new cc.Color(100, 149, 237, 255),
      // 蓝色边框
      nameColor: new cc.Color(20, 20, 80, 255),
      // ⭐ 更深蓝名称（更明显）
      priceColor: new cc.Color(255, 140, 0, 255),
      // 橙色价格
      descColor: new cc.Color(50, 90, 130, 255) // ⭐ 更深蓝描述（更明显）
    }, _styles[this.CATEGORY.MATERIAL] = {
      backgroundColor: new cc.Color(255, 250, 240, 255),
      // 米色背景
      borderColor: new cc.Color(210, 180, 140, 255),
      // 棕褐色边框
      nameColor: new cc.Color(100, 50, 15, 255),
      // ⭐ 更深棕色名称（更明显）
      priceColor: new cc.Color(184, 134, 11, 255),
      // 深金价格
      descColor: new cc.Color(120, 60, 30, 255) // ⭐ 更深棕色描述（更明显）
    }, _styles[this.CATEGORY.SPECIAL] = {
      backgroundColor: new cc.Color(255, 245, 238, 255),
      // 淡粉背景
      borderColor: new cc.Color(255, 192, 203, 255),
      // 粉色边框
      nameColor: new cc.Color(100, 0, 100, 255),
      // ⭐ 更深紫色名称（更明显）
      priceColor: new cc.Color(255, 20, 147, 255),
      // 深粉价格
      descColor: new cc.Color(140, 60, 160, 255) // ⭐ 更深紫色描述（更明显）
    }, _styles);
    return styles[category] || styles[this.CATEGORY.CONSUMABLE]; // 默认使用消耗品样式
  }
};

module.exports = ShopConfig;

cc._RF.pop();