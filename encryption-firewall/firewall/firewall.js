const net = require('net');
const crypto = require('crypto');

// 生成大素数 p 和原根 a
function generatePrimeAndRoot() {
    const p = 23; // 示例素数
    const a = 5;  // 示例原根
    return { p, a };
}

// 防火墙类
class Firewall {
    constructor() {
        this.clients = [];
        const { p, a } = generatePrimeAndRoot();
        this.p = p;
        this.a = a;
    }

    start(port) {
        const server = net.createServer((socket) => {
            this.clients.push(socket);
            console.log('客户端已连接');

            socket.on('data', (data) => {
                this.handleClientMessage(data.toString(), socket);
            });

            socket.on('end', () => {
                console.log('客户端已断开连接');
                this.clients = this.clients.filter(client => client !== socket);
            });
        });

        server.listen(port, () => {
            console.log(`防火墙正在监听 ${port} 端口`);
        });
    }

    handleClientMessage(message, socket) {
        // 处理客户端消息并转发
        console.log(`接收到消息: ${message}`);
        this.clients.forEach(client => {
            if (client !== socket) {
                client.write(message);
            }
        });
    }
}

// 启动防火墙
const firewall = new Firewall();
firewall.start(8080); // 监听8080端口