import React, { useState } from 'react';

const Login: React.FC<{ onLogin: (nickname: string) => void }> = ({ onLogin }) => {
    const [nickname, setNickname] = useState('');

    const handleLogin = () => {
        if (nickname.trim()) {
            onLogin(nickname);
        }
    };

    return (
        <div className="login-container">
            <h2>登录</h2>
            <input
                type="text"
                placeholder="请输入昵称"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
            />
            <button onClick={handleLogin}>登录</button>
        </div>
    );
};

export default Login;