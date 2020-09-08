if (false) console.log(false);
if(0) console.log(0);
if('') console.log('');
if(null) console.log(null);
if(undefined) console.log(undefined);
if(NaN) console.log(NaN);

if (true) console.log(true);
if(37) console.log(37);
if(-37) console.log(-37);
if('Mark') console.log('Mark');
if({}) console.log({});
if([]) console.log([]);
if(-1) console.log(-1);
let n=7;
const multipleOfThree = n % 3 === 0;
const multipleOfFive = n % 5 === 0;

if (multipleOfThree && multipleOfFive) {
    console.log('n 은 15 의 배수입니다.');
} else {
    if (multipleOfFive) {
        console.log('n은 5의 배수입니다.');
    } else if (multipleOfThree) {
        console.log('n은 3의 배수입니다.');
    } else {
        console.log('n은 3배수도 아니고 5배수도 아니다.');
    }
}
console.log('--------------------------------');
// 표현식 && 표현식
// 둘다 참 일때만 참이다.
// 표현식은 앞에 먼저 평가하고, 뒤에를 평가한다.
// 앞 표현식을 평가를 해서 참 일때만, 뒤 표현식을 평가할 필요가 생기기 때문에 뒤의 표현식이 실행된다.

let nn = 5;

(nn % 5 === 0) && console.log('5로 나누어 떨어질때만 실행1');

// 앞 표현식의 평가 결과가 거짓일때는 뒤 표현식을 평가할 필요가 없어서 실행하지 않는다.

nn = 6;

(nn % 5 === 0) && console.log('5로 나누어 떨어질때만 실행2');

// 표현식 || 표현식
// 둘 중에 하나만 참이면 참이다.
// 앞 표현식을 평가를 해서 참 이면, 뒤 표현식을 평가할 필요가 없어서 실행하지 않는다.

nn = 5;

(nn % 5 === 0) || console.log('5로 나누어 떨어지지 않을때만 실행3');

// 앞 표현식을 평가를 해서 거짓 일때만, 뒤 표현식을 평가할 필요가 생기기 때문에 뒤의 표현식이 실행된다.

nn = 6;

(nn % 5 === 0) || console.log('5로 나누어 떨어지지 않을때만 실행4');

console.log('--------------------------------');
// 조건 ? 조건이 참이면 실행되는 표현식 : 조건이 거짓이면 실행되는 표현식
// 중괄호 {} 를 사용할 수 없는 문법이기 때문에 하나의 표현식만 가능합니다.

let nnn = 5;
console.log(nnn % 5 === 0 ? '5의 배수입니다.' : '5의 배수가 아니다.');

// 표현식의 결과를 변수에 할당할 수 있습니다.

const message = n % 5 === 0 ? '5의 배수입니다.' : '5의 배수가 아니다.'
console.log(message)

console.log('--------------------------------');

// break 와 case 문의 순서를 잘 조정하여, 원하는 코드를 만들어 낼 수 있도록 제대로 이해해야 합니다.

n = 6;

switch (n % 5) {
    case 0 :
        console.log('5의 배수임');
        break;
    case 1:
    case 2:
    case 3:
    case 4:
        console.log('5의 배수가 아님');
    default:
        console.log(n);
}