'use strict';

var Settings = function() {
	if ($(window).width() > 1200) {
		$('.name').addClass('pull-left');
		$('.links').addClass('pull-right');
	    $('nav').css('background-color', '#fff');	
	} else {
		$("a[href^='http']").attr('target','_blank');
		$('.name').removeClass('pull-left');
		$('.links').removeClass('pull-right');
		$('nav').css('background-color', '#eee');	
	}   
}

$(document).ready(Settings);
$(window).resize(Settings);
