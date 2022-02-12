"use strict";

const carouselSlide = document.querySelector(".slide_list");
const carouselContents = document.querySelectorAll(".slide_item");

const image_slide_box = document.querySelector(".slide_box");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

//캐러셀 슬라이드 1
let count = 1;
const size = carouselContents[0].offsetWidth;
carouselSlide.style.transform = `translateX(${-size * count}px)`;

//첫번째 캐러셀 슬라이드 5초마다 자동이동
const auto = setInterval(() => {
  count++;
  carouselSlide.style.transition = "transform 0.2s ease";
  carouselSlide.style.transform = `translateX(${-size * count}px)`;
}, 5000);

//이전 버튼
prevBtn.addEventListener("click", () => {
  if (count <= 0) return; // 매우 빠르게 클릭했을 때 count가 돌아오지 않고 마이너스 되어서 0보다 작으면 그냥 return 시킴.
  carouselSlide.style.transition = "transform 0.2s ease";
  count--;
  carouselSlide.style.transform = `translateX(${-size * count}px)`;
});
//다음버튼
nextBtn.addEventListener("click", () => {
  if (count >= carouselContents.length - 1) return; //마찬가지
  carouselSlide.style.transition = "transform 0.2s ease";
  count++;

  carouselSlide.style.transform = `translateX(${-size * count}px)`;
});

//맨 앞 ,맨 뒤 도착
carouselSlide.addEventListener("transitionend", () => {
  if (carouselContents[count].id == "copyFirst") {
    carouselSlide.style.transition = "none";
    count = carouselContents.length - count;
    carouselSlide.style.transform = `translateX(${-size * count}px)`;
  }
  if (carouselContents[count].id == "copyLast") {
    carouselSlide.style.transition = "none";
    count = carouselContents.length - 2;
    carouselSlide.style.tranform = `translateX(${-size * count}px)`;
  }
});

// prev. nextBtn에 마우스인, 아웃 시 변경되는 display.. 흠.. 이런 방법밖에 없나 기능에 비해 코드가 너무 긴 느낌
image_slide_box.addEventListener("mouseover", () => {
  prevBtn.style.display = "flex";
  nextBtn.style.display = "flex";
});

image_slide_box.addEventListener("mouseout", () => {
  prevBtn.style.display = "none";
  nextBtn.style.display = "none";
});

// 2번째 캐러셀 슬라이드
const recommend_items = document.querySelector(".recommend_items");
const recommend_item = document.querySelectorAll(".recommend_item");
const prevBtn2 = document.querySelector(".prevBtn2");
const nextBtn2 = document.querySelector(".nextBtn2");
let count2 = 0;

if (count2 == 0) {
  prevBtn2.style.display = "none";
}

nextBtn2.addEventListener("click", () => {
  recommend_items.style.transition = "transform 0.5s ease";
  count2++;
  recommend_items.style.transform = `translateX(-${
    count2 * (recommend_items.offsetWidth + 10)
  }px)`;

  //앞뒤로 가면 버튼 없어지는거
  if (count2 > 0) {
    prevBtn2.style.display = "block";
  }
  if (count2 == recommend_item.length / 4 - 1) {
    nextBtn2.style.display = "none";
  }
});

prevBtn2.addEventListener("click", () => {
  recommend_items.style.transition = "transform 0.5s ease";
  count2--;
  recommend_items.style.transform = `translateX(-${
    count2 * (recommend_items.offsetWidth + 10)
  }px)`;

  //앞뒤로 가면 버튼 없어지는거
  if (count2 == 0) {
    prevBtn2.style.display = "none";
  }
  if (count2 < recommend_item.length / 4 - 1) {
    nextBtn2.style.display = "block";
  }
});

//나 따라다니는 퀵 네비바
const quick = document.querySelector(".quick_nav");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  if (scrollY > 480) {
    quick.style.transform = `translateY(${scrollY - 480}px)`;
    quick.style.transition = `transform 0.4s ease-out`;
  } else {
    quick.style.transform = "translateY(0px)";
    quick.style.transition = `transform 0.4s ease-out`;
  }
});

// 타이머
const hourTimer = document.querySelector(".hour");
const minTimer = document.querySelector(".min");
const secTimer = document.querySelector(".sec");

// const hour = 23;
// const min = 59;
// const sec = 59;

setInterval(() => {
  const date = new Date();
  let showHour = 23 - date.getHours();
  let showMin = 59 - date.getMinutes();
  let showSec = 59 - date.getSeconds();

  if (
    showHour < 10
      ? (hourTimer.innerHTML = `0${showHour}`)
      : (hourTimer.innerHTML = showHour)
  );
  if (
    showMin < 10
      ? (minTimer.innerHTML = `0${showMin}`)
      : (minTimer.innerHTML = showMin)
  );
  if (
    showSec < 10
      ? (secTimer.innerHTML = `0${showSec}`)
      : (secTimer.innerHTML = showSec)
  );
}, 1000);
