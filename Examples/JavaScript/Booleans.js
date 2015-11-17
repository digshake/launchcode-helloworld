//Relational operators
console.log("3 > 4: " + (3 > 4) );
console.log("3.5 < 7: " + (3.5 < 7) );

console.log("3 == 3: " + (3 == 3) );
//Why not this?
//3 = 3;

console.log("3 != 3: " + (3 != 3) );
console.log("2 <= 1 + 1: " + (2 <= 1 + 1) );

//Logical operators:
var p = true;
var q = false;

//Not:
console.log("Not true: " + !p );
console.log("Not false: " + !q );

//And:
console.log("true && true: " + (p && p) );
console.log("true && false: " + (p && q) );
console.log("false && true: " + (q && p) );
console.log("false && false: " + (q && q) );

//Or
console.log("true || true: " + (p || p) );
console.log("true || false: " + (p || q) );
console.log("false || true: " + (q || p) );
console.log("false || false: " + (q || q) );

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
