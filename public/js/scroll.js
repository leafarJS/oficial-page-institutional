"use strict";
const d = document;
const w = window;

export default function scrollTopBtn(btn) {
  const _scrollTopBtn = d.querySelector(btn);

  w.addEventListener("scroll", (e) => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
    if (scrollTop > 625) {
      _scrollTopBtn.classList.remove("hidden");
    } else {
      _scrollTopBtn.classList.add("hidden");
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}
