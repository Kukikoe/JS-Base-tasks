
var sum = document.getElementById("sum");
var countDiv = document.getElementById("count");

function calc() {
	console.log("hello");
	var result = 0, count = 0;
	for (var i = 0; i < 100; i++) {
		if (i % 2 == 0) {
			result += i;
			count++;
		}
	}
	sum.innerHTML = result;
	countDiv.innerHTML = count;
}

calc();