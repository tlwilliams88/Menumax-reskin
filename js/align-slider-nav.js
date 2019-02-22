;(function() {
	var sliderNav = document.querySelector('.slider-nav');

	justifySliderNav();

	window.addEventListener('resize', justifySliderNav);

	function justifySliderNav() {
		var sliderNavWidth = sliderNav.clientWidth,
			windowWidth = document.documentElement.clientWidth,
			sliderNavMarginLeft = (windowWidth - sliderNavWidth) / 2;

		if(sliderNavMarginLeft > 0) {
			sliderNav.style.left = sliderNavMarginLeft + 'px';
		}
	}

})();