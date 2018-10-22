(function() {
	"use strict";
const n = document.getElementById("cycles-task-5-input-n");
const result = document.getElementById("cycles-task-5-result");
const btn = document.getElementById("cycles-task-5-btn-calc");

btn.addEventListener("click", calc);

function calc() {
	let nNum = n.value;
	let sum = 0;
	for (let i = 0; i < nNum.length; i++) {
			sum += +nNum[i];
	}
	result.innerHTML = sum;
}
})();