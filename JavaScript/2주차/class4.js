// static 객체x, 클래스의 변수와 함수

class A {
    static age = 37; // class 내부의 static 변수
    static hello() {
        console.log(A.age);
    }
}
console.log(A, A.age);
A.hello();

class B {
    age = 37;
    static hello() {
        console.log(this.age);
    }
}

console.log(B, B.age);
// new B().hello(); -> x

class C {
    static name = '이 클래스의 이름을 C가 아니다.';
}
console.log(C);