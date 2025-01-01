export interface Client {
    id: string;
    nickname: string;
    isOnline: boolean;
}

export interface Message {
    senderId: string;
    receiverId: string;
    content: string;
    timestamp: number;
}

export interface EncryptionKeys {
    p: number;
    a: number;
    b: number;
    n: number;
}

export interface EncryptedMessage {
    y1: number;
    y2: number;
}