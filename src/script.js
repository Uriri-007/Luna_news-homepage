const Domaccess = (() => {
  const openMenuElem = document.querySelector(".open-menu");
  const closeMenuElem = document.querySelector(".close-menu");
  const linksDiv = document.querySelector("#nav-links");
  return {openMenuElem, closeMenuElem, linksDiv}
})();

(Domaccess.openMenuElem).addEventListener("click", (e) => {
  e.target.classList.add("hidden");
  (Domaccess.linksDiv).style.display = "flex";
  (Domaccess.closeMenuElem).classList.remove("hidden");
});

(Domaccess.closeMenuElem).addEventListener("click", (e) => {
  e.target.classList.add("hidden");
  (Domaccess.linksDiv).style.display = "none";
  (Domaccess.openMenuElem).classList.remove("hidden");
});