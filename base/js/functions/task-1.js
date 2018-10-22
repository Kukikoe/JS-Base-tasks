(function() {
	"use strict";
const day = document.getElementById("functions-task-1-input-day");
const btn = document.getElementById("btn-find-out");
const result = document.getElementById("functions-task-1-result");

btn.addEventListener("click", getTheDayOfWeek);

function getTheDayOfWeek() {
	let dayNum = +day.value, str = "";
	switch (dayNum) {
		case 1: 
		str = "Понедельник";
		break;
		case 2: 
		str = "Вторник";
		break;
		case 3: 
		str = "Среда";
		break;
		case 4: 
		str = "Четверг";
		break;
		case 5: 
		str = "Пятница";
		break;
		case 6: 
		str = "Суббота";
		break;
		case 7: 
		str = "Воскресенье";
		break;
		default: 
		str = "Нет такого дня недели";
	}
	result.innerHTML = str;
}
})();
