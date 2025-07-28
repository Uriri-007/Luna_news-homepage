
const Domaccess = (() => {
  const bodyElem = document.querySelector("body");
  const openMenuElem = document.querySelector(".open-menu");
  const closeMenuElem = document.querySelector(".close-menu");
  const linksDiv = document.querySelector(".nav-menu");
  const readMoreBtn = document.querySelector(".read-more");
  const imgElem = document.querySelector(".img-web3");
  return { bodyElem, openMenuElem, closeMenuElem, linksDiv, readMoreBtn };
})();

//import { mobileWeb3Img } from "./assets/images/image-web-3-mobile.jpg";
Domaccess.bodyElem.addEventListener("load", () => {
  console.log(Domaccess.bodyElem.offsetWidth);
})


Domaccess.openMenuElem.addEventListener("click", (e) => {
  if (Domaccess.bodyElem.offsetWidth <= 720) {
    e.target.style.display = "none";
    Domaccess.linksDiv.style.display = "flex";
    Domaccess.closeMenuElem.style.display = "block";
  //  console.log("error")
  } else {
    alert("This feature is available only for small screens");
  }
});

Domaccess.closeMenuElem.addEventListener("click", (e) => {
  if (Domaccess.bodyElem.offsetWidth <= 720) {
    e.target.style.display = "none";
    Domaccess.linksDiv.style.display = "none";
    Domaccess.openMenuElem.style.cssText = `
    display: block;
    border: 1px solid black;
    `;
  } else {
    alert("This feature is available only for small screens");
  }
});
