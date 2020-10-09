'use strict';

const elemsById = document.getElementById('box');
const elemsByClassName = document.getElementsByClassName('circle');
const elemsByTagName = document.getElementsByTagName('button');
const elemsByName = document.getElementsByName('circle_name');

const elemsAllCircle = document.querySelectorAll("button");

console.log(elemsById);
console.log(elemsByClassName);
console.log(elemsByTagName);
console.log(elemsByName);

console.log(elemsAllCircle);

elemsAllCircle.forEach(elem => (
    console.log(elem)
));
