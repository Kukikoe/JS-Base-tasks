(function() {
	"use strict";
const n = document.getElementById("cycles-task-4-input-n");
const result = document.getElementById("cycles-task-4-result");

n.addEventListener("input", calc);

function calc() {
	let nNum = +n.value;
	let mult = 1;
	for (var i = nNum; i > 0; i--) {
			mult *= i;
	}
	result.innerHTML = mult;
}

})();