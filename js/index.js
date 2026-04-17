const fadeLayer = document.querySelector(".fade-layer")
const menu = document.querySelector("nav.menu")
const menuButtons = document.querySelectorAll(".menu-button")

function toggleMenu() {
    menu.classList.toggle("show")
    fadeLayer.classList.toggle("visible")
}

menuButtons.forEach(function (button) {
  button.addEventListener("click", toggleMenu)
})

fadeLayer.addEventListener("click", toggleMenu)
