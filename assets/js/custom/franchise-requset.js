(function ($) {

  "use strict";

  var initSwiper = () => {
    new Swiper('.steps-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,

      },
      loop: false,
      // autoplay: {
      //   delay: 5000, // التبديل التلقائي بين الخطوات كل 5 ثواني
      // },
      effect: 'slide',
      breakpoints: {
        768: {
          slidesPerView: 2, // عرض خطوتين على الشاشات الكبيرة
        },
        1024: {
          slidesPerView: 3, // عرض ثلاث خطوات على الشاشات الأكبر
        },
      },
    });

  }

  function handleFormSubmission() {
    $("#loading").removeClass("d-none");
    setTimeout(function () {
      $("#loading").addClass("d-none");
    }, 2000);
  }

  function validateForm(event) {
    var form = event.target;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      handleFormSubmission()
    }
    form.classList.add('was-validated');
  }
  $(document).ready(function () {


    $(".needs-validation").each(function () {
      $(this).on("submit", validateForm);
    });
    initSwiper();

  });

})(jQuery);
