const CACHE='imunomed-av1-v1.2.0';
const FILES=["index.html","01-fundamentos.html","02-celulas.html","03-inata.html","04-inflamacao.html","05-mhc.html","06-t.html","07-b.html","08-vacinas.html","09-b-ampliada.html","10-praticas.html","11-prova.html","styles.css","app.js","manifest.webmanifest","assets/00_visao_geral.png","assets/09_leucograma.png","assets/07_b_anticorpos.png","assets/04_mhc.png","assets/02_tnf_il1_il6.png","assets/08_adesao_leucocitaria.png","assets/05_ativacao_t.png","assets/03_complemento.png","assets/01_cd.png","assets/06_6h_inata.png"];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key.startsWith('imunomed-av1-')&&key!==CACHE).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin) return;
  const dynamic=/\.(?:html|css|js)$/.test(url.pathname)||url.pathname.endsWith('/');
  if(dynamic){
    event.respondWith(
      fetch(event.request)
        .then(response=>{
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put(event.request,copy));
          return response;
        })
        .catch(()=>caches.match(event.request).then(r=>r||caches.match('index.html')))
    );
  }else{
    event.respondWith(
      caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
        const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response;
      }))
    );
  }
});
