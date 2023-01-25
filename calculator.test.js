const calculator = require("./calculator")

const calc = new calculator()

describe('This function correctly', () =>{
    test('add numbers', () => { 
        expect(calc.add(5,5)).toEqual(10);
     })

     test('subtract numbers', () => { 
        expect(calc.subtract(5,5)).toEqual(0);
     })

     test('multiply numbers', () => { 
        expect(calc.multiply(5,5)).toEqual(25);
     })

     test('divide numbers', () => { 
        expect(calc.divide(5,5)).toEqual(1);
     })
})