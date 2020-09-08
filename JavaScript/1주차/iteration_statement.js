// for of - iterable한 객체에 사용 - ex) 배열

for (const i of [1, 2, 3]){
    console.log(i);
}

// for in - 모든 property

//예상하지 못한 property가 있으면 개발자의 의도와 다르게 출력될 수 있다. - for in 단점
Object.prototype.test = function() {};  

for (const i in { a:1, b:2, c:3}) {
    console.log(i);
}