//Objects in JS
let dog = {
    breed: 'Golden Retrevier',
    color: 'Orange',
    weight: 18,
    'responds to': ['wistle', 'clap', 'throw ball'],
    tag_no: 776
}
let dogColor = dog.color;
console.log(`Color of the Dog is: ${dogColor}`);
console.log(`The dog is weight ${dog.weight} Kilos`);

let response = dog['responds to'];
console.log(`My dog responds to ${response}`);
console.log(dog.tag_no);