(function() {
	"use strict";
	const shellSortArray = document.getElementById("shell-sort-array");
	const array = document.getElementById("arrays-task-10-array");
	const btn = document.getElementById("arrays-task-10-btn-refresh");

	function init() {
		let arr = createArray(0, 10);
		array.innerHTML = "[" + arr + "]";
		shellSort(arr);
	}

	init();

	btn.addEventListener("click", init);

	function shellSort(arr) {
		let newArr = arr.slice();
		let j, step = 0, tmp = 0;
		for (step = newArr.length / 2; step > 0; step = Math.floor(step / 2)) {
			for (let i = step; i < newArr.length; i++)
			{
				tmp = newArr[i];
				for (j = i; j >= step; j -= step)
				{
					if (tmp < newArr[j - step])
						newArr[j] = newArr[j - step];
					else
						break;
				}
				newArr[j] = tmp;
			}
		}
		shellSortArray.innerHTML = newArr;
	}

	function createArray(min, max) {
		let arr = [];
		for (let i = 0; i < 10; i++) {
			arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
		}
		return arr;
	}
})();