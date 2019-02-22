;(function() {
	var headingsBlock = document.querySelectorAll('.slider__item__headings-wrapper');

	alignText();

	window.addEventListener('resize', alignText);

	function alignText() {
		var sliderHeight = document.querySelector('.slider__item').clientHeight;

		for(var i = 0; i < headingsBlock.length; i++) {
			headingsBlock[i].style.top = sliderHeight / 2 + 'px';
		}
	}
})();