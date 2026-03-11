/* =====================
   CUSTOM CURSOR
===================== */
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .skill-card, .project-card, .achievement-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '40px';
    cursor.style.height = '40px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '16px';
    cursor.style.height = '16px';
  });
});

/* =====================
   NAVBAR SCROLL
===================== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* =====================
   HAMBURGER MENU
===================== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

/* =====================
   HERO ANIMATION
===================== */
window.addEventListener('load', () => {
  const heroTag = document.querySelector('.hero-tag');
  const heroName = document.querySelector('.hero-name');
  const heroSub = document.querySelector('.hero-subtitle');
  const heroCta = document.querySelector('.hero-cta');

  setTimeout(() => {
    heroTag.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    heroTag.style.transform = 'translateY(0)';
    heroTag.style.opacity = '1';
  }, 200);

  setTimeout(() => {
    heroName.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    heroName.style.transform = 'translateY(0)';
    heroName.style.opacity = '1';
  }, 450);

  setTimeout(() => {
    heroSub.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    heroSub.style.transform = 'translateY(0)';
    heroSub.style.opacity = '1';
  }, 700);

  setTimeout(() => {
    heroCta.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    heroCta.style.transform = 'translateY(0)';
    heroCta.style.opacity = '1';
  }, 950);
});

// Initial state for hero elements
document.querySelector('.hero-tag').style.transform = 'translateY(20px)';
document.querySelector('.hero-name').style.transform = 'translateY(30px)';
document.querySelector('.hero-subtitle').style.transform = 'translateY(20px)';
document.querySelector('.hero-cta').style.transform = 'translateY(20px)';

/* =====================
   SCROLL REVEAL
===================== */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger delay for grouped elements
      const siblings = Array.from(entry.target.parentElement.children).filter(el => el.classList.contains('reveal'));
      const index = siblings.indexOf(entry.target);
      
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 100);

      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -60px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

/* =====================
   ACTIVE NAV HIGHLIGHT
===================== */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.style.color = '');
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.style.color = '#e8ff47';
    }
  });
}, { threshold: 0.5 });

sections.forEach(sec => sectionObserver.observe(sec));

/* =====================
   SMOOTH SCROLL OFFSET
===================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});