const { sum, mul, sub, div } = require('./calculator')

describe('calculator unit tests', () => {
    test('sum operation', () => {
        expect(sum(2,2)).toEqual(4);
    })
    test('mul operation', () => {
        expect(mul(2,2)).toEqual(4);
    })
    test('sub operation', () => {
        expect(sub(2,2)).toEqual(0);
    })
    test('div operation', () => {
        expect(div(2,2)).toEqual(1);
    })
}); 