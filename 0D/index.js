//Higher Order Functions
const addTwoNumbers = (a, b) => {
    console.log(`Sum of Two numbers : ${a + b}`);
}

addTwoNumbers(7, 8);

let addMethod = addTwoNumbers;

addTwoNumbers(5, 6);
addMethod(5, 6);

//Printing Function Name

console.log(addTwoNumbers);
console.log(addMethod);
/*output: [Function: addTwoNumbers]
[Function: addTwoNumbers]*/

console.log(addTwoNumbers.name);
console.log(addMethod.name);
/*output: addTwoNumbers
addTwoNumbers*/

//Call Back Functions(Aam Zindagi)
const add = (x, y) => {
    console.log(`Sum of Two Numbers: ${x, y}`);
}

add(5, 6);

/*const add = function(x, y) {
    console.log(`Sum of Two Numbers: ${x, y}`);
}*/

//Call Back Functions(Mentos Zindagi)
const sum = (param) => {
    param(5, 6);
    console.log(`Finished adding two numbers`);
}

const add = (x, y) => {
    console.log(`Sum of Two Numbers: ${x + y}`);
}
sum(add);
