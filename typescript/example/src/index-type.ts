// 동적으로 쓸 수 있음
interface Props {
    name: string;
    [key: string]: string;
}
// key = string 이면 string number 둘 다 사용 가능, key = number 이면 number만 넣을 수 있음

const p: Props = {
    a: 'd',
    b: 'e',
    c: '3',
    0: 'd',
    1: 'b'
}


let keys: keyof Props;

interface User {
    name: string;
    age: number;
    hello(msg: string): void;
}

let keysOfUser: keyof User;
keysOfUser = "age";

let helloMethod: User['hello'];
helloMethod = function (msg: string) {

}