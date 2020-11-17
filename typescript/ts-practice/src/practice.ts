interface Shape {
    getArea(): number;
}

class Circle implements Shape {

    constructor(public radius: number){
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    constructor(public width: number, public height: number) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const circle: Circle = new Circle(5);
const rectangle: Rectangle = new Rectangle(2, 5);
const shapes: Shape[] = [circle, rectangle];

shapes.forEach(shape => {
    console.log(shape.getArea());
});

//type alias (타입 별칭)
// interface로는 못하는 걸 몇개 할 수 있음
type Person = {
    name: string;
    age?: number;
}

type Developer = Person & {
    name: string,
    age?: number,
    skills: string[],
}

const person:Person = {
    name: 'adfaafd',
    age: 20,
}

const expert: Developer = {
    name: 'dkanro',
    age: 25,
    skills: ['javascript', 'react', 'typescript'],
}

type People = Person[];
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'orange'; 
