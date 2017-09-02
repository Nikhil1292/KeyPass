import { Injectable } from '@angular/core';
import { AppSetting } from './app.setting';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class CryptoService {

    private KEY = CryptoJS.enc.Utf8.parse(AppSetting.CRYPTO_KEY);
    private IV = CryptoJS.enc.Utf8.parse(AppSetting.IV_KEY);

    // Encrept message
    Encrypt(message: string): string {

        let encrepted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(message), this.KEY,
            {
                keySize: 128 / 8,
                iv: this.IV,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });

        let encrepetedMessage = (encrepted != null) ? encrepted.toString() : "";

        return encrepetedMessage;
    }

    // Decrept message.
    Decrypt(encryptedMessage: string): string {
        let decrypted = CryptoJS.AES.decrypt(encryptedMessage, this.KEY, {
            keySize: 128 / 8,
            iv: this.IV,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });

        let result = (decrypted != null) ? decrypted.toString(CryptoJS.enc.Utf8) : "";

        return result;
    }
}
