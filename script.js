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
		document.getElementById("results").innerHTML = "It's an awesome palindrome!";
		console.log("it's a palindrome");
	}else {
		document.getElementById("results").innerHTML = "This is no palindrome, so sad!";
		console.log("no palindrome here");
	};
};

document.getElementById("reset").onclick = function() {pageReset()};

function pageReset() { 
	document.getElementById("results").innerHTML = "";
	document.getElementById("userWord").value = "";
};


};
