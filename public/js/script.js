"use strict";

import menu from "./menu.js";
import getItems from "./products.js";
import scrollTopBtn from "./scroll.js";
import darkTheme from "./theme.js";
import slider from "./slider.js";

const d = document;
const w = window;

d.addEventListener("DOMContentLoaded", (e) => {
  menu("menu-bars", ".navbar");
  scrollTopBtn(".scroll-top-btn");
  getItems();
  slider(".slide", ".fa-angle-left", ".fa-angle-right");
});

darkTheme(".dark-theme-btn", "dark-mode");
