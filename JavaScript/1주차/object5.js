// 표준 내장 객체 : Array
const a = new Array('red', 'blue', 'white');
console.log(a, typeof a);
console.log(a instanceof Array);
console.log(a instanceof Object);

const b = ['red', 'green', 'yellow'];
console.log(b, typeof b);

console.log(b.slice(0,1));
console.log(Array.prototype.slice, Object.prototype.slice);