const CHAPTERS=['index','01-fundamentos','02-celulas','03-inata','04-inflamacao','05-mhc','06-t','07-b','08-vacinas','09-b-ampliada','10-praticas','11-prova'];
const FONT_MIN=14, FONT_MAX=21, FONT_DEFAULT=16;

function chapterKey(){return document.body.dataset.chapter||'index'}
function clamp(n,min,max){return Math.max(min,Math.min(max,n))}

function applyFont(size){
  const px=clamp(Number(size)||FONT_DEFAULT,FONT_MIN,FONT_MAX);
  document.documentElement.style.setProperty('--reader-font-size',px+'px');
  document.documentElement.classList.toggle('font-large',px>=19);
  localStorage.setItem('imuno-font',String(px));
  closeSidebar();
}
function changeFont(delta){
  const current=Number(localStorage.getItem('imuno-font')||FONT_DEFAULT);
  applyFont(current+delta);
}
function resetFont(){applyFont(FONT_DEFAULT)}

function loadPrefs(){
  if(localStorage.getItem('imuno-theme')==='light') document.documentElement.classList.add('light');
  if(localStorage.getItem('imuno-focus')==='1') document.body.classList.add('focus');
  applyFont(Number(localStorage.getItem('imuno-font')||FONT_DEFAULT));
  const done=JSON.parse(localStorage.getItem('imuno-done')||'[]');
  const k=chapterKey(); const b=document.getElementById('doneBtn');
  if(b&&done.includes(k)){b.classList.add('done');b.textContent='✓ Capítulo concluído';}
  updateProgress(done);
}
function updateProgress(done){
  const p=document.querySelector('[data-progress]');const t=document.querySelector('[data-progress-text]');if(!p)return;
  const count=CHAPTERS.filter(x=>x!=='index'&&done.includes(x)).length;const total=CHAPTERS.length-1;
  const pct=Math.round(count/total*100);p.style.width=pct+'%';if(t)t.textContent=`${count} de ${total} capítulos • ${pct}%`;
}
function toggleDone(){
  let done=JSON.parse(localStorage.getItem('imuno-done')||'[]');const k=chapterKey();const i=done.indexOf(k);
  if(i>=0)done.splice(i,1);else done.push(k);localStorage.setItem('imuno-done',JSON.stringify(done));loadPrefs();
}
function toggleTheme(){
  document.documentElement.classList.toggle('light');
  localStorage.setItem('imuno-theme',document.documentElement.classList.contains('light')?'light':'dark');
}
function toggleFocus(){
  document.body.classList.toggle('focus');
  localStorage.setItem('imuno-focus',document.body.classList.contains('focus')?'1':'0');
  if(document.body.classList.contains('focus')) closeSidebar();
}

function closeSidebar(){
  const sidebar=document.querySelector('.sidebar'); const backdrop=document.querySelector('.nav-backdrop');
  if(sidebar) sidebar.classList.remove('nav-open'); if(backdrop) backdrop.classList.remove('open');
}
function toggleSidebar(){
  // If focus mode hid the sidebar, leaving focus is the least surprising escape.
  if(document.body.classList.contains('focus')){
    document.body.classList.remove('focus');localStorage.setItem('imuno-focus','0');
  }
  const sidebar=document.querySelector('.sidebar');const backdrop=document.querySelector('.nav-backdrop');
  if(!sidebar)return;
  const opening=!sidebar.classList.contains('nav-open');
  sidebar.classList.toggle('nav-open',opening);if(backdrop)backdrop.classList.toggle('open',opening);
  if(opening){const active=sidebar.querySelector('.nav a.active');if(active)active.scrollIntoView({block:'center'});}
}
function goBack(){
  if(history.length>1) history.back(); else location.href='index.html';
}

function injectPersistentNav(){
  if(document.querySelector('.navdock'))return;
  const backdrop=document.createElement('div');backdrop.className='nav-backdrop';backdrop.setAttribute('aria-hidden','true');backdrop.addEventListener('click',closeSidebar);
  const dock=document.createElement('nav');dock.className='navdock';dock.setAttribute('aria-label','Navegação persistente de estudo');
  dock.innerHTML=`
    <button type="button" class="navdock-menu" onclick="toggleSidebar()" aria-label="Abrir menu">☰ <span class="nav-label">Menu</span></button>
    <button type="button" onclick="goBack()" aria-label="Voltar">← <span class="nav-label">Voltar</span></button>
    <a class="navdock-home" href="index.html" aria-label="Início">⌂ <span class="nav-label">Início</span></a>
    <button type="button" onclick="changeFont(-1)" aria-label="Diminuir fonte">A−</button>
    <button type="button" class="font-reset" onclick="resetFont()" aria-label="Restaurar fonte">A</button>
    <button type="button" onclick="changeFont(1)" aria-label="Aumentar fonte">A+</button>`;
  document.body.append(backdrop,dock);
}

function answerQuiz(id,correct){
  const box=document.getElementById(id);const checked=box.querySelector('input[type=radio]:checked');const fb=box.querySelector('.feedback');fb.style.display='block';
  if(!checked){fb.textContent='Selecione uma alternativa antes de corrigir.';return;}
  const value=checked.value;const specific=box.dataset['explain'+value.toUpperCase()]||box.dataset.explain||'';const generic=box.dataset.explain||'';
  const prefix=value===correct?'✅ <strong>Correta.</strong> ':'❌ <strong>Incorreta.</strong> ';
  fb.innerHTML=prefix+specific+(specific!==generic&&generic?'<div class="why"><strong>Regra do tema:</strong> '+generic+'</div>':'');
  box.querySelectorAll('label').forEach(l=>{l.classList.remove('choice-ok','choice-bad');const i=l.querySelector('input');if(!i)return;if(i.value===correct)l.classList.add('choice-ok');else if(i.checked)l.classList.add('choice-bad');});
}
function filterNav(v){v=v.toLowerCase().trim();document.querySelectorAll('.nav a').forEach(a=>{a.style.display=!v||a.textContent.toLowerCase().includes(v)?'flex':'none'});}

document.addEventListener('DOMContentLoaded',()=>{injectPersistentNav();loadPrefs();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeSidebar();});
window.addEventListener('resize',()=>{if(window.innerWidth>1050&&!document.documentElement.classList.contains('font-large'))closeSidebar();});

if('serviceWorker' in navigator && location.protocol.startsWith('http')){window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));}
