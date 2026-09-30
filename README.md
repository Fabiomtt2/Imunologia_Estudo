# Imunologia AV1 Premium

Webapp multipágina de estudo, baseado no material original da disciplina.

## Abrir no Windows 11 — método mais simples

1. **Descompacte a pasta inteira**. Não abra o `index.html` de dentro do ZIP.
2. Dê duplo clique em **`ABRIR-DIRETO.bat`** ou diretamente em **`index.html`**.

Esse modo já permite estudar normalmente: texto, imagens, navegação, quizzes, tema, modo foco, ajuste de fonte e progresso local.

## Modo servidor / PWA — opcional

Use `start.bat` apenas se quiser o comportamento de aplicativo web local (service worker/cache PWA e instalação mais previsível).

- Dê duplo clique em **`start.bat`**; ou
- no PowerShell, dentro da pasta, rode:

```powershell
.\start.bat
```

O launcher novo **não exige Python**. Ele tenta `py`, `python` ou `python3`; se nenhum existir, usa um servidor HTTP implementado em PowerShell/.NET.

### Se o `start.bat` não abrir

Execute diretamente:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\start.ps1
```

O navegador só é aberto depois de o servidor responder. Se a porta 8000 estiver ocupada, o launcher procura automaticamente uma porta livre até 8099.

## Por que eu havia recomendado não abrir apenas pelo `index.html`?

Não porque o conteúdo dependa de servidor. A recomendação anterior era apenas para ativar o **service worker/PWA**, que navegadores bloqueiam em `file://`. Para estudar, abrir `index.html` diretamente é válido e agora é o método principal recomendado.

## O que está incluído

- Partes 1–7 do escopo da AV1;
- vacinação básica relevante à Aula 6;
- Parte 16 (ativação B ampliada/centro germinativo);
- Parte 17 (atividades do professor e casos de marcadores);
- prova final de 10 pontos com gabarito comentado;
- 10 infográficos originais;
- `material-base.pdf` para consulta;
- `ESTUDO_SKILL.md` como especificação reutilizável do método `/estudo`;
- launchers Windows direto e servidor (`ABRIR-DIRETO.bat`, `start.bat`, `start.ps1`).

## Legenda visual

- **Azul:** mecanismo.
- **Verde:** clínica/aplicação.
- **Vermelho:** erro/armadilha.
- **Dourado:** memória/mnemônico.
- **Violeta:** fonte, auditoria ou integração.
