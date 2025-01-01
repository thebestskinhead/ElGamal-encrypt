// client.js
const socket = new WebSocket('ws://localhost:8080'); // 连接到防火墙

let p, a, b, n; // 大素数p，原根a，客户端公钥b，私钥n

socket.onopen = () => {
    // 服务器选择大素数p和原根a
    p = 23; // 示例素数
    a = 5;  // 示例原根
    socket.send(JSON.stringify({ type: 'init', p, a }));
};

socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    
    if (message.type === 'publicKey') {
        // 接收到服务器的公钥b
        b = message.b;
        n = Math.floor(Math.random() * (p - 1)); // 生成私钥n
        const clientPublicKey = Math.pow(a, n) % p; // 计算公钥b
        socket.send(JSON.stringify({ type: 'clientPublicKey', b: clientPublicKey }));
    } else if (message.type === 'encryptedMessage') {
        // 解密消息
        const { y1, y2 } = message;
        const decryptedMessage = (y2 * Math.pow(y1, (p - 1 - n)) % p) % p;
        console.log('解密后的消息:', decryptedMessage);
    }
};

// 发送消息
function sendMessage(message) {
    const k = Math.floor(Math.random() * (p - 1)); // 生成私钥k
    const y1 = Math.pow(a, k) % p; // 计算y1
    const x = message; // 将消息转换为数字
    const y2 = (x * Math.pow(b, k)) % p; // 计算y2
    socket.send(JSON.stringify({ type: 'sendMessage', y1, y2 }));
}

// 示例：发送消息
document.getElementById('sendButton').onclick = () => {
    const message = parseInt(document.getElementById('messageInput').value);
    sendMessage(message);
};