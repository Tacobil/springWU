var sidebar = document.querySelector(".sidebar")
var menuButton = document.querySelector(".menu-button")
var fadeLayer = document.querySelector(".fade-layer")

function toggleSidebar() {
  sidebar.classList.toggle("toggle-sidebar")
  fadeLayer.classList.toggle("show")
}
fadeLayer.addEventListener("click", toggleSidebar)
menuButton.addEventListener("click", toggleSidebar)