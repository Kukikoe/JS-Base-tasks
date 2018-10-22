(function() {
	"use strict";
	const xANum = document.getElementById("input-a-x");
	const yANum = document.getElementById("input-a-y");
	const xBNum = document.getElementById("input-b-x");
	const yBNum = document.getElementById("input-b-y");
	const btn = document.getElementById("functons-task-4-btn-find-out");
	const result = document.getElementById("functons-task-4-result");

	btn.addEventListener("click", getDistanceBetweenTwoPoints);

	function getDistanceBetweenTwoPoints() {
		let xA = +xANum.value, xB = +xBNum.value, yA = +yANum.value, yB = +yBNum.value;
		let AB;
		AB = Math.sqrt(Math.pow(xB - xA, 2) + Math.pow(yB - yA, 2));

		result.innerHTML = AB;
	}
})();