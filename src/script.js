import "./stye.css";
import mobileWeb3Img from "./assets/images/image-web-3-mobile.jpg";

const Domaccess = (() => {
  const bodyElem = document.querySelector("body");
  const openMenuElem = document.querySelector(".open-menu");
  const closeMenuElem = document.querySelector(".close-menu");
  const linksDiv = document.querySelector(".nav-menu");
  const imgElem = document.querySelector(".img-web3");
  const containerElem = document.querySelector(".container");
  return { bodyElem, openMenuElem, closeMenuElem, linksDiv, imgElem };
})();

document.addEventListener("DOMContentLoaded", () => {
  if (Domaccess.bodyElem.offsetWidth <= 720) {
    imgElem.src = mobileWeb3Img;
  } else {
    return
  }
});

Domaccess.openMenuElem.addEventListener("click", (e) => {
  if (Domaccess.bodyElem.offsetWidth <= 720) {
    Domaccess.linksDiv.style.display = "flex";
    Domaccess.closeMenuElem.style.display = "block";
  } else {
    alert("This feature is available only for small screens");
  }
});

Domaccess.closeMenuElem.addEventListener("click", (e) => {
  if (Domaccess.bodyElem.offsetWidth <= 720) {
    Domaccess.linksDiv.style.display = "none";
  } else {
    alert("This feature is available only for small screens");
  }
});
