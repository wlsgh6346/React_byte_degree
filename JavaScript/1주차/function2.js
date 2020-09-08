// 생성자 함수로 함수를 만드는 방법

const sum = new Function('a','b','c', 'return a + b + c');
console.log(sum(1,2,3));


global.a = 0;

{
    const a = 1;
    const test = new Function('return a');
    console.log(test());
}

{
    const a = 2;

    const test = function() {
        return a;
    };

    console.log(test());
}

// arrow function (es6)
// arrow 함수를 만들어 이름이 hello1 인 변수에 할당

const hello1 = () => {
    console.log('heelo1');
};

// 매개변수 arrow 하나일때, 괄호 생략 가능
const hello2 = (name) => {
    console.log('hello2', name);
};

const hello3 = (name, age) => {
    console.log('hello3', name, age);
};

// 함수의 리턴
const hello4 = name => {
    return `hello4 ${name}`;
};

const hello5 = name => `hello5 ${name}`;