let createCircle = $('#addCircle');
let createTriangle = $('#addTriangle');
let createSquare = $('#addSquare');
let createRectangle = $('#addRectangle');
let shapeContainer = $('#shape-canvas')

class Shapes {
    constructor(height, width, x, y) {
        this.height = height;
        this.width = width;
        this.x = x;
        this.y= y;

    }
    createShape() {
        let help = $('<div class="triangle-up"></div>');
        let info = $('#inputTri');
        shapeContainer.append(help);
    }
};

class Circle extends Shapes {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    createShape() {
        const canvas = document.querySelector('.canvas');
        const c = canvas.getContext('2d');
        const x= Math.random() * canvas.width;
        const y= Math.random() * canvas.height;

        c.beginPath();
        c.arc(x, y, $('#inputRadius').val(), 0, Math.PI*2);
        c.strokeStyle = 'blue';
        c.stroke();

        console.log('hey');
    };
};

class Triangle extends Shapes {
    constructor(x, y, height, width) {
        super(x, y, height, width);

        // all sides are equal, so they're the same sizes
    }
    createShape() {
        const canvas = document.querySelector('.canvas');
        const c = canvas.getContext('2d');
        const x= Math.random() * canvas.width;
        const y= Math.random() * canvas.height;
        
        c.fillStyle= 'green';
        c.beginPath();
        c.moveTo(x, y);
        c.lineTo(50, 250);
        c.lineTo(250, 250);
        c.fill();
        // c.triangle(x, y, $('#inputTri').val(), $('#inputTri').val());

        // let help = $('<div class="triangle-up"></div>');
        // let info = $('#inputTri');
        // shapeContainer.append(help);

    }
}
class Rectangle extends Shapes {
    constructor(x, y, height, width) {
        super(x, y, height);
        this.width = width;
    }
    createShape() {
        const canvas = document.querySelector('.canvas');
        const c = canvas.getContext('2d');
        const x= Math.random() * canvas.width;
        const y= Math.random() * canvas.height;
        
        c.strokeStyle = 'yellow'
        c.lineWidth = '2';
        c.rect(x, y, $('#widthRect').val(), $('#heightRect').val());
        c.stroke();
    };
}
class Square extends Shapes {
    constructor(x, y, sideLength) {
        super(x, y);
        this.sideLength = sideLength;
    }
    createShape () {
        const canvas = document.querySelector('.canvas');
        const c = canvas.getContext('2d');
        const x= Math.random() * canvas.width;
        const y= Math.random() * canvas.height;

        c.beginPath();
        c.lineWidth = '2';
        c.strokeStyle = 'purple';
        c.rect(x, y, $('#sides').val(), $('#sides').val(),)
        c.stroke();
        // c.fillRect(x, y, $('#sideLength').val(), $('#sideLength').val());
    };
};


$('form').click((e) => {
    e.preventDefault();
});

createCircle.click(function (event) {
    // new Circle();
    let c1= new Circle();
    c1.createShape();
});

createTriangle.click(function (event) {
    let t1= new Triangle();
    t1.createShape();
    console.log('bet')
    // let help = $('<div class="triangle-up"></div>');
    // let info = $('#inputTri');
    // shapeContainer.append(help);


    // this.style.borderLeft = info.val();
    // this.style.borderRight = info.val();
    // this.style.borderBottom = info.val();
    // let please = $('<style>.triangle-up { width: 0; height: 0; border-left: info.val() solid transparent;border-right: info.val() solid transparent;border-bottom: info.val() solid #555;}</style>');
    // help.append(please);

});
createRectangle.click(function () {
   let r1= new Rectangle();
    r1.createShape();

    console.log('I am supposed to be square');
});

createSquare.click(function (event) {
    let s1= new Square ();
    s1.createShape();

    console.log('what');
});
