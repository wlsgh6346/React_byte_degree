// 함수 먼저
function hello1() {
    console.log('hello1');
}

hello1();

// 함수 호출을 먼저
hello2();

function hello2() {
    console.log('hello2');
}

// var hoisting
age=6;
age++;
console.log(age);

var age;

// 실제로는 선언부만 위로 올라가게 됨 - 값은 안가져감
console.log(name); // undefined

name='Mark';

console.log(name);

var name = 'Woongjae';

