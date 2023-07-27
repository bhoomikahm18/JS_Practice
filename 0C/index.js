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

//PUSh OR POP: methods are used to add and remove element to an array from the end(to the end).
let nato = ['USA','UK','Germany','Canada','France','Italy','Turkey'];

nato.push('Romania','Greece','Latvia','Lithuania','Estonia');
console.log(nato);
/*output: [
  'USA',       'UK',
  'Germany',   'Canada',
  'France',    'Italy',
  'Turkey',    'Romania',
  'Greece',    'Latvia',
  'Lithuania', 'Estonia'
]*/

nato.pop();
nato.pop();
nato.pop();
console.log(nato);
/*output: [
  'USA',     'UK',
  'Germany', 'Canada',
  'France',  'Italy',
  'Turkey',  'Romania',
  'Greece'
]*/

//UNSHIFT OR SHIFT: methods are used to add and remove element to an array from the Start(to the Start).
nato.unshift('Ukraine','Finland','Poland');
console.log(nato);

nato.shift();
nato.shift();
console.log(nato);
