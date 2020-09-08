// class
// 선언적 방식
// 선언적 방식이지만 hoisting이 안됨! - es6 이후 추가된 방식이라 그럴 수 있음
class A {}

console.log(new A());

// class 표현식을 변수에 할당
const B = class {};

console.log(new B());

// constructor
class a {}
console.log(new a());

class b {
    constructor() {
        console.log('constructor');
    }
}

console.log(new b());

class c {
    constructor(name, age) {
        console.log('constructor',name,age);
    }
}

console.log(new c('Mark', 37));
console.log(new c());