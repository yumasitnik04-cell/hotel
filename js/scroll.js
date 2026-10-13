/* ============================================================
   SCROLL — reveal, прогресс-бар, кнопка «Наверх», параллакс
   ============================================================ */

   const ScrollFX = (() => {

    function initReveal() {
      const items = document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur'
      );
      if (!items.length) return;
  
      if (!('IntersectionObserver' in window)) {
        items.forEach(el => el.classList.add('is-visible'));
        return;
      }
  
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
      });
  
      items.forEach(el => io.observe(el));
    }
  
    function initTimeline() {
      const timelines = document.querySelectorAll('.timeline');
      if (!timelines.length || !('IntersectionObserver' in window)) return;
  
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
  
      timelines.forEach(el => io.observe(el));
    }
  
    function initRatingBars() {
      const blocks = document.querySelectorAll('[data-rating]');
      if (!blocks.length || !('IntersectionObserver' in window)) return;
  
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const fills = entry.target.querySelectorAll('.rating__fill');
          fills.forEach(f => {
            const target = f.dataset.value || 0;
            requestAnimationFrame(() => {
              f.style.width = target + '%';
            });
          });
          io.unobserve(entry.target);
        });
      }, { threshold: 0.3 });
  
      blocks.forEach(el => io.observe(el));
    }
  
    function initProgressBar() {
      const bar = document.querySelector('.scroll-progress');
      if (!bar) return;
      const update = () => {
        const h = document.documentElement;
        const scrolled = h.scrollTop;
        const total = h.scrollHeight - h.clientHeight;
        const percent = total > 0 ? (scrolled / total) * 100 : 0;
        bar.style.width = percent + '%';
      };
      document.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update);
      update();
    }
  
    function initToTop() {
      const btn = document.querySelector('.to-top');
      if (!btn) return;
  
      const toggle = () => {
        btn.classList.toggle('is-visible', window.scrollY > 400);
      };
      document.addEventListener('scroll', toggle, { passive: true });
      toggle();
  
      btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  
    function initHeaderScroll() {
      const header = document.querySelector('.header');
      if (!header) return;
      const toggle = () => {
        header.classList.toggle('is-scrolled', window.scrollY > 20);
      };
      document.addEventListener('scroll', toggle, { passive: true });
      toggle();
    }
  
    function initHeroParallax() {
      const hero = document.querySelector('.hero');
      const decor = hero && hero.querySelector('.hero__decor');
      const bg = hero && hero.querySelector('.hero__bg');
      if (!hero || (!decor && !bg)) return;
  
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (window.matchMedia('(max-width: 768px)').matches) return;
  
      let raf = null;
      const onMove = (e) => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          const rect = hero.getBoundingClientRect();
          const cx = (e.clientX - rect.left) / rect.width - 0.5;
          const cy = (e.clientY - rect.top) / rect.height - 0.5;
          if (decor) decor.style.transform = `translate(${cx * 24}px, ${cy * 24}px)`;
          if (bg)    bg.style.transform    = `translate(${cx * -14}px, ${cy * -14}px) scale(1.04)`;
          raf = null;
        });
      };
  
      hero.addEventListener('mousemove', onMove);
      hero.addEventListener('mouseleave', () => {
        if (decor) decor.style.transform = '';
        if (bg)    bg.style.transform    = '';
      });
    }
  
    function initCounters() {
      const counters = document.querySelectorAll('[data-count]');
      if (!counters.length) return;
  
      const run = (el) => {
        const target = parseFloat(el.dataset.count);
        const duration = 1600;
        const start = performance.now();
        const decimals = (el.dataset.decimals && parseInt(el.dataset.decimals, 10)) || 0;
        el.classList.add('is-counting');
  
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const value = target * eased;
          el.textContent = decimals
            ? value.toFixed(decimals)
            : Math.round(value).toString();
          if (p < 1) requestAnimationFrame(tick);
          else el.classList.remove('is-counting');
        };
        requestAnimationFrame(tick);
      };
  
      if (!('IntersectionObserver' in window)) {
        counters.forEach(run);
        return;
      }
  
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            run(entry.target);
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
  
      counters.forEach(el => io.observe(el));
    }
  
    function init() {
      initReveal();
      initTimeline();
      initRatingBars();
      initProgressBar();
      initToTop();
      initHeaderScroll();
      initHeroParallax();
      initCounters();
    }
  
    return { init };
  })();
  
  window.ScrollFX = ScrollFX;