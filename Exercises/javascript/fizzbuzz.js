for(i = 0; i < 100; i = i + 1) {
	var printNum = true;
	if (i % 3 == 0) {
		console.log("fizz");
		printNum = false;
	} 
	if (i % 5 == 0) {
		console.log("buzz");
		printNum = false;
	}
	if (printNum) {
		console.log(i);
	}
	console.log("<br>");
}