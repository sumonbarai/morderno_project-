$(document).ready(function () {
    $('.main_nav .main_menu .menu_icon i').click(function () {
        $('.main_nav .menu_items').slideToggle(1000);
    });

    // back to top bottom menu
    $(window).scroll(function () {
        let scrolling = $(window).scrollTop();
        if (scrolling > 400) {
            $('.back_icon i').fadeIn(2000);
        } else {
            $('.back_icon i').fadeOut(2000);
        }
    });
    $('.back_icon i').click(function () {
        $('html , body').animate({
            'scrollTop': '0'
        }, 2000);
    });


    //   touch slider
    $('.touch_banner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
    });











});