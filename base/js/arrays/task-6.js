(function() {
	"use strict";
	const reverseArray = document.getElementById("arrays-task-6-result");
	const array = document.getElementById("arrays-task-6-array");
	const btn = document.getElementById("arrays-task-6-btn-refresh");

	reverse();
	btn.addEventListener("click", reverse);


	function reverse() {
		let arr = createArray(0, 10);
		array.innerHTML = "[" + arr + "]";
		let arr2 = [];
		for (let i = arr.length - 1; i >= 0; i--) {
			arr2[arr.length - 1 - i] = arr[i];
		//arr2.push(arr[i]);
	}
	reverseArray.innerHTML = arr2;
}

function createArray(min, max) {
	let arr = [];
	for (let i = 0; i < 10; i++) {
		arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
	}
	return arr;
}
})();