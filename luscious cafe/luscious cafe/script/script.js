/* 메뉴바 */
$(document).ready(function () {
  $(".lusciouscafe__nav li").mouseover(function () {
    $(".sub").stop().slideDown();
  });
  $(".lusciouscafe__nav li").mouseout(function () {
    $(".sub").stop().slideUp();
  });
});

/* 슬라이드 이미지 */
$(document).ready(function () {
  setInterval(function () {
    $(".mainimg").delay("2300");
    $(".mainimg").animate({ marginLeft: "-1200px" }, "700");
    $(".mainimg").delay("2300");
    $(".mainimg").animate({ marginLeft: "-2400px" }, "700");
    $(".mainimg").delay("2300");
    $(".mainimg").animate({ marginLeft: "0px" }, "700");
  });
});

/* tab */
$(document).ready(function () {
  $(".gallery-button").click(function () {
    $(".gallery").show();
  });
  $(".notice-button").click(function () {
    $(".gallery").hide();
  });
  $(".notice-button").click(function () {
    $(".notice").show();
  });
  $(".gallery-button").click(function () {
    $(".notice").hide();
  });
});

/* pop */
$(document).ready(function () {
  $(".first").click(function () {
    $("#modal").show();
  });
  $("#modal button").click(function () {
    $("#modal").hide();
  });
});
