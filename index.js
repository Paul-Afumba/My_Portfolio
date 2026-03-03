const menuhamburger = document.getElementById("menu-hamburger");
const menulinks = document.getElementById("menu-links");

menuhamburger.addEventListener("click", () => {
    menulinks.classList.toggle("active");
    menuhamburger.classList.toggle("active");
});