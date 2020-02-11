let createCircle = $('#addCircle');
let createTriangle = $('#addTriangle');
let createSquare = $('#addSquare');
let createRectangle = $('#addRectangle');

class Shapes {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        let shapeContainer = $('#shape-canvas')

    }
    createShape() {

    }
};

class Circle extends Shapes {
    constructor(height, radius) {
        super(height);
        this.radius = radius
    }
    makeShape() {
        var cordX = 110;
        var cordY = 35;
        var paper = Raphael("sample-1", 200, 75);
        var circle = paper.circle(cordX, cordY, 25);
        circle.attr({ fill: "blue" });
        
    }
}
class Triangle extends Shapes {
    constructor(height) {
        super(height);
        // all sides are equal, so they're the same sizes
    }
}
class Rectangle extends Shapes {
    constructor(height, width) {
        super(height);
        this.width = width;
    }
}
class Square extends Shapes {
    constructor(height, sidelength) {
        super(height);
        this.sideLength = this.sideLength;
    }
};

createCircle.click(function () {
    new Circle();
});
createTriangle.click(function () {
    new Triangle();
});
createRectangle.click(function () {
    new Rectangle();
});
createCircle.click(function () {
    new Circle();
});
