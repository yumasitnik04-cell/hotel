/* ============================================================
   FORMS — валидация всех форм + экран «Спасибо»
   ============================================================ */

   const Forms = (() => {

    const rePhone = /^[\d\s()+\-]{10,20}$/;
    const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  
    function t(key) {
      return window.I18n ? window.I18n.t(key) : key;
    }
  
    function setError(field, message) {
      if (!field) return;
      field.classList.add('is-error');
      const err = field.querySelector('.field__error');
      if (err) err.textContent = message || t('error.required');
    }
  
    function clearError(field) {
      if (!field) return;
      field.classList.remove('is-error');
      const err = field.querySelector('.field__error');
      if (err) err.textContent = '';
    }
  
    function clearAllErrors(form) {
      form.querySelectorAll('.field.is-error').forEach(clearError);
    }
  
    function validateField(input, rules = {}) {
      const field = input.closest('.field');
      const value = (input.value || '').trim();
  
      if (rules.required && !value) {
        setError(field, t('error.required'));
        return false;
      }
      if (rules.min && value.length < rules.min) {
        setError(field, rules.message || t('error.text'));
        return false;
      }
      if (rules.pattern === 'phone' && !rePhone.test(value)) {
        setError(field, t('error.phone'));
        return false;
      }
      if (rules.pattern === 'email' && !reEmail.test(value)) {
        setError(field, t('error.email'));
        return false;
      }
  
      clearError(field);
      return true;
    }
  
    function validateForm(form) {
      let ok = true;
      form.querySelectorAll('[data-validate]').forEach(input => {
        const rule = input.dataset.validate;
        const rules = {};
  
        if (rule.includes('required')) rules.required = true;
        if (rule.includes('name'))     { rules.required = true; rules.min = 2; rules.message = t('error.name'); }
        if (rule.includes('phone'))    { rules.required = true; rules.pattern = 'phone'; }
        if (rule.includes('email'))    { rules.required = true; rules.pattern = 'email'; }
        if (rule.includes('text'))     { rules.required = true; rules.min = 10; rules.message = t('error.text'); }
  
        if (!validateField(input, rules)) ok = false;
      });
      return ok;
    }
  
    /* ---------- Проверка логики дат ---------- */
    function checkDates(form) {
      const checkin = form.querySelector('[name="checkin"]');
      const checkout = form.querySelector('[name="checkout"]');
      if (!checkin || !checkout) return true;
      if (!checkin.value || !checkout.value) return true;
  
      const d1 = new Date(checkin.value);
      const d2 = new Date(checkout.value);
      if (d2 <= d1) {
        setError(checkout.closest('.field'), t('error.dateOrder'));
        return false;
      }
      clearError(checkout.closest('.field'));
      return true;
    }
  
    /* ---------- Экран «Спасибо» ---------- */
    function showSuccess(modal, titleKey, textKey) {
      const content = modal.querySelector('.modal__content');
      if (!content) return;
  
      content.innerHTML = `
        <div class="success">
          <div class="success__icon">✓</div>
          <h3 class="success__title">${t(titleKey)}</h3>
          <p class="success__text">${t(textKey)}</p>
          <button class="btn btn--outline" data-modal-close>${t('btn.book') === 'Book now' ? 'Close' : 'Закрыть'}</button>
        </div>
      `;
    }
  
    /* ---------- Обработчик бронирования ---------- */
    function initBooking() {
      const form = document.getElementById('booking-form');
      if (!form) return;
      const modal = form.closest('.modal');
  
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearAllErrors(form);
  
        const okFields = validateForm(form);
        const okDates = checkDates(form);
        if (!okFields || !okDates) {
          const firstError = form.querySelector('.field.is-error input, .field.is-error textarea, .field.is-error select');
          if (firstError) firstError.focus();
          return;
        }
  
        showSuccess(modal, 'modal.book.success.title', 'modal.book.success.text');
      });
  
      form.addEventListener('input', (e) => {
        const input = e.target;
        if (input.dataset.validate) {
          const field = input.closest('.field');
          if (field && field.classList.contains('is-error')) {
            const rule = input.dataset.validate;
            const rules = {};
            if (rule.includes('required')) rules.required = true;
            if (rule.includes('name')) { rules.required = true; rules.min = 2; rules.message = t('error.name'); }
            if (rule.includes('phone')) { rules.required = true; rules.pattern = 'phone'; }
            validateField(input, rules);
          }
        }
      });
    }
  
    /* ---------- Обработчик обратной связи ---------- */
    function initContact() {
      const form = document.getElementById('contact-form');
      if (!form) return;
  
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearAllErrors(form);
  
        if (!validateForm(form)) {
          const firstError = form.querySelector('.field.is-error input, .field.is-error textarea');
          if (firstError) firstError.focus();
          return;
        }
  
        const wrap = form.parentElement;
        form.style.display = 'none';
        const success = document.createElement('div');
        success.className = 'success';
        success.innerHTML = `
          <div class="success__icon">✓</div>
          <h3 class="success__title">${t('modal.book.success.title')}</h3>
          <p class="success__text">${t('modal.book.success.text')}</p>
        `;
        wrap.appendChild(success);
      });
    }
  
    /* ---------- Добавление отзыва ---------- */
    function initReviewForm() {
      const form = document.getElementById('review-form');
      if (!form) return;
  
      const starsWrap = form.querySelector('.stars__input');
      let rating = 0;
  
      if (starsWrap) {
        starsWrap.querySelectorAll('button').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.preventDefault();
            rating = parseInt(btn.dataset.value, 10);
            starsWrap.querySelectorAll('button').forEach(b => {
              b.classList.toggle('is-active', parseInt(b.dataset.value, 10) <= rating);
            });
            const hidden = form.querySelector('[name="rating"]');
            if (hidden) hidden.value = rating;
          });
        });
      }
  
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearAllErrors(form);
  
        let ok = validateForm(form);
  
        if (!rating) {
          ok = false;
          const wrap = starsWrap.closest('.field');
          setError(wrap, t('error.rating'));
        }
  
        if (!ok) return;
  
        const name = (form.querySelector('[name="name"]').value || '').trim();
        const city = (form.querySelector('[name="city"]').value || '').trim() || '—';
        const text = (form.querySelector('[name="text"]').value || '').trim();
  
        const starsHTML = Array.from({ length: 5 }, (_, i) =>
          `<span style="color:${i < rating ? 'var(--color-accent)' : 'var(--color-border)'}">★</span>`
        ).join('');
  
        const today = new Date().toLocaleDateString(
          window.I18n && window.I18n.lang === 'en' ? 'en-GB' : 'ru-RU',
          { day: '2-digit', month: 'long', year: 'numeric' }
        );
  
        const review = document.createElement('article');
        review.className = 'review review--new';
        review.innerHTML = `
          <div class="review__head">
            <div class="review__author">
              <span class="review__name">${escapeHtml(name)}</span>
              <span class="review__city">${escapeHtml(city)}</span>
            </div>
            <div class="stars">${starsHTML}</div>
          </div>
          <p class="review__text">${escapeHtml(text)}</p>
          <div class="review__foot">
            <span>${today}</span>
            <span>${t('rooms.night') === 'night' ? 'Verified stay' : 'Подтверждённый заезд'}</span>
          </div>
        `;
  
        const grid = document.querySelector('[data-reviews-grid]');
        if (grid) {
          grid.prepend(review);
        }
  
        form.reset();
        if (starsWrap) starsWrap.querySelectorAll('button').forEach(b => b.classList.remove('is-active'));
        rating = 0;
        const hidden = form.querySelector('[name="rating"]');
        if (hidden) hidden.value = '';
  
        review.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    }
  
    function escapeHtml(str) {
      return String(str).replace(/[&<>"']/g, s => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
      }[s]));
    }
  
    function init() {
      initBooking();
      initContact();
      initReviewForm();
    }
  
    return { init };
  })();
  
  window.Forms = Forms;