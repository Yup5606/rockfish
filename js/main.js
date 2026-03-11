function checkBrand() {
  const brand = $('.main-section-brand');
  if (brand.length === 0) return; // 섹션이 없으면 종료

  const viewportH = $(window).height();
  const scrollTop = $(window).scrollTop();
  const secTop = brand.offset().top;

  // 섹션의 상단이 화면의 2/3 지점에 도달했을 때 실행 (적절한 타이밍)
  const triggerPoint = secTop - (viewportH / 1.5);

  if (scrollTop >= triggerPoint) {
    brand.addClass('active');
  } else {
    // 다시 올라갔을 때 애니메이션을 초기화하고 싶다면 유지, 
    // 한 번만 실행되길 원하면 아래 줄을 지우세요.
    brand.removeClass('active'); 
  }
}

// 스크롤, 로드, 리사이즈 시 실행
$(window).on('scroll load resize', function() {
  checkBrand();
});