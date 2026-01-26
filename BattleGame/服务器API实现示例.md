# 服务器API实现示例

## 说明

这是**服务器端**的代码示例，用于接收和存储游戏的角色数据和道具数据。

**重要提示：**
- 这些代码**不是**在Cocos Creator中运行的
- 这些代码需要在**服务器**上运行（如Node.js、Python、Java等）
- 如果你暂时没有服务器，可以**跳过这一步**，继续使用本地模式

---

## 选项1：暂时不使用服务器（推荐用于开发测试）

如果你暂时没有服务器，**不需要做任何修改**，游戏会继续使用本地存储（localStorage），功能完全正常。

客户端代码已经自动处理了：
- 本地模式：数据保存在浏览器本地
- 服务器模式：数据保存在服务器（需要实现API）
- 混合模式：本地+服务器（需要实现API）

**默认是本地模式，无需配置即可使用！**

---

## 选项2：实现服务器API（如果你有服务器）

如果你已经有服务器，或者想要实现云端存储，可以按照以下示例实现API。

### 技术栈选择

你可以使用任何后端技术：
- **Node.js + Express**（推荐，JavaScript，容易上手）
- **Python + Flask/Django**
- **Java + Spring Boot**
- **PHP + Laravel**
- 等等...

---

## Node.js + Express 实现示例

### 1. 安装依赖

```bash
npm init -y
npm install express mysql2 cors dotenv
```

### 2. 创建数据库表

```sql
-- 角色数据表
CREATE TABLE characters (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    character_name VARCHAR(50) NOT NULL,
    level INT DEFAULT 1,
    exp INT DEFAULT 0,
    base_hp INT DEFAULT 100,
    base_attack INT DEFAULT 1,
    base_defense INT DEFAULT 1,
    base_speed INT DEFAULT 1,
    base_crit DECIMAL(5,2) DEFAULT 0,
    base_miss DECIMAL(5,2) DEFAULT 0,
    save_time BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uk_user_character (user_id, character_name)
);

-- 道具数据表
CREATE TABLE inventory (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    item_id VARCHAR(50) NOT NULL,
    count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uk_user_item (user_id, item_id)
);
```

### 3. 创建服务器文件 `server.js`

```javascript
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());

// 数据库连接
const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'game_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// 身份验证中间件（简化版，实际应该使用JWT等）
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

// GET /api/characters/:characterName - 获取角色数据
app.get('/api/characters/:characterName', authenticateToken, async (req, res) => {
    try {
        const { characterName } = req.params;
        const userId = req.user.id;
        
        const [rows] = await db.query(
            'SELECT * FROM characters WHERE user_id = ? AND character_name = ?',
            [userId, characterName]
        );
        
        if (rows.length === 0) {
            return res.json({
                success: true,
                data: null // 没有数据，返回null
            });
        }
        
        const data = rows[0];
        res.json({
            success: true,
            data: {
                level: data.level,
                exp: data.exp,
                baseHp: data.base_hp,
                baseAttack: data.base_attack,
                baseDefense: data.base_defense,
                baseSpeed: data.base_speed,
                baseCrit: data.base_crit,
                baseMiss: data.base_miss,
                saveTime: data.save_time
            }
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
        const { level, exp, baseHp, baseAttack, baseDefense, baseSpeed, baseCrit, baseMiss, saveTime } = req.body;
        
        await db.query(
            `INSERT INTO characters (user_id, character_name, level, exp, base_hp, base_attack, base_defense, base_speed, base_crit, base_miss, save_time)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
             ON DUPLICATE KEY UPDATE
             level = VALUES(level),
             exp = VALUES(exp),
             base_hp = VALUES(base_hp),
             base_attack = VALUES(base_attack),
             base_defense = VALUES(base_defense),
             base_speed = VALUES(base_speed),
             base_crit = VALUES(base_crit),
             base_miss = VALUES(base_miss),
             save_time = VALUES(save_time)`,
            [userId, characterName, level, exp, baseHp, baseAttack, baseDefense, baseSpeed, baseCrit, baseMiss, saveTime || Date.now()]
        );
        
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
        
        const [rows] = await db.query(
            'SELECT item_id as itemId, count FROM inventory WHERE user_id = ?',
            [userId]
        );
        
        res.json({
            success: true,
            data: {
                items: rows
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
        
        // 使用事务确保数据一致性
        const connection = await db.getConnection();
        await connection.beginTransaction();
        
        try {
            // 删除所有现有道具
            await connection.query('DELETE FROM inventory WHERE user_id = ?', [userId]);
            
            // 插入新道具
            if (items && items.length > 0) {
                const values = items.map(item => [userId, item.itemId, item.count]);
                await connection.query(
                    'INSERT INTO inventory (user_id, item_id, count) VALUES ?',
                    [values]
                );
            }
            
            await connection.commit();
            connection.release();
            
            res.json({
                success: true,
                message: "保存成功"
            });
        } catch (error) {
            await connection.rollback();
            connection.release();
            throw error;
        }
    } catch (error) {
        console.error('保存道具列表失败:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});
```

