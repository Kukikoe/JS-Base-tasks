var countElem = document.getElementById("count-elem");
var array = document.getElementById("array");
var btn = document.getElementById("btn-refresh");

countOddElem();
btn.addEventListener("click", countOddElem);


function countOddElem() {
	var arr = createArray(0, 10);
	array.innerHTML = "[" + arr + "]";
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]%2 != 0) {
			count++;
		}
	}
	countElem.innerHTML = count;
}

function createArray(min, max) {
	var arr = [];
	for (var i = 0; i < 10; i++) {
		arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
	}
	return arr;
}