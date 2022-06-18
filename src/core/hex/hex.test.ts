import { hex } from './hex';

let tstStr: string = "Hexadecimal String";

test('Hex', () => {
    expect(hex.decode(hex.encode(tstStr))).toBe(tstStr);
});
