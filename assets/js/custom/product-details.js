(function ($) {

  "use strict";

  var initImagePorduct = function () {
    $('.image-container').on('mousemove', function (e) {
      const $container = $(this);
      const $image = $container.find('.zoom-image');
      const containerOffset = $container.offset();
      const containerWidth = $container.width();
      const containerHeight = $container.height();
      const mouseX = e.pageX - containerOffset.left;
      const mouseY = e.pageY - containerOffset.top;
      const originX = (mouseX / containerWidth) * 100;
      const originY = (mouseY / containerHeight) * 100;
      $image.css('transform-origin', `${originX}% ${originY}%`);
    });
    $('.image-container').on('mouseleave', function () {
      const $image = $(this).find('.zoom-image');
      $image.css('transform-origin', 'center center');
    });
  }

  var initSwiper = function () {

    new Swiper(".product-details-swiper", {
      autoplay: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    new Swiper(".reach-now-swiper", {
      autoplay: true,
      slidesPerView: 6,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
        }

      }
    });
  }
  $(document).ready(function () {
    initImagePorduct();
    initSwiper();
  });
})(jQuery);