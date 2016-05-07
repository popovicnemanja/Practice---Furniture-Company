$(document).ready(function() {
    $('.menu').on('click', function() {
        $('nav').find('ul').slideToggle(700)});


    $(window).scroll(function(){
    	if($(this).scrollTop() > 100) {
    		$('.scrollToTop').fadeIn();
    	} else {
    		$('.scrollToTop').fadeOut();
    	}
    });

    $('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop: 0}, 800);
		return false;
		});
});


    