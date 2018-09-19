var sum = document.getElementById("sum");
var array = document.getElementById("array");
var btn = document.getElementById("btn-refresh");

sumOddElem();
btn.addEventListener("click", sumOddElem);


function sumOddElem() {
	var arr = createArray(0, 10);
	array.innerHTML = "[" + arr + "]";
	var summ = 0;
	for (var i = 0; i < arr.length; i++) {
		if (i%2 != 0) {
			summ += arr[i];
		}
	}
	sum.innerHTML = summ;
}

function createArray(min, max) {
	var arr = [];
	for (var i = 0; i < 10; i++) {
		arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
	}
	return arr;
}