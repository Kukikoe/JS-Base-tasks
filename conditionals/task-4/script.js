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
	var plus = aNum + bNum + cNum;
	var multiply = aNum * bNum * cNum;
  result.innerHTML = plus > multiply ? plus + 3 : multiply + 3;
}