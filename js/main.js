(function(){
'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const bn=n=>String(n).replace(/\d/g,d=>'০১২৩৪৫৬৭৮৯'[d]);

/* theme */
const root=document.documentElement;
try{const t=localStorage.getItem('theme');if(t)root.dataset.theme=t}catch(e){}
$('.theme-btn').onclick=()=>{const t=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}};
const btn=$('.menu-btn'),nav=$('#nav');
btn.onclick=()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)};
nav.addEventListener('click',e=>{if(e.target.tagName==='A')nav.classList.remove('open')});

/* 29 letters, 8 groups (as in the book, page 21) */
const groups=[
['এক নাম্বারে চার হরফ','ا م ط ظ'],['দুই নাম্বারে পাঁচ হরফ','ب ت ث ف ك'],
['তিন নাম্বারে তিন হরফ','ح خ ج'],['চার নাম্বারে পাঁচ হরফ','ر ز و د ذ'],
['পাঁচ নাম্বারে চার হরফ','س ش ص ض'],['ছয় নাম্বারে তিন হরফ','ن ق ل'],
['সাত নাম্বারে তিন হরফ','ء ع غ'],['আট নাম্বারে দুই হরফ','ه ي']];
$('#groups').innerHTML=groups.map((g,i)=>`<div class="grp"><small>${bn(i+1)}। ${g[0]}</small><div class="letters">${g[1].split(' ').map(l=>`<button class="letter" lang="ar">${l}</button>`).join('')}</div></div>`).join('');
const zoom=$('#zoom');
$('#groups').addEventListener('click',e=>{const b=e.target.closest('.letter');if(b){$('#zoomBody').textContent=b.textContent;zoom.hidden=false}});
zoom.onclick=()=>zoom.hidden=true;

/* makhraj */
const mk=[
['হলকের শুরু হইতে','ء ه'],['হলকের মধ্যখান হইতে','ع ح'],['হলকের শেষ হইতে','غ خ'],
['জিহ্বার গোড়া, উপরের তালুর সঙ্গে লাগাইয়া','ق'],['জিহ্বার গোড়া থেকে একটু আগে বাড়িয়া','ك'],
['জিহ্বার মধ্যখান, উপরের তালুর সঙ্গে লাগাইয়া','ج ش ي'],['জিহ্বার গোড়ার কিনারা, উপরের মাড়ির দাঁতের গোড়ার সঙ্গে','ض'],
['জিহ্বার আগার কিনারা, সামনের উপরের দাঁতের মাড়ির সঙ্গে','ل'],['জিহ্বার আগা, উপরের তালুর সঙ্গে','ن'],
['জিহ্বার আগার পিঠ, উপরের তালুর সঙ্গে','ر'],['জিহ্বার আগা, সামনের উপরের দুই দাঁতের গোড়ার সঙ্গে','ط د ت'],
['জিহ্বার আগা, নিচের দুই দাঁতের আগার দিকে','ص س ز'],['জিহ্বার আগা, উপরের দুই দাঁতের আগার সঙ্গে','ظ ذ ث'],
['নিচের ঠোঁটের পেট, উপরের দুই দাঁতের আগার সঙ্গে','ف'],['দুই ঠোঁট হইতে','م ب و'],
['মুখের খালি জায়গা হইতে মদ্দের হরফ','ا و ي'],['নাকের বাঁশি হইতে গুন্নাহ','ن م']];
$('#makhrajList').innerHTML=mk.map((m,i)=>`<div><b>${bn(i+1)}</b><span>${m[0]}</span><span class="ar-big" lang="ar">${m[1]}</span></div>`).join('');

/* tabs */
$$('.tab').forEach(t=>t.onclick=()=>{$$('.tab').forEach(x=>x.classList.toggle('on',x===t));$$('.panel').forEach(p=>p.classList.toggle('on',p.id===t.dataset.t))});

/* tajweed rules */
const rules=[['ইকলাব','হরফ ১টি','ب'],['ইদগাম','হরফ ৬টি','ي ر م ل و ن'],['ইযহার','হরফ ৬টি','ء ه ع ح غ خ'],['ইখফা','হরফ ১৫টি','ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك']];
$('#rules').innerHTML=rules.map(r=>`<div class="rule"><h3>${r[0]}</h3><small>${r[1]}</small><p class="ar-big" lang="ar">${r[2]}</p></div>`).join('');

/* book gallery */
const pages=[['২১','আরবী হরফ ২৯টি','হরফ'],['২২','প্রণালী (১–৪)','হরফ'],['২৩','পঞ্চম প্রণালী, ব্ল্যাকবোর্ড ও মাশক','হরফ'],
['২৮','মাখরাজ (১–১০)','মাখরাজ'],['২৯','মাখরাজ (১১–১৭), মুরাক্কাব','মাখরাজ'],['৩০','মুরাক্কাব','মাখরাজ'],['৩১','মুরাক্কাবের নকশা','মাখরাজ'],
['৩২','মদ্দের বিবরণ','মদ্দ'],['৩৩','মদ্দের প্রকার','মদ্দ'],['৩৪','লাযিম মদ্দ, জযম ও কলকলা','মদ্দ'],
['৩৫','তাশদীদ, নূনে সাকিন ও তানবীন','তাজবীদ'],['৩৬','ইকলাব, ইদগাম, ইযহার','তাজবীদ'],['৩৭','ইখফা, মীম সাকিন, আল্লাহ শব্দের লাম','তাজবীদ'],
['৩৮','র হরফ পুর ও বারিক','তাজবীদ'],['৩৯','র বারিক, সিফাতের বিবরণ','সিফাত'],['৪০','সিফাতে মুতাযাদ্দাহ্‌','সিফাত'],
['৪১','সিফাতের পরিচয়','সিফাত'],['৪২','সিফাতে গায়রে মুতাযাদ্দাহ্‌','সিফাত'],['৪৩','গুন্নাহ, আলিফে যায়েদা','তাজবীদ']];
const S='images/surah/surah-',H='images/hadith/hadith-';
[['৬৭','সূরা ফাতিহা'],['৬৮','ফাতিহার শেষ অংশ, সূরা ফীল'],['৬৯','সূরা কুরাইশ ও মাঊন'],['৭০','মাঊনের অর্থ, সূরা কাউসার'],['৭১','সূরা কাফিরূন'],['৭২','সূরা নাসর ও লাহাব'],['৭৩','লাহাবের অর্থ, সূরা ইখলাছ'],['৭৪','সূরা ফালাক'],['৭৫','সূরা নাস']]
 .forEach((p,i)=>pages.push([p[0],p[1],'সূরা',`${S}${String(i+1).padStart(2,'0')}.jpg`]));
[['৭৬','হাদীস শরীফ (১–৭)'],['৭৭','হাদীস (৮–১৫)'],['৭৮','হাদীস (১৬–২৫)'],['৭৯','হাদীস (২৬–৩২)'],['৮০','হাদীস (৩৩–৪০)'],['৮১','হাদীস (৪১–৪৬)'],['৮২','হাদীস (৪৮–৫২)'],['৮৩','হাদীস (৫৩–৫৬)'],['৮৪','হাদীস (৫৬–৬১)'],['৮৫','হাদীস (৬২–৬৫)']]
 .forEach((p,i)=>pages.push([p[0],p[1],'হাদীস',`${H}${String(i+1).padStart(2,'0')}.jpg`]));
[['৮৬','আসমায়ে হুসনা (১–১৩)'],['৮৭','আসমায়ে হুসনা (১৪–৩৩)'],['৮৮','আসমায়ে হুসনা (৩৪–৫৩)'],['৮৯','আসমায়ে হুসনা (৫৪–৭২)'],['৯০','আসমায়ে হুসনা (৭৩–৯২)'],['৯১','আসমায়ে হুসনা (৯৩–৯৯) ও অন্যান্য নাম']]
 .forEach((p,i)=>pages.push([p[0],p[1],'আসমায়ে হুসনা',`images/names/names-${String(i+1).padStart(2,'0')}.jpg`]));
const srcOf=o=>o.p[3]||`images/pages/page-${String(o.i+1).padStart(2,'0')}.jpg`;
const cats=['সব',...new Set(pages.map(p=>p[2]))];
let cur='সব',vis=[];
const f=$('#filters'),gal=$('#gallery');
f.innerHTML=cats.map(c=>`<button class="tab${c===cur?' on':''}">${c}</button>`).join('');
function draw(){vis=pages.map((p,i)=>({p,i})).filter(o=>cur==='সব'||o.p[2]===cur);
 gal.innerHTML=vis.map((o,k)=>`<button data-k="${k}"><img loading="lazy" src="${srcOf(o)}" alt="পৃষ্ঠা ${o.p[0]}: ${o.p[1]}"><span>পৃষ্ঠা ${o.p[0]} · ${o.p[1]}</span></button>`).join('')}
f.onclick=e=>{const b=e.target.closest('.tab');if(!b)return;cur=b.textContent;$$('.tab',f).forEach(x=>x.classList.toggle('on',x===b));draw()};
draw();

/* lightbox */
const lb=$('#lb');let k=0;
function show(n){k=(n+vis.length)%vis.length;const o=vis[k];$('#lbImg').src=srcOf(o);$('#lbImg').alt=o.p[1];$('#lbCap').textContent=`পৃষ্ঠা ${o.p[0]} · ${o.p[1]}`}
gal.onclick=e=>{const b=e.target.closest('button');if(b){show(+b.dataset.k);lb.hidden=false}};
$('.lb-x').onclick=()=>lb.hidden=true;
$('.prev').onclick=()=>show(k-1);$('.next').onclick=()=>show(k+1);
document.addEventListener('keydown',e=>{if(e.key==='Escape'){lb.hidden=true;zoom.hidden=true}
 if(!lb.hidden){if(e.key==='ArrowLeft')show(k-1);if(e.key==='ArrowRight')show(k+1)}});

/* surah reader */
const sv=$('#surahView'),st=$('#surahTabs');
const ar=n=>String(n).replace(/\d/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]);
st.innerHTML=SURAHS.map((s,i)=>`<button class="tab${i?'':' on'}" data-i="${i}">${s.n}</button>`).join('');
function showSurah(i){const s=SURAHS[i];
 sv.innerHTML=`<header><h3>সূরা ${s.n}</h3><small>${s.t}</small></header>
 <p class="bism" lang="ar">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
 ${s.a.map((x,k)=>`<div class="ayah"><p class="ar-ayah" lang="ar">${x} <span class="no">﴿${ar(k+1)}﴾</span></p><p class="bn-ayah">${bn(k+1)}। ${s.b[k]}</p></div>`).join('')}`}
st.onclick=e=>{const b=e.target.closest('.tab');if(!b)return;$$('.tab',st).forEach(x=>x.classList.toggle('on',x===b));showSurah(+b.dataset.i)};
showSurah(0);

/* hadith */
const hl=$('#hadithList'),hs=$('#hSearch');
function drawH(q=''){const r=HADITHS.filter(h=>(h[1]+h[2]+h[0]).includes(q.trim()));
 hl.innerHTML=r.length?r.map(h=>`<article class="hcard"><p class="ar-ayah" lang="ar">${h[0]}</p><p>${h[1]}</p><small>${h[2]}</small></article>`).join(''):'<p class="sub">কোনো হাদীস পাওয়া যায়নি। অন্য শব্দ লিখে খুঁজুন।</p>'}
/* names */
const ng=$('#namesGrid'),ne=$('#namesExtra'),ns=$('#nSearch');
const card=(x,i,off)=>`<div class="ncard"><span class="nn">${bn(i+1+off)}</span><b class="nar" lang="ar">${x[0]}</b><span>${x[1]}</span></div>`;
function drawN(q=''){q=q.trim();const r=NAMES.map((x,i)=>[x,i]).filter(o=>!q||o[0][1].includes(q)||o[0][0].includes(q));
 ng.innerHTML=r.length?r.map(o=>card(o[0],o[1],0)).join(''):'<p class="sub">কোনো নাম পাওয়া যায়নি।</p>'}
ne.innerHTML=NAMES_EXTRA.map((x,i)=>card(x,i,0).replace(/<span class="nn">.*?<\/span>/,'')).join('');
ns.oninput=()=>drawN(ns.value);drawN();
hs.oninput=()=>drawH(hs.value);drawH();
})();
