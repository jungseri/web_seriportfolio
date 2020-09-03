$(document).ready(function () {
  /*메뉴바*/
  $(".menubar").click(function (e) {
    e.preventDefault();
    $(".menubar").toggleClass("on1");
    $(".menubar-slide").stop().slideToggle();

  });

  $(".menubtn").click(function () {
    $(".menubar").toggleClass("on1");
    $(".menubar-slide").stop().slideToggle();
  });


  /*팝업*/
  $(".webcon1").click(function () {
    $(".popup1").show();
  });
  $(".close").click(function () {
    $(".popup1").hide();
  });
  $(".webcon2").click(function () {
    $(".popup2").show();
  });
  $(".close").click(function () {
    $(".popup2").hide();
  });
  /*슬라이드*/
  $(".lightgallery").lightGallery({
    thumbnail: true,
    animateThumb: false,
    showThumbByDefault: false
  });

  const config = {

    type: 'carousel',
    gap: 10,

    center: true,
    // startAt: 0,
    perView: 3,
    // autoplay: 1000,
    breakpoints: {
      1024: {
        perView: 2
      },
      600: {
        perView: 1
      }
    }
  }



  new Glide('.slide1', config).mount();

  new Glide('.slide2', config).mount();
  /*탭버튼*/
  var tabAnchor = $(".tabs-nav li a"),
    tabpanel = $(".glide__slides")

  tabpanel.hide();
  $("#productD-slide").show();

  tabAnchor.click(function (e) {
    e.preventDefault();

    tabAnchor.removeClass("active");
    $(this).addClass("active");

    tabpanel.hide();
    var $target = $(this).attr('href');
    console.log($target);
    $($target).show();

  });
});