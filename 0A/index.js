//JavaScript is a scripting language which was initially used for Client Side VAlidation.
//Now it is Used for Server Side Programming After the induction of specification ES6.

/*console.log("Hello World");
console.log("My name is Bhoomika");
console.log(2001);*/

//There are six primary data-type in JavaScript(excluding symbol)
// a) Number b)String c)Boolean d)NULL e)Undefined f)Object

/*console.log(5);
console.log(25.69);

console.log('JavaScript');
console.log('My name is Bhoomika');

console.log(5 > 6);
console.log(5 <= 25);

var a = null;
console.log(a);

var b;
console.log(b);*/

//Arthmetic Operators

/*console.log(65 + 55);
console.log(65 - 55);
console.log(65 * 55);
console.log(65 / 55);
console.log(65 % 55);*/

//String Concatenation

/*console.log('Hello' + 'World');
console.log('Hello' + ' ' + 'World');*/

//String length

/*console.log('Hello'.length);
console.log('My name is Anthony Gonsalvis'.length);*/

//String Methods
/*console.log('Hello'.toUpperCase());
console.log('VAnaKKAm'.toLowerCase());
console.log('Super Ranga'.startsWith('S'));
console.log('Super Ranga'.startsWith('R'));

console.log(Math.random());
console.log(Math.floor(46.7));
console.log(Math.ceil(46.7));
console.log(Number.isInteger(75));
console.log(Number.isInteger(75.33));*/

//Variables

/*var myName = 'Bhoomi';
var age = 22;

console.log(myName);
console.log(age);
console.log('My name is ' + myName + ' & My age is ' + age);

//Local variables

let myName = 'Kishan';
let age = 3;

console.log(myName);
console.log(age);
console.log('My name is ' + myName + ' & My age is ' + age);

//Constant variable
const myWife = 'Seema';
const age = 30;
console.log('My Wife name is ' + myWife + ' & her age is ' + age);*/
//Error : Assignment to constant variables

//Unary Arithmetic Operators
//In Programming when the operator has two operands it is called Binary
//operator Eg: var a = 5 + 6; var b = 7 - 4; var c = a * b;
//When an operator has three operands it is called Ternary Operators.
//Eg: var c = (condition) ? 55 : 65;
//When An operator has only one operand it is called Unary Operator.
//Eg:
var num = 55;

num += 10;  //65 | num = num + 10;
num -= 20;  //45 | num = num - 20;
num *= 100;  //4500 | num = num * 100;
num /= 50;   //90 | num = num / 50;
num %= 4;    //2 | num = num % 4;

//Increment and Decrement Operator

let year = 1987;
year++;
console.log(year);
year--;
year--;
year--;
console.log(year);

//Interpolation (Concatenation)
let myName = 'Bhoomi';
let age = 21;

console.log(`My name is ${myName} & my age is : ${age}`);

//typeof Keyword
//In JS 'typeof' is a keyword used to know the type of the variable present
//JS is not a strictly type checked language like JAVA
//Any type of value can fit into any variable present

let foo = 'Super Man';
console.log(typeof foo);
foo = 1975;
console.log(typeof foo);
foo = 55.78;
console.log(typeof foo);
foo = 100 > 200;
console.log(typeof foo);

