const analyzeArray = require('./analyzearray');

test('first test', () => {
    expect(analyzeArray([20, 10, 5, 4, 20])).toStrictEqual({average: 11.8, min: 4, max: 20, length: 5});
});

test('second test', () => {
    expect(analyzeArray([1567, 11, 25, 244, 2220])).toStrictEqual({average: 813.4, min: 11, max: 2220, length: 5});
});

test('third test', () => {
    expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8])).toStrictEqual({average: 4.5, min: 1, max: 8, length: 8});
});

