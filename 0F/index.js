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