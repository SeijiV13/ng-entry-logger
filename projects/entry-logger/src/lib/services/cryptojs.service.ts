import { Injectable, Inject } from '@angular/core';
import { ConfigService } from './config.service';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class CryptojsService {

  tokenFromUI = '';


  constructor( @Inject(ConfigService) private config) {

  }
  encryptUsingAES256(request) {
    this.tokenFromUI = this.config.key;
    const _key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    const _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(request), _key, {
        keySize: this.config.key.length,
        iv: _iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
    return  encrypted.toString();

  }

  decryptUsingAES256(encrypted) {
    this.tokenFromUI = this.config.key.length;
    const _key = CryptoJS.enc.Utf8.parse(this.tokenFromUI);
    const _iv = CryptoJS.enc.Utf8.parse(this.tokenFromUI);

    const decrypted = CryptoJS.AES.decrypt(
        encrypted, _key, {
        keySize: this.config.key.length,
        iv: _iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }).toString(CryptoJS.enc.Utf8);

    return decrypted;
  }
}
