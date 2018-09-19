var a = document.getElementById("input-a");
var btn = document.getElementById("btn-calc");
var result = document.getElementById("result");

btn.addEventListener("click", rootOfANumber);

function rootOfANumber() {
	var aNum = +a.value, root = 0;
for (var i = 0; i < aNum; i++) {
	if (i * i == aNum) {
		root = i;
	}
	result.innerHTML = root;
}
}