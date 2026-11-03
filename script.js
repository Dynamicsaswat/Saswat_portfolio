// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
  
  // Animate elements on scroll
  animateOnScroll();
  
  // Update skill progress bars
  updateSkillBars();
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});

// Animate elements when they come into view
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const windowHeight = window.innerHeight;
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    
    if (elementTop < windowHeight - 100) {
      element.classList.add('show');
    }
  });
}

// Update skill progress bars
function updateSkillBars() {
  const skillSection = document.querySelector('.skills');
  const skillSectionTop = skillSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  
  if (skillSectionTop < windowHeight - 200) {
    const progressBars = document.querySelectorAll('.progress');
    
    progressBars.forEach(bar => {
      const percent = bar.getAttribute('data-percent');
      bar.style.width = percent + '%';
    });
  }
}

// Add typing animation to home text
document.addEventListener('DOMContentLoaded', function() {
  const textTwo = document.querySelector('.text-two');
  const originalText = textTwo.textContent;
  textTwo.textContent = '';
  
  let index = 0;
  function typeWriter() {
    if (index < originalText.length) {
      textTwo.textContent += originalText.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }
  
  // Start typing animation after initial fade-in
  setTimeout(typeWriter, 1000);
});

// Add particle effect to home section
function createParticles() {
  const homeSection = document.querySelector('.home');
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
      position: absolute;
      width: 2px;
      height: 2px;
      background: var(--primary-color);
      border-radius: 50%;
      pointer-events: none;
      opacity: 0.7;
      animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation-delay: ${Math.random() * 2}s;
    `;
    homeSection.appendChild(particle);
  }
}

// Add hover effects to service cards
document.addEventListener('DOMContentLoaded', function() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  // Initialize particles
  createParticles();
  
  // Initial animation check
  setTimeout(() => {
    animateOnScroll();
  }, 100);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add loading animation
window.addEventListener('load', function() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});