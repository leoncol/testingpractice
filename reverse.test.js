const reverse = require('./reverse');

test('reverses', () => {
    expect(reverse('vaca')).toBe('acav');
});

test('reverses2', () => {
    expect(reverse('mama')).toBe('amam');
});

test('palindrome', () => {
    expect(reverse('reconocer')).toBe('reconocer');
})