(function ($) {

  "use strict";


  var initSwiper = function () {
    new Swiper(".reach-now-swiper", {
      autoplay: true,
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },

      }
    });
  }
  $(document).ready(function () {
    initSwiper();
  });
})(jQuery);