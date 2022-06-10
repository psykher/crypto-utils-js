# crypto-utils-js
JavaScript library for encryption / decryption. </br></br>

This package is intended to work both on the server side and on the client side.


## Installation:

```
$ npm install --save crypto-utils-js
```


## Documentation:


### **ROT-X**

```
/* 
    RotX is a simple letter substitution cipher 
    that replaces a letter with the X letter 
    after it in the alphabet. ROT-X is a special 
    case of the Caesar cipher
    A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
    N O P Q R S T U V W X Y Z A B C D E F G H I J K L M
*/
```

Usage on typescript:

```
// Import the package:
import { rotx } from 'crypto-utils-js'; 

// Use it:
let encrypt: string = rotx("plain string", 13);
let decrypt: string = rotx("rot-13 string", 13);

// Definition of rotx method:
// rotx(str: string, base: number): string
```

Usage on javascript:

```
// Import the package:
const crypto = require('crypto-utils-js');

// Use it:
let encrypt = crypto.rotx("plain string", 13);
let decrypt = crypto.rotx("rot-13 string", 13);

// Definition of rotx method:
// rotx(str: string, base: number): string
```


### **Base64**

```
/* 
    Base64 is a group of binary-to-text encoding 
    schemes that represent binary data 
    (more specifically, a sequence of 8-bit bytes) 
    in sequences of 24 bits that can be represented 
    by four 6-bit Base64 digits.

    The more data, the larger hash!
    VGhlIG1vcmUgZGF0YSwgdGhlIGxhcmdlciBoYXNoIQ==
*/
```

Usage on typescript:

```
// Import the package:
import { base64 } from 'crypto-utils-js'; 

// Use it:
let encrypt: string = base64.encode("plain string");
let decrypt: string = base64.decode("base64 string");

// Definition of base64 methods:
// Base64.encode(str: string): string
// Base64.decode(str: string): string
```

Usage on javascript:

```
// Import the package:
const crypto = require('crypto-utils-js');

// Use it:
let encrypt = crypto.base64.encode("plain string");
let decrypt = crypto.base64.encode("base64 string");

// Definition of base64 methods:
// Base64.encode(str: string): string
// Base64.decode(str: string): string
```


## Contribute with:
- New methods.
- New encrypters, ciphers, encoders.
- Improve performance.


## License

[ISC License (ISC)](https://raw.githubusercontent.com/psykher/crypto-utils-js/master/LICENSE)


## Made with ❤️ in `México`
