class Box {
    constructor(l, b, h) {
        this.l = l;
        this.b = b;
        this.h = h;
    }
    printVolume() {
        console.log(`Volume of the box is: ${this.l * this.b * this.h}`);
    }
    fetchSurfaceArea() {
        return 2 * (this.l * this.b + this.b * this.h + this.h * this.l);
    }

    setBoxSize(l, b, h) {
        this.l = l;
        this.b = b;
        this.h = h;
    }
}

let b = new Box(5, 5, 5);
b.printVolume();
b.setBoxSize(10, 11, 12);
b.printVolume();