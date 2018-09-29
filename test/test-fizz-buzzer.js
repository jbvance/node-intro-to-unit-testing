// import chai, declare expect variable
const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');


describe('fizzBuzzer', () => {
    it('should return the right term for the given input', () => {
        const normalCases = [
            { input: 45, expected: 'fizz-buzz'},
            { input: 20, expected: 'buzz'},
            { input: 27, expected: 'fizz'}
        ]
       for (let i = 0; i < normalCases.length; i ++) {
           const result = fizzBuzzer(normalCases[i].input)
           expect(result).to.equal(normalCases[i].expected);
       }
    });

    it ('should throw an error with invalid input', () => {
        const badInputs = ['a', '!']
        badInputs.forEach((input) => {
            expect(function() {
                fizzBuzzer(input)
            }).to.throw(Error);
        })
    });
})
