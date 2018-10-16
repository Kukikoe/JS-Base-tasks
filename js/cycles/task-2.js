(function() {
	"use strict";
const a = document.getElementById("cycles-task-2-input-a");
const result = document.getElementById("cycles-task-2-result");

a.addEventListener("input", calc);

function calc() {
	let aNum = Math.abs(+a.value);
	if (aNum == 1 || aNum == 2) {
		result.innerHTML = "Yes";
		return;
	}
	for (let i = 2; i < aNum; i++) {
		if (aNum % i == 0) {
			result.innerHTML = "No";
			return;
		}
		else {				
			result.innerHTML = "Yes";
		}
	}
}
})();