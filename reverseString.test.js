const reverseString = require("./reverseString")

test('reverse string ', () => {
    expect(reverseString("one")).toBe("eno");
 })

 test('reverse string ', () => {
    expect(reverseString("@pic2k")).toBe("k2cip@");
 })