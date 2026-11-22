# Gerçek yapay zekâ çalışma günlüğü

## Başlangıç
Kullanıcı iPad üzerinden çalışıyor. Tasarım: B, Modern & Professional (lila, beyaz, lacivert).

## PROMPT 1 — Kullanıcının gönderdiği tam metin
> Psikoloji öğrencisi olarak hazırlayacağım Modern & Professional portfolyomun site haritasını ve proje yapısını planla. Doğrulanmış Psikolog Randevu Planlayıcısı projemi temel al. Psikoloji alanıyla ilişkili, özgün ve gerçekten çalışabilecek üç yeni mini uygulama öner. Yeni projeleri daha önce tamamladığım ders ödevleri gibi gösterme. Her projenin amacını, kullanıcıya sağlayacağı faydayı, kullanılacak teknolojileri ve portfolyoda nasıl sunulacağını açıkla. Hocamın en az dört ders çalışması şartını ayrıca değerlendir. Henüz kodlamaya başlama; önemli proje kararlarını benim vermem için seçenekler sun.

**YZ yanıtı/işlemi:** Dört sayfalı site haritası ve üç farklı proje grubu önerildi; bu aşamada kod yazılmadı.

**Öğrenci kararı:** B — Klinik psikoloji odaklı üç demo: Duygu Durumu Takip Aracı, Psikoeğitim Bilgi Kartları, Örnek Vaka Karar Ağacı.

**Öğrencinin onayladığı gerekçe:** Klinik psikoloji alanında ilerlemeyi hedeflediğim için portfolyomda bu alanla doğrudan ilişkili projelere yer vermeyi tercih ettim. Böylece kodlama becerilerimi psikoloji bilgimle birleştirebileceğimi göstermek istedim.

**Eksik:** Dört önceki ders çalışması koşulu doğrulanmış tek önceki projeyle henüz karşılanmıyor.

## PROMPT 2 — Kullanıcının gönderdiği tam metin
> Klinik psikoloji odaklı Modern & Professional portfolyomun dört ana sayfasını oluştur: Ana Sayfa, Hakkımda, Projeler ve İletişim.
>
> Tasarımda açık lila, beyaz ve koyu lacivert renklerini kullan. Modern, sade, profesyonel ve yüksek lisans başvurularında kullanılabilecek bir görünüm hazırla.
>
> Ortak style.css ve script.js dosyalarını oluştur. Sayfalar arasında çalışan, klavyeyle erişilebilir bir gezinti menüsü tasarla.
>
> Ana sayfada Beyza Azra Uzun adını, psikoloji öğrencisi olduğumu ve klinik psikoloji alanına ilgimi belirt. Hakkımda sayfasında eğitimimi, akademik ilgi alanlarımı ve gelecekteki hedeflerimi tanıt. Doğrulanmamış deneyim, sertifika veya başarı ekleme.
>
> Projeler sayfasında önceki ders çalışmam olan Psikolog Randevu Planlayıcısı'nı ve bu portfolyo için geliştirilecek üç yeni uygulamayı birbirinden açıkça ayır:
> 1. Duygu Durumu Takip Aracı
> 2. Psikoeğitim Bilgi Kartları
> 3. Örnek Vaka Karar Ağacı
>
> İletişim sayfasında GitHub profil bağlantımı ve gerçek mesaj göndermeyen, gizlilik açıklaması bulunan bir örnek iletişim formu oluştur.
>
> Semantik HTML, erişilebilirlik, mobil uyumluluk, görünür klavye odağı ve en az iki @media kuralını uygula.
>
> Gerçek dosyaları oluştur ve kendi kodunu kontrol et. Yapabildiğin testleri gerçekleştir; henüz gerçekleştirmediğin testleri yapılmış gibi gösterme. Rutin teknik hataları doğrudan düzelt.
>
> Bu aşamada üç mini uygulamanın ayrıntılı işlevlerini geliştirme; onları sonraki takip promptlarında ele alacağız.
>
> PROMPT 1'de onayladığım akademik ve profesyonel karar gerekçesini çalışma günlüğüne ekle. PROMPT 2 kapsamında yapılan gerçek işlemleri de belgeleyerek sonraki aşamaya temel oluştur.

