/*
ES6 부터 javascript의 표준 내장 객체로 추가되었습니다.
ES6를 지원하는 브라우저나 Node.js 에서 전역에 있는 Promise를 확인할 수 있습니다.
*/
// 생성자를 통해서 프로미스 객체를 만들 수 있음
// 생성자의 인자로 executor라는 함수를 이용한다.
/*
executor 함수는 resolve 와 reject 를 인자로 가집니다.
   (resolve, reject) => {...}
resolve와 reject는 함수입니다.
   resolve(), reject()
*/
new Promise(/*excutor*/(resolve, reject) => {});

/*
생성자를 통해서 프로미스 객체를 만드는 순간 pending (대기) 상태라고 합니다.
*/

new Promise((resolve,reject) => {}); // pending

/*
executor 함수 인자 중 하나인 resolve 함수를 싱행하면, fulfilled (이행) 상태가 됩니다.
*/

new Promise((resolve, reject) => {
    //
    //...
    resolve(); // fulfilled
});

/*
executor 함수 인자 중 하나인 reject 함수를 실행하면, rejected (거부) 상태가 됩니다.
*/

new Promise((resolve, reject) => {
    reject(); //rejected
});

/*
p 라는 프로미스 객체는 1000ms 후에 fulfilled 됩니다. 
*/
new Promise((resolve,reject) => {
    /*pending */
    setTimeout(() => {
        resolve(); /* fulfilled */
    }, 1000);
});

/*
p 라는 프로미스 객체가 fulfilled 되는 시점에 p.then 안에 설정한 callback 함수가 실행됩니다.
*/
const p = new Promise((resolve,reject) => {
    /*pending */
    setTimeout(() => {
        resolve(); /* fulfilled */
    }, 1000);
});

p.then(() => {  //callback
    
});