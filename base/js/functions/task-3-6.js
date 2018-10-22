(function() {
	"use strict";
	const number = document.getElementById("functions-task-3-input-number");
	const btn = document.getElementById("functions-task-3-btn-find-out");
	const result = document.getElementById("functions-task-3-result");

btn.addEventListener("click", getNumber);

function getNumber() {
	let num = number.value.split(' ');
	let count,  str = "";

	if (num.length == 1 && num[0] == "ноль") {
		result.innerHTML = 0;
		return;
	}

	for (let i = num.length - 1; i >= 0; i--) {
		if (num[i].indexOf("десять") == 0) {
			str += "01";
		}

		if (i == num.length - 1) {
			str = getLastNumberWithZero(num[i], str);
		}

		if (num.length > 1) {
			str = getZerosForHundredsOfThousands(i, num[i], num[i - 1], num[i + 1], str)
			
		}
		if (i != num.length - 1) {
			str = getZerosForHundredsOfThousandsAfter(num[i], num[i + 1], str)	
		}     

		 //для добавление недостающих нулей для тысячи
		 if (num[i].indexOf("сяч") != -1 && str.length < 3) {
		 	count = 3 - str.length;
		 	str += "0".repeat(count);
		 }
		 else if (num[i].indexOf("лион") != -1 && str.length < 6) {
		 	count = 6 - str.length;
		 	str += "0".repeat(count);
		 }
		 else if (num[i].indexOf("лиард") != -1 && str.length < 9) {
		 	count = 9 - str.length;
		 	str += "0".repeat(count);
		 }

		 if (i == 0 && (num[i].indexOf("сяча") != -1 || 
		 	num[i].indexOf("лион") != -1 || 
		 	num[i].indexOf("лиард") != -1)) {
		 	str += 1;
		}
		str = getSimpleNumber(num[i], str);
	}
	result.innerHTML = str.split('').reverse().join('');
}

function getZerosForHundredsOfThousands (i, elem, previousElem, nextElem, str) {
	if ((i == 0 || previousElem.indexOf("сяч") != -1 || 
			previousElem.indexOf("лион") != -1 || 
			previousElem.indexOf("лиард") != -1) &&
			(elem.indexOf("сто") == 0 ||
			elem.indexOf("сти") != -1 ||
			elem.indexOf("ста") != -1 ||
			elem.indexOf("сот") != -1)) {
		if (str.length < 2) {
			str += "0";
		}
		else if (str.length > 2 && str.length < 5) {
			str += "0";
		}
		else if (str.length > 5 && str.length < 8) {
			str += "0";
		}
		else if (str.length > 8 && str.length < 11) {
			str += "0";
		}
	}
	else if ((elem.indexOf("сяч") != -1 || 
						elem.indexOf("лион") != -1 || 
						elem.indexOf("лиард") != -1) &&
						(nextElem.indexOf("орок") != -1 ||
						nextElem.indexOf("сят") != -1 ||
						nextElem.indexOf("осто") != -1)) {
		if (str.length < 3) {
			str += "0";
		}
		else if (str.length < 5) {
			str += "0";
		}
		else if (i == 0 && str.length < 9) {
			str += "0";
		}
	}
	return str;
}

//для сотен тысяч, добавление нулей
function getZerosForHundredsOfThousandsAfter (elem, nextElem, str) {
		 if ((elem.indexOf("тридцать") != -1 ||
					elem.indexOf("двадцать") != -1 ||
					elem.indexOf("орок") != -1 ||
					elem.indexOf("сят") != -1 ||
					elem.indexOf("осто") != -1) &&
				 	(nextElem.indexOf("сяч") != -1 || 
				 	nextElem.indexOf("лион") != -1 || 
				 	nextElem.indexOf("лиард") != -1)) {
		 	str += "0";
		 }
		 if ((elem.indexOf("сто") == 0 ||
			 		elem.indexOf("сти") != -1 ||
			 		elem.indexOf("ста") != -1 ||
			 		elem.indexOf("сот") != -1) &&
				 	(nextElem.indexOf("сяч") != -1 || 
				 	nextElem.indexOf("лион") != -1 || 
				 	nextElem.indexOf("лиард") != -1))
		 {
		 	str += "0";
		 }     
	return str;
}

function getLastNumberWithZero (elem, str) {
	if (elem.indexOf("дцать") != -1 && elem.indexOf("надцать") == -1) {
		str += 0;
	}
	else if (elem.indexOf("сорок") != -1 || elem.indexOf("девяносто") != -1 ||
		(elem.indexOf("десят") != -1 && elem.indexOf("десять") == -1)) {
		str += 0;
	}
	else if (elem.indexOf("сто") != -1 ||
		       elem.indexOf("ста") != -1 ||
		       elem.indexOf("сот") != -1 ||
		       elem.indexOf("сти") != -1) {
		str += "00";
	}	
	return str;
}

function getSimpleNumber (elem, str) {
	if (elem.indexOf("од") != -1) {
		str += 1;
	}
	if (elem.indexOf("дв") != -1) {
		str += 2;
	}
	if (elem.indexOf("три") != -1) {
		str += 3;
	}
	if (elem.indexOf("четыр") != -1) {
		str += 4;
	}
	if (elem.indexOf("пят") != -1) {
		str += 5;
	}
	if (elem.indexOf("шест") != -1) {
		str += 6;
	}
	if (elem.indexOf("сем") != -1) {
		str += 7;
	}
	if (elem.indexOf("восем") != -1) {
		str += 8;
	}
	if (elem.indexOf("девя") != -1) {
		str += 9;
	}
	if (elem.indexOf("надцать") != -1) {
		str += 1;
	}
	if (elem.indexOf("сорок") != -1) {
		str += 4;
	}
	if (elem.indexOf("сто") == 0) {
		str += 1;
	}
	return str;
}
})();
