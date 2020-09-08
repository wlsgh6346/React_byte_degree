// prototype 상속

function Person() {}

Person.prototype.hello = function() {
    console.log('hello');
};

function Korean(region) {
    this.region = region;
    this.where = function() {
        console.log('where', this.region);
    };
}

Korean.prototype = Person.prototype;

const k = new Korean('Seoul');

k.hello();
k.where();

console.log(k instanceof Korean);
console.log(k instanceof Person);
console.log(k instanceof Object);

// 객체 리터럴

const a = {};

console.log(a, typeof a);

const b = {
    name: 'Mark'
};

console.log(b, typeof b);

const c = {
    name: 'Mark',
    hello1() {
        console.log('hello1', this);
    },
    hello2: function() {
        console.log('hello2',this);
    },
    hello3: () => {
        console.log('hello3', this);       //this 가져오지 못함 arrow function
    },
};

c.hello1();
c.hello2();
c.hello3();