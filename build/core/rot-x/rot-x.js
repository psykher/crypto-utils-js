"use strict";
/*
    RotX is a simple letter substitution cipher
    that replaces a letter with the X letter
    after it in the alphabet. ROT-X is a special
    case of the Caesar cipher

    A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
    N O P Q R S T U V W X Y Z A B C D E F G H I J K L M
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotx = void 0;
function rotx(text, base) {
    return text.replace(/[a-zA-Z]/g, function (c) {
        return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + base) ? c : c - 26);
    });
}
exports.rotx = rotx;
