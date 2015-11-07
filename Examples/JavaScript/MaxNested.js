var max;
if(x > y) {
	max = x;
	document.write("x is bigger");
} else {
	max = y;
	if (x == y) {
		document.write("They are the same");
	} else {
		document.write("y is bigger");
	}
}
document.write("<br>");
document.write("max is " + max);

