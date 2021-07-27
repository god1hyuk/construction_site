var count = 0;
// 야간모드 스위치
$(function () {
  $(".construction_site .switch_wrap").click(function () {
    if (count % 2 === 0) {
      // $(this).css("transform", "scaleX(-1)");
      $(this).children(".switch_btn").addClass("active");
    } else if (count % 2 !== 0) {
      // $(this).css("transform", "scaleX(1)");
      $(this).children(".switch_btn").removeClass("active");
    }
    count++;
  });
});

// 헤더 메뉴 active
$(function () {
  $(".construction_site .logout").mouseover(function () {
    $(this).addClass("active");
    $(this).css("color", "#64eef9");
    $(this)
      .children("a")
      .children(".logout_icon")
      .css("background-color", "#fff");
  });
  $(".construction_site .logout").mouseout(function () {
    $(this).removeClass("active");
    $(this).css("color", "#fff");
    $(this)
      .children("a")
      .children(".logout_icon")
      .css("background-color", "#979fc6");
  });
  $(".construction_site .go_map button").mouseover(function () {
    $(this).children("img").attr("src", "asset/images/icon/go_map_on.png");
    $(this).css("background-color", "#d3d9f6").css("color", "#192b80");
  });
  $(".construction_site .go_map button").mouseout(function () {
    $(this).children("img").attr("src", "asset/images/icon/go_map.png");
    $(this).css("background-color", "#3b4b93").css("color", "#fff");
  });
});

// 사이드 메뉴 active
$(function () {
  var sideMenu_num;
  $(".construction_site .sideMenu_item").mouseover(function () {
    sideMenu_num = this.value;
    $(this).css(
      "background-image",
      "url(asset/images/icon/side_menu" + sideMenu_num + "_on.png)"
    );
    $(this).addClass("hover");
  });
  $(".construction_site .sideMenu_item").mouseout(function () {
    sideMenu_num = this.value;
    $(this).css(
      "background-image",
      "url(asset/images/icon/side_menu" + sideMenu_num + ".png)"
    );
    $(this).removeClass("hover");
  });
  $(".construction_site .sideMenu_item").click(function () {
    $(".construction_site .sideMenu_item").removeClass("active");
    $(this).addClass("active");
  });
});

// 건축물 착공 현황
// $(function () {
//   $(".start_status_chart .progress_bar").css("width", "0").animate({
//     width: "80%"
//   }, 1200);
// });

// 지도영역 옵션
$(function () {
  var optionColors = {
    start: [
      "rgb(125,179,241)",
      "rgb(31,203,192)",
      "rgb(140,217,0)",
      "rgb(241,181,20)",
      "rgb(250,108,62)",
    ],
    end: [
      "linear-gradient(180deg, rgba(125,179,241,1) 0%, rgba(86,130,232,1) 100%)",
      "linear-gradient(180deg, rgba(31,203,192,1) 0%, rgba(21,169,154,1) 100%)",
      "linear-gradient(180deg, rgba(140,217,0,1) 0%, rgba(96,191,0,1) 100%)",
      "linear-gradient(180deg, rgba(241,181,20,1) 0%, rgba(231,132,14,1) 100%)",
      "linear-gradient(180deg, rgba(250,108,62,1) 0%, rgba(246,73,42,1) 100%)",
    ],
    border: [
      "4px solid #7d96f1",
      "4px solid #22cbc2", 
      "4px solid #8cd900", 
      "4px solid #f1b514", 
      "4px solid #fa6c3e"
    ],
    shadow: "0px 1px 5px rgba(35, 31, 32, 0.45)",
  };
  var optionValue;
  $(".construction_site .map_option li").click(function () {
    optionValue = this.value;
    if ($(this).children("input[type='checkbox']").is(":checked")) {
      $(this)
        .css("background", optionColors.start[optionValue])
        .css("background", optionColors.end[optionValue])
        .css("color", "#fff")
        .css("box-shadow", optionColors.shadow);
      $(this).children("label").css("border", "none");
      $(this)
        .children(".option_text")
        .children(".checking")
        .css("border-top", "none")
        .css("background-color", "#fff")
        .css(
          "background-image",
          "url(asset/images/icon/check" + optionValue + ".png)"
          );
    } else {
      $(this)
        .css("background", "#fff")
        .css("color", "#000")
        .css("box-shadow", "none");
      $(this)
        .children("label")
        .css("border-top", optionColors.border[optionValue]);
      $(this)
        .children(".option_text")
        .children(".checking")
        .css("border", "1px solid #c4c6d1")
        .css("background-color", "#f3f4f9")
        .css("background-image", "none");
    }
  });
});

