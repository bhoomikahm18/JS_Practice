import { celsiusToFahrenheit, fahrenheitToCesius } from "./converters-es6.js";

const buttonElement = document.getElementById('button');
buttonElement.addEventListener('click', clickMe);

function clickMe() {
    let element = document.getElementById("container");
    element.innerHTML = `<h2>Boiling Point is: ${celsiusToFahrenheit(100)}
    & Freezing Point is: ${celsiusToFahrenheit(0)}</h2>`;
}

console.log(`Water Boiling Point is ${celsiusToFahrenheit(100)} Degree Fahrenheit`);
// console.log(`Human Body temperature is ${fahrenheitToCesius(98.6)} Degree celsius`);