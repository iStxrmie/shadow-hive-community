const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('#nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));}
// Subtle reveal-on-scroll for facility sections; content remains visible if motion is reduced or JS is unavailable.
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(!reduceMotion&&'IntersectionObserver'in window){const items=document.querySelectorAll('.dept,.archive-card,.section-head,.intro-copy,.access-card,.gallery-placeholder');items.forEach(el=>{el.style.opacity='0';el.style.transform='translateY(16px)';el.style.transition='opacity .65s ease, transform .65s ease'});const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity='1';entry.target.style.transform='translateY(0)';observer.unobserve(entry.target)}}),{threshold:.12});items.forEach(el=>observer.observe(el));}

// Simulated Shadow Hive facility bulletin and dashboard clock.
const clock = document.getElementById('system-clock');
function updateFacilityClock(){ if(clock) clock.textContent = new Date().toLocaleTimeString('en-GB',{hour12:false}); }
updateFacilityClock(); setInterval(updateFacilityClock,1000);

// Virus Index: searchable, filterable lore and clearly labelled fan-made files.
const virusSearch=document.getElementById('virus-search');
const virusCards=[...document.querySelectorAll('.virus-card')];
const virusFilters=[...document.querySelectorAll('.virus-filter')];
const virusCount=document.getElementById('virus-count');
const virusEmpty=document.getElementById('virus-empty');
let virusFilter='all';
function filterVirusFiles(){
  const query=(virusSearch?.value||'').trim().toLowerCase();let shown=0;
  virusCards.forEach(card=>{const kind=card.dataset.kind||'canon';const matchesKind=virusFilter==='all'||kind===virusFilter;const haystack=(card.dataset.search+' '+card.textContent).toLowerCase();const matchesText=!query||haystack.includes(query);const visible=matchesKind&&matchesText;card.hidden=!visible;if(visible)shown++;});
  if(virusCount)virusCount.textContent=shown+' FILE'+(shown===1?'':'S')+' FOUND';
  if(virusEmpty)virusEmpty.hidden=shown!==0;
}
virusSearch?.addEventListener('input',filterVirusFiles);
virusFilters.forEach(button=>button.addEventListener('click',()=>{virusFilter=button.dataset.filter;virusFilters.forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});filterVirusFiles();}));
filterVirusFiles();
