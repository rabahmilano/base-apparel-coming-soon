const form = document.querySelector("form");
const input = document.querySelector(".content__input");
const error = document.querySelector(".content__error");
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = input.value.trim();
  const result = regex.test(emailValue);

  if (result) {
    input.classList.remove("error");
    error.classList.remove("error");
    input.classList.add("success");
  } else {
    error.classList.add("error");
    input.classList.remove("success");
    input.classList.add("error");
  }
});
