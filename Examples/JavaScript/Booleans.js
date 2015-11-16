//Relational operators
window.alert("3 > 4: " + (3 > 4) );
window.alert("3.5 < 7: " + (3.5 < 7) );

window.alert("3 == 3: " + (3 == 3) );
//Why not this?
//3 = 3;

window.alert("3 != 3: " + (3 != 3) );
window.alert("2 <= 1 + 1: " + (2 <= 1 + 1) );

//Logical operators:
var p = true;
var q = false;

//Not:
window.alert("Not true: " + !p );
window.alert("Not false: " + !q );

//And:
window.alert("true && true: " + (p && p) );
window.alert("true && false: " + (p && q) );
window.alert("false && true: " + (q && p) );
window.alert("false && false: " + (q && q) );

//Or
window.alert("true || true: " + (p || p) );
window.alert("true || false: " + (p || q) );
window.alert("false || true: " + (q || p) );
window.alert("false || false: " + (q || q) );

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
