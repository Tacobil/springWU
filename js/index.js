function toggleMenu() {
    const menu = document.querySelector("nav.menu")
    menu.classList.toggle("show")

    const fadeLayer = document.querySelector(".fade-layer")
    fadeLayer.classList.toggle("visible")
}

const menuButtons = document.querySelectorAll(".menu-button")

menuButtons.forEach(function (button) {
  button.addEventListener("click", toggleMenu)
})

const layer = document.querySelector(".fade-layer")
layer.addEventListener("click", toggleMenu)