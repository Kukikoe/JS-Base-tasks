var reverseArray = document.getElementById("reverse-array");
var array = document.getElementById("array");
var btn = document.getElementById("btn-refresh");

reverse();
btn.addEventListener("click", reverse);


function reverse() {
	var arr = createArray(0, 10);
	array.innerHTML = "[" + arr + "]";
	var arr2 = [];
	for (var i = arr.length - 1; i >= 0; i--) {
		arr2[arr.length - 1 - i] = arr[i];
		//arr2.push(arr[i]);
	}
	reverseArray.innerHTML = arr2;
}

function createArray(min, max) {
	var arr = [];
	for (var i = 0; i < 10; i++) {
		arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
	}
	return arr;
}