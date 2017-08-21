$(document).ready(function(){
  $('#bxslider').bxSlider();
  $('#raptor').raptorize({
		'enterOn' : 'konami-code'
	});

  // If a user scrolls below the absolute top, then update the header
  $(window).scroll(function () {
  	var $header = $("#header");

  	if ($header.offset().top == 0) {
  		$header.removeClass("alternate-header");
  	}
  	else if (!$header.hasClass("alternate-header"))
  	{
  		$header.addClass("alternate-header");
  	}
  });
});