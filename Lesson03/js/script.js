'use strict';
'esversion: 6';

let f = function(a, b) {
    document.write("a: " + a + " b: " + b + "<br />");    
};

f(1,2);

function boo(func, a, b) {
    document.write("call function " + func + "<br />");
    func(a, b);
}

boo(f, 10, 20);

boo(function(a, b){
    document.write("a x b = " + (a  * b) + "<br />");
}, 5, 6);

boo((a, b) => {
    document.write("a + b = " + (a  + b) + "<br />");
}, 10, 30);

var add = (a, b) => a > b;

document.write(add(1, 2));

function print_arr(arr) {
    document.write("<p>");
    document.write(arr);
    document.write("</p>");
}

/////////////////////////////////////////
///////         arrays          /////////
/////////////////////////////////////////
var arr = [1, 2, 3, 4, 5]; // создание и инициализация
print_arr(arr);
arr = new Array(10);   // создание на 10 элементов
print_arr(typeof(arr[0]));
arr = new Array(10, 20, 30);   // создание на 3 элемента
print_arr(arr);

// resize
arr = [1,2,3,4,5,6];
arr.length = 10;
print_arr(arr);

arr.length = 2;
print_arr(arr);

//arr.length = 10;
//print_arr(arr);

// for
for(let i=0; i<arr.length; i++) {
    print_arr(i + ": " + arr[i]);
}

// foreach
for(let item of arr) {
    print_arr(item);
}

// foreach
for(let idx in arr) {
    print_arr(idx + ": " + arr[idx]);
}

print_arr(Array.isArray(arr));

///////////////////////////////////////
/////           methods         ///////
///////////////////////////////////////
document.write("<hr />");
print_arr(arr);

// LIFO
// добавление элементов в конец массива
arr.push(5);
arr.push(120);
arr.push(15);
arr[arr.length] = 345;
print_arr(arr);

// выталкивание с конца 
print_arr(arr.pop());
print_arr(arr);

var pop = (arr) => {
    let last = arr[arr.length - 1];
    arr.length -= 1;
    return last;
};
print_arr(pop(arr));
print_arr(arr);

// добавление элемента в начало массива
arr.unshift(56);
arr.unshift(16);
print_arr(arr);

// выталкивание элемента с начала
print_arr(arr.shift());
print_arr(arr);

arr = arr.concat([1, 3, 4, 2], [10, 20]);
print_arr(typeof arr);
for(let i in arr) {
    print_arr(i + ") " + arr[i]);
}

function test(item, idx, arr) {
    print_arr("item: " + item + " idx: " + idx + " arr : " + arr);
    return item > 0;
}

if(arr.every(test)) {
    print_arr("All items are positive");
} else {
    print_arr("Some items are negative");
}

if(arr.some((item) => item < 0)) {
    print_arr("Some items are negative");
} else {
    print_arr("All items are positive");
}

var odds = arr.filter(function(item) {
    return item % 2;
});

print_arr(odds);
document.write("<hr/>");
arr.forEach((item, idx, arr) => {
     print_arr("item: " + item + " idx: " + idx + " arr : " + arr);       
});

var idx = -1;
do{
    idx = arr.indexOf(1, ++idx);
    if(idx > 0)
        print_arr("idx: " + idx + " next value: " + arr[idx]);    
} while(idx > 0);


idx = arr.lastIndexOf(1);
print_arr("idx: " + idx + " last value: " + arr[idx]);   

print_arr(arr.join(' => '));

var sqrt_arr = arr.map(Math.sqrt);

print_arr(arr);
print_arr(sqrt_arr);


var parr = arr.reduce((accum, item) => accum * item, 1);
print_arr(parr);

var rarr = arr.reverse();
print_arr(rarr);

// получение подмассива
print_arr(rarr.slice(2, 5));

print_arr(rarr.splice(3, 0, 1000, 2000, 3000));
print_arr(rarr);


rarr.sort(function(item1, item2){return item1 > item2});
print_arr(rarr);
