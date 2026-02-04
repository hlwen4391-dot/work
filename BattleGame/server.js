const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const PORT = process.env.PORT || 3000; // 单个角色数据端口
const PORT_ALL = process.env.PORT_ALL || 3001; // 所有角色数据端口

// 数据文件路径
const DATA_DIR = path.join(__dirname, 'data');
const CHARACTERS_FILE = path.join(DATA_DIR, 'characters.json');
const INVENTORY_FILE = path.join(DATA_DIR, 'inventory.json');
const COINS_FILE = path.join(DATA_DIR, 'coins.json');
const SKILLS_FILE = path.join(DATA_DIR, 'skills.json'); // ⭐ 技能数据文件
const EQUIPMENT_FILE = path.join(DATA_DIR, 'equipment.json'); // ⭐ 装备数据文件

// 内存中的数据存储
let charactersData = {};  // { userId: { characterName: data } }
let inventoryData = {};   // { userId: items[] }
let coinsData = {};       // { userId: coins }
let skillsData = {};      // ⭐ { userId: { characterName: skills[] } }
let equipmentData = {};   // ⭐ { userId: { characterName: { slots: [...] } } }

// 创建两个独立的Express应用实例
const app = express(); // 端口3000：单个角色、保存、道具、管理
const appAll = express(); // 端口3001：所有角色

// 中间件（两个app都需要）
app.use(cors());
app.use(express.json());
appAll.use(cors());
appAll.use(express.json());

// 确保数据目录存在
async function ensureDataDir() {
    try {
        await fs.mkdir(DATA_DIR, { recursive: true });
    } catch (error) {
        console.error('创建数据目录失败:', error);
    }
}

// 从文件加载数据到内存
async function loadData() {
    try {
        // 加载角色数据
        try {
            const charactersContent = await fs.readFile(CHARACTERS_FILE, 'utf8');
            charactersData = JSON.parse(charactersContent);
            console.log('[数据加载] 角色数据已加载');
        } catch (error) {
            if (error.code === 'ENOENT') {
                // 文件不存在，使用空对象
                charactersData = {};
                console.log('[数据加载] 角色数据文件不存在，使用空数据');
            } else {
                throw error;
            }
        }

        // 加载金币数据
        try {
            const coinsContent = await fs.readFile(COINS_FILE, 'utf8');
            coinsData = JSON.parse(coinsContent);
            console.log('[数据加载] 金币数据已加载');
        } catch (error) {
            if (error.code === 'ENOENT') {
                // 文件不存在，使用空对象
                coinsData = {};
                console.log('[数据加载] 金币数据文件不存在，使用空数据');
            } else {
                throw error;
            }
        }

        // 加载道具数据
        try {
            const inventoryContent = await fs.readFile(INVENTORY_FILE, 'utf8');
            inventoryData = JSON.parse(inventoryContent);
            console.log('[数据加载] 道具数据已加载');
        } catch (error) {
            if (error.code === 'ENOENT') {
                // 文件不存在，使用空对象
                inventoryData = {};
                console.log('[数据加载] 道具数据文件不存在，使用空数据');
            } else {
                throw error;
            }
        }

        // ⭐ 加载技能数据
        try {
            const skillsContent = await fs.readFile(SKILLS_FILE, 'utf8');
            skillsData = JSON.parse(skillsContent);
            console.log('[数据加载] 技能数据已加载');
        } catch (error) {
            if (error.code === 'ENOENT') {
                // 文件不存在，使用空对象
                skillsData = {};
                console.log('[数据加载] 技能数据文件不存在，使用空数据');
            } else {
                throw error;
            }
        }

        // ⭐ 加载装备数据
        try {
            const equipmentContent = await fs.readFile(EQUIPMENT_FILE, 'utf8');
            equipmentData = JSON.parse(equipmentContent);
            console.log('[数据加载] 装备数据已加载');
        } catch (error) {
            if (error.code === 'ENOENT') {
                // 文件不存在，使用空对象
                equipmentData = {};
                console.log('[数据加载] 装备数据文件不存在，使用空数据');
            } else {
                throw error;
            }
        }
    } catch (error) {
        console.error('[数据加载] 加载数据失败:', error);
    }
}

