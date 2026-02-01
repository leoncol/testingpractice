const capitalize = require('./capitalize');

test('capitalizes', () => {
    expect(capitalize('hola')).toBe('Hola');
});

test('capitalizes', () => {
    expect(capitalize('carro')).toBe('Carro');
});

test('capitalizes', () => {
    expect(capitalize('quiero comer')).toBe('Quiero comer');
})