**YZ işlemi:** Dört HTML sayfası, ortak CSS ve JS, beş özgün SVG görseli oluşturuldu. Form, proje filtreleri, tema ve mobil menü için başlangıç işlevleri eklendi. Üç mini demo henüz geliştirilmedi.

**Kontrol:** Dosya ve yerel bağlantıların statik kontrolü yapıldı. Gerçek tarayıcı ve üç ekran görüntüsü testi bu aşamada yapılmadı.

**Öğrenci kararı:** Bu aşama için ayrıca bir öğrenci tercihi henüz alınmadı.


## PROMPT 3 – Duygu durumu takip aracı

### Öğrencinin gönderdiği tam prompt

> Klinik psikoloji odaklı Modern & Professional portfolyom için Duygu Durumu Takip Aracı'nı gerçek ve çalışan bir mini web uygulaması olarak geliştir.
>
> PROMPT 3 kapsamında gizlilik odaklı A seçeneğini ve akademik-etik gerekçeyi onayladım. Bu kararları uygula.
>
> Uygulamada kullanıcı mutluluk, üzüntü, kaygı, sakinlik ve öfke duygularından birini seçebilsin. Seçilen duygular tarih ve saat bilgisiyle geçici bir listede gösterilsin. Her kayıt ayrı ayrı silinebilsin ve tüm listeyi temizleme özelliği bulunsun.
>
> Verileri localStorage, sessionStorage, çerez veya herhangi bir sunucuda saklama. Sayfa yenilendiğinde bütün kayıtlar silinsin.
>
> Tasarımı portfolyomun açık lila, beyaz ve koyu lacivert renk paletiyle uyumlu hazırla.
>
> Semantik HTML, erişilebilir form etiketleri, klavyeyle kullanım, görünür odak, güvenli JavaScript ve mobil uyumluluk ilkelerini uygula.
>
> Uygulamanın psikolojik değerlendirme, tanı veya tedavi amacı taşımadığını açıkça belirt. Kullanıcı girdilerini güvenli yöntemlerle işle.
>
> Gerçek HTML, CSS ve JavaScript dosyalarını oluştur. Projeler sayfasına çalışan mini uygulamanın bağlantısını ekle. Önceki portfolyo dosyalarını koru ve gerekli değişiklikleri doğrudan uygula.
>
> Kodun işlevselliğini, gizliliğini ve erişilebilirliğini kontrol et. Mümkün olan gerçek testleri gerçekleştir. Statik kod incelemesiyle gerçek tarayıcı testlerini birbirinden ayır. Bulduğun hataları düzelt.
>
> PROMPTLAR.md dosyasına üçüncü promptun tam metnini, onayladığım karar gerekçesini, YZ'nin yaptığı işlemleri, gerçek değişiklikleri ve test sonuçlarını ekle.
>
> İşlem tamamlandığında oluşturduğun dosyaları ve test sonuçlarını göster. Ardından mevcut proje durumuna göre PROMPT 4 için özgün bir takip promptu hazırla.

### Öğrenci kararı ve onaylanan gerekçe

A – geçici kayıtlar, kalıcı depolama yok. "Psikoloji alanında gizlilik ve etik ilkelerin önemli olduğunu düşündüğüm için duygu durumu takip aracında kalıcı veri saklamamayı tercih ettim. Böylece uygulamanın işlevselliğini gösterirken kullanıcıların kişisel bilgilerinin korunmasına öncelik vermek istedim."

### YZ işlemi ve değişiklikler

`projeler/duygu-takip.html`, `projeler/duygu.css`, `projeler/duygu.js` oluşturuldu. `projeler.html` bağlantısı ve proje açıklaması güncellendi; README yenilendi. Kodda yalnızca sayfa içi JS dizisi kullanıldı; güvenli DOM düğümleri ve `textContent` kullanıldı.

### Test kaydı

