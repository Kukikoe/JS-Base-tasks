var max = document.getElementById("max");
var maxIndex = document.getElementById("max-index");
var min = document.getElementById("min");
var minIndex = document.getElementById("min-index");
var array = document.getElementById("array");
var btn = document.getElementById("btn-refresh");

findMinMax();
btn.addEventListener("click", findMinMax);


function findMinMax() {
	var arr = createArray(0, 100);
	array.innerHTML = "[" + arr + "]";
	var minVal = arr[0];
	var maxVal = 0;
	var minIndexVal, maxIndexVal;
	for (var i = 0; i < arr.length; i++) {
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
	var arr = [];
	for (var i = 0; i < 10; i++) {
		arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
	}
	return arr;
}