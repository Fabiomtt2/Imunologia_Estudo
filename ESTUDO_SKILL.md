# `/estudo` — especificação reutilizável do Modo Premium de Estudo

> Blueprint de trabalho incluído neste projeto. Ele descreve como transformar uma fonte bruta em um material visual, auditado e orientado à prova. Não é apenas um gerador de flashcards.

## 1. Regra principal
A fonte do usuário é a base autoritativa do curso. Antes de expandir, mapear:
- escopo real da avaliação;
- ordem e terminologia do docente;
- atividades práticas, casos e correções explícitas;
- erratas internas e divergências entre versões.

Conteúdo externo deve ser marcado como **Auditoria externa** ou **Expansão didática**.

## 2. Estrutura obrigatória por tema
1. **Caso/situação concreta** — o problema vem antes da definição quando a fonte permite.
2. **Explicação progressiva** — do intuitivo para o mecanismo técnico.
3. **Diagrama/infográfico** — mostra espacialmente quem age, onde e em que ordem.
4. **Analogia** — útil para memória, sempre com o limite da comparação explicitado quando necessário.
5. **Aplicação clínica/laboratorial** — conecta mecanismo à prática sem transformar o material em protocolo assistencial.
6. **Erro comum** — antecipar o equívoco específico.
7. **Questão comentada** — justificar correta e distratores.
8. **Resumo de alto rendimento** — revisão, não substituto do texto.

## 3. Design system
- fundo escuro suave para leitura prolongada;
- alto contraste e tipografia sem serifa;
- largura de texto limitada para evitar linhas longas;
- **azul = mecanismo**, **verde = clínica**, **vermelho = erro**, **dourado = memória**, **violeta = fonte/auditoria**;
- alternar texto, tabela, imagem, fluxo e questão para reduzir monotonia;
- evitar paredes de texto e grids excessivos de cards.

## 4. Imagens
Gerar imagens apenas quando elas acrescentam compreensão espacial/causal. Priorizar:
- fluxos celulares;
- origem/destino anatômico;
- vias moleculares com convergência;
- comparações MHC I/II;
- recrutamento celular;
- centro germinativo;
- processos que o estudante costuma decorar sem entender.

As imagens devem ser tecnicamente reconhecíveis, mas amigáveis para primeira exposição. Se o infográfico contiver texto, a explicação completa continua no corpo da página.

## 5. Questões
Durante cada capítulo, inserir miniquestões que testem **relação entre peças**, não só definição. Para cada alternativa:
- correta: explicar o mecanismo;
- errada: dizer por que está errada e qual confusão ela representa.

Ao final: teste novo, pontuado, com espelho comentado e questões diferentes das usadas durante a leitura.

## 6. Persona do professor
Inferir somente a partir de evidência do material: atividades propostas, formatos de casos, correções dos slides, gabaritos, termos repetidos e ênfases. Não inventar uma “personalidade”.

## 7. QA obrigatório
Antes de entregar:
- verificar links e assets;
- procurar seções vazias ou truncadas;
- confirmar consistência de cores/tipografia;
- testar quizzes e navegação;
- conferir que o escopo da prova está coberto;
- evitar duplicatas e versões conflitantes;
- registrar versão/commit do artefato final.

## 8. Heartbeats
Em tarefas longas, emitir atualizações curtas em mudanças de fase: auditoria → estrutura → imagens → integração → QA → entrega. Heartbeats não substituem execução e não devem prometer trabalho em segundo plano.
