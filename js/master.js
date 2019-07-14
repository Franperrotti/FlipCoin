window.onload = function () {

    // alert  ("hola maestro");



var Start = document.getElementById("start");

var Play = document.querySelector("button");

var Game = document.getElementById("game");

var h1 = document.querySelector("#start h1")


Play.addEventListener("click" , function(){
	start.style.display = "none";
	game.style.display = "flex";
});

function effect(){
	h1.style.opacity = "1";
	h1.style.transform = "translateY(0px)";
	Play.style.opacity= "1";
};

window.onload = effect();




document.getElementById('flip').onclick = click;

// var button = document.getElementById("flip"),
//   count = 0;
// button.onclick = function() {
//   count += 1;
//   document.getElementById("Flipcount").innerHTML = "Rounds: " + count;
// }; 
// porque no van las dos juntas ?

var heads = 0;
var tails = 0;
function click() {  
    x = (Math.floor(Math.random() * 2) == 0);
    if(x){
    	flip("Head");
    }else{
        flip("Tail");
    }
};
// function flip(coin) {
//     document.getElementById("result").innerHTML = coin;
// };
var Head = document.getElementById("Head");
var Tail = document.getElementById("Tail");
var HeadTail = document.getElementById("HeadTail");
var button1 =document.getElementById("flip");
var button2 =document.getElementById("flipdos");

function flip(coin) {
    if(coin=="Tail"){
		Head.style.display = "none" ;
		Tail.style.display = "flex";
		HeadTail.style.display = "none";
		button1.style.display = "none";
		button2.style.display = "flex";
		// document.getElementById("flip").innerHTML = "Flip Again";

    }else if(coin=="Head"){
		Tail.style.display = "none";
		Head.style.display = "flex";
		HeadTail.style.display = "none";
		button1.style.display = "none";
		button2.style.display = "flex";
		// document.getElementById("flip").innerHTML = "Flip Again";
    }
};
	

document.getElementById('flipdos').onclick = click2;

function click2() {  
	Head.style.display = "none" ;
	Tail.style.display = "none";
	HeadTail.style.display = "flex";
	button1.style.display = "flex";
	button2.style.display = "none";
};


}