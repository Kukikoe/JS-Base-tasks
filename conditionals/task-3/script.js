var a = document.getElementById("input-a");
var b = document.getElementById("input-b");
var c = document.getElementById("input-c");
var btn = document.getElementById("btn-calc");
var result = document.getElementById("result");

btn.addEventListener("click", calc);

function calc() {
	var aNum = +a.value;
	var bNum = +b.value;
	var cNum = +c.value;
	if (aNum < 0) {
		aNum = 0;
	}
	if (bNum < 0) {
		bNum = 0;
	}
	if (cNum < 0) {
		cNum = 0;
	}
	result.innerHTML = aNum + bNum + cNum;
}