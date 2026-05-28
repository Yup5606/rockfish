$(function () {
  const collectionList = $(".collection-card-list");
  const newList = $(".new-card-list");
  const pageList = $(".list-paging");

  const products = [
    {
      name: "BELLA QUILTED MARYJANES - LAVENDER",
      image: "images/26sscollection/26fw-1.webp",
      alt: "벨라 퀼티드 메리제인 라벤더",
      price: "₩148,000"
    },
    {
      name: "BELLA CROSS FLATS(PEBBLE SOLE) - BROWN",
      image: "images/26sscollection/26fw-2.webp",
      alt: "벨라 크로스 밴딩 플랫 브라운",
      price: "₩102,000"
    },
    {
      name: "SQUARE TOE TWO STRAP MARYJANES(4CM) - PINK",
      image: "images/26sscollection/26fw-3.webp",
      alt: "스퀘어 토 투 스트랩 메리제인 핑크",
      price: "₩148,000"
    },
    {
      name: "FLATFORM LACEUP RAIN BOOTS MIDDLE - CREAM",
      image: "images/26sscollection/26ss-4.webp",
      alt: "플랫폼 레이스업 레인부츠 크림",
      price: "₩148,000"
    },
    {
      name: "GLAIR STRAPPY SANDALS - SILVER",
      image: "images/26sscollection/26ss-5.webp",
      alt: "글레어 스트래피 샌들 실버",
      price: "₩148,000"
    }
  ];

  const newItems = Array.from({ length: 30 }, (_, index) => {
    const item = products[index % products.length];

    return {
      ...item,
      image: `images/sub/new/new${index + 1}.webp`
    };
  });

  let currentPage = 1;

  // 카드 생성
  const createCard = (item) => `
    <li class="card-item">
      <div class="card-inner">
        <div class="card-img">
          <img src="${item.image}" alt="${item.alt}">
        </div>

        <div class="card-info">
          <p class="card-name">${item.name}</p>
          <p class="card-price">${item.price}</p>
        </div>

        <button class="card-like" type="button">
          <i class="fa-regular fa-heart"></i>
        </button>
      </div>
    </li>
  `;

  // 페이지당 개수
  const getItemPerPage = () => {
    return window.innerWidth < 768 ? 6 : 12;
  };

  // 베스트 상품
  const renderCollectionItems = () => {
    collectionList.html(products.map(createCard).join(""));
  };

  // NEW 상품
  const renderNewItems = () => {
    const itemPerPage = getItemPerPage();

    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    const currentItems = newItems.slice(startIndex, endIndex);

    newList.html(currentItems.map(createCard).join(""));
  };

  // 페이지네이션
  const renderPagination = () => {
    const itemPerPage = getItemPerPage();

    const totalPage = Math.ceil(newItems.length / itemPerPage);

    let html = `
      <li>
        <a href="#" class="page-prev">prev</a>
      </li>
    `;

    for (let i = 1; i <= totalPage; i++) {
      html += `
        <li class="${i === currentPage ? "active" : ""}">
          <a href="#" class="page-num">${i}</a>
        </li>
      `;
    }

    html += `
      <li>
        <a href="#" class="page-next">next</a>
      </li>
    `;

    pageList.html(html);
  };

  // 렌더
  const render = () => {
    renderNewItems();
    renderPagination();
  };

  // 초기실행
  renderCollectionItems();
  render();

  // 페이지 이동
  pageList.on("click", "a", function (e) {
    e.preventDefault();

    const totalPage = Math.ceil(
      newItems.length / getItemPerPage()
    );

    if ($(this).hasClass("page-prev")) {
      currentPage--;

      if (currentPage < 1) {
        currentPage = 1;
      }

    } else if ($(this).hasClass("page-next")) {
      currentPage++;

      if (currentPage > totalPage) {
        currentPage = totalPage;
      }

    } else {
      currentPage = Number($(this).text());
    }

    render();

    window.scrollTo({
      top: $(".new-item-sec").offset().top - 120,
      behavior: "smooth"
    });
  });

  // 리사이즈
  $(window).on("resize", function () {
    currentPage = 1;
    render();
  });

  // 하트
  $(document).on("click", ".card-like", function (e) {
    e.preventDefault();
    e.stopPropagation();

    $(this).toggleClass("active");

    const icon = $(this).find("i");

    icon.toggleClass("fa-regular fa-solid");
  });
});