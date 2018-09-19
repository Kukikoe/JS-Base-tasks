var number = document.getElementById("input-number");
var btn = document.getElementById("btn-find-out");
var result = document.getElementById("result");

btn.addEventListener("click", getNumberInWords);

function getNumberInWords() {
  var num = number.value;
  var tempNum,  str = "";

	if (num == 0) {
		result.innerHTML = "ноль";
		return;
	}
	if (num < 1000000000000 && num > 0) {
		if(num >= 1000000000) {
			str = getMillionOrBillion(str, num,  "миллиард", 1000000000);
		}

		num = Math.floor(num % 1000000000);

		if(num >= 1000000) {
			str = getMillionOrBillion(str, num,  "миллион", 1000000);
		}

		num = Math.floor(num % 1000000);     

		if(num >= 1000) {
			str = main(Math.floor((num / 1000)), str);
			if (Math.floor((num / 1000)) % 10 == 1 && Math.floor((num / 1000)) % 100 != 11) {
				if (str.lastIndexOf(' ') == -1) {
					str = "";
				}
				else {
					str = str.slice(0, str.lastIndexOf(' '));
				}
				str += " " + "одна тысяча" + " ";
			}
			else if (Math.floor((num / 1000)) % 10 == 2 && Math.floor((num / 1000)) % 100 != 12) {
				if (str.lastIndexOf(' ') == -1) {
					str = "";
				}
				else {
					str = str.slice(0, str.lastIndexOf(' '));
				}
				str += " " + "две тысячи" + " ";
			}
			else if (Math.floor((num / 1000)) % 100 >= 11 && Math.floor((num / 1000)) % 100 <= 19) {
				console.log(str)
				str += " " + "тысяч" + " ";
			}
			else if (Math.floor((num / 1000)) % 10 == 0) {
				console.log(str)
				str += " " + "тысяч" + " ";
			}
			else if (Math.floor((num / 1000)) % 10 < 5) {
				str += " " + "тысячи" + " ";
			}
			else {
				str += " " + "тысяч" + " ";
			}
		}

		num = Math.floor(num % 1000);

		if (num < 1000) {
			str = main(num, str);
		}
		result.innerHTML = str;
	}
	else  {
		result.innerHTML = "The number must be in the range of 0 - 999 999 999 999. Try again)";
	}
}

function getMillionOrBillion(str, num, word, number) {
	str = main(Math.floor((num / number)), str);
	console.log(str)
	if (Math.floor(num / number) % 10 == 1 && Math.floor((num / number)) % 100 != 11) {
		str += " " + word + " ";
	}
	else if (Math.floor(num / number) % 100 >= 11 && Math.floor((num / number)) % 100 <= 19) {
		str += " " + word + "ов" + " ";
	}
	else if (Math.floor((num / number)) % 10 == 0 || Math.floor(num / number) % 10 >= 5) {
		str += " " + word + "ов" + " ";
	}
	else if (Math.floor(num / number) % 10 >= 2 && Math.floor(num / number) % 10 <= 4) {
		str += " " + word + "а" + " ";
	}
 return str;
}

function main(num, str) {
	num = String(num).split("");
	var elem, position = 0;
	if (num.length == 3) {
		elem = +num[position];
		str = getAThreeDigitNumber(elem, num, position, str);
	}
	else if (num.length == 2) {
		elem = +num[position];
		str = getATwoDigitNumber(elem, num, position, str);
	}
	else {
		elem = +num[0];
		str = getASimpleNumber(elem, num, position, str);
	}
	return str;
}

//ф-ция ищет сотни
function getAThreeDigitNumber(elem, num, position, str) {
	//если число начинается с 1 или двойки добавляем "сто" или "двести" соответственно
	if (elem == 1) {
		str += "сто";
	}
	else if (elem == 2) {
		str += "двести";
	}
	else {
		//берем с ф-ции getASimpleNumber соответствующую цифру и добавляем в конец "ста" или "сот"
		str = getASimpleNumber(elem, num, position, str);
		if (elem == 4 || elem == 3) {
			str += "ста";
		}
		else {
			str += "сот";
		}
	}
	if (num[position + 1] == 0 && num[position + 2] == 0) {
		return str;
	}
	str += " ";
	position += 1;
	elem = +num[position];
	str = getATwoDigitNumber(elem, num, position, str);
	return str;
}
//ф-ция ищет цифры от 10 до 19, а так же все цифры до 100, которые ровно деляться на 10
function getATwoDigitNumber(elem, num, position, str) {
	//берем цифры больше 20
	if (elem >= 2) {
		//так как 40 и 90 отличаются от остальных цифр деляем для них исключения
		if (elem == 4) {
			str += "сорок";
		}
		else if (elem == 9) {
			str += "девяносто";
		}
		else {
			//берем из ф-ции getASimpleNumber цифры от 1 до 9 и добавляем в конец "дцать" или "десят"
			str = getASimpleNumber(elem, num, position, str);
			if (elem == 2 || elem == 3) {
				str += "дцать";
			}
			else {
				str += "десят";
			}
		}
	}
	else if (elem == 0) {
		str += "";
	}
	else {
		//если цифра меньше 20 и больше 9
		position += 1;
		elem = +num[position];
		switch(elem) {
			case 0:
			str += "десять";
			break;
			case 1:
			str += "одинадцать";
			break;
			case 2:
			str += "двенадцать";
			break;
			case 3:
			str += "тринадцать";
			break;
			case 4:
			str += "четырнадцать";
			break;
			case 5:
			str += "пятнадцать";
			break;
			case 6:
			str += "шестнадцать";
			break;
			case 7:
			str += "семнадцать";
			break;
			case 8:
			str += "восемнадцать";
			break;
			case 9:
			str += "девятнадцать";
			break;
		}
		str += " ";
		return str;
	}
	if (num[position + 1] == 0) {
		return str;
	}
	str += " ";
	position += 1;
	elem = +num[position];
	str = getASimpleNumber(elem, num, position, str);
	return str;
}

//ф-ция ищет цифры от 1 до 9
function getASimpleNumber(elem, num, position, str) {
	switch(elem) {
		case 1:
		str += "один";
		break;
		case 2:
		str += "два";
		break;
		case 3:
		str += "три";
		break;
		case 4:
		str += "четыре";
		break;
		case 5:
		str += "пять";
		break;
		case 6:
		str += "шесть";
		break;
		case 7:
		str += "семь";
		break;
		case 8:
		str += "восемь";
		break;
		case 9:
		str += "девять";
		break;
	}
	return str;
}