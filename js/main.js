function checkBrand() {
  const brand = $('.main-section-brand');
  if (window.innerWidth >= 1280) {
    brand.removeClass('active');
    return;  }
  const viewportH = $(window).height();
  const scrollTop = $(window).scrollTop();

  // 섹션 하단 위치 - 뷰포트 높이 = 화면에 섹션이 완전히 들어왔을 때
  const dist = brand.offset().top + brand.outerHeight() - viewportH;

  if (scrollTop >= dist) {
    brand.addClass('active');
  } else {
    brand.removeClass('active');
  }
}

$(window).on('scroll load resize', checkBrand);