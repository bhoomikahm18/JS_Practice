// let arr = ["balaji", "seema"];
/*
let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;
*/
//rabbit.eats :: true
//rabbit.jumps :: true

let animal = {
    eats: true,
    walk() {
        alert("Animal walk");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

let longEar = {
    earLength: 10,
    __proto__: rabbit
};

let animal1 = {
    eats: true,
    walk() {
       /*This method won't be used by rabbit*/
    }
};

let rabbit1 = {
    __proto__: animal
};

rabbit1.walk = function() {
    alert("Rabbit! Bounce-bounce!");
};