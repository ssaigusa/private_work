
$(function () {
    var HEIGHT = $("#main_contents").offset().top - 300;

    $(window).on("load scroll", function () {
        // スクロールするとfixedクラスを追加
        if ($(window).scrollTop() > HEIGHT) {
            $("nav").slideDown("fast");
            $(".fixed-action-btn").fadeIn("fast");
        } else {
            //80px以下だとfixedクラスを削除
            $("nav").slideUp("fast");
            $(".fixed-action-btn").fadeOut("fast");
        }
    });

    $("#title_arrow").click(function () {
        $("html,body").animate({ scrollTop: HEIGHT + 100 }, "fast");
        return false;
    });

    $(".company-1").click(function () {
        window.open("http://www.techfirm-hd.com");
    });

    $(".company-2").click(function () {
        window.open("http://www.techfirm.co.jp");
    });

    $(".company-3").click(function () {
        window.open("http://www.prismsol.com");
    });

    $(".company-4").click(function () {
        window.open("http://www.e-b-e.co.jp");
    });

    $("#contact_btn").click(function () {
        window.open("https://www.techfirm.co.jp/en/inquiry.html");
    });

});