const stringLength = require('./stringLength.js');

test('First String char count should be 15', () => { 
    expect(stringLength("First")).toBe(5);
 })

 test('It should not Pass', ()=> {
    expect(stringLength("This is a phrase.")).toBe("String not Valid.");
 })