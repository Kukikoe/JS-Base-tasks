(function() {
	"use strict";
	const x = document.getElementById("input-x");
	const y = document.getElementById("input-y");
	const btn = document.getElementById("btn-ident");
	const result = document.getElementById("task-2-result");

	btn.addEventListener("click", calc);

	function calc() {
		let xNum = +x.value;
		let yNum = +y.value;
		if (xNum > 0 && yNum > 0) {
			result.innerHTML = "I";
		}
		else if (xNum < 0 && yNum > 0) {
			result.innerHTML = "II";
		}
		else if (xNum < 0 && yNum < 0) {
			result.innerHTML = "III";
		}
		else if (xNum > 0 && yNum < 0) {
			result.innerHTML = "IV";
		}
		else if (xNum == 0 && yNum == 0) {
			result.innerHTML = "Origin";
		}
	}
})();
