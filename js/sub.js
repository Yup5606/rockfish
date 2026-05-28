$(function () {
  const body = $("body");
  const subH2 = $(".sub-hd-lnb h2");
  const subBg = $(".sub-hd-bg");

  const bodyClass = body.attr("class").split(" ")[0];
  const mainNum = bodyClass.slice(3, 4);
  const subNum = bodyClass.slice(5, 6);

  const lnbDepth1 = $(".rockfish-lnb").children().eq(mainNum);
  const subEl = lnbDepth1.children().eq(0);
  const lnbDepth2 = lnbDepth1.children().eq(1).children().eq(subNum);

  // 페이지 타이틀
  subH2.text(subEl.text());

  // 현재 메뉴 활성화
  lnbDepth1.addClass("rf-lnb-list active");
  subEl.addClass("active");
  lnbDepth2.addClass("active");

  // 서브 비주얼 배경
  subBg.addClass(`bg${mainNum}-${subNum}`);

  // LNB active
  $(".rf-lnb-depth2 li a").on("click", function () {
    $(".rf-lnb-depth2 li").removeClass("active");
    $(this).parent().addClass("active");
  });

  // 하트
  function cardLike() {
    $(".card-like").off("click").on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      $(this).toggleClass("active");

      const icon = $(this).find("i");

      icon.toggleClass("fa-regular");
      icon.toggleClass("fa-solid");
    });
  }

  cardLike();
});