const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}
const fromDollarToYen = function(dollarToYen) {
    let valueInYen = dollarToYen * (156.5 / 1.07);
    return valueInYen;
}
const fromYenToPound = function(YenToPound) {
    let valueInPound = YenToPound * (0.87 / 156.5);
    return valueInPound;
}
const sum = (a,b) => {
    return a + b
}
console.log (sum(7,3))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}