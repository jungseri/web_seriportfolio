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


  /*tabsec03*/
  var webAnchor = $(".list-btn h1 a"),
    webpanel = $(".tabcon")

  webpanel.hide();
  $("#work01").show();

  webAnchor.click(function (e) {
    e.preventDefault();

    webAnchor.removeClass("active1");
    $(this).addClass("active1");

    webpanel.hide();
    var $targets = $(this).attr('href');
    console.log($targets);
    $($targets).show();

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
  $(".lightgallery").lightGallery();

  const config = {
    type: "carousel",
    perView: 3,
    // focusAt: "center",
    autoplay: 2000,
    gap: 10,
    breakpoints: {
      1100: {
        perView: 2,
        gap: 10,
      },
      800: {
        perView: 1,
        gap: 10,
      },
    },
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