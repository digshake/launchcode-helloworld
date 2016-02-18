//Relational operators
document.write("3 > 4: " + (3 > 4) + "<br>");
document.write("3.5 < 7: " + (3.5 < 7) + "<br>");

document.write("3 == 3: " + (3 == 3) + "<br>");
//Why not this?
//3 = 3;

document.write("3 != 3: " + (3 != 3) + "<br>");
document.write("2 <= 1 + 1: " + (2 <= 1 + 1) + "<br>");

//Logical operators:
var p = true;
var q = false;

//Not:
document.write("Not true: " + !p + "<br>");
document.write("Not false: " + !q + "<br>");

//And:
document.write("true && true: " + (p && p) + "<br>");
document.write("true && false: " + (p && q) + "<br>");
document.write("false && true: " + (q && p) + "<br>");
document.write("false && false: " + (q && q) + "<br>");

//Or
document.write("true || true: " + (p || p) + "<br>");
document.write("true || false: " + (p || q) + "<br>");
document.write("false || true: " + (q || p) + "<br>");
document.write("false || false: " + (q || q) + "<br>");

//Exercises: what is the output of the following?

var a = p || !p;
var b = q || !q;

var c = p && !p;
var d = q && !q;

var e = !(!p || !q);
var f = !(!p || !p);

var g = p && q == !(!p || !q);

//How would I check to see if an number is between 1 and 10?
//Think carefully, it may not be as obvious as it seems!