// 保存数据到文件
async function saveCharactersData() {
    try {
        await fs.writeFile(CHARACTERS_FILE, JSON.stringify(charactersData, null, 2), 'utf8');
        console.log('[数据保存] 角色数据已保存');
    } catch (error) {
        console.error('[数据保存] 保存角色数据失败:', error);
    }
}

async function saveInventoryData() {
    try {
        await fs.writeFile(INVENTORY_FILE, JSON.stringify(inventoryData, null, 2), 'utf8');
        console.log('[数据保存] 道具数据已保存');
    } catch (error) {
        console.error('[数据保存] 保存道具数据失败:', error);
    }
}

async function saveCoinsData() {
    try {
        await fs.writeFile(COINS_FILE, JSON.stringify(coinsData, null, 2), 'utf8');
        console.log('[数据保存] 金币数据已保存');
    } catch (error) {
        console.error('[数据保存] 保存金币数据失败:', error);
    }
}

// ⭐ 保存技能数据到文件
async function saveSkillsData() {
    try {
        await fs.writeFile(SKILLS_FILE, JSON.stringify(skillsData, null, 2), 'utf8');
        console.log('[数据保存] 技能数据已保存');
    } catch (error) {
        console.error('[数据保存] 保存技能数据失败:', error);
    }
}

// ⭐ 保存装备数据到文件
async function saveEquipmentData() {
    try {
        await fs.writeFile(EQUIPMENT_FILE, JSON.stringify(equipmentData, null, 2), 'utf8');
        console.log('[数据保存] 装备数据已保存');
    } catch (error) {
        console.error('[数据保存] 保存装备数据失败:', error);
    }
}

// 身份验证中间件（简化版）
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
        // 如果没有token，使用默认用户ID（仅用于测试）
        req.user = { id: 1 };
        return next();
    }

    // 实际应该验证token并获取用户ID
    // 这里简化处理，假设token就是用户ID
    req.user = { id: parseInt(token) || 1 };
    next();
}

// ========== 角色数据API ==========

