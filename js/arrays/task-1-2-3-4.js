(function() {
	"use strict";
	const max = document.getElementById("max");
	const maxIndex = document.getElementById("max-index");
	const min = document.getElementById("min");
	const minIndex = document.getElementById("min-index");
	const array = document.getElementById("array");
	const btn = document.getElementById("arrays-task-1-4-btn-refresh");

	findMinMax();
	btn.addEventListener("click", findMinMax);


	function findMinMax() {
		let arr = createArray(0, 100);
		array.innerHTML = "[" + arr + "]";
		let minVal = arr[0];
		let maxVal = 0;
		let minIndexVal, maxIndexVal;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > maxVal) {
				maxVal = arr[i];
				maxIndexVal = i;
			}
			else if (arr[i] < minVal) {
				minVal = arr[i];
				minIndexVal = i;
			}
		}
		min.innerHTML = minVal;
		max.innerHTML = maxVal;
		maxIndex.innerHTML = maxIndexVal;
		minIndex.innerHTML = minIndexVal;

	}

	function createArray(min, max) {
		let arr = [];
		for (let i = 0; i < 10; i++) {
			arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
		}
		return arr;
	}
})();