/* ============================================================
   MODALS — общее открытие/закрытие + детали номера + бронирование
   ============================================================ */

   const Modals = (() => {
    const openStack = [];
  
    function lock() {
      document.body.classList.add('is-locked');
    }
    function unlockIfEmpty() {
      if (!openStack.length) document.body.classList.remove('is-locked');
    }
  
    function openModal(modal) {
      if (!modal) return;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      openStack.push(modal);
      lock();
      const focusable = modal.querySelector('input, textarea, select, button:not(.modal__close), a[href]');
      if (focusable) setTimeout(() => focusable.focus(), 250);
    }
  
    function closeModal(modal) {
      if (!modal) return;
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      const idx = openStack.indexOf(modal);
      if (idx > -1) openStack.splice(idx, 1);
      unlockIfEmpty();
    }
  
    function closeAll() {
      [...openStack].forEach(closeModal);
    }
  
    function initTriggers() {
      document.addEventListener('click', (e) => {
        const opener = e.target.closest('[data-modal-open]');
        if (opener) {
          e.preventDefault();
          const id = opener.dataset.modalOpen;
          const modal = document.getElementById(id);
          if (modal) openModal(modal);
          return;
        }
  
        const closer = e.target.closest('[data-modal-close]');
        if (closer) {
          e.preventDefault();
          const modal = closer.closest('.modal');
          closeModal(modal);
          return;
        }
  
        if (e.target.classList.contains('modal')) {
          closeModal(e.target);
        }
      });
  
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAll();
      });
    }
  
    /* ---------- Детали номера ---------- */
    const ROOMS_DATA = {
      'standard': {
        ru: {
          title: 'Стандарт',
          meta: ['24 м²', '2 гостя', 'Вид во двор'],
          price: '9 800 ₽',
          desc: 'Компактный номер с продуманной эргономикой. Натуральные материалы, большая кровать, рабочая зона и ванная с дождевым душем.',
          amenities: ['King-size кровать', 'Дождевой душ', 'Мини-бар', 'Wi-Fi 1 Гбит', 'Сейф', 'Халаты и тапочки'],
          images: [
            'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80',
            'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80'
          ]
        },
        en: {
          title: 'Standard',
          meta: ['24 m²', '2 guests', 'Courtyard view'],
          price: '₽9,800',
          desc: 'Compact room with thoughtful ergonomics. Natural materials, king bed, workspace and a rain shower.',
          amenities: ['King-size bed', 'Rain shower', 'Minibar', '1 Gbps Wi-Fi', 'Safe', 'Robes & slippers'],
          images: [
            'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80',
            'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80'
          ]
        }
      },
      'lux': {
        ru: {
          title: 'Люкс',
          meta: ['38 м²', '2 гостя', 'Панорамный балкон'],
          price: '16 400 ₽',
          desc: 'Просторный номер с гостиной зоной, отдельной ванной и балконом с видом на долину. Идеален для длительного отдыха.',
          amenities: ['King-size кровать', 'Гостиная зона', 'Ванна и душ', 'Кофемашина', 'Балкон', 'Вино в подарок'],
          images: [
            'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80',
            'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80'
          ]
        },
        en: {
          title: 'Deluxe',
          meta: ['38 m²', '2 guests', 'Panoramic balcony'],
          price: '₽16,400',
          desc: 'Spacious room with a lounge area, separate bathroom and a balcony overlooking the valley. Ideal for longer stays.',
          amenities: ['King-size bed', 'Lounge area', 'Bath & shower', 'Coffee machine', 'Balcony', 'Complimentary wine'],
          images: [
            'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80',
            'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80'
          ]
        }
      },
      'panorama': {
        ru: {
          title: 'Панорамный',
          meta: ['42 м²', '2 гостя', 'Вид на горы'],
          price: '19 200 ₽',
          desc: 'Номер на верхнем этаже с окном во всю стену. Утро начинается с восхода над хребтом — прямо из кровати.',
          amenities: ['Панорамное окно', 'King-size кровать', 'Ванна у окна', 'Кофемашина', 'Телескоп', 'Пледы и камин'],
          images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
            'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&q=80',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
          ]
        },
        en: {
          title: 'Panoramic',
          meta: ['42 m²', '2 guests', 'Mountain view'],
          price: '₽19,200',
          desc: 'Top-floor room with a floor-to-ceiling window. Mornings begin with sunrise over the ridge — right from your bed.',
          amenities: ['Panoramic window', 'King-size bed', 'Window-side bath', 'Coffee machine', 'Telescope', 'Plaid & fireplace'],
          images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
            'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&q=80',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
          ]
        }
      },
      'suite': {
        ru: {
          title: 'Сьют с камином',
          meta: ['58 м²', '3 гостя', 'Приватная терраса'],
          price: '27 600 ₽',
          desc: 'Двухкомнатный сьют с камином, приватной террасой и ванной с видом. Лучший выбор для особых случаев.',
          amenities: ['Камин', 'Приватная терраса', 'Ванна с видом', 'Бутик-вино', 'Консьерж 24/7', 'Трансфер включён'],
          images: [
            'https://images.unsplash.com/photo-1618219771732-6e4be90e0a3c?w=1200&q=80',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80'
          ]
        },
        en: {
          title: 'Suite with fireplace',
          meta: ['58 m²', '3 guests', 'Private terrace'],
          price: '₽27,600',
          desc: 'Two-room suite with a fireplace, private terrace and a view bath. The best choice for special occasions.',
          amenities: ['Fireplace', 'Private terrace', 'View bath', 'Boutique wine', '24/7 concierge', 'Transfer included'],
          images: [
            'https://images.unsplash.com/photo-1618219771732-6e4be90e0a3c?w=1200&q=80',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80'
          ]
        }
      }
    };
  
    function renderRoomDetail(id) {
      const modal = document.getElementById('modal-room');
      if (!modal) return;
  
      const data = ROOMS_DATA[id];
      if (!data) return;
  
      const lang = window.I18n ? window.I18n.lang : 'ru';
      const d = data[lang] || data.ru;
  
      const content = modal.querySelector('.modal__content');
      if (!content) return;
  
      const amenitiesHTML = d.amenities
        .map(a => `<li class="tag">${a}</li>`)
        .join('');
  
      const galleryHTML = d.images
        .map((src, i) => `<img src="${src}" alt="${d.title} ${i + 1}" loading="lazy">`)
        .join('');
  
      content.innerHTML = `
        <h3 class="modal__title">${d.title}</h3>
        <div class="room__meta" style="margin-bottom:18px;">
          ${d.meta.map(m => `<span>${m}</span>`).join('')}
        </div>
        <div class="gallery">${galleryHTML}</div>
        <div class="room__price" style="font-size:2rem;margin-bottom:16px;">
          ${d.price} <small>${window.I18n ? window.I18n.t('rooms.night') : ''}</small>
        </div>
        <p style="margin-bottom:24px;color:var(--color-text-muted);line-height:1.8;">${d.desc}</p>
        <h4 style="margin-bottom:14px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase;font-size:0.85rem;color:var(--color-accent);">
          ${window.I18n ? window.I18n.t('modal.room.amenities') : 'Удобства'}
        </h4>
        <div class="room__tags" style="margin-bottom:28px;">${amenitiesHTML}</div>
        <button class="btn btn--block" data-modal-close data-modal-open="modal-book" data-room-type="${id}">
          ${window.I18n ? window.I18n.t('modal.room.book') : 'Забронировать этот номер'}
        </button>
      `;
  
      modal.dataset.roomId = id;
    }
  
    function initRoomDetails() {
      document.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-room-details]');
        if (!btn) return;
        e.preventDefault();
        const id = btn.dataset.roomDetails;
        renderRoomDetail(id);
        const modal = document.getElementById('modal-room');
        if (modal) openModal(modal);
      });
    }
  
    /* ---------- Предзаполнение брони при клике «Забронировать» ---------- */
    function initBookingPreset() {
      document.addEventListener('click', (e) => {
        const opener = e.target.closest('[data-modal-open="modal-book"]');
        if (!opener) return;
        const roomType = opener.dataset.roomType;
        if (!roomType) return;
        const select = document.querySelector('#modal-book select[name="roomtype"]');
        if (select) {
          const option = select.querySelector(`option[value="${roomType}"]`);
          if (option) select.value = roomType;
        }
      });
    }
  
    function init() {
      initTriggers();
      initRoomDetails();
      initBookingPreset();
    }
  
    return { init, open: openModal, close: closeModal, closeAll };
  })();
  
  window.Modals = Modals;