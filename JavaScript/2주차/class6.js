// 변수, 함수 추가 및 오버라이딩

class Parent {
    name = 'Lee';
    hello() {
        console.log('hello', this.name);
    }
}

class Child extends Parent {
    age = 37;
    hello() {
        console.log('hello', this.name, this.age);
    }
}

const p = new Parent();
const c = new Child();
console.log(p, c);
c.hello();
c.name = 'anna';
c.hello();