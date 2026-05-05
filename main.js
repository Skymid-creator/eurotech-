document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  links.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  });

  // Highlight current active link
  const currentPath = window.location.pathname.split('/').pop();
  links.forEach(link => {
      const linkPath = link.getAttribute('href');
      if (currentPath === linkPath || (currentPath === '' && linkPath === 'index.html')) {
          link.classList.add('active');
      }
  });

  // Scroll Reveal Animation with IntersectionObserver
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  // Trigger once on load
  reveal();
});
