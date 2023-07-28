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

const fruitSalad = ['Apple', 'Pineapple', 'Banana', 'Orange', 'Kiwi', 'Custard'];

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
/*const numbers = [1, 2, 3, 4, 5, 6, 7];

const logic = function (num) {
    return num * num;
}

const squares = numbers.map(logic);

console.log(squares);*/

//Mentos Zindagi
/*const numbers = [1, 2, 3, 4, 5, 6, 7];

/*const logic = function (num) {
    return num * num;
}

const squares = numbers.map(function (num) {
    return num * num;
});

console.log(squares);*/
//Mentos Zindagi with Arrow
const numbers = [1, 2, 3, 4, 5, 6, 7];

/*const squares = numbers.map((num) => {
    return num * num;
});*/
/*const squares = numbers.map(num => {
    return num * num;
});*/
const squares = numbers.map(num => num * num);

console.log(squares);

//FILTER METHOD
//Filter method returns a new array after filtering the element from existing array.
//.filter() returns an array of element after filtering out certain elements from the original array.
//The callback function(logic method) for the .filter() method should return true or false.

/*const mixedArray = ['apple','banana',5.4,8,'kiwi','3.147',9.5,'25'];

const logic = function (item) {
    if (typeof item === 'number') {
        return true;
    } else {
        return false;
    }
}
const num = mixedArray.filter(logic);
console.log(num);*/

/*const mixedArray = ['apple','banana',5.4,8,'kiwi','3.147',9.5,'25'];

const logic = function (item) {
    return(typeof item === 'number') ? true : false;
}
const num = mixedArray.filter(logic);
console.log(num);*/

//Mentos Zindagi
/*const mixedArray = ['apple','banana',5.4,8,'kiwi','3.147',9.5,'25'];

const num = mixedArray.filter(function (item) {
    return(typeof item === 'number') ? true : false;
});
console.log(num);*/

//Mentos Zindagi with arrow function
const mixedArray = ['apple','banana',5.4,8,'kiwi','3.147',9.5,'25'];

/*const num = mixedArray.filter( (item) => {
    return(typeof item === 'number') ? true : false;
});*/
/*const num = mixedArray.filter( item => {
    return(typeof item === 'number') ? true : false;
});*/
const num = mixedArray.filter( item => (typeof item === 'number') ? true : false);

console.log(num);

//Find Index Method
//findIndex() method retrieves the index of first element of the array which matches with the true condition in the logic.

let fruits = ['apple','pineapple','banana','dragon-fruit','orange','kiwi'];

/*let fruitNum = fruits.findIndex((fruit) => {
    return fruit === 'banana';
});*/
/*let fruitNum = fruits.findIndex(fruit => {
    return fruit === 'banana';
});*/
console.log(fruits.findIndex(fruit => fruit === 'graps'));

/*let startWithD = fruits.findIndex((fruit) => {
    return fruit[0] === 'd';
});*/
/*let startWithD = fruits.findIndex(fruit => {
    return fruit[0] === 'd';
});*/

console.log(fruits.findIndex(fruit =>  fruit[0] === 'd'));

//sort method
const fruit1 = ['mango','banana','apple','kiwi','orange'];
/*fruit1.sort();*/
console.log(fruit1.sort());

const number1 = [1,3,5,7,9,2,4,6,8];
/*number1.sort();*/
console.log(number1.sort());


//Reduce
const number = [2, 3, 4];

const n = number.reduce((a, b) => {
    return a + b;
});
const n1 = number.reduce(num => {
    return 1 + num;
});
const n3 = number.reduce(a => 3 + a );

console.log(n);
console.log(n1);
console.log(n3);

//Some method 
//example-1
const mixedArray1 = ['apple','banana',5.4,8,'kiwi','3.147',9.5,'25'];

const num1 = mixedArray1.some( (item) => {
    return(typeof item === 'number') ;
});
const num2 = mixedArray1.some( item => {
    return(item === 'number') ;
});
const num3 = mixedArray1.some( item => (item === 'number') );

console.log(num1);
console.log(num2);
console.log(num3);

//example-2
let fruits1 = ['apple','pineapple','banana','dragon-fruit','orange','kiwi'];

/*let fruitNum = fruits.some((fruit) => {
    return fruit === 'banana';
});*/
/*let fruitNum = fruits.some(fruit => {
    return fruit === 'banana';
});*/
console.log(fruits1.some(fruit => fruit === 'graps'));
