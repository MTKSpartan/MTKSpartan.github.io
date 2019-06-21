(function($) {
    'use strict';

    // Main Navigation
    $( '.hamburger-menu' ).on( 'click', function() {
        $(this).toggleClass('open');
        $('.site-navigation').toggleClass('show');
    });

    // Hero Slider
    var swiper = new Swiper('.hero-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

})(jQuery);


$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $(‘body’).addClass(‘changeColor’)
      }
      if ($(this).scrollTop() < 50) {
         $(‘body’).removeClass(‘changeColor’)
      }
   });
});