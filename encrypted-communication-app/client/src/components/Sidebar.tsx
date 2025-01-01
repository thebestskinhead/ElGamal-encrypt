import React from 'react';

interface Client {
    id: string;
    nickname: string;
}

interface SidebarProps {
    clients: Client[];
    onClientSelect: (clientId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ clients, onClientSelect }) => {
    return (
        <div className="sidebar">
            <h2>在线客户端</h2>
            <ul>
                {clients.map(client => (
                    <li key={client.id} onClick={() => onClientSelect(client.id)}>
                        {client.nickname}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;