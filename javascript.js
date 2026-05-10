// JavaScript pro ovládání hamburger menu
const burger = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

// Funkce pro zavření menu a aktualizaci stavu hamburger ikony
const closeMenu = () => {
  navLinks.classList.remove('is-open');
  burger.classList.remove('is-open');
  burger.setAttribute('aria-expanded', 'false'); // Aktualizace atributu pro přístupnost
};

// Přepínání třídy 'is-open' pro zobrazení/skrývání menu
burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open');
  burger.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', open);
});

// Zavření menu po kliknutí na odkaz a aktualizace stavu hamburger ikony
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    closeMenu();
  });
});

// Zavření menu po kliknutí mimo něj
document.addEventListener('click', (event) => {
  if (!navbar.contains(event.target) && navLinks.classList.contains('is-open')) {
    closeMenu();
  }
});

// Zavření menu při změně velikosti okna, pokud je otevřené
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    if (navLinks.classList.contains('is-open')) {
      closeMenu();
    }
  }
});
