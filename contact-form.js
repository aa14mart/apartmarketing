(() => {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const copy = {"ru":{"photos":"Фото объекта (необязательно)","photoHint":"до 5 фото, до 10 МБ каждое","filesError":"Проверьте файлы: до 10, до 20 МБ каждый и до 25 МБ вместе. Пустые и неподдерживаемые файлы не принимаются.","partial":"Текст заявки уже отправлен. Не все файлы доставлены. Нажмите «ДОСЛАТЬ ФАЙЛЫ» — текст повторно не отправится.","remove":"Удалить","title":"ОБСУДИТЬ СЪЕМКУ","name":"Ваше имя (обязательно)","contact":"Телефон или Telegram","hint":"Укажите номер с кодом страны или @имя в Telegram.","message":"Опишите задачу или задайте вопрос (необязательно)","note":"Имя и один контакт обязательны. Заявка и файлы будут переданы команде APART MARKETING в Telegram.","submit":"ОТПРАВИТЬ","sending":"ОТПРАВЛЯЕМ…","success":"Заявка отправлена. Мы свяжемся с вами по указанному контакту.","error":"Не удалось подтвердить отправку. Попробуйте позже или свяжитесь с нами по телефону или в Telegram выше.","invalid":"Проверьте имя и контакт: поля не должны состоять из пробелов.","limited":"Слишком много попыток. Подождите немного и попробуйте снова.","method":"Способ связи (обязательно)","call":"Позвоните мне","phone":"Номер телефона","username":"Имя пользователя","messengerLabel":"Ссылка на профиль Facebook или Messenger","country":"Страна и телефонный код","callHint":"Грузия: 9 цифр после +995.","phoneHint":"Выберите страну и укажите номер телефона.","usernameHint":"Можно вставить имя с @ или ссылку на профиль.","messengerHint":"Например, https://www.facebook.com/username","nameError":"Укажите ваше имя.","methodError":"Выберите способ связи.","contactError":"Проверьте контакт для выбранного способа связи.","callError":"Введите ровно 9 цифр после +995.","fileType":"Неподдерживаемый формат.","fileEmpty":"Файл пустой.","fileSize":"Файл больше 10 МБ.","fileCount":"Можно прикрепить не больше 5 файлов.","fileDuplicate":"Этот файл уже добавлен.","retry":"ДОСЛАТЬ ФАЙЛЫ","expired":"Текст заявки отправлен, но время загрузки файлов истекло. Пришлите оставшиеся фото через Telegram выше.","sendingFiles":"ОТПРАВЛЯЕМ ФАЙЛЫ","sent":"Доставлен","upload":"Ожидает отправки","uploadButton":"ЗАГРУЗИТЬ"},"en":{"photos":"Property photos (optional)","photoHint":"up to 5 photos, up to 10 MB each","filesError":"Check files: up to 10, 20 MB each and 25 MB combined. Empty or unsupported files cannot be sent.","partial":"Your message has been sent. Some files were not delivered. Retry the file upload; your message will not be sent again.","remove":"Remove","title":"DISCUSS YOUR SHOOT","name":"Your name (required)","contact":"Phone or Telegram","hint":"Include the country code or your Telegram @username.","message":"Describe your task or ask a question. (optional)","note":"Your name and one contact are required. Your request and files will be sent to the APART MARKETING team via Telegram.","submit":"SEND","sending":"SENDING…","success":"Request sent. We will contact you using the details provided.","error":"We could not confirm delivery. Try later or contact us by phone or Telegram above.","invalid":"Please enter a name and contact, not just spaces.","limited":"Too many attempts. Please wait a little and try again.","method":"Contact method (required)","call":"Call me","phone":"Phone number","username":"Username","messengerLabel":"Facebook or Messenger profile link","country":"Country and calling code","callHint":"Georgia: 9 digits after +995.","phoneHint":"Choose a country and enter your phone number.","usernameHint":"You can paste a username with @ or a profile link.","messengerHint":"For example, https://www.facebook.com/username","nameError":"Enter your name.","methodError":"Choose a contact method.","contactError":"Check the contact for your selected method.","callError":"Enter exactly 9 digits after +995.","fileType":"Unsupported format.","fileEmpty":"Empty file.","fileSize":"File is larger than 10 MB.","fileCount":"You can attach up to 5 files.","fileDuplicate":"This file has already been added.","retry":"RETRY FILE UPLOAD","expired":"Your message was sent, but file upload time has expired. Send the remaining files via Telegram above.","sendingFiles":"SENDING FILES","sent":"Delivered","upload":"Waiting","uploadButton":"UPLOAD"},"ka":{"photos":"ობიექტის ფოტოები (არასავალდებულო)","photoHint":"5 ფოტომდე, თითოეული 10 მბ-მდე","filesError":"შეამოწმეთ ფაილები: მაქსიმუმ 10, თითოეული 20 მბ-მდე და სულ 25 მბ-მდე. ცარიელი ან დაუშვებელი ფაილები არ მიიღება.","partial":"მოთხოვნა გაიგზავნა. ზოგი ფაილი ვერ გაიგზავნა. ხელახლა გაგზავნეთ ფაილები — მოთხოვნა აღარ განმეორდება.","remove":"წაშლა","title":"განვიხილოთ გადაღება","name":"თქვენი სახელი (სავალდებულო)","contact":"ტელეფონი ან Telegram","hint":"მიუთითეთ ნომერი ქვეყნის კოდით ან Telegram-ის @მომხმარებლის სახელი.","message":"აღწერეთ დავალება ან დასვით შეკითხვა. (არასავალდებულო)","note":"სახელი და ერთი საკონტაქტო ინფორმაცია სავალდებულოა. მოთხოვნა და ფაილები Telegram-ით გადაეცემა APART MARKETING-ის გუნდს.","submit":"მოთხოვნის გაგზავნა","sending":"იგზავნება…","success":"მოთხოვნა გაიგზავნა. დაგიკავშირდებით მითითებულ საკონტაქტო ინფორმაციაზე.","error":"გაგზავნა ვერ დადასტურდა. სცადეთ მოგვიანებით ან დაგვიკავშირდით ზემოთ მითითებული ტელეფონით ან Telegram-ით.","invalid":"შეიყვანეთ სახელი და საკონტაქტო ინფორმაცია.","limited":"ძალიან ბევრი მცდელობაა. ცოტა ხანში სცადეთ ხელახლა.","method":"დაკავშირების გზა (სავალდებულო)","call":"დამირეკეთ","phone":"ტელეფონის ნომერი","username":"მომხმარებლის სახელი","messengerLabel":"Facebook-ის ან Messenger-ის პროფილის ბმული","country":"ქვეყანა და სატელეფონო კოდი","callHint":"საქართველო: 9 ციფრი +995-ის შემდეგ.","phoneHint":"აირჩიეთ ქვეყანა და მიუთითეთ ტელეფონის ნომერი.","usernameHint":"შეგიძლიათ ჩასვათ სახელი @-ით ან პროფილის ბმული.","messengerHint":"მაგალითად, https://www.facebook.com/username","nameError":"მიუთითეთ თქვენი სახელი.","methodError":"აირჩიეთ დაკავშირების გზა.","contactError":"შეამოწმეთ საკონტაქტო ინფორმაცია.","callError":"შეიყვანეთ ზუსტად 9 ციფრი +995-ის შემდეგ.","fileType":"დაუშვებელი ფორმატი.","fileEmpty":"ფაილი ცარიელია.","fileSize":"ფაილი აღემატება 10 მბ-ს.","fileCount":"შეგიძლიათ დაურთოთ მაქსიმუმ 5 ფაილი.","fileDuplicate":"ეს ფაილი უკვე დამატებულია.","retry":"ფაილების ხელახლა გაგზავნა","expired":"მოთხოვნა გაიგზავნა, მაგრამ ფაილების ატვირთვის დრო ამოიწურა. დარჩენილი ფაილები გამოგვიგზავნეთ Telegram-ით.","sendingFiles":"ფაილები იგზავნება","sent":"გაგზავნილია","upload":"მოლოდინში","uploadButton":"ფოტოების ატვირთვა"}};
  Object.assign(copy.ru, {otherCountry: 'Другая страна', internationalPhone: '+код страны и номер'});
  Object.assign(copy.en, {otherCountry: 'Other country', internationalPhone: '+country code and number'});
  Object.assign(copy.ka, {otherCountry: 'სხვა ქვეყანა', internationalPhone: '+ქვეყნის კოდი და ნომერი'});
  copy.ru.emailPlaceholder = 'введите ваш E-mail';
  copy.en.emailPlaceholder = 'Enter your E-mail';
  copy.ka.emailPlaceholder = 'შეიყვანეთ თქვენი E-mail';
  const rules = globalThis.ContactRules;
  const lib = globalThis.libphonenumber;
  const endpoint = 'https://apartmarketing-form.aa14mart.workers.dev/';
  const $ = selector => form.querySelector(selector);
  const name = $('[name=name]'), method = $('[name=method]'), country = $('[name=country]'), contact = $('[name=contact]');
  const message = $('[name=message]'), picker = $('[name=photos]'), submit = $('button[type=submit]');
  const status = $('.contact-form__status'), body = $('fieldset');
  let files = [], rejected = [], busy = false, state = '', session = null, completed = new Set(), methodBefore = '';
  const drafts = {};
  const t = () => copy[document.documentElement.lang] || copy.ru;
  const errors = {};
  picker.accept = [...rules.extensions].map(e => '.' + e).join(',');
  function error(key, textKey) {
    errors[key] = textKey;
    const field = key === 'name' ? name : key === 'method' ? method : contact;
    const label = $('#' + key + '-error');
    label.textContent = textKey ? t()[textKey] : ''; label.hidden = !textKey;
    field.setAttribute('aria-invalid', String(!!textKey));
  }
  function countries() {
    const selected = country.value || 'GE';
    const names = new Intl.DisplayNames([document.documentElement.lang || 'ru'], {type: 'region'});
    const items = ['GE','RU','UA','BY','KZ','IL','TR','AM','AZ','UZ','KG','TJ','DE','PL','GB','FR','IT','LT','LV','EE','IR','AE','SA','US','CA','CN','IN'];
    country.replaceChildren(...items.map(code => new Option(`${names.of(code)} +${lib.getCountryCallingCode(code)}`, code)));
    country.add(new Option(t().otherCountry, 'OTHER'));
    country.value = selected; country.setAttribute('aria-label', t().country);
  }
  function contactView() {
    const kind = method.value, phone = ['call','whatsapp','viber'].includes(kind);
    $('.contact-form__contact').hidden = !kind;
    contact.disabled = !kind; contact.required = !!kind;
    country.hidden = !['whatsapp','viber'].includes(kind);
    country.disabled = country.hidden;
    const prefix = $('.contact-form__prefix');
    prefix.textContent = kind === 'call' ? '+995' : kind === 'messenger' ? 'facebook.com/' : ['telegram','instagram'].includes(kind) ? '@' : '';
    prefix.hidden = !prefix.textContent;
    $('.contact-form__contact-label').textContent = kind === 'email' ? 'E-mail' : phone ? t().phone : kind === 'messenger' ? t().messengerLabel : t().username;
    contact.type = kind === 'email' ? 'email' : phone ? 'tel' : 'text'; contact.inputMode = kind === 'email' ? 'email' : phone ? 'tel' : 'text';
    const international = !country.hidden && country.value === 'OTHER';
    contact.autocomplete = kind === 'email' ? 'email' : phone ? (international ? 'tel' : 'tel-national') : 'off';
    contact.maxLength = kind === 'email' ? 254 : 250;
    contact.setAttribute('autocapitalize','none'); contact.spellcheck = false;
    contact.placeholder = kind === 'email' ? t().emailPlaceholder : international ? t().internationalPhone : phone ? t().phone : 'username';
  }
  function drawFiles() {
    const list = $('.contact-form__files');list.replaceChildren();
    files.forEach((file,index) => {
      const li = document.createElement('li'), text = document.createElement('span');
      text.textContent = `${file.name} · ${(file.size/1048576).toFixed(1)} MB${session ? ' · ' + (completed.has(index) ? t().sent : t().upload) : ''}`;
      li.append(text);
      if (!session) {
        const remove = document.createElement('button');remove.type = 'button';remove.textContent = t().remove;
        remove.setAttribute('aria-label', `${t().remove}: ${file.name}`);remove.disabled = busy;
        remove.addEventListener('click',()=>{files.splice(index,1);rejected=[];drawFiles();});li.append(remove);
      }
      list.append(li);
    });
    const rejects = $('.contact-form__file-errors');rejects.hidden = !rejected.length;
    rejects.textContent = rejected.map(x=>`${x.name}: ${t()[x.reason]}`).join('\n');
  }
  function render() {
    form.querySelectorAll('[data-form-text]').forEach(el=>el.textContent=t()[el.dataset.formText]);
    name.placeholder=t().name;
    message.placeholder=t().message;
    picker.setAttribute("aria-label", t().uploadButton);
    countries();contactView();drawFiles();
    for (const [key,value] of Object.entries(errors)) error(key,value);
    submit.textContent = busy ? (session ? `${t().sendingFiles} ${completed.size}/${files.length}…` : t().sending) : session ? t().retry : t().submit;
    submit.disabled = busy || state === 'expired';
    status.textContent = state ? t()[state] : '';
    status.dataset.state = ['error','partial','expired','limited'].includes(state) ? 'error' : 'success';
    body.disabled = busy || !!session;
    form.setAttribute('aria-busy', String(busy));
  }
  function resolveContact(value) {
    if (method.value === 'messenger') {
      const result = rules.contact('messenger', value, '');
      if (!result) return null;
      const url = new URL(result.contact);
      return {...result, national: url.pathname.replace(/^\//, '') + url.search};
    }
    if (['whatsapp','viber'].includes(method.value) && country.value === 'OTHER') {
      const input = value.trim().replace(/^00/, '+');
      if (!input.startsWith('+')) return null;
      try {
        const parsed = lib.parsePhoneNumberFromString(input);
        if (!parsed || !parsed.isPossible() || parsed.ext) return null;
        const region = parsed.country || lib.getCountries().find(code => lib.getCountryCallingCode(code) === parsed.countryCallingCode);
        if (!region) return null;
        const result = rules.contact(method.value, parsed.number, region);
        return result ? {...result, national: result.contact} : null;
      } catch { return null; }
    }
    return rules.contact(method.value, value, method.value === 'call' ? 'GE' : country.value);
  }
  function normalize() {
    const normalized=resolveContact(contact.value);
    if(normalized) contact.value=normalized.national;
    return normalized;
  }
  method.addEventListener('change',()=>{
    if(methodBefore) drafts[methodBefore]={value:contact.value,country:country.value};
    const draft=drafts[method.value]||{value:'',country:'GE'};
    contact.value=draft.value;country.value=draft.country;methodBefore=method.value;
    error('method','');error('contact','');contactView();
  });
  contact.addEventListener('blur', normalize);
  contact.addEventListener('input',()=>{
    error('contact','');
    if(method.value==='call') {
      const found=rules.phone(contact.value,'GE',true);
      contact.value=found ? found.national : contact.value.replace(/^(\+995|00995)/,'').replace(/[^\d+]/g,'');
    }
  });
  contact.addEventListener('paste',event=>{
    const raw=event.clipboardData?.getData('text'); if(!raw)return;
    const result=resolveContact(raw);
    if(result){event.preventDefault();contact.value=result.national;error('contact','');}
  });
  country.addEventListener('change',()=>{error('contact','');contactView();});
  name.addEventListener('input',()=>error('name',''));
  message.addEventListener('input',()=>{
    if(message.value.length>500) message.value=message.value.slice(0,500);
    $('#message-count').textContent=`${message.value.length}/500`;
  });
  picker.addEventListener('change',()=>{
    rejected=[];
    for(const file of picker.files) {
      let reason=rules.fileError(file);
      if(!reason && files.some(x=>x.name===file.name&&x.size===file.size&&x.lastModified===file.lastModified))reason='fileDuplicate';
      if(!reason && files.length>=5)reason='fileCount';
      if(reason)rejected.push({name:file.name,reason});else files.push(file);
    }
    picker.value='';drawFiles();
  });
  new MutationObserver(render).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  async function api(path, payload, multipart=false) {
    const controller=new AbortController(), timer=setTimeout(()=>controller.abort(),multipart?90000:20000);
    try {
      const response=await fetch(endpoint+path,{method:'POST',headers:multipart?{}:{'Content-Type':'application/json'},body:multipart?payload:JSON.stringify(payload),signal:controller.signal,credentials:'omit'});
      const data=await response.json();
      if(!response.ok||!data.ok){const e=new Error('Request failed');e.status=response.status;e.code=data.code;throw e;}
      return data;
    } finally {clearTimeout(timer);}
  }
  form.addEventListener('submit',async event=>{
    event.preventDefault();if(busy)return;
    let normalized;
    if(!session){
      error('name',name.value.trim()?'':'nameError');error('method',method.value?'':'methodError');
      normalized=normalize();error('contact',method.value&&!normalized?(method.value==='call'?'callError':'contactError'):'');
      const invalid=[name,method,contact].find(el=>el.getAttribute('aria-invalid')==='true');if(invalid){invalid.focus();return;}
    }
    busy=true;state='';render();
    try {
      if(!session){
        const payload={name:name.value.trim(),method:method.value,country:normalized.country,contact:normalized.contact,message:message.value,website:$('[name=website]').value,files:files.map(file=>({name:file.name,size:file.size}))};
        const result=await api('',payload);
        if(files.length){if(!result.ticket)throw new Error('Update worker first');session=result;}
      }
      for(let index=0;session&&index<files.length;index++){
        if(completed.has(index))continue;
        render();const upload=new FormData();upload.append('ticket',session.ticket);upload.append('index',String(index));upload.append('file',files[index],files[index].name);
        await api('upload',upload,true);completed.add(index);render();
      }
      state='success';session=null;completed.clear();files=[];rejected=[];form.reset();methodBefore='';
      for(const key of Object.keys(drafts))delete drafts[key];country.value='GE';$('#message-count').textContent='0/500';
    } catch(e){state=session?(e.status===410?'expired':'partial'):(e.status===429?'limited':'error');}
    finally {busy=false;render();}
  });
  render();
})();
