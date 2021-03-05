let sw = require('./index');

describe('all', () => {
    test('is an array', () => {
        expect(Array.isArray(sw.all)).toBe(true);
    })
})

describe('random', () => {
    test('is a string', () => {
        let result = sw.random();
        expect(typeof result).toBe('string');
    })
    
    test('is not the same as before', () => {
        let first = sw.random();
        let second = sw.random();
        expect(first).not.toBe(second);
        expect(sw.all).toContain(first);
        expect(sw.all).toContain(second);
    })
})


