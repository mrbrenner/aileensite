$ (function () {

	console.log("ready");

	var state = false;

	// mobile activate navbar on click

	$("#dropActivate").click( function(){
		
		state = !state;
		console.log("state");
		
		//if = odd click (open), else = even click (closed)

		if (state==true) {
			console.log("show");
			$(".drop").show();
			$("#contactButton").show();
			$("#dropActivate a").css("color", "#808080");
		} else {
			console.log("hide");
			$(".drop").hide();
			$("#dropActivate a").css("color", "#A9A9A9")
			$("#contactButton").hide();
		}
	});



	// desktop activate navbar on hover

	

	 $(".desktopDrop").hover( function () {
     	$(".drop").show();
    	$("#dropActivate a").css("color", "#808080");
    	}, 
    	function () {
      		$(".drop").hide();
      		$("#dropActivate a").css("color", "#A9A9A9");
    });

});
