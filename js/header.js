const hamburgerBtn = document.querySelector(".menu-btn");
const navBar = document.querySelector(".nav-bar");
const menuLinks = document.querySelectorAll(".menu a");
// Add EventListener To hamburgerButton
hamburgerBtn.addEventListener("click", toogleSideMenu);
function toogleSideMenu(e) {
  hamburgerBtn.classList.toggle("fa-xmark");
  navBar.classList.toggle("show-menu");
}
menuLinks.forEach((link) => {
  link.addEventListener("click", toogleSideMenu);
});
