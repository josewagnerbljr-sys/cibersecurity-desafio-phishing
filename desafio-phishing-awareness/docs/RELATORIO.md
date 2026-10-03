# Relatório Técnico — Simulação de Phishing

## 1. Contexto

O projeto foi desenvolvido como atividade acadêmica de cibersegurança com foco em phishing e engenharia social.

A proposta é demonstrar como um formulário de autenticação pode ser utilizado como elemento de uma tentativa de fraude.

## 2. Decisão técnica

A implementação foi feita como aplicação estática local.

A página não possui backend e não implementa captura ou exfiltração de credenciais.

Essa decisão permite estudar o fluxo de phishing sem coletar dados reais.

## 3. Arquitetura

```text
Navegador
   |
   +-- index.html
   |
   +-- css/styles.css
   |
   +-- js/app.js
```

O processamento termina no próprio navegador.

## 4. Fluxo

```text
Usuário
   |
   v
Página de login simulada
   |
   v
Preenchimento com dados fictícios
   |
   v
Submit interceptado pelo JavaScript
   |
   v
Mensagem educativa
   |
   v
Formulário limpo
```

Não existe uma etapa de:

```text
captura -> armazenamento -> exfiltração
```

## 5. Controles implementados

- `preventDefault()` impede submissão normal do formulário.
- Não existe endpoint externo.
- Não existe armazenamento local.
- Não existe cookie criado pelo projeto.
- Não existe envio por `fetch` ou `XMLHttpRequest`.
- O formulário é resetado após a simulação.

## 6. Conclusão

O projeto atende ao objetivo educacional de demonstrar a mecânica visual de uma página de phishing e reforçar a análise defensiva.

O experimento foi limitado intencionalmente para impedir o uso de credenciais reais.
