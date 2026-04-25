var sidebar = document.querySelector(".sidebar")
var menuButton = document.querySelector(".menu-button")


function toggleSidebar() {
  sidebar.classList.toggle("small-sidebar")
}

menuButton.addEventListener("click", toggleSidebar)