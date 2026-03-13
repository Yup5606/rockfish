function checkBrand() {
  const brand = $('.main-section-brand');
  if (brand.length === 0) return; // 섹션이 없으면 종료

  const viewportH = $(window).height();
  const scrollTop = $(window).scrollTop();
  const secTop = brand.offset().top;

  // 섹션의 상단이 화면의 2/3 지점에 도달했을 때 실행 (적절한 타이밍)
  const triggerPoint = secTop - (viewportH / 5);

  if (scrollTop >= triggerPoint) {
    brand.addClass('active');
  } else {
    brand.removeClass('active'); 
  }
}

// 스크롤, 로드, 리사이즈 시 실행
$(window).on('scroll load resize', function() {
  checkBrand();
});


// 3번 페이지

// 변수
const mainProductList = $(".main-product-list > li");

// 현재페이지 / 전체페이지


// 화면 사이즈가 조정될 때마다 제품 좌표 리셋


// 제품리스트 클릭할 때 실행
mainProductList.click(function(){
  $(this).siblings().removeClass("active");
  $(this).addClass("active");
}); 



// 선택한 제품 슬라이드 함수


// 제품 슬라이드 영역에서 마우스 커서 바꾸기