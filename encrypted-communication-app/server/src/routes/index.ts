import express from 'express';
import { getOnlineClients, forwardMessage } from '../services/encryptionService';

const router = express.Router();

// 获取在线客户端列表
router.get('/online-clients', (req, res) => {
    const clients = getOnlineClients();
    res.json(clients);
});

// 转发消息
router.post('/send-message', (req, res) => {
    const { recipientId, message } = req.body;
    const success = forwardMessage(recipientId, message);
    if (success) {
        res.status(200).send('Message sent successfully');
    } else {
        res.status(400).send('Failed to send message');
    }
});

export default router;