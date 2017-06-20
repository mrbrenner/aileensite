console.log("HELLO");

// existing over time = outside function
var rotateAmount = 0;
var lastScrollY = 0;

window.addEventListener( 'scroll', function(){

	console.log("scroll y" + window.scrollY);
	console.log("last scroll y" + lastScrollY);

	// make var to hold the img element
	var soulja = document.querySelector("img");

	// change the transform style
	soulja.style.transform = "rotate(" + rotateAmount + "deg)";

	// use scroll direction
	var dir = 1;
	
	if(window.scrollY < lastScrollY){
		dir = -1;
	}
	rotateAmount += 5 * dir;

	console.log(rotateAmount);

	lastScrollY = window.scrollY;
});

//button addEventListener
var myButton = document.querySelector("button");

// make ad EventListener function using click as first parameter

myButton.addEventListener( 'click', function(){

	var soulja = document.querySelector("img");

	soulja.style.transform = "rotate(0deg)";
	
});
