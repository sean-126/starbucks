// search 요소를 클릭하면 input 요소를 focus하겠다.
// input 안에 search 아이콘 클릭시 focus 활성화되지 않는 문제 해결하는 코드

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

// input 요소가 focus되면 class가 search인 요소에 focused를 추가
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// input 요소가 focus가 해제되면 
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

// 로드한 lodash에 throttle 기능을 사용해서 0.3초마다 function 실행 횟수를 제한
// _.throttle(사용할 함수, 시간)
// gsap.to(요소, 지속시간, 옵션) 옵션은 객체로 사용하는 경우가 많음;
window.addEventListener('scroll', _.throttle(function () {
  console.log(scrollY);
  if (window.scrollY > 500) {
    // 스크롤 위치 값이 500 보다 크면 배지 숨김
    // badgeEl.style.display = 'none';
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    // 스크롤 위치 값이 500 보다 작으면 배지 노출
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    // index는 0부터 시작, 0에다 곱해봐야 0이니까 index+1
    //각각 0.7, 1.4, 2.1, 2.7초 뒤에 순차적으로 보이게
    delay: (index+1) * .7,
    opacity: 1
  });
});


// SWIPER

// 공지사항 슬라이드
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

// 프로모션 슬라이드
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  // autoplay: {
    // delay: 5000
  // },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어, 클릭할 수 있냐 없냐
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

// 토글 제어 누르면 열리고 누르면 닫히고
// boolean 값으로 분기처리

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion // 느낌표 붙이면 반대가 되게 만든다.
  if (isHidePromotion) {
    // 반환된 isHidePromotion = true면 토글 숨김
    promotionEl.classList.add('hide');
  } else {
    // 반환된 isHidePromotion = false면 토글 보임
    promotionEl.classList.remove('hide');
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// youtube area image animation

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);