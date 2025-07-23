// Typed.js animation
new Typed('#typed-text', {
  strings: ["Web Developer", "Problem Solver", "Learner", "Full stack developer"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
  backDelay: 2000
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
