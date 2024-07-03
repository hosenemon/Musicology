$(document).ready(function() {
    $(".search_icon").click(function() {
        $(".search_input").toggle();
    })


    $('.goTop').click(function() {
        $('html, body').animate({
            scrollTop:0
        }, 500);
    });
     $(window).scroll(function(){
        if($(this).scrollTop() > 300) {
            $('.goTop').fadeIn();
        }else{
            $('.goTop').fadeOut();
        }
    });
   
})