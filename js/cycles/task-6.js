(function() {
	"use strict";
	const n = document.getElementById("cycles-task-6-input-n");
	const result = document.getElementById("cycles-task-6-result");
	const btn = document.getElementById("cycles-task-6-btn-reverse");

	btn.addEventListener("click", reverse);

	function reverse() {
		let nStr = n.value;
		let sum = "";
		for (let i = nStr.length - 1; i >= 0; i--) {
			sum += nStr[i];
		}
		result.innerHTML = sum;
	}

})();