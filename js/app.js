'use strict';

var Settings = function() {
	if ($(window).width() > 1200) {
		$('.name').addClass('pull-left');
		$('.links').addClass('pull-right');
	    $('.projecttext').css('display','none');
		$('.project').mouseenter(function() {
		  $( this ).find('.projecttext').fadeIn(300);
		});
		$('.project').mouseleave(function() {
		  $( this ).find('.projecttext').fadeOut(300);
		});	
	} else {
		$('.name').removeClass('pull-left');
		$('.links').removeClass('pull-right');
		$('.project img').click(function() {
            window.location.href = this.id + '.html';
        });
    	// $('a[href^='http']').attr('target','_blank');	
	}   
}

$(document).ready(Settings);
$(window).resize(Settings);
