import crypto from 'crypto';

const generatePrimeAndRoot = () => {
    const p = 23; // 示例大素数
    const a = 5;  // 示例原根
    return { p, a };
};

const generatePrivateKey = () => {
    return crypto.randomInt(1, 100); // 生成随机私钥
};

const calculatePublicKey = (a, n, p) => {
    return (a ** n) % p; // 计算公钥
};

const calculateSharedSecret = (b, n, p) => {
    return (b ** n) % p; // 计算共享密钥
};

const encryptMessage = (message, k, b, p) => {
    const x = Buffer.from(message).toString('hex'); // 将消息转换为数字
    const y1 = (5 ** k) % p; // 计算 y1
    const y2 = (parseInt(x, 16) * (b ** k) % p); // 计算 y2
    return { y1, y2 }; // 返回加密结果
};

const decryptMessage = (y1, y2, n, p) => {
    const x = (y1 * (y2 ** n) % p); // 恢复原始消息
    return Buffer.from(x.toString(16), 'hex').toString(); // 转换为字符串
};

export {
    generatePrimeAndRoot,
    generatePrivateKey,
    calculatePublicKey,
    calculateSharedSecret,
    encryptMessage,
    decryptMessage
};