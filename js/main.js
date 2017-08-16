jQuery(function($) {

// Whole-script strict mode syntax
"use strict";


// Begin Preloader
jQuery("#preloader-main").fadeOut();
jQuery("#preloader").delay(1000).fadeOut("slow");
// End Preloader

// Begin Wow Init
if(Modernizr.cssanimations) {
	new WOW().init();
}
// End Wow Init

// Begin Fallback SVG
if (!Modernizr.svg) {
	var imgs = document.getElementsByTagName('img');
	var svgExtension = /.*\.svg$/
	var l = imgs.length;
	for(var i = 0; i < l; i++) {
		if(imgs[i].src.match(svgExtension)) {
			imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
			console.log(imgs[i].src);
		}
	}
}
// End Fallback SVG

// Begin Feedback Carousel
$('.feedback-carousel').owlCarousel({
	items: 1,
	autoplay: true,
	autoplayTimeout: 6000,
	autoplaySpeed: 1000,
	loop: true,
	dots: true,
	dotsSpeed: 1000,
	dragEndSpeed: 1000
});
// End Feedback Carousel

// Begin To Top
var topShow = 300;
$(window).scroll(function () {
	if ($(this).scrollTop() > topShow) $('.up').fadeIn();
	else $('.up').fadeOut();
});
// End To Top

// Begin Smooth Scroll
smoothScroll.init({
	offset: 60
});
// End Smooth Scroll

// Begin Headhesive
var options = {
	offset: 75,
	classes: {
		clone: 'navbar-clone',
		stick: 'navbar-stick',
		unstick: 'navbar-unstick'
	}
}
var header = new Headhesive('.navbar', options);
// End Headhesive

// Begin Scrollspy
$('body').scrollspy({target: ".navbar", offset: 60});
// End Scrollspy

});
