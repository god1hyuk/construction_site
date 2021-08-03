var count = 0;
// 야간모드 스위치
$(function () {
  $(".construction_site .switch_wrap").click(function () {
    if (count % 2 === 0) {
      $(this).prev("p").text("주간모드");
      $(this).children(".switch_btn").addClass("active");
      $("#changeStyle1").attr("href", "asset/css/header_dark.css");
      $("#changeStyle2").attr("href", "asset/css/style_dark.css");
      $("#changeStyle3").attr("href", "asset/css/responsive_dark.css");
    } else if (count % 2 !== 0) {
      $(this).prev("p").text("야간모드");
      $(this).children(".switch_btn").removeClass("active");
      $("#changeStyle1").attr("href", "asset/css/header.css");
      $("#changeStyle2").attr("href", "asset/css/style.css");
      $("#changeStyle3").attr("href", "asset/css/responsive.css");
    }
    count++;
  });
});

// 사이드 서브메뉴
$(function () {
  $(".construction_site .sideMenu_item").mouseover(function () {
    $(this).children(".pc_submenu").stop().fadeIn(150);
  });
  $(".construction_site .sideMenu_item").mouseout(function () {
    $(this).children(".pc_submenu").stop().fadeOut(150);
  });
});

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
      "4px solid #fa6c3e",
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
  $(".construction_site .map_view .all_area").click(function () {
    switch (count % 2) {
      case 0:
        $(this).addClass("active");
        $(this)
          .children("img")
          .attr("src", "asset/images/icon/all_area_on.png");
        break;
      default:
        $(this).removeClass("active");
        $(this).children("img").attr("src", "asset/images/icon/all_area.png");
        break;
    }
    count++;
  });
});

