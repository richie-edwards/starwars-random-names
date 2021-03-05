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
    });
    
    test('is not the same as before', () => {
        let first = sw.random();
        let second = sw.random();
        expect(first).not.toBe(second);
        expect(sw.all).toContain(first);
        expect(sw.all).toContain(first);
    });
    
    test('more multiple random items are returned', () => {
        let fourRandomArray = sw.random(4);
        expect(fourRandomArray.length).toBe(4);
        fourRandomArray.forEach(name => {
            expect(sw.all).toContain(name);
        });

    });
});