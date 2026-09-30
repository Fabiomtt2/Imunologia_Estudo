# Imunologia AV1 Premium — v1.2.0

Webapp multipágina de estudo, baseado no material original da disciplina.

## Windows 11 — abra assim

1. **Descompacte a pasta inteira**. Não execute arquivos de dentro do ZIP.
2. Dê duplo clique em **`start.bat`**.

`start.bat` agora faz apenas o que é necessário para estudar: abre `index.html` no navegador padrão. **Não precisa de Python, Node, servidor, PowerShell especial ou instalação adicional.**

Também é válido abrir `index.html` diretamente.

### Se estiver usando PowerShell

O PowerShell exige `./` ou `.\\` para executar um arquivo da pasta atual:

```powershell
.\start.bat
```

Digitar apenas `start.bat` pode não funcionar dependendo da configuração do PowerShell.

## Servidor/PWA — opcional

Somente se quiser testar instalação PWA/service worker, execute:

```powershell
.\start-server.bat
```

Esse modo tenta `py`, `python` ou `python3`. Se Python não estiver disponível ou o servidor falhar, `start.ps1` abre automaticamente o modo direto.

Para **estudar**, o servidor não traz conteúdo adicional e não é necessário.

## Navegação resistente a fonte grande e zoom

A versão 1.2.0 adiciona uma barra inferior permanente:

- **☰ Menu** — abre a navegação de capítulos;
- **← Voltar** — retorna à página anterior;
- **⌂ Início** — volta ao índice;
- **A− / A / A+** — diminui, restaura ou aumenta a fonte.

Quando a fonte fica grande ou o zoom reduz o espaço disponível, a sidebar deixa de comprimir a página e vira uma **gaveta lateral**. Assim o menu continua acessível durante toda a leitura.

O tamanho escolhido é salvo no navegador. `A` restaura a fonte padrão.

## Modo escuro e modo foco

O modo escuro recebeu reforço de contraste em cards, quizzes e painéis. O modo foco pode esconder as barras laterais, mas a barra inferior permanece visível para evitar que o leitor fique preso sem navegação.

## Se você já abriu uma versão antiga pelo servidor/PWA

A v1.2.0 muda o cache e remove versões antigas automaticamente. Se o navegador ainda mostrar o layout anterior:

1. pressione **Ctrl + Shift + R** uma vez; ou
2. feche a aba e abra `start.bat` novamente.

No modo direto (`index.html`), service worker não é usado.

## Conteúdo incluído

- Partes 1–7 do escopo da AV1;
- vacinação básica relevante à Aula 6;
- Parte 16 — ativação B ampliada/centro germinativo;
- Parte 17 — atividades do professor e casos de marcadores;
- prova final de 10 pontos com gabarito comentado;
- 10 infográficos originais;
- `material-base.pdf` para consulta;
- `ESTUDO_SKILL.md` — especificação reutilizável do método `/estudo`;
- `AUDITORIA_E_FONTES.md` — distinção entre material-base, auditoria e expansão.

## Legenda visual

- **Azul:** mecanismo.
- **Verde:** clínica/aplicação.
- **Vermelho:** erro/armadilha.
- **Dourado:** memória/mnemônico.
- **Violeta:** fonte, auditoria ou integração.

### Imagens e infográficos (v1.3.0)
Os infográficos com texto agora ocupam a largura inteira do capítulo. Clique na imagem ou em **🔍 Ampliar infográfico** para abrir o visualizador em tela cheia. Dentro dele, use **Ajustar**, **+**, **−** ou **100% real**. O link **Abrir PNG original** mostra o arquivo-fonte sem reamostragem pelo layout.
