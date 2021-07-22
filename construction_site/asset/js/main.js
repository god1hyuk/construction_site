var count = 0;
// 야간모드 스위치
$(function () {
  $(".construction_site .switch_wrap").click(function () {
    if (count % 2 === 0) {
      $(this).css("transform", "scaleX(-1)");
    } else if (count % 2 !== 0) {
      $(this).css("transform", "scaleX(1)");
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
    border: ["#7d96f1", "#22cbc2", "#8cd900", "#f1b514", "#fa6c3e"],
    shadow: "0px 1px 5px rgba(35, 31, 32, 0.45)",
  };
  var optionValue;
  $(".construction_site .map_option li").click(function () {
    optionValue = this.value;
    if ($(this).children("input").is(":checked")) {
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
          "url(asset/images/icon/check" + optionValue + ".png"
        );
    } else {
      $(this)
        .css("background", "#fff")
        .css("color", "#000")
        .css("box-shadow", "none");
      $(this)
        .children("label")
        .css("border-top", "4px solid" + optionColors.border[optionValue]);
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
  $('.slider').lightSlider({
      item: 5,
      loop: true,
      pager: false,
      slideMove: 1,
      // easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
      speed:600,
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
  $("#lightSlider a").addClass("d-flex justify-content-center");
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
      $(".construction_site .weather .storm_alert").css("display", "block");
    } else {
      $(this).children("span").text("태풍");
      $(".construction_site .weather .storm_alert").css("display", "none");
    }
    count++;
  });
});