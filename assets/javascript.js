var wordlist = ["Suzumiya Haruhi no Yuutsu", "Guilty Crown", "Darker than Black", "Elfen Lied", 
"Rurouni Kenshin"
];
var start = "";
var rand = Math.floor((Math.random()* wordlist.length)+0);
rand = 2;
var guess = 10;
var input;

console.log(rand);
underscorer();

//used only once
function underscorer(input){
	for(var i = 0; i < wordlist[rand].length; i++){
		if(input === wordlist[rand].charAt(i)){
			start += input;
		}
		else if(wordlist[rand].charAt(i)===" "){
			start += " ";
		}
		else{
			start += "_";
		}
		start += " ";
	}
};



window.onload = function(){

document.getElementById("word").innerHTML = ("The word is: " + start);


document.getElementById("game").innerHTML = ("Guesses remaining: " + guess);

document.onkeyup = function onkeyup(event){
	// console.log(event.keyCode);
	// console.log(String.fromCharCode(event.keyCode));
	input = String.fromCharCode(event.keyCode);

		underscorer(input);



		for(var i = 0; i < wordlist[rand].length; i++){
			if(input === wordlist[rand].charAt(i).toUpperCase()){
				console.log("hit");
				document.getElementById("game").innerHTML = ("Guesses remaining: " + guess);
				
			}
		}
		guess--;
		document.getElementById("game").innerHTML = ("Guesses remaining: " + guess);

	}
}
