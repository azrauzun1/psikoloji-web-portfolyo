"use strict";
// Bu eğitim demosunda hiçbir kalıcı depolama veya ağ isteği yoktur.
const stages = [
 {title:"Öncelikleri belirlemek",story:"Deniz'in üç gün sonra sınavı ve aynı hafta teslim edeceği bir ödevi var. Ne yapmayı deneyebilir?",choices:[
  {label:"İşleri küçük parçalara ayırıp gerçekçi bir çalışma planı yapmak",concept:"Problem odaklı başa çıkma",note:"Yapılabilir adımlar belirlemek kontrol edilebilir talepleri düzenlemeye yardımcı olabilir; planın esnek olması önemlidir."},
  {label:"Önce kısa bir mola verip duygularını fark etmek",concept:"Duygu odaklı başa çıkma",note:"Kısa bir mola yoğun duygularla baş etmeyi kolaylaştırabilir. Sonrasında işlere geri dönmek için bir plan gerekebilir."},
  {label:"Tüm görevleri şimdilik görmezden gelmek",concept:"Kaçınma",note:"Erteleme kısa süreli rahatlama sağlayabilir; teslim tarihleri yaklaşırken baskıyı artırması da mümkündür."}]},
 {title:"Destek ve kaynaklar",story:"Deniz bir süre çalıştı ancak bazı konularda zorlanıyor ve yalnız hissediyor. Nasıl ilerleyebilir?",choices:[
  {label:"Bir arkadaşından çalışma desteği istemek",concept:"Sosyal destek arama",note:"Birlikte çalışma ve duyguları paylaşma yararlı olabilir. Herkesin destek ihtiyacı ve sınırları farklıdır."},
  {label:"Öğretim elemanına anlaşılmayan konuyu sormak",concept:"Problem odaklı başa çıkma",note:"Bilgi ve kaynak aramak belirsizliği azaltabilir. Yanıtın zamanlaması her zaman kontrol edilemez."},
  {label:"Kendini suçlayarak kimseyle konuşmamak",concept:"Kaçınma ve öz eleştiri",note:"İçe çekilme bazen anlaşılabilir bir tepkidir; yoğun öz eleştiri zorlanmayı artırabilir. Destek istemek bir seçenek olarak kalır."}]},
 {title:"Sınavdan önceki akşam",story:"Deniz'in hazırlığı istediği kadar ilerlemedi. Uykusu geliyor ve kaygısı artıyor. Ne yapmayı seçebilir?",choices:[
  {label:"Önemli başlıkları kısaca gözden geçirip uykuya zaman ayırmak",concept:"Problem odaklı ve öz bakım odaklı başa çıkma",note:"Sınırlı zamanda önceliklendirme ve dinlenme dengesi kurmak bazı kişiler için yararlı olabilir."},
  {label:"Kaygısını fark edip kısa bir nefes molası vermek",concept:"Duygu odaklı başa çıkma",note:"Kısa bir sakinleşme arası rahatlatıcı olabilir; tek başına tüm akademik talepleri ortadan kaldırmaz."},
  {label:"Sabaha kadar hiç ara vermeden çalışmak",concept:"Yoğun çalışma ve olası kaçınma",note:"Fazla çalışma bazen ilerleme hissi verebilir; uykusuzluk dikkat ve iyi oluşu olumsuz etkileyebilir."}]}
];
const outcomes = [
 {title:"Plan ve destek arasında denge",body:"Deniz bazı talepleri yönetmek için adımlar attı. Farklı başa çıkma yollarını birleştirmek, koşullara göre esnek davranmayı sağlayabilir."},
 {title:"Duygulara alan açmak",body:"Deniz duygusal yükü fark etti. Duyguları düzenlemeye zaman ayırmak değerli olabilir; ihtiyaç halinde somut destek ve planlama da düşünülebilir."},
 {title:"Kısa süreli rahatlama ve sonraki adımlar",body:"Deniz'in bazı seçimleri kısa vadede rahatlatıcı olsa da zaman baskısı devam edebilir. Bu bir başarısızlık değerlendirmesi değil, farklı seçenekleri düşünme fırsatıdır."}
];
function nextState(history,choice){if(!Number.isInteger(choice)||choice<0||choice>2||history.length>=3)throw new Error("Geçersiz seçim");return [...history,choice]}
function outcomeFor(history){if(history.length!==3)throw new Error("Senaryo tamamlanmadı");const avoid=history.filter(x=>x===2).length;return avoid>=2?outcomes[2]:history.filter(x=>x===1).length>=2?outcomes[1]:outcomes[0]}
if(typeof module!=="undefined"&&module.exports)module.exports={stages,nextState,outcomeFor};
if(typeof document!=="undefined"){
 let history=[];let active=0;
 const title=document.getElementById("stage-title"),story=document.getElementById("story"),options=document.getElementById("options"),feedback=document.getElementById("feedback"),progress=document.getElementById("progress"),bar=document.getElementById("progress-bar"),back=document.getElementById("back"),restart=document.getElementById("restart");
 function render(){
  options.replaceChildren();feedback.hidden=true;feedback.replaceChildren();back.disabled=active===0;
  if(active===3){const result=outcomeFor(history);title.textContent=result.title;story.textContent=result.body;progress.textContent="Senaryo tamamlandı · 3 / 3 karar";bar.style.width="100%";const recap=document.createElement("p");recap.textContent="Bu senaryoda seçimlerinizin bir kısmı farklı başa çıkma yaklaşımlarını temsil eder. Bu sonuç bir puanlama veya kişisel değerlendirme değildir.";options.append(recap);return}
  const stage=stages[active];title.textContent=stage.title;story.textContent=stage.story;progress.textContent=`Karar ${active+1} / 3`;bar.style.width=`${(active+1)/3*100}%`;
  stage.choices.forEach((c,i)=>{const b=document.createElement("button");b.type="button";b.textContent=c.label;if(history[active]===i){b.classList.add("chosen");b.setAttribute("aria-pressed","true")}else b.setAttribute("aria-pressed","false");b.addEventListener("click",()=>{
   history=history.slice(0,active);history=nextState(history,i);options.querySelectorAll("button").forEach(x=>{x.disabled=true});
   feedback.replaceChildren();const strong=document.createElement("strong");strong.textContent=c.concept;const desc=document.createElement("p");desc.textContent=c.note;const next=document.createElement("button");next.type="button";next.textContent=active===2?"Sonucu gör →":"Sonraki aşama →";next.addEventListener("click",()=>{active+=1;render();title.focus()});feedback.append(strong,desc,next);feedback.hidden=false;next.focus();
  });options.append(b)});
 }
 back.addEventListener("click",()=>{if(active>0){active-=1;history=history.slice(0,active);render();title.focus()}});
 restart.addEventListener("click",()=>{history=[];active=0;render();title.focus()});
 title.tabIndex=-1;render();
}
