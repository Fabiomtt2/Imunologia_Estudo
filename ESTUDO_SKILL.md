# `/estudo` — Skill Premium de Reconstrução Pedagógica

## Finalidade

Transformar material de estudo bruto — PDF, slides, apostila, DOCX, anotações, casos ou conjunto de fontes — em uma **experiência de aprendizagem completa**, visualmente consistente, tecnicamente fiel às fontes e orientada à compreensão, retenção e avaliação.

Esta skill **não é um gerador de resumos nem de flashcards**. Flashcards, mapas, imagens e quizzes são recursos auxiliares. O núcleo do produto é sempre um **texto educativo organizado, progressivo e suficientemente completo para estudar o conteúdo**.

---

## 1. Contrato de entrega

Uma execução `/estudo` só é considerada concluída quando o produto final contém, conforme aplicável:

1. **Auditoria das fontes** e definição explícita do escopo.
2. **Arquitetura de estudo** coerente: capítulos, dependências e rota recomendada.
3. **Texto didático principal**, preservando profundidade adequada ao nível do usuário.
4. **Diagramas, ilustrações e analogias integrados ao texto**, não soltos.
5. **Aplicação prática/clínica** quando fizer parte do curso.
6. **Erros comuns e armadilhas** derivados das fontes ou claramente marcados como expansão.
7. **Questões durante a leitura**, com justificativa da correta e das erradas.
8. **Avaliação final nova**, pontuada e comentada.
9. **QA estrutural, textual e visual** antes da entrega.
10. **Uma única versão final identificável**, sem uma sequência confusa de artefatos incompletos.

Quando o volume, a interatividade ou a quantidade de imagens tornar um PDF inadequado, **preferir webapp multipágina**.

---

## 2. Fonte primeiro: regra de autoridade

### 2.1 A fonte do usuário é a base do curso
Antes de escrever qualquer explicação, mapear:

- escopo real da avaliação;
- ordem e terminologia do docente;
- objetivos explícitos ou implícitos;
- atividades práticas;
- casos clínicos;
- questões e gabaritos existentes;
- correções explícitas do professor;
- repetições que sinalizam importância;
- divergências entre versões de aula;
- erratas internas;
- bibliografia indicada pela disciplina.

### 2.2 Três camadas de conteúdo
Todo conteúdo novo deve pertencer claramente a uma destas categorias:

**Fonte da disciplina**  
Aquilo que está sustentado pelo material fornecido.

**Auditoria externa**  
Correção ou verificação feita com bibliografia/referência externa. Deve ser sinalizada quando divergir, qualificar ou corrigir a fonte.

**Expansão didática**  
Explicação adicional, analogia, contexto, exemplo ou ponte conceitual usada para ensinar melhor. Não deve ser apresentada como se estivesse originalmente no material.

### 2.3 Não completar silenciosamente lacunas
Se a fonte não sustenta uma afirmação, não inventar o conteúdo para “fechar o capítulo”. Pode-se pesquisar/expandir se o usuário autorizou, mas a origem deve ficar visível.

---

## 3. Planejamento antes da produção

Antes de gerar páginas ou imagens, construir internamente um **mapa do curso**:

### 3.1 Matriz de capítulos
Para cada capítulo registrar:

- objetivo pedagógico;
- pré-requisitos;
- conceitos centrais;
- conceitos difíceis;
- mecanismos/fluxos;
- tabelas ou comparações;
- aplicação prática;
- provável formato de cobrança;
- erro clássico;
- necessidade de ilustração;
- questão de recuperação ativa.

### 3.2 Prioridade cognitiva
Classificar conteúdo em:

- **Fundação** — sem isso, o restante não faz sentido;
- **Mecanismo** — sequência causal que deve ser entendida;
- **Memorização necessária** — nomes, marcadores, moléculas, etapas;
- **Integração** — conecta capítulos;
- **Prova** — alta probabilidade de cobrança;
- **Enriquecimento** — útil, mas não deve sufocar o núcleo.

### 3.3 Escolha do artefato
Usar **PDF/documento** quando o conteúdo for essencialmente linear e imprimível.

Usar **webapp** quando houver uma ou mais destas condições:

- muitos capítulos;
- várias imagens e diagramas;
- necessidade de navegação não linear;
- quizzes/checkpoints;
- modo foco/tema/tamanho de fonte;
- progresso local;
- conteúdo extensível;
- necessidade de diminuir fadiga visual.

---

## 4. Estrutura obrigatória de cada capítulo

Não transformar o capítulo em grade de cartões. A estrutura preferida é:

### A. Abertura concreta
Começar por um paciente, exame, situação, pergunta ou problema quando a fonte permitir.

### B. Orientação
Responder em poucas linhas:

- o que você vai aprender;
- por que isso importa;
- com qual capítulo anterior isso conversa.

### C. Explicação progressiva
Texto corrido curto em blocos, indo do intuitivo ao técnico.

O texto deve ser a **fonte principal de compreensão**. Cards não substituem parágrafos explicativos.

