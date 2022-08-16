"use strict";

setInterval(() => {
  const hour = new Date();
  const body = document.querySelector("body");
  const numbers = document.querySelectorAll(".square");

  let seconds = hour.getSeconds();
  let minutes = hour.getMinutes();
  let hours = hour.getHours();

  function setColor() {
    (numbers[0].style.color = "#754a00"),
      (numbers[1].style.color = "#754a00"),
      (numbers[2].style.color = "#754a00");
  }

  document.querySelector(".hour").textContent =
    hours < 10 ? "0" + hours : hours;
  document.querySelector(".minutes").textContent =
    minutes < 10 ? "0" + minutes : minutes;
  document.querySelector(".seconds").textContent =
    seconds < 10 ? "0" + seconds : seconds;

  hours >= 0 && hours <= 7
    ? (body.style.background = "linear-gradient(to top left, #00002e, #14145a)")
    : "";

  hours > 7 && hours <= 12
    ? ((body.style.background =
        "linear-gradient(to top left, #fffd0f, #fa9d00)"),
      setColor())
    : "";

  hours > 12 && hours <= 18
    ? ((body.style.background =
        "linear-gradient(to top left, #e6df00, #E75813)"),
      setColor())
    : "";

  hours > 18 && hours <= 23
    ? (body.style.background = "linear-gradient(to top left, #000722, #19005c)")
    : "";
});
