$(function(){
  // 페이지별 메인메뉴, 활성화되는 서브메뉴 제어
  const body = $("body");
  // const subH2 = $(".sub-hd-lnb h2");
  const lnbBtn = $(".rf-lnb-btn");
  const subBg = $(".sub-hd-bg");
  let lnb = $(".rf-lnb-list");
  let pageTitle = "Company,Capability,Product,Sustainability,Career";
  pageTitle = pageTitle.split(",");
  let bodyNum, mainNum, subNum;
  bodyNum = body.attr("class");
  bodyNum = bodyNum.split(" ");
  mainNum = bodyNum[0].slice(3,4);
  subNum = bodyNum[0].slice(5,6);
  let subEl = lnb.eq(mainNum).children().eq(subNum);
  let lnbDepth1 = $(".rockfish-lnb").children().eq(mainNum);
  // 페이지 타이틀 입력
  //subH2.text(pageTitle[mainNum]);
  // LNB 화면에 표시(해상도에 따라)
  if(body.hasClass("mo")) { // 모바일이라면
    // lnb.eq(mainNum).css("display", "none");
    lnb.eq(mainNum).css("display", "flex");
  } else {
    lnb.eq(mainNum).css("display", "flex");
  }

  // 활성화되는 서브메뉴
  lnbDepth1.addClass("active");
  subEl.addClass("active");
  
  // 모바일 LNB Label 입력
  lnbBtn.text(subEl.text());
  
  // LNB 리스트 제어(해상도 리사이즈)
  $(window).resize(function(){
    if(body.hasClass("mo")) { // 모바일이라면
      // lnb.eq(mainNum).css("display", "none");
    lnb.eq(mainNum).css("display", "flex");
    } else {
      lnb.eq(mainNum).css("display", "flex");
    }
  });
  
  // LNB 제어(mo에서 버튼 클릭하면 하위리스트 열리기) 
  lnbBtn.click(function(){
    lnb.eq(mainNum).toggle();
  });

  // 서브배경이미지 설정
  subBg.addClass(`bg${mainNum}-${subNum}`);

});

// 3-1. CARD LIKE main.js 92 row 중복
function cardLike() {
  $(".card-like").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

    const icon = $(this).find("i");
    $(this).toggleClass("active");

    icon.toggleClass("fa-solid fa-regular");
  });
}

document.addEventListener('DOMContentLoaded', () => {
  cardLike();
});
