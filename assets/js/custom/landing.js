(function ($) {

  "use strict";
  var initSwiper = function () {
    new Swiper(".main-swiper", {
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    //dynamicBullets: true,
    new Swiper(".reach-now-swiper", {
      autoplay: true,
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: "#reachNowNext",
        prevEl: "#reachNowPrev",
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
       
      },
    });
  }
  $(document).ready(function () {
    initSwiper();
    if (refreshFsLightbox && typeof refreshFsLightbox === "function") {
      refreshFsLightbox();
    }
  });
})(jQuery);