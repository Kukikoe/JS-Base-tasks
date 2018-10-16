(function() {
	"use strict";
	const countElem = document.getElementById("arrays-task-7-result");
	const array = document.getElementById("arrays-task-7-array");
	const btn = document.getElementById("arrays-task-7-btn-refresh");

	countOddElem();
	btn.addEventListener("click", countOddElem);


	function countOddElem() {
		let arr = createArray(0, 10);
		array.innerHTML = "[" + arr + "]";
		let count = 0;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i]%2 != 0) {
				count++;
			}
		}
		countElem.innerHTML = count;
	}

	function createArray(min, max) {
		let arr = [];
		for (let i = 0; i < 10; i++) {
			arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
		}
		return arr;
	}
})();