"use strict";

const number = document.querySelector("#number");
number.innerText = localStorage.getItem("number");
let save = localStorage.setItem("number", number.innerText);

const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach((btn) =>
  btn.addEventListener("click", function () {
    switch (btn.id) {
      case "plus":
        number.innerText++;
        save = localStorage.setItem("number", number.innerText);
        break;
      case "minus":
        number.innerText--;
        save = localStorage.setItem("number", number.innerText);
        break;
      case "reset":
        number.innerText = 0;
        save = localStorage.setItem("number", number.innerText);
        break;
      default:
        number.innerText = 0;
        save = localStorage.setItem("number", number.innerText);
    }
  }),
);
