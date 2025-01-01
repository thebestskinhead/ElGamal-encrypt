import React, { useEffect, useState } from 'react';
import { sendMessage, receiveMessage } from '../services/encryptionService';

const ChatWindow = ({ currentUser, onlineUsers }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const handleIncomingMessage = (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        };

        receiveMessage(handleIncomingMessage);

        return () => {
            // 清理接收消息的订阅
        };
    }, []);

    const handleSendMessage = () => {
        if (message.trim()) {
            sendMessage(message, currentUser);
            setMessages((prevMessages) => [...prevMessages, { sender: currentUser, content: message }]);
            setMessage('');
        }
    };

    return (
        <div className="chat-window">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.sender === currentUser ? 'my-message' : 'incoming-message'}>
                        <strong>{msg.sender}:</strong> {msg.content}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="输入消息..."
            />
            <button onClick={handleSendMessage}>发送</button>
        </div>
    );
};

export default ChatWindow;