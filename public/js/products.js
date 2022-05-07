"use strict";
const d = document;
export default async function getItems() {
  try {
    const _boxContent = d.querySelector(".box-container");
    let url = "../database/db.json";
    let res = await fetch(url);
    let json = await res.json();
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    let result = "";
    json.forEach((e) => {
      result += `
        <div class="box">
        <div class="price">${e.moneda}<span> ${e.precio}</span></div>
        <img src=${e.img} alt="${e.id}">
        <div class="name">${e.titulo}</div>
        <div class="description">
          <div class="description-text">${e.descr}</div>
          <div class="btn">${e.prom}</div>
        </div>
      </div>
      `;
    });
    _boxContent.innerHTML = result;
  } catch (err) {
    let message = err.statusText || "Ocurrio un error";
    console.log(message);
  }
}
