var x = document.getElementById("input-x");
var y = document.getElementById("input-y");
var btn = document.getElementById("btn-ident");
var result = document.getElementById("result");

btn.addEventListener("click", calc);

function calc() {
	var xNum = +x.value;
	var yNum = +y.value;
	if (xNum > 0 && yNum > 0) {
		result.innerHTML = "I";
	}
	else if (xNum < 0 && yNum > 0) {
		result.innerHTML = "II";
	}
	else if (xNum < 0 && yNum < 0) {
		result.innerHTML = "III";
	}
	else if (xNum > 0 && yNum < 0) {
		result.innerHTML = "IV";
	}
	else if (xNum == 0 && yNum == 0) {
		result.innerHTML = "Origin";
	}
}