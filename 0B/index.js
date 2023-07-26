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
let persons = myName || 'Nobody';

console.log(`You know, ${persons} is a Good girl`);

