(() => {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const endpoint = 'https://apartmarketing-form.aa14mart.workers.dev/';
  const copy = {
    ru: {
      photos: "Фото объекта (необязательно)",
      photoHint: "До 10 файлов: до 20 МБ каждый, до 25 МБ вместе. Фото с iPhone и Android, RAW; MOV/MP4 для Live Photo. Оригиналы без сжатия.",
      filesError: "Проверьте файлы: до 10, до 20 МБ каждый и до 25 МБ вместе. Пустые и неподдерживаемые файлы не принимаются.",
      partial: "Текст заявки отправлен, но доставка вложений не подтверждена. Пришлите фото отдельно в Telegram по ссылке выше. Повторять заявку не нужно.",
      remove: "Удалить",

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
      photos: "Property photos (optional)",
      photoHint: "Up to 10 files: 20 MB each, 25 MB combined. iPhone, Android and RAW photos; MOV/MP4 for Live Photos. Originals without compression.",
      filesError: "Check files: up to 10, 20 MB each and 25 MB combined. Empty or unsupported files cannot be sent.",
      partial: "Your message was sent, but attachment delivery could not be confirmed. Please send photos separately via Telegram above; do not resend the request.",
      remove: "Remove",

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
      photos: "ობიექტის ფოტოები (არასავალდებულო)",
      photoHint: "მაქსიმუმ 10 ფაილი: თითოეული 20 მბ-მდე, სულ 25 მბ-მდე. iPhone, Android, RAW; MOV/MP4 Live Photo-სთვის. ორიგინალები შეკუმშვის გარეშე.",
      filesError: "შეამოწმეთ ფაილები: მაქსიმუმ 10, თითოეული 20 მბ-მდე და სულ 25 მბ-მდე. ცარიელი ან დაუშვებელი ფაილები არ მიიღება.",
      partial: "მოთხოვნა გაიგზავნა, მაგრამ დანართების მიწოდება ვერ დადასტურდა. ფოტოები გამოგვიგზავნეთ Telegram-ით. მოთხოვნის ხელახლა გაგზავნა საჭირო არ არის.",
      remove: "წაშლა",

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
  const allowedExtensions = new Set(["jpg", "jpeg", "jpe", "jfif", "png", "heic", "heif", "hif", "avif", "webp", "gif", "bmp", "dib", "tif", "tiff", "dng", "raw", "cr2", "cr3", "nef", "nrw", "arw", "srf", "sr2", "raf", "rw2", "rwl", "orf", "ori", "pef", "ptx", "srw", "x3f", "3fr", "fff", "iiq", "kdc", "dcr", "erf", "mos", "mef", "mrw", "tga", "jp2", "j2k", "jpf", "jpx", "jpm", "mj2", "jxl", "jxr", "wdp", "hdp", "mpo", "mov", "mp4", "m4v"]);
  const picker = form.querySelector('[name=photos]');
  const fileList = form.querySelector('.contact-form__files');
  let files = [];
  let pending = false;
  let statusKey = '';
  const dictionary = () => copy[document.documentElement.lang] || copy.ru;
  const render = () => {
    const text = dictionary();
    form.querySelectorAll('[data-form-text]').forEach(el => { el.textContent = text[el.dataset.formText]; });
    button.textContent = pending ? text.sending : text.submit;
    status.textContent = statusKey ? text[statusKey] : '';
    fileList.replaceChildren();
    files.forEach((file, index) => {
      const item = document.createElement('li');
      const label = document.createElement('span');
      label.textContent = `${file.name} (${(file.size / 1048576).toFixed(1)} MB)`;
      const remove = document.createElement('button');
      remove.type = 'button'; remove.textContent = text.remove; remove.disabled = pending;
      remove.setAttribute('aria-label', `${text.remove}: ${file.name}`);
      remove.addEventListener('click', () => { files.splice(index, 1); statusKey = ''; render(); });
      item.append(label, remove); fileList.append(item);
    });
  };
  new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  const validFiles = items => items.length <= 10 && items.reduce((sum, file) => sum + file.size, 0) <= 25 * 1048576 && items.every(file => file.size > 0 && file.size <= 20 * 1048576 && allowedExtensions.has(file.name.split('.').pop().toLowerCase()));
  picker.addEventListener('change', () => {
    const next = [...files, ...picker.files];
    if (!validFiles(next)) { statusKey = 'filesError'; status.dataset.state = 'error'; }
    else { files = next; statusKey = ''; delete status.dataset.state; }
    picker.value = ''; render();
  });
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
    if (!validFiles(files)) { statusKey = 'filesError'; render(); return; }
    pending = true; picker.disabled = true; button.disabled = true; form.setAttribute('aria-busy', 'true');
    statusKey = ''; delete status.dataset.state; render();
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 120000);
    const payload = new FormData();
    for (const key of ['name', 'contact', 'message', 'website']) payload.append(key, data[key] || '');
    files.forEach(file => payload.append('photos', file, file.name));
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: payload, signal: controller.signal, credentials: 'omit'
      });
      if (response.status === 429) { statusKey = 'limited'; throw new Error('Rate limit'); }
      const result = await response.json();
      if (result.code === 'FILES_INVALID') statusKey = 'filesError';
      if (!response.ok || result.ok !== true) throw new Error('Delivery failed');
      statusKey = result.filesDelivered === false ? 'partial' : 'success'; status.dataset.state = result.filesDelivered === false ? 'error' : 'success'; form.reset(); files = [];
    } catch {
      statusKey = statusKey || 'error'; status.dataset.state = 'error';
    } finally {
      clearTimeout(timeout); pending = false; button.disabled = false; picker.disabled = false;
      form.removeAttribute('aria-busy'); render();
    }
  });
})();
