# Changelog

## 1.1.0 — Windows launcher + `/estudo` refinada
- `start.bat` refeito para Windows 11.
- `start.ps1` adicionado com detecção de porta e fallback PowerShell/.NET sem Python.
- `ABRIR-DIRETO.bat` adicionado como rota padrão mais simples.
- README corrigido: `index.html` pode ser aberto diretamente; servidor é opcional para PWA/service worker.
- `/estudo` reestruturada com planejamento, autoridade das fontes, arquitetura de capítulos, estratégia de ilustração, recuperação após interrupções, QA, versionamento e anti-duplicação.

## 1.0.0 — Premium multipage
- Webapp multipágina consolidado.
- Texto didático associado aos diagramas.
- Quizzes intermediários e prova final.
- 10 infográficos integrados.
- Auditoria e fontes documentadas.

## 1.2.0 — navegação resiliente e acessibilidade
- Barra inferior persistente com Menu, Voltar, Início e controles de fonte.
- Sidebar vira gaveta em viewport estreito ou fonte interna grande.
- Fonte passa a ser persistida e possui restauração em um toque.
- Layout de fonte grande migra para uma coluna para evitar compressão.
- Contraste do modo escuro reforçado em cards, quizzes e painéis.
- `/estudo` passa a exigir QA em múltiplas escalas de fonte/zoom e rota de fuga permanente.
- `start.bat` simplificado: agora abre o webapp diretamente e não depende de Python.
- `start-server.bat` separado para PWA/servidor opcional.
- Service worker atualizado para cache v1.2.0, remoção automática de caches antigos e network-first para HTML/CSS/JS.

## 1.3.0 — Legibilidade dos infográficos
- Corrige infográficos textuais comprimidos em meia coluna.
- Figuras pedagógicas dentro de capítulos passam a ocupar a largura integral de leitura.
- Adiciona visualizador em tela cheia preservando a resolução nativa do PNG.
- Controles: Ajustar, zoom +/−, 100% real e abertura do PNG original.
- Clique direto na imagem também abre o visualizador.
- Regra adicionada à `/estudo`: nenhum infográfico com texto pode depender de redução abaixo do limiar de legibilidade.
