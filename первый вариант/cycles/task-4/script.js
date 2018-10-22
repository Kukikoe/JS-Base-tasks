var n = document.getElementById("input-n");
var result = document.getElementById("result");

n.addEventListener("input", calc);

function calc() {
	var nNum = +n.value;
	var mult = 1;
	for (var i = nNum; i > 0; i--) {
			mult *= i;
	}
	result.innerHTML = mult;
}