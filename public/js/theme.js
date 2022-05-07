"use strict";
const d = document;
const ls = localStorage;

export default function darkTheme(btn, dataDark) {
  const _themeBtn = d.querySelector(btn);
  const selector = d.querySelectorAll("[data-dark]");
  let moon = "🌙";
  let sun = "☀️";

  const lightMode = () => {
    console.log("hola");
    selector.forEach((el) => el.classList.add(dataDark));
    _themeBtn.textContent = moon;
    ls.setItem("theme", "light");
  };
  const darkMode = () => {
    selector.forEach((el) => el.classList.remove(dataDark));
    _themeBtn.textContent = sun;
    ls.setItem("theme", "dark");
  };
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if (_themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });
  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    if (ls.getItem("theme") === "light") lightMode();
    if (ls.getItem("theme") === "dark") darkMode();
  });
}
