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

rabbit1.walk = function () {
    alert("Rabbit! Bounce-bounce!");
};

let user = {
    name: "John",
    surname: "Smith",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },
    get fullName() {
        return `${this.name} ${this.surname}`;
    }

};
let admin = {
    __proto__: user,
    isAdmin: true
};
/*Output:
alert(admin.fullName);
undefined
admin.fullName = "Alice Cooper";  
'Alice Cooper'
alert(admin.fullName);
undefined
alert(user.fullName);
undefined
*/

let father = {
    name: "Satish",
    city: "Banavasi",
    showInfo: function () {
        console.log(`My Name is ${this.name} from ${this.city}`);
    }
}

let son = {
    name: "Shashank"
}

son.__proto__ = father;
/*Output
>father
{name: 'Satish', city: 'Banavasi', showInfo: ƒ}
>son
{name: 'Shashank'}
>father.showInfo();
index.js:80 My Name is Satish from Banavasi
>son.showInfo();
index.js:80 My Name is Shashank from Banavasi
*/