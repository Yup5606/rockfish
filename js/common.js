// $(document).ready(function(){}); //원래 문법 / 모든 문서가(도큐먼트) 준비되면(레디) 실행해라(펑션) {어떤걸쓸지}
$(function(){}); // 축약으로 문법 개발 
$(function(){
// 1.변수선언 자주쓰는 것만 var(어디서나 쓸수있는 루트변수) let(변형이 가능하며 주로 사용하는 변수) const(변형하지 않을때 사용하는 변수)
const body = "body";
const speed = 300;
let viewportH, viewportW; 
const gnb = "#rockfish-gnb";
const mainMenu = ".rf-depth1";
const subMenu = ".rf-depth2-wrap";
const btnLang = ".btn-lang";
const langList = ".lang-list";
const moGnb = ".mo-gnb-sitemap";
const moOpen = ".mo-btn-sitemap";
const moClose = ".mo-btn-close";
const smMainMenu = ".mo-rf-depth1 > a";
const smSubMenu = ".mo-rf-depth2";

// 반응형 구현(뷰포트를 반응시킬때 구현시키는 먼저 실행 되어있어야함)
rwd();
$(window).resize(function(){
  rwd();
}); 

// 2. 실행될 스크립트 작성
// GNB 구현 타켓에, 어떤이벤트가, 함수가 선언되면 순서

// ======== 가로풀다운 =========
$(mainMenu).mouseenter(function(){
  $(this).find(subMenu).stop().slideDown(speed);
});
$(mainMenu).mouseleave(function(){
  $(this).find(subMenu).stop().slideUp(speed);
});

  // ======== 메가메뉴 =========
  // $(gnb).mouseenter(function(){
  //   $(this).find(subMeun).slideDown(300);
  //   $(this).addClass("sub-on");
  // });
  // $(gnb).mouseleave(function(){
  //   $(this).find(subMeun).slideUp(300);
  //   $(this).removeClass("sub-on");
  // });

// ======== 언어선택 구현 =========
$(".lang-wrap").mouseenter(function(){
  $(this).find(langList).stop().slideDown(speed);
});

$(".lang-wrap").mouseleave(function(){
  $(this).find(langList).stop().slideUp(speed);
});


// ======== 모바일 GNB 닫기 =========
$(moOpen).click(function(){
  $(body).addClass("fixed");
  $(moGnb).addClass("open");
  lenis.stop();
});

$(moClose).click(function(){
  $(body).removeClass("fixed");
  $(moGnb).removeClass("open");
  lenis.start();
});


// 모바일 메뉴 펼치기 접기
// $(smMainMenu).click(function(e){
//   if($(body).hasClass("mo")){ //모바일 해상도로 바디에 클래스가 찍혔을때
//     e.preventDefault(); // <a>의 링크 기능 실행을 막는것 
//     $(this).parent().siblings().find(smSubMenu).stop().slideUp(300);
//     $(this).next().stop().slideToggle(300);
//   }
// });


// 함수 선언 
rwd();
  function rwd(){
    viewportW = window.innerWidth;
    viewportH = window.innerHeight;
    
    if(viewportW < 768) { 
      $(body).removeClass("tb pc").addClass("mo");
    } else if(viewportW >= 768 && viewportW < 1280){
      $(body).removeClass("mo pc").addClass("tb");
    } else { 
      $(body).removeClass("mo tb").addClass("pc");
    }
    // $(smSubMenu),attr("style","")
  }

 // 부드러운 스크롤
  const lenis = new Lenis({
    lerp: 0.05, // < 속도 조절때만 수치 변경
    smoothWheel: true,
    smoothTouch: false // < 기본값
  }
  );
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

   // 임시링크 문서 꼭대기로 이동하는 것 막아주기
  const blankAnchor = $("a[href='#']")
  blankAnchor.click(function(e){
    e.preventDefault();
  });


});