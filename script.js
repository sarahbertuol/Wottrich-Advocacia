(function () {
  const langToggle = document.getElementById('langToggle');
  const translatable = document.querySelectorAll('[data-en]');
  let currentLang = 'en';

  function setLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    translatable.forEach((el) => {
      el.textContent = el.dataset[lang];
    });

    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.langBtn === lang);
    });
  }

  langToggle.addEventListener('click', () => {
    setLang(currentLang === 'en' ? 'pt' : 'en');
  });

  document.querySelectorAll('[data-scroll-to]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.getElementById(btn.dataset.scrollTo).scrollIntoView({ behavior: 'smooth' });
    });
  });

  setLang('en');
})();
