const caesarCipher = require('./caesarcipher.js');

test('shift abc to def in 3 key', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
});

test('shift fgh to ijk in 3 key', () => {
    expect(caesarCipher('fgh', 3)).toBe('ijk');
});


test('shift xyz to abc in 3 key', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('shift HeLLo to KhOOr in 3 key', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('shift Khoor, Zruog! to Hello, World! in 3 key', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

