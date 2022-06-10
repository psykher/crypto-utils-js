# crypto-utils-js
JavaScript library for encryption / decryption.


## Installation:

```
$ npm install --save crypto-utils-js
```

## Usage on typescript:

```
// Import the package:
import { rotx } from 'crypto-utils-js'; 

// for a ROT-13:
let encrypt: string = rotx("plain text", 13);
let decrypt: string = rotx("rot-13 string", 13);

// Definition of rotx method:
// rotx(text: string, base: number): string
```

## Usage on javascript:

```
// Import the package:
const crypto = require('crypto-utils-js');

// for a ROT-13:
let encrypt = crypto.rotx("plain text", 13);
let decrypt = crypto.rotx("rot-13 string", 13);

// Definition of rotx method:
// rotx(text: string, base: number): string
```

## Documentation:

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

## Contribute with:
- New methods.
- New encrypters, ciphers, encoders.
- Improve performance.

## License

[ISC License (ISC)](https://raw.githubusercontent.com/psykher/crypto-utils-js/master/LICENSE)

## Made with ❤️ in `México`
