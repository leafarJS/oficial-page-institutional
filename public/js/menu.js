"use strict";
const d = document;
export default function menu(menu, nav) {
  let _menuBars = d.getElementById(menu);
  let _navbar = d.querySelector(nav);

  _menuBars.addEventListener("click", (e) => {
    if (!e.target.matches(menu)) {
      _menuBars.classList.toggle("fa-times");
      _navbar.classList.toggle("active");
    }
  });
}
