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
  $(".lightgallery").lightGallery();

<<<<<<< HEAD
  const config = {

    type: 'carousel',
    gap: 5,
    center: true,
    // startAt: 0,
    perView: 3,
    // autoplay: 1000,
    breakpoints: {
      1000: {
        perView: 2
      },
      600: {
        perView: 1
      }
    }
  }



  new Glide('.slide1', config).mount();

  new Glide('.slide2', config).mount();
=======
>>>>>>> 252e6f3b6ad202f3d4f6e6fa89b9e557495061e0
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
});

// const config = {
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   // dots: '.carousel__indicadores',
//   arrows: {
//     prev: ".carousel__anterior",
//     next: ".carousel__siguiente",
//   },

//   responsive: [
//     {
//       // screens greater than >= 775px
//       breakpoint: 300,
//       settings: {
//         // Set to `auto` and provide item width to adjust to viewport
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       // screens greater than >= 775px
//       breakpoint: 550,
//       settings: {
//         // Set to `auto` and provide item width to adjust to viewport
//         slidesToShow: 2,
//         slidesToScroll: 2,
//       },
//     },
//     {
//       // screens greater than >= 1024px
//       breakpoint: 800,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//       },
//     },
//   ],
// };
// window.addEventListener("load", function () {
//   new Glider(document.querySelector(".slide1", config));
// });
// window.addEventListener("load", function () {
//   new Glider(document.querySelector(".slide2", config));
// });
window.addEventListener("load", function () {
  new Glider(document.querySelector(".slide1"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    // dots: '.carousel__indicadores',
    arrows: {
      prev: ".carousel__anterior",
      next: ".carousel__siguiente",
    },

    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 300,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        // screens greater than >= 775px
        breakpoint: 550,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });
});
window.addEventListener("load", function () {
  new Glider(document.querySelector(".slide2"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    // dots: '.carousel__indicadores',
    arrows: {
      prev: ".carousel__anterior",
      next: ".carousel__siguiente",
    },

    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 300,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        // screens greater than >= 775px
        breakpoint: 550,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });
});
