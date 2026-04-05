function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    const button = document.getElementById("menuButton");

    menu.classList.toggle("open");

    button.innerHTML = menu.classList.contains("open") ? "⭐" : "🌟";
}