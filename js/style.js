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
    webpanel = $(".tabcon");

  webpanel.hide();
  $("#work01").show();

  $(".btn1").hover(function () {
    $("#work02").hide();
    $("#work03").hide();
    $("#work01").stop().fadeIn();
    webAnchor.removeClass("hovers");
    $(this).addClass("hovers");
  });

  $(".btn2").hover(function () {
    $("#work01").hide();
    $("#work03").hide();
    $("#work02").stop().fadeIn();
    webAnchor.removeClass("hovers");
    $(this).addClass("hovers");
  });

  $(".btn3").hover(function () {
    $("#work01").hide();
    $("#work02").hide();
    $("#work03").stop().fadeIn();
    webAnchor.removeClass("hovers");
    $(this).addClass("hovers");
  });
  webAnchor.click(function (e) {
    e.preventDefault();

    webAnchor.removeClass("active1");
    webAnchor.removeClass("hovers");
    $(this).addClass("active1");
    $(this).addClass("hovers");

    webpanel.hide();
    var $targets = $(this).attr("href");
    console.log($targets);
    $($targets).show();
  });

  /*팝업*/
  $(".dim").hide();
  $(".webcon1").click(function (e) {
    e.preventDefault();
    $(".popup1").show();
    $(".dim").show();
  });
  $(".close").click(function (e) {
    e.preventDefault();
    $(".popup1").hide();
    $("#section3").show();
    $(".dim").hide();
  });
  $(".webcon2").click(function (e) {
    e.preventDefault();
    $(".popup2").show();
    $(".dim").show();
  });
  $(".close").click(function (e) {
    e.preventDefault();
    $(".popup2").hide();
    $("#section3").show();
    $(".dim").hide();
  });
  $(".webcon3").click(function (e) {
    e.preventDefault();
    $(".popup3").show();
    $(".dim").show();
  });
  $(".close").click(function (e) {
    e.preventDefault();
    $(".popup3").hide();
    $("#section3").show();
    $(".dim").hide();
  });
  /*슬라이드*/
  $(".lightgallery").lightGallery();

  const sec04slide = {
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
  };

  new Glide(".slide1", sec04slide).mount();

  new Glide(".slide2", sec04slide).mount();
  /*탭버튼*/
  var tabAnchor = $(".tabs-nav li a"),
    tabpanel = $(".glide__slides");

  tabpanel.hide();
  $("#visualD-slide").show();

  $(".tabs-nav>li>a.visualbtn").click(function () {
    $(".tabs-nav").addClass("pb100");
  });

  tabAnchor.click(function (e) {
    e.preventDefault();

    tabAnchor.removeClass("active");
    $(this).addClass("active");

    tabpanel.hide();
    var $target = $(this).attr("href");
    console.log($target);
    $($target).show();
  });

  /*menudots*/
  var dots = $(".menudots ul li"); //버튼을 변수에 할당(저장)
  var cont = $("section");

  $(window).scroll(function () {
    //window에 브라우저에 scroll값이 됐을때 함수를 줌.
    var wScroll = $(this).scrollTop();

    if (wScroll >= cont.eq(0).offset().top) {
      dots.removeClass("active3");
      dots.eq(0).addClass("active3");
    }
    if (wScroll >= cont.eq(1).offset().top) {
      dots.removeClass("active3");
      dots.eq(1).addClass("active3");
    }
    if (wScroll >= cont.eq(2).offset().top) {
      dots.removeClass("active3");
      dots.eq(2).addClass("active3");
    }
    if (wScroll >= cont.eq(3).offset().top) {
      dots.removeClass("active3");
      dots.eq(3).addClass("active3");
    }
    if (wScroll >= cont.eq(4).offset().top) {
      dots.removeClass("active3");
      dots.eq(4).addClass("active3");
    }
  });

  var typingBool = false;
  var typingIdx = 0;
  var typingTxt = $(".typing-txt").text();
  typingTxt = typingTxt.split("");
  if (typingBool == false) {
    typingBool = true;

    var tyInt = setInterval(typing, 100);
  }

  function typing() {
    if (typingIdx < typingTxt.length) {
      $(".typing").append(typingTxt[typingIdx]);
      typingIdx++;
    } else {
      clearInterval(tyInt);
    }
  }
});