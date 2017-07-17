'use strict';
'esversion: 6';
var first = "Привет ";
var second = " JS";
var msg = first + second;

for(let i=0; i < msg.length; i++) {
    document.write(msg.charAt(i) + " " + msg.charCodeAt(i) + "<br />");
    //document.write(msg[i] + "<br />");
}

document.write(msg.charAt(100) === "");
document.write(msg[-1]);
document.write("<br />");

var idx = msg.indexOf("JS");
document.write(msg);
document.write(" idx = " + idx);
document.write("<br />");

idx = msg.lastIndexOf("l");
document.write(" idx = " + idx);
document.write("<br />");

idx = msg.search("ll");
document.write(" idx = " + idx);
document.write("<br />");


var d = "date 10/11/2016 date 15/12/2015";
// dd/mm/YYYY
// цц/цц/цццц
// \d - любай одиночная цифра
// \d\d\/\d\d\/\d\d\d\d
var pattern = /(\d\d\/\d\d\/\d\d\d\d)/g;
idx = d.search(pattern);
document.write(d);
document.write(" idx = " + idx);
document.write("<br />");

var m = d.match(pattern);
document.write(" m = " + m + "<br />");
idx += m[0].length;

var last = d.substr(idx);
document.write(" last = " + last);
document.write("<br />");


for(let i=1039; i<1106; i++) {
    //document.write(i + ": " + String.fromCharCode(i) + "<br />");
}

// сравнение строк в национальных символов
if("eё".localeCompare("eя") > 0) {
    document.write("eё > eя <br />");
} else if("eё".localeCompare("eя") < 0) {
    document.write("eё < eя <br />");
}else {
    document.write("eё = eя <br />");
}

// msg[0] = "I"; error
//
document.write(msg.concat("!") + "<br/>");
document.write(msg + "<br />");

var number = 1233445;
var s = number;
document.write(typeof s + "<br />");

document.write("<hr />");

//                            -6 -5 -4 -3 -2 -1
var str = "some strIng string String";
idx = str.search("strIng");

document.write(str.substr(idx, 6) + "<br />");
document.write(str.substring(idx, -6) + "<br />");
document.write(str.slice(4, -6) + "<br />");

document.write("document.html".slice(-4) + "<br />");


str = str.replace("strIng", "строка");
document.write(str + "<br />");

// разделяет строку и возвращает массив строк
var strarr = str.split(" ");
strarr.forEach((item) => {
   document.write(item + "<br />"); 
});

document.write(str.toLowerCase() + "<br />");
document.write(str.toUpperCase() + "<br />");

str = "  \t   \t " + str + "  \t\t ";

document.write("<pre>" + str.trim() + "</pre>test");
