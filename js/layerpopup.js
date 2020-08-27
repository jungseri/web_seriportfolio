$(document).ready(function () {

    $(".click").click(function (e) {
        e.preventDefault();
        // $("#layer").css("display","block");
        $("#layer").show();
        // $("#layer").fadeIn();
        // $("#layer").slideDown();
    });

    $(".close").click(function (e) {
        e.preventDefault();
        // $("#layer").css("display","none");
        $("#layer").hide();
        // $("#layer").fadeOut();
        // $("#layer").slideUp();
    });


    //window("파일명", "파일이름", "옵션설정");
    //옵션: left, top, width, status, toolbar, location,
    //menubar, scrollbars, fullscreen
    //그냥 아에 창으로 나오는 거임.

    //라이트박스
    //레이어팝업이랑, 이미지슬라이드랑 합쳐진것

    /*lightgallerybox*/

    $("#lightgallery").lightGallery();
});