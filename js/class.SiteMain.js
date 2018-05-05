// JavaScript Document
var SiteMain = (function() {
	function init(){
		//createRadio();
		createSlickSlider()
		createRatingDefault('.rating', '#rating-', '#7fcd45')
		createRatingDefault('.rating', '#present-rating-', '#07a72d')
		createParterSlider()

		//$('.homeSlider .video-js').width($(window).width())
	}

	function createRadio(){
		$('input.iCheckRadio').iCheck();
	}

	function createRatingDefault(ratingCls, ratingId, colorDefault){
		$(ratingCls).each(function(index){
			var ratingIndex = index + 1
			$.ratePicker(ratingId + ratingIndex, {
				rgbOn:colorDefault
			});
		})
	}
	function createParterSlider(){
		$('.partnerSlider').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 4,
		  slidesToScroll: 4,
		  arrows: true,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 4,
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
		});
	}
	function createSlickSlider(){
		$('.slickSlider').slick({
		  dots: true,
		  infinite: true,
		  fade: true,
		  speed: 300,
		  slidesToShow: 1,
		  adaptiveHeight: true,
		  arrows: false
		});
	}

	function openPopup(idDiv){
		$('.result_question').css('display','none')
		$(idDiv).css('display','block');
	}
	function closePopup(idDiv){
		$(idDiv).css('display','none');
	}
	return {
		init:init,
		openPopup:openPopup,
		closePopup:closePopup
	}

})();

$(document).ready( function() {
	SiteMain.init();
});
