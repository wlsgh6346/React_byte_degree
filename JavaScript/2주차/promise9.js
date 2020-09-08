/*
보통 비동기 작업을 할 때, callback 함수를 인자로 넣어 로직이 끝나면 callback 함수를 호출합니다.
이런 경우 함수가 아래로 진행되지 않고, callback 함수 안으로 진행됩니다. 
*/

function c(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}
c(() => {
    console.log('1000ms 후에 callback 함수가 실행됩니다.');
});

c(() => {
    c(() => {
        c(() => {
            console.log('3000ms 후에 callback 함수가 실행됩니다.');
        });
    });
});