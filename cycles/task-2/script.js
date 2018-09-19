var a = document.getElementById("input-a");
var result = document.getElementById("result");

a.addEventListener("input", calc);

function calc() {
	var aNum = Math.abs(+a.value);
	if (aNum == 1 || aNum == 2) {
		result.innerHTML = "Yes";
		return;
	}
	for (var i = 2; i < aNum; i++) {
		if (aNum % i == 0) {
			result.innerHTML = "No";
			return;
		}
		else {				
			result.innerHTML = "Yes";
		}
	}
}