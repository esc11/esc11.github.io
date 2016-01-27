$(document).ready(function() {
	if ($("nav a").css("display") == "none" ){
		$('img').attr('width','250');
		$( "<br><br>" ).insertAfter( ".biglink" );
	}
	$("a[href^='http']").attr('target','_blank');
	$('nav').css("display","none");
	$('.mycontainer h1').css("display","block");
	}
});