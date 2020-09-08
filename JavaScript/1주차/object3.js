// new object 표준 내장 객체
const a = new Object();
console.log(a, typeof a);

const b = new Object(true);
console.log(b, typeof b);

const c = new Object({name:'Mark'});
console.log(c, typeof c);

// prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.hello = function() {
        console.log('hello', this.name, this.age);
    };
}

Person.prototype.hello = function() {
    console.log('hello', this.name, this,age);
}

const p = new Person('Mark', 37);
p.hello();
console.log(p.toString());

console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor);
console.log(Person.hello);  //객체로 생성되어야 사용 가능
console.log(Person.prototype.hello);

console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor);

console.log(p instanceof Person);
console.log(p instanceof Object);