### 4. 创建 `.env` 文件

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=game_db
```

### 5. 运行服务器

```bash
node server.js
```

---

## Python + Flask 实现示例

### 1. 安装依赖

```bash
pip install flask flask-cors pymysql
```

### 2. 创建 `server.py`

```python
from flask import Flask, request, jsonify
from flask_cors import CORS
import pymysql
from functools import wraps

app = Flask(__name__)
CORS(app)

# 数据库配置
DB_CONFIG = {
    'host': 'localhost',
    'user': 'root',
    'password': 'your_password',
    'database': 'game_db',
    'charset': 'utf8mb4'
}

def get_db():
    return pymysql.connect(**DB_CONFIG)

def authenticate_token(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        auth_header = request.headers.get('Authorization')
        if auth_header:
            token = auth_header.split(' ')[1] if ' ' in auth_header else auth_header
            request.user_id = int(token) if token.isdigit() else 1
        else:
            request.user_id = 1  # 默认用户ID
        return f(*args, **kwargs)
    return decorated_function

@app.route('/api/characters/<character_name>', methods=['GET'])
@authenticate_token
def get_character(character_name):
    try:
        conn = get_db()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute(
            'SELECT * FROM characters WHERE user_id = %s AND character_name = %s',
            (request.user_id, character_name)
        )
        row = cursor.fetchone()
        cursor.close()
        conn.close()
        
        if not row:
            return jsonify({'success': True, 'data': None})
        
        return jsonify({
            'success': True,
            'data': {
                'level': row['level'],
                'exp': row['exp'],
                'baseHp': row['base_hp'],
                'baseAttack': row['base_attack'],
                'baseDefense': row['base_defense'],
                'baseSpeed': row['base_speed'],
                'baseCrit': float(row['base_crit']),
                'baseMiss': float(row['base_miss']),
                'saveTime': row['save_time']
            }
        })
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/api/characters/<character_name>', methods=['PUT'])
@authenticate_token
def save_character(character_name):
    try:
        data = request.json
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute(
            '''INSERT INTO characters (user_id, character_name, level, exp, base_hp, base_attack, 
               base_defense, base_speed, base_crit, base_miss, save_time)
               VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
               ON DUPLICATE KEY UPDATE
               level = VALUES(level),
               exp = VALUES(exp),
               base_hp = VALUES(base_hp),
               base_attack = VALUES(base_attack),
               base_defense = VALUES(base_defense),
               base_speed = VALUES(base_speed),
               base_crit = VALUES(base_crit),
               base_miss = VALUES(base_miss),
               save_time = VALUES(save_time)''',
            (request.user_id, character_name, data.get('level'), data.get('exp'),
             data.get('baseHp'), data.get('baseAttack'), data.get('baseDefense'),
             data.get('baseSpeed'), data.get('baseCrit'), data.get('baseMiss'),
             data.get('saveTime', int(time.time() * 1000)))
        )
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({'success': True, 'message': '保存成功'})
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/api/inventory', methods=['GET'])
@authenticate_token
def get_inventory():
    try:
        conn = get_db()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute(
            'SELECT item_id as itemId, count FROM inventory WHERE user_id = %s',
            (request.user_id,)
        )
        rows = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify({
            'success': True,
            'data': {'items': rows}
        })
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/api/inventory', methods=['PUT'])
@authenticate_token
def save_inventory():
    try:
        data = request.json
        items = data.get('items', [])
        conn = get_db()
        cursor = conn.cursor()
        
        # 删除现有道具
        cursor.execute('DELETE FROM inventory WHERE user_id = %s', (request.user_id,))
        
        # 插入新道具
        if items:
            values = [(request.user_id, item['itemId'], item['count']) for item in items]
            cursor.executemany(
                'INSERT INTO inventory (user_id, item_id, count) VALUES (%s, %s, %s)',
                values
            )
        
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({'success': True, 'message': '保存成功'})
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
```

---

## 配置客户端连接服务器

在Cocos Creator中，修改 `MainMenuScene.js` 或创建配置脚本：

```javascript
const ServerConfig = require("ServerConfig");
const ItemDataAdapter = require("ItemDataAdapter");
const CharacterDataAdapter = require("CharacterDataAdapter");

// 初始化服务器配置
ServerConfig.init({
    baseURL: "http://localhost:3000/api", // 你的服务器地址
    timeout: 5000,
    retryCount: 3,
    auth: {
        enabled: true,
        token: "1" // 用户ID或token
    }
});

// 切换到混合模式（推荐）
ItemDataAdapter.setStorageMode("hybrid");
CharacterDataAdapter.setStorageMode("hybrid");
```

---

## 总结

1. **如果你暂时没有服务器**：不需要做任何修改，游戏会使用本地存储，功能完全正常。

2. **如果你有服务器**：按照上面的示例实现API接口，然后配置客户端连接服务器。

3. **推荐流程**：
   - 开发阶段：使用本地模式（默认）
   - 测试阶段：使用混合模式（本地+服务器）
   - 生产阶段：使用服务器模式

有任何问题可以随时询问！