### D. Mecanismo passo a passo
Quando houver fluxo, mostrar:

**gatilho → reconhecimento → sinalização → efetor → resultado**.

### E. Figura/diagrama integrado
A figura deve responder uma pergunta concreta, por exemplo:

- onde isso acontece?
- quem encontra quem?
- qual estrutura liga em qual?
- em que ordem a célula se desloca?
- onde as vias convergem?

Logo antes ou depois da imagem, incluir texto que ensine **como lê-la**.

### F. Analogia útil
Toda analogia deve ter:

1. correspondência explícita entre metáfora e mecanismo;
2. objetivo de memorização;
3. **limite da analogia**, quando houver risco de interpretação literal errada.

### G. Aplicação clínica/laboratorial
Caso a disciplina utilize casos, correlacionar mecanismo com sinais, exames ou cenário clínico.

Não transformar material de estudo em protocolo assistencial.

### H. Onde se erra
Antecipar exatamente o erro que o estudante tende a cometer.

### I. Questão comentada
Questão curta imediatamente após o conceito.

Para cada alternativa:

- correta → explicar o mecanismo;
- errada → dizer por que está errada;
- se possível → nomear a confusão que o distrator explora.

### J. Fechamento
Resumo de alto rendimento com poucas linhas, sem substituir o capítulo.

---

## 5. Sistema visual premium

### 5.1 Design é função pedagógica
Design não é decoração. Cada elemento visual deve ajudar a:

- orientar atenção;
- reduzir carga cognitiva;
- mostrar hierarquia;
- destacar causalidade;
- separar fonte de correção;
- facilitar revisão.

### 5.2 Identidade visual consistente
Manter a mesma gramática ao longo de todo o produto.

Padrão preferencial:

- **azul** → mecanismo / sequência causal;
- **verde** → clínica / aplicação;
- **vermelho** → erro / armadilha / correção;
- **dourado** → memória / analogia / regra de ouro;
- **violeta** → fonte / auditoria / integração.

### 5.3 Tipografia
- fonte sem serifa de alta legibilidade;
- títulos fortes e claramente hierárquicos;
- corpo confortável para leitura prolongada;
- evitar linhas excessivamente longas;
- espaçamento vertical generoso;
- negrito apenas para palavras-chave.

### 5.4 Densidade de página
Alternar deliberadamente:

- texto;
- tabela;
- figura;
- timeline;
- callout;
- questão;
- caso.

Evitar tanto o **paredão textual** quanto o extremo oposto: uma página composta apenas de cards rasos.

---

## 6. Estratégia de ilustração

### 6.1 Quando gerar imagem
Priorizar imagens para processos que dependem de visão espacial ou causal:

- origem/destino de células;
- tráfego entre tecidos;
- cascatas;
- receptores e ligantes;
- estruturas anatômicas;
- mecanismos com múltiplos compartimentos;
- comparação de duas vias;
- fluxos que o aluno normalmente decora sem entender.

### 6.2 Tipos de imagem
Escolher entre:

- infográfico didático;
- diagrama técnico;
- metáfora ilustrativa;
- corte anatômico;
- simulação 3D conceitual;
- sequência temporal;
- comparação lado a lado.

### 6.3 Relação imagem–texto
Toda imagem deve ter ao menos um destes componentes no corpo do capítulo:

- “Como ler esta figura”;
- “O que observar”;
- “Regra que a figura representa”;
- “Onde a analogia termina”.

A imagem nunca deve ser a única fonte de um detalhe técnico importante.

### 6.4 Texto dentro de imagens
Como imagens geradas podem introduzir pequenas imprecisões tipográficas ou científicas:

- usar a imagem como mapa visual;
- repetir a regra técnica correta no HTML/documento;
- não depender de texto minúsculo embutido para conteúdo avaliável.

---

## 7. Persona e previsão de prova

Inferir o estilo de avaliação **somente a partir das evidências das fontes**:

- atividades propostas;
- casos repetidos;
- termos que o docente corrige;
- perguntas existentes;
- gabaritos;
- figuras destacadas;
- comparações que ocupam muito espaço de aula;
- exercícios em grupo.

Não inventar traços pessoais do docente.

A questão “provável” deve imitar o **formato cognitivo** observado — por exemplo, ordenar eventos, interpretar caso, reconhecer mecanismo, escolher relação causal — não fingir conhecer a prova futura.

---

## 8. Avaliação e recuperação ativa

### 8.1 Durante a leitura
Inserir checkpoints ao fim de unidades conceituais, não apenas no final do capítulo.

### 8.2 Tipos de pergunta
Misturar:

- identificação;
- sequência;
- associação molécula–função;
- mecanismo;
- comparação;
- aplicação clínica;
- interpretação laboratorial;
- “qual erro está nesta afirmação?”.

### 8.3 Prova final
A prova final deve:

- conter questões diferentes das questões intermediárias;
- cobrir proporcionalmente o escopo;
- fornecer pontuação;
- ter espelho de gabarito;
- justificar correta e distratores;
- privilegiar integração, não trivia isolada.

