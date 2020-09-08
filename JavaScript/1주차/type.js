// boolean
let whatever = 'Mark';
whatever = 37;
whatever = false;

const isTrue = true;
const isFalse = false;

console.log(isTrue, typeof isTrue);
console.log(isFalse, typeof isFalse);

//object
const a = new Boolean(false);
console.log(a, typeof a);
if (a) {
    console.log('false?');
}

const b = Boolean(false);
console.log(b, typeof b);
if (b) {
    console.log('false?');
}
console.log('----------------------------');
//Null
const isNull = null;
console.log(isNull, typeof isNull);
//Undefined
let isUndefined;
console.log(isUndefined, typeof isUndefined);

if (a==b) {
    console.log(a==b);
}
if (a===b) {
    console.log(a===b);
}
console.log('----------------------------');
//Number
const n = 37;
console.log(n, typeof n);
const c = NaN;
console.log(c, typeof c);
const d = Number('Mark');
console.log(d, typeof d);
const e = Number('37');
console.log(e, typeof e);
console.log('----------------------------');
//String
const s = 'Mark';
console.log(s, typeof s);
const ss = 'Mark' + ' Lee';
const sss = s + ' Lee';
console.log(sss, typeof sss);

const ssss = `${s} Lee`;    // templete string ***
console.log(ssss, typeof ssss);
console.log('----------------------------');
//Symbol - ES6부터 출현
const sym = Symbol();
const sym2 = Symbol(37);
const sym3 = Symbol('Mark');
const sym4 = Symbol('Mark');
console.log(sym, typeof sym);
console.log(c===d);

new Symbol();

























