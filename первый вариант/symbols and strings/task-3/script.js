var result = document.getElementById("result");
var btn = document.getElementById("btn-enter");
var text = document.getElementById("text");

btn.addEventListener("click", getTheLengthOfTheShortestWord);

function getTheLengthOfTheShortestWord() {
	var str = text.value.split("[^., ]+");
	var shortLength = str[0].length;
	for (var i = 1; i < str.length; i++) {
		if (str[i].length < shortLength) {
			shortLength = str[i].length;
		}
	}
	result.innerHTML = shortLength;
}