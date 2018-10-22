/*var a = +prompt("Enter a number:", "");
var b = 2;
alert(a%2 == 0 ? a*b : a+b);*/

var a = document.getElementById("input-a");
var b = document.getElementById("input-b");
var btn = document.getElementById("btn-calc");
var result = document.getElementById("result");

btn.addEventListener("click", calc);

function calc() {
	var aNum = +a.value;
	var bNum = +b.value;
	result.innerHTML = aNum % 2 == 0 ? aNum * bNum : aNum + bNum;
}