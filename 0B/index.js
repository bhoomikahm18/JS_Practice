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