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
    AOS.init({
      duration: 1000,
      once: true,
    });
    initPreloader();
    initUserList();
    initToolTips();
    initProductBtns();
    initNiceSelect();
  });


})(jQuery);
