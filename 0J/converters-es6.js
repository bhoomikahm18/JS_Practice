// //first function
// function celsiusToFahrenheit(celsius) {
//     return celsius * (9 / 5) + 32;
// }

// //second function
// const fahrenheitToCesius = function (fahrenheit) {
//     return (fahrenheit - 32) * (5 / 9);
// };

// export { celsiusToFahrenheit, fahrenheitToCesius };

//Alternate way of Exporting
//first function
export function celsiusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}

//second function
export const fahrenheitToCesius = function (fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
};

const milliToCenti = (millimeter) => {
    return millimeter / 100;
}

const centiToMeter = (centimeter) => {
    return centimeter * 100;
}

const nanoMeter = 0.000000001;

export default nanoMeter;

export { milliToCenti, centiToMeter};