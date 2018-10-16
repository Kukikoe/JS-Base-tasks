(function() {
	"use strict";
const mark = document.getElementById("input-mark");
const btn = document.getElementById("task-5-btn-ident");
const result = document.getElementById("task-5-result");

btn.addEventListener("click", calc);

function calc() {
	let markVal = +mark.value;
	if (markVal >= 0 && markVal <= 19) {
		result.innerHTML = "F";
	}
	else if (markVal >= 20 && markVal <= 39) {
		result.innerHTML = "E";
	}
	else if (markVal >= 40 && markVal <= 59) {
		result.innerHTML = "D";
	}
	else if (markVal >= 60 && markVal <= 74) {
		result.innerHTML = "C";
	}
	else if (markVal >= 75 && markVal <= 89) {
		result.innerHTML = "B";
	}
	else if (markVal >= 90 && markVal <= 100) {
		result.innerHTML = "A";
	}
	else {
		result.innerHTML = "Не знаю такой оценки. Попробуйте снова!";
	}
}
})();