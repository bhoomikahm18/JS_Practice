/*let personOne = {
    firstname: 'Balaji',
    lastname: 'KR',

    printName() {
        console.log(this.firstname + " " + this.lastname);
    }
}

let personTwo = {
    firstname: "Sachin",
    lastname: "tendulkar",

    printName() {
        console.log(this.firstname + " " + this.lastname);
    }
}

personOne.printName();
personTwo.printName();*/

//Function Borrowing
let personOne = {
    firstname: 'Balaji',
    lastname: 'KR',

    printName() {
        console.log(this.firstname + " " + this.lastname);
    }
}

let personTwo = {
    firstname: "Sachin",
    lastname: "tendulkar",

}

personOne.printName.call(personTwo);

//Approach no. 2: Aam Zindagi
let printName1 = function (obj) {
    console.log(obj.firstname + " " + obj.lastname);
}

let personOne1 = {
    firstname: 'Balaji',
    lastname: 'KR',

}

let personTwo2 = {
    firstname: "Sachin",
    lastname: "tendulkar",

}

printName1(personOne1);
printName1(personTwo2);

let printName2 = function () {
    console.log(this.firstname + " " + this.lastname);
}

let personOne2 = {
    firstname: 'Balaji',
    lastname: 'KR',

}

let personTwo3 = {
    firstname: "Sachin",
    lastname: "tendulkar",

}

printName2.call(personOne2);
printName2.call(personTwo3);

//Approach no.3

let personOne3 = {
    firstname: 'Balaji',
    lastname: 'KR',

}

let personTwo4 = {
    firstname: "Sachin",
    lastname: "tendulkar",

}
let printName3 = function (hometown, state) {
    console.log(`\n ${this.firstname} ${this.lastname} 
    from ${hometown}, ${state}`);
}

printName3.call(personOne3, 'Bengaluru', 'Karnataka');
printName3.call(personTwo4, 'Mumbai');

//Using Apply Method
let personOne5 = {
    firstname: 'Balaji',
    lastname: 'KR',

}

let personTwo5 = {
    firstname: "Sachin",
    lastname: "tendulkar",

}
let printName5 = function (hometown, state) {
    console.log(`\n ${this.firstname} ${this.lastname} 
    from ${hometown}, ${state}`);
}
let b;
printName5.apply(personOne5, ['Bengaluru', 'Karnataka']);
printName5.apply(personTwo5, [b, 'Maharastra']);

//Call and Apply
//call() mathod is using 'pass by reference' as we pass the object on which the method is to be called(with some additional parameters: comma separator)
//apply() mathod is using 'pass by reference' as we pass the object on which the method is to be called(with some additional parameters: as an array)
