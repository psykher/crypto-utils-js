"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotx = void 0;
function rotx(str, base) {
    return str.replace(/[a-zA-Z]/g, function (c) {
        return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + base) ? c : c - 26);
    });
}
exports.rotx = rotx;
