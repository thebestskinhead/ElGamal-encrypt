import crypto from 'crypto';

export class EncryptionService {
    private p: number;
    private a: number;
    private privateKey: number;
    private publicKey: number;
    private sharedSecret: number;

    constructor() {
        this.p = this.generateLargePrime();
        this.a = this.generatePrimitiveRoot(this.p);
    }

    private generateLargePrime(): number {
        // 生成一个大素数 p
        return 23; // 示例素数，实际应用中应生成更大的素数
    }

    private generatePrimitiveRoot(p: number): number {
        // 生成原根 a
        return 5; // 示例原根，实际应用中应根据 p 计算
    }

    public generateKeys(privateKey: number): number {
        this.privateKey = privateKey;
        this.publicKey = this.modularExponentiation(this.a, this.privateKey, this.p);
        return this.publicKey;
    }

    public computeSharedSecret(receivedPublicKey: number): number {
        this.sharedSecret = this.modularExponentiation(receivedPublicKey, this.privateKey, this.p);
        return this.sharedSecret;
    }

    public encrypt(message: string): { y1: number, y2: number } {
        const k = crypto.randomInt(1, this.p); // 随机生成私钥 k
        const y1 = this.modularExponentiation(this.a, k, this.p);
        const x = this.stringToNumber(message);
        const y2 = (x * this.modularExponentiation(this.publicKey, k, this.p)) % this.p;
        return { y1, y2 };
    }

    public decrypt(y1: number, y2: number): string {
        const x = (y1 * this.modularExponentiation(y2, this.p - 1 - this.privateKey, this.p)) % this.p;
        return this.numberToString(x);
    }

    private modularExponentiation(base: number, exponent: number, modulus: number): number {
        let result = 1;
        base = base % modulus;
        while (exponent > 0) {
            if (exponent % 2 === 1) {
                result = (result * base) % modulus;
            }
            exponent = Math.floor(exponent / 2);
            base = (base * base) % modulus;
        }
        return result;
    }

    private stringToNumber(str: string): number {
        return Buffer.from(str).reduce((acc, val) => acc * 256 + val, 0);
    }

    private numberToString(num: number): string {
        const arr = [];
        while (num > 0) {
            arr.push(num % 256);
            num = Math.floor(num / 256);
        }
        return Buffer.from(arr.reverse()).toString();
    }
}