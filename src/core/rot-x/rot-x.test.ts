import { rotx } from './rot-x';

let tstStr: string = "Caesar cipher";

test('ROT-1', () => {
    expect(rotx(rotx(tstStr, 1), 25)).toBe(tstStr);
});

test('ROT-2', () => {
    expect(rotx(rotx(tstStr, 2), 24)).toBe(tstStr);
});

test('ROT-3', () => {
    expect(rotx(rotx(tstStr, 3), 23)).toBe(tstStr);
});

test('ROT-4', () => {
    expect(rotx(rotx(tstStr, 4), 22)).toBe(tstStr);
});

test('ROT-5', () => {
    expect(rotx(rotx(tstStr, 5), 21)).toBe(tstStr);
});

test('ROT-6', () => {
    expect(rotx(rotx(tstStr, 6), 20)).toBe(tstStr);
});

test('ROT-7', () => {
    expect(rotx(rotx(tstStr, 7), 19)).toBe(tstStr);
});

test('ROT-8', () => {
    expect(rotx(rotx(tstStr, 8), 18)).toBe(tstStr);
});

test('ROT-9', () => {
    expect(rotx(rotx(tstStr, 9), 17)).toBe(tstStr);
});

test('ROT-10', () => {
    expect(rotx(rotx(tstStr, 10), 16)).toBe(tstStr);
});

test('ROT-11', () => {
    expect(rotx(rotx(tstStr, 11), 15)).toBe(tstStr);
});

test('ROT-12', () => {
    expect(rotx(rotx(tstStr, 12), 14)).toBe(tstStr);
});

test('ROT-13', () => {
    expect(rotx(rotx(tstStr, 13), 13)).toBe(tstStr);
});

test('ROT-14', () => {
    expect(rotx(rotx(tstStr, 14), 12)).toBe(tstStr);
});

test('ROT-15', () => {
    expect(rotx(rotx(tstStr, 15), 11)).toBe(tstStr);
});

test('ROT-16', () => {
    expect(rotx(rotx(tstStr, 16), 10)).toBe(tstStr);
});

test('ROT-17', () => {
    expect(rotx(rotx(tstStr, 17), 9)).toBe(tstStr);
});

test('ROT-18', () => {
    expect(rotx(rotx(tstStr, 18), 8)).toBe(tstStr);
});

test('ROT-19', () => {
    expect(rotx(rotx(tstStr, 19), 7)).toBe(tstStr);
});

test('ROT-20', () => {
    expect(rotx(rotx(tstStr, 20), 6)).toBe(tstStr);
});

test('ROT-21', () => {
    expect(rotx(rotx(tstStr, 21), 5)).toBe(tstStr);
});

test('ROT-22', () => {
    expect(rotx(rotx(tstStr, 22), 4)).toBe(tstStr);
});

test('ROT-23', () => {
    expect(rotx(rotx(tstStr, 23), 3)).toBe(tstStr);
});

test('ROT-24', () => {
    expect(rotx(rotx(tstStr, 24), 2)).toBe(tstStr);
});

test('ROT-25', () => {
    expect(rotx(rotx(tstStr, 25), 1)).toBe(tstStr);
});
