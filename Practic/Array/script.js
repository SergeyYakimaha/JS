'use script';

// filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(function(name) {
    return name.length < 5;    
});

const shortNames1 = names.filter(name => name.length < 5);

console.log(shortNames);
console.log(shortNames1);

// map
const answers = ['IvAn', 'AnnA', 'Hello'];
const result = answers.map(item => item.toLowerCase()).map(name => name[0].toLocaleUpperCase() + name.substr(1));

console.log(result);

// every/some

const some = [4, 'qwq', 'sadasd'];

console.log(some.some(item => typeof(item) === 'number'));
console.log(some.every(item => typeof(item) === 'string'));

// reduce

const arr = [4, 5, 1, 3, 2, 6];

const res = arr.reduce((sum, current) => sum + current);
console.log(res);

const arr1 = ['apple', 'pear', 'plum'];

const res1 = arr1.reduce((sum, current) => `${sum}, ${current}`);
console.log(res1);

// entries

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArray = Object.entries(obj)
    .filter(elem => elem[1] === 'persone')
    .map(elem => elem[0]);

console.log(newArray);






