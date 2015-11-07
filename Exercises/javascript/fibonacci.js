var num1 = 0;
var num2 = 1;
document.write(num1 + "<br>");
document.write(num2 + "<br>");
for (i = 0; i < 50; i = i + 1) {
	var num3 = num1 + num2;
	document.write(num3 + "<br>");
	num1 = num2;
	num2 = num3;
}