# Publicação no GitHub (fork já existente)

Este guia assume que você já tem um fork público do desafio (ex.: `cibersecurity-desafio-phishing`) e vai publicar este simulador dentro dele, substituindo o conteúdo original do instrutor pelo conteúdo deste repositório.

## Se você ainda não clonou o fork localmente

```bash
cd "/d/Phishing com o Kali Linux/desafio"
git clone https://github.com/josewagnerbljr-sys/cibersecurity-desafio-phishing.git
cd cibersecurity-desafio-phishing
```

## Se o fork já está clonado localmente

```bash
cd "/d/Phishing com o Kali Linux/desafio/cibersecurity-desafio-phishing"
git pull origin main
```

## Copiar os arquivos deste projeto para dentro do fork

Copie todo o conteúdo de `desafio-phishing-awareness/` (README.md, LICENSE, .gitignore, index.html, css/, js/, docs/, images/) para a raiz da pasta do fork clonado, substituindo o README e quaisquer arquivos de mesmo nome.

## Conferir, adicionar, commitar e enviar

```bash
git status
git add .
git commit -m "feat: adiciona simulador educacional seguro de phishing (sem captura de credenciais)"
git push origin main
```

Se a branch padrão do fork for `master` em vez de `main`, use:

```bash
git push origin master
```

## Conferir no GitHub

```bash
git log --oneline -1
git remote -v
```

Depois, acesse o repositório no navegador e confirme que o README renderiza corretamente, incluindo o diagrama Mermaid e a imagem em `images/`.
