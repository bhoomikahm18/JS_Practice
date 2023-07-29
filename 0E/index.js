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

let baby = {
    cat : 'kitten',
    dog : 'puppy',
    kangaroo : 'zoey',
    'horse baby' : 'fawn',
    'baby duck' : 'duckling',
    'lion' : 'cub',
    sheep :'lamb'
}

console.log(baby);

// console.log(baby.cat);
// console.log(baby.dog);
// console.log(baby['horse baby']);
// console.log(baby['baby duck']);
// console.log(baby.lion);

baby.cow = 'calf';
baby['Baby Monkey'] = 'Infant';

delete baby.sheep;
delete baby['baby duck'];

console.log(baby);

//Function Expressions as Properties
const actions = {
    sayHello: function () {
        console.log("Hello Everyone!");
    },
    sayNamaste: function (person) {
        console.log(`Namaste ${person}, How are you?`);
    },
    add: function (num1, num2) {
        return num1 + num2;
    }
}

actions.sayHello();
actions.sayNamaste('Seema');
console.log(`Sum of two numbers is : ${actions.add(10, 15)}`);

//Pass by Reference
//We can pass an object's reference as an argument of a method call(function call).
//This process is known as Pass by Reference

let profile = {
    fullName: 'Bajaji KR',
    status: 'Single',
    children: 0,
    parents: ['Rajeevalochana KV', 'Padma Rekha V'],
    salaried: true
}

const modifyName = function(obj, changedName) {
    obj.fullName = changedName;
}

const addChild = (obj) => {
    obj.children += 1;
}

modifyName(profile, 'BKR');
console.log(profile);

addChild();
console.log(profile);