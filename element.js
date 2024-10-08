customElements.define(
  "file-size",
  class extends HTMLElement {
    connectedCallback(
      e = this.getAttribute("src") || "https://file-size.github.io/element.js",
      t = !1,
      i = this.getAttribute("max") || 49152,
      r = () => {
        t ||
          ((this.querySelector("i").innerHTML =
            "Loading GZIP Thermal analysis"),
          (t = this.querySelector("img")),
          (t.onerror = (e) => new Error("API rate limit enforced")),
          (t.onload = (i) => {
            (this.querySelector("i").innerHTML = ""),
              (t.style.width = (this.getAttribute("width") || "700") + "px"),
              this.querySelector("details").setAttribute("open", "open"),
              (t.onclick = (t) => {
                t.altKey
                  ? open(e, "_blank").focus()
                  : this.querySelector("details").removeAttribute("open");
              });
          }),
          (t.src = "https://gzthermal.vercel.app/?url=" + e));
      }
    ) {
      this.setAttribute("title", e),
        fetch(e, { mode: "cors" })
          .then((t) => {
            (this.length = Number(t.headers.get("content-length"))),
              (this.innerHTML =
                '<details style="cursor:pointer;font:16px arial"><summary>' +
                `<b style="color:dark${
                  this.length < i ? "green" : "red"
                };display:inline-block;width:4em;text-align:right">${
                  this.length
                }</b> &nbsp;Bytes ${e} <i/>` +
                "</summary><img/></details>"),
              (this.querySelector("details").ontoggle = (e) => {
                this.querySelector("details").open && r();
              }),
              this.hasAttribute("gz") && r();
          })
          .catch((t) => {
            this.innerHTML = `<b style="font:16px arial;color:red">&lt;file-size> ${t} : ${e}</b>`;
          });
    }
  }
);
