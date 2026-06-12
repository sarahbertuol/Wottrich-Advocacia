/* ===== NAVBAR SCROLL ===== */
(function () {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  function handleScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
})();

/* ===== HAMBURGER MENU ===== */
(function () {
  const hamburger = document.querySelector('.navbar__hamburger');
  const menu = document.querySelector('.navbar__menu');
  if (!hamburger || !menu) return;

  hamburger.addEventListener('click', function () {
    const isOpen = menu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click (mobile)
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!navbar.contains(e.target) && menu.classList.contains('open')) {
      menu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
})();

/* ===== DROPDOWN MENU ===== */
(function () {
  const dropdowns = document.querySelectorAll('.navbar__dropdown');
  dropdowns.forEach(function (dropdown) {
    const toggle = dropdown.querySelector('.navbar__dropdown-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
})();

/* ===== ÁREAS ACCORDION (cards) ===== */
(function () {
  const toggles = document.querySelectorAll('.area-card__toggle');
  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      const extra = toggle.closest('.area-card').querySelector('.area-card__extra');
      if (!extra) return;
      const isOpen = extra.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.querySelector('.toggle-label').textContent = isOpen ? 'Ver menos' : 'Ver mais';
    });
  });
})();

/* ===== FAQ ACCORDION ===== */
(function () {
  const accordions = document.querySelectorAll('.accordion');
  accordions.forEach(function (acc) {
    const header = acc.querySelector('.accordion__header');
    const body = acc.querySelector('.accordion__body');
    if (!header || !body) return;

    header.addEventListener('click', function () {
      const isOpen = acc.classList.toggle('open');
      header.setAttribute('aria-expanded', String(isOpen));
    });
  });
})();

/* ===== FADE IN ON SCROLL ===== */
(function () {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(function (el) { observer.observe(el); });
})();

/* ===== SMOOTH SCROLL for anchor links ===== */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
})();
