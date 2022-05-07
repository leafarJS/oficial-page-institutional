"use strict";
const d = document;
export default function slider(slide, prev, next) {
  let _slide = d.querySelectorAll(slide);
  let index = 0;
  d.addEventListener("click", (e) => {
    if (e.target.matches(next)) {
      _slide[index].classList.remove("active");
      index = (index + 1) % _slide.length;
      _slide[index].classList.add("active");
    }

    if (e.target.matches(prev)) {
      _slide[index].classList.remove("active");
      index = (index - 1 + _slide.length) % _slide.length;
      _slide[index].classList.add("active");
    }
  });
}
