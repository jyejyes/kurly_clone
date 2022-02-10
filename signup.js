const inputId = document.getElementById("id");
const moreId = document.getElementById("click_more_id");
const inputPw = document.getElementById("password");
const morePw = document.getElementById("click_more_pw");
const inputPwCheck = document.getElementById("password_check");
const morePwCheck = document.getElementById("click_more_pwc");

inputId.addEventListener("click", () => {
  moreId.style.display = "flex";
});

inputPw.addEventListener("click", () => {
  morePw.style.display = "flex";
});

inputPwCheck.addEventListener("click", () => {
  morePwCheck.style.display = "flex";
});
