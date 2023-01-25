const captalize = require('./capitalize')

describe('Your string should be', () => {
    it('first letter capital', () => { 
        expect(captalize("hello!")).toBe("Hello!")
     })
})
