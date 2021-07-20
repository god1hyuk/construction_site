let count = 0;

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



$(function () {
  $('.construction_site .weather .storm').click(function () {
    if (count % 2 === 0) {
      $(this).children("span").text('날씨');
      $('.construction_site .weather .storm_alert').css('display', 'block');
    } else {
      $(this).children("span").text('태풍');
      $('.construction_site .weather .storm_alert').css('display', 'none');
    }
    count ++;
  });
});

$(function () {
  const gradient = {
    start: [
      "rgb(125,179,241)", 
      "rgb(31,203,192)", 
      "rgb(140,217,0)", 
      "rgb(241,181,20)", 
      "rgb(250,108,62)"
    ],
    end: [
      "linear-gradient(180deg, rgba(125,179,241,1) 0%, rgba(86,130,232,1) 100%)", 
      "linear-gradient(180deg, rgba(31,203,192,1) 0%, rgba(21,169,154,1) 100%)", 
      "linear-gradient(180deg, rgba(140,217,0,1) 0%, rgba(96,191,0,1) 100%)", 
      "linear-gradient(180deg, rgba(241,181,20,1) 0%, rgba(231,132,14,1) 100%)", 
      "linear-gradient(180deg, rgba(250,108,62,1) 0%, rgba(246,73,42,1) 100%)"
    ],
  };
  let optionValue;
  $(".construction_site .map_option li").click(function () {
    optionValue = this.value;
    $(this).css("background", gradient.start[optionValue]).css("background", gradient.end[optionValue]).css("color", "#fff");
    $(this).children("label").css("border", "none");
    $(this).children(".option_text").children(".checking").css("border", "none").css("background-color", "#fff").css("background-image", "url(asset/images/icon/check" + optionValue + ".png");
  });
});


// $(function () {
//   $(".construction_site .map_option li").click(function () {

//   });
// });