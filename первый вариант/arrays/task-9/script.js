var bubbleSortArray = document.getElementById("bubble-sort-array");
var selectSortArray = document.getElementById("select-sort-array");
var insertSortArray = document.getElementById("insert-sort-array");
var array = document.getElementById("array");
var btn = document.getElementById("btn-refresh");

function init() {
	var arr = createArray(0, 10);
array.innerHTML = "[" + arr + "]";
	bubbleSort(arr);
	selectSort(arr);
	insertSort(arr);
}

init();

btn.addEventListener("click", init);


function bubbleSort(arr) {
	var newArr = arr.slice();
	var temp, endJ = newArr.length, swap;
	for (var i = 0; i < newArr.length; i++) { 
		swap = false;
		for (var j = 0; j < endJ - i; j++) {
			if (j == endJ - 1) {
				break;
			}
			if (newArr[j] > newArr[j + 1]) {
				temp = newArr[j];
				newArr[j] = newArr[j + 1];
				newArr[j + 1] = temp;
				swap = true;
			}
		}
		if (swap == false) {
			break;
		}
	}
	bubbleSortArray.innerHTML = newArr;
}

function selectSort(arr) {
	var newArr = arr.slice();
	var temp, indexMin;
	for (var i = 0; i < newArr.length; i++) { 
		indexMin = i;
		for (var j = i + 1; j < newArr.length; j++) {
			if (newArr[indexMin] > newArr[j]) {
				indexMin = j;
			}
		}
		if (indexMin != i) {
			temp = newArr[i];
			newArr[i] = newArr[indexMin];
			newArr[indexMin] = temp;
		}
	}
	selectSortArray.innerHTML = newArr;
}

function insertSort(arr) {
	var newArr = arr.slice();
	var currentPos, location;
	for (var i = 1; i < newArr.length; i++) { 
		currentPos = newArr[i];
		location = i - 1;
		while (location >= 0 && newArr[location] > currentPos) {
			newArr[location + 1] = newArr[location];
			location = location - 1;
		}
		newArr[location + 1] = currentPos;
	}
	insertSortArray.innerHTML = newArr;
}

function createArray(min, max) {
	var arr = [];
	for (var i = 0; i < 10; i++) {
		arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
	}
	return arr;
}