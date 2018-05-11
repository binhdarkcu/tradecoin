(function($){
	function equalizeHeights(selector) {
		var heights = new Array();

		// Loop to get all element heights
		$(selector).each(function() {

			// Need to let sizes be whatever they want so no overflow on resize
			$(this).css('min-height', '0');
			$(this).css('max-height', 'none');
			$(this).css('height', 'auto');

			// Then add size (no units) to array
	 		heights.push($(this).height());
		});

		// Find max height of all elements
		var max = Math.max.apply( Math, heights );

		// Set all heights to max height
		$(selector).each(function() {
			$(this).css('height', max + 100 + 'px');
		});
	}

	$(window).load(function() {
		// Fix heights on page load
		equalizeHeights('.advantage .threeBlock .blockCol');

		// Fix heights on window resize
		var iv = null;
		$(window).resize(function() {

			if(iv !== null) {
				window.clearTimeout(iv);
			}

			// Needs to be a timeout function so it doesn't fire every ms of resize
			iv = setTimeout(function() {
	      			equalizeHeights('.advantage .threeBlock .blockCol');
			}, 120);
		});
	});
})(jQuery);
