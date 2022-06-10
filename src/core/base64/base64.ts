class Base64 {
    encode(str: string): string {
        return (typeof btoa === 'undefined') ? Buffer.from(str, 'binary').toString('base64') : btoa(str);
    }

    decode(str: string): string {

        return (typeof atob === 'undefined') ? Buffer.from(str, 'base64').toString('binary') : atob(str);
    }
}

const base64: Base64 = new Base64();

export { base64 };