// 멤버 변수
class A {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

console.log(new A('Mark', 37));

// class field는 런타임 확인

class B {
    name;
    age;
}

console.log(new B());

class C {
    name = 'no name';
    age = 0;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
console.log(new C('Mark', 37));

// 멤버 함수
class a {
    hello1() {
        console.log('hello1', this);
    }

    hello2 = () => {
        console.log('hello2', this);
    }

    hello3 = () => {
        console.log('hello3', this);
    }
    
}
new a().hello1();
new a().hello2();
new a().hello3();