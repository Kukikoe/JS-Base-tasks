var n = document.getElementById("input-n");
var result = document.getElementById("result");
var btn = document.getElementById("btn-reverse");

btn.addEventListener("click", reverse);

function reverse() {
	var nStr = n.value;
	var sum = "";
	for (var i = nStr.length - 1; i >= 0; i--) {
			sum += nStr[i];
	}
	result.innerHTML = sum;
}