const sidebar = document.querySelector(".sidebar")
const menuButton = document.querySelector(".menu-button")
const fadeLayer = document.querySelector(".fade-layer")

function toggleSidebar() {
  sidebar.classList.toggle("toggle-sidebar")
  fadeLayer.classList.toggle("show")
}

fadeLayer.addEventListener("click", toggleSidebar)
menuButton.addEventListener("click", toggleSidebar)