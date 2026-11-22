# Beyza Azra Uzun — Psikoloji Portfolyosu (taslak)

Dört sayfalı, statik HTML/CSS/JS öğrenci portfolyosu.

- Sayfalar: `index.html`, `hakkimda.html`, `projeler.html`, `iletisim.html`
- Ortak dosyalar: `style.css`, `script.js`
- Etkileşimler: mobil menü, koyu tema, proje filtreleme, örnek form doğrulama ve karakter sayacı.
- Form mesaj göndermez veya kaydetmez.
- Önceki ders çalışmaları: Python Randevu Planlayıcısı ve algoritma/akış şeması Randevu Hatırlatma Sistemi.
- Gerçek proje: https://github.com/azrauzun1/Psikolog-randevu-planlay-c-
- Üç yeni demo kodlandı (duygu takip, psikoeğitim, kurgusal vaka karar ağacı).
- GitHub Pages yayın adresi: **Henüz yayımlanmadı**.
- Test durumu: statik kod ve bağlantı denetimi yapıldı; gerçek tarayıcı ve cihaz testleri bekliyor.
- Dört eski ders çalışması koşulunun yalnızca ikisi karşılanıyor. Üç yeni demo geçmiş ders ödevi değildir.

## PROMPT 3 – Duygu Durumu Takip Aracı

`projeler/duygu-takip.html` dosyası üzerinden açılır. `duygu.css` ve `duygu.js` aynı klasördedir. Beş duygu, geçici kayıt, tekil silme ve tümünü temizleme işlevleri bulunur. Kayıtlar yalnızca JS belleğindedir; sayfa yenilendiğinde kaybolur. Tanı/tedavi amacı taşımaz. Gerçek tarayıcı testi henüz yapılmadı.

## PROMPT 4 – Psikoeğitim Bilgi Kartları

`projeler/psikoegitim.html`, `psikoegitim.css`, `psikoegitim.js`: beş kavram, kart çevirme, önceki/sonraki, kavram filtresi, ilerleme çubuğu. Hiçbir veri depolanmaz veya gönderilmez. Kodun sözdizimi, dosya bağlantıları ve Node.js sahte DOM etkileşimleri kontrol edilmiştir. Chromium erişimi ortam politikası nedeniyle engellendi; gerçek tarayıcı testi ayrıca yapılmalıdır.

## PROMPT 5 – Örnek Vaka Karar Ağacı

`projeler/vaka.html`, `vaka.css`, `vaka.js`: üç aşamalı kurgusal akademik stres senaryosu, üçer seçim, her seçime açıklama, geri dönme, yeniden başlatma, üç farklı sonuç. Yalnızca sayfa belleğinde tutulur; veri göndermez. Gerçek tarayıcı testi henüz yapılmadı.

## PROMPT 6 – Çalıştırma ve kalite denetimi

`index.html` dosyasını bir tarayıcıda açarak dört sayfaya ve Projeler bölümünden üç demoya ulaşabilirsiniz. Yerel dosya açma kısıtları olan cihazlarda statik bir web sunucusuyla veya GitHub Pages ile açılmalıdır. Proje **henüz GitHub Pages üzerinde yayımlanmadı**.

Teknik testler: `python quality_check.py`, `node test_interactions.js`, `node --check script.js`, `node --check projeler/duygu.js`, `node --check projeler/psikoegitim.js`, `node --check projeler/vaka.js`. Sonuçlar ve gerçek tarayıcıda doğrulanmamış özellikler için `TEST_SONUCLARI_PROMPT6.md` dosyasına bakınız. Duygu kaydında odak yönetimi hatası düzeltildi.
