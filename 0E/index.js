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

addChild(profile);
console.log(profile);

//Iterate using for...in
let baby = {
    cat : 'kitten',
    dog : 'puppy',
    kangaroo : 'zoey',
    'horse baby' : 'fawn',
    'baby duck' : 'duckling',
    'lion' : 'cub',
    sheep :'lamb'
}

for (let key in baby) {
    console.log(`Child of ${key} is called: ${baby[key]}`);
}

//Hybrid Objects(Advanced Objects)
let dog1 = {
    breed: 'Golden Retrevier',
    color: 'Orange',
    weight: 18,

    hungry() {
        console.log("Wagging the tail");
    },
    getInfo() {
        return `My dog is a ${this.breed}, is ${this.color} in color & weight ${this.weight} kilos`
    }
}

dog1.hungry();
console.log(dog1.getInfo());

//Wrong way of Representing Methods
//arrow function is invalid here
//Any Form of Function expresion becomes invalid for the object and its members cannot be accessed using 'this' keyword
let dog2 = {
    breed: 'Golden Retrevier',
    color: 'Orange',
    weight: 18,

    hungry: () => {
        console.log("Wagging the tail");
    },
    getInfo: () => {
        return `My dog is a ${this.breed}, is ${this.color} in color & weight ${this.weight} kilos`
    }
}

dog2.hungry();
console.log(dog2.getInfo());

//Get Methods
let dog3 = {
    _breed: 'Golden Retrevier',
    _weight: 18,
    color: 'Orange',
    get breed(){
        return this._breed
    },
    get weight() {
        return this._weight
    },
    hungry() {
        console.log("Wagging the tail");
    },
    getInfo() {
        return `My dog is a ${this._breed}, is ${this.color} in color & weight ${this.weight} kilos`
    }
}

console.log(dog3.breed);
console.log(dog3.weight);
console.log(dog3.color);
dog3.hungry();
console.log(dog3.getInfo());

//Set Methods
let dog4 = {
    _breed: 'Golden Retrevier',
    _weight: 18,
    color: 'Orange',
    get breed(){
        return this._breed
    },
    get weight() {
        return this._weight
    },
    set breed(newBreed) {
        if (typeof newBreed == 'string') {
            this._breed = newBreed;
        }
    },
    set weight(num){
        if (typeof num == 'number' && 0) {
            this._weight = num;
        }
        else{
            console.log("Please Enter a Valid Number Above 0");
        }
    }
}

console.log(`Dog breed Before: ${dog4.breed}`);
console.log(`Dog Weight Before: ${dog4.weight}`);
console.log(`Dog Color Before: ${dog4.color}`);

dog4.breed = 'German Sheperd';
dog4.weight = 23;
dog4.color = 'Blackish Brown';

console.log(`Dog breed After: ${dog4.breed}`);
console.log(`Dog Weight After: ${dog4.weight}`);
console.log(`Dog Color After: ${dog4.color}`);

//Factory
const dogFactory = (breed, weight, color, violent) => {
    return {
        _breed: breed,
        _weight: weight,
        _color: color,
        _violet: violent,

        showInfo() {
            console.log(`My Dog is a ${this._breed},
            whose color is ${this._color},
            & it weighs ${this._weight}kilos`);

            this._violet ? console.log("It is Ferocius \n") : console.log("It is Sweet \n");
        }
    }
}

let d1 = dogFactory('Labrador',18,'Orange',false);
d1.showInfo();

let d2 = dogFactory('German Sheaperd',22,'Black',true);
d2.showInfo();

//Using Setter and Getter On Factory Object
const dogFactory1 = (breed, weight, color, violent) => {
    return {
        _breed: breed,
        _weight: weight,
        _color: color,
        _violet: violent,
        
        get breed(){
            return this._breed;
        },
        get weight() {
            return this._weight;
        },
        get color(){
            return this._color;
        },
        get violent(){
            return this._violet;
        },
        set breed(br) {
            if (typeof newBreed === 'string') {
                this._breed = br;
            }
        },
        set weight(wei){
            (typeof num === 'number' && wei > 0) ? this._weight = wei : console.log('Please enter the valid number');
        },
        set color(col){
            if(typeof col === 'string') this._color = col;
        },
        set violent (vio){
            (typeof vio === 'boolean') ? this._violet = vio : console.log("Enter a valid Boolean true or false");
        },

        showInfo() {
            console.log(`My Dog is a ${this._breed},
            whose color is ${this._color},
            & it weighs ${this._weight}kilos`);

            this._violet ? console.log("It is Ferocius \n") : console.log("It is Sweet \n");
        }
    }
}

let d3 = dogFactory1('Labrador',18,'Orange',false);
d3.showInfo();

let d4 = dogFactory1('German Sheaperd',22,'Black',true);
d4.showInfo();

//Built in Object Methods
let d5 = dogFactory1('Labrador',18,'Orange',false);

const dogKeys = Object.keys(d5);
console.log(dogKeys);

const dogEntries = Object.entries(d5);
console.log(dogEntries);