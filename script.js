const number = document.querySelector("#number");
number.innerText = localStorage.getItem("number") || 0;

const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach((btn) =>
  btn.addEventListener("click", function () {
    if (btn.id === "plus") {
      number.innerText++;
    } else if (btn.id === "minus") {
      number.innerText--;
    } else {
      number.innerText = 0;
    }
    localStorage.setItem("number", number.innerText);
  }),
);
