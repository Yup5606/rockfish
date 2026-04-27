// 1. HERO
function heroSlider() {
  const en = document.querySelector('.title-en');
  const ko = document.querySelector('.title-ko');
  const sub = document.querySelector('.hero-sub');
  if (!en || !ko || !sub) return;

  let isPlaying = false;
  let activeVideo = null;

  const reset = () => {
    en.style.opacity = 0;
    ko.style.opacity = 0;
    sub.style.opacity = 0;
  };

  const play = () => {
    reset();
    setTimeout(() => en.style.opacity = 1, 800);
    setTimeout(() => sub.style.opacity = 1, 800);
    setTimeout(() => ko.style.opacity = 1, 1400);

    setTimeout(reset, 4800);
  };

  const getVideo = () => {
    return [...document.querySelectorAll('.hero-video')]
      .find(v => getComputedStyle(v).display !== 'none');
  };

  const bind = () => {
    const video = getVideo();
    if (!video || video === activeVideo) return;

    activeVideo = video;
    isPlaying = false;
    reset();

    video.addEventListener('timeupdate', () => {
      if (video.currentTime < 0.3 && !isPlaying) {
        isPlaying = true;
        play();
        setTimeout(() => isPlaying = false, 6000);
      }
    });
  };

  bind();

  window.addEventListener('resize', () => {
    activeVideo = null;
    isPlaying = false;
    reset();
    bind();
  });
}


// 2. BRAND
function checkBrand() {
  const brand = $('.main-section-brand');
  if (!brand.length) return;

  const trigger = brand.offset().top - ($(window).height() / 5);

  if ($(window).scrollTop() >= trigger) {
    brand.addClass('active');
  } else {
    brand.removeClass('active');
  }
}


// 3. COLLECTION
function collectionTab() {
  const items = $(".item-name li");
  const images = $(".item-img li");
  const descs = $(".desc-box");
  if (!items.length) return;

  items.on("click", function(e) {
    e.preventDefault();
    const i = $(this).index();

    items.removeClass("active").eq(i).addClass("active");
    images.removeClass("active").eq(i).addClass("active");
    descs.removeClass("active").eq(i).addClass("active");
  });
}


// 3-1. CARD LIKE
function cardLike() {
  $(".card-like").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

    const icon = $(this).find("i");
    $(this).toggleClass("active");

    icon.toggleClass("fa-solid fa-regular");
  });
}


// 4. RECOMMEND
function recommendSlider() {
  const section = $('.main-section-recommend');
  if (!section.length) return;

  const slides = section.find('.recommend-slide');
  slides.removeClass('is-active').eq(0).addClass('is-active');

  const update = (i) => {
    slides.removeClass('is-active')
      .eq(i).addClass('is-active')
      .toggleClass('is-first', i === 0)
      .toggleClass('is-last', i === slides.length - 1);
  };

  slides.each(function(i) {
    const slide = $(this);

    slide.find('.arrow-next').on('click', e => {
      e.preventDefault();
      update(Math.min(i + 1, slides.length - 1));
    });

    slide.find('.arrow-prev').on('click', e => {
      e.preventDefault();
      update(Math.max(i - 1, 0));
    });

    const pins = slide.find('.pin-btn');
    const infos = slide.find('.info-content');

    pins.on('click', function() {
      const idx = pins.index(this);
      pins.removeClass('active').eq(idx).addClass('active');
      infos.removeClass('active').eq(idx).addClass('active');
    });
  });
}


// 5. STORE
function storeTab() {
  const swiperEl = document.querySelector('.store-swiper');
  if (!swiperEl) return;

  const items = document.querySelectorAll('.store-list li');

  const storeSwiper = new Swiper(".store-swiper", {
    effect: "cards",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: false,
    speed: 600,

    slideToClickedSlide: true,
    resistanceRatio: 0.5,
    
    cardsEffect: {
      perSlideOffset: 2,
      perSlideRotate: 3,
      slideShadows: false
    }
  });

  // li 클릭 → 슬라이드 이동 + active
  items.forEach((el, i) => {
    el.addEventListener('click', () => {
      storeSwiper.slideToLoop(i);

      items.forEach(li => li.classList.remove('active'));
      items[i].classList.add('active');
    });
  });

  // 슬라이드 변경 → li active 동기화
  storeSwiper.on('slideChange', () => {
    const index = storeSwiper.realIndex; 

    items.forEach(li => li.classList.remove('active'));
    items[index].classList.add('active');
  });
}

// 6. real moments
function realMoments() {
  const track = document.querySelector('.realmoments-track');
  if (!track) return;

  const imgCount = 27;
  let current = 1;

  const getImg = () => {
    const src = `./images/insta/insta${current}.Webp`;
    current++;
    if (current > imgCount) current = 1;
    return src;
  };

  const createSet = () => {
    return `
      <div class="realmoments-set">
        <div class="realmoment-item medium" style="background-image:url(${getImg()})"></div>

        <div class="item-group">
          <div class="realmoment-item small" style="background-image:url(${getImg()})"></div>
          <div class="realmoment-item large" style="background-image:url(${getImg()})"></div>
        </div>

        <div class="item-group">
          <div class="realmoment-item large" style="background-image:url(${getImg()})"></div>
          <div class="realmoment-item small" style="background-image:url(${getImg()})"></div>
        </div>

        <div class="realmoment-item medium" style="background-image:url(${getImg()})"></div>

        <div class="item-group">
          <div class="realmoment-item small" style="background-image:url(${getImg()})"></div>
          <div class="realmoment-item large" style="background-image:url(${getImg()})"></div>
        </div>
      </div>
    `;
  };

  let html = '';

  // 세트 여러 개 생성
  for (let i = 0; i < 5; i++) {
    html += createSet();
  }

  // 🔥 무한 스크롤 핵심
  track.innerHTML = html + html;
}


document.addEventListener('DOMContentLoaded', () => {
  heroSlider();
  checkBrand();
  collectionTab();
  cardLike();
  recommendSlider();
  storeTab();
  realMoments();
});

$(window).on('scroll', checkBrand);