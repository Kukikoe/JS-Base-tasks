(function() {
"use strict";
	/*var a = +prompt("Enter a number:", "");
	var b = 2;
	alert(a%2 == 0 ? a*b : a+b);*/

	const a = document.getElementById("input-a");
	const b = document.getElementById("input-b");
	const btn = document.getElementById("btn-calc");
	const result = document.getElementById("task-1-result");

	btn.addEventListener("click", calc);

	function calc() {
		let aNum = +a.value;
		let bNum = +b.value;
		result.innerHTML = aNum % 2 == 0 ? aNum * bNum : aNum + bNum;
	}

})();
