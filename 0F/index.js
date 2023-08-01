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
