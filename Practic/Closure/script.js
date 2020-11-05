'use script';

const fn1 = str => 'prex_' + str;
const fn2 = str => str.toUpperCase();

// function compose() {
//     const args = Array.from(arguments).reverse();
//     return function(text) {
//         return args.reduce((result, current) => result + current(text), '');
//     };
// }

function compose(...args) {
    return function(text) {
      return args.reverse().reduce((result, fn) => fn(result), text);
    };
  }


const tt = compose(fn1, fn2, fn2, fn2);
console.log(tt('text'));

const txt = compose(fn1, fn2, fn2, fn2)('text');
console.log(txt);


// const fn3 = str => 'prex_' + str;
// const fn4 = str => str.toUpperCase();

// const compose1 = (...args) => (text) => args.reverse().reduce((result, fn) => fn(result), text);

// console.log(compose1(fn3, fn4, fn4, fn3)('text'));


// function t1(n1) {
//   return function t2(n2) {
//     return function t3(n3) {
//       return n1 + n2 + n3;
//     };
//   };
// }

// console.log(t1(1)(2)(3));


//console.log(compose(fn1, fn2, fn2));

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