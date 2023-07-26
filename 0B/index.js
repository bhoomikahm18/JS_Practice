//Conditions and Functions

let flag = true;
if (flag) {
    console.log("Salute, Salute, Salute");
}

if (5 > 6) {
    console.log("Do Something");
} else if (7 > 9) {
    console.log("Do Something Something");
}
else {
    console.log("Dont do anything");
}

//Non-Boolean inside IF Condition
//If we are using non-boolean values as a condition in IF:
//For number:0, For String : '',"",null are considered as FALSE
//Any other number is considered as TRUE.
//Any undefined or null or NaN(not a number) will be considered as FALSE.

let flag = null;

if (flag) {
    console.log("Flag is Truthy");
} else {
    console.log("Flag is Falsy");
}

//Short-Circuit Assignment
let myName = 'Bhoomi';
let person = myName || 'Nobody';

console.log(`You know, ${person} is a Good girl`);

let myNameIs = '';
let persons = myNameIs || 'Nobody';

console.log(`You know, ${persons} is a Good girl`);

//Ternary Operator
//Ternary operator checks the condition at first.
//If the condition results is true: It executes the middle(left) statement.
// If the condition results is false: It executes the last(right) statement.
//Eg: 
var c = (55 > 10) ? 55 : 65;
console.log(c);

let condition = false;

(condition) ? (console.log("First Statement")) : (console.log("Second Statement"));

//Switch Case
let position = 'Second Places';

switch (position) {
    case 'First Place':
        console.log("You will get Gold Medal");
        break;
    case 'Second Place':
        console.log("You will get silver Medal");
        break;
    case 'Third place':
        console.log("You will get Bronze Medal");
        break;

    default:
        console.log("Baba ji ka thullu");
        break;
}

//Functions in JS
//Functions are block of code with a name (identifier), which when invoked performs certain set of operation.
//A function can have various inputs & it will return one output.

function sayHello() {
    console.log("Hello Everyone");
}

function remaindMe() {
    console.log("Water the plants");
}

sayHello();
sayHello();
sayHello();

remaindMe();
remaindMe();

//Parameters and Arguments
//Inputs defined at start of the function is known as PARAMETERS.
//Inputs values we pass while we invoke the function are known as ARGUMENTS.


function sayHello(myNames) {
    console.log("Hello Mr. " + myNames + "! How are you?");
}
function sayName(myNames) {
    console.log(`Namaste ${myNames}! Welcome Home`);
}
function areaOfRectangle(length, breath) {
    let area = length * breath;
    console.log(`Area of the rectangle is ${area}`);
}
function areaOftriangle(b, h) {
    let area = 0.5 * b * h;
    console.log('Area of Triangle is: ' + area);
}

sayHello('Kishan');
sayName('Seema');
areaOfRectangle(20, 10);
areaOftriangle(20, 30);

//DEFAULT ARGUMENTS
//While declaring a function parameter, we can declare its default values.
//In case the user forgets to pass the arguments, default will be considered for processing.

function SayNamaste(myName='Random Person') {
    console.log(`Namaste ${myName}! Welcome Home!`);
}
function areaOfRectangle(length, breath) {
    let area = length * breath;
    console.log(`Area of the rectangle is: ${area}`);
}
function areaOfTriangle(b=5, h=5) {
    let area = 0.5 * b * h;
    console.log('Area of Triangle is: ' + area);
}

SayNamaste();
areaOfRectangle();
areaOfTriangle();

//RETURN STATEMENT
function areaOfRectangle(length=10, breath=10) {
    let area = length * breath;
    console.log(`Area of the Rectangle is: ${area}`);
}
function areaOfTriangle(b, h) {
    let area = 0.5 * b * h;
    return area;
}

areaOfRectangle(15, 20);

var triangleArea = areaOfTriangle(10, 15);
console.log(triangleArea);

//Helper Functions
function mangoWieght(count) {
    return count * 0.25;
}
function mangoCost(count) {
    return mangoWieght(count) * 175;
}

var costOfMango = mangoCost(25); 
console.log(`Cost of 25 mangos is: Rs.${costOfMango} only/-`);

console.log("Cost of 35 mangoes is: Rs." + mangoCost(35) + " only/-");
console.log(`Cost of 45 mangoes is: Rs.${mangoCost(45)} only/-`);

//Function Expression (Anonymous functions)
//As we don't name anything it is called: Anonymous function.
//With this we can transfer the function object to some-other variable & start invoking the function by that name.
function areaOfTriangle(b, h) {
    let area = 0.5 * b * h;
    return area;
}
var triangleArea = function (b, h){
    let area = 0.5 * b * h
    return area;
}
console.log(`Area using Function: ${areaOfTriangle(10, 15)}`);
console.log(`Area using Function Expression: ${triangleArea(5, 7)}`);

//Transferring Function Expression
var triangleArea = function (b, h) {
    let area = 0.5 * b * h;
    return area;
}
var area = triangleArea;

triangleArea = null;
console.log(`Using 'area' variable: ${area(5,7)}`);
console.log(`Using 'triangleArea' variable: ${triangleArea(5,7)}`);