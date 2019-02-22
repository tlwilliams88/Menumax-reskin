(function() {
	var videoWidth = document.querySelector('.video').clientWidth,
		videoHeight = document.querySelector('.video').clientHeight,
		button = document.querySelector('.video__button'),
		poster = document.querySelector('.video__overlay');

	// set video options
	options.width = videoWidth;
	options.height = videoHeight;

	// hide poster and show movie
    button.addEventListener('click', function() {
    	var video = new Vimeo.Player('video', options);
    	
    	poster.hidden = true;
    	video.play();
    });
})();