(function ($) {

  "use strict";
  var initSwiper = function () {
    new Swiper(".main-swiper", {
      autoplay: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  $(document).ready(function () {
    initSwiper();

  });
})(jQuery);