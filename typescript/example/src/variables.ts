var score1 = 0; // function scope
let score2 = 200;   // block scope
const defaultScore = 0; // block scope

function outer() {
    if (true) {
        const score = 100;
    };

    for (let i=0; i<3; i++){
        setTimeout(function () {
            console.log(i);
        },100);
    }
}

outer();