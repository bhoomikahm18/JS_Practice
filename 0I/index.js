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
