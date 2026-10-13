/* ============================================================
   MAIN — прелоадер, инициализация всех модулей
   ============================================================ */

   (() => {

    function initPreloader() {
      const preloader = document.querySelector('.preloader');
      if (!preloader) return;
  
      const hide = () => {
        preloader.classList.add('is-hidden');
        setTimeout(() => preloader.remove(), 800);
      };
  
      if (document.readyState === 'complete') {
        setTimeout(hide, 400);
      } else {
        window.addEventListener('load', () => setTimeout(hide, 400));
        setTimeout(hide, 2500); // страховка
      }
    }
  
    function setCurrentYear() {
      document.querySelectorAll('[data-year]').forEach(el => {
        el.textContent = new Date().getFullYear();
      });
    }
  
    function initMinDates() {
      const today = new Date();
      const iso = today.toISOString().split('T')[0];
      document.querySelectorAll('input[type="date"]').forEach(inp => {
        if (!inp.min) inp.min = iso;
      });
    }
  
    function init() {
      initPreloader();
      setCurrentYear();
      initMinDates();
  
      if (window.I18n)      window.I18n.init();
      if (window.ScrollFX)  window.ScrollFX.init();
      if (window.Nav)       window.Nav.init();
      if (window.Modals)    window.Modals.init();
      if (window.Forms)     window.Forms.init();
      if (window.RoomsPage) window.RoomsPage.init();
  
      document.addEventListener('i18n:changed', () => {
        if (window.ScrollFX) {
          document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur')
            .forEach(el => {
              const rect = el.getBoundingClientRect();
              if (rect.top < window.innerHeight - 60) el.classList.add('is-visible');
            });
        }
      });
    }
  
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  })();