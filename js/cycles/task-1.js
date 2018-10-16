(function() {
	"use strict";
	const sum = document.getElementById("sum");
	const countDiv = document.getElementById("count");
	const btn = document.getElementById("btn-find");
	btn.addEventListener("click", calc);

	function calc() {
		console.log("hello");
		let result = 0, count = 0;
		for (let i = 0; i < 100; i++) {
			if (i % 2 == 0) {
				result += i;
				count++;
			}
		}
		sum.innerHTML = result;
		countDiv.innerHTML = count;
	}

})();
