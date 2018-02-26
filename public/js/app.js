$(document).ready(function() {
	$('.carousel').carousel({
		padding:30,
	});
	$('.parallax').parallax();
	$(".button-collapse").sideNav();
	$('.modal').modal();




	$('#next').on('click', function(){
		$('.carousel').carousel('next');
	})

	$('#back').on('click', function(){
		$('.carousel').carousel('prev');
	})

});


	$('.carousel.carousel-slider').carousel({fullWidth: true});
 