// GET /api/characters - 获取所有角色数据（仅在端口3001）
appAll.get('/api/characters', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.id;

        // 从内存中获取该用户的所有角色数据
        const userCharacters = charactersData[userId] || {};

        res.json({
            success: true,
            data: userCharacters // 返回 { characterName: data, ... }
        });
    } catch (error) {
        console.error('获取所有角色数据失败:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// GET /api/characters/:characterName - 获取单个角色数据（仅在端口3000）
app.get('/api/characters/:characterName', authenticateToken, async (req, res) => {
    try {
        const { characterName } = req.params;
        const userId = req.user.id;

        // 从内存中获取数据
        const userCharacters = charactersData[userId] || {};
        const characterData = userCharacters[characterName];

        if (!characterData) {
            return res.json({
                success: true,
                data: null // 没有数据，返回null
            });
        }

        // ⭐ 获取技能数据
        const userSkills = skillsData[userId] || {};
        const characterSkills = userSkills[characterName] || [];

        // ⭐ 获取装备数据
        const userEquipment = equipmentData[userId] || {};
        const characterEquipment = userEquipment[characterName] || { slots: [null, null, null] };

        // 合并角色数据 / 技能数据 / 装备数据
        const responseData = {
            ...characterData,
            skills: characterSkills,
            equipment: characterEquipment
        };

        res.json({
            success: true,
            data: responseData
        });
    } catch (error) {
        console.error('获取角色数据失败:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// PUT /api/characters/:characterName - 保存角色数据
app.put('/api/characters/:characterName', authenticateToken, async (req, res) => {
    try {
        const { characterName } = req.params;
        const userId = req.user.id;
        const data = req.body;

        // 确保用户数据对象存在
        if (!charactersData[userId]) {
            charactersData[userId] = {};
        }

        // 保存到内存（包含技能 / 装备数据）
        charactersData[userId][characterName] = {
            level: data.level,
            exp: data.exp,
            baseHp: data.baseHp,
            baseAttack: data.baseAttack,
            baseDefense: data.baseDefense,
            baseSpeed: data.baseSpeed,
            baseCrit: data.baseCrit,
            baseMiss: data.baseMiss,
            skills: data.skills || [], // ⭐ 保存技能数据
            saveTime: data.saveTime || Date.now()
        };

        // 异步保存到文件（不阻塞响应）
        saveCharactersData().catch(err => {
            console.error('保存角色数据到文件失败:', err);
        });

        // ⭐ 如果请求中包含技能数据，也保存技能数据
        if (data.skills && Array.isArray(data.skills)) {
            if (!skillsData[userId]) {
                skillsData[userId] = {};
            }
            skillsData[userId][characterName] = data.skills;
            // 异步保存技能数据到文件
            saveSkillsData().catch(err => {
                console.error('保存技能数据到文件失败:', err);
            });
        }

        // ⭐ 如果请求中包含装备数据，也保存装备数据
        if (data.equipment && data.equipment.slots && Array.isArray(data.equipment.slots)) {
            if (!equipmentData[userId]) {
                equipmentData[userId] = {};
            }
            equipmentData[userId][characterName] = {
                slots: data.equipment.slots
            };
            // 异步保存装备数据到文件
            saveEquipmentData().catch(err => {
                console.error('保存装备数据到文件失败:', err);
            });
        }

        res.json({
            success: true,
            message: "保存成功"
        });
    } catch (error) {
        console.error('保存角色数据失败:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// ⭐ ========== 技能数据API ==========

// GET /api/characters/:characterName/skills - 获取角色技能列表
app.get('/api/characters/:characterName/skills', authenticateToken, async (req, res) => {
    try {
        const { characterName } = req.params;
        const userId = req.user.id;

        // 从内存中获取技能数据
        const userSkills = skillsData[userId] || {};
        const characterSkills = userSkills[characterName] || [];

        res.json({
            success: true,
            data: {
                characterName: characterName,
                skills: characterSkills
            }
        });
    } catch (error) {
        console.error('获取技能数据失败:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// PUT /api/characters/:characterName/skills - 保存角色技能列表
app.put('/api/characters/:characterName/skills', authenticateToken, async (req, res) => {
    try {
        const { characterName } = req.params;
        const userId = req.user.id;
        const { skills } = req.body;

        if (!Array.isArray(skills)) {
            return res.status(400).json({
                success: false,
                message: "技能数据必须是数组"
            });
        }

        // 确保用户数据对象存在
        if (!skillsData[userId]) {
            skillsData[userId] = {};
        }

        // 保存到内存
        skillsData[userId][characterName] = skills;

        // 异步保存到文件（不阻塞响应）
        saveSkillsData().catch(err => {
            console.error('保存技能数据到文件失败:', err);
        });

        res.json({
            success: true,
            message: "技能数据保存成功"
        });
    } catch (error) {
        console.error('保存技能数据失败:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// ⭐ ========== 装备数据API ==========

// GET /api/characters/:characterName/equipment - 获取角色装备数据
app.get('/api/characters/:characterName/equipment', authenticateToken, async (req, res) => {
    try {
        const { characterName } = req.params;
        const userId = req.user.id;

        const userEquipment = equipmentData[userId] || {};
        const characterEquipment = userEquipment[characterName] || { slots: [null, null, null] };

        res.json({
            success: true,
            data: {
                characterName: characterName,
                equipment: characterEquipment
            }
        });
    } catch (error) {
        console.error('获取装备数据失败:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// PUT /api/characters/:characterName/equipment - 保存角色装备数据
app.put('/api/characters/:characterName/equipment', authenticateToken, async (req, res) => {
    try {
        const { characterName } = req.params;
        const userId = req.user.id;
        const { equipment } = req.body;

        if (!equipment || !Array.isArray(equipment.slots)) {
            return res.status(400).json({
                success: false,
                message: "装备数据格式不正确，必须包含 slots 数组"
            });
        }

        // 确保用户数据对象存在
        if (!equipmentData[userId]) {
            equipmentData[userId] = {};
        }

        // 保存到内存
        equipmentData[userId][characterName] = {
            slots: equipment.slots
        };

        // 异步保存到文件（不阻塞响应）
        saveEquipmentData().catch(err => {
            console.error('保存装备数据到文件失败:', err);
        });

        res.json({
            success: true,
            message: "装备数据保存成功"
        });
    } catch (error) {
        console.error('保存装备数据失败:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// ========== 道具数据API ==========

// GET /api/inventory - 获取道具列表
app.get('/api/inventory', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.id;

        // 从内存中获取数据
        const items = inventoryData[userId] || [];

        res.json({
            success: true,
            data: {
                items: items
            }
        });
    } catch (error) {
        console.error('获取道具列表失败:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// PUT /api/inventory - 保存道具列表
app.put('/api/inventory', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.id;
        const { items } = req.body;

        // 保存到内存
        inventoryData[userId] = items || [];

        // 异步保存到文件（不阻塞响应）
        saveInventoryData().catch(err => {
            console.error('保存道具数据到文件失败:', err);
        });

        res.json({
            success: true,
            message: "保存成功"
        });
    } catch (error) {
        console.error('保存道具列表失败:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// ========== 数据管理API（可选） ==========

// GET /api/admin/data - 查看所有数据（用于调试）
app.get('/api/admin/data', (req, res) => {
    res.json({
        success: true,
        data: {
            characters: charactersData,
            inventory: inventoryData,
            coins: coinsData,     // 金币数据
            skills: skillsData,   // ⭐ 技能数据
            equipment: equipmentData // ⭐ 装备数据
        }
    });
});

// POST /api/admin/reset - 重置所有数据（用于测试）
app.post('/api/admin/reset', async (req, res) => {
    charactersData = {};
    inventoryData = {};
    coinsData = {};
    skillsData = {};    // ⭐ 清空技能数据
    equipmentData = {}; // ⭐ 清空装备数据
    await saveCharactersData();
    await saveInventoryData();
    await saveCoinsData();
    await saveSkillsData();    // ⭐ 保存空技能数据到文件
    await saveEquipmentData(); // ⭐ 保存空装备数据到文件
    res.json({
        success: true,
        message: "所有数据已重置"
    });
});

// ========== 金币系统API ==========

// GET /api/coins - 获取金币数量
app.get('/api/coins', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.id;

        // 从内存中获取数据；仅当该用户没有记录时才用默认值，0 要保留为 0
        const coins = (userId in coinsData) ? coinsData[userId] : 1000;

        res.json({
            success: true,
            coins: coins
        });
    } catch (error) {
        console.error('获取金币失败:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// POST /api/coins/add - 增加金币
app.post('/api/coins/add', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.id;
        const { amount } = req.body;

        if (!amount || amount <= 0) {
            return res.status(400).json({
                success: false,
                message: '增加数量无效'
            });
        }

        // 获取当前金币（仅无记录时用默认值，0 保留为 0）
        const currentCoins = (userId in coinsData) ? coinsData[userId] : 1000;
        const newCoins = currentCoins + amount;

        // 保存到内存
        coinsData[userId] = newCoins;

        // 异步保存到文件
        saveCoinsData().catch(err => {
            console.error('保存金币数据到文件失败:', err);
        });

        res.json({
            success: true,
            coins: newCoins,
            added: amount
        });
    } catch (error) {
        console.error('增加金币失败:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// POST /api/coins/spend - 减少金币（购买商品）
app.post('/api/coins/spend', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.id;
        const { amount } = req.body;

        if (!amount || amount <= 0) {
            return res.status(400).json({
                success: false,
                message: '减少数量无效'
            });
        }

        // 获取当前金币（仅无记录时用默认值，0 保留为 0）
        const currentCoins = (userId in coinsData) ? coinsData[userId] : 1000;

        // 检查金币是否足够
        if (currentCoins < amount) {
            return res.status(400).json({
                success: false,
                error: 'insufficient_coins',
                currentCoins: currentCoins,
                required: amount,
                message: '金币不足'
            });
        }

        const newCoins = currentCoins - amount;

        // 保存到内存
        coinsData[userId] = newCoins;

        // 异步保存到文件
        saveCoinsData().catch(err => {
            console.error('保存金币数据到文件失败:', err);
        });

        res.json({
            success: true,
            coins: newCoins,
            spent: amount
        });
    } catch (error) {
        console.error('减少金币失败:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// ========== 商城API ==========

// POST /api/shop/purchase - 购买商品
app.post('/api/shop/purchase', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.id;
        const { shopItemId } = req.body;

        if (!shopItemId) {
            return res.status(400).json({
                success: false,
                message: '商品ID无效'
            });
        }

        // 这里应该从ShopConfig获取商品信息，但服务器端没有ShopConfig
        // 所以客户端需要传递完整的商品信息
        const { itemId, count, price } = req.body;

        if (!itemId || !count || !price) {
            return res.status(400).json({
                success: false,
                message: '商品信息不完整'
            });
        }

        // 检查金币是否足够（仅无记录时用默认值，0 保留为 0）
        const currentCoins = (userId in coinsData) ? coinsData[userId] : 1000;
        if (currentCoins < price) {
            return res.status(400).json({
                success: false,
                error: 'insufficient_coins',
                currentCoins: currentCoins,
                required: price,
                message: '金币不足'
            });
        }

        // 扣除金币
        const newCoins = currentCoins - price;
        coinsData[userId] = newCoins;

        // 添加道具到背包
        const items = inventoryData[userId] || [];
        const existingItemIndex = items.findIndex(item => item.itemId === itemId);

        if (existingItemIndex >= 0) {
            // 如果道具已存在，增加数量
            items[existingItemIndex].count += count;
        } else {
            // 如果道具不存在，添加新道具
            items.push({ itemId, count });
        }

        inventoryData[userId] = items;

        // 异步保存到文件
        saveCoinsData().catch(err => {
            console.error('保存金币数据到文件失败:', err);
        });
        saveInventoryData().catch(err => {
            console.error('保存道具数据到文件失败:', err);
        });

        res.json({
            success: true,
            coins: newCoins,
            items: items,
            purchased: {
                itemId,
                count
            }
        });
    } catch (error) {
        console.error('购买商品失败:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// ========== 启动服务器 ==========

async function startServer() {
    // 确保数据目录存在
    await ensureDataDir();

    // 加载数据到内存
    await loadData();

    // 启动单个角色数据服务器（端口3000）
    const server = app.listen(PORT, () => {
        console.log(`========================================`);
        console.log(`✅ 单个角色数据服务器运行在 http://localhost:${PORT}`);
        console.log(`数据目录: ${DATA_DIR}`);
        console.log(`角色数据文件: ${CHARACTERS_FILE}`);
        console.log(`道具数据文件: ${INVENTORY_FILE}`);
        console.log(`装备数据文件: ${EQUIPMENT_FILE}`);
        console.log(`========================================`);
        console.log(`\nAPI端点（端口${PORT}）：`);
        console.log(`  GET  /api/characters/:name        - 获取单个角色数据`);
        console.log(`  PUT  /api/characters/:name        - 保存角色数据`);
        console.log(`  GET  /api/inventory               - 获取道具列表`);
        console.log(`  PUT  /api/inventory               - 保存道具列表`);
        console.log(`  GET  /api/coins                  - 获取金币数量`);
        console.log(`  POST /api/coins/add               - 增加金币`);
        console.log(`  POST /api/coins/spend            - 减少金币`);
        console.log(`  POST /api/shop/purchase          - 购买商品`);
        console.log(`  GET  /api/characters/:name/skills - 获取角色技能列表`);
        console.log(`  PUT  /api/characters/:name/skills - 保存角色技能列表`);
        console.log(`  GET  /api/characters/:name/equipment - 获取角色装备数据`);
        console.log(`  PUT  /api/characters/:name/equipment - 保存角色装备数据`);
        console.log(`  GET  /api/admin/data             - 查看所有数据（调试）`);
        console.log(`  POST /api/admin/reset             - 重置所有数据（测试）`);
        console.log(`========================================\n`);
    });

    // 启动所有角色数据服务器（端口3001）- 使用独立的app实例
    const serverAll = appAll.listen(PORT_ALL, () => {
        console.log(`========================================`);
        console.log(`✅ 所有角色数据服务器运行在 http://localhost:${PORT_ALL}`);
        console.log(`========================================`);
        console.log(`\nAPI端点（端口${PORT_ALL}）：`);
        console.log(`  GET  /api/characters              - 获取所有角色数据`);
        console.log(`========================================\n`);
    });

    // 处理单个角色数据服务器端口占用错误
    server.on('error', (error) => {
        if (error.code === 'EADDRINUSE') {
            console.error(`\n❌ 错误: 端口 ${PORT} 已被占用！`);
            console.error(`\n解决方案：`);
            console.error(`1. 关闭占用端口的进程：`);
            if (process.platform === 'win32') {
                console.error(`   Windows: netstat -ano | findstr :${PORT}`);
                console.error(`   然后: taskkill /PID <PID> /F`);
            } else {
                console.error(`   Mac/Linux: lsof -i :${PORT}`);
                console.error(`   然后: kill -9 <PID>`);
            }
            console.error(`\n2. 或者修改 server.js 中的 PORT 为其他端口（如3001）`);
            console.error(`\n3. 或者等待30秒后自动重试其他端口...\n`);

            // 自动尝试其他端口（可选）
            const alternativePort = PORT + 1;
            console.log(`正在尝试端口 ${alternativePort}...`);
            const altServer = app.listen(alternativePort, () => {
                console.log(`========================================`);
                console.log(`✅ 服务器运行在 http://localhost:${alternativePort}`);
                console.log(`⚠️  注意：端口已从 ${PORT} 改为 ${alternativePort}`);
                console.log(`⚠️  请更新客户端配置中的服务器地址！`);
                console.log(`数据目录: ${DATA_DIR}`);
                console.log(`角色数据文件: ${CHARACTERS_FILE}`);
                console.log(`道具数据文件: ${INVENTORY_FILE}`);
                console.log(`========================================\n`);
            });

            altServer.on('error', (altError) => {
                console.error(`端口 ${alternativePort} 也被占用，请手动选择可用端口`);
                process.exit(1);
            });
        } else {
            console.error('单个角色数据服务器启动失败:', error);
            process.exit(1);
        }
    });

    // 处理所有角色数据服务器端口占用错误
    serverAll.on('error', (error) => {
        if (error.code === 'EADDRINUSE') {
            console.error(`\n❌ 错误: 所有角色数据服务器端口 ${PORT_ALL} 已被占用！`);
            console.error(`\n解决方案：`);
            console.error(`1. 关闭占用端口的进程：`);
            if (process.platform === 'win32') {
                console.error(`   Windows: netstat -ano | findstr :${PORT_ALL}`);
                console.error(`   然后: taskkill /PID <PID> /F`);
            } else {
                console.error(`   Mac/Linux: lsof -i :${PORT_ALL}`);
                console.error(`   然后: kill -9 <PID>`);
            }
            console.error(`\n2. 或者修改 server.js 中的 PORT_ALL 为其他端口（如3002）`);
            console.error(`\n3. 或者等待30秒后自动重试其他端口...\n`);

            // 自动尝试其他端口（可选）
            const alternativePort = PORT_ALL + 1;
            console.log(`正在尝试端口 ${alternativePort}...`);
            const altServerAll = appAll.listen(alternativePort, () => {
                console.log(`========================================`);
                console.log(`✅ 所有角色数据服务器运行在 http://localhost:${alternativePort}`);
                console.log(`⚠️  注意：端口已从 ${PORT_ALL} 改为 ${alternativePort}`);
                console.log(`⚠️  请更新客户端配置中的服务器地址！`);
                console.log(`========================================\n`);
            });

            altServerAll.on('error', (altError) => {
                console.error(`端口 ${alternativePort} 也被占用，请手动选择可用端口`);
                process.exit(1);
            });
        } else {
            console.error('所有角色数据服务器启动失败:', error);
            process.exit(1);
        }
    });

    // 定期保存数据（每30秒自动保存一次，防止数据丢失）
    setInterval(async () => {
        await saveCharactersData();
        await saveInventoryData();
        await saveCoinsData();
        await saveSkillsData(); // ⭐ 自动保存技能数据
        console.log('[自动保存] 数据已自动保存到文件');
    }, 30000); // 30秒

    // 优雅关闭：程序退出时保存数据
    process.on('SIGINT', async () => {
        console.log('\n[关闭] 正在保存数据...');
        await saveCharactersData();
        await saveInventoryData();
        await saveCoinsData();
        await saveSkillsData(); // ⭐ 关闭时保存技能数据
        console.log('[关闭] 数据已保存，服务器关闭');
        process.exit(0);
    });

    process.on('SIGTERM', async () => {
        console.log('\n[关闭] 正在保存数据...');
        await saveCharactersData();
        await saveInventoryData();
        await saveCoinsData();
        await saveSkillsData(); // ⭐ 关闭时保存技能数据
        console.log('[关闭] 数据已保存，服务器关闭');
        process.exit(0);
    });
}

// 启动
startServer().catch(error => {
    console.error('启动服务器失败:', error);
    process.exit(1);
});
