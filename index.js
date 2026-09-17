const menuhamburger = document.getElementById("menu-hamburger");
const menulinks = document.getElementById("menu-links");

menuhamburger.addEventListener("click", () => {
    menulinks.classList.toggle("active");
    menuhamburger.classList.toggle("active");
});

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
// Définition de la marge de tolérance en pixels
const tolerance = 15; 

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Calcule l'écart entre la position actuelle et la précédente
  const scrollDelta = Math.abs(scrollTop - lastScrollTop);

  // Si le défilement est plus petit que la tolérance, on ne fait rien
  if (scrollDelta < tolerance) {
    return; 
  }

  if (scrollTop > lastScrollTop && scrollTop > 90) {
    // Scroll vers le bas ET on a dépassé la hauteur de la navbar -> Masquer
    navbar.classList.add('navbar-hidden');
  } else if (scrollTop < lastScrollTop) {
    // Scroll vers le haut -> Afficher
    navbar.classList.remove('navbar-hidden');
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});
