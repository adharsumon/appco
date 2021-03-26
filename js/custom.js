$(function () {
	// PRELOADER JS HERE
	$(window).load(function () {
		$('.preloader').delay(2500).fadeOut();
	});

	// STICKY MENU
	$(window).scroll(function () {
		var scrollAmount = $(window).scrollTop();

		if (scrollAmount > 300) {
			$(".main_menu").addClass("sticky");
		} else {
			$(".main_menu").removeClass("sticky");
		}
	});

	// APP SLIDER
	$('.owl-carousel').owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		autoplayTimeout: 2500,
		responsive: {
			// breakpoint from 768 up
			768: {
				items: 4,
			},
			// breakpoint from 576 up
			576: {
				items: 3
			}
		}
	});

	//   CUSTOMER SLIDER
	$('.customer_slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		centerMode: true,
		centerPadding: '0px',
		dots: true,
		responsive: [{
				breakpoint: 993,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			}

		]
	});

	//   BACK TO TOP JS HERE
	$(window).on('scroll', function (event) {
		if ($(this).scrollTop() > 300) {
			$('.back-to-top').fadeIn(200)
		} else {
			$('.back-to-top').fadeOut(200)
		}
	});

	// WOW JS HERE
	var wow = new WOW({
		boxClass: 'wow', // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset: 0, // distance to the element when triggering the animation (default is 0)
		mobile: true, // trigger animations on mobile devices (default is true)
		live: true, // act on asynchronously loaded content (default is true)
		callback: function (box) {
			// the callback is fired every time an animation is started
			// the argument that is passed in is the DOM node being animated
		},
		scrollContainer: null, // optional scroll container selector, otherwise use window,
		resetAnimation: true, // reset animation on end (default is true)
	});
	wow.init();

});