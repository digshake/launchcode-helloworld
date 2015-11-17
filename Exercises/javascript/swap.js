var x = 3;
var y = 5;

if (y > x) {
	var temp = x;
	x = y;
	y = temp;
}

console.log(x);
console.log(y);