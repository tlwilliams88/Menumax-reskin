;(function() {
	var slider = document.querySelector('.slider'),
		leftSliderArrow = document.querySelector('.arrow_slider'),
		rightSliderArrow = document.querySelector('.arrow_slider-right');

	slider.addEventListener('mouseenter', function(event) {
		leftSliderArrow.classList.remove('arrow_slider-hidden-left');
		rightSliderArrow.classList.remove('arrow_slider-hidden-right');
	});

	slider.addEventListener('mouseleave', function(event) {
		var arrow = event.relatedTarget;

		if(arrow && arrow.classList.contains('arrow_slider-prevent-hide')){
			return;
		} else {
			leftSliderArrow.classList.add('arrow_slider-hidden-left');
			rightSliderArrow.classList.add('arrow_slider-hidden-right');
		}
	});
})();