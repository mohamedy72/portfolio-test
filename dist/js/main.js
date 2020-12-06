// Selece UI items
const menuBtn = document.querySelector(".menu-btn"),
  menu = document.querySelector(".menu"),
  menuBranding = document.querySelector(".menu-branding"),
  menuNav = document.querySelector(".menu-nav"),
  navItems = document.querySelectorAll(".menu-nav--item");

// Set the initial State of menu (either its closed or opened)
let showMenu = false;

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");

    navItems.forEach((item) => item.classList.add("show"));

    // Set Menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");

    navItems.forEach((item) => item.classList.remove("show"));

    // Set Menu state
    showMenu = false;
  }
}

menuBtn.addEventListener("click", toggleMenu);
