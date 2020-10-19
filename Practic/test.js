'use strict';
 
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
 
    calcArea() {
        return this.height * this.width;
    }
}
 
class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }
 
    newCalcArea() {
        return super.calcArea();
    }
}
 
const square = new Rectangle(10, 10),
      long = new Rectangle(20, 100),
      coloredRec = new ColoredRectangleWithText(5, 10, 'Hello World', 'red');
 
console.log(coloredRec.newCalcArea());