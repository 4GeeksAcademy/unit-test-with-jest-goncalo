// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs["USD"]
}

const fromDollarToYen = (dollar) =>{
    let dollarToEuro = dollar/oneEuroIs["USD"]
    return dollarToEuro * oneEuroIs["JPY"]
}

const fromYenToPound = (yen) => {
    let yenToEuro = yen / oneEuroIs["JPY"]
    return yenToEuro * oneEuroIs["GBP"]
}


module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound}

