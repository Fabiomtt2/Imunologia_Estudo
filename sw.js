const CACHE='imunomed-av1-v1';
const FILES=["index.html", "01-fundamentos.html", "02-celulas.html", "03-inata.html", "04-inflamacao.html", "05-mhc.html", "06-t.html", "07-b.html", "08-vacinas.html", "09-b-ampliada.html", "10-praticas.html", "11-prova.html", "styles.css", "app.js", "manifest.webmanifest", "assets/00_visao_geral.png", "assets/09_leucograma.png", "assets/07_b_anticorpos.png", "assets/04_mhc.png", "assets/02_tnf_il1_il6.png", "assets/08_adesao_leucocitaria.png", "assets/05_ativacao_t.png", "assets/03_complemento.png", "assets/01_cd.png", "assets/06_6h_inata.png"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
