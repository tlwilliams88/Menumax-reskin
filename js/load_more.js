;
(function($) {
	jQuery.fn.portfolio_addon = function (addon_options) {
        //Set Variables
        var addon_el = jQuery(this),
            img_count = addon_options.items.length,
            img_per_load = addon_options.load_count,
            $newEls = '',
            alreadyAdded = 0;

        // Initialize isotope
        addon_el.isotope({
            itemSelector: '.portfolio__item'
        });

        $('.portfolio__button').on('click', function() {
            // set preloader
            $(this).removeClass('portfolio__button_transitioned');
            $('.portfolio__button__text').addClass('portfolio__button__text_hidden');
            $('.portfolio__button__preloader').removeClass('portfolio__button__preloader_hidden');
        	// set count of loading images
        	img_per_load = addon_options.load_count;
        	// reset last images set
        	$newEls = '';
        	
        	if(!img_count) {
        		$(this).find('.portfolio__button__text').html('No more');

        		return;
        	}

        	if(img_per_load > img_count)
        		img_per_load = img_count;

        	// Already added items
        	alreadyAdded = addon_el.find('.av-added').length;
            // Creating elements
            while(img_per_load) {
            	$newEls += '<div class="portfolio__item av-added"><div class="portfolio__item__img" style="background-image: url(' + addon_options.items[alreadyAdded].backgroundImage + ')"><a href="' + addon_options.items[alreadyAdded].backgroundImage + '" class="portfolio__item__img__hover-overlay" title="' + addon_options.items[alreadyAdded].title + '"><img class="portfolio__item__img__hover-overlay__zoom-img" src="' + addon_options.items[alreadyAdded].backgroundImage + '" alt><span class="portfolio__item__img__hover-overlay__plus"><span class="portfolio__item__img__hover-overlay__plus__line-hor"></span><span class="portfolio__item__img__hover-overlay__plus__line-vert"></span></span></a></div><div class="portfolio__item__info"><span class="portfolio__item__info__tag">' + addon_options.items[alreadyAdded].tag + '</span><div class="portfolio__item__info__heading-group"><h3 class="portfolio__item__info__heading"><a href="' + addon_options.items[alreadyAdded].headingHref + '" class="portfolio__item__info__heading__link">' + addon_options.items[alreadyAdded].heading + '</a></h3><p class="portfolio__item__info__foreword">' + addon_options.items[alreadyAdded].headingForeword + '</p><a href="' + addon_options.items[alreadyAdded].moreButtonHref + '" class="portfolio__item__info__button">More</a></div></div></div>'

            	img_per_load--;
            	alreadyAdded++;
            }

			setTimeout(function(){
                addon_el.isotope('insert', $($newEls));
                // romove preloader
                $('.portfolio__button__text').removeClass('portfolio__button__text_hidden');
                $('.portfolio__button__preloader').addClass('portfolio__button__preloader_hidden');
                $(this).addClass('portfolio__button_transitioned');

                if(alreadyAdded + img_per_load >= img_count) {
                    $(this).removeClass('portfolio__button_transitioned');
                    $(this).find('.portfolio__button__text').html('No more');
                    $(this).css('cursor', 'default');
                    $(this).off('click');
                }
            }.bind($(this)), 1000);

			
		});
    }


})(jQuery);