(function() {
	"use strict";
	const swapArray = document.getElementById("arrays-task-8-result");
	const array = document.getElementById("arrays-task-8-array");
	const btn = document.getElementById("arrays-task-8-btn-refresh");

	swap();
	btn.addEventListener("click", swap);

	function swap() {
		let arr = createArray(0, 10);
		array.innerHTML = "[" + arr + "]";
		let arr2 = [], 
		right, 
		left;

		if (arr.length % 2 != 0) {
			right = Math.floor(arr.length / 2) + 1;
			left = Math.floor(arr.length / 2);
		}
		else {
			right = left = arr.length / 2;
		}

		for (let i = left; i < arr.length; i++) { 
			arr2[i - left] = arr[i];
		}

		for (let i = 0; i < right; i++) {
			arr2[right + i] = arr[i];
		}

		swapArray.innerHTML = arr2;
	}

	function createArray(min, max) {
		let arr = [];
		for (let i = 0; i < 10; i++) {
			arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
		}
		return arr;
	}
})();