Statik inceleme: kaynak kodunda localStorage/sessionStorage/cookie/fetch bulunmaması, sayfa bağlantısının dosyaya işaret etmesi, semantik etiketler, etiket-select ilişkisi ve CSS media kuralları kontrol edildi. JavaScript sözdizimi Node.js ile kontrol edildi. Tarayıcıda tıklama/klavye/yenileme ve ekran görüntüsü testleri bu aşamada yapılmadı; yapılmış sayılmamalı.


## PROMPT 4 – Psikoeğitim Bilgi Kartları

### Öğrencinin gönderdiği tam prompt

> Klinik psikoloji odaklı Modern & Professional portfolyom için Psikoeğitim Bilgi Kartları uygulamasını gerçek ve çalışan bir mini web uygulaması olarak geliştir.
>
> PROMPT 4 kapsamında A – Klinik Psikoloji Temel Kavramları seçeneğini ve A – Akademik ve Profesyonel Odaklı karar gerekçesini onayladım. Bu kararları uygula.
>
> Uygulama stres, kaygı, duygu düzenleme, psikolojik dayanıklılık ve başa çıkma kavramlarını kapsasın.
>
> Her kavram için bilimsel açıdan dikkatli hazırlanmış, anlaşılır bir açıklama ve günlük yaşamdan kısa bir örnek içeren etkileşimli bilgi kartları oluştur.
>
> Kullanıcılar kartların ön ve arka yüzlerini açabilsin, önceki ve sonraki karta geçebilsin, kavramlara göre filtreleme yapabilsin ve ilerleme durumunu görebilsin.
>
> Kartları klavyeyle kullanılabilir hâle getir. Erişilebilir buton etiketleri, görünür klavye odağı, ekran okuyucu duyuruları ve mobil uyumluluk özelliklerini uygula.
>
> Tasarımda portfolyomun açık lila, beyaz ve koyu lacivert renk paletini kullan. Modern, sade ve profesyonel görünümü koru.
>
> Uygulamanın yalnızca eğitim amaçlı olduğunu, psikolojik tanı, kişisel değerlendirme veya tedavi yerine geçmediğini açıkça belirt. Kişisel veri toplama veya sunucuya gönderme işlemi ekleme.
>
> Gerçek HTML, CSS ve JavaScript dosyalarını oluştur. Projeler sayfasına çalışan uygulamanın bağlantısını ekle. PROMPT 2 ve PROMPT 3 kapsamında oluşturulan dosyaları ve çalışan özellikleri koru.
>
> Kodun sözdizimini, erişilebilirlik özelliklerini, filtreleme ve kart geçişlerini kontrol et. Yapabildiğin gerçek testleri gerçekleştir; yalnızca statik inceleme yaptığın kontrolleri ayrı belirt. Bulduğun hataları düzelt.
>
> PROMPTLAR.md dosyasına bu promptun tam metnini, onayladığım akademik gerekçeyi, YZ'nin gerçekleştirdiği işlemleri, gerçek dosya değişikliklerini, test sonuçlarını ve varsa tespit edilen hataları ekle.
>
> İşlem tamamlandığında güncellenmiş portfolyo dosyalarını göster. Ardından mevcut proje durumuna göre PROMPT 5 için özgün bir takip promptu hazırla.

### Onaylanan karar gerekçesi

Klinik psikoloji alanında ilerlemeyi hedeflediğim için psikoeğitim uygulamamda bu alanın temel kavramlarına odaklanmayı tercih ettim. Stres, kaygı, duygu düzenleme, psikolojik dayanıklılık ve başa çıkma konularını seçerek hem akademik ilgimi yansıtmak hem de psikoloji bilgimi etkileşimli bir dijital öğrenme aracına dönüştürmek istedim.

### YZ işlemleri ve değişiklikler

Beş kavram için tanım ve günlük yaşam örnekleri yazıldı. `projeler/psikoegitim.html`, `projeler/psikoegitim.css`, `projeler/psikoegitim.js` oluşturuldu. `projeler.html` ve `README.md` güncellendi. Kart çevirme, gezinme, filtreleme, ilerleme ve erişilebilirlik kodlandı.

