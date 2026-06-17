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

  document.querySelectorAll('[data-target-col]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = `col-${btn.dataset.targetCol}`;
      const target = document.getElementById(targetId);

      document.querySelectorAll('.service-col').forEach((col) => {
        col.classList.toggle('is-highlighted', col.id === targetId);
      });

      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });

  setLang('en');
})();
