"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hex = void 0;
class Hex {
    encode(str) {
        let hChar = "";
        let result = "";
        for (let i = 0; i < str.length; i++) {
            hChar = str.charCodeAt(i).toString(16);
            result += ("000" + hChar).slice(-4);
        }
        return result;
    }
    decode(str) {
        let hArr = str.match(/.{1,4}/g) || [];
        let result = "";
        for (let i = 0; i < hArr.length; i++) {
            result += String.fromCharCode(parseInt(hArr[i], 16));
        }
        return result;
    }
}
const hex = new Hex();
exports.hex = hex;
