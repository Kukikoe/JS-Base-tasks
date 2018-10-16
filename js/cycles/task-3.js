(function() {
	"use strict";
	const a = document.getElementById("cycles-task-3-input-a");
	const btn = document.getElementById("cycles-task-3-btn-calc");
	const result = document.getElementById("cycles-task-3-result");

	btn.addEventListener("click", rootOfANumber);

	function rootOfANumber() {
		let aNum = +a.value, root = 0;
		for (let i = 0; i < aNum; i++) {
			if (i * i == aNum) {
				root = i;
			}
			result.innerHTML = root;
		}
	}
})();