//first function
function celsiusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}

//second function
const fahrenheitToCesius = function (fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
};

export { celsiusToFahrenheit, fahrenheitToCesius };