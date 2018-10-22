var n = document.getElementById("input-n");
var result = document.getElementById("result");
var btn = document.getElementById("btn-calc");

btn.addEventListener("click", calc);

function calc() {
	var nNum = n.value;
	var sum = 0;
	for (var i = 0; i < nNum.length; i++) {
			sum += +nNum[i];
	}
	result.innerHTML = sum;
}