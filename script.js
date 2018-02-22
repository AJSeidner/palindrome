window.onload = function() {

var word1 = [];
var word2 = [];

var word = document.getElementById("userWord");
function palindromeCheck() {
	word1 = word.split("");
	word2 = word1.reverse();
	var word3 = word1.join();
	var word4 =word2.join();

	if (word3 === word4){
		console.log("it's a palindrome");
	}else {
		console.log("no palindrome here");
	};
};
document.getElementById("button").onclick = function() {palindromeCheck()};


};