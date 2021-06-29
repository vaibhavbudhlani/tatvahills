window.addEventListener("load",bindevents);

function bindevents(){
    init();
    
}
function init(){
    
}
$(window).on('scroll', function(){

jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},8000);
	});
});

    });
$("#sendprojects").click(function() {
    $('html, body').animate({
        scrollTop: $("#projectspage").offset().top
    }, 2000);
});
$("#sendtimeline").click(function() {
    $('html, body').animate({
        scrollTop: $("#timelineforward").offset().top
    }, 2000);
});
$("#sendfooter").click(function() {
    $('html, body').animate({
        scrollTop: $("#myFooter").offset().top
    }, 2000);
});


$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    new WOW().init();

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});









