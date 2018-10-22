var engAlphabetUpper = document.getElementById("result-1");
var engAlphabetLower = document.getElementById("result-2");
var rusAlphabetLower = document.getElementById("result-3");
var numbers = document.getElementById("result-4");
var tableASCII = document.getElementById("result-5");

printInOneLine();

function printInOneLine() {
	for (var i = 65; i <= 90; i++) {
		engAlphabetUpper.innerHTML += String.fromCharCode(i) + " ";
	}
	for (var i = 122; i >= 97; i--) {
		engAlphabetLower.innerHTML += String.fromCharCode(i) + " ";
	}
	for (var i = 1072; i <= 1103; i++) {
		rusAlphabetLower.innerHTML += String.fromCharCode(i) + " ";
	}

/*	for (var i = "z"; i < "a"; i++) {
		engAlphabetLower.innerHTML += i + " ";
	}*/
	for (var i = 48; i <= 57; i++) {
		numbers.innerHTML += String.fromCharCode(i) + " ";
	}
	for (var i = 0; i <= 128; i++) {
		tableASCII.innerHTML += String.fromCharCode(i) + " ";
}

}