// 지도영역 뷰
$(function () {
  $('.construction_site .map_view .all_area').click(function () {
    switch (count % 2) {
      case 0:
          $(this)
          .css("color", "#fff")
          .css("background", "#3978fc");
          $(this).children("img").attr("src", "asset/images/icon/all_area_on.png");
        break;
      default:
          $(this)
          .css("color", "#000")
          .css("background", "#fff");
          $(this).children("img").attr("src", "asset/images/icon/all_area.png");
        break;
      }
      count++;
  });
});

// 공공기관 링크 (슬라이더)
$(document).ready(function() {
  // PC 버전
  var slider = $('.slider1').lightSlider({
      item: 5,
      loop: true,
      pager: false,
      slideMove: 1,
      easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
      speed: 600,
  });
  $("#lightSlider a").addClass("d-flex justify-content-center");
  $(".institutions_pc .prevBtn").click(function () {
    slider.goToPrevSlide();
  });
  $(".institutions_pc .nextBtn").click(function () {
    slider.goToNextSlide();
  });
  // 모바일 버전
  $(document).ready(function() {
    var slider = $('.slider2').lightSlider({
        item: 5,
        loop: true,
        pager: false,
        slideMove: 1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    });
    $(".institutions_m .prevBtn").click(function () {
      slider.goToPrevSlide();
    });
    $(".institutions_m .nextBtn").click(function () {
      slider.goToNextSlide();
    });
  });
});





// 탭 전환
$(function () {
  var tab_id;
  $(".tab_main > .tab_index li").click(function () {
    $(".tab_main > .tab_index li").removeClass("active");
    $(this).addClass("active");
  });
  $(".tab_sub > .tab_index li").click(function () {
    $(".tab_sub > .tab_index li").removeClass("active");
    $(this).addClass("active");
  });
});

// 날씨정보 영역
$(function () {
  $(".construction_site .weather .storm").click(function () {
    if (count % 2 === 0) {
      $(this).children("span").text("날씨");
      $(".construction_site .weather .storm_alert").css("opacity", "1");
    } else {
      $(this).children("span").text("태풍");
      $(".construction_site .weather .storm_alert").css("opacity", "0");
    }
    count++;
  });
});

// 메인 탭 (Easy Pie Chart)
$(function() {
  $('.insp_circle1').easyPieChart({
    scaleColor: "transparent",
    lineWidth: 10,
    lineCap: 'butt',
    barColor: '#5180e3',
    trackColor:	"#dcdcdc",
    // size: 130,
    animate: 500
  });
  $('.insp_circle2').easyPieChart({
    scaleColor: "transparent",
    lineWidth: 10,
    lineCap: 'butt',
    barColor: '#62c6ff',
    trackColor:	"#dcdcdc",
    // size: 130,
    animate: 500
  });
  $('.insp_circle3').easyPieChart({
    scaleColor: "transparent",
    lineWidth: 10,
    lineCap: 'butt',
    barColor: '#a76ed5',
    trackColor:	"#dcdcdc",
    // size: 130,
    animate: 500
  });
});

// 안전사고 발생 현황 (Chart JS)
var data = {
  labels: ["추락", "화재", "붕괴ㆍ도괴", "넘어짐"],
  datasets: [
    {
      data: [19, 10, 13, 14],
      backgroundColor: ['#5180e3', '#34d2de', '#ffd12a', '#52e32e'],
      borderWidth: 0,
    },
  ],
}

var config3 = {
  type: 'doughnut',
  data: data,
  options: {
    responsive: true,
    aspectRatio: 1,
    legend: {
      display: false,
    },
    cutoutPercentage: 70,
  },
};
var myChart3 = new Chart(
  document.getElementById('myChart3'),
  config3
);