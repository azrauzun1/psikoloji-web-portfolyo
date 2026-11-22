"use strict";
// Tüm bilgiler eğitim amaçlıdır; klinik değerlendirme içermez.
const cards = Object.freeze([
  {id:"stres",title:"Stres",description:"Kişinin karşılaştığı taleplere uyum sağlamaya çalışırken yaşadığı bedensel ve psikolojik tepkiler bütünüdür. Kısa süreli stres her zaman zararlı değildir.",example:"Örnek: Sınav öncesinde kalp atışının hızlandığını fark etmek."},
  {id:"kaygi",title:"Kaygı",description:"Gelecekte ortaya çıkabilecek bir tehdit veya belirsizlik karşısında hissedilen endişe ve tetikte olma durumudur. Her kaygı bir bozukluk anlamına gelmez.",example:"Örnek: Henüz açıklanmayan sınav sonucunu düşünürken huzursuz hissetmek."},
  {id:"duygu",title:"Duygu düzenleme",description:"Duyguları fark etme, anlama ve içinde bulunulan duruma uygun biçimde yönetme süreçleridir. Amaç her duyguyu ortadan kaldırmak değildir.",example:"Örnek: Tartışma sırasında tepki vermeden önce durup ne hissettiğini adlandırmak."},
  {id:"dayaniklilik",title:"Psikolojik dayanıklılık",description:"Zorluklar karşısında uyum sağlama ve toparlanma sürecidir. Sabit bir kişilik özelliği olmak zorunda değildir; çevresel destekle değişebilir.",example:"Örnek: Başarısız bir denemeden sonra destek alıp çalışma planını yeniden düzenlemek."},
  {id:"basa-cikma",title:"Başa çıkma",description:"Stres yaratan durumlarla veya bu durumların yol açtığı duygularla baş etmek için kullanılan düşünce ve davranış çabalarıdır.",example:"Örnek: Yoğun bir ödev haftasında görevleri küçük parçalara ayırmak ve gerektiğinde yardım istemek."}
]);
const topic = document.getElementById("topic");
const card = document.getElementById("card");
const cardText = document.getElementById("card-text");
const cardHint = document.getElementById("card-hint");
const type = document.getElementById("card-type");
const progress = document.getElementById("progress");
const bar = document.getElementById("progress-bar");
const announcement = document.getElementById("announcement");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const flipButton = document.getElementById("flip");
let filtered = [...cards];
let index = 0;
let flipped = false;
function render(announce = false) {
  const current = filtered[index];
  type.textContent = flipped ? "AÇIKLAMA VE ÖRNEK" : "KAVRAM";
  cardText.textContent = flipped ? `${current.description} ${current.example}` : current.title;
  cardHint.textContent = flipped ? "Kavrama dönmek için dokun" : "Açıklamayı görmek için dokun";
  card.setAttribute("aria-label", flipped ? `${current.title}: kavrama dön` : `${current.title}: açıklama ve örneği göster`);
  card.setAttribute("aria-pressed", String(flipped));
  flipButton.textContent = flipped ? "Ön yüze dön" : "Kartı çevir";
  progress.textContent = `Kart ${index + 1} / ${filtered.length}`;
  bar.style.width = `${(index + 1) / filtered.length * 100}%`;
  previous.disabled = index === 0;
  next.disabled = index === filtered.length - 1;
  if (announce) announcement.textContent = `${current.title}. ${progress.textContent}. ${flipped ? "Arka yüz" : "Ön yüz"}.`;
}
function flip() { flipped = !flipped; render(true); }
function move(step) {
  const target = index + step;
  if (target < 0 || target >= filtered.length) return;
  index = target; flipped = false; render(true);
}
topic.addEventListener("change", () => {
  filtered = topic.value === "all" ? [...cards] : cards.filter(item => item.id === topic.value);
  index = 0; flipped = false; render(true);
});
card.addEventListener("click", flip);
flipButton.addEventListener("click", flip);
previous.addEventListener("click", () => move(-1));
next.addEventListener("click", () => move(1));
render();