// 공공기관 링크 (슬라이더)
$(document).ready(function () {
  // PC 버전
  var slider = $(".slider1").lightSlider({
    item: 5,
    loop: true,
    pager: false,
    slideMove: 1,
    easing: "cubic-bezier(0.25, 0, 0.25, 1)",
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
  $(document).ready(function () {
    var slider = $(".slider2").lightSlider({
      item: 5,
      loop: true,
      pager: false,
      slideMove: 1,
      easing: "cubic-bezier(0.25, 0, 0.25, 1)",
      speed: 600,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            item: 3,
            slideMove: 1,
            slideMargin: 6,
          },
        },
        {
          breakpoint: 480,
          settings: {
            item: 2,
            slideMove: 1,
          },
        },
      ],
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
  $(".tab_main > .tab_index li").click(function () {
    $(".tab_main > .tab_index li").removeClass("active");
    $(this).addClass("active");
  });
  $(".tab_sub > .tab_index li").click(function () {
    $(".tab_sub > .tab_index li").removeClass("active");
    $(this).addClass("active");
  });
  $(".division_tab > .tab_index li").click(function () {
    $(".division_tab > .tab_index li").removeClass("active");
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

// 메인 탭 차트 (Easy Pie Chart)
$(function () {
  $(".insp_light .insp_circle1").easyPieChart({
    scaleColor: "transparent",
    lineWidth: 7.6923,
    lineCap: "butt",
    barColor: "#5180e3",
    trackColor: "#dcdcdc",
    animate: 500,
  });
  $(".insp_light .insp_circle2").easyPieChart({
    scaleColor: "transparent",
    lineWidth: 7.6923,
    lineCap: "butt",
    barColor: "#62c6ff",
    trackColor: "#dcdcdc",
    animate: 500,
  });
  $(".insp_light .insp_circle3").easyPieChart({
    scaleColor: "transparent",
    lineWidth: 7.6923,
    lineCap: "butt",
    barColor: "#a76ed5",
    trackColor: "#dcdcdc",
    animate: 500,
  });
  $(".insp_light .insp_circle1").easyPieChart({
    scaleColor: "transparent",
    lineWidth: 7.6923,
    lineCap: "butt",
    barColor: "#5180e3",
    trackColor: "#dcdcdc",
    animate: 500,
  });
  $(".insp_light .insp_circle2").easyPieChart({
    scaleColor: "transparent",
    lineWidth: 7.6923,
    lineCap: "butt",
    barColor: "#62c6ff",
    trackColor: "#dcdcdc",
    animate: 500,
  });
  $(".insp_light .insp_circle3").easyPieChart({
    scaleColor: "transparent",
    lineWidth: 7.6923,
    lineCap: "butt",
    barColor: "#a76ed5",
    trackColor: "#dcdcdc",
    animate: 500,
  });
  $(".insp_light .insp_circle1").easyPieChart({
    scaleColor: "transparent",
    lineWidth: 7.6923,
    lineCap: "butt",
    barColor: "#5180e3",
    trackColor: "#dcdcdc",
    animate: 500,
  });
  $(".insp_light .insp_circle2").easyPieChart({
    scaleColor: "transparent",
    lineWidth: 7.6923,
    lineCap: "butt",
    barColor: "#62c6ff",
    trackColor: "#dcdcdc",
    animate: 500,
  });
  $(".insp_light .insp_circle3").easyPieChart({
    scaleColor: "transparent",
    lineWidth: 7.6923,
    lineCap: "butt",
    barColor: "#a76ed5",
    trackColor: "#dcdcdc",
    animate: 500,
  });
  $(".insp_dark .insp_circle1").easyPieChart({
    scaleColor: "transparent",
    lineWidth: 7.6923,
    lineCap: "butt",
    barColor: "#64eef9",
    trackColor: "#5f6c94",
    animate: 500,
  });
  $(".insp_dark .insp_circle2").easyPieChart({
    scaleColor: "transparent",
    lineWidth: 7.6923,
    lineCap: "butt",
    barColor: "#56cbfd",
    trackColor: "#5f6c94",
    animate: 500,
  });
  $(".insp_dark .insp_circle3").easyPieChart({
    scaleColor: "transparent",
    lineWidth: 7.6923,
    lineCap: "butt",
    barColor: "#50a4ff",
    trackColor: "#5f6c94",
    animate: 500,
  });
});

// 안전사고 발생 현황 (Chart JS)
// var data_light = {
//   labels: ["추락", "화재", "붕괴ㆍ도괴", "넘어짐"],
//   datasets: [
//     {
//       data: [19, 10, 13, 14],
//       backgroundColor: ["#5180e3", "#34d2de", "#ffd12a", "#52e32e"],
//       borderWidth: 0,
//     },
//   ],
// };
// var data_dark = {
//   labels: ["추락", "화재", "붕괴ㆍ도괴", "넘어짐"],
//   datasets: [
//     {
//       data: [19, 10, 13, 14],
//       backgroundColor: ["red", "#34d2de", "#ffd12a", "#52e32e"],
//       borderWidth: 0,
//     },
//   ],
// };

// var config_light = {
//   type: "doughnut",
//   data: data_light,
//   options: {
//     responsive: true,
//     aspectRatio: 1,
//     legend: {
//       display: false,
//     },
//     cutoutPercentage: 70,
//   },
// };
// var myChart_light = new Chart(document.getElementById("myChart"), config_light);




// 상황전파 버튼 (모바일)

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10 && $(this).width() <= 1240) {
      $(".acdnt_sprd_m").fadeIn();
    } else {
      $(".acdnt_sprd_m").fadeOut();
    }
  });
});

// 버거 메뉴 (모바일)
$(function () {
  $(".burger_btn").click(function () {
    $(".mobile_menu").show();
    $(".main_content").hide();
    $(".acdnt_sprd_m").hide();
  });
  $(".close_btn").click(function () {
    $(".mobile_menu").hide();
    $(".main_content").show();
    $(".acdnt_sprd_m").show();
  });
});

// 서브메뉴 (아코디언)

// 서브페이지
$(function () {
  let sideMenu_num;
  $(".sub_page .sideMenu_item").mouseover(function () {
    sideMenu_num = this.value;
    $(this).children("a").children(".sideMenu_icon")
      .css("background-image", "url(asset/images/icon/side_menu" + sideMenu_num + "_dark_on.png)");
  });
  $(".sub_page .sideMenu_item").mouseout(function () {
    sideMenu_num = this.value;
    $(this).children("a").children(".sideMenu_icon")
      .css("background-image", "url(asset/images/icon/sub_side_menu" + sideMenu_num + ".png)");
  });
  $(".pc_submenu").hide();
  $(".sub_page .sideMenu_item > a").click(function () {
    $(".sub_page .sideMenu_item > a").not(this).parent("li.toggle").removeClass("active");
    $(this).parent("li.toggle").toggleClass("active");
    $(this).next(".pc_submenu").slideToggle(300);
    $("ul li a").not(this).next().slideUp(300);
    $(this).children(".accordion_btn").toggleClass("active");
    if ($("ul li a").not(this).children(".accordion_btn").hasClass("active")) {
      $("ul li a").not(this).children(".accordion_btn").removeClass("active");
    }
    return false;
  });
});
// 모바일
$(function () {
  $(".m_submenu").hide();
  $(".m_menu_lists > ul > li > a").click(function () {
    $(this).next().slideToggle(300);
    $("ul li a").not(this).next().slideUp(300);
    $(this).children(".accordion_btn").toggleClass("active");
    if ($("ul li a").not(this).children(".accordion_btn").hasClass("active")) {
      $("ul li a").not(this).children(".accordion_btn").removeClass("active");
    }
    return false;
  });
});

// 추가 검색조건 펼치기
$(function () {
  $(".search_add form").hide();
  $(".add_btn").click(function () {
    $(this).prev("form").slideToggle(300);
    $(this).children(".add_btn img").toggleClass("active");
  });
});