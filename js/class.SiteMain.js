// JavaScript Document
var SiteMain = (function() {
	function init(){
		//createRadio();
		createSlickSlider()
		createRatingDefault('.rating', '#rating-', '#7fcd45')
		createRatingDefault('.rating', '#present-rating-', '#07a72d')
		createParterSlider()
		getIdCardFile()
		switchPay()
		copyEvent()
		open_popup_vaokeo()
		close_popup_vaokeo()
		collapse_coin()

		//$('.homeSlider .video-js').width($(window).width())
	}

	function copyEvent(){
		$('a.copy').click(function(){
			var $temp = $("<input>");
		  $("body").append($temp);
		  $temp.val($(this).parent().find('input').val()).select();
		  document.execCommand("copy");
		  $temp.remove();
		})
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
	function tabPayment(tabname,id) {
		//console.log(tabname,id)
		$('.blockContent_inner').hide();
		$('#'+id).show()
		$('.blockContent_title a').removeClass('active')
		$(tabname).addClass('active')
	}
	function switchPay() {
		$('#btn_choose').click(function() {
			$('#chosen').hide()
			$('#chooseMethod').show()
		})
	}
	function readURL(input) {

	  if (input.files && input.files[0]) {
	    var reader = new FileReader();

	    reader.onload = function(e) {
	      $('#idCardImage').attr('src', e.target.result);
		  $('#idCardImage').css('display','block')
	    }

	    reader.readAsDataURL(input.files[0]);
	  }
	}

	function getIdCardFile(){
		$("#uploadIdCard").change(function() {
		  readURL(this);
		});
	}
	function scrollDown(id,sectionName) {
		$('html, body').animate({
			scrollTop: $('#'+sectionName).offset().top
		}, 500);
	}
	function open_popup_vaokeo() {
		$('#vaokeo').click(function() {
			$('body').addClass('popup-opening');
			$('.popup-vaokeo').show()
		})
	}

	function close_popup_vaokeo() {
		$('.popup-vaokeo .close').click(function() {
			$('body').removeClass('popup-opening');
			$('.popup-vaokeo').hide()
		})
	}
	function switch_tabs_holdcoin(cls,id) {
		$('.colRight__tabs--navs a').removeClass('active')
		$('.'+cls).addClass('active')
		$('.colRight__tabs--content .tabs').hide();
		$('#'+id).show()
	}
	function collapse_coin() {
		$('.theSame_common').click(function() {
			$(this).toggleClass('active').find('.theSame--toggle').toggle()
		})
	}
	return {
		init:init,
		openPopup:openPopup,
		closePopup:closePopup,
		tabPayment:tabPayment,
		scrollDown:scrollDown,
		switch_tabs_holdcoin:switch_tabs_holdcoin
	}

})();

$(document).ready( function() {
	SiteMain.init();
});
