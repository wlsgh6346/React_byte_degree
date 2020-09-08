// async function 에서 return 되는 값은
// Promise.resole 함수로 감싸서 리턴된다.

function p(ms) {
    return new Promise((reslove,reject) => {
        setTimeout(() => {
            reslove(ms);
            reject(new Error('reason'));
        }, ms);
    });
}

async function asyncP() {
    const ms = await p(1000);
    return 'Mark';
}

(async function main() {
    try {
        const name = await asyncP();
        console.log(name);
    } catch {
        console.log(error);
    }
})();