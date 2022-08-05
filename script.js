"use strict";

setInterval(() => {
  const hour = new Date();

  let seconds = hour.getSeconds();
  let minutes = hour.getMinutes();
  let hours = hour.getHours();

  document.querySelector(".hour").textContent =
    hours < 10 ? "0" + hours : hours;
  document.querySelector(".minutes").textContent =
    minutes < 10 ? "0" + minutes : minutes;
  document.querySelector(".seconds").textContent =
    seconds < 10 ? "0" + seconds : seconds;
});
