// Typed.js animation
new Typed('#typed-text', {
  strings: [
    "Quick Learner",
    "Problem Solver",
    "Web Developer",
    "Full Stack Developer",
    "Team Player",
    "Tech Enthusiast",
    "Frontend Developer",
    "Backend Developer",
    "Open Source Contributor",
    "Creative Thinker"
  ],
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
