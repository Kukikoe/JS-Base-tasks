var xANum = document.getElementById("input-a-x");
var yANum = document.getElementById("input-a-y");
var xBNum = document.getElementById("input-b-x");
var yBNum = document.getElementById("input-b-y");
var btn = document.getElementById("btn-find-out");
var result = document.getElementById("result");

btn.addEventListener("click", getDistanceBetweenTwoPoints);

function getDistanceBetweenTwoPoints() {
	var xA = +xANum.value, xB = +xBNum.value, yA = +yANum.value, yB = +yBNum.value;
	var AB;
	AB = Math.sqrt(Math.pow(xB - xA, 2) + Math.pow(yB - yA, 2));

	result.innerHTML = AB;
}