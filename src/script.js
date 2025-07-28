const Domaccess = (() => {
  const bodyElem = document.querySelector("body");
  const openMenuElem = document.querySelector(".open-menu");
  const closeMenuElem = document.querySelector(".close-menu");
  const linksDiv = document.querySelector("#nav-links");
  const readMoreBtn = document.querySelector(".read-more");
  return { bodyElem, openMenuElem, closeMenuElem, linksDiv, readMoreBtn };
})();


  Domaccess.openMenuElem.addEventListener("click", (e) => {
if (Domaccess.bodyElem.offsetWidth <= 720) {
    e.target.style.display = "none";
    Domaccess.linksDiv.style.display = "flex";
    Domaccess.closeMenuElem.style.display = "block";
}else {
  alert("This feature is available only for small screens");
}
  });

  Domaccess.closeMenuElem.addEventListener("click", (e) => {
    if (Domaccess.bodyElem.offsetWidth <= 720) {
    e.target.style.display = "none";
    Domaccess.linksDiv.style.display = "none";
    Domaccess.openMenuElem.style.display = "block";
    }else {
  alert("This feature is available only for small screens");
}
  });
