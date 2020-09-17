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

  webAnchor.click(function (e) {
    e.preventDefault();

    webAnchor.removeClass("active1");
    $(this).addClass("active1");

    webpanel.hide();
    var $targets = $(this).attr("href");
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
  };

  new Glide(".slide1", config).mount();

  new Glide(".slide2", config).mount();
  /*탭버튼*/
  var tabAnchor = $(".tabs-nav li a"),
    tabpanel = $(".glide__slides");

  tabpanel.hide();
  $("#productD-slide").show();

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
  var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다
  typingTxt = typingTxt.split(""); // 한글자씩 자른다.
  if (typingBool == false) {
    // 타이핑이 진행되지 않았다면
    typingBool = true;

    var tyInt = setInterval(typing, 100); // 반복동작
  }

  function typing() {
    if (typingIdx < typingTxt.length) {
      // 타이핑될 텍스트 길이만큼 반복
      $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다.
      typingIdx++;
    } else {
      clearInterval(tyInt); //끝나면 반복종료
    }
  }
});
