(function ($) {

  "use strict";

  var initPreloader = function () {
    var Body = $('body');
    Body.addClass('preloader-site');
    $('.preloader-wrapper').fadeOut();
    $('body').removeClass('preloader-site');

  }
  var initUserList = function () {
    $("#toggleUserList").click(function (event) {
      event.stopPropagation();
      $("#userlist").toggleClass("show");
    });


    $(document).click(function (event) {
      if (!$(event.target).closest("#userlist, #toggleUserList").length) {
        $("#userlist").removeClass("show");
      }
    });

  }
  var initProductBtns = () => {
    $('.btn-plus').on('click', function () {
      const $input = $('.quantity-input');
      $input.val(parseInt($input.val()) + 1);
    });

    $('.btn-minus').on('click', function () {
      const $input = $('.quantity-input');
      if ($input.val() > 1) {
        $input.val(parseInt($input.val()) - 1);
      }
    });
  }

  var initSwiper = function () {
    new Swiper(".main-swiper", {
      autoplay: true,
      effect: 'fade',
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
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

    var category_swiper = new Swiper(".category-carousel", {
      slidesPerView: 6,
      spaceBetween: 20,
      autoplay: true,
      loop: true,
      speed: 100,
      navigation: {
        nextEl: ".category-carousel-next",
        prevEl: ".category-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 6,
        },

      }
    });
    var category2_swiper = new Swiper(".main-category-carousel", {
      slidesPerView: 7,
      spaceBetween: 20,
      autoplay: true,
      loop: true,
      autoplay: {
        delay: 800,
        disableOnInteraction: false,
      },
      speed: 500,
      // navigation: {
      //   nextEl: ".category-carousel-next",
      //   prevEl: ".category-carousel-prev",
      // },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 7,
        },

      }
    });
    //dynamicBullets: true,


    const stepsswiper = new Swiper('.steps-swiper', {
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
      autoplay: {
        delay: 5000, // التبديل التلقائي بين الخطوات كل 5 ثواني
      },
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

    var reachnowswiper = new Swiper(".reach-now-swiper", {
      autoplay: true,
      slidesPerView: 6,
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
        }, 1200: {
          slidesPerView: 6,
        }

      }
    });


  }
  var initCounters = () => {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
      let target = +counter.getAttribute("data-target"); // Get target number
      let speed = target / 100; // Adjust speed

      let updateCounter = () => {
        let currentValue = +counter.getAttribute("data-current") || 0; // Track current value
        if (currentValue < target) {
          let newValue = Math.min(currentValue + speed, target); // Ensure it doesn't exceed target
          counter.setAttribute("data-current", newValue); // Store current value
          counter.innerText = formatNumber(newValue);
          setTimeout(updateCounter, 30);
        } else {
          counter.innerText = formatNumber(target); // Ensure final format
        }
      };

      updateCounter();
    });
  };

  // Function to format numbers as "K" or "M"
  function formatNumber(value) {
    if (value >= 1_000_000) {
      return (value / 1_000_000).toFixed(1).replace(".0", "") + "M"; // 25000000 → 25M
    } else if (value >= 1_000) {
      return (value / 1_000).toFixed(1).replace(".0", "") + "K";
    }
    return Math.floor(value);
  }




  var initNiceSelect = () => {
    $('select').select2({
      theme: 'bootstrap-5'
    });

    // تهيئة Select2
    $('.select2-country').select2({
      theme: "bootstrap-5",
      templateResult: formatCountry,
      templateSelection: formatCountry,
    });

    // دالة لعرض الأعلام
    function formatCountry(country) {
      if (!country.id) return country.text;
      const $flag = $('<img>').addClass('flag').attr('src', country.element.dataset.flag).css({ width: '30px', height: '20px' });
      const $text = $('<span>').text(' ' + country.text);
      return $('<span>').append($flag).append($text);
    }


    // إضافة قناع لإدخال الرقم
    $('.phone-number').on('input', function () {
      this.value = this.value.replace(/[^0-9]/g, '');
    });

  }


  var initToolTips = () => {
    $('[data-bs-toggle="tooltip"]').tooltip();
  }

  $(document).ready(function () {
    initCounters();
    initUserList();
    initPreloader();
    initSwiper();
    initToolTips();
    initImagePorduct();
    initProductBtns();
    initNiceSelect();
    if (refreshFsLightbox && typeof refreshFsLightbox === "function") {
      refreshFsLightbox();
    }

  });


})(jQuery);