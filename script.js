$(document).ready(function(){
	$("#menuControl").click(function(){
		$("#navigationBar").toggleClass("closeNavigationBar");
		$("#navigationBar").toggleClass("openNavigationBar");
	})

	$("#map").click(function(){
		$(".mapContainer").toggleClass("hiddenMap");
		$("#mapInfo").toggleClass("hidden");
	}); 

	//$('#navigationItems').localScroll({duration:800});


	$('a').click(function(){
    	$('html, body').animate({
    	    scrollTop: $( $(this).attr('href') ).offset().top
    	}, 500);
    	return false;
	});
})
