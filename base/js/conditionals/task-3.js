(function() {
	"use strict";
	const b = document.getElementById("task-3-input-b");
	const c = document.getElementById("task-3-input-c");
	const a = document.getElementById("task-3-input-a");
	const btn = document.getElementById("task-3-btn-calc");
	const result = document.getElementById("task-3-result");

	btn.addEventListener("click", calc);

	function calc() {
		let aNum = +a.value;
		let bNum = +b.value;
		let cNum = +c.value;
		if (aNum < 0) {
			aNum = 0;
		}
		if (bNum < 0) {
			bNum = 0;
		}
		if (cNum < 0) {
			cNum = 0;
		}
		result.innerHTML = aNum + bNum + cNum;
	}
})();