/* ===== SHOW MENU ===== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
}
if (navClose) {
  navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'));
}

/* Close menu on link click */
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('show-menu'));
});

/* ===== ACTIVE LINK ON SCROLL ===== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    }
  });
}
window.addEventListener('scroll', scrollActive);

/* ===== SCROLL UP ===== */
const scrollUp = document.getElementById('scroll-up');
function showScrollUp() {
  if (window.scrollY >= 350) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', showScrollUp);

/* ===== EXPERIENCE TABS ===== */
document.querySelectorAll('.experience__tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active from all
    document.querySelectorAll('.experience__tab').forEach(t => t.classList.remove('experience__tab--active'));
    document.querySelectorAll('.experience__content').forEach(c => c.classList.add('experience__content--hidden'));
    // Activate clicked
    tab.classList.add('experience__tab--active');
    const target = document.getElementById('exp-' + tab.dataset.target);
    if (target) target.classList.remove('experience__content--hidden');
  });
});

/* ===== CONTACT FORM ===== */
const contactForm = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Message Sent ✓';
    btn.style.background = '#10b981';
    btn.disabled = true;
    formMsg.textContent = 'Thanks! I\'ll get back to you soon.';
    setTimeout(() => {
      btn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane button__icon"></i>';
      btn.style.background = '';
      btn.disabled = false;
      formMsg.textContent = '';
      contactForm.reset();
    }, 3500);
  });
}

/* ===== SCROLL REVEAL ANIMATION ===== */
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1200, // Reduced from 2000 for faster movement
  delay: 200,    // Reduced from 300 for quicker start
  // reset: true // Animation repeat
});

sr.reveal(`.home__data, .home__image, .home__info, .about__img-wrap, .about__data, .project__item, .skills__group, .experience__item, .contact__info, .contact__form`, { interval: 80 });
sr.reveal(`.home__greeting`, { delay: 300 });
sr.reveal(`.home__name`, { delay: 400 });
sr.reveal(`.home__profession`, { delay: 500, interval: 80 });
sr.reveal(`.home__socials, .home__info-item`, { delay: 600, origin: 'bottom' });
sr.reveal(`.about__img-wrap`, { origin: 'left' });
sr.reveal(`.about__data`, { origin: 'right' });
