/* ============================================================
   I18N — словарь RU/EN + переключатель языка
   ============================================================ */

   const TRANSLATIONS = {
    ru: {
      /* — Header / Footer — */
      "nav.home": "Главная",
      "nav.rooms": "Номера",
      "nav.advantages": "Преимущества",
      "nav.reviews": "Отзывы",
      "nav.contacts": "Контакты",
      "nav.book": "Забронировать",
  
      "footer.about.title": "Отель «Вершина»",
      "footer.about.text": "Горный бутик-отель премиум-класса. 24 номера, спа-центр, панорамный ресторан и приватная терраса с видом на вершины.",
      "footer.nav.title": "Навигация",
      "footer.contacts.title": "Контакты",
      "footer.address": "Республика Алтай, с. Верхний Уймон, ул. Горная, 7",
      "footer.phone": "+7 (495) 123-45-67",
      "footer.email": "stay@vershina-hotel.ru",
      "footer.copy": "© 2025 Отель «Вершина». Все права защищены.",
  
      /* — Кнопки — */
      "btn.book": "Забронировать",
      "btn.more": "Подробнее",
      "btn.viewRooms": "Смотреть номера",
      "btn.allRooms": "Все номера",
      "btn.showMore": "Показать ещё",
      "btn.send": "Отправить",
      "btn.leaveReview": "Оставить отзыв",
      "btn.contactUs": "Связаться с нами",
  
      /* — index.html — */
      "hero.title": "Тишина, воздух и <strong>панорама гор</strong>",
      "hero.subtitle": "Бутик-отель на 24 номера высоко в горах. Панорамные окна, авторская кухня, спа и полное отсутствие суеты.",
      "hero.bookNow": "Забронировать номер",
      "hero.explore": "Узнать больше",
  
      "stats.years": "лет гостеприимства",
      "stats.rooms": "уникальных номеров",
      "stats.guests": "гостей ежегодно",
      "stats.rating": "средняя оценка",
  
      "about.tag": "О нас",
      "about.title": "Отель, в который хочется вернуться",
      "about.text1": "«Вершина» — это 24 номера, каждый из которых спроектирован как отдельное пространство для отдыха. Мы соединили минимализм, натуральные материалы и панорамные окна, чтобы вы могли жить внутри пейзажа.",
      "about.text2": "Утренний кофе на террасе, спа-ритуалы после долгой прогулки, ужин от шефа с локальными продуктами — всё подчинено одной идее: у вас должно остаться ощущение, что вы провели время не в отеле, а в собственной горной резиденции.",
      "about.point1": "Панорамные окна в каждом номере",
      "about.point2": "Авторская кухня и локальные продукты",
      "about.point3": "Приватная терраса и спа-центр",
  
      "featured.tag": "Размещение",
      "featured.title": "Избранные номера",
      "featured.sub": "Три категории, которые чаще всего выбирают наши гости. Полный список — в разделе «Номера».",
  
      "adv.title": "Почему выбирают нас",
      "adv.sub": "Четыре причины, по которым гости возвращаются в «Вершину» снова.",
      "adv.spa.title": "Спа и баня",
      "adv.spa.text": "Финская сауна, кедровая фито-бочка и авторские массажные ритуалы по предварительной записи.",
      "adv.food.title": "Ресторан «Панорама»",
      "adv.food.text": "Сезонное меню, локальные продукты и винная карта из 80 позиций. Завтрак включён.",
      "adv.transfer.title": "Трансфер из аэропорта",
      "adv.transfer.text": "Комфортный трансфер на Mercedes V-class. Встреча с табличкой в зале прилёта.",
      "adv.privacy.title": "Полная приватность",
      "adv.privacy.text": "Никаких шумных мероприятий и посторонних. Только вы, горы и тишина.",
  
      "reviews.tag": "Отзывы",
      "reviews.title": "Что говорят гости",
      "reviews.sub": "Мы собираем обратную связь после каждого заезда — и публикуем её без купюр.",
  
      "map.title": "Как нас найти",
      "map.sub": "Мы находимся в 12 км от трассы Р-256, в стороне от шумных туристических маршрутов.",
      "map.address": "Республика Алтай, с. Верхний Уймон, ул. Горная, 7",
  
      "cta.title": "Забронируйте <span>напрямую</span> — выгоднее на 15%",
      "cta.sub": "Без комиссий агрегаторов. Гибкие условия отмены.",
  
      /* — rooms.html — */
      "rooms.tag": "Размещение",
      "rooms.title": "Номера и категории",
      "rooms.sub": "8 категорий — от компактного стандарта до сьюта с камином и приватной террасой.",
      "rooms.filter.all": "Все",
      "rooms.filter.standard": "Стандарт",
      "rooms.filter.lux": "Люкс",
      "rooms.filter.panorama": "Панорамный",
      "rooms.filter.suite": "Сьют",
      "rooms.included.title": "Что входит в стоимость",
      "rooms.included.sub": "Независимо от категории номера.",
      "rooms.night": "ночь",
  
      "included.breakfast": "Завтрак",
      "included.wifi": "Wi-Fi",
      "included.parking": "Парковка",
      "included.spa": "Бассейн и сауна",
      "included.terrace": "Терраса",
      "included.concierge": "Консьерж-сервис",
  
      /* — advantages.html — */
      "advpage.tag": "Преимущества",
      "advpage.title": "Всё для того, чтобы вы остались",
      "advpage.sub": "Шесть причин, ради которых стоит приехать именно к нам.",
      "advpage.spa.title": "Спа-центр «Вершина»",
      "advpage.spa.text": "500 м² приватного спа: бассейн с панорамой, две сауны, кедровая бочка, шесть кабинетов массажа. Бронируется по слотам — вы не встретите других гостей.",
      "advpage.food.title": "Ресторан авторской кухни",
      "advpage.food.text": "Шеф Артём Белов работает с локальными продуктами: алтайский мёд, дичь, травы с горных плато. Меню меняется 4 раза в год.",
      "advpage.transfer.title": "Трансфер и логистика",
      "advpage.transfer.text": "Встречаем в аэропорту Горно-Алтайска, организуем вертолётную заброску в горы, арендуем внедорожники с водителем.",
      "advpage.concierge.title": "Персональный консьерж",
      "advpage.concierge.text": "Составим маршрут, забронируем гида, организуем фотосессию, подготовим номер к приезду — от цветов до охлаждённого шампанского.",
      "advpage.terrace.title": "Панорамная терраса",
      "advpage.terrace.text": "Открытая терраса на высоте 1200 м над уровнем моря. Вечерние закаты, наблюдение за звёздами, ужины под открытым небом.",
      "advpage.privacy.title": "Полная приватность",
      "advpage.privacy.text": "Отель принимает не более 40 гостей одновременно. Никаких корпоративов, шумных свадеб и посторонних на территории.",
  
      "infra.title": "Инфраструктура",
      "infra.sub": "Всё, что нужно для комфортного отдыха, — на территории отеля.",
      "infra.pool": "Бассейн",
      "infra.sauna": "Сауна",
      "infra.gym": "Фитнес-зал",
      "infra.parking": "Парковка",
      "infra.wifi": "Быстрый Wi-Fi",
      "infra.breakfast": "Завтрак",
  
      "how.title": "Как мы работаем",
      "how.sub": "Четыре шага от идеи до заселения.",
      "how.step1.title": "Выбираете номер",
      "how.step1.text": "На сайте или по телефону — консьерж подберёт категорию под ваш запрос.",
      "how.step2.title": "Подтверждаем бронь",
      "how.step2.text": "Присылаем подтверждение и предоплату 20% — остальное при заселении.",
      "how.step3.title": "Готовим номер",
      "how.step3.text": "За день до заезда уточняем пожелания: температура, подушки, напитки, цветы.",
      "how.step4.title": "Встречаем вас",
      "how.step4.text": "Трансфер, ранний завтрак, прогрев номера — по запросу.",
  
      "awards.title": "Награды и признание",
      "awards.sub": "Мы не гонимся за рейтингами, но иногда они нас находят.",
      "awards.item1": "Best Mountain Hotel 2024 — Hospitality Awards",
      "awards.item2": "Top 10 Boutique Hotels Russia — Condé Nast",
      "awards.item3": "Гастрономическое открытие года — Wheretoeat",
  
      /* — reviews.html — */
      "rev.tag": "Отзывы",
      "rev.title": "Что говорят гости",
      "rev.sub": "Собираем обратную связь после каждого заезда и публикуем без правок.",
      "rev.rating.title": "Средняя оценка",
      "rev.rating.count": "на основе 268 отзывов",
      "rev.rating.excellent": "Отлично",
      "rev.rating.good": "Хорошо",
      "rev.rating.ok": "Нормально",
      "rev.rating.bad": "Плохо",
      "rev.rating.terrible": "Ужасно",
      "rev.form.title": "Оставить отзыв",
      "rev.form.sub": "Ваш отзыв появится на сайте сразу после отправки.",
      "rev.form.name": "Ваше имя",
      "rev.form.city": "Город",
      "rev.form.rating": "Оценка",
      "rev.form.text": "Текст отзыва",
      "rev.form.submit": "Опубликовать отзыв",
      "rev.platforms.title": "Мы также на площадках",
      "rev.platforms.sub": "Оставьте отзыв там, где вам удобно.",
  
      /* — contacts.html — */
      "contact.tag": "Контакты",
      "contact.title": "Свяжитесь с нами",
      "contact.sub": "Консьерж отвечает в течение 15 минут в рабочее время.",
      "contact.address.label": "Адрес",
      "contact.phone.label": "Телефон",
      "contact.email.label": "Email",
      "contact.hours.label": "Часы работы",
      "contact.hours.value": "Круглосуточно, 365 дней в году",
      "contact.form.title": "Обратная связь",
      "contact.form.sub": "Опишите ваш запрос — мы ответим в течение дня.",
      "contact.form.name": "Имя",
      "contact.form.email": "Email",
      "contact.form.message": "Сообщение",
      "contact.form.submit": "Отправить сообщение",
      "contact.directions.title": "Как добраться",
      "contact.directions.sub": "Три способа доехать до отеля.",
      "contact.direction.car.title": "На автомобиле",
      "contact.direction.car.text": "По трассе Р-256 до поворота на Верхний Уймон, далее 12 км по указателям. Парковка на территории.",
      "contact.direction.train.title": "На поезде",
      "contact.direction.train.text": "До станции Бийск, далее трансфер отеля (2,5 часа). Бронируется за 24 часа.",
      "contact.direction.plane.title": "На самолёте",
      "contact.direction.plane.text": "Аэропорт Горно-Алтайск, далее трансфер отеля (1,5 часа). Встреча с табличкой.",
  
      /* — Модалка бронирования — */
      "modal.book.title": "Бронирование",
      "modal.book.sub": "Заполните форму — консьерж свяжется с вами в течение 15 минут.",
      "modal.book.name": "Имя и фамилия",
      "modal.book.phone": "Телефон",
      "modal.book.checkin": "Дата заезда",
      "modal.book.checkout": "Дата выезда",
      "modal.book.roomtype": "Тип номера",
      "modal.book.guests": "Гостей",
      "modal.book.submit": "Отправить заявку",
      "modal.book.success.title": "Заявка отправлена",
      "modal.book.success.text": "Консьерж свяжется с вами в течение 15 минут для подтверждения брони.",
  
      /* — Модалка номера — */
      "modal.room.amenities": "Удобства",
      "modal.room.book": "Забронировать этот номер",
  
      /* — Форма: ошибки — */
      "error.required": "Обязательное поле",
      "error.name": "Введите имя (не менее 2 символов)",
      "error.phone": "Введите корректный телефон",
      "error.email": "Введите корректный email",
      "error.rating": "Поставьте оценку",
      "error.text": "Слишком короткий текст",
      "error.date": "Выберите дату",
      "error.dateOrder": "Дата выезда позже заезда",
      "error.guests": "Укажите количество гостей",
  
      /* — Отзывы: города (демо) — */
      "review.city.moscow": "Москва",
      "review.city.spb": "Санкт-Петербург",
      "review.city.nsk": "Новосибирск",
      "review.city.ekb": "Екатеринбург",
      "review.city.kzn": "Казань"
    },
  
    en: {
      "nav.home": "Home",
      "nav.rooms": "Rooms",
      "nav.advantages": "Advantages",
      "nav.reviews": "Reviews",
      "nav.contacts": "Contacts",
      "nav.book": "Book now",
  
      "footer.about.title": "Hotel Vershina",
      "footer.about.text": "Premium mountain boutique hotel. 24 rooms, spa, panoramic restaurant and a private terrace overlooking the peaks.",
      "footer.nav.title": "Navigation",
      "footer.contacts.title": "Contacts",
      "footer.address": "Altai Republic, Verkhny Uymon, Gornaya st. 7",
      "footer.phone": "+7 (495) 123-45-67",
      "footer.email": "stay@vershina-hotel.ru",
      "footer.copy": "© 2025 Hotel Vershina. All rights reserved.",
  
      "btn.book": "Book now",
      "btn.more": "Details",
      "btn.viewRooms": "View rooms",
      "btn.allRooms": "All rooms",
      "btn.showMore": "Show more",
      "btn.send": "Send",
      "btn.leaveReview": "Leave a review",
      "btn.contactUs": "Contact us",
  
      "hero.title": "Silence, air and a <strong>mountain panorama</strong>",
      "hero.subtitle": "A 24-room boutique hotel high in the mountains. Panoramic windows, signature cuisine, spa and no rush at all.",
      "hero.bookNow": "Book a room",
      "hero.explore": "Discover more",
  
      "stats.years": "years of hospitality",
      "stats.rooms": "unique rooms",
      "stats.guests": "guests per year",
      "stats.rating": "average rating",
  
      "about.tag": "About",
      "about.title": "A hotel you want to return to",
      "about.text1": "Vershina is 24 rooms, each designed as a standalone space for rest. We combined minimalism, natural materials and panoramic windows so you could live inside the landscape.",
      "about.text2": "Morning coffee on the terrace, spa rituals after a long hike, a chef's dinner with local produce — everything serves one idea: you should feel you stayed not in a hotel, but in your own mountain residence.",
      "about.point1": "Panoramic windows in every room",
      "about.point2": "Signature cuisine with local produce",
      "about.point3": "Private terrace and spa",
  
      "featured.tag": "Accommodation",
      "featured.title": "Featured rooms",
      "featured.sub": "Three categories our guests choose most often. Full list — in the Rooms section.",
  
      "adv.title": "Why guests choose us",
      "adv.sub": "Four reasons guests return to Vershina again and again.",
      "adv.spa.title": "Spa & sauna",
      "adv.spa.text": "Finnish sauna, cedar phyto-barrel and signature massage rituals by appointment.",
      "adv.food.title": "Panorama Restaurant",
      "adv.food.text": "Seasonal menu, local produce and an 80-position wine list. Breakfast included.",
      "adv.transfer.title": "Airport transfer",
      "adv.transfer.text": "Comfortable transfer in a Mercedes V-class. Meet-and-greet at arrivals.",
      "adv.privacy.title": "Complete privacy",
      "adv.privacy.text": "No noisy events, no strangers. Just you, the mountains and silence.",
  
      "reviews.tag": "Reviews",
      "reviews.title": "What guests say",
      "reviews.sub": "We collect feedback after every stay — and publish it unedited.",
  
      "map.title": "How to find us",
      "map.sub": "We are 12 km from the R-256 highway, away from noisy tourist routes.",
      "map.address": "Altai Republic, Verkhny Uymon, Gornaya st. 7",
  
      "cta.title": "Book <span>directly</span> — 15% cheaper",
      "cta.sub": "No aggregator commissions. Flexible cancellation terms.",
  
      "rooms.tag": "Accommodation",
      "rooms.title": "Rooms & categories",
      "rooms.sub": "8 categories — from a compact standard to a suite with a fireplace and private terrace.",
      "rooms.filter.all": "All",
      "rooms.filter.standard": "Standard",
      "rooms.filter.lux": "Deluxe",
      "rooms.filter.panorama": "Panoramic",
      "rooms.filter.suite": "Suite",
      "rooms.included.title": "Included in the rate",
      "rooms.included.sub": "Regardless of room category.",
      "rooms.night": "night",
  
      "included.breakfast": "Breakfast",
      "included.wifi": "Wi-Fi",
      "included.parking": "Parking",
      "included.spa": "Pool & sauna",
      "included.terrace": "Terrace",
      "included.concierge": "Concierge service",
  
      "advpage.tag": "Advantages",
      "advpage.title": "Everything to make you stay",
      "advpage.sub": "Six reasons to come to us specifically.",
      "advpage.spa.title": "Vershina Spa",
      "advpage.spa.text": "500 m² of private spa: panoramic pool, two saunas, cedar barrel, six massage rooms. Booked by slot — you won't meet other guests.",
      "advpage.food.title": "Signature cuisine restaurant",
      "advpage.food.text": "Chef Artyom Belov works with local produce: Altai honey, game, herbs from mountain plateaus. The menu changes 4 times a year.",
      "advpage.transfer.title": "Transfer & logistics",
      "advpage.transfer.text": "We meet you at Gorno-Altaysk airport, arrange helicopter transfers to the mountains, rent 4x4 vehicles with a driver.",
      "advpage.concierge.title": "Personal concierge",
      "advpage.concierge.text": "We plan your route, book a guide, arrange a photoshoot, prepare your room — from flowers to chilled champagne.",
      "advpage.terrace.title": "Panoramic terrace",
      "advpage.terrace.text": "Open terrace at 1200 m above sea level. Evening sunsets, stargazing, dinners in the open air.",
      "advpage.privacy.title": "Complete privacy",
      "advpage.privacy.text": "The hotel hosts no more than 40 guests at a time. No corporate events, no noisy weddings, no strangers on site.",
  
      "infra.title": "Infrastructure",
      "infra.sub": "Everything for a comfortable stay — on the hotel territory.",
      "infra.pool": "Pool",
      "infra.sauna": "Sauna",
      "infra.gym": "Gym",
      "infra.parking": "Parking",
      "infra.wifi": "Fast Wi-Fi",
      "infra.breakfast": "Breakfast",
  
      "how.title": "How we work",
      "how.sub": "Four steps from idea to check-in.",
      "how.step1.title": "Choose a room",
      "how.step1.text": "On the website or by phone — the concierge will match a category to your request.",
      "how.step2.title": "Confirm the booking",
      "how.step2.text": "We send confirmation and a 20% prepayment — the rest on check-in.",
      "how.step3.title": "Prepare your room",
      "how.step3.text": "A day before arrival we clarify preferences: temperature, pillows, drinks, flowers.",
      "how.step4.title": "Welcome you",
      "how.step4.text": "Transfer, early breakfast, pre-warmed room — on request.",
  
      "awards.title": "Awards & recognition",
      "awards.sub": "We don't chase ratings, but sometimes they find us.",
      "awards.item1": "Best Mountain Hotel 2024 — Hospitality Awards",
      "awards.item2": "Top 10 Boutique Hotels Russia — Condé Nast",
      "awards.item3": "Gastronomic Discovery of the Year — Wheretoeat",
  
      "rev.tag": "Reviews",
      "rev.title": "What guests say",
      "rev.sub": "We collect feedback after every stay and publish it unedited.",
      "rev.rating.title": "Average rating",
      "rev.rating.count": "based on 268 reviews",
      "rev.rating.excellent": "Excellent",
      "rev.rating.good": "Good",
      "rev.rating.ok": "Okay",
      "rev.rating.bad": "Bad",
      "rev.rating.terrible": "Terrible",
      "rev.form.title": "Leave a review",
      "rev.form.sub": "Your review will appear on the site right after submission.",
      "rev.form.name": "Your name",
      "rev.form.city": "City",
      "rev.form.rating": "Rating",
      "rev.form.text": "Review text",
      "rev.form.submit": "Publish review",
      "rev.platforms.title": "We are also on platforms",
      "rev.platforms.sub": "Leave a review wherever is convenient for you.",
  
      "contact.tag": "Contacts",
      "contact.title": "Get in touch",
      "contact.sub": "The concierge replies within 15 minutes during working hours.",
      "contact.address.label": "Address",
      "contact.phone.label": "Phone",
      "contact.email.label": "Email",
      "contact.hours.label": "Working hours",
      "contact.hours.value": "24/7, 365 days a year",
      "contact.form.title": "Feedback",
      "contact.form.sub": "Describe your request — we'll reply within the day.",
      "contact.form.name": "Name",
      "contact.form.email": "Email",
      "contact.form.message": "Message",
      "contact.form.submit": "Send message",
      "contact.directions.title": "How to get here",
      "contact.directions.sub": "Three ways to reach the hotel.",
      "contact.direction.car.title": "By car",
      "contact.direction.car.text": "Along the R-256 highway to the Verkhny Uymon turn, then 12 km following signs. Parking on site.",
      "contact.direction.train.title": "By train",
      "contact.direction.train.text": "To Biysk station, then hotel transfer (2.5 hours). Booked 24 hours in advance.",
      "contact.direction.plane.title": "By plane",
      "contact.direction.plane.text": "Gorno-Altaysk airport, then hotel transfer (1.5 hours). Meet-and-greet with a sign.",
  
      "modal.book.title": "Booking",
      "modal.book.sub": "Fill in the form — the concierge will contact you within 15 minutes.",
      "modal.book.name": "Full name",
      "modal.book.phone": "Phone",
      "modal.book.checkin": "Check-in date",
      "modal.book.checkout": "Check-out date",
      "modal.book.roomtype": "Room type",
      "modal.book.guests": "Guests",
      "modal.book.submit": "Send request",
      "modal.book.success.title": "Request sent",
      "modal.book.success.text": "The concierge will contact you within 15 minutes to confirm your booking.",
  
      "modal.room.amenities": "Amenities",
      "modal.room.book": "Book this room",
  
      "error.required": "Required field",
      "error.name": "Enter a name (at least 2 characters)",
      "error.phone": "Enter a valid phone number",
      "error.email": "Enter a valid email",
      "error.rating": "Please rate",
      "error.text": "Text is too short",
      "error.date": "Choose a date",
      "error.dateOrder": "Check-out must be after check-in",
      "error.guests": "Specify number of guests",
  
      "review.city.moscow": "Moscow",
      "review.city.spb": "Saint Petersburg",
      "review.city.nsk": "Novosibirsk",
      "review.city.ekb": "Yekaterinburg",
      "review.city.kzn": "Kazan"
    }
  };
  
  /* ---------- Ядро i18n ---------- */
  const I18n = (() => {
    const STORAGE_KEY = 'vershina-lang';
    const DEFAULT_LANG = 'ru';
    let currentLang = DEFAULT_LANG;
  
    function t(key) {
      const dict = TRANSLATIONS[currentLang] || TRANSLATIONS[DEFAULT_LANG];
      return dict[key] || TRANSLATIONS[DEFAULT_LANG][key] || key;
    }
  
    function apply(root = document) {
      root.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const value = t(key);
        if (el.dataset.i18nHtml === 'true') {
          el.innerHTML = value;
        } else {
          el.textContent = value;
        }
      });
  
      root.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder));
      });
  
      root.querySelectorAll('[data-i18n-aria]').forEach(el => {
        el.setAttribute('aria-label', t(el.dataset.i18nAria));
      });
  
      document.documentElement.lang = currentLang;
    }
  
    function set(lang) {
      if (!TRANSLATIONS[lang]) return;
      currentLang = lang;
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
      document.documentElement.setAttribute('data-lang', lang);
      document.querySelectorAll('.lang__btn').forEach(btn => {
        btn.classList.toggle('is-active', btn.dataset.lang === lang);
      });
      apply();
      document.dispatchEvent(new CustomEvent('i18n:changed', { detail: { lang } }));
    }
  
    function init() {
      let saved = null;
      try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
      const initial = saved && TRANSLATIONS[saved] ? saved : DEFAULT_LANG;
  
      document.querySelectorAll('.lang__btn').forEach(btn => {
        btn.addEventListener('click', () => set(btn.dataset.lang));
      });
  
      set(initial);
    }
  
    return { t, apply, set, init, get lang() { return currentLang; } };
  })();
  
  window.I18n = I18n;