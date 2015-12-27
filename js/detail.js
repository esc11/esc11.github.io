$(document).ready(function() {
	if ($("nav a").css("display") == "none" ){
		$('img').attr('width','250');
		$( "<br><br>" ).insertAfter( ".biglink" );
	}
});