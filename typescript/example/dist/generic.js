function createPromise(x, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x);
        }, timeout);
    });
}
createPromise(10, 100)
    .then(v => console.log(v));
function createTuple2(v, v2) {
    return [v, v2];
}
const t1 = createTuple2("user1", 1000);
//# sourceMappingURL=generic.js.map