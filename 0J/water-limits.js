// function celsiusToFahrenhiet(celsius) {
//     return celsius * (9 / 5) + 32;
// }

// const converters = require('./converters.js');
const { celsiusToFahrenheit } = require('./converters.js');

// const freezingPointF = converters.celsiusToFahrenheit(0);
// const boilingPointF = converters.celsiusToFahrenheit(100);

const freezingPointF = celsiusToFahrenheit(0);
const boilingPointF = celsiusToFahrenheit(100);

console.log(`The freezing point of water in Fahrenhiet is ${freezingPointF}`);
console.log(`The boiling Point of water in Fahrenhiet is ${boilingPointF}`);
