/* ============================================================
   NAV — бургер-меню, активный пункт, плавный скролл
   ============================================================ */

   const Nav = (() => {
    let burger, nav, header;
  
    function open() {
      nav.classList.add('is-open');
      burger.classList.add('is-open');
      burger.setAttribute('aria-expanded', 'true');
      document.body.classList.add('is-locked');
    }
  
    function close() {
      nav.classList.remove('is-open');
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('is-locked');
    }
  
    function toggle() {
      nav.classList.contains('is-open') ? close() : open();
    }
  
    function initBurger() {
      burger = document.querySelector('.burger');
      nav = document.querySelector('.nav');
      if (!burger || !nav) return;
  
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-controls', 'main-nav');
      nav.id = 'main-nav';
  
      burger.addEventListener('click', toggle);
  
      document.addEventListener('click', (e) => {
        if (!nav.classList.contains('is-open')) return;
        if (nav.contains(e.target) || burger.contains(e.target)) return;
        close();
      });
  
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('is-open')) close();
      });
  
      window.addEventListener('resize', () => {
        if (window.innerWidth > 992) close();
      });
    }
  
    function initActiveLink() {
      const path = location.pathname.split('/').pop() || 'index.html';
      document.querySelectorAll('.nav__link').forEach(a => {
        const href = a.getAttribute('href');
        if (!href) return;
        if (href === path) a.classList.add('is-active');
      });
    }
  
    function initCloseOnLink() {
      if (!nav) return;
      nav.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link && nav.classList.contains('is-open')) close();
      });
    }
  
    function initSmoothAnchors() {
      document.addEventListener('click', (e) => {
        const a = e.target.closest('a[href^="#"]');
        if (!a) return;
        const id = a.getAttribute('href');
        if (id === '#' || id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const offset = (header || document.querySelector('.header'))?.offsetHeight || 78;
        const top = target.getBoundingClientRect().top + window.scrollY - offset - 8;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    }
  
    function init() {
      header = document.querySelector('.header');
      initBurger();
      initActiveLink();
      initCloseOnLink();
      initSmoothAnchors();
    }
  
    return { init };
  })();
  
  window.Nav = Nav;