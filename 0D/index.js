//Higher Order Functions
const addTwoNumbers = (a, b) => {
    console.log(`Sum of Two numbers : ${a + b}`);
}

addTwoNumbers(7, 8);

let addMethod = addTwoNumbers;

addTwoNumbers(5, 6);
addMethod(5, 6);