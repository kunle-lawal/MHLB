$(document).ready(function(){
	$("#menuControl").click(function(){
		$("#navigationBar").toggleClass("closeNavigationBar");
		$("#navigationBar").toggleClass("openNavigationBar");
	})

	$("#map").click(function(){
		$(".mapContainer").toggleClass("hiddenMap");
		$("#mapInfo").toggleClass("hidden");
	}); 

	//$(".navItem").click(function(){
		//$('.navigationItems').localScroll({duration:800});
		//alert("Hi");
	//})


	$('a').click(function(){
    	$('html, body').animate({
    	    scrollTop: $( $(this).attr('href') ).offset().top
    	}, 500);
    	return false;
	});
})
