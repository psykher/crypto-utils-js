"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64 = void 0;
class Base64 {
    encode(str) {
        return (typeof btoa === 'undefined') ? Buffer.from(str, 'binary').toString('base64') : btoa(str);
    }
    decode(str) {
        return (typeof atob === 'undefined') ? Buffer.from(str, 'base64').toString('binary') : atob(str);
    }
}
const base64 = new Base64();
exports.base64 = base64;
