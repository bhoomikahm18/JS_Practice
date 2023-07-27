//ARRAYS AND LOOPS
//Arrays are data-structures in Javascript which help store values of same data-type in other languages, but multiple object in Javasccript.
/* let southAsia = ['India', 'Pakistan', 'BAngladesh'];
 console.log(southAsia);*/

// another way of declaring array
/*let southAsia = [];
southAsia [0] = 'India';
southAsia [1] = 'Pakistan';
southAsia [2] = 'Bangladesh';
console.log(southAsia);*/

//Accessing Array
/*let southEastAsia = ['India','Pakistan','Bangladesh','Buthan','Burma','Nepal','Loas','Combodia','Vietrem'];
southEastAsia [4] = 'Mayanmar';

let topEconomy = southEastAsia[0];
console.log(`Richest Economy in south Asia is ${topEconomy}!!`);

console.log(`If we try to access an array out of index we get : ${southEastAsia[12]}`);*/

//Const Arrays
//const Arrays can be altered from the inside. We can add new elements using Arrays.push() method.
//But we cannot assign the variable to some-other array or a random value.This will result in an error.

/*const northAmerica = ['Canada', 'United States of America', 'Mexico'];

northAmerica[1] = 'USA';
console.log(northAmerica);

northAmerica.push('Panama');
console.log(northAmerica);

northAmerica = ['Columbia', 'Brazil']; //Error*/

//Length Variable
let southAsia = ['India', 'Pakistan', 'Bangladesh'];
let southEastAsia = ['India','Pakistan','Bangladesh','Buthan','Burma','Nepal'];

console.log(southAsia.length);
console.log(southEastAsia.length);