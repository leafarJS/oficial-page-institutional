((d) => {
  const _form = d.querySelector(".contact-form");
  const _loader = d.querySelector(".contact-form-loader");
  const _response = d.querySelector(".contact-form-response");
  _form.addEventListener("submit", (e) => {
    e.preventDefault();
    _loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/leafar1977@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        location.hash = "#gracias";
        _form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrio un error, intenta de nuevo por favor";
        _response.querySelector(
          "h3"
        ).innerHTML = `Error: ${err.status}: ${message}`;
        _loader.classList.remove("none");
      })
      .finally(() => {
        _loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 2000);
      });
  });
})(document);
