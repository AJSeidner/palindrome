window.onload = function() {

var word1 = [];
var word2 = [];


document.getElementById("button").onclick = function() {palindromeCheck()};


function palindromeCheck() {
	var word = document.getElementById("userWord").value;
	var word1 = word.split("");
	var word2 = word1.reverse();
	var word3 = word2.join("");

	if (word3 === word){
		console.log("it's a palindrome");
	}else {
		console.log("no palindrome here");
	};
};

console.log("test prefunction");
};
console.log("test postfunction");