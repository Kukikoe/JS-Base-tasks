var swapArray = document.getElementById("swap-array");
var array = document.getElementById("array");
var btn = document.getElementById("btn-refresh");

swap();
btn.addEventListener("click", swap);

function swap() {
	var arr = createArray(0, 10);
	array.innerHTML = "[" + arr + "]";
	var arr2 = [], 
			right, 
			left;

	if (arr.length % 2 != 0) {
		right = Math.floor(arr.length / 2) + 1;
		left = Math.floor(arr.length / 2);
	}
	else {
		right = left = arr.length / 2;
	}

	for (var i = left; i < arr.length; i++) { 
		arr2[i - left] = arr[i];
	}

	for (var i = 0; i < right; i++) {
		arr2[right + i] = arr[i];
	}

	swapArray.innerHTML = arr2;
}

function createArray(min, max) {
	var arr = [];
	for (var i = 0; i < 10; i++) {
		arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
	}
	return arr;
}