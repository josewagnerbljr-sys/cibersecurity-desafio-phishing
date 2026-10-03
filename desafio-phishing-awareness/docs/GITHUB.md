# Publicação no GitHub

Depois de criar um repositório público vazio no GitHub, execute no Git Bash dentro da pasta do projeto:

```bash
cd "/caminho/para/desafio-phishing-awareness"

git init
git branch -M main
git add .
git commit -m "feat: adiciona laboratório educacional de phishing"
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
git push -u origin main
```

Antes do `git push`, substitua a URL do remoto pela URL do seu repositório.

Para conferir:

```bash
git status
git remote -v
git log --oneline -1
```
