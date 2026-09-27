(() => {
  const methods = { call: 'Позвоните мне', whatsapp: 'WhatsApp', telegram: 'Telegram', instagram: 'Instagram', messenger: 'Facebook Messenger', viber: 'Viber', email: 'E-mail' };
  const extensions = new Set('jpg jpeg jpe jfif png heic heif hif avif webp gif bmp dib tif tiff dng raw cr2 cr3 nef nrw arw srf sr2 raf rw2 rwl orf ori pef ptx srw x3f 3fr fff iiq kdc dcr erf mos mef mrw tga jp2 j2k jpf jpx jpm mj2 jxl jxr wdp hdp mpo mov mp4 m4v'.split(' '));
  function social(value, method) {
    let text = value.trim();
    if (/^(https?:\/\/|www\.|t\.me\/|telegram\.me\/|instagram\.com\/)/i.test(text)) {
      try {
        const url = new URL(/^https?:/i.test(text) ? text : 'https://' + text);
        const hosts = method === 'telegram' ? ['t.me', 'telegram.me'] : ['instagram.com', 'www.instagram.com'];
        if (!hosts.includes(url.hostname.toLowerCase())) return '';
        const parts = url.pathname.split('/').filter(Boolean);
        if (parts.length !== 1) return '';
        text = parts[0];
      } catch { return ''; }
    }
    return text.replace(/^@+/, '');
  }
  function messenger(value) {
    try {
      let input = value.trim();
      if (/^@?[a-zA-Z0-9.]+$/.test(input) || /^profile\.php\?id=\d+$/.test(input)) input = 'https://facebook.com/' + input.replace(/^@/, '');
      const url = new URL(/^https?:\/\//i.test(input) ? input : 'https://' + input);
      if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password || url.port) return '';
      if (!['facebook.com','www.facebook.com','m.facebook.com','m.me','messenger.com','www.messenger.com'].includes(url.hostname.toLowerCase())) return '';
      const path = url.pathname.replace(/\/+$/, '');
      if (!path || path === '/') return '';
      url.protocol = 'https:'; url.hash = '';
      // Facebook numeric profile links need their id query parameter.
      if (path === '/profile.php') {
        const id = url.searchParams.get('id'); if (!/^\d+$/.test(id || '')) return '';
        url.search = '?id=' + id;
      } else url.search = '';
      return url.href;
    } catch { return ''; }
  }
  function phone(value, country = 'GE', call = false) {
    let text = value.trim().replace(/[\s().-]/g, '');
    if (!/^\+?\d+$/.test(text)) return null;
    if (call) {
      if (/^(\+995|00995)/.test(text)) text = text.replace(/^(\+995|00995)/, '');
      else if (text.length === 12 && text.startsWith('995')) text = text.slice(3);
      return /^\d{9}$/.test(text) ? { contact: '+995' + text, national: text, country: 'GE' } : null;
    }
    try {
      const lib = globalThis.libphonenumber;
      if (!lib.getCountries().includes(country)) return null;
      const code = lib.getCountryCallingCode(country);
      if (text.startsWith('00')) text = '+' + text.slice(2);
      if (!text.startsWith('+') && text.startsWith(code)) {
        const international = lib.parsePhoneNumberFromString('+' + text);
        if (international?.isPossible() && international.countryCallingCode === code) text = '+' + text;
      }
      const result = lib.parsePhoneNumberFromString(text, country);
      if (!result || !result.isPossible() || result.ext || result.countryCallingCode !== code) return null;
      return { contact: result.number, national: result.nationalNumber, country };
    } catch { return null; }
  }
  function contact(method, value, country) {
    if (method === 'email') {
      const address = value.trim();
      const parts = address.split('@');
      if (address.length > 254 || parts.length !== 2 || parts[0].length > 64) return null;
      const [local, domain] = parts;
      if (!/^[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+$/.test(local) || local.startsWith('.') || local.endsWith('.') || local.includes('..')) return null;
      if (!domain.includes('.') || !domain.split('.').every(label => /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$/.test(label))) return null;
      const canonical = local + '@' + domain.toLowerCase();
      return {contact: canonical, national: canonical, country: ''};
    }
    if (method === 'call' || method === 'whatsapp' || method === 'viber') return phone(value, country, method === 'call');
    if (method === 'telegram' || method === 'instagram') {
      const user = social(value, method);
      const valid = method === 'telegram' ? /^[a-zA-Z][a-zA-Z0-9_]{0,31}$/.test(user) : /^(?!\.)(?!.*\.\.)(?!.*\.$)[a-zA-Z0-9_.]{1,30}$/.test(user);
      return valid ? { contact: '@' + user, national: user, country: '' } : null;
    }
    if (method === 'messenger') {
      const link = messenger(value); return link ? { contact: link, national: link, country: '' } : null;
    }
    return null;
  }
  function fileError(file) {
    if (!file.name || !extensions.has(file.name.split('.').pop().toLowerCase())) return 'fileType';
    if (!Number.isInteger(file.size) || file.size <= 0) return 'fileEmpty';
    if (file.size > 10 * 1048576) return 'fileSize';
    return '';
  }
  globalThis.ContactRules = { methods, extensions, social, messenger, phone, contact, fileError };
})();
