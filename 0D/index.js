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
const adds = (x, y) => {
    console.log(`Sum of Two Numbers: ${x, y}`);
}

adds(5, 6);

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

//Aonther way

const sumOf = (param, a, b) => {
    param(a, b);
    console.log(`Finished adding two numbers`);
}

const add2 = (x, y) => {
    console.log(`Sum of Two Numbers: ${x + y}`);
}
sumOf(add2, 10, 15);

//Iterators
//Iterators are methods used on arrays to work on the same.
//Common functions are:forEach(), map(), filter().

//Aam Zindagi
/*const fruitSalad = ['Apple','Pineapple','Banana','Orange','Kiwi','Custard'];

let itrFruit = function(fruit){
    console.log(`10 gms of ${fruit}`);
}

fruitSalad.forEach(itrFruit);*/

//Mentos Zindagi

/*const fruitSalad = ['Apple','Pineapple','Banana','Orange','Kiwi','Custard'];

//let itrFruit = function(fruit){
    console.log(`10 gms of ${fruit}`);
}

fruitSalad.forEach(function(fruit){
    console.log(`10 gms of ${fruit}`);
});*/

//Mentos Zindagi with Arrow Function

const fruitSalad = ['Apple','Pineapple','Banana','Orange','Kiwi','Custard'];

/*let itrFruit = function(fruit){
    console.log(`10 gms of ${fruit}`);
}*/

/*fruitSalad.forEach((fruit) => {
    console.log(`10 gms of ${fruit}`);
});*/
fruitSalad.forEach(fruit => {
    console.log(`10 gms of ${fruit}`);
});

//MAP FUNCTION
//forEach() pops out an element of an array & it operates on it.
//map() works in the same way, but it returns a new array with added logic.

//Aam Zindagi
const numbers = [1, 2, 3, 4, 5, 6, 7];

const logic = function (num) {
    return num * num;
}

const squares = numbers.map(logic);

console.log(squares);


