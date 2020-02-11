let createCircle = $('#addCircle');
let createTriangle = $('#addTriangle');
let createSquare = $('#addSquare');
let createRectangle = $('#addRectangle');
let shapeContainer = $('#shape-canvas')

class Shapes {
    constructor(height, width) {
        this.height = height;
        this.width = width;

    }
    createShape() {
        let help = $('<div class="triangle-up"></div>');
        let info = $('#inputTri');
        shapeContainer.append(help);
    }
};

class Circle extends Shapes {
    constructor(radius) {
        this.radius = radius
    }
    createShape() {

        console.log('hey');


    };
};

class Triangle extends Shapes {
    constructor(height, ) {
        super(height);
        
        // all sides are equal, so they're the same sizes
    }
    createShape() {
        let help = $('<div class="triangle-up"></div>');
        let info = $('#inputTri');
        shapeContainer.append(help);

    }
}
class Rectangle extends Shapes {
    constructor(height, width) {
        super(height);
        this.width = width;
    }
    createShape() {
        let rect = $('<canvas id="canvas" width="${`widthRect`}" height="150"></canvas>');
        shapeContainer.append(rect);
    };
}
class Square extends Shapes {
    constructor(height, sidelength) {
        super(height);
        this.sideLength = this.sideLength;
    }
};


$('form').click((e) => {
    e.preventDefault();
});

createCircle.click(function (event) {
    new Circle();
    createShape();
});
createTriangle.click(function (event) {
    new Triangle();
    // createShape();
    // createShape();
    // let help = $('<div class="triangle-up"></div>');
    // let info = $('#inputTri');
    // shapeContainer.append(help);

    // this.newSpace = $('.div');
    // this.newSpace.classList.add('triangle-up');
    // this.style.borderLeft = info.val();
    // this.style.borderRight = info.val();
    // this.style.borderBottom = info.val();
    // let please = $('<style>.triangle-up { width: 0; height: 0; border-left: info.val() solid transparent;border-right: info.val() solid transparent;border-bottom: info.val() solid #555;}</style>');
    // help.append(please);
    
});
createRectangle.click(function (event) {
    new Rectangle().createShape();
    // createShape();
    console.log('I am supposed to be square');

});
$('#addSquare').click(function (event) {
    new Square();

    console.log('what');
});
