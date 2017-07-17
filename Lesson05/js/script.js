function print(text) {
    document.writeln("<pre>");
    document.writeln(text);
    document.writeln("</pre>");
}

var re = /(\d{2})\/(\d{2})\/(\d{4})/igm;

var test ="10/01/2014";
var m = test.match(re);

print(m);

print(test.replace(re, "$3-$2-$1"));

print("10/10.9239-19290".split(/[\/.-]/));

if(re.test("12/32/1234")) {
    document.write("Yes");
} else {
    document.write("No");
}
document.write("<br />");
if(re.global) {
    document.writeln("global search<br/>");
}
if(re.ignoreCase) {
    document.writeln("case insensitive<br/>");
}
if(re.multiline) {
    document.writeln("multiline search<br/>");
}
re.index = 0;
re.lastIndex = 0;
test = "12/14/1098 12/43/1234 98/76/1234";
var mm;
while((mm = re.exec(test)) !== null) {
    print(mm.index);
    //print(mm.lastIndex);
    print(mm[0]);
    print(mm[1]);
    print(mm[2]);
    print(mm[3]);
    re.index++;
    document.write("<hr />");
}