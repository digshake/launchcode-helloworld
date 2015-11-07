function fibonacci(N) {
	var num1 = 0;
	var num2 = 1;
	var num3 = 0;

	for (i = 0; i < N-2; i = i + 1) {
		num3 = num1 + num2;
		num1 = num2;
		num2 = num3;
	}
	return num3;
}