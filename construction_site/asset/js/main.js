// datepicker
$(function () {
  $.datepicker.setDefaults({
    dateFormat: 'yy-mm-dd',
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    showMonthAfterYear: true,
    yearSuffix: '년'
  });

  $(function () {
    $("input[name='datepicker']").datepicker().datepicker('setDate', new Date());
    $(".aGroup_info input[name='datepicker']").datepicker().datepicker('setDate', '2020-09-09');
  });
});

// 야간모드 스위치
$(function () {
  let count = 0;
  $(".main_page .switch_wrap").click(function () {
    if (count % 2 === 0) {
      $(this).prev("p").text("주간모드");
      $(this).children(".switch_btn").addClass("active");
      $("#changeStyle1").attr("href", "../asset/css/header_dark.css");
      $("#changeStyle2").attr("href", "../asset/css/style_dark.css");
      $("#changeStyle3").attr("href", "../asset/css/responsive_dark.css");
    } else if (count % 2 !== 0) {
      $(this).prev("p").text("야간모드");
      $(this).children(".switch_btn").removeClass("active");
      $("#changeStyle1").attr("href", "../asset/css/header.css");
      $("#changeStyle2").attr("href", "../asset/css/style.css");
      $("#changeStyle3").attr("href", "../asset/css/responsive.css");
    }
    count++;
  });
});

// 링크 이동
$(function () {
  $(".home").click(function () {
    location.href = "index.html";
  });
  $(".go_map button").click(function () {
    location.href = "map_page.html";
  });
});

// 사이드 서브메뉴
$(function () {
  $(".main_page .sideMenu_item").mouseover(function () {
    $(this).children(".pc_submenu").stop().fadeIn(150);
  });
  $(".main_page .sideMenu_item").mouseout(function () {
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
  $(".main_page .map_option li").click(function () {
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
          "url(../asset/images/icon/map_check" + optionValue + ".png)"
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
  let count = 0;
  $(".main_page .map_view .all_area").click(function () {
    switch (count % 2) {
      case 0:
        $(this).addClass("active");
        $(this)
          .children("img")
          .attr("src", "../asset/images/icon/all_area_on.png");
        break;
      default:
        $(this).removeClass("active");
        $(this).children("img").attr("src", "../asset/images/icon/all_area.png");
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
  $(".searchRqt_tab > .tab_index li").click(function () {
    var tab_id = $(this).attr('data-tab');
    $(".searchRqt_tab > .tab_index li").removeClass("active");
    $(".searchRqt_tab > .tab_content").removeClass("active");
    $(this).addClass("active");
    $("#" + tab_id).addClass('active');
  });
  $(".searchRqt_tab > .tab_content li").click(function () {
    if ($(this).children("input[type='checkbox']").is(":checked")) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
  $(".responsibility .tab_index li").click(function () {
    var tab_id = $(this).attr('data-tab');
    $(".responsibility .tab_index li").removeClass("active");
    $(".responsibility .tab_content").removeClass("active");
    $(this).addClass("active");
    $("#" + tab_id).addClass('active');
  });
});

// 날씨정보 영역
$(function () {
  let count = 0;
  $(".main_page .weather .storm").click(function () {
    if (count % 2 === 0) {
      $(this).children("span").text("날씨");
      $(".main_page .weather .storm_alert").css("opacity", "1");
    } else {
      $(this).children("span").text("태풍");
      $(".main_page .weather .storm_alert").css("opacity", "0");
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
// var data = {
//   labels: ["추락", "화재", "붕괴ㆍ도괴", "넘어짐"],
//   datasets: [
//     {
//       data: [19, 10, 13, 14],
//       backgroundColor: ["#5180e3", "#34d2de", "#ffd12a", "#52e32e"],
//       borderWidth: 0,
//     },
//   ],
// };

// var config = {
//   type: "doughnut",
//   data: data,
//   options: {
//     responsive: true,
//     aspectRatio: 1,
//     legend: {
//       display: false,
//     },
//     cutoutPercentage: 70,
//   },
// };
// var myChart = new Chart(document.getElementById("myChart"), config);

// 상황전파 버튼 (모바일)

$(function () {
  $(".send_btn_m").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10 && $(this).width() <= 1024) {
      $(".send_btn_m").fadeIn();
    } else {
      $(".send_btn_m").fadeOut();
    }
  });
});

// 버거 메뉴 (모바일)
$(function () {
  $(".burger_btn").click(function () {
    $(".mobile_menu").show();
    $(".header_m").hide();
    $(".main_content").hide();
    $(".send_btn_m").hide();
  });
  $(".mobile_menu .close_btn").click(function () {
    $(".mobile_menu").hide();
    $(".header_m").show();
    $(".main_content").show();
    $(".send_btn_m").show();
  });
});

// 서브페이지
$(function () {
  let sideMenu_num;
  $(".sub_page .sideMenu_item").mouseover(function () {
    sideMenu_num = this.value;
    $(this).children("a").children(".sideMenu_icon")
      .css("background-image", "url(../asset/images/icon/side_menu" + sideMenu_num + "_dark_on.png)");
  });
  $(".sub_page .sideMenu_item").mouseout(function () {
    sideMenu_num = this.value;
    $(this).children("a").children(".sideMenu_icon")
      .css("background-image", "url(../asset/images/icon/sub_side_menu" + sideMenu_num + ".png)");
  });
  $(".pc_submenu").hide();
  $(".sideMenu_item.toggle > a").click(function () {
    $(".sideMenu_item.toggle > a").not(this).parent("li.toggle").removeClass("active");
    $(this).parent("li.toggle").toggleClass("active");
    $(this).next(".pc_submenu").slideToggle(300);
    $("ul li a").not(this).next().slideUp(300);
    $(this).children(".accordion_btn").toggleClass("active");
    if ($("ul li a").not(this).children(".accordion_btn").hasClass("active")) {
      $("ul li a").not(this).children(".accordion_btn").removeClass("active");
    }
  });
});
// 모바일 메뉴
$(function () {
  $(".m_submenu").hide();
  $(".m_menu_lists > ul > .accordion_menu > a").click(function () {
    $(this).next().slideToggle(300);
    $("ul li a").not(this).next().slideUp(300);
    $(this).children(".accordion_btn").toggleClass("active");
    if ($("ul li a").not(this).children(".accordion_btn").hasClass("active")) {
      $("ul li a").not(this).children(".accordion_btn").removeClass("active");
    }
  });
});

// 추가 검색조건 펼치기
$(function () {
  $(".search_add form").hide();
  $(".addSearch_btn").click(function () {
    $(this).prev("form").slideToggle(500);
    $(this).children(".addSearch_btn img").toggleClass("active");
    if (count % 2 === 0) {
      $(this).children("p").text("추가 검색조건 닫기");
    } else {
      $(this).children("p").text("추가 검색조건 더보기");
    }
    count++;
  });
});

// 검색조건 선택
$(function () {
  $(".sub_page .searchFilter_btn").click(function () {
    $(".searchFilter_m").show();
    $(".header_m").hide();
    $(".main_content").hide();
    $(".acdnt_sprd_m").hide();
    $(".sub_page .searchFilter_m .close_btn").click(function () {
      $(".searchFilter_m").hide();
      $(".header_m").show();
      $(".main_content").show();
      $(".acdnt_sprd_m").show();
    });
  });
});

// 추가 검색조건 Inputs
$(function () {
  // $(".check_wrap > li:not(:nth-child(3)) li").click(function () {
  //   if ($(this).children("input[type='checkbox']").is(":checked")) {
  //     $(this).children(".checking").addClass("active");
  //   } else {
  //     $(this).children(".checking").removeClass("active");
  //   }
  // });
  // $(".check_wrap > li:nth-child(3) li").click(function () {
  //   $(".check_wrap > li:nth-child(3) li .checking").removeClass("active");
  //   $(this).children(".checking").addClass("active");
  // });
});

// 조건검색 키워드
$(function () {
  $(".keyword_list li").mouseover(function () {
    $(this).children(".sBubble").stop().fadeIn(100);
  });
  $(".keyword_list li").mouseout(function () {
    $(this).children(".sBubble").stop().fadeOut(100);
  });
  $(".search_decision .save_btn").click(function () {
    $(".keyword_save").fadeIn(200);
  });
  $(".keyword_save .kSave_cancel").click(function () {
    $(".keyword_save").fadeOut(200);
  });
  $(".keyword_save .close_box").click(function () {
    $(".keyword_save").fadeOut(200);
  });
});

// 검색결과 리스트
$(function () {
  $(".result_list .result > li").click(function () {
    // if ($(this).children(".result_item").children("li").children("input[type='checkbox']").is(":checked")) {
    //   $(this).children(".result_item").children("li").children(".checking").addClass("active");
    // } else {
    //   $(this).children(".result_item").children("li").children(".checking").removeClass("active");
    // }
  });
  $(".const_mgt .result_item li:not(:first-child)").click(function () {
    location.href = "const_info.html";
  });
  $(".bldg_mgt .result_item li:not(:first-child)").click(function () {
    location.href = "bldg_info.html";
  });
  $(".acdnt_info .result_item li:not(:first-child)").click(function () {
    location.href = "acdnt_view.html";
  });
  $(".aGroup_mgt.official .result_item li:not(:first-child)").click(function () {
    location.href = "aGroup_info.html";
  });
  $(".notice_page.official .result_item li:not(:first-child)").click(function () {
    location.href = "notice_view.html";
  });
  $(".promotion_page .result_item li:not(:first-child)").click(function () {
    location.href = "promotion_view.html";
  });
  $(".aGroup_mgt.admin .result_item li:not(:first-child, :last-child)").click(function () {
    location.href = "aGroup_info_admin.html";
  });
  $(".notice_page_admin .result_item li:not(:first-child)").click(function () {
    location.href = "notice_view_admin.html";
  });
  $(".data_share_admin .result_item li:not(:first-child)").click(function () {
    location.href = "share_view_admin.html";
  });
  $(".notice_page.admin .delete_btn, .data_share_page.admin .delete_btn").click(function () {
    if(confirm("해당 게시물을 삭제하시겠습니까?")) {
      alert("삭제되었습니다.");
    } else {
      return false;
    }
  });
  $(".share_view_admin .delete_btn").click(function () {
    if(confirm("해당 게시물을 삭제하시겠습니까?")) {
      alert("삭제되었습니다.");
      location.href = "data_share_admin.html";
    } else {
      return false;
    }
  });
  $(".notice_view_admin .delete_btn").click(function () {
    if(confirm("해당 게시물을 삭제하시겠습니까?")) {
      alert("삭제되었습니다.");
      location.href = "data_share_admin.html";
    } else {
      return false;
    }
  });
  $(".pagination li.page_item").click(function () {
    $(".pagination li.page_item").removeClass("active");
    $(this).addClass("active");
  });
});

// 진행사항 수정
$(function () {
  let count = 3;
  let preWorkList = `<li>
  <input type="file" id="pre_work` + count + `" />
  <input type="text" class="upload_name" />
  <label class="file_btn" for="pre_work` + count + `">파일선택</label>
  </li>`;

  $(".cProgress_list .check_wrap .form_box button.add").click(function () {
    count++;
    $(this).prev('ul').append(preWorkList);
  });
});

$(function () {
  if ($(window).width() <= 1024) {
    // 공사장 관리 페이지
    $(".const_mgt .search_result .result_item > li:nth-child(3)").prepend("<span>유형</span>");
    $(".const_mgt .search_result .result_item > li:nth-child(4)").prepend("<span>공종</span>");
    $(".const_mgt .search_result .result_item > li:nth-child(5)").prepend("<span>착공일</span>");
    $(".const_mgt .search_result .result_item > li:nth-child(6)").prepend("<span>준공예정일</span>");
    $(".const_mgt .search_result .result_item > li:nth-child(7)").prepend("<span>공정기/경과일</span>");
    $(".const_mgt .search_result .result_item > li:nth-child(8)").prepend("<span>공정율</span>");
    $(".const_mgt .search_result .result_item > li:nth-child(9)").prepend("<span>점검횟수</span>");
    // 공사장 정보보기 페이지
    $(".const_info .insp_result .result_item > li:nth-child(1)").after("<li>서울특별시 구로구 경인로 382 (개봉동)</li>");
    $(".const_info .insp_result .result_item > li:nth-child(3)").prepend("<span>점검일자</span>");
    $(".const_info .insp_result .result_item > li:nth-child(4)").prepend("<span>점검종류</span>");
    $(".const_info .insp_result .result_item > li:nth-child(5)").prepend("<span>점검내역</span>");
    $(".const_info .insp_result .result_item > li:nth-child(5) ul").addClass("bScale_list");
    $(".const_info .insp_result .bScale_list > li:nth-child(1)").prepend("<strong>적합</strong>");
    $(".const_info .insp_result .bScale_list > li:nth-child(2)").prepend("<strong>부적합</strong>");
    $(".const_info .insp_result .bScale_list > li:nth-child(3)").prepend("<strong>미조치</strong>");
    $(".const_info .insp_result .result_item > li:nth-child(6)").prepend("<span>점검자</span>");
    $(".const_info .insp_result .result_item > li:nth-child(7)").prepend("<span>관리출처</span>");
    // 건축물 관리 페이지
    $(".bldg_mgt .result_item > li:nth-child(3)").prepend("<span>유형</span>");
    $(".bldg_mgt .result_item > li:nth-child(4)").prepend("<span>등급</span>");
    $(".bldg_mgt .result_item > li:nth-child(6)").prepend("<span>점검예정일</span>");
    $(".bldg_mgt .result_item > li:nth-child(7)").prepend("<span>전회점검일</span>");
    $(".bldg_mgt .result_item > li:nth-child(8)").prepend("<span>관리출처</span>");
    // 건축물 정보보기 페이지
    $(".bldg_info .insp_result .result_item > li:nth-child(2)").prepend("<span>점검일자</span>");
    $(".bldg_info .insp_result .result_item > li:nth-child(3)").prepend("<span>점검종류</span>");
    $(".bldg_info .insp_result .result_item > li:nth-child(4)").prepend("<span>점검내역</span>");
    $(".bldg_info .insp_result .result_item > li:nth-child(4) ul").addClass("bScale_list");
    $(".bldg_info .insp_result .bScale_list > li:nth-child(1)").prepend("<strong>적합</strong>");
    $(".bldg_info .insp_result .bScale_list > li:nth-child(2)").prepend("<strong>부적합</strong>");
    $(".bldg_info .insp_result .bScale_list > li:nth-child(3)").prepend("<strong>미조치</strong>");
    $(".bldg_info .insp_result .result_item > li:nth-child(5)").prepend("<span>점검자</span>");
    $(".bldg_info .insp_result .result_item > li:nth-child(6)").prepend("<span>관리출처</span>");
    // 사고정보 페이지
    $(".acdnt_info .result_item > li:nth-child(1)").prepend("<span>#</span>");
    $(".acdnt_info .result_item > li:nth-child(4)").prepend("<span>등급</span>");
    $(".acdnt_info .result_item > li:nth-child(5)").prepend("<span>점검예정일</span>");
    $(".acdnt_info .result_item > li:nth-child(6)").prepend("<span>전회점검일</span>");
    $(".acdnt_info .result_item > li:nth-child(7)").prepend("<span>관리출처</span>");
    $(".acdnt_info .result_item > li:nth-child(8)").prepend("<span>관리출처</span>");
  }
});

// 모달창
$(function () {
  // 상황전파
  $(".situSend_btn, .situ_send_m").click(function () {
    if ($(window).width() <= 1024) {
      $(".send_btn_m").fadeOut(300);
    }
    $(".situ_modal").fadeIn(300);
    $("body").css("overflow", "hidden");
    $(".situ_modal .close_btn").click(function () {
      if ($(window).width() <= 1024) {
        $(".send_btn_m").fadeIn(300);
      }
      $(".situ_modal").fadeOut(300);
      $("body").css("overflow", "visible");
    });
    $(".situ_modal .modal_submit button:first-child").click(function () {
      if ($(window).width() <= 1024) {
        $(".send_btn_m").fadeIn(300);
      }
      $(".situ_modal").fadeOut(300);
      $("body").css("overflow", "visible");
    });
  });
  // SMS 보내기
  $(".smsSend_btn, .sms_send_m").click(function () {
    if ($(window).width() <= 1024) {
      $(".send_btn_m").fadeOut(300);
    }
    $(".sms_modal").fadeIn(300);
    $("body").css("overflow", "hidden");
    $(".sms_modal .close_btn").click(function () {
      if ($(window).width() <= 1024) {
        $(".send_btn_m").fadeIn(300);
      }
      $(".sms_modal").fadeOut(300);
      $("body").css("overflow", "visible");
    });
    $(".sms_modal .modal_submit button:first-child").click(function () {
      if ($(window).width() <= 1024) {
        $(".send_btn_m").fadeIn(300);
      }
      $(".sms_modal").fadeOut(300);
      $("body").css("overflow", "visible");
    });
    $(".sms_modal .tab_index > li").click(function () {
      var tab_id = $(this).attr('data-tab');
      $(".sms_modal .tab_index > li").removeClass("active");
      $(".sms_modal .tab_content").removeClass("active");
      $(this).addClass("active");
      $("#" + tab_id).addClass('active');
    });
    // 템플릿 추가 (SMS)
    $(".addTemplate_btn").click(function () {
      if ($(window).width() <= 1024) {
        $(".subModal_bg").fadeIn(300);
      }
      $(".addTemplate").fadeIn(300);
      $(".addTemplate .close_box").click(function () {
        $(".subModal_bg").fadeOut(300);
        $(".addTemplate").fadeOut(300);
      });
      $(".addTemplate .subModal_submit button:first-child").click(function () {
        $(".subModal_bg").fadeOut(300);
        $(".addTemplate").fadeOut(300);
      });
    });
    // 그룹편집 (SMS)
    $(".groupEdit_btn").click(function () {
      if ($(window).width() <= 1024) {
        $(".subModal_bg").fadeIn(300);
      }
      $(".groupEdit").fadeIn(300);
      $(".groupEdit .close_box").click(function () {
        $(".subModal_bg").fadeOut(300);
        $(".groupEdit").fadeOut(300);
      });
      $(".groupEdit .subModal_submit button:first-child").click(function () {
        $(".subModal_bg").fadeOut(300);
        $(".groupEdit").fadeOut(300);
      });
    });
  });
  // 연락처 선택 (SMS)
  $(".contactPick_btn").click(function () {
    if ($(window).width() <= 1024) {
      $(".subModal_bg").fadeIn(300);
    }
    $(".contactPick").fadeIn(300);
    $(".contactPick .close_box").click(function () {
      $(".subModal_bg").fadeOut(300);
      $(".contactPick").fadeOut(300);
    });
    $(".contactPick .subModal_submit button:first-child").click(function () {
      $(".subModal_bg").fadeOut(300);
      $(".contactPick").fadeOut(300);
    });
  });
  // 내 정보 보기
  $(".myInfo").hide();
  $(".user_name").click(function () {
    if ($(window).width() <= 1024) {
      $(".send_btn_m").fadeOut(300);
    }
    $(".myInfo").fadeIn(300);
    $(".send_btn_m").fadeOut(300);
    $("body").css("overflow", "hidden");
    $(".myInfo .close_btn, .myInfo .info_btn").click(function () {
      $(".myInfo").fadeOut(300);
      if ($(window).width() <= 1024) {
        $(".send_btn_m").fadeIn(300);
      }
      $("body").css("overflow", "visible");
    });
  });
  // 담당업무 설정
  $(".responsibility").hide();
  $(".resp_btn").click(function () {
    $(".responsibility").fadeIn(300);
    $(".send_btn_m").fadeOut(300);
    $("body").css("overflow", "hidden");
    $(".responsibility .close_btn, .responsibility .modal_submit button:first-child").click(function () {
      $(".responsibility").fadeOut(300);
      if ($(window).width() <= 1024) {
        $(".send_btn_m").fadeIn(300);
      }
      $("body").css("overflow", "visible");
    });
  });
  // 그룹관리
  $(".groupMgt_btn").click(function () {
    $(".group_mgt").fadeIn(300);
    $(".send_btn_m").fadeOut(300);
    $("body").css("overflow", "hidden");
    $(".group_mgt .close_btn, .group_mgt .modal_submit button:first-child").click(function () {
      $(".group_mgt").fadeOut(300);
      if ($(window).width() <= 1024) {
        $(".send_btn_m").fadeIn(300);
      }
      $("body").css("overflow", "visible");
    });
    // 삭제 경고팝업 (그룹관리)
    $(".group_mgt .delete_btn").click(function () {
      if ($(window).width() <= 1024) {
        $(".subModal_bg").fadeIn(300);
      }
      $(".group_mgt .delete_pop").fadeIn(300);
      $(".group_mgt .form_wrap").css("overflow", "hidden");
      $(".delete_pop .subModal_submit button").click(function () {
        $(".subModal_bg").fadeOut(300);
        $(".group_mgt .delete_pop").fadeOut(300);
        $(".group_mgt .form_wrap").css("overflow", "scroll");
      });
    });
    if ($(window).width() <= 1024) {
      $(".group_mgt .result_item > li:nth-child(4)").prepend("<p>등록시설물</p>");
    }
  });
  // 공사장 진행사항 수정
  $(".cProgress_btn").click(function () {
    $(".constProgress").fadeIn(300);
    $(".send_btn_m").fadeOut(300);
    $("body").css("overflow", "hidden");
    $(".constProgress .modal_submit button").click(function () {
      $(".constProgress").fadeOut(300);
      if ($(window).width() <= 1024) {
        $(".send_btn_m").fadeIn(300);
      }
      $("body").css("overflow", "visible");
    });
  });
  // 공사관계자 리스트
  $(".constInsider_list .result_item button").click(function () {
    if($(this).text() == "[저장]") {
      $(this).text("[수정]");
      $(this).prev().attr("disabled", "disabled");
    } else {
      $(this).text("[저장]");
      $(this).prev().removeAttr("disabled");
    }
  }); 
  // 공사장 점검 결과 등록
  $(".check_tab .tab_index > li").click(function () {
    var tab_id = $(this).attr('data-tab');
    $(".check_tab .tab_index > li").removeClass("active");
    $(this).addClass("active");
    $(".check_tab .tab_content").removeClass("active");
    $("#" + tab_id).addClass('active');
  });
  $(".cResultEnroll_btn").click(function () {
    $(".constResult_enroll").fadeIn(300);
    $(".send_btn_m").fadeOut(300);
    $("body").css("overflow", "hidden");
    if ($(window).width() <= 1024) {
      $(".constResult_enroll .result_item ul li:nth-child(1)").prepend("<span>적합</span>");
      $(".constResult_enroll .result_item ul li:nth-child(2)").prepend("<span>부적합</span>");
      $(".constResult_enroll .result_item ul li:nth-child(3)").prepend("<span>해당없음</span>");
      $(".constResult_enroll .result_item > li:last-child").append("<textarea>내용입니다.</textarea>");
    }
    $(".constResult_enroll .check_list > li:nth-child(2)").click(function () {
      if($(this).children("input[type='radio']").is(":checked")) {
        $(".pointOut").fadeIn(200);
        $(".pointOut .close_box, .subModal_submit button:first-child").click(function () {
          $(".pointOut").fadeOut(200);
        });
      }
    });
  });
  $(".cResult_menu > li > button + *").hide();
  $(".cResult_menu > li > button").click(function () {
    $(this).next().slideToggle(300);
    $(this).toggleClass("active");
  });
  $(".constResult_enroll .close_btn, .constResult_enroll .modal_submit button:first-child").click(function () {
    $(".modal_bg .cResult_menu > li > button").next().slideUp();
    $(".modal_bg .cResult_menu > li > button").removeClass("active");
    $(".constResult_enroll.modal_bg").fadeOut(300);
    if ($(window).width() <= 1024) {
      $(".send_btn_m").fadeIn(300);
    }
    $("body").css("overflow", "visible");
  });
  // 공사장 점검 계획 등록
  $(".cPlanEnroll_btn").click(function () {
    $(".constPlan_enroll").fadeIn(300);
    $(".send_btn_m").fadeOut(300);
    $("body").css("overflow", "hidden");
    $(".constPlan_enroll .close_btn, .constPlan_enroll .modal_submit button:first-child").click(function () {
      $(".constPlan_enroll").fadeOut(300);
      if ($(window).width() <= 1024) {
        $(".send_btn_m").fadeIn(300);
      }
      $("body").css("overflow", "visible");
    });
    // 자문단 선택
    $(".constPlan_enroll .advisoryGroup_btn").click(function () {
      if ($(window).width() <= 1024) {
        $(".subModal_bg").fadeIn(300);
      }
      $(".advisoryGroup").fadeIn(300);
      $(".advisoryGroup .close_box").click(function () {
        $(".advisoryGroup").fadeOut(300);
        $(".subModal_bg").fadeOut(300);
      });
      $(".advisoryGroup .subModal_submit button:first-child").click(function () {
        $(".advisoryGroup").fadeOut(300);
        $(".subModal_bg").fadeOut(300);
      });
      if ($(window).width() <= 540 ) {
        $(".aGroup_list .result_item > li:nth-child(2)").prepend("<span>분야</span>");
        $(".aGroup_list .result_item > li:nth-child(3)").prepend("<span>부서</span>");
        $(".aGroup_list .result_item > li:nth-child(4)").prepend("<span>성명</span>");
        $(".aGroup_list .result_item > li:nth-child(5)").prepend("<span>중복여부</span>");
      }
    });
  });
  // 사고등록
  $(".acdntEnroll_btn").click(function () {
    $(".acdnt_enroll").fadeIn(200);
    $(".send_btn_m").fadeOut(300);
    $("body").css("overflow", "hidden");
    $(".acdnt_enroll .close_btn, .acdnt_enroll .modal_submit button:first-child").click(function () {
      $(".acdnt_enroll").fadeOut(300);
      $("body").css("overflow", "visible");
      if ($(window).width() <= 1024) {
        $(".send_btn_m").fadeIn(300);
      }
    });
  });
  // 자문단 점검이력 등록
  $(".aGroupEnroll_btn").click(function () {
    $(".aGroup_enroll").fadeIn(200);
    $(".send_btn_m").fadeOut(300);
    $("body").css("overflow", "hidden");
    $(".aGroup_enroll .close_btn, .aGroup_enroll .modal_submit button:first-child").click(function () {
      $(".aGroup_enroll").fadeOut(300);
      $("body").css("overflow", "visible");
      if ($(window).width() <= 1024) {
        $(".send_btn_m").fadeIn(300);
      }
    });
  });
});
// 사전작업 허가 신청
$(function () {
  $(".preworkPermit_btn").click(function () {
    $(".prework_permit").fadeIn(300);
    $("body").css("overflow", "hidden");
    $(".prework_permit .close_btn, .prework_permit .modal_submit button:first-child").click(function () {
      $(".prework_permit").fadeOut(300);
      if ($(window).width() <= 1024) {
        $(".send_btn_m").fadeIn(300);
      }
      $("body").css("overflow", "visible");
    });
  });
  $(".prework_permit .modal_submit button:last-child").click(function () {
    alert("다른 사용자가 이미 신청하였습니다.");
  });
});
// $(function () {
//   $(".constResult_enroll .close_btn, .constResult_enroll .modal_submit button:first-child").click(function () {
//     $(".constResult_enroll").fadeOut(300);
//     $(".cResult_menu > li > button.active").next().slideUp();
//     $(".cResult_menu > li > button.active").removeClass("active");
//     if ($(window).width() <= 1024) {
//       $(".send_btn_m").fadeIn(300);
//     }
//     $("body").css("overflow", "visible");
//   });
// });

// 파일 업로드
$(function () { 
  let fileTarget = $('input[type="file"]');
  fileTarget.on('change', function () {
    let fileName = $(this).val().split('\\');
    $(this).next('.upload_name').val(fileName[fileName.length-1]);
  });
});

// 지도 검색창
$(function () {
  $(".map_page .mSearch_on").click(function () {
    $('.map_page .mSearch_on').toggleClass("active");
    $('.map_page aside').toggleClass("active");
    $('.map_page .map_view').toggleClass("active");
  });
  $(".map_page .mAdress_sub").hide();
  $(".mAdress_btn").click(function () {
    $(this).toggleClass("active");
    $(".map_page .mAdress_sub").slideToggle(200);
  });
  $(".map_page .mountain_check").click(function () {
    // if ($(this).children("input[type='checkbox']").is(":checked")) {
    //   $(this).addClass("active");
    // } else {
    //   $(this).removeClass("active");
    // }
  });
  $(".map_page .mFilter_btn").click(function () {
    $(".mFilter").fadeToggle(300);
  });
  $(".mFilter .close_btn").click(function () {
    $(".mFilter").fadeToggle(300);
  });
  $(".mMode_btn button").click(function () {
    $(".mMode_btn button").removeClass("active");
    $(this).addClass("active");
  });
  $(".map_page .loc_shift").click(function () {
    $(".map_page .loc_shift").removeClass("active");
    $(this).addClass("active");
  });
  $(".map_page .mcBtn").click(function () {
    $(this).toggleClass("active");
  });
  $(".map_page .mSearch_fold").hide();
  $(".map_page .mSearch_add").click(function () {
    $(".map_page .mSearch_wrap").slideToggle();
    $(".map_page .mSearch_fold").fadeToggle(100);
  });
});

// // 모달 (임시)
// let modal = document.querySelectorAll(".modal_bg");
// let modalOn = document.querySelectorAll(".modal_on");
// let modalOff = document.querySelectorAll(".modal_off");
// let modalCancel = document.querySelectorAll(".modal_cancel");

// modalOn.addEventListener("click", function () {
//   modal.classList.remove("hide");
//   modal.classList.add("show");
// });
// modalOff.addEventListener("click", function () {
//   let target = this.closest(".modal_bg");
//   target.classList.add("hide");
//   setTimeout(function () {
//     target.classList.remove("show");
//   }, 280);
// });

// 체크박스
$(function () {
  $(".check_list > li").click(function () {
    if($(this).children("input[type='checkbox']").is(":checked")) {
      $(this).children(".checking").addClass("active");
    } else {
      $(this).children(".checking").removeClass("active");
    }
    if($(this).children("input[type='radio']").is(":checked")) {
      $(this).siblings().children(".checking").removeClass("active");
      $(this).children(".checking").addClass("active");
    }
    // if($(".constResult_enroll .check_list > li:nth-child(1) input[type='radio']").is(":checked")) {
    //   $(".pointOut").fadeIn(200);
    //   $(".pointOut .close_box, .subModal_submit button:first-child").click(function () {
    //     $(".pointOut").fadeOut(200);
    //   });
    // }
    if($("#materialDamage").is(":checked")) {
      $(".acdnt_enroll tr:nth-child(4) input[type='text']").val("");
      $(".acdnt_enroll tr:nth-child(4) input[type='text']").attr("disabled", true);
    } else {
      $(".acdnt_enroll tr:nth-child(4) input[type='text']").removeAttr("disabled", false);
    }
  });
  $(".damage_option > li").click(function () {
    if ($(this).children("input[type='checkbox']").is(":checked")) {
      $(this).addClass("active");
      $(this).children(".checking").addClass("active");
    } else {
      $(this).removeClass("active");
      $(this).children(".checking").removeClass("active");
    }
  });
});

// 실시간 모니터링
$(document).ready(function () {
  // 헤더 (CCTV)
  function getTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = ('00' + (now.getMonth()+1)).slice(-2);
    const date = ('00' + now.getDate()).slice(-2);
    const time = now.toLocaleTimeString();

    $('.cctv_page .date').text(year + '-' + month + '-' + date);
    $('.cctv_page .time').text(time);
  }

  function timeInit() {
    setInterval(getTime, 1000);
  }

  timeInit();
  
  // cctv 메뉴
  $('.cctv_list li').on('click', function () {
    $('.cctv_list li').removeClass('active');
    $(this).addClass('active');
  });
});

// 점검 현황
$(function () {
  // $(".check_status .result_container, .check_status .safechk_occu").hide();
  $(".check_status .result_container:first-child .result_item > li").click(function () {
    $(".check_status .result_container:first-child").css("width", "45%");
    $(".check_status .result_container:nth-child(2)").delay(1000).fadeIn(1000);
  });
  $(".check_status .result_container:nth-child(2) .result_item > li").click(function () {
    $(".check_status .result_container:nth-child(4)").fadeIn(1000);
    $(".check_status .safechk_occu").fadeIn(1000);
  });
});

// 점검 카드
$(function () {
  $(".checkCard .menu").hide();
  $(".checkCard .menu ul").hide();
  $(".checkCard .menu_btn button").click(function () {
    $(this).toggleClass("on");
    if($(this).hasClass("on")) {
      $(this).text("x").css("color", "#fff");
      $(this).parent().next(".menu").fadeIn(200);
      $(this).parent().next(".menu").children("ul").delay(100).slideDown(500);
    } else {
      $(this).text("⋮").css("color", "#b0b0b0");
      $(this).parent().next(".menu").delay(200).fadeOut(200);
      $(this).parent().next(".menu").children("ul").slideUp(300);
    }
  });
});
$(function () {
  $(".checkCard .menu .addCheck_btn").click(function () {
    $(this).toggleClass("on");
    if($(this).hasClass("on")) {
      $(this).text("OFF");
      $(this).addClass("active");
    } else {
      $(this).text("ON");
      $(this).removeClass("active");
    }
  });
});
$(function () {
  $(".checkCard_wrap .tab_index li").click(function () {
    $(".checkCard_wrap .tab_index li").removeClass("active");
    $(this).addClass("active");
  });
});
$(function () {
  $(".addCheck button").click(function () {
    $(".addCheck button").removeClass("active");
    $(this).addClass("active");
  });
});
$(function () {
  $(".checkCard .img_wrap, .addCard_btn button").click(function () {
    location.href = "checkCard_enroll.html";
  });
});
// 자문단 정보
$(function () {
  $(".aGroup_info.admin .cInfo_top button").click(function () {
    $(this).text($(this).text() == "수정완료" ? "정보수정" : "수정완료");
    $(this).toggleClass("active");
    $(this).text() == "수정완료" ? 
      $(".aGroup_info.admin .cInfo_list input, .aGroup_info .cInfo_list textarea").removeAttr("disabled") :
      $(".aGroup_info.admin .cInfo_list input, .aGroup_info .cInfo_list textarea").attr("disabled", "disabled");
  });
});