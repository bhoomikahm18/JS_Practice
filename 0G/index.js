//This Keyword
//->'this keyword' in java/javascript is used to eliminate conflict between local variable and object level variable.
//->'this keyword' always holds the reference of currently-executing object.

//Creating Objects

class Dog {
    constructor(breed, weight, color, violant) {
        this._breed = breed;
        this._weight = weight;
        this._color = color;
        this._violant = violant;
    }
    showInfo() {
        console.log(`My Dog is a ${this._breed},
        whose color is ${this._color}
        & it weighs ${this._weight} kilos`);

        this._violant ? console.log("It is Ferocius \n") : console.log("It is Sweet \n");
    }

    get breed() {
        return this._breed;
    }
    get weight() {
        return this._weight;
    }
    get color() {
        return this._color;
    }
    get violant() {
        return this._violant;
    }

    set breed(newBreed) {
        if (typeof newBreed === 'string') {
            this._breed = newBreed;
        }
    }
    set color(newColor) {
        if (typeof newColor === 'string') {
            this._color = newColor;
        }
    }
    set weight(num) {
        if (typeof num === 'number' && num > 0) {
            this._weight = num;
        }
    }
    set violant(nature) {
        if (typeof nature === 'boolean') {
            this._violant = nature;
        }
    }
}

let d1 = new Dog('Golden Retriver', 18, 'Orange', false);
let d2 = new Dog('Alsetion', 12, 'Black', true);
let d3 = new Dog('Rotwiler', 15, 'Brown', true);
let d4 = new Dog('Labrador', 14, 'Cream', false);

d1.showInfo();
d2.showInfo();
d3.showInfo();
d4.showInfo();

