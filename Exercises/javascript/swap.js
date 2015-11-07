var x = 3;
var y = 5;

if (y > x) {
	var temp = x;
	x = y;
	y = temp;
}

document.write(x);
document.write(y);