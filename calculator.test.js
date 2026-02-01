const calculator = require("./calculator");

test('add', () => {
    expect(calculator(1, 2, '+')).toBe(3);
});

test('substract', () => {
    expect(calculator(6, 2, '-')).toBe(4);
});

test('multiply', () => {
    expect(calculator(6, 2, '*')).toBe(12);
});

test('divide', () => {
    expect(calculator(50, 2, '/')).toBe(25);
});

test('Invalid operator', () => {
    expect(calculator(6, 2, 'a')).toBe('Invalid operator');
});