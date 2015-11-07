for(i = 0; i < 100; i = i + 1) {
	var printNum = true;
	if (i % 3 == 0) {
		document.write("fizz");
		printNum = false;
	} 
	if (i % 5 == 0) {
		document.write("buzz");
		printNum = false;
	}
	if (printNum) {
		document.write(i);
	}
	document.write("<br>");
}