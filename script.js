document.getElementById('nav-toggle').addEventListener('click', function() {
    var nav = document.querySelector('nav.hidden');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
  });
  // Sticky Header
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade-in Animation
window.addEventListener('load', function() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(element => {
    element.classList.add('fade-in');
  });
});

  
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Typing Effect
  const typingText = document.querySelector('.typing-text');
  const text = 'Welcome to My Portfolio';
  let i = 0;
  
  function typeWriter() {
    if (i < text.length) {
      typingText.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  
  typeWriter();





  const navToggle = document.getElementById('nav-toggle');
  const navbar = document.getElementById('navbar');

  navToggle.addEventListener('click', function() {
    if (navbar.style.display === 'none' || navbar.style.display === '') {
      navbar.style.display = 'flex';
    } else {
      navbar.style.display = 'none';
    }
  });
  


//   document.getElementById('nav-toggle').addEventListener('click', function() {
//     var menuOverlay = document.querySelector('.menu-overlay');
//     menuOverlay.classList.toggle('hidden');
//   });
  
//   window.addEventListener('click', function(event) {
//     var menuOverlay = document.querySelector('.menu-overlay');
//     if (event.target == menuOverlay) {
//       menuOverlay.classList.add('hidden');
//     }
//   });


  document.getElementById('nav-toggle').addEventListener('click', function() {
    var mobileNav = document.getElementById('navbar');
    mobileNav.classList.toggle('active');
  });

  // Fade-in Animation
window.addEventListener('load', function() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(element => {
    element.classList.add('visible');
  });
});

// Scroll Animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

const elements = document.querySelectorAll('.slide-left');
elements.forEach(element => {
  observer.observe(element);
});