### Test kaydı

Node.js `--check`: başarılı. Yerel HTML/CSS/JS bağlantıları: başarılı. Node.js sahte DOM ile başlangıç kartı, çevirme, sonraki kart, filtreleme, ilerleme, sınır butonları ve filtre sıfırlama davranışları: başarılı. Chromium ile gerçek tarayıcı testi denendi, ancak hem file:// hem de localhost erişimi ortam yönetim politikası tarafından ERR_BLOCKED_BY_ADMINISTRATOR ile engellendi; bu nedenle gerçek tarayıcı etkileşim ve ekran boyutu testleri yapılmış sayılmaz. Bilinen eksiklik: gerçek tarayıcı testi ve ekran görüntüleri bekliyor.


## PROMPT 5 – Örnek Vaka Karar Ağacı

### Öğrencinin gönderdiği tam prompt

> Klinik psikoloji odaklı Modern & Professional portfolyom için Örnek Vaka Karar Ağacı uygulamasını gerçek ve çalışan bir mini web uygulaması olarak geliştir.
>
> PROMPT 5 kapsamında B – Stresle Başa Çıkma Senaryosu seçeneğini ve B – Kişisel ve Doğal Anlatım karar gerekçesini onayladım. Bu kararları uygula.
>
> Uygulamada sınavlar, ödev teslimleri ve zaman yönetimi nedeniyle akademik stres yaşayan tamamen kurgusal bir üniversite öğrencisinin hikâyesini oluştur.
>
> Kullanıcı, senaryonun farklı aşamalarında birden fazla başa çıkma seçeneği arasından karar verebilsin. Her seçim kullanıcıyı ilgili senaryo dalına yönlendirsin ve seçimin olası sonuçlarına ilişkin bilimsel açıdan dikkatli, yargılayıcı olmayan eğitsel açıklamalar gösterilsin.
>
> Senaryoda problem odaklı başa çıkma, duygu odaklı başa çıkma, sosyal destek arama ve kaçınma davranışı gibi psikoloji kavramlarına yer ver. Bu yaklaşımları bağlama göre değerlendir; tüm durumlar için tek bir doğru davranış bulunduğunu ima etme.
>
> Uygulamada en az üç karar aşaması, farklı sonuç ekranları, önceki adıma dönme ve senaryoyu yeniden başlatma özellikleri bulunsun.
>
> Kullanıcının yaptığı seçimleri yalnızca geçici olarak bellekte tut. Kişisel veri toplama, kalıcı depolama veya sunucuya veri gönderme işlemi ekleme.
>
> Uygulamanın tasarımını mevcut portfolyomun açık lila, beyaz ve koyu lacivert renk paletiyle uyumlu hazırla.
>
> Semantik HTML, klavyeyle kullanım, erişilebilir butonlar, görünür odak, ekran okuyucu duyuruları ve mobil uyumluluk ilkelerini uygula.
>
> Uygulamanın tamamen kurgusal ve eğitim amaçlı olduğunu, psikolojik değerlendirme, tanı veya tedavi yerine geçmediğini açıkça belirt.
>
> Gerçek HTML, CSS ve JavaScript dosyalarını oluştur. Projeler sayfasına çalışan uygulamanın bağlantısını ekle. PROMPT 2, PROMPT 3 ve PROMPT 4 kapsamında oluşturulan dosyaları ve çalışan özellikleri koru.
>
> Kodun sözdizimini, karar ağacındaki dallanmaları, geri dönme ve yeniden başlatma özelliklerini kontrol et. Mümkün olan gerçek testleri gerçekleştir. Statik kod incelemesiyle gerçek tarayıcı testlerini ayrı raporla. Bulduğun hataları düzelt.
>
> PROMPTLAR.md dosyasına bu promptun tam metnini, onayladığım akademik gerekçeyi, YZ'nin yaptığı işlemleri, gerçek dosya değişikliklerini, test sonuçlarını ve varsa tespit edilen hataları ekle.
>
> İşlem tamamlandığında güncellenmiş portfolyo dosyalarını göster. Ardından mevcut proje durumuna göre PROMPT 6 için özgün bir takip promptu hazırla.

### Onaylanan karar gerekçesi

Üniversite öğrencilerinin sınavlar, ödevler ve zaman yönetimi nedeniyle stres yaşayabildiğini düşündüğüm için bu konuyu seçtim. Kurgusal bir öğrencinin karşılaştığı durumları kullanarak farklı kararların nasıl sonuçlanabileceğini göstermek ve psikoloji alanındaki bilgilerimi daha anlaşılır bir uygulamaya dönüştürmek istedim.

### YZ işlemleri ve değişiklikler

`projeler/vaka.html`, `projeler/vaka.css`, `projeler/vaka.js` oluşturuldu; `projeler.html` ve `README.md` güncellendi. Üç karar aşaması, dokuz seçenek, seçime bağlı eğitsel geri bildirim, üç farklı sonuç, geri ve yeniden başlatma kodlandı. Seçimler sadece bellekte tutuluyor.

### Test kaydı

Node.js `--check` sözdizimi başarılı. Node.js ile 27 olası üç-aşamalı seçim dizisi ve üç farklı sonuç kolu doğrulandı; geçersiz seçim hata denetimi geçti. BeautifulSoup ile tüm yerel HTML bağlantıları tarandı, kırık bağlantı bulunmadı. Kalıcı depolama/ağ çağrısı için statik kaynak taraması temiz. Geri dönme, yeniden başlatma, klavye ve ekran okuyucu işlevleri kod incelemesinde mevcut; gerçek tarayıcıda etkileşim testi yapılmadı. 390/820/1440 piksel ekran görüntüleri alınmadı.

## PROMPT 6 – Kapsamlı test, erişilebilirlik ve hata düzeltme

### Öğrencinin gönderdiği tam prompt

Klinik psikoloji odaklı Modern & Professional portfolyomun kapsamlı kalite, erişilebilirlik, gizlilik ve güvenlik kontrollerini gerçekleştir.

PROMPT 6 kapsamında A – Kapsamlı Kalite ve Erişilebilirlik Kontrolü seçeneğini ve akademik gerekçesini onayladım.

Bu yaklaşımı tercih etmemin nedeni, portfolyomun yalnızca görsel açıdan başarılı olmasını değil, teknik olarak güvenilir, erişilebilir ve kullanıcı gizliliğine saygılı olmasını da istememdir. Psikoloji alanındaki etik sorumlulukları dijital uygulamalarımda da gözetmeyi amaçlıyorum.

Önceki PROMPT 2, 3, 4 ve 5 aşamalarında oluşturduğumuz dört ana sayfayı ve üç mini uygulamayı koruyarak aşağıdaki kontrolleri gerçekleştir:

1. Tüm HTML, CSS ve JavaScript dosyalarını incele. Bozuk bağlantıları, eksik dosyaları, sözdizimi hatalarını ve olası JavaScript sorunlarını tespit et.
2. Ana Sayfa, Hakkımda, Projeler ve İletişim sayfalarının gezinti menülerini, mobil menüyü, tema değiştirme özelliğini, proje filtrelemesini ve iletişim formunun doğrulama mekanizmasını kontrol et.
3. Duygu Durumu Takip Aracı'nın kayıt ekleme, tek tek silme, tüm kayıtları temizleme ve sayfa yenilendiğinde verilerin silinmesi özelliklerini test et.
4. Psikoeğitim Bilgi Kartları uygulamasının kart çevirme, önceki ve sonraki karta geçme, filtreleme ve ilerleme göstergesini kontrol et.
5. Örnek Vaka Karar Ağacı uygulamasının üç karar aşamasını, farklı senaryo dallarını, önceki adıma dönme ve yeniden başlatma işlevlerini test et.
6. Erişilebilirlik açısından semantik HTML, form etiketleri, başlık hiyerarşisi, klavyeyle kullanım, görünür odak, ekran okuyucu duyuruları ve renk kontrastlarını değerlendir.
7. Mobil uyumluluk açısından 390 px, 820 px ve 1440 px ekran genişliklerini kontrol et. Gerçek ekran görüntüsü alabiliyorsan oluştur; alamıyorsan bunu açıkça belirt ve görüntü oluşturmuş gibi davranma.
8. Gizlilik ve güvenlik açısından kişisel veri toplama, kalıcı depolama, ağ üzerinden veri gönderme, kullanıcı girdilerinin güvenli işlenmesi ve olası XSS risklerini incele.
9. Tespit ettiğin gerçek hataları düzelt. Her hata için sorunun ne olduğunu, hangi dosyada bulunduğunu ve nasıl giderildiğini açıkla. Gerçekte bulunmayan bir hatayı rapora ekleme.
10. Gerçek tarayıcı testleri, otomatik JavaScript testleri ve statik kod incelemelerini birbirinden açıkça ayır. Gerçekleştiremediğin testleri başarılı olarak gösterme.
11. PROMPTLAR.md dosyasına bu promptun tam metnini, onayladığım akademik karar gerekçesini, yapılan kontrolleri, tespit edilen gerçek hataları, uygulanan düzeltmeleri ve test sonuçlarını ekle.
12. README.md dosyasını güncelle. Mevcut özellikleri, uygulamaların çalıştırılma biçimini ve henüz tamamlanmamış testleri doğru şekilde belirt.
13. Önceki dosyaları koruyarak güncellenmiş portfolyonun tamamını ZIP dosyası olarak hazırla.

İşlem tamamlandığında bana ayrıntılı test sonuçlarını, düzeltilen hataları, kalan eksiklikleri ve güncellenmiş dosyaları göster.

Ardından hocamın ödev yönergesini dikkate alarak son teslim öncesinde hangi gereksinimlerin eksik olduğunu değerlendir ve bir sonraki aşama için özgün takip promptunu hazırla.

### Onaylanan akademik karar gerekçesi

Portfolyomda yalnızca görsel tasarıma değil, uygulamaların güvenilirliğine ve erişilebilirliğine de önem vermek istedim. Bu nedenle son geliştirme aşamasında kapsamlı bir kalite kontrolü yapmayı tercih ettim. Böylece JavaScript işlevlerini, mobil uyumluluğu, form doğrulamasını, gizlilik önlemlerini ve erişilebilirlik özelliklerini sistematik biçimde inceleyerek daha işlevsel ve kullanıcı odaklı bir portfolyo oluşturmayı amaçladım.

### Gerçek YZ işlemleri, hata ve testler

Statik HTML/JS taraması, Node.js sözdizimi, sahte DOM etkileşim testleri ve karar ağacı saf fonksiyon testleri çalıştırıldı. `projeler/duygu.js` içindeki son kayıt silindiğinde devre dışı bırakılan düğmeye odaklanma hatası tespit edildi ve giderildi. Tam sonuçlar `TEST_SONUCLARI_PROMPT6.md` dosyasındadır. Chromium ekran görüntüsü denemesi süre aşımına uğradı; gerçek tarayıcı testleri tamamlanmadı. GitHub Pages yayını yapılmadı.


## PROMPT 7 – Teslim hazırlığı ve proje sınıflandırması (22.11.2026)
Öğrenci, bugün teslim edilecek portfolyoyu önce tamamlamayı; iki önceki ders çalışmasını ve üç yeni demoyu ayrı kategorilerde, doğru şekilde göstermeyi onayladı.
Karar: Önceki çalışma 1 = Psikolog Seans ve Randevu Planlayıcısı (Python). Önceki çalışma 2 = Psikolog Randevu Hatırlatma Sistemi (algoritma ve akış şeması, çalışan yazılım değil). Üç yeni demo portfolyo için geliştirildi. Dört önceki çalışma şartı karşılanmıyor.
Yapılan değişiklikler: projeler.html sayfasına ikinci önceki çalışma kartı eklendi; belgelere kaynak ödev dosyaları eklendi; README güncellendi. Gerçek GitHub Pages yayını, ekran görüntüleri ve Teams teslimi yapılmadı.
