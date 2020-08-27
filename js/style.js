$(document).ready(function () {
  $(".menubar").click(function (e) {
    e.preventDefault();
    $(".menubar").toggleClass("on1");
    $(".menubar-slide").stop().slideToggle();

  });

  $(".menubtn").click(function () {
    $(".menubar").toggleClass("on1");
    $(".menubar-slide").stop().slideToggle();
  });


  $(".lightgallery").lightGallery();

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

  // $(".webtab").mouseenter(function () {
  //   $(this).css("color", "#222222;");
  // });
  // $(".webtab").mouseleave(function () {
  //   $(this).css("color", "#aaaaaa;");
  // });

});