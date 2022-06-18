import { base64 } from './base64';

let tstStr: string = "Simple String";

test('Base64', () => {
    expect(base64.decode(base64.encode(tstStr))).toBe(tstStr);
});
