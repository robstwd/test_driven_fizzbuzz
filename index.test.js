// index.test.js
const fizzBuzz = require('./index');
 
describe('fizzBuzz()', () => {

    // "FizzBuzz" for multiples of 15
    it('returns "FizzBuzz" for multiples of 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(30)).toBe('FizzBuzz');
    });

    // "Fizz" for multiples of 3
    it('returns "Fizz" for multiples of 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
        expect(fizzBuzz(6)).toBe('Fizz');
        expect(fizzBuzz(9)).toBe('Fizz');
    });

    // "Buzz" for multiples of 5
    it('returns "Buzz" for multiples of 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
        expect(fizzBuzz(10)).toBe('Buzz');
        expect(fizzBuzz(25)).toBe('Buzz');
    });

    // The given number for multiples of neither 3 nor 5
    it('returns the given number for multiples of neither 3 or 5', () => {
        expect(fizzBuzz(2)).toBe('2');
        expect(fizzBuzz(7)).toBe('7');
        expect(fizzBuzz(88)).toBe('88');
    });

});
