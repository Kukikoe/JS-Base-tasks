(function() {
	"use strict";
	const a = document.getElementById("task-4-input-a");
	const b = document.getElementById("task-4-input-b");
	const c = document.getElementById("task-4-input-c");
	const btn = document.getElementById("task-4-btn-calc");
	const result = document.getElementById("task-4-result");

	btn.addEventListener("click", calc);

	function calc() {
		let aNum = +a.value;
		let bNum = +b.value;
		let cNum = +c.value;
		let plus = aNum + bNum + cNum;
		let multiply = aNum * bNum * cNum;
		result.innerHTML = plus > multiply ? plus + 3 : multiply + 3;
	}
})();
