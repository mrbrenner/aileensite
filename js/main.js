// $ (function () {
	  	var mySiema = new Siema({
			  selector: '.siema',
			  duration: 500,
			  easing: 'ease-out',
			  perPage: 1,
			  startIndex: 0,
			  draggable: true,
			  threshold: 20,
			  loop: false
			  // onInit: () => {},
			  // onChange: () => {}
			});


	$("#next").click(function(){
		mySiema.next();
	});

	$("#previous").click(function (){
		mySiema.prev();
	})


 //---start infinite loop code, add after you set up siema
var slided = 0;
var slideMode = "";
var lastSlide = mySiema.currentSlide;


$(".siema").on("transitionend", function(e){

	

	if(lastSlide > mySiema.currentSlide) slideMode = "prev";
    else if(lastSlide < mySiema.currentSlide) slideMode = "next";
    else slideMode = "";


    if(slideMode == "next" && slided > 0 ){
    	var firstOfSlides = document.querySelector(".slideImage:first-child");
    	var cloned = firstOfSlides.cloneNode(true);
    	mySiema.append(cloned);
    	mySiema.remove(0);
    	
    	lastSlide = mySiema.currentSlide;

    }else if(slideMode=="prev" && slided > 0){
    	
    	var slides =  document.querySelectorAll(".slideImage");
    	var lastIndex = slides.length -1;

    	var lastOfSlides = slides[lastIndex];
    	var cloned = lastOfSlides.cloneNode(true);
    	mySiema.insert(cloned,0);
    	
    	mySiema.remove(lastIndex+1);
    	lastSlide = mySiema.currentSlide;

    }

    if(slideMode=="next") slided++;
 });


//---end  of infintie loop code

// });



	console.log("ready");

	var state = false;

	// mobile activate navbar on click

	$(".dropActivate").click( function(){
		
		state = !state;
		console.log("state");
		
		//if = odd click (open), else = even click (closed)

		if (state==true) {
			console.log("show");
			$(".drop").show();
			$("#contactButton").show();
			$(".dropActivate a").css("color", "#808080");
		} else {
			console.log("hide");
			$(".drop").hide();
			$(".dropActivate a").css("color", "#A9A9A9")
			$("#contactButton").hide();
		}
	});



	// desktop activate navbar on hover

	

	 $(".desktopDrop").hover( function () {
     			console.log("hover");

     	$(".drop").show();
    	$("#dropActivate a").css("color", "#808080");
    	}, 
    	function () {
      		$(".drop").hide();
      		$("#dropActivate a").css("color", "#A9A9A9");
    });

	 