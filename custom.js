

/* Please ❤ this if you like it! */


(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	});  
	
  })(jQuery); 

$(document).ready(function() {
  $('.slider_wrapper').slick({
    speed: 300,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 5000,
    loop: true,
    dots: true,
    arrows: true,
    variableWidth: true,
    cssEase: 'linear',
    responsive:[
    	{
    		breakpoint:768,
    		settings:{
    			slidesToScroll: 1,
    			slidesToShow: 1
    		}
    	}
    ]
  });  
});
