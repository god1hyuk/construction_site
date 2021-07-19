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