$(document).ready(function () {
    $(".lightgallery").lightGallery();

    $(".menubar").click(function (e) {
        e.preventDefault();
        $(".menubar").toggleClass("on1");
        $(".menubar-slide").stop().slideToggle();
    });

    $(".menubtn").click(function () {
        $(".menubar").toggleClass("on1");
        $(".menubar-slide").stop().slideToggle();
    });

});