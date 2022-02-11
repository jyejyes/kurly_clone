"use strict";

const id = document.getElementById("id");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("passwordCheck");
const moreId = document.getElementById("more_id");
const morePw = document.getElementById("more_pw");
const morePwc = document.getElementById("more_pwc");

const addrBtn = document.querySelector(".addBtn");
const addressBox = document.querySelector(".address_box");
const addressInput = document.querySelectorAll(".address");
const addrDetail = document.getElementById("address_2");
const reSearch = document.getElementById("researchBtn");
const recommendId = document.getElementById("recommend_id");
const eventName = document.getElementById("event");
const addEventBox = document.querySelector(".add_event_box");
const eventInput = document.querySelector(".event_input");

id.addEventListener("click", () => {
  moreId.style.display = "flex";
});

password.addEventListener("click", () => {
  morePw.style.display = "flex";
});

passwordCheck.addEventListener("click", () => {
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

console.log(addressInput);

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
