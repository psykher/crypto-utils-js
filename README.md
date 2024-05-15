<p align="center">
    <a href="https://www.typescriptlang.org/">
        <img src="https://img.shields.io/badge/--3178C6?logo=typescript&logoColor=ffffff" />
    </a>
    <a href="https://www.javascript.com/">
        <img src="https://img.shields.io/badge/--F7DF1E?logo=javascript&logoColor=000" />
    </a>
    <a href="https://github.com/psykher/crypto-utils-js/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-ISC-blue.svg?style=flat" />
    </a>
    <a href="https://github.com/psykher/crypto-utils-js/blob/master/CONTRIBUTING.md">
        <img src="https://img.shields.io/badge/PRs-welcome-red.svg?style=flat" />
    </a>
</p>

<p align="center">
    <a href="https://www.npmjs.org/package/crypto-utils-js">
        <img src="https://img.shields.io/npm/v/crypto-utils-js.svg?style=flat" />
    </a>
    <a href="https://packagequality.com/#?package=crypto-utils-js">
        <img src="https://packagequality.com/shield/crypto-utils-js.svg?style=flat" />
    </a>
    <a href="https://www.npmjs.org/package/crypto-utils-js">
        <img src="https://img.shields.io/npm/dm/crypto-utils-js.svg?style=flat" />
    </a>
</p>

# crypto-utils-js

JavaScript library for encryption / decryption. </br></br>

This package is intended to work both on the server side and on the client side.

# Installation:

```
$ npm install --save crypto-utils-js
```

# Documentation:

## **ROT-X**

```
/* 
*   RotX is a simple letter substitution cipher 
*   that replaces a letter with the X letter 
*   after it in the alphabet. ROT-X is a special 
*   case of the Caesar cipher
*
*   A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
*   N O P Q R S T U V W X Y Z A B C D E F G H I J K L M
*/
```

### Usage on typescript:

```
// Import the package:
import { rotx } from 'crypto-utils-js';

// Use it:
let encrypt: string = rotx("plain string", 13);
let decrypt: string = rotx("rot-13 string", 13);

// Definition of rotx method:
// rotx(str: string, base: number): string
```

### Usage on javascript:

```
// Import the package:
const crypto = require('crypto-utils-js');

// Use it:
let encrypt = crypto.rotx("plain string", 13);
let decrypt = crypto.rotx("rot-13 string", 13);

// Definition of rotx method:
// rotx(str: string, base: number): string
```

## **Base64**

```
/* 
*   Base64 is a group of binary-to-text encoding 
*   schemes that represent binary data 
*   (more specifically, a sequence of 8-bit bytes) 
*   in sequences of 24 bits that can be represented 
*   by four 6-bit Base64 digits.
*
*   The more data, the larger hash!
*   VGhlIG1vcmUgZGF0YSwgdGhlIGxhcmdlciBoYXNoIQ==
*/
```

### Usage on typescript:

```
// Import the package:
import { base64 } from 'crypto-utils-js';

// Use it:
let encrypt: string = base64.encode("plain string");
let decrypt: string = base64.decode("base64 string");

// Definition of base64 methods:
// base64.encode(str: string): string
// base64.decode(str: string): string
```

### Usage on javascript:

```
// Import the package:
const crypto = require('crypto-utils-js');

// Use it:
let encrypt = crypto.base64.encode("plain string");
let decrypt = crypto.base64.decode("base64 string");

// Definition of base64 methods:
// base64.encode(str: string): string
// base64.decode(str: string): string
```

## **Hex**

```
/* 
*   Hex
*   Hexadecimal is the name of the numbering 
*   system that is base 16. This system, 
*   therefore, has numerals 0 - 15.
*
*   That means that two-digit decimal numbers 
*   10 - 15 must be represented by a single 
*   numeral to exist in this numbering system.
*   "A"–"F" respectively.
*
*   0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
*   0 1 2 3 4 5 6 7 8 9 A  B  C  D  E  F
*/
```

### Usage on typescript:

```
// Import the package:
import { hex } from 'crypto-utils-js';

// Use it:
let encrypt: string = hex.encode("plain string");
let decrypt: string = hex.decode("hexadecimal string");

// Definition of hex methods:
// hex.encode(str: string): string
// hex.decode(str: string): string
```

### Usage on javascript:

```
// Import the package:
const crypto = require('crypto-utils-js');

// Use it:
let encrypt = crypto.hex.encode("plain string");
let decrypt = crypto.hex.decode("hexadecimal string");

// Definition of hex methods:
// hex.encode(str: string): string
// hex.decode(str: string): string
```

