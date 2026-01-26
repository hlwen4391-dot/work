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

// 内存中的数据存储
let charactersData = {}; // { userId: { characterName: data } }
let inventoryData = {}; // { userId: items[] }

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
        
        res.json({
            success: true,
            data: characterData
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
        
        // 保存到内存
        charactersData[userId][characterName] = {
            level: data.level,
            exp: data.exp,
            baseHp: data.baseHp,
            baseAttack: data.baseAttack,
            baseDefense: data.baseDefense,
            baseSpeed: data.baseSpeed,
            baseCrit: data.baseCrit,
            baseMiss: data.baseMiss,
            saveTime: data.saveTime || Date.now()
        };
        
        // 异步保存到文件（不阻塞响应）
        saveCharactersData().catch(err => {
            console.error('保存角色数据到文件失败:', err);
        });
        
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
            inventory: inventoryData
        }
    });
});

// POST /api/admin/reset - 重置所有数据（用于测试）
app.post('/api/admin/reset', async (req, res) => {
    charactersData = {};
    inventoryData = {};
    await saveCharactersData();
    await saveInventoryData();
    res.json({
        success: true,
        message: "所有数据已重置"
    });
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
        console.log(`========================================`);
        console.log(`\nAPI端点（端口${PORT}）：`);
        console.log(`  GET  /api/characters/:name        - 获取单个角色数据`);
        console.log(`  PUT  /api/characters/:name        - 保存角色数据`);
        console.log(`  GET  /api/inventory               - 获取道具列表`);
        console.log(`  PUT  /api/inventory               - 保存道具列表`);
        console.log(`  GET  /api/admin/data              - 查看所有数据（调试）`);
        console.log(`  POST /api/admin/reset              - 重置所有数据（测试）`);
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
            const altServer = app.listen(alternativePort, () => {
                console.log(`========================================`);
                console.log(`✅ 所有角色数据服务器运行在 http://localhost:${alternativePort}`);
                console.log(`⚠️  注意：端口已从 ${PORT_ALL} 改为 ${alternativePort}`);
                console.log(`⚠️  请更新客户端配置中的服务器地址！`);
                console.log(`========================================\n`);
            });
            
            altServer.on('error', (altError) => {
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
        console.log('[自动保存] 数据已自动保存到文件');
    }, 30000); // 30秒
    
    // 优雅关闭：程序退出时保存数据
    process.on('SIGINT', async () => {
        console.log('\n[关闭] 正在保存数据...');
        await saveCharactersData();
        await saveInventoryData();
        console.log('[关闭] 数据已保存，服务器关闭');
        process.exit(0);
    });
    
    process.on('SIGTERM', async () => {
        console.log('\n[关闭] 正在保存数据...');
        await saveCharactersData();
        await saveInventoryData();
        console.log('[关闭] 数据已保存，服务器关闭');
        process.exit(0);
    });
}

// 启动
startServer().catch(error => {
    console.error('启动服务器失败:', error);
    process.exit(1);
});
