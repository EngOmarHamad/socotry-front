(function ($) {

  "use strict";
  var initSwiper = () => {
    new Swiper(".reach-now-swiper", {
      autoplay: true,
      slidesPerView: 6,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        0: {
          slidesPerView: 2,
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
    $(".toggleIcon").click(function () {
      var categoryContent = $(this).closest(".main-categroy, .main-subcateogry").find(".categoryContent");
      var plusIcon = $(this).find(".plusIcon");
      var minusIcon = $(this).find(".minusIcon");

      plusIcon.toggleClass("d-none");
      minusIcon.toggleClass("d-none");
      categoryContent.toggleClass("d-flex d-none");

    });
    initSwiper();
  });

})(jQuery);