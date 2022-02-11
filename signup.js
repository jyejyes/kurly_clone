"use strict";

const id = document.getElementById("id");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("passwordCheck");
const moreId = document.getElementById("more_id");
const morePw1 = document.getElementById("more_pw1");
const morePw2 = document.getElementById("more_pw2");
const morePw3 = document.getElementById("more_pw3");
const morePwc = document.getElementById("more_pwc");

const addrBtn = document.querySelector(".addBtn");
const addressBox = document.querySelector(".address_box");
const addressInput = document.querySelectorAll(".address");
const addrDetail = document.getElementById("address_2");
const reSearch = document.getElementById("researchBtn");
const recommendId = document.getElementById("recommend_id");
const addEventBox = document.querySelector(".add_event_box");
const eventName = document.getElementById("event");
const eventInput = document.querySelector(".event_input");

//나 따라다니는 퀵 네비바
const quick = document.querySelector(".quick_nav");
//회원가입 화면은 메인에 비해 좀 위에 위치하기 때문에 미리 올려줌
quick.style.transform = `translateY(${scrollY - 200}px)`;
window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  if (scrollY >= 0) {
    quick.style.transform = `translateY(${scrollY - 200}px)`;
    quick.style.transition = `transform 0.4s ease-out`;
  } else {
    quick.style.transform = "translateY(0px)";
    quick.style.transition = `transform 0.4s ease-out`;
  }
});

// focus 시
id.addEventListener("focus", () => {
  moreId.style.display = "flex";
});

password.addEventListener("focus", () => {
  morePw1.style.display = "flex";
  morePw2.style.display = "flex";
  morePw3.style.display = "flex";
});

passwordCheck.addEventListener("focus", () => {
  morePwc.style.display = "flex";
});

recommendId.addEventListener("click", () => {
  addEventBox.style.display = "inline";
  eventInput.placeholder = "추천인 아이디를 입력해주세요.";
});

eventName.addEventListener("click", () => {
  addEventBox.style.display = "inline";
  eventInput.placeholder = "참여 이벤트명을 입력해주세요.";
});

//주소찾기
addrBtn.addEventListener("click", () => {
  new daum.Postcode({
    oncomplete: function (data) {
      addressInput[0].value = data.address + " (" + data.buildingName + ")";
      addressBox.style.display = "inline";
      addrBtn.style.display = "none";
      addrDetail.focus();
    },
  }).open();
});

//재검색
reSearch.addEventListener("click", () => {
  new daum.Postcode({
    oncomplete: function (data) {
      addressInput[0].value = data.address + " (" + data.buildingName + ")";
      addressBox.style.display = "inline";
      addrBtn.style.display = "none";
      addrDetail.focus();
    },
  }).open();
});

//아이디 조건
function id_condition(uid) {
  if (!/^[a-zA-Z0-9]{6,}$/.test(uid)) {
    moreId.style.color = "rgb(228, 56, 56)";
    moreId.innerHTML = "✕ 6자 이상의 영문 혹은 영문과 숫자를 조합";
  } else {
    moreId.style.color = "rgb(51, 141, 39)";
    moreId.innerHTML = "✓ 6자 이상의 영문 혹은 영문과 숫자를 조합";
  }
}

//비밀번호 조건
function pw_condition(upw) {
  //숫자 제한 : 정규식 구현(구글링함)
  if (!/^[a-zA-Z0-9!@#$%^&*()?_~]{10,20}$/.test(upw)) {
    morePw1.style.color = "rgb(228, 56, 56)";
    morePw1.innerHTML = "✕ 10자 이상 입력";
  } else {
    morePw1.style.color = "rgb(51, 141, 39)";
    morePw1.innerHTML = "✓ 10자 이상 입력";
  }

  //영문 숫자 특수문자
  var chk = 0;
  if (upw.search(/[0-9]/g) != -1) chk++;
  if (upw.search(/[a-z]/gi) != -1) chk++;
  if (upw.search(/[!@#$%^&*()?_~]/g) != -1) chk++;
  if (chk < 2) {
    morePw2.style.color = "rgb(228, 56, 56)";
    morePw2.innerHTML =
      "✕ 영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합";
  } else {
    morePw2.style.color = "rgb(51, 141, 39)";
    morePw2.innerHTML =
      "✓ 영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합";
  }

  //동일한 숫자 3개 이상 금지
  if (/(\w)\1\1/.test(upw)) {
    morePw3.style.color = "rgb(228, 56, 56)";
    morePw3.innerHTML = "✕ 동일한 숫자 3개 이상 연속 사용 불가";
  } else {
    morePw3.style.color = "rgb(51, 141, 39)";
    morePw3.innerHTML = "✕ 동일한 숫자 3개 이상 연속 사용 불가";
  }
}

//비밀번호 확인
function pw_check() {
  if (password.value != passwordCheck.value) {
    morePwc.style.color = "rgb(228, 56, 56)";
    morePwc.innerHTML = "✕ 동일한 비밀번호를 입력해주세요.";
  } else {
    morePwc.style.color = "rgb(51, 141, 39)";
    morePwc.innerHTML = "✓ 동일한 비밀번호를 입력해주세요.";
  }
}

// 함수 호출
id.addEventListener("input", () => id_condition(id.value));
password.addEventListener("input", () => {
  pw_condition(password.value);
  pw_check();
});
passwordCheck.addEventListener("input", () => pw_check());
