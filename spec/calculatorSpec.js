
const expect = require('chai').expect;
const { add, subtract } = require('../adder');

describe('The calculator', () => {
    it('should be able to add two numbers', () => {
        const result = add(1, 2);

        expect(result).to.eq(3);
    });

    it('should be able to subtract two numbers', () => {
        const result = subtract(10, 15);

        expect(result).to.eq(-5);
    })
});