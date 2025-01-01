// renderer.ts 文件处理客户端的渲染逻辑，包括与用户界面的交互。

import { ipcRenderer } from 'electron';
import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import Login from './components/Login';

const App = () => {
    const [onlineClients, setOnlineClients] = useState([]);
    const [userId, setUserId] = useState(null);
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        ipcRenderer.on('onlineClients', (event, clients) => {
            setOnlineClients(clients);
        });

        ipcRenderer.on('userId', (event, id) => {
            setUserId(id);
        });

        return () => {
            ipcRenderer.removeAllListeners('onlineClients');
            ipcRenderer.removeAllListeners('userId');
        };
    }, []);

    const handleNicknameChange = (newNickname) => {
        setNickname(newNickname);
        // 发送昵称到服务器
        ipcRenderer.send('setNickname', newNickname);
    };

    return (
        <div>
            {userId ? (
                <>
                    <Sidebar clients={onlineClients} />
                    <ChatWindow userId={userId} nickname={nickname} />
                </>
            ) : (
                <Login onNicknameChange={handleNicknameChange} />
            )}
        </div>
    );
};

export default App;