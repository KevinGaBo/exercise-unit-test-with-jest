const {sum} = require('./app.js')
const {fromEuroToDollar} = require('./app.js')
const {fromDollarToYen} = require('./app.js')
const {fromYenToPound} = require('./app.js')


test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", () => {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(expected);
});
test("One yen should be 146.261682243 dollars", () => {
    const yen = fromDollarToYen(2);
    const expected = 156.5 / 1.07;
    expect(fromDollarToYen(2)).toBe(292.5233644859813);
})
test("One pound should be 0.00555910543 yens", () => {
    const yen = fromYenToPound(3);
    const expected = 0.87 / 156.5;
    expect(fromYenToPound(3)).toBe(0.01667731629392971);
})