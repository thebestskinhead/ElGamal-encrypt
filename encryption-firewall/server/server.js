const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
const port = 3000;

let p, a, b, n, k;

// 生成大素数 p 和原根 a
function generateKeys() {
    p = 23; // 示例素数
    a = 5;  // 示例原根
}

// 密钥交换阶段
app.post('/handshake', (req, res) => {
    n = Math.floor(Math.random() * 10) + 1; // 客户端私钥
    b = Math.pow(a, n) % p; // 计算公钥
    res.json({ p, a, b });
});

// 加密通信阶段
app.post('/send', (req, res) => {
    const { message } = req.body;
    k = Math.floor(Math.random() * 10) + 1; // 服务器私钥
    const y1 = Math.pow(a, k) % p; // 计算 y1
    const x = Buffer.from(message).toString('hex'); // 消息转换为数字
    const y2 = (parseInt(x, 16) * Math.pow(b, k)) % p; // 计算 y2
    res.json({ y1, y2 });
});

// 解密消息
app.post('/receive', (req, res) => {
    const { y1, y2 } = req.body;
    const decryptedMessage = (y1 * Math.pow(y2, n)) % p; // 恢复原始消息
    res.send(Buffer.from(decryptedMessage.toString(16), 'hex').toString());
});

generateKeys();

app.use(bodyParser.json());
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});