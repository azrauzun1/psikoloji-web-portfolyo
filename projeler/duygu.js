(() => {
  'use strict';
  // Yalnızca bu sayfanın belleğinde tutulur; kalıcı depolama yoktur.
  const entries = [];
  const allowed = new Set(['mutluluk', 'üzüntü', 'kaygı', 'sakinlik', 'öfke']);
  const form = document.querySelector('#mood-form');
  const mood = document.querySelector('#mood');
  const list = document.querySelector('#records');
  const count = document.querySelector('#count');
  const empty = document.querySelector('#empty');
  const clear = document.querySelector('#clear');
  const feedback = document.querySelector('#feedback');
  let nextId = 1;
  function render() {
    list.replaceChildren();
    for (const entry of entries) {
      const item = document.createElement('li');
      const info = document.createElement('div');
      info.className = 'record-info';
      const name = document.createElement('strong');
      name.textContent = entry.mood.charAt(0).toLocaleUpperCase('tr-TR') + entry.mood.slice(1);
      const time = document.createElement('time');
      time.dateTime = entry.date.toISOString();
      time.textContent = entry.date.toLocaleString('tr-TR', {dateStyle:'medium', timeStyle:'short'});
      info.append(name, time);
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.className = 'delete';
      remove.textContent = 'Kaydı sil';
      remove.setAttribute('aria-label', name.textContent + ' kaydını sil');
      remove.addEventListener('click', () => {
        const index = entries.findIndex(e => e.id === entry.id);
        if (index !== -1) entries.splice(index, 1);
        render();
        feedback.textContent = 'Kayıt silindi.';
        (clear.disabled ? mood : clear).focus();
      });
      item.append(info, remove);
      list.append(item);
    }
    count.textContent = '(' + entries.length + ')';
    empty.hidden = entries.length !== 0;
    clear.disabled = entries.length === 0;
  }
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!allowed.has(mood.value)) {
      feedback.textContent = 'Lütfen listeden geçerli bir duygu seç.';
      mood.focus();
      return;
    }
    entries.push({id: nextId++, mood: mood.value, date: new Date()});
    render();
    feedback.textContent = 'Duygu geçici listeye eklendi.';
    form.reset();
    mood.focus();
  });
  clear.addEventListener('click', () => {
    entries.length = 0;
    render();
    feedback.textContent = 'Tüm geçici kayıtlar temizlendi.';
    mood.focus();
  });
  render();
})();
