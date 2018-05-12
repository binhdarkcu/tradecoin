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
			 breakpoint: 1200,
			 settings: {
			   slidesToShow: 3,
			   slidesToScroll: 3,
			 }
		   },
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		      }
		    },
			{
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		      }
		    },
			{
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
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

	function openPopup(idDiv, clsActive){
		console.log(clsActive)
		$('.popup').css('display','none')
		$(idDiv).css('display','block')
		$('.commonContent').css('display','none')
		$('#' + clsActive).css('display','block')
		$('.popup .navLink').removeClass('active')
		if(clsActive == 'signInContent') {
			$('.navLink.signInLink').addClass('active')
		} else {
			$('.navLink.signUpLink').addClass('active')
		}

		$('body').addClass('popup-opening ' + clsActive)
	}
	function closePopup(idDiv){
		$('body').removeClass('popup-opening')
		$(idDiv).css('display','none');
		$('.signin,.signup').css('display','none');
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
