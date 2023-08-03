//Inheritance Tree
/*An Inheritance tree defines the hierarchy for the given entities.
Entities below inherit all Properties and Characteristics of Entities above.*/
class Alpha {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    showAlpha() {
        console.log("Value of x: " + this.x);
        console.log("Value of y: " + this.y);
    }
}
class Beta extends Alpha {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    showBeta() {
        console.log("\nValue of x: " + this.x);
        console.log("Value of y: " + this.y);
        console.log("Value of z : " + this.z);
    }

    sum() {
        return this.x + this.y + this.z;
    }
}
let a = new Alpha(10, 20);
a.showAlpha();

let b = new Beta(1, 2, 3);
b.showBeta();
console.log(`Sum of Object members is ${b.sum()}`);

/*What did we learn
-> Inheritance is a concept of inheriting properties (Members) of super class inside subclasses.
-> A subclass inherits all properties of the super class by extending it, using an 'extends' keyword.
-> A super class object contains only the members of super class(Alpha a = new Alpha();).
-> A subclass object contains both super class members and subclass members (Beta b = new Beta();).*/

/* Static methods
-> Suppose we do not want to create an instance every time to invoke a method, we mark that method as static.
-> Static methods can be accessed only using class names and not by any reference variables.*/

class Alpha1 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    showAlpha() {
        console.log("Value of x: " + this.x);
        console.log("Value of y: " + this.y);
    }
    static sayHello() {
        console.log(`Hello Everyone!!`);
    }
}

class Beta1 extends Alpha1 {

    static sayNamste(person) {
        console.log(`Namaste ${person}, welcome to India`);
    }
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    showBeta() {
        console.log("\nValue of x: " + this.x);
        console.log("Value of y: " + this.y);
        console.log("Value of z : " + this.z);
    }

    sum() {
        return this.x + this.y + this.z;
    }
}
Alpha1.sayHello();
Beta1.sayNamste('Bhoomi');

let a1 = new Alpha1(10, 20);
let b1 = new Beta1(1, 2, 3);
