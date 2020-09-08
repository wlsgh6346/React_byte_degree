//생성자 함수
function Person(name, age) {    // this를 발생시켜서 아래와 같이 생성자 함수로 사용 가능
    console.log(this);
    this.name = name;
    this.age = age;
}

const p = new Person('Mark', 37);

console.log(p, p.name, p.age);

const a = new Person('Anna', 26);

console.log(a, a.name, a.age);

const Cat = (name, age) => { // this를 발생시키지 않음 생성자 함수 사용 불가
    this.name = name;
    this.age = age;
};

// 함수를 호출하면 함수를 만들어서 리턴

function plus(base) {
    return function(num) {
        return base + num;
    }
}

const plus5 = plus(5);
console.log(plus5(10));

const plus7 = plus(7);
console.log(plus7(8));

// 함수를 인자로 하여 함수를 호출

function hello(callback) {
    console.log('hello');
    callback();
}

hello(function() {
    console.log('callback');
})