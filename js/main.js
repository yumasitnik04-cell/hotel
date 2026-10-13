/* ============================================================
   MAIN — прелоадер, глобальная инициализация, счётчики, утилиты
   ============================================================ */

   (() => {
    'use strict';
  
    /* ------------------------------------------------------------
       ПРЕЛОАДЕР
       Показывается до полной загрузки страницы, скрывается плавно.
       Страховочный таймаут — 2.5 сек на случай зависших ресурсов.
       ------------------------------------------------------------ */
    function initPreloader() {
      const preloader = document.querySelector('.preloader');
      if (!preloader) return;
  
      let hidden = false;
  
      const hide = () => {
        if (hidden) return;
        hidden = true;
        preloader.classList.add('is-hidden');
        setTimeout(() => preloader.remove(), 800);
      };
  
      if (document.readyState === 'complete') {
        setTimeout(hide, 400);
      } else {
        window.addEventListener('load', () => setTimeout(hide, 400));
        setTimeout(hide, 2500);
      }
    }
  
    /* ------------------------------------------------------------
       ТЕКУЩИЙ ГОД В ФУТЕРЕ
       Все элементы [data-year] заменяются на текущий год.
       ------------------------------------------------------------ */
    function setCurrentYear() {
      const year = new Date().getFullYear();
      document.querySelectorAll('[data-year]').forEach(el => {
        el.textContent = year;
      });
    }
  
    /* ------------------------------------------------------------
       МИНИМАЛЬНЫЕ ДАТЫ В КАЛЕНДАРЯХ
       Нельзя выбрать дату в прошлом.
       ------------------------------------------------------------ */
    function initMinDates() {
      const today = new Date();
      const iso = today.toISOString().split('T')[0];
  
      document.querySelectorAll('input[type="date"]').forEach(inp => {
        if (!inp.min) inp.min = iso;
      });
    }
  
    /* ------------------------------------------------------------
       СИНХРОНИЗАЦИЯ ДАТ ЗАЕЗДА И ВЫЕЗДА
       При выборе даты заезда — выезд автоматически сдвигается на +1 день
       и становится минимально допустимым для выбора.
       ------------------------------------------------------------ */
    function initDateSync() {
      document.querySelectorAll('form').forEach(form => {
        const checkin = form.querySelector('[name="checkin"]');
        const checkout = form.querySelector('[name="checkout"]');
        if (!checkin || !checkout) return;
  
        checkin.addEventListener('change', () => {
          if (!checkin.value) return;
  
          const next = new Date(checkin.value);
          next.setDate(next.getDate() + 1);
          const iso = next.toISOString().split('T')[0];
  
          checkout.min = iso;
  
          if (!checkout.value || checkout.value <= checkin.value) {
            checkout.value = iso;
          }
        });
      });
    }
  
    /* ------------------------------------------------------------
       ВОССТАНОВЛЕНИЕ REVEAL-ЭЛЕМЕНТОВ ПОСЛЕ СМЕНЫ ЯЗЫКА
       При переключении RU/EN меняется длина текстов и раскладка —
       принудительно показываем всё, что уже в зоне видимости.
       ------------------------------------------------------------ */
    function bindI18nRerender() {
      document.addEventListener('i18n:changed', () => {
        const selector = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur';
        document.querySelectorAll(selector).forEach(el => {
          const rect = el.getBoundingClientRect();
          const inView = rect.top < window.innerHeight - 60 && rect.bottom > 0;
          if (inView) el.classList.add('is-visible');
        });
      });
    }
  
    /* ------------------------------------------------------------
       ЗАЩИТА ОТ ДВОЙНОЙ ИНИЦИАЛИЗАЦИИ
       ------------------------------------------------------------ */
    let booted = false;
  
    function init() {
      if (booted) return;
      booted = true;
  
      /* Прелоадер — раньше всех, чтобы не мешал */
      initPreloader();
  
      /* Утилиты, не зависящие от модулей */
      setCurrentYear();
      initMinDates();
      initDateSync();
      bindI18nRerender();
  
      /* Модули — строгий порядок важен:
         i18n → scroll → nav → modals → forms → rooms */
      if (window.I18n)      window.I18n.init();
      if (window.ScrollFX)  window.ScrollFX.init();
      if (window.Nav)       window.Nav.init();
      if (window.Modals)    window.Modals.init();
      if (window.Forms)     window.Forms.init();
      if (window.RoomsPage) window.RoomsPage.init();
  
      /* Метка для отладки */
      document.documentElement.setAttribute('data-app', 'vershina-ready');
    }
  
    /* Запуск после готовности DOM */
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  
    /* Публичный API на случай внешних вызовов (для отладки в консоли) */
    window.Vershina = {
      reinit: init,
      version: '1.0.0'
    };
  })();