function celsiusToFahrenhiet(celsius) {
    return celsius * (9 / 5) + 32;
}

const freezingPointF = celsiusToFahrenhiet(0);
const boilingPointF = celsiusToFahrenhiet(100);

console.log(`The freezing point of water in Fahrenhiet is ${freezingPointF}`);
console.log(`The boiling Point of water in Fahrenhiet is ${boilingPointF}`);
