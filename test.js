const {fromEuroToDollar,fromDollarToYen,fromYenToPound} = require('./app.js')

test('One euro should be 1.07 dollars', () => {
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.07
    expect(dollars).toBe(expected)
})

test('Should convert dollars to yen', () =>{
    const dollars = fromDollarToYen(10)
    const expectedDollarToEuro = 10/1.07
    const expectedDollarToYen = expectedDollarToEuro * 156.5
    expect(dollars).toBe(expectedDollarToYen)
})

test('Should convert yen to pound', () => {
    const yens = fromYenToPound(1000000)
    const expectedYenToEuro = 1000000 / 156.5
    const expectedYenToPound = expectedYenToEuro * 0.87
    expect(yens).toBe(expectedYenToPound)
})