import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { getOnlineClients, handleMessage } from './routes/index';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

app.use(express.json());

io.on('connection', (socket) => {
    console.log('A client connected:', socket.id);

    // 处理客户端的消息
    socket.on('message', (data) => {
        handleMessage(data, socket);
    });

    // 发送在线客户端列表
    socket.on('getOnlineClients', () => {
        const onlineClients = getOnlineClients(io);
        socket.emit('onlineClients', onlineClients);
    });

    socket.on('disconnect', () => {
        console.log('A client disconnected:', socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});