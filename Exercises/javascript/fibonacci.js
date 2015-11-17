var num1 = 0;
var num2 = 1;
console.log(num1);
console.log(num2);
for (i = 0; i < 10; i = i + 1) {
	var num3 = num1 + num2;
	console.log(num3);
	num1 = num2;
	num2 = num3;
}