(() => {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const endpoint = 'https://apartmarketing-form.aa14mart.workers.dev/';
  const copy = {
    ru: {
      title: 'ОБСУДИТЬ СЪЕМКУ', name: 'Ваше имя', contact: 'Телефон или Telegram',
      hint: 'Укажите номер с кодом страны или @имя в Telegram.',
      message: 'Расскажите об объекте и желаемой дате (необязательно)',
      note: 'Заявка будет передана команде APART MARKETING в Telegram, чтобы мы могли связаться с вами.',
      submit: 'ОТПРАВИТЬ ЗАЯВКУ', sending: 'ОТПРАВЛЯЕМ…',
      success: 'Заявка отправлена. Мы свяжемся с вами по указанному контакту.',
      error: 'Не удалось подтвердить отправку. Попробуйте позже или свяжитесь с нами по телефону или в Telegram выше.',
      invalid: 'Проверьте имя и контакт: поля не должны состоять из пробелов.',
      limited: 'Слишком много попыток. Подождите немного и попробуйте снова.'
    },
    en: {
      title: 'DISCUSS YOUR SHOOT', name: 'Your name', contact: 'Phone or Telegram',
      hint: 'Include the country code or your Telegram @username.',
      message: 'Property details and preferred date (optional)',
      note: 'Your request will be sent to the APART MARKETING team via Telegram so we can contact you.',
      submit: 'SEND REQUEST', sending: 'SENDING…',
      success: 'Request sent. We will contact you using the details provided.',
      error: 'We could not confirm delivery. Try later or contact us by phone or Telegram above.',
      invalid: 'Please enter a name and contact, not just spaces.',
      limited: 'Too many attempts. Please wait a little and try again.'
    },
    ka: {
      title: 'განვიხილოთ გადაღება', name: 'თქვენი სახელი', contact: 'ტელეფონი ან Telegram',
      hint: 'მიუთითეთ ნომერი ქვეყნის კოდით ან Telegram-ის @მომხმარებლის სახელი.',
      message: 'ობიექტის დეტალები და სასურველი თარიღი (არასავალდებულო)',
      note: 'თქვენი მოთხოვნა Telegram-ის საშუალებით გაეგზავნება APART MARKETING-ის გუნდს, რათა დაგიკავშირდეთ.',
      submit: 'მოთხოვნის გაგზავნა', sending: 'იგზავნება…',
      success: 'მოთხოვნა გაიგზავნა. დაგიკავშირდებით მითითებულ საკონტაქტო ინფორმაციაზე.',
      error: 'გაგზავნა ვერ დადასტურდა. სცადეთ მოგვიანებით ან დაგვიკავშირდით ზემოთ მითითებული ტელეფონით ან Telegram-ით.',
      invalid: 'შეიყვანეთ სახელი და საკონტაქტო ინფორმაცია.',
      limited: 'ძალიან ბევრი მცდელობაა. ცოტა ხანში სცადეთ ხელახლა.'
    }
  };
  const button = form.querySelector('button[type="submit"]');
  const status = form.querySelector('[role="status"]');
  let pending = false;
  let statusKey = '';
  const dictionary = () => copy[document.documentElement.lang] || copy.ru;
  const render = () => {
    const text = dictionary();
    form.querySelectorAll('[data-form-text]').forEach(el => { el.textContent = text[el.dataset.formText]; });
    button.textContent = pending ? text.sending : text.submit;
    status.textContent = statusKey ? text[statusKey] : '';
  };
  new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  render();
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (pending || !form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form));
    data.name = data.name.trim();
    data.contact = data.contact.trim();
    data.message = data.message.trim();
    if (!data.name || data.contact.length < 3) {
      statusKey = 'invalid'; status.dataset.state = 'error'; render(); return;
    }
    pending = true; button.disabled = true; form.setAttribute('aria-busy', 'true');
    statusKey = ''; delete status.dataset.state; render();
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(endpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data), signal: controller.signal, credentials: 'omit'
      });
      if (response.status === 429) { statusKey = 'limited'; throw new Error('Rate limit'); }
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error('Delivery failed');
      statusKey = 'success'; status.dataset.state = 'success'; form.reset();
    } catch {
      statusKey = statusKey || 'error'; status.dataset.state = 'error';
    } finally {
      clearTimeout(timeout); pending = false; button.disabled = false;
      form.removeAttribute('aria-busy'); render();
    }
  });
})();
