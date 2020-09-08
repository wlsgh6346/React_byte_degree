// Promise 객체를 리턴하는 함수

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
}

// Promise 객체를 이용해서 비동기 로직을 수행할 때

p(1000).then(ms => {
    console.log(`${ms} ms 후에 실행된다.`);
});

// Promise 객체를 리턴하는 함수를 await 로 호출하는 방법

const ms = await p(1000);
console.log(`${ms} ms 후에 실행된다.`);