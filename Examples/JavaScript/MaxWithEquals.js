var max;
if (x > y) {
	max = x;
	document.write("x is bigger");
}
if(x == y) {
	max = y;
	document.write("They are the same");
}
if(x < y) {
	max = y;
	document.write("y is bigger");
}
document.write("<br>");
document.write("max is " + max);

