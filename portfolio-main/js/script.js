$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

});


//drawer追記//
$(function() {
  $('.drawer-toggle ').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $('.header').toggleClass('is-active');
    $('.gnav').toggleClass('is-active');
    if($('.drawer-toggle ').hasClass('is-active')){
      $('.gnav a').on('click',function(){
        $('.gnav').removeClass('is-active');
        $('.header').removeClass('is-active');
        $('.drawer-toggle ').removeClass('is-active');
          $('.drawer').removeClass('is-active');
      });
    return false;
    }
   });

    });