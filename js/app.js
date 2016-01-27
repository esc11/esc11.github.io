'use strict';

$(document).ready(function() {
	if ($("header").css("height") >= "350px" ){
	    $(".projecttext").css("display","none");
		$(".project").mouseenter(function() {
		  $( this ).find(".projecttext").fadeIn(600);
		});
		$(".project").mouseleave(function() {
		  $( this ).find(".projecttext").fadeOut(600);
		});
	} else {
		$('.project img').click(function() {
            window.location.href = this.id + '.html';
        });
	}
	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
	    }, 600);
	    return false;
	});
	$("a[href^='http']").attr('target','_blank');
});