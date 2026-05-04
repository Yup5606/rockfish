$(function(){
  console.log("new.js");
  const colleectionList = $(".collection-card-list");
  const newList = $(".new-card-list");
  const pageList = $(".list-paging");
  //객체 배열
  const collectionItems = [
      { name: "BELLA QUILTED MARYJANES - LAVENDER"
        , image: "images/26sscollection/26fw-1.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "BELLA CROSS BANDING FLATS(PEBBLE SOLE) - BROWN"
        , image: "images/26sscollection/26fw-2.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "SQUARE TOE TWO STRAP MARYJANES(4CM) - PINK"
        , image: "images/26sscollection/26fw-3.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "FLATFORM LACEUP RAIN BOOTS MIDDLE - CREAMR"
        , image: "images/26sscollection/26ss-4.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "GLAIR STRAPPY SANDALS - SILVER"
        , image: "images/26sscollection/26ss-5.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"}
  ]
  const newItems = [
      { name: "BELLA QUILTED MARYJANES - LAVENDER"
        , image: "images/26sscollection/26fw-1.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "BELLA CROSS BANDING FLATS(PEBBLE SOLE) - BROWN"
        , image: "images/26sscollection/26fw-2.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "SQUARE TOE TWO STRAP MARYJANES(4CM) - PINK"
        , image: "images/26sscollection/26fw-3.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "FLATFORM LACEUP RAIN BOOTS MIDDLE - CREAMR"
        , image: "images/26sscollection/26ss-4.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "GLAIR STRAPPY SANDALS - SILVER"
        , image: "images/26sscollection/26ss-5.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "BELLA QUILTED MARYJANES - LAVENDER"
        , image: "images/26sscollection/26fw-1.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "BELLA CROSS BANDING FLATS(PEBBLE SOLE) - BROWN"
        , image: "images/26sscollection/26fw-2.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "SQUARE TOE TWO STRAP MARYJANES(4CM) - PINK"
        , image: "images/26sscollection/26fw-3.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "FLATFORM LACEUP RAIN BOOTS MIDDLE - CREAMR"
        , image: "images/26sscollection/26ss-4.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "GLAIR STRAPPY SANDALS - SILVER"
        , image: "images/26sscollection/26ss-5.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "BELLA QUILTED MARYJANES - LAVENDER"
        , image: "images/26sscollection/26fw-1.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "BELLA CROSS BANDING FLATS(PEBBLE SOLE) - BROWN"
        , image: "images/26sscollection/26fw-2.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "SQUARE TOE TWO STRAP MARYJANES(4CM) - PINK"
        , image: "images/26sscollection/26fw-3.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "FLATFORM LACEUP RAIN BOOTS MIDDLE - CREAMR"
        , image: "images/26sscollection/26ss-4.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "GLAIR STRAPPY SANDALS - SILVER"
        , image: "images/26sscollection/26ss-5.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "BELLA CROSS BANDING FLATS(PEBBLE SOLE) - BROWN"
        , image: "images/26sscollection/26fw-2.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "SQUARE TOE TWO STRAP MARYJANES(4CM) - PINK"
        , image: "images/26sscollection/26fw-3.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "FLATFORM LACEUP RAIN BOOTS MIDDLE - CREAMR"
        , image: "images/26sscollection/26ss-4.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "GLAIR STRAPPY SANDALS - SILVER"
        , image: "images/26sscollection/26ss-5.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "BELLA QUILTED MARYJANES - LAVENDER"
        , image: "images/26sscollection/26fw-1.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "BELLA CROSS BANDING FLATS(PEBBLE SOLE) - BROWN"
        , image: "images/26sscollection/26fw-2.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "SQUARE TOE TWO STRAP MARYJANES(4CM) - PINK"
        , image: "images/26sscollection/26fw-3.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "FLATFORM LACEUP RAIN BOOTS MIDDLE - CREAMR"
        , image: "images/26sscollection/26ss-4.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "GLAIR STRAPPY SANDALS - SILVER"
        , image: "images/26sscollection/26ss-5.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "BELLA QUILTED MARYJANES - LAVENDER"
        , image: "images/26sscollection/26fw-1.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "BELLA CROSS BANDING FLATS(PEBBLE SOLE) - BROWN"
        , image: "images/26sscollection/26fw-2.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "SQUARE TOE TWO STRAP MARYJANES(4CM) - PINK"
        , image: "images/26sscollection/26fw-3.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "FLATFORM LACEUP RAIN BOOTS MIDDLE - CREAMR"
        , image: "images/26sscollection/26ss-4.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "GLAIR STRAPPY SANDALS - SILVER"
        , image: "images/26sscollection/26ss-5.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "GLAIR STRAPPY SANDALS - SILVER"
        , image: "images/26sscollection/26ss-5.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "BELLA CROSS BANDING FLATS(PEBBLE SOLE) - BROWN"
        , image: "images/26sscollection/26fw-2.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "SQUARE TOE TWO STRAP MARYJANES(4CM) - PINK"
        , image: "images/26sscollection/26fw-3.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "FLATFORM LACEUP RAIN BOOTS MIDDLE - CREAMR"
        , image: "images/26sscollection/26ss-4.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "GLAIR STRAPPY SANDALS - SILVER"
        , image: "images/26sscollection/26ss-5.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "BELLA QUILTED MARYJANES - LAVENDER"
        , image: "images/26sscollection/26fw-1.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "BELLA CROSS BANDING FLATS(PEBBLE SOLE) - BROWN"
        , image: "images/26sscollection/26fw-2.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "SQUARE TOE TWO STRAP MARYJANES(4CM) - PINK"
        , image: "images/26sscollection/26fw-3.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "FLATFORM LACEUP RAIN BOOTS MIDDLE - CREAMR"
        , image: "images/26sscollection/26ss-4.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "GLAIR STRAPPY SANDALS - SILVER"
        , image: "images/26sscollection/26ss-5.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "BELLA QUILTED MARYJANES - LAVENDER"
        , image: "images/26sscollection/26fw-1.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "BELLA CROSS BANDING FLATS(PEBBLE SOLE) - BROWN"
        , image: "images/26sscollection/26fw-2.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "SQUARE TOE TWO STRAP MARYJANES(4CM) - PINK"
        , image: "images/26sscollection/26fw-3.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "FLATFORM LACEUP RAIN BOOTS MIDDLE - CREAMR"
        , image: "images/26sscollection/26ss-4.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "GLAIR STRAPPY SANDALS - SILVER"
        , image: "images/26sscollection/26ss-5.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "BELLA CROSS BANDING FLATS(PEBBLE SOLE) - BROWN"
        , image: "images/26sscollection/26fw-2.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "SQUARE TOE TWO STRAP MARYJANES(4CM) - PINK"
        , image: "images/26sscollection/26fw-3.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "FLATFORM LACEUP RAIN BOOTS MIDDLE - CREAMR"
        , image: "images/26sscollection/26ss-4.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "GLAIR STRAPPY SANDALS - SILVER"
        , image: "images/26sscollection/26ss-5.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "BELLA QUILTED MARYJANES - LAVENDER"
        , image: "images/26sscollection/26fw-1.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "BELLA CROSS BANDING FLATS(PEBBLE SOLE) - BROWN"
        , image: "images/26sscollection/26fw-2.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "SQUARE TOE TWO STRAP MARYJANES(4CM) - PINK"
        , image: "images/26sscollection/26fw-3.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "FLATFORM LACEUP RAIN BOOTS MIDDLE - CREAMR"
        , image: "images/26sscollection/26ss-4.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "GLAIR STRAPPY SANDALS - SILVER"
        , image: "images/26sscollection/26ss-5.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "BELLA QUILTED MARYJANES - LAVENDER"
        , image: "images/26sscollection/26fw-1.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "BELLA CROSS BANDING FLATS(PEBBLE SOLE) - BROWN"
        , image: "images/26sscollection/26fw-2.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "SQUARE TOE TWO STRAP MARYJANES(4CM) - PINK"
        , image: "images/26sscollection/26fw-3.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "FLATFORM LACEUP RAIN BOOTS MIDDLE - CREAMR"
        , image: "images/26sscollection/26ss-4.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "GLAIR STRAPPY SANDALS - SILVER"
        , image: "images/26sscollection/26ss-5.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"},
      { name: "GLAIR STRAPPY SANDALS - SILVER"
        , image: "images/26sscollection/26ss-5.webp"
        , alt: "벨벳메리제인 라벤더"
        , price: "₩148,000"}
  ]
  console.log(newItems.length);

    //li태그 생성하기
    let imgNo=0;
    let imgMaxNo=14;
    newItems.forEach(m => {
      let newItem = `<li class="card-item card-item1">
                  <div class="card-inner">
                    <div class="card-img">
                      <img src="images/sub/new/new${++imgNo}.webp" alt="${m.alt}">
                    </div>
                    <div class="card-info">
                      <p class="card-name">${m.name}</p>
                      <p class="card-price">${m.price}</p>
                    </div>
                    <button class="card-like">
                      <i class= "fa-regular fa-heart"></i>
                    </button>
                  </div>`;
        if(imgNo<imgMaxNo) {
          newList.append(newItem);
        }
    })
    //li태그 생성하기
    collectionItems.forEach(m => {
        let colItem = `<li class="card-item card-item1">
                    <div class="card-inner">
                      <div class="card-img">
                        <img src="${m.image}" alt="${m.alt}">
                      </div>
                      <div class="card-info">
                        <p class="card-name">${m.name}</p>
                        <p class="card-price">${m.price}</p>
                      </div>
                      <button class="card-like">
                        <i class= "fa-regular fa-heart"></i>
                      </button>
                    </div>`;
        colleectionList.append(colItem);
    })
    let pageCount = Math.ceil(newItems.length/12);
    if($("body").hasClass("mo")) { // 모바일이라면
      pageCount = Math.ceil(newItems.length/6);
    } 
    for (let i = 1; i <= pageCount; i++) {
      pageList.append(`<li class=><a href="#" >${i}</a></li>`);
    }
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