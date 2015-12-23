$(document).ready(function() {
	if ($("header").css("height") == "350px" ){
	    $(".projecttext, .place").css("display","none");
		$(".project").mouseenter(function() {
		  $( this ).find(".projecttext").fadeIn(600);
		});
		$(".project").mouseleave(function() {
		  $( this ).find(".projecttext").fadeOut(600);
		});
	    $(".pin").mouseenter(function() {
			$(this).next().fadeIn(600);
		});
		$(".pin").mouseleave(function() {
			$(this).next().fadeOut(600);
		});
	}
	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
	    }, 600);
	    return false;
	});
});