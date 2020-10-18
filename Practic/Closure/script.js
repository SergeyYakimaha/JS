'use script';

function test(number) {
    return function() {
        return number + 10;
    };
}

const p = test(20);

console.log(p());

function test1() {
    const n = 10;
    return function(number) {
        return number + n;
    };
}

const p1 = test1();

console.log(p1(50));