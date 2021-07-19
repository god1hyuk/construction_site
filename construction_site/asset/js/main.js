$(function () {
  let count = 0;
  $(".construction_site .switch_wrap").click(function () {
    if (count % 2 === 0) {
      $(this).css("transform", "scaleX(-1)");
    } else if (count % 2 !== 0) {
      $(this).css("transform", "scaleX(1)");
    }
    count++;
  });
});

// 메뉴 active
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
  let sideMenu_num;
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

$(function () {
  $(".construction_site .tab_main > .tab_index li").click(function () {
    $(".construction_site .tab_main > .tab_index li").removeClass("active");
    $(this).addClass("active");
  });
  $(".construction_site .tab_sub > .tab_index li").click(function () {
    $(".construction_site .tab_sub > .tab_index li").removeClass("active");
    $(this).addClass("active");
  });
});

$(function () {
  $(".construction_site .tab_main > .tab_index li").click(function () {
    $(".construction_site .tab_main > .tab_index li").removeClass("active");
    $(this).addClass("active");
  });
  $(".construction_site .tab_sub > .tab_index li").click(function () {
    $(".construction_site .tab_sub > .tab_index li").removeClass("active");
    $(this).addClass("active");
  });
});

// Datepicker
$.datepicker.setDefaults({
  dateFormat: "yy-mm-dd",
  prevText: "이전 달",
  nextText: "다음 달",
  monthNames: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  monthNamesShort: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  dayNames: ["일", "월", "화", "수", "목", "금", "토"],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
  dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
  showMonthAfterYear: true,
  yearSuffix: "년",
});

$(function () {
  $("#datepicker1, #datepicker2").datepicker();
});
