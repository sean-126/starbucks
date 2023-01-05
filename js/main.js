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
// _.throttle(사용할 함수, 시간)
// gsap.to(요소, 지속시간, 옵션) 옵션은 객체로 사용하는 경우가 많음;