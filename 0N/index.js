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