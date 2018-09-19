var day = document.getElementById("input-day");
var btn = document.getElementById("btn-find-out");
var result = document.getElementById("result");

btn.addEventListener("click", getTheDayOfWeek);

function getTheDayOfWeek() {
	var dayNum = +day.value, str = "";
	switch (dayNum) {
		case 1: 
		str = "Monday";
		break;
		case 2: 
		str = "Tuesday";
		break;
		case 3: 
		str = "Wednesday";
		break;
		case 4: 
		str = "Thursday";
		break;
		case 5: 
		str = "Friday";
		break;
		case 6: 
		str = "Saturday";
		break;
		case 7: 
		str = "Sunday";
		break;
		default: 
		str = "There is no such day of the week";
	}
	result.innerHTML = str;
}