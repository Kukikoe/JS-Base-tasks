var shellSortArray = document.getElementById("shell-sort-array");
var array = document.getElementById("array");
var btn = document.getElementById("btn-refresh");

function init() {
	var arr = createArray(0, 10);
array.innerHTML = "[" + arr + "]";
	shellSort(arr);
}

init();

btn.addEventListener("click", init);

function shellSort(arr) {
	var newArr = arr.slice();
	var j, step = 0, tmp = 0;
	for (step = newArr.length / 2; step > 0; step = Math.floor(step / 2)) {
		for (var i = step; i < newArr.length; i++)
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
	var arr = [];
	for (var i = 0; i < 10; i++) {
		arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
	}
	return arr;
}