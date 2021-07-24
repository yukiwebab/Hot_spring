$(function() {
    $('#slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:true,
        // 1000で1秒
        speed:1000,
        autoplaySpeed:3000,
        // ボタン消す
        arrows:false,
        // 100pxずつ見えるようにする
        centerPadding:'100px',
        centerMode:true,

        // スマホ対応↓
        responsive: [
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding:0,
            centerMode:true
            }
        }
          ]
    });
});

$(function () {
    $("#nav-btn").on("click", function () {
      $(this).toggleClass("-active");
      $("#nav").toggleClass("-active");
    });
  });

//  アコーディオン設定↓
  $(function () {
    $(".js-accordion").on("click", function () {
        // 次の要素を表示非表示ができる
        $(this).next().slideToggle();
    });
  });

//   アニメーション
$(function () {
    new WOW().init();
  });

