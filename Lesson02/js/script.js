'use strict';
'esversion: 6';
let a = 5;
{
    var b = 20;
    let a = 10;
    document.write(a + "<br />");
}
document.write(a + "<br />");
document.write("b: " + b + "<br />");

function foo() {
    let b = 5;
    b = 10;
    document.write("b: " + b + "<br />");
}
foo();
document.write("b: " + b + "<br />");

for(let i=0; i<10; i++) {}

{
    const PI = 3.14;
    document.write("pi: " + PI + "<br />");
}
//document.write("pi: " + PI + "<br />");

function to_html(text, teg = "p") 
{
    //teg = teg || 'p';
    
    document.write("<"+teg+">");
    document.write(text);
    document.write("</"+teg+">");
}

to_html("test text");

function add(a, b)
{
    if(isFinite(a) && isFinite(b)) 
    {
        return a + b;
    }
}

function sum() {
    let s = 0;
    console.log("args: " + arguments.length);
    for(let i=0; i<arguments.length; i++) {
        console.log("arg[" + i + "] = " + arguments[i]);
        if(arguments[i] instanceof Array) {
            console.log("array");
            for(let j=0; j<arguments[i].length; j++) {
                if(isFinite(arguments[i][j])) {
                    s += arguments[i][j];
                }   
            }
        }
        if(isFinite(arguments[i])) {
            s += arguments[i];
        }
    }
    return s;
}



to_html(add(2,"test"), "h1");

to_html(sum(1, 2, 3, "test", [1, 'second']));


function varargs(arg1, ...args) {
    console.log(arg1);
    for(let arg of args) {
        console.log(arg);
    }
}

varargs('first', 'second', 'third');