---

## 9. Arquitetura de webapp de estudo

Quando o produto final for um webapp:

### 9.1 Multipágina por padrão em materiais longos
Um capítulo principal por página reduz fadiga e facilita retomada.

### 9.2 Componentes recomendados
- sidebar persistente;
- progresso local;
- busca de capítulos;
- modo claro/escuro;
- modo foco;
- ajuste de tamanho de fonte;
- navegação anterior/próximo;
- índice interno da página;
- questões interativas;
- feedback imediato;
- funcionamento sem internet depois de baixado.

### 9.3 Abertura local
O conteúdo essencial deve funcionar abrindo `index.html` diretamente sempre que tecnicamente possível.

Servidor local deve ser **opcional**, usado apenas para recursos que exigem HTTP/localhost, como service worker/PWA.

### 9.4 Portabilidade
Entregar launchers simples:

- Windows direto;
- Windows servidor com fallback sem dependências externas;
- Linux/macOS quando relevante.

---

## 10. Protocolo de retomada após interrupção

Antes de continuar uma tarefa longa interrompida:

1. localizar o artefato já existente;
2. verificar arquivos, timestamps e histórico de versão;
3. verificar se há processo ainda rodando;
4. identificar a última fase realmente concluída;
5. não reconstruir o que já existe;
6. retomar do último checkpoint verificável;
7. registrar no heartbeat o que foi recuperado.

Se houver Git, verificar `status` e `log` antes de editar.

Se não houver Git e o projeto for grande, inicializar versionamento **no mesmo diretório**, sem criar uma cópia paralela do projeto.

---

## 11. Controle de versões e anti-duplicação

### Regras
- manter um único diretório de trabalho principal;
- não criar `final_v2_v3_REAL_final`;
- usar Git/CHANGELOG/VERSION para evolução;
- só empacotar ZIP após QA final;
- se uma versão anterior for substituída, deixar claro qual é a vigente;
- não apresentar artefato incompleto como entrega final.

### Commits sugeridos
Separar por mudanças significativas:

- `audit source and define scope`
- `build chapter architecture`
- `integrate diagrams and clinical cases`
- `add interactive assessment`
- `finalize qa and packaging`

---

## 12. QA obrigatório antes da entrega

### Conteúdo
- escopo coberto?
- alguma seção prometida ficou ausente?
- termos da disciplina preservados?
- correções externas claramente marcadas?
- imagens coerentes com o texto?
- questões cobrem o conteúdo estudado?

### Estrutura
- links internos funcionando?
- assets presentes?
- páginas vazias/truncadas?
- navegação anterior/próximo correta?
- nenhum capítulo duplicado?

### Visual
- contraste adequado?
- tipografia consistente?
- imagens sem corte?
- conteúdo legível em desktop e tela menor?
- caixas coloridas usam a mesma semântica em todas as páginas?

### Interatividade
- quizzes corrigem corretamente?
- progresso salva?
- tema/modo foco/fonte funcionam?
- modo direto funciona?
- launcher servidor funciona ou possui fallback?

### Entrega
- README testado?
- versão registrada?
- commit registrado?
- ZIP único gerado somente depois do QA?

---

## 13. Heartbeat / outputs durante tarefas longas

Heartbeats devem ser curtos, verificáveis e vinculados a mudança real de fase.

Exemplos adequados:

- `Heartbeat — auditoria concluída; escopo confirmado.`
- `Heartbeat — arquitetura de capítulos fechada; iniciando diagramas.`
- `Heartbeat — imagens integradas; entrando no QA estrutural.`
- `Heartbeat — links e assets validados; iniciando empacotamento.`

Evitar mensagens genéricas que apenas digam que o trabalho “continua”.

Frequência aproximada solicitada pelo usuário: **a cada 1–2 minutos em execução longa**, ou a cada mudança estrutural relevante quando a ferramenta não permitir temporização exata.

---

## 14. Anti-padrões proibidos

Uma execução `/estudo` não deve:

- reduzir uma apostila extensa a vinte cartões;
- substituir texto didático por infográficos;
- despejar o PDF quase sem edição;
- criar analogias sem explicar o limite;
- apresentar pesquisa externa como conteúdo do professor;
- acrescentar “curiosidades” que afastam do escopo;
- usar imagens bonitas sem função pedagógica;
- repetir o mesmo layout de card em todas as seções;
- gerar questões sem explicar distratores;
- entregar múltiplas versões conflitantes;
- reiniciar um projeto recuperável por causa de uma trava de QA;
- confundir conclusão de geração com conclusão de auditoria.

---

## 15. Definição de “Premium” nesta skill

“Premium” não significa simplesmente mais cor ou mais imagens.

O produto é premium quando combina:

**rigor da fonte + organização editorial + design funcional + ilustrações úteis + texto agradável + recuperação ativa + aplicação prática + QA + portabilidade.**

A métrica final é simples: o estudante deve conseguir **entender primeiro, lembrar depois e reconhecer o mecanismo em uma questão nova**.
