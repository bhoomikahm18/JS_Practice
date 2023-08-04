import { celsiusToFahrenheit, fahrenheitToCesius } from "./converters-es6.js";
import { milliToCenti, centiToMeter } from "./converters-es6.js";
import nanoMeter from "./converters-es6.js";

// import * as resource from './converters-es6.js';

const buttonElement = document.getElementById('button');
buttonElement.addEventListener('click', clickMe);

function clickMe() {
    let element = document.getElementById("container");
    element.innerHTML = `<h2>Boiling Point is: ${celsiusToFahrenheit(100)}
    & Freezing Point is: ${celsiusToFahrenheit(0)}, <br><br>
    100 milli meters is ${milliToCenti(100)} centi-meters, <br><br>10000 centi-meters is ${centiToMeter(10000)} meters,<br><br> One nanimeters is ${nanoMeter} meters.<h2>`;
}

console.log(`Water Boiling Point is ${celsiusToFahrenheit(100)} Degree Fahrenheit`);
console.log(`Human Body temperature is ${fahrenheitToCesius(98.6)} Degree celsius`);