$( document ).ready(function() {
	// slider text animation
  	var textAnimationOptions = {
  		in: {
  			effect: 'tada',
  			delay: 30,
  			shuffle: true
  		}
  	};

  	// initialize text animation
  	$('.slider_text-animate').textillate(textAnimationOptions);

	// initialize slider
	$('.slider').on('init', function(slick) {
  		$('.slider__item__headings-wrapper:first .slider_text-animate').textillate('in');
	});

  	// on slide event
	$('.slider').on('afterChange', function(event, slick, currentSlide) {
		$('.slider__item__headings-wrapper').eq(currentSlide).find('.slider_text-animate').textillate('in');
	});

	// set slider options
    $('.slider').slick({
    	slide: '.slider__item',
  		arrows: true,
  		dots: true,
  		fade: true,
  		prevArrow: '.arrow_slider-left',
    	nextArrow: '.arrow_slider-right',
    	asNavFor: '.slider-nav'
    });

    // set slider navigation options
    $('.slider-nav').slick({
    	slide: '.slider-nav__item',
    	slidesToShow: 4,
  		slidesToScroll: 1,
  		arrows: false,
  		asNavFor: '.slider',
  		focusOnSelect: true
    });

    // smooth scroll
    $('a').smoothScroll({
      speed: 900
    });

    // set magnificpopup
    var magnificPopup = $.magnificPopup.instance;

    $('.portfolio__items').magnificPopup({
  		delegate: '.portfolio__item__img__hover-overlay',
  		type: 'image',
  		showCloseBtn: false,
  		gallery: {
  			enabled: true,
  			preload: [0,2]
  		},
  		image: {
  			titleSrc: 'title'
  		},
  		zoom: {
    		enabled: true,
    		duration: 300, // duration of the effect, in milliseconds
    		easing: 'ease-in-out', // CSS transition easing function
    		opener: function(el) {
      					return el.find('.portfolio__item__img__hover-overlay__zoom-img');
    				}
  		},
  		callbacks: {
  			open: function() {
  				var imageContainer = $(this.content[0]).find('figure'),
  					closeButtonImg = $('<div class="portfolio__popup__close-button"><div class="portfolio__popup__close-button__line-1"></div><div class="portfolio__popup__close-button__line-2"></div></div>');

  				// append close button
  				imageContainer.prepend(closeButtonImg);

  				// set event listener for close button
  				closeButtonImg.click(function() {
  					magnificPopup.close();
  				});
  			},
  			change: function() {
  				var navigationBar = $(this.content[0]).find('.mfp-title'),
  				arrowLeft = $('<div class="arrow popup_arrow popup_arrow-left"><div class="arrow__line arrow__line_up"></div><div class="arrow__line arrow__line_down"></div></div>'),
  				arrowRight = $('<div class="arrow arrow_rotated popup_arrow popup_arrow-right"><div class="arrow__line arrow__line_up"></div><div class="arrow__line arrow__line_down"></div></div>');

  				// append arrows
  				navigationBar.prepend(arrowLeft);
  				navigationBar.append(arrowRight);

  				// set event listeners for arrows
  				arrowLeft.click(function() {
  					magnificPopup.prev();
  				});

  				arrowRight.click(function() {
  					magnificPopup.next();
  				});
  			}
  		}
	});

	// set testimonials carousel options
	$('.clients__testimonials').slick({
		slide: '.clients__testimonials__item',
  		arrows: true,
  		centerMode: true,
  		prevArrow: '.testimonials_arrow-left',
    	nextArrow: '.testimonials_arrow-right',
    	slidesToShow: 1,
  		slidesToScroll: 1,
  		variableWidth: true
	});
});