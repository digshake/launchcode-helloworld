var max;
if(x > y) {
	max = x;
	window.alert("x is bigger");
} else {
	max = y;
	if (x == y) {
		window.alert("They are the same");
	} else {
		window.alert("y is bigger");
	}
}
window.alert("max is " + max);

