"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(2, 5);
const shapes = [circle, rectangle];
shapes.forEach(shape => {
    console.log(shape.getArea());
});
const person = {
    name: 'adfaafd',
    age: 20,
};
const expert = {
    name: 'dkanro',
    age: 25,
    skills: ['javascript', 'react', 'typescript'],
};
const people = [person, expert];
const color = 'orange';
