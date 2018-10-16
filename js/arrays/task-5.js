(function() {
	"use strict";
	const sum = document.getElementById("arrays-task-5-result");
	const array = document.getElementById("arrays-task-5-array");
	const btn = document.getElementById("arrays-task-5-btn-refresh");

	sumOddElem();
	btn.addEventListener("click", sumOddElem);


	function sumOddElem() {
		let arr = createArray(0, 10);
		array.innerHTML = "[" + arr + "]";
		let summ = 0;
		for (let i = 0; i < arr.length; i++) {
			if (i%2 != 0) {
				summ += arr[i];
			}
		}
		sum.innerHTML = summ;
	}

	function createArray(min, max) {
		let arr = [];
		for (let i = 0; i < 10; i++) {
			arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
		}
		return arr;
	}
})();