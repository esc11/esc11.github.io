'use strict';

$(document).ready(function() {
	if ($("header").css("height") >= "350px" ){
	    $(".projecttext").css("display","none");
		$(".project").mouseenter(function() {
		  $( this ).find(".projecttext").fadeIn(300);
		});
		$(".project").mouseleave(function() {
		  $( this ).find(".projecttext").fadeOut(300);
		});
        $('#mapAll').css("display","none");
	} else {
		$('.project img').click(function() {
            window.location.href = this.id + '.html';
        });
         $("nav").prepend("ELISABETH CHIN");
	}
	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
	    }, 600);
	    return false;
	});
	$("a[href^='http']").attr('target','_blank');
});