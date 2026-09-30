const CHAPTERS=['index','01-fundamentos','02-celulas','03-inata','04-inflamacao','05-mhc','06-t','07-b','08-vacinas','09-b-ampliada','10-praticas','11-prova'];
function chapterKey(){return document.body.dataset.chapter||'index'}
function loadPrefs(){
  if(localStorage.getItem('imuno-theme')==='light') document.documentElement.classList.add('light');
  if(localStorage.getItem('imuno-focus')==='1') document.body.classList.add('focus');
  const done=JSON.parse(localStorage.getItem('imuno-done')||'[]');
  const k=chapterKey(); const b=document.getElementById('doneBtn');
  if(b&&done.includes(k)){b.classList.add('done');b.textContent='✓ Capítulo concluído';}
  updateProgress(done);
}
function updateProgress(done){const p=document.querySelector('[data-progress]');const t=document.querySelector('[data-progress-text]');if(!p)return;const count=CHAPTERS.filter(x=>x!=='index'&&done.includes(x)).length;const total=CHAPTERS.length-1;const pct=Math.round(count/total*100);p.style.width=pct+'%';if(t)t.textContent=`${count} de ${total} capítulos • ${pct}%`;}
function toggleDone(){let done=JSON.parse(localStorage.getItem('imuno-done')||'[]');const k=chapterKey();const i=done.indexOf(k);if(i>=0)done.splice(i,1);else done.push(k);localStorage.setItem('imuno-done',JSON.stringify(done));loadPrefs();}
function toggleTheme(){document.documentElement.classList.toggle('light');localStorage.setItem('imuno-theme',document.documentElement.classList.contains('light')?'light':'dark');}
function toggleFocus(){document.body.classList.toggle('focus');localStorage.setItem('imuno-focus',document.body.classList.contains('focus')?'1':'0');}
function changeFont(delta){const cur=parseFloat(getComputedStyle(document.body).fontSize);document.body.style.fontSize=Math.max(14,Math.min(21,cur+delta))+'px';}
function answerQuiz(id,correct){const box=document.getElementById(id);const checked=box.querySelector('input[type=radio]:checked');const fb=box.querySelector('.feedback');fb.style.display='block';if(!checked){fb.textContent='Selecione uma alternativa antes de corrigir.';return;}const exp=box.dataset.explain||'';fb.innerHTML=(checked.value===correct?'✅ <strong>Correta.</strong> ':'❌ <strong>Não é a melhor resposta.</strong> ')+exp;}
function filterNav(v){v=v.toLowerCase().trim();document.querySelectorAll('.nav a').forEach(a=>{a.style.display=!v||a.textContent.toLowerCase().includes(v)?'flex':'none'});}
document.addEventListener('DOMContentLoaded',loadPrefs);
