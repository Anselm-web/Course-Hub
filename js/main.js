// THEME MODE
const themeIcon = document.querySelector(".theme-icon");
let darkMode = localStorage.getItem("darkMode");

themeIcon.addEventListener("click", themeMenu);

function enableDarkMode() {
  let body = document.body;
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");

  body.classList.add("dark-mode");

  localStorage.setItem("darkMode", "enabled");
}
function disableDarkMode() {
  let body = document.body;
  themeIcon.classList.remove("fa-sun");
  themeIcon.classList.add("fa-moon");
  body.classList.remove("dark-mode");

  localStorage.setItem("darkMode", "disabled");
}

if (darkMode === "enabled") {
  enableDarkMode();
}

function themeMenu() {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode != "enabled") {
    enableDarkMode();
    console.log(darkMode);
  } else {
    disableDarkMode();
    console.log(darkMode);
